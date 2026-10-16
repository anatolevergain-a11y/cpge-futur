---
title: 'Cours : Espaces préhilbertiens'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Espaces préhilbertiens réels et complexes

**Professeur de CPGE - MPSI**  
*Rigueur, concision et exigence théorique.*

---

## 1. Produit scalaire et espaces préhilbertiens

### A. Définitions fondamentales

Soit $E$ un $\mathbb{K}$-espace vectoriel ($\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$).

> **Définition 1 (Forme sesquilinéaire / bilinéaire)**
> Une application $\varphi : E \times E \to \mathbb{K}$ est dite :
> 1. **Sesquilinéaire** (si $\mathbb{K} = \mathbb{C}$) si elle est linéaire par rapport à sa seconde variable et antilinéaire par rapport à sa première variable :
>    $$\forall (x, y, z) \in E^3, \forall (\alpha, \beta) \in \mathbb{C}^2, \quad \varphi(\alpha x + \beta y, z) = \bar{\alpha}\varphi(x, z) + \bar{\beta}\varphi(y, z)$$
>    $$\quad \varphi(x, \alpha y + \beta z) = \alpha\varphi(x, y) + \beta\varphi(x, z)$$
> 2. **Bilinéaire** (si $\mathbb{K} = \mathbb{R}$) si elle est linéaire par rapport à ses deux variables.

> **Définition 2 (Produit scalaire)**
> On appelle **produit scalaire** sur $E$ une application, notée $(x \mid y)$ ou $\langle x, y \rangle$, de $E \times E$ dans $\mathbb{K}$ telle que :
> 1. **Hermitienne / Symétrique :** $\forall (x, y) \in E^2, \quad (y \mid x) = \overline{(x \mid y)}$. *(En particulier, $(x \mid x) \in \mathbb{R}$)*.
> 2. **Linéaire par rapport à la seconde variable** (et donc sesquilinéaire, ou bilinéaire si $\mathbb{K}=\mathbb{R}$).
> 3. **Positive :** $\forall x \in E, \quad (x \mid x) \ge 0$.
> 4. **Définie :** $\forall x \in E, \quad (x \mid x) = 0 \iff x = 0_E$.

> **Définition 3 (Espace préhilbertien)**
> Un couple $(E, (\cdot \mid \cdot))$ formé d'un $\mathbb{K}$-espace vectoriel et d'un produit scalaire est appelé **espace préhilbertien**. Si de plus $E$ est de dimension finie, on parle souvent d'espace euclidien ($\mathbb{K}=\or$) ou hermitien ($\mathbb{K}=\mathbb{C}$).

---

## 2. Norme associée et Inégalités fondamentales

### A. Norme associée

> **Théorème-Définition 1**
> Soit $(E, (\cdot \mid \cdot))$ un espace préhilbertien. L'application définie pour tout $x \in E$ par :
> $$\|x\| = \sqrt{(x \mid x)}$$
> est une **norme** sur $E$, dite **norme associée** au produit scalaire.

*Démonstration (Non-trivialité : Inégalité triangulaire).* Repose sur l'inégalité de Cauchy-Schwarz.

> **Théorème 2 (Inégalité de Cauchy-Schwarz)**
> Pour tout $(x, y) \in E^2$, on a :
> $$|(x \mid y)| \le \|x\| \|y\|$$
> *Cas d'égalité :* Il y a égalité si et seulement si $x$ et $y$ sont **colinéaires** (liés).

> **Théorème 3 (Inégalité triangulaire)**
> Pour tout $(x, y) \in E^2$, on a :
> $$\|x + y\| \le \|x\| + \|y\|$$

---

## 3. Orthogonalité

### A. Définitions et Théorèmes de base

> **Définition 4 (Orthogonalité)**
> Deux vecteurs $x$ et $y$ d'un espace préhilbertien $E$ sont dits **orthogonaux** (noté $x \perp y$) si :
> $$(x \mid y) = 0$$

> **Théorème 4 (Identité de Pythagore)**
> Si $x$ et $y$ sont deux vecteurs orthogonaux, alors :
> $$\|x + y\|^2 = \|x\|^2 + \|y\|^2$$
> *Par récurrence, si $(x_1, \dots, x_n)$ est une famille de vecteurs deux à deux orthogonaux :*
> $$\|\sum_{i=1}^n x_i\|^2 = \sum_{i=1}^n \|x_i\|^2$$

> **Théorème 5 (Identité du parallélogramme)**
> Pour tous $(x, y) \in E^2$ :
> $$\|x + y\|^2 + \|x - y\|^2 = 2(\|x\|^2 + \|y\|^2)$$

> **Théorème 6 (Identité de polarisation)**
> Si $\mathbb{K} = \mathbb{R}$, pour tous $(x, y) \in E^2$ :
> $$(x \mid y) = \frac{1}{4} \left( \|x + y\|^2 - \|x - y\|^2 \right)$$

---

### B. Supplémentaire orthogonal

> **Définition 5 (Orthogonal d'une partie)**
> Soit $A$ une partie non vide d'un espace préhilbertien $E$. On appelle **orthogonal** de $A$ l'ensemble noté $A^\perp$ défini par :
> $$A^\perp = \{ x \in E \mid \forall a \in A, (x \mid a) = 0 \}$$

> **Proposition 1**
> 1. Pour toute partie $A$, $A^\perp$ est un **sous-espace vectoriel** de $E$.
> 2. $\{0_E\}^\perp = E$ et $E^\perp = \{0_E\}$.
> 3. Si $A \subset B$, alors $B^\perp \subset A^\perp$.
> 4. $A^\perp = (\text{Vect}(A))^\perp$.

---

## 4. Familles orthonormales et Projetés orthogonaux

### A. Familles orthonormales

> **Définition 6**
> Une famille de vecteurs $(e_1, \dots, e_n)$ de $E$ est dite :
> 1. **Orthogonale** si $\forall i \neq j, (e_i \mid e_j) = 0$.
> 2. **Orthonormale (FON)** si elle est orthogonale et que $\forall i, \|e_i\| = 1$ (c'est-à-dire $(e_i \mid e_j) = \delta_{ij}$).

> **Proposition 2**
> Toute famille orthogonale de vecteurs **non nuls** est **libre**.

> **Théorème 7 (Procédé d'orthonormalisation de Gram-Schmidt)**
> Toute famille libre $(x_1, \dots, x_n)$ d'un espace préhilbertien $E$ peut être transformée en une famille orthonormale $(e_1, \dots, e_n)$ telle que, pour tout $k \in \{1, \dots, n\}$ :
> $$\text{Vect}(x_1, \dots, x_k) = \text{Vect}(e_1, \dots, e_k)$$

---

### B. Projection orthogonale en dimension finie

> **Théorème 8 (Supplémentaire orthogonal en dimension finie)**
> Soit $F$ un sous-espace vectoriel de $E$ **de dimension finie**. Alors :
> $$E = F \oplus F^\perp$$
> *Conséquence :* $\dim(F) + \dim(F^\perp) = \dim(E)$ et $(F^\perp)^\perp = F$.

> **Définition 7**
> Soit $E = F \oplus F^\perp$ (avec $\dim(F) < +\infty$). Le projecteur sur $F$ parallèlement à $F^\perp$ est appelé **projecteur orthogonal** sur $F$, noté $p_F$.
> Pour tout $x \in E$, $p_F(x)$ est l'unique vecteur de $F$ tel que $x - p_F(x) \in F^\perp$.

> **Théorème 9 (Caractérisation de la distance / Meilleure approximation)**
> Soit $F$ de dimension finie. Pour tout $x \in E$, le projeté orthogonal $p_F(x)$ est l'unique élément de $F$ réalisant la distance minimale entre $x$ et $F$ :
> $$\|x - p_F(x)\| = \min_{y \in F} \|x - y\|$$
> Cette valeur minimale est appelée **distance de $x$ à $F$** : $d(x, F) = \|x - p_F(x)\|$.

---

## 🛠️ Méthodes

1. **Montrer qu'une application est un produit scalaire :**
   * Linéarité (ou sesquilinéarité) : souvent par bilinéarité de formes intégrales ou par manipulation algébrique de matrices.
   * Symétrie (ou caractère hermitien) : évident par construction.
   * Positivité : écrire l'expression comme une somme de carrés ou une intégrale d'une fonction positive.
   * Caractère défini : si $(x \mid x) = 0$, montrer que $x = 0$ (souvent par continuité de la fonction si on est dans un espace de fonctions).

2. **Calculer une projection orthogonale :**
   * Si l'on dispose d'une base orthonormale $(e_1, \dots, e_n)$ de $F$ : 
     $$p_F(x) = \sum_{i=1}^n (x \mid e_i) e_i$$
   * Sinon, trouver une base de $F$, appliquer Gram-Schmidt pour l'orthonormer, puis utiliser la formule ci-dessus.

---

## ⚠️ Pièges classiques à éviter

* **Attention au corps de base ($\mathbb{R}$ vs $\mathbb{C}$) :** Ne confondez pas symétrie et caractère hermitien. $(y \mid x) = \overline{(x \mid y)}$ en complexe, ce qui implique $(x \mid x) \in \mathbb{R}$ mais $(x \mid y)$ n'est pas nécessairement réel.
* **Gram-Schmidt :** N'oubliez pas de normaliser les vecteurs ! Le procédé donne d'abord une famille *orthogonale*, il faut diviser chaque vecteur par sa norme pour obtenir une FON.
* **Dimension finie indispensable :** Le théorème $E = F \oplus F^\perp$ et l'existence du projeté orthogonal **s'effondrent** en dimension infinie si $F$ n'est pas fermé (ou de codimension finie). Ne l'appliquez jamais aveuglément dans les espaces de fonctions usuels sans vérifier les hypothèses de topologie.