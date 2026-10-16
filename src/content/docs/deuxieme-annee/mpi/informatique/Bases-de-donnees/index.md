---
title: 'Cours : Bases de données'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Bases de données (CPGE MPI - Deuxième année)

Cette fiche de cours aborde la théorie des bases de données relationnelles, les aspects algorithmiques fondamentaux (optimisation de requêtes, complexité), ainsi que la persistance et la gestion de la concurrence.

---

## 1. Le Modèle Relationnel

### Définitions fondamentales
*   **Domaine ($\mathcal{D}$)** : Ensemble de valeurs atomiques (e.g., $\mathbb{Z}$, $\text{String}$).
*   **Schéma de relation ($R$)** : Un ensemble d'attributs $R = \{A_1, A_2, \dots, A_n\}$. À chaque attribut $A_i$ est associé un domaine $\text{dom}(A_i)$.
*   **Relation ($r$)** : Un sous-ensemble de l'ensemble des tuples $\prod_{i=1}^n \text{dom}(A_i)$. C'est un ensemble, l'ordre des tuples n'importe pas.
*   **Clé candidate** : Un sous-ensemble d'attributs $K \subseteq R$ tel que :
    1.  *Unicité* : Dans toute instance valide $r$ de $R$, deux tuples distincts ont des valeurs distinctes sur $K$.
    2.  *Irréductibilité* : Aucun sous-ensemble strict de $K$ ne possède la propriété d'unicité.
*   **Clé primaire** : Une clé candidate choisie arbitrairement pour identifier de manière unique les tuples.
*   **Clé étrangère** : Un ensemble d'attributs dans une relation $R_1$ dont les valeurs doivent correspondre aux valeurs d'une clé primaire dans une relation $R_2$.

### Intégrité et Dépendances Fonctionnelles (DF)
*   **Définition (DF)** : Soit $R$ un schéma, et $X, Y \subseteq R$. On note $X \to Y$ (lire "$X$ détermine $Y$") si pour toute instance $r$ de $R$ et tous tuples $t_1, t_2 \in r$ :
    $$\forall A \in X, t_1[A] = t_2[A] \implies \forall B \in Y, t_1[B] = t_2[B]$$
*   **Axiomes d'Armstrong** : Soit $F$ un ensemble de DF sur $R$. La fermeture $F^+$ est déductible par les règles :
    1.  *Réflexivité* : Si $Y \subseteq X$, alors $X \to Y$.
    2.  *Augmentation* : Si $X \to Y$, alors $XZ \to YZ$ (pour tout $Z$).
    3.  *Transitivité* : Si $X \to Y$ et $Y \to Z$, alors $X \to Z$.
    *   *Règles déduites* : Union ($X \to Y$ et $X \to Z \implies X \to YZ$), Décomposition ($X \to YZ \implies X \to Y$), Pseudo-transitivité.
*   **Fermeture d'un ensemble d'attributs ($X^+$)** : Algorithme en temps $O(|F| \times |R|)$ pour trouver tous les attributs déterminés par $X$.

---

## 2. Algèbre Relationnelle

L'algèbre relationnelle est un langage formel procédural.

### Opérateurs fondamentaux
1.  **Sélection ($\sigma_{\phi}(r)$)** : Filtre les tuples vérifiant la condition $\phi$.
    $$\sigma_{\phi}(r) = \{t \in r \mid \phi(t)\}$$
2.  **Projection ($\pi_{A}(r)$)** : Restreint les tuples aux attributs de l'ensemble $A$.
    $$\pi_{A}(r) = \{t[A] \mid t \in r\}$$
3.  **Produit cartésien ($r_1 \times r_2$)** : Combine chaque tuple de $r_1$ avec chaque tuple de $r_2$.
4.  **Renommage ($\rho_{A \leftarrow B}(r)$)** : Change le nom d'un attribut.
5.  **Union ($r_1 \cup r_2$)** : Nécessite que $r_1$ et $r_2$ soient *compatibles d'union* (même schéma).
6.  **Différence ensembliste ($r_1 \setminus r_2$)** (Nécessite aussi la compatibilité d'union).

### Opérateurs dérivés
*   **Intersection** : $r_1 \cap r_2 = r_1 \setminus (r_1 \setminus r_2)$
*   **Jointure naturelle ($r_1 \bowtie r_2$)** : Produit cartésien suivi d'une sélection sur l'égalité des attributs communs et d'une projection pour éliminer les doublons de colonnes.
*   **Theta-jointure ($r_1 \bowtie_{\theta} r_2$ et $\sigma_{\theta}(r_1 \times r_2)$)**

---

## 3. SQL (Structured Query Language) et Logique du Premier Ordre

### Sémantique des requêtes SQL
Une requête SQL s'exprime conceptuellement selon l'ordre d'évaluation suivant :
1.  `FROM` (Produit cartésien et jointures)
2.  `WHERE` (Sélection $\sigma$)
3.  `GROUP BY` (Agrégation)
4.  `HAVING` (Filtrage sur les agrégats)
5.  `SELECT` (Projection $\pi$)
6.  `DISTINCT` (Élimination des doublons)
7.  `ORDER BY` (Tri)

### Théorème de Codd
> **Théorème (Codd, 1970)** : L'algèbre relationnelle et le calcul relationnel (basé sur la logique du premier ordre) ont la même expressivité (pour les requêtes sûres, i.e., n'engendrant pas de relations infinies). SQL (sans récursion) est complet par rapport à l'algèbre relationnelle.

---

## 4. Optimisation des Requêtes et Complexité

### Arbre de requête
Une requête relationnelle est représentée sous forme d'un arbre syntaxique dont les feuilles sont les relations de base et les nœuds internes sont les opérateurs algébriques.

### Règles de réécriture (Heuristiques d'optimisation)
Pour minimiser la taille des résultats intermédiaires :
1.  **Pousse des sélections** : Effectuer les sélections $\sigma$ le plus bas possible dans l'arbre (au plus près des scans de tables).
2.  **Pousse des projections** : Effectuer les projections $\pi$ le plus tôt possible pour réduire la largeur des tuples.
3.  **Commutativité et associativité** : $\bowtie$ et $\times$ sont associatifs et commutatifs. On privilégie les jointures réduisant le plus rapidement la cardinalité.

### Algorithmes de Jointure (Complexité)
Soient $R$ et $S$ deux relations de cardinalités respectives $N$ et $M$.
1.  **Nested Loop Join (Boucles imbriquées)** :
    *   *Principe* : Pour chaque tuple de $r$, parcourir $s$.
    *   *Complexité temporelle* : $O(N \times M)$ en pire cas (sans index), $O(N \log M)$ si un index B-Arbre existe sur la clé de $S$.
2.  **Sort-Merge Join (Fusion-Tri)** :
    *   *Principe* : Trier les deux relations sur l'attribut de jointure, puis les parcourir simultanément.
    *   *Complexité temporelle* : $O(N \log N + M \log M + N + M)$.
3.  **Hash Join (Jointure par hachage)** :
    *   *Principe* : Construire une table de hachage en mémoire sur la plus petite relation ($R$), puis parcourir la seconde ($S$) pour sonder la table.
    *   *Complexité temporelle* : $O(N + M)$ en moyenne (si la mémoire RAM est suffisante).

---

## 5. ACIDité, Transactions et Concurrence

### Propriétés ACID
*   **A**toméricité : Tout ou rien. Les modifications d'une transaction sont validées (*commit*) ou annulées (*rollback*) en bloc.
*   **C**ohérence : Une transaction amène la base d'un état valide à un autre état valide (respect des contraintes d'intégrité).
*   **I**solement : L'exécution concurrente de transactions donne le même résultat que si elles avaient été exécutées séquentiellement.
*   **D**urabilité : Une fois validées, les données persistent même en cas de panne système.

### Ordonnancement (Schedules) et Sérialisabilité
*   **Conflit** : Deux opérations appartiennent à des transactions différentes, accèdent au même élément, et l'une d'elles au moins est une écriture ($W$). Les types de conflits sont $R-W$, $W-R$, et $W-W$.
*   **Sérialisabilité par conflit** : Un ordonnancement est sérialisable par conflit s'il peut être transformé en un ordonnancement séquentiel par des permutations successives d'opérations non en conflit.
*   **Théorème du graphe de conflits** : Un ordonnancement est sérialisable par conflit si et seulement si son graphe de sérialisabilité (sommets = transactions, arcs = conflits orientés de la première vers la seconde) est acyclique.

---

## Méthodes et Savoir-Faire

1.  **Traduire une requête SQL en Algèbre Relationnelle** : Toujours décomposer en partant des clauses internes (`FROM`/`WHERE` $\to$ $\sigma, \bowtie, \times$) vers les externes (`SELECT` $\to$ $\pi$).
2.  **Calculer la fermeture $X^+$** : Dresser la liste des DF applicables itérativement jusqu'à point fixe.
3.  **Vérifier la 3NF (Troisième Forme Normale)** : S'assurer que pour toute DF non triviale $X \to Y$, soit $X$ est une super-clé, soit $Y$ est composé d'attributs premiers (inclus dans au moins une clé candidate).

---

## Pièges à Éviter (Attention aux erreurs classiques !)

*   **Attention aux valeurs NULL** : En SQL, `NULL` représente une valeur inconnue. Les comparaisons avec `NULL` (`= NULL`, `<> NULL`) évaluent à `UNKNOWN` (et non `TRUE` ou `FALSE`). Il faut utiliser `IS NULL` ou `IS NOT NULL`. La logique à trois valeurs (True, False, Unknown) modifie le comportement des filtres `WHERE`.
*   **Confusion entre Ensemble et Multiset (Bag)** : En théorie, une relation est un *ensemble* (pas de doublons). En SQL, par défaut, les tables sont des multisets (les doublons sont autorisés). L'utilisation de `UNION` élimine les doublons (coûteux), tandis que `UNION ALL` les conserve.
*   **Mauvaise application de la transitivité** : Ne pas oublier que $X \to Y$ n'implique pas $Y \to X$ (symétrie fausse).
*   **Oubli des conditions de jointure** : Omettre la clause de jointure dans un `FROM` génère un produit cartésien $R \times S$, ce qui conduit à une explosion combinatoire de la taille du résultat.