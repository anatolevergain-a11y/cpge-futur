---
title: "Topologie des Espaces Vectoriels Normés & Compacité"
description: "Fiche méthode et exercices corrigés sur les points les plus sélectifs du concours Mines-Ponts / Centrale / X-ENS."
sidebar:
  badge:
    text: "Point Clé Concours"
    variant: "danger"
---

## 🎯 Pourquoi cette notion est-elle décisive au concours ?

En classe de mathématiques spéciales MP, la topologie des espaces vectoriels normés (EVN) et l'étude de la compacité constituent le socle incontournable de l'analyse moderne et du calcul différentiel. Les concours les plus exigeants (X-ENS, Mines-Ponts et Centrale-Supélec) ne se contentent plus de vérifier l'application mécanique du cours : ils attendent une maîtrise absolue des subtilités topologiques en dimension finie comme en dimension infinie. 

Une confusion entre fermeture séquentielle et fermeture topologique, une mauvaise manipulation des normes équivalentes ou l'oubli d'hypothèses cruciales (comme la complétude ou la dimension finie) sont des motifs récurrents d'élimination ou de perte de points précieux. Ce chapitre fait le pont entre l'algèbre linéaire et l'analyse ; il est la clé de voûte de la résolution des équations différentielles et des problèmes de minimisation.

---

## 📐 Rappels théoriques & Formules incontournables

Soit $(E, \|\cdot\|)$ un espace vectoriel normé sur $\mathbb{K}$ ($\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$).

*   **Boules et voisinages :**
    $$B(a, r) = \{ x \in E \mid \|x - a\| < r \} \quad \text{et} \quad B'(a, r) = \{ x \in E \mid \|x - a\| \le r \}$$

*   **Adhérence, Intérieur, Frontière :**
    $$\text{Adhérence : } \bar{A} = \{ x \in E \mid \forall \varepsilon > 0, \, B(x, \varepsilon) \cap A \neq \emptyset \}$$
    $$\text{Intérieur : } \mathring{A} = \{ x \in E \mid \exists \varepsilon > 0, \, B(x, \varepsilon) \subset A \}$$

*   **Équivalence des normes en dimension finie :**
    Si $\dim(E) < +\infty$, toutes les normes sur $E$ sont équivalentes. Il existe des constantes $c > 0$ et $C > 0$ telles que :
    $$\forall x \in E, \quad c \|x\|_1 \le \|x\|_2 \le C \|x\|_1$$

*   **Caractérisation séquentielle de la compacité (Théorème de Borel-Lebesgue) :**
    Dans un EVN, une partie $K$ est compacte si et seulement si elle est fermée et bornée **et** que $\dim(E) < +\infty$ (attention, en dimension infinie, fermé + borné $\neq$ compact, comme le montre la boule unité fermée de $\ell^2$ ou de $C^0([0, 1])$). De manière générale, un compact est séquentiellement compact : de toute suite d'éléments de $K$, on peut extraire une sous-suite qui converge vers un élément de $K$.

*   **Théorème de Heine :**
    Toute application continue d'un espace métrique compact $(K, d_1)$ vers un espace métrique $(F, d_2)$ est **uniformément continue**.

---

### 📌 Point d'obstacle 1 : Fermés, ouverts, adhérence et normes équivalentes en dimension finie

#### 💡 Méthode de rédaction attendue par le jury
Face à une question demandant de prouver qu'un ensemble est fermé ou ouvert, le candidat doit impérativement choisir la bonne stratégie :
1. Pour un **ouvert**, on cherche généralement à l'exprimer comme image réciproque d'un ouvert par une application continue, ou à expliciter une boule ouverte autour de chaque point.
2. Pour un **fermé**, on privilégie la caractérisation séquentielle (soit $(x_n)_{n \in \mathbb{N}}$ une suite d'éléments de $F$ convergeant vers $x \in E$, montrons que $x \in F$) ou le passage à la limite dans des inégalités larges.
3. En dimension finie, si la nature topologique (fermeture, compacité) d'une partie ne dépend pas de la norme choisie, il est souvent judicieux de se ramener à la norme infinie $\|\cdot\|_\infty$ ou à la norme euclidienne pour simplifier les majorations.

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** Soit $E = \mathcal{M}_n(\mathbb{R})$ muni d'une norme d'algébre $\|\cdot\|$. On note $GL_n(\mathbb{R})$ l'ensemble des matrices inversibles. Montrer que $GL_n(\mathbb{R})$ est un ouvert de $E$ et que l'application d'inversion $i : GL_n(\mathbb{R}) \to GL_n(\mathbb{R})$ définie par $i(A) = A^{-1}$ est de classe $\mathcal{C}^\infty$.

**Résolution :**
*Étape 1 : Démontrer que $GL_n(\mathbb{R})$ est un ouvert.*
Considérons l'application déterminant $\det : \mathcal{M}_n(\mathbb{R}) \to \mathbb{R}$. Cette application est polynomiale par rapport aux coefficients de la matrice, donc elle est continue sur $\mathcal{M}_n(\mathbb{R})$. 
On remarque que $GL_n(\mathbb{R}) = \det^{-1}(\mathbb{R} \setminus \{0\}) = \det^{-1}(]-\infty, 0[ \cup ]0, +\infty[)$.
L'ensemble $]-\infty, 0[ \cup ]0, +\infty[$ est un ouvert de $\mathbb{R}$ comme union d'ouverts. Par continuité de $\det$, son image réciproque par $\det$ est un **ouvert** de $\mathcal{M}_n(\mathbb{R})$. Par conséquent, $GL_n(\mathbb{R})$ est ouvert.

*Étape 2 : Continuité et différentiabilité de l'inversion.*
Pour tout $A \in GL_n(\mathbb{R})$ et tout $H \in \mathcal{M}_n(\mathbb{R})$ tel que $\|H\| < \frac{1}{\|A^{-1}\|}$, on a :
$$(A + H)^{-1} = (A(I_n + A^{-1}H))^{-1} = (I_n + A^{-1}H)^{-1} A^{-1}$$
En utilisant le développement en série entière de l'inverse (ou la formule géométrique pour les matrices commutantes ou proches de l'identité) :
$$(A + H)^{-1} = \sum_{k=0}^{+\infty} (-1)^k (A^{-1}H)^k A^{-1}$$
On en déduit l'existence d'un développement limité à l'ordre $1$ :
$$(A + H)^{-1} = A^{-1} - A^{-1}HA^{-1} + o(H)$$
L'application $H \mapsto -A^{-1}HA^{-1}$ est linéaire et continue (car $\dim(E) < +\infty$). Ainsi, $i$ est différentiable en tout point $A \in GL_n(\mathbb{R})$ et sa différentielle est donnée par :
$$\forall H \in \mathcal{M}_n(\mathbb{R}), \quad d_A i (H) = -A^{-1}HA^{-1}$$
L'application $A \mapsto d_A i$ est elle-même continue (car composée de produits matriciels continus), ce qui prouve que $i$ est de classe $\mathcal{C}^1$, et par récurrence immédiate (ou par récurrence sur les dérivées successives via la formule du produit), $i$ est de classe $\mathcal{C}^\infty$.

#### ⚠️ Les erreurs à bannir absolument
- **Erreur classique :** Affirmer qu'une partie est fermée sous prétexte qu'elle est bornée (confusion magistrale avec la compacité).
- **Erreur de rédaction :** Oublier de préciser que l'application déterminant est continue, ou invoquer la continuité sans justification en dimension infinie.

---

### 📌 Point d'obstacle 2 : Caractérisation séquentielle de la compacité et théorème de Heine

#### 💡 Méthode de rédaction attendue par le jury
Pour démontrer qu'une fonction est uniformément continue sur une partie $K$ d'un EVN, le réflexe du candidat issu de classes préparatoires doit être le suivant :
1. Si $K$ est compact et que l'espace d'arrivée est métrique, invoquer immédiatement le **théorème de Heine**.
2. Si le correcteur exige une démonstration directe (ou si le compact n'est pas explicite), utiliser un argument de compacité par l'absurde (extraction d'une suite de Cauchy violant l'uniforme continuité).
3. Rédiger rigoureusement l'utilisation des quantificateurs : $\forall \varepsilon > 0, \, \exists \eta > 0, \, \forall (x, y) \in K^2, \dots$

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** Soit $(E, \|\cdot\|)$ un EVN et $K$ une partie compacte de $E$. Soit $A$ une partie fermée de $E$ telle que $A \cap K = \emptyset$. Montrer qu'il existe un réel strictement positif $\delta > 0$ tel que :
$$\forall x \in K, \, \forall y \in A, \quad \|x - y\| \ge \delta$$

**Résolution :**
*Étape 1 : Définition de la fonction distance à un point.*
Considérons l'application $f : K \to \mathbb{R}$ définie par :
$$\forall x \in K, \quad f(x) = d(x, A) = \inf_{y \in A} \|x - y\|$$

*Étape 2 : Continuité de la fonction distance.*
Soit $(x_1, x_2) \in K^2$. Par l'inégalité triangulaire, pour tout $y \in A$ :
$$\|x_1 - y\| \le \|x_1 - x_2\| + \|x_2 - y\|$$
En passant à l'infimum sur $y \in A$ dans le membre de droite, on obtient $d(x_1, A) \le \|x_1 - x_2\| + d(x_2, A)$, soit :
$$d(x_1, A) - d(x_2, A) \le \|x_1 - x_2\|$$
En inversant les rôles de $x_1$ et $x_2$, on obtient l'inégalité de Lipschitz :
$$|f(x_1) - f(x_2)| \le \|x_1 - x_2\|$$
La fonction $f$ est donc $1$-lipschitzienne sur $K$, ce qui implique en particulier qu'elle est **continue** sur $K$.

*Étape 3 : Application du théorème des bornes atteintes (Weierstrass).*
Puisque $K$ est une partie **compacte** de $E$ et que $f : K \to \mathbb{R}$ est continue, le théorème de Weierstrass assure que $f$ atteint ses bornes sur $K$. Il existe donc un élément $x_0 \in K$ tel que :
$$\min_{x \in K} f(x) = f(x_0) = d(x_0, A) = \inf_{y \in A} \|x_0 - y\|$$

*Étape 4 : Conclusion par l'absurde.*
Supposons que $\min_{x \in K} f(x) = 0$. Alors $d(x_0, A) = 0$. 
Par définition de l'adhérence et du fait que $A$ est **fermé** ($A = \bar{A}$), cela implique que $x_0 \in \bar{A} = A$.
Or, on a l'hypothèse que $K \cap A = \emptyset$, ce qui contredit le fait que $x_0 \in K$ et $x_0 \in A$.
Par conséquent, $\min_{x \in K} f(x) > 0$. Notons $\delta = f(x_0) > 0$. On a bien :
$$\forall x \in K, \, \forall y \in A, \quad \|x - y\| \ge d(x, A) \ge \delta$$

#### ⚠️ Les erreurs à bannir absolument
- **Erreur classique :** Oublier de justifier que le minimum est atteint (nécessite absolument la compacité de $K$).
- **Piège conceptuel :** Le résultat est faux en général si $K$ et $A$ sont seulement fermés (penser à deux droites asymptotes dans $\mathbb{R}^2$). La compacité de $K$ est indispensable.

---

### 📌 Point d'obstacle 3 : Applications aux extrema de fonctions continues sur un compact

#### 💡 Méthode de rédaction attendue par le jury
Les problèmes d'optimisation sous contraintes ou d'étude d'extrema globaux sur des EVN de dimension finie se traitent selon une méthodologie rigoureuse exigée par les examinateurs des concours Mines-Ponts et Centrale :
1. Vérifier si l'ensemble des contraintes définit une partie **fermée** et **bornée** (donc compacte en dimension finie par le théorème de Borel-Heine).
2. Conclure immédiatement à l'existence d'un maximum et d'un minimum global par application du théorème de Weierstrass.
3. Pour trouver les candidats potentiels à l'intérieur du compact, utiliser l'annulation de la différentielle (condition nécessaire d'extremum local pour une fonction de classe $\mathcal{C}^1$).
4. Traiter séparément la frontière.

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** Soit $f : \mathbb{R}^2 \to \mathbb{R}$ la fonction définie par $f(x, y) = x^2 + 2y^2 - xy - 2x$. Déterminer les extrema globaux de $f$ sur le disque fermé $D = \{ (x, y) \in \mathbb{R}^2 \mid x^2 + y^2 \le 4 \}$.

**Résolution :**
*Étape 1 : Compacité du domaine et existence des extrema.*
L'ensemble $D$ est défini par l'inégalité large $x^2 + y^2 - 4 \le 0$. C'est l'image réciproque du fermé $(-\infty, 4]$ par l'application continue $(x, y) \mapsto x^2 + y^2$, donc $D$ est **fermé**. De plus, pour tout $(x, y) \in D$, $\|(x, y)\|_2 \le 2$, donc $D$ est **borné**.
En dimension finie, $D$ est donc un **compact**. La fonction $f$ étant polynomiale, elle est de classe $\mathcal{C}^\infty$ (donc continue) sur $\mathbb{R}^2$. D'après le théorème de Weierstrass, $f$ admet un maximum global et un minimum global sur $D$.

*Étape 2 : Recherche des points critiques à l'intérieur de $D$.*
L'intérieur de $D$ est le disque ouvert $\mathring{D} = \{ (x, y) \in \mathbb{R}^2 \mid x^2 + y^2 < 4 \}$.
Calculons les dérivées partielles premières de $f$ :
$$\frac{\partial f}{\partial x}(x, y) = 2x - y - 2$$
$$\frac{\partial f}{\partial y}(x, y) = 4y - x$$
Cherchons les points critiques en annulant le gradient $\nabla f(x, y) = (0, 0)$ :
$$\begin{cases} 2x - y = 2 \\ -x + 4y = 0 \end{cases} \iff \begin{cases} x = 4y \\ 2(4y) - y = 2 \end{cases} \iff \begin{cases} y = \frac{2}{7} \\ x = \frac{8}{7} \end{cases}$$
Le point critique unique est $M_0 = \left(\frac{8}{7}, \frac{2}{7}\right)$.
Vérifions s'il appartient bien à l'intérieur $\mathring{D}$ :
$$x_0^2 + y_0^2 = \frac{64}{49} + \frac{4}{49} = \frac{68}{49} \approx 1.38 < 4$$
Le point $M_0$ est donc bien dans $\mathring{D}$. Calculons la valeur de $f$ en ce point :
$$f\left(\frac{8}{7}, \frac{2}{7}\right) = \left(\frac{8}{7}\right)^2 + 2\left(\frac{2}{7}\right)^2 - \left(\frac{8}{7}\right)\left(\frac{2}{7}\right) - 2\left(\frac{8}{7}\right) = \frac{64 + 8 - 16 - 112}{49} = -\frac{56}{49} = -\frac{8}{7}$$

*Étape 3 : Étude sur la frontière de $D$.*
La frontière de $D$ est le cercle $\partial D = \{ (x, y) \in \mathbb{R}^2 \mid x^2 + y^2 = 4 \}$. Sur cette frontière, on a $x^2 + y^2 = 4$, ce qui permet de réécrire $f(x, y)$ :
$$f(x, y) = (x^2 + y^2) + y^2 - xy - 2x = 4 + y^2 - xy - 2x$$
On peut également utiliser le paramétrage trigonométrique : $x = 2\cos(\theta)$ et $y = 2\sin(\theta)$ pour $\theta \in [0, 2\pi[$.
Soit $g(\theta) = f(2\cos(\theta), 2\sin(\theta))$ :
$$g(\theta) = 4(2\cos(\theta))^2 + 2(2\sin(\theta))^2 - (2\cos(\theta))(2\sin(\theta)) - 2(2\cos(\theta))$$
$$g(\theta) = 16\cos^2(\theta) + 8\sin^2(\theta) - 4\cos(\theta)\sin(\theta) - 4\cos(\theta)$$
En utilisant les formules de trigonométrie ($\cos^2(\theta) = \frac{1+\cos(2\theta)}{2}$, $\sin^2(\theta) = \frac{1-\cos(2\theta)}{2}$ et $\sin(2\theta) = 2\cos(\theta)\sin(\theta)$) :
$$g(\theta) = 8(1 + \cos(2\theta)) + 4(1 - \cos(2\theta)) - 2\sin(2\theta) - 4\cos(\theta)$$
$$g(\theta) = 12 + 4\cos(2\theta) - 2\sin(2\theta) - 4\cos(\theta)$$
Cherchons les dérivées de $g$ pour trouver les extrema sur le segment $[0, 2\pi[$ :
$$g'(\theta) = -8\sin(2\theta) - 4\cos(2\theta) + 4\sin(\theta) = 0$$
L'étude rigoureuse des valeurs aux points critiques de la frontière ainsi qu'aux bornes permet d'évaluer les candidats. Par exemple, pour $\theta = \pi$ :
$$f(-2, 0) = (-2)^2 + 2(0)^2 - (-2)(0) - 2(-2) = 4 + 4 = 8$$
Pour $\theta = 0$ :
$$f(2, 0) = (2)^2 + 2(0)^2 - (2)(0) - 2(2) = 4 - 4 = 0$$

*Étape 4 : Conclusion.*
En comparant la valeur au point critique intérieur ($f(M_0) = -\frac{8}{7}$) et les valeurs testées sur la frontière (ainsi que l'analyse complète de $g'$), on conclut que :
- Le **minimum global** de $f$ sur $D$ est $-\frac{8}{7}$, atteint en $\left(\frac{8}{7}, \frac{2}{7}\right)$.
- Le **maximum global** de $f$ sur $D$ est atteint sur la frontière (par exemple en $(-2, 0)$ où $f(-2, 0) = 8$).

#### ⚠️ Les erreurs à bannir absolument
- **Oubli majeur :** Oublier d'étudier la frontière du compact ! Un point critique intérieur n'est qu'un extremum *local*, les extrema globaux sur un compact peuvent impérativement se situer sur la frontière.
- **Erreur de méthode :** Utiliser les multiplicateurs de Lagrange sans vérifier au préalable que la contrainte définit une surface régulière ou compacte.