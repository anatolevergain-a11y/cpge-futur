---
title: 'Exercice 1 : Hacheurs et onduleurs'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude d'une chaîne de conversion photovoltaïque avec hacheur et onduleur
Domaine: Électromagnétisme et Conversion de puissance — Filière PSI*

---

## Introduction et présentation du problème

Ce problème étudie une chaîne de conversion d'énergie électrique issue de panneaux photovoltaïques destinée à alimenter un réseau électrique alternatif. La structure comporte deux étages de conversion statique :
1. Un **hacheur série** (convertisseur continu-continu) permettant d'adapter la tension des panneaux et d'assurer la recherche du point de puissance maximale (MPPT).
2. Un **onduleur monophasé en pont complet** (convertisseur continu-alternatif) relié au réseau par l'intermédiaire d'un filtre de lissage.

L'objectif est d'analyser le comportement de ces convertisseurs en régime permanent périodique, en supposant les composants idéaux.

---

## Partie I : Étude du hacheur série (Adaptation de tension)

On considère le hacheur série de la figure 1 alimenté par une source de tension continue $E$ (panneaux PV). Il alimente une charge inductive modélisée par une résistance $R$ et une inductance $L$ en série, en aval d'un condensateur de découplage supposé parfait de tension constante $U_d$. 

Le hacheur est commandé par un interrupteur $K$ (transistor IGBT commandé à la fréquence $f = \frac{1}{T}$) et une diode de roue libre $D$ idéale. Le rapport cyclique est noté $\alpha = \frac{t_{on}}{T}$ avec $t_{on}$ la durée de conduction de $K$ sur une période $T$.

### 1. Questions préliminaires

**Q1.** Représenter schématiquement le montage du hacheur série. Préciser le rôle de la diode de roue libre $D$.

*Corrigé :*
La diode $D$ est placée en antiparallèle aux bornes de la charge (ou branchée entre la sortie du hacheur et la masse). 
Son rôle fondamental est d'assurer la continuité du courant dans la charge inductive $L$ lorsque l'interrupteur $K$ s'ouvre, évitant ainsi l'apparition de surtensions destructrices aux bornes de $K$ (car $\text{e}_L = L \frac{di}{dt}$).

**Q2.** Établir l'expression de la tension moyenne $⟨u_s⟩$ aux bornes de la charge en fonction de la tension d'entrée $E$ et du rapport cyclique $\alpha$, en supposant le régime permanent établi et le courant $i(t)$ strictement positif (conduction continue).

*Corrigé :*
Sur une période $T$, l'interrupteur $K$ est fermé de $0$ à $\alpha T$ et $u_s(t) = E$. Il est ouvert de $\alpha T$ à $T$ et $u_s(t) = 0$ (grâce à la diode de roue libre qui conduit).
La valeur moyenne de la tension $u_s$ est :
$$\langle u_s \rangle = \frac{1}{T} \int_0^T u_s(t) \, dt = \frac{1}{T} \left( \int_0^{\alpha T} E \, dt + \int_{\alpha T}^T 0 \, dt \right)$$
$$\langle u_s \rangle = \alpha E$$

**Q3.** En déduire la relation entre le courant moyen $\langle i \rangle$ dans la charge et la tension moyenne $\langle u_s \rangle$, sachant que la charge comporte une résistance $R$ et une f.e.m. continue $E'$ (modélisation d'une batterie en charge).

*Corrigé :*
L'équation électrique de la charge est $u_s(t) = R i(t) + L \frac{di}{dt} + E'$.
En effectuant la moyenne temporelle sur une période (la valeur moyenne de la dérivée d'une grandeur périodique étant nulle) :
$$\langle u_s \rangle = R \langle i \rangle + E'$$
En injectant l'expression de $\langle u_s \rangle$ :
$$\alpha E = R \langle i \rangle + E' \implies \langle i \rangle = \frac{\alpha E - E'}{R}$$

---

## Partie II : Étude de l'onduleur monophasé en pont complet

L'étage suivant est un onduleur monophasé alimenté par la tension continue $U_d$ issue du hacheur. Il alimente une charge inductive (résistance $R_c$ et inductance $L_c$) représentant le réseau via un filtre.

L'onduleur est constitué de quatre interrupteurs parfaits commandés par isochronisme avec des commandes pleines ou par modulation de largeur d'impulsion (MLI sinusoïdale). On se place dans le cas d'une commande pleine (onde carrée) où les couples $(K_1, K_4)$ et $(K_2, K_3)$ sont commandés de manière complémentaire à la fréquence $f_s = 50\text{ Hz}$.

**Q4.** Tracer l'allure de la tension de sortie de l'onduleur $v(t)$ sur une période $T_s = \frac{1}{f_s}$.

*Corrigé :*
*   De $0$ à $\frac{T_s}{2}$, les interrupteurs $K_1$ et $K_4$ sont fermés : $v(t) = U_d$.
*   De $\frac{T_s}{2}$ à $T_s$, les interrupteurs $K_2$ et $K_3$ sont fermés : $v(t) = -U_d$.
La tension $v(t)$ est un signal créneau alterné d'amplitude $U_d$.

**Q5.** Développer en série de Fourier la tension $v(t)$. En déduire l'expression de son fondamental $V_1(t)$ et de sa valeur efficace $V_1$ RMS.

*Corrigé :*
Puisque $v(t)$ est une fonction impaire (en choisissant bien l'origine des temps) et de période $T_s$ (pulsation $\omega_s = 2\pi f_s$), sa décomposition ne comporte que des termes en sinus (harmoniques impairs) :
$$v(t) = \sum_{n=1, 3, 5, \dots}^{\infty} \frac{4 U_d}{n \pi} \sin(n \omega_s t)$$
Le fondamental $V_1(t)$ correspond au terme $n=1$ :
$$V_1(t) = \frac{4 U_d}{\pi} \sin(\omega_s t)$$
La valeur efficace du fondamental est donc :
$$V_1 = \frac{4 U_d}{\pi \sqrt{2}} = \frac{2\sqrt{2}}{\pi} U_d \approx 0{,}90 \, U_d$$

---

## Partie III : Analyse critique des résultats

**Q6.** 
1. Discuter l'intérêt d'utiliser un hacheur série en amont de l'onduleur par rapport à une liaison directe.
2. Quels sont les inconvénients majeurs de la commande pleine (onde carrée) de l'onduleur sur la charge, et comment la technique de la MLI (PWM) permet-elle d'y remédier ?

*Corrigé :*
1. **Intérêt du hacheur :** La tension fournie par les panneaux photovoltaïques varie fortement selon l'ensoleillement et la température. Le hacheur, en agissant sur son rapport cyclique $\alpha$, permet d'ajuster en permanence la tension $U_d$ pour maintenir le fonctionnement au point de puissance maximale (MPPT - *Maximum Power Point Tracking*).
2. **Inconvénients de la commande pleine et solution MLI :** 
   - *Inconvénients :* La tension de sortie contient de nombreux harmoniques de rangs élevés ($3, 5, 7, \dots$). Ces harmoniques génèrent des pertes par effet Joule supplémentaires dans la charge et des courants parasites importants.
   - *Solution (MLI) :* La Modulation de Largeur d'Impulsion sinusoïdale permet de repousser les harmoniques vers des fréquences beaucoup plus élevées (fréquence de découpage du hacheur/onduleur), ce qui les rend beaucoup plus faciles à filtrer à l'aide d'un filtre passe-bas $LC$ de dimensions raisonnables, obtenant ainsi un courant quasi-sinusoïdal en sortie vers le réseau.