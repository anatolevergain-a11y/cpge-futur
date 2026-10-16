---
title: 'Optimisation au concours : Mathématiques MPI'
description: 'Les questions incontournables aux concours, les erreurs à éviter et les rédactions modèles de jury.'
sidebar:
  badge:
    text: 'Méthode Concours'
    variant: 'caution'
---

## 🎯 Objectif du module & Exigences des Jurys

En tant que président de jury et concepteur de sujets pour les concours scientifiques (filière MPI), je ne saurais trop insister sur un point fondamental : **la rigueur logique et l'exactitude de la rédaction font toute la différence entre une note de passage et une note d'admissibilité dans les grandes écoles (X-ENS, Mines-Ponts, Centrale-Supélec)**. 

En mathématiques pour la filière MPI, l'algorithmique, la structure algébrique et l'analyse se croisent. Les questions d'optimisation et d'algébrisation (réduction) ne sont pas de simples applications de cours : ce sont des instruments de mesure de votre capacité à structurer un raisonnement.

Ce guide a pour unique but de vous armer face aux exigences des barèmes de correction. Suivez scrupuleusement les méthodes canoniques et les modèles de rédaction proposés ci-dessous.

---

## 📌 Question Type 1 : Réduction des endomorphismes et calcul du polynôme annulateur/minimal

### 💡 Méthode canonique & Étapes de rédaction

Face à un problème de réduction d'endomorphisme où intervient un polynôme annulateur ou le calcul du polynôme minimal d'une matrice $A \in \mathcal{M}_n(\mathbb{K})$, le candidat doit procéder avec méthode :

1. **Recherche d'un polynôme annulateur initial :** 
   Utiliser le théorème de Cayley-Hamilton ($P_A(A) = 0$) ou exploiter des relations géométriques/algébriques issues de l'énoncé (par exemple, $A^2 = A$ ou $A^k = I_n$).
2. **Identification des candidats diviseurs :** 
   Le polynôme minimal $\pi_A$ divise tout polynôme annulateur $P$. Par conséquent, les racines de $\pi_A$ sont nécessairement des valeurs propres de $A$.
3. **Exploitation de la diagonalisabilité :** 
   Rappeler le théorème fondamental : $A$ est diagonalisable si et seulement si son polynôme minimal est scindé à racines simples sur $\mathbb{K}$.
4. **Calcul effectif (si nécessaire) :** 
   Tester les diviseurs potentiels de degrés croissants, ou utiliser les sous-espaces caractéristiques et le lemme des noyaux pour expliciter $\pi_A$.

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Sujet d'étude :** Soit $A \in \mathcal{M}_n(\mathbb{R})$ telle que $A^3 - 3A^2 + 2A = 0$ et $A \neq 0$ et $A \neq I_n$. Déterminer le polynôme minimal de $A$ et discuter de sa diagonalisabilité.

**Rédaction modèle type /20 :**

> Soit $P(X) = X^3 - 3X^2 + 2X$. L'énoncé indique que $P(A) = 0$. Par conséquent, $P$ est un polynôme annulateur de la matrice $A$.
> 
> Factorisons le polynôme $P$ dans $\mathbb{R}[X]$ :
> $$P(X) = X(X^2 - 3X + 2) = X(X - 1)(X - 2)$$
> 
> Notons $\pi_A$ le polynôme minimal de $A$. D'après le théorème de division euclidienne dans $\mathbb{R}[X]$, $\pi_A$ divise tout polynôme annulateur de $A$, et en particulier $\pi_A$ divise $P$. Les racines de $\pi_A$ sont donc nécessairement à chercher parmi l'ensemble $\{0, 1, 2\}$.
> 
> Les diviseurs unitaires non constants de $P$ sont :
> - De degré $1$ : $X$, $X-1$, $X-2$.
> - De degré $2$ : $X(X-1)$, $X(X-2)$, $(X-1)(X-2)$.
> - De degré $3$ : $X(X-1)(X-2)$.
> 
> Comme $A \neq 0$, $A$ n'annule pas $X$. Comme $A \neq I_n$, $A$ n'annule pas $X-1$ (et de même pour les autres diviseurs de degré $1$ ou $2$ selon les hypothèses complémentaires du problème). Supposons par exemple que ni $A$, ni $A-I_n$, ni $A-2I_n$ ne soient nuls, et que $A(A-I_n) \neq 0$. Alors, nécessairement, le polynôme minimal $\pi_A$ est égal à $P$ tout entier, soit $\pi_A(X) = X(X-1)(X-2)$.
> 
> Les racines de $\pi_A$ sont $0$, $1$ et $2$. Ce sont des racines simples et le polynôme $\pi_A$ est scindé sur $\mathbb{R}$. Par le théorème de caractérisation spectrale, **la matrice $A$ est diagonalisable** dans $\mathcal{M}_n(\mathbb{R})$.

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury

- **Confondre polynôme caractéristique et polynôme minimal :** Cayley-Hamilton assure que $P_A(A) = 0$, mais $P_A$ n'est pas toujours le polynôme minimal $\pi_A$ (le degré peut être plus petit).
- **Oublier de vérifier la scission sur le corps de base :** Affirmer qu'une matrice est diagonalisable sans vérifier que le polynôme minimal est scindé dans $\mathbb{R}[X]$ (ou $\mathbb{C}[X]$) est une faute éliminatoire sur le plan logique.
- **Négliger les cas particuliers :** Oublier de tester si des matrices comme $0$ ou $I_n$ sont solutions, ce qui fausse l'analyse du degré de $\pi_A$.

---

## 📌 Question Type 2 : Optimisation sous contraintes : calcul du gradient, de la hessienne et extrema locaux

### 💡 Méthode canonique & Étapes de rédaction

Dans les problèmes d'analyse appliquée aux concours, la recherche d'extrema locaux pour une fonction de plusieurs variables $f : U \subset \mathbb{R}^n \to \mathbb{R}$ obéit à un protocole strict :

1. **Recherche des points critiques :** 
   Résoudre le système non linéaire $\nabla f(x) = 0$.
2. **Calcul de la matrice Hessienne :** 
   Calculer les dérivées partielles secondes $H_f(x) = \left( \frac{\partial^2 f}{\partial x_i \partial x_j}(x) \vphantom{\frac{1}{2}} \right)_{1 \le i,j \le n}$. Par le théorème de Schwarz, $H_f(x)$ est symétrique si les conditions de régularité ($\mathcal{C}^2$) sont réunies.
3. **Analyse spectrale ou étude des minors principaux (critère de Sylvester) :** 
   - Si toutes les valeurs propres de $H_f(x_0)$ sont strictement positives, $x_0$ est un **minimum local strict**.
   - Si toutes les valeurs propres sont strictement négatives, $x_0$ est un **maximum local strict**.
   - S'il y a des valeurs propres strictement positives et strictement négatives, $x_0$ est un **point selle** (pas d'extremum).
   - En présence de valeurs propres nulles, la conclusion ne peut être obtenue par la seule étude hessienne (nécessité de pousser un développement de Taylor).

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Sujet d'étude :** Soit $f : \mathbb{R}^2 \to \mathbb{R}$ définie par $f(x, y) = x^3 + y^3 - 3xy$. Déterminer les extrema locaux de $f$.

**Rédaction modèle type /20 :**

> La fonction $f$ est de classe $\mathcal{C}^\infty$ sur $\mathbb{R}^2$ comme fonction polynomiale.
> 
> **1. Recherche des points critiques :**
> Calculons le gradient de $f$ en tout point $(x, y) \in \mathbb{R}^2$ :
> $$\nabla f(x, y) = \begin{pmatrix} \frac{\partial f}{\partial x}(x, y) \\ \frac{\partial f}{\partial y}(x, y) \end{pmatrix} = \begin{pmatrix} 3x^2 - 3y \\ 3y^2 - 3x \end{pmatrix}$$
> 
> Cherchons les points $(x, y)$ tels que $\nabla f(x, y) = 0_{\mathbb{R}^2}$. Cela équivaut au système :
> $$\begin{cases} x^2 - y = 0 \\ y^2 - x = 0 \end{cases} \iff \begin{cases} y = x^2 \\ x^4 - x = 0 \end{cases} \iff \begin{cases} y = x^2 \\ x(x^3 - 1) = 0 \end{cases}$$
> 
> Dans $\mathbb{R}$, l'équation $x(x^3 - 1) = 0$ admet deux solutions réelles : $x = 0$ et $x = 1$.
> - Si $x = 0$, alors $y = 0^2 = 0$.
> - Si $x = 1$, alors $y = 1^2 = 1$.
> 
> Les points critiques de $f$ sont donc $A = (0, 0)$ et $B = (1, 1)$.
> 
> **2. Analyse de la matrice Hessienne :**
> Pour tout $(x, y) \in \mathbb{R}^2$, la matrice hessienne $H_f(x, y)$ est donnée par :
> $$H_f(x, y) = \begin{pmatrix} \frac{\partial^2 f}{\partial x^2}(x, y) & \frac{\partial^2 f}{\partial x \partial y}(x, y) \\ \frac{\partial^2 f}{\partial y \partial x}(x, y) & \frac{\partial^2 f}{\partial y^2}(x, y) \end{pmatrix} = \begin{pmatrix} 6x & -3 \\ -3 & 6y \end{pmatrix}$$
> 
> - **Étude au point $A = (0, 0)$ :**
>   $$H_f(0, 0) = \begin{pmatrix} 0 & -3 \\ -3 & 0 \end{pmatrix}$$
>   Le calcul des valeurs propres de $H_f(0, 0)$ se fait via le polynôme caractéristique :
>   $$\det(H_f(0, 0) - \lambda I_2) = \det \begin{pmatrix} -\lambda & -3 \\ -3 & -\lambda \end{pmatrix} = \lambda^2 - 9 = (\lambda - 3)(\lambda + 3)$$
>   Les valeurs propres sont $\lambda_1 = 3$ et $\lambda_2 = -3$. 
>   Puisque les valeurs propres sont de signes contraires ($\lambda_1 > 0$ et $\lambda_2 < 0$), **le point $A(0, 0)$ est un point selle** : $f$ n'y présente pas d'extremum local.
> 
> - **Étude au point $B = (1, 1)$ :**
>   $$H_f(1, 1) = \begin{pmatrix} 6 & -3 \\ -3 & 6 \end{pmatrix}$$
>   Analysons les sous-déterminants principaux (critère de Sylvester) :
>   - Premier mineur principal : $\Delta_1 = 6 > 0$.
>   - Deuxième mineur principal (déterminant de la matrice) : $\Delta_2 = 6 \times 6 - (-3)^2 = 36 - 9 = 27 > 0$.
>   Tous les mineurs principaux étant strictement positifs, la matrice $H_f(1, 1)$ est définie positive. 
>   Par conséquent, **le point $B(1, 1)$ est un minimum local strict** de $f$.

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury

- **Oublier de justifier la classe $\mathcal{C}^2$ :** Le théorème de Schwarz permettant d'affirmer la symétrie de la Hessienne requiert explicitement la continuité des dérivées secondes. Mentionnez toujours la régularité de $f$.
- **Conclure hâtivement en présence d'une valeur nulle :** Si une valeur propre de la Hessienne est nulle ($\det(H_f) = 0$), le test est inopérant. N'écrivez jamais "le test ne donne rien donc il n'y a pas d'extremum" ; il faut étudier un développement limité ou le signe de $f(x, y) - f(x_0, y_0)$ au voisinage du point critique.
- **Erreurs de calculs dans le gradient :** Une simple étourderie sur un signe dans le système $\nabla f = 0$ invalide l'ensemble de la suite du problème. Prenez 30 secondes pour vérifier par substitution.