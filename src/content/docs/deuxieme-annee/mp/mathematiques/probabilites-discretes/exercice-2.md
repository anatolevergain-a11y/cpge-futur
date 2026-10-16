---
title: 'Exercice 2 : Fonctions génératrices'
description: 'Problème d entraînement type concours.'
---

# Problème : Étude asymptotique et propriétés des fonctions génératrices de probabilités

*Matière : Mathématiques — Filière : MP*
Chapitre: Variables aléatoires discrètes*

---

## Énoncé

Soit $X$ une variable aléatoire définie sur un espace probabilisé $(\Omega, \mathcal{A}, P)$, à valeurs dans $\mathbb{N}$. 
On appelle **fonction génératrice** de $X$ la fonction $G_X$ définie, pour tout nombre réel $t$ (ou complexe) tel que la série entière converge, par :
$$G_X(t) = \mathbb{E}[t^X] = \sum_{n=0}^{+\infty} P(X = n) t^n$$

L'objectif de ce problème est d'étudier les propriétés de régularité de ces fonctions, de résoudre une équation fonctionnelle liée à un processus de branchement, et enfin d'analyser les limites d'un tel modèle probabiliste.

---

## Questions

### Partie I : Propriétés générales et régularité

1. Montrer que le rayon de convergence $R$ de la série entière définissant $G_X(t)$ est supérieur ou égal à $1$. En déduire que $G_X$ est de classe $\mathcal{C}^\infty$ sur l'intervalle $]-1, 1[$.
2. Exprimer les moments factoriels de $X$ (lorsqu'ils existent) à l'aide des dérivées successives de $G_X$ en $1$ (par isclm ou limite à gauche). En déduire l'espérance $\mathbb{E}[X]$ et la variance $\mathbb{V}(X)$ en fonction des dérivées de $G_X$.
3. Soient $X$ et $Y$ deux variables aléatoires indépendantes à valeurs dans $\mathbb{N}$. Exprimer la fonction génératrice de la somme $X + Y$ en fonction de $G_X$ et $G_Y$.

### Partie II : Processus de branchement et équation fonctionnelle

On considère une population d'individus où chaque individu, à chaque génération, se reproduit de manière indépendante en donnant naissance à un nombre aléatoire d'enfants dont la loi est donnée par une variable $Z$ à valeurs dans $\mathbb{N}$, de fonction génératrice $G$. On suppose que $P(Z=0) > 0$ et $P(Z=1) < 1$, avec $\mathbb{E}[Z] = m > 1$.

Soit $X_n$ leeffectif de la $n$-ième génération, avec $X_0 = 1$. On note $G_n$ la fonction génératrice de $X_n$.
4. En conditionnant par rapport à la première génération $X_1$, établir la relation de récurrence :
   $$G_{n+1}(t) = G_n(G(t)) \quad \text{pour tout } t \in [0, 1]$$
   et en déduire que $G_n(t) = \underbrace{G \circ G \circ \dots \circ G}_{n \text{ fois}}(t)$.
5. On s'intéresse à la probabilité d'extinction de la population, notée $q = \lim_{n \to +\infty} P(X_n = 0)$. 
   Montrer que $q$ est une solution de l'équation $G(x) = x$ sur $[0, 1]$.
6. En étudiant les variations de la fonction $g(x) = G(x) - x$ sur $[0, 1]$, déterminer la valeur exacte de $q$ selon la valeur du paramètre $m = \mathbb{E}[Z]$.

### Partie III : Analyse critique des limites du modèle

7. **Analyse critique :** Dans le cadre des processus de branchement (Partie II), discutez de la pertinence de ce modèle pour simuler l'évolution d'une population réelle (biologique ou démographique). Quelles sont les hypothèses fortes qui pèsent sur les limites de ce modèle mathématique ?

---

## Pistes et indications

* **Q1 :** Utiliser le fait que $\sum_{n=0}^{+\infty} P(X=n) = 1$ et que $|t|^n \le 1$ pour $|t| \le 1$.
* **Q2 :** Penser à dériver terme à terme la série entière à l'intérieur de son disque de convergence.
* **Q4 :** Utiliser la formule des probabilités totales en écrivant $X_{n+1} = \sum_{k=1}^{X_n} Z_k^{(n)}$ où les $Z_k^{(n)}$ sont i.i.d. de même loi que $Z$.
* **Q6 :** Étudier la convexité de $G$ sur $[0, 1]$ sachant que $G''(x) = \sum_{n=2}^{+\infty} n(n-1)P(Z=n)x^{n-2} \ge 0$.

---

## Corrigé pas à pas

### Partie I_1. Le terme général de la suite de coefficients est $a_n = P(X=n)$. Comme $X$ est à valeurs dans $\mathbb{N}$, $\sum_{n=0}^{+\infty} P(X=n) = 1$. La série $\sum P(X=n)$ est donc absolument convergente (et vaut $1$). Par conséquent, pour tout $t$ tel que $|t| \le 1$, la série $\sum P(X=n) t^n$ converge absolument (majorée par $\sum P(X=n) = 1$). Le rayon de convergence $R$ vérifie donc $R \ge 1$. Par thèorie des séries entières, $G_X$ est de classe $\mathcal{C}^\infty$ sur $]-R, R[$, donc en particulier sur $]-1, 1[$.

2. Pour $t \in ]-1, 1[$, on peut dériver $k$ fois terme à terme :
   $$G_X^{(k)}(t) = \sum_{n=k}^{+\infty} n(n-1)\dots(n-k+1) P(X=n) t^{n-k}$$
   Par convergence (notamment quand $t \to 1^-$ par continuité abélienne), on obtient :
   $$G_X^{(k)}(1) = \mathbb{E}[X(X-1)\dots(X-k+1)]$$
   En particulier :
   * $\mathbb{E}[X] = G_X'(1)$
   * $\mathbb{E}[X(X-1)] = G_X''(1) \implies \mathbb{V}(X) = G_X''(1) + G_X'(1) - (G_X'(1))^2$.

3. Par indépendance de $X$ et $Y$ :
   $$G_{X+Y}(t) = \mathbb{E}[t^{X+Y}] = \mathbb{E}[t^X t^Y] = \mathbb{E}[t^X] \mathbb{E}[t^Y] = G_X(t)G_Y(t)$$

### Partie II

4. Soit $X_1 = k$. La population à la génération $n+1$ est la somme de $k$ processus indépendants ayant la même loi que $X_n$. Ainsi, par conditionnement :
   $$G_{n+1}(t) = \mathbb{E}[t^{X_{n+1}}] = \sum_{k=0}^{+\infty} P(X_1 = k) \mathbb{E}[t^{X_{n+1}} \mid X_1 = k] = \sum_{k=0}^{+\infty} P(X_1 = k) (G_n(t))^k = G_X(G_n(t))$$
   Par récurrence immédiate, on trouve $G_n(t) = \underbrace{G \circ \dots \circ G}_{n \text{ fois}}(t)$. (Note : l'énoncé suggérait l'ordre des compositions, $G_n = G^{\circ n}$).

5. La probabilité d'extinction à la génération $n$ est $P(X_n = 0) = G_n(0)$. Par continuité de la probabilité, $q = \lim_{n\to+\infty} G_n(0)$. Comme $G$ est continue, en passant à la limite dans $G_{n+1}(0) = G(G_n(0))$, on obtient $q = G(q)$.

6. Étudions $g(x) = G(x) - x$ sur $[0, 1]$. 
   * $g(0) = P(Z=0) > 0$.
   * $g(1) = G(1) - 1 = 1 - 1 = 0$.
   * $g'(x) = G'(x) - 1$, et $g''(x) = G''(x) \ge 0$ (fonction convexe).
   Comme $m = G'(1) > 1$, la pente en $1$ est strictement positive, donc $g$ s'annule sur $[0, 1[$. Par stricte convexité, il existe une unique racine $q \in [0, 1[$. La suite $(G_n(0))_{n\in\mathbb{N}}$ étant croissante majorée par $q$, elle converge vers ce point fixe unique $q < 1$.

---

### Partie III : Analyse critique des limites du modèle

**Analyse critique du modèle de processus de branchement :**

1. **Hypothèse d'indépendance des descendances :** Le modèle suppose que le nombre d'enfants de chaque individu est une variable aléatoire indépendante de celle des autres individus et des générations précédentes. En biologie ou en démographie, c'est une simplification excessive : les ressources limitées de l'environnement (nourriture, espace) font que la reproduction dépend de la taille totale de la population $X_n$ (phénomène de régulation densité-dépendant).
2. **Homogénéité temporelle :** La loi de $Z$ est supposée constante au cours du temps $n$. Or, les conditions extérieures (climat, épidémies, économie) varient, rendant la loi de reproduction non stationnaire.
3. **Caractère sans mémoire (absence d'âge) :** Le modèle ne tient pas compte de la structure par âge ou par sexe de la population, aspects pourtant cruciaux dans toute dynamique des populations réelles. 
Conclusion: * Bien que mathématiquement élégante et puissante pour obtenir des seuils critiques (comme le critère $m > 1$ pour la survie presque sûre), la fonction génératrice dans ce cadre fournit un modèle idéaliste qu'il convient de coupler avec des équations différentielles stochastiques non linéaires pour des applications réalistes.