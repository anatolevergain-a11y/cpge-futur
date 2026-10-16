---
title: 'Exercice 1 : Cycle du carbone, de l azote et bilan radiatif de la biosphère'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le réchauffement climatique global est intimement lié à la modification des grands cycles biogéochimiques terrestres, en particulier ceux du carbone ($\text{C}$) et de l'azote ($\text{N}$). La biosphère joue un rôle de puits de carbone partiel, mais ce service écosystémique est fortement contraint par la disponibilité en azote minéral, souvent limitant pour la production primaire nette (PPN).

Dans ce problème, on se propose d'étudier un modèle simplifié à deux compartiments couplés : la biomasse végétale et la matière organique du sol (MOS). On cherchera à évaluer l'impact d'une fertilisation azotée anthropique sur le stockage du carbone et sur le bilan radiatif de la planète via l'effet de serre additionnel.

**Données et constantes biogéochimiques et physiques :**
* Masse molaire du carbone : $M_{\text{C}} = 12\text{ g}\cdot\text{mol}^{-1}$
* Flux annuel de carbone émis par les activités anthropiques : $F_{\text{anthro}} = 10\text{ Gt C}\cdot\text{an}^{-1}$ ($1\text{ Gt} = 10^{15}\text{ g}$).
* Constante solaire : $S_0 = 1361\text{ W}\cdot\text{m}^{-2}$.
* Albédo moyen de la Terre : $a = 0,30$.
* Constante de Stefan-Boltzmann : $\sigma = 5,67 \times 10^{-8}\text{ W}\cdot\text{m}^{-2}\cdot\text{K}^{-4}$.
* Rapport stœchiométrique atomique optimal (Redfield modifié sol/végétation) $\left(\frac{\text{C}}{\text{N}}\right)_{\text{opt}} = 20$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Modélisation du cycle couplé C-N :**
   On considère que la fixation nette du carbone par la végétation (exprimée en flux $F_{\text{PPN}}$) dépend de la disponibilité en azote minéral du sol selon une cinétique de type Michaelis-Menten ou de Liebig. Écrire l'équation différentielle régissant la variation de la quantité de carbone dans la biomasse $C_{\text{veg}}(t)$ en fonction de la photosynthèse, de la respiration autotrophe $R_{\text{auto}}$ et d'un facteur limitant lié au stock d'azote disponible $N_{\text{min}}(t)$.

2. **Calculs d'équilibre et couplage stœchiométrique :**
   À l'état stationnaire pré-industriel, le stock de carbone végétal est noté $C_{\text{veg0}} = 550\text{ Gt C}$ et le temps de résidence moyen du carbone dans la biomasse est $\tau_{\text{veg}} = \frac{C_{\text{veg0}}}{R_{\text{auto0}}} = 10\text{ ans}$. En supposant un flux d'entrée photosynthétique $P_0 = 60\text{ Gt C}\cdot\text{an}^{-1}$, déterminer le flux de respiration autotrophe $R_{\text{auto0}}$ et vérifier l'état d'équilibre. 
   Si l'apport d'azote par les engrais passe à $F_{\text{N-min}} = 150\text{ Tg N}\cdot\text{an}^{-1}$ ($1\text{ Tg} = 10^{12}\text{ g}$), calculez l'augmentation maximale potentielle du stockage de carbone végétal en respectant strictement le ratio stœchiométrique $\left(\frac{\text{C}}{\text{N}}\right)_{\text{opt}}$.

3. **Bilan radiatif et température de surface :**
   En l'absence d'effet de serre, la Terre se comporte comme un corps noir en équilibre radiatif. 
   * Rappeler l'expression de la température d'équilibre radiatif $T_e$ de la Terre en fonction de $S_0$, $a$ et $\sigma$. Effectuer l'application numérique.
   * La température réelle moyenne de surface étant $T_s = 288\text{ K}$, calculer l'intensité du forçage radiatif $\Delta F$ (en $\text{W}\cdot\text{m}^{-2}$) généré par une augmentation de la concentration atmosphérique en $\text{CO}_2$ sachant que le forçage s'exprime par la relation empirique $\Delta F = \alpha \ln\left(\frac{C_{\text{atm}}}{C_{\text{atm,0}}}\right)$, avec $\alpha = 5,35\text{ W}\cdot\text{m}^{-2}$ et $\frac{C_{\text{atm}}}{C_{\text{atm,0}}} = 1,4$ (scénario de doublement partiel).

4. **Analyse critique du modèle :**
   * Discuter des limites de l'hypothèse d'un rapport stœchiométrique $\left(\frac{\text{C}}{\text{N}}\right)$ constant dans les écosystèmes terrestres face à l'enrichissement en $\text{CO}_2$ atmosphérique (phénomène de *nutrient mining* ou "minéralisation forcée").
   * Quel rôle joue la litière et la minéralisation microbienne de l'azote dans la rétroaction du système sol-climat ?

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pensez à relier le flux de sortie de la biomasse (respiration + mortalité/transfert vers le sol) au temps de résidence $\tau$. Introduisez un terme multiplicatif pour la limitation azotée (ex: $\frac{N_{\text{min}}}{K_N + N_{\text{min}}}$ ou une proportionnalité directe si l'on se place en régime strictement limité).
* **Question 2 :** Convertissez bien les unités de masse (Gt vers Tg ou inversement) lors de l'application du ratio $\text{C/N}$ atomique. Attention aux masses molaires ($M_{\text{C}} = 12\text{ g}\cdot\text{mol}^{-1}$ et $M_{\text{N}} = 14\text{ g}\cdot\text{mol}^{-1}$).
* **Question 3 :** Pour le bilan radiatif, n'oubliez pas de diviser la constante solaire par 4 (géométrie de la sphère : surface interceptée $\pi R^2$, surface émissive $4\pi R^2$).
* **Question 4 :** Mobilisez vos connaissances sur la flexibilité stœchiométrique des plantes (*stochiometric flexibility*) et l'immobilisation microbienne de l'azote.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Modélisation du cycle couplé C-N
La variation temporelle du stock de carbone dans la biomasse végétale $C_{\text{veg}}(t)$ s'écrit comme le bilan entre les entrées par photosynthèse brute modulée par la disponibilité en azote et les sorties (respiration autotrophe et mortalité/litière) :
$$\frac{dC_{\text{veg}}}{dt} = P_{\text{max}} \cdot f(N_{\text{min}}) - R_{\text{auto}}(C_{\text{veg}}) - M(C_{\text{veg}})$$
Où $f(N_{\text{min}}) \in [0, 1]$ représente le facteur adimensionnel de limitation par l'azote minéral du sol (souvent modélisé par une fonction de Michaelis-Menten : $f(N_{\text{min}}) = \frac{N_{\text{min}}}{K_N + N_{\text{min}}}$). Les sorties globales de la biomasse vers le sol peuvent être agrégées sous la forme $\frac{C_{\text{veg}}}{\tau_{\text{veg}}}$, ce qui donne :
$$\frac{dC_{\text{veg}}}{dt} = P_0 \cdot \frac{N_{\text{min}}}{K_N + N_{\text{min}}} - \frac{C_{\text{veg}}}{\tau_{\text{veg}}}$$

#### 2. Calculs d'équilibre et couplage stœchiométrique
* **À l'état stationnaire pré-industriel ($dt = 0$) :**
  Le système est en équilibre, donc $\frac{dC_{\text{veg}}}{dt} = 0$. Le flux total entrant équivaut au flux sortant. 
  On a $C_{\text{veg0}} = 550\text{ Gt C}$ et $\tau_{\text{veg}} = 10\text{ ans}$.
  Le flux de sortie global (incluant respiration et transferts) vaut :
  $$\text{Sorties}_0 = \frac{C_{\text{veg0}}}{\tau_{\text{veg}}} = \frac{550\text{ Gt C}}{10\text{ ans}} = 55\text{ Gt C}\cdot\text{an}^{-1}$$
  Puisque $P_0 = 60\text{ Gt C}\cdot\text{an}^{-1}$, la respiration autotrophe seule s'établit à $R_{\text{auto0}} = P_0 - \text{Sorties additionnelles} = 60 - 55 = 5\text{ Gt C}\cdot\text{an}^{-1}$ (ou selon les conventions du cours, si le flux total de sortie est assimilé aux pertes globales).

* **Impact de la fertilisation azotée :**
  L'apport supplémentaire d'azote est $\Delta N_{\text{min}} = 150\text{ Tg N}\cdot\text{an}^{-1} = 0,150\text{ Gt N}\cdot\text{an}^{-1}$.
  Le rapport stœchiométrique optimal massique/atomique doit être converti en masses si nécessaire. L'énoncé donne le ratio atomique $\left(\frac{\text{C}}{\text{N}}\right)_{\text{opt}} = 20$.
  exprimé en masses :
  $$\left(\frac{\text{masses C}}{\text{masses N}}\right)_{\text{opt}} = 20 \times \frac{M_{\text{C}}}{M_{\text{N}}} = 20 \times \frac{12}{14} = 20 \times 0,857 = 17,14$$
  La quantité maximale additionnelle de carbone séquestrée par an grâce à cet azote additionnel est donc :
  $$\Delta C_{\pi} = \Delta N_{\text{min}} \times \left(\frac{\text{masses C}}{\text{masses N}}\right)_{\text{opt}} = 0,150\text{ Gt N}\cdot\text{an}^{-1} \times 17,14 \approx 2,57\text{ Gt C}\cdot\text{an}^{-1}$$
Conclusion: * L'azote additionnel permet théoriquement d'augmenter le puit de carbone végétal de $\approx 2,57\text{ Gt C}\cdot\text{an}^{-1}$, ce qui représente une fraction non négligeable des émissions anthropiques ($10\text{ Gt C}\cdot\text{an}^{-1}$), soulignant le couplage fort entre cycles biogéochimiques.

#### 3. Bilan radiatif et température de surface
* **Température d'équilibre radiatif $T_e$ :**
  L'énergie absorbée par la Terre est égale à l'énergie réémise sous forme de rayonnement infrarouge (loi de Stefan-Boltzmann) :
  $$\pi R_{\text{Terre}}^2 \cdot S_0 \cdot (1 - a) = 4\pi R_{\text{Terre}}^2 \cdot \sigma T_e^4$$
  Soit l'équation simplifiée :
  $$\frac{S_0 (1 - a)}{4} = \sigma T_e^4 \implies T_e = \left( \frac{S_0 (1 - a)}{4\sigma} \right)^{1/4}$$
  *Application numérique :*
  $$T_e = \left( \frac{1361 \times (1 - 0,30)}{4 \times 5,67 \times 10^{-8}} \right)^{1/4} = \left( \frac{1361 \times 0,70}{2,268 \times 10^{-7}} \right)^{1/4} = \left( \frac{952,7}{2,268 \times 10^{-7}} \right)^{1/4}$$
  $$T_e = \left( 4,20 \times 10^9 \right)^{1/4} \approx 255\text{ K}$$
  La température d'équilibre radiatif est de $\approx -18\text{\,}^{\circ}\text{C}$ ($255\text{ K}$).

* **Forçage radiatif $\Delta F$ :**
  Pour $\frac{C_{\text{atm}}}{C_{\text{atm,0}}} = 1,4$ :
  $$\Delta F = 5,35 \times \ln(1,4) = 5,35 \times 0,3365 \approx 1,80\text{ W}\cdot\text{m}^{-2}$$
  Ce forçage positif induit un réchauffement supplémentaire de la surface terrestre par renforcement de l'effet de serre atmosphérique.

#### 4. Analyse critique du modèle
* **Limites de la stœchiométrie fixe :**
  L'hypothèse d'un rapport $\left(\frac{\text{C}}{\text{N}}\right)$ strictement constant est mise en défaut dans la réalité par le phénomène de flexibilité stœchiométrique et de **"nutrient mining"** (épuisement des nutriments). Sous l'effet d'une augmentation du $\text{CO}_2$ atmosphérique (fertilisation carbonée), les plantes ont tendance à accroître leur biomasse en augmentant leur rapport $\text{C/N}$ (tissus plus riches en carbone, ex: cellulose/lignine accrue, baisse de la qualité nutritive pour les herbivores). Par conséquent, l'assimilation réelle de carbone est bien plus faible que ne le prédit un couplage stœchiométrique rigide.
* **Rôle de la litière et rétroaction sol-climat :**
  Lorsque la litière végétale pauvre en azote (haut $\text{C/N}$) tombe au sol, la minéralisation microbienne est ralentie car les décomposeurs manquent d'azote pour structurer leur propre biomasse. Cela entraîne une immobilisation de l'azote dans la matière organique du sol (MOS), réduisant le pool d'azote minéral disponible ($N_{\text{min}}$) pour la végétation l'année suivante. Il s'établit ainsi une boucle de rétroaction négative (stabilisatrice) qui atténue le potentiel de séquestration du carbone à long terme.