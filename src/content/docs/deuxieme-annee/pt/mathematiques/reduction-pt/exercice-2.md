---
title: 'Exercice 2 : Applications aux systèmes différentiels'
description: 'Problème d entraînement type concours pour PT.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le but de ce problème est l'étude et la résolution d'un système différentiel linéaire d'ordre $1$ à coefficients constants, couplé avec une application géométrique liée à la réduction des endomorphismes. Ce type de situation est classique dans les épreuves de mathématiques de la filière PT, où l'analyse et l'algèbre linéaire se rejoignent.

Soit $A$ la matrice réelle carrée d'ordre $3$ définie par :
$$A = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 3 & -1 \\ 0 & 1 & 1 \end{pmatrix}$$

On considère le système différentiel linéaire homogène à coefficients constants :
$$(S) \quad X'(t) = A X(t)$$
où $X : \mathbb{R} \to \mathcal{M}_{3,1}(\mathbb{R})$ est une fonction vectorielle de classe $\mathcal{C}^1$.

---

### ❓ Questions progressives

1. **Réduction de la matrice $A$**
   a) Déterminer le polynôme caractéristique de $A$, noté $\chi_A(\lambda)$. En déduire les valeurs propres de $A$ et leurs ordres de multiplicité respectifs.
   b) La matrice $A$ est-elle diagonalisable ? Justifier soigneusement.
   c) Pour chaque valeur propre, déterminer le sous-espace propre associé en précisant sa dimension et une base.

2. **Recherche d'une base de Jordan / Dunford**
   a) Montrer qu'il existe une matrice inversible $P$ et une matrice $T$ de la forme $D + N$ (où $D$ est diagonale et $N$ nilpotente d'indice $2$) telles que $A = P T P^{-1}$. On explicitera $P$ et $T$.
   b) Expliciter la matrice $P^{-1}$.

3. **Résolution du système différentiel**
   a) Soit $Y(t) = P^{-1} X(t)$. Établir le système différentiel vérifié par $Y(t)$, noté $(S')$.
   b) Résoudre le système $(S')$ en explicitant $Y(t)$ pour $t \in \mathbb{R}$, en fonction des conditions initiales $Y(0) = Y_0 = (y_1(0), y_2(0), y_3(0))^T$.
   c) En déduire l'expression générale de l'unique solution $X(t)$ du système $(S)$ satisfaisant la condition initiale $X(0) = X_0 = (x_1(0), x_2(0), x_3(0))^T$.

4. **Analyse critique et comportement asymptotique**
   a) Étudier le comportement des composantes de la solution $X(t)$ lorsque $t \to +\infty$ selon la nature des conditions initiales.
   b) *Analyse physique / critique du modèle :* Si ce système modélise l'évolution des populations de trois espèces en interaction, le modèle est-il stable au sens de Lyapunov ? Discuter brièvement.

---

### 💡 Pistes & Indications méthodologiques

* **Q1.** Pour le polynôme caractéristique, effectuez un développement par rapport à la première colonne. Attention aux multiplicités des racines. Pour la diagonalisabilité, comparez la dimension des sous-espaces propres à l'ordre de multiplicité de la valeur propre double.
* **Q2.** Puisque $A$ n'est pas diagonalisable, pensez à chercher un vecteur propre généralisé (ou vecteur de Jordan) pour la valeur propre double afin de former une base de Jordan.
* **Q3.** Le changement de variable $Y = P^{-1}X$ permet de découpler (partiellement) le système. La résolution d'une équation différentielle avec second membre (ou par variation des constantes/exponentielle de matrice nilpotente) est ici simplifiée par la structure de $T = D + N$.
* **Q4.** Observez les termes en $e^{\lambda t}$ et les éventuels termes séculaires $t e^{\lambda t}$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Réduction de la matrice $A$
a) **Polynôme caractéristique et valeurs propres :**
Calculons $\chi_A(\lambda) = \det(\lambda I_3 - A)$ :
$$\chi_A(\lambda) = \det \begin{pmatrix} \lambda-2 & -1 & -1 \\ 0 & \lambda-3 & 1 \\ 0 & -1 & \lambda-1 \end{pmatrix}$$
En développant par rapport à la première colonne :
$$\chi_A(\lambda) = (\lambda-2) \det \begin{pmatrix} \lambda-3 & 1 \\ -1 & \lambda-1 \end{pmatrix}$$
Calculons le déterminant $2 \times 2$ :
$$\det = (\lambda-3)(\lambda-1) - (-1 \times 1) = \lambda^2 - 4\lambda + 3 + 1 = \lambda^2 - 4\lambda + 4 = (\lambda-2)^2$$
Ainsi :
$$\chi_A(\lambda) = (\lambda-2)(\lambda-2)^2 = (\lambda-2)^3$$
La matrice $A$ admet une unique valeur propre : $\lambda_0 = 2$, de **multiplicité algébrique $3$**.

b) **Diagonalisabilité :**
Déterminons la dimension du sous-espace propre $E_2 = \ker(A - 2I_3)$.
Soit $V = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$. Le système $(A - 2I_3)V = 0$ s'écrit :
$$\begin{pmatrix} 0 & 1 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} \iff \begin{cases} y + z = 0 \\ y - z = 0 \end{cases} \iff \begin{cases} y = 0 \\ z = 0 \end{cases}$$
La variable $x$ est libre. L'espace propre $E_2$ est donc l'ensemble des vecteurs de la forme $\begin{pmatrix} x \\ 0 \\ 0 \end{pmatrix}$ avec $x \in \mathbb{R}$.
Ainsi, $E_2 = \text{Vect}\begin{pmatrix} \begin{pmatrix} 1 \\ 0 \\ 0  \end{pmatrix}\right)$.
La dimension géométrique de $\lambda_0 = 2$ est $\dim(E_2) = 1$.
Puisque la dimension géométrique ($1$) est strictement inférieure à la multiplicité algébrique ($3$), **la matrice $A$ n'est pas diagonalisable**.

---

#### 2. Recherche d'une base de Jordan
a) **Mise sous forme de Jordan :**
Puisque $A$ n'est pas diagonalisable, on cherche une base de Jordan $\mathcal{B} = (u_1, u_2, u_3)$ telle que :
- $u_1$ est un vecteur propre associé à $\lambda = 2$ : $A u_1 = 2 u_1$.
- $u_2$ est un vecteur tel que $(A - 2I_3)u_2 = u_1$.
- $u_3$ est un vecteur linéairement indépendant (ou choisi pour compléter, par exemple vecteur propre associé ou autre vecteur de Jordan).

Posons $u_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$.
Cherchons $u_2 = \begin{pmatrix} x_2 \\ y_2 \\ z_2 \end{pmatrix}$ tel que $(A - 2I_3)u_2 = u_1$ :
$$\begin{pmatrix} 0 & 1 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix} \begin{pmatrix} x_2 \\ y_2 \\ z_2 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} \iff \begin{cases} y_2 + z_2 = 1 \\ y_2 - z_2 = 0 \end{cases} \iff \begin{cases} y_2 = 1/2 \\ z_2 = 1/2 \end{cases}$$
On peut choisir $x_2 = 0$, donc $u_2 = \begin{pmatrix} 0 \\ 1/2 \\ 1/2 \end{pmatrix}$ (ou plus simplement $u_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$ quitte à diviser, prenons $u_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$ ce qui donne $(A-2I)u_2 = 2u_1$, ajustons : si $u_2 = \begin{pmatrix} 0 \\ 1/2 \\ 1/2 \end{pmatrix}$, $(A-2I)u_2 = u_1$).

Pour le troisième vecteur, cherchons un vecteur non colinéaire. Posons $u_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$.
Calculons $A u_3$ :
$$A u_3 = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 3 & -1 \\ 0 & 1 & 1 \end{pmatrix} \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}$$
Exprimons ce vecteur dans la base $(u_1, u_2, u_3)$ si possible, ou construisons directement la matrice de passage $P = (u_1 | u_2 | u_3)$ :
Soit $P = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$.
Vérifions que $P$ est inversible ($\det P = 1 \neq 0$).
Calculons $P^{-1} A P = T$ :
Ici, $u_1 = \begin{pmatrix}1\\0\\0\end{pmatrix}$, $Au_2 = 2u_2 + u_1 = \begin{pmatrix}1\\3/2\\3/2\end{pmatrix}$ (avec $u_2 = \begin{pmatrix}0\\1/2\\1/2\end{pmatrix}$).
Construisons proprement $P$ avec $u_1 = \begin{pmatrix}1\\0\\0\end{pmatrix}$, $u_2 = \begin{pmatrix}0\\1\\1\end{pmatrix}$ (tel que $(A-2I)u_2 = 2u_1$), et $u_3 = \begin{pmatrix}0\\0\\1\end{pmatrix}$ :
Plus simplement, décomposons $A = D + N$ où $D = 2I_3$ et $N = A - 2I_3 = \begin{pmatrix} 0 & 1 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix}$.
On remarque que $N^2 = \begin{pmatrix} 0 & 1 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix} \begin{pmatrix} 0 & 1 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix} = \begin{pmatrix} 0 & 2 & -2 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$ (ce n'est pas nilpotent d'indice 2).

Utilisons la vraie forme de Jordan de $A$. Le bloc de Jordan associé à $\lambda = 2$ de dimension 3 a pour matrice (ou une structure de dimension $2+1$) :
Puisque $\dim(E_2) = 1$, il y a un seul bloc de Jordan. La taille de ce bloc est $3$ (la multiplicité).
La matrice de Jordan est donc :
$$J = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}$$
Trouvons la chaîne de Jordan $(v_1, v_2, v_3)$ telle que :
- $(A - 2I_3)v_3 = v_2$
- $(A - 2I_3)v_2 = v_1$
- $(A - 2I_3)v_1 = 0$

Partons de $v_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$ (par exemple) :
$v_2 = (A - 2I_3)v_3 = \begin{pmatrix} 0 & 1 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix} \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ -1 \\ -1 \end{pmatrix}$.
Vérifions si $v_2 \in \ker(A-2I_3)$ ? Non, $(A-2I_3)v_2 = \begin{pmatrix} 0 & 1 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix} \begin{pmatrix} 1 \\ -1 \\ -1 \end{pmatrix} = \begin{pmatrix} -2 \\ 0 \\ 0 \end{pmatrix} = -2 v_1$ (avec $v_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$).
Posons $v_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$, $v_2 = \begin{pmatrix} 0 \\ -1 \\ -1 \end{pmatrix}$ (ajusté par $-1/2$) et $v_3 = \begin{pmatrix} 0 \\ 0 \\ -1/2 \end{pmatrix}$.
Plus rigoureusement, posons la matrice de passage $P$ :
$$P = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \text{ (ajustée)}$$
Calculons directement par la formule de Dunford $A = D + N$ :
$D = 2I_3$ et $N = A - 2I_3$. Comme $D$ et $N$ commutent ($2I_3$ commute avec tout), la formule de l'exponentielle s'applique directement :
$$e^{tA} = e^{t(2I_3 + N)} = e^{2t} e^{tN}$$
Calculons $N$ et ses puissances :
$$N = \begin{pmatrix} 0 & 1 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix}$$
$$N^2 = \begin{pmatrix} 0 & 1 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix} \begin{pmatrix} 0 & 1 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix} = \begin{pmatrix} 0 & 2 & -2 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$
$$N^3 = N^2 N = \begin{pmatrix} 0 & 2 & -2 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 1 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$
La matrice $N$ est donc **nilpotente d'indice $3$** ($N^3 = 0$ et $N^2 \neq 0$).

---

#### 3. Résolution du système différentiel
Puisque $A = 2I_3 + N$ avec $2I_3$ et $N$ qui commutent, l'unique solution du système $X'(t) famille = A X(t)$ de condition initiale $X(0) = X_0$ est donnée par :
$$X(t) = e^{tA} X_0 = e^{2t} e^{tN} X_0$$

Exorons explicitement $e^{tN}$ à l'aide de la formule de Taylor (la série s'arrête à l'ordre $2$ car $N^3 = 0$) :
$$e^{tN} = I_3 + t N + \frac{t^2}{2} N^2$$

Calculons explicitement cette matrice :
$$e^{tN} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} + t \begin{pmatrix} 0 & 1 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix} + \frac{t^2}{2} \begin{pmatrix} 0 & 2 & -2 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$
$$e^{tN} = \begin{pmatrix} 1 & t & t \\ 0 & 1+t & -t \\ 0 & t & 1-t \end{pmatrix}$$

Par conséquent, la matrice fondamentale ou l'exponentielle $e^{tA}$ vaut :
$$e^{tA} = e^{2t} \begin{pmatrix} 1 & t & t \\ 0 & 1+t & -t \\ 0 & t & 1-t \end{pmatrix}$$

La solution générale du système $(S)$ avec $X(0) = \begin{pmatrix} x_1(0) \\ x_2(0) \\ x_3(0) \end{pmatrix}$ est donc :
$$X(t) = e^{2t} \begin{pmatrix} 1 & t & t \\ 0 & 1+t & -t \\ 0 & t & 1-t \end{pmatrix} \begin{pmatrix} x_1(0) \\ x_2(0) \\ x_3(0) \end{pmatrix}$$

En développant composante par composante :
$$\begin{cases} x_1(t) = e^{2t} \left( x_1(0) + t x_2(0) + t x_3(0) \right) \\ x_2(t) = e^{2t} \left( (1+t)x_2(0) - t x_3(0) \right) \\ x_3(t) = e^{2t} \left( t x_2(0) + (1-t)x_3(0) \right) \end{cases}$$

---

#### 4. Analyse critique et comportement asymptotique
a) **Comportement asymptotique :**
Les solutions font intervenir des termes de la forme $e^{2t}$ et $t e^{2t}$. Comme $2 > 0$, lorsque $t \to +\infty$, toutes les composantes tendent vers $+\infty$ (en exponentielle ou en $t e^{2t}$), sauf si les conditions initiales annulent précisément ces termes dominants (par exemple si $x_2(0) = x_3(0) = 0$, auquel cas $x_1(t) = x_1(0)e^{2t}$).

b) **Analyse critique du modèle :**
Dans l'hypothèse où ce système modéliserait des populations, la présence de la valeur propre strictement positive ($\lambda = 2 > 0$) ainsi que des termes séculaires $t e^{2t}$ (dus à la non-diagonalisabilité et l'indice de nilpotence de $N$) indique une **croissance explosive non régulée**. 
* Au sens de Lyapunov, l'origine $0$ est un point d'équilibre **instable**. 
* Du point de vue de la modélisation physique ou biologique, un tel système linéaire pur sans terme non linéaire de saturation (type Verhulst/Lotka-Volterra) conduit nécessairement à une explosion en temps fini ou infini, ce qui valide le modèle uniquement sur un intervalle de temps court (régime linéaire tangent).