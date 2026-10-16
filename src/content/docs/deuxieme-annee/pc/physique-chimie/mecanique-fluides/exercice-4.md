---
title: 'Exercice 2 : Théorème de Bernoulli et écoulements incompressibles'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude hydrodynamique d'un système d'arrosage agricole et limites du modèle de Bernoulli

---

## Énoncé

On s'intéresse à l'alimentation en eau d'un canon d'arrosage agricole à partir d'un réservoir de grande dimension. Le système est modélisé par un réservoir cylindrique de section $S_1$ très grande devant la section $S_2$ de la conduite d'évacuation. La conduite descend d'une hauteur $H$ entre la surface libre du réservoir (point 1) et l'orifice de sortie du canon (point 2). 

L'eau est assimilée à un fluide parfait, incompressible, de masse volumique $\rho = 1,00 \times 10^3\text{ kg}\cdot\text{m}^{-3}$. La pression atmosphérique extérieure est notée $P_0 = 1,013 \times 10^5\text{ Pa}$. L'accélération de la pesanteur est $g = 9,81\text{ m}\cdot\text{s}^{-2}$.

Dans une première partie, on néglige les pertes visqueuses. Dans une seconde partie, on introduit un modèle simple de pertes de charge pour confronter la théorie aux réalités industrielles.

---

## Questions

### Partie I : Étude idéale (Théorème de Bernoulli)
1. **1.** Énoncer les hypothèses physiques nécessaires pour appliquer le théorème de Bernoulli le long d'une ligne de courant entre le point 1 (surface du réservoir) et le point 2 (sortie du canon).
2. **2.** En appliquant l'équation de conservation de la masse (équation de continuité), relier les vitesses d'écoulement $v_1$ (au point 1) et $v_2$ (au point 2) aux sections $S_1$ et $S_2$. En déduire l'approximation usuelle sur $v_1$ si $S_1 \gg S_2$.
3. **3.** Écrire le théorème de Bernoulli entre les points 1 et 2. En déduire l'expression littérale de la vitesse d'éjection $v_2$ en fonction de $g$, de la dénivellation $H = z_1 - z_2$, et des pressions.
4. **4.** Application numérique : Calculer $v_2$ pour $H = 10,0\text{ m}$. Que devient cette vitesse si la pression au point 2 est égale à la pression atmosphérique $P_0$ ?

### Partie II : Étude énergétique et analyse critique
5. **5.** Pour alimenter un système d'irrigation efficace, l'orifice de sortie 2 est muni d'une buse de réduction. Si $S_1 = 2,0\text{ m}^2$ et $S_2 = 20\text{ cm}^2$, calculer le débit volumique $D_v$ du canon.
6. **6.** En réalité, l'écoulement réel présente des frottements visqueux. On modélise ces pertes par une chute de pression équivalente $\Delta P_{\text{charge}} = \frac{1}{2} K \rho v_2^2$, avec un coefficient de perte de charge singulière et linéaire combiné $K = 2,5$. Modifier le bilan de Bernoulli pour exprimer la vitesse réelle $v_{2,\text{réel}}$ en fonction de $v_2$, $K$ et $H$.
7. **7.** **Analyse critique :** Calculer la valeur numérique de $v_{2,\text{réel}}$ et comparer avec la question 4. Discuter les limites du modèle du fluide parfait pour ce dispositif (notion de cavitation et domaine de validité).

---

## Pistes et indications

* **Q1 & Q2 :** Pensez à l'incompressibilité ($\text{div}\vec{v} = 0$ ou $S_1 v_1 = S_2 v_2$) et aux conditions aux limites à la surface d'un grand réservoir.
* **Q3 :** Le théorème de Bernoulli s'écrit le long d'une même ligne de courant en régime permanent. Attention aux altitudes $z_1$ et $z_2$.
* **Q6 :** Le terme de perte de charge s'ajoute du côté des pertes d'énergie mécanique convertie en énergie thermique (dissipation visqueuse).
* **Q7 :** Pour la cavitation, pensez à examiner la pression minimale atteinte dans le circuit (souvent au niveau du col de la buse si l'accélération y est maximale).

---

## Corrigé pas à pas

### Partie I : Étude idéale

#### 1. Hypothèses pour le théorème de Bernoulli
Pour appliquer le théorème de Bernoulli sous sa forme usuelle le long d'une ligne de courant entre (1) et (2), le fluide doit satisfaire les conditions suivantes :
* **Fluide parfait :** les effets visqueux (frottements internes) sont négligeables.
* **Incompressible :** la masse volumique $\rho$ est constante ($\text{div}\vec{v} = 0$).
* **Régime permanent :** les caractéristiques de l'écoulement ne dépendent pas du temps en un point donné ($\partial/\partial t = 0$).
* L'écoulement doit être isentropique (ou le long d'une même ligne de courant dans un champ de forces conservatives).

#### 2. Conservation de la masse et approximation géométrique
L'équation de continuité pour un fluide incompressible s'écrit :
$$S_1 v_1 = S_2 v_2 \implies v_1 = \frac{S_2}{S_1} v_2$$
Puisque le réservoir est de grande dimension devant la conduite, $S_1 \gg S_2$, on a $\frac{S_2}{S_1} \ll 1$, ce qui conduit à l'approximation classique :
$$v_1 \approx 0$$
La surface du réservoir descend de manière quasi-statique.

#### 3. Application du théorème de Bernoulli
Le théorème de Bernoulli s'écrit le long d'une ligne de courant reliant 1 à 2 :
$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g z_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g z_2$$
En posant $z_1 - z_2 = H$, $P_1 = P_0$ (surface à l'air libre), $P_2 = P_0$ (sortie à l'air libre) et $v_1 \approx 0$, l'équation devient :
$$P_0 + 0 + \rho g H = P_0 + \frac{1}{2}\rho v_2^2 + 0$$
En simplifiant par $P_0$ et $\rho$, on obtient la **loi de Torricelli** :
$$v_2 = \sqrt{2gH}$$

#### 4. Application numérique
Pour $H = 10,0\text{ m}$ et $g = 9,81\text{ m}\cdot\text{s}^{-2}$ :
$$v_2 = \sqrt{2 \times 9,81 \times 10,0} = \sqrt{196,2} \approx 14,0\text{ m}\cdot\text{s}^{-1}$$
La vitesse d'éjection est de $14,0\text{ m}\cdot\text{s}^{-1}$.

---

### Partie II : Étude énergétique et analyse critique

#### 5. Calcul du débit volumique
Le débit volumique $D_v$ se calcule via la section de sortie et la vitesse idéale (en première approximation pour le débit nominal) :
$$D_v = S_2 v_2$$
* $S_2 = 20\text{ cm}^2 = 20 \times 10^{-4}\text{ m}^2 = 2,0 \times 10^{-3}\text{ m}^2$
* $v_2 = 14,0\text{ m}\cdot\text{s}^{-1}$
$$D_v = (2,0 \times 10^{-3}\text{ m}^2) \times (14,0\text{ m}\cdot\text{s}^{-1}) = 2,8 \times 10^{-2}\text{ m}^3\cdot\text{s}^{-1} = 28\text{ L}\cdot\text{s}^{-1}$$

#### 6. Introduction des pertes de charge
En présence de frottements, l'équation de Bernoulli généralisée inclut le terme de perte de charge $\Delta P_{\text{charge}}$ :
$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g z_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g z_2 + \Delta P_{\text{charge}}$$
Avec $\Delta P_{\text{charge}} = \frac{1}{2} K \rho v_{2,\text{réel}}^2$ et $v_1 \approx 0$, $P_1 = P_2 = P_0$ :
$$\rho g H = \frac{1}{2}\rho v_{2,\text{réel}}^2 + \frac{1}{2} K \rho v_{2,\text{réel}}^2 = \frac{1}{2}\rho v_{2,\text{réel}}^2 (1 + K)$$
On en déduit la vitesse réelle :
$$v_{2,\text{réel}} = \sqrt{\frac{2gH}{1 + K}}$$

#### 7. Analyse critique et limites du modèle
* **Calcul numérique de la vitesse réelle :**
  $$v_{2,\text{réel}} = \sqrt{\frac{196,2}{1 + 2,5}} = \sqrt{\frac{196,2}{3,5}} = \sqrt{56,06} \approx 7,49\text{ m}\cdot\text{s}^{-1}$$
  La prise en compte des pertes de charge réduit significativement la vitesse d'éjection (presque de moitié par rapport au modèle idéal).

* **Limites du modèle et risques physiques :**
  1. *Viscosité et régime d'écoulement :* Le coefficient $K$ suppose un régime turbulent adimensionné constant, mais en réalité $K$ dépend du nombre de Reynolds $\text{Re} = \frac{vD}{\nu}$.
  2. *Risque de cavitation :* Si la vitesse locale augmente fortement dans la buse de réduction, la pression locale $P$ peut chuter en dessous de la pression de vapeur saturante de l'eau ($P_{\text{sat}} \approx 2,3\text{ kPa}$ à $20^\circ\text{C}$). Cela provoque la formation et l'implosion brutale de bulles de vapeur, endommageant par érosion les parois de la conduite (phénomène de cavitation).
  3. *Domaine de validité :* Le modèle d'incompressibilité est rigoureusement valide car les vitesses restent très inférieures à la vitesse du son dans l'eau ($c \approx 1500\text{ m}\cdot\text{s}^{-1}$, nombre de Mach $\ll 1$).