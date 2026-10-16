---
title: 'Exercice 1 : Variables aléatoires discrètes et à densité'
description: 'Problème d entraînement type concours pour PC.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $(\Omega, \mathcal{A}, \mathbb{P})$ un espace probabilisé complet. On s'intéresse dans ce problème à un modèle hybride de durée de vie d'un système électronique composé d'un composant de commande (régie par une loi discrète) et d'un composant de puissance (régie par une loi à densité).

Pour tout le long du problème, on définit :
1. Une variable aléatoire discrète $N$ représentant le nombre d'impulsions subies par le système avant un premier incident mineur, suivant une loi géométrique de paramètre $p \in ]0, 1[$, notée $\mathcal{G}(p)$. Sa loi est donnée par :
   $$\forall n \in \mathbb{N}^*, \quad \mathbb{P}(N = n) = (1-p)^{n-1}p$$
2. Une variable aléatoire $X$ à densité, positive, représentant le temps de fonctionnement continu du composant de puissance jusqu'à défaillance majeure, suivant une loi exponentielle de paramètre $\lambda > 0$, notée $\mathcal{E}(\lambda)$. Sa densité est :
   $$\forall x \in \mathbb{R}, \quad f_X(x) = \lambda e^{-\lambda x} \mathbf{1}_{[0, +\infty[}(x)$$

On suppose que les variables $N$ et $X$ sont **indépendantes**.

Le gestionnaire du système s'intéresse à la variable aléatoire $Y$ définie par le temps effectif de bon fonctionnement avant l'arrêt total, modélisée par le produit $Y = N \cdot X$. L'objectif de ce problème est d'étudier la loi de $Y$, son espérance, sa variance, ainsi que d'analyser le comportement asymptotique de ce modèle lorsque le paramètre $p$ tend vers $0$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Rappels et préliminaires :** 
   Rappeler l'espérance et la variance de $N$ et de $X$. Justifier que $N$ et $X$ admettent des moments d'ordre $k$ pour tout $k \in \mathbb{N}^*$.
2. **Loi du produit et densité :** 
   Soit $y > 0$. Exprimer l'événement $\{Y \le y\}$ à l'aide de $N$ et $X$. En déduire, en utilisant la formule des probabilités totales, que $Y$ est une variable aléatoire à densité, et déterminer explicitement sa fonction de répartition $F_Y$ ainsi que sa densité $f_Y$.
3. **Moments de $Y$ :** 
   Étudier l'existence de l'espérance $\mathbb{E}(Y)$ et de la variance $\mathbb{V}(Y)$. Calculer $\mathbb{E}(Y)$ en fonction de $p$ et $\lambda$.
4. **Analyse asymptotique du modèle :** 
   On s'intéresse au régime où les impulsions deviennent extrêmement rares, c'est-à-dire $p \to 0^+$. 
   Déterminer un équivalent simple de $\mathbb{E}(Y)$ lorsque $p \to 0^+$. Comment se comporte la variabilité relative du système dans ce même régime ?
5. **Analyse critique du modèle :** 
   Le choix de modéliser le temps effectif par le produit $Y = N \cdot X$ sous l'hypothèse d'indépendance est-il physiquement réaliste ? Discuter des limites de ce modèle probabiliste.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Utilisez les formules usuelles des lois géométrique et exponentielle. Pour l'existence des moments, rappelez qu'une variable bornée ou à support dans $\mathbb{N}$ ou $\mathbb{R}^+$ admet des moments si la série ou l'intégrale converge (ce qui est toujours le cas pour ces lois usuelles).
* **Question 2 :** Exprimez $\mathbb{P}(Y \le y)$ en conditionnant par rapport à la variable discrète $N = n$. Utilisez l'indépendance entre $N$ et $X$. Intervertissez sommation et intégration (ou probabilité) en justifiant la convergence absolue.
* **Question 3 :** Utilisez le théorème de transfert ou l'intégration de la densité pour calculer $\mathbb{E}(Y)$ et $\mathbb{E}(Y^2)$. Pensez à permuter série et intégrale (ou espérance) via le théorème de Fubini-Tonelli pour les séries à termes positifs.
* **Question 4 :** Faites un développement limité ou un équivalent classique de $\frac{1-p}{p}$ lorsque $p \to 0$. Pour la variabilité relative, étudiez le coefficient de variation $\frac{\sigma(Y)}{\mathbb{E}(Y)}$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Rappels et préliminaires
* **Pour la variable $N \sim \mathcal{G}(p)$ :**
  $$\mathbb{E}(N) = \frac{1}{p} \quad \text{et} \quad \mathbb{V}(N) = \frac{1-p}{p^2}$$
  Puisque $N$ prend ses valeurs dans $\mathbb{N}^*$, pour tout $k \in \mathbb{N}^*$, $\mathbb{E}(N^k) = \sum_{n=1}^{+\infty} n^k (1-p)^{n-1} p$. Cette série converge absolument car le terme général croît géométriquement moins vite que $(1-\epsilon)^{-n}$ avec $1-p < 1$.
* **Pour la variable $X \sim \mathcal{E}(\lambda)$ :**
  $$\mathbb{E}(X) = \frac{1}{\lambda} \quad \text{et} \quad \mathbb{V}(X) = \frac{1}{\lambda^2}$$
  Pour tout $k \in \mathbb{N}^*$, $\mathbb{E}(X^k) = \int_{0}^{+\infty} x^k \lambda e^{-\lambda x} \, \mathrm{d}x = \frac{k!}{\lambda^k}$ (par convergence des intégrales de Gamma).

#### 2. Loi du produit et densité
Soit $y > 0$. Par définition, $Y = N \cdot X$. Comme $N \ge 1$ et $X \ge 0$, on a $Y \ge 0$.
Pour $y \le 0$, $\mathbb{P}(Y \le y) = 0$.
Pour $y > 0$ :
$$\mathbb{P}(Y \le y) = \mathbb{P}(NX \le y) = \sum_{n=1}^{+\infty} \mathbb{P}(nX \le y \text{ et } N = n)$$
Par indépendance de $N$ et $X$ :
$$\mathbb{P}(Y \le y) = \sum_{n=1}^{+\infty} \mathbb{P}(X \le \frac{y}{n}) \mathbb{P}(N = n)$$
Sachant que $\mathbb{P}(X \le \frac{y}{n}) = 1 - e^{-\frac{\lambda y}{n}}$ pour $\frac{y}{n} \ge 0$, et $0$ sinon (mais ici $y>0$ et $n \ge 1$), on a :
$$F_Y(y) = \sum_{n=1}^{+\infty} \left(1 - e^{-\frac{\lambda y}{n}}\right) (1-p)^{n-1} p$$
Par linéarité et sommation de la série géométrique $\sum_{n=1}^{+\infty} (1-p)^{n-1} p = 1$ :
$$F_Y(y) = 1 - \sum_{n=1}^{+\infty} e^{-\frac{\lambda y}{n}} (1-p)^{n-1} p$$
La fonction $F_Y$ est continue sur $\mathbb{R}$, de classe $\mathcal{C}^1$ sur $]0, +\infty[$ (par dérivation terme à terme d'une série de fonctions normalement convergente sur tout compact de $]0, +\infty[$). Par conséquent, $Y$ admet une densité $f_Y$ obtenue en dérivant $F_Y(y)$ pour $y > 0$ :
$$f_Y(y) = F_Y'(y) = \sum_{n=1}^{+\infty} \frac{\lambda}{n} e^{-\frac{\lambda y}{n}} (1-p)^{n-1} p \quad \text{si } y > 0$$
Et $f_Y(y) = 0$ si $y \le 0$.

#### 3. Moments de $Y$
Puisque $N$ et $X$ sont indépendantes et admettent des moments de tout ordre, $Y = NX$ admet des moments de tout ordre, en particulier :
$$\mathbb{E}(Y) = \mathbb{E}(N \cdot X) = \mathbb{E}(N) \cdot \mathbb{E}(X)$$
En remplaçant par les espérances respectives :
$$\mathbb{E}(Y) = \frac{1}{p} \times \frac{1}{\lambda} = \frac{1}{p\lambda}$$

De même, pour le moment d'ordre 2 :
$$\mathbb{E}(Y^2) = \mathbb{E}(N^2 X^2) = \mathbb{E}(N^2) \cdot \mathbb{E}(X^2)$$
On calcule $\mathbb{E}(N^2) = \mathbb{V}(N) + (\mathbb{E}(N))^2 = \frac{1-p}{p^2} + \frac{1}{p^2} = \frac{2-p}{p^2}$, et $\mathbb{E}(X^2) = \frac{2}{\lambda^2}$.
Ainsi :
$$\mathbb{E}(Y^2) = \frac{2-p}{p^2} \times \frac{2}{\lambda^2} = \frac{2(2-p)}{p^2 \lambda^2}$$
La variance de $Y$ vaut alors :
$$\mathbb{V}(Y) = \mathbb{E}(Y^2) - (\mathbb{E}(Y))^2 = \frac{4 - 2p}{p^2 \lambda^2} - \frac{1}{p^2 \lambda^2} = \frac{3 - 2p}{p^2 \lambda^2}$$

#### 4. Analyse asymptotique du modèle
Lorsque $p \to 0^+$ (impulsions extrêmement rares) :
* L'espérance devient :
  $$\mathbb{E}(Y) \underset{p \to 0^+}{\sim} \frac{1}{\lambda p} \to +\infty$$
* Étudions le coefficient de variation $CV(Y) = \frac{\sigma(Y)}{\mathbb{E}(Y)}$ :
  $$\sigma(Y) = \sqrt{\mathbb{V}(Y)} = \frac{\sqrt{3-2p}}{p\lambda}$$
  $$CV(Y) = \frac{\frac{\sqrt{3-2p}}{p\lambda}}{\frac{1}{p\lambda}} = \sqrt{3-2p} \underset{p \to 0^+}{\to} \sqrt{3}$$
  Le coefficient de variation reste constant (proche de $\sqrt{3}$) lorsque $p$ devient petit. Cela signifie que la dispersion relative autour de la moyenne reste du même ordre de grandeur que la moyenne elle-même : le système conserve une incertitude relative importante malgré l'accroissement de la durée de vie moyenne.

#### 5. Analyse critique du modèle
* **Réalisme physique :** Le modèle pose $Y = N \cdot X$. Cela suppose que chaque impulsion multiplie linéairement ou réinitialise l'échelle du temps de défaillance du composant de puissance. En pratique, les processus de dégradation (vieillissement thermique, fatigue des matériaux) sont souvent cumulatifs ou additifs (modèles de type contrainte-résistance ou processus stochastiques continus comme les processus de gamma ou de Wiener), et non multiplicativement découplés par une variable géométrique indépendante.
* **Hypothèse d'indépendance :** L'indépendance entre $N$ (le nombre d'impulsions) et $X$ (le temps de résistance unitaire) est mathématiquement commode mais physiquement fragile : un système subissant des impulsions fréquentes ou intenses a tendance à voir son composant de puissance s'user plus rapidement, brisant ainsi l'indépendance.