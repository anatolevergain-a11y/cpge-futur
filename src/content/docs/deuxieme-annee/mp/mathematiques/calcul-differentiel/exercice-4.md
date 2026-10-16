---
title: 'Exercice 2 : Extrema locaux et globaux'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Optimisation énergétique et thermique d'un dispositif de micro-électronique

---

## Énoncé

Dans le cadre de la conception d'un microprocesseur à haute densité d'intégration, on étudie la répartition de la température à la surface d'une puce silicium modélisée par un domaine rectangulaire compact. 

Soit $f : \mathbb{R}^2 \to \mathbb{R}$ la fonction représentant l'excès de température (en $\text{K}$) par rapport à l'ambiance, définie pour tout $(x, y) \in \mathbb{R}^2$ par :
$$f(x,y) = (x^2 + y^2 - 1)e^{-x} + \alpha(x^2 + y^2)$$
où $\alpha > 0$ est un paramètre physique sans dimension traduisant un couplage de conduction thermique externe avec le radiateur.

Pour des raisons de viabilité du composant, le fonctionnement nominal impose de maintenir le système sur un domaine compact $\mathcal{D} = \{(x,y) \in \mathbb{R}^2 \mid x^2 + y^2 \leq R^2\}$, où $R = 2$ (les dimensions sont normalisées). 

On s'intéresse à la détermination des points chauds (extrema globaux et locaux) de la puce selon la valeur du paramètre technologique $\alpha$.

---

## Questions

1. **Étude des différentiabilités et du cadre topologique**
   a) Justifier que $f$ est de classe $\mathcal{C}^\infty$ sur $\mathbb{R}^2$.
   b) Rappeler pourquoi l'existence de points de maximum et de minimum globaux de $f$ sur $\mathcal{D}$ est garantie.

2. **Recherche des points critiques intérieurs**
   a) Calculer les dérivées partielles premières $\frac{\partial f}{\partial x}(x,y)$ et $\frac{\partial f}{\partial y}(x,y)$.
   b) Montrer que les points critiques intérieurs de $f$ vérifient nécessairement $y = 0$ et expliciter l'équation vérifiée par les abscisses $x$ critiques.
   c) Dans le cas particulier où $\alpha = e^{-1}$, déterminer explicitement les coordonnées du point critique intérieur.

3. **Nature des points critiques (Analyse locale)**
   a) Calculer la matrice hessienne $H_f(x,y)$ d'une fonction générique.
   b) Pour $\alpha = e^{-1}$, classifier le point critique trouvé à la question 2.c (maximum, minimum ou point selle).

4. **Étude sur la frontière et analyse critique du modèle**
   a) Posant $x = R \cos(\theta)$ et $y = R \sin(\theta)$ avec $\theta \in [-\pi, \pi]$, exprimer $f$ sur la frontière $\partial \mathcal{D}$ en fonction de $\theta$ et de $\alpha$.
   b) *Analyse critique :* Discuter la pertinence physique du modèle lorsque $R \to +\infty$ (limite thermodynamique globale). Quelle est la limite de $f(x,y)$ lorsque $x \to -\infty$ à $y$ fixé ? Le modèle est-il physiquement viable dans cette zone ?

---

## Pistes et indications

* **Q1.b :** Penser au théorème de Weierstrass (continuité sur un compact).
* **Q2.b :** Factoriser par $y$ dans l'équation relative à $\partial_y f = 0$.
* **Q3.b :** Utiliser les valeurs propres ou le déterminant et la trace de la hessienne.
* **Q4.b :** Regarder le comportement dominant de $e^{-x}$ lorsque $x$ est grand et négatif (le terme d'amplification exponentielle devient prépondérant, ce qui physiquement traduirait une source d'énergie infinie non réaliste).

---

## Corrigé pas à pas

### 1. Étude préliminaire
a) La fonction $f$ est une combinaison algébrique (somme et produit) et composée de fonctions usuelles ($\mathcal{C}^\infty$ sur $\mathbb{R}^2$), à savoir des polynômes et l'application $(x,y) \mapsto e^{-x}$. Par conséquent, $f$ est de classe $\mathcal{C}^\infty$ sur $\mathbb{R}^2$.

b) Le domaine $\mathcal{D} = \{(x,y) \in \mathbb{R}^2 \mid x^2 + y^2 \leq 4\}$ est fermé et borné dans $\mathbb{R}^2$ (c'est un disque fermé), donc c'est un compact. De plus, $f$ est continue sur $\mathcal{D}$ comme restriction d'une fonction continue sur $\mathbb{R}^2$. D'après le **théorème de Weierstrass**, $f$ admet un maximum global et un minimum global sur $\mathcal{D}$.

---

### 2. Points critiques intérieurs
a) Calculons les dérivées partielles :
$$\frac{\partial f}{\partial x}(x,y) = 2x e^{-x} - (x^2 + y^2 - 1)e^{-x} + 2\alpha x = \left(-x^2 + 2x - y^2 + 1\right)e^{-x} + 2\alpha x$$
$$\frac{\partial f}{\partial y}(x,y) = 2y e^{-x} + 2\alpha y = 2y \left(e^{-x} + \alpha\right)$$

b) Un point critique $(x,y)$ est solution du système $\nabla f(x,y) = (0,0)$ :
1. $\frac{\partial f}{\partial y} = 0 \iff 2y(e^{-x} + \alpha) = 0$.
Comme $\alpha > 0$, on a $e^{-x} + \alpha > 0$ pour tout $x \in \mathbb{R}$. La première condition impose donc nécessairement **$y = 0$**.

2. En injectant $y = 0$ dans $\frac{\partial f}{\partial x} = 0$, il vient :
$$(-x^2 + 2x + 1)e^{-x} + 2\alpha x = 0$$

c) Si $\alpha = e^{-1}$, l'équation s'écrit :
$$(-x^2 + 2x + 1)e^{-x} + 2e^{-x}x = 0 \iff (-x^2 + 4x + 1)e^{-x} = 0$$
Puisque $e^{-x} \neq 0$, cela équivaut à $-x^2 + 4x + 1 = 0$.
Le discriminant réduit est $\Delta' = 2^2 - (-1)(1) = 5$. Les racines sont donc :
$$x_1 = 2 - \sqrt{5} \quad \text{et} \quad x_2 = 2 + \sqrt{5}$$
*Vérification d'appartenance à l'intérieur de $\mathcal{D}$ ($R=2$) :*
- $x_1 \approx -0.236 \implies x_1^2 \approx 0.056 < 4$ (dans $\mathcal{D}$).
- $x_2 \approx 4.236 \implies x_2^2 \approx 17.94 > 4$ (hors de $\mathcal{D}$).
Le seul point critique intérieur est donc $C = (2 - \sqrt{5}, 0)$.

---

### 3. Nature des points critiques
a) Calculons les dérivées secondes :
- $\frac{\partial^2 f}{\partial x^2}(x,y) = (-2x + 2)e^{-x} - (-x^2 + 2x - y^2 + 1)e^{-x} + 2\alpha = (x^2 - 4x + y^2 + 1)e^{-x} + 2\alpha$
- $\frac{\partial^2 f}{\partial y^2}(x,y) = -2e^{-x} + 2\alpha$
- $\frac{\partial^2 f}{\partial x \partial y}(x,y) = -2y e^{-x}$

b) Pour $\alpha = e^{-1}$ et au point $C(2-\sqrt{5}, 0)$ :
On a $e^{-x_1} = e^{\sqrt{5}-2}$. 
La matrice hessienne en $C$ est diagonale car $\frac{\partial^2 f}{\partial x \partial y}(C) = 0$ (puisque $y=0$).
- $\frac{\partial^2 f}{\partial y^2}(C) = -2e^{-x_1} + 2e^{-1} = 2e^{-1}(1 - e^{1-x_1}) = 2e^{-1}(1 - e^{\sqrt{5}-1}) < 0$ (car $\sqrt{5} > 1$).
- Le terme en $x$ donne : $\frac{\partial^2 f}{\partial x^2}(C) = (x_1^2 - 4x_1 + 1)e^{-x_1} + 2e^{-1}$.
En remarquant que $x_1$ annule $-x^2 + 4x + 1$, on a $x_1^2 - 4x_1 - 1 = 0 \implies x_1^2 - 4x_1 + 1 = 2$.
Ainsi, $\frac{\partial^2 f}{\partial x^2}(C) = 2e^{-x_1} + 2e^{-1} > 0$.

Les valeurs propres de la hessienne sont de signes strictement opposés (l'une est strictement positive, l'autre strictement négative). Le point $C$ est donc un **point selle (ou point col)**.

---

### 4. Étude frontalière et analyse critique du modèle
a) Sur la frontière $\partial \mathcal{D}$ ($x^2 + y^2 = R^2 = 4$), la fonction $f$ devient :
$$g(\theta) = (4 - 1)e^{-2\cos(\theta)} + \alpha(4) = 3e^{-2\cos(\theta)} + 4\alpha$$
C'est une fonction $\mathcal{C}^\infty$ sur $[-\pi, \pi]$.

b) **Analyse critique des limites du modèle :**
- Étudions le comportement de $f(x,0)$ lorsque $x \to -\infty$ :
$$f(x,0) = (x^2 - 1)e^{-x} + \alpha x^2$$
Lorsque $x \to -\infty$, $x^2 - 1 \to +\infty$ et $érer^{-x} \to +\infty$ (par croissance comparée). Par conséquent, $f(x,0) \to +\infty$.
- *Limites physiques :* Mathématiquement, la fonction diverge vers $+\infty$. Physiquement, un modèle où la température explose exponentiellement lorsque l'on s'éloigne vers les abscisses négatives indique que le terme source $(x^2-1)e^{-x}$ n'est plus tempéré. Dans un vrai microprocesseur, le flux thermique ne peut croître de manière exponentielle sans source d'énergie infinie. Ce modèle mathématique n'est donc valide que localement sur le domaine compact $\mathcal{D}$ choisi, et perd tout sens physique si on l'extrapole à $\mathbb{R}^2$ tout entier.