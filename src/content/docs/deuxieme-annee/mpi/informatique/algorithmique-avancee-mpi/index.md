---
title: 'Cours : Algorithmique avancée et graphes'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Algorithmique Avancée et Graphes
**Filière :** MP / MPI (Deuxième année)  
**Matière :** Informatique  

---

## 1. Rappels et Représentations des Graphes

Un graphe orienté $G = (S, A)$ est défini par un ensemble fini de sommets $S$ (ou $V$) et un ensemble d'arcs $A$ (ou $E$) qui sont des couples d'éléments de $S$. Pour les graphes non orientés, $A$ est un ensemble de paires (arêtes). On pose $|S| = n$ et $|A| = m$.

### Structures de données usuelles en Ocaml / Python
1. **Matrice d'adjacence :** Tableau 2D de booléens ou de poids de taille $n \times n$.
   * *Complexité spatiale :* $\mathcal{O}(n^2)$.
   * *Test d'adjacence :* $\mathcal{O}(1)$.
   * *Itération sur les voisins :* $\mathcal{O}(n)$.
2. **Listes d'adjacence :** Tableau ou table de hachage associant à chaque sommet la liste de ses voisins.
   * *Complexité spatiale :* $\mathcal{O}(n + m)$.
   * *Test d'adjacence :* $\mathcal{O}(\text{degré sortant})$.
   * *Itération sur les voisins :* $\mathcal{O}(\text{degré sortant})$.

---

## 2. Parcours fondamentaux

### 2.1 Parcours en Largeur (BFS - Breadth-First Search)
Utilise une **file** (FIFO). Idéal pour calculer les plus plus courts chemins dans un graphe non pondéré.
* **Complexité temporelle :** $\mathcal{O}(n + m)$ (avec listes d'adjacence).

### 2.2 Parcours en Profondeur (DFS - Depth-First Search)
Utilise une **pile** (LIFO) ou la récursivité. Permet de dater l'entrée et la sortie des sommets (dates de découverte et de fin de traitement), fondamental pour l'analyse structurelle des graphes.

---

## 3. Algorithmes sur les Graphes Pondérés

### 3.1 Algorithme de Dijkstra (Plus courts chemins à sources multiples / unique)
* **Problème :** Étant donné un graphe $G = (S, A)$ muni d'une fonction de poids positif $\omega : A \to \mathbb{R}^+$ et un sommet source $s$, trouver les distances minimales de $s$ à tous les autres sommets.
* **Principe :** Programmation dynamique / Glouton. On maintient un ensemble de sommets traités dont la distance minimale est définitive.
* **Complexité avec une file de priorité (tas min) :** 
  $$\mathcal{O}((n + m) \log n)$$

### 3.2 Algorithme de Bellman-Ford
* **Problème :** Idem Dijkstra, mais autorise les poids négatifs. Détecte la présence de circuits absorbants (de poids strictement négatif).
* **Complexité temporelle :** $\mathcal{O}(n \cdot m)$.

### 3.3 Algorithme de Floyd-Warshall (Plus courts chemins de toutes les paires)
* **Problème :** Trouver les plus courts chemins entre *toutes* les paires de sommets.
* **Principe (Programmation dynamique) :** Soit $d^{(k)}(i, j)$ la distance minimale de $i$ à $j$ en n'utilisant que des sommets intermédiaires dans l'ensemble $\{1, \dots, k\}$.
  $$d^{(k)}(i, j) = \min\left( d^{(k-1)}(i, j), \, d^{(k-1)}(i, k) + d^{(k-1)}(k, j) \right)$$
* **Complexité temporelle :** $\mathcal{O}(n^3)$.
* **Complexité spatiale :** $\mathcal{O}(n^2)$.

---

## 4. Arbres Couvrants de Poids Minimal (ACPM)

On cherche un sous-graphe acyclique couvrant tous les sommets dont la somme des poids des arêtes est minimale (graphe non orienté connexe).

### 4.1 Algorithme de Kruskal (Glouton)
1. Trier toutes les arêtes par ordre de poids croissant.
2. Parcourir les arêtes et les ajouter à l'ACPM si elles ne créent pas de cycle (test réalisé grâce à une structure de **Union-Find** / *Disjoint-Set*).
* **Complexité temporelle :** $\mathcal{O}(m \log m) = \mathcal{O}(m \log n)$ (dominée par le tri des arêtes).

### 4.2 Algorithme de Prim (Glouton)
Similaire à Dijkstra, on fait croître un arbre à partir d'un sommet en ajoutant à chaque étape l'arête de plus petit poids connectant l'arbre à un nouveau sommet.
* **Complexité temporelle :** $\mathcal{O}((n + m) \log n)$ avec un tas binaire.

---

## 5. Flots dans les Réseaux

### Définitions
Un **réseau de transport** est un graphe orienté $G = (S, A)$ avec :
* Une **source** $s \in S$ (sans prédécesseur) et un **puits** $p \in S$ (sans successeur).
* Une **capacité** $c(u, v) \ge 0$ pour chaque arc $(u, v)$.

Un **flot** est une fonction $f : A \to \mathbb{R}^+$ telle que :
1. **Contrainte de capacité :** $\forall (u, v) \in A, \quad 0 \le f(u, v) \le c(u, v)$.
2. **Conservation du flot :** $\forall v \in S \setminus \{s, p\}, \quad \sum_{(u, v) \in A} f(u, v) = \sum_{(v, w) \in A} f(v, w)$.

La **valeur du flot** est la quantité totale sortant de la source : $|f| = \sum_{(s, v) \in A} f(s, v)$.

### 5.1 Algorithme de Ford-Fulkerson
* **Principe :** Utilisation du graphe résiduel $G_f$ et recherche de **chemins augmentants** (par BFS ou DFS dans $G_f$).
* **Théorème du flot maximal / coupe minimale (Ford-Fulkerson) :** Un flot est maximal si et seulement s'il n'existe plus de chemin augmentant dans le graphe résiduel.
* **Complexité :** Si les capacités sont des entiers, l'algorithme termine en $\mathcal{O}(m \cdot |f^*|)$ où $|f^*|$ est la valeur du flot maximal.
* **Variante (Edmonds-Karp) :** En choisissant les chemins augmentants les plus courts via un BFS, la complexité devient polynomiale : 
  $$\mathcal{O}(n \cdot m^2)$$

---

## 6. Algorithmique Avancée sur les Chaînes (Complément)

### Algorithme de KMP (Knuth-Morris-Pratt)
Recherche efficace d'un motif $W$ de longueur $m$ dans un texte $T$ de longueur $n$.
* **Principe :** Utilisation d'une table de transpositions (le tableau $\pi$ ou *pi-table*) précalculée sur le motif pour éviter de relire les caractères déjà comparés dans le texte.
* **Complexité temporelle :** $\mathcal{O}(n + m)$ (garantie dans le pire des cas, contrairement à l'algorithme naïf en $\mathcal{O}(n \cdot m)$).