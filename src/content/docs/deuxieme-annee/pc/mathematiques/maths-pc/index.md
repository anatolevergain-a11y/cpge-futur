---
title: 'Cours : Réduction, Séries et Algèbre bilinéaire'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Réduction, Séries et Algèbre bilinéaire
Niveau: ** Mathématiques MP/PC (Deuxième année) - Filière PC  
**Matière :** Mathématiques  

---

## Module 1 : Réduction des endomorphismes et des matrices

### 1. Valeurs propres, vecteurs propres, sous-espaces propres
Soit $E$ un $\mathbb{K}$-espace vectoriel ($\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$) et $f \in \mathcal{L}(E)$.

*   **Définition :** Un scalaire $\lambda \in \mathbb{K}$ est une **valeur propre** de $f$ s'il existe un vecteur non nul $x \in E$, appelé **vecteur propre** associé à $\lambda$, tel que :
    $$f(x) = \lambda x$$
*   **Sous-espace propre :** Pour $\lambda \in \text{Spec}(f)$, le sous-espace propre associé est défini par :
    $$E_\lambda(f) = \ker(f - \lambda \text{Id}_E) = \{x \in E \mid f(x) = \lambda x\}$$
*   **Propriété fondamentale :** La somme des sous-espaces propres est toujours directe. Si $(\lambda_i)_{1 \le i \le p}$ sont des valeurs propres distinctes, alors :
    $$\sum_{i=1}^p E_{\lambda_i}(f) = \bigoplus_{i=1}^p E_{\lambda_i}(f)$$

### 2. Polynôme caractéristique
*   **Définition :** Pour $A \in \mathcal{M}_n(\mathbb{K})$, le polynôme caractéristique est défini par :
    $$\chi_A(X) = \det(X I_n - A) = \det(A - X I_n) \cdot (-1)^n$$
    C'est un polynôme unitaire de degré $n$.
*   **Propriétés :** 
    *   Les racines de $\chi_A$ dans $\mathbb{K}$ sont exactement les valeurs propres de $A$.
    *   Le coefficient constant $\chi_A(0) = \det(-A) = (-1)^n \det(A)$.
    *   Le coefficient de $X^{n-1}$ est l'opposé de la trace : $\text{Tr}(A) = \sum_{i=1}^n a_{i,i}$.

### 3. Diagonalisation et trigonalisation
*   **Théorème de diagonalisation :** $f \in \mathcal{L}(E)$ (ou $A \in \mathcal{M}_n(\mathbb{K})$) est diagonalisable si et seulement si :
    1. Le polynôme caractéristique $\chi_f(X)$ est scindé sur $\mathbb{K}$.
    2. Pour toute valeur propre $\lambda$, la dimension du sous-espace propre est égale à sa multiplicité algébrique $m(\lambda)$ : $\dim(E_\lambda) = m(\lambda)$.
    Autrement dit : $\sum_{\lambda \in \text{Spec}(f)} \dim(E_\lambda) = \dim(E)$.
*   **Théorème de trigonalisation :** $f$ est trigonalisable sur $\mathbb{K}$ si et seulement si son polynôme caractéristique $\chi_f(X)$ est scindé sur $\mathbb{K}$.

### 4. Polynômes d'endomorphismes et de matrices
*   **Théorème de Cayley-Hamilton :** Si $P = \chi_f$ est le polynôme caractéristique de $f$, alors :
    $$\chi_f(f) = 0_{\mathcal{L}(E)} \quad \text{et} \quad \chi_A(A) = 0_{\mathcal{M}_n(\mathbb{K})}$$
*   **Polynôme annulateur :** Un polynôme $P \in \mathbb{K}[X]$ est dit annulateur de $f$ si $P(f) = 0$. L'idéal des polynômes annulateurs de $f$ est engendré par un unique polynôme unitaire, le **polynôme minimal** $\pi_f$.
*   **Caractérisation des endomorphismes diagonalisables :** Un endomorphisme $f$ est diagonalisable si et seulement s'il admet un polynôme annulateur scindé à racines simples.

---

## Module 2 : Séries numériques et vectorielles

### 1. Généralités sur les séries
Soit $(u_n)_{n \in \mathbb{N}}$ une suite à valeurs dans un $\mathbb{K}$-espace vectoriel normé $E$ (le cas échéant, $\mathbb{R}$ ou $\mathbb{C}$).
*   **Sommes partielles :** $S_N = \sum_{n=0}^N u_n$.
*   **Convergence :** La série $\sum u_n$ converge si la suite $(S_N)_{N \in \mathbb{N}}$ converge dans $E$. Sa somme est alors $\sum_{n=0}^{+\infty} u_n = \lim_{N \to +\infty} S_N$.
*   **Condition nécessaire de convergence :** Si $\sum u_n$ converge, alors $\lim_{n \to +\infty} u_n = 0$. (Attention : la réciproque est fausse).

### 2. Séries à termes réels positifs
Soit $\sum u_n$ une série à termes réels positifs ($u_n \ge 0$).
*   **Théorème de la limite monotone :** La série converge si et seulement si la suite des sommes partielles $(S_N)$ est majorée.
*   **Règles de comparaison :**
    *   Si $0 \le u_n = O(v_n)$ et $\sum v_n$ converge, alors $\sum u_n$ converge.
    *   Si $u_n \sim v_n$, les séries $\sum u_n$ et $\sum v_n$ sont de même nature.
*   **Comparaison série-intégrale :** Si $f : [a, +\infty[ \to \mathbb{R}$ est positive, continue et décroissante, alors la série $\sum f(n)$ et l'intégrale $\int_a^{+\infty} f(t) \, dt$ sont de même nature.
*   **Règle de d'Alembert :** Soit $(u_n)$ une suite à termes strictement positifs telle que $\frac{u_{n+1}}{u_n} \xrightarrow[n \to +\infty]{} L$.
    *   Si $L < 1$, la série converge.
    *   Si $L > 1$, la série diverge grossièrement.
    *   Si $L = 1$, conclusion impossible.

### 3. Convergence absolue et semi-convergence
*   **Définition :** Une série $\sum u_n$ est **absolument convergente** si la série numérique à termes réels positifs $\sum \|u_n\|$ converge.
*   **Théorème :** Dans un espace vectoriel normé de dimension finie (et plus généralement dans un espace de Banach), toute série absolument convergente est convergente, et l'on a l'inégalité triangulaire généralisée :
    $$\left\| \sum_{n=0}^{+\infty} u_n \right\| \le \sum_{n=0}^{+\infty} \|u_n\|$$

### 4. Séries particulières
*   **Séries géométriques :** $\sum z^n$ converge si et seulement si $|z| < 1$. Sa somme vaut alors $\frac{1}{1-z}$.
*   **Séries de Riemann :** $\sum \frac{1}{n^\alpha}$ converge si et seulement si $\alpha > 1$.
*   **Séries alternées :** Si $(a_n)$ est une suite réelle de signe alterné dont la valeur absolue $|a_n|$ décroît vers $0$, alors la série $\sum a_n$ converge (**Critère spécial des séries alternées - CSA**). De plus, le reste $R_N = \sum_{n=N+1}^{+\infty} a_n$ est du signe du premier terme négligé $a_{N+1}$ et majore en valeur absolue ce dernier :
    $$\left| R_N \right| \le |a_{N+1}|$$

---

## Module 3 : Algèbre bilinéaire

### 1. Formes bilinéaires et formes quadratiques
Soit $E$ un $\mathbb{K}$-espace vectoriel ($\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$).
*   **Forme bilinéaire :** Une application $\varphi : E \times E \to \mathbb{K}$ est une forme bilinéaire si elle est linéaire par rapport à chaque variable.
*   **Forme bilinéaire symétrique :** $\varphi(x, y) = \varphi(y, x)$ pour tout $(x, y) \in E^2$.
*   **Forme quadratique :** Une application $q : E \to \mathbb{K}$ est une forme quadratique s'il existe une forme bilinéaire symétrique $\varphi$ telle que $q(x) = \varphi(x, x)$. 
    *   La forme polaire associée est $\varphi(x, y) = \frac{1}{2} (q(x+y) - q(x) - q(y))$ (si $\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$).

### 2. Matrice d'une forme bilinéaire / quadratique
Soit $\mathcal{B} = (e_1, \dots, e_n)$ une base de $E$.
*   La matrice de $\varphi$ dans la base $\mathcal{B}$ est $A = (\varphi(e_i, e_j))_{1 \le i,j \le n}$.
*   Si $X$ et $Y$ sont les vecteurs colonnes des coordonnées de $x$ et $y$ dans $\mathcal{B}$, alors :
    $$\varphi(x, y) = X^T A Y$$
*   Si $q$ est la forme quadratique associée à $\varphi$, alors $q(x) = X^T A X$, avec $A$ matrice symétrique.
*   **Changement de base :** Si $P$ est la matrice de passage de $\mathcal{B}$ à $\mathcal{B}'$, la nouvelle matrice $A'$ de la forme bilinéaire est :
    $$A' = P^T A P$$

### 3. Orthogonalité et réduction des formes quadratiques
*   **Vecteurs orthogonaux :** $x$ et $y$ sont orthogonaux au sens de $\varphi$ (noté $x \perp_\varphi y$) si $\varphi(x, y) = 0$.
*   **Orthogonal d'une partie :** Pour $F \subset E$, $F^\perp = \{x \in E \mid \forall y \in F, \, \varphi(x, y) = 0\}$.
*   **Réduction de Gauss :** Toute forme quadratique $q$ sur un espace vectoriel réel de dimension finie peut s'écrire comme une combinaison linéaire (à coefficients réels) de carrés de formes linéaires indépendantes :
    $$q(x) = \sum_{i=1}^r \alpha_i (l_i(x))^2$$
*   **Théorème d'inertie de Sylvester :** Le nombre de coefficients strictement positifs et le nombre de coefficients strictement négatifs dans une décomposition de Gauss sont des invariants de la forme quadratique $q$. Leur couple $(s, t)$ est la **signature** de $q$.

### 4. Espaces préhilbertiens réels et euclidiens
Un espace préhilbertien réel est un $\mathbb{R}$-espace vectoriel muni d'un produit scalaire $\langle \cdot, \cdot \rangle$ (forme bilinéaire symétrique **définie positive**).
*   **Inégalité de Cauchy-Schwarz :** 
    $$\forall (x, y) \in E^2, \quad |\langle x, y \rangle| \le \|x\| \|y\|$$
    avec égalité si et seulement si $x$ et $y$ sont colinéaires.
*   **Procédé d'orthogonalisation de Schmidt :** Toute famille libre $(e_1, \dots, e_p)$ d'un espace préhilbertien peut être transformée en une famille orthonormée $(u_1, \dots, u_p)$ engendrant le même sous-espace vectoriel.
*   **Adjoint d'un endomorphisme :** Soit $E$ un espace euclidien et $f \in \mathcal{L}(E)$. Il existe un unique endomorphisme, noté $f^*$, tel que :
    $$\forall (x, y) \in E^2, \quad \langle f(x), y \rangle = \langle x, f^*(y) \rangle$$
*   **Endomorphismes symétriques :** Un endomorphisme $f$ est dit symétrique si $f^* = f$.
    *   **Théorème spectral :** Tout endomorphisme symétrique d'un espace euclidien est diagonalisable dans une **base orthonormée**. (De même, toute matrice symétrique réelle est diagonalisable par une matrice de passage orthogonale : $A = P D P^T$ avec $P^{-1} = P^T$).