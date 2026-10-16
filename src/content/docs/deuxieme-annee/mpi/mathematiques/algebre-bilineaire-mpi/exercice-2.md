---
title: 'Problème type Concours - Adjoint et endomorphismes symétriques'
description: 'Exercice corrigé pas à pas pour la filière MPI, niveau Mines-Ponts / Centrale-Supélec.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $(E, \langle \cdot, \cdot \rangle)$ un espace euclidien réel de dimension finie $n \ge 1$. On note $\| \cdot \}$ la norme euclidienne associée. 

Soit $u \in \mathcal{L}(E)$ un endomorphisme de $E$. On rappelle l'existence et l'unicité de l'adjoint de $u$, noté $u^*$, défini par la relation :
$$\forall (x, y) \in E^2, \quad \langle u(x), y \rangle = \langle x, u^*(y) \rangle$$

L'objectif de ce problème est d'étudier certaines relations entre l'image, le noyau d'un endomorphisme et de son adjoint, ainsi que d'établir une caractérisation métrique des endomorphismes symétriques.

---

### ❓ Questions progressives

1. **Préalables sur les noyaux et images :**
   Montrer que pour tout $u \in \mathcal{L}(E)$, on a les relations orthogones :
   $$\ker(u^*) = (\operatorname{Im} u)^\perp \quad \text{et} \quad \ker(u) = (\operatorname{Im} u^*)^\perp$$

2. **Application au rang :**
   En déduire que $u$ et $u^*$ ont même rang.

3. **Endomorphismes symétriques et normes :**
   On suppose dans cette question que $u$ est un endomorphisme symétrique (c'est-à-dire $u^* = u$). 
   Montrer que si $\forall x \in E, \langle u(x), x \rangle = 0$, alors $u = 0_{\mathcal{L}(E)}$.

4. **Généralisation aux endomorphismes quelconques :**
   Soit $v \in \mathcal{L}(E)$ un endomorphisme quelconque. Montrer que si $\forall x \in E, \langle v(x), x \rangle = 0$, alors $v = 0_{\mathcal{L}(E)}$ (on pourra utiliser la symétrie de la partie symétrique de $v$).

5. **Caractérisation spectrale et normes d'opérateurs :**
   Soit $u$ un endomorphisme symétrique. On pose :
   $$M = \sup_{x \in E, \|x\| = 1} |\langle u(x), x \rangle|$$
   Montrer que $M = \max \{|\lambda| \mid \lambda \in \operatorname{Sp}(u)\}$.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pour montrer l'égalité de deux ensembles, pensez à faire une double inclusion ou à raisonner par équivalences successives en utilisant la définition de l'orthogonal. Par exemple, $y \in (\operatorname{Im} u)^\perp \iff \forall x \in E, \langle u(x), y \rangle = 0$.
* **Question 2 :** Utilisez le théorème du rang et la dimension de l'orthogonal d'un sous-espace vectoriel.
* **Question 3 :** C'est un classique de colles et d'écrits. Pensez à l'identité de polarisation (ou à évaluer l'expression en $x+y$).
* **Question 4 :** Décomposez $v$ comme la somme d'une partie symétrique et d'une partie antisymétrique. Que dire de la contribution de la partie antisymétrique dans le produit scalaire $\langle v(x), x \rangle$ ?
* **Question 5 :** Utilisez le théorème spectral (diagonalisation dans une base orthonormée) pour exprimer $\langle u(x), x \rangle$ à l'aide de coordonnées et de valeurs propres.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Préalables sur les noyaux et images
Soit $y \in E$. Par définition :
$$y \in \ker(u^*) \iff u^*(y) = 0_E \iff \forall x \in E, \langle u^*(y), x \rangle = 0$$
Par définition de l'adjoint, $\langle u^*(y), x \rangle = \langle y, u(x) \rangle$. Ainsi :
$$y \in \ker(u^*) \iff \forall x \in E, \langle y, u(x) \rangle = 0 \iff y \in (\operatorname{Im} u)^\perp$$
On a donc bien $\ker(u^*) = (\operatorname{Im} u)^\perp$. 
En appliquant ce résultat à l'endomorphisme $u^*$ (et en sachant que $(u^*)^* = u$), on obtient :
$$\ker(u) = \ker((u^*)^*) = (\operatorname{Im} u^*)^\perp$$

#### 2. Application au rang
En prenant l'orthogonal des deux membres de la première relation, et sachant que pour tout sous-espace vectoriel $F$, $(F^\perp)^\perp = F$ (car $E$ est de dimension finie), on obtient :
$$\operatorname{Im} u = (\ker(u^*))^\perp$$
D'après le théorème du rang appliqué à $u^*$, on a :
$$\dim(\ker(u^*)) + \dim(\operatorname{Im} u^*) = \dim(E)$$
De plus, on sait que $\dim((\ker(u^*))^\perp) = \dim(E) - \dim(\ker(u^*))$, ce qui donne $\dim(\operatorname{Im} u) = \dim(\operatorname{Im} u^*)$. 
Ainsi, **$u$ et $u^*$ ont le même rang**.

#### 3. Endomorphismes symétriques et annulation
Soit $u$ un endomorphisme symétrique tel que $\forall x \in E, \langle u(x), x \rangle = 0$.
Soit $(x, y) \in E^2$. Évaluons $\langle u(x+y), x+y \gt$ par bilinéarité :
$$\langle u(x+y), x+y \rangle = \langle u(x), x \rangle + \langle u(y), y \rangle + \langle u(x), y \rangle + \langle u(y), x \rangle$$
Par hypothèse, les deux premiers termes sont nuls. De plus, par symétrie de $u$ :
$$\langle u(y), x \rangle = \langle y, u(x) \rangle = \langle u(x), y \rangle$$
L'équation devient donc :
$$0 = 0 + 0 + 2\langle u(x), y \rangle \implies \forall (x,y) \in E^2, \langle u(x), y \rangle = 0$$
En particulier, en choisissant $y = u(x)$, on obtient $\langle u(x), u(x) \rangle = \|u(x)\|^2 = 0$, soit $u(x) = 0_E$ pour tout $x \in E$. 
Par conséquent, **$u = 0_{\mathcal{L}(E)}$**.

#### 4. Généralisation aux endomorphismes quelconques
Soit $v \in \mathcal{L}(E)$ tel que $\forall x \in E, \langle v(x), x \rangle = 0$.
Tout endomorphisme se décompose de manière unique comme la somme d'une partie symétrique $s$ et d'une partie antisymétrique $a$ :
$$v = s + a \quad \text{avec} \quad s = \frac{v + v^*}{2} \quad \text{et} \quad a = \frac{v - v^*}{2}$$
Calculons $\langle v(x), x \rangle$ pour un vecteur $x \in E$ :
$$\langle v(x), x \rangle = \langle s(x) + a(x), x \rangle = \langle s(x), x \rangle + \langle a(x), x \rangle$$
Puisque $a$ est antisymétrique ($a^* = -a$), on a pour tout $x \in E$ :
$$\langle a(x), x \rangle = \langle x, a^*(x) \rangle = \langle x, -a(x) \rangle = -\langle a(x), x \rangle$$
Ceci implique que $\langle a(x), x \rangle = 0$. Par conséquent :
$$\forall x \in E, \quad \langle v(x), x \rangle = \langle s(x), x \rangle = 0$$
Puisque $s$ est un endomorphisme symétrique, la question précédente permet de conclure que $s = 0_{\mathcal{L}(E)}$. Ainsi, $v = a$, c'est-à-dire que $v$ est antisymétrique.
*Attention, l'énoncé demande de montrer que $v = 0$*. Reprenons : si $v$ est antisymétrique, alors $\forall x \in E, \langle v(x), x \rangle = 0$. 
Pour tout $(x, y) \in E^2$, en développant $\langle v(x+y), x+y \rangle = 0$, et sachant $\langle v(x), x \rangle = \langle v(y), y \rangle = 0$, il vient :
$$\langle v(x), y \rangle + \langle v(y), x \rangle = 0$$
Puisque $v$ est antisymétrique, $\langle v(y), x \rangle = \langle y, v(x) \rangle = -\langle v(x), y \rangle$. L'égalité précédente donne :
$$\langle v(x), y \rangle - \langle v(x), y \rangle = 0 \quad (\text{ce qui est toujours vrai})$$
*Correction de la déduction :* Pour un endomorphisme antisymétrique quelconque, on n'a pas nécessairement $v=0$ (ex: une rotation vectorielle plane d'angle $\pi/2$). L'énoncé classique suppose $v$ symétrique ou impose une condition supplémentaire. Si $v$ est quelconque, on a seulement montré que $v$ est **antisymétrique**.

#### 5. Caractérisation spectrale
Puisque $u$ est symétrique, le théorème spectral garantit l'existence d'une base orthonormée $(e_1, \dots, e_n)$ de $E$ constituée de vecteurs propres de $u$. Soit $(\lambda_1, \dots, \lambda_n)$ les valeurs propres associées.
Soit $x = \sum_{i=1}^n x_i e_i \in E$ tel que $\|x\| = 1$, ce qui se traduit par $\sum_{i=1}^n x_i^2 = 1$.
Calculons $\langle u(x), x \rangle$ :
$$\langle u(x), x \rangle = \left\langle \sum_{i=1}^n x_i \lambda_i e_i, \sum_{j=1}^n x_j e_j \right\rangle = \sum_{i=1}^n \lambda_i x_i^2$$
Majorons cette expression en valeur absolue :
$$|\langle u(x), x \rangle| = \left| \sum_{i=1}^n \lambda_i x_i^2 \right| \le \sum_{i=1}^n |\lambda_i| x_i^2 \le \max_{1 \le i \le n} |\lambda_i| \left( \sum_{i=1}^n x_i^2 \right) = \max_{1 \le i \le n} |\lambda_i}$$
Ainsi, $M \le \max_{1 \le i \nleq n} |\lambda_i|$.
De plus, si l'on choisit $x = e_{j}$ où $j$ est un indice tel que $|\lambda_j| = \max_{1 \le i \le n} |\lambda_i|$, on a $\|e_j\| = 1$ et :
$$|\langle u(e_j), e_j \rangle| = |\lambda_j \langle e_j, e_j \rangle| = |\lambda_j| = \max_{1 \le i \le n} |\lambda_i|$$
Par conséquent, le supremum est atteint, et l'on conclut bien que :
$$M = \max_{\lambda \in \operatorname{Sp}(u)} |\lambda|$$