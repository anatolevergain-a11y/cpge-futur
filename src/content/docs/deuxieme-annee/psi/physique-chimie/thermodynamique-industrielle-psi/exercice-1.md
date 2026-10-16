---
title: 'Exercice 1 : Bilans en système ouvert'
description: 'Problème d entraînement type concours pour PSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On s'intéresse à un composant thermodynamique essentiel des installations de réfrigération et de climatisation : le détendeur thermostatique ou le condenseur, modélisé ici de manière générique comme une tuyauterie horizontale dans laquelle s'écoule un fluide frigorigène (le R134a) en régime permanent.

Le fluide entre dans la section de contrôle à l'état de liquide sous-refroidi ou de vapeur selon le sous-système considéré. On se place dans le cadre des systèmes ouverts en écoulement permanent (1D, homogène dans les sections traversées).

**Données et notations :**
*   Fluide : R134a, assimilé à un fluide réel dont on connaît les propriétés thermodynamiques via des tables ou le diagramme de Mollier ($P, h$).
*   Section d'entrée (1) : $P_1 = 1{,}2\text{ MPa}$, $T_1 = 40\text{ }\circ\text{C}$, vitesse $C_1 = 2{,}0\text{ m}\cdot\text{s}^{-1}$, section $S_1 = 5{,}0\times 10^{-4}\text{ m}^2$.
*   Section de sortie (2) : $P_2 = 0{,}2\text{ MPa}$, $T_2 = -10\text{ }\circ\text{C}$, section $S_2 = 2{,}0\times 10^{-3}\text{ m}^2$.
*   Masses molaires, constantes et flux : la masse volumique du fluide en (1) est notée $\rho_1$. On donne $\rho_1 = 1200\text{ kg}\cdot\text{m}^{-3}$.
*   L'axe de la tuyauterie est horizontal. Les variations d'énergie potentielle de pesanteur sont négligeables.
*   Le système échange thermiquement avec l'extérieur de manière thermique ou est parfaitement calorifugé selon les questions.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1.  **Conservation de la masse :** Exprimer le débit massique $D_m$ du fluide en écoulement permanent. Calculer sa valeur numérique en $\text{kg}\cdot\text{s}^{-1}$. En déduire la vitesse moyenne du fluide $C_2$ à la sortie (2), sachant que la masse volumique du fluide en (2) vaut $\rho_2 = 10\text{ kg}\cdot\text{m}^{-3}$ (vapeur détendue).
2.  **Premier principe pour un système ouvert :** Établir le premier principe de la thermodynamique sous forme ouverte (thermique et mécanique) pour un système en écoulement permanent, en explicitant tous les termes énergétiques.
3.  **Application au détendeur adiabatique :** On suppose que la transformation entre (1) et (2) est un détenteur isenthalpique (adiafitque, sans travail technique fourni à l'extérieur). 
    *   Simplifier l'expression générale du premier principe obtenue à la question 2.
    *   Exprimer la variation d'enthalpie massique $h_2 - h_1$. Conclure sur l'évolution des énergies cinétiques dans cette modélisation classique.
4.  **Bilan thermique avec transfert thermique :** On modélise maintenant un échangeur thermique où le fluide reçoit un transfert thermique surfacique ou global $Q$ de la part de l'extérieur. L'enthalpie massique du fluide passe de $h_1 = 270\text{ kJ}\cdot\text{kg}^{-1}$ à $h_2 = 410\text{ kJ}\cdot\text{kg}^{-1}$. Le débit massique est de $D_m = 0{,}05\text{ kg}\cdot\text{s}^{-1}$. Le système ne fournit aucun travail utile ($W_{\text{ut}} = 0$).
    *   Calculer la puissance thermique $\mathcal{P}_{\text{th}}$ reçue par le fluide.
5.  **Analyse critique du modèle :** 
    *   Discuter l'hypothèse d'uniformité de la vitesse dans les sections (profil de Poiseuille vs profil piston). Quel impact qualitatif cela a-t-il sur le terme cinétique $\frac{1}{2} C^2$ dans le premier principe ouvert ?
    *   Pourquoi l'approximation d'un écoulement adiabatique dans un détendeur est-elle excellente en pratique malgré la présence de parois ?

---

### 💡 Pistes & Indications méthodologiques

*   **Question 1 :** Pensez à l'équation de continuité en régime permanent : $\dot{m} = \rho_1 S_1 C_1 = \rho_2 S_2 C_2$.
*   **Question 2 :** Partez de la conservation de l'énergie totale (interne + cinétique + potentielle) pour une tranche élémentaire de fluide traversant le volume de contrôle entre $t$ et $t+dt$, en tenant compte du travail des forces de pression aux frontières (terme $v dP$ ou $P dV$).
*   **Question 3 :** Identifiez clairement les termes nuls : pas de travail fourni (pas de turbine/compresseur), pas de transfert thermique (adiabatique), variations d'altitude nulles. Comparez l'ordre de grandeur de la variation d'énergie cinétique devant la variation d'enthalpie.
*   **Question 4 :** Appliquez le premier principe sous sa forme massique ou sous forme de puissance : $\mathcal{P}_{\text{th}} = D_m (h_2 - h_1) + \dots$ (en négligeant les variations cinétiques si elles sont du second ordre).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Conservation de la masse
En régime permanent, le débit massique se conserve à travers toute section de la tuyauterie. L'expression générale du débit massique est :
$$D_m = \rho_1 S_1 C_1 = \rho_2 S_2 C_2$$

A.N. pour le débit massique :
$$D_m = 1200\text{ kg}\cdot\text{m}^{-3} \times (5{,}0\times 10^{-4}\text{ m}^2) \times 2{,}0\text{ m}\cdot\text{s}^{-1}$$
$$D_m = 1{,}2\text{ kg}\cdot\text{s}^{-1}$$

Pour la vitesse de sortie $C_2$ :
$$C_2 = \frac{D_m}{\rho_2 S_2} = \frac{1{,}2}{10 \times 2{,}0\times 10^{-3}} = \frac{1{,}2}{0{,}02} = 60\text{ m}\cdot\text{s}^{-1}$$

---

#### 2. Premier principe pour un système ouvert
Pour un système ouvert en écoulement permanent (stationnaire) traversé par un unique flux de matière de débit massique $D_m$, le premier principe de la thermodynamique s'écrit par unité de temps (en puissance) :
$$\mathcal{P}_{\text{th}} + \mathcal{P}_{\text{ut}} = D_m \left[ \left( h_2 - h_1 \right) + \frac{1}{2}\left( C_2^2 - C_1^2 \right) + g(z_2 - z_1) \right]$$

Où :
*   $\mathcal{P}_{\text{th}}$ est la puissance thermique reçue par le fluide de la part de l'extérieur ($\text{W}$).
*   $\mathcal{P}_{\text{ut}}$ est la puissance utile (mécanique, ex: arbre de turbine ou de compresseur) cédée ou reçue ($\text{W}$).
*   $h$ est l'enthalpie massique ($\text{J}\cdot\text{kg}^{-1}$).
*   $\frac{1}{2}C^2$ est l'énergie cinétique massique ($\text{J}\cdot\text{kg}^{-1}$).
*   $gz$ est l'énergie potentielle massique ($\text{J}\cdot\text{kg}^{-1}$).

---

#### 3. Application au détendeur adiabatique
Dans un détendeur :
*   Il n'y a pas de composant mécanique mobile : $\mathcal{P}_{\text{ut}} = 0$.
*   La transformation est rapide ou l'appareil est calorifugé : $\mathcal{P}_{\text{th}} = 0$.
*   La tuyauterie est horizontale : $z_1 = z_2$.

Le premier principe se simplifie en :
$$0 = D_m \left[ (h_2 - h_1) + \frac{1}{2}(C_2^2 - C_1^2) \right]$$

Puisque $D_m \neq 0$ :
$$h_2 - h_1 = -\frac{1}{2}(C_2^2 - C_1^2)$$

*Discussion sur les énergies cinétiques :* Même si la vitesse augmente (passant de $2\text{ m}\cdot\text{s}^{-1}$ à $60\text{ m}\cdot\text{s}^{-1}$), la variation d'énergie cinétique massique vaut :
$$\Delta e_c = \frac{1}{2}(60^2 - 2^2) \approx \frac{3600}{2} = 1800\text{ J}\cdot\text{kg}^{-1} = 1{,}8\text{ kJ}\cdot\text{kg}^{-1}$$
Dans un changement d'état ou une forte détente, les variations d'enthalpie se comptent en dizaines ou centaines de $\text{kJ}\cdot\text{kg}^{-1}$. Le terme cinétique est donc très souvent négligeable, ce qui conduit à l'approximation classique de la **détente isenthalpique** :
$$h_2 \approx h_1$$

---

#### 4. Bilan thermique avec transfert thermique
Pour l'échangeur thermique, on a :
*   $\mathcal{P}_{\text{ut}} = 0$
*   $z_1 = z_2$
*   Les variations d'énergie cinétique sont négligées devant les variations d'enthalpie.

Le premier principe donne :
$$\mathcal{P}_{\text{th}} = D_m (h_2 - h_1)$$

A.N. :
$$\mathcal{P}_{\text{th}} = 0{,}05\text{ kg}\cdot\text{s}^{-1} \times (410\times 10^3 - 270\times 10^3)\text{ J}\cdot\text{kg}^{-1}$$
$$\mathcal{P}_{\text{th}} = 0{,}05 \times 140\times 10^3 = 7000\text{ W} = 7{,}0\text{ kW}$$
Le fluide reçoit une puissance thermique de $7{,}0\text{ kW}$.

---

#### 5. Analyse critique du modèle
*   **Profil de vitesse (Poiseuille vs Piston) :** Le modèle 1D suppose que la vitesse $C$ est uniforme dans toute la section $S$ (profil "piston"). En réalité, un écoulement visqueux en conduite présente un profil parabolique (Poiseuille en régime laminaire) ou adouci (turbulent). Mathématiquement, le terme d'énergie cinétique exact fait intervenir le flux de $C^3$ à travers la section :
    $$\iint_{\text{section}} \frac{1}{2} \rho C^3 dS \neq \frac{1}{2} \dot{m} C_{\text{moyen}}^2$$
    On introduit parfois un coefficient de Coriolis $\alpha$ pour corriger ce terme, bien que dans la grande majorité des problèmes de concours en PSI, l'hypothèse du profil uniforme reste le standard requis sauf mention explicite du profil de vitesse.
*   **Caractère adiabatique du détendeur :** Un détendeur réel possède des parois en métal (bon conductrice thermique) en contact avec l'air ambiant. Cependant, la masse de fluide traversant l'appareil par seconde est élevée devant la résistance thermique des parois et la surface d'échange est restreinte. Le temps de séjour du fluide dans le détendeur est extrêmement faible ($\sim$ millisecondes). Par conséquent, les transferts thermiques avec l'extérieur n'ont pas le temps de s'établir de manière significative, ce qui valide excellemment l'hypothèse adiabatique ($\mathcal{P}_{\text{th}} \approx 0$).