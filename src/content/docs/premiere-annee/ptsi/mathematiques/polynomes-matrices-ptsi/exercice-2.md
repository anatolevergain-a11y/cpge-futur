---
title: 'Exercice 2 : Racines de polynômes'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $n \ge 2$ un entier naturel. On s'intéresse dans ce problème aux propriétés de localisation et de nature des racines de certains polynômes à coefficients réels ou complexes, en lien avec le calcul matriciel et l'analyse. 

Plus particulièrement, on étudie l'application qui à un polynôme $P \in \mathbb{C}[X]$ associe ses polynômes dérivés successifs, ainsi que des relations de récurrence liant les coefficients et les racines. Ce type de problématique intervient fréquemment dans l'étude de la stabilité des systèmes dynamiques discrets ou continus en sciences industrielles.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Étude préliminaire :** Soit $P = X^n + a_{n-1}X^{n-1} + \dots + a_1X + a_0$ un polynôme unitaire de $\mathbb{C}[X]$ de degré $n$. On note $z_1, z_2, \dots, z_n$ ses racines complexes (éventuellement confondues), comptées avec leur multiplicité. Exprimer les coefficients $a_{n-1}$ et $a_0$ en fonction de ces racines.
2. **Propriété de Rolle polynomiale :** Soit $P \in \mathbb{R}[X]$ un polynôme scindé sur $\mathbb{R}$. Montrer que son polynôme dérivé $P'$ est également scindé sur $\mathbb{R}$.
3. **Application matricielle :** Soit $A \in \mathcal{M}_n(\mathbb{C})$ une matrice dont le polynôme caractéristique $\chi_A$ est scindé à racines simples. Que peut-on dire de la diagonalisabilité de $A$ ? Justifier rigoureusement.
4. **Localisation des racines (Lemme de Gauss-Lucas) :** Soit $P \in \mathbb{C}[X]$ un polynôme non constant. Montrer que toutes les racines de $P'$ sont situées dans l'enveloppe convexe de l'ensemble des racines de $P$.
5. **Analyse critique du modèle :** En pratique, pour estimer les racines d'un polynôme de degré élevé, on utilise souvent des méthodes numériques itératives (comme la méthode de Newton) ou l'étude des valeurs propres d'une matrice compagnon associée. Expliquer pourquoi l'utilisation directe des relations coefficients-racines (formules de Viète) s'avère numériquement instable pour des degrés $n \ge 10$.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Penser à utiliser la factorisation de $P$ dans $\mathbb{C}[X]$ sous la forme $P = \prod_{k=1}^n (X - z_k)$ et procéder par identification.
* **Question 2 :** Utiliser le théorème de Rolle de l'analyse réelle entre deux racines consécutives distinctes d'un polynôme. Attention à bien traiter la multiplicité des racines.
* **Question 3 :** Le polynôme caractéristique d'une matrice de taille $n$ est de degré $n$. Si ses racines sont simples, quel est le lien avec les valeurs propres de $A$ ? Utiliser le critère de diagonalisabilité fondé sur la dimension des sous-espaces propres.
* **Question 4 :** Pour une racine $\zeta$ de $P'$ telle que $P(\zeta) \neq 0$, écrire la relation entre $P'(\zeta)$ et $P(\zeta)$ en utilisant la décomposition en éléments simples de $\frac{P'}{P}$ évaluée en $\zeta$.
* **Question 5 :** Considérer la sensibilité des racines d'un polynôme par rapport à une infime perturbation de ses coefficients (exemples de polynômes de Wilkinson).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Étude préliminaire
Puisque $P$ est un polynôme unitaire de degré $n$ et que $\mathbb{C}$ est algébriquement clos (théorème de d'Alembert-Gauss), $P$ se scinde sous la forme :
$$P(X) = \prod_{k=1}^n (X - z_k) = (X - z_1)(X - z_2)\dots(X - z_n)$$
En développant ce produit, le coefficient de $X^{n-1}$ s'obtient en choisissant $X$ dans $n-1$ facteurs et $-z_k$ dans le dernier. Ainsi :
$$a_{n-1} = -\sum_{k=1}^n z_k$$
Pour le terme constant $a_0$, il suffit d'évaluer le polynôme en $0$ :
$$P(0) = \prod_{k=1}^n (0 - z_k) = (-1)^n \prod_{k=1}^n z_k$$
Or, par définition de $P$, on a $a_0 = P(0)$, donc :
$$a_0 = (-1)^n \prod_{k=1}^n z_k$$

#### 2. Propriété de Rolle polynomiale
Soit $P \in \mathbb{R}[X]$ un polynôme scindé sur $\mathbb{R}$. Notons $x_1 < x_2 < \dots < x_r$ ses racines distinctes de multiplicités respectives $m_1, m_2, \dots, m_r$. 
La somme des multiplicités est $\sum_{i=1}^r m_i = n = \deg(P)$.
D'après le théorème de Rolle, entre deux racines consécutives $x_i$ et $x_{i+1}$, la fonction polynomiale associée à $P$ s'annule en changeant de signe aux extrémités, donc il existe au moins une racine de $P'$ dans l'intervalle ouvert $]x_i, x_{i+1}[$. Cela fournit $r-1$ racines réelles distinctes.
De plus, chaque racine $x_i$ de multiplicité $m_i \ge 2$ est racine de $P'$ avec la multiplicité $m_i - 1$.
Le nombre total de racines réelles de $P'$ comptées avec leur multiplicité est donc :
$$\sum_{i=1}^r (m_i - 1) + (r - 1) = \sum_{i=1}^r m_i - r + r - 1 = n - 1 = \deg(P')$$
Le polynôme $P'$ est donc nécessairement **scindé sur $\mathbb{R}$**.

#### 3. Application matricielle
Soit $A \in \mathcal{M}_n(\mathbb{C})$ dont le polynôme caractéristique $\chi_A$ est scindé à racines simples. 
Notons $\lambda_1, \lambda_2, \dots, \lambda_n$ ces $n$ racines distinctes. Ce sont les valeurs propres de $A$.
Puisque le polynôme caractéristique de $A$ est de degré $n$ et possède $n$ racines distinctes, $A$ admet $n$ valeurs propres distinctes.
Or, si une matrice de taille $n$ possède $n$ valeurs propres distinctes, les sous-espaces propres associés sont de dimension $1$ (leur dimension est comprise entre $1$ et leur multiplicité qui vaut ici $1$). La somme de leurs dimensions est donc $\sum_{i=1}^n 1 = n$.
Par conséquent, **la matrice $A$ est diagonalisable**.

#### 4. Localisation des racines (Lemme de Gauss-Lucas)
Soit $z_0$ une racine de $P'$ telle que $P(z_0) \neq 0$ (si $P(z_0) = 0$, $z_0$ est déjà racine de $P$, donc le résultat est trivial car $z_0$ appartient à l'enveloppe convexe des racines).
Écrivons $P(X) = c \prod_{k=1}^m (X - z_k)$ où $c \neq 0$. En prenant la dérivée logarithmique (valide là où $P \neq 0$), on a :
$$\frac{P'(X)}{P(X)} = \sum_{k=1}^m \frac{1}{X - z_k}$$
Évaluons cette relation en $z_0$ sachant que $P'(z_0) = 0$ :
$$\sum_{k=1}^m \frac{1}{z_0 - z_k} = 0$$
En prenant le conjugué ou en multipliant par le conjugué, on obtient :
$$\sum_{k=1}^m \frac{\bar{z}_0 - \bar{z}_k}{|z_0 - z_k|^2} = 0 \implies \sum_{k=1}^m \lambda_k (z_0 - z_k) = 0$$
où $\lambda_k = \frac{1}{|z_0 - z_k|^2} > 0$. On en tire :
$$z_0 = \frac{\sum_{k=1}^m \lambda_k z_k}{\sum_{k=1}^m \lambda_k}$$
Ainsi, $z_0$ s'exprime comme un barycentre à coefficients strictement positifs des racines $z_1, \dots, z_m$. Par conséquent, **$z_0$ appartient à l'enveloppe convexe des racines de $P$**.

#### 5. Analyse critique du modèle
Les relations coefficients-racines (formules de Viète) expriment les coefficients $a_i$ comme des fonctions symétriques élémentaires des racines. 
Pour un polynôme de degré $n \ge 10$, la résolution exacte par radicaux est impossible (théorème d'Abel-Ruffini). De plus, l'utilisation directe de ces relations pour déterminer les racines conduit à un système d'équations algébriques non linéaires extrêmement mal conditionné. Une infime variation (liée aux erreurs d'arrondi machine) sur un coefficient $a_i$ peut entraîner une modification radicale et erratique de la position des racines dans le plan complexe (phénomène illustré par les polynômes de Wilkinson). C'est pourquoi les codes de calcul scientifique modernes proscrivent cette approche et passent par le calcul des valeurs propres d'une **matrice compagnon** via des algorithmes itératifs stables (comme l'algorithme QR).