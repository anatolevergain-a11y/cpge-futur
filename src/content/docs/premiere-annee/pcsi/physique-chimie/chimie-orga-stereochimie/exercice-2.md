---
title: 'Exercice 2 : Spectroscopie RMN et IR'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Identification structurale par couplage de méthodes spectroscopiques (IR et RMN $^1\text{H}$)

## Énoncé

Dans le cadre de la synthèse organique fine, on s'intéresse à l'identification d'un composé organique $\mathbf{A}$, de formule brute $\mathbf{C_5H_{10}O_2}$, suspecté d'être un ester ou un acide carboxylique. Pour lever l'ambiguïté structurale, on soumet l'échantillon à une analyse conjointe par spectroscopie Infrarouge (IR) et par résonance magnétique nucléaire du proton ($\text{RMN } ^1\text{H}$).

L'objectif de ce problème est d'exploiter rigoureusement ces données spectroscopiques, d'analyser les limites des modèles théoriques utilisés (notamment l'approximation des incréments en RMN et l'influence des liaisons hydrogène en IR), et de valider une structure univoque.

---

## Données

*   **Constantes physiques :**
    *   Champ magnétique de l'appareil RMN : $B_0 = 7{,}04\text{ T}$, ce qui correspond à une fréquence de résonance des protons de $\nu = 300\text{ MHz}$.
    *   Rapport gyromagnétique du proton : $\gamma_{\text{H}} \approx 2{,}675 \times 10^8\text{ rad}\cdot\text{s}^{-1}\cdot\text{T}^{-1}$.
*   **Données spectroscopiques pour le composé $\mathbf{A}$ :**
    *   **Spectre IR (liquide pur) :** 
        *   Large bande très intense centrée vers $3000\text{ cm}^{-1}$ (s'étendant de $2500\text{ cm}^{-1}$ à $3300\text{ cm}^{-1}$).
        *   Bande fine, intense et très aiguë à $1710\text{ cm}^{-1}$.
    *   **Spectre $\text{RMN } ^1\text{H}$ ($\text{CDCl}_3$, $300\text{ MHz}$, $\delta$ en ppm / TMS) :**
        *   Signal 1 : $\delta = 1{,}18\text{ ppm}$, triplet, $3\text{ H}$.
        *   Signal 2 : $\delta = 1{,}63\text{ ppm}$, sextuplet, $2\text{ H}$.
        *   Signal 3 : $\delta = 2{,}35\text{ ppm}$, triplet, $2\text{ H}$.
        *   Signal 4 : $\delta = 11{,}5\text{ ppm}$, singulet large, $1\text{ H}$ (disparaît après addition de $\text{D}_2\text{O}$).

---

## Questions

### Partie I : Exploitation de la formule brute et de la spectroscopie Infrarouge (IR)

1.  Calculer le degré d'insaturation (ou indice d'insaturation) du composé $\mathbf{A}$. Que peut-on en déduire quant à la présence potentielle de cycles ou de doubles liaisons ?
2.  Analyser le spectre IR du composé $\mathbf{A}$.
    *   Identifier la fonction chimique principale portée par $\mathbf{A}$ en justifiant à partir des bandes observées à $1710\text{ cm}^{-1}$ et dans la zone $2500 - 3300\text{ cm}^{-1}$.
    *   Discuter de l'influence des liaisons hydrogène intermoléculaires sur l'allure et la position de la bande observée à $3000\text{ cm}^{-1}$. Préciser la limite du modèle de l'oscillateur harmonique non-interagissant dans ce cas.

### Partie II : Analyse du spectre $\text{RMN } ^1\text{H}$ et résolution structurale

3.  Déterminer le nombre total de protons portés par la molécule à partir de la formule brute, et vérifier la cohérence avec les intégrations fournies dans l'énoncé.
4.  Analyser le multiplet observé à $\delta = 11{,}5\text{ ppm}$. Quel type de proton est-il responsable de ce signal ? Justifier l'expérience d'échange isotopique avec $\text{D}_2\text{O}$.
5.  Interpréter les signaux 1, 2 et 3 en appliquant la règle des $n+1$ voisinages. En déduire la nature du groupement alkyle attaché à la fonction principale.
6.  Proposer une structure semi-développée pour le composé $\mathbf{A}$ et attribuer sans ambiguïté chaque signal $\text{RMN } ^1\text{H}$ aux protons correspondants.

### Partie III : Analyse critique et ordres de grandeur

7.  Calculer l'écart énergétique $\Delta E$ entre les deux états de spin nucléaire d'un proton placé dans le champ $B_0 = 7{,}04\text{ T}$. Exprimer ce résultat en Joules par mole ($\text{J}\cdot\text{mol}^{-1}$) et le comparer à l'énergie thermique $RT$ à $T = 298\text{ K}$.
8.  Discuter de l'impact de cette comparaison sur la population des niveaux de spin et sur la nécessité d'utiliser des champs magnétiques intenses en RMN moderne (analyse critique du modèle thermodynamique de Boltzmann).

---

## Pistes et indications

*   *Piste 1 (Degré d'insaturation) :* Pour un composé $\text{C}_c\text{H}_h\text{O}_o\text{N}_n$, la formule générale est $\text{DI} = c + 1 - \frac{h}{2} + \frac{n}{2}$.
*   *Piste 2 (IR) :* Une bande très large à bas nombre d'ondes pour les liaisons $\text{O-H}$ est caractéristique d'une forte polarξation due aux liaisons hydrogène.
*   *Piste 3 (RMN) :* Un système de type $-\text{CH}_2-\text{CH}_2-$ ou $-\text{CH}_2-\text{CH}_3$ se déduit par l'analyse combinée des multiplicités (règle des $n+1$ liaisons à travers les liaisons $\sigma$).
*   *Piste 4 (Thermodynamique) :* Utiliser la distribution de Boltzmann $\frac{N_\beta}{N_\alpha} = \exp\left(-\frac{\Delta E}{k_B T}\tex\right)$ et faire un développement limité sachant que $\Delta E \ll k_B T$.

---

## Corrigé pas à pas

### Partie I : Exploitation de la formule brute et de la spectroscopie Infrarouge (IR)

1.  **Degré d'insaturation ($\text{DI}$) :**
    Pour la formule brute $\text{C}_5\text{H}_{10}\text{O}_2$ :
    $$\text{DI} = 5 + 1 - \frac{10}{2} = 6 - 5 = 1$$
    La molécule possède une unique insaturation, qui correspond soit à une double liaison carbone-oxygène ($\text{C=O}$), soit à un cycle.

2.  **Analyse IR :**
    *   La bande fine et intense à $1710\text{ cm}^{-1}$ est caractéristique de l'élongation de la liaison $\nu(\text{C=O})$ d'un groupement carbonyle conjugué ou inclus dans un acide carboxylique.
    *   La large bande très intense s'étendant de $2500\text{ cm}^{-1}$ à $3300\text{ cm}^{-1}$ (centrée vers $3000\text{ cm}^{-1}$) est caractéristique de la liaison $\nu(\text{O-H})$ d'un **acide carboxylique** (et non d'un alcool, dont la bande $\text{O-H}$ est plus fine et située vers $3300-3600\text{ cm}^{-1}$).
    *   *Limite du modèle :* Le modèle de l'oscillateur harmonique considère une liaison isolée vibrant à une fréquence propre $\nu_0 = \frac{1}{2\pi}\sqrt{\frac{k}{\mu}}$. Or, en phase condensée (liquide), les liaisons hydrogène intermoléculaires affaiblissent la liaison $\text{O-H}$ (diminution de la constante de raideur effective $k$), ce qui provoque un étalement massif de la bande vers les basses fréquences et un déplacement vers le rouge (nombres d'ondes plus faibles). Le modèle harmonique pur est donc pris en défaut par les effets anharmoniques et coopératifs intermoléculaires.

---

### Partie II : Analyse du spectre $\text{RMN } ^1\text{H}$ et résolution structurale

3.  **Comptage des protons :**
    La formule $\text{C}_5\text{H}_{10}\text{O}_2$ indique $10$ protons au total. 
    Somme des intégrations de l'énoncé : $3 + 2 + 2 + 1 = 8$ protons visibles sur le spectre (le proton mobile à $11{,}5\text{ ppm}$ n'est pas toujours compté avec précision par intégration automatique, ce qui est cohérent avec $3 + 2 + 2 + 2 = 9$ ou le proton échangeable).

4.  **Signal à $\delta = 11{,}5\text{ ppm}$ :**
    Ce déplacement chimique très déblindé est caractéristique d'un proton acide de type **$-\text{COOH}$** (acide carboxylique). 
    *   *Test au $\text{D}_2\text{O}$ :* Le proton labile s'échange contre un deutérium ($\text{D}$, non actif en $\text{RMN } ^1\text{H}$ à cette fréquence), ce qui entraîne la disparition du signal sur le spectre, confirmant sa nature mobile ($\text{-OH}$).

5.  **Interprétation des multiplets aliphatiques :**
    *   Signal 1 ($\delta = 1{,}18\text{ ppm}$, triplet, $3\text{ H}$) : Correspond à un groupement $-\text{CH}_3$ lié à un carbone portant $2$ protons ($n=2 \implies$ triplet). Il s'agit d'un groupement éthyle terminal de type $-\text{CH}_2-\text{CH}_3$.
    *   Signal 2 ($\delta = 1{,}63\text{ ppm}$, sextuplet, $2\text{ H}$) : Correspond à un groupement $-\text{CH}_2-$ ayant $5$ voisins ($3$ du $\text{CH}_3$ et $2$ du $\text{CH}_2$ voisin, $n+1 = 6 \implies$ sextuplet). Il s'agit du $-\text{CH}_2-$ central d'une chaîne propyle.
    *   Signal 3 ($\delta = 2{,}35\text{ ppm}$, triplet, $2\text{ H}$) : Correspond à un $-\text{CH}_2-$ très déblindé par la présence du groupement carbonyle $-\text{COOH}$ en position $\alpha$, et couplé avec $2$ voisins ($n=2 \implies$ triplet). Il s'agit du $-\text{CH}_2-$ en $\alpha$ du carboxyle.

6.  **Structure et attribution :**
    Le composé $\mathbf{A}$ est l'**acide pentanoïque** (ou acide valérique), de formule semi-développée :
    $$\text{CH}_3-\text{CH}_2-\text{CH}_2-\text{CH}_2-\text{COOH}$$
    *(Note : Avec la ramification, un isomère type acide 2-méthylbutanoïque aurait un profil $\text{RMN}$ différent avec un multiplet complexe pour le $\text{CH}$).*
    *   **Attributions :**
        *   $\delta = 11{,}5\text{ ppm}$ (singulet large, $1\text{ H}$) : $-\text{COOH}$
        *   $\delta = 2{,}35\text{ ppm}$ (triplet, $2\text{ H}$) : $-\text{CH}_2-\text{COOH}$ (C2)
        *   $\delta = 1{,}63\text{ ppm}$ (sextuplet, $2\text{ H}$) : $-\text{CH}_2-$ (C3)
        *   $\delta = 1{,}18\text{ ppm}$ (triplet, $3\text{ H}$ - *allure de multiplet complexe parfois selon la résolution*) : $-\text{CH}_3$ terminal (C5) couplé au C4.

---

### Partie III : Analyse critique et ordres de grandeur

7.  **Calcul de l'écart énergétique $\Delta E$ :**
    La fréquence de résonance est $\nu = 300\text{ MHz} = 3\times 10^8\text{ Hz}$.
    L'écart énergétique entre les deux états de spin du proton est donné par :
    $$\Delta E = h \nu = (6{,}626 \times 10^{-34}\text{ J}\cdot\text{s}) \times (3 \times 10^8\text{ s}^{-1}) = 1{,}988 \times 10^{-25}\text{ J}$$
    Pour une mole de protons, cela donne :
    $$\Delta E_{\text{mol}} = N_A \cdot \Delta E = (6{,}022 \times 10^{23}\text{ mol}^{-1}) \times (1{,}988 \times 10^{-25}\text{ J}) \approx 0{,}120\text{ J}\cdot\text{mol}^{-1}$$
    À $T = 298\text{ K}$, l'énergie thermique vaut :
    $$RT = (8{,}314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}) \times 298\text{ K} \approx 2477\text{ J}\cdot\text{mol}^{-1}$$
    On constate que $\Delta E_{\text{mol}} \ll RT$ ($0{,}12 \ll 2477$).

8.  **Analyse critique et limites du modèle thermodynamique :**
    D'après la loi de distribution de Boltzmann, le rapport des populations des niveaux $\beta$ (de plus haute énergie) et $\alpha$ (de plus basse énergie) s'écrit :
    $$\frac{N_\beta}{N_\alpha} = \exp\left(-\frac{\Delta E}{k_B T}\right) \approx 1 - \frac{\Delta E}{k_B T}$$
    L'excès de population dans l'état fondamental $\alpha$ est extremement faible (de l'ordre de $10^{-5}$ soit quelques ppm). 
    *   **Conséquence pratique :** La sensibilité de la RMN est intrinsèquement très faible comparée à l'UV-visible ou l'IR. C'est pourquoi les chimistes cherchent continuellement à augmenter le champ magnétique $B_0$ (les appareils actuels atteignent $1{,}2\text{ GHz}$, soit $28{,}2\text{ T}$) afin d'augmenter $\Delta E$, d'améliorer le rapport signal sur bruit et d'accroître la résolution spectrale.