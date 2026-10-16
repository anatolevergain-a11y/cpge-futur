---
title: 'Exercice 1 : Lois de Poisson et Binomiale'
description: 'Problème d entraînement type concours.'
---

# Problème : Approximation de Poisson de la loi binomiale et analyse critique d'un modèle de files d'attente

## Énoncé

Le présent problème s'intéresse à la modélisation probabiliste de l'arrivée de clients dans un service sur une période donnée. On cherche à étudier la pertinence de l'approximation d'une loi binomiale par une loi de Poisson, puis à analyser les limites de ce modèle à travers une étude asymptotique.

Soit $\lambda > 0$ un paramètre réel fixé représentant l'intensité moyenne d'arrivées. Pour tout entier $n \ge 1$, on considère une suite d'expériences indépendantes modélisées par un paramètre de succès $p_n = \frac{\lambda}{n}$ (on supposera $n \ge \lambda$). 

## Questions

1. **Étude préliminaire :** Soit $X_n$ une variable aléatoire suivant la loi binomiale $\mathcal{B}(n, p_n)$. Rappeler l'espérance et la variance de $X_n$.
2. **Convergence en loi :** Fixons un entier $k \ge 0$. Exprimer la probabilité $\mathbb{P}(X_n = k)$ pour $n \ge k$. Déterminer la limite de cette probabilité lorsque $n tend vers +\infty$.
3. **Loi limite :** Reconnaître la loi de la variable aléatoire limite et expliciter sa fonction de masse.
4. **Vitesse de convergence :** Évaluer, à l'aide d'une distance adéquate (par exemple via la variation totale ou un encadrement des moments), l'erreur commise en approximant $\mathcal{B}(n, \lambda/n)$ par $\mathcal{P}(\lambda)$ pour de grandes valeurs de $n$.
5. **Analyse critique du modèle :** Dans le cadre de la modélisation physique (par exemple, le trafic internet ou l'arrivée d'appels dans un centre de contact), discuter des hypothèses sous-jacentes de indépendance et d'homogénéité temporelle. Quelles sont les limites mathématiques et physiques de ce modèle de Poisson ?

---

## Pistes et indications

* **Q1 :** Utiliser les propriétés usuelles de l'espérance et de la variance pour une somme de $n$ variables de Bernoulli indépendantes.
* **Q2 :** Écrire $\mathbb{P}(X_n = k)$ sous forme factorielle et utiliser un équivalent des termes du type $\left(1 - \frac{\lambda}{n}\right)^{n-k}$ sous forme exponentielle.
* **Q3 :** Identifier la série génératrice ou la définition de la loi de Poisson $\mathcal{P}(\lambda)$.
* **Q4 :** Pour majorer l'écart entre la loi binomiale et la loi de Poisson, penser à l'inégalité de Katz-Chen ou à l'estimation directe des rapports de probabilités $\frac{\mathbb{P}(X_n = k)}{\mathbb{P}(Y = k)}$ où $Y \sim \mathcal{P}(\lambda)$.
* **Q5 :** Pour l'analyse critique, s'interroger sur la stationnarité du flux d'arrivées (les pics de trafic aux heures de pointe) et sur l'hypothèse de non-simultanéité des événements (indépendance des incréments infinitésimaux).

---

## Corrigé pas à pas

### 1. Espérance et variance de $X_n$
Puisque $X_n \sim \mathcal{B}(n, p_n)$ avec $p_n = \frac{\lambda}{n}$, on a immédiatement par cours :
$$\mathbb{E}(X_n) = n p_n = n \left(\frac{\lambda}{n}\) = \lambda$$
$$\text{Var}(X_n) = n p_n (1 - p_n) = \lambda \left(1 - \frac{\lambda}{n}\right)$$

### 2. Convergence de $\mathbb{P}(X_n = k)$
Pour tout $n \ge k$, la formule des probabilités pour la loi binomiale donne :
$$\mathbb{P}(X_n = k) = \binom{n}{k} \left(\frac{\lambda}{n}\right)^k \left(1 - \frac{\lambda}{n}\right)^{n-k}$$
En développant le coefficient binomial :
$$\mathbb{P}(X_n = k) = \frac{n(n-1)\dots(n-k+1)}{k!} \frac{\lambda^k}{n^k} \left(1 - \frac{\lambda}{n}\right)^n \left(1 - \frac{\lambda}{n}\right)^{-k}$$
Ce qui se réécrit :
$$\mathbb{P}(X_n = k) = \frac{\lambda^k}{k!} \left(1 \times \left(1 - \frac{1}{n}\right) \dots \left(1 - \frac{k-1}{n}\right)\right) \left(1 - \frac{\lambda}{n}\right)^n \left(1 - \frac{\lambda}{n}\right)^{-k}$$

Passons à la limite lorsque $n \to +\infty$ (avec $k$ fixé) :
* $\lim_{n \to +\infty} \left(1 \times \left(1 - \frac{1}{n}\right) \dots \left(1 - \frac{k-1}{n}\right)\right) = 1$
* $\lim_{n \to +\infty} \left(1 - \frac{\lambda}{n}\right)^n = e^{-\lambda}$
* $\lim_{n \to +\infty} \left(1 - \frac{\lambda}{n}\right)^{-k} = 1^{-k} = 1$

Par conséquent :
$$\lim_{n \to +\infty} \mathbb{P}(X_n = k) = e^{-\lambda} \frac{\lambda^k}{k!}$$

### 3. Loi limite
La famille de probabilités $\left(e^{-\lambda} \frac{\lambda^k}{k!}\right)_{k \in \mathbb{N}}$ est bien sommable et sa somme vaut $1$ (développement en série entière de l'exponentielle). La suite de variables aléatoires $(X_n)$ converge en loi vers une variable aléatoire $Y$ suivant la **loi de Poisson de paramètre $\lambda$**, notée $\mathcal{P}(\lambda)$, dont la fonction de masse est donnée par :
$$\forall k \in \mathbb{N}, \quad \mathbb{P}(Y = k) = e^{-\lambda} \frac{\lambda^k}{k!}$$

### 4. Vitesse de convergence
Pour évaluer l'approximation, on s'intéresse à la distance en variation totale d, ou plus simplement à l'erreur commise sur les probabilités individuelles. En étudiant le rapport $\frac{\mathbb{P}(X_n = k)}{\mathbb{P}(Y = k)}$, un développement limité ou l'utilisation de l'inégalité de Berry-Esseen / méthodes de Stein-Chen permettent d'établir que l'écart total en variation entre $\mathcal{B}(n, \lambda/n)$ et $\mathcal{P}(\lambda)$ est en $\mathcal{O}\left(\frac{1}{n}\right)$. Plus précisément, on a l'estimation classique :
$$d_{TV}(\mathcal{B}(n, \lambda/n), \mathcal{P}(\lambda)) \le \frac{\lambda^2}{n}$$
Cette borne montre que l'approximation de Poisson est particulièrement performante dès que $n$ est grand devant $\lambda^2$.

---

### 5. Analyse critique des limites du modèle

Si la loi de Poisson est omniprésente en modélisation stochastique en raison de sa simplicité mathématique (stabilité par somme, paramètre unique), son utilisation intensive révèle de fortes **limites théoriques et pratiques** :

1. **L'hypothèse d'indépendance des incréments :** 
   Le modèle sous-jacent suppose que la survenance d'un événement dans un intervalle infinitésimal est totalement indépendante des intervalles précédents. En pratique (ex: trafic routier, affluence sur un serveur web), les clients arrivent souvent par "salves" ou "sessions" (phénomènes de contagion ou de mémoire). Le processus de Poisson standard sous-estime drastiquement la probabilité de survenance de pics de charge extrêmes (que l'on modélise mieux par des processus de Hawkes ou des lois à queues lourdes).

2. **L'homogénéité temporelle :** 
   Fixer un paramètre $\lambda$ constant implique que l'intensité moyenne d'arrivées est stationnaire. Or, dans les systèmes réels, $\lambda$ dépend fortement du temps $t$ (heures de pointe dans les transports, variations diurnes du trafic réseau). Le modèle doit alors être étendu aux **processus de Poisson non homogènes** ($\lambda(t)$).

3. **Limites mathématiques du passage à la limite :** 
   L'approximation $\mathcal{B}(n, \lambda/n) \to \mathcal{P}(\lambda)$ nécessite que $p_n$ soit petit et $n$ grand. Si le phénomène étudié présente une probabilité de succès $p$ non négligeable par période, le modèle binomial s'impose sans pouvoir être lissé par une loi de Poisson, sous peine d'accumuler des erreurs d'approximation significatives sur les queues de distribution ($\mathbb{P}(Y > k)$ pour les grands $k$).