---
title: 'Cours : Procédés de fabrication'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Procédés de fabrication
**Filière :** PTSI (Sciences Industrielles de l'Ingénieur)  
Niveau: ** Première année  

---

## Introduction et Objectifs du Chapitre

En tant que futur ingénieur, la conception d'un système mécanique ne peut s'affranchir de la connaissance de sa fabrication. Le choix d'un **procédé de fabrication** conditionne directement la géométrie de la pièce, sa précision, ses états de surface, ses propriétés mécaniques et son coût économique. 

L'objectif de ce chapitre est de classifier, comprendre et modéliser les grands procédés de mise en forme et d'enlèvement de matière vus en PTSI.

---

## 1. Classification générale des procédés

Un produit brut est transformé en produit fini (ou semi-fini) par l'intermédiaire de flux de matière. On classe traditionnellement les procédés en quatre grandes familles :

1. **Procédés par Élaboration (ou par addition/fonderie) :** Obtenus par solidification (moulage).
2. **Procédés par Déformation plastique (ou forgeage/mise en forme) :** Conservation de la masse, modification de la géométrie par plasticité.
3. **Procédés par Enlèvement de matière (usinage) :** Retrait de copeaux pour atteindre les dimensions finales.
4. **Procédés d'Assemblage :** Liaison de plusieurs pièces (soudage, collage, etc.).

---

## 2. Les Procédés d'Obtention des Bruts (Fonderie et Plasturgie)

### A. La Fonderie (Moulage)
Le principe consiste à couler un métal (ou un alliage) à l'état liquide dans un moule dont l'empreinte a la forme de la pièce désirée.

*   **Définition - Retrait :** Le passage de l'état liquide à l'état solide s'accompagne d'une diminution de volume appelée **retrait volumique**.
*   **Théorème de Chvorinov (Temps de solidification) :**
    Le temps de solidification $t_s$ d'une pièce coulée est donné par la relation empirique :
    $$t_s = C \cdot \left( \frac{V}{S} \right)^2$$
    *   $V$ : Volume de la pièce ($\text{m}^3$)
    *   $S$ : Surface d'échange thermique avec le moule ($\text{m}^2$)
    *   $C$ : Constante du moulage (dépend du matériau et du moule)

> **Méthode :** Pour éviter les retassures (cavités dues au retrait non compensé), on dimensionne des masselottes (réserves de métal liquide) qui se solidifient *après* la pièce, en respectant $({V/S})_{\text{masselotte}} > ({V/S})_{\text{pièce}}$.

---

## 3. Les Procédés de Déformation Plastique (Forgeage, Estampage, Laminage)

Ces procédés exploitent la capacité d'un matériau (souvent métallique) à subir des déformations permanentes sans rompre (domaine plastique).

### A. Critères physiques
*   **Écrouissage :** Augmentation de la limite d'élasticité $R_e$ et de la résistance à la traction $R_m$ au détriment de la ductilité lors d'une déformation à froid.
*   **Recristallisation :** Traitement thermique appliqué pour restaurer la ductilité entre deux passes de déformation.

### B. Principaux procédés
*   **Laminage :** Réduction de l'épaisseur par passage entre deux cylindres tournant en sens inverse.
*   **Forgeage / Estampage :** Déformation par choc ou pression entre deux matrices creusées à la forme de la pièce.

---

## 4. Les Procédés par Enlèvement de Matière (Usinage)

L'usinage regroupe l'ensemble des procédés qui enlèvent de la matière sous forme de copeaux pour obtenir les cotes finales et les états de surface précis.

### A. Cinématique de coupe
Soit $Pc$ le plan de coupe, $V_c$ la vitesse de coupe, $V_f$ la vitesse d'avance.

*   **Vitesse de coupe ($\text{V}_c$) :** Vitesse relative de l'arête tranchante de l'outil par rapport à la pièce.
    $$\text{V}_c = \pi \cdot D \cdot N$$
    *   $D$ : Diamètre de la pièce ou de l'outil ($\text{m}$)
    *   $N$ : Fréquence de rotation ($\text{tr}\cdot\text{s}^{-1}$)

### B. Grand familles d'usinage
1.  **Tournage :** La pièce tourne ($\text{V}_c$), l'outil se déplace suivant deux axes (chariotage, refaçonnage).
2.  **Fraisage :** L'outil tourne ($\text{V}_c$), la pièce (ou l'outil) est animée d'un mouvement d'avance.
3.  **Perçage / Alésage :** Réalisation ou finition de trous cylindriques.

---

## 5. Méthodes et Analyse critique (Bureau des Méthodes)

En PTSI, l'analyse d'un procédé de fabrication passe par l'écriture du **Contrat de Phase** et le choix raisonné du processus.

### A. Contrat de Phase (Méthode)
Un contrat de phase décrit chronologiquement les opérations réalisées lors d'une même installation de la pièce sur la machine-outil.

*   **Phase $n$ :** Désignation de la phase.
*   **Machine :** Tour, Fraiseuse, Centre d'usinage...
*   **Croquis de phase :** Représentation des surfaces usinées (en trait fort), des surfaces d'appui (isostatisme) et des cotes fabrication.

### B. Chaîne de cotes
Outil mathématique indispensable pour valider qu'un jeu fonctionnel $J_f$ sera respecté compte tenu des dispersions de fabrication.
*   **Équation de la chaîne de cotes :** 
    $$J_f = \sum \text{Cotes propageantes} - \sum \text{Cotes opposantes}$$

---

## Pièges à Éviter (Attention aux erreurs classiques en PTSI)

> ⚠️ **Piège 1 (Unités) :** Dans la formule de la vitesse de coupe $\text{V}_c = \pi \cdot D \cdot N$, attention aux unités ! Si $D$ est en millimètres ($\text{mm}$) et $N$ en tours par minute ($\text{tr/min}$), alors :
> $$\text{V}_c \ (\text{m/min}) = \frac{\pi \cdot D \cdot N}{1000}$$
> Ne pas oublier de diviser par 60 si l'on souhaite $\text{V}_c$ en $\text{m/s}$.

> ⚠️ **Piège 2 (Isostatisme) :** Oublier qu'une pièce usinée nécessite une mise en position isostatique parfaite (règle des 13 appuis pour un parallélépipède) sous peine d'obtenir des défauts géométriques majeurs (vibrations, défaut de parallélisme).

> ⚠️ **Piège 3 (Brut vs Usiné) :** Ne jamais coter directement une cote de fabrication (CF) sur une surface brute non retouchée sans tolérance adaptée, car la position du brut varie d'une pièce à l'autre en fonderie/forge.