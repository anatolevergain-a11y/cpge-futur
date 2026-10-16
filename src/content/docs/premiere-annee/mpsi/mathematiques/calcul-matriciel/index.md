---
title: 'Cours : Calcul matriciel et systèmes'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Cours de Mathématiques - MPSI
## Chapitre : Calcul matriciel et systèmes

---

Le calcul matriciel est l'outil fondamental de l'algèbre linéaire. Il permet de manipuler des familles finies de vecteurs, de représenter des applications linéaires et de résoudre des systèmes d'équations linéaires. Dans tout ce chapitre, $\mathbb{K}$ désigne le corps $\mathbb{R}$ ou $\mathbb{C}$.

---

## 1. Espaces vectoriels des matrices $\mathcal{M}_{n,p}(\mathbb{K})$

### Définitions fondamentales
Soient $n, p \in \mathbb{N}^*$. 
* Une **matrice** $A$ à coefficients dans $\mathbb{K}$, de taille $n \times p$ (ou $n$ lignes et $p$ colonnes), est un tableau rectangulaire d'éléments de $\mathbb{K}$ :
  $$A = \begin{pmatrix} a_{1,1} & a_{1,2} & \cdots & a_{1,p} \\ a_{2,1} & a_{2,2} & \cdots & a_{2,p} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n,1} & a_{n,2} & \cdots & a_{n,p} \end{pmatrix} = (a_{i,j})_{\substack{1 \le i \le n \\ 1 \le j \le p}}$$
* L'ensemble de ces matrices est noté $\mathcal{M}_{n,p}(\mathbb{K})$ (ou $\mathcal{M}_n(\mathbb{K})$ si $n=p$, matrices carrées).
* Deux matrices sont égales si et seulement si elles ont la même taille et tous leurs coefficients coïncident.

### Opérations algébriques
1. **Addition :** Si $A = (a_{i,j})$ et $B = (b_{i,j})$ sont dans $\mathcal{M}_{n,p}(\mathbb{K})$, leur somme $A+B$ est la matrice $(a_{i,j} + b_{i,j})$.
2. **Multiplication par un scalaire :** Pour $\lambda \in \mathbb{K}$ et $A = (a_{i,j})$, $\lambda A = (\lambda a_{i,j})$.

> **Théorème 1.** $(\mathcal{M}_{n,p}(\mathbb{K}), +, \cdot)$ est un $\mathbb{K}$-espace vectoriel. Sa dimension est $n \times p$.
> *Preuve (esquisse) :* La base canonique est constituée des matrices $(E_{i,j})_{1 \le i \le n, 1 \le j \le p}$, où $E_{i,j}$ ne contient que des $0$ partout sauf un $1$ à la position $(i,j)$. $\square$

---

## 2. Produit matriciel

### Définition
Soient $A = (a_{i,j}) \in \mathcal{M}_{n,p}(\mathbb{K})$ et $B = (b_{j,k}) \in \mathcal{M}_{p,q}(\mathbb{K})$. Le produit $C = AB$ est la matrice $C = (c_{i,k}) \in \mathcal{M}_{n,q}(\mathbb{K})$ dont les coefficients sont définis par :
$$c_{i,k} = \sum_{j=1}^{p} a_{i,j} b_{j,k}$$

> **Piège classique :** Le produit matriciel n'est défini que si le nombre de *colonnes* de la première matrice est égal au nombre de *lignes* de la seconde.

### Propriétés du produit
1. **Associativité :** $(AB)C = A(BC)$ lorsque les tailles le permettent.
2. **Distributivité :** $A(B+C) = AB + AC$ et $(A+B)C = AC + BC$.
3. **Non-commutativité :** En général, $AB \neq BA$ (même si $n=p$, $\mathcal{M}_n(\mathbb{K})$ n'est pas commutatif pour $n \ge 2$).
4. **Diviseurs de zéro :** Il existe des matrices non nulles $A, B$ telles que $AB = 0$.
5. **Non-intégrité :** $AB = AC$ n'implique pas $B = C$ (même si $A \neq 0$).

---

## 3. Anneau des matrices carrées $\mathcal{M}_n(\mathbb{K})$

### L'anneau $(\mathcal{M}_n(\mathbb{K}), +, \times)$
Pour $n \ge 2$, $(\mathcal{M}_n(\mathbb{K}), +, \times)$ est un anneau unitaire non commutatif. 
* L'élément neutre pour l'addition est la matrice nulle $0_n$.
* L'élément neutre pour la multiplication est la matrice identité $I_n = (\delta_{i,j})$ (où $\delta_{i,j}$ est le symbole de Kronecker).

### Puissances d'une matrice
Pour $A \in \mathcal{M}_n(\mathbb{K})$ et $k \in \mathbb{N}$, on définit par récurrence $A^0 = I_n$ et $A^{k+1} = A^k A$.

> **Méthode (Formule du binôme de Newton) :**
> Si deux matrices $A$ et $B$ commutent ($AB = BA$), alors pour tout $n \in \mathbb{N}$ :
> $$(A+B)^n = \sum_{k=0}^n \binom{n}{k} A^k B^{n-k}$$
> *Attention :* Si $AB \neq BA$, cette formule est fausse en général.

---

## 4. Inversibilité et Groupe linéaire

### Définitions
* Une matrice $A \in \mathcal{M}_n(\mathbb{K})$ est dite **inversible** s'il existe une matrice $B \in \mathcal{M}_n(\mathbb{K})$ telle que $AB = BA = I_n$.
* Cette matrice $B$, unique, est notée $A^{-1}$.
* L'ensemble des matrices inversibles de $\mathcal{M}_n(\mathbb{K})$ est noté $\text{GL}_n(\mathbb{K})$ (Groupe Linéaire).

> **Théorème 2 (Caractérisation unilatérale).** 
> Soit $A \in \mathcal{M}_n(\mathbb{K})$. Les assertions suivantes sont équivalentes :
> 1. $A \in \text{GL}_n(\mathbb{K})$ (inversible à gauche et à droite).
> 2. Il existe $B$ telle que $AB = I_n$ (inversible à droite).
> 3. Il existe $C$ telle que $CA = I_n$ (inversible à gauche).
> *(Ce résultat fondamental repose sur le théorème du rang pour les applications linéaires associées).*

### Transposition
* Soit $A = (a_{i,j}) \in \mathcal{M}_{n,p}(\mathbb{K})$. La **transposée** de $A$, notée $A^T$ (ou $^t\!A$), est la matrice de $\mathcal{M}_{p,n}(\mathbb{K})$ définie par $A^T = (a_{j,i})$.
* **Propriétés :** $(A+B)^T = A^T + B^T$, $(\lambda A)^T = \lambda A^T$, $(AB)^T = B^T A^T$.
* Si $A \in \text{GL}_n(\mathbb{K})$, alors $A^T \in \text{GL}_n(\mathbb{K})$ et $(A^T)^{-1} = (A^{-1})^T$.

---

## 5. Systèmes linéaires

### Forme matricielle d'un système
Un système linéaire de $n$ équations à $p$ inconnues $x_1, \dots, x_p$ s'écrit sous forme matricielle :
$$AX = B$$
où $A \in \mathcal{M}_{n,p}(\mathbb{K})$ est la matrice des coefficients, $X = \begin{pmatrix} x_1 \\ \vdots \\ x_p \end{pmatrix} \in \mathcal{M}_{p,1}(\mathbb{K})$ est le vecteur colonne des inconnues, et $B \in \mathcal{M}_{n,1}(\mathbb{K})$ est le second membre.

### Système homogène associé
C'est le système $AX = 0$. L'ensemble de ses solutions est un sous-espace vectoriel de $\mathcal{M}_{p,1}(\mathbb{K})$.

> **Théorème 3 (Structure de l'ensemble des solutions).**
> L'ensemble des solutions d'un système $AX = B$ (s'il n'est pas vide) est un affine de direction l'espace des solutions du système homogène $AX = 0$. Autrement dit : 
> $$\mathcal{S} = X_0 + \ker(A)$$
> où $X_0$ est une solution particulière et $\ker(A) = \{X \in \mathcal{M}_{p,1}(\mathbb{K}) \mid AX = 0\}$.

---

## 6. Algorithme du pivot de Gauss

### Opérations élémentaires sur les lignes
Les opérations suivantes, appelées **opérations élémentaires**, transforment un système linéaire en un système équivalent (même ensemble de solutions) et se traduisent par le produit à gauche par des **matrices élémentaires** (inversibles) :
1. **Echange de deux lignes :** $L_i \leftrightarrow L_j$
2. **Multiplication d'une ligne par un scalaire non nul :** $L_i \leftarrow \lambda L_i$ ($\lambda \neq 0$)
3. **Ajout à une ligne d'un multiple d'une autre :** $L_i \leftarrow L_i + \lambda L_j$ ($i \neq j$)

> **Méthode (Calcul de l'inverse par le pivot de Gauss-Jordan) :**
> Pour inverser une matrice $A \in \mathcal{M}_n(\mathbb{K})$, on forme la matrice augmentée $(A \mid I_n)$. À l'aide d'opérations élémentaires sur les lignes, on la transforme sous la forme $(I_n \mid B)$. La matrice $B$ est alors l'inverse de $A$. Si on obtient une ligne de zéros à gauche, $A$ n'est pas inversible.

---

## Synthèse et Pièges à éviter

1. **Attention à l'ordre des produits :** Ne jamais permuter $A$ et $B$ dans un produit matriciel, sauf si l'énoncé l'autorise explicitement ou si l'une des matrices est une matrice scalaire ($\lambda I_n$).
2. **Division par une matrice :** La notation $\frac{A}{B}$ n'a **aucun sens** en algèbre linéaire. On utilise $A B^{-1}$ ou $B^{-1} A$.
3. **Carré d'une somme :** $(A+B)^2 = A^2 + AB + BA + B^2$. Ne pas écrire $2AB$ sauf si $AB = BA$.