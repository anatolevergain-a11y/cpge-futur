---
title: 'Cours : Algèbre linéaire et matrices'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Algèbre linéaire et matrices — CPGE PCSI

Ce chapitre constitue le cœur de l'algèbre en première année. L'objectif est d'étudier les espaces vectoriels, les applications linéaires qui les relient, et de traduire ces objets abstraits en objets calculatoires grâce au calcul matriciel.

---

## I. Espaces vectoriels

### 1. Définition et premières propriétés
Soit $\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$.

**Définition (Espace vectoriel) :**
Un $\mathbb{K}$-espace vectoriel est un ensemble non vide $E$ muni d'une loi de composition interne $+ : E \times E \to E$ et d'une loi externe $\cdot : \mathbb{K} \times E \to E$ telles que :
1. $(E, +)$ est un groupe abélien.
2. Pour tous $\lambda, \mu \in \mathbb{K}$ et tous $x, y \in E$ :
   - $\lambda \cdot (x + y) = \lambda \cdot x + \lambda \cdot y$
   - $(\lambda + \mu) \cdot x = \lambda \cdot x + \mu \cdot x$
   - $(\lambda\mu) \cdot x = \lambda \cdot (\mu \cdot x)$
   - $1_{\mathbb{K}} \cdot x = x$

Les éléments de $E$ sont appelés des **vecteurs**, et ceux de $\mathbb{K}$ des **scalaires**.

**Proposition (Règles de calcul) :**
Soit $E$ un $\mathbb{K}$-ev. Pour tout $\lambda \in \mathbb{K}$ et tout $x \in E$ :
- $\lambda \cdot 0_E = 0_{\mathbb{K}} \cdot x = 0_E$
- $\lambda \cdot x = 0_E \iff (\lambda = 0_{\mathbb{K}} \text{ ou } x = 0_E)$
- $(-\lambda) \cdot x = \lambda \cdot (-x) = -(\lambda \cdot x)$

### 2. Sous-espaces vectoriels
**Définition :**
Soit $(E, +, \cdot)$ un $\mathbb{K}$-ev et $F$ une partie de $E$. On dit que $F$ est un sous-espace vectoriel (s.e.v.) de $E$ si :
1. $F \neq \emptyset$ (en pratique, on montre $0_E \in F$).
2. $F$ est stable par addition : $\forall (x, y) \in F^2, \, x + y \in F$.
3. $F$ est stable par multiplication externe : $\forall \lambda \in \mathbb{K}, \forall x \in F, \, \lambda \cdot x \in F$.

> **Caractérisation en une étape :** $F$ est un s.e.v. de $E$ si et seulement si $F \neq \emptyset$ et $\forall (\lambda, \mu) \in \mathbb{K}^2, \forall (x, y) \in F^2, \, \lambda x + \mu y \in F$.

---

## II. Familles de vecteurs

### 1. Combinaisons linéaires et sous-espace engendré
* Soit $(x_i)_{i \in I}$ une famille de vecteurs de $E$. Une combinaison linéaire de cette famille est une somme finie $\sum_{i \in I} \lambda_i x_i$ où $\lambda_i \in \mathbb{K}$ (presque tous nuls).
* Le sous-espace vectoriel engendré par une partie $A \subset E$, noté $\operatorname{Vect}(A)$, est l'ensemble de toutes les combinaisons linéaires de vecteurs de $A$. C'est le plus petits s.e.v. de $E$ contenant $A$.

### 2. Familles libres, familles liées
**Définition :**
Soit $(x_1, \dots, x_n)$ une famille de vecteurs de $E$.
* La famille est dite **libre** (ou les vecteurs sont linéairement indépendants) si :
  $$\forall (\lambda_1, \dots, \lambda_n) \in \mathbb{K}^n, \quad \left(\sum_{i=1}^n \lambda_i x_i = 0_E \implies \lambda_1 = \dots = \lambda_n = 0\right)$$
* La famille est dite **liée** si elle n'est pas libre, c'est-à-dire s'il existe des scalaires $\lambda_i$ non tous nuls tels que $\sum_{i=1}^n \lambda_i x_i = 0_E$.

### 3. Familles génératrices, bases
* Une famille $(x_1, \dots, x_n)$ est **génératrice** de $E$ si $\operatorname{Vect}(x_1, \dots, x_n) = E$.
* Une **base** de $E$ est une famille à la fois libre et génératrice.

**Théorème (Existence de la base incomplète - Admis en dimension finie) :**
Tout espace vectoriel de dimension finie admet une base. De toute famille génératrice, on peut extraire une base. Toute famille libre peut être complétée en une base.

**Définition (Dimension) :**
Si $E$ admet une base finie, tous les bases de $E$ ont le même cardinal, appelé la **dimension** de $E$, notée $\dim(E)$.

---

## III. Applications linéaires

### 1. Généralités
**Définition :**
Soient $E$ et $F$ deux $\mathbb{K}$-ev. Une application $f : E \to F$ est dite **linéaire** si :
$$\forall (x, y) \in E^2, \forall \lambda \in \mathbb{K}, \quad f(\lambda x + y) = \lambda f(x) + f(y)$$

* **Noyau :** $\ker(f) = \{x \in E \mid f(x) = 0_F\} = f^{-(\{0_F\})}$. C'est un s.e.v. de $E$.
* **Image :** $\operatorname{Im}(f) = \{f(x) \mid x \in E\} = f(E)$. C'est un s.e.v. de $F$.
Proposition: **
* $f$ est injective $\iff \ker(f) = \{0_E\}$.
* $f$ est surjective $\iff \operatorname{Im}(f) = F$.

### 2. Théorème du rang
**Théorème :**
Soient $E$ et $F$ deux $\mathbb{K}$-ev, avec $E$ de dimension finie. Soit $f \in \mathcal{L}(E, F)$. Alors $\operatorname{Im}(f)$ est de dimension finie et l'on a la relation :
$$\dim(E) = \dim(\ker(f)) + \dim(\operatorname{Im}(f))$$
Le nombre $\operatorname{rg}(f) = \dim(\operatorname{Im}(f))$ est appelé le **rang** de $f$.

---

## IV. Calcul matriciel

### 1. Définitions et opérations
Une matrice $A$ de taille $n \times p$ à coefficients dans $\mathbb{K}$ est un tableau rectangulaire :
$$A = \begin{pmatrix} a_{11} & a_{12} & \dots & a_{1p} \\ a_{21} & a_{22} & \dots & a_{2p} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \dots & a_{np} \end{pmatrix} = (a_{i,j})_{\substack{1 \le i \le n \\ 1 \le j \le p}}$$

L'ensemble de ces matrices est noté $\mathcal{M}_{n,p}(\mathbb{K})$. Si $n = p$, on note $\mathcal{M}_n(\mathbb{K})$ l'espace des matrices carrées, muni d'une structure d'anneau unitaire (non commutatif en général pour $n \ge 2$).

### 2. Transposition
**Définition :**
Soit $A = (a_{i,j}) \in \mathcal{M}_{n,p}(\mathbb{K})$. La transposée de $A$, notée $A^T$ (ou $^t\!A$), est la matrice de $\mathcal{M}_{p,n}(\mathbb{K})$ dont les coefficients sont $(A^T)_{i,j} = a_{j,i}$.

**Propriétés :**
* $(A + B)^T = A^T + B^T$
* $(\lambda A)^T = \lambda A^T$
* $(AB)^T = B^T A^T$ *(attention au renversement de l'ordre)*

---

## V. Matrices et applications linéaires

### 1. Matrice d'une application linéaire
Soient $E$ un $\mathbb{K}$-ev de dimension $p$ muni d'une base $\mathcal{B} = (e_1, \dots, e_p)$ et $F$ un $\mathbb{K}$-ev de dimension $n$ muni d'une base $\mathcal{C} = (\varepsilon_1, \dots, \varepsilon_n)$.
Soit $f \in \mathcal{L}(E, F)$. La **matrice de $f$ dans les bases $\mathcal{B}$ et $\mathcal{C}$** est la matrice de $\mathcal{M}_{n,p}(\mathbb{K})$ dont la $j$-ème colonne est formée des coordonnées du vecteur $f(e_j)$ dans la base $\mathcal{C}$ :
$$\operatorname{Mat}_{\mathcal{B}, \mathcal{C}}(f) = \begin{pmatrix} | & & | \\ \operatorname{Mat}_{\mathcal{C}}(f(e_1)) & \dots & \operatorname{Mat}_{\mathcal{C}}(f(e_p)) \\ | & & | \end{pmatrix}$$

### 2. Changement de base
Soient $\mathcal{B}$ et $\mathcal{B}'$ deux bases d'un même espace $E$. La **matrice de passage** de $\mathcal{B}$ à $\mathcal{B}'$, notée $P_{\mathcal{B}, \mathcal{B}'}$, est la matrice dont les colonnes sont les vecteurs de la nouvelle base $\mathcal{B}'$ exprimés dans l'ancienne base $\mathcal{B}$.
Proposition: **
La matrice de passage $P_{\mathcal{B}, \mathcal{B}'}$ est toujours inversible, et son inverse est $P_{\mathcal{B}', \mathcal{B}}$.

**Formule de changement de base pour un vecteur :**
Si $X$ est le vecteur colonne des anciennes coordonnées de $x$ et $X'$ celui des nouvelles :
$$X = P_{\mathcal{B}, \mathcal{B}'} X'$$

**Formule de changement de base pour un endomorphisme :**
Si $f \in \mathcal{L}(E)$, et $A = \operatorname{Mat}_{\mathcal{B}}(f)$ et $A' = \operatorname{Mat}_{\mathcal{B}'}(f)$, alors :
$$A' = P^{-1} A P$$
où $P = P_{\mathcal{B}, \mathcal{B}'}$. Les matrices $A$ et $A'$ sont dites **semblables**.

---

## VI. Déterminants

### 1. Déterminant d'une famille de vecteurs / d'une matrice carrée
Soit $A = (a_{i,j}) \in \mathcal{M}_n(\mathbb{K})$. Le déterminant de $A$ est défini par récurrence sur $n$ (développement par rapport à la première ligne) :
* Pour $n=1$, $\det(a_{11}) = a_{11}$.
* Pour $n \ge 2$, $\det(A) = \sum_{j=1}^n (-1)^{1+j} a_{1,j} \det(A_{1,j})$ où $A_{1,j}$ est la matrice obtenue en supprimant la $1^{\text{ère}}$ ligne et la $j^{\text{ème}}$ colonne de $A$.

### 2. Propriétés fondamentales
* $\det(AB) = \det(A)\det(B)$
* $A$ est inversible $\iff \det(A) \neq 0$
* Le déterminant est invariant par transposition : $\det(A^T) = \det(A)$.
* Des opérations élémentaires sur les lignes ou colonnes modifient le déterminant ainsi :
  - L'échange de deux lignes/colonnes multiplie le déterminant par $-1$.
  - L'addition à une ligne/colonne d'un multiple d'une autre ne change pas le déterminant.
  - La multiplication d'une ligne/colonne par un scalaire $\lambda$ multiplie le déterminant par $\lambda$.