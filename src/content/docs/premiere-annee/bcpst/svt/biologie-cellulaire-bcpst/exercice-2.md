---
title: 'Exercice 2 : Respiration et photosynthèse'
description: 'Problème d entraînement type concours.'
---

# Concours BCPST — Correction d'un problème guidé

**Matière :** Sciences de la Vie et de la Terre (SVT)  
Chapitre: ** Biologie cellulaire et métabolisme  
**Thème :** Couplage énergétique, respiration et photosynthèse chez les végétaux chlorophylliens  

---

## Introduction et présentation du problème

Ce problème aborde l'étude comparée des grands flux énergétiques membranaires chez les végétaux autotrophes : la photophosphorylation chloroplastique et la phosphorylation oxydative mitochondriale. L'objectif est d'analyser l'impact de différents inhibiteurs métaboliques et découplants sur l'activité d'organcules isolés afin de démontrer les mécanismes chimiososmothiques de production d'ATP.

---

## Partie I : Étude de la photophosphorylation (Chloroplastes)

On isole des chloroplastes fonctionnels d'épinard que l'on place dans un milieu tamponné isotonique. On mesure l'évolution de la concentration en dioxygène dissous ($\text{O}_2$) et l'incorporation de phosphate inorganique radiomarqué ($^{32}\text{P}_i$) sous différents flux lumineux et en présence de réactifs spécifiques.

### Expérience 1 : Le test de Hill et la photophosphorylation

*   **Temps $t_0$ à $t_1$ :** Obscurité, chloroplastes + $\text{P}_i$ + ADP + $\text{K}_3\text{Fe(CN)}_6$ (ferricyanure de potassium, accepteur artificiel d'électrons, dit réactif de Hill).
*   **Temps $t_1$ à $t_2$ :** Éclairement.
*   **Temps $t_2$ à $t_3$ :** Ajout de FCCP (un agent découplant des membranes thylakoïdiennes) sous éclairement.

Les résultats montrent :
*   Entre $t_0$ et $t_1$ : Aucune variation de $\text{O}_2$, pas de synthèse d'ATP.
*   Entre $t_1$ et $t_2$ : Dégagement de $\text{O}_2$ et synthèse d'ATP (consommation de $^{32}\text{P}_i$ et ADP).
*   Entre $t_2$ et $t_3$ : Accélération du dégagement de $\text{O}_2$ (ou maintien maximal), mais **chute brutale de la synthèse d'ATP à zéro**.

---

### Questions d'analyse

#### 1. Interpréter l'évolution du système entre $t_0$ et $t_2$. Écrire le bilan global de la réaction observée.
Correction: **
*   À l'obscurité ($t_0 - t_1$), l'absence de photons ne permet pas l'activation du photosystème II (PSII). La chaîne de transport des électrons est inactive, d'où l'absence de photolyse de l'eau (pas de dégagement d' $\text{O}_2$) et l'absence de force proton-motrice (pas de synthèse d'ATP).
*   À l'éclairement ($t_1 - t_2$), les photons energétisent les pigments photosynthétiques. Le PSII oxyde l'eau, libérant du dioxygène. Les électrons transitent via la chaîne photosynthétique jusqu'au ferricyanure (réduction). Ce transport s'accompagne d'un flux de protons du stroma vers la lumière du thylakoïde, créant un gradient électrochimique de protons ($\Delta\mu_{\text{H}^+}$). Le retour des protons dans le stroma via l'ATP synthase (photophosphorylation) permet la synthèse d'ATP.

**Bilan global (Réaction de Hill) :**
$$2\text{H}_2\text{O} + 2\text{Fe(CN)}_6^{3-} + \text{ADP} + \text{P}_i \xrightarrow{\text{Lumière, chloroplastes}} \text{O}_2 + 2\text{H}^+ + 2\text{Fe(CN)}_6^{4-} + \text{ATP} + \text{H}_2\text{O}$$

---

#### 2. Expliquer l'effet de l'adjonction de FCCP entre $t_2$ et $t_3$ sur le plan biochimique et énergétique.
Correction: **
*   Le FCCP (carbonyl cyanide *p*-trifluoromethoxyphenylhydrazone) est un **agent découplant lipophile**. Il est capable de transporter les protons ($\text{H}^+$) à travers la membrane thylakoïdienne en contournant l'ATP synthase.
*   **Conséquence bioénergétique :** Le gradient de protons ($\Delta\text{pH}$ et potentiel de membrane) est immédiatement dissipé. L'interruption de la force proton-motrice arrête le fonctionnement de l'ATP synthase, ce qui explique l'arrêt de la synthèse d'ATP.
*   **Conséquence sur la chaîne redox :** La suppression du gradient lève la "contrainte cinétique" exercée par l'accumulation de protons dans le lumen (contrôle respiratoire ou photosynthétique). Par conséquent, les électrons circulent plus librement, ce qui explique que l'oxydation de l'eau et la réduction du ferricyanure se poursuivent (voire s'accélèrent).

---

## Partie II : Étude de la phosphorylation oxydative (Mitochondries)

On isole des mitochondries hépatiques que l'on place dans une cuve oxymétrique. On étudie la consommation d' $\text{O}_2$ en présence de succinate (substrat du complexe II) et de différents inhibiteurs.

### Tableau des résultats expérimentaux (vitesse de consommation d' $\text{O}_2$ en $\text{nmol}\cdot\text{min}^{-1}\cdot\text{mg}^{-1}$ de protéines)

| Conditions expérimentales | Vitesse de consommation d' $\text{O}_2$ ($\text{nmol}\cdot\text{min}^{-1}\cdot\text{mg}^{-1}$) |
| :--- | :--- |
| **1.** Mitochondries + Succinate | 15 |
| **2.** Condition 1 + ADP + $\text{P}_i$ | 75 |
| **3.** Condition 2 + Oligomycine | 18 |
| **4.** Condition 3 + FCCP | 70 |

---

### Questions d'analyse

#### 3. Analyser la transition de la condition 1 à la condition 2. Quel concept bioénergétique cela illustre-t-il ?
Correction: **
*   Le passage de la condition 1 (substrat seul) à la condition 2 (ajout d'ADP et $\text{P}_i$) provoque une multiplication par 5 de la vitesse de consommation d' $\text{O}_2$ (le taux respiratoire passe de 15 à $75\text{ nmol}\cdot\text{min}^{-1}\cdot\text{mg}^{-1}$).
*   Ceci illustre le phénomène de **contrôle respiratoire** (ou état 3 vs état 4 de Chance et Williams). En l'absence d'ADP, l'ATP synthase ne peut fonctionner, le gradient de protons s'accumule et s'oppose au pompage des électrons par la chaîne respiratoire. L'ajout d'ADP permet le fonctionnement de l'ATP synthase, dissipe le gradient, lève le frein thermodynamique et cinétique, et active la chaîne respiratoire jusqu'à l'accepteur final ($\text{O}_2$).

---

#### 4. Expliquer le mode d'action moléculaire de l'oligomycine (condition 3) et du FCCP (condition 4).
Correction: **
*   **Oligomycine :** Inhibiteur spécifique de l'ATP synthase mitochondriale (plus précisément de sa portion membranaire $F_0$, bloquant le canal à protons). En bloquant l'ATP synthase, les protons ne peuvent plus rentrer dans la matrice, le gradient s'accumule, ce qui bloque la chaîne respiratoire (chute de la consommation d' $\text{O}_2$ à 18).
*   **FCCP :** L'ajout ultérieur de FCCP (agent découplant) dissipe le gradient de protons créé par la chaîne respiratoire indépendamment de l'ATP synthase bloquée par l'oligomycine. La chaîne respiratoire est à nouveau "débridée", d'où la reprise de la consommation d' $\text{O}_2$ (remontée à 70). Toutefois, l'énergie est intégralement dissipée sous forme de chaleur (pas de synthèse d'ATP).

---

## Partie III : Synthèse et analyse critique

#### 5. Rédiger une synthèse comparée (sous forme de tableau ou de texte argumenté) soulignant l'analogie structurale et fonctionnelle entre la photophosphorylation et la phosphorylation oxydative.
Correction: **

| Caractéristique | Chloroplaste (Photophosphorylation) | Mitochondrie (Phosphorylation oxydative) |
| :--- | :--- | :--- |
| **Membrane impliquée** | Membrane des thylakoïdes | Membrane mitochondriale interne |
| **Origine de l'énergie** | Énergie lumineuse (photons) | Énergie redox (oxydation des coenzymes $\text{NADH}, \text{H}^+$ / $\text{FADH}_2$) |
| **Sens du gradient de $\text{H}^+$** | Stroma $\rightarrow$ Lumière du thylakoïde | Matrice $\rightarrow$ Espace intermembranaire |
| **Orientation de l'ATP synthase** | $F_0$ dans la membrane, $F_1$ orienté vers le **stroma** | $F_0$ dans la membrane, $F_1$ orienté vers la **matrice** |
| **Accepteur final d'électrons** | $\text{NADP}^+$ (ou réactif de Hill artificiel) | $\text{O}_{2}$ (réduit en $\text{H}_2\text{O}$) |

---

### Analyse critique des résultats et limites expérimentales

Dans ces types d'expérimentations in vitro :
1.  **L'intégrité membranaire est cruciale :** Le moindre dommage (osmolarité inadéquate du tampon) provoque une rupture des membranes thylakoïdiennes ou mitochondriales. Si la membrane est perméable aux protons, le gradient $\Delta\mu_{\text{H}^+}$ ne peut s'établir, simulant faussellement un effet "découplant".
2.  **Pureté des fractions isolées :** Une contamination des préparations mitochondriales par des fragments chloroplastiques (ou inversement) fausserait les mesures spectrophotométriques ou oxymétriques.
3.  **Spécificité des inhibiteurs :** Des concentrations trop élevées d'inhibiteurs (comme l'oligomycine ou le FCCP) peuvent avoir des effets secondaires non spécifiques sur d'autres complexes membranaires, d'où l'importance de réaliser des gammes de concentrations (titrations).