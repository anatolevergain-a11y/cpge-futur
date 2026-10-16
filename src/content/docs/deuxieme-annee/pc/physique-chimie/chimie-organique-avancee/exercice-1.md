---
title: 'Exercice 1 : Substitutions nucléophiles et éliminations'
description: 'Problème d entraînement type concours pour PC.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la synthèse d'intermédiaires pharmaceutiques à haute valeur ajoutée, l'industrie chimique cherche à optimiser la sélectivité de réactions de substitution nucléophile ($\text{S}_\text{N}$) et d'élimination ($\text{E}$). On s'intéresse ici à la réactivité du 2-bromo-2-méthylpropane (bromure de tert-butyle) et du 1-bromobutane vis-à-vis de différents nucléophiles/bases, dans des conditions opératoires variées.

L'objectif de ce problème est d'analyser les facteurs cinétiques et thermodynamiques régissant la compétition entre $\text{S}_\text{N}1$, $\text{S}_\text{N}2$, $\text{E}1$ et $\text{E}2$, en tenant compte des effets stériques, électroniques et du milieu réactionnel (rôle de la solvatation).

---

### ❓ Questions progressives

1. **Analyse structurale des substrats**
   Donner les formules semi-développées du 2-bromo-2-méthylpropane (substrat $A$) et du 1-bromobutane (substrat $B$). Classer ces substrats selon leur degré de substitution et formuler une hypothèse quant à leur réactivité privilégiée vis-à-vis d'un réactif nucléophile/basique.

2. **Étude cinétique du substrat $A$**
   Le substrat $A$ est mis en solution dans un mélange acétone/eau en présence d'ion hydroxyde $\text{HO}^-$ à $25\,^\circ\text{C}$. 
   - Écrire le bilan de la réaction menant au produit organique majoritaire.
   - Proposer un mécanisme réactionnel détaillé en justifiant chaque étape.
   - Quelle est l'expression de la vitesse initiale de formation du produit si l'on suppose l'étape d'ionisation cinétiquement déterminante ? Discuter de la validité de cette hypothèse si la concentration en $\text{HO}^-$ est très élevée.

3. **Compétition $\text{S}_\text{N}/\text{E}$ pour le substrat $B$**
   Le 1-bromobutane ($B$) réagit avec l'éthanol $\text{CH}_3\text{CH}_2\text{OH}$ à $25\,^\circ\text{C}$.
   - Identifier la nature du réactif (nucléophile ou base, protique ou aprotique).
   - Écrire le mécanisme et le bilan de la réaction principale.
   - Pourquoi la voie $\text{S}_\text{N}1$ est-elle thermodynamiquement et cinétiquement défavorisée pour ce substrat ?

4. **Influence de la base et de la température sur le substrat $A$**
   On traite le substrat $A$ par le tert-butanolate de potassium $\text{(CH}_3\text{)_3CO}^- \text{K}^+$ dans le tert-butanol à chaud ($50\,^\circ\text{C}$).
   - Quel est le produit organique majoritaire formé ? Justifier par un raisonnement stérique et électronique.
   - Quel est le type de mécanisme mis en jeu ($\text{E}1$ ou $\text{E}2$) ?

5. **Analyse critique des modèles et limites industrielles**
   Dans les conditions de l'industrie verte, on cherche à minimiser l'utilisation de solvants halogénés ou toxiques (comme l'acétone) et à réduire l'empreinte énergétique. 
   - Discuter des limites de l'utilisation de modèles cinétiques établis en phase homogène diluée lorsqu'on les applique à des réacteurs industriels polyphasiques ou en milieu très concentré.
   - Quel paramètre thermodynamique, souvent négligé dans les exercices académiques simples, doit impérativement être pris en compte lors du dimensionnement d'un réacteur à l'échelle pilote ?

---

### 💡 Pistes & Indications

- **Question 1 :** Penser à l'encombrement stérique autour du carbone portant l'atome de brome et à la stabilité des carbocations intermédiaires.
- **Question 2 :** Le substrat $A$ est tertiaire. La liaison $\text{C-Br}$ est polarisée. Le solvant (mélange eau/acétone) est polaire protique/aprotique, favorisant la dissociation ionique.
- **Question 3 :** Le 1-bromobutane est un halogénoalcane primaire. Pas de formation de carbocation stable possible.
- **Question 4 :** L'ion tert-butanolate est une base forte et encombrée. Elle ne peut jouer le rôle de nucléophile efficace mais arrache aisément un proton.
- **Question 5 :** Penser aux effets thermiques (réactions exothermiques/endothermiques), aux problèmes de transfert de matière et de chaleur dans les grands volumes.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Analyse structurale des substrats
- Substrat $A$ (2-bromo-2-méthylpropane) : $\text{(CH}_3\text{)}_3\text{C-Br}$. C'est un halogénoalcane **tertiaire**.
- Substrat $B$ (1-bromobutane) : $\text{CH}_3\text{CH}_2\text{CH}_2\text{CH}_2\text{Br}$. C'est un halogénoalcane **primaire**.

*Hypothèse de réactivité :* Le substrat $A$, très encombré stériquement, défavorise les attaques frontales ou par l'arrière ($\text{S}_\text{N}2$ / $\text{E}2$) mais stabilise remarquablement bien le carbocation intermédiaire par effet inductif (+I) et hyperconjugaison, favorisant $\text{S}_\text{N}1/\text{E}1$. À l'inverse, le substrat $B$, peu encombré, est idéal pour une substitution nucléophile bimoléculaire ($\text{S}_\text{N}2$).

#### 2. Étude cinétique du substrat $A$
- **Bilan :** 
  $$\text{(CH}_3\text{)}_3\text{C-Br} + \text{HO}^- \xrightarrow{\text{solvant}} \text{(CH}_3\text{)_3C-OH} + \text{Br}^-$$
- **Mécanisme ($\text{S}_\text{N}1$) :**
  1. *Étape 1 (lente, cinétiquement déterminante) :* Dissociation hétérolytique de la liaison $\text{C-Br}$ menant au carbocation tert-butyle plan et à l'ion bromure.
     $$\text{(CH}_3\text{)}_3\text{C-Br} \rightleftharpoons \text{(CH}_3\text{)_3C}^+ + \text{Br}^-$$
  2. *Étape 2 (rapide) :* Attaque du nucléophile $\text{HO}^-$ sur le carbocation électrophile.
     $$\text{(CH}_3\text{)_3C}^+ + \text{HO}^- \rightarrow \text{(CH}_3\text{)_3C-OH}$$
- **Expression de la vitesse :** Si l'étape 1 est limitante, l'application de l'approximation des états quasi-stationnaires (AEQS) sur le carbocation conduit à :
  $$v = k_1 [\text{(CH}_3\text{)}_3\text{C-Br}]$$
Discussion: * La vitesse est d'ordre 1 et indépendante de la concentration en $\text{HO}^-$. Cependant, si $[\text{HO}^-]$ devient extrêmement élevée, la sélectivité peut changer ou l'étape 2 peut ne plus être instantanée devant le retour en arrière (principe d'inversion microscopique), modifiant la loi de vitesse apparente.

#### 3. Compétition $\text{S}_\text{N}/\text{E}$ pour le substrat $B$
- **Nature du réactif :** L'éthanol $\text{CH}_3\text{CH}_2\text{OH}$ est un solvant protique polaire, faible nucléophile et base faible.
- **Mécanisme et bilan :** Le 1-bromobutane réagit selon une cinétique $\text{S}_\text{N}2$ (ou solvolyse lente si chauffé longtemps, mais ici à $25\,^\circ\text{C}$, la $\text{S}_\text{N}2$ par l'éthanol est très lente). Le bilan de la solvolyse donne l'éthoxybutane :
  $$\text{CH}_3\text{CH}_2\text{CH}_2\text{CH}_2\text{Br} + \text{CH}_3\text{CH}_2\text{OH} \rightarrow \text{CH}_3\text{CH}_2\text{CH}_2\text{CH}_2\text{-O-CH}_2\text{CH}_3 + \text{H}^+\text{Br}^-$$
- **Défaveur de la $\text{S}_\text{N}1$ :** La formation d'un carbocation primaire $\text{CH}_3\text{CH}_2\text{CH}_2\text{CH}_2^+$ est énergétiquement proscrite en raison de sa très grande instabilité (absence de stabilisation inductive suffisante et encombrement stérique minimal n'aidant pas à la polarisabilité, bien que le solvant aide). L'énergie d'activation $\Delta G^\ddagger$ associée est prohibitive.

#### 4. Influence de la base et de la température sur le substrat $A$
- **Produit majoritaire :** Le 2-méthylpropène $\text{CH}_2=\text{C(CH}_3\text{)}_2$.
- **Justification :** L'ion tert-butanolate $\text{(CH}_3\text{)_3CO}^-$ est une base forte et très encombrée. Son encombrement stérique empêche toute attaque nucléophile sur le carbone tétragonal (voie $\text{S}_\text{N}$). En revanche, sa basicité élevée lui permet d'arracher un proton périphérique (élimination).
- **Mécanisme :** Il s'agit d'une élimination bimoléculaire ($\text{E}2$) concertée, favorisée par une base forte et encombrée, bien que le substrat soit tertiaire. (Note : une élimination $\text{E}1$ est également possible dans ces conditions, mais la forte concentration en base forte favorise la cinétique de type $\text{E}2$).

#### 5. Analyse critique des modèles et limites industrielles
- **Limites du modèle cinétique homogène :** Les lois de vitesse en $k[\text{Substrat}]$ ou $k[\text{Substrat}][\text{Base}]$ supposent un milieu idéal, parfaitement agité, monophasique et isotherme. À l'échelle industrielle :
  - L'apparition de sels (comme $\text{KBr}$) modifie la force ionique du milieu, ce qui peut affecter les coefficients d'activité des ions (effet de sel primaire et secondaire).
  - Des problèmes de relargage ou de précipitation peuvent rendre le milieu hétérogène, invalidant les hypothèses de cinétique homogène.
- **Paramètre thermodynamique crucial :** Les réactions d'élimination et de substitution sont souvent fortement exothermiques ($\Delta_r H^\circ < 0$). À l'échelle pilote ou industrielle, l'évacuation de la puissance thermique ($Q = \Delta_r H \cdot r \cdot V$) est critique. Un défaut de maîtrise thermique conduit à un emballement thermique, favorisant des réactions secondaires non désirées (polymérisations, craquages) et dégradant la sélectivité, paramètre économique majeur (exprimé par le rendement et le facteur E de Green Chemistry).