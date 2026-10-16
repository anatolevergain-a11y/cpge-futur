---
title: 'Exercice 1 : Écoulements visqueux'
description: 'Problème d entraînement type concours.'
---

# Problème guidé corrigé : Étude d'un écoulement visqueux stationnaire

*En tant qu'examinateur de concours CPGE (filière PC), je vous propose ce problème guidé conçu pour évaluer votre maîtrise des équations de Navier-Stokes, des conditions aux limites et de l'analyse critique des résultats en mécanique des fluides.*

---

## Présentation du problème

On s'intéresse à l'écoulement stationnaire, bidimensionnel et incompressible d'un fluide newtonien de masse volumique $\rho$ et de viscosité dynamique $\eta$, confiné entre deux plaques planes, infinies, horizontales et rigides. 
* La plaque inférieure, fixe, est située dans le plan $z = 0$.
* La plaque supérieure, mobile, est située dans le plan $z = H$ et se déplace à la vitesse constante $V_0$ selon l'axe $(Ox)$.

L'écoulement est entraîné à la fois par ce mouvement de cisaillement et par un gradient de pression imposé le long de l'axe $(Ox)$. On note $\frac{\partial P}{\partial x} = Cte$.

Le champ de vitesse du fluide est cherché sous la forme :
$$\vec{v}(x,y,z) = v_x(z) \vec{u}_x$$

---

## Partie I : Analyse préliminaire et simplification des équations

### Q1. Justification cinématique
Question: ** À l'aide de l'équation de conservation de la masse (continuité) pour un fluide incompressible, justifiez que la composante $v_x$ ne dépend ni de $x$ ni de $y$.

**Corrigé :**
Pour un fluide incompressible, l'équation de conservation de la masse s'écrit :
$$\text{div}(\vec{v}) = 0$$
En exprimant cette divergence dans le cas cartésien avec $\vec{v} = v_x(x, y, z) \vec{u}_x$ :
$$\frac{\partial v_x}{\partial x} + \frac{\partial v_y}{\partial y} + \frac{\partial v_z}{\partial z} = 0$$
Puisque l'énoncé indique que $v_y = 0$ et $v_z = 0$, il vient immédiatement :
$$\frac{\partial v_x}{\partial x} = 0$$
Par conséquent, $v_x$ ne dépend pas de la coordonnée $x$. De plus, par symétrie du dispositif selon les directions transverses ($y$), le profil d'écoulement est invariant par translation selon $y$, soit $\frac{\partial v_x}{\partial y} = 0$. 
Finalement, $v_x$ ne dépend que de la variable d'espace $z$ : $v_x = v_x(z)$.

---

### Q2. Application de l'équation de Navier-Stokes
Question: ** Écrire l'équation de Navier-Stokes régissant cet écoulement stationnaire en négligant les forces volumiques (pesanteur). Montrez qu'elle se simplifie en une équation différentielle ordinaire (EDO) liant la dérivée seconde de $v_x$ au gradient de pression.

**Corrigé :**
L'équation de Navier-Stokes pour un fluide incompressible en régime stationnaire s'écrit :
$$\rho \left( (\vec{v} \cdot \vec{\nabla})\vec{v} \right) = -\vec{\nabla} P + \eta \Delta \vec{v} + \vec{f}_{\text{vol}}$$

En négligeant la pesanteur ($\vec{f}_{\text{vol}} = \vec{0}$) et en tenant compte de la forme du champ de vitesse :
* Terme d'advection : $(\vec{v} \cdot \vec{\nabla})\vec{v} = v_x \frac{\partial v_x}{\partial x} \vec{u}_x = \vec{0}$ (car $\frac{\partial v_x}{\partial x} = 0$).
* Terme de pression : $-\vec{\nabla} P = -\frac{\partial P}{\partial x} \vec{u}_x$ (la pression ne dépend que de $x$).
* Terme visqueux : $\eta \Delta \vec{v} = \eta \frac{\partial^2 v_x}{\partial z^2} \vec{u}_x$.

Projection sur l'axe $(Ox)$ :
$$0 = -\frac{\partial P}{\partial x} + \eta \frac{d^2 v_x}{dz^2}$$

Soit l'EDO :
$$\eta \frac{d^2 v_x}{dz^2} = \frac{\partial P}{\partial x}$$

---

## Partie II : Résolution et profil de vitesse

### Q3. Conditions aux limites
Question: ** Précisez les conditions aux limites (C.L.) vérifiées par la vitesse $v_x(z)$ aux parois $z = 0$ et $z = H$, en supposant l'hypothèse de non-glissement du fluide.

**Corrigé :**
L'hypothèse de non-glissement stipule que la vitesse du fluide au contact d'une paroi solide est égale à la vitesse de cette paroi :
* À la paroi inférieure ($z = 0$) : fixe $\implies v_x(0) = 0 \text{ m}\cdot\text{s}^{-1}$
* À la paroi supérieure ($z = H$) : mobile à $V_0 \vec{u}_x$ $\implies v_x(H) = V_0 \text{ m}\cdot\text{s}^{-1}$

---

### Q4. Expression du profil de vitesse
Question: ** En intégrant l'EDO précédente et en utilisant les conditions aux limites, exprimez le profil de vitesse $v_x(z)$ en fonction de $z$, $H$, $V_0$, de la viscosité $\eta$ et du gradient de pression $\frac{dP}{dx}$ (noté par la suite $P'$).

**Corrigé :**
On intègre deux fois par rapport à $z$ l'équation différentielle $\frac{d^2 v_x}{dz^2} = \frac{P'}{\eta}$ :
$$\frac{dv_x}{dz} = \frac{P'}{\eta} z + A$$
$$v_x(z) = \ utilisons \frac{P'}{2\eta} z^2 + A z + B$$
où $A$ et $B$ sont des constantes d'intégration.

1. Application de la C.L. en $z = 0$ :
$$v_x(0) = 0 \implies B = 0$$

2. Application de la C.L. en $z = H$ :
$$v_x(H) = V_0 \implies \frac{P'}{2\eta} H^2 + A H = V_0 \implies A = \frac{V_0}{H} - \frac{P' H}{2\eta}$$

Le profil de vitesse complet s'écrit donc :
$$v_x(z) = \frac{V_0}{H} z + \frac{P'}{2\eta} z(z - H)$$

Ce profil est la superposition d'un écoulement de type **Couette** pur (linéaire) et d'un écoulement de type **Poiseuille** (parabolique).

---

## Partie III : Grandeurs globales et Analyse critique

### Q5. Calcul du débit volumique
Question: ** Exprimez le débit volumique $Q$ par unité de largeur (selon l'axe $y$) à travers une section droite de l'écoulement.

**Corrigé :**
Par définition, le débit volumique par unité de largeur (pour une tranche de largeur unité selon $y$) est :
$$Q = \int_{0}^{H} v_x(z) \, dz$$
Calculons cette intégrale :
$$Q = \int_{0}^{H} \left( \frac{V_0}{H} z + \frac{P'}{2\eta} (z^2 - H z) \right) dz$$
$$Q = \left[ \frac{V_0}{2 H} z^2 + \frac{P'}{2\eta} \left( \frac{z^3}{3} - H \frac{z^2}{2} \right) \right]_{0}^{H}$$
$$Q = \frac{V_0 H}{2} + \frac{P'}{2\eta} \left( \frac{H^3}{3} - \frac{H^3}{2} \right)$$
$$Q = \frac{V_0 H}{2} - \frac{P' H^3}{12 \eta}$$

---

### Q6. Analyse critique et physique des résultats (Attendu type Concours)
Question: ** Analysez l'expression du débit $Q$ obtenue à la question précédente. Que se passe-t-il si le gradient de pression est défavorable ($P' > 0$) ? Discutez des limites physiques du modèle.

**Corrigé de l'examinateur :**
Une analyse critique rigoureuse met en évidence plusieurs points clés attendus par le jury :

1. **Contribution des deux moteurs de l'écoulement :**
   * Le terme $\frac{V_0 H}{2}$ représente la contribution de l'entraînement par cisaillement (effet Couette). Il est toujours positif si $V_0 > 0$.
   * Le terme $-\frac{P' H^3}{12 \eta}$ représente la contribution due au gradient de pression (effet Poiseuille). Si $P' < 0$ (pression décroissante dans le sens de l'écoulement), ce terme est positif et favorise l'écoulement.

2. **Gradient de pression défavorable ($P' > 0$) :**
   * Si le fluide est poussé dans le sens inverse du mouvement de la plaque ($P' > 0$), ce terme devient négatif. 
   * Si le gradient de pression est suffisamment intense, on peut avoir $Q = 0$, voire $Q < 0$ : le fluide est globalement repoussé en sens inverse du mouvement de la plaque supérieure par la surpression aval. Un phénomène de recirculation (zone de contre-courant) apparaît alors près de la plaque inférieure.

3. **Limites du modèle :**
   * **Régime laminaire :** Ce modèle stationnaire analytique n'est valable qu'à faible nombre de Reynolds ($\text{Re} = \frac{\rho V_0 H}{\eta} \ll 2300$). Au-delà, l'écoulement devient turbulent et les termes non-linéaires d'advection ne peuvent plus être négligés.
   * **Effets de bords :** L'hypothèse de plaques infinies selon $y$ occulte les effets de friction sur les parois latérales (canaux de largeur finie).