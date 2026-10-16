---
title: 'Exercice 1 : Enthalpie de changement d état et équation de Clapeyron'
description: 'Problème corrigé type concours.'
---

### 🌐 Énoncé du problem / Cadre d'étude

Le présent problème s'intéresse à l'étude thermodynamique du changement d'état liquide-vapeur d'un corps pur, l'eau (notée $\text{H}_2\text{O}$), autour de son point d'ébullition sous pression atmosphérique standard. L'objectif est d'exploiter le premier et le second principe de la thermodynamique pour relier les grandeurs molaires de changement d'état à l'évolution de la pression de vapeur saturante en fonction de la température, via la formule de Clapeyron, puis de proposer une modélisation numérique simplifiée de ce comportement.

On rappelle les constantes universelles et données utiles à $T = 373,15\text{ K}$ :
* Température d'ébullition standard de l'eau sous $P^\circ = 1,013 \times 10^5\text{ Pa}$ : $T_{\text{éb}} = 373,15\text{ K}$.
* Constante des gaz parfaits : $R = 8,314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$.
* Enthalpie molaire de vaporisation de l'eau à $373,15\text{ K}$ : $\Delta_{\text{vap}}H_m(373,15\text{ K}) = 40,66\text{ kJ}\cdot\text{mol}^{-1}$.
* Masses molaires : $M(\text{H}) = 1,0\text{ g}\cdot\text{mol}^{-1}$, $M(\text{O}) = 16,0\text{ g}\cdot\text{mol}^{-1}$.
* On modélisera la vapeur d'eau comme un gaz parfait et le volume molaire du liquide sera considéré comme négligeable devant celui du gaz ($V_{m,\text{liq}} \ll V_{m,\text{gaz}}$).

---

### ❓ Questions progressives

1. Définir thermodynamiquement l'enthalpie molaire de changement d'état $\Delta_{\text{vap}}H_m(T)$ pour la vaporisation d'un corps pur à température $T$ et pression $P$ fixées. Préciser le signe de cette grandeur et la justification énergétique macroscopique associée.
2. Énoncer la formule de Clapeyron régissant l'équilibre diphasé liquide-vapeur d'un corps pur. Rappeler son expression générale exacte en fonction de la variation d'enthalpie molaire $\Delta_{\text{vap}}H_m$, de la variation de volume molaire $\Delta_{\text{vap}}V_m$ et de la température $T$.
3. En effectuant les approximations usuelles pour un équilibre liquide-vapeur loin du point critique (gaz parfait pour la phase vapeur et volume du liquide négligeable), déduire de la formule de Clapeyron une équation différentielle liant $\frac{d(\ln P)}{dT}$, $\Delta_{\text{vap}}H_m$ et $R$.
4. On suppose dans un premier temps que l'enthalpie molaire de vaporisation $\Delta_{\text{vap}}H_m$ est constante sur l'intervalle de température considéré. Intégrer l'équation différentielle précédente pour obtenir l'expression de la pression de vapeur saturante $P(T)$ sous la forme d'une loi de type $P(T) = P_0 \exp\left(-\frac{A}{T} + B\right)$ ou équivalente.
5. Application numérique : calculer la pression de vapeur saturante de l'eau à $T_1 = 383,15\text{ K}$, sachant que $P(373,15\text{ K}) = 1,013 \times 10^5\text{ Pa}$ et que $\Delta_{\text{vap}}H_m$ est supposée constante et égale à $40,66\text{ kJ}\cdot\text{mol}^{-1}$.
6. Dans le cadre de l'utilisation de méthodes numériques en physique-numérique, on souhaite simuler l'évolution de la pression par la méthode d'Euler explicite. Écrire la relation de récurrence permettant de calculer $P_{n+1} = P(T_{n+1})$ à partir de $P_n = P(T_n)$, avec un pas de température $\Delta T = T_{n+1} - T_n$.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Penser à l'enthalpie $H$ comme fonction d'état extensive et relier $\Delta_{\text{vap}}H$ au transfert thermique à pression constante (transformation monobare isotherme).
* **Question 2 :** Utiliser la condition d'équilibre thermodynamique de deux phases en contact (égalité des potentiels chimiques $\mu_{\text{liq}}(T,P) = \mu_{\text{gaz}}(T,P)$) et différencier cette relation le long de la courbe de coexistence.
* **Question 3 :** Injecter l'équation d'état des gaz parfaits pour $V_{m,\text{gaz}}$ et appliquer l'approximation $V_{m,\text{liq}} \approx 0$. Vérifier l'homogénéité dimensionnelle.
* **Question 4 :** Une intégration simple entre l'état initial $(T_0, P_0)$ et l'état $(T, P)$ conduit directement à la loi d'Arrhenius/Clausius-Clapeyron.
* **Question 5 :** Veillez à convertir toutes les grandeurs dans le Système International (notamment l'enthalpie en $\text{J}\cdot\text{mol}^{-1}$) avant d'appliquer l'exponentielle.

---

### 📋 Corrigé détaillé et vérification des résultats

#### 1. Définition et signe de l'enthalpie molaire de vaporisation
L'enthalpie molaire de vaporisation $\Delta_{\text{vap}}H_m(T)$ correspond à la variation d'enthalpie molaire lors du passage de l'état liquide à l'état gazeux d'un corps pur à température $T$ et sous pression $P$ constante :
$$\Delta_{\text{vap}}H_m(T) = H_{m,\text{gaz}}(T,P) - H_{m,\text{liq}}(T,P)$$
Puisque la transformation s'effectue de manière isotherme et monobare, le premier principe appliqué à un système fermé conduit à $\Delta H = Q$ (transfert thermique reçu par le système). Pour vaporiser un liquide, il faut lui fournir de l'énergie thermique : le système absorbe de la chaleur ($Q > 0$). Par conséquent, **$\Delta_{\text{vap}}H_m > 0$** (transformation endothermique).

---

#### 2. Formule générale de Clapeyron
À l'équilibre entre deux phases (liquide et vapeur) d'un corps pur, les potentiels chimiques des deux phases sont égaux : 
$$\mu_{\text{liq}}(T,P) = \mu_{\text{gaz}}(T,P)$$
Le long de la courbe d'équilibre diphasé, cette égalité reste vraie, soit $d\mu_{\text{liq}} = d\mu_{\text{gaz}}$. En utilisant l'identité de Gibbs-Duhem à nombre de moles constant ($d\mu = -S_m dT + V_m dP$), on obtient :
$$-S_{m,\text{liq}} dT + V_{m,\text{liq}} dP = -S_{m,\text{gaz}} dT + V_{m,\text{gaz}} dP$$
En regroupant les termes en $dT$ et $dP$, on établit la **formule de Clapeyron** :
$$\frac{dP}{dT} = \frac{S_{m,\text{gaz}} - S_{m,\text{liq}}}{V_{m,\text{gaz}} - V_{m,\text{liq}}} = \frac{\Delta_{\text{vap}}S_m}{\Delta_{\text{vap}}V_m}$$
Puisque la transformation est isotherme et réversible à l'équilibre, on a $\Delta_{\text{vap}}S_m = \frac{\Delta_{\text{vap}}H_m}{T}$. La formule s'écrit donc sous sa forme générale :
$$\frac{dP}{dT} = \frac{\Delta_{\text{vap}}H_m}{T \Delta_{\text{vap}}V_m}$$

---

#### 3. Approximation de Clausius-Clapeyron
On applique les hypothèses simplificatrices :
1. La phase vapeur se comporte comme un gaz parfait : $V_{m,\text{gaz}} = \frac{RT}{P}$.
2. Le volume molaire du liquide est négligeable devant celui du gaz : $\Delta_{\text{vap}}V_m = V_{m,\text{gaz}} - V_{m,\text{liq}} \approx V_{m,\text{gaz}} = \frac{RT}{P}$.

En substituant dans la formule de Clapeyron :
$$\frac{dP}{dT} = \frac{\Delta_{\text{vap}}H_m}{T \left(\frac{RT}{P}\right)} = \frac{P \Delta_{\text{vap}}H_m}{R T^2}$$
En réorganisant les termes et sachant que $\frac{dP}{P} = d(\ln P)$, on obtient l'équation différentielle de Clausius-Clapeyron :
$$\frac{d(\ln P)}{dT} = \frac{\Delta_{\text{vap}}H_m}{R T^2}$$
*Vérification dimensionnelle :* $\Delta_{\text{vap}}H_m$ est en $\text{J}\cdot\text{mol}^{-1}$, $R$ en $\text{J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$, et $T^2$ en $\text{K}^2$. Le membre de droite est donc en $\text{K}^{-1}$, ce qui est bien homogène à la dérivée logarithmique par rapport à la température.

---

#### 4. Intégration de l'équation différentielle
Si l'on suppose que $\Delta_{\text{vap}}H_m$ est constante sur l'intervalle de température considéré, on sépare les variables et on intègre entre un état de référence $(T_0, P_0)$ et l'état $(T, P)$ :
$$\int_{P_0}^{P} d(\ln P) = \frac{\Delta_{\text{vap}}H_m}{R} \int_{T_0}^{T} \frac{dT}{T^2}$$
$$\ln\left(\frac{P}{P_0}\right) en = -\frac{\Delta_{\text{vap}}H_m}{R} \left(\frac{1}{T} - \frac{1}{T_0}\right)$$
En prenant l'exponentielle, on obtient la loi de variation de la pression de vapeur saturante :
$$P(T) = P_0 \exp\left[ -\frac{\Delta_{\text{vap}}H_m}{R} \left(\frac{1}{T} - \frac{1}{T_0}\right) \right]$$

---

#### 5. Application numérique
On cherche $P(T_1)$ avec $T_1 = 383,15\text{ K}$, sachant que $T_0 = 373,15\text{ K}$, $P_0 = 1,013 \times 10^5\text{ Pa}$ et $\Delta_{\text{vap}}H_m = 40,66\text{ kJ}\cdot\text{mol}^{-1} = 40,66 \times 10^3\text{ J}\cdot\text{mol}^{-1}$.

Calculons d'abord l'exposant :
$$\frac{1}{T_0} - \frac{1}{T_1} = \frac{1}{373,15} - \frac{1}{383,15} \approx 2,6798 \times 10^{-3} - 2,6099 \times 10^{-3} = 6,990 \times 10^{-5}\text{ K}^{-1}$$

Multiplions par $-\frac{\Delta_{\text{vap}}H_m}{R}$ :
$$-\frac{\Delta_{\text{vap}}H_m}{R} \left(\frac{1}{T_1} - \frac{1}{T_0}\right) = \frac{40,66 \times 10^3}{8,314} \times (6,990 \times 10^{-5}) \approx 4890,5 \times (6,990 \times 10^{-5}) \approx 0,3418$$

Calculons enfin la pression $P(T_1)$ :
$$P(383,15\text{ K}) = 1,013 \times 10^5 \times \exp(0,3418) = 1,013 \times 10^5 \times 1,4075 \approx 1,426 \times 10^5\text{ Pa}$$
La pression de vapeur saturante à $110^\circ\text{C}$ est donc d'environ $1,43\text{ bar}$.

---

#### 6. Modélisation numérique par la méthode d'Euler explicite
À partir de l'équation différentielle établie à la question 3, on exprime la dérivée de la pression :
$$\frac{dP}{dT} = \frac{P \Delta_{\text{vap}}H_m}{R T^2}$$
La méthode d'Euler explicite consiste à approcher la dérivée par un taux d'accroissement fini avec un pas $\Delta T = T_{n+1} - T_n$ :
$$\frac{P_{n+1} - P_n}{\Delta T} \approx \frac{P_n \Delta_{\text{vap}}H_m}{R T_n^2}$$
On en déduit la relation de récurrence explicite permettant de calculer $P_{n+1}$ :
$$P_{n+1} = P_n + \Delta T \left( \frac{P_n \Delta_{\text{vap}}H_m}{R T_n^2} \right) = P_n \left( 1 + \frac{\Delta_{\text{vap}}H_m \Delta T}{R T_n^2} \right)$$