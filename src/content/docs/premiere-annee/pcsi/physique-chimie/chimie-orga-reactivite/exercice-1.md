---
title: 'Exercice 1 : Substitutions nucléophiles (SN1/SN2)'
description: 'Problème d entraînement type concours.'
---

# Problème Guidé : Étude cinétique et thermodynamique comparée de substitutions nucléophiles en série halogénée

## Introduction et cadre du problème

Ce problème s'intéresse à l'analyse fine de réactions de substitution nucléophile sur des dérivés halogénés aliphatiques. L'objectif est de mettre en évidence la compétition entre les mécanismes concerté ($\text{SN}2$) et étagé ($\text{SN}1$), en évaluant l'influence de la structure du substrat, de la nature du groupe partant, du nucléophile et du solvant. Une attention particulière sera portée sur les ordres de grandeur cinétiques et les limites des modèles simplifiés face à la réalité expérimentale.

---

## Énoncé

On considère l'hydrolyse (réaction avec l'eau agissant comme nucléophile et solvant, solvolyse) ou la cyanation de dérivés bromés aliphatiques notés $(\text{A})$, $(\text{B})$ et $(\text{C})$ :
*   $(\text{A})$ : 2-bromo-2-méthylpropane (bromure de tert-butyle)
*   $(\text{B})$ : 1-bromobutane
*   $(\text{C})$ : 2-bromobutane (mélange racémique)

Les conditions expérimentales sont ajustées pour suivre la cinétique de ces réactions à $T = 298\text{ K}$.

---

## Questions

### Partie I : Analyse structurale et mécanismes réactionnels
1. Écrire les formules semi-développées des composés $(\text{A})$, $(\text{B})$ et $(\text{C})$. Préciser la classe de chaque carbone porteur de l'atome de brome.
2. Attribuer à chaque substrat $(\text{A})$ et $(\text{B})$ un profil réactionnel privilégié entre $\text{SN}1$ et $\text{SN}2$. Justifier rigoureusement en invoquant les effets électroniques et stériques.

### Partie II : Étude cinétique et exploitation des données
3. Pour la solvolyse du composé $(\text{A})$ dans un mélange eau/acétone, la vitesse initiale de réaction obéit à la loi empirique : $v = k[(\text{A})]$. Quel est l'ordre global de cette réaction ? En déduire le mécanisme moléculaire prépondérant.
4. Écrire l'étape cinétiquement déterminante (ecd) de cette transformation et schématiser le profil énergétique qualitatif (coordonnées réactionnelles) en y faisant figurer l'intermédiaire réactionnel et les états de transition.
5. Pour le composé $(\text{B})$ mis en présence d'ions cyanure $\text{CN}^-$ dans le diméthylsulfoxyde (DMSO), la loi de vitesse devient $v = k'[\text{B}][\text{CN}^-]$. Préciser le mécanisme, dessiner l'état de transition en représentant la géométrie tridimensionnelle (stéréochimie) et préciser le devenir de la configuration absolue si le carbone était chiral.

### Partie III : Analyse critique et limites du modèle
6. Le composé $(\text{C})$ (chiral) subit une solvolyse dans l'eau pure. Expérimentalement, on observe un mélange final contenant à la fois des produits d'inversion et de réturation de configuration, mais avec un excès net d'inversion de configuration (environ $70\%$ d'inversion, $30\%$ de racémisation). 
   - Le modèle purement dichotomique ($\text{SN}1$ pur ou $\text{SN}2$ pur) permet-il de rendre compte de cette observation quantitative ?
   - Proposer un modèle mécanistique plus fin (faisant intervenir des paires d'ions) pour interpréter ce résultat.

---

## Pistes et indications

*   **Q1 & Q2** : Pensez à l'encombrement stérique autour du carbone électrophile et à la stabilité relative des carbocation intermédiaires.
*   **Q3 & Q4** : L'indépendance de la concentration du nucléophile dans la loi de vitesse est la signature cinétique de la $\text{SN}1$.
*   **Q5** : Le DMSO est un solvant polaire aprotique qui exalte la nucléophilie des anions par solvation faible de ces derniers.
*   **Q6** : En $\text{SN}1$ stricte, le carbocation plan conduit à un racémat ($50/50$). Un excès d'inversion suggère qu'une partie du départ du groupe partant influence encore l'attaque du nucléophile (effet de cage ou paire d'ions serrée).

---

## Corrigé pas à pas

### Partie I : Analyse structurale et mécanismes réactionnels

1. **Formules et classes :**
   *   $(\text{A})$ : $(\text{CH}_3)_3\text{C-Br}$ (carbone tertiaire, $3^\circ$).
   *   $(\text{B})$ : $\text{CH}_3-\text{CH}_2-\text{CH}_2-\text{CH}_2-\text{Br}$ (carbone primaire, $1^\circ$).
   *   $(\text{C})$ : $\text{CH}_3-\text{CH}_2-\text{CH}(\text{Br})-\text{CH}_3$ (carbone secondaire, $2^\circ$).

2. **Profils réactionnels :**
   *   Pour $(\text{A})$ ($3^\circ$) : L'encombrement stérique bloque l'attaque par l'arrière (interdite pour une $\text{SN}2$). De plus, le départ du brome génère un carbocation tertiaire hautement stabilisé par les effets inductifs donneurs ($\mathbf{+I}$) des trois groupements méthyle. **Mécanisme privilégié : $\text{SN}1$**.
   *   Pour $(\text{B})$ ($1^\circ$) : L'encombrement stérique est minime, favorisant l'approche du nucléophile. Inversement, un carbocation primaire est extrêmement instable (déficit électronique non compensé). **Mécanisme privilégié : $\text{SN}2$**.

---

### Partie II : Étude cinétique et exploitation des données

3. **Ordre et mécanisme pour (A) :**
   La loi de vitesse $v = k[(\text{A})]$ montre que la vitesse ne dépend pas de la concentration du nucléophile (l'eau). 
   *   **Ordre global :** $1$.
   *   **Mécanisme :** $\text{SN}1$ (Substitution Nucléophile monomoléculaire).

4. **Étape cinétiquement déterminante et profil énergétique :**
   *   **Ecd :** Dissociation hétérolytique lente du substrat $(\text{A})$ :
       $$(\text{CH}_3)_3\text{C-Br} \xrightarrow{lente} (\text{CH}_3)_3\text{C}^+ + \text{Br}^-$$
   *   **Profil énergétique :** Il comporte deux barrières d'activation (la première étant la plus haute, correspondant à la formation du carbocation) et un minimum intermédiaire correspondant au carbocation plan. L'attaque rapide du nucléophile sur le carbocation constitue la seconde étape exothermique.

5. **Mécanisme et stéréochimie pour (B) avec $\text{CN}^-$ :**
   *   **Mécanisme :** $\text{SN}2$ (bifomoléculaire, concerté en une seule étape).
   *   **État de transition :** Le nucléophile $\text{CN}^-$ attaque du côté opposé au groupement partant ($\text{Br}^-$). Le carbone central présente une bipyramide à base trigonulaire transitoire avec des liaisons partielles $\text{[NC}\cdots\text{C}\cdots\text{Br]}^{\ddagger}$.
   *   **Stéréochimie :** S'il y a chiralité, il y a **inversion de configuration** (stéréospécificité de Walden).

---

### Partie III : Analyse critique et limites du modèle

6. **Analyse critique des résultats sur $(\text{C})$ :**
   *   *Modèle dichotomique vs Réalité :* Un modèle $\text{SN}1$ pur prédirait un carbocation totalement plan, menant à un mélange racémique parfait ($50\%$ d'inversion, $50\%$ de rétention). L'obtention de $70\%$ d'inversion montre que le modèle $\text{SN}1$ « pur » est une idéalisation.
   *   *Modèle affiné (Paires d'ions de Winstein) :* Lorsque le groupe partant $\text{Br}^-$ part, il reste initialement à proximité immédiate du carbocation formé, constituant une **paire d'ions paires serrées** puis **soufflées par le solvant**. L'anion $\text{Br}^-$ fait "écran" d'un côté du carbocation. Le nucléophile externe (l'eau) attaque donc préférentiellement du côté opposé (d'où l'excès d'inversion), avant la dissociation complète qui mènerait à la racémisation totale. Ce comportement illustre la limite des classifications binaires rigides ($\text{SN}1$ / $\text{SN}2$) et la nécessité d'envisager un continuum réactionnel.