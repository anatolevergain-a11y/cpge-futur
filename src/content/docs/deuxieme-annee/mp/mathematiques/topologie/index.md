---
title: 'Cours : Topologie'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Topologie (MP - Deuxième année)

Cette fiche s'adresse aux étudiants de classes préparatoires scientifiques (filière MP). La rigueur y est de mise : les quantificateurs doivent être maniés avec une précision absolue.

---

## I. Espaces Vectoriels Normés (EVN)

### 1. Définitions fondamentales
Soit $E$ un $\mathbb{K}$-espace vectoriel ($\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$). 

**Définition (Norme) :** Une application $N : E \to \mathbb{R}$, notée $N(x) = \|x\|$, est une norme si elle vérifie :
1. **Séparation :** $\forall x \in E, \; \|x\| = 0 \implies x = 0_E$.
2. **Homogénéité :** $\forall \lambda \in \mathbb{K}, \; \forall x \in E, \; \|\lambda x\| = |\lambda| \|x\|$.
3. **Inégalité triangulaire :** $\forall (x,y) \in E^2, \; \|x+y\| \le \|x\| + \|y\|$.

**Définition (Distance induite) :** Tout EVN $(E, \|\cdot\|)$ est muni d'une distance canonique définie par $d(x,y) = \|x-y\|$.

### 2. Topologie associée à une norme
Soit $(E, \|\cdot\|)$ un EVN, $x_0 \in E$ et $r > 0$.

* **Boule ouverte :** $B(x_0, r) = \{x \in E \mid \|x - x_0\| < r\}$.
* **Boule fermée :** $B_f(x_0, r) = \{x \in E \mid \|x - x_0\| \le r\}$.
* **Sphère :** $S(x_0, r) = \{x \in E \mid \|x - x_0\| = r\}$.

**Définition (Partie ouverte) :** Une partie $U \subset E$ est dite ouverte si :
$$\forall x \in U, \; \exists r > 0, \; B(x, r) \subset U$$

**Définition (Partie fermée) :** Une partie $F \subset E$ est dite fermée si son complementaire $E \setminus F$ est un ouvert.

**Définition (Voisinage) :** Soit $x_0 \in E$. Une partie $V \subset E$ est un voisinage de $x_0$ s'il existe $r > 0$ tel que $B(x_0, r) \subset V$.

---

## II. Suites dans un EVN

### 1. Convergence
**Définition :** Une suite $(x_n)_{n \in \mathbb{N}}$ d'éléments de $E$ converge vers $l \in E$ si :
$$\forall \varepsilon > 0, \; \exists N \in \mathbb{N}, \; \forall n \ge N, \; \|x_n - l\| \le \varepsilon$$
On note $\lim_{n \to +\infty} x_n = l$ ou $x_n \xrightarrow[n\to +\infty]{} l$.

### 2. Caractérisation topologique des fermés
**Théorème :** Soit $F \subset E$. $F$ est fermé si et seulement si toute suite d'éléments de $F$ qui converge dans $E$ a sa limite dans $F$.
$$\forall (x_n) \in F^{\mathbb{N}}, \; (x_n \to l \implies l \in F)$$

---

## III. Continuité des applications

### 1. Définitions et caractérisations
Soient $(E, \|\cdot\|_E)$ et $(F, \|\cdot\|_F)$ deux EVN, $f : E \to F$ et $x_0 \in E$.

**Définition (Continuité en un point) :** $f$ est continue en $x_0$ si :
$$\forall \varepsilon > 0, \; \exists \eta > 0, \; \forall x \in E, \; \|x - x_0\|_E \le \eta \implies \|f(x) - f(x_0)\|_F \le \varepsilon$$

**Théorème de caractérisation :** Les assertions suivantes sont équivalentes :
1. $f$ est continue sur $E$.
2. Pour tout ouvert $U$ de $F$, $f^{-1}(U)$ est un ouvert de $E$.
3. Pour tout fermé $G$ de $F$, $f^{-1}(G)$ est un fermé de $E$.
4. Pour toute suite $(x_n)$ convergeant vers $l$ dans $E$, la suite $(f(x_n))$ converge vers $f(l)$ dans $F$.

---

## IV. Compacité

### 1. Définitions
**Définition (Séquentiellement compact) :** Une partie $K$ de $E$ est dite compacte (ou séquentiellement compacte en dimension finie) si de toute suite d'éléments de $K$ on peut extraire une sous-suite qui converge vers un élément de $K$.

$$\forall (x_n) \in K^{\mathbb{N}}, \; \exists \phi : \mathbb{N} \to \mathbb{N} \text{ strictement croissante}, \; \exists l \in K, \; x_{\phi(n)} \xrightarrow[n\to +\infty]{} l$$

### 2. Propriétés des compacts
* **Théorème de Heine :** Toute application continue d'un compact vers un EVN est **uniformément continue**.
* **Théorème des bornes atteintes (Weierstrass) :** Toute application continue d'un compact non vide vers $\mathbb{R}$ est bornée et atteint ses bornes.
* **Propriété de Borel-Lebesgue (Admis en dimension quelconque) :** De tout recouvrement ouvert d'un compact, on peut extraire un sous-recouvrement fini.

---

## V. Topologie en Dimension Finie

### 1. Équivalence des normes
**Théorème fondamental :** Soit $E$ un $\mathbb{K}$-espace vectoriel de **dimension finie**. Alors **toutes les normes sur $E$ sont équivalentes**.

*Définition de l'équivalence :* Deux normes $\|\cdot\|_A$ et $\|\cdot\|_B$ sur $E$ sont équivalentes s'il existe des constantes $c > 0$ et $C > 0$ telles que :
$$\forall x \in E, \; c\|x\|_A \le \|x\|_B \le C\|x\|_A$$

**Conséquence majeure :** Les notions d'ouverts, de fermés, de convergence, de continuité et de compacité ne dépendent pas du choix de la norme en dimension finie.

### 2. Théorème de Bolzano-Weierstrass et Caractérisation
**Théorème (Bolzano-Weierstrass) :** De toute suite bornée d'un EVN de dimension finie, on peut extraire une sous-suite convergente.

**Théorème de Borel-Weierstrass (Caractérisation des compacts en dimension finie) :** 
Dans un EVN de dimension finie, une partie $K$ est compacte si et seulement si elle est **fermée et bornée**.

---

## VI. Connexité pararcs

**Définition :** Un arc continu dans $E$ est une application continue $\gamma : [0,1] \to E$.

**Définition (Connexité par arcs) :** Un partie $A$ de $E$ est dite connexe par arcs si pour tout $(a,b) \in A^2$, il existe un arc continu $\gamma : [0,1] \to A$ tel que $\gamma(0) = a$ et $\gamma(1) = b$.

**Théorème (Valeurs intermédiaires) :** L'image d'une partie connexe par arcs par une application continue est connexe par arcs. En particulier, l'image d'un connexe par arcs par une fonction à valeurs dans $\mathbb{R}$ est un intervalle.

---

## VII. Méthodes

1. **Montrer qu'un ensemble est ouvert :**
   * Soit utiliser la définition (exhiber une boule ouverte).
   * Soit dire que c'est l'image réciproque d'un ouvert par une application continue (ex: $U = f^{-1}(]0, +-\infty[)$ avec $f$ continue).
   * Soit utiliser les opérations algébriques (intersections finies d'ouverts : non, unions quelconques d'ouverts).

2. **Montrer qu'un ensemble est fermé :**
   * Soit passer par le complémentaire (montrer qu'il est ouvert).
   * Soit utiliser la caractérisation séquencielle : prendre une suite $(x_n) \in F^{\mathbb{N}}$ telle que $x_n \to l$, et montrer que $l \in F$.
   * Soit dire que c'est l'image réciproque d'un fermé par une application continue (ex: $F = f^{-1}(\{0\})$ avec $f$ continue).

3. **Montrer qu'un ensemble est compact (en dimension finie) :**
   * Montrer que l'ensemble est **fermé** ET **borné**.

---

## VIII. Pièges à éviter (Attention aux errements classiques)

* ⚠️ **Attention à la dimension infinie !** En dimension infinie, un fermé borné **n'est pas** nécessairement compact (ex: la boule unitée fermée de $\ell^2(\mathbb{N})$ ou $C^0([0,1])$ n'est pas compacte). De plus, les normes n'y sont pas toutes équivalentes.
* ⚠️ **Attention aux confusions de limites :** Pour montrer qu'une suite converge, on ne peut pas utiliser la continuité d'une fonction avant d'avoir prouvé que la suite converge (sauf application du théorème de convergence dominée ou équivalents, mais topologiquement, c'est circulaire).
* ⚠️ **Intersection infinie d'ouverts :** Une intersection infinie d'ouverts n'est **pas** un ouvert en général (penser à $\left. \bigcap_{n=1}^{+\infty} ]-\frac{1}{n}, \frac{1}{n}[ = \{0\}\right.$, qui est fermé).
* ⚠️ **Union infinie de fermés :** Une union infinie de fermés n'est **pas** un fermée en général (penser à $\left. \bigcup_{n=1}^{\infty} [0, 1 - \frac{1}{n}] = [0, 1[\right.$, qui est ouvert).