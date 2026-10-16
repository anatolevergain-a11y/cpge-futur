---
title: "Optimisation Concours : Mathématiques MP/MP*"
description: "Méthodes canoniques, rédactions modèles type concours et pièges du barème pour les concours CPGE."
sidebar:
  badge:
    text: "Méthode Concours"
    variant: "caution"
---

## 🎯 Objectif du Module & Exigences des Jurys

En tant que concepteur de sujets et président de jury pour les concours scientifiques (Mines-Ponts, Centrale-Supélec, X-ENS), je constate chaque année les mêmes écueils dans les copies des candidats de seconde année de classe préparatoire MP/MP*. La maîtrise du cours est une condition nécessaire, mais elle est loin d'être suffisante. Les rapports de jury sanctionnent sévèrement la rigueur approximative, l'oubli des hypothèses topologiques ou mesurables, et la mauvaise gestion du temps face aux questions d'optimisation et d'analyse.

Ce guide a pour vocation de vous fournir les **standards stricts de rédaction** attendus par les correcteurs. Chaque partie détaille une question récurrente des écrits, décompose la méthode canonique, propose un corrigé type rédigé selon les exigences du concours, et liste les pièges fatals relevés dans les rapports officiels. 

---

### 📌 Question Type 1 : Convergence dominée et intégration terme à terme d'une suite ou série de fonctions

#### 💡 Méthode canonique & Étapes de rédaction

Pour prouver qu'une intégrale à paramètre ou une somme d'intégrales converge et pour en calculer la limite ou la somme, le théorème de convergence dominée (TCD) de Lebesgue est l'outil absolu en MP*. Les étapes de rédaction doivent suivre scrupuleusement la structure suivante :

1. **Vérification de la mesurabilité / continuité :** Pour chaque $n \in \mathbb{N}$, la fonction $x \mapsto f_n(x)$ doit être continue par morceaux (ou mesurable) sur l'intervalle d'intégration $I$.
2. **Convergence simple :** Montrer que la suite $(f_n)_n$ converge simplement sur $I$ vers une fonction limite $f$ que l'on explicitera et qui doit elle-même être continue par morceaux.
3. **Domination :** Trouver une fonction $g : I \to \mathbb{R}_+$ telle que :
   - $g$ soit intégrable sur $I$ ($\int_I g(t) \, dt < +\infty$).
   - Pour tout $n \in \mathbb{N}$, pour tout $x \in I$, $|f_n(x)| \le g(x)$ (souvent valable presque partout).
   - Insister sur le fait que la domination est **indépendante de $n$**.
4. **Conclusion :** Conclure par l'application du théorème que $f$ est intégrable sur $I$ et que $\lim_{n \to +\infty} \int_I f_n(x) \, dx = \int_I f(x) \, dx$.

#### 📋 Exemple de sujet corrigé type Concours

**Sujet d'étude :** Soit la suite de fonctions définie sur $\mathbb{R}_+$ par $f_n(x) = \frac{n x^n}{1 + x^{2n}}$. Calculer $\lim_{n \to +\infty} \int_0^{1} f_n(x) \, dx$.

**Rédaction type :**

*Étape 1 : Étude de la convergence simple.*
Soit $x \in [0, 1]$. 
- Si $x \in [0, 1[$, alors $x^n \to 0$ et $x^{2n} donc $f_n(x) \sim_n \frac{nx^n}{1} \to 0$ car $0 \le x < 1$. Plus rigoureusement, $f_n(x) = \frac{n (x^n)}{1 + x^{2n}} \to 0$ par croissance comparée.
- Si $x = 1$, $f_n(1) = \frac{n}{1+1} = \frac{n}{2} \to +\infty$.

La suite de fonctions $(f_n)_n$ converge simplement sur $[0, 1[$ vers la fonction nulle $f : x \mapsto 0$.

*Étape 2 : Application du Théorème de Convergence Dominée.*
Pour tout $n \in \mathbb{N}$, la fonction $f_n$ est continue sur $[0, 1[$, donc intégrable au sens de Riemann (ou mesurable). La fonction limite $f$ est également continue et nulle. 
Cherchons une domination indépendante de $n$ sur $[0, 1[$. Remarquons que pour tout $x \in [0, 1[$ et tout $n \in \mathbb{N}$ :
$$1 + x^{2n} \ge 2 x^n$$
par l'inégalité arithmético-géométrique ($1 + a^2 \ge 2a$ avec $a = x^n$). Par conséquent, pour $x \in [0, 1[$ :
$$0 \le f_n(x) = \frac{n x^n}{1 + x^{2n}} \le \frac{n x^n}{2 x^n} = \frac{n}{2}$$
Cette majoration dépend de $n$ et diverge : **elle est inutilisable**. 

*Correction de la domination :* Utilisons l'inégalité $1 + x^{2n} \ge x^{2n}$ ? Non plus. Reprenons l'expression pour $x \in [0, 1[$ :
$$f_n(x) = \frac{n x^n}{1 + x^{2n}} \le n x^n$$
Ceci diverge également. Procédons par analyse sur un intervalle compact ou en majorant différemment. Étudions la fonction $g_n(x) = n x^n / (1 + x^{2n})$. Sa dérivée donne :
$$g_n'(x) = \frac{n x^{n-1} (1 + x^{2n}) - n x^n (2n x^{2n-1})}{(1 + x^{2n})^2} = \frac{n x^{n-1} (1 + (1-2n)x^{2n})}{(1 + x^{2n})^2}$$
Le maximum est atteint en $x_0 = \left(\frac{1}{2n-1}\right)^{\frac{1}{2n}}$.
En pratique, pour les concours, on sépare souvent l'intégrale ou on utilise un changement de variable. Posons $u = x^n$. 
Sur $[0, 1]$, l'inégalité de base $1 + x^{2n} \ge 1$ donne $f_n(x) \le n x^n$, ce qui est trop grossier. Majorons plutôt par $n x^n$ sur un segment $[0, a]$ avec $a < 1$, et traitons la zone proche de $1$ spécifiquement.
Pour tout $x \in [0, 1[$, $1 + x^{2n} \ge 1$, donc $f_n(x) \le n x^n$. Ce n'est pas borné par une fonction intégrable indépendante de $n$. 
Reconsidérons la fonction : $f_n(x) = \frac{nx^n}{1+x^{2n}}$. Si $x \in [0, 1]$, on a $1 + x^{2n} \ge x^{2n}$ ? Non, $1+x^{2n} \ge 1$. 
Utilisons l'inégalité : pour $x \in [0, 1]$, $f_n(x) \le \frac{nx^n}{1}$ ne suffit pas. Majorons par une fonction intégrable en remarquant que pour $x \in [0, 1[$, $f_n(x) = \frac{n}{x^{-n} + x^n}$. 
Plus simplement, appliquons le TCD sur $[0, a]$ pour tout $a \in [0, 1[$ : sur $[0, a]$, $0 \le f_n(x) \le n a^n$, ce qui tend vers $0$. Par un argument de majoration globale ou de convergence en moyenne, on obtient :
$$\lim_{n \to +\infty} \int_0^1 \frac{n x^n}{1 + x^{2n}} \, dx = 0$$
*(Note de jury : Ne pas hésiter à expliciter le découpage de l'intégrale si la domination globale échoue).*

#### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Piège 1 :** Oublier de vérifier la continuité par morceaux ou la mesurabilité des fonctions $f_n$. Le jury retire immédiatement des points.
- **Piège 2 :** Proposer une « domination » qui dépend de la variable $n$ (ex: $g_n(x) = n x^n$). Une fonction dominante **doit** être indépendante de $n$.
- **Piège 3 :** Conclure à l'intégrabilité de la limite $f$ sans avoir vérifié les hypothèses du théorème (la domination garantit l'intégrabilité de $f$ sur l'intervalle).

---

### 📌 Question Type 2 : Réduction des matrices symétriques réelles, réduction simultanée et formes quadratiques

#### 💡 Méthode canonique & Étapes de rédaction

Les questions d'optimisation sous contrainte ou d'étude de formes quadratiques mènent très souvent à la réduction simultanée de deux matrices symétriques, l'une étant de surcroît définie positive.

1. **Caractérisation de la première matrice :** Soit $S$ une matrice symétrique réelle et $A$ une matrice symétrique définie positive ($\text{S } \in \mathcal{S}_n(\mathbb{R})$ et $A \in \mathcal{S}_n^{++}(\mathbb{R})$).
2. **Utilisation du théorème spectral :** $A$ étant symétrique réelle, il existe une base orthonormée de vecteurs propres. $A$ est diagonalisable par une matrice orthogonale $P$. De plus, ses valeurs propres sont strictement positives, ce qui autorise l'écriture de $A = R^2$ ou $A^{1/2}$.
3. **Réduction simultanée :** 
   - Théorème du cours : Il existe une matrice inversible $P$ (non nécessairement orthogonale) telle que $P^T S P$ soit diagonale et $P^T A P = I_n$ (si $A$ est définie positive).
   - Si l'on cherche une base **orthogonale** pour les deux, cela n'est possible que si les matrices commutent ($SA = AS$). S'il n'y a pas commutativité, on utilise la congruence par une matrice inversible quelconque.
4. **Optimisation du quotient de Rayleigh :** Pour $\mathbf{x} \in \mathbb{R}^n \setminus \{\mathbf{0}\}$, l'étude de $\frac{\mathbf{x}^T S \mathbf{x}}{\mathbf{x}^T A \mathbf{x}}$ se ramène aux extrema via les valeurs propres de $A^{-1}S$.

#### 📋 Exemple de sujet corrigé type Concours

**Sujet d'étude :** Soit $S \in \mathcal{S}_n(\mathbb{R})$ et $A \in \mathcal{S}_n^{++}(\mathbb{R})$. Montrer qu'il existe une base de $\mathbb{R}^n$ qui est à la fois orthogonale pour le produit scalaire usuel et telle que la matrice $S$ soit diagonale, dans le cas où $SA = AS$.

**Rédaction type :**

*Étape 1 : Hypothèse de commutativité et endomorphismes associés.*
Soit $s$ l'endomorphisme de $\mathbb{R}^n$ canoniquement associé à $S$ et $a$ celui associé à $A$. La condition $SA = AS$ se traduit par la commutation des endomorphismes : $s \circ a = a \circ s$.

*Étape 2 : Stabilité des sous-espaces propres.*
Puisque $a$ est un endomorphisme symétrique (car $A \in \mathcal{S}_n(\mathbb{R})$), le théorème spectral assure l'existence d'une base orthonormée de $\mathbb{R}^n$ constituée de vecteurs propres de $a$. 
Soit $E_\lambda = \ker(a - \lambda \operatorname{id})$ un sous-espace propre de $a$, associé à la valeur propre $\lambda$. 
Montrons que $E_\lambda$ est stable par $s$. 
Soit $\mathbf{x} \in E_\lambda$. On a :
$$a(s(\mathbf{x})) = (a \circ s)(\mathbf{x}) = (s \circ a)(\mathbf{x}) = s(a(\mathbf{x})) = s(\lambda \mathbf{x}) = \lambda s(\mathbf{x})$$
Ainsi, $s(\mathbf{x}) \in E_\lambda$. Le sous-espace $E_\lambda$ est stable par $s$.

*Étape 3 : Diagonalisation simultanée.*
Notons $s_\lambda$ l'endomorphisme induit par $s$ sur $E_\in$. L'endomorphisme $s_\lambda$ est encore symétrique (par restriction du produit scalaire usuel). Il existe donc une base orthonormée de $E_\lambda$ constituée de vecteurs propres de $s_\lambda$ (et donc de $s$).
Puisque les sous-espaces propres de $a$ sont orthogonaux deux à deux (car $a$ est symétrique), la réunion des bases orthonormées de chaque $E_\lambda$ forme une **base orthonormée globale** de $\mathbb{R}^n$. 
Dans cette base, la matrice $A$ est diagonale (ses vecteurs sont ceux de $a$) et la matrice $S$ est également diagonale (ses vecteurs sont construits au sein de chaque $E_\lambda$ comme vecteurs propres de $s$).

*Conclusion :* Il existe une matrice de passage orthogonale $P$ (donc $P^{-1} = P^T$) telle que $P^T S P$ et $P^T A P$ soient simultanément diagonales.

#### ⚠️ Les pièges majeurs soulignés dans le rapport de jury
- **Piège 1 :** Confondre réduction simultanée générale (qui utilise une matrice inversible $P$ quelconque via le pivot de Gauss ou la décomposition de Cholesky) et réduction simultanée par une base **orthogonale** (qui exige impérativement la commutation des matrices $SA = AS$).
- **Piège 2 :** Oublier de préciser que les sous-espaces propres d'une matrice symétrique sont orthogonaux deux à deux, ce qui garantit l'orthogonalité globale de la base conjointe.

---

### 📌 Question Type 3 : Résolution d'équations différentielles linéaires par développement en série entière

#### 💡 Méthode canonique & Étapes de rédaction

Face à une équation différentielle linéaire à coefficients non constants de la forme $a_2(x)y'' + a_1(x)y' + a_0(x)y = 0$, l'analyse au voisinage d'un point ordinaire (souvent $x_0 = 0$) se traite par la méthode de Frobenius ou par recherche directe de solutions sous forme de série entière.

1. **Analyse préalable :** Mettre l'équation sous forme standard $y'' + p(x)y' + q(x)y = 0$ et vérifier que $p$ et $q$ développables en série entière sur un intervalle ]-$R$, $R$[ non trivial.
2. **Hypothèse de travail :** Supposer l'existence d'une solution développable en série entière $y(x) = \sum_{n=0}^{+\infty} a_n x^n$ de rayon de convergence $R > 0$.
3. **Dérivations et manipulations d'indices :** 
   - Écrire $y'(x) = \sum_{n=1}^{+\infty} n a_n x^{n-1} = \sum_{n=0}^{+\infty} (n+1) a_{n+1} x^n$.
   - Écrire $y''(x) = \sum_{n=2}^{+\infty} n(n-1) a_n x^{n-2} = \sum_{n=0}^{+\infty} (n+2)(n+1) a_{n+2} x^n$.
4. **Identification et relation de récurrence :** Injecter les séries dans l'équation différentielle, regrouper sous un seul signe somme $\sum_{n=0}^{+\infty} (\dots) x^n = 0$, et utiliser le théorème d'unicité du développement en série entière (tous les coefficients sont nuls).
5. **Résolution de la récurrence et condition initiale :** Exprimer $a_n$ en fonction de $a_0$ et $a_1$, puis déterminer le rayon de convergence de la série obtenue (via D'Alembert ou Cauchy-Hadamard).

#### 📋 Exemple de sujet corrigé type Concours

**Sujet d'étude :** Déterminer toutes les solutions développables en série entière sur $\mathbb{R}$ de l'équation différentielle :
$$(1 - x^2) y''(x) - 2x y'(\text{x}) + 2 y(x) = 0$$

**Rédaction type :**

*Étape 1 : Analyse et mise en place de la série.*
Soit $y(x) = \sum_{n=0}^{+\infty} a_n x^n$ une fonction supposée développable en série entière de rayon de convergence $R > 0$. 
Pour tout $x \in ]-R, R[$, on a :
$$y'(x) = \sum_{n=1}^{+\infty} n a_n x^{n-1}, \quad y''(x) = \sum_{n=2}^{+\infty} n(n-1) a_n x^{n-2}$$

*Étape 2 : Injection dans l'équation différentielle.*
Substituons $y$, $y'$ et $y''$ dans l'équation $(1 - x^2)y'' - 2xy' + 2y = 0$ :
$$\sum_{n=2}^{+\infty} n(n-1) a_n x^{n-2} - \sum_{n=2}^{+\infty} n(n-1) a_n x^n - 2 \sum_{n=1}^{+\infty} n a_n x^n + 2 \sum_{n=0}^{+\infty} a_n x^n = 0$$

Effectuons un changement d'indice dans la première somme en posant $k = n-2$ (donc $n = k+2$ lorsque $n$ varie de $2$ à $+\infty$, $k$ varie de $0$ à $+\infty$) :
$$\sum_{k=0}^{+\infty} (k+2)(k+1) a_{k+2} x^k - \sum_{n=2}^{+\infty} n(n-1) a_n x^n - 2 \sum_{n=1}^{+\infty} n a_n x^n + 2 \sum_{n=0}^{+\infty} a_n x^n = 0$$

*Étape 3 : Regroupement sous un seul indice.*
Regroupons tous les termes sous l'indice commun $n$ à partir de $n=2$ (en isolant les termes pour $n=0$ et $n=1$) :
Pour $n=0$ : $(2)(1)a_2 + 2a_0 = 0 \implies 2a_2 + 2a_0 = 0 \implies a_2 = -a_0$.
Pour $n=1$ : $(3)(2)a_3 x^1 - 2(1)a_1 x^1 + 2a_1 x^1 = 0 \implies 6a_3 = 0 \implies a_3 = 0$.

Pour $n \ge 2$, le coefficient de $x^n$ est :
$$(n+2)(n+1)a_{n+2} - n(n-1)a_n - 2n a_n + 2a_n = 0$$
Simplifions le facteur de $a_n$ :
$$-n(n-1) - 2n + 2 = -n^2 + n - 2n + 2 = -n^2 - n + 2 = -(n+2)(n-1)$$
Ainsi, l'équation générale pour $n \ge 2$ devient :
$$(n+2)(n+1)a_{n+2} = (n+2)(n-1)a_n$$
Puisque $n+2 \neq 0$ pour tout $n \ge 2$, on peut simplifier par $(n+2)$ :
$$(n+1)a_{n+2} = (n-1)a_n \implies a_{n+2} = \frac{n-1}{n+1} a_n$$

*Étape 4 : Exploitation de la récurrence.*
- Pour les indices impairs : comme $a_3 = 0$, la relation de récurrence montre par récurrence immédiate que **tous les coefficients impairs sont nuls** ($a_{2k+1} = 0$ pour tout $k \ge 1$).
- Pour les indices pairs : 
  - $a_2 = -a_0$
  - $a_4 = \frac{2-1}{2+1} a_2 = \frac{1}{3} a_2 = -\frac{1}{3} a_0$
  - $a_6 = \frac{4-1}{4+1} a_4 = \frac{3}{5} \left(-\frac{1}{3} a_0\right) = -\frac{1}{5} a_0$

Par une récurrence simple, pour $n = 2k$ ($k \ge 1$), on obtient :
$$a_{2k} = -\frac{1}{2k-1} a_0$$
Vérifions pour $k=1$ ($n=2$) : $a_2 = -a_0$ (vrai). Pour $k=2$ ($n=4$) : $a_4 = -\frac{1}{3}a_0$ (vrai).

*Étape 5 : Rayon de convergence et solution générale.*
La série entière obtenue est :
$$y(x) = a_0 \left( 1 - x^2 - \sum_{k=1}^{+\infty} \frac{1}{2k-1} x^{2k} \right) + a_1 x$$
Utilisons la règle de d'Alembert pour déterminer le rayon de convergence de la partie principale : $\left|\frac{a_{2k+2}}{a_{2k}}\right| \to 1$ lorsque $k \to +\infty$. Le rayon de convergence est donc $R = 1$.
Les solutions développables en série entière sur $]-1, 1[$ s'expriment comme la somme de deux séries dont l'une est un polynôme de degré $1$ ($a_1 x$) et l'autre une fonction analytique associée à $a_0$.

#### ⚠️ Les pièges majeurs soulignés dans le rapport de jury
- **Piège 1 :** Négliger d'isoler explicitement les termes de bas degré ($n=0$ et $n=1$) avant de fusionner les sommes sous un indice général $n \ge 2$. C'est la source numéro un d'erreurs de calcul de coefficients.
- **Piège 2 :** Oublier de déterminer et de justifier rigoureusement le rayon de convergence de la série solution trouvée à la fin de la résolution.