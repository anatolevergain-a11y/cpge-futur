---
title: 'Problème : Optimisation d une forme quadratique et endomorphismes autoadjoints'
description: 'Problème d entraînement type concours (Mines-Ponts / Agro-Véto) en algèbre bilinéaire et géométrie euclidienne.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $E$ un espace vectoriel euclidien de dimension $n \ge 2$, muni de son produit scalaire canonique $\langle \cdot, \cdot \rangle$ et de la norme associée $\|\cdot\|$. 
On considère un endomorphisme $u$ de $E$ qui est symétrique (ou autoadjoint), c'est-à-dire qu'il vérifie :
$$\forall (x, y) \in E^2, \quad \langle u(x), y \rangle = \langle x, u(y) \rangle$$

D'après le théorème spectral, il existe une base orthonormée $(e_1, e_2, \dots, e_n)$ de $E$ constituée de vecteurs propres de $u$. On note $\lambda_1 \le \lambda_2 \le \dots \le \lambda_n$ les valeurs propres associées comptées avec leur ordre de multiplicité.

L'objectif de ce problème est d'étudier les extrema de la fonction $f : E \setminus \{0\} \to \mathbb{R}$ définie par :
$$f(x) = \frac{\langle u(x), x \rangle}{\|x\|^2}$$
ainsi que les propriétés de commutation de $u$ avec d'autres endomorphismes.

---

### ❓ Questions progressives

1. **Préliminaires et bornitude** : 
   Montrer que pour tout $x \in E \setminus \{0\}$, on a l'encadrement :
   $$\lambda_1 \le f(x) \le \lambda_n$$

2. **Atteinte des extrema** : 
   Montrer que $f$ atteint son maximum sur la sphère unité $S(0, 1) = \{x \in E \mid \|x\| = 1\}$ et préciser en quels points ce maximum est atteint.

3. **Caractérisation du sous-espace propre maximal** : 
   Soit $E_n = \ker(u - \lambda_n \text{id}_E)$. Montrer que :
   $$\max_{x \in E \setminus \{0\}} f(x) = \lambda_n \iff \forall x \in E_n \setminus \{0\}, \, f(x) = \lambda_n$$

4. **Application géométrique** : 
   On suppose que $u$ commute avec un endomorphisme orthogonal $v \in \mathcal{O}(E)$ (c'est-à-dire $u \circ v = v \circ u$). Soit $F$ un sous-espace propre de $u$. Montrer que $F$ est stable par $v$.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1** : Pensez à décomposer le vecteur $x$ dans la base orthonormée de diagonalisation de $u$. Exprimez $\langle u(x), x \rangle$ et $\|x\|^2$ à l'aide des coordonnées de $x$ dans cette base.
* **Question 2** : Utilisez le théorème des bornes atteintes (continuité de $f$ sur un compact). Pour l'atteinte, évaluez $f(e_n)$ où $e_n$ est un vecteur propre associé à $\lambda_n$.
* **Question 3** : Raisonnez par condition nécessaire et suffisante en écrivant l'égalité dans l'inégalité de la question 1 sous forme de somme nulle.
* **Question 4** : Soit $x \in F$. Il faut montrer que $v(x) \in F$, c'est-à-dire que $u(v(x)) = \lambda_n v(x)$. Utilisez l'hypothèse de commutation.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Préliminaires et bornitude

Soit $(e_1, \dots, e_n)$ une base orthonormée de $E$ diagonalisant $u$, associée aux valeurs propres $\lambda_1 \le \dots \le \lambda_n$. 
Tout vecteur $醸x \in E$ s'écrit de manière unique sous la forme :
$$x = \sum_{i=1}^n x_i e_i$$
La norme euclidienne de $x$ s'exprime par le théorème de Pythagore :
$$\|x\|^2 = \sum_{i=1}^n x_i^2$$
Calculons $\langle u(x), x \rangle$. Par linéarité :
$$u(x) = \sum_{i=1}^n x_i u(e_i) = \sum_{i=1}^n x_i \lambda_i e_i$$
Puis, par bilinéarité du produit scalaire et orthonorméité de la base :
$$\langle u(x), x \rangle = \left\langle \sum_{i=1}^n \lambda_i x_i e_i, \sum_{j=1}^n x_j e_j \right\rangle = \sum_{i=1}^n \lambda_i x_i^2$$

Puisque $\lambda_1 \le \lambda_i \le \lambda_n$ pour tout $i \in \{1, \dots, n\}$, on a :
$$\lambda_1 \sum_{i=1}^n x_i^2 \le \sum_{i=1}^n \lambda_i x_i^2 \le \lambda_n \sum_{i=1}^n x_i^2$$
C'est-à-dire :
$$\lambda_1 \|x\|^2 \le \langle u(x), x \rangle \le \lambda_n \|x\|^2$$
Comme $x \neq 0$, $\|x\|^2 > 0$. En divisant par $\|x\|^2$, on obtient l'encadrement recherché :
$$\forall x \in E \setminus \{0\}, \quad \lambda_1 \le f(x) \le \lambda_n$$

---

#### 2. Atteinte des extrema

La fonction $x \mapsto f(x)$ est continue sur $E \setminus \{0\}$ comme quotient d'applications continues (produits scalaires et normes) dont le dénominateur ne s'annule pas.
La sphère unité $S(0, 1) = \{x \in E \mid \|x\| = 1\}$ est fermée et bornée en dimension finie, c'est donc un compact. 
Par restriction, la fonction $f$ est continue sur le compact $S(0, 1)$, donc elle y borne ses valeurs et **atteint ses bornes**.

Soit $e_n$ un vecteur propre normé associé à la plus grande valeur propre $\lambda_n$ (i.e., $\|e_n\| = 1$). Alors :
$$f(e_n) = \frac{\langle u(e_n), e_n \rangle}{\|e_n\|^2} = \frac{\langle \lambda_n e_n, e_n \rangle}{1} = \lambda_n \|e_n\|^2 = \lambda_n$$
D'après la question 1, $\lambda_n$ est un majorant de $f$ sur $E \setminus \{0\}$ (donc sur $S(0, 1)$). Puisque $f(e_n) = \lambda_n$, **le maximum de $f$ sur $S(0, 1)$ est $\lambda_n$**, et il est atteint en tout vecteur propre unitaire associé à $\lambda_n$.

---

#### 3. Caractérisation du sous-espace propre maximal

Soit $E_n = \ker(u - \lambda_n \text{id}_E)$. 
* **Sens direct** : Supposons que $\max_{x \in E \setminus \{0\}} f(x) = \lambda_n$. Soit $x \in E_n \setminus \{0\}$. 
  Puisque $u(x) = \lambda_n x$, on a :
  $$f(x) = \frac{\langle \lambda_n x, x \rangle}{\|x\|^2} = \lambda_n \frac{\|x\|^2}{\|x\|^2} = \lambda_n$$
* **Sens réciproque** : Supposons que $\forall x \in E_n \setminus \{0\}, \, f(x) = \lambda_n$. 
  Reprenons la décomposition $x = \sum_{i=1}^n x_i e_i$ dans une base orthonormée de vecteurs propres. On a :
  $$f(x) - \lambda_n = \frac{\sum_{i=1}^n (\lambda_i - \lambda_n)x_i^2}{\sum_{i=1}^n x_i^2}$$
  Si $f(x) = \lambda_n$ pour tout $x \in E_n$, cela signifie que la différence est nulle, soit $\sum_{i=1}^n (\lambda_n - \lambda_i)x_i^2 = 0$. 
  Puisque pour tout $i$, $\lambda_n - \lambda_i \ge 0$ et $x_i^2 \ge 0$, cette somme de termes positifs est nulle si et seulement si, pour tout $i$ tel que $\lambda_i \neq \lambda_n$, on a $x_i = 0$. 
  Par conséquent, $x$ ne possède des coordonnées non nulles que pour les indices $i$ tels que $\lambda_i = \lambda_n$. Cela signifie exactement que **$x \in E_n$**.

---

#### 4. Application géométrique

Soit $F$ un sous-espace propre de $u$ associé à la valeur propre $\lambda$ (c'est-à-dire $F = \ker(u - \lambda \text{id}_E)$). 
Soit $x \in F$. Montrons que $v(x) \in F$, c'est-à-dire que $u(v(x)) = \lambda v(x)$.

Par hypothèse, l'endomorphisme $v$ commute avec $u$, ce qui s'écrit :
$$u \circ v = v \upharpoonright u \implies \forall z \in E, \, u(v(z)) = v(u(z))$$

Appliquons cette relation au vecteur $x \in F$ :
$$u(v(x)) = v(u(x))$$
Puisque $x \in F$, on a $u(x) = \lambda x$. Par linéarité de $v$ :
$$v(u(x)) = v(\lambda x) = \lambda v(x)$$
En combinant ces deux égalités, il vient :
$$u(v(x)) = \lambda v(x)$$
Ainsi, $v(x)$ vérifie l'équation propre associée à $\lambda$, ce qui prouve que **$v(x) \in F$**. 
Le sous-espace propre $F$ est donc stable par l'endomorphisme orthogonal $v$. *(Ce résultat est fondamental en réduction des endomorphismes : les sous-espaces propres d'un endomorphisme symétrique sont stables par tout endomorphisme qui commute avec lui).*