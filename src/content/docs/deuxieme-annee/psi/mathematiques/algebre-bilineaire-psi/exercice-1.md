---
title: 'Exercice 1 : Formes quadratiques réelles et bases orthogonales'
description: 'Problème d entraînement type concours pour PSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $E$ un $\mathbb{R}$-espace vectoriel euclidien de dimension $n \ge 1$, dont le produit scalaire est noté $\langle \cdot, \cdot \rangle$ et la norme associée $\|\cdot\|$. 
Soit $q$ une forme quadratique sur $E$ et $\Phi$ la forme polaire (bilinéaire symétrique) associée, définie pour tout $(x, y) \in E^2$ par :
$$\Phi(x, y) = \frac{1}{2} \left( q(x+y) - q(x) - q(y) \right)$$

On rappelle qu'une base $(e_1, e_2, \dots, e_n)$ de $E$ est dite **orthogonale pour la forme quadratique $q$** si, pour tout $i \neq j$, on a $\Phi(e_i, e_j) = 0$.

L'objectif de ce problème est d'étudier l'existence de telles bases orthogonales vérifiant des conditions géométriques supplémentaires, notamment en lien avec la structure euclidienne ambiante, et d'appliquer ces résultats à la réduction simultanée ou à l'étude d'endomorphismes autoadjoints.

---

### ❓ Questions progressives

1. **Préalable algébrique :** Montrer que $\Phi$ est une forme bilinéaire symétrique et que pour tout $x \in E$, $q(x) = \Phi(x, x)$.
2. **Lien avec les endomorphismes autoadjoints :** D'après le théorème de représentation de Riesz, montrer qu'il existe un unique endomorphisme $u$ de $E$, autoadjoint, tel que pour tout $(x, y) \in E^2$, $\Phi(x, y) = \langle u(x), y \rangle$.
3. **Traduction spectrale :** Traduire la notion de base orthogonale pour $q$ à l'aide de l'endomorphisme $u$ et de ses sous-espaces propres.
4. **Existence par récurrence :** En utilisant le théorème spectral appliqué à $u$, démontrer qu'il existe toujours une base de $E$ qui soit à la fois orthonormée pour le produit scalaire euclidien et orthogonale pour la forme quadratique $q$.
5. **Application pratique :** Soit $E = \mathbb{R}^3$ muni du produit scalaire canonique. On considère la forme quadratique $q$ définie sur $x = (x_1, x_2, x_3)$ par :
   $$q(x) = x_1^2 + 2x_2^2 + 5x_3^2 + 2x_1x_2 - 4x_1x_3$$
   Déterminer la matrice $A$ de $u$ dans la base canonique, puis expliciter une base orthonormée pour le produit scalaire canonique qui soit orthogonale pour $q$.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Utilisez simplement la définition algébrique par polarité. Pensez à développer les identités.
* **Question 2 :** Fixez $x \in E$ et considérez l'application linéaire $y \mapsto \Phi(x, y)$. Appliquez ensuite le théorème de Riesz pour l'existence, et la symétrie de $\Phi$ pour montrer que l'endomorphisme associé est autoadjoint.
* **Question 3 & 4 :** C'est le cœur du problème. Le théorème spectral garantit l'existence d'une base orthonormée de vecteurs propres pour $u$. Que vaut $\Phi(e_i, e_j)$ lorsque $e_i$ et $e_j$ sont des vecteurs propres associés à des valeurs propres distinctes ?
* **Question 5 :** Identifiez d'abord la matrice de $q$ dans la base canonique (notée $S$), puis déduisez-en $A$ sachant que $q(x) = X^T S X = \langle u(x), x \rangle$. Diagonalisez ensuite $S$ (qui est symétrique réelle).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Préalable algébrique
Par définition, $\Phi(x, y) = \frac{1}{2} \left( q(x+y) - q(x) - q(y) \right)$. 
Puisque $q$ est une forme quadratique, il existe une forme bilinéaire symétrique $\psi$ telle que $q(x) = \psi(x,x)$. Ainsi :
$$q(x+y) = \psi(x+y, x+y) = \psi(x,x) + 2\psi(x,y) + \psi(y,y) = q(x) + 2\psi(x,y) + q(y)$$
En injectant cette relation dans l'expression de $\Phi$ :
$$\Phi(x, y) = \frac{1}{2} \left( q(x) + 2\psi(x,y) + q(y) - q(x) - q(y) \right) = \psi(x,y)$$
$\Phi$ coïncide donc avec la forme polaire originelle, ce qui prouve qu'elle est bien bilinéaire et symétrique. De plus, $\Phi(x, x) = \psi(x, x) = q(x)$.

#### 2. Lien avec les endomorphismes autoadjoints
Soit $x \in E$ fixé. L'application $f_x : y \in E \mapsto \Phi(x, y)$ est une forme linéaire sur l'espace euclidien $E$. 
D'après le théorème de représentation de Riesz, il existe un unique vecteur, que l'on note $u(x) \in E$, tel que :
$$\forall y \in E, \quad \Phi(x, y) = \langle u(x), y \rangle$$
* **Linéarité de $u$ :** La bilinéarité de $\Phi$ garantit immédiatement que $u$ est linéaire. Ainsi, $u \in \mathcal{L}(E)$.
* **Caractère autoadjoint :** Pour tout $(x, y) \in E^2$, par symétrie de $\Phi$ et par définition de $u$ :
  $$\langle u(x), y \rangle = \Phi(x, y) = \Phi(y, x) = \langle u(y), x \rangle = \langle x, u(y) \rangle$$
  L'endomorphisme $u$ est donc bien autoadjoint (symétrique).

#### 3. Traduction spectrale
Soit $(e_1, e_2, \dots, e_n)$ une base de $E$. Cette base est orthogonale pour $q$ si et seulement si :
$$\forall i \neq j, \quad \Phi(e_i, e_j) = 0$$
En utilisant l'endomorphisme $u$ :
$$\Phi(e_i, e_j) = \langle u(e_i), e_j \rangle = 0$$
Dire que $\Phi(e_i, e_j) = 0$ pour $i \neq j$ signifie que les vecteurs $u(e_i)$ et $e_j$ sont orthogonaux au sens du produit scalaire euclidien.

#### 4. Existence par récurrence
Puisque $u$ est un endomorphisme autoadjoint sur l'espace euclidien $E$, le **théorème spectral** s'applique : il existe une base orthonormée $\mathcal{B} = (e_1, e_2, \dots, e_n)$ de $E$ constituée de vecteurs propres de $u$.
Soit $u(e_i) = \lambda_i e_i$ pour tout $i \in \{1, \dots, n\}$. 
Calculons $\Phi(e_i, e_j)$ pour $i \neq j$ :
$$\Phi(e_i, e_j) = \langle u(e_i), e_j \rangle = \langle \lambda_i e_i, e_j \rangle = \lambda_i \langle e_i, e_j \rangle = 0$$
car la base $(e_1, \dots, e_n)$ est orthonormée pour le produit scalaire euclidien ($\langle e_i, e_j \rangle = 0$ si $i \neq j$).
Par conséquent, **toute base orthonormée de vecteurs propres de l'endomorphisme $u$ est une base orthogonale pour la forme quadratique $q$**. L'existence est ainsi démontrée.

#### 5. Application pratique
Exprimons $q(x)$ sous la forme matricielle $q(x) = X^T S X$ où $X = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix}$ :
$$q(x) = x_1^2 + 2x_2^2 + 5x_3^2 + 2x_1x_2 - 4x_1x_3$$
Par identification, la matrice symétrique $S$ associée à $q$ dans la base canonique est :
$$S = \begin{pmatrix} 
1 & 1 & -2 \\ 
1 & 2 & 0 \\ 
-2 & 0 & 5 
\end{pmatrix}$$
La matrice $A$ de l'endomorphisme $u$ dans la base canonique (qui est orthonormée) est précisément la matrice $S$. 
Il s'agit maintenant de diagonaliser $S$ dans une base orthonormée.

* **Recherche des valeurs propres :**
  $$\det(S - \lambda I_3) = \begin{vmatrix} 
  1-\lambda & 1 & -2 \\ 
  1 & 2-\lambda & 0 \\ 
  -2 & 0 & 5-\lambda 
  \end{vmatrix}$$
  Développons par rapport à la dernière ligne :
  $$= -2 \begin{vmatrix} 1 & 2-\lambda \\ -2 & 0 \end{vmatrix} + (5-\lambda)\begin{vmatrix} 1-\lambda & 1 \\ 1 & 2-\lambda \end{vmatrix}$$
  $$= -2(0 + 2(2-\lambda)) + (5-\lambda)\left((1-\lambda)(2-\lambda) - 1\right)$$
  $$= -4(2-\lambda) + (5-\lambda)(\lambda^2 - 3\lambda + 1) = \lambda^3 - 8\lambda^2 + 14\lambda = \lambda(\lambda^2 - 8\lambda + 14)$$
  Le discriminant de $\lambda^2 - 8\lambda + 14$ est $\Delta = 64 - 56 = 8$, d'où les racines $\lambda_1 = 0$, $\lambda_2 = 4 + \sqrt{2}$, $\lambda_3 = 4 - \sqrt{2}$.

* **Espaces propres et orthogonalisation de Schmidt (si nécessaire) :**
  Les valeurs propres étant distinctes, les sous-espaces propres associés sont orthogonaux deux à deux. En normalisant un vecteur propre pour chaque valeur propre, on obtient directement une base orthonormée $(v_1, v_2, v_3)$ de $E$ constituée de vecteurs propres de $u$.
  D'après la question 4, cette base $(v_1, v_2, v_3)$ est à la fois **orthonormée pour le produit scalaire euclidien** et **orthogonale pour la forme quadratique $q$**.