---
title: 'Exercice 1 : Vecteur de Poynting et bilans énergétiques'
description: 'Problème d entraînement type concours pour MP.'
---

### 🌐 Énoncé du problème / Étude de cas

Les systèmes de télécommunications modernes et le transport d'énergie électrique à haute fréquence nécessitent une compréhension fine des transferts d'énergie par les ondes électromagnétiques. Ce problème s'intéresse à la modélisation du transport de puissance au sein d'un câble coaxial et à l'évaluation critique des limites des modèles continus face à des applications industrielles réelles.

On considère un câble coaxial infini constitué de deux conducteurs cylindriques parfaits de même axe $Oz$. 
- Le conducteur intérieur est un fil cylindrique de rayon $a$.
- Le conducteur extérieur est une gaine cylindrique mince, de rayon intérieur $b$ et de rayon extérieur $c$.
- L'espace compris entre $a$ et $b$ est rempli d'un diélectrique parfait, linéaire, homogène et isotrope, de permittivité $\varepsilon$ et de perméabilité $\mu$ (on supposera $\varepsilon \approx \varepsilon_0$ et $\mu \approx \mu_0$ pour les applications numériques).

L'ensemble est soumis à un régime quasi-stationnel ou stationnel, ou traversé par une onde électromagnétique se propageant selon l'axe $Oz$. On se place en coordonnées cylindriques $(r, \theta, z)$.

---

### ❓ Questions progressives

1. **Rappels et équations locales**
   Énoncer les équations de Maxwell dans le diélectrique parfait en l'absence de charges et de courants libres. En déduire l'équation de conservation de l'énergie électromagnétique (théorème de Poynting sous sa forme locale), en explicitant l'expression de la densité volumique d'énergie électromagnétique $u$ et du vecteur de Poynting $\vec{\Pi}$.

2. **Étude d'un régime quasi-stationnel (transport de puissance)**
   On suppose que le câble est parcouru par un courant stationnel total $I$ (allant dans le sens des $z$ croissants sur l'âme centrale, et $-I$ sur le conducteur extérieur) et qu'il règne entre les conducteurs une différence de potentiel constante $U$.
   a. Déterminer le champ électrique $\vec{E}(r)$ et le champ magnétique $\vec{B}(r)$ dans la zone diélectrique $a < r < b$, en négligeant les effets de bord.
   b. Calculer le vecteur de Poynting $\vec{\Pi}$ en tout point du diélectrique. Comment s'interprète la direction de ce vecteur ?
   c. Calculer le flux du vecteur de Poynting à travers une section droite du câble comprise entre $r=a$ et $r=b$. Comparer ce flux au produit $U \cdot I$. Conclure.

3. **Analyse critique et limites physiques**
   a. Dans la réalité, les conducteurs ne sont pas parfaits : ils possèdent une conductivité $\gamma$ finie (par exemple, le cuivre a une conductivité $\gamma \approx 5,8 \times 10^7 \, \text{S}\cdot\text{m}^{-1}$). Expliquer qualitativement l'impact de cette imperfection sur le champ électrique au sein du conducteur et sur la direction du vecteur de Poynting au voisinage de l'interface diélectrique-métal.
   b. *Application numérique et esprit critique :* On considère un câble coaxial standard utilisé en laboratoire, de dimensions $a = 0,5 \, \text{mm}$ et $b = 3,5 \, \text{mm}$, parcouru par un courant efficace $I = 2 \, \text{A}$ à une fréquence $f = 1 \, \text{GHz}$. 
      - Calculer la puissance transportée par le câble via le modèle idéal.
      - Discuter la pertinence de négliger les pertes par effet Joule dans les conducteurs à cette fréquence (on pourra introduire l'épaisseur de peau $\delta$). Quels sont les risques d'une surchauffe non modélisée dans un système embarqué ?

---

### 💡 Pistes & Indications

- **Q1 :** Utiliser le produit scalaire de $\vec{E}$ par $\text{rot}(\vec{B})$ et de $\vec{B}$ par $\text{rot}(\vec{E})$ en s'aidant de l'analyse vectorielle usuelle $\text{div}(\vec{E} \wedge \vec{B})$.
- **Q2 :** Utiliser le théorème d'Ampère et le théorème de Gauss en exploitant les symétries de la géométrie cylindrique (invariance par translation selon $z$ et par rotation autour de $z$).
- **Q3 :** Penser à l'effet de peau pour l'atténuation à haute fréquence. L'expression de l'épaisseur de peau est $\delta = \frac{1}{\sqrt{\pi f \mu \gamma}}$.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Rappels et équations locales
Dans le diélectrique parfait ($\rho_{libre} = 0$, $\vec{j}_{libre} = \vec{0}$), les équations de Maxwell s'écrivent :
$$\text{div}(\vec{E}) = 0$$
$$\text{rot}(\vec{E}) = -\frac{\partial \vec{B}}{\partial t}$$
$$\text{div}(\vec{B}) = 0$$
$$\text{rot}(\vec{B}) = \mu\varepsilon \frac{\partial \vec{E}}{\partial t}$$

En effectuant le produit scalaire $\vec{B} \cdot \text{rot}(\vec{E}) - \vec{E} \cdot \text{rot}(\vec{B})$ et en utilisant l'identité $\text{div}(\vec{E} \wedge \vec{B}) = \vec{B} \cdot \text{rot}(\vec{E}) - \vec{E} \cdot \text{rot}(\vec{B})$, on obtient l'équation de Poynting :
$$\text{div}\left(\frac{\vec{E} \wedge \vec{B}}{\mu}\right) + \frac{\partial}{\partial t}\left(\frac{1}{2}\varepsilon E^2 + \frac{1}{2\mu} B^2\right) = 0$$

On identifie la forme locale de la conservation de l'énergie :
$$\frac{\partial u}{\partial t} + \text{div}(\vec{\Pi}) = 0$$
Avec :
- $u = \frac{1}{2}\varepsilon E^2 + \frac{1}{2\mu} B^2$ : densité volumique d'énergie électromagnétique ($\text{J}\cdot\text{m}^{-3}$).
- $\vec{\Pi} = \frac{1}{\mu} \vec{E} \wedge \vec{B}$ : vecteur de Poynting ($\text{W}\cdot\text{m}^{-2}$).

---

#### 2. Étude d'un régime quasi-stationnel
a. **Champs $\vec{E}$ et $\vec{B}$ :**
- Par symétrie et invariance (par rapport à $\theta$ et $z$), le champ électrostatique dérive d'un potentiel. En appliquant le théorème de Gauss sur un cylindre de rayon $r$ ($a < r < b$) et de longueur $h$, on trouve :
  $$\vec{E}(r) = \frac{A}{r} \vec{u}_r$$
  La tension $U$ entre l'âme ($r=a$) et la gaine ($r=b$) est $U = \int_a^b E(r) dr = A \ln\left(\frac{b}{a}\right)$, soit $A = \frac{U}{\ln(b/a)}$. Ainsi :
  $$\vec{E}(r) = \frac{U}{r \ln(b/a)} \vec{u}_r$$

- Pour le champ magnétique, le théorème d'Ampère appliqué à un contour circulaire de rayon $r$ donne :
  $$\oint \vec{B} \cdot d\vec{l} = B(r) \cdot 2\pi r = \mu_0 I \implies \vec{B}(r) = \frac{\mu_0 I}{2\pi r} \vec{u}_\theta$$

b. **Vecteur de Poynting :**
$$\vec{\Pi} = \frac{1}{\mu_0} \vec{E} \wedge \vec{B} = \frac{1}{\mu_0} \left( \frac{U}{r \ln(b/a)} \vec{u}_r \right) \wedge \left( \frac{\mu_0 I}{2\pi r} \vec{u}_\theta \b