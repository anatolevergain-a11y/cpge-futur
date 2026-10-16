---
title: 'Exercice 1 : Diagrammes d Ellingham et pyrométallurgie'
description: 'Problème d entraînement type concours pour PC.'
---

### 🌐 Énoncé du problème / Cadre d'étude

L'obtention des métaux à partir de leurs minerais oxydés (pyrométallurgie) repose souvent sur la réduction des oxydes métalliques par un réducteur adéquat, le plus couramment le carbone ou le monoxyde de carbone. 

Le but de ce problème est d'étudier la réduction de l'oxyde de zinc $\text{ZnO (s)}$ par le carbone $\text{C (s)}$, en exploitant les données thermodynamiques représentées dans les diagrammes d'Ellingham. On s'intéresse en particulier à la faisabilité de cette réduction à haute température et au rôle de l'équilibre de Boudouard.

**Données thermodynamiques à $T = 1000\text{ K}$ :**
On considère les équilibres suivants et leurs enthalpies libres standard de réaction $\Delta_r G^\circ(T)$ modélisées sous la forme affine $\Delta_r G^\circ(T) = A + B \cdot T$ (valeurs en $\text{kJ}\cdot\text{mol}^{-1}$ pour $T$ en $\text{K}$) :
1. $2\text{Zn (s,l)} + \text{O}_2\text{ (g)} = 2\text{ZnO (s)}$ : $\Delta_r G_1^\circ(T) = -1400 + 0,40 \cdot T$
2. $\text{C (s)} + \text{O}_2\text{ (g)} = \text{CO}_2\text{ (g)}$ : $\Delta_r G_2^\circ(T) = -394 - 0,003 \cdot T$
3. $2\text{CO (g)} + \text{O}_2\text{ (g)} = 2\text{CO}_2\text{ (g)}$ : $\Delta_r G_3^\circ(T) = -566 + 0,175 \cdot T$

*Données générales :*
- Température d'ebullition du zinc sous $1\text{ bar}$ : $T_{\text{éb}}(\text{Zn}) = 1180\text{ K}$.
- Constante des gaz parfaits : $R = 8,314\text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$.
- Pression standard : $P^\circ = 1\text{ bar}$.

---

### ❓ Questions progressives

1. **Tracé qualitatif et exploitation du diagramme d'Ellingham :**
   Justifier l'allure générale (pente) des droites d'Ellingham pour les réactions (1), (2) et (3). En déduire qualitativement pourquoi le carbone est un bon réducteur des oxydes métalliques à haute température.

2. **Étude de la réduction directe par le carbone :**
   On considère la réaction de réduction directe de l'oxyde de zinc par le carbone solide :
   $$\text{ZnO (s)} + \text{C (s)} = \text{Zn (g)} + \text{CO (g)}$$
   Exprimer l'enthalpie libre standard de cette réaction $\Delta_r G_4^\circ(T)$ en fonction de $\Delta_r G_1^\circ$, $\Delta_r G_2^\circ$ et des autres réactions utiles si nécessaire. Calculer sa valeur à $1000\text{ K}$.

3. **Calcul de la température d'inversion :**
   Déterminer la température minimale $T_{\text{min}}$ à partir de laquelle la réduction directe de $\text{ZnO (s)}$ par $\text{C (s)}$ devient thermodynamiquement possible sous pression standard ($P^\circ = 1\text{ bar}$ pour les gaz).

4. **Influence de la pression et équilibre de Boudouard :**
   À la température $T = 1000\text{ K}$, le zinc formé est à l'état gazeux. 
   Écrire l'équation de la réaction de Boudouard (entre $\text{C(s)}$, $\text{CO(g)}$ et $\text{CO}_2\text{(g)}$) et calculer son enthalpie libre standard $\Delta_r G_{\text{Boudouard}}^\circ$ à $1000\text{ K}$.
   En déduire la composition de la phase gaz en équilibre avec le carbone solide et l'oxyde de zinc à $1000\text{ K}$.

---

### 💡 Pistes & Indications méthodologiques

- **Q1 :** Pensez à la loi de van 't Hoff et à la variation de l'entropie de réaction $\Delta_r S^\circ$ selon le nombre de moles de gaz consommés ou formés.
- **Q2 :** Combinez judicieusement les réactions (1) et (2) (ou l'équilibre de Boudouard) pour faire apparaître la réaction (4). Attention à la stœchiométrie !
- **Q3 :** La condition de thermodépendance pour qu'une réaction soit spontanée est $\Delta_r G^\circ(T) < 0$. Résolvez l'inéquation en $T$.
- **Q4 :** L'équilibre de Boudouard combine (2) et (3). Exprimez la constante d'équilibre $K^\circ$ en fonction des pressions partielles et utilisez la relation liant $\Delta_r G^\circ$ et $K^\circ$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Allure des droites d'Ellingham et rôle du carbone
* **Justification des pentes :** 
  D'après la relation de Gibbs-Helmholtz, $\frac{d(\Delta_r G^\circ)}{dT} = -\Delta_r S^\circ$. 
  Pour la formation d'un oxyde (ex: (1) ou (3)), une mole de gaz $\text{O}_2$ est consommé : $\Delta_r S^\circ \approx -S(\text{O}_2, \text{g}) < 0$. Par conséquent, la pente $\frac{d(\Delta_r G^\circ)}{dT}$ est **positive** (droites montantes).
  Pour l'oxydation du carbone en $\text{CO}_2$ (réaction (2)), $\text{C(s)} + \text{O}_2\text{(g)} = \text{CO}_2\text{(g)}$, le nombre de moles de gaz reste constant ($\Delta_n(\text{gaz}) = 0$), la pente est donc quasi-nulle. Si l'on considérait $\text{C(s)} + \frac{1}{2}\text{O}_2\text{(g)} = \text{CO(g)}$, $\Delta_n(\text{gaz}) > 0$, la pente serait fortement **négative**.
* **Rôle du carbone :** 
  La pente négative de la droite d'oxydation du carbone en $\text{CO}$ fait que, lorsque la température augmente, $\Delta_r G^\circ$ de cette oxydation devient de plus en plus négatif. Le diagramme montre que la droite du carbone croise celle des oxydes métalliques à haute température : le carbone devient alors plus réducteur que le métal, rendant la réduction possible.

#### 2. Enthalpie libre standard de la réduction directe
La réaction recherchée (4) est :
$$\text{ZnO (s)} + \text{C (s)} = \text{Zn (g)} + \text{CO (g)}$$
On combine les réactions :
- $-\frac{1}{2} \times [2\text{ZnO (s)} = 2\text{Zn (s,l)} + \text{O}_2\text{ (g)}] \implies -\frac{1}{2}\Delta_r G_1^\circ$
- $+ \text{C (s)} + \frac{1}{2}\text{O}_2\text{ (g)} = \text{CO (g)}$ (qui s'obtient en combinant (2) et (3) : $\frac{1}{2}[\text{C} + \text{O}_2 = \text{CO}_2$ et $\text{CO}_2 + \text{C} = 2\text{CO}$... ou plus simplement en connaissant les données). 

*Note de calcul directe :* 
Exprimons $\Delta_r G_4^\circ$ à partir de (1) et de la réaction d'oxydation du carbone en $\text{CO}$ (notée $\Delta_r G_{\text{CO}}^\circ$). 
D'après les données, la réaction $\text{C (s)} + \frac{1}{2}\text{O}_2\text{ (g)} = \text{CO (g)}$ a pour $\Delta_r G^\circ = \frac{1}{2}(\Delta_r G_2^\circ - \Delta_r G_3^\circ)$ :
$$\Delta_r G_{\text{CO}}^\circ(T) = \frac{1}{2} \left[ (-394 - 0,003 T) - (-566 + 0,175 T) \right] = \frac{1}{2} \left[ 172 - 0,178 T \right] = 86 - 0,089 \cdot T$$

La réaction (4) est la somme de $\text{ZnO (s)} = \text{Zn (g)} + \frac{1}{2}\text{O}_2\text{ (g)}$ (soit $-\frac{1}{2}\Delta_r G_1^\circ$) et de $\text{C (s)} + \frac{1}{2}\text{O}_2\text{ (g)} = \text{CO (g)}$ :
$$\Delta_r G_4^\circ(T) = -\frac{1}{2}\Delta_r G_1^\circ(T) + \Delta_r G_{\text{CO}}^\circ(T)$$
$$\Delta_r G_4^\circ(T) = -\frac{1}{2}(-1400 + 0,40 T) + (86 - 0,089 T)$$
$$\Delta_r G_4^\circ(T) = 700 - 0,20 T + 86 - 0,089 T = 786 - 0,289 \cdot T \quad (\text{en kJ}\cdot\text{mol}^{-1})$$

*Application numérique à $T = 1000\text{ K}$ :*
$$\Delta_r G_4^\circ(1000) = 786 - 0,289 \times 1000 = 786 - 289 = +497\text{ kJ}\cdot\text{mol}^{-1}$$
*(À $1000\text{ K}$, $\Delta_r G_4^\circ > 0$, la réduction directe n'est pas spontanée sous pression standard).*

#### 3. Calcul de la température d'inversion
La réduction devient thermodynamiquement possible si $\Delta_r G_4^\circ(T) < 0$ :
$$786 - 0,289 \cdot T < 0 \implies T > \frac{786}{0,289} \approx 2719\text{ K}$$
Commentaire: * Cette température est extrêmement élevée (et supérieure à la température de vaporization ou dissociation de nombreux composés). Dans l'industrie, on n'utilise pas la réduction directe pure par le carbone de cette manière à si haute température, mais on couple le système avec l'équilibre de Boudouard pour abaisser la température nécessaire.

#### 4. Influence de l'équilibre de Boudouard
* **Équilibre de Boudouard :**
  $$\text{C (s)} + \text{CO}_2\text{ (g)} = 2\text{CO (g)}$$
  Son enthalpie libre standard $\Delta_r G_{\text{Boudouard}}^\circ$ s'obtient par la différence entre deux fois l'oxydation en $\text{CO}$ et l'oxydation en $\text{CO}_2$ (soit $2 \times \text{Reaction CO} - \text{Réaction (2)}$) :
  $\Delta_r G_{\text{Boudouard}}^\circ(T) = 2(86 - 0,089 T) - (-394 - 0,003 T) = 172 - 0,178 T + 394 + 0,003 T$
  $$\Delta_r G_{\text{Boudouard}}^\circ(T) = 566 - 0,175 \cdot T$$
  À $T = 1000\text{ K}$ :
  $$\Delta_r G_{\text{Boudouard}}^\circ(1000) = 566 - 0,175 \times 1000 = 566 - 175 = +391\text{ kJ}\cdot\text{mol}^{-1}$$

* **Composition de la phase gaz :**
  À l'équilibre global, le système met en jeu la pression partielle des gaz $\text{Zn}$ et $\text{CO}$. 
  Pour la réaction (4), $K^\circ_4 = \frac{P_{\text{Zn}}}{P^\circ} \frac{P_{\text{CO}}}{P^\circ} = \exp\left(-\frac{\Delta_r G_4^\circ}{RT}\right)$.
  L'couplage avec l'équilibre de Boudouard fixe le rapport des pressions partielles de $\text{CO}$ et $\text{CO}_2$, régulant ainsi le potentiel oxygène du milieu réactionnel. Le carbone réagit avec $\text{CO}_2$ pour générer du $\text{CO}$, appauvrissant le milieu en oxydes gazeux et déplaçant ainsi drastiquement la stœchiométrie de réduction de $\text{ZnO}$ vers la formation de zinc métallique dès des températures de l'ordre de $1200\text{ K}$ en pratique industrielle.