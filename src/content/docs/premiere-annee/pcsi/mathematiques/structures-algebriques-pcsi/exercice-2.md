---
title: 'Exercice 2 : Anneaux et corps R et C'
description: 'Problème d entraînement type concours pour PCSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $E$ l'ensemble des matrices carrées réelles d'ordre $2$ de la forme :
$$M(x, y) = \begin{pmatrix} x & -y \\ y & x \end{pmatrix}$$
où $(x, y) \in \mathbb{R}^2$.

On munit $E$ de l'addition usuelle des matrices et de la multiplication usuelle des matrices. L'ensemble $\mathcal{M}_2(\mathbb{R})$ étant un anneau unitaire pour ces lois, nous allons étudier la structure algébrique de $(E, +, \times)$ et son lien isomorphique avec le corps des nombres complexes $\mathbb{C}$.

---

### ❓ Questions progressives

1. **Stabilité et structure d'anneau :**
   Montrer que $E$ est un sous-groupe du groupe abélien $(\mathcal{M}_2(\mathbb{R}), +)$. 
   Puis, montrer que $E$ est stable par multiplication et contient la matrice unité. En déduire que $(E, +, \times)$ est un anneau unitaire commutatif.

2. **Isomorphisme avec $\mathbb{C}$ :**
   On considère l'application $\Phi : \mathbb{C} \to E$ définie, pour tout $z = x + iy$ (avec $(x, y) \in \mathbb{R}^2$), par $\Phi(z) = M(x, y)$.
   Montrer que $\Phi$ est un isomorphisme d'anneaux entre $(\mathbb{C}, +, \times)$ et $(E, +, \times)$.

3. **Inversibilité et corps :**
   Déterminer l'ensemble des matrices $M(x, y)$ inversibles dans $E$. 
   En déduire que $(E, +, \times)$ est un corps commutatif isomorphe à $\mathbb{C}$.

4. **Application aux équations dans $E$ :**
   Résoudre dans l'anneau $(E, +, \times)$ l'équation matricielle :
   $$X^2 + I_2 = 0_{\mathcal{M}_2(\mathbb{R})}$$
   où $X \in E$.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pour la stabilité par multiplication, effectuez le produit général de deux matrices de la forme $M(x, y)$ et $M(x', y')$. Pensez à identifier le résultat comme appartenant à $E$. La commutativité se déduira naturellement de l'isomorphisme ou d'un calcul direct.
* **Question 2 :** Un isomorphisme d'anneaux est une application linéaire (ou additive ici) bijective qui préserve le produit et l'élément neutre. Traduire ces propriétés à l'aide des nombres complexes.
* **Question 3 :** Utilisez le déterminant de la matrice $M(x, y)$ et le fait qu'une matrice carrée est inversible dans $\mathcal{M}_n(\mathbb{R})$ si et seulement si son déterminant est non nul. Vérifiez que l'inverse appartient bien à $E$.
* **Question 4 :** Transportez le problème dans $\mathbb{C}$ grâce à l'isomorphisme $\Phi$ établi à la question 2, ou résolvez-le directement en posant $X = M(x, y)$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Stabilité et structure d'anneau

* **Stabilité par addition et structure de groupe :**
  La matrice nulle $0_{\mathcal{M}_2(\mathbb{R})} = M(0, 0)$ appartient à $E$.
  Soient $M(x, y)$ et $M(x', y')$ deux éléments de $E$ et $\lambda \in \mathbb{R}$. On a :
  $$M(x, y) + M(x', y') = \begin{pmatrix} x+x' & -(y+y') \\ y+y' & x+x' \end{pmatrix} = M(x+x', y+y') \in E$$
  De plus, l'opposé est donné par $-M(x, y) = M(-x, -y) \in E$.
  Ainsi, $(E, +)$ est un sous-groupe du groupe abélien $(\mathcal{M}_2(\mathbb{R}), +)$, donc $(E, +)$ est lui-même un groupe abélien.

* **Stabilité par multiplication et neutre :**
  Soient $M(x, y)$ et $M(x', y')$ dans $E$. Calculons leur produit :
  $$M(x, y) \times M(x', y') = \begin{pmatrix} x & -y \\ y & x \end{pmatrix} \begin{pmatrix} x' & -y' \\ y' & x' \end{pmatrix} = \begin{pmatrix} xx' - yy' & -(xy' + yx') \\ xy' + yx' & xx' - yy' \end{pmatrix}$$
  On reconnait la matrice $M(xx' - yy', xy' + yx')$, qui est bien un élément de $E$.
  La matrice identité $I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = M(1, 0)$ appartient à $E$.

* **Conclusion sur l'anneau :**
  Puisque la multiplication des matrices est associative, distributive par rapport à l'addition, que $E$ contient $I_2$ et est stable par produit, $(E, +, \times)$ est un anneau unitaire. 
  De plus, la multiplication des nombres complexes étant commutative, le calcul précédent montre que $M(x, y)M(x', y') = M(x', y')M(x, y)$, donc **l'anneau $E$ est commutatif**.

---

#### 2. Isomorphisme avec $\mathbb{C}$

Montrons que $\Phi : \mathbb{C} \to E$, définie par $\Phi(x + iy) = M(x, y)$, est un isomorphisme d'anneaux :
* **Additivité :** Pour tous $z_1 = x_1 + iy_1$ et $z_2 = x_2 + iy_2$ :
  $$\Phi(z_1 + z_2) = \Phi((x_1+x_2) + i(y_1+y_2)) = M(x_1+x_2, y_1+y_2) = M(x_1, y_1) + M(x_2, y_2) = \Phi(z_1) + \Phi(z_2)$$
* **Multiplicativité :** 
  En utilisant l'identité du produit calculée à la question 1, les coefficients $xx' - yy'$ et $xy' + yx'$ correspondent exactement à la partie réelle et à la partie imaginaire du produit de deux nombres complexes $z$ et $z'$. Ainsi :
  $$\Phi(z_1 z_2) = \Phi(z_1)\Phi(z_2)$$
* **Conservation de l'unité :** 
  $$\Phi(1) = M(1, 0) = I_2$$
* **Bijectivité :** 
  Tout élément $M(x, y) de $ $E$ a un unique antécédent $z = x + iy \in \mathbb{C}$, et $\Phi(z) = 0_{\mathcal{M}_2(\mathbb{R})} \implies M(x, y) = M(0,0) \implies x=0, y=0 \implies z = 0$ (l'application est injective).

$\Phi$ est donc un **isomorphisme d'anneaux**.

---

#### 3. Inversibilité et corps

Soit $M(x, y) \in E$. Calculons son déterminant :
$$\det(M(x, y)) = x^2 - (-y)(y) = x^2 + y^2 = |z|^2$$
où $z = x + iy$.

* Si $M(x, y) \neq 0_{\mathcal{M}_2(\mathbb{R})}$, alors $x^2 + y^2 \neq 0$. La matrice est donc inversible dans $\mathcal{M}_2(\mathbb{R})$ et son inverse est donné par :
  $$(M(x, y))^{-1} = \frac{1}{x^2 + y^2} \begin{pmatrix} x & y \\ -y & x \end{pmatrix} = M\left(\frac{x}{x^2+y^2}, \frac{-y}{x^2+y^2}\right)$$
  Cet inverse appartient clairement à $E$.

* La matrice nulle $M(0, 0)$ n'est pas inversible.

Chaque élément non nul de $E$ admet un inverse dans $E$. Par conséquent, **$(E, +, \times)$ est un corps commutatif**. 
Étant isomorphe à $\mathbb{C}$ via $\Phi$, c'est un corps isomorphe à $\mathbb{C}$.

---

#### 4. Application aux équations dans $E$

On cherche $X \in E$ tel que $X^2 + I_2 = 0_{\mathcal{M}_2(\mathbb{R})}$, ce qui s'écrit :
$$X^2 = -I_2$$

Puisque $\Phi : \mathbb{C} \to E$ est un isomorphisme d'anneaux, résoudre cette équation dans $E$ revient à résoudre dans $\mathbb{C}$ l'équation d'inconnue $z$ :
$$z^2 = -1$$

Les solutions dans $\mathbb{C}$ sont $z = i$ et $z = -i$.

En revenant dans $E$ via l'application $\Phi$ :
* Pour $z = i = 0 + 1 \cdot i$, on a $X_1 = \Phi(i) = M(0, 1) = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$.
* Pour $z = -i = 0 - 1 \cdot i$, on a $X_2 = \Phi(-i) = M(0, -1) = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$.

L'ensemble des solutions de l'équation dans $E$ est donc :
$$\mathcal{S} = \left\{ \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \right\}$$