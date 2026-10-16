---
title: 'Exercice 3 : Matrices semblables et changement de base'
description: 'Problème corrigé type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On munit l'espace vectoriel $E = \mathbb{R}^3$ de sa base canonique notée $\mathcal{B}_0 = (e_1, e_2, e_3)$.  
On note $\mathcal{M}_3(\mathbb{R})$ l'algèbre des matrices carrées d'ordre $3$ à coefficients réels, $I_3$ la matrice identité et $0_3$ la matrice nulle.  
Soit $f$ l'endomorphisme de $E$ canoniquement associé à la matrice :
$$A = \begin{pmatrix} 1 & -1 & 1 \\ 0 & 2 & 0 \\ -1 & 1 & 3 \end{pmatrix}$$

L'objectif de ce problème est d'étudier la réduction de la matrice $A$ sous une forme trigonale simplifiée (dite forme de Jordan élémentaire) par un changement de base explicite, puis d'en exploiter la structure pour calculer les puissances $A^n$, déterminer son commutant et résoudre une équation matricielle quadratique.

---

### ❓ Questions progressives

#### Partie I : Réduction et changement de base
1. **Noyau de l'endomorphisme auxiliaire**  
   On pose $N = A - 2I_3$ et on note $g = f - 2\,\mathrm{id}_E$.  
   Déterminer une base et la dimension du sous-espace vectoriel $\ker(g) = \ker(A - 2I_3)$. L'endomorphisme $f$ est-il une homothétie ?
2. **Nilpotence de $N$**  
   Calculer explicitement $N^2$, puis $N^3$. Quel est l'indice de nilpotence de $N$ ?
3. **Construction d'une base adaptée**  
   On pose le vecteur $e'_3 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$, puis $e'_2 = g(e'_3)$ et $e'_1 = g(e'_2)$.
   a. Calculer les composantes de $e'_2$ et $e'_1$ dans la base canonique.  
   b. Démontrer que la famille $\mathcal{B}' = (e'_1, e'_2, e'_3)$ forme une base de $E$.
4. **Matrice de passage et inversion**  
   a. Écrire la matrice de passage $P = \mathrm{Pass}(\mathcal{B}_0, \mathcal{B}')$.  
   b. Justifier l'inversibilité de $P$ par un calcul de déterminant, puis déterminer $P^{-1}$ par la méthode du pivot de Gauss ou par résolution de système linéaire.
5. **Forme semblable**  
   Déterminer la matrice $T = \mathrm{Mat}_{\mathcal{B}'}(f)$. Vérifier rigoureusement par le calcul matriciel direct l'égalité :
   $$A = P T P^{-1}$$

#### Partie II : Calcul des puissances $A^n$
6. **Puissances de $T$**  
   On décompose $T$ sous la forme $T = 2I_3 + J$.  
   a. Donner l'expression de la matrice $J$ et vérifier sa nilpotence.  
   b. À l'aide de la formule du binôme de Newton (dont on justifiera l'emploi), exprimer $T^n$ sous forme matricielle explicite pour tout entier naturel $n \ge 2$.
7. **Puissances de $A$**  
   En déduire l'expression explicite de la matrice $A^n$ en fonction de $n$ pour tout $n \in \mathbb{N}$.

#### Partie III : Commutant et équation matricielle
8. **Commutant de $T$**  
   On appelle commutant de $T$ l'ensemble $\mathcal{C}(T) = \{ M \in \mathcal{M}_3(\mathbb{R}) \mid M T = T M \}$.  
   Montrer qu'une matrice $M = \begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix}$ commute avec $T$ si et seulement si elle commute avec $J$. En déduire la forme générale des matrices de $\mathcal{C}(T)$, puis montrer que $\mathcal{C}(T) = \mathrm{Vect}(I_3, J, J^2)$.
9. **Commutant de $A$**  
   En utilisant la matrice de passage $P$, établir que $\mathcal{C}(A) = \{ P M P^{-1} \mid M \in \mathcal{C}(T) \}$. Quelle est la dimension de $\mathcal{C}(A)$ ?
10. **Équation matricielle $X^2 = T$**  
    On cherche à résoudre dans $\mathcal{M}_3(\mathbb{R})$ l'équation :
    $$(E_T) : \quad X^2 = T$$
    a. Montrer que si $X$ est solution de $(E_T)$, alors $X \in \mathcal{C}(T)$.  
    b. En déduire toutes les solutions de $(E_T)$.  
    c. Combien l'équation $(E_A) : Y^2 = A$ admet-elle de solutions dans $\mathcal{M}_3(\mathbb{R})$ ?

---

### 💡 Pistes & Indications méthodologiques

* **Pour la question 1 :** Poser le système linéaire homogène associé à $(A - 2I_3)X = 0$ avec $X = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$.
* **Pour la question 3 :** Pour prouver qu'une famille de 3 vecteurs de $\mathbb{R}^3$ est une base, il suffit d'établir sa liberté (par exemple en montrant que toute combinaison linéaire nulle est triviale).
* **Pour la question 6 :** Vérifier que $2I_3$ et $J$ commutent avant d'appliquer la formule du binôme. La nilpotence de $J$ tronquera la somme à seulement trois termes non nuls.
* **Pour la question 8 :** Écrire explicitement les produits $M J$ et $J M$, puis identifier coefficients par coefficients.
* **Pour la question 10 :** Si $X^2 = T$, alors $X T = X X^2 = X^3 = X^2 X = T X$. Ainsi, $X$ commute avec $T$ et s'écrit obligatoirement sous la forme $X = \alpha I_3 + \beta J + \gamma J^2$.

---

### 📋 Corrigé détaillé et vérification des résultats

#### Partie I : Réduction et changement de base

##### 1. Noyau de $g = f - 2\,\mathrm{id}_E$
Calculons la matrice $N = A - 2I_3$ :
$$N = \begin{pmatrix} 1 - 2 & -1 & 1 \\ 0 & 2 - 2 & 0 \\ -1 & 1 & 3 - 2 \end{pmatrix} = \begin{pmatrix} -1 & -1 & 1 \\ 0 & 0 & 0 \\ -1 & 1 & 1 \end{pmatrix}$$
Soit $X = \begin{pmatrix} x \\ y \\ z \end{pmatrix} \in \mathbb{R}^3$. Le système $N X = 0$ s'écrit :
$$\begin{cases} -x - y + z = 0 \\ 0 = 0 \\ -x + y + z = 0 \end{cases}$$
En soustrayant la première équation à la troisième :
$$(-x + y + z) - (-x - y + z) = 0 \iff 2y = 0 \iff y = 0$$
En réinjectant $y = 0$ dans l'une des équations, on obtient $-x + z = 0$, soit $z = x$.  
L'ensemble des solutions est :
$$\ker(g) = \left\{ \begin{pmatrix} x \\ 0 \\ x \end{pmatrix} \;\middle|\; x \in \mathbb{R} \right\} = \mathrm{Vect}\begin{pmatrix}  \begin{pmatrix} 1 \\ 0 \\ 1  \end{pmatrix} \right)$$
Le vecteur $u = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$ étant non nul, $(u)$ constitue une base de $\ker(g)$ et :
$$\dim \ker(g) = 1$$
Comme $\ker(g) \neq E$ (ou encore $A \neq 2I_3$), $f$ n'est pas une homothétie.

##### 2. Calcul des puissances de $N$
Calculons $N^2$ :
$$N^2 = \begin{pmatrix} -1 & -1 & 1 \\ 0 & 0 & 0 \\ -1 & 1 & 1 \end{pmatrix} \begin{pmatrix} -1 & -1 & 1 \\ 0 & 0 & 0 \\ -1 & 1 & 1 \end{pmatrix}$$
Calcul pas à pas de chaque coefficient :
* Ligne 1 :
  * $c_{11} = (-1)(-1) + (-1)(0) + (1)(-1) = 1 + 0 - 1 = 0$
  * $c_{12} = (-1)(-1) + (-1)(0) + (1)(1) = 1 + 0 + 1 = 2$
  * $c_{13} = (-1)(1) + (-1)(0) + (1)(1) = -1 + 0 + 1 = 0$
* Ligne 2 : coefficients tous nuls car la deuxième ligne de $N$ est nulle : $\begin{pmatrix} 0 & 0 & 0 \end{pmatrix}$.
* Ligne 3 :
  * $c_{31} = (-1)(-1) + (1)(0) + (1)(-1) = 1 + 0 - 1 = 0$
  * $c_{32} = (-1)(-1) + (1)(0) + (1)(1) = 1 + 0 + 1 = 2$
  * $c_{33} = (-1)(1) + (1)(0) + (1)(1) = -1 + 0 + 1 = 0$

Ainsi :
$$N^2 = \begin{pmatrix} 0 & 2 & 0 \\ 0 & 0 & 0 \\ 0 & 2 & 0 \end{pmatrix} \neq 0_3$$
Calculons $N^3 = N^2 N$ :
$$N^3 = \begin{pmatrix} 0 & 2 & 0 \\ 0 & 0 & 0 \\ 0 & 2 & 0 \end{pmatrix} \begin{pmatrix} -1 & -1 & 1 \\ 0 & 0 & 0 \\ -1 & 1 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} = 0_3$$
Puisque $N \neq 0_3$, $N^2 \neq 0_3$ et $N^3 = 0_3$, l'indice de nilpotence de $N$ est égal à $3$.

##### 3. Construction de la base $\mathcal{B}'$
a. Calculons $e'_2 = N e'_3$ et $e'_1 = N e'_2 = N^2 e'_3$ :
$$e'_2 = \begin{pmatrix} -1 & -1 & 1 \\ 0 & 0 & 0 \\ -1 & 1 & 1 \end{pmatrix} \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}$$
$$e'_1 = \begin{pmatrix} 0 & 2 & 0 \\ 0 & 0 & 0 \\ 0 & 2 & 0 \end{pmatrix} \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 2 \\ 0 \\ 2 \end{pmatrix}$$

b. Montrons que $\mathcal{B}' = (e'_1, e'_2, e'_3)$ est une famille libre.  
Soient $\lambda_1, \lambda_2, \lambda_3 \in \mathbb{R}$ tels que $\lambda_1 e'_1 + \lambda_2 e'_2 + \lambda_3 e'_3 = 0$. Cela correspond au système :
$$\begin{pmatrix} 2 & -1 & 0 \\ 0 & 0 & 1 \\ 2 & 1 & 0 \end{pmatrix} \begin{pmatrix} \lambda_1 \\ \lambda_2 \\ \lambda_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} \iff \begin{cases} 2\lambda_1 - \lambda_2 = 0 \\ \lambda_3 = 0 \\ 2\lambda_1 + \lambda_2 = 0 \end{cases}$$
Par addition et soustraction des lignes 1 et 3, on obtient $4\lambda_1 = 0 \implies \lambda_1 = 0$ et $2\lambda_2 = 0 \implies \lambda_2 = 0$. La deuxième ligne donne immédiatement $\lambda_3 = 0$.  
La famille $\mathcal{B}'$ est donc une famille libre de trois vecteurs dans un espace vectoriel de dimension 3 : c'est une base de $E$.

##### 4. Matrice de passage et inversion
a. La matrice de passage $P$ est formée par les colonnes des composantes des vecteurs de $\mathcal{B}'$ dans la base $\mathcal{B}_0$ :
$$P = \begin{pmatrix} 2 & -1 & 0 \\ 0 & 0 & 1 \\ 2 & 1 & 0 \end{pmatrix}$$

b. Calculons le déterminant de $P$ en développant selon la troisième colonne :
$$\det(P) = 1 \cdot (-1)^{2+3} \begin{vmatrix} 2 & -1 \\ 2 & 1 \end{vmatrix} = -(2 \cdot 1 - (-1) \cdot 2) = -(2 + 2) = -4$$
Puisque $\det(P) = -4 \neq 0$, la matrice $P$ est inversible.  
Déterminons $P^{-1}$ en résolvant le système $P X = Y$, avec $X = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$ et $Y = \begin{pmatrix} a \\ b \\ c \end{pmatrix}$ :
$$\begin{cases} 2x - y = a & (L_1) \\ z = b & (L_2) \\ 2x + y = c & (L_3) \end{cases}$$
* $(L_3) + (L_1) \implies 4x = a + c \iff x = \frac{1}{4}a + \frac{1}{4}c$
* $(L_3) - (L_1) \implies 2y = c - a \iff y = -\frac{1}{2}a + \frac{1}{2}c$
* $(L_2) \implies z = b$

On en déduit l'expression de $P^{-1}$ :
$$P^{-1} = \begin{pmatrix} \frac{1}{4} & 0 & \frac{1}{4} \\ -\frac{1}{2} & 0 & \frac{1}{2} \\ 0 & 1 & 0 \end{pmatrix} = \frac{1}{4} \begin{pmatrix} 1 & 0 & 1 \\ -2 & 0 & 2 \\ 0 & 4 & 0 \end{pmatrix}$$

##### 5. Forme semblable $T$
Par définition de la base $\mathcal{B}'$ :
* $g(e'_1) = N^3 e'_3 = 0 \implies f(e'_1) = 2e'_1$
* $g(e'_2) = e'_1 \implies f(e'_2) = 2e'_2 + e'_1 = e'_1 + 2e'_2$
* $g(e'_3) = e'_2 \implies f(e'_3) = 2e'_3 + e'_2 = e'_2 + 2e'_3$

Par conséquent, la matrice de $f$ dans la base $\mathcal{B}'$ est :
$$T = \mathrm{Mat}_{\mathcal{B}'}(f) = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}$$

D'après la formule de changement de base, $A = P T P^{-1}$.  
Vérifions cette relation par calcul matriciel direct en calculant $P T$ et $A P$ :
$$P T = \begin{pmatrix} 2 & -1 & 0 \\ 0 & 0 & 1 \\ 2 & 1 & 0 \end{pmatrix} \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix} = \begin{pmatrix} 2\cdot 2 + 0 + 0 & 2\cdot 1 - 1\cdot 2 + 0 & 0 - 1\cdot 1 + 0 \\ 0 & 0 & 1\cdot 2 \\ 2\cdot 2 + 0 + 0 & 2\cdot 1 + 1\cdot 2 + 0 & 0 + 1\cdot 1 + 0 \end{pmatrix} = \begin{pmatrix} 4 & 0 & -1 \\ 0 & 0 & 2 \\ 4 & 4 & 1 \end{pmatrix}$$
$$A P = \begin{pmatrix} 1 & -1 & 1 \\ 0 & 2 & 0 \\ -1 & 1 & 3 \end{pmatrix} \begin{pmatrix} 2 & -1 & 0 \\ 0 & 0 & 1 \\ 2 & 1 & 0 \end{pmatrix} = \begin{pmatrix} 2 - 0 + 2 & -1 - 0 + 1 & 0 - 1 + 0 \\ 0 + 0 + 0 & 0 + 0 + 0 & 0 + 2 + 0 \\ -2 + 0 + 6 & 1 + 0 + 3 & 0 + 1 + 0 \end{pmatrix} = \begin{pmatrix} 4 & 0 & -1 \\ 0 & 0 & 2 \\ 4 & 4 & 1 \end{pmatrix}$$
On a bien $P T = A P$, ce qui équivaut à $A = P T P^{-1}$.

---

#### Partie II : Calcul des puissances $A^n$

##### 6. Puissances de $T$
a. On a $T = 2I_3 + J$ avec :
$$J = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$$
Calculons les puissances successives de $J$ :
$$J^2 = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \quad J^3 = 0_3$$
Ainsi, $J^k = 0_3$ pour tout $k \ge 3$.

b. La matrice $2I_3$ commute avec toute matrice de $\mathcal{M}_3(\mathbb{R})$, en particulier avec $J$ : $(2I_3)J = J(2I_3) = 2J$.  
On peut donc appliquer la formule du binôme de Newton pour $n \ge 2$ :
$$T^n = (2I_3 + J)^n = \sum_{k=0}^n \binom{n}{k} J^k (2I_3)^{n-k} = \sum_{k=0}^{\min(n, 2)} \binom{n}{k} 2^{n-k} J^k$$
Pour $n \ge 2$, cette somme comporte exactement 3 termes :
$$T^n = 2^n I_3 + n 2^{n-1} J + \frac{n(n-1)}{2} 2^{n-2} J^2$$
Sous forme matricielle explicite :
$$T^n = \begin{pmatrix} 2^n & n 2^{n-1} & n(n-1)2^{n-3} \\ 0 & 2^n & n 2^{n-1} \\ 0 & 0 & 2^n \end{pmatrix}$$
*(Remarque : cette formule reste valide pour $n=0$ et $n=1$).*

##### 7. Puissances de $A$
Puisque $A = P T P^{-1}$, on a par récurrence immédiate $A^n = P T^n P^{-1}$.  
Effectuons d'abord le produit $P T^n$ :
$$P T^n = \begin{pmatrix} 2 & -1 & 0 \\ 0 & 0 & 1 \\ 2 & 1 & 0 \end{pmatrix} \begin{pmatrix} 2^n & n 2^{n-1} & n(n-1)2^{n-3} \\ 0 & 2^n & n 2^{n-1} \\ 0 & 0 & 2^n \end{pmatrix}$$
* Ligne 1 :
  * $(P T^n)_{11} = 2 \cdot 2^n = 2^{n+1}$
  * $(P T^n)_{12} = 2(n 2^{n-1}) - 2^n = n 2^n - 2^n = (n-1)2^n$
  * $(P T^n)_{13} = 2(n(n-1)2^{n-3}) - n 2^{n-1} = n(n-1)2^{n-2} - n 2^{n-1} = n(n-3)2^{n-2}$
* Ligne 2 :
  * $(P T^n)_{21} = 0$
  * $(P T^n)_{22} = 0$
  * $(P T^n)_{23} = 2^n$
* Ligne 3 :
  * $(P T^n)_{31} = 2 \cdot 2^n = 2^{n+1}$
  * $(P T^n)_{32} = 2(n 2^{n-1}) + 2^n = (n+1)2^n$
  * $(P T^n)_{33} = n(n-1)2^{n-2} + n 2^{n-1} = n(n+1)2^{n-2}$

Multiplions à présent par $P^{-1} = \frac{1}{4} \begin{pmatrix} 1 & 0 & 1 \\ -2 & 0 & 2 \\ 0 & 4 & 0 \end{pmatrix}$ :
Soit $A^n = (P T^n) P^{-1}$ :
* Coefficient $(1,1)$ :
  $A^n_{11} = \frac{1}{4} \left( (P T^n)_{11} - 2(P T^n)_{12} \right) = \frac{1}{4} \left( 2^{n+1} - 2(n-1)2^n \right) = 2^{n-1} - (n-1)2^{n-1} = (2-n) 2^{n-1}$
* Coefficient $(1,2)$ :
  $A^n_{12} = \frac{1}{4} \left( 4(P T^n)_{13} \right) = (P T^n)_{13} = n(n-3)2^{n-2}$
* Coefficient $(1,3)$ :
  $A^n_{13} = \frac{1}{4} \left( (P T^n)_{11} + 2(P T^n)_{12} \right) = \frac{1}{4} \left( 2^{n+1} + 2(n-1)2^n \right) = 2^{n-1} + (n-1)2^{n-1} = n 2^{n-1}$
* Coefficient $(2,1)$ :
  $A^n_{21} = \frac{1}{4}(0) = 0$
* Coefficient $(2,2)$ :
  $A^n_{22} = \frac{1}{4}(4 \cdot 2^n) = 2^n$
* Coefficient $(2,3)$ :
  $A^n_{23} = \frac{1}{4}(0) = 0$
* Coefficient $(3,1)$ :
  $A^n_{31} = \frac{1}{4} \left( (P T^n)_{31} - 2(P T^n)_{32} \right) = \frac{1}{4} \left( 2^{n+1} - 2(n+1)2^n \right) = 2^{n-1} - (n+1)2^{n-1} = -n 2^{n-1}$
* Coefficient $(3,2)$ :
  $A^n_{32} = \frac{1}{4} \left( 4(P T^n)_{33} \right) = (P T^n)_{33} = n(n+1)2^{n-2}$
* Coefficient $(3,3)$ :
  $A^n_{33} = \frac{1}{4} \left( (P T^n)_{31} + 2(P T^n)_{32} \right) = \frac{1}{4} \left( 2^{n+1} + 2(n+1)2^n \right) = 2^{n-1} + (n+1)2^{n-1} = (n+2)2^{n-1}$

Finalement, pour tout $n \in \mathbb{N}$ :
$$A^n = 2^{n-2} \begin{pmatrix} 2(2-n) & n(n-3) & 2n \\ 0 & 4 & 0 \\ -2n & n(n+1) & 2(n+2) \end{pmatrix}$$
*(Vérification pour $n=1$ : $2^{-1} \begin{pmatrix} 2 & -2 & 2 \\ 0 & 4 & 0 \\ -2 & 2 & 6 \end{pmatrix} = \begin{pmatrix} 1 & -1 & 1 \\ 0 & 2 & 0 \\ -1 & 1 & 3 \end{pmatrix} = A$, cohérent).*

---

#### Partie III : Commutant et équation matricielle

##### 8. Commutant de $T$
Comme $T = 2I_3 + J$, on a pour toute matrice $M \in \mathcal{M}_3(\mathbb{R})$ :
$$M T - T M = M(2I_3 + J) - (2I_3 + J)M = 2M + M J - 2M - J M = M J - J M$$
Par conséquent, $M T = T M \iff M J = J M$.  
Soit $M = \begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix}$. Calculons $M J$ et $J M$ :
$$M J = \begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix} \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & a & b \\ 0 & d & e \\ 0 & g & h \end{pmatrix}$$
$$J M = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix} = \begin{pmatrix} d & e & f \\ g & h & i \\ 0 & 0 & 0 \end{pmatrix}$$
L'égalité $M J = J M$ équivaut à l'identification terme à terme :
* Colonne 1 : $d = 0$, $g = 0$, et $0 = 0$.
* Colonne 2 : $a = e$, $d = h \implies h = 0$, et $g = 0$.
* Colonne 3 : $b = f$, $e = i \implies a = e = i$, et $h = 0$.

Il en résulte que $M$ est de la forme :
$$M = \begin{pmatrix} a & b & c \\ 0 & a & b \\ 0 & 0 & a \end{pmatrix} = a \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} + b \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} + c \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} = a I_3 + b J + c J^2$$
La famille $(I_3, J, J^2)$ est échelonnée par rapport aux sur-diagonales, elle est donc libre.  
Ainsi, $\mathcal{C}(T) = \mathrm{Vect}(I_3, J, J^2)$ et $\dim \mathcal{C}(T) = 3$.

##### 9. Commutant de $A$
Soit $N \in \mathcal{M}_3(\mathbb{R})$.
$$N A = A N \iff N (P T P^{-1}) = (P T P^{-1}) N \iff (P^{-1} N P) T = T (P^{-1} N P)$$
Posons $M = P^{-1} N P$. Alors $N A = A N \iff M \in \mathcal{C}(T) \iff N = P M P^{-1}$ avec $M \in \mathcal{C}(T)$.  
On a donc :
$$\mathcal{C}(A) = \{ P M P^{-1} \mid M \in \mathcal{C}(T) \}$$
L'application $\phi : \mathcal{M}_3(\mathbb{R}) \to \mathcal{M}_3(\mathbb{R}), \; M \mapsto P M P^{-1}$ est un automorphisme d'espace vectoriel (d'inverse $N \mapsto P^{-1} N P$).  
L'image du sous-espace vectoriel $\mathcal{C}(T)$ par $\phi$ est le sous-espace $\mathcal{C}(A)$, d'où :
$$\dim \mathcal{C}(A) = \dim \mathcal{C}(T) = 3$$
De plus, puisque $P J^k P^{-1} = (P J P^{-1})^k = (A - 2I_3)^k$, on a aussi :
$$\mathcal{C}(A) = \mathrm{Vect}(I_3, A, A^2)$$

##### 10. Résolution de $X^2 = T$ et solutions de $Y^2 = A$
a. Soit $X$ une matrice vérifiant $X^2 = T$. Alors :
$$X T = X (X^2) = X^3 = (X^2) X = T X$$
Donc toute solution $X$ commute avec $T$, c'est-à-dire $X \in \mathcal{C}(T)$.

b. D'après la question 8, toute solution s'écrit sous la forme $X = \alpha I_3 + \beta J + \gamma J^2$, avec $(\alpha, \beta, \gamma) \in \mathbb{R}^3$.  
Calculons $X^2$ en utilisant la nilpotence $J^3 = 0_3$ :
$$X^2 = (\alpha I_3 + \beta J + \gamma J^2)^2 = \alpha^2 I_3 + 2\alpha\beta J + (2\alpha\gamma + \beta^2) J^2$$
On veut $X^2 = T = 2I_3 + J$. Par liberté de la famille $(I_3, J, J^2)$, cela équivaut au système :
$$\begin{cases} \alpha^2 = 2 \\ 2\alpha\beta = 1 \\ 2\alpha\gamma + \beta^2 = 0 \end{cases}$$
Résolvons ce système réel :
1. $\alpha = \pm \sqrt{2}$.
2. $\beta = \frac{1}{2\alpha} = \pm \frac{1}{2\sqrt{2}} = \pm \frac{\sqrt{2}}{4}$.
3. $\gamma = -\frac{\beta^2}{2\alpha} = -\frac{1/8}{\pm 2\sqrt{2}} = \mp \frac{1}{16\sqrt{2}} = \mp \frac{\sqrt{2}}{32}$.

L'équation $(E_T)$ possède donc exactement deux solutions réelles distinctes :
$$X_1 = \sqrt{2} I_3 + \frac{\sqrt{2}}{4} J - \frac{\sqrt{2}}{32} J^2 = \begin{pmatrix} \sqrt{2} & \frac{\sqrt{2}}{4} & -\frac{\sqrt{2}}{32} \\ 0 & \sqrt{2} & \frac{\sqrt{2}}{4} \\ 0 & 0 & \sqrt{2} \end{pmatrix}$$
$$X_2 = -X_1 = \begin{pmatrix} -\sqrt{2} & -\frac{\sqrt{2}}{4} & \frac{\sqrt{2}}{32} \\ 0 & -\sqrt{2} & -\frac{\sqrt{2}}{4} \\ 0 & 0 & -\sqrt{2} \end{pmatrix}$$

c. Pour l'équation $(E_A) : Y^2 = A$, posons $X = P^{-1} Y P$.  
Alors $Y^2 = A \iff (P X P^{-1})^2 = P T P^{-1} \iff P X^2 P^{-1} = P T P^{-1} \iff X^2 = T$.  
L'application $X \mapsto P X P^{-1}$ étant une bijection de $\mathcal{M}_3(\mathbb{R})$ sur lui-même, l'équation $Y^2 = A$ admet exactement le même nombre de solutions que $(E_T)$, c'est-à-dire **exactement 2 solutions** dans $\mathcal{M}_3(\mathbb{R})$ :
$$Y_1 = P X_1 P^{-1} \quad \text{et} \quad Y_2 = -Y_1$$