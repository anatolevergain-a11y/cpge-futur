---
title: 'Exercice 2 : Endocrinologie'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Régulation endocrinienne de l'homéostasie volémique et pressions artérielles chez les Mammifères

## Énoncé

Le maintien de la volémie (volume sanguin total) et de la pression artérielle systémique est un défi physiologique permanent pour les Mammifères terrestres, soumis aux variations d'hydratation et d'apport sodé. Chez ces organismes, le système rénine-angiotensine-aldostérone (SRAA) et la vasopressine (hormone antidiurétique, ADH) jouent un rôle synergique majeur. 

On s'intéresse ici à la réponse adaptative d'un Mammifère standard (masse $m = 70\text{ kg}$, volémie $V \approx 5\text{ L}$) soumis à une hémorragie aiguë modérée entraînant une perte de $15\text{ \%}$ du volume sanguin total.

---

## Questions

### Partie I : Perception de l'alarme et mise en route du SRAA
1. **(Rstitution & Analyse)** Identifier les structures anatomiques rénales qui perçoivent la baisse de la pression artérielle et du débit de filtration glomérulaire consécutive à l'hémorragie. Préciser la nature cellulaire du signal initial sécrété.
2. **(Démarche quantitative)** La rénine est une enzyme protéolytique. Elle catalyse la conversion duangiotensinogène hépatique (circulant à une concentration quasi-constante $C_0 = 1{,}0\times 10^{-6}\text{ mol}\cdot\text{L}^{-1}$) en angiotensine I. En considérant que la cinétique enzymatique initiale suit une loi de type Michaelis-Menten avec une constante de Michaelis $K_m = 1{,}2\times 10^{-5}\text{ mol}\cdot\text{L}^{-1}$, et qu'en régime basal la vitesse initiale de production est $v_0 = 5{,}0\times 10^{-11}\text{ mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}$, calculer l'activité maximale $v_{max}$ de la rénine plasmatique dans ces conditions basales.

### Partie II : Cascade effectrice et cibles tissulaires
3. **(Mécanisme)** Décrire brièvement la maturation de l'angiotensine I en angiotensine II, puis lister les trois grands effets physiologiques systémiques de l'angiotensine II contribuant à la restauration de la pression artérielle.
4. **(Endocrinologie cellulaire)** L'aldostérone est une hormone stéroïdienne sécrétée par la zone glomérulée du cortex surrénal. Expliquer son mode d'action moléculaire au niveau des cellules principales du tube collecteur néphrétique, en précisant le devenir des récepteurs intracellulaires et l'expression des gènes cibles.

### Partie III : Analyse critique et limites du modèle
5. **(Esprit critique)** L'axe SRAA-ADH opère une boucle de rétroaction positive sur la volémie mais négative sur le stimulus initial (la pression). Cependant, une activation chronique ou excessive de ce système conduit à des pathologies (hypertension artérielle maligne, insuffisance cardiaque congestive). Discutez deux limites majeures ou effets pervers de ce modèle régulateur à long terme.

---

## Pistes de réflexion

- **P1 (Partie I)** : Pensez au complexe juxtaglomérulaire (cellules myoépithéliales de l'artériolaire afférente) qui fait office de barorécepteur local, combiné à la macula densa sensible au $\text{NaCl}$.
- **P2 (Partie I)** : Appliquez l'équation de Michaelis-Menten : $v_0 = \frac{v_{max} [S]}{K_m + [S]}$, avec $[S] = C_0$.
- **P3 & P4 (Partie II)** : L'angiotensine II est transformée par l'ECA (Enzyme de Conversion de l'Angiotensine) principalement au niveau pulmonaire. Pour l'aldostérone, pensez à la diffusion transmembranaire des stéroïdes, la fixation sur un récepteur nucléaire (MR), la transcription de canaux sodiques épithéliaux ($\text{ENaC}$) et de pompes $\text{Na}^+/\text{K}^+$-ATPases.
- **P5 (Partie III)** : Considérez les notions de résistance vasculaire périphérique accrue augmentant le travail cardiaque, ainsi que les effets de fuite potassique rénale induits par l'aldostérone.

---

## Corrigé pas à pas

### Partie I_1. **Perception de l'hémorragie :** 
   La baisse de pression artérielle systémique est détectée par :
   - Les barorécepteurs à haute pression (sinus carotidien, crosse aortique) qui augmentent le tonus orthosympathique rénal.
   - Les barorécepteurs intrarénaux situés dans les parois des artérioles afférentes (cellules juxtaglomérulées), qui perçoivent directement la baisse de pression de perfusion.
   - La *macula densa* (tubule contourné distal) qui détecte la baisse du débit et de la concentration en $\text{Na}^+$ et $\text{Cl}^$ filtrés.
   Ces signaux provoquent l'exocytose et la libération de **rénine** par les cellules juxtaglomérulées dans la circulation sanguine.

2. **Calcul de $v_{max}$ :**
   L'équation de Michaelis-Menten s'écrit :
   $$v_0 = \frac{v_{max} \cdot C_0}{K_m + C_0}$$
   On isole $v_{max}$ :
   $$v_{max} = v_0 \cdot \frac{K_m + C_0}{C_0} = v_0 \cdot \left(1 + \frac{K_m}{C_0}\right)$$
   A.N. : 
   - $v_0 = 5{,}0\times 10^{-11}\text{ mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}$
   - $C_0 = 1{,}0\times 10^{-6}\text{ mol}\cdot\text{L}^{-1}$
   - $K_m = 1{,}2\times 10^{-5}\text{ mol}\cdot\text{L}^{-1}$
   
   $$\frac{K_m}{C_0} = \frac{1{,}2\times 10^{-5}}{1{,}0\times 10^{-6}} = 12$$
   $$v_{max} = 5{,}0\times 10^{-11} \times (1 + 12) = 5{,}0\times 10^{-11} \times 13 = 6{,}5\times 10^{-10}\text{ mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}$$

### Partie II
3. **Maturation et effets de l'angiotensine II :**
   - *Maturation* : L'angiotensine I (déca-peptide inactif) est clivée par l'Enzyme de Conversion de l'Angiotensine (ECA), une métalloprotéase membranaire endothéliale (notamment pulmonaire), pour donner l'angiotensine II (octapeptide actif).
   - *Effets systémiques* : 
     1. **Vasoconstriction artériolaire puissante** directe (via les récepteurs $AT_1$), augmentant les résistances vasculaires périphériques (RVP) et donc la pression artérielle.
     2. **Stimulation de la dipsie** (centre hypothalamique de la soif) pour restaurer la volémie par apports hydriques.
     3. **Sécrétion d'aldostérone** par le cortex surrénal et libération de vasopressine (ADH) neurohypophysaire, favorisant la réabsorption rénale d'eau et de sodium.

4. **Mécanisme d'action moléculaire de l'aldostérone :**
   Étant une hormone lipophile (stéroïde dérivé du cholestérol), l'aldostérone traverse librement la membrane plasmique des cellules principales du tube collecteur. 
   - Elle se lie à son récepteur intracellulaire spécifique (récepteur minéralocorticoïde, MR).
   - Le complexe hormone-récepteur subit une __chimiorestructuration__ (dissociation des protéines chaperonnes) et migre dans le noyau.
   - Il se fixe sur des séquences spécifiques de l'ADN (HRE : *Hormone Response Elements*), activant la transcription de gènes cibles.
   - Les protéines néo-synthétisées comprennent :
     - Des canaux sodiques épithéliaux ($\text{ENaC}$) insérés dans la membrane apicale (luminale).
     - Des pompes $\text{Na}^+/\text{K}^+$-ATPases insérées dans la membrane basolatérale.
     - Des enzymes du métabolisme mitochondrial fournissant l'ATP nécessaire.
   - *Bilan fonctionnel* : Réabsorption accrue de $\text{Na}^$ (et par conséquent d'eau par osmose) et excrétion conjointe de $\text{K}^+$ et $\text{H}^+$.

### Partie III
5. **Analyse critique et limites du modèle régulateur :**
   Si le SRAA est vital en cas d'hémorragie aiguë, sa suractivation ou sa chronicité présente de graves limites physiopathologiques :
   - **Charge mécanique cardiaque accrue (post-charge) :** La vasoconstriction puissante induite par l'angiotensine II, couplée à l'augmentation de la volémie par l'aldostérone et l'ADH, élève drastiquement la pression artérielle. À long terme, cela contraint le ventricule gauche à fournir un travail myocardique excessif, menant à l'hypertrophie ventriculaire, à l'épuisement du myocarde et à l'insuffisance cardiaque congestive.
   - **Perturbations ioniques délétères (fuite potassique) :** L'action de l'aldostérone couplant la réabsorption du sodium à l'excrétion d'ions potassium ($\text{K}^+$) et protons ($\text{H}^+$), une stimulation chronique provoque une hypokaliémie profonde. Or, le maintien de la kaliémie extracellulaire est critique pour le maintien du potentiel de repos des cellules excitables (musculaires et cardiaques) ; l'hypokaliémie induit des arythmies cardiaques potentiellement fatales.