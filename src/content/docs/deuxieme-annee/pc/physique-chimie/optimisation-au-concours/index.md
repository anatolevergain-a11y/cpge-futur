---
title: 'Optimisation au concours : Physique-Chimie PC/PC*'
description: 'Les questions incontournables aux concours, les erreurs à éviter et les rédactions modèles de jury.'
sidebar:
  badge:
    text: 'Méthode Concours'
    variant: 'caution'
---

# Guide Officiel du Jury : Optimisation en Physique-Chimie (Filière PC)

En tant que président de jury et concepteur de sujets pour les concours (Mines-Ponts, Centrale-Supélec, CCINP), je vous propose ce guide stratégique. L'objectif n'est pas seulement de savoir résoudre un exercice, mais de comprendre **comment le correcteur distribue les points**. Une copie de concours se lit vite : la rigueur des notations, la justification des hypothèses et la propreté de la rédaction font la différence entre une note honorable ($12/20$) et une note d'admissibilité en école sommitales ($18+/20$).

---

## 🎯 Objectif du module & Exigences des Jurys

La filière PC (Physique-Chimie) se caractérise par l'exigence d'une double compétence : la maîtrise des modèles macroscopiques et microscopiques en physique, et la rigueur thermodynamique et cinétique en chimie. 

Les rapports de jury constatent trop souvent :
1. **L'oubli des unités et des dimensions** dans les applications numériques.
2. **L'absence de vérification des domaines de valadité** des approximations (ex: négliger un terme sans justifier par un ordre de grandeur).
3. **Le manque de rigueur rédactionnelle** dans l'application des théorèmes généraux (bilans d'énergie, de quantité de mouvement, lois de conservation en chimie).

---

## 📌 Question Type 1 : Construction et exploitation d'un diagramme potentiel-pH (Pourbaix) : droites de frontière et corrosion

### 💡 Méthode canonique & Étapes de rédaction
Pour traiter une question de diagramme $E-\text{pH}$ (tracé ou exploitation) :
1. **Écrire la réaction équilibrée** en milieu aqueux en faisant intervenir l'élément considéré, $\text{H}^+$, $\text{H}_2\text{O}$ et les électrons $e^-$.
2. **Appliquer la loi de Nernst** pour exprimer le potentiel de frontière $E$ en fonction du pH et des activités des espèces dissoutes (généralement fixées à $c^0 = 10^{-1} \text{ mol/L}$ ou $10^{-2} \text{ mol/L}$ pour les frontières de prédominance).
3. **Identifier l'équation de la droite** $E = A \cdot \text{pH} + B$. Discuter la pente $A$ ($0$, négative ou positive) et l'ordonnée à l'origine $B$.
4. **Pour la corrosion**, superposer ou utiliser le diagramme de l'eau. Un métal est en domaine de corrosion s'il est thermodynamiquement instable face aux ions $\text{H}^+$ ou $\text{O}_2$ dissous.

### 📋 Exemple de sujet & Rédaction modèle type Concours
*Énoncé type : Tracer la frontière entre le fer solide $\text{Fe}(s)$ et l'ion ferrique $\text{Fe}^{3+}(aq)$ à concentration de trace $C = 10^{-2} \text{ mol/L}$ à $T = 298 \text{ K}$. On donne le potentiel standard $E^\circ(\text{Fe}^{3+}/\text{Fe}) = -0,04 \text{ V}$.*

**Rédaction modèle :**
> **1. Équation de la réaction redox :**
> La réduction de l'ion ferrique en fer métal s'écrit :
> $$\text{Fe}^{3+}(aq) + 3e^- \rightleftharpoons \text{Fe}(s)$$
> 
> **2. Application de la loi de Nernst :**
> À l'équilibre sur la frontière, le potentiel du couple s'exprime par la formule de Nernst :
> $$E = E^\circ(\text{Fe}^{3+}/\text{Fe}) + \frac{0,06}{3} \log\left(\frac{[\text{Fe}^{3+}]}{a_{\text{Fe}}}\right)$$
> L'activité du fer solide étant égale à $1$ ($\text{Fe}(s)$ constituant une phase pure condensée), il vient :
> $$E = E^\circ(\text{Fe}^{3+}/\text{Fe}) + 0,02 \log([\text{Fe}^{3+}])$$
> 
> **3. Application numérique :**
> Avec $E^\circ = -0,04 \text{ V}$ et $[\text{Fe}^{3+}] = 10^{-2} \text{ mol/L}$ :
> $$E = -0,04 + 0,02 \times \log(10^{-2}) = -0,04 - 0,04 = -0,08 \text{ V}$$
> *Remarque de rédaction :* Cette frontière est horizontale (indépendante du pH) car la réaction ne fait intervenir aucun ion $\text{H}^+$ ou $\text{OH}^-$.

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Piège 1 :** Oublier de préciser que l'activité d'un solide ou d'un liquide pur vaut $1$.
- **Piège 2 :** Confondre domaine de **prédominance** (espèces dissoutes) et domaine de **stabilité/existence** (solides).
- **Piège 3 :** Ne pas vérifier si l'eau oxyde ou réduit le métal (oubli des droites de référence de l'eau $H_2O/H_2$ et $O_2/H_2O$).

---

## 📌 Question Type 2 : Étude d'un diagramme de phases binaire liquide-vapeur : théorème des moments et distillation

### 💡 Méthode canonique & Étapes de rédaction
Face à un diagramme $T-\text{composition}$ (isobare) ou $P-\text{composition}$ (isotherme) pour un mélange binaire :
1. **Identifier les courbes limites :** Courbe de buée (le mélange devient 100% vapeur lorsqu'on chauffe) et courbe de rosée (le mélange commence à se condenser).
2. **Déterminer l'état du système** à partir d'un point $(T, z_1)$ ou $(P, z_1)$ où $z_1$ est la fraction molaire globale du constituant 1. Si le point est dans le fuseau, il y a un équilibre diphasé (liquide de composition $x_1$ et vapeur de composition $y_1$).
3. **Appliquer le théorème des moments chimiques** (analogue au levier de mécanique) pour trouver les proportions massiques ou molaires des phases en présence :
   $$\frac{n_{liq}}{n_{vap}} = \frac{y_1 - z_1}{z_1 - x_1}$$

### 📋 Exemple de sujet & Rédaction modèle type Concours
*Énoncé type : Un mélange binaire de fractions molaires globales $z_1 = 0,40$ est porté à une température $T$ telle que le système est dans le domaine diphasé. Par lecture graphique sur la palissade à cette température, on relève la composition du liquide $x_1 = 0,20$ et celle de la vapeur $y_1 = 0,60$. Déterminer la proportion molaire de phase vapeur.*

**Rédaction modèle :**
> **1. Bilan de matière global :**
> Soit $n$ le nombre total de moles, $n_L$ le nombre de moles de phase liquide et $n_V$ le nombre de moles de phase vapeur. On a :
> $$n = n_L + n_V$$
> $$z_1 \cdot n = x_1 \cdot n_L + y_1 \cdot n_V$$
> 
> **2. Utilisation du théorème des moments :**
> En combinant ces deux relations pour éliminer $n$, on obtient l'égalité des moments par rapport au point global $z_1$ :
> $$n_L (z_1 - x_1) = n_V (y_1 - z_1)$$
> La fraction molaire de la phase vapeur $\tau_V$ s'écrit alors :
> $$\tau_V = \frac{n_V}{n} = \frac{z_1 - x_1}{y_1 - x_1}$$
> 
> **3. Application numérique :**
> $$\tau_V = \frac{0,40 - 0,20}{0,60 - 0,20} = \frac{0,20}{0,40} = 0,50$$
> Le système est donc composé de $50\%$ de phase vapeur et $50\%$ de phase liquide en moles.

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Piège 1 :** Inverser $x_1$ (liquide, du côté gauche/pression basse) et $y_1$ (vapeur, du côté droit/pression haute) dans le théorème des moments.
- **Piège 2 :** Confondre fractions molaires et fractions massiques (sauf si explicitement demandé ou si les masses molaires sont égales).
- **Piège 3 :** Oublier d'expliquer le principe de la distillation fractionnée (succession de vaporisations/condensations isobares).

---

## 📌 Question Type 3 : Application des équations de Maxwell dans un conducteur et effet de peau

### 💡 Méthode canonique & Étapes de rédaction
Pour étudier la pénétration d'une onde électromagnétique sinusoïdale dans un milieu conducteur :
1. **Partir des équations de Maxwell locales** dans le milieu (moyen conducteur de conductivité $\gamma$ ou $\sigma$, perméabilité $\mu \approx \mu_0$, permittivité $\varepsilon \approx \varepsilon_0$).
2. **Utiliser l'approximation des régimes quasi-permanents (ARQP)** ou l'équation de conservation de la charge combinée à la loi d'Ohm locale ($\vec{j} = \gamma \vec{E}$).
3. **Établir l'équation de propagation** (équation de Helmholtz) sur le champ électrique $\vec{E}$ ou magnétique $\vec{B}$ en combinant $\vec{\nabla} \wedge (\vec{\nabla} \wedge \vec{E}) = \vec{\nabla}(\vec{\nabla} \cdot \vec{E}) - \Delta \vec{E}$.
4. **Résoudre pour une onde plane progressive sinusoïdale** polarisée rectilignement se propageant selon $\vec{u}_z$ et identifier la longueur caractéristique d'atténuation : **l'épaisseur de peau** $\delta = \sqrt{\frac{2}{\omega \mu \gamma}}$.

### 📋 Exemple de sujet & Rédaction modèle type Concours
*Énoncé type : Établir l'équation différentielle vérifiée par la composante $E_x(z, t)$ d'une onde électromagnétique pénétrant normallement dans un métal conducteur semi-infini occupant le demi-espace $z > 0$. En déduire l'expression de l'effet de peau à pulsation $\omega$.*

**Rédaction modèle :**
> **1. Équations de Maxwell dans le conducteur :**
> En régime harmonique de pulsation $\omega$ (notation complexe $\underline{E} = E_0 e^{j(\omega t - k z)}$), les équations de Maxwell pertinentes sont :
> - Maxwell-Faraday : $\vec{\nabla} \wedge \vec{E} = -\frac{\partial \vec{B}}{\partial t}$
> - Maxwell-Ampère (avec l'A.R.Q.P. conduisant à négliger le courant de déplacement devant le courant de conduction $\vec{j} = \gamma \vec{E}$) : 
>   $$\vec{\nabla} \wedge \vec{B} \approx \mu \vec{j} = \mu \gamma \vec{E}$$
> 
> **2. Établissement de l'équation de Helmholtz :**
> En appliquant l'opérateur rotationnel à l'équation de Maxwell-Faraday :
> $$\vec{\nabla} \wedge (\vec{\nabla} \wedge \vec{E}) = -\frac{\partial}{\partial t}(\vec{\nabla} \wedge \vec{B})$$
> Par l'identité vectorielle $\vec{\nabla} \wedge (\vec{\nabla} \wedge \vec{E}) = \vec{\nabla}(\vec{\nabla} \cdot \vec{E}) - \Delta \vec{E}$ et sachant que dans un conducteur neutre en volume $\vec{\nabla} \cdot \vec{E} = 0$ :
> $$-\Delta \vec{E} = -\mu \gamma \frac{\partial \vec{E}}{\partial t}$$
> 
> **3. Passage en notation complexe et épaisseur de peau :**
> Pour une variation selon $z$ et en régime sinusoïdal ($\partial_t \to j\omega$) :
> $$\frac{\partial^2 \underline{E}_x}{\partial z^2} = j \omega \mu \gamma \underline{E}_x$$
> Posons $\underline{k}^2 = -j \omega \mu \gamma = \omega \mu \gamma e^{-j \pi / 2}$. La solution physique s'atténuant lorsque $z augmente$ s'écrit :
> $$\underline{E}_x(z) = E_0 e^{-\frac{z}{\delta}} e^{-j \frac{z}{\delta}}$$
> avec l'**épaisseur de peau** $\delta$ définie par :
> $$\delta = \sqrt{\frac{2}{\omega \mu \gamma}}$$

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Piège 1 :** Oublier de justifier l'utilisation de l'ARQP (comparaison du courant de conduction $\gamma E$ et du courant de déplacement $\varepsilon_0 \partial_t E$).
- **Piège 2 :** Erreur de signe ou de racine carrée lors du passage du nombre d'onde complexe $\underline{k}$ à l'atténuation réelle en $e^{-z/\delta}$.
- **Piège 3 :** Ne pas être capable de donner un ordre de grandeur de $\delta$ pour le cuivre à $50 \text{ Hz}$ ou à $1 \text{ GHz}$ (réflexe indispensable d'ingénieur physicien attendu aux oraux).