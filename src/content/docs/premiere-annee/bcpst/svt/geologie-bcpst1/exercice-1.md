---
title: 'Exercice 1 : Magmatisme et tectonique'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ CORRIGÉ : Magmatisme et tectonique en contexte de subduction
Auteur: Examinateur de concours - BCPST*

---

## Introduction et consignes de l'examinateur

Ce problème aborde les relations fondamentales entre le magmatisme, la thermique et la dynamique des zones de subduction, un grand classique des concours BCPST. L'accent est mis sur la rigueur du raisonnement géologique, l'exploitation raisonnée des données quantitatives et l'expression écrite. 

*Rappel pour la rédaction :* Les applications numériques doivent comporter explicitement la formule littérale, le remplacement des valeurs avec leurs unités (entre crochets ou parenthèses avec $\text{...}$) et le résultat encadré avec l'unité correcte.

---

## Partie I : Étude thermique de la lithosphère plongeante et fusion partielle

La zone de subduction des Tonga-Kermadec est le siège d'un magmatisme intense. On cherche à comprendre l'origine de la fusion partielle dans le manteau sus-jacent (le "prisme" ou manteau d'avant-arc/arc).

### Document 1 : Profils de température et solidus hydraté du péridotite

On considère un modèle simplifié où la plaque subductée plonge à vitesse constante $v = 10\text{ cm}\cdot\text{an}^{-1}$. Le manteau sus-jacent est soumis à des transferts thermiques complexes.

#### Question 1
Définir la notion de **solidus** et de **liquidus** pour une roche mantellique (la péridotite). Expliquer qualitativement l'effet de l'eau sur le solidus de la péridotite.

> **Corrigé et attentes de l'examinateur :**
> * **Solidus :** Courbe (ou surface) dans l'espace $(P, T)$ représentant la limite en-deçà de laquelle la roche est entièrement à l'état solide. Dès que la température dépasse le solidus à une pression donnée, la fusion partielle commence.
> * **Liquidus :** Courbe au-delà de laquelle la roche est entièrement fondue.
> * **Effet de l'eau :** L'eau joue le rôle de fondant (flux de volatiles). En s'insérant dans les réseaux cristallins sous forme de groupements hydroxyle ($\text{OH}^-$), elle fragilise les liaisons silicate ($\text{Si-O}$). Cela abaisse significativement la température du solidus (de l'ordre de $200\text{ }\text{°C}$ à $400\text{ }\text{°C}$ selon la pression) par rapport à une péridotite anhydre.

---

#### Question 2
La plaque plongeante subit un métamorphisme haute pression - basse température (HP-BT). Écrire la réaction majeure de déshydratation de la serpentinite (minéral hydraté de la péridotite mantellique océanique) se produisant lors du franchissement du faciès schistes bleus vers le faciès éclogite à environ $1,5\text{ GPa}$.

> **Corrigé et attentes de l'examinateur :**
> La réaction classique de déshydratation de la serpentinite (antigorite) est :
> $$\text{Antigorite} + \text{Brucite} \longrightarrow \text{Olivine} + \text{Pyroxène} + \text{H}_2\text{O (fluide)}$$
> *Attente du jury :* Savoir replacer cette libération de fluide (flux aqueux) comme le moteur direct de la fusion par abaissement du solidus du manteau sus-jacent.

---

## Partie II : Géochimie des magmas d'arc et traçage de la subduction

Les laves émises au niveau des arcs volcaniques insulaires présentent des caractéristiques géochimiques particulières, notamment un enrichissement en éléments dits "mobiles" (ou LILE : *Large Ion Lithophile Elements* comme $\text{Rb}, \text{Sr}, \text{Ba}, \text{K}$) par rapport aux éléments "immobiles" (ou HFSE : *High Field Strength Elements* comme $\text{Nb}, \text{Ta}, \text{Zr}$).

### Document 2 : Diagramme multi-éléments normalisé au manteau primitif (Spidergramme)

On mesure les concentrations en ETR (Éléments Terres Rares) et autres éléments trace dans un basalte d'arc comparé à un basalte de dorsale (MORB).

#### Question 3
À l'aide de vos connaissances, expliquer l'origine de l'anomalie en éléments LILE et HFSE observée dans les magmas d'arc. Pourquoi qualifie-t-on ces magmas de marqueurs géodynamiques de la subduction ?

> **Corrigé et attentes de l'examinateur :**
> * **Anomalie LILE / HFSE :** Les éléments LILE sont hydrosolubles (mobiles). Lors de la déshydratation de la plaque plongeante (Partie I), le fluide aqueux extrait sélectivement ces éléments de la dalle et les transporte dans le coin de manteau sus-jacent. Ce manteau est ainsi métasomatisé (enrichi en LILE). 
> * À l'inverse, les HFSE (comme $\text{Nb}$ et $\text{Ta}$) restent bloqués dans les minéraux résiduels de la plaque plongeante (ex: rutile $\text{TiO}_2$), d'où une sous-abondance relative dans le magma d'arc (anomalie négative en $\text{Nb-Ta}$).
> * **Marqueur géodynamique :** Cette signature géochimique spécifique (pics de LILE et creux de HFSE) est la signature indélébile de l'intervention d'un fluide d'origine crustale/océanique déshydraté dans la source mantellique du magma.

---

## Partie III : Quantification de la vitesse de subduction et flux thermique

On s'intéresse maintenant aux bilans cinématiques et thermiques. 

Soit une plaque océanique de densité moyenne $\rho = 3,3\text{ g}\cdot\text{cm}^{-3}$ qui plonge avec un pendage constant $\alpha = 45\text{ }\text{°C}$. La composante verticale de la vitesse de subduction est notée $v_z$.

#### Question 4
Sachant que la vitesse de convergence mesurée par GPS est $v = 8\text{ cm}\cdot\text{an}^{-1}$, calculer la vitesse verticale d'enfoncement $v_z$ de la plaque. Exprimer le résultat en $\text{km}\cdot\text{Ma}^{-1}$ (kilomètres par million d'années).

> **Corrigé et attentes de l'examinateur :**
> * **Relation trigonométrique :** 
>   $$v_z = v \cdot \sin(\alpha)$$
> * **Application numérique :**
>   $$v_z = 8\text{ cm}\cdot\text{an}^{-1} \times \sin(45\text{ }\text{°C}) = 8 \times \frac{\sqrt{2}}{2} \approx 5,66\text{ cm}\cdot\text{an}^{-1}$$
> * **Conversion d'unités :**
>   Sachant que $1\text{ cm} = 10^{-5}\text{ km}$ et $1\text{ an} = 10^{-6}\text{ Ma}$, alors $1\text{ cm}\cdot\text{an}^{-1} = 10\text{ km}\cdot\text{Ma}^{-1}$.
>   $$v_z = 5,66 \times 10\text{ km}\cdot\text{Ma}^{-1} = \mathbf{56,6\text{ km}\cdot\text{Ma}^{-1}}$$

---

## Analyse critique des résultats et synthèse

#### Question 5
**Synthèse et esprit critique :** Le modèle thermique simple de la plaque plongeante suppose une plaque rigide qui se réchauffe très lentement par conduction thermique. En réalité, les données tomographiques et thermiques montrent que le coin du manteau sus-jacent est le siège d'un mouvement convective (mouvement de type "corner flow"). 
Discutez brièvement des limites de ce modèle purement conductif face à la réalité géodynamique.

> **Corrigé et attentes de l'examinateur :**
> * **Limites du modèle conductif pur :** Si la lithosphère plongeante ne faisait que se réchauffer par conduction, elle maintiendrait une anomalie thermique négative très prononcée (froide) sur une large zone, et la fusion partielle du manteau serait difficile à initier car le manteau serait refroidi par la dalle froide.
> * **Apport de la convection (Corner flow) :** Le mouvement de descente de la plaque entraîne par cisaillement le manteau asthénosphérique sus-jacent. Ce mouvement induit une remontée de matériel asthénosphérique chaud (plus chaud que prévu par la simple conduction) depuis les profondeurs. 
> * **Conclusion :** C'est la combinaison synergique de trois facteurs qui permet le magmatisme des zones de subduction : 
>   1. L'abaissement du solidus par l'apport d'eau (flux de déshydratation).
>   2. L'apport thermique par la convection induite (*corner flow*).
>   3. La nature mantellique fertile de la source (péridotite).