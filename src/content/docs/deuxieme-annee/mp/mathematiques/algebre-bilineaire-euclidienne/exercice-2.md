---
title: 'Exercice : Projection orthogonale et théorème spectral'
description: 'Problème d entraînement type concours pour MP (Mines-Ponts / Centrale-Supélec).'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $E$ un espace euclidien de dimension $n \ge 1$, dont le produit scalaire est noté $\langle \cdot, \cdot \rangle$ et la norme associée $\|\cdot\|$. 
On considère un endomorphisme symétrique $u \in \mathcal{L}(E)$ et un sous-espace vectoriel $F$ de $E$ stable par $u$. 

L'objectif de ce problème est d'étudier les liens entre la projection orthogonale sur $F$, la restriction de $u$ à $F$, et l'endomorphisme induit sur $F^\perp$, en s'appuyant sur le théorème spectral.

---

### ❓ Questions progressives

1. **Préalable géométrique :** Soit $p$ le projecteur orthogonal sur $F$. Rappeler la relation entre $p$, $p^*$ (adjoint de $p$) et exprimer $p(x)$ pour tout $x \in E$ à l'aide d'une base orthonormée de $F$.
2. **Stabilité de l'orthogonal :** Montrer que le sous-espace orthogonal $F^\perp$ est également stable par $u$.
3. **Lien entre projecteur et endomorphisme symétrique :** On note $u_F$ l'endomorphisme induit par $u$ sur $F$ (c'est-à-dire $\forall x \in F, u_F(x) = u(x)$). 
   Exprimer la relation liant $u$, $p$, $u_F$ et l'endomorphisme $v = u_{F^\perp}$ induit sur $F^\perp$. En déduire une expression simple de $p \circ u \circ p$ en fonction de $u_F$ et de $p$.
4. **Application spectrale :** Soit $\lambda$ une valeur propre de $u$. On note $E_\lambda = \ker(u - \lambda \operatorname{id}_E)$ le sous-espace propre associé. 
   Montrer que pour tout sous-espace $F$ stable par $u$, l'espace $F \cap E_\lambda$ est stable par $u$, et que $F^\perp \cap E_\lambda$ est également pertinent dans l'étude spectrale.
5. **Caractérisation variationnelle (Lemme de Courant-Fischer simplifié) :** On suppose que $u$ est strictement positif (ses valeurs propres sont strictement positives). Soit $F$ un sous-espace stable par $u$. Montrer que l'endomorphisme restreint $u_F$ est un automorphisme symétrique défini positif de $F$.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Utilisez la caractérisation géométrique du projecteur orthogonal : $\forall x \in E, x - p(x) \in F^\perp$.
* **Question 2 :** Prenez un vecteur $y \in F^\perp$ et montrez que pour tout $x \in F$, le produit scalaire $\langle u(y), x \ \rangle$ est nul en utilisant la symétrie de $u$.
* **Question 3 :** Décomposez l'espace $E$ sous la forme $E = F \oplus F^\perp$. Tout vecteur $x \in E$ s'écrit de manière unique comme $x = x_F + x_{F^\perp}$. 
* **Question 4 :** Pour l'intersection avec $E_\lambda$, revenez à la définition d'un vecteur propre et utilisez la linéarité.
* **Question 5 :** La symétrie et le caractère positif se héritent directement de $u$ à $u_F$. Pensez à utiliser le théorème spectral appliqué à $u_F$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Préalable géométrique
Puisque $p$ est la projection orthogonale sur $F$, par définition, pour tout $x \in E$, $p(x) \in F$ et $x - p(x) \in F^\perp$. 
L'adjoint $p^*$ de $p$ est caractérisé par $\langle p(x), y \rangle = \langle x, p^*(y) \rangle$ pour tous $x, y \in E$. 
Comme $p$ est un projecteur orthogonal, $p$ est autoadjoint, donc **$p = p^*$**. 
De plus, $p$ est idempotent ($p^2 = p$). Si $(e_1, \dots, e_r)$ est une base orthonormée de $F$, alors pour tout $x \in E$ :
$$p(x) = \sum_{i=1}^r \langle x, e_i \rangle e_i$$

#### 2. Stabilité de l'orthogonal
Soit $y \in F^\perp$. Montrons que $u(y) \in F^\perp$. 
Soit $x \in F$. Par définition de $F^\perp$, on a $\langle y, x \rangle = 0$. 
Puisque $u$ est un endomorphisme symétrique ($u = u^*$), on a :
$$\langle u(y), x \rangle = \langle y, u(x) \rangle$$
Comme $F$ est stable par $u$, le vecteur $u(x)$ appartient à $F$. Or, $y \in F^\perp$ et $u(x) \in F$, donc leur produit scalaire est nul :
$$\langle y, u(x) \rangle = 0$$
Ainsi, $\langle u(y), x \rangle = 0$ pour tout $x \in F$, ce qui signifie que **$u(y) \in F^\perp$**. Le sous-espace $F^\perp$ est donc stable par $u$.

#### 3. Lien entre projecteur et endomorphisme symétrique
Puisque $E = F \oplus F^\perp$ et que $F$ et $F^\perp$ sont stables par $u$, $u$ se décompose diagonalement par blocs. 
Pour tout $x \in E$, on peut écrire $x = p(x) + (\operatorname{id}_E - p)(x)$, où $p(x) \in F$ et $(\operatorname{id}_E - p)(x) \in F^\perp$.
L'action de $u$ sur $x$ devient :
$$u(x) = u(p(x)) + u((\operatorname{id}_E - p)(x))$$
Puisque $p(x) \in F$, $u(p(x)) = u_F(p(x))$. De même, $u((\operatorname{id}_E - p)(x)) = u_{F^\perp}((\operatorname{id}_E - p)(x))$.
On en déduit la relation globale :
$$u = u_F \circ p + u_{F^\perp} \circ (\operatorname{id}_E - p)$$
Pour exprimer $p \circ u \circ p$, appliquons $p$ à l'expression précédente :
$$p \circ u(x) = p(u_F(p(x))) + p(u_{F^\perp}((\operatorname{id}_E - p)(x)))$$
Comme $u_F(p(x)) \in F$, on a $p(u_F(p(x))) = u_F(p(x))$. 
Et comme $u_{F^\perp}((\operatorname{id}_E - p)(x)) \in F^\perp$, son image par $p$ est nulle. 
Finalement :
$$p \circ u \circ p = u_F \circ p$$

#### 4. Application spectrale
Soit $\lambda$ une valeur propre de $u$ et $E_\lambda$ le sous-espace propre associé. Soit $x \in F \cap E_\lambda$.
Puisque $x \in E_\lambda$, on a $u(x) = \lambda x$. 
De plus, $x \in F$ et $F$ est stable par $u$, donc $u(x) \in F$. Ainsi, $u_F(x) = \lambda x$, ce qui prouve que $x$ est un vecteur propre de $u_F$ (ou que $0$ si $x=0$). 
Plus généralement, $F \cap E_\lambda$ est l'espace propre de l'endomorphisme restreint $u_F$ associé à la valeur propre $\lambda$ (si $\lambda$ est valeur propre de $u_F$).

#### 5. Caractérisation variationnelle
Puisque $u$ est symétrique, sa restriction $u_F$ à un sous-espace $F$ stable est également un endomorphisme symétrique de $F$ (muni du produit scalaire induit). 
Vérifions que $u_F$ est défini positif :
Soit $x \in F \setminus \{0\}$. Comme $F \subset E$, on a $x \in E \setminus \{0\}$. 
L'hypothèse indique que $u$ est strictement positif, donc :
$$\langle u_F(x), x \rangle = \langle u(x), x \rangle > 0$$
Puisque $u_F$ est symétrique et $\langle u_F(x), x \rangle > 0$ pour tout $x \neq 0$, $u_F$ est un endomorphisme symétrique défini positif. 
Par conséquent, $u_F$ est inversible (ses valeurs propres sont toutes minorées par la plus petite valeur propre de $u$, qui est strictement positive). C'est donc un **automorphisme** de $F$.