---
title: 'Cours : Probabilités et variables aléatoires'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PC.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $(\Omega, \mathcal{A}, P)$ un espace probabilisé. En classe de seconde année de CPGE PC, le cadre d'étude se restreint principalement aux variables aléatoires discrètes et à densités.

*   **Espace probabilisé :** $\Omega$ est l'univers (ensemble des possibles), $\mathcal{A}$ une tribu (ou $\sigma$-algèbre) de parties de $\Omega$, et $P$ une probabilité, c'est-à-dire une application $P : \mathcal{A} \to [0, 1]$ vérifiant les axiomes de Kolmogorov :
    1. $P(\Omega) = 1$.
    2. Pour toute suite $(A_n)_{n \in \mathbb{N}}$ d'événements de $\mathcal{A}$ deux à deux incompatibles ($A_i \cap A_j = \emptyset$ pour $i \neq j$), on a :
       $$P\left(\bigcup_{n=0}^{+\infty} A_n\right) = \sum_{n=0}^{+\infty} P(A_n)$$

*   **Variable aléatoire discrète :** Une application $X : \Omega \to X(\Omega)$ est dite variable aléatoire discrète si $X(\Omega)$ est fini ou dénombrable, et si pour tout $x \in X(\Omega)$, l'événement $\{X = x\} = X^{-1}(\{x\})$ appartient à $\mathcal{A}$.
    *   **Loi de $X$ :** Déterminée par la donnée des $P(X = x)$ pour $x \in X(\Omega)$.
    *   **Espérance :** $X$ admet une espérance si la famille $(x P(X = x))_{x \in X(\Omega)}$ est sommable, et on pose :
       $$E(X) = \sum_{x \in X(\Omega)} x P(X = x)$$
    *   **Variance :** $X$ admet une variance si $X^2$ admet une espérance, et :
       $$V(X) = E\left((X - E(X))^2\right) = E(X^2) - (E(X))^2$$

*   **Variable aléatoire à densité :** Une application $X : \Omega \to \mathbb{R}$ est dite à densité s'il existe une fonction $f : \mathbb{R} \to \mathbb{R}$, positive, continue par morceaux, telle que pour tous réels $a$ et $b$ avec $a \le b$ :
    $$P(a \le X \le b) = \int_{a}^{b} f(t) \, \text{d}t$$
    La fonction $f$ est appelée **densité de probabilité** de $X$.
    *   **Espérance :** $X$ admet une espérance si l'intégrale $\int_{-\infty}^{+\infty} t f(t) \, \text{d}t$ est absolument convergente, et :
       $$E(X) = \int_{-\infty}^{+\infty} t f(t) \, \text{d}t$$
    *   **Variance :** $X$ admet une variance si $t \mapsto t^2 f(t)$ est intégrable sur $\mathbb{R}$, et :
       $$V(X) = \int_{-\infty}^{+\infty} (t - E(X))^2 f(t) \, \text{d}t = E(X^2) - (E(X))^2$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème : Positivité et croissance de l'espérance
Soient $X$ et $Y$ deux variables aléatoires admettant une espérance.
1. Si $X \ge 0$ presque sûrement, alors $E(X) \ge 0$.
2. Si $X \le Y$ presque sûrement, alors $E(X) \le E(Y)$.

**Démonstration (dans le cas discret) :**
Supposons $X \ge 0$ p.s. Par definition de l'esperance :
$$E(X) = \sum_{x \in X(\Omega)} x P(X = x)$$
Puisque $X(\Omega) \subset \mathbb{R}^+$, pour tout $x \in X(\Omega)$, $x \ge 0$. De plus, par definition d'une probabilite, $P(X = x) \ge 0$.
Chaque terme de la somme est donc positif ou nul. Par propriete de convergence des series a termes positifs (la sommation etant absolument convergente), on en deduit que $E(X) \ge 0$.
Pour le second point, on applique le premier resultat a la variable aléatoire $Y - X \ge 0$ p.s., par linearite de l'esperance :
$$E(Y - X) = E(Y) - E(X) \ge 0 \implies E(X) \le E(Y)$$
$\blacksquare$

### Théorème : Inégalité de Bienaymé-Tchebychev
Soit $X$ une variable aléatoire admettant un moment d'ordre 2 (donc une espérance $m$ et une variance $\sigma^2$). Pour tout $\varepsilon > 0$ :
$$P(|X - m| \ge \varepsilon) \le \frac{\sigma^2}{\varepsilon^2}$$

**Démonstration (cas à densité) :**
Par definition de la variance et en utilisant la relation de Chasles pour couper le domaine d'integration :
$$\sigma^2 = \int_{-\infty}^{+\infty} (t - m)^2 f(t) \, \text{d}t \ge \int_{|t - m| \ge \varepsilon} (t - m)^2 f(t) \, \text{d}t$$
Sur le domaine d'integration où $|t - m| \ge \varepsilon$, on a $(t - m)^2 \ge \varepsilon^2$. Par croissance de l'integrale :
$$\sigma^2 \ge \int_{|t - m| \ge \varepsilon} \varepsilon^2 f(t) \, \text{d}t = \varepsilon^2 \int_{|t - m| \ge \varepsilon} f(t) \, \text{d}t$$
Or, par definition de la probabilite de cet evenement :
$$\int_{|t - m| \ge \varepsilon} f(t) \, \text{d}t = P(|X - m| \ge \varepsilon)$$
D'où $\sigma^2 \ge \varepsilon^2 P(|X - m| \ge \varepsilon)$, ce qui donne l'inegalite voulue en divisant par $\varepsilon^2 > 0$.
$\blacksquare$

---

## 💡 3. Méthodes de calcul & Algorithmes

*   **Calcul de la loi d'une fonction de variable aléatoire $Y = g(X)$ :**
    *   *Méthode de la fonction de répartition (cas général) :* On calcule $F_Y(y) = P(Y \le y) = P(g(X) \le y)$ en résumant l'inéquation en fonction de $X$, puis on dérive si $Y$ est à densité pour obtenir $f_Y$.
    *   *Cas discret :* $Y(\Omega) = g(X(\Omega))$. Pour tout $y \in Y(\Omega)$ :
       $$P(Y = y) = \sum_{x \in X(\Omega), g(x) = y} P(X = x)$$

*   **Utilisation du théorème de transfert :**
    Si $X$ est une variable aléatoire et $h$ une fonction continue (ou continue par morceaux), alors $h(X)$ admet une espérance si et seulement si :
    *   *Cas discret :* $\sum_{x \in X(\Omega)} |h(x)| P(X = x) < +\infty$, et alors $E(h(X)) = \sum_{x \in X(\Omega)} h(x) P(X = x)$.
    *   *Cas à densité :* $\int_{-\infty}^{+\infty} |h(t)| f(t) \, \text{d}t < +\infty$, et alors $E(h(X)) = \int_{-\infty}^{+\infty} h(t) f(t) \, \text{d}t$.

*   **Sommation par isomorphisme ou par réarrangement (Loi de $X+Y$ pour $X, Y$ indépendantes) :**
    Si $X$ et $Y$ sont indépendantes et à valeurs dans $\mathbb{N}$ :
    $$P(X + Y = n) = \sum_{k=0}^{n} P(X = k) P(Y = n - k)$$

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Confondre existence de l'espérance et existence de la variance :** $E(X^2)$ doit exister pour que $V(X)$ existe. Dire "la variance existe donc l'espérance existe" est un automatisme sain (parce que $|X| \le 1 + X^2$ ou par convexité), mais l'inverse est faux (une loi de Cauchy a une espérance non définie mais on ne parle pas de variance ; une loi à densité en $1/|x|^3$ peut avoir une espérance mais pas de variance).
2.  **Oublier de vérifier la convergence absolue :** En CPGE, l'écriture $\sum x P(X=x)$ ou $\int t f(t) \, \text{d}t$ sans mentionner au préalable la convergence absolue (sommabilité ou intégrabilité) est une faute éliminatoire.
3.  **Indépendance vs. Incorrélation :** Deux variables aléatoires indépendantes et admettant des moments d'ordre 2 sont toujours non corrélées ($\text{Cov}(X,Y) = 0$). La réciproque est **fausse**.
4.  **Mauvaise manipulation des densités :** Une densité de probabilité n'est **pas** une probabilité : elle peut être strictement supérieure à $1$ en un point (par exemple, la densité d'une loi uniforme sur $[0, 1/2]$ vaut $2$ sur son support). Seule son intégrale sur $\mathbb{R}$ vaut $1$.
5.  **Passage à la limite sous le signe somme/intégrale :** Ne jamais permuter limite et espérance/somme/intégrale sans invoquer un théorème du programme (Convergence Dominée, Théorème de Fubini, ou convergence monotone).