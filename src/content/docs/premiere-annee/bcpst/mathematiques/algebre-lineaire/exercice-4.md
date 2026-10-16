---
title: 'Problème guidé : Calcul matriciel et puissances de matrices'
description: 'Problème d entraînement type concours BCPST - Algèbre linéaire.'
---

# Problème guidé : Étude d'une matrice de transition et puissances

*En tant qu'examinateur en CPGE BCPST, je vous propose ce problème guidé conçu pour tester votre maîtrise du calcul matriciel, de la diagonalisation et de son application au calcul des puissances $n$-ièmes, des compétences incontournables aux concours.*

---

## Préambule et notations

Soit $A$ la matrice carrée d'ordre 3 définie par :
$$A = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}$$

On note $I_3$ la matrice identité d'ordre 3 et $J$ la matrice carrée d'ordre 3 dont tous les coefficients valent 1 :
$$J = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}$$

---

## Partie I : Relations algébriques fondamentales
Objectif: ** Exprimer $A$ en fonction de matrices plus simples pour faciliter les calculs ultérieurs.

1. **Calculer** la matrice $J^2$ et exprimer le résultat en fonction de $J$.
2. **Établir** une relation simple entre la matrice $A$, la matrice identité $I_3$ et la matrice $J$.
3. **En déduire** que $A$ et $J$ commutent (c'est-à-dire que $AJ = JA$).

---

## Partie II : Diagonalisation de la matrice $J$
Objectif: ** Déterminer les valeurs propres et les sous-espaces propres de $J$.

1. Quel est le rang de la matrice $J$ ? **En déduire** sans calcul la dimension du sous-espace propre associé à la valeur propre $0$.
2. **Déterminer** les valeurs propres de $J$ en étudiant son action sur les vecteurs de $\mathcal{M}_{3,1}(\mathbb{R})$.
3. **Justifier** que $J$ est diagonalisable et écrire une matrice diagonale $D_J$ semblable à $J$.

---

## Partie III : Diagonalisation de la matrice $A$ et puissances
Objectif: ** Exploiter la relation entre $A$ et $J$ pour diagonaliser $A$, puis calculer $A^n$ pour tout $n \in \mathbb{N}$.

1. Soit $\lambda$ une valeur propre de $J$ et $X$ un vecteur propre associé. **Montrer** que $X$ est également vecteur propre de $A$ et exprimer la valeur propre correspondante de $A$ en fonction de $\lambda$.
2. **En déduire** les valeurs propres de $A$. La matrice $A$ est-elle diagonalisable ? Justifier.
3. **Déterminer** une matrice inversible $P$ et une matrice diagonale $D$ telles que $A = PDP^{-1}$. *(On pourra s'aider des vecteurs propres de $J$).*
4. **Calculer** la matrice $A^n$ pour tout entier naturel $n$.

---

## Partie IV : Analyse critique et recul sur les résultats

Cette dernière partie fait office d'évaluation réflexive, essentielle à l'oral des concours BCPST.

1. Vérifiez votre formule de $A^n$ pour $n=0$ et $n=1$.
2. Soit $\mathcal{C}$ un vecteur colonne initial $\begin{pmatrix} x_0 \\ y_0 \\ z_0 \end{pmatrix}$. Que peut-on dire du comportement asymptotique du vecteur $\mathcal{C}_n = A^n \mathcal{C}$ lorsque $n$ tend vers $+\infty$ ? *(On veillera à discuter selon la nature de la somme des composantes initiales).*

---
---

# CORRIGÉ ET COMMENTAIRES DE L'EXAMINATEUR

## Partie I : Relations algébriques fondamentales

1. **Calcul de $J^2$ :**
   $$J^2 = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix} = \begin{pmatrix} 3 & 3 & 3 \\ 3 & 3 & 3 \\ 3 & 3 & 3 \times 1 \end{pmatrix} = 3J$$
Commentaire: * Ce type de matrice (coefficients constants) vérifie souvent une relation de récurrence simple $J^k = 3^{k-1}J$.

2. **Relation entre $A$, $I_3$ et $J$ :**
   On observe que les éléments diagonaux de $A$ sont nuls, alors que ceux de $J$ valent 1. Les autres coefficients de $A$ et $J$ sont tous égaux à 1.
   Par conséquent :
   $$A = J - I_3$$

3. **Commutativité :**
   Puisque $A = J - I_3$, calculons le produit avec $J$ :
   $$AJ = (J - I_3)J = J^2 - I_3J = J^2 - J$$
   De même :
   $$JA = J(J - I_3) = J^2 - JI_3 = J^2 - J$$
   Ainsi, $AJ = JA$.
   *Astuce de colleur :* Toute matrice commute avec l'identité et avec ses propres polynômes. Ici, $A$ est un polynôme en $J$ (de degré 1), donc $A$ et $J$ commutent de manière évidente, ce qui nous autorisera à utiliser la formule du binôme de Newton par la suite.

---

## Partie II : Diagonalisation de la matrice $J$

1. **Rang et dimension du noyau :**
   Toutes les lignes de $J$ sont égales. Le rang de $J$ est donc égal à $1$.
   D'après le théorème du rang (ou en considérant l'application linéaire associée), la dimension du noyau de $J$ (qui est le sous-espace propre associé à la valeur propre $\lambda = 0$) est :
   $$\dim(\ker(J)) = 3 - \text{rg}(J) = 3 - 1 = 2$$

2. **Valeurs propres de $J$ :**
   * Soit $X = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$. On a $JX = \begin{pmatrix} 3 \\ 3 \\ 3 \end{pmatrix} = 3X$. Donc $3$ est valeur propre de $J$ associée au vecteur propre $X$.
   * Soit $Y_1 = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}$ et $Y_2 = \begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}$. La somme des coefficients de chaque ligne de $J$ valant 3, on vérifie aisément que $JY_1 = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$ et $JY_2 = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$.
   * $Y_1$ et $Y_2$ sont deux vecteurs indépendants appartenant à $\ker(J)$, ils forment une base de ce sous-espace propre de dimension 2.
   * Les valeurs propres de $J$ sont donc $3$ (de multiplicité 1) et $0$ (de multiplicité 2).

3. **Diagonalisabilité de $J$ :**
   La somme des dimensions des sous-espaces propres est $1 + 2 = 3$, ce qui est égal à l'ordre de la matrice. De plus, la matrice est symétrique réelle (ce qui garantit aussi le résultat par le théorème spectral).
   $J$ est donc diagonalisable, et semblable à :
   $$D_J = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

---

## Partie III : Diagonalisation de la matrice $A$ et puissances

1. **Lien entre vecteurs propres de $J$ et de $A$ :**
   Soit $X$ un vecteur propre de $J$ associé à la valeur propre $\lambda$, de sorte que $JX = \lambda X$.
   On calcule $AX$ en utilisant la relation $A = J - I_3$ :
   $$AX = (J - I_3)X = JX - I_3X = \lambda X - 1 \cdot X = (\lambda - 1)X$$
   Ainsi, $X$ est un vecteur propre de $A$ associé à la valeur propre $\lambda - 1$.

2. **Valeurs propres de $A$ :**
   En appliquant le résultat précédent aux valeurs propres de $J$ :
   * Pour $\lambda = 3$ (valeur propre de $J$), on obtient la valeur propre $3 - 1 = 2$ pour $A$.
   * Pour $\lambda = 0$ (valeur propre de $J$), on obtient la valeur propre $0 - 1 = -1$ pour $A$.
   Les valeurs propres de $A$ sont donc $2$ (simple) et $-1$ (double).
   Puisque la somme des dimensions des sous-espaces propres est $1 + 2 = 3$, **$A$ est diagonalisable**.

3. **Matrice de passage $P$ :**
   On reprend les vecteurs propres trouvés à la partie II pour $J$ (qui sont aussi ceux de $A$) :
   * Pour $\lambda_A = 2$ : $X_1 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$
   * Pour $\lambda_A = -1$ : $X_2 = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}$ et $X_3 = \begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}$

   On forme la matrice de passage $P$ :
   $$P = \begin{pmatrix} 1 & 1 & 0 \\ 1 & -1 & 1 \\ 1 & 0 & -1 \end{pmatrix}$$
   Et la matrice diagonale associée $D$ :
   $$D = \begin{pmatrix} 2 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & -1 \end{pmatrix}$$
   On a bien $A = PDP^{-1}$. *(Le calcul de $P^{-1}$ est admis ou mené par pivot de Gauss si demandé explicitement).*

4. **Calcul de $A^n$ :**
   Par récurrence immédiate, $A^n = PD^n P^{-1}$.
   Or, $D^n = \begin{pmatrix} 2^n & 0 & 0 \\ 0 & (-1)^n & 0 \\ 0 & 0 & (-1)^n \end{pmatrix}$.
   *Autre méthode élégante (hors diagonalisation) :* 
   Puisque $A = J - I_3$ et que $J$ et $I_3$ commutent, on peut utiliser la formule du binôme de Newton :
   $$A^n = (J - I_3)^n = \sum_{k=0}^{n} \binom{n}{k} J^k (-I_3)^{n-k}$$
   En séparant le terme pour $k=0$ et en remarquant que $J^k = 3^{k-1}J$ pour $k \ge 1$, on parvient au même résultat final.

---

## Partie IV : Analyse critique et recul sur les résultats

1. **Vérification pour $n=0$ et $n=1$ :**
   * Pour $n=0$ : $A^0 = I_3$, ce qui est cohérent.
   * Pour $n=1$ : $A^1 = A$, ce qui est également vérifié par construction.

2. **Comportement asymptotique de $\mathcal{C}_n = A^n \mathcal{C}$ :**
   Le terme dominant dans $D^n$ est $2^n$ (porté par le vecteur propre $X_1 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$).
   Plus précisément, tout vecteur initial $\mathcal{C} = \begin{pmatrix} x_0 \\ y_0 \\ z_0 \end{pmatrix}$ peut se décomposer dans la base des vecteurs propres :
   $$\mathcal{C} = \alpha X_1 + \beta X_2 + \gamma X_3$$
   où $\alpha = \frac{x_0 + y_0 + z_0}{3}$ (en projetant sur $X_1$).
   
   * Si la somme des composantes initiales est non nulle ($x_0 + y_0 + z_0 \neq 0$), alors $\alpha \neq 0$ et le terme $\alpha 2^n X_1$ l'emporte. Le vecteur $\mathcal{C}_n$ diverge en norme vers $+\infty$ et devient colinéaire à $X_1 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$.
   * Si la somme des composantes initiales est nulle ($x_0 + y_0 + z_0 = 0$), alors $\alpha = 0$. Le terme en $2^n$ disparaît, et $\mathcal{C}_n = \beta (-1)^n X_2 + \gamma (-1)^n X_3$, ce qui donne une suite bornée (qui oscille entre deux valeurs si $\beta$ ou $\gamma$ ne sont pas nuls).

   *Bilan de l'examinateur :* C'est typiquement le genre de conclusion physique/probabiliste (en lien avec les chaînes de Markov ou les systèmes dynamiques) très apprécié aux concours car il montre que le candidat ne fait pas que du calcul machinal, mais comprend la dynamique sous-jacente du système linéaire.