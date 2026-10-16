---
title: 'Cours : Probabilités discrètes et variables continues'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Probabilités discrètes et variables continues (CPGE - MP)

## 1. Rappels sur les espaces probabilisés et variables discrètes

Soit $(\Omega, \mathcal{A}, P)$ un espace probabilisé. 

### Définition (Variable aléatoire discrète)
Une variable aléatoire réelle $X$ est dite discrète si son image $X(\Omega)$ est finie ou dénombrable, et si pour tout $x \in X(\Omega)$, l'événement $\{X = x\} = X^{-1}(\{x\})$ appartient à la tribu $\mathcal{A}$.

*   **Loi de $X$** : Déterminée par la data de la famille $(P(X = x))_{x \in X(\Omega)}$.
*   **Espérance** : $X$ admet une espérance si la famille $(x P(X = x))_{x \in X(\Omega)}$ est sommable. On pose alors :
    $$E(X) = \sum_{x \in X(\Omega)} x P(X = x)$$
*   **Variance** : $X$ admet une variance si $X^2$ admet une espérance (cas où $X \in \mathcal{L}^2(\Omega, \mathcal{A}, P)$) :
    $$V(X) = E\left((X - E(X))^2\right) = E(X^2) - (E(X))^2$$

---

## 2. Variables aléatoires à densité

### Définition (Variable à densité)
Une variable aléatoire réelle $X$ est dite à densité s'il existe une fonction $f : \mathbb{R} \to \mathbb{R}$ positive, continue par morceaux, telle que pour tout intervalle $I$ de $\mathbb{R}$ (ou plus généralement pour tout borélien), et en particulier pour tous $a, b \in \mathbb{R}$ avec $a \leq b$ :
$$P(a \leq X \leq b) = \int_a^b f(t) \, dt$$
La fonction $f$ est appelée **densité de probabilité** de $X$. Elle vérifie nécessairement :
1. $\forall t \in \mathbb{R}, \, f(t) \geq 0$
2. $\int_{-\infty}^{+\infty} f(t) \, dt = 1$ (convergence impropre absolue).

### Fonction de répartition
La fonction de répartition de $X$, notée $F_X$, est définie par :
$$\forall x \in \mathbb{R}, \quad F_X(x) = P(X \leq x) = \int_{-\infty}^x f(t) \, dt$$
*Propriétés de $F_X$* :
*   $F_X$ est de classe $\mathcal{C}^1$ partout où $f$ est continue.
*   $F_X$ est croissante, $\lim_{-\infty} F_X = 0$ et $\lim_{+\infty} F_X = 1$.
*   Si $f$ est continue en $x$, alors $F_X'(x) = f(x)$.

---

## 3. Moments d'une variable à densité

### Espérance
Soit $X$ une variable aléatoire à densité de densité $f$. On dit que $X$ admet une espérance (ou est d'ordre 1) si l'intégrale impropre suivante converge absolument :
$$\int_{-\infty}^{+\infty} t f(t) \, dt \quad \text{converge absolument}$$
Le cas échéant, l'espérance est :
$$E(X) = \int_{-\infty}^{+\infty} t f(t) \, dt$$

### Théorème de transfert
Si $g : \mathbb{R} \to \mathbb{R}$ est continue par morceaux, alors $g(X)$ admet une espérance si et seulement si l'intégrale suivante converge absolument :
$$\int_{-\infty}^{+\infty} g(t) f(t) \, dt < +\infty$$
Dans ce cas :
$$E(g(X)) = \int_{-\infty}^{+\infty} g(t) f(t) \, dt$$

### Variance
$X$ admet une variance (ordre 2) si $E(X^2)$ existe, c'est-à-dire si $\int_{-\infty}^{+\infty} t^2 f(t) \, dt$ converge.
$$V(X) = E(X^2) - (E(X))^2 = \int_{-\infty}^{+\infty} (t - E(X))^2 f(t) \, dt$$

---

## 4. Lois usuelles (Synthèse)

| Loi | Paramètres | Support $X(\Omega)$ | Densité $f(t)$ ou Loi $P(X=k)$ | Espérance $E(X)$ | Variance $V(X)$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Uniforme** | $a, b \in \mathbb{R}, a < b$ | $[a, b]$ | $\frac{1}{b-a} \mathbf{1}_{[a,b]}(t)$ | $\frac{a+b}{2}$ | $\frac{(b-a)^2}{12}$ |
| **Exponentielle** | $\lambda > 0$ | $\mathbb{R}_+$ | $\lambda e^{-\lambda t} \mathbf{1}_{\mathbb{R}_+}(t)$ | $\frac{1}{\lambda}$ | $\frac{1}{\lambda^2}$ |
| **Gaussienne** | $\mu \in \mathbb{R}, \sigma > 0$ | $\mathbb{R}$ | $\frac{1}{\sigma\sqrt{2\pi}} \exp\left(-\frac{(t-\mu)^2}{2\sigma^2}\right)$ | $\mu$ | $\sigma^2$ |
| **Bernoulli** | $p \in [0, 1]$ | $\{0, 1\}$ | $P(X=1)=p, P(X=0)=1-p$ | $p$ | $p(1-p)$ |
| **Binomiale** | $n \in \mathbb{N}, p \in [0,1]$ | $\llbracket 0, n \rrbracket$ | $\binom{n}{k}p^k(1-p)^{n-k}$ | $np$ | $np(1-p)$ |
| **Poisson** | $\lambda > 0$ | $\mathbb{N}$ | $e^{-\lambda} \frac{\lambda^k}{k!}$ | $\lambda$ | $\lambda$ |

---

## 5. Couples de variables aléatoires

### Densité conjointe
Soit $(X, Y)$ un couple de variables aléatoires. $(X, Y)$ admet une densité conjointe $f_{X,Y}$ si pour tout borélien $A$ de $\mathbb{R}^2$ :
$$P((X,Y) \in A) = \iint_A f_{X,Y}(x,y) \, dx \, dy$$

*   **Densités marginales** : Si $f_{X,Y}$ est continue par morceaux, les densités de $X$ et $Y$ s'obtiennent par integration :
    $$f_X(x) = \int_{-\infty}^{+\infty} f_{X,Y}(x,y) \, dy \quad \text{et} \quad f_Y(y) = \int_{-\infty}^{+\infty} f_{X,Y}(x,y) \, dx$$

### Indépendance
Les variables $X$ et $Y$ sont indépendantes si pour tous boréliens $A$ et $B$ :
$$P(X \in A, Y \in B) = P(X \in A)P(Y \in B)$$
*Caractérisation pour les densités* : $X$ et $Y$ sont indépendantes si et seulement si l'on a $f_{X,Y}(x,y) = f_X(x)f_Y(y)$ presque partout.

### Covariance et Inégalité de Cauchy-Schwarz
Si $X$ et $Y$ admettent des moments d'ordre 2, la covariance est définie par :
$$\text{Cov}(X, Y) = E((X - E(X))(Y - E(Y))) = E(XY) - E(X)E(Y)$$
*   **Inégalité de Cauchy-Schwarz** : 
    $$|\text{Cov}(X, Y)| \leq \sqrt{V(X)V(Y)}$$
*   Si $X$ et $Y$ sont indépendantes, $\text{Cov}(X, Y) = 0$ (la réciproque est fausse).

---

## 6. Démonstrations et méthodes clés

### Démonstration : Positivité de la variance et cas d'égalité
Soit $X \in \mathcal{L}^2$. Posons $\mu = E(X)$.
Pour tout réel $t$, considérons $f(t) = E((X - t)^2)$.
En développant par linéarité de l'espérance :
$$f(t) = E(X^2 - 2tX + t^2) = E(X^2) - 2tE(X) + t^2 = t^2 - 2\mu t + E(X^2)$$
C'est un polynôme du second degré en $t$ à coefficients réels. Par ailleurs, par positivité de la variable aléatoire $(X-t)^2$, on a :
$$\forall t \in \mathbb{R}, \quad f(t) \geq 0$$
Le discriminant $\Delta$ de ce trinôme doit donc être négatif ou nul :
$$\Delta = 4\mu^2 - 4E(X^2) \leq 0 \implies \mu^2 \leq E(X^2) \implies V(X) = E(X^2) - \mu^2 \geq 0$$
*Cas d'égalité* : Si $V(X) = 0$, alors $\Delta = 0$, donc le trinôme admet une racine double $t_0 = \mu$. Ainsi $f(\mu) = 0$, c'est-à-dire $E((X - \mu)^2) = 0$. Puisque $(X-\mu)^2$ est une variable positive d'espérance nulle, elle est presque sûrement nulle, donc $X = E(X)$ p.s.

---

### Méthode : Calcul de la loi de $Z = X + Y$ (par convolution)
Soit $X$ et $Y$ deux variables aléatoires à densité, indépendantes, de densités respectives $f_X$ et $f_Y$. On cherche la densité de $Z = X + Y$.

1.  **Par la fonction de répartition** :
    $$F_Z(z) = P(X + Y \leq z) = \iint_{x+y \leq z} f_X(x)f_Y(y) \, dx \, dy$$
2.  **Par le théorème de Fubini** :
    $$F_Z(z) = \int_{-\infty}^{+\infty} f_X(x) \left( \int_{-\infty}^{z-x} f_Y(y) \, dy \right) dx = \int_{-\infty}^{+\infty} f_X(x) F_Y(z-x) \, dx$$
3.  **Dérivation** (si les densités sont continues) : On dérive $F_Z(z)$ par rapport à $z$ sous le signe intégrale pour obtenir la densité $f_Z$ :
    $$f_Z(z) = \int_{-\infty}^{+\infty} f_X(x) f_Y(z-x) \, dx = (f_X * f_Y)(z)$$
    C'est le produit de convolution des deux densités.