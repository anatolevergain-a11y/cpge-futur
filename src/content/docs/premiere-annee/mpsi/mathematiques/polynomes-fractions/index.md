---
title: 'Cours : Polynômes et Fractions rationnelles'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Cours de Mathématiques - MPSI
## Chapitre : Polynômes et Fractions rationnelles

---

### Introduction et notations

Soit $\mathbb{K}$ un corps commutatif (dans le cadre de la MPSI, $\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$). 
On note $\mathbb{K}[X]$ l'ensemble des polynômes à une indéterminée $X$ et à coefficients dans $\mathbb{K}$.

---

## 1. Anneau des polynômes $\mathbb{K}[X]$

### A. Définitions fondamentales

Un polynôme $P$ est une expression de la forme :
$$P(X) = \sum_{k=0}^{n} a_k X^k = a_n X^n + a_{n-1} X^{n-1} + \dots + a_1 X + a_0$$
où $n \in \mathbb{N}$ et les coefficients $a_0, a_1, \dots, a_n$ appartiennent à $\mathbb{K}$.

*   **Degré :** Si $P \neq 0$ et $a_n \neq 0$, le **degré** de $P$, noté $\deg(P)$, est $n$. Par convention, le polynôme nul $0$ a pour degré $-\infty$.
*   **Coefficient dominant :** C'est le coefficient $a_n$ associé au plus grand terme non nul. Si $a_n = 1$, le polynôme est dit **unitaire**.
*   **Ensemble $\mathbb{K}_n[X]$ :** Pour $n \in \mathbb{N}$, $\mathbb{K}_n[X]$ désigne l'ensemble des polynômes de degré inférieur ou égal à $n$,auquel on ajoute le polynôme nul. C'est un $\mathbb{K}$-espace vectoriel de dimension $n+1$.

---

### B. Opérations et propriétés algébriques

L'ensemble $\mathbb{K}[X]$ muni de l'addition et de la multiplication usuelles des polynômes forme un **anneau commutatif intègre**.

> **Théorème (Règles sur le degré) :**
> Soient $P$ et $Q$ deux polynômes de $\mathbb{K}[X]$.
> 1. $\deg(P + Q) \leq \max(\deg P, \deg Q)$, avec égalité si $\deg P \neq \deg Q$.
> 2. $\deg(P \times Q) = \deg P + \deg Q$ (propriété liée à l'intégrité de $\mathbb{K}[X]$).
> 3. $\deg(\lambda P) = \deg P$ pour tout $\lambda \in \mathbb{K} \setminus \{0\}$.

---

## 2. Division euclidienne et divisibilité

### A. Division euclidienne

> **Théorème (Division euclidienne dans $\mathbb{K}[X]$) :**
> Soient $A, B \in \mathbb{K}[X]$ avec $B \neq 0$. 
> Il existe un unique couple $(Q, R) de $\mathbb{K}[X]^2$ tel que :
> $$A = BQ + R \quad \text{avec} \quad \deg(R) < \deg(B)$$
> * $Q$ est le **quotient** de la division euclidienne de $A$ par $B$.
> * $R$ est le **reste**.

### B. Divisibilité et Idéaux

On dit que $B$ divise $A$ (noté $B \mid A$) s'il existe $Q \in \mathbb{K}[X]$ tel que $A = BQ$.

> **Proposition (Idéaux de $\mathbb{K}[X]$) :**
> Tout idéal de $\mathbb{K}[X]$ est principal, c'est-à-dire engendré par un unique polynôme.

---

## 3. Racines et factorisation

### A. Racines d'un polynôme

Soit $P \in \mathbb{K}[X]$ et $\alpha \in \mathbb{K}$. On dit que $\alpha$ est une **racine** de $P$ si $P(\alpha) = 0$.

> **Théorème (Caractérisation algébrique des racines) :**
> $\alpha$ est racine de $P$ si et seulement si $(X - \alpha)$ divise $P$.

> **Définition (Ordre de multiplicité) :**
> Soit $k \in \mathbb{N}^*$. On dit que $\alpha$ est une **racine d'ordre de multiplicité $k$** de $P$ si $(X - \alpha)^k$ divise $P$ et $(X - \alpha)^{k+1}$ ne divise pas $P$. 
> Si $k=1$, la racine est dite **simple**, si $k \geq 2$, elle est **multiple**.

> **Proposition (Critère différentiel) :**
> $\alpha$ est une racine d'ordre $k$ de $P$ si et seulement si :
> $$P(\alpha) = P'(\alpha) = P''(\alpha) = \dots = P^{(k-1)}(\alpha) = 0 \quad \text{et} \quad P^{(k)}(\alpha) \neq 0$$

---

### B. Théorème de d'Alembert-Gauss et Scission

> **Théorème (Admis - d'Alembert-Gauss) :**
> Le corps $\mathbb{C}$ des nombres complexes est **algébriquement clos** : tout polynôme non constant de $\mathbb{C}[X]$ admet au moins une racine dans $\mathbb{C}$.

> **Corollaire (Polynômes scindés sur $\mathbb{C}$) :**
> Tout polynôme $P \in \mathbb{C}[X]$ de degré $n \geq 1$ s'écrit de manière unique sous la forme :
> $$P(X) = a_n \prod_{k=1}^{r} (X - \alpha_k)^{m_k}$$
> où $a_n$ est le coefficient dominant, $\alpha_1, \dots, \alpha_r$ sont les racines distinctes de $P$ d'ordres respectifs $m_1, \dots, m_r$, avec $\sum_{k=1}^r m_k = n$.

*   **Cas de $\mathbb{R}[X]$ :** Les racines non réelles d'un polynôme à coefficients réels s'apparaient par couples conjugués. Tout polynôme de $\mathbb{R}[X]$ se factorise en un produit de facteurs de degré 1 et de facteurs de degré 2 à discriminant strictement négatif.

---

## 4. Fractions rationnelles

### A. Définitions

Une **fraction rationnelle** sur $\mathbb{K}$ est un élément du corps des fractions de l'anneau $\mathbb{K}[X]$, noté $\mathbb{K}(X)$. C'est le quotient formel de deux polynômes :
$$F = \frac{A}{B} \quad \text{avec} \quad (A, B) \in \mathbb{K}[X] \times (\mathbb{K}[X] \setminus \{0\})$$

*   **Degré d'une fraction :** $\deg(A/B) = \deg(A) - \deg(B)$.
*   **Partie entière :** Par division euclidienne de $A$ par $B$, $A = BQ + R$ avec $\deg(R) < \deg(B)$, on a :
    $$F = Q + \frac{R}{B}$$
    où $Q$ est la **partie entière** de la fraction rationnelle $F$.

---

### B. Décomposition en éléments simples (DES)

> **Théorème (Existence et unicité de la DES sur $\mathbb{C}$ et $\mathbb{R}$) :**
> Soit $F = \frac{A}{B}$ une fraction rationnelle dont le dénominateur se factorise sous la forme $B(X) = a_n \prod_{k=1}^r (X - \alpha_k)^{m_k}$ (dans $\mathbb{C}[X]$). 
> Alors $F$ s'écrit de manière unique comme la somme de sa partie entière et d'éléments simples de la forme :
> $$\frac{a_{i, j}}{(X - \alpha_i)^j}$$
> avec $1 \leq i \leq r$ et $1 \leq j \leq m_i$.

---

## 5. Méthodes et Pièges à éviter

### A. Méthodes incontournables
1. **Identification des coefficients :** Pour déterminer des paramètres réels ou complexes dans une décomposition, on peut identifier les coefficients de mêmes degrés après réduction au même dénominateur, ou évaluer la relation en des valeurs particulières judicieusement choisies.
2. **Utilisation de la parité ou de la conjugaison :** Pour des fractions à coefficients réels, les coefficients de la DES associés à des pôles conjugués sont eux-mêmes conjugués.
3. **Astuce pour les pôles simples :** Si $F = \frac{A}{B}$ et $\alpha$ est un pôle simple, le coefficient associé à $\frac{1}{X-\alpha}$ est donné par $\frac{A(\alpha)}{B'(\alpha)}$.

### B. Pièges classiques
* **Attention au degré du reste :** Dans la division euclidienne, le reste $R$ doit *strictement* avoir un degré inférieur à celui de $B$. Une erreur fréquente est d'oublier cette condition.
* **Oubli de la partie entière :** Ne jamais oublier de calculer la partie entière $Q$ avant d'entamer une décomposition en éléments simples si $\deg(A) \geq \deg(B)$.
* **Confondre $\mathbb{R}[X]$ et $\mathbb{C}[X]$ :** Sur $\mathbb{R}[X]$, les éléments simples associés aux racines non réelles doivent être de la forme $\frac{aX+b}{X^2+pX+q}$ et non pas éclater en facteurs de degré 1 complexes.