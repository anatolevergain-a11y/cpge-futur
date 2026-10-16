---
title: 'Cours : Conception et Procédés de fabrication'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Conception et Procédés de fabrication
**Filière :** CPGE PTSI — Sciences Industrielles de l'Ingénieur (SII)  
Niveau: ** Première année

---

## 1. Introduction et objectifs de la conception

La conception des systèmes mécaniques s'inscrit dans un processus global visant à satisfaire un besoin exprimé par un cahier des charges fonctionnel (CDCF). En classe de PTSI, l'approche liant la **conception** et les **procédés de fabrication** est fondamentale : un produit bien conçu est un produit que l'on sait fabriquer au moindre coût, dans le respect des exigences environnementales et fonctionnelles.

### 1.1. Le cycle de vie d'un produit
Le triptyque fondamental de l'ingénieur en conception associe :
$$\text{Matière} \quad \longleftrightarrow \quad \text{Forme} \quad \longleftrightarrow \quad \text{Procédé}$$
Tout choix de forme ou de matériau induit des contraintes sur les procédés de fabrication envisageables, et réciproquement.

---

## 2. Les matériaux en construction mécanique

Le choix du matériau conditionne les performances mécaniques, massiques et économiques du système. On les classe traditionnellement en quatre grandes familles :

1. **Les métaux et alliages :**
   * *Fers et aciers* (alliages $\text{Fe-C}$), fontes : résistants, ductiles, recyclables.
   * *Alliages non ferreux* : aluminium, cuivre, titane (recherchés pour leur rapport $\text{résistance}/\text{masse}$).
2. **Les polymères (matières plastiques) :** Thermoplastiques (recyclables, ex: PVC, PMMA) et thermodurcissables (ex: époxy).
3. **Les céramiques et verres :** Durs, résistants à l'usure et aux hautes températures, mais fragiles.
4. **Les composites :** Association d'une matrice et de renforts (ex: fibre de carbone/résine) offrant des propriétés spécifiques exceptionnelles.

---

## 3. Les grands types de procédés de fabrication

Les procédés de fabrication permettent d'obtenir la géométrie finale d'une pièce à partir d'un brut. On les classe en trois catégories principales :

### 3.1. Procédés par obtention de forme par fusion et solidification (Fonderie)
Le matériau est à l'état liquide puis versé dans un moule.
* **Exemples :** Coulée en moule sable, moulage sous pression.
* **Avantages :** Formes complexes réalisables, adapté aux grandes séries (selon le procédé).
* **Inconvénients :** État de surface parfois grossier, retraits au refroidissement.

### 3.2. Procédés par enlèvement de matière (Usinage)
La forme finale est obtenue en coupant des copeaux à l'aide d'un outil tranchant.
* **Opérations principales :** Tournage (pièce en rotation, outil fixe), Fraisage (outil en rotation, pièce fixe), Perçage, Alésage.
* **Avantages :** Excellente précision dimensionnelle (IT serrés), très bon état de surface ($R_a$).
* **Inconvénients :** Perte de matière (copeaux), coût énergétique et temporel élevé.

### 3.3. Procédés par déformation plastique (Mise en forme)
On profite de la plasticité du matériau pour le déformer sans rupture (à chaud ou à froid).
* **Exemples :** Forgeage, emboutissage, laminage, filage.
* **Avantages :** Amélioration des caractéristiques mécaniques (fibrage du métal), cadence élevée, peu de chutes.
* **Inconvénients :** Outillages très coûteux (réservé aux grandes séries).

---

## 4. Tolérancement et spécifications géométriques (GPS)

Pour qu'un mécanisme fonctionne, les pièces doivent être assemblables tout en garantissant les jeux fonctionnels. Le système ISO de tolérancement (GPS : *Geometrical Product Specification*) définit les écarts tolérés par rapport à la géométrie idéale.

### 4.1. Cotation dimensionnelle
Soit une cote nominale $C$, la tolérance $T$ définit l'intervalle de variation admissible :
$$C_{\text{max}} = C + \frac{T}{2}, \quad C_{\text{min}} = C - \frac{T}{2}$$
L'intervalle de tolérance est noté :
$$\text{IT} = C_{\text{max}} - C_{\text{min}}$$

### 4.2. Cotation géométrique (Forme, Orientation, Position)
Les spécifications géométriques permettent de maîtriser les défauts réels des pièces usinées :
* **Défauts de forme :** Circularité, cylindricité, planéité, rectitude.
* **Défauts d'orientation :** Parallélisme, perpendicularité, inclinaison.
* **Défauts de position :** Localisation, symétrie, coaxialité.

---

## 5. Analyse de fabricabilité et liaison Conception-Procédés

En PTSI, l'analyse critique d'un dessin d'définition passe par le respect de règles de conception orientée fabrication (**Design for Manufacturing - DFM**) :

1. **Faciliter l'accès aux outils d'usinage :** Éviter les zones borgnes ou non débouchantes inaccessibles aux fraises. Prévoir des dégagements (gorges de dégagement pour les filets, coins arrondis plutôt que vifs).
2. **Limiter les opérations de reprise :** Concevoir des pièces nécessitant le minimum de positionnements différents sur les machines-outils.
3. **Standardiser :** Utiliser des composants du commerce (vis, roulements, goupilles) pour s'affranchir de coûts de fabrication spécifiques.