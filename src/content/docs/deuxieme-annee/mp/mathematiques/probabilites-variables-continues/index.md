---
title: 'Cours : Variables aléatoires à densité'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Cours de Mathématiques - MP : Variables Aléatoires à Densité

**Professeur de CPGE (MP)**

---

## 1. Introduction et Définitions Fondamentales

Dans le cadre du programme de mathématiques de MP, l'étude des variables aléatoires réelles (v.a.r.) à densité formalise l'intuition de phénomènes aléatoires continus.

### 1.1. Espace probabilisé et v.a.r.
Soit $(\Omega, \mathcal{A}, P)$ un espace probabilisé. 
**Définition.** Une application $X : \Omega \to \mathbb{R}$ est dite **variable aléatoire réelle** si pour tout $x \in \mathbb{R}$, l'événement $\{\omega \in \Omega \mid X(\omega) \le x\}$ (noté $(X \le x)$) appartient à la tribue $\mathcal{A}$.

### 1.2. Fonction de répartition
**Définition.** La fonction de répartition d'une v.a.r. $X$ est la fonction $F_X : \mathbb{R} \to [0, 1]$ définie par :
$$\forall x \in \mathbb{R}, \quad F_X(x) = P(X \le x)$$

**Propriétés fondamentales (admises ou démontrées selon le cas) :**
1. $F_X$ est croissante sur $\mathbb{R}$.
2. $\lim_{-\infty} F_X = 0$ et $\lim_{+\infty} F_X = 1$.
3. $F_X$ est continue à droite en tout point.
4. Pour tous réels $a$ et $b$ tels que $a \le b$, $P(a < X \le b) = F_X(b) - F_X(a)$.

### 1.3. Variables aléatoires à densité
**Définition.** Une v.a.r. $X$ est dite **à densité** si sa fonction de répartition $F_X$ est de classe $\mathcal{C}^1$ par morceaux sur $\mathbb{R}$ (ou plus généralement continue, et de classe $\mathcal{C}^1$ sauf en un nombre fini de points). 
On appelle **densité de probabilité** de $X$ toute fonction $f : \mathbb{R} \to \mathbb{R}_+$ continue par morceaux, positive, et telle que :
$$\forall x \in \mathbb{R}, \quad F_X(x) = \int_{-\infty}^x f(t) \, dt$$

*Remarque cruciale :* La valeur de $f$ en un nombre fini de points ne modifie pas l'intégrale. Une densité n'est donc pas unique, mais l'ensemble des densités d'une même v.a.r. coïncide presque partout.

---

## 2. Propriétés d'une Densité et Calculs de Probabilités

### 2.1. Conditions pour qu'une fonction soit une densité
**Théorème.** Une fonction $f : \mathbb{R} \to \mathbb{R}$ est la densité d'une variable aléatoire si et seulement si :
1. **Positivité :** $\forall x \in \mathbb{R}, \; f(x) \ge 0$.
2. **Continuité par morceaux :** $f$ est continue par morceaux sur $\mathbb{R}$.
3. **Normalisation :** L'intégrale impropre $\int_{-\infty}^{+\infty} f(t) \, dt$ converge et vaut $1$.

### 2.2. Calculs d'événements
Soit $X$ une v.a.r. de densité $f$. Pour tous réels $a$ et $b$ ($a \le b$) :
* $P(X = a) = 0$ (conséquence de la continuité de $F_X$).
* $P(a \le X \le b) = P(a < X \le b) = P(a \le X < b) = P(a < X < b) = \int_a^b f(t) \, dt$.
* $P(X > a) = \int_a^{+\infty} f(t) \, dt$.

---

## 3. Espérance et Variance (Moments d'ordre 1 et 2)

### 3.1. Espérance
**Définition.** Soit $X$ une v.a.r. à densité de densité $f$. On dit que $X$ admet une **espérance** (ou qu'elle est d'ordre 1) si l'intégrale impropre $\int_{-\infty}^{+\infty} t f(t) \, dt$ est **absolument convergente**.
Le cas échéant, l'espérance de $X$, notée $E(X)$, est définie par :
$$E(X) = \int_{-\infty}^{+\infty} t f(t) \, dt$$

### 3.2. Variance
**Définition.** Soit $X$ une v.a.r. admettant un moment d'ordre 2 (c'est-à-dire que $\int_{-\infty}^{+\infty} t^2 f(t) \, dt$ converge absolument). 
La **variance** de $X$, notée $V(X)$ (ou $\text{Var}(X)$), est définie par :
$$V(X) = E\left( (X - E(X))^2 \right) = \int_{-\infty}^{+\infty} (t - E(X))^2 f(t) \, dt$$

**Théorème de König-Huygens :**
$$V(X) = E(X^2) - (E(X))^2$$
où $E(X^2) = \int_{-\infty}^{+\infty} t^2 f(t) \, dt$.

L'**écart-type** est $\sigma(X) = \sqrt{V(X)}$.

---

## 4. Lois Usuelles (Programme de MP)

| Loi | Notation | Densité $f(x)$ | Espérance $E(X)$ | Variance $V(X)$ |
| :--- | :--- | :--- | :--- | :--- |
| **Uniforme** sur $[a, b]$ ($a<b$) | $\mathcal{U}([a, b])$ | $\frac{1}{b-a} \mathbb{I}_{[a, b]}(x)$ | $\frac{a+b}{2}$ | $\frac{(b-a)^2}{12}$ |
| **Exponentielle** de paramètre $\lambda > 0$ | $\mathcal{E}(\lambda)$ | $\lambda e^{-\lambda x} \mathbb{I}_{[0, +\infty[}(x)$ | $\frac{1}{\lambda}$ | $\frac{1}{\lambda^2}$ |
| **Centrée réduite** (Gaussienne) | $\mathcal{N}(0, 1)$ | $\frac{1}{\sqrt{2\pi}} e^{-x^2 / 2}$ | $0$ | $1$ |
| **Gaussienne générale** ($\mu, \sigma^2$) | $\mathcal{N}(\mu, \sigma^2)$ | $\frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$ | $\mu$ | $\sigma^2$ |
Note: * La notation $\mathbb{I}_{A}$ désigne la fonction indicatrice de l'ensemble $A$.

---

## 5. Théorème de Transfert (Loi de $g(X)$)

**Théorème (Hors-programme admis ou démontré selon les cas, fondamental en pratique).**
Soit $X$ une v.a.r. à densité $f$ et $g : \mathbb{R} \to \mathbb{R}$ une fonction continue (ou continue par morceaux). 
La variable aléatoire $Y = g(X)$ admet une espérance si et seulement si l'intégrale $\int_{-\infty}^{+\infty} g(t) f(t) \, dt$ converge absolument. 
Dans ce cas :
$$E(g(X)) = \int_{-\infty}^{+\infty} g(t) f(t) \, dt$$

---

## 6. Méthodes et Savoir-Faire en MP

### Méthode 1 : Déterminer si une fonction est une densité
1. Vérifier la positivité $f \ge 0$ (souvent sur un domaine précis, attention aux zéros).
2. Vérifier la continuité par morceaux.
3. Calculer l'intégrale $\int_{-\infty}^{+\infty} f(t) \, dt$ comme une limite d'intégrales sur des segments (intégrales impropres) et s'assurer qu'elle vaut $1$.

### Méthode 2 : Trouver la densité d'une fonction d'une variable aléatoire ($Y = g(X)$)
*Méthode de la fonction de répartition (universelle) :*
1. Poser $F_Y(y) = P(Y \le y) = P(g(X) \le y)$.
2. Résoudre l'inéquation $g(X) \le y$ en fonction de $X$ pour exprimer cet événement à l'aide de $X$.
3. Exprimer $F_Y(y)$ à l'aide de la fonction de répartition $F_X$ ou de la densité $f_X$ (en calculant l'intégrale correspondante).
4. Dériver $F_Y$ (là où elle est $\mathcal{C}^1$) pour obtenir $f_Y$.

---

## 7. Pièges Classiques et Mises en Garde

1. **Confusion entre v.a. discrète et v.a. à densité :** 
   Pour une v.a. à densité, $P(X = c) = 0$ pour tout $c \in \mathbb{R}$. On a donc $P(X \le c) = P(X < c)$. Ne jamais écrire $P(X=c) > 0$.
2. **Convergence des intégrales pour les moments :**
   Pour affirmer qu'une espérance existe, il ne suffit pas de dire que l'intégrale converge (au sens semi-convergent), il faut **impérativement** vérifier la convergence **absolue** ($\int |t|f(t)dt < +\infty$). C'est un point de rigueur absolue en CPGE.
3. **Domaine de validité d'une densité :**
   Une densité est nulle en dehors de son support. Ne pas oublier de préciser les indicatrices ou les bornes des intégrales lors des calculs d'espérance.