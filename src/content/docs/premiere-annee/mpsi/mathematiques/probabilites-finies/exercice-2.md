---
title: 'Exercice 2 : Variables aléatoires et espérance'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude d'un jeu de loterie avec mémoire et espérance conditionnelle

## Préambule et Objectifs

Ce problème s'inscrit dans le cadre du programme de mathématiques de la classe de première année MPSI. Il aborde la modélisation probabiliste d'une expérience aléatoire séquentielle sur un univers fini, l'utilisation des variables aléatoires, le calcul de lois, d'espérances et l'utilisation de la formule de l'espérance totale. 

---

## Partie I : Modélisation et premier niveau d'analyse

On considère une urne contenant $N$ boules ($N \ge 3$), dont $1$ boule rouge et $N-1$ boules noires. 

Un joueur effectue des tirages successifs d'une boule **avec remise** dans cette urne. Le jeu s'arrête dès que le joueur obtient la boule rouge. On note $X$ la variable aléatoire représentant le rang d'apparition de la boule rouge (le nombre total de tirages effectués).

### Q1. Détermination de la loi de $X$
Question: ** Préciser l'ensemble des valeurs prises par $X$, noté $X(\Omega)$, puis déterminer, pour tout $k \in X(\Omega)$, la probabilité $\mathbb{P}(X = k)$.
Correction: **
Puisque le jeu peut théoriquement se poursuivre indéfiniment, mais qu'à chaque tirage la boule rouge a une probabilité non nulle d'être tirée, l'univers des possibles pour le rang $X$ est l'ensemble des entiers naturels non nuls :
$$X(\Omega) = \mathbb{N}^*$$

Pour qu'il faille exactement $k$ tirages pour obtenir la boule rouge, il faut et il suffit d'obtenir une boule noire lors des $k-1$ premiers tirages, puis la boule rouge au $k$-ième tirage. 

Les tirages étant effectués avec remise, les épreuves sont indépendantes. La probabilité de tirer la boule rouge (succès) est $p = \frac{1}{N}$ et celle de tirer une boule noire (échec) est $q = 1 - \frac{1}{N} = \frac{N-1}{N}$.

Par conséquent, pour tout $k \in \mathbb{N}^*$ :
$$\mathbb{P}(X = k) = \left(\frac{N-1}{N}\right)^{k-1} \frac{1}{N}$$

---

### Q2. Calcul de l'espérance de $X$
Question: ** Montrer que la variable aléatoire $X$ admet une espérance, et calculer sa valeur en fonction de $N$.
Correction: **
Par définition, une variable aléatoire à valeurs dans $\mathbb{N}^*$ admet une espérance si et seulement si la série numérique de terme général $k \mathbb{P}(X = k)$ est absolument convergente (donc convergente puisque les termes sont positifs).

Étudions la convergence de la série $\sum k \mathbb{P}(X = k)$ :
$$\sum_{k=1}^{+\infty} k \left(\frac{N-1}{N}\right)^{k-1} \frac{1}{N} = \frac{1}{N} \sum_{k=1}^{+\infty} k q^{k-1}$$
où l'on a posé $q = \frac{N-1}{N}$. Comme $N \ge 3$, on a $0 < q < \frac{2}{3} < 1$.

Il s'agit de la somme d'une série géométrique dérivée, dont on connaît la convergence et la somme :
$$\sum_{k=1}^{+\infty} k q^{k-1} = \frac{1}{(1-q)^2}$$

Ici, $1 - q = 1 - \frac{N-1}{N} = \frac{1}{N}$. Ainsi :
$$\sum_{k=1}^{+\infty} k q^{k-1} = \frac{1}{(1/N)^2} = N^2$$

Par conséquent, $X$ admet une espérance $\mathbb{E}(X)$ et :
$$\mathbb{E}(X) = \frac{1}{N} \times N^2 = N$$

---

## Partie II : Modification des règles du jeu et introduction d'une seconde variable

On modifie maintenant l'expérience. On suppose désormais $N \ge 4$. 

Le joueur tire une boule **sans remise** cette fois-ci dans l'urne initiale contenant $1$ boule rouge et $N-1$ boules noires. Le jeu s'arrête dès que la boule rouge est obtenue.
On note $Y$ la variable aléatoire égale au nombre de tirages nécessaires pour obtenir la boule rouge.

### Q3. Loi de la variable aléatoire $Y$
Question: ** Déterminer $Y(\Omega)$ et donner la loi de $Y$.
Correction: **
Puisqu'il y a $1$ boule rouge et $N-1$ boules noires, le nombre maximal de tirages sans remise avant d'obtenir à coup sûr la boule rouge est $N$. 
Ainsi :
$$Y(\Omega) = \{1, 2, \dots, N\}$$

Pour tout $k \in \{1, 2, \dots, N\}$, l'événement $\{Y = k\}$ correspond à l'obtention de $k-1$ boules noires lors des $k-1$ premiers tirages, puis de la boule rouge au $k$-ième tirage. 

Le nombre total de tirages ordonnés possibles de $k$ boules parmi $N$ est $A_N^k = \frac{N!}{(N-k)!}$.
Le nombre de tirages favorables ($k-1$ noires puis 1 rouge) est $\binom{N-1}{k-1} (k-1)! \times 1 = (N-1)...(N-k+1) = \frac{(N-1)!}{(N-k)!}$.

Par un dénombrement direct (ou par application des probabilités conditionnelles) :
$$\mathbb{P}(Y = k) = \frac{\frac{(N-1)!}{(N-k)!}}{\frac{N!}{(N-k)!}} = \frac{(N-1)!}{N!} = \frac{1}{N}$$

**Remarque remarquable :** La variable $Y$ suit une loi uniforme sur $\{1, 2, \dots, N\}$.

---

### Q4. Espérance de $Y$
Question: ** Calculer $\mathbb{E}(Y)$ en fonction de $N$. Retrouver ce résultat par un argument de symétrie ou de linéarité de l'espérance.
Correction: **
*Méthode directe par la définition :*
$$\mathbb{E}(Y) = \sum_{k=1}^{N} k \mathbb{P}(Y = k) = \sum_{k=1}^{N} k \frac{1}{N} = \frac{1}{N} \sum_{k=1}^{N} k = \frac{1}{N} \times \frac{N(N+1)}{2} = \frac{N+1}{2}$$

*Méthode par indicateurs (hors-programme explicite mais utile en MPSI) :*
On peut écrire $Y = \sum_{i=1}^{N} I_i$ où $I_i$ est l'indicateur de l'événement "la $i$-ième boule tirée n'est pas la rouge" (pour les $N-1$ premiers rangs) et 1 pour le dernier. Par symétrie, chaque position a la même probabilité $\frac{1}{N}$ d'être celle de la boule rouge, ce qui redonne immédiatement le résultat.

---

## Partie III : Synthèse et analyse critique

### Q5. Comparaison des comportements asymptotiques
Question: ** Comparez les espérances $\mathbb{E}(X)$ et $\mathbb{E}(Y)$ lorsque $N$ tend vers $+\infty$. Commenter ce résultat physique/intuitif.
Correction: **
*   Pour le tirage **avec remise** ($X$) : $\mathbb{E}(X) = N$.
*   Pour le tirage **sans remise** ($Y$) : $\mathbb{E}(Y) = \frac{N+1}{2} \sim_{+\infty} \frac{N}{2}$.

**Analyse critique :**
1. **Cohérence mathématique :** Lorsque $N$ est grand, $\frac{N+1}{2} < N$, ce qui est intuitivement correct : sans remise, l'urne s'appauvrit en boules noires, ce qui augmente mécaniquement la probabilité de tirer la boule rouge aux tirages ultérieurs par rapport au cas avec remise où la composition de l'urne reste constante.
2. **Ordre de grandeur :** Dans les deux cas, l'espérance est linéaire en $N$. Cependant, le tirage sans remise divise par deux (en moyenne) le nombre d'essais nécessaires, traduisant l'absence de "remise en jeu" des boules déjà éliminées. Le processus sans remise est donc doublement plus efficace pour atteindre la cible lorsque $N$ est grand.