---
title: 'Cours : Probabilités et Statistiques'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Probabilités et Statistiques (CPGE BCPST 1)

Cette fiche s'adresse aux étudiants de première année en BCPST. La rigueur dans la manipulation des ensembles, des tribus et des limites de suites d'événements est ici exigée, en particulier pour aborder sereinement les théorèmes limites au second semestre.

---

## I. Espaces Probabilisés

### 1. Vocabulaire des événements
Soit $\Omega$ un ensemble non vide, appelé **univers**. Ses éléments sont les **issues** ou **événements élémentaires**.
*   Un **événement** est une partie de $\Omega$ (un élément de $\mathcal{P}(\Omega)$).
*   L'événement certain est $\Omega$, l'événement impossible est $\emptyset$.
*   Deux événements $A$ et $B$ sont **incompatibles** (ou disjoints) si $A \cap B = \emptyset$.
*   Un **système complet d'événements (SCE)** est une famille finie ou dénombrable d'événements $(A_i)_{i \in I}$ telle que :
    1. $\forall i \in I, A_i \neq \emptyset$
    2. $\forall (i, j) \in I^2, i \neq j \implies A_i \cap A_j = \emptyset$ (incompatibilité 2 à 2)
    3. $\bigcup_{i \in I} A_i = \Omega$ (couvre l'univers)

### 2. Tribu (ou $\sigma$-algèbre)
En BCPST, lorsque l'univers $\Omega$ est infini (dénombrable ou non), on ne peut pas toujours attribuer une probabilité à *toutes* les parties de $\Omega$. On munit donc $\Omega$ d'une **tribu** $\mathcal{A}$.

> **Définition (Tribu) :**
> Une partie $\mathcal{A}$ de $\mathcal{P}(\Omega)$ est une tribu sur $\Omega$ si :
> 1. $\Omega \in \mathcal{A}$
> 2. $\mathcal{A}$ est stable par passage au complémentaire : $\forall A \in \mathcal{A}, \bar{A} \in \mathcal{A}$.
> 3. $\mathcal{A}$ est stable par union dénombrable : Pour toute suite $(A_n)_{n \in \mathbb{N}}$ d'éléments de $\mathcal{A}$, $\bigcup_{n=0}^{+\infty} A_n \in \mathcal{A}$.
Remarque: * Par les lois de De Morgan, une tribu est également stable par intersection dénombrable.

### 3. Axiomatique de Kolmogorov
> **Définition (Probabilité) :**
> Soit $\Omega$ un ensemble muni d'une tribu $\mathcal{A}$. Une application $P : \mathcal{A} \to [0, 1]$ est une **probabilité** si :
> 1. $P(\Omega) = 1$
> 2. **$\sigma$-additivité :** Pour toute suite $(A_n)_{n \in \mathbb{N}}$ d'événements de $\mathcal{A}$ **deux à deux incompatibles** :
>    $$P\left( \bigcup_{n=0}^{+\infty} A_n \right) = \sum_{n=0}^{+\infty} P(A_n)$$

Le triplet $(\Omega, \mathcal{A}, P)$ est appelé un **espace probabilisé**.

> **Théorème (Propriétés fondamentales) :**
> Soit $(\Omega, \mathcal{A}, P)$ un espace probabilisé.
> *   $P(\emptyset) = 0$
> *   **Additivité finie :** Si $A_1, \dots, A_n$ sont deux à deux incompatibles, $P\left(\bigcup_{i=1}^n A_i\right) = \sum_{i=1}^n P(A_i)$.
> *   **Complémentaire :** Pour tout $A \in \mathcal{A}$, $P(\bar{A}) = 1 - P(A)$.
> *   **Croissance :** Si $A \subset B$, alors $P(A) \leq P(B)$ et $P(B \setminus A) = P(B) - P(A)$.
> *   **Inclusion-Exclusion (cas $n=2$) :** $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
> *   **Sous-additivité (Inégalité de Boole) :** Pour toute suite $(A_n)_{n \in \mathbb{N}}$ d'événements :
>     $$P\left( \bigcup_{n=0}^{+\infty} A_n \right) \leq \sum_{n=0}^{+\infty} P(A_n)$$

---

## II. Probabilités Conditionnelles

### 1. Définition et formule des probabilités composées
> **Définition :**
> Soit $B$ un événement tel que $P(B) > 0$. Pour tout événement $A$, la **probabilité de $A$ sachant $B$** est définie par :
> $$P_B(A) = P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

> **Théorème (Formule des probabilités composées) :**
> Si $A_1, A_2, \dots, A_n$ sont des événements tels que $P(A_1 \cap A_2 \cap \dots \cap A_{n-1}) > 0$, alors :
> $$P(A_1 \cap A_2 \cap \dots \cap A_n) = P(A_1) P_{A_1}(A_2) P_{A_1 \cap A_2}(A_3) \dots P_{A_1 \cap \dots \cap A_{n-1}}(A_n)$$

### 2. Formule des probabilités totales et Bayes
> **Théorème (Formule des probabilités totales) :**
> Soit $(A_i)_{i \in I}$ un système complet d'événements tel que pour tout $i \in I$, $P(A_i) > 0$. Alors, pour tout événement $B$ :
> $$P(B) = \sum_{i \in I} P(A_i \cap B) = \sum_{i \in I} P(A_i) P_{A_i}(B)$$

> **Théorème (Formule de Bayes) :**
> Sous les mêmes hypothèses, si de plus $P(B) > 0$, alors pour tout $j \in I$ :
> $$P_B(A_j) = \frac{P(A_j \cap B)}{P(B)} = \frac{P(A_j) P_{A_j}(B)}{\sum_{i \in I} P(A_i) P_{A_i}(B)}$$
> *(Interprétation biologique classique : calcul de la probabilité d'avoir la maladie sachant le test positif).*

### 3. Indépendance
> **Définition (Indépendance de deux événements) :**
> Deux événements $A$ et $B$ sont **indépendants** si $P(A \cap B) = P(A)P(B)$.
> *Si $P(B) > 0$, cela équivaut à $P_B(A) = P(A)$.*

> **Définition (Indépendance mutuelle) :**
> Une famille d'événements $(A_i)_{i \in I}$ est dite mutuellement indépendante si pour toute partie **finie** $J \subset I$ :
> $$P\left( \bigcap_{j \in J} A_j \right) = \prod_{j \in J} P(A_j)$$

---

## III. Variables Aléatoires Discrètes (V.A.D.)

### 1. Généralités
> **Définition :**
> Soit $(\Omega, \mathcal{A}, P)$ un espace probabilisé. Une **variable aléatoire discrète** $X$ est une application de $\Omega$ dans $\mathbb{R}$ telle que :
> 1. $X(\Omega)$ est un sous-ensemble fini ou dénombrable de $\mathbb{R}$.
> 2. Pour tout $x \in X(\Omega)$, l'événement $[X = x] = X^{-1}(\{x\}) = \{\omega \in \Omega \mid X(\omega) = x\}$ appartient à $\mathcal{A}$.

*   La **loi** d'une V.A.D. $X$ est définie par la donnée des $P(X = x)$ pour $x \in X(\Omega)$. On a $\sum_{x \in X(\Omega)} P(X = x) = 1$.

### 2. Espérance et Variance
> **Définition (Espérance) :**
> Soit $X$ une V.A.D. On dit que $X$ admet une espérance (ou est intégrable) si la famille $(x P(X = x))_{x \in X(\Omega)}$ est **absolument sommable**, c'est-à-dire si :
> $$\sum_{x \in X(\Omega)} |x| P(X = x) < +\infty$$
> Dans ce cas, l'espérance de $X$ est :
> $$E(X) = \sum_{x \in X(\Omega)} x P(X = x)$$

> **Théorème (Théorème de transfert) :**
> Soit $X$ une V.A.D. et $g : X(\Omega) \to \mathbb{R}$ une fonction. La variable aléatoire $g(X)$ admet une espérance si et seulement si :
> $$\sum_{x \in X(\Omega)} |g(x)| P(X = x) < +\infty$$
> Le cas échéant :
> $$E(g(X)) = \sum_{x \in X(\Omega)} g(x) P(X = x)$$

> **Définition (Variance et Écart-type) :**
> Si $X$ admet un moment d'ordre 2 (i.e., $E(X^2) < +\infty$), alors $X$ admet une variance, définie par :
> $$V(X) = E\left((X - E(X))^2\right) = E(X^2) - (E(X))^2 \geq 0$$
> L'**écart-type** est $\sigma(X) = \sqrt{V(X)}$.

### 3. Lois usuelles discrètes
| Loi | Notation | Support $X(\Omega)$ | Probabilité $P(X=k)$ | Espérance $E(X)$ | Variance $V(X)$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Incertaine / Dirac** | $\mathcal{C}(c)$ | $\{c\}$ | $1$ si $k=c$ | $c$ | $0$ |
| **Bernoulli** | $\mathcal{mathcal{B}}(p)$ | $\{0, 1\}$ | $P(X=1)=p, P(X=0)=1-p$ | $p$ | $p(1-p)$ |
| **Binomiale** | $\mathcal{B}(n, p)$ | $\llbracket 0, n \rrbracket$ | $\binom{n}{k} p^k (1-p)^{n-k}$ | $np$ | $np(1-p)$ |
| **Géométrique** | $\mathcal{G}(p)$ | $\mathbb{N}^*$ | $(1-p)^{k-1} p$ | $\frac{1}{p}$ | $\frac{1-p}{p^2}$ |
| **Poisson** | $\mathcal{P}(\lambda)$ | $\mathbb{N}$ | $e^{-\lambda} \frac{\lambda^k}{k!}$ | $\lambda$ | $\lambda$ |

---

## IV. Couples de Variables Aléatoires Discrètes

### 1. Lois conjointes et marginales
Soit $(X, Y)$ un couple de V.A.D. défini sur $(\Omega, \mathcal{A}, P)$.
*   **Loi conjointe :** Définie par les $P(X = x, Y = y)$ pour $(x,y) \in X(\Omega) \times Y(\Omega)$.
*   **Lois marginales :** Par la formule des probabilités totales :
    $$P(X = x) = \sum_{y \in Y(\Omega)} P(X = x, Y = y)$$

### 2. Covariance et Indépendance
> **Définition (Covariance) :**
> Si $X$ et $Y$ admettent un moment d'ordre 2, leur covariance est :
> $$\text{Cov}(X, Y) = E\left( (X - E(X))(Y - E(Y)) \right) = E(XY) - E(X)E(Y)$$

*   **Propriété :** $X$ et $Y$ sont **indépendantes** si $\forall (x,y) \in X(\Omega) \times Y(\Omega)$, $P(X=x, Y=y) = P(X=x)P(Y=y)$.
*   Si $X$ et $Y$ sont indépendantes et admettent des moments d'ordre 2, alors $\text{Cov}(X, Y) = 0$ (la réciproque est **fausse**).

---

## V. Statistiques Inférentielles et Théorèmes Limites

### 1. Inégalités fondamentales
> **Théorème (Inégalité de Markov) :**
> Soit $X$ une V.A.D. positive ($P(X \geq 0) = 1$) admettant une espérance. Alors :
> $$\forall a > 0, \quad P(X \geq a) \leq \frac{E(X)}{a}$$

> **Théorème (Inégalité de Bienaymé-Tchebychev) :**
> Soit $X$ une V.A.D. admettant une variance $V(X)$. Alors :
> $$\forall \varepsilon > 0, \quad P(|X - E(X)| \geq \varepsilon) \leq \frac{V(X)}{\varepsilon^2}$$

### 2. Convergence et Lois des grands nombres
> **Théorème (Loi Faible des Grands Nombres - LFGN) :**
> Soit $(X_n)_{n \in \mathbb{N}^*}$ une suite de V.A.D. **indépendantes**, de même espérance $\mu$ et de même variance $\sigma^2$. En posant $S_n = \sum_{i=1}^n X_i$, on a :
> $$\forall \varepsilon > 0, \quad \lim_{n \to +\infty} P\left( \left| \frac{S_n}{n} - \mu \right| \ge \varepsilon \right) = 0$$

### 3. Théorème de la Limite Centrale (TLC)
C'est l'un des théorèmes les plus puissants en biologie/statistiques (justifiant l'omniprésence de la loi normale).

> **Théorème (TLC - Moivre-Laplace / Lindeberg-Lévy restreint) :**
> Soit $(X_n)_{n \in \mathbb{N}^*}$ une suite de V.A.D. indépendantes, de même loi, d'espérance $\mu$ et de variance $\sigma^2 > 0$.
> Soit $S_n = \sum_{i=1}^n X_i$ et $X_n^* = \frac{S_n - n\mu}{\sigma \sqrt{n}}$ la variable centrée réduite associée.
> Alors, la fonction de répartition de $X_n^*$ converge vers celle d'une loi normale centrée réduite $\mathcal{N}(0, 1)$ :
> $$\forall (a, b) \in \mathbb{R}^2, a \le b, \quad \lim_{n \to +\infty} P\left( a \le \frac{S_n - n\mu}{\sigma \sqrt{n}} \le b \right) = \int_a^b \frac{1}{\sqrt{2\pi}} e^{-t^2/2} dt$$

---

## Méthodes & Pièges à Éviter

1.  **Piège classique avec les tribus :** Ne jamais confondre $P(A \cap B)$ (probabilité de l'intersection de deux événements) et $P(A)P(B)$ (qui n'est vrai que si $A$ et $B$ sont **indépendants** !).
2.  **Calculs d'espérances :** Pour montrer qu'une espérance existe, montrez d'abord l'absolue convergence de la série (utilisez les équivalents ou le critère de Rieman/D'Alembert), surtout pour les lois à support infini comme Poisson ou Géométrique.
3.  **Indépendance vs Incompatibilité :**
    *   *Incompatibles* ($A \cap B = \emptyset$) avec $P(A) > 0$ et $P(B) > 0 \implies$ **Jamais** indépendants (car $P(A \cap B) = 0 \neq P(A)P(B)$).
4.  **Rédaction du TLC :** Pensez toujours à bien *centrer et réduire* votre variable avant d'appliquer le Théorème de la Limite Centrale dans un problème d'approximation par la loi normale.