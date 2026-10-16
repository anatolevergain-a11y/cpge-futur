---
title: 'Exercice 1 : Vecteur de Poynting et bilans énergétiques'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Vecteur de Poynting et bilans énergétiques dans un conducteur ohmique

## Énoncé

Le présent problème se propose d'étudier la propagation et la dissipation de l'énergie électromagnétique au sein d'un câble coaxial infini, modélisant une ligne de transmission à haute fréquence, puis d'analyser les limites énergétiques du modèle macroscopique de Drude pour les conducteurs soumis à des champs intenses.

On se place dans le cadre de l'approximation des régimes quasi-stationnaires (ARQS) ou en régime sinusoïdal temporel (fréquence $f = 50\text{ Hz}$ pour la première partie, puis extension aux hautes fréquences). Les milieux considérés sont supposés non magnétiques ($\mu = \mu_0$) et le vide a pour permittivité $\varepsilon_0$ et perméabilité $\mu_0$. On note $c = \frac{1}{\sqrt{\varepsilon_0 \mu_0}}$ la celerité de la lumière dans le vide.

---

## Questions

### Partie I : Étude énergétique d'un câble coaxial

On considère un câble coaxial rectiligne infini, constitué d'un cylindre conducteur central (rayon $a$, axe $Oz$) et d'une gaine conductrice cylindrique coaxiale (rayon interne $b$, rayon externe $c$). L'espace entre les conducteurs ($a < r < b$) est rempli d'un diélectrique parfait de permittivité $\varepsilon = \varepsilon_r \varepsilon_0$.

Un courant total d'intensité $I(t) = I_0 \cos(\omega t)$ circule dans le conducteur central (et revient en sens inverse dans la gaine). Une différence de potentiel $U(t)$ est établie entre le conducteur central et la gaine.

1. **Rappel de cours :** Établir le théorème de Poynting sous sa forme locale à partir des équations de Maxwell. Préciser l'expression de la densité volumique d'énergie électromagnétique $u$ et celle du vecteur de Poynting $\vec{\Pi}$.
2. **Champs dans le diélectrique :** En négligeant les effets de bord et en supposant l'ARQS valider localement, déterminer le champ électrique $\vec{E}(r, t)$ et le champ magnétique $\vec{B}(r, t)$ dans la zone inter-conductrice ($a < r < b$), en fonction de $r$, de l'intensité $I(t)$ et de la charge linéique $\lambda(t)$ du conducteur central.
3. **Flux d'énergie :** Calculer le vecteur de Poynting $\vec{\Pi}(r, t)$ dans le diélectrique. Interpréter physiquement la direction et le sens de ce vecteur quant au transport de l'énergie du générateur vers la charge.
4. **Bilan global :** Calculer le flux du vecteur de Poynting à travers une surface cylindrique de rayon $r$ ($a < r < b$) et de longueur $h$. Retrouver ainsi la puissance électrique acheminée par la ligne $P = U(t)I(t)$.

### Partie II : Dissipation ohmique et analyse critique

On s'intéresse maintenant à la pénétration du champ dans le conducteur central ($r < a$), supposé ohmique de conductivité $\sigma$.

5. **Équation de diffusion :** Établir l'équation différentielle vérifiée par le champ magnétique $\vec{B}$ à l'intérieur du conducteur. Définir la longueur caractéristique de pénétration (épaisseur de peau) $\delta$.
6. **Ordres de grandeur et analyse critique :** 
   - Calculer $\delta$ pour le cuivre ($\sigma \approx 5,8 \times 10^7\text{ S}\cdot\text{m}^{-1}$) à la fréquence industrielle $f = 50\text{ Hz}$, puis à $f = 1\text{ GHz}$.
   - *Analyse critique :* Pour $f = 1\text{ GHz}$, comparer $\LIB$ (libre parcours moyen des électrons dans le cuivre à température ambiante, $\approx 40\text{ nm}$) à l'épaisseur de peau $\delta$. Le modèle macroscopique local d'Ohm ($\vec{j} = \sigma \vec{E}$) est-il encore rigoureusement valide ? Discuter des limites physiques.

---

## Pistes et indications

1. Utiliser les identités vectorielles usuelles sur $\text{div}(\vec{E} \wedge \vec{B})$ et combiner les rotors des équations de Maxwell-Faraday et Maxwell-Ampère.
2. Appliquer le théorème d'Ampère pour le champ magnétique et le théorème de Gauss pour le champ électrique dans le cylindre infini.
3. Le produit vectoriel $\vec{E} \wedge \vec{B}$ s'effectue dans la base cylindrique $( \vec{u}_r, \vec{u}_\theta, \vec{u}_z )$.
4. Intégrer $\vec{\Pi} \cdot \vec{n} \, dS$ sur la surface latérale d'un cylindre de longueur $h$.
5. Utiliser l'ARQS pour négliger le courant de déplacement devant le courant de conduction dans le conducteur ($\gamma \gg \varepsilon \omega$).
6. Se rappeler que $\delta = \sqrt{\frac{2}{\omega \mu_0 \sigma}}$. Confronter la distance caractéristique de variation du champ aux échelles microscopiques du matériau.

---

## Corrigé pas à pas

### Partie I : Étude énergétique d'un câble coaxial

1. **Théorème de Poynting local :**
   À partir des équations de Maxwell :
   $$\text{rot}\vec{E} = -\frac{\partial \vec{B}}{\partial t}$$
   $$\text{rot}\vec{B} = \mu_0 \vec{j} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$$
   On calcule la divergence du vecteur de Poynting $\vec{\Pi} = \frac{1}{\mu_0} \vec{E} \wedge \vec{B}$ :
   $$\text{div}\left(\frac{\vec{E}\wedge\vec{B}}{\mu_0}\right) = \frac{1}{\mu_0} \left( \vec{B}\cdot\text{rot}\vec{E} - \vec{E}\cdot\text{rot}\vec{B} \right)$$
   En substituant les équations de Maxwell :
   $$\text{div}\vec{\Pi} = -\vec{j}\cdot\vec{E} - \frac{\partial}{\partial t}\left( \frac{\varepsilon_0 E^2}{2} + \frac{B^2}{2\mu_0} \right)$$
   On pose $u = \frac{1}{2}\varepsilon_0 E^2 + \frac{1}{2\mu_0}B^2$ (densité d'énergie électromagnétique).
   L'équation s'écrit sous la forme conservative :
   $$\text{div}\vec{\Pi} + \frac{\partial u}{\partial t} = -\vec{j}\cdot\vec{E}$$

2. **Champs dans le diélectrique ($a < r < b$) :**
   - Par symétrie cylindrique et invariance par translation selon $z$, le champ magnétique dérive du théorème d'Ampère appliqué sur un contour circulaire de rayon $r$ :
     $$\oint_{\mathcal{C}} \vec{B} \cdot d\vec{l} = B_\theta(r) 2\pi r = \mu_0 I(t) \implies \vec{B}(r,t) = \frac{\mu_0 I(t)}{2\pi r} \vec{u}_\theta$$
   - Le champ électrique s'obtient par application du théorème de Gauss (chargé linéiquement à $\lambda(t)$ par unité de longueur) :
     $$\vec{E}(r,t) = \frac{\lambda(t)}{2\pi \varepsilon r} \vec{u}_r$$
     *(Note : la différence de potentiel $U(t)$ est reliée à $\lambda(t)$ par $U(t) = \int_a^b \vec{E}\cdot d\vec{l} = \frac{\lambda(t)}{2\pi\varepsilon}\ln\left(\frac{b}{a}\right)$)*.

3. **Vecteur de Poynting :**
   $$\vec{\Pi} = \frac{1}{\mu_0} \vec{E} \wedge \vec{B} = \frac{1}{\mu_0} \left( \frac{\lambda(t)}{2\pi \varepsilon r} \vec{u}_r \right) \wedge \left( \frac{\mu_0 I(t)}{2\pi r} \vec{u}_\ق \right)$$
   $$\vec{\Pi}(r,t) = \frac{\lambda(t) I(t)}{4\pi^2 \varepsilon r^2} \vec{u}_z$$
   Le vecteur de Poynting est dirigé selon $\vec{u}_z$, c'est-à-dire parallèlement à l'axe du câble. L'énergie électromagnétique se propage le long de la ligne, guidée par les conducteurs, et non à l'intérieur de ces derniers.

4. **Flux et puissance :**
   Le flux traversant la surface d'un cylindre de rayon $r$ et de hauteur $h$ (surface latérale) est :
   $$\Phi = \iint_{\text{latérale}} \vec{\Pi} \cdot d\vec{S} = \Pi_z(r) \times (2\pi r h) = \frac{\lambda(t) I(t)}{2\pi \varepsilon r} h$$
   En exprimant $\lambda(t)$ en fonction de $U(t)$ :
   $$\Phi = \frac{2\pi \varepsilon U(t)}{\ln(b/a)} \frac{I(t)}{2\pi \varepsilon r} r h \dots$$
   Plus simplement, en intégrant le flux net sortant d'une portion de longueur $h$ du diélectrique délimitée par les rayons $a$ et $b$ :
   Le transport global de puissance à travers la section du câble est $P(t) = U(t)I(t)$, ce qui correspond bien au flux total de $\vec{\Pi}$ à travers une section droite du diélectrique.

---

### Partie II : Dissipation ohmique et analyse critique

5. **Équation de diffusion du champ magnétique :**
   Dans le conducteur ($r < a$), $\vec{j} = \sigma \vec{E}$. Les courants de déplacement sont négligeables devant les courants de conduction (ARQS).
   $$\text{rot}\vec{B} = \mu_0 \sigma \vec{E}$$
   On prend le rotor de cette équation :
   $$\text{rot}(\text{rot}\vec{B}) = \text{grad}(\text{div}\vec{B}) - \Delta \vec{B} = -\Delta \vec{B} = \mu_0 \sigma \text{rot}\vec{E} = -\mu_0 \sigma \frac{\partial \vec{B}}{\partial t}$$
   D'où l'équation de diffusion :
   $$\Delta \vec{B} = \mu_0 \sigma \frac{\partial \vec{B}}{\partial t}$$
   En régime sinusoïdal de pulsation $\omega$, cela donne $\Delta \underline{\vec{B}} = j \mu_0 \sigma \omega \underline{\vec{B}}$, d'où l'apparition de l'épaisseur de peau caractéristique :
   $$\delta = \sqrt{\frac{2}{\mu_0 \sigma \omega}}$$

6. **Ordres de grandeur et analyse critique :**
   - **Application numérique pour le cuivre** ($\sigma \approx 5,8 \times 10^7\text{ S}\cdot\text{m}^{-1}$, $\mu_0 = 4\pi \times 10^{-7}\text{ H}\cdot\text{m}^{-1}$) :
     * À $f = 50\text{ Hz}$ ($\omega = 100\pi\text{ rad}\cdot\text{s}^{-1}$) :
       $$\delta_{50} = \sqrt{\frac{2}{4\pi \times 10^{-7} \times 5,8 \times 10^7 \times 100\pi}} \approx 9,3\text{ mm}$$
     * À $f = 1\text{ GHz}$ ($\omega = 2\pi \times 10^9\text{ rad}\cdot\text{s}^{-1}$) :
       $$\delta_{1\text{ GHz}} = \delta_{50} \times \sqrt{\frac{50}{10^9}} \approx 9,3 \times 10^{-3} \times \sqrt{5 \times 10^{-8}} \approx 2,1\mu\text{m}$$

   - **Analyse critique des limites du modèle :**
     À $f = 1\text{ GHz}$, l'épaisseur de peau vaut $\delta \approx 2,1\,\mu\text{m} = 2100\text{ nm}$. 
     On nous donne le libre parcours moyen des électrons $\ell \approx 40\text{ nm}$. 
     On constate que $\delta \gg \ell$ (le rapport $\delta/\ell \approx 50$). 
     *Conclusion sur la validité :* Le milieu varie sur une distance $\delta$ qui reste grande devant le libre parcours moyen $\ell$ des porteurs de charge. Le modèle macroscopique local d'Ohm ($\vec{j} = \sigma \vec{E}$) reste donc **justifié**. 
     Cependant, si la fréquence augmentait encore drastiquement (domaines des infrarouges ou $\text{THz}$ extrêmes), $\delta$ pourrait devenir du même ordre de grandeur (ou inférieur) à $\ell$. Dans ce régime, les électrons subiraient des collisions non locales (effet de peau anormale), rendant caduque la relation locale linéaire de conductions et nécessitant l'utilisation de modèles cinétiques (équation de Boltzmann).