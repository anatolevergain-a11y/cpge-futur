---
title: 'Exercice 2 : Fonctions de répartition et densités'
description: 'Problème d entraînement type concours officiel.'
---

# Problème : Étude d'une famille de lois à densité et analyse critique de modélisation

*Matière : Mathématiques — Filière : MP*  
Chapitre: Variables aléatoires à densité, Fonctions de répartition et densités*

---

## Énoncé

Soit $\alpha$ un paramètre réel strictement positif. On considère la fonction $f_\alpha$ définie sur $\mathbb{R}$ par :
$$f_\alpha(x) = \begin{cases} 
\frac{\alpha}{x^{\alpha+1}} & \text{si } x \ge 1, \\
0 & \text{si } x < 1.
\end{cases}$$

L'objectif de ce problème est de vérifier qu'il s'agit d'une densité de probabilité, d'étudier les moments associés (espérance, variance) selon les valeurs de $\alpha$, et de proposer une modélisation probabiliste dont on analysera rigoureusement les limites physiques et conceptuelles.

---

## Questions

1. **Vérification de la densité :**
   a) Montrer que $f_\alpha$ est positive et continue par morceaux sur $\mathbb{R}$.
   b) Pour quelles valeurs de $\alpha$ la fonction $f_\alpha$ est-elle une densité de probabilité ? On posera désormais que $\alpha$ vérifie cette condition.

2. **Fonction de répartition :**
   Déterminer explicitement la fonction de répartition $F_\alpha$ d'une variable aléatoire $X$ admettant $f_\alpha$ pour densité.

3. **Étude des moments :**
   Soit $r$ un nombre réel strictement positif. On considère le moment d'ordre $r$ défini par l'existence de l'intégrale $\int_{-\infty}^{+\infty} |x|^r f_\alpha(x) \, dx$.
   a) Pour quelles valeurs de $\alpha$ (en fonction de $r$) le moment d'ordre $r$ existe-t-il ?
   b) En déduire les conditions d'existence de l'espérance $\mathbb{E}(X)$ et de la variance $\mathbb{V}(X)$ de $X$. Calculer $\mathbb{E}(X)$ lorsqu'elle existe.

4. **Analyse critique et limites du modèle :**
   *Ce type de loi (souvent appelé loi de Pareto) est fréquemment utilisé en économie pour modéliser la répartition des revenus ou en infographie pour la taille des fichiers.*
   a) Discuter du comportement de la queue de distribution lorsque $x \to +\infty$. Qu'en déduit-on quant à la probabilité d'observer des événements "extrêmes" comparé à une loi gaussienne ?
   b) Critiquer l'hypothèse sous-jacente de ce modèle mathématique appliqué à des données réelles (ex: salaires dans une population ou tailles de villes). Quelles sont les limites inhérentes à l'idéalisation mathématique du support $\lceil 1, +\infty \lceil$ et du comportement asymptotique ?

---

## Pistes et indications

1. **Q1 :** S'assurer que l'intégrale impropre $\int_1^{^{+\infty}} \frac{\alpha}{x^{\alpha+1}} \, dx$ converge et vaut $1$.
2. **Q2 :** Utiliser la définition $F_\alpha(x) = \int_{-\infty}^x f_\alpha(t) \, dt$ en distinguant les cas $x < 1$ et $x \ge 1$.
3. **Q3 :** Ramener l'étude de l'intégrale $\int_1^{+\infty} \frac{x^r}{x^{\alpha+1}} \, dx = \int_1^{+\infty} \frac{1}{x^{\alpha+1-r}} \, dx$ à l'aide des intégrales de Riemann.
4. **Q4 :** Comparer la décroissance en $O(x^{-(\alpha+1)})$ avec la décroissance exponentielle d'une loi normale. Réfléchir à la pertinence physique d'une borne inférieure stricte ($1$) et à l'absence de majoration des valeurs possibles.

---

## Corrigé

### 1. Vérification de la densité
a) Par construction, pour tout $x \in \mathbb{R}$, $f_\alpha(x) \ge 0$ puisque $\alpha > 0$. De plus, $f_\alpha$ est nulle sur $]-\infty, 1[$ et sur $]1, +\infty[$ et y est continue. Elle est donc continue par morceaux sur $\mathbb{R}$.

b) Calculons l'intégrale de $f_\alpha$ sur $\mathbb{R}$ :
$$\int_{-\infty}^{+\infty} f_\alpha(x) \, dx = \int_1^{^{+\infty}} \frac{\alpha}{x^{\alpha+1}} \, dx$$
Il s'agit d'une intégrale de Riemann généralisée en $+\infty$. Elle converge si et seulement si $\alpha + 1 > 1$, c'est-à-dire **$\alpha > 0$**. (Ce qui est l'hypothèse de départ).
Calculons sa valeur pour $\alpha > 0$ :
$$\int_1^{^{+\infty}} \frac{\alpha}{x^{\alpha+1}} \, dx = \lim_{M \to +\infty} \left[ -\frac{1}{x^\alpha} \right]_1^M = \lim_{M \to +\infty} \left( 1 - \frac{1}{M^\alpha} \right) = 1$$
Puisque $f_\alpha \ge 0$ et $\int_{-\infty}^{+\infty} f_\alpha(x) \, dx = 1$, **$f_\alpha$ est bien une densité de probabilité pour tout $\alpha > 0$**.

---

### 2. Fonction de répartition
Soit $X$ une variable aléatoire de densité $f_\alpha$. Par définition, sa fonction de répartition $F_\alpha$ est donnée par $F_\alpha(x) = \mathbb{T}(X \le x) = \int_{-\infty}^x f_\alpha(t) \, dt$.

* Si $x < 1$ : $F_\alpha(x) = \int_{-\infty}^x 0 \, dt = 0$.
* Si $x \ge 1$ : 
  $$F_\alpha(x) = \int_{-\infty}^1 0 \, dt + \int_1^x \frac{\alpha}{t^{\alpha+1}} \, dt = \left[ -\frac{1}{t^\alpha} \right]_1^x = 1 - \frac{1}{x^\alpha}$$

Ainsi :
$$F_\alpha(x) = \begin{cases} 
0 & \text{si } x < 1, \\
1 - \frac{1}{x^\alpha} & \text{si } x \ge 1.
\end{cases}$$

---

### 3. Étude des moments
a) Le moment d'ordre $r$ ($r > 0$) existe si et seulement si l'intégrale $\int_1^{^{+\infty}} x^r \frac{\alpha}{x^{\alpha+1}} \, dx$ converge absolument, ce qui équivaut à la convergence de :
$$\int_1^{^{+\infty}} \frac{\alpha}{x^{\alpha+1-r}} \, dx$$
D'après le cours sur les intégrales de Riemann, cette intégrale converge si et seulement si l'exposant est strictement supérieur à $1$, soit $\alpha + 1 - r > 1$, ce qui équivaut à **$\alpha > r$**.

b) 
* **Espérance ($\mathbf{r=1}$) :** L'espérance existe si et seulement si $\alpha > 1$. 
  Si $\alpha > 1$, on a :
  $$\mathbb{E}(X) = \int_1^{^{+\infty}} x \frac{\alpha}{x^{\alpha+1}} \, dx = \alpha \int_1^{^{+\infty}} \frac{1}{x^\alpha} \, dx = \alpha \left[ \frac{x^{1-\alpha}}{1-\alpha} \right]_1^{^{+\infty}} = \frac{\alpha}{\alpha - 1}$$
* **Variance ($\mathbf{r=2}$) :** La variance existe si et seulement si $\mathbb{E}(X^2)$ existe, c'est-à-dire si **$\alpha > 2$**. 
  (Si $\alpha \le 1$, l'espérance n'existe pas ; si $1 < \alpha \le 2$, l'espérance existe mais la variance est infinie).

---

### 4. Analyse critique et limites du modèle

a) **Comportement de la queue de distribution :**  
La densité décroit en puissance : $f_\alpha(x) \underset{x \to +\infty}{\sim} \frac{\alpha}{x^{\alpha+1}}$. C'est une décroissance *polynomiale*. 
En comparaison, une loi gaussienne possède une queue de distribution en $e^{-x^2/2}$ (décroissance *exponentielle*). 
Conséquence : Les événements extrêmement grands (les "queues lourdes" ou *heavy tails*) ont une probabilité bien plus élevée de se produire sous une loi de Pareto que sous une loi normale. Les valeurs aberrantes ne sont pas des exceptions rarissimes, elles font structurellement partie du modèle.

b) **Limites épistémologiques et physiques du modèle :**
1. **L'asymétrie et la borne inférieure :** Poser un support débutant strictement à $1$ (ou $x_0 > 0$) implique qu'aucun individu ne peut avoir une valeur nulle ou négative. Si ce modèle s'applique aux salaires, il néglige totalement le chômage, le travail non rémunéré ou l'endettement négatif. Mathématiquement, la discontinuité brutale de la densité en $x=1$ est une idéalisation forte absente de la nature.
2. **L'infinité des moments pour de petits $\alpha$ :** Si $\alpha \in ]1, 2]$, le modèle prédit une espérance mathématique finie, mais une variance infinie. En pratique, sur un échantillon empirique fini de $N$ observations, on calculera toujours une variance empirique finie. Le modèle théorique prédit donc un comportement asymptotique (fluctuations géantes de la moyenne empirique) difficilement observable ou mesurable dans des conditions expérimentales finies, créant un décalage entre la théorie et la métrologie.
3. **L'immensité non bornée :** Le support théorique est $[1, +\infty[$. Dans le monde réel, les ressources physiques, le temps ou la taille de la population humaine imposent de facto des bornes supérieures (par exemple, le PIB mondial ou la richesse maximale possédée par un individu ne peuvent tendre vers l'infini). La loi de Pareto surestime donc la probabilité d'observer des valeurs infiniment grandes dans les régimes macroéconomiques ou physiques réels.