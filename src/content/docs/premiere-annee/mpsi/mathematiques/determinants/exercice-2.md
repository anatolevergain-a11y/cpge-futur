---
title: 'Exercice 2 : Calculs pratiques et systèmes de Cramer'
description: 'Problème d entraînement type concours officiel.'
---

# Problème guidé : Calculs pratiques et systèmes de Cramer

## Introduction et Objectifs
Ce problème s'inscrit dans le cadre des programmes de mathématiques de MPSI. Il explore les liens profonds entre le groupe symétrique $\mathfrak{S}_n$, la notion de déterminant et la résolution explicite de systèmes linéaires de Cramer par les formules de Cramer. Une attention particulière sera portée aux aspects algorithmiques et aux limites de ces méthodes pour de grandes dimensions, préparant ainsi l'esprit aux exigences des concours X-ENS et Mines-Ponts.

---

## Énoncé

Soit $n \in \mathbb{N}^*$ et $\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$. On note $\mathcal{M}_n(\mathbb{K})$ l'espace des matrices carrées d'ordre $n$ à coefficients dans $\mathbb{K}$, et $\mathfrak{S}_n$ le groupe symétrique des permutations de l'ensemble $\{1, 2, \dots, n\}$.

Pour une matrice $A = (a_{i,j})_{1 \le i,j \le n} \in \mathcal{M}_n(\mathbb{K})$, on rappelle la définition du déterminant de $A$ via le groupe symétrique :
$$\det(A) = \sum_{\sigma \in \mathfrak{S}_n} \varepsilon(\sigma) \prod_{i=1}^n a_{i, \sigma(i)}$$
où $\varepsilon(\sigma)$ désigne la signature de la permutation $\sigma$.

Soit $B = (b_{i,j})$ la matrice de $\mathcal{M}_n(\mathbb{K})$ définie par :
$$b_{i,j} = \begin{cases} 
x & \text{si } i = j \\
1 & \text{si } |i - j| = 1 \\
0 & \text{sinon}
\end{cases}$$
où $x \in \mathbb{K}$ est un paramètre.

---

## Questions

### Partie I : Étude d'un déterminant tridiagonal par récurrence
1. Écrire explicitement la matrice $B_3$ d'ordre $3$.
2. En développant par rapport à la première colonne, établir une relation de récurrence linéaire d'ordre $2$ entre les déterminants $D_n(x) = \det(B_n)$ pour $n \ge 3$, avec $D_1(x) = x$ et $D_2(x) = x^2 - 1$.
3. Résoudre cette relation de récurrence pour $x \ge 2$ et exprimer $D_n(x)$ en fonction de $n$ et $x$.

### Partie II : Application aux systèmes de Cramer
4. On considère le système linéaire $B_n X = Y$, où $X = (x_1, \dots, x_n)^T$ et $Y = (y_1, \dots, y_n)^T \in \mathbb{K}^n$. À quelle condition sur $x$ ce système est-il un système de Cramer ?
5. En utilisant les formules de Cramer, exprimer la solution $x_1$ du système en fonction des déterminants $D_k(x)$.

### Partie III : Analyse critique et complexité algorithmique
6. **Analyse critique :** Évaluer le nombre d'opérations élémentaires (multiplications/additions) nécessaires pour calculer un déterminant d'ordre $n$ via la formule explicite utilisant $\mathfrak{S}_n$, puis via les formules de Cramer pour résoudre un système linéaire complet. Comparer cette approche théorique avec l'algorithme du pivot de Gauss en termes de complexité. Discuter des limites numériques et pratiques de ces modèles sur ordinateur.

---

## Pistes et Indications
1. **Q1-Q2 :** Pour la récurrence, le développement par rapport à la première ligne ou colonne est souvent le plus efficace pour les matrices tridiagonales. Attention aux cofacteurs aux dimensions $1$ et $2$.
2. **Q3 :** Pensez à l'équation caractéristique associée à la suite récurrente linéaire d'ordre 2. On pourra poser $x = 2\cos(\theta)$ si l'on travaille dans le domaine trigonométrique, ou utiliser les racines évidentes.
3. **Q6 :** Rappelez-vous que le cardinal de $\mathfrak{S}_n$ est $n!$. Utilisez la formule de Stirling pour estimer la croissance de $n!$ face à un algorithme polynomial (comme Gauss en $O(n^3)$).

---

## Corrigé Pas à Pas

### Partie I_1. **Matrice $B_3$ :**
   Par application directe de la définition, $B_3$ est la matrice tridiagonale :
   $$B_3 = \begin{pmatrix} x & 1 & 0 \\ 1 & x & 1 \\ 0 & 1 & x \end{pmatrix}$$

2. **Relation de récurrence :**
   En développant le déterminant $D_n(x) = \det(B_n)$ par rapport à la première colonne, on obtient :
   $$D_n(x) = x \cdot D_{n-1}(x) - 1 \cdot \det(C)$$
   où $C$ est la matrice obtenue en supprimant la première ligne et la première colonne, dont le déterminant se développe à son tour par rapport à sa première ligne pour donner $D_{n-2}(x)$.
   Ainsi, pour tout $n \ge 3$ :
   $$D_n(x) = x D_{n-1}(x) - D_{n-2}(x)$$
   avec les conditions initiales $D_1(x) = x$ et $D_2(x) = x^2 - 1$.

3. **Résolution de la récurrence :**
   L'équation caractéristique associée est $r^2 - xr + 1 = 0$. Le discriminant est $\Delta = x^2 - 4$.
   Si $x > 2$, $\Delta > 0$, l'équation possède deux racines distinctes $r_1, r_2 = \frac{x \pm \sqrt{x^2-4}}{2}$.
   La solution générale s'écrit $D_n(x) = A r_1^n + B r_2^n$. En utilisant les conditions initiales pour $n=1$ et $n=2$, on exprime $A$ et $B$ (ou plus simplement, en reconnaissant les polynômes de Chebyshev de seconde espèce).

### Partie II
4. **Condition de Cramer :**
   Un système carré $AX = Y$ est un système de Cramer si et seulement si la matrice $A$ est inversible, c'est-à-dire si et seulement si $\det(A) \neq 0$. 
   Ici, le système est de Cramer si et seulement si $D_n(x) \neq 0$.

5. **Formules de Cramer :**
   Les formules de Cramer donnent pour la première composante :
   $$x_1 = \frac{\det(B_n^{(1)})}{D_n(x)}$$
   où $B_n^{(1)}$ est la matrice $B_n$ dont la première colonne a été remplacée par le vecteur colonne $Y = (y_1, \dots, y_n)^T$.

### Partie III
6. **Analyse critique des limites du modèle :**
   * **Complexité via $\mathfrak{S}_n$ et Cramer :** Le calcul direct du déterminant via la sommation sur $\mathfrak{S}_n$ demande de calculer $n!$ termes. Pour chaque terme, il faut effectuer $n-1$ multiplications, soit un coût en $O(n \cdot n!)$. De plus, pour résoudre un système de Cramer de dimension $n$, il faut calculer $n+1$ déterminants de taille $n$, ce qui conduit à une complexité en $O((n+1) \cdot n!) = O((n+1)!)$.
   * **Comparaison avec le pivot de Gauss :** L'algorithme du pivot de Gauss permet de triangulariser la matrice en $O(n^3)$ opérations.
   * **Limites pratiques et numériques :** La méthode de Cramer et la définition par le groupe symétrique sont des outils d'une grande élégance **théorique**, mais totalement inutilisables en **calcul numérique effectif** dès que $n \ge 10$ en raison de l'explosion combinatoire de $n!$ (par exemple, $20! \approx 2.4 \times 10^{18}$, ce qui dépasse les capacités des processeurs actuels pour un calcul en temps raisonnable). En outre, l'accumulation d'erreurs d'arrondi en virgule flottante rend les formules de Cramer extrêmement instables numériquement comparées à une 
     décomposition $LU$ ou à un pivot de Gauss avec recherche de pivot partiel.