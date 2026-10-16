---
title: 'Exercice 2 : Cotation fonctionnelle et tolérancement géométrique (GPS)'
description: 'Problème d entraînement type concours pour PT.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la conception d'un réducteur de vitesse planétaire destiné à une application aéronautique embarquée, on s'intéresse au sous-ensemble constitué du **carter (1)**, de l'**arbre de sortie (2)** et d'un **roulement à billes à contacts obliques (3)** monté en theorie de liaison équivalente adéquate. 

L'objectif de cette étude est de garantir le jeu axial minimal $J$ dans le roulement (3) afin d'éviter tout arc-boutement sous l'effet des dilatations thermiques, tout en assurant l'assemblage correct sans interférence géométrique excessive.

#### Données du problème et hypothèses de modélisation :
*   Le mécanisme fonctionne dans une plage de température nominale allant de $T_{\min} = -20\,^{\circ}\text{C}$ à $T_{\max} = +80\,^{\circ}\text{C}$.
*   Le matériau du carter (1) est un alliage d'aluminium (coefficient de dilatation thermique $\alpha_1 = 23 \times 10^{-6}\,\text{K}^{-1}$).
*   Le matériau de l'arbre (2) est un acier traité (coefficient de dilatation thermique $\alpha_2 = 11 \times 10^{-6}\,\text{K}^{-1}$).
*   La cote nominale du jeu fonctionnel à température ambiante ($T_0 = 20\,^{\circ}\text{C}$) est fixée à $J_0 = 0{,}10\,\text{mm}$.
*   Les variations géométriques locales (défauts de forme) sont négligées dans un premier temps au profit des défauts d'orientation et de position (tolérancement GPS).

---

### ❓ Questions progressives

1. **Analyse fonctionnelle et chaîne de cotes :**
   Tracer le graphe des liaisons minimal du mécanisme et identifier les surfaces terminales intervenant dans la condition relative au jeu axial $J$. Tracer la chaîne de cotes correspondante sur un schéma cinématique minimal ou une vue schématique.

2. **Équation de projection :**
   Écrire l'expression littérale de la conditionnelle $J$ en fonction des cotes effectives des composants. En déduire la cote moyenne nominale de fabrication de la portée du carter si toutes les autres cotes sont centrées à leurs valeurs nominales.

3. **Influence de l'environnement (Analyse critique) :**
   Exprimer la variation maximale du jeu $\Delta J$ due aux effets thermiques entre $T_0$ et $T_{\max}$, sachant que les longueurs caractéristiques effectives soumises à l'expansion thermique sont évaluées à $L_1 = 150\,\text{mm}$ (carter) et $L_2 = 150\,\text{mm}$ (arbre). 
   *Question critique :* Discutez la validité de l'hypothèse d'homogénéité thermique dans un contexte aéronautique. Quels phénomènes physiques non pris en compte dans ce modèle linéaire pourraient remettre en cause l'intégrité du roulement ?

4. **Tolérancement géométrique (GPS) :**
   La bague extérieure du roulement est montée serrée dans le carter (1) et la bague intérieure est montée glissante sur l'arbre (2). Afin de garantir une transmission correcte de l'effort sans induire de moment parasite préjudiciable à la durée de vie du roulement, on souhaite imposer une spécification géométrique de battement circulaire ou de coaxialité sur la portée d'accueil du carter par rapport à l'axe de référence du guidage.
   Proposer le symbole normalisé ISO adéquat, définir la zone de tolérance associée et tracer l'indication sur le dessin de définition.

---

### 💡 Pistes & Indications

* **Q1 :** Utilisez la méthode des transferts de cotes en identifiant clairement les origines et les extrémités des côtes.
* **Q2 :** Pensez à utiliser la relation vectorielle ou algébrique des cotes en projection sur l'axe principal de l'arbre.
* **Q3 :** La dilatation linéaire s'exprime par $\Delta L = L \cdot \alpha \cdot \Delta T$. Attention au sens algébrique des dilatations différentielles entre l'aluminium et l'acier.
* **Q4 :** Reportez-vous aux normes ISO 1101 pour le choix du descripteur GPS (coaxialité ou battement total) en fonction de la fonction technique recherchée (guidage en rotation précis).

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Chaîne de cotes
Le jeu axial $J$ est conditionné par la position relative de la butée du carter (1) et de l'épaulement de l'arbre (2) via les bagues du roulement (3). 
En projetant sur l'axe $\vec{X}$ de l'arbre, la condition fonctionnelle s'écrit sous forme d'équation aux limites :
$$J = A_1 - (A_2 + A_3)$$
Où :
*   $A_1$ représente la cote longueur interne du carter.
*   $A_2$ représente la position de l'épaulement de l'arbre.
*   $A_3$ représente la largeur totale du roulement (3).

#### 2. Équation nominale et calcul de fabrication
À l'état nominal, la relation moyenne est :
$$J_0 = \bar{A}_1 - (\bar{A}_2 + \bar{A}_3)$$
Application numérique pour déterminer la cote moyenne $\bar{A}_1$ du carter (si $\bar{A}_2 = 120\,\text{mm}$, $\bar{A}_3 = 20\,\text{mm}$ et $J_0 = 0{,}10\,\text{mm}$) :
$$\bar{A}_1 = J_0 + \bar{A}_2 + \bar{A}_3 = 0{,}10 + 120 + 20 = 140{,}10\,\text{mm}$$

#### 3. Analyse thermique et critique du modèle
La variation de température maximale est $\Delta T = T_{\max} - T_0 = 80 - 20 = 60\,\text{K}$.
Les dilatations respectives du carter ($dL_1$) et de l'arbre ($dL_2$) s'écrivent :
$$\Delta L_1 = L_1 \cdot \alpha_1 \cdot \Delta T = 150 \times (23 \times 10^{-6}) \times 60 = 0{,}207\,\text{mm}$$
$$\Delta L_2 = L_2 \cdot \alpha_2 \cdot \Delta T = 150 \times (11 \times 10^{-6}) \times 60 = 0{,}099\,\text{mm}$$

La variation du jeu en régime chaud devient :
$$\Delta J = \Delta L_1 - \Delta L_2 = 0{,}207 - 0{,}099 = 0{,}108\,\text{mm}$$
Le jeu total à chaud atteint donc :
$$J_{\text{chaud}} = J_0 + \Delta J = 0{,}10 + 0{,}108 = 0{,}208\,\text{mm}$$

*   **Analyse critique et limites du modèle :**
    *   *Hypothèse d'homogénéité thermique :* Le modèle suppose que le carter et l'arbre subissent la même élévation de température de façon uniforme. En réalité, l'arbre (en rotation, soumis à des pertes par frottement dans les contacts) présente un gradient thermique radial et axial important par rapport au carter externe refroidi par convection naturelle ou forcée.
    *   *Effets non pris en compte :* Les dilatations différentielles locales au niveau des ajustements serrés créent des contraintes de contrainte résiduelle (frettage thermo-élastique) qui modifient la géométrie des bagues du roulement (ovalisation). De plus, le coefficient $\alpha$ dépend faiblement de la température sur la plage $[-20\,^{\circ}\text{C}, +80\,^{\circ}\text{C}]$, ce qui introduit une erreur mineure mais non nulle.

#### 4. Spécification GPS
Pour garantir l'absence de moment parasite et assurer la coaxialité de la portée d'accueil par rapport à la référence de l'axe du palier principal, on utilise une spécification de **coaxialité** ou de **battement circulaire**.
*   **Symbole choisi :** Un cercle concentrique pour la coaxialité ($\odot$) ou une flèche inclinée pour le battement circulaire ($\nearrow$).
*   **Inscription dans le cadre de tolérance :** 
    *   Forme du cadre : [ $\odot$ | $0{,}02$ | A ]
    *   Référence spécifiée : L'axe de référence commun établi par les portées de guidage désigné par la lettre **A**.
*   *Justification :* Une tolérance de $0{,}02\,\text{mm}$ est cohérente avec les procédés d'usinage par tournage-fraisage de précision en milieu industriel aéronautique pour garantir la durée de vie $L_{10h}$ du roulement sans surcharges locales excessives.