---
title: 'Exercice 1 : Loi de Faraday'
description: 'Problème d entraînement type concours.'
---

# Problème GUIDÉ : Étude d'un rail de Laplace vertical et loi de Faraday

*En tant qu'examinateur de concours CPGE MPSI, j'attends des candidats une rigueur absolue dans la mise en place des lois fondamentales de l'électromagnétisme, l'orientation systématique des contours et l'analyse critique des résultats physiques.*

---

## I. Présentation du système et modélisation

On considère un dispositif constitué de deux rails conducteurs verticaux, rectilignes, parallèles, distants de $L$, et plongés dans un champ magnétique uniforme et permanent $\vec{B} = B_0 \vec{u}_y$ (le repère cartésien $(O, \vec{u}_x, \vec{u}_y, \vec{u}_z)$ est défini tel que l'axe $\vec{u}_z$ est vertical ascendant). 

Une tige conductrice de masse $m$, de résistance électrique $R$ (les rails étant supposés de résistance négligeable), peut glisser sans frottement le long des rails en restant horizontale et en contact électrique parfait avec eux. Le circuit ainsi formé est fermé par une résistance $R_{\text{ch}}$ (résistance de charge) reliée entre le bas des deux rails. 

On note $z(t)$ la position verticale de la tige à l'instant $t$. Le champ de pesanteur est $\vec{g} = -g \vec{u}_z$.

---

## II. Questions et corrigé pas à pas

### Question 1 : Orientation et flux magnétique
**Q1.** *Définir un contour orienté $\mathcal{C}$ associé au circuit électrique fermé et calculer le flux $\Phi(t)$ du champ magnétique à travers ce contour en fonction de $L$, $B_0$ et $z(t)$.*

**Éléments de correction :**
*   On choisit le contour $\mathcal{C}$ parcouru dans le sens trigonométrique (ou horaire, précisons le choix). Soit $\vec{n}$ le vecteur normal associé à la surface $\mathcal{S}$ s'appuyant sur $\mathcal{C}$ via la règle du bonhomme d'Ampère ou du tire-bouchon. Choisissons $\vec{n} = \vec{u}_y$.
*   Le flux du champ magnétique $\vec{B} = B_0 \vec{u}_y$ à travers la surface $\mathcal{S}$ d'aire $S(t) = L \cdot z(t)$ s'exprime par :
    $$\Phi(t) = \iint_{\mathcal{S}} \vec{B} \cdot \vec{n} \, dS = B_0 \cdot S(t)$$
    $$\Phi(t) = B_0 L z(t)$$

---

### Question 2 : Force électromotrice induite
**Q2.** *En déduire l'expression de la force électromotrice (f.e.m.) induite $e(t)$ dans le circuit par application de la loi de Faraday.*

**Éléments de correction :**
*   La loi de Faraday énonce que la f.e.m. induite $e(t)$ dans un contour fixe ou mobile est égale à l'opposée de la dérivée temporelle du flux magnétique à travers ce contour :
    $$e(t) = -\frac{d\Phi}{dt}$$
*   En dérivant l'expression précédente :
    $$e(t) = - \frac{d}{dt}\big(B_0 L z(t)\big) = - B_0 L \frac{dz}{dt}$$
*   En introduisant la vitesse de la tige $v(t) = \frac{dz}{dt}$ :
    $$e(t) = - B_0 L v(t)$$

---

### Question 3 : Équation électrique et courant induit
**Q3.** *Établir l'expression de l'intensité du courant $i(t)$ circulant dans le circuit, en tenant compte de la résistance totale équivalente.*

**Éléments de correction :**
*   La résistance totale du circuit est la somme de la résistance de la tige $R$ et de la résistance de charge $R_{\text{ch}}$ : $R_{\text{tot}} = R + R_{\text{ch}}$.
*   D'après la loi d'Ohm généralisée (ou loi de Pouillet) dans le circuit :
    $$i(t) = \frac{e(t)}{R_{\text{tot}}} = - \frac{B_0 L v(t)}{R + R_{\text{ch}}}$$

---

### Question 4 : Bilan des forces et équation différentielle
**Q4.** *Appliquer le théorème du centre d'inertie (TCI) à la tige selon l'axe vertical $\vec{u}_z$. En déduire l'équation différentielle régissant la vitesse $v(t)$ de la tige.*

**Éléments de correction :**
*   La tige est soumise à :
    1.  Son poids : $\vec{P} = -mg \vec{u}_z$.
    2.  La force de Laplace $\vec{F}_{\text{L}} = i \int_{\text{tige}} d\vec{l} \wedge \vec{B}$. Avec $d\vec{l} = -L \vec{u}_x$ (orienté selon le courant) et $\vec{B} = B_0 \vec{u}_y$ :
        $$\vec{F}_{\text{L}} = i (-L \vec{u}_x) \wedge (B_0 \vec{u}_y) = -i B_0 L \vec{u}_z$$
*   En projetant le TCI sur l'axe vertical $\vec{u}_z$ :
    $$m \frac{dv}{dt} = -mg - i B_0 L$$
*   En remplaçant $i(t)$ par son expression :
    $$m \frac{dv}{dt} = -mg - \left(-\frac{B_0 L v}{R + R_{\text{ch}}}\right) B_0 L$$
    $$m \frac{dv}{dt} + \frac{B_0^2 L^2}{R + R_{\text{ch}}} v = -mg$$
*   On pose la constante de temps caractéristique du système $\tau = \frac{m(R + R_{\text{ch}})}{B_0^2 L^2}$. L'équation différentielle s'écrit sous forme canonique :
    $$\frac{dv}{dt} + \frac{v}{\tau} = -g$$

---

### Question 5 : Vitesse limite
**Q5.** *Déterminer l'expression de la vitesse limite $v_{\text{lim}}$ atteinte par la tige en régime permanent.*

**Éléments de correction :**
*   En régime permanent, la vitesse ne dépend plus du temps : $\frac{dv}{dt} \to 0$.
*   L'équation différentielle donne alors :
    $$\frac{v_{\text{lim}}}{\tau} = -g \implies v_{\text{lim}} = -g \tau = - \frac{mg(R + R_{\text{ch}})}{B_0^2 L^2}$$
*   Le signe négatif indique que la tige se déplace vers le bas (dans le sens $-\vec{u}_z$).

---

## III. Analyse critique et physique du résultat (Regard d'examinateur)

1. **Homogénéité :** 
   Vérifions l'homogénéité de la vitesse limite :
   $$[v_{\text{lim}}] = \frac{[m][g][R]}{[B]^2[L]^2}$$
   Sachant que $U = R I$, $F = I L B$ donc $[B] = \frac{[F]}{[I][L]} = \frac{[m][L]}{[I][L][T]^2} = \frac{[m]}{[I][T]^2}$ et $[R] = \frac{[U]}{[I]} = \frac{[P]}{[I]^2} = \frac{[m][L]^2}{[I]^2[T]^3}$.
   L'analyse dimensionnelle confirme bien que $[v_{\text{lim}}] = \frac{[L]}{[T]}$, soit des $\text{m}\cdot\text{s}^{-1}$.

2. **Interprétation énergétique (Loi de Lenz) :**
   *   La tige accélère sous l'effet de la pesanteur.
   *   Sa vitesse croissante entraîne une variation de flux, donc une f.e.m. induite et un courant $i(t)$.
   *   Par la **loi de Lenz**, le courant induit s'oppose à la cause qui lui donne naissance : la force de Laplace $\vec{F}_{\text{L}}$ est orientée vers le haut (freinage magnétique).
   *   Il y a conversion de puissance mécanique (reçue par la pesanteur) en puissance électrique, elle-même intégralement dissipée par effet Joule dans les résistances $R$ et $R_{\text{ch}}$ ($P_J = R_{\text{tot}} i^2$).
   *   En régime permanent, la puissance du poids compense exactement la puissance dissipée par effet Joule et la force de Laplace équilibre le poids.