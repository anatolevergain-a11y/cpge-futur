---
title: 'Cours : Dénombrement et Probabilités'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Cours de Mathématiques - MPSI
## Chapitre : Dénombrement et Probabilités

---

## I. Dénombrement

Le dénombrement consiste à évaluer le cardinal d'ensembles finis. C'est le socle fondamental du calcul probabiliste discret.

### 1. Principes fondamentaux

#### Proposition (Principe des parties disjointes - Addition)
Soient $A$ et $B$ deux ensembles finis disjoints ($A \cap B = \emptyset$). Alors :
$$\text{card}(A \cup B) = \text{card}(A) + \text{card}(B)$$
*Génénalisation :* Si $(A_i)_{1 \le i \le n}$ est une famille d'ensembles finis deux à deux disjoints, alors $\text{card}\left(\bigcup_{i=1}^n A_i\right) = \sum_{i=1}^n \text{card}(A_i)$.

#### Proposition (Principe cartésien - Multiplication)
Soient $A$ et $B$ deux ensembles finis. Alors :
$$\text{card}(A \times B) = \text{card}(A) \times \text{card}(B)$$

---

### 2. Arrangements et Combinaisons

Soit $E$ un ensemble fini de cardinal $n$ ($n \in \mathbb{N}^*$), et soit $k \in \mathbb{N}$.

*   **Arrangements avec répétition :** 
    Nombre de $k$-uplets d'éléments de $E$ : $n^k$.
*   **Arrangements sans répétition ($k \le n$) :** 
    Nombre de $k$-uplets d'éléments *distincts* de $E$ (ou $k$-arrangements) :
    $$A_n^k = n(n-1)\dots(n-k+1) = \frac{n!}{(n-k)!}$$
*   **Permutations ($k = n$) :** 
    Cas particulier des arrangements sans répétition : $n!$.
*   **Combinaisons ($k \le n$) :** 
    Nombre de parties de $E$ à $k$ éléments :
    $$\binom{n}{k} = \frac{A_n^k}{k!} = \frac{n!}{k!(n-k)!}$$
    Par convention, si $k > n$ ou $k < 0$, $\binom{n}{k} = 0$.

---

### 3. Propriétés fondamentales des coefficients binomiaux

#### Théorème (Formules de symétrie et de Pascal)
1. **Symétrie :** Pour tout $0 \le k \le n$, 
   $$\binom{n}{k} = \binom{n}{n-k}$$
2. **Relation de Pascal :** Pour tout $1 \le k \le n$, 
   $$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$$
3. **Formule du binôme de Newton :** Pour tous $a, b \in \mathbb{C}$ (ou dans un anneau commutatif) et tout $n \in \mathbb{N}$ :
   $$(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^k b^{n-k}$$

---

## II. Espaces Probabilisés Discrets

### 1. Vocabulaire des événements

*   **Univers ($\Omega$) :** Ensemble des issues possibles d'une expérience aléatoire.
*   **Événement :** Partie de $\Omega$. L'ensemble des événements est noté $\mathcal{P}(\Omega)$ (dans le cas discret).
*   **Système complet d'événements (SCE) :** Famille $(A_i)_{i \in I}$ d'événements telle que $A_i \cap A_j = \emptyset$ pour $i \neq j$ et $\bigcup_{i \in I} A_i = \Omega$.

---

### 2. Axiomatique de Kolmogorov

#### Définition
Une **probabilité** sur un univers (au au plus dénombrable) $\Omega$ est une application $\mathbb{P} : \mathcal{P}(\Omega) \to [0,1]$ telle que :
1. $\mathbb{P}(\Omega) = 1$.
2. **$\sigma$-additivité :** Pour toute famille $(A_n)_{n \in \mathbb{N}}$ d'événements deux à deux disjoints, 
   $$\mathbb{P}\left(\bigcup_{n=0}^{+\infty} A_n\right) = \sum_{n=0}^{+\infty} \mathbb{P}(A_n)$$

#### Propriétés immédiates
*   $\mathbb{P}(\emptyset) = 0$.
*   Pour tout événement $A$, $\mathbb{P}(\bar{A}) = 1 - \mathbb{P}(A)$.
*   Si $A \subset B$, alors $\mathbb{P}(A) \le \mathbb{P}(B)$ (croissance).
*   **Formule de Poincaré (cas $n=2$) :** $\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)$.

---

### 3. Probabilités conditionnelles et Indépendance

#### Définition
Soit $B$ un événement tel que $\mathbb{P}(B) > 0$. La probabilité conditionnelle sachant $B$ est l'application $\mathbb{P}(\cdot \mid B)$ définie sur $\mathcal{P}(\Omega)$ par :
$$\mathbb{P}(A \mid B) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)}$$

#### Théorème (Formule des probabilités composées)
Si $A_1, A_2, \dots, A_n$ sont des événements tels que $\mathbb{P}(A_1 \cap \dots \cap A_{n-1}) > 0$, alors :
$$\mathbb{P}(A_1 \cap A_2 \cap \dots \cap A_n) = \mathbb{P}(A_1)\mathbb{P}(A_2 \mid A_1)\mathbb{P}(A_3 \mid A_1 \cap A_2)\dots \mathbb{P}(A_n \mid A_1 \cap \dots \cap A_{n-1})$$

#### Théorème (Formule des probabilités totales)
Soit $(A_i)_{i \in I}$ un système complet d'événements tel que pour tout $i$, $\mathbb{P}(A_i) > 0$. Alors, pour tout événement $B$ :
$$\mathbb{P}(B) = \sum_{i \in I} \mathbb{P}(B \mid A_i)\mathbb{P}(A_i)$$

#### Théorème (Formule de Bayes)
Sous les mêmes hypothèses, si $\mathbb{P}(B) > 0$, pour tout $j \in I$ :
$$\mathbb{P}(A_j \mid B) = \frac{\mathbb{P}(B \mid A_j)\mathbb{P}(A_j)}{\sum_{i \in I} \mathbb{P}(B \mid A_i)\mathbb{P}(A_i)}$$

#### Définition (Indépendance de deux événements)
Deux événements $A$ et $B$ sont dits **indépendants** si :
$$\mathbb{P}(A \cap B) = \mathbb{P}(A)\mathbb{P}(B)$$
*(Attention : si $\mathbb{P}(B) > 0$, cela équivaut à $\mathbb{P}(A \mid B) = \mathbb{P}(A)$).*

---

## III. Variables Aléatoires Discrètes

### 1. Généralités

#### Définition
Une **variable aléatoire discrète** $X$ sur $(\Omega, \mathbb{P})$ est une application de $\Omega$ dans $\mathbb{R}$ telle que $X(\Omega)$ est fini ou dénombrable, et pour tout $x \in \mathbb{R}$, $\{X = x\} = X^{-1}(\{x\}) \in \mathcal{P}(\Omega)$.

*   **Loi de $X$ :** Déterminée par l'ensemble des valeurs $\mathbb{P}(X = x)$ pour $x \in X(\Omega)$.
*   **Fonction de répartition :** $F_X(t) = \mathbb{P}(X \le t) = \sum_{x \le t, x \in X(\Omega)} \mathbb{P}(X=x)$.

---

### 2. Espérance et Variance

#### Définition (Espérance)
Une variable aléatoire $X$ (discrète) est dite **d'espérance finie** (ou intégrable) si la famille $(x\mathbb{P}(X=x))_{x \in X(\Omega)}$ est sommable, c'est-à-dire si :
$$\sum_{x \in X(\Omega)} |x| \mathbb{P}(X=x) < +\infty$$
Dans ce cas, l'espérance de $X$ est :
$$\mathbb{E}(X) = \sum_{x \in X(\Omega)} x \mathbb{P}(X=x)$$

#### Propriétés de l'espérance
*   **Linéarité :** Si $X$ et $Y$ sont d'espérance finie, alors pour tous $a, b \in \mathbb{R}$, $aX + bY$ est d'espérance finie et :
    $$\mathbb{E}(aX + bY) = a\mathbb{E}(X) + b\mathbb{E}(Y)$$
*   **Croissance :** Si $X \le Y$ presque sûrement, alors $\mathbb{E}(X) \le \mathbb{E}(Y)$.

#### Définition (Variance et Écart-type)
Si $X$ est de carré integrable ($\mathbb{E}(X^2) < +\infty$), on définit sa **variance** par :
$$V(X) = \mathbb{E}\left((X - \mathbb{E}(X))^2\right) = \mathbb{E}(X^2) - (\mathbb{E}(X))^2$$
L'**écart-type** est $\sigma(X) = \sqrt{V(X)}$.

---

### 3. Lois usuelles

*   **Loi de Bernoulli $\mathcal{mathcal{B}}(p)$ ($p \in [0,1]$) :** 
    $X(\Omega) = \{0, 1\}$, $\mathbb{P}(X=1) = p$, $\mathbb{P}(X=0) = 1-p$.
    $\mathbb{E}(X) = p$, $V(X) = p(1-p)$.
*   **Loi Binomiale $\mathcal{B}(n, p)$ ($n \in \mathbb{N}, p \in [0,1]$) :** 
    Somme de $n$ variables de Bernoulli indépendantes de paramètre $p$.
    $X(\Omega) = \llbracket 0, n \rrbracket$, $\mathbb{P}(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$.
    $\mathbb{E}(X) = np$, $V(X) = np(1-p)$.
*   **Loi Géométrique $\mathcal{G}(p)$ ($p \in ]0,1]$) :** 
    Modèle du temps d'attente du premier succès.
    $X(\Omega) = \mathbb{N}^*$, $\mathbb{P}(X=k) = (1-p)^{k-1}p$.
    $\mathbb{E}(X) = \frac{1}{p}$, $V(X) = \frac{1-p}{p^2}$.
*   **Loi de Poisson $\mathcal{P}(\lambda)$ ($\lambda > 0$) :** 
    $X(\Omega) = \mathbb{N}$, $\mathbb{P}(X=k) = e^{-\lambda} \frac{\lambda^k}{k!}$.
    $\mathbb{E}(X) = \lambda$, $V(X) = \lambda$.

---

## IV. Méthodes et Pièges à éviter

### 1. Méthodes incontournables
*   **Pour dénombrer :** Toujours se poser les trois questions fondamentales : 
    1. Y a-t-il remise ? (Ordonné / Non ordonné)
    2. L'ordre compte-t-il ?
    3. Les éléments sont-ils discernables ?
*   **Pour les probabilités totales :** Penser systématiquement à partitionner l'univers à l'aide d'un contexte pertinent (souvent lié à l'énoncé de l'expérience en plusieurs étapes).
*   **Pour le calcul d'espérance de lois complexes (ex: Binomiale, Géométrique) :** Penser à la linéarité de l'espérance (décomposer une loi binomiale comme somme de $n$ Bernoullis) ou utiliser la dérivation de séries entières pour les lois géométriques/Poisson.

### 2. Pièges classiques (Attention aux erreurs de MPSI !)
*   **Confondre arrangements et combinaisons :** Oublier de diviser par $k!$ lorsqu'il n'y a pas d'ordre est l'erreur numéro un en dénombrement.
*   **Indépendance vs Incompatibilité :** 
    *   Deux événements $A$ et $B$ non impossibles sont *incompatibles* si $A \cap B = \emptyset$ (donc $\mathbb{P}(A \cap B) = 0$). S'ils sont indépendants, $\mathbb{P}(A)\mathbb{P}(B) = 0 \implies \mathbb{P}(A)=0$ ou $\mathbb{P}(B)=0$. **Deux événements non de probabilité nulle ne peuvent pas être à la fois incompatibles et indépendants.**
*   **Indépendance globale vs Indépendance deux à deux :** Pour une famille $(A_i)_{i \in I}$, l'indépendance mutuelle (pour toute sous-partie finie) est **plus forte** que l'indépendance deux à deux. Ne jamais confondre les deux notions.
*   **Existence de l'espérance :** Avant d'écrire $\mathbb{E}(X)$, il est **obligatoire** de vérifier la convergence absolue ($\sum |x|\mathbb{P}(X=x) < +\infty$), en particulier pour les variables à support infini dénombrable ($\mathbb{N}$ ou $\mathbb{N}^*$).