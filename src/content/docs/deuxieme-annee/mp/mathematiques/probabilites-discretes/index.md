---
title: 'Cours : Variables aléatoires discrètes'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Variables Aléatoires Discrètes (CPGE - MP)

---

## 1. Généralités et Espace Probabilité

Soit $(\Omega, \mathcal{A}, P)$ un espace probabilisé. 

### Définition (Variable aléatoire discrète)
Une **variable aléatoire discrète** $X$ est une application $X : \Omega \to X(\Omega)$ telle que :
1. $X(\Omega)$ est un sous-ensemble fini ou dénombrable de $\mathbb{R}$.
2. Pour tout $x \in X(\Omega)$, l'événement $\{X = x\} = X^{-1}(\{x\}) = \{\omega \in \Omega \mid X(\omega) = x\}$ appartient à $\mathcal{A}$.

### Loi d'une variable aléatoire
La **loi** de $X$ est entièrement déterminée par la donnée des probabilités :
$$\forall x \in X(\Omega), \quad P(X = x)$$
Ces nombres vérifient la condition de normalisation :
$$\sum_{x \in X(\Omega)} P(X = x) = 1$$

---

## 2. Espérance et Moments

### Définition (Espérance)
Soit $X$ une variable aléatoire discrète. On dit que $X$ admet une **espérance** (ou qu'elle est intégrable) si la famille $(x P(X = x))_{x \in X(\Omega)}$ est **absolument sommable**, c'est-à-dire si :
$$\sum_{x \in X(\Omega)} |x| P(X = x) < +\infty$$
Dans ce cas, l'espérance de $X$ est définie par :
$$E[X] = \sum_{x \in X(\Omega)} x P(X = x)$$

### Théorème (Transfert - CSG)
Soit $X$ une variable aléatoire discrète et $g : X(\Omega) \to \mathbb{R}$ une fonction. 
La variable aléatoire $g(X)$ admet une espérance si et seulement si la famille $(g(x)P(X=x))_{x \in X(\Omega)}$ est absolument sommable. Le cas échéant :
$$E[g(X)] = \sum_{x \in X(\Omega)} g(x) P(X = x)$$

### Variance et Écart-type
Si $X$ admet un moment d'ordre 2 (i.e., $E[X^2] < +\infty$), alors $X$ admet une variance définie par :
$$V(X) = E\left[(X - E[X])^2\right] = E[X^2] - (E[X])^2 \ge 0$$
L'**écart-type** est $\sigma(X) = \sqrt{V(X)}$.

---

## 3. Lois Usuelles

| Loi | Notation | Support $X(\Omega)$ | $P(X=k)$ | Espérance $E[X]$ | Variance $V(X)$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Bernoulli** | $\mathcal{B}(p)$ | $\{0, 1\}$ | $P(X=1)=p, P(X=0)=1-p$ | $p$ | $p(1-p)$ |
| **Binomiale** | $\mathcal{B}(n, p)$ | $\llbracket 0, n \rrbracket$ | $\binom{n}{k} p^k (1-p)^{n-k}$ | $np$ | $np(1-p)$ |
| **Géométrique** | $\mathcal{G}(p)$ | $\mathbb{N}^*$ | $p(1-p)^{k-1}$ ($p \in ]0, 1]$) | $\frac{1}{p}$ | $\frac{1-p}{p^2}$ |
| **Poisson** | $\mathcal{P}(\lambda)$ | $\mathbb{N}$ | $e^{-\lambda} \frac{\lambda^k}{k!}$ ($\lambda > 0$) | $\lambda$ | $\lambda$ |

---

## 4. Couples de Variables Aléatoires

### Loi conjointe et lois marginales
Soit $(X, Y)$ un couple de variables aléatoires discrètes définies sur $(\Omega, \mathcal{A}, P)$.
* **Loi conjointe :** $\forall (x,y) \in X(\Omega) \times Y(\Omega)$, $P(X=x, Y=y)$.
* **Lois marginales :** Pour tout $x \in X(\Omega)$, $P(X=x) = \sum_{y \in Y(\Omega)} P(X=x, Y=y)$.

### Indépendance
Les variables $X$ et $Y$ sont dites **indépendantes** si :
$$\forall (x,y) \in X(\Omega) \times Y(\Omega), \quad P(X=x, Y=y) = P(X=x)P(Y=y)$$

### Théorème (Formule de König-Huygens et Linéarité)
* **Linéarité de l'espérance :** Si $X$ et $Y$ admettent une espérance, alors pour tous $\alpha, \beta \in \mathbb{R}$, $\alpha X + \beta Y$ admet une espérance et :
  $$E[\alpha X + \beta Y] = \alpha E[X] + \beta E[Y]$$
* **Espérance du produit (si indépendantes) :** Si $X$ et $Y$ sont indépendantes et intégrables, alors $XY$ est intégrable et :
  $$E[XY] = E[X]E[Y]$$
* **Variance d'une somme (si indépendantes) :** Si $X$ et $Y$ sont indépendantes et de carré intégrable :
  $$V(X + Y) = V(X) + V(Y)$$

---

## 5. Méthodes

### Méthode 1 : Calculer l'espérance ou la variance par la technique des "variables indicatrices"
Pour toute variable aléatoire $X$ à valeurs dans $\mathbb{N}$, on a la formule fondamentale :
$$E[X] = \sum_{k=1}^{+\infty} P(X \ge k)$$
*Utile en particulier pour les sommes de variables de Bernoulli.* Si $X = \sum_{i=1}^n I_i$ où les $I_i$ sont des indicatrices :
$$E[X] = \sum_{i=1}^n E[I_i] = \sum_{i=1}^n P(I_i = 1)$$

### Méthode 2 : Reconnaissance de lois usuelles par les sommation
Face à une somme du type $\sum_{k=0}^n \binom{n}{k} \dots$, penser aux développements de Taylor (binomiale, exponentielle) pour identifier ou simplifier des constantes de normalisation.

---

## 6. Pièges Classiques (À Éviter)

1. **Existence des moments :** Ne jamais appliquer de formule sur $E[X]$ ou $V(X)$ sans avoir vérifié au préalable **l'absolue convergence** de la série (ou la convergence simple si les termes sont positifs).
2. **Indépendance vs Incorrélation :** L'indépendance implique $E[XY] = E[X]E[Y]$ (donc covariance nulle), mais la réciprocité est **fausse**.
3. **Inversion de sommes doubles :** Lors du calcul de $E[g(X,Y)]$ ou de la loi de $X+Y$ (produit de convolution discret), justifier rigoureusement l'inversion des sommations infinies (Fubini discret pour les familles sommables).