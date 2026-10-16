---
title: 'Cours : Bases de données relationnelles et SQL (IPT)'
description: 'Synthèse officielle du cours et démonstrations pour CPGE MPSI.'
---

## 📌 1. Définitions & Cadre d'étude

Dans le cadre du programme d'Informatique de Tronc Commun (IPT) en MPSI, l'étude des bases de données relationnelles formalise le stockage, l'intégrité et l'interrogation de volumes structurés d'informations.

*   **Modèle relationnel :** Une base de données relationnelle est un ensemble de **relations** (souvent appelées **tables**). 
*   **Domaine et Attribut :** Soit un ensemble de valeurs appelé **domaine** $D$. Un attribut $A$ est une fonction ou un nom associé à un domaine $D(A)$.
*   **Schéma de relation :** Un schéma de relation $R$ est un ensemble fini d'attributs $\{A_1, A_2, \dots, A_n\}$.
*   **Tuple (ou enregistrement) :** Un tuple $t$ sur un schéma $R$ est une application qui associe à chaque attribut $A_i$ de $R$ une valeur de son domaine. L'ensemble des tuples forme une **instance** de la relation.
*   **Clé primaire :** Un sous-ensemble minimal d'attributs $PK \subset R$ dont les valeurs identifient de manière unique chaque tuple d'une relation. Aucune valeur ne peut être nulle (`NULL`).
*   **Clé étrangère :** Un attribut (ou un groupe d'attributs) dans une relation dont les valeurs doivent correspondre aux valeurs d'une clé primaire (ou candidate) d'une autre relation, garantissant ainsi l'**intégrité référée**.
*   **Langage SQL (Structured Query Language) :** Langage normé permettant de définir (DDL), manipuler (DML) et interroger (DQL) les données.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Opérateurs de l'algèbre relationnelle et correspondance SQL
L'interrogation des bases repose sur l'algèbre relationnelle, dont les requêtes SQL sont une transcription textuelle :

1.  **Sélection ($\sigma$) :** Filtre les lignes (tuples) selon un prédicat $P$. 
    *   *SQL équivalent :* `SELECT * FROM R WHERE P;`
2.  **Projection ($\pi$) :** Filtre les colonnes (attributs).
    *   *SQL équivalent :* `SELECT A1, A2 FROM R;`
3.  **Produit cartésien ($\times$) et Jointure ($\bowtie$) :** Combine les tuples de deux relations. La jointure naturelle ou conditionnelle associe des tuples selon un critère d'égalité entre clés.
    *   *SQL équivalent :* `SELECT * FROM R1 JOIN R2 ON R1.id = R2.id_r1;`

### Théorème d'expressivité (Codd)
Le modèle relationnel garantit que les opérations de l'algèbre relationnelle (union, différence, produit cartésien, projection, sélection, renommage) sont équivalentes en terme de puissance d'expression aux requêtes conjonctives avec négation du calcul relationnel du premier ordre. En pratique, le SQL standard (sans récursion) implémente ce fragment.

---

## 💡 3. Méthodes de calcul & Algorithmes

### Structure générale d'une requête SQL d'interrogation (DQL)
Pour concevoir une requête complexe, on utilise la clause logique d'exécution :
$$\text{FROM} \longrightarrow \text{WHERE} \longrightarrow \text{GROUP BY} \longrightarrow \text{HAVING} \longrightarrow \text{SELECT} \longrightarrow \text{ORDER BY}$$

### Exemple type : Jointure et Agrégation
Soit une table `Eleve(id_e, nom)` et une table `Note(id_e, matiere, valeur)`. Pour calculer la moyenne de chaque élève, l'algorithme SQL s'écrit :

```sql
SELECT e.nom, AVG(n.valeur) AS moyenne
FROM Eleve e
JOIN Note n ON e.id_e = n.id_e
GROUP BY e.id_e, e.nom;
```

*   **Principe algorithmique sous-jacent :** 
    1.  *Nested Loop Join* ou *Hash Join* pour l'opération de jointure (`JOIN`).
    2.  Tri ou hachage des données pour regrouper les lignes par identifiant (`GROUP BY`).
    3.  Application de la fonction d'agrégation `AVG` sur les groupes.

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Mauvaise gestion des valeurs `NULL` :** 
    Une valeur `NULL` représente une information manquante ou inconnue. Toute comparaison avec `NULL` (ex: `WHERE x = NULL`) évalue à \text{UNKNOWN} (et non \text{TRUE}). Il faut impérativement utiliser `IS NULL` ou `IS NOT NULL`.
2.  **Oubli de la jointure dans le `WHERE` (produit cartésien implicite) :**
    Écrire `SELECT * FROM A, B WHERE A.id = B.id` est obsolète et source d'erreurs graves en cas d'oubli de la condition de jointure (générant un produit cartésien $|A| \times |B|$). Préférer la syntaxe explicite `JOIN ... ON ...`.
3.  **Confusion entre `WHERE` et `HAVING` :**
    *   `WHERE` filtre les **lignes** *avant* l'agrégation.
    *   `HAVING` filtre les **groupes** *après* l'agrégation (utilisation fréquente avec `GROUP BY` et des fonctions telles que `SUM`, `COUNT`, `AVG`).
4.  **Duplication de lignes lors des projections :**
    En algèbre relationnelle, une relation est un ensemble (pas de doublons). En SQL, une requête `SELECT` renvoie un multiset (sac) par défaut. Il faut explicitement utiliser `SELECT DISTINCT` pour éliminer les doublons si l'énoncé l'exige.