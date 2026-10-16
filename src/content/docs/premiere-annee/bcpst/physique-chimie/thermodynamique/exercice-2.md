---
title: 'Exercice 2 : Machines thermiques et changements d état'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude thermodynamique d'une pompe à chaleur géothermique couplée à un échangeur souterrain

## Énoncé et contexte biologique/géologique

Les bâtiments modernes cherchent à optimiser leur bilan énergétique en exploitant l'inertie thermique du sous-sol via des géostructures énergétiques (fondations de type pieux géothermiques). À faible profondeur (quelques dizaines de mètres), la température du sol $T_{\text{sol}}$ reste quasi-constante toute l'année ($\approx 12\text{ }^\circ\text{C}$ sous nos latitudes), constituant une source chaude en hiver pour le chauffage des bâtiments.

L'objectif de ce problème est d'étudier un système de chauffage combinant un capteur géothermique souterrain (où circule un fluide caloporteur subissant des changements d'état ou des échanges monothermes) et une pompe à chaleur (PAC) géothermique alimentant un bâtiment agricole (serre ou bâtiment d'élevage nécessitant une régulation thermique rigoureuse pour le bien-être animal et la croissance végétale).

On s'intéresse aux limites thermodynamiques de ce système, à l'impact du prélèvement thermique sur la microbiologie du sol environnant (qui nécessite une température minimale pour maintenir son activité écopédologique), et à l'analyse critique du modèle idéal de Carnot par rapport à la réalité industrielle.

---

## Questions

### Partie I : Modélisation de la source géothermique et du fluide caloporteur
1. Un fluide frigorigène (le R134a par exemple) circule dans un échangeur enterré à la température $T_{\text{sol}} = 285\text{ K}$. Il y subit une vaporisation isobare à la pression $P_1$. Écrire la variation d'enthalpie massique $\Delta_{\text{vap}}h$ du fluide lors de ce changement d'état à la température $T_{\text{sol}}$.
2. En régime permanent, le fluide absorbe une puissance thermique $\Phi_{\text{sol}}$ provenant du terrain. On modélise le sol comme un milieu semi-infini de conductivité thermique $\lambda$ et de capacité thermique volumique $C_v$. Établir l'équation aux dérivées partielles régissant la température $T(x, t)$ dans le sol (supposé unidirectionnel selon la profondeur ou la distance $x$ à la sonde).
3. **Approche biologique :** L'activité microbienne du sol chute drastiquement si la température locale descend en dessous de $T_{\min} = 278\text{ K}$. En supposant un flux thermique constant imposé par la PAC, exprimer la condition sur la résistance thermique du sol pour garantir la pérennité de l'écosystème microbien après un régime transitoire de durée caractéristique $\tau$.

### Partie II : Étude thermodynamique de la Pompe à Chaleur (PAC)
La PAC fonctionne selon un cycle théorique de Carnot inversé entre la source froide (le sol à $T_C = 285\text{ K}$) et la source chaude (le bâtiment à $T_F = 295\text{ K}$, notée ici $T_H$ pour la source chaude).

4. Rappeler la définition du Coefficient de Performance ($\text{COP}$) d'une pompe à chaleur en fonction des transferts thermiques $Q_H$ (fournis au bâtiment) et $Q_C$ (pris au sol) au cours d'un cycle.
5. Exprimer le $\text{COP}$ maximal (de Carnot) $\text{COP}_{\text{C}}$ en fonction des temperatures $T_H$ et $T_C$. Calculer sa valeur numérique.
6. En réalité, les irréversibilités (frottements fluides, transferts thermiques avec écarts de température finis) font que le $\text{COP}$ réel vaut $\eta_{\text{rel}} \cdot \text{COP}_{\text{C}}$, avec un rendement relationnel $\eta_{\text{rel}} = 0{,}60$. Pour chauffer le bâtiment nécessitant une puissance thermique utile $\mathcal{P}_H = 10\text{ kW}$, calculer la puissance électrique $P_{\text{él}}$ consommée par le compresseur.

### Partie III : Analyse critique et limites du modèle
7. Discuter la pertinence de l'hypothèse de constance de $T_{\text{sol}}$ à long terme (effet de "puits taries" en géothermie superficielle). Quel phénomène géologique/thermique négligé ici permet de reconstituer le stock thermique du sol en période estivale ?
8. Conclure sur les limites du modèle de Carnot appliqué à un système biologique et géologique complexe.

---

## Pistes et indications

- **Q1 :** Un changement d'état s'effectue à température et pression constantes. Penser aux tables thermodynamiques ou à la formule de Clapeyron (bien qu'ici l'énoncé demande juste d'exprimer la variation d'enthalpie via la chaleur latente).
- **Q2 :** Utiliser le premier principe de la thermodynamique sous forme locale (équation de la chaleur sans terme source interne).
- **Q3 :** Résoudre ou exploiter l'analogie avec la diffusion thermique en régime stationnaire ou quasi-stationnaire.
- **Q5 & Q6 :** Attention aux conventions de signes en thermodynamique (transferts reçus par le système positifs). Le $\text{COP}$ est par définition positif.

---

## Corrigé pas à pas

### Partie I : Modélisation de la source géothermique et du fluide caloporteur

1. **Variation d'enthalpie massique :**
   Le fluide change d'état (liquide vers gaz) à la température $T_{\text{sol}}$ et à la pression $P_1$. La transformation étant isobare et monotherme, la variation d'enthalpie massique est simplement la chaleur latente de vaporisation à cette température :
   $$\Delta_{\text{vap}}h = h_{\text{vapeur}}(T_{\text{sol}}) - h_{\text{liquide}}(T_{\text{sol}})$$

2. **Équation de la chaleur dans le sol :**
   En appliquant le premier principe à une portion de sol et en combinant la loi de Fourier ($\mathbf{j}_Q = -\lambda \nabla T$) avec l'équation de conservation de l'énergie, on obtient l'équation de la diffusion thermique (ou équation de la chaleur) :
   $$\frac{\partial T}{\partial t} = D \frac{\partial^2 T}{\partial x^2}$$
   où $D = \frac{\lambda}{C_v}$ est la diffusivité thermique du sol ($m^2 \cdot s^{-1}$).

3. **Condition biologique :**
   Pour que la température du sol ne franchisse pas le seuil critique $T_{\min} = 278\text{ K}$, le gradient de température induit par le prélèvement de flux ne doit pas être trop important. En régime permanent unidimensionnel, le flux thermique s'exprime par la loi de Fourier sous forme globale :
   $$\Phi_{\text{sol}} = \frac{T_{\text{sol,0}} - T_{\text{sol,interface}}}{R_{\text{th,sol}}}$$
   La condition $T_{\text{sol,interface}} \ge T_{\min}$ impose :
   $$R_{\text{th,sol}} \le \frac{T_{\text{sol,0}} - T_{\min}}{\Phi_{\text{sol}}}$$
   *Analyse biologique :* Si cette résistance thermique est dépassée (par exemple en cas de sur-sollicitation de la PAC), le sol gèle ou se refroidit trop, entraînant une lyse cellulaire des micro-organismes décomposeurs, stoppant le cycle biogeochimique des nutriments essentiels à la rhizosphère.

---

### Partie II : Étude thermodynamique de la Pompe à Chaleur (PAC)

4. **Définition du $\text{COP}$ :**
   Le coefficient de performance d'une PAC est le rapport entre l'énergie utile fournie à la source chaude et l'énergie électrique (travail) fournie au système :
   $$\text{COP} = \frac{Q_H}{W_{\text{cycle}}} = \frac{Q_H}{Q_H - |Q_C|}$$
   (en convention thermodynamique, $Q_H < 0$ et $Q_C > 0$ pour la machine, ou en valeurs absolues selon l'usage courant en CPGE).

5. **$\text{COP}$ de Carnot :**
   Pour un cycle réversible de Carnot fonctionnant entre $T_H = 295\text{ K}$ et $T_C = 285\text{ K}$ :
   $$\text{COP}_{\text{C}} = \frac{T_H}{T_H - T_C} = \frac{295}{295 - 285} = \frac{295}{10} = 29{,}5$$
   *(Note pédagogique : Un COP de 29,5 est théorique et inaccessible en pratique en raison des faibles écarts de température mal valorisés par les frottements).*

6. **Puissance électrique réelle :**
   Le $\text{COP}$ réel est :
   $$\text{COP}_{\text{réel}} = \eta_{\text{rel}} \cdot \text{COP}_{\text{C}} = 0{,}60 \times 29{,}5 = 17{,}7$$
   La puissance électrique consommée se déduit de la puissance thermique utile $\mathcal{P}_H$ :
   $$P_{\text{él}} = \frac{\mathcal{P}_H}{\text{COP}_{\text{réel}}} = \frac{10 \times 10^3\text{ W}}{17{,}7} \approx 565\text{ W}$$

---

### Partie III : Analyse critique et limites du modèle

7. **Critique de l'hypothèse de constance de $T_{\text{sol}}$ :**
   L'hypothèse d'une source de température rigoureusement constante ($T_{\text{sol}} = 285\text{ K}$) est un modèle idéal. En régime hivernal prolongé, le prélèvement net d'énergie sans stockage conduit à un phénomène d'épuisement thermique local (formation d'un "cône de froid" autour des sondes). 
   *Régénération :* Le modèle néglige l'apport thermique estival (flux radiatif solaire reçu par la surface de la terre et transferts convectifs avec l'air ambiant), ainsi que les apports par advection (circulation des eaux souterraines nappes phréatiques), qui permettent une recharge naturelle du stock thermique du sol d'une année sur l'autre.

8. **Conclusion sur les limites du modèle :**
   Le modèle thermodynamique idéalisé (Carnot + régimes permanents) permet de dimensionner un ordre de grandeur minimal de consommation énergétique. Toutefois, couplé à un système biologique (sol) et géologique (aquifères), il montre ses limites :
   - Il ignore la cinétique des transferts (nécessité d'introduire des modèles transitoires aux éléments finis en géothermie).
   - Il ne prend pas en compte les couplages thermo-hydro-mécaniques (THM) du sol (le gel/dégel modifie la porosité et la conductivité thermique du sol). 
   Une rigueur d'ingénieur exige donc d'appliquer des coefficients de sécurité sévères (comme le rendement $\eta_{\text{rel}}$) et d'imposer des cycles de repos au captage géothermique pour préserver la biosphère du sol.