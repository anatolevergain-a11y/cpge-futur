---
title: 'Exercice 1 : Facteur de Boltzmann'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude statistique d'un système à deux états et application atmosphérique

## Énoncé

Le modèle du facteur de Boltzmann est l'un des piliers de la physique statistique. Il permet de relier la distribution microscopique des états d'un système à l'échelle macroscopique, en particulier à travers la température. 

Ce problème se propose d'étudier un système physique simple à deux états (un paramagnétique moléculaire) avant d'appliquer ces concepts à un système macroscopique soumis au champ de pesanteur : l'atmosphère terrestre. On cherchera à évaluer la pertinence et les limites des modèles statistiques introduits face à des données réalistes.

---

## Questions

### Partie I : Système à deux états (Modèle paramagnétique)
1. On considère une particule possédant un moment magnétique $\vec{\mu}$ placée dans un champ magnétique uniforme $\vec{B} = B \vec{u}_z$. L'énergie potentielle d'interaction magnétique est donnée par $E_i = -\vec{\mu} \cdot \vec{B}$. 
   On suppose que le moment magnétique ne peut prendre que deux orientations par rapport au champ : parallèle ($E_1 = -\mu B$) ou anti-parallèle ($E_2 = +\mu B$).
   Exprimer la probabilité $P_1$ pour que la particule soit dans l'état d'énergie $E_1$ et $P_2$ pour l'état d'énergie $E_2$ lorsqu'elle est en contact thermique avec un thermostat à la température $T$.

2. En déduire l'aimantation moyenne $\langle M \rangle$ d'un ensemble de $N$ particules sans interactions mutuelles. Tracer qualitativement l'allure de $\langle M \rangle$ en fonction de la température $T$.

3. Déterminer la limite de $\langle M \rangle$ lorsque $T \to 0$ et lorsque $T \to +\infty$. Commenter ces limites d'un point de vue physique.

### Partie II : Application à l'atmosphère terrestre et analyse critique
4. On s'intéresse à une molécule de diazote $\text{N}_2$ de masse $m$ dans l'atmosphère terrestre, assimilée à un gaz parfait à la température uniforme $T_0 = 293\text{ K}$. En utilisant la loi de distribution de Boltzmann, exprimer la probabilité relative de trouver une molécule à l'altitude $z$ par rapport au sol ($z=0$). On rappelle l'énergie potentielle de pesanteur $E_p(z) = mgz$.

5. En déduire la loi de variation de la pression $P(z)$ en fonction de l'altitude $z$ (loi hydrostatique / barométrique). Exprimer la hauteur caractéristique d'échelle $H$ en fonction de $k_B$, $T_0$, $m$ et $g$ (ou de la masse molaire $M_m$ et de la constante des gaz parfaits $R$).

6. **Application numérique et analyse critique :** Calculer la valeur de $H$ pour le diazote ($M_m = 28\text{ g}\cdot\text{mol}^{-1}$) à $T_0 = 293\text{ K}$ ($g = 9{,}81\text{ m}\cdot\text{s}^{-2}$, $R = 8{,}314\text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$). 
   Estimer la pression à l'altitude $z = 80\text{ km}$. Le modèle isotherme est-il encore valide à cette altitude ? Justifier en citant les hypothèses négligées.

---

## Pistes et indications

- **Partie I :** Utilisez la définition du facteur de Boltzmann pour les poids statistiques $w_i = \exp(-E_i / k_B T)$ et normalisez par la fonction de partition $Z = \sum w_i$.
- **Partie II (Q4-Q5) :** L'énergie d'une particule est la somme de son énergie cinétique (qui donne la température) et de son énergie potentielle de pesanteur. L'indépendance statistique permet de séparer les contributions.
- **Partie II (Q6) :** Soyez rigoureux sur les unités (convertir la masse molaire en $\text{kg}\cdot\text{mol}^{-1}$). Pour l'analyse critique, pensez à la structure thermique réelle de l'atmosphère (troposphère, stratosphère...).

---

## Corrigé pas à pas

### Partie I : Système à deux états

1. **Probabilités des états :**
   D'après la physique statistique, la probabilité d'occupation d'un micro-état d'énergie $E_i$ à l'équilibre thermique à la température $T$ est proportionnelle au facteur de Boltzmann $\exp(-E_i / k_B T)$.
   La fonction de partition $Z$ s'écrit :
   $$Z = e^{-\frac{E_1}{k_B T}} + e^{-\frac{E_2}{k_B T}} = e^{\frac{\mu B}{k_B T}} + e^{-\frac{\mu B}{k_B T}}$$
   Les probabilités respectives sont donc :
   $$P_1 = \frac{e^{\frac{\mu B}{k_B T}}}{Z} = \frac{1}{1 + e^{-\frac{2\mu B}{k_B T}}} \quad \text{et} \quad P_2 = \frac{e^{-\frac{\mu B}{k_B T}}}{Z} = \frac{e^{-\frac{2\mu B}{k_B T}}}{1 + e^{-\frac{2\mu B}{k_B T}}}$$

2. **Aimantation moyenne :**
   L'aimantation portée par une particule est $+ \mu$ dans l'état 1 et $-\mu$ dans l'état 2. L'aimantation moyenne pour $N$ particules sans interactions est :
   $$\langle M \rangle = N \mu (P_1 - P_2) = N \mu \frac{1 - e^{-\frac{2\mu B}{k_B T}}}{1 + e^{-\frac{2\mu B}{k_B T}}} = N \mu \tanh\left(\frac{\mu B}{k_B T}\right)$$

3. **Limites physiques :**
   - Lorsque $T \to 0$ : $\frac{\mu B}{k_B T} \to +\infty$, donc $\tanh\left(\frac{\mu B}{k_B T}\right) \to 1$. Ainsi, $\langle M \rangle \to N\mu$. 
     *Interprétation :* Toute l'agitation thermique est gelée, les moments magnétiques s'alignent tous dans le sens du champ (état fondamental d'énergie minimale).
   - Lorsque $T \to +\infty$ : $\frac{\mu B}{k_B T} \to 0$, donc $\tanh(x) \sim x$, ce qui donne $\langle M \rangle \approx N\mu \left(\frac{\mu B}{k_B T}\right) \to 0$.
     *Interprétation :* L'agitation thermique l'emporte totalement, l'orientation des moments est complètement aléatoire (désordre maximal).

---

### Partie II : Application à l'atmosphère terrestre

4. **Probabilité relative selon l'altitude :**
   L'énergie totale d'une molécule est $E = E_c + mgz$. Les degrés de liberté cinétiques et potentiels étant découplés, la densité de probabilité de présence à l'altitude $z$ est proportionnelle à $\exp\left(-\frac{mgz}{k_B T_0}\right)$. 
   Le rapport des probabilités entre l'altitude $z$ et le sol ($z=0$) est :
   $$\frac{\mathcal{P}(z)}{\mathcal{P}(0)} = \exp\left(-\frac{mgz}{k_B T_0}\right)$$

5. **Loi barométrique :**
   Puisque la concentration molaire (ou volumique) est proportionnelle à cette probabilité de présence, la pression $P(z)$ obéit à la même loi exponentielle (en supposant le gaz parfait et $T_0$ constante) :
   $$P(z) = P_0 \exp\left(-\frac{mgz}{k_B T_0}\right)$$
   En introduisant la masse molaire $M_m = m \mathcal{N}_A$ et la constante des gaz parfaits $R = k_B \mathcal{N}_A$, on obtient :
   $$P(z) = P_0 \exp\left(-\frac{M_m g z}{R T_0}\right) = P_0 \exp\left(-\frac{z}{H}\right)$$
   où la **hauteur d'échelle** $H$ est définie par :
   $$H = \frac{R T_0}{M_m g}$$

6. **Application numérique et analyse critique :**
   - **Calcul de $H$ :**
     $$H = \frac{8{,}314 \times 293}{28 \times 10^{-3} \times 9{,}81} \approx \frac{2435{,}99}{0{,}27468} \approx 8868\text{ m} \approx 8{,}87\text{ km}$$
   - **Estimation de la pression à $z = 80\text{ km}$ :**
     $$P(80\text{ km}) = P_0 \exp\mfenced(-\frac{80}{8{,}87}\right) \approx P_0 e^{-9{,}02} \approx 1{,}2 \times 10^{-4} P_0$$
     À $z=0$, $P_0 \approx 10^5\text{ Pa}$, donc $P(80\text{ km}) \approx 12\text{ Pa}$.
   - **Analyse critique et limites du modèle :**
     Le modèle isoterme prédit une décroissance exponentielle continue. Toutefois, l'hypothèse d'une température constante ($T_0 = 293\text{ K}$) est fausse dans la réalité atmosphérique : 
     1. La température varie fortement selon les couches (chute dans la troposphère, remontée dans la stratosphère, etc.).
     2. À $80\text{ km}$ (dans la mésosphère), la composition chimique de l'air commence à ne plus être homogène (dissociation des molécules sous l'effet du rayonnement UV, sédimentation gravitationnelle des espèces plus lourdes). 
     Le modèle simple du facteur de Boltzmann avec une température uniforme montre ici ses limites macroscopiques et doit être couplé à un modèle radiatif-convectif pour être rigoureux.