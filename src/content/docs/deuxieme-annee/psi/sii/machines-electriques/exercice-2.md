---
title: 'Exercice 2 : Machine asynchrone et champs tournants'
of: "Sciences Industrielles pour l'Ingénieur - Filière PSI"
description: 'Problème d entraînement type concours officiel.'
---

# PROBLÈME GUIDÉ : Étude d'une machine asynchrone et du champ tournant

## Énoncé

On s'intéresse à l'entraînement d'un ventilateur industriel par une machine asynchrone (MAS) triphasée à cage d'écureuil. L'objectif est d'étudier la création du champ magnétique tournant au stator, d'établir le schéma équivalent par phase du modèle de Kapp, et d'analyser le comportement énergétique et dynamique du système couplé.

**Données constructeur et caractéristiques :**
* Tension nominale d'alimentation (réseau $3 \times 400\text{ V}$, $50\text{ Hz}$) : $U = 400\text{ V}$ entre phases.
* Fréquence du réseau : $f = 50\text{ Hz}$.
* Nombre de paires de pôles : $p = 2$.
* Résistance d'un enroulement statorique : $R_s = 1{,}2\,\Omega$.
* Résistance rotorique ramenée au stator : $R_r' = 1{,}0\,\Omega$.
* Inductances de fuite : $L_{s\sigma} = L_{r\sigma}' = 8\,\text{mH}$.
* Inductance magnétisante : $L_m = 120\,\text{mH}$.
* Couple résistant du ventilateur : $T_r = k \cdot \Omega^2$ avec $k = 0{,}05\,\text{N}\cdot\text{m}\cdot\text{s}^2$.

---

## Questions

### Partie I : Création du champ tournant statorique
1. Exprimer la vitesse de synchronisme $\Omega_s$ en rad/s puis en tr/min.
2. Justifier qualitativement, à l'aide des équations de Blondel ou de la superposition des champs, qu'un système de trois courants triphasés sinusoïdaux déphasés de $120^\circ$ et parcourant des enroulements déphasés spatialement de $120^\circ$ crée un champ magnétique tournant dont on précisera la vitesse.

### Partie II : Modélisation électromécanique (Modèle de Kapp)
3. Établir l'expression du glissement $g$ en fonction de la vitesse de rotation rotorique $\Omega$ et de $\Omega_s$.
4. Représenter le schéma équivalent par phase de la machine asynchrone au voisinage du fonctionnement nominal.
5. Exprimer la puissance transmise au rotor $P_tr$ en fonction du courant rotorique ramené au stator $I_r'$ et de $R_r'$ et $g$. En déduire l'expression du couple électromagnétique $T_{em}$.

### Partie III : Analyse critique et limites du modèle
6. Calculer numériquement le couple électromagnétique $T_{em}$ pour un glissement $g = 0{,}04$.
7. **Analyse critique :** Discuter des limites de ce modèle linéaire (saturation magnétique, influence de l'effet pelliculaire au rotor, échauffement). Quelles sont les conséquences d'une variation importante de la fréquence statorique (alimentation par onduleur) sur les hypothèses de ce modèle ?

---

## Pistes et Méthode

* **Partie I :** Penser à la relation liant la pulsation électrique $\omega$, le nombre de paires de pôles $p$ et la vitesse de synchronisme. Le théorème de Leblanc permet de décomposer des champs alternatifs en champs tournants.
* **Partie II :** Le rotor est le siège de courants induits à la fréquence $f_r = g \cdot f$. L'impédance rotorique vue du stator fait intervenir le terme $R_r'/g$.
* **Partie III :** Pour l'analyse critique, examinez les non-linéarités des matériaux ferromagnétiques et la dépendance fréquentielle des paramètres.

---

## Corrigé détaillé

### Partie I : Création du champ tournant statorique
1. La vitesse de synchronisme $\Omega_s$ (en rad/s) est donnée par :
   $$\Omega_s = \frac{\omega}{p} = \frac{2\pi f}{p}$$
   A.N. : $\Omega_s = \frac{2 \pi \times 50}{2} = 50\pi \approx 157{,}08\,\text{rad/s}$.
   En tours par minute :
   $$N_s = \frac{60 f}{p} = \frac{60 \times 50}{2} = 1500\,\text{tr/min}$$.

2. Soit trois enroulements statoriques déphasés de $\frac{2\pi}{3}$ dans l'espace. Leurs f.m.m. (forces magnétomotrices) créent des champs alternatifs. En les alimentant par des courants triphasés symétriques, la somme vectorielle des trois champs magnétiques sinusoïdaux (en vertu du théorème de Leblanc) s'annule pour les composantes inverses et se combine pour former un champ unique résultant tournant à la vitesse de synchronisme $\Omega_s$ dans l'entrefer.

### Partie II : Modélisation électromécanique
3. Par définition, le glissement $g$ vaut :
   $$g = \frac{\Omega_s - \Omega}{\Omega_s}$$

4. Le schéma équivalent par phase (modèle de Kapp simplifié en négligeant le courant à vide devant le courant en charge, ou modèle complet ramené au stator) comporte :
   * Une résistance $R_s$ et une réactance de fuite $X_{s\sigma} = L_{s\sigma}\omega$ en série.
   * Une branche magnétisante $X_m = L_m\omega$ en parallèle.
   * Une résistance variable $R_r'\frac{1-g}{g}$ représentant la puissance mécanique convertie et $R_r'/g$ représentant la puissance totale transmise au rotor.

5. La puissance transmise au rotor est :
   $$P_{tr} = 3 \cdot R_r' \cdot \frac{I_r'^2}{g}$$
   Puisque $P_{tr} = \Omega_s \cdot T_{em}$, on en déduit le couple électromagnétique :
   $$T_{em} = \frac{P_{tr}}{\Omega_s} = \frac{3}{\Omega_s} \cdot \frac{R_r'}{g} \cdot I_r'^2$$

### Partie III : Analyse critique et limites du modèle
6. Avec $g = 0{,}04$, calculons l'impédance totale ramenée au stator par phase. (En première approximation pour l'application numérique, en négligeant le courant magnétisant devant les chutes de tension dans les impédances de fuite et rotoriques) :
   L'impédance totale par phase est $Z_{eq} \approx (R_s + \frac{R_r'}{g}) + j(X_{s\sigma} + X_{r\sigma}')$.
   * $R_s + \frac{R_r'}{g} = 1{,}2 + \frac{1{,}0}{0{,}04} = 1{,}2 + 25 = 26{,}2\,\Omega$.
   * $X_{s\sigma} + X_{r\sigma}' = 2\pi \times 50 \times (8 + 8) \times 10^{-3} = 314 \times 0{,}016 \approx 5{,}03\,\Omega$.
   
   Le courant par phase (tension simple $V = \frac{400}{\sqrt{3}} \approx 231\,\text{V}$) :
   $$I_r' \approx \frac{V}{\sqrt{(R_s + R_r'/g)^2 + (X_{s\sigma} + X_{r\sigma}')^2}} = \frac{231}{\sqrt{26{,}2^2 + 5{,}03^2}} \approx \frac{231}{26{,}68} \approx 8{,}66\,\text{A}$$
   
   On en déduit le couple :
   $$T_{em} = \frac{3 \times 1{,}0 \times (8{,}66)^2}{0{,}04 \times 157{,}08} = \frac{3 \times 1{,}0 \times 75}{6{,}283} \approx 35{,}8\,\text{N}\cdot\text{m}$$.

7. **Analyse critique des limites du modèle :**
   * **Saturation magnétique :** Le modèle linéaire suppose que l'inductance magnétisante $L_m$ est constante. Or, dans la réalité, le fer est soumis à la saturation, ce qui fait chuter $L_m$ à fort courant (notamment au démarrage ou en surcharge).
   * **Effet pelliculaire (effet Kelvin) :** Les barres du rotor voient une fréquence $f_r = g \cdot f$ variable. Au démarrage ($g=1$), $f_r = 50\,\text{Hz}$, les courants sont repoussés vers la périphérie des barres, augmentant la résistance rotorique $R_r'$ et réduisant l'inductance de fuite $r_r'$. Le modèle à paramètres constants échoue à prédire précisément le couple de démarrage.
   * **Alimentation par onduleur (MLI) :** Si la machine est alimentée par une source de tension électronique, l'apparition d'harmoniques de tension engendre des harmoniques de courant haute fréquence, provoquant des couples pulsatiles et des pertes Joule supplémentaires non comptabilisées dans ce modèle fondamental.