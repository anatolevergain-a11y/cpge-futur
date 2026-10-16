---
title: 'Exercice 2 : Éliminations (E1/E2)'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude cinétique et régiosélectivité des réactions d'élimination en série halogénée

Ce problème propose d'étudier les mécanismes réactionnels d'élimination (compétition entre les mécanismes $\text{E1}$ et $\text{E2}$) lors de la réaction de dérivés halogénés avec des bases fortes. Une analyse critique des approximations cinétiques et des effets isotopiques sera demandée.

---

## Énoncé

On s'intéresse à la réaction d'élimination du 2-bromo-2-méthylpropane (composé **A**) et du 2-bromobutane (composé **B**) en présence d'ions hydroxyde $\text{HO}^-$ dans un mélange solvant eau/éthanol à $25\text{ }^\circ\text{C}$.

Données à $25\text{ }^\circ\text{C}$ :
* Constantes diélectriques et solvatation : le milieu est polaire protique.
* On note $k_{\text{E2}}$ et $k_{\text{E1}}$ les constantes de vitesse apparente respectives des mécanismes.

---

## Questions

### Partie I : Étude du composé **A** (2-bromo-2-méthylpropane)

1. Écrire la formule semi-développée du composé **A**. Préciser sa classe (primaire, secondaire, tertiaire).
2. Proposer un mécanisme réactionnel étape par étape pour la formation du produit majoritaire lors de l'action de $\text{HO}^-$ sur **A**. Nommer ce mécanisme ($\text{E1}$ ou $\text{E2}$). Justifier à l'aide de la stabilité de l'intermédiaire réactionnel.
3. Établir la loi de vitesse associée à ce mécanisme en admettant que la première étape est cinétiquement limitante. Quel est l'ordre global de la réaction ?

### Partie II : Étude du composé **B** (2-bromobutane) et régiosélectivité

4. Écrire la formule semi-développée du composé **B**. Préciser ses stéréoisomères s'il y a lieu.
5. L'action d'une base forte et encombrée (comme le tert-butylate de potassium, $t-\text{BuOK}$) sur le 2-bromobutane conduit préférentiellement à l'alcène le moins substitué (produit de Hofmann). En revanche, avec l'ion éthanoate $\text{CH}_3\text{CO}_2^-$, on observe l'alcène le plus substitué (produit de Zaitsev). 
   * a) Rappeler la définition du produit de Zaitsev et expliquer thermodynamiquement sa stabilité accrue.
   * b) Expliquer l'inversion de régiosélectivité observée avec le $t-\text{BuOK}$ en invoquant des arguments stériques et stéréoisélectroniques (exigence orbitale de la réaction $\text{E2}$).

### Partie III : Analyse critique et effet isotopique cinétique (EIC)

6. Pour confirmer le mécanisme $\text{E2}$ du 2-bromobutane, on réalise l'expérience avec du 2-bromobutane deuteré en position 3 ($\text{CH}_3-\text{CH(Br)}-\text{CD(H)}-\text{CH}_3$). On mesure un effet isotopique cinétique $k_{\text{H}}/k_{\text{D}} \approx 6{,}5$ à $25\text{ }^\circ\text{C}$.
   * a) Définir ce qu'est un effet isotopique cinétique primaire.
   * b) Justifier la valeur élevée de ce rapport en considérant l'état de transition de l'étape cinétiquement limitante d'une réaction $\text{E2}$. Quelle liaison est rompue au cours de cette étape ?
7. **Esprit concours (Analyse critique) :** Dans le cas du composé **A**, l'utilisation d'une base très forte et concentrée permet parfois de basculer partiellement d'un profil $\text{E1}$ vers un profil $\text{E2}$. Discuter des limites du modèle purement dichotomique ($\text{E1}$ vs $\text{E2}$), en mentionnant l'existence d'un continuum de mécanismes (caractère ion-paire, transition concertée avec ionisation partielle).

---

## Pistes et indications

* **Q2 :** Penser à la formation d'un carbocation plan et stable par effet inductif donneur des groupements méthyles environnants.
* **Q5 :** Pour $\text{E2}$, la conformation anti-périplanaire est requise. L'accessibilité stérique de la base dicte l'arrachement du proton le plus accessible (cinétique) vs le plus stable thermodynamiquement.
* **Q6 :** L'énergie de liaison $\text{C-D}$ est plus élevée que celle de la liaison $\text{C-H}$ en raison de la masse réduite de l'oscillateur.

---

## Corrigé pas à pas

### Partie I_1. Le composé **A** est le 2-bromo-2-méthylpropane : $\text{(CH}_3)_3\text{C-Br}$. C'est un dérivé halogéné **tertiaire**.
2. Le mécanisme impliqué est de type **$\text{E1}$** (Élimination monomoléculaire) :
   * *Étape 1 (lente et limitante)* : Départ spontané de l'halogénure avec formation d'un carbocation tertiaire plan très stable :
     $$\text{(CH}_3)_3\text{C-Br} \rightarrow \text{(CH}_3)_3\text{C}^+ + \text{Br}^-$$
   * *Étape 2 (rapide)* : Capture d'un proton par la base $\text{HO}^-$ pour former le 2-méthylpropène :
     $$\text{(CH}_3)_3\text{C}^+ + \text{HO}^- \rightarrow \text{(CH}_3)_2\text{C=CH}_2 + \text{H}_2\text{O}$$
3. L'étape limitante étant la première, la vitesse s'écrit :
   $$v = k_1 [\text{(CH}_3)_3\text{C-Br}]$$
   La réaction est d'**ordre global 1** (ordre 1 par rapport au dérivé halogéné, ordre 0 par rapport à la base).

### Partie II

4. Le 2-bromobutane a pour formule $\text{CH}_3-\text{CH(Br)}-\text{CH}_2-\text{CH}_3$. Il possède un carbone asymétrique ($C^*$), il existe donc sous forme d'une paire d'énantiomères $(R)/(S)$.
5. 
   * a) Le **produit de Zaitsev** correspond à l'alcène le plus substitué (le plus stable thermodynamiquement, ici le but-2-ène, préférentiellement de configuration $E$ par encombrement stérique minimal). Cette stabilité s'explique par l'hyperconjugaison et l'effet stérique favorable des groupements alkyles sur la double liaison.
   * b) Le $t-\text{BuOK}$ est une base volumineuse. L'état de transition menant au produit de Hofmann (arrachement du proton le plus externe, sur le carbone $\text{CH}_3$ le moins encombré) souffre de moins de répulsions stériques que celui menant à Zaitsev. De plus, la géométrie $\text{E2}$ exige une disposition **anti-périplanaire** ($\text{H}$ et $\text{Br}$ à $180^\circ$); les protons portés par le $\text{CH}_3$ terminal sont statistiquement plus nombreux et plus accessibles.

### Partie III

6. 
   * a) L'effet isotopique cinétique (EIC) primaire mesure le rapport des vitesses d'une réaction lorsque l'hydrogène impliqué dans la rupture de liaison est remplacé par son isotope lourd, le deutérium ($k_{\text{H}}/k_{\text{D}}$).
   * b) Un rapport de $6{,}5$ est typique d'un effet primaire important, ce qui prouve que **la liaison $\text{C-H}$ (ou $\text{C-D}$) est rompue au cours de l'étape cinétiquement limitante**. C'est précisément le cas dans le mécanisme $\text{E2}$ concerté.
7. **Analyse critique :** Le modèle scolaire sépare nettement $\text{E1}$ et $\text{E2}$. En réalité, il existe un **continuum de mécanismes** (souvent décrit par Sneen). Selon la nature du solvant et la force de la base, l'intermédiaire peut présenter un caractère d'ion-paire plus ou moins dissocié ($\text{E1cB}$ ion-pair, $\text{E2}$ avec transfert de proton asymétrique). Aucune rupture de liaison n'est strictement synchrone : l'état de transition présente des degrés variables de rupture de liaison $\text{C-Br}$ et de formation de la liaison $\pi$.