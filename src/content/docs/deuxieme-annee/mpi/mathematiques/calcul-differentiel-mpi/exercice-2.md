---
title: 'Problème : Extrema sous contrainte et multiplicateurs de Lagrange'
description: 'Problème d entraînement type concours (Mines-Ponts / Centrale-Supélec) - Filière MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $n \ge 2$ un entier. On munit l'espace vectoriel $\mathbb{R}^n$ de sa structure euclidienne canonique, notée $\langle \cdot, \cdot \rangle$ et associée à la norme euclidienne $\| \cdot \|$.

On considère la fonction $f : \mathbb{R}^n \to \mathbb{R}$ définie par :
$$f(x_1, x_2, \dots, x_n) = \sum_{i=1}^n x_i^3$$

L'objectif de ce problème est d'étudier l'existence et la nature des extrema de la fonction $f$ restreinte à la sphère unité $S^{n-1} = \{ x \in \mathbb{R}^n \mid \|x\| = 1 \}$.

---

### ❓ Questions progressives

1. **Préliminaires topologiques :** Justifier que la fonction $f$ admet un maximum et un minimum global sur la sphère $S^{n-1}$.
2. **Calcul différentiel :** Calculer le gradient $\nabla f(x)$ pour tout $x = (x_1, \dots, x_n) \in \mathbb{R}^n$.
3. **Application du théorème des extrema liés :** On introduit la fonction de contrainte $g(x) = \|x\|^2 - 1$. 
   À l'aide du théorème des multiplicateurs de Lagrange, montrer que si $x_0 \in S^{n-1}$ est un extremum local de $f$ sur $S^{n-1}$, alors il existe un réel $\lambda$ (le multiplicateur de Lagrange) tel que :
   $$\nabla f(x_0) = \lambda \nabla g(x_0)$$
4. **Résolution du système critique :** 
   a. Expliciter le système d'équations vérifié par les coordonnées $(x_1, \dots, x_n)$ d'un point critique lié $x_0$ et le multiplicateur $\lambda$.
   b. En déduire que pour tout $i \in \{1, \dots, n\}$, soit $x_i = 0$, soit $x_i^2$ est indépendant de $i$ (pour les composantes non nulles).
5. **Identification des extrema :** 
   a. Déterminer tous les candidats possibles pour être des extrema de $f$ sur $S^{n-1}$.
   b. Conclure en donnant les valeurs maximales et minimales de $f$ sur $S^{n-1}$.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pensez à invoquer un théorème général d'analyse sur les fonctions continues définies sur des parties remarquables de $\mathbb{R}^n$.
* **Question 2 & 3 :** Vérifiez que les fonctions $f$ et $g$ sont de classe $\mathcal{C}^1$. Calculez soigneusement les gradients. Quelle est la condition sur la différentielle de la contrainte pour appliquer le théorème ?
* **Question 4 :** Multipliez chaque équation par $x_i$ pour faire apparaître $x_i^3$ et exploitez la contrainte $\sum x_i^2 = 1$.
* **Question 5 :** Évaluez $f$ sur les différents points candidats trouvés pour identifier les extrema globaux.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Préliminaires topologiques
La fonction $f$ est une fonction polynomiale en les variables $(x_1, \dots, x_n)$, elle est donc de classe $\mathcal{C}^\infty$ (et en particulier continue) sur $\mathbb{R}^n$.
La sphère $S^{n-1} = \{ x \in \mathbb{R}^n \mid \|x\| = 1 \}$ est l'image réciproque du singleton $\{1\}$ par l'application continue $\|\cdot\|^2$. Par conséquent, $S^{n-1}$ est un fermé de $\mathbb{R}^n$. De plus, elle est clairement bornée (tous ses éléments sont de norme 1). 
Dans l'espace vectoriel normé de dimension finie $\mathbb{R}^n$, la sphère $S^{n-1}$ est donc un compact (théorème de Heine-Borel).
Par le **théorème des bornes atteintes** (Weierstrass), toute fonction continue sur un compact à valeurs dans $\mathbb{R}$ y atteint ses bornes (maximum et minimum). Ainsi, $f$ admet un maximum et un minimum global sur $S^{n-1}$.

#### 2. Calcul différentiel
Pour tout $x = (x_1, \dots, x_n) \in \mathbb{R}^n$ et pour tout $i \in \{1, \dots, n\}$, les dérivées partielles de $f$ sont :
$$\frac{\partial f}{\partial x_i}(x) = 3x_i^2$$
Le gradient de $f$ est donc le vecteur :
$$\nabla f(x) = 3 (x_1^2, x_2^2, \dots, x_n^2)$$

#### 3. Application du théorème des extrema liés
Soit $g : \mathbb{R}^n \to \mathbb{R}$ définie par $g(x) = \|x\|^2 - 1 = \sum_{i=1}^n x_i^2 - 1$.
La sphère $S^{n-1}$ est exactement la surface de niveau $g^{-1}(\{0\})$. 
Les fonctions $f$ et $g$ sont de classe $\mathcal{C}^1$ sur $\mathbb{R}^n$. 
Le gradient de la contrainte est $\nabla g(x) = 2x$. 
Pour tout point $x_0 \in S^{n-1}$, on a $\nabla g(x_0) = 2x_0 \neq 0$. La différentielle de $g$ en $x_0$ est donc surjective (rang 1).
D'après le **théorème des extrema liés (multiplicateurs de Lagrange)**, si $x_0$ est un extremum local de $f$ sur $S^{n-1}$, il existe un réel $\lambda$ tel que :
$$\nabla f(x_0) = \lambda \nabla g(x_0)$$

#### 4. Résolution du système critique
**a.** L'équation vectorielle $\nabla f(x_0) = \lambda \nabla g(x_0)$ se traduit par le système de $n$ scalaires (pour $i \in \{1, \dots, n\}$) :
$$3x_i^2 = 2\lambda x_i$$
Auxquelles s'ajoute la condition de liaison (la contrainte) :
$$\sum_{i=1}^n x_i^2 = 1$$

**b.** Réécrivons l'équation sous la forme $x_i(3x_i - 2\lambda) = 0$. 
Pour chaque indice $i$, cela impose deux cas :
1. Soit $x_i = 0$.
2. Soit $3x_i - 2\lambda = 0$, c'est-à-dire $x_i = \frac{2\lambda}{3}$.

Ainsi, pour tous indices $i$ et $j$ pour lesquels les composantes $x_i$ et $x_j$ sont non nulles, on a obligatoirement $x_i = x_j = \frac{2\lambda}{3}$. 
En d'autres termes, les composantes non nulles ont toutes la même valeur absolue (et même le même signe si $\lambda \neq 0$).

#### 5. Identification des extrema
Soit $k$ le nombre de composantes non nulles de $cx_0$, avec $1 \le k \le n$ (puisque $\|x_0\| = 1$, $k$ ne peut pas être nul).
Si $k$ composantes valent $c$ en valeur absolue, alors la contrainte $\sum x_i^2 = 1$ s'écrit :
$$k \cdot c^2 = 1 \implies c^2 = \frac{1}{k}$$
La valeur de la fonction $f$ en un tel point critique est :
$$f(x_0) = \sum_{i=1}^n x_i^3 = \sum_{i \in \text{support}} x_i^3$$
Selon le signe de $c$, $c$ vaut $\frac{1}{\sqrt{k}}$ ou $-\frac{1}{\sqrt{k}}$. 
* Si $c = \frac{1}{\sqrt{k}}$, alors $f(x_0) = k \times \left(\frac{1}{\sqrt{k}}\right)^3 = \frac{k}{k^{3/2}} = \frac{1}{\sqrt{k}}$.
* Si $c = -\frac{1}{\sqrt{k}}$, alors $f(x_0) = -\frac{1}{\sqrt{k}}$.

Puisque $k$ est un entier compris entre $1$ et $n$ :
* La valeur maximale de $f$ sur $S^{n-1}$ est obtenue pour $k = 1$ (par exemple en $(1, 0, \dots, 0)$ ou ses permutations avec des signes appropriés), et vaut $\frac{1}{\sqrt{1}} = 1$.
* La valeur minimale de $f$ sur $S^{n-1}$ est obtenue lorsque $c = -\frac{1}{\sqrt{1}}$, et vaut $-1$.
Conclusion: ** 
* Le **maximum global** de $f$ sur $S^{n-1}$ est **$1$**, atteint aux points de la base canonique $(1, 0, \dots, 0), (0, 1, 0, \dots), \dots$
* Le **minimum global** de $f$ sur $S^{n-1}$ est **$-1$**, atteint aux points $(-1, 0, \dots, 0), (0, -1, 0, \dots), \dots$