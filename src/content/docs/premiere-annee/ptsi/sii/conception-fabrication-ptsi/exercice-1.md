---
title: 'Exercice 1 : CAO et tolérancement GPS'
description: 'Problème d entraînement type concours.'
---

# Problème Guidé : Analyse en Conception et Tolérancement GPS d'un mécanisme de transmission

**Filière :** CPGE - PTSI  
**Matière :** Sciences Industrielles de l'Ingénieur (SII)  
Chapitre: ** Conception et Procédés de fabrication  
**Thème :** CAO et Tolérancement Géométrique et Dimensionnel (GPS)  

---

## Préambule de l'examinateur

*Ce problème aborde un cas classique de concours (type Banque PT) associant la lecture de maquette numérique (CAO), l'analyse fonctionnelle et la mise en place d'un tolérancement GPS (ISO). L'accent sera mis sur la rigueur de l'expression des exigences et la justification des choix de fabrication.*

---

## Présentation du système

Le système étudié est un réducteur à engrenages industriels. On s'intéresse plus particulièrement à l'arbre de sortie (pièce 1) guidé en rotation par rapport au carter (pièce 0) par l'intermédiaire de deux roulements à billes à contact radiaux. 

L'objectif de ce problème est de valider le choix d'ajustements de la liaison arbre-roulement et de définir le tolérancement GPS garantissant l'absence d'interférence géométrique et le bon fonctionnement de la liaison.

---

## Partie 1 : Analyse de la CAO et des conditions fonctionnelles

On extrait de la maquette numérique CAO l'arbre de sortie (1). Les portées de montage des roulements sont désignées par $cyl_1$ (côté épaulement) et $cyl_2$ (côté écrou de serrage).

1. **Donner** la fonction principale assurée par le contact entre l'arbre (1) et la bague intérieure de chaque roulement.
2. **Identifier** la nature du mouvement relatif guidé et le type de montage des roulements (montage fixe ou flottant).

### Correction guidée - Partie 1 :
1. La liaison entre l'arbre (1) et la bague intérieure du roulement est une liaison **pivot** (ou encastrement glissant selon les choix technologiques). Le contact doit assurer un positionnement isostatique de la bague sur l'arbre, ce qui se traduit par un centrage court ou long selon les portées.
2. Le mouvement guidé est une rotation d'axe $(\text{O}, \vec{X})$. Dans le cas d'un montage par roulements à billes radiaux, on adopte généralement un montage "arbre tournant" : la bague intérieure est montée serrée sur l'arbre, tandis que la bague extérieure est montée avec du jeu dans le carter.

---

## Partie 2 : Choix des ajustements et calculs dimensionnels

Le diamètre nominal des portées de roulement est $D = \text{30 mm}$. La tolérance normalisée du diamètre intérieur de la bague du roulement est de type $\text{js6}$ (soit $\text{30 js6} \rightarrow [30,009 ; -0,009]$ en micromètres).

Pour garantir un montage serré de la bague intérieure sur l'arbre (1) pour un fonctionnement normal en charge tournante, le bureau d'études (BE) propose un ajustement de type **$\text{30 k5}$** pour l'arbre.

Les caractéristiques de la tolérance $\text{k5}$ pour un diamètre de $30\text{ mm}$ sont :
* Écart supérieur : $+11\,\mu\text{m}$
* Écart inférieur : $+2\,\mu\text{m}$

1. **Calculer** les jeux limites (jeu maximal $J_{\text{max}}$ et jeu minimal $J_{\text{min}}$ ou serrage maximal $S_{\text{max}}$ et serrage minimal $S_{\text{min}}$) pour cet ajustement $\text{30 k5}$ monté avec la bague $\text{30 js6}$.
2. **Conclure** quant à la nature de l'ajustement obtenu (avec ou sans jeu).

### Correction guidée - Partie 2 :
1. Exprimons les dimensions limites :
   * **Bague intérieure (alésage $A$) :** 
     * $A_{\text{max}} = 30 + 0,009 = 30,009\text{ mm}$
     * $A_{\text{min}} = 30 - 0,009 = 29,991\text{ mm}$
   * **Arbre (arbre $Ar$) :**
     * $Ar_{\text{max}} = 30 + 0,011 = 30,011\text{ mm}$
     * $Ar_{\text{min}} = 30 + 0,002 = 30,002\text{ mm}$

   Calculons les jeux/serrages :
   * **Serrage maximal ($S_{\text{max}}$)** (quand l'arbre est au plus grand et l'alésage au plus petit) :
     $$S_{\text{max}} = Ar_{\text{max}} - A_{\text{min}} = 30,011 - 29,991 = +0,020\text{ mm} = +20\,\mu\text{m}$$
   * **Serrage minimal ($S_{\text{min}}$)** (quand l'arbre est au plus petit et l'alésage au plus grand) :
     $$S_{\text{min}} = Ar_{\text{min}} - A_{\text{max}} = 30,002 - 30,009 = -0,007\text{ mm} = -7\,\mu\text{m}$$

2. **Analyse critique :** Le serrage minimal est négatif ($-7\,\mu\text{m}$), ce qui signifie qu'il existe un cas (extrême) de montage avec un très léger jeu. 
   * *Avis de l'examinateur :* C'est un risque inacceptable pour un montage de roulement soumis à une charge tournante (phénomène de matage et d'usure par fretage de l'arbre). Le bureau d'études aurait dû opter pour un ajustement $\text{m5}$ ou $\text{n5}$ garantissant un serrage impératif.

---

## Partie 3 : Tolérancement GPS (ISO)

Afin d'assurer le bon alignement des portées de roulement et de limiter le balourd en sortie d'arbre, on souhaite imposer un tolérancement géométrique sur le dessin de définition.

La référence spécifiée (élément de référence) est l'axe commun des deux portées principales, noté $(\text{A-B})$.

1. **Définir** la caractéristique géométrique à appliquer sur les portées cylindriques de l'arbre par rapport à la référence $(\text{A-B})$.
2. **Tracer** (sous forme textuelle ou description du cadre de tolérance) le symbole normalisé correspondant pour une tolérance de $0,015\text{ mm}$.

### Correction guidée - Partie 3 :
1. Pour garantir la co-axialité des portées par rapport à l'axe de référence formé par les paliers, on utilise une **tolérancement de coaxialité**.
2. Le cadre de exigences GPS se présente ainsi :
   $$\begin{array}{|c|c|c|}
   \hline
   \bigcirc & \varnothing 0,015 & \text{A-B} \\
   \hline
   \end{array}$$

---

## Analyse critique globale des résultats

Le tolérancement GPS mis en place (coaxialité $\varnothing 0,015\text{ mm}$) est cohérent avec les exigences d'un réducteur de vitesse de précision moyenne. Néanmoins, l'analyse de l'ajustement $\text{30 k5}$ montre les limites d'une lecture purement numérique sans vérification probabiliste des jeux. En conception industrielle, il conviendra d'imposer un traitement thermique de trempe inductive sur les portées de l'arbre (1) pour supporter les contraintes de matage dues aux serrages effectifs, et de revoir l'ajustement en $\text{30 m5}$.