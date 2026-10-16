---
title: 'Exercice 1 : Notions de groupes et morphismes'
description: 'Problème d entraînement type concours pour PCSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $E$ l'ensemble des matrices carrées réelles d'ordre 2 de la forme :
$$M(x, y) = \begin{pmatrix} x & 3y \\ y & x \end{pmatrix}$$
où $(x, y) \in \mathbb{R}^2$ tel que $x^2 - 3y^2 \neq 0$.

On munit $E$ de la multiplication usuelle des matrices. L'objectif de ce problème est d'étudier la structure algébrique de $(E, \times)$, de caractériser ses sous-groupes et d'analyser un morphisme remarquable lié à cet ensemble.

---

### ❓ Questions progressives

1. **Stabilité et inversibilité :** 
   Montrer que $E$ est stable par multiplication matricielle et que toute matrice de $E$ est inversible dans $\mathcal{M}_2(\mathbb{R})$, son inverse étant également dans $E$.
2. **Structure de groupe :** 
   En déduire que $(E, \times)$ est un groupe abélien (commutatif).
3. **Étude d'une application :** 
   On considère l'application $\varphi : (\mathbb{R}^*_+, \times) \to (E, \times)$ définie par :
   $$\varphi(t) = M(t, 0)$$
   Montrer que $\varphi$ est un morphisme de groupes injectif.
4. **Recherche de morphismes et noyaux :** 
   Soit $G = \{M(x, y) \in E \mid x^2 - 3y^2 = 1\}$. Montrer que $G$ est un sous-groupe de $E$. 
   Déterminer l'image de $G$ par un morphisme bien choisi inspiré du déterminant.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pour le produit, effectuez le calcul matriciel littéral. Pour l'inversibilité, pensez à calculer le déterminant d'une matrice de $E$ en fonction de $x$ et $y$, puis utilisez la formule explicite de l'inverse d'une matrice $2 \times 2$.
* **Question 2 :** Rappelez les axiomes d'un groupe (loi interne, associativité, élément neutre, inverse) et vérifiez la commutativité.
* **Question 3 :** La définition d'un morphisme de groupes nécessite de vérifier que $\varphi(ab) = \varphi(a)\varphi(b)$ pour tous $a, b \in \mathbb{R}^*_+$. Pour l'injectivité, étudiez le noyau (ou l'égalité $\varphi(a) = \varphi(b)$).
* **Question 4 :** Utilisez la caractérisation des sous-groupes (stabilité par produit et par passage à l'inverse, ou non-viduité et stabilité par produit mixte).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Stabilité et inversibilité
Soient $M(x, y)$ et $M(x', y')$ deux éléments de $E$. Effectuons leur produit matriciel :
$$M(x, y) \times M(x', y') = \begin{pmatrix} x & 3y \\ y & x \end{pmatrix} \begin{pmatrix} x' & 3y' \\ y' & x' \end{pmatrix}$$
$$= \begin{pmatrix} xx' + 3yy' & 3xy' + 3yx' \\ yx' + xy' & 3yy' + xx' \end{pmatrix} = M(xx' + 3yy', xy' + yx')$$
On remarque que la matrice obtenue est bien de la forme $M(X, Y)$ avec $X = xx' + 3yy'$ et $Y = xy' + yx'$. De plus, le déterminant de $M(x, y)$ vaut :
$$\det(M(x, y)) = x^2 - 3y^2$$
Par hypothèse sur $E$, ce déterminant est non nul. Par conséquent, toute matrice de $E$ est inversible dans $\mathcal{M}_2(\mathbb{R})$. 
L'inverse d'une matrice $2 \times 2$ est donné par :
$$(M(x, y))^{-1} = \frac{1}{x^2 - 3y^2} \begin{pmatrix} x & -3y \\ -y & x \end{pmatrix} = M\left(\frac{x}{x^2 - 3y^2}, \frac{-y}{x^2 - 3y^2}\right)$$
Cet inverse est bien de la forme $M(X', Y')$ avec $X' = \frac{x}{x^2 - 3y^2}$ et $Y' = \frac{-y}{x^2 - 3y^2}$. Ainsi, $E$ est stable par passage à l'inverse.

#### 2. Structure de groupe
Montrons que $(E, \times)$ est un groupe abélien :
* **Loi interne :** D'après la question 1, le produit de deux matrices de $E$ est dans $E$.
* **Associativité :** La multiplication des matrices est associative dans $\mathcal{M}_2(\mathbb{R})$, donc elle l'est en restriction à $E$.
* **Élément neutre :** La matrice $I_2 = M(1, 0)$ appartient à $E$ (car $1^2 - 3(0)^2 = 1 \neq 0$) et pour tout $M \in E$, $M \times I_2 = I_2 \times M = M$.
* **Élément symétrique :** D'après la question 1, chaque élément de $E$ possède un inverse qui appartient également à $E$.
* **Commutativité :** Vérifions si $M(x, y)M(x', y') = M(x', y')M(x, y)$. 
  Le produit donne $M(xx' + 3yy', xy' + yx')$. Comme les réels commutent pour l'addition et la multiplication, on a $xx' + 3yy' = x'x + 3y'y$ et $xy' + yx' = x'y + y'x$. Le produit est donc commutatif.

Conclusion : **$(E, \times)$ est un groupe abélien.**

#### 3. Étude de l'application $\varphi$
Soient $a, b \in \mathbb{R}^*_+$. On a :
$$\varphi(ab) = M(ab, 0) = \begin{pmatrix} ab & 0 \\ 0 & ab \end{pmatrix}$$
D'autre part :
$$\varphi(a)\varphi(b) = M(a, 0)M(b, 0) = \begin{pmatrix} a & 0 \\ 0 & a \end{pmatrix} \begin{pmatrix} b & 0 \\ 0 & b \end{pmatrix} = \begin{pmatrix} ab & 0 \\ 0 & ab \end{pmatrix}$$
Ainsi, $\varphi(ab) = \varphi(a)\varphi(b)$, ce qui prouve que **$\varphi$ est un morphisme de groupes**.

Pour l'injectivité, déterminons le noyau de $\varphi$ (ou l'équation $\varphi(a) = I_2$) :
$$\varphi(a) = I_2 \iff \begin{pmatrix} a & 0 \\ 0 & a \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \iff a = 1$$
Le noyau du morphisme (ou l'ensemble des antécédents du neutre dans $\mathbb{R}^*_+$) est réduit à $\{1\}$, qui est l'élément neutre de $(\mathbb{R}^*_+, \times)$. Par conséquent, **$\varphi$ est injectif**.

#### 4. Recherche de sous-groupes
Montrons que $G = \{M(x, y) \in E \mid x^2 - 3y^2 = 1\}$ est un sous-groupe de $(E, \times)$ :
1. $I_2 = M(1, 0)$ vérifie $1^2 - 3(0)^2 = 1$, donc $I_2 \in G$ ($G$ est non vide).
2. Soient $M(x, y)$ et $M(x', y')$ deux éléments de $G$. Leur déterminant vaut 1. Le déterminant étant multiplicatif, on a :
   $$\det(M(x, y)M(x', y')) = \det(M(x, y))\det(M(x', y')) = 1 \times 1 = 1$$
   Donc le produit est bien dans $G$ (stabilité par loi interne).
3. Soit $M(x, y) \in G$. On a $\det(M(x, y)) = 1$. L'inverse est donc :
   $$(M(x, y))^{-1} = \frac{1}{1} \begin{pmatrix} x & -3y \\ -y & x \end{pmatrix} = M(x, -y)$$
   Vérifions la condition pour $M(x, -y)$ : $x^2 - 3(-y)^2 = x^2 - 3y^2 = 1$. Ainsi, l'inverse est dans $G$.

$G$ est donc bien un **sous-groupe de $(E, \times)$**.