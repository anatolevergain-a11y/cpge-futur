---
title: 'Cours : Résistance des matériaux et Conception'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Résistance des Matériaux (RDM) et Conception
**Fiche de cours - CPGE PT**  
**Professeur Agrégé des Sciences Industrielles de l'Ingénieur**

---

## Introduction et Hypothèses Fondamentales

La Résistance des Matériaux a pour objet l'étude du comportement mécanique des solides déformables afin de valider leur dimensionnement en phase de conception.

### Hypothèses de la RDM (Navier-Bernoulli)
1. **Milieu continu, homogène et isotrope** : Le matériau possède les mêmes propriétés mécaniques en tout point et dans toutes les directions.
2. **Petites perturbations** : Les déplacements sont infinitésimaux et les déformations sont négligeables devant les dimensions géométriques ($||\varepsilon_{ij}|| \ll 1$).
3. **Hypothèse de Navier-Bernoulli** : Les sections droites, planes et perpendiculaires à la fibre moyenne avant déformation, restent planes, perpendiculaires à la fibre moyenne après déformation et ne subissent aucune variation de dimension dans leur plan.
4. **Saint-Venant** : L'état de contrainte loin des zones d'application des charges ne dépend que de la résultante et du torseur des efforts extérieurs appliqués à la section.

---

## 1. Torseur des efforts intérieurs (Efforts isostatiques)

Soit une poutre droite de fibre moyenne rectiligne $\mathcal{F}$, orientée par son abscisse $x \in [0, L]$.  
On isole un tronçon de poutre par une coupe menée en une abscisse $x$. Le torseur des efforts intérieurs exercés par la partie située à gauche sur la partie située à droite est noté :

$$\{ \mathcal{T}_{\text{int}}(x) \} = \left\{ \begin{matrix} \vec{N}(x) = N(x)\vec{u} & \text{Effort normal} \\ \vec{V}(x) = T_y(x)\vec{v} + T_z(x)\vec{w} & \text{Efforts tranchants} \end{matrix} \right\}_{\text{Centre de gravité } G(x)}$$

$$\{ \mathcal{T}_{\text{int}}(x) \} = \left\{ \begin{matrix} \vec{Mt}_x(x) = Mt(x)\vec{u} & \text{Moment de torsion} \\ \vec{Mf}_G(x) = Mfy(x)\vec{v} + Mfz(x)\vec{w} & \text{Moments de flexion} \end{matrix} \right\}_{\text{G}(x)}$$

---

## 2. Sollicitations simples et Contraintes Normales/Tangentielles

### A. Traction / Compression simple
* **Sollicitation** : $\vec{N}(x) = N\vec{u}$, tous les autres éléments de réduction sont nuls.
* **Contrainte normale** : 
  $$\sigma_{xx}(y, z) = \frac{N}{S}$$
  où $S$ est l'aire de la section droite.
* **Loi de Hooke 1D** : 
  $$\sigma_{xx} = E \cdot \varepsilon_{xx}$$
  avec $E$ le module d'Young (en $\text{MPa}$ ou $\text{GPa}$).

### B. Cisaillement pur
* **Sollicitation** : $\vec{T}(x) = T_y\vec{v}$ (par exemple).
* **Contrainte tangentielle** (formule approchée de Jourawski) :
  $$\tau_{xy}(y, z) = \frac{T_y \cdot S^*(y)}{I_{zz} \cdot b(y)}$$

### C. Torsion simple
* **Sollicitation** : $Mt(x) = Mt$.
* **Contrainte tangentielle** (pour une section circulaire de rayon $R$) :
  $$\tau_{\theta z}(r) = \frac{Mt \cdot r}{I_0}$$
  où $I_0$ est le moment quadratique polaire : $I_0 = \int_S (y^2 + z^2) dS = \frac{\pi R^4}{2}$.

### D. Flexion plane pure
* **Sollicitation** : $Mfy(x) = Mfy$, les autres efforts sont nuls.
* **Contrainte normale** :
  $$\sigma_{xx}(y, z) = -\frac{Mfy}{I_yy} \cdot z$$
  où $I_yy = \int_S z^2 dS$ est le moment quadratique de la section par rapport à l'axe $(G, \vec{v})$.

---

## 3. Critères de Résistance (Conception)

Pour s'assurer qu'une structure ne subira pas de déformation plastique irréversible ou de rupture en service, on compare les contraintes effectives à la limite élastique du matériau $R_e$ via un coefficient de sécurité $s$.

### A. Contrainte équivalente de Von Mises ($\sigma_{\text{VM}}$)
Dans le cas d'un état triaxial, on définit la contrainte équivalente par :
$$\sigma_{\text{VM}} = \sqrt{\frac{1}{2} \left[ (\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2 \right]}$$
où $\sigma_1, \sigma_2, \sigma_3$ sont les contraintes principales.

### B. Condition de résistance
La condition de résistance s'exprime par :
$$\sigma_{\text{max}} \le Rpe = \frac{R_e}{s}$$
* $R_e$ : Limite d'élasticité du matériau ($\text{MPa}$).
* $s$ : Coefficient de sécurité ($s > 1$, fixé par le cahier des charges).
* $Rpe$ : Résistance Pratique à l'Extension ($\text{MPa}$).

---

## 4. Déformations et Énergies (Méthodes énergétiques)

### Théorème des travaux virtuels / Castigliano
L'énergie de déformation élastique $W$ emmagasinée dans une poutre soumise à de la flexion est donnée par :
$$W = \int_0^L \frac{Mfy(x)^2}{2 E I_{yy}} dx$$

La flèche $v(x_0)$ en un point $x_0$ s'obtient par la dérivée partielle de l'énergie par rapport à une force fictive $F$ appliquée en ce point :
$$v(x_0) = \frac{\partial W}{\partial F}$$

---

## 5. Méthodologie de Conception en SI (PT)

1. **Modélisation géométrique et cinématique** : Isoler le solidème critique.
2. **Bilan des actions mécaniques** : Appliquer le PFD ou le PFS pour déterminer les efforts de liaison.
3. **Tracé des diagrammes** : Mettre en évidence les sections les plus chargées (moments maximaux, efforts normaux maximaux).
4. **Dimensionnement / Vérification** : 
   * Calculer la section minimale $S$ ou les inerties nécessaires.
   * Valider par rapport au critère de Von Mises ou aux limites admissibles en déformation (ex. : flèche maximale $\delta_{\text{max}} \le \frac{L}{500}$).