---
title: 'Optimisation au concours V2 : SVT BCPST'
description: 'Analyse approfondie des nouvelles questions classiques aux concours, rédactions types et exigences des rapporteurs.'
sidebar:
  badge:
    text: 'Méthode Concours V2'
    variant: 'caution'
---

## 🎯 Objectif & Analyse des tendances des Concours

En tant que président de jury et concepteur de sujets pour les concours Agro-Véto et G2E (filière BCPST), je constate chaque année le même écueil chez les candidats : l'approximation dans la rigueur quantitative et méthodologique. Les écrits de SVT ne se résument plus à de la restitution de cours littéraire. Les rapporteurs attendent une rigueur biochimique, statistique et logique irréprochable.

Ce guide "OPTIMISATION AU CONCOURS - QUESTIONS RECURRENTES V2" a pour but de décortiquer trois grands classiques incontournables des écrits. Pour chaque question, la méthode canonique exigée lors de la correction (passage en commission) est détaillée, suivie d'une rédaction modèle et des pièges éliminatoires relevés par les jurys.

---

## 📌 Question Type 1 : Bilan stœchiométrique et rendement énergétique comparé de la respiration et des fermentations cellulaires

### 💡 Méthode canonique & Étapes de rédaction

1. **Établir l'équation bilan globale** de la voie métabolique étudiée pour $1\text{ mole}$ de glucose ($\text{C}_6\text{H}_{12}\text{O}_6$), en tenant compte des transferts d'électrons ($\text{NADH}, \text{H}^+$ / $\text{FADH}_2$) et des phosphorylations au niveau du substrat ou oxydatives.
2. **Quantifier l'énergie libérée** sous forme de moles d'ATP synthétisées par mole de glucose consommé, en explicitant le couplage chimio-osmotique pour la chaîne respiratoire (rapports $\text{P/O}$).
3. **Calculer le rendement énergétique thermodynamique** $\eta$ défini par le rapport entre l'énergie récupérée sous forme de liaisons phosphate ($\Delta G^\circ'$ de synthèse de l'ATP, environ $30,5\text{ kJ}\cdot\text{mol}^{-1}$) et l'enthalpie libre standard de la réaction d'oxydation du glucose ($\Delta G^\circ' \approx -2870\text{ kJ}\cdot\text{mol}^{-1}$).
4. **Comparer explicitement** les rendements pour mettre en évidence la supériorité quantitative de la respiration aérobie face aux fermentations (lactique ou alcoolique).

---

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé :** *Établir le bilan stœchiométrique de la respiration cellulaire aérobie à partir d'une mole de glucose, puis calculer son rendement énergétique global. Conclure par une comparaison avec la fermentation lactique.*

**Rédaction modèle :**

1. **Bilan stœchiométrique de la respiration aérobie :**
   L'oxydation complète d'une mole de glucose ($\text{C}_6\text{H}_{12}\text{O}_6$) via la glycolyse, le cycle de Krebs et la chaîne respiratoire mitochondriale s'écrit selon le bilan global :
   $$\text{C}_6\text{H}_{12}\text{O}_6 + 6\,\text{O}_2 + 38\,\text{ADP} + 38\,\text{P}_i \longrightarrow 6\,\text{CO}_2 + 6\,\text{H}_2\text{O} + 38\,\text{ATP}$$
   *(Note : un bilan de $36\text{ ATP}$ est également accepté selon le système de navette des équivalents réduits, mais $38\text{ ATP}$ reste la valeur théorique maximale canonique).*

2. **Calcul du rendement énergétique :**
   - Énergie stockée sous forme d'ATP : $38\text{ moles d'ATP} \times 30{,}5\text{ kJ}\cdot\text{mol}^{-1} = 1159\text{ kJ}\cdot\text{mol}^{-1}$.
   - Variation d'enthalpie libre standard d'oxydation du glucose : $\Delta G^\circ' = -2870\text{ kJ}\cdot\text{mol}^{-1}$.
   - Le rendement énergétique $\eta$ s'établit donc à :
     $$\eta = \frac{1159}{2870} \approx 0{,}40 \quad \text{soit } 40\,\%.$$

3. **Comparaison avec la fermentation lactique :**
   La fermentation lactique produit seulement $2\text{ moles d'ATP}$ par mole de glucose selon l'équation :
   $$\text{C}_6\text{H}_{12}\text{O}_6 + 2\,\text{ADP} + 2\,\text{P}_i \longrightarrow 2\,\text{C}_3\text{H}_6\text{O}_3 \text{ (acide lactique)}$$
   Son rendement énergétique est de :
   $$\eta_{\text{lactique}} = \frac{2 \times 30{,}5}{210} \approx 0{,}29 \quad \text{soit } 29\,\%$$
   *(avec $\Delta G^\circ'$ de la fermentation $\approx -210\text{ kJ}\cdot\text{mol}^{-1}$)*.
Conclusion: ** La respiration est quantitativement bien plus efficace (facteur $19$ en moles d'ATP) car l'oxygène joue le rôle d'accepteur final d'électrons au potentiel redox très élevé, permettant une chute maximale d'énergie libre récupérée par phosphorylation oxydative.

---

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury

* **Oublier les unités** ou confondre $\Delta G$ (enthalpie libre) et variations d'enthalpie globale ($\Delta H$).
* **Ne pas justifier le nombre d'ATP** : balancer "38 ATP" sans détailler glycolyse (2), cycle de Krebs (2) et phosphorylations oxydatives (34) conduit à une perte systématique de points.
* **Erreur de stœchiométrie sur l'oxygène** : oublier que la réduction d'une molécule de $\text{O}_2$ nécessite $4\text{ e}^-$ et $4\text{ H}^+$, soit $6\text{ moles de }\text{O}_2$ pour $1\text{ mole de glucose}$.

---

## 📌 Question Type 2 : Reconstruction phylogénétique par la méthode de parsimonie à partir d'une matrice de caractères

### 💡 Méthode canonique & Étapes de rédaction

1. **Analyser la matrice Taxons / Caractères** fournie dans l'énoncé en distinguant clairement les caractères ancestraux (plésiomorphies) des caractères dérivés (apomorphies).
2. **Polariser les caractères** en utilisant un groupe externe (outgroup) si celui-ci est précisé, afin de déterminer le sens de l'évolution (état 0 = ancestral, état 1 = dérivé).
3. **Tester les topologies d'arbres possibles** (pour $N$ taxons, énumérer les arbres non enracinés/enracinés pertinents) et dénombrer le nombre total de changements évolutifs (pas ou *steps*) requis pour chaque arbre.
4. **Sélectionner l'arbre le plus parsimonieux**, c'est-à-dire celui qui minimise le nombre total de mutations/changements, conformément au principe du rascsoir d'Ockham.
5. **Tracer l'arbre phylogénétique final** en y positionnant clairement les synapomorphies (caractères dérivés partagés) sur les branches correspondantes.

---

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé :** *À partir de la matrice de présence (1) / absence (0) de 4 caractères chez un groupe externe (Out) et 3 taxons (A, B, C), déterminer l'arbre phylogénétique le plus parsimonieux.*
Matrice: *
- Out : 0 0 0 0
- A : 1 1 0 0
- B : 1 1 1 0
- C : 1 0 1 1

**Rédaction modèle :**

1. **Polarisation des caractères :**
   Le groupe externe (*Out*) présente l'état $(0,0,0,0)$ pour tous les caractères. Cet état est considéré comme plésiomorphe (ancestral). Tout passage à l'état $1$ constitue une apomorphie.
   - Caractère 1 : Présent chez A, B, C $\rightarrow$ Synapomorphie du clade (A, B, C).
   - Caractère 2 : Présent chez A et B $\rightarrow$ Synapomorphie exclusive du sous-clade (A, B).
   - Caractère 3 : Présent chez B et C $\rightarrow$ Homoplasie (convergence ou réversion) ou caractère informatif à tester.
   - Caractère 4 : Présent uniquement chez C $\rightarrow$ Autapomorphie de C.

2. **Évaluation de la parsimonie des topologies :**
   Testons l'arbre ((A, B), C) :
   - Caractère 1 : 1 mutation à la base du nœud (A, B, C).
   - Caractère 2 : 1 mutation à la base du nœud (A, B).
   - Caractère 3 : Présent chez B et C. Si l'arbre est ((A, B), C), placer le caractère 3 demande 2 mutations (ou une convergence).
   - Testons la longueur totale de l'arbre 1 [((A,B),C)] vs arbre 2 [((A,C),B)] :
     - Pour l'arbre ((A, B), C) : Le nombre total de pas minimal est de $4$ mutations si l'on cartographie rigoureusement chaque caractère.

3. **Représentation de l'arbre optimal :**
   L'arbre retenu montre que le taxon A et le taxon B sont plus proches phylogénétiquement l'un de l'autre qu'ils ne le sont de C, reliés par la synapomorphie du caractère 2. C est le groupe frère de ce clade (A, B).

---

### ⚠️ Les pièges majeurs soulignés dans le rapport de jury

* **Ne pas utiliser le groupe externe** : polariser un arbre sans outgroup invalide toute la démarche de cladistique rigoureuse.
* **Confondre symétrie et topologie** : des rotations autour des nœuds d'un arbre génèrent la même information phylogénétique ; les correcteurs pénalisent les candidats qui croient qu'un changement de position graphique modifie la parenté.
* **Oublier de compter les homoplasies** (convergences ou réversions) dans le calcul du score de parsimonie.

---

## 📌 Question Type 3 : Analyse quantitative de coupes histologiques et mise en relation structure-fonction

### 💡 Méthode canonique & Étapes de rédaction

1. **Identifier l'organe et le tissu** observés en justifiant par des critères cytologiques précis (ex: bordure en brosse, polarité cellulaire, différenciations membranaires).
2. **Procéder à une description morphométrique rigoureuse** : estimer ou calculer des rapports de surface, des densités cellulaires, ou des épaisseurs de tuniques à partir de l'échelle graphique fournie.
3. **Mettre en relation les adaptations structurales quantifiées** (ex: augmentation de la surface d'échange par des microvillosités, replis basolatéraux, richesse en mitochondries) avec les fonctions physiologiques majeures (ex: réabsorption active, sécrétion, barrière de filtration).
4. **Conclure sur l'optimisation biologique** (principe d'optimisation fonctionnelle : "la structure sert la fonction").

---

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé :** *L'analyse d'une coupe histologique d'un segment du néphron (tubule contourné proximal) au microscope électronique révèle une surface apicale pourvue d'une bordure en brosse et un abondant labyrinthe basal. Exploitez ces données pour expliquer le rôle de ce tissu dans la physiologie rénale.*

**Rédaction modèle :**

1. **Identification tissulaire :**
   La coupe met en évidence un épithélium simple prismatique (cubique haut) caractéristique du tubule contourné proximal (TCP) du néphron. Les cellules présentent une polarité fonctionnelle et structurale marquée.

2. **Analyse quantitative et structurale :**
   - **Pôle apical :** Présence d'une bordure en brosse constituée d'une densification de microvillosités. Quantitativement, cette spécialisation multiplie la surface d'échange membranaire par un facteur estimé entre $20$ et $30$.
   - **Pôle basal et latéral :** On observe de nombreux invaginations de la membrane plasmique basale (labyrinthe basal) abritant une densité très élevée de mitochondries allongées orientées perpendiculairement à la lame basale.

3. **Mise en relation structure-fonction :**
   - La multiplication de la surface apicale par les microvillosités facilite l'expression massive de transporteurs membranaires dédiés à la réabsorption active et passive (co-transporteurs $\text{Na}^+/\text{glucose}$, $\text{Na}^+/\text{acides aminés}$).
   - Le labyrinthe basal gorgé de mitochondries fournit l'ATP nécessaire au fonctionnement intensif des pompes $\text{Na}^+/\text{K}^+$-ATPase situées sur la membrane basolatérale, maintenant le gradient de sodium indispensable aux réabsorptions proximales.
Conclusion: ** La morphologie quantitative du TCP (maximisation des surfaces membranaires couplée à un équipement énergétique mitochondrial pléthorique) est parfaitement corrélée à sa fonction physiologique majeure : la réabsorption ininterrompue d'environ $65\,\%$ de l'eau, du sodium et de la totalité des nutriments organiques du filtrat glomérulaire.

---

### ⚠️ Les pièges majeurs soulignés dans le rapport de jury

* **Description purement descriptive sans quantification** : se contenter de dire "il y a des villosités" sans évoquer l'agrandissement de la surface d'échange par rapport au volume cellulaire.
* **Oublier le couplage métabolique** : dissocier l'observation architecturale (ex: replis basaux) de la machinerie biochimique sous-jacente (mitochondries, transporteurs actifs).
* **Mauvaise lecture des échelles graphiques** sur les documents iconographiques proposés en annexe des sujets de concours.