---
title: 'Exercice 1 : Variables aléatoires discrètes'
description: 'Problème d entraînement type concours pour PSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $p \in ]0, 1[$. On considère une suite de lancers indépendants d'une pièce équilibrée ou non, amenant "Pile" avec la probabilité $p$ et "Face" avec la probabilité $q = 1-p$. 
Dans tout le problème, l'espace probabilisé sous-jacent est noté $(\Omega, \mathcal{A}, P)$.

On s'intéresse au comportement d'un joueur qui répète cette expérience aléatoire. L'objectif est d'étudier l'espérance et la variance de certaines variables aléatoires liées au temps d'attente d'une configuration particulière, ainsi que d'introduire des outils fondamentaux en analyse des probabilités discrètes (fonctions génératrices).

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Rappels préliminaires et loi géométrique**
   Soit $X$ la variable aléatoire représentant le rang du premier "Pile". 
   a) Déterminer l'ensemble des valeurs prises par $X$, noté $X(\Omega)$.
   b) Pour tout $k \in X(\Omega)$, calculer $P(X = k)$. Vérifier que $\sum_{k=1}^{+\infty} P(X = k) = 1$.
   c) Établir l'existence de l'espérance $E(X)$ et de la variance $V(X)$, puis calculer leurs valeurs en fonction de $p$.

2. **Temps d'attente pour l'apparition de deux succès consécutifs**
   On note $Y$ le rang d'apparition du **deuxième** "Pile" consécutif. Plus précisément, on note $S_k$ l'événement "on obtient Pile au $k$-ième lancer" et $F_k$ l'événement "on obtient Face au $k$-ième lancer".
   a) Exprimer l'événement $(Y = 2)$ à l'aide des événements $S_1$ et $S_2$. Calculer $P(Y = 2)$.
   b) En utilisant un système complet d'événements lié au premier lancer, établir une relation de récurrence ou une expression pour $P(Y = k)$ pour $k \ge 3$.
   c) Calculer explicitement $P(Y = 3)$, $P(Y = 4)$ et donner la formule générale de $P(Y = k)$ pour tout $k \ge 2$.

3. **Fonction génératrice et moments**
   On introduit la fonction génératrice de la variable $Y$, définie pour tout $t \in [-1, 1]$ par :
   $$G_Y(t) = \sum_{k=2}^{+\infty} P(Y = k) t^k$$
   a) Montrer que le rayon de convergence de cette série entière est au moins égal à $1$.
   b) À l'aide de la relation trouvée à la question 2, exprimer $G_Y(t)$ en fonction de $t$ et des paramètres $p$ et $q$.
   c) En déduire par dérivation l'espérance $E(Y)$. Retrouver ce résultat par un argument probabiliste direct (loi de composition).

4. **Analyse critique du modèle et limites**
   a) Que deviennent $E(X)$ et $E(Y)$ lorsque $p \to 0$ ? Comment interpréter ce résultat physique ou économique ?
   b) Le modèle de lancers indépendants est-il réaliste pour modéliser une suite de lancers réels ? Citer un biais possible.

---

### 💡 Pistes & Indications méthodologiques

- **Q1 :** Pensez à utiliser la formule de la somme d'une série géométrique dérivée pour le calcul de l'espérance et de la variance.
- **Q2 :** Pour $k \ge 3$, décomposez selon ce qui se passe au premier lancer ($S_1$ ou $F_1$). Si le premier est un Face ($F_1$), on décale le problème de 1. Si le premier est un Pile ($S_1$), le deuxième détermine tout de suite l'issue.
- **Q3 :** L'utilisation des séries entières permet de manipuler des sommes infinies sans intervertir des limites hasardeuses. Pensez à $G_Y(t) = \sum P(Y=k)t^k$.
- **Q4 :** Analysez la sensibilité des paramètres face à la dégénérescence du modèle ($p \to 0$).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Rappels préliminaires et loi géométrique
a) $X$ représente le rang du premier succès. Le premier succès peut théoriquement arriver au premier lancer, au deuxième, etc., sans limite théorique d'arrêt. Ainsi :
$$X(\Omega) = \mathbb{N}^*$$

b) Pour obtenir le premier succès au rang $k$, il faut essuyer $k-1$ échecs consécutifs suivis d'un succès :
$$\forall k \in \mathbb{N}^*, \quad P(X = k) = q^{k-1}p$$
Vérifions la sommation totale :
$$\sum_{k=1}^{+\infty} P(X = k) = p \sum_{k=1}^{+\infty} q^{k-1} = p \sum_{j=0}^{+\infty} q^j$$
Puisque $q = 1-p$ et $p \in ]0, 1[$, on a $|q| < 1$. La série géométrique converge et :
$$\sum_{k=1}^{+\infty} P(X = k) = p \times \frac{1}{1-q} = \frac{p}{p} = 1$$
La loi est donc bien un!("{}_\text{probalisée}$".

c) La variable $X$ admet une espérance si et seulement si la série $\sum k P(X=k)$ est absolument convergente.
$$\sum_{k=1}^{+\infty} k q^{k-1} p = p \frac{d}{dq}\left(\sum_{k=0}^{+\infty} q^k\right) = p \frac{d}{dq}\left(\frac{1}{1-q}\right) = p \frac{1}{(1-q)^2} = \frac{p}{p^2} = \frac{1}{p}$$
Donc $E(X) = \frac{1}{p}$. 
De même, pour le moment d'ordre 2, on calcule $E(X(X-1))$ par dérivation seconde, ce qui conduit après calcul classique à :
$$V(X) = \frac{1-p}{p^2} = \frac{q}{p^2}$$

#### 2. Temps d'attente pour l'apparition de deux succès consécutifs
a) L'événement $(Y = 2)$ signifie que l'on obtient un succès au premier et au deuxième lancer. Par indépendance :
$$P(Y = 2) = P(S_1 \cap S_2) = P(S_1)P(S_2) = p^2$$

b) Pour $k \ge 3$, formons un système complet d'événements avec le premier lancer $\{S_1, F_1\}$ :
- Si on obtient $F_1$ (probabilité $q$), il faut repartir de zéro, et il reste $k-1$ lancers pour obtenir deux succès consécutifs. La probabilité conditionnelle est donc $P(Y = k-1)$.
- Si on obtient $S_1$ (probabilité $p$), le deuxième lancer est décisif :
  - Si c'est $F_2$ (probabilité $q$), on a échoué à faire deux succès consécutifs au départ, et il reste $k-2$ lancers. La probabilité conditionnelle est $P(Y = k-2)$.
  - Si c'est $S_2$ (probabilité $p$), on a atteint l'objectif en 2 lancers. Comme $k \ge 3$, la probabilité d'atteindre l'objectif exactement en $k > 2$ lancers sachant $S_1 \cap S_2$ est nulle.

Par la formule des probabilités totales :
$$\forall k \ge 3, \quad P(Y = k) = q P(Y = k-1) + p q P(Y = k-2)$$

c) Calculons les premiers termes :
- Pour $k = 3$ : 
  $$P(Y = 3) = q P(Y = 2) + pq P(Y = 1)$$
  Or $P(Y = 1) = 0$ et $P(Y = 2) = p^2$. Donc :
  $$P(Y = 3) = q p^2$$
- Pour $k = 4$ :
  $$P(Y = 4) = q P(Y = 3) + pq P(Y = 2) = q(qp^2) + pq(p^2) = q^2 p^2 + p^3 q = pq^2 p + p^3 q \dots$$

#### 3. Fonction génératrice et moments
a) Les probabilités $P(Y = k)$ étant inférieures ou égales à $1$, le rayon de convergence de la série entière $\sum P(Y=k)t^k$ est supérieur ou égal à $1$ d'après le critère de d'Alembert ou par simple comparaison avec une série géométrique (car $P(Y=k) \le 1$).

b) Multiplions la relation de récurrence par $t^k$ pour $k \ge 3$ et sommons de $3$ à $+\infty$ :
$$\sum_{k=3}^{+\infty} P(Y=k)t^k = q \sum_{k=3}^{+\infty} P(Y=k-1)t^k + pq \sum_{k=3}^{+\infty} P(Y=k-2)t^k$$
En posant $G_Y(t) = \sum_{k=2}^{+\infty} P(Y=k)t^k = p^2 t^2 + \sum_{k=3}^{+\infty} P(Y=k)t^k$, on réécrit chaque morceau :
- $\sum_{k=3}^{+\infty} P(Y=k)t^k = G_Y(t) - p^2 t^2$
- $\sum_{k=3}^{+\infty} P(Y=k-1)t^k = qt [G_Y(t) - P(Y=2)t^2 ? \dots] = qt(G_Y(t) - p^2 t)$ (attention aux indices, posons $j=k-1$) :
  $$\sum_{j=2}^{+\infty} P(Y=j)t^{j+1} = qt G_Y(t)$$
- $\sum_{k=3}^{+\infty} P(Y=k-2)t^k = pt^2 G_Y(t)$

En regroupant les termes :
$$G_Y(t) - p^2 t^2 = qt G_Y(t) + pq t^2 G_Y(t)$$
$$G_Y(t) (1 - qt - pq t^2) = p^2 t^2$$
$$G_Y(t) = \frac{p^2 t^2}{1 - qt - pq t^2}$$

c) On sait que l'espérance s'obtient par $E(Y) = G_Y'(1)$ (sous réserve de dérivabilité en $1$, ou par limite lorsque $t \to 1^-$).
Dérivons $G_Y(t)$ :
$$G_Y'(t) = \frac{2p^2 t (1 - qt - pq t^2) - p^2 t^2 (-q - 2pq t)}{(1 - qt - pq t^2)^2}$$
Évaluons en $t = 1$ (remarquons que le dénominateur en $1$ vaut $1 - q - pq = p - pq = p(1-q) = p^2$) :
$$1 - q - pq = p(1-q) = p^2$$
Donc le dénominateur en $1$ vaut $(p^2)^2 = p^4$.
Pour le numérateur en $1$ :
$$2p^2(1 - q - pq) - p^2(-q - 2pq) = 2p^2(p^2) + p^2(q + 2pq) = 2p^4 + p^2 q(1 + 2p)$$
En remplaçant $q$ par $1-p$ :
$$E(Y) = \frac{2p^4 + p^2(1-p)(1+2p)}{p^4} = \frac{2p^4 + p^2(1 + p - 2p^2)}{p^4} = \frac{p^2(2p^2 + 1 + p - 2p^2)}{p^4} = \frac{1+p}{p^2}$$
Ainsi, $E(Y) = \frac{1+p}{p^2} = \frac{1}{p^2} + \frac{1}{p}$.

#### 4. Analyse critique du modèle et limites
a) Lorsque $p \to 0$ (la probabilité de succès devient infime), $E(X) \sim \frac{1}{p} \to +\infty$ et $E(Y) \sim \frac{1}{p^2} \to +\infty$. 
Physiquement, cela signifie que plus un événement est rare, plus il faut attendre longtemps en moyenne pour le voir se produire une fois, et encore plus longtemps pour en voir deux d'affilée. L'explosion quadratique pour $Y$ montre la difficulté combinatoire accrue des motifs consécutifs.

b) **Biais du modèle :** L'hypothèse fondamentale d'indépendance est rarement vérifiée dans le monde réel (ex: phénomènes de "hot hand" en sport, mémoire de la pièce, usure matérielle, non-stationnarité). Un modèle de chaîne de Markov à 2 états serait plus rigoureux pour modéliser une persistance.