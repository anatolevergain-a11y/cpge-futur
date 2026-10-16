---
title: 'Exercice 1 : Modèle relationnel'
description: 'Problème d entraînement type concours.'
---

# Concours Blanc - Correction détaillée : Modèle relationnel et Bases de données SQL

*Matière : Informatique — Filière BCPST*  
Examinateur: Commission de correction d'informatique*

---

## Introduction et Présentation du Sujet

Ce problème aborde la conception et l'interrogation de bases de données relationnelles, un thème récurrent aux concours BCPST. Nous allons étudier un système d'information gérant une **flotte de véhicules autonomes** et le suivi de leurs **trajets** dans le cadre d'une expérimentation scientifique en milieu naturel.

Le problème est découpé en trois parties :
1. Analyse et conception du schéma relationnel (contraintes d'intégrité).
2. Traduction de requêtes en algèbre relationnelle.
3. Écriture de requêtes en SQL standard.

---

## Partie I : Modélisation et Schéma Relationnel

On considère le domaine de données suivant :
* Un **Véhicule** est caractérisé par un identifiant unique (`id_v`), un modèle (`modele`), une autonomie maximale en kilomètres (`autonomie_km`) et l'année de sa mise en service (`annee_service`).
* Un **Capteur** est caractérisé par un identifiant (`id_c`), un type (`type_c` : 'Caméra', 'Lidar', 'GPS', etc.), et un taux d'échantillonnage en Hertz (`frequence_hz`). Chaque capteur est fixé à un et un seul véhicule.
* Un **Trajet** est défini par un identifiant (`id_t`), la date du trajet (`date_trajet`), la distance parcourue (`distance_km` en $\text{km}$) et le véhicule utilisé. Un véhicule peut effectuer plusieurs trajets, mais un trajet est effectué par un unique véhicule.

### Question 1.1
> *Établir le schéma relationnel de cette base de données en précisant les domaines des attributs, les clés primaires (soulignées) et les clés étrangères (suivies de la mention $\to$).*
Correction: **

Le passage de la description textuelle au modèle relationnel conduit aux tables suivantes :

* **`Vehicule`** ($\underline{\text{id\_v}}$ : INT, `modele` : VARCHAR, `autonomie_km` : INT, `annee_service` : INT)
* **`Capteur`** ($\underline{\text{id\_c}}$ : INT, `type_c` : VARCHAR, `frequence_hz` : FLOAT, `id_v` : INT $\to$ `Vehicule(id_v)`)
* **`Trajet`** ($\underline{\text{id\_t}}$ : INT, `date_trajet` : DATE, `distance_km` : FLOAT, `id_v` : INT $\to$ `Vehicule(id_v)`)

---

## Partie II : Interrogation en Algèbre Relationnelle

On rappelle les opérateurs de base : sélection ($\sigma$), projection ($\pi$), produit cartésien ($\times$), union ($\cup$), différence ($-$), et les jointures ($\bowtie$).

### Question 2.1
> *Écrire l'expression de l'algèbre relationnelle permettant d'obtenir les modèles des véhicules (uniquement le nom du modèle, sans doublons) qui ont effectué un trajet dont la `distance_km` est strictement supérieure à $500\text{ }\text{km}$.*
Correction: **

1. On filtre les trajets de plus de $500\text{ }\text{km}$ :  
   $T_1 = \sigma_{\text{distance\_km} > 500}(\text{Trajet})$
2. On effectue la jointure naturelle avec la table `Vehicule` pour récupérer les informations des véhicules correspondants :  
   $T_2 = T_1 \bowtie_{\text{Trajet.id\_v} = \text{Vehicule.id\_v}} \text{Vehicule}$
3. On projette sur l'attribut `modele` :  
   $T_3 = \pi_{\text{modele}}(T_2)$

**Expression globale :**
$$\pi_{\text{modele}}\left( \sigma_{\text{distance\_km} > 500}(\text{Trajet}) \bowtie_{\text{Trajet.id\_v} = \text{Vehicule.id\_v}} \text{Vehicule} \right)$$

---

## Partie III : Langage SQL

Écrire les requêtes SQL correspondant aux opérations sur la base de données.

### Question 3.1
> *Écrire la requête SQL permettant de créer la table `Capteur` en respectant les types, les clés primaires et les clés étrangères.*
Correction: **

```sql
CREATE TABLE Vehicule (
    id_v INT PRIMARY KEY,
    modele VARCHAR(50) NOT NULL,
    autonomie_km INT CHECK (autonomie_km > 0),
    annee_service INT
);

CREATE TABLE Capteur (
    id_c INT PRIMARY KEY,
    type_c VARCHAR(30) NOT NULL,
    frequence_hz FLOAT CHECK (frequence_hz > 0),
    id_v INT NOT NULL,
    FOREIGN KEY (id_v) REFERENCES Vehicule(id_v)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
```

### Question 3.2
> *Écrire la requête SQL qui affiche l'identifiant et le modèle des véhicules qui ne possèdent **aucun** capteur de type 'Lidar'.*
Correction: **

Il existe plusieurs manières de rédiger cette requête. L'utilisation de la clause `NOT IN` ou d'une sous-requête avec `NOT EXISTS` est attendue.

```sql
SELECT id_v, modele
FROM Vehicule
WHERE id_v NOT IN (
    SELECT id_v
    FROM Capteur
    WHERE type_c = 'Lidar'
);
```

### Question 3.3
> *Écrire la requête SQL permettant d'obtenir, pour chaque véhicule (afficher son `id_v`), la distance totale cumulée de tous ses trajets, ainsi que le nombre de trajets effectués. On ne souhaite afficher que les véhicules ayant cumulé plus de $1000\text{ }\text{km}$.*
Correction: **

Cette question nécessite l'utilisation d'une agrégation (`GROUP BY`) et d'un filtrage sur les groupes (`HAVING`).

```sql
SELECT id_v, SUM(distance_km) AS distance_totale, COUNT(id_t) AS nombre_trajets
FROM Trajet
GROUP BY id_v
HAVING SUM(distance_km) > 1000;
```

---

## Analyse Critique des Résultats et Erreurs Fréquentes

En tant d'examinateur en CPGE, voici les points de vigilance relevés lors de la correction de ce type de sujet :

1. **Oubli des contraintes d'intégrité référentielle :** En SQL, l'oubli de la clause `FOREIGN KEY` lors de la création des tables est une pénalité fréquente. De même, l'utilisation de `NOT NULL` sur les clés étrangères dépend de la modélisation, mais ici un capteur ou un trajet doit obligatoirement être rattaché à un véhicule.
2. **Confusion entre `WHERE` et `HAVING` :** Dans la question 3.3, il est impératif d'utiliser `HAVING` car la condition porte sur le résultat d'une fonction d'agrégation (`SUM`). Utiliser `WHERE SUM(distance_km) > 1000` génère une erreur de syntaxe SQL.
3. **Gestion des doublons en algèbre relationnelle :** L'opérateur de projection $\pi$ en algèbre relationnelle élimine mathématiquement les doublons (contrairement au `SELECT` simple en SQL qui nécessite souvent `DISTINCT`). Il est important de le garder à l'esprit lors de la traduction.