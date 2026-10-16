---
title: 'Exercice 1 : Produit scalaire et espaces euclidiens'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Optimisation et orthogonalité dans les espaces euclidiens de matrices

---

## 1. Énoncé

Soit $n \ge 2$ un entier naturel. On note $\mathcal{M}_n(\mathbb{R})$ l'espace vectoriel des matrices carrées réelles de taille $n \times n$. 
Pour tout couple de matrices $(A, B) \in (\mathcal{M}_n(\mathbb{R}))^2$, on pose :
$$\langle A, B \rangle = \text{tr}(A^T B)$$
où $\text{tr}(M)$ désigne la trace d'une matrice carrée $M$ (la somme de ses coefficients diagonaux).

On admet que $\langle \cdot, \cdot \rangle$ définit un produit scalaire sur $\mathcal{M}_n(\mathbb{R})$, et on note $\|\cdot\|$ la norme euclidienne associée. On s'intéresse dans ce problème à des propriétés géométriques de sous-espaces de $\mathcal{M}_n(\mathbb{R})$ et à des problèmes de minimisation de distance.

---

## 2. Questions

1. **Vérification de la structure euclidienne :** 
   Montrer que pour tout $(A, B) \in (\mathcal{M}_n(\mathbb{R}))^2$, on a $\langle A, B \rangle = \sum_{i=1}^n \sum_{j=1}^n a_{i,j} b_{i,j}$ (où $A = (a_{i,j})$ et $B = (b_{i,j})$). En déduire explicitement l'expression de la norme $\|A\|$.

2. **Orthogonalité et sous-espaces :** 
   On note $\mathcal{S}_n(\mathbb{R})$ le sous-espace vectoriel des matrices symétriques de $\mathcal{M}_n(\mathbb{R})$ et $\mathcal{A}_n(\mathbb{R})$ celui des matrices anti-symétriques (telles que $A^T = -A$).
   a. Montrer que $\mathcal{S}_n(\mathbb{R})$ et $\mathcal{A}_n(\mathbb{R})$ sont supplémentaires orthographiques (c'est-à-dire orthogonaux et de somme directe égale à $\mathcal{M}_n(\mathbb{R})$).
   b. Quelle est la dimension de $\mathcal{S}_n(\mathbb{R})$ et celle de $\mathcal{A}_n(\mathbb{R})$ ?

3. **Projection et distance minimale :** 
   Soit $J$ la matrice de $\mathcal{M}_n(\mathbb{R})$ dont tous les coefficients sont égaux à $1$.
   a. Calculer la norme $\|J\|$.
   b. Déterminer la distance de la matrice $J$ au sous-espace $\mathcal{A}_n(\mathbb{R})$.

4. **Analyse critique et limites du modèle :**
   Dans le cadre de l'optimisation sous contrainte matricielle, discuter brièvement des limites de l'utilisation de la norme de Frobenius ($\|\cdot\|$) dans les grands systèmes de données (Big Data) où $n \ge 10^5$.

---

## 3. Pistes et Indications

* **Q1 :** Exprimez le terme général du produit matriciel $A^T B$ en fonction des coefficients de $A$ et de $B$ avant d'appliquer l'opérateur trace.
* **Q2 :** Pour l'orthogonalité, calculez $\langle S, A \rangle$ pour $S \in \mathcal{S}_n(\mathbb{R})$ et $A \in \mathcal{A}_n(\mathbb{R})$ en utilisant les propriétés de la trace ($\text{tr}(M) = \text{tr}(M^T)$).
* **Q3 :** La distance d'un vecteur à un sous-espace vectoriel s'obtient via la norme du vecteur projeté orthogonalement sur le s.e.v. supplémentaire, ou en utilisant le projecteur orthogonal. Décomposez $J$ en $J = S + A$ avec $S \in \mathcal{S}_n(\mathbb{R})$ et $A \in \mathcal{A}_n(\mathbb{R})$.
* **Q4 :** Pensez à la complexité algorithmique du calcul de la trace et des opérations matricielles ensemblistes lorsque la dimension explose.

---

## 4. Corrigé pas à pas

### Corrigé de la Question 1
Soient $A = (a_{i,j})$ et $B = (b_{i,j})$ deux matrices de $\mathcal{M}_n(\mathbb{R})$. 
Le coefficient $(i,j)$ de la matrice $A^T B$ est donné par le produit scalaire de la $i$-ème colonne de $A^T$ (donc la $i$-ème ligne de $A$) par la $j$-ème colonne de $B$ :
$$(A^T B)_{i,j} = \sum_{k=1}^n (A^T)_{i,k} B_{k,j} = \sum_{k=1}^n a_{k,i} b_{k,j}$$
La trace de $A^T B$ est la somme de ses éléments diagonaux :
$$\langle A, B \rangle = \text{tr}(A^T B) = \sum_{i=1}^n (A^T B)_{i,i} = \sum_{i=1}^n \sum_{k=1}^n a_{k,i} b_{k,i}$$
En intervertissant les rôles ou par simple sommation, on obtient bien :
$$\langle A, B \rangle = \sum_{i=1}^n \sum_{j=1}^n a_{i,j} b_{i,j}$$
La norme associée (dite norme de Frobenius) est donc :
$$\|A\| = \sqrt{\langle A, A \rangle} = \sqrt{\sum_{i=1}^n \sum_{j=1}^n a_{i,j}^2}$$

### Corrigé de la Question 2
a. Soit $S \in \mathcal{S}_n(\mathbb{R})$ et $A \in \mathcal{A}_n(\mathbb{R})$. Calculons leur produit scalaire :
$$\langle S, A \rangle = \text{tr}(S^T A) = \text{tr}(-S A)$$
(car $S^T = S$ et $A^T = -A$). 
Or, par circularité de la trace ($\text{tr}(XY) = \text{tr}(YX)$), on a :
$$\text{tr}(SA) = \text{tr}(AS)$$
De plus, en utilisant la transposition : $\text{tr}(SA) = \text{tr}((SA)^T) = \text{tr}(A^T S^T) = \text{tr}(-A S) = -\text{tr}(AS) = -\text{tr}(SA)$.
Ainsi, $\langle S, A \rangle = -\langle S, A \rangle$, ce qui implique $\langle S, A \rangle = 0$. Les sous-espaces sont orthogonaux.
De plus, toute matrice $M$ se décompose de manière unique ainsi :
$$M = \underbrace{\frac{1}{2}(M + M^T)}_{\in \mathcal{S}_n(\mathbb{R})} + \underbrace{\frac{1}{2}(M - M^T)}_{\in \mathcal{A}_n(\mathbb{R})}$$
Donc $\mathcal{M}_n(\mathbb{R}) = \mathcal{S}_n(\mathbb{R}) \oplus \mathcal{A}_n(\mathbb{R})$. Ce sont des suppléments orthogonaux.

b. $\mathcal{S}_n(\mathbb{R})$ est défini par l'égalité de $n(n-1)/2$ coefficients hors diagonale symétriques, donc sa dimension est :
$$\dim(\mathcal{S}_n(\mathbb{R})) = n + \frac{n(n-1)}{2} = \frac{n(n+1)}{2}$$
$\mathcal{A}_n(\mathbb{R})$ a ses coefficients diagonaux nuls et $n(n-1)/2$ coefficients libres anti-symétriques, d'où :
$$\dim(\mathcal{A}_n(\mathbb{R})) = \frac{n(n-1)}{2}$$
On vérifie bien que $\frac{n(n+1)}{2} + \frac{n(n-1)}{2} = n^2 = \dim(\mathcal{M}_n(\mathbb{R}))$.

### Corrigé de la Question 3
a. La matrice $J$ n'a que des coefficients égaux à $1$. D'après la formule de la norme établie à la question 1 :
$$\|J\| = \sqrt{\sum_{i=1}^n \sum_{j=1}^n 1^2} = \sqrt{n \times n \times 1} = \sqrt{n^2} = n$$

b. La distance d'une matrice $M$ à un sous-espace vectoriel $F$ est la norme de sa composante dans le sous-espace orthogonal $F^\perp$. 
Ici, on cherche la distance de $J$ à $\mathcal{A}_n(\mathbb{R})$. Son espace orthogonal est $\mathcal{A}_n(\mathbb{R})^\perp = \mathcal{S}_n(\mathbb{R})$.
La projection orthogonale de $J$ sur $\mathcal{A}_n(\mathbb{R})$ est sa composante anti-symétrique $A_J$ :
$$A_J = \frac{1}{2}(J - J^T)$$
Puisque $J$ est symétrique ($J = J^T$), on a $A_J = 0$. 
La matrice $J$ est donc déjà élément de $\mathcal{S}_n(\mathbb{R})$, ce qui signifie qu'elle est orthogonale à $\mathcal{A}_n(\mathbb{R})$. 
Par conséquent, la distance de $J$ à $\mathcal{A}_n(\mathbb{R})$ est simplement la norme de sa projection sur $\mathcal{S}_n(\mathbb{R})$, c'est-à-dire $\|J\| = n$. *(Autre méthode : la distance de $J$ à $\mathcal{A}_n(\mathbb{R})$ est la norme de la partie symétrique de $J$, qui est $J$ lui-même, soit $n$)*.

### Corrigé de la Question 4 (Analyse critique)
L'utilisation de la norme de Frobenius $\text{tr}(A^T B)$ présente un attrait théorique puissant car elle confère à l'espace des matrices une structure hilbertienne canonique (isomorphe à $\mathbb{R}^{n^2}$). Néanmoins, ses limites pratiques apparaissent clairement dans le cadre numérique à grande échelle ($n \ge 10^5$) :
1. **Complexité spatiale et temporelle :** Le stockage d'une matrice dense de taille $10^5 \times 10^5$ requiert $10^{10}$ nombres réels, soit de l'ordre de $80 \text{ Go}$ de mémoire vive rien que pour une matrice. Le calcul de la trace ou des produits scalaires demande une complexité en $\mathcal{O}(n^2)$ à $\mathcal{O}(n^3)$, ce qui sature rapidement les architectures de calcul usuelles.
2. **Ignorance de la structure creuse (*sparsity*) :** Dans de nombreuses applications industrielles ou physiques, les matrices sont creuses (contenant une majorité de zéros). La norme de Frobenius traite tous les coefficients avec la même pondération algébrique sans exploiter cette sparsité, contrairement aux méthodes fondées sur les graphes ou les opérateurs creux itératifs.