---
title: 'Exercice 2 : Équation de la chaleur et résistance thermique en régime stationnaire'
description: 'Problème d entraînement type concours pour CPGE MP.'
---

### 🌐 Énoncé du problème / Cadre d'étude

En tant qu'examinateur, cet exercice vise à tester votre maîtrise de la mise en équation de la thermique (bilan d'énergie, équation de la chaleur) ainsi que l'analogie entre conduction thermique et électricité (notion de résistance thermique), outils indispensables lors des épreuves écrites et orales des concours Mines-Ponts, Centrale-Supélec et CCINP.

On s'intéresse à la modélisation thermique d'un mur composite plan et infini (assimilé à un milieu unidimensionnel selon l'axe $(Ox)$), destiné à l'isolation thermique d'un bâtiment. 

Le mur est constitué de trois couches planes d'épaisseur respective $e_1$, $e_2$ et $e_3$, collées parfaitement entre elles :
- **Couche 1** ($0 \le x \le e_1$) : béton, de conductivité thermique $\lambda_1$.
- **Couche 2** ($e_1 \le x \le e_1 + e_2$) : isolant (laine de verre), de conductivité thermique $\lambda_2$.
- **Couche 3** ($e_1 + e_2 \le x \le e_1 + e_2 + e_3$) : plâtre, de conductivité thermique $\lambda_3$.

Le milieu extérieur ($x < 0$) est à la température $T_{ext}$ et l'air intérieur ($x > e_1 + e_2 + e_3$) est à la température $T_{int}$. Les échanges thermiques par convection aux interfaces extrêmes (avec l'air extérieur et l'air intérieur) sont modélisés par des coefficients de convection thermique $h_{ext}$ et $h_{int}$.

On se place en **régime permanent (stationnaire)**. Les grandeurs physiques ne dépendent que de la coordonnée d'espace $x$.

---

### ❓ Questions progressives

1. **Établissement de l'équation locale :** En effectuant un bilan thermique infinitésimal sur une tranche d'épaisseur $\mathrm{d}x$ d'un milieu homogène de conductivité $\lambda$ siège d'une volumique de puissance thermique $p_{th}$ (en $\text{W}\cdot\text{m}^{-3}$), établir l'équation de la chaleur en régime stationnaire.
2. **Résolution dans une couche :** Dans le cas d'une couche homogène sans source de chaleur interne ($p_{th} = 0$), exprimer le profil de température $T(x)$ et le vecteur densité surfacique de flux thermique $\vec{\varphi}$. Commenter l'allure de $T(x)$.
3. **Analogie électrique :** Définir la résistance thermique $R_{th}$ (en $\text{K}\cdot\text{W}^{-1}$) d'une couche plane de surface $S$, d'épaisseur $e$ et de conductivité $\lambda$. Exprimer de même la résistance thermique équivalente $R_{conv}$ due à un échange par convection de coefficient $h$ sur une surface $S$.
4. **Résistance globale et flux thermique :** En déduire l'expression de la résistance thermique globale $R_{tot}$ du mur composite de surface $S$ mis en série entre l'extérieur et l'intérieur. Exprimer le flux thermique total traversant le mur $P_{th}$ en fonction de $T_{int}$, $T_{ext}$ et $R_{tot}$.
5. **Application numérique :** On donne $T_{ext} = -10\,\text{°C}$, $T_{int} = 20\,\text{°C}$, $S = 20\,\text{m}^2$, $e_1 = 0{,}20\,\text{m}$ ($\lambda_1 = 1{,}5\,\text{W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$), $e_2 = 0{,}10\,\text{m}$ ($\lambda_2 = 0{,}040\,\text{W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$), $e_3 = 0{,}02\,\text{m}$ ($\lambda_3 = 0{,}35\,\text{W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$), $h_{ext} = 25\,\text{W}\cdot\text{m}^{-2}\cdot\text{K}^{-1}$ et $h_{int} = 10\,\text{W}\cdot\text{m}^{-2}\cdot\text{K}^{-1}$. Calculer la résistance globale et le flux thermique perdu.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Pensez à utiliser le premier principe de la thermodynamique ou un bilan d'énergie sur un volume $\mathcal{V}$ délimité par $x$ et $x+\mathrm{d}x$, de section $S$. Reliez la densité de flux thermique au gradient de température via la loi de Fourier : $\vec{\varphi} = -\lambda \vec{\operatorname{grad}} T$.
- **Question 2 :** Une simple double integration de l'équation différentielle par rapport à $x$ suffit. Les constantes d'intégration s'obtiennent à l'aide des conditions aux limites en température.
- **Questions 3 & 4 :** Utilisez l'analogie entre la loi d'Ohm ($U = R \cdot I$) et la loi thermique ($T_1 - T_2 = R_{th} \cdot P_{th}$). Les résistances thermiques en régime stationnaire s'additionnent lorsqu'elles sont traversées par le même flux thermique (montage en série).
- **Attention aux unités :** Convertissez systématiquement en unités SI si nécessaire, mais ici les données sont cohérentes.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Établissement de l'équation locale de la chaleur
Considérons une tranche de milieu homogène comprise entre $x$ et $x + \mathrm{d}x$, de section $S$. Le volume élémentaire est $\mathrm{d}\mathcal{V} = S\,\mathrm{d}x$.
En régime stationnaire, l'énergie interne du système se conserve, le bilan thermique sur ce volume s'écrit :
$$\Phi_{\text{entrant}} - \Phi_{\text{sortant}} + \mathcal{P}_{\text{générée}} = 0$$
- Le flux thermique entrant en $x$ est $\Phi(x) = \vec{\varphi}(x) \cdot (-\vec{u}_x) S = -\varphi_x(x) S$.
- Le flux thermique sortant en $x + \mathrm{d}x$ est $\Phi(x+\mathrm{d}x) = \varphi_x(x+\mathrm{d}x) S$.
- La puissance thermique générée est $\mathcal{P}_{\text{générée}} = p_{th} S\,\mathrm{d}x$.

Le bilan s'écrit donc :
$$\varphi_x(x)S - \varphi_x(x+\mathrm{d}x)S + p_{th}S\,\mathrm{d}x = 0 \implies -\frac{\partial \varphi_x}{\partial x} + p_{th} = 0$$
En injectant la loi de Fourier ($\varphi_x = -\lambda \frac{\partial T}{\partial x}$), on obtient **l'équation de la chaleur en régime stationnaire** :
$$\boxed{\frac{\mathrm{d}^2 T}{\mathrm{d}x^2} + \frac{p_{th}}{\lambda} = 0}$$

#### 2. Résolution dans une couche sans source ($p_{th} = 0$)
L'équation devient $\frac{\mathrm{d}^2 T}{\mathrm{d}x^2} = 0$. 
Par double intégration :
$$T(x) = A x + B$$
où $A$ et $B$ sont des constantes déterminées par les conditions aux limites (températures imposées aux bornes de la couche).
Le profil de température est **strictement affine** (linéaire) dans une couche homogène sans source.
Le vecteur densité de flux thermique est uniforme et vaut :
$$\vec{\varphi} = -\lambda \frac{\mathrm{d}T}{\mathrm{d}x} \vec{u}_x = -\lambda A \vec{u}_x = \text{constante}$$

#### 3. Définition des résistances thermiques
* **Résistance thermique par conduction** pour une tranche d'épaisseur $e$, de surface $S$ et de conductivité $\lambda$ :
  Le flux thermique à travers la couche est $P_{th} = \varphi S = \frac{\lambda S}{e} (T_1 - T_2)$.
  Par analogie avec la loi d'Ohm ($U = R_{th} I$ avec $U = T_1 - T_2$ et $I = P_{th}$) :
  $$\boxed{R_{\text{cond}} = \frac{e}{\lambda S}}$$

* **Résistance thermique par convection** à l'interface avec un fluide de coefficient d'échange $h$ :
  Le flux de chaleur échangé est $P_{th} = h S (T_{\text{paroi}} - T_{\text{fluide}})$.
  Par analogie :
  $$\boxed{R_{\text{conv}} = \frac{1}{h S}}$$

#### 4. Résistance globale et flux thermique total
Le mur est constitué de 5 éléments en série (convection ext, béton, isolant, plâtre, convection int). Les résistances s'ajoutent :
$$R_{tot} = R_{\text{conv, ext}} + R_{1} + R_{2} + R_{3} + R_{\text{conv, int}}$$
Soit :
$$\boxed{R_{tot} = \frac{1}{h_{ext}S} + \frac{e_1}{\lambda_1 S} + \frac{e_2}{\lambda_2 S} + \frac{e_3}{\lambda_3 S} + \frac{1}{h_{int}S}}$$

Le flux thermique traversant l'ensemble du système entre l'air extérieur et l'air intérieur est :
$$\boxed{P_{th} = \frac{T_{int} - T_{ext}}{R_{tot}}}$$

#### 5. Application numérique
Calculons d'abord les différentes résistances thermiques (en $\text{K}\cdot\text{W}^{-1}$) :
- $R_{\text{conv, ext}} = \frac{1}{25 \times 20} = \frac{1}{500} = 2{,}00 \times 10^{-3}\,\text{K}\cdot\text{W}^{-1}$
- $R_1 \text{ (béton)} = \frac{0{,}20}{1{,}5 \times 20} = \frac{0{,}20}{30} \approx 6{,}67 \times 10^{-3}\,\text{K}\cdot\text{W}^{-1}$
- $R_2 \text{ (isolant)} = \frac{0{,}10}{0{,}040 \times 20} = \frac{0{,}10}{0{,}8} = 125 \times 10^{-3} = 0{,}125\,\text{K}\cdot\text{W}^{-1}$
- $R_3 \text{ (plâtre)} = \frac{0{,}02}{0{,}35 \times 20} = \frac{0{,}02}{7} \approx 2{,}86 \times 10^{-3}\,\text{K}\cdot\text{W}^{-1}$
- $R_{\text{conv, int}} = \frac{1}{10 \times 20} = \frac{1}{200} = 5{,}00 \times 10^{-3}\,\text{K}\cdot\text{W}^{-1}$

*(Remarque d'examinateur : On observe immédiatement que la résistance de l'isolant $R_2$ est écrasante devant les autres, ce qui valide physiquement son rôle).*

Somme des résistances :
$$R_{tot} = (0{,}002 + 0{,}00667 + 0{,}125 + 0{,}00286 + 0{,}005)\,\text{K}\cdot\text{W}^{-1} \approx 0{,}1415\,\text{K}\cdot\text{W}^{-1}$$

Calcul du flux thermique total $P_{th}$ :
$$P_{th} = \frac{20 - (-10)}{0{,}1415} = \frac{30}{0{,}1415} \approx 212\,\text{W}$$

Le flux thermique total perdu à travers ce mur est de l'ordre de **$212\,\text{W}$**.