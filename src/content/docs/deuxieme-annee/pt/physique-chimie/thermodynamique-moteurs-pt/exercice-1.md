---
title: 'Exercice 1 : Cycles de Beau de Rochas et Diesel'
description: 'Problème d entraînement type concours pour PT.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les moteurs à combustion interne équipant les véhicules automobiles fonctionnent selon des cycles thermodynamiques idéalisés. L'étude de ces cycles permet d'évaluer les performances énergétiques maximales que l'on peut espérer des moteurs réels. 

On s'intéresse dans ce problème à deux modélisations idéales de référence :
1. **Le cycle de Beau de Rochas** (ou cycle à allumage commandé, type essence).
2. **Le cycle Diesel** (ou cycle à allumage par compression).

Le fluide caloporteur est l'air, assimilé à un gaz parfait de masse molaire $M$, de capacité thermique massique à pression constante $c_p$ et à volume constant $c_v$, toutes deux supposées constantes. On note $\gamma = \frac{c_p}{c_v} = 1,4$ le coefficient isentropique de l'air.

Le cycle s'effectue dans un cylindre muni d'un piston mobile. Le volume minimal de la chambre est $V_c$ (point mort haut, PMH) et le volume maximal est $V_max$ (point mort bas, PMB). On définit le taux de compression volumique par :
$$\alpha = \frac{V_{\text{max}}}{V_c} > 1$$

---

### ❓ Questions progressives

#### Partie I : Étude du cycle de Beau de Rochas
Le cycle théorique de Beau de Rochas est constitué de cinq transformations réversibles formant un cycle fermé :
- **1 $\to$ 2** : Compression isentropique de l'état $(P_1, V_{\text{max}}, T_1)$ à l'état $(P_2, V_c, T_2)$.
- **2 $\to$ 3** : Chauffage isochore de l'état $(P_2, V_c, T_2)$ à l'état $(P_3, V_c, T_3)$, simulant la combustion.
- **3 $\to$ 4** : Détente isentropique de l'état $(P_3, V_c, T_3)$ à l'état $(P_4, V_{\text{max}}, T_4)$.
- **4 $\to$ 1** : Refroidissement isochore de l'état $(P_4, V_{\text{max}}, T_4)$ à l'état initial $(P_1, V_{\text{max}}, T_1)$.

**Q1.** Représenter qualitativement ce cycle dans le diagramme de Clapeyron $(P, V)$ et dans le diagramme entropique $(T, S)$.

**Q2.** Exprimer la quantité de chaleur $Q_{\text{ reçue}}$ reçue par le gaz au cours du cycle (exclusivement lors de la phase de combustion 2 $\to$ 3) en fonction de $n$ (quantité de matière), $c_v$, $T_2$ et $T_3$.

**Q3.** Exprimer la quantité de chaleur $Q_{\text{ cédée}}$ cédée par le gaz au milieu extérieur au cours du cycle (comptée algébriquement ou en valeur absolue) en fonction de $n$, $c_v$, $T_1$ et $T_4$.

**Q4.** Définir le rendement thermique $\eta$ du cycle. Montrer que ce rendement s'exprime sous la forme :
$$\eta_{\text{BR}} = 1 - \frac{T_4 - T_1}{T_3 - T_2}$$

**Q5.** En utilisant les relations de Laplace pour les transformations isentropiques, exprimer le rendement $\eta_{\text{BR}}$ uniquement en fonction du taux de compression $\alpha$ et de $\gamma$. Calculer sa valeur numérique pour $\alpha = 9$ et $\gamma = 1,4$.

---

#### Partie II : Étude du cycle Diesel
Dans le cycle Diesel, la combustion n'a plus lieu à volume constant, mais à *pression constante*. Le cycle comprend les étapes suivantes :
- **1 $\to$ 2** : Compression isentropique de $(P_1, V_{\text{max}}, T_1)$ à $(P_2, V_c, T_2)$.
- **2 $\to$ 3'** : Chauffage *isobare* de $(P_2, V_c, T_2)$ à $(P_2, V_{3'}, T_{3'})$. On définit le taux de taux d'injection (ou de détente préalable) par $\beta = \frac{V_{3'}}{V_c}$ (avec $1 < \beta < \alpha$).
- **3' $\to$ 4'** : Détente isentropique de $(P_2, V_{3'}, T_{3'})$ à $(P_4', V_{\text{max}}, T_{4'})$.
- **4' $\to$ 1** : Refroidissement isochore de $(P_4', V_{\text{max}}, T_{4'})$ à $(P_1, V_{\text{max}}, T_1)$.

**Q6.** Exprimer la quantité de chaleur reçue par le gaz au cours de la transformation isobare 2 $\to$ 3' en fonction de $n$, $c_p$, $T_2$ et $T_{3'}$.

**Q7.** Exprimer la quantité de chaleur cédée par le gaz au cours du refroidissement isochore 4' $\to$ 1 en fonction de $n$, $c_v$, $T_1$ et $T_{4'}$.

**Q8.** Établir l'expression du rendement thermique $\eta_{\text{Diesel}}$ en fonction de $\alpha$, $\beta$ et $\gamma$.

**Q9.** **Analyse critique du modèle :** Pour un même taux de compression $\alpha$, quel cycle a le meilleur rendement théorique entre Beau de Rochas et Diesel ? Discuter de la validité de ces modèles face aux moteurs réels (pertes thermiques, frotterments, irréversibilités de la combustion).

---

### 💡 Pistes & Indications méthodologiques

- **Diagrammes énergétiques :** Pensez à l'orientation des cycles dans le plan $(P,V)$ (sens horaire pour un moteur thermique qui fournit du travail).
- **Premier principe :** Pour les transformations isochores et isobares, utilisez $dU = \delta Q + \delta W$ avec $\delta W = -P dV$ (donc $\delta Q = n c_v dT$ à $V$ cst et $\delta Q = n c_p dT$ à $P$ cst).
- **Relations de Laplace :** $T V^{\gamma-1} = \text{cst}$ et $P V^\gamma = \text{cst}$ sont indispensables pour lier les températures entre elles.
- **Astuce algébrique pour le rendement Diesel :** Factorisez par $T_2$ et exprimez les températures $T_{3'}$ et $T_{4'}$ en fonction de $T_1$, $\alpha$ et $\beta$ en enchaînant les lois des gaz parfaits et de Laplace.

---

### 📋 Corrigé détaillé pas à pas

#### Partie I : Cycle de Beau de Rochas

**Q1. Représentation graphique :**
- Dans $(P,V)$ : Deux isochores (lignes verticales à $V_c$ et $V_{\text{max}}$) et deux isentropiques (courbes d'équation $P V^\gamma = \text{cst}$). Le cycle est parouru dans le sens horaire.
- Dans $(T,S)$ : Deux isochores (pentes différentes, la plus inclinée étant $c_v$) et deux isentropiques (segments verticaux car $dS = 0$).

**Q2. Chaleur reçue $Q_{\text{reçue}}$ :**
La seule phase où le système reçoit de l'énergie thermique sous forme de chaleur de la part de la source chaude est la transformation isochore 2 $\to$ 3. 
$$Q_{\text{reçue}} = \Delta U_{2 \to 3} = n c_v (T_3 - T_2)$$

**Q3. Chaleur cédée $Q_{\text{cédée}}$ :**
La chaleur est cédée au milieu extérieur lors du refroidissement isochore 4 $\to$ 1 :
$$Q_{\text{cédée algébrique}} = \Delta U_{4 \to 1} = n c_v (T_1 - T_4)$$
En valeur absolue, la quantité de chaleur évacuée vers la source froide est :
$$|Q_{\text{cédée}}| = n c_v (T_4 - T_1)$$

**Q4. Rendement thermique $\eta_{\text{BR}}$ :**
Par définition, le rendement d'un moteur thermique cyclique est le rapport entre le travail total fourni (donc $-W_{\text{cycle}}$) et la chaleur reçue :
$$\eta_{\text{BR}} = \frac{-W_{\text{cycle}}}{Q_{\text{reçue}}} = \frac{Q_{\text{reçue}} - |Q_{\text{cédée}}|}{Q_{\text{reçue}}} = 1 - \frac{|Q_{\text{cédée}}|}{Q_{\text{reçue}}}$$
En substituant les expressions trouvées en Q2 et Q3 :
$$\eta_{\text{BR}} = 1 - \frac{n c_v (T_4 - T_1)}{n c_v (T_3 - T_2)} = 1 - \frac{T_4 - T_1}{T_3 - T_2}$$

**Q5. Expression de $\eta_{\text{BR}}$ en fonction de $\alpha$ et $\gamma$ :**
On utilise les lois de Laplace pour les transformations isentropiques 1 $\to$ 2 et 3 $\to$ 4 :
- Pour 1 $\to$ 2 : $T_1 V_{\text{max}}^{\gamma-1} = T_2 V_c^{\gamma-1} \implies T_2 = T_1 \left(\frac{V_{\text{max}}}{V_c}\right)^{\gamma-1} = T_1 \alpha^{\gamma-1}$
- Pour 3 $\to$ 4 : $T_3 V_c^{\gamma-1} = T_4 V_{\text{max}}^{\gamma-1} \implies T_3 = T_4 \left(\frac{V_{\text{max}}}{V_c}\right)^{\gamma-1} = T_4 \alpha^{\gamma-1}$

En injectant ces expressions dans le rapport des températures :
$$\frac{T_4 - T_1}{T_3 - T_2} = \frac{T_4 - T_1}{\alpha^{\gamma-1}(T_4 - T_1)} = \frac{1}{\alpha^{\gamma-1}}$$
Le rendement s'écrit donc :
$$\eta_{\text{BR}} = 1 - \frac{1}{\alpha^{\gamma-1}}$$

*Application numérique :* Pour $\alpha = 9$ et $\gamma = 1,4$ :
$$\eta_{\text{BR}} = 1 - \frac{1}{9^{0,4}} = 1 - \frac{1}{2,408} \approx 1 - 0,415 = 0,585 \quad (\text{soit } 58,5 \%)$$

---

#### Partie II : Cycle Diesel

**Q6. Chaleur reçue $Q_{\text{reçue, Diesel}}$ :**
La transformation 2 $\to$ 3' est isobare ($P = P_2$). La variation d'enthalpie est égale à la chaleur reçue :
$$Q_{\text{reçue, Diesel}} = \Delta H_{2 \to 3'} = n c_p (T_{3'} - T_2)$$

**Q7. Chaleur cédée $Q_{\text{cédée, Diesel}}$ :**
La transformation 4' $\to$ 1 est isochore :
$$|Q_{\text{cédée, Diesel}}| = n c_v (T_{4'} - T_1)$$

**Q8. Rendement du cycle Diesel $\eta_{\text{Diesel}}$ :**
$$\eta_{\text{Diesel}} = 1 - \frac{|Q_{\text{cédée, Diesel}}|}{Q_{\text{reçue, Diesel}}} = 1 - \frac{n c_v (T_{4'} - T_1)}{n c_p (T_{3'} - T_2)} = 1 - \frac{1}{\gamma} \frac{T_{4'} - T_1}{T_{3'} - T_2}$$

Exprimons toutes les températures en fonction de $T_1$, $\alpha$, $\beta$ et $\gamma$ :
1. Compression 1 $\to$ 2 (isentropique) : $T_2 = T_1 \alpha^{\gamma-1}$
2. Chauffage isobare 2 $\to$ 3' (loi des gaz parfaits à pression constante) : 
   $$\frac{V_c}{T_2} = \frac{V_{3'}}{T_{3'}} \implies T_{3'} = T_2 \frac{V_{3'}}{V_c} = T_2 \beta = T_1 \alpha^{\gamma-1} \beta$$
3. Détente isentropique 3' $\to$ 4' : 
   $$T_{3'} V_{3'}^{\gamma-1} = T_{4'} V_{\text{max}}^{\gamma-1} \implies T_{4'} = T_{3'} \left(\frac{V_{3'}}{V_{\text{max}}}\right)^{\gamma-1}$$
   Or, $\frac{V_{3'}}{V_{\text{max}}} = \frac{V_{3'}/V_c}{V_{\text{max}}/V_c} = \frac{\beta}{\alpha}$. Ainsi :
   $$T_{4'} = (T_1 \alpha^{\gamma-1} \beta) \left(\frac{\beta}{\alpha}\right)^{\gamma-1} = T_1 \beta^\gamma$$

En remplaçant $T_2$, $T_{3'}$ et $T_{4'}$ dans l'expression du rendement :
$$\eta_{\text{Diesel}} = 1 - \frac{1}{\gamma} \frac{T_1 \beta^\gamma - T_1}{T_1 \alpha^{\gamma-1} \beta - T_1 \alpha^{\gamma-1}} = 1 - \frac{1}{\gamma \alpha^{\gamma-1}} \left[ \frac{\beta^\gamma - 1}{\beta - 1} \right]$$

**Q9. Analyse critique du modèle :**
- **Comparaison des rendements :** Puisque $\beta > 1$, le terme $\frac{\beta^\gamma - 1}{\beta - 1}$ (qui tend vers $\gamma$ quand $\beta \to 1$) est strictement supérieur à $1$. Par conséquent, pour un *même* taux de compression $\alpha$, **le rendement du cycle de Beau de Rochas est supérieur à celui du cycle Diesel** ($\eta_{\text{BR}} > \eta_{\text{Diesel}}$). 
- **Réalité industrielle :** En pratique, le moteur Diesel compresse de l'air pur, ce qui évite l'auto-allumage prématuré (phénomène de cliquetis). Cela permet d'atteindre des taux de compression $\alpha$ beaucoup plus élevés dans un moteur Diesel ($\alpha \in [15, 22]$) que dans un moteur essence ($\alpha \in [8, 11]$). Grâce à cette valeur de $\alpha$ grandement supérieure, le rendement réel d'un moteur Diesel dépasse en pratique celui d'un moteur essence.
- **Limites des modèles idéaux :** Les frottements mécaniques, les transferts thermiques non négligeables à travers les parois du cylindre, et le caractère non instantané des combustions font chuter les rendements réels par rapport aux prévisions de ces modèles.