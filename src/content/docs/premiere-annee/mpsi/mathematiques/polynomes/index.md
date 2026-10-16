---
title: 'Cours : Polynômes et fractions rationnelles'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Polynômes et fractions rationnelles (MPSI)

## 1. Anneau des polynômes $\mathbb{K}[X]$

Soit $\mathbb{K}$ un sous-corps de $\mathbb{C}$ (généralement $\mathbb{R}$ ou $\mathbb{C}$).

### Définitions fondamentales
*   **Polynôme :** Une suite presque nulle d'éléments de $\mathbb{K}$, notée formellement $P = \sum_{k=0}^n a_k X^k$. L'ensemble de ces polynômes est noté $\mathbb{K}[X]$.
*   **Degré :** Si $P = \sum_{k=0}^n a_k X^k$ avec $a_n \neq 0$, le degré de $P$, noté $\deg(P)$, est $n$. Par convention, le polynôme nul $0$ a pour degré $-\infty$ et les polynômes non nuls constants ont pour degré $0$.
*   **Coefficient dominant :** $a_n$ (le coefficient de plus haut degré). Si $a_n = 1$, le polynôme est dit **unitaire**.

> **Théorème (Structure d'anneau et intégrité) :**
> $(\mathbb{K}[X], +, \times)$ est un anneau commutatif intégrent. De plus, pour tous $P, Q \in \mathbb{K}[X]$,
> $$\deg(P + Q) \leq \max(\deg(P), \deg(Q))$$
> $$\deg(PQ) = \deg(P) + \deg(Q) \quad (\text{avec la convention } -\infty + n = -\infty)$$

### Dérivation formelle
Pour $P = \sum_{k=0}^n a_k X^k$, le polynôme dérivé est $P' = \sum_{k=1}^n k a_k X^{k-1}$.
Les règles usuelles de dérivation (linéarité, produit, composée) s'appliquent dans $\mathbb{K}[X]$.
*   **Formule de Taylor pour les polynômes :** Si $\deg(P) \le n$, alors pour tout $a \in \mathbb{K}$ :
    $$P(X) = \sum_{k=0}^n \frac{P^{(k)}(a)}{k!} (X-a)^k$$

---

## 2. Divisibilité et division euclidienne dans $\mathbb{K}[X]$

### Divisibilité
Soient $A, B \in \mathbb{K}[X]$. On dit que $B$ divise $A$ (noté $B \mid A$) s'il existe $Q \in \mathbb{K}[X]$ tel que $A = BQ$.

> **Théorème (Division euclidienne) :**
> Soient $A, B \in \mathbb{K}[X]$ avec $B \neq 0$. Il existe un unique couple $(Q, R) de polynômes de \mathbb{K}[X]$ tel que :
> $$A = BQ + R \quad \text{et} \quad \deg(R) < \deg(B)$$

### Idéaux de $\mathbb{K}[X]$
> **Propriété :** Tout idéal de $\mathbb{K}[X]$ est principal. C'est-à-dire que pour tout idéal $\mathcal{I}$, il existe un unique polynôme unitaire $D$ tel que $\mathcal{I} = (D) = \{DC \mid C \in \mathbb{K}[X]\}$.

---

## 3. Racines et factorisation

### Racines et multiplicité
*   **Racine :** $\alpha \in \mathbb{K}$ est racine de $P$ si $P(\alpha) = 0$, ce qui équivaut à $(X-\alpha) \mid P$.
*   **Ordre de multiplicité :** $\alpha$ est racine d'ordre $m \ge 1$ de $P$ si $(X-\alpha)^m \mid P$ et $(X-\alpha)^{m+1} \nmid P$.
    *   Si $m=1$, la racine est **simple**.
    *   Si $m=2$, la racine est **double**.

> **Caractérisation analytique :**
> $\alpha$ est racine d'ordre $m$ de $P$ si et seulement si :
> $$P(\alpha) = P'(\alpha) = \dots = P^{(m-1)}(\alpha) = 0 \quad \text{et} \quad P^{(m)}(\alpha) \neq 0$$

> **Théorème (D'alembert-Gauss) :**
> Le corps $\mathbb{C}$ est algébriquement clos : tout polynôme non constant de $\mathbb{C}[X]$ admet au moins une racine dans $\mathbb{C}$.

### Factorisation dans $\mathbb{C}[X]$ et $\mathbb{R}[X]$
*   **Dans $\mathbb{C}[X]$ :** Tout polynôme $P \in \mathbb{C}[X]$ de degré $n \ge 1$ se factorise de manière unique (à l'ordre près des facteurs) sous la forme :
    $$P(X) = \lambda \prod_{k=1}^r (X - \alpha_k)^{m_k}$$
    où $\lambda \in \mathbb{C}^*$, les $\alpha_k$ sont les racines distinctes et $\sum m_k = n$.
*   **Dans $\mathbb{R}[X]$ :** Les racines non réelles d'un polynôme à coefficients réels viennent par paires conjuguées. Les polynômes irréductibles de $\mathbb{R}[X]$ sont les de degré $1$ et les de degré $2$ à discriminant strictement négatif.
    $$P(X) = \lambda \prod_{k=1}^r (X - a_k)^{m_k} \prod_{j=1}^s (X^2 + p_j X + q_j)^{n_j}$$
    avec $\Delta_j = p_j^2 - 4q_j < 0$.

---

## 4. Fractions rationnelles

Une fraction rationnelle sur $\mathbb{K}$ est un élément de $\mathbb{K}(X)$, quotient de deux polynômes $P/Q$ avec $Q \neq 0$.

### Partie entière
> **Théorème :** Soit $F = \frac{P}{Q} \in \mathbb{K}(X)$. Il existe un unique couple $(E, \frac{P_1}{Q})$ tel que :
> $$F = E + \frac{P_1}{Q}$$
> avec $E \in \mathbb{K}[X]$ (la **partie entière**) et $\deg(P_1) < \deg(Q)$.
> *Méthode :* On l'obtient en effectuant la division euclidienne de $P$ par $Q$ selon les puissances croissantes ou par division euclidienne usuelle si $\deg(P) \ge \deg(Q)$.

### Pôles et zéros
*   **Pôle :** Soit $F = P/Q$ sous forme irréductible. $\alpha$ est un pôle d'ordre $m$ de $F$ si $\alpha$ est racine d'ordre $m$ de $Q$.
*   **Valeur en un point :** Si $Q(\alpha) \neq 0$, $F(\alpha) = \frac{P(\alpha)}{Q(\alpha)}$.

---

## 5. Décomposition en éléments simples (DES)

### Théorème fondamental
Soit $F = \frac{P}{Q} \in \mathbb{K}(X)$ dont la décomposition du dénominateur dans $\mathbb{K}[X]$ est :
$$Q(X) = \lambda \prod_{k=1}^r (X - a_k)^{m_k}$$
Alors $F$ se décompose de manière **unique** sous la forme :
$$F(X) = E(X) + \sum_{k=1}^r \sum_{j=1}^{m_k} \frac{a_{k,j}}{(X - a_k)^j}$$
*(Dans le cas de $\mathbb{R}(X)$, on ajoute des termes de la forme $\frac{b_j X + c_j}{(X^2 + pX + q)^j}$ si les facteurs irréductibles sont de degré $2$).*

---

## Méthodes & Savoir-faire

1.  **Calculer le PGCD de deux polynômes :** Utiliser l'algorithme d'Euclide (succession de divisions euclidiennes). Le dernier reste non nul (rendu unitaire) est le PGCD.
2.  **Trouver une racine multiple :** Si l'on soupçonne qu'une racine $\alpha$ de $P$ est multiple, on vérifie si $P(\alpha) = 0$ et $P'(\alpha) = 0$. Plus généralement, $\alpha$ est racine commune de $P$ et $P'$.
3.  **Déterminer les coefficients d'un DES :**
    *   *Par identification :* Réduire au même dénominateur et identifier les coefficients de chaque puissance de $X$ (lourd si le degré est grand).
    *   *Par substitution (valeurs particulières) :* Évaluer la relation en des points judicieux (souvent non définis pour la fraction, on utilise les limites ou la continuité algébrique).
    *   *Par application d'opérateurs (ex: multiplication par $(X-a)^m$ et évaluation en $a$) :* Permet d'isoler directement le coefficient du pôle dominant.
    *   *Par parité / par passage à la limite en $\infty$ :* Permet de gagner des équations rapidement.

---

## Pièges à éviter (Attention !)

*   **Attention au corps de base ($\mathbb{R}$ vs $\mathbb{C}$) :** $X^2 + 1$ est irréductible dans $\mathbb{R}[X]$, mais se factorise en $(X-i)(X+i)$ dans $\mathbb{C}[X]$. La décomposition en éléments simples dépend crucialement du corps $\mathbb{K}$ choisi !
*   **Ne pas oublier la partie entière :** Dans un DES, si $\deg(P) \ge \deg(Q)$, la partie entière $E(X)$ **n'est pas nulle**. L'oublier fausse toute la décomposition.
*   **Forme irréductible :** Avant de chercher l'ordre d'un pôle pour le DES, assurez-vous que la fraction est bien sous forme irréductible (simplifiez les facteurs communs si $P$ et $Q$ ne sont pas premiers entre eux).