---
title: 'Cours : Procédés de fabrication'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

Les procédés de fabrication en classes préparatoires (filière PT) s'inscrivent dans le triptyque de l'ingénieur : **Matière - Énergie - Information**. L'objectif est d'obtenir, à partir d'un brut (matière première), une pièce finie respectant un cahier des charges fonctionnel (géométrie, dimensions, tolérances, état de surface).

### 1.1. Classification des procédés
On distingue traditionnellement quatre grandes familles de procédés :
1. **Procédés par enlèvement de matière (usinage)** : Tournage, fraisage, perçage, rectification. L'obtention de la géométrie se fait par rupture locale de la matière sous forme de copeaux.
2. **Procédés par addition de matière** : Fabrication additive (impression 3D), soudage, projection thermique.
3. **Procédés par oformage / déformation plastique** : Forgeage, emboutissage, laminage, extrusion. La matière est contrainte au-delà de sa limite d'élasticité sans rupture.
4. **Procédés par obtention de forme brute (fonderie, métallurgie des poudres)** : Passage de l'état liquide (ou pulvérulent) à l'état solide dans un moule.

### 1.2. Grandeurs caractéristiques en usinage
Pour l'étude cinématique et dynamique (très fréquente en SII pour le dimensionnement des chaînes de puissance), on définit :
* Vitesse de coupe $V_c$ ($\text{m}\cdot\text{min}^{-1}$) : Vitesse linéaire relative de l'arête tranchante de l'outil par rapport à la pièce.
* Fréquence de rotation $N$ ($\text{tr}\cdot\text{min}^{-1}$) : Vitesse de rotation de la broche ou de la pièce.
* Avance par tour $f$ ($\text{mm}\cdot\text{tr}^{-1}$) ou avance par dent $f_z$ ($\text{mm}\cdot\text{dent}^{-1}$) : Déplacement de l'outil par tour ou par dent.
* Profondeur de passe $a_p$ ($\text{mm}$) : Engagement de l'outil dans la matière mesuré perpendiculairement à la surface usinée.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Relation cinématique fondamentale en tournage et fraisage
La connaissance des paramètres de coupe permet d'établir les relations liant la cinématique machine aux caractéristiques géométriques.

**En tournage (cylindrage) :**
La vitesse de coupe est liée au diamètre de la pièce $D$ (en $\text{mm}$) et à la fréquence de rotation $N$ (en $\text{tr}\cdot\text{min}^{-1}$) par la relation :
$$V_c = \frac{\pi \cdot D \cdot N}{1000}$$

La vitesse d'avance longitudinale $V_f$ ($\text{mm}\cdot\text{min}^{-1}$) s'exprime par :
$$V_f = f \cdot N$$

### 2.2. Modélisation de l'effort de coupe (Modèle de Kienzle)
Le modèle empirique de Kienzle permet d'évaluer l'effort principal de coupe $F_c$ (en $\text{Newtons}$, $\text{N}$) exercé par la pièce sur l'outil lors de l'enlèvement de copeau :
$$F_c = k_c \cdot S = k_c \cdot a_p \cdot f$$

Où :
* $S = a_p \cdot f$ est la section nominale du copeau ($\text{mm}^2$).
* $k_c$ est la pression spécifique de coupe ($\text{N}\cdot\text{mm}^{-2}$), qui dépend du matériau usiné, de l'avance $f$ et de l'angle de coupe de l'outil selon la loi de Kienzle généralisée :
$$k_c = k_{1.1} \cdot f^{-mc}$$
avec $k_{1.1}$ la pression spécifique de coupe pour $S = 1\text{ mm}^2$ et $mc$ le coefficient d'apurage du matériau.

### 2.3. Puissance de coupe et puissance motrice
La puissance nécessaire à la coupe $P_c$ (en $\text{Watts}$, $\text{W}$) est le produit de l'effort principal de coupe par la vitesse de coupe :
$$P_c = F_c \cdot V_c$$

En tenant compte du rendement global de la chaîne de puissance de la machine-outil $\eta$ ($0 < \eta \le 1$), la puissance moteur nécessaire $P_m$ est :
$$P_m = \frac{P_c}{\eta}$$

---

## 💡 3. Méthodes classiques de résolution

Pour traiter un problème de synthèse ou d'analyse en fabrication (souvent issu d'une épreuve de concours PT), la méthodologie suivante doit être rigoureusement appliquée :

1. **Identification du besoin et du contrat de phase** :
   * Déterminer les surfaces usinées lors de la phase étudiée.
   * Identifier les surfaces de référence (isostatisme) assurant le posicionnement de la pièce.

2. **Validation de la faisabilité énergétique et cinématique** :
   * Calculer la fréquence de rotation $N$ à partir de la vitesse de coupe $V_c$ imposée par le couple outil/matière et du diamètre $D$.
   * Vérifier que la puissance nécessaire $P_c$ (ou $P_m$) est inférieure à la puissance maximale disponible sur la broche de la machine-outil.
   * Vérifier que les efforts générés ($F_c$) n'induisent pas de déformations élastiques excessives (problème de résistance des matériaux / raideur de la structure).

3. **Analyse de la chaîne de cotes** :
   * Établir le graphe des transferts.
   * Écrire la relation vectorielle ou algébrique liant la cote condition (exigence fonctionnelle) aux cotes fabrication (cotation de phase).
   * Calculer les jeux limites (maximal et minimal) pour garantir la non-non-conformité statistique ou déterministe.

---

## ⚠️ 4. Pièges classiques aux Concours

* **Inhomogénéité des unités** : C'est l'erreur éliminatoire par excellence. Le diamètre $D$ est presque toujours donné en millimètres ($\text{mm}$), tandis que la vitesse de coupe $V_c$ s'exprime en mètres par minute ($\text{m}\cdot\text{min}^{-1}$). Ne jamais oublier le facteur $1000$ dans le calcul de $V_c = \frac{\pi D N}{1000}$.
* **Confusions sur l'avance** : En fraisage, bien distinguer l'avance par tour ($f$), l'avance par dent ($f_z$) et la vitesse d'avance table ($V_f$). La relation liant ces grandeurs implique le nombre de dents de la fraise $Z$ : 
  $$V_f = f \cdot N = f_z \cdot Z \cdot N$$
* **Oubli du rendement** : Pour dimensionner un moteur ou vérifier un dépassement de couple, il ne faut jamais assimiler la puissance de coupe $P_c$ à la puissance utile fournie par le moteur sans intégrer le rendement $\eta$ de la chaîne cinématique.
* **Hypothèse de rigidité infinie** : Négliger les efforts de coupe face à la raideur de la machine peut mener à des conclusions erronées sur la précision géométrique (erreurs de forme dues au fléchissement de l'outil ou de la pièce).