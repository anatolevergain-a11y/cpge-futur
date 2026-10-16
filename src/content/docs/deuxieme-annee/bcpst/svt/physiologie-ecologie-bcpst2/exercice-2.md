---
title: 'Exercice 2 : Cycles biogéochimiques et Hardy-Weinberg'
description: 'Problème d entraînement type concours.'
---

# Problème guidé corrigé : Couplage entre cycles biogéochimiques et dynamique évolutive en milieu insulaire

**Examinateur (CPGE - BCPST) :** Ce problème aborde un classique des concours agronomiques et vétérinaires : l'interconnexion entre les grands cycles biogeochimiques (ici, le cycle du carbone et de l'azote) et la micro-évolution (génétique des populations). Il est attendu une rigueur absolue dans la manipulation des équations, l'utilisation correcte de la nomenclature scientifique et des unités, ainsi qu'une capacité à relier des échelles allant de la molécule à l'écosystème.

---

## Préambule et données biologiques

On s'intéresse à un archipel volcanique isolé où l'écosystème terrestre repose en grande partie sur l'activité d'une graminée pérenne, *Festuca insularis*. Cette espèce végétale est le siège d'une interaction étroite avec des bactéries diazotrophes endophytes fixatrices d'azote. 

Les données biochimiques et génétiques recueillies sur une population de référence de *Festuca insularis* sont les suivantes :
*   La productivité primaire brute (PPB) de l'écosystème est évaluée à $1500 \, \text{g} \, \text{C} \, \text{m}^{-2} \, \text{an}^{-1}$.
*   Le rapport molaire C/N moyen de la biomasse de *Festuca insularis* est de $30$.
*   Le gène nucléaire $Adh-1$ (codant pour l'alcool déshydrogénase, impliquée dans la tolérance à l'anoxie racinaire lors des périodes de submersion) présente deux allèles $A_1$ et $A_2$ dans cette population.

---

## Partie I : Cycles biogéochimiques et flux d'éléments

### Question 1
Définir la notion de diazotrophie. En déduire le rôle qualitatif et quantitatif des bactéries endophytes associées à *Festuca insularis* dans le cycle biogéochimique de l'azote au sein de cet écosystème oligotrophe.

**Corrigé guidé :**
*   *Définition :* La diazotrophie est la capacité pour certains organismes procaryotes (bactéries et archées) de réduire le diazote atmosphérique ($\text{N}_2$) en ammoniac ($\text{NH}_3$), bioassimilable par les organismes vivants, grâce à l'enzyme nitrogénase.
*   *Rôle qualitatif :* Elles permettent de sranchir la limite d'indisponibilité de l'azote sous forme gazeuse inerte dans la lithosphère/pédosphère locale.
*   *Rôle quantitatif :* À partir de la PPB, calculons le flux d'azote nécessaire à la primary production. 
    Le rapport C/N molaire est de $30$. 
    Pour une incorporation de $1500 \, \text{g} \, \text{C} \, \text{m}^{-2} \, \text{an}^{-1}$, la masse molaire du carbone étant $M(\text{C}) = 12 \, \text{g} \, \text{mol}^{-1}$ et celle de l'azote $M(\text{N}) = 14 \, \text{g} \, \text{mol}^{-1}$ :
    $$\text{Flux de C} = \frac{1500}{12} = 125 \, \text{mol} \, \text{C} \, \text{m}^{-2} \, \text{an}^{-1}$$
    Le flux d'azote requis est donc :
    $$\text{Flux de N} = \frac{125}{30} \approx 4,17 \, \text{mol} \, \text{N} \, \text{m}^{-2} \, \text{an}^{-1}$$
    Soit en masse :
    $$4,17 \times 14 \approx 58,4 \, \text{g} \, \text{N} \, \text{m}^{-2} \, \text{an}^{-1}$$
    Les bactéries diazotrophes fournissent ainsi l'équivalent de près de $58,4 \, \text{g}$ d'azote par mètre carré et par an, contournant la carence édaphique initiale.

---

## Partie II : Génétique des populations et équilibre de Hardy-Weinberg

### Question 2
Dans un échantillon de $N = 500$ pieds de *Festuca insularis* prélevés dans la zone humide de l'archipel, le dénombrement des génotypes au locus $Adh-1$ donne les résultats suivants :
*   Génotype $A_1A_1$ : $125$ individus
*   Génotype $A_1A_2$ : $250$ individus
*   Génotype $A_2A_2$ : $125$ individus

Déterminer les fréquences alléliques de $A_1$ et $A_2$ dans cette population. La population est-elle à l'équilibre de Hardy-Weinberg pour ce locus ? Détailler le test statistique rigoureux.

**Corrigé guidé :**
1.  **Calcul des fréquences alléliques :**
    Soit $p$ la fréquence de l'allèle $A_1$ et $q$ la fréquence de l'allèle $A_2$.
    $$p = \frac{2 \times n(A_1A_1) + n(A_1A_2)}{2N} = \frac{2(125) + 250}{2(500)} = \frac{500}{1000} = 0,5$$
    $$q = 1 - p = 0,5$$

2.  **Calcul des effectifs théoriques sous l'hypothèse de Hardy-Weinberg :**
    *   Effectif théorique de $A_1A_1$ : $N \times p^2 = 500 \times (0,5)^2 = 125$
    *   Effectif théorique de $A_1A_2$ : $N \times 2pq = 500 \times 2 \times 0,5 \times 0,5 = 250$
    *   Effectif théorique de $A_2A_2$ : $N \times q^2 = 500 \times (0,5)^2 = 125$

3.  **Test du $\chi^2$ (Chi-deux) d'ajustement :**
    Comparons les effectifs observés ($O_i$) et théoriques ($T_i$) :
    $$\chi^2 = \sum_{\text{i}} \frac{(O_i - T_i)^2}{T_i}$$
    $$\chi^2 = \frac{(125-125)^2}{125} + \frac{(250-250)^2}{250} + \frac{(125-125)^2}{125} = 0$$
    *   Degré de liberté ($ddl$) = (Nombre de classes génotypiques) - (Nombre d'allèles indépendants) = $3 - 2 = 1$.
    *   La valeur critique du $\chi^2$ pour $ddl = 1$ au seuil $\alpha = 0,05$ est de $3,84$.
    *   Puisque $\chi^2_{\text{calculé}} (0) < \chi^2_{\text{critique}} (3,84)$, on ne rejette pas l'hypothèse nulle $H_0$ d'équilibre de Hardy-Weinberg. La population est à l'équilibre pour ce locus.

---

## Partie III : Synthèse et analyse critique

### Question 3
Suite à une modification climatique (sécheresse prolongée couplée à une baisse de la fixation d'azote par les endophytes), on observe 5 générations plus tard une modification des effectifs génotypiques dans la zone humide : $A_1A_1 : 50$, $A_1A_2 : 200$, $A_2A_2 : 250$ (pour un effectif total constant $N = 500$). 

Analyser cette évolution, calculer les nouvelles fréquences alléliques et proposer un mécanisme éco-évolutif explicatif reliant le cycle biogéochimique de l'azote et la sélection naturelle.

**Corrigé guidé :**
1.  **Nouvelles fréquences alléliques :**
    $$p' = \frac{2(50) + 200}{1000} = \frac{300}{1000} = 0,3$$
    $$q' = 1 - p' = 0,7$$
    La fréquence de l'allèle $A_1$ a chuté de $0,5$ à $0,3$, au profit de l'allèle $A_2$ ($0,5$ à $0,7$).

2.  **Vérification de l'équilibre :**
    Effectifs théoriques attendus :
    *   $A_1A_1 : 500 \times (0,3)^2 = 45$
    *   $A_1A_2 : 500 \times 2(0,3)(0,7) = 210$
    *   $A_2A_2 : 500 \times (0,7)^2 = 245$
    *   $\chi^2 = \frac{(50-45)^2}{45} + \frac{(200-210)^2}{210} + \frac{(250-245)^2}{245} = \frac{25}{45} + \frac{100}{210} + \frac{25}{245} \approx 0,556 + 0,476 + 0,102 = 1,134$.
    $\chi^2 < 3,84$ : la population reste à l'équilibre de Hardy-Weinberg à cette génération, mais sa structure allélique a profondément varié.

3.  **Analyse critique et couplage éco-évolutif :**
    *   *Sélection naturelle directionnelle :* La modification des fréquences alléliques sans perte de l'équilibre interne suggère une **sélection inégale** des génotypes liée aux contraintes environnementales. 
    *   *Couplage biogéochimie / évolution :* La baisse de fixation de l'azote par les diazotrophes (liée à la sécheresse) induit une limitation azotée de l'écosystème. L'allocation de l'azote dans les enzymes photosynthétiques (RuBisCO) et respiratoires devient critique. 
    *   L'allèle $A_2$ (ou le fond génétique qui lui est associé par déséquilibre de liaison) confère manifestement une meilleure fitness (valeur sélective) dans ces conditions de stress biogéochimique (moindre disponibilité en N, modification du métabolisme carboné), entraînant une sélection positive de $A_2$ au détriment de $A_1$.

---
**Avis de l'examinateur :** Ce type de sujet permet d'évaluer la maîtrise des outils quantitatifs (calculs de flux, statistiques du $\chi^2$) et la compréhension systémique indispensable en BCPST, montrant qu'un changement biogéochimique global ou local (cycle N/C) est un moteur puissant de la dynamique évolutive des populations (sélection naturelle).