---
title: 'Cours : Probabilités sur un univers fini'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Probabilités sur un univers fini
Niveau: ** MPSI (Première année)  
**Matière :** Mathématiques  

---

## 1. Cadre probabiliste : Espaces probabilisés finis

### A. Vocabulaire des événements
Soit $\Omega$ un ensemble non vide, appelé **univers**. Ses éléments $\omega$ sont appelés des **issues** ou des **événements élémentaires**.

*   Un **événement** est une partie de $\Omega$ (c'est-à-dire un élément de $\mathcal{P}(\Omega)$).
*   L'événement certain est $\Omega$, l'événement impossible est $\emptyset$.
*   Deux événements $A$ et $B$ sont **incompatibles** (ou disjoints) si $A \cap B = \emptyset$.
*   Le système $(A_i)_{i \in I}$ est un **système complet d'événements** si les $A_i$ sont deux à deux incompatibles et de union égale à $\Omega$ :
    $$\forall (i, j) \in I^2, \; i \neq j \implies A_i \cap A_j = \emptyset \quad \text{et} \quad \bigcup_{i \in I} A_i = \Omega$$

### B. Espace probabilisé
Dans tout ce chapitre, l'univers $\Omega$ est supposé **fini**.

> **Définition (Probabilité) :**  
> Une application $\mathbb{P} : \mathcal{P}(\Omega) \to [0, 1]$ est une **probabilité** sur $\Omega$ si :
> 1. $\mathbb{P}(\Omega) = 1$.
> 2. Pour toute famille finie d'événements $(A_i)_{1 \le i \le n}$ deux à deux incompatibles :
>    $$\mathbb{P}\left(\bigcup_{i=1}^n A_i\right) = \sum_{i=1}^n \mathbb{P}(A_i)$$

> **Proposition (Propriétés fondamentales) :**  
> Soit $\mathbb{P}$ une probabilité sur $(\Omega, \mathcal{P}(\Omega))$.
> *   $\mathbb{P}(\emptyset) = 0$.
> *   Pour tout événement $A$, $\mathbb{P}(A^c) = 1 - \mathbb{P}(A)$.
> *   Si $A \subset B$, alors $\mathbb{P}(A) \le \mathbb{P}(B)$ et $\mathbb{P}(B \setminus A) = \mathbb{P}(B) - \mathbb{P}(A)$.
> *   *(Formule du crible de Poincaré pour deux événements)* : 
>     $$\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)$$

---

## 2. Équiprobabilité

> **Définition :**  
> On dit qu'il y a **équiprobabilité** sur $\Omega$ si tous les événements élémentaires ont la même probabilité. Si $\Omega = \{\omega_1, \omega_2, \dots, \omega_n\}$, alors :
> $$\forall i \in \{1, \dots, n\}, \; \mathbb{P}(\{\omega_i\}) = \frac{1}{n}$$

> **Proposition :**  
> Dans le cas d'une situation d'équiprobabilité, pour tout événement $A$ :
> $$\mathbb{P}(A) = \frac{\text{card}(A)}{\text{card}(\Omega)} = \frac{\text{Nombre de cas favorables}}{\text{Nombre de cas possibles}}$$

---

## 3. Probabilités conditionnelles et indépendance

### A. Probabilités conditionnelles
Soit $B$ un événement tel que $\mathbb{P}(B) > 0$.

> **Définition :**  
> La **probabilité conditionnelle** sachant $B$ est l'application $\mathbb{P}(\cdot \mid B) : \mathcal{P}(\Omega) \to [0, 1]$ définie par :
> $$\forall A \in \mathcal{P}(\Omega), \; \mathbb{P}(A \mid B) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)}$$

> **Théorème (Formule des probabilités composées) :**  
> Si $A_1, A_2, \dots, A_n$ sont des événements tels que $\mathbb{P}(A_1 \cap A_2 \cap \dots \cap A_{n-1}) > 0$, alors :
> $$\mathbb{P}(A_1 \cap A_2 \cap \dots \cap A_n) = \mathbb{P}(A_1) \mathbb{P}(A_2 \mid A_1) \mathbb{P}(A_3 \mid A_1 \cap A_2) \dots \mathbb{P}(A_n \mid A_1 \cap \dots \cap A_{n-1})$$

### B. Formules fondamentales
> **Théorème (Formule des probabilités totales) :**  
> Soit $(A_i)_{i \in I}$ un système complet d'événements de $\Omega$ tel que, pour tout $i$, $\mathbb{P}(A_i) > 0$. Alors, pour tout événement $B$ :
> $$\mathbb{P}(B) = \sum_{i \in I} \mathbb{P}(B \mid A_i)\mathbb{P}(A_i)$$

> **Théorème (Formule de Bayes) :**  
> Soit $(A_i)_{i \in I}$ un système complet d'événements de $\Omega$ constitués d'événements de probabilités non nulles. Soit $B$ un événement tel que $\mathbb{P}(B) > 0$. Alors, pour tout $j \in I$ :
> $$\mathbb{P}(A_j \mid B) = \frac{\mathbb{P}(B \mid A_j)\mathbb{P}(A_j)}{\sum_{i \in I} \mathbb{P}(B \mid A_i)\mathbb{P}(A_i)}$$

### C. Indépendance d'événements
> **Définition :**  
> *   Deux événements $A$ et $B$ sont **indépendants** si :
>     $$\mathbb{P}(A \cap B) = \mathbb{P}(A)\mathbb{P}(B)$$
> *   Une famille finie d'événements $(A_i)_{i \in I}$ est dite **indépendante** si, pour toute sous-famille finie d'indices distincts $(i_1, i_2, \dots, i_k)$, on a :
>     $$\mathbb{P}(A_{i_1} \cap A_{i_2} \cap \dots \cap A_{i_k}) = \prod_{j=1}^k \mathbb{P}(A_{i_j})$$

---

## 4. Variables aléatoires finies

### A. Généralités
> **Définition :**  
> Une **variable aléatoire** (v.a.) $X$ sur $(\Omega, \mathbb{P})$ est une application de $\Omega$ dans $\mathbb{R}$.  
> L'ensemble des valeurs prises par $X$ est noté $X(\Omega) = \{x_1, x_2, \dots, x_m\}$ (qui est fini).

*   L'événement « $X = x$ » est noté $\{X = x\} = \{\omega \in \Omega \mid X(\omega) = x\} = X^{-1}(\{x\})$.
*   La **loi de probabilité** de $X$ est déterminée par la donnée des $\mathbb{P}(X = x_i)$ pour tout $x_i \in X(\Omega)$.

### B. Espérance et Variance
> **Définition (Espérance) :**  
> L'**espérance** d'une variable aléatoire $X$ (notée $\mathbb{E}(X)$) est définie par :
> $$\mathbb{E}(X) = \sum_{x \in X(\Omega)} x \cdot \mathbb{P}(X = x) = \sum_{\omega \in \Omega} X(\omega)\mathbb{P}(\{\omega\})$$

> **Théorème (Linéarité de l'espérance) :**  
> L'espérance est un opérateur linéaire. Pour toutes variables aléatoires $X$ et $Y$ sur $(\Omega, \mathbb{P})$ et tous réels $\alpha, \beta$ :
> $$\mathbb{E}(\alpha X + \beta Y) = \alpha \mathbb{E}(X) + \beta \mathbb{E}(Y)$$

> **Définition (Variance et Écart-type) :**  
> *   La **variance** de $X$, notée $\mathbb{V}(X)$, est définie (si elle existe, ce qui est toujours le cas sur un univers fini) par :
>     $$\mathbb{V}(X) = \mathbb{E}\left((X - \mathbb{E}(X))^2\right)$$
> *   L'**écart-type** est $\sigma(X) = \sqrt{\mathbb{V}(X)}$.

> **Proposition (Formule de König-Huygens) :**  
> $$\mathbb{V}(X) = \mathbb{E}(X^2) - (\mathbb{E}(X))^2$$

> **Proposition :**  
> Pour tous réels $a$ et $b$ :
> $$\mathbb{V}(aX + b) = a^2 \mathbb{V}(X)$$

### C. Indépendance de variables aléatoires
> **Définition :**  
> Deux variables aléatoires $X$ et $Y$ sont dites **indépendantes** si :
> $$\forall (x, y) \in X(\Omega) \times Y(\Omega), \; \mathbb{P}((X = x) \cap (Y = y)) = \mathbb{P}(X = x) \times \mathbb{P}(Y = y)$$

> **Théorème :**  
> Si $X$ et $Y$ sont deux variables aléatoires indépendantes, alors :
> $$\mathbb{E}(XY) = \mathbb{E}(X)\mathbb{E}(Y)$$
> *Attention : la réciproque est fausse.*

> **Corollaire :**  
> Si $X$ et $Y$ sont indépendantes, alors :
> $$\mathbb{V}(X + Y) = \mathbb{V}(X) + \mathbb{V}(Y)$$

---

## 5. Lois usuelles

### A. Loi de Bernoulli $\mathcal{mathcal{B}}(p)$
Modélise une expérience à deux issues (succès/échec) avec $\mathbb{P}(\text{succès}) = p$ ($p \in [0, 1]$).  
*   $X(\Omega) = \{0, 1\}$
*   $\mathbb{P}(X = 1) = p$ et $\mathbb{P}(X = 0) = 1-p$
*   $\mathbb{E}(X) = p$
*   $\mathbb{V}(X) = p(1-p)$

### B. Loi binomiale $\mathcal{B}(n, p)$
Modélise le nombre de succès lors de la répétition de $n$ expériences de Bernoulli indépendantes de paramètre $p$.  
*   $X(\Omega) = \{0, 1, \dots, n\}$
*   $\forall k \in \{0, 1, \dots, n\}, \; \mathbb{P}(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$
*   $\mathbb{E}(X) = np$
*   $\mathbb{V}(X) = np(1-p)$  
*(Remarque : Une v.a. de loi $\mathcal{B}(n, p)$ s'écrit comme la somme de $n$ variables de Bernoulli indépendantes de même paramètre $p$)*.

### C. Loi uniforme sur $\{1, \dots, n\}$
Modélise le choix équiprobable parmi $n$ entiers.  
*   $X(\Omega) = \{1, 2, \dots, n\}$
*   $\forall k \in \{1, \dots, n\}, \; \mathbb{P}(X = k) = \frac{1}{n}$
*   $\mathbb{E}(X) = \frac{n+1}{2}$
*   $\mathbb{V}(X) = \frac{n^2 - 1}{12}$