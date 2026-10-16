---
title: 'Exercice 2 : Variables aléatoires discrètes, espérance et variance'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $n \in \mathbb{N}^*$ avec $n \ge 2$. On considère une urne contenant $n$ boules numérotées de $1$ à $n$. On effectue des tirages successifs de boules de cette urne selon un protocole que l'on précisera au fil du problème. L'objectif est d'étudier le comportement probabiliste du nombre de tirages nécessaires pour observer certains évènements, ainsi que d'analyser des stratégies d'arrêt optimales, inspirées des problèmes d'exploration séquentielle en recherche opérationnelle.

On munit l'univers des possibles $\Omega$ d'une structure d'espace probabilisé fini $(\Omega, \mathcal{P}(\Omega), P)$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Modélisation préliminaire :** On tire simultanément $k$ boules de l'urne ($1 \le k \le n$). Soit $X$ la variable aléatoire égale au plus grand numéro tiré. Déterminer la loi de $X$.
2. **Espérance de $X$ :** En utilisant la formule des espérances par les queues de distribution (ou tout autre méthode rigoureuse), calculer l'espérance de $X$, notée $E[X]$.
3. **Tirages avec remise :** On procède désormais à des tirages successifs **avec remise**. Soit $Y_N$ le nombre de tirages nécessaires pour obtenir pour la première fois la boule numéro $n$. 
   - Préciser l'univers $\Omega_Y$ associé et la loi de $Y_N$.
   - Calculer l'espérance et la variance de $Y_N$.
4. **Tirages sans remise et paradoxe de l'arrêt :** On procède à des tirages successifs **sans remise** jusqu'à obtenir la boule numéro $n$. Soit $Z$ le nombre total de tirages effectués.
   - Quelle est la loi de $Z$ ? Calculer $E[Z]$.
5. **Analyse critique et prospective du modèle :** Supposons que chaque tirage (avec ou sans remise) ait un coût fixe $c > 0$ et que la découverte de la boule $n$ rapporte un gain fixe $G > 0$. Discuter de la pertinence du modèle sans remise lorsque $n$ devient très grand ($n \to +\infty$), notamment vis-à-vis des hypothèses d'équiprobabilité et d'indépendance implicites.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pour calculer $P(X = i)$, dénombrez le nombre de parties de cardinal $k$ incluses dans $\{1, \dots, i\}$ et contenant l'élément $i$.
* **Question 2 :** Pensez à l'identité utile pour une variable à valeurs dans $\llbracket 1, n \rrbracket$ : $E[X] = \sum_{j=1}^n P(X \ge j)$.
* **Question 3 & 4 :** Reconnaissez des lois usuelles (loi géométrique, loi uniforme sur $\llbracket 1, n \rrbracket$). Pour la variance d'une loi géométrique, l'utilisation de la dérivée de séries géométriques est de rigueur.
* **Question 5 :** Analysez l'évolution du rapport coût/bénéfice espéré et la limite de la modélisation discrète face à l'épuisement de la ressource.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Loi de la variable aléatoire $X$ (Tirage simultané)
Le nombre total de tirages simultanés de $k$ boules parmi $n$ est donné par le coefficient binomial $\binom{n}{k}$. L'univers $\Omega$ est muni de la probabilité uniforme.
Pour qu'évidemment le plus grand numéro tiré soit $i$ (avec $k \le i \le n$), il faut et il suffit de tirer la boule $n^\circ i$ (1 choix) et de choisir les $k-1$ autres boules parmi les $i-1$ boules restantes numérotées de $1$ à $i-1$. 
Le nombre de tirages favorables est donc $\binom{i-1}{k-1}$.
Ainsi, pour tout $i \in \llbracket k, n \rrbracket$ :
$$P(X = i) = \frac{\binom{i-1}{k-1}}{\binom{n}{k}}$$
Et $P(X = i) = 0$ si $i < k$.

#### 2. Calcul de l'espérance de $X$
Utilisons la formule des espérances pour une variable aléatoire à valeurs dans $\llbracket k, n \rrbracket$ :
$$E[X] = \sum_{i=k}^{n} i \cdot P(X = i) = \frac{1}{\binom{n}{k}} \sum_{i=k}^{n} i \binom{i-1}{k-1}$$
Rappelons l'identité combinatoire $i \binom{i-1}{k-1} = k \binom{i}{k}$. En effet :
$$k \binom{i}{k} = k \frac{i!}{k!(i-k)!} = i \frac{(i-1)!}{(k-1)!( (i-1)-(k-1) )!} = i \binom{i-1}{k-1}$$
Par conséquent :
$$E[X] = \frac{k}{\binom{n}{k}} \sum_{i=k}^{n} \binom{i}{k}$$
En utilisant l'identité de crosse de hockey $\sum_{i=k}^{n} \binom{i}{k} = \binom{n+1}{k+1}$, on obtient :
$$E[X] = \frac{k}{\binom{n}{k}} \binom{n+1}{k+1} = \frac{k \cdot \frac{(n+1)!}{(k+1)!(n-k)!}}{\frac{n!}{k!(n-k)!}} = \frac{k \cdot (n+1)! \cdot k!(n-k)!}{(k+1)! \cdot n! \cdot (n-k)!} = \frac{k(n+1)}{k+1}$$
Ainsi :
$$E[X] = \frac{k(n+1)}{k+1}$$

#### 3. Tirages avec remise
- **Loi de $Y_N$ :** À chaque tirage, la probabilité de tirer la boule $n$ est $p = \frac{1}{n}$. Les tirages étant indépendants (remise), la variable $Y_N$ suit une **loi géométrique** de paramètre $p = \frac{1}{n}$, décalée à $\mathbb{N}^*$. 
  Pour tout $k \in \mathbb{N}^*$ :
  $$P(Y_N = k) = \left(1 - \frac{1}{n}\right)^{k-1} \frac{1}{n}$$
- **Espérance et variance :** 
  D'après le cours sur la loi géométrique :
  $$E[Y_N] = \frac{1}{p} = n$$
  $$V(Y_N) = \frac{1-p}{p^2} = \frac{1 - \frac{1}{n}}{\frac{1}{n^2}} = n(n-1)$$

#### 4. Tirages sans remise
- **Loi de $Z$ :** On tire sans remise jusqu'à obtenir la boule $n$. Par un argument de symétrie ou d'équiprobabilité sur l'ordre d'apparition des boules, toutes les positions de la boule $n$ dans une permutation des $n$ boules sont équiprobables. La variable $Z$ (le rang d'apparition de la boule $n$) suit donc une **loi uniforme sur $\llbracket 1, n \rrbracket$**.
  Pour tout $k \in \llbracket 1, n \rrbracket$ :
  $$P(Z = k) = \frac{1}{n}$$
- **Espérance de $Z$ :**
  $$E[Z] = \sum_{k=1}^n k \cdot \frac{1}{n} = \frac{1}{n} \frac{n(n+1)}{2} = \frac{n+1}{2}$$

#### 5. Analyse critique et prospective du modèle
* **Analyse du coût/bénéfice :** Le coût espéré de l'opération dans le cas sans remise est $C_{\text{sans}} = c \cdot E[Z] = c \frac{n+1}{2}$. Dans le cas avec remise, il est $C_{\text{avec}} = c \cdot E[Y_N] = c \cdot n$. Le modèle sans remise est donc nettement plus efficace en moyenne ($n/2$ vs $n$).
* **Limites pour $n \to +\infty$ :** 
  1. *Hypothèse d'équiprobabilité physique :* Si $n$ est extrêmement grand (ex: $n = 10^9$), l'hypothèse selon laquelle chaque boule a exactement la même probabilité d'être tirée est mise à défaut par les imperfections macroscopiques de l'urne et des boules (usure, poids, aérodynamisme).
  2. *Coût d'exploration :* Le coût linéaire $c$ devient irréaliste si l'espace des états est vaste ; on introduit généralement un coût marginal croissant ou un coût d'opportunité. Le modèle discret montre ici sa limite face aux processus continus (type mouvement brownien géométrique ou sondages séquentiels).