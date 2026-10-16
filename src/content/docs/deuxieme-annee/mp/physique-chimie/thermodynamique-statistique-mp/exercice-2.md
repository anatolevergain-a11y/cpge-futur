---
title: 'Exercice 2 : Capacité thermique des solides'
description: 'Problème d entraînement type concours pour MP.'
---

### 🌐 Énoncé du problème / Cadre d'étude

La détermination de la capacité thermique des solides cristallins a constitué un jéton historique majeur de la physique statistique. Alors que la loi classique de Dulong et Petit prédit une capacité thermique molaire indépendante de la température, les mesures expérimentales à basse température révèlent une décroissance vers zéro, inexplicable sans le recours à la physique quantique.

Le présent problème se propose d'étudier deux modèles décrivant les vibrations d'un réseau cristallin tridimensionnel constitué de $N$ nœuds, assimilés à des oscillateurs harmoniques :
1. **Le modèle d'Einstein**, qui suppose que tous les atomes vibrent à la même fréquence propre $\omega_E$.
2. **Le modèle de Debye**, qui prend en compte les modes collectifs de vibration du réseau (les phonons) et introduit une fréquence maximale de coupure $\omega_D$.

On note $k_B$ la constante de Boltzmann, $h$ la constante de Planck ($$\hbar = \frac{h}{2\pi}$$), et $T$ la température absolue.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

#### I. Rappels sur l'oscillateur harmonique quantique à une dimension
1. Exprimer les niveaux d'énergie $E_n$ d'un oscillateur harmonique quantique de pulsation propre $\omega$, pour $n \in \mathbb{N}$.
2. En considérant un tel oscillateur en contact avec un thermostat à la température $T$, exprimer sa fonction de partition canonique $z$.
3. En déduire l'énergie moyenne $\langle \varepsilon \rangle$ de l'oscillateur en fonction de $\beta = \frac{1}{k_B T}$ et $\omega$.

#### II. Modèle d'Einstein des solides
4. Le cristal est modélisé par $3N$ oscillateurs harmoniques indépendants de même pulsation $\omega_E$. Écrire la fonction de partition totale $Z_E$ du système et son énergie interne moyenne $U_E(T)$.
5. En déduire l'expression de la capacité thermique à volume constant $C_{V,E}(T)$.
6. Étudier les limites de $C_{V,E}(T)$ aux hautes températures ($k_B T \gg \hbar \omega_E$) et aux basses températures ($k_B T \ll \hbar \omega_E$). Confronter ces résultats à l'expérience (loi de Dulong et Petit) et analyser les limites du modèle d'Einstein.

#### III. Modèle de Debye (Introduction aux phonons)
7. Dans le modèle de Debye, le spectre des pulsations des ondes acoustiques dans le solide est isotrope. Le nombre de modes de vibration compris entre $\omega$ et $\omega + \mathrm{d}\omega$ est donné par la densité d'états :
   $$g(\omega) = \frac{V \omega^2}{2\pi^2 v^3}$$
   où $V$ est le volume du cristal et $v$ la vitesse des ondes sonores (supposée constante). 
   Sachant que le nombre total de degrés de liberté vibratoires pour $N$ atomes est de $3N$, déterminer la relation liant la fréquence de coupure de Debye $\omega_D$ à $N$ et $V$.
8. Exprimer l'énergie interne $U_D(T)$ du cristal dans le cadre de ce modèle sous forme d'une intégrale faisant intervenir la température $T$ et la température de Debye $T_D = \frac{\hbar \omega_D}{k_B}$.
9. Évaluer $U_D(T)$ et $C_{V,D}(T)$ dans la limite des basses températures ($T \ll T_D$). On admettra l'intégrale : $\int_0^{+\infty} \frac{x^3}{\mathrm{e}^x - 1} \mathrm{d}x = \frac{\pi^4}{15}$.
10. Conclure sur la pertinence du modèle de Debye face aux observations expérimentales à basse température ($T^3$ de Debye).

---

### 💡 Pistes & Indications méthodologiques

- **Q1-Q3** : Pensez à utiliser la formule de la somme géométrique pour calculer $z$ et remarquez que l'énergie moyenne s'obtient élégamment par dérivation logarithmique de $z$ par rapport à $\beta$.
- **Q4-Q6** : La sommation des énergies indépendantes se traduit par un produit pour les fonctions de partition et une somme pour les énergies. Pour l'étude asymptotique à basse température, prenez garde à la dominance de l'exponentielle.
- **Q7** : La condition de normalisation s'écrit $\int_0^{\omega_D} g(\omega)\mathrm{d}\omega = 3N$.
- **Q9** : Effectuez un changement de variable judicieux $x = \frac{\hbar \omega}{k_B T}$ et prolongez la borne supérieure à l'infini si $T \ll T_D$.

---

### 📋 Corrigé détaillé pas à pas

#### I. Rappels sur l'oscillateur harmonique quantique à une dimension
1. Les niveaux d'énergie de l'oscillateur harmonique quantique sont quantifiés :
   $$E_n = \left(n + \frac{1}{2}\right)\hbar\omega \quad \text{avec} \quad n \in \mathbb{N}$$

2. La fonction de partition canonique $z$ de l'oscillateur s'écrit :
   $$z = \sum_{n=0}^{+\infty} \mathrm{e}^{-\beta E_n} = \mathrm{e}^{-\frac{\beta \hbar \omega}{2}} \sum_{n=0}^{+\infty} \left(\mathrm{e}^{-\beta \hbar \omega}\right)^n$$
   En posant $x = \mathrm{e}^{-\beta \hbar \omega} < 1$, on reconnaît une série géométrique convergente :
   $$z = \mathrm{e}^{-\frac{\beta \hbar \omega}{2}} \frac{1}{1 - \mathrm{e}^{-\beta \hbar \omega}} = \frac{1}{\mathrm{e}^{\frac{\beta \hbar \omega}{2}} - \mathrm{e}^{-\frac{\beta \hbar \omega}{2}}} = \frac{1}{2\sinh\left(\frac{\beta \hbar \omega}{2}\right)}$$

3. L'énergie moyenne $\langle \varepsilon \rangle$ se déduit de la fonction de partition par la relation standard :
   $$\langle \varepsilon \rangle = -\frac{\partial \ln z}{\partial \beta}$$
   En utilisant l'expression $\ln z = -\ln\left(2\sinh\left(\frac{\beta \hbar \omega}{2}\right)\right)$ :
   $$\langle \varepsilon \rangle = -\frac{\partial}{\partial \beta} \left[ -\ln\left(2\sinh\left(\frac{\beta \hbar \omega}{2}\right)\right) \right] = \frac{\hbar \omega}{2} \frac{\cosh\left(\frac{\beta \hbar \omega}{2}\right)}{\sinh\left(\frac{\beta \hbar \omega}{2}\right)}$$
   Soit l'expression finale :
   $$\langle \varepsilon \rangle = \frac{\hbar \omega}{2} + \frac{\hbar \omega}{\mathrm{e}^{\beta \hbar \omega} - 1}$$

#### II. Modèle d'Einstein des solides
4. Le cristal étant assimilé à $3N$ oscillateurs indépendants de même pulsation $\omega_E$, l'énergie interne moyenne $U_E(T)$ est simplement la somme des énergies moyennes de chaque oscillateur :
   $$U_E(T) = 3N \langle \varepsilon \rangle = 3N \left( \frac{\hbar \omega_E}{2} + \frac{\hbar \omega_E}{\mathrm{e}^{\frac{\hbar \omega_E}{k_B T}} - 1} \right)$$

5. La capacité thermique à volume constant $C_{V,E}(T)$ est la dérivée de $U_E$ par rapport à $T$ :
   $$C_{V,E}(T) = \left( \frac{\partial U_E}{\partial T} \right)_V = 3N \frac{\partial}{\partial T} \left( \frac{\hbar \omega_E}{\mathrm{e}^{\frac{\hbar \omega_E}{k_B T}} - 1} \right)$$
   En posant la température caractéristique d'Einstein $\theta_E = \frac{\hbar \omega_E}{k_B}$, on obtient après dérivation :
   $$C_{V,E}(T) = 3N k_B \left( \frac{\theta_E}{T} \right)^2 \frac{\mathrm{e}^{\frac{\theta_E}{T}}}{\left(\mathrm{e}^{\frac{\theta_E}{T}} - 1\right)^2}$$

6. **Études asymptotiques :**
   - *Hautes températures ($T \gg \theta_E$ ou $\frac{\theta_E}{T} \ll 1$)* : 
     On effectue un développement limité de l'exponentielle $\mathrm{e}^u \approx 1 + u$ avec $u = \frac{\theta_E}{T}$ :
     $$\frac{\mathrm{e}^{\frac{\theta_E}{T}}}{\left(\mathrm{e}^{\frac{\theta_E}{T}} - 1\right)^2} \approx \frac{1}{\left(\frac{\theta_E}{T}\right)^2} = \left(\frac{T}{\theta_E}\right)^2$$
     On en déduit :
     $$C_{V,E}(T) \underset{T \to +\infty}{\sim} 3N k_B$$
     C'est la **loi de Dulong et Petit**, en accord parfait avec l'expérience pour la plupart des solides à température ambiante ($3R$ par mole).
   - *Basses températures ($T \ll \theta_E$ ou $\frac{\theta_E}{T} \gg 1$)* :
     Le terme dominant est $\mathrm{e}^{\frac{\theta_E}{T}} \gg 1$ :
     $$C_{V,E}(T) \approx 3N k_B \left( \frac{\theta_E}{T} \right)^2 \mathrm{e}^{-\frac{\theta_E}{T}}$$
     **Analyse critique :** $C_{V,E}$ tend vers $0$ lorsque $T \to 0$, ce qui est qualitativement correct. Néanmoins, la décroissance est *exponentielle* ($\sim \mathrm{e}^{-\theta_E/T}$), alors que l'expérience montre une décroissance *en loi de puissance* ($T^3$). Le modèle d'Einstein surestime la chute de la capacité thermique à très basse température car il néglige les modes de vibration à basse fréquence (longues longueurs d'onde).

#### III. Modèle de Debye (Introduction aux phonons)
7. La condition de normalisation s'écrit en sommant tous les modes de vibration du système tridimensionnel :
   $$\int_0^{\omega_D} g(\omega) \mathrm{d}\omega = 3N \implies \int_0^{\omega_D} \frac{V \omega^2}{2\pi^2 v^3} \mathrm{d}\omega = 3N$$
   $$\frac{V}{2\pi^2 v^3} \frac{\omega_D^3}{3} = 3N \implies \omega_D^3 = \frac{18\pi^2 v^3 N}{V}$$
   Soit la fréquence de Debye :
   $$\omega_D = v \left( \frac{6\pi^2 N}{V} \right)^{1/3}$$

8. L'énergie interne de Debye s'obtient en intégrant l'énergie moyenne de chaque oscillateur pondérée par la densité d'états $g(\omega)$ :
   $$U_D(T) = \int_0^{\omega_D} g(\omega) \left[ \frac{\hbar \omega}{2} + \frac{\hbar \omega}{\mathrm{e}^{\frac{\hbar \omega}{k_B T}} - 1} \right] \mathrm{d}\omega$$
   Le premier terme représente l'énergie du point zero (constante), et le second l'énergie thermique. En introduisant la température de Debye $T_D = \frac{\hbar \omega_D}{k_B}$ et en remplaçant $g(\omega)$ :
   $$U_D(T) = \frac{3V \hbar}{2\pi^2 v^3} \int_0^{\omega_D} \frac{\omega^3}{2} \mathrm{d}\omega + \frac{3V \hbar}{2\pi^2 v^3} \int_0^{\omega_D} \frac{\omega^3}{\mathrm{e}^{\frac{\hbar \omega}{k_B T}} - 1} \mathrm{d}\omega$$
   En utilisant le rapport $\frac{V}{v^3} = \frac{18\pi^2 N}{\omega_D^3}$, on réécrit l'énergie thermique sous forme adimensionnée avec la variable $x = \frac{\hbar \omega}{k_B T}$ et $dx = \frac{\hbar}{k_B T} d\omega$ :
   $$U_D(T) = U_0 + 9N k_B T \left(\frac{T}{T_D}\right)^3 \int_0^{T_D/T} \frac{x^3}{\mathrm{e}^x - 1} \mathrm{d}x$$

9. **Limite des basses températures ($T \ll T_D$ ou $\frac{T_D}{T} \to +\infty$) :**
   La borne supérieure de l'intégrale peut être approchée par $+\infty$. En utilisant l'intégrale canonique admise $\int_0^{+\infty} \frac{x^3}{\mathrm{e}^x - 1} \mathrm{d}x = \frac{\pi^4}{15}$ :
   $$U_D(T) \approx U_0 + 9N k_B T \left(\frac{T}{T_D}\right)^3 \left(\frac{\pi^4}{15}\right) = U_0 + \frac{3\pi^4 N k_B}{5 T_D^3} T^4$$
   La capacité thermique $C_{V,D}(T)$ s'obtient en dérivant cette expression par rapport à $T$ :
   $$C_{V,D}(T) = \frac{\partial U_D}{\partial T} = \frac{12\pi^4 N k_B}{5} \left(\frac{T}{T_D}\right)^3$$

10. **Conclusion :** 
    Le modèle de Debye prédit une capacité thermique en $T^3$ à basse température ($C_{V,D} \propto T^3$). Ce résultat est en accord remarquable avec les données expérimentales pour les isolants cristallins à basse température (loi en $T^3$ de Debye). La prise en compte d'un spectre acoustique continu (les phonons) résout l'échec du modèle d'Einstein en rendant compte correctement des modes de vibration à basse énergie.