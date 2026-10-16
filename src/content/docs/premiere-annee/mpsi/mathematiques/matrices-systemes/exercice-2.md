---
title: 'Exercice 2 : Algorithme du pivot de Gauss et résolution de systèmes'
description: 'Problème corrigé type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

L'objectif de ce problème est d'étudier l'algorithme du pivot de Gauss sous un angle algébrique et matriciel, en l'appliquant à la résolution d'un système linéaire paramétrique. Ce type de problème est un classique des concours CPGE (filière MPSI), servant de pont entre la théorie des espaces vectoriels, le calcul matriciel et l'algorithmique numérique.

Soit $m \in \mathbb{R}$ un paramètre réel. On considère le système linéaire $(S_m)$ d'inconnue $(x, y, z) \in \mathbb{R}^3$ :
$$
(S_m) \quad \left\{
\begin{aligned}
x + y + mz &= 1 \\
x + my + z &= 1 \\
mx + y + z &= 1
\end{aligned}
\right.
$$

On note $A_m$ la matrice associée au système $(S_m)$ et $X = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$, $B = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ les vecteurs colonnes correspondants, de sorte que le système s'écrit sous la forme matricielle :
$$
A_m X = B
$$

---

### ❓ Questions progressives

1. **Représentation matricielle et déterminant**
   Expliciter la matrice $A_m$. Calculer son déterminant $\det(A_m)$ en fonction du paramètre $m$, et factoriser l'expression obtenue.

2. **Inversibilité et noyau**
   Pour quelles valeurs de $m$ la matrice $A_m$ est-elle inversible ? Déterminer, suivant les valeurs de $m$, la dimension du noyau de l'endomorphisme associé $\ker(f_m)$.

3. **Application de l'algorithme du pivot de Gauss**
   En utilisant l'algorithme du pivot de Gauss sur la matrice augmentée $\tilde{A}_m = (A_m \mid B)$, échelonner le système $(S_m)$ en fonction de $m$.

4. **Résolution complète du système**
   Discuter de l'existence et de l'unicité des solutions du système $(S_m)$ selon les valeurs de $m$, et expliciter l'ensemble des solutions dans chaque cas.

5. **Étude du cas particulier $m = -2$**
   Lorsque $m = -2$, expliciter explicitement l'inverse de $A_{-2}$ (si elle existe) ou déterminer une base de l'espace des solutions du système homogène associé.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pour le déterminant, on peut utiliser des opérations sur les lignes ou les colonnes (par exemple, sommer toutes les colonnes dans la première) pour faire apparaître un facteur commun.
* **Question 2 :** Un système carré a une unique solution si et seulement si sa matrice est inversible (ce qui équivaut à un déterminant non nul). Le théorème du rang relie le déterminant, le noyau et l'image.
* **Question 3 :** Effectuez les opérations élémentaires sur les lignes $L_2 \leftarrow L_2 - L_1$ et $L_3 \leftarrow L_3 - mL_1$ (ou des combinaisons similaires) pour éliminer les coefficients sous la diagonale principale. Veillez à bien traiter le cas où le pivot s'annule.
* **Question 4 :** Traduisez l'échelonnement obtenu en conditions de compatibilité (théorème de Rouché-Capelli).
* **Question 5 :** Utilisez la méthode de Gauss-Jordan (inversion par blocs ou opérations sur les lignes de la matrice augmentée de l'identité) pour trouver l'inverse.

---

### 📋 Corrigé détaillé et vérification des résultats

#### 1. Représentation matricielle et déterminant
La matrice associée au système est :
$$
A_m = \begin{pmatrix} 
1 & 1 & m \\ 
1 & m & 1 \\ 
m & 1 & 1 
\end{pmatrix}
$$

Calculons le déterminant $\det(A_m)$ en effectuant l'opération sur les colonnes $C_1 \leftarrow C_1 + C_2 + C_3$ :
$$
\det(A_m) = \begin{vmatrix} 
1+1+m & 1 & m \\ 
1+m+1 & m & 1 \\ 
m+1+1 & 1 & 1 
\end{vmatrix}
= \begin{vmatrix} 
m+2 & 1 & m \\ 
m+2 & m & 1 \\ 
m+2 & 1 & 1 
\end{vmatrix}
$$

On peut factoriser $(m+2)$ par la première colonne :
$$
\det(A_m) = (m+2) \begin{vmatrix} 
1 & 1 & m \\ 
1 & m & 1 \\ 
1 & 1 & 1 
\end{vmatrix}
$$

Soustrayons la troisième ligne aux deux premières ($L_1 \leftarrow L_1 - L_3$ et $L_2 \leftarrow L_2 - L_3$) :
$$
\det(A_m) = (m+2) \begin{vmatrix} 
0 & 0 & m-1 \\ 
0 & m-1 & 0 \\ 
1 & 1 & 1 
\end{vmatrix}
$$

En développant selon la première colonne, on obtient :
$$
\det(A_m) = (m+2) \times 1 \times \begin{vmatrix} 
0 & m-1 \\ 
m-1 & 0 
\end{vmatrix}
= (m+2) \left( 0 - (m-1)^2 \right) = -(m+2)(m-1)^2
$$

#### 2. Inversibilité et noyau
* La matrice $A_m$ est inversible si et seulement si $\det(A_m) \neq 0$, c'est-à-dire $-(m+2)(m-1)^2 \neq 0$.
Conclusion: ** $A_m$ est inversible si et seulement si **$m \in \mathbb{R} \setminus \{-2, 1\}$**.

* D'après le théorème du rang, la dimension du noyau de $f_m$ est liée au rang de $A_m$ par $\dim(\ker(f_m)) = 3 - \text{rg}(A_m)$ :
  - Si $m \in \mathbb{R} \setminus \{-2, 1\}$, $\text{rg}(A_m) = 3$ donc $\dim(\ker(f_m)) = 0$ (noyau réduit à $\{0\}$).
  - Si $m = 1$, $A_1 = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \times \end{pmatrix}$ est de rang 1, donc $\dim(\ker(f_1)) = 3 - 1 = 2$.
  - Si $m = -2$, $\det(A_{-2}) = 0$ mais le calcul des mineurs montre que $\text{rg}(A_{-2}) = 2$, donc $\dim(\ker(f_{-2})) = 3 - 2 = 1$.

#### 3. Application de l'algorithme du pivot de Gauss
Considérons la matrice augmentée $\tilde{A}_m = \left(\begin{array}{ccc|c} 1 & 1 & m & 1 \\ 1 & m & 1 & 1 \\ m & 1 & 1 & 1 \end{array}\right)$.

Effectuons les opérations élémentaires :
* $L_2 \leftarrow L_2 - L_1$
* $L_3 \leftarrow L_3 - m L_1$

Ce qui donne :
$$
\left(\begin{array}{ccc|c} 
1 & 1 & m & 1 \\ 
0 & m-1 & 1-m & 0 \\ 
0 & 1-m & 1-m^2 & 1-m 
\end{array}\right)
$$

Effectuons ensuite l'opération $L_3 \leftarrow L_3 + L_2$ :
$$
\left(\begin{array}{ccc|c} 
1 & 1 & m & 1 \\ 
0 & m-1 & 1-m & 0 \\ 
0 & 0 & 2-m-m^2 & 1-m 
\end{array}\right)
$$

Remarquons que le terme en bas à droite de la matrice carrée, $2 - m - m^2$, se factorise en $-(m+2)(m-1)$.
Le système échelonné s'écrit donc :
$$
\left(S_m'\right) \quad \left\{
\begin{aligned}
x + y + mz &= 1 \\
(m-1)y + (1-m)z &= 0 \\
-(m+2)(m-1)z &= 1-m
\end{aligned}
\right.
$$

#### 4. Discussion et résolution selon les valeurs de $m$

* **Cas 1 : $m \in \mathbb{R} \setminus \{-2, 1\}$**
  Les pivots $(1, m-1, -(m+2)(m-1))$ sont tous non nuls. Le système admet une **unique solution**.
  D'après la troisième ligne :
  $$
  z = \frac{1-m}{-(m+2)(m-1)} = \frac{-1}{m+2}
  $$
  En reportant dans la deuxième ligne :
  $$
  (m-1)y + (1-m)\left(\frac{-1}{m+2}\right) = 0 \implies (m-1)y = \frac{1-m}{m+2} \implies y = -\frac{1}{m+2}
  $$
  Puis dans la première ligne :
  $$
  x + \left(-\frac{1}{m+2}\right) + m\left(-\frac{1}{m+2}\right) = 1 \implies x - \frac{m+1}{m+2} = 1 \implies x = 1 + \frac{m+1}{m+2} = \frac{2m+3}{m+2}
  $$
  **Solution unique :** $S = \left\{ \left( \frac{2m+3}{m+2}, -\frac{1}{m+2}, -\frac{1}{m+2} \right) \right\}$.

* **Cas 2 : $m = 1$**
  Le système devient :
  $$
  \left\{
  \begin{aligned}
  x + y + z &= 1 \\
  0 &= 0 \\
  0 &= 0
  \end{aligned}
  \right.
  $$
  Il reste une seule équation. L'ensemble des solutions est un plan affine :
Solutions: ** $S = \{ (1 - y - z, y, z) \mid (y, z) \in \mathbb{R}^2 \}$.

* **Cas 3 : $m = -2$**
  Le système échelonné devient :
  $$
  \left\{
  \begin{aligned}
  x + y - 2z &= 1 \\
  -3y + 3z &= 0 \\
  0 \cdot z &= 3
  \end{aligned}
  \right.
  $$
  La dernière ligne donne $0 = 3$, ce qui est absurde.
Conclusion: ** Le système n'admet **aucune solution** ($S = \emptyset$).

#### 5. Étude du cas particulier $m = -2$
Pour $m = -2$, la matrice $A_{-2}$ est :
$$
A_{-2} = \begin{pmatrix} 
1 & 1 & -2 \\ 
1 & -2 & 1 \\ 
-2 & 1 & 1 
\end{pmatrix}
$$
Puisque $\det(A_{-2}) = 0$, la matrice $A_{-2}$ n'est **pas inversible** (ce qui est cohérent avec le fait que le système n'admet pas de solution pour le second membre $B$, traduisant que $B \notin \text{Im}(A_{-2})$).

Considérons le système homogène associé $A_{-2} X = 0$ :
$$
\left\{
\begin{aligned}
x + y - 2z &= 0 \\
x - 2y + z &= 0 \\
-2x + y + z &= 0
\end{aligned}
\right.
$$
En soustrayant la première ligne à la deuxième, on obtient $-3y + 3z = 0$, soit $y = z$. En reportant dans la première équation : $x + z - 2z = 0 \implies x = z$.
Par conséquent, le noyau $\ker(f_{-2})$ est une droite vectorielle engendrée par le vecteur non nul :
$$
v = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}
$$
On vérifie bien que $A_{-2} v = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$, ce qui valide le résultat.