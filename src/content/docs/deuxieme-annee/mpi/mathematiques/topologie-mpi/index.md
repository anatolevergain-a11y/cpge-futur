---
title: 'Cours : Topologie des espaces vectoriels normés'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE MPI.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $K$ un corps valué qui sera $\mathbb{R}$ ou $\mathbb{C}$. Soit $E$ un $K$-espace vectoriel.

Une application $N : E \to \mathbb{R}_^+$ est appelée une **norme** sur $E$ si elle satisfait les propriétés suivantes :
1. **Séparation :** $\forall x \in E, \; N(x) = 0 \implies x = 0_E$.
2. **Homogénéité :** $\forall \lambda \in K, \; \forall x \in E, \; N(\lambda x) = |\lambda| N(x)$.
3. **Inégalité triangulaire :** $\forall (x,y) \in E^2, \; N(x+y) \leq N(x) + N(y)$.

On note usuellement $N(x) = \|x\|_E$, ou simplement $\|x\|$. Un **espace vectoriel normé** (EVN) est un couple $(E, \|\cdot\|)$.

### Topologie associée
* **Boule ouverte** de centre $x \in E$ et de rayon $r > 0$ : 
  $$B(x, r) = \{y \in E \mid \|y - x\| < r\}$$
* **Boule fermée** : 
  $$B_f(x, r) = \{y \in E \mid \|y - x\| \leq r\}$$
* **Sphère** : 
  $$S(x, r) = \{y \in E \mid \|y - x\| = r\}$$
* Un sous-ensemble $U \subset E$ est dit **ouvert** si :
  $$\forall x \in U, \; \exists r > 0, \; B(x, r) \subset U$$
* Un sous-ensemble $F \subset E$ est dit **fermé** si son complémentaire $E \setminus F$ est un ouvert.

### Continuité des applications
Soient $(E, \|\cdot\|_E)$ et $(F, \|\cdot\|_F)$ deux EVN, et $f : E \to F$. 
$f$ est continue en $x_0 \in E$ si :
$$\forall \varepsilon > 0, \; \exists \delta > 0, \; \forall x \in E, \; \|x - x_0\|_E < \delta \implies \|f(x) - f(x_0)\|_F < \varepsilon$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème : Équivalence des normes en dimension finie
Soit $E$ un $K$-espace vectoriel de dimension finie. Toutes les normes sur $E$ sont **équivalentes**.

> **Définition de l'équivalence :** Deux normes $\|\cdot\|_1$ et $\|\cdot\|_2$ sur $E$ sont équivalentes s'il existe des constantes $C_1, C_2 > 0$ telles que :
> $$\forall x \in E, \; C_1 \|x\|_1 \leq \|x\|_2 \leq C_2 \|x्व\|_1$$

#### Démonstration (Esquisse par récurrence sur la dimension $n$)
1. Si $\dim(E) = n$, $E$ est isométriquement isomorphisme à $K^n$ muni de la norme infini $\|x\|_\infty = \max_{1 \leq i \leq n} |x_i|$. Il suffit donc de montrer que toute norme $\|\cdot\|$ sur $E$ est équivalente à $\| \cdot \|_\infty$.
2. Soit $(e_1, \dots, e_n)$ une base de $E$. Pour $x = \sum_{i=1}^n x_i e_i$, par l'inégalité triangulaire :
   $$\|x\| \leq \sum_{i=1}^n |x_i| \|e_i\| \leq \left( \sum_{i=1}^n \|e_i\| \right) \|x\|_\infty$$
   On pose $C_2 = \sum_{i=1}^n \|e_i\|$, d'où $\|x\| \leq C_2 \|x\|_\infty$.
3. Pour l'autre minoration, l'application $x \mapsto \|x\|$ est 1-lipschitzienne pour la norme $\|\cdot\|_\infty$ (conséquence directe de l'inégalité précédente). 
4. La sphère unité $S_\infty = \{x \in E \mid \|x\|_\infty = 1\}$ est fermée et bornée dans $E$. Par le théorème de **Bolzano-Weierstrass** (valable en dimension finie), $S_\infty$ est compacte.
5. La fonction continue $\|\cdot\|$ atteint donc son minimum sur le compact $S_\infty$. Soit $C_1 = \min_{x \in S_\infty} \|x\|$. Par séparation de la norme, $C_1 > 0$.
6. Ainsi, pour tout $x \neq 0$, $\frac{x}{\|x\|_\infty} \in S_\infty$, donc $\left\| \frac{x}{\|x\|_\infty} \right\| \geq C_1$, ce qui donne $C_1 \|x\|_\infty \leq \|x\|$. $\blacksquare$

### Théorème : Caractérisation séquentielle des fermés
Soit $(E, \|\cdot\|)$ un EVN et $F \subset E$. $F$ est fermé si et seulement si pour toute suite $(x_n)_{n \in \mathbb{N}}$ d'éléments de $F$ qui converge vers un élément $x \in E$, alors $x \in F$.

---

## 💡 3. Méthodes de calcul & Algorithmes

### 1. Comment démontrer qu'une partie est ouverte ?
* **Méthode 1 (Par les voisinages) :** Montrer que pour tout point, on peut trouver une boule ouverte incluse.
* **Méthode 2 (Par les images réciproques) :** Utiliser la continuité d'une application. Si $f : E \to \mathbb{R}$ est continue, alors :
  * $\{x \in E \mid f(x) > a\} = f^{-1}(]a, +\infty[)$ est un **ouvert**.
  * $\{x \in E \mid f(x) < a\}$ est un **ouvert**.
* **Méthode 3 (Par les opérations) :** Les intersections finies d'ouverts n'en sont pas forcément, mais les unions quelconques d'ouverts sont ouvertes.

### 2. Comment démontrer qu'une partie est fermée ?
* **Méthode 1 (Par le complémentaire) :** Montrer que son complémentaire est ouvert.
* **Méthode 2 (Par les suites) :** Soit $(x_n)$ une suite dans $F$ telle que $x_n \to l$. Montrer que $l \in F$.
* **Méthode 3 (Par les applications continues) :** Si $f, g : E \to F$ sont continues, alors $\{x \in E \mid f(x) = g(x)\} = (f-2g)^{-1}(\{0_F\})$ est un **fermé** (car $\{0_F\}$ est fermé dans un EVN séparé). En particulier, $\{f \leq g\}$ est fermé si $F = \mathbb{R}$.

### 3. Calcul de norme subie (norme d'opérateur)
Soient $(E, \|\cdot\|_E)$ et $(F, \|\cdot\|_F)$ deux EVN, et $u \in \mathcal{L}(E, F)$ une application linéaire continue. La norme subie (ou operatoriale) est définie par :
$$\|u\| = \sup_{x \in E \setminus \{0\}} \frac{\|u(x\|_F}{\|x\|_E} = \sup_{\|x\|_E \leq 1} \|u(x\|_F = \sup_{\|x\|_E = 1} \|u(x\|_F$$

* **Algorithme pratique pour calculer ou majorer $\|u\|$ :**
  1. Majoration grossière : utiliser l'inégalité triangulaire et les inégalités de normes sur les coordonnées pour trouver $M$ tel que $\forall x, \; \|u(x)\|_F \leq M \|x\|_E$. On a $\|u\| \leq M$.
  2. Recherche du supremum : exhiber une suite $(x_n)$ de vecteurs unitaires telle que $\|u(x_n)\|_F \to M$.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confondre dimension finie et dimension infinie :**
   En dimension infinie, les boules fermées ne sont **jamais** compactes (Théorème de Riesz). De plus, deux normes ne sont *jamais* toutes équivalentes en dimension infinie.
2. **Adhésion vs Intérieur :**
   L'adhérence d'une intersection n'est pas nécessairement l'intersection des adhérences (attention aux inclusions strictes ou aux familles infinies).
3. **Continuité en dimension infinie :**
   Une application linéaire n'est pas automatiquement continue en dimension infinie. Il faut impérativement démontrer la \text{continuité} par majoration par la norme de départ : $\|u(x)\| \leq k \|x\|$.
4. **Fermeture des ensembles en $\mathcal{M}_{n,p}(\mathbb{R})$ :**
   Soit $A \in \mathcal{M}_{n,n}(\mathbb{R})$. L'ensemble $\text{GL}_n(\mathbb{R})$ des matrices inversibles est un **ouvert** de $\mathcal{M}_{n,n}(\mathbb{R})$ car il s'agit de l'image réciproque de $\mathbb{R} \setminus \{0\}$ par l'application continue $A \mapsto \det(A)$. Par conséquent, $\text{SL}_n(\mathbb{R})$ (ensemble de déterminant 1) est **fermé**.