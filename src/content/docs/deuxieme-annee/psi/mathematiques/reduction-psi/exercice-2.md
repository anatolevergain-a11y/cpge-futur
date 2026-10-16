---
title: 'Exercice 2 : Sous-espaces propres'
description: 'Problème d entraînement type concours pour PSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $E$ un espace vectoriel sur $\mathbb{K}$ ($\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$) de dimension finie $n \in \mathbb{N}^*$. On considère un endomorphisme $u \in \mathcal{L}(E)$. 

L'objectif de ce problème est d'étudier la structure et les propriétés fondamentales des sous-espaces propres de $u$, ainsi que d'explorer des applications liées à la commutativité d'endomorphismes et au polynôme minimal, notions centrales pour les concours Mines-Ponts et Centrale-Supélec.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Définition et indépendance linéaire**
   Soit $\lambda$ une valeur propre de $u$ et $E_\lambda(u) = \ker(u - \lambda \text{Id}_E)$ le sous-espace propre associé.
   a) Rappeler pourquoi $E_\lambda(u)$ est un sous-espace vectoriel de $E$.
   b) Soient $\lambda_1, \lambda_2, \dots, \lambda_k$ des valeurs propres **distinctes** de $u$ et soient $x_1, x_2, \dots, x_k$ des vecteurs non nuls tels que pour tout $i \in \{1, \dots, k\}$, $x_i \in E_{\lambda_i}(u)$. Montrer par récurrence sur $k$ que la famille $(x_1, \dots, x_k)$ est libre.

2. **Stabilité et endomorphismes induits**
   Soit $F$ un sous-espace vectoriel de $E$ stable par $u$ (c'est-à-dire $u(F) \subset F$). On note $u_F$ l'endomorphisme induit par $u$ sur $F$ défini par $\forall x \in F, \, u_F(x) = u(x)$.
   a) Soit $\lambda$ une valeur propre de $u_F$. Montrer que $\lambda$ est une valeur propre de $u$.
   b) Établir une relation générale entre les spectres $\text{Sp}(u_F)$ et $\text{Sp}(u)$ (le cas échéant, est-ce une inclusion stricte ou une égalité ?).

3. **Application à la commutativité**
   Soit $v \in \mathcal{L}(E)$ tel que $u \circ v = v \circ u$.
   a) Montrer que tout sous-espace propre $E_\1(\lambda)$ de $u$ est stable par $v$.
   b) En déduire que si $u$ est diagonalisable et que tous ses sous-espaces propres sont de dimension $1$, alors tout endomorphisme $v$ qui commute avec $u$ est un polynôme en $u$.
   c) **Analyse critique du modèle :** La condition « tous les sous-espaces propres sont de dimension $1$ » est-elle nécessaire pour qu'un endomorphisme commutant soit un polynôme en $u$ ? Proposer un contre-exemple si elle ne l'est pas.

---

### 💡 Pistes & Indications méthodologiques

- **Q1.b)** Procéder par récurrence. Pour l'hérédité, appliquer l'endomorphisme $(u - \lambda_k \text{Id}_E)$ à la relation de liaison $\sum_{i=1}^k x_i = 0$ pour éliminer le terme en $x_k$.
- **Q2.a)** Revenir à la définition d'une valeur propre : l'existence d'un vecteur propre non nul. Attention à bien préciser que ce vecteur appartient à $F$.
- **Q3.a)** Soit $x \in E_\lambda(u)$. Calculer $u(v(x))$ en utilisant la relation de commutation.
- **Q3.b)** Utiliser une base de vecteurs propres de $E$ et évaluer $v$ sur chaque vecteur de cette base.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Définition et indépendance linéaire

a) Par définition, $E_\lambda(u) = \ker(u - \lambda \text{Id}_E)$. Comme le noyau d'un endomorphisme est toujours un sous-espace vectoriel de l'espace de départ, $E_\lambda(u)$ est un sous-espace vectoriel de $E$.

b) Démontrons par récurrence sur $k \ge 1$ la proposition $\mathcal{P}(k)$ : « Toute famille $(x_1, \dots, x_k)$ de vecteurs propres associés à des valeurs propres distinctes $(\lambda_1, \dots, \lambda_k)$ est libre. »

* **Initialisation ($k=1$) :** Soit $x_1 \in E_{\lambda_1}(u)$ tel que $x_1 \neq 0$. Une famille composée d'un unique vecteur non nul est clairement libre. $\mathcal{P}(1)$ est vraie.
* **Hérédité :** Supposons que la propriété $\mathcal{P}(k)$ soit vraie pour un certain $k \ge 1$. Soient $\lambda_1, \dots, \lambda_{k+1}$ des valeurs propres deux à deux distinctes et $(x_1, \dots, x_{k+1})$ des vecteurs non nuls tels que $x_i \in E_{\lambda_i}(u)$ pour tout $i \in \{1, \dots, k+1\}$.
Supposons qu'il existe une relation de liaison :
$$\sum_{i=1}^{k+1} \alpha_i x_i = 0 \quad (\text{avec } (\alpha_1, \dots, \alpha_{k+1}) \in \mathbb{K}^{k+1})$$
Appliquons l'endomorphisme $(u - \lambda_{k+1} \text{Id}_E)$ à cette relation :
$$(u - \lambda_{k+1} \text{Id}_E)\left(\sum_{i=1}^{k+1} \alpha_i x_i\right) = 0$$
Par linéarité :
$$\sum_{i=1}^{k+1} \alpha_i (u - \lambda_{k+1} \text{Id}_E)(x_i) = 0$$
Or, pour tout $i \in \{1, \dots, k+1\}$, $u(x_i) = \lambda_i x_i$, donc $(u - \lambda_{k+1} \text{Id}_E)(x_i) = (\lambda_i - \lambda_{k+1})x_i$. La somme devient :
$$\sum_{i=1}^{k} \alpha_i (\lambda_i - \lambda_{k+1}) x_i + \alpha_{k+1}(\lambda_{k+1} - \lambda_{k+1})x_{k+1} = 0$$
Soit :
$$\sum_{i=1}^{k} \alpha_i (\lambda_i - \lambda_{k+1}) x_i = 0$$
Par hypothèse de récurrence, la famille $(x_1, \dots, x_k)$ est libre. Par conséquent, tous les coefficients de cette combinaison linéaire sont nuls :
$$\forall i \in \{1, \dots, k\}, \quad \alpha_i (\lambda_i - \lambda_{k+1}) = 0$$
Les valeurs propres $\lambda_1, \dots, \lambda_{k+1}$ étant deux à deux distinctes, on a $\lambda_i - \lambda_{k+1} \neq 0$ pour tout $i \in \{1, \dots, k\}$. On en déduit que :
$$\forall i \in \{1, \dots, k\}, \quad \alpha_i = 0$$
En réinjectant dans la relation initiale, il vient $\alpha_{k+1} x_{k+1} = 0$. Puisque $x_{k+1} \neq 0$, on a nécessairement $\alpha_{k+1} = 0$.
La famille $(x_1, \dots, x_{k+1})$ est donc libre. $\mathcal{P}(k+1)$ est vraie.

Par le principe de récurrence, la propriété est démontrée pour tout $k \ge 1$. $\blacksquare$

---

#### 2. Stabilité et endomorphismes induits

a) Soit $\lambda \in \text{Sp}(u_F)$. Par définition, il existe un vecteur non nul $x \in F$ tel que $u_F(x) = \lambda x$.
Puisque $u_F$ est l'endomorphisme induit, on a $u_F(x) = u(x)$. Ainsi, $u(x) = \lambda x$ avec $x \in F$ et $x \neq 0$. Comme $F \subset E$, $x$ est un vecteur non nul de $E$ tel que $u(x) = \lambda x$. 
Par conséquent, $\lambda$ est une valeur propre de $u$. $\blacksquare$

b) D'après la question précédente, on a l'inclusion $\text{Sp}(u_F) \subset \text{Sp}(u)$. 
Cette inclusion peut être stricte. Par exemple, soit $E = \mathbb{R}^2$ et $u$ l'endomorphisme de matrice $A = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$ dans la base canonique. Le polynôme caractéristique est $\chi_u(X) = (1-X)(2-X)$, donc $\text{Sp}(u) = \{1, 2\}$.
Si l'on considère le sous-espace $F = \text{Vect}((1, 0))$, on vérifie que $u(F) \subset F$ (car $u(1,0) = 1 \cdot (1,0)$). L'endomorphisme induit $u_F$ a pour matrice $\begin{pmatrix} 1 \end{pmatrix}$, donc $\text{Sp}(u_F) = \{1\}$.
Ici, $\text{Sp}(u_F) = \{1\} \subsetneq \{1, 2\} = \text{Sp}(u)$.

---

#### 3. Application à la commutativité

a) Soit $E_\lambda(u)$ un sous-espace propre de $u$ associé à la valeur propre $\lambda$. Soit $x \in E_\lambda(u)$. Montrons que $v(x) \in E_\lambda(u)$, c'est-à-dire que $u(v(x)) = \lambda v(x)$.
Puisque $u$ et $v$ commutent ($u \circ v = v \circ u$), on a :
$$u(v(x)) = (u \circ v)(x) = (v \circ u)(x) = v(u(x))$$
Or, comme $x \in E_\lambda(u)$, on a $u(x) = \lambda x$. Par conséquent :
$$u(v(x)) = v(\lambda x) = \lambda v(x)$$
Le vecteur $v(x)$ appartient bien à $E_\lambda(u)$. Le sous-espace $E_\lambda(u)$ est donc stable par $v$. $\blacksquare$

b) Supposons que $u$ soit diagonalisable et que $\dim(E_\lambda(u)) = 1$ pour toute valeur propre $\lambda$.
Soit $(e_1, \dots, e_n)$ une base de $E$ constituée de vecteurs propres de $u$ associés aux valeurs propres $(\lambda_1, \dots, \lambda_n)$ (qui ne sont pas nécessairement distinctes, mais chaque espace propre étant de dimension 1, chaque $\lambda_i$ répète sa multiplicité).
Soit $v \in \mathcal{L}(E)$ commutable avec $u$. D'après la question 3.a), chaque droite $E_{\lambda_i}(u) = \text{Vect}(e_i)$ est stable par $v$. 
Cela signifie que pour tout $i \in \{1, \dots, n\}$, il existe un scalaire $\mu_i \in \mathbb{K}$ tel que :
$$v(e_i) = \mu_i e_i$$
Nous cherchons un polynôme $P \in \mathbb{K}[X]$ tel que $v = P(u)$. Une telle condition équivaut à exiger que pour tout $i \in \{1, \dots, n\}$ :
$$P(u)(e_i) = P(\lambda_i) e_i = \mu_i e_i$$
Il suffit donc de trouver un polynôme $P$ tel que :
$$\forall i \in \{1, \dots, n\}, \quad P(\lambda_i) = \mu_i$$
Soit $\{\sigma_1, \dots, \sigma_p\}$ l'ensemble des valeurs propres **distinctes** de $u$. Les scalaires $\mu_i$ associés à des vecteurs propres d'une même valeur propre $\sigma_j$ sont nécessairement égaux (si $e_i$ et $e_j$ sont colinéaires, la stabilité par $v$ impose le même coefficient scalaire). 
Par interpolation de Lagrange, il existe un polynôme $P \in \mathbb{K}[X]$ de degré inférieur ou égal à $p-1$ tel que :
$$\forall j \in \{1, \dots, p\}, \quad P(\sigma_j) = \mu_j$$
Pour ce polynôme $P$, on a alors $P(u)(e_i) = P(\lambda_i) e_i = \mu_i e_i = v(e_i)$ pour tout $i \in \{1, \dots, n\}$. Les endomorphismes $v$ and $P(u)$ coïncident sur une base de $E$, donc $v = P(u)$. Tout endomorphisme commutant avec $u$ est bien un polynôme en $u$. $\blacksquare$

c) **Analyse critique du modèle :** La condition « $\dim(E_\lambda(u)) = 1$ pour tout $\lambda$ » **n'est pas nécessaire**. 
Contre-exemple: * Soit $E = \mathbb{K}^n$ et $u = \text{Id}_E$. Les sous-espaces propres se réduisent à un seul espace $E_1(u) = E$, dont la dimension est $n$ (qui peut être strictement supérieure à $1$ si $n \ge 2$).
Tout endomorphisme $v \in \mathcal{L}(E)$ commute avec l'identité ($\text{Id}_E \circ v = v \circ \text{Id}_E$). 
Pourtant, $v$ est simplement n'importe quel endomorphisme de $E$. En choisissant $v$ tel que sa matrice dans une base ne soit pas diagonalisable (ou n'appartienne pas à l'algèbre engendrée par l'identité, ce qui est impossible puisque $v = v \cdot \text{Id}_E$ ... attention !). 

*Précision du contre-exemple :* Si $u = \text{Id}_E$, alors tout endomorphisme $v$ commute avec $u$ et s'écrit trivialement $v = v(\text{Id}_E)$, qui est bien un polynôme en $u$ (de degré $0$ ou $1$). 
Considérons plutôt $u$ diagonalisable dont un espace propre a une dimension supérieure ou égale à $2$. Soit $E = \mathbb{R}^2$ et $u$ l'endomorphisme associé à la matrice $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$. Alors $u = \text{Id}_E$, et tout endomorphisme commute avec $u$. 
Prenons $E = \mathbb{R}^3$ et $u$ défini par la matrice $\begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$. 
Les valeurs propres sont $\lambda_1 = 2$ (espace propre de dimension $2$) et $\lambda_2 = 3$ (espace propre de dimension $1$). 
Soit $v$ un endomorphisme dont la matrice dans la base canonique est $B = \begin{pmatrix} 0 & 1 & 0 \\ -1 & 0 & 0 \\ 0 & 0 & 5 \end{pmatrix}$. On vérifie par calcul matriciel que $AB = BA$. 
Cependant, $v$ ne peut pas s'écrire sous la forme d'un polynôme en $u$ car les matrices commutant avec une matrice diagonale par blocs ne forment pas nécessairement une algèbre engendrée par un seul polynôme si les blocs ont des dimensions $\ge 2$ (ici le bloc $2 \times 2$ permet des rotations qui ne sont pas des polynômes scalaires). 
Par conséquent, la condition de dimension $1$ est une condition suffisante mais non nécessaire pour certains spectres triviaux, et son absence permet l'existence d'endomorphismes commutants non polynomiaux.