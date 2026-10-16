---
title: 'Exercice 1 : Calcul matriciel'
description: 'Problème d entraînement type concours.'
---

# Concours CPGE (PTSI) — Mathématiques
## Algèbre linéaire et Géométrie 3D : Calcul matriciel (Corrigé pas à pas)

---

### Introduction de l'examinateur

Ce problème aborde un classique des concours de la filière PTSI : l'étude des puissances d'une matrice carrée d'ordre $3$ à l'aide de polynômes annulateurs et de la formule du binôme de Newton. 

Les compétences évaluées ici sont fondamentales pour la suite de votre cursus :
1. La maîtrise du calcul matriciel et de la manipulation des symboles de sommation.
2. L'exploitation rigoureuse d'une relation de récurrence matricielle.
3. L'inversion de matrices par des méthodes polynomiales.

---

### Énoncé du problème

On considère la matrice $A$ à coefficients réels définie par :
$$A = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$$

On cherche à déterminer l'expression générale de la puissance $A^n$ pour tout entier naturel $n$, puis à en déduire l'inverse de $A$.

---

### Corrigé pas à pas

#### Partie 1 : Décomposition de la matrice et calculs préliminaires

**Question 1.** Écrire la matrice $A$ sous la forme $A = I_3 + N$, où $I_3$ est la matrice identité d'ordre $3$ et $N$ une matrice nilpotente dont on précisera l'ordre (c'est-à-dire le plus petit entier $k$ tel que $N^k = 0$).

*Corrigé :*
On pose :
$$A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} + \begin{pmatrix} 0 & 1 & 1 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} = I_3 + N$$
avec $N = \begin{pmatrix} 0 & 1 & 1 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$.

Calculons les puissances successives de $N$ :
$$N^2 = \begin{pmatrix} 0 & 1 & 1 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 1 & 1 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

Puis :
$$N^3 = N^2 \times N = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 1 & 1 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} = 0_{3,3}$$

La matrice $N$ est donc nilpotente d'ordre $3$.

---

#### Partie 2 : Calcul des puissances de $A$

**Question 2.** Justifier que les matrices $I_3$ et $N$ commutent, puis utiliser la formule du binôme de Newton pour exprimer $A^n$ pour tout $n \in \mathbb{N}$.

*Corrigé :*
La matrice identité $I_3$ commute avec toute matrice carrée du même ordre, en particulier avec $N$, c'est-à-dire que $I_3 N = N I_3 = N$.

Puisque $I_3$ et $N$ commutent, nous pouvons appliquer la formule du binôme de Newton pour tout $n \in \mathbb{N}$ :
$$A^n = (I_3 + N)^n = \sum_{k=0}^{n} \binom{n}{k} I_3^{n-k} N^k = \sum_{k=0}^{n} \binom{n}{k} N^k$$

Puisque $N^k = 0_{3,3}$ pour tout $k \ge 3$, tous les termes de la somme d'indice $k \ge 3$ sont nuls. 
* Cas où $n = 0$ : $A^0 = I_3$ (résultat cohérent).
* Cas où $n = 1$ : $A^1 = \sum_{k=0}^{1} \binom{1}{k} N^k = I_3 + N = A$.
* Cas où $n = 2$ : $A^2 = I_3 + 2N + N^2$.
* Cas où $n \ge 3$ : 
$$A^n = \binom{n}{0} I_3 + \binom{n}{1} N + \binom{n}{2} N^2$$

Explicitons cette expression en remplaçant les coefficients binomiaux pour $n \ge 3$ :
* $\binom{n}{0} = 1$
* $\binom{n}{1} = n$
* $\binom{n}{2} = \frac{n(n-1)}{2}$

Ainsi :
$$A^n = I_3 + n N + \frac{n(n-1)}{2} N^2$$

Vérifions si cette formule reste valable pour $n = 0, 1, 2$ :
* Pour $n=0$ : $I_3 + 0 + 0 = I_3$ (vrai).
* Pour $n=1$ : $I_3 + N + 0 = I_3 + N = A$ (vrai).
* Pour $n=2$ : $I_3 + 2N + N^2$ (vrai).

La formule est donc valable pour tout $n \in \mathbb{N}$.

**Question 3.** Expliciter sous forme matricielle les coefficients de $A^n$ pour $n \in \mathbb{N}$.

*Corrigé :*
Calculons explicitement la matrice $A^n$ :
$$A^n = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} + n \begin{pmatrix} 0 & 1 & 1 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} + \frac{n(n-1)}{2} \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

$$A^n = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} + \begin{pmatrix} 0 & n & n \\ 0 & 0 & n \\ 0 & 0 & 0 \end{pmatrix} + \begin{pmatrix} 0 & 0 & \frac{n(n-1)}{2} \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

En sommant terme à terme :
$$A^n = \begin{pmatrix} 1 & n & n + \frac{n(n-1)}{2} \\ 0 & 1 & n \\ 0 & 0 & 1 \end{pmatrix}$$

Simplifions le coefficient de la première ligne, troisième colonne :
$$n + \frac{n^2 - n}{2} = \frac{2n + n^2 - n}{2} = \frac{n^2 + n}{2} = \frac{n(n+1)}{2}$$

Finalement :
$$A^n = \begin{pmatrix} 1 & n & \frac{n(n+1)}{2} \\ 0 & 1 & n \\ 0 & 0 & 1 \end{pmatrix}$$

---

#### Partie 3 : Application à l'inversion de la matrice $A$

**Question 4.** En utilisant la relation $N = A - I_3$ et le fait que $N^3 = 0$, trouver un polynôme $P$ tel que $P(A) = 0$. En déduire que $A$ est inversible et exprimer $A^{-1}$ en fonction de $A$.

*Corrigé :*
Puisque $N = A - I_3$ et que $N^3 = 0_{3,3}$, nous avons immédiatement :
$$(A - I_3)^3 = 0_{3,3}$$

Développons cette expression à l'aide des identités remarquables ou du binôme :
$$A^3 - 3A^2 + 3A - I_3 = 0_{3,3}$$

Le polynôme $P(X) = X^3 - 3X^2 + 3X - 1$ est donc un polynôme annulateur de la matrice $A$.

Pour montrer que $A$ est inversible et calculer son inverse, réécrivons l'égalité précédente en isolant la matrice identité $I_3$ :
$$I_3 = 3A - 3A^2 + A^3$$
$$I_3 = A(3I_3 - 3A + A^2)$$

Cette relation s'écrit sous la forme $A \times B = I_3$ avec $B = 3I_3 - 3A + A^2$. 
Par conséquent, la matrice $A$ est inversible et son inverse est :
$$A^{-1} = A^2 - 3A + 3I_3$$

Vérifions ce résultat à l'aide de notre formule des puissances (avec $n = -1$ ou directement par le calcul polynomial) :
Calculons $A^2$ :
$$A^2 = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{pmatrix}$$

Alors :
$$A^{-1} = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{pmatrix} - 3\begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix} + 3\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

$$A^{-1} = \begin{pmatrix} 1-3+3 & 2-3+0 & 3-3+0 \\ 0 & 1-3+3 & 2-3+0 \\ 0 & 0 & 1-3+3 \end{pmatrix} = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{pmatrix}$$

---

### Analyse critique des résultats

1. **Cohérence dimensionnelle et de type** : Toutes les matrices manipulées sont carrées d'ordre $3$ à coefficients réels, ce qui garantit la compatibilité des opérations (additions et multiplications).
2. **Cas particuliers** : 
   - Pour $n = 0$, la formule générale donne $A^0 = I_3$, ce qui est exact.
   - Pour $n = 1$, $A^1 = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix} = A$, ce qui valide la formule.
3. **Vérification de l'inverse** : On peut tester le résultat en calculant le produit $A \times A^{-1}$ :
   $$\begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & -1 & 0 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & -1+1 & -1+1 \\ 0 & 1 & -1+1 \\ 0 & 0 & 1 \end{pmatrix} = I_3$$
   Le calcul est correct. L'utilisation d'un polynôme annulateur s'avère ici beaucoup plus rapide et élégante qu'un pivot de Gauss pour inverser la matrice.