---
title: 'Cours : Espaces vectoriels de dimension finie'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $\mathbb{K}$ un corps commutatif (généralement $\mathbb{R}$ ou $\mathbb{C}$). Soit $(E, +, \cdot)$ un $\mathbb{K}$-espace vectoriel.

### A. Espace vectoriel de dimension finie
* **Définition :** On dit que $E$ est de dimension finie s'il existe une famille finie de vecteurs de $E$ qui est génératrice de $E$. C'est-à-dire qu'il existe un entier $n \in \mathbb{N}$ et des vecteurs $(e_1, \dots, e_n) \in E^n$ tels que $E = \operatorname{Vect}(e_1, \dots, e_n)$.
* Si $E$ n'est pas de dimension finie, on dit qu'il est de dimension infinie.

### B. Familles libres, génératrices et bases
* **Famille libre :** Soit $(x_1, \dots, x_p) \in E^p$. Cette famille est dite libre (ou linéairement indépendante) si pour tout $(l_1, \dots, l_p) \in \mathbb{K}^p$ :
$$\sum_{i=1}^{p} l_i x_i = 0_E \implies \forall i \in \llbracket 1, p \rrbracket, \; l_i = 0_{\mathbb{K}}$$
* **Famille génératrice :** Soit $(x_1, \dots, x_p) \in E^p$. Cette famille est dite génératrice de $E$ si tout vecteur de $E$ peut s'écrire comme combinaison linéaire des $(x_i)_{1 \le i \le p}$.
* **Base :** Une famille $(e_1, \dots, e_n)$ de $E$ est une base de $E$ si elle est à la fois libre et génératrice.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### A. Théorème de la base incomplète (Admis)
* **Énoncé :** Soit $E$ un $\mathbb{K}$-espace vectoriel de dimension finie. Toute famille libre de $E$ peut être complétée par des vecteurs de $E$ pour former une base de $E$. De plus, toutes les bases d'un même espace vectoriel de dimension finie ont le même cardinal, appelé la **dimension** de $E$ et noté $\dim(E)$.

### B. Théorème fondamental de la dimension (Caractérisation des bases)
* **Théorème :** Soit $E$ un $\mathbb{K}$-espace vectoriel tel que $\dim(E) = n \in \mathbb{N}$. Soit $(v_1, \dots, v_n)$ une famille de $n$ vecteurs de $E$. Les assertions suivantes sont équivalentes :
  1. $(v_1, \dots, v_n)$ est une base de $E$.
  2. $(v_1, \dots, v_n)$ est une famille libre.
  3. $(v_1, \dots, v_n)$ est une famille génératrice de $E$.

> **Démonstration (Implication 2 $\implies$ 1) :**
> Supposons la famille $\mathcal{F} = (v_1, \dots, v_n)$ libre. Par le théorème de la base incomplète, $\mathcal{F}$ peut être complétée en une base $\mathcal{B} = (v_1, \dots, v_n, w_1, \dots, w_k)$ de $E$, avec $k \in \mathbb{N}$. 
> Par définition de la dimension, le cardinal de $\mathcal{B}$ est égal à $\dim(E)$, soit $n + k = n$. 
> Par conséquent, $k = 0$. La famille $\mathcal{F}$ est donc de cardinal $n$ et génératrice (puisque $\mathcal{B}$ l'est), c'est une base de $E$. $\blacksquare$

### C. Dimension d'un sous-espace vectoriel et formule de Grassmann
* **Proposition :** Soit $E$ un $\mathbb{K}$-espace vectoriel de dimension finie et $F$ un sous-espace vectoriel de $E$. Alors $F$ est de dimension finie et :
$$\dim(F) \le \dim(E)$$
De plus, $\dim(F) = \dim(E) \iff F = E$.
* **Théorème de Grassmann :** Soient $F$ et $G$ deux sous-espaces vectoriels de $E$ de dimensions finies. Alors :
$$\dim(F + G) = \dim(F) + \dim(G) - \dim(F \cap G)$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### A. Détermination de la dimension d'un sous-espace vectoriel
Pour déterminer la dimension d'un sous-espace vectoriel $F$ donné par un système d'équations ou par une famille génératrice :
1. **Méthode génératrice :** Extraire une base d'une famille génératrice en échelonnant les vecteurs (souvent représentés sous forme de lignes d'une matrice $A \in \mathcal{M}_{p,n}(\mathbb{K})$).
2. **Méthode par équations :** Résoudre le système homogène définissant $F$. Le nombre de paramètres libres dans la solution générale correspond à la dimension de $F$.

### B. Pratique du pivot de Gauss pour le rang
Soit $A \in \mathcal{M}_{n,p}(\mathbb{K})$. Le rang de $A$, noté $\operatorname{rg}(A)$, est la dimension du sous-espace vectoriel de $\mathcal{M}_{n,1}(\mathbb{K})$ engendré par les colonnes de $A$ (ou par les lignes).
* **Algorithme :** Utiliser les opérations élémentaires sur les lignes (ou les colonnes) qui préservent le rang pour amener la matrice $A$ sous forme échelonnée. Le nombre de lignes non nulles de la matrice échelonnée est égal au rang de $A$.

---

## ⚠️ 4. Pièges classiques & Erreurs à éviter

1. **Confusion entre dimension finie et infinie :** Appliquer des résultats valables uniquement en dimension finie (comme l'égalité $\text{liberté} \iff \text{génératrice}$ pour un cardinal donné) à des espaces de dimension infinie (par exemple l'espace des polynômes $\mathbb{K}[X]$ ou l'espace des suites).
2. **Oubli des hypothèses de dimension finie :** Utiliser le théorème de la base incomplète ou la formule de Grassmann sans avoir préalablement établi que les espaces vectoriels considérés sont de dimension finie.
3. **Erreur de manipulation sur les dimensions :** Écrire $\dim(F \cup G) = \dim(F) + \dim(G)$. C'est **faussement général** ; la réunion de deux sous-espaces vectoriels n'est pas un sous-espace vectoriel en général (sauf si l'un est inclus dans l'autre). C'est la somme $F + G$ qu'il faut considérer via la formule de Grassmann.
4. **Mauvaise caractérisation d'un isomorphisme :** Soit $f \in \mathcal{L}(E, F)$ avec $\dim(E) = \dim(F) = n$. Pour démontrer que $f$ est un isomorphisme, il suffit de montrer que $f$ est injective **OU** surjective. Ne cherchez pas à vérifier les deux conditions simultanément, c'est une perte de temps rédactionnelle et logique.