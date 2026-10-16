---
title: 'Exercice 2 : Diagrammes (P,v) et (T,s) des machines thermiques'
description: 'Problème d entraînement type concours pour PC.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les machines thermiques industrielles (centrales à vapeur, pompes à chaleur, moteurs) sont modélisées par des cycles thermodynamiques subis par un fluide caloporteur. L'étude fine de ces cycles repose sur l'exploitation combinée des diagrammes de Clapeyron $(P,v)$ et entropique $(T,s)$.

On s'intéresse dans ce problème à un cycle moteur à vapeur d'eau idéalisé (cycle de Hirn modifié) fonctionnant entre une source chaude (chaudière) et une source froide (condenseur). Le fluide de travail est l'eau, modélisée comme un corps pur diphasique. 

**Données et notations :**
* $P_1 = 0{,}05\text{ bar}$ et $P_2 = 50\text{ bar}$ : pressions respectives du condenseur et de la chaudière.
* $T_3 = 450\text{ °C}$ : température de la vapeur en sortie de surchauffeur.
* $c_{\text{eau}} = 4{,}18\text{ kJ}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$ : capacité thermique massique supposée constante de l'eau liquide.
* $L_v(T)$ : chaleur latente de vaporisation. À $P_1$, $L_{v1} \approx 2450\text{ kJ}\cdot\text{kg}^{-1}$ et $T_1 \approx 33\text{ °C}$ ($306\text{ K}$).
* On négligera le travail des pompes face aux transferts thermiques et au travail de la turbine, sauf mention explicite.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Représentation graphique :** Tracer l'allure qualitative du cycle de Hirn dans le diagramme de Clapeyron $(P,v)$ et dans le diagramme entropique $(T,s)$. On y fera figurer la cloche de saturation (liquide/vapeur).
2. **Bilan énergétique par étape :** Décrire les 4 transformations constituant le cycle :
   - $1 \to 2$ : Compression adiabatique réversible du liquide (de $P_1$ à $P_2$).
   - $2 \to 3$ : Chauffage, vaporisation et surchauffe isobare à $P_2$.
   - $3 \to 4$ : Détente adiabatique réversible dans la turbine jusqu'à $P_1$.
   - $4 \to 1$ : Condensation isobare et isotherme à $P_1$.
3. **Calculs thêta-énergétiques :** Exprimer puis calculer le travail massique total reçu par le fluide au cours du cycle, le transfert thermique massique reçu de la source chaude $q_{\text{sc}}$, et en déduire le rendement thermique $\eta$ du cycle.
4. **Analyse critique et irréversibilités :** Expliquer pourquoi le diagramme $(T,s)$ est particulièrement adapté pour visualiser les pertes d'efficacité (irréversibilités internes) lors de la détente réelle dans la turbine.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Dans le diagramme $(P,v)$, les isobares sont décroissantes et la zone diphasique est délimitée par la courbe de liquidité et de bupécité. Dans $(T,s)$, les isobares dans la zone diphasique sont confondues avec les isothermes.
* **Question 2 :** Appliquer le premier principe de la thermodynamique sous forme ouverte (flux ou massique) pour chaque composant (pompe, chaudière, turbine, condenseur) en régime permanent.
* **Question 3 :** Utiliser les expressions de $w = -\int P dv$ ou le premier principe global $\oint (\delta w + \delta q) = 0$. Pour la chaudière, décomposer l'apport thermique en (a) réchauffage du liquide, (b) vaporisation, (c) surchauffe.
* **Question 4 :** Penser à l'entropie créée $\Delta S_{\text{cr}} = \int \frac{\delta Q_{\irr}}{T} - \Delta S_{\text{sys}}$ pour quantifier l'écart au cycle de Carnot.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Représentation graphique $(P,v)$ et $(T,s)$

* **Diagramme $(P,v)$ (Clapeyron) :**
  - L'axe des ordonnées est logarithmique ou linéaire ($P$), l'axe des abscisses représente le volume massique $v$.
  - La cloche de saturation sépare le domaine liquide, le domaine diphasique (où $P$ et $T$ sont liés) et le domaine vapeur.
  - $1 \to 2$ : Verticale quasi-statique vers le haut (le liquide est très peu compressible, $v \approx \text{cte}$).
  - $2 \to 3$ : Horizontale vers la droite (isobare $P_2$) traversant la cloche puis entrant dans la zone vapeur.
  - $3 \to 4$ : Courbe d'adiabatique réversible ($s = \text{cte}$, isentropique) orientée vers le bas et la droite.
  - $4 \to 1$ : Horizontale vers la gauche (isobare $P_1$) ramenant le fluide dans l'état liquide saturé.

* **Diagramme $(T,s)$ (entropique) :**
  - $1 \to 2$ : Segment quasi-vertical (isentropique $s_1 = s_2$).
  - $2 \to 3$ : Courbe de chauffage du liquide, puis palier de vaporisation (isotherme et isobare), puis surchauffe (courbe croissante).
  - $3 \to 4$ : Segment vertical descendant ($s_3 = s_4$) dans la zone diphasique.
  - $4 \to 1$ : Segment horizontal (isotherme et isobare $T_1$) ramenant à l'état 1. L'aire sous le cycle représente le travail net du cycle par unité de masse.

---

#### 2. & 3. Bilan énergétique et rendement

En régime permanent, le premier principe appliqué à chaque composant (exprimé par unité de masse) donne :

* **Étape $1 \to 2$ (Pompe) :**
  Le travail massique de compression est $w_{12} = v_1(P_2 - P_1)$. 
  Avec $v_1 \approx 10^{-3}\text{ m}^3\cdot\text{kg}^{-1}$ et $\Delta P = 49{,}95\text{ bar} = 4995\text{ kPa}$ :
  $$w_{12} \approx 10^{-3} \times 4995 \times 10^3 = 5{,}0\text{ kJ}\cdot\text{kg}^{-1}$$

* **Étape $2 \to 3$ (Chaudière - Source chaude) :**
  Le transfert thermique massique reçu du milieu extérieur est :
  $$q_{\text{sc}} = h_3 - h_2$$
  En décomposant l'enthalpie :
  - Échauffement du liquide de $T_1$ à $T_{\text{sat}}(P_2)$ : $c_{\text{eau}}(T_{\text{sat}}(P_2) - T_1)$
  - Vaporisation à $P_2$ : $L_{v2}$
  - Surchauffe de $T_{\text{sat}}(P_2)$ à $T_3$ : $c_{\text{vapeur}}(T_3 - T_{\text{sat}}(P_2))$
  *Application numérique indicative globale :* $q_{\text{sc}} \approx 3200\text{ kJ}\cdot\text{kg}^{-1}$.

* **Étape $3 \to 4$ (Turbine) :**
  La détente est isentropique ($s_3 = s_4$). Le travail massique fourni par le fluide (reçu par l'arbre) est :
  $$w_{34} = h_4 - h_3$$
  Puisque la détente est adiabatique réversible, $w_{34} = -\int_{3}^{4} P dv$, représenté par l'aire sous la courbe dans $(P,v)$.

* **Étape $4 \to 1$ (Condenseur - Source froide) :**
  $$q_{\text{sf}} = h_1 - h_4 < 0$$

* **Rendement thermique du cycle :**
  Le rendement $\eta$ est défini par le rapport entre le travail net utile et l'énergie thermique fournie par la source chaude :
  $$\eta = \frac{W_{\text{net}}}{Q_{\text{sc}}} = \frac{- (w_{12} + w_{34})}{q_{\text{sc}}} = \frac{(h_3 - h_4) - (h_2 - h_1)}{h_3 - h_2}$$
  A N.C., on obtient typiquement un rendement $\eta \approx 35\%\text{ à }40\%$, nettement inférieur au rendement de Carnot inter-sources $\eta_C = 1 - \frac{T_1}{T_3}$ en raison des phases de chauffage du liquide hors isotherme.

---

#### 4. Analyse critique et irréversibilités

Dans une turbine réelle, les frottements fluides et les transferts thermiques non contrôlés génèrent de l'entropie ($S_{\text{cr}} > 0$). 

* **Dans le diagramme $(T,s)$ :**
  - Une détente isentropique idéale ($3 \to 4$) est représentée par un segment vertical.
  - Une détente réelle ($3 \to 4'$) se traduit par une augmentation de l'entropie finale ($s_{4'} > s_4$), ce qui décale l'état final vers la droite dans le diagramme $(T,s)$.
  - **Conséquence :** L'aire représentant le travail récupéré diminue ($\Delta w < 0$). Le diagramme $(T,s)$ permet ainsi de visualiser immédiatement le "manque à gagner" en travail (perte d'exergie) proportionnel à l'entropie créée $T_0 S_{\text{cr}}$. Le modèle idéal surestime donc systématiquement les performances réelles de la machine.