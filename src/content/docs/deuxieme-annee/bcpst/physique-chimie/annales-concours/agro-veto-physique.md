---
title: "Agro-Véto - Physique"
description: "Sujet type concours corrigé pas à pas pour la filière BCPST."
sidebar:
  badge:
    text: "Annale Concours"
    variant: "caution"
---

## 📄 Partie 1 : Énoncé du Problème (Mise en situation)

### Étude biophysique et thermodynamique des ascents xylemiques chez les plantes vasculaires géantes

La circulation de l'eau et des nutriments dissous des racines jusqu'à la canopée des arbres géants (tels que *Sequoia sempervirens*) représente un défi biophysique majeur. Alors que la pression atmosphérique ne permet de « tirer » l'eau par aspiration que jusqu'à une hauteur maximale théorique de l'ordre de $10\text{ m}$ dans un tube ouvert (baromètre de Torricelli), certains arbres dépassent les $100\text{ m}$ de hauteur. 

La théorie la plus admise pour expliquer ce transport sur de grandes hauteurs est la **théorie de la cohésion-tension** (Dixon et Joly, 1894). Elle postule que l'eau se trouve sous **tension** (pression hydrostatique négative) dans le xylène, constituant un flux métastable soumis à des forces de cohésion moléculaire intermoléculaires intenses.

Le présent problème se propose d'analyser, par une approche couplant la mécanique des fluides visqueux et la thermodynamique des changements d'état et des solutions, la viabilité de ce transport face aux risques majeurs de cavitation (rupture de la colonne d'eau) et aux contraintes énergétiques imposées par la transpiration foliaire et le métabolisme hydrique.

---

## ❓ Partie 2 : Questions

### Partie A : Mécanique des fluides dans le xylème et résistance hydraulique

On modélise les vaisseaux du xylème comme un ensemble de $N$ micro-capillaires cylindriques parallèles, identiques, de rayon $R$ et de longueur $L$. Le fluide transporté est une solution aqueuse assimilée à un fluide newtonien incompressible de masse volumique $\rho$ et de viscosité dynamique $\eta$.

1. Établir, à partir des équations de Navier-Stokes en coordonnées cylindriques et sous les hypothèses d'un écoulement stationnaire, laminaire, axisymétrique et à profil de vitesse totalement développé, l'expression de la vitesse locale $v_z(r)$ dans un capillaire de rayon $R$, soumis à un gradient de pression effectif $\frac{\text{d}P}{\text{dz}}$.
2. En déduire le débit volumique $Q$ à travers un unique capillaire, puis la conductance hydraulique $K$ du système complet de $N$ capillaires sachant que $\Delta P$ est la différence de pression entre la base et le sommet de la tige. Mettre en évidence la loi de Poiseuille généralisée.
3. On définit le flux de sève brute par unité de surface foliaire. Calculer l'ordre de grandeur de la chute de pression $\Delta P$ nécessaire pour élever l'eau à une hauteur $H = 100\text{ m}$ dans un arbre où le rayon moyen des vaisseaux est $R = 20\,\mu\text{m}$, en supposant un régime stationnaire et en tenant compte de la gravité. Application numérique : $\rho = 10^3\text{ kg}\cdot\text{m}^{-3}$, $\eta = 10^{-3}\text{ Pa}\cdot\text{s}$, $g = 9.81\text{ m}\cdot\text{s}^{-2}$. Conclure sur la part respective des pertes de charge visqueuses et de la gravité.
4. À l'échelle des ponctuations (membranes poreuses reliant les vaisseaux du xylème), l'eau doit traverser une structure poreuse pour passer d'un vaisseau à un autre. On modélise cette traversée par la loi de Darcy. Expliquer comment une sécheresse du sol modifie le gradient de pression et risque d'entraîner une embolie gazeuse par cavitation (entrée d'air dans le vaisseau sous tension).

### Partie B : Thermodynamique de l'ascension et énergétique de la transpiration

La force motrice de la tension dans le xylème provient de l'évaporation de l'eau au niveau des feuilles (transpiration stomatique). On étudie une feuille assimilée à un système thermodynamique ouvert en contact avec l'atmosphère à la température $T_{\text{atm}}$ et à l'humidité relative $H_r$.

5. Le potentiel chimique de l'eau liquide dans le xylème à la pression $P$ et à la température $T$ s'exprime par :
$$\mu_l(T, P) = \mu_l^{\circ}(T) + v_{m,l} (P - P^{\circ})$$
où $v_{m,l}$ est le volume molaire partiel de l'eau liquide et $P^{\circ}$ la pression de référence. 
Exprimer la condition d'équilibre thermodynamique (égalité des potentiels chimiques) entre l'eau liquide sous tension $P_{\text{xylème}}$ dans les menisques foliaires et la vapeur d'eau intercellulaire à la pression partielle $P_v$. En déduire la relation liant $P_{\text{xylème}}$ à l'humidité relative $H_r = \frac{P_v}{P_{\text{sat}}(T)}$ (loi de Kelvin modifiée).
6. Calculer la tension limite $P_{\text{xylème}}$ à $T = 293\text{ K}$ pour une humidité relative de l'air $H_r = 0.85$. On donne la pression de vapeur saturante $P_{\text{sat}}(293\text{ K}) = 2.34 \times 10^3\text{ Pa}$, $v_{m,l} = 1.8 \times 10^{-5}\text{ m}^3\cdot\text{mol}^{-1}$, $R_{\text{gaz}} = 8.314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$.
7. L'énergie nécessaire à cette évaporation est fournie par le rayonnement solaire incident. Écrire le premier principe de la thermodynamique (bilan énergétique) pour une feuille transpirant un débit massique d'eau $D_m$, en faisant intervenir la capacité thermique massique de l'eau, sa chaleur latente de vaporization massique $L_v$, et les flux thermiques radiatifs et convectifs. Discuter du rôle de la transpiration dans la thermorégulation de la plante.

---

## 💡 Partie 3 : Rapport du Jury (Pièges et attentes)

### Attentes générales du jury
- **Rigueur des approximations** : En biophysique, le jury attend des candidats qu'ils sachent valider ou rejeter des ordres de grandeur physiques (par exemple, comparer la chute de pression visqueuse et la colonne hydrostatique).
- **Maîtrise des outils mathématiques** : La projection des équations de Navier-Stokes en coordonnées cylindriques avec conditions aux limites de non-glissement est un classique absolu qui doit être rédigé sans hésitation.
- **Sens thermodynamique** : La manipulation des potentiels chimiques et de l'humidité relative (loi de Kelvin) exige une compréhension fine de la notion de métastabilité et de pression négative (tension).

### Pièges fréquemment rencontrés
1. **Confondre pression absolue et tension** : Oublier le signe négatif ou les variations de pression par rapport à la pression atmosphérique.
2. **Erreurs d'unités dans la loi de Kelvin** : Utiliser des bars au lieu de Pascals pour les volumes molaires, ou inverser $H_r$ et $\ln(H_r)$.
3. **Négligence de la viscosité** : Croire que l'eau monte uniquement par capillarité sans pertes de charge visqueuses, ce que contredit immédiatement l'application numérique de Poiseuille pour un arbre de $100\text{ m}$.

---

## 📋 Partie 4 : Corrigé Détaillé et Analyse

### Partie A : Mécanique des fluides dans le xylème

1. **Profil de vitesse (Navier-Stokes)** :
En coordonnées cylindriques, pour un écoulement stationnaire, axisymétrique, sans composante radiale ni azimutale ($v_r = 0$, $v_\theta = 0$) et invariant selon $z$ pour le profil (développé), l'équation de Navier-Stokes selon l'axe $z$ se simplifie en :
$$\eta \left( \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial v_z}{\partial r} \right) \right) = \frac{\partial P}{\partial z}$$
Puisque le fluide est incompressible et le tube cylindrique, le gradient de pression $\frac{\partial P}{\partial z}$ est une constante négative que l'on note $-\frac{\Delta P}{L}$.
En intégrant une première fois par rapport à $r$ :
$$r \frac{\partial v_z}{\partial r} = -\frac{\Delta P}{2\eta L} r^2 + C_1$$
La condition de symétrie sur l'axe impose $\left. \frac{\partial v_z}{\partial r} \right|_{r=0} = 0$, donc $C_1 = 0$.
En intégrant une seconde fois :
$$v_z(r) = -\frac{\Delta P}{4\eta L} r^2 + C_2$$
La condition aux limites de non-glissement à la paroi ($v_z(R) = 0$) donne $C_2 = \frac{\Delta P}{4\eta L} R^2$. 
Finalement :
$$v_z(r) = \frac{\Delta P}{4\eta L} (R^2 - r^2)$$

2. **Débit et Conductance** :
Le débit volumique $Q$ à travers un capillaire s'obtient par intégration du profil de vitesse sur la section transversale :
$$Q = \int_{0}^{R} v(r) \, 2\pi r \, \text{d}r = 2\pi \frac{\Delta P}{4\eta L} \int_{0}^{R} (R^2 - r^2)r \, \text{d}r$$
$$Q = \frac{\pi \Delta P}{2\eta L} \left[ R^2 \frac{r^2}{2} - \frac{r^4}{4} \right]_0^R = \frac{\pi \Delta P R^4}{8\eta L}$$
Pour un ensemble de $N$ capillaires fonctionnant en parallèle, le débit total est $Q_{\text{total}} = N Q$. La conductance hydraulique $K$ est définie par $Q_{\text{total}} = K \Delta P$ :
$$K = \frac{N \pi R^4}{8\eta L}$$

3. **Application numérique et ordres de grandeur** :
La chute de pression totale $\Delta P$ doit vaincre à la fois la gravité (pression hydrostatique) et les pertes de charge visqueuses (Poiseuille) :
$$\Delta P = \Delta P_{\text{gravité}} + \Delta P_{\text{visqueuse}}$$
$$\Delta P_{\text{gravité}} = \rho g H = 10^3 \times 9.81 \times 100 = 9.81 \times 10^5\text{ Pa} \approx 9.8\text{ bars}$$
Pour estimer la partie visqueuse, évaluons un débit typique $Q_{\text{total}}$ pour un grand arbre. Supposons une évapotranspiration de $Q_{\text{total}} = 10^{-4}\text{ m}^3\cdot\text{s}^{-1}$ à travers $N = 10^6$ vaisseaux de longueur $L = 100\text{ m}$ et de rayon $R = 20\,\mu\text{m} = 2 \times 10^{-5}\text{ m}$.
Le débit par vaisseau est $q = \frac{Q_{\text{total}}}{N} = 10^{-10}\text{ m}^3\cdot\text{s}^{-1}$.
D'après la loi de Poiseuille inversée :
$$\Delta P_{\text{visqueuse}} = \frac{8 \eta L q}{\pi R^4} = \frac{8 \times 10^{-3} \times 100 \times 10^{-10}}{\pi (2 \times 10^{-5})^4}$$
$$\Delta P_{\text{visqueuse}} = \frac{8 \times 10^{-12}}{\pi \times 1.6 \times 10^{-19}} \approx 1.59 \times 10^7\text{ Pa} \approx 159\text{ bars}$$
*Conclusion critique* : Les pertes de charge visqueuses dans les micro-vaisseaux du xylème sont considérables et du même ordre de grandeur (voire supérieures) à la composante gravitationnelle. La pression totale au sol doit donc être fortement négative (tension élevée) au sommet.

4. **Cavitation et Loi de Darcy** :
Si le sol s'assèche, la disponibilité en eau diminue, augmentant la tension requise. Lorsque la différence de pression dépasse un seuil critique, l'air du milieu environnant (par les ponctuations) est aspiré à l'intérieur du vaisseau xylémique. Le changement d'état liquide-vapeur se produit brutalement : la colonne d'eau se rompt, le vaisseau se remplit de vapeur d'eau et devient inopérant (**embolie**).

---

### Partie B : Thermodynamique de l'ascension et énergétique de la transpiration

5. **Équilibre thermodynamique et Loi de Kelvin** :
À l'équilibre, le potentiel chimique de l'eau liquide sous tension dans le ménisque foliaire est égal au potentiel chimique de la vapeur d'eau dans la phase gazeuse intercellulaire :
$$\mu_l(T, P_{\text{xylème}}) = \mu_v(T, P_v)$$
En exprimant le potentiel chimique de la vapeur comme celui d'un gaz parfait :
$$\mu_v(T, P_v) = \mu_v^{\circ}(T) + R_{\text{gaz}} T \ln\left(\frac{P_v}{P^{\circ}}\right)$$
Par définition, à l'équilibre plan, $\mu_l(T, P^{\circ}) = \mu_v^{\circ}(T)$. En utilisant l'expression du texte pour $\mu_l$ :
$$\mu_l^{\circ}(T) + v_{m,l}(P_{\text{xylème}} - P^{\circ}) = \mu_v^{\circ}(T) + R_{\text{gaz}} T \ln\left(\frac{P_v}{P^{\circ}}\right)$$
En soustrayant l'état de saturation à pression plane ($P^{\circ} = P_{\text{sat}}$ pour lequel $P_v = P_{\text{sat}}$), on obtient la **loi de Kelvin modifiée** :
$$v_{m,l} (P_{\text{xylème}} - P_{\text{sat}}) = R_{\text{gaz}} T \ln\left(\frac{P_v}{P_{\text{sat}}}\right) = R_{\text{gaz}} T \ln(H_r)$$
Soit :
$$P_{\text{xylème}} = P_{\text{sat}} + \frac{R_{\text{gaz}} T}{v_{m,l}} \ln(H_r)$$
Puisque $H_r < 1$, $\ln(H_r) < 0$, ce qui conduit bien à une pression $P_{\text{xylème}}$ inférieure à $P_{\text{sat}}$ (et donc fortement négative si $H_r$ diminue).

6. **Application numérique** :
Avec $T = 293\text{ K}$, $H_r = 0.85$, $P_{\text{sat}} = 2.34 \times 10^3\text{ Pa}$ et $v_{m,l} = 1.8 \times 10^{-5}\text{ m}^3\cdot\text{mol}^{-1}$ :
$$\ln(0.85) = -0.1625$$
$$\frac{R_{\text{gaz}} T}{v_{m,l}} = \frac{8.314 \times 293}{1.8 \times 10^{-5}} = \frac{2436.0}{\mathbf{1.8 \times 10^{-5}}} \approx 1.353 \times 10^8\text{ Pa}$$
$$\Delta P_{\text{thermo}} = 1.353 \times 10^8 \times (-0.1625) \approx -2.20 \times 10^7\text{ Pa}$$
En négligeant $P_{\text{sat}}$ devant cette valeur :
$$P_{\text{xylème}} \approx -2.20 \times 10^7\text{ Pa} \approx -220\text{ bars}$$
Cette valeur colossale démontre que de faibles variations d'humidité relative de l'air ambiant engendrent des tensions extrêmes au sein de la colonne d'eau, confirmant la nécessité de structures cellulaires extrêmement renforcées (lignification des parois du xylème) pour éviter l'implosion des vaisseaux.

7. **Premier principe et Thermorégulation** :
Le premier principe appliqué à la feuille en régime stationnaire s'écrit sous la forme d'un bilan de puissance thermique :
$$\Phi_{\text{ray}} + \Phi_{\text{conv}} + \Phi_{\text{évap}} = 0$$
Où :
- $\Phi_{\text{ray}}$ est la puissance radiative absorbée par le soleil.
- $\Phi_{\text{conv}}$ est la puissance thermique échangée par convection avec l'air ambiant.
- $\Phi_{\text{évap}} = - D_m L_v$ est le flux thermique consommé par le changement d'état (chaleur latente de vaporisation $L_v$).

*Rôle dans la thermorégulation* : La transition de phase de l'eau absorbe une quantité d'énergie considérable ($L_v \approx 2.45 \times 10^6\text{ J}\cdot\text{kg}^{-1}$ à $20^{\circ}\text{C}$). Par conséquent, la transpiration foliaire agit comme un système de climatisation par évaporation extrêmement puissant, permettant à la feuille de dissiper l'excès d'énergie radiative incidente sans surchauffer, ce qui prévient la dénaturation thermique des enzymes photosynthétiques.