---
title: 'Exercice 1 : Familles sommables de nombres réels et complexes'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $I$ un ensemble quelconque (fini ou infini). On considère une famille de nombres complexes $(x_i)_{i \in I}$. L'objectif de ce problème est d'étudier la notion de famille sommable, d'établir ses propriétés fondamentales (linéarité, positivité, associativité, théorème de Fubini discret) et d'appliquer ces outils à l'étude de séries doubles et de lois de probabilités discrètes.

On rappelle qu'une famille $(x_i)_{i \in I} \in \mathbb{C}^I$ est dite **sommable** s'il existe un nombre complexe $S$ tel que, pour tout $\varepsilon > 0$, il existe une partie finie $J_0 \subset I$ telle que pour toute partie finie $J$ contenant $J_0$, on ait :
$$\left| S - \sum_{i \in J} x_i \right| \leq \varepsilon$$
Dans ce cas, le nombre $S$ est unique et est noté $\sum_{i \in I} x_i$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Caractérisation par les parties positives et négatives (cas réel)**
   Soit $(a_i)_{i \in I}$ une famille de nombres réels positifs ou nuls. On pose pour tout $J \subset I$ fini :
   $$S_J = \sum_{i \in J} a_i$$
   Montrer que la famille $(a_i)_{i \in I}$ est sommable si et seulement si l'ensemble des sommes partielles $\{S_J \mid J \subset I, J \text{ fini}\}$ est majoré. Que vaut alors la somme de la famille dans le cas contraire ?

2. **Sommabilité des familles complexes**
   Soit $(x_i)_{i \in I}$ une famille de nombres complexes. Montrer que $(x_i)_{i \in I}$ est sommable si et seulement si les familles de nombres réels positifs $(\text{Re}(x_i)^+)_{i \in I}$, $(\text{Re}(x_i)^-)_{i \in I}$, $(\text{Im}(x_i)^+)_{i \in I}$ et $(\text{Im}(x_i)^-)_{i \in I}$ le sont.

3. **Lien avec la convergence absolue**
   Soit $(x_n)_{n \in \mathbb{N}}$ une famille indexée par $\mathbb{N}$. 
   - a) Montrer que la famille $(x_n)_{n \in \mathbb{N}}$ est sommable si et seulement si la série numérique $\sum x_n$ est absolument convergente.
   - b) En déduire que la sommabilité est une notion insensible à toute bijection de l'ensemble d'indexation (réarrangement inconditionnel).

4. **Théorème de Fubini discret**
   Soient $I$ et $J$ deux ensembles, et $(z_{i,j})_{(i,j) \in I \times J}$ une famille complexe sommable. 
   Montrer que pour tout $i \in I$, la famille $(z_{i,j})_{j \in J}$ est sommable, que la famille $\left(\sum_{j \in J} z_{i,j}\right)_{i \in I}$ est sommable, et que :
   $$\sum_{(i,j) \in I \times J} z_{i,j} = \sum_{i \in I} \left( \sum_{j \in J} z_{i,j} \right) = \sum_{j \in J} \left( \sum_{i \in I} z_{i,j} \right)$$

5. **Application aux probabilités discrètes et analyse critique**
   Soit $\Omega = \mathbb{N}^*$. On considère une variable aléatoire $X$ à valeurs dans $\Omega$ dont la loi est donnée par $\mathbb{P}(X = n) = p_n$.
   - a) Justifier que la famille $(p_n)_{n \in \mathbb{N}^*}$ est sommable et que $\sum_{n=1}^{+\infty} p_n = 1$.
   - b) On définit le moment d'ordre $r > 0$ par l'existence et la finitude de $\sum_{n=1}^{+\infty} n^r p_n$. Supposons que $p_n \sim \frac{C}{n^\alpha}$ lorsque $n \to +\infty$ (avec $C > 0$ et $\alpha \in \mathbb{R}$). Discuter selon les valeurs de $\alpha$ de l'existence de l'espérance $\mathbb{E}[X]$ et de la variance $\mathbb{V}(X)$.
   - c) **Analyse critique du modèle :** Si $\alpha \in (1, 2]$, l'espérance existe mais pas la variance. Quel est l'impact de ce phénomène sur la modélisation de phénomènes réels (par exemple, en finance ou en physique statistique) ?

---

### 💡 Pistes & Indications méthodologiques

- Pour la **Question 1**, utiliser la borne supérieure (sup) dans $\mathbb{R}$ des sommes partielles, qui existe par la propriété de la borne supérieure.
- Pour la **Question 2**, décomposer $x_i = \text{Re}(x_i) + i\,\text{Im}(x_i)$, puis utiliser $\text{Re}(x_i) = \text{Re}(x_i)^+ - \text{Re}(x_i)^-$.
- Pour la **Question 3**, relier les sommes sur les parties finies de $\mathbb{N}$ et les sommes partielles de la série $\sum |x_n|$.
- Pour la **Question 4**, utiliser l'approximation des sommes sur $I \times J$ par des produits de parties finies de $I$ et $J$.
- Pour la **Question 5**, s'appuyer sur le théorème de transfert et la définition de la convergence des séries à termes positifs.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Caractérisation par les parties positives et négatives (cas réel)
Supposons l'ensemble $M = \{S_J \mid J \subset I, J \text{ fini}\}$ majoré dans $\mathbb{R}$. Par l'axiome de la borne supérieure, $S = \sup M$ existe dans $\mathbb{R}$. 
Soit $\varepsilon > 0$. Par définition de la borne supérieure, il existe une partie finie $J_0 \subset I$ telle que :
$$S - \varepsilon < S_{J_0} \le S$$
Soit $J$ une partie finie de $I$ contenant $J_0$. Comme les $a_i$ sont positifs ou nuls, la fonction $J \mapsto S_J$ est croissante pour l'inclusion, donc $S_{J_0} \le S_J \le S$. 
Il vient :
$$0 \le S - S_J \le S - S_{J_0} < \varepsilon \implies |S - S_J| < \varepsilon$$
La famille est donc sommable de somme $S$.
Réciproquement, si $(a_i)_{i \in I}$ est sommable de somme $S$, il existe $J_0$ fini tel que pour tout $J \supset J_0$, $|S - S_J| \le 1$, ce qui implique $S_J \le |S| + 1$. Pour un $J$ quelconque fini, on pose $J' = J \cup J_0$ qui est fini, et $S_J \le S_{J'} \le |S| + 1$. L'ensemble $M$ est donc majoré par $|S| + 1$.

#### 2. Sommabilité des familles complexes
Une famille complexe $(x_i)_{i \in I}$ est sommable si et seulement si sa partie réelle et sa partie imaginaire le sont. 
Pour une famille réelle $(u_i)_{i \in I}$, on pose $u_i^+ = \max(0, u_i)$ et $u_i^- = \max(0, -u_i)$, de sorte que $u_i = u_i^+ - u_i^-$ et $|u_i| = u_i^+ + u_i^-$.
Une famille réelle est sommable si et seulement si les familles de termes positifs $(u_i^+)$ et $(u_i^-)$ le sont (car $S_J(u) = S_J(u^+) - S_J(u^-)$ et les sommes partielles de familles positives sont croissantes). 
Puisque $|x_i| \le |\text{Re}(x_i)| + |\text{Im}(x_i)| \le \text{Re}(x_i)^+ + \text{Re}(x_i)^- + \text{Im}(x_i)^+ + \text{Im}(x_i)^-$, la sommabilité des quatre familles positives équivaut à la sommabilité de la famille $(|x_i|)_{i \in I}$, ce qui caractérise la sommabilité dans $\mathbb{C}$.

#### 3. Lien avec la convergence absolue
- **a)** Si $(x_n)_{n \in \mathbb{N}}$ est sommable, la suite des sommes partielles $\left(\sum_{n=0}^{N} |x_n|\right)_{N \in \mathbb{N}}$ est majorée (car associée à une famille sommable de réels positifs), donc la série $\sum x_n$ est absolument convergente. Réciproquement, si $\sum |x_nหุ้น|$ converge, les sommes partielles sur les parties finies de $\mathbb{N}$ sont majorées par la somme de la série, ce qui assure la sommabilité.
- **b)** Soit $\sigma : \mathbb{N} \to \mathbb{N}$ une bijection. Pour toute partie finie $J \subset \mathbb{N}$, il existe $N$ tel que $\sigma(\{0, \dots, N\}) \supset J$. L'invariance par réarrangement découle directement de la caractérisation par les sommes sur les parties finies et de la commutativité dans $\mathbb{C}$.

#### 4. Théorème de Fubini discret
Soit $(z_{i,j})_{(i,j) \in I \times J}$ une famille sommable. Pour tout $i \in I$, la famille $(z_{i,j})_{j \in J}$ est sommable par minoration des sommes partielles par le même type d'argument de majoration des familles de modules. 
En considérant des pavés finis $I_0 \times J_0 \subset I \times J$, on montre par passage à la limite sur les partitions de l'espace produit que l'ordre de sommation n'altère pas la somme totale :
$$\sum_{(i,j) \in I \times J} z_{i,j} = \sum_{i \in I} \left( \sum_{j \in J} z_{i,j} \right) = \sum_{j \in J} \left( \sum_{i \in I} z_{i,j} \right)$$

#### 5. Application aux probabilités discrètes et analyse critique
- **a)** Les probabilités $p_n = \mathbb{P}(X=n)$ sont positives. La famille $(p_n)_{n \ge 1}$ est sommable si et seulement si la série $\sum p_n$ converge. Comme $\sum_{n=1}^N p_n = \mathbb{P}(X \in \{1, \dots, N\}) \le 1$, la suite des sommes partielles est majorée par 1. La famille est donc sommable et sa somme vaut $\sum_{n=1}^{+\infty} p_n = \lim_{N \to +\infty} \mathbb{P}(X \le N) = 1$ (propriété de la mesure de probabilité).
- **b)** L'espérance $\mathbb{E}[X]$ existe si et seulement si la famille $(n p_n)_{n \ge 1}$ est sommable, c'est-à-dire si la série $\sum n p_n$ converge absolument. 
  Puisque $p_n \sim \frac{C}{n^\alpha}$, le terme général est équivalent à $\frac{C}{n^{\alpha - 1}}$.
  - **Espérance ($\alpha > 2$) :** La série converge si et seulement si $\alpha - 1 > 1$, soit $\alpha > 2$.
  - **Variance ($\alpha > 3$) :** Pour que la variance existe, il faut que $\mathbb{E}[X^2]$ existe, c'est-à-dire que $\sum n^2 p_n$ converge, ce qui requiert $\alpha - 2 > 1$, soit $\alpha > 3$.
- **c)** **Analyse critique du modèle :** 
  Si $\alpha \in (1, 2]$, l'espérance existe (la moyenne théorique de la population est finie), mais la variance est infinie. Cela signifie que les fluctuations autour de la moyenne sont extrêmement importantes et qu'il existe une forte probabilité d'observer des valeurs très éloignées de la moyenne (événements rares mais de très grande amplitude, queues de distribution épaisses). 
  *Impact pratique :* Ce type de loi (loi de Zipf / Pareto discrète) modélise mal les phénomènes gouvernés par le théorème central limite classique (qui requiert une variance finie). En finance (gestion des risques) ou en télécommunications (trafic internet), ignorer l'inexistence de la variance conduit à sous-estimer drastiquement le risque de krach ou de saturation des réseaux, les estimateurs empiriques usuels (comme la variance empirique) n'étant plus convergents au sens des grands nombres habituels.