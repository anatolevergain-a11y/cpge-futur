---
title: 'Cours : Conversion électromécanique'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Conversion Électromécanique (PSI - SII)

La conversion électromécanique est au cœur des systèmes automatisés et de la chaîne d'énergie (actionneurs). En classe de PSI, l'étude se restreint généralement aux régimes quasi-stationnaires, aux systèmes magnétiques indéformables (entrefer constant ou variable de type reluctance) et aux machines à courants alternatifs ou continus par le biais de modèles macroscopiques.

---

## 1. Rapports énergétiques et bilans de puissance

### A. Bilan global d'un convertisseur électromécanique
Un convertisseur électromécanique possède des ports électriques et un port mécanique. 
Soit $P_{\text{elec}}$ la puissance électrique entrante, $P_{\text{meca}}$ la puissance mécanique sortante, et $P_{\text{pertes}}$ les pertes (Joule, fer, mécaniques).

$$\frac{dE_{\text{stock}}}{dt} = P_{\text{elec}} - P_{\text{meca}} - P_{\text{pertes}}$$

En régime permanent (magnétique), l'énergie stockée $E_{\text{stock}}$ dans le champ magnétique est constante en moyenne sur une période, d'où le bilan en puissance moyenne :

$$\langle P_{\text{elec}} \rangle = \langle P_{\text{meca}} \rangle + \langle P_{\text{pertes}} \rangle$$

---

## 2. Machine à Courant Continu (MCC)

La MCC est le modèle de base pour comprendre la réversibilité et le contrôle de vitesse et de couple.

### A. Équations de fonctionnement (Modèle linéaire)
Le rotor (induit) est alimenté par une tension $U$ via un balai/collecteur, et le stator (inducteur) crée un flux magnétique constant $\Phi$ (soit par aimants permanents, soit par un enroulement séparé).

*   **Équation électrique (Induit) :**
    $$U = E + R \cdot I$$
    Avec :
    *   $U$ : tension aux bornes de l'induit (\text{V})
    *   $E$ : force contre-électromotrice (f.c.e.m.) (\text{V})
    *   $R$ : résistance de l'induit (\text{ohm})
    *   $I$ : courant d'induit (\text{A})

*   **Relation électromécanique (f.c.e.m. et couple) :**
    $$E = K \cdot \Omega$$
    $$C_{\text{em}} = K \cdot I$$
    Avec :
    *   $\Omega$ : vitesse de rotation du rotor (\text{rad.s}^{-1})
    *   $K$ : constante de la machine dépendant du flux et de la construction (\text{V.s.rad}^{-1} ou \text{N.m.A}^{-1})
    *   $C_{\text{em}}$ : couple électromécanique (\text{N.m})

> **Théorème (Conservation de la puissance électromagnétique) :**
> En négligeant les pertes joules magnétiques internes, la puissance électrique convertie en puissance mécanique est :
> $$P_{\text{em}} = E \cdot I = C_{\text{em}} \cdot \Omega$$

### B. Équation dynamique de l'ensemble (Moteur + Charge)
En appliquant le Théorème du Moment Cinétique (TMC) sur l'axe du rotor d'inertie $J$ :

$$J \frac{d\Omega}{dt} = C_{\text{em}} - C_{\text{r}} - f \cdot \Omega$$

Avec :
*   $C_{\text{r}}$ : couple résistant de la charge (\text{N.m})
*   $f$ : coefficient de frottement visqueux (\text{N.m.s.rad}^{-1})

---

## 3. Machine Synchrone (MS)

La machine synchrone est caractérisée par un rotor (inducteur) qui tourne à la **vitesse de synchronisme**, exactement à la même vitesse que le champ tournant créé par le stator (induit).

### A. Caractéristiques cinématiques
La vitesse de rotation $\Omega$ du rotor est liée à la pulsation des tensions statoriques $\omega$ et au nombre de paires de pôles $p$ :

$$\Omega = \frac{\omega}{p}$$

### B. Modèle équivalent par phase (Modèle de Behn-Eschenburg / Non saturé)
Pour une étude diphasée ou ramenée à une phase équivalente (système triphasé équilibré), on modélise l'induit par une f.e.m. $E$ en série avec une réactance synchrone $X$ (et une résistance $R$ souvent négligée devant $X$).

*   **Équation électrique par phase :**
    $$\underline{V} = \underline{E} + (R + jX) \underline{I} \approx \underline{E} + jX \underline{I}$$

---

## 4. Machine Asynchrone (MAS) - "Moteur Cagnard"

La machine asynchrone (ou à induction) ne possède pas d'alimentation électrique au rotor. Les courants rotoriques sont induits par les variations du champ magnétique tournant statorique.

### A. Glissement
Le rotor tourne à une vitesse $\Omega$ légèrement inférieure à la vitesse de synchronisme $\Omega_s = \omega/p$. On définit le **glissement** $g$ par :

$$g = \frac{\Omega_s - \Omega}{\Omega_s}$$

*   Au démarrage ($g = 1$, $\Omega = 0$).
*   En fonctionnement moteur nominal ($0 < g < 0.05$).

### B. Fréquence et courants rotoriques
La fréquence des courants induits au rotor n'est plus la fréquence réseau $f$, mais la fréquence de glissement :

$$f_r = g \cdot f$$

---

## 5. Méthodes et Démarche de Résolution (Exercices de PSI)

1.  **Identifier les grandeurs d'entrée et de sortie :** S'agit-il d'un fonctionnement en moteur (conversion $P_{\text{elec}} \to P_{\text{meca}}$) ou en génératrice/frein ($P_{\text{meca}} \to P_{\text{elec}}$) ?
2.  **Établir le schéma équivalent :** Écrire les lois des nœuds et des mailles (Kirchhoff) côté électrique.
3.  **Appliquer les bilans énergétiques :** Isoler les pertes (Joule dans les enroulements $P_j = R I^2$, pertes fer, pertes mécaniques) pour relier la puissance utile à la puissance absorbée.
4.  **Traduire le comportement dynamique :** Utiliser systématiquement le TMC (principe fondamental de la dynamique en rotation) pour relier le couple moteur, le couple résistant et l'accélération.

---

## 6. Pièges à Éviter / Erreurs Fréquentes

*   **Attention aux unités :** Ne pas confondre vitesse de rotation en tours par minute ($N$ en tr/min) et vitesse angulaire en radians par seconde ($\Omega = \frac{2\pi N}{60}$).
*   **Glissement de la MAS :** Ne jamais appliquer $\Omega = \Omega_s$ pour une machine asynchrone en charge ! Si $g = 0$, le couple électromagnétique est nul ($C_{\text{em}} = 0$).
*   **Oubli des pertes :** Dans un bilan de puissance, ne pas sommer bêtement $P_{\text{abs}}$ et $P_{\text{util}}$ sans comptabiliser les pertes Joule ($RI^2$) et les pertes collectives.
*   **Sens des grandeurs (Conventions) :** 
    *   Convention **récepteur** pour un moteur ($\underline{V} \cdot \underline{I} > 0$ en moyenne).
    *   Convention **générateur** pour une dynamo/alternateur.