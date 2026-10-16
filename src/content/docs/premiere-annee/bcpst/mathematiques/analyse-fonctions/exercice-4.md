---
title: 'Exercice 2 : Lois usuelles'
description: 'Problème d entraînement type concours.'
---

# Concours BCPST — Mathématiques
## Analyse et Probabilités discrètes : Lois usuelles

*L'examinateur rappelle aux candidats que la rigueur de la rédaction, la clarté des notations et la justification systématique des passages aux limites ou des lois de probabilité conditionnelle sont des éléments prépondérants dans l'évaluation de la copie.*

---

### Préambule et cadre du problème

Soit $\lambda > 0$ un paramètre réel. On considère une variable aléatoire $X$ suivant une loi de Poisson de paramètre $\lambda$, notée $X \hookrightarrow \mathcal{P}(\lambda)$. 
On rappelle que pour tout $k \in \mathbb{N}$, la probabilité de l'événement $\{X = k\}$ est donnée par :
$$\mathbb{P}(X = k) = e^{-\lambda} \frac{\lambda^k}{k!}$$

Dans ce problème, on s'intéresse à des transformations de cette variable aléatoire, à l'étude d'une fonction génératrice des moments et à une application asymptotique.

---

### Partie I : Étude préliminaire et lemme d'unicité

**1.** Rappeler l'expression de l'espérance $\mathbb{E}(X)$ et de la variance $\mathcal{V}(X)$ d'une variable aléatoire suivant la loi $\mathcal{P}(\lambda)$.

> **Correction de l'examinateur :**
> Par définition du cours (ou par le calcul des séries entières associées), si $X \hookrightarrow \mathcal{P}(\lambda)$, alors :
> $$\mathbb{E}(X) = \lambda \quad \text{et} \quad \mathcal{V}(X) = \lambda$$

**2.** Calculer, pour tout $x \in \mathbb{R}$, la somme de la série entière $\sum_{k=0}^{+\infty} \frac{x^k}{k!}$ et en déduire que $\sum_{k=0}^{+\infty} \mathbb{P}(X = k) = 1$.

> **Correction de l'examinateur :**
> La série $\sum_{k=0}^{+\infty} \frac{x^k}{k!}$ est la série exponentielle usuelle, convergente pour tout $x \in \mathbb{R}$, et sa somme est $e^x$.
> Dès lors :
> $$\sum_{k=0}^{+\infty} \mathbb{P}(X = k) = \sum_{k=0}^{+\infty} e^{-\lambda} \frac{\lambda^k}{k!} = e^{-\lambda} \sum_{k=0}^{+\infty} \frac{\lambda^k}{k!} = e^{-\lambda} \cdot e^\lambda = 1$$
> Ce résultat confirme bien que la loi de Poisson est une loi de probabilité valide sur $\mathbb{N}$.

---

### Partie II : Transformation de variable et troncature

On s'intéresse maintenant à un système de mesure qui ne peut détecter les événements que si $X \ge 1$. On définit une nouvelle variable aléatoire $Y$ par :
$$Y = \begin{cases} X & \text{si } X \ge 1 \\ 1 & \text{si } X = 0 \end{cases}$$

**3.** Déterminer l'ensemble des valeurs prises par $Y$, noté $Y(\Omega)$.

> **Correction de l'examinateur :**
> Puisque $X$ prend ses valeurs dans $\mathbb{N}$ :
> - Si $X=0$, $Y=1$.
> - Si $X \ge 1$, $Y=X \ge 1$.
> 
> Ainsi, $Y(\Omega) = \mathbb{N}^* = \{1, 2, 3, \dots\}$.

**4.** Déterminer la loi de probabilité de $Y$. Préciser la valeur de $\mathbb{P}(Y = 1)$ et de $\mathbb{P}(Y = k)$ pour $k \ge 2$.

> **Correction de l'examinateur :**
> Utilisons la formule des probabilités totales ou l'identification directe des événements :
> - Pour $k = 1$ : $\{Y = 1\} = \{X = 0\} \cup \{X = 1\}$. Comme ces deux événements sont incompatibles :
>   $$\mathbb{P}(Y = 1) = \mathbb{P}(X = 0) + \mathbb{P}(X = 1) = e^{-\lambda} + e^{-\lambda}\lambda = e^{-\lambda}(1 + \lambda)$$
> - Pour $k \ge 2$ : $\{Y = k\} = \{X = k\}$, donc :
>   $$\mathbb{P}(Y = k) = e^{-\lambda} \frac{\lambda^k}{k!}$$

**5.** Établir l'existence et calculer l'espérance de $Y$, notée $\mathbb{E}(Y)$.

> **Correction de l'examinateur :**
> Par définition, la série définissant l'espérance est $\sum_{k=1}^{+\infty} k \mathbb{P}(Y = k)$. 
> Étudions la convergence absolue de cette série (termes positifs) :
> $$\sum_{k=1}^{+\infty} k \mathbb{P}(Y = k) = 1 \cdot \mathbb{P}(Y=1) + \sum_{k=2}^{+\infty} k e^{-\lambda} \frac{\lambda^k}{k!}$$
> Remarquons que :
> $$\sum_{k=1}^{+\infty} k \mathbb{P}(X = k) = \mathbb{E}(X) = \lambda$$
> Or, la somme de cette espérance est :
> $$\sum_{k=1}^{+\infty} k \mathbb{P}(X = k) = 1 \cdot \mathbb{P}(X=1) + \sum_{k=2}^{+\infty} k \mathbb{P}(X = k) = e^{-\lambda}\lambda + \sum_{k=2}^{+\infty} k \mathbb{P}(X = k) = \lambda$$
> Exprimons $\mathbb{E}(Y)$ :
> $$\mathbb{E}(Y) = 1 \cdot \mathbb{P}(Y=1) + \sum_{k=2}^{+\infty} k \mathbb{P}(Y = k) = 1 \cdot (e^{-\lambda} + e^{-\lambda}\lambda) + \sum_{k=2}^{+\infty} k e^{-\lambda} \frac{\lambda^k}{k!}$$
> En regroupant les termes :
> $$\mathbb{E}(Y) = e^{-\lambda} + e^{-\lambda}\lambda + \sum_{k=2}^{+\infty} \lambda e^{-\lambda} \frac{\lambda^{k-1}}{(k-1)!} = e^{-\lambda} + \sum_{k=1}^{+\infty} \lambda e^{-\lambda} \frac{\lambda^{k-1}}{(k-1)!} = e^{-\lambda} + \lambda \sum_{j=0}^{+\infty} e^{-\lambda} \frac{\lambda^j}{j!} = e^{-\lambda} + \lambda$$
> **Conclusion :** $\mathbb{E}(Y) = \lambda + e^{-\lambda}$.

---

### Partie III : Fonction génératrice et somme de variables indépendantes

Soient $X_1$ et $X_2$ deux variables aléatoires **indépendantes** telles que $X_1 \hookrightarrow \mathcal{P}(\lambda_1)$ et $X_2 \hookrightarrow \mathcal{P}(\lambda_2)$, avec $(\lambda_1, \lambda_2) \in (\mathbb{R}_+^*)^2$.
On pose $S = X_1 + X_2$.

**6.** Rappeler la définition de la fonction génératrice $G_X(t)$ d'une variable aléatoire à valeurs dans $\mathbb{N}$ et calculer $G_X(t)$ pour $X \hookrightarrow \mathcal{P}(\lambda)$.

> **Correction de l'examinateur :**
> Pour toute variable aléatoire $Z$ à valeurs dans $\mathbb{N}$, sa fonction génératrice est définie pour tout $t \in [-1, 1]$ par :
> $$G_Z(t) = \mathbb{E}(t^Z) = \sum_{k=0}^{+\infty} t^k \mathbb{P}(Z = k)$$
> Pour $X \hookrightarrow \mathcal{P}(\lambda)$ :
> $$G_X(t) = \sum_{k=0}^{+\infty} t^k e^{-\lambda} \frac{\lambda^k}{k!} = e^{-\lambda} \sum_{k=0}^{+\infty} \frac{(\lambda t)^k}{k!} = e^{-\lambda} e^{\lambda t} = e^{\lambda(t - 1)}$$

**7.** En utilisant la propriété fondamentale des fonctions génératrices pour des variables indépendantes, déterminer la loi de la somme $S = X_1 + X_2$.

> **Correction de l'examinateur :**
> Le cours énonce que si $X_1$ et $X_2$ sont indépendantes, alors :
> $$G_{X_1 + X_2}(t) = G_{X_1}(t) \times G_{X_2}(t)$$
> Calculons ce produit :
> $$G_S(t) = e^{\lambda_1(t - 1)} \times e^{\lambda_2(t - 1)} = e^{(\lambda_1 + \lambda_2)(t - 1)}$$
> On reconnait la fonction génératrice d'une loi de Poisson de paramètre $\lambda_1 + \lambda_2$. 
> Par injectivité de la transformation par fonction génératrice (unicité de la loi), on conclut :
> $$S \hookrightarrow \mathcal{P}(\lambda_1 + \lambda_2)$$

---

### Partie IV : Analyse critique et asymptotique

**8.** Soit $X \hookrightarrow \mathcal{P}(\lambda)$. En utilisant l'inégalité de Bienaymé-Tchebychev, majurer la probabilité $\mathbb{P}(|X - \lambda| \ge \varepsilon)$ pour $\varepsilon > 0$. Comment évolue cette majoration lorsque $\lambda \to +\infty$ à $\varepsilon$ fixé ?

> **Correction de l'examinateur :**
> L'inégalité de Bienaymé-Tchebychev s'applique car $X$ possède une espérance $(\lambda)$ et une variance $(\lambda)$ finies :
> $$\mathbb{P}(|X - \mathbb{E}(X)| \ge \varepsilon) \le \frac{\mathcal{V}(X)}{\varepsilon^2}$$
> Soit ici :
> $$\mathbb{P}(|X - \lambda| \ge \varepsilon) \le \frac{\lambda}{\varepsilon^2}$$
> **Analyse critique :** 
> *Rigueur mathématique :* La majoration $\frac{\lambda}{\varepsilon^2}$ devient triviale et perd tout caractère informatif dès que $\lambda \ge \varepsilon^2$, car une probabilité est nécessairement inférieure ou égale à $1$. 
> *Interprétation probabiliste :* Bien que la loi des grands nombres ou le théorème de la limite centrale garantissent que la loi de Poisson se concentre autour de sa moyenne lorsque $\lambda$ grandit, l'inégalité de Bienaymé-Tchebychev est trop grossière dans ce régime asymptotique précis pour capturer ce resserrement. Une normalisation adéquate (centrée-réduite) est requise pour appliquer le Théorème de la Limite Centrale (TLC).

---
*Fin du problème.*