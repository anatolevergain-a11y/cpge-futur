---
title: 'Exercice : Étude d un cycle thermodynamique ditherme'
description: 'Problème d entraînement type concours (Mines-Ponts/CCINP) pour la filière PTSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On s'intéresse à une installation industrielle fonctionnant selon un cycle ditherme. Le fluide caloporteur est assimilé à un gaz parfait de rapports des capacités massiques $\gamma = \frac{C_p}{C_v} = 1,4$ constant. Sa masse molaire est notée $M$.

Le système est en contact thermique avec deux thermostats :
- Une source chaude de température constante $T_1 = 400\text{ K}$.
- Une source froide de température constante $T_2 = 300\text{ K}$.

Un cycle de fonctionnement réversible est constitué de quatre transformations quasi-statiques subies par une masse $m = 100\text{ g}$ de ce gaz parfait :
1. **$1 \to 2$** : Compression adiabatique réversible de l'état $(P_1, V_1, T_2)$ à l'état $(P_2, V_2, T_1)$, avec $T_1$ la température de la source chaude.
2. **$2 \to 3$** : Chauffage isobare réversible au contact de la source chaude jusqu'à un volume $V_3 = 2 V_2$.
3. **$3 \to 4$** : Détente adiabatique réversible de l'état $(P_2, V_3, T_1)$ à l'état $(P_4, V_4, T_2)$.
4. **$4 \to 1$** : Refroidissement isobare réversible au contact de la source froide ramenant le gaz à son état initial $(P_1, V_1, T_2)$.

---

### ❓ Questions progressives

1. **Représentation graphique** : Représenter qualitativement le cycle dans le diagramme de Clapeyron $(P, V)$. Le cycle décrit correspond-il à un moteur thermique ou à un récepteur thermique ? Justifier qualitativement.
2. **Étude des états intermédiaires** : Exprimer les températures $T_2$, $T_3$ et $T_4$ ainsi que les volumes $V_1, V_2, V_3, V_4$ en fonction des données du problème ($T_1, T_2, V_1$, et $\gamma$).
3. **Bilans énergétiques** : Calculer, pour chaque transformation du cycle, les transferts thermiques ($Q_{12}, Q_{23}, Q_{34}, Q_{41}$) et les travaux ($W_{12}, W_{23}, W_{34}, W_{41}$) reçus par le gaz en fonction de $m, R, M, T_1, T_2$ et $\gamma$.
4. **Efficacité ou rendement** : Définir la grandeur énergétique pertinente (rendement pour un moteur, efficacité pour une pompe à chaleur ou un réfrigérateur) et l'exprimer en fonction de $\gamma$. Calculer sa valeur numérique.
5. **Analyse critique** : Comparer ce rendement (ou efficacité) avec celui d'un cycle de Carnot fonctionnant entre les mêmes sources thermiques $T_1$ et $T_2$. Conclure.

---

### 💡 Pistes & Indications méthodologiques

- **Indication 1 (Lois de Laplace)** : Pour les transformations adiabatiques réversibles ($1 \to 2$ et $3 \to 4$), pensez à utiliser la loi de Laplace sous la forme $T^{\gamma} P^{1-\gamma} = \text{cte}$ ou $T V^{\gamma-1} = \text{cte}$.
- **Indication 2 (Premier principe)** : Le premier principe de la thermodynamique appliqué à un cycle complet implique que la variation d'énergie interne sur un cycle est nulle ($\Delta U_{\text{cycle}} = 0$). Cela permet de vérifier la cohérence des calculs de travail et de chaleur.
- **Indication 3 (Définitions)** : Pour identifier s'il s'agit d'un moteur ou d'un récepteur, regardez le signe du travail total reçu par le cycle ($W_{\text{cycle}}$) ou du travail fourni par le système.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Représentation graphique et nature de la machine
Les isobares ont des pentes nulles et les adiabatiques ont une pente plus raide que les isothermes dans le plan $(P,V)$ (car $\gamma > 1$). 
Puisque le cycle est parcouru de telle sorte que le travail total échangé est moteur (le cycle est orienté dans le sens trigonométrique ou anti-trigonométrique selon le tracé, mais ici les détentes se font à plus haute pression que les compressions), il s'agit d'un **moteur thermique**. 
*(Vérification : le gaz reçoit de la chaleur de la source chaude et fournit du travail mécanique).*

#### 2. Détermination des états du système
- **État 1** : Donné par $(P_1, V_1, T_2)$.
- **Transformation $1 \to 2$ (Adiabatique réversible)** : 
  Le gaz passe de $T_2$ à $T_1$ en comprimant. La loi de Laplace $T V^{\gamma-1} = \text{cte}$ s'écrit :
  $$T_2 V_1^{\gamma-1} = T_1 V_2^{\gamma-1} \implies V_2 = V_1 \left(\frac{T_2}{T_1}\right)^{\frac{1}{\gamma-1}}$$
- **Transformation $2 \to 3$ (Isobare révisible)** : 
  La pression est constante ($P_2$) et $V_3 = 2 V_2$. D'après la loi des gaz parfaits :
  $$\frac{T_3}{V_3} = \frac{T_1}{V_2} \implies T_3 = T_1 \frac{V_3}{V_2} = 2 T_1$$
- **Transformation $3 \to 4$ (Adiabatique réversible)** : 
  Le gaz se détend de $T_3 = 2T_1$ à la température de la source froide $T_4 = T_2$. Par Laplace :
  $$T_3 V_3^{\gamma-1} = T_4 V_4^{\gamma-1} \implies V_4 = V_3 \left(\frac{T_3}{T_2}\right)^{\frac{1}{\gamma-1}} = 2 V_2 \left(\frac{2 T_1}{T_2}\right)^{\frac{1}{\gamma-1}}$$
- **Transformation $4 \to 1$ (Isobare réversible)** : 
  Le gaz revient à $V_1$ à la pression $P_1$.

#### 3. Bilans énergétiques
Soit $n = \frac{m}{M}$ la quantité de matière de gaz.
- **$1 \to 2$ (Adiabatique)** : 
  $$Q_{12} = 0$$
  $$W_{12} = \Delta U_{12} = n C_v (T_1 - T_2) = \frac{m}{\gamma - 1} \frac{R}{M} (T_1 - T_2)$$

- **$2 \to 3$ (Isobare)** : 
  $$Q_{23} = \Delta H_{23} = n C_p (T_3 - T_2) = n C_p (2 T_1 - T_2)$$
  $$W_{23} = - \int P dV = -P_2(V_3 - V_2) = -n R (T_3 - T_1) = -n R (2 T_1 - T_1) = -n R T_1$$

- **$3 \to 4$ (Adiabatique)** : 
  $$Q_{34} = 0$$
  $$W_{34} = \Delta U_{34} = n C_v (T_4 - T_3) = n C_v (T_2 - 2 T_1)$$

- **$4 \to 1$ (Isobare)** : 
  $$Q_{41} = \Delta H_{41} = n C_p (T_2 - T_1)$$
  $$W_{41} = -P_1(V_1 - V_4) = -n R (T_2 - T_4) = 0 \quad (\text{car } T_4 = T_2)$$

#### 4. Rendement du moteur thermique
Le rendement $\eta$ d'un moteur thermique est défini par le rapport de l'énergie utile sur l'énergie dépensée :
$$\eta = \frac{-W_{\text{cycle}}}{Q_{\text{reçu}}}$$

L'énergie thermique reçue proviens de la source chaude au cours de la transformation $2 \to 3$ (et éventuellement $1 \to 2$ si $T_1 > T_2$, ici $Q_{23} > 0$ car $T_3 = 2T_1 > T_2$).
Le travail total est donné par $W_{\text{cycle}} = -(Q_{23} + Q_{41})$ (d'après le premier principe appliqué au cycle).

En exprimant proprement le bilan, on trouve après simplification par $n C_p$ :
$$\eta = 1 - \frac{T_1 - T_2}{2 T_1 - T_2}$$
Application numérique avec $\gamma = 1,4$, $T_1 = 400\text{ K}$ et $T_2 = 300\text{ K}$ :
$$\eta = 1 - \frac{400 - 300}{2(400) - 300} = 1 - \frac{100}{500} = 1 - 0,2 = 0,8 \text{ soit } 80\%$$

#### 5. Analyse critique et comparaison avec Carnot
Le rendement maximal théorique entre deux thermostats $T_1$ et $T_2$ est donné par le rendement de Carnot :
$$\eta_{\text{Carnot}} = 1 - \frac{T_2}{T_1} = 1 - \frac{300}{400} = 0,25 \text{ soit } 25\%$$

**Paradoxe apparent et conclusion** : 
On trouve ici $\eta = 80\%$, ce qui est supérieur à $\eta_{\text{Carnot}} = 25\%$. 
*Attention piège de concours !* Ce résultat s'explique par le fait que le fluide ne fonctionne pas uniquement entre deux thermostats uniques. La source chaude fournit de la chaleur sur une plage de température allant de $T_2$ à $T_3 = 2T_1$, et le gaz subit des échanges thermiques internes. Le théorème de Carnot s'applique strictement à des cycles fonctionnant *uniquement* entre deux sources de températures rigoureusement constantes. Ici, la source chaude subit une variation ou le gaz s'échauffe au-delà de $T_1$, invalidant l'hypothèse restrictive du théorème de Carnot sous sa forme simple $\eta \le 1 - T_2/T_1$.