---
title: 'Exercice 1 : Déterminant d une matrice carrée'
description: 'Problème d entraînement type concours officiel.'
---

# Problème guidé : Propriétés algébriques et géométriques du déterminant

**Filière :** MPSI  
**Matière :** Mathématiques  
Chapitre: ** Groupe symétrique et Déterminants  
**Thème :** Déterminant d'une matrice carrée  

---

## 1. Énoncé

Soit $n \ge 2$ un entier naturel. On note $\mathcal{M}_n(\mathbb{R})$ l'espace vectoriel des matrices carrées d'ordre $n$ à coefficients réels, et $\mathrm{GL}_n(\mathbb{R})$ le groupe linéaire des matrices inversibles. On rappelle qu'il existe une unique application appelée déterminant, notée $\det : \mathcal{M}_n(\mathbb{R}) \to \mathbb{R}$, qui est $n$-linéaire alternée par rapport aux colonnes de la matrice, et vaut $1$ pour la matrice identité $I_n$.

Le problème se propose d'étudier certaines propriétés structurelles du déterminant, de relier cette notion au groupe symétrique $\mathcal{S}_n$, et d'examiner des méthodes de calcul pour des matrices par blocs, tout en questionnant la portée algorithmique de ces objets en mathématiques appliquées.

---

## 2. Questions

### Partie I : Lien avec le groupe symétrique et formule explicite
1. Démontrer que si une application $f : (\mathbb{R}^n)^n \to \mathbb{R}$ est $n$-linéaire alternée, alors pour toute permutation $\sigma \in \mathcal{S}_n$ et pour toute famille de vecteurs $(C_1, \dots, C_n)$, on a :
   $$f(C_{\sigma(1)}, \dots, C_{\sigma(n)}) = \varepsilon(\sigma) f(C_1, \dots, C_n)$$
   où $\varepsilon(\sigma)$ désigne la signature de la permutation $\sigma$.
2. En déduire la célèbre formule explicite de Leibniz pour le déterminant d'une matrice $A = (a_{i,j})_{1 \le i,j \le n}$ :
   $$\det(A) = \sum_{\sigma \in \mathcal{S}_n} \varepsilon(\sigma) \prod_{i=1}^{n} a_{\sigma(i), i}$$
3. Calculer à l'aide de cette formule le déterminant d'une matrice triangulaire supérieure.

### Partie II : Matrices par blocs et déterminant par blocs
Soit $M \in \mathcal{M}_{n+m}(\mathbb{R})$ une matrice par blocs de la forme :
$$M = \begin{pmatrix} A & B \\ 0_{m,n} & C \end{pmatrix}$$
où $A \in \mathcal{M}_n(\mathbb{R})$, $C \in \mathcal{M}_m(\mathbb{R})$, $B \in \mathcal{M}_{n,m}(\mathbb{R})$ et $0_{m,n}$ est la matrice nulle de taille $m \times n$.
4. Dans le cas où $A$ est inversible, établir l'égalité matricielle :
   $$\begin{pmatrix} A & B \\ 0_{m,n} & C \end{pmatrix} = \begin{pmatrix} A & 0_{n,m} \\ 0_{m,n} & I_m \end{pmatrix} \begin{pmatrix} I_n & A^{-1}B \\ 0_{m,n} & C \end{pmatrix}$$
5. En déduire que $\det(M) = \det(A)\det(C)$ sans supposer nécessairement $A$ inversible (on pourra utiliser un argument de densité ou de polynômes).

### Partie III : Analyse critique des limites du modèle
6. Discuter de la complexité algorithmique de la formule de Leibniz (Partie I, Q2) pour calculer le déterminant d'une matrice de taille $n = 30$. En déduire les limites pratiques de cette approche formelle en calcul scientifique et proposer une alternative rigoureuse enseignée en CPGE.

---

## 3. Pistes et indications

* **Q1 :** Utiliser la décomposition d'une permutation en un produit de transpositions, et exploiter le fait qu'une application alternée s'annule si deux arguments sont égaux, ce qui implique qu'échanger deux vecteurs change le signe de l'application.
* **Q2 :** Exprimer chaque colonne $C_j$ dans la base canonique $(E_1, \dots, E_n)$ de $\mathbb{R}^n$, puis utiliser la multilinéarité et le résultat de la question 1.
* **Q4 & Q5 :** Effectuer le produit matriciel par blocs. Pour le cas général où $A$ n'est pas inversible, penser à considérer la fonction $\lambda \mapsto \det\begin{pmatrix} A - \lambda I_n & B \\ 0 & C \end{pmatrix}$ qui est un polynôme en $\lambda$, et utiliser un argument de continuité/densité de $\mathrm{GL}_n(\mathbb{R})$.

---

## 4. Corrigé pas à pas

### Partie I_1. **Action de $\mathcal{S}_n$ sur une forme $n$-linéaire alternée :**
   Soit $f$ une application $n$-linéaire alternée. Par définition, si l'on échange deux vecteurs, la valeur change de signe. Toute permutation $\sigma \in \mathcal{S}_n$ se décompose en un produit de $k$ transpositions, et sa signature est $\varepsilon(\sigma) = (-1)^k$. Par composition des transpositions, l'application de $\sigma$ aux arguments entraîne exactement $k$ changements de signe successifs. Ainsi, $f(C_{\sigma(1)}, \dots, C_{\sigma(n)}) = \varepsilon(\sigma) f(C_1, \dots, C_n)$.

2. **Formule de Leibniz :**
   Soit $A = (a_{i,j})$ dont les colonnes sont $C_j = \sum_{i=1}^n a_{i,j} E_i$. Par $n$-linéarité :
   $$\det(A) = \sum_{1 \le i_1, \dots, i_n \le n} a_{i_1,1} a_{i_2,2} \dots a_{i_n,n} \det(E_{i_1}, \dots, E_{i_n})$$
   Le déterminant $\det(E_{i_1}, \dots, E_{i_n})$ est non nul si et seulement si la famille $(E_{i_1}, \dots, E_{i_n})$ est une permutation de la base canonique, c'est-à-dire si l'application $j \mapsto i_j$ est une bijection, donc une permutation $\sigma \in \mathcal{S}_n$. En utilisant la question précédente, $\det(E_{\sigma(1)}, \dots, E_{\sigma(n)}) = \varepsilon(\sigma)\det(E_1, \dots, E_n) = \varepsilon(\sigma)$. D'où :
   $$\det(A) = \sum_{\sigma \in \mathcal{S}_n} \varepsilon(\sigma) \prod_{j=1}^n a_{\sigma(j), j}$$
   *(Note : en transposant la matrice, on retrouve la sommation usuelle sur les indices de lignes).*

3. **Cas triangulaire supérieur :**
   Si $A$ est triangulaire supérieure ($a_{i,j} = 0$ pour $i > j$), le seul terme de la somme de Leibniz qui ne s'adjoigne pas un facteur nul est celui associé à l'identité $\sigma = \text{id}$ (car si $\sigma$ n'est pas l'identité, il existe $j$ tel que $\sigma(j) > j$, donc $a_{\sigma(j),j} = 0$). Ainsi :
   $$\det(A) = \prod_{i=1}^n a_{i,i}$$

### Partie II
4. **Vérification par blocs (cas $A$ inversible) :**
   Effectuons le produit matriciel :
   $$\begin{pmatrix} A & 0 \\ 0 & I_m \end{pmatrix} \begin{pmatrix} I_n & A^{-1}B \\ 0 & C \end{pmatrix} = \begin{pmatrix} A \times I_n + 0 \times 0 & A(A^{-1}B) + 0 \times C \\ 0 \times I_n + I_m \times 0 & 0 \times (A^{-1}B) + I_m \times C \end{pmatrix} = \begin{pmatrix} A & B \\ 0 & C \end{pmatrix}$$
   L'égalité est bien vérifiée.

5. **Calcul du déterminant par blocs :**
   Par multiplicativité du déterminant :
   $$\det(M) = \det\begin{pmatrix} A & 0 \\ 0 & I_m \end{pmatrix} \det\begin{pmatrix} \begin{pmatrix} I_n & A^{-1}B \\ 0 & C  \end{pmatrix}\right)$$
   La matrice de gauche est triangulaire par blocs dont les blocs diagonaux ont pour déterminants $\det(A)$ et $\det(I_m) = 1$. La matrice de droite est également triangulaire par blocs, son déterminant vaut $\det(I_n)\det(C) = \det(C)$. Ainsi, si $A$ est inversible, $\det(M) = \det(A)\det(C)$.
   Si $A$ n'est pas inversible, l'application $\lambda \mapsto \det(A - \ \lambda I_n)$ n'est pas identiquement nulle, donc pour tout $\lambda \in \mathbb{R}^*$ assez petit, $A - \lambda I_n$ est inversible. Par continuité du déterminant (application polynomiale des coefficients), en faisant tendre $\lambda vers 0$, on obtient par passage à la limite :
   $$\det(M) = \det(A)\det(C)$$

---

## 5. Analyse critique des limites du modèle

La formule explicite de Leibniz (Partie I, Q2) exprime le déterminant comme une somme sur le groupe symétrique $\mathcal{S}_n$. 
* **Obstacle combinatoire :** Le cardinal du groupe $\mathcal{S}_n$ est $n!$ (factorielle de $n$). Pour une matrice de taille $n = 30$, le nombre de termes à sommer est $30! \approx 2,65 \times 10^{32}$. Même avec les supercalculateurs actuels effectuant des teraflops, l'évaluation directe par la formule de Leibniz nécessiterait des milliards d'années.
* **Alternative algorithmique :** En pratique numérique et en ingénierie, on n'utilise **jamais** la définition par le déterminant ou la formule de Leibniz pour calculer des déterminants de grandes tailles. On a recours à l'algorithme d'élimination de Gauss-Pivot (ou décomposition $LU$), dont la complexité est en $\mathcal{O}(n^3)$, rendant le calcul instantané même pour des matrices de grande dimension. Le modèle théorique du déterminant a une immense valeur structurelle (notamment pour l'inversibilité, le calcul de spectre et le changement de base), mais souffre d'une inefficacité rédhibitoire en calcul effectif à grande échelle.