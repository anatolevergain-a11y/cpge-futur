---
title: 'Exercice 2 : Requêtes SQL complexes'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse et Optimisation de Requêtes SQL Complexes en Environnement Distribué

**Filière :** MP / MPI  
**Matière :** Informatique - Bases de données  
**Thème :** Modélisation relationnelle, Algèbre relationnelle, Requêtes SQL complexes et Complexité algorithmique.

---

## 1. Énoncé du Problème

Dans le cadre de la modernisation de son système d'information logistique, une entreprise internationale gère un catalogue de produits, des entrepôts répartis mondialement, ainsi que des flux de commandes. On souhaite concevoir et optimiser un module d'analyse de données capable de traiter des volumes importants (plus de $\text{10}^7$ lignes par table).

Le schéma relationnel de la base de données est le suivant (les clés primaires sont soulignées, les clés étrangères sont préfixées par un dièse `#`) :

*   `Produit` ($\underline{\text{id\_produit}}$, `nom`, `categorie`, `prix_unitaire`, `poids`)
*   `Entrepot` ($\underline{\text{id\_entrepot}}$, `nom`, `pays`, `capacite_max`)
*   `Stock` ($\underline{\text{#id_produit, #id_entrepot}}$, `quantite`)
*   `Commande` ($\underline{\text{id_commande}}$, `#id_client`, `date_commande`, `pays_destination`)
*   `LigneCommande` ($\underline{\text{#id_commande, #id_produit}}$, `quantite_commandée`, `prix_vente_effectif`)

### Ordres de grandeur et contraintes physiques
*   La table `LigneCommande` contient $|\text{LC}| \approx 5 \times 10^7$ tuples.
*   La table `Produit` contient $|\text{P}| \approx 10^5$ tuples.
*   La table `Stock` contient $|\text{S}| \approx 2 \times 10^6$ tuples.
*   Les pages disque ont une taille standard $B = 8\text{ Ko}$.
*   L'indexation par défaut repose sur les clés primaires (arbres $B+$).

---

## 2. Questions

### Partie I : Modélisation et Algèbre Relationnelle
1. Exprimer en algèbre relationnelle (avec les opérateurs $\sigma, \pi, \bowtie, \times, \setminus$, etc.) la requête suivante : *« Lister les noms des produits de la catégorie 'Électronique' qui ne sont stockés dans aucun entrepôt situé en 'France' »*.
2. Proposer une estimation théorique du coût (en nombre d'accès disque) d'une jointure par boucle imbriquée simple entre `Produit` et `Stock` si aucun index n'est disponible.

### Partie II : Requêtes SQL Complexes
3. Écrire une requête SQL standard (SQL:1999+) qui retourne, pour chaque catégorie de produits, le nom du produit le plus cher (en termes de `prix_unitaire`). En cas d'égalité de prix, tous les produits ex-aequo devront être affichés. Utilisez les fonctions de fenêtrage (*window functions*).
4. Écrire une requête SQL permettant d'identifier les *« Entrepôts critiques »*, c'est-à-dire les entrepôts dont le taux d'occupation global (somme des quantités en stock par rapport à la `capacite_max` de l'entrepôt pondérée par le poids des produits) dépasse $85\%$.

### Partie III : Analyse critique et Optimisation
5. Soit la requête non optimisée cherchant le chiffre d'affaires total par pays de destination pour l'année 2023. Expliquer pourquoi l'utilisation de sous-requêtes corélées dans le `SELECT` serait désastreuse en termes de complexité pour $5 \times 10^7$ lignes. Proposer une écriture optimale avec les clauses de regroupement.
6. **Esquisse d'analyse critique :** Dans un système distribué où la table `LigneCommande` est fragmentée horizontalement par pays, discutez de la limite du modèle relationnel classique ACID face à la scalabilité horizontale (théorème CAP).

---

## 3. Pistes et Indications

*   **Q1 :** Décomposez le problème en deux étapes : d'une part les produits électroniques, d'autre part les produits présents dans un entrepôt français, puis effectuez la différence ensembliste.
*   **Q3 :** Pensez à la fonction de classement `RANK()` ou `DENSE_RANK()` combinée avec `PARTITION BY`.
*   **Q5 :** Une sous-requête corélée évalue la condition pour *chaque* tuple, menant généralement à une complexité en $\mathcal{O}(N^2)$. Un regroupement (`GROUP BY`) bien indexé ramène le coût à $\mathcal{O}(N \log N)$ ou $\mathcal{O}(N)$.

---

## 4. Corrigé Pas à Pas

### Partie I : Modélisation et Algèbre Relationnelle

**1. Expression en algèbre relationnelle :**
Soit $E_1$ l'ensemble des produits électroniques, et $E_2$ les produits stockés en France.
*   $E_1 = \sigma_{\text{categorie} = \text{'Électronique'}}(\text{Produit})$
*   $E_{stock\_fr} = \pi_{\#\text{id\_produit}}(\text{Stock} \bowtie_{\text{Stock}.\#\text{id\_entrepot} = \text{Entrepot}.\text{id\_entrepot}} \sigma_{\text{pays} = \text{'France'}}(\text{Entrepot}))$
*   Le résultat final est la projection sur le nom :
    $\pi_{\text{nom}} \left( E_1 \setminus (E_1 \bowtie_{\text{id\_produit} = \#\text{id\_produit}} E_{stock\_fr}) \right)$
    *(Alternative plus directe avec l'anti-jointure $\ltimes$) :* $\pi_{\text{nom}} \left( E_1 \ \overline{\bowtie}_{\text{id\_produit}} \ E_{stock\_fr} \right)$.

**2. Coût de la boucle imbriquée simple :**
Soit $T(R)$ le nombre de pages de la relation $R$. Sans index, pour chaque tuple de `Produit` (la relation externe), on doit parcourir toute la relation `Stock` (relation interne). 
Le coût en nombre de blocs accédés est :
$$\text{Coût} = T(\text{Produit}) + |\text{Produit}| \times T(\text{Stock})$$
C'est prohibitif pour $|\text{Produit}| = 10^5$ et $T(\text{Stock})$ grand. Les SGBD modernes utilisent des jointures par hachage (*Hash Join*) ou par fusion triée (*Merge Join*), ramenant la complexité à $\mathcal{O}(T(P) + T(S))$.

---

### Partie II : Requêtes SQL Complexes

**3. Produit le plus cher par catégorie (avec fenêtrage) :**
```sql
WITH ClassementPrix AS (
    SELECT 
        nom,
        categorie,
        prix_unitaire,
        RANK() OVER (PARTITION BY categorie ORDER BY prix_unitaire DESC) as rk
    FROM Produit
)
SELECT categorie, nom, prix_unitaire
FROM ClassementPrix
WHERE rk = 1;
```
*Note concours :* L'utilisation de `RANK()` permet de gérer les ex-aequo (contrairement à `ROW_NUMBER()`).

**4. Entrepôts critiques :**
```sql
SELECT e.id_entrepot, e.nom,
       SUM(s.quantite * p.poids) AS charge_actuelle,
       e.capacite_max
FROM Entrepot e
JOIN Stock s ON e.id_entrepot = s.id_entrepot
JOIN Produit p ON s.id_produit = p.id_produit
GROUP BY e.id_entrepot, e.nom, e.capacite_max
HAVING SUM(s.quantite * p.poids) > 0.85 * e.capacite_max;
```

---

### Partie III : Analyse critique et Optimisation

**5. Évite la sous-requête corélée :**
Une sous-requête corélée exécutée dans le `SELECT` pour chaque ligne de commande va chercher un agrégat sur la table entière ou filtrée, ce qui induit une complexité temporelle désastreuse en $\mathcal{O}(|\text{LC}|^2)$ dans le pire des cas.

Forme optimale par agrégation directe :
```sql
SELECT c.pays_destination, 
       SUM(lc.quantite_commandée * lc.prix_vente_effectif) AS chiffre_affaires
FROM Commande c
JOIN LigneCommande lc ON c.id_commande = lc.id_commande
WHERE c.date_commande >= '2023-01-01' AND c.date_commande < '2024-01-01'
GROUP BY c.pays_destination;
```
Analyse: * Cette requête permet au SGBD d'utiliser un plan d'exécution linéaire (après indexation de `date_commande`), ramenant la complexité à $\mathcal{O}(N \log N)$ liée au tri pour le regroupement (*Hash Aggregate* ou *Stream Aggregate*).

**6. Analyse critique et Limites du modèle :**
Dans un contexte distribué à grande échelle ($> 10^7$ lignes), la fragmentation de `LigneCommande` par pays entre plusieurs nœuds pose le problème du **Théorème CAP** (Consistency, Availability, Partition tolerance). 
*   Si le système privilégie la cohérence forte (ACID traditionnel), les transactions réparties nécessitent des protocoles de verrouillage en deux phases (2PC) très coûteux en latence réseau.
*   Pour des volumes massifs, les architectures se tournent vers des bases de données NoSQL ou des moteurs de type *NewSQL* (base distribuée avec horodatage vectoriel type *TrueTime*), acceptant parfois une cohérence éventuelle (*eventual consistency*) pour garantir la disponibilité sous partition réseau.