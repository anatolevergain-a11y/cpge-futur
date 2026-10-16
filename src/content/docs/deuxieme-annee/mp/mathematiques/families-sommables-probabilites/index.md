---
title: 'Cours : Familles sommables et probabilités dénombrables'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $I$ un ensemble quelconque (fini, dénombrable ou non).

### Définition 1.1 : Famille de nombres réels positifs
Une famille $(x_i)_{i \in I}$ de nombres réels est dite à termes positifs si, pour tout $i \in I$, $x_i \ge 0$.

### Définition 1.2 : Sommabilité pour les familles à termes positifs
Une famille $(x_i)_{i \in I}$ à termes positifs est dite **sommable** s'il existe une constante $M \in \mathbb{R}$ telle que pour toute partie **finie** $J$ de $I$, on ait :
$$\sum_{i \in J} x_i \le M$$

Dans ce cas, la **somme** de la famille, notée $\sum_{i \in I} x_i$, est définie par la borne supérieure :
$$\sum_{i \in I} x_i = \sup \left\{ \sum_{i \in J} x_i \mid J \subset I, J \text{ fini} \right\}$$
Si un tel majorant $M$ n'existe pas, on pose $\sum_{i \in I} x_i = +\infty$ et la famille n'est pas sommable.

### Définition 1.3 : Sommabilité générale (valeurs réelles ou complexes)
Soit $(x_i)_{i \in I}$ une famille de nombres complexes. 
* Si $x_i \in \mathbb{R}$, on introduit $x_i^+ = \max(x_i, 0)$ et $x_i^- = \max(-x_i, 0)$, de sorte que $x_i = x_i^+ - x_i^-$ et $|x_i| = x_i^+ + x_i^-$.
* Si $x_i \in \mathbb{C}$, on pose $|x_i| = \sqrt{\text{Re}(x_i)^2 + \text{Im}(x_i)^2}$.

La famille $(x_i)_{i \in I}$ est dite **sommable** si la famille réelle positive $(|x_i|)_{i \in I}$ est sommable.

### Définition 1.4 : Somme d'une famille sommable générale
Si $(x_i)_{i \in I}$ est une famille sommable de nombres réels, on pose :
$$\sum_{i \in I} x_i = \sum_{i \in I} x_i^+ - \sum_{i \in I} x_i^-$$
Si $(x_i)_{i \in I}$ est une famille sommable de nombres complexes, on pose :
$$\sum_{i \in I} x_i = \sum_{i \in I} \text{Re}(x_i) + i \sum_{i \in I} \text{Im}(x_i)$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème 2.1 : Lien avec les séries (Cas où $I = \mathbb{N}$)
Soit $(u_n)_{n \in \mathbb{N}}$ une famille de nombres complexes. 
1. La famille $(u_n)_{n \in \mathbb{N}}$ est sommable si et seulement si la série $\sum u_n$ est **absolument convergente**.
2. Dans ce cas, la somme de la famille est égale à la somme de la série :
$$\sum_{n \in \mathbb{N}} u_n = \sum_{n=0}^{+\infty} u_n$$

### Théorème 2.2 : Propriété de Fubini pour les familles sommables
Soit $I$ et $J$ deux ensembles quelconques et $(x_{i,j})_{(i,j) \in I \times J}$ une famille de nombres complexes. 
La famille est sommable sur $I \times J$ si et seulement si :
1. Pour tout $i \in I$, la famille $(x_{i,j})_{j \in J}$ est sommable sur $J$.
2. La famille $\left( \sum_{j \in J} x_{i,j} \right)_{i \in I}$ est sommable sur $I$.

Dans ce cas, on a l'égalité fondamentale (permutation des sommations) :
$$\sum_{(i,j) \in I \times J} x_{i,j} = \sum_{i \in I} \left( \sum_{j \in J} x_{i,j} \right) = \sum_{j \in J} \left( \sum_{i \in I} x_{i,j} \right)$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### 3.1. Probabilités sur un univers dénombrable
Soit $\Omega$ un univers au plus dénombreable. Un espace probabilisé discret est défini par :
* Une tribu $\mathcal{A} = \mathcal{P}(\Omega)$.
* Une application $\mathbb{P} : \mathcal{P}(\Omega) \to [0, 1]$ telle que pour toute famille d'événements $(A_n)_{n \in \mathbb{N}}$ deux à deux incompatibles :
$$\mathbb{P}\left( \bigcup_{n=0}^{+\infty} A_n \right) = \sum_{n=0}^{+\infty} \mathbb{P}(A_n)$$
* La condition de normalisation : $\mathbb{P}(\Omega) = \sum_{\omega \in \Omega} \mathbb{P}(\{\omega\}) = 1$.

### 3.2. Espérance d'une variable aléatoire discrète
Soit $X$ une variable aléatoire définie sur $(\Omega, \mathcal{A}, \mathbb{P})$ à valeurs dans $\mathbb{R}$ (ou $\mathbb{C}$).
* $X$ admet une **espérance** si la famille $(X(\omega)\mathbb{P}(\{\omega\}))_{\omega \in \Omega}$ est sommable, ce qui équivaut à l'absolue convergence de la série $\sum_{\omega \in \Omega} X(\omega)\mathbb{P}(\{\omega\})$, ou encore (si $X(\Omega) \subset \mathbb{R}$) de la série $\sum_{x \in X(\Omega)} x \mathbb{P}(X=x)$.
* Dans ce cas, l'espérance est définie par :
$$\mathbb{E}[X] = \sum_{\omega \in \Omega} X(\omega)\mathbb{P}(\{\omega\}) = \sum_{x \in X(\Omega)} x \mathbb{P}(X=x)$$

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confusion entre convergence simple et absolue pour les séries doubles :** 
   Écrire $\sum_{i=0}^{+\infty} \sum_{j=0}^{+\infty} a_{i,j} = \sum_{j=0}^{+\infty} \sum_{i=0}^{+\infty} a_{i,j}$ sans avoir prouvé la sommabilité globale de la famille $(a_{i,j})_{(i,j) \in \mathbb{N}^2}$ (ou l'absolue convergence des séries itérées) est une faute éliminatoire. Le théorème de Fubini nécessite la sommabilité.
2. **Oubli de la majoration par un fini :** 
   Pour montrer qu'une famille à termes positifs est sommable, il faut impérativement majorer $\sum_{i \in J} x_i$ pour **toute** partie **finie** $J$, et non pas seulement calculer la limite d'une suite de sommes partielles emboîtées.
3. **Existence de l'espérance :** 
   Ne jamais écrire $\mathbb{E}[X] = \sum_{n=0}^{+\infty} x_n \mathbb{P}(X=x_n)$ sans avoir vérifié au préalable que la famille est sommable (c'est-à-dire que $\sum |x_n| \mathbb{P}(X=x_n) < +\infty$).