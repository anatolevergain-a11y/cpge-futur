---
title: 'Exercice 1 : Diagrammes E-pH et prédominance'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les diagrammes potentiel-pH (ou diagrammes de Pourbaix) sont des outils thermodynamiques fondamentaux en chimie des solutions aqueuses. Ils permettent de synthétiser les domaines de prédominance des espèces dissoutes et de stabilité des espèces condensées (précipités, métaux) en fonction du pH du milieu et du potentiel redox $E$ du système.

L'objectif de ce problème est d'étudier le comportement chimique et électrochimique du fer en solution aqueuse à température ambiante ($T = 298\text{ K}$). On se place dans le cadre de l'approximation de Nernst où les activités des espèces dissoutes sont assimilées à leurs concentrations molaires rapportées à la concentration standard $c^\circ = 1\text{ mol}\cdot\text{L}^{-1}$. On définit la concentration de trace comme étant $C_{\text{tr}} = 10^{-6}\text{ mol}\cdot\text{L}^{-1}$.

Données thermodynamiques à $298\text{ K}$ :
* Constante des gaz parfaits : $R = 8{,}314\text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$
* Constante de Faraday : $F = 96\,485\text{ C}\cdot\text{mol}^{-1}$
* Facteur de Nernst à $298\text{ K}$ : $\frac{RT \ln(10)}{F} \approx 0{,}059\text{ V}$
* Produit ionique de l'eau : $K_e = 10^{-14}$
* Produit de solubilité de l'hydroxyde de fer(II) $\text{Fe(OH)}_2\text{ (s)}$ : $K_{s1} = 10^{-15{,}1}$
* Produit de solubilité de l'hydroxyde de fer(III) $\text{Fe(OH)}_3\text{ (s)}$ : $K_{s2} = 10^{-38{,}8}$
* Potentiel standard du couple $\text{Fe}^{3+}/\text{Fe}^{2+}$ : $E^{\circ}_1(\text{Fe}^{3+}/\text{Fe}^{2+}) = 0{,}77\text{ V}$
* Potentiel standard du couple $\text{Fe}^{2+}/\text{Fe}\text{ (s)}$ : $E^{\circ}_2(\text{Fe}^{2+}/\text{Fe}) = -0{,}44\text{ V}$

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Équilibres acido-basiques et de précipitation (Hors redox)**
   * Écrire la relation entre le pH et la concentration en ions hydroxyde $\text{HO}^-$ à $298\text{ K}$.
   * Exprimer la solubilité $s$ (en $\text{mol}\cdot\text{L}^{-1}$) de l'hydroxyde de fer(II) $\text{Fe(OH)}_2\text{ (s)}$ en fonction du pH et de $K_{s1}$. Calculer le pH de début de précipitation d'une solution contenant des ions $\text{Fe}^{2+}$ à la concentration de $C_0 = 10^{-2}\text{ mol}\cdot\text{L}^{-1}$.

2. **Tracé des frontières du diagramme $E$-pH**
   * **Couple $\text{Fe}^{3+}/\text{Fe}^{2+}$ :** Écrire la demi-équation électronique associée. Établir l'équation de la frontière entre les domaines de prédominance de $\text{Fe}^{3+}$ et $\text{Fe}^{2+}$ en supposant $[\text{Fe}^{3+}] = [\text{Fe}^{2+}]$. Cette frontière dépend-elle du pH ? Justifier.
   * **Couple $\text{Fe}^{2+}/\text{Fe}\text{ (s)}$ :** Écrire la demi-équation électronique. Établir l'expression du potentiel de Nernst $E$ en fonction du pH et de $\log([\text{Fe}^{2+}])$. Pour une concentration dissoute totale fixée à la limite de traçabilité $C_{\text{tr}} = 10^{-6}\text{ mol}\cdot\text{L}^{-1}$, tracer l'allure de la frontière.
   * **Prise en compte du précipité $\text{Fe(OH)}_2\text{ (s)}$ :** En déduire l'équation de la frontière entre le domaine du solide $\text{Fe(OH)}_2\text{ (s)}$ et celui de l'ion $\text{Fe}^{2+}$ pour des pH supérieurs au seuil de précipitation calculé à la question 1.

3. **Analyse critique du modèle thermodynamique**
   * Le diagramme $E$-pH ainsi tracé indique des zones de stabilité thermodynamique. Rappeler la réaction thermodynamique parasite de l'eau en milieu aqueux (domaines de stabilité de l'eau).
   * Un métal dont le domaine de stabilité se situe entièrement en dessous de la droite de réduction des ions $\text{H}^+$/$\text{H}_2\text{ (g)}$ est-il thermodynamiquement stable en milieu acide ? Quel phénomène observe-t-on ? Discuter des limites cinétiques face aux prédictions thermodynamiques.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Utilisez la définition du produit ionique $K_e = [\text{H}_3\text{O}^+][\text{HO}^-]$. Pour la précipitation, écrivez l'équilibre de solubilité et rappelez qu'il y précipitation dès que le produit ionique dépasse $K_{s1}$.
* **Question 2 :** Appliquez systématiquement la formule de Nernst $E = E^\circ + \frac{0{,}059}{n} \log\left(\frac{\text{produit des oxydants}}{\text{produit des réducteurs}}\right)$ en exprimant les concentrations des ions $\text{HO}^-$ en fonction du pH lorsque le système implique des hydroxydes.
* **Question 3 :** Pensez aux droites de stabilité de l'eau (lignes d'oxydation et de réduction du solvant). La thermodynamique indique le sens de l'évolution, mais la cinétique (énergie d'activation, surtension) dicte la vitesse réelle de la corrosion.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Équilibres acido-basiques et de précipitation

* **Lien entre pH et $[\text{HO}^-]$ :**
  À $298\text{ K}$, le produit ionique de l'eau s'écrit :
  $$K_e = [\text{H}_3\text{O}^+][\text{HO}^-] = 10^{-14}$$
  En passant au cologarithme ($\text{p}_Ke = -\log K_e = 14$), on obtient :
  $$\text{pH} + \text{pOH} = 14 \implies [\text{HO}^-] = 10^{\text{pH}-14}\text{ mol}\cdot\text{L}^{-1}$$

* **Solubilité de $\text{Fe(OH)}_2\text{ (s)}$ :**
  L'équilibre de dissolution s'écrit :
  $$\text{Fe(OH)}_2\text{ (s)} \rightleftharpoons \text{Fe}^{2+} + 2\text{ HO}^-$$
  Le produit de solubilité est $K_{s1} = [\text{Fe}^{2+}][\text{HO}^-]^2$.
  Par définition, la solubilité $s$ est la quantité totale de matière de fer(II) dissoute par litre de solution :
  $$s = [\text{Fe}^{2+}] = \frac{K_{s1}}{[\text{HO}^-]^2} = K_{s1} \cdot 10^{2(14-\text{pH})}$$
  
* **Calcul du pH de début de précipitation :**
  Il y a précipitation dès que $[\text{Fe}^{2+}][\text{HO}^-]^2 > K_{s1}$. Pour une concentration initiale $C_0 = 10^{-2}\text{ mol}\cdot\text{L}^{-1}$, le seuil de précipitation est atteint lorsque $[\text{Fe}^{2+}] = C_0$.
  $$[\text{HO}^-]^2 = \frac{K_{s1}}{C_0} = \frac{10^{-15{,}1}}{10^{-2}} = 10^{-13{,}1}$$
  Soit $[\text{HO}^-] = 10^{-6{,}55}\text{ mol}\cdot\text{L}^{-1}$.
  La pOH correspondante est $\text{pOH} = 6{,}55$, d'où :
  $$\text{pH}_{\text{début précipitation}} = 14 - 6{,}55 = 7{,}45$$

---

#### 2. Tracé des frontières du diagramme $E$-pH

* **Couple $\text{Fe}^{3+}/\text{Fe}^{2+}$ :**
  Demi-équation : 
  $$\text{Fe}^{3+} + \text{e}^- \rightleftharpoons \text{Fe}^{2+}$$
  Loi de Nernst :
  $$E = E^{\circ}_1(\text{Fe}^{3+}/\text{Fe}^{2+}) + 0{,}059 \log\left(\frac{[\text{Fe}^{3+}]}{[\text{Fe}^{2+}]}\right)$$
  Sur la frontière de prédominance égale, $[\text{Fe}^{3+}] = [\text{Fe}^{2+}]$, donc $\log(1) = 0$.
  $$E = 0{,}77\text{ V}$$
Conclusion: ** La frontière est une droite horizontale indépendante du pH ($E = 0{,}77\text{ V}$).

* **Couple $\text{Fe}^{2+}/\text{Fe}\text{ (s)}$ (en milieu acide, sans précipitation) :**
  Demi-équation :
  $$\text{Fe}^{2+} + 2\text{ e}^- \rightleftharpoons \text{Fe}\text{ (s)}$$
  Loi de Nernst (l'activité du solide pur $\text{Fe}\text{ (s)}$ vaut $1$) :
  $$E = E^{\circ}_2(\text{Fe}^{2+}/\text{Fe}) + \frac{0{,}059}{2} \log([\text{Fe}^{2+}])$$
  En fixant $[\text{Fe}^{2+}] = C_{\text{tr}} = 10^{-6}\text{ mol}\cdot\text{L}^{-1}$ (limite de traçabilité pour délimiter le domaine de prédominance de l'ion) :
  $$E = -0{,}44 + \frac{0{,}059}{2} \log(10^{-6}) = -0{,}44 + 0{,}0295 \times (-6) = -0{,}44 - 0{,}177 = -0{,}617\text{ V}$$
  Cette frontière est également une droite horizontale $E \approx -0{,}62\text{ V}$ pour $\text{pH} < 7{,}45$.

* **Frontière $\text{Fe(OH)}_2\text{ (s)} / \text{Fe}^{2+}$ (milieu basique) :**
  Lorsque $\text{pH} > 7{,}45$, l'espèce stable du fer(II) n'est plus l'ion dissous $\text{Fe}^{2+}$ (à la concentration de trace $10^{-6}\text{ M}$), mais le précipité $\text{Fe(OH)}_2\text{ (s)}$.
  L'équilibre redox s'écrit en considérant le solide :
  $$\text{Fe(OH)}_2\text{ (s)} + 2\text{ H}^^+ + 2\text{ e}^- \rightleftharpoons \text{Fe}\text{ (s)} + 2\text{ H}_2\text{O}\text{ (l)}$$
  Appliquons la formule de Nernst à cet équilibre hétérogène (les activités des solides et du solvant valent $1$) :
  $$E = E^{\circ}_{\text{redox}} + \frac{0{,}059}{2} \log\left(\frac{1}{[\text{H}^+]^2}\right) = E^{\circ}_{\text{redox}} - 0{,}059 \log([\text{H}^+])$$
  Soit, en introduisant le pH :
  $$E = E^{\circ}_{\text{redox}} - 0{,}059\text{pH}$$
  *Détermination de $E^{\circ}_{\text{redox}}$ :* À l'équilibre limite avec $\text{Fe}^{2+}$ à la concentration $C_{\text{tr}}$, les expressions doivent se raccorder. Exprimons $E$ via $K_{s1}$ :
  On a $[\text{Fe}^{2+}] = \frac{K_{s1}}{[\text{HO}^-]^2} = K_{s1} \frac{[\text{H}^+]^2}{K_e^2}$.
  En reportant dans l'expression de Nernst de $\text{Fe}^{2+}/\text{Fe}$ :
  $$E = E^{\circ}_2 + 0{,}0295 \log\left(\frac{K_{s1} [\text{H}^+]^2}{K_e^2}\right)$$
  $$E = E^{\circ}_2 + 0{,}0295 \log(K_{s1}) - 0{,}0295 \log(K_e^2) + 0{,}059 \log([\text{H}^+])$$
  $$E = E^{\circ}_2 + 0{,}0295 \log(K_{s1}) - 0{,}059 \log(K_e) - 0{,}059\text{pH}$$
  A.N. : $E^{\circ}_2 = -0{,}44\text{ V}$, $\log(K_{s1}) = -15{,}1$, $\log(K_e) = -14$.
  $$E = -0{,}44 + 0{,}0295(-15{,}1) - 0{,}059(-14) - 0{,}059\text{pH}$$
  $$E = -0{,}44 - 0{,}445 + 0{,}826 - 0{,}059\text{pH} = -0{,}059 - 0{,}059\text{pH}$$
  La frontière en milieu basique est donc une droite de pente $-0{,}059\text{ V}\cdot\text{pH}^{-1}$ :
  $$E = -0{,}06 - 0{,}059\text{pH}$$

---

#### 3. Analyse critique du modèle thermodynamique

* **Domaines de stabilité de l'eau :**
  L'eau peut subir deux réactions rédox limites en solution aqueuse :
  1. **Oxydation en dioxygène** (limite supérieure de stabilité de l'eau) :
     $$2\text{ H}_2\text{O}\text{ (l)} \rightleftharpoons \text{O}_2\text{ (g)} + 4\text{ H}^+ + 4\text{ e}^-$$
     Dont l'équation de Nernst (à $P(\text{O}_2) = 1\text{ bar}$) est : $E_{\text{sup}} = 1{,}23 - 0{,}059\text{pH}$.
  2. **Réduction en dihydrogène** (limite inférieure de stabilité de l'eau) :
     $$2\text{ H}^+ + 2\text{ e}^- \rightleftharpoons \text{H}_2\text{ (g)}$$
     Dont l'équation de Nernst (à $P(\text{H}_2) = 1\text{ bar}$) est : $E_{\text{inf}} = 0{,}00 - 0{,}059\text{pH}$.

* **Stabilité du fer métallique et corrosion :**
  Le domaine du fer métallique $\text{Fe}\text{ (s)}$ se situe à des potentiels très négatifs (en dessous de $E_{\text{inf}}$ aux pH acides). D'un point de vue strictement thermodynamique, le fer métallique ne peut pas être stable en présence d'eau acidifiée : il est thermodynamiquement oxydé par les ions $\text{H}^+$ selon la réaction de corrosion :
  $$\text{Fe}\text{ (s)} + 2\text{ H}^+ \rightarrow \text{Fe}^{2+} + \text{H}_2\text{ (g)}$$

* **Limites cinétiques :**
  Cependant, de nombreux métaux (comme le fer ou le zinc) se corrodent parfois très lentement. En effet, la thermodynamique indique seulement le sens de l'évolution spontanée (potentiel standard et énergies libres), mais elle est **muette sur la cinétique**. La cinétique de dégagement de dihydrogène sur le fer présente une surtension importante selon la nature de la surface métallique. Ainsi, un métal thermodynamiquement instable peut présenter une cinétique de corrosion suffisamment lente pour être utilisé en pratique, ou nécessiter une protection (galvanisation, protection cathodique).