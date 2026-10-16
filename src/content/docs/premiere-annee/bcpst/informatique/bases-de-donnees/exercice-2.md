---
title: 'Exercice : Jointures multi-tables en bio-informatique'
description: 'Problème d entraînement type concours pour BCPST (Agro-Véto / G2E).'
---

### 🌐 Énoncé du problème / Cadre d'étude

En bio-informatique, l'analyse des génomes nécessite souvent de croiser des données provenant de différentes sources relationnelles. On s'intéresse ici à une base de données relationnelle simplifiée nommée `BioGeno` qui stocke des informations sur des gènes, les organismes auxquels ils appartiennent et des mutations observées lors d'études cliniques.

La base de données est constituée de trois tables dont le schéma relationnel est décrit ci-dessous (les clés primaires sont soulignées, les clés étrangères sont précédées du symbole `#`) :

1. **`Organisme`** (`id_org`, `nom_espece`, `classe`)
   * `id_org` : entier, identifiant unique de l'organisme.
   * `nom_espece` : chaîne de caractères (ex: `"Homo sapiens"`, `"Mus musculus"`).
   * `classe` : chaîne de caractères (ex: `"Mammalia"`, `"Aves"`).

2. **`Gene`** (`id_gene`, `nom_gene`, `chromosome`, `#id_org`)
   * `id_gene` : entier, identifiant unique du gène.
   * `nom_gene` : chaîne de caractères (ex: `"BRCA1"`, `"TP53"`).
   * `chromosome` : chaîne de caractères (ex: `"17"`, `"13"`).
   * `id_org` : entier, référence l'organisme porteur du gène.

3. **`Mutation`** (`id_mut`, `#id_gene`, `type_mutation`, `impact_clinique`)
   * `id_mut` : entier, identifiant unique de la mutation.
   * `id_gene` : entier, référence le gène concerné par la mutation.
   * `type_mutation` : chaîne de caractères (ex: `"Missense"`, `"Frameshift"`, `"Silent"`).
   * `impact_clinique` : chaîne de caractères (ex: `"Pathogenic"`, `""Benign"`, `""Uncertain"`).

---

### ❓ Questions progressives

1. **Question 1 (Requête simple avec condition)**
   Écrire une requête SQL permettant d'obtenir la liste de tous les noms de gènes (`nom_gene`) et leurs chromosomes respectifs situés sur le chromosome `"17"` chez l'organisme dont l'`id_org` est `1`.

2. **Question 2 (Jointure binaire)**
   Écrire une requête SQL qui affiche le nom de l'espèce (`nom_espece`) ainsi que le nom de tous ses gènes (`nom_gene`) pour l'ensemble des gènes enregistrés dans la base. On utilisera une jointure explicite (`JOIN ... ON`).

3. **Question 3 (Jointure multi-tables et agrégation)**
   Écrire une requête SQL permettant de compter le nombre total de mutations répertoriées pour chaque espèce. Le résultat devra afficher le nom de l'espèce (`nom_espece`) et le nombre total de mutations, triés par ordre décroissant du nombre de mutations.

4. **Question 4 (Analyse avancée)**
   Écrire une requête SQL permettant d'identifier les noms des gènes (`nom_gene`) de la classe `"Mammalia"` ayant subi au moins une mutation dont l'impact clinique est `"Pathogenic"`. On veillera à éviter les doublons dans le résultat en utilisant le mot-clé approprié.

---

### 💡 Pistes & Indications méthodologiques

* **Rappel syntaxique (Jointures)** : Pour lier deux tables $A$ et $B$ par une clé étrangère, on utilise la syntaxe :
  `SELECT ... FROM A JOIN B ON A.id = B.id_A`. Pour $n$ tables, on enchaîne les `JOIN`.
* **Alias de tables** : L'utilisation d'alias (ex: `FROM Gene AS g JOIN Organisme AS o ...`) simplifie grandement l'écriture et évite les ambiguïtés lorsque des colonnes portent le même nom dans différentes tables.
* **Agrégation** : Pour compter des lignes par groupe, pensez à associer `SELECT ... COUNT(...)`, la clause `GROUP BY` sur les attributs non agrégés, et éventuellement `ORDER BY ... DESC` pour le tri.
* **Doublons** : Lorsqu'un gène subit plusieurs mutations pathogènes, une jointure simple peut renvoyer plusieurs fois le même gène. Le mot-clé `DISTINCT` permet de filtrer les résultats identiques.

---

### 📋 Corrigé détaillé pas à pas

#### Correction de la Question 1
Objectif: Sélectionner des attributs d'une seule table (`Gene`) avec un double critère de filtrage (`WHERE`).

```sql
SELECT nom_gene, chromosome
FROM Gene
WHERE chromosome = '17' AND id_org = 1;
```
*Commentaire de l'examinateur* : Question directe. On teste ici la maîtrise des opérateurs logiques (`AND`) et des filtres de chaînes de caractères (entre quotes simples).

---

#### Correction de la Question 2
Objectif: Lier les tables `Organisme` et `Gene` via leur attribut commun (`id_org`).

```sql
SELECT o.nom_espece, g.nom_gene
FROM Organisme AS o
JOIN Gene AS g ON o.id_org = g.id_org;
```
*Commentaire de l'examinateur* : L'utilisation des alias (`o` et `g`) est fortement recommandée en colles et aux concours pour lisibilité. On attend la syntaxe explicite `JOIN ... ON` et non l'ancienne syntaxe implicite avec des virgules dans le `FROM`.

---

#### Correction de la Question 3
Objectif: Croiser trois tables (`Organisme`, `Gene`, `Mutation`) et utiliser une fonction d'agrégation (`COUNT`).

```sql
SELECT o.nom_espece, COUNT(m.id_mut) AS nb_mutations
FROM Organisme AS o
JOIN Gene AS g ON o.id_org = g.id_org
JOIN Mutation AS m ON g.id_gene = m.id_gene
GROUP BY o.id_org, o.nom_espece
ORDER BY nb_mutations DESC;
```
*Commentaire de l'examinateur* : C'est un grand classique des concours. Il faut enchaîner deux jointures : de `Organisme` vers `Gene`, puis de `Gene` vers `Mutation`. Le `GROUP BY` doit porter sur l'identifiant de l'organisme (et par extension sur son nom). Le tri `ORDER BY ... DESC` est demandé par l'énoncé.

---

#### Correction de la Question 4
Objectif: Filtrer sur des attributs non numériques (`classe`, `impact_clinique`), joindre les trois tables et éliminer les doublons (`DISTINCT`).

```sql
SELECT DISTINCT g.nom_gene
FROM Organisme AS o
JOIN Gene AS g ON o.id_org = g.id_org
JOIN Mutation AS m ON g.id_gene = m.id_gene
WHERE o.classe = 'Mammalia' 
  AND m.impact_clinique = 'Pathogenic';
```
*Commentaire de l'examinateur* : 
* Le positionnement des clauses est crucial : les `JOIN` se font après le `FROM`, suivis du `WHERE` pour filtrer les lignes, puis éventuellement du `DISTINCT` au niveau du `SELECT`. 
* L'oubli de `DISTINCT` est une erreur fréquente : si un gène possède 3 mutations pathogènes, son nom apparaîtra 3 fois dans le résultat, ce qui fausse l'analyse qualitative demandée ("identifier les gènes").