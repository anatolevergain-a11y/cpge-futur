---
title: 'Exercice 1 : Piles et électrolyse'
description: 'Problème d entraînement type concours pour PT.'
---

### 🌐 Énoncé du problème / Cadre d'étude

L'électrochimie joue un rôle central dans les technologies de conversion et de stockage de l'énergie, ainsi que dans la protection des métaux contre la corrosion. Ce problème s'intéresse à un système électrochimique combinant une pile au lithium-ion (sous sa forme simplifiée) et une cellule d'électrolyse industrielle dédiée à la production de dichlore et de soude. 

On se place dans les conditions standard de température ($T = 298\text{ K}$) et de pression ($P^\circ = 1\text{ bar}$). Les activités des espèces dissoutes seront assimilées à leurs concentrations molaires rapportées à la concentration standard $c^\circ = 1\text{ mol}\cdot\text{L}^{-1}$, et les gaz seront assimilés à des gaz parfaits.

**Données thermodynamiques et physiques à $298\text{ K}$ :**
* Constante des gaz parfaits : $R = 8{,}314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$
* Constante de Faraday : $F = 96500\text{ C}\cdot\text{mol}^{-1}$
* Pression standard : $P^\circ = 10^5\text{ Pa}$
* Potentiels standard apparents (ou thermodynamiques) :
  * $E^\circ(\text{Li}^+_{(\text{aq})} / \text{Li}_{(\text{s})}) = -3{,}04\text{ V}$
  * $E^\circ(\text{MnO}_2 / \text{LiMnO}_2)$ (modélisé par l'électrode positive) : $E_1^\circ = 3{,}40\text{ V}$ vs $\text{Li}^+/\text{Li}$
  * $E^\circ(\text{Cl}_{2\text{(g)}} / \text{Cl}^-_{(\text{aq})}) = 1{,}36\text{ V}$
  * $E^\circ(\text{H}_2\text{O}_{(\text{l})} / \text{H}_{2\text{(g)}}, \text{OH}^-_{(\text{aq})})$ à pH $= 14$ : $E_2^\circ = -0{,}83\text{ V}$

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

#### Partie I : Étude thermodynamique et cinétique d'une pile au lithium
On considère une pile bouton dont la borne négative est constituée de lithium métallique $\text{Li}_{(\text{s})}$ et la borne positive d'un oxyde inséré $\text{Li}_x\text{MnO}_2$. L'électrolyte est un sel de lithium dissous dans un solvant organique.

1. Écrire les demi-équations électroniques se produisant à chaque électrode lors de la décharge de la pile, ainsi que l'équation Bilan. Préciser quelle électrode est l'anode et laquelle est la cathode.
2. Exprimer la force électromotrice (fem) $E$ de la pile en fonction de la fem standard $E^\circ$, de la température $T$, et des activités des espèces mises en jeu en appliquant la loi de Nernst.
3. Calculer la capacité massique théorique $Q_m$ (en $\text{A}\cdot\text{h}\cdot\text{kg}^{-1}$) de l'électrode négative en lithium pur.
4. *Analyse critique :* Lors d'une décharge rapide, la tension aux bornes de la pile est inférieure à la fem $E$ calculée à l'équilibre. Citer les trois origines principales de cette chute de tension et expliquer brièvement le phénomène associé à la surtension d'activation.

#### Partie II : Électrolyse d'une solution de chlorure de sodium
On s'intéresse à la production industrielle de dichlore $\text{Cl}_{2\text{(g)}}$ et de soude ($\text{Na}^+ + \text{OH}^-$) par électrolyse d'une solution aqueuse de chlorure de sodium concentrée ($\text{NaCl}_{(aq)}$), à pH neutre initialement.

5. Identifier les différentes espèces chimiques susceptibles d'être oxydées et réduites à chaque électrode.
6. Écrire les réactions susceptibles de se produire à l'anode et à la cathode en tenant compte des potentiels standard et des surtensions. On admettra que la surtension de dégagement de l'hydrogène sur l'électrode est de $0{,}20\text{ V}$ et que celle du dioxygène est de $0{,}60\text{ V}$, tandis que celle du dichlore est négligeable.
7. Écrire l'équation bilan globale de l'électrolyse.
8. Pour un courant d'intensité $I = 1000\text{ A}$, calculer le volume de dichlore recueilli par heure sous une pression de $1{,}0\text{ bar}$ à $298\text{ K}$.

---

### 💡 Pistes & Indications méthodologiques

* **Partie I, Q1 :** Rappelez-vous que par définition, l'oxydation a lieu à l'anode et la réduction à la cathode, quel que soit le type de système (pile ou électrolyseur).
* **Partie I, Q3 :** La capacité massique se calcule en rapportant la charge électrique totale que peut délivrer $1\text{ kg}$ de matière active à sa masse molaire, en utilisant la constante de Faraday $F$.
* **Partie II, Q6 :** Pour déterminer la réaction effective lors d'une électrolyse, tracez l'échelle des potentiels apparents (en tenant compte des surtensions) : l'oxydation la plus facile se fait au potentiel le plus élevé pour l'anode (oxydant le plus fort réduit ? Non, l'anode impose le sens inverse, c'est l'espèce dont le potentiel d'oxydation est le plus bas qui s'oxyde en premier, ou via les règles du "thermodynamiquement le plus facile"). Plus rigoureusement : l'anode oxyde l'espèce dont le potentiel de Nernst effectif (avec surtension) est le plus bas, et la cathode réduit l'espèce dont le potentiel est le plus haut.
* **Partie II, Q8 :** Utilisez la loi des gaz parfaits après avoir exprimé la quantité de matière de $\text{Cl}_2$ produite grâce à la relation de Faraday liant la quantité d'électrons échangés au courant et au temps.

---

### 📋 Corrigé détaillé pas à pas

#### Partie I : Étude thermodynamique et cinétique d'une pile au lithium

1. **Demi-équations et Bilan :**
   * À l'anode (siège de l'oxydation) : 
     $$\text{Li}_{(\text{s})} = \text{Li}^+_{(\text{aq})} + 1\text{ e}^-$$
   * À la cathode (siège de la réduction) : 
     $$\text{MnO}_{2\text{(s)}} + \text{Li}^+_{(\text{aq})} + 1\text{ e}^- = \text{LiMnO}_{2\text{(s)}}$$
   * Équation bilan de la décharge : 
     $$\text{Li}_{(\text{s})} + \text{MnO}_{2\text{(s)}} = \text{LiMnO}_{2\text{(s)}}$$
   * L'anode est la borne négative et la cathode est la borne positive.

2. **Expression de la fem (Loi de Nernst) :**
   Le quotient de réaction associé à l'équation bilan s'écrit (en considérant les activités des solides purs égales à $1$) :
   $$Q_r = \frac{a(\text{LiMnO}_{2\text{(s)}})}{a(\text{Li}_{(\text{s})}) \cdot a(\text{MnO}_{2\text{(s)}}) \cdot a(\text{Li}^+_{(\text{aq})})} = \frac{1}{a(\text{Li}^+_{(\text{aq})})}$$
   La force électromotrice $E$ de la pile est la différence entre le potentiel de la cathode et celui de l'anode :
   $$E = E_{\text{cathode}} - E_{\text{anode}} = E^\circ - \frac{RT}{F} \ln(Q_r)$$
   Soit :
   $$E = E^\circ + \frac{RT}{F} \ln\left(a(\text{Li}^+_{(\text{aq})})\right)$$

3. **Capacité massique théorique du lithium :**
   La masse molaire du lithium est $M(\text{Li}) \approx 6{,}94\text{ g}\cdot\text{mol}^{-1}$.
   Pour $1\text{ kg}$ de lithium, la quantité de matière est :
   $$n(\text{Li}) = \frac{1000\text{ g}}{6{,}94\text{ g}\cdot\text{mol}^{-1}} \approx 144{,}1\text{ mol}$$
   Chaque mole de lithium cède $1\text{ mole}$ d'électrons. La charge totale $Q$ est donc :
   $$Q = n(\text{Li}) \times F = 144{,}1 \times 96500 = 1{,}390 \times 10^7\text{ C}$$
   En convertissant les coulombs en ampères-heures ($1\text{ A}\cdot\text{h} = 3600\text{ C}$) :
   $$Q_m = \frac{1{,}390 \times 10^7}{3600} \approx 3860\text{ A}\cdot\text{h}\cdot\text{kg}^{-1}$$

4. **Analyse critique (chute de tension) :**
   Les trois origines de la chute de tension en régime dynamique sont :
   * **La chute ohmique ($R_{\text{int}} I$)** due à la résistance interne de l'électrolyte et des connexions.
   * **La surtension d'activation** liée à la lenteur cinétique du franchissement de la barrière d'énergie potentielle lors du transfert de charge à l'interface électrode/électrolyte.
   * **La surtension de concentration** liée aux gradients de concentration des espèces électroactives au voisinage des électrodes lorsque la diffusion ne compense pas assez vite la consommation/production des espèces.

---

#### Partie II : Électrolyse d'une solution de chlorure de sodium

5. **Espèces en présence :**
   * À l'anode (oxydation possible) : $\text{Cl}^-_{(\text{aq})}$ et $\text{H}_2\text{O}_{(\text{l})}$
   * À la cathode (réduction possible) : $\text{Na}^+_{(\text{aq})}$, $\text{H}_2\text{O}_{(\text{l})}$ (et $\text{H}^+_{(\text{aq})}$ en milieu neutre, mais en quantité très faible).

6. **Réactions effectives aux électrodes :**
   * *À l'anode :* Compétition entre l'oxydation des ions chlorure et l'oxydation de l'eau (donnant $\text{O}_2$). 
     Les potentiels apparents à pH $7$ sont :
     * $E(\text{Cl}_2/\text{Cl}^-)\approx 1{,}36\text{ V}$ (surtension négligeable).
     * $E(\text{O}_2/\text{H}_2\text{O}) = 1{,}23 - 0{,}06 \times \text{pH} + \text{surtension} = 1{,}23 - 0{,}42 + 0{,}60 = 1{,}41\text{ V}$.
     L'oxydation des ions $\text{Cl}^-$ se produit préférentiellement car son potentiel effectif est inférieur :
     $$2\text{ Cl}^-_{(\text{aq})} = \text{Cl}_{2\text{(g)}} + 2\text{ e}^-$$
   * *À la cathode :* Compétition entre la réduction des ions $\text{Na}^+$ ($E^\circ = -3{,}04\text{ V}$, inatteignable en milieu aqueux) et la réduction de l'eau :
     $$2\text{ H}_2\text{O}_{(\text{l})} + 2\text{ e}^- = \text{H}_{2\text{(g)}} + 2\text{ OH}^-_{(\text{aq})}$$

7. **Équation bilan globale de l'électrolyse :**
   En combinant les deux demi-équations (en multipliant l'anode par $1$ et la cathode par $1$ pour échanger $2$ électrons) :
   $$2\text{ Cl}^-_{(\text{aq})} + 2\text{ H}_2\text{O}_{(\text{l})} \xrightarrow{\text{électricité}} \text{Cl}_{2\text{(g)}} + \text{H}_{2\text{(g)}} + 2\text{ OH}^-_{(\text{aq})}$$

8. **Volume de dichlore recueilli :**
   La quantité d'électricité traversant la cellule pendant une durée $\Delta t = 1\text{ h} = 3600\text{ s}$ est :
   $$Q = I \cdot \ât = 1000 \times 3600 = 3{,}60 \times 10^6\text{ C}$$
   D'après la demi-équation anodique, la formation d'une mole de $\text{Cl}_2$ nécessite $2$ moles d'électrons ($n(\text{e}^-) = 2n(\text{Cl}_2)$). Or $Q = n(\text{e}^-) \cdot F$, donc :
   $$n(\text{Cl}_2) = \frac{Q}{2F} = \frac{3{,}60 \times 10^6}{2 \times 96500} \approx 18{,}65\text{ mol}$$
   En assimilant le dichlore à un gaz parfait, le volume $V(\text{Cl}_2)$ sous $P = 1{,}0\text{ bar} = 10^5\text{ Pa}$ et $T = 298\text{ K}$ s'obtient par la loi des gaz parfaits :
   $$V(\text{Cl}_2) = \frac{n(\text{Cl}_2) R T}{P}$$
   $$V(\text{Cl}_2) = \frac{18{,}65 \times 8{,}314 \times 298}{10^5} \approx 0{,}462\text{ m}^3 = 462\text{ L}$$