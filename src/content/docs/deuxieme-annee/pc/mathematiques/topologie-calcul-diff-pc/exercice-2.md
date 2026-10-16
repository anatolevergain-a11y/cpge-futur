---
title: 'Exercice 2 : Gradient et différentielle'
description: 'Problème d entraînement type concours pour PC.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $E = \mathcal{M}_n(\mathbb{R})$ l'espace vectoriel des matrices carrées réelles d'ordre $n \ge 2$. On rappelle que $E$ peut être muni de la norme euclidienne issue du produit scalaire canonique, dit produit scalaire de Frobenius, défini pour $A, B \in E$ par :
$$\langle A, B \rangle = \operatorname{Tr}(A^\top B) = \sum_{i=1}^n \sum_{j=1}^n a_{i,j} b_{i,j}$$
La norme associée est notée $\|A\| = \sqrt{\langle A, A \rangle}$.

On considère l'application $f : E \to \mathbb{R}$ définie pour tout $A \in E$ par :
$$f(A) = \operatorname{Tr}(A^3) - 3 \operatorname{Tr}(A)$$

L'objectif de ce problème est d'étudier la différentiabilité de $f$, de calculer sa différentielle et son gradient, puis de rechercher et classifier ses extrema locaux.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Continuité et différentiabilité**
   a) Justifier que l'application $f$ est de classe $\mathcal{C}^1$ sur $E$ et exprimer sa différentielle $df(A)$ pour une matrice $A \in E$ quelconque et un accroissement $H \in E$.
   b) Rappeler la définition du gradient de $f$ en $A$, noté $\nabla f(A)$, dans l'espace euclidien $(E, \langle \cdot, \cdot \rangle)$. Déterminer explicitement $\nabla f(A)$ en fonction de $A$.

2. **Recherche des points critiques**
   a) Établir qu'une matrice $A \in E$ est un point critique de $f$ si et seulement si $3A^2 - 3I_n = 0$, où $I_n$ désigne la matrice identité d'ordre $n$.
   b) En déduire l'ensemble des points critiques de $f$.

3. **Étude locale et nature des extrema**
   a) Justifier que $f$ est de classe $\mathcal{C}^2$ sur $E$ et calculer la différentielle seconde $d^2f(A)(H, H)$ pour $A, H \in E$.
   b) Soit $A_0 = I_n$. Étudier la nature du point critique $A_0$ à l'aide de $d^2f(A_0)$.
   c) Soit $A_1 = -I_n$. Étudier la nature du point critique $A_1$ à l'aide de $d^2f(A_1)$.

4. **Analyse globale et critique du modèle**
   a) L'espace $E$ étant de dimension finie, que peut-on dire de l'existence d'extrema globaux pour $f$ ?
   b) *Analyse critique :* L'application $f$ admet-elle un maximum global sur $E$ ? Justifier rigoureusement en considérant les directions diagonales.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Pour calculer la différentielle, on pourra utiliser la linéarité de la trace et développer $f(A+H) - f(A)$ en négligeant les termes d'ordre supérieur ou égal à $2$ en $H$. Pour le gradient, utilisez le théorème de représentation de Riesz qui relie $df(A)(H)$ à $\langle \nabla f(A), H \rangle$.
- **Question 2 :** Pensez à exploiter la cyclicité de la trace sous le produit scalaire pour identifier proprement le gradient.
- **Question 3 :** La formule de Taylor-Young à l'ordre 2 permet de conclure quant à la nature des extrema locaux lorsque la différentielle seconde est définie (positive ou négative stricte).
- **Question 4 :** Pour l'étude globale, pensez à examiner le comportement de $f$ le long d'une droite vectorielle ou sur les matrices diagonales lorsque les coefficients tendent vers l'infini.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Continuité et différentiabilité
a) L'application $A \mapsto A^3$ est une application polynomiale en les coefficients de la matrice $A$ (composée de produits matriciels, qui sont des applications bilinéaires). La trace est une application linéaire. Par conséquent, $f$ est une fonction polynomiale des coefficients $(a_{i,j})_{1 \le i,j \le n}$ de $A$. Elle est donc de classe $\mathcal{C}^\infty$ sur $E$.

Soit $A \in E$ et $H \in E$ un accroissement. Calculons $f(A+H)$ :
$$f(A+H) = \operatorname{Tr}((A+H)^3) - 3\operatorname{Tr}(A+H)$$
Développons $(A+H)^3$ :
$$(A+H)^3 = (A^2 + AH + HA + H^2)(A+H) = A^3 + A^2H + AHA + AH^2 + HA^2 + HAH + H^2A + H^3$$
En regroupant les termes d'ordre 1 en $H$ et en utilisant la linéarité de la trace :
$$\operatorname{Tr}((A+H)^3) = \operatorname{Tr}(A^3) + \operatorname{Tr}(A^2H + AHA + HA^2) + \mathcal{O}(\|H\|^2)$$
Par la propriété cyclique de la trace ($\operatorname{Tr}(XYZ) = \operatorname{Tr}(YZX) = \operatorname{Tr}(ZXY)$), on a :
$$\operatorname{Tr}(AHA) = \operatorname{Tr}(A^2H) \quad \text{et} \quad \operatorname{Tr}(HA^2) = \operatorname{Tr}(A^2H)$$
Ainsi :
$$\operatorname{Tr}((A+H)^3) = \operatorname{Tr}(A^3) + 3\operatorname{Tr}(A^2H) + \mathcal{O}(\|H\|^2)$$
De plus, $\operatorname{Tr}(A+H) = \operatorname{Tr}(A) + \operatorname{Tr}(H)$. Finalement :
$$f(A+H) = f(A) + 3\operatorname{Tr}(A^2H) - 3\operatorname{Tr}(H) + \mathcal{O}(\|H\|^2)$$
L'application $H \mapsto 3\operatorname{Tr}((A^2 - I_n)H)$ est linéaire et continue (car $E$ est de dimension finie). Donc $f$ est différentiable en $A$ et :
$$\forall H \in E, \quad df(A)(H) = 3\operatorname{Tr}((A^2 - I_n)H)$$

b) Par définition, le gradient $\nabla f(A)$ est l'unique vecteur de $E$ tel que :
$$\forall H \in E, \quad df(A)(H) = \langle \nabla f(A), H \rangle$$
En écrivant le produit scalaire de Frobenius :
$$\langle \nabla f(A), H \rangle = \operatorname{(\nabla f(A)}^\top H)$$
Or, on a $df(A)(H) = 3\operatorname{Tr}((A^2 - I_n)H)$. En identifiant avec le produit scalaire $\operatorname{Tr}(\nabla f(A)^\top H)$, et sachant que la trace est symétrique par transposition (ou en choisissant la base canonique), on obtient :
$$\nabla f(A) = 3(A^2 - I_n)^\top = 3(A^\top\!^2 - I_n)$$
*(Remarque : si l'on se place dans le cas où les matrices sont symétriques, on aurait $\nabla f(A) = 3(A^2 - I_n)$, mais ici $E = \mathcal{M}_n(\mathbb{R})$ sans restriction de symétrie, donc $A^\top$ intervient par transposition).*

---

#### 2. Recherche des points critiques
a) Une matrice $A \in E$ est un point critique de $f$ si et seulement si $\nabla f(A) = 0_E$, ce qui équivaut à :
$$3(A^\top\!^2 - I_n) = 0_E \iff A^\top\!^2 = I_n$$
*Correction rigoureuse :* Le gradient nul équivaut aussi à l'annulation de la différentielle pour tout $H$, soit $A^2 - I_n = 0_E$. En effet, si $\operatorname{Tr}((A^2 - I_n)H) = 0$ pour toute matrice $H$, en choisissant $H = (A^2 - I_n)^\top$, on obtient $\|A^2 - I_n\|^2 = 0$, soit $A^2 = I_n$.

b) Les points critiques de $f$ sont donc les matrices $A \in \mathcal{M}_n(\mathbb{R})$ telles que $A^2 = I_n$. 
Cet ensemble contient notamment $I_n$ et $-I_n$, mais aussi une infinité d'autres matrices (par exemple, toute matrice de symétrie non triviale, ou des matrices par blocs, etc.).

---

#### 3. Étude locale et nature des extrema
a) $f$ étant polynomiale, elle est de classe $\mathcal{C}^2$ sur $E$. Fixons un point $A \in E$. La différentielle seconde $d^2f(A)$ s'obtient en différentiant l'application $H \mapsto 3\operatorname{Tr}((A^2 - I_n)H)$ par rapport à $A$ dans la direction d'un second accroissement $K \in E$.
En posant $g(A) = A^2$, on a $dg(A)(K) = AK + KA$. Ainsi :
$$d^2f(A)(H, K) = 3\operatorname{Tr}((d(A^2)(K))H) = 3\operatorname{Tr}((AK + KA)H)$$
Pour $K = H$, on obtient la forme quadratique :
$$d^2f(A)(H, H) = 3\operatorname{Tr}((AH + HA)H) = 3\operatorname{Tr}(AH^2 + HAH)$$
Par cyclicité de la trace, $\operatorname{Tr}(HAH) = \operatorname{Tr}(H^2A)$, donc :
$$d^2f(A)(H, H) = 3\operatorname{Tr}(AH^2 + H^2A) = 6\operatorname{Tr}(AH^2)$$

b) **Étude en $A_0 = I_n$ :**
On a $d^2f(I_n)(H, H) = 6\operatorname{Tr}(I_n H^2) = 6\operatorname{Tr}(H^2) = 6\|H\|^2$.
Pour tout $H \neq 0_E$, $d^2f(I_n)(H, H) = 6\|H\|^2 > 0$. 
La forme quadratique est définie positive. Par la condition suffisante d'extremum local, **$A_0 = I_n$ est un minimum local strict** de $f$.

c) **Étude en $A_1 = -I_n$ :**
On a $d^2f(-I_n)(H, H) = 6\operatorname{Tr}((-I_n)H^2) = -6\operatorname{Tr}(H^2) = -6\|H\|^2$.
Pour tout $H \neq 0_E$, $d^2f(-I_n)(H, H) = -6\|H\|^2 < 0$. 
La forme quadratique est définie négative. Par conséquent, **$A_1 = -I_n$ est un maximum local strict** de $f$.

---

#### 4. Analyse globale et critique du modèle
a) L'espace $E = \mathcal{M}_n(\mathbb{R})$ est de dimension finie ($n^2$), mais l'ensemble de définition de $f$ est tout l'espace, qui n'est pas compact. Le théorème des bornes atteintes (Weierstrass) ne s'applique donc pas directement pour garantir l'existence d'un maximum ou d'un minimum global.

b) *Analyse critique du modèle :* 
Étudions le comportement de $f$ sur les matrices diagonales. Soit $A = \operatorname{diag}(x_1, x_2, \dots, x_n)$ une matrice diagonale. On a :
$$f(A) = \sum_{i=1}^n (x_i^3 - 3x_i)$$
Considérons la fonction d'une variable réelle $h(x) = x^3 - 3x$. On a $\lim_{x \to +\infty} h(x) = +\infty$ et $\lim_{x \to -\infty} h(x) = -\infty$.
Si l'on choisit par exemple $x_1 = t$ (avec $t \to +\infty$) et $x_2 = \dots = x_n = 0$, alors :
$$f(A) = t^3 - 3t \xrightarrow[t \to +\infty]{} +\infty$$
De même, en faisant tendre $t$ vers $-\infty$, $f(A) \to -\infty$.
**Conclusion critique :** L'application $f$ n'est **ni majorée ni minorée** sur $E$. Par conséquent, $f$ n'admet **aucun extremum global** (ni maximum global, ni minimum global) sur $\mathcal{M}_n(\mathbb{R})$, bien qu'elle admette des extrema locaux stricts en $I_n$ et $-I_n$.