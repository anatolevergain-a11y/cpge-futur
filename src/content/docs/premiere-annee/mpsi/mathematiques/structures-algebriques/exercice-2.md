---
title: 'Exercice 2 : Espaces vectoriels et familles libres/génératrices'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la modélisation de signaux pour les télécommunications ou le traitement d'images, on est souvent amené à manipuler des espaces vectoriels de fonctions ou de suites. Pour stocker ou transmettre ces signaux, les ingénieurs cherchent à les décomposer sur des bases ou des familles génératrices optimisées afin de réduire la complexité algorithmique.

Soit $\mathbb{R}^\mathbb{N}$ l'espace vectoriel des suites réelles. On s'intéresse à un sous-ensemble particulier de suites, dites *à décroissance exponentielle*, modélisant l'atténuation d'un signal dans un canal de transmission filaire ou optique affecté par des pertes. 

Soit $E$ l'ensemble des suites $u = (u_n)_{n \in \mathbb{N}} \in \mathbb{R}^\mathbb{N}$ telles qu'il existe constants $C > 0$ et $\alpha > 0$ telles que pour tout $n \in \mathbb{N}$, $|u_n| \leq C e^{-\alpha n}$.

---

### ❓ Questions progressives

1. **Structure algébrique**
   Montrer que $E$ est un sous-espace vectoriel de $\mathbb{R}^\mathbb{N}$.

2. **Étude d'une famille de suites géométriques**
   Pour tout $r \in ]0, 1[$, on définit la suite $e^{(r)}$ par $e^{(r)}_n = r^n$ pour tout $n \in \mathbb{N}$.
   a) Montrer que pour tout $r \in ]0, 1[$, la suite $e^{(r)}$ appartient à l'espace $E$.
   b) Soit $k \in \mathbb{N}^*$ et $r_1, r_2, \dots, r_k$ des réels distincts de l'intervalle $]$,1[$. Montrer que la famille $(e^{(r_1)}, e^{(r_2)}, \dots, e^{(r_k)})$ est libre dans $E$.

3. **Analyse critique du modèle de transmission**
   *Hypothèse du modèle :* Le signal en sortie du canal est supposé appartenir à un sous-espace vectoriel de dimension finie $F = \text{Vect}(e^{(r_1)}, \dots, e^{(r_k)})$, ce qui permet un traitement numérique par filtrage linéaire de dimension finie.
   * Question critique :* En pratique, les mesures physiques comportent toujours un bruit thermique ou de quantification, non borné par une décroissance exponentielle stricte (par exemple un bruit blanc gaussien stationnaire). Discutez la valadité de l'hypothèse d'appartenance à $E$ et de la modélisation en dimension finie $F$ d'un point de vue de l'ingénieur en télécommunications.

---

### 💡 Pistes & Indications

- **Question 1 :** Utilisez la caractérisation usuelle des sous-espaces vectoriels (contient la suite nulle, stable par addition et par multiplication externe par un scalaire). Attention à bien combiner les constantes $C$ et $\alpha$ lors de l'addition de deux suites.
- **Question 2.b :** Raisonnez par l'absurde ou utilisez une méthode de Vandermonde / évaluation en certains points discrets, ou encore par récurrence sur la taille de la famille en considérant l'opérateur de décalage ou une limite.
- **Question 3 :** Pensez aux ordres de grandeur et à la différence entre un modèle mathématique idéal (continu, déterministe) et la réalité physique (discrète, bruitée, à support borné ou de puissance finie).

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Structure de sous-espace vectoriel
* **Élément nul :** La suite nulle $0 = (0)_{n \in \mathbb{N}}$ vérifie $|0_n| = 0 \leq 1 \cdot e^{-n}$ (en prenant $C=1, \alpha=1$). Donc $0 \in E$.
* **Stabilité par addition :** Soient $u = (u_n)$ et $v = (v_n)$ deux éléments de $E$. Il existe $(C_1, \alpha_1)$ et $(C_2, \alpha_2)$ tels que $|u_n| \leq C_1 e^{-\alpha_1 n}$ et $|v_n| \leq C_2 e^{-\alpha_2 n}$.
  Posons $\alpha = \min(\alpha_1, \alpha_2) > 0$ et $C = C_1 + C_2 > 0$. 
  Pour tout $n \in \mathbb{N}$ :
  $$|(u+v)_n| = |u_n + v_n| \leq |u_n| + |v_n| \leq C_1 e^{-\alpha_1 n} + C_2 e^{-\alpha_2 n}$$
  Puisque $\alpha \leq \alpha_1$ et $\alpha \leq \alpha_2$, on a $e^{-\alpha_1 n} \leq e^{-\alpha n}$ et $e^{-\alpha_2 n} \leq e^{-\alpha n}$ (car $n \geq 0$).
  Ainsi :
  $$|(u+v)_n| \leq (C_1 + C_2) e^{-\alpha n} = C e^{-\alpha n}$$
  Donc $u + v \in E$.
* **Stabilité par multiplication externe :** Soit $u \in E$ (associé à $C$ et $\alpha$) et $\lambda \in \mathbb{R}$.
  $$|(\lambda u)_n| = |\lambda| |u_n| \leq |\lambda| C e^{-\alpha n}$$
  En posant $C' = |\lambda| C > 0$, on a $|(\lambda u)_n| \leq C' e^{-\alpha n}$, donc $\lambda u \in E$.

$E$ est bien un sous-espace vectoriel de $\mathbb{R}^\mathbb{N}$.

#### 2. Étude de la famille de suites géométriques
a) Pour $r \in ]0, 1[$, on écrit $r = e^{-\alpha}$ avec $\alpha = -\ln(r) > 0$. Alors $e^{(r)}_n = r^n = (e^\alpha)^{-n} = e^{-\alpha n}$. En choisissant $C = 1 > 0$, on a bien $|e^{(r)}_n| \leq 1 \cdot e^{-\alpha n}$, donc $e^{(r)} \in E$.

b) Soit $(r_1, r_2, \dots, r_k)$ des réels distincts de $]$,1[$. Soit $(\lambda_1, \lambda_2, \dots, \lambda_k) \in \mathbb{R}^k$ telle que :
$$\sum_{j=1}^{k} \lambda_j e^{(r_j)} = 0 \text{ dans } \mathbb{R}^\mathbb{N}$$
Cela signifie que pour tout $n \in \mathbb{N}$ :
$$\sum_{j=1}^{k} \lambda_j r_j^n = 0$$
Évaluons cette relation pour les $k$ premières valeurs de $n$ ($n = 0, 1, \dots, k-1$) :
- Pour $n = 0$ : $\lambda_1 + \lambda_2 + \dots + \lambda_k = 0$
- Pour $n = 1$ : $\lambda_1 r_1 + \lambda_2 r_2 + \dots + \lambda_k r_k = 0$
- $\vdots$
- Pour $n = k-1$ : $\lambda_1 r_1^{k-1} + \lambda_2 r_2^{k-1} + \dots + \lambda_k r_k^{k-1} = 0$

Sous forme matricielle, cela se traduit par le système homogène $V \Lambda = 0$, où $V$ est la matrice de Vandermonde associée aux paramètres $(r_1, r_2, \dots, r_k)$ :
$$V = \begin{pmatrix} 
1 & 1 & \cdots & 1 \\
r_1 & r_2 & \cdots & r_k \\
r_1^2 & r_2^2 & \cdots & r_k^2 \\
\vdots & \vdots & \ddots & \vdots \\
r_1^{k-1} & r_2^{k-1} & \cdots & r_k^{k-1} 
\end{pmatrix}$$
Le déterminant de cette matrice de Vandermonde vaut :
$$\det(V) = \prod_{1 \leq i < j \leq k} (r_j - r_i)$$
Puisque les réels $r_i$ sont tous distincts deux à deux, tous les facteurs $(r_j - r_i)$ sont non nuls, donc $\det(V) \neq 0$. La matrice $V$ est inversible.
Par conséquent, l'unique solution du système est $\Lambda = 0$, c'est-à-dire $\lambda_1 = \lambda_2 = \dots = \lambda_k = 0$.
La famille $(e^{(r_1)}, e^{(r_2)}, \dots, e^{(r_k)})$ est donc **libre**.

#### 3. Analyse critique du modèle de transmission
* **Critique des hypothèses :** 
  1. *Décroissance exponentielle vs Bruit réel :* L'hypothèse d'appartenance à $E$ suppose un signal déterministe ou idéalement atténué. En pratique, un canal de transmission est soumis à un bruit thermique (bruit blanc gaussien) dont les réalisations ne tendent pas vers $0$ de manière déterministe et ne vérifient pas une borne exponentielle stricte pour chaque échantillon. Le signal mesuré est donc $s_n + b_n où $b_n$ est le bruit.
  2. *Dimension finie $F$ :* Modéliser l'espace des signaux possibles par un espace de dimension finie $k$ est une approximation nécessaire pour le calcul numérique (DSP, FPGA). Cependant, si le signal réel nécessite une infinité de composantes indépendantes (parce que les constantes de temps du canal sont continues et non discrètes), la projection sur $F$ induit une **erreur de troncature**. 
  3. *Sensibilité numérique :* Les matrices de Vandermonde sont notoirement *mal conditionnées* lorsque $k$ grandit ou que les $r_i$ sont proches. Vouloir identifier un grand nombre de modes exponentiels à partir de mesures bruitées conduit à un problème inverse mal posé (instabilité numérique majeure, amplification considérable du bruit de mesure). 
  *Conclusion de l'ingénieur :* Le modèle algébrique en dimension finie est utile pour une première approximation ou un filtrage grossier, mais il doit être couplé à une analyse probabiliste du bruit et à des techniques de régularisation (type moindres carrés régularisés ou régularisation de Tikhonov) pour être exploitable dans un système réel.