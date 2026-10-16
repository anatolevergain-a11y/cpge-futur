---
title: 'Mines-Ponts - Chimie'
description: 'Sujet type concours corrigé pas à pas pour la filière PC.'
sidebar:
  badge:
    text: 'Annale Concours'
    variant: 'caution'
---

## 📄 Partie 1 : Énoncé du Problème (Mise en situation ingénieur/recherche)

### Synthèse totale et cinétique avancée d'un hétérocycle bioactif : le profil cinético-mécanistique de l'Épothilone B et de ses analogues structuraux

Les épothilones constituent une classe de macrolides naturels isolés de la myxobactérie *Sorangium cellulosum*. Dotées d'un mode d'action cytotoxique similaire à celui du Paclitaxel (Taxol®) par stabilisation des microtubules cellulaires, elles suscitent un intérêt considérable en oncologie en raison de leur efficacité avérée sur des lignées cellulaires résistantes aux taxanes.

Ce problème se propose d'étudier, sous un angle double, deux aspects cruciaux de l'ingénierie moléculaire de ces composés :
1. **La stratégie de synthèse totale énantiosélective** de fragments clés, mettant en œuvre des réactions d'aldolisation asymétrique, des couplages croisés catalysés par les métaux de transition et des réactions de métathèse d'oléfines.
2. **L'analyse cinétique avancée** de l'étape clé de macrocyclisation par métathèse d'fermeture de cycle (RCM, *Ring-Closing Metathesis*) couplée à une étude cinétique des processus d'isomérisation *E/Z* catalysés par ruthénium.

L'objectif est d'évaluer la rigueur du candidat dans le maniement des formalismes réactionnels avancés, la thermodynamique de transition, la théorie des états quasi-stationnaires (AEQS) et l'analyse de mécanismes réactionnels complexes en milieux homogènes et hétérogènes.

---

## ❓ Partie 2 : Questions

### Partie A : Stratégie de Synthèse Organique Avancée

La préparation du fragment C1-C6 de l'Épothilone B requiert l'obtention énantiosélective d'un intermédiaire chiral hydroxylé. On s'intéresse à la séquence réactionnelle suivante :

1. L'acide $(2S)$-méthylbutanoïque $\mathbf{A}$ est transformé en oxazolidin-2-one de Evans $\mathbf{B}$ par mise en jeu duaux agents de couplage usuels et du chiral auxiliaire. Écrire le mécanisme détaillé de la formation de l'imide $\mathbf{B}$ et préciser la configuration absolue induite lors de l'alkylation diastéréosélective ultérieure par l'iodométhane en présence de diisopropylamide de lithium (LDA) à $-78\text{ }^\circ\text{C}$. Justifier l'approche faciale par un modèle stérique rigoureux (modèle d'Evans).
2. L'imide $\mathbf{B}$ subit un clivage réducteur par l'hydrure de diisobutylaluminium (DIBAL-H) à basse température pour donner l'aldéhyde chiral $\mathbf{C}$. Cet aldéhyde est engagé dans une réaction d'aldolisation énantiosélective catalysée par un complexe de bore ou par un catalyseur chiral organique (type proline modifiée). Proposer un mécanisme transitionnel de type cyclicité de Zimmerman-Traxler pour l'addition aldolique de $\mathbf{C}$ sur le propanal en présence de $\text{Bu}_2\text{BOTf}$ et de $\text{i-Pr}_2\text{NEt}$. Donner la structure stéréochimique détaillée du produit $\mathbf{D}$ ainsi formé.
3. Le diol protégé $\mathbf{D}$ est converti en diène précurseur de métathèse $\mathbf{E}$. La dernière étape de construction du macrocycle à 16 chaînons repose sur une réaction de métathèse cyclisante (RCM) catalysée par le catalyseur de Grubbs de seconde génération ($\text{RuCl}_2(\text{H2IMes})(\text{PCy}_3)(\text{CHPh})$). Écrire le cycle catalytique complet de la métathèse des oléfines (amorçage, propagation et métathésation cyclique) en explicitant les intermédiaires métallocarbènes et métallacyclobutanes.

### Partie B : Cinétique Avancée de la Réaction de Métathèse et Processus Compétitifs

La réaction de fermeture de cycle (RCM) du diène $\mathbf{E}$ (noté $\text{S}$) pour donner le macrocycle $\mathbf{P}$ et de l'éthylène $\text{G}$ est étudiée en solution dans le dichlorométhane à $25\text{ }^\circ\text{C}$. Le catalyseur actif est noté $\text{C}^*$. Le mécanisme simplifié proposé est le suivant :

$$\text{C}^* + \text{S} \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} \text{I}_1 \quad (\text{Étape d'initiation / Complexation})$$

$$\text{I}_1 \xrightarrow{k_2} \text{I}_2 + \text{G} \quad (\text{Cycloréversion et libération d'éthylène})$$

$$\text{I}_2 \xrightarrow{k_3} \text{C}^* + \text{P} \quad (\text{Cyclisation intramoléculaire et régénération du catalyseur})$$

4. Définir l'état quasi-stationnaire pour les intermédiaires réactionnels $\text{I}_1$ et $\text{I}_2$. Établir l'expression de la vitesse de formation du produit $\text{P}$, $\nu = \frac{d[\text{P}]}{dt}$, en fonction des concentrations du catalyseur total $[\text{C}]_0 = [\text{C}^*] + [\text{I}_1] + [\text{I}_2]$ et du substrat $[\text{S}]$.
5. Dans l'hypothèse où l'étape de cycloréversion ($k_2$) est très rapide devant les autres étapes ($k_2 \gg k_{-1}, k_3$), simplifier l'expression de la vitesse. Quelle est alors l'ordres apparent de la réaction par rapport au substrat $\text{S}$ ?
6. On observe expérimentalement une inhibition de la réaction par l'éthylène $\text{G}$ formé au cours du temps. Modifier le mécanisme en introduisant une étape réversible de piégeage du catalyseur actif par $\text{G}$ :

$$\text{C}^* + \text{G} \underset{k_{-4}}{\overset{k_4}{\rightleftharpoons}} \text{I}_3$$

Établir la nouvelle loi de vitesse stationnaire. Discuter l'impact d'un balayage d'argon inerte sur le rendement cinétique de la transformation.

---

## 💡 Partie 3 : Rapport du Jury (Pièges et attentes)

- **Partie A :** Le jury déplore trop souvent une représentation approximative des états de transition de Zimmerman-Traxler. Les candidats doivent impérativement dessiner les cycles à 6 chaînons en chaise avec une minimisation des interactions stériques (groupes alkyles en position équatoriale ou minimisant l'gêne allylique de type 1,3). Concernant le cycle catalytique de Grubbs, l'écriture topologique rigoureuse des métallacyclobutanes (cycles à 4 chaînons comportant le métal ruthénium) est une exigence absolue.
- **Partie B :** L'application de l'AEQS (Approximation des États Quasi-Stationnaires) requiert une rigueur mathématique irréprochable. Le bilan de conservation sur la concentration totale en catalyseur $[\text{C}]_0$ est la source d'erreurs la plus fréquente : omettre l'un des intermédiaires stœchiométriques invalide l'ensemble de la résolution algébrique. Le jury valorisera les candidats sachant expliciter clairement les régimes limites (contrôle par l'initiation vs contrôle par la cyclisation intramoléculaire).

---

## 📋 Partie 4 : Corrigé Détaillé et Analyse

### Partie A : Stratégie de Synthèse Organique Avancée

1. **Formation de l'imide $\mathbf{B}$ et Alkylation d'Evans :**
   L'acide carboxylique $\mathbf{A}$ est activé sous forme d'un chlorure d'acycle ou via un agent de couplage (type EDCI/HOBt) avant d'être mis en réaction avec l'oxazolidin-2-one préalablement déprotonée par une base forte ($\text{n-BuLi}$) pour former l'anion oxazolidinone amide. 
   
   Mécanisme de l'alkylation : L'énolate de l'imide $\mathbf{B}$ formé par l'action du LDA à $-78\text{ }^\circ\text{C}$ adopte une conformation (Z)-énolate chelatée par le cation lithium impliquant les carbonyles de l'imide et de l'oxazolidinone. Dans cette conformation, la face supérieure du difacia-énolate est masquée par le groupement encombrant de l'auxiliaire chiral (le groupement isopropyle ou phényle selon l'oxazolidinone, par exemple le groupement benzyle de l'oxazolidinone de imide de Evans usuelle). L'attaque de l'iodométhane se fait donc exclusivement par la **face *re*** (ou face inféro-externe), conduisant à un excès diastéréoisomérique supérieur à $98\%$.

2. **Réduction et Aldolisation de Zimmerman-Traxler :**
   Le traitement par le DIBAL-H à $-78\text{ }^\circ\text{C}$ réduit l'imide en aldéhyde $\mathbf{C}$ sans altérer l'auxiliaire (par formation d'un complexe tétraédrique stable à basse température hydrolysé en fin de réaction).
   
   Pour l'aldolisation avec le propanal catalysée par $\text{Bu}_2\text{BOTf}$ et $\text{i-Pr}_2\text{NEt}$ : le triflate de dibutylbore forme un $(Z)$-énolate de bore avec le dérivé carbonylé. L'état de transition de Zimmerman-Traxler est un cycle à 6 chaînons en conformation chaise où le bore coordonne les deux atomes d'oxygène.
   
   $$
   \begin{array}{c}
   \text{État de transition de Zimmerman-Traxler (Chaire favorable)} \\
   \begin{tikzpicture}
     % Représentation schématique d'une chaise à 6 sommets
     \node (O1) at (0,0) {$\text{O}_B$};
     \node (B) at (1.5,0.8) {$\text{Bu}_2\text{B}$};
     \node (O2) at (3,0) {$\text{O}_{\text{ald}}$};
     \node (C2) at (2.2,-1.2) {$\text{C}_\alpha$};
     \node (C1) at (0.8,-1.2) {$\text{C}_\beta$};
     \draw[->] (O1) -- (B);
     \draw[->] (B) -- (O2);
     \draw (O2) -- (C2) -- (C1) -- (O1);
   \end{tikzpicture}
   \end{array}
   $$
   
   Dans cet état de transition, les groupements alkyles (le groupe éthyle du propanal et le groupe alkyle du donneur) se disposent en position **équatoriale** pour minimiser les interactions stériques 1,3-diaxiales. Le produit $\mathbf{D}$ formé est un *syn*-aldol avec une excellente énantiosélectivité.

3. **Cycle catalytique de la métathèse d'oléfines (Grubbs II) :**
   * **Amorçage :** Le catalyseur initial $\text{Ru}=\text{CHPh}$ réagit avec une première molécule d'oléfine terminale du substrat $\text{S}$ via un intermédiaire **métallacyclobutane** (cycle à 4 chaînons). Par cycloréversion, il y a libération d'un alcène volatile (styrène) et formation de l'alkylidène actif $\text{C}^*$ lié au substrat.
   * **Propagation / Métathésation cyclique :** 
     $$\text{C}^* + \text{CH}_2=\text{CH}-\text{R}-\text{CH}=\text{CH}_2 \rightleftharpoons [\text{Métallacyclobutane}] \rightleftharpoons \text{Intermédiaire cyclique} + \text{CH}_2=\text{CH}_2 \text{ (éthylène)}$$
   * **Fermeture de cycle (RCM) :** Le carbène ruthénium terminal réagit intramolecularement avec la seconde double liaison de la chaîne, formant un second métallacyclobutane dont la cycloréversion libère le macrocycle $\mathbf{P}$ et régénère le catalyseur actif $\text{C}^*$ ($\text{Ru}=\text{CH}_2$ ou dérivé alkylidène actif).

---

### Partie B : Cinétique Avancée de la Réaction de Métathèse

4. **Établissement de la loi de vitesse stationnaire :**
   Les étapes élémentaires sont :
   1. $\text{C}^* + \text{S} \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} \text{I}_1$
   2. $\text{I}_1 \xrightarrow{k_2} \text{I}_2 + \text{G}$
   3. $\text{I}_2 \xrightarrow{k_3} \text{C}^* + \text{P}$

   Appliquons l'AEQS aux intermédiaires réactionnels $\text{I}_1$ et $\text{I}_2$ :
   $$\frac{d[\text{I}_1]}{dt} = k_1[\text{C}^*][\text{S}] - (k_{-1} + k_2)[\text{I}_1] = 0 \implies [\text{I}_1] = \frac{k_1[\text{C}^*][\text{S}]}{k_{-1} + k_2}$$

   $$\frac{d[\text{I}_2]}{dt} = k_2[\text{I}_1] - k_3[\text{I}_2] = 0 \implies [\text{I}_2] = \frac{k_2[\text{I}_1]}{k_3} = \frac{k_1 k_2 [\text{C}^*][\text{S}]}{k_3(k_{-1} + k_2)}$$

   Bilan de conservation de la concentration totale en catalyseur $[\text{C}]_0$ :
   $$[\text{C}]_0 = [\text{C}^*] + [\text{I}_1] + [\text{I}_2] = [\text{C}^*] \left( 1 + \frac{k_1[\text{S}]}{k_{-1} + k_2} + \frac{k_1 k_2 [\text{S}]}{k_3(k_{-1} + k_2)} \right)$$

   La vitesse de formation du produit $\text{P}$ est :
   $$\nu = \frac{d[\text{P}]}{dt} = k_3[\text{I}_2] = \frac{k_1 k_2 [\text{C}^*][\text{S}]}{k_{-1} + k_2}$$

   En injectant l'expression de $[\text{C}^*]$ issue du bilan :
   $$\nu = \frac{\frac{k_1 k_2 [\text{S}]}{k_{-1} + k_2} [\text{C}]_0}{1 + \frac{k_1[\text{S}]}{k_{-1} + k_2} + \frac{k_1 k_2 [\text{S}]}{k_3(k_{-1} + k_2)}} = \frac{k_1 k_2 [\text{C}]_0 [\text{S}]}{(k_{-1} + k_2) + k_1[\text{S}] \left(1 + \frac{k_2}{k_3}\right)}$$

5. **Simplification dans l'hypothèse $k_2 \gg k_{-1}, k_3$ :**
   Si $k_2 \gg k_{-1}$ et $k_2 \gg k_3$, le terme $(k_{-1} + k_2) \approx k_2$, et dans le dénominateur, le terme $\frac{k_2}{k_3} \gg 1$, donc $1 + \frac{k_2}{k_3} \approx \frac{k_2}{k_3}$.
   L'expression de la vitesse devient :
   $$\nu \approx \frac{k_1 k_2 [\text{C}]_0 [\text{S}]}{k_2 + k_1[\text{S}] \left(\frac{k_2}{k_3}\right)} = \frac{k_1 k_3 [\text{C}]_0 [\text{S}]}{k_3 + k_1[\text{S}]}$$
   
   * **Analyse des ordres apparents :**
     * Si la concentration en substrat est très faible ($k_1[\text{S}] \ll k_3$), le dénominateur se simplifie en $k_3$, d'où :
       $$\nu \approx k_1 [\text{C}]_0 [\text{S}] \quad (\text{Ordre 1 par rapport au substrat})$$
     * Si la concentration en substrat est très élevée ($k_1[\text{S}] \gg k_3$), la vitesse s'ature :
       $$\nu \approx k_3 [\text{C}]_0 \quad (\text{Ordre 0 apparent par rapport au substrat})$$
       La cinétique présente un profil de type Michaelis-Menten, caractéristique des réactions catalysées par saturation des sites actifs.

6. **Introduction de l'inhibition par l'éthylène $\text{G}$ :**
   L'étape supplémentaire est : $\text{C}^* + \text{G} \underset{k_{-4}}{\overset{k_4}{\rightleftharpoons}} \text{I}_3$, ce qui implique $[\text{I}_3] = \frac{k_4}{k_{-4}} [\text{C}^*][\text{G}] = K_4 [\text{C}^*][\text{G}]$.
   
   Le nouveau bilan de conservation s'écrit :
   $$[\text{C}]_0 = [\text{C}^*] + [\text{I}_1] + [\text{I}_2] + [\text{I}_3] = [\text{C}^*] \left( 1 + K_4[\text{G}] + \frac{k_1[\text{S}]}{k_{-1} + k_2} + \frac{k_1 k_2 [\text{S}]}{k_3(k_{-1} + k_2)} \right)$$
   
   La vitesse est alors :
   $$\nu = \frac{k_1 k_2 [\text{C}]_0 [\text{S}]}{(k_{-1} + k_2)(1 + K_4[\text{G}]) + k_1[\text{S}] \left(1 + \frac{k_2}{k_3}\right)}$$
   
   * **Impact du balayage d'argon inerte :**
     L'éthylène $\text{G}$ étant un gaz sous-produit de la réaction, sa concentration $[\text{G}]$ augmente au cours du temps dans le milieu réactionnel. Selon la loi de vitesse établie, la présence de $\text{G}$ accroît le dénominateur par le terme $(k_{-1} + k_2)K_4[\text{G}]$, ce qui entraîne une **diminution de la vitesse globale de réaction** (inhibition compétitive par le sous-produit gazeux). 
     
     Effectuer un balayage d'argon ou opérer sous vide partiel permet d'extraire l'éthylène gazeux au fur et à mesure de sa formation, maintenant $[\text{G}] \approx 0$, ce qui supprime le terme inhibiteur, déplace les équilibres dans le sens direct et permet d'atteindre des taux de conversion quantitatifs.