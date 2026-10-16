---
title: 'Exercice 2 : Transmission de puissance (engrenages, courroies)'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Étude de cas

On s'intéresse à la chaîne de transmission de puissance d'un système électromécanique industriel compact, destiné à l'entraînement d'un treuil de levage. L'architecture globale est constituée d'un moteur électrique asynchrone, d'un premier étage de réduction par courroie crantée, et d'un second étage par réducteur à engrenages parallèles.

L'objectif de cette étude est de valider les choix de dimensionnement cinématique et dynamique, tout en évaluant l'impact des pertes énergétiques et des limites technologiques des liaisons.

Données et caractéristiques nominales du cahier des charges :
- Puissance utile moteur : $P_m = 3{,}0\text{ kW}$
- Fréquence de rotation nominale du moteur : $N_m = 1450\text{ tr/min}$
- Fréquence de rotation souhaitée en sortie de réducteur : $N_s \approx 120\text{ tr/min}$
- Entraxe souhaité pour la transmission par courroie : $A = 250\text{ mm}$

---

### ❓ Questions progressives (incluant des questions d'analyse critique)

#### Partie I : Analyse cinématique globale
1. Calculer le rapport de réduction global $k_{global}$ nécessaire pour satisfaire le cahier des charges. Exprimer ce rapport sous forme de fraction irréductible approchée.
2. Le choix est fait de décomposer ce rapport global en deux étages : un premier étage par courroie crantée ($k_1 = \frac{N_c}{N_m}$) et un second par engrenages ($k_2 = \frac{N_s}{N_c}$), avec $N_c$ la fréquence de rotation de l'arbre intermédiaire. Sachant que l'encombrement limite le rapport de l'étage par courroie à $k_1 = 1/2{,}5$, déterminer le rapport $k_2$ nécessaire pour l'engrenage.

#### Partie II : Étude de l'étage par courroie crantée
La poulie motrice possède un nombre de dents $Z_1 = 20$ et le pas de la courroie est $p = 8\text{ mm}$.
3. Calculer le nombre de dents $Z_2$ de la poulie réceptrice et le diamètre primitif $D_{p1}$ de la poulie motrice. En déduire son diamètre primitif $D_{p2}$.
4. **Analyse critique :** La modélisation par roulement sans glissement est-elle rigoureusement exacte pour une courroie crantée ? Quels phénomènes physiques peuvent introduire une erreur entre le rapport cinématique théorique et la réalité mesurée sur banc d'essai ?

#### Partie III : Étude de l'étage par engrenages à dentures droites
L'étage par engrenages est constitué d'un pignon menant (arbre intermédiaire) de $Z_3 = 24$ dents et d'une roue menée (arbre de sortie) de $Z_4 = 72$ dents. Le module des dentures est $m = 2{,}5\text{ mm}$.
5. Calculer l'entraxe $a_{12}$ de cet étage d'engrenages.
6. Exprimer et calculer la vitesse linéaire tangentielle $V_t$ au niveau du contact des dents, en considérant un rendement unitaire dans un premier temps.
7. **Analyse énergétique et critique :** L'ingénieur constate sur le prototype que la température du carter d'engrenages s'élève anormalement après 2 heures d'utilisation à pleine charge. Le rendement global mesuré de l'étage à engrenages est $\eta_2 = 0{,}95$. 
   - Calculer la puissance dissipée par frottement sous forme de chaleur dans cet étage.
   - Discuter des hypothèses de modélisation initiale (rendement $\eta = 1$) et identifier les sources majeures de pertes dans un contact dentelé sous charge.

---

### 💡 Pistes & Indications

- **Q1 & Q2 :** Le rapport de réduction d'un étage s'exprime comme le rapport des fréquences de sortie sur entrée. Attention au sens des grandeurs ($k < 1$ pour un réducteur).
- **Q3 :** Pour une poulie crantée, le diamètre primitif $D_p$ est lié au nombre de dents $Z$ et au pas $p$ par la relation : $p \times Z = \pi \times D_p$.
- **Q4 :** Pensez à l'élasticité du matériau de la courroie (câbles de traction en acier/aramide et corps en polychloroprène ou polyuréthane) et au phénomène de "creep" (fluage/glissement élastique).
- **Q5 & Q6 :** Le diamètre primitif d'une roue dentée cylindrique est $D = m \cdot Z$. L'entraxe d'un engrenage extérieur est $a = \frac{m(Z_3 + Z_4)}{2}$.
- **Q7 :** La puissance perdue est $P_{perte} = P_{entree} - P_{sortie}$. Les pertes par frottement dépendent de la lubrification et du coefficient de frottement au flanc des dents.

---

### 📋 Corrigé détaillé et analyse des résultats

#### Partie I : Analyse cinématique globale
1. **Rapport de réduction global :**
   $$k_{global} = \frac{N_s}{N_m} = \frac{120}{1450} = \frac{12}{145} \approx 0{,}0828$$

2. **Répartition des rapports :**
   On a $k_{global} = k_1 \times k_2$. Avec $k_1 = \frac{1}{2{,}5} = 0{,}4$ :
   $$k_2 = \frac{k_{global}}{k_1} = \frac{12 / 145}{2/5} = \frac{60}{145} = \frac{12}{29} \approx 0{,}414$$

#### Partie II : Étude de l'étage par courroie crantée
3. **Caractéristiques géométriques :**
   Puisque $k_1 = \frac{Z_1}{Z_2} = \frac{1}{2{,}5}$, on a $Z_2 = 2{,}5 \times Z_1 = 2{,}5 \times 20 = 50\text{ dents}$.
   Le diamètre primitif de la poulie 1 est :
   $$D_{p1} = \frac{p \cdot Z_1}{\pi} = \frac{8 \times 20}{\pi} = \frac{160}{\pi} \approx 50{,}93\text{ mm}$$
   Le diamètre primitif de la poulie 2 est :
   $$D_{p2} = \frac{p \cdot Z_2}{\pi} = \frac{8 \times 50}{\pi} = \frac{400}{\pi} \approx 127{,}32\text{ mm}$$

4. **Analyse critique (Courroie) :**
   *Modélisation vs Réalité :* La cinématique exacte suppose un contact rigide sans glissement. Or, une courroie crantée transmet l'effort par appui des dents de la courroie dans les flans des dents de la poulie, mais le brin tendu et le brin mou subissent des **variations de tension élastique**. Il se produit un allongement élastique différencié de la courroie (phénomène de *creep* ou glissement élastique local). Par conséquent, le rapport instantané peut légèrement osciller, et un échauffement interne apparaît par hystérésis des matériaux polymères.

#### Partie III : Étude de l'étage par engrenages à dentures droites
5. **Entraxe de l'engrenage :**
   $$a_{12} = \frac{m \cdot (Z_3 + Z_4)}{2} = \frac{2{,}5 \times (24 + 72)}{2} = \frac{2{,}5 \times 96}{2} = 120\text{ mm}$$

6. **Vitesse linéaire tangentielle :**
   La fréquence de rotation de l'arbre intermédiaire est $N_c = N_m \times k_1 = 1450 \times 0{,}4 = 580\text{ tr/min}$.
   La vitesse angulaire correspondante est :
   $$\omega_c = \frac{2\pi \cdot N_c}{60} = \frac{2\pi \times 580}{60} \approx 60{,}74\text{ rad/s}$$
   Le rayon primitif du pignon 3 est $R_{p3} = \frac{m \cdot Z_3}{2} = \frac{2{,}5 \times 24}{2} = 30\text{ mm} = 0{,}03\text{ m}$.
   La vitesse tangentielle est donc :
   $$V_t = R_{p3} \cdot \omega_c = 0{,}03 \times 60{,}74 \approx 1{,}82\text{ m/s}$$

7. **Analyse énergétique et critique :**
   - *Puissance d'entrée de l'étage :* En négligeant les pertes du premier étage pour l'instant (ou en supposant $P_c = P_m = 3\text{ kW}$), la puissance en entrée de l'étage 2 est $P_{e2} = 3000\text{ W}$.
   - *Puissance dissipée :* 
     $$P_{sortie} = \eta_2 \times P_{e2} = 0{,}95 \times 3000 = 2850\text{ W}$$
     $$P_{perte} = P_{e2} - P_{sortie} = 3000 - 2850 = 150\text{ W}$$
     Une puissance thermique de $150\text{ W}$ est ainsi dissipée en continu dans un carter de volume réduit, ce qui explique l'élévation notable de température.
   - *Limites du modèle et sources de pertes :* L'hypothèse d'un rendement unitaire ($\eta = 1$) est un modèle idéal thermodynamiquement inacceptable pour dimensionner le système thermique. Les pertes réelles proviennent de :
     1. Le **frottement glissant** entre les profils de dents conjugués (en dehors du pôle d'engrènement).
     2. Le **brassage de l'huile** de lubrification par les roues en rotation à haute vitesse.
     3. Les pertes par **hystérésis élastique** dans le matériau des dents sous charge cyclique. 
     *Conclusion critique :* Un système de refroidissement ou une augmentation de la surface d'échange du carter (ailettes) s'avère indispensable pour stabiliser la température de fonctionnement en régime permanent.