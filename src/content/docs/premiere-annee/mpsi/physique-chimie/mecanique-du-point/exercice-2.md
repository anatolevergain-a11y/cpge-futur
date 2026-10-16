---
title: 'Exercice 2 : Oscillateurs harmoniques et amortis'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la conception d'un sismomètre haute sensibilité destiné à l'enregistrement de micro-mouvements de la croûte terrestre, on s'intéresse à la modélisation d'un capteur inertiel. Le système est constitué d'une masse $m$ (le "pendule") mobile le long d'un axe horizontal $(O, \vec{u}_x)$, attachée à un bâti fixe par l'intermédiaire d'un ressort de raideur $k$ et de longueur à vide $l_0$. 

Afin de limiter les oscillations parasites lors d'un séisme et d'obtenir une réponse fréquentielle fidèle, le système est plongé dans un fluide visqueux qui exerce sur la masse une force de frottement de type $\vec{f} = -h \vec{v}$, où $\vec{v}$ est la vitesse de la masse dans le référentiel du laboratoire (supposé galiléen) et $h > 0$ un coefficient de frottement fluide.

Le but de ce problème est d'analyser la dynamique de ce système soumis à une excitation sinusoïdale (vibration du sol) et de discuter les limites du modèle linéaire proposé face à des sollicitations réelles de grande amplitude.

---

### ❓ Questions progressives (incluant des questions d'analyse critique)

1. **Modélisation et mise en équation :**
   Identifier le référentiel d'étude et préciser sa nature. Faire le bilan des forces extérieures agissant sur la masse $m$. Par application de la relation fondamentale de la dynamique (RFD), établir l'équation différentielle régissant le mouvement de la position $x(t)$ de la masse par rapport au repère fixe.

2. **Mise sous forme canonique :**
   Mettre l'équation différentielle sous la forme canonique :
   $$\frac{d^2 x}{dt^2} + 2\lambda \frac{dx}{dt} + \omega_0^2 x = 0$$
   Exprimer la pulsation propre $\omega_0$ et le coefficient d'amortissement $\lambda$ (ou le facteur de qualité $Q = \frac{\omega_0}{2\lambda}$) en fonction de $m$, $k$ et $h$.

3. **Étude énergétique et régime libre :**
   Définir l'énergie mécanique $E_m(t)$ du système oscillant. Établir la relation entre la dérivée temporelle de l'énergie mécanique et la puissance des forces non conservatrices. Commenter le signe de $\frac{dE_m}{dt}$.

4. **Résolution du régime pseudo-périodique :**
   On se place dans le cas d'un amortissement faible ($\lambda < \omega_0$). Déterminer l'expression générale de $x(t)$ en sachant qu'à $t = 0$, la masse est lâchée sans vitesse initiale depuis une position $x(0) = X_0$. On introduira la pseudo-pulsation $\omega_1$.

5. **Analyse critique du modèle et ordres de grandeur :**
   *Données numériques réalistes* : $m = 100\text{ g}$, $k = 40\text{ N}\cdot\text{m}^{-1}$.
   * a. Calculer la période propre $T_0$ du système.
   * b. Le fluide utilisé est de l'huile silicone dont la viscosité induit un coefficient $h = 0{,}20\text{ kg}\cdot\text{s}^{-1}$. Calculer le facteur de qualité $Q$. Le régime est-il bien pseudo-périodique ?
   * c. **Esprit critique :** Le modèle linéaire de frottement fluide ($\vec{f} = -h\vec{v}$) est-il toujours valable si l'amplitude des oscillations devient importante (par exemple $X_0 = 5\text{ cm}$) ? Citer un autre régime d'écoulement possible et expliquer qualitativement l'impact sur la décroissance des oscillations.

---

### 💡 Pistes & Indications

* **Q1 :** Veillez à bien projeter la relation vectorielle sur l'axe $(O, \vec{x})$ en prenant garde au signe de la force de rappel élastique selon que $x > 0$ ou $x < 0$.
* **Q3 :** L'énergie mécanique est la somme de l'énergie cinétique et de l'énergie potentielle élastique (en posant l'origine de l'énergie potentielle à l'allongement nul). Calculez $\frac{dE_m}{dt}$ et utilisez la RFD.
* **Q4 :** L'équation caractéristique associée est à discriminant négatif. Utilisez la forme générale avec des constantes réelles déterminées par les conditions initiales.
* **Q5.c :** Pensez au nombre de Reynolds ou aux régimes d'écoulement autour d'un objet en mouvement dans un fluide (linéaire vs quadratique).

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Modélisation et mise en équation
Le référentiel du laboratoire est supposé galiléen. La masse $m$ est soumise à :
* Son poids $\vec{P} = m\vec{g}$ (compensé par la réaction normale du support horizontal, le mouvement étant purement horizontal, on se place dans le plan horizontal $(O, \vec{u}_x)$).
* La force de rappel élastique du ressort : $\vec{F}_{\text{ressort}} = -k(x - l_0 - l_0)\vec{u}_x = -kx\vec{u}_x$ si l'origine $O$ est choisie à la position d'équilibre ($x = 0$ lorsque le ressort est à sa longueur à vide, ou en redéfinissant l'origine). Plus rigoureusement, si l'origine est la position d'équilibre statique, $\vec{F}_{\text{ressort}} = -k x \vec{u}_x$.
* La force de frottement fluide : $\vec{f} = -h \frac{dx}{dt} \vec{u}_x$.

Par application de la RFD sur l'axe $(O, \vec{u}_x)$ :
$$m \frac{d^2 x}{dt^2} = -kx - h \frac{dx}{dt}$$

#### 2. Mise sous forme canonique
En divisant par la masse $m$, on obtient :
$$\frac{d^2 x}{dt^2} + \frac{h}{m} \frac{dx}{dt} + \frac{k}{m} x = 0$$
Par identification avec la forme canonique, on pose :
* $\omega_0 = \sqrt{\frac{k}{m}}$ (pulsation propre, en $\text{rad}\cdot\text{s}^{-1}$)
* $\lambda = \frac{h}{2m}$ (coefficient d'amortissement, en $\text{s}^{-1}$)
* Le facteur de qualité s'exprime par $Q = \frac{\omega_0}{2\lambda} = \frac{\sqrt{mk}}{h}$.

#### 3. Étude énergétique
L'énergie mécanique du système est la somme de l'énergie cinétique $E_c$ et de l'énergie potentielle élastique $E_p$ :
$$E_m = E_c + E_p = \frac{1}{2} m \left(\frac{dx}{dt}\right)^2 + \frac{1}{2} k x^2$$
Dérivons cette expression par rapport au temps :
$$\frac{dE_m}{dt} = m \frac{dx}{dt} \frac{d^2 x}{dt^2} + k x \frac{dx}{dt} = \frac{dx}{dt} \left( m \frac{d^2 x}{dt^2} + k x \right)$$
D'après la RFD, $m \frac{d^2 x}{dt^2} + k x = -h \frac{dx}{dt}$. Ainsi :
$$\frac{dE_m}{dt} = -h \left(\frac{dx}{dt}\right)^2 = -h v^2$$
Analyse: * Puisque $h > 0$ et $v^2 \ge 0$, on a $\frac{dE_m}{dt} \le 0$. L'énergie mécanique est strictement décroissante (dissipation d'énergie par frottement visqueux sous forme thermique), ce qui traduit le caractère non conservatif du système.

#### 4. Résolution du régime pseudo-périodique
L'amortissement est faible si $\lambda < \omega_0$ (soit $Q > \frac{1}{2}$). L'équation caractéristique associée est :
$$r^2 + 2\lambda r + \omega_0^2 = 0$$
Le discriminant réduit est $\Delta' = \lambda^2 - \omega_0^2 < 0$. Les racines sont complexes conjuguées :
$$r_1, r_2 = -\lambda \pm i \sqrt{\omega_0^2 - \lambda^2} = -\lambda \pm i \omega_1$$
où $\omega_1 = \sqrt{\omega_0^2 - \lambda^2}$ est la pseudo-pulsation. La solution générale s'écrit :
$$x(t) = e^{-\lambda t} \left( A \cos(\omega_1 t) + B \sin(\omega_1 t) \right)$$
Avec les conditions initiales $x(0) = X_0$ et $\dot{x}(0) = 0$ :
* $x(0) = A = X_0$
* $\dot{x}(0) = -\lambda A + \omega_1 B = 0 \implies B = \frac{\lambda}{\omega_1} X_0$

Finalement :
$$x(t) = X_0 e^{-\lambda t} \left( \cos(\omega_1 t) + \frac{\lambda}{\omega_1} \sin(\omega_1 t) \right)$$

#### 5. Analyse critique du modèle et ordres de grandeur
* a. **Période propre :**
  $$T_0 = \frac{2\pi}{\omega_0} = 2\pi \sqrt{\frac{m}{k}} = 2\pi \sqrt{\frac{0{,}10}{40}} = 2\pi \sqrt{0{,}0025} = 2\pi \times 0{,}05 = 0{,}314\text{ s}$$

* b. **Facteur de qualité :**
  $\omega_0 = \sqrt{\frac{40}{0{,}10}} = \sqrt{400} = 20\text{ rad}\cdot\text{s}^{-1}$.
  $\lambda = \frac{h}{2m} = \frac{0{,}20}{2 \times 0{,}10} = 1{,}0\text{ s}^{-1}$.
  $$Q = \frac{\omega_0}{2\lambda} = \frac{20}{2 \times 1{,}0} = 10$$
  Puisque $Q > \frac{1}{2}$ (ou $\lambda < \omega_0$), **le régime est bien pseudo-périodique**. L'approximation d'un amortissement faible est ici pleinement validée ($Q = 10 \gg 1$).

* c. **Analyse critique des limites du modèle :**
  Si l'amplitude des oscillations atteint $X_0 = 5\text{ cm}$, la vitesse maximale de la masse est de l'ordre de $v_{\max} \approx \omega_0 X_0 = 20 \times 0{,}05 = 1\text{ m}\cdot\text{s}^{-1}$. 
  * *Limite physique :* La force de frottement linéaire ($\vec{f} = -h\vec{v}$) n'est rigoureusement valable que pour des écoulements rampants (nombre de Reynolds $Re \ll 1$). Pour une vitesse de $1\text{ m}\cdot\text{s}^{-1}$ dans un fluide visqueux ou de l'air, des termes non linéaires en $v^2$ apparaissent (loi de Stokes-Navier ou traînée aérodynamique $\vec{f} = -\frac{1}{2}\rho S C_x \|\vec{v}\|\vec{v}$).
  * *Conséquence sur le modèle :* L'équation différentielle devient non linéaire. La décroissance de l'amplitude n'est plus strictement exponentielle en enveloppe ($e^{-\lambda t}$), mais présente une décroissance plus rapide au début (dissipation quadratique plus forte aux grandes vitesses) puis se linéarise lorsque l'amplitude diminue. L'ingénieur doit donc restreindre l'utilisation de ce modèle aux petits déplacements, ou corriger l'équation pour les grands séismes.