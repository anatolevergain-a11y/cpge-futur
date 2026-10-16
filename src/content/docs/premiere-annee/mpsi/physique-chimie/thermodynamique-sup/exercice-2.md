---
title: 'Exercice 2 : Machines thermiques et dithermes'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la transition énergétique et de l'amélioration de l'efficacité des systèmes de chauffage urbain, on s'intéresse à l'optimisation thermodynamique d'une pompe à chaleur (PAC) air-eau haute performance destinée à alimenter un bâtiment résidentiel. 

Le système est modélisé comme une machine thermique ditherme fonctionnant selon un cycle de Carnot (borne idéale) ou selon un cycle réel irréversible. La source froide est l'air extérieur, à la température $T_F$, et la source chaude est le réseau d'eau de chauffage du bâtiment, maintenu à la température $T_C$.

L'objectif de ce problème est d'évaluer la performance énergétique de cette machine, de confronter le modèle idéal de Carnot aux réalités industrielles, et d'analyser l'impact des irréversibilités sur le dimensionnement et la facture énergétique.

**Données numériques et hypothèses de modélisation :**
*   Température de la source froide (air extérieur) : $T_F = 7\,^\circ\text{C} = 280{,}15\,\text{K}$.
*   Température de la source chaude (eau du réseau) : $T_C = 47\,^\circ\text{C} = 320{,}15\,\text{K}$.
*   Puissance thermique nécessaire pour chauffer le bâtiment : $\mathcal{P}_C = 12\,\text{kW}$.
*   Le fluide thêrmo-vecteur effectue un cycle supposé quasi-statique à l'intérieur de la machine.
*   *Analyse critique des limites du modèle :* On supposera dans un premier temps que les échanges thermiques s'effectuent de manière isotherme avec les sources, ce qui constitue une idéalisation forte (absence d'efficacité d'échangeur, $\Delta T$ d'échange nul impossible en pratique).

---

### ❓ Questions progressives

1. **Rappels et cadre thermodynamique**
   Énoncer le premier et le second principe de la thermodynamique appliqués à un système fermé effectuant un cycle. Définir l'inégalité de Clausius pour un système ditherme.

2. **Étude du cycle de Carnot réversible**
   On suppose que la pompe à chaleur fonctionne selon le cycle de Carnot réversible entre $T_F$ et $T_C$. 
   Exprimer le coefficient de performance (COP), noté $p$, de la pompe à chaleur en fonction des températures $T_C$ et $T_F$. Calculer sa valeur numérique.

3. **Bilan énergétique idéal**
   En déduire la puissance électrique minimale $\mathcal{P}_{el,\text{min}}$ qu'il faut fournir au compresseur de la machine pour assurer le chauffage du bâtiment.

4. **Approche réelle et prise en compte des irréversibilités (Esprit critique)**
   En réalité, les transferts thermiques entre le fluide et les sources extérieures nécessitent des écarts de température. Les sources effectives vues par le fluide sont à $T_{F,\text{fluide}} = T_F - \delta T$ et $T_{C,\text{fluide}} = T_C + \delta T$, avec $\delta T = 5\,\text{K}$ (pincement des échangeurs).
   *   Exprimer le nouveau COP réel $p_{\text{réel}}$ en fonction de $T_C$, $T_F$ et $\delta T$ dans l'hypothèse où le cycle interne reste de Carnot entre ces nouvelles températures.
   *   Calculer la nouvelle puissance électrique $\mathcal{P}_{el,\text{réel}}$. Commenter l'impact de ce "pincement" sur la consommation électrique.

5. **Analyse critique des limites du modèle**
   Le modèle de Carnot modifié tient compte des écarts de température aux échangeurs, mais suppose que le cycle interne est réversible. Citer deux sources majeures d'irréversibilités internes non prises en compte ici et expliquer qualitativement leur impact sur le COP effectif de la machine industrielle.

---

### 💡 Pistes & Indications

*   **Q1 :** Pensez aux variations d'énergie interne sur un cycle ($\Delta U = 0$) et à l'entropie échangée et créée ($\Delta S_{\cycle} = 0$).
*   **Q2 :** Pour un cycle réversible, la variation d'entropie de l'univers est nulle, ce qui permet de lier les transferts thermiques aux températures des sources par $\frac{Q_C}{T_C} + \frac{Q_F}{T_F} = 0$.
*   **Q4 :** Identifiez clairement quel est le système qui subit le cycle (le fluide frigorigène) et écrivez l'expression du COP en fonction des transferts algébriques reçus par ce fluide.
*   **Q5 :** Pensez aux frottements mécaniques dans le compresseur et aux détentes isenthalpes (robinet de détente) qui sont des détentes de Joule-Thomson irréversibles.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Rappels et cadre thermodynamique
Pour un système fermé effectuant un cycle :
*   **Premier principe :** $\Delta U_{\cycle} = W + Q = 0$, soit $W = -Q$, où $W$ est le travail total reçu et $Q$ la somme des transferts thermiques reçus des sources.
*   **Second principe :** $\Delta S_{\cycle} = S_{\text{ech}} + S_{\text{cree}} = 0$, soit $\int \frac{\delta Q_{\text{ext}}}{T} + S_{\text{cree}} = 0$.
*   **Inégalité de Clausius :** Pour un système évoluant entre une source chaude à $T_C$ et une source froide à $T_F$, on a $\frac{Q_C}{T_C} + \frac{Q_F}{T_F} + S_{\text{cree}} = 0$ avec $S_{\text{cree}} \ge 0$. Par conséquent :
    $$\frac{Q_C}{T_C} + \frac{Q_F}{T_F} \le 0$$

#### 2. Étude du cycle de Carnot réversible
Le coefficient de performance d'une pompe à chaleur est défini par le rapport de l'énergie utile (thermique, cédée à la source chaude) sur l'énergie payante (électrique, convertie en travail $W$) :
$$p = \frac{Q_C}{W} = \frac{Q_C}{-(Q_C + Q_F)} = \frac{1}{-1 - \frac{Q_F}{Q_C}}$$
Pour un cycle réversible (Carnot), $S_{\text{cree}} = 0$, donc $\frac{Q_C}{T_C} + \frac{Q_F}{T_F} = 0 \implies -\frac{Q_F}{Q_C} = \frac{T_F}{T_C}$.
On obtient l'expression du COP de Carnot :
$$p_{\text{Carnot}} = \frac{T_C}{T_C - T_F}$$
**Application numérique :**
$$p_{\text{Carnot}} = \frac{320{,}15}{320{,}15 - 280{,}15} = \frac{320{,}15}{40} = 8{,}00$$

#### 3. Bilan énergétique idéal
La puissance thermique fournie à la source chaude est $\mathcal{P}_C = \frac{Q_C}{\Delta t}$. 
La puissance électrique minimale correspond au travail fourni par unité de temps : $\mathcal{P}_{el,\text{min}} = \frac{W}{\Delta t} = \frac{\mathcal{P}_C}{p_{\text{Carnot}}}$.
**Application numérique :**
$$\mathcal{P}_{el,\text{min}} = \frac{12\,\text{kW}}{8} = 1{,}5\,\text{kW}$$

#### 4. Approche réelle et prise en compte des irréversibilités
Les transferts thermiques s'effectuant avec des gradients de température, les températures effectives des sources vues par le fluide sont $T_{C,\text{fluide}} = T_C + \delta T$ et $T_{F,\text{fluide}} = T_F - \delta T$.
Le cycle interne restant réversible entre ces deux températures limites, le nouveau COP s'exprime par :
$$p_{\text{réel}} = \frac{T_{C,\text{fluide}}}{T_{C,\text{fluide}} - T_{F,\text{fluide}}} = \frac{T_C + \delta T}{(T_C + \delta T) - (T_F - \delta T)} = \frac{T_C + \delta T}{T_C - T_F + 2\delta T}$$
**Application numérique :**
*   $T_C + \delta T = 320{,}15 + 5 = 325{,}15\,\text{K}$
*   $T_C - T_F + 2\delta T = 40 + 2(5) = 50\,\text{K}$
*   $p_{\text{réel}} = \frac{325{,}15}{50} = 6{,}50$

La nouvelle puissance électrique nécessaire devient :
$$\mathcal{P}_{el,\text{réel}} = \frac{\mathcal{P}_C}{p_{\text{réel}}} = \frac{12}{6{,}50} \approx 1{,}85\,\text{kW}$$

*   **Analyse critique :** Un simple pincement de $5\,\text{K}$ aux échangeurs entraîne une baisse du COP de $8$ à $6{,}5$ (soit une chute de près de $19\,\%$) et une augmentation de la consommation électrique de $1{,}5\,\text{kW}$ à $1{,}85\,\text{kW}$ (+ $23\,\%$). Cela illustre l'importance cruciale du dimensionnement des échangeurs thermiques (surface d'échange $S$ grande pour minimiser $\delta T$, au détriment du coût et de l'encombrement).

#### 5. Analyse critique des limites du modèle
Outre le gradient de température aux échangeurs, les performances réelles d'une PAC industrielle sont dégradées par :
1.  **Les irréversibilités mécaniques et fluidiques :** Les frottements visqueux dans les canalisations et les pertes mécaniques dans le compresseur créent de l'entropie ($S_{\text{cree}} > 0$), nécessitant un travail électrique plus important pour un même effet thermique.
2.  **La détente irréversible :** Le passage du fluide dans le détendeur se fait par une détente de Joule-Thomson (isenthalpique), qui est une transformation fortement irréversible, loin de la détente adiabatique réversible du cycle de Carnot. 

En pratique, le COP réel d'une PAC sur ce type de plage de température atteint plutôt $3{,}5$ à $4{,}5$, bien loin de la borne idéale de Carnot ($8$), ce qui souligne la nécessité d'une approche rigoureuse et critique des modèles idéalisés en ingénierie.