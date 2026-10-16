---
title: 'Exercice 2 : Calcul de déterminants'
description: 'Problème d entraînement type concours.'
---

# Problème Guidé : Étude et calcul de déterminants paramétriques et structurés

*Ce problème aborde des techniques classiques de calcul de déterminants en CPGE (filière PCSI) : utilisation de relations de récurrence, opérations élémentaires sur les lignes et les colonnes, et factorisation de polynômes.*

---

## Préambule et Partie I : Un déterminant tridiagonal classique

On considère, pour tout entier $n \ge 1$, la matrice $A_n \in \mathcal{M}_n(\mathbb{R})$ définie par :
$$A_n = \begin{pmatrix} 
2 & 1 & 0 & \dots & 0 \\
1 & 2 & 1 & \ddots & \vdots \\
0 & 1 & \ddots & \ddots & 0 \\
\vdots & \ddots & \ddots & 2 & 1 \\
0 & \dots & 0 & 1 & 2 
\end{pmatrix}$$
On note $D_n = \det(A_n)$ le déterminant de $A_n$. Par convention, on pose $D_0 = 1$.

### Question 1
Calculer explicitement $D_1$, $D_2$ et $D_3$.

#### Corrigé
*   Pour $n=1$, $A_1 = (2)$, donc $D_1 = 2$.
*   Pour $n=2$, $A_2 = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$, donc $D_2 = 2 \times 2 - 1 \times 1 = 3$.
*   Pour $n=3$, $A_3 = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix}$. En développant suivant la première ligne :
    $$D_3 = 2 \det\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} - 1 \det\begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix} = 2(3) - 1(2) = 4.$$

---

### Question 2
Établir une relation de récurrence entre $D_n$, $D_{n-1}$ et $D_{n-2}$ pour tout $n \ge 3$.

#### Corrigé
Soit $n \ge 3$. Développons le déterminant $D_n$ suivant la première colonne. La matrice $A_n$ s'écrit :
$$A_n = \begin{pmatrix} 
2 & 1 & 0 & \dots & 0 \\
1 & & & & \\
0 & & A_{n-1} & & \\
\vdots & & & & \\
0 & & & & 
\end{pmatrix}$$
En développant par rapport à la première colonne, on obtient :
$$D_n = 2 \det(A_{n-1}) - 1 \times \det(B)$$
où $B$ est la matrice obtenue en supprimant la première colonne et la deuxième ligne de $A_n$. La matrice $B$ a pour première colonne $\begin{pmatrix} 1 & 0 & \dots & 0 \end{pmatrix}^T$ et pour sous-matrice principale $A_{n-2}$. En développant $B$ par rapport à sa première colonne, on obtient $\det(B) = 1 \times D_{n-2}$.

Ainsi, on obtient la relation de récurrence linéaire d'ordre 2 :
$$\forall n \ge 3, \quad D_n = 2D_{n-1} - D_{n-2}$$

---

### Question 3
Résoudre cette relation de récurrence et en déduire l'expression explicite de $D_n$ en fonction de $n$.

#### Corrigé
L'équation caractéristique associée à la récurrence $D_n - 2D_{n-1} + D_{n-2} = 0$ est :
$$r^2 - 2r + 1 = 0 \iff (r-1)^2 = 0$$
L'équation possède une racine double $r = 1$. La solution générale est donc de la forme :
$$D_n = (An + B) \times 1^n = An + B$$
où $A$ et $B$ sont des constantes réelles déterminées par les conditions initiales :
*   Pour $n=1$ : $A(1) + B = 2 \implies A + B = 2$
*   Pour $n=2$ : $A(2) + B = 3 \implies 2A + B = 3$

En soustrayant les deux lignes, on trouve $A = 1$, puis $B = 1$. 
Finalement, pour tout $n \ge 1$ :
$$D_n = n + 1$$
*(La formule reste vraie pour $n=0$ car $D_0 = 1 = 0+1$.)*

---

## Partie II : Un déterminant circulant ou à paramètres

On considère la matrice $J_n \in \mathcal{M}_n(\mathbb{R})$ (pour $n \ge 2$) dont tous les coefficients valent $1$, et soit $M_n(x) = xI_n - J_n$, où $x \in \mathbb{R}$ et $I_n$ est la matrice identité. 
On souhaite calculer $P_n(x) = \det(M_n(x))$.

### Question 4
Écrire explicitement la matrice $M_n(x)$ et effectuer l'opération sur les colonnes $\text{Col}_j \leftarrow \text{Col}_j - \text{Col}_1$ pour $j \in \{2, \dots, n\}$.

#### Corrigé
La matrice $M_n(x)$ s'écrit :
$$M_n(x) = \begin{pmatrix} 
x-1 & -1 & -1 & \dots & -1 \\
-1 & x-1 & -1 & \dots & -1 \\
-1 & -1 & x-1 & \ddots & \vdots \\
\vdots & \vdots & \ddots & \ddots & -1 \\
-1 & -1 & \dots & -1 & x-1 
\end{pmatrix}$$
(Attention aux signes : $M_n(x) = xI_n - J_n$, donc les coefficients diagonaux sont $x-1$ et les autres sont $-1$).

En effectuant l'opération $\text{Col}_j \leftarrow \text{Col}_j - \text{Col}_1$ pour chaque $j$ allant de $2$ à $n$, les termes $-1$ de la première ligne (sauf le premier) s'annulent, et sur la diagonale, on obtient $(x-1) - (-1) = x$.
Le déterminant ne change pas :
$$P_n(x) = \det \begin{pmatrix} 
x-1 & -1 & -1 & \dots & -1 \\
-1 & x & 0 & \dots & 0 \\
-1 & 0 & x & \ddots & \vdots \\
\vdots & \vdots & \ddots & \ddots & 0 \\
-1 & 0 & \dots & 0 & x 
\end{pmatrix}$$

---

### Question 5
En effectuant ensuite l'opération sur les lignes ou en développant, calculer $P_n(x)$.

#### Corrigé
À partir de la matrice précédente, on peut ajouter toutes les lignes de $2$ à $n$ à la première ligne : $\text{L}_1 \leftarrow \sum_{i=1}^n \text{L}_i$.
Le premier terme de la ligne 1 devient : $(x-1) - (n-1) = x - n$.
Tous les autres termes de la première ligne deviennent $0$, car dans chaque colonne $j$ (pour $j \ge 2$), on a un élément $-1$ sur la première ligne et $x$ sur la $j$-ième ligne, mais attention : la somme des lignes donne $(x-1) + (0) + \dots + (-1)[\text{provenant de la ligne } j] \dots$ 
Procédons plus simplement en développant par rapport à la dernière colonne, ou en utilisant les propriétés de multilinéarité.

*Méthode alternative plus rapide :* 
Ajoutons d'abord toutes les colonnes à la première colonne : $\text{Col}_1 \leftarrow \sum_{j=1}^n \text{Col}_j$.
Le premier terme devient $x - n$, et les autres termes de la première colonne deviennent aussi $x - n$.
On peut alors factoriser $x - n$ :
$$P_n(x) = (x-n) \det \begin{pmatrix} 
1 & -1 & -1 & \dots & -1 \\
1 & x-1 & -1 & \dots & -1 \\
1 & -1 & x-1 & \ddots & \vdots \\
\vdots & \vdots & \ddots & \ddots & -1 \\
1 & -1 & \dots & -1 & x-1 
\end{pmatrix}$$
Puis, on soustrait la première ligne à toutes les autres lignes ($\text{L}_i \leftarrow \text{L}_i - \text{L}_1$ pour $i \ge 2$) :
$$P_n(x) = (x-n) \det \begin{pmatrix} 
1 & -1 & -1 & \dots & -1 \\
0 & x & 0 & \dots & 0 \\
0 & 0 & x & \ddots & \vdots \\
\vdots & \vdots & \ddots & \ddots & 0 \\
0 & 0 & \dots & 0 & x 
\end{pmatrix}$$
La matrice obtenue est triangulaire supérieure. Son déterminant est le produit de ses éléments diagonaux :
$$P_n(x) = (x-n) \times 1 \times \underbrace{x \times x \times \dots \times x}_{n-1 \text{ fois}}$$
Finalement :
$$P_n(x) = x^{n-1}(x-n)$$

---

## Analyse critique et synthèse de l'examinateur

> **Regard du jury :** 
> 1. Dans la **Partie I**, l'utilisation d'une relation de récurrence linéaire d'ordre 2 est un grand classique. Les candidats oublient souvent de vérifier la validité de la formule pour les premiers rangs ou commettent des erreurs de calcul sur les conditions initiales. Ici, $D_0 = 1$ était une aide précieuse.
> 2. Dans la **Partie II**, la technique d'addition des colonnes (ou des lignes) pour faire apparaître un facteur commun $(x-n)$ est une astuce fondamentale. Elle évite des développements horribles. 
> 3. *Interprétation spectrale :* Le résultat $P_n(x) = x^{n-1}(x-n)$ montre immédiatement que $0$ est valeur propre de $J_n$ de multiplicité $n-1$, et que $n$ est valeur propre simple de $J_n$. C'est un résultat fondamental d'algèbre linéaire que tout bon candidat de PCSI doit relier au calcul de déterminant.