---
title: 'Cours : Mécanique des fluides'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Mécanique des Fluides (PSI)

## 1. Introduction et Cinématique des fluides

### Définitions fondamentales
* **Fluide :** Milieu continu, déformable, dont les molécules sont en mouvement incessant et désordonné. On distingue les liquides (incompressibles) des gaz (compressibles).
* **Hypothèse du milieu continu :** On néglige la nature moléculaire. Les grandeurs physiques (masse volumique $\rho$, pression $P$, température $T$, vitesse $\vec{v}$) sont des fonctions continues du temps $t$ et de l'espace $\vec{M}(x, y, z)$.
* **Particule de fluide :** Volume élémenttaire $d\tau$ autour d'un point M, grand devant la distance intermoléculaire mais petit devant l'échelle macroscopique du système.

### Description eulérienne vs lagrangienne
* **Description lagrangienne :** On suit chaque particule de fluide au cours du temps. (Variables : position initiale $\vec{a}$ et temps $t$).
* **Description eulérienne :** On observe ce qui se passe en un point fixe de l'espace au cours du temps. (Variables : position $\vec{M}$ et temps $t$). C'est la description privilégiée en PSI.

### Dérivée particulaire (ou substantielle)
Soit $A(M, t)$ une grandeur physique (scalaire ou vectorielle). La variation de $A$ subie par une particule de fluide entre $t$ et $t+dt$ est :
$$\frac{dA}{dt} = \frac{\partial A}{\partial t} + (\vec{v} \cdot \vec{\nabla})A$$
où $\frac{\partial A}{\partial t}$ est la dérivée locale et $(\vec{v} \cdot \vec{\nabla})A$ est la dérivée convective.

---

## 2. Statique des fluides

### Équation fondamentale de la statique des fluides (EFSF)
Dans le référentiel terrestre (supposé galiléen), pour un fluide au repos ($\vec{v} = \vec{0}$), l'application du PFD à une particule de fluide donne :
$$\vec{\nabla} P = \rho \vec{g}$$
où $\vec{g}$ est le champ de pesanteur.

### Conséquences et Théorèmes
* **Fluide incompressible et homogène ($\rho = \text{cte}$) dans un champ de pesanteur uniforme ($\vec{g} = -g \vec{e}_z$) :**
  $$P(z) + \rho g z = \text{cte}$$
  Entre deux points $1$ et $2$ : $P_2 - P_1 = -\rho g (z_2 - z_1)$.
* **Loi de Pascal :** Toute variation de pression en un point d'un fluide incompressible au repos se transmet intégralement dans tout le fluide.
* **Poussée d'Archimède :** Tout corps immergé dans un fluide au repos subit de la part de celui-ci une force verticale, dirigée vers le haut, égale au poids du volume de fluide déplacé :
  $$\vec{F}_{\text{archimède}} = -\iiint_{\text{volume}} \rho_{\text{fluide}} \vec{g} \, d\tau$$

---

## 3. Dynamique des fluides parfaits

Un fluide est dit **parfait** si son modèle néglige les effets visqueux (tenseur des contraintes visqueuses nul, la force pressante est donc la seule force de contact exercée orthogonalement à toute surface).

### Conservation de la masse : Équation de continuité
Pour tout fluide, la conservation de la masse se traduit par l'équation locale :
$$\frac{\partial \rho}{\partial t} + \operatorname{div}(\rho \vec{v}) = 0$$
* **Cas d'un fluide incompressible ($\rho = \text{cte}$) :**
  $$\operatorname{div}(\vec{v}) = 0$$

### Équation d'Euler (Dynamique du fluide parfait)
L'application de la 2ème loi de Newton à une particule de fluide parfait donne l'équation d'Euler :
$$\rho \left( \frac{\partial \vec{v}}{\partial t} + (\vec{v} \cdot \vec{\nabla})\vec{v} \right) = -\vec{\nabla} P + \rho \vec{g}$$

### Théorème de Bernoulli
* **Sous sa forme le long d'une ligne de courant (régime stationnaire, fluide parfait, incompressible, $\vec{g} = -g\vec{e}_z$) :**
  Le long d'une ligne de courant :
  $$P + \frac{1}{2}\rho v^2 + \rho gz = \text{cte}$$
* **Sous sa forme généralisée (si l'écoulement est irrotationnel : $\vec{\nabla} \times \vec{v} = \vec{0}$) :**
  La constante est la même *partout* dans tout le fluide.

---

## 4. Dynamique des fluides visqueux (Fluides réels)

### Viscosité et Navier-Stokes
Pour un fluide réel, les frottements internes s'opposent au mouvement. Pour un fluide newtonien incompressible, la viscosité dynamique $\mu$ (en $\text{Pa}\cdot\text{s}$) intervient via le terme laplacien de la vitesse.
**Équation de Navier-Stokes :**
$$\rho \left( \frac{\partial \vec{v}}{\partial t} + (\vec{v} \cdot \vec{\nabla})\vec{v} \right) = -\vec{\nabla} P + \mu \Delta \vec{v} + \rho \vec{g}$$

### Nombre de Reynolds
Le nombre de Reynolds $Re$ est un nombre sans dimension qui caractérise le régime d'écoulement :
$$Re = \frac{\rho v L}{\mu} = \frac{v L}{\nu}$$
où $L$ est une dimension caractéristique du système et $\nu = \mu/\rho$ la viscosité cinématique (en $\text{m}^2\cdot\text{s}^{-1}$).
* **$Re \ll 1$ :** Régime de Stokes (visqueux, inertie négligeable).
* **$Re \gg 1$ :** Régime d'Euler (inertie dominante, viscosité négligeable sauf aux abords des parois : couches limites).

---

## 5. Méthodes et Résolution de problèmes

1. **Choix du système et de la description :** Privilégier la description eulérienne en régime stationnaire.
2. **Application du théorème de Bernoulli :**
   * Identifier les hypothèses : fluide parfait, incompressible, stationnaire, écoulement le long d'une ligne de courant.
   * Choisir deux points $A$ et $B$ judicieusement (souvent sur une même ligne de courant, avec des vitesses connues ou nulles, et des pressions imposées comme $P_{\text{atm}}$).
3. **Approximation des régimes de Stokes / Poiseuille en canal ou conduite cylindrique :**
   * Poser la symétrie et l'invariance du problème (souvent cylindrique : $\vec{v} = v_z(r) \vec{e}_z$).
   * Projeter l'équation de Navier-Stokes.
   * Intégrer en utilisant les conditions aux limites (condition de non-glissement : $\vec{v} = \vec{0}$ à la paroi).

---

## 6. Pièges à éviter et Erreurs classiques

* **Oubli des conditions de validité de Bernoulli :** Ne jamais appliquer Bernoulli si le fluide est visqueux (sauf perte de charge explicitement modélisée) ou si l'écoulement est instationnaire.
* **Confusion entre pression statique et dynamique :** Dans Bernoulli ($P + \frac{1}{2}\rho v^2 + \rho gz = \text{cte}$), $P$ est la pression statique (pression thermodynamique ressentie par une particule en mouvement avec le fluide).
* **Signe de la Poussée d'Archimède :** Elle est toujours orientée **vers le haut** (sens opposé à la gravité $\vec{g}$).
* **Conditions aux limites en viscosité :** Ne pas oublier la **condition de non-glissement** pour un fluide visqueux au contact d'une paroi solide (la vitesse du fluide est égale à la vitesse de la paroi).