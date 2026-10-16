---
title: 'Exercice 1 : Théorème de l énergie cinétique'
description: 'Problème d entraînement type concours.'
---

# Problème GUIDÉ : Étude dynamique et énergétique d'un système de freinage régénératif

## Énoncé

Dans le cadre de la transition énergétique des mobilités urbaines, on s'intéresse au système de récupération d'énergie cinétique lors du freinage d'un véhicule électrique léger. Le dispositif étudié est un banc d'essai en laboratoire modélisant l'essieu arrière d'un véhicule.

Le système est constitué de :
* Un volant d'inertie modélisant l'inertie globale ramenée sur l'arbre de transmission, de moment d'inertie par rapport à son axe de rotation fixe $J = 0{,}5 \text{ kg}\cdot\text{m}^2$.
* Un moteur-générateur synchrone relié au volant, capable de couple électromagnétique réversible.
* Un réducteur de rapport de transmission idéal de raison $r = \frac{\omega_m}{\omega_v} = 4$ (où $\omega_m$ est la vitesse de rotation du moteur et $\omega_v$ celle du volant).
* Les frottements mécaniques au niveau des paliers sont modélisés par un couple résistant visqueux de moment $C_f = -f \cdot \omega_v$, avec $f = 0{,}02 \text{ N}\cdot\text{m}\cdot\text{s}\cdot\text{rad}^{-1}$.

L'étude se place dans le référentiel terrestre supposé galiléen.

---

## Questions

### Partie I : Modélisation et application du Théorème de l'Énergie Cinétique (TEC)

1. **[Q1]** Exprimer l'énergie cinétique galiléenne $E_c$ du volant en rotation autour de son axe fixe en fonction de son moment d'inertie $J$ et de sa vitesse de rotation $\omega_v$.
2. **[Q2]** Établir le bilan des moments des actions mécaniques extérieures s'exerçant sur le volant en phase de décélération (freinage régénératif). On note $C_{em}$ le couple exercé par le moteur-générateur (ramené sur l'arbre du volant) et $C_f$ le couple de frottement.
3. **[Q3]** À l'aide du Théorème de l'Énergie Cinétique (ou de sa dérivation temporelle), établir l'équation différentielle régissant la vitesse angulaire $\omega_v(t)$ du volant lors d'une phase de freinage où le couple moteur-générateur est maintenu constant ($C_{em} = C_0 < 0$).

### Partie II : Analyse énergétique et performance du système

4. **[Q4]** Intégrer l'équation différentielle précédente pour obtenir l'expression de $\omega_v(t)$, sachant qu'à l'instant $ initiale } t = 0$, le système tourne à la vitesse nominale $\omega_{v0} = 100 \text{ rad}\cdot\text{s}^{-1}$ et que le couple de freinage constant vaut $C_0 = -2 \text{ N}\cdot\text{m}$.
5. **[Q5]** Calculer l'énergie totale $E_{diss}$ dissipée par les frottements visqueux entre $t = 0$ et l'arrêt complet du système.
6. **[Q6]** Déterminer l'expression de l'énergie électrique $E_{elec}$ récupérable par le moteur-générateur (supposé parfait dans sa conversion électromécanique) sur cette même durée.

### Partie III : Esprit concours – Analyse critique et limites du modèle

7. **[Q7]** Le modèle de frottement visqueux ($C_f = -f \cdot \omega_v$) est-il réaliste pour modéliser l'ensemble des frottements (paliers, contacts, pertes fer du moteur) sur toute la plage de vitesse ? Proposer un modèle plus complet et discuter qualitativement de son impact sur la fin de la décélération.

---

## Pistes

* **Q1 & Q2 :** Pensez aux formules de cours concernant l'énergie cinétique de rotation d'un solide autour d'un axe fixe. Pour le bilan des moments, isolez le volant et recensé le couple moteur et le couple de frottement.
* **Q3 :** Le TEC sous forme conservative ou sous sa forme puissance (dérivée par rapport au temps) est particulièrement adapté ici : $\frac{dE_c}{dt} = \sum \mathcal{P}(\text{ext}).$
* **Q4 & Q5 :** Résolution d'une équation différentielle linéaire du 1er ordre à coefficients constants. Pour l'énergie dissipée, intégrez la puissance des frottements $\mathcal{P}_f = C_f \cdot \omega_v$ entre $t=0$ et $t=+\infty$.
* **Q7 :** Pensez aux frottements solides (loi de Coulomb) qui ne s'annulent pas lorsque la vitesse s'annule, contrairement au frottement visqueux.

---

## Corrigé pas à pas

### Partie I_1. **[Q1]** L'énergie cinétique d'un solide en rotation autour d'un axe fixe dans un référentiel galiléen s'exprime par :
   $$E_c = \frac{1}{2} J \omega_v^2$$

2. **[Q2]** Le volant est soumis à :
   * L'action de la liaison pivot (moment nul sur l'axe si l'on néglige les imperfections géométriques).
   * Le couple moteur-générateur $\vec{C}_{em} = C_{em} \vec{u}_z$.
   * Le couple de frottement visqueux $\vec{C}_f = -f \omega_v \vec{u}_z$.

3. **[Q3]** Appliquons le Théorème de l'Énergie Cinétique sous sa forme dérivée (puissance) :
   $$\frac{dE_c}{dt} = \mathcal{P}(\text{ext}) = (C_{em} + C_f) \omega_v$$
   En remplaçant $E_c$ et $C_f$ :
   $$\frac{d}{dt}\left(\frac{1}{2} J \omega_v^2\right) = (C_0 - f \omega_v) \omega_v \implies J \omega_v \frac{d\omega_v}{dt} = (C_0 - f \omega_v) \omega_v$$
   Pour $\omega_v \neq 0$, on simplifie par $\omega_v$ :
   $$J \frac{d\omega_v}{dt} + f \omega_v = C_0 \quad \text{soit} \quad \frac{J}{f} \frac{d\omega_v}{dt} + \omega_v = \frac{C_0}{f}$$

### Partie II

4. **[Q4]** L'équation différentielle est de la forme $\tau \frac{d\omega_v}{dt} + \omega_v = \omega_{v,\infty}$ avec $\tau = \frac{J}{f} = \frac{0{,}5}{0{,}02} = 25 \text{ s}$ et $\omega_{v,\infty} = \frac{C_0}{f} = \frac{-2}{0{,}02} = -100 \text{ rad}\cdot\text{s}^{-1}$.
   La solution générale est :
   $$\omega_v(t) = K e^{-t/\tau} + \omega_{v,\infty}$$
   Avec la condition initiale $\omega_v(0) = \omega_{v0} = 100 \text{ rad}\cdot\text{s}^{-1}$ :
   $$100 = K - 100 \implies K = 200$$
   Ainsi :
   $$\omega_v(t) = 200 e^{-t/25} - 100$$
   Le système s'arrête ($\omega_v(t_{arr}) = 0$) à l'instant $t_{arr}$ tel que :
   $$200 e^{-t_{arr}/25} = 100 \implies e^{-t_{arr}/25} = 0{,}5 \implies t_{arr} = 25 \ln(2) \approx 17{,}3 \text{ s}$$

5. **[Q5]** L'énergie dissipée par les frottements visqueux de $t = 0$ à $t_{arr}$ est l'intégrale de la puissance perdue :
   $$E_{diss} = \int_{0}^{t_{arr}} -C_f \omega_v \, dt = \int_{0}^{t_{arr}} f \omega_v^2 \, dt$$
   *Analyse critique / Astuce de calcul :* D'après le TEC global sur l'intervalle $[0, t_{arr}]$ :
   $$\Delta E_c = W(\text{couple moteur}) + W(\text{frottements})$$
   $$\underbrace{0 - \frac{1}{2} J \omega_{v0}^2}_{-\Delta E_c} = E_{elec} + E_{diss}$$
   Plus directement, l'énergie initiale vaut :
   $$E_{c0} = \frac{1}{2} \times 0{,}5 \times (100)^2 = 2500 \text{ J} = 2{,}5 \text{ kJ}$$
   L'énergie se répartit entre le travail extrait par le moteur ($E_{elec}$) et la chaleur dissipée par les frottements ($E_{diss}$). Le travail fourni par le couple moteur $C_0$ est :
   $$W(C_0) = \int_{0}^{t_{arr}} C_0 \omega_v \, dt = C_0 \int_{0}^{t_{arr}} \omega_v \, dt$$
   Calculons le déplacement angulaire $\theta(t_{arr}) = \int_{0}^{t_{arr}} \omega_v(t) dt$ :
   $$\theta(t_{arr}) = \int_{0}^{t_{arr}} (200 e^{-t/\tau} - 100) \, dt = \left[ -200\tau e^{-t/\tau} - 100t \right]_0^{t_{arr}}$$
   Avec $\tau = 25$ et $e^{-t_{arr}/\tau} = 0{,}5$ :
   $$\theta(t_{arr}) = \left( -200 \times 25 \times 0{,}5 - 100 \times 17{,}33 \right) - \left( -200 \times 25 \times 1 \right)$$
   $$\theta(t_{arr}) = (-2500 - 1733) - (-5000) = -4233 + 5000 = 767 \text{ rad}$$
   D'où l'énergie électrique récupérée :
   $$E_{elec} = |C_0 \times \theta(t_{arr})| = 2 \times 767 = 1534 \text{ J}$$
   Par bilan énergétique global :
   $$E_{diss} = E_{c0} - E_{elec} = 2500 - 1534 = 966 \text{ J}$$

6. **[Q6]** L'énergie électrique récupérable a été trouvée par bilan dans la question précédente : **$E_{elec} \approx 1534 \text{ J}$** (soit environ $61{,}4\%$ de l'énergie cinétique initiale convertie avec succès).

7. **[Q7]** **Analyse critique des limites du modèle :**
   * Le modèle visqueux ($C_f = f\omega_v$) suppose que le couple de frottement s'annule strictement lorsque la vitesse est nulle. Or, dans la réalité, les paliers et les balais éventuels présentent des frottements solides (sec ou de Coulomb) ainsi qu'un couple de décollage (statique).
   * *Modèle amélioré :* $C_f = - (f \cdot \omega_v + C_{sec} \cdot \text{sgn}(\omega_v))$
   * *Conséquence :* Avec un terme de frottement sec $C_{sec}$, l'arrêt du système interviendra de manière **discontinue** à un instant $t'_{arr} < t_{arr}$ : le système s'arrête brusquement dès que le couple moteur disponible ne compense plus le seuil de frottement sec, ce que le modèle visqueux pur ne permet pas de capturer (il prédit un arrêt asymptotique théorique en temps infini, bien que matérialisé numériquement ici par la troncature).