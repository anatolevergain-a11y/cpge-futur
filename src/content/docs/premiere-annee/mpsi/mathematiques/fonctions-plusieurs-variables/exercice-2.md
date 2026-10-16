---
title: 'Exercice 2 : Extrema locaux sur un ouvert de R^n'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $U$ l'ouvert $\mathbb{R}^2$ (ou un ouvert de $\mathbb{R}^n$). L'objectif de ce problème est d'étudier la nature des points critiques d'une fonction différentiable à plusieurs variables, en se focalisant sur le passage de conditions nécessaires d'ordre un à des conditions suffisantes d'ordre deux via la réduction des formes quadratiques.

On considère la fonction $f : \mathbb{R}^2 \to \mathbb{R}$ définie par :
$$f(x,y) = x^4 + y^4 - 2x^2 - 2y^2 + 4xy$$

Ce type de fonction polynomiale est modelé sur des situations classiques de physique-chimie (surfaces d'énergie potentielle) ou d'optimisation sans contrainte.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Classe et différentiabilité** : Justifier que $f$ est de classe $\mathcal{C}^\infty$ sur $\mathbb{R}^2$ et expliciter ses dérivées partielles d'ordre un, $\partial_1 f(x,y)$ et $\partial_2 f(x,y)$.
2. **Recherche des points critiques** : Déterminer l'ensemble des points critiques de $f$, c'est-à-dire les points $(x_0, y_0) \in \mathbb{R}^2$ tels que $\nabla f(x_0, y_0) = (0, 0)$.
3. **Calcul différentiel d'ordre deux** : Calculer la matrice hessienne $H_f(x,y)$ de $f$ en tout point $(x,y) \in \mathbb{R}^2$.
4. **Nature des points critiques** : À l'aide du théorème de Schwarz et de l'étude des valeurs propres de la hessienne (ou du critère de Sylvester), déterminer la nature (minimum local, maximum local, ou point selle) de chaque point critique trouvé à la question 2.
5. **Analyse critique du modèle et comportement global** : 
   - La fonction $f$ possède-t-elle des extrema globaux sur $\mathbb{R}^2$ ? Justifier l'existence ou la non-existence de bornes.
   - Discuter la pertinence de l'approximation locale (ordre 2) pour décrire le comportement de $f$ au voisinage de l'origine $(0,0)$.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 & 2** : Les polynômes sont $\mathcal{C}^\infty$ sur $\mathbb{R}^2$. Pour les points critiques, résolvez un système de deux équations à deux inconnues en factorisant par les termes opportuns.
- **Question 3** : Attention à l'ordre des dérivées partielles secondes : $\partial_{1,2}f = \partial_{2,1}f$ par le théorème de Schwarz.
- **Question 4** : Évaluez $H_f$ en chaque point critique. Si la matrice est définie positive (valeurs propres strictement positives), il s'agit d'un minimum local strict. Si elle a des valeurs propres de signes strictement opposés, c'est un point selle.
- **Question 5** : Pour les extrema globaux, étudiez la limite de $f(x,0)$ quand $x \to \infty$ et le comportement le long de la diagonale $y = x$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Classe et dérivées partielles
La fonction $f$ est une fonction polynomiale en les variables $x$ et $y$. Elle est donc de classe $\mathcal{C}^\infty$ sur $\mathbb{R}^2$.
Calculons les dérivées partielles premières :
$$\partial_1 f(x,y) = \frac{\partial f}{\partial x}(x,y) = 4x^3 - 4x + 4y$$
$$\partial_2 f(x,y) = \frac{\partial f}{\partial y}(x,y) = 4y^3 - 4y + 4x$$

#### 2. Recherche des points critiques
Un point $(x,y)$ est critique si et seulement si $\nabla f(x,y) = (0,0)$, ce qui conduit au système :
$$\begin{cases} 4x^3 - 4x + 4y = 0 \\ 4y^3 - 4y + 4x = 0 \end{cases} \iff \begin{cases} x^3 - x + y = 0 \quad (\text{Eq. 1}) \\ y^3 - y + x = 0 \quad (\text{Eq. 2}) \end{cases}$$

En additionnant (Eq. 1) et (Eq. 2), on obtient :
$$x^3 + y^3 = 0 \iff (x+y)(x^2 - xy + y^2) = 0$$
Puisque le discriminant de $x^2 - xy + y^2$ (vu en $x$) est $\Delta = -3y^2 \le 0$, ce facteur est nul si et seulement si $x=y=0$. Ainsi, la seule solution réelle est :
$$y = -x$$

En injectant $y = -x$ dans (Eq. 1) :
$$x^3 - x - x = 0 \iff x^3 - 2x = 0 \iff x(x^2 - 2) = 0$$
Les solutions pour $x$ sont donc $x \in \{0, \sqrt{2}, -\sqrt{2}\}$.

En remplaçant pour trouver $y$ ($y = -x$), on obtient exactement **trois points critiques** :
- $S_1 = (0, 0)$
- $S_2 = (\sqrt{2}, -\sqrt{2})$
- $S_3 = (-\sqrt{2}, \sqrt{2})$

#### 3. Matrice hessienne
Les dérivées partielles secondes s'obtiennent en dérivant $\partial_1 f$ et $\partial_2 f$ :
$$\partial_{1,1} f(x,y) = 12x^2 - 4$$
$$\partial_{2,2} f(x,y) = 12y^2 - 4$$
$$\partial_{1,2} f(x,y) = \partial_{2,1} f(x,y) = 4$$

La matrice hessienne en tout point $(x,y)$ est donc :
$$H_f(x,y) = \begin{pmatrix} 12x^2 - 4 & 4 \\ 4 & 12y^2 - 4 \end{pmatrix}$$

#### 4. Nature des points critiques
Étudions la hessienne en chacun des points critiques :

- **Au point $S_1(0,0)$** :
  $$H_f(0,0) = \begin{pmatrix} -4 & 4 \\ 4 & -4 \end{pmatrix}$$
  Le déterminant de cette matrice vaut $\det(H_f(0,0)) = (-4)(-4) - 4^2 = 16 - 16 = 0$. Le critère usuel par stricte positivité/négativité échoue (la matrice est dégénérée). 
  Regardons directement le comportement de $f$ au voisinage de $(0,0)$ le long des axes ou des droites. 
  Si on pose $y = mx$, on a $f(x, mx) = x^4(1 + m^4) - 2x^2(1 + m^2) + 4mx^2 = x^2 \left[ x^2(1+m^4) - 2(1+m^2) + 4m \right]$.
  Plus simplement, le long de l'axe $y = 0$, $f(x,0) = x^4 - 2x^2 = x^2(x^2 - 2)$ (négatif pour $x$ petit non nul). 
  Le long de la première bissectrice $y = x$ :
  $$f(x,x) = x^4 + x^4 - 2x^2 - 2x^2 + 4x^2 = 2x^4 \ge 0$$
  Puisque $f(x,0)$ prend des valeurs négatives au voisinage de $(0,0)$ et $f(x,x)$ prend des valeurs positives, **$S_1(0,0)$ est un point selle**.

- **Au point $S_2(\sqrt{2}, -\sqrt{2})$** :
  Ici, $x^2 = 2$ et $y^2 = 2$. La hessienne devient :
  $$H_f(\sqrt{2}, -\sqrt{2}) = \begin{pmatrix} 12(2) - 4 & 4 \\ 4 & 12(2) - 4 \end{pmatrix} = \begin{pmatrix} 20 & 4 \\ 4 & 20 \end{pmatrix}$$
  Calculons les invariants :
  - Trace : $\text{Tr} = 40 > 0$
  - Déterminant : $\det = 20 \times 20 - 4^2 = 400 - 16 = 384 > 0$
  Les deux valeurs propres sont strictement positives (par le produit et la somme des valeurs propres). Par conséquent, $H_f(\sqrt{2}, -\sqrt{2})$ est définie positive.
  **$S_2(\sqrt{2}, -\sqrt{2})$ est un minimum local strict**.

- **Au point $S_3(-\sqrt{2}, \sqrt{2})$** :
  Par symétrie évidente de $f$ (invariant par l'échange de $x$ et $y$ et par changement de signe), on a :
  $$H_f(-\sqrt{2}, \sqrt{2}) = \begin{pmatrix} 20 & 4 \\ 4 & 20 \end{pmatrix}$$
  On conclut de la même manière : **$S_3(-\sqrt{2}, \sqrt{2})$ est un minimum local strict**.

#### 5. Analyse critique du modèle et comportement global
- **Extrema globaux** : 
  Étudions le comportement de $f$ lorsque $\|(x,y)\| \to +\infty$. 
  Si on se place sur la droite $y = 0$, $f(x,0) = x^4 - 2x^2 \xrightarrow[|x|\to+\infty]{} +\infty$.
  Cependant, les termes en $x^4$ et $y^4$ dominent globalement. Plus rigoureusement, pour tout $(x,y)$, la fonction est minorée car $x^4 + y^4 \ge \frac{1}{2}(x^2+y^2)^2$ (par l'inégalité de Cauchy-Schwarz ou Young). 
  Comme $f(x,y) \ge x^4 + y^4 - 2(x^2+y^2) - 2|xy| \ge x^4 + y^4 - 3(x^2+y^2)$ (en remarquant $2|xy| \le x^2+y^2$), les termes de plus haut degré l'emportent. $f$ est coercive, ce qui garantit **l'existence d'un minimum global** sur $\mathbb{R}^2$ (atteint en l'un des minima locaux, ici $S_2$ et $S_3$ où $f(\sqrt{2}, -\sqrt{2}) = 4 + 4 - 4 - 4 - 8 = -8$).
  
- **Pertinence de l'approximation locale en $(0,0)$** :
  Le développement de Taylor à l'ordre 2 en $(0,0)$ donne :
  $$f(x,y) = f(0,0) + \nabla f(0,0) \cdot (x,y) + \frac{1}{2} (x,y) H_f(0,0) \begin{pmatrix} x \\ y \end{pmatrix} + o(\|(x,y)\|^2)$$
  $$f(x,y) = -2x^2 + 4xy - 2y^2 + o(\|(x,y)\|^2) = -2(x-y)^2 + o(\|(x,y)\|^2)$$
  Puisque la partie quadratique est de rang 1 (et négative ou nulle), elle ne permet pas de trancher directement (le déterminant de la hessienne est nul). C'est un cas "dégénéré" où l'ordre 2 ne suffit pas, et il a fallu recourir à l'étude directe le long de chemins (fin de la question 4) pour prouver qu'il s'agit d'un point selle.