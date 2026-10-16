---
title: 'Cours : Séries numériques et équations différentielles'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PT.'
---

## 📌 1. Définitions & Cadre d'étude

Le cadre d'etude est le corps des nombres reels $\mathbb{R}$ ou complexes $\mathbb{C}$. Soit $(u_n)_{n \in \mathbb{N}}$ une suite de elements de $\mathbb{K}$ ($\mathbb{R}$ ou $\mathbb{C}$).

*   **Definition 1.1 (Serie numerique et somme partielle) :** On appelle serie numerique de terme general $u_n$ le couple formé par la suite $(u_n)_{n \in \mathbb{N}}$ et la suite des sommes partielles $(S_n)_{n \in \mathbb{N}}$ definie pour tout $n \in \mathbb{N}$ par :
    $$S_n = \sum_{k=0}^{n} u_k$$
    On note cette serie $\sum u_n$.

*   **Definition 1.2 (Convergence et divergence) :** La serie $\sum u_n$ est dite *convergente* si la suite des sommes partielles $(S_n)_{n \in \mathbb{N}}$ converge vers une limite finie $S$ dans $\mathbb{K}$. Dans ce cas, $S$ est appele la *somme* de la serie et on note :
    $$S = \sum_{k=0}^{+\infty} u_k$$
    Si la suite $(S_n)$ diverge (vers l'infini ou sans limite), la serie est dite *divergente*.

*   **Definition 1.3 (Cadre des equations differentielles lineaires) :** Soit $I$ un intervalle de $\mathbb{R}$. On considere une equation differentielle lineaire d'ordre $1$ ou $2$ a coefficients continus. Pour un systeme lineaire ou une equation scalaire d'ordre $n$, le cadre d'etude est l'espace vectoriel des fonctions continues ou de classe $\mathcal{C}^k$ sur $I$ a valeurs dans $\mathbb{R}$ ou $\mathbb{C}$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

*   **Theoreme 2.1 (Condition necessaire de convergence) :**
    Si la serie $\sum u_n$ converge, alors la suite $(u_n)_{n \in \mathbb{N}}$ tend vers $0$ lorsque $n$ tend vers $+\infty$.
Demonstration: *
    Supposons que la serie $\sum u_n$ converge de somme $S$. Par definition, la suite $(S_n)$ converge vers $S$. Or, pour tout $n \ge 1$, on a la relation :
    $$u_n = S_n - S_{n-1}$$
    En passant a la limite lorsque $n$ tend vers $+\infty$, on obtient :
    $$\lim_{n \to +\infty} u_n = \lim_{n \to +\infty} S_n - \lim_{n \to +\infty} S_{n-1} = S - S = 0$$
    La condition est donc bien necessaire (mais non suffisante, comme le montre le contre-exemple de la serie harmonique). $\blacksquare$

*   **Theoreme 2.2 (Theoreme de Cauchy-Lipschitz lineaire - Cas global) :**
    Soit $I$ un intervalle de $\mathbb{R}$, $A : I \to \mathcal{M}_{n,n}(\mathbb{R})$ et $B : I \to \mathcal{M}_{n,1}(\mathbb{R})$ deux applications continues. Alors pour tout $t_0 \in I$ et pour tout vecteur initial $X_0 \in \mathcal{M}_{n,1}(\mathbb{R})$, le probleme de Cauchy :
    $$\begin{cases} X'(t) = A(t)X(t) + B(t) \\ X(t_0) = X_0 \end{cases}$$
    admet une unique solution maximale definie sur l'intervalle tout entier $I$.

---

## 💡 3. Méthodes de calcul & Algorithmes

*   **Methode 3.1 (Utilisation des series de Riemann et de Bertrand) :**
    *   **Riemann :** La serie $\sum \frac{1}{n^\alpha}$ converge si et seulement si $\alpha > 1$.
    *   **Bertrand :** La serie $\sum \frac{1}{n^\alpha (\ln n)^\beta}$ converge si ($\alpha > 1$) ou ($\alpha = 1$ et $\beta > 1$).

*   **Methode 3.2 (Resolution d'une Equation Differentialle Lineaire d'ordre 2 a coefficients constants) :**
    Soit l'equation $(E) : ay''(t) + by'(t) + cy(t) = f(t)$ avec $a \neq 0$.
    1. Resoudre l'equation homogene associee $(EH) : ay'' + by' + cy = 0$ en ecrivant l'equation caracteristique $ar^2 + br + c = 0$.
    2. Determiner une solution particuliere $y_p$ de $(E)$ (par la methode de superposition, variation des constantes ou par identification selon le second membre $f$).
    3. La solution generale est $y = y_{EH} + y_p$.

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Confondre condition necessaire et suffisante :** Affirmer qu'une serie converge sous pretexte que son terme general tend vers $0$ (erreur classique avec $\sum \frac{1}{n}$).
2.  **Oublier de preciser l'intervalle de validite :** Dans la resolution d'une equation differentielle lineaire, diviser par un coefficient $a(t)$ sans preciser que l'on se place sur un intervalle où $a(t) \neq 0$, ce qui compromet l'application du theoreme de Cauchy-Lipschitz.
3.  **Negliger les conditions aux limites :** Pour les series a termes de signes quelconques, appliquer des criteres de convergence destines uniquement aux series a termes positifs (comme la regle de d'Alembert ou le critere de comparaison).