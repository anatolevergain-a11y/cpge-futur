---
title: 'Exercice 1 : Variables aléatoires discrètes'
description: 'Problème d entraînement type concours pour PT.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre de l'étude de la fiabilité de composants électroniques soumis à des tests de stress répétés, on modélise le comportement d'un système par une suite d'expériences aléatoires indépendantes. 

Soit $p \in ]0, 1[$ la probabilité qu'un composant réussisse un test unitaire, et $q = 1 - p$ la probabilité d'échec. On note $\mathbb{N}^* = \{1, 2, 3, \dots\}$.

Le problème se propose d'étudier l'espérance et la variance de lois discrètes modélisant le nombre d'essais nécessaires pour l'obtention d'un certain nombre de succès, ainsi que l'analyse asymptotique d'un estimateur statistique associé.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Étude d'une loi géométrique (Temps d'attente du premier succès)**
   Soit $X$ la variable aléatoire représentant le rang du premier succès. 
   a) Justifier que $X$ prend ses valeurs dans $\mathbb{N}^*$ et déterminer sa loi, c'est-à-dire calculer $\mathbb{P}(X = k)$ pour tout $k \in \mathbb{N}^*$.
   b) Rappeler sans démonstration (ou établir rapidement) l'espérance $\mathbb{E}(X)$ et la variance $\mathbb{V}(X)$ de $X$.

2. **Somme de variables géométriques indépendantes (Loi binomiale négative)**
   Soit $r \in \mathbb{N}^*$ un entier fixé. On considère $X_1, X_2, \dots, X_r$ des variables aléatoires indépendantes et de même loi que $X$ (définie à la question 1). On pose $S_r = \sum_{i=1}^{r} X_i$.
   a) Que représente concrètement la variable aléatoire $S_r$ dans le contexte des tests de composants ?
   b) Déterminer l'ensemble des valeurs prises par $S_r$, noté $S_r(\Omega)$.
   c) Démontrer que pour tout entier $n \ge r$, on a :
      $$\mathbb{P}(S_r = n) = \binom{n-1}{r-1} p^r q^{n-r}$$
   d) En déduire, par linéarité et par indépendance, l'espérance $\mathbb{E}(S_r)$ et la variance $\mathbb{V}(S_r)$.

3. **Approximation asymptotique et analyse critique du modèle**
   On s'intéresse à la situation où la probabilité de succès $p$ est très faible ($p \to 0$), ce qui correspond à des composants de très faible fiabilité testés un grand nombre de fois.
   a) Soit $Y$ une variable aléatoire suivant la loi binomiale $\mathcal{B}(n, p)$. Rappeler la définition de la loi de $Y$ et son espérance $\mathbb{E}(Y)$.
   b) Discuter la pertinence du modèle géométrique si les essais successifs ne sont plus indépendants (par exemple, en cas d'usure cumulative du matériel ou de défaillance en cascade). Quelle hypothèse fondamentale des probabilités discrètes usuelles est alors violée ?

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Pour la loi géométrique, traduire l'événement $\{X = k\}$ par une suite d'échecs suivis d'un succès. Penser aux séries géométriques dérivées pour le calcul des moments.
- **Question 2 :** L'espérance et la variance d'une somme de variables aléatoires indépendantes se calculent très facilement en décomposant $S_r$ comme la somme de $r$ variables indépendantes de même loi. Pour la formule explicite de la loi de $S_r$, raisonner sur le fait que le $r$-ième succès doit impérativement avoir lieu au $n$-ième essai.
- **Question 3 :** Pour l'analyse critique, veillez à bien identifier l'indépendance des épreuves de Bernoulli, qui est un prérequis indispensable à l'utilisation des lois géométriques et binomiales.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Étude d'une loi géométrique
a) La variable aléatoire $X$ représente le rang du premier succès. Le premier succès peut survenir dès le premier essai ($k=1$), ou au $k$-ième essai après $k-1$ échecs consécutifs. Ainsi, $X(\Omega) = \mathbb{N}^*$.
Par indépendance des essais, la probabilité d'obtenir $k-1$ échecs suivis d'un succès est :
$$\mathbb{P}(X = k) = \underbrace{q \times q \times \dots \times q}_{k-1 \text{ fois}} \times p = q^{k-1}p \quad (\forall k \in \mathbb{N}^*)$$

b) La série $\sum q^{k-1}p$ est convergente de somme 1 (série géométrique de raison $q \in ]0, 1[$). 
Par application du cours sur la loi géométrique $\mathcal{G}(p)$ :
$$\mathbb{E}(X) = \frac{1}{p} \quad \text{et} \quad \mathbb{V}(X) = \frac{1-p}{p^2} = \frac{q}{p^2}$$

---

#### 2. Somme de variables géométriques indépendantes
a) Concrètement, $S_r = \sum_{i=1}^{r} X_i$ représente le **rang d'apparition du $r$-ième succès** lors d'une suite d'épreuves de Bernoulli indépendantes.

b) Puisque chaque $X_i$ prend ses valeurs dans $\mathbb{N}^*$ et qu'il y a $r$ variables, le nombre minimal d'essais pour obtenir $r$ succès est $r$ (si les $r$ premiers essais sont des succès). Par conséquent, $S_r(\Omega) = \{r, r+1, r+2, \dots\} = \llbracket r, +\infty \llbracket$.

c) L'événement $\{S_r = n\}$ (avec $n \ge r$) se réalise si et seulement si l'on observe **exactement $r-1$ succès parmi les $n-1$ premiers essais**, et un **succès au $n$-ième essai**.
- Le nombre de façons de placer les $r-1$ succès parmi les $n-1$ premiers essais est donné par le coefficient binomial $\binom{n-1}{r-1}$.
- La probabilité d'une telle configuration particulière (comprenant $r$ succès et $(n-1) - (r-1) = n-r$ échecs) est $p^r q^{n-r}$.

Par conséquent, par incompatibilité des différentes configurations :
$$\mathbb{P}(S_r = n) = \binom{n-1}{r-1} p^r q^{n-r} \quad (\forall n \ge r)$$
*(Cette loi est appelée loi binomiale négative ou loi de Pascal).*

d) Par définition, $S_r = \sum_{i=1}^{r} X_i$ où les $X_i$ sont indépendantes et suivent toutes la loi $\mathcal{G}(p)$. 
Par linéarité de l'espérance :
$$\mathbb{E}(S_r) = \sum_{i=1}^{r} \mathbb{E}(X_i) = \sum_{i=1}^{r} \frac{1}{p} = \frac{r}{p}$$
Les variables $(X_i)_{1 \le i \le r}$ étant mutuellement indépendantes, la variance de leur somme est la somme de leurs variances :
$$\mathbb{V}(S_r) = \sum_{i=1}^{r} \mathbb{V}(X_i) = \sum_{i=1}^{r} \frac{1-p}{p^2} = \frac{r(1-p)}{p^2}$$

---

#### 3. Approximation asymptotique et analyse critique du modèle
a) Soit $Y$ une variable aléatoire suivant la loi binomiale $\mathcal{B}(n, p)$. $Y$ compte le nombre de succès obtenus lors de $n$ épreuves de Bernoulli indépendantes de paramètre $p$. Sa loi est donnée par :
$$\mathbb{P}(Y = k) = \binom{n}{k} p^k q^{n-k} \quad (\forall k \in \llbracket 0, n \rrbracket)$$
Son espérance vaut $\mathbb{E}(Y) = np$.

b) **Analyse critique du modèle :**
Dans la pratique industrielle, l'hypothèse d'**indépendance** des épreuves de Bernoulli est une idéalisation mathématique forte. Si les composants sont soumis à des contraintes physiques (comme l'échauffement global d'un circuit, l'usure progressive du banc de test, ou des défauts de fabrication par lot), la probabilité de succès $p$ lors d'un essai $k$ peut dépendre des résultats des essais précédents (non-stationnabilité ou liaisons probabilistes). 
Mathématiquement, si les variables $X_i$ ne sont plus indépendantes :
- La formule de la variance de la somme $\mathbb{V}\left(\sum X_i\ésum \mathbb{V}(X_i)\right)$ devient fausse en raison de la présence de termes de covariance non nuls :
  $$\mathbb{V}\left(\sum_{i=1}^{r} X_i\right) = \sum_{i=1}^{r} \mathbb{V}(X_i) + 2 \sum_{1 \le i < j \le r} \text{Cov}(X_i, X_j)$$
- L'utilisation directe de la loi binomiale négative ou de la loi géométrique conduit alors à des erreurs d'estimation majeures dans le dimensionnement de la fiabilité des systèmes.