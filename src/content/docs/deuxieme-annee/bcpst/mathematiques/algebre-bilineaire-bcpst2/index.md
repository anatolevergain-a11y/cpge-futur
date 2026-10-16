---
title: 'Cours : Algèbre bilinéaire et géométrie euclidienne'
description: 'Synthese officielle du cours et demonstrations pour CPGE BCPST.'
---

## 📌 1. Definitions & Cadre d'etude

Soit $E$ un $\mathbb{R}$-espace vectoriel de dimension finie. La geometrie euclidienne repose sur l'introduction d'un produit scalaire, permettant de definir les notions d'orthogonalite, de norme et de distance.

*   **Forme bilineaire :** 
    Une application $f : E \times E \to \mathbb{R}$ est dite bilineaire si elle est lineaire par rapport a chacune de ses variables.
*   **Forme bilineaire symetrique :** 
    $f$ est symetrique si pour tout $(x, y) \in E^2$, $f(x, y) = f(y, x)$.
*   **Forme bilineaire symetrique positive :** 
    Pour tout $x \in E$, $f(x, x) \ge 0$.
*   **Produit scalaire :** 
    C'est une forme bilineaire symetrique, positive et **definie**, c'est-a-dire :
    $$\forall x \in E, \quad (f(x, x) = 0 \implies x = 0_{E})$$
    Un espace vectoriel muni d'un tel produit scalaire (note $\langle \cdot, \cdot \rangle$) est un **espace euclidien**.
*   **Norme euclidienne associee :** 
    Pour tout $x \in E$, $\|x\| = \sqrt{\langle x, x \rangle}$.
*   **Inegalite de Cauchy-Schwarz :** 
    $$\forall (x, y) \in E^2, \quad |\langle x, y \rangle| \le \|x\| \|y\|$$
    avec egalite si et seulement si $x$ et $y$ sont colineaires.
*   **Orthogonalite :** 
    Deux vecteurs $x$ et $y$ de $E$ sont orthogonaus (note $x \perp y$) si $\langle x, y \rangle = 0$. Le theoreme de Pythagore s'applique alors : $\|x + y\|^2 = \|x\|^2 + \|y\|^2$.
*   **Adjoint d'un endomorphisme :** 
    Soit $u \in \mathcal{L}(E)$. Il existe un unique endomorphisme, note $u^* \in \mathcal{L}(E)$, appele adjoint de $u$, tel que :
    $$\forall (x, y) \in E^2, \quad \langle u(x), y \rangle = \langle x, u^*(y) \rangle$$
*   **Endomorphismes symetriques (ou auto-adjoints) :** 
    Un endomorphisme $u \in \mathcal{L}(E)$ est dit symetrique si $u = u^*$, soit :
    $$\forall (x, y) \in E^2, \quad \langle u(x), y \rangle = \langle x, u(y) \rangle$$

---

## 📐 2. Theoremes fondamentaux & Demonstrations cles

### Theoreme 1 : Reduction des endomorphismes symetriques (Theoreme spectral)
Tout endomorphisme symetrique $u \in \mathcal{L}(E)$ est diagonalisable dans une base orthonormee (BON) de $E$.

> **Demonstration (par recurrence sur la dimension $n = \dim(E)$) :**
> 
> *   *Initialisation ($n = 1$) :* Tout endomorphisme d'un espace de dimension 1 est homothetique, donc represente par une matrice $1 \times 1$ dans n'importe quelle BON, le resultat est immediat.
> *   *Heredite :* Supposons le resultat vrai pour tout espace euclidien de dimension $n-1$. Soit $E$ de dimension $n$ et $u \in \mathcal{L}(E)$ symetrique. 
>     Considerons la fonction $f : x \mapsto \langle u(x), x \rangle$ definie sur la sphere unite $S = \{x \in E \mid \|x\| = 1\}$. 
>     Puisque $S$ est compacte et $f$ continue, $f$ atteint son maximum en un vecteur $e_1 \in S$. Par le calcul differential (multiplicateurs de Lagrange), $e_1$ est vecteur propre associe a une valeur propre reelle $\lambda_1$.
>     Posons $F = \text{Vect}(e_1)^\perp$. Comme $u$ est symetrique, $F$ est stable par $u$ : 
>     $$\forall x \in F, \quad \langle u(x), e_1 \rangle = \langle x, u(e_1) \rangle = \langle x, \lambda_1 e_1 \rangle = \lambda_1 \langle x, e_1 \rangle = 0$$
>     Donc $u(x) \in F$. L'endomorphisme induit $u_F : F \to F$ est symetrique et $\dim(F) = n-1$. Par hypothese de recurrence, il existe une BON $(e_2, \dots, e_n)$ de $F$ formee de vecteurs propres de $u_F$.
>     Finalement, $(e_1, e_2, \dots, e_n)$ est une BON de $E$ formee de vecteurs propres de $u$. $\blacksquare$

### Theoreme 2 : Orthogonalisation de Gram-Schmidt
Toute base $(e_1, \dots, e_n)$ de $E$ peut etre transformee en une base orthonormee $(u_1, \dots, u_n)$ par l'algebre lineaire, telle que pour tout $k \in \{1, \dots, n\}$, $\text{Vect}(e_1, \dots, e_k) = \text{Vect}(u_1, \dots, u_k)$.

---

## 💡 3. Methodes de calcul & Algorithmes

1.  **Reduction d'une matrice symetrique reelle :**
    Soit $A \in \mathcal{M}_{n}(\mathbb{R})$ telle que $A = A^\top$.
    *   Determiner le polynome caracteristique $\chi_A(\lambda) = \det(\lambda I_n - A)$.
    *   Trouver les valeurs propres reelles (elles le sont toutes d'apres le theoreme spectral).
    *   Determiner les sous-espaces propres associes $E_\lambda = \ker(\lambda I_n - A)$.
    *   Appliquer l'algorithme de Gram-Schmidt dans chaque $E_\lambda$ si $\dim(E_\lambda) \ge 2$ pour obtenir des BON de chaque sous-espace propre.
    *   Par orthogonalite des sous-espaces propres d'un endomorphisme symetrique, la reunion de ces BON forme une BON de $E$. La matrice de passage $P$ est alors **orthogonale** ($P^{-1} = P^\top$).

2.  **Reconnaissance et reduction d'une forme quadra-tique :**
    Soit $q : E \to \mathbb{R}$ une forme quadratique associee a une matrice symetrique $A \in \mathcal{M}_{n}(\mathbb{R})$.
    *   **Methode de Gauss :** Decomposer $q$ en une somme de carres lineairement independants pour obtenir la signature $(p, q)$ de $q$.
    *   **Methode de reduction orthogonale :** Diagonaliser la matrice $A$ dans une BON pour obtenir $q(x) = \sum_{i=1}^n \lambda_i X_i^2$ dans de nouvelles coordonnees.

---

## ⚠️ 4. Pieges classiques aux Concours

*   **Attention aux endomorphismes non symetriques :** Un endomorphisme quelconque peut tres bien n'avoir aucune valeur propre reelle (ex: rotation d'angle $\pi/2$ dans le plan). N'appliquez **jamais** le theoreme spectral a un endomorphisme qui n'est pas auto-adjoint !
*   **Confusion entre matrice orthodiagonalisable et matrice orthogonale :** 
    *   Une matrice $A \in \mathcal{M}_{n}(\mathbb{R})$ est orthogonale si $A^\top A = I_n$.
    *   Une matrice est orthodiagonalisable si elle est symetrique ($A = A^\top$). Ne dites pas qu'une matrice orthogonale est symetrique.
*   **Oubli de la normalisation dans Gram-Schmidt :** 
    L'etape de *orthogonalisation* donne des vecteurs orthogonaux $v_k$, mais il ne faut **pas oublier** l'etape de *normalisation* ($u_k = \frac{v_k}{\|v_k\|}$) si l'on souhaite une base *orthonormee*.
*   **Positivite stricte vs positivite large :** 
    Une matrice symetrique dont les valeurs propres sont toutes $\ge 0$ est positive. Si elles sont toutes $> 0$, elle est definie positive. Veillez a bien verifier la stricte positivite lors de l'etude de produits scalaires ou de normes.