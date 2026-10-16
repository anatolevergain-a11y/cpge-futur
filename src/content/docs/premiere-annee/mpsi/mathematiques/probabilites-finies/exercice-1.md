---
title: 'Exercice 1 : Conditionnement et Bayes'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Fiabilité des tests de dépistage et inférence bayésienne

*Ce problème aborde l'étude des probabilités conditionnelles et de la formule de Bayes à travers un cas classique mais fondamental en MPSI : l'évaluation d'un test de dépistage médical. L'objectif est de comprendre pourquoi un test, même très performant, peut conduire à des contre-intuitivités flagrantes lorsque la maladie est rare.*

---

## Préambule et notations

Soit $(\Omega, \mathcal{P}(\Omega), P)$ un espace probabilisé décrivant une population. 
On considère un individu tiré au hasard dans cette population. On définit les événements suivants :
* $M$ : « L'individu est atteint de la maladie. »
* $T$ : « Le test de dépistage est positif. »

On note $\bar{M}$ et $\bar{T}$ les événements contraires respectifs.

Les caractéristiques du test sont modélisées par les probabilités conditionnelles suivantes :
* La prévalence de la maladie dans la population : $P(M) = p$, où $p \in ]0, 1[$.
* La sensibilité du test (probabilité qu'il soit positif sachant que l'individu est malade) : $P(T \mid M) = \alpha$, où $\alpha \in ]0, 1[$.
* La spécificité du test (probabilité qu'il soit négatif sachant que l'individu est sain) : $P(\bar{T} \mid \bar{M}) = \beta$, où $\beta \in ]0, 1[$.

---

## Partie I : Analyse préliminaire et probabilités totales

### Question 1
Exprimer en fonction de $\beta$ la probabilité $P(T \mid \bar{M})$, appelée taux de faux positifs.

> **Indication :** Penser à l'événement contraire $\bar{T}$ sachant $\bar{M}$.

---

*Correction de la question 1 :*
L'événement $\bar{T}$ sachant $\bar{M}$ représente le fait que le test soit négatif sachant que l'individu est sain. L'événement $T$ sachant $\bar{M}$ est l'événement contraire (le test est positif sachant que l'individu est sain).
Par conséquent, par passage au complementaire conditionnel :
$$P(T \mid \bar{M}) = 1 - P(\bar{T} \mid \bar{M}) = 1 - \beta$$

---

### Question 2
Calculer la probabilité globale qu'un individu pris au hasard ait un test positif, c'est-à-dire $P(T)$, en fonction de $p$, $\alpha$ et $\beta$.

> **Indication :** Utiliser le système complet d'événements $(M, \bar{M})$ et appliquer la formule des probabilités totales.

---

*Correction de la question 2 :*
Les événements $M$ et $\bar{M}$ forment un système complet d'événements de l'univers $\Omega$ (car $p \in ]0, 1[$). D'après la formule des probabilités totales :
$$P(T) = P(T \mid M)P(M) + P(T \mid \bar{M})P(\bar{M})$$
En remplaçant par les notations de l'énoncé :
* $P(M) = p$ et $P(\bar{M}) = 1 - p$
* $P(T \mid M) = \alpha$
* $P(T \mid \bar{M}) = 1 - \beta$

On obtient ainsi :
$$P(T) = \alpha p + (1 - \beta)(1 - p)$$

---

## Partie II : Formule de Bayes et valeur prédictive

### Question 3
Énoncer la formule de Bayes pour deux événements $A$ et $B$ de probabilités non nulles.

---

*Correction de la question 3 :*
Soit $A$ et $B$ deux événements de probabilités non nulles. La formule de Bayes s'écrit :
$$P(A \mid B) = \frac{P(B \mid A)P(A)}{P(B)}$$

---

### Question 4
Exprimer la probabilité qu'un individu soit effectivement malade sachant que son test est positif, notée $P(M \mid T)$ (appelée valeur prédictive positive), en fonction de $p$, $\alpha$ et $\beta$.

---

*Correction de la question 4 :*
En appliquant la formule de Bayes aux événements $M$ et $T$ :
$$P(M \mid T) = \frac{P(T \mid M)P(M)}{P(T)}$$
En injectant le résultat de la question 2 et les données de l'énoncé :
$$P(M \mid T) = \frac{\alpha p}{\alpha p + (1 - \beta)(1 - p)}$$

---

## Partie III : Application numérique et analyse critique

### Question 5
On considère un test de dépistage pour une maladie rare caractérisée par :
* $p = 10^{-3}$ ($0{,}1\%$ de la population est malade).
* $\alpha = 0{,}99$ (sensibilité de $99\%$).
* $\beta = 0{,}98$ (spécificité de $98\%$, soit un taux de faux positifs de $2\%$).

Calculer la valeur numérique de $P(M \mid T)$. Commenter ce résultat de manière critique.

---

*Correction de la question 5 :*
A N-application numérique :
* $\alpha p = 0{,}99 \times 10^{-3} = 0{,}00099$
* $1 - \beta = 0{,}02$
* $1 - p = 1 - 0{,}001 = 0{,}999$
* $(1 - \beta)(1 - p) = 0{,}02 \times 0{,}999 = 0{,}01998$

Le dénominateur vaut :
$$P(T) = 0{,}00099 + 0{,}01998 = 0{,}02097$$

La probabilité recherchée est donc :
$$P(M \mid T) = \frac{0{,}00099}{0{,}02097} \approx 0{,}0472$$
Soit environ $4{,}7\%$.

#### Analyse critique :
Le résultat est extrêmement contre-intuitif pour un non-mathématicien : sachant que le test est positif, la probabilité que l'individu soit réellement malade est d'à peine **$4{,}7\%$**. 

**Pourquoi ce paradoxe ?**
Bien que le test soit « bon » (sensibilité et spécificité proches de $100\%$), la maladie est **très rare** ($1$ personne sur $1000$). Par conséquent, le nombre de faux positifs générés par la masse des personnes saines ($2\%$ de $999 \approx 20$ faux positifs) est largement supérieur au nombre de vrais positifs ($99\%$ de $1 \approx 1$ vrai positif). Ainsi, la grande majorité des tests positifs sont en réalité des faux positifs. C'est un écueil classique en matière de santé publique qui justifie la nécessité de tests de confirmation (comme le Western Blot ou la PCR) en cas de dépistage positif pour une maladie rare.