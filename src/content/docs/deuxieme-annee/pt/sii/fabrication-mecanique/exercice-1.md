---
title: 'Exercice 1 : Usinage, moulage et forgeage'
description: 'Problème d entraînement type concours pour PT.'
---

### 🌐 Énoncé du problème / Étude de cas

On s'intéresse à la fabrication d'un composant structurel aéronautique en alliage d'aluminium (densité $\rho = 2700 \text{ kg/m}^3$, limite d'élasticité $R_e = 420 \text{ MPa}$). Ce composant, initialement conçu pour être usiné directement dans un bloc massif (technologie d'enlévement de matière), présente un taux de copeaux très élevé, ce qui pose des questions environnementales, énergétiques et économiques.

L'équipe méthodes envisage d'alterner les procédés pour optimiser la chaîne de fabrication :
1. **Ébauche** : Réalisation d'une préforme par forgeage ou par fonderie (moulage en sable ou en coquille).
2. **Finition** : Opérations d'usinage (fraisage grand vitesse) pour atteindre les tolérances géométriques et dimensionnelles requises ($\text{IT7}$, rugosité $R_a = 0{,}8 \text{ }\mu\text{m}$).

L'objectif de ce problème est d'analyser comparativement les procédés d'obtention de la préforme et d'évaluer la pertinence énergétique et mécanique de la solution hybride (Forgeage/Fonderie + Usinage) par rapport au bloc usiné dans la masse.

---

### ❓ Questions progressives

#### Partie 1 : Analyse critique du choix du procédé d'obtention de la préforme

1. Le volume final de la pièce est $V_f = 450 \text{ cm}^3$. Si l'on part d'un lingot parallélépipédique brut de $V_i = 1800 \text{ cm}^3$ usiné dans la masse, calculez le taux de perte matière $\tau_m$ en pourcentage. Discutez des limites de ce choix du point de vue énergétique et développement durable.
2. Pour réduire ce taux de perte, on envisage la forge. Rappelez brièvement le principe physique du forgeage et son impact sur la structure micrographique de l'alliage d'aluminium par rapport à l'usinage dans la masse.
3. On envisage également le moulage. Citez deux défauts majeurs inhérents au procédé de fonderie (moulage) que l'on ne retrouve généralement ni en forge ni en usinage, et expliquez leur origine physique.

#### Partie 2 : Modélisation et optimisation de l'opération d'usinage de finition

L'ébauche forgée procure une préforme dont la surépaisseur d'usinage est uniformément de $e = 2 \text{ mm}$ sur toutes les surfaces fonctionnelles. On s'intéresse au surfaçage plan de cette préforme à l'aide d'une fraise de diamètre $D = 50 \text{ mm}$ comportant $Z = 4$ dents.

4. Les conditions de coupe retenues sont : vitesse de coupe $V_c = 300 \text{ m/min}$, avance par dent $f_z = 0{,}1 \text{ mm/(dent}\cdot\text{tour)}$, profondeur de passe axiale $a_p = 2 \text{ mm}$ et profondeur de passe radiale $a_e = 40 \text{ mm}$. 
   Calculez la fréquence de rotation de la broche $N$ en $\text{tr/min}$ et la vitesse d'avance table $V_f$ en $\text{mm/min}$.
5. L'effort tangentiel de coupe par unité de surface est modélisé par l'effort spécifique de coupe $k_c$ donné par la relation empirique :
   $$k_c = k_{c1.1} \cdot h^{-m}$$
   avec $k_{c1.1} = 800 \text{ MPa}$, l'exposant d'affleurement $m = 0{,}25$ et $h$ l'épaisseur moyenne du copeau. En régime de surfaçage, on approxime l'épaisseur moyenne par l'avance par dent $f_z$. 
   Calculez la valeur de $k_c$ et déduisez-en l'effort de coupe tangentiel moyen $F_c$, sachant que la section instantanée du copeau est $S = a_p \cdot f_z$.
6. **Analyse critique du modèle :** Le modèle ci-dessus suppose un effort $k_c$ uniforme et néglige l'usure de l'outil. Citez deux phénomènes physiques réels en cours d'usinage à grande vitesse (GVU) qui font diverger ce modèle idéal, et précisez l'impact sur la durée de vie de l'outil (loi de Taylor).

---

### 💡 Pistes & Indications

- **Q1 :** Le taux de perte se calcule par le rapport du volume de matière enlevée sur le volume initial. Pensez à relier cela à l'énergie grise du matériau.
- **Q2 :** Pensez aux lignes de flux métalliques et à l'écrouissage/affinement du grain.
- **Q4 :** Attention aux formules cinématiques de liaison entre $V_c$ et $N$ ($V_c = \pi \cdot D \cdot N$), ainsi qu'entre $V_f$, $N$, $Z$ et $f_z$.
- **Q5 :** Veillez à bien homogénéiser les unités (en particulier les $\text{mm}$ et les $\text{MPa} = \text{N/mm}^2$).

---

### 📋 Corrigé détaillé et analyse des résultats

#### Partie 1 : Analyse critique du choix du procédé d'obtention de la préforme

1. **Calcul du taux de perte matière :**
   Le volume de matière éliminée est $V_{enlevé} = V_i - V_f = 1800 - 450 = 1350 \text{ cm}^3$.
   Le taux de perte matière $\tau_m$ vaut :
   $$\tau_m = \frac{V_i - V_f}{V_i} = \frac{1800 - 450}{1800} = \frac{1350}{1800} = 0{,}75 \text{ soit } 75\%$$
   *Analyse critique :* Un taux de perte de $75\%$ est catastrophique d'un point de vue énergétique. L'aluminium possède une énergie grise très élevée ($\approx 200 \text{ MJ/kg}$). Jeter $75\%$ de la matière sous forme de copeaux, c'est gaspiller de l'énergie de production et alourdir considérablement les coûts de retraitement/recyclage.

2. **Principe du forgeage :**
   Le forgeage consiste à déformer plastiquement le métal (à chaud ou à froid) entre deux matrices. 
   *Impact micrographique :* Contrairement à l'usinage dans la masse qui coupe les fibres cristallines, le forgeage respecte et épouse les lignes de flux (continuité fibrée). Cela confère à la pièce une résistance mécanique accrue (notamment à la fatigue et aux chocs) et permet d'affiner la taille des grains par recristallisation dynamique.

3. **Défauts majeurs en fonderie :**
   - **Les retassures :** Cavités internes dues au retrait volumétrique du métal lors de son passage de l'état liquide à l'état solide.
   - **Les soufflures (ou porosités gazeuses) :** Piégeage de bulles de gaz (air ou hydrogène dissous) dans la matrice solide lors de la solidification.

---

#### Partie 2 : Modélisation et optimisation de l'opération d'usinage de finition

4. **Cinématique de coupe :**
   - Fréquence de rotation $N$ :
     $$V_c = \pi \cdot D \cdot N \implies N = \frac{V_c}{\pi \cdot D} = \frac{300 \times 10^3 \text{ mm/min}}{\pi \times 50 \text{ mm}} \approx 1909{,}86 \text{ tr/min}$$
     Soit $N \approx 1910 \text{ tr/min}$.
   - Vitesse d'avance table $V_f$ :
     $$V_f = f_z \cdot Z \cdot N = 0{,}1 \text{ mm/dent} \times 4 \text{ dents} \times 1910 \text{ tr/min} = 764 \text{ mm/min}$$

5. **Effort de coupe :**
   - Épaisseur moyenne $h \approx f_z = 0{,}1 \text{ mm}$.
   - Calcul de $k_c$ :
     $$k_c = 800 \times (0{,}1)^{-0{,}25} = 800 \times (10^{-1})^{-0{,}25} = 800 \times 10^{0{,}25} \approx 800 \times 1{,}778 = 1422{,}5 \text{ MPa}$$
   - Section du copeau $S$ :
     $$S = a_p \cdot f_z = 2 \text{ mm} \times 0{,}1 \text{ mm} = 0{,}2 \text{ mm}^2$$
   - Effort tangentiel moyen $F_c$ (pour une dent en prise) :
     $$F_c = k_c \cdot S = 1422{,}5 \text{ MPa} \times 0{,}2 \text{ mm}^2 = 284{,}5 \text{ N}$$

6. **Analyse critique des limites du modèle :**
   - **Phénomène 1 : Échauffement thermique extrême en GVU.** À haute vitesse, le flux thermique est si intense que les caractéristiques mécaniques locales du matériau chutent (adoucissement thermique), rendant l'hypothèse d'un $k_c$ purement géométrique (dépendant seulement de $h$) caduque.
   - **Phénomène 2 : L'usure de l'outil (en dépouille ou en cratère).** L'augmentation de la surface d'usure modifie la géométrie de coupe effective, augmentant les frottements et donc l'effort réel par rapport au modèle initial. Selon la **loi de Taylor** ($V_c \cdot T^n = C$), une augmentation de la température ou de l'effort accélère drastiquement l'usure, réduisant la durée de vie $T$ de l'outil de manière non linéaire.