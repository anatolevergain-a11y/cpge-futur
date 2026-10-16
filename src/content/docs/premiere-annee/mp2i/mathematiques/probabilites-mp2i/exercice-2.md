---
title: 'Exercice 2 : Variables aléatoires et espérance'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $n \in \mathbb{N}^*$ un entier supérieur ou égal à $2$. On considère un jeu de cartes ou une urne contenant $n$ boules numérotées de $1$ à $n$. On effectue des tirages successifs et on s'intéresse au nombre de tirages nécessaires pour observer certaines configurations. 

Plus formellement, soit $\Omega$ l'ensemble des permutations de l'ensemble $\{1, 2, \dots, n\}$, muni de la mesure de probabilité uniforme, notée $\mathbb{P}$. Ainsi, pour tout $\omega \in \Omega$, $\mathbb{P}(\{\omega\}) = \frac{1}{n!}$. Une permutation $\sigma \in \Omega$ est vue comme un tirage simultané ou une disposition ordonnée des $n$ éléments.

L'objectif de ce problème est d'étudier certaines variables aléatoires définies sur cet espace probabilisé fini, en particulier le nombre de "records" rencontrés lors de l'énumération de la permutation, et d'établir des résultats asymptotiques par le calcul d'espérances et de variances.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Préliminaires probabilistes :** Rappeler la définition d'un espace probabilisé fini. Expliciter le cardinal de $\Omega$ et justifier que le choix de la probabilité uniforme $\mathbb{P}$ est cohérent.
2. **Introduction de la variable de record :** Soit $X_1, X_2, \dots, X_n$ la permutation représentée sous forme de suite $(x_1, x_2, \dots, x_n)$. On dit qu'il y a un *record à gauche* en position $i$ (pour $1 \le i \le n$) si $x_i > x_j$ pour tout $j < i$ (avec la convention qu'il y a toujours un record en position $1$). Pour tout $i \in \{1, \dots, n\}$, on définit la variable aléatoire $I_i$ par :
   $$I_i(\sigma) = \begin{cases} 1 & \text{si } x_i \text{ est un record à gauche en position } i, \\ 0 & \text{sinon.} \end{cases}$$
   Déterminer la loi de la variable aléatoire $I_i$ pour un $i$ fixé. Les variables $(I_i)_{1 \le i \le n}$ sont-elles indépendantes ?
3. **Calcul de l'espérance du nombre total de records :** Soit $X = \sum_{i=1}^n I_i$ la variable aléatoire représentant le nombre total de records dans la permutation. Calculer l'espérance $\mathbb{E}(X)$. Déterminer un équivalent de $\mathbb{E}(X)$ lorsque $n \to +\infty$.
4. **Calcul de la variance :** Montrer que la variance de $X$ s'exprime sous la forme :
   $$\mathbb{V}(X) = \sum_{i=1}^n \mathbb{V}(I_i) + \sum_{1 \le i \neq j \le n} \text{Cov}(I_i, I_j)$$
   Calculer $\text{Cov}(I_i, I_j)$ pour $i \neq j$, puis en déduire l'expression exacte de $\mathbb{V}(X)$. Donner un équivalent de $\mathbb{V}(X)$ quand $n \to + \infty$.
5. **Analyse critique du modèle :** Le modèle uniforme sur les permutations suppose que tous les ordres d'arrivée sont équiprobables. En pratique, dans le cadre de tris informatiques (comme le tri par insertion), les données initiales ne sont pas toujours équiprobables. Discuter brièvement de l'impact d'une modification de la loi de probabilité sur le comportement asymptotique de $\mathbb{E}(X)$.

---

### 💡 Pistes & Indications méthodologiques

* **Indicateurs :** Pour calculer la probabilité qu'un élément soit un record, exploiter la symétrie du problème : parmi les $i$ premiers éléments, chaque position a la même probabilité d'accueillir le maximum.
* **Indépendance :** Penser à tester l'indépendance pour de petites valeurs de $n$ (par exemple $n=3$). L'événement "le $3$-ème élément est un record" dépend des deux premiers.
* **Linéarité de l'espérance :** C'est l'outil roi pour calculer l'espérance d'une somme de variables aléatoires, même si ces dernières ne sont pas indépendantes.
* **Covariance :** Pour $i < j$, analyser la condition pour que $I_i = 1$ et $I_j = 1$ simultanément, en se ramenant au fait que $x_i = \max_{1 \le k \le i} x_k$ et $x_j = \max_{1 \le k \le j} x_k$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Préliminaires probabilistes
Un espace probabilisé fini est un couple $(\Omega, \mathbb{P})$ où $\Omega$ est un ensemble fini non vide et $\mathbb{P}$ une application de $\mathcal{P}(\Omega)$ dans $[0, 1]$ telle que $\mathbb{P}(\Omega) = 1$ et pour tout $(A, B) \in \mathcal{P}(\Omega)^2$ disjoints, $\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B)$.
Ici, $\Omega = \mathcal{S}_n$ (l'ensemble des permutations de $\{1, \dots, n\}$). Le cardinal de $\Omega$ est $n!$. La probabilité uniforme attribue à chaque singleton $\{\sigma\}$ la même probabilité $\frac{1}{n!}$. Ce choix modélise un tirage aléatoire sans remise où toutes les dispositions initiales ont la même chance d'apparaître.

#### 2. Loi de $I_i$ et indépendance
Soit $i \in \{1, \dots, n\}$. L'élément $x_i$ est un record à gauche si et seulement s'il est le plus grand des $i$ premiers éléments de la permutation. Par symétrie, dans l'ensemble des $i$ premiers éléments $\{x_1, \dots, x_i\}$, n'importe lequel a la même probabilité d'être le plus grand, et ce de manière équiprobable. 
Ainsi, la probabilité que $x_i$ soit le maximum de ce sous-ensemble est $\frac{1}{i}$.
Par conséquent, $I_i$ suit une loi de Bernoulli de paramètre $p_i = \frac{1}{i}$ :
$$\mathbb{P}(I_i = 1) = \frac{1}{i} \quad \text{et} \quad \mathbb{P}(I_i = 0) = 1 - \frac{1}{i} = \frac{i-1}{i}$$

Les variables $(I_i)$ ne sont **pas** indépendantes. En effet, si $n \ge 2$, sachant que $I_1 = 1$ (ce qui est toujours vrai car $I_1(\sigma) = 1$), la valeur de $I_2$ dépend directement de la comparaison entre $x_1$ et $x_2$. Plus formellement, $\mathbb{P}(I_2 = 1 \mid I_1 = 1) = \frac{1}{2}$, tandis que $\mathbb{P}(I_2 = 1) = \frac{1}{2}$, mais des dépendances plus fortes apparaissent pour des indices rapprochés ou par la structure globale de la permutation.

#### 3. Espérance du nombre total de records
La variable $X$ représente le nombre total de records : $X = \sum_{i=1}^n I_i$.
Par application du théorème de linéarité de l'espérance (qui s'applique sans hypothèse d'indépendance) :
$$\mathbb{E}(X) = \mathbb{E}\left(\sum_{i=1}^n I_i\right) = \sum_{i=1}^n \mathbb{E}(I_i) = \sum_{i=1}^n \mathbb{P}(I_i = 1) = \sum_{i=1}^n \frac{1}{i}$$
On reconnaît la $n$-ième somme harmonique, notée $H_n$. Ainsi :
$$\mathbb{E}(X) = H_n = \sum_{i=1}^n \frac{1}{i}$$
Du point de vue asymptotique, il est bien connu que :
$$H_n \underset{n \to +\infty}{\sim} \ln(n)$$
Le nombre moyen de records dans une grande permutation de taille $n$ croît donc comme le logarithme népérien de $n$.

#### 4. Calcul de la variance
Par définition de la variance d'une somme :
$$\mathbb{V}(X) = \sum_{i=1}^n \mathbb{V}(I_i) + \sum_{1 \le i \neq j \le n} \text{Cov}(I_i, I_j)$$

* **Variance des variables de Bernoulli :** 
  Pour chaque $i$, $\mathbb{V}(I_i) = \mathbb{P}(I_i=1)(1 - \mathbb{P}(I_i=1)) = \frac{1}{i}\left(1 - \frac{1}{i}\right) = \frac{1}{i} - \frac{1}{i^2}$.
  La somme de ces variances vaut :
  $$\sum_{i=1}^n \mathbb{V}(I_i) = \sum_{i=1}^n \frac{1}{i} - \sum_{i=1}^n \frac{1}{i^2} = H_n - \sum_{i=1}^n \frac{1}{i^2}$$

* **Covariance pour $i < j$ :**
  Soit $1 \le i < j \le n$. Par definition, $\text{Cov}(I_i, I_j) = \mathbb{E}(I_i I_j) - \mathbb{E}(I_i)\mathbb{E}(I_j)$.
  Or $I_i I_j = 1$ si et seulement si $x_i$ est un record à la position $i$ *et* $x_j$ est un record à la position $j$. 
  Ces deux événements sont indépendants dans leur réalisation séquentielle : le fait que $x_i$ soit le maximum des $i$ premiers éléments est indépendant de la condition que $x_j$ soit le maximum des $j$ éléments sachant que $x_j$ n'est pas l'un des $i$ premiers (autrement dit, la position du maximum parmi les $j$ premiers éléments est uniformément répartie sur les $j$ positions, indépendamment du fait que le maximum des $i$ premiers soit bien placé). 
  Rigoureusement, $\mathbb{P}(I_i = 1 \text{ et } I_j = 1) = \mathbb{P}(I_j = 1 \mid I_i = 1)\mathbb{P}(I_i = 1)$.
  Savoir que $I_i = 1$ fixe le fait que $x_i$ est le max des $i$ premiers, mais pour $j > i$, la probabilité que $x_j$ soit le max des $j$ premiers est $\frac{1}{j}$ et ces deux événements (être le max des $i$ premiers et être le max des $j$ premiers) sont indépendants car ils portent sur des tirages uniformes disjoints. Ainsi :
  $$\mathbb{P}(I_i = 1 \text{ et } I_j = 1) = \frac{1}{i} \times \frac{1}{j}$$
  Dès lors :
  $$\text{Cov}(I_i, I_j) = \frac{1}{ij} - \frac{1}{i} \times \frac{1}{j} = 0$$
  De manière surprenante, les variables $(I_i)$ sont **deux à deux non correlées** !

* **Bilan pour la variance :**
  Puisque $\text{Cov}(I_i, I_j) = 0$ pour tout $i \neq j$, il vient :
  $$\mathbb{V}(X) = \sum_{i=1}^n \mathbb{V}(I_i) = H_n - \sum_{i=1}^n \frac{1}{i^2}$$
  Quand $n \to +\infty$, $\sum_{i=1}^n \frac{1}{i^2}$ converge vers $\frac{\pi^2}{6}$, donc :
  $$\mathbb{V}(X) \underset{n \to +\infty}{\sim} \ln(n)$$

#### 5. Analyse critique du modèle
Le modèle uniforme $\mathbb{P}(\{\sigma\}) = \frac{1}{n!}$ repose sur l'hypothèse d'absence de biais dans la génération des permutations. Si l'on considère par exemple un algorithme de tri partiellement biaisé où certaines configurations fortement ordonnées ont une probabilité d'apparition plus grande, la loi des indicateurs $I_i$ ne serait plus uniforme ($p_i$ ne vaudrait plus $\frac{1}{i}$). 
Dans ce cas, l'espérance $\mathbb{E}(X) = \sum p_i$ pourrait être significativement plus faible (s'il y a déjà un pré-tri, le nombre de nouveaux records tend à diminuer drastiquement). L'hypothèse d'équiprobabilité est donc cruciale pour obtenir l'ordre de grandeur logarithmique universel $H_n$.