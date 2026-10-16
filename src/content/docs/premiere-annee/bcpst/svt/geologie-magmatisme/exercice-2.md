---
title: 'Exercice 2 : Zones de subduction et métamorphisme'
description: 'Problème d entraînement type concours pour BCPST.'
---

### 🌐 Énoncé du problème / Étude de cas

Les zones de subduction sont le siège d'une dynamique thermique et mécanique intense, caractérisée par l'enfoncement de la lithosphère océanique sous une autre lithosphère (océanique ou continentale). Au cours de cette plongée, les roches subissent des variations de pression ($P$) et de température ($T$) drastiques, entraînant des transformations à l'état solide : c'est le métamorphisme de subduction. 

On s'intéresse dans ce problème à l'évolution minéralogique d'un gabbro de croûte océanique au cours de sa subduction, ainsi qu'aux transferts de matière et d'énergie associés, en adoptant une démarche quantitative et critique vis-à-vis des modèles thermodynamiques géologiques.

---

### ❓ Questions progressives

#### 1. Analyse géodynamique et conditions initiales
* **1.1.** Rappeler la structure thermique et lithosphérique d'une plaque océanique entrant en subduction. Estimer l'ordre de grandeur du gradient géothermique moyen dans cette lithosphère avant son entrée dans la fosse ($\text{en } \text{°C}\cdot\text{km}^{-1}$).
* **1.2.** Un gabbro abyssal est principalement composé de plagioclases ($\text{CaAl}_2\text{Si}_2\text{O}_8$ à $\text{NaAlSi}_3\text{O}_8$) et de pyroxènes (clinopyroxènes et orthopyroxènes). Écrire la réaction de métamorphisme (hydration) menant à la formation de schistes verts à partir de ce gabbro en présence d'eau.

#### 2. Cinématique de la subduction et trajectoires $P\text{-T}$
* **2.1.** On considère une plaque océanique plongeant à une vitesse constante $v = 8 \text{ cm}\cdot\text{an}^{-1}$ selon un pendage $\alpha = 45^\circ$. Calculer la profondeur atteinte par un élément de la plaque après 5 millions d'années.
* **2.2.** Le gradient de pression lithostatique est donné par la relation $P = \rho \cdot g \cdot z$, où $\rho$ est la densité moyenne de la lithosphère surjacente ($\rho \approx 3,0 \times 10^3 \text{ kg}\cdot\text{m}^{-3}$), $g \approx 9,81 \text{ m}\cdot\text{s}^{-2}$ et $z$ la profondeur. Calculer la pression (en $\text{kbar}$) exercée à une profondeur de $30 \text{ km}$. *(On rappelle $1 \text{ bar} = 10^5 \text{ Pa}$ et $1 \text{ kbar} = 10^8 \text{ Pa}$)*.
* **2.3.** Expliquer qualitativement pourquoi les trajectoires $P\text{-T}$ (pression-température) suivies par les roches dans une zone de subduction sont dites "de basse température et haute pression" ($BT\text{-HP}$) comparativement aux gradients géothermiques continentaux ou des dorsales.

#### 3. Transition faciès schistes bleus / éclogites et analyse critique du modèle
* **3.1.** À plus grande profondeur, le métamorphisme progresse vers le faciès éclogitique. La réaction majeure est la transformation du glaucophane (amphibole sodique) et du plagioclase en jadéite (pyroxène sodique) et grenat, selon le bilan schématique :
  $$\text{Glaucophane} + \text{Plagioclase} \rightarrow \text{Grenat} + \text{Omphacite} + \text{Eau}$$
  Quel est le devenir de l'eau libérée lors de cette déshydratation ? Quel rôle majeur joue-t-elle dans le magmatisme d'arc volcanique sus-jacent ?
* **3.2.** *Analyse critique et limites du modèle :* Les diagrammes de phases thermodynamiques utilisés pour prédire ces assemblages minéraux supposent un système à l'équilibre chimique parfait, fermé ou ouvert selon les flux fluides. 
  * Discuter la validité de l'hypothèse d'équilibre thermodynamique dans des roches froides et déformées.
  * Préciser l'impact d'une cinétique réactionnelle lente (phénomènes de métastabilité, persistance de minéraux reliques) sur l'interprétation des âges radiométriques et des conditions $P\text{-T}$ maximales.

---

### 💡 Pistes & Indications

1. **1.1.** Penser à l'âge de la lithosphère au moment de sa subduction (généralement plusieurs dizaines de millions d'années) et à l'épaisseur de la lithosphère thermique (environ $100 \text{ km}$ pour un flux de surface de l'ordre de $60 \text{ mW}\cdot\text{m}^{-2}$).
2. **2.1.** Faire un schéma trigonométrique simple reliant la distance parcourue le long du plan de subduction, le pendage et la profondeur $z$. Attention aux conversions d'unités (années en secondes, centimètres en mètres).
3. **2.2.** Utiliser l'analyse dimensionnelle et appliquer rigoureusement les unités du Système International avant de convertir en kbar.
4. **3.1.** Suivre le chemin des fluides libérés (migration vers le manteau lithosphérique supra-subducteur sus-jacent) et leur effet sur le solidus du peridotite (abaissement du point de fusion).
5. **3.2.** Pour la critique, penser au rôle de l'eau comme catalyseur indispensable aux réactions à l'état solide. Sans fluide, les réactions ne peuvent avancer, même si les conditions $P\text{-T}$ théoriques sont atteintes.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Analyse géodynamique et conditions initiales
* **1.1.** Une lithosphère océanique âgée de $50 \text{ Ma}$ présente une épaisseur thermique d'environ $100 \text{ km}$ pour une température basale de manteau estimée à $T_m \approx 1300 \text{ \degree C}$. Le gradient géothermique moyen dans la partie conductrice est donc de l'ordre de :
  $$\text{Grad}_T \approx \frac{1300 \text{ \degree C}}{100 \text{ km}} = 13 \text{ \degree C}\cdot\text{km}^{-1}$$
  Il est plus faible dans la lithosphère froide que dans la croûte continentale stable ($\approx 25 \text{ \degree C}\cdot\text{km}^{-1}$).
* **1.2.** La chloritisation ou la saussuritisation (formation de schistes verts) s'écrit schématiquement :
  $$\text{Gabbro } (\text{Plagioclase} + \text{Pyroxène}) + \text{H}_2\text{O} \rightarrow \text{Chlorite} + \text{Actinote} + \text{Albite} + \text{Épidote}$$

#### 2. Cinématique de la subduction et trajectoires $P\text{-T}$
* **2.1.** Soit $L$ la distance parcourue sur le plan incliné en $t = 5 \text{ Ma} = 5 \times 10^6 \times 365,25 \times 24 \times 3600 \text{ s} \approx 1,58 \times 10^{14} \text{ s}$.
  $$L = v \times t = 0,08 \text{ m}\cdot\text{an}^{-1} \times 5 \times 10^6 \text{ ans} = 4 \times 10^5 \text{ m} = 400 \text{ km}$$
  La profondeur $z$ atteinte est géométriquement :
  $$z = L \cdot \sin(\alpha) = 400 \times \sin(45^\circ) \approx 400 \times 0,707 \approx 283 \text{ km}$$
  *(Note géologique : à $283 \text{ km}$, la plaque a généralement atteint le manteau transitionnel, mais le calcul illustre la cinématique pure).*
* **2.2.** Application numérique pour $z = 30 \text{ km} = 3 \times 10^4 \text{ m}$ :
  $$P = \rho \cdot g \cdot z = (3,0 \times 10^3 \text{ kg}\cdot\text{m}^{-3}) \times (9,81 \text{ m}\cdot\text{s}^{-2}) \times (3 \times 10^4 \text{ m})$$
  $$P \approx 8,83 \times 10^8 \text{ Pa} = 8,83 \times 10^2 \text{ bar} \approx 8,83 \text{ kbar}$$
* **2.3.** La plaque subductée est froide car elle est constituée d'une lithosphère ancienne qui n'a pas eu le temps de se réchauffer par conduction thermique (la diffusion thermique est un processus lent comparé à la vitesse de descente rapide de la plaque). Par conséquent, la température augmente beaucoup moins vite avec la profondeur que dans un régime normal, ce qui définit un gradient $BT\text{-HP}$.

#### 3. Transition faciès schistes bleus / éclogites et analyse critique du modèle
* **3.1.** L'eau libérée lors de la déshydratation des minéraux hydratés (comme le glaucophane ou les micas) est un fluide supercritique riche en éléments dissous. En migrant par capillarité et fracturation hydraulique vers le haut, ce fluide pénètre dans le manteau sus-jacent (le "mantle wedge"). Il abaisse considérablement le solidus des péridotites mantelliques, déclenchant une fusion partielle (anatexie) à l'origine du magmatisme calco-alcalin des arcs insulaires et des zones de subduction.
* **3.2.** *Analyse critique des limites du modèle thermodynamique :*
  * **Cinétique et métastabilité :** Les diagrammes $P\text{-T}$ d'équilibre (issus de bases de données comme *Therin* ou *Perple_X*) considèrent que la roche atteint l'énergie libre de Gibbs minimale. Or, en milieu froid ($BT$), les énergies d'activation des réactions à l'état solide sont élevées. De ce fait, un gabbro peut traverser le champ de stabilité des éclogites en conservant des reliques minérales de son faciès antérieur (ex: pyroxènes magmatiques non réagis). 
  * **Rôle limitant du fluide ($P_{\text{fluid}} \neq P_{\text{litho}}$) :** Les réactions métamorphiques requièrent un milieu ouvert capable d'évacuer ou d'apporter de l'eau. Si la roche est imperméable (système fermé), la réaction de déshydratation est bloquée par la pression de pore du fluide, invalidant les prédictions simples basées uniquement sur le couple ($P_{\text{litho}}, T$).