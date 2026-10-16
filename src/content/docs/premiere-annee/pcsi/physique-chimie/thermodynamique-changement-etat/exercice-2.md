---
title: 'Exercice 2 : Diagrammes d état (P, v) et (T, s) et machines thermiques'
description: 'Problème corrigé type concours.'
---

### 🌐 Énoncé du problème / Cadre d'estude

Dans ce problème, on s'intéresse à la modélisation thermodynamique d'un cycle moteur à vapeur (cycle de Hirn ou cycle de Rankine surchauffé) utilisant de l'eau comme fluide frigorigène / caloporteur. L'objectif est d'analyser les transferts énergétiques et l'efficacité de ce cycle à l'aide des diagrammes d'état $(P, v)$ (Clapeyron) et $(T, s)$ (entropique).

On rappelle les définitions et propriétés fondamentales pour un corps pur diphasique (liquide-vapeur) :
- $P$ désigne la pression, $T$ la température, $v = \frac{V}{m}$ le volume massique, et $s = \frac{S}{m}$ l'entropie massique.
- Dans la zone diphasique (équilibre liquide-vapeur), la température et la pression ne sont pas indépendantes : $P = P_{\text{sat}}(T)$.
- Le titre en masse de vapeur $x$ ($0 \le x \le 1$) permet d'exprimer toute grandeur extensive massique $y$ (comme $v$ ou $s$) par la relation de mélange :
  $$y = (1-x)y_{\text{liq}} + xy_{\text{vap}}$$
  où l'indice $\text{liq}$ désigne le liquide saturé ($x=0$) et $\text{vap}$ la vapeur sèche ($x=1$).

Le cycle étudié est constitué de 4 transformations réversibles ou modélisées comme telles :
1. **$1 \to 2$** : Compression adiabatique réversible (isentropique) de l'eau liquide de la pression $P_1$ à la pression $P_2$.
2. **$2 \to 3$** : Chauffage et vaporisation à pression constante $P_2$, menant à de la vapeur sèche (puis éventuellement surchauffée, que l'on assimilera ici à l'état de vapeur saturée sèche pour simplifier, soit $x_3 = 1$).
3. **$3 \to 4$** : Détente adiabatique réversible (isentropique) dans une turbine de la pression $P_2$ à la pression $P_1$.
4. **$4 \to 1$** : Condensation totale à pression constante $P_1$ ramenant l'eau à l'état de liquide saturé.

On donne les valeurs numériques suivantes :
- Pression basse : $P_1 = 10\text{ kPa} = 0,1\text{ bar}$
- Pression haute : $P_2 = 3\text{ MPa} = 30\text{ bar}$
- Température de saturation à $P_1$ : $T_1 = 45,8^\circ\text{C} = 319\text{ K}$
- Température de saturation à $P_2$ : $T_2 = 233,9^\circ\text{C} = 507\text{ K}$
- Volume massique du liquide saturé à $P_1$ : $v_{\text{liq},1} \approx 1,01 \times 10^{-3}\text{ m}^3\cdot\text{kg}^{-1}$
- Entropie massique du liquide saturé à $T_1$ : $s_{\text{liq},1} = 0,65\text{ kJ}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$
- Entropie massique de la vapeur saturée à $T_2$ : $s_{\text{vap},2} = 6,18\text{ kJ}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$
- Chaleur latente de vaporisation à $T_1$ : $L_{v1} = 2395\text{ kJ}\cdot\text{kg}^{-1}$
- Capacité thermique massique moyenne du liquide (supposée constante) : $c = 4,18\text{ kJ}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$

---

### ❓ Questions progressives

1. **Représentation graphique** : 
   - Esquisser qualitativement le cycle $1 \to 2 \to 3 \to 4 \to 1$ dans le diagramme de Clapeyron $(P, v)$ en y faisant figurer la courbe de saturation (cloche).
   - Faire de même dans le diagramme entropique $(T, s)$.

2. **Compression (Transformation $1 \to 2$)** :
   - Exprimer le travail massique $w_{1\to 2}$ reçu par le fluide lors de la compression isentropique, en assimilant le liquide à un fluide incompressible de volume massique constant $v_{\text{liq}} \approx v_{\text{liq},1}$.
   - Calculer numériquement $w_{1\to 2}$ en $\text{kJ}\cdot\text{kg}^{-1}$.

3. **Chauffage et Vaporisation (Transformation $2 \to 3$)** :
   - Exprimer la quantité de chaleur massique $q_{2\to 3}$ reçue par le fluide au cours de cette étape isobare, en fonction des enthalpies massiques $h_2$ et $h_3$.
   - Évaluer la variation d'entropie massique $s_3 - s_2$ sachant que l'état 3 est de la vapeur saturée sèche à la température $T_2$. En déduire l'expression de $s_2$ et la température intermédiaire si nécessaire.

4. **Détente (Transformation $3 \to 4$)** :
   - La transformation $3 \to 4$ est isentropique. Exprimer le titre en masse de vapeur $x_4$ à l'état 4 en fonction des entropies massiques à l'état 1 et 2 (liquide et vapeur saturés à $T_1$) et de la chaleur latente $L_{v1}$.
   - Calculer la valeur numérique de $x_4$.

5. **Bilan énergétique et Efficacité** :
   - Exprimer le travail net massique $w_{\text{net}}$ fourni par le cycle, ainsi que la quantité de chaleur totale reçue de la source chaude $q_{\text{sc}}$.
   - Définir et calculer le rendement thermodynamique $\eta$ de ce cycle. Comparer brièvement avec le rendement du cycle de Carnot opérant entre les mêmes températures extrêmes $T_2$ et $T_1$.

---

### 💡 Pistes & Indications méthodologiques

- **Premier principe en système ouvert (stationnaire)** : Pour une turbine ou une pompe adiabatique sans variation d'énergie cinétique ni potentielle, le travail technique massique s'écrit $w = \int V dP$ (pour une pompe incompressible) ou se déduit de la variation d'enthalpie $\Delta h$ (pour une turbine adiabatique).
- **Second principe** : L'entropie est une fonction d'état. Pour une transformation isentropique réversible, $s_{\text{initial}} = s_{\text{final}}$.
- **Diagramme $(T, s)$** : Les transferts thermiques réversibles s'interprètent géométriquement comme des aires sous les courbes ($\delta q = T ds$).

---

### 📋 Corrigé détaillé et vérification des résultats

#### 1. Représentation graphique

- **Diagramme $(P, v)$ (Clapeyron)** :
  La cloche de saturation sépare le domaine liquide (à gauche), diphasique (au centre) et vapeur (à droite).
  - $1 \to 2$ : Verticale quasi-isochore (le liquide est très peu compressible, $v \approx \text{cte}$) menant de $P_1$ à $P_2$.
  - $2 \to 3$ : Segment horizontal isobare dans le diagramme $P(v)$, de l'état liquide initial vers l'état de vapeur sèche (traversée de la cloche).
  - $3 \to 4$ : Courbe descendante de détente adiabatique de $P_2$ à $P_1$.
  - $4 \to 1$ : Segment horizontal isobare de condensation à $P_1$.

- **Diagramme $(T, s)$ (Entropique)** :
  - $1 \to 2$ : Segment quasi-vertical (isentropique $s_1 = s_2$) dans la zone liquide.
  - $2 \to 3$ : Chauffage du liquide jusqu'à $T_2$, puis vaporisation isotherme à $T_2$ (segment horizontal si on atteint la vapeur saturée).
  - $3 \to 4$ : Segment vertical descendant ($s_3 = s_4$) dans la zone diphasique.
  - $4 \to 1$ : Segment horizontal de condensation isotherme à $T_1$.

---

#### 2. Compression (Transformation $1 \to 2$)

Pour un fluide incompressible ($v = v_{\text{liq}} \approx \text{cte}$) subissant une transformation quasi-statique et adiabatique (donc réversible, isentropique), le premier principe appliqué sous forme ouverte (travail technique) donne :
$$w_{1\to 2} = -\int_{1}^{2} v \, dP = -v_{\text{liq}}(P_2 - P_1)$$
Attention aux conventions de signe : le travail reçu par le fluide est positif si la pompe fournit de l'énergie. Exprimons $w_{1\to 2}$ en tenant compte du fait que la pompe comprime le fluide :
$$w_{\text{pompe}} = v_{\text{liq},1} (P_2 - P_1)$$

**A.N. :**
- $v_{\text{liq},1} = 1,01 \times 10^{-3}\text{ m}^3\cdot\text{kg}^{-1}$
- $P_2 - P_1 = 3 \times 10^6\text{ Pa} - 10 \times 10^3\text{ Pa} = 2,99 \times 10^6\text{ Pa}$
$$w_{\text{pompe}} = 1,01 \times 10^{-3} \times 2,99 \times 10^6 = 3,020\text{ J}\cdot\text{kg}^{-1} = 3,02\text{ kJ}\cdot\text{kg}^{-1}$$

---

#### 3. Chauffage et Vaporisation (Transformation $2 \to 3$)

L'état 3 est de la vapeur saturée sèche à la température $T_2$, son entropie est donc $s_3 = s_{\text{vap},2}$.
La transformation $2 \to 3$ étant isobare (et réversible), la chaleur massique reçue s'exprime par la variation d'enthalpie :
$$q_{2\to 3} = h_3 - h_2$$

Puisque la transformation $1 \to 2$ est isentropique et que le liquide est peu compressible, la variation de température associée à la compression est minime, et l'entropie de l'état 2 est très proche de celle de l'état 1 :
$$s_2 \approx s_1 = s_{\text{liq},1}$$

La quantité de chaleur reçue globalement de la source chaude (réchauffage du liquide + vaporisation) s'obtient également par intégration sur le diagramme $(T, s)$ :
$$q_{\text{sc}} = \int_{2}^{3} T ds$$

---

#### 4. Détente (Transformation $3 \to 4$)

La détente $3 \to 4$ est isentropique, donc :
$$s_4 = s_3 = s_{\text{vap},2}$$

À l'état 4, le fluide se trouve dans la zone diphasique à la pression $P_1$ (et température $T_1$). L'entropie massique s'écrit par la relation de mélange :
$$s_4 = (1 - x_4) s_{\text{liq},1} + x_4 s_{\text{vap},1}$$

Or, la variation d'entropie lors de la vaporisation isotherme à $T_1$ relie l'entropie du liquide et de la vapeur saturés via la chaleur latente :
$$s_{\text{vap},1} - s_{\text{liq},1} = \frac{L_{v1}}{T_1}$$

On en déduit l'expression du titre en masse de vapeur $x_4$ :
$$s_4 = s_{\text{liq},1} + x_4 \left(\frac{L_{v1}}{T_1}\right) \implies x_4 = \frac{s_{\text{vap},2} - s_{\text{liq},1}}{\frac{L_{v1}}{T_1}}$$

**A.N. :**
- $s_{\text{vap},2} = 6,18\text{ kJ}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$
- $s_{\text{liq},1} = 0,65\text{ kJ}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$
- $L_{v1} = 2395\text{ kJ}\cdot\text{kg}^{-1}$
- $T_1 = 319\text{ K}$

$$\frac{L_{v1}}{T_1} = \frac{2395}{319} \approx 7,508\text{ kJ}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$$
$$x_4 = \frac{6,18 - 0,65}{7,508} = \frac{5,53}{7,508} \approx 0,737$$
Le titre en vapeur à la fin de la détente est donc de $73,7\%$ (le fluide est bien diphasique).

---

#### 5. Bilan énergétique et Efficacité

- **Travail net massique** :
  Le travail total du cycle $w_{\text{net}}$ est la somme du travail fourni par la turbine ($w_{\text{turbine}} = h_3 - h_4$) et du travail reçu par la pompe ($w_{\text{pompe}}$) :
  $$w_{\text{net}} = (h_3 - h_4) - w_{\text{pompe}}$$
  Par le premier principe appliqué sur l'ensemble du cycle fermé :
  $$w_{\text{net}} = q_{\text{sc}} - q_{\text{f}}$$

- **Rendement du cycle** :
  $$\eta = \frac{w_{\text{net}}}{q_{\text{sc}}}$$

  En première approximation, la chaleur reçue de la source chaude $q_{\text{sc}} = h_3 - h_2$ correspond principalement à l'élévation de température et au changement d'état à $T_2$.
  D'un point de vue théorique maximal, le rendement d'un cycle de Carnot fonctionnant entre les températures extrêmes $T_2$ et $T_1$ vaut :
  $$\eta_{\text{Carnot}} = 1 - \frac{T_1}{T_2}$$
  
  **A.N. Carnot :**
  $$\eta_{\text{Carnot}} = 1 - \frac{319}{507} = 1 - 0,629 = 0,371 \quad (37,1\%)$$
  Le rendement réel du cycle de Hirn étudié est légèrement inférieur à cette limite théorique de Carnot en raison des irréversibilités thermiques internes (le transfert thermique ne s'effectue pas à température constante lors du réchauffement du liquide de $T_1$ à $T_2$).