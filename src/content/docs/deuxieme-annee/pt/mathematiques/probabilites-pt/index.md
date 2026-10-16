---
title: 'Cours : Probabilités discrètes et lois usuelles'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PT.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $\Omega$ un ensemble. Un espace probabilisable discret est un couple $(\Omega, \mathcal{P}(\Omega))$ muni d'une application $\mathbb{P} : \mathcal{P}(\Omega) \to [0, 1]$ appelée probabilité, vérifiant les axiomes de Kolmogorov :
1. $\mathbb{P}(\Omega) = 1$.
2. Pour toute suite (finie ou dénombrable) d'événements $(A_n)_{n \in \mathbb{N}}$ deux à deux incompatibles ($\forall i \neq j, \, A_i \cap A_j = \emptyset$), on a :
$$\mathbb{P}\left(\bigcup_{n=0}^{+\infty} A_n\right) = \sum_{n=0}^{+\infty} \mathbb{P}(A_n)$$

Une variable aléatoire réelle discrète $X$ sur $(\Omega, \mathcal{P}(\Omega), \mathbb{P})$ est une application $X : \Omega \to X(\Omega) \subset \mathbb{R}$ telle que $X(\Omega)$ est fini ou dénombrable, et pour tout $x \in X(\Omega)$, $\{X = x\} = X^{-1}(\{x\}) \in \mathcal{P}(\Omega)$.

La loi de $X$ est caractérisée par l'ensemble des probabilités élémentaires $(\mathbb{P}(X = x))_{x \in X(\Omega)}$.

### Espérance et Variance
- **Espérance** : $X$ admet une espérance si la famille $(\omega \cdot \mathbb{P}(\{\omega\}))_{\omega \in \Omega}$ est sommable, ou de manière équivalente si la série $\sum_{x \in X(\Omega)} x \mathbb{P}(X = x)$ est absolument convergente. On note :
$$\mathbb{E}(X) = \sum_{x \in X(\Omega)} x \mathbb{P}(X = x)$$
- **Variance** : Si $X$ admet un moment d'ordre $2$ ($\mathbb{E}(X^2) < +\infty$), la variance de $X$ est définie par :
$$V(X) = \mathbb{E}\left((X - \mathbb{E}(X))^2\right) = \mathbb{E}(X^2) - (\mathbb{E}(X))^2$$
L'écart-type est $\sigma(X) = \sqrt{V(X)}$.

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème : Théorème de transfert (IPMS)
Soit $X$ une variable aléatoire discrète et $g : X(\Omega) \to \mathbb{R}$ une application. La variable aléatoire $g(X)$ admet une espérance si et seulement si la famille $(g(x)\mathbb{P}(X=x))_{x \in X(\Omega)}$ est sommable, et dans ce cas :
$$\mathbb{E}(g(X)) = \sum_{x \in X(\Omega)} g(x) \mathbb{P}(X = x)$$

#### Démonstration
Par définition de l'espérance de la variable aléatoire $Y = g(X)$ :
$$\mathbb{E}(Y) = \sum_{y \in Y(\Omega)} y \mathbb{P}(Y = y)$$
Or, l'événement $\{Y = y\}$ se réécrit comme la réunion disjointe des événements élémentaires $\{X = x\}$ pour $x \in X(\Omega)$ tels que $g(x) = y$ :
$$\{Y = y\} = \bigcup_{x \in X(\Omega), \, g(x) = y} \{X = x\}$$
Par additivité de la probabilité :
$$\mathbb{P}(Y = y) = \sum_{x \in X(\Omega), \, g(x) = y} \mathbb{P}(X = x)$$
En reportant dans la somme définissant $\mathbb{E}(Y)$ :
$$\mathbb{E}(g(X)) = \sum_{y \in Y(\Omega)} y \left( \sum_{x \in X(\Omega), \, g(x) = y} \mathbb{P}(X = x) \right) = \sum_{y \in Y(\Omega)} \left( \sum_{x \in X(\Omega), \, g(x) = y} g(x) \mathbb{P}(X = x) \right)$$
Par regroupement des termes (la convergence absolue garantissant l'inconditionnalité de la sommation sur l'ensemble $X(\Omega)$), on obtient le résultat escompté :
$$\mathbb{E}(g(X)) = \sum_{x \in X(\Omega)} g(x) \mathbb{P}(X = x)$$
$$\blacksquare$$

### Lois usuelles au programme des CPGE PT

1. **Loi uniforme sur $\llbracket 1, n \llbracket$ (ou $\{1, \dots, n\}$)** : $X(\Omega) = \llbracket 1, n \llbracket$, $\mathbb{P}(X = k) = \frac{1}{n}$.
   - $\mathbb{E}(X) = \frac{n+1}{2}$
   - $V(X) = \frac{n^2-1}{12}$

2. **Loi de Bernoulli $\mathcal{B}(p)$** ($p \in [0, 1]$) : $X(\Omega) = \{0, 1\}$, $\mathbb{P}(X = 1) = p$, $\mathbb{P}(X = 0) = 1-p$.
   - $\mathbb{E}(X) = p$
   - $V(X) = p(1-p)$

3. **Loi binomiale $\mathcal{B}(n, p)$** : Somme de $n$ variables aléatoires indépendantes suivant une loi $\mathcal{B}(p)$.
   - $X(\Omega) = \llbracket 0, n \llbracket$
   - $\mathbb{P}(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$
   - $\mathbb{E}(X) = np$
   - $V(X) = np(1-p)$

4. **Loi géométrique $\mathcal{G}(p)$** ($p \in ]0, 1]$) : Modèle le temps d'attente du premier succès.
   - $X(\Omega) = \mathbb{N}^*$
   - $\mathbb{P}(X = k) = (1-p)^{k-1} p$
   - $\mathbb{E}(X) = \frac{1}{p}$
   - $V(X) = \frac{1-p}{p^2}$

5. **Loi de Poisson $\mathcal{mathcal{P}}(\lambda)$** ($\lambda > 0$) :
   - $X(\Omega) = \mathbb{N}$
   - $\mathbb{P}(X = k) = e^{-\lambda} \frac{\lambda^k}{k!}$
   - $\mathbb{E}(X) = \lambda$
   - $V(X) = \lambda$

## 💡 3. Méthodes de calcul & Algorithmes

### Calcul d'espérance et de variance par dérivation de séries entières
Pour des lois à support infini dénombrable ($\mathcal{G}(p)$ ou $\mathcal{P}(\lambda)$), on recourt souvent aux séries entières.
*Exemple pour la loi géométrique* :
On sait que pour tout $x \in ]-1, 1[$ :
$$\sum_{k=1}^{+\infty} x^k = \frac{x}{1-x}$$
En dérivant terme à terme (ce qui est licite sur l'intervalle ouvert de convergence) :
$$\sum_{k=1}^{+\infty} k x^{k-1} = \frac{1}{(1-x)^2}$$
En posant $x = 1-p$ (avec $p \in ]0, 1[$) :
$$\sum_{k=1}^{+\infty} k (1-p)^{k-1} p = p \sum_{k=1}^{+\infty} k (1-p)^{k-1} = p \frac{1}{(1-(1-p))^2} = p \frac{1}{p^2} = \frac{1}{p}$$
On retrouve ainsi rigoureusement $\mathbb{E}(X) = \frac{1}{p}$.

### Utilisation de la linéarité de l'espérance
Pour calculer l'espérance d'une variable suivant une loi binomiale $\mathcal{B}(n, p)$, on exprime $X$ comme une somme de variables de Bernoulli indépendantes : $X = \sum_{i=1}^n X_i$ où les $X_i \sim \mathcal{B}(p)$.
Par linéarité de l'espérance :
$$\mathbb{E}(X) = \sum_{i=1}^n \mathbb{E}(X_i) = \sum_{i=1}^n p = np$$
Cette méthode évite le calcul lourd avec les coefficients binomiaux $\sum_{k=0}^n k \binom{n}{k} p^k (1-p)^{n-k}$.

## ⚠️ 4. Pièges classiques aux Concours

1. **Existence des moments avant tout calcul** : Ne jamais écrire $V(X) = \mathbb{E}(X^2) - (\mathbb{E}(X))^2$ ou manipuler des espérances sans avoir préalablement établi l'existence de $\mathbb{E}(X^2)$ (convergence absolue de la série associée).
2. **Incompatibilité entre indépendance et non-corrélation** : Deux variables aléatoires peuvent être de covariance nulle sans pour autant être indépendantes (l'indépendance est une notion bien plus forte).
3. **Confusion du support dans les lois usuelles** : 
   - Pour la loi géométrique $\mathcal{G}(p)$, le support commence à $1$ ($\mathbb{N}^*$). 
   - Pour la loi de Poisson $\mathcal{mathcal{P}}(\lambda)$, le support commence à $0$ ($\mathbb{N}$).
4. **Mauvaise manipulation de $\Omega$ infini** : L'interversion de limites et de sommes infinies nécessite des justifications rigoureuses (théorème de Fubini pour les séries ou convergence normale/absolue), souvent éludées à tort par les candidats.