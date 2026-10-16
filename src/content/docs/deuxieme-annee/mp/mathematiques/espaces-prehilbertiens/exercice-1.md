---
title: 'Exercice 1 : Procédé de Gram-Schmidt'
description: 'Problème d entraînement type concours pour MP.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de l'analyse numérique et du traitement du signal, l'orthogonalisation de familles de fonctions est une étape fondamentale pour la résolution approchée d'équations aux dérivées partielles ou le filtrage optimal. On s'intéresse dans ce problème à une modélisation simplifiée de l'approximation de signaux par projection sur des sous-espaces de dimension finie.

Soit $E = \mathbb{R}_n[X]$ l'espace vectoriel des polynômes à coefficients réels de degré inférieur ou égal à $n$. On munit $E$ du produit scalaire canonique induit par l'intégration sur un intervalle de mesure de référence :
$$\forall (P, Q) \in E^2, \quad \langle P, Q \rangle = \int_{-1}^{1} P(t)Q(t) \, w(t) \, dt$$
où $w : ]-1, 1[ \to \mathbb{R}_+^*$ est une fonction poids continue strictement positive.

Dans les applications industrielles (par exemple en théorie du contrôle ou en dynamique des structures), l'utilisation d'une base non orthogonale pour représenter des grandeurs physiques (température, déplacements) conduit à des matrices de Gram mal conditionnées, entraînant des instabilités numériques majeures lors de l'inversion des systèmes linéaires associés. Le procédé de Gram-Schmidt permet de remédier théoriquement à ce problème en construisant une base orthogonale adaptée.

---

### ❓ Questions progressives

1. **Rappels et mise en place**
   Montrer que l'application $\langle \cdot, \cdot \rangle$ définie ci-dessus est bien un produit scalaire sur $E$.

2. **Le procédé de Gram-Schmidt abstrait**
   Soit $(e_0, e_1, \dots, e_n)$ une base de $E$. Expliciter la construction par récurrence d'une base orthogonal $(\varepsilon_0, \varepsilon_1, \dots, \varepsilon_n)$ de $E$ telle que, pour tout $k \in \llbracket 0, n \rrbracket$, l'espace engendré par $(\varepsilon_0, \dots, \varepsilon_k)$ soit égal à celui engendré par $(e_0, \dots, e_k)$.

3. **Application aux polynômes de Legendre**
   On choisit $w(t) = 1$ et la base monômienne $(e_k)_{0 \le k \le n}$ définie par $e_k : t \mapsto t^k$. 
   * a) Calculer la famille orthogonale $(\varepsilon_0, \varepsilon_1, \varepsilon_2)$ associée par le procédé de Gram-Schmidt.
   * b) Normaliser cette famille pour obtenir une base orthonormée $(P_0, P_1, P_2)$.

4. **Analyse numérique et limites du modèle**
   Dans le cadre d'un calcul scientifique mené sur une architecture informatique en virgule flottante (précision machine $\epsilon_{\text{mach}} \approx 10^{-16}$), la mise en œuvre naïve du procédé de Gram-Schmidt décrit à la question 2 souffre d'une dégradation de l'orthogonalité due à l'accumulation des erreurs d'arrondi.
   * a) Expliquer qualitativement pourquoi l'orthogonalité de la famille $(\varepsilon_k)$ peut être gravement compromise lorsque le degré $n$ devient grand ($n > 50$).
   * b) Quelle alternative algorithmique plus stable (souvent vue en option ou en TP d'informatique) utilise-t-on en pratique pour pallier ce défaut dans l'industrie ?

---

### 💡 Pistes & Indications

- **Q1 :** Vérifier les trois axiomes d'un produit scalaire : bilinéarité, symétrie, et positivité (en utilisant la continuité de la fonction $t \mapsto P(t)^2 w(t)$).
- **Q2 :** Utiliser un raisonnement par récurrence en posant $\varepsilon_k = e_k - \sum_{i=0}^{k-1} \frac{\langle e_k, \varepsilon_i \rangle}{\|\varepsilon_i\|^2} \varepsilon_i$.
- **Q3 :** Calculer les intégrales successives $\int_{-1}^{1} t^k \, dt$ pour $k \in \llbracket 0, 4 \rrbracket$. Attention à la parité des fonctions intégrées.
- **Q4 :** Penser à la notion de perte de chiffres significatifs lors de soustractions de nombres quasi-égaux dans les calculs successifs de projections.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Produit scalaire sur $E$
L'application $\langle \cdot, \cdot \rangle$ est définie par une intégrale.
- **Symétrie et bilinéarité :** Elles découlent directement de la symétrie et de la linéarité de l'intégrale ainsi que du produit dans $\mathbb{R}$.
- **Positivité :** Pour tout $P \in E$, $t \mapsto [P(t)]^2 w(t)$ est continue et positive sur $[-1, 1]$. Son intégrale est donc positive.
- **Caractère défini :** Si $\langle P, P \rangle = \int_{-1}^{1} [P(t)]^2 w(t) \, dt = 0$, comme la fonction intégrée est continue, positive et que $w$ est strictement positive sur $]-1, 1[$, la fonction $t \mapsto P(t)^2$ doit être nulle partout sur $[-1, 1]$. Ainsi, $Ponaut$ admet une infinité de racines, ce qui implique $P = 0$ (car c'est un polynôme de degré $\le n$).
L'application est donc un produit scalaire.

#### 2. Procédé de Gram-Schmidt
On construit la famille $(\varepsilon_k)_{0 \le k \le n}$ par récurrence :
- Pour $k = 0$ : $\varepsilon_0 = e_0$.
- Supposons la famille $(\varepsilon_0, \dots, \varepsilon_{k-1})$ construite telle que $\text{Vect}(\varepsilon_0, \dots, \varepsilon_{i}) = \text{Vect}(e_0, \dots, e_{i})$ pour tout $i < k$ et que les $\varepsilon_i$ sont deux à deux orthogonaux.
- On pose :
  $$\varepsilon_k = e_k - \sum_{i=0}^{k-1} \frac{\langle e_k, \varepsilon_i \rangle}{\|\varepsilon_i\|^2} \varepsilon_i$$
Par construction, $\varepsilon_k$ est la différence de $e_k$ et d'une combinaison linéaire de $(\varepsilon_0, \dots, \varepsilon_{k-1})$, donc de $(e_0, \dots, e_{k-1})$. Ainsi, $\text{Vect}(\varepsilon_0, \dots, \varepsilon_k) = \text{Vect}(e_0, \dots, e_k)$. De plus, pour tout $j \in \llbracket 0, k-1 \rrbracket$ :
$$\langle \varepsilon_k, \varepsilon_j \rangle = \langle e_k, \varepsilon_j \rangle - \sum_{i=0}^{k-1} \frac{\langle e_k, \varepsilon_i \rangle}{\|\varepsilon_i\|^2} \langle \varepsilon_i, \varepsilon_j \rangle = \langle e_k, \varepsilon_j \rangle - \frac{\langle e_k, \varepsilon_j \rangle}{\|\varepsilon_j\|^2} \|\varepsilon_j\|^2 = 0$$
La famille est bien orthogonalisée.

#### 3. Application aux polynômes de Legendre ($w(t) = 1$)
* **a) Calcul de $(\varepsilon_0, \varepsilon_1, \varepsilon_2)$ :**
  - $\varepsilon_0 = e_0 = 1$. $\|\varepsilon_0\|^2 = \int_{-1}^{1} 1 \, dt = 2$.
  - $\varepsilon_1 = e_1 - \frac{\langle e_1, \varepsilon_0 \rangle}{\|\varepsilon_0\|^2} \varepsilon_0$. 
    $\langle e_1, \varepsilon_0 \rangle = \int_{-1}^{1} t \, dt = 0$ (fonction impaire sur un intervalle symétrique). 
    Donc $\varepsilon_1(t) = t$. $\|\varepsilon_1\|^2 = \int_{-1}^{1} t^2 \, dt = \frac{2}{3}$.
  - $\varepsilon_2 = e_2 - \frac{\langle e_2, \varepsilon_0 \rangle}{\|\varepsilon_0\|^2} \varepsilon_0 - \frac{\langle e_2, \varepsilon_1 \rangle}{\|\varepsilon_1\|^2} \varepsilon_1$.
    $\langle e_2, \varepsilon_0 \rangle = \int_{-1}^{1} t^2 \, dt = \frac{2}{3}$.
    $\langle e_2, \varepsilon_1 \rangle = \int_{-1}^{1} t^3 \, dt = 0$ (impaire).
    Donc $\varepsilon_2(t) = t^2 - \frac{2/3}{2} \cdot 1 = t^2 - \frac{1}{3}$.

* **b) Normalisation :**
  Calculons $\|\varepsilon_2\|^2 = \int_{-1}^{1} \left(t^2 - \frac{1}{3}\right)^2 dt = \int_{-1}^{1} \left(t^4 - \frac{2}{3}t^2 + \frac{1}{9}\right) dt = \left[ \frac{t^5}{5} - \frac{2t^3}{9} + \frac{t}{9} \right]_{-1}^{1} = 2 \left( \frac{1}{5} - \frac{2}{9} + \frac{1}{9} \right) = 2 \left( \frac{1}{5} - \frac{1}{9} \right) = 2 \left( \frac{4}{45} \right) = \frac{8}{45}$.
  Ainsi, la base orthonormée $(P_0, P_1, P_2)$ est :
  $$P_0(t) = \frac{1}{\sqrt{2}}, \quad P_1(t) = \sqrt{\frac{3}{2}} t, \quad P_2(t) = \sqrt{\frac{45}{8}} \left(t^2 - \frac{1}{3}\right)$$

#### 4. Analyse critique et limites du modèle
* **a) Instabilité numérique :** Le procédé de Gram-Schmidt classique (dit "standard") effectue des soustractions successives. Lorsque le degré $n$ augmente, les monômes $(1, t, \dots, t^n)$ deviennent de plus en plus colinéaires au sens de la précision machine (la matrice de Gram associée devient mal conditionnée, son conditionnement explose exponentiellement). Les erreurs d'arrondi s'accumulent au fil des récursions, détruisant l'orthogonalité des vecteurs calculés.
* **b) Alternative industrielle :** En calcul scientifique, on lui préfère systématiquement le **procédé de Gram-Schmidt modifié (MGS)**, qui réorganise l'ordre des calculs de projection, ou mieux encore, l'utilisation des **transformations de Householder** ou des **rotations de Givens** (basées sur des factorisations $QR$ par matrices unitaires/orthogonales), garantissant une stabilité numérique bien supérieure face aux contraintes des ordinateurs.