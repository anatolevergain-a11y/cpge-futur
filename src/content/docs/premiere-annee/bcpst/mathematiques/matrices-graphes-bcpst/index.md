---
title: 'Cours : Matrices et modélisation par graphes'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $\mathbb{K}$ un corps ($\mathbb{R}$ ou $\mathbb{C}$). 

### Matrices
Une matrice $A$ de taille $n \times p$ (où $n, p \in \mathbb{N}^*$) est un tableau rectangulaire d'éléments de $\mathbb{K}$ comportant $n$ lignes et $p$ colonnes. On note l'ensemble de ces matrices $\mathcal{M}_{n,p}(\mathbb{K})$. 
Soit $A \in \mathcal{M}_{n,p}(\mathbb{K})$. On note $A = (a_{i,j})_{\substack{1 \le i \le n \\ 1 \le j \le p}}$ ou explicitement :
$$A = \begin{pmatrix} 
a_{1,1} & a_{1,2} & \cdots & a_{1,p} \\ 
a_{2,1} & a_{2,2} & \cdots & a_{2,p} \\ 
\vdots & \vdots & \ddots & \vdots \\ 
a_{n,1} & a_{n,2} & \cdots & a_{n,p} 
\end{pmatrix} \in \mathcal{M}_{n,p}(\mathbb{K})$$

Si $n = p$, la matrice est dite carrée d'ordre $n$, et l'ensemble correspondant est noté $\mathcal{M}_n(\mathbb{K})$.

### Graphes orientés et pondérés
Un graphe orienté est un couple $G = (S, A)$ où :
- $S$ est un ensemble fini non vide de sommets, de cardinal $n = |S|$.
- $A$ est un ensemble d'arcs (couples orientés de sommets).

Un graphe est dit pondéré si une application de poids est définie sur l'ensemble des arcs.

### Matrice d'adjacence
Soit $G = (S, A)$ un graphe orienté dont l'ensemble des sommets est ordonné $S = \{s_1, s_2, \dots, s_n\}$. La matrice d'adjacence associée au graphe $G$ est la matrice $M \in \mathcal{M}_n(\mathbb{R})$ définie par :
$$M = (m_{i,j})_{\substack{1 \le i \le n \\ 1 \le j \le n}} \quad \text{avec} \quad m_{i,j} = \begin{cases} 1 & \text{s'il existe un arc de } s_i \text{ vers } s_j \\ 0 & \text{sinon} \end{cases}$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème : Interprétation des puissances de la matrice d'adjacence
Soit $G = (S, A)$ un graphe orienté et $M \in \mathcal{M}_n(\mathbb{R})$ sa matrice d'adjacence associée. Pour tout entier $k \in \mathbb{N}^*$, le coefficient $(i,j)$ de la matrice $M^k$, noté $(M^k)_{i,j}$, représente le nombre de chemins de longueur $k$ (c'est-à-dire comportant $k$ arcs) allant du sommet $s_i$ au sommet $s_j$.

#### Démonstration (par récurrence sur $k$)
* **Initialisation ($k = 1$) :** 
  Par définition, la matrice $M^1 = M$ a pour coefficients $m_{i,j}$, qui valent $1$ s'il y a un arc de $s_i$ vers $s_j$ (chemin de longueur $1$) et $0$ sinon. La propriété est donc vraie pour $k = 1$.

* **Hérédité :** 
  Supposons que la propriété soit vraie pour un entier $k \ge 1$ fixé : pour tout $(i,j) \in \{1, \dots, n\}^2$, le coefficient $(M^k)_{i,j}$ est le nombre de chemins de longueur $k$ de $s_i$ à $s_j$.
  Soit $M^{k+1} = M^k \times M$. Par definition du produit matriciel, le coefficient $(i,j)$ de $M^{k+1}$ s'exprime par :
  $$(M^{k+1})_{i,j} = \sum_{l=1}^n (M^k)_{i,l} m_{l,j}$$
  - $(M^k)_{i,l}$ est le nombre de chemins de longueur $k$ de $s_i$ à un sommet intermédiaire $s_l$.
  - $m_{l,j}$ est le nombre de chemins de longueur $1$ (arc) de $s_l$ à $s_j$.
  
  Le produit $(M^k)_{i,l} m_{l,j}$ représente donc le nombre de chemins de longueur $k+1$ allant de $s_i$ à $s_j$ en passant par $s_l comme avant-dernier sommet$. En sommant sur tous les sommets intermédiaires $s_l$ possibles, on obtient par additivité le nombre total de chemins de longueur $k+1$ de $s_i$ à $s_j$.
  
* **Conclusion :** 
  La propriété est vraie au rang $1$ et est héréditaire pour tout $k \in \mathbb{N}^*$. $\blacksquare$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Modélisation matricielle de chaînes de Markov (très usité en BCPST)
Soit un système dynamique à temps discret dont l'état à l'étape $k$ est représenté par un vecteur colonne $X_k \in \mathcal{M}_{n,1}(\mathbb{R})$.
La transition d'un état à l'autre est régie par une matrice stochastique $P \in \mathcal{M}_n(\mathbb{R})$ (matrice dont les coefficients sont positifs ou nuls et dont la somme des coefficients de chaque colonne vaut $1$).

L'équation d'évolution est :
$$X_{k+1} = P X_k \quad (\text{avec } X_k \in \mathcal{M}_{n,1}(\mathbb{R}), P \in \mathcal{M}_n(\mathbb{R}))$$

### Algorithme de calcul des chemins de longueur $k$
1. **Étape 1 :** Identifier l'ensemble des sommets $S$ et numéroter les sommets de $1$ à $n$.
2. **Étape 2 :** Établir la matrice d'adjacence $M \in \mathcal{M}_n(\mathbb{R})$ du graphe.
3. **Étape 3 :** Calculer la puissance $M^k$ par multiplications successives ou par diagonalisation de $M$ si elle est diagonalisable :
   Si $M = P D P^{-1}$ (avec $P, D \in \mathcal{M}_n(\mathbb{R})$), alors $M^k = P D^k P^{-1}$.
4. **Étape 4 :** Lire le coefficient recherché $(M^k)_{i,j}$.

---

## ⚠️ 4. Pièges classiques & Erreurs à éviter

1. **Confusion sur le sens des indices :** 
   Dans un graphe orienté, le coefficient $m_{i,j}$ de la matrice d'adjacence correspond à un arc partant de la ligne $i$ vers la colonne $j$ ($s_i \to s_j$). Inverser les lignes et les colonnes conduit à étudier le graphe transposé.
2. **Non-commutativité du produit matriciel :** 
   Soient $A, B \in \mathcal{M}_n(\mathbb{R})$ avec $n \ge 2$. En général, $AB \neq BA$. Ne jamais utiliser les identités remarquables usuelles ($(A+B)^2 \neq A^2 + 2AB + B^2$) sauf si les matrices commutent ($AB = BA$).
3. **Erreur de dimension dans les produits :** 
   Pour pouvoir multiplier $A \in \mathcal{M}_{n,p}(\mathbb{R})$ par $B \in \mathcal{M}_{q,r}(\mathbb{R})$, il est impératif que $p = q$. Le résultat appartiendra à $\mathcal{M}_{n,r}(\mathbb{R})$.
4. **Oubli de la nature stochastique :** 
   Pour les matrices de transition en dynamique des populations ou génétique, vérifier impérativement que la somme des coefficients de chaque colonne est strictement égale à $1$ (conservation de la masse ou de la proportion totale).