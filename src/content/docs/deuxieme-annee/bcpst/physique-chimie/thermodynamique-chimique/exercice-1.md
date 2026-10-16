---
title: 'Exercice 1 : Potentiel chimique'
description: 'Problème d entraînement type concours.'
---

# Problème Guidé : Transport membranaire et équilibre osmotique, une approche par le potentiel chimique

**Filière :** BCPST  
**Matière :** Physique-Chimie  
Chapitre: ** Thermodynamique chimique  
**Thème :** Potentiel chimique, équilibres de phase et transport biologique  

---

## 🔬 Contexte biologique et problématique

Le maintien de l'intégrité cellulaire repose sur la capacité des cellules à réguler les échanges d'eau et de solutés avec leur environnement (milieu extracellulaire). Chez les cellules végétales, la paroi cellulosique rigide exerce une pression mécanique contre la membrane plasmique lorsque la cellule absorbe de l'eau, s'opposant ainsi à un gonflement excessif (turgescence). À l'inverse, en milieu hypertonique, la cellule subit la plasmolyse. 

L'objectif de ce problème est d'utiliser le concept de **potentiel chimique** pour modéliser le transport de l'eau à travers une membrane biologique semi-perméable (laissant passer le solvant mais étanche aux macromolécules et ions) et de comprendre l'origine thermodynamique de la pression osmotique, en discuteant les limites du modèle idéal.

---

## 📝 Énoncé et Données

On considère un système compartimenté à température $T$ et pression $P$ constantes, divisé en deux compartiments (I) et (II) séparés par une membrane idéale, rigide, perméable uniquement au solvant (l'eau, notée $\text{A}$). 
* Le compartiment (I) contient de l'eau pure.
* Le compartiment (II) contient une solution aqueuse diluée d'un soluté non dissociable (noté $\text{B}$) de concentration molaire $C_B$.

**Données et rappels :**
* Constante des gaz parfaits : $R = 8{,}314\text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$.
* Volume molar standard de l'eau pure à $T$ : $V_{m,\text{A}}^* \approx 18\text{ cm}^3\cdot\text{mol}^{-1}$.
* Expression du potentiel chimique d'un constituant $i$ dans une phase idéale : 
  $$\mu_i(T, P, x_i) = \mu_i^*(T, P) + R T \ln(x_i)$$
  où $\mu_i^*(T, P)$ est le potentiel chimique du corps pur $i$ à la température $T$ et à la pression $P$, et $x_i$ la fraction molaires de $i$.
* Pour une solution infiniment diluée, la fraction molaire du solvant $x_\text{A}$ s'exprime en fonction de la concentration molaire $C_\text{B}$ du soluté et du volume molaire du solvant par : $\ln(x_\text{A}) \approx - C_\text{B} V_{m,\text{A}}^*$.

---

## ❓ Questions

1. **Rappel de cours :** Définir le potentiel chimique $\mu_i$ d'une espèce $i$ en termes d'énergie libérale (thermodynamique). Quelle est son unité dans le Système International ?
2. **Expression du potentiel chimique :** Écrire l'expression du potentiel chimique de l'eau $\mu_\text{A}^{(\text{I})}$ dans le compartiment (I) et $\mu_\text{A}^{(\text{II})}$ dans le compartiment (II), en supposant initialement que les deux compartiments sont à la même pression $P_0$.
3. **Condition d'équilibre :** À l'aide du second principe de la thermodynamique (via l'entropie ou l'énergie libre de Gibbs), établir la condition d'équilibre thermodynamique pour le transfert de l'eau entre les deux compartiments. En déduire le sens spontané du transfert d'eau si les pressions sont initialement égales.
4. **Pression osmotique :** Pour rétablir l'équilibre thermodynamique alors que le compartiment (II) contient le soluté, on exerce une surpression $\Pi = P^{(\text{II})} - P^{(\text{I})}$ sur le compartiment (II). En effectuant un développement limité de $\mu_\text{A}^*(T, P)$ par rapport à la pression (en faisant intervenir $V_{m,\text{A}}^*$), démontrer la relation de van 't Hoff donnant la pression osmotique :
   $$\Pi = C_\text{B} R T$$
5. **Application biologique :** Calculer la pression osmotique exercée par une solution de glucose ($\text{C}_6\text{H}_{12}\text{O}_6$) à la concentration $C_\text{B} = 0{,}15\text{ mol}\cdot\text{L}^{-1}$ à la température corporelle $T = 37\text{ }\text{^\circ C}$. Conclure quant à l'ordre de grandeur.
6. **Esprit critique et limites :** Le modèle utilisé suppose une solution idéale et une membrane rigide et parfaitement sélective. Discuter brièvement deux limites de ce modèle dans le cadre cellulaire réel (milieu intracellulaire).

---

## 🧭 Pistes et Méthode

* **Q1 :** Penser aux dérivées partielles des fonctions d'état extensives par rapport à la quantité de matière à $T$ et $P$ constants.
* **Q3 :** L'équilibre chimique/thermodynamique d'un constituant mobile entre deux phases impose l'égalité de ses potentiels chimiques dans les deux phases.
* **Q4 :** Utiliser la relation thermodynamique fondamentale $\left(\frac{\partial \mu_i}{\partial P}\right)_{T, n} = V_{m,i}$, puis injecter cette variation dans l'égalité des potentiels chimiques à l'équilibre.
* **Q5 :** Attention aux unités (convertir les litres en $\text{m}^3$ ou exprimer $R$ et $C$ dans des unités cohérentes).

---

## 📋 Corrigé pas à pas

### 1. Définition du potentiel chimique
Le potentiel chimique d'une espèce $i$ est défini par la dérivée partielle de l'énergie libre de Gibbs $G$ du système par rapport au nombre de moles $n_i$ de cette espèce, à température $T$, pression $P$ et nombres de moles des autres constituants constants :
$$\mu_i = \left(\frac{\partial G}{\partial n_i}\right)_{T, P, n_{j \neq i}}$$
Son unité dans le SI est le **$\text{J}\cdot\text{mol}^{-1}$**. Il représente l'énergie molaire partielle apportée au système par l'ajout de l'espèce $i$.

### 2. Expression du potentiel chimique de l'eau
* Dans le compartiment (I) (eau pure, $x_\text{A} = 1$) :
  $$\mu_\text{A}^{(\text{I})} = \mu_\text{A}^^*(T, P_0) + R T \ln(1) = \mu_\text{A}^^*(T, P_0)$$
* Dans le compartiment (II) (solution aqueuse, fraction molaire $x_\text{A} < 1$) :
  $$\mu_\text{A}^{(\text{II})} = \mu_\text{A}^^*(T, P_0) + R T \ln(x_\text{A})$$

### 3. Condition d'équilibre et sens spontané
À l'équilibre thermodynamique, le transfert élémentaire de moles d'eau $d n_\text{A}$ d'un compartiment à l'autre doit conduire à une variation nulle de l'énergie libre de Gibbs totale ($dG = 0$). Cela se traduit par l'égalité des potentiels chimiques :
$$\mu_\text{A}^{(\text{I})} = \mu_\text{A}^{(\text{II})}$$
Puisque $\ln(x_\text{A}) < 0$ (car $x_\text{A} < 1$), on a initialement (à pression $P_0$ égale) :
$$\mu_\text{A}^{(\text{II})} = \mu_\text{A}^^*(T, P_0) + R T \ln(x_\text{A}) < \mu_\text{A}^^*(T, P_0) = \mu_\text{A}^{(\text{I})}$$
Le potentiel chimique de l'eau étant plus élevé dans le compartiment (I) que dans le compartiment (II), l'eau se déplace spontanément **du compartiment (I) vers le compartiment (II)** (du milieu le moins concentré vers le plus concentré : c'est l'osmose).

### 4. Démonstration de la loi de van 't Hoff
Pour stopper ce flux, on augmente la pression dans le compartiment (II) à $P^{(\text{II})} = P_0 + \Pi$. 
La condition d'équilibre devient :
$$\mu_\text{A}^^*(T, P^{(\text{I})}) = \mu_\text{A}^^*(T, P^{(\text{II})}) + R T \ln(x_\text{A})$$

On sait que $\left(\frac{\partial \mu_\text{A}}{\partial P}\right)_T = V_{m,\text{A}}^*$. Par intégration (en supposant le volume molaire constant car le liquide est incompressible) :
$$\mu_\text{A}^^*(T, P^{(\text{II})}) - \mu_\text{A}^^*(T, P^{(\text{I})}) = \int_{P^{(\text{I})}}^{P^{(\text{II})}} V_{m,\text{A}}^* dP = V_{m,\text{A}}^* (P^{(\text{II})} - P^{(\text{I})}) = V_{m,\text{A}}^* \Pi$$

En réinjectant dans l'équation d'équilibre :
$$0 = V_{m,\text{A}}^* \Pi + R T \ln(x_\text{A}) \implies \Pi = -\frac{R T}{V_{m,\text{A}}^*} \ln(x_\text{A})$$

En utilisant l'approximation pour les solutions diluées ($\ln(x_\text{A}) \approx -C_\text{B} V_{m,\text{A}}^*$) :
$$\Pi = -\frac{R T}{V_{m,\text{A}}^*} (-C_\text{B} V_{m,\text{A}}^*) = C_\text{B} R T$$
On retrouve bien la loi de van 't Hoff.

### 5. Application numérique
* Données : $C_\text{B} = 0{,}15\text{ mol}\cdot\text{L}^{-1} = 150\text{ mol}\cdot\text{m}^{-3}$
* $T = 37\text{ }\text{^\circ C} = 310{,}15\text{ K}$
* $R = 8{,}314\text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$

$$\Pi = 150 \times 8{,}314 \times 310{,}15 \approx 386\text{ }780\text{ Pa} \approx 3{,}87\text{ bar}$$
Analyse: * Cette pression osmotique est considérable ($\approx 3{,}8$ atmosphères), ce qui illustre pourquoi les cellules animales (sans paroi rigide) doivent réguler strictement leur milieu isotonique pour éviter la lyse (éclatement) ou la crénation.

### 6. Esprit critique et limites du modèle
* **Limites de la dilution :** Le modèle suppose une solution idéale diluée ($\ln(x_\text{A}) \approx -C_\text{B} V_{m,\text{A}}^*$). Pour des concentrations ioniques élevées ou des macromolécules (protéines), les interactions électrostatiques et stériques invalident cette approximation (nécessité d'introduire des activités chimiques).
* **Sélectivité membranaire :** La membrane biologique n'est jamais "parfaitement" imperméable aux solutés ; il existe des transports actifs et passifs (canaux, pompes) qui font que le système cellulaire est un *état stationnaire hors d'équilibre* thermodynamique strict, et non un équilibre statique passif.