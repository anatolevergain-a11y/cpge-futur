---
title: "Réduction d'Endomorphismes & Systèmes Différentiels"
description: "Fiche méthode et exercices corrigés sur les points les plus sélectifs du concours Agro-Véto / G2E."
sidebar:
  badge:
    text: "Point Clé Concours"
    variant: "danger"
---

## 🎯 Pourquoi cette notion est-elle décisive au concours ?

Dans les concours Agro-Véto et G2E, le chapitre de la réduction des endomorphismes et des matrices est l'un des plus rentables, mais aussi l'un des plus redoutés par les candidats de la filière BCPST. Les examinateurs ne cherchent pas à évaluer de simples applications de cours, mais votre capacité à lier des concepts algébriques purs à des problématiques concrètes issues de la modélisation (dynamique des populations, cinétique chimique, transferts thermiques). 

Maîtriser ce chapitre, c'est s'assurer de résoudre les parties "analyse" ou "probabilités" qui s'appuient sur des chaînes de Markov ou des résolutions de systèmes différentiels linéaires. Une rédaction rigoureuse, exempte de confusions entre applications linéaires et matrices, fait la différence entre une note honorable et une note d'admission.

---

## 📐 Rappels théoriques & Formules incontournables

Soit $E$ un $\mathbb{K}$-espace vectoriel de dimension finie $n$ (avec $\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$). Soit $f \in \mathcal{L}(E)$ et $A \in \mathcal{M}_n(\mathbb{K})$ sa matrice dans une base $\mathcal{B}$.

* **Valeurs propres et vecteurs propres :** 
  $\lambda \in \mathbb{K}$ est valeur propre de $f$ si et seulement si il existe un vecteur non nul $x \in E$ tel que :
  $f(x) = \lambda x$
  Le sous-espace propre associé est défini par :
  $E_\lambda(f) = \ker(f - \lambda \operatorname{id}_E) = \{x \in E \mid f(x) = \lambda x\}$

* **Polynôme caractéristique :** 
  $\chi_A(\lambda) = \det(\lambda I_n - A)$ (ou $\det(A - \lambda I_n)$ selon les conventions, attention à la constance du signe pour les dimensions impaires). Les valeurs propres sont exactement les racines de $\chi_A$ dans $\mathbb{K}$.

* **Diagonalisation :** 
  $f$ (ou $A$) est diagonalisable si et seulement si la somme des dimensions de ses sous-espaces propres est égale à $n$, ou de manière équivalente, si pour toute valeur propre $\lambda_i$ de multiplicité algébrique $m_i$, la dimension du sous-espace propre vérifie $\dim(E_{\lambda_i}) = m_i$, et $\sum m_i = n$.

* **Systèmes différentiels linéaires homogènes :** 
  On considère le système $X'(t) = A X(t)$ où $A \in \mathcal{M}_n(\mathbb{R})$ et $X : \mathbb{R} \to \mathbb{R}^n$. Si $A$ est diagonalisable de valeurs propres $\lambda_1, \dots, \lambda_n$ et de base de vecteurs propres $(V_1, \dots, V_n)$, la solution générale s'écrit sous la forme :
  $X(t) = \sum_{k=1}^n C_k \exp(\lambda_k t) V_k, \quad (C_1, \dots, C_n) \in \mathbb{R}^n$

---

### 📌 Point d'obstacle 1 : Recherche de valeurs propres et sous-espaces propres sans polynôme annulateur

#### 💡 Méthode de rédaction attendue par le jury
Le jury constate trop souvent des candidats qui se lancent dans le calcul brutal du polynôme caractéristique pour des matrices de grande taille sans observer la structure de la matrice. 
1. **Analyser la matrice :** Rechercher des lignes ou colonnes presque identiques, des matrices par blocs, ou calculer le rang de $A - \lambda I_n$ pour des valeurs évidentes.
2. **Poser clairement le système :** Pour déterminer $E_\lambda(f)$, on ne se contente pas de dire "on résout le système". On pose explicitement un vecteur $X = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}$ et l'on écrit l'égalité matricielle $(A - \lambda I_n)X = 0$ sous forme d'un système d'équations cartésiennes.
3. **Donner une base :** Le sous-espace propre doit être caractérisé non seulement par ses équations, mais par une famille génératrice libre explicite.

#### 📋 Exercice type concours résolu pas à pas
Soit la matrice $A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$. Déterminer ses valeurs propres et leurs sous-espaces propres associés.

*Étape 1 : Calcul du polynôme caractéristique.*
On calcule $\chi_A(\lambda) = \det(\lambda I_3 - A) = \begin{vmatrix} \lambda - 2 & -1 & -1 \\ -1 & \lambda - 2 & -1 \\ -1 & -1 & \lambda - 2 \end{vmatrix}$.
En additionnant toutes les colonnes dans la première colonne :
$\chi_A(\lambda) = \begin{vmatrix} \lambda - 4 & -1 & -1 \\ \lambda - 4 & \lambda - 2 & -1 \\ \lambda - 4 & -1 & \lambda - 2 \end{vmatrix} = (\lambda - 4) \begin{vmatrix} 1 & -1 & -1 \\ 1 & \lambda - 2 & -1 \\ 1 & -1 & \lambda - 2 \end{vmatrix}$
Par operations sur les lignes ($L_2 \leftarrow L_2 - L_1$ et $L_3 \leftarrow L_3 - L_1$) :
$\chi_A(\lambda) = (\lambda - 4) \begin{vmatrix} 1 & -1 & -1 \\ 0 & \lambda - 1 & 0 \\ 0 & 0 & \lambda - 1 \end{vmatrix} = (\lambda - 4)(\lambda - 1)^2$
Les valeurs propres sont $\lambda_1 = 4$ (de multiplicité $1$) et $\lambda_2 = 1$ (de multiplicité $2$).

*Étape 2 : Détermination du sous-espace propre $E_4(A)$.*
Soit $X = \begin{pmatrix} x \\ y \\ z \end{pmatrix} \in \mathcal{M}_{3,1}(\mathbb{R})$.
$(A - 4I_3)X = 0 \iff \begin{pmatrix} -2 & 1 & 1 \\ 1 & -2 & 1 \\ 1 & 1 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
Ce qui équivaut au système :
$\begin{cases} -2x + y + z = 0 \\ x - 2y + z = 0 \\ x + y - 2z = 0 \end{cases} \iff \begin{cases} x = y \\ z = y \end{cases}$
Ainsi, $E_4(A) = \operatorname{vect}\left(\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}\right)$.

*Étape 3 : Détermination du sous-espace propre $E_1(A)$.*
$(A - I_3)X = 0 \iff \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
Ce système se réduit à l'unique équation :
$x + y + z = 0 \iff z = -x - y$
Le sous-espace propre est donc de dimension $2$ :
$E_1(A) = \left\{ \begin{pmatrix} x \\ y \\ -x-y \end{pmatrix} \mid (x,y) \in \mathbb{R}^2 \right\} = \operatorname{vect}\left( \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix} \right)$

#### ⚠️ Les erreurs à bannir absolument
* Oublier de vérifier que la famille génératrice trouvée pour le sous-espace propre est **libre** avant de conclure à une base.
* Conclure hâtivement qu'une matrice est diagonalisable sans sommer les dimensions des sous-espaces propres ou sans vérifier que la dimension de chaque sous-espace propre est égale à sa multiplicité algébrique.

---

### 📌 Point d'obstacle 2 : Diagonalisation et puissance $A^n$ appliquée aux suites récurrentes couplées

#### 💡 Méthode de rédaction attendue par le jury
Face à un système de suites récurrentes du type $U_{n+1} = A U_n$, l'objectif est d'exprimer $U_n$ en fonction de $U_0$ à l'aide de la puissance $A^n$.
1. **Justifier la diagonalisation :** Si $A$ est diagonalisable, il existe une matrice de passage $P$ et une matrice diagonale $D$ telles que $A = PDP^{-1}$, ce qui implique $A^n = PD^n P^{-1}$.
2. **Rédiger rigoureusement l'initialisation implicite ou l'argument par récurrence** pour le calcul de $A^n$.
3. **Conclure proprement** en explicitant les coordonnées du vecteur $U_n$.

#### 📋 Exercice type concours résolu pas à pas
On considère les suites $(u_n)_{n \in \mathbb{N}}$, $(v_n)_{n \in \mathbb{N}}$ et $(w_n)_{n \in \mathbb{N}}$ définies par $u_0 = 1, v_0 = 0, w_0 = 0$ et pour tout $n \in \mathbb{N}$ :
$\begin{cases} u_{n+1} = 2u_n + v_n + w_n \\ v_{n+1} = u_n + 2v_n + w_n \\ w_{n+1} = u_n + v_n + 2w_n \end{cases}$
Exprimer $u_n$, $v_n$ et $w_n$ en fonction de $n$.

*Étape 1 : Modélisation matricielle.*
On pose $U_n = \begin{pmatrix} u_n \\ v_n \\ w_n \end{pmatrix}$. Le système s'écrit $U_{n+1} = A U_n$ avec $A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$.
D'après l'exercice précédent, $A$ est diagonalisable car les dimensions de ses sous-espaces propres ($1 + 2 = 3$) coïncident avec la dimension de l'espace.

*Étape 2 : Écriture de la formule de conjugaison.*
On a $A = PDP^{-1}$ avec :
$D = \begin{pmatrix} 4 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}, \quad P = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ 1 & -1 & -1 \end{pmatrix}$
Par un calcul classique d'inversion de matrice (ou par identification), on trouve :
$P^{-1} = \frac{1}{3} \begin{pmatrix} 1 & 1 & 1 \\ 2 & -1 & -1 \\ -1 & 2 & -1 \end{pmatrix}$

*Étape 3 : Calcul de $A^n$ et application au vecteur initial.*
Pour tout $n \in \mathbb{N}$, $A^n = PD^n P^{-1}$ avec $D^n = \begin{pmatrix} 4^n & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$.
$U_n = A^n U_0 = PD^n P^{-1} \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$
Calculons d'abord $V = P^{-1} U_0 = \frac{1}{3} \begin{pmatrix} 1 & 1 & 1 \\ 2 & -1 & -1 \\ -1 & 2 & -1 \end{pmatrix} \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} = \frac{1}{3} \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}$.
Ensuite, $U_n = P (D^n V) = P \left( \frac{1}{3} \begin{pmatrix} 4^n \\ 2 \\ -1 \end{pmatrix} \right) = \frac{1}{3} \begin{pmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ 1 & -1 & -1 \end{pmatrix} \begin{pmatrix} 4^n \\ 2 \\ -1 \end{pmatrix}$
$\begin{cases} u_n = \frac{1}{3}(4^n + 2) \\ v_n = \frac{1}{3}(4^n - 1) \\ w_n = \frac{1}{3}(4^n - 2 + 1) = \frac{1}{3}(4^n - 1) \end{cases}$

#### ⚠️ Les erreurs à bannir absolument
* Inverser l'ordre des matrices lors du produit $PD^n P^{-1}$ ou se tromper dans l'ordre des colonnes de $P$ par rapport aux valeurs propres de $D$.
* Oublier de multiplier par $U_0$ à la fin et s'arrêter au calcul abstrait de $A^n$.

---

### 📌 Point d'obstacle 3 : Résolution de systèmes différentiels $X' = AX$ en modélisation biologique

#### 💡 Méthode de rédaction attendue par le jury
Les sujets d'Agro-Véto adorent modéliser l'évolution conjointe de deux espèces (proies-prédateurs linéarisés ou épidémies de type SIR) par un système différentiel $X'(t) = AX(t)$.
1. **Justification de l'existence et de l'unicité :** Rappeler succinctement le théorème de Cauchy-Lipschitz linéaire (le système est défini sur $\mathbb{R}$ tout entier car $A$ est à coefficients constants).
2. **Diagonalisation (ou réduction de Jordan si non diagonalisable, bien que rare en BCPST) :** Expliciter la base propre.
3. **Écriture de la solution générale :** Bien expliciter l'introduction des constantes réelles issues des conditions initiales.
4. **Exploitation des conditions initiales :** Résoudre le système linéaire pour déterminer les constantes d'intégration.

#### 📋 Exercice type concours résolu pas à pas
On considère le système différentiel suivant, défini pour tout $t \in \mathbb{R}$, modélisant l'évolution de deux populations couplées :
$\begin{cases} x'(t) = -3x(t) + y(t) \\ y'(t) = x(t) - 3y(t) \end{cases}$
Avec les conditions initiales $x(0) = 1$ et $y(0) = 0$. Résoudre ce système.

*Étape 1 : Mise sous forme matricielle.*
On pose $X(t) = \begin{pmatrix} x(t) \\ y(t) \end{pmatrix}$. Le système s'écrit $X'(t) = A X(t)$ avec $A = \begin{pmatrix} -3 & 1 \\ 1 & -3 \end{pmatrix}$.

*Étape 2 : Réduction de la matrice $A$.*
Calculons le polynôme caractéristique :
$\chi_A(\lambda) = \det(\lambda I_2 - A) = \begin{vmatrix} \lambda + 3 & -1 \\ -1 & \lambda + 3 \end{vmatrix} = (\lambda + 3)^2 - 1 = (\lambda + 3 - 1)(\lambda + 3 + 1) = (\lambda + 2)(\lambda + 4)$
Les valeurs propres sont $\lambda_1 = -2$ et $\lambda_2 = -4$.
* Pour $\lambda_1 = -2$ : $(A + 2I_2)X = 0 \iff -x + y = 0 \iff y = x$. On prend $V_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
* Pour $\lambda_2 = -4$ : $(A + 4I_2)X = 0 \iff x + y = 0 \iff y = -x$. On prend $V_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

*Étape 3 : Expression de la solution générale.*
Puisque $A$ est diagonalisable à valeurs réelles, la solution générale sur $\mathbb{R}$ est de la forme :
$X(t) = C_1 \exp(-2t) \begin{pmatrix} 1 \\ 1 \end{pmatrix} + C_2 \exp(-4t) \begin{pmatrix} 1 \\ -1 \end{pmatrix}, \quad (C_1, C_2) \in \mathbb{R}^2$
Soit sous forme coordonnée :
$\begin{cases} x(t) = C_1 \exp(-2t) + C_2 \exp(-4t) \\ y(t) = C_1 \exp(-2t) - C_2 \exp(-4t) \end{cases}$

*Étape 4 : Utilisation des conditions initiales.*
À $t = 0$, on a $\begin{cases} x(0) = C_1 + C_2 = 1 \\ y(0) = C_1 - C_2 = 0 \end{cases}$
En additionnant et soustrayant ces deux lignes, on obtient immédiatement $C_1 = \frac{1}{2}$ et $C_2 = \frac{1}{2}$.
La solution particulière recherchée est donc :
$\begin{cases} x(t) = \frac{1}{2}\exp(-2t) + \frac{1}{2}\exp(-4t) \\ y(t) = \frac{1}{2}\exp(-2t) - \frac{1}{2}\exp(-4t) \end{cases}$

#### ⚠️ Les erreurs à bannir absolument
* Confondre le signe des valeurs propres dans l'exponentielle : une valeur propre $\lambda$ donne $\exp(\lambda t)$ et non $\exp(-\lambda t)$ de manière systématique.
* Oublier de mentionner que les constantes d'intégration appartiennent à $\mathbb{R}$ (ou $\mathbb{C}$ selon le cadre, mais en BCPST le champ réel est de rigueur pour les applications biologiques).
* Ne pas vérifier la solution en la réinjectant mentalement ou explicitement dans le système initial.