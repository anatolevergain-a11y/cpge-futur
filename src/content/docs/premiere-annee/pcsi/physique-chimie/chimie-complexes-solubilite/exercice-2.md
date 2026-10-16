---
title: 'Exercice 2 : Diagrammes de prédominance et d existence des complexes'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les diagrammes de prédominance et d'existence constituent un outil thermodynamique incontournable pour prévoir le comportement des ions métalliques en solution aqueuse en présence de ligands. L'objectif de ce problème est d'étudier la complexation des ions cuivre(II), $\text{Cu}^{2+}$, par l'ammoniac, $\text{NH}_3$, et d'analyser l'impact de ces équilibres sur la solubilité d'hydroxydes métalliques.

On se place à la température $T = 298\text{ K}$. Les concentrations sont exprimées en mol$\cdot$L$^{-1}$ et les concentrations standard de référence sont $c^\circ = 1\text{ mol}\cdot\text{L}^{-1}$.

Données thermodynamiques à $298\text{ K}$ :
* Constantes globales de formation des complexes du cuivre(II) avec l'ammoniac :
  - $\text{Cu}^{2+} + \text{NH}_3 \rightleftharpoons [\text{Cu}(\text{NH}_3)]^{2+}$ : $\beta_1 = 10^{4.1}$
  - $\text{Cu}^{2+} + 2\text{NH}_3 \rightleftharpoons [\text{Cu}(\text{NH}_3)_2]^{2+}$ : $\beta_2 = 10^{7.7}$
  - $\text{Cu}^{2+} + 3\text{NH}_3 \rightleftharpoons [\text{Cu}(\text{NH}_3)_3]^{2+}$ : $\beta_3 = 10^{10.3}$
  - $\text{Cu}^{2+} + 4\text{NH}_3 \rightleftharpoons [\text{Cu}(\text{NH}_3)_4]^{2+}$ : $\beta_4 = 10^{12.6}$
* Produit de solubilité de l'hydroxyde de cuivre(II) $\text{Cu}(\text{OH})_2\text{ (s)}$ :
  - $\text{Cu}(\text{OH})_2\text{ (s)} \rightleftharpoons \text{Cu}^{2+} + 2\text{OH}^-$ : $K_s = 10^{-19.3}$
* Produit ionique de l'eau : $K_e = 10^{-14.0}$

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Établissement des équations et des constantes**
   Écrire les réactions de formation successive des complexes du cuivre(II) avec l'ammoniac ainsi que leurs constantes d'équilibre associées. Exprimer la relation entre les constantes globales $\beta_i$ et les constantes successives $K_i$ ($i \in \{1, 2, 3, 4\}$).

2. **Diagramme de prédominance en solution homogène**
   On définit les fractions molaires de chaque espèce du cuivre en solution par rapport à la concentration totale en cuivre dissous $C = [\text{Cu}^{2+}] + [\text{Cu}(\text{NH}_3)^{2+}] + [\text{Cu}(\text{NH}_3)_2^{2+}] + [\text{Cu}(\text{NH}_3)_3^{2+}] + [\text{Cu}(\text{NH}_3)_4^{2+}]$.
   Exprimer la fraction molaire $\alpha_0$ de l'espèce $\text{Cu}^{2+}$ en fonction de $[\text{NH}_3]$ et des constantes $\beta_i$.
   Tracer qualitativement l'allure du diagramme de distribution en fonction de $\text{pNH}_3$ (où $\text{pNH}_3 = -\log[\text{NH}_3]$).

3. **Précipitation et diagramme d'existence**
   On introduit une concentration totale en cuivre $C = 1.0 \times 10^{-2}\text{ mol}\cdot\text{L}^{-1}$ dans une solution tamponnée à $\text{pH} = 10.0$.
   Calculer la concentration minimale en ions $\text{OH}^-$ nécessaire pour observer la précipitation de $\text{Cu}(\text{OH})_2\text{ (s)}$.
   En déduire la valeur de $\text{pNH}_3$ limite à partir de laquelle le précipité se dissout par complexation.

4. **Analyse critique du modèle**
   Le modèle thermodynamique utilisé ne tient pas compte des forces ioniques élevées. Quel est l'effet d'une augmentation de la force ionique sur les constantes apparentes $\beta_i^\circ$ et $K_s^\circ$ ? Discuter des limites de validité de ce modèle en solution concentrée.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Utilisez la loi d'action de masse pour relier les constantes globales $\beta_n$ aux équilibres successifs $M + nL \rightleftharpoons MLe_n$ et $ML_{n-1} + L \rightleftharpoons ML_n$.
* **Question 2 :** Exprimez chaque concentration $[\text{Cu}(\text{NH}_3)_n^{2+}]$ en fonction de $[\text{Cu}^{2+}]$ et $[\text{NH}_3]$ à l'aide des $\beta_n$, avec par convention $\beta_0 = 1$. Factorisez par $[\text{Cu}^{2+}]$ dans l'expression de $C$.
* **Question 3 :** Écrivez le produit de solubilité au moment de l'apparition (ou de la disparition) du précipité, c'est-à-dire lorsque le produit ionique est égal à $K_s$. Reliez $[\text{Cu}^{2+}]_{\text{total}}$ à $C$ en utilisant le coefficient de réaction globale (ou de complexation).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Établissement des équations et des constantes

Les réactions de formation successive s'écrivent :
* $[\text{Cu}(\text{NH}_3)_{n-1}]^{2+} + \text{NH}_3 \rightleftharpoons [\text{Cu}(\text{NH}_3)_n]^{2+}$ de constante $K_n = \frac{[\text{Cu}(\text{NH}_3)_n^{2+}]}{[\text{Cu}(\text{NH}_3)_{n-1}^{2+}][\text{NH}_3]}$

Les réactions globales de formation sont :
* $\text{Cu}^{2+} + n\text{NH}_3 \rightleftharpoons [\text{Cu}(\text{NH}_3)_n]^{2+}$ de constante globale $\beta_n = \frac{[\text{Cu}(\text{NH}_3)_n^{2+}]}{[\text{Cu}^{2+}][\text{NH}_3]^n}$

Par relation mathématique immédiate, la constante globale $\beta_n$ est le produit des constantes successives $K_i$ pour $i$ variant de $1$ à $n$ :
$$\beta_n = \prod_{i=1}^n K_i \quad (\text{avec }\beta_0 = 1)$$

#### 2. Diagramme de prédominance en solution homogène

La concentration totale en cuivre dissous $C$ est la somme des concentrations de toutes les espèces porteuses de cuivre :
$$C = [\text{Cu}^{2+}] + \sum_{n=1}^4 [\text{Cu}(\text{NH}_3)_n^{2+}]$$

En utilisant l'expression des constantes globales $\beta_n$ :
$$C = [\text{Cu}^{2+}] \left( 1 + \sum_{n=1}^4 \beta_n [\text{NH}_3]^n \right)$$

La fraction molaire $\alpha_0$ de l'espèce libre $\text{Cu}^{2+}$ est définie par :
$$\alpha_0 = \frac{[\text{Cu}^{2+}]}{C} = \frac{1}{1 + \sum_{n=1}^4 \beta_n [\text{NH}_3]^n}$$

De même, la fraction molaire de l'espèce $[\text{Cu}(\text{NH}_3)_n^{2+}]$ est :
$$\alpha_n = \frac{[\text{Cu}(\text{NH}_3)_n^{2+}]}{C} = \frac{\beta_n [\text{NH}_3]^n}{1 + \sum_{i=1}^4 \beta_i [\text{NH}_3]^i}$$

*Allure du diagramme :* En traçant $\alpha_n$ en fonction de $\text{pNH}_3 = -\log[\text{NH}_3]$, on observe des domaines successifs de prédominance pour $\text{Cu}^{2+}$, puis $[\text{Cu}(\text{NH}_3)]^{2+}$, $[\text{Cu}(\text{NH}_3)_2]^{2+}$, $[\text{Cu}(\text{NH}_3)_3]^{2+}$ et enfin $[\text{Cu}(\text{NH}_3)_4]^{2+}$ pour les fortes concentrations en ammoniac ($\text{pNH}_3$ faible).

#### 3. Précipitation et diagramme d'existence

À $\text{pH} = 10.0$, on a $[\text{OH}^-] = 10^{\text{pH} - pKe} = 10^{10.0 - 14.0} = 10^{-4.0}\text{ mol}\cdot\text{L}^{-1}$.

Le produit de solubilité s'écrit :
$$K_s = [\text{Cu}^{2+}][\text{OH}^-]^2$$

La concentration seuil en ions $\text{Cu}^{2+}_{\ libre}$ pour initier la précipitation de $\text{Cu}(\text{OH})_2\text{ (s)}$ est :
$$[\text{Cu}^{2+}]_{\text{seuil}} = \frac{K_s}{[\text{OH}^-]^2} = \frac{10^{-19.3}}{(10^{-4.0})^2} = 10^{-11.3}\text{ mol}\cdot\text{L}^{-1}$$

La concentration totale en cuivre est $C = 1.0 \times 10^{-2}\text{ mol}\cdot\text{L}^{-1}$. 
En présence d'ammoniac, le cuivre est complexé. Exprimons la condition de précipitation en fonction de la concentration totale $C$ :
$$C = [\text{Cu}^{2+}] \left( 1 + \sum_{n=1}^4 \beta_n [\text{NH}_3]^n \right)$$

Pour que le précipité apparaisse (ou disparaisse à la limite de dissolution), il faut que la concentration en cuivre libre atteigne $[\text{Cu}^{2+}]_{\text{seuil}}$. Par conséquent, la condition limite s'écrit :
$$C = [\text{Cu}^{2+}]_{\text{seuil}} \left( 1 + \sum_{n=1}^4 \beta_n [\text{NH}_3]^n \right)$$

Soit :
$$1 + \sum_{n=1}^4 \beta_n [\text{NH}_3]^n = \frac{C}{[\text{Cu}^{2+}]_{\text{seuil}}} = \frac{10^{-2.0}}{10^{-11.3}} = 10^{9.3}$$

Puisque $\beta_4 [\text{NH}_3]^4 = 10^{12.6} [\text{NH}_3]^4$ est largement prépondérant devant les autres termes pour les fortes concentrations en ligand, on peut approximer :
$$10^{12.6} [\text{NH}_3]^4 \approx 10^{9.3} \implies [\text{NH}_3]^4 \approx 10^{-3.3}$$
$$\log[\text{NH}_3] \approx -\frac{3.3}{4} = -0.825$$
$$\text{pNH}_3 \approx 0.83$$

En deçà de cette valeur de $\text{pNH}_3$ (milieu très riche en ammoniac), le complexe tétrammine est si stable que $[\text{Cu}^{2+}]$ chute en dessous du seuil de précipitation : le solide $\text{Cu}(\text{OH})_2\text{ (s)}$ se dissout.

#### 4. Analyse critique du modèle

* **Effet de la force ionique ($\text{I}$) :** Les constantes thermodynamiques $\beta_i$ et $K_s$ sont définies à partir des activités des espèces chimiques. En solution réelle, l'utilisation des concentrations à la place des activités n'est rigoureuse qu'en solution infiniment diluée ($\text{I} \to 0$). Lorsque la force ionique augmente (présence d'ions spectateurs), les coefficients d'activité $\gamma_i$ diminuent (loi limite de Debye-Hückel). 
* **Conséquences sur les équilibres :** Les constantes conditionnelles (ou apparentes) calculées avec les concentrations s'écartent des valeurs thermodynamiques tabulées. Les domaines de prédominance et de solubilité peuvent ainsi être déplacés de quelques dixièmes d'unités de $\text{pH}$ ou de $\text{pNH}_3$.
* **Limites du modèle :** Ce modèle ne prend pas non plus en compte la formation potentielle de complexes mixtes hydroxyde-ammoniac du cuivre (ex: $[\text{Cu}(\text{OH})(\text{NH}_3)]^+$) qui apparaissent à des $\text{pH}$ intermédiaires et qui élargiraient la zone de solubilité réelle du métal.