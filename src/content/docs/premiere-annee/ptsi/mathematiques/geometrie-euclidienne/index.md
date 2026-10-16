---
title: 'Cours : Géométrie euclidienne'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $E$ un $\mathbb{R}$-espace vectoriel. 

### A. Produit scalaire
On appelle **produit scalaire** sur $E$ une application, notée $(\cdot \mid \cdot)$ ou $\langle \cdot, \cdot \rangle$, qui à tout couple de vecteurs $(x, y)_E^2$ associe un nombre réel $(x \mid y)$, vérifiant les axiomes suivants :
1. **Bilinéarité** : 
   - Pour tout $y \in E$, l'application $x \mapsto (x \mid y)$ est linéaire.
   - Pour tout $x \in E$, l'application $y \mapsto (x \mid y)$ est linéaire.
2. **Symétrie** : Pour tous $(x, y)_E^2$, $(x \mid y) = (y \mid x)$.
3. **Positivité** : Pour tout $x \in E$, $(x \mid x) \ge 0$.
4. **Caractère défini** : Pour tout $x \in E$, $(x \mid x) = 0 \iff x = 0_E$.

Un espace vectoriel muni d'un produit scalaire est appelé **espace préhilbertien réel**. S'il est de dimension finie, on l'appelle **espace euclidien**.

### B. Norme euclidienne et orthogonalité
* **Norme associée** : Pour tout $x \in E$, $\|x\| = \sqrt{(x \mid x)}$.
* **Orthogonalité** : Deux vecteurs $x$ et $y$ de $E$ sont dits **orthogonaux**, et on note $x \perp y$, si et seulement si $(x \mid y) = 0$.
* **Supplémentaire orthogonal** : Soit $F$ un sous-espace vectoriel de $E$. On définit son orthogonal par :
  $$F^\perp = \{x \in E \mid \forall y \in F, \, (x \mid y) = 0\}$$

### C. Le groupe orthogonal
Soit $(E, (\cdot \mid \cdot))$ un espace euclidien. Un endomorphisme $u \in \mathcal{L}(E)$ est dit **orthogonal** s'il conserve le produit scalaire, c'est-à-dire :
$$\forall (x, y) \in E^2, \, (u(x) \mid u(y)) = (x \mid y)$$
L'ensemble des endomorphismes orthogonaux de $E$ forme un groupe pour la composition, noté $\mathcal{O}(E)$ (**groupe orthogonal**).

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### A. Inégalité de Cauchy-Schwarz et Inégalité triangulaire

#### Théorème (Inégalité de Cauchy-Schwarz)
Pour tous vecteurs $x$ et $y$ d'un espace préhilbertien $E$ :
$$|(x \mid y)| \le \|x\| \|y\|$$
*Cas d'égalité* : Il y a égalité si et seulement si la famille $(x, y)$ est liée.

#### Démonstration :
Si $y = 0_E$, l'inégalité est triviale ($0 \le 0$) et le cas d'égalité est immédiat.
Supposons donc $y \neq 0_E$. Pour tout réel $\lambda \in \mathbb{R}$, posons :
$$P(\lambda) = \|x + \lambda y\|^2 = (x + \lambda y \mid x + \lambda y)$$
Par bilinéarité et symétrie du produit scalaire :
$$P(\lambda) = (x \mid x) + 2\lambda (x \mid y) + \lambda^2 (y \mid y) = \|x\|^2 + 2(x \mid y)\lambda + \|y\|^2 \lambda^2$$
Puisque $P(\lambda)$ est un trinôme du second degré en $\lambda$ à coefficients réels ($\|y\|^2 > 0$) et que $P(\lambda) = \|x + \lambda y\|^2 \ge 0$ pour tout $\lambda \in \mathbb{R}$, son discriminant réduit $\Delta'$ doit être négatif ou nul :
$$\Delta' = (x \mid y)^2 - \|x\|^2 \|y\|^2 \le 0$$
D'où $(x \mid y)^2 \le \|x\|^2 \|y\|^2$. En passant à la racine carrée, on obtient $|(x \mid y)| \le \|x\| \|y\|$.

S'il y a égalité, $\Delta' = 0$, donc le trinôme $P$ admet une racine réelle $\lambda_0$ telle que $P(\lambda_0) = 0$, soit $\|x + \lambda_0 y\|^2 = 0$, ce qui implique $x + \lambda_0 y = 0_E$ (par définition de la norme). La famille est donc liée. Réciproquement, si la famille est liée, le calcul direct montre qu'il y a égalité. $\blacksquare$

---

#### Théorème (Inégalité triangulaire)
Pour tous vecteurs $x$ et $y$ de $E$ :
$$\|x + y\| \le \|x\| + \|y\|$$

#### Démonstration :
Élevons la norme au carré en utilisant le produit scalaire :
$$\|x + y\|^2 = (x + y \mid x + y) = \|x\|^2 + 2(x \mid y) + \|y\|^2$$
D'après l'inégalité de Cauchy-Schwarz, $(x \mid y) \le |(x \mid y)| \le \|x\| \|y\|$. Ainsi :
$$\|x + y\|^2 \le \|x\|^2 + 2\|x\| \|y\| + \|y\|^2 = (\|x\| + \|y\|)^2$$
Puisque les deux membres sont positifs, en prenant la racine carrée, on conclut :
$$\|x + y\| \le \|x\| + \|y\| \quad \blacksquare$$

---

### B. Théorème de Pythagore
Soient $x$ et $y$ deux vecteurs orthogonaux d'un espace préhilbertien $E$. Alors :
$$\|x + y\|^2 = \|x\|^2 + \|y\|^2$$

#### Démonstration :
$$\|x + y\|^2 = (x + y \mid x + y) = (x \mid x) + 2(x \mid y) + (y \mid y)$$
Comme $x \perp y$, on a $(x \mid y) = 0$. Il vient immédiatement :
$$\|x + y\|^2 = \|x\|^2 + \|y\|^2 \quad \blacksquare$$

---

### C. Théorème de la base orthonormée (Gram-Schmidt)
Tout espace euclidien $E$ de dimension finie admet au moins une **base orthonormée** (BON). 

#### Démonstration (par récurrence sur la dimension $n$) :
Soit $(e_1, \dots, e_n)$ une base quelconque de $E$. On construit une base orthogonale $(v_1, \dots, v_n)$ par récurrence :
- $v_1 = e_1$
- Pour $k \ge 2$, on pose $v_k = e_k - \sum_{i=1}^{k-1} \frac{(e_k \mid v_i)}{\|v_i\|^2} v_i$
On vérifie par récurrence que pour tout $k$, la famille $(v_1, \dots, v_k)$ est orthogonale et engendre le même sous-espace que $(e_1, \dots, e_k)$. Enfin, on normalise chaque vecteur en posant $u_k = \frac{v_k}{\|v_k\|}$ pour obtenir une BON. $\blacksquare$

---

## 💡 3. Méthodes classiques de résolution

1. **Calculs de distances et projections orthogonales** :
   Pour calculer la distance d'un vecteur $x$ à un sous-espace vectoriel $F$, on détermine la projection orthogonale $p_F(x)$ de $x$ sur $F$ à l'aide d'une BON $(u_1, \dots, u_k)$ de $F$ :
   $$p_F(x) = \sum_{i=1}^k (x \mid u_i) u_i$$
   La distance recherchée est alors $d(x, F) = \|x - p_F(x)\|$.

2. **Caractérisations des endomorphismes orthogonaux en dimension finie** :
   Soit $u \in \mathcal{L}(E)$ et $M$ sa matrice dans une BON. Les assertions suivantes sont équivalentes :
   * $u \in \mathcal{O}(E)$ ($u$ est orthogonal).
   * $u$ conserve la norme : $\forall x \in E, \, \|u(x)\| = \|x\|$.
   * La matrice $M$ vérifie $^tMM = I_n$ (ou $MM^t = I_n$).
   * Les colonnes (resp. lignes) de $M$ forment une base orthonormée de $\mathbb{R}^n$ muni du produit scalaire canonique.

3. **Réduction des endomorphismes autoadjoints (symétriques)** :
   Si $u = u^*$ ($u$ est symétrique), alors $u$ est **diagonalisable dans une base orthonormée**. Pour le démontrer ou l'exploiter :
   * Les sous-espaces propres associés à des valeurs propres distinctes sont deux à deux orthogonaux.
   * On procède par récurrence sur la dimension en considérant l'orthogonal d'un vecteur propre.

---

## ⚠️ 4. Pièges classiques aux Concours

* **Confondre espace préhilbertien et espace euclidien** : En dimension infinie (espaces préhilbertiens), un sous-espace vectoriel fermé n'admet pas toujours un supplémentaire orthogonal (le théorème du supplémentaire orthogonal $E = F \oplus F^\perp$ exige que $F$ soit de dimension finie ou fermé de codimension finie).
* **Oubli de la dimension finie** : L'équivalence entre "isométrie bijective" et "endomorphisme orthogonal" est vraie en dimension finie, mais fausse en dimension infinie (exemple de l'opérateur de décalage unilatéral/shift qui est isométrique mais non surjectif).
* **Mauvaise utilisation du procédé de Gram-Schmidt** : Appliquer le procédé de normalisation prématurément sur les vecteurs $v_k$ avant d'avoir terminé l'orthogonalisation alourdit considérablement les calculs numériques et conduit fréquemment à des erreurs de calculs littéraux.
* **Caractère orthogonal vs symétrique** : Ne pas confondre matrice orthogonale ($^tM = M^{-1}$) et matrice symétrique ($^tM = M$). Une matrice orthogonale n'est pas nécessairement diagonalisable dans $\mathbb{R}$ (ses valeurs propres sont de module $1$, par exemple les rotations du plan).