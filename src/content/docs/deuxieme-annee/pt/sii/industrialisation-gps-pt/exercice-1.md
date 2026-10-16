---
title: 'Exercice 1 : Cotation fonctionnelle'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ CORRIGÉ : COTATION FONCTIONNELLE ET SPÉCIFICATION GPS

**Filière :** CPGE - Classes Préparatoires aux Grandes Écoles (Filière PT)  
**Matière :** Sciences Industrielles de l'Ingénieur (SII)  
Chapitre: ** Procédés d'industrialisation et Spécification GPS  
**Thème :** Analyse de la chaîne de cotes et optimisation de la tolérance fonctionnelle  

---

## Préambule et Objectifs

En tant qu'examinateur de concours, j'attends des candidats de la filière PT une rigueur absolue dans la démarche menant de l'expression du besoin (fonction de service) à l'écriture de la condition fonctionnelle, puis à la résolution algébrique des chaînes de cotes. 

Ce problème aborde l'étude d'un mécanisme de transmission de puissance pour lequel on souhaite garantir un jeu minimal de fonctionnement afin d'éviter tout arc-boutement.

---

## 1. Description du système et Mise en situation

Le mécanisme étudié extrait d'un réducteur industriel est représenté schématiquement par l'ensemble des 4 pièces principales suivantes :
*   **Pièce 1 :** Carter (bâti de référence).
*   **Pièce 2 :** Arbre menant.
*   **Pièce 3 :** Roulement à contacts obliques (butée).
*   **Pièce 4 :** Couvercle de fermeture.

L'objectif de l'étude est de garantir un **jeu fonctionnel** $J$ entre l'arbre (Pièce 2) et le couvercle (Pièce 4) afin d'absorber les dilatations thermiques sans contraindre axialement le roulement (Pièce 3).

La condition fonctionnelle s'exprime par le respect de l'intervalle :
$$J_{\min} \le J \le J_{\max}$$

---

## 2. Guidage pas à pas

### Étape 1 : Tracé de la chaîne de cotes et identification des conditions

**Question 1.1 :** Définir la condition fonctionnelle $J$ sous forme de cote conditionnelle (ou cote fermée) sur le schéma d'ensemble.  
Correction: **  
La condition $J$ est le jeu axial entre la face d'extrémité de l'arbre (2) et la face interne du couvercle (4). Le vecteur représentant la condition $J$ est orienté de la pièce 4 vers la pièce 2 (par convention, du dernier élément vers le premier, ou selon le sens de lecture du jeu).

**Question 1.2 :** Établir le graphe des liaisons et identifier les surfaces de contact participant à la chaîne de cotes.  
Correction: **  
Les surfaces en contact sont :
*   Contact entre Carter (1) et Roulement (3).
*   Contact entre Roulement (3) et Arbre (2) (par épaulement).
*   Contact entre Carter (1) et Couvercle (4).

---

### Étape 2 : Écriture de la relation vectorielle et algébrique

**Question 2.1 :** Projeter la chaîne de cotes sur l'axe horizontal $\vec{x}$ lié au bâti (Carter 1).  
Correction: **  
L'équation vectorielle de la chaîne de cotes s'écrit sous la forme fermée :
$$\vec{J} + \sum \vec{C}_i = \vec{0}$$

En projetant sur l'axe $\vec{x}$ orienté positivement vers la droite :
$$J + C_4 - C_3 - C_2 = 0$$ *(attention au sens des vecteurs des cotes composantes)*.

Mettons cela sous la forme standard où la cote conditionnelle est isolée :
$$J = C_2 + C_3 - C_4$$
*(Où $C_2$, $C_3$, $C_4$ sont les cotes nominales des pièces 2, 3 et 4).*

---

### Étape 3 : Application Numérique et Calcul des Tolérances

On donne les caractéristiques nominales et les tolérances des pièces (valeurs en $\text{mm}$) :
*   Cote de l'arbre : $C_2 = 120 \pm 0,15$ $\text{mm}$ (soit $IT_2 = 0,30\text{ mm}$)
*   Cote du roulement : $C_3 = 40 \pm 0,05$ $\text{mm}$ (soit $IT_3 = 0,10\text{ mm}$)
*   Cote du couvercle/carter : $C_4 = 158 \pm 0,20$ $\text{mm}$ (soit $IT_4 = 0,40\text{ mm}$)

**Question 3.1 :** Calculer la valeur nominale de la condition $J$, notée $J_0$.  
Correction: **
$$J_0 = C_{20} + C_{30} - C_{40}$$
$$J_0 = 120 + 40 - 158 = 2\text{ mm}$$

**Question 3.2 :** Calculer l'Intervalle de Tolérance de la condition ($IT_J$).  
Correction: **  
L'intervalle de tolérance de la cote fermée est la somme arithmétique de tous les intervalles de tolérance des cotes composantes (qu'elles soient sens "+\" ou sens "-\") :
$$IT_J = IT_2 + IT_3 + IT_4$$
$$IT_J = 0,30 + 0,10 + 0,40 = 0,80\text{ mm}$$

**Question 3.3 :** En déduire les valeurs extrêmes du jeu $J_{\min}$ et $J_{\max}$.  
Correction: **
Le jeu minimal correspond au cas le plus défavorable pour le risque de blocage :
$$J_{\min} = J_0 - \frac{IT_J}{2} = 2 - \frac{0,80}{2} = 2 - 0,40 = 1,60\text{ mm}$$

Le jeu maximal correspond au cas de grand jeu :
$$J_{\max} = J_0 + \frac{IT_J}{2} = 2 + 0,40 = 2,40\text{ mm}$$

On a donc : $J \in [1,60\text{ mm} ; 2,40\text{ mm}]$.

---

## 3. Analyse Critique des Résultats (Attendu du Juge)

**Question 4 :** Le cahier des charges fonctionnel impose un jeu strict $J \in [0,5\text{ mm} ; 1,5\text{ mm}]$. L'actuelle chaîne de cotes valide-t-elle ce besoin ? Justifier et proposer une amélioration technologique ou économique.  

**Correction et Analyse Critique :**
1.  **Constat :** Notre calcul donne $J_{\min} = 1,60\text{ mm}$ et $J_{\max} = 2,40\text{ mm}$. Le jeu minimal réel ($1,60\text{ mm}$) est supérieur au maximum autorisé par le cahier des charges ($1,5\text{ mm}$). Le mécanisme présente un jeu excessif, ce qui peut engendrer des chocs axiaux et du bruit lors de l'inversion du mouvement. Le CDC n'est **pas respecté**.
2.  **Analyse des causes :** 
    *   La cote nominale $C_{40}$ du carter/couvercle est inadaptée ($158\text{ mm}$ au lieu de $159\text{ mm}$).
    *   L'intervalle de tolérance global $IT_J = 0,80\text{ mm}$ est trop large par rapport aux exigences sévères du guidage.
3.  **Solutions correctives :**
    *   *Action sur les cotations :* Resserrer les tolérances d'usinage des pièces 2 et 4, ce qui va augmenter le coût de fabrication (processus d'usinage plus précis requis, passage par exemple de fraisage standard à de la rectification).
    *   *Action par réglage (recommandée en construction mécanique) :* Introduire une **cale d'épaisseur** réglable sous le couvercle (Pièce 4) pour rattraper la dispersion cumulée des chaînes de cotes sans exiger des tolérances de fabrication trop onéreuses.