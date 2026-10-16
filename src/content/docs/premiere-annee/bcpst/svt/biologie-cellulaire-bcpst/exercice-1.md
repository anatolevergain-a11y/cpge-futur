---
title: 'Exercice 1 : Membranes et enzymologie'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude cinétique d'un transporteur membranaire et régulation enzymatique associée

**Concours BCPST — Biologie et Sciences de la Terre**
*Matière : Biologie cellulaire et biochimie métabolique*

---

## Introduction et consignes

Ce problème aborde l'étude combinée de la cinétique enzymatique d'une enzyme membranaire (une ATPase) et des propriétés de transport d'un soluté à travers une membrane biologique. Les candidats de la filière BCPST doivent prêter une attention particulière à la rigueur des notations, à l'analyse dimensionnelle des grandeurs et à l'esprit critique face aux modèles proposés.

---

## Partie I : Étude d'une enzyme membranaire, l'ATPase $\text{Na}^+/\text{K}^+$

L'enzyme étudiée est une pompe ionique transmembranaire, la $\text{Na}^+/\text{K}^+$-ATPase. Elle catalyse l'hydrolyse de l'adénosine triphosphate (ATP) en adénosine diphosphate (ADP) et en phosphate inorganic ($\text{P}_i$), couplée au transport d'ions sodium et potassium contre leur gradient de concentration.

On mesure la vitesse initiale $v_i$ de la réaction enzymatique en fonction de la concentration en substrat, l'ATP, notée $[\text{ATP}]$. Les résultats expérimentaux sont consignés dans le tableau ci-dessous :

| $[\text{ATP}] \ (\text{mmol}\cdot\text{L}^{-1})$ | 0,05 | 0,10 | 0,20 | 0,50 | 1,00 | 2,00 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| $v_i \ (\mu\text{mol}\cdot\text{min}^{-1}\cdot\text{mg}^{-1})$ | 10,0 | 16,7 | 25,0 | 38,5 | 50,0 | 58,8 |

### Question 1.1
Rappeler l'équation générale de Michaelis-Menten pour une enzyme simple. Linéariser cette équation sous la forme de Lineweaver-Burk ($\frac{1}{v_i}$ en fonction de $\frac{1}{[\text{ATP}]}$).

**Corrigé pas à pas :**
1. L'équation de Michaelis-Menten s'écrit :
   $$v_i = \frac{V_{\text{max}} \cdot [\text{ATP}]}{K_m + [\text{ATP}]}$$
   où $V_{\text{max}}$ est la vitesse maximale de la réaction et $K_m$ la constante de Michaelis.
2. Pour obtenir la représentation de Lineweaver-Burk, on prend l'inverse de l'équation :
   $$\frac{1}{v_i} = \frac{K_m + [\text{ATP}]}{V_{\text{max}} \cdot [\text{ATP}]} = \frac{K_m}{V_{\text{max}}} \cdot \frac{1}{[\text{ATP}]} + \frac{1}{V_{\text{max}}}$$
   C'est une équation de type affine $y = ax + b$ avec $y = \frac{1}{v_i}$, $x = \frac{1}{[\text{ATP}]}$, de pente $a = \frac{K_m}{V_{\text{max}}}$ et d'ordonnée à l'origine $b = \frac{1}{V_{\text{max}}}$.

---

### Question 1.2
À partir des données du tableau, calculer les valeurs de $\frac{1}{[\text{ATP}]}$ et $\frac{1}{v_i}$. Déterminer graphiquement ou par le calcul (régression linéaire) les valeurs de $V_{\text{max}}$ et $K_m$ pour cette $\text{Na}^+/\text{K}^+$-ATPase. Préciser les unités.

**Corrigé pas à pas :**
1. Tableau des inverses :
   * $\frac{1}{[\text{ATP}]} \ (\text{L}\cdot\text{mmol}^{-1})$ : 20,0 ; 10,0 ; 5,0 ; 2,0 ; 1,0 ; 0,5
   * $\frac{1}{v_i} \ (\mu\text{mol}^{-1}\cdot\text{min}\cdot\text{mg})$ : 0,100 ; 0,060 ; 0,040 ; 0,026 ; 0,020 ; 0,017

2. Exploitation des points extrêmes ou par régression :
   * L'ordonnée à l'origine est atteinte lorsque $\frac{1}{[\text{ATP}]} \to 0$. Graphiquement, $\frac{1}{v_i} \approx 0,015 \ \mu\text{mol}^{-1}\cdot\text{min}\cdot\text{mg}$.
     $$V_{\text{max}} = \frac{1}{0,015} \approx 66,7 \ \mu\text{mol}\cdot\text{min}^{-1}\cdot\text{mg}^{-1}$$
   * L'abscisse à l'origine vaut $-\frac{1}{K_m}$. Lorsque $\frac{1}{v_i} = 0$, $\frac{1}{[\text{ATP}]} = -\frac{1}{K_m}$. Par calcul avec les points de coordonnées $(1 ; 0,020)$ et $(20 ; 0,100)$ :
     La pente $a = \frac{0,100 - 0,020}{20 - 1} = \frac{0,080}{19} \approx 0,00421 \ \text{min}\cdot\text{mg}\cdot\text{L}^{-1}$.
     Or $a = \frac{K_m}{V_{\text{max}}}$, donc $K_m = a \cdot V_{\text{max}} \approx 0,00421 \times 66,7 \approx 0,28 \ \text{mmol}\cdot\text{L}^{-1}$.

---

## Partie II : Effet d'un inhibiteur pharmacologique (la ouabaïne)

La ouabaïne est un glycoside cardiotonique connu pour inhiber spécifiquement la $\text{Na}^+/\text{K}^+$-ATPase. En présence de ouabaïne à la concentration fixe de $0,1 \text{ mmol}\cdot\text{L}^{-1}$, on refait les mesures cinétiques. On observe graphiquement que la pente de la droite de Lineweaver-Burk augmente, tandis que l'ordonnée à l'origine reste strictement inchangée.

### Question 2.1
Quel est le type d'inhibition exercée par la ouabaïne sur la $\text{Na}^+/\text{K}^+$-ATPase ? Justifier la réponse en explicitant l'effet sur $V_{\text{max}}$ et $K_m apparent$.

**Corrigé pas à pas :**
1. L'énoncé indique que l'ordonnée à l'origine ($\frac{1}{V_{\text{max}}}$) reste inchangée, ce qui signifie que **$V_{\text{max}}$ est invariant**.
2. La pente ($a = \frac{K_m}{V_{\text{max}}}$) augmente, ce qui implique que le rapport augmente, et donc que **$K_m$ apparent augmente** ($K_{m,\text{app}} > K_m$).
3. Il s'agit d'une **inhibition compétitive**. L'inhibiteur (la ouabaïne) se fixe sur le même site actif que le substrat (l'ATP) ou induit un recouvrement conformationnel exclusif. À forte concentration en ATP, l'effet de l'inhibiteur est levé, d'où un $V_{\text{max}}$ in 変 (inchangé).

---

## Partie III : Analyse critique et intégration membranaire

### Question 3.1
Discuter des limites de la représentation de Lineweaver-Burk utilisée dans la Partie I. Pourquoi les biochimistes modernes lui préfèrent-ils des méthodes non linéaires (comme le logiciel GraphPad Prism utilisant les moindres carrés directs sur l'équation de Michaelis-Menten) ?

**Analyse critique (essentielle pour les concours BCPST) :**
* **Distorsion des erreurs expérimentales :** La transformation mathématique de Lineweaver-Burk modifie l'importance relative des points. Les points mesurés à faibles concentrations en substrat (grandes valeurs de $\frac{1}{[\text{S}]}$) se retrouvent très éloignés sur l'axe des abscisses et subissent une amplification considérable de l'incertitude expérimentale (erreurs de mesure sur $v_i$ amplifiées par l'inversion).
* **Pondération inéquitable :** Une incertitude sur un point à faible concentration pèse anormalement lourd dans la détermination de la pente et de l'ordonnée à l'origine par régression linéaire.
* **Avantage des méthodes non linéaires :** L'ajustement direct (*curve fitting*) sur l'hyperbole de Michaelis-Menten respecte la structure originelle de la variance des erreurs expérimentales, offrant des estimations de $K_m$ et $V_{\text{max}}$ statistiquement beaucoup plus robustes.