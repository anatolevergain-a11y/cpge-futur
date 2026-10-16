---
title: 'Cours : Suites, dérivées et développements limités'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Suites, dérivées et développements limités
**Filière :** MP2I (1ère année) — **Matière :** Mathématiques

---

## 1. Rapports et compléments sur les suites numériques

### 1.1. Limites et inégalités
* **Passage à la limite :** Soient $(u_n)_{n \in \mathbb{N}}$ et $(v_n)_{n \in \mathbb{N}}$ deux suites convergentes telles que $u_n \le v_n$ à partir d'un certain rang. Alors $\lim_{n \to +\infty} u_n \le \lim_{n \to +\infty} v_n$.
* **Attention :** L'inégalité stricte $u_n < v_n$ ne se transmet pas à la limite (ex: $u_n = 0$ et $v_n = \frac{1}{n}$).

### 1.2. Suites adjacentes
**Définition :** Deux suites $(u_n)$ et $(v_n)$ sont dites adjacentes si :
1. L'une est croissante, l'autre est décroissante (par exemple, $(u_n)$ croissante et $(v_n)$ décroissante).
2. $\lim_{n \to +\infty} (v_n - u_n) = 0$.

**Théorème de convergence :** Deux suites adjacentes convergent et ont la même limite. De plus, pour tout $n, m \in \mathbb{N}$, on a $u_n \le v_m$.

### 1.3. Suites récurrentes $u_{n+1} = f(u_n)$
Soit $I an intervalle fermé et $f : I \to I$ une fonction continue. Si $(u_n)$ est définie par $u_0 \in I$ et $u_{n+1} = f(u_n)$ :
* Si $f$ admet un point fixe $\ell \in I$ et que $(u_n)$ converge vers $\ell$, alors par continuité de $f$, $f(\ell) = \ell$.
* **Théorème du point fixe (cas contractant) :** Si $f$ est $k$-lipschitzienne sur $I$ avec $k \in [0, 1[$, alors :
  1. $f$ admet un unique point fixe $\ell \in I$.
  2. Pour tout $u_0 \in I$, la suite $(u_n)$ converge vers $\ell$.
  3. **Estimations d'erreur :** 
     $$|u_n - \ell| \le \frac{k^n}{1-k} |u_1 - u_0| \quad \text{et} \quad |u_n - \ell| \le k^n |u_0 - \ell|$$

---

## 2. Dérivabilité et accroissements finis

### 2.1. Rapports de dérivée et classe $\mathcal{C}^k$
* Une fonction $f : I \to \mathbb{R}$ est de classe $\mathcal{C}^k$ sur $I$ ($k \in \mathbb{N}^*$) si elle est $k$ fois dérivable et si sa dérivée $k$-ième $f^{(k)}$ est continue sur $I$.
* Elle est de classe $\mathcal{C}^\infty$ si elle est de classe $\mathcal{C}^k$ pour tout $k \in \mathbb{N}$.

### 2.2. Théorèmes fondamentaux
* **Rolle :** Soit $f : [a, b] \to \mathbb{R}$ continue sur $[a, b]$, dérivable sur $% ]a, b[$ et telle que $f(a) = f(b)$. Alors il existe $c \in ]a, b[$ tel que $f'(c) = 0$.
* **Accroissements Finis (TAF) :** Soit $f : [a, b] \to \mathbb{R}$ continue sur $[a, b]$ et dérivable sur $% ]a, b[$. Il existe $c \in ]a, b[$ tel que :
  $$f(b) - f(a) = f'(c)(b - a)$$
* **Inégalité des Accroissements Finis (IAF) :** Si $f : I \to \mathbb{R}$ est dérivable et s'il existe $M \ge 0$ tel que pour tout $x \in I, |f'(x)| \le M$, alors :
  $$\forall (x, y) \in I^2, \quad |f(x) - f(y)| \le M |x - y|$$

---

## 3. Développements limités (DL)

### 3.1. Définitions
**Définition :** Soit $f : I \to \mathbb{R}$ une fonction, $x_0 \in I$ et $n \in \mathbb{N}$. On dit que $f$ admet un développement limité à l'ordre $n$ en $x_0$ (noté $\text{DL}_n(x_0)$) s'il existe des coefficients $a_0, a_1, \dots, a_n \in \mathbb{R}$ et une fonction $\epsilon : I \to \mathbb{R}$ tels que :
$$f(x) = \sum_{k=0}^n a_k (x - x_0)^k + (x - x_0)^n \epsilon(x) \quad \text{avec} \quad \lim_{x \to x_0} \epsilon(x) = 0$$

* **unicité :** Si un $\text{DL}_n(x_0)$ existe, alors il est unique.

### 3.2. Théorème de Taylor-Young
Si $f : I \to \mathbb{R}$ est de classe $\mathcal{C}^n$ sur un voisinage de $x_0$, alors $f$ admet un $\text{DL}_n(x_0)$ donné par :
$$f(x) = \sum_{k=0}^n \frac{f^{(k)}(x_0)}{k!} (x - x_0)^k + o\left((x - x_0)^n\right)$$

### 3.3. Développements limités usuels (en $0$)
À connaître par cœur pour tout calcul asymptotique :
1. $\displaystyle e^x = \sum_{k=0}^n \frac{x^k}{k!} + o(x^n) = 1 + x + \frac{x^2}{2!} + \dots + \frac{x^n}{n!} + o(x^n)$
2. $\displaystyle \cos(x) = \sum_{k=0}^n \frac{(-1)^k}{(2k)!} x^{2k} + o(x^{2n+1}) = 1 - \frac{x^2}{2} + \frac{x^4}{24} + o(x^{2v})$
3. $\displaystyle \sin(x) = \sum_{k=0}^n \frac{(-1)^k}{(2k+1)!} x^{2k+1} + o(x^{2n+2}) = x - \frac{x^3}{6} + o(x^3)$
4. $\displaystyle \ln(1+x) = \sum_{k=1}^n \frac{(-1)^{k-1}}{k} x^k + o(x^n) = x - \frac{x^2}{2} + \frac{x^3}{3} + o(x^3)$
5. $\displaystyle (1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2!} x^2 + \dots + \frac{\alpha(\alpha-1)\dots(\alpha-n+1)}{n!} x^n + o(x^n) \quad (\alpha \in \mathbb{R})$
6. $\displaystyle \frac{1}{1-x} = \sum_{k=0}^n x^k + o(x^n) = 1 + x + x^2 + \dots + x^n + o(x^n)$
7. $\displaystyle \frac{1}{1+x} = \sum_{k=0}^n (-1)^k x^k + o(x^n) = 1 - x + x^2 - x^3 + o(x^3)$
8. $\displaystyle \arctan(x) = \sum_{k=0}^n \frac{(-1)^k}{2k+1} x^{2k+1} + o(x^{2n+2}) = x - \frac{x^3}{3} + \frac{x^5}{5} + o(x^5)$

### 3.4. Opérations sur les développements limités
* **Somme et Produit :** On peut additionner et multiplier des DL à un même ordre en $x_0$, en conservant les termes significatifs (on tronque les $o$ à l'ordre $n$ minimal du produit).
* **Composition :** Si $f(x) = g(h(x))$, avec $\lim_{x \to x_0} h(x) = 0$, on peut substituer le $\text{DL}$ de $h$ dans celui de $g$, à condition de bien gérer l'ordre des $o$.
* **Intégration :** Si $f$ est continue sur un intervalle $I$ et admet un $\text{DL}_n(0)$ sous la forme $f(t) = \sum_{k=0}^n a_k t^k + o(t^n)$, alors sa primitive $F(x) = \int_0^x f(t)\,\mathrm{d}t$ admet un $\text{DL}_{n+1}(0)$ obtenu par intégration terme à terme :
  $$F(x) = \sum_{k=0}^n \frac{a_k}{k+1} x^{k+1} + o(x^{n+1})$$