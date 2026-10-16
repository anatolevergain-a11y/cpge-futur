---
title: 'Cours : Réduction, Topologie et Probabilités MPI'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Réduction, Topologie et Probabilités MPI
Niveau: ** Deuxième année (CPGE MPI)  
**Matière :** Mathématiques  

---

## 1. Réduction des Endomorphismes et des Matrices

Soit $K$ un corps ($\mathbb{R}$ ou $\mathbb{C}$), $E$ un $K$-espace vectoriel de dimension finie $n$.

### 1.1. Polynômes d'endomorphismes et de matrices
* **Définition :** Pour $P = \sum_{k=0}^{d} a_k X^k \in K[X]$ et $u \in \mathcal{L}(E)$, on définit l'endomorphisme $P(u) = \sum_{k=0}^{d} a_k u^k$ (avec $u^0 = \text{id}_E$).
* **Noyau et Image :** Le polynôme minimal $\pi_u$ est l'unique polynôme unitaire générateur de l'idéal $\{P \in K[X] \mid P(u) = 0\}$.
* **Théorème de Cayley-Hamilton :** Si $\chi_u$ désigne le polynôme caractéristique de $u$ (défini par $\chi_u(X) = \det(X\text{id}_E - u)$), alors $\chi_u(u) = 0$.

### 1.2. Dunford et Décomposition de Jordan
* **Théorème de décomposition de Dunford :** Soit $u \in \mathcal{L}(E)$ dont le polynôme caractéristique est scindé sur $K$. Il existe un unique couple $(d, n) \in \mathcal{L}(E)^2$ tel que :
  1. $u = d + n$
  2. $d$ est diagonalisable et $n$ est nilpotent
  3. $d$ et $n$ commutent ($dn = nd$)
  *De plus, $d$ et $n$ sont des polynômes en $u$.*

---

## 2. Topologie des Espaces Vectoriels Normés (EVN)

Soit $(E, \|\cdot\|)$ un EVN sur $\mathbb{K}$ ($\mathbb{R}$ ou $\mathbb{C}$).

### 2.1. Topologie générale et dimension finie
* **Équivalence des normes :** En dimension finie, toutes les normes sont équivalentes. C'est-à-dire que pour toutes normes $\|\cdot\|_1$ et $\|\cdot\|_2$ sur $E$, il existe des constantes $c, C > 0$ telles que :
  $$\forall x \in E, \quad c\|x\|_1 \le \|x\|_2 \le C\|x\|_1$$
* **Conséquence fondamentale :** Toute application linéaire entre deux EVN en dimension finie est continue. Les notions de compacité (parties fermées et bornées) coïncident en dimension finie (Théorème de Borel-Lebesgue).

### 2.2. Espaces préhilbertiens et hilbertiens
* **Produit scalaire :** Application $\langle \cdot, \cdot \rangle : E \times E \to \mathbb{K}$ sesquilinéaire (ou bilinéaire si $\mathbb{K}=\mathbb{R}$), hermitienne (ou symétrique), définie positive.
* **Inégalité de Cauchy-Schwarz :** 
  $$|\langle x, y \rangle| \le \|x\| \|y\|$$
* **Théorème de projection orthogonale :** Soit $F$ un sous-espace vectoriel *fermé* d'un espace hilbertien $H$. Alors $H = F \oplus F^\perp$. Pour tout $x \in H$, il existe un unique $p(x) \in F$ tel que $\|x - p(x)\} = \inf_{y \in F} \|x - y\|$.

---

## 3. Probabilités (Cadre Général et Discret/Continu)

### 3.1. Espaces probabilisés
* **Définition :** Un espace probabilisé est un triplet $(\Omega, \mathcal{A}, \mathbb{P})$ où $\Omega$ est un ensemble, $\mathcal{A}$ une tribu (ou $\sigma$-algèbre) sur $\Omega$, et $\mathbb{P}$ une mesure de probabilité sur $(\Omega, \mathcal{A})$.
* **Système complet d'événements :** Une suite $(A_n)_{n \in \mathbb{N}}$ d'événements est un système complet si les $A_n$ sont deux à deux disjoints et $\bigcup_{n \in \mathbb{N}} A_n = \Omega$.
* **Formule des probabilités totales :** Si $(A_n)_{n \in \mathbb{N}}$ est un système complet d'événements de probabilités non nulles, alors pour tout événement $B$ :
  $$\mathbb{P}(B) = \sum_{n=0}^{+\infty} \mathbb{P}(B \mid A_n)\mathbb{P}(A_n)$$

### 3.2. Variables aléatoires et Espérance
* **Variable aléatoire (v.a.) réelle :** Application $X : \Omega \to \mathbb{R}$ $\mathcal{A}-\mathcal{B}(\mathbb{R})$-mesurable.
* **Espérance :** Une v.a. $X$ est intégrable (ou d'espérance finie) si $\int_\Omega |X| d\mathbb{P} < +\infty$. On note $\mathbb{E}[X]$ son espérance.
* **Inégalité de Bienaymé-Tchebychev :** Si $X$ admet un moment d'ordre 2 (variance $\mathbb{V}(X)$ finie), alors pour tout $\epsilon > 0$ :
  $$\mathbb{P}(|X - \mathbb{E}[X]| \ge \epsilon) \le \frac{\mathbb{V}(X)}{\epsilon^2}$$

### 3.3. Convergence et Théorèmes Limites
* **Convergence en probabilité :** Une suite de v.a. $(X_n)_{n \in \mathbb{N}}$ converge en probabilité vers une v.a. $X$ si :
  $$\forall \epsilon > 0, \quad \lim_{n \to +\infty} \mathbb{P}(|X_n - X| \ge \epsilon) = 0$$
* **Loi Faible des Grands Nombres :** Soit $(X_n)_{n \ge 1}$ une suite de v.a. i.i.d. admettant une espérance $m$ et une variance $\sigma^2$ finies. En posant $S_n = \sum_{k=1}^n X_k$, la suite $\left(\frac{S_n}{n}\right)_{n \ge 1}$ converge en probabilité vers $m$.
* **Théorème de la Limite Centrale (TLC) :** Soit $(X_n)_{n \ge 1}$ une suite de v.a. i.i.d. d'espérance $m$ et d'écart-type $\sigma > 0$. Alors la suite des variables centrées réduites $Z_n = \frac{S_n - n m}{\sigma \sqrt{n}}$ converge en loi vers une variable aléatoire suivant la loi normale centrée réduite $\mathcal{N}(0,1)$. C'est-à-dire :
  $$\forall x \in \mathbb{R}, \quad \lim_{n \to +\infty} \mathbb{P}(Z_n \le x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{x} e^{-t^2 / 2} \, dt$$