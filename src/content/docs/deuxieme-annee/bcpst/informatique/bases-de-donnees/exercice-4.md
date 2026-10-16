---
title: 'Exercice 2 : Jointures et requêtes complexes'
description: 'Problème d entraînement type concours.'
---

# Concours Blanc - Correction détaillée : Bases de données SQL

**Filière :** BCPST  
**Matière :** Informatique  
**Thème :** Jointures et requêtes complexes  

---

## Introduction et Présentation du Modèle

Dans le cadre de la gestion d'un réseau de parcs zoologiques, on souhaite concevoir une base de données relationnelle permettant de suivre les animaux, leurs enclos, ainsi que les soigneurs attitrés. 

La base de données est constituée de trois relations (tables) dont les schémas relationnels et les types de données sont décrits ci-dessous :

1. **`Enclos`** (gestion des zones géographiques) :
   * `id_enclos` (INT, Clé Primaire) : Identifiant unique de l'enclos.
   * `nom_enclos` (VARCHAR) : Nom usuel de la zone (ex: $\text{"Fauves"}$).
   * `superficie` ($\text{FLOAT}$, $\text{m}^2$) : Superficie de l'enclos.

2. **`Soigneur`** (gestion du personnel) :
   * `id_soigneur` (INT, Clé Primaire) : Identifiant unique du soigneur.
   * `nom` (VARCHAR) : Nom du soigneur.
   * `specialite` (VARCHAR) : Domaine d'expertise (ex: $\text{"Mammifères marins"}$).

3. **`Animal`** (gestion de la faune) :
   * `id_animal` (INT, Clé Primaire) : Identifiant unique de l'animal.
   * `nom_animal` (VARCHAR) : Nom de l'animal.
   * `espece` (VARCHAR) : Espèce biologique (ex: $\text{"Panthera leo"}$).
   * `regime` (VARCHAR) : Régime alimentaire ($\text{"Carnivore"}$, $\text{"Herbivore"}$, $\text{"Omnivore"`}).
   * `id_enclos` (INT, Clé Étrangère référençant `Enclos(id_enclos)`) : Enclos où réside l'animal.
   * `id_soigneur` (INT, Clé Étrangère référençant `Soigneur(id_soigneur)`) : Soigneur référent de l'animal.

---

## Problème Guidé : Pas à pas

### Partie 1 : Requêtes de sélection simple et filtrage

#### Question 1.1
*Énoncé : Écrire une requête SQL permettant d'afficher les noms et espèces de tous les animaux dont le régime alimentaire est strictement $\text{"Carnivore"}$.*

**Correction pas à pas :**
1. On cible la table contenant ces informations : `Animal`.
2. On sélectionne les attributs d'intérêt : `nom_animal`, `espece`.
3. On filtre les lignes selon la condition `regime = 'Carnivore'`.

```sql
SELECT nom_animal, espece
FROM Animal
WHERE regime = 'Carnivore';
```

---

### Partie 2 : Jointures internes (`INNER JOIN`)

#### Question 2.1
*Énoncé : Afficher le nom de chaque animal ainsi que le nom de l'enclos dans lequel il vit.*

**Correction pas à pas :**
1. Les données sont réparties dans deux tables : `Animal` (pour le nom de l'animal) et `Enclos` (pour le nom de l'enclos).
2. La liaison entre ces deux tables s'effectue via la clé étrangère `id_enclos` présente dans la table `Animal`.
3. On utilise une jointure interne (`JOIN` ou `INNER JOIN`).

```sql
SELECT Animal.nom_animal, Enclos.nom_enclos
FROM Animal
INNER JOIN Enclos ON Animal.id_enclos = Enclos.id_enclos;
```

---

### Partie 3 : Jointures multiples et agrégation

#### Question 3.1
*Énoncé : Pour chaque soigneur (afficher son nom), compter le nombre d'animaux dont il a la charge. On veillera à afficher aussi les soigneurs ne s'occupant d'aucun animal.*

**Correction pas à pas :**
1. On a besoin de la table `Soigneur` et de la table `Animal`.
2. Pour inclure les soigneurs n'ayant aucun animal assigné, une jointure interne ne suffit pas (elle éliminerait les comptes à $0$). Il faut utiliser une **jointure externe** (`LEFT JOIN` en partant de la table `Soigneur`).
3. On groupe les résultats par soigneur et on utilise la fonction d'agrégation `COUNT`.

```sql
SELECT Soigneur.nom, COUNT(Animal.id_animal) AS nombre_animaux
FROM Soigneur
LEFT JOIN Animal ON Soigneur.id_soigneur = Animal.id_soigneur
GROUP BY Soigneur.id_soigneur, Soigneur.nom;
```

---

### Partie 4 : Requêtes imbriquées complexes

#### Question 4.1
*Énoncé : Afficher les caractéristiques des animaux (nom, espèce) qui résident dans un enclos dont la superficie est strictement supérieure à la superficie moyenne de tous les enclos de la base.*

**Correction pas à pas :**
1. **Étape 1 :** Calculer la superficie moyenne des enclos.
   ```sql
   SELECT AVG(superficie) FROM Enclos
   ```
2. **Étape 2 :** Identifier les enclos dont la superficie dépasse cette moyenne.
3. **Étape 3 :** Joindre la table `Animal` à ces enclos pour récupérer les animaux correspondants.

```sql
SELECT A.nom_animal, A.espece
FROM Animal A
JOIN Enclos E ON A.id_enclos = E.id_enclos
WHERE E.superficie > (
    SELECT AVG(superficie)
    FROM Enclos
);
```

---

## Analyse critique des résultats et Bonnes Pratiques (Attendu Concours)

1. **Performance des jointures :** 
   L'utilisation de clés étrangères implique la création quasi-systématique d'index sur ces colonnes par le SGBD. Lors de requêtes impliquant des tables de grande taille (plus de $10^5$ lignes, fréquent en modélisation biologique ou écologiques), l'oubli d'index sur les attributs de liaison (`id_enclos`, `id_soigneur`) conduit à des complexités algorithmiques en $\mathcal{O}(N \times M)$ au lieu de $\mathcal{O}(N + M)$ avec des index (arbres B+).

2. **Gestion des valeurs NULL (Piège classique) :**
   Dans la question 3.1, l'utilisation d'un `LEFT JOIN` est cruciale. Si un candidat utilise un `INNER JOIN`, le soigneur sans animal disparaît purement et simplement du résultat. De plus, lors de l'utilisation de `COUNT(Animal.id_animal)`, le SGBD compte correctement $0$ pour les valeurs `NULL` associées, alors que `COUNT(*)` renverrait erronément $1$ (en comptant la ligne de jointure avec des `NULL`).

3. **Robustesse des requêtes imbriquées :**
   La sous-requête de la question 4.1 (`SELECT AVG(superficie)...`) renvoie une unique valeur scalaire. Elle est donc compatible avec l'opérateur de comparaison strict `>`. Si elle avait pu renvoyer plusieurs lignes, il aurait fallu utiliser l'opérateur `> ANY` ou `> ALL`. C'est un point de vigilance particulièrement évalué à l'oral et à l'écrit en BCPST.