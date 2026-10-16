---
title: 'Exercice 1 : Respiration cellulaire et mitochondries'
description: 'Problème d entraînement type concours.'
---

# Concours BCPST — SVT
## Problème guidé : Analyse thermodynamique et fonctionnelle du couplage énergético-respiratoire mitochondrial

---

### Énoncé

La mitochondrie est le siège ultime de l'oxydation des combustibles carbonés et de la production d'ATP par phosphorylation oxydative chez les Eucaryotes. Le modèle chimiosmotique de Peter Mitchell établit que le flux d'électrons le long de la chaîne respiratoire (CI à CIV) est couplé à l'éjection de protons de la matrice vers l'espace intermembranaire (EIM), générant une force proton-motrice ($\Delta p$) elle-même utilisée par l'ATP synthase (CV) pour synthétiser l'ATP à partir d'ADP et de $\text{Pi}$. 

Ce problème propose d'analyser quantitativement l'efficacité énergétique de ce couplage à partir de données biochimiques et biophysiques mesurées sur des mitochondries isolées de foie de rat à $37\ \text{°C}$.

---

### Données biophysiques et thermodynamiques

*   Constante universelle des gaz parfaits ($R$) : $8{,}31\ \text{J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$
*   Température absolue ($T$) : $310\ \text{K}$ ($37\ \text{°C}$)
*   Nombre de Faraday ($F$) : $96\ 485\ \text{C}\cdot\text{mol}^{-1}$
*   Potentiel membranaire mitochondrial ($\Delta\psi$) : $+160\ \text{mV}$ (interne négatif)
*   pH matriciel : $7{,}8$ ; pH de l'espace intermembranaire : $7{,}2$
*   Variation d'énergie libre standard de phosphorylation ($\Delta G^{\circ\prime}_{\text{ATP}}$) : $+30{,}5\ \text{kJ}\cdot\text{mol}^{-1}$
*   Concentrations intra-mitochondriales stationnaires : 
    *   $[\text{ATP}] = 5{,}0\ \text{mmol}\cdot\text{L}^{-1}$
    *   $[\text{ADP}] = 1{,}0\ \text{mmol}\cdot\text{L}^{-1}$
    *   $[\text{Pi}] = 5{,}0\ \text{mmol}\cdot\text{L}^{-1}$

---

### Questions

1. **Rappel et analyse structurale :** Décrire brièvement l'organisation ultrastructurale de la mitochondrie et préciser en quoi les propriétés biophysiques de la membrane interne sont indispensables au fonctionnement du modèle chimiosmotique.
2. **Calcul de la force proton-motrice :** 
   * a. Rappeler l'expression de la force proton-motrice ($\Delta p$) exprimée en volts, en explicitant les contributions électrique et chimique (osmotique).
   * b. Calculer la valeur numérique de $\Delta p$ dans les conditions physiologiques décrites.
3. **Énergétique de la synthèse d'ATP :** 
   * a. Calculer la variation d'énergie libre réelle ($\Delta G_{\text{ATP}}$) pour la synthèse d'une mole d'ATP dans les conditions stationnaires de la matrice mitochondriale.
   * b. Sachant que le rapport stœchiométrique d'exportation/importation de l'ATP synthase chez les métazoaires est d'environ $c = 8$ protons par tour (pour la synthèse de $3$ moles d'ATP, soit un coût de $8/3 \approx 2{,}67$ protons par ATP synthétisé), calculer l'énergie libre fournie par le flux de protons nécessaire à la synthèse d'une mole d'ATP. Conclure sur le rendement thermodynamique du système.
4. **Analyse critique et limites du modèle :** 
   * a. Définir l'état 3 et l'état 4 selon la terminologie de Chance et Williams. Comment l'ajout d'un agent découplant (comme le 2,4-dinitrophénol, DNP) modifie-t-il la consommation d'oxygène et le gradient de protons ?
   * b. Discuter des limites du modèle chimiosmotique strict face à l'hypothèse de couplage local (domaines sub-membranaires de protons).

---

### Pistes et indications

* Pour la question 2, veillez à convertir le gradient de pH en équivalent de potentiel électrique en utilisant la relation de Nernst simplifiée à $37\ \text{°C}$ ($\frac{2{,}3 \cdot R \cdot T}{F} \approx 61{,}5\ \text{mV}$ par unité de pH).
* Pour la question 3.a, utilisez la formule de Van 't Hoff : $\Delta G = \Delta G^{\circ\prime} + R \cdot T \cdot \ln\left(\frac{[\text{ATP}]}{[\text{ADP}] \cdot [\text{Pi}]}\right)$, en prenant soin de convertir $[\text{Pi}]$ par rapport à une référence standard de $1\ \text{mol}\cdot\text{L}^{-1}$ (ou d'exprimer les concentrations de manière homogène en $\text{mol}\cdot\text{L}^{-1}$).

---

### Corrigé rédigé

#### 1. Ultrastructure et membrane interne
La mitochondrie est délimitée par une membrane externe perméable (présence de porines) et une membrane interne très repliée en crêtes, imperméable aux ions et aux petites molécules polaires. Cette imperméabilité sélective est la condition *sine qua non* à l'établissement et au maintien d'un gradient électrochimique de protons ($\Delta p$) entre l'espace intermembranaire et la matrice. La richesse en cardiolipines (phospholipides d'immersion spécifiques) confère à cette membrane une fluidité et une étanchéité protonique remarquables, indispensables au couplage énergétique.

#### 2. Calcul de la force proton-motrice ($\Delta p$)
*   **a.** La force proton-motrice ($\Delta p$), exprimée en volts, est définie par la formule de Mitchell :
    $$\Delta p = \Delta\psi - \frac{2{,}3 \cdot R \cdot T}{F} \cdot \Delta\text{pH}$$
    Où $\Delta\text{pH} = \text{pH}_{\text{matrice}} - \text{pH}_{\text{EIM}}$.
*   **b. Application numérique :**
    *   $\Delta\psi = +160\ \text{mV} = 0{,}160\ \text{V}$
    *   $\Delta\text{pH} = 7{,}8 - 7{,}2 = +0{,}6$ unités pH.
    *   À $37\ \text{°C}$ ($310\ \text{K}$), le facteur thermique $\frac{2{,}3 \cdot R \cdot T}{F} \approx 61{,}5\ \text{mV}$.
    *   Contribution osmotique : $-61{,}5 \times 0{,}6 = -36{,}9\ \text{mV}$.
    *   $\Delta p = 160\ \text{mV} - 36{,}9\ \text{mV} = 123{,}1\ \text{mV}$ (soit $0{,}123\ \text{V}$).

#### 3. Énergétique de la synthèse d'ATP
*   **a. Calcul de $\Delta G_{\text{ATP}}$ :**
    $$\Delta G_{\text{ATP}} = \Delta G^{\circ\prime}_{\text{ATP}} + R \cdot T \cdot \ln\left(\frac{[\text{ATP}]}{[\text{ADP}] \cdot [\text{Pi}]}\right)$$
    Avec $[\text{ATP}] = 5\times 10^{-3}$, $[\text{ADP}] = 1\times 10^{-3}$, et $[\text{Pi}] = 5\times 10^{-3}\ \text{mol}\cdot\text{L}^{-1}$ (en considérant l'état standard de référence à $1\ \text{mol}\cdot\text{L}^{-1}$ pour chaque terme, ou en normalisant par rapport à la concentration standard).
    Le quotient de réaction $Q_r = \frac{5\times 10^{-3}}{(1\times 10^{-3}) \cdot (5\times 10^{-3})} = \frac{1}{1\times 10^{-3}} = 10^3\ \text{L}\cdot\text{mol}^{-1}$.
    *Attention à l'homogénéité des unités :* Le terme logarithmique doit porter sur des grandeurs sans dimension. En prenant les concentrations en $\text{mol}\cdot\text{L}^{-1}$ divisées par la concentration standard $C^{\circ} = 1\ \text{mol}\cdot\text{L}^{-1}$ :
    $$R \cdot T \cdot \ln(10^3) = 8{,}31 \times 310 \times 3 \ln(10) \approx 8{,}31 \times 310 \times 6{,}91 \approx 17\ 800\ \text{J}\cdot\text{mol}^{-1} = 17{,}8\ \text{kJ}\cdot\text{mol}^{-1}$$
    $$\Delta G_{\text{ATP}} = 30{,}5 + 17{,}8 = 48{,}3\ \text{kJ}\cdot\text{mol}^{-1}$$

*   **b. Énergie fournie par le flux protonique :**
    Le coût énergétique pour 1 mole d'ATP est de $n = \frac{8}{3}$ moles de protons.
    L'énergie libre fournie par le transport de $n$ moles de protons de l'EIM vers la matrice est :
    $$\Delta G_{\text{protons}} = n \cdot F \cdot \Delta p$$
    $$\Delta G_{\text{protons}} = \frac{8}{3} \times 96\ 485\ \text{C}\cdot\text{mol}^{-1} \times 0{,}123\ \text{V} \approx 31\ 680\ \text{J}\cdot\text{mol}^{-1} = 31{,}7\ \text{kJ}\cdot\text{mol}^{-1}$$
    *Analyse critique (limite du modèle simple) :* On observe ici une apparente contradiction thermodynamique : $\Delta G_{\text{ATP}} (48{,}3\ \text{kJ}\cdot\text{mol}^{-1})$ semble supérieur à l'énergie fournie par le flux macroscopique moyen de protons ($\approx 31{,}7\ \text{kJ}\cdot\text{mol}^{-1}$). Cela s'explique par le fait que les valeurs mesurées de $\Delta p$ sont des moyennes macroscopiques, alors que les micro-domaines locaux au voisinage des complexes respiratoires et de l'ATP synthase présentent des gradients protoniques instantanés nettement plus élevés. De plus, l'échangeur ADP/ATP (adénine nucléotide translocase) est électrogène et consomme une part du potentiel de membrane $\Delta\psi$.

#### 4. Analyse critique et limites du modèle
*   **a. États de Chance et Williams et action du DNP :**
    *   **État 3 :** État de respiration active (présence saturante de substrats, d'oxygène, d'ADP et de $\text{Pi}$). Le flux d'électrons et la consommation d'oxygène ($\text{VO}_2$) sont maximaux.
    *   **État 4 :** État de repos (épuisement de l'ADP). La consommation d'oxygène diminue drastiquement, limitée uniquement par la fuite passive de protons à travers la membrane interne.
    *   **Effet du DNP :** Le 2,4-dinitrophénol est un protonophore lipophile qui dissipe le gradient de protons ($\Delta p$) en transportant les protons à travers la membrane interne sans passer par l'ATP synthase. Il en résulte un effondrement de $\Delta\psi$ et $\Delta\text{pH}$, une levée de l'inhibition respiratoire (accélération maximale de la chaîne respiratoire, donc augmentation de la consommation d'$\text{O}_2$), mais une chute totale de la production d'ATP (dissipation de l'énergie sous forme de chaleur).
*   **b. Limites du modèle chimiosmotique strict :**
    Le modèle de Mitchell postule un pool unique et homogène de protons dans l'espace intermembranaire et la matrice. Or, les données biophysiques modernes mettent en évidence des structures supramoléculaires (les *supercomplexes* ou *respirosomes*) associant complexes respiratoires et ATP synthase au niveau des crêtes mitochondriales. Ces supercomplexes favorisent l'existence de canaux de diffusion préférentiels des protons (couplage local), invalidant partiellement l'hypothèse d'une dilution isotrope des protons dans l'EIM et expliquant les rendements énergétiques réels observés in vivo.