---
title: 'Exercice 2 : Requêtes SQL de sélection et jointure'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse phylogénétique et structuration d'une base de données relationnelle en écologie évolutive

## Énoncé

Dans le cadre d'un programme de conservation de la biodiversité mené par le Muséum National d'Histoire Naturelle, les chercheurs s'intéressent à la corrélation entre la surface des habitats naturels et la diversité allélique de populations d'ongulés sauvages dans les massifs montagneux européens. 

Pour stocker et interroger ces données hétérogènes (station de prélèvement, caractéristiques environnementales, individus échantillonnés et polymorphismes génétiques), on met en place une base de données relationnelle. L'objectif de ce problème est de concevoir et d'exécuter des requêtes SQL de sélection et de jointure pour extraire des indicateurs écologiques pertinents, tout en évaluant les limites biologiques et informatiques de telles structures.

La base de données repose sur trois relations (tables) principales dont les schémas relationnels et attributs sont décrits ci-dessous :

1. **`Station`** ($\underline{\text{id\_station}}$, nom_massif, surface_km2, altitude_moyenne)
   * `id_station` ($\text{INT}$) : Identifiant unique de la station de prélèvement.
   * `nom_massif` ($\text{VARCHAR}$) : Nom du massif montagneux (ex: "Alpes", "Pyrenees").
   * `surface_km2` ($\text{FLOAT}$) : Surface de l'aire protégée associée en $\text{km}^2$.
   * `altitude_moyenne` ($\text{INT}$) : Altitude moyenne du site en $\text{mètre}$ ($\text{m}$).

2. **`Individu`** ($\underline{\text{id\_individu}}$, espece, sexe, id_station)
   * `id_individu` ($\text{INT}$) : Identifiant unique de l'animal.
   * `espece` ($\text{VARCHAR}$) : Nom vernaculaire ou scientifique (ex: "Rupicapra rupicapra").
   * `sexe` ($\text{CHAR}$) : Sexe de l'individu ('M' ou 'F').
   * `id_station` ($\text{INT}$) : Clé étrangère référant la station de rattachement.

3. **`MarqueurGenetique`** ($\underline{\text{id\_marqueur}}$, id_individu, locus, allele_1, allele_2)
   * `id_marqueur` ($\text{INT}$) : Identifiant unique de la mesure génotypique.
   * `id_individu` ($\text{INT}$) : Clé étrangère référant l'individu prélevé.
   * `locus` ($\text{VARCHAR}$) : Nom du marqueur microsatellite étudié.
   * `allele_1` ($\text{INT}$) : Taille du premier allèle en paires de bases ($\text{pb}$).
   * `allele_2` ($\text{INT}$) : Taille du second allèle en paires de bases ($\text{pb}$).

---

## Questions

1. **Modélisation et Compréhension :** Expliquer le rôle des clés primaires et des clés étrangères dans ce schéma relationnel. Pourquoi est-il pertinent de séparer les tables `Individu` et `MarqueurGenetique` plutôt que de regrouper toutes les informations dans une seule table ?
2. **Requête simple de sélection :** Écrire une requête SQL permettant d'afficher le nom des massifs et leur surface pour toutes les stations situées à une altitude moyenne supérieure ou égale à $1500\text{ m}$.
3. **Jointure et Agrégation :** Écrire une requête SQL qui retourne, pour chaque station (identifiant et nom du massif), le nombre total d'individus recensés de l'espèce `"Rupicapra rupicapra"`.
4. **Jointures multiples :** On souhaite analyser la diversité génétique. Écrire une requête SQL affichant l'identifiant de l'individu, son espèce, ainsi que le locus et la taille de ses allèles (`allele_1` et `allele_2`), uniquement pour les individus capturés dans le massif des `"Pyrenees"`.
5. **Analyse critique :** En écologie des populations, l'hypothèse biogéographique de MacArthur-Wilson suggère une relation non-linéaire entre la surface d'un habitat et sa diversité allélique. Discutez des limites inhérentes à l'utilisation d'une base de données relationnelle classique pour modéliser cette dynamique écosystémique complexe.

---

## Pistes

* **Question 1 :** Pensez à la redondance des données (anomalies de mise à jour) lorsqu'un individu possède plusieurs marqueurs génétiques.
* **Question 2 :** Utilisez les clauses `SELECT`, `FROM` et `WHERE` avec l'opérateur de comparaison `>=`.
* **Question 3 :** Utilisez une jointure (`JOIN`) entre `Station` et `Individu`, combinée avec une fonction d'agrégation (`COUNT`) et un regroupement (`GROUP BY`). Attention aux stations sans individus.
* **Question 4 :** Enchaînez les jointures des trois tables (`Station`, `Individu`, `MarqueurGenetique`) à l'aide de conditions `ON` successives, puis filtrez sur le massif.
* **Question 5 :** Songez à la nature dynamique, spatiale et temporelle des flux génétiques (métapopulations) face à la rigidité des tables SQL tabulaires.

---

## Corrigé pas à pas

### 1. Modélisation et Compréhension
* **Rôles des clés :** La *clé primaire* garantit l'unicité et l'intégrité de chaque enregistrement au sein d'une table (ex: `id_station`). La *clé étrangère* assure l'intégrité référentielle en garantissant qu'une valeur référencée dans une table fille existe bien dans la table parente (ex: `id_station` dans `Individu` pointe vers `Station`).
* **Normalisation :** Séparer `Individu` et `MarqueurGenetique` évite la redondance de données (duplication des informations de l'individu pour chaque locus analysé) et permet d'associer un nombre variable de marqueurs génétiques par individu sans modifier la structure de la table `Individu`.

### 2. Requête simple de sélection
```sql
SELECT nom_massif, surface_km2
FROM Station
WHERE altitude_moyenne >= 1500;
```

### 3. Jointure et Agrégation
Pour compter tous les individus (y compris potentiellement ceux d'autres espèces, bien qu'on filtre ici), on associe les stations à leurs individus. L'utilisation d'un `LEFT JOIN` permet de conserver les stations ne possédant aucun individu (affichant un compte à 0).

```sql
SELECT s.id_station, s.nom_massif, COUNT(i.id_individu) AS nb_individus
FROM Station s
LEFT JOIN Individu i ON s.id_station = i.id_station
WHERE i.espece = 'Rupicapra rupicapra' OR i.espece IS NULL
GROUP BY s.id_station, s.nom_massif;
```
*(Note : Un `INNER JOIN` est également acceptable si l'on se restreint aux stations contenant au moins un individu de l'espèce ciblée).*

### 4. Jointures multiples
Il est nécessaire de lier les trois tables pour remonter du massif (dans `Station`) jusqu'aux allèles (dans `MarqueurGenetique`) en passant par l'individu.

```sql
SELECT i.id_individu, i.espece, m.locus, m.allele_1, m.allele_2
FROM Station s
JOIN Individu i ON s.id_station = i.id_station
JOIN MarqueurGenetique m ON i.id_individu = m.id_individu
WHERE s.nom_massif = 'Pyrenees';
```

### 5. Analyse critique du modèle
Le modèle relationnel SQL offre une robustesse et une normalisation indispensables pour stocker de grands volumes de données structurées. Néanmoins, il présente des limites majeures face aux problématiques biologiques :
1. **Limitation spatiale et topologique :** Une base SQL standard gère mal la continuité spatiale (génotypes continus le long d'un gradient altitudinal ou fragmentation des habitats par des barrières anthropiques). Des extensions géographiques (PostGIS) sont nécessaires.
2. **Dynamique temporelle :** Les flux migratoires et la dérive génétique évoluent au cours des générations. Le SQL stocke un instantané statique (photographie à un temps $t$) et peine à représenter nativement des processus stochastiques continus.
3. **Complexité des interactions écologiques :** La modélisation relationnelle cloisonne l'information en tables rigides, alors que la génétique des populations requiert des analyses matricielles complexes (matrices de distance génétique de Nei, graphes de connectivité de métapopulations) difficilement exprimables par de simples requêtes SQL sans recourir à des langages procéduraux externes (Python/R).