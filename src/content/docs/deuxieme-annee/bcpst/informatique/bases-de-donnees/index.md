---
title: 'Cours : Bases de données'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Bases de données (CPGE BCPST2)

## 1. Introduction et Modèle Relationnel

### Définitions fondamentales
* **Base de données (BDD) :** Ensemble structuré et organisé de données stockées dans un système informatique, permettant une recherche, une mise à jour et un partage efficaces.
* **Système de Gestion de Base de Données (SGBD) :** Logiciel permettant de manipuler les données de la BDD (garantissant persistance, concurrence, sécurité et intégrité). Le modèle dominant en BCPST est le **modèle relationnel**.
* **Relation (ou Table) :** Un sous-ensemble du produit cartésien de $n$ domaines : $R \subseteq D_1 \times D_2 \times \dots \times D_n$. 
* **Attribut (ou Colonne) :** Nom associé à un domaine $D_i$.
* **Tuple (ou Ligne / Enregistrement) :** Élément de la relation $R$, c'est-à-dire un $n$-uplet $(v_1, v_2, \dots, v_n)$ avec $v_i \in D_i$.
* **Schéma d'une relation :** Nom de la relation suivi de la liste de ses attributs et de leurs domaines.

### Contraintes d'intégrité
1. **Intégrité de domaine :** Les valeurs d'un attribut doivent appartenir au domaine associé.
2. **Clé primaire ($PK$) :** Attribut ou ensemble minimal d'attributs dont la valeur identifie de manière unique chaque tuple de la relation. Aucune valeur ne peut être nulle (`NULL`).
3. **Clé étrangère ($FK$) :** Attribut (ou ensemble d'attributs) dans une relation $R_2$ dont les valeurs doivent correspondre aux valeurs d'une clé primaire (ou candidate) dans une relation $R_1$ (qui peut être la même).

---

## 2. Algèbre Relationnelle

L'algèbre relationnelle est l'ensemble formel des opérations permettant de manipuler des relations.

### Opérateurs unaires
* **Sélection ($\sigma$) :** Filtre les lignes selon un prédicat $P$.
  $$\sigma_P(R) = \{ t \in R \mid P(t) \text{ est vrai} \}$$
* **Projection ($\pi$) :** Sélectionne un sous-ensemble de colonnes et élimine les doublons.
  $$\pi_{A_1, \dots, A_k}(R) = \{ (t.A_1, \dots, t.A_k) \mid t \in R \}$$

### Opérateurs ensemblistes (nécessitent des relations compatibles en schéma)
* **Union ($\cup$) :** $R \cup S$ (élimination des doublons).
* **Différence ($\setminus$) :** $R \setminus S$.
* **Produit cartésien ($\times$) :** $R \times S = \{ t_1 \frown t_2 \mid t_1 \in R, t_2 \in S \}$.

### Opérateurs dérivés fondamentaux
* **Jointure naturelle ($\bowtie$) :** Combine deux relations sur l'égalité de leurs attributs communs. Soit $R(A, B)$ et $S(B, C)$ :
  $$R \bowtie S = \sigma_{R.B = S.B}(R \}^{(\text{sans duplication de } B)} \times S)$$
* **Theta-jointure ($\bowtie_\theta$) :** Combinaison de relations basée sur une condition arbitraire $\theta$ :
  $$R \bowtie_\theta S = \sigma_\theta(R \times S)$$

---

## 3. Le Langage SQL (Structured Query Language)

Le SQL est le langage standard d'interrogation et de gestion des SGBD relationnels.

### Structure générale d'une requête (QL - Query Language)
```sql
SELECT DISTINCT col1, AGREGAT(col2)
FROM Table1
JOIN Table2 ON Table1.id = Table2.id1
WHERE condition_lign_par_ligne
GROUP BY col1
HAVING condition_sur_agregats
ORDER BY col1 ASC / DESC;
```

### Ordre d'exécution logique par le SGBD
Il est crucial de comprendre l'ordre d'évaluation pour éviter les erreurs conceptuelles :
1. `FROM` (et les `JOIN`)
2. `WHERE`
3. `GROUP BY`
4. `HAVING`
5. `SELECT` (application des projections et rennommages)
6. `DISTINCT`
7. `ORDER BY`

---

## 4. Méthodes et Conception (Modèle Entité-Association / UML)

Le passage du besoin métier au modèle relationnel se fait via les étapes suivantes :
1. **Identification des entités** (objets ayant une existence propre) et de leurs attributs.
2. **Identification des associations** (relations entre entités) et de leurs **cardinalités** (ex: `1,N`, `0,1`, `1,1`).
3. **Règles de passage au relationnel :**
   * *Association 1,N ou 0,N :* La clé primaire de l'entité du côté `1` ou `0,1` migre comme clé étrangère dans la table représentant l'entité du côté `N`.
   * *Association M,N :* Création d'une table de jonction dont la clé primaire est constituée de la concaténation des clés primaires des deux entités mises en relation.

---

## 5. Pièges Classiques (À Éviter en Concours)

> **Piège 1 : Les valeurs `NULL` dans les comparaisons.**
> En SQL, `NULL` représente une valeur absente ou inconnue. Toute comparaison impliquant `NULL` (`= NULL`, `<> NULL`) évalue à la valeur de vérité **Inconnu** (ni Vrai, ni Faux). 
> *Correction :* Utiliser exclusivement les opérateurs `IS NULL` ou `IS NOT NULL`.

> **Piège 2 : Confusion entre `WHERE` et `HAVING`.**
> * `WHERE` filtre les tuples **avant** le regroupement (`GROUP BY`). Il ne peut contenir de fonctions d'agrégation (`SUM`, `COUNT`, `AVG`, etc.).
> * `HAVING` filtre les groupes **après** application du `GROUP BY`. Il est indispensable pour poser des conditions sur les résultats d'agrégats (ex: "les départements ayant *plus de 5* employés").

> **Piège 3 : Oubli de l'élimination des doublons en algèbre relationnelle.**
> Contrairement aux tables SQL (multisets ou sacs), les relations mathématiques en algèbre relationnelle sont des ensembles (pas de doublons). Une projection en algèbre relationnelle supprime implicitement les doublons.

> **Piège 4 : Le produit cartésien implicite.**
> Oublier la condition de jointure dans la clause `WHERE` (dans la syntaxe historique) ou utiliser un `CROSS JOIN` par inadvertance conduit à un produit cartésien dont la compléxité temporelle et spatiale explose ($\mathcal{O}(N \times M)$).