---
title: 'Cours : Thermodynamique et Chimie organique'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Thermodynamique et Chimie organique (CPGE BCPST 1ère année)

## Introduction et Objectifs
En BCPST, l'étude de la thermodynamique chimique ne se limite pas à des systèmes minéraux. L'application des principes du premier et du second principe aux réactions de **chimie organique** permet de comprendre la spontanéité, les équilibres et les aspects énergétiques (thermochimie) des transformations du vivant et de synthèse.

---

## I. Rappels de Thermochimie appliqués à la Chimie Organique

### 1. Grandeurs standard de réaction
Pour une réaction chimique générale symbolisée par :
$$\sum_{\text{i}} \nu_i A_i = 0$$

L'enthalpie standard de réaction $\Delta_r H^\circ(T)$ et l'entropie standard de réaction $\Delta_r S^\circ(T)$ s'expriment à partir des grandeurs molaires standard de formation $\Delta_f H^\circ_{m}(T)$ et d'entropie $S^\circ_{m}(T)$ :

$$\Delta_r H^\circ(T) = \sum_{\text{i}} \nu_i \Delta_f H^\circ_{m, i}(T)$$
$$\Delta_r S^\circ(T) = \sum_{\text{i}} \nu_i S^\circ_{m, i}(T)$$

### 2. Loi de Kirchhoff
Pour évaluer l'enthalpie de réaction à une température $T$ quelconque, connaissant sa valeur à $T_0$ :

$$\Delta_r H^\circ(T) = \Delta_r H^\circ(T_0) + \int_{T_0}^{T} \Delta_r C_p^\circ \, \text{d}T$$

où $\Delta_r C_p^\circ = \sum_{\text{i}} \nu_i C_{p, m, i}^\circ$ représente la capacité thermique molaire standard de réaction.

### 3. Enthalpie libre de réaction et critère d'évolution
L'enthalpie libre standard de réaction est définie par :
$$\Delta_r G^\circ(T) = \Delta_r H^\circ(T) - T \Delta_r S^\circ(T)$$

L'enthalpie libre de réaction s'exprime en fonction du quotient de réaction $Q_r$ :
$$\Delta_r G = \Delta_r G^\circ + R T \ln(Q_r)$$

*   **Critère d'évolution spontanée (à $T$ et $P$ constantes) :** 
    *   $\Delta_r G < 0$ : sens direct.
    *   $\Delta_r G > 0$ : sens indirect.
    *   $\Delta_r G = 0$ : équilibre chimique ($\Delta_r G^\circ = - R T \ln(K^\circ)$).

---

## II. Thermochimie des liaisons et Stabilité en Chimie Organique

### 1. Énergie de liaison (ou énergie de dissociation)
L'énergie de liaison $E_L(\text{A-B})$ est l'énergie qu'il faut fournir pour rompre une mole de liaisons $\text{A-B}$ à l'état gazeux de manière homolytique :
$$\text{A-B}_{(g)} \rightarrow \text{A}_{(g)}^\bullet + \text{B}_{(g)}^\bullet \quad (\Delta H > 0)$$

### 2. Estimation empirique de $\Delta_r H^\circ$ à partir des énergies de liaison
En phase gazeuse, on peut estimer l'enthalpie standard de réaction à partir des énergies de liaison romptues et formées :
$$\Delta_r H^\circ \approx \sum E_{\text{liaisons rompues}} - \sum E_{\text{liaisons formées}}$$

> **Attention :** Cette méthode est approchée car les énergies de liaison sont des valeurs moyennes tabulées qui dépendent de l'environnement moléculaire.

### 3. Application : Stabilité des alcènes et des carbocations
*   **Stabilité des alcènes :** Plus un alcène est substitué, plus son enthalpie hydrogenation $\Delta_{hyd} H^\circ$ est faible en valeur absolue, ce qui traduit une plus grande stabilité thermodynamique (due à l'effet inductif/hyperconjugué des groupements alkyles).
*   **Stabilité des carbocations :** L'ordre de stabilité croissante est :
    $$\text{Méthyl} < \text{Primaire} < \text{Secondaire} < \text{Tertiaire}$$
    Ceci s'explique par les effets électroniques (inductifs $+I$ et hyperconjugaison) qui dispersent la charge positive et diminuent l'énergie interne du système.

---

## III. Couplage Thermodynamique en Chimie Organique (et Biochimie)

Dans les systèmes biologiques ou en synthèse organique multistade, une réaction endergonique ($\Delta_r G^\circ > 0$, non spontanée) peut être réalisée si elle est **couplée** à une réaction fortement exergonique ($\Delta_r G^\circ \ll 0$).

Soit deux réactions couplées par un intermédiaire commun :
1. $A + B \rightleftarrows C + D \quad (\Delta_r G_1^\circ > 0)$
2. $C + E \rightleftarrows F + G \quad (\Delta_r G_2^\circ \ll 0)$

L'enthalpie libre standard globale du système couplé est la somme des enthalpies libres standard :
$$\Delta_r G_{\text{tot}}^\circ = \Delta_r G_1^\circ + \Delta_r G_2^\circ$$

Si $\Delta_r G_{\text{tot}}^\circ < 0$, la transformation globale devient thermodynamiquement possible. *(Exemple classique en biochimie : l'hydrolyse de l'ATP couplée à la phosphorylation du glucose).*

---

## IV. Aspects Cinétiques vs Thermodynamiques

Il est primordial en chimie organique de ne pas confondre **stabilité thermodynamique** et **réactivité cinétique**.

*   **Contrôle thermodynamique :** Le produit majoritaire est le plus stable (le plus bas en énergie libre). Il est favorisé à haute température et/ou pour des temps de réaction longs (réaction réversible).
*   **Contrôle cinétique :** Le produit majoritaire est celui qui se forme le plus rapidement (énergie d'activation $\Delta G^\ddagger$ la plus faible). Il est favorisé à basse température et/ou pour des temps courts.

$$\text{Exemple classique :} \text{ Addition 1,2 vs 1,4 sur les diènes conjugués.}$$