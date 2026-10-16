---
title: 'Cours : Polynômes, matrices et systèmes'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PTSI.'
---

## 📌 1. Définitions & Cadre d'étude

Le cadre d'etude est le corps des nombres reels $\mathbb{R}$ ou complexes $\mathbb{C}$, note $\mathbb{K}$.

### Polynômes
Un polynome $P$ a coefficients dans $\mathbb{K}$ est une suite finie $(a_0, a_1, \dots, a_n)$ d'elements de $\mathbb{K}$, representee sous la forme :
$$P(X) = \sum_{k=0}^{n} a_k X^k = a_0 + a_1 X + \dots + a_n X^n$$
L'ensemble des polynomes a coefficients dans $\mathbb{K}$ est note $\mathbb{K}[X]$.
- **Degre** : Si $P \neq 0$, il existe un unique $n \in \mathbb{N}$ tel que $a_n \neq \0$ avec $\forall k > n, a_k = 0$. On pose $\deg(P) = n$. Le coefficient $a_n$ est le coefficient dominant.
- **Racine** : Soit $\alpha \in \mathbb{K}$. $\alpha$ est racine de $P$ si et seulement si $P(\alpha) = 0$.

### Matrices
Soit $(n, p) \in (\mathbb{N}^*)^2$. Une matrice $A$ a $n$ lignes et $p$ colonnes a coefficients dans $\mathbb{K}$ est un element de l'ensemble $\mathcal{M}_{n,p}(\mathbb{K})$. Elle s'ecrit :
$$A = \begin{pmatrix} a_{1,1} & a_{1,2} & \cdots & a_{1,p} \\ a_{2,1} & a_{2,2} & \cdots & a_{2,p} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n,1} & a_{n,2} & \cdots & a_{n,p} \end{pmatrix}$$
avec $\forall (i,j) \in \{1, \dots, n\} \times \{1, \dots, p\}, a_{i,j} \in \mathbb{K}$.
- Si $n = p$, la matrice est carree et appartient a $\mathcal{M}_n(\mathbb{K})$. La matrice identite est note $I_n \in \mathcal{M}_n(\mathbb{K})$.

### Systemes lineaires
Un systeme lineaire de $n$ equations a $p$ inconnues (note $\mathcal{S}$) s'ecrit sous forme matricielle :
$$A X = B$$
ou $A \in \mathcal{M}_{n,p}(\mathbb{K})$ est la matrice du systeme, $X \in \mathcal{M}_{p,1}(\mathbb{K})$ le vecteur colonne des inconnues, et $B \in \mathcal{M}_{n,1}(\mathbb{K})$ le second membre.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Theorem : Division euclidienne dans $\mathbb{K}[X]$
Soit $(A, B) \in \mathbb{K}[X]^2$ avec $B \neq 0$. Il existe un unique couple $(Q, R) \in \mathbb{K}[X]^2$ tel que :
$$A = BQ + R \quad \text{et} \quad \deg(R) < \deg(B)$$

### Theorem : Racine et factorisation
Soit $P \in \mathbb{K}[X]$ et $\alpha \in \mathbb{K}$. $\alpha$ est racine de $P$ si et seulement si $(X - \alpha)$ divise $P$ dans $\mathbb{K}[X]$.
Demonstration: *
1. Sens $\Leftarrow$ : Supposons que $(X - \alpha)$ divise $P$. Il existe $Q \in \mathbb{K}[X]$ tel que $P = (X - \alpha)Q$. Alors $n'evaluation en $\alpha$ donne $P(\alpha) = (\alpha - \alpha)Q(\alpha) = 0$. Donc $\alpha$ est racine.
2. Sens $\Rightarrow$ : Supposons que $\alpha$ est racine de $P$. Par division euclidienne de $P$ par $X - \alpha$, il existe $(Q, R) \in \mathbb{K}[X]^2$ tels que :
$$P(X) = (X - \alpha)Q(X) + R(X)$$
avec $\deg(R) < \deg(X - \alpha) = 1$. Par consequent, $R$ est un polynome constant, soit $R(X) = r \in \mathbb{K}$.
En evaluant en $X = \alpha$ :
$$P(\alpha) = (\alpha - \alpha)Q(\alpha) + r \implies 0 = 0 + r \implies r = 0$$
Ainsi, $P(X) = (X - \alpha)Q(X)$, ce qui prouve que $X - \alpha$ divise $P$. $\blacksquare$

### Theorem : Operations elementaires sur les systemes lineaires
Les operations elementaires sur les lignes d'une matrice (ou les equations d'un systeme) ne modifient pas l'ensemble des solutions :
1. L'echange de deux lignes : $L_i \leftrightarrow L_j$
2. La multiplication d'une ligne par un scalaire non nul : $L_i \leftarrow \lambda L_i$ ($\lambda \neq 0$)
3. L'ajout a une ligne d'un multiple d'une autre ligne : $L_i \leftarrow L_i + \lambda L_j$ ($i \neq j$)

---

## 💡 3. Méthodes de calcul & Algorithmes

### Algorithme du pivot de Gauss pour les systemes
L'algorithme de Gauss consiste a transformer la matrice augmentée $\begin{array}{c|c} A & B \end{array}$ en une matrice triangulaire superieure (ou echelonnee) par operations elementaires sur les lignes.

1. **Recherche du pivot** : Selectionner un coefficient non nul sur la colonne courante.
2. **Echelonnement** : Eliminer les coefficients situes sous le pivot en effectuant des operations du type $L_i \leftarrow L_i - \frac{a_{i,k}}{a_{k,k}} L_k$.
3. **Remontee** : Une fois le systeme echelonne de la forme $T X = C$, resoudre de bas en haut pour exprimer les variables principales en fonction des parametres libres.

### Inversion d'une matrice carree par le pivot de Gauss-Jordan
Pour $A \in \mathcal{M}_n(\mathbb{K})$, pour determiner si $A$ est inversible et calculer son inverse $A^{-1} \in \mathcal{M}_n(\mathbb{K})$ :
1. Former la matrice bloquee $\begin{array}{c|c} A & I_n \end{array} \in \mathcal{M}_{n,2n}(\mathbb{K})$.
2. Appliquer les operations elementaires sur les lignes pour transformer le bloc gauche $A$ en $I_n$.
3. Le bloc droit est alors transforme en $A^{-1}$, de sorte que la matrice obtenue est $\begin{array}{c|c} I_n & A^{-1} \end{array}$.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confusion entre polynome et fonction polynomiale** : Ne jamais ecrire "soit le polynome $P(X)$" sans preciser que $P$ est un element de $\mathbb{K}[X]$. $P$ est une expression formelle, $P(x)$ est l'evaluation en une valeur $x$.
2. **Oubli de la condition de non-nullete du pivot** : Lors de la mise en oeuvre du pivot de Gauss avec des parametres, diviser par une expression sans s'assurer qu'elle est non nule conduit a une erreur fatale. Discuter systematiquement suivant les valeurs du parametre.
3. **Inversion abusive de matrices non carrees** : Rappeler qu'une matrice $A \in \mathcal{M}_{n,p}(\mathbb{K})$ n'est inversible **que** si $n = p$ (matrice carree). Pour $n \neq p$, la notion d'inverse n'a pas de sens mathematique.
4. **Erreur de dimension dans les produits matriciels** : Soit $A \in \mathcal{M}_{n,p}(\mathbb{K})$ et $B \in \mathcal{M}_{u,v}(\mathbb{K})$. Le produit $A \times B$ n'a de sens que si $p = u$. Le resultat appartiendra alors a $\mathcal{M}_{n,v}(\mathbb{K})$.