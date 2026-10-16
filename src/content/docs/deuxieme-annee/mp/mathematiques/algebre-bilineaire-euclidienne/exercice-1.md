---
title: 'Exercice 1 : Formes quadratiques et réduction symétrique'
description: 'Problème d entraînement type concours pour MP.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $n \ge 2$ un entier. On munit l'espace vectoriel $\mathbb{R}^n$ de son produit scalaire usuel, noté $\langle \cdot, \cdot \rangle$, et de sa base canonique $\mathcal{B} = (e_1, \dots, e_n)$. 
Soit $A = (a_{i,j})_{1 \le i,j \le n}$ une matrice symétrique réelle de taille $n \times n$. On y associe la forme quadratique $q$ définie sur $\mathbb{R}^n$ par :
$$\forall x = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} \in \mathbb{R}^n, \quad q(x) = X^T A X = \sum_{i=1}^n a_{i,i} x_i^2 + 2 \sum_{1 \le i < j \le n} a_{i,j} x_i x_j$$
où $X$ désigne le vecteur colonne des coordonnées de $x$ dans la base $\mathcal{B}$.

L'objectif de ce problème est d'étudier un procédé de réduction simultanée et d'examiner le lien entre les coefficients diagonaux de $A$ et ses valeurs propres dans le cas où $A$ est à diagonal dominante.

---

### ❓ Questions progressives

1. **Préalable sur la signature :** Soit $P \in \mathcal{M}_n(\mathbb{R})$ une matrice inversible et $q$ une forme quadratique de matrice $A$ dans la base canonique. Exprimez la matrice de $q$ dans la nouvelle base dont la matrice de passage est $P$, et déduisez-en que la signature de $q$ est invariante par changement de base.
2. **Réduction par la méthode de Gauss :** On considère la forme quadratique définie sur $\mathbb{R}^3$ par :
   $$q_3(x, y, z) = x^2 + 4xy + 2xz + 6y^2 + 4yz + 3z^2$$
   Décomposer $q_3$ en somme de carrés de formes linéaires indépendantes. Préciser le rang et la signature de $q_3$.
3. **Caractérisation spectrale et positivité :** Démontrer que $q$ est positive (i.e. $\forall x \in \mathbb{R}^n, q(x) \ge 0$) si et seulement si toutes les valeurs propres de $A$ sont positives ou nulles.
4. **Application aux matrices à diagonale dominante :** On suppose que la matrice $A$ vérifie la condition de dominance diagonale stricte :
   $$\forall i \in \llbracket 1, n \rrbracket, \quad |a_{i,i}| > \sum_{j \neq i} |a_{i,j}|$$
   On suppose de plus que les éléments diagonaux sont strictement positifs : $\forall i \in \llbracket 1, n \rrbracket, a_{i,i} > 0$. 
   En considérant l'action de $A$ sur un vecteur où les coordonnées atteignent un maximum en valeur absolue, montrer que $A$ est une matrice définie positive.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Rappelez la formule de changement de base pour une matrice représentative d'une forme bilinéaire symétrique / quadratique. Utilisez le théorème du rang pour l'invariance du rang, et la connexité par arcs ou le théorème d'Sylvester pour l'invariance de la signature (ou l'isomorphisme induit sur les sous-espaces spectraux).
* **Question 2 :** Procédez par regroupement successif des termes selon l'algorithme de Gauss. Isolez d'abord les termes en $x$, puis factorisez le reste en fonction de $y$ et $z$.
* **Question 3 :** Utilisez le théorème spectral : puisque $A$ est symétrique réelle, elle est diagonalisable dans une base orthonormée. Exprimez $q(x)$ dans cette nouvelle base.
* **Question 4 :** Raisonnez par l'absurde ou par maximisation. Soit $x_0 \in \mathbb{R}^n$ un vecteur non nul tel que l'une de ses composantes est maximale en valeur absolue. Évaluez la $i$-ème ligne du produit $A x_0$ pour cet indice.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Préalable sur la signature
Soit $P$ la matrice de passage de la base $\mathcal{B}$ à une nouvelle base $\mathcal{B}'$. La matrice de la forme quadratique $q$ dans la base $\mathcal{B}'$ est donnée par $A' = P^T A P$.
* **Invariance du rang :** Comme $P$ est inversible, $\text{rg}(A') = \text{rg}(P^T A P) = \text{rg}(A)$ car le rang ne change pas par multiplication par des matrices inversibles. Le rang de la forme quadratique est donc invariant.
* **Invariance de la signature :** D'après le théorème d'inertie de Sylvester, si l'on écrit $q$ sous forme d'une somme de carrés $q(x) = \sum_{i=1}^r \pm u_i(x)^2$, le nombre de coefficients positifs (indice d'inertie positif $p$) et le nombre de coefficients négatifs (indice d'inertie négatif $n$) ne dépendent pas de la base choisie. Ils caractérisent la signature $(p, n)$.

---

#### 2. Réduction par la méthode de Gauss pour $q_3$
On écrit :
$$q_3(x, y, z) = x^2 + 4xy + 2xz + 6y^2 + 4yz + 3z^2$$
On regroupe tous les termes contenant $x$ :
$$q_3(x, y, z) = \underbrace{x^2 + 2x(2y + z) + (2y + z)^2}_{\text{carré parfait}} - (2y + z)^2 + 6y^2 + 4yz + 3z^2$$
$$q_3(x, y, z) = (x + 2y + z)^2 - (4y^2 + 4yz + z^2) + 6y^2 + 4yz + 3z^2$$
En simplifiant les termes en $y$ et $z$ :
$$q_3(x, y, z) = (x + 2y + z)^2 + 2y^2 + 2z^2$$
Cette écriture est une somme de carrés de formes linéaires indépendantes :
* $L_1(x, y, z) = x + 2y + z$
* $L_2(x, y, z) = y$
* $L_3(x, y, z) = z$
Bilan: ** 
* Le **rang** de $q_3$ est $3$ (nombre de carrés non nuls).
* La **signature** de $q_3$ est $(3, 0)$ (trois coefficients strictement positifs). La forme quadratique est donc définie positive.

---

#### 3. Caractérisation spectrale et positivité
Puisque $A$ est une matrice symétrique réelle, d'après le **théorème spectral**, il existe une base orthonormée $(varepsilon_1, \dots, \varepsilon_n)$ de $\mathbb{R}^n$ constituée de vecteurs propres de $A$ associés à des valeurs propres réelles $\lambda_1, \dots, \lambda_n$.
Soit $P$ la matrice de passage orthogonale vers cette base ($\mathcal{P}^{-1} = P^T$). Dans cette nouvelle base, si l'on note $Y = P^T X$, on a :
$$q(x) = X^T A X = (PY)^T A (PY) = Y^T (P^T A P) Y = \sum_{i=1}^n \lambda_i y_i^2$$
* **Sens $(\Leftarrow)$ :** Si $\forall i, \lambda_i \ge 0$, alors pour tout $Y \in \mathbb{R}^n$, $\sum_{i=1}^n \lambda_i y_i^2 \ge 0$, donc $q$ est positive.
* **Sens $(\Rightarrow)$ :** Si $q$ est positive, supposons par l'absurde qu'il existe une valeur propre $\lambda_j < 0$. En choisissant le vecteur $x = \varepsilon_j$ (soit $Y = e_j$), on a $q(\varepsilon_j) = \lambda_j < 0$, ce qui contredit la positivité de $q$. 

Par conséquent, $q$ est positive si et seulement si $\text{Sp}(A) \subset [0, +\infty[$.

---

#### 4. Application aux matrices à diagonale dominante
Soit $\lambda$ une valeur propre de $A$ et $X = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} \in \mathbb{R}^n \setminus \{0\}$ un vecteur propre associé : $AX = \lambda X$.
Soit $i_0 \in \llbracket 1, n \rrbracket$ tel que $|x_{i_0}| = \max_{1 \le i \le n} |x_i|$. Comme $X \neq 0$, on a $|x_{i_0}| > 0$.
Écrivons la $i_0$-ème ligne du système $AX = \lambda X$ :
$$\sum_{j=1}^n a_{i_0, j} x_j = \lambda x_{i_0} \implies (\lambda - a_{i_0, i_0}) x_{i_0} = \sum_{j \neq i_0} a_{i_0, j} x_j$$
En prenant la valeur absolue des deux côtés et en utilisant l'inégalité triangulaire :
$$|\lambda - a_{i_0, i_0}| |x_{i_0}| \le \sum_{j \neq i_0} |a_{i_0, j}| |x_j|$$
Puisque $|x_j| \le |x_{i_0}|$ pour tout $j$ et que $|x_{i_0}| > 0$, on peut diviser par $|x_{i_0}|$ :
$$|\lambda - a_{i_0, i_0}| \le \sum_{j \neq i_0} |a_{i_0, j}|$$
Par l'inégalité triangulaire inverse, on a aussi $|\lambda - a_{i_0, i_0}| \ge |\lambda| - a_{i_0, i_0}$ (car $a_{i_0, i_0} > 0$). Ainsi :
$$|\lambda| - a_{i_0, i_0} \le \sum_{j \neq i_0} |a_{i_0, j}| \implies |\lambda| \le a_{i_0, i_0} + \sum_{j \neq i_0} |a_{i_0, j}|$$
Mais l'hypothèse de dominance diagonale stricte nous assure que $a_{i_0, i_0} > \sum_{j \neq i_0} |a_{i_0, j}|$, ce qui implique en particulier que $\lambda \neq 0$ (mieux encore, $\lambda > a_{i_0, i_0} - \sum_{j \neq i_0} |a_{i_0, j}| > 0$).

Toutes les valeurs propres de $A$ sont donc **strictement positives**. D'après la question précédente, la forme quadratique associée est définie positive, et par conséquent **la matrice $A$ est symétrique définie positive**.