---
title: "📌 1. Définitions & Cadre d'étude"
description: "Fiche de cours et d'exercice CPGE."
---

## 📌 1. Définitions & Cadre d'étude

L'étude thermodynamique des équilibres chimiques appliquée à la métallurgie extractive et à la corrosion aqueuse repose sur deux outils graphiques majeurs en classes préparatoires : les diagrammes d'Ellingham (thermodynamique des équilibres hétérogènes à haute température) et les diagrammes de Pourbaix (thermodynamique électrochimique en solution aqueuse).

### Diagramme d'Ellingham
Le diagramme d'Ellingham représente l'enthalpie libre standard de réaction $\Delta_r G^\circ$ associée à la formation d'une mole de dioxygène $\text{O}_2$ (ou d'un autre gaz) en fonction de la température $T$ :
$$\Delta_r G^\circ(T) = \Delta_r H^\circ(T) - T \Delta_r S^\circ(T)$$
* **Cadre d'étude :** Oxydation de métaux en oxydes.
* **Hypothèse d'Ellingham :** Les grandeurs $\Delta_r H^\circ$ et $\Delta_r S^\circ$ sont considérées comme indépendantes de la température $T$ sur l'intervalle étudié (tant qu'il n'y a pas de changement d'état physique). La courbe $\Delta_r G^\circ = f(T)$ est donc assimilée à une droite d'équation $y = aT + b$ où $a = -\Delta_r S^\circ$ et $b = \Delta_r H^\circ$.

### Diagramme de Pourbaix (ou diagramme $E$- $\text{pH}$)
Le diagramme de Pourbaix représente les domaines de prédominance et d'existence des différentes espèces (métal, ions dissous, oxydes/hydroxydes hydratés) d'un élément en solution aqueuse, dans le plan $(pH, E)$ où $E$ est le potentiel électrochimique de l'électrode par rapport à l'électrode standard à hydrogène (ESH).
* **Frontières :** Les lignes du diagramme séparent les domaines et correspondent à l'égalité des concentrations des espèces conjuguées (ou à la saturation pour un précipité), régies par la loi de Nernst et les équilibres acido-basiques ou de précipitation.
---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 1. Température d'inversion dans un diagramme d'Ellingham
Considérons l'oxydation d'un métal $\text{M}$ par $\text{O}_2$ :
$$\text{M (s)} + \text{O}_2\text{ (g)} \rightleftharpoons \text{MO}_2\text{ (s)}$$
La variation d'entropie standard $\Delta_r S^\circ$ correspond à la disparition d'une mole de gaz $\text{O}_2$. Ainsi, $\Delta_r S^\circ < 0$. La pente de la droite d'Ellingham ($-\Delta_r S^\circ$) est donc strictement positive.

* **Démonstration de la condition de réduction :**
Soit un métal $\text{M}_1$ dont l'oxyde $\text{M}_1\text{O}_2$ est plus stable (droite plus basse dans le diagramme) que celui du métal $\text{M}_2$ (droite plus haute). À l'équilibre, pour la réaction de réduction de $\text{M}_2\text{O}_2$ par $\text{M}_1$ :
$$\Delta_r G^\circ = \Delta_f G^\circ(\text{M}_2\text{O}_2) - \Delta_f G^\circ(\text{M}_1\text{O}_2)$$
La réduction est thermodynamiquement possible si $\Delta_r G^\circ < 0$, c'est-à-dire si le réducteur ($\text{M}_1$) possède un oxyde dont l'enthalpie libre de formation est plus négative que celle de l'oxyde à réduire ($\text{M}_2\text{O}_2$).

### 2. Établissement d'une frontière de Pourbaix (Pente de Nernst)
Soit l'équilibres redox entre un métal $\text{M(s)}$ et un ion métallique en solution $\text{M}^{n+}\text{(aq)}$ :
$$\text{M}^{n+}\text{(aq)} + n e^- \rightleftharpoons \text{M (s)}$$
La formule de Nernst s'écrit :
$$E = E^\circ(\text{M}^{n+}/\text{M}) + \frac{0,06}{n} \log\left(\frac{[\text{M}^{n+}]}{[\text{M}]}\right)$$
Puisque l'activité du solide vaut $1$, on obtient une droite horizontale dans le plan $(pH, E)$ si la frontière ne dépend pas du $\text{pH}$.

Considérons maintenant un équilibre dépendant du $\text{pH}$ (intervention de $\text{H}^+$ ou $\text{HO}^-$), par exemple l'oxydation du métal en oxyde hydraté $\text{MO}_2\text{ (s)}$ :
$$\text{MO}_2\text{ (s)} + 4\text{H}^+\text{(aq)} + 4 e^- \rightleftharpoons \text{M (s)} + 2\text{H}_2\text{O (l)}$$
Appliquons la loi de Nernst à $T = 298\text{ \text{K}}$ :
$$E = E^\circ\left(\text{MO}_2/\text{M}\right) + \frac{0,06}{4} \log\left(\frac{[\text{H}^+]^4}{1}\right)$$
$$E = E^\circ\left(\text{MO}_2/\text{M}\right) + \frac{0,06 \times 4}{4} \log([\text{H}^+])$$
$$E = E^\circ\left(\text{MO}_2/\text{M}\right) - 0,06 \, \text{pH}$$
La pente de la frontière dans le diagramme de Pourbaix est donc de $-0,06 \times \frac{\text{nombre de } \text{H}^+}{\text{nombre de } e^-}$ volts par unité de $\text{pH}$.

---

## 💡 3. Méthodes de calcul & Algorithmes

### Algorithme de lecture et d'exploitation d'un diagramme d'Ellingham pour la métallurgie
1. **Identifier les espèces en présence :** Repérer les droites correspondant aux couples $\text{M}/\text{M}_x\text{O}_y$.
2. **Déterminer la stabilité relative :** À une température $T$ donnée, l'oxyde dont le point sur le diagramme est le plus bas est le plus stable.
3. **Étudier la réductibilité :** Un métal $A$ peut réduire l'oxyde d'un métal $B$ si la droite du couple de $A$ est située *en dessous* de celle du couple de $B$ à la température de travail.
4. **Calcul de la pression de dioxygène d'équilibre :**
   À l'aide de la relation $\Delta_r G^\circ = -RT \ln(K^\circ)$ avec $K^\circ = \frac{1}{P(\text{O}_2)/P^\circ}$, on tire :
   $$\log\left(\frac{P(\text{O}_2)}{P^\circ}\right) = -\frac{\Delta_r G^\circ}{2,303 \, R \, T}$$

### Algorithme de tracé d'un diagramme de Pourbaix
1. **Recenser les espèces du système :** Classer par nombre d'oxydation croissant.
2. **Tracer les frontières acido-basiques (lignes verticales) :** Indépendantes du potentiel $E$, déterminées par les $\text{p}K_a$ des couples acido-basiques ou de solubilité ($\text{p}K_s$).
3. **Tracer les frontières purement redox (lignes horizontales) :** Déterminées par la loi de Nernst sans échange de protons.
4. **Tracer les frontières mixtes (lignes inclinées) :** Utiliser la pente $\frac{-0,06 \cdot \Delta n(\text{H}^+)}{\Delta n(e^-)}$.
5. **Supermposer les droites de l'eau :**
   * Oxydation de l'eau : $\text{O}_2\text{ (g)} + 4\text{H}^+\text{(aq)} + 4 e^- \rightleftharpoons 2\text{H}_2\text{O (l)}$ $\rightarrow E_1 = 1,23 - 0,06 \, \text{pH}$
   * Réduction de l'eau : $2\text{H}^+\text{(aq)} + 2 e^- \rightleftharpoons \text{H}_2\text{O (g)}$ $\rightarrow E_2 = 0,00 - 0,06 \, \text{pH}$

---

## ⚠️ 4. Pièges classiques aux Concours

* **Oublier la stœchiométrie de référence dans Ellingham :** $\Delta_r G^\circ$ est toujours tracé pour la consommation d'une mole de $\text{O}_2\text{ (g)}$, et non par mole de métal oxydé. Ne pas réajuster les coefficients stœchiométriques lors de combinaisons de réactions conduit à des erreurs de calcul sur $\Delta_r G^\circ$.
* **Confondre domaine de prédominance et domaine d'existence :** 
  * Un *domaine de prédominance* concerne des espèces dissoutes en solution (ions).
  * Un *domaine d'existence* concerne des phases condensées (précipités, solides, métaux).
* **Négliger la concentration de trace dans les frontières de précipitation :** La frontière entre un ion dissous et un précipité dépend de la concentration de référence de l'ion dissous (souvent fixée à $c_{\text{ref}} = 10^{-6}\text{ \text{mol}}\cdot\text{L}^{-1}$ dans les sujets de concours). Un oubli de cette convention fausse le calcul du $\text{pH}$ de début de précipitation.
* **Interprétation hâtive de la thermodynamique face à la cinétique :** Un diagramme de Pourbaix ou d'Ellingham indique uniquement le sens d'évolution *thermodynamique* (possibilité d'une réaction). Il n'apporte aucune information sur la *cinétique*. Par exemple, le fer thermodynamiquement oxydable dans l'eau (domaine de corrosion) peut être cinétiquement stable si le système présente une surtension importante ou un phénomène de passivation (formation d'une couche d'oxyde protectrice imperméable).