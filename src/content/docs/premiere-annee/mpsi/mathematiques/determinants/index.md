---
title: 'Cours : Groupe symétrique et Déterminants'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Cours de Mathématiques - MPSI
## Chapitre : Groupe symétrique et Déterminants

---

Ce chapitre formalise la notion d'aire et de volume en dimension quelconque à travers l'étude des formes multilinéaires alternées, et s'appuie sur la structure combinatoire du groupe des permutations d'un ensemble fini.

---

## I. Le groupe symétrique $\mathfrak{S}_n$

### 1. Définitions fondamentales

Soit $E$ un ensemble à $n$ éléments. On note usuellement $E = \{1, 2, \dots, n\}$.
*   **Définition (Permutation) :** On appelle *permutation* de $E$ toute bijection de $E$ dans $E$.
*   **Définition (Groupe symétrique) :** L'ensemble des permutations de $E$, muni de la loi de composition des applications $\circ$, forme un groupe non commutatif pour $n \ge 3$, noté $\mathfrak{S}_n$. Son cardinal est $n!$.

*Notation matricielle (ou circulaire) :* Une permutation $\sigma \in \mathfrak{S}_n$ se note souvent :
$$\sigma = \begin{pmatrix} 1 & 2 & \dots & n \\ \sigma(1) & \sigma(2) & \dots & \sigma(n) \end{pmatrix}$$

### 2. Cycles et supports

*   **Définition (Support) :** Le *support* d'une permutation $\sigma \in \mathfrak{S}_n$ est l'ensemble des éléments $x \in \{1, \dots, n\}$ tels que $\sigma(x) \neq x$.
*   **Définition (Cycle) :** Soit $k \ge 2$. Un $k$-cycle (ou cycle de longueur $k$) est une permutation $\sigma$ dont le support $\{a_1, a_2, \dots, a_k\}$ est de cardinal $k$ tel que :
    $$\sigma(a_1) = a_2, \sigma(a_2) = a_3, \dots, \sigma(a_{k-1}) = a_k, \sigma(a_k) = a_1$$
    et $\sigma(x) = x$ pour tout $x$ hors de ce support. On le note $(a_1 \; a_2 \; \dots \; a_k)$.
*   **Définition (Transposition) :** Un 2-cycle est appelé une *transposition*.

> **Théorème 1 (Décomposition en cycles disjoints) :**
> Toute permutation $\sigma \in \mathfrak{S}_n$ se décompose de manière unique (à l'ordre près des facteurs) comme un produit de cycles à supports deux à deux disjoints.

> **Théorème 2 (Générateurs de $\mathfrak{S}_n$) :**
> Le groupe $\mathfrak{S}_n$ est engendré par l'ensemble des transpositions. Plus précisément, il est engendré par les transpositions de la forme $(i \; i+1)$ pour $1 \le i \le n-1$.

### 3. Signature d'une permutation

> **Définition-Théorème (Signature) :**
> Il existe un unique morphisme de groupes $\varepsilon : (\mathfrak{S}_n, \circ) \to (\{1, -1\}, \times)$ tel que pour toute transposition $t$, $\varepsilon(t) = -1$.
> Pour toute permutation $\sigma$, $\varepsilon(\sigma)$ est la *signature* de $\sigma$. 
> *   Si $\varepsilon(\sigma) = 1$, $\sigma$ est dite **paire**.
> *   Si $\varepsilon(\sigma) = -1$, $\sigma$ est dite **impaire**.

*   **Formule explicite :** $\varepsilon(\sigma) = \prod_{1 \le i < j \le n} \frac{\sigma(j) - \sigma(i)}{j - i}$
*   **Lien avec les cycles :** La signature d'un $k$-cycle est $(-1)^{k-1}$. Ainsi, un cycle de longueur impaire est pair, et un cycle de longueur paire est impair.

---

## II. Formes multilinéaires

Soit $K$ un corps ($K = \mathbb{R}$ ou $\mathbb{C}$), $E$ un $K$-espace vectoriel et $p \in \mathbb{N}^*$.

### 1. Définitions

*   **Définition (Forme $p$-linéaire) :** Une application $f : E^p \to K$ est dite $p$-linéaire (ou multilinéaire) si elle est linéaire par rapport à chacune de ses variables, les $p-1$ autres étant fixées.
*   **Définition (Symétrie et Alternance) :** Une application $p$-linéaire $f$ est dite :
    *   *Symétrique* si pour toute permutation $\sigma \in \mathfrak{S}_p$ et pour tous $(x_1, \dots, x_p) \in E^p$ :
        $$f(x_{\sigma(1)}, \dots, x_{\sigma(p)}) = f(x_1, \dots, x_p)$$
    *   *Alternée* si dès que deux arguments sont égaux, $f$ s'annule :
        $$\forall (x_1, \dots, x_p) \in E^p, \; (\exists i \neq j, \; x_i = x_j) \implies f(x_1, \dots, x_p) = 0$$

> **Proposition 1 (Propriétés des formes alternées) :**
> Soit $f$ une forme $p$-linéaire alternée sur $E^p$.
> 1. Si on échange deux vecteurs, la valeur est opposée : $f(\dots, x_j, \dots, x_i, \dots) = -f(\dots, x_i, \dots, x_j, \dots)$.
> 2. Si on ajoute à un vecteur une combinaison linéaire des autres vecteurs, la valeur ne change pas.
> 3. Si la famille $(x_1, \dots, x_p)$ est liée, alors $f(x_1, \dots, x_p) = 0$.

---

## III. Déterminant d'une famille de vecteurs

On se place ici en dimension finie $n$, soit $E$ un $K$-espace vectoriel de dimension $n$ et $\mathcal{B} = (e_1, \dots, e_n)$ une base de $E$.

### 1. Existence et unicité

> **Théorème 3 :**
> Il existe une unique forme $n$-linéaire alternée $D$ sur $E^n$ telle que $D(e_1, \dots, e_n) = 1$.
> Cette application est appelée le **déterminant dans la base $\mathcal{B}$**.

### 2. Formule explicite

Soit $n$ vecteurs de $E$ donnés par leurs coordonnées dans la base $\mathcal{B}$ : $x_j = \sum_{i=1}^n a_{i,j} e_i$. 
Le déterminant de la famille $(x_1, \dots, x_n)$ dans la base $\mathcal{B}$ s'exprime par la **formule de Leibniz** :
$$\det_{\mathcal{B}}(x_1, \dots, x_n) = \sum_{\sigma \in \mathfrak{S}_n} \varepsilon(\sigma) \prod_{i=1}^n a_{\sigma(i), i}$$

---

## IV. Déterminant d'un endomorphisme et d'une matrice carrée

### 1. Déterminant d'une matrice carrée

*   **Définition :** Soit $A = (a_{i,j}) \in \mathcal{M}_n(K)$. Le déterminant de $A$, noté $\det(A)$ ou $|A|$, est le déterminant des $n$ vecteurs colonnes de $A$ dans la base canonique de $K^n$.

> **Théorème 4 (Propriétés fondamentales) :**
> 1. **Multilinéarité des colonnes :** Le déterminant est linéaire par rapport à chaque colonne.
> 2. **Alternance :** Si $A$ a deux colonnes identiques, $\det(A) = 0$.
> 3. **Transposition :** $\det(A^T) = \det(A)$ (les propriétés vraies pour les colonnes le sont donc aussi pour les lignes).
> 4. **Opérations sur les lignes/colonnes :** Ajouter un multiple d'une colonne (resp. ligne) à une autre ne modifie pas le déterminant. Multiplier une colonne par un scalaire $\lambda$ multiplie le déterminant par $\lambda$.
> 5. **Multiplicativité (Théorème de Cauchy-Binet) :** Pour tous $A, B \in \mathcal{M}_n(K)$ :
>    $$\det(AB) = \det(A)\det(B)$$
> 6. **Caractérisation de l'inversibilité :** $A$ est inversible si et seulement si $\det(A) \neq 0$. Dans ce cas : $\det(A^{-1}) = (\det(A))^{-1}$.

### 2. Déterminant d'un endomorphisme

*   **Définition :** Soit $u \in \mathcal{L}(E)$. Le déterminant de $u$, noté $\det(u)$, est le déterminant de la matrice de $u$ dans n'importe quelle base $\mathcal{B}$ de $E$ (cette définition est indépendante du choix de $\mathcal{B}$ car $\det(P^{-1}AP) = \det(A)$).

---

## V. Méthodes et Savoir-Faire

1.  **Calculer un déterminant de grande taille ($n \ge 4$) :**
    *   *Méthode du pivot de Gauss :* Effectuer des opérations élémentaires sur les lignes et les colonnes pour se ramener à une matrice triangulaire (le déterminant est alors le produit des coefficients diagonaux).
    *   *Développement par rapport à une ligne ou une colonne :* $\det(A) = \sum_{j=1}^n (-1)^{i+j} a_{i,j} \det(A_{i,j})$ où $A_{i,j}$ est la matrice extraite.
2.  **Montrer qu'une famille est une base :**
    *   Calculer le déterminant de cette famille dans une base connue. Si le déterminant est non nul, la famille est une base.
3.  **Déterminer si une matrice est inversible :**
    *   Calculer son déterminant.

---

## VI. Pièges classiques à éviter

*   **Attention au scalaire lors d'une mise en facteur :** Si $A \in \mathcal{M}_n(K)$, $\det(\lambda A) = \lambda^n \det(A)$ et non $\lambda \det(A)$.
*   **Linéarité :** Le déterminant **n'est pas** une application linéaire : en général, $\det(A+B) \neq \det(A) + \det(B)$.
*   **Transposition de la signature :** Ne pas confondre la signature d'une transposition (qui vaut toujours $-1$) et la transposition matricielle.