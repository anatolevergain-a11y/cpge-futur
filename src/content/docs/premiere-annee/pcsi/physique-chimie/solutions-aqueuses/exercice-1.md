---
title: 'Exercice 1 : Diagrammes E-pH et prédominance'
description: 'Problème d entraînement type concours pour PCSI.'
---

### 🌐 Énoncé du problème / Étude de cas

Les diagrammes potentiel-pH (ou diagrammes de Pourbaix) sont des outils thermodynamiques indispensables en chimie des solutions. Ils permettent de cartographier les domaines de prédominance et de stabilité des espèces d'un élément en fonction du pH et du potentiel redox $E$. 

Le présent problème s'intéresse à l'étude thermodynamique du fer en solution aqueuse, un sujet crucial tant pour la compréhension des cycles biogeochimiques que pour les applications industrielles liées à la corrosion des aciers. L'objectif est de tracer, d'analyser et de critiquer un diagramme $E$-pH simplifié du fer à $T = 298\text{ K}$, en tenant compte des limites inhérentes au modèle thermodynamique choisi.

*Données thermodynamiques et physico-chimiques à $298\text{ K}$ :*
- Constante universelle des gaz parfaits : $R = 8{,}314\text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$
- Constante de Faraday : $F = 96\500\text{ C}\cdot\text{mol}^{-1}$
- Le terme $\frac{R T \ln(10)}{F}$ est pris égal à $0{,}06\text{ V}$ à $298\text{ K}$.
- Pression standard : $P^\circ = 1\text{ bar}$.
- Concentration de trace de référence pour les espèces dissoutes : $C_{\text{ref}} = 10^{-6}\text{ mol}\cdot\text{L}^{-1}$ (seuil conventionnel de corrosion).
- Produits de solubilité ($pK_s$) et constantes de Nernst :
  - Couple $\text{Fe}^{3+}_{(\text{aq})} / \text{Fe}^{2+}_{(\text{aq})}$ : $E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+}) = 0{,}77\text{ V}$ vs ENH.
  - Couple $\text{Fe}^{2+}_{(\text{aq})} / \text{Fe}_{(\text{s})}$ : $E^\circ(\text{Fe}^{2+}/\text{Fe}) = -0{,}44\text{ V}$ vs ENH.
  - Hydroxyde de fer(II) $\text{Fe(OH)}_{2\text{ (s})}$ : $pK_{s1} = 15{,}0$.
  - Hydroxyde de fer(III) $\text{Fe(OH)}_{3\text{ (s})}$ (ou $\text{FeO(OH)}$ hydraté) : $pK_{s2} = 38{,}0$.

---

### ❓ Questions progressives (incluant des questions d'analyse critique)

1. **Équilibres de solubilité des hydroxydes métalliques**
   1.1. Écrire l'équilibre de précipitation de l'hydroxyde de fer(II) $\text{Fe(OH)}_{2\text{ (s})}$ à partir des ions $\text{Fe}^{2+}_{(\text{aq})}$ et $\text{OH}^-_{(\text{aq})}$. Exprimer le produit de solubilité $K_{s1}$ associé.
   1.2. Déterminer la valeur du pH, notée $\text{pH}_1$, à partir de laquelle l'hydroxyde de fer(II) commence à precipiter pour une concentration en ions ferreux dissous fixée à $C_{\text{ref}} = 10^{-6}\text{ mol}\cdot\text{L}^{-1}$.

2. **Établissement des frontières du diagramme $E$-pH**
   2.1. Établir l'équation de la frontière séparant les domaines de prédominance de l'ion $\text{Fe}^{3+}_{(\text{aq})}$ et du domaine de stabilité de $\text{Fe(OH)}_{3\text{ (s})}$, en supposant la concentration en ions $\text{Fe}^{3+}$ dissous égale à $C_{\text{ref}}$.
   2.2. Pour le couple redox $\text{Fe}^{2+}_{(\text{aq})} / \text{Fe}_{(\text{s})}$, écrire la demi-équation électronique associée. Exprimer le potentiel de Nernst $E$ en fonction du pH et de la concentration en ions $\text{Fe}^{2+}$.
   2.3. En déduire la relation liant $E$ et le pH sur la frontière entre le fer solide $\text{Fe}_{(\text{s})}$ et l'ion $\text{Fe}^{2+}_{(\text{aq})}$, en prenant pour critère de corrosion $[\text{Fe}^{2+}] = C_{\text{ref}}$.

3. **Analyse critique du modèle et cinétique chimique**
    3.1. Le diagramme $E$-pH est un outil purement thermodynamique. Dans le domaine de stabilité de l'eau, calculer les potentiels de réduction des couples de l'eau à $\text{pH} = 7$ et $P(\text{O}_2) = P(\text{H}_2) = 1\text{ bar}$.
    3.2. Discuter de la thermodynamique de la corrosion de l'acier (assimilé à du fer pur $\text{Fe}_{(\text{s})}$) par l'eau aérée à $\text{pH} = 7$.
    3.3. **Analyse critique d'ingénieur :** Expliquer pourquoi, malgré un diagramme thermodynamique prédisant une corrosion totale du fer dans l'eau aérée, certains ouvrages en acier non protégé résistent de manière satisfaisante pendant des durées limitées. Quel facteur fondamental, absent des diagrammes de Pourbaix, doit-on impérativement intégrer pour prédire la durée de vie réelle d'une structure ?

---

### 💡 Pistes & Indications

- **Q1.2 :** Pensez à relier le produit ionique de l'eau $K_e = 10^{-14}$ à la concentration en ions $\text{OH}^-$ pour exprimer le pH.
- **Q2.1 :** Écrivez la réaction de dissolution de $\text{Fe(OH)}_{3\text{ (s})}$ couplée à la réduction de $\text{Fe}^{3+}$ en $\text{Fe}^{2+}$, ou utilisez directement la relation traduisant l'équilibre hétérogène en fonction de $K_{s2}$ et du potentiel standard du couple $\text{Fe}^{3+}/\text{Fe}^{2+}$. Attention aux degrés d'oxydation.
- **Q3.3 :** Pensez aux phénomènes de surface, à la compacité des couches d'oxydes formées (passivation) et aux considérations cinétiques (énergies d'activation, surtensions).

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Équilibres de solubilité
1.1. L'équilibre de précipitation est :
$$\text{Fe(OH)}_{2\text{ (s})} \rightleftharpoons \text{Fe}^{2+}_{(\text{aq})} + 2\,\text{OH}^-_{(\text{aq})}$$
Le produit de solubilité s'écrit :
$$K_{s1} = [\text{Fe}^{2+}] [\text{OH}^-]^2 = 10^{-15{,}0}$$

1.2. À la limite de précipitation, pour $[\text{Fe}^{2+}] = C_{\text{ref}} = 10^{-6}\text{ mol}\cdot\text{L}^{-1}$ :
$$[\text{OH}^-] = \sqrt{\frac{K_{s1}}{C_{\text{ref}}}} = \sqrt{\frac{10^{-15{,}0}}{10^{-6}}} = \sqrt{10^{-9}} = 10^{-4{,}5}\text{ mol}\cdot\text{L}^{-1}$$
À $298\text{ K}$, sachant que $\text{pK}_e = 14$, on a pOH $= 4{,}5$, d'où :
$$\text{pH}_1 = 14 - 4{,}5 = 9{,}5$$
Analyse: * En milieu acide ou neutre ($\text{pH} < 9{,}5$), les ions ferreux restent en solution. Au-delà de $\text{pH} = 9{,}5$, l'hydroxyde de fer(II) précipite.

---

#### 2. Établissement des frontières du diagramme $E$-pH
2.1. L'hydroxyde de fer(III) $\text{Fe(OH)}_{3\text{ (s})}$ se dissout selon :
$$\text{Fe(OH)}_{3\text{ (s})} + 3\,\text{H}^+_{(\text{aq})} \rightleftharpoons \text{Fe}^{3+}_{(\text{aq})} + 3\,\text{H}_2\text{O}_{(\text{l})}$$
La constante associée est $K_s^{-1}$ avec $K_{s2} = [\text{Fe}^{3+}][\text{OH}^-]^3 = 10^{-38{,}0}$.
La relation entre $[\text{Fe}^{3+}]$ et le pH donne :
$$[\text{Fe}^{3+}] = \frac{K_{s2}}{[\text{OH}^-]^3} = K_{s2} \left(\frac{[\text{H}^+]}{K_e}\right)^3 = \frac{K_{s2}}{K_e^3} [\text{H}^+]^3$$
Le couple redox impliqué est $\text{Fe}^{3+}_{(\text{aq})} / \text{Fe}^{2+}_{(\text{aq})}$ :
$$\text{Fe}^{3+}_{(\text{aq})} + \text{e}^- \rightleftharpoons \text{Fe}^{2+}_{(\text{aq})}$$
La formule de Nernst s'écrit :
$$E = E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+}) + 0{,}06 \log\left(\frac{[\text{Fe}^{3+}]}{[\text{Fe}^{2+}]}\right)$$
En fixant $[\text{Fe}^{3+}] = [\text{Fe}^{2+}] = C_{\text{ref}}$, les concentrations s'annulent dans le terme logarithmique (frontière de prédominance homogène à iso-concentration) :
$$E = E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+}) = 0{,}77\text{ V}$$
*Toutefois*, si l'on se place à la frontière entre le solide $\text{Fe(OH)}_{3\text{ (s})}$ et l'ion $\text{Fe}^{2+}_{(\text{aq})}$ (en supposant $[\text{Fe}^{2+}] = C_{\text{ref}}$), on substitue $[\text{Fe}^{3+}]$ par son expression en fonction du pH :
$$E = E^\circ(\text{Fe}^{3+}/\text{Fe}^{2|}) + 0{,}06 \log\left(\frac{K_{s2} [\text{H}^+]^3}{K_e^3 [\text{Fe}^{2+}]}\right)$$
$$E = 0{,}77 + 0{,}06 \left[ \log(K_{s2}) - 3\log(K_e) - \log([\text{Fe}^{2+}]) - 3\,\text{pH} \right]$$
A.NUM. : $\log(K_{s2}) = -38$, $-3\log(K_e) = -3(-14) = 42$, $-\log(10^{-6}) = 6$.
Somme des termes constants : $-38 + 42 + 6 = 10$.
D'où l'équation de la frontière :
$$E = 0{,}77 + 0{,}06(10 - 3\,\text{pH}) = 1{,}37 - 0{,}18\,\text{pH}$$

2.2. La demi-équation pour le couple $\text{Fe}^{2+}_{(\text{aq})} / \text{Fe}_{(\text{s})}$ est :
$$\text{Fe}^{2+}_{(\text{aq})} + 2\text{e}^- \rightleftharpoons \text{Fe}_{(\text{s})}$$
Le potentiel de Nernst est :
$$E = E^\circ(\text{Fe}^{2+}/\text{Fe}) + \frac{0{,}06}{2} \log([\text{Fe}^{2+}]) = -0{,}44 + 0{,}03 \log([\text{Fe}^{2+}])$$

2.3. En fixant le seuil de corrosion $[\text{Fe}^{2+}] = C_{\text{ref}} = 10^{-6}\text{ mol}\cdot\text{L}^{-1}$ :
$$E = -0{,}44 + 0{,}03 \log(10^{-6}) = -0{,}44 + 0{,}03(-6) = -0{,}44 - 0{,}18 = -0{,}62\text{ V}$$
Cette frontière est horizontale (indépendante du pH tant que le domaine du fer solide et de l'ion $\text{Fe}^{2+}$ n'est pas limité par un hydroxyde).

---

#### 3. Analyse critique du modèle et cinétique chimique
3.1. Les couples de l'eau sont :
- Oxydation (O2/H2O) : $\text{O}_2\text{ (g)} + 4\,\text{H}^+_{(\text{aq})} + 4\text{e}^- \rightleftharpoons 2\,\text{H}_2\text{O}_{(\text{l})}$, avec $E_{\text{O}_2/\text{H}_2\text{O}} = 1{,}23 - 0{,}06\,\text{pH}$ (à $P(\text{O}_2) = 1\text{ bar}$). À $\text{pH} = 7$, $E = 1{,}23 - 0{,}42 = 0{,}81\text{ V}$.
- Réduction (H+/H2) : $2\,\text{H}^+_{(\text{aq})} + 2\text{e}^- \rightleftharpoons \text{H}_2\text{_{(\text{g})}}$, avec $E_{\text{H}^+/\text{H}_2} = -0{,}06\,\text{pH}$ (à $P(\text{H}_2) = 1\text{ bar}$). À $\text{pH} = 7$, $E = -0{,}42\text{ V}$.

3.2. À $\text{pH} = 7$, le potentiel du fer $\text{Fe}_{(\text{s})}$ est d'environ $-0{,}62\text{ V}$, ce qui est nettement inférieur au potentiel de réduction de l'eau et de l'oxygène dissous. Sur le plan thermodynamique strict, le fer est donc totalement instable face à l'eau aérée : il tend à s'oxyder en ions $\text{Fe}^{2+}$ puis en oxydes/hydroxydes ferriques, tandis que l'oxygène est réduit en ions hydroxyde.

3.3. **Analyse critique et limites du modèle :**
- **Limite thermodynamique vs cinétique :** Un diagramme de Pourbaix n'indique *jamais* une vitesse de réaction. Il renseigne uniquement sur le sens d'évolution spontané.
- **Phénomène de passivation :** Lors de la corrosion du fer, il se forme à la surface du métal une couche d'oxydes ou d'hydroxydes (comme la rouille, $\text{Fe}_2\text{O}_3\cdot n\text{H}_2\text{O}$ ou $\text{Fe(OH)}_3$). Si cette couche est compacte, adhérente et insoluble, elle isole physiquement le métal du milieu aqueux environnant. La cinétique de corrosion chute alors drastiquement (phénomène de *passivation*).
- **Conclusion d'ingénieur :** Le modèle thermodynamique surestime la corrosion effective à court terme car il néglige les barrières de transport de matière (diffusion à travers la couche poreuse de rouille) et les surtensions cinétiques des réactions aux électrodes. Pour dimensionner un système, l'ingénieur doit coupler l'approche de Pourbaix à des courbes cinétiques intensité-potentiel (courbes de Tafel).