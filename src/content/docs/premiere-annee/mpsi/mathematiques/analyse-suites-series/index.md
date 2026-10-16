---
title: 'Cours : Suites numériques et réelles'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

### A. Définitions générales
Une **suite numérique** est une application $u$ définie d'une partie $I$ de $\mathbb{N}$ (le plus souvent $\mathbb{N}$ ou $\mathbb{N}_n_0$) à valeurs dans $\mathbb{K}$ (où $\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$). 
- Si $\mathbb{K} = \mathbb{R}$, la suite est dite **réelle**.
- Si $\mathbb{K} = \mathbb{C}$, la suite est dite **complexe**.

On note traditionnellement $(u_n)_{n \in I}$ ou simplement $(u_n)$. L'élément $u_n$ est le **terme général** de la suite.

### B. Convergence et bornitude
* **Suite bornée** : Une suite $(u_n)_{n \in \mathbb{N}} \in \mathbb{K}^\mathbb{N}$ est dite bornée s'il existe $M \in \mathbb{R}^+$ tel que :
  $$\forall n \in \mathbb{N}, \quad |u_n| \leq M$$

* **Convergence dans $\mathbb{R}$** : Soit $(u_n)$ une suite réelle et $l \in \mathbb{R}$. On dit que $(u_n)$ converge vers $l$ si :
  $$\forall \varepsilon > 0, \quad \exists N \in \mathbb{N}, \quad \forall n \in \mathbb{N}, \quad (n \geq N \implies |u_n - l| \leq \varepsilon)$$
  On note alors $\lim_{n \to +\infty} u_n = l$. Si la suite ne converge pas, elle est dite **divergente**.

* **Cas complexe** : Une suite complexe $(u_n) = (x_n + i y_n)$ converge vers $l = a + ib$ si et seulement si la suite réelle des parties réelles $(x_n)$ converge vers $a$ et la suite des parties imaginaires $(y_n)$ converge vers $b$.

### C. Propriétés topologiques de $\mathbb{R}$ utiles
* **Unicité de la limite** : Si une suite converge, sa limite est unique.
* **Toute suite convergente est bornée**. La réciproque est fausse (ex: $u_n = (-1)^n$).
* **Caractérisation séquentielle de la relation d'ordre** : Si $(u_n)$ et $(v_n)$ convergent vers $l$ et $l'$ et que $\forall n, u_n \leq v_n$, alors $l \leq l'$. *(Attention : l'inégalité stricte ne se conserve pas à la limite).*

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### A. Théorème de la limite monotone (TLM)
**Théorème** : Toute suite réelle croissante et majorée est convergente. De même, toute suite décroissante et minorée est convergente.

> **Démonstration (dans le cas d'une suite croissante et majorée)** :
> Soit $(u_n)_{n \in \mathbb{N}}$ une suite réelle croissante et majorée par $M$. 
> 1. Considérons l'ensemble des valeurs de la suite : $E = \{u_n \mid n \in \mathbb{N}\}$. 
> 2. L'ensemble $E$ est non vide (puisqu'il contient $u_0$) et majoré par $M$. 
> 3. Par la propriété de la borne supérieure (axiome de completeness de $\mathbb{R}$), $E$ admet une borne supérieure dans $\mathbb{R}$, que l'on note $l = \sup E$. Montrons que $\lim_{n \to +\5} u_n = l$.
> 4. Soit $\varepsilon > 0$. Par définition de la borne supérieure, $l - \varepsilon$ n'est pas un majorant de $E$. Il existe donc un entier $N \in \mathbb{N}$ tel que :
>    $$u_N > l - \varepsilon$$
> 5. La suite $(u_n)$ étant croissante, pour tout $n \geq N$, on a $u_n \geq u_N$. De plus, par définition de $l$ comme majorant, $u_n \leq l$. Ainsi, pour tout $n \geq N$ :
>    $$l - \varepsilon < u_N \leq u_n \leq l < l + \varepsilon \implies |u_n - l| < \varepsilon$$
> 6. La condition de convergence est donc vérifiée : $\lim_{n \to +\infty} u_n = l$. $\blacksquare$

### B. Théorème des suites adjacentes
**Définition** : Deux suites réelles $(u_n)$ et $(v_n)$ sont dites adjacentes si :
1. $(u_n)$ est croissante et $(v_n)$ est décroissante.
2. $\forall n \in \mathbb{N}, \quad u_n \leq v_n$.
3. $\lim_{n \to +\infty} (v_n - u_n) = 0$.

**Théorème** : Si $(u_n)$ et $(v_n)$ sont adjacentes, alors elles convergent vers une même limite commune $l$.

### C. Théorème de Bolzano-Weierstrass
**Théorème** : De toute suite bornée, on peut extraire une sous-suite convergente.

---

## 💡 3. Méthodes classiques de résolution

### A. Étude d'une suite récurrente explicite $u_{n+1} = f(u_n)$
1. **Domaine de définition et stabilité** : Déterminer l'ensemble $I$ tel que $f(I) \subset I$ et $u_0 \in I$.
2. **Monotonie** : Étudier le signe de $f(x) - x$ ou utiliser la monotonie de $f$ si elle est préservée par récurrence.
3. **Convergence** : 
   * Si $(u_n)$ est monotone et bornée, le TLM garantit la convergence vers une limite $l$.
   * Par continuité de $f$, la limite $l$ vérifie l'équation de point fixe : $f(l) = l$.
4. **Encadrement et taux d'accroissement** : Pour trouver la vitesse de convergence, on majore $|u_{n+1} - l| \le k |u_n - l|$ avec $k < 1$ (théorème des accroissements finis).

### B. Calcul des limites par encadrement
* **Théorème des gendarmes** : Si $v_n \leq u_n \leq w_n$ et $\lim v_n = \lim w_n = l$, alors $\lim u_n = l$.
* **Opérations algébriques sur les limites** : Utiliser les formes indéterminées avec précaution (factorisation par le terme prépondérant, quantité conjuguée, utilisation de $\ln(1+X) \sim X$, etc.).

### C. Suites arithmético-géométriques et linéaires d'ordre 2
* Pour $u_{n+1} = a u_n + b$ ($a \neq 1$), on détermine le point fixe $c = \frac{b}{1-a}$ et on pose $v_n = u_n - c$ qui est géométrique.
* Pour une récurrence linéaire d'ordre 2 : $u_{n+2} + a u_{n+1} + b u_n = 0$, on résout l'équation caractéristique rattachée : $r^2 + ar + b = 0$.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confusion entre convergence et monotonicité** : Une suite bornée n'est pas nécessairement convergente (ex : $u_n = (-1)^n$). Une suite non majorée tend vers $+\infty$ est **fausse** en général (penser à $u_n = n + (-1)^n \sin(n)$ ou à une suite qui oscille de plus en plus haut sans limite).
2. **Passage à la limite dans les inégalités strictes** : Si $u_n < v_n$ pour tout $n$, on a seulement $\lim u_n \leq \lim v_n$. L'inégalité stricte ne se conserve pas (ex : $u_n = 0$ et $v_n = \frac{1}{n}$).
3. **Oubli de la vérification de la stabilité** : Pour une suite définie par $u_{n+1} = f(u_n)$, affirmer que $l = f(l)$ sans avoir prouvé au préalable que la suite converge est une faute logique majeure. La convergence doit être établie *avant* d'injecter la limite dans l'équation.
4. **Mauvaise manipulation des équivalents** : **Interdit d'additionner des équivalents**. L'utilisation des relations de comparaison ($\sim, O, o$) ne s'effectue rigoureusement que par multiplication, division, ou sous certaines conditions par composition, mais jamais directement sur des sommes infinies sans précautions (divergence/convergence des séries associées).