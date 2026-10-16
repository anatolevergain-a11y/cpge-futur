---
title: 'Cours : Thermodynamique et Électrocinétique'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Thermodynamique et Électrocinétique
Classe: ** PTSI  
**Matière :** Physique-Chimie  

---

## Introduction et motivations
En classe de PTSI, l'étude conjointe de la thermodynamique et de l'électrocinétique permet d'aborder la conversion de l'énergie et les bilans énergétiques dans les systèmes complexes. Cette fiche se focalise sur les aspects énergétiques des circuits électriques, l'analogie entre grandeurs et l'application du premier et du second principe de la thermodynamique à des systèmes électromagnétiques.

---

## I. Rappels d'électrocinétique et Bilan énergétique

### 1. Conventions et Puissance
Dans tout dipôle $D$ traversé par un courant d'intensité $i$ et aux bornes duquel règne une tension $u$ :
* **Convention récepteur :** le courant entre par la borne de potentiel positif. La puissance électrique reçue par le dipôle est :
  $$\mathcal{P}_{\text{reçue}} = u \cdot i$$
* **Convention générateur :** le courant sort par la borne positive. La puissance fournie est :
  $$\mathcal{P}_{\text{fournie}} = u \cdot i$$

### 2. Effet Joule dans un conducteur ohmique
Pour une résistance $R$ obéissant à la loi d'Ohm $u = R i$ en convention récepteur, la puissance électrique reçue est intégralement convertie en énergie thermique par effet Joule :
$$\mathcal{P}_J = R i^2 = \frac{u^2}{R} = u i$$
Cette transformation est irréversible (dissipation thermique vers l'extérieur).

---

## II. Premier Principe de la Thermodynamique appliqué aux systèmes électriques

### 1. Enoncé pour un système fermé
Le premier principe de la thermodynamique, appliqué à un système fermé au repos macroscopique, s'écrit en convention temporelle :
$$\Delta U = W + Q$$
Où :
* $\Delta U$ est la variation d'énergie interne du système ($\text{J}$).
* $W$ est le travail des forces extérieures ($\text{J}$).
* $Q$ est le transfert thermique reçu par le système ($\text{J}$).

### 2. Puissance électrique et travail
Lorsque le système échange de l'énergie électrique avec l'extérieur, le travail électrique élémentaire $\delta W_{\text{él}}$ reçu pendant une durée $\dt$ s'exprime par :
$$\delta W_{\text{él}} = \mathcal{P}_{\text{reçue}} \dt = u(t) i(t) \dt$$

Ainsi, pour un dipôle siège d'une transformation monotherme à température extérieure $T_{\text{ext}}$, la variation infinitésimale d'énergie interne s'écrit :
$$\dU = \delta W_{\text{él}} + \delta Q = u i \dt + \delta Q$$

---

## III. Second Principe et Dissipation Électrocinétique

### 1. Création d'entropie
Le second principe de la thermodynamique introduit l'entropie $S$ et la notion de création d'entropie $S_{\text{cr}}$ pour toute transformation :
$$\Delta S = S_{\text{échange}} + S_{\text{cr}} \quad \text{avec} \quad S_{\text{cr}} \ge 0$$
L'égalité n'ayant lieu que pour les transformations réversibles.

### 2. Application au résistor
Considérons un résistor de résistance $R$ traversé par un courant $i$ et thermostaté à la température $T_0$. 
* La puissance thermique cédée au milieu extérieur (supposé thermostat) est $\mathcal{P}_J = Ri^2$.
* Le transfert thermique reçu par le résistor de la part du thermostat est $\delta Q = - R i^2 \dt$.

La variation d'entropie du résistor sur un cycle ou en régime permanent ($\Delta U = 0 \implies \delta Q + \delta W_{\text{él}} = 0$) conduit à une création d'entropie strictement positive due à l'effet Joule :
$$S_{\text{cr}} = \int \left( \frac{R i^2}{T_0} \right) \dt > 0 \quad (\text{si } i \neq 0)$$
Conclusion: ** Tout passage de courant dans une résistance est un phénomène intrinsèquement irréversible associé à une création d'entropie.

---

## IV. Conversion Électromécanique : Le Moteur à Courant Continu (MCC)

Le moteur à courant continu est l'exemple type couplant l'électrocinétique et la mécanique (thermodynamique des systèmes ouverts ou fermés en régime).

### 1. Équations électriques et mécaniques
* **Circuit induit :** Modélisé par une résistance $R$, une inductance $L$ et une force contre-électromotrice (f.c.e.m.) $e(t) = K \Omega$ (où $K$ est une constante de moteur et $\Omega$ la vitesse de rotation) :
  $$u(t) = R i(t) + L \frac{\di}{\dt} + e(t)$$
* **Relation mécanique :** Le couple électromagnétique est $C_em = K i(t)$. L'équation fondamentale de la dynamique (E.F.D.) en rotation s'écrit (avec $J$ le moment d'inertie et $f$ le coefficient de frottement visqueux) :
  $$J \frac{\d\Omega}{\dt} = C_{em} - C_{\text{résistant}} - f \Omega$$

### Bilan de puissance instantané
En multipliant l'équation électrique par $i(t)$ :
$$u i = R i^2 + L i \frac{\di}{\dt} + e i$$
* $u i$ : Puissance électrique totale reçue.
* $R i^2$ : Puissance dissipée par effet Joule (pertes thermiques).
* $L i \frac{\di}{\dt}$ : Dérivée par rapport au temps de l'énergie magnétique stockée dans la bobine ($\frac{1}{2} L i^2$).
* $e i = C_{em} \Omega$ : **Puissance électromécanique convertie**, qui se divise ensuite en puissance mécanique utile et en pertes mécaniques par frottement.

---

## V. À retenir / Démonstrations clés
1. **Savoir exprimer la puissance** en convention récepteur et générateur.
2. **Identifier l'origine de l'irréversibilité** dans un circuit électrique : l'effet Joule est toujours créateur d'entropie ($S_{\text{cr}} > 0$).
3. **Mener un bilan énergétique complet** sur un système électromécanique en combinant le premier principe (sous forme de puissances) et les lois de l'électrocinétique.