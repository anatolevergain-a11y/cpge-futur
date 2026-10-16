---
title: 'Cours : Espaces euclidiens et algèbre bilinéaire'
description: 'Synthese officielle du cours et demonstrations pour CPGE MP.'
---

## 📌 1. Definitions & Cadre d'etude

Soit $E$ un $\mathbb{R}$-espace vectoriel.

* **Forme bilineaire :** Une application $\varphi : E \times E \to \mathbb{R}$ est dite bilineaire si elle est lineaire par rapport a chaque variable.
* **Forme bilineaire symetrique :** $\varphi$ est symetrique si, pour tout $(x, y) \in E^2$, $\varphi(x, y) = \varphi(y, x)$.
* **Forme quadratique :** C'est l'application $q : E \to \mathbb{R}$ associee a une forme bilineaire symetrique $\varphi$ definie par $q(x) = \varphi(x, x)$. On a l'identite de polarisation :
  $$\varphi(x, y) = \frac{1}{2} \left( q(x+y) - q(x) - q(y) \right)$$
* **Espace euclidien :** C'est un $\mathbb{R}$-espace vectoriel $E$ de dimension finie, muni d'un produit scalaire, c'est-a-dire une forme bilineaire symetrique, definie positive, notee $(x \mid y)$ ou $\langle x, y \rangle$.
* **Matrice d'une forme bilineaire :** Soit $\mathcal{B} = (e_1, \dots, e_n)$ une base de $E$. La matrice $A \in \mathcal{M}_{n,n}(\mathbb{R})$ de $\varphi$ dans $\mathcal{B}$ est definie par :
  $$A_{i,j} = \varphi(e_i, e_j)$$
  Si $X$ et $Y$ sont les vecteurs colonnes des coordonnees de $x$ et $y$ dans $\mathcal{B}$, alors $\varphi(x, y) = X^T A Y$.

---

## 📐 2. Theoremes fondamentaux & Demonstrations cles

### Theoreme 1 :Inegalite de Cauchy-Schwarz
Soit $(E, (\cdot \mid \cdot))$ un espace euclidien. Pour tout $(x, y) \in E^2$ :
$$| (x \mid y) | \leq \|x\| \|y\|$$
avec egalite si et seulement si $x$ et $y$ sont colineaires.

> **Demonstration :**
> Si $y = 0$, l'inegalite est triviale. Supposons $y \neq 0$. Pour tout $\lambda \in \mathbb{R}$, considerons le polynome du second degre en $\lambda$ :
> $$P(\lambda) = \|x + \lambda y\|^2 = \|x\|^2 + 2\lambda (x \mid y) + \lambda^2 \|y\|^2$$
> Par definition d'une norme, $P(\lambda) \geq 0$ pour tout $\lambda \in \mathbb{R}$. Le discriminant reduit $\Delta'$ de ce trinome doit donc etre negatif ou nul :
> $$\Delta' = (x \mid y)^2 - \|x\|^2 \|y\|^2 \leq 0$$
> D'ou $(x \mid y)^2 \leq \|x\|^2 \|y\|^2$, ce qui donne le resultat en prenant la racine carree. $\blacksquare$

### Theoreme 2 :Procede d'orthogonalisation de Gram-Schmidt
Toute base $(e_1, \dots, e_n)$ d'un espace euclidien $E$ peut etre transformee en une base orthonormee $(u_1, \dots, u_n)$ telle que pour tout $k \in \{1, \dots, n\}$, $\text{Vect}(e_1, \dots, e_k) = \text{Vect}(u_1, \dots, u_k)$.

### Theoreme 3 :Reduction des formes quadratiques (Theoreme de Gauss)
Toute forme quadratique sur $E$ se decompose en une somme (ou difference) de carrees de formes lineaires independantes.

---

## 💡 3. Methodes de calcul & Algorithmes

### Algorithme de Gauss pour la reduction des formes quadratiques
Soit $q$ une forme quadratique sur $\mathbb{R}^n$.
1. **Cas avec termes carres non nuls :** On regroupe tous les termes contenant la premiere variable $x_1$ :
   $$q(x_1, \dots, x_n) = a_1 x_1^2 + 2x_1 L(x_2, \dots, x_n) + q_1(x_2, \dots, x_n)$$
   On met sous forme canonique :
   $$a_1 \left( x_1 + \frac{1}{a_1} L(x_2, \dots, x_n) \right)^2 - \frac{1}{a_1} (L(x_2, \dots, x_n))^2 + q_1(x_2, \dots, x_n)$$
2. **Cas sans terme carre :** Si $q(x_1, \dots, x_n)$ ne contient pas de terme en $x_1^2$ mais contient un terme en $x_1 x_2$ (avec $a_{1,2} \neq 0$), on effectue le changement de variables de polarisation :
   $$x_1 = y_1 + y_2 \quad \text{et} \quad x_2 = y_1 - y_2$$
   Ce qui fait apparaitre un terme en $y_1^2 - y_2^2$.

### Calcul de l'Adjoint
Soit $f \in \mathcal{L}(E)$. Il existe un unique endomorphisme note $f^* \in \mathcal{L}(E)$ tel que :
$$\forall (x, y) \in E^2, \quad (f(x) \mid y) = (x \mid f^*(y))$$
Si $M \in \mathcal{M}_{n,n}(\mathbb{R})$ est la matrice de $f$ dans une base orthonormee, alors la matrice de $f^*$ est $M^T$.

---

## ⚠️ 4. Pieges classiques aux Concours

1. **Confusion entre definitude et positivite :** Une matrice symetrique dont tous les minimes principaux sont positifs (mais pas tous strictement) est seulement *positive*, pas necessairement *definie positive*. Attention aux conditions strictes du critere de Sylvester.
2. **Oubli de la base orthonormee :** La formule $A^T = A^{-1}$ pour la matrice d'un endomorphisme orthogonal n'est valable **que** si la matrice est exprimee dans une base **orthonormee**. Dans une base quelconque, cette relation est fausse.
3. **Produit scalaire canonique vs general :** Ne pas appliquer systematiquement les formules de $\mathbb{R}^n$ standard ($\sum x_i y_i$) a un espace euclidien general dont le produit scalaire est defini par une integrale ou une autre forme bilineaire.
4. **Symetrie de l'adjoint :** Ne pas oublier que l'existence de l'adjoint repose fondamentalement sur le fait que l'espace est de **dimension finie** et muni d'un produit scalaire.