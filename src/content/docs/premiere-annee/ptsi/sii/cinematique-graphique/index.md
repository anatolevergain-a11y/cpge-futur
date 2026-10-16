---
title: 'Cours : Cinématique du solide rigide'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Cinématique du Solide Rigide
**Filière :** PTSI — **Matière :** Sciences Industrielles de l'Ingénieur (SII)  
Niveau: ** Première année  

---

## 1. Introduction et Définitions Fondamentales

### 1.1. Notion de solide rigide
Un solide $S$ est dit indéformable (ou rigide) si la distance entre deux points quelconques $P$ et $Q$ appartenant à ce solide reste constante au cours du temps :
$$\forall (P, Q) \in S^2, \quad \frac{d}{dt} \| \overrightarrow{PQ} \| = 0$$

### 1.2. Représentation d'un mouvement
*   **Référentiel galiléen ou repère lié :** On associe à chaque solide $S_i$ un repère orthonormé direct $\mathcal{R}_i (O_i, \vec{x}_i, \vec{y}_i, \vec{z}_i)$.
*   **Mouvement de $S_1$ par rapport à $S_0$ (noté $\mathcal{M}(S_1/S_0)$) :** C'est l'ensemble des positions occupées par le solide $S_1$ au cours du temps dans le repère $\mathcal{R}_0$ lié à $S_0$.

---

## 2. Champ des Vecteurs Vitesse dans un Solide

### 2.1. Vecteur taux de rotation (ou vecteur vitesse de rotation)
**Théorème (Fondamental) :** Soit un solide $S_1$ en mouvement par rapport à $S_0$. Il existe un unique vecteur, noté $\vec{\Omega}(S_1/S_0)$, appelé vecteur taux de rotation du solide $S_1$ par rapport à $S_0$, tel que pour tout couple de points $A$ et $B$ appartenant au solide $S_1$, la relation de transport des vitesses s'écrit :

$$\vec{V}(B \in S_1/S_0) = \vec{V}(A \in S_1/S_0) + \vec{\Omega}(S_1/S_0) \wedge \overrightarrow{AB}$$

> **Attention (Piège classique) :** Ce champ de vitesse est *équiprojective*. Pour tout $A$ et $B$ du solide :
> $$\vec{V}(A \in S_1/S_0) \cdot \overrightarrow{AB} = \vec{V}(B \in S_1/S_0) \cdot \overrightarrow{AB}$$

---

## 3. Cinématique du Point et Dérivation Vectorielle

### 3.1. Composition des mouvements
Soient trois solides (ou repères) $S_1$, $S_2$ et $S_3$.
*   **Addition des vitesses de rotation :**
    $$\vec{\Omega}(S_3/S_1) = \vec{\Omega}(S_3/S_2) + \vec{\Omega}(S_2/S_1)$$

*   **Composition des vitesses d'un point $M$ :**
    $$\vec{V}(M \in S_3/S_1) = \vec{V}(M \in S_3/S_2) + \vec{V}(M \in S_2/S_1)$$
    *   $\vec{V}(M \in S_3/S_1)$ : Vitesse absolue.
    *   $\vec{V}(M \in S_3/S_2)$ : Vitesse relative.
    *   $\vec{V}(M \in S_2/S_1)$ : Vitesse d'entraînement.

---

## 4. Torseurs Cinématiques

### 4.1. Définition du torseur cinématique
L'ensemble des champs de vitesses d'un solide indéformable $S_1$ par rapport à un repère $S_0$ a une structure de torseur. On le note $\left\{ \mathcal{V}(S_1/S_0) \right\}$.

En un point $P$, il se représente par :
$$\left\{ \mathcal{V}(S_1/S_0) \right\}_P = \begin{Bmatrix} \vec{\Omega}(S_1/S_0) \\ \vec{V}(P \in S_1/S_0) \end{Bmatrix}_P$$
*   Résultante : Le vecteur taux de rotation $\vec{\Omega}(S_1/S_0)$.
*   Moment : Le vecteur vitesse $\vec{V}(P \in S_1/S_0)$.

### 4.2. Propriété de transport des moments
Pour deux points $A$ et $B$ du solide $S_1$ :
$$\vec{V}(B \in S_1/S_0) = \vec{V}(A \in S_1/S_0) + \overrightarrow{BA} \wedge \vec{\Omega}(S_1/S_0)$$

---

## 5. Étude des Mouvements Particuliers (Programme PTSI)

### 5.1. Mouvement de translation
Un solide $S_1$ est en translation par rapport à $S_0$ si tout segment tracée sur $S_1$ garde une direction constante dans $S_0$.
*   **Caractérisation :** $\vec{\Omega}(S_1/S_0) = \vec{0}$
*   **Conséquence :** Le champ des vitesses est uniforme :
    $$\forall (A,B) \in S_1^2, \quad \vec{V}(A \in S_1/S_0) = \vec{V}(B \in S_1/S_0)$$

### 5.2. Mouvement de rotation autour d'un axe fixe ($\Delta$)
Un solide $S_1$ est en rotation autour d'un axe fixe $(\Delta)$ lié à $S_0$ si tous les points du solide décrivent des cercles centrés sur $(\Delta)$, hormis les points de $(\Delta)$ qui sont immobiles.
*   **Caractérisation :** Soit $\vec{u}$ le vecteur directeur unitaire de l'axe $(\Delta)$ :
    $$\vec{\Omega}(S_1/S_0) = \dot{\theta}(t) \vec{u}$$
    *(où $\theta$ est l'angle de rotation en \text{rad}).*
*   **Vitesse d'un point $M$ de distance $r$ à l'axe :**
    $$\| \vec{V}(M \in S_1/S_0) \| = r \cdot \dot{\theta}$$

### 5.3. Mouvement plan sur plan (ou plan)
Un mouvement est dit plan si tous les points de $S_1$ décrivent des trajectoires contenues dans des plans parallèles à un même plan fixe de $\mathcal{R}_0$, et si $\vec{\Omega}(S_1/S_0)$ est orthogonal à ce plan.
*   **Caractérisation :** 
    $$\vec{\Omega}(S_1/S_0) = \dot{\theta}(t) \vec{z}_0$$
    et pour tout point $M$ du plan du mouvement, $\vec{V}(M \in S_1/S_0) \cdot \vec{z}_0 = 0$.

---

## 6. Outils et Méthodes pour les Concipes

### 6.1. Recherche du Centre Instantané de Rotation (CIR)
Dans un mouvement plan sur plan, à tout instant $t$, il existe un point $I$ du plan (ou du solide prolongé) dont la vitesse est nulle : $\vec{V}(I \in S_1/S_0) = \vec{0}$. $I$ est appelé **Centre Instantané de Rotation (CIR)**.

*   **Méthodes de détermination géométrique du CIR ($I$) :**
    1.  **Connaissance de deux vecteurs vitesses non colinéaires :** $I$ est à l'intersection des perpendiculaires aux vecteurs vitesses passant par leurs points d'application respectifs.
    2.  **Trajectoire connue d'un point :** Le CIR se trouve sur la droite perpendiculaire à la trajectoire (donc portée par la normale) passant par ce point.
    3.  **Roulement sans glissement (R.S.G.) :** Le point de contact $C$ entre deux solides en contact ponctuel est nécessairement le CIR du mouvement relatif du solide 1 par rapport au solide 2 : $\vec{V}(C \in S_1/S_2) = \vec{0}$.

> **Piège à éviter :** Le CIR est *instantané*. Il change de position au cours du temps, tant dans le repère fixe (base) que dans le repère mobile (roulante). Ne l'utilisez pas pour intégrer des positions sur une durée finie !

---

## 7. Synthèse des Liaisons Usuelles et de leurs Torseurs Cinématiques
Rappel: Base locale $( \vec{x}, \vec{y}, \vec{z} )$ au point $A$ centre de la liaison.*

| Liaison | $\vec{\Omega}(1/0)$ (Rotations permises) | $\vec{V}(A \in 1/0)$ (Translations permises) |
| :--- | :--- | :--- |
| **Pivot** (axe $\vec{x}$) | $\dot{\theta} \vec{x}$ | $\vec{0}$ |
| **Glissière** (axe $\vec{x}$) | $\vec{0}$ | $\dot{x} \vec{x}$ |
| **Pivot glissant** (axe $\vec{x}$) | $\dot{\theta} \vec{x}$ | $\dot{x} \vec{x}$ |
| **Rotule** (Centre $A$) | $\omega_x \vec{x} + \omega_y \vec{y} + \omega_z \vec{z}$ | $\vec{0}$ |
| **Appui plan** (normale $\vec{z}$) | $\omega_x \vec{x} + \omega_y \vec{y}$ | $v_x \vec{x} + v_y \vec{y}$ |