---
title: 'Cours : Stéréochimie et spectroscopie'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Stéréochimie et Spectroscopie (PCSI)
Professeur: ** CPGE - PCSI  
**Matière :** Physique-Chimie  

---

## I. Stéréochimie moléculaire et chiralité

### 1. Définitions fondamentales
* **Stéréoisomères :** Molécules de même formule semi-développée mais dont les atomes sont disposés différemment dans l'espace.
* **Chiralité :** Une entité chimique est dite **chirale** si elle n'est superposable à son image miroir. Par extension, elle ne possède aucun plan, centre ou axe alterné de symétrie.
* **Carbone asymétrique ($C^*$) :** Atome de carbone tétraédrique lié à quatre groupes d'atomes (ou ligands) tous différents.

> **Définition (Énantiomères) :** Deux stéréoisomères qui sont l'image miroir l'un de l'autre sans être superposables sont appelés des **énantiomères**. Leurs propriétés physiques et chimiques sont identiques, sauf leur interaction avec la lumière polarisée et avec d'autres molécules chirales (reconnaissance stéréospécifique).

> **Définition (Diastéréoisomères) :** Stéréoisomères qui ne sont pas énantiomères. Cela inclut les composés cis/trans (ou $Z/E$) et les molécules possédant plusieurs carbones asymétriques sans être images miroirs l'une de l'autre. Leurs propriétés physiques (température d'ébullition, solubilité) et chimiques sont différentes.

---

### 2. Configuration absolue : Règles de Cahn, Ingold et Prelog (CIP)
Pour chaque carbone asymétrique, on attribue un ordre de priorité (1 à 4) aux quatre groupements liés, selon le numéro atomique $Z$ décroissant des atomes liés directement au carbone. En cas d'égalité, on examine les atomes suivants par cheminement de proche en proche.

* **Règle d'orientation :** On place le groupement de plus faible priorité (le n° 4) **vers l'arrière** (en pointillés).
* **Détermination :** On observe les groupements 1, 2 et 3.
  * Si l'ordre 1 $\rightarrow$ 2 $\rightarrow$ 3 est dans le sens des aiguilles d'une montre : configuration **$R$** (*Rectus*).
  * Si l'ordre 1 $\rightarrow$ 2 $\rightarrow$ 3 est dans le sens trigonométrique (anti-horaire) : configuration **$S$** (*Sinister*).

---

### 3. Activité optique
Une substance chirale est **optiquement active** : elle fait tourner le plan de polarisation d'une lumière polarisée rectilignement d'un angle $\alpha$ proportionnel à la longueur du trajet optique $l$ et à la concentration $C$ (ou à la masse volumique pour un liquide pur).

$$\alpha = [\alpha]_\lambda^T \cdot l \cdot C$$

* **Énantiomères :** Possèdent des pouvoirs rotatoires spécifiques $[\alpha]$ opposés (valeur absolue égale, signes contraires : dextrogyre $(+)$ ou lévogyre $(-)$).
* **Mélange racémique :** Mélange équimolaire de deux énantiomères. Son pouvoir rotatoire net est nul (compensation externe).

> **Théorème (Propriétés des diastéréoisomères) :** Les diastéréoisomères n'ont pas les mêmes propriétés physico-chimiques, ce qui permet leur séparation par des méthodes usuelles (distillation, chromatographie, cristallisation fractionnée), contrairement aux énantiomères qui nécessitent une *résolution* (utilisation d'un agent chiral).

---

## II. Introduction à la spectroscopie

La spectroscopie étudie l'interaction entre la matière et les rayonnements électromagnétiques. Elle permet l'élucidation structurale des molécules organiques.

### 1. Aspects énergétiques généraux
L'interaction matière-lumière met en jeu des transitions entre niveaux d'énergie quantifiés de la molécule :

$$\Delta E = h\nu = \frac{hc}{\lambda}$$

* Avec $h$ la constante de Planck, $c$ la célérité de la lumière dans le vide, $\nu$ la fréquence et $\lambda$ la longueur d'onde.

---

## III. Spectroscopie Infrarouge (IR)

### 1. Principe
Les radiations infrarouges ($4000\text{ cm}^{-1}$ à $400\text{ cm}^{-1}$) provoquent des **vibrations** des liaisons chimiques (élongations, déformations). Chaque liaison absorbe à des fréquences caractéristiques exprimées en nombre d'onde $\sigma$ (en $\text{cm}^{-1}$) :

$$\sigma = \frac{1}{\lambda} = \frac{\nu}{c}$$

---

### 2. Bandes d'absorption caractéristiques (Tableau de référence)

| Liaison / Groupement | Nombre d'onde $\sigma$ ($\text{cm}^{-1}$) | Intensité et forme |
| :--- | :--- | :--- |
| $\text{O-H}$ (alcool libre) | $3600 - 3650$ | Fine et forte |
| $\text{O-H}$ (alcool lié / liaison H) | $3200 - 3400$ | Large et forte |
| $\text{O-H}$ (acide carboxylique) | $2500 - 3200$ | Très large ("chapeau de gendarme") |
| $\text{N-H}$ (amine, amide) | $3300 - 3500$ | Moyenne (un ou deux pics) |
| $\text{C-H}$ (alcane, aliphatique) | $2850 - 2960$ | Forte |
| $\text{C}\equiv\text{C}$ ou $\text{C}\equiv\text{N}$ | $2100 - 2260$ | Fine, variable |
| $\text{C=O}$ (carbonyle) | $1650 - 1750$ | Fine et très forte |
| $\text{C=C}$ (alcène, aromatique)| $1450 - 1650$ | Moyenne |

---

## IV. Spectroscopie de Résonance Magnétique Nucléaire du proton ($^1\text{H-RMN}$)

### 1. Principe
Le noyau d'hydrogène ($^1\text{H}$, spin $I = 1/2$) placé dans un champ magnétostatique extérieur $B_0$ lève sa dégénérescence énergétique en deux états de spin ($\alpha$ et $\beta$). L'absorption d'ondes radiofréquences permet de basculer d'un état à l'autre.

---

### 2. Grandeurs caractéristiques d'un spectre RMN
* **Le déplacement chimique ($\delta$) :** Exprimé en ppm (partie par million). Il dépend de l'environnement électronique du proton (effets inductifs et mésomères).
  * Un proton **déblindé** (proche d'un groupement attracteur comme $-\text{O}, -\text{NO}_2, -\text{Cl}$) a un $\delta$ **élevé** (vers la gauche du spectre).
  * Un proton **blindé** (proche de groupements alkyles donneurs) a un $\delta$ **faible** (vers la droite).
* **L'intégration (ou aire du pic) :** Proportionnelle au nombre de protons équivalents responsables du signal.
* **La multiplicité (Structure fine) :** Due au couplage spin-spin entre protons voisins non équivalents. 
  * **Règle des $n+1$ :** Si un groupe de protons équivalents a $n$ protons voisins équivalents (portés par les carbones adjacents), son signal est éclaté en un multiplet de $n+1$ pics.

---

### 3. Exemples de multiplicités usuelles
* $n = 0 \rightarrow$ Singulet ($s$)
* $n = 1 \rightarrow$ Duplet ($d$)
* $n = 2 \rightarrow$ Triplet ($t$)
* $n = 3 \rightarrow$ Quadruplet ($q$)

> **Méthode : Exploitation conjointe IR et RMN pour l'élucidation structurale**
> 1. **Analyse de la formule brute :** Calculer le *degré d'insaturation* (ou Indice d'Insaturation $I$).
>    $$I = C + 1 - \frac{H}{2} + \frac{N}{2}$$
>    *(où $C, H, N$ représentent le nombre d'atomes respectifs, les halogènes comptant pour un Hydrogène).*
> 2. **Analyse IR :** Identifier la présence de fonctions majeures ($\text{C=O}$, $\text{O-H}$, $\text{N-H}$).
> 3. **Analyse RMN :** 
>    * Compter le nombre de signaux (environnements chimiques différents).
>    * Utiliser les intégrations pour connaître la stœchiométrie des protons.
>    * Utiliser les déplacements chimiques $\delta$ pour identifier le voisinage chimique.
>    * Utiliser la multiplicité ($n+1$) pour déterminer le nombre de voisins immédiats.
> 4. **Assemblage :** Proposer une structure cohérente validant l'ensemble des données.

---

## V. Pièges et erreurs classiques à éviter en PCSI

> ⚠️ **Piège 1 :** Confondre énantiomères et diastéréoisomères lors de l'application des règles CIP. Pour être énantiomères, **tous** les centres chiraux d'une molécule doivent être inversés ($R \rightarrow S$ et $S \rightarrow R$). Si un seul change et pas l'autre, ce sont des diastéréoisomères.

> ⚠️ **Piège 2 :** Oublier que les plans ou centres de symétrie annulent la chiralité d'une molécule, même si elle possède des carbones asymétriques (cas des composés *méso*).

> ⚠️ **Piège 3 en RMN :** Le couplage spin-spin ne s'observe qu'entre protons non équivalents et généralement séparés de 3 liaisons maximum ($H-C-C-H$, couplage dite $^3J$). Les protons équivalents ne se coupent pas entre eux (pas d'éclatement visible pour un groupe $-\text{CH}_3$ isolé ou un signal de protons équivalents d'un cycle benzénique symétrique).

> ⚠️ **Piège 4 en IR :** Ne pas confondre une bande $\text{O-H}$ d'alcool (fine si libre, large si liée) avec la bande $\text{O-H}$ d'acide carboxylique qui est extrêmement large et englobe la zone des $\text{C-H}$ aliphatiques (vers $3000\text{ cm}^{-1}$).