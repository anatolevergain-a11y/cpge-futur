---
title: "Concours Agro-Véto 2024 - Physique-Chimie"
description: "Sujet d'annale officiel du concours Agro-Véto intégralement corrigé avec barème pas à pas."
sidebar:
  badge:
    text: "Annale Concours"
    variant: "danger"
---

## 📄 Partie 1 : Énoncé Officiel du Sujet

Le sujet est composé de trois parties indépendantes abordant des modélisations physiques et chimiques appliquées aux sciences du vivant.

### Partie A : Thermodynamique chimique et équilibre d'un métabolite
On étudie l'isomérisation d'un substrat $S$ en produit $P$ au sein d'une cellule à la température biologique $T = 310 \text{ K}$. La réaction chimique associée est modélisée par :
$$S_{(aq)} \rightleftarrows P_{(aq)}$$

1. Écrire l'expression de la constante d'équilibre thermodynamique $K^\circ$ de cette réaction à partir des activités chimiques des espèces supposées idéales.
2. Rappeler la relation thermodynamique reliant l'enthalpie libre standard de réaction $\Delta_r G^\circ$ à la constante d'équilibre $K^\circ$ et à la température $T$.
3. À l'aide de données tabulées, on trouve $\Delta_r G^\circ = -2.8 \text{ kJ/mol}$ à $T = 310 \text{ K}$. Calculer la valeur numérique de $K^\circ$. On donne la constante des gaz parfaits $R = 8.314 \text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$.
4. Déterminer le sens d'évolution spontanée du système si le rapport des concentrations initiales est tel que $\frac{[P]_0}{[S]_0} = 5.0$.

### Partie B : Hydrodynamique et circulation sanguine (Loi de Poiseuille)
Le sang est assimilé à un fluide newtonien incompressible de masse volumique $\rho = 1.06 \times 10^3 \text{ kg/m}^3$ et de viscosité dynamique $\eta = 3.5 \times 10^{-3} \text{ Pa}\cdot\text{s}$. On étudie son écoulement stationnaire, laminaire et unidirectionnel dans un capillaire sanguin cylindrique de rayon $R = 5.0 \mu\text{m}$ et de longueur $L = 1.0 \text{ mm}$.

5. Établir par un bilan de forces sur une portion de fluide cylindrique de rayon $r$ et de longueur $dz$ l'expression du profil de vitesse $v(r)$ dans le capillaire, en fonction du rayon $r$, de la viscosité $\eta$, et du gradient de pression $\frac{dP}{dz} = -\frac{\Delta P}{L}$.
6. En déduire l'expression du débit volumique $D_v$ à travers le capillaire (Loi de Poiseuille).
7. Calculer la valeur numérique du débit volumique $D_v$ sachant que la chute de pression le long du capillaire est $\Delta P = 2.0 \times 10^3 \text{ Pa}$.

### Partie C : Cinétique enzymatique et inhibition
L'hydrolyse d'un substrat $S$ catalysée par une enzyme $E$ suit le mécanisme de Michaelis-Menten :
$$E + S \underset{k_{-1}}{\overset{k_1}{\rightleftarrows}} ES \xrightarrow{k_2} E + P$$

8. Établir l'expression de la vitesse initiale de réaction $v_i$ en fonction de la concentration en substrat $[S]$, de la constante de Michaelis $K_M$ et de la vitesse maximale $v_{\text{max}}$.
9. En présence d'un inhibiteur compétitif $I$, le mécanisme est modifié. Écrire le schéma réactionnel correspondant et expliquer qualitativement l'effet de cet inhibiteur sur les grandeurs $K_M$ et $v_{\text{max}}$.
10. Proposer une méthode graphique (représentation de Lineweaver-Burk) permettant d'identifier expérimentalement la nature d'une inhibition enzymatique.

---

## 💡 Partie 2 : Indications du Concepteur & Pièges du Barème

*   **Partie A (Thermodynamique) :** Attention aux unités ! La constante des gaz parfaits $R$ doit être convertie ou employée avec $\Delta_r G^\circ$ exprimé en $\text{J/mol}$. L'oubli de la mise en puissance de l'exponentielle est une source classique d'erreur d'arrondi chez les candidats.
*   **Partie B (Poiseuille) :** Le piège majeur réside dans l'homogénéité des unités, notamment la conversion des micromètres ($\mu\text{m}$) en mètres ($\text{m}$). Le signe du gradient de pression doit être manié avec rigueur pour obtenir un débit positif orienté dans le sens de l'écoulement.
*   **Partie C (Cinétique) :** L'utilisation de l'approximation de l'état quasi-stationnaire (AEQS) sur l'intermédiaire $ES$ doit être rigoureusement justifiée. Pour l'inhibition compétitive, il faut insister sur le fait que $v_{\text{max}}$ reste inchangée tandis que $K_M$ apparent augmente.

---

## 📋 Partie 3 : Correction Rédigée Pas à Pas

### Partie A : Thermodynamique chimique
1. **Expression de la constante d'équilibre ($/0.75$) :**
   Puisque les espèces sont en solution aqueuse diluée et rapportées à l'état standard, l'activité de l'espèce $X$ est $a_X = \frac{[X]}{c^\circ}$. La constante d'équilibre s'écrit :
   $$K^\circ = \frac{a_P}{a_S} = \frac{[P]_{\text{eq}} / c^\circ}{[S]_{\text{eq}} / c^\circ} = \frac{[P]_{\text{eq}}}{[S]_{\text{eq}}}$$

2. **Relation thermodynamique ($/0.5$) :**
   La relation fondamentale est :
   $$\Delta_r G^\circ = -R \cdot T \cdot \ln(K^\circ)$$

3. **Calcul numérique de $K^\circ$ ($/1.0$) :**
   On isole la constante d'équilibre :
   $$K^\circ = \exp\left(-\frac{\Delta_r G^\circ}{R \cdot T}\right)$$
   A.N. : $\Delta_r G^\circ = -2.8 \times 10^3 \text{ J/mol}$, $R = 8.314 \text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$, $T = 310 \text{ K}$.
   $$K^\circ = \exp\left(-\frac{-2.8 \times 10^3}{8.314 \times 310}\right) = \exp(1.086) \approx 3.0$$

4. **Sens d'évolution spontanée ($/0.75$) :**
   On calcule le quotient de réaction initial $Qr_0$ :
   $$Qr_0 = \frac{[P]_0}{[S]_0} = 5.0$$
   Puisque $Qr_0 > K^\circ$ ($5.0 > 3.0$), le système évolue spontanément dans le **sens indirect** (vers la formation de $S$) pour minimiser l'enthalpie libre du système jusqu'à ce que $Qr = K^\circ$.

---

### Partie B : Hydrodynamique et circulation sanguine
5. **Profil de vitesse ($/2.0$) :**
   Considérons un élément de volume cylindrique de rayon $r$, d'épaisseur $dr$ et de longueur $dz$. Les forces s'exerçant sur ce cylindre de fluide en régime stationnaire sont :
   - Les forces de pression sur les faces planes : $(P(z) - P(z+dz)) \cdot \pi r^2 = -\frac{dP}{dz} \cdot dz \cdot \pi r^2$.
   - Les forces de viscosité sur la surface latérale cylindrique : $\tau_{rz} \cdot 2 \pi r \cdot dz = \eta \frac{dv}{dr} \cdot 2 \pi r \cdot dz$.
   Par application du principe fondamental de la dynamique en projection radiale et longitudinale :
   $$-\frac{dP}{dz} \cdot \pi r^2 + \frac{1}{r} \frac{d}{dr}\left(r \cdot \eta \frac{dv}{dr}\right) \pi r^2 = 0$$
   En intégrant une première fois et en tenant compte de la condition aux limites de symétrie au centre ($v'(0) = 0$), puis en appliquant la condition d'adhérence au niveau de la paroi ($v(R) = 0$), on obtient :
   $$v(r) = \frac{1}{4 \eta} \left(-\frac{dP}{dz}\right) (R^2 - r^2)$$

6. **Débit volumique $D_v$ (Loi de Poiseuille) ($/1.5$) :**
   Le débit élémentaire à travers une couronne de rayon $r$ et d'épaisseur $dr$ est $dD_v = v(r) \cdot 2 \pi r \cdot dr$.
   Le débit total s'obtient par intégration entre $0$ et $R$ :
   $$D_v = \int_{0}^{R} \frac{1}{4 \eta} \left(-\frac{dP}{dz}\right) (R^2 - r^2) \cdot 2 \pi r \cdot dr = \frac{\pi}{2 \eta} \left(-\frac{dP}{dz}\right) \left[ \frac{R^2 r^2}{2} - \frac{r^4}{4} \right]_{0}^{R}$$
   $$D_v = \frac{\pi R^4}{8 \eta} \left(-\frac{dP}{dz}\right) = \frac{\pi R^4 \Delta P}{8 \eta L}$$

7. **Calcul numérique du débit ($/1.0$) :**
   A.N. : $R = 5.0 \mu\text{m} = 5.0 \times 10^{-6} \text{ m}$, $\eta = 3.5 \times 10^{-3} \text{ Pa}\cdot\text{s}$, $\Delta P = 2.0 \times 10^3 \text{ Pa}$, $L = 1.0 \times 10^{-3} \text{ m}$.
   $$D_v = \frac{\pi \cdot (5.0 \times 10^{-6})^4 \cdot 2.0 \times 10^3}{8 \cdot 3.5 \times 10^{-3} \cdot 1.0 \times 10^{-3}}$$
   $$D_v = \frac{\pi \cdot 625 \times 10^{-24} \cdot 2.0 \times 10^3}{2.8 \times 10^{-5}} = \frac{3.927 \times 10^{-18}}{2.8 \times 10^{-5}} \approx 1.4 \times 10^{-13} \text{ m}^3/\text{s}$$

---

### Partie C : Cinétique enzymatique et inhibition
8. **Établissement de la vitesse initiale ($/1.5$) :**
   En appliquant l'AEQS sur l'intermédiaire réactionnel $ES$ :
   $$\frac{d[ES]}{dt} = k_1 [E][S] - k_{-1}[ES] - k_2[ES] = 0$$
   En utilisant la conservation de la quantité d'enzyme totale $[E]_T = [E] + [ES]$ :
   $$v_i = k_2 [ES] = \frac{v_{\text{max}} [S]}{K_M + [S]}$$
   Avec $v_{\text{max}} = k_2 [E]_T$ et $K_M = \frac{k_{-1} + k_2}{k_1}$.

9. **Inhibition compétitive ($/1.5$) :**
   Le schéma réactionnel inclut la fixation réversible de l'inhibiteur $I$ sur le site actif de l'enzyme :
   $$E + S \rightleftarrows ES \rightarrow E + P$$
   $$E + I \rightleftarrows EI$$
   L'inhibiteur entre en compétition avec le substrat pour le même site actif. Par conséquent, l'augmentation de la concentration en substrat permet de supplanter l'inhibiteur : **la vitesse maximale $v_{\text{max}}$ reste inchangée**, mais **la constante apparente de Michaelis augmente** ($K_{M,\text{app}} > K_M$).

10. **Représentation de Lineweaver-Burk ($/1.0$) :**
    La représentation linéaire s'obtient en traçant l'inverse de la vitesse initiale en fonction de l'inverse de la concentration en substrat :
    $$\frac{1}{v_i} = \frac{K_M}{v_{\text{max}}} \frac{1}{[S]} + \frac{1}{v_{\text{max}}}$$
    En présence d'un inhibiteur compétitif, les droites obtenues à différentes concentrations d'inhibiteur se coupent toutes sur l'axe des ordonnées ($\frac{1}{v_{\text{max}}}$), ce qui constitue la signature graphique caractéristique de ce type d'inhibition.