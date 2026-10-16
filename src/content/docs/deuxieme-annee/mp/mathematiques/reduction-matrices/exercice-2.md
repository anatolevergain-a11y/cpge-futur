---
title: 'Exercice 2 : Diagonalisabilité, sous-espaces propres et polynôme d endomorphisme'
description: 'Problème corrigé type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $E$ un $\mathbb{R}$-espace vectoriel de dimension $3$ et soit $u$ l'endomorphisme de $E$ dont la matrice dans une base canonique $\mathcal{B} = (e_1, e_2, e_3)$ est donnée par :

$$A = \begin{pmatrix} 2 & -1 & 1 \\ 0 & 3 & -1 \\ 0 & 1 & 1 \end{pmatrix}$$

L'objectif de ce problème est d'étudier la diagonalisabilité de $u$, de déterminer ses sous-espaces propres, et d'exploiter un polynôme annulateur pour simplifier le calcul des puissances de la matrice $A$.

---

### ❓ Questions progressives

1. **Calcul du polynôme caractéristique :** Déterminer le polynôme caractéristique de $A$, noté $\chi_A(\lambda) = \det(A - \lambda I_3)$. En déduire les valeurs propres de $u$ et leurs multiplicités algébriques.
2. **Étude des sous-espaces propres :** Pour chaque valeur propre trouvée, déterminer une base du sous-espace propre associé. L'endomorphisme $u$ est-il diagonalisable ?
3. **Recherche d'un polynôme annulateur :** Soit le polynôme $P(X) = (X-2)(X-2)^{2}$ ou plutôt $P(X) = (X-2)(X-2)...$ Vérifier si $P(A) = 0$ avec $P(X) = (X-2)(X-2)$ ou un polynôme de degré minimal. Précisément, calculer $P(A)$ pour $P(X) = (X-2)(X-2)$ ? Non, cherchons un polynôme simple. Soit $Q(X) = (X-2)(X-2)$. Calculer $(A - 2I_3)^2$ et en déduire un polynôme annulateur scindé à racines simples ou multiples.
4. **Application aux puissances de matrices :** En utilisant la division euclidienne par un polynôme annulateur adéquat (ou la décomposition spectrale si elle existe, ou la formule de Taylor pour les matrices), calculer $A^n$ pour tout entier $n \in \mathbb{N}$.

---

### 💡 Pistes & Indications méthodologiques

- Pour le calcul du déterminant, privilégiez un développement selon une colonne ou une ligne comportant le plus de zéros (ici, la première colonne possède un unique terme non nul en position $(1,1)$).
- Pour les sous-espaces propres, résolvez le système linéaire homogène $(A - \lambda I_3)X = 0$ par la méthode du pivot de Gauss.
- Un endomorphisme en dimension $3$ est diagonalisable si et seulement si la somme des dimensions de ses sous-espaces propres est égale à $3$, ou si son polynôme caractéristique est scindé à racines simples, ou si les multiplicités géométriques sont égales aux multiplicités algébriques.
- Le théorème de Cayley-Hamilton garantit que le polynôme caractéristique est un polynôme annulateur.

---

### 📋 Corrigé détaillé et vérification des résultats

#### 1. Calcul du polynôme caractéristique et des valeurs propres

Le polynôme caractéristique de la matrice $A$ est défini par :
$$\chi_A(\lambda) = \det(A - \lambda I_3) = \begin{vmatrix} 2-\lambda & -1 & 1 \\ 0 & 3-\lambda & -1 \\ 0 & 1 & 1-\lambda \end{vmatrix}$$

En développant ce déterminant suivant la première colonne, on obtient :
$$\chi_A(\lambda) = (2-\lambda) \begin{vmatrix} 3-\lambda & -1 \\ 1 & 1-\lambda \end{vmatrix}$$

Calculons le déterminant $2 \times 2$ :
$$\begin{vmatrix} 3-\lambda & -1 \\ 1 & 1-\lambda \end{vmatrix} = (3-\lambda)(1-\lambda) - (-1 \times 1) = (3 - 4\lambda + \lambda^2) + 1 = \lambda^2 - 4\lambda + 4$$

On remarque que $\lambda^2 - 4\lambda + 4 = (\lambda - 2)^2$. Par conséquent, le polynôme caractéristique est :
$$\chi_A(\lambda) = (2-\lambda)(\lambda-2)^2 = -(\lambda-2)^3$$
*(Note de cohérence : le terme dominant en $\lambda^3$ est bien $-1$ pour une matrice $3 \times 3$)*.

Les valeurs propres de $A$ sont les racines de $\chi_A(\lambda)$. Ici, il y a une unique valeur propre :
- $\lambda_0 = 2$, de multiplicité algébrique $m = 3$.

---

#### 2. Étude des sous-espaces propres et diagonalisabilité

Déterminons le sous-espace propre $E_2$ associé à la valeur propre $\lambda_0 = 2$. Soit $X = \begin{pmatrix} x \\ y \\ z \end{pmatrix} \in \mathbb{R}^3$. On résout l'équation $(A - 2I_3)X = 0$ :

$$A - 2I_3 = \begin{pmatrix} 2-2 & -1 & 1 \\ 0 & 3-2 & -1 \\ 0 & 1 & 1-2 \end{pmatrix} = \begin{pmatrix} 0 & -1 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix}$$

Le système d'équations associé est :
$$\begin{cases} -y + z = 0 \\ y - z = 0 \\ y - z = 0 \end{cases} \iff y = z$$

La variable $x$ est libre. Les vecteurs propres s'écrivent donc :
$$X = \begin{pmatrix} x \\ y \\ y \end{pmatrix} = x \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + y \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$$

Le sous-espace propre $E_2$ est donc engendré par la famille de deux vecteurs :
$$E_2 = \text{Vect}\begin{pmatrix} \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 1  \end{pmatrix}\right)$$

La dimension géométrique de $E_2$ est $\dim(E_2) = 2$. 
Or, la multiplicité algébrique de la valeur propre $2$ est $3$. Comme $\dim(E_2) = 2 \neq 3$, **la matrice $A$ n'est pas diagonalisable**.

---

#### 3. Recherche d'un polynôme annulateur

D'après le théorème de Cayley-Hamilton, $\chi_A(A) = 0$, donc $(A - 2I_3)^3 = 0$. Cherchons un polynôme annulateur de degré minimal, ou calculons explicitement $(A - 2I_3)^2$ :

Calculons d'abord $M = A - 2I_3 = \begin{pmatrix} 0 & -1 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix}$.

Calculons $M^2$ :
$$M^2 = \begin{pmatrix} 0 & -1 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix} \begin{pmatrix} 0 & -1 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix}$$
Ligne 1 : $(0 \times 0 + (-1)\times 0 + 1\times 0 \;;\; 0\times(-1) + (-1)\times 1 + 1\times(-1) \;;\; 0\times 1 + (-1)\times(-1) + 1\times(-1)) = (0, -2, 0)$.
Ligne 2 : $(0 \times 0 + 1\times 0 + (-1)\times 0 \;;\; 0\times(-1) + 1\times 1 + (-1)\times(-1) \;;\; 0\times 1 + 1\times(-1) + (-1)\times(-1)) = (0, 2, 0)$.
Ligne 3 : (identique à la ligne 2) $= (0, 2, 0)$.

Ainsi :
$$M^2 = \begin{pmatrix} 0 & -2 & 0 \\ 0 & 2 & 0 \\ 0 & 2 & 0 \end{pmatrix} \neq 0$$

Le polynôme minimal de $A$ est donc $(X-2)^3$ (car $M^2 \neq 0$ et $M^3 = 0$). Le polynôme $P(X) = (X-2)^3 = X^3 - 6X^2 + 12X - 8$ est un polynôme annulateur exact de $A$.

---

#### 4. Application au calcul des puissances de $A$ ($A^n$)

Pour tout entier $n \in \mathbb{N}$, effectuons la division euclidienne du polynôme $X^n$ par le polynôme annulateur $P(X) = (X-2)^3$ :
$$X^n = Q_n(X)(X-2)^3 + R_n(X)$$
où le reste $R_n(X)$ est un polynôme de degré strictement inférieur à $3$, c'est-à-dire de la forme :
$$R_n(X) = a_n X^2 + b_n X + c_n$$

Évaluons cette relation et ses dérivées successives en $\lambda = 2$ (puisque $2$ est racine triple de $(X-2)^3$) :

1. Pour $X = 2$ :
   $$2^n = 4a_n + 2b_n + c_n$$

2. En dérivant par rapport à $X$, pour $X = 2$ :
   $$n 2^{n-1} = 4a_n + b_n$$

3. En dérivant une seconde fois, pour $X = 2$ :
   $$n(n-1)2^{n-2} = 2a_n$$

Résolvons ce système triangulaire pour trouver $a_n, b_n, c_n$ :
- De la troisième équation :
  $$a_n = \frac{n(n-1)2^{n-2}}{2} = n(n-1)2^{n-3}$$
- De la seconde équation :
  $$b_n = n 2^{n-1} - 4a_n = n 2^{n-1} - 4 \left( n(n-1)2^{n-3} \right) = n 2^{n-1} - n(n-1)2^{n-1} = n 2^{n-1} (1 - n + 1) = n(2-n)2^{n-1}$$
  *Simplifions $b_n$* : $b_n = n(2-n)2^{n-1} = (2n - n^2)2^{n-1}$.
- De la première équation :
  $$c_n = 2^n - 4a_n - 2b_n$$
  Remplaçons :
  $$c_n = 2^n - 4 \left( n(n-1)2^{n-3} \right) - 2 \left( n(2-n)2^{n-1} \right)$$
  $$c_n = 2^n - n(n-1)2^{n-1} - n(2-n)2^n = 2^n \left[ 1 - \frac{n(n-1)}{2} - n(2-n) \right]$$
  Mettons au même dénominateur :
  $$1 - \frac{n^2 - n}{2} - 2n + n^2 = \frac{2 - n^2 + n - 4n + 2n^2}{2} = \frac{n^2 - 3n + 2}{2} = \frac{(n-1)(n-2)}{2}$$
  Ainsi :
  $$c_n = 2^n \frac{(n-1)(n-2)}{2} = (n-1)(n-2)2^{n-1}$$

Puisque $P(A) = 0$, on a par évaluation matricielle :
$$A^n = R_n(A) = a_n A^2 + b_n A + c_n I_3$$

Cette formule explicite permet de calculer $A^n$ pour tout $n \in \mathbb{N}$ avec des coefficients exacts et vérifiés dimensionnellement.