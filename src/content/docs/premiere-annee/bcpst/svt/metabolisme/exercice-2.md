---
title: 'Exercice 2 : Photosynthèse et chloroplastes'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Rendement énergétique et régulation de la phase photosynthétique chez les chloroplastes

**Matière :** Sciences de la Vie et de la Terre (SVT)  
**Filière :** BCPST  
**Thème :** Métabolisme énergétique, Chloroplaste, Photosynthèse  

---

## CONTEXTE SCIENTIFIQUE

Le chloroplaste est l'organite clé de la conversion énergétique chez les végétaux autotrophes. La phase photochimique (réactions claires) convertit l'énergie lumineuse en énergie chimique sous forme d'ATP et de NADPH, $\text{H}^+$, tandis que la phase non photochimique (cycle de Calvin) utilise ces cofacteurs pour la réduction du $\text{CO}_2$ en trioses-phosphates. 

L'objectif de ce problème est d'évaluer, à partir de données biochimiques et bioénergétiques, le rendement théorique et pratique de la conversion photonique, puis d'analyser les mécanismes de régulation face aux variations de l'environnement lumineux.

---

## ÉNONCÉ ET DONNÉES

### Données numériques et constantes biophysiques :
* Nombre d'Avogadro ($N_A$) : $6{,}02 \times 10^{23} \text{ mol}^{-1}$
* Énergie d'un photon de lumière rouge (longueur d'onde $\lambda = 680 \text{ nm}$) : 
  $$E_{\text{photon}} = \frac{h \cdot c}{\lambda} \approx 2{,}92 \times 10^{-19} \text{ J}$$
  *(avec $h = 6{,}626 \times 10^{-34} \text{ J}\cdot\text{s}$ et $c = 3 \times 10^8 \text{ m}\cdot\text{s}^{-1}$)*
* Énergie libre standard de Gibbs pour la réduction d'une mole de $\text{CO}_2$ en glucose (ramenée à l'équivalent hexose) : 
  $$\Delta G^{\circ\prime} \approx +2870 \text{ kJ}\cdot\text{mol}^{-1}$$
* Synthèse d'une mole d'ATP à partir d'ADP et de $\text{P}_i$ : 
  $$\Delta G \approx +30{,}5 \text{ kJ}\cdot\text{mol}^{-1}$$
* Oxydation d'une mole de NADPH en $\text{NADP}^+$ : 
  $$\Delta G \approx -220 \text{ kJ}\cdot\text{mol}^{-1}$$

---

## QUESTIONS

### Partie I : Bilan stœchiométrique et énergétique de la photosynthèse globale

1. **Rappel du bilan :** Écrire l'équation bilan globale de la photosynthèse oxygénique en partant du dioxyde de carbone et de l'eau pour aboutir au glucose ($\text{C}_6\text{H}_{12}\text{O}_6$).
2. **Besoin en cofacteurs :** D'après le stœchiométrie du cycle de Calvin couplé à la régénération des accepteurs, la fixation nette de $6 \text{ moles de }\text{CO}_2$ nécessite $18 \text{ moles d'ATP}$ et $12 \text{ moles de NADPH, }\text{H}^+$. 
   En considérant le schéma Z de la photosynthèse (coopération entre le Photosystème II et le Photosystème I) et l'hypothèse classique selon laquelle 4 électrons traversent la chaîne pour produire 1 $\text{O}_2$ et 2 NADPH, combien de photons (à 680 nm) sont théoriquement nécessaires pour achever la réduction d'une mole de $\text{CO}_2$ ? En déduire le coût énergétique photonique global pour 1 mole de glucose.
3. **Rendement énergétique théorique :** Calculer l'énergie totale (en Joules) apportée par les photons nécessaires pour synthétiser 1 mole de glucose. En déduire le rendement énergétique théorique de la photosynthèse ($\eta = \frac{\text{Énergie chimique stockée}}{\text{Énergie lumineuse absorbée}}$).
4. **Analyse critique du modèle :** Le rendement calculé à la question 3 est-il réaliste en conditions agronomiques naturelles ? Citer au moins trois facteurs physiologiques ou environnementaux majeurs qui limitent drastiquement ce rendement in vivo.

### Partie II : Étude fonctionnelle des membranes thylakoïdiennes et couplage chimio-osmotique

On s'intéresse à l'expérience historique de Jagendorf (1966) qui a validé la théorie chimio-osmotique de Mitchell dans les chloroplastes. Des thylakoïdes isolés sont placés dans un milieu à $\text{pH} = 4$ à l'obscurité, puis rapidement transférés dans un milieu à $\text{pH} = 8$ contenant de l'ADP et du $\text{P}_i$.

5. **Gradient de protons :** Calculer la différence de concentration en protons ($\Delta[\text{H}^+]$) entre l'intérieur (lumen) et l'extérieur (stroma) juste après le transfert.
6. **Synthèse d'ATP :** On observe une production d'ATP in vitro dans l'obscurité lors de cette expérience. Justifier ce résultat au regard du fonctionnement de l'ATP synthase thylakoïdienne. Quel est le rôle de la lumière dans des conditions physiologiques normales par rapport à cette expérience ?

---

## PISTES DE RÉSOLUTION

* **Partie I, Q2 :** Suivre le trajet des électrons de l'eau au $\text{NADP}^+$ via PSII et PSI. Un électron nécessite 2 photons (1 par photosystème). Attention au rapport $\text{H}^+/\text{ATP}$ généré par le gradient transmembranaire.
* **Partie I, Q3 :** Calculer l'énergie d'une mole de photons (Énergie d'un photon $\times N_A \times \text{nombre de photons}$).
* **Partie II, Q5 :** Utiliser la définition du pH ($pH = -\log_{10}[\text{H}^+]$). Attention au sens du gradient (lumen acide, stroma basique).

---

## CORRIGÉ PAS À PAS

### Partie I : Bilan stœchiométrique et énergétique

1. **Équation bilan globale :**
   $$6 \text{ CO}_2 + 12 \text{ H}_2\text{O} \xrightarrow{\text{Lumière, Chlorophylle}} \text{C}_6\text{H}_{12}\text{O}_6 + 6 \text{ O}_2 + 6 \text{ H}_2\text{O}$$

2. **Coût en photons :**
   * Pour réduire 1 mole de $\text{CO}_2$, le cycle de Calvin consomme 3 ATP et 2 NADPH, $\text{H}^+$. Pour 1 mole de glucose ($6 \text{ CO}_2$), il faut $18 \text{ ATP}$ et $12 \text{ NADPH}$.
   * Selon le schéma Z, le transfert de 4 électrons de l'eau au $\text{NADP}^+$ requiert 8 photons (4 pour PSII, 4 pour PSI) et génère 2 NADPH. Pour 12 NADPH, il faut donc $12 \times \frac{8}{2} = 48 \text{ photons}$.
   * *Ajustement énergétique lié au gradient de protons :* Les 48 photons génèrent également un flux de protons permettant de synthétiser de l'ATP via l'ATP synthase (sachant qu'environ 4 $\text{H}^+$ traversent l'ATP synthase pour 1 ATP, et que le transport non-cyclique et cyclique ajustent le ratio ATP/NADPH). Le modèle standard retient généralement un minimum de **8 à 10 photons par $\text{CO}_2$ réduit**, soit **48 à 60 photons par mole de glucose**.

3. **Rendement énergétique théorique :**
   * Énergie d'un mole de photons à 680 nm ($E_{\text{moles de photons}}$) :
     $$E_{\text{mol}} = E_{\text{photon}} \cdot N_A = 2{,}92 \times 10^{-19} \text{ J} \times 6{,}02 \times 10^{23} \text{ mol}^{-1} \approx 175{,}8 \text{ kJ}\cdot\text{mol}^{-1}$$
   * En prenant l'hypothèse standard de 8 photons par $\text{CO}_2$, soit $48 \text{ photons}$ pour 1 mole de glucose :
     $$\text{Énergie lumineuse totale} = 48 \times 175{,}8 \text{ kJ} \approx 8438 \text{ kJ}\cdot\text{mol}^{-1}$$
   * Énergie chimique stockée : $\Delta G^{\circ\prime} = +2870 \text{ kJ}\cdot\text{mol}^{-1}$.
   * Rendement théorique maximal ($\eta$) :
     $$\eta = \frac{2870}{8438} \approx 0{,}34 \text{ soit } 34\%$$

4. **Analyse critique et limites du modèle :**
   * Un rendement de $34\%$ est une limite thermodynamique *maximale* in vitro. In vivo, le rendement réel en champ (agronomique) chute entre $1\%$ et $5\%$.
   * **Limites et facteurs explicatifs :**
     1. **Photoinhibition et dissipation thermique :** Une part de l'énergie lumineuse absorbée excède les capacités de la chaîne photosynthétique et est dissipée sous forme de chaleur (extinction non photochimique ou NPQ).
     2. **Phyto-respiration :** L'enzyme Rubisco possède une activité oxygénase en plus de son activité carboxylase, consommant de l'énergie (ATP, pouvoir réducteur) sans fixer de $\text{CO}_2$ net.
     3. **Absorption incomplète :** Le couvert végétal ne capte pas $100\%$ des radiations incidentes, et une partie du spectre lumineux (vert, infrarouge lointain) est peu ou mal absorbée par les chlorophylles $a$ et $b$.

---

### Partie II : Étude fonctionnelle (Expérience de Jagendorf)

5. **Calcul du gradient de protons :**
   * Dans le milieu externe (stroma simulé, $\text{pH}_1 = 8$) : 
     $$[\text{H}^+]_{\text{ext}} = 10^{-\text{pH}_1} = 10^{-8} \text{ mol}\cdot\text{L}^{-1}$$
   * Dans le lumen (milieu interne, $\text{pH}_2 = 4$) : 
     $$[\text{H}^+_2] = 10^{-\text{pH}_2} = 10^{-4} \text{ mol}\cdot\text{L}^{-1}$$
   * La différence de concentration est de $\Delta[\text{H}^+] = 10^{-4} - 10^{-8} \approx 10^{-4} \text{ mol}\cdot\text{L}^{-1}$. Le lumen est donc 10 000 fois plus concentré en protons que le stroma.

6. **Interprétation et rôle de la lumière :**
   * Le transfert brutal des thylakoïdes du $\text{pH } 4$ au $\text{pH } 8$ crée artificiellement un **gradient de concentration transmembranaire de protons** (lumen très acide, stroma basique). 
   * Ce gradient force les protons à traverser l'ATP synthase de la lumière vers le stroma. L'énergie libérée par ce flux spontané est couplée à la phosphorylation de l'ADP en ATP. Cette expérience a prouvé de manière élégante que le gradient de protons seul (force proton-motrice) est suffisant pour synthétiser de l'ATP, sans qu'un flux d'électrons ou de lumière ne soit requis.
   * **Rôle de la lumière in vivo :** Dans des conditions physiologiques normales, la lumière n'agit pas directement sur l'ATP synthase. Elle alimente la chaîne de transport d'électrons (oxydation de $\text{H}_2\text{O}$ par le PSII, transfert via les transporteurs plastoquinone, cytochrome $b_6f$, plastocyanine, PSI) dont l'activité induit le pompage actif de protons du stroma vers le lumen, créant et entretenant ce gradient chimio-osmotique de façon continue.