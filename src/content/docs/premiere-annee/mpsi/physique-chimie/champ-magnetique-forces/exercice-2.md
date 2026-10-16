---
title: 'Exercice 2 : Force de Laplace et applications aux moteurs électriques'
description: 'Problème corrigé type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les moteurs à courant continu à aimants permanents constituent une illustration fondamentale des applications macroscopiques de la force de Lorentz. L'objectif de ce problème est d'étudier la conversion électromécanique d'énergie au sein d'un modèle idéalisé de moteur à courant continu (MCC).

On se place dans le référentiel du laboratoire, supposé galiléen, muni d'un repère cartésien orthornormé direct $(O, \vec{u}_x, \vec{u}_y, \vec{u}_z)$ ou du système de coordonnées cylindriques $(O, \vec{u}_r, \vec{u}_\theta, \vec{u}_z)$ selon la pertinence.

Le stator du moteur crée un champ magnétique radial permanent que l'on modélise, au niveau du rotor, par un champ uniforme $\vec{B} = B_0 \vec{u}_r$ dans l'entrefer, où $B_0 > 0$ est une constante positive.
Le rotor est constitué d'un tambour cylindrique de rayon $R$ et de longueur $L$, comportant $N$ spires conductrices rigides identiques, parcourues par un courant d'intensité $I$. Le rotor est libre de tourner autour de l'axe fixe $(O, \vec{u}_z)$ avec une vitesse angulaire $\omega = \frac{d\theta}{dt}$, où $\theta$ est l'angle de rotation.

---

### ❓ Questions progressives

1. **Étude de la force de Laplace élémentaire :**
   Considérer une portion de fil conducteur filiforme de longueur élémentaire $d\vec{l}$ parcourue par un courant $I$, placée dans le champ magnétique $\vec{B}$. Exprimer la force de Laplace élémentaire $d\vec{F}_{\text{Laplace}}$ s'exerçant sur cette portion.

2. **Expression du moment magnétique et du couple moteur :**
   En déduire la force totale exercée sur une spire complète du rotor, puis exprimer le moment résultant $\vec{\Gamma}_m$ de ces forces par rapport à l'axe de rotation $(O, \vec{u}_z)$ en fonction de $B_0, I, R, L$ et du nombre de spires $N$ (sous l'hypothèse d'une commutation idéale maintenant le courant perpendiculaire au champ magnétique).

3. **Phénomène d'induction et force électromotrice (f.e.m.) :**
   En appliquant la loi de Faraday ou en utilisant le travail des forces de Laplace, exprimer la force électromotrice induite $E$ aux bornes du rotor en fonction de $B_0, R, L, N$ et de la vitesse angulaire $\omega$.

4. **Équations électriques et mécaniques du moteur :**
   Le moteur est alimenté par un générateur de tension continue de f.e.m. $U$ et de résistance interne $r$. Le bobinage du rotor possède une résistance propre $R_c$. 
   - Établir l'équation électrique du circuit rotorique.
   - Le rotor est soumis à un couple résistant constant $\vec{\Gamma}_r = -\Gamma_r \vec{u}_z$ (avec $\Gamma_r >0$) et un moment d'inertie $J$ par rapport à l'axe de rotation. Établir l'équation mécanique du système en régime transitoire.

5. **Régime permanent et rendement :**
   - Déterminer l'expression de la vitesse angulaire de rotation en régime permanent $\omega_{\text{perm}}$ en fonction de $U, r, R_c, \Gamma_r$ et des paramètres du moteur.
   - Exprimer le rendement électromécanique $\eta$ du moteur dans ce même régime permanent.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Utiliser la formule élémentaire de Lorentz pour un conducteur : $d\vec{F} = I d\vec{l} \wedge \vec{B}$. Veiller à bien expliciter les vecteurs dans le système de coordonnées cylindriques.
- **Question 2 :** Le moment d'une force par rapport à un axe se calcule via $\Gamma_z = (\vec{OP} \wedge \vec{F}) \cdot \vec{u}_z$. Pour une spire rectangulaire ou cylindrique, sommer ou intégrer le long du circuit fermé.
- **Question 3 :** Penser à la conservation de la puissance (bilan énergétique) : la puissance électrique convertie en puissance mécanique doit s'écrire $P_{\text{meca}} = \vec{\Gamma}_m \cdot \vec{\omega} = E I$.
- **Question 4 :** Utiliser la loi des mailles pour l'électricité et le théorème du moment cinétique (ou PFD en rotation) pour la mécanique.
- **Question 5 :** En régime permanent, les dérivées temporelles s'annulent ($\frac{d\omega}{dt} = 0$). Le rendement est le rapport de la puissance mécanique utile sur la puissance électrique totale fournie par l'alimentation.

---

### 📋 Corrigé détaillé et vérification des résultats

#### 1. Force de Laplace élémentaire
La force de Laplace élémentaire s'exerçant sur une portion de conducteur filiforme de longueur $d\vec{l}$ parcourue par un courant $I$ dans un champ magnétique $\vec{B}$ est donnée par la loi élémentaire :
$$d\vec{F}_{\text{Laplace}} = I \, d\vec{l} \wedge \vec{B}$$
*Vérification dimensionnelle :* $[I] = \mathrm{A}$, $[d\vec{l}] = \mathrm{m}$, $[B] = \mathrm{T} = \mathrm{kg}\cdot\mathrm{s}^{-2}\cdot\mathrm{A}^{-1}$. La force est en $\mathrm{N} = \mathrm{kg}\cdot\mathrm{m}\cdot\mathrm{s}^{-2}$, ce qui est homogène à $[\mathrm{I} \cdot l \cdot B] = \mathrm{A}\cdot\mathrm{m}\cdot(\mathrm{kg}\cdot\mathrm{s}^{-2}\cdot\mathrm{A}^{-1}) = \mathrm{kg}\cdot\mathrm{m}\cdot\mathrm{s}^{-2}$. La formule est homogène.

#### 2. Couple moteur
Considérons une spire active de longueur utile $L$ parallèle à l'axe $\vec{u}_z$, située à la distance $R$ de l'axe. Le champ magnétique est $\vec{B} = B_0 \vec{u}_r$.
Le courant parcourt le conducteur montant (dans le sens $+\vec{u}_z$) et descendant (dans le sens $-\vec{u}_z$). 
Pour le brin montant : $d\vec{l} = dz \, \vec{u}_z$. 
La force élémentaire sur ce brin est :
$$d\vec{F} = I (dz \, \vec{u}_z) \wedge (B_0 \vec{u}_r) = I B_0 dz \, (\vec{u}_z \wedge \vec{u}_r) = I B_0 dz \, \vec{u}_\theta$$
Le moment élémentaire de cette force par rapport à l'axe $(O, \vec{u}_z)$ est :
$$d\Gamma_z = (\vec{OM} \wedge d\vec{F}) \cdot \vec{u}_z = (R \vec{u}_r \wedge (I B_0 dz \, \vec{u}_\theta)) \cdot \vec{u}_z = R I B_0 dz \, (\vec{u}_r \wedge \vec{u}_theta) \cdot \vec{u}_z = R I B_0 dz$$
En intégrant le long de la longueur active $L$ du brin :
$$\Gamma_{\text{brin}} = \int_{0}^{L} R I B_0 dz = R L I B_0$$
Une spire comporte deux brins actifs de sens de courant opposés, ce qui double le moment total (les forces sont opposées mais leurs moments s'ajoutent par symétrie de révolution). Pour $N$ spires, le couple moteur total $\vec{\Gamma}_m$ s'écrit donc :
$$\vec{\Gamma}_m = K_m I \, \vec{u}_z \quad \text{avec} \quad K_m = 2 N R L B_0$$

#### 3. Force électromotrice induite
Par application du principe de conservation de l'énergie (bilan énergétique du convertisseur électromécanique idéal, sans pertes Joule rotoriques internes dans cette étape) :
La puissance électrique convertie en puissance mécanique est $P_{\text{conv}} = E I$.
Cette puissance doit être égale à la puissance mécanique fournie par les forces de Laplace :
$$P_{\text{meca}} = \vec{\Gamma}_m \cdot \vec{\omega} = (\Gamma_m \vec{u}_z) \cdot (\omega \vec{u}_z) = \Gamma_m \omega = (2 N R L B_0 I) \omega$$
En égalant $E I = (2 N R L B_0 I) \omega$, on obtient l'expression de la f.e.m. induite :
$$E = 2 N R L B_0 \omega = K_m \omega$$
*Vérification dimensionnelle :* $[E] = \mathrm{V}$. $[K_m] = \mathrm{N}\cdot\mathrm{m}\cdot\mathrm{A}^{-1} = \mathrm{V}\cdot\mathrm{s}$. $[\omega] = \mathrm{rad}\cdot\mathrm{s}^{-1}$. Le produit $[K_m \omega]$ donne bien des volts.

#### 4. Équations électriques et mécaniques
- **Équation électrique :** 
  En appliquant la loi des mailles au circuit rotorique (alimenté sous une tension $U$, de résistance interne $r$ et de résistance de bobinage $R_c$) :
  $$U = (r + R_c)I + E \implies U = R_{\text{tot}} I + K_m \omega$$
  où $R_{\text{tot}} = r + R_c$.

- **Équation mécanique :**
  Par application du théorème du moment cinétique appliqué au rotor de moment d'inertie $J$ autour de l'axe fixe $(O, \vec{u}_z)$ :
  $$J \frac{d\omega}{dt} = \Gamma_m - \Gamma_r = K_m I - \Gamma_r$$

#### 5. Régime permanent et rendement
- **Vitesse en régime permanent :**
  En régime permanent, les régimes transitoires sont établis, donc $\frac{d\omega}{dt} = 0$. 
  L'équation mécanique impose :
  $$K_m I_{\text{perm}} - \Gamma_r = 0 \implies I_{\text{perm}} = \frac{\Gamma_r}{K_m}$$
  En reportant cette expression dans l'équation électrique :
  $$U = R_{\text{tot}} \left(\frac{\Gamma_r}{K_m}\right) + K_m \omega_{\text{perm}}$$
  On isole la vitesse de rotation en régime permanent :
  $$\omega_{\text{perm}} = \frac{U - \frac{R_{\text{tot}} \Gamma_r}{K_m}}{K_m} = \frac{U K_m - R_{\text{tot}} \Gamma_r}{K_m^2}$$

- **Rendement électromécanique :**
  Le rendement $\eta$ est défini par le rapport de la puissance mécanique utile sur la puissance électrique totale fournie par l'alimentation :
  $$\eta = \frac{P_{\text{utile}}}{P_{\text{fournie}}} = \frac{\Gamma_r \omega_{\text{perm}}}{U I_{\text{perm}}}$$
  En substituant $I_{\text{perm}} = \frac{\Gamma_r}{K_m}$ et $K_m \omega_{\text{perm}} = U - R_{\text{tot}} I_{\text{perm}}$ :
  $$\eta = \frac{(K_m I_{\text{perm}}) \omega_{\text{perm}}}{U I_{\text{perm}}} = \frac{K_m \omega_{\text{perm}}}{U} = \frac{U - R_{\text{tot}} I_{\text{perm}}}{U} = 1 - \frac{R_{\text{tot}} \Gamma_r}{U K_m}$$
  *Vérification :* Le rendement est sans dimension, strictement inférieur à 1, ce qui est physiquement cohérent avec la présence des pertes par effet Joule ($R_{\text{tot}} I^2$).