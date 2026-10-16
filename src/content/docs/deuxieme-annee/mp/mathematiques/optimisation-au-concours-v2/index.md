---
title: 'Optimisation au concours V2 : Mathématiques MP/MP*'
description: 'Analyse approfondie des nouvelles questions classiques aux concours, rédactions types et exigences des rapporteurs.'
sidebar:
  badge:
    text: 'Méthode Concours V2'
    variant: 'caution'
---

## 🎯 Objectif & Analyse des tendances des Concours

En tant que concepteur de sujets et président de jury pour les concours de la filière MP (Mines-Ponts, Centrale-Supélec, X-ENS), je constate chaque année une même défaillance chez les candidats : l'application machinale de théorèmes du cours sans vérification rigoureuse des hypothèses, en particulier sur des intervalles non compacts ou aux abords de points singuliers. 

Ce guide **"OPTIMISATION AU CONCOURS - QUESTIONS RECURRENTES V2"** a pour but de vous placer dans l'exigence de la correction. Pour obtenir la note maximale (/20), une réponse de concours doit être structurée ainsi :
1. **L'énoncé précis et sans ambiguïté** du théorème mobilisé.
2. **La vérification méthodique et exhaustive** de chaque point d'hypotèse (continuité, dérivabilité, intégrabilité, domination, régularité).
3. **La conclusion claire** menant au résultat attendu.

Règles typographiques LaTeX : aucun accent direct dans les formules ($\text{...}$ obligatoire pour le texte).

---

## 📌 Question Type 1 : Intégration terme à terme d'une série de fonctions sur un intervalle quelconque et calcul de la somme d'intégrales

### 💡 Méthode canonique & Étapes de rédaction

Face à une question demandant de justifier l'intégrabilité d'une série de fonctions $\sum f_n$ sur un intervalle $I$ (éventuellement non borné) et de calculer $\int_I \sum_{n=0}^{+\infty} f_n(t) \, dt$, les correcteurs attendent l'utilisation du **Théorème d'Intégration Terme à Terme (ITT)** (via Fubini-Lebesgue ou par convergence dominée sur les sommes partielles).

*   **Étape 1 :** Vérifier que les fonctions $f_n$ sont continues (ou au moins continues par morceaux) et intégrables sur $I$.
*   **Étape 2 :** Justifier la convergence simple (ou presque partout) de la série de fonctions $\sum f_n$ vers une fonction $S$ intégrable, ou utiliser l'absolue convergence par sommation des normes (ITT pour les séries absolument convergentes).
*   **Étape 3 (Cas général) :** Poser les sommes partielles $S_N = \sum_{n=0}^N f_n$, vérifier la domination par une fonction intégrable indépendante de $N$, ou appliquer le théorème d'intégration des séries de fonctions positives (Beppo-Levi / monotone).
*   **Étape 4 :** Conclure proprement sur l'inversion $\sum$ et $\int$.

### 📋 Exemple de sujet & Rédaction modèle type Concours
Sujet: ** 
Montrer que l'intégrale $\int_0^{+\infty} \frac{t}{e^t - 1} \, dt$ converge et l'exprimer sous forme d'une somme de série.

**Rédaction modèle (/20) :**

*Analyse préliminaire :* On remarque que pour tout $t > 0$, $\frac{t}{e^t - 1} = t e^{-t} \frac{1}{1 - e^{-t}}$. Comme $e^{-t} \in [0, 1[$, on développe en série géométrique.

1. **Développement en série :**
Pour tout $t > 0$, $e^t - 1 > 0$ et $e^{-t} < 1$. On peut écrire :
$$\frac{t}{e^t - 1} = t e^{-t} \sum_{n=0}^{+\infty} (e^{-t})^n = \sum_{n=0}^{+\infty} t e^{-(n+1)t}$$

2. **Application du théorème d'intégration terme à terme :**
Posons pour tout $n \in \mathbb{N}$ et $t > 0$, $f_n(t) = t e^{-(n+1)t}$.
- Les fonctions $f_n$ sont continues sur $I = ]0, +\infty[$.
- La série de fonctions $\sum f_n$ converge simplement sur $]0, +\infty[$ vers la fonction $f : t \mapsto \frac{t}{e^t - 1}$, qui est continue sur $]0, +\infty[$.
- Étudions l'intégrabilité des fonctions $|f_n|$ sur $I$. Pour tout $n \in \mathbb{N}$, $f_n$ est positive et continue, donc intégrable sur $]0, +\infty[$ si et seulement si l'intégrale impropre converge. Par croissances comparées, $\lim_{t \to +\infty} t^2 f_n(t) = 0$, donc $f_n(t) = O(1/t^2)$ en $+\infty$, ce qui assure l'intégrabilité de $f_n$ sur $]0, +\infty[$. Plus précisément :
$$\int_0^{+\infty} t e^{-(n+1)t} \, dt = \frac{1}{(n+1)^2} \int_0^{+\infty} u e^{-u} \, du = \frac{1}{(n+1)^2}$$
(via le changement de variable $u = (n+1)t$, bijectif de classe $\mathcal{C}^1$).

- **Vérification de l'hypothèse de sommation des intégrales de $|f_n|$ :**
$$\sum_{n=0}^{+\infty} \int_0^{+\infty} |f_n(t)| \, dt = \sum_{n=0}^{+\infty} \frac{1}{(n+1)^2} = \sum_{k=1}^{+\infty} \frac{1}{k^2} < +\infty$$
La série des intégrales des valeurs absolues converge. 

3. **Conclusion :**
Par le théorème d'intégration terme à terme pour les séries (ou Fubini sur les mesures de comptage et de Lebesgue), la fonction $f$ est intégrable sur $]0, +\infty[$ et :
$$\int_0^{+\infty} \frac{t}{e^t - 1} \, dt = \sum_{n=0}^{+\infty} \int_0^{+\infty} t e^{-(n+1)t} \, dt = \sum_{n=0}^{+\infty} \frac{1}{(n+1)^2} = \sum_{k=1}^{+\infty} \frac{1}{k^2} = \frac{\pi^2}{6}$$

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
*   **Piège 1 :** Oublier de vérifier l'intégrabilité de *chaque* terme $f_n$ avant de sommer les intégrales.
*   **Piège 2 :** Confondre convergence uniforme sur tout compact et convergence dominée globale sur un intervalle non borné. Le théorème des séries de fonctions usuelles ne s'applique directement qu'sur des segments ou via une domination globale.

---

## 📌 Question Type 2 : Norme subordonnée, rayon spectral et étude de la convergence des suites de matrices $A^k$

### 💡 Méthode canonique & Étapes de rédaction

Une question classique consiste à étudier la limite de la suite de matrices $(A^k)_{k \in \mathbb{N}}$ pour une matrice carrée $A \in \mathcal{M}_n(\mathbb{C})$, ou de lier le rayon spectral $\rho(A)$ aux normes subordonnées.

*   **Étape 1 :** Rappeler que $\lim_{k \to +\infty} A^k = 0$ si et seulement si le rayon spectral $\rho(A) < 1$.
*   **Étape 2 :** Utiliser le lemme de Gelfand : pour toute norme subordonnée $\|\cdot\|$, $\lim_{k \to +\infty} \|A^k\|^{1/k} = \rho(A)$.
*   **Étape 3 :** Pour un epsilon donné, utiliser la réduction de Jordan (ou triangularisation de Schur) pour construire une norme subordonnée telle que $\|A\| \le \rho(A) + \varepsilon$.

### 📋 Exemple de sujet & Rédaction modèle type Concours
Sujet: ** 
Soit $A \in \mathcal{M}_n(\mathbb{C})$. Montrer que la suite $(A^k)_{k \in \mathbb{N}}$ converge vers la matrice nulle si et seulement si son rayon spectral $\rho(A)$ est strictement inférieur à $1$.

**Rédaction modèle (/20)  :**

1. **Sens indirect ($\Leftarrow$) : Supposons $\rho(A) < 1$.**
Soit $\varepsilon > 0$ tel que $\rho(A) + \varepsilon < 1$. D'après le cours (triangularisation de Schur dans $\mathcal{M}_n(\mathbb{C})$ ou forme de Jordan), il existe une matrice inversible $P$ telle que $A = P T P^{-1}$, où $T = D + N$ avec $D$ diagonale contenant les valeurs propres de $A$ et $N$ nilpotente, d'indice au plus $n$.
On introduit la norme subordonnée associée à une norme vectorielle adaptée : pour tout $\eta > 0$, il existe une norme $\|\cdot\|_{\eta}$ sur $\mathbb{C}^n$ telle que pour la norme subordonnée associée, notée $\|\cdot\|_{sub}$, on ait :
$$\|T\|_{sub} \le \rho(A) + \eta$$
En choisissant $\eta$ assez petit tel que $q = \rho(A) + \eta < 1$, on a :
$$\|A^k\|_{sub} = \|P T^k P^{-1}\|_{sub} \le \|P\|_{sub} \|P^{-1}\|_{sub} \|T^k\|_{sub}$$
Or, par sous-multiplicativité, $\|T^k\|_{sub} \le (\|D\|_{sub} + \|N\|_{sub})^k$ ou plus finement, en utilisant un scaling diagonal $D_{\delta} = \text{diag}(1, \delta, \dots, \delta^{n-1})$, on montre qu'il existe une norme vectorielle telle que $\|A\| \le \rho(A) + \varepsilon$. 
Ainsi, $\|A^k\|_{sub} \le C (\rho(A) + \varepsilon)^k$ pour une constante $C > 0$ indépendante de $k$.
Puisque $\rho(A) + \varepsilon < 1$, par encadrement, $\lim_{k \to +\infty} \|A^k\|_{sub} = 0$. Toutes les normes étant équivalentes en dimension finie, $\lim_{k \to +\infty} A^k = 0$.

2. **Sens direct ($\Rightarrow$) : Supposons $\lim_{k \to +\infty} A^k = 0$.**
Soit $\lambda$ une valeur propre (éventuellement complexe) de $A$ et $X \in \mathbb{C}^n \setminus \{0\}$ un vecteur propre associé : $AX = \lambda X$.
Par récurrence immédiate, pour tout $k \in \mathbb{N}$, $A^k X = \lt^k X$.
En passant à la limite lorsque $k \to +\infty$ :
$$\lim_{k \to +\infty} (A^k X) = \left(\lim_{k \to +\infty} A^k\right) X = 0 \cdot X = 0$$
D'autre part, $\lim_{k \to +\infty} (\lambda^k X) = \left(\lim_{k \to +\infty} \lambda^k\right) X$. 
Par conséquent, $\lim_{k \to +\infty} \lambda^k = 0$, ce qui implique nécessairement $|\lambda| < 1$.
Ceci étant vrai pour toute valeur propre $\lambda$ de $A$, on en déduit que le rayon spectral $\rho(A) = \max \{|\lambda|, \lambda \in \text{Sp}(A)\} < 1$. $\blacksquare$

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
*   **Piège 1 :** Affirmer faussement que $\lim A^k = 0 \iff \|A\| < 1$ pour *tिप्टe* norme. Contre-exemple simple avec des matrices non diagonalisables où $\|A\| \ge \rho(A)$.
*   **Piège 2 :** Oublier de mentionner l'équivalence des normes en dimension finie pour transiter d'une convergence en norme subordonnée à la convergence coefficient par coefficient.

---

## 📌 Question Type 3 : Résolution d'une équation différentielle linéaire au voisinage d'un point singulier par séries entières

### 💡 Méthode canonique & Étapes de rédaction

Il s'agit souvent d'équations de la forme $a_2(x)y'' + a_1(x)y' + a_0(x)y = 0$ où $a_2(0) = 0$ ($0$ est un point singulier régulier ou irrégulier, le programme se focalisant principalement sur les points réguliers ou les méthodes de Frobenius simples).

*   **Étape 1 :** Supposer l'existence d'une solution développable en série entière sous la forme $y(x) = \sum_{n=0}^{+\infty} a_n x^n$ avec un rayon de convergence $R > 0$.
*   **Étape 2 :** Dériver terme à terme dans le disque de convergence : $y'(x) = \sum_{n=1}^{+\infty} n a_n x^{n-1}$ et $y''(x) = \sum_{n=2}^{+\infty} n(n-1) a_n x^{n-2}$.
*   **Étape 3 :** Injecter dans l'équation différentielle, réindexer les sommes pour obtenir une unique série entière nulle $\sum_{n=0}^{+\infty} P(n, a_0, \dots) x^n = 0$.
*   **Étape 4 :** Exploiter le principe d'unicité du développement en série entière (tous les coefficients sont nuls) pour en déduire une relation de récurrence.
*   **Étape 5 :** Résoudre la récurrence, déterminer $R$ et vérifier a posteriori que la fonction construite est bien solution.

### 📋 Exemple de sujet & Rédaction modèle type Concours
Sujet: ** 
Trouver les solutions développables en série entière sur un intervalle $]-R, R[$- à préciser - de l'équation différentielle :
$$(1 - x^2) y''(x) - 2x y'(\text{x}) + 2y(x) = 0$$
*(Équation de Legendre pour $n=1$)*

**Rédaction modèle (/20) :**

1. **Analyse et unicité :**
Supposons qu'il existe une solution $y(x) = \sum_{n=0}^{+\infty} a_n x^n$ de rayon de convergence $R > 0$.
Sur $]-R, R[$, on a :
$$y'(x) = \sum_{n=1}^{+\infty} n a_n x^{n-1} = \sum_{n=0}^{+\infty} (n+1) a_{n+1} x^n$$
$$y''(x) = \sum_{n=2}^{+\infty} n(n-1) a_n x^{n-2} = \sum_{n=0}^{+\infty} (n+2)(n+1) a_{n+2} x^n$$

2. **Injection dans l'équation :**
L'équation s'écrit :
$$(1 - x^2)\sum_{n=0}^{+\infty} (n+2)(n+1) a_{n+2} x^n - 2x \sum_{n=0}^{+\infty} (n+1) a_{n+1} x^n + 2 \sum_{n=0}^{+\infty} a_n x^n = 0$$
En développant :
$$\sum_{n=0}^{+\infty} (n+2)(n+1) a_{n+2} x^n - \sum_{n=0}^{+\infty} n(n-1) a_n x^n - \sum_{n=0}^{+\infty} 2n a_n x^n + \sum_{n=0}^{+\infty} 2 a_n x^n = 0$$
$$\sum_{n=0}^{+\infty} (n+2)(n+1) a_{n+2} x^n + \sum_{n=0}^{+\infty} \left( -n^2 - n + 2 \right) a_n x^n = 0$$
Or $-n^2 - n + 2 = -(n-1)(n+2)$. L'équation devient :
$$\sum_{n=0}^{+\infty} \left[ (n+2)(n+1) a_{n+2} - (n-1)(n+2) a_n \right] x^n = 0$$

3. **Relation de récurrence :**
Par unicité du développement en série entière sur $]-R, R[$, tous les coefficients sont nuls :
$$\forall n \in \mathbb{N}, \quad (n+2)(n+1) a_{n+2} = (n-1)(n+2) a_n$$
Puisque $n+2 \neq 0$, on peut simplifier par $(n+2)$ :
$$(n+1) a_{n+2} = (n-1) a_n \quad \implies \quad a_{n+2} = \frac{n-1}{n+1} a_n \quad (\text{pour } n \ge 0)$$

- **Termes d'indices pairs ($n = 2k$) :**
$$a_{2k} = \frac{2k-3}{2k-1} a_{2k-2} = \dots$$
En particulier pour $n=0$ : $1 \cdot a_2 = (-1) a_0 \implies a_2 = -a_0$.
Pour $n=2$ : $3 \cdot a_4 = 1 \cdot a_2 \implies a_4 = \frac{1}{3} a_2 = -\frac{a_0}{3}$.
Pour $n=4$ ($2k=4$) : $a_4$ donne $a_6 = \frac{3}{5} a_4 = 0$. 
Plus généralement, pour tout $k \ge 2$, $a_{2k} = 0$ car le terme $(n-1)$ pour $n=2$ s'annule ($2-1=1$, attendez : pour $n=2$, $a_4 = \frac{1}{3}a_2$, puis $a_6 = \frac{3}{5}a_4$, etc. Rectification : le numérateur contient $(n-1)$. Pour $n=2$, $n-1=1 \neq 0$. C'est pour $n=1$ que $n-1=0$).
Regardons précisément :
- Pour $n=1$ ($a_3$) : $(1+1)a_3 = (1-1)a_1 = 0 \implies a_3 = 0$. 
Par récurrence, tous les $a_{2k+1}$ pour $k \ge 1$ sont nuls ($a_3 = a_5 = a_7 = \dots = 0$).
- Pour les indices pairs : 
$a_2 = -a_0$
$a_4 = \frac{1}{3}a_2 = -\frac{a_0}{3}$
$a_6 = \frac{3}{5}a_4 = -\frac{a_0}{5}$
En général, $a_{2k} = -\frac{a_0}{2k-1}$ pour $k \ge 1$ (avec $a_0 arbitraire$).

4. **Rayon de convergence et conclusion :**
Le terme général $a_n$ vérifie $\lim |a_{n+2}/a_n| = 1$, donc le rayon de convergence est $R = 1$.
Les solutions développables en série entière sur $]-1, 1[$ sont de la forme :
$$y(x) = a_0 \left( 1 - x^2 - \sum_{k=1}^{+\infty} \frac{x^{2k}}{2k-1} \right) + a_1 x$$
où $(a_0, a_1) \in \mathbb{R}^2$.

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
*   **Piège 1 :** Oublier de réindexer proprement les sommation d'indices avant d'identifier les coefficients de la série globale.
*   **Piège 2 :** Conclure hâtivement sur la dimension de l'espace des solutions sans vérifier que les deux paramètres libres ($a_0$ et $a_1$ ici) engendrent bien toutes les conditions initiales possibles en $0$.