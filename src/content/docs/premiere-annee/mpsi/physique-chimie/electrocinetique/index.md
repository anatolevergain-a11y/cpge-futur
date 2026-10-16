---
title: 'Cours : Électrocinétique'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Électrocinétique – Fiche de Cours MPSI

## Introduction et Cadre de l'Étude

L'électrocinétique étudie la circulation des charges électriques dans les conducteurs filiformes. Nous nous placerons exclusivement dans l'**ARQS (Approximation des Régimes Quasi-Stationnaires)**. 

*   **Condition de l'ARQS :** $\tau \ll T$ (ou $d \ll \lambda$), où $\tau$ est le temps de propagation des signaux électromagnétiques dans le circuit ($c \approx 3 \cdot 10^8 \text{ m}\cdot\text{s}^{-1}$), $T$ la période du signal (ou le temps caractéristique de l'évolution) et $\lambda$ la longueur d'onde associée.
*   **Conséquence :** Les lois de l'électrostatique et de la magnétostatique (stationnaires) s'appliquent instantanément à chaque instant $t$ aux circuits électriques.

---

## 1. Variables et Composants de Base

### Définitions Fondamentales
*   **Intensité du courant ($i(t)$) :** Débit de charge traversant une section du fil. Exprimée en Ampères ($\text{A}$). $i = \frac{dq}{dt}$.
*   **Potentiel électrique ($V(M, t)$) :** Grandeur scalaire mesurée en Volts ($\text{V}$).
*   **Tension ($u(t)$) :** Différence de potentiel entre deux points $A$ et $B$ : $u_{AB}(t) = V_A(t) - V_B(t)$.

### Conventions Récepteur et Générateur
Pour tout dipôle $D$ traversé par un courant $i$ et aux bornes duquel règne une tension $u$ :
*   **Convention Récepteur :** Les flèches de $u$ et $i$ sont de sens **contraires**. Le dipôle consomme de l'énergie.
*   **Convention Générateur :** Les flèches de $u$ et $i$ sont de même **sens**. Le dipôle fournit de l'énergie.

### Les Dipôles Linéaires Passifs (Modèles de Thévenin)
1.  **Résistance (Ohmique) :** Caractérisée par sa résistance $R$ en Ohms ($\Omega$).
    *   *Loi d'Ohm (Convention récepteur) :* $u = R \cdot i$ avec $R > 0$.
2.  **Condensateur :** Caractérisé par sa capacité $C$ en Farads ($\text{F}$).
    *   *Relation charge-tension :* $q = C \cdot u$ (en convention récepteur).
    *   *Relation courant-tension :* $i = C \frac{du}{dt}$.
3.  **Bobine idéale :** Caractérisée par son inductance $L$ en Henrys ($\text{H}$).
    *   *Relation courant-tension (Convention récepteur) :* $u = L \frac{di}{dt}$.

---

## 2. Lois Générales de l'Électrocinétique

### Lois de Kirchhoff
*   **Loi des Nœuds (Conservation de la charge) :** 
    $$\sum_{\text{nœud}} i_k = 0$$
    *(en comptant positivement les courants qui quittent le nœud, négativement ceux qui y arrivent).*
*   **Loi des Mailles (Conservativité du champ électrostatique dans l'ARQS) :** 
    Le long d'une maille orientée fermée, la somme algébrique des tensions est nulle :
    $$\sum_{\text{maille}} u_k = 0$$

### Diviseurs de Tension et de Courant
*   **Diviseur de tension (Association en série de résistors) :**
    Soit $n$ résistors en série traversés par $i$. La tension aux bornes du résistor $R_k$ est :
    $$u_k = \frac{R_k}{\sum R_j} u_{\text{totale}}$$
*   **Diviseur de courant (Association en parallèle de résistors) :**
    Soit deux résistors $R_1$ et $R_2$ en parallèle soumis à la même tension $u$. Le courant $i_1$ traversant $R_1$ est :
    $$i_1 = \frac{G_1}{G_1 + G_2} i_{\text{totale}} = \frac{R_2}{R_1 + R_2} i_{\text{totale}}$$
    *(avec $G = 1/R$ la conductance).*

---

## 3. Théorèmes Généraux

### Théorème de Millman
Soit un nœud $N$ relié à $n$ branches comportant chacune l'association en série d'une source idéale de tension $E_k$ et d'une résistance $R_k$ (ou un dipôle linéaire équivalent de Thévenin). Le potentiel du nœud $N$, noté $V_N$, est donné par :
$$V_N = \frac{\sum_{k=1}^n \frac{E_k}{R_k}}{\sum_{k=1}^n \frac{1}{R_k}}$$

### Théorème de Thévenin
Tout dipôle linéaire actif équivalent (entre deux bornes $A$ et $B$) peut être remplacé par un modèle de Thévenin constitué :
*   D'une **f.e.m. de Thévenin** $E_{th}$ (tension à vide mesurée entre $A$ et $B$ : $E_{th} = u_{AB,\text{vide}}$).
*   En série avec une **résistance de Thévenin** $R_{th}$ (résistance équivalente vue entre $A$ et $B$ lorsque les sources indépendantes sont "éteintes" : sources de tension court-circuitées, sources de courant ouvertes).

$$\boxed{u_{AB} = E_{th} - R_{th} i}$$

### Théorème de Norton
Tout dipôle linéaire actif équivalent (entre $A$ et $B$) peut être remplacé par un modèle de Norton constitué :
*   D'un **courant électromoteur de Norton** $I_{n}$ (courant de court-circuit circulant de $A$ vers $B$ lorsque $A$ et $B$ sont reliés par un fil : $I_n = i_{AB,\text{cc}}$).
*   En parallèle avec une **résistance de Norton** $R_N = R_{th}$.

$$\boxed{i = I_n - G_N u_{AB}}$$

*(Passage de Thévenin à Norton : $I_n = \frac{E_{th}}{R_{th}}$ et $R_N = R_{th}$)*.

---

## 4. Régimes Transitoires (Ordre 1 et 2)

### Circuit RC ou RL (Ordre 1)
L'équation différentielle générale pour une grandeur $s(t)$ (tension ou courant) s'écrit sous la forme canonique :
$$\tau \frac{ds}{dt} + s = S_{\infty}$$
*   $\tau$ est le **temps caractéristique** du système ($\tau = RC$ pour un circuit RC, $\tau = \frac{L}{R}$ pour un circuit RL).
*   $S_{\infty}$ est la valeur de régime permanent ($t \to +\infty$).

**Solution générale :**
$$s(t) = (s(0^+) - S_{\infty}) e^{-t/\tau} + S_{\infty}$$

### Circuit RLC Série (Ordre 2)
Soumis à un échelon de tension $E$, l'intensité $i(t)$ ou la tension aux bornes du condensateur $u_C(t)$ vérifie une équation différentielle de la forme :
$$\frac{d^2s}{dt^2} + \frac{\omega_0}{Q} \frac{ds}{dt} + \omega_0^2 s = \text{Second membre}$$
*   $\omega_0 = \frac{1}{\sqrt{LC}}$ est la **pulsation propre** du système ($\text{rad}\cdot\text{s}^{-1}$).
*   $Q$ est le **facteur de qualité** ($Q = \frac{1}{R}\sqrt{\frac{L}{C}}$ pour un circuit RLC série).

**Classification des régimes selon $Q$ (ou l'amortissement $\xi = \frac{1}{2Q}$) :**
1.  **Régime apériodique ($Q < 1/2$) :** Deux racines réelles pour l'équation caractéristique. Retour rapide au calme sans oscillation.
2.  **Régime critique ($Q = 1/2$) :** Racine double. Retour au calme le plus rapide sans dépassement.
3.  **Régime pseudo-périodique ($Q > 1/2$) :** Racines complexes conjuguées. Oscillations amorties de pulsation $\omega = \omega_0 \sqrt{1 - \frac{1}{4Q^2}}$.

---

## 5. Régime Sinusoïdal Forcé et Analyse Complexe

En régime sinusoïdal permanent (RSP), toute grandeur réelle $x(t) = X_m \cos(\omega t + \phi_x)$ est associée à une **amplitude complexe** $\underline{X} = X_m e^{j\phi_x}$ (avec $j^2 = -1$).
*   $x(t) = \text{Re}\left(\underline{X} e^{j\omega t}\right)$.
*   La dérivation par rapport au temps $\frac{d}{dt}$ correspond en complexe à une multiplication par $j\omega$.

### Impédances Complexes $\underline{Z}$ ($\underline{Z} = \frac{\underline{U}}{\underline{I}}$)
*   **Résistance :** $\underline{Z}_R = R$
*   **Condensateur :** $\underline{Z}_C = \frac{1}{j\omega C} = - \frac{j}{\omega C}$
*   **Bobine :** $\underline{Z}_L = j\omega L$

Les lois de l'électrocinétique s'appliquent à l'identique avec les nombres complexes (Ponts diviseur, Millman, Thévenin avec des impédances complexes).

---

## 6. Méthodes et Savoir-Faire

1.  **Étude d'un circuit transitoire :**
    *   Identifier la variable d'état (continuité de $u_C$ pour le condensateur, continuité de $i_L$ pour la bobine).
    *   Déterminer les conditions initiales à $t = 0^+$ en utilisant la continuité.
    *   Établir l'équation différentielle par la loi des mailles ou des nœuds.
    *   Résoudre (solution homogène + solution particulière).
2.  **Recherche d'une fonction de transfert (en complexe) :**
    *   Identifier l'entrée $E$ et la sortie $S$.
    *   Calculer $\underline{H}(j\omega) = \frac{\underline{S}}{\underline{E}}$.
    *   Mettre sous forme canonique pour faire apparaître le gain statique, la pulsation propre $\omega_0$ et le facteur de qualité $Q$.

---

## 7. Pièges à Éviter (Attention aux Erreurs Classiques)

*   **Continuité vs Discontinuité :** 
    *   $u_C$ est **toujours continue** (sauf si le courant est infini, ce qui est physiquement impossible).
    *   $i_L$ est **toujours continu** (sauf si la tension est infinie).
    *   Attention : $i_C$ et $u_L$ **ne sont pas** continus !
*   **Erreur de signe dans les conventions :** Toujours flécher explicitement $u$ et $i$ sur le schéma avant d'écrire la moindre équation (et bien préciser "en convention récepteur" ou "générateur").
*   **Oubli de l'ARQS :** Ne jamais appliquer les lois des régimes stationnaires si la fréquence du signal est très élevée (ondes électromagnétiques pures dans les fils).
*   **Puissance reçue vs fournie :** Bien vérifier le signe de la puissance $P = u \cdot i$ en fonction de la convention choisie. En convention récepteur, $P > 0$ signifie que le dipôle consomme de la puissance.