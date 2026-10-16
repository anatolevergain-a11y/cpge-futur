---
title: 'CCINP - Sciences Industrielles'
description: 'Sujet type concours corrigé pas à pas pour la filière PSI.'
sidebar:
  badge:
    text: 'Annale Concours'
    variant: 'caution'
---

## 📄 Partie 1 : Énoncé du Problème (Mise en situation ingénieur/recherche)

### Étude d’un système d'observation astronomique ultra-stable monté sur nacelle stabilisée

Les télescopes spatiaux et les ballons stratosphériques emportent des instruments d'optique de très haute précision soumis à des perturbations mécaniques sévères (balancements du câble, rafales de vent stratosphérique, déséquilibres internes). Le sujet s'intéresse à l'asservissement en orientation d'un axe de visée d'un télescope embarqué, modélisé par une charge inertielle portée par un moteur à courant continu, le tout monté sur une embase mobile (la nacelle).

```
          [ Perturbation extérieure (Vent) ] 
                          |
                          v
    Consigne $\theta_c(p)$ ---> [ Correcteur $C(p)$ ] ---> [ Onduleur/Hacheur ] ---> [ Moteur CC ] ---> [ Charge (Télescope) $\theta(p)$ ]
             ^                                                                             |
             |____________________ [ Capteur de position $H(p)$ ] <________________________|
```

L'objectif de cette étude est de concevoir et de valider les performances d'un double boucle d'asservissement (boucle interne de vitesse, boucle externe de position) garantissant une précision statique parfaite, une réjection optimale des perturbations et une marge de phase robuste face aux variations paramétriques de l'inertie du télescope.

---

## ❓ Partie 2 : Questions

### 📌 Sous-partie A : Modélisation dynamique et mise sous forme canonique
1. **Établissement du modèle de la partie opérative :** 
   Le moteur à courant continu est caractérisé par sa résistance d'induit $R$, son inductance d'induit $L$ (que l'on pourra négliger dans un premier temps devant la constante de temps mécanique), sa constante de couple $K_c$, et sa constante de force contre-électromotrice $K_e$. La charge présente un moment d'inertie total $J$ ramené sur l'axe moteur et un coefficient de frottement visqueux $f$. L'équation électrique du moteur est $U(p) = (R + Lp)I(p) + E(p)$ avec $E(p) = K_e \Omega(p)$, et l'équation mécanique s'écrit $C_m(p) - C_{pert}(p) = (Jp + f)\Omega(p)$, avec $C_m(p) = K_c I(p)$.
   
   En négligeant l'inductance $L$ ($L \to 0$), exprimer la fonction de transfert en boucle ouverte de la vitesse $\Omega(p)$ par rapport à la tension de commande $U(p)$ en présence d'une perturbation de couple extérieur $C_{pert}(p)$. Mettre cette fonction sous la forme canonique :
   $$\Omega(p) = \frac{G_v}{1 + \tau_v p} U(p) - Z_v(p) C_{pert}(p)$$
   Exprimer $G_v$, $\tau_v$ et $Z_v(p)$ en fonction de $R, K_c, K_e, J$ et $f$.

2. **Passage à la position :**
   En déduire la fonction de transfert reliant la position angulaire $\theta(p)$ à la tension de commande $U(p)$. On posera $\theta(p) = \frac{\Omega(p)}{p}$.

### 📌 Sous-partie B : Synthèse du correcteur et analyse de la robustesse
3. **Structure de l'asservissement :**
   On souhaite mettre en place une correction de type Proportionnel-Intégral (PI) sur la vitesse, imbriquée dans une boucle de position pure (correcteur proportionnel $K_p$). Le schéma bloc global possède un capteur de position de fonction de transfert $H(p) = K_h$.
   
   Justifier l'intérêt d'une structure cascade (boucle de vitesse interne / boucle de position externe) par rapport à un asservissement de position simple.

4. **Synthèse par compensation de pôles (Méthode de Strejc / Pôle dominant) :**
   La boucle interne de vitesse est dotée d'un correcteur PI de la forme $C_v(p) = K_{iv} \frac{1 + T_i p}{T_i p}$. 
   Choisir la constante de temps $T_i$ du correcteur pour compenser exactement le pôle mécanique du système $\tau_v$.
   Donner l'expression de la fonction de transfert en boucle fermée de la vitesse $FTBF_v(p)$ ainsi simplifiée.

5. **Analyse fréquentielle et Marges de Stabilité :**
   La boucle de position externe utilise un gain pur $K_p$. Le système corrigé global a pour fonction de transfert en boucle ouverte (FTBO) :
   $$FTBO(p) = \frac{K_{tot}}{p(1 + \tau_v p)}$$
   (On supposera pour simplifier l'analyse que la dynamique de la boucle de vitesse est plus rapide que celle de la position, soit $FTBF_v(p) \approx 1$).
   
   Exprimer le gain global $K_{tot}$. Tracer l'allure du diagramme de Bode (gan et phase) de cette $FTBO(p)$ pour une valeur numérique de référence. Définir analytiquement la Marge de Phase ($MP$) et la Marge de Gain ($MG$) en fonction de la pulsation critique $\omega_c$ et de la pulsation de phase critique $\omega_{-180}$.

---

## 💡 Partie 3 : Rapport du Jury (Pièges et attentes)

> **Rapport du Jury - Concours CCINP (Filière PSI) - Sciences Industrielles**
> 
> *   **Généralités :** Le jury a constaté cette année une baisse des capacités de manipulation littérale des équations différentielles transformées via la transformée de Laplace. Les confusions entre les notations temporelles et fréquentielles restent trop fréquentes.
> *   **Piège classique n°1 (Négligence de l'inductance) :** De nombreux candidats oublient de justifier ou appliquent machinalement l'approximation $L \to 0$ sans vérifier l'hypothese sur les ordres de grandeur des constantes de temps électriques et mécaniques.
> *   **Piège classique n°2 (Schémas blocs) :** Lors de la mise en cascade des boucles, l'oubli du retour unitaire ou la mauvaise prise en compte des coefficients de rétroaction du capteur ($K_h$) faussent l'ensemble de la synthèse du correcteur PI.
> *   **Attentes :** Le jury valorise particulièrement les candidats qui prennent le temps de mener une analyse critique des résultats (dimensionnement physique, unités, comportement asymptotique dans les diagrammes de Bode).

---

## 📋 Partie 4 : Corrigé Détaillé et Analyse

### 📝 Correction de la Sous-partie A_1. **Modélisation de la partie opérative :**
   À partir des équations du moteur et de la charge :
   $$U(p) = RI(p) + K_e \Omega(p)$$
   $$(Jp + f)\Omega(p) = K_c I(p) - C_{pert}(p)$$
   
   En isolant $I(p)$ dans la première équation ($L=0$) :
   $$I(p) = \frac{U(p) - K_e \Omega(p)}{R}$$
   
   On substitue $I(p)$ dans l'équation mécanique :
   $$(Jp + f)\Omega(p) = \frac{K_c}{R} \left( U(p) - K_e \Omega(p) \right) - C_{pert}(p)$$
   $$\left( Jp + f + \frac{K_c K_e}{R} \right) \Omega(p) = \frac{K_c}{R} U(p) - C_{pert}(p)$$
   
   Mettons sous forme canonique :
   $$\left( \frac{R J}{R f + K_c K_e} p + 1 \right) \Omega(p) = \frac{K_c}{R f + K_c K_e} U(p) - \frac{R}{R f + K_c K_e} C_{pert}(p)$$
   
   Par identification avec la forme demandée $\Omega(p) = \frac{G_v}{1 + \tau_v p} U(p) - Z_v(p) C_{pert}(p)$ :
   - $G_v = \frac{K_c}{R f + K_c K_e} \quad [\text{rad}\cdot\text{s}^{-1}\cdot\text{V}^{-1}]$
   - $\tau_v = \frac{R J}{R f + K_c K_e} \quad [\text{s}]$
   - $Z_v(p) = \frac{R}{R f + K_c K_e} \quad [\text{rad}\cdot\text{s}^{-1}\cdot\text{N}^{-1}\cdot\text{m}^{-1}]$

2. **Fonction de transfert en position :**
   Par définition cinématique, $\theta(p) = \frac{\Omega(p)}{p}$. Ainsi :
   $$\theta(p) = \frac{G_v}{p(1 + \tau_v p)} U(p)$$

---

### 📝 Correction de la Sous-partie B_3. **Justification de la structure en cascade :**
   La structure en cascade permet de traiter les non-linéarités et les perturbations liées au couple moteur (notamment la force contre-électromotrice et les frottements) dans la boucle interne (rapide). La boucle externe gère l'axe géométrique (position) avec une dynamique plus lente mais exempte d'erreur statique vis-à-vis des perturbations de couple ramenées à l'axe.

4. **Synthèse par compensation de pôle :**
   Le correcteur PI a pour expression :
   $$C_v(p) = K_{iv} \frac{1 + T_i p}{T_i p}$$
   
   Pour compenser le pôle mécanique $\tau_v$, on choisit :
   $$T_i = \tau_v$$
   
   La fonction de transfert en boucle ouverte de la vitesse devient :
   $$FTBO_v(p) = C_v(p) \frac{G_v}{1 + \tau_v p} = \frac{K_{iv} G_v}{\tau_v p}$$
   
   La boucle fermée de vitesse correspond donc à un système du 1er ordre :
   $$FTBF_v(p) = \frac{\frac{K_{iv} G_v}{\tau_v p}}{1 + \frac{K_{iv} G_v}{\tau_v p}} = \frac{1}{1 + \tau_{eq} p} \quad \text{avec} \quad \tau_{eq} = \frac{\tau_v}{K_{iv} G_v}$$

5. **Analyse fréquentielle et marges de stabilité :**
   La FTBO de position simplifiée est :
   $$FTBO(p) = \frac{K_{tot}}{p(1 + \tau_v p)}$$
   
   *   **Module et Phase :**
       $$|FTBO(j\omega)| = \frac{K_{tot}}{\omega \sqrt{1 + (\tau_v \omega)^2}}$$
       $$\arg(FTBO(j\omega)) = -\frac{\pi}{2} - \arctan(\tau_v \omega)$$
       
   *   **Pulsation critique $\omega_c$ (définie par $|FTBO(j\omega_c)| = 1$) :**
       $$K_{tot} = \omega_c \sqrt{1 + (\tau_v \omega_c)^2}$$
       
   *   **Marge de Phase ($MP$) :**
       $$MP = 180^\circ + \arg(FTBO(j\omega_c)) = 180^\circ - 90^\circ - \arctan(\tau_v \omega_c) = 90^\circ - \arctan(\tau_v \omega_c)$$
       
   *   **Marge de Gain ($MG$) :**
       La phase atteint $-180^\circ$ lorsque $\arg(FTBO(j\omega_{-180})) = -\pi$, soit $-\frac{\pi}{2} - \arctan(\tau_v \omega_{-180}) = -\pi \implies \arctan(\tau_v \omega_{-180}) = \frac{\pi}{2}$, ce qui implique $\omega_{-180} \to +\infty$.
       Le gain à cette pulsation tend vers 0, la marge de gain est donc infinie ($MG = +\infty$ dB), ce qui traduit un système intrinsèquement stable en gain pour cette modélisation du 2ème ordre sans retard pur.