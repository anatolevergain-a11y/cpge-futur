---
title: 'Exercice 1 : Régimes transitoires des circuits RC/RLC'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude critique d'un circuit RLC série et limitation des modèles continus

## Énoncé

Dans le cadre de la conception d'un dispositif de déclenchement rapide (type flash ou actionneur électromagnétique), on étudie le comportement d'un circuit $RLC$ série. L'alimentation est assurée par un générateur de tension idéal délivrant un échelon de tension. 

Cependant, les composants réels s'écartent des modèles idéaux vus en cours : les condensateurs possèdent une résistance série équivalente (ESR) et les inductances présentent des pertes par effet Joule ainsi qu'une capacité parasite entre spires. On se propose dans ce problème de modéliser l'influence de ces imperfections sur le régime transitoire et d'analyser la valadité des approximations usuelles.

### Données numériques et caractéristiques du montage :
*   Force électromotrice du générateur : $E = 50\text{ V}$
*   Condensateur nominal : $C = 10\mu\text{F}$
*   Résistance série équivalente du condensateur : $r = 1,0\,\Omega$
*   Bobine réelle caractérisée par son inductance $L = 10\text{ mH}$ et sa résistance propre $R_b = 4,0\,\Omega$.
*   Résistance de protection additionnelle : $R$ variable (on posera $R_{\text{tot}} = R + r + R_b$).

---

## Questions

### Partie I : Modèle idéal et mise en équation
1. On néglige dans un premier temps les résistances $r$ et $R_b$ ($r=0, R_b=0$), ainsi que la résistance de protection ($R=0$). Établir l'équation différentielle vérifiée par la tension aux bornes du condensateur $u_C(t)$ pour $t > 0$.
2. Mettre cette équation sous la forme canonique faisant apparaître la pulsation propre $\omega_0$ et le facteur de qualité $Q$ (ou l'amortissement $\lambda$). Exprimer $\omega_0$ et $Q$ en fonction de $L$, $C$ et des résistances si nécessaire.
3. Calculer numériquement $\omega_0$ et $Q$ dans ce cas idéal. Quel régime transitoire s'établit à la fermeture de l'interrupteur ?

### Partie II : Prise en compte des résistances réelles et étude énergétique
4. On réintègre à présent les résistances réelles ($r = 1,0\,\Omega$, $R_b = 4,0\,\Omega$) et l'on ajoute une résistance $R$. Établir la nouvelle équation différentielle en $u_C(t)$.
5. Exprimer le nouveau facteur de qualité $Q_{\text{eff}}$ du circuit en fonction de $L$, $C$ et de la résistance totale $R_{\text{tot}} = R + r + R_b$. 
6. Déterminer la valeur critique de la résistance additionnelle $R_c$ pour laquelle le circuit passe du régime pseudo-périodique au régime apériodique. Faire l'application numérique.
7. On se place en régime pseudo-périodique avec $R = 0\,\Omega$. Établir l'expression de la puissance instantanée fournie par le générateur et celle dissipée par effet Joule dans l'ensemble des résistances du circuit. Conclure sur l'évolution de l'énergie électromagnétique totale stockée.

### Partie III : Analyse critique et limites du modèle
8. En pratique, la tension aux bornes du condensateur lors du premier dépassement (première surtension) peut s'écarter de la théorie linéaire. Expliquer qualitativement l'impact d'une capacité parasite en parallèle avec la bobine sur les hautes fréquences mises en jeu lors du transitoire.
9. **Analyse critique :** Calculer la pseudo-période $T$ du système avec les paramètres de la partie II ($R=0$). En déduire l'ordre de grandeur de la vitesse de variation $\left|\frac{du_C}{dt}\right|_{\max}$ lors de la première alternance. Discuter de la validité de l'approximation des régimes quasi-stationnaires (ARQS) pour ce circuit.

---

## Pistes et indications

*   **Q1 & Q2 :** Utilisez la loi des mailles et les relations constitutives des composants ($\dot{q} = i = C \dot{u}_C$ et $u_L = L \frac{di}{dt}$). Identifiez par identification avec l'équation type $\ddot{u}_2 + \frac{\omega_0}{Q}\dot{u}_2 + \omega_0^2 u_2 = \text{cst}$.
*   **Q5 & Q6 :** La transition entre régime pseudo-périodique et apériodique correspond à l'annulation du discriminant de l'équation caractéristique ($\Delta = 0$ ou $Q = 1/2$).
*   **Q9 :** Pour estimer la vitesse maximale de variation, considérez que le système oscille à la pulsation $\omega \approx \omega_0$ et majorez l'amplitude par $2E$ (phénomène de surtension).

---

## Corrigé pas à pas

### Partie I : Modèle idéal et mise en équation
1. **Équation différentielle :**
   La loi des mailles donne $E = u_C + u_L$. Avec $u_L = L \frac{di}{dt}$ et $i = C \frac{du_C}{dt}$, on obtient :
   $$E = u_C + LC \frac{d^2u_C}{dt^2}$$
   Soit :
   $$\frac{d^2u_C}{dt^2} __+__ \frac{1}{LC} u_C = \frac{E}{LC}$$

2. **Forme canonique :**
   Par identification avec l'équation générale $\ddot{u}_C + \frac{\omega_0}{Q}\dot{u}_C + \omega_0^2 u_C = \omega_0^2 E$ :
   *   $\omega_0 = \frac{1}{\sqrt{LC}}$ (pulsation propre)
   *   Le terme d'amortissement étant nul ici ($\frac{\omega_0}{Q} = 0$), le facteur de qualité tend vers l'infini ($Q \to \infty$).

3. **Application numérique :**
   *   $\omega_0 = \frac{1}{\sqrt{10 \times 10^{-3} \times 10 \times 10^{-6}}} = \frac{1}{\sqrt{10^{-7}}} = \frac{10^3}{\sqrt{10}} \approx 316\text{ rad}\cdot\text{s}^{-1}$ ($f_0 \approx 50,3\text{ Hz}$).
   *   $Q \to \infty$ : Le circuit est le siège d'un **régime périodique** non amorti (oscillations sinusoïdales permanentes d'amplitude constante, ce qui physiquement est impossible sans apport d'énergie extérieur compensant les pertes, car tout conducteur possède une résistance).

---

### Partie II : Prise en compte des résistances réelles et étude énergétique
4. **Nouvelle équation :**
   La maille comporte désormais la résistance totale $R_{\text{tot}} = R + r + R_b$ en série avec $L$ et $C$ :
   $$E = u_C + R_{\text{tot}}i + L\frac{di}{dt}$$
   En remplaçant $i = C \dot{u}_C$, il vient :
   $$\frac{d^2u_C}{dt^2} + \frac{R_{\text{tot}}}{L}\frac{du_C}{dt} + \frac{1}{LC}u_C = \frac{E}{LC}$$

5. **Facteur de qualité effectif :**
   Par identification du terme d'amortissement $\frac{\omega_0}{Q_{\text{eff}}} = \frac{R_{\text{tot}}}{L}$ :
   $$Q_{\text{eff}} = \frac{L}{R_{\text{tot}}} \omega_0 = \frac{1}{R_{\text{tot}}} \sqrt{\frac{L}{C}}$$

6. **Résistance critique $R_c$ :**
   Le régime critique (limite entre pseudo-périodique et apériodique) correspond à $Q_{\text{eff}} = \frac{1}{2}$ (ou un discriminant nul).
   $$\frac{1}{R_{c} + r + R_b} \sqrt{\frac{L}{C}} = \frac{1}{2} \implies R_{\text{tot,c}} = 2\sqrt{\frac{L}{C}}$$
   Application numérique :
   $$\sqrt{\frac{L}{C}} = \sqrt{\frac{10 \times 10^{-3}}{10 \times 10^{-6}}} = \sqrt{10^3} \approx 31,6\,\Omega$$
   Donc $R_{\text{tot,c}} = 2 \times 31,6 = 63,2\,\Omega$.
   La résistance additionnelle critique vaut :
   $$R_c = 63,2 - (r + R_b) = 63,2 - (1,0 + 4,0) = 58,2\,\Omega$$

7. **Bilan énergétique ($R=0$) :**
   *   Puissance fournie par le générateur : $P_g = E \cdot i(t) = E C \frac{du_C}{dt}$.
   *   Puissance dissipée par effet Joule : $P_j = R_{\text{tot}} i(t)^2 = R_{\text{tot}} C^2 \left(\frac{du_C}{dt}\right)^2$.
   *   *Analyse critique :* L'énergie totale $E_{\text{tot}} = \frac{1}{2}Cu_C^2 + \frac{1}{2}Li^2$ décroît au cours du temps en raison de la puissance dissipée par effet Joule ($P_j > 0$), ce qui caractérise le régime pseudo-périodique.

---

### Partie III : Analyse critique et limites du modèle
8. **Influence de la capacité parasite de la bobine :**
   À haute fréquence ou lors de variations brutales de tension, la bobine réelle ne se comporte plus comme une simple inductance pure. Ses spires constituant des armatures conductrices séparées par un isolant (vernis, air), il existe une **capacité parasite en parallèle** $C_p$ avec $L$. 
   *Conséquence :* Cela forme un circuit bouchon $LC_p$ à très haute fréquence qui peut superposer des oscillations parasites haute fréquence (oscillations de rang élevé) lors des fronts raides du signal, faussant la mesure de la surtension.

9. **Ordre de grandeur et ARQS :**
   *   La résistance totale est $R_{\text{tot}} = 1,0 + 4,0 = 5,0\,\Omega$.
   *   Le facteur de qualité vaut $Q_{\text{eff}} = \frac{31,6}{5,0} = 6,32 > 0,5$. Le régime est bien pseudo-périodique.
   *   La pseudo-période est voisine de la période propre : $T \approx T_0 = \frac{2\pi}{\omega_0} \approx \frac{2\pi}{316} \approx 0,02\text{ s} = 20\text{ ms}$.
   *   Lors de la première alternance, la tension $u_C$ passe de $0$ à une valeur proche de $2E$ (surtension due à l'effet inertiel de la bobine). L'amplitude maximale de variation de la vitesse est donc de l'ordre de :
     $$\left|\frac{du_C}{dt}\right|_{\max} \approx \frac{\Delta u_C}{\Delta t} \sim \frac{2 \times 50}{T/4} = \frac{100}{0,005} = 2 \cdot 10^4\text{ V}\cdot\text{s}^{-1}$$
   *   **Validité de l'ARQS (Approximation des Régimes Quasi-Stationnaires) :** 
     Le temps caractéristique du système est $T \approx 20\text{ ms}$. La dimension caractéristique des composants étant de l'ordre de quelques centimètres ($d \sim 0,05\text{ m}$), le temps de propagation des ondes électromagnétiques à travers le circuit est $\tau_{\text{prop}} = \frac{d}{c} \sim \frac{0,05}{3 \cdot 10^8} \approx 1,7 \cdot 10^{-10}\text{ s}$.
     Puisque $\tau_{\text{prop}} \ll T$ ($1,7 \cdot 10^{-10}\text{ s} \ll 0,02\text{ s}$), **l'ARQS est parfaitement validée** : les effets de propagation le long des fils de connexions peuvent être totalement négligés, et l'utilisation de la théorie des circuits des états quasi-permanents (Loi d'Ohm généralisée, lois de Kirchhoff) est rigoureusement licite à cette échelle.