---
title: "Induction Électromagnétique & Bilans de Puissance"
description: "Méthodologie détaillée, rédactions modèles et conseils des jurys de concours Mines-Ponts / CCINP / Centrale."
sidebar:
  badge:
    text: "Méthode Concours"
    variant: "caution"
---

## 🎯 Analyse des attentes et critères d'évaluation des jurys

Les chapitres d'induction électromagnétique et de bilans énergétiques constituent l'un des piliers incontournables des épreuves écrites de physique pour la filière PC. Les concours Mines-Ponts, Centrale-Supélec et CCINP s'appuient systématiquement sur ces notions pour évaluer la capacité du candidat à lier la mécanique, l'électromagnétisme et la thermodynamique.

Les rapports de jury rappellent régulièrement les exigences fondamentales :
1. **Rigueur dans le choix et l'orientation des contours** : L'application du théorème d'Ampère ou de la loi de Faraday requiert une définition claire et explicite du contour d'intégration $\Gamma$, de sa surface associée $\Sigma$ et du vecteur normal $\vec{n}$ associé par la règle du tire-bouchon.
2. **Distinction des origines de la f.e.m.** : Le jury sanctionne l'utilisation aveugle de formules sans distinction entre le flux coupé (mouvement) et le flux transformé (variation temporelle du champ).
3. **Cohérence des bilans énergétiques** : Un signe erroné dans le calcul de la puissance mécanique ou de la puissance thermique dissipée par effet Joule est immédiatement pénalisé. Le candidat doit systématiquement relier la variation d'énergie mécanique au travail des forces de Laplace.

---

## 📐 Rappels théoriques & Démonstrations incontournables

Le champ électromagnétique obéit aux équations de Maxwell. L'équation de Maxwell-Faraday s'écrit sous forme locale :
$$\vec{\text{rot}} \vec{E} = - \frac{\partial \vec{B}}{\partial t}$$

En intégrant cette expression sur une surface ouverte $\Sigma$ s'appuyant sur un contour fermé $\Gamma$ orienté, et en appliquant le théorème de Stokes, on obtient la forme intégrale, fondement de la loi de Faraday :
$$e = \oint_{\Gamma} \vec{E} \cdot d\vec{\ell} = - \frac{d}{dt} \iint_{\Sigma} \vec{B} \cdot \vec{n} \, dS = - \frac{d\Phi}{dt}$$

Où $\Phi$ représente le flux magnétique à travers la surface $\Sigma$.

---

### 📌 Question / Problématique classique 1 : Calcul de la force électromotrice induite par la loi de Faraday

#### 💡 Méthode de rédaction canonique
1. **Étape 1 : Définition du système et du référentiel**
   Préciser le référentiel d'étude (supposé galiléen). Définir le circuit électrique fermé $\Gamma$ (ou fictif) et associer une orientation.
2. **Étape 2 : Choix de la surface et calcul du flux**
   Choisir une surface $\Sigma$ s'appuyant sur $\Gamma$, définir le vecteur normal $\vec{n}$ orienté conformément au contour. Exprimer le champ magnétique $\vec{B}$ et le vecteur surface $d\vec{S} = \vec{n} \, dS$. Calculer le flux $\Phi(t) = \iint_{\Sigma} \vec{B} \cdot \vec{n} \, dS$.
3. **Étape 3 : Application de la loi de Faraday**
   Calculer la dérivée temporelle du flux pour obtenir la force électromotrice induite $e(t) = -\frac{d\Phi}{dt}$.

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** Soit un rail conducteur horizontal, infini, placé dans un champ magnétique uniforme permanent $\vec{B} = B_0 \vec{u}_z$. Une barre conductrice de longueur $L$, de masse $m$, se déplace sur ces rails à la vitesse $\vec{v}(t) = v(t) \vec{u}_x$. Le circuit est fermé par une résistance $R$. Déterminer l'expression de la f.e.m. induite dans le circuit.

**Correction rédigée :**
*Étape 1 :* On se place dans le référentiel du laboratoire, supposé galiléen. Le circuit est formé par la barre mobile et les rails fixes. On choisit un contour fermé $\Gamma$ orienté dans le sens trigonométrique, englobant une surface $\Sigma$ dans le plan des rails.
*Étape 2 :* Le champ magnétique est $\vec{B} = B_0 \vec{u}_z$. Le vecteur normal à la surface $\Sigma$ est choisi selon $\vec{n} = \vec{u}_z$. À l'instant $t$, la position de la barre est $x(t)$. L'aire du circuit est $S(t) = L x(t)$. Le flux magnétique à travers le circuit s'écrit :
$$\Phi(t) = \iint_{\Sigma} B_0 \vec{u}_z \cdot \vec{u}_z \, dS = B_0 S(t) = B_0 L x(t)$$
*Étape 3 :* En appliquant la loi de Faraday, la f.e.m. induite vaut :
$$e(t) = - \frac{d\Phi}{dt} = - \frac{d}{dt} \big( B_0 L x(t) \big) = - B_0 L \frac{dx}{dt} = - B_0 L v(t)$$
*Conclusion :* La f.e.m. induite est $e(t) = - B_0 L v(t) \text{ V}$.

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- Oublier le signe "moins" dans l'expression de la loi de Faraday.
- Confondre le flux coupé (dû au mouvement de la barre) et le flux transformé (dû à la variation temporelle de $\vec{B}$). Dans le cas présent, le champ $\vec{B}$ est stationnaire, seule la surface varie.

---

### 📌 Question / Problématique classique 2 : Bilan énergétique complet (puissance mécanique vs dissipation par effet Joule)

#### 💡 Méthode de rédaction canonique
1. **Étape 1 : Bilan des forces et PFD**
   Identifier toutes les forces s'exerçant sur la partie mobile (poids, réaction normale, forces de Laplace $\vec{F}_{\text{Laplace}} = \int I \, d\vec{\ell} \wedge \vec{B}$, forces de frottement éventuelles). Appliquer le principe fondamental de la dynamique.
2. **Étape 2 : Puissance mécanique**
   Calculer la puissance développée par les forces extérieures et intérieures, en particulier la puissance de la force de Laplace : $P_{\text{Laplace}} = \vec{F}_{\text{Laplace}} \cdot \vec{v}$.
3. **Étape 3 : Puissance électrique et thermique**
   Déterminer le courant induit $I(t)$ à l'aide de la loi d'Ohm généralisée ($I = \frac{e}{R}$). Calculer la puissance Joule dissipée dans la résistance : $P_J = R I^2$. Conclure sur la conservation de l'énergie.

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** Dans les mêmes conditions que l'exercice précédent (barre de masse $m$ sur rails, résistance $R$, champ $\vec{B} = B_0 \vec{u}_z$), établir l'équation différentielle régissant la vitesse $v(t)$ de la barre et vérifier le bilan de puissance.

**Correction rédigée :**
*Étape 1 :* La force de Laplace s'exerçant sur la barre de longueur $L$ parcourue par un courant $I$ est :
$$\vec{F}_{\text{Laplace}} = I \int_{0}^{L} d\vec{y} \, \vec{u}_y \wedge B_0 \vec{u}_z = - I L B_0 \vec{u}_x$$
En projetant le PFD sur l'axe des $x$ (en négligeant les frottements mécaniques) :
$$m \frac{dv}{dt} = - I L B_0$$
*Étape 2 :* Le circuit électrique est le siège d'une f.e.m. $e = - B_0 L v$. La loi d'Ohm aux bornes de la résistance $R$ donne $RI = e = - B_0 L v$, soit $I = - \frac{B_0 L v}{R}$.
En reportant l'expression de $I$ dans l'équation du mouvement :
$$m \frac{dv}{dt} = - \left( - \frac{B_0 L v}{R} \right) L B_0 \implies m \frac{dv}{dt} + \frac{B_0^2 L^2}{R} v = 0$$
*Étape 3 :* Multiplions l'équation du mouvement par la vitesse $v$ :
$$m v \frac{dv}{dt} = \frac{d}{dt} \left( \frac{1}{2} m v^2 \right) = - \frac{B_0^2 L^2}{R} v^2$$
Or, la puissance dissipée par effet Joule est $P_J = R I^2 = R \left( \frac{B_0 L v}{R} \right)^2 = \frac{B_0^2 L^2}{R} v^2$.
On identifie ainsi l'égalité fondamentale : $\frac{dE_c}{dt} = P_{\text{Laplace}} = - P_J$. Toute la puissance mécanique fournie pour maintenir ou modifier le mouvement est intégralement convertie en puissance thermique par effet Joule.

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- Se tromper dans l'orientation du courant induit, ce qui conduit à inverser le signe de la force de Laplace (qui doit impérativement être une force de freinage selon la loi de Lenz).
- Oublier de justifier l'origine énergétique de la dissipation thermique.

---

### 📌 Question / Problématique classique 3 : Étude du freinage par induction et courants de Foucault

#### 📌 Question / Problématique classique 3 : Étude du freinage par induction et courants de Foucault

#### 💡 Méthode de rédaction canonique
1. **Étape 1 : Caractérisation du milieu conducteur**
   Modouler le mouvement d'une plaque ou d'un système étendu dans un champ magnétique non uniforme ou variable. Définir le vecteur densité de courant volumique $\vec{j}$ en utilisant la loi d'Ohm locale : $\vec{j} = \gamma (\vec{E} + \vec{v} \wedge \vec{B})$.
2. **Étape 2 : Calcul de la résultante des forces volumiques de Laplace**
   Exprimer la force élémentaire agissant sur un volume élémentaire $d\tau$ : $d\vec{F} = \vec{j} \wedge \vec{B} \, d\tau$. Intégrer sur l'ensemble du volume conducteur pour obtenir la force globale de freinage.
3. **Étape 3 : Résolution et temps caractéristique**
   Établir l'équation de la dynamique du système et identifier le temps caractéristique de relaxation $\tau$ du système mécanique.

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** Une plaque mince conductrice de conductivité $\gamma$, d'épaisseur $h$, de largeur $a$ et de longueur infinie selon $x$, pénètre à la vitesse $\vec{v} = v(x) \vec{u}_x$ dans une zone où règne un champ magnétique transverse $\vec{B} = B_0 \vec{u}_z$ confiné entre $x=0$ et $x=d$. Déterminer la force de freinage subie par la plaque.

**Correction rédigée :**
*Étape 1 :* Dans la zone du champ magnétique, les charges mobiles de la plaque subissent une vitesse $\vec{v}$. Le champ électrique induit local est lié au champ effectif. D'après la loi d'Ohm locale dans le référentiel du laboratoire, la densité de courant de Foucault est :
$$\vec{j} = \gamma (\vec{E} + \vec{v} \wedge \vec{B})$$
En régime quasi-stationnaire, le champ électrostatique $\vec{E}$ dérive d'un potentiel tendant à s'annuler globalement par accumulation de charges sur les bords, d'où $\vec{j} \approx \gamma (\vec{v} \wedge \vec{B})$.
*Étape 2 :* Le vecteur densité de courant s'écrit :
$$\vec{j} = \gamma (v \vec{u}_x \wedge B_0 \vec{u}_z) = - \gamma v B_0 \vec{u}_y$$
La force volumique de Laplace s'exerçant sur la plaque est :
$$\vec{f}_v = \vec{j} \wedge \vec{B} = (- \gamma v B_0 \vec{u}_y) \wedge (B_0 \vec{u}_z) = - \gamma v B_0^2 \vec{u}_x$$
*Étape 3 :* Pour obtenir la force globale, on intègre cette force volumique sur tout le volume de la plaque situé dans la zone magnétique ($V = a h d$) :
$$\vec{F}_{\text{totale}} = \iint_V \vec{f}_v \, d\tau = - \gamma a h d B_0^2 v \vec{u}_x$$
Cette force s'oppose directement au mouvement, traduisant le phénomène de freinage par courants de Foucault.

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- Confondre la loi d'Ohm globale (valable pour les circuits filaires) et la loi d'Ohm locale $\vec{j} = \gamma (\vec{E} + \vec{v} \wedge \vec{B})$ indispensable pour les milieux continus (plaques, cylindres massifs).
- Oublier de préciser les conditions aux limites du champ magnétique (notamment les effets de bord aux frontières $x=0$ et $x=d$).