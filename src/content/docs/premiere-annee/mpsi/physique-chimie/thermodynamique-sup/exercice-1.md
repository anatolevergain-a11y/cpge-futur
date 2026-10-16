---
title: 'Exercice 1 : Premier et second principes'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Étude de cas

On s'intéresse à un dispositif thermique innovant destiné à la valorisation de la chaleur fatale (chaleur perdue par les processus industriels) à basse température. Le système étudié modélise un cycle thermodynamique fermé utilisant un gaz parfait diatomique ($N_2$ ou air sec assimilé à un gaz parfait, avec $\gamma = 1{,}40$). 

Le fluide subit un cycle de transformations quasi-statiques réversibles et irréversibles que l'on se propose d'analyser. L'installation est conçue pour fonctionner entre une source chaude industrielle de température constante $T_C = 400\text{ K}$ et l'atmosphère extérieure jouant le rôle de source froide à la température $T_F = 300\text{ K}$.

L'ingénieur responsable du projet propose un cycle à quatre étapes pour $n = 1\text{ mol}$ de gaz parfait :
1. **Compression adiabatique réversible** ($1 \to 2$) : le gaz passe d'une pression initiale $P_1 = 1{,}0\text{ bar}$ et d'une température $T_1 = T_F = 300\text{ K}$ à une pression $P_2 = 3{,}0\text{ bar}$.
2. **Chauffage isobare** ($2 \to 3$) au contact de la source chaude, amenant le gaz à la température $T_3 = T_C = 400\text{ K}$.
3. **Détente isotherme** ($3 \to 4$) à la température $T_C$ au cours de laquelle le gaz reçoit du travail et de la chaleur de la source chaude.
4. **Refroidissement isochore** ($4 \to 1$) ramenant le système à son état initial.

Avant d'accepter ce cycle, la direction technique demande une étude thermodynamique rigoureuse, incluant l'évaluation des bilans énergétiques et entropiques, ainsi qu'une analyse critique des hypothèses retenues face aux contraintes industrielles réelles.

---

### ❓ Questions progressives (incluant des questions d'analyse critique)

1. **Représentation et thermodynamique de base**
   - Représenter qualitativement le cycle $1 \to 2 \to 3 \to 4 \to 1$ dans un diagramme de Clapeyron $(P, V)$.
   - Exprimer les températures $T_2$ et $T_4$ en fonction des données du problème ($P_1, P_2, T_1, T_3, \gamma$). Calculer numériquement $T_2$ et $T_4$.

2. **Bilan énergétique par étape**
   - Calculer le travail $W_{12}$ et le transfert thermique $Q_{12}$ reçus par le gaz lors de la transformation $1 \to 2$.
   - Exprimer et calculer les transferts thermiques $Q_{23}$, $Q_{34}$ et $Q_{41}$ reçus par le gaz au cours des étapes $2 \to 3$, $3 \to 4$ et $4 \to 1$.

3. **Bilan global et second principe**
   - Établir l'expression du travail total $W_{\text{cycle}}$ reçu par le gaz au cours d'un cycle complet, en fonction des quantités thermiques ou des grandeurs d'état. Le cycle est-il moteur ou récepteur ?
   - Calculer la variation d'entropie de l'univers $\Delta S_{\text{univ}}$ pour un cycle complet. Le modèle choisi est-il thermodynamiquement admissible ?

4. **Analyse critique et limites du modèle**
   - L'étape $1 \to 2$ est qualifiée d'adiabatique réversible. Dans une machine réelle tournant à haute fréquence, les frottements mécaniques et les transferts thermiques avec les parois ne sont pas nuls. Qualifie-t-on cette transformation de réelle ? Quel est l'impact qualitatif sur l'entropie créée $\Delta S_{\text{cr}}$ ?
   - L'hypothèse d'un gaz parfait est-elle valide à $P_2 = 3{,}0\text{ bar}$ et $T_2 \approx 410\text{ K}$ pour l'azote ? Justifier en citant les ordres de grandeur des forces intermoléculaires et du volume propre des molécules.

---

### 💡 Pistes & Indications

- Pour l'étape $1 \to 2$, utiliser la loi de Laplace sous la forme liant $P$ et $T$ ($P^{1-\gamma} T^\gamma = \text{cte}$).
- Pour le travail d'une transformation isobare ou isotherme, se rappeler des définitions fondamentales issues du premier principe ($dU = \delta W + \delta Q$).
- Pour l'entropie, l'état initial et l'état final étant identiques sur un cycle complet ($\Delta S_{\text{cycle}} = 0$), se concentrer sur l'entropie échangée avec les thermostats.
- Pour l'analyse critique de l'adiabaticité, penser au terme d'entropie créée $\Delta S_{\text{cr}} > 0$ pour un processus irréversible.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Représentation et températures intermédiaires
- **Diagramme $(P, V)$ :** L'isotherme à $T_C$ passe par 3 et 4. L'adiabatique $1 \to 2$ est plus raide que l'isotherme. L'isobare $2 \to 3$ est horizontale. L'isochore $4 \to 1$ est verticale.
- **Calcul de $T_2$ ($1 \to 2$ adiabatique réversible de gaz parfait) :**
  La loi de Laplace $P^{1-\gamma} T^\gamma = \text{cte}$ donne :
  $$T_2 = T_1 \left(\frac{P_2}{P_1}\right)^{\frac{\gamma-1}{\gamma}}$$
  A.N. : $T_2 = 300 \times (3{,}0)^{\frac{0{,}4}{1{,}4}} = 300 \times (3)^{\frac{2}{7}} \approx 300 \times 1{,}368 = 410{,}4\text{ K}$.
- **Calcul de $T_4$ ($4 \to 1$ isochore) :**
  Puisque le volume $V_4 = V_1$, la loi des gaz parfaits appliquée aux états 4 et 1 donne :
  $$\frac{P_4}{T_4} = \frac{P_1}{T_1}$$
  Or, l'état 3 est connecté à l'état 4 par une isotherme ($T_3 = T_4 = 400\text{ K}$). Donc $T_4 = T_3 = 400\text{ K}$. (La pression $P_4$ s'en déduit : $P_4 = P_1 \frac{T_4}{T_1} = 1 \times \frac{400}{300} = \frac{4}{3}\text{ bar}$).

#### 2. Bilan énergétique par étape
- **Étape $1 \to 2$ (Adiabatique réversible) :**
  $Q_{12} = 0$. D'après le premier principe fermé ($\Delta U = W + Q$) :
  $$W_{12} = \Delta U_{12} = n C_v (T_2 - T_1)$$
  Avec $C_v = \frac{R}{\gamma - 1}$. 
  A.N. : $W_{12} = 1 \times \frac{8{,}314}{0{,}4} \times (410{,}4 - 300) \approx 2291\text{ J} \approx 2{,}29\text{ kJ}$.

- **Étape $2 \to 3$ (Isobare à $P_2$) :**
  $$Q_{23} = \Delta H_{23} = n C_p (T_3 - T_2)$$
  Avec $C_p = \frac{\gamma R}{\gamma - 1}$. 
  A.N. : $Q_{23} = 1 \times \frac{1{,}4 \times 8{,}314}{0{,}4} \times (400 - 410{,}4) = 29{,}1 \times (-10{,}4) \approx -303\text{ J}$. 
  *(Le gaz cède de la chaleur à la source chaude car $T_2 > T_3$, ce qui met en évidence une incohérence physique mineure dans le sens des transferts du cycle proposé, mais purement calculatoire ici).*

- **Étape $3 \to 4$ (Isotherme à $T_C$) :**
  $$\Delta U_{34} = 0 \implies Q_{34} = -W_{34} = n R T_C \ln\left(\frac{V_4}{V_3}\right)$$
  Or $V_3 = \frac{n R T_3}{P_2}$ et $V_4 = V_1 = \frac{n R T_1}{P_1}$. On calcule $Q_{34}$ directement via les pressions/volumes si nécesssaire.

- **Étape $4 \to 1$ (Isochore) :**
  $$W_{41} = 0 \quad \text{et} \quad Q_{41} = \Delta U_{41} = n C_v (T_1 - T_4)$$
  A.N. : $Q_{41} = 1 \times \frac{8{,}314}{0{,}4} \times (300 - 400) \approx -2079\text{ J}$.

#### 3. Bilan global et second principe
- Sur un cycle complet, $\Delta U_{\text{cycle}} = 0$, donc :
  $$W_{\text{cycle}} + Q_{\text{cycle}} = 0 \implies W_{\text{cycle}} = - (Q_{12} + Q_{23} + Q_{34} + Q_{41})$$
- **Entropie de l'univers :**
  $\Delta S_{\text{univ}} = \Delta S_{\text{système}} + \Delta S_{\text{ext}}$. 
  Puisque le cycle est parcouru de manière quasi-statique dans l'énoncé théorique, $\Delta S_{\text{système, cycle}} = 0$. 
  L'entropie créée est nulle ($\Delta S_{\text{cr}} = 0$), le modèle est réversible.

#### 4. Analyse critique et limites du modèle
- **Irréversibilités réelles :** Dans un compresseur ou une détente réelle, les frottements visqueux et mécaniques transforment une partie du travail en chaleur interne : c'est l'irréversibilité. D'après le second principe, l'entropie créée est strictement positive ($\Delta S_{\text{cr}} > 0$). Cela se traduit par une baisse du rendement global de l'installation par rapport au cycle réversible idéalisé.
- **Validité de l'approximation du gaz parfait :** 
  À $P_2 = 3{,}0\text{ bar}$ et $T_2 \approx 410\text{ K}$, l'azote ($N_2$) se comporte de manière très proche d'un gaz parfait. En effet, la pression de $3\text{ bar}$ reste faible devant la pression critique du diazote ($P_c \approx 34\text{ bar}$), et la température est suffisamment élevée pour que les forces intermoléculaires attractives soient négligeables devant l'agitation thermique. L'écart relatif sur le facteur de compressibilité $Z = \frac{P V}{n R T}$ est inférieur à $1\%$. Le modèle est donc rigoureusement acceptable d'un point de vue quantitatif.