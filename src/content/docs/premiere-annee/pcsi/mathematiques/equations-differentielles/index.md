---
title: 'Cours : Équations différentielles linéaires'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Équations différentielles linéaires (PCSI)

Ce chapitre est central en mathématiques en classe de PCSI. Il fait le pont entre l'algèbre linéaire (espaces vectoriels, dimension, noyaux) et l'analyse. La rigueur exigée en CPGE implique de préciser systématiquement les intervalles d'étude et les hypothèses de continuité.

---

## 1. Généralités et structure de l'ensemble des solutions

### A. Définitions fondamentales
On considère un intervalle $I \subset \mathbb{R}$ non vide et non réduit à un point.
*   **Équation différentielle linéaire d'ordre $n$ ($n \in \mathbb{N}^*$) :** C'est une relation liant une fonction inconnue $y : I \to \mathbb{K}$ ($\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$) et ses dérivées successives, s'écrivant sous la forme générale :
    $$a_n(t)y^{(n)}(t) + a_{n-1}(t)y^{(n-1)}(t) + \dots + a_1(t)y'(t) + a_0(t)y(t) = b(t)$$
    où $a_0, a_1, \dots, a_n$ et $b$ sont des fonctions continues sur $I$, à valeurs dans $\mathbb{K}$, avec $a_n(t) \neq \forall t \in I$.
*   **Équation homogène (ou sans second membre) associée (E0) :**
    $$a_n(t)y^{(n)}(t) + \dots + a_0(t)y(t) = 0$$
*   **Solution maximale / globale :** Une solution est dite globale si elle est définie sur tout l'intervalle $I$.

### B. Structure de l'ensemble des solutions (Cas général)

> **Théorème (Structure de l'E.D.L.) :**
> Soit $S$ l'ensemble des solutions (globales) de l'équation avec second membre $(E)$ sur $I$, et $S_0$ l'ensemble des solutions de l'équation homogène associée $(E_0)$.
> 1. $S_0$ est un **sous-espace vectoriel** de l'espace vectoriel des fonctions de $I$ dans $\mathbb{K}$.
> 2. L'ensemble des solutions $S$ est un **espace affine** dirigé par $S_0$. C'est-à-dire que si $y_p$ est une solution particulière de $(E)$, alors :
>    $$S = y_p + S_0 = \{y_p + y_0 \mid y_0 \in S_0\}$$

---

## 2. Équations différentielles linéaires du 1er ordre

### A. Définition et Théorème de Cauchy-Lipschitz linéaire (Ordre 1)
Une EDL d'ordre 1 s'écrit sous forme normalisée :
$$(E_1) \quad y'(t) + a(t)y(t) = b(t)$$
où $a$ et $b$ sont des fonctions continues sur $I \subset \mathbb{R}$.

> **Théorème (Cauchy-Lipschitz linéaire - Ordre 1) :**
> Soit $t_0 \in I$ et $y_0 \in \mathbb{K}$. Le problème de Cauchy :
> $$\begin{cases} y' + a(t)y = b(t) \\ y(t_0) = y_0 \end{cases}$$
> admet **une unique solution globale** définie sur tout l'intervalle $I$.

### B. Résolution de l'équation homogène
L'équation homogène associée est $y' + a(t)y = 0$.
Soit $A(t)$ une **primitivie** de la fonction continue $a$ sur $I$.
Les solutions de $(E_0)$ sur $I$ sont les fonctions $y_0$ de la forme :
$$y_0(t) = \lambda e^{-A(t)}, \quad \text{avec } \lambda \in \mathbb{K}$$

### C. Méthode de variation de la constante
Pour trouver une solution particulière de $(E_1)$, on pose $y_p(t) = \lambda(t)e^{-A(t)}$, où $\lambda$ est une fonction dérivable sur $I$.

> **Méthode :**
> On injecte $y_p$ dans $(E_1)$. Par construction (car $y_0$ est solution de l'homogène), les termes en $\lambda(t)$ s'annulent, et il vient :
> $$\lambda'(t)e^{-A(t)} = b(t) \iff \lambda'(t) = b(t)e^{A(t)}$$
> On intègre $\lambda'$ pour obtenir $\lambda$ (en posant la constante d'intégration nulle, une solution particulière suffisant).

---

## 3. Équations différentielles linéaires du 2nd ordre à coefficients constants

### A. Définition
Une EDL d'ordre 2 à coefficients constants sur $I = \mathbb{R}$ s'écrit :
$$(E_2) \quad a y''(t) + b y'(t) + c y(t) = d(t)$$
avec $(a, b, c) \in \mathbb{K}^3$ et $a \neq 0$.

### B. Équation caractéristique
L'équation homogène associée est :
$$(E_{20}) \quad a y'' + b y' + c y = 0$$
On associe à $(E_{20})$ l'**équation caractéristique** d'inconnue $r \in \mathbb{C}$ :
$$(PC) \quad ar^2 + br + c = 0$$
Notons $\Delta = b^2 - 4ac$ le discriminant de $(PC)$.

> **Théorème (Solutions de l'équation homogène) :**
> L'ensemble des solutions **à valeurs complexes** de $(E_{20})$ sur $\mathbb{R}$ est :
> *   Si $\Delta > 0$ : $(PC)$ a deux racines réelles distinctes $r_1, r_2$.
>     $$y(t) = \lambda_1 e^{r_1 t} + \lambda_2 e^{r_2 t} \quad (\lambda_1, \lambda_2) \in \mathbb{C}^2$$
> *   Si $\Delta = 0$ : $(PC)$ a une racine réelle double $r_0 = -\frac{b}{2a}$.
>     $$y(t) = (\lambda_1 t + \lambda_2) e^{r_0 t} \quad (\lambda_1, \lambda_2) \in \mathbb{C}^2$$
> *   Si $\Delta < 0$ : $(PC)$ a deux racines complexes conjuguées $r_1 = \alpha + i\beta$ et $r_2 = \alpha - i\beta$ ($\alpha, \beta \in \mathbb{R}, \beta \neq 0$).
>     $$y(t) = e^{\alpha t} (\lambda_1 \cos(\beta t) + \lambda_2 \sin(\beta t)) \quad (\lambda_1, \lambda_2) \in \mathbb{C}^2 \text{ (ou } \mathbb{R}^2 \text{ si l'on cherche des solutions réelles)}$$

---

## 4. Recherche de solutions particulières (Second membre particulier)

Pour $(E_2) : a y'' + b y' + c y = d(t)$, lorsque $d(t)$ est sous forme spéciale, on utilise la méthode par superposition ou par ansatz.

### A. Second membre polynomial
Si $d(t) = P(t)e^{mt}$ où $P$ est un polynôme et $m \in \mathbb{K}$ :
*   On cherche une solution sous la forme $y_p(t) = Q(t)e^{mt}$, où $Q$ est un polynôme.
*   **Règle du degré :**
    *   Si $m$ n'est **pas racine** de l'équation caractéristique, $\operatorname{deg}(Q) = \operatorname{deg}(P)$.
    *   Si $m$ est **racine simple** de l'équation caractéristique, $\operatorname{deg}(Q) = \operatorname{deg}(P) + 1$ (et $Q(0) = 0$).
    *   Si $m$ est **racine double** de l'équation caractéristique, $\operatorname{deg}(Q) = \operatorname{deg}(P) + 2$.

### B. Second membre trigonométrique ou exponentiel complexe (Principe de superposition)
Si $d(t) = P_1(t)e^{\alpha t}\cos(\omega t) + P_2(t)e^{\alpha t}\sin(\omega t)$, on exploite l'isomorphisme $\mathbb{C} \cong \mathbb{R}^2$ en passant par les complexes :
On résout $ay'' + by' + cy = P(t)e^{(\alpha + i\omega)t}$ avec $P$ polynomial, puis on prend la partie réelle ou imaginaire selon le cas.

---

## 5. Méthodes et Pièges à Éviter (Alerte Concours)

> **⚠️ Piège 1 : L'oubli de la forme normalisée.**
> Pour appliquer les théorèmes (notamment l'unicité de Cauchy-Lipschitz ou la formule générale), l'équation doit impérativement être écrite sous forme normalisée (le coefficient devant la dérivée de plus haut degré doit être égal à $1$, ou du moins, on ne doit diviser par $a_n(t)$ que sur les intervalles où $a_n(t) \neq 0$).

> **⚠️ Piège 2 : Division par une fonction s'annulant.**
> Lorsque l'on résout $y' + a(t)y = b(t)$, la division par $a(t)$ (pour isoler $y'/y$) doit se faire sur des intervalles ouverts où $a(t)$ ne s'annule pas. Les solutions obtenues doivent ensuite être recollées aux points de raccordement si l'on cherche des solutions sur un plus grand intervalle (théorème de prolongement).

> **💡 Méthode - Principe de superposition pour le second membre :**
> Si $d(t) = d_1(t) + d_2(t)$, si $y_{p1}$ est solution avec $d_1$ et $y_{p2}$ avec $d_2$, alors $y_p = y_{p1} + y_{p2}$ est solution de l'équation avec $d_1 + d_2$. **Toujours décomposer les seconds membres complexes en sommes simples.**