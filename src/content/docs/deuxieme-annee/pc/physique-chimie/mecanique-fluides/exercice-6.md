---
title: 'Exercice 2 : Bilans de quantité de mouvement'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude d'un jet plan impactant une plaque plane

*Ce problème aborde la modélisation par un bilan macroscopique de quantité de mouvement d'un jet fluide bidimensionnel (type écoulement plan) frappant une plaque fixe. C'est un classique des épreuves écrites de physique en CPGE (filière PC).*

---

## 1. Introduction et position du problème

On considère un jet de fluide incompressible de masse volumique $\rho$ et de viscosité dynamique $\eta$, s'écoulant dans le plan $(O, \vec{e}_x, \vec{e}_y)$. Le jet est permanent et bidimensionnel. 

À l'amont ($x < 0$), le jet a une épaisseur $2h$ et une vitesse uniforme $\vec{v}_1 = V_0 \vec{e}_x$. Il frappe une plaque plane infinie, perpendiculaire à l'axe des abscisses, située en $x = 0$ (ou au voisinage immédiat). Le jet se sépare alors en deux branches qui s'écoulent le long de la plaque (selon $\vec{e}_y$). On négligera l'action de la pesanteur ($\vec{g} = \vec{0}$) devant les forces d'inertie et de pression, ainsi que les frottements du fluide sur la plaque dans la zone d'impact.

L'objectif de ce problème est de déterminer la force totale exercée par le fluide sur la plaque à l'aide d'un bilan de quantité de mouvement.

---

## 2. Étude préliminaire et volume de contrôle

On définit un volume de contrôle $\mathcal{V}$ délimité par :
* Une section d'entrée $\Sigma_1$ située à l'amont dans le jet, à travers laquelle le fluide entre avec la vitesse $\vec{v}_1 = V_0 \vec{e}_x$.
* Une section de sortie $\Sigma_2$ (branche supérieure) et une section $\Sigma_3$ (branche inférieure) où le fluide s'échappe parallèlement à la plaque.
* La surface de la plaque $\Sigma_{\text{plaque}}$ en contact avec le fluide au voisinage de l'impact.
* Des surfaces latérales fictives $\Sigma_{\text{lat}}$ suffisamment éloignées pour que la pression y soit égale à la pression atmosphérique $P_0$.

### Question 1
> Rappeler l'expression du théorème d'Euler (bilan macroscopique de la quantité de mouvement) pour un volume de contrôle $\mathcal{V}$ fixe et indéformable, en régime permanent.

**Corrigé guidé :**
En régime permanent, le théorème d'Euler appliqué au volume de contrôle $\mathcal{V}$ s'écrit :
$$\vec{F}_{\text{ext} \to \mathcal{V}} = \iint_{\partial\mathcal{V}} \rho \vec{v} (\vec{v} \cdot \vec{n}) \, dS$$
où :
* $\vec{F}_{\text{ext} \to \mathcal{V}}$ est la résultante des forces extérieures s'exerçant sur le volume de contrôle (forces de pression et forces exercées par la plaque).
* $\partial\mathcal{V}$ est la surface fermée délimitant $\mathcal{V}$, orientée par sa normale $\vec{n}$ **sortante**.
* $\vec{v}$ est le champ de vitesse du fluide.

---

## 3. Bilan des forces extérieures

### Question 2
> Identifier les différentes composantes de $\vec{F}_{\text{ext} \to \mathcal{V}}$ agissant sur le volume de contrôle. En déduire l'expression de la force $\vec{F}_{\text{plaque}\to\text{fluide}}$ exercée par la plaque sur le fluide en fonction de la force cherchée $\vec{F}_{\text{fluide}\to\text{plaque}}$.

**Corrigé guidé :**
Les forces extérieures s'exerçant sur le volume de fluide délimité par $\mathcal{V}$ sont :
1. **Les forces de pression** exercées sur toute la surface fermée $\partial\mathcal{V}$. Partout où le fluide est en contact avec l'atmosphère extérieure (sections $\Sigma_1$, $\Sigma_2$, $\Sigma_3$ et surfaces latérales), la pression est uniforme et vaut $P_0$.
2. **La force exercée par la plaque sur le fluide**, notée $\vec{F}_{\text{plaque}\to\text{fluide}}$.

D'après le principe des actions réciproques (3ème loi de Newton), la force recherchée exercée par le fluide sur la plaque est :
$$\vec{F}_{\text{fl}\to\text{pl}} = -\vec{F}_{\text{plaque}\to\text{fluide}}$$

L'intégrale des forces de pression s'écrit :
$$\vec{F}_{\text{press}} = -\iint_{\partial\mathcal{V}} P \vec{n} \, dS$$

Puisque la pression atmosphérique $P_0$ règne tout autour du volume (en retranchant $P_0$ partout, ce qui ne change pas la résultante car $\iint_{\partial\mathcal{V}} \vec{n} \, dS = \vec{0}$ par le théorème de Stokes-Ostrogradski), on peut travailler en **pression effective** $P^* = P - P_0$. 
Sur les sections d'entrée et de sortie du jet, le fluide est en contact avec l'air, donc $P^* = 0$. La seule contribution non nulle de la pression provient de la zone d'impact sur la plaque.

---

## 4. Calcul du flux de quantité de mouvement

### Question 3
> Exprimer le flux de quantité de mouvement à travers la section d'entrée $\Sigma_1$. On notera $S_1 = 2h \times L$ l'aire de la section d'entrée (où $L$ est une largeur fictive selon $\vec{e}_z$ pour se ramener à un problème 3D de largeur $L$, ou en considérant directement un débit par unité de largeur). Travaillons par unité de largeur selon $\vec{e}_z$ (on notera les flux massiques par unité de largeur).

**Corrigé guidé :**
Sur la section d'entrée $\Sigma_1$, le vecteur normal sortant est $\vec{n}_1 = -\vec{e}_x$. 
Le produit scalaire vaut : $\vec{v}_1 \cdot \vec{n}_1 = (V_0 \vec{e}_x) \cdot (-\vec{e}_x) = -V_0$.
Le flux de quantité de mouvement à l'entrée (par unité de largeur selon $\vec{e}_z$) est donc :
$$\vec{\Phi}_1 = \int_{\Sigma_1} \rho \vec{v}_1 (\vec{v}_1 \cdot \vec{n}_1) \, dy = \rho (V_0 \vec{e}_x) (-V_0) (2h) = -2\rho h V_0^2 \, \vec{e}_x$$

### Question 4
> En déduire, par un argument de symétrie et de conservation de la masse, les caractéristiques globales de l'écoulement dans les sections de sortie $\Sigma_2$ et $\Sigma_3$ très loin de l'impact, et calculer le flux total de quantité de mouvement sortant.

**Corrigé guidé :**
Par symétrie par rapport à l'axe du jet ($y = 0$), le jet se divise en deux branches égales (supérieure $\Sigma_2$ et inférieure $\Sigma_3$). 
* Le débit massique entrant est $\dot{m}_1 = \rho (2h) V_0$ (par unité de largeur).
* Par conservation de la masse, le débit sortant dans chaque branche est $\dot{m}_2 = \dot{m}_3 = \frac{\dot{m}_1}{2} = \rho h V_0$.

Très loin de l'impact, la pression dans le fluide s'est réégularisée à la pression atmosphérique et le profil de vitesse s'étale parallèlement à la plaque. En supposant la vitesse de sortie uniforme de norme $V_2$ dans les deux branches s'écoulant le long de la plaque :
* Sur la sortie supérieure $\Sigma_2$ (normale $\vec{n}_2 = +\vec{e}_y$), $\vec{v}_2 = V_2 \vec{e}_y$, donc $\vec{v}_2 \cdot \vec{n}_2 = V_2$.
* Sur la sortie inférieure $\Sigma_3$ (normale $\vec{n}_3 = -\vec{e}_y$), $\vec{v}_3 = -V_2 \vec{e}_y$, donc $\vec{v}_3 \cdot \vec{n}_3 = V_2$.

Le flux total sortant de quantité de mouvement est la somme des flux sur $\Sigma_2$ et $\Sigma_3$ :
$$\vec{\Phi}_{\text{sort}} = \int_{\Sigma_2} \rho \vec{v}_2 (\vec{v}_2 \cdot \vec{n}_2) \, dy + \int_{\Sigma_3} \rho \vec{v}_3 (\vec{v}_3 \cdot \vec{n}_3) \, dy$$
Par symétrie, les composantes selon $\vec{e}_y$ s'annulent ($+\dot{m}_2 V_2 \vec{e}_y$ et $-\dot{m}_3 V_2 \vec{e}_y$). Il ne reste que la composante selon $\vec{e}_x$ ? Attention : les vitesses en sortie sont selon $\vec{e}_y$ (parallèles à la plaque), leur quantité de mouvement dans la direction $\vec{e}_x$ est nulle car $\vec{v}_2 \cdot \vec{e}_x = 0$. 

Reprenons rigoureusement : 
Le fluide arrive selon $\vec{x}$ (quantité de mouvement portée par $\vec{e}_x$). En sortie, le fluide s'écoule le long de la plaque (selon $\vec{e}_y$). La vitesse $\vec{v}_2$ est portée par $\vec{e}_y$, donc $\vec{v}_2 = v_{2y} \vec{e}_y$. Le terme $\rho \vec{v} (\vec{v} \cdot \vec{n})$ projeté sur l'axe $\vec{e}_x$ s'annule pour les sorties $\Sigma_2$ et $\Sigma_3$ car la vitesse de sortie n'a pas de composante selon $\vec{e}_x$.

Par conséquent, le flux sortant de quantité de mouvement selon l'axe $\vec{e}_x$ est nul :
$$(\vec{\Phi}_{\text{sort}}) \cdot \vec{e}_x = 0$$

---

## 5. Résolution et expression de la force

### Question 5
> Appliquer le théorème d'Euler projeté sur l'axe $\vec{e}_x$ pour déterminer la force $\vec{F}_{\text{fl}\to\text{pl}}$ exercée par le fluide sur la plaque (exprimée par unité de largeur selon $\vec{e}_z$).

**Corrigé guidé :**
Projection du théorème d'Euler sur l'axe $\vec{e}_x$ :
$$(F_{\text{ext}\to\mathcal{V}})_x = (\vec{\Phi}_{\text{sort}}) \cdot \vec{e}_x - (\vec{\Phi}_{\text{ent}}) \cdot \vec{e}_x$$

En exprimant les forces extérieures (la force exercée par la plaque sur le fluide et la pression effective nulle sur les frontières fluides) :
$$(F_{\text{plaque}\to\text{fluide}})_x = 0 - (-2\rho h V_0^2) = 2\rho h V_0^2$$

D'après le principe des actions réciproques, la force exercée par le fluide sur la plaque (par unité de largeur) est :
$$\vec{F}_{\text{fl}\to\text{pl}} = -2\rho h V_0^2 \, \vec{e}_x$$

La norme de cette force par unité de largeur est donc :
$$F = 2\rho h V_0^2$$

---

## 6. Analyse critique des résultats

### Question 6
> 1. Discuter l'homogénéité de la formule obtenue.
> 2. Le résultat dépend-il de la viscosité $\eta$ du fluide ? Comment l'expliquer physiquement ?
> 3. Quelle est l'influence d'une augmentation du débit du jet sur la structure mécanique de la plaque ?

**Corrigé guidé :**
1. **Analyse dimensionnelle :**
   * Masse volumique $\rho$ : $[\rho] = M L^{-3}$
   * Épaisseur $h$ : $[h] = L$
   * Vitesse $V_0$ : $[V_0] = L T^{-1}$
   * Expression $2\rho h V_0^2$ : $(M L^{-3}) \times L \times (L T^{-1})^2 = M L^{-1} T^{-2}$.
   * Une force par unité de longueur (car on est en bidimensionnel par unité de largeur $L_z$) a pour dimension $\frac{M L T^{-2}}{L} = M L^{-1} T^{-2}$. 
   L'homogénéité est donc **parfaitement vérifiée**.

2. **Rôle de la viscosité $\eta$ :**
   * Le résultat final ne dépend pas de la viscosité $\eta$. 
   * *Explication physique :* Le bilan macroscopique de quantité de mouvement ne fait intervenir que les forces extérieures globales (pression et contraintes aux limites) et les flux cinématiques (quantité de mouvement entrante et sortante). Les forces visqueuses internes au volume de contrôle s'annulent par action/réaction (forces intérieures). De plus, on a négligé les frottements du fluide sur la plaque dans la zone d'impact (fluide parfait au voisinage du choc). Seule l'inertie du fluide dicte la force d'impact macroscopique.

3. **Implications pratiques pour les structures :**
   * La force exercée par le jet croît comme le **carré de la vitesse** ($V_0^2$) et linéairement avec le débit massique. 
   * Pour des applications industrielles (ex: découpe au jet d'eau haute pression, turbines Pelton), un doublement de la vitesse d'injection quadruple l'effort mécanique subi par l'obstacle, ce qui dimensionne le choix des matériaux pour éviter la rupture par fatigue ou déformation plastique.