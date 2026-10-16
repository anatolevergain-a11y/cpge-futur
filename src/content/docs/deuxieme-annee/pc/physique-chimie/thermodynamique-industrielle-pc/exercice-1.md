---
title: 'Exercice 1 : Changements d état des corps purs'
description: 'Problème d entraînement type concours pour PC.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les changements d'état des corps purs sont au cœur de nombreuses applications industrielles, notamment dans les cycles frigorifiques et la production d'énergie. On s'intéresse dans ce problème au comportement d'un système diphasique eau/vapeur d'eau, modélisé pour certaines phases par des approximations thermodynamiques classiques, puis soumis à une étude critique de ces modèles.

On considère l'eau (corps pur) dont les grandeurs thermodynamiques massiques sont notées en minuscules (enthalpie massique $h$, entropie massique $s$, volume massique $v$). La pression d'équilibre liquide-vapeur à la température $T$ est notée $P_{\text{sat}}(T)$.

Données numériques et constantes (à $T_0 = 373{,}15\text{ K}$) :
- Température d'ébullition sous $P^{\circ} = 1{,}013\text{ bar}$ : $T_{\text{eb}} = 373{,}15\text{ K}$
- Chaleur latente massique de vaporisation à $T_{\text{eb}}$ : $L_v(T_{\text{eb}}) = 2{,}25 \times 10^{6}\text{ J}\cdot\text{kg}^{-1}$
- Constante molaire des gaz parfaits : $R = 8{,}314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$
- Masse molaire de l'eau : $M = 18{,}0\text{ g}\cdot\text{mol}^{-1}$
- Capacité thermique massique à pression constante de l'eau liquide : $c_l \approx 4{,}18\text{ kJ}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$ (supposée constante)

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Relation de Clapeyron :** Établir la formule de Clapeyron reliant la pente de la courbe de saturation $\frac{\mathrm{d}P_{\text{sat}}}{\mathrm{dT}}$, la chaleur latente $L_v$, la température $T$, et les volumes massiques $v_v$ (vapeur) et $v_l$ (liquide).
2. **Approximations usuelles :** Sous quelles conditions (portant sur $T$ et $P_{\text{sat}}$) peut-on assimiler la phase vapeur à un gaz parfait et négliger le volume massique du liquide devant celui de la vapeur ? En déduire l'expression simplifiée de $\frac{\mathrm{d}\ln P_{\text{sat}}}{\mathrm{d}T}$.
3. **Intégration et application numérique :** En supposant la chaleur latente $L_v$ constante sur l'intervalle d'étude, intégrer l'équation précédente pour exprimer $P_{\text{sat}}(T)$. Calculer la pression de saturation à $T = 383{,}15\text{ K}$.
4. **Compression d'une vapeur saturée sèche :** On dispose d'une masse $m = 1\text{ kg}}$ de vapeur d'eau saturée sèche à la température $T_1 = 373{,}15\text{ K}$. Le système subit une compression adiabatique réversible (isentropique) jusqu'à une pression $P_2 = 2{,}0\text{ bar}$. Déterminer l'état final du système (liquide, vapeur ou diphasique) et la température finale $T_2$.
5. **Analyse critique du modèle :** 
   - Discuter la validité de l'hypothèse de constance de $L_v(T)$ sur une large plage de température à l'aide du premier principe appliqué aux variations de $L_v$.
   - Conclure sur les limites de l'approximation du gaz parfait pour la vapeur d'eau à haute pression.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Utiliser l'égalité des enthalpies libres massiques (potentiels chimiques) des deux phases le long de la courbe de saturation, $\mathrm{d}g_l = \mathrm{d}g_v$.
- **Question 2 :** Utiliser la loi des gaz parfaits pour $v_v$ et comparer $v_l$ et $v_v$ à l'aide des masses molaires et des masses volumiques usuelles.
- **Question 3 :** Une simple intégration entre $T_{\text{eb}}$ et $T$ permet d'obtenir une loi du type $\ln\left(\frac{P_2}{P_1}\right) = \dots$
- **Question 4 :** L'entropie du système reste constante ($s_1 = s_2$). Exprimez l'entropie d'un mélange diphasique en fonction du titre en vapeur $x$.
- **Question 5 :** Pensez à relier $\frac{\mathrm{d}L_v}{\mathrm{d}T}$ aux capacités thermiques massiques des deux phases.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Relation de Clapeyron
Le long de la courbe de saturation, les phases liquide ($l$) et vapeur ($v$) coexistent en équilibre thermodynamique à la pression $P_{\text{sat}}(T)$ et à la température $T$. Les potentiels chimiques massiques (ou enthalpies libres massiques $g$) sont égaux :
$$g_l(T, P_{\text{sat}}) = g_v(T, P_{\text{sat}})$$
Si l'on fait varier la température de $\mathrm{d}T$ et la pression de $\mathrm{d}P_{\text{sat}}$ le long de cette courbe, les variations des enthalpies libres massiques sont égales :
$$\mathrm{d}g_l = -s_l \mathrm{d}T + v_l \mathrm{d}P_{\text{sat}} = \mathrm{d}g_v = -s_v \mathrm{d}T + v_v \mathrm{d}P_{\text{sat}}$$
En regroupant les termes en $\mathrm{d}T$ et en $\mathrm{d}P_{\text{sat}}$ :
$$(v_v - v_l) \mathrm{d}P_{\text{sat}} = (s_v - s_l) \mathrm{d}T$$
Or, lors d'un changement d'état isotherme et isobare, la variation d'entropie massique est liée à la chaleur latente massique par $s_v - s_l = \frac{L_v}{T}$. On obtient ainsi la **relation de Clapeyron** :
$$\frac{\mathrm{d}P_{\text{sat}}}{\mathrm{d}T} = \frac{L_v}{T(v_v - v_l)}$$

#### 2. Approximations usuelles
- **Phase vapeur assimilée à un gaz parfait :** $P_{\text{sat}} v_v = \frac{R}{M} T \implies v_v = \frac{RT}{M P_{\text{sat}}}$. Cette approximation est valide si la pression $P_{\text{sat}}$ est suffisamment faible (loin du point critique, molécules espacées).
- **Volume du liquide négligeable :** Le volume massique du liquide est $v_l \approx 10^{-3}\text{ m}^3\cdot\text{kg}^{-1}$, tandis que pour la vapeur à $100\,^{\circ}\text{C}$, $v_v \approx \frac{8{,}314 \times 373{,}15}{0{,}018 \times 10^5} \approx 1{,}72\text{ m}^3\cdot\text{kg}^{-1}$. On a donc $v_l \ll v_v$.

En injectant ces approximations dans la formule de Clapeyron :
$$\frac{\mathrm{d}P_{\text{sat}}}{\mathrm{d}T} \approx \frac{L_v}{T v_v} = \frac{L_v}{T \left(\frac{RT}{M P_{\text{sat}}}\right)} = \frac{M L_v P_{\text{sat}}}{R T^2}$$
Soit l'expression recherchée :
$$\frac{\mathrm{d}\ln P_{\text{sat}}}{\mathrm{d}T} = \frac{M L_v}{R T^2}$$

#### 3. Intégration et application numérique
En supposant $L_v$ constante, on intègre l'équation différentielle entre $T_{\text{eb}}$ (où $P_{\text{sat}}(T_{\text{eb}}) = P^{\circ}$) et $T$ :
$$\int_{P^{\circ}}^{P_{\text{sat}}(T)} \mathrm{d}\ln P = \frac{M L_v}{R} \int_{T_{\text{eb}}}^{T} \frac{\mathrm{d}T}{T^2}$$
$$\ln\left(\frac{P_{\text{sat}}(T)}{P^{\circ}}\right) = -\frac{M L_v}{R} \left(\frac{1}{T} - \frac{1}{T_{\text{eb}}}\right)$$

Application numérique pour $T = 383{,}15\text{ K}$ ($10\,^{\circ}\text{C}$ au-dessus de $T_{\text{eb}}$) :
- $M = 0{,}018\text{ kg}\cdot\text{mol}^{-1}$
- $L_v = 2{,}25 \times 10^{6}\text{ J}\cdot\text{kg}^{-1}$
- $R = 8{,}314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$
- $P^{\circ} = 1{,}013\text{ bar}$

$$\ln\left(\frac{P_{\text{sat}}}{P^{\circ}}\right) = -\frac{0{,}018 \times 2{,}25 \times 10^6}{8{,}314} \left(\frac{1}{383{,}15} - \frac{1}{373{,}15}\right) = -4869{,}0 \times (-6{,}99 \times 10^{-5}) \approx 0{,}340$$
$$P_{\text{sat}}(383{,}15\text{ K}) = 1{,}013 \times \exp(0{,}340) \approx 1{,}42\text{ bar}$$

#### 4. Compression d'une vapeur saturée sèche
À l'état initial $1$, l'eau est sous forme de vapeur saturée sèche à $T_1 = 373{,}15\text{ K}$ et $P_1 = 1{,}013\text{ bar}$. Son entropie massique est $s_1 = s_v(T_1)$.
La compression est isentropique ($s_2 = s_1$). 
Si l'on comprime de la vapeur saturée sèche de manière adiabatique réversible, l'entropie augmente généralement pour une phase monophasique gazeuse, mais ici le système entre dans la zone diphasique car la pression finale $P_2 = 2{,}0\text{ bar}$ est supérieure à la pression de saturation à $373{,}15\text{ K}$ ($1{,}013\text{ bar}$).

Précisément, l'entropie de la vapeur saturée sèche initiale est supérieure à l'entropie de la vapeur saturée sèche à la pression $P_2$, mais voyons le titre $x_2$ du mélange final :
L'entropie massique dans l'état diphasique 2 s'écrit :
$$s_2 = (1 - x_2) s_{l}(T_2) + x_2 s_{v}(T_2)$$
où $x_2$ est le titre en massique de vapeur. 
Puisque $s_1 = s_v(T_1)$, et que lors d'une compression isentropique d'une vapeur saturée, on se retrouve partiellement liquéfié ($0 < x_2 < 1$), la température finale $T_2$ est la température de saturation associée à $P_2 = 2{,}0\text{ bar}$.

Déterminons $T_2$ par la formule de Clapeyron intégrée :
$$\ln\left(\frac{2{,}0}{1{,}013}\right) = -\frac{0{,}018 \times 2{,}25 \times 10^6}{8{,}314} \left(\frac{1}{T_2} - \frac{1}{373{,}15}\right)$$
$$\ln(1{,}974) = 0{,}680 = 4869{,}0 \times \left(\frac{1}{373{,}15} - \frac{1}{T_2}\right)$$
$$\frac{1}{T_2} = \frac{1}{373{,}15} - \frac{0{,}680}{4869{,}0} = 2{,}6797 \times 10^{-3} - 1{,}396 \times 10^{-4} = 2{,}540 \times 10^{-3}\text{ K}^{-1}$$
$$T_2 \approx 393{,}7\text{ K} \quad (\text{soit } 120{,}5\,^{\circ}\text{C})$$
Le système final est donc un **mélange diphasique liquide-vapeur** à la température $T_2 \approx 393{,}7\text{ K}$.

#### 5. Analyse critique du modèle
- **Constance de $L_v(T)$ :** En appliquant la loi de Kirchhoff sur la variation de la chaleur latente avec la température :
  $$\frac{\mathrm{d}L_v}{\mathrm{d}T} = c_{p,v} - c_{p,l}$$
  La capacité thermique de la vapeur $c_{p,v}$ et celle du liquide $c_{p,l}$ étant différentes, $L_v$ dépend nécessairement de la température. L'hypothèse de constance de $L_v$ n'est rigoureusement valable que pour des intervalles de température restreints ($\Delta T \ll T$).
- **Limites de l'approximation du gaz parfait :** À haute pression (proche du point critique de l'eau, $P_c \approx 221\text{ bar}$), les interactions intermoléculaires et le volume propre des molécules d'eau ne sont plus négligeables. L'équation d'état des gaz parfaits surestime nettement le volume massique $v_v$, rendant l'utilisation de la formule simplifiée de Clapeyron caduque au profit d'équations d'état plus complexes (Van der Waals, Redlich-Kwong ou tables thermodynamiques IAPWS).