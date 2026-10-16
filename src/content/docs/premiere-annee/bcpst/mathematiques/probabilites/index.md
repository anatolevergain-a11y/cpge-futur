---
title: 'Cours : Probabilités'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Cours de Mathématiques : Probabilités (CPGE BCPST - 1ère année)

Ce document constitue une synthèse rigoureuse du cours de probabilités pour la classe de première année BCPST. L'accent est mis sur le vocabulaire ensembliste, la construction rigoureuse des espaces probabilisés, le conditionnement et l'étude des variables aléatoires (discrètes et à densité).

---

## 1. Espaces Probabilisés

### A. Vocabulaire des événements
Soit $\Omega$ un ensemble non vide, appelé **univers**. Ses éléments sont les **événements élémentaires** ou issues.

*   **Événement :** Partie de $\Omega$. L'ensemble des événements est noté $\mathcal{P}(\Omega)$ (ou plus généralement une tribu $\mathcal{A}$).
*   **Événement impossible :** $\emptyset$.
*   **Événement certain :** $\Omega$.
*   **Événement contraire de $A$ :** $A^c = \Omega \setminus A$.
*   **Incompatibilité :** $A$ et $B$ sont incompatibles si $A \cap B = \emptyset$.

### B. Espace probabilisé (axiomatique de Kolmogorov)
Une **probabilité** sur un univers $\Omega$ (muni d'une tribu $\mathcal{A}$) est une application $P : \mathcal{A} \to [0, 1$ vérifiant les axiomes suivants :
1.  **Valeur totale :** $P(\Omega) = 1$.
2.  **$\sigma$-additivité :** Pour toute famille (finie ou dénombrable) d'événements $(A_i)_{i \in I}$ deux à deux incompatibles ($A_i \cap A_j = \emptyset$ si $i \neq j$) :
    $$P\left(\bigcup_{i \in I} A_i\right) = \sum_{i \in I} P(A_i)$$

> **Propriétés immédiates :**
> *   $P(\emptyset) = 0$.
> *   Pour tout événement $A$, $P(A^c) = 1 - P(A)$.
> *   Si $A \subset B$, alors $P(A) \leq P(B)$ et $P(B \setminus A) = P(B) - P(A)$.
> *   **Formule du crible (Poincaré) pour deux événements :** 
>     $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

---

## 2. Probabilités Conditionnelles et Indépendance

### A. Conditionnement
> **Définition :** Soit $B$ un événement tel que $P(B) > 0$. Pour tout événement $A$, la **probabilité de $A$ sachant $B$** est définie par :
> $$P_B(A) = P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

> **Théorème (Formule des probabilités composées) :** 
> Si $P(A_1 \cap A_2 \cap \dots \cap A_{n-1}) > 0$, alors :
> $$P(A_1 \cap A_2 \cap \dots \cap A_n) = P(A_1) P(A_2 \mid A_1) P(A_3 \mid A_1 \cap A_2) \dots P(A_n \mid A_1 \cap \dots \cap A_{n-1})$$

### B. Systèmes complets et Formules fondamentales
> **Définition :** Une famille d'événements $(A_i)_{i \in I}$ (finie ou dénombrable) forme un **système complet d'événements** (SCE) si :
> 1. Les $A_i$ sont deux à deux incompatibles : $\forall i \neq j, A_i \cap A_j = \emptyset$.
> 2. Leur réunion est l'univers : $\bigcup_{i \in I} A_i = \Omega$.
> 3. $\forall i \in I, P(A_i) > 0$ (dans le cas général).

> **Théorème (Formule des probabilités totales) :** 
> Si $(A_i)_{i \in I}$ est un système complet d'événements, alors pour tout événement $B$ :
> $$P(B) = \sum_{i \in I} P(B \cap A_i) = \sum_{i \in I} P(A_i) P_As_i(B)$$

> **Théorème (Formule de Bayes) :** 
> Si $(A_i)_{i \in I}$ est un système complet d'événements et $B$ un événement de probabilité non nulle, alors pour tout $j \in I$ :
> $$P(A_j \mid B) = \frac{P(B \mid A_j)P(A_j)}{\sum_{i \in I} P(B \mid A_i)P(A_i)}$$

### C. Indépendance d'événements
> **Définition :** Deux événements $A$ et $B$ sont **indépendants** si :
> $$P(A \cap B) = P(A)P(B)$$
> *Attention :* Ne pas confondre incompatibilité ($A \cap B = \emptyset$) et indépendance ($P(A \cap B) = P(A)P(B)$). Si $P(A) > 0$ et $P(B) > 0$, deux événements incompatibles ne peuvent être indépendants.

---

## 3. Variables Aléatoires Discrètes (V.A.D.)

### A. Généralités
> **Définition :** Une variable aléatoire discrète $X$ est une application de $\Omega$ dans $\mathbb{R}$ telle que l'ensemble des valeurs prises, noté $X(\Omega)$, est fini ou dénombrable, et pour tout $x \in X(\Omega)$, $\{X = x\} = X^{-1}(\{x\})$ est un événement.

*   **Loi de probabilité :** Déterminée par l'ensemble des paires $\{(x, P(X=x))\}_{x \in X(\Omega)}$. On a nécessairement $\sum_{x \in X(\Omega)} P(X=x) = 1$.
*   **Fonction de répartition :** $F_X(t) = P(X \leq t) = \sum_{x \in X(\Omega), x \leq t} P(X=x)$.

### B. Espérance et Variance
> **Définition (Espérance) :** $X$ admet une espérance si la famille $(x P(X=x))_{x \in X(\Omega)}$ est **absolument sommable** (ce qui est toujours le cas si $X(\Omega)$ est fini). 
> $$E(X) = \sum_{x \in X(\Omega)} x P(X=x)$$

> **Définition (Variance et Écart-type) :** $X$ admet une variance si $X^2$ admet une espérance.
> $$V(X) = E\left[(X - E(X))^2\right] = E(X^2) - (E(X))^2$$
> L'écart-type est $\sigma(X) = \sqrt{V(X)}$.

*   **Linéarité de l'espérance :** Pour toutes v.a.d. $X$ et $Y$ admettant une espérance, et tous réels $\alpha, \beta$ :
    $$E(\alpha X + \beta Y) = \alpha E(X) + \beta E(Y)$$

### C. Lois usuelles discrètes
1.  **Loi certaine :** $P(X=c) = 1$. $E(X) = c$, $V(X) = 0$.
2.  **Loi de Bernoulli $\mathcal{B}(p)$ ($p \in ]0,1[$) :** $X(\Omega) = \{0, 1\}$, $P(X=1) = p$, $P(X=0) = 1-p$.
    *   $E(X) = p$, $V(X) = p(1-p)$.
3.  **Loi Binomiale $\mathcal{B}(n, p)$ ($n \in \mathbb{N}^*, p \in ]0,1[$) :** Somme de $n$ variables de Bernoulli indépendantes de paramètre $p$.
    *   $X(\Omega) = \{0, 1, \dots, n\}$.
    *   $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$.
    *   $E(X) = np$, $V(X) = np(1-p)$.
4.  **Loi de Poisson $\mathcal{mathcal}(\lambda)$ ($\lambda > 0$) :**
    *   $X(\Omega) = \mathbb{N}$.
    *   $P(X=k) = e^{-\lambda} \frac{\lambda^k}{k!}$.
    *   $E(X) = \lambda$, $V(X) = \lambda$.
5.  **Loi Géométrique $\mathcal{G}(p)$ ($p \in ]0,1[$) :** Modèle le temps d'attente du premier succès.
    *   $X(\Omega) = \mathbb{N}^*$.
    *   $P(X=k) = (1-p)^{k-1}p$.
    *   $E(X) = \frac{1}{p}$, $V(X) = \frac{1-p}{p^2}$.

---

## 4. Variables Aléatoires à Densité (V.A.C.)

### A. Définitions fondamentales
> **Définition :** Une variable aléatoire $X$ est dite **à densité** s'il existe une fonction $f : \mathbb{R} \to \mathbb{R}$, appelée **densité de probabilité**, positive, continue (ou au moins continue par morceaux), telle que pour tout intervalle $[a, b]$ :
> $$P(a \leq X \leq b) = \int_a^b f(t) dt$$

*   **Propriétés d'une densité :** 
    1. $\forall t \in \mathbb{R}, f(t) \geq 0$.
    2. $\int_{-\infty}^{+\infty} f(t) dt = 1$.
    3. Pour tout point $c \in \mathbb{R}$, $P(X=c) = 0$. Par conséquent, $P(a \leq X \leq b) = P(a < X < b)$.

> **Fonction de répartition :** $F_X(t) = P(X \leq t) = \int_{-\infty}^t f(u) du$. 
> $F_X$ est de classe $\mathcal{C}^1$ (sauf aux points de discontinuité de $f$) et $F_X'(t) = f(t)$ là où $f$ est continue.

### B. Espérance et Variance
> **Définition :** Soit $X$ une v.a. à densité de densité $f$.
> *   **Espérance :** $X$ admet une espérance si l'intégrale $\int_{-\infty}^{+\infty} t f(t) dt$ est **absolument convergente**.
>     $$E(X) = \int_{-\infty}^{+\infty} t f(t) dt$$
> *   **Variance :** $X$ admet une variance si $\int_{-\infty}^{+\infty} t^2 f(t) dt$ converge.
>     $$V(X) = \int_{-\infty}^{+\infty} (t - E(X))^2 f(t) dt = E(X^2) - (E(X))^2$$

### C. Lois usuelles à densité
1.  **Loi uniforme sur $[a, b]$ ($a < b$) :** 
    *   $f(t) = \frac{1}{b-a}$ si $t \in [a, b]$, $0$ sinon.
    *   $E(X) = \frac{a+b}{2}$, $V(X) = \frac{(b-a)^2}{12}$.
2.  **Loi exponentielle de paramètre $\lambda$ ($\lambda > 0$) :** 
    *   $f(t) = \lambda e^{-\lambda t}$ si $t \geq 0$, $0$ sinon.
    *   $E(X) = \frac{1}{\lambda}$, $V(X) = \frac{1}{\lambda^2}$.
    *   *Propriété d'absence de mémoire :* $\forall s, t \geq 0, P(X > s+t \mid X > s) = P(X > t)$.
3.  **Loi normale (ou de Gauss) $\mathcal{N}(\mu, \sigma^2)$ ($\mu \in \mathbb{R}, \sigma > 0$) :**
    *   $f(t) = \frac{1}{\sigma \sqrt{2\pi}} \exp\left(-\frac{(t-\mu)^2}{2\sigma^2}\right)$.
    *   $E(X) = \mu$, $V(X) = \sigma^2$.
    *   *Centrage-réduction :* Si $X \sim \mathcal{N}(\mu, \sigma^2)$, alors $Y = \frac{X-\mu}{\sigma} \sim \mathcal{N}(0, 1)$ (loi normale centrée réduite).

---

## 5. Couples et Vecteurs Aléatoires

### A. Cas Discret
*   **Loi conjointe :** $P(X=x, Y=y)$.
*   **Lois marginales :** $P(X=x) = \sum_{\text{y}} P(X=x, Y=y)$ et $P(Y=y) = \sum_{\text{x}} P(X=x, Y=y)$.
*   **Indépendance :** $X$ et $Y$ sont indépendantes si :
    $$\forall (x,y) \in X(\Omega) \times Y(\Omega), \quad P(X=x, Y=y) = P(X=x)P(Y=y)$$

### B. Covariance et Théorèmes Limites
> **Définition (Covariance) :** $\text{Cov}(X, Y) = E\left[(X - E(X))(Y - E(Y))\right] = E(XY) - E(X)E(Y)$.
> *   Si $X$ et $Y$ sont indépendantes, alors $\text{Cov}(X,Y) = 0$ (la réciproque est **fausse**).
> *   $V(X+Y) = V(X) + V(Y) + 2\text{Cov}(X,Y)$. Si $X$ et $Y$ sont indépendantes, $V(X+Y) = V(X) + V(Y)$ (relation de Bienaymé-Galatée).

> **Théorème (Inégalité de Bienaymé-Tchebychev) :** 
> Soit $X$ une variable aléatoire admettant une espérance $E(X)$ et une variance $V(X)$. Alors pour tout $\varepsilon > 0$ :
> $$P(|X - E(X)| \geq \varepsilon) \leq \frac{V(X)}{\varepsilon^2}$$

> **Théorème (Loi Faible des Grands Nombres) :** 
> Soit $(X_n)_{n \geq 1}$ une suite de variables aléatoires indépendantes, de même espérance $m$ et de même variance $V$ (finie). Posons $S_n = \sum_{k=1}^n X_k$. Alors pour tout $\varepsilon > 0$ :
> $$\lim_{n \to +\infty} P\left(\left|\frac{S_n}{n} - m\right| \geq \varepsilon\right) = 0$$

---

## 6. Méthodes et Pièges à Éviter

> ### ⚠️ Pièges classiques (Attention !)
> 1.  **Incompatibilité $\neq$ Indépendance :** Ne jamais confondre $A \cap B = \emptyset$ et $P(A \cap B) = P(A)P(B)$.
> 2.  **Somme de probabilités infinies :** Lors du calcul de l'espérance d'une v.a. infinie discrète, prouver l'absolue convergence (ou positivité) avant d'écrire la somme.
> 3.  **Densité :** Une densité de probabilité n'est **pas** une probabilité ! Elle peut être strictement supérieure à $1$ en un point (par exemple, la fonction indicatrice de $[0, 0.5]$ multipliée par $2$). Seule son intégrale sur $\mathbb{R}$ vaut $1$.
> 4.  **Réciprocque de l'indépendance pour la covariance :** Si $\text{Cov}(X,Y) = 0$, les variables sont dites *non corrélées*, mais cela n'implique pas l'indépendance (sauf en cas de couple gaussien).

> ### 🛠️ Méthodes incontournables
> *   **Calcul de la loi d'une somme :** Utiliser la formule des probabilités totales avec un système complet adapté (souvent lié à l'une des variables) ou le produit de convolution pour les densités.
> *   **Reconnaissance des lois usuelles :** Toujours guetter les structures binomiales (répétition d'épreuves identiques et indépendantes) ou de Poisson (comptage d'événements rares dans le temps/l'espace).
> *   **Utilisation du Théorème de transfert :** Pour calculer $E(g(X))$ sans chercher la loi de $g(X)$ :
>     *   Discret : $E(g(X)) = \sum_{\text{x}} g(x)P(X=x)$ (si converge).
>     *   Densité : $E(g(X)) = \int_{-\infty}^{+\infty} g(t)f(t)dt$ (si converge).