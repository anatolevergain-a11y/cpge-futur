---
title: 'Exercice 2 : Régimes transitoires'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude d'un circuit RLC série et aspects énergétiques

**Matière :** Physique-Chimie — Filière PTSI  
Chapitre: ** Thermodynamique et Électrocinétique (Régimes transitoires)  

---

## Préambule et Objectifs

Ce problème propose l'étude d'un circuit électrique linéaire du second ordre soumis à un échelon de tension, couplé à une approche énergétique. L'objectif est de vérifier la maîtrise des méthodes de résolution des équations différentielles, l'analyse des différents régimes transitoires et l'interprétation physique des termes énergétiques (analogie thermodynamique).

---

## Énoncé

On considère le circuit de la figure ci-dessous (modélisé par l'esprit du candidat) : un générateur idéal de tension délivrant une force électromotrice $E$ est branché en série avec un interrupteur $K$, une résistance $R$, une bobine réelle (modélisée par une inductance $L$ et une résistance interne $r$) et un condensateur de capacité $C$ initialement déchargé.

À l'instant $t = 0$, on ferme l'interrupteur $K$.

Données numériques :  
* $E = 10\text{ V}$  
* $L = 0,1\text{ H}$  
* $C = 10\text{ }\mu\text{F}$  
* $R = 20\text{ }\Omega$  
* $r = 5\text{ }\Omega$  

---

## Partie I : Établissement de l'équation différentielle

### Question 1
Représenter schématiquement le circuit (description textuelle ou schéma mental) et, en appliquant les lois de Kirchhoff, établir l'équation différentielle vérifiée par la tension aux bornes du condensateur $u_C(t)$ pour $t > 0$.

> **Indice :** Exprimez la tension aux bornes de l'ensemble de la branche en fonction des tensions partielles $u_R$, $u_{\text{bobine}}$ et $u_C$.

---

## Partie Résolution et Correction Pas à Pas

### Correction de la Question 1

Pour $t > 0$, l'interrupteur est fermé. La loi des mailles s'écrit :
$$E = u_R(t) + u_{\text{bobine}}(t) + u_C(t)$$

En utilisant les relations constitutives des composants :
* $u_R(t) = R \, i(t)$
* $u_{\text{bobine}}(t) = r \, i(t) + L \frac{d i}{d t}$
* $i(t) = C \frac{d u_C}{d t}$

On en déduit l'expression de l'intensité et de sa dérivée :
$$i(t) = C \frac{d u_C}{d t} \quad \text{et} \quad \frac{d i}{d t} = C \frac{d^2 u_C}{d t^2}$$

En regroupant les termes de résistance totale $R_{\text{tot}} = R + r$, la loi des mailles devient :
$$E = (R + r) C \frac{d u_C}{d t} + L C \frac{d^2 u_C}{d t^2} + u_C(t)$$

Soit sous forme canonique d'une équation différentielle du second ordre :
$$\frac{d^2 u_C}{d t^2} + \frac{R + r}{L} \frac{d u_C}{d t} + \frac{1}{LC} u_C(t) = \frac{E}{LC}$$

---

### Question 2
Mettre cette équation sous la forme canonique usuelle :
$$\frac{d^2 u_C}{d t^2} + 2\xi \omega_0 \frac{d u_C}{d t} + \omega_0^2 u_C(t) = \omega_0^2 E$$
Exprimer la pulsation propre $\omega_0$ et le facteur d'amortissement $\xi$ en fonction de $L$, $C$, $R$ et $r$. Calculer leur valeur numérique.

---

### Correction de la Question 2

Par identification avec l'équation canonique :
1. La pulsation propre :
   $$\omega_0 = \frac{1}{\sqrt{LC}}$$
2. Le coefficient d'amortissement :
   $$2\xi \omega_0 = \frac{R + r}{L} \implies \xi = \frac{R + r}{2} \sqrt{\frac{C}{L}}$$

**A.N. :**
* $R_{\text{tot}} = 20 + 5 = 25\text{ }\Omega$
* $\omega_0 = \frac{1}{\sqrt{0,1 \times 10 \times 10^{-6}}} = \frac{1}{\sqrt{10^{-6}}} = 10^3\text{ rad}\cdot\text{s}^{-1}$
* $\xi = \frac{25}{2} \times \sqrt{\frac{10 \times 10^{-6}}{0,1}} = 12,5 \times \sqrt{10^{-4}} = 12,5 \times 10^{-2} = 0,125$

---

### Question 3
Quel est le régime transitoire observé ? Justifier. Résoudre l'équation différentielle pour déterminer l'expression de $u_C(t)$.

---

### Correction de la Question 3

Puisque $\xi = 0,125 < 1$, le système est en **régime pseudo-périodique**.

L'équation caractéristique associée est :
$$r^2 + 2\xi \omega_0 r + \omega_0^2 = 0$$
Le discriminant réduit est $\Delta' = \xi^2 \omega_0^2 - \omega_0^2 = \omega_0^2(\xi^2 - 1) < 0$.  
Les racines complexes conjuguées sont :
$$r_{1,2} = -\xi \omega_0 \pm j \omega_p$$
où $\omega_p = \omega_0 \sqrt{1 - \xi^2}$ est la pulsation pseudo-propre.

La solution générale de l'équation avec second membre est la somme de la solution générale de l'équation sans second membre et d'une solution particulière (constante $u_{C,\text{part}} = E$) :
$$u_C(t) = e^{-\xi \omega_0 t} (A \cos(\omega_p t) + B \sin(\omega_p t)) + E$$

Détermination des constantes $A$ et $B$ à l'aide des conditions initiales à $t = 0^+$ :
1. Continuité de la tension aux bornes du condensateur (car le courant reste fini) :  
   $$u_C(0^+) = u_C(0^-) = 0 \implies A + E = 0 \implies A = -E$$
2. Continuité du courant (donc de la dérivée de $u_C$) puisque la bobine s'oppose à la variation instantanée du courant :  
   $$i(0^+) = C \left. \frac{d u_C}{d t} \right|_{t=0^+} = 0 \implies \left. \frac{d u_C}{d t} \right|_{t=0^+} = 0$$

En dérivant $u_C(t)$ :
$$\frac{d u_C}{d t} = -\xi \omega_0 e^{-\xi \omega_0 t} (A \cos(\omega_p t) + B \sin(\omega_p t)) + e^{-\omega_0 t} \omega_p (-A \sin(\omega_p t) + B \cos(\omega_p t))$$
À $t = 0$ :
$$\left. \frac{d u_C}{d t} \right|_{t=0} = -\xi \omega_0 A + \omega_p B = 0 \implies B = \frac{\xi \omega_0}{\omega_p} A = \frac{\xi}{\sqrt{1 - \xi^2}} E$$

Finalement :
$$u_C(t) = E \left[ 1 - e^{-\xi \omega_0 t} \left( \cos(\omega_p t) + \frac{\xi}{\sqrt{1 - \xi^2}} \sin(\omega_p t) \right) \ permanent \right]$$

---

## Partie II : Bilan énergétique et Analyse critique

### Question 4
Établir l'équation bilan des puissances du circuit en multipliant l'équation de la maille par $i(t)$. Interpréter physiquement chaque terme à la fin du régime transitoire (analogie avec le premier principe de la thermodynamique pour un système ouvert ou fermé).

---

### Correction de la Question 4

En partant de la loi des mailles :
$$E = (R + r)i + L\frac{di}{dt} + u_C$$
Multiplions par $i(t) = C \frac{du_C}{dt}$ :
$$E \, i(t) = (R + r)i^2(t) + L i(t) \frac{di}{dt} + u_C(t) i(t)$$

En intégrant sur une durée longue (ou en considérant les formes différentielles d'énergie) :
* $E \, i(t) = \frac{dE_{\text{gen}}}{dt}$ : Puissance fournie par le générateur.
* $(R + r)i^2(t) = P_{\text{Joule}}(t)$ : Puissance dissipée par effet Joule par les résistances $R$ et $r$.
* $L i(t) \frac{di}{dt} = \frac{d}{dt}\left(\frac{1}{2} L i^2(t)\right) = \frac{dE_{\text{magn}}}{dt}$ : Variation de l'énergie magnétique stockée dans la bobine.
* $u_C(t) C \frac{du_C}{dt} = \frac{d}{dt}\left(\frac{1}{2} C u_C^2(t)\right) = \frac{dE_{\text{elec}}}{dt}$ : Variation de l'énergie électrostatique stockée dans le condensateur.

---

### Analyse Critique et Discussion

1. **Cohérence physique du régime :**  
   Le facteur d'amortissement $\xi = 0,125$ étant largement inférieur à $1$, le système oscille avant de converger vers la valeur $E = 10\text{ V}$. Cette oscillation traduit un échange permanent d'énergie entre le champ magnétique de la bobine et le champ électrique du condensateur.
2. **Dissipation énergétique :**  
   À $t \to +\infty$, le courant $i(t)$ s'annule (car $u_C$ atteint la constante $E$). L'énergie totale fournie par le générateur s'est donc intégralement partagée entre l'énergie stockée dans le condensateur ($E_{\text{elec}} = \frac{1}{2} C E^2$) et l'énergie dissipée par effet Joule à travers les résistances $R$ et $r$ tout au long du régime transitoire.
3. **Limites du modèle :**  
   Le modèle linéaire suppose $L$, $C$, $R$ et $r$ constants. En pratique, la résistance interne de la bobine $r$ peut varier par effet Joule (chauffage du fil de cuivre, $\Delta T$), modifiant ainsi légèrement le facteur d'amortissement $\xi$ au cours du temps, ce qui constitue un couplage thermo-électrique non pris en compte ici.