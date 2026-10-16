---
title: "Banque PT 2025 - Conception & Métrologie"
description: "Sujet d'annale officiel du concours Banque PT intégralement corrigé avec barème pas à pas."
sidebar:
  badge:
    text: "Annale Concours"
    variant: "danger"
---

## 📄 Partie 1 : Énoncé Officiel du Sujet

### Introduction et Présentation du Système

Le sujet porte sur l'étude d'un mécanisme de transmission de haute précision intégré dans un système mécatronique industriel. L'objectif de cette épreuve est d'analyser la définition géométrique des composants, de valider le comportement dynamique de l'arbre rapide par un équilibrage, et de vérifier les conditions de montage par une analyse tridimensionnelle des jeux.

---

### Partie I : Tolérancement géométrique ISO et Analyse de Définition

La liaison entre le carter et l'arbre de sortie est assurée par un ensemble de guidage dont le dessin de définition extrait est soumis à votre analyse. Le matériau de la pièce étudiée est un acier allié.

1. **Question 1 :** Définir la classe de tolérance géométrique imposée sur le cylindre principal de l'arbre pour assurer l'absence de faux-rond radial par rapport aux paliers. Quel est le symbole normalisé associé ?
2. **Question 2 :** Préciser la signification exacte de l'élément tolérancé et des références pour la spécification suivante : 
   $$\text{Cylindricité} \le 0,02 \text{ mm}$$
   et donner l'influence d'un défaut de forme sur le montage avec le roulement.
3. **Question 3 :** Écrire la cotation normalisée ISO (sous forme de cadre de tolérance) pour une exigence d'enveloppe appliquée à un alésage de diamètre $\Phi 45 \text{ H7}$. Justifier l'intérêt fonctionnel de cette exigence.

---

### Partie II : Équilibrage Dynamique de l'Arbre Rapide

L'arbre rapide tourne à une fréquence de rotation nominale $N = 6000 \text{ tr/min}$. Suite à des usures localisées et à des dissymétries d'usinage, le rotor présente un balourd résiduel qu'il s'agit de quantifier et de corriger.

1. **Question 1 :** Rappeler l'expression vectorielle de la force centrifuge $\vec{F}_{c}$ exercée par une masse balourd $m$ située à une distance $r$ de l'axe de rotation, pour une vitesse angulaire $\omega$. Expliciter toutes les variables et leurs unités.
2. **Question 2 :** L'analyse vibratoire montre un pic d'amplitude inacceptable à la fréquence de rotation. Le balourd dynamique est mesuré dans deux plans de correction $P_1$ et $P_2$. On donne la masse balourd équivalente $m_1 = 15 \text{ g}$ située à un rayon $r_1 = 50 \text{ mm}$ dans le plan $P_1$. Calculer la force centrifuge correspondante à la vitesse nominale.
3. **Question 3 :** Pour corriger ce balourd dans le plan $P_1$, on décide d'ajouter une vis de masse additionnelle. Indiquer la méthode géométrique et analytique pour déterminer la position angulaire et la masse de la correction à apporter.

---

### Partie III : Chaînes de Cotes 3D et Analyse des Jeux

Le montage des composants sur l'arbre de transmission est soumis à un jeu axial minimal $J_{\text{min}}$ pour éviter tout arc-boutement thermique. La chaîne de cotes est tridimensionnelle, mais on se ramène ici à l'étude de la projection axiale principale.

1. **Question 1 :** Tracer le graphe des liaisons de l'sous-ensemble considéré et identifier la boucle de cotes relative au jeu axial $J$ entre l'épaulement de l'arbre et la bague extérieure du roulement.
2. **Question 2 :** Écrire la relation vectorielle et algébrique littérale traduisant la condition de fermeture de la chaîne de cotes en fonction des cotes moyennes et des tolérances symétriques associées.
3. **Question 3 :** Calculer la valeur numérique du jeu minimal $J_{\text{min}}$ et du jeu maximal $J_{\text{max}}$ sachant que les cotations portées sur les pièces sont les suivantes :
   - Longueur du carter : $L_c = 120 \pm 0,15 \text{ mm}$
   - Longueur de l'entretoise : $L_e = 45 \pm 0,08 \text{ mm}$
   - Largeur de la bague intérieure : $L_b = 75 \pm 0,10 \text{ mm}$

---

### Partie IV : Synthèse et Validation Multiphysique

1. **Question 1 :** Expliquer comment un défaut de tolérancement géométrique (par exemple un défaut de perpendicularité d'une face d'appui) peut perturber l'équilibrage dynamique préalablement réalisé.
2. **Question 2 :** Conclure sur la pertinence du choix des tolérances dimensionnelles face aux exigences fonctionnelles du système (fiabilité à $6000 \text{ tr/min}$).

---
<div style="page-break-after: siempre;"></div>

## 💡 Partie 2 : Indications du Concepteur & Pièges du Barème

### Esprit du Sujet et Objectifs du Concours PT
Ce sujet de la Banque PT 2025 a été conçu pour tester la rigueur de l'ingénieur éligible aux écoles d'ingénieurs. Il insiste sur la liaison indispensable entre le dessin de définition (ISO), la réalité physique de la matière en mouvement (dynamique/équilibrage) et la garantie du fonctionnement par l'analyse des jeux (chaînes de cotes).

### Pièges Fréquents et Recommandations pour le Barème
- **Tolérancement ISO :** Les candidats confondent souvent tolérance de forme (qui ne nécessite pas de référence) et tolérance d'orientation/battement (qui nécessite impérativement une référence). Veiller à sanctionner l'absence de référence dans les cadres de battement ou de coaxialité.
- **Unités en Dynamique :** L'oubli de la conversion de la fréquence de rotation ($N$ en $\text{tr/min}$ vers $\omega$ en $\text{rad/s}$) est le piège classique menant à des erreurs d'ordres de grandeur sur la force centrifuge.
- **Chaînes de Cotes :** Attention au sens des projections algébriques. Une cote orientée dans le sens inverse du jeu soustrait sa valeur nominale mais additionne ses variations (les tolérances s'ajoutent toujours en pire des cas).

---

## 📋 Partie 3 : Correction Rédigée Pas à Pas (Barème détaillé /20)

### Partie I : Tolérancement géométrique ISO et Analyse de Définition (4 points)
- **Q1 (1,5 pt) :** 
  - Identification de la classe : **Battement circulaire** ou **Battement total**.
  - Symbole normalisé : Un cône oblique inscrit dans un cadre pointé vers la surface. (0,75 pt pour le nom, 0,75 pt pour le symbole).
- **Q2 (1,25 pt) :**
  - La cylindricité est une tolérance de forme intrinsèque ne nécessitant **aucune référence** (0,5 pt).
  - Un défaut de cylindricité excessif génère des surcontraintes locales de contact (Hertz) lors du montage serré de la bague du roulement, entraînant une usure prématurée et un couple de frottement parasite (0,75 pt).
- **Q3 (1,25 pt) :**
  - Cadre d'exigence d'enveloppe : Le symbole de la condition de maximum de matière (cercle M) ou l'application de la norme (0,5 pt).
  - Intérêt fonctionnel : Garantir le respect simultané de la dimension et de la forme géométrique parfaite au maximum de matière, facilitant l'assemblage sans jeu excessif (0,75 pt).

---

### Partie II : Équilibrage Dynamique de l'Arbre Rapide (5 points)
- **Q1 (1,25 pt) :**
  - Expression : $\vec{F}_{c} = m \cdot r \cdot \omega^2 \cdot \vec{u}_{r}$ (0,75 pt).
  - Unités : $m$ en $\text{kg}$, $r$ en $\text{m}$, $\omega$ en $\text{rad/s}$, $F_c$ en $\text{N}$ (0,5 pt).
- **Q2 (2 pts) :**
  - Conversion de la vitesse angulaire : 
    $$\omega = \frac{\pi \cdot N}{30} = \frac{\pi \cdot 6000}{30} = 200\pi \approx 628,32 \text{ rad/s}$$
    (0,75 pt).
  - Calcul de la force centrifuge :
    $$F_c = 15 \times 10^{-3} \text{ kg} \times 50 \times 10^{-3} \text{ m} \times (628,32 \text{ rad/s})^2$$
    $$F_c = 15 \times 10^{-3} \times 50 \times 10^{-3} \times 394784,18 = 296,09 \text{ N}$$
    (1,25 pt avec application numérique et unité).
- **Q3 (1,75 pt) :**
  - Méthode : Représentation vectorielle du balourd dans le plan complexe ou graphique. La masse correctrice $m_c$ à positionner à l'opposé ($180^\circ$) du balourd initial telle que :
    $$m_c \cdot r_c = m_1 \cdot r_1$$
    (1,0 pt).
  - Conclusion sur la correction : Choix d'une vis de masse normalisée vissée sur un rayon adéquat (0,75 pt).

---

### Partie III : Chaînes de Cotes 3D et Analyse des Jeux (6 points)
- **Q1 (1,5 pt) :**
  - Graphe des liaisons correct reliant Carter $\to$ Roulement $\to$ Entretoise $\to$ Arbre (0,75 pt).
  - Identification de la boucle axiale pour le jeu $J$ (0,75 pt).
- **Q2 (1,5 pt) :**
  - Équation vectorielle : $\vec{J} + \vec{L}_b + \vec{L}_e - \vec{L}_c = \vec{0}$ (0,75 pt).
  - Traduction algébrique sur l'axe : 
    $$J + L_b + L_e - L_c = 0 \implies J = L_c - (L_b + L_e)$$
    (0,75 pt).
- **Q3 (3 pts) :**
  - Calcul de la cote moyenne :
    $$J_0 = L_{c0} - (L_{b0} + L_{e0}) = 120 - (75 + 45) = 120 - 120 = 0 \text{ mm}$$
    (1 pt).
  - Calcul des intervalles de tolérance (les tolérances s'additionnent toujours en pire des cas) :
    $$IT(J) = IT(L_c) + IT(L_b) + IT(L_e)$$
    $$IT(J) = 0,30 + 0,20 + 0,16 = 0,66 \text{ mm}$$
    (1 pt).
  - Calcul du jeu minimal et maximal :
    $$J_{\text{min}} = J_0 - \frac{IT(J)}{2} = 0 - 0,33 = -0,33 \text{ mm}$$
    $$J_{\text{max}} = J_0 + \frac{IT(J)}{2} = 0 + 0,33 = 0,33 \text{ mm}$$
    *(Note : Un jeu minimal négatif indique un montage avec précontrainte/serrage axial).* (1 pt).

---

### Partie IV : Synthèse et Validation Multiphysique (5 points)
- **Q1 (2,5 pts) :**
  - Un défaut de perpendicularité des faces d'appui des bagues de roulement induit un basculement de la bague par rapport à l'axe théorique (0,75 pt).
  - Cela déplace le centre d'inertie instantané de l'ensemble tournant de manière dynamique, créant un balourd de moment non modélisé par l'équilibrage statique/dynamique initial réalisé sur un arbre parfait (1,0 pt).
  - Conséquence : Apparition de vibrations à la fréquence de rotation malgré l'équilibrage (0,75 pt).
- **Q2 (2,5 pts) :**
  - Analyse critique : Les jeux calculés montrent une alternance potentielle de serrage/jeu qui, combinée aux tolérances géométriques, nécessite une maîtrise rigoureuse de la chaîne d'usinage (1,0 pt).
  - Conclusion : Le système est valide sous réserve du respect strict des classes de tolérances géométriques de battement et de perpendicularité pour assurer la durée de vie nominale à $6000 \text{ tr/min}$ (1,5 pt).