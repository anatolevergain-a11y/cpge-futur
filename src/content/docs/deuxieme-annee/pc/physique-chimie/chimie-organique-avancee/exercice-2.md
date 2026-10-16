---
title: 'Exercice 2 : Additions sur les dérivés carbonylés et organomagnésiens'
description: 'Problème d entraînement type concours pour PC.'
---

### 🌐 Énoncé du problème / Étude de cas

Les organomagnésiens mixtes, communément appelés réactifs de Grignard ($\text{R-Mg-X}$), constituent l'un des outils les plus puissants de la synthèse organique pour la création de liaisons carbone-carbone. Cependant, leur manipulation industrielle à grande échelle (filière chimie fine et pharmaceutique) requiert une maîtrise rigoureuse des bilans thermiques et des cinétiques réactionnelles, en raison de l'exothermie marquée de ces réactions.

On s'intéresse ici à la synthèse d'un alcool tertiaire, le 2-méthylbutan-2-ol, par action du bromure d'éthylmagnésium sur l'acétone (propan-2-one). 

Dans le cadre d'une démarche d'écoconception et d'évaluation des risques, on souhaite modéliser l'étape d'addition nucléophile, analyser l'impact des sous-produits sur le bilan massique, et discuter des limites thermodynamiques et cinétiques du réacteur utilisé à l'échelle pilote.

---

### ❓ Questions progressives

#### Partie I : Analyse structurale et préparation du réactif
1. Établir la formule semi-développée du 2-méthylbutan-2-ol. Identifier les fonctions chimiques et préciser le caractère stéréogène éventuel de la molécule.
2. Décrire la préparation du bromure d'éthylmagnésium à partir de bromoéthane et de magnésium métallique dans l'éther diéthylique anhydre. Quel est le rôle critique du solvant dans la stabilisation de l'organomagnésien ?

#### Partie II : Étude mécaniste et thermodynamique de l'addition
3. Écrire le bilan réactionnel de l'addition du bromure d'éthylmagnésium sur la propan-2-one, suivi de l'hydrolyse acide menant à l'alcool désiré.
4. Proposer un mécanisme réactionnel rigoureux (mouvement électronique par des flèches courbes) pour l'étape d'addition nucléophile, en mettant en évidence l'activation électrophile du carbonyle par l'ion magnésien $\text{Mg}^{2+}$.
5. L'enthalpie standard de la réaction d'addition est estimée à $\Delta_r H^\circ \approx -120\text{ kJ}\cdot\text{mol}^{-1}$. Pour un réacteur discontinu (batch) de volume utile $V = 50\text{ L}$, contenant une solution à $C = 2{,}0\text{ mol}\cdot\text{L}^{-1}$ de propan-2-one, calculer l'énergie thermique totale libérée lors de l'addition totale.

#### Partie III : Analyse critique et limites du modèle
6. **Esprit critique :** Dans les conditions industrielles, si la réfrigération du réacteur venait à défaillir, l'élévation de température pourrait atteindre un seuil critique où l'éther diéthylique (point d'ébullition $35^\circ\text{C}$) se vaporiserait instantanément. Citer une alternative technologique ou un changement de solvant permettant d'atténuer ce risque tout en maintenant la réactivité.
7. Expliquer pourquoi la présence de traces d'eau dans le milieu réactionnel lors de la formation ou de l'utilisation de l'organomagnésien est une cause majeure d'échec de la synthèse. Illustrer par une équation bilan.

---

### 💡 Pistes & Indications

- **Q2 :** Penser à la structure de coordination du magnésium (le tétraèdre de coordination est stabilisé par les doublets non liants de l'oxygène de l'éther).
- **Q4 :** L'ion $\text{Mg}^{2+}$ joue le rôle d'acide de Lewis en se coordinant à l'atome d'oxygène du groupement carbonyle, augmentant ainsi la partial positive charge ($\delta^+$) sur le carbone fonctionnel.
- **Q5 :** Utilisez la relation $Q = n \times (-\Delta_r H^\circ)$ avec $n$ la quantité de matière totale de réactif limitant engagée.
- **Q7 :** L'organomagnésien possède un caractère basique prononcé (carbanion masqué).

---

### 📋 Corrigé détaillé et analyse des résultats

#### Partie I_1. Le 2-méthylbutan-2-ol a pour formule semi-développée : 
   $$\text{CH}_3-\text{CH}_2-\text{C}(\text{OH})(\text{CH}_3)_2$$
   Il s'agit d'un alcool tertiaire. La molécule ne possède aucun carbone asymétrique (le carbone porteur de l'hydroxyle est lié à deux groupements méthyle identiques), elle est donc achirale.
2. Équation de formation : 
   $$\text{CH}_3-\text{CH}_2-\text{Br} + \text{Mg} \xrightarrow{\text{éther anhydre}} \text{CH}_3-\text{CH}_2-\text{MgBr}$$
   Le solvant (éther diéthylique) joue un rôle fondamental : les doublets non liants de l'oxygène de l'éther se coordonnent avec l'acide de Lewis qu'est le magnésium (déficient en électrons), ce qui solubilise le réactif organomagnésien formé et stabilise le complexe par solvatation.

#### Partie II
3. Bilan réactionnel global :
   - Étape 1 (Addition) : $\text{CH}_3-\text{CH}_2-\text{MgBr} + (\text{CH}_3)_2\text{C=O} \rightarrow (\text{CH}_3)_2(\text{CH}_3\text{CH}_2)\text{C-O-MgBr}$
   - Étape 2 (Hydrolyse acide) : $(\text{CH}_3)_2(\text{CH}_3\text{CH}_2)\text{C-O-MgBr} + \text{H}_3\text{O}^+ \rightarrow (\text{CH}_3)_2(\text{CH}_3\text{CH}_2)\text{C-OH} + \text{Mg}^{2+} + \text{Br}^- + \text{H}_2\text{O}$
4. Mécanisme réactionnel :
   - L'atome de magnésium de $\text{CH}_3-\text{CH}_2-\text{MgBr}$ se coordonne au doublet de l'oxygène carbonyle de la propan-2-one.
   - Le groupe éthyle, agissant comme source nucléophile de type carbanion ($\text{CH}_3-\text{CH}_2^{\delta-}$), attaque le carbone électrophile du carbonyle, provoquant le rabattement des électrons de la liaison $\pi(\text{C=O})$ vers l'oxygène.
5. Calcul de l'énergie thermique :
   - Quantité de matière de propan-2-one : $n = C \times V = 2{,}0\text{ mol}\cdot\text{L}^{-1} \times 50\text{ L} = 100\text{ mol}$.
   - Chaleur dégagée : $Q = n \times (-\Delta_r H^\circ) = 100\text{ mol} \times 120\text{ kJ}\cdot\text{mol}^{-1} = 12\,000\text{ kJ} = 12\text{ MJ}$.
   Cette quantité équivaut à l'énergie nécessaire pour porter environ $36\text{ L}$ d'eau de $20^\circ\text{C}$ à $100^\circ\text{C}$, ce qui souligne la criticité du contrôle de l'exothermie.

#### Partie III
6. **Analyse critique et limites :** 
   L'utilisation d'éther diéthylique présente un risque majeur d'incendie/explosion en raison de son point d'ébullition bas ($35^\circ\text{C}$) et de sa forte inflammabilité. 
   *Alternative industrielle :* Remplacer l'éther diéthylique par du tétrahydrofurane (THF), dont le point d'ébullition est plus élevé ($66^\circ\text{C}$), ou utiliser un procédé en flux continu (*flow chemistry*) qui permet d'évacuer la chaleur beaucoup plus efficacement grâce à un rapport surface/volume très élevé, réduisant ainsi le volume réactionnel instantané.
7. L'eau est un inhibiteur drastique des organomagnésiens en raison de leur basicité prononcée. Elle provoque une réaction acido-basique parasite (protonation du réactif) :
   $$\text{CH}_3-\text{CH}_2-\text{MgBr} + \text{H}_2\text{O} \rightarrow \text{CH}_3-\text{CH}_3\uparrow + \text{HO-MgBr}$$
   Le bromoéthane est ainsi converti en éthane gazeux, entraînant la destruction stœchiométrique du réactif et une baisse critique du rendement.