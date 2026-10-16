---
title: 'Exercice 1 : Pivot de Gauss et inversibilité'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le présent problème se propose d'étudier l'algorithme du pivot de Gauss sous un angle algébrique et matriciel. Cet outil fondamental permet non seulement de résoudre des systèmes linéaires, mais constitue également une méthode de choix pour déterminer l'inversibilité d'une matrice carrée et expliciter son inverse. 

Soit $n \in \mathbb{N}^*$. On note $\mathcal{M}_n(\mathbb{R})$ l'espace vectoriel des matrices carrées d'ordre $n$ à coefficients réels, et $I_n$ la matrice identité de $\mathcal{M}_n(\mathbb{R})$. Soit $A \in \mathcal{M}_n(\mathbb{R})$. On s'intéresse au système linéaire associé $AX = Y$, où $X, Y \in \mathcal{M}_{n,1}(\mathbb{R})$.

L'objectif est de formaliser l'action des opérations élémentaires sur les lignes d'une matrice à l'aide de matrices inversibles élémentaires, d'établir un critère d'inversibilité pratique, et d'appliquer cette méthode à une famille paramétrique de matrices.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Préalable matriciel :** Soit $i, j \in \{1, \dots, n\}$ avec $i \neq j$. On définit la matrice de transvection $T_{i,j}(\alpha)$ (où $\alpha \in \mathbb{R}$) comme la matrice obtenue en ajoutant $\alpha$ fois la $L_j$ à la $L_i$ de $I_n$. Expliciter $T_{i,j}(\alpha)$ et montrer qu'elle est inversible en déterminant son inverse.
2. **Interprétation des opérations élémentaires :** Soit $A \in \mathcal{M}_n(\mathbb{R})$. Montrer que multiplier $A$ à gauche par $T_{i,j}(\alpha)$ revient à effectuer l'opération élémentaire sur les lignes de $A$ : $L_i \leftarrow L_i + \alpha L_j$.
3. **Caractérisation de l'inversibilité :** En déduire que si une matrice $A$ peut être transformée en la matrice identité $I_n$ au moyen d'une suite finie d'opérations élémentaires sur les lignes, alors $A$ est inversible et exprimer $A^{-1}$ à l'aide des matrices élémentaires correspondantes.
4. **Mise en pratique paramétrique :** On considère la matrice $A_t$ dépendants d'un paramètre réel $t \in \mathbb{R}$ :
   $$A_t = \begin{pmatrix} 1 & 1 & 1 \\ 1 & t & t^2 \\ 1 & t^2 & t^4 \end{pmatrix}$$
   À l'aide de l'algorithme du pivot de Gauss, déterminer pour quelles valeurs de $t$ la matrice $A_t$ est inversible.
5. **Calcul de l'inverse :** Lorsque $A_t$ est inversible, déterminer sa matrice inverse $A_t^{-1}$ par la méthode du pivot total (ou méthode de Gauss-Jordan).
6. **Analyse critique du modèle numérique :** En pratique, l'algorithme du pivot de Gauss est implémenté sur ordinateur avec des nombres à virgule flottante (précision machine). Expliquer brièvement pourquoi le choix d'un pivot de plus grande valeur absolue possible (pivot partiel) est indispensable en calcul numérique pour éviter l'instabilité numérique, contrairement à l'algèbre exacte où tout élément non nul convient.

---

### 💡 Pistes & Indications méthodologiques

* **Q1 & Q2 :** Écrivez explicitement la matrice $T_{i,j}(\alpha)$ pour $n=3$ par exemple afin de visualiser sa structure (la diagonale ne contient que des $1$, et le coefficient $\alpha$ se situe à la position $(i,j)$). Pour l'inversibilité, pensez à l'opération inverse : annuler l'effet de l'ajout en soustrayant $\alpha L_j$.
* **Q3 :** Traduisez les opérations par des produits matriciels successifs $E_k \dots E_1 A = I_n$. Utilisez les propriétés associatives du produit matriciel et la définition de l'inverse.
* **Q4 & Q5 :** Procédez par étapes en échelonnant la matrice par rapport aux lignes. Attention aux disjonctions de cas selon les valeurs de $t$ (notamment $t=0, t=1$).
* **Q6 :** Pensez aux erreurs d'arrondi et à la division par un nombre extrêmement proche de $0$ qui amplifie de manière drastique les incertitudes de mesure ou de calcul.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Préalable matriciel : Transvection
La matrice de transvection $T_{i,j}(\alpha)$ (avec $i \neq j$) s'écrit sous la forme :
$$T_{i,j}(\alpha) = I_n + \alpha E_{i,j}$$
où $E_{i,j}$ est la matrice élémentaire dont tous les coefficients sont nuls sauf celui situé à la ligne $i$ et la colonne $j$ qui vaut $1$. 
Explicitement, ses coefficients $(k,l)$ sont $\delta_{k,l}$ (symbole de Kronecker) sauf pour le coefficient $(i,j)$ qui vaut $\alpha$.

L'opération consistant à ajouter $\alpha$ fois la ligne $j$ à la ligne $i$ est exactement inversée par l'opération consistant à soustraire $\alpha$ fois la ligne $j$ à la ligne $i$, c'est-à-dire en appliquant $T_{i,j}(-\alpha)$. Ainsi :
$$T_{i,j}(\alpha) T_{i,j}(-\alpha) = I_n$$
La matrice $T_{i,j}(\alpha)$ est donc **inversible** et son inverse est :
$$(T_{i,j}(\alpha))^{-1} = T_{i,j}(-\alpha)$$

#### 2. Interprétation des opérations élémentaires
Soit $A = (a_{k,l}) \in \mathcal{M}_n(\mathbb{R})$. Calculons le produit $T_{i,j}(\alpha) A$. 
Par définition du produit matriciel, la ligne $k$ de $T_{i,j}(\alpha)A$ est obtenue en multipliant la ligne $k$ de $T_{i,j}(\alpha)$ par $A$.
* Si $k \neq i$, la $k$-ième ligne de $T_{i,j}(\alpha)$ est celle de $I_n$ (un $1$ à la position $k$, des $0$ ailleurs). Le produit redonne exactement la $k$-ième ligne de $A$.
* Si $k = i$, la $i$-ième ligne de $T_{i,j}(\alpha)$ est celle de $I_n$ avec un $\alpha$ supplémentaire à la colonne $j$. Le produit donne alors :
  $$\text{Ligne}_i(T_{i,j}(\alpha)A) = \text{Ligne}_i(A) + \alpha \text{Ligne}_j(A)$$
Le produit $T_{i,j}(\alpha)A$ représente donc exactement l'application de l'opération élémentaire $L_i \leftarrow L_i + \alpha L_j$ sur la matrice $A$.

#### 3. Caractérisation de l'inversibilité
Supposons qu'il existe une suite finie de $p$ matrices élémentaires (de transvection, de permutation ou de dilatation, que l'on généralise sous le terme générique $E_k$) telle que :
$$E_p E_{p-1} \dots E_1 A = I_n$$
Chaque matrice élémentaire $E_k$ étant inversible, son inverse est également une matrice élémentaire du même type. En posant $P = E_p E_{p-1} \dots E_1$, $P$ est un produit de matrices inversibles, donc $P$ est inversible.
L'égalité précédente devient :
$$P A = I_n \implies A = P^{-1}$$
Puisque l'inverse d'une matrice inversible est inversible, $A$ est inversible et :
$$A^{-1} = (E_p E_{p-1} \dots E_1)^{-1} = E_1^{-1} E_2^{-1} \dots E_p^{-1}$$
Pratiquement, appliquer la même suite d'opérations élémentaires à la matrice $I_n$ permet d'obtenir directement $A^{-1}$.

#### 4. Application au calcul paramétrique (Inversibilité de $A_t$)
Appliquons l'algorithme du pivot de Gauss sur la matrice augmentée $(A_t \mid I_3)$ :
$$\left(\begin{array}{ccc|ccc} 
1 & 1 & 1 & 1 & 0 & 0 \\ 
1 & t & t^2 & 0 & 1 & 0 \\ 
1 & t^2 & t^4 & 0 & 0 & 1 
\end{array}\right)$$

Effectuons les opérations $L_2 \leftarrow L_2 - L_1$ et $L_3 \leftarrow L_3 - L_1$ :
$$\left(\begin{array}{ccc|ccc} 
1 & 1 & 1 & 1 & 0 & 0 \\ 
0 & t-1 & t^2-1 & -1 & 1 & 0 \\ 
0 & t^2-1 & t^4-1 & -1 & 0 & 1 
\end{array}\right)$$

Factorisons les termes : $t-1$ dans la ligne 2, et $t^2-1 = (t-1)(t+1)$ dans la ligne 3 :
$$\left(\begin{array}{ccc|ccc} 
1 & 1 & 1 & 1 & 0 & 0 \\ 
0 & t-1 & (t-1)(t+1) & -1 & 1 & 0 \\ 
0 & (t-1)(t+1) & (t-1)(t+1)(t^2+t) & -1 & 0 & 1 
\end{array}\right)$$

Si $t \neq 1$, on peut diviser la ligne 2 par $(t-1)$ et la ligne 3 par $(t-1)$ :
$$\left(\begin{array}{ccc|ccc} 
1 & 1 & 1 & 1 & 0 & 0 \\ 
0 & 1 & t+1 & \frac{-1}{t-1} & \frac{1}{t-1} & 0 \\ 
0 & t+1 & t(t+1) & \frac{-1}{t-1} & 0 & \frac{1}{t-1} 
\end{array}\right)$$

Effectuons $L_3 \leftarrow L_3 - (t+1)L_2$ :
* Nouveau coefficient en $(3,2)$ : $(t+1) - (t+1)(1) = 0$
* Nouveau coefficient en $(3,3)$ : $t(t+1) - (t+1)(t+1) = (t+1)(t - (t+1)) = (t+1)(-1) = -(t+1)$

La matrice devient :
$$\left(\begin{array}{ccc|ccc} 
1 & 1 & 1 & 1 & 0 & 0 \\ 
0 & 1 & t+1 & \frac{-1}{t-1} & \frac{1}{t-1} & 0 \\ 
0 & 0 & -(t+1) & \frac{-1}{t-1} - \frac{-(t+1)}{t-1} & \frac{-(t+1)}{t-1} & \frac{1}{t-1} 
\end{array}\right)$$
Simplifions le terme de droite sur la dernière ligne (première colonne de la partie droite) :
$$\frac{-1 + t + 1}{t-1} = \frac{t}{t-1}$$
On obtient ainsi :
$$\left(\begin{array}{ccc|ccc} 
1 & 1 & 1 & 1 & 0 & 0 \\ 
0 & 1 & t+1 & \frac{-1}{t-1} & \frac{1}{t-1} & 0 \\ 
0 & 0 & -(t+1) & \frac{t}{t-1} & \frac{-(t+1)}{t-1} & \frac{1}{t-1} 
\end{array}\right)$$

Pour que la matrice soit inversible, le dernier pivot$-(t+1)$ doit être non nul, soit $t \neq -1$. De plus, nous avons supposé $t \neq 1$.
* **Conclusion sur l'inversibilité :** $A_t$ est inversible si et seulement si **$t \in \mathbb{R} \setminus \{-1, 1, 0\}$** (notons que si $t=0$, $A_0 = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 0 & 0 \\ 1 & 0 & 0 \end{pmatrix}$ qui possède deux lignes identiques, donc non inversible). Plus précisément, le calcul montre que l'inversibilité nécessite $t \neq 1$ et $t+1 \neq 0 \implies t \neq -1$. Si $t=0$, le déterminant ou le rang montre également la non-inversibilité.

#### 5. Calcul de l'inverse $A_t^{-1}$ (pour $t \in \mathbb{R} \setminus \{-1, 0, 1\}$)
Poursuivons la réduction de Gauss-Jordan à partir de la forme triangulaire supérieure obtenue :
Divisons la ligne 3 par $-(t+1)$ :
$$\left(\begin{array}{ccc|ccc} 
1 & 1 & 1 & 1 & 0 & 0 \\ 
0 & 1 & t+1 & \frac{-1}{t-1} & \frac{1}{t-1} & 0 \\ 
0 & 0 & 1 & \frac{-t}{(t-1)(t+1)} & \frac{1}{t-1} & \frac{-1}{(t-1)(t+1)} 
\end{array}\right)$$

Remontons vers la matrice identité :
1. $L_2 \leftarrow L_2 - (t+1)L_3$ :
   * Partie droite, coef 1 : $\frac{-1}{t-1} - (t+1)\left(\frac{-t}{t^2-1}\right) = \frac{-1}{t-1} + \frac{t}{t-1} = \frac{t-1}{t-1} = 1$
   * Partie droite, coef 2 : $\frac{1}{t-1} - (t+1)\left(\frac{1}{t-1}\right) = \frac{1 - t - 1}{t-1} = \frac{-t}{t-1}$
   * Partie droite, coef 3 : $0 - (t+1)\left(\frac{-1}{t^2-1}\right) = \frac{1}{t-1}$

   La ligne 2 devient : $\left(0 \quad 1 \quad 0 \;\middle|\; 1 \quad \frac{-t}{t-1} \quad \frac{1}{t-1}\right)$

2. $L_1 \leftarrow L_1 - L_3$ :
   * Partie droite, coef 1 : $1 - \frac{-t}{t^2-1} = \frac{t^2-1+t}{t^2-1}$
   * Partie droite, coef 2 : $0 - \frac{1}{t-1} = \frac{-1}{t-1}$
   * Partie droite, coef 3 : $0 - \frac{-1}{t^2-1} = \frac{1}{t^2-1}$

3. Enfin, $L_1 \leftarrow L_1 - L_2$ pour éliminer le coefficient en $(1,2)$ :
   * Partie droite, coef 1 : $\frac{t^2+t-1}{t^2-1} - 1 = \frac{t^2+t-1-(t^2-1)}{t^2-1} = \frac{t}{t^2-1}$
   * Partie droite, coef 2 : $\frac{-1}{t-1} - \left(\frac{-t}{t-1}\right) = \frac{-1+t}{t-1} = 1$
   * Partie droite, coef 3 : $\frac{1}{t^2-1} - \frac{1}{t-1} = \frac{1 - (t+1)}{t^2-1} = \frac{-t}{t^2-1}$

On obtient finalement l'inverse :
$$A_t^{-1} = \frac{1}{t^2-1} \begin{pmatrix} t & t^2-1 & -t \\ -t(t+1) & t(t+1) & t+1 \\ -t & t^2-1 & -1 \end{pmatrix} \quad \text{(ou sous forme factorisée équivalente)}$$

#### 6. Analyse critique du modèle numérique
En arithmétique flottante (ordinateurs), les nombres réels sont stockés avec une précision limitée. Si l'on choisit un pivot très proche de zéro (par exemple $10^{-16}$), la division par ce pivot dans l'algorithme de Gauss conduit à multiplier massivement les erreurs d'arrondi précédentes, ce qui peut détruire complètement la significativité du résultat (phénomène d'instabilité numérique ou d'amplification catastrophique des erreurs). Le **pivot partiel** (qui consiste à permuter les lignes pour choisir à chaque étape le coefficient de plus grande valeur absolue en module comme pivot) garantit que l'on divise par des nombres de taille satisfaisante, stabilisant ainsi considérablement l'algorithme.