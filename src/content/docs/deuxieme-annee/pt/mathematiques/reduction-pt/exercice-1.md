---
title: 'Exercice 1 : Valeurs propres et diagonalisation'
description: 'Problème d entraînement type concours pour PT.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $n \in \mathbb{N}^{*}$ avec $n \ge 2$. On considère l'espace vectoriel $\mathcal{M}_n(\mathbb{R})$ des matrices carrées d'ordre $n$ à coefficients réels. 
L'objectif de ce problème est d'étudier les propriétés de diagonalisabilité d'une classe particulière de matrices dépendant d'un paramètre réel, et d'appliquer ces résultats à la résolution d'un système différentiel linéaire.

Soit $a \in \mathbb{R}$. On définit la matrice $A_a \in \mathcal{M}_n(\mathbb{R})$ par :
$$A_a = \begin{pmatrix} 
1 & a & \cdots & a \\ 
a & 1 & \ddots & \vdots \\ 
\vdots & \ddots & \ddots & a \\ 
a & \cdots & a & 1 
\end{pmatrix}$$
Autrement dit, $A_a = (i, j)_{1 \le i, j \le n}$ avec $A_{i,i} = 1$ pour tout $i \in \{1, \dots, n\}$ et $A_{i,j} = a$ si $i \neq j$.

On note $I_n$ la matrice identité de $\mathcal{M}_n(\mathbb{R})$ et $J_n$ la matrice carrée d'ordre $n$ dont tous les coefficients sont égaux à $1$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. Exprimer la matrice $A_a$ en fonction de $I_n$, $J_n$ et du paramètre $a$.
2. Déterminer le rang et les valeurs propres de la matrice $J_n$. La matrice $J_n$ est-elle diagonalisable ?
3. En déduire le polynôme caractéristique de la matrice $A_a$. 
4. Déterminer, selon les valeurs de $a$ et de $n$, les valeurs propres de $A_a$ ainsi que leurs multiplicités respectives.
5. Pour quelles valeurs du paramètre $a$ la matrice $A_a$ est-elle diagonalisable ? Justifier soigneusement.
6. **Application et analyse critique :** On considère le système différentiel vectoriel $X'(t) = A_a X(t)$, où $X(t) = \begin{pmatrix} x_1(t) \\ \vdots \\ x_n(t) \end{pmatrix}$. 
   - Résoudre ce système lorsque $A_a$ est diagonalisable.
   - Que se passe-t-il si $A_a$ n'est pas diagonalisable ? Discuter de la pertinence physique ou géométrique d'un tel modèle si les conditions initiales ne peuvent être exprimées dans une base de vecteurs propres.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Décomposez les coefficients de $A_a$ en remarquant que $A_{i,i} = 1 = 1 - a + a$ ou utilisez simplement l'écriture matricielle de la somme de la diagonale et du reste.
* **Question 2 :** Étudiez l'image de l'endomorphisme associé à $J_n$. Ses colonnes sont toutes colinéaires au vecteur colonne $\begin{pmatrix} 1 \\ \vdots \\ 1 \end{pmatrix}$.
* **Question 3 :** Utilisez la relation trouvée à la question 1 pour lier le polynôme caractéristique de $A_a$ à celui de $J_n$.
* **Question 4 & 5 :** Utilisez le théorème du rang ou les dimensions des sous-espaces propres. Pensez au fait que si un endomorphisme possède $n$ valeurs propres distinctes, il est automatiquement diagonalisable.
* **Question 6 :** Utilisez l'exponentielle d'une matrice diagonalisable. Pour le cas non diagonalisable, introduisez la décomposition de Dunford si nécessaire ou le procédé de réduction de Jordan.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Expression de $A_a$ en fonction de $I_n$ et $J_n$
Par définition, la matrice $A_a$ a des $1$ sur sa diagonale et des $a$ partout ailleurs. 
On peut écrire :
$$A_a = (1-a)I_n + aJ_n$$
En effet, pour tout $(i,j)$ :
- Si $i = j$, le coefficient est $(1-a)\times 1 + a\times 1 = 1$.
- Si $i \neq j$, le coefficient est $(1-a)\times 0 + a\times 1 = a$.
L'égalité est donc démontrée.

#### 2. Rang et valeurs propres de $J_n$
La matrice $J_n$ possède $n$ colonnes qui sont toutes égales au vecteur $\begin{pmatrix} 1 \\ 1 \\ \vdots \\ 1 \end{pmatrix}$. 
Par conséquent, l'espace image de l'endomorphisme canoniquement associé à $J_n$ est de dimension $1$ (engendré par ce vecteur). D'après le théorème du rang :
$$\text{rg}(J_n) = 1$$
Puisque $\text{rg}(J_n) = 1 < n$, $0$ est valeur propre de $J_n$ et la dimension du sous-espace propre associé $E_0(J_n) = \ker(J_n)$ est :
$$\dim(E_0(J_n)) = n - \text{rg}(J_n) = n - 1$$
La valeur propre $0$ a donc une multiplicité géométrique (et donc algébrique) de $n-1$.

De plus, la trace de $J_n$ est égale à la somme de ses valeurs propres (comptées avec leur multiplicité). Comme $\text{Tr}(J_n) = n$ (la diagonale est constituée de $n$ un) et que $0$ est valeur propre de multiplicité $n-1$, la dernière valeur propre $\lambda$ vérifie :
$$0 \times (n-1) + \lambda = n \implies \lambda = n$$
Ainsi, les valeurs propres de $J_n$ sont $0$ (de multiplicité $n-1$) et $n$ (de multiplicité $1$).
Puisque la somme des dimensions des sous-espaces propres est $(n-1) + 1 = n$, **la matrice $J_n$ est diagonalisable**.

#### 3. Polynôme caractéristique de $A_a$
Soit $\lambda \in \mathbb{R}$. Cherchons le polynôme caractéristique de $A_a$ :
$$\chi_{A_a}(X) = \det(X I_n - A_a) = \det(X I_n - (1-a)I_n - a J_n) = \det\left((X - 1 + a)I_n - a J_n\right)$$
Si $a = 0$, $A_0 = I_n$, donc $\chi_{A_0}(X) = (X-1)^n$.
Si $a \neq 0$, on peut factoriser par $a$ dans le déterminant :
$$\chi_{A_a}(X) = \det\left(a \left( \frac{X - 1 + a}{a} I_n - J_n \right) \right) = a^n \det\left( \frac{X - 1 + a}{a} I_n - J_n \right)$$
En utilisant le polynôme caractéristique de $J_n$ évalué en $\mu = \frac{X - 1 + a}{a}$, et sachant que $\chi_{J_n}(\mu) = \mu^{n-1}(\mu - n)$, on obtient :
$$\chi_{A_a}(X) = a^n \left(\frac{X - 1 + a}{a}\right)^{n-1} \left(\frac{X - 1 + a}{a} - n\right)$$
$$\chi_{A_a}(X) = a^n \cdot \frac{(X - 1 + a)^{n-1}}{a^{n-1}} \cdot \left(\frac{X - 1 + a - na}{a}\right)$$
$$\chi_{A_a}(X) = (X - 1 + a)^{n-1} (X - 1 - (n-1)a)$$

#### 4. Valeurs propres de $A_a$ et multiplicités
D'après l'expression de $\chi_{A_a}(X)$, les racines (valeurs propres) sont :
1. $\lambda_1 = 1 - a$, de multiplicité $n-1$.
2. $\lambda_2 = 1 + (n-1)a$, de multiplicité $1$.

#### 5. Condition de diagonalisabilité de $A_a$
Discutons selon les valeurs de $a$ :
- **Cas où $1 - a \neq 1 + (n-1)a$**, c'est-à-dire $-a \neq (n-1)a \iff n \, a \neq 0$. 
  Comme $n \ge 2$, cela équivaut à **$a \neq 0$**.
  Dans ce cas, $A_a$ possède deux valeurs propres distinctes ($\lambda_1$ et $\lambda_2$), l'une de multiplicité $n-1$ et l'autre de multiplicité $1$. La somme des multiplicités vaut $n$. 
  Cependant, pour qu'elle soit diagonalisable, il faut vérifier la dimension du sous-espace propre associé à la valeur propre multiple $\lambda_1 = 1-a$.
  Calculons $\dim(E_{\lambda_1}(A_a)) = \dim(\ker(\lambda_1 I_n - A_a))$ :
  $$\lambda_1 I_n - A_a = (1-a)I_n - ((1-a)I_n + a J_n) = -a J_n$$
  Puisque $a \neq 0$, $\ker(-a J_n) = \ker(J_n)$, dont la dimension est $n-1$.
  La dimension du sous-espace propre associé à $\lambda_1$ est bien $n-1$ (sa multiplicité algébrique), et pour $\lambda_2$ (valeur propre simple), la dimension est $1$.
  Par conséquent, **pour tout $a \neq 0$, la matrice $A_a$ est diagonalisable**.

- **Cas où $a = 0$** :
  On a $A_0 = I_n$. La matrice est déjà diagonale, donc **diagonalisable** (son unique valeur propre est $1$ de multiplicité $n$, et $E_1(I_n) = \mathbb{R}^n$).
Conclusion: * La matrice $A_a$ est **toujours diagonalisable** sur $\mathbb{R}$, quel que soit le paramètre $a \in \mathbb{R}$.

#### 6. Application au système différentiel et analyse critique
* **Résolution :**
  Le système s'écrit $X'(t) = A_a X(t)$. Puisque $A_a$ est diagonalisable, il existe une matrice de passage $P$ inversible telle que $A_a = P D P^{-1}$, où $D$ est la matrice diagonale constituée des valeurs propres.
  En posant $Y(t) = P^{-1}X(t)$, le système devient $Y'(t) = D Y(t)$, dont la solution générale est évidente :
  $$Y(t) = \begin{pmatrix} c_1 e^{\lambda_1 t} \\ \vdots \\ c_{n-1} e^{\lambda_1 t} \\ c_n e^{\lambda_2 t} \end{pmatrix}$$
  La solution générale du système initial est alors $X(t) = P Y(t)$, soit :
  $$X(t) = c_1 e^{(1-a)t} V_1 + \dots + c_{n-1} e^{(1-a)t} V_{n-1} + c_n e^{(1+(n-1)a)t} V_n$$
  où $(V_1, \dots, V_n)$ est une base de vecteurs propres.

* **Analyse critique du modèle :**
  * *Que se passerait-il si $A_a$ n'était pas diagonalisable ?* (Par exemple dans le cas de perturbations ou d'autres structures de matrices non diagonalisables). L'intégration directe via une base de vecteurs propres serait impossible car l'espace ne serait pas de dimension $n$ en vecteurs propres. Il faudrait alors recourir à la **décomposition de Dunford** ($A = D + N$ avec $DN = ND$ et $N$ nilpotente) pour écrire $e^{At} = e^{Dt} e^{Nt} = e^{Dt} \sum_{k=0}^{n-1} \frac{(Nt)^k}{k!}$, ce qui fait apparaître des termes séculaires du type $t^k e^{\lambda t}$.
  * *Pertinence physique :* Dans les systèmes physiques modélisés par des équations différentielles linéaires (circuits électriques couplés, vibrations mécaniques), les valeurs propres déterminent la stabilité du système. Si une valeur propre a une partie réelle strictement positive (ce qui est le cas ici si $1 + (n-1)a > 0$ pour $t$ grand), la solution explose en temps long ($t \to +\infty$). 
  * *Limites du modèle :* Un tel système suppose une symétrie parfaite des couplages (tous les coefficients extra-diagonaux sont égaux à $a$). Dans la réalité industrielle ou physique, les imperfections de fabrication brisent cette symétrie (les coefficients $A_{i,j}$ diffèrent légèrement). Une étude de stabilité robuste (par exemple via la théorie des perturbations ou l'analyse de conditionnement) serait nécessaire pour valider la pertinence du modèle face à des incertitudes expérimentales.