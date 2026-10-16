---
title: 'Cours : Matrices et Déterminants'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $\mathbb{K}$ un corps commutatif (en pratique $\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$). Soit $(n, p) \in (\mathbb{N}^*)^2$.

Une matrice $A$ de taille $n \times p$ à coefficients dans $\mathbb{K}$ est un tableau rectangulaire d'éléments de $\mathbb{K}$ comportant $n$ lignes et $p$ colonnes. L'ensemble de ces matrices est noté $\mathcal{M}_{n,p}(\mathbb{K})$. On note un tel élément :
$$A = \begin{pmatrix} a_{1,1} & a_{1,2} & \cdots & a_{1,p} \\ a_{2,1} & a_{2,2} & \cdots & a_{2,p} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n,1} & a_{n,2} & \cdots & a_{n,p} \end{pmatrix} \in \mathcal{M}_{n,p}(\mathbb{K})$$
Plus brièvement, on écrit $A = (a_{i,j})_{\substack{1 \le i \le n \\ 1 \le j \le p}}$, où $a_{i,j} \in \mathbb{K}$ est le coefficient situé à la $i$-ème ligne et la $j$-ème colonne.

Dans le cas où $n = p$, la matrice est dite **carrée** d'ordre $n$. L'ensemble de ces matrices est noté $\mathcal{M}_n(\mathbb{K})$. 
*   La matrice unité (ou matrice identité) d'ordre $n$, notée $I_n \in \mathcal{M}_n(\mathbb{K})$, est définie par $(I_n)_{i,j} = \delta_{i,j}$ (symbole de Kronecker).
*   Une matrice $A \in \mathcal{M}_n(\mathbb{K})$ est dite **inversible** s'il existe une matrice $B \in \mathcal{M}_n(\mathbb{K})$ telle que $AB = BA = I_n$. Cette matrice $B$ est unique et notée $A^{-1}$. L'ensemble des matrices inversibles d'ordre $n$ est noté $\text{GL}_n(\mathbb{K})$.

Le **déterminant** est une application $\det : \mathcal{M}_n(\mathbb{K}) \to \mathbb{K}$ qui associe à toute matrice carrée un scalaire, caractérisant notamment son inversibilité.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème 1 : Caractérisation de l'inversibilité par le déterminant
Soit $A \in \mathcal{M}_n(\mathbb{K})$. 
$$A \in \text{GL}_n(\mathbb{K}) \iff \det(A) \neq 0$$

*Démonstration (Esquisse) :* 
Si $A$ est inversible, il existe $A^{-1} \in \mathcal{M}_n(\mathbb{K})$ telle que $A A^{-1} = I_n$. Par multiplicativité du déterminant ($\det(XY) = \det(X)\det(Y)$) :
$$\det(A)\det(A^{-1}) = \det(I_n) = 1$$
Le produit dans $\mathbb{K}$ étant non nul, nécessairement $\det(A) \neq 0$. 
Réciproquement, si $\det(A) \neq 0$, on introduit la comatrice de $A$, notée $\text{Com}(A)$. La relation fondamentale $A \, {}^t\text{Com}(A) = {}^t\text{Com}(A) \, A = \det(A)I_n$ permet de construire explicitement l'inverse : $A^{-1} = \frac{1}{\det(A)} \, {}^t\text{Com}(A)$. $\blacksquare$

### Théorème 2 : Propriétés fondamentales du déterminant
Soit $(A, B) \in (\mathcal{M}_n(\mathbb{K}))^2$ et $\lambda \in \mathbb{K}$.
1.  **Multiplicativité :** $\det(AB) = \det(A)\det(B)$.
2.  **Transposition :** $\det({}^t\!A) = \det(A)$.
3.  **Homogénéité :** $\det(\lambda A) = \lambda^n \det(A)$.

---

## 💡 3. Méthodes de calcul & Algorithmes

### Calcul d'un déterminant par opérations sur les lignes ou colonnes
Puisque le déterminant est une forme $n$-linéaire alternée des colonnes (et donc des lignes par transposition), les opérations élémentaires modifient le déterminant de la manière suivante :
*   L'échange de deux lignes/colonnes multiplie le déterminant par $-1$.
*   L'ajout à une ligne/colonne d'un multiple d'une autre ligne/colonne ne modifie pas le déterminant ($\text{det}(L_i \leftarrow L_i + \alpha L_j) = \det(A)$ pour $i \neq j$).
*   La multiplication d'une ligne/colonne par un scalaire $\lambda$ multiplie le déterminant par $\lambda$.

**Algorithme pratique :** Pour $A \in \mathcal{M}_n(\mathbb{K})$, on utilise l'algorithme du pivot de Gauss pour transformer $A$ en une matrice triangulaire supérieure $T$. Si $r$ est le nombre d'échanges de lignes effectués, alors :
$$\det(A) = (-1)^r \prod_{i=1}^{n} T_{i,i}$$

### Exemple de calcul par récurrence (Développement par rapport à une ligne ou une colonne)
Soit $A \in \mathcal{M}_n(\mathbb{K})$. Pour tout $i \in \{1, \dots, n\}$,
$$\det(A) = \sum_{j=1}^{n} (-1)^{i+j} a_{i,j} \det(A_{i,j})$$
où $A_{i,j} \in \mathcal{M}_{n-1}(\mathbb{K})$ est la matrice extraite obtenue en supprimant la $i$-ème ligne et la $j$-ème colonne de $A$.

---

## ⚠️ 4. Pièges classiques & Erreurs à éviter

1.  **Linéarité du déterminant :** Attention, en général $\det(A + B) \neq \det(A) + \det(B)$. Le déterminant est linéaire *par rapport à chaque colonne (ou ligne) prise isolément*, mais pas par rapport à la matrice elle-même.
2.  **Homogénéité dimensionnelle :** Pour $A \in \mathcal{M}_n(\mathbb{K})$ et $\lambda \in \mathbb{K}$, $\det(\lambda A) = \lambda^n \det(A)$ et **non pas** $\lambda \det(A)$ (erreur extrêmement fréquente).
3.  **Non-commutativité du produit matriciel :** En général, pour $(A, B) \in (\mathcal{M}_n(\mathbb{K}))^2$, $AB \neq BA$. Les identités remarquables usuelles (comme $(A+B)(A-B) = A^2 - B^2$) sont fausses en général si $A$ et $B$ ne commutent pas.
4.  **Application aux matrices non carrées :** Le déterminant n'est défini **que** pour les matrices carrées. Parler du déterminant d'une matrice $A \in \mathcal{M}_{n,p}(\mathbb{K})$ avec $n \neq p$ constitue une hérésie mathématique.