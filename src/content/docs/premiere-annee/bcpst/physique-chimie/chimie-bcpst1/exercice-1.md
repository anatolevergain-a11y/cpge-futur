---
title: 'Exercice 1 : Enthalpies de réaction'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ CORRIGÉ : Thermodynamique chimique et Enthalpies de réaction

**Profil de l'examinateur :** Professeur en classes préparatoires (filière BCPST).  
**Objectifs de l'exercice :** Évaluer la rigueur dans l'application de la première loi de la thermodynamique (loi de Hess, loi de Kirchhoff), la manipulation correcte des grandeurs molaires standard de réaction, ainsi que l'esprit critique indispensable aux épreuves écrites et orales des concours (Agro-Veto et G2E).

---

## Énoncé du problème

On s'intéresse à la synthèse industrielle de l'acide éthanoïque $\text{CH}_3\text{COOH}_{(aq)}$ par carbonylation du méthanol $\text{CH}_3\text{OH}_{(l)}$ selon le procédé Monsanto (simplifié). La réaction étudiée à la température de référence $T^\circ = 298\text{ K}$ est la suivante :

$$\text{CH}_3\text{OH}_{(l)} + \text{CO}_{(g)} \longrightarrow \text{CH}_3\text{COOH}_{(l)} \quad (\text{Réaction } 1)$$

### Données thermodynamiques à $T^\circ = 298\text{ K}$ et sous $P^\circ = 1\text{ bar}$ :

| Espèce chimique | $\Delta_f H^\circ (298\text{ K})\ (\text{kJ}\cdot\text{mol}^{-1})$ | $S^\circ (298\text{ K})\ (\text{J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1})$ | $C_{p,m}^\circ\ (\text{J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1})$ |
| :--- | :---: | :---: | :---: |
| $\text{CH}_3\text{OH}_{(l)}$ | $-238{,}6$ | $126{,}8$ | $81{,}0$ |
| $\text{CO}_{(g)}$ | $-110{,}5$ | $197{,}7$ | $29{,}1$ |
| $\text{CH}_3\text{COOH}_{(l)}$ | $-484{,}5$ | $159{,}8$ | $124{,}3$ |

*On suppose les capacités thermiques molaires indépendantes de la température sur l'intervalle considéré.*

---

## Guide de résolution et Correction pas à pas

### Partie I : Détermination de l'enthalpie standard de réaction à $298\text{ K}$

#### Question 1
Définir l'enthalpie standard de formation $\Delta_f H^\circ$ d'un corps pur. 

**Correction (Attendu du jury) :**
> L'enthalpie standard de formation d'un corps pur à la température $T$, notée $\Delta_f H^\circ(T)$, correspond à l'enthalpie standard de la réaction de formation d'une mole de ce corps pur à partir de ses éléments constitutifs pris dans leur corps simple stable de référence sous la pression standard $P^\circ = 1\text{ bar}$.

---

#### Question 2
Calculer l'enthalpie standard de réaction $\Delta_r H^\circ(298\text{ K})$ pour la réaction $(1)$.
Correction: **
D'après la loi de Hess, l'enthalpie standard de réaction s'exprime à partir des enthalpies standard de formation des réactifs et des produits affectés de leurs coefficients stœchiométriques algébriques ($\nu_i$) :

$$\Delta_r H^\circ(298\text{ K}) = \sum_{\text{produits}} \nu_i \Delta_f H^\circ_i(298\text{ K}) - \sum_{\text{réactifs}} \nu_i \Delta_f H^\circ_i(298\text{ K})$$

Pour la réaction $(1)$ :
$$\Delta_r H^\circ(298\text{ K}) = \Delta_f H^\circ(\text{CH}_3\text{COOH}_{(l)}, 298\text{ K}) - \left[ \Delta_f H^\circ(\text{CH}_3\text{OH}_{(l)}, 298\text{ K}) + \Delta_f H^\circ(\text{CO}_{(g)}, 298\text{ K}) \right]$$

A.N. :
$$\Delta_r H^\circ(298\text{ K}) = -484{,}5 - \left( -238{,}6 + (-110{,}5) \right)$$
$$\Delta_r H^\circ(298\text{ K}) = -484{,}5 + 349{,}1 = -135{,}4\text{ kJ}\cdot\text{mol}^{-1}$$

---

### Partie II : Influence de la température (Loi de Kirchhoff)

#### Question 3
Énoncer la loi de Kirchhoff permettant de déterminer l'enthalpie standard de réaction à une température $T$ quelconque.
Correction: **
> La dérivée par rapport à la température de l'enthalpie standard de réaction est égale à l'enthalpie standard de réaction des capacités thermiques :
> $$\frac{\mathrm{d}\Delta_r H^\circ}{\mathrm{d}T} = \Delta_r C_{p}^\circ$$
> Avec $\Delta_r C_{p}^\circ = \sum_i \nu_i C_{p,m,i}^\circ$.

---

#### Question 4
Calculer l'enthalpie standard de réaction à $T = 380\text{ K}$, température à laquelle le réacteur industriel est opéré.
Correction: **
En intégrant la relation de Kirchhoff entre $T^\circ = 298\text{ K}$ et $T = 380\text{ K}$ (en supposant $\Delta_r C_p^\circ$ constant) :

$$\Delta_r H^\circ(380\text{ K}) = \Delta_r H^\circ(298\text{ K}) + \Delta_r C_{p}^\circ \times (380 - 298)$$

Calculons d'abord $\Delta_r C_{p}^\circ$ :
$$\Delta_r C_{p}^\circ = C_{p,m}^\circ(\text{CH}_3\text{COOH}_{(l)}) - \left[ C_{p,m}^\circ(\text{CH}_3\text{OH}_{(l)}) + C_{p,m}^\circ(\text{CO}_{(g)}) \right]$$
$$\Delta_r C_{p}^\circ = 124{,}3 - (81{,}0 + 29{,}1) = 124{,}3 - 110{,}1 = +14{,}2\text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$$

Passons au calcul de $\Delta_r H^\circ(380\text{ K})$ :
$$\Delta_r H^\circ(380\text{ K}) = -135{,}4 \times 10^3 + 14{,}2 \times (380 - 298)$$
$$\Delta_r H^\circ(380\text{ K}) = -135400 + 14{,}2 \times 82 = -135400 + 1164{,}4 = -134235{,}6\text{ J}\cdot\text{mol}^{-1}$$

Soit :
$$\Delta_r H^\circ(380\text{ K}) \approx -134{,}2\text{ kJ}\cdot\text{mol}^{-1}$$

---

### Partie III : Analyse critique (Attendu majeur en BCPST)

#### Question 5
1. **Signe de la réaction :** La réaction $(1)$ est-elle endothermique ou exothermique ? Quel est l'impact de l'élévation de température sur la constante d'équilibre $K^\circ(T)$ ?
2. **Validité des approximations :** Discuter brièvement de l'hypothèse d'indépendance des capacités thermiques avec la température sur une large plage, ainsi que des phases physiques des réactifs.

**Correction et Analyse Critique :**
1. **Caractérisation énergétique :** 
   $\Delta_r H^\circ < 0$, la réaction est **exothermique**. Elle dégage de la chaleur vers l'extérieur. 
   D'après la loi de van 't Hoff ($\frac{\mathrm{d}\ln K^\circ}{\mathrm{d}T} = \frac{\Delta_r H^\circ}{RT^2}$), puisque la réaction est exothermique, une augmentation de la température entraîne une **diminution de la constante d'équilibre $K^\circ$**. Thermodynamiquement, le système déplace l'équilibre dans le sens endothermique (sens inverse) pour s'opposer à l'élévation de température (loi de Le Chatelier).
2. **Analyse critique des approximations :**
   * *Capacités thermiques :* L'hypothèse de $C_{p,m}^\circ$ constants est acceptable pour un écart modéré ($\Delta T = 82\text{ K}$). Sur un intervalle de température plus vaste (par exemple $\Delta T > 500\text{ K}$), il serait impératif d'utiliser un développement polynomial de type $C_{p,m}^\circ(T) = a + bT + cT^{-2}$.
   * *États physiques :* L'énoncé considère $\text{CH}_3\text{OH}$ et $\text{CH}_3\text{COOH}$ sous forme liquide. Or, à $380\text{ K}$ ($107\text{ ^\circ C}$), l'acide éthanoïque (dont la température d'ébullition normale est de $118\text{ ^\circ C}$) est proche de son point de bulle, mais le méthanol (ébullition à $65\text{ ^\circ C}$) est nécessairement à l'état gazeux sous la pression standard ($1\text{ bar}$). Le terme $\Delta_f H^\circ$ utilisé ne prend pas en compte les enthalpies de changement d'état (vaporisation), ce qui constitue une approximation grossière si l'on cherche une grande précision industrielle. En conditions réelles, il faudrait intégrer les enthalpies de vaporisation de chaque espèce via un cycle thermodynamique de Born-Haber.