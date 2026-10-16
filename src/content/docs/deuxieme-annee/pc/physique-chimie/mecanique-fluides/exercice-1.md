---
title: 'Exercice 1 : Équation de Navier-Stokes'
description: 'Problème d entraînement type concours.'
---

# Problème : Étude d'un écoulement visqueux stationnaire et analyse critique des modèles

---

## Énoncé

On s'intéresse à l'écoulement unidirectionnel, stationnaire et incompressible d'un fluide newtonien visqueux (de masse volumique $\rho$ et de viscosité dynamique $\eta$) entre deux plaques planes, infinies et parallèles, situées en $y = 0$ et $y = h$. La plaque inférieure (en $y = 0$) est fixe, tandis que la plaque supérieure (en $y = h$) se déplace à la vitesse constante $V_0$ selon l'axe $\vec{u}_x$. 

Cet écoulement, connu sous le nom d'écoulement de Couette plan, est soumis à un gradient de pression longitudinal $\frac{\partial P}{\partial x}$ supposé uniforme.

On pose le champ de vitesse sous la forme $\vec{v}(x,y,z) = v_x(y) \vec{u}_ഷ്യ$.

---

## Questions

1. **Analyse préliminaire et géométrie :** Justifier l'hypothèse d'incompressibilité et l'indépendance de la vitesse vis-à-vis des coordonnées $x$ et $z$.
2. **Application de Navier-Stokes :** À partir de l'équation de Navier-Stokes pour un fluide newtonien incompressible, établir l'équation différentielle vérifiée par $v_x(y)$.
3. **Résolution :** Exprimer le profil de vitesse $v_x(y)$ en fonction de $y$, $h$, $V_0$, $\eta$ et du gradient de pression $\frac{\partial P}{\partial x}$.
4. **Cas particulier :** En déduire le profil de vitesse dans le cas d'un écoulement de Couette pur (sans gradient de pression). Tracer qualitativement ce profil.
5. **Analyse critique et limites du modèle :** 
   - Discuter la validité de l'hypothèse de milieu continu au voisinage des parois.
   - À partir de quel nombre sans dimension caractérisant l'écoulement l'hypothèse d'un régime stationnaire et laminaire peut-elle être remise en cause ? Discuter brièvement.

---

## Pistes

1. Utiliser l'équation de continuité (conservation de la masse) pour simplifier les composantes du champ de vitesse.
2. Écrire l'équation de Navier-Stokes en projetant selon $\vec{u}_x$, en éliminant les termes nuls par symétrie et stationnarité.
3. Intégrer deux fois l'équation différentielle obtenue en tenant compte des conditions aux limites d'adhérence du fluide sur les plaques ($y=0$ et $y=h$).
4. Identifier les forces de pression et les forces visqueuses pour caractériser physiquement le profil obtenu.

---

## Corrigé pas à pas

### 1. Analyse préliminaire et géométrie
* **Incompressibilité :** Le fluide est supposé incompressible, ce qui se traduit par une masse volumique $\rho$ constante, soit l'équation de conservation de la masse :
  $$\text{div}(\vec{v}) = 0$$
* **Champ de vitesse :** L'écoulement est invariant par translation selon $x$ et $z$ (plaques infinies), donc $\frac{\partial}{\partial x} = 0$ et $\frac{\partial}{\partial z} = 0$. L'équation de continuité devient alors :
  $$\frac{\partial v_x}{\partial x} + \frac{\partial v_y}{\partial y} + \frac{\partial v_z}{\partial z} = 0 \implies \frac{\partial v_y}{\partial y} = 0$$
  Puisque la plaque inférieure en $y=0$ est imperméable ($v_y(y=0) = 0$), on en déduit que $v_y(y) = 0$ partout. De même, par symétrie du problème, $v_z = 0$. Le champ de vitesse se réduit bien à $\vec{v} = v_x(y)\vec{u}_x$.

### 2. Application de l'équation de Navier-Stokes
L'équation de Navier-Stokes pour un fluide newtonien incompressible s'écrit :
$$\rho \left( \frac{\partial \vec{v}}{\partial t} + (\vec{v} \cdot \vec{\nabla})\vec{v} \right) = -\vec{\nabla} P + \eta \Delta \vec{v} + \rho \vec{g}$$
* **Régime stationnaire :** $\frac{\partial \vec{v}}{\partial t} = \vec{0}$.
* **Terme advectif :** $(\vec{v} \cdot \vec{\nabla})\vec{v} = v_x \frac{\partial v_x}{\partial x} \vec{u}_x = \vec{0}$ car $v_x$ ne dépend pas de $x$.
* **Projection sur l'axe $\vec{u}_x$ :**
  $$0 = -\frac{\partial P}{\partial x} + \eta \frac{d^2 v_x}{dy^2}$$
  *(On néglige ici l'effet de la pesanteur selon $x$, ou on suppose l'axe horizontal).*

### 3. Résolution de l'équation différentielle
L'équation différentielle du second ordre est :
$$\frac{d^2 v_x}{dy^2} = \frac{1}{\eta} \frac{\partial P}{\partial x}$$
Par double integration par rapport à $y$ :
$$v_x(y) = \frac{1}{2\eta} \left( \frac{\partial P}{\partial x} \right) y^2 + A y + B$$
où $A$ et $B$ sont des constantes d'intégration déterminées par les conditions aux limites d'adhérence visqueuse :
* En $y = 0$, le fluide est immobile par rapport à la plaque fixe : $v_x(0) = 0 \implies B = 0$.
* En $y = h$, le fluide a la vitesse de la plaque supérieure : $v_x(h) = V_0 \implies \frac{1}{2\eta} \left( \frac{\partial P}{\partial x} \right) h^2 + A h = V_0$, soit :
  $$A = \frac{V_0}{h} - \frac{h}{2\eta} \frac{\partial P}{\partial x}$$

Le profil de vitesse complet est donc :
$$v_x(y) = \frac{V_0}{h} y + \frac{1}{2\eta} \frac{\partial P}{\partial x} y (y - h)$$

### 4. Cas particulier de l'écoulement de Couette pur
Si le gradient de pression est nul ($\frac{\partial P}{\partial x} = 0$), le profil devient strictement linéaire :
$$v_x(y) = V_0 \frac{y}{h}$$
* **Interprétation :** Le mouvement du fluide est uniquement entraîné par le cisaillement exercé par la plaque mobile supérieure (effet d'entraînement visqueux pur).

---

### 5. Analyse critique et limites du modèle

* **Hypothèse de milieu continu et condition d'adhérence :** 
  L'utilisation des équations de Navier-Stokes repose fondamentalement sur l'hypothèse de milieu continu, ce qui implique que le libre parcours moyen des molécules du fluide $\lambda$ doit être très inférieur à l'échelle caractéristique du système ($h$). 
  Si $h$ devient très petit (microsystèmes fluidiques, $h \sim 1\,\mu\text{m}$ ou moins), le rapport $\text{Kn} = \frac{\lambda}{h}$ (nombre de Knudsen) augmente. L'hypothèse d'adhérence parfaite ($v = 0$ à la paroi) n'est plus rigoureusement exacte : il apparaît un phénomène de **glissement à la paroi** (*slip flow*), invalidant partiellement les conditions aux limites usuelles de Navier-Stokes.

* **Stabilité et transition vers le régime turbulent :**
  L'hypothèse d'un écoulement stationnaire et laminaire n'est valable que si les forces visqueuses dominent largement les forces d'inertie. Le nombre sans dimension pertinent pour quantifier cela est le **nombre de Reynolds** de l'écoulement, défini par exemple par $\text{Re} = \frac{\rho V_0 h}{\eta}$ (pour un Couette pur). 
  Si $\text{Re}$ dépasse un seuil critique (de l'ordre de $10^3$ pour ce type d'écoulement), des instabilités apparaissent, l'écoulement devient instationnaire, tourbillonnaire et tridimensionnel : le modèle stationnaire unidirectionnel s'effondre alors totalement.