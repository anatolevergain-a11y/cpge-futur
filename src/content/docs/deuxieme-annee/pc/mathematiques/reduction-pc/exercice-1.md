---
title: 'Exercice 1 : Diagonalisation et trigonalisation'
description: 'Problème d entraînement type concours pour PC.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $E$ un espace vectoriel euclidien (ou hermitien, le cas échéant) ou simplement vectoriel de dimension finie sur le corps $\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$. 
L'objectif de ce problème est d'étudier la réduction d'une classe particulière d'endomorphismes à travers l'étude de leurs polynômes caractéristiques et de leurs sous-espaces caractéristiques. Plus précisément, on s'intéresse aux conditions nécessaires et suffisantes de diagonalisabilité et de trigonalisation d'un endomorphisme $f \in \mathcal{L}(E)$, ainsi qu'à l'application de ces techniques au calcul de puissances de matrices et à la résolution de systèmes différentiels linéaires.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Préalable sur les polynômes d'endomorphismes**
   Soit $f \in \mathcal{L}(E)$ et $P \in \mathbb{K}[X]$. Montrer que si $\lambda$ est une valeur propre de $f$ et $x$ un vecteur propre associé, alors $P(\lambda)$ est valeur propre de $P(f)$ pour le vecteur $x$.

2. **Caractérisation de la diagonalisabilité**
   Énoncer le théorème de spectralité garantissant la diagonalisabilité d'un endomorphisme. Montrer qu'un endomorphisme $f \in \mathcal{L}(E)$ est diagonalisable si et seulement si son polynôme minimal est scindé à racines simples sur $\mathbb{K}$.

3. **Application pratique à une matrice concrète**
   On considère la matrice $A \in \mathcal{M}_3(\mathbb{R})$ définie par :
   $$A = \begin{pmatrix} 2 & -1 & 1 \\ 0 & 3 & -1 \\ 0 & 1 & 1 \end{pmatrix}$$
   Déterminer le polynôme caractéristique de $A$, noté $\chi_A(X)$. En déduire les valeurs propres de $A$ et leurs ordres de multiplicité.

4. **Étude des sous-espaces propres et trigonalisation**
   Pour chaque valeur propre trouvée à la question précédente, déterminer la dimension du sous-espace propre associé. La matrice $A$ est-elle diagonalisable ? Si non, expliciter une base dans laquelle $A$ se trigonalise et donner la matrice triangulaire associée $T$.

5. **Analyse critique du modèle et limitations numériques**
   Dans le cadre de l'algorithmique numérique, le calcul exact des valeurs propres via le polynôme caractéristique est souvent proscrit pour des matrices de grande taille. Expliquer brièvement pourquoi (instabilité numérique face aux variations des coefficients) et citer une alternative matricielle utilisée en pratique (méthode de Schur ou QR).

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Procéder par récurrence sur le degré du monôme $X^k$, puis utiliser la linéarité de l'évaluation polynomiale.
* **Question 2 :** Utiliser le lemme des noyaux et comparer les dimensions des sous-espaces propres avec les multiplicités des racines du polynôme minimal/caractéristique.
* **Question 3 :** Développer le déterminant $\det(X I_3 - A)$ par rapport à la première colonne.
* **Question 4 :** Résoudre le système linéaire $(A - \lambda I_3)X = 0$ pour chaque valeur propre. Si la dimension est strictement inférieure à la multiplicité, chercher un vecteur de Jordan pour compléter la trigonalisation.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Préalable sur les polynômes d'endomorphismes
Soit $f \in \mathcal{L}(E)$, $\lambda \in \mathbb{K}$ une valeur propre de $f$ et $x \in E \setminus \{0\}$ tel que $f(x) = \lambda x$.
Montrons par récurrence sur $k \in \mathbb{N}$ que $f^k(x) = \lambda^k x$.
* *Initialisation ($k=0$) :* $f^0(x) = \text{Id}(x) = x = \lambda^0 x$. La propriété est vraie.
* *Hérédité :* Supposons la propriété vraie à un rang $k \ge 0$. Alors :
  $$f^{k+1}(x) = f(f^k(x)) = f(\lambda^k x) = \lambda^k f(x) = \lambda^k (\lambda x) = \lambda^{k+1} x$$
  La propriété est donc héréditaire.
Soit maintenant un polynôme $P(X) = \sum_{k=0}^{d} a_k X^k \in \mathbb{K}[X]$. Par définition :
$$P(f)(x) = \sum_{k=0}^{d} a_k f^k(x) = \sum_{k=0}^{d} a_k \lambda^k x = \left(\sum_{k=0}^{d} a_k \lambda^k\right) x = P(\lambda) x$$
Puisque $x \neq 0$, $P(\lambda)$ est bien une valeur propre de $P(f)$ associée au vecteur propre $x$. $\blacksquare$

#### 2. Caractérisation de la diagonalisabilité
Un endomorphisme $f \in \mathcal{L}(E)$ est diagonalisable si et seulement si la somme des sous-espaces propres est égale à $E$, ce qui équivaut au fait que la somme de leurs dimensions est égale à $\dim(E)$, ou encore que son polynôme minimal $\pi_f$ est scindé sur $\mathbb{K}$ à racines simples. En effet, d'après le théorème de décomposition des noyaux, si $\pi_f(X) = \prod_{i=1}^{r}(X - \lambda_i)$ avec des $\lambda_i$ distincts, alors $E = \bigoplus_{i=1}^{r} \ker(f - \lambda_i \text{Id})$, ce qui garantit l'existence d'une base de vecteurs propres. $\blacksquare$

#### 3. Calcul du polynôme caractéristique de $A$
Calculons $\chi_A(X) = \det(X I_3 - A)$ :
$$\chi_A(X) = \begin{v} X - 2 & 1 & -1 \\ 0 & X - 3 & 1 \\ 0 & -1 & X - 1 \end{v}$$
En développant suivant la première colonne :
$$\chi_A(X) = (X - 2) \begin{v} X - 3 & 1 \\ -1 & X - 1 \end{v}$$
Calculons le déterminant $2 \times 2$ :
$$\begin{v} X - 3 & 1 \\ -1 & X - 1 \end{v} = (X - 3)(X - 1) - (1)(-1) = X^2 - 4X + 3 + 1 = X^2 - 4X + 4 = (X - 2)^2$$
Ainsi, le polynôme caractéristique est :
$$\chi_A(X) = (X - 2)(X - 2)^2 = (X - 2)^3$$
Les valeurs propres de $A$ sont donc :
* $\lambda_1 = 2$, d'ordre de multiplicité algébrique $m_1 = 3$.

#### 4. Étude des sous-espaces propres et trigonalisation
Déterminons le sous-espace propre associé à $\lambda = 2$, soit $E_2 = \ker(A - 2I_3)$ :
$$A - 2I_3 = \begin{pmatrix} 0 & -1 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix}$$
Soit $X = \begin{pmatrix} x \\ y \\ z \end{pmatrix} \in \mathcal{M}_{3,1}(\mathbb{R})$. Le système $(A - 2I_3)X = 0$ se réduit à l'équation unique :
$$-y + z = 0 \iff y = z$$
Le sous-espace propre $E_2$ est donc l'ensemble des vecteurs de la forme :
$$E_2 = \left\{ \begin{pmatrix} x \\ y \\ y \end{pmatrix} \in \mathcal{M}_{3,1}(\mathbb{R}) \mid x, y \in \mathbb{R} \right\} = \text{Vect}\begin{pmatrix}  \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 1  \end{pmatrix} \right)$$
La dimension du sous-espace propre est $\dim(E_2) = 2$. Or, l'ordre de multiplicité algébrique est $m_1 = 3$. Puisque $\dim(E_2) \neq m_1$, **la matrice $A$ n'est pas diagonalisable**.
Trigonalisation: *
Puisque le polynôme caractéristique est scindé ($\chi_A(X) = (X-2)^3$), $A$ est trigonalisable.
Cherchons une base dans laquelle $A$ se met sous forme triangulaire. 
Soit $e_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ et $e_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$ deux vecteurs propres indépendants dans $E_2$.
Complétons cette famille en une base de $\mathbb{R}^3$ en posant par exemple $e_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$.
Exprimons $A e_3$ :
$$A e_3 = \begin{pmatrix} 2 & -1 & 1 \\ 0 & 3 & -1 \\ 0 & 1 & 1 \end{pmatrix} \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}$$
Or, on remarque que :
$$\begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix} = 1 \cdot \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} - 1 \cdot \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} + 2 \cdot \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} = e_1 - e_2 + 2 e_3$$
Ainsi, dans la base $\mathcal{B} = (e_1, e_2, e_3)$, la matrice de l'endomorphisme canoniquement associé est :
$$T = \begin{pmatrix} 2 & 0 & 1 \\ 0 & 2 & -1 \\ 0 & 0 & 2 \end{pmatrix}$$
Ceci fournit bien une forme trigonalisée de $A$. $\blacksquare$

#### 5. Analyse critique du modèle et limitations numériques
En calcul scientifique, le calcul exact des racines du polynôme caractéristique $\chi_A(X)$ est numériquement instable pour des matrices de grande dimension ($n \ge 4$). En effet, d'après le théorème d'Abel-Ruffini, il n'existe pas de formule radicale générale pour les polynômes de degré $\ge 5$, et de surcroît, les coefficients d'un polynôme caractéristique sont extrêmement sensibles aux erreurs d'arrondi (les zéros d'un polynôme peuvent varier de manière drastique suite à de minimes perturbations de ses coefficients). 
C'est pourquoi les logiciels de calcul numérique (comme SciPy, MATLAB) proscrivent le calcul direct par $\chi_A$ et utilisent des méthodes unitaires itératives de réduction (telles que l'algorithme QR de Schur) qui garantissent stabilité et robustesse.