---
title: 'Exercice 2 : Loi normale et TCL'
description: 'Problème d entraînement type concours.'
---

# CONCOURS BCPST — MATHÉMATIQUES
## Problème guidé : Réduction, couples aléatoires et Théorème de la Limite Centrale

---

### Introduction de l'examinateur

*Ce problème aborde un classique des concours BCPST : l'interconnexion entre l'algèbre linéaire (réduction des endomorphismes/matrices symétriques) et les probabilités (vecteurs gaussiens et convergence en loi via le TCL). La rigueur dans la manipulation des matrices de variance-covariance et l'application des théorèmes limites est particulièrement attendue par le jury.*

---

## Partie I : Étude d'une matrice symétrique et réduction

On considère la matrice $A$ à coefficients réels, dépendant d'un paramètre réel $\alpha \in ]-1, 1[$ :
$$A = \begin{pmatrix} 1 & \alpha & 0 \\ \alpha & 1 & \alpha \\ 0 & \alpha & 1 \end{pmatrix}$$

1. **Calculer le polynôme caractéristique de $A$, noté $\chi_A(\lambda)$.**

   *Correction guidée :*
   On calcule le déterminant par développements successifs (par exemple selon la première ligne) :
   $$\chi_A(\lambda) = \det(A - \lambda I_3) = \begin{vmatrix} 1-\lambda & \alpha & 0 \\ \alpha & 1-\lambda & \alpha \\ 0 & \alpha & 1-\lambda \end{vmatrix}$$
   En développant par rapport à la première ligne :
   $$\chi_A(\lambda) = (1-\lambda) \begin{vmatrix} 1-\lambda & \alpha \\ \alpha & 1-\lambda \end{vmatrix} - \alpha \begin{vmatrix} \alpha & \alpha \\ 0 & 1-\lambda \end{vmatrix}$$
   $$\chi_A(\lambda) = (1-\lambda) \left((1-\lambda)^2 - \alpha^2\right) - \alpha \left(\alpha(1-\lambda)\right)$$
   $$\chi_A(\lambda) = (1-\lambda) \left( (1-\lambda)^2 - 2\alpha^2 \right)$$

2. **Déterminer les valeurs propres de $A$. Sont-elles toutes réelles ? Justifier sans calcul l'existence d'une base orthonormée de vecteurs propres.**

   *Correction guidée :*
   On résout $\chi_A(\lambda) = 0$, ce qui donne immédiatement :
   * $\lambda_1 = 1$
   * $(1-\lambda)^2 = 2\alpha^2 \implies 1-\lambda = \pm \sqrt{2}\alpha$
   
   Les trois valeurs propres (distinctes ou non selon $\alpha$) sont donc :
   $$\lambda_1 = 1, \quad \lambda_2 = 1 - \sqrt{2}\alpha, \quad \lambda_3 = 1 + \sqrt{2}\alpha$$
Justification: * Puisque $\alpha \in ]-1, 1[$, ces trois valeurs propres sont clairement réelles. De plus, la matrice $A$ est **symétrique réelle** ($A = A^T$). D'après le théorème spectral, $A$ est diagonalisable dans une base orthonormée de $\mathbb{R}^3$.

3. **À quelle condition sur $\alpha$ la matrice $A$ est-elle symétrique définie positive ?**

   *Correction guidée :*
   Une matrice symétrique réelle est définie positive si et seulement si toutes ses valeurs propres sont strictement positives. 
   Ici, les valeurs propres sont $1, 1 - \sqrt{2}\alpha$ et $1 + \sqrt{2}\alpha$.
   Il faut donc :
   $$\begin{cases} 1 - \sqrt{2}\alpha > 0 \\ 1 + \sqrt{2}\alpha > 0 \end{cases} \iff |\sqrt{2}\alpha| < 1 \iff |\alpha| < \frac{1}{\sqrt{2}}$$
   Condition finale : $\alpha \in \left]-\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right[$.

---

## Partie II : Application probabiliste et loi normale

Soit $(X_1, X_2, X_3)$ un vecteur aléatoire gaussien de $\mathbb{R}^3$ dont le vecteur espérance est nul et dont la matrice de variance-covariance est la matrice $A$ de la Partie I (avec $\alpha \in \left]-\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right[$).

1. **Rappeler la définition de la densité d'un vecteur gaussien centré de matrice de covariance $A$.**

   *Correction guidée :*
   Puisque $A$ est symétrique définie positive, la densité conjointe $f_{X_1, X_2, X_3}(x_1, x_2, x_3)$ existe et est donnée par :
   $$f(x) = \frac{1}{(2\pi)^{3/2} \sqrt{\det A}} \exp\left( -\frac{1}{2} x^T A^{-1} x \right)$$
   où $x = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix}$.

2. **Les variables aléatoires $X_1$ et $X_3$ sont-elles indépendantes ? Justifier.**

   *Correction guidée :*
   Le coefficient de covariance entre $X_1$ et $X_3$ correspond au terme situé à la ligne 1, colonne 3 de la matrice de covariance $A$, c'est-à-dire :
   $$\text{Cov}(X_1, X_3) = A_{1,3} = 0$$
   Pour un vecteur gaussien, **non-corrélation équivaut à indépendance**. Par conséquent, $X_1$ et $X_3$ sont indépendantes.

3. **On pose $Y = X_1 + X_2 + X_3$. Déterminer la loi de la variable aléatoire $Y$.**

   *Correction guidée :*
   La variable $Y$ est une combinaison linéaire de variables aléatoires gaussiennes, c'est donc une variable aléatoire gaussienne. Il suffit de déterminer son espérance et sa variance.
   * **Espérance :** 
     $$E(Y) = E(X_1) + E(X_2) + E(X_3) = 0 + 0 + 0 = 0$$
   * **Variance :** 
     $$V(Y) = V(X_1 + X_2 + X_3) = \sum_{i=1}^3 V(X_i) + 2\sum_{1 \le i < j \le 3} \text{Cov}(X_i, X_j)$$
     D'après la matrice $A$ :
     * $V(X_1) = V(X_2) = V(X_3) = 1$
     * $\text{Cov}(X_1, X_2) = \text{Cov}(X_2, X_3) = \alpha$ et $\text{Cov}(X_1, X_3) = 0$
     
     Ainsi :
     $$V(Y) = (1 + 1 + 1) + 2(\alpha + \alpha + 0) = 3 + 4\alpha$$
     Conclusion : $Y \sim \mathcal{N}(0, 3 + 4\alpha)$. (On remarque que $3+4\alpha > 0$ sur l'intervalle autorisé).

---

## Partie III : Théorème de la Limite Centrale et convergence

Soit $(Z_n)_{n \ge 1}$ une suite de variables aléatoires indépendantes et identiquement distribuées (i.i.d.) de loi uniforme sur l'intervalle $[-1, 1]$.

1. **Calculer l'espérance $m$ et la variance $\sigma^2$ d'une variable $Z_1$.**

   *Correction guidée :*
   Si $Z_1 \sim \mathcal{U}([-1, 1])$ :
   * $m = E(Z_1) = \int_{-1}^{1} \frac{t}{2} dt = 0$
   * $E(Z_1^2) = \int_{-1}^{1} \frac{t^2}{2} dt = \left[ \frac{t^3}{6} \right]_{-1}^{1} = \frac{1}{3}$
   * $\sigma^2 = V(Z_1) = E(Z_1^2) - (E(Z_1))^2 = \frac{1}{3} - 0 = \frac{1}{3}$

2. **On pose pour tout entier $n \ge 1$ :**
   $$S_n = \sum_{k=1}^n Z_k \quad \text{et} \quad T_n = \frac{S_n}{\sqrt{n \sigma^2}}$$
   **Énoncer précisément le Théorème de la Limite Centrale (TLC) s'appliquant à la suite $(T_n)$.**

   *Correction guidée :*
   *Énoncé du cours :* Soit $(Z_k)_{k \ge 1}$ une suite de variables aléatoires i.i.d., admettant une espérance $m$ et une variance $\sigma^2$ strictement positive. Alors, la suite des variables centrées réduites $T_n = \frac{\sum_{k=1}^n Z_k - n m}{\sigma \sqrt{n}}$ converge en loi vers une variable aléatoire suivant la loi normale centrée réduite $\mathcal{N}(0,1)$.

   Ici, comme $m = 0$ et $\sigma^2 = 1/3$, on a :
   $$T_n = \frac{S_n}{\sqrt{n/3}} = \sqrt{\frac{3}{n}} \sum_{k=1}^n Z_k$$
   La suite $(T_n)$ converge en loi vers une variable $Z \sim \mathcal{N}(0,1)$. On note $T_n \xrightarrow{\mathcal{L}} \mathcal{N}(0,1)$.

3. **Soit $x \in \mathbb{R}$. Exprimer à l'aide de la fonction de répartition $\Phi$ de la loi $\mathcal{N}(0,1)$ la limite suivante :**
   $$\lim_{n \to ++\infty} P\left( \frac{S_n}{\sqrt{n}} \le x \frac{\sqrt{3}}{3} \s\right)$$

   *Correction guidée :*
   On remarque que :
   $$\frac{S_n}{\sqrt{n}} \le x \frac{\sqrt{3}}{3} \iff \frac{S_n}{\sqrt{n/3}} \le x \iff T_n \le x$$
   Par définition de la convergence en loi, pour toute fonction de répartition continue en $x$ (ce qui est le cas pour $\mathcal{N}(0,1)$) :
   $$\lim_{n \to +\infty} P(T_n \le x) = \Phi(x)$$
   où $\Phi(x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{x} e^{-t^2/2} dt$.

---

### Analyse critique des résultats de l'examinateur

* **Cohérence dimensionnelle et de signe :** Dans la Partie I, la contrainte sur $\alpha$ garantissant le caractère défini positif de $A$ ($|\alpha| < \frac{\sqrt{2}}{2}$) est cruciale. Si elle n'était pas respectée, la matrice de variance-covariance de la Partie II n'en serait pas une, car une variance (ou une valeur propre associée à la matrice de covariance) ne peut être négative.
* **Puissance du TCL :** La Partie III illustre la universalité du Théorème de la Limite Centrale : peu importe la loi de départ (ici uniforme sur $[-1, 1]$), la somme normalisée converge systématiquement vers une loi gaussienne $\mathcal{N}(0,1)$, facilitant grandement le calcul de probabilités asymptotiques pour de grands échantillons $n$.