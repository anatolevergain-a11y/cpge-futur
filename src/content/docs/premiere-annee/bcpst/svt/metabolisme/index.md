---
title: 'Cours : Métabolisme énergétique'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Le Métabolisme Énergétique (BCPST 1ère année)

---

## Introduction & Définitions

Le **métabolisme énergétique** désigne l'ensemble des réactions biochimiques, couplées et régulées, permettant à la cellule de convertir l'énergie des nutriments ou de la lumière en une forme utilisable pour le travail cellulaire, principalement l'adénosine triphosphate (ATP).

> **Définition (Métabolisme, Anabolisme, Catabolisme) :**
> *   **Catabolisme :** Ensemble des voies de dégradation de molécules complexes (nutriments) en molécules plus simples, s'accompagnant d'une production d'énergie (exergonique, couplée à la synthèse d'ATP et de transporteurs réduits).
> *   **Anabolisme :** Ensemble des voies de biosynthèse de molécules complexes à partir de précurseurs simples, nécessitant un apport d'énergie (endergonique, consommatrices d'ATP et de pouvoir réducteur).

> **Définition (Trophisme énergétique) :**
> Les organismes vivants sont classés selon :
> *   Leur source de carbone : *Autotrophes* ($\text{CO}_2$) ou *Hétérotrophes* (carbone organique).
> *   Leur source d'énergie : *Phototrophes* (lumière) ou *Chimiotrophes* (oxydation de composés chimiques).
> *   Leur donneur d'électrons : *Lithotrophes* (composés inorganiques) ou *Organotrophes* (composés organiques).

---

## I. Les grands axes du catabolisme énergétique hétérotrophe

Le catabolisme du glucose (modèle standard en BCPST) se déroule en plusieurs étapes clés : la glycolyse, le cycle de Krebs (dans la matrice mitochondriale) et la phosphorylation oxydative (au niveau de la membrane interne mitochondriale).

### 1. La Glycolyse (Cytosol)

Oxydation partielle du glucose ($\text{C}_6\text{H}_{12}\text{O}_6$) en deux molécules de pyruvate ($\text{C}_3\text{H}_4\text{O}_3$).

*   **Bilan global :**
    $$\text{Glucose} + 2\text{ Pi} + 2\text{ ADP} + 2\text{ NAD}^+ \rightarrow 2\text{ Pyruvate} + 2\text{ ATP} + 2\text{ NADH, H}^+ + 2\text{ H}_2\text{O}$$
*   **Étapes clés à connaître :**
    *   *Phase d'investissement énergétique :* Phosphorylation du glucose en Glucose-6-Phosphate (G6P) par l'hexokinase, puis isomérisation, puis phosphorylation en Fructose-1,6-bisphosphate par la **phosphofructokinase-1 (PFK-1)**, enzyme clé de régulation allostérique.
    *   *Phase de restitution :* Scission en trioses phosphates et oxydation couplée à une phosphorylation à l'substrat (production d'ATP).

### 2. Du Pyruvate à l'Acétyl-Coenzyme A (Matrice mitochondriale)

Le pyruvate pénètre dans la mitochondrie (via une pyruvate translocase). Il subit une décarboxylation oxydative catalysée par le complexe de la **pyruvate déshydrogénase (PDH)**.

*   **Bilan :**
    $$\text{Pyruvate} + \text{CoA-SH} + \text{NAD}^+ \rightarrow \text{Acétyl-CoA} + \text{CO}_2 + \text{NADH, H}^+$$

### 3. Le Cycle de Krebs (Cycle de l'acide citrique)

L'acétyl-CoA ($\text{C}_2$) fusionne avec l'oxaloacétate ($\text{C}_4$) pour former du citrate ($\text{C}_6$). Le cycle comporte 8 réactions enzymatiques aboutissant à la régénération de l'oxaloacétate et à l'oxydation complète des carbones en $\text{CO}_2$.

*   **Bilan par tour (pour 1 acétyl-CoA) :**
    $$\text{Acétyl-CoA} + 3\text{ NAD}^+ + \text{FAD} + \text{GDP} + \text{Pi} + 2\text{ H}_2\text{O} \rightarrow 2\text{ CO}_2 + 3\text{ NADH, H}^+ + \text{FADH}_2 + \text{GTP} + \text{CoA-SH}$$

---

## II. Théorème : La Phosphorylation Oxydative et la théorie chimio-osmotique de Mitchell

> **Théorème (Couplage chimio-osmotique - Peter Mitchell, 1961) :**
> L'énergie libre libérée par le transfert d'électrons le long de la chaîne respiratoire mitochondriale est convertie en un gradient électrochimique de protons ($\text{H}^+$) de part et d'autre de la membrane interne. Ce gradient est le moteur thermodynamique de la synthèse d'ATP par l'ATP synthase.

### 1. La Chaîne Respiratoire (CR)
Constituée de 4 complexes multiprotéiques membranaires (I à IV) et de transporteurs mobiles (Ubiquinone / Coenzyme Q, et Cytochrome c).
*   **Donneurs d'électrons :** $\text{NADH, H}^+$ (entre au Complexe I) et $\text{FADH}_2$ (entre au Complexe II).
*   **Accepteur final :** Le dioxygène ($\text{O}_2$), réduit en $\text{H}_2\text{O}$ au niveau du Complexe IV.
*   **Pompage de protons :** Les complexes I, III et IV agissent comme des pompes à protons, expulsant les $\text{H}^+$ de la matrice vers l'espace intermembranaire. Le complexe II ne pompe pas de protons.

### 2. Force Proton-Motrice ($\Delta p$)
La force proton-motrice est définie par :
$$\Delta p = \Delta \Psi - \frac{2,3 RT}{F} \Delta \text{pH}$$
où $\Delta \Psi$ est le potentiel de membrane (positif à l'extérieur) et $\Delta \text{pH}$ le gradient de concentration en protons.

### 3. L'ATP Synthase (Complexe V)
Moteur moléculaire rotor. Le flux de protons de l'espace intermembranaire vers la matrice (sens favorable) induit la rotation de la sous-unité $c$ et entraîne la phosphorylation conformationnelle de l'ADP en ATP au niveau des sous-unités $\beta$ de la tête catalytique $F_1$.

> **Rendement énergétique théorique :**
> *   1 $\text{NADH, H}^+$ permet la synthèse d'environ $2,5$ ATP.
> *   1 $\text{FADH}_2$ permet la synthèse d'environ $1,5$ ATP.
> *   Bilan total pour 1 mole de glucose oxydée intégralement : environ $30$ à $32$ moles d'ATP (selon les navettes cytosoliques).

---

## III. Le métabolisme autotrophe : La Photosynthèse (Chloroplastes)

Chez les végétaux chlorophylliens, la conversion de l'énergie lumineuse en énergie chimique se fait en deux phases couplées.

### 1. Phase photochimique (Réactions claires - Thylakoïdes)
*   **Excitation des pigments (Chl $a$) et oxydation de l'eau (Photolyse) :**
    $$2\text{ H}_2\text{O} \rightarrow \text{O}_2 + 4\text{ H}^+ + 4\text{ e}^-$$
*   **Schéma $Z$ de la photosynthèse :** Fonctionnement en série du Photosystème II (PSII, $\text{P}680$) et du Photosystème I (PSI, $\text{P}700$).
*   **Photophosphorylation :** Création d'un gradient de protons (cette fois, du stroma vers la lumen du thylakoïde) entraînant une ATP synthase thylakoïdienne, et réduction du $\text{NADP}^+$ en $\text{NADPH, H}^+$ par la ferrédoxine-NADP-réductase.

### 2. Phase non photochimique (Réactions sombres - Cycle de Calvin dans le Stroma)
Fixation et réduction du $\text{CO}_2$ en trioses-phosphates.
*   **Étape clé :** La carboxylation du Ribulose-1,5-bisphosphate ($\text{RuBP}$) par le $\text{CO}_2$, catalysée par la **Rubisco** (Ribulose-1,5-bisphosphate carboxylase/oxygénase).
*   Consomme l'ATP et le $\text{NADPH, H}^+$ produits lors de la phase photochimique.

---

## IV. Méthodes et Savoir-Faire en BCPST

> **Méthode : Résoudre un exercice de couplage métabolique (Action de toxines / poisons)**
> 1.  **Identifier la cible :** S'agit-il de la chaîne respiratoire (complexes), de l'ATP synthase, ou de la membrane (ex: agents découplants) ?
> 2.  **Analyser l'impact sur le gradient :** 
>     *   Si blocage de la chaîne respiratoire : arrêt du pompage $\rightarrow$ effondrement du gradient de $\text{H}^+$ $\rightarrow$ arrêt de l'ATP synthase.
>     *   Si blocage de l'ATP synthase (ex: Oligomycine) : accumulation de $\text{H}^+$ dans l'espace intermembranaire ($\Delta p$ maximal) $\rightarrow$ blocage rétrograde de la chaîne respiratoire par manque de substrats ($\text{H}^+$).
>     *   Si agent découplant (ex: 2,4-Dinitrophénol / DNP) : molécule lipophile qui transporte les $\text{H}^+$ à travers la membrane sans passer par l'ATP synthase $\rightarrow$ effondrement du $\Delta p$, la chaîne respiratoire s'emballe (consommation d' $\text{O}_2$ continue), mais l'énergie est dissipée sous forme de chaleur.

---

## V. Pièges à Éviter (Classiques de Concours)

1.  **Confondre substrat et coenzyme :** Le $\text{NAD}^+$ est un coenzyme (transporteur d'électrons mobile), pas un substrat énergétique direct. Il doit impérativement être régénéré (par la chaîne respiratoire en aérobiose, ou par la fermentation en anaérobiose).
2.  **Oublier la compartimentation :** Ne jamais oublier que la glycolyse est *cytosolique*, tandis que le cycle de Krebs est *matriciel* (mitochondrial). Le passage du pyruvate du cytosol vers la matrice nécessite des transporteurs spécifiques.
3.  **Le rapport P/O :** Ne pas assumer des valeurs d'ATP fixes et dogmatiques. Les rendements ($2,5$ ou $3$ ATP par NADH) dépendent des navettes de transport des équivalents réduits (navette malate-aspartate vs glycérol-3-phosphate).
4.  **Attention à la stœchiométrie de la Rubisco :** La Rubisco est une enzyme très lente et sujette à une réaction parasite (la photorespiration en présence d' $\text{O}_2$), ce qui diminue le rendement photosynthétique des plantes en $\text{C}_3$ sous forte température/luminosité.