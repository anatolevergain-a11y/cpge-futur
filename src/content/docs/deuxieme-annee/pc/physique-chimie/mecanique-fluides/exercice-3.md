---
title: 'Exercice 1 : Équation de Navier-Stokes et fluides visqueux'
description: 'Problème d entraînement type concours.'
---

# Problème Guidé : Étude d'un film liquide visqueux sur un plan incliné

## Énoncé

On s'intéresse à l'écoulement gravitaire d'un film de liquide visqueux, incompressible, le long d'un plan rigide incliné d'un angle $\alpha$ par rapport à l'horizontale ($0 < \alpha < \pi/2$). 

Le liquide, de masse volumique $\rho$ et de viscosité dynamique $\eta$, est soumis à son poids et aux forces de pression de l'atmosphère environnante (pression $P_0$ uniforme). L'épaisseur du film, mesurée perpendiculairement au plan, est notée $h$. 

On munit l'espace d'un repère cartésien $(O, \vec{u}_x, \vec{u}_y, \vec{u}_z)$ tel que :
- Le plan incliné correspond au plan $y = 0$.
- L'axe $(O, \vec{x})$ est dirigé suivant la ligne de plus grande pente vers le bas.
- L'axe $(O, \vec{y})$ est perpendiculaire au plan, dirigé vers l'extérieur du fluide ($0 \le y \le h$).
- L'axe $(O, \vec{z})$ est horizontal, orthogonal à $(O, \vec{x})$ et $(O, \vec{y})$. On suppose le problème invariant par translation selon $\vec{z}$.

---

## Questions

### I. Analyse préliminaire et cinématique
1. Établir l'expression du champ de pesanteur $\vec{g}$ dans la base $(\vec{u}_x, \vec{u}_y, \vec{u}_z)$.
2. En traduisant l'incompressibilité du fluide et les invariances géométriques du problème, montrer que le champ de vitesse se réduit à $\vec{v}(y) = v(y)\vec{u}_x$.

### II. Application de l'équation de Navier-Stokes
3. Écrire l'équation de Navier-Stokes en régime permanent pour un fluide newtonien incompressible. 
4. Projeter cette équation vectorielle sur les axes $\vec{u}_x$ et $\vec{u}_y$. Simplifier les termes en justifiant rigoureusement chaque approximation physique.
5. Déterminer le champ de pression $P(y)$ dans le film liquide.

### III. Profil de vitesse et débit
6. Intégrer l'équation différentielle portant sur $v(y)$ en utilisant les conditions aux limites appropriées :
   - À la paroi solide ($y = 0$), on supposera une condition de non-glissement.
   - À la surface libre ($y = h$), on négligera les effets visqueux de l'air sur le liquide, ce qui se traduit par une contrainte tangentielle nulle.
7. Exprimer le débit volumique $Q$ par unité de largeur (selon $\vec{z}$) du plan incliné.

### IV. Analyse critique et ordres de grandeur
8. On considère de l'eau à $20^\circ\text{C}$ ($\rho = 1,0 \times 10^3\ \text{kg}\cdot\text{m}^{-3}$, $\eta = 1,0 \times 10^{-3}\ \text{Pa}\cdot\text{s}$) s'écoulant sur un plan incliné à $\alpha = 30^\circ$, avec une épaisseur $h = 1,0\ \text{mm}$.
   - Calculer la vitesse maximale atteinte dans le film.
   - Calculer le nombre de Reynolds adéquat pour cet écoulement et discuter la validité de l'hypothèse d'écoulement laminaire.

---

## Pistes de résolution

- **Invariance et symétrie :** L'indépendance par rapport à $z$ et la condition stationniste permettent d'annuler $\partial_t$ et $\partial_z$. L'équation de continuité se simplifie grandement.
- **Conditions aux limites :** À l'interface air-eau ($y = h$), la continuité des contraintes implique que le tenseur des contraintes visqueuses s'annule (approximation de l'air de viscosité négligeable devant le liquide).
- **Ordres de grandeur :** Attention aux unités lors du calcul numérique du nombre de Reynolds (utiliser une vitesse caractéristique pertinente comme la vitesse moyenne ou maximale).

---

## Corrigé pas à pas

### I. Analyse préliminaire et cinématique
1. Le champ de pesanteur est vertical, dirigé vers le bas. Avec $\vec{u}_x$ orienté vers le bas de la pente (faisant un angle $\alpha$ avec l'horizontale) et $\vec{u}_y$ perpendiculaire au plan vers le haut :
   $$\vec{g} = g \sin(\alpha) \vec{u}_x - g \cos(\alpha) \vec{u}_y$$

2. L'équation de conservation de la masse (incompressibilité) s'écrit $\operatorname{div}(\vec{v}) = 0$, soit en coordonnées cartésiennes :
   $$\frac{\partial v_x}{\partial x} + \frac{\partial v_y}{\partial y} + \frac{\partial v_z}{\partial z} = 0$$
   - Par invariance selon $\vec{z}$, $\frac{\partial}{\partial z} = 0$.
   - Par invariance par translation le long du plan (régime établi loin des bords), $\frac{\partial}{\partial x} = 0$.
   Il reste $\frac{\partial v_y}{\partial y} = 0$, donc $v_y$ ne dépend pas de $y$. Comme le fluide est imperméable à la paroi $y = 0$ ($v_y(0) = 0$), on en déduit que **$v_y = 0$ partout**.
   De plus, la symétrie du problème impose $v_z = 0$. Le champ de vitesse est donc de la forme :
   $$\vec{v}(y) = v(y)\vec{u}_x$$

### II. Application de l'équation de Navier-Stokes
3. L'équation de Navier-Stokes pour un fluide newtonien incompressible en régime permanent s'écrit :
   $$\rho \left( \frac{\partial \vec{v}}{\partial t} + (\vec{v} \cdot \vec{\nabla})\vec{v} \right) = -\vec{\nabla}P + \eta \Delta \vec{v} + \rho \vec{g}$$

4. - **Termes d'inertie :** Comme $\vec{v} = v(y)\vec{u}_x$ et que $v$ ne dépend que de $y$ (et $\frac{\partial}{\partial x} = 0$), le terme d'advection $(\vec{v} \cdot \vec{\nabla})\vec{v} = v_x \frac{\partial v_x}{\partial x} \vec{u}_x = 0$. Le régime permanent est stationnaire ($\frac{\partial}{\partial t} = 0$). **L'inertie est donc strictement nulle.**
   - **Projection sur $\vec{u}_x$ :**
     $$0 = -\frac{\partial P}{\partial x} + \eta \frac{d^2 v}{dy^2} + \rho g \sin(\alpha)$$
   - **Projection sur $\vec{u}_y$ :**
     $$0 = -\frac{\partial P}{\partial y} - \rho g \cos(\alpha)$$

5. L'intégration de l'équation suivant $\vec{u}_y$ donne :
   $$P(y) = -\rho g \cos(\alpha) y + Cte$$
   À la surface libre ($y = h$), la pression est imposée par l'atmosphère : $P(h) = P_0$. Ainsi :
   $$P(y) = P_0 + \rho g \cos(\alpha) (h - y)$$

### III. Profil de vitesse et débit
6. Reportons $P(y)$ dans l'équation selon $\vec{u}_x$. Comme le problème est invariant par translation selon $\vec{x}$, $\frac{\partial P}{\partial x} = 0$. L'équation se simplifie en :
   $$\eta \frac{d^2 v}{dy^2} = -\rho g \sin(\alpha) \implies \frac{d^2 v}{dy^2} = -\frac{\rho g \sin(\alpha)}{\eta}$$
   On intègre une première fois :
   $$\frac{dv}{dy} = -\frac{\rho g \sin(\alpha)}{\eta} y + A$$
   *Condition aux limites en $y = h$ (surface libre) :* La contrainte tangentielle visqueuse s'annule, soit $\eta \frac{dv}{dy}(h) = 0$, ce qui implique $A = \frac{\rho g \sin(\alpha)}{\eta} h$.
   $$\frac{dv}{dy} = \frac{\rho g \sin(\alpha)}{\eta} (h - y)$$
   On intègre une seconde fois :
   $$v(y) = \frac{\rho g \sin(\alpha)}{\eta} \left( hy - \frac{y^2}{2} \right) + B$$
   *Condition aux limites en $y = 0$ (paroi) :* Non-glissement $v(0) = 0 \implies B = 0$.
   Le profil de vitesse est donc parabolique :
   $$v(y) = \frac{\rho g \sin(\alpha)}{2\eta} y (2h - y)$$

7. Le débit volumique par unité de largeur $Q$ s'obtient en intégrant le profil de vitesse entre $y = 0$ et $y = h$ :
   $$Q = \int_{0}^{h} v(y) \, dy = \frac{\rho g \sin(\alpha)}{2\eta} \int_{0}^{h} (2hy - y^2) \, dy$$
   $$Q = \frac{\rho g \sin(\alpha)}{2\eta} \left[ h y^2 - \frac{y^3}{3} \right]_{0}^{h} = \frac{\rho g h^3 \sin(\alpha)}{3\eta}$$

### IV. Analyse critique et ordres de grandeur
8. - **Vitesse maximale :** Elle est atteinte à la surface libre ($y = h$) :
     $$v_{\max} = v(h) = \frac{\rho g \sin(\alpha) h^2}{2\eta}$$
     A.N. : 
     $$\rho = 10^3\ \text{kg}\cdot\text{m}^{-3}, \quad g \approx 9,81\ \text{m}\cdot\text{s}^{-2}, \quad \alpha = 30^\circ \ (\sin\alpha = 0,5)$$
     $$h = 1,0\ \text{mm} = 10^{-3}\ \text{m}, \quad \eta = 10^{-3}\ \text{Pa}\cdot\text{s}$$
     $$v_{\max} = \frac{10^3 \times 9,81 \times 0,5 \times (10^{-3})^2}{2 \times 10^{-3}} = \frac{4,905 \times 10^{-3}}{2 \times 10^{-3}} = 2,45\ \text{m}\cdot\text{s}^{-1}$$

   - **Nombre de Reynolds et validité :** 
     Le nombre de Reynolds se définit par $Re = \frac{\rho v_{\text{caractéristique}} h_{\text{caractéristique}}}{\eta}$. 
     Prenons comme vitesse caractéristique la vitesse moyenne $v_{\text{moy}} = \frac{Q}{h} = \frac{2}{3} v_{\max} \approx 1,63\ \text{m}\cdot\text{s}^{-1}$ et $h = 10^{-3}\ \text{m}$.
     $$Re = \frac{10^3 \times 1,63 \times 10^{-3}}{10^{-3}} \approx 163$$
     *Analyse critique :* Le nombre de Reynolds trouvé est de l'ordre de $160$. Pour un film liquide sur un plan incliné, le seuil de transition vers la turbulence se situe généralement autour de $Re \approx 1 \to 20$ si l'on considère les premières instabilités ondulatoires de surface (ondes de Tollmien-Schlichting ou instabilités interfaciales de Kapitza), bien que la turbulence "vraie" n'intervienne qu'au-delà de $Re \approx 1000$. 
     Ici, avec $Re \approx 160$, **l'hypothèse d'un écoulement laminaire stationnaire stationnaire est très probablement mise en défaut** : des ondulations régulières apparaissent à la surface du film (régime ondulatoire). Le modèle stationnaire pur ne décrit plus fidèlement la réalité expérimentale, bien qu'il fournisse un premier ordre de grandeur acceptable.