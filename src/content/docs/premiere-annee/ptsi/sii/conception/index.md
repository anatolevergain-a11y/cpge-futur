---
title: 'Cours : Conception mécanique'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Conception Mécanique (PTSI - S2I)

---

## 1. Introduction et Objectifs de la Conception Mécanique

La conception mécanique regroupe l'ensemble des activités qui permettent de passer d'un besoin exprimé à un produit industrialisable, capable de satisfaire des exigences fonctionnelles, économiques et environnementales. En classe de PTSI, l'approche se focalise sur la modélisation, le choix des solutions constructives, l'analyse critique des liaisons et l'aptitude à l'assemblage (cotation toléracée).

---

## 2. Analyse Fonctionnelle et Expression du Besoin

### 2.1. Définitions
*   **Système :** Ensemble d'éléments en interaction organisés en vue de la réalisation d'une fonction globale.
*   **Milieu extérieur :** Ensemble des éléments anthropiques ou naturels qui agissent sur le système ou sur lesquels le système agit.
*   **Fonction de Service (FS) :** Action attendue du système (ou d'un de ses constituants) pour répondre à un besoin de l'utilisateur.

### 2.2. Outils d'analyse
*   **Diagramme "Bête à cornes" :** Outil permettant de valider l'expression du besoin en répondant aux questions : *À qui rend-il service ? / Sur quoi agit-il ? / Dans quel but ?*
*   **Diagramme des interacteurs (Pieuvre) :** Permet de recenser les Fonctions Principales (FP, reliant deux éléments du milieu extérieur via le système) et les Fonctions Contraintes (FC, imposées par un élément du milieu extérieur).

---

## 3. Les Liaisons Mécaniques et Modélisation

### 3.1. Théorème de l'équivalence des liaisons (Graphe des liaisons)
Pour modéliser un mécanisme, on utilise un graphe des liaisons orienté ou non, reliant les classes d'équivalence cinématique (CEC).

> **Définition (Classe d'équivalence cinématique) :** Ensemble des pièces d'un mécanisme en liaison rigide (immobiles les unes par rapport aux autres).

### 3.2. Tableau de Synthèse des Liaisons Élémentaires (3D)

| Nom de la liaison | Centre / Axe | Torseur cinématique $\left\{\mathcal{V}_{\text{solid 1/solid 2}}\right\}$ | Torseur statique $\left\{\mathcal{T}_{\text{solid 2}\to\text{solid 1}}\right\}$ |
| :--- | :--- | :--- | :--- |
| **Pivot** | Axe $(\text{O}, \vec{x})$ | $\begin{Bmatrix} \omega_x & 0 \\ 0 & 0 \\ 0 & 0 \end{Bmatrix}_{\text{O}, (\vec{x}, \vec{y}, \vec{z})}$ | $\begin{Bmatrix} X & L \\ 0 & M \\ 0 & N \end{Bmatrix}_{\text{O}, (\vec{x}, \vec{y}, \vec{z})}$ |
| **Glissière** | Axe $(\text{O}, \vec{x})$ | $\begin{Bmatrix} 0 & v_x \\ 0 & 0 \\ 0 & 0 \end{Bmatrix}_{\text{O}, (\vec{x}, \vec{y}, \vec{z})}$ | $\begin{Bmatrix} 0 & L \\ Y & M \\ Z & N \end{Bmatrix}_{\text{O}, (\vec{x}, \vec{y}, \vec{z})}$ |
| **Pivot d'axe** | Axe $(\text{O}, \vec{x})$ | $\begin{Bmatrix} \omega_x & v_x \\ 0 & 0 \\ 0 & 0 \end{Bmatrix}_{\text{O}, (\vec{x}, \vec{y}, \vec{z})}$ | $\begin{Bmatrix} X & L \\ 0 & M \\ 0 & N \end{Bmatrix}_{\text{O}, (\vec{x}, \vec{y}, \vec{z})}$ |
| **Sphérique (Rotule)** | Centre $\text{O}$ | $\begin{Bmatrix} \omega_x & 0 \\ \omega_y & 0 \\ \omega_z & 0 \end{Bmatrix}_{\text{O}, (\vec{x}, \vec{y}, \vec{z})}$ | $\begin{Bmatrix} X & 0 \\ Y & 0 \\ Z & 0 \end{Bmatrix}_{\text{O}, (\vec{x}, \vec{y}, \vec{z})}$ |
| **Appui plan** | Normale $(\text{O}, \vec{z})$ | $\begin{Bmatrix} \omega_x & 0 \\ \omega_y & 0 \\ 0 & v_z \end{Bmatrix}_{\text{O}, (\vec{x}, \vec{y}, \vec{z})}$ | $\begin{Bmatrix} 0 & 0 \\ 0 & 0 \\ Z & L \\ M \end{Bmatrix}_{\text{O}, (\vec{x}, \vec{y}, \vec{z})}$ |

---

## 4. Solutions Constructives et Guidages

### 4.1. Guidage en rotation
Le choix d'un guidage en rotation dépend de la charge (radiale, axiale), de la vitesse de rotation et des conditions environnementales.
*   **Paliers lisses (bagues de frottement) :** Contact direct (bronze, PTFE). Avantages : compacts, silencieux, économiques. Inconvénients : coefficient de frottement plus élevé, usure.
*   **Roulements (éléments roulants) :** Bille ou rouleaux.
    *   *Roulements à billes à contact radial :* Supportent des charges radiales et de faibles charges axiales.
    *   *Roulements à contacts coniques :* Montés par opposition (montage en O ou en X), supportent des charges combinées importantes.

> **Méthode (Choix du montage des roulements) :**
> *   **Montage en O (lignes de contact convergentes vers l'extérieur) :** Meilleure rigidité au basculement. Utilisé lorsque l'écart entre les charges est faible.
> *   **Montage en X (lignes de contact convergentes vers l'intérieur) :** Moins rigide au basculement, tolérant aux défauts d'alignement.

### 4.2. Étanchéité
*   **Étanchéité statique :** Joints toriques, pâte à joint. Pas de mouvement relatif entre les surfaces.
*   **Étanchéité dynamique :** Joints à lèvres (type Simmerring), labyrinthes. Nécessite une lubrification de la lèvre pour éviter l'usure prématurée.

---

## 5. Tolérancement et Ajustements (ISO)

Pour garantir l'interchangeabilité des pièces et le bon fonctionnement des liaisons, les côtes nominales sont associées à des tolérances.

### 5.1. Définitions fondamentales
*   **Cote nominale ($D$ ou $d$) :** Cote de référence servant de point de départ.
*   **Écarts :** Différence entre la cote effective/limite et la cote nominale.
    *   $ES$ ou $es$ : Écart supérieur.
    *   $EI$ ou $ei$ : Écart inférieur.
*   **Intervalle de Tolérance ($IT$) :** $IT = ES - EI$ (ou $es - ei$). C'est la variation maximale tolérée.

### 5.2. Les Ajustements
Un ajustement caractérise l'assemblage de deux pièces cylindriques (un arbre et un alésage).

*   **Jeu ($J$) :** Si l'alésage est toujours plus grand que l'arbre ($J_{\min} > 0$).
*   **Serrage ($S$) :** Si l'arbre est toujours plus grand que l'alésage ($S_{\min} > 0$).
*   **Ajustement incertain :** Possibilité de jeu ou de serrage selon les pièces fabriquées.

> **Notation normalisée :** Un alésage est noté par une lettre majuscule suivie d'un chiffre (ex: $\text{H7}$), et un arbre par une lettre minuscule suivie d'un chiffre (ex: $\text{g6}$).
> *   *Système à alésage normal :* L'alésage de référence est $\text{H}$ ($\text{EI} = 0$).
> *   *Système à arbre normal :* L'arbre de référence est $\text{h}$ ($\text{es} = 0$).

---

## 6. Pièges à Éviter (Alerte Colles & Concours)

1.  **Hyperstatisme inutile :** Ne jamais sur-contraindre une liaison sans justification fonctionnelle (ex: doubler un guidage en rotation par deux roulements espacés *sans* rotule ou sans jeu engendre un isostatisme détruit par les dilatations thermiques).
2.  **Sens du montage des roulements coniques :** Confondre le montage en O et en X conduit à une instabilité géométrique du montage.
3.  **Confusion Alésage/Arbre dans les notations :** Les majuscules désignent toujours l'alésage (pièce enveloppante), les minuscules désignent l'arbre (pièce enveloppée).
4.  **Calcul d'IT :** Attention au signe lors du calcul de l'intervalle de tolérance. Un $IT$ est **toujours strictement positif**.