---
title: 'Exercice 1 : Requêtes SELECT, WHERE, JOIN, GROUP BY'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

En tant qu'examinateur, j'attends des candidats en MPSI une maîtrise parfaite des opérations relationnelles fondamentales, traduites en langage SQL. Cet exercice s'articule autour d'un système de gestion de base de données pour une bibliothèque universitaire.

Le schéma relationnel est constitué de trois tables :

1. **`Livre`** (contenant les ouvrages) :
   - `id_livre` (INTEGER, Clé primaire)
   - `titre` (VARCHAR)
   - `auteur` (VARCHAR)
   - `annee` (INTEGER)
   - `domaine` (VARCHAR, ex : `'Informatique'`, `'Mathematiques'`, etc.)

2. **`Abonne`** (contenant les étudiants et personnels inscrits) :
   - `id_abonne` (INTEGER, Clé primaire)
   - `nom` (VARCHAR)
   - `prenom` (VARCHAR)
   - `departement` (VARCHAR, ex : `'MPSI'`, `'MP'`, `'PSI'`)

3. **`Emprunt`** (contenant l'historique et les prêts en cours) :
   - `id_emprunt` (INTEGER, Clé primaire)
   - `id_livre` (INTEGER, Clé étrangère référant `Livre(id_livre)`)
   - `id_abonne` (INTEGER, Clé étrangère référant `Abonne(id_abonne)`)
   - `date_emprunt` (DATE)
   - `rendu` (BOOLEAN : `TRUE` si le livre a été restitué, `FALSE` sinon)

---

### ❓ Questions progressives

1. **Question 1 (Extraction simple) :** Écrire une requête SQL qui retourne le titre et l'année de tous les livres du domaine `'Informatique'` publiés après l'année $2015$ (incluse), triés par ordre chronologique inverse, puis par titre alphabétique.
2. **Question 2 (Jointure et filtrage) :** Écrire une requête SQL qui affiche les noms et prénoms des abonnés du département `'MPSI'` qui ont emprunté au moins un livre (rendu ou non). On veillera à éviter les doublons dans le résultat.
3. **Question 3 (Agrégation et regroupement) :** Écrire une requête SQL permettant d'obtenir, pour chaque domaine, le nombre total de livres référencés dans la base. Le résultat comportera deux colonnes : `domaine` et `nb_livres`.
4. **Question 4 (Jointure complexe et agrégation avec condition) :** Écrire une requête SQL qui retourne le nom et le prénom des abonnés ayant emprunté **strictement plus de $3$ livres** au total.

---

### 💡 Pistes & Indications méthodologiques

* **Pour la Question 1 :** Pensez à l'utilisation conjointe de `WHERE` avec des opérateurs logiques (`AND`), ainsi qu'à la clause `ORDER BY ... DESC, ... ASC`.
* **Pour la Question 2 :** Une jointure (`JOIN`) est nécessaire pour lier les abonnés à leurs emprunts. L'opérateur `DISTINCT` est souvent indispensable lorsqu'un abonné effectue plusieurs actions correspondantes.
* **Pour la Question 3 :** L'utilisation de `GROUP BY` combinée avec la fonction d'agrégation `COUNT(*)` (ou `COUNT(id_livre)`) est ici standard.
* **Pour la Question 4 :** C'est un classique des concours : le filtrage sur un résultat d'agrégation ne se fait pas avec `WHERE`, mais avec la clause `HAVING` après le `GROUP BY`.

---

### 📋 Corrigé détaillé pas à pas

#### Correction de la Question 1
Objectif: Sélectionner, filtrer et trier.*

```sql
SELECT titre, annee
FROM Livre
WHERE domaine = 'Informatique' AND annee >= 2015
ORDER BY annee DESC, titre ASC;
```
*Analyse de l'examinateur :* On teste ici la maîtrise des clauses fondamentales. Le respect de la casse pour les chaînes de caractères et les types numériques est évalué. Le tri multiple (`DESC` puis `ASC`) est un classique souvent demandé.

---

#### Correction de la Question 2
Objectif: Croiser des tables et éliminer les doublons.*

```sql
SELECT DISTINCT A.nom, A.prenom
FROM Abonne AS A
JOIN Emprunt AS E ON A.id_abonne = E.id_abonne
WHERE A.departement = 'MPSI';
```
*Analyse de l'examinateur :* L'utilisation d'alias (`AS A`, `AS E`) est vivement conseillée pour la lisibilité. Le mot-clé `DISTINCT` est crucial : un élève qui l'oublie perd des points car un étudiant MPSI ayant emprunté $5$ livres apparaîtrai $5$ fois dans le résultat.

---

#### Correction de la Question 3
Objectif: Regrouper et compter.*

```sql
SELECT domaine, COUNT(*) AS nb_livres
FROM Livre
GROUP BY domaine;
```
*Analyse de l'examinateur :* La présence de `GROUP BY` impose que toutes les colonnes sélectionnées soient soit des fonctions d'agrégation, soit présentes dans le `GROUP BY`. Le renommage avec `AS` est apprécié pour la clarté du jeu de résultats retourné.

---

#### Correction de la Question 4
Objectif: Filtrer après agrégation.*

```sql
SELECT A.nom, A.prenom
FROM Abonne AS A
JOIN Emprunt AS E ON A.id_abonne = E.id_abonne
GROUP BY A.id_abonne, A.nom, A.prenom
HAVING COUNT(E.id_emprunt) > 3;
```
*Analyse de l'examinateur :* C'est la question discriminante du problème. 
- Erreur classique à éviter : utiliser `WHERE COUNT(...) > 3` (ce qui provoque une erreur syntaxique car le `WHERE` s'exécute avant le regroupement). 
- Note de rigueur : dans les standards SQL stricts (et exigés aux concours), si l'on groupe par `id_abonne`, il est préférable d'inclure toutes les colonnes affichées (`nom`, `prenom`) dans le `GROUP BY` ou d'utiliser la clé primaire comme garant d'unicité.