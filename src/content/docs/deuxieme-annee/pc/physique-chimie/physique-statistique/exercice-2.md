---
title: 'Exercice 2 : Distribution de Maxwell-Boltzmann'
description: 'Problème d entraînement type concours officiel.'
---

# Problème guidé : La distribution de Maxwell-Boltzmann et ses limites

## Énoncé

Le modèle du gaz parfait monoatomique à l'équilibre thermodynamique macroscopique permet d'accéder aux propriétés microscopiques des constituants par le biais de la physique statistique de Boltzmann. On s'intéresse dans ce problème à la détermination de la distribution des vitesses des molécules d'un gaz, à l'établissement de la loi de barométrie, et enfin à l'analyse critique des hypothèses du modèle à haute densité ou basse température.

On considère un gaz parfait constitué de $N$ molécules identiques de masse $m$, enfermées dans un volume $V$ à la température $T$. Le gaz est au repos macroscopique dans le référentiel du laboratoire. On note $k_B$ la constante de Boltzmann.

---

## Questions

### Partie I : Fonction de distribution des vitesses et énergies
1. Rappeler l'expression de la probabilité élémentaire $\mathrm{d}P(v_x, v_y, v_z)$ qu'une molécule possède un vecteur vitesse $\vec{v}$ dont les composantes cartésiennes sont comprises entre $v_x$ et $v_x + \mathrm{d}v_x$, $v_y$ et $v_y + \mathrm{d}v_y$, $v_z$ et $v_z + \mathrm{d}v_z$. Justifier la factorisation de cette probabilité en fonction des composantes.
2. En déduire la fonction de distribution des vitesses $f(v)$ telle que $f(v)\mathrm{d}v$ représente la probabilité qu'une molécule ait une norme de vitesse comprise entre $v$ et $v + \mathrm{d}v$. On exprimera $f(v)$ en fonction de $m$, $k_B$, $T$ et $v$.
3. Calculer la vitesse la plus probable $v_p$, la vitesse moyenne $\langle v \text{ }\rangle$ et la vitesse quadratique moyenne $\sqrt{\langle v^2 \text{ }\rangle}$.
4. Application numérique : Calculer ces trois vitesses pour du dioxygène ($\text{O}_2$) à $T = 300\text{ K}$. On donne $M(\text{O}_2) = 32\text{ g}\cdot\text{mol}^{-1}$ et $N_A = 6{,}02\cdot 10^{23}\text{ mol}^{-1}$.

### Partie II : Effet d'un champ de pesanteur (Atmosphère isotherme)
5. On superpose un champ de pesanteur uniforme $\vec{g} = -g\vec{u}_z$ à l'ensemble du système. Établir l'expression de la densité volumique de probabilité de présence d'une molécule à l'altitude $z$, notée $\mathcal{P}(z)$.
6. En déduire la loi de variation de la pression $P(z)$ en fonction de l'altitude $z$ (loi de la statique des fluides combinée à la loi des gaz parfaits). Comment appelle-t-on ce modèle d'atmosphère ?

### Partie III : Limites du modèle et analyse critique
7. Évaluer la distance intermoléculaire moyenne $d$ dans les conditions normales de température et de pression (CNTP : $P_0 = 1{,}013\cdot 10^5\text{ Pa}$, $T_0 = 273{,}15\text{ K}$). On modélisera une molécule par une sphère dure de rayon effectif $r_0 \approx 0{,}2\text{ nm}$.
8. Discuter qualitativement et quantitativement la validité de l'approximation du gaz parfait (et donc de la distribution de Maxwell-Boltzmann) lorsque la température diminue fortement ou lorsque la pression augmente considérablement. Quels effets quantiques ou interactionnels négligés ici commencent à se manifester ?

---

## Pistes et indications

* **Q1 & Q2 :** Utiliser la factorisation du facteur de Boltzmann $\exp(-E/k_B T)$ où l'énergie cinétique est la somme des énergies cinétiques suivant chaque axe. Passer en coordonnées sphériques dans l'espace des vitesses pour obtenir $f(v)$.
* **Q3 :** Rappel d'intégrales utiles : $\int_0^{inf} x^2 e^{-ax^2} \mathrm{d}x = \frac{1}{4a}\sqrt{\frac{\pi}{a}}$, $\int_0^{inf} x^3 e^{-ax^2} \mathrm{d}x = \frac{1}{2a^2}$, et $\int_0^{inf} x^4 e^{-ax^2} \mathrm{d}x = \frac{3}{8a^2}\sqrt{\frac{\pi}{a}}$.
* **Q5 :** L'énergie totale d'une molécule est la somme de son énergie cinétique et de son énergie potentielle de pesanteur $mgz$. Le principe fondamental de la thermodynamique statistique indique que la probabilité est proportionnelle au facteur de Boltzmann $\exp(-E_{tot}/k_B T)$.
* **Q7 & Q8 :** Comparer le volume propre des molécules au volume total disponible (facteur de compacité) et comparer l'énergie cinétique thermique moyenne à l'énergie potentielle d'interaction de Van der Waals.

---

## Corrigé détaillé

### Partie I : Fonction de distribution des vitesses et énergies

1. Selon la statistique de Maxwell-Boltzmann, la probabilité qu'une particule se trouve dans un état d'énergie $E$ est proportionnelle à $\exp(-E/k_B T)$. L'énergie cinétique s'écrivant $E_c = \frac{1}{2}m(v_x^2 + v_y^2 + v_z^2)$, la probabilité élémentaire se factorise :
   $$\mathrm{d}P(v_x, v_y, v_z) = A \exp\left(-\frac{m v_x^2}{2k_B T}\right)\mathrm{d}v_x \cdot \exp\left(-\frac{m v_y^2}{2k_B T}\right)\mathrm{d}v_y \cdot \exp\left(-\frac{m v_z^2}{2k_B T}\right)\mathrm{d}v_z$$
   La constante de normalisation $A$ se détermine en intégrant sur tout l'espace des vitesses ($\int_{-\infty}^{+\infty} \mathrm{d}P = 1$), ce qui donne $A = \left(\frac{m}{2\pi k_B T}\right)^{3/2}$.

2. Pour passer à la distribution des normes des vitesses $f(v)$, on intègre la probabilité précédente sur toutes les directions, ce qui revient à intégrer sur une coquille sphérique de rayon $v$ et d'épaisseur $\mathrm{d}v$ dans l'espace des vitesses ($\mathrm{d}^3v = 4\pi v^2 \mathrm{d}v$) :
   $$f(v)\mathrm{d}v = 4\pi v^2 \left(\frac{m}{2\pi k_B T}\right)^{3/2} \exp\left(-\frac{m v^2}{2k_B T}\right)\mathrm{d}v$$
   Soit :
   $$f(v) = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} v^2 \exp\left(-\frac{m v^2}{2k_B T}\right)$$

3. * **Vitesse la plus probable $v_p$ :** On cherche le maximum de $f(v)$, ce qui revient à annuler sa dérivée par rapport à $v$ :
     $$\frac{\mathrm{d}f}{\mathrm{d}v} = 0 \implies 2v - \frac{m}{k_B T}v^3 = 0 \implies v_p = \sqrt{\frac{2k_B T}{m}}$$
   * **Vitesse moyenne $\langle v \text{ }\rangle$ :** 
     $$\langle v \text{ }\rangle = \int_0^{+\infty} v f(v)\mathrm{d}v = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} \int_0^{+\infty} v^3 \exp\left(-\frac{m v^2}{2k_B T}\right)\mathrm{d}v$$
     En posant $a = \frac{m}{2k_B T}$ et en utilisant l'intégrale formulaire :
     $$\langle v \text{ }\rangle = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} \frac{1}{2a^2} = \sqrt{\frac{8k_B T}{\pi m}}$$
   * **Vitesse quadratique moyenne $\sqrt{\langle v^2 \text{ }\rangle}$ :**
     $$\langle v^2 \text{ }\rangle = \int_0^{+\infty} v^2 f(v)\mathrm{d}v = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} \int_0^{+\infty} v^4 \exp\left(-\frac{m v^2}{2k_B T}\right)\mathrm{d}v$$
     En utilisant l'intégrale formulaire pour $v^4$ :
     $$\langle v^2 \text{ }\rangle = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} \frac{3}{8a^2}\sqrt{\frac{\pi}{a}} = \frac{3k_B T}{m} \implies \sqrt{\langle v^2 \text{ }\rangle} = \sqrt{\frac{3k_B T}{m}}$$

4. * **A.N. :** $m = \frac{M}{N_A} = \frac{32\cdot 10^{-3}}{6{,}02\cdot 10^{23}} \approx 5{,}32\cdot 10^{-26}\text{ kg}$. $k_B = 1{,}38\cdot 10^{-23}\text{ J}\cdot\text{K}^{-1}$. $T = 300\text{ K}$.
   * $v_p = \sqrt{\frac{2 \times 1{,}38\cdot 10^{-23} \times 300}{5{,}32\cdot 10^{-26}}} \approx 395\text{ m}\cdot\text{s}^{-1}$
   * $\langle v \text{ }\rangle = \sqrt{\frac{8 \times 1{,}38\cdot 10^{-23} \times 300}{\pi \times 5{,}32\cdot 10^{-26}}} \approx 446\text{ m}\cdot\text{s}^{-1}$
   * $\sqrt{\langle v^2 \text{ }\rangle} = \sqrt{\frac{3 \times 1{,}38\cdot 10^{-23} \times 300}{5{,}32\cdot 10^{-26}}} \approx 484\text{ m}\cdot\text{s}^{-1}$

---

### Partie II : Effet d'un champ de pesanteur

5. L'énergie totale d'une molécule à l'altitude $z$ est $E = E_c + mgz$. La probabilité de présence est donc proportionnelle à $\exp\left(-\frac{E_c + mgz}{k_B T}\right)$. En intégrant sur toutes les vitesses, la densité de probabilité $\mathcal{P}(z)$ est proportionnelle au facteur de Boltzmann potentiel :
   $$\mathcal{P}(z) = \mathcal{P}(0) \exp\left(-\frac{mgz}{k_B T}\right)$$

6. Par proportionalité entre la densité de probabilité de présence et la densité volumique de molécules (donc la pression via la loi des gaz parfaits $P = n^* k_B T$), on obtient :
   $$P(z) = P(0) \exp\left(-\frac{mgz}{k_B T}\S\right)$$
   Il s'agit de la **loi barométrique**, décrivant une **atmosphère isotherme**.

---

### Partie III : Limites du modèle et analyse critique

7. Dans les CNTP, le volume molaire d'un gaz parfait est $V_m = \frac{RT}{P_0} \approx 22{,}4\text{ L}\cdot\text{mol}^{-1}$. Le volume moyen occupé par une molécule est :
   $$\mathcal{V} = \frac{V_m}{N_A} = \frac{22{,}4\cdot 10^{-3}}{6{,}02\cdot 10^{23}} \approx 3{,}72\cdot 10^{-26}\text{ m}^3$$
   La distance intermoléculaire moyenne $d$ s'estime par $d \approx \mathcal{V}^{1/3} \approx (3{,}72\cdot 10^{-26})^{1/3} \approx 3{,}3\cdot 10^{-9}\text{ m} = 3{,}3\text{ nm}$.
   Cette distance est grande devant la taille caractéristique d'une molécule ($2r_0 \approx 0{,}4\text{ nm}$), ce qui valide a posteriori l'hypothèse du gaz dilué.

8. **Analyse critique des limites :**
   * **À haute pression / forte densité :** La distance $d$ diminue et devient comparable à la taille des molécules. Le volume propre des molécules (exclu) ne peut plus être négligé (correction de van der Waals $b$). De plus, les forces intermoléculaires attractives (interactions de van der Waals) entrent en jeu : l'énergie potentielle d'interaction ne peut plus être ignorée face à l'énergie cinétique, invalidant la distribution de Maxwell-Boltzmann pure.
   * **À basse température :** L'agitation thermique diminue fortement ($\langle E_c \rangle \searrow$). L'énergie potentielle d'interaction intermoléculaire devient prépondérante devant l'énergie cinétique, ce qui conduit à la condensation du gaz (liquéfaction ou solidification). 
   * **Limites quantiques :** Si la température est extrêmement basse ou la densité extrêmement forte, la longueur d'onde thermique de De Broglie $\lambda_{th} = \frac{h}{\sqrt{3mk_B T}}$ devient supérieure à la distance intermoléculaire $d$. Les effets quantiques (statistiques de Bose-Einstein ou Fermi-Dirac) se substituent alors totalement à la physique statistique classique de Maxwell-Boltzmann.