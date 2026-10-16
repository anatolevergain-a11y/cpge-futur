---
title: 'Cours : Analyse asymptotique'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Cours de Mathématiques : Analyse asymptotique (PCSI)

Ce chapitre est fondamental en première année de CPGE. Il formalise la notion de "comparaison" de fonctions au voisinage d'un point, outil indispensable pour l'étude des suites, des séries, et des développements limités.

---

## 1. Relations de domination et de prépondérance

Soit $I$ un intervalle de $\mathbb{R}$, $a$ un élément de $\mathbb{R} \cup \{-\infty, +\infty\}$ (éventuellement une extrémité de $I$), et $f, g : I \to \mathbb{K}$ (avec $\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$). On suppose que $g$ ne s'annule pas sur un voisinage de $a$ (sauf éventuellement en $a$).

### Définitions

*   **Domination ($f = O(g)$ au voisinage de $a$) :**
    On dit que $f$ est dominée par $g$ au voisinage de $a$ s'il existe un voisinage $V$ de $a$ et une constante $M \ge 0$ tels que :
    $$\forall x \in V \cap I, \quad |f(x)| \le M |g(x)|$$
    On note $f = O(g)$ (ou $f(x) = O(g(x))$ quand $x \to a$).

*   **Prépondérance ($f = o(g)$ au voisinage de $a$) :**
    On dit que $f$ est négligeable devant $g$ au voisinage de $a$ si, pour tout $\varepsilon > 0$, il existe un voisinage $V$ de $a$ tel que :
    $$\forall x \in V \cap I, \quad |f(x)| \le \varepsilon |g(x)|$$
    On note $f = o(g)$ (ou $f(x) = o(g(x))$ quand $x \to a$).

*   **Équivalence ($f \sim g$ au voisinage de $a$) :**
    On dit que $f$ est équivalente à $g$ au voisinage de $a$ si :
    $$f(x) - g(x) = o(g(x)) \quad (\text{ou } f(x) = g(x)(1 + o(1)))$$
    Si $g$ ne s'annule pas sur un voisinage épointé de $a$, cela équivaut à :
    $$\lim_{x \to a} \frac{f(x)}{g(x)} = 1$$
    On note $f \sim g$.

---

## 2. Propriétés algébriques et transitivité

### Théorèmes fondamentaux

*   **Réflexivité et Transitivité :** 
    *   La relation $\sim$ est une relation d'équivalence sur l'ensemble des fonctions au voisinage de $a$.
    *   Les relations $O$ et $o$ sont transitives.
*   **Compatibilité avec les opérations :**
    *   **Produit :** Si $f_1 = O(g_1)$ et $f_2 = O(g_2)$, alors $f_1 f_2 = O(g_1 g_2)$. (Idem pour $o$).
    *   **Somme :** Si $f_1 = o(g)$ et $f_2 = o(g)$, alors $f_1 + f_2 = o(g)$.
    *   **Attention :** On ne peut *pas* additionner des équivalences de manière générale, ni composer des équivalences par n'importe quelle fonction.

---

## 3. Développements limités (DL)

### Définition
Soit $f : I \to \mathbb{R}$ et $n \in \mathbb{N}$. On dit que $f$ admet un développement limité à l'ordre $n$ en $0$ (noté $\text{DL}_n(0)$) s'il existe des coefficients $a_0, a_1, \dots, a_n \in \mathbb{R}$ et une fonction $\varepsilon$ telle que, au voisinage de $0$ :
$$f(x) = a_0 + a_1 x + a_2 x^2 + \dots + a_n x^n + x^n \varepsilon(x) \quad \text{avec } \lim_{x \to 0} \varepsilon(x) = 0$$
Que l'on écrit aussi :
$$f(x) = \sum_{k=0}^{n} a_k x^k + o(x^n)$$

### Théorème de Taylor-Young
Si $f$ est de classe $\mathcal{C}^n$ sur un voisinage de $0$, alors $f$ admet un $\text{DL}_n(0)$ donné par :
$$f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(0)}{k!} x^k + o(x^n)$$

### Formulaires usuels à connaître par cœur (en $0$)
*   $\displaystyle e^x = 1 + x + \frac{x^2}{2!} + \dots + \frac{x^n}{n!} + o(x^n)$
*   $\displaystyle \ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} + \dots + (-1)^{n-1}\frac{x^n}{n} + o(x^n)$
*   $\displaystyle \frac{1}{1-x} = 1 + x + x^2 + \dots + x^n + o(x^n)$
*   $\displaystyle \frac{1}{1+x} = 1 - x + x^2 - \dots + (-1)^n x^n + o(x^n)$
*   $\displaystyle \sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} + \dots + (-1)^p \frac{x^{2p+1}}{(2p+1)!} + o(x^{2p+2})$
*   $\displaystyle \cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} + \dots + (-1)^p \frac{x^{2p}}{(2p)!} + o(x^{2p+1})$
*   $\displaystyle (1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2!} x^2 + \dots + \frac{\alpha(\alpha-1)\dots(\alpha-n+1)}{n!} x^n + o(x^n)$ (pour $\alpha \in \mathbb{R}$)

---

## 4. Méthodes et Savoir-faire

*   **Méthode 1 : Obtenir un équivalent par croissances comparées ou factorisation du terme prépondérant.**
    *   *Exemple :* Pour $P(x) = a_p x^p + \dots + a_0$ avec $a_p \neq 0$, au voisinage de $+\infty$, $P(x) \sim a_p x^p$.
*   **Méthode 2 : Utilisation des DL pour lever une indétermination (type $\frac{0}{0}$ ou $\infty - \infty$).**
    *   Pousser le développement à l'ordre suffisant (le plus petit ordre non nul où les termes se simplifient).
*   **Méthode 3 : Intégration des relations de comparaison (Lemme de Cesàro / Intégration des équivalents).**
    *   Sous certaines hypothèses de positivité et d'intégrabilité, on peut intégrer des équivalents.

---

## 5. Pièges à éviter (Attention !)

1.  **Somme d'équivalents :** Il est **strictement interdit** d'additionner des équivalents. 
    *   *Contre-exemple classique :* $f(x) = x + x^2 \sim x$ et $g(x) = -x + x^3 \sim -x$ en $0$. Cependant, $f(x) + g(x) = x^2 + x^3 \sim x^2 \neq 0$.
2.  **Passage à l'exponentielle :** On ne peut pas composer une équivalence par l'exponentielle en général (sauf si $f(x) - g(x) \to 0$, ce qui est plus fort que $f \sim g$).
3.  **Négligeabilité et limites :** Écrire $f = o(1)$ en $a$ signifie exactement que $\lim_{x \to a} f(x) = 0$. C'est un moyen de rédaction très élégant.
4.  **Ordre du DL :** Ne jamais garder un $o(x^n)$ si l'on effectue des multiplications par des termes en $x^k$ qu'on pourrait développer davantage, ou attention à tronquer aux bons ordres lors des divisions.