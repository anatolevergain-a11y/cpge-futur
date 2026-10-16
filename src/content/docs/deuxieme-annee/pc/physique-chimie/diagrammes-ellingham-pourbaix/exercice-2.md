---
title: 'Exercice : Étude thermodynamique du zinc et protection contre la corrosion'
description: 'Problème type Concours Commun Mines-Ponts (Filière PC) - Diagramme de Pourbaix et applications à la galvanisation.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les diagrammes potentiel-pH (ou diagrammes de Pourbaix) sont des outils thermodynamiques indispensables pour prévoir la stabilité des espèces métalliques en milieu aqueux et comprendre les phénomènes de corrosion ou de passivation.

On s'intéresse dans ce problème au système du **zinc ($\text{Zn}$)** à $298\text{ K}$. Le zinc est largement utilisé pour protéger l'acier contre la corrosion par un procédé nommé la galvanisation.

**Données thermodynamiques à $298\text{ K}$ :**
* Constante des gaz parfaits : $R = 8{,}314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$
* Constante de Faraday : $F = 96500\text{ C}\cdot\text{mol}^{-1}$
* On pose $\frac{RT \ln(10)}{F} \approx 0{,}06\text{ V}$ à $298\text{ K}$.
* Pression standard : $P^\circ = 1\text{ bar}$.
* Concentration de référence : $C^\circ = 1\text{ mol}\cdot\text{L}^{-1}$.
* On considérera qu'une espèce dissoute est "corrodée" (ou en quantité significative) si sa concentration totale est supérieure à $C_{\text{lim}} = 10^{-6}\text{ mol}\cdot\text{L}^{-1}$.

**Espèces du zinc prises en compte :**
* Solide : $\text{Zn(s)}$
* Oxyde hydraté / Hydroxyde (précipité) : $\text{Zn(OH)}_2\text{(s)}$ (on supposera que c'est la seule espèce condensée oxygénée stable dans le domaine d'étude)
* Ion en solution : $\text{Zn}^{2+}\text{(aq)}$

**Données de solubilité :**
* Le produit de solubilité de l'hydroxyde de zinc $\text{Zn(OH)}_2\text{(s)}$ est $K_s = 10^{-17}$ (réaction : $\text{Zn(OH)}_2\text{(s)} = \text{Zn}^{2+} + 2\,\text{HO}^{-}$).
* Produit ionique de l'eau : $K_e = 10^{-14}$.

**Couples redox et potentiels standard apparents :**
* Couple $\text{Zn}^{2+}\text{(aq)}/\text{Zn(s)}$ : $E^\circ(\text{Zn}^{2+}/\text{Zn}) = -0{,}76\text{ V}$.

---

### ❓ Questions progressives

1. **Tracé des frontières du diagramme de Pourbaix :**
   1. Établir l'équation de la frontière séparant les domaines de prédominance de l'ion $\text{Zn}^{2+}\text{(aq)}$ et du métal $\text{Zn(s)}$. Exprimer $E$ en fonction du pH et de la concentration en ions $\text{Zn}^{2+}$. Tracer cette frontière pour $\log([\text{Zn}^{2+}]/C^\circ) = -6$.
   2. Déterminer la valeur du pH à partir de laquelle l'hydroxyde de zinc $\text{Zn(OH)}_2\text{(s)}$ commence à prérarer (précipiter) au contact d'une solution contenant des ions $\text{Zn}^{2+}$ à la concentration $C_{\text{lim}} = 10^{-6}\text{ mol}\cdot\text{L}^{-1}$.
   3. Établir l'équation de la frontière séparant les domaines de $\text{Zn(OH)}_2\text{(s)}$ et de $\text{Zn(s)}$. Exprimer $E$ en fonction du pH.

2. **Exploitation du diagramme et corrosion :**
   4. Rappeler les domaines de stabilité thermodynamique de l'eau en milieu aqueux en fonction du pH et du potentiel $E$ (on tracera qualitativement ces droites sur un schéma).
   5. Le zinc peut-il se corroder au contact d'une eau pure aérée ($pH = 7$, $P(\text{O}_2) = 1\text{ bar}$) ? Justifier à l'aide des couples redox en présence.
   6. Qu'appelle-t-on "protection cathodique" ou "galvanisation" de l'acier par le zinc ? Expliquer le principe à l'aide des potentiels standard.

---

### 💡 Pistes & Indications méthodologiques

* **Pour la question 1.1 :** Écrire la demi-équation électronique du couple, puis appliquer la loi de Nernst. Attention à bien inclure $C^\circ$ pour rendre les grandeurs adimensionnées dans les logarithmes.
* **Pour la question 1.2 :** Utiliser le produit de solubilité $K_s$ et relier $[\text{HO}^\circ]$ au pH via le produit ionique de l'eau $K_e$.
* **Pour la question 1.3 :** Combiner la demi-équation de réduction de $\text{Zn}^{2+}$ avec l'équilibre de précipitation de $\text{Zn(OH)}_2$ pour faire intervenir le pH et éliminer $[\text{Zn}^{2+}]$.
* **Pour la question 2 :** Penser à superposer les droites de stabilité de l'eau (lignes de dégagement du dihydrogène et du dioxygène) au diagramme du zinc. Un métal est corrodé par l'oxydant thermodynamiquement plus fort que lui si son domaine de prédominance jouxte celui de l'oxydant.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Tracé des frontières du diagramme de Pourbaix

##### 1.1. Frontière $\text{Zn}^{2+}\text{(aq)} / \text{Zn(s)}$
La demi-équation redox associée est :
$$\text{Zn}^{2+}\text{(aq)} + 2\,\text{e}^- = \text{Zn(s)}$$

Appliquons la formule de Nernst à $298\text{ K}$ :
$$E = E^\circ(\text{Zn}^{2+}/\text{Zn}) + \frac{0{,}06}{2} \log\left(\frac{[\text{Zn}^{2+}]}{C^\circ}\right)$$

En remplaçant les valeurs numériques :
$$E = -0{,}76 + 0{,}03 \log\left(\frac{[\text{Zn}^{2+}]}{C^\circ}\right)$$

Pour la frontière de corrosion fixée à $\log\left(\frac{[\text{Zn}^{2+}]}{C^\circ}\right) = -6$ :
$$E = -0{,}76 + 0{,}03 \times (-6) = -0{,}76 - 0{,}18 = -0{,}94\text{ V}$$
*Cette frontière est une droite horizontale d'équation $E = -0{,}94\text{ V}$ (indépendante du pH).*

---

##### 1.2. pH de début de précipitation de $\text{Zn(OH)}_2\text{(s)}$
L'équilibre de précipitation est :
$$\text{Zn(OH)}_2\text{(s)} = \text{Zn}^{2+}\text{(aq)} + 2\,\text{HO}^-$$
Le produit de solubilité s'écrit :
$$K_s = \frac{[\text{Zn}^{2+}][\text{HO}^-]^2}{(C^\circ)^3} = 10^{-17}$$

On cherche le pH à partir duquel le précipité apparaît pour $[\text{Zn}^{2+}] = C_{\text{lim}} = 10^{-6}\text{ mol}\cdot\text{L}^{-1}$ :
$$\frac{[\text{HO}^-]}{C^\circ} = \sqrt{\frac{K_s}{[\text{Zn}^{2+}]/C^\circ}} = \sqrt{\frac{10^{-17}}{10^{-6}}} = \sqrt{10^{-11}} = 10^{-5{,}5}$$

Or, le produit ionique de l'eau donne $\frac{[\text{HO}^-]}{C^\circ} = 10^{\text{pH} - 14}$. Par identification :
$$\text{pH} - 14 = -5{,}5 \implies \text{pH} = 8{,}5$$
*Le zinc commence à précipiter sous forme d'hydroxyde pour $\text{pH} = 8{,}5$. Au-delà (pH > 8,5), le domaine de $\text{Zn(OH)}_2\text{(s)}$ apparaît.*

---

##### 1.3. Frontière $\text{Zn(OH)}_2\text{(s)} / \text{Zn(s)}$
Cette frontière délimite le domaine du solide stable $\text{Zn(OH)}_2$ et celui du métal $\text{Zn(s)}$. La réaction globale de réduction s'obtient en combinant la réduction de $\text{Zn}^{2+}$ et l'équilibre de solubilité :
$$\text{Zn(OH)}_2\text{(s)} + 2\,\text{e}^- + 2\,\text{H}^+ = \text{Zn(s)} + 2\,\text{H}_2\text{O}$$
*(car $2\,\text{H}^+ + 2\,\text{HO}^- = 2\,\text{H}_2\text{O}$)*

Appliquons la formule de Nernst à cette réaction (l'activité des solides $\text{Zn(s)}$ et $\text{Zn(OH)}_2\text{(s)}$ vaut $1$) :
$$E = E^\circ_{\text{app}} + \frac{0{,}06}{2} \log\left(\frac{1}{(a_{\text{H}^+})^2}\right) = E^\circ_{\text{app}} - 0{,}06\,\log(a_{\text{H}^+})$$
$$E = E^\circ_{\text{app}} + 0{,}06\,\text{pH}$$

Exprimons $E^\circ_{\text{app}}$ en fonction de $E^\circ(\text{Zn}^{2+}/\text{Zn})$ et de $K_s$. 
À l'équilibre sur la frontière, la relation de Nernst initiale reste vraie avec $[\text{Zn}^{2+}]$ imposé par $K_s$ et le pH :
$$E = E^\circ(\text{Zn}^{2+}/\text{Zn}) + 0{,}03 \log\left(\frac{K_s}{C^\circ{}^2 (\frac{[\text{HO}^-]}{C^\circ})^2}\right)$$
En remplaçant $\frac{[\text{HO}^-]}{C^\circ}$ par $10^{\text{pH}-14}$ :
$$E = E^\circ(\text{Zn}^{2+}/\text{Zn}) + 0{,}03 \left[ \log(K_s) - 2(\text{pH} - 14) \right]$$
$$E = -0{,}76 + 0{,}03 \left[ -17 - 2\,\text{pH} + 28 \right] = -0{,}76 + 0{,}03(11 - 2\,\text{pH})$$
$$E = -0{,}76 + 0{,}33 - 0{,}06\,\text{pH} = -0{,}43 - 0{,}06\,\text{pH}$$

*L'équation de la frontière $\text{Zn(OH)}_2/\text{Zn}$ est donc : $E = -0{,}43 - 0{,}06\,\text{pH}$ (valable pour $\text{pH} \ge 8{,}5$).*

---

#### 2. Exploitation du diagramme et corrosion

##### 2.1. Domaines de stabilité de l'eau
Les deux droites frontières de l'eau à $P(\text{H}_2) = P(\text{O}_2) = 1\text{ bar}$ sont :
* Réduction de $\text{H}^+$ ($\text{H}^+/\text{H}_2$) : $E_{\text{H}_2} = -0{,}06\,\text{pH}$
* Oxydation de $\text{H}_2\text{O}$ ($\text{O}_2/\text{H}_2\text{O}$) : $E_{\text{O}_2} = 1{,}23 - 0{,}06\,\text{pH}$

---

##### 2.2. Corrosion du zinc en milieu aqueux aéré ($\text{pH} = 7$)
À $\text{pH} = 7$ :
* Le potentiel de réduction du couple de l'eau $\text{O}_2/\text{H}_2\text{O}$ vaut : $E(\text{O}_2/\text{H}_2\text{O}) = 1{,}23 - 0{,}06 \times 7 = 0{,}81\text{ V}$.
* Le potentiel de la frontière du zinc à $\log([\text{Zn}^{2+}]/C^\circ) = -6$ est $E = -0{,}94\text{ V}$.

Le potentiel oxydant du milieu aéré ($0{,}81\text{ V}$) est **nettement supérieur** au potentiel de stabilité du zinc ($-0{,}94\text{ V}$). Le point $(\text{pH}=7, E=0{,}81\text{ V})$ se situe largement dans le domaine de prédominance de l'ion $\text{Zn}^{2+}$. 
Conclusion: ** Le zinc est thermodynamiquement **instable** face au dioxyde dissous en milieu neutre ($\text{pH} = 7$) : **il se corrode** selon la réaction bilan :
$$2\,\text{Zn(s)} + \text{O}_2\text{(g)} + 4\,\text{H}^+\text{(aq)} \longrightarrow 2\,\text{Zn}^{2+}\text{(aq)} + 2\,\text{H}_2\text{O(l)}$$

---

##### 2.3. Principe de la galvanisation (protection cathodique de l'acier)
L'acier est essentiellement constitué de fer ($\text{Fe}$). Le potentiel standard du couple $\text{Fe}^{2+}/\text{Fe}$ est d'environ $-0{,}44\text{ V}$, tandis que celui du zinc $\text{Zn}^{2+}/\text{Zn}$ est de $-0{,}76\text{ V}$.

Lorsque l'on recouvrit l'acier de zinc (galvanisation) :
1. Si le revêtement est intact, il isole physiquement le fer de l'oxydant.
2. S'il y a une rayure (le fer et le zinc sont tous deux en contact avec l'électrolyte), il se forme une pile électrochimique. Le zinc, ayant un potentiel standard **plus négatif** que le fer, joue le rôle d'**anode sacrificielle** : il s'oxyde préférentiellement à la place du fer ($E(\text{Zn}/\text{Zn}^{2+}) < E(\text{Fe}/\text{Fe}^{2+})$). 

Le fer est ainsi protégé de la corrosion (il est réduit ou maintenu sous forme métallique), tandis que c'est le zinc qui se corrode : c'est une **protection cathodique par anode sacrificielle**.