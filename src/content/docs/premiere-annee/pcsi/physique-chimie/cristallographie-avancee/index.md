---
title: 'Cours : Cristallographie et solides'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Cristallographie et Solides
**Filière :** PCSI — Première année  
**Matière :** Physique-Chimie  

---

## Introduction et Généralités sur l'État Solide

Un solide cristallin est caractérisé par un arrangement ordonné, périodique et répétitif dans l'espace de ses entités constitutives (atomes, ions, molécules). À l'opposé, un solide amorphe (comme le verre) ne présente pas d'ordre à longue distance.

*   **Réseau cristallin :** Ensemble de points géométriques périodiques dans l'espace, appelés *nœuds*.
*   **Motif :** Entité (atome, groupe d'atomes, ion) associée à chaque nœud du réseau.
*   **Cristal :** $\text{Réseau} + \text{Motif}$.

---

## 1. La Maille Élémentaire

La maille élémentaire est le plus petit volume paracétallique dont la translation dans les trois directions de l'espace permet de reconstituer tout le cristal.

### A. Paramètres de maille
Une maille du système cristallin cubique est caractérisée par :
*   Trois arêtes de longueur égale : $a = b = c$
*   Trois angles droits : $\alpha = \beta = \gamma = 90^\circ$

### B. Maille conventionnelle vs Maille primitive
*   **Maille primitive :** Contient un seul nœud par maille (les nœuds sont situés aux sommets).
*   **Maille conventionnelle :** Plus grande, choisie pour mettre en évidence les symétries du système (ex: cubes centrés ou à faces centrées).

---

## 2. Les Systèmes Cristallins et les Empilements Compacts

### A. Compacité et Masse Volumique

#### Définition : Compacité ($\mathcal{C}$)
La compacité est le rapport du volume occupé par les entités (assimilées à des sphères dures de rayon $R$) dans la maille sur le volume total de la maille $V_{\text{maille}}$ :
$$\mathcal{C} = \frac{V_{\text{occupé}}}{V_{\text{maille}}} = \frac{N \cdot \frac{4}{3}\pi R^3}{V_{\text{maille}}}$$
*(où $N$ est le nombre de motifs effectifs par maille).*

#### Formule : Masse Volumique ($\rho$)
$$\rho = \frac{M \cdot Z}{N_A \cdot V_{\text{maille}}}$$
*   $M$ : Masse molaire ($\text{g}\cdot\text{mol}^{-1}$)
*   $Z$ : Nombre d'entités par maille
*   $N_A$ : Nombre d'Avogadro ($\text{mol}^{-1}$)
*   $V_{\text{maille}}$ : Volume de la maille ($\text{m}^3$)

---

### B. Étude des principaux empilements cubiques

#### 1. Le Système Cubique Simple (CS)
*   **Positions des atomes :** Sommets du cube.
*   **Nombre d'atomes par maille ($Z$) :** $8 \times \frac{1}{8} = 1$.
*   **Relation de contact :** $a = 2R$ (les atomes se touchent le long des arêtes).
*   **Volume de la maille :** $V = a^3 = (2R)^3 = 8R^3$.
*   **Compacité :** 
    $$\mathcal{C} = \frac{1 \times \frac{4}{3}\pi R^3}{8R^3} = \frac{\pi}{6} \approx 0,52 \quad (52\%)$$
*   **Coordination (CNS) :** 6 (chaque sphère a 6 plus proches voisins).
*   *Exemple :* Le Polonium $\alpha$ (rare).

---

#### 2. Le Système Cubique Centré (CC)
*   **Positions des atomes :** Sommets du cube + 1 au centre du cube.
*   **Nombre d'atomes par maille ($Z$) :** $8 \times \frac{1}{8} + 1 = 2$.
*   **Relation de contact :** Le long de la grande diagonale du cube de longueur $4R = a\sqrt{3}$.
    $$a = \frac{4R}{\sqrt{3}}$$
*   **Volume de la maille :** $V = a^3 = \left(\frac{4R}{\sqrt{3}}\right)^3 = \frac{64R^3}{3\sqrt{3}}$.
*   **Compacité :**
    $$\mathcal{C} = \frac{2 \times \frac{4}{3}\pi R^3}{\frac{64R^3}{3\sqrt{3}}} = \frac{\sqrt{3}\pi}{8} \approx 0,68 \quad (68\%)$$
*   **Coordination (CNS) :** 8.
*   *Exemples :* $\text{Fe}_{\alpha}$ (fer a), $\text{Na}$, $\text{W}$.

---

#### 3. Le Système Cubique à Faces Centrées (CFC)
*   **Positions des atomes :** Sommets du cube + centres de chaque face.
*   **Nombre d'atomes par maille ($Z$) :** $8 \times \frac{1}{8} + 6 \times \frac{1}{2} = 4$.
*   **Relation de contact :** Le long de la diagonale d'une face du cube : $4R = a\sqrt{2}$.
    $$a = \frac{4R}{\sqrt{2}} = 2R\sqrt{2}$$
*   **Volume de la maille :** $V = a^3 = (2R\sqrt{2})^3 = 16\sqrt{2}R^3$.
*   **Compacité :**
    $$\mathcal{C} = \frac{4 \times \frac{4}{3}\pi R^3}{16\sqrt{2}R^3} = \frac{\pi\sqrt{2}}{6} \approx 0,74 \quad (74\%)$$
Note: C'est la compacité maximale pour des sphères identiques (empilement compact).*
*   **Coordination (CNS) :** 12.
*   *Exemples :* $\text{Cu}$, $\text{Al}$, $\text{Ag}$, $\text{Au}$ (métaux ductiles).

---

## 3. Cristaux Ioniques et Structures Référentes

Un cristal ionique est constitué d'anions et de cations assurant la **neutralité électrique** globale de la maille. Souvent, les anions (plus volumineux) forment un réseau hôte (souvent CFC) et les cations (plus petits) s'insèrent dans les **sites interstitiels** (octaédriques ou tétraédriques).

### A. Sites interstitiels dans une maille CFC
*   **Site tétraédrique :** Au centre d'un tétraèdre formé par 4 sphères. Il y a **8 sites tétraédriques** par maille CFC.
*   **Site octaédrique :** Au centre d'un octaèdre formé par 6 sphères (au centre du cube et au milieu de chaque arête). Il y a **4 sites octaédriques** par maille CFC.

### B. Exemples fondamentaux

#### 1. Structure Chlorure de Sodium ($\text{NaCl}$)
*   **Description :** Les ions $\text{Cl}^-$ forment un réseau CFC. Les ions $\text{Na}^+$ (plus petits) occupent **tous les sites octaédriques**.
*   **Stœchiométrie :** 
    *   $\text{Cl}^- :$ $8 \times \frac{1}{8} (sommet) + 6 \times \frac{1}{2} (faces) = 4$
    *   $\text{Na}^+ :$ $12 \times \frac{1}{4} (arêtes) + 1 \times 1 (centre) = 4$
    *   Formule par maille : $\text{Na}_4\text{Cl}_4 \implies \text{NaCl}$.
*   **Coordinations :** $\text{CN}(\text{Na}^+) = 6$ et $\text{CN}(\text{Cl}^-) = 6$ (coordination 6:6).

#### 2. Structure Chlorure de Césium ($\text{CsCl}$)
*   **Description :** Les ions $\text{Cl}^-$ occupent les sommets d'un cube (réseau CS) et l'ion $\text{Cs}^+$ est au centre du cube. *(Attention : ce n'est pas un réseau CC car les atomes aux sommets et au centre sont différents).*
*   **Stœchiométrie :** $\text{Cs}^- : 1$ ; $\text{Cl}^+ : 1 \implies \text{CsCl}$.
*   **Coordinations :** $\text{CN}(\text{Cs}^+) = 8$ et $\text{CN}(\text{Cl}^-) = 8$ (coordination 8:8).

---

## Méthodes et Savoir-Faire

1.  **Dénombrer les atomes d'une maille :**
    *   Sommet : $\frac{1}{8}$
    *   Arête : $\frac{1}{4}$
    *   Face : $\frac{1}{2}$
    *   Intérieur : $1$
2.  **Exprimer la relation de contact $a = f(R)$ :** Toujours faire un schéma géométrique propre de la coupe pertinente (diagonale de face ou du cube) pour appliquer le théorème de Pythagore. Ne jamais admettre la formule sans justification.

---

## Pièges à Éviter en DS

*   **Confondre CC et structure $\text{CsCl}$ :** Dans le CC, tous les atomes sont de même nature. Dans $\text{CsCl}$, l'atome central est différent des atomes aux sommets.
*   **Erreur d'unités dans $\rho$ :** Homogénéiser les unités avant calcul ($a$ en $\text{cm}$ ou $\text{m}$, $R$ dans la même unité, $M$ en $\text{g}\cdot\text{mol}^{-1}$, $\rho$ en $\text{g}\cdot\text{cm}^{-3}$ ou $\text{kg}\cdot\text{m}^{-3}$).
*   **Oublier la condition de stoéchiométrie :** Le nombre d'ions par maille doit respecter strictement la formule chimique du cristal (ex: autant de $\text{Na}^+$ que de $\text{Cl}^-$).