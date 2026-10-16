---
title: 'Exercice 2 : Mécanismes réactionnels et catalyse homogène'
description: 'Problème d entraînement type concours.'
---

# Problème : Étude cinétique et enzymatique de la dégradation du peroxyde d'hydrogène en milieu biologique

## Contexte biologique et problématique

Le peroxyde d'hydrogène ($\text{H}_2\text{O}_2$), ou eau oxygénée, est une espèce réactive de l'oxygène (ERO) produite naturellement lors du métabolisme cellulaire aérobie. Fortement oxydant, il est toxique pour les structures cellulaires (lipides, ADN, protéines). Pour se protéger de ce stress oxydatif, les cellules aérobies possèdent des enzymes très efficaces, les **catalases**, qui catalysent la dismutation du peroxyde d'hydrogène en dioxygène et en eau :

$$2\text{H}_2\text{O}_2(aq) \xrightarrow{\text{catalase}} 2\text{H}_2\text{O}(l) + \text{O}_2(g)$$

L'objectif de ce problème est d'analyser le mécanisme réactionnel de cette catalyse homogène en phase aqueuse, d'établir la loi de vitesse apparente selon les conditions expérimentales, et de discuter les limites physiologiques du modèle proposé.

---

## Données et notations

* Température de l'étude : $T = 298\text{ K}$
* Constantes de vitesse notées $k_i$
* Concentrations notées entre crochets : $[\text{H}_2\text{O}_2]$, $[\text{E}]$ (enzyme libre), $[\text{ES}]$ (complexe enzyme-substrat)
* On négligera l'effet de la force ionique du milieu intracellulaire.

---

## Énoncé et Questions

### Partie I : Étude thermodynamique et cinétique globale (sans catalyseur)
Dans un premier temps, on étudie la décomposition thermique ou spontanée (très lente) du peroxyde d'hydrogène en solution aqueuse.

1. Écrire l'équation bilan de la réaction de dismutation. Préciser les nombres d'oxydation de l'élément oxygène dans les réactifs et les produits, et identifier les couples redox mis en jeu.
2. L'ordre global de la réaction non catalisée est souvent trouvé égal à $1$ par rapport à $\text{H}_2\text{O}_2$ dans certaines conditions de pH. Établir l'équation différentielle vérifiée par $[\text{H}_2\text{O}_2](t)$ et donner l'expression de $[\text{H}_2\text{O}_2](t)$ en fonction du temps $t$, de la concentration initiale $[\text{H}_2\text{O}_2]_0$ et de la constante de vitesse $k$.

### Partie II : Modélisation de la catalyse enzymatique (Mécanisme de Michaelis-Menten)
Pour rendre compte de l'efficacité de la catalase, le biochimiste propose le mécanisme réactionnel à deux étapes impliquant l'enzyme $\text{E}$ et le substrat $\text{S}$ ($\text{H}_2\text{O}_2$) :

$$\text{E} + \text{S} \underset{_{-1}}{\overset{_{1}}{\rightleftharpoons}} \text{ES} \quad (\text{étape 1 et }-1)$$
$$\text{ES} \xrightarrow{k_2} \text{E} + \text{P} \quad (\text{étape 2})$$

Où $\text{P}$ représente les produits ($\text{H}_2\text{O}$ et $\text{O}_2$) et $\text{ES}$ le complexe enzyme-substrat.

3. Définir la vitesse de formation du produit $v = \frac{d[\text{P}]}{dt}$.
4. Écrire la conservation de la quantité d'enzyme totale $\text{E}_0$, sachant que l'enzyme se trouve soit sous forme libre $[\text{E}]$, soit liée dans le complexe $[\text{ES}]$.
5. En appliquant l'approximation de l'état quasi-stationnaire (AEQS) à l'intermédiaire réactionnel $[\text{ES}]$, exprimer $[\text{ES}]$ en fonction de $[\text{E}_0]$, $[\text{S}]$ et des constantes de vitesse $k_1$, $k_{-1}$ et $k_2$.
6. En déduire l'expression de la vitesse de réaction $v$ sous la forme :
   $$v = \frac{V_{\text{max}} [\text{S}]}{K_m + [\text{S}]}$$
   On exprimera $V_{\text{max}}$ et la constante de Michaelis $K_m$ en fonction de $k_1$, $k_{-1}$, $k_2$ et $[\text{E}_0]$.
7. Analyser les deux régimes limites de cette loi de vitesse :
   * Cas où $[\text{S}] \ll K_m$
   * Cas où $[\text{S}] \gg K_m$
   Interpréter ces régimes d'un point de vue physico-chimique et biologique.

### Partie III : Analyse critique du modèle
8. La catalase est l'une des enzymes ayant le $K_m$ et le $k_2$ les plus élevés (efficacité catalytique quasi-diffusionnelle). Citer au moins deux limites du modèle de Michaelis-Menten lorsqu'on cherche à l'appliquer in vivo dans le cytoplasme d'une cellule vivante.

---

## Pistes et indications

* **Q1 :** Utiliser les règles de calcul des nombres d'oxydation (H est à +I, O dans $\text{H}_2\text{O}_2$ est à -I). C'est une réaction de dismutation (une même espèce est à la fois oxydant et réducteur).
* **Q5 :** L'AEQS consiste à poser $\frac{d[\text{ES}]}{dt} \approx 0$. Exprimez la vitesse de formation et de consommation de $[\text{ES}]$.
* **Q7 :** Comparez $[\text{S}]$ devant $K_m$ dans le dénominateur de la loi de vitesse.

---

## Corrigé détaillé

### Partie I : Étude thermodynamique et cinétique globale

1. **Bilan et nombres d'oxydation :**
   L'équation bilan est : $2\text{H}_2\text{O}_2(aq) \rightarrow 2\text{H}_2\text{O}(l) + \text{O}_2(g)$
   * Dans $\text{H}_2\text{O}_2$, l'oxygène a un nombre d'oxydation de $-\text{I}$.
   * Dans $\text{H}_2\text{O}$, l'oxygène est à $-\text{II}$ (réduction).
   * Dans $\text{O}_2$, l'oxygène est à $0$ (oxydation).
   Il s'agit d'une réaction de **dismutation** impliquant les couples $\text{H}_2\text{O}_2/\text{H}_2\text{O}$ et $\text{O}_2/\text{H}_2\text{O}_2$.

2. **Loi de vitesse d'ordre 1 :**
   Si la réaction est d'ordre 1 par rapport à $\text{H}_2\text{O}_2$, la vitesse de disparition s'écrit :
   $$v = -\frac{d[\text{H}_2\text{O}_2]}{dt} = k [\text{H}_2\text{O}_2]$$
   Par intégration, on obtient la loi cinétique classique d'ordre 1 :
   $$[\text{H}_2\text{O}_2](t) = [\text{H}_2\text{O}_2]_0 \exp(-kt)$$

---

### Partie II : Modélisation de la catalyse enzymatique

3. **Vitesse de formation du produit :**
   D'après la deuxième étape ($\text{ES} \xrightarrow{k_2} \text{E} + \text{P}$), la vitesse de formation du produit est :
   $$v = \frac{d[\text{P}]}{dt} = k_2 [\text{ES}]$$

4. **Conservation de l'enzyme :**
   L'enzyme totale se répartit entre enzyme libre et enzyme liée :
   $$[\text{E}]_{\text{tot}} = [\text{E}_0] = [\text{E}] + [\text{ES}]$$

5. **Application de l'AEQS sur $[\text{ES}]$ :**
   Le complexe $[\text{ES}]$ est formé par l'étape 1 et consommé par les étapes $-1$ et $2$ :
   $$\frac{d[\text{ES}]}{dt} = k_1 [\text{E}][\text{S}] - k_{-1}[\text{ES}] - k_2[\text{ES}] = 0$$
   En remplaçant $[\text{E}]$ par $[\text{E}_0] - [\text{ES}]$ :
   $$k_1 ([\text{E}_0] - [\text{ES}])[\text{S}] - (k_{-1} + k_2)[\text{ES}] = 0$$
   $$k_1 [\text{E}_0][\text{S}] = [\text{ES}] \left( k_1[\text{S}] + k_{-1} + k_2 \right)$$
   D'où :
   $$[\text{ES}] = \frac{[\text{E}_0][\text{S}]}{\frac{k_{-1} + k_2}{k_1} + [\text{S}]}$$

6. **Expression de la vitesse (Michaelis-Menten) :**
   En reportant dans l'expression de $v$ :
   $$v = k_2 [\text{ES}] = \frac{k_2 [\text{E}_0] [\text{S}]}{\frac{k_{-1} + k_2}{k_1} + [\text{S}]}$$
   On pose $V_{\text{max}} = k_2 [\text{E}_0]$ et $K_m = \frac{k_{-1} + k_2}{k_1}$ (constante de Michaelis). On obtient :
   $$v = \frac{V_{\text{max}} [\text{S}]}{K_m + [\text{S}]}$$

7. **Analyse des régimes limites :**
   * **Si $[\text{S}] \ll K_m$ (faible concentration en substrat) :**
     Le terme $[\text{S}]$ est négligeable devant $K_m$ au dénominateur. La vitesse devient :
     $$v \approx \frac{V_{\text{max}}}{K_m} [\text{S}]$$
     La cinétique est **d'ordre apparent 1**. La vitesse est proportionnelle à la quantité de substrat.
   * **Si $[\text{S}] \gg K_m$ (forte concentration en substrat) :**
     Le terme $K_m$ est négligeable devant $[\text{S}]$. La vitesse devient :
     $$v \approx V_{\text{max}} = k_2 [\text{E}_0]$$
     La cinétique est **d'ordre apparent 0**. L'enzyme est saturée : tous les sites actifs sont occupés sous forme $[\text{ES}]$, l'étape limitante devient la dissociation du complexe ($\text{ES} \rightarrow \text{E} + \text{P}$).

---

### Partie III : Analyse critique du modèle

8. **Limites biologiques du modèle in vivo :**
   Le modèle de Michaelis-Menten repose sur des hypothèses fortes qui sont rarement strictement vérifiées dans la cellule :
   * **Milieu homogène vs compartimenté :** Le cytoplasme n'est pas une solution idéale diluée ; c'est un milieu gélifié (cytosquelette dense) et compartimenté (peroxysomes pour la catalase), ce qui restreint la diffusion des espèces (limitations diffusionnelles).
   * **Stationnarité et proportions :** L'hypothèse $[\text{S}] \gg [\text{E}_0]$ n'est pas toujours respectée localement lors d'un pic de stress oxydatif.
   * **Interactions moléculaires :** Le modèle ne prend pas en compte l'effet d'inhibiteurs physiologiques, de variations de pH intracellulaire, ou d'encombrement stérique par d'autres macromolécules (effet de crowding).