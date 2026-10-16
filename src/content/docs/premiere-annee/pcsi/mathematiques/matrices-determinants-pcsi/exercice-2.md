---
title: 'Exercice 2 : Inversion de matrices par la formule de la comatrice'
description: 'Problème corrigé type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $n \in \mathbb{N}^*$ un entier supérieur ou égal à $2$. On note $M_n(\mathbb{R})$ l'espace vectoriel des matrices carrées de taille $n$ à coefficients dans $\mathbb{R}$, et $GL_n(\mathbb{R})$ le groupe linéaire des matrices inversibles de $M_n(\mathbb{R})$. 

Pour toute matrice $A = (a_{i,j})_{1 \le i,j \le n} \in M_n(\mathbb{R})$, on définit le cofacteur associé au coefficient $a_{i,j}$ par :
$$C_{i,j} = (-1)^{i+j} \det(\Delta_{i,j})$$
où $\Delta_{i,j}$ est la matrice de taille $(n-1)$ obtenue en supprimant la $i$-ème ligne et la $j$-ème colonne de $A$.

La **comatrice** de $A$, notée $\operatorname{Com}(A)$, est la matrice dont le coefficient d'indice $(i,j)$ est le cofacteur $C_{i,j}$ :
$$\operatorname{Com}(A) = (C_{i,j})_{1 \le i,j \le n}$$

L'objectif de ce problème est d'établir la relation fondamentale liant une matrice, sa comatrice et son déterminant, puis de l'appliquer à l'inversion explicite de matrices de taille $3$ et à l'étude de propriétés algébriques de la comatrice.

---

### ❓ Questions progressives

1. **Calcul direct en dimension 2 :**
   Soit $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} ∈ M_2(\mathbb{R})$. Calculer explicitement la comatrice $\operatorname{Com}(A)$ et vérifier la relation $A \operatorname{Com}(A)^T = \operatorname{Com}(A)^T A = \det(A) I_2$.

2. **Formule générale de la comatrice :**
   Rappeler le théorème du développement par rapport à une ligne ou une colonne pour exprimer le déterminant d'une matrice, et en déduire l'identité matricielle fondamentale :
   $$A \operatorname{Com}(A)^T = \operatorname{Com}(A)^T A = \det(A) I_n$$

3. **Inversibilité et formule d'inversion :**
   En déduire que si $A$ est inversible, alors $\operatorname{Com}(A)$ est inversible et donner l'expression de $A^{-1}$ en fonction de $\operatorname{Com}(A)$ et $\det(A)$.

4. **Application numérique :**
   Soit la matrice $A = \begin{pmatrix} 1 & 0 & 2 \\ 2  & -1  & 3 \\ 4  & 1  & 8 \end{pmatrix}$. 
   Calculer $\det(A)$, déterminer $\operatorname{Com}(A)$ et en déduire l'inverse $A^{-1}$.

5. **Propriété de la comatrice d'une matrice inversible :**
   Démontrer que pour toute matrice $A \in GL_n(\mathbb{R})$, on a :
   $$\operatorname{Com}(A^{-1}) = (\operatorname{Com}(A))^{-1} = \frac{1}{\det(A)} A^T$$

---

### 💡 Pistes & Indications méthodologiques

* **Pour la Q1 :** Appliquez rigoureusement la définition des cofacteurs en dimension 2. Attention aux signes $(-1)^{i+j}$.
* **Pour la Q2 :** Le produit d'une ligne de $A$ par une colonne de $\operatorname{Com}(A)^T$ correspond au calcul d'un déterminant où l'on a substitué une ligne par une autre (propriété des déterminants nuls).
* **Pour la Q4 :** Méthode systématique : calculez d'abord $\det(A)$ pour vérifier l'inversibilité, puis calculez les 9 cofacteurs un par un en faisant très attention aux alternances de signes.
* **Pour la Q5 :** Partez de la relation fondamentale appliquée à $A^{-1}$ ou utilisez l'expression de l'inverse via la comatrice.

---

### 📋 Corrigé détaillé et vérification des résultats

#### Question 1 : Cas de la dimension 2
Soit $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$. Les cofacteurs s'obtiennent en barrant une ligne et une colonne :
* $C_{1,1} = (-1)^{1+1} \det(d) = d$
* $C_{1,2} = (-1)^{1+2} \det(c) = -c$
* $C_{2,1} = (-1)^{2+1} \det(b) = -b$
* $C_{2,2} = (-1)^{2+2} \det(a) = a$

La comatrice de $A$ est donc :
$$\operatorname{Com}(A) = \begin{pmatrix} d & -c \\ -b & a \end{pmatrix}$$
Sa transposée est :
$$\operatorname{Com}(A)^T = \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$
Calculons le produit $A \operatorname{Com}(A)^T$ :
$$A \operatorname{Com}(A)^T = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} = \begin{pmatrix} ad - bc & -ab + ab \\ cd - dc & -bc + da \end{pmatrix} = \begin{pmatrix} \det(A) & 0 \\ 0 & \det(A) \end{pmatrix} = \det(A) I_2$$
De même, on vérifie aisément que $\operatorname{Com}(A)^T A = \det(A) I_2$.

#### Question 2 : Formule générale de la comatrice
Par définition du développement du déterminant par rapport à la $i$-ème ligne d'une matrice $A = (a_{i,j})$, on a :
$$\sum_{j=1}^n a_{i,j} C_{i,j} = \det(A)$$
Si l'on considère le produit de la $i$-ème ligne de $A$ par la $j$-ème colonne de $\operatorname{Com}(A)^T$ (c'est-à-dire la $j$-ème ligne de $\operatorname{Com}(A)$), pour $i = j$ on obtient $\det(A)$. 
Pour $i \neq j$, cette somme correspond au développement du déterminant d'une matrice où la $j$-ème ligne a été remplacée par une copie de la $i$-ème ligne. Ce déterminant est donc nul.

Ainsi, le coefficient $(i,j)$ du produit $A \operatorname{Com}(A)^T$ vaut $\delta_{i,j} \det(A)$ (où $\delta_{i,j}$ est le symbole de Kronecker). On a donc bien l'identité matricielle :
$$A \operatorname{Com}(A)^T = \operatorname{Com}(A)^T A = \det(A) I_n$$

#### Question 3 : Inversibilité et formule d'inversion
Si $A$ est inversible, alors $\det(A) \neq 0$. En divisant l'identité précédente par $\det(A)$, on obtient :
$$A \left( \frac{1}{\det(A)} \operatorname{Com}(A)^T \right) = \left( \frac{1}{\det(A)} \operatorname{Com}(A)^T \right) A = I_n$$
Par unicité de l'inverse, $A$ est inversible si et seulement si $\det(A) \neq 0$, et dans ce cas :
$$A^{-1} = \frac{1}{\det(A)} \operatorname{Com}(A)^T$$
Cette formule montre également que $\operatorname{Com}(A)$ est inversible puisque $\det(A) \neq 0$ et $\operatorname{Com}(A)^T = \det(A) A^{-1}$.

#### Question 4 : Application numérique
Soit $A = \begin{pmatrix} 1 & 0 & 2 \\ 2  & -1  & 3 \\ 4  & 1  & 8 \end{pmatrix}$.

1. **Calcul du déterminant de $A$** par développement par rapport à la première ligne :
$$\det(A) = 1 \cdot \begin{vmatrix} -1 & 3 \\ 1 & 8 \end{vmatrix} - 0 \cdot \begin{vmatrix} 2 & 3 \\ 4 & 8 \end{vmatrix} + 2 \cdot \begin{vmatrix} 2 & -1 \\ 4 & 1 \end{vmatrix}$$
$$\det(A) = 1 \cdot ((-1)\times 8 - 3 \times 1) + 2 \cdot (2 \times 1 - (-1) \times 4) = 1 \cdot (-11) + 2 \cdot (6) = -11 + 12 = 1$$
Puisque $\det(A) = 1 \neq 0$, la matrice $A$ est inversible.

2. **Calcul des cofacteurs $C_{i,j}$ :**
* $C_{1,1} = + \begin{vmatrix} -1 & 3 \\ 1 & 8 \end{vmatrix} = -8 - 3 = -11$
* $C_{1,2} = - \begin{vmatrix} 2 & 3 \\ 4 & 8 \end{vmatrix} = -(16 - 12) = -4$
* $C_{1,3} = + \begin{vmatrix} 2 & -1 \\ 4 & 1 \end{vmatrix} = 2 - (-4) = 6$

* $C_{2,1} = - \begin{vmatrix} 0 & 2 \\ 1 & 8 \end{vmatrix} = -(0 - 2) = 2$
* $C_{2,2} = + \begin{vmatrix} 1 & 2 \\ 4 & 8 \end{vmatrix} = 8 - 8 = 0$
* $C_{2,3} = - \begin{vmatrix} 1 & 0 \\ 4 & 1 \end{vmatrix} = -(1 - 0) = -1$

* $C_{3,1} = + \begin{vmatrix} 0 & 2 \\ -1 & 3 \end{vmatrix} = 0 - (-2) = 2$
* $C_{3,2} = - \begin{vmatrix} 1 & 2 \\ 2 & 3 \end{vmatrix} = -(3 - 4) = 1$
* $C_{3,3} = + \begin{vmatrix} 1 & 0 \\ 2 & -1 \end{vmatrix} = -1 - 0 = -1$

La comatrice de $A$ est donc :
$$\operatorname{Com}(A) = \begin{pmatrix} -11 & -4 & 6 \\ 2 & 0 & -1 \\ 2 & 1 & -1 \end{pmatrix}$$

3. **Calcul de l'inverse $A^{-1}$ :**
Puisque $\det(A) = 1$, on a $A^{-1} = \operatorname{Com}(A)^T$ :
$$A^{-1} = \begin{pmatrix} -11 & 2 & 2 \\ -4 & 0 & 1 \\ 6 & -1 & -1 \end{pmatrix}$$

*Vérification dimensionnelle et calculatoire :*
$$A A^{-1} = \begin{pmatrix} 1 & 0 & 2 \\ 2  & -1  & 3 \\ 4  & 1  & 8 \end{pmatrix} \begin{pmatrix} -11 & 2 & 2 \\ -4 & 0 & 1 \\ 6 & -1 & -1 \end{pmatrix} = \begin{pmatrix} -11+0+12 & 2+0-2 & 2+0-2 \\ -22+4+18 & 4+0-3 & 4-1-3 \\ -44-4+48 & 8+0-8 & 8+1-8 \end{pmatrix} = I_3$$
Le résultat est exact.

#### Question 5 : Propriété de la comatrice d'une matrice inversible
Soit $A \in GL_n(\mathbb{R})$. D'après la relation fondamentale appliquée à $A^{-1}$ :
$$A^{-1} \operatorname{Com}(A^{-1})^T = \det(A^{-1}) I_n = \frac{1}{\det(A)} I_n$$
Multiplions cette expression à gauche par $A$ :
$$\operatorname{Com}(A^{-1})^T = \frac{1}{\det(A)} A$$
En transposant cette égalité (sachant que $\det(A)$ est un scalaire) :
$$\operatorname{Com}(A^{-1}) = \frac{1}{\det(A)} A^T$$
Par ailleurs, en partant de $A^{-1} = \frac{1}{\det(A)} \operatorname{Com}(A)^T$, on a :
$$\operatorname{Com}(A) = \det(A) (A^{-1})^T$$
En remplaçant $A$ par $A^{-1}$ dans cette dernière formule :
$$\operatorname{Com}(A^{-1}) = \det(A^{-1}) ((A^{-1})^{-1})^T = \frac{1}{\det(A)} A^T = (\operatorname{Com}(A))^{-1}$$
On a ainsi démontré que :
$$\operatorname{Com}(A^{-1}) = (\operatorname{Com}(A))^{-1} = \frac{1}{\det(A)} A^T$$