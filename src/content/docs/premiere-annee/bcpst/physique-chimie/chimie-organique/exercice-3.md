---
title: 'Exercice 1 : Stéréochimie et chiralité'
description: 'Problème d entraînement type concours pour BCPST.'
---

### 🌐 Énoncé du problème / Étude de cas

La stéréochimie joue un rôle fondamental en chimie organique, en particulier dans l'industrie pharmaceutique et agrochimique où l'activité biologique d'une molécule dépend souvent de sa configuration absolue. 

On s'intéresse ici à la synthèse et à l'analyse structurale d'un composé $\mathbf{A}$, le 2-aminopropanoate d'éthyle, un dérivé d'acide aminé (l'alanine). Ce composé possède un carbone asymétrique, ce qui confère au système des propriétés chirales. 

Dans le cadre d'un contrôle de qualité en laboratoire, on souhaite analyser un lot de ce composé, évaluer sa pureté énantiomérique et discuter de l'impact de la chiralité sur son interaction avec des récepteurs biologiques cibles. On fait l'hypothèse de modélisation que le milieu réactionnel obéit à des lois cinétiques idéales du premier ordre lors des étapes de dédoublement, et que les interactions stériques au sein du récepteur biologique peuvent être modélisées par un modèle rigide clé-serrure.

---

### ❓ Questions progressives

1. **Représentation et configuration**
   Donner la structure topologique du 2-aminopropanoate d'éthyle $\mathbf{A}$. Représenter l'énantiomère $(S)\text{-\mathbf{A}}$ selon la projection de Cram.

2. **Détermination de la configuration absolue**
   Appliquer les règles de Cahn, Ingold et Prelog (CIP) pour attribuer la configuration absolue ($R$ ou $S$) du carbone asymétrique de la molécule $\mathbf{A}$ dont le groupement amino $-\text{NH}_2$ est orienté vers l'avant en représentation de Cram, le groupement $-\text{COOH}$ (estérifié) en haut, le groupe $-\text{CH}_3$ en bas à droite, et l'hydrogène $-\text{H}$ en arrière. Détailler l'ordre de priorité des substituants.

3. **Propriétés optiques et analyse quantitative**
   Un échantillon de masse $m = 1{,}00\text{ g}$ de composé $\mathbf{A}$ pur à $100\%$ de l'énantiomère $S$ est dissous dans l'eau distillée pour obtenir un volume $V = 10\text{ mL}$. La solution est introduite dans une cuve polarimétrique de longueur $l = 1\text{ dm}$ à $T = 25\text{ }\,^\circ\text{C}$ (raie D du sodium). L'angle de rotation optique mesuré est $\alpha = +0{,}85^\circ$.
   Calculer le pouvoir rotatoire spécifique $[\alpha]_\text{D}^{25}$ de ce composé.

4. **Excès énantiomérique et mélange racémique**
   On analyse un second échantillon provenant d'une synthèse asymétrique imparfaite. Le pouvoir rotatoire mesuré est $\alpha_{\text{mes}} = +0{,}34^\circ$ dans les mêmes conditions expérimentales.
   Définir l'excès énantiomérique ($\text{ee}$) et le calculer pour cet échantillon. En déduire la composition centésimale en énantiomères $(R)$ et $(S)$.

5. **Analyse critique du modèle biologique et limites**
   En pharmacologie, l'un des énantiomères est souvent actif (eudesmique) tandis que l'autre est inactif ou toxique ( dystérique). Discuter brièvement des limites du modèle de modélisation rigide ("clé-serrure") pour expliquer l'interaction stéréospécifique entre l'énantiomère $(S)\text{-\mathbf{A}}$ et un récepteur protéique chiral. Proposer une amélioration du modèle thermodynamique/structural.

---

### 💡 Pistes & Indications

- **Q1 & Q2** : Rappelez-vous que les numéros atomiques ($Z$) déterminent la priorité CIP ($Z(\text{N}) > Z(\text{C}) > Z(\text{H})$). Veillez à placer le groupement de plus faible priorité à l'arrière pour lire directement la configuration.
- **Q3** : La loi de Biot relie l'angle mesuré $\alpha$, la concentration massique $c$ (en $\text{g}\cdot\text{mL}^{-1}$ ou $\text{g}\cdot\text{dm}^{-3}$ selon les conventions, attention aux unités !) et la longueur $l$ (en $\text{dm}$).
- **Q4** : L'excès énantiomérique se calcule par le rapport des pouvoirs rotatoires : $\text{ee} = \frac{[\alpha]_{\text{mes}}}{[\alpha]_{\text{pur}}} \times 100$.
- **Q5** : Pensez à la flexibilité conformationnelle des macromolécules biologiques (modèle de l'ajustement induit ou *induced fit*).

---

### 📋 Corrigé détaillé et analyse des résultats

1. **Représentation topologique et de Cram**
   La formule semi-développée du 2-aminopropanoate d'éthyle est :
   $$\text{CH}_3-\text{CH}(\text{NH}_2)-\text{COO}-\text{CH}_2-\text{CH}_3$$
   Le carbone asymétrique est le C2 portant le groupement $-\text{NH}_2$. L'énantiomère $(S)$ se représente en Cram en plaçant les liaisons dans le plan, en avant et en arrière.

2. **Application des règles CIP**
   Les quatre groupes liés au carbone asymétrique sont :
   - $-\text{NH}_2$ ($Z = 7$ pour l'azote) $\rightarrow$ **Priorité 1**
   - $-\text{COOCH}_2\text{CH}_3$ (carbone lié à $(\text{O}, \text{O}, \text{O})$ par double et simple liaison) $\rightarrow$ **Priorité 2**
   - $-\text{CH}_3$ (carbone lié à $(\text{H}, \text{H}, \text{H})$) $\rightarrow$ **Priorité 3**
   - $-\text{H}$ ($Z = 1$) $\rightarrow$ **Priorité 4**
   
   En suivant l'ordre décroissant des priorités $1 \rightarrow 2 \rightarrow 3$, si le groupement 4 ($-\text{H}$) est bien à l'arrière, un sens horaire donne $R$ et antihoraire donne $S$. D'après l'énoncé, si le parcours $1 \rightarrow 2 \rightarrow 3$ se fait dans le sens anti-trigonométrique (antihoraire), la configuration est **$(S)$**.

3. **Calcul du pouvoir rotatoire spécifique**
   La loi de Biot s'exprime par :
   $$[\alpha]_\text{D}^{25} = \frac{\alpha}{l \cdot c}$$
   - $\alpha = +0{,}85^\circ$
   - $l = 1\text{ dm}$
   - $c = \frac{m}{V} = \frac{1{,}00\text{ g}}{10\text{ mL}} = 0{,}100\text{ g}\cdot\text{mL}^{-1} = 100\text{ g}\cdot\text{dm}^{-3}$ (attention à exprimer $c$ en $\text{g}\cdot\text{dm}^{-3}$ pour les unités usuelles du pouvoir rotatoire en $\text{deg}\cdot\text{dm}^{-1}\cdot\text{g}^{-1}\cdot\text{cm}^3$). Exprimons $c$ en $\text{g}\cdot\text{cm}^{-3}$ : $c = \frac{1{,}00}{10} = 0{,}100\text{ g}\cdot\text{cm}^{-3}$.
   
   Alors :
   $$[\alpha]_\text{D}^{25} = \frac{0{,}85}{1 \times 0{,}100} = +8{,}5\text{ }\text{deg}\cdot\text{dm}^{-1}\cdot\text{g}^{-1}\cdot\text{cm}^3$$

4. **Excès énantiomérique**
   L'excès énantiomérique se calcule ainsi :
   $$\text{ee} = \frac{[\alpha]_{\text{mes}}}{[\alpha]_{\text{pur}}} \times 100 = \frac{+0{,}34}{+0{,}85} \times 100 = 40\,\%$$
   Cela signifie que le mélange contient un excès de $40\%$ de l'énantiomère majoritaire par rapport au racémique. 
   Si l'on note $x_S$ et $x_R$ les fractions molaires respectives :
   $$\text{ee} = x_S - x_R = 0{,}40$$
   Avec $x_S + x_R = 1$, on obtient :
   $$2x_S = 1{,}40 \implies x_S = 0{,}70 \text{ (soit } 70\,\%\text{)}$$
   $$x_R = 0{,}30 \text{ (soit } 30\,\%\text{)}$$
   Le mélange est composé de $70\%$ de l'énantiomère $(S)$ et de $30\%$ de l'énantiomère $(R)$.

5. **Analyse critique et limites du modèle**
   * **Limites du modèle rigide ("clé-serrure")** : Les protéines réceptrices ne sont pas des structures cristallines rigides. Elles possèdent une flexibilité conformationnelle inhérente et subissent des modifications induites lors de la fixation du ligand (modèle de l'ajustement induit de Koshland). De plus, l'environnement solvant (eau, liaisons hydrogène) modifie les barrières d'activation.
   * **Amélioration du modèle** : Il convient d'utiliser la modélisation moléculaire par dynamique moléculaire (MM/MD) ou la théorie de la fonctionnelle de la densité (DFT) pour évaluer l'énergie libre de Gibbs d'interaction $\Delta G^\circ$ pour chaque diastéréoisomère transitoire formé entre le récepteur chiral et les deux énantiomères du ligand, en incluant explicitement les molécules de solvant.