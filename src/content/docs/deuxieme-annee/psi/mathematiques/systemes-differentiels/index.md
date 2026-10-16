---
title: 'Cours : Systèmes différentiels'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Systèmes Différentiels (PSI - Mathématiques)

La résolution des systèmes différentiels linéaires est un outil fondamental en mathématiques appliquées et en physique (mécanique, automatique). En classe de seconde année PSI, l'étude se focalise principalement sur les **systèmes différentiels linéaires à coefficients constants**.

---

## I. Généralités et Structure de l'Ensemble des Solutions

### 1. Définitions et cadre d'étude

Soit $I$ un intervalle de $\mathbb{R}$. 
*   Un **système différentiel linéaire d'ordre 1** sur $I$ est de la forme :
    $$\forall t \in I, \quad X'(t) = A(t)X(t) + B(t) \quad (\text{S})$$
    où $A \in \mathcal{M}_n(\mathbb{K})(\mathbb{K} = \mathbb{R} \text{ ou } \mathbb{C})$ est une matrice continue sur $I$, $B : I \to \mathbb{K}^n$ est un second membre continu, et $X : I \to \mathbb{K}^n$ est l'inconnue cherchée.
*   Le système homogène (ou sans second membre) associé est :
    $$X'(t) = A(t)X(t) \quad (\text{H})$$

### 2. Théorème de Cauchy-Lipschitz linéaire (Admis)

> **Théorème (Cauchy-Lipschitz linéaire global) :**
> Si $A$ et $B$ sont continues sur $I$, alors pour tout $t_0 \in I$ et pour tout vecteur initial $X_0 \in \mathbb{K}^n$, **il existe un unique maximal** solution du problème de Cauchy :
> $$\begin{cases} X'(t) = A(t)X(t) + B(t) \\ X(t_0) = X_0 \end{cases}$$
> De plus, cette solution est définie sur le *stuc* entier $I$.

### 3. Structure de l'ensemble des solutions

> **Théorème :**
> 1. L'ensemble des solutions du système homogène $(\text{H})$, noté $\mathcal{S}_0$, est un **$\mathbb{K}$-espace vectoriel de dimension $n$**.
> 2. L'ensemble des solutions du système avec second membre $(\text{S})$ est un espace affine de direction $\mathcal{S}_0$. Sa solution générale s'obtient comme la somme d'une **solution particulière** de $(\text{S})$ et de la **solution générale du système homogène** associé $(\text{H})$.

---

## II. Systèmes Linéaires à Coefficients Constants (Cas Homogène)

On s'intéresse désormais au système $(\text{H}) : X' = AX$ où $A \in \mathcal{M}_n(\mathbb{C})$ est une matrice constante.

### 1. Définition de l'exponentielle de matrice

> **Définition :**
> Pour toute matrice $A \in \mathcal{M}_n(\mathbb{C})$, la série $\sum_{k=0}^{+\infty} \frac{A^k}{k!}$ converge normalement dans $(\mathcal{M}_n(\mathbb{C}), ||\cdot||)$. Sa somme est appelée **exponentielle de la matrice $A$**, notée $\exp(A)$ ou $e^A$.

*Propriétés fondamentales :*
*   Si $AB = BA$, alors $e^{A+B} = e^A e^B$.
*   Pour toute matrice $A$, $e^A$ est inversible et $(e^A)^{-1} = e^{-A}$.
*   L'application $t \mapsto e^{tA}$ est de classe $\mathcal{C}^\infty$ sur $\mathbb{R}$ et :
    $$\frac{d}{dt}\left(e^{tA}\right) = A e^{tA} = e^{tA} A$$

### 2. Expression de la solution générale

> **Théorème :**
> L'unique solution du problème de Cauchy :
> $$\begin{cases} X'(t) = AX(t) \\ X(0) = X_0 \end{cases}$$
> est donnée par $\forall t \in \mathbb{R}, \quad X(t) = e^{tA}X_0$.

### 3. Méthodes pratiques de calcul de la solution générale

En pratique, on évite de calculer directement $e^{tA}$ via la série. On utilise la structure des sous-espaces propres ou caractéristiques.

#### Cas où $A$ est diagonalisable (dans $\mathbb{C}$ ou $\mathbb{R}$)
Si $A$ admet une base de vecteurs propres $(V_1, V_2, \dots, V_n)$ associée aux valeurs propres $(\lambda_1, \lambda_2, \dots, \lambda_n)$ (éventuellement confondues), alors la solution générale s'écrit :
$$X(t) = \sum_{k=1}^n C_k e^{\lambda_k t} V_k \quad \text{où } (C_1, \dots, C_n) \in \mathbb{K}^n$$

#### Cas général (Réduction de Jordan / Dunford)
Si $A$ n'est pas diagonalisable sur $\mathbb{R}$, on peut :
1. Travailler sur $\mathbb{C}$ pour diagonaliser ou trigonaliser (Dunford $A = D + N$ avec $DN=ND$ et $N$ nilpotente).
2. Alors $e^{tA} = e^{tD} e^{tN} = e^{tD} \left( \sum_{k=0}^{n-1} \frac{t^k}{k!} N^k \right)$.

---

## III. Cas Particulier : Systèmes d'ordre 2 à coefficients constants dans $\mathbb{R}$

Soit le système $X' = AX$ avec $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \in \mathcal{M}_2(\mathbb{R})$.
Soit $\chi_A(\lambda) = \lambda^2 - \text{Tr}(A)\lambda + \det(A)$ le polynôme caractéristique.

1. **Deux valeurs propres réelles distinctes ($\Delta > 0$) :**
   $\lambda_1, \lambda_2 \in \mathbb{R}$. Solutions de la forme :
   $$X(t) = C_1 e^{\lambda_1 t} V_1 + C_2 e^{\lambda_2 t} V_2$$

2. **Une valeur propre réelle double ($\Delta = 0$) :**
   $\lambda_0 \in \mathbb{R}$. Si $A$ est diagonalisable ($A = \lambda_0 I$), $X(t) = C e^{\lambda_0 t} X_0$.
   Si $A$ n'est pas diagonalisable, d'après Cayley-Hamilton, $(A - \lambda_0 I)^2 = 0$. On a :
   $$e^{tA} = e^{\lambda_0 t} e^{t(A - \lambda_0 I)} = e^{\lambda_0 t} (I + t(A - \lambda_0 I))$$

3. **Valeurs propres complexes conjuguées ($\Delta < 0$) :**
   $\lambda = \alpha + i\beta$ avec $\beta \neq 0$. 
   Soit $V$ un vecteur propre complexe associé à $\lambda$. Une solution complexe est $Z(t) = e^{\lambda t}V$.
   Les solutions réelles s'obtiennent en prenant la **partie réelle** et la **partie imaginaire** de $Z(t)$ :
   $$X(t) = C_1 \text{Re}\left(e^{(\alpha + i\beta)t}V\right) + C_2 \text{Im}\left(e^{(\alpha + i\beta)t}V\right)$$

---

## IV. Méthodes de Résolution avec Second Membre

Pour $X' = AX + B(t)$, la solution générale est $X(t) = X_H(t) + X_p(t)$.

### 1. Méthode de la variation de la constante

On cherche une solution particulière sous la forme :
$$X_p(t) = e^{tA} K(t)$$
où $K$ est une fonction dérivable à valeurs dans $\mathbb{K}^n$.
En injectant dans l'équation :
$$X_p'(t) = A e^{tA} K(t) + e^{tA} K'(t) = A X_p(t) + B(t)$$
D'où $e^{tA} K'(t) = B(t)$, soit :
$$K'(t) = e^{-tA} B(t) \implies K(t) = \int_{t_0}^t e^{-sA} B(s) ds$$
> **Formule générale de Duhamel :**
> $$X(t) = e^{(t-t_0)t} X_0 + \int_{t_0}^t e^{(t-s)A} B(s) ds$$

### 2. Principe de superposition (Recherche par analogie)
Si $B(t)$ est de la forme $e^{\mu t} P(t)$ où $P$ est un vecteur polynomial, on cherche $X_p(t)$ sous une forme analogue (en tenant compte de l'éventuelle résonance si $\mu$ est valeur propre de $A$).

---

## V. Méthodes et Pièges à Éviter

> **⚠️ PIÈGES CLASSIQUES :**
> 1. **Confusion dimensionnelle :** S'assurer que le vecteur $X(t)$ est bien de dimension $n$ et que la matrice $A$ est carrée $n \times n$.
> 2. **Non-commutativité :** Attention, si $A$ et $B$ ne commutent pas ($AB \neq BA$), **$e^{A+B} \neq e^A e^B$**. C'est une erreur fatale fréquente dans les calculs matriciels.
> 3. **oubli des conditions initiales :** Dans un problème de Cauchy, ne pas oublier de déterminer les constantes d'intégration $(C_1, \dots, C_n)$ en injectant la condition $X(t_0) = X_0$.
> 4. **Racines complexes :** En PSI, on manipule des systèmes réels. Même si le calcul intermédiaire passe par $\mathbb{C}$ (valeurs propres complexes), **le résultat final exprimé dans la base de l'énoncé doit être réel** (utiliser $\text{Re}$ et $\text{Im}$).

> **💡 MÉTHODE - Rédaction type concours :**
> * **Étape 1 :** Résoudre l'équation homogène $X' = AX$. Déterminer les valeurs propres de $A$, préciser s'il y a diagonalisabilité. Expliciter clairement $\mathcal{S}_0$ sous forme d'une combinaison linéaire de $n$ solutions indépendantes.
> * **Étape 2 :** Pour le second membre, identifier une forme évidente (principe de superposition) ou appliquer la variation de la constante.
> * **Étape 3 :** Conclure en écrivant la solution générale $X = X_H + X_p$ et utiliser les conditions initiales si elles sont fournies.