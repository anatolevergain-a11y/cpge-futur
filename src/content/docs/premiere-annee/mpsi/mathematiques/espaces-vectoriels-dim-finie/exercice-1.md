---
title: 'Exercice 1 : Familles libres, génératrices et bases'
description: 'Problème corrigé type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $E = \mathbb{R}_2[X]$ l'espace vectoriel des polynômes à coefficients réels de degré inférieur ou égal à $2$. Sa dimension est $\dim(E) = 3$. 
On considère l'application $\Phi : E \to E$ définie pour tout polynôme $P \in E$ par :
$$\Phi(P) = (X^2 - 1)P'' + (2X - 3)P' + 2P$$
où $P'$ et $P''$ désignent respectivement les dérivées première et seconde du polynôme $P$.

L'objectif de ce problème est de montrer que $\Phi$ est un endomorphisme de $E$, d'expliciter sa matrice dans la base canonique, de déterminer ses sous-espaces propres et d'exhiber une base de $E$ constituée de vecteurs propres.

---

### ❓ Questions progressives

1. **Vérification de la structure :** Montrer que $\Phi$ est un endomorphisme de l'espace vectoriel $E$.
2. **Calcul matriciel :** Soit $\mathcal{B} = (1, X, X^2)$ la base canonique de $E$. Déterminer la matrice $A$ représentant $\Phi$ dans la base $\mathcal{B}$.
3. **Étude spectrale :** 
   - Déterminer les valeurs propres de $\Phi$.
   - Pour chaque valeur propre, déterminer le sous-espace propre associé en en donnant une base.
4. **Base de vecteurs propres :** Conclure quant à la diagonalisabilité de $\Phi$ et écrire la matrice de $\Phi$ dans une base de vecteurs propres.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Rappeler qu'un endomorphisme est une application linéaire de $E$ dans $E$. Il faut donc vérifier la linéarité et le fait que pour tout $P \in \mathbb{R}_2[X]$, le polynôme $\Phi(P)$ est bien de degré inférieur ou égal à $2$.
- **Question 2 :** Appliquer l'opérateur $\Phi$ aux vecteurs de la base canonique $1$, $X$ et $X^2$, puis exprimer les résultats obtenus dans cette même base pour remplir les colonnes de la matrice $A$.
- **Question 3 :** Le calcul des valeurs propres se fait en résolvant l'équation caractéristique $\det(A - \lambda I_3) = 0$. Pour les sous-espaces propres, on résout le système linéaire homogène associé.
- **Question 4 :** Si la somme des dimensions des sous-espaces propres est égale à $\dim(E)$, l'endomorphisme est diagonalisable.

---

### 📋 Corrigé détaillé et vérification des résultats

#### 1. Vérification de la structure d'endomorphisme
Soit $P \in \mathbb{R}_2[X]$. Posons $P(X) = aX^2 + bX + c$. 
Calculons les dérivées :
- $P'(X) = 2aX + b$
- $P''(X) = 2a$

Substituons dans l'expression de $\Phi(P)$ :
$$\begin{aligned}
\Phi(P)(X) &= (X^2 - 1)(2a) + (2X - 3)(2aX + b) + 2(aX^2 + bX + c) \\
&= 2aX^2 - 2a + (4aX^2 + 2bX - 6aX - 3b) + 2aX^2 + 2bX + 2c \\
&= (2a + 4a + 2a)X^2 + (-6a + 2b + 2b)X + (-2a - 3b + 2c) \\
&= 8aX^2 + (-6a + 4b)X + (-2a - 3b + 2c)
\end{aligned}$$

Le polynôme $\Phi(P)$ est bien de degré inférieur ou égal à $2$, donc $\Phi(P) \in E$. L'application $\Phi$ va de $E$ dans $E$.
De plus, la dérivation et la multiplication par des polynômes étant des opérations linéaires, $\Phi$ est une combinaison linéaire d'applications linéaires, donc $\Phi$ est un endomorphisme de $E$.

---

#### 2. Calcul de la matrice de $\Phi$ dans la base canonique
Notons $\mathcal{B} = (1, X, X^2)$ la base canonique de $E$. Appliquons $\Phi$ à chaque vecteur de $\mathcal{B}$ :

- Pour $P_1(X) = 1$ ($a=0, b=0, c=1$) :
  $$\Phi(1) = 8(0)X^2 + 0X + (-2(0) - 3(0) + 2(1)) = 2$$
  
- Pour $P_2(X) = X$ ($a=0, b=1, c=0$) :
  $$\Phi(X) = 8(0)X^2 + (0 + 4(1))X + (0 - 3(1) + 0) = 4X - 3$$
  
- Pour $P_3(X)X^2$ ($a=1, b=0, c=0$) :
  $$\Phi(X^2) = 8(1)X^2 + (-6(1) + 0)X + (-2(1) - 0 + 0) = 8X^2 - 6X - 2$$

En écrivant les coefficients de ces polynômes en colonnes (dans l'ordre $1, X, X^2$), on obtient la matrice $A$ de $\Phi$ dans la base $\mathcal{B}$ :
$$A = \begin{pmatrix} 2 & -3 & -2 \\ 0 & 4 & -6 \\ 0 & 0 & 8 \text{ \textendash  attention: } 8 \end{pmatrix}$$
Plus précisément, en réécrivant proprement les coordonnées :
- Pour $\Phi(1) = 2$, les coordonnées sont $(2, 0, 0)$.
- Pour $\Phi(X) = -3 + 4X$, les coordonnées sont $(-3, 4, 0)$.
- Pour $\Phi(X^2) = -2 - 6X + 8X^2$, les coordonnées sont $(-2, -6, 8)$.

Ainsi :
$$A = \begin{pmatrix} 
2 & -3 & -2 \\ 
0 & 4 & -6 \\ 
0 & 0 & 8 
\end{pmatrix}$$

---

#### 3. Étude spectrale

La matrice $A$ étant triangulaire supérieure, ses valeurs propres sont ses éléments diagonaux, c'est-à-dire :
$$\lambda_1 = 2, \quad \lambda_2 = 4, \quad \lambda_3 = 8$$
Comme les trois valeurs propres sont distinctes et que $\dim(E) = 3$, l'endomorphisme $\Phi$ est **diagonalisable**.

Déterminons les sous-espaces propres $E_\lambda = \ker(\Phi - \lambda \text{Id})$ :

* **Pour $\lambda_1 = 2$ :**
  On cherche $P(X) = aX^2 + bX + c$ tel que $(A - 2I_3)\begin{pmatrix} c \\ b \\ a \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$ :
  $$\begin{pmatrix} 
  0 & -3 & -2 \\ 
  0 & 2 & -6 \\ 
  0 & 0 & 6 
  \end{pmatrix} \begin{pmatrix} c \\ b \\ a \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$$
  Ce système se traduit par :
  1. $6a = 0 \implies a = 0$
  2. $2b - 6a = 0 \implies 2b = 0 \implies b = 0$
  3. $-3b - 2a = 0$ (vérifié)
  
  Le paramètre $c$ est libre. Ainsi, $E_2 = \text{Vect}(1)$.

* **Pour $\lambda_2 = 4$ :**
  On résout $(A - 4I_3) \begin{pmatrix} c \\ b \\ a \end{pmatrix} = 0$ :
  $$\begin{pmatrix} 
  -2 & -3 & -2 \\ 
  0 & 0 & -6 \\ 
  0 & 0 & 4 
  \end{pmatrix} \begin{pmatrix} c \\ b \\ a \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$$
  Ce système donne :
  1. $-6a = 0 \implies a = 0$
  2. $-2c - 3b - 2a = 0 \implies 2c + 3b = 0 \implies c = -\frac{3}{2}b$
  
  En posant $b = 2$, on a $c = -3$ et $a = 0$. Le polynôme propre est $2X - 3$.
  Ainsi, $E_4 = \text{Vect}(2X - 3)$.

* **Pour $\lambda_3 = 8$ :**
  On résout $(A - 8I_3) \begin{pmatrix} c \\ b \\ a \end{pmatrix} = 0$ :
  $$\begin{pmatrix} 
  -6 & -3 & -2 \\ 
  0 & -4 & -6 \\ 
  0 & 0 & 0 
  \end{pmatrix} \begin{pmatrix} c \\ b \\ a \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$$
  Ce système donne :
  1. $-4b - 6a = 0 \implies 2b = -3a$
  2. $-6c - 3b - 2a = 0$
  
  Posons $a = 2$. Alors $b = -3$. 
  L'équation devient : $-6c - 3(-3) - 2(2) = 0 \implies -6c + 9 - 4 = 0 \implies -6c + 5 = 0 \implies c = \frac{5}{6}$.
  Pour s'affranchir des fractions, multiplions par $6$ : posons $a = 12$, alors $b = -18$ et $c = 5$. Le polynôme est $12X^2 - 18X + 5$.
  Vérifions directement avec $\Phi(P)$ pour $P(X) = X^2 - \frac{3}{2}X + \frac{5}{12}$ (en prenant $a=1$) :
  $$\Phi(X^2 - \frac{3}{2}X + \frac{5}{12}) = 8X^2 - 6X - 2 - \frac{3}{2}(4X - 3) + \frac{5}{12}(2) \dots$$
  Plus simplement avec $P(X) = 2X^2 - 3X + \frac{5}{2}$ ? Non, reprenons $a=2, b=-3, c=\frac{5}{6}$.
  Le sous-espace propre est $E_8 = \text{Vect}(12X^2 - 18X + 5)$.

---

#### 4. Conclusion
La famille $\mathcal{B}' = (1, 2X - 3, 12X^2 - 18X + 5)$ est constituée de vecteurs propres associés à des valeurs propres distinctes ($2, 4, 8$). C'est donc une **base de vecteurs propres** de $E$. 

Dans cette base $\mathcal{B}'$, la matrice de $\Phi$ est diagonale :
$$\text{Mat}_{\mathcal{B}'}(\Phi) = \begin{pmatrix} 
2 & 0 & 0 \\ 
0 & 4 & 0 \\ 
0 & 0 & 8 
\end{pmatrix}$$