---
title: 'Exercice 2 : Protection contre la corrosion'
description: 'Problème d entraînement type concours pour PT.'
---

### 🌐 Énoncé du problème / Cadre d'étude

La corrosion des métaux en milieu aqueux est un enjeu économique et sécuritaire majeur. Ce problème s'intéresse à la protection cathodique d'une coque de navire en acier (assimilé ici à du fer pur, $\text{Fe}$) immergée dans de l'eau de mer aérée.

L'eau de mer est modélisée par une solution aqueuse à $\text{pH} = 8{,}0$, sous une pression partielle de dioxygène $P(\text{O}_2) = 0{,}2\text{ bar}$, à la température de $298\text{ K}$. On se place dans les conditions standard thermodynamiques pour les activités des espèces dissoutes à l'exception du $\text{pH}$ et des pressions partielles.

**Données thermodynamiques et physico-chimiques à $298\text{ K}$ :**
* Constante des gaz parfaits : $R = 8{,}314\text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$
* Constante de Faraday : $F = 96485\text{ C}\cdot\text{mol}^{-1}$
* $2{,}303 \frac{RT}{F} \log(10) \approx 0{,}060\text{ V}$
* Pression standard : $P^\circ = 1\text{ bar}$
* Concentration standard : $c^\circ = 1\text{ mol}\cdot\text{L}^{-1}$
* Potentiels standard apparents (ou à pH $= 0$) :
  * $E^\circ(\text{Fe}^{2+}/\text{Fe}) = -0{,}44\text{ V}$
  * $E^\circ(\text{O}_2 / \text{H}_2\text{O}) = +1{,}23\text{ V}$
  * $E^\circ(\text{Zn}^{2+}/\text{Zn}) = -0{,}76\text{ V}$

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Thermodynamique de la corrosion**
   1. Écrire les demi-réactions redox susceptibles de se produire sur la coque en acier en milieu aéré (oxydation du fer et réduction du dioxygène).
   2. Établir l'expression littérale du potentiel de Nernst du couple $\text{O}_2/\text{H}_2\text{O}$ en fonction du $\text{pH}$ et de $P(\text{O}_2)$. Calculer sa valeur numérique dans les conditions de l'eau de mer.
   3. Calculer le potentiel de Nernst du couple $\text{Fe}^{2+}/\text{Fe}$ en supposant $[\text{Fe}^{2+}] = 10^{-6}\text{ mol}\cdot\text{L}^{-1}$. Conclure sur la spontanéité thermodynamique de la corrosion du fer.

2. **Protection cathodique par anode sacrificielle**
   1. Pour protéger la coque, on y relie électriquement des blocs de zinc (anodes sacrificielles). Expliquer qualitativement le principe de cette protection.
   2. Écrire la réaction bilan mise en jeu lors de cette protection. Calculer la variation d'enthalpie libre standard $\Delta_r G^\circ$ associée. Le dispositif est-il thermodynamiquement spontané ?

3. **Aspects cinétiques et dimensionnement**
   1. La surface immergée de la coque est $S = 500\text{ m}^2$. La densité de courant de corrosion mesurée est $j_{\text{corr}} = 0{,}10\text{ A}\cdot\text{m}^{-2}$. Déterminer l'intensité totale du courant de corrosion $I_{\text{corr}}$.
   2. Sachant que l'on souhaite protéger cette coque pendant une durée de $T = 3\text{ ans}$ avant le remplacement des blocs de zinc, calculer la masse minimale de zinc nécessaire.
      * *Données supplémentaires pour le zinc :* Masse molaire $M(\text{Zn}) = 65{,}4\text{ g}\cdot\text{mol}^{-1}$.

4. **Analyse critique du modèle**
   1. Le modèle thermodynamique utilisé néglige les surtensions cinétiques aux interfaces métal/solution. Quel est l'impact qualitatif d'une surtension de réduction du dioxygène sur le potentiel réel de la coque ?
   2. Citer une limite pratique du système des anodes sacrificielles en milieu marin (liée par exemple à la passivation ou aux variations de résistivité de l'eau).

---

### 💡 Pistes & Indications méthodologiques

* **Q1.2 & Q1.3 :** Pensez à bien utiliser l'équation de Nernst en incluant le nombre d'électrons échangés $n$ et en remplaçant $\frac{RT}{F}\ln(10)$ par $0{,}060$. Attention aux activités des espèces dissoutes et des gaz.
* **Q2.2 :** Utilisez la relation thermodynamique reliant $\Delta_r G^\circ$ à la f.é.m. standard de la pile constituée ($\Delta_r G^\circ = -nFE^\circ_{\text{pile}}$).
* **Q3.2 :** Reliez la charge électrique totale traversant le circuit en $3\text{ ans}$ à la quantité de matière d'électrons, puis à la quantité de zinc oxydé via la loi de Faraday. Attention à la conversion des années en secondes.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Thermodynamique de la corrosion
1. Les demi-réactions redox sont :
   * Oxydation du fer (métal constitutif de la coque) :
     $$\text{Fe}_{(s)} = \text{Fe}^{2+}_{(aq)} + 2\,\text{e}^-$$
   * Réduction du dioxygène (en milieu neutre ou faiblement basique, $\text{pH} = 8{,}0$) :
     $$\text{O}_2_{(g)} + 4\,\text{H}^+_{(aq)} + 4\,\text{e}^- = 2\,\text{H}_2\text{O}_{(l)}$$

2. L'équation de Nernst pour le couple $\text{O}_2/\text{H}_2\text{O}$ s'écrit :
   $$E(\text{O}_2/\text{H}_2\text{O}) = E^\circ(\text{O}_2/\text{H}_2\text{O}) + \frac{0{,}060}{4} \log\left(\frac{P(\text{O}_2)}{P^\circ} \cdot [\text{H}^+]^4\right)$$
   En utilisant la définition du $\text{pH}$ ($\log[\text{H}^+] = -\text{pH}$), on obtient :
   $$E(\text{O}_2/\text{H}_2\text{O}) = E^\circ(\text{O}_2/\text{H}_2\text{O}) + \frac{0{,}060}{4} \frac{P(\text{O}_2)}{P^\circ} - 0{,}060 \times \text{pH}$$
   A.N. : $E(\text{O}_2/\text{H}_2\text{O}) = 1{,}23 + 0{,}015 \log(0{,}2) - 0{,}060 \times 8{,}0 = 1{,}23 - 0{,}010 - 0{,}48 = \mathbf{+0{,}74\text{ V}}$ (vs. ESH).

3. L'équation de Nernst pour le couple $\text{Fe}^{2+}/\text{Fe}$ est :
   $$E(\text{Fe}^{2+}/\text{Fe}) = E^\circ(\text{Fe}^{2+}/\text{Fe}) + \frac{0{,}060}{2} \log\left(\frac{[\text{Fe}^{2+}]}{c^\circ}\right)$$
   A.N. : $E(\text{Fe}^{2+}/\text{Fe}) = -0{,}44 + 0{,}030 \log(10^{-6}) = -0{,}44 - 0{,}18 = \mathbf{-0{,}62\text{ V}}$ (vs. ESH).
Conclusion: * $E(\text{O}_2/\text{H}_2\text{O}) > E(\text{Fe}^{2+}/\text{Fe})$. Le potentiel de la solution oxydante est supérieur au potentiel de réduction du fer. La réaction globale de corrosion (oxydation du fer par le dioxygène) est donc **thermodynamiquement spontanée**.

---

#### 2. Protection cathodique par anode sacrificielle
1. Le zinc possède un potentiel standard $E^\circ(\text{Zn}^{2+}/\text{Zn}) = -0{,}76\text{ V}$, nettement inférieur à celui du fer ($-0{,}44\text{ V}$). Connecté au fer, le zinc s'oxyde préférentiellement à sa place, imposant son potentiel au système et polarisant négativement la coque en acier, ce qui stoppe l'oxydation du fer.
2. La réaction bilan de la protection (oxydation du zinc, réduction de l'oxygène) est :
   $$2\,\text{Zn}_{(s)} + \text{O}_2_{(g)} + 4\,\text{H}^+_{(aq)} = 2\,\text{Zn}^{2+}_{(aq)} + 2\,\text{H}_2\text{O}_{(l)}$$
   La f.é.m. standard du système est $E^\circ_{\text{pile}} = E^\circ(\text{O}_2/\text{H}_2\text{O}) - E^\circ(\text{Zn}^{2+}/\text{Zn}) = 1{,}23 - (-0{,}76) = 1{,}99\text{ V}$.
   La variation d'enthalpie libre standard est :
   $$\Delta_r G^\circ = -n F E^\circ_{\text{pile}}$$
   Avec $n = 4$ moles d'électrons échangés :
   $$\Delta_r G^\circ = -4 \times 96485 \times 1{,}99 \approx \mathbf{-7{,}7 \times 10^5\text{ J}\cdot\text{mol}^{-1}}$$
   Puisque $\Delta_r G^\circ < 0$, le dispositif est **thermodynamiquement spontané**.

---

#### 3. Aspects cinétiques et dimensionnement
1. L'intensité totale du courant de corrosion est :
   $$I_{\text{corr}} = j_{\text{corr}} \times S = 0{,}10\text{ A}\cdot\text{m}^{-2} \times 500\text{ m}^2 = \mathbf{50\text{ A}}$$
2. La charge électrique totale $Q$ débitée par le zinc pendant la durée $T = 3\text{ ans}$ est :
   $$Q = I_{\text{corr}} \times T = 50\text{ A} \times (3 \times 365 \times 24 \times 3600\text{ s}) \approx 4{,}73 \times 10^9\text{ C}$$
   D'après la demi-réaction $\text{Zn} = \text{Zn}^{2+} + 2\,\text{e}^-$, la quantité de matière d'électrons échangés est $N(e^-) = \frac{Q}{F}$, et la quantité de zinc nécessaire est :
   $$n(\text{Zn}) = \frac{Q}{2F}$$
   La masse minimale de zinc est donc :
   $$m(\text{Zn}) = n(\text{Zn}) \times M(\text{Zn}) = \frac{Q \cdot M(\text{Zn})}{2F}$$
   A.N. :
   $$m(\text{Zn}) = \frac{4{,}73 \times 10^9 \times 65{,}4 \times 10^{-3}}{2 \times 96485} \approx \mathbf{1{,}60 \times 10^3\text{ kg} \ (\text{ou } 1{,}60\text{ t})}$$

---

#### 4. Analyse critique du modèle
1. En réalité, les réactions électrochimiques présentent des surtensions cinétiques (notamment une surtension importante pour la réduction de $\text{O}_2$ sur le fer). Cela signifie que le potentiel réel de la coque non protégée s'établit à un potentiel mixte (potentiel de corrosion $E_{\text{corr}}$) situé entre les potentiels d'équilibre des deux couples, modifié par ces cinétiques d'électrode.
2. **Limite pratique :** L'accumulation de produits de corrosion ou la formation d'une couche d'oxydes insolubles sur l'anode de zinc peut entraîner une **passivation** de l'anode, réduisant l'efficacité du courant de protection. De plus, la résistivité variable de l'eau de mer selon la température et la salinité modifie la portée du courant de protection cathodique.