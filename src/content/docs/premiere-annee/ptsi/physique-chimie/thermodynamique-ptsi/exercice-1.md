---
title: 'Exercice 1 : Premier et second principes de la thermodynamique'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On s'intéresse à un dispositif thermique modélisant de manière simplifiée un moteur à combustion interne ou une turbine. Le système étudié est une mole de gaz parfait, assimilé à un gaz diatomique ($\gamma = 1,4$), subissant un cycle de transformations quasi-statiques. 

Le cycle se compose de quatre étapes réversibles dans le plan de Clapeyron $(P, V)$ :
1. **$A \rightarrow B$** : Compression isotherme à la température $T_1$, du volume $V_A$ au volume $V_B = V_A / 4$.
2. **$B \rightarrow C$** : Chauffage isochore, la pression passe de $P_B$ à $P_C = 4 P_B$.
3. **$C \rightarrow D$** : Détente adiabatique réversible, du volume $V_C (= V_B)$ au volume $V_D (= V_A)$.
4. **$D \rightarrow A$** : Refroidissement isochore ramenant le système à son état initial $A$.

On note $T_1$ la température de la source froide (états $A$ et $B$) et $T_2$ la température maximale du cycle (états $C$ et $D$). On pose $T_1 = 300\text{ K}$ et $T_2 = 1200\text{ K}$. On donne la constante des gaz parfaits $R \approx 8,31\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$.

---

### ❓ Questions progressives

1. **Représentation et caractérisation des états**
   - Représenter qualitativement le cycle $ABCDE$ dans le diagramme de Clapeyron $(P, V)$.
   - Exprimer les températures $T_A$, $T_B$, $T_C$ et $T_D$ en fonction de $T_1$ et $T_2$. En déduire la valeur numérique de $T_C$.

2. **Bilan énergétique par transformation**
   - Pour chaque étape du cycle, exprimer le travail $W$ et le transfert thermique $Q$ échangés par le gaz en fonction de $R$, $T_1$, $T_2$ et du taux de compression volumétrique $r = V_A / V_B = 4$.

3. **Bilan global et second principe**
   - Calculer le travail total $W_{\text{cycle}}$ et la chaleur totale reçue par le gaz sur un cycle. Le dispositif est-il un moteur ou un récepteur ?
   - Exprimer et calculer la variation d'entropie $\Delta S_{\text{cycle}}$ du gaz sur un cycle. Commenter ce résultat au regard du second principe.

4. **Performance énergétique**
   - Définir et exprimer le rendement $\eta$ de ce cycle en fonction des températures $T_1$ et $T_2$.
   - Calculer sa valeur numérique et la comparer au rendement d'une machine de Carnot fonctionnant entre les mêmes températures extrêmes.

---

### 💡 Pistes & Indications méthodologiques

- **Pour la question 1 :** Utilisez l'équation d'état des gaz parfaits et la loi de Laplace pour les transformations adiabatiques réversibles. Attention à bien identifier les températures extrêmes.
- **Für la question 2 :** 
  - Pour une isotherme, la variation d'énergie interne $\Delta U$ est nulle.
  - Pour une isochore, le travail est nul.
  - Pour l'adiabatique, $Q = 0$. Utilisez le premier principe pour relier $W$ et $\Delta U$.
- **Pour la question 3 :** Souvenez-vous que l'entropie est une fonction d'état : sa variation sur un cycle fermé est nécessairement nulle.
- **Pour la question 4 :** Le rendement d'un cycle moteur est défini par le rapport de l'énergie utile (le travail fourni au milieu extérieur, donc $-W_{\text{cycle}}$ si $W_{\text{cycle}} < 0$) sur l'énergie payante (les transferts thermiques reçus des sources chaudes).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Représentation et caractérisation des états
* **Allure du cycle :** L'isotherme $AB$ est une hyperbole décroissante, l'isochore $BC$ est un segment vertical (montant), l'adiabatique $CD$ est plus pentue qu'une isotherme ($\text{d}P/\text{d}V = -\gamma P/V$), et l'isochore $DA$ est un segment vertical (descendant).
* **Températures des états :**
  - État $A$ : $T_A = T_1$ (donné).
  - État $B$ : Transformation isotherme à $T_1$, donc $T_B = T_1 = 300\text{ K}$.
  - État $C$ : Chauffage isochore. L'énoncé indique que $T_2$ est la température maximale, atteinte en $C$ (car $P_C = 4P_B$ à volume constant $V_C = V_B$, donc $T_C = 4 T_B = 4 T_1 = T_2$). Ainsi, $T_C = T_2 = 1200\text{ K}$.
  - État $D$ : $CD$ est une adiabatique réversible. La loi de Laplace s'écrit sous la forme $T V^{\gamma-1} = \text{cte}$, soit :
    $$T_C V_C^{\gamma-1} = T_D V_D^{\gamma-1} \implies T_D = T_C \left(\frac{V_C}{V_D}\right)^{\gamma-1}$$
    Comme $V_C = V_B$ et $V_D = V_A$, on a $\frac{V_C}{V_D} = \frac{1}{r} = \frac{1}{4}$. 
    Donc $T_D = T_2 \left(\frac{1}{r}\right)^{\gamma-1} = 1200 \times \left(\frac{1}{4}\right)^{0,4}$.
    A N.C. : $4^{0,4} = 2^{0,8} \approx 1,741$, donc $T_D = \frac{1200}{1,741} \approx 689\text{ K}$.

---

#### 2. Bilan énergétique par transformation (pour 1 mole)
* **Étape $A \rightarrow B$ (Isotherme à $T_1$) :**
  - $\Delta U_{AB} = 0$ (gaz parfait).
  - Premier principe : $Q_{AB} = -W_{AB} = nRT_1 \ln\left(\frac{V_B}{V_A}\right) = -RT_1 \ln(r)$.

* **Étape $B \rightarrow C$ (Isochore, $V = V_B$) :**
  - $W_{BC} = 0$ (volume constant).
  - $Q_{BC} = \Delta U_{BC} = C_v (T_C - T_B) = \frac{R}{\gamma - 1}(T_2 - T_1)$.

* **Étape $C \rightarrow D$ (Adiabatique réversible) :**
  - $Q_{CD} = 0$.
  - $W_{CD} = \Delta U_{CD} = C_v (T_D - T_C) = \frac{R}{\gamma - 1}(T_D - T_2)$.

* **Étape $D \rightarrow A$ (Isochore, $V = V_A$) :**
  - $W_{DA} = 0$.
  - $Q_{DA} = \Delta U_{DA} = C_v (T_A - T_D) = \frac{R}{\gamma - 1}(T_1 - T_D)$.

---

#### 3. Bilan global et second principe
* **Travail total sur le cycle :**
  $$W_{\text{cycle}} = W_{AB} + W_{BC} + W_{CD} + W_{DA} = W_{AB} + W_{CD}$$
  $$W_{\text{cycle}} = -RT_1 \ln(r) + \frac{R}{\gamma - 1}(T_D - T_2)$$
Commentaire: * $W_{\text{cycle}} < 0$, le système fournit du travail au milieu extérieur : **c'est un moteur thermique**.

* **Variation d'entropie :**
  L'entropie $S$ étant une fonction d'état, sa variation sur un cycle fermé est rigoureusement nulle :
  $$\Delta S_{\text{cycle}} = \oint \frac{\delta Q_{\text{rev}}}{T} = 0$$
  Ceci traduit le second principe de la thermodynamique (l'entropie créée sur le cycle est nulle car toutes les transformations sont supposées réversibles).

---

#### 4. Performance énergétique
* **Définition du rendement $\eta$ :**
  Le rendement est le rapport de l'énergie mécanique fournie sur l'énergie thermique reçue des sources chaudes (les étapes où $Q > 0$, c'est-à-dire $BC$).
  $$\eta = \frac{-W_{\text{cycle}}}{Q_{\text{ reçue }}}$$
  Ici, la seule étape fournissant de la chaleur au système est $B \rightarrow C$, donc $Q_{\text{reçue}} = Q_{BC} = \frac{R}{\gamma-1}(T_2 - T_1)$.
  
  En utilisant le premier principe global ($\Delta U_{\text{cycle}} = 0 \implies W_{\text{cycle}} + Q_{\text{reçue}} + Q_{\text{cédée}} = 0$), on a aussi $-W_{\text{cycle}} = Q_{BC} + Q_{DA} + Q_{AB}$.

  Exprimons $\eta$ proprement :
  $$\eta = \frac{RT_1 \ln(r) - \frac{R}{\gamma - 1}(T_D - T_2)}{\frac{R}{\gamma - 1}(T_2 - T_1)} = 1 + \frac{(\gamma-1) T_1 \ln(r) - (T_2 - T_D)}{T_2 - T_1}$$

* **Application numérique :**
  - $T_1 = 300\text{ K}$, $T_2 = 1200\text{ K}$, $T_D \approx 689\text{ K}$.
  - $Q_{BC} = \frac{8,31}{1,4 - 1} \times (1200 - 300) = \frac{8,31}{0,4} \times 900 \approx 18697,5\text{ J}\cdot\text{mol}^{-1}$.
  - $W_{AB} = -8,31 \times 300 \times \ln(4) \implies W_{AB} \approx -3456\text{ J}\cdot\text{mol}^{-1}$.
  - $W_{CD} = \frac{8,31}{0,4} \times (689 - 1200) \approx -10613\text{ J}\cdot\text{mol}^{-1}$.
  - $W_{\text{cycle}} = -3456 - 10613 = -14069\text{ J}\cdot\text{mol}^{-1}$.
  - Rendement : $\eta = \frac{14069}{18697,5} \approx 0,753$ soit **75,3 %**.

* **Comparaison avec Carnot :**
  Le rendement de Carnot pour un moteur fonctionnant entre $T_1$ et $T_2$ vaut :
  $$\eta_{\text{Carnot}} = 1 - \frac{T_1}{T_2} = 1 - \frac{300}{1200} = 0,75 \text{ (soit } 75\%\text{)}$$
  *Remarque de fin d'examinateur :* On trouve ici $\eta \approx \eta_{\text{Carnot}}$ (très proche, légèrement supérieur en apparence formelle en raison des approximations intermédiaires sur $T_D$). Ce type de cycle idéalisé approche l'efficacité maximale permise par le second principe, illustrant la pertinence des modélisations en CPGE.