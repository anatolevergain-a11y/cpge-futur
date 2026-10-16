---
title: 'Exercice 1 : Courbes intensité-potentiel et surtensions'
description: 'Problème corrigé type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

L'électrochimie quantitative joue un rôle majeur dans l'industrie pour la protection des matériaux (protection cathodique, galvanoplastie) et le stockage de l'énergie (piles, accumulateurs). L'étude des courbes intensité-potentiel ($I = f(E)$) permet de prévoir les réactions thermodynamiquement possibles et de déterminer les cinétiques électrochimiques en présence de phénomènes de surtension.

On s'intéresse à l'électrolyse d'une solution aqueuse d'acide sulfurique ($\text{H}_2\text{SO}_4$, $c = 1{,}0\,\text{mol}\cdot\text{L}^{-1}$, $\text{pH} = 0$) à l'aide de deux électrodes planes indifférentes en platine de surface $S = 2{,}0\,\text{cm}^2$. 

On étudie les deux couples redox suivants :
1. $\text{H}^+_{(aq)} / \text{H}_{2(g)}$
2. $\text{O}_{2(g)} / \text{H}_2\text{O}_{(l)}$

Données à $T = 298\,\text{K}$ :
* Pression standard : $P^\circ = 1\,\text{bar}$
* Concentration standard : $C^\circ = 1\,\text{mol}\cdot\text{L}^{-1}$
* Constante des gaz parfaits : $R = 8{,}314\,\text{J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$
* Constante de Faraday : $F = 96500\,\text{C}\cdot\text{mol}^{-1}$
* Potentiels standard apparents à $\text{pH} = 0$ et $P = 1\,\text{bar}$ :
  * $E^\circ_1(\text{H}^+/\text{H}_2) = 0{,}00\,\text{V}$
  * $E^\circ_2(\text{O}_2/\text{H}_2\text{O}) = +1{,}23\,\text{V}$

On définit la surtension d'une électrode par la relation $\eta = E - E_{eq}$, où $E$ est le potentiel de l'électrode traversée par un courant $I$ et $E_{eq}$ est son potentiel d'équilibre thermodynamique. Pour le dégagement de dihydrogène sur platine, la loi de Tafel s'écrit :
$$\eta_{\text{H}_2} = a_1 + b_1 \log\left(\frac{|I|}{I_0}\right)$$
avec $a_1 = -0{,}10\,\text{V}$, $b_1 = -0{,}12\,\text{V}$ et $I_0 = 1{,}0\times 10^{-3}\,\text{A}$ (courant d'échange).

---

### ❓ Questions progressives

1. Écrire les demi-équations électroniques des deux couples redox considérés ainsi que le bilan de la réaction d'électrolyse de l'eau.
2. Calculer les potentiels d'équilibre $E_{eq,1}$ et $E_{eq,2}$ des deux couples dans les conditions de l'expérience (pH = 0, $P(\text{H}_2) = P(\text{O}_2) = 1\,\text{bar}$).
3. On néglige les surtensions pour l'oxydation de l'eau. Exprimer et calculer le potentiel minimum d'électrolyse $E_{\text{min}}$ théorique permettant d'observer simultanément les deux dégagements gazeux.
4. En tenant compte de la surtension du dégagement de dihydrogène sur l'électrode de platine, calculer le potentiel réel $E_{\text{cathode}}$ de la cathode pour une intensité de courant imposée $I = -20\,\text{mA}$.
5. Déduire de la question précédente la tension totale $U$ qu'il faut appliquer aux bornes de l'électrolyseur pour imposer cette intensité $I$, en supposant la résistance ohmique de la solution négligeable et la surtension à l'anode négligeable.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 & 2 :** Utiliser la formule de Nernst à $298\,\text{K}$ en exprimant le facteur $\frac{RT}{F} \ln(10) \approx 0{,}060\,\text{V}$.
* **Question 3 :** Le potentiel minimum d'électrolyse correspond à la différence entre le potentiel de l'anode et celui de la cathode à l'équilibre (ou seuil thermodynamique).
* **Question 4 :** Appliquer directement la loi de Tafel fournie dans l'énoncé en faisant attention au signe de l'intensité pour la cathode (courant réducteur, $I < 0$).
* **Question 5 :** La tension aux bornes de l'électrolyseur est la différence entre le potentiel de l'anode (oxydation) et le potentiel de la cathode (réduction) en tenant compte des surtensions : $U = E_{\text{anode}} - E_{\text{cathode}}$.

---

### 📋 Corrigé détaillé et vérification des résultats

#### 1. Demi-équations et bilan de l'électrolyse
À la cathode (réduction) :
$$\text{2 H}^+_{(aq)} + 2\text{e}^- \rightleftharpoons \text{H}_{2(g)}$$

À l'anode (oxydation) :
$$\text{2 H}_2\text{O}_{(l)} \rightleftharpoons \text{O}_{2(g)} + 4\text{H}^+_{(aq)} + 4\text{e}^-$$

Bilan de l'électrolyse de l'eau acidifiée :
$$2\text{H}_2\text{O}_{(l)} \rightarrow 2\text{H}_{2(g)} + \text{O}_{2(g)}$$

#### 2. Calcul des potentiels d'équilibre
La loi de Nernst à $T = 298\,\text{K}$ s'écrit (avec $\frac{RT}{F}\ln(10) \approx 0{,}0591\,\text{V}$, souvent approché à $0{,}06\,\text{V}$) :

* Pour le couple $\text{H}^+ / \text{H}_2$ :
$$E_{eq,1} = E^\circ_1 + \frac{0{,}06}{2} \log\left(\frac{[\text{H}^+]^2}{P(\text{H}_2)/P^\circ}\right)$$
À $\text{pH} = 0$ ($\text{soit } [\text{H}^+] = 1\,\text{mol}\cdot\text{L}^{-1}$) et $P(\text{H}_2) = 1\,\text{bar}$ :
$$E_{eq,1} = 0{,}00 + 0{,}03 \log(1) = 0{,}00\,\text{V}$$

* Pour le couple $\text{O}_2 / \text{H}_2\text{O}$ :
$$E_{eq,2} = E^\circ_2 + \frac{0{,}06}{4} \log\left(P(\text{O}_2)/P^\circ \cdot [\text{H}^+]^4\right)$$
À $\text{pH} = 0$ et $P(\text{O}_2) = 1\,\text{bar}$ :
$$E_{eq,2} = 1{,}23 + 0{,}015 \log(1) = +1{,}23\,\text{V}$$

#### 3. Potentiel minimum d'électrolyse théorique
Thermodynamiquement, sans surtension, l'électrolyse commence lorsque le potentiel de l'anode est supérieur ou égal à $E_{eq,2}$ et celui de la cathode inférieur ou égal à $E_{eq,1}$. 
La différence de potentiel minimale théorique est donc :
$$E_{\text{min}} = E_{eq,2} - E_{eq,1} = 1{,}23 - 0{,}00 = 1{,}23\,\text{V}$$

#### 4. Calcul du potentiel réel de la cathode
L'intensité imposée est $I = -20\,\text{mA} = -0{,}020\,\text{A}$.
La surtension cathodique $\eta_{\text{H}_2}$ est donnée par la loi de Tafel :
$$\eta_{\text{H}_2} = a_1 + b_1 \log\left(\frac{|I|}{I_0}\right)$$
A.N. :
$$\eta_{\text{H}_2} = -0{,}10 + (-0{,}12) \log\left(\frac{20 \times 10^{-3}}{1{,}0 \times 10^{-3}}\right)$$
$$\eta_{\text{H}_2} = -0{,}10 - 0{,}12 \log(20)$$
Sachant que $\log(20) \approx 1{,}301$ :
$$\eta_{\text{H}_2} = -0{,}10 - 0{,}12 \times 1{,}301 = -0{,}10 - 0{,}156 = -0{,}256\,\text{V}$$

Le potentiel réel de la cathode est donc :
$$E_{\text{cathode}} = E_{eq,1} + \eta_{\text{H}_2} = 0{,}00 - 0{,}256 = -0{,}256\,\text{V}$$

#### 5. Tension totale aux bornes de l'électrolyseur
En négligeant la surtension anodique ($\eta_{\text{O}_2} \approx 0\,\text{V}$) et la résistance ohmique de la solution ($R_{\text{sol}} \approx 0\,\Omega$), le potentiel de l'anode est égal à son potentiel d'équilibre :
$$E_{\text{anode}} = E_{eq,2} = +1{,}23\,\text{V}$$

La tension totale $U$ à appliquer est la différence entre le potentiel de l'anode et celui de la cathode :
$$U = E_{\text{anode}} - E_{\text{cathode}} = 1{,}23 - (-0{,}256) = 1{,}486\,\text{V}$$

*Vérification dimensionnelle et numérique :* $U$ est bien homogène à des volts. La prise en compte de la cinétique (surtension) augmente la tension nécessaire par rapport à la valeur thermodynamique réversible ($1{,}486\,\text{V} > 1{,}23\,\text{V}$), ce qui est physiquement cohérent (la surtension dissipe de l'énergie sous forme thermique).