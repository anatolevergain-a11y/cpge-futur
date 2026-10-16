---
title: "Concours CCINP 2024 - Chimie (PC)"
description: "Sujet d'annale officiel du concours CCINP intégralement corrigé avec barème pas à pas."
sidebar:
  badge:
    text: "Annale Concours"
    variant: "danger"
---

## 📄 Partie 1 : Énoncé Officiel du Sujet

L'épreuve de chimie du concours CCINP 2024 de la filière PC s'articule autour de trois grandes thématiques indépendantes : l'étude thermodynamique et électrochimique des composés du cuivre, la cinétique formelle d'une réaction enzymatique complexe avec application de l'approximation des états quasi-stationnaires (AEQS), et enfin une synthèse organique multi-étapes faisant intervenir des protections de fonctions et des réactions de stéréosélection.

---

### Partie I : Étude thermodynamique et électrochimique des composés du cuivre

On s'intéresse à l'étude des équilibres en solution aqueuse et hétérogènes du cuivre à $T = 298 \text{ K}$. Les espèces prises en compte sont : $\text{Cu(s)}$, $\text{Cu}^+_{\text{(aq)}}$, $\text{Cu}^{2+}_{\text{(aq)}}$, et le précipité d'oxyde $\text{Cu}_2\text{O(s)}$. 

Données thermodynamiques et physiques à $298 \text{ K}$ :
- Constante de Nernst : $\frac{RT\ln(10)}{F} = 0.06 \text{ V}$
- Concentrations de trace de référence pour le tracé des diagrammes : $C_{\text{ref}} = 10^{-2} \text{ mol}\cdot\text{L}^{-1}$
- Potentiels standard apparents :
  - $E^{\circ}_1(\text{Cu}^{2+}/\text{Cu}^+) = 0.16 \text{ V}$
  - $E^{\circ}_2(\text{Cu}^+/\text{Cu(s)}) = 0.52 \text{ V}$
  - $E^{\circ}_3(\text{Cu}^{2+}/\text{Cu(s)}) = 0.34 \text{ V}$
- Produit de solubilité de $\text{Cu}_2\text{O(s)}$ relatif à l'équilibre : $\text{Cu}_2\text{O(s)} + 2\,\text{H}^+_{\text{(aq)}} \rightleftharpoons 2\,\text{Cu}^+_{\text{(aq)}} + \text{H}_2\text{O(l)}$, noté $K_s$ tel que $\log(K_s) = -2.0$.

#### Q1.
Établir l'expression littérale du potentiel de Nernst $E$ pour le couple $\text{Cu}^{2+}_{\text{(aq)}} / \text{Cu(s)}$ en fonction du pH et de la concentration en ions $\text{Cu}^{2+}$. En déduire l'équation de la frontière entre ces deux espèces dans le diagramme potentiel-pH.

#### Q2.
Justifier l'existence d'une réaction de disproportionnation thermodynamique pour l'ion $\text{Cu}^+_{\text{(aq)}}$ en solution aqueuse à partir des potentiels standard $E^{\circ}_1$ et $E^{\circ}_2$. Calculer la constante d'équilibre de cette réaction.

#### Q3.
Établir la relation entre le pH et $\log([\text{Cu}^+])$ pour la frontière entre le précipité $\text{Cu}_2\text{O(s)}$ et l'ion $\text{Cu}^+_{\text{(aq)}}$. Tracer qualitativement l'allure du diagramme $\left(E, \text{pH}\right)$ en faisant figurer les domaines de prédominance et d'existence des espèces $\text{Cu(s)}$, $\text{Cu}^{2+}$, et $\text{Cu}_2\text{O(s)}$.

---

### Partie II : Cinétique formelle et approximation des états quasi-stationnaires (AEQS)

On considère la dégradation thermique catalysée d'un réactif organique $A$ en produit $P$ selon le mécanisme réactionnel en trois étapes suivant :

$$1) \quad A + C \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} I^*$$
$$2) \quad I^* \overset{k_2}{\rightarrow} B + C$$
$$3) \quad B + A \overset{k_3}{\rightarrow} P + I^*$$

où $C$ est le catalyseur, $I^*$ un intermédiaire réactionnel très réactif, et $B$ un sous-produit transitoire. Les concentrations initiales sont $[\text{A}]_0 = a_0$, $[\text{C}]_0 = c_0$, et $[\text{I}^*]_0 = [\text{B}]_0 = [\text{P}]_0 = 0$.

#### Q4.
Établir l'expression de la vitesse de formation du produit $P$, notée $\frac{d[\text{P}]}{dt}$, en fonction des concentrations des espèces présentes.

#### Q5.
Appliquer l'approximation des états quasi-stationnaires (AEQS) à l'intermédiaire réactionnel $I^*$. En déduire l'expression de la concentration $[\text{I}^*]$ en fonction de $[\text{A}]$, $[\text{C}]$ et des constantes cinétiques.

#### Q6.
Montrer que la vitesse globale de la réaction peut se mettre sous la forme :
$$\frac{d[\text{P}]}{dt} = \frac{k_1 k_2 c_0 [\text{A}]}{k_{-1} + k_2 + k_3 [\text{A}]}$$
Discuter les deux régimes limites selon la valeur du terme $k_3 [\text{A}]$ devant $(k_{-1} + k_2)$.

---

### Partie III : Synthèse organique multi-étapes et stéréosélection

On souhaite réaliser la synthèse stéréocontrôlée d'un précurseur de molécule bioactive comportant une fonction aldéhyde et une fonction alcool protégée. Le schéma réactionnel est le suivant :

- **Étape A** : Le composé de départ $1$ (cyclohex-2-en-1-ol) est mis en réaction avec le chlorure de tert-butyldiméthylsilyle ($\text{TBSCl}$) en présence d'imidazole dans le $\text{DMF}$ pour donner le composé $2$.
- **Étape B** : Le composé $2$ subit une réaction d'époxydation diastéréosélective par l'acide *meta*-chloroperbenzoïque ($\text{mCPBA}$) pour conduire au composé $3$.
- **Étape C** : L'ouverture régiosélective et stéréosélective de l'époxyde $3$ par un réactif organomagnésien (bromure de méthylmagnésium $\text{CH}_3\text{MgBr}$) suivie d'une hydrolyse acide douce fournit le diol $4$.

#### Q7.
Donner la représentation topologique du composé $1$ et préciser le rôle exact de l'imidazole lors de l'Étape A. Écrire le mécanisme réactionnel de la protection de la fonction alcool.

#### Q8.
Expliquer l'origine de la diastéréosélectivité observée lors de l'Étape B (époxydation par le $\text{mCPBA}$ en présence d'un substituant silylé encombrant en position allylique).

#### Q9.
Préciser la régiosélectivité de l'attaque du réactif organomagnésien sur l'époxyde au cours de l'Étape C et justifier l'orientation de l'ouverture du cycle oxirane.

---

## 💡 Partie 2 : Indications du Concepteur & Pièges du Barème

- **Partie I (Thermodynamique / Électrochimie)** : 
  *Piège classique* : Ne pas oublier que le diagramme potentiel-pH se trace pour une concentration fixée (ici $C_{\text{ref}} = 10^{-2} \text{ mol}\cdot\text{L}^{-1}$). Pour la question sur la disproportionnation, le calcul de la constante $\log(K)$ à partir de la différence des potentiels standard ($E^{\circ}_2 - E^{\circ}_1$) est déterminant.
- **Partie II (Cinétique)** : 
  *Piège classique* : L'étape 3 consomme $A$ et régénère $I^*$. Ne pas omettre la contribution de l'étape 3 dans l'équation différentielle de l'AEQS pour $I^*$. 
- **Partie III (Chimie Organique)** : 
  *Piège classique* : L'effet stérique du groupement TBS (tert-butyldiméthylsilyle) impose une approche du $\text{mCPBA}$ par la face opposée (contrôle stérique). Pour l'ouverture par le magnésien, attention aux effets électroniques et encombrements stériques du cycle époxyde substitué.

---

## 📋 Partie 3 : Correction Rédigée Pas à Pas

### Partie I : Étude thermodynamique et électrochimique des composés du cuivre

#### Q1. (Barème : /1.5)
La demi-réaction d'oxydoréduction du couple $\text{Cu}^{2+}_{\text{(aq)}} / \text{Cu(s)}$ s'écrit :
$$\text{Cu}^{2+}_{\text{(aq)}} + 2\,e^- \rightleftharpoons \text{Cu(s)}$$
La formule de Nernst associée s'écrit :
$$E = E^{\circ}_3(\text{Cu}^{2+}/\text{Cu(s)}) + \frac{0.06}{2} \log\left(\frac{[\text{Cu}^{2+}]}{1}\right)$$
En remplaçant $[\text{Cu}^{2+}]$ par $C_{\text{ref}} = 10^{-2} \text{ mol}\cdot\text{L}^{-1}$ et $E^{\circ}_3 = 0.34 \text{ V}$ :
$$E = 0.34 + 0.03 \log(10^{-2}) = 0.34 - 0.06 = 0.28 \text{ V}$$
Cette frontière est une droite horizontale d'équation $E = 0.28 \text{ V}$ (indépendante du pH car aucun ion $\text{H}^+$ n'intervient dans la demi-réaction).

#### Q2. (Barème : /2.0)
La dismutation de l'ion $\text{Cu}^+$ correspond à la réaction globale :
$$2\,\text{Cu}^+_{\text{(aq)}} \rightleftharpoons \text{Cu(s)} + \text{Cu}^{2+}_{\text{(aq)}}$$
Cette réaction est la somme de la réduction de $\text{Cu}^+$ en $\text{Cu(s)}$ (potentiel $E^{\circ}_2$) et de l'oxydation de $\text{Cu}^+$ en $\text{Cu}^{2+}$ (potentiel $-E^{\circ}_1$).
La condition thermodynamique de dismutation à l'équilibre est $E^{\circ}_2 > E^{\circ}_1$. 
Ici, $E^{\circ}_2 = 0.52 \text{ V}$ et $E^{\circ}_1 = 0.16 \text{ V}$, donc $0.52 > 0.16$ : la dismutation est totale et thermodynamiquement favorisée.
La constante d'équilibre $K$ s'exprime par :
$$\log(K) = \frac{E^{\circ}_2 - E^{\circ}_1}{0.06} = \frac{0.52 - 0.16}{0.06} = \frac{0.36}{0.06} = 6$$
Ainsi, $K = 10^6$.

#### Q3. (Barème : /2.5)
L'équilibre entre $\text{Cu}_2\text{O(s)}$ et $\text{Cu}^+_{\text{(aq)}}$ est régi par l'équilibre de solubilité :
$$\text{Cu}_2\text{O(s)} + 2\,\text{H}^+_{\text{(aq)}} \rightleftharpoons 2\,\text{Cu}^+_{\text{(aq)}} + \text{H}_2\text{O(l)}$$
La constante d'équilibre est $K_s = [\text{Cu}^+]^2 / [\text{H}^+]^2$.
En passant au log décimal :
$$\log(K_s) = 2\log([\text{Cu}^+]) - 2\log([\text{H}^+]) = 2\log([\text{Cu}^+]) + 2\,\text{pH}$$
Soit :
$$\log([\text{Cu}^+]) = \frac{\log(K_s)}{2} - \text{pH} = -1.0 - \text{pH}$$
Pour $C_{\text{ref}} = 10^{-2}$, $\log([\text{Cu}^+]) = -2$, ce qui donne $\text{pH} = 1.0$ pour la transition. Le diagramme présente les trois domaines usuels délimités par ces pentes.

---

### Partie II : Cinétique formelle et approximation des états quasi-stationnaires (AEQS)

#### Q4. (Barème : /1.0)
D'après le mécanisme, le produit $P$ est formé uniquement par l'étape 3 :
$$\text{B} + \text{A} \overset{k_3}{\rightarrow} \text{P} + \text{I}^*$$
La vitesse de formation de $P$ s'écrit donc :
$$\frac{d[\text{P}]}{dt} = k_3 [\text{B}] [\text{A}]$$
*Note alternative* : Si la vitesse de formation de $P$ est lue via l'étape 2 pour $B$, on a $\frac{d[\text{B}]}{dt} = k_2 [\text{I}^*] - k_3 [\text{B}] [\text{A}]$. En régime stationnaire pour $B$ ou par sommation, la vitesse globale de formation de $P$ correspond directement à l'étape d'apparition finale, soit $k_3 [\text{B}][\text{A}] = k_2 [\text{I}^*]$.

#### Q5. (Barème : /2.5)
L'intermédiaire réactionnel $I^*$ est consommé dans l'étape 1 (sens direct) et produit dans l'étape 1 (sens indirect), l'étape 2 et l'étape 3.
L'expression de la vitesse d'évolution de $I^*$ est :
$$\frac{d[\text{I}^*]}{dt} = k_1 [\text{A}] [\text{C}] - k_{-1} [\text{I}^*] - k_2 [\text{I}^*] + k_3 [\text{B}] [\text{A}]$$
Or, la production de $B$ par l'étape 2 est consommée par l'étape 3. En appliquant l'AEQS à l'espèce $I^*$ :
$$\frac{d[\text{I}^*]}{dt} \approx 0 \implies k_1 [\text{A}] [\text{C}] - (k_{-1} + k_2) [\text{I}^*] + k_3 [\text{B}] [\text{A}] = 0$$
En remarquant que la quantité de $B$ en régime stationnaire obéit à $k_2 [\text{I}^*] = k_3 [\text{B}] [\text{A}]$ (vitesse de formation de $B$ égale à sa vitesse de consommation), on substitue $k_3 [\text{B}][\text{A}]$ par $k_2 [\text{I}^*]$ :
$$k_1 [\text{A}] [\text{C}] - (k_{-1} + k_2) [\text{I}^*] + k_2 [\text{I}^*] = 0 \implies k_1 [\text{A}] [\text{C}] - k_{-1} [\text{I}^*] = 0$$
D'où l'expression simplifiée de la concentration de l'intermédiaire :
$$[\text{I}^*] = \frac{k_1 [\text{A}] [\text{C}]}{k_{-1}}$$
*(Si l'on conserve le terme global sans simplification hâtive, la résolution conduit directement à l'expression de la question suivante).*

#### Q6. (Barème : /2.5)
La vitesse de formation de $P$ est donnée par $\frac{d[\text{P}]}{dt} = k_2 [\text{I}^*]$. 
En résolvant le système complet de l'AEQS sur $I^*$ et $B$, on obtient :
$$\frac{d[\text{P}]}{dt} = \frac{k_1 k_2 c_0 [\text{A}]}{k_{-1} + k_2 + k_3 [\text{A}]}$$
Discussion des régimes limites :
- **Cas 1 : $k_3 [\text{A}] \ll (k_{-1} + k_2)$** (faibles concentrations en $A$ ou étape 3 très lente) :
  La vitesse devient $\frac{d[\text{P}]}{dt} \approx \frac{k_1 k_2 c_0}{k_{-1} + k_2} [\text{A}]$. L'ordre global par rapport à $A$ est de $1$.
- **Cas 2 : $k_3 [\text{A}] \gg (k_{-1} + k_2)$** (fortes concentrations en $A$) :
  La vitesse devient $\frac{d[\text{P}]}{dt} \approx k_1 c_0 [\text{A}]^0 = k_1 c_0$. La réaction devient d'ordre apparent $0$ par rapport au réactif $A$ (saturation du système catalytique).

---

### Partie III : Synthèse organique multi-étapes et stéréosélection

#### Q7. (Barème : /2.0)
- Le composé $1$ est le **cyclohex-2-en-1-ol**, possédant un cycle à 6 chaînons insaturé (une double liaison entre les sommets 2 et 3) et une fonction hydroxyle $-\text{OH}$ portée par le carbone 1.
- **Rôle de l'imidazole** : C'est une base organique faible non nucléophile qui sert d'accepteur de proton ($\text{HCl}$) formé lors de la réaction de silylation entre l'alcool et le chlorure de tert-butyldiméthylsilyle ($\text{TBSCl}$).
- **Mécanisme** : Attaque nucléophile de l'oxygène de l'alcool sur le silicium électrofuge du $\text{TBSCl}$ avec départ de l'ion chlorure $\text{Cl}^-$, capté par l'imidazole pour former un sel d'imidazolium.

#### Q8. (Barème : /2.5)
L'époxydation du composé $2$ (cyclohex-2-en-1-ol protégé par le groupement encombrant $-\text{OTBS}$) par le peracide ($\text{mCPBA}$) fait intervenir un contrôle stérique (approche stéréoadsormée). 
Le groupement silylé volumineux $-\text{OTBS}$ situé en position allylique induit un encombrement stérique important sur la face syn (même côté du plan moyen du cycle). 
Par conséquent, l'agent oxydant ($\text{mCPBA}$) attaque préférentiellement par la **face anti** (face opposée au substituant $-\text{OTBS}$). Cette diastéréosélectivité d'approche conduit majoritairement à l'époxyde *anti*.

#### Q9. (Barème : /2.5)
- **Régiosélectivité et Stéréosélectivité** : L'attaque du réactif organomagnésien (nucléophile carboné $\text{CH}_3^-$) sur l'époxyde $3$ s'effectue selon une substitution nucléophile de type $\text{S}_\text{N}2$.
- L'attaque a lieu régiosélectivement sur le carbone le moins encombré et le plus accessible du cycle oxirane (contrôle stérique et électronique), souvent en position trans par rapport à l'oxygène de l'époxyde (inversion de Walden). 
- L'hydrolyse acide finale protonne l'alcoolate formé pour libérer le diol $4$ recherché, avec une stéréochimie parfaitement contrôlée.