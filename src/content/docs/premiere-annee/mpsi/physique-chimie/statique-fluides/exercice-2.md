---
title: 'Exercice 2 : Poussée d Archimède et applications'
description: 'Problème d entraînement type concours officiel.'
---

# Problème guidé : Statique des fluides et applications avancées

## Énoncé

Le problème s'intéresse à l'étude de l'équilibre et de la stabilité d'un corps solide immergé dans un fluide, ainsi qu'aux corrections à apporter aux lois usuelles de la statique des fluides lorsque l'on s'affranchit des approximations standard. 

On considère un cylindre homogène de rayon $R$, de hauteur $h$ et de masse volumique $\rho_s$. Ce cylindre est partiellement immergé verticalement dans un liquide de masse volumique $\rho_l$ (avec $\rho_s < \rho_l$). Le repère cartésien $(O, \vec{u}_x, \vec{u}_y, \vec{u}_z$ est choisi de telle sorte que l'axe $(O\vec{z})$ soit vertical ascendan, et le plan $(Oxy$ confondu avec la surface libre du liquide au repos.

---

## Questions

1. **Rappel et mise en place :** Énoncer le théorème fondamental de la statique des fluides (TFSF) dans un champ de pesanteur uniforme $\vec{g} = -g \vec{u}_z$. En déduire l'expression de la pression $P(z)$ dans le liquide en fonction de la pression atmosphérique $P_0$ et de la profondeur.
2. **Poussée d'Archimède :** En effectuant l'bilan des forces de pression exercées par le liquide sur l'ensemble de la surface du cylindre immergé sur une hauteur $z_imm$, démontrer l'expression de la poussée d'Archimède. Préciser sa direction, son sens et son point d'application (centre de carène).
3. **Équilibre statique :** Déterminer la hauteur d'immersion $z_0$ du cylindre à l'équilibre. À quelle condition physique cet équilibre est-il possible ?
4. **Stabilité de l'équilibre :** On déplace verticalement le cylindre d'une petite quantité $\delta z$. Établir l'équation différentielle régissant le mouvement du cylindre en négligeant les forces de frottement visqueux. Montrer qu'il s'agit d'un mouvement harmonique et déterminer sa période propre $T_0$.
5. **Analyse critique des limites du modèle :** Discuter les hypothèses simplificatrices formulées lors de l'établissement de la poussée d'Archimède et de l'équation du mouvement. Quelles seraient les conséquences d'un fluide compressible ou d'une variation spatiale du champ de pesanteur ?

---

## Pistes

* **Q1 :** Utiliser $\vec{\nabla} P = \rho \vec{g}$ en projection sur l'axe vertical.
* **Q2 :** Appliquer le théorème d'Ostrogradski (flux de la pression) ou sommer les forces sur les faces latérales et sur la base inférieure.
* **Q3 :** Écrire le principe fondamental de la dynamique (ou statique) appliqué au solide à l'équilibre.
* **Q4 :** Exprimer la résultante des forces (poids + poussée d'Archimède) lorsque l'immersion est $z_0 + \delta z$ et effectuer un développement limité à l'ordre 1 en $\delta z$.
* **Q5 :** S'interroger sur l'homogénéité de $\rho_l$, la constance de $\vec{g}$ (altitude) et l'effet des menues variations de pression sur la masse volumique du fluide.

---

## Corrigé

### 1. Champ de pression dans le liquide
Le fluide étant au repos dans le référentiel terrestre galiléen, le TFSF s'écrit :
$$\vec{\nabla} P = \rho_l \vec{g}$$
En projetant sur l'axe $\vec{u}_z$ (avec $\vec{g} = -g \vec{u}_z$) :
$$\frac{\partial P}{\partial z} = -\rho_l g$$
En intégrant entre la surface libre ($z = 0$, où $P(0) = P_0$) et une cote négative $z$ :
$$P(z) = P_0 - \rho_l g z$$
*(Note : pour $z < 0$, le terme $-\rho_l g z$ est bien positif, la pression augmente avec la profondeur).*

### 2. Expression de la poussée d'Archimède
La force de pression totale exercée par le fluide sur le volume immergé $\mathcal{V}_{\text{imm}}$ du cylindre est :
$$\vec{F}_{\text{arch}} = \iint_{\text{surface}} -P \vec{n} \, dS$$
Par application du théorème de la divergence (Ostrogradski) :
$$\vec{F}_{\text{arch}} = -\iiint_{\mathcal{V}_{\text{imm}}} \vec{\nabla} P \, d\mathcal{V} = -\iiint_{\mathcal{V}_{\text{imm}}} (-\rho_l g \vec{u}_z) \, d\mathcal{V} = \rho_l g \mathcal{V}_{\text{imm}} \vec{u}_z$$
La poussée d'Archimède est donc verticale, dirigée vers le haut, et son intensité est égale au poids du volume de fluide déplacé.

### 3. Hauteur d'immersion à l'équilibre
Le cylindre a une section $S = \pi R^2$ et un volume total $\mathcal{V} = S h$. Sa masse est $m = \rho_s S h$. 
À l'équilibre, le PFD en statique donne :
$$\vec{P} + \vec{F}_{\text{arch}} = \vec{0} \implies -mg \vec{u}_z + \rho_l g S z_0 \vec{u}_z = \vec{0}$$
Soit :
$$\rho_s S h g = \rho_l S z_0 g \implies z_0 = \frac{\rho_s}{\rho_l} h$$
*Condition d'existence :* Puisque le cylindre de hauteur $h$ est *partiellement* immergé, il faut nécessairement que $z_0 < h$, ce qui implique $\rho_s < \rho_l$, ce qui est bien l'hypothèse de l'énoncé.

### 4. Étude de la stabilité dynamique
Soit un déplacement vertical $\delta z$ vers le bas (immersion $z = z_0 + \delta z$). Le volume immergé devient $\mathcal{V}_{\text{imm}} = S(z_0 + \delta z)$.
Le PFD appliqué au solide selon $\vec{u}_z$ s'écrit :
$$m \ddot{\delta z} = -mg + \rho_l g S (z_0 + \delta z)$$
Comme $\rho_s S h = \rho_l S z_0$ (condition d'équilibre), les termes constants s'annulent :
$$m \ddot{\delta z} = \rho_l g S \delta z \implies \ddot{\delta z} + \frac{\rho_l g S}{m} \delta z = 0$$
En remplaçant $m = \rho_s S h$ :
$$\ddot{\delta z} + \frac{\rho_l g}{\rho_s h} \delta z = 0$$
Il s'agit de l'équation d'un oscillateur harmonique de pulsation propre $\omega_0 = \sqrt{\frac{\rho_l g}{\rho_s h}}$. La période des oscillations est :
$$T_0 = \frac{2\pi}{\omega_0} = 2\pi \sqrt{\frac{\rho_s h}{\rho_l g}}$$

### 5. Analyse critique des limites du modèle
Le modèle développé repose sur plusieurs hypothèses fortes qu'il convient de critiquer :
1. **Incompressibilité du fluide ($\rho_l = \text{constante}$) :** Dans la réalité, les liquides ont un coefficient de compressibilité isotherme $\chi_T$ faible mais non nul. Pour de grandes hauteurs d'immersion (océanographie), $\rho_l$ dépend de la pression locale $P(z)$, ce qui rend l'intégrale de la poussée d'Archimède non linéaire.
2. **Champ de pesanteur uniforme ($\vec{g} = \text{constante}$) :** On suppose $\vec{g}$ indépendant de l'altitude $z$. Pour des structures de grande dimension verticale (type plate-forme pétrolière ou gratte-ciel), la variation de $g$ avec l'altitude ($g(z) \approx g_0 (1 - 2z/R_T)$) induit une correction minime mais réelle.
3. **Tension superficielle :** Au niveau de la ligne triphasique (solide-liquide-gaz), la tension superficielle engendre des forces capillaires (ménisque) qui s'ajoutent ou se retranchent à la poussée d'Archimède pure. Ces effets sont négligeables si $R$ est grand devant la longueur capillaire $l_c = \sqrt{\frac{\gamma}{\rho_l g}}$, mais deviennent cruciaux pour des micro-systèmes (MEMS fluidiques).
4. **Viscosité du fluide :** L'oubli des frottements fluides conduit à des oscillations undampées (infinies). Dans un cas réel, un terme de force de frottement (type Stokes ou régime turbulent) devrait être ajouté, menant à des oscillations amorties.