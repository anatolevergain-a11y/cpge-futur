---
title: 'Exercice 1 : Polynômes de matrices et théorème de Cayley-Hamilton'
description: 'Problème corrigé type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $n \ge 1$ un entier. On note $M_n(\mathbb{C})$ l'espace des matrices carrées de taille $n$ à coefficients dans $\mathbb{C}$, et $I_n$ la matrice identité de $M_n(\mathbb{C})$. 
Pour toute matrice $A \in M_n(\mathbb{C})$ et tout polynôme $P = \sum_{k=0}^{d} a_k X^k \in \mathbb{C}[X]$, on définit la matrice $P(A)$ par :
$$P(A) = \sum_{k=0}^{d} a_k A^k$$
où $A^0 = I_n$.

L'objectif de ce problème est d'étudier l'application d'évaluation des polynômes, d'introduire la notion d'annulateur, et de démontrer le célèbre théorème de Cayley-Hamilton dans le cas particulier des matrices diagonalisables, puis d'en déduire des applications pratiques pour le calcul de puissances de matrices.

---

### ❓ Questions progressives

1. **Propriétés de l'homomorphisme d'évaluation**
   Soit $A \in M_n(\mathbb{C})$. On considère l'application $\Phi_A : \mathbb{C}[X] \to M_n(\mathbb{C})$ définie par $\Phi_A(P) = P(A)$.
   Montrer que $\Phi_A$ est une application linéaire et que pour tous polynômes $P, Q \in \mathbb{C}[X]$, on a $(PQ)(A) = P(A)Q(A) = Q(A)P(A)$.

2. **Idéal des polynômes annulateurs**
   On définit l'ensemble des polynômes annulateurs de $A$ par $I(A) = \{ P \in \mathbb{C}[X] \mid P(A) = 0_{M_n(\mathbb{C})} \}.
   a) Montrer que $I(A)$ est un idéal de $\mathbb{C}[X]$.
   b) En déduire qu'il existe un unique polynôme unitaire $1$ noté $\pi_A$, appelé polynôme minimal de $A$, tel que $I(A) = \pi_A \mathbb{C}[X]$.

3. **Le théorème de Cayley-Hamilton (Cas diagonalisable)**
   Soit $A \in M_n(\mathbb{C})$ une matrice diagonalisable. On note $\chi_A(X) = \det(X I_n - A) = \prod_{i=1}^{n} (X - \lambda_i)$ son polynôme caractéristique (où les $\lambda_i$ sont les valeurs propres de $A$, non nécessairement distinctes).
   a) Montrer que pour toute matrice inversible $P \in GL_n(\mathbb{C})$, si $A = P D P^{-1}$, alors $\chi_A(A) = P \chi_A(D) P^{-1}$.
   b) Calculer $\chi_A(D)$ lorsque $D$ est une matrice diagonale.
   c) Conclure que $\chi_A(A) = 0_{M_n(\mathbb{C})}$ lorsque $A$ est diagonalisable.

4. **Application au calcul de puissances**
   On considère la matrice $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$.
   a) Déterminer les valeurs propres de $A$ et son polynôme caractéristique $\chi_A(X)$.
   b) Vérifier explicitement le théorème de Cayley-Hamilton pour cette matrice $A$.
   c) En effectuant la division euclidienne de $X^k$ par $\chi_A(X)$, déterminer l'expression explicite de $A^k$ pour tout entier $k \in \mathbb{N}$.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Utilisez la définition des opérations sur les matrices (combinaisons linéaires pour la linéarité, et la distributivité/associativité du produit matriciel pour le produit de polynômes).
- **Question 2 :** Rappelez qu'en tant qu'anneau principal, tout idéal de $\mathbb{C}[X]$ est principal (engendré par un unique polynôme unitaire).
- **Question 3 :** Si $A$ est diagonalisable, écrivez $A = PDP^{-1}$ et remarquez que les puissances s'écrivent $A^k = P D^k P^{-1}$. Pour évaluer un polynôme, substituez $D$ dans chaque terme diagonal.
- **Question 4 :** Utilisez la division euclidienne de $X^k$ par le polynôme caractéristique $\chi_A(X)$ de degré 2 : $X^k = Q(X)\chi_A(X) + R(X)$ avec $\deg(R) \le 1$. En évaluant en $A$, le terme $\chi_A(A)$ s'annule.

---

### 📋 Corrigé détaillé et vérification des résultats

#### Corrigé de la question 1
Soient $P = \sum_{k=0}^{d} a_k X^k$ et $Q = \sum_{j=0}^{m} b_j X^j$ deux polynômes de $\mathbb{C}[X]$, et soit $\alpha \in \mathbb{C}$.
- **Linéarité :**
  $$\Phi_A(\alpha P + Q) = (\alpha P + Q)(A) = \sum_{k=0}^{\max(d,m)} (\alpha a_k + b_k) A^k$$
  Par linéarité de la combinaison linéaire dans $M_n(\mathbb{C})$ :
  $$\sum_{k=0}^{\max(d,m)} \alpha a_k A^k + \sum_{k=0}^{\max(d,m)} b_k A^k = \alpha \sum_{k=0}^{d} a_k A^k + \sum_{k=0}^{m} b_k A^k = \alpha \Phi_A(P) + \Phi_A(Q)$$
  L'application $\Phi_A$ est donc linéaire.

- **Produit :**
  Le produit de $P$ et $Q$ est donné par $PQ = \sum_{s=0}^{d+m} c_s X^s$ avec $c_s = \sum_{k+j=s} a_k b_j$.
  En évaluant en $A$ :
  $$(PQ)(A) = \sum_{s=0}^{d+m} c_s A^s = \sum_{s=0}^{d+m} \left( \sum_{k+j=s} a_k b_j \right) A^{k+j}$$
  Comme la multiplication matricielle est associative et distributive par rapport à l'addition, on réorganise la somme double :
  $$\left(\sum_{k=0}^{d} a_k A^k\right) \left(\sum_{j=0}^{m} b_j A^j\right) = P(A)Q(A)$$
  De même, on montre que $P(A)Q(A) = Q(A)P(A)$ (les polynômes en une même matrice commutent entre eux).

---

#### Corrigé de la question 2
a) 
- $0_{\mathbb{C}[X]} \in I(A)$ car le polynôme nul évaluate à la matrice nulle $0_{M_n(\mathbb{C})}$, donc $I(A) \neq \emptyset$.
- Soient $P, Q \in I(A)$ et $\lambda, \mu \in \mathbb{C}$. On a :
  $$(\lambda P + \mu Q)(A) = \lambda P(A) + \mu Q(A) = \lambda 0_{M_n(\mathbb{C})} + \mu 0_{M_n(\mathbb{C})} = 0_{M_n(\mathbb{C})}$$
  Donc $\lambda P + \mu Q \in I(A)$.
- Soient $P \in I(A)$ et $B \in \mathbb{C}[X]$. On a :
  $$(BP)(A) = B(A)P(A) = B(A) \times 0_{M_n(\mathbb{C})} = 0_{M_n(\mathbb{C})}$$
  Donc $BP \in I(A)$.
  $I(A)$ est bien un idéal de $\mathbb{C}[X]$.

b) L'anneau $\mathbb{C}[X]$ est un anneau principal (tout idéal y est principal). Par conséquent, l'idéal $I(A)$ est engendré par un unique polynôme unitaire $\pi_A$. De plus, comme le théorème de Cayley-Hamilton (admis ou démontré par la suite) garantit que le polynôme caractéristique est annulateur, $I(A) \neq \{0\}$, donc $\pi_A \neq 0$.

---

#### Corrigé de la question 3
a) Soit $A = P D P^{-1}$ avec $P \in GL_n(\mathbb{C})$. 
Pour tout entier $k \in \mathbb{N}$, on a par récurrence immédiate :
$$A^k = (P D P^{-1})(P D P^{-1})\dots(P D P^{-1}) = P D^k P^{-1}$$
Ainsi, pour tout polynôme $P_{oly} = \sum_{k=0}^{d} a_k X^k$ :
$$P_{oly}(A) = \sum_{k=0}^{d} a_k A^k = \sum_{k=0}^{d} a_k P D^k P^{-1} = P \left( \sum_{k=0}^{d} a_k D^k \right) P^{-1} = P P_{oly}(D) P^{-1}$$
En appliquant ceci au polynôme caractéristique $\chi_A$ (en remarquant que $\chi_A = \chi_D$), on obtient $\chi_A(A) = P \chi_A(D) P^{-1}$.

b) Soit $D = \text{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)$ une matrice diagonale. 
Le polynôme caractéristique est $\chi_A(X) = \prod_{i=1}^{n} (X - \lambda_i)$.
Pour tout $j \in \{1, \dots, n\}$, le $j$-ième élément diagonal de la matrice $\chi_A(D)$ est obtenu en remplaçant $X$ par la $j$-ième valeur propre $\lambda_j$ :
$$[\chi_A(D)]_{j,j} = \prod_{i=1}^{n} (\lambda_j - \lambda_i)$$
Puisque le produit contient le terme pour $i = j$, c'est-à-dire $(\lambda_j - \lambda_j) = 0$, chaque terme diagonal de $\chi_A(D)$ est nul. Par conséquent :
$$\chi_A(D) = 0_{M_n(\mathbb{C})}$$

c) En combinant les questions 3.a et 3.b :
$$\chi_A(A) = P \chi_A(D) P^{-1} = P \cdot 0_{M_n(\mathbb{C})} \cdot P^{-1} = 0_{M_n(\mathbb{C})}$$
Le théorème de Cayley-Hamilton est ainsi démontré pour toute matrice diagonalisable. (Par un argument de densité de l'ensemble des matrices diagonalisables dans $M_n(\mathbb{C})$, il s'étend à toute matrice complexe).

---

#### Corrigé de la question 4
Soit $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$.

a) **Polynôme caractéristique :**
$$\chi_A(X) = \det(X I_2 - A) = \begin{vmatrix} X - 2 & -1 \\ -1 & X - 2 \end{vmatrix}$$
$$\chi_A(X) = (X - 2)^2 - (-1)(-1) = (X - 2)^2 - 1 = X^2 - 4X + 3 = (X - 1)(X - 3)$$
Les valeurs propres de $A$ sont $\lambda_1 = 1$ et $\lambda_2 = 3$.

b) **Vérification de Cayley-Hamilton :**
Calculons $A^2$ :
$$A^2 = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 2 \times 2 + 1 \times 1 & 2 \times 1 + 1 \times 2 \\ 1 \times 2 + 2 \times 1 & 1 \times 1 + 2 \times 2 \end{pmatrix} = \begin{pmatrix} 5 & 4 \\ 4 & 5 \end{pmatrix}$$
Calculons maintenant $\chi_A(A) = A^2 - 4A + 3I_2$ :
$$A^2 - 4A + 3I_2 = \begin{pmatrix} 5 & 4 \\ 4 & 5 \end{pmatrix} - \begin{pmatrix} 8 & 4 \\ 4 & 8 \end{pmatrix} + \begin{pmatrix} 3 & 0 \\ 0 & 3 \end{pmatrix}$$
$$A^2 - 4A + 3I_2 = \begin{pmatrix} 5 - 8 + 3 & 4 - 4 + 0 \\ 4 - 4 + 0 & 5 - 8 + 3 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = 0_{M_2(\mathbb{C})}$$
Le théorème est bien vérifié.

c) **Calcul de $A^k$ ($k \in \mathbb{N}$) :**
Soit $k \in \mathbb{N}$. Par division euclidienne de $X^k$ par $\chi_A(X) = X^2 - 4X + 3$, il existe un quotient $Q(X) \in \mathbb{R}[X]$ et un reste $R(X) = a_k X + b_k$ de degré $\le 1$ tels que :
$$X^k = Q(X)(X^2 - 4X + 3) + a_k X + b_k$$
Évaluons cette relation en les racines de $\chi_A$ (c'est-à-dire 1 et 3) :
- Pour $X = 1$ : 
  $$1^k = Q(1)(1 - 4 + 3) + a_k(1) + b_k \implies a_k + b_k = 1$$
- Pour $X = 3$ : 
  $$3^k = Q(3)(3^2 - 4(3) + 3) + a_k(3) + b_k \implies 3a_k + b_k = 3^k$$

On obtient le système linéaire suivant en $(a_k, b_k)$ :
$$\begin{cases} a_k + b_k = 1 \\ 3a_k + b_k = 3^k \end{cases}$$
En soustrayant la première équation de la seconde :
$$2a_k = 3^k - 1 \implies a_k = \frac{3^k - 1}{2}$$
Puis pour $b_k$ :
$$b_k = 1 - a_k = 1 - \frac{3^k - 1}{2} = \frac{3 - 3^k}{2}$$

En remplaçant $X$ par la matrice $A$ dans l'égalité polynomiale (le terme $Q(A)\chi_A(A)$ s'annule puisque $\chi_A(A) = 0_{M_2(\mathbb{C})}$) :
$$A^k = a_k A + b_k I_2$$
$$A^k = \frac{3^k - 1}{2} \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} + \frac{3 - 3^k}{2} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$
$$A^k = \begin{pmatrix} 3^k - 1 + \frac{3 - 3^k}{2} & \frac{3^k - 1}{2} \\ \frac{3^k - 1}{2} & 3^k - 1 + \frac{3 - 3^k}{2} \end{pmatrix}$$
En simplifiant les termes diagonaux $\frac{2(3^k - 1) + 3 - 3^k}{2} = \frac{3^k + 1}{2}$ :
$$A^k = \begin{pmatrix} \frac{3^k + 1}{2} & \frac{3^k - 1}{2} \\ \frac{3^k - 1}{2} & \frac{3^k + 1}{2} \end{pmatrix}$$