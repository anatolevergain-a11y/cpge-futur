---
title: 'Exercice 2 : Spectroscopie IR et RMN'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Identification structurale par couplage de méthodes spectroscopiques (IR et $\text{RMN}^1\text{H}$)

## Énoncé

Dans le cadre d'une séance de travaux pratiques de synthèse organique en filière BCPST, un étudiant réalise l'oxydation d'un alcool de formule brute $\text{C}_4\text{H}_{10}\text{O}$ (noté $\mathbf{A}$) pour obtenir un composé organique $\mathbf{B}$ de formule brute $\text{C}_4\text{H}_8\text{O}$. 

L'assistant de TP lui fournit les données spectroscopiques des deux espèces. L'objectif de ce problème est d'identifier de manière rigoureuse les structures de $\mathbf{A}$ et $\mathbf{B}$, tout en discutant des limites inhérentes aux méthodes spectroscopiques utilisées.

Données utiles (ordres de grandeur des nombres d'onde en $\text{cm}^{-1}$ et des déplacements chimiques en $\text{ppm}$ par rapport au TMS) :
* $\nu(\text{O-H})$ éthanolique/alcool libre : $\approx 3200 - 3600 \text{ cm}^{-1}$ (large)
* $\nu(\text{C=O})$ aldéhyde/cétone : $\approx 1700 - 1740 \text{ cm}^{-1}$ (fine et intense)
* $\nu(\text{C-H})$ aliphatique : $\approx 2850 - 2960 \text{ cm}^{-1}$
* Multiplicité en $\text{RMN}^1\text{H}$ : Règle des $n+1$ multiplets (systèmes $AX_n$ ou assimilés).

---

## Questions

1. **Calcul d'insaturation :** Calculer le nombre d'insaturations (degrés d'insaturation) des molécules $\mathbf{A}$ et $\mathbf{B}$. En déduire la nature topologique globale de ces molécules (chaîne ouverte ou cyclique).
2. **Analyse IR du composé $\mathbf{A}$ :** Le spectre Infrarouge (IR) du composé $\mathbf{A}$ présente une bande très large et intense centrée à $3330 \text{ cm}^{-1}$, ainsi qu'une bande vers $2960 \text{ cm}^{-1}$. Identifier les fonctions chimiques associées.
3. **Analyse IR du composé $\mathbf{B}$ :** Le spectre IR du composé $\mathbf{B}$ ne présente plus la bande large à $3330 \text{ cm}^{-1}$, mais fait apparaître une bande fine et intense à $1715 \text{ cm}^{-1}$. Quelle nouvelle fonction chimique est mise en évidence ?
4. **Analyse RMN du composé $\mathbf{B}$ :** Le spectre $\text{RMN}^1\text{H}$ du composé $\mathbf{B}$ (solvant $\text{CDCl}_3$) comporte exactement deux signaux :
   * Un singulet d'intégration 9 à $\delta = 1,1 \text{ ppm}$.
   * Un singulet d'intégration 1 à $\delta = 9,8 \text{ ppm}$.
   
   Attribuer ces signaux aux groupements protons correspondants et en déduire la structure exacte de $\mathbf{B}$.
5. **Analyse RMN du composé $\mathbf{A}$ :** En déduire la structure de l'alcool précurseur $\mathbf{A}$, sachant que son spectre $\text{RMN}^1\text{H}$ est cohérent avec l'oxydation mise en jeu.
6. **Esprit critique et limites du modèle :** Un étudiant affirme : *"Grâce à la multiplicité des pics en $\text{RMN}^1\text{H}$, je peux déterminer la structure de n'importe quelle molécule organique sans ambiguïté."* Discutez de cette affirmation en illustrant avec les limites de la spectroscopie $\text{RMN}$ et de la règle des $n+1$ (couplages complexes, équivalence chimique vs magnétique, isochronie).

---

## Pistes & Conseils méthodologiques

* *Piste 1 :* Le degré d'insaturation (DI) pour une formule brute $\text{C}_c\text{H}_h\text{O}_o\text{N}_n$ se calcule par la formule : $\text{DI} = c - \frac{h}{2} + \frac{n}{2} + 1$.
* *Piste 2 :* En IR, attention à la distinction entre liaisons hydrogène intermoléculaires (bandes larges) et intramoléculaires.
* *Piste 3 :* En $\text{RMN}^1\text{H}$, un singulet d'intégration importante (comme 9 protons) traduit une forte symétrie (groupes méthyles équivalents portés par un même carbone quaternaire).
* *Piste 4 :* Pour la dernière question, pensez aux cas où la règle des $n+1$ est prise en défaut (systèmes non-premiers ordre $AB$ ou $ABC$, couplages à longue distance, échange de protons labiles).

---

## Corrigé pas à pas

### 1. Degré d'insaturation
Pour $\mathbf{A}$ ($\text{C}_4\text{H}_{10}\text{O}$) :
$$\text{DI}_A = 4 - \frac{10}{2} + 1 = 4 - 5 + 1 = 0$$
Pour $\mathbf{B}$ ($\text{C}_4\text{H}_8\text{O}$) :
$$\text{DI}_B = 4 - \frac{8}{2} + 1 = 4 - 4 + 1 = 1$$
Conclusion: * Le composé $\mathbf{A}$ ne comporte ni cycle ni double liaison (alcane acyclique substitué). Le composé $\mathbf{B}$ possède une insaturation, qui correspond soit à un cycle, soit à une double liaison (carbone-carbone ou carbone-oxygène).

### 2. Analyse IR du composé $\mathbf{A}$
* La bande large à $3330 \text{ cm}^{-1}$ est caractéristique d'une élongation de liaison $\nu(\text{O-H})$ engagée dans des liaisons hydrogène (alcool).
* La bande vers $2960 \text{ cm}^{-1}$ correspond aux élongations $\nu(\text{C-H})$ des liaisons aliphatiques $\text{sp}^3$.

### 3. Analyse IR du composé $\mathbf{B}$
* La disparition de la bande $\text{O-H}$ et l'apparition d'une bande fine et intense à $1715 \text{ cm}^{-1}$ confirment la transformation de la fonction alcool en fonction carbonyle $\nu(\text{C=O})$. 
* Conjugué à $\text{DI} = 1$, le composé $\mathbf{B}$ est soit un aldéhyde, soit une cétone.

### 4. Analyse RMN du composé $\mathbf{B}$
* Le signal à $\delta = 9,8 \text{ ppm}$ (intégration 1) est caractéristique d'un proton aldéhydique ($\text{-CHO}$). Cela tranche entre aldéhyde et cétone : $\mathbf{B}$ est un aldéhyde.
* Le signal à $\delta = 1,1 \text{ ppm}$ (singulet, intégration 9) correspond à neuf équivalents protons aliphatiques. Un singulet indique l'absence de voisins protonés (système $AX_0$). Neuf protons équivalents correspond à trois groupements $\text{-CH}_3$ portés par un même carbone quaternaire voisin du groupe carbonyle.
* *Structure de $\mathbf{B}$ :* Le 2,2-diméthylpropanal (ou pivalaldéhyde), de formule semi-développée : $(\text{CH}_3)_3\text{C-CHO}$.

### 5. Analyse RMN du composé $\mathbf{A}$
Puisque $\mathbf{B}$ est le 2,2-diméthylpropanal et que $\mathbf{A}$ ($\text{C}_4\text{H}_{10}\text{O}$) est son précurseur par oxydation (oxydation d'un alcool primaire en aldéhyde), $\mathbf{A}$ est nécessairement un alcool primaire possédant le même squelette carboné carboné tert-butyle.
* *Structure de $\mathbf{A}$ :* Le 2,2-diméthylpropan-1-ol (ou néopentylalcool), de formule : $(\text{CH}_3)_3\text{C-CH}_2\text{OH}$.

### 6. Analyse critique et limites du modèle
L'affirmation de l'étudiant est excessive et scientifiquement inexacte pour plusieurs raisons fondamentales inhérentes aux limites de la modélisation spectroscopique :

1. **Limites de la règle des $n+1$ (Premiers vs Seconds ordres) :** 
   La règle simple des $n+1$ multiplets n'est valable que pour les systèmes dits du *premier ordre*, c'est-à-dire lorsque la différence de déplacement chimique entre les protons couplés ($\Delta\nu$) est très supérieure à la constante de couplage $J$ ($\Delta\nu \gg J$). Si $\Delta\nu$ est comparable à $J$ (systèmes d'ordre supérieur $AB$, $ABX$, etc.), le nombre de pics et leurs intensités ne respectent plus la loi de Pascal (phénomène de "gauchissement" des intensités, apparition de pics supplémentaires).
2. **Équivalence chimique vs magnétique :** 
   Des protons peuvent être chimiquement équivalents par symétrie mais magnétiquement non équivalents (ils n'ont pas les mêmes interactions vis-à-vis d'un tiers groupe de protons), ce qui complexifie grandement les spectres et rend l'application naïve de la multiplicité caduque.
3. **Phénomènes d'échange chimique :** 
   Les protons labiles (portés par $\text{O-H}$, $\text{N-H}$) participent souvent à des échanges rapides avec les traces d'eau ou entre molécules de solvant/soluté. Cela conduit à un élargissement des signaux et à la disparition des couplages (les protons voisins ne "voient" plus le spin du proton labile, qui est moyenné par le temps).
4. **Ambiguïtés structurales :** 
   La spectroscopie n'est pas une méthode absolue : des isomères de position ou de conformation très proches peuvent donner des profils spectraux quasi-indiscernables sans l'apport couplé de méthodes complémentaires (spectrométrie de masse haute résolution, diffraction des rayons X sur monocristal).