---
title: 'Exercice 2 : Corrosion et pH'
description: 'Problème d entraînement type concours.'
---

# Problème Guidé : Étude thermodynamique et cinétique de la corrosion du fer en milieu aqueux

*Ce problème aborde l'étude du comportement du fer en milieu aqueux désaéré puis aéré, en s'appuyant sur l'utilisation du diagramme potentiel-pH (ou diagramme de Pourbaix) et sur les cinétiques électrochimiques.*

---

## Données thermodynamiques et physico-chimiques (à $T = 298\text{ K}$)
* Constante des gaz parfaits : $R = 8{,}314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$
* Constante de Faraday : $F = 96485\text{ C}\cdot\text{mol}^{-1}$
* Nombre de Nernst à $298\text{ K}$ : $\frac{RT\ln(10)}{F} \approx 0{,}06\text{ V}$
* Activité standard : $a^{\circ} = 1\text{ mol}\cdot\text{L}^{-1}$
* Pression standard : $P^{\circ} = 1\text{ bar}$
* Potentiels standard apparents (ou potentiels standard) à pH = 0 :
  * $E^{\circ}(\text{Fe}^{2+}/\text{Fe}) = -0{,}44\text{ V}$
  * $E^{\circ}(\text{Fe}^{3+}/\text{Fe}^{2+}) = +0{,}77\text{ V}$
  * $E^{\circ}(\text{H}^+/\text{H}_2) = 0{,}00\text{ V}$
  * $E^{\circ}(\text{O}_2/\text{H}_2\text{O}) = +1{,}23\text{ V}$
* Produit de solubilité de l'hydroxyde de fer II $\text{Fe(OH)}_2(s)$ : $K_{s} = 10^{-15{,}1}$

---

## Partie I : Étude thermodynamique (Diagramme de Pourbaix du fer)

On s'intéresse aux équilibres acido-basiques et redox impliquant le fer et ses espèces dissoutes ou solides ($\text{Fe}$, $\text{Fe}^{2+}$, $\text{Fe}^{3+}$, $\text{Fe(OH)}_2$). On pose la concentration de traçage des espèces dissoutes à $\text{C}_{\text{diss}} = 10^{-2}\text{ mol}\cdot\text{L}^{-1}$.

### 1. Frontière entre le fer solide ($\text{Fe}$) et l'ion ferreux ($\text{Fe}^{2+}$)
Écrire la demi-équation électronique relative au couple $\text{Fe}^{2+}/\text{Fe}$. 
En appliquant la formule de Nernst, exprimer le potentiel de la frontière $E_1$ en fonction du pH et des grandeurs données. Tracer l'allure de la frontière pour pH $< 6$.

> **Corrigé pas à pas :**
> La demi-équation redox s'écrit :
> $$\text{Fe}(s) = \text{Fe}^{2+}(aq) + 2e^-$$
> La formule de Nernst pour ce couple s'établit ainsi :
> $$E_1 = E^{\circ}(\text{Fe}^{2+}/\text{Fe}) + \frac{0{,}06}{2} \log\left(\frac{[\text{Fe}^{2+}]}{a^{\circ}}\right)$$
> En remplaçant par les valeurs numériques et $[\text{Fe}^{2+}] = 10^{-2}\text{ mol}\cdot\text{L}^{-1}$ :
> $$E_1 = -0{,}44 + 0{,}03 \log(10^{-2}) = -0{,}44 - 0{,}06$$
> $$E_1 = -0{,}50\text{ V}$$
> *Remarque :* Cette frontière est horizontale (indépendante du pH) tant que l'ion $\text{Fe}^{2+}$ est prédominant, c'est-à-dire avant l'apparition du précipité $\text{Fe(OH)}_2(s)$.

---

### 2. Précipitation de l'hydroxyde de fer II $\text{Fe(OH)}_2(s)$
Écrire l'équilibre de solubilité de $\text{Fe(OH)}_2(s)$ et exprimer le pH de début de précipitation en fonction du produit de solubilité $K_s$ et de la concentration $[\text{Fe}^{2+}]$. Calculer sa valeur numérique.

> **Corrigé pas à pas :**
> L'équilibre de précipitation est :
> $$\text{Fe(OH)}_2(s) = \text{Fe}^{2+}(aq) + 2\text{HO}^-(aq)$$
> Le produit de solubilité s'exprime par :
> $$K_s = [\text{Fe}^{2+}][\text{HO}^-]^2$$
> On en déduit la concentration en ions hydroxyde :
> $$[\text{HO}^-] = \sqrt{\frac{K_s}{[\text{Fe}^{2+}]}}$$
> En utilisant le produit ionique de l'eau $K_e = [\text{H}_3\text{O}^+][\text{HO}^-] = 10^{-14}$, on obtient le pH :
> $$\text{pH} = 14 + \log\left([\text{HO}^-]\right) = 14 + \frac{1}{2}\log\left(\frac{K_s}{[\text{Fe}^{2+}]}\right)$$
> Application numérique avec $K_s = 10^{-15{,}1}$ et $[\text{Fe}^{2+}] = 10^{-2}\text{ mol}\cdot\text{L}^{-1}$ :
> $$\text{pH} = 14 + \frac{1}{2}\left(-15{,}1 - (-2)\right) = 14 + \frac{1}{2}(-13{,}1) = 14 - 6{,}55 = 7{,}45$$
> Le $\text{Fe(OH)}_2(s)$ précipite donc pour $\text{pH} > 7{,}45$.

---

## Partie II : Corrosion du fer en milieu aqueux

### 3. Étude en milieu désaéré (absence de dioxygène)
On plonge du fer pur dans de l'eau pure désaérée de $\text{pH} = 3{,}0$.

#### a) Quelles sont les espèces thermodynamiquement stables dans ces conditions ?
> **Corrigé pas à pas :**
> À pH = 3,0 et $E \approx -0{,}50\text{ V}$ (potentiel du fer), le point représentatif du système se situe dans le domaine de prédominance de l'ion $\text{Fe}^{2+}$ et au-dessous de la frontière du couple $\text{H}^+/\text{H}_2$. 
> Les espèces stables sont donc l'ion $\text{Fe}^{2+}$, le gaz dihydrogène $\text{H}_2(g)$ et le fer $\text{Fe}(s)$ qui constitue le réactif.

#### b) Écrire la réaction bilan de corrosion du fer par les ions $\text{H}^+(aq)$. Calculer la constante d'équilibre $K^{\circ}$ de cette réaction à $298\text{ K}$. Conclure sur le caractère total de la réaction.
> **Corrigé pas à pas :**
> Les demi-réactions sont :
> * Oxydation : $\text{Fe}(s) = \text{Fe}^{2+}(aq) + 2e^-$
> * Réduction : $2\text{H}^+(aq) + 2e^- = \text{H}_2(g)$
> 
> La réaction bilan est :
> $$\text{Fe}(s) + 2\text{H}^+(aq) \rightleftharpoons \text{Fe}^{2+}(aq) + \text{H}_2(g)$$
> 
> À l'équilibre, $E(\text{Fe}^{2+}/\text{Fe}) = E(\text{H}^+/\text{H}_2)$, soit :
> $$E^{\circ}(\text{Fe}^{2+}/\text{Fe}) + \frac{0{,}06}{2}\log([\text{Fe}^{2+}]) = E^{\circ}(\text{H}^+/\text{H}_2) + \frac{0{,}06}{2}\log\left(\frac{[\text{H}^+]^2}{P(\text{H}_2)/P^{\circ}}\right)$$
> En regroupant les termes, on fait apparaître la constante d'équilibre :
> $$\log(K^{\circ}) = \frac{2 \left(E^{\circ}(\text{H}^+/\text{H}_2) - E^{\circ}(\text{Fe}^{2+}/\text{Fe})\right)}{0{,}06}$$
> Application numérique :
> $$\log(K^{\circ}) = \frac{2(0{,}00 - (-0{,}44))}{0{,}06} = \frac{0{,}88}{0{,}06} \approx 14{,}67$$
> $$K^{\circ} = 10^{14{,}67} \approx 4{,}7\cdot 10^{14}$$
> $K^{\circ} \gg 1$, la réaction de corrosion par les acides est **totale**.

---

### 4. Étude en milieu aéré (présence de dioxygène dissous)
En présence de dioxygène sous une pression partielle $P(\text{O}_2) = 0{,}2\text{ bar}$ et à $\text{pH} = 7{,}0$, le fer subit une corrosion atmosphérique (rouille).

#### a) Écrire la demi-équation de réduction du dioxygène en milieu neutre/basique.
> **Corrigé pas à pas :**
> La réduction du dioxygène en milieu aqueux neutre s'écrit :
> $$\text{O}_2(g) + 4\text{H}^+(aq) + 4e^- = 2\text{H}_2\text{O}(l)$$
> Ou en faisant intervenir le milieu neutre ($[\text{HO}^-] \approx 10^{-7}\text{ mol}\cdot\text{L}^{-1}$) :
> $$\text{O}_2(g) + 2\text{H}_2\text{O}(l) + 4e^- = 4\text{HO}^-(aq)$$

#### b) Calculer le potentiel de Nernst du couple $\text{O}_2/\text{H}_2\text{O}$ dans ces conditions ($pH = 7{,}0$, $P(\text{O}_2) = 0{,}2\text{ bar}$).
> **Corrigé pas à pas :**
> L'expression de Nernst est :
> $$E(\text{O}_2/\text{H}_2\text{O}) = E^{\circ}(\text{O}_2/\text{H}_2\text{O}) + \frac{0{,}06}{4} \log\left(\frac{P(\text{O}_2)}{P^{\circ}} \cdot [\text{H}^+]^4\right)$$
> En séparant le terme de pH :
> $$E(\text{O}_2/\text{H}_2\text{O}) = E^{\circ}(\text{O}_2/\text{H}_2\text{O}) + \frac{0{,}06}{4}\log\left(\frac{P(\text{O}_2)}{P^{\circ}}\right) - 0{,}06 \cdot \text{pH}$$
> Application numérique :
> $$E(\text{O}_2/\text{H}_2\text{O}) = 1{,}23 + \frac{0{,}06}{4}\log(0{,}2) - 0{,}06 \times 7$$
> Or $\log(0{,}2) = \log(2 \cdot 10^{-1}) \approx 0{,}30 - 1 = -0{,}70$.
> $$E(\text{O}_2/\text{H}_2\text{O}) = 1{,}23 + 0{,}015 \times (-0{,}70) - 0{,}42 = 1{,}23 - 0{,}0105 - 0{,}42 = 0{,}80\text{ V}$$

---

## Partie III : Analyse critique

### 5. Protection et limites du matériau
En milieu très basique ($\text{pH} > 12$), on observe que le fer ne se corrode pratiquement plus, alors qu'en milieu acide ($\text{pH} < 4$), la corrosion est rapide. 

À l'aide du diagramme de Pourbaix et des notions de passivation, expliquer ce phénomène. Quels sont les risques liés à l'utilisation du béton armé (milieu basique de pH $\approx 12{,}5$) en milieu urbain pollué (présence de $\text{CO}_2$ et de pluies acides) ?

> **Corrigé pas à pas (Analyse critique) :**
> * **En milieu très basique ($\text{pH} > 12$) :** Le diagramme de Pourbaix montre qu'à haut pH, le domaine de l'oxyde ou de l'hydroxyde solide ($\text{Fe(OH)}_2$ ou $\text{Fe}_3\text{O}_4$) est stable au contact du métal. Il se forme une couche mince, adhérente et isolante à la surface du métal : c'est le phénomène de **passivation**. Cette couche bloque les transferts électroniques et protège le fer de la corrosion ultérieure.
> * **En milieu acide ($\text{pH} < 4$) :** Les produits de corrosion sont des espèces dissoutes ($\text{Fe}^{2+}$). Aucune couche protectrice ne se forme, le métal est mis à nu en continu, d'où une corrosion active et rapide.
> * **Cas du béton armé :** Le béton offre initialement un milieu alcalin ($\text{pH} \approx 12{,}5$) qui passive naturellement les armatures en acier. Cependant, la diffusion du dioxyde de carbone $\text{CO}_2$ (phénomène de **carbonatation**) ou des ions chlorure $\text{Cl}^-$ provoque une **diminution locale du pH** (neutralisation de la basicité par le $\text{CO}_2$ formant des carbonates). Lorsque le pH chute sous la valeur critique d'environ 9, la couche passive se dissout, ce qui déclenche une corrosion sévère des armatures (« cancer du béton »), entraînant des gonflements et des fissurations de la structure.