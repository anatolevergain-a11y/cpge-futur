---
title: 'Cours : Bases de données et langage SQL'
description: 'Synthèse officielle du cours et démonstrations pour CPGE BCPST.'
---

# Fiche de Cours : Bases de données et langage SQL
**Filière :** CPGE BCPST (1ère année)  
**Matière :** Informatique  

---

## 📌 1. Définitions & Cadre d'étude

Une base de données relationnelle repose sur le stockage de données sous forme de tables (ou relations) bidimensionnelles. Le modèle relationnel, fondé par E. F. Codd, structure l'information de manière rigoureuse pour garantir son intégrité et faciliter son interrogation.

### Vocabulaire fondamental
* **Relation (ou Table) :** Un ensemble de lignes, appelées **tuples** (ou enregistrements), partageant les mêmes attributs.
* **Attribut (ou Colonne) :** Caractéristique mesurée ou observée pour chaque tuple. Chaque attribut possède un domaine (ensemble des valeurs possibles).
* **Schéma d'une relation :** Nom de la relation suivi de la liste de ses attributs typés.
* **Clé primaire :** Attribut (ou ensemble minimal d'attributs) dont la valeur identifie de manière unique chaque tuple d'une relation. Aucune valeur nulle n'est tolérée sur une clé primaire.
* **Clé étrangère :** Attribut dans une relation qui fait référence à la clé primaire d'une autre relation, matérialisant ainsi une association (relation 1-N ou N-M).

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

L'interrogation des bases de données relationnelles s'appuie sur l'**algèbre relationnelle**, un système formel d'opérations sur les relations. Les requêtes SQL (Structured Query Language) traduisent ces opérations mathématiques.

### Les opérateurs fondamentaux de l'algèbre relationnelle
1. **La Sélection ($\sigma_{\text{condition}}(R)$) :** Extrait les tuples d'une relation $R$ satisfaisant un prédicat logique.
2. **La Projection ($\pi_{\text{attributs}}(R)$) :** Extrait un sous-ensemble de colonnes d'une relation $R$ et élimine les doublons éventuels.
3. **Le Produit cartésien ($R \times S$) :** Combine chaque tuple de $R$ avec chaque tuple de $S$.
4. **La Réunion ($R \cup S$) et la Différence ($R \setminus S$) :** Opérations ensemblistes classiques sur des relations de même schéma.
5. **La Jointure ($R \bowtie_{\text{condition}} S$) :** Cas particulier de sélection appliquée au produit cartésien, fondamentale pour relier des tables entre elles via leurs clés.

### Propriété de clôture
L'ensemble des relations est muni d'une structure de monoïde pour les opérateurs relationnels : le résultat de toute opération de l'algèbre relationnelle est lui-même une relation. Cela permet de composer les requêtes (sous-requêtes en SQL).

---

## 💡 3. Méthodes de calcul & Algorithmes

Le langage SQL met en œuvre ces concepts à travers la structure universelle **SELECT-FROM-WHERE** (souvent appelée bloc SPW).

### Structure de base d'une requête SQL
```sql
SELECT nom_attribut1, nom_attribut2
FROM nom_table
WHERE condition_de_selection;
```

### Traduction des opérations relationnelles en SQL

* **Sélection ($\sigma$) :** Réalisée par la clause `WHERE`.
* **Projection ($\pi$) :** Réalisée par les expressions listées après le mot-clé `SELECT`.
* **Jointure ($\bowtie$) :** Réalisée via la clause `JOIN ... ON ...` ou par une condition dans le `WHERE` combinée au produit cartésien dans le `FROM`.

#### Exemple type (Biologie / Écologie) :
Soit une table `Espece(id_esp, nom_latin, regime)` et une table `Observation(id_obs, id_esp, lieu, date)`.  
Pour obtenir la liste des noms latins des espèces observées dans la localité $\text{"Foret"}$, on écrit la requête :

```sql
SELECT DISTINCT E.nom_latin
FROM Espece AS E
JOIN Observation AS O ON E.id_esp = O.id_esp
WHERE O.lieu = 'Foret';
```

### Agrégations et regroupements
Le traitement des données biologiques nécessite souvent des calculs statistiques simples (moyennes, comptages, maxima) via les fonctions d'agrégation (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) associées à la clause `GROUP BY` et au filtrage des groupes via `HAVING`.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oubli des jointures et explosion combinacée :** 
   Oublier de relier les tables dans la clause `WHERE` ou `JOIN` produit un produit cartésien ($R \times S$), générant un nombre aberrant de lignes et faussant tous les calculs.
2. **Confusion entre `WHERE` et `HAVING` :**
   * `WHERE` filtre les **tuples** avant l'agrégation.
   * `HAVING` filtre les **groupes** formés après l'agrégation (`GROUP BY`). Utiliser une fonction d'agrégation (comme `COUNT(*)`) dans un `WHERE` est une erreur syntaxique et logique majeure.
3. **Gestion des valeurs NULL :**
   Les valeurs `NULL` (absence de valeur) obéissent à une logique tri-valuée. Une comparaison avec `NULL` (ex: `attribut = NULL`) renvoie `UNKNOWN` et non `TRUE`. Il faut impérativement utiliser `IS NULL` ou `IS NOT NULL`.
4. **Redondance et projection (`DISTINCT`) :**
   En SQL, contrairement à l'algèbre relationnelle stricte, les doublons ne sont pas éliminés par défaut lors d'une projection (`SELECT`), sauf si l'on précise explicitement le mot-clé `DISTINCT`. Ne pas l'utiliser lorsque l'énoncé demande un ensemble unique est une source fréquente de perte de points.