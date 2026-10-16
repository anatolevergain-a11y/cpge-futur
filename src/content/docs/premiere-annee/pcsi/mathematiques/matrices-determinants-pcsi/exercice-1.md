---
title: 'Exercice 1 : Calcul de déterminants d ordre 2 et 3 et cofacteurs'
description: 'Problème corrigé type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le présent problème se propose d'étudier les techniques fondamentales de calcul des déterminants en dimension 2 et 3, ainsi que l'utilisation des cofacteurs et de la comatrice pour l'inversion de matrices à coefficients réels. Ces outils sont omniprésents dans l'étude des endomorphismes et des systèmes linéaires en classe préparatoire.

Soit $\mathcal{M}_n(\mathbb{R})$ l'espace vectoriel des matrices carrées d'ordre $n à coefficients réels. On s'intéresse en particulier aux cas $n=2$ et $n=3$.

### ❓ Questions progressives

1. **Calcul direct en dimension 2 :** 
   Soit $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \in \mathcal{M}_2(\mathbb{R})$. Rappeler l'expression de son déterminant $\det(A)$ et définir la matrice des cofacteurs $\text{Com}(A)$ associée à $A$. Application numérique pour $A_1 = \begin{pmatrix} 2 & -1 \\ 3 & 4 \end{pmatrix}$.

2. **Calcul par la règle de Sarrus et par opérations élémentaires en dimension 3 :**
   Soit $B = \begin{pmatrix} 1 & 2 & -1 \\ 0 & 3 & 2 \\ 2 & -1 & 1 \end{pmatrix} \in \mathcal{M}_3(\mathbb{R})$. 
   Calculer $\det(B)$ en utilisant la règle de Sarrus, puis vérifier le résultat en effectuant un développement par rapport à la première ligne.

3. **Cofacteurs et inversibilité :**
   On considère la matrice $C_t = \begin{pmatrix} 1 & t & 0 \\ t & 1 & t \\ 0 & t & 1 \end{pmatrix}$ où $t \in \mathbb{R}$.
   Calculer $\det(C_t)$ en fonction de $t$. Pour quelles valeurs de $t$ la matrice $C_t$ est-elle inversible ?

4. **Détermination de la comatrice :**
   Dans le cas où $t = 1$, calculer la matrice des cofacteurs $\text{Com}(C_1)$, puis en déduire l'inverse $C_1^{-1}$ à l'aide de la formule générale reliant une matrice inversible à sa comatrice.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Pour une matrice $2 \times 2$, le cofacteur du coefficient situé à la ligne $i$ et à la colonne $j$ s'obtient en prenant le terme symétrique avec un changement de signe approprié ($(-1)^{i+j}$).
- **Question 2 :** Soyez rigoureux dans l'application des opérations sur les lignes ou les colonnes pour simplifier le calcul si nécessaire, mais la règle de Sarrus et le développement le long d'une ligne restent les méthodes canoniques d'ordre 3.
- **Question 3 :** Un développement selon la première colonne ou la première ligne permet de se ramener à des déterminants d'ordre 2.
- **Question 4 :** Rappelez la relation fondamentale $A \cdot \text{Com}(A)^T = \det(A) I_n$. Veillez à ne pas oublier la transposition lors du calcul de l'inverse.

---

### 📋 Corrigé détaillé et vérification des résultats

#### 1. Calcul direct en dimension 2
Pour $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, le déterminant est donné par :
$$\det(A) = ad - bc$$
La matrice des cofacteurs $\text{Com}(A) = (\tilde{a}_{i,j})$ est définie par $\tilde{a}_{i,j} = (-1)^{i+j} \Delta_{i,j}$ où $\Delta_{i,j}$ est le déterminant extrait d'ordre 1. On a explicitement :
$$\text{Com}(A) = \begin{pmatrix} d & -c \\ -b & a \end{pmatrix}$$

*Application numérique pour $A_1 = \begin{pmatrix} 2 & -1 \\ 3 & 4 \end{pmatrix}$ :*
$$\det(A_1) = (2)(4) - (-1)(3) = 8 + 3 = 11$$
$$\text{Com}(A_1) = \begin{pmatrix} 4 & -3 \\ 1 & 2 \end{pmatrix}$$

---

#### 2. Calcul du déterminant d'ordre 3
Soit $B = \begin{pmatrix} 1 & 2 & -1 \\ 0 & 3 & 2 \\ 2 & -1 & 1 \end{pmatrix}$.

*Méthode 1 : Règle de Sarrus*
$$\det(B) = (1 \cdot 3 \cdot 1) + (2 \cdot 2 \cdot 2) + (-1 \cdot 0 \cdot (-1)) - [(2 \cdot 3 \cdot (-1)) + (-1 \cdot 2 \cdot 1) + (1 \cdot 0 \cdot 2)]$$
$$\det(B) = (3 + 8 + 0) - [(-6) + (-2) + 0] = 11 - (-8) = 19$$

*Méthode 2 : Développement par rapport à la première ligne*
$$\det(B) = 1 \cdot \begin{vmatrix} 3 & 2 \\ -1 & 1 \end{vmatrix} - 2 \cdot \begin{vmatrix} 0 & 2 \\ 2 & 1 \end{vmatrix} + (-1) \cdot \begin{vmatrix} 0 & 3 \\ 2 & -1 \end{vmatrix}$$
Calculons les trois déterminants $2 \times 2$ :
- $\begin{vmatrix} 3 & 2 \\ -1 & 1 \end{vmatrix} = (3)(1) - (2)(-1) = 3 + 2 = 5$
- $\begin{vmatrix} 0 & 2 \\ 2 & 1 \end{vmatrix} = (0)(1) - (2)(2) = -4$
- $\begin{vmatrix} 0 & 3 \\ 2 & -1 \end{vmatrix} = (0)(-1) - (3)(2) = -6$

En remplaçant :
$$\det(B) = 1(5) - 2(-4) - 1(-6) = 5 + 8 + 6 = 19$$
Le résultat est cohérent.

---

#### 3. Déterminant paramétrique et inversibilité
Soit $C_t = \begin{pmatrix} 1 & t & 0 \\ t & 1 & t \\ 0 & t & 1 \end{pmatrix}$. Développons par rapport à la première ligne :
$$\det(C_t) = 1 \cdot \begin{vmatrix} 1 & t \\ t & 1 \end{vmatrix} - t \cdot \begin{vmatrix} t & t \\ 0 & 1 \end{vmatrix} + 0 \cdot \begin{vmatrix} t & 1 \\ 0 & t \end{vmatrix}$$
$$\det(C_t) = 1 \cdot (1 - t^2) - t \cdot (t - 0) + 0$$
$$\det(C_t) = 1 - t^2 - t^2 = 1 - 2t^2$$

La matrice $C_t$ est inversible si et seulement si son déterminant est non nul :
$$\det(C_t) \neq 0 \iff 1 - 2t^2 \neq 0 \iff t^2 \neq \frac{1}{2} \iff t \notin \left\{-\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right\}$$

---

#### 4. Calcul de la comatrice et de l'inverse pour $t=1$
Pour $t=1$, on a $C_1 = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 1 & 1 \\ 0 & 1 & 1 \end{pmatrix}$ et $\det(C_1) = 1 - 2(1^2) = -1$.

Calculons les cofacteurs $\tilde{c}_{i,j} = (-1)^{i+j} \Delta_{i,j}$ :
- $\tilde{c}_{11} = + \begin{vmatrix} 1 & 1 \\ 1 & 1 \end{vmatrix} = 1 - 1 = 0$
- $\tilde{c}_{12} = - \begin{vmatrix} 1 & 1 \\ 0 & 1 \end{vmatrix} = -(1 - 0) = -1$
- $\tilde{c}_{13} = + \begin{vmatrix} 1 & 1 \\ 0 & 1 \end{vmatrix} = 1 - 0 = 1$

- $\tilde{c}_{21} = - \begin{vmatrix} 1 & 0 \\ 1 & 1 \end{vmatrix} = -(1 - 0) = -1$
- $\tilde{c}_{22} = + \begin{vmatrix} 1 & 0 \\ 0 & 1 \end{vmatrix} = 1 - 0 = 1$
- $\tilde{c}_{23} = - \begin{vmatrix} 1 & 1 \\ 0 & 1 \end{vmatrix} = -(1 - 0) = -1$

- $\tilde{c}_{31} = + \begin{vmatrix} 1 & 0 \\ 1 & 1 \end{vmatrix} = 1 - 0 = 1$
- $\tilde{c}_{32} = - \begin{vmatrix} 1 & 0 \\ 1 & 1 \end{vmatrix} = -(1 - 0) = -1$
- $\tilde{c}_{33} = + \begin{vmatrix} 1 & 1 \\ 1 & 1 \end{vmatrix} = 1 - 1 = 0$

On obtient ainsi la matrice des cofacteurs :
$$\text{Com}(C_1) = \begin{pmatrix} 0 & -1 & 1 \\ -1 & 1 & -1 \\ 1 & -1 & 0 \end{pmatrix}$$

L'inverse de $C_1$ s'obtient via la formule :
$$C_1^{-1} = \frac{1}{\det(C_1)} \text{Com}(C_1)^T$$
Comme $\text{Com}(C_1)$ est symétrique ici ($\text{Com}(C_1)^T = \text{Com}(C_1)$) et que $\det(C_1) = -1$ :
$$C_1^{-1} = \frac{1}{-1} \begin{pmatrix} 0 & -1 & 1 \\ -1 & 1 & -1 \\ 1 & -1 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 1 & -1 \\ 1 & -1 & 1 \\ -1 & 1 & 0 \end{pmatrix}$$

*Vérification :*
Calculons $C_1 \cdot C_1^{-1}$ :
$$\begin{pmatrix} 1 & 1 & 0 \\ 1 & 1 & 1 \\ 0 & 1 & 1 \end{pmatrix} \begin{pmatrix} 0 & 1 & -1 \\ 1 & -1 & 1 \\ -1 & 1 & 0 \end{pmatrix} = \begin{pmatrix} 0+1+0 & 1-1+0 & -1+1+0 \\ 0+1-1 & 1-1+1 & -1+1+0 \\ 0+1-1 & 1-1+1 & 0+1+0 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$
Le produit est bien égal à la matrice identité $I_3$, ce qui valide l'exactitude de tous les calculs précédents.