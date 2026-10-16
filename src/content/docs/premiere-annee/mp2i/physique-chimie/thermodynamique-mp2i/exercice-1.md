---
title: 'Exercice 1 : Premier et second principes'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On s'intéresse à un dispositif thermique innovant modélisant un cycle thermodynamique fermé, susceptible d'être utilisé dans des systèmes de micro-cogénération. Le système étudié est une mole de gaz parfait monoatomique ($C_V = \frac{3}{2} R$, $C_P = \frac{5}{2} R$) subissant un cycle quasi-statique réversible constitué de quatre transformations successives entre deux thermostats de températures extrêmes $T_1$ et $T_2$ (avec $T_2 > T_1$).

Le cycle décrit dans le diagramme de Clapeyron $(P, V)$ est le suivant :
1. **$A \to B$** : Compression isochore du gaz, faisant passer la pression de $P_A$ à $P_B$ (volume $V_A = V_B$).
2. **$B \to C$** : Détente isobare de $V_B$ à $V_C$ sous la pression $P_B = P_C$.
3. **$C \to D$** : Détente isochore du gaz de $P_C$ à $P_D$ (volume $V_C = V_D$).
4. **$D \to A$** : Compression isobare ramenant le gaz à l'état initial $A$ sous la pression $P_A = P_D$.

On pose les données caractéristiques suivantes :
- Quantité de matière : $n = 1\text{ mol}$
- Température à l'état $A$ : $T_A = 300\text{ K}$
- Pression à l'état $A$ : $P_A = 1\text{ bar} = 10^5\text{ Pa}$
- Volume à l'état $C$ : $V_C = 3 V_A$
- Constante des gaz parfaits : $R \approx 8{,}314\text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Représentation et caractérisation des états**
   a) Exprimer le volume $V_A$ en fonction de $n$, $R$, $T_A$ et $P_A$, puis calculer sa valeur numérique.
   b) Déterminer les coordonnées thermodynamiques $(P, V, T)$ des états $B$, $C$ et $D$ en fonction des données initiales et des rapports de volume/pression.
   c) Représenter qualitativement le cycle $ABCDE$ dans le diagramme de Clapeyron $(P, V)$.

2. **Bilan énergétique (Premier Principe)**
   a) Rapponcer l'expression générale du premier principe de la thermodynamique pour un système fermé en écriture différentielle, puis sous forme intégrée pour une transformation élémentaire.
   b) Exprimer et calculer le travail $W$ et la quantité de chaleur $Q$ échangés par le gaz au cours de chacune des quatre transformations du cycle.
   c) En déduire le travail total $W_{\text{cycle}}$ reçu par le gaz au cours d'un cycle complet et la chaleur totale $Q_{\text{cycle}}$ reçue. Conclure sur le signe de $W_{\text{cycle}}$ quant à la nature moteur ou réceptrice du cycle.

3. **Bilan entropique (Second Principe)**
   a) Rappeler l'expression de la variation d'entropie élémentaire $dS$ d'un gaz parfait en fonction de $dT$ et $dV$, puis en fonction de $dT$ et $dP$.
   b) Calculer la variation d'entropie $\Delta S_{AB}$, $\Delta S_{BC}$, $\Delta S_{CD}$ et $\Delta S_{DA}$ pour chaque étape, ainsi que la variation d'entropie sur un cycle complet $\Delta S_{\text{cycle}}$. Le résultat était-il prévisible ? Justifier.
   c) En considérant que les échanges thermiques s'effectuent avec deux thermostats de températures respectives $T_{\text{source}}$ et $T_{\text{puits}}$, calculer l'entropie créée $\Delta S_{\text{créée}}$ au cours d'un cycle si les transferts thermiques se font à travers des parois de conductivités thermiques finies.

4. **Analyse critique du modèle**
   a) Le cycle décrit est-il un cycle moteur ou un cycle de pompe à chaleur/réfrigérateur ? Justifier.
   b) Évaluer le rendement (ou l'efficacité) de ce cycle et le comparer au rendement d'un cycle de Carnot fonctionnant entre les mêmes températures extrêmes $T_{\text{min}}$ et $T_{\text{max}}$ du cycle.
   c) Discuter la pertinence de l'hypothèse de quasi-statisme pour les étapes isochores et isobares dans une optique industrielle.

---

### 💡 Pistes & Indications méthodologiques

* **Q1** : Utilisez l'équation d'état des gaz parfaits $PV = nRT$. Attention aux unités (utiliser le Système International : Pa, $\text{m}^3$, K).
* **Q2** : Pour un gaz parfait monoatomique, l'énergie interne ne dépend que de la température : $\Delta U = n C_V \Delta T$. Utilisez la relation $dU = \delta W + \delta Q$ sachant que $\delta W = -P_{\text{ext}} dV$. Par réversibilité, $P_{\text{ext}} = P_{\text{gaz}}$.
* **Q3** : L'entropie est une fonction d'état, sa variation sur un cycle fermé est donc nécessairement nulle. Pour calculer l'entropie créée, appliquez l'inégalité de Clausius en considérant l'entropie échangée avec les sources de chaleur.
* **Q4** : Identifiez clairement les transferts thermiques reçus par le gaz (chaleur reçue positive) et les transferts cédés pour classifier le dispositif.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Représentation et caractérisation des états

a) D'après l'équation d'état des gaz parfaits appliquée à l'état $A$ :
$$P_A V_A = n R T_A \implies V_A = \frac{n R T_A}{P_A}$$
A.N. : 
$$V_A = \frac{1 \times 8{,}314 \times 300}{10^5} = 2{,}49 \times 10^{-2}\text{ m}^3 = 24{,}9\text{ L}$$

b) Caractéristiques des autres états :
- **État $B$** : Transformation $A \to B$ isochore ($V_B = V_A$) et $P_B = P_C = 3 P_A$ (car la transformation $B \to C$ est isobare et $V_C = 3 V_A = 3 V_B$).
  - $V_B = V_A = 2{,}49 \times 10^{-2}\text{ m}^3$
  - $P_B = 3 \times 10^5\text{ Pa}$
  - $T_B = \frac{P_B V_B}{n R} = 3 \times T_A = 900\text{ K}$

- **État $C$** : Transformation $B \to C$ isobare ($P_C = P_B$) et $V_C = 3 V_A$.
  - $V_C = 3 \times 2{,}49 \times 10^{-2} = 7{,}48 \times 10^{-2}\text{ m}^3$
  - $P_C = 3 \times 10^5\text{ Pa}$
  - $T_C = \frac{P_C V_C}{n R} = 3 \times T_B = 2700\text{ K}$ (ou $T_C = T_B \frac{V_C}{V_B} = 900 \times 3 = 2700\text{ K}$)

- **État $D$** : Transformation $C \to D$ isochore ($V_D = V_C$) et $P_D = P_A = 10^5\text{ Pa}$ (car $D \to A$ est isobare).
  - $V_D = V_C = 7{,}48 \times 10^{-2}\text{ m}^3$
  - $P_D = 10^5\text{ Pa}$
  - $T_D = \frac{P_D V_D}{n R} = \frac{10^5 \times 7{,}48 \times 10^{-2}}{8{,}314} \approx 899{,}7\text{ K}$ (on remarque $T_D \approx T_B$).

c) **Diagramme de Clapeyron** : 
Le cycle se trace dans le sens horaire entre les volumes $V_A$ et $V_C$ et les pressions $P_A$ et $P_B$.

---

#### 2. Bilan énergétique (Premier Principe)

a) Le premier principe pour un système fermé s'écrit :
$$\Delta U = W + Q$$
Sous forme infinitésimale :
$$dU = \delta W + \delta Q$$
Avec $\delta W = -P dV$ (transformation quasi-statique) et $dU = n C_V d T$.

b) Calcul pour chaque étape :
- **Étape $A \to B$ (isochore, $dV = 0$)** :
  - $W_{AB} = 0$
  - $Q_{AB} = \Delta U_{AB} = n C_V (T_B - T_A) = 1 \times \left(\frac{3}{2} \times 8{,}314\right) \times (900 - 300) = 12{,}471 \times 600 = 7482{,}6\text{ J}$

- **Étape $B \to C$ (isobare, $P = P_B$)** :
  - $W_{BC} = -P_B (V_C - V_B) = -3 \times 10^5 \times (7{,}48 \times 10^{-2} - 2{,}49 \times 10^{-2}) = -3 \times 10^5 \times 4{,}99 \times 10^{-2} = -14970\text{ J}$
  - $Q_{BC} = \Delta H_{BC} = n C_P (T_C - T_B) = 1 \times \left(\frac{5}{2} \times 8{,}314\right) \times (2700 - 900) = 20{,}785 \times 1800 = 37413\text{ J}$

- **Étape $C \to D$ (isochore, $dV = 0$)** :
  - $W_{CD} = 0$
  - $Q_{CD} = \Delta U_{CD} = n C_V (T_D - T_C) = 1 \times 12{,}471 \times (899{,}7 - 2700) \approx -22489\text{ J}$

- **Étape $D \to A$ (isobare, $P = P_A$)** :
  - $W_{DA} = -P_A (V_A - V_D) = -10^5 \times (2{,}49 \times 10^{-2} - 7{,}48 \times 10^{-2}) = -10^5 \times (-4{,}99 \times 10^{-2}) = +4990\text{ J}$
  - $Q_{DA} = \Delta H_{DA} = n C_P (T_A - T_D) = 20{,}785 \times (300 - 899{,}7) \approx -12480\text{ J}$

c) **Bilan global sur le cycle** :
- Travail total :
  $$W_{\text{cycle}} = W_{AB} + W_{BC} + W_{CD} + W_{DA} = 0 - 14970 + 0 + 4990 = -9980\text{ J}$$
- Chaleur totale :
  $$Q_{\text{cycle}} = -W_{\text{cycle}} = 9980\text{ J}$$
  Le travail total est **négatif** ($W_{\text{cycle}} < 0$), le système **fournit** du travail au milieu extérieur : le cycle est **moteur**.

---

#### 3. Bilan entropique (Second Principe)

a) L'entropie est une fonction d'état. Pour un gaz parfait :
$$dS = \frac{n C_V dT}{T} + \frac{P dV}{T} = n C_V \frac{dT}{T} + n R \frac{dV}{V}$$
En utilisant l'équation d'état, on a aussi :
$$dS = n C_P \frac{dT}{T} - n R \frac{dP}{P}$$

b) Variations d'entropie par étape :
- $\Delta S_{AB} = n C_V \ln\left(\frac{T_B}{T_A}\right) = 1 \times \left(\frac{3}{2} \times 8{,}314\right) \ln(3) = 12{,}471 \times 1{,}0986 = 13{,}70\text{ J}\cdot\text{K}^{-1}$
- $\Delta S_{BC} = n C_P \ln\left(\frac{T_C}{T_B}\right) = 1 \times \left(\frac{5}{2} \times 8{,}314\right) \ln(3) = 20{,}785 \times 1{,}0986 = 22{,}83\text{ J}\cdot\text{K}^{-1}$
- $\Delta S_{CD} = n C_V \ln\left(\frac{T_D}{T_C}\right) = 1 \times 12{,}471 \ln\left(\frac{899{,}7}{2700}\right) = 12{,}471 \ln\left(\frac{1}{3}\right) = -13{,}70\text{ J}\cdot\text{K}^{-1}$
- $\Delta S_{DA} = n C_P \ln\left(\frac{T_A}{T_D}\right) = 20{,}785 \ln\left(\frac{300}{899{,}7}\right) = 20{,}785 \ln\left(\frac{1}{3}\right) = -22{,}83\text{ J}\cdot\text{K}^{-1}$

Variation sur le cycle :
$$\Delta S_{\text{cycle}} = \Delta S_{AB} + \Delta S_{BC} + \Delta S_{CD} + \Delta S_{DA} = 13{,}70 + 22{,}83 - 13{,}70 - 22{,}83 = 0\text{ J}\cdot\text{K}^{-1}$$
Ce résultat **était prévisible** car l'entropie $S$ est une fonction d'état, sa variation sur un cycle fermé est nécessairement nulle.

c) L'entropie créée au cours du cycle provient des transferts thermiques avec l'extérieur. Si l'on considère les sources thermiques externes fournissant les chaleurs reçues $Q_{\text{reçue}} = Q_{AB} + Q_{BC} > 0$ et rejetant la chaleur $Q_{\text{cédée}}$, l'entropie créée s'écrit par application du second principe à l'univers (système + sources) :
$$\Delta S_{\text{créé},\text{cycle}} = \Delta S_{\text{cycle}} + \sum \Delta S_{\text{sources}} = 0 - \frac{Q_{AB}}{T_{\text{source},1}} - \frac{Q_{BC}}{T_{\text{source},2}} - \dots$$
*Note conceptuelle* : Si les transformations internes sont supposées quasi-statiques, l'entropie créée à l'intérieur du gaz est nulle ($\Delta S_{\text{créée, int}} = 0$). Cependant, si les échanges thermiques avec les thermostats se font par différences de températures finies, il y a création d'entropie au niveau des interfaces thermiques.

---

#### 4. Analyse critique du modèle

a) Le travail total reçu par le gaz est négatif ($W_{\text{cycle}} < 0$), ce qui signifie que le système **fournit** de l'énergie mécanique au milieu extérieur : il s'agit bien d'un **cycle moteur**.

b) Le rendement thermique $\eta$ du cycle est défini par le rapport de l'énergie utile fournie sur l'énergie thermique payante (fournie par la source chaude) :
$$\eta = \frac{-W_{\text{cycle}}}{Q_{\text{fournie}}}$$
Les apports de chaleur positifs se font lors des étapes $A \to B$ et $B \to C$ :
$$Q_{\text{fournie}} = Q_{AB} + Q_{BC} = 7482{,}6 + 37413 = 44895{,}6\text{ J}$$
Ainsi :
$$\eta = \frac{9980}{44895{,}6} \approx 0{,}222 \quad (\text{soit } 22{,}2\%)$$

Comparaison avec le cycle de Carnot fonctionnant entre $T_{\text{min}} = T_A = 300\text{ K}$ et $T_{\text{max}} = T_C = 2700\text{ K}$ :
$$\eta_{\text{Carnot}} = 1 - \frac{T_{\text{min}}}{T_{\text{max}}} = 1 - \frac{300}{2700} = 1 - \frac{1}{9} = \frac{8}{9} \approx 88{,}9\%$$
Le rendement réel de ce cycle est nettement inférieur à celui de Carnot, ce qui est conforme au second principe ($\eta < \eta_{\text{Carnot}}$). Cette différence s'explique par le fait que les transferts thermiques ne s'effectuent pas de manière isotherme à $T_{\text{min}}$ et $T_{\text{max}}$, mais sur de larges plages de température, générant d'importantes irreversibilités externes.

c) **Critique de l'hypothèse de quasi-statisme** :
Dans un système réel, réaliser des transformations isochores et isobares de manière quasi-statique impose des vitesses de déplacement des pistons extrêmement faibles (pour que la pression interne soit uniformément égale à la pression extérieure et que l'équilibre thermique soit permanent). En régime industriel, cela conduirait à des puissances massiques et volumiques très faibles, rendant les machines non rentables économiquement. Le modèle quasi-statique constitue donc une borne idéale (rendement maximal théorique pour ce type de cycle) mais reste éloigné des performances dynamiques des moteurs réels.