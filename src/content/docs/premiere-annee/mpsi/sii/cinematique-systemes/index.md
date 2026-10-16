---
title: 'Cours : Cinématique des systèmes'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

La cinématique a pour objet l'étude du mouvement des systèmes matériels en fonction du temps, indépendamment des causes qui les produisent (forces et moments).

### 1.1. Notion de Référentiel et de Repère
*   **Référentiel $\mathcal{R}$ :** Ensemble indformable associé à un solide de référence, muni d'une base orthonormée directe $\mathcal{B} = (\vec{x}, \vec{y}, \vec{z})$.
*   **Repère d'espace :** Dééfini par un origine $O$ et une base $\mathcal{B}$.
*   **Repère de temps :** Échelle des temps permettant de dater les événements.

### 1.2. Champ des vitesses d'un solide indéformable
Soit un solide $S$ en mouvement par rapport à un référentiel $\mathcal{R}_0$. Le champ des vecteurs vitesse $\vec{V}_{S/\mathcal{R}_0}(P)$ d'un point $P \in S$ est caractérisé par l'existence d'un vecteur rotation instantanée, noté $\vec{\Omega}_{S/\mathcal{R}_0}$, tel que pour tout couple de points $(A, B)$ appartenant au solide $S$ :

$$\vec{V}_{S/\mathcal{R}_0}(B) = \vec{V}_{S/\mathcal{R}_0}(A) + \vec{\Omega}_{S/\mathcal{R}_0} \wedge \vec{AB}$$

Cette relation fondamentale traduit le fait que le champ des vitesses d'un solide indéformable est un **champ équiprojectif**.

### 1.3. Cinématique du point matériel et compositions
*   **Vitesse absolue :** $\vec{V}_{M/\mathcal{R}_0} = \left( \frac{d\vec{OM}}{dt} \right)_{\mathcal{R}_0}$
*   **Accélération absolue :** $\vec{\Gamma}_{M/\mathcal{R}_0} = \left( \frac{d^2\vec{OM}}{dt^2} \right)_{\mathcal{R}_0}$

#### Loi de composition des vitesses
Soit un point $M$ en mouvement dans un référentiel $\mathcal{R}_1$, lui-même en mouvement par rapport à un référentiel absolu $\mathcal{R}_0$ :

$$\vec{V}_{M/\mathcal{R}_0} = \vec{V}_{M/\mathcal{R}_1} + \vec{V}_{e}(M \in \mathcal{R}_1/\mathcal{R}_0)$$

Où $\vec{V}_{e}(M \in \mathcal{R}_1/\mathcal{R}_0) = \vec{V}_{O_1/\mathcal{R}_0} + \vec{\Omega}_{\mathcal{R}_1/\mathcal{R}_0} \wedge \vec{O_1M}$ est la **vitesse d'entraînement**.

#### Loi de composition des accélérations
$$\vec{\Gamma}_{M/\mathcal{R}_0} = \vec{\Gamma}_{M/\mathcal{R}_1} + \vec{\Gamma}_{e}(M) + \vec{\Gamma}_{c}(M)$$

*   $\vec{\Gamma}_{e}(M) = \left( \frac{d^2\vec{O_1M}}{dt^2} \right)_{\mathcal{R}_0} = \vec{\Gamma}_{O_1/\mathcal{R}_0} + \frac{d\vec{\Omega}_{\mathcal{R}_1/\mathcal{R}_0}}{dt} \wedge \vec{O_1M} + \vec{\Omega}_{\mathcal{R}_1/\mathcal{R}_0} \wedge (\vec{\Omega}_{\mathcal{R}_1/\mathcal{R}_0} \wedge \vec{O_1M})$ : **Accélération d'entraînement**.
*   $\vec{\Gamma}_{c}(M) = 2 \vec{\Omega}_{\mathcal{R}_1/\mathcal{R}_0} \wedge \vec{V}_{M/\mathcal{R}_1}$ : **Accélération de Coriolis**.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Dérivation vectorielle dans un référentiel en mouvement (Formule de Varignon / Dérivation de Bour)
Soit $\vec{X}(t)$ un vecteur quelconque fonction du temps, et deux référentiels $\mathcal{R}_0$ (absolu, base $\mathcal{B}_0$) et $\mathcal{R}_1$ (relatif, base $\mathcal{B}_1$).

$$\left( \frac{d\vec{X}}{dt} \right)_{\mathcal{R}_0} = \left( \frac{d\vec{X}}{dt} \right)_{\mathcal{R}_1} + \vec{\Omega}_{\mathcal{R}_1/\mathcal{R}_0} \wedge \vec{X}$$

#### Démonstration :
Soit la base $\mathcal{B}_1 = (\vec{u}, \vec{v}, \vec{w})$ liée à $\mathcal{R}_1$. Définissons le vecteur $\vec{X}$ dans cette base :
$$\vec{X}(t) = X_1(t)\vec{u} + X_2(t)\vec{v} + X_3(t)\vec{w}$$

Dérivons par rapport au temps dans $\mathcal{R}_0$ :
$$\left( \frac{d\vec{X}}{dt} \right)_{\mathcal{R}_0} = \dot{X}_1\vec{u} + \dot{X}_2\vec{v} + \dot{X}_3\vec{w} + X_1\left( \frac{d\vec{u}}{dt} \right)_{\mathcal{R}_0} + X_2\left( \frac{d\vec{v}}{dt} \right)_{\mathcal{R}_0} + X_3\left( \frac{d\vec{w}}{dt} \right)_{\mathcal{R}_0}$$

Par définition de la dérivation d'un vecteur unitaire d'une base liée à un solide en rotation par rapport à $\mathcal{R}_0$ :
$$\left( \frac{d\vec{u}}{dt} \right)_{\mathcal{R}_0} = \vec{\Omega}_{\mathcal{R}_1/\mathcal{R}_0} \wedge \vec{u}, \quad \left( \frac{d\vec{v}}{dt} \right)_{\mathcal{R}_0} = \vec{\Omega}_{\mathcal{R}_1/\mathcal{R}_0} \wedge \vec{v}, \quad \left( \frac{d\vec{w}}{dt} \right)_{\mathcal{R}_0} = \vec{\Omega}_{\mathcal{R}_1/\mathcal{R}_0} \wedge \vec{w}$$

En remplaçant :
$$\left( \frac{d\vec{X}}{dt} \right)_{\mathcal{R}_0} = \underbrace{\dot{X}_1\vec{u} + \dot{X}_2\vec{v} + \dot{X}_3\vec{w}}_{\left( \frac{d\vec{X}}{dt} \right)_{\mathcal{R}_1}} + \vec{\Omega}_{\mathcal{R}_1/\mathcal{R}_0} \wedge (X_1\vec{u} + X_2\vec{v} + X_3\vec{w})$$

Ce qui démontre la formule :
$$\left( \frac{d\vec{X}}{dt} \right)_{\mathcal{R}_0} = \left( \frac{d\vec{X}}{dt} \right)_{\mathcal{R}_1} + \vec{\Omega}_{\mathcal{R}_1/\mathcal{R}_0} \wedge \vec{X} \quad \blacksquare$$

### 2.2. Champ des vitesses des torseurs cinématiques
Le champ des vitesses d'un solide $S$ par rapport à $\mathcal{R}_0$ est un torseur, appelé **torseur cinématique** :
$$\{\mathcal{V}_{S/\mathcal{R}_0}\} = \begin{Bmatrix} \vec{\Omega}_{S/\mathcal{R}_0} \\ \vec{V}_{P \in S/\mathcal{R}_0} \end{Bmatrix}_P$$

L'équiprojectivité se traduit par l'invariant scalaire nul (ou transport des moments) :
$$\vec{V}_{B \in S/\mathcal{R}_0} = \vec{V}_{A \in S/\mathcal{R}_0} + \vec{\Omega}_{S/\mathcal{R}_0} \wedge \vec{AB}$$

---

## 💡 3. Méthodes classiques de résolution

### 3.1. Fermeture géométrique et cinématique (Dérivation)
Pour l'étude d'un mécanisme (ex. : chaîne de solides bouclée) :
1.  Établir une ou plusieurs fermetures vectorielles géométriques (ex. $\vec{OA} + \vec{AB} + \vec{BO} = \vec{0}$).
2.  Projeter ces relations dans une base bien choisie pour obtenir des équations scalaires de liaison.
3.  Dériver ces équations par rapport au temps dans le référentiel galiléen pour obtenir des relations entre vitesses (linéaires et angulaires).

### 3.2. Utilisation du Centre Instantané de Rotation (CIR) en plan (2D)
Dans le cas d'un mouvement plan (les vitesses sont toutes portées par le même plan orthogonal à $\vec{z}$ et $\vec{\Omega} = \Omega \vec{z}$) :
*   Il existe un point $I$, appelé **CIR**, où la vitesse est nulle : $\vec{V}_{I \in S/\mathcal{R}_0} = \vec{0}$.
*   Pour tout point $M$ du solide :
    $$\vec{V}_{M \in S/\mathcal{R}_0} = \vec{\Omega}_{S/\mathcal{R}_0} \wedge \vec{IM}$$
*   **Méthode de recherche du CIR :**
    *   Intersection des normales aux trajectoires de deux points du solide.
    *   Intersection des supports des vecteurs vitesse de deux points distincts (si les vitesses ne sont pas parallèles).
    *   Si les vitesses de deux points sont parallèles et perpendiculaires à la droite joignant ces points, le CIR se trouve sur cette droite (théorème des trois centres alignés de Kennedy-Aronhold pour trois solides en mouvement relatif).

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Oubli du terme de Coriolis dans les accélérations :**
    Ne jamais appliquer brutalement $\vec{\Gamma}_{M/\mathcal{R}_0} = \vec{\Gamma}_{M/\mathcal{R}_1} + \vec{\Gamma}_{e}(M)$ lorsque le point $M$ est en mouvement dans le référentiel relatif $\mathcal{R}_1$ et que $\mathcal{R}_1$ est en rotation ($\vec{\Omega}_{\mathcal{R}_1/\mathcal{R}_0} \neq \vec{0}$). Le terme $2 \vec{\Omega}_{\mathcal{R}_1/\mathcal{R}_0} \wedge \vec{V}_{M/\mathcal{R}_1}$ est systématiquement requis.
2.  **Confusion entre dérivation vectorielle et scalaire :**
    Dériver un vecteur unitaire $\vec{u}(t)$ lié à un repère mobile en écrivant $\frac{d\vec{u}}{dt} = \vec{0}$ est une erreur éliminatoire. Il faut impérativement utiliser la formule de Bour.
3.  **Utilisation abusive du CIR en 3D :**
    Le Centre Instantané de Rotation n'existe **pas** en mouvement tridimensionnel général (où l'on parle d'axe instantané de rotation et de glissement, ou « axoïde »). Le formalisme du CIR est strictement restreint à la cinématique plane.
4.  **Inversion des indices dans la composition :**
    Respecter strictement l'homogénéité des indices lors de la composition des vitesses :
    $$\vec{V}_{3/0} = \vec{V}_{3/2} + \vec{V}_{2/1} + \vec{V}_{1/0}$$
    Vérifier la chaîne de composition (ici : $3 \leftarrow 2 \leftarrow 1 \leftarrow 0$).