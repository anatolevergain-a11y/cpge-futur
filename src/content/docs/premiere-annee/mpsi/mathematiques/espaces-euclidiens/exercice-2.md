---
title: 'Exercice 2 : Projecteurs orthogonaux et distances'
description: 'Problème d entraînement type concours officiel.'
---

# Problème : Projecteurs orthogonaux, caractérisations variationnelles et distances dans les espaces préhilbertiens réels

## I. Énoncé

Soit $(E, \langle \cdot, \cdot \rangle$ un espace préhilbertien réel muni de la norme associée $\|\cdot\|$. On note $F$ un sous-espace vectoriel de $E$. 

L'objectif de ce problème est d'étudier l'existence et les propriétés des projecteurs orthogonaux sur un sous-espace vectoriel, d'établir des caractérisations variationnelles de la projection orthogonale, et d'analyser une application numérique en dimension infinie ainsi que les limites de ce modèle théorique.

---

## II. Questions

### Partie A : Propriétés générales et existence

1. **Rappel de cours / Définition :** Soit $F$ un sous-espace vectoriel de $E$. Définir l'orthogonal $F^\perp$ de $F$. Montrer que $F^\perp$ est un sous-espace fermé (au sens de la topologie induite par la norme) et que $F \cap F^\perp = \{0\}$.
2. Soit $x \in E$. On suppose qu'il existe un vecteur $p(x) \in F$ tel que $x - p(x) \in F^\perp$. 
   * Montrer l'unicité d'un tel vecteur $p(x)$.
   * Montrer que l'application $p : E \to F$ ainsi définie est un endomorphisme de $E$ (en posant $E$ de dimension quelconque, sous réserve d'existence).
3. Établir que pour tout $x \in E$ et tout $y \in F$, on a l'identité de Pythagore :
   $$\|x - y\|^2 = \|x - p(x)\|^2 + \|p(x) - y\|^2$$
4. En déduire que $p(x)$ est le unique élément de $F$ réalisant la distance minimale de $x$ à $F$, c'est-à-dire :
   $$\|x - p(x)\} = \inf_{y \in F} \|x - y\|$$

### Partie B : Caractérisation variationnelle et cas euclidien

On suppose désormais que $F$ est de dimension finie. Soit $(e_1, \dots, e_n)$ une base orthonormée de $F$.
5. Expliciter la formule de $p(x)$ pour tout $x \in E$ à l'aide de la base $(e_1, \dots, e_n)$. En déduire que $p$ est un projecteur de $E$ sur $F$ (noté $p = \pi_F$).
6. Montrer que $\pi_F$ est un endomorphisme auto-adjoint (symétrique), c'est-à-dire que pour tous $x, y \in E$, $\langle \pi_F(x), y \rangle = \langle x, \pi_F(y) \rangle$.
7. Soit $J : F \to \mathbb{R}$ l'application définie par $J(y) = \|x - y\|^2$. En utilisant un calcul différentiel ou une identité algébrique, retrouver le résultat de la question 4 par l'annulation d'une dérivée directionnelle.

### Partie C : Application en dimension infinie et analyse critique

On considère l'espace préhilbertien $E = \mathcal{C}([0, 1], \mathbb{R})$ muni du produit scalaire usuel :
$$\langle f, g \rangle = \int_0^1 f(t)g(t) \, dt$$
Soit $F$ l'hypersplan défini par :
$$F = \left\{ f \in E \mid \int_0^1 t f(t) \, dt = 0 \right\}$$
8. Vérifier que $F$ est un sous-espace vectoriel fermé de $E$. Déterminer une base (ou un générateur simple) de $F^\perp$.
9. Soit $h \in E$ défini par $h(t) = t$. Décomposer $h$ sous la forme $h = p(h) + (h - p(h))$ où $p(h) \in F$ et $(h - p(h)) \in F^\perp$.
10. **Analyse critique et limites du modèle :** 
    * Supposons que l'on remplace l'espace préhilbertien $E = \mathcal{C}([0, 1], \mathbb{R})$ par un espace de dimension quelconque ou que l'on cherche à implémenter numériquement ce calcul de projection pour des données expérimentales bruitées. 
    * Discuter des limites de la projection orthogonale : que se passe-t-il si $F$ n'est pas fermé (en dimension infinie) ? Quel est l'impact du conditionnement numérique lors du calcul de la projection sur un sous-espace de grande dimension ?

---

## III. Pistes et indications

* **Q1 & Q2 :** Utiliser la continuité du produit scalaire pour montrer que $F^\perp$ est un noyau d'applications linéaires continues. L'unicité découle de la séparation.
* **Q3 & Q4 :** Développer $\|(x - p(x)) + (p(x) - y)\|^2$ en utilisant le fait que $x - p(x) \in F^\perp$ et $p(x) - y \in F$.
* **Q5 & Q6 :** Utiliser la formule classique de projection sur un sous-espace vectoriel muni d'une base orthonormée.
* **Q8 & Q9 :** $F$ est le noyau d'une forme linéaire continue, donc fermé. $F^\perp$ est engendré par la fonction $t \mapsto t$. Appliquer la formule générale de projection sur un sous-espace de dimension 1.
* **Q10 :** Penser au théorème de projection sur un convexe fermé (qui nécessite la *complétude* de l'espace, i.e., que $E$ soit un hilbertien et $F$ complet). En dimension infinie, un sous-espace de dimension finie est fermé, mais ce n'est plus vrai pour des sous-espaces de dimension infinie arbitraire.

---

## IV. Corrigé détaillé

### Partie A_1. Par définition, $F^\perp = \{x \in E \mid \forall y \in F, \langle x, y \rangle = 0\}$. 
   On peut écrire $F^\perp = \bigcap_{y \in F} \ker(\varphi_y)$, où $\varphi_y : x \mapsto \langle x, y \rangle$. Comme le produit scalaire est continu par rapport à ses arguments, chaque application $\varphi_y$ est continue, donc son noyau $\ker(\varphi_y)$ est fermé. Par intersection arbitraire de fermés, $F^\perp$ est fermé.
   Si $x \in F \cap F^\perp$, alors $\langle x, x \rangle = 0$, ce qui implique $x = 0$ par définition d'un produit scalaire. Donc $F \cap F^\perp = \{0\}$.

2. **Unicité :** Supposons qu'il existe $p_1, p_2 \in F$ tels que $x - p_1 \in F^\perp$ et $x - p_2 \in F^\perp$. 
   Alors $(x - p_1) - (x - p_2) = p_2 - p_1 \in F^\perp$. Or, $p_2 - p_1 \in F$ (car $F$ est un ev). Ainsi, $p_2 - p_1 \in F \cap F^\perp$, donc $p_2 - p_1 = 0 \implies p_1 = p_2$.
   **Linéarité :** Soient $x_1, x_2 \in E$ et $\lambda, \mu \in \mathbb{R}$. On a $(\lambda x_1 + \mu x_2) - (\lambda p(x_1) + \mu p(x_2)) = \lambda(x_1 - p(x_1)) + \mu(x_2 - p(x_2))$. Comme $F^\perp$ est un sous-espace vectoriel, ce vecteur appartient à $F^\perp$. De plus, $\lambda p(x_1) + \mu p(x_2) \in F$. Par unicité du projecteur, $p(\lambda x_1 + \mu x_2) = \lambda p(x_1) + \mu p(x_2)$.

3. Soit $y \in F$. On écrit :
   $$\|x - y\|^2 = \|(x - p(x)) + (p(x) - y)\|^2$$
   Par définition du produit scalaire, en développant :
   $$\|x - y\|^2 = \|x - p(x)\|^2 + \|p(x) - y\|^2 + 2\langle x - p(x), p(x) - y \rangle$$
   Or, $x - p(x) \in F^\perp$ et $p(x) - y \in F$ (car $p(x) \in F$ et $y \in F$). Donc le terme de double produit est nul. Il vient :
   $$\|x - y\|^2 = \|x - p(x)\|^2 + \|p(x) - y\|^2$$

4. D'après l'identité précédente, puisque $\|p(x) - y\|^2 \ge 0$, on a :
   $$\|x - y\|^2 \ge \|x - p(x)\|^2$$
   soit $\|x - y\| \ge \|x - p(x)\|$. L'égalité n'est atteinte que si $\|p(x) - y\|^2 = 0$, c'est-à-dire $y = p(x)$. Ainsi, $p(x)$ est l'unique minimum de la distance de $x$ à $F$.

---

### Partie B_5. Si $F$ est de dimension finie muni d'une base orthonormée $(e_1, \dots, e_n)$, le projecteur orthogonal s'exprime par la formule explicite :
   $$\pi_F(x) = \sum_{i=1}^n \langle x, e_i \rangle e_i$$
   Vérifions que $x - \pi_F(x) \in F^\perp$ : pour tout $j \in \{1, \dots, n\}$,
   $$\langle x - \pi_F(x), e_j \rangle = \langle x, e_j \rangle - \sum_{i=1}^n \langle x, e_i \rangle \langle e_i, e_j \rangle = \langle x, e_j \rangle - \langle x, e_j \rangle = 0$$
   Donc $x - \pi_F(x) \in F^\perp$.

6. Soient $x, y \in E$. 
   $$\langle \pi_F(x), y \rangle = \left\langle \sum_{i=1}^n \langle x, e_i \rangle e_i, y \right\rangle = \sum_{i=1}^n \langle x, e_i \rangle \langle e_i, y \rangle$$
   D'autre part :
   $$\langle x, \pi_F(y) \rangle = \left\langle x, \sum_{i=1}^n \langle y, e_i \rangle e_i \right\rangle = \sum_{i=1}^n \langle y, e_i \rangle \langle x, e_i \rangle = \langle \pi_F(x), y \rangle$$
   L'endomorphisme $\pi_F$ est donc auto-adjoint.

7. Posons $J(y) = \|x - y\|^2 = \|x\|^2 - 2\langle x, y \rangle + \|y\|^2$. Soit $v \in F$ une direction de perturbation. On calcule la dérivée directionnelle :
   $$\left.\frac{d}{d\theta} J(y + \theta v)\right|_{\theta=0} = -2\langle x, v \rangle + 2\langle y, v \rangle = 2\langle y - x, v \rangle$$
   Pour que $y = p(x)$ soit un minimum, il faut que cette dérivée soit nulle pour tout $v \in F$, c'est-à-dire $\langle p(x) - x, v \rangle = 0$, ce qui signifie exactement que $x - p(x) \in F^\perp$.

---

### Partie C_8. L'application $\psi : f \mapsto \int_0^1 t f(t) \, dt$ est une forme linéaire continue sur $E$. Par conséquent, $F = \ker(\psi)$ est un sous-espace vectoriel fermé de $E$.
   Son orthogonal $F^\perp$ est de dimension 1 (car $\text{codim}(F) = 1$). Une base de $F^\perp$ est donnée par la fonction $e(t) = t$ (à une constante multiplicative près), car pour tout $f \in F$, $\langle f, e \rangle = \int_0^1 t f(t) \, dt = 0$.

9. Soit $h(t) = t$. On cherche sa projection sur $F$. Comme $h = p(h) + (h - p(h))$ avec $h - p(h) \in F^\perp$, on peut écrire $h - p(h) = \lambda t$ pour un certain $\in \mathbb{R}$.
   Ainsi, $p(h)(t) = t - \lambda t = (1-\lambda)t$. Déterminons $\lambda$ sachant que $p(h) \in F$ :
   $$\int_0^1 t \cdot p(h)(t) \, dt = 0 \implies \int_0^1 t \cdot (1-\lambda)t \, dt = 0 \implies (1-\lambda)\int_0^1 t^2 \, dt = 0$$
   Comme $\int_0^1 t^2 \, dt = \frac{1}{3} \neq 0$, on obtient $1 - \lambda = 0$, soit $\lambda = 1$. 
   Par conséquent, $p(h)(t) = 0$ et $h - p(h) = t$ (ce qui est cohérent puisque $h(t) = t \in F^\perp$).

10. **Analyse critique et limites du modèle :**
    * **Hypothèse de complétude :** L'existence d'un projecteur orthogonal et d'un projeteur de distance minimale repose fondamentalement sur le fait que l'espace est préhilbertien (ou hilbertien si l'on souhaite la complétude pour les sous-espaces fermés quelconques). En dimension infinie, si $F$ n'est pas fermé, la borne inférieure de la distance peut être atteinte par une suite qui diverge hors de $F$, rendant l'existence du projecteur caduque.
    * **Limites numériques :** En pratique (analyse numérique, machine learning avec des espaces de grande dimension), le calcul de la projection orthogonale nécessite l'inversion de matrices de Gram. Si la base choisie est mal conditionnée (vecteurs quasi-colinéaires), le calcul des produits scalaires et l'inversion numérique amplifient considérablement les erreurs d'arrondi machine, rendant le projecteur instable. Le modèle mathématique suppose une précision infinie qui vole en éclats en calcul scientifique réel sans une orthogonalisation préalable (type Gram-Schmidt stabilisé ou factorisation QR).