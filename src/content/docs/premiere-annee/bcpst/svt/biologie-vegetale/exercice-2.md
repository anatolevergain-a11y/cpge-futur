---
title: 'Exercice 2 : Phytohormones et tropismes'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse quantitative et expérimentale du phototropisme et de l'action de l'auxine chez *Arabidopsis thaliana*

## Énoncé

Le phototropisme, c'est-à-dire la capacité des organes aériens à s'orienter vers une source lumineuse, est l'une des réponses végétales les plus étudiées depuis les expériences historiques de Darwin. Chez le modèle *Arabidopsis thaliana*, cette courbure est la résultante d'une redistribution latérale de l'auxine (l'acide indole-3-acétique ou AIA) induite par une illumination unilatérale de l'apex caulinaire.

Ce problème se propose d'analyser, par une approche couplant cinétique de croissance, modélisation mathématique simple et données moléculaires, le déterminisme biophysique et hormonal de la courbure phototropique.

On s'intéresse à un hypocotyle étiolé d' *Arabidopsis thaliana* d'une longueur initiale $L_0 = \text{10 mm}$, soumis à un éclairement unilatéral (provenant de la gauche à $t = 0$).

---

## Questions

### Partie I : Analyse cinétique et ordres de grandeur de la courbure

1. **Rappel et analyse critique du modèle historique :** Rappeler brièvement le rôle historique des expériences de Boysen-Jensen (1913) et Paal (1919) dans la découverte de la nature chimique du stimulus phototropique. Préciser la limite conceptuelle majeure de ces expériences fondatrices au regard de la complexité moléculaire actuelle.
2. **Cinétique macroscopique :** À partir de $t = 0$, on observe que la zone d'élongation active, située sur les $4\text{ mm}$ apicaux de l'hypocotyle, commence à se courber. La vitesse d'allongement de la face éclairée (flanc droit) reste constante à $v_d = \text{0,05 mm}\cdot\text{h}^{-1}$, tandis que celle de la face ombragée (flanc gauche) passe transitoirement à $v_g = \text{0,25 mm}\cdot\text{h}^{-1}$.
   * Calculer la différence de longueur $\Delta L(t)$ entre les deux flancs au bout de $t = \text{4 heures}$.
   * En assimilant la zone d'élongation à un arc de cercle, estimer grossièrement le rayon de courbure $R(t)$ de l'hypocotyle à cet instant, en considérant un diamètre constant de l'hypocotyle $d = \text{0,5 mm}$.

### Partie II : Flux d'auxine et dissymétrie biochimique

3. **Modélisation du transport :** La concentration intracellulaire d'auxine libre dans les cellules de la zone d'élongation est régie par un transport polarisé intercellulaire. On note $J$ le flux net d'auxine dirigé du flanc éclairé vers le flanc ombragé. La vitesse de migration latérale est estimée à $v_{lat} = \text{0,1 mm}\cdot\text{h}^{-1}$. 
   * Sachant que la distance séparant les centres des files cellulaires des deux flancs est approximativement égale au diamètre $d$ de l'hypocotyle, calculer le temps caractéristique $\tau$ de redistribution latérale de l'auxine. Confronter ce temps caractéristique à la durée d'apparition des premiers signes macroscopiques de courbure ($\approx \text{30 minutes}$ à $\text{1 heure}$).

4. **Action moléculaire sur la paroi :** L'accumulation d'auxine sur le flanc ombragé stimule l'expression de protéines de type *SAUR* et l'activation de pompes à protons $\text{H}^+$-ATPases membranaires. 
   * Expliquer par une chaîne causale rigoureuse comment l'acidification de la paroi pecto-cellulosique (hypothèse de la croissance acide) conduit à une augmentation de l'extensibilité pariétale. Quel est le rôle enzymatique clé impliqué dans ce processus ?

### Partie III : Analyse critique et limites du modèle

5. **Limites du modèle biomécanique :** Le modèle undimensional de la "croissance différentielle" suppose que les cellules réagissent de manière homogène. Citer deux limites physiologiques ou biophysiques majeures qui font que ce modèle est une simplification excessive de la réalité observée chez les eudicotylédones.

---

## Pistes de réflexion

* **Partie I :** Penser à exprimer la longueur de chaque flanc en fonction du temps $L(t) = L_{init} + v \times t$. Pour le calcul géométrique de l'arc de cercle, relier la différence de longueur $\Delta L$ à l'angle de courbure $\theta$ et au diamètre $d$.
* **Partie II :** Pour le calcul du temps caractéristique, utilisez la relation cinématique fondamentale liant distance, vitesse et temps ($t = \frac{d}{v}$). Pour la biochimie de la paroi, pensez aux protéines capables de rompre les liaisons hydrométriques ou covalentes entre xyloglucanes et microfibrilles de cellulose sous l'effet du $\text{pH}$ acide.
* **Partie III :** Réfléchissez aux gradients de sensibilité tissulaire, à l'effet de rétrocontrôle de la lumière sur l'inhibition de la croissance (phototropisme négatif ou co-action), ou encore à la plasticité radiale.

---

## Corrigé pas à pas

### Partie I : Analyse cinétique et ordres de grandeur de la courbure

1. **Rappel et analyse critique :**
   * *Rappel historique :* Boysen-Jensen démontre que le signal phototropique est de nature transmissible (en interérant une lame de mica ou de gélatine sous l'apex sectionné). Paal montre que la diffusion asymétrique de cette substance (le futur AIA) dans l'obscurité induit une courbure unilatérale.
   * *Limite conceptuelle :* Ces expériences réduisent la régulation à un flux univoque et purement quantitatif d'une unique hormone (modèle "tout AIA"). Aujourd'hui, on sait que le phototropisme implique des interactions complexes avec d'autres signaux (inhibiteurs de croissance, strigolactones, interférence des phototropines photorécepteurs *phot1* et *phot2* qui modulent localement la sensibilité des cellules, et non pas seulement la quantité d'auxine).

2. **Cinétique macroscopique :**
   * Longueur initiale de la zone d'élongation : $L_0 = \text{4 mm}$.
   * Au bout de $t = \text{4 h}$, la longueur du flanc éclairé (droit) est : 
     $$L_d(4) = L_0 + v_d \times t = \text{4 mm} + (0,05 \times 4) = \text{4,2 mm}$$
   * La longueur du flanc ombragé (gauche) est :
     $$L_g(4) = L_0 + v_g \times t = \text{4 mm} + (0,25 \times 4) = \text{5,0 mm}$$
   * La différence de longueur est :
     $$\Delta L(4) = L_g(4) - L_d(4) = 5,0 - 4,2 = \text{0,8 mm}$$
   * *Estimation du rayon de courbure $R$ :* 
     Considérons l'arc de cercle de longueur initiale $L_0$ et de rayon moyen $R$. Le flanc externe (ombragé) a pour longueur $L_g = (R + d)\theta$ et le flanc interne $L_d = R\theta$, où $\theta$ est l'angle de courbure en radians.
     La différence $\Delta L = L_g - L_d = d \times \theta = \text{0,8 mm}$.
     Avec $d = \text{0,5 mm}$, on a $\theta = \frac{\Delta L}{d} = \frac{0,8}{0,5} = \text{1,6 rad}$ (soit environ $91,6^\circ$).
     Par ailleurs, la longueur moyenne de la zone active est $L_0 \approx R \times \theta$ (en première approximation) ou $L_d = R\theta \implies R = \frac{L_d}{\theta} = \frac{4,2}{1,6} \approx \text{2,6 mm}$.
     *Ordre de grandeur réaliste :* Un rayon de courbure de l'ordre de quelques millimètres est tout à fait cohérent avec les observations expérimentales sur les hypocotyles d'*Arabidopsis*.

---

### Partie II : Flux d'auxine et dissymétrie biochimique

3. **Modélisation du transport :**
   * Le diamètre de l'hypocotyle est $d = \text{0,5 mm} = \text{500 }\mu\text{m}$.
   * La vitesse de migration latérale est $v_{lat} = \text{0,1 mm}\cdot\text{h}^{-1} = \text{100 }\mu\text{m}\cdot\text{h}^{-1}$.
   * Le temps caractéristique de diffusion/transport latéral est :
     $$\tau = \frac{d}{v_{lat}} = \frac{0,5\text{ mm}}{0,1\text{ mm}\cdot\text{h}^{-1}} = \text{5 heures}$$
   * *Confrontation :* Le calcul théorique donne $\tau = \text{5 h}$, alors que les courbures macroscopiques s'observent dès $\text{30 min}$ à $\text{1 h}$. 
   * *Analyse critique :* Cette divergence apparente met en évidence que le transport de l'auxine n'est pas une simple diffusion passive ou un transport lent, mais qu'il repose sur un **transport actif polarisé hautement efficace** (via les transporteurs de la famille PIN, notamment PIN3 et PIN7 localisés dynamiquement de façon latérale sous l'effet de l'activation des phototropines). La vitesse effective du flux est donc bien supérieure à la valeur $v_{lat}$ basale simpliste utilisée dans cet ordre de grandeur naïf.

4. **Action moléculaire sur la paroi :**
   * *Chaîne causale :*
     1. Accumulation d'auxine sur le flanc ombragé $\rightarrow$ Activation transcriptionnelle et post-traductionnelle.
     2. Stimulation des pompes $\text{H}^+$-ATPases membranaires par phosphorylation.
     3. Efflux de protons $\text{H}^$ du cytoplasme vers l'apoplaste $\rightarrow$ **Chute du pH apoplasique** (le $\text{pH}$ passe de $\approx 6,0$ à $\approx 4,5 - 5,0$).
     4. Activation optimale d'enzymes pariétales acidophiles, en particulier les **expansines** (qui rompent les liaisons hydrogène entre microfibrilles de cellulose et xyloglucanes sans détruire les polymères).
     5. Relâchement de la tension de paroi (augmentation de l'extensibilité plastique $m$).
     6. Appel d'eau osmotique consécutif à la baisse du potentiel hydrique intracellulaire $\rightarrow$ Purgation de la turgescence exercée sous forme d'élongation cellulaire unidirectionnelle (limitée par les contraintes mécaniques de la paroi).

---

### Partie III : Analyse critique et limites du modèle

5. **Limites du modèle biomécanique :**
   * **1. L'hétérogénéité tissulaire radiale :** L'hypocotyle n'est pas un cylindre homogène de cellules identiques. Il est composé d'une assise épidermique, d'un cortex et de tissus vasculaires. L'épiderme possède un rôle "mécanique" prépondérant (le concept de la "peau sous tension" de Lockhart/Kutschera), agissant comme un corset rigide limitant l'élongation des tissus internes. Le modèle simple ignore cette anisotropie tissulaire.
   * **2. L'effet de co-action de la lumière (Transduction croisée) :** L'éclairement unilatéral n'induit pas seulement un gradient d'auxine ; il provoque aussi localement des réponses inhibitrices de croissance indépendantes de l'auxine (notamment via la phototropine *phot2* ou les cryptochromes à fortes intensités), invalidant la relation linéaire simple entre concentration en AIA et vitesse d'élongation.