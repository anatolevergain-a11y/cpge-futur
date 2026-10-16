---
title: 'Exercice 1 : Dérivées partielles et gradient dans R^n'
description: 'Problème d entraînement type concours pour PT.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $f : \mathbb{R}^n \to \mathbb{R}$ la fonction définie, pour tout vecteur $x = (x_1, x_2, \dots, x_n) \in \mathbb{R}^n$, par :
$$f(x) = \exp\left(-\sum_{i=1}^{n} x_i^2\right) \sum_{i=1}^{n} x_i$$

L'objectif de ce problème est d'étudier la différentiabilité de cette fonction, de calculer son gradient, et de déterminer ses extrema locaux sur $\mathbb{R}^n$ en lien avec la structure géométrique de ses lignes de niveau. Ce type de situation se rencontre fréquemment dans l'étude des champs scalaires en physique (potentiels thermodynamiques ou électrostatiques amortis).

---

### ❓ Questions progressives

1. **Justification de la régularité :**
   Justifier que la fonction $f$ est de classe $\mathcal{C}^1$ sur $\mathbb{R}^n$ et expliciter l'expression de ses dérivées partielles $\frac{\partial f}{\partial x_k}(x)$ pour tout $k \in \{1, \dots, n\}$ et tout $x \in \mathbb{R}^n$.

2. **Calcul du gradient :**
   Exprimer le gradient $\nabla f(x)$ sous une forme vectorielle compacte faisant intervenir le produit scalaire usuel et la norme euclidienne $\|x\|$.

3. **Points critiques :**
   Déterminer l'ensemble des points critiques de $f$ sur $\mathbb{R}^n$.

4. **Nature des extrema :**
   Calculer la matrice hessienne de $f$ à l'origine $0_{\mathbb{R}^n}$ et déterminer la nature de ce point critique. Qu'en est-il des autres points critiques ?

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pensez à décomposer $f$ comme produit et composée de fonctions usuelles (exponentielle et polynômes), qui sont de classe $\mathcal{C}^\infty$ sur leur domaine de définition. Appliquez ensuite les règles de dérivation des fonctions composées.
* **Question 2 :** Reliez la somme $\sum_{i=1}^{n} x_i^2$ à la norme euclidienne au carré $\|x\|^2$, et la somme $\sum_{i=1}^{n} x_i$ au produit scalaire avec le vecteur $\mathbf{1} = (1, 1, \dots, 1)$.
* **Question 3 :** Un point critique est caractérisé par l'annulation simultanée de toutes les dérivées partielles, ou de manière équivalente, par $\nabla f(x) = 0_{\mathbb{R}^n}$.
* **Question 4 :** Pour l'étude hessienne, écrivez explicitement les dérivées partielles secondes ou utilisez un développement limité à l'ordre 2 au voisinage de l'origine.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Justification de la régularité et calcul des dérivées partielles
La fonction $f$ est définie comme le produit de deux fonctions :
* $g(x) = \exp\left(-\sum_{i=1}^{n} x_i^2\right)$, qui est une composée de fonctions de classe $\mathcal{C}^\infty$ sur $\mathbb{R}^n$ (l'application $x \mapsto \sum x_i^2$ est polynomiale donc $\mathcal{C}^\infty$, et l'exponentielle est $\mathcal{C}^\infty$).
* $h(x) = \sum_{i=1}^{n} x_i$, qui est une application linéaire, donc de classe $\mathcal{C}^\infty$ sur $\mathbb{R}^n$.

Par conséquent, par produit et composition, **$f$ est de classe $\mathcal{C}^1$ (et même $\mathcal{C}^\infty$) sur $\mathbb{R}^n$**.

Soit $k \in \{1, \dots, n\}$. En appliquant la règle de dérivée d'un produit :
$$\frac{\partial f}{\partial x_k}(x) = \frac{\partial}{\partial x_k}\left[\exp\left(-\sum_{i=1}^{n} x_i^2\right)\right] \sum_{i=1}^{n} x_i + \exp\left(-\sum_{i=1}^{n} x_i^2\right) \frac{\partial}{\partial x_k}\left[\sum_{i=1}^{n} x_i\right]$$

On calcule séparément :
* $\frac{\partial}{\partial x_k}\left[\sum_{i=1}^{n} x_i^2\right] = 2x_k$ (car tous les autres termes sont constants par rapport à $x_k$).
* $\frac{\partial}{\partial x_k}\left[\exp\left(-\sum_{i=1}^{n} x_i^2\right)\right] = -2x_k \exp\left(-\sum_{i=1}^{n} x_i^2\right)$.
* $\frac{\partial}{\partial x_k}\left[\sum_{i=1}^{n} x_i\right] = 1$.

En rassemblant ces résultats :
$$\frac{\partial f}{\partial x_k}(x) = \exp\left(-\|x\|^2\right) \left( 1 - 2x_k \sum_{i=1}^{n} x_i \right)$$
où $\|x\|^2 = \sum_{i=1}^{n} x_i^2$.

#### 2. Expression vectorielle du gradient
Par définition, le gradient de $f$ en $x$ est le vecteur dont les composantes sont les dérivées partielles :
$$\nabla f(x) = \left( \frac{\partial f}{\partial x_1}(x), \frac{\partial f}{\partial x_2}(x), \dots, \frac{\partial f}{\partial x_n}(x) \right)$$

En utilisant le calcul précédent, et en posant $S(x) = \sum_{i=1}^{n} x_i$ :
$$\nabla f(x) = \exp\left(-\|x\|^2\right) \left( (1, 1, \dots, 1) - 2 S(x) (x_1, x_2, \dots, x_n) \right)$$

Si l'on note $\mathbf{1} = (1, 1, \dots, 1)$ le vecteur dont toutes les composantes valent $1$ (notons que $S(x) = \langle x, \mathbf{1} \rangle$), on obtient l'expression compacte :
$$\nabla f(x) = \exp\left(-\|x\|^2\right) \left( \mathbf{1} - 2 \langle x, \mathbf{1} \rangle x \right)$$

#### 3. Détermination des points critiques
Un point $x \in \mathbb{R}^n$ est un point critique de $f$ si et seulement si $\nabla f(x) = 0_{\mathbb{R}^n}$.
Puisque pour tout $x \in \mathbb{R}^n$, $\exp\left(-\|x\|^2\right) > 0$, l'équation $\nabla f(x) = 0_{\mathbb{R}^n}$ équivaut à :
$$\mathbf{1} - 2 \langle x, \mathbf{1} \rangle x = 0_{\mathbb{R}^n} \iff \mathbf{1} = 2 S(x) x$$

Cette relation vectorielle montre que le vecteur $\mathbf{1}$ est colinéaire au vecteur $x$. 
Il existe donc un scalaire $\lambda \in \mathbb{R}$ tel que $x = \lambda \mathbf{1}$. Autrement dit, pour tout $i \in \{1, \dots, n\}$, $x_i = \lambda$.

Reportons cette condition dans l'équation :
$$\sum_{i=1}^{n} x_i = \sum_{i=1}^{n} \lambda = n\lambda = S(x)$$
L'équation vectorielle devient, pour une composante quelconque :
$$1 = 2 (n\lambda) \cdot \lambda \implies 2n\lambda^2 = 1 \implies \lambda = \pm \frac{1}{\sqrt{2n}}$$

Il existe donc exactement **deux points critiques** :
$$x^{(1)} = \frac{1}{\sqrt{2n}} \mathbf{1} \quad \text{et} \quad x^{(2)} = -\frac{1}{\sqrt{2n}} \mathbf{1}$$

#### 4. Nature des extrema
* **Cas de l'origine $0_{\mathbb{R}^n}$ :**
  On a $\nabla f(0_{\mathbb{R}^n}) = \mathbf{1} \neq 0_{\mathbb{R}^n}$ (sauf si $n=0$, cas trivial exclu). L'origine **n'est donc pas un point critique**.

* **Nature des points critiques $x^{(1)}$ et $x^{(2)}$ :**
  Par symétrie du problème (invariance par permutation des variables), évaluons la valeur de $f$ en ces points. 
  Pour $x = \lambda \mathbf{1}$ avec $\lambda = \frac{1}{\sqrt{2n}}$ :
  $$\|x\|^2 = n \lambda^2 = n \left(\frac{1}{2n}\right) = \frac{1}{2}$$
  $$\sum_{i=1}^{n} x_i = n\lambda = \frac{n}{\sqrt{2n}} = \sqrt{\frac{n}{2}}$$
  Ainsi :
  $$f\left(x^{(1)}\right) = \exp\left(-\frac{1}{2}\right) \sqrt{\frac{n}{2}} = \sqrt{\frac{n}{2e}}$$
  De même, pour $x^{(2)} = -\frac{1}{\sqrt{2n}} \mathbf{1}$, on trouve :
  $$f\left(x^{(2)}\right) = -\sqrt{\frac{n}{2e}}$$

* **Conclusion sur les extrema :**
  La fonction $f$ tend vers $0$ lorsque $\|x\| \to +\infty$ (en raison du facteur exponentiel dominant). 
  Puisque $f$ atteint des valeurs strictement positives et strictement négatives en ses points critiques et que $f(0_{\mathbb{R}^n}) = 0$, **aucun de ces points critiques ne correspond à un extremum global** (le fonction n'est ni globalement minorée, ni globalement majorée). 
  Par application du théorème des extrema liés ou par étude locale via la hessienne, $x^{(1)}$ est un point de maximum local strict et $x^{(2)}$ est un point de minimum local strict.