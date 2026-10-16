---
title: 'Exercice 2 : Protection cathodique et anode sacrificielle'
description: 'Problème corrigé type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

La corrosion des structures métalliques en milieu aqueux (comme les coques de navires en acier ou les canalisations enterrées) représente un enjeu économique et de sécurité majeur. Pour lutter contre ce phénomène, la méthode de la **protection cathodique par anode sacrificielle** est fréquemment utilisée. 

On s'intéresse dans ce problème à la protection d'une coque de navire en acier (essentiellement du fer $\text{Fe}$) immergée dans de l'eau de mer oxygénée et salée, maintenue à une température $T = 298\text{ K}$.

#### Données physico-chimiques à $298\text{ K}$ :
* Constante des gaz parfaits : $R = 8{,}314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$
* Constante de Faraday : $F = 96485\text{ C}\cdot\text{mol}^{-1}$
* Pression standard : $P^\circ = 1\text{ bar}$
* Concentration standard : $C^\circ = 1\text{ mol}\cdot\text{L}^{-1}$
* Potentiels standard apparents (ou potentiels standard à pH = 7) :
  * Couple de réduction du dioxygène : $E^\circ_1(\text{O}_2/\text{H}_2\text{O}) = +0{,}82\text{ V / ENH}$
  * Couple d'oxydation du fer : $E^\circ_2(\text{Fe}^{2+}/\text{Fe}) = -0{,}44\text{ V / ENH}$
  * Couple d'oxydation du zinc : $E^\circ_3(\text{Zn}^{2+}/\text{Zn}) = -0{,}76\text{ V / ENH}$

---

### ❓ Questions progressives

1. **Étude thermodynamique de la corrosion libre**
   1. Écrire les deux demi-réactions redox susceptibles de se produire à la surface de l'acier non protégé : la réduction du dioxygène dissous et l'oxydation (dissolution) du fer. En déduire l'équation bilan de la corrosion du fer en milieu aéré.
   2. Exprimer la variation d'enthalpie libre standard $\Delta_r G^\circ$ associée à cette réaction bilan. Calculer sa valeur numérique à $298\text{ K}$ et conclure quant au caractère spontané de la corrosion.

2. **Cinétique électrochimique et domaine d'immunité**
   1. Rappeler la loi de Nernst donnant le potentiel d'électrode $E$ en fonction des activités des espèces pour le couple $\text{Fe}^{2+}/\text{Fe}$.
   2. À partir d'un diagramme de Pourbaix (potentiel-pH), définir la zone d'**immunité** du fer. Quel est l'objectif de la protection cathodique vis-à-vis de cette zone ?

3. **Principe de l'anode sacrificielle en zinc**
   1. Pour protéger la coque du navire (surface immergée $S = 50\mathrm{ m^2}$), on y connecte électriquement des blocs de zinc (anodes sacrificielles). Justifier ce choix thermodynamique en comparant les potentiels des couples du fer et du zinc.
   2. Sachant que la densité de courant moyenne de corrosion de la coque nue est $j_{\text{corr}} = 0{,}10\text{ A}\cdot\text{m}^{-2}$, calculer le courant total de corrosion $I_{\text{corr}}$ à compenser.
   3. En déduire la masse minimale de zinc $\Delta m_{\text{Zn}}$ qu'il faut consommer pour assurer une protection efficace pendant une durée de $1\text{ an}$ ($365\text{ jours}$). On donne la masse molaire du zinc : $M(\text{Zn}) = 65{,}38\text{ g}\cdot\text{mol}^{-1}$.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1.1 :** Équilibrez les demi-équations en milieu neutre ($\text{pH} = 7$), en faisant intervenir les ions $\text{H}^+$ ou $\text{OH}^-$ selon les besoins, puis combinez-les pour éliminer les électrons.
* **Question 1.2 :** Utilisez la relation thermodynamique fondamentale reliant la variation d'enthalpie libre standard à la force électromotrice standard de la pile associée : $\Delta_r G^\circ = -n F E^\circ_{\text{cellule}}$.
* **Question 3.1 :** Le métal sacrificiel doit posséder un potentiel de réduction plus négatif que celui du métal à protéger afin de imposer son oxydation préférentielle.
* **Question 3.3 :** Reliez la charge électrique totale traversant le circuit pendant un an au nombre de moles d'électrons échangés, puis utilisez la stoéchiométrie de l'oxydation du zinc ($\text{Zn} \rightarrow \text{Zn}^{2+} + 2e^-$).

---

### 📋 Corrigé détaillé et vérification des résultats

#### 1. Étude thermodynamique de la corrosion libre

1.1. Les deux demi-réactions mises en jeu à la surface du fer en milieu aéré (aqueux, $\text{pH} \approx 7$) sont :
* Réduction du dioxygène (cathodique) :
  $$\text{O}_2\text{(aq)} + 4\text{H}^+\text{(aq)} + 4e^- \rightleftharpoons 2\text{H}_2\text{O}\text{(l)}$$
* Oxydation du fer (anodique) :
  $$\text{Fe}\text{(s)} \rightleftharpoons \text{Fe}^{2+}\text{(aq)} + 2e^-$$

Pour obtenir l'équation bilan, on multiplie la seconde demi-équation par 2 et on l'additionne à la première :
$$\text{O}_2\text{(aq)} + 2\text{Fe}\text{(s)} + 4\text{H}^+\text{(aq)} \longrightarrow 2\text{Fe}^{2+}\text{(aq)} + 2\text{H}_2\text{O}\text{(l)}$$
*(En milieu neutre, les ions $\text{H}^+$ proviennent de l'autoprotolyse de l'eau, conduisant à la formation d'ions $\text{OH}^-$).*

1.2. La variation d'enthalpie libre standard $\Delta_r G^\circ$ de la réaction est liée au potentiel standard de la pile équivalente $E^\circ_{\text{cellule}}$ par la relation :
$$\Delta_r G^\circ = -n F E^\circ_{\text{cellule}}$$
où $n$ est le nombre d'électrons échangés dans l'équation bilan ($n = 4$).
Le potentiel standard de la pile est la différence entre le potentiel de la cathode et celui de l'anode :
$$E^\circ_{\text{cellule}} = E^\circ_1(\text{O}_2/\text{H}_2\text{O}) - E^\circ_2(\text{Fe}^{2+}/\text{Fe})$$
A.NUM. :
$$E^\circ_{\text{cellule}} = 0{,}82 - (-0{,}44) = +1{,}26\text{ V}$$

Calculons $\Delta_r G^\circ$ :
$$\Delta_r G^\circ = -4 \times 96485\text{ C}\cdot\text{mol}^{-1} \times 1{,}26\text{ V}$$
$$\Delta_r G^\circ = -486166\text{ J}\cdot\text{mol}^{-1} \approx -486\text{ kJ}\cdot\text{mol}^{-1}$$
Conclusion: ** $\Delta_r G^\circ < 0$, la réaction de corrosion du fer par le dioxygène est thermodynamiquement **spontanée**.

---

#### 2. Cinétique électrochimique et domaine d'immunité

2.1. La loi de Nernst pour le couple $\text{Fe}^{2+} + 2e^- \rightleftharpoons \text{Fe}\text{(s)}$ s'écrit (à $T = 298\text{ K}$) :
$$E(\text{Fe}^{2+}/\text{Fe}) = E^\circ_2(\text{Fe}^{2+}/\text{Fe}) + \frac{0{,}06}{2} \log\left(\frac{[\text{Fe}^{2+}]}{C^\circ}\right)$$
Soit :
$$E(\text{Fe}^{2+}/\text{Fe}) = -0{,}44 + 0{,}03 \log\left(\frac{[\text{Fe}^{2+}]}{C^\circ}\right)$$

2.2. Sur un diagramme potentiel-pH, le **domaine d'immunité** correspond à la zone où le métal sous forme solide ($\text{Fe}\text{(s)}$) est thermodynamiquement stable par rapport aux ions dissous ou aux oxydes/hydroxydes. 
L'objectif de la protection cathodique est d'imposer au métal un potentiel suffisamment bas pour le maintenir précisément dans ce domaine d'immunité, empêchant ainsi son oxydation en ions $\text{Fe}^{2+}$.

---

#### 3. Principe de l'anode sacrificielle en zinc

3.1. Le potentiel standard du zinc est $E^\circ_3(\text{Zn}^{2+}/\text{Zn}) = -0{,}76\text{ V}$, tandis que celui du fer est $E^\circ_2(\text{Fe}^{2+}/\text{Fe}) = -0{,}44\text{ V}$. 
Puisque $E^\circ_3 < E^\circ_2$, le zinc est plus réducteur (plus électropositif au sens thermodynamique, ou de potentiel plus bas) que le fer. Lorsqu'on relie électriquement le zinc à la coque en acier, le zinc s'oxyde préférentiellement à la place du fer, jouant ainsi le rôle d'**anode sacrificielle**.

3.2. Le courant total de corrosion $I_{\text{corr}}$ à compenser se calcule à partir de la densité de courant et de la surface de la coque :
$$I_{\text{corr}} = j_{\text{corr}} \times S$$
A.NUM. :
$$I_{\text{corr}} = 0{,}10\text{ A}\cdot\text{m}^{-2} \times 50\text{ m}^2 = 5{,}0\text{ A}$$

3.3. Pendant une durée $\Delta t = 1\text{ an} = 365 \times 24 \times 3600\text{ s} = 3{,}1536 \times 10^7\text{ s}$, la charge électrique totale débitée par l'anode est :
$$Q = I_{\text{corr}} \times \Delta t$$
A.NUM. :
$$Q = 5{,}0\text{ A} \times 3{,}1536 \times 10^7\text{ s} = 1{,}5768 \times 10^8\text{ C}$$

La réaction d'oxydation du zinc met en jeu 2 electrons par mole de zinc :
$$\text{Zn}\text{(s)} \longrightarrow \text{Zn}^{2+}\text{(aq)} + 2e^-$$

La quantité de matière d'électrons $n(e^-)$ échangée est :
$$n(e^-) = \frac{Q}{F}$$
D'après la stoéchiométrie, la quantité de zinc consommée est $n(\text{Zn}) = \frac{n(e^-)}{2} = \frac{Q}{2F}$.
La masse minimale de zinc nécessaire $\Delta m_{\text{Zn}}$ est donc :
$$\Delta m_{\text{Zn}} = n(\text{Zn}) \times M(\text{Zn}) = \frac{Q}{2F} M(\text{Zn}) = \frac{I_{\text{corr}} \Delta t}{2F} M(\text{Zn}) $$

A.NUM. :
$$\Delta m_{\text{Zn}} = \frac{1{,}5768 \times 10^8\text{ C}}{2 \times 96485\text{ C}\cdot\text{mol}^{-1}} \times 65{,}38\text{ g}\cdot\text{mol}^{-1}$$
$$\Delta m_{\text{Zn}} = 816{,}99 \times 65{,}38 \approx 53413\text{ g}$$
$$\Delta m_{\text{Zn}} \approx 53{,}4\text{ kg}$$

**Vérification dimensionnelle :** 
$$[\Delta m] = \frac{[\text{Courant}] \times [\text{Temps}]}{[\text{Charge}/\text{mol}]} \times [\text{Masse}/\text{mol}] = \frac{\text{A} \cdot \text{s}}{\text{C}\cdot\text{mol}^{-1}} \cdot \text{g}\cdot\text{mol}^{-1} = \frac{\text{C}}{\text{C}} \cdot \text{g} = \text{g}$$
L'homogénéité dimensionnelle est validée. Il faut donc prévoir un peu plus de $53\text{ kg}$ de zinc pour assurer la protection de la coque durant cette période.