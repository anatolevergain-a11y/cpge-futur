---
title: 'Cours : Probabilités continues'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Probabilités continues (BCPST 2)

## 1. Généralités sur les variables aléatoires à densité

### A. Définitions fondamentales

**Définition (Variable aléatoire à densité) :**
Soit $(\Omega, \mathcal{A}, P)$ un espace probabilisé. Une variable aléatoire réelle $X$ est dite **à densité** s'il existe une fonction $f : \mathbb{R} \to \mathbb{R}$, positive et continue par morceaux, telle que pour tout intervalle $I$ de $\mathbb{R}$ de la forme $[a, b], ]a, b[, [a, b[, ]a, b]$ :
$$P(X \in I) = \int_I f(t) \, dt$$
La fonction $f$ est appelée **densité de probabilité** de $X$.

**Conditions nécessaires et suffisantes pour qu'une fonction soit une densité :**
Une fonction $f : \mathbb{R} \to \mathbb{R}$ est une densité de probabilité s'il and seulement si :
1. **Positivité :** Pour tout $t \in \mathbb{R}$, $f(t) \ge 0$.
2. **Continuité par morceaux :** $f$ est continue par morceaux sur $\mathbb{R}$.
3. **Condition de normalisation :** L'intégrale généralisée converge et :
   $$\int_{-\infty}^{+\infty} f(t) \, dt = 1$$

> **Propriété fondamentale :** Si $X$ est une variable aléatoire à densité, alors pour tout $x_0 \in \mathbb{R}$, $P(X = x_0) = 0$. 
> *Conséquence :* Les inégalités larges et strictes sont équivalentes pour le calcul des probabilités ($P(X < a) = P(X \le a)$).

### B. Fonction de répartition

**Définition :**
La **fonction de répartition** d'une variable aléatoire $X$ (discrète ou à densité) est la fonction $F_X : \mathbb{R} \to [0, 1]$ définie par :
$$F_X(x) = P(X \le x)$$

**Théorème (Lien entre densité et fonction de répartition) :**
Si $X$ est une variable aléatoire à densité de densité $f$, alors sa fonction de répartition $F_X$ est de classe $\mathcal{C}^1$ sur $\mathbb{R}$ (sauf éventuellement en un nombre fini de points où $f$ présente des discontinuités de première espèce), et :
$$F_X(x) = \int_{-\infty}^{x} f(t) \, dt \quad \text{et} \quad F_X'(x) = f(x) \text{ (là où } f \text{ est continue)}$$

---

## 2. Espérance, Variance et Moments

### A. Espérance mathématique

**Définition :**
Soit $X$ une variable aléatoire à densité de densité $f$. On dit que $X$admet une **espérance** (ou qu'elle est d'ordre 1) si l'intégrale généralisée suivante converge **absolument** :
$$\int_{-\infty}^{+\infty} t f(t) \, dt$$
Dans ce cas, l'espérance de $X$, notée $E(X)$, est définie par :
$$E(X) = \int_{-\infty}^{+\infty} t f(t) \, dt$$

### B. Théorème de transfert (loi de l'statisticien inconscient - LIEG)

**Théorème :**
Soit $X$ une variable aléatoire à densité de densité $f$ et $\varphi : \mathbb{R} \to \mathbb{R}$ une fonction continue par morceaux. 
La variable aléatoire $\varphi(X)$ admet une espérance si et seulement si l'intégrale suivante converge absolument :
$$\int_{-\infty}^{+\infty} \varphi(t) f(t) \, dt$$
Dans ce cas :
$$E(\varphi(X)) = \int_{-\infty}^{+\infty} \varphi(t) f(t) \, dt$$

### C. Variance et Écart-type

**Définition :**
Soit $X$ une variable aléatoire admettant un moment d'ordre 2 (c'est-à-dire que $E(X^2)$ existe). On dit que $X$ admet une **variance**, notée $V(X)$ (ou $\sigma^2(X)$), définie par :
$$V(X) = E\left((X - E(X))^2\right) = E(X^2) - (E(X))^2$$
L'**écart-type** est $\sigma(X) = \sqrt{V(X)}$.

**Propriétés (identiques au cas discret) :**
* Linéarité de l'espérance : $E(aX + b) = aE(X) + b$.
* Propriété de la variance : $V(aX + b) = a^2 V(X)$.
* König-Huygens : $V(X) = E(X^2) - (E(X))^2$.

---

## 3. Lois usuelles

### A. Loi uniforme sur $[a, b]$ ($\mathcal{U}([a, b])$ avec $a < b$)

* **Modélisation :** Choix "au hasard" d'un réel dans un intervalle.
* **Densité :** 
  $$f(t) = \begin{cases} \frac{1}{b-a} & \text{si } t \in [a, b] \\ 0 & \text{sinon} \end{cases}$$
* **Espérance :** $E(X) = \frac{a+b}{2}$
* **Variance :** $V(X) = \frac{(b-a)^2}{12}$

### B. Loi exponentielle de paramètre $\lambda > 0$ ($\mathcal{E}(\lambda)$)

* **Modélisation :** Durée de vie d'un composant sans vieillissement, temps d'attente entre deux événements de Poisson.
* **Densité :** 
  $$f(t) = \begin{cases} \lambda e^{-\lambda t} & \text{si } t \ge 0 \\ 0 & \text{si } t < 0 \end{cases}$$
* **Fonction de répartition :** $F(x) = 1 - e^{-\lambda x}$ pour $x \ge 0$.
* **Espérance :** $E(X) = \frac{1}{\lambda}$
* **Variance :** $V(X) = \frac{1}{\lambda^2}$
* **Propriété d'absence de mémoire :** Pour tous $s, t \ge 0$ :
  $$P(X > s + t \mid X > s) = P(X > t) = e^{-\lambda t}$$

### C. Loi normale (ou de Gauss) d'espérance $\mu$ et de variance $\sigma^2$ ($\mathcal{N}(\mu, \sigma^2)$ avec $\sigma > 0$)

* **Densité :** 
  $$f(t) = \frac{1}{\sigma\sqrt{2\pi}} \exp\left(-\frac{(t-\mu)^2}{2\sigma^2}\right)$$
* **Espérance :** $E(X) = \mu$
* **Variance :** $V(X) = \sigma^2$
* **Cas particulier ($\mathcal{N}(0, 1)$ - Loi normale centrée réduite) :**
  Sa densité est notée $\varphi(t) = \frac{1}{\sqrt{2\pi}} e^{-t^2/2}$ et sa fonction de répartition $\Phi(x) = \int_{-\infty}^{x} \varphi(t) \, dt$.
  *Propriété de symétrie :* $\Phi(-x) = 1 - \Phi(x)$.

**Théorème (Centrage-Réduction) :**
Si $X \sim \mathcal{N}(\mu, \sigma^2)$, alors la variable aléatoire $Y = \frac{X - \mu}{\sigma}$ suit la loi normale centrée réduite $\mathcal{N}(0, 1)$.

---

## 4. Couples de variables aléatoires à densité

### A. Densité conjointe

**Définition :**
Un couple $(X, Y)$ de variables aléatoires est à **densité** s'il existe une fonction $f_{X,Y} : \mathbb{R}^2 \to \mathbb{R}$, positive et continue par morceaux, telle que pour tout domaine $D \subset \mathbb{R}^2$ (convenable) :
$$P((X, Y) \in D) = \iint_D f_{X,Y}(x, y) \, dx \, dy$$
La fonction $f_{X,Y}$ est la **densité conjointe** du couple. Elle vérifie $\iint_{\mathbb{R}^2} f_{X,Y}(x, y) \, dx \, dy = 1$.

### B. Densités marginales

**Théorème :**
Si $(X, Y)$ a pour densité conjointe $f_{X,Y}$, alors $X$ et $Y$ sont des variables à densité dont les densités marginales $f_X$ et $f_Y$ sont données par :
$$f_X(x) = \int_{-\infty}^{+\infty} f_{X,Y}(x, y) \, dy \quad \text{et} \quad f_Y(y) = \int_{-\infty}^{+\infty} f_{X,Y}(x, y) \, dx$$

### C. Indépendance

**Définition :**
Les variables aléatoires $X$ et $Y$ sont dites **indépendantes** si pour tout $x, y \in \mathbb{R}$ :
$$F_{X,Y}(x, y) = F_X(x) F_Y(y)$$
Dans le cas à densité, cela équivaut à :
$$f_{X,Y}(x, y) = f_X(x) f_Y(y) \quad \text{presque partout}$$

**Théorème (Espérance du produit) :**
Si $X$ et $Y$ sont indépendantes et admettent une espérance, alors $XY$ admet une espérance et :
$$E(XY) = E(X)E(Y)$$

---

## 5. Méthodes et Savoir-faire

1. **Vérifier ou déterminer une constante de normalisation :**
   * *Méthode :* Intégrer la densité sur $\mathbb{R}$ (ou le support) et poser l'intégrale égale à $1$. Souvent lié à des primitives classiques ou à des intégrales de Gauss ($\int_{-\infty}^{+\infty} e^{-t^2} dt = \sqrt{\pi}$).

2. **Calculer la loi d'une fonction d'une variable aléatoire (Méthode de la fonction de répartition) :**
   * *Étape 1 :* Soit $Y = \varphi(X)$. On cherche $F_Y(y) = P(Y \le y) = P(\varphi(X) \le y)$.
   * *Étape 2 :* Résoudre l'inéquation $\varphi(X) \le y$ en fonction de $X$.
   * *Étape 3 :* Exprimer $F_Y(y)$ à l'aide de la fonction de répartition $F_X$ ou par une intégrale.
   * *Étape 4 :* Dériver $F_Y$ (si possible) pour obtenir la densité $f_Y$.

3. **Calcul de transformées de variables (Somme de variables indépendantes) :**
   * Si $X$ et $Y$ sont indépendantes à densités, la densité de $S = X + Y$ s'obtient par le produit de convolution :
     $$f_S(s) = \int_{-\infty}^{+\infty} f_X(t) f_Y(s-t) \, dt$$

---

## 6. Pièges classiques à éviter

* **Confondre $P(X=x)$ et $f(x)$ :** Pour une variable à densité, $P(X=x) = 0$, mais $f(x)$ peut être strictement supérieur à $1$ (par exemple, une loi uniforme sur $[0, 0.5]$ a pour densité $f(t) = 2$). La densité n'est **pas** une probabilité.
* **Oublier le domaine de validité :** Une densité est nulle en dehors de son support. Ne jamais oublier de préciser les "sinon $0$" dans l'écriture d'une densité par morceaux.
* **Mauvaise gestion des bornes lors du calcul des marginales :** Bien dessiner le domaine $D$ où $f_{X,Y}$ est non nulle pour déterminer les bornes des intégrales (en particulier pour les intégrales de Fubini sur des domaines non rectangulaires).
* **Conclure hâtivement à l'indépendance :** $f_{X,Y}(x,y) = f_X(x)f_Y(y)$ doit être vrai **pour tout** $(x,y)$ (ou presque partout), et les supports doivent être des produits cartésiens d'intervalles.