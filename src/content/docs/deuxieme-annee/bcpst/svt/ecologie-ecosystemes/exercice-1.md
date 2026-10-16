---
title: 'Exercice 1 : Flux d énergie et cycles biogéochimiques'
description: 'Problème d entraînement type concours pour BCPST.'
---

### 🌐 Énoncé du problème / Étude de cas

Les écosystèmes terrestres sont le siège d'un double flux : un flux d'énergie unidirectionnel (dissipé sous forme de chaleur) et un cycle cyclique de la matière (carbone, azote). L'objectif de ce problème est d'étudier la productivité d'un écosystème forestier tempéré et d'analyser l'impact d'une modification des taux de décomposition sur le cycle global du carbone, à l'aide d'un modèle compartimental simplifié.

On considère un écosystème forestier modélisé par trois compartiments principaux :
1. **La biomasse végétale vivante** (notée $V$) exprimée en $\text{kg C}\cdot\text{m}^{-2}$.
2. **La matière organique morte** (litière et sol superficiel, notée $S$) exprimée en $\text{kg C}\cdot\text{m}^{-2}$.
3. **L'atmosphère** (considérée comme un réservoir infini en termes de concentration de $\text{CO}_2$, mais dont les flux entrants et sortants sont mesurés).

#### Hypothèses et paramètres du modèle :
* Le flux d'entrée du carbone dans l'écosystème correspond à la **Productivité Brute** (PB), fixée par photosynthèse brute. On pose $\text{PB} = \text{PAG} + \text{Respiration autotrophe}$.
* La **Productivité Nette de l'Écosystème** (PNE) est définie par : 
  $$\text{PNE} = \text{PB} - (\text{Respiration autotrophe} + \text{Respiration hétérotrophe})$$
* Soit $R_a$ la respiration autotrophe, $R_h$ la respiration hétérotrophe (due à la décomposition de la matière organique par les micro-organismes du sol), et $L$ le flux de chute de litière de $V$ vers $S$.

Les équations différentielles régissant la dynamique du carbone dans les compartiments $V$ et $S$ sont admises sous la forme :
$$\frac{dV}{dt} = \text{PB} - R_a - L$$
$$\frac{dS}{dt} = L - R_h$$

### ❓ Questions progressives

1. **Restitution des connaissances et définitions** :
   Définir la Productivité Primaire Nette (PPN) et exprimer sa relation avec la Productivité Brute (PB) et la respiration autotrophe ($R_a$). Préciser l'unité usuelle de ces grandeurs.

2. **Mise en équation et régime permanent** :
   En régime permanent (état stationnaire de l'écosystème), exprimer les relations liant $\text{PB}$, $R_a$, $L$ et $R_h$. Que vaut alors la Productivité Nette de l'Écosystème ($\text{PNE}$) ? Justifier.

3. **Application numérique et analyse critique d'ordres de grandeur** :
   On dispose des mesures suivantes pour une hêtraie tempérée :
   * $\text{PB} = 1,20 \text{ kg C}\cdot\text{m}^{-2}\cdot\text{an}^{-1}$
   * $R_a = 0,65 \text{ kg C}\cdot\text{m}^{-2}\cdot\text{an}^{-1}$
   * $L = 0,35 \text{ kg C}\cdot\text{m}^{-2}\cdot\text{an}^{-1}$
   * $R_h = 0,50 \text{ kg C}\cdot\text{m}^{-2}\cdot\text{an}^{-1}$

   a) Calculer la PPN et la PNE de cet écosystème.
   b) L'écosystème est-il un puits ou une source nette de carbone vis-à-vis de l'atmosphère ? Justifier.
   c) **Esprit critique :** Le modèle présenté ici est stationnaire sur de courtes périodes, mais néglige l'exportation de carbone par les cours d'eau (le *runoff* de carbone organique dissous) et les perturbations majeures (tempêtes, incendies). Discutez brièvement de la validité de l'hypothèse d'un réservoir atmosphérique infini et des limites de l'extrapolation de ce modèle à l'échelle de la planète.

4. **Perturbation du cycle et modélisation prospective** :
   Suite à une augmentation de la température moyenne (réchauffement climatique), on observe une modification des paramètres cinétiques : la respiration hétérotrophe est augmentée de $20\%$, tandis que la PB reste inchangée ($R_a$ et $L$ supposés constants à court terme).
   
   a) Calculer la nouvelle valeur de la PNE.
   b) Quel est l'impact qualitatif et quantitatif de cette perturbation sur le rôle climatique de la forêt (puits vs source) ?

---

### 💡 Pistes & Indications

* **Q1 :** Pensez à la distinction entre l'énergie totale fixée par photosynthèse et l'énergie réellement stockée sous forme de biomasse végétale après déduction des pertes respiratoires de la plante elle-même.
* **Q2 :** "Régime permanent" signifie que les stocks $V$ et $S$ ne varient pas au cours du temps ($\frac{dV}{dt} = 0$ et $\frac{dS}{dt} = 0$).
* **Q3 :** Pour la PNE, partez de la définition littérale avec les flux entrants et sortants globaux. Un écosystème dont le stockage net de carbone est positif est un puits de carbone.
* **Q4 :** Calculez la nouvelle valeur de $R_h$ puis réinjectez-la dans l'expression de la PNE.

---

### 📋 Corrigé détaillé et analyse des résultats

1. **Définition de la PPN :**
   La Productivité Primaire Nette ($\text{PPN}$) correspond à la quantité de carbone fixée par photosynthèse (Productivité Brute, $\text{PB}$) moins la quantité de carbone respirée par les autotrophes pour leur propre métabolisme ($R_a$).
   $$\text{PPN} = \text{PB} - R_a$$
   *Unité :* $\text{kg C}\cdot\text{m}^{-2}\cdot\text{an}^{-1}$ (ou $\text{g C}\cdot\text{m}^{-2}\cdot\text{j}^{-1}$).

2. **Régime permanent :**
   En régime permanent, les dérivées temporelles des stocks sont nulles : $\frac{dV/dt} = 0$ et $\frac{dS/dt} = 0$.
   D'après les équations du modèle :
   * $\text{PB} - R_a - L = 0 \implies \text{PPN} = L$
   * $L - R_h = 0 \implies L = R_h$
   
   Par conséquent, on a l'égalité globale : $\text{PB} = R_a + R_h$.
   La Productivité Nette de l'Écosystème ($\text{PNE}$) s'écrit :
   $$\text{PNE} = \text{PB} - (R_a + R_h) = 0$$
   *Interprétation :* L'écosystème est à l'équilibre neutre ; il ne stocke plus de carbone net à long terme, tout le carbone fixé est restitué à l'atmosphère par respiration.

3. **Application numérique et analyse critique :**
   a) Calculs :
   * $\text{PPN} = \text{PB} - R_a = 1,20 - 0,65 = 0,55 \text{ kg C}\cdot\text{m}^{-2}\cdot\text{an}^{-1}$.
   * $\text{PNE} = \text{PB} - (R_a + R_h) = 1,20 - (0,65 + 0,50) = 1,20 - 1,15 = +0,05 \text{ kg C}\cdot\text{m}^{-2}\cdot\text{an}^{-1}$.

   b) **Bilan net :** La PNE est strictement positive ($\text{PNE} > 0$). Cela signifie que l'écosystème absorbe plus de carbone qu'il n'en rejette : il constitue un **puits net de carbone** pour l'atmosphère.

   c) **Analyse critique et limites du modèle :**
   * *Réservoir atmosphérique :* L'hypothèse d'un réservoir atmosphérique infini est valable pour une parcelle forestière locale (car les flux locaux n'ont pas d'effet mesurable global immédiat), mais elle devient caduque à l'échelle planétaire où les rétroactions climatiques opèrent.
   * *Omissions biogéochimiques :* Le modèle néglige les exportations par lessivage (carbone organique dissous, $COD$ vers les rivières) et les perturbations stochastiques (feux de forêts, coupes sylvicoles, attaques parasitaires) qui transforment brutalement la forêt en source massive de $\text{CO}_2$.
   * *Non-stationnarité :* À l'échelle séculaire, les forêts anciennes (climax) tendent vers $\text{PNE} \approx 0$, contredisant l'idée d'un stockage infini.

4. **Perturbation par le réchauffement climatique :**
   a) Nouvelle respiration hétérotrophe : 
   $$R_{h,\text{nouv}} = 1,20 \times R_{h,\text{init}} = 1,20 \times 0,50 = 0,60 \text{ kg C}\cdot\text{m}^{-2}\cdot\text{an}^{-1}$$
   
   Calcul de la nouvelle PNE :
   $$\text{PNE}_{\text{nouv}} = \text{PB} - (R_a + R_{h,\text{nouv}}) = 1,20 - (0,65 + 0,60) = 1,20 - 1,25 = -0,05 \text{ kg C}\cdot\text{m}^{-2}\cdot\text{an}^{-1}$$

   b) **Impact qualitatif :** 
   La PNE devient négative. L'écosystème, initialement puits de carbone, bascule et devient une **source nette de carbone** pour l'atmosphère. 
   *Rétroaction écologique :* Ce phénomène illustre une boucle de rétroaction positive (*positive feedback*) du changement climatique : l'augmentation des températures stimule l'activité microbienne du sol plus rapidement que la photosynthèse, accélérant la libération de $\text{CO}_2$ et amplifiant à son tour le réchauffement global.