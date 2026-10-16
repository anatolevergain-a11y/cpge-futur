---
title: 'Exercice 1 : Statique des fluides'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude de l'équilibre d'un barrage-poids et de la stabilité d'un corps immergé

**Filière :** PSI  
**Matière :** Physique-Chimie  
Chapitre: ** Mécanique des fluides  
**Thème :** Statique des fluides et analyse critique des limites du modèle  

---

## 1. Énoncé

On s'intéresse à la modélisation mécanique d'un barrage-poids retenant un lac artificiel, ainsi qu'à un dispositif de contrôle de niveau (flotteur immergé). 

Le problème se compose de deux parties indépendantes :
1. **Étude globale d'un barrage-poids** soumis à la pression hydrostatique de l'eau.
2. **Stabilité d'un corps immergé** (flotteur cylindrique) utilisé pour la régulation.

On se place dans le cadre de l'hydrostatique. Le champ de pesanteur est uniforme : $\vec{g} = -g \, \vec{u}_z$, avec $g = 9{,}81 \text{ m}\cdot\text{s}^{-2}$. L'eau est considérée comme un fluide incompressible de masse volumique $\rho_{\text{eau}} = 1,00 \times 10^3 \text{ kg}\cdot\text{m}^{-3}$. L'atmosphère règne à la pression constante $P_0 = 1,013 \times 10^5 \text{ Pa}$.

---

## 2. Questions

### Partie A : Étude d'un barrage-poids
Le barrage est modélisé par un mur vertical de largeur $L$ (selon $\vec{u}_y$) et de hauteur $H$. L'eau retient une hauteur d'eau $h$ ($h \le H$). Le mur repose sur un sol horizontal. On néglige l'infiltration d'eau sous le barrage.

1. **Rappel de cours :** Établir l'expression de la pression $P(z)$ dans l'eau en fonction de la profondeur, en prenant pour origine $z=0$ à la surface libre de l'eau, l'axe $z$ étant orienté vers le bas.
2. **Force pressante :** Calculer la résultante des forces de pression $\vec{F}_{\text{press}}$ exercées par l'eau sur la face verticale du barrage de largeur $L$ et de hauteur $h$. Préciser son point d'application (centre de poussée).
3. **Stabilité du barrage :** Le barrage est un solide de masse $M$, dont le centre de gravité $G$ est situé à une distance $X_G$ de la face amont (côté eau). Établir la condition de non-basculement du barrage autour de son arête aval en fonction de $M$, $g$, $h$, $L$ et $\rho_{\text{eau}}$.

### Partie B : Stabilité d'un flotteur cylindrique
Un cylindre homogène de section $S$, de hauteur $H_c$ et de masse volumique $\rho_c$ (avec $\rho_c < \rho_{\text{eau}}$) flotte verticalement à la surface de l'eau.

4. **Équilibre :** Déterminer la hauteur d'immersion $h_0$ du cylindre à l'équilibre.
5. **Stabilité :** On enfonce verticalement le cylindre d'une petite quantité $\delta z$ et on le lâche. Établir l'équation différentielle du mouvement et discuter de sa stabilité.

---

## 3. Pistes et indications

* **Question 1 :** Appliquer la relation fondamentale de la statique des fluides (RFSF).
* **Question 2 :** Effectuer l'intégrale de la force élémentaire $\mathrm{d}\vec{F} = (P(z) - P_0)\vec{u}_x \mathrm{d}S$ sur la surface mouillée (la pression atmosphérique s'exerçant des deux côtés du barrage, son bilan global s'annule souvent, mais il faut bien poser le calcul avec la pression effective).
* **Question 3 :** Faire le bilan des moments des forces s'exerçant sur le barrage par rapport à l'arête de basculement.
* **Question 5 :** Utiliser le théorème de la résultante dynamique (TRD) sur le cylindre en projection selon l'axe vertical.

---

## 4. Corrigé détaillé

### Partie A : Étude d'un barrage-poids

1. **Pression dans l'eau :**  
   La RFSF s'écrit pour un fluide au repos dans le champ de pesanteur :
   $$\vec{\nabla} P = \rho_{\text{eau}} \vec{g}$$
   En projection selon l'axe $z$ (orienté vers le bas) :
   $$\frac{\mathrm{d}P}{\mathrm{d}z} = \rho_{\text{eau}} g$$
   Par intégration entre la surface ($z=0$, $P(0)=P_0$) et une profondeur $z$ :
   $$P(z) = P_0 + \rho_{\text{eau}} g z$$

2. **Force pressante :**  
   La force élémentaire exercée sur une surface élémentaire $\mathrm{d}S = L \, \mathrm{d}z$ de la face amont est :
   $$\mathrm{d}\vec{F} = (P(z) - P_{\text{atm}})\vec{u}_x = \rho_{\text{eau}} g z \, L \, \mathrm{d}z \, \vec{u}_x$$
   où $\vec{u}_x$ est la normale sortante du fluide (dirigée vers le barrage).
   La résultante s'obtient en intégrant de $z = 0$ à $z = h$ :
   $$\vec{F}_{\text{press}} = \int_{0}^{h} \rho_{\text{eau}} g z L \, \mathrm{d}z \, \vec{u}_x = \frac{1}{2} \rho_{\text{eau}} g L h^2 \, \vec{u}_x$$
   Le moment par rapport à la surface ($z=0$) permet de trouver le centre de poussée $z_CP$ :
   $$z_{CP} = \frac{\int z \mathrm{d}F}{\int \mathrm{d}F} = \frac{\int_0^h z^2 \mathrm{d}z}{\int_0^h z \, \mathrm{d}z} = \frac{2}{3} h$$

3. **Condition de non-basculement :**  
   Soit $A$ l'arête aval du barrage. Le barrage a une largeur totale $e$ à sa base. Le moment stabilisateur est dû au poids du barrage $\vec{P}_{\text{barrage}} = -Mg \vec{u}_z$, agissant en $G$ (situé à $e - X_G$ de l'arête aval si $X_G$ est compté depuis l'amont, ou plus simplement en notant $X_G$ la distance au point de pivot selon le choix d'axe). 
   En sommant les moments par rapport à l'arête de basculement aval (située à $x = e$) :
   * Moment stabilisateur (poids) : $\mathcal{M}_{\text{poids}} = -M g X_G$ (en supposant $X_G$ mesuré par rapport à l'axe de basculement).
   * Moment destabilisateur (pression) : $\mathcal{M}_{\text{press}} = +F_{\text{press}} \times \left(h - z_{CP}\right)$ ? Attention, la force s'exerce à la profondeur $2h/3$, donc sa distance par rapport à la base est $h - 2h/3 = h/3$.
   Le moment de la force de pression par rapport à l'axe de basculement de la base est donc :
   $$\mathcal{M}_{\text{press/base}} = - \frac{1}{2} \rho_{\text{eau}} g L h^2 \times \frac{h}{3} = - \frac{1}{6} \rho_{\text{eau}} g L h^3$$
   La condition de non-basculement impose que la somme des moments en $A$ soit positive (ou nulle à la limite) :
   $$M g X_G - \frac{1}{6} \rho_{\text{eau}} g L h^3 \ge 0 \implies M X_G \ge \frac{1}{6} \rho_{\text{eau}} L h^3$$

---

### Partie B : Stabilité d'un flotteur cylindrique

4. **Hauteur d'immersion à l'équilibre :**  
   Le système (cylindre) est soumis à son poids $\vec{P} = -m g \vec{u}_z$ (avec $m = \rho_c S H_c$) et à la poussée d'Archimède $\vec{F}_A = \rho_{\text{eau}} V_{\text{imm}} g \vec{u}_z = \rho_{\text{eau}} S h_0 g \vec{u}_z$.
   À l'équilibre statique :
   $$\vec{P} + \vec{F}_A = \vec{0} \implies -\rho_c S H_c g + \rho_{\text{eau}} S h_0 g = 0$$
   $$\implies h_0 = \frac{\rho_c}{\rho_{\text{eau}}} H_c$$

5. **Équivalence dynamique et stabilité :**  
   On écarte le cylindre de sa position d'équilibre d'une petite distance $z(t)$ (vers le bas, $z>0$). Le volume immergé devient $V(t) = S(h_0 + z)$.
   Le TRD appliqué au cylindre selon $\vec{u}_z$ donne :
   $$m \ddot{z} = -mg + \rho_{\text{eau}} S (h_0 + z) g$$
   Comme $-mg + \rho_{\text{eau}} S h_0 g = 0$ (position d'équilibre), il vient :
   $$m \ddot{z} = \rho_{\text{eau}} S g z \implies \ddot{z} - \frac{\rho_{\text{eau}} S g}{m} z = 0$$
   En remplaçant $m = \rho_c S H_c = \rho_{\text{eau}} S h_0$ :
   $$\ddot{z} - \frac{g}{h_0} z = 0$$
   **Analyse critique :** L'équation caractéristique est rattachée à un signe positif devant le terme en $z$ (terme en $\omega^2$ avec un signe moins, ou $+ \Omega^2 z = 0$ selon le sens). Les solutions sont de type exponentielles réelles ($z(t) = A e^{\omega t} + B e^{-\omega t}$ avec $\omega = \sqrt{g/h_0}$). 
   Le système est **instable** dans cette modélisation unidimensionnelle purement verticale si l'on ne prend pas en compte les forces de frottement ou si l'on interprète mal le signe : 
   *Correction de signe :* $\vec{F}_A$ s'oppose au déplacement $z$ (si on enfonce le cylindre $z>0$, la poussée augmente et tend à le ramener vers le haut). 
   Reprenons : Projection sur $\vec{u}_z$ (orienté vers le bas) :
   $$m \ddot{z} = m g - \rho_{\text{eau}} S (h_0 + z) g = - \rho_{\text{eau}} S g z$$
   L'équation différentielle correcte est donc :
   $$\ddot{z} + \frac{\rho_{\text{eau}} S g}{m} z = 0 \implies \ddot{z} + \omega_0^2 z = 0 \quad \text{avec} \quad \omega_0 = \sqrt{\frac{g}{h_0}}$$
   Le système est donc un oscillateur harmonique stable de pulsation propre $\omega_0$.

---

## 5. Analyse critique des limites du modèle

Le modèle hydrostatique utilisé ici repose sur des hypothèses fortes qu'il convient de nuancer :

1. **Incompressibilité du fluide :** L'hypothèse $\rho = \text{cte}$ est excellente pour l'eau aux profondeurs considérées ($h \ll 10 \text{ km}$). Cependant, pour des barrages de très grande hauteur (plusieurs centaines de mètres), la variation de masse volumique liée à la compressibilité (bien que faible) et surtout la déformation élastique de la roche et du béton remettent en cause le caractère rigide du barrage.
2. **Absence d'écoulement (Statique vs Dynamique) :** En réalité, l'eau s'écoule souvent (évacuateurs de crues, infiltrations dans les failles de la roche sous le barrage). Les pressions interstitielles au niveau de la base du barrage modifient significativement le moment stabilisateur (phénomène de sous-pression), ce que notre modèle de mur étanche sur sol parfait ne prend pas en compte.
3. **Modélisation 1D du flotteur :** Pour le flotteur, l'étude néglige les effets de bord (tension superficielle au niveau de la ligne de contact ménisque) ainsi que les forces visqueuses de frottement fluidique (amortissement). De plus, la stabilité en tangage (basculement angulaire) n'est pas assurée si le métacentre est mal positionné (condition de stabylité de Bouguer : $GM > 0$).