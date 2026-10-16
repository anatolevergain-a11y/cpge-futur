---
title: 'Exercice 1 : Diagonalisation et polynômes annulateurs'
description: 'Problème d entraînement type concours pour PSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $E$ un $\mathbb{K}$-espace vectoriel de dimension finie $n \ge 1$, où $\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$. Soit $u \in \mathcal{L}(E)$ un endomorphisme de $E$.
L'objectif de ce problème est d'étudier les liens entre les projecteurs spectraux d'un endomorphisme diagonalisable, ses polynômes annulateurs, et d'appliquer ces résultats à la résolution d'une équation différentielle opérationnelle.

On rappelle qu'un polynôme $P \in \mathbb{K}[X]$ est dit **annulateur** de $u$ si $P(u) = 0_{\mathcal{L}(E)}$. L'ensemble des polynômes annulateurs de $u$ est un idéal de $\mathbb{K}[X]$, engendré par un unique polynôme unitaire, noté $\pi_u$, appelé **polynôme minimal** de $u$.

---

### ❓ Questions progressives

1. **Préalable sur les projecteurs associés à un polynôme minimal scindé**
   Soit $u \in \mathcal{L}(E)$. On suppose que le polynôme minimal de $u$, $\pi_u$, est scindé sur $\mathbb{K}$ et s'écrit :
   $$\pi_u = \prod_{k=1}^{r} (X - \lambda_k)^{m_k}$$
   où les $\lambda_1, \dots, \lambda_r$ sont les valeurs propres distinctes de $u$, et $m_1, \dots, m_r$ des entiers strictement positifs.
   Pour tout $k \in \llbracket 1, r \rrbracket$, on note $E_k = \ker((u - \lambda_k \text{id}_E)^{m_k})$ le sous-espace caractéristique associé à $\lambda_k$. 
   Rappeler pourquoi $E = \bigoplus_{k=1}^{r} E_k$ et justifier que $u$ est diagonalisable si et seulement si, pour tout $k \in \llbracket 1, r \rrbracket$, $m_k = 1$.

2. **Décomposition spectrale (Cas diagonalisable)**
   On suppose désormais que $u$ est diagonalisable. Ses valeurs propres distinctes sont notées $\lambda_1, \lambda_2, \dots, \lambda_r$. 
   Pour tout $i \in \llbracket 1, r \rrbracket$, on définit le polynôme d'interpolation de Lagrange :
   $$L_i = \prod_{\substack{1 \le j \le r \\ j \neq i}} \frac{X - \lambda_j}{\lambda_i - \lambda_j}$$
   On pose $p_i = L_i(u)$. 
   *Montrer que la famille $(p_1, \dots, p_r)$ est une famille de projecteurs orthogonaux au sens de la composition (i.e., $p_i \circ p_j = \delta_{i,j} p_i$) et que $\sum_{i=1}^r p_i = \text{id}_E$.*

3. **Expression de $u$ et fonctions d'endomorphisme**
   * En déduire que $u = \sum_{i=1}^r \lambda_i p_i$.
   * Plus généralement, soit $f : \mathbb{K} \to \mathbb{K}$ une fonction quelconque. Comment définir naturellement l'endomorphisme $f(u)$ à l'aide des projecteurs $p_i$ ? Calculer $(f(u))^m$ pour $m \in \mathbb{N}$.

4. **Application à une équation différentielle vectorielle**
   Soit $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} \in \mathcal{M}_2(\mathbb{R})$.
   * Déterminer le polynôme minimal $\pi_A$ de $A$.
   * En déduire sans calculs matriciels fastidieux l'expression explicite de $A^n$ pour tout $n \in \mathbb{N}$.
   * Résoudre le système différentiel $\begin{cases} X'(t) = A X(t) \\ X(0) = \begin{pmatrix} 1 \\ -1 \end{pmatrix} \end{cases}$ où $X : \mathbb{R} \to \mathcal{M}_{2,1}(\mathbb{R})$.

5. **Analyse critique du modèle**
   Dans le calcul pratique des puissances d'une matrice ou de son exponentielle, l'utilisation des projecteurs spectraux (méthode de Dunford-Lagrange) est-elle toujours préférable à la diagonalisation par blocs ou à la réduction de Jordan ? Discuter en fonction de la complexité algorithmique et de la connaissance exacte des valeurs propres.

---

### 💡 Pistes & Indications méthodologiques

* **Q1 :** Penser au théorème de décomposition noyaux (Lemme des noyaux) et à la caractérisation de la diagonalisabilité par l'ordre de multiplicité des racines du polynôme minimal.
* **Q2 :** Étudier le polynôme produit $L_i L_j$ modulo $\pi_u$ (qui vaut $\prod (X - \lambda_k)$). Évaluer l'endomorphisme associé en $u$.
* **Q3 :** Utiliser la relation $\sum L_i = 1$ et l'identité $X = \sum \lambda_i L_i \pmod{\pi_u}$.
* **Q4 :** Pour le polynôme minimal, calculer le polynôme caractéristique $ \chi_A $ puis tester les diviseurs ou chercher une relation simple de type $A^2 - \text{tr}(A)A + \det(A)I_2 = 0$.

---

### 📋 Corrigé détaillé pas à pas

#### Corrigé de la Question 1
D'après le théorème de Cayley-Hamilton et la définition du polynôme minimal, $\pi_u$ divise $\chi_u$, donc les racines de $\pi_u$ sont exactement les valeurs propres de $u$. 
Le lemme des noyaux s'applique car les facteurs premiers de $\pi_u$, à savoir $(X - \lambda_k)^{m_k}$, sont premiers entre eux deux à deux. On a donc :
$$E = \ker(\pi_u(u)) = \bigoplus_{k=1}^r \ker((u - \lambda_k \text{id}_E)^{m_k}) = \bigoplus_{k=1}^r E_k$$
L'endomorphisme $u$ est diagonalisable si et seulement si chaque sous-espace caractéristique $E_k$ est égal au sous-espace propre associé $S_k = \ker(u - \lambda_k \text{id}_E)$, ce qui équivaut à $m_k = 1$ pour tout $k \in \llbracket 1, r \rrbracket$.

#### Corrigé de la Question 2
Soit $i, j \in \llbracket 1, r \rrbracket$. Le polynôme $L_i L_j$ possède les propriétés suivantes :
- Si $i \neq j$, le produit $L_i L_j$ contient tous les facteurs $(X - \lambda_k)$ pour $k \in \llbracket 1, r \rrbracket$. Par conséquent, $\pi_u$ divise $L_i L_j$. Comme $\pi_u(u) = 0_{\mathcal{L}(E)}$, on en déduit que $p_i \circ p_j = (L_i L_j)(u) = 0_{\mathcal{L}(E)}$.
- Si $i = j$, $L_i^2 - L_i$ s'annule en toutes les valeurs propres $\lambda_k$. Ainsi, $\pi_u$ divise $L_i^2 - L_i$, ce qui implique $p_i^2 = p_i$. Les $p_i$ sont donc des projecteurs deux à deux disjoints.

De plus, considérons le polynôme $S = \sum_{i=1}^r L_i - 1$. Le degré de $S$ est strictement inférieur à $r$ (car $\deg L_i = r-1$). Or, pour tout $k \in \llbracket 1, r \rrbracket$, $S(\lambda_k) = L_k(\lambda_k) - 1 = 1 - 1 = 0$. 
Le polynôme $S$ admet $r$ racines distinctes ($\lambda_1, \dots, \lambda_r$) alors que son degré est au plus $r-1$. Il est donc nécessairement nul. 
Par suite, $\sum_{i=1}^r L_i = 1$, ce qui donne en évaluant en $u$ :
$$\sum_{i=1}^r p_i = \text{id}_E$$

#### Corrigé de la Question 3
Considérons le polynôme $R = X - \ئن_{i=1}^r \lambda_i L_i$. De même, pour tout $k \in \llbracket 1, r \rrbracket$, $R(\lambda_k) = \lambda_k - \lambda_k = 0$. Comme $\deg R \le r-1$ et qu'il possède $r$ racines, $R$ est le polynôme nul. Ainsi :
$$X = \sum_{i=1}^r \lambda_i L_i \pmod{\pi_u}$$
En évaluant en $u$, on obtient immédiatement :
$$u = \sum_{i=1}^r \lambda_i p_i$$

Pour une fonction $f : \mathbb{K} \to \mathbb{K}$, on définit naturellement :
$$f(u) = \sum_{i=1}^r f(\lambda_i) p_i$$
Puisque les $p_i$ sont des projecteurs orthogonaux ($p_i \circ p_j = \delta_{i,j} p_i$), on a par récurrence immédiate pour tout $m \in \mathbb{N}$ :
$$(f(u))^m = \sum_{i=1}^r (f(\lambda_i))^m p_i$$
*(avec $(f(\lambda_i))^0 = 1$ en convention, donnant l'identité pour $m=0$).*

#### Corrigé de la Question 4
Soit $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$.
* Le polynôme caractéristique de $A$ est $\chi_A(X) = \det(X I_2 - A) = (X-2)^2 - 1 = (X-3)(X-1)$.
* Les valeurs propres de $A$ sont $\lambda_1 = 1$ et $\lambda_2 = 3$. Le polynôme minimal $\pi_A$ divise $\chi_A$ et possède les mêmes racines simples, donc $\pi_A(X) = (X-1)(X-3) = X^2 - 4X + 3$.
* Les projecteurs spectraux s'obtiennent via les polynômes de Lagrange :
  - $L_1(X) = \frac{X - 3}{1 - 3} = -\frac{1}{2}(X - 3)$ donc $p_1 = -\frac{1}{2}(A - 3I_2) = -\frac{1}{2} \begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix} = \begin{pmatrix} 1/2 & -1/2 \\ -1/2 & 1/2 \end{pmatrix}$.
  - $L_2(X) = \frac{X - 1}{3 - 1} = \frac{1}{2}(X - 1)$ donc $p_2 = \frac{1}{2}(A - I_2) = \frac{1}{2} \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix}$.
* Pour tout $n \in \mathbb{N}$, on a $A^n = 1^n p_1 + 3^n p_2$ :
  $$A^n = 1 \cdot \begin{pmatrix} 1/2 & -1/2 \\ -1/2 & 1/2 \end{pmatrix} + 3^n \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix} = \frac{1}{2} \begin{pmatrix} 1 + 3^n & 3^n - 1 \\ 3^n - 1 & 1 + 3^n \end{pmatrix}$$
* La solution du système différentiel $X'(t) = AX(t)$ est donnée par $X(t) = \exp(At)X(0)$. 
  Avec la formule fonctionnelle : $\exp(At) = e^t p_1 + e^{3t} p_2$.
  $$\exp(At) = \frac{1}{2} \begin{pmatrix} e^t + e^{3t} & e^{3t} - e^t \\ e^{3t} - e^t & e^t + e^{3t} \end{pmatrix}$$
  On calcule alors $X(t) = \exp(At) \begin{pmatrix} 1 \\ -1 \end{pmatrix}$ :
  $$X(t) = \frac{1}{2} \begin{pmatrix} (e^t + e^{3t}) - (e^{3t} - e^t) \\ (e^{3t} - e^t) - (e^t + e^{3t}) \end{pmatrix} = \frac{1}{2} \begin{pmatrix} 2e^t \\ -2e^t \end{pmatrix} = \begin{pmatrix} e^t \\ -e^t \end{pmatrix}$$

#### Corrigé de la Question 5 (Analyse critique du modèle)
L'utilisation des projecteurs spectraux (via la décomposition de Dunford ou les polynômes de Lagrange) présente l'avantage théorique d'éviter le calcul explicite de matrices de passage et leur inversion, ce qui est particulièrement lourd en calcul formel. 

Cependant, sur le plan algorithmique et numérique :
1. **Connaissance exacte des valeurs propres :** Calculer les polynômes de Lagrange $L_i$ nécessite de connaître *exactement* les racines du polynôme minimal (ou caractéristique). En pratique numérique, l'évaluation des racines d'un polynôme de degré élevé est sujette à des instabilités numériques majeures.
2. **Coût de construction :** Former les matrices $p_i = L_i(A)$ demande des multiplications matricielles successives, dont la complexité surpasse souvent la simple diagonalisation par blocs ou l'utilisation de méthodes de Schur/Householder.
Ainsi, cette méthode est idéale et élégante en dimension faible ($n = 2, 3$) ou lorsque les valeurs propres sont évidentes, mais devient sous-optimale pour des matrices de grande taille en calcul scientifique.