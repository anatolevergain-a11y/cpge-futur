---
title: 'Cours : Analyse, Géométrie 3D et Probabilités PT'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# FICHE DE COURS : Analyse, Géométrie 3D et Probabilités (CPGE - PT)

## 1. Analyse : Séries de fonctions et Séries entières

### 1.1. Convergence des séries de fonctions
Soit $(f_n)_{n \in \mathbb{N}}$ une suite de fonctions définies sur un partie $A \subset \mathbb{R}$ à valeurs dans $\mathbb{R}$ ou $\mathbb{C}$.

*   **Convergence simple :** La série $\sum f_n$ converge simplement sur $A$ vers une fonction $S$ si pour tout $x \in A$, la suite numérique $\left(\sum_{k=0}^n f_k(x)\right)_{n \in \mathbb{N}}$ converge vers $S(x)$.
*   **Convergence uniforme :** La série $\sum f_n$ converge uniformément sur $A$ vers $S$ si la suite des fonctions sommes partielles $(S_n)_{n \in \mathbb{N}}$ définie par $S_n(x) = \sum_{k=0}^n f_k(x)$ converge uniformément vers $S$ sur $A$, c'est-à-dire :
    $$\lim_{n \to +\infty} \sup_{x \in A} |S_n(x) - S(x)| = 0$$
*   **Théorème de continuité :** Si $\sum f_n$ converge uniformément sur $A$ vers $S$ et si chaque $f_n$ est continue en $x_0 \in A$, alors $S$ est continue en $x_0$.
*   **Théorème d'intégration sur un segment :** Si $A = [a, b]$, si les fonctions $f_n$ sont continues et si $\sum f_n$ converge uniformément sur $[a, b]$ vers $S$, alors :
    $$\int_a^b \left( \sum_{n=0}^{+\infty} f_n(t) \right) dt = \sum_{n=0}^{+\infty} \int_a^b f_n(t) dt$$

### 1.2. Séries entières
Une série entière est une série de fonctions de la forme $\sum a_n x^n$ (ou $\sum a_n z^n$ dans le cas complexe), où $(a_n)_{n \in \mathbb{N}}$ est une suite de nombres réels ou complexes.

*   **Lemme d'Abel :** Si la suite $(a_n r_0^n)_{n \in \mathbb{N}}$ est bornée pour un certain $r_0 > 0$, alors pour tout $x$ tel que $|x| < r_0$, la série $\sum a_n x^n$ converge absolument.
*   **Rayon de convergence :** Il existe un unique $R \in [0, +\infty]$ appelé rayon de convergence tel que :
    *   La série converge absolument pour tout $x$ tel que $|x| < R$.
    *   La série diverge grossièrement pour tout $x$ tel que $|x| > R$.
*   **Calcul du rayon :** On utilise souvent la règle de d'Alembert (si $\lim \left|\frac{a_{n+1}}{a_n}\right|$ existe) :
    $$\frac{1}{R} = \lim_{n \to +\infty} \left|\frac{a_{n+1}}{a_n}\right|$$
*   **Propriétés de la somme :** Soit $S(x) = \sum_{n=0}^{+\infty} a_n x^n$ de rayon de convergence $R > 0$.
    *   $S$ est de classe $\mathcal{C}^\infty$ sur ]$-R, R[$.
    *   Les dérivées s'obtiennent par dérivation terme à terme : $S'(x) = \sum_{n=1}^{+\infty} n a_n x^{n-1}$, avec le même rayon de convergence $R$.
    *   Les coefficients s'expriment via les dérivées successives : $a_n = \frac{S^{(n)}(0)}{n!}$.

---

## 2. Géométrie 3D

Dans l'espace euclidien orienté $\mathcal{E}_3$ rapporté à un repère orthonormal direct $(O, \vec{i}, \vec{j}, \vec{k})$, on étudie les objets géométriques fondamentaux.

### 2.1. Plans et droites
*   **Plan :** Un plan $\mathcal{P}$ est défini par un point $A(x_0, y_0, z_0)$ et un vecteur normal $\vec{n}(A, B, C)$. Son équation cartésienne est de la forme :
    $$Ax + By + Cz + D = 0$$
*   **Droite :** Une droite $\mathcal{D}$ passant par $A(x_0, y_0, z_0)$ et dirigée par $\vec{u}(\alpha, \beta, \gamma)$ a pour représentation paramétrique :
    $$\begin{cases} x = x_0 + \alpha t \\ y = y_0 + \beta t \\ z = z_0 + \gamma t \end{cases} \quad (t \in \mathbb{R})$$

### 2.2. Distances et projections
*   **Distance d'un point $M_0(x_0, y_0, z_0)$ à un plan $\mathcal{P} : Ax + By + Cz + D = 0$ :**
    $$d(M_0, \mathcal{P}) = \frac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}}$$
*   **Produit vectoriel :** Soit $\vec{u}$ et $\vec{v}$ deux vecteurs de $\mathcal{R}^3$. Le produit vectoriel $\vec{u} \wedge \vec{v}$ est orthogonal à $\vec{u}$ et $\vec{v}$, de norme $\|\vec{u}\| \|\vec{v}\| |\sin(\theta)|$, et $(\vec{u}, \vec{v}, \vec{u} \wedge \vec{v})$ forme une base directe.

---

## 3. Probabilités PT

### 3.1. Variables aléatoires à densité
Soit $X$ une variable aléatoire définie sur un espace probabilisé $(\Omega, \mathcal{A}, P)$.

*   **Définition :** $X$ est à densité s'il existe une fonction $f : \mathbb{R} \to \mathbb{R}$ positive, continue (sauf éventuellement en un nombre fini de points), telle que pour tout intervalle $[a, b]$ :
    $$P(a \leq X \leq b) = \int_a^b f(t) dt$$
    La fonction $f$ est appelée **densité de probabilité** de $X$. On a nécessairement $\int_{-\infty}^{+\infty} f(t) dt = 1$.
*   **Fonction de répartition :** $F_X(x) = P(X \leq x) = \int_{-\infty}^x f(t) dt$. $F_X$ est de classe $\mathcal{C}^1$ (sauf aux points de discontinuité de $f$) et $F_X'(x) = f(x)$ là où $f$ est continue.

### 3.2. Espérance et Variance
*   **Espérance :** Si l'intégrale converge absolument ($\int_{-\infty}^{+\infty} |t| f(t) dt < +\infty$), l'espérance de $X$ est :
    $$E[X] = \int_{-\infty}^{+\infty} t f(t) dt$$
*   **Théorème de transfert :** Si $g$ est une fonction continue (ou continue par morceaux) telle que $g(X)$ admet une espérance :
    $$E[g(X)] = \int_{-\infty}^{+\infty} g(t) f(t) dt$$
*   **Variance :** Si $X$ admet un moment d'ordre 2, sa variance est :
    $$V(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2$$
    L'écart-type est $\sigma(X) = \sqrt{V(X)}$.

### 3.3. Lois usuelles continues
1.  **Loi uniforme sur $[a, b]$ ($\mathcal{U}([a, b])$) :**
    $$f(t) = \frac{1}{b-a} \mathbb{1}_{[a, b]}(t)$$
    $$E[X] = \frac{a+b}{2}, \quad V(X) = \frac{(b-a)^2}{12}$$

2.  **Loi exponentielle de paramètre $\lambda > 0$ ($\mathcal{E}(\lambda)$) :**
    $$f(t) = \lambda e^{-\lambda t} \mathbb{1}_{[0, +\infty[}(t)$$
    $$E[X] = \frac{1}{\lambda}, \quad V(X) = \frac{1}{\lambda^2}$$

3.  **Loi normale (ou de Gauss) d'espérance $\mu$ et de variance $\sigma^2$ ($\mathcal{N}(\mu, \sigma^2)$) :**
    $$f(t) = \frac{1}{\sigma \sqrt{2\pi}} \exp\left( -\frac{(t-\mu)^2}{2\sigma^2} \right)$$
    $$E[X] = \mu, \quad V(X) = \sigma^2$$
    *Cas particulier :* Si $\mu = 0$ et $\sigma = 1$, la loi est centrée réduite ($\mathcal{N}(0,1)$), notée usuellement $\varphi(t) = \frac{1}{\sqrt{2\pi}}e^{-t^2/2}$. Si $X \sim \mathcal{N}(\mu, \sigma^2)$, alors $Y = \frac{X - \mu}{\sigma} \sim \mathcal{N}(0,1)$.