---
title: 'Exercice 2 : Nutrition hydrominérale et photosynthèse'
description: 'Problème d entraînement type concours pour BCPST.'
---

### 🌐 Énoncé du problème / Étude de cas

L'optimisation de la croissance des cultures sous serre hyper-technologique repose sur le couplage fin entre la nutrition hydrominérale et l'efficacité photosynthétique. On s'intéresse ici à une culture de tomates (*Solanum lycopersicum*) hydroponique. 

La plante absorbe l'eau et les ions nitrate ($\text{NO}_3^-$) par ses racines, tandis que ses feuilles assurent la fixation du dioxyde de carbone ($\text{CO}_2$) atmosphérique via la photosynthèse globale. L'objectif de ce problème est d'évaluer le coût énergétique et hydrique de l'élaboration de la biomasse, puis d'analyser les limites d'un modèle simplificador couplant flux transpiratoire et assimilation carbonée.

### ❓ Questions progressives

1. **Rappel et mise en place des flux :** 
   Écrire l'équation bilan globale de la photosynthèse oxygénique en considérant l'ion nitrate ($\text{NO}_3^-$) comme source d'azote minéral pour la synthèse d'acides aminés (assimilé sous forme de matière organique carbonée et azotée).

2. **Modélisation du transport hydrique :**
   La transpiration foliaire est modélisée par une résistance globale $R_{\text{v}}$ à la diffusion de la vapeur d'eau. Expliciter la loi d'Ohm hydraulique régissant le débit transpiratoire $E$ (en $\text{mol}\cdot\text{s}^{-1}$) en fonction du gradient de potentiel hydrique entre la feuille ($\psi_{\text{feuille}}$) et l'atmosphère ($\psi_{\text{atm}}$), ainsi que la résistance totale du système sol-plante-atmosphère $R_{\text{tot}}$.

3. **Couplage stomatique et efficacité de l'eau :**
   Le rapport d'assimilation nette du $\text{CO}_2$ ($A$, en $\text{mol}\cdot\text{m}^{-2}\cdot\text{s}^{-1}$) sur la transpiration ($E$, en $\text{mol}\cdot\text{m}^{-2}\cdot\text{s}^{-1}$) définit l'efficience d'utilisation de l'eau (WUE, *Water Use Efficiency*). En considérant les coefficients de diffusion respectifs du $\text{CO}_2$ ($d_c = 1,6$) et de la vapeur d'eau ($d_v = 1$) à travers les stomates, exprimer la WUE en fonction des pressions partielles interne et externe en $\text{CO}_2$ et en vapeur d'eau.

4. **Analyse critique des ordres de grandeur et limites du modèle :**
   Pour une culture intensive, on mesure une évapotranspiration de $E = 5 \times 10^{-3} \text{ mol}\cdot\text{m}^{-2}\cdot\text{s}^{-1}$ pour une assimilation brute de $A = 20 \mu\text{mol}\cdot\text{m}^{-2}\cdot\text{s}^{-1}$. 
   * Calculer la WUE expérimentale en $\text{mmol de CO}_2 \text{ assimilé}\cdot\text{mol}^{-1}\text{ d'H}_2\text{O transpiré}$.
   * Discuter des limites biologiques et biophysiques de ce modèle linéaire stationnaire. En particulier, qu'advient-il de ce couplage en condition de stress hydrique édaphique prononcé (fermeture stomatique induite par l'acide abscissique - ABA) ?

---

### 💡 Pistes & Indications

- **Q1 :** Pensez à équilibrer les atomes de Carbone, d'Hydrogène, d'Oxygène, d'Azote et les charges électriques en introduisant des protons $\text{H}^+$ ou des ions hydroxydes $\text{OH}^-$ si nécessaire.
- **Q2 :** L'analogie électrique est classique en écophysiologie végétale : le flux est égal à la force motrice (différence de potentiel hydrique) divisée par la résistance.
- **Q3 :** Exprimez $A$ à l'aide de la conductance stomatique au $\text{CO}_2$ et $E$ à l'aide de la conductance stomatique à la vapeur d'eau, puis faites le ratio.
- **Q4 :** Attention aux unités lors du calcul de la WUE (passage de $\mu\text{mol}$ à $\text{mmol}$). Pour la critique, pensez à la photorespiration, à la température foliaire et à la non-linéarité des résistances sous stress.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Équation bilan couplée
La réduction du nitrate $\text{NO}_3^-$ en ammonium $\text{NH}_4^+$ dans la plante nécessite des électrons fournis par la photosynthèse (phase claire). L'équation bilan globale intégrant l'assimilation du carbone et du nitrate s'écrit sous la forme stœchiométrique simplifiée pour une biomasse type (ex: $\text{C}_6\text{H}_{12}\text{O}_6$ avec incorporation d'azote) :
$$6\text{CO}_2 + \text{NO}_3^- + 12\text{H}_2\text{O} + \text{H}^+ \xrightarrow{\text{lumière}} \text{C}_6\text{H}_{12}\text{O}_6 + \text{NH}_3 + 6\text{O}_2 + 6\text{H}_2\text{O}$$
*(Note : L'azote est ensuite intégré dans les squelettes carbonés sous forme d'acides aminés).*

#### 2. Loi d'Ohm hydraulique
Par analogie avec la loi d'Ohm ($I = U/R$), le débit transpiratoire $E$ s'écrit :
$$E = \frac{\psi_{\text{sol}} - \psi_{\text{atm}}}{R_{\text{tot}}} = \frac{\Delta \psi}{R_{\text{tot}}}$$
Où $\psi$ s'exprime en Pascals ($\text{Pa}$) ou en $\text{MPa}$, et $R_{\text{tot}}$ englobe les résistances hydrauliques rhizosphériques, racinaires, caulinaires et foliaires ($R_{\text{tot}} = R_{\text{sol}} + R_{\text{racine}} + R_{\text{xyleme}} + R_{\text{feuille}}$).

#### 3. Expression de l'efficience d'utilisation de l'eau (WUE)
Les flux s'expriment par les lois de Fick à travers les stomates :
$$A = g_c (C_a - C_i)$$
$$E = g_v (W_i - W_a)$$
Où $g_c$ et $g_v$ sont les conductances stomatiques respectives, liées par le rapport des coefficients de diffusion moléculaire : $g_v / g_c \approx 1,6$.
Le ratio WUE vaut donc :
$$\text{WUE} = \frac{A}{E} = \frac{g_c (C_a - C_i)}{g_v (W_i - W_a)} = \frac{C_a - C_i}{1,6 \cdot (W_i - W_a)}$$
Où $C_a$ et $C_i$ sont les concentrations externe et interne en $\text{CO}_2$, et $W_i, W_a$ les humidités (pressions partielles de vapeur d'eau).

#### 4. Application numérique et analyse critique
* **Calcul de la WUE :**
  $$A = 20 \times 10^{-6} \text{ mol}\cdot\text{m}^{-2}\cdot\text{s}^{-1} = 0,02 \text{ mmol}\cdot\text{m}^{-2}\cdot\text{s}^{-1}$$
  $$E = 5 \times 10^{-3} \text{ mol}\cdot\text{m}^{-2}\cdot\text{s}^{-1} = 5 \text{ mmol}\cdot\text{m}^{-2}\cdot\text{s}^{-1}$$
  $$\text{WUE} = \frac{0,02}{5} = 4 \times 10^{-3} \text{ mol de CO}_2 / \text{mol d'H}_2\text{O} = 4 \text{ mmol}\cdot\text{mol}^{-1}$$

* **Analyse critique et limites du modèle :**
  * *Hypothèses fortes du modèle :* Le modèle suppose un régime stationnaire, des résistances constantes et néglige la capacité tampon des tissus (capacitance hydrique). 
  * *Effet du stress hydrique (sécheresse édaphique) :* Lorsque le sol s'assèche, la baisse de $\psi_{\text{sol}}$ est perçue par les racines qui synthétisent de l'acide abscissique (ABA). Transporté par la sève xylémienne, l'ABA induit une fermeture stomatique rapide. 
  * *Limites biophysiques :* La relation linéaire entre flux d'eau et flux de carbone s'effondre. La baisse de conductance stomatique diminue drastiquement $C_i$, ce qui réduit $A$ mais augmente paradoxalement (dans un premier temps) la WUE apparente, avant d'entraîner une inhibition de la photosynthèse par limitation en $\text{CO}_2$ et élévation de la photorespiration (et risque de cavitation du xylème si la tension devient excessive).