---
title: 'Cours : Procédés d industrialisation et Spécification GPS'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Procédés d'industrialisation et Spécification GPS
**Filière :** CPGE PT — Sciences Industrielles pour l'Ingénieur (SII)  
Niveau: ** Deuxième année  

---

## Introduction

En CPGE PT, l'ingénieur doit être capable de concevoir un produit, mais aussi de définir les conditions de sa fabrication et de garantir sa conformité fonctionnelle. Ce diptyque associe l'analyse des **procédés d'industrialisation** (obtention des formes brutes et usinage) à la **Spécification Géométrique des Produits (GPS)**, indispensable pour formaliser les exigences fonctionnelles et tolérancer les pièces.

---

## Partie I : Procédés d'obtention des formes et industrialisation

### 1. Classification des procédés
L'élaboration d'une pièce mécanique passe par l'obtention d'un brut, suivie généralement par des opérations de finition. On distingue :
* **Les procédés par enlèvement de matière (usinage) :** Tournage, fraisage, perçage, rectifiage. Permettent d'obtenir des précisions élevées ($IT 6$ à $IT 8$) et des états de surface fins, mais génèrent des coûts et des pertes de matière importants.
* **Les procédés par addition de matière :** Fabrication additive (impression 3D métallique), soudage.
* **Les procédés par matriçage / forgeage / fonderie :** Déformation plastique ou solidification en moule. Le brut épouse approximativement la forme finale, minimisant l'usinage ultérieur.

### 2. Contrat de phase et isostatisme
En usinage, la mise en position (MIP) et le maintien en position (MAP) d'une pièce dans un porte-pièce garantissent l'exactitude des cotes réalisées. On applique le principe de l'isostatisme (élimination des $6$ degrés de liberté d'un solide dans l'espace).

* **L'isostatisme parfait :** Chaque liaison supprime un ou plusieurs degrés de liberté sans surcontrainte.
* **La liaison appui plan :** Bloque $3$ degrés de liberté (une translation et deux rotations).
* **La liaison centrage court :** Bloque $2$ degrés de liberté (deux translations).
* **La liaison centrage long :** Bloque $4$ degrés de liberté (deux translations et deux rotations).

$$\text{Nombre de degrés de liberté restants} = 6 - \sum (\text{Degrés bloqués par les liaisons effectives})$$

---

## Partie II : Spécification Géométrique des Produits (GPS)

La norme ISO GPS remplace l'ancienne cotation tolérancée. Elle définit des zones de tolérance géométrique pour s'affranchir des incertitudes de fabrication et garantir l'interchangeabilité.

### 1. Élément géométrique et référence
* **Élément spécifié :** Surface, ligne ou point sur lequel porte la tolérance.
* **Élément de référence (Référence spécifiée) :** Élément géométrique théorique parfait désigné pour établir une relation avec l'élément spécifié (système de références spécifiées).

### 2. Principales caractéristiques tolérancées (Normes ISO 1101)

| Type de tolérance | Caractéristique | Symbole | Zone de tolérance |
| :--- | :--- | :---: | :--- |
| **Forme** | Rectitude | $-$ | Entre deux droites parallèles distantes de $t$ |
| | Planéité | $\square$ | Entre deux plans parallèles distants de $t$ |
| | Circularité | $\bigcirc$ | Entre deux cercles concentriques distants de $t$ |
| **Orientation** | Parallélisme | $\parallel$ | Entre deux plans parallèles à la référence distants de $t$ |
| | Perpendicularité | $\perp$ | Entre deux plans perpendiculaires à la référence distants de $t$ |
| **Position** | Localisation | $\lfloor\oplus\rfloor$ | Cylindre ou zone centrée sur la position théorique exacte |
| **Battement** | Battement circulaire | $\nearrow$ | Variation radiale ou axiale lors d'un tour complet |

### 3. Le principe de l'enveloppe (Exigence maximale)
Sauf indication contraire (symbole $\text{E}$ ou $\text{MMR}$), le principe de l'enveloppe s'applique : **l'enveloppe de forme parfaite à la dimension maximale de la matière (MMC) ne doit pas être dépassée.**

---

## Partie III : Chaînes de cotes et transferts de cotes

Le calcul des chaînes de cotes permet de valider la fabricabilité d'une pièce en vérifiant si les tolérances géométriques et dimensionnelles sont compatibles avec les procédés choisis.

### 1. Méthode algébrique (au pire des cas)
Soit une cote conditionnelle $A$ résultant de la somme de $n$ cotes composantes $X_i$ :

$$A = \sum_{i=1}^{n} \alpha_i X_i \quad (\text{avec } \alpha_i = +1 \text{ ou } -1)$$

Les relations sur les limites et les intervalles de tolérance ($IT$) sont :
* $A_{\text{max}} = \sum (\text{composantes au max ou au min selon le signe})$
* $A_{\text{min}} = \sum (\text{composantes au min ou au max selon le signe})$
* $\text{IT}(A) = \sum \text{IT}(X_i)$

### 2. Transfert de cotes (Application usinage)
Le transfert de cotes est indispensable pour déterminer la cote fabrication ($CF$) à partir de la cote dessin de définition ($CD$) et de la cote brute ($CB$).

$$\text{Équation vectorielle : } \vec{CD} = \vec{CB} + \vec{CF}$$

On en déduit les cotes moyennes et les répartitions d'intervalles de tolérance pour le réglage de la machine-outil.

---

## Synthèse / Mémento pour l'épreuve de PT

1. **Toujours identifier le brut** avant de coter les phases d'usinage.
2. **Vérifier l'isostatisme** sur les schémas de mise en position (symbole normalisé).
3. **Respecter la syntaxe ISO** dans les cadres de tolérancement (Caractéristique, Valeur de la tolérance en $\text{mm}$, Références le cas échéant).
4. **Attention aux unités** dans les calculs de chaînes de cotes : homogénéiser systématiquement en $\text{mm}$ ou en $\mu\text{m}$.