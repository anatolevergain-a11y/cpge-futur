---
title: 'Exercice 1 : Principe de Huygens-Fresnel et diffraction de Fraunhofer'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le présent problème s'intéresse à l'analyse ondulatoire de la lumière à travers le modèle scalaire de la diffraction. On se place dans le cadre de l'approximation scalariste où l'on néglique la nature vectorielle du champ électromagnétique (on étudie une composante complexe du champ électrique notée $\underline{s}(M, t) = \underline{A}(M)e^{j(\omega t - \phi(M))}$).

L'objectif est d'établir le formalisme de la diffraction de Fraunhofer (approximation des grands distances) à partir du principe de Huygens-Fresnel, puis de l'appliquer à l'étude d'une ouverture rectangulaire et d'une fente fine, avant d'aborder une analyse critique des limites du modèle.

On considère une onde lumineuse monochromatique de pulsation $\omega$ et de longueur d'onde $\lambda$ dans le vide ($c = \lambda \nu$), éclairant une ouverture plane $\mathcal{S}$ percée dans un écran opaque plan $(\mathcal{P}_0)$ situé dans le plan $z = 0$. On observe la figure de diffraction sur un écran parallèle $(\mathcal{P})$ situé à une distance $D$ (plan $z = D$).

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Rappels et formalisme du principe de Huygens-Fresnel**
   Énoncer qualitativement le principe de Huygens-Fresnel. En déduire l'expression élémentaire de l'amplitude complexe $\mathrm{d}\underline{A}(M)$ en un point $M$ du plan d'observation, créé par l'élément de surface $\mathrm{d}S$ situé au point $P(x, y, 0)$ de l'ouverture, sachant que l'onde incidente est plane, normale à l'ouverture, et d'amplitude complexe uniforme $\underline{A}_0$.

2. **Approximation de Fraunhofer**
   En écrivant les coordonnées du point d'observation $M(X, Y, D)$ et du point source $P(x, y, 0)$, effectuer un développement limité à l'ordre pertinent de la distance $PM = r = ||\vec{r}||$ (où $\vec{r} = \vec{PM}$) sous les hypothèses de Fraunhofer ($D \gg \max(x^2+y^2)/\lambda$ et $D \gg \max(X^2+Y^2)/\lambda$).
   En déduire l'expression de l'amplitude complexe diffractée $\underline{A}(M)$ sous la forme d'une intégrale double portant sur la surface $\mathcal{S}$, en faisant apparaître les variables fréquentielles spatiales.

3. **Application à une fente rectangulaire infinie**
   On considère une fente fine de largeur $a$ suivant l'axe $Ox$ et de longueur $L$ très grande ($L \gg a$) suivant l'axe $Oy$. L'ouverture est définie par $-a/2 \le x \le a/2$ et $-L/2 \le y \le L/2$.
   Calculer l'amplitude complexe $\underline{A}(X, Y, D)$ au point $M$ de l'écran. On posera $u = \frac{\pi a X}{\lambda D}$.
   Exprimer l'intensité lumineuse $I(X) = I_0 \left(\frac{\sin u}{u}\right)^2$, où $I_0$ est l'intensité au centre de la figure ($X = 0$).

4. **Analyse critique du modèle scalaire et des approximations**
   * **a)** Discuter la validité de l'approximation de Fraunhofer si l'écran d'observation est ramené à une distance $D = 10\text{ cm}$, pour une fente de largeur $a = 0{,}1\text{ mm}$ et une longueur d'onde $\lambda = 632{,}8\text{ nm}$ (laser hélium-néon). Conclure sur le régime de diffraction applicable (Fresnel vs Fraunhofer).
   * **b)** Le modèle scalaire néglige la nature vectorielle de la lumière. À quelle condition géométrique et dimensionnelle sur l'ouverture cette approximation s'avère-t-elle mise en défaut ?

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Penser à exprimer la phase de l'onde sphérique élémentaire issue de $\mathrm{d}S$ en fonction du vecteur d'onde $k = \frac{2\pi}{\lambda}$ et de la distance $PM$. Le facteur d'inclinaison (ou facteur d'obstruction) de obliquité sera considéré comme constant et inclus dans la constante homogène.
* **Question 2 :** Utiliser l'expression cartésienne $PM = \sqrt{(X-x)^2 + (Y-y)^2 + D^2}$ et factoriser par $D$. Un développement limité de type $\sqrt{1+\epsilon} \approx 1 + \epsilon/2 - \epsilon^2/8$ est requis pour la phase, tandis qu'au dénominateur, l'approximation $PM \approx D$ suffit généralement (approximation radiométrique).
* **Question 3 :** L'intégrale double se sépare en un produit de deux intégrales simples (en $x$ et en $y$). L'intégration sur $y$ fait intervenir un sinus cardinal associé à la dimension $L$, tandis que l'intégration sur $x$ donne le terme en $\sin(u)/u$.
* **Question 4 :** Calculer le paramètre de Fresnel $F = \frac{a^2}{\lambda D}$ pour comparer les ordres de grandeur.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Principe de Huygens-Fresnel et amplitude élémentaire

Le principe de Huygens-Fresnel énonce que tout point d'un front d'onde peut être considéré comme une source secondaire d'ondes sphériques secondaires. L'amplitude du champ lumineux en un point $M$ est la superposition (interférence) de toutes ces ondes secondaires cohérentes.

Soit $\underline{A}_0$ l'amplitude complexe de l'onde incidente (supposée uniforme sur l'ouverture). L'élément de surface $\mathrm{d}S$ situé en $P(x, y, 0)$ émet une onde sphérique dont l'amplitude complexe en $M$ s'écrit, à une constante multiplicative près (notée $\frac{-j}{\lambda}$ par convention rigoureuse issue de la formulation de Kirchhoff-Sommerfeld) :

$$\mathrm{d}\underline{A}(M) = \underline{A}_0 \frac{\mathrm{d}S}{r} \exp(-j k r)$$

avec $k = \frac{2\pi}{\lambda}$ le nombre d'onde et $r = ||\vec{PM}||$.

#### 2. Approximation de Fraunhofer

Les coordonnées des points sont $P(x, y, 0)$ et $M(X, Y, D)$. La distance $r$ s'exprime par :
$$r = \sqrt{(X-x)^2 + (Y-y)^2 + D^2} = D \sqrt{1 + \frac{X^2+Y^2}{D^2} + \frac{x^2+y^2}{D^2} - 2\frac{Xx + Yy}{D^2}}$$

Sous l'approximation de Fraunhofer ($D \gg \max(x^2+y^2)/\lambda$ et $D \gg \max(X^2+Y^2)/\lambda$), on effectue un développement limité de $r$ :
* **Au dénominateur** (terme d'amplitude) : on approxime $r \approx D$.
* **Dans l'exponentielle** (terme de phase, beaucoup plus sensible car $\lambda$ est très petit) :
  $$r \approx D \left(1 + \frac{X^2+Y^2}{2D^2} + \frac{x^2+y^2}{2D^2} - \frac{Xx+Yy}{D^2}\right)$$

En reportant dans l'intégrale sur toute la surface $\mathcal{S}$ de l'ouverture :
$$\underline{A}(M) = \frac{\underline{A}_0}{D} \exp\left(-j k D\right) \exp\left(-j k \frac{X^2+Y^2}{2D}\right) \iint_{\mathcal{S}} \exp\left(-j k \frac{x^2+y^2}{2D}\right) \exp\left(j k \frac{Xx + Yy}{D}\right) \mathrm{d}x\,\mathrm{d}y$$

Sous l'hypothèse supplémentaire de Fraunhofer où le terme quadratique $\exp\left(-j k \frac{x^2+y^2}{2D}\g