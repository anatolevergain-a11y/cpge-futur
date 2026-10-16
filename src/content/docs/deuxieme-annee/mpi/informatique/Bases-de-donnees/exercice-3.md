---
title: 'Exercice 1 : SQL avancé'
description: 'Problème d entraînement type concours.'
---

# Problème Guidé : Analyse et Optimisation de Requêtes en SQL Avancé

En tant qu'examinateur en classes préparatoires (filière MPI), j'attends des candidats non seulement une maîtrise syntaxique du SQL, mais aussi une compréhension fine de la sémantique des requêtes complexes (sous-requêtes, agrégations, fonctions de fenêtrage) et de leur complexité algorithmique sous-jacente.

---

## I. Présentation du Schéma Relationnel

On considère une base de données relationnelle modélisant le système d'information d'une plateforme de commerce en ligne. Le schéma est constitué des trois relations suivantes :

1. $\text{Clients}(\underline{\text{id\_client}}, \text{nom}, \text{ville}, \text{date\_inscription})$
2. $\text{Produits}(\underline{\text{id\_produit}}, \text{nom\_produit}, \text{categorie}, \text{prix})$
3. $\text{Commandes}(\underline{\text{id\_commande}}, \text{id\_client*}, \text{id\_produit*}, \text{quantite}, \text{date\_commande})$

*Notes de modélisation :*
* Les attributs soulignés $(\underline{\text{id\_...}})$ désignent les clés primaires.
* Les attributs suivis d'une étoile $(\text{id\_...*})$ désignent des clés étrangères référençant les tables correspondantes.
* Le domaine de $\text{quantite}$ est $\mathbb{N}^*$, et celui de $\text{prix}$ est $\mathbb{R}_+^*$.

---

## II. Questions Préliminaires (Extraction et Agrégation)

### Question 1
Écrire une requête SQL permettant d'afficher le nom des clients ainsi que le montant total des achats qu'ils ont effectués. On ne souhaite afficher que les clients dont le montant total dépasse $1000\text{ }\text{€}$.

#### Corrigé pas à pas :
Pour répondre à cette question, il est nécessaire de :
1. Joindre les tables $\text{Clients}$ et $\text{Commandes}$ (via $\text{id\_client}$), puis la table $\text{Produits}$ (via $\text{id\_produit}$) pour accéder au prix unitaire.
2. Calculer le montant par ligne de commande ($\text{quantite} \times \text{prix}$).
3. Grouper par client pour sommer ces montants.
4. Filtrer les agrégats avec la clause $\text{HAVING}$.

```sql
SELECT 
    c.nom,
    SUM(co.quantite * p.prix) AS montant_total
FROM 
    Clients c
JOIN 
    Commandes co ON c.id_client = co.id_client
JOIN 
    Produits p ON co.id_produit = p.id_produit
GROUP BY 
    c.id_client, c.nom
HAVING 
    SUM(co.quantite * p.prix) > 1000.0;
```

---

## III. Problème Principal : Analyse Avancée et Fonctions de Fenêtrage

### Question 2
On souhaite identifier, pour chaque catégorie de produits, le produit le plus cher. En cas d'égalité de prix, tous les produits concernés doivent être affichés. 

Donner une solution n'utilisant *pas* de fonctions de fenêtrage (approche classique par sous-requête), puis une solution utilisant les fonctions de fenêtrage (recommandée en MPI pour l'optimisation).

#### Corrigé pas à pas :

**Méthode 1 : Sous-requête corrélée avec $\text{NOT EXISTS}$ ou $\text{IN}$**
L'idée est de sélectionner les produits dont le prix est égal au maximum de leur catégorie.

```sql
SELECT 
    p1.nom_produit,
    p1.categorie,
    p1.prix
FROM 
    Produits p1
WHERE 
    p1.prix = (
        SELECT MAX(p2.prix)
        FROM Produits p2
        WHERE p2.categorie = p1.categorie
    );
```

**Méthode 2 : Fonctions de fenêtrage ($\text{RANK}$ ou $\text{DENSE\_RANK}$)**
L'utilisation de la fonction $\text{RANK}()$ permet d'attribuer un rang aux produits par catégorie, triés par prix décroissant.

```sql
WITH ProduitsClasses AS (
    SELECT 
        nom_produit,
        categorie,
        prix,
        RANK() OVER (PARTITION BY categorie ORDER BY prix DESC) as rk
    FROM 
        Produits
)
SELECT 
    nom_produit,
    categorie,
    prix
FROM 
    ProduitsClasses
WHERE 
    rk = 1;
```

---

### Question 3
Écrire une requête SQL qui retourne, pour chaque client ayant effectué au moins une commande, la date de sa première commande et la date de sa dernière commande, ainsi que l'écart en jours entre ces deux commandes.

#### Corrigé pas à pas :
On utilise les fonctions d'agrégation $\text{MIN}$ et $\text{MAX}$ sur la date de commande. Pour calculer l'écart en jours, la syntaxe dépend légèrement du SGBD (on suppose ici une fonction standard type $\text{DATEDIFF}$ ou soustraction directe de dates selon le moteur SQL).

```sql
SELECT 
    c.nom,
    MIN(co.date_commande) AS premiere_commande,
    MAX(co.date_commande) AS derniere_commande,
    MAX(co.date_commande) - MIN(co.date_commande) AS ecart_jours
FROM 
    Clients c
JOIN 
    Commandes co ON c.id_client = co.id_client
GROUP BY 
    c.id_client, c.nom;
```

---

## IV. Analyse Critique des Résultats et Complexité

En entretien ou à l'écrit de l'épreuve d'informatique MPI, le jury attend un regard critique sur les performances des requêtes proposées.

1. **Coût des jointures et indexation :** 
   * Pour la Question 1, la requête effectue une triple jointure. Sans index sur les clés étrangères ($\text{id\_client}$ et $\text{id\_produit}$ dans la table $\text{Commandes}$), le SGBD risque d'effectuer des balayages de tables complets (*Full Table Scans*), menant à une complexité temporelle en $\mathcal{O}(N \times M)$ où $N$ et $M$ sont les tailles des tables $\text{Clients}$ et $\text{Commandes}$.
   * La mise en place d'arbres B-Trees sur les clés étrangères réduit cette complexité à $\mathcal{O}(N \log M)$ via des jointures par index (*Index Nested Loop Joins*).

2. **Comparaison des méthodes de la Question 2 :**
   * La **Méthode 1** (sous-requête corrélée) évalue, pour chaque ligne, le maximum de la catégorie. Si elle est mal optimisée par le planificateur de requêtes, sa complexité peut atteindre $\mathcal{O}(P^2)$ (où $P$ est le nombre de produits).
   * La **Méthode 2** (avec $\text{RANK}$ et CTE) ne nécessite qu'un tri global ou partiel par partition, ramenant la complexité algorithmique à $\mathcal{O}(P \log P)$, ce qui est nettement plus efficace sur de grands volumes de données.