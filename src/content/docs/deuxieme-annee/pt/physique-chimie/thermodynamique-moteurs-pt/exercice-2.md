---
title: 'Exercice 2 : Bilan d énergie et rendement'
description: 'Problème d entraînement type concours pour PT.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les moteurs à combustion interne restent au cœur des préoccupations énergétiques et environnementales actuelles. L'objectif de ce problème est d'étudier un modèle thermodynamique idéalisé décrivant le cycle de fonctionnement d'un moteur Diesel à quatre temps.

Le fluide caloporteur est l'air, assimilé à un gaz parfait diatomic de masse molaire $M$ et de capacité thermique massique à pression constante $c_p$ (ou molaire $C_p = \gamma R / (\gamma - 1)$), dont le coefficient isentropique $\gamma = c_p / c_v$ est supposé constant sur la plage de température considérée ($\gamma = 1,4$).

Le cycle théorique de Diesel comprend quatre transformations réversibles subies par $n$ moles d'air (système fermé) :
1. **$A \to B$** : Compression adiabatique réversible (isentropique) de l'état $1$ ($P_1, V_1, T_1$) à l'état $2$ ($P_2, V_2, T_2$).
2. **$B \to C$** : Chauffage isobare réversible de l'état $2$ à l'état $3$ ($P_3 = P_2, V_3, T_3$).
3. **$C \to D$** : Détente adiabatique réversible (isentropique) de l'état $3$ à l'état $4$ ($P_4, V_4, T_4$), avec $V_4 = V_1$.
4. **$D \to A$** : Refroidissement isochore réversible ramenant le fluide à l'état initial $1$.

On définit les paramètres caractéristiques suivants :
- Le taux volumique de compression : $\alpha = \frac{V_1}{V_2}$
- Le taux de isobare de coupure (ou taux d'injection) : $\beta = \frac{V_3}{V_2}$

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Représentation graphique** : Tracer l'allure du cycle de Diesel dans le diagramme de Clapeyron $(P, V)$ en indiquant clairement les quatre états $A$ (ou $1$), $B$ (ou $2$), $C$ (ou $3$) et $D$ (ou $4$).
2. **Bilan énergétique élémentaire** : Exprimer les quantités de chaleur $Q_{\text{ reçue}}$ échangée par le gaz au cours de la transformation isobar $B \to C$ et $Q_{\text{ cédée}}$ au cours de la transformation isochore $D \to A$ en fonction de $n$, $C_p$, $C_v$ et des températures extrêmes de chaque transformation.
3. **Expression du rendement** : Établir l'expression littérale du rendement thermique $\eta$ du cycle en fonction de $\gamma$, $\alpha$ et $\beta$. Montrer que ce rendement peut se mettre sous la forme :
   $$\eta = 1 - \frac{1}{\gamma \alpha^{\gamma-1}} \frac{\beta^\gamma - 1}{\beta - 1}$$
4. **Étude comparative** : Retrouver qualitativement comment évolue le rendement si le taux d'injection $\beta$ tend vers $1$ (à taux de compression $\alpha$ fixé). Quel est alors le cycle thermodynamique associé ?
5. **Analyse critique du modèle** : Discuter brièvement la validité des hypothèses d'isochorie et d'isobarie pour les transferts thermiques dans un véritable moteur Diesel rapide, ainsi que l'hypothèse de l'indépendance de $\gamma$ vis-à-vis de la température.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1** : Rappeler l'allure des adiabatiques (plus pentues en valeur absolue que les isothermes) et des isobares (horizontales) dans le diagramme $(P,V)$.
- **Question 2** : Utiliser le premier principe de la thermodynamique appliqué à un système fermé en régime quasi-statique : $\mathrm{d}U = \delta W + \delta Q$. Pour une transformation isobare, $\delta Q = n C_p \mathrm{d}T$. Pour une isochore, $\delta Q = n C_v \mathrm{d}T$.
- **Question 3** : Le rendement s'exprime par $\eta = \frac{W_{\text{cycle}}}{Q_{\text{ reçue}}} = 1 + \frac{Q_{\text{ cédée}}}{Q_{\text{ reçue}}}$ (en comptant les transferts thermiques algébriquement). Relier les températures $T_1, T_2, T_3, T_4$ en utilisant la loi de Laplace pour les compressions/détentes isentropiques et la loi des gaz parfaits pour les états de transition.
- **Question 4** : Faire un développement limité ou une analyse de la limite $\beta \to 1$ par la règle de l'Hôpital.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Représentation graphique dans le diagramme $(P,V)$
Le cycle comporte :
- $1 \to 2$ : Courbe d'allure hyperbolique abrupte (adiabatique réversible, $P V^\gamma = \text{cte}$).
- $2 \to 3$ : Segment de droite horizontal (isobare, $P = P_2$).
- $3 \to 4$ : Courbe d'allure hyperbolique abrupte (adiabatique réversible, $P V^\gamma = \text{cte}$).
- $4 \to 1$ : Segment de droite vertical (isochore, $V = V_1$).

#### 2. Bilan des transferts thermiques
- **Pendant la transformation $2 \to 3$ (isobare)** :
  Le système reçoit de la chaleur de la part de la source chaude (combustion du gazole). Comme la transformation est isobare réversible :
  $$Q_{23} = \int_{T_2}^{T_3} n C_p \, \mathrm{d}T = n C_p (T_3 - T_2) > 0$$
  C'est la chaleur reçue : $Q_{\text{ reçue}} = n C_p (T_3 - T_2)$.

- **Pendant la transformation $4 \to 1$ (isochore)** :
  Le système cède de la chaleur à l'atmosphère extérieure (refroidissement). La transformation est isochore réversible :
  $$Q_{41} = \int_{T_4}^{T_1} n C_v \, \mathrm{d}T = n C_v (T_1 - T_4) < 0$$
  La chaleur cédée en valeur absolue est donc $|Q_{41}| = n C_v (T_4 - T_1)$.

#### 3. Expression du rendement thermique $\eta$
Par définition, le rendement du cycle est le rapport de l'énergie mécanique utile fournie sur l'énergie thermique reçue :
$$\eta = \frac{W_{\text{cycle}}}{Q_{\text{ reçue}}} = \frac{Q_{\text{ reçue}} + Q_{\text{ cédée}}}{Q_{\text{ reçue}}} = 1 - \frac{|Q_{41}|}{Q_{23}}$$
$$\eta = 1 - \frac{n C_v (T_4 - T_1)}{n C_p (T_3 - T_2)} = 1 - \frac{1}{\gamma} \frac{T_4 - T_1}{T_3 - T_2}$$

Exprimons toutes les températures en fonction de $T_1$, $\alpha$ et $\beta$ :
- **Transformation $1 \to 2$ (adiabatique réversible)** :
  $$T_1 V_1^{\gamma-1} = T_2 V_2^{\gamma-1} \implies T_2 = T_1 \left(\frac{V_1}{V_2}\right)^{\gamma-1} = T_1 \alpha^{\gamma-1}$$
- **Transformation $2 \tothe \text{3}$ (isobare)** :
  $$\frac{V_2}{T_2} = \frac{V_3}{T_3} \implies T_3 = T_2 \frac{V_3}{V_2} = T_2 \beta = T_1 \alpha^{\gamma-1} \beta$$
- **Transformation $3 \to 4$ (adiabatique réversible)** :
  $$T_3 V_3^{\gamma-1} = T_4 V_4^{\gamma-1} \implies T_4 = T_3 \left(\frac{V_3}{V_4}\right)^{\gamma-1}$$
  Or $V_4 = V_1$ et $\frac{V_3}{V_4} = \frac{V_3}{V_2} \frac{V_2}{V_1} = \frac{\beta}{\alpha}$. Donc :
  $$T_4 = T_1 \alpha^{\gamma-1} \beta \left(\frac{\beta}{\alpha}\right)^{\gamma-1} = T_1 \beta^\gamma$$

Injectons $T_2, T_3, T_4$ dans l'expression du rendement :
$$\eta = 1 - \frac{1}{\gamma} \frac{T_1 \beta^\gamma - T_1}{T_1 \alpha^{\gamma-1} \beta - T_1 \alpha^{\gamma-1}}$$
En simplifiant par $T_1$ et en factorisant :
$$\eta = 1 - \frac{1}{\gamma \alpha^{\gamma-1}} \frac{\beta^\gamma - 1}{\beta - 1}$$
C'est bien la formule demandée.

#### 4. Étude comparative et limite $\beta \to 1$
Lorsque le taux d'injection $\beta = \frac{V_3}{V_2}$ tend vers $1$, cela signifie que le volume $V_3$ tend vers $V_2$ : le chauffage isobare se réduit à un point, et la combustion est instantanée. 
En effectuant un développement limité de $\beta^\gamma$ au voisinage de $\beta = 1$ (ou en appliquant la règle de l'Hôpital) :
$$\lim_{\beta \to 1} \frac{\beta^\gamma - 1}{\beta - 1} = \gamma$$
Le rendement devient alors :
$$\eta_{\lim} = 1 - \frac{1}{\gamma \alpha^{\gamma-1}} \gamma = 1 - \frac{1}{\alpha^{\gamma-1}}$$
On reconnait l'expression exacte du rendement du **cycle de Beau de Rochas (ou cycle à allumage par commande / essence)** pour le même taux de compression $\alpha$.

#### 5. Analyse critique du modèle
- **Hypothèses thermiques** : Les transferts thermiques par $B \to C$ (isobare) et $D \to A$ (isochore) sont des idéalisations. Dans un vrai moteur Diesel, la combustion est étalée dans le temps et ne se fait pas à pression strictement constante. De même, l'évacuation des gaz brûlés par l'ouverture de la soupape d'échappement ne correspond pas à un refroidissement isochore réversible.
- **Capacités thermiques** : L'hypothèse de $\gamma$ constant est mise en défaut aux hautes températures atteintes dans la chambre de combustion ($T > 2000\text{ K}$), où les vibrations moléculaires et la dissociation chimique modifient les capacités thermiques massiques $c_p$ et $c_v$.