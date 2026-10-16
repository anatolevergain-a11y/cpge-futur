---
title: 'Exercice 2 : Conversion mécano-électrique et bilans énergétiques globaux'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les systèmes mécano-électriques couplés sont omniprésents dans les systèmes industriels et de transport modernes (véhicules électriques, actionneurs aéronautiques, récupération d'énergie par piézoélectricité ou électromagnétisme). L'objectif de ce problème est d'étudier la conversion d'énergie au sein d'un actionneur électromagnétique linéaire réversible.

Le dispositif étudié est constitué d'un circuit magnétique parfait (perméabilité magnétique infinie, pas de pertes par courants de Foucault ni par hystérésis) comportant un entrefer d'épaisseur variable $e(x) = e_0 - x$, où $x$ désigne le déplacement de la partie mobile (le piston) par rapport à sa position de repos. 

- $R$ : Résistance électrique de l'enroulement de commande ($N$ spires).
- $i(t)$ : Intensité du courant traversant l'enroulement.
- $u(t)$ : Tension aux bornes de l'enroulement.
- $L(x)$ : Inductance propre de la bobine, modélisée sous la forme $L(x) = \frac{L_0}{1 - \frac{x}{e_0}}$, avec $L_0 > 0$ et $x < e_0$.
- $m$ : Masse de la partie mobile.
- $f_c$ : Force de frottement visqueux associée au mouvement, de coefficient $f > 0$.
- $F_e(t)$ : Force extérieure appliquée sur le piston.
- $x(t)$ : Position de la partie mobile (repère galiléen).

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Modélisation électrique :** Établir la relation entre la tension $u(t)$, le courant $i(t)$, la résistance $R$ et le flux magnétique total $\Phi(t)$ enlacé par la bobine. Exprimer ce flux en fonction de $L(x)$ et $i(t)$.
2. **Bilan énergétique et force électromagnétique :** En considérant le système conservatif du point de vue magnétique (variation d'énergie emmagasinée dans l'entrefer), exprimer l'énergie magnétique stockée $E_m(x, i)$ dans le circuit. En déduire l'expression de la force électromagnétique $f_{\text{em}}(x, i)$ agissant sur la partie mobile dans le sens de l'axe $x$.
3. **Mise en équation dynamique :** Écrire l'équation fondamentale de la dynamique (PFD) régissant le mouvement du piston de masse $m$, soumis à la force électromagnétique $f_{\text{em}}$, aux frottements visqueux de coefficient $f$ et à une force extérieure $F_e(t)$.
4. **Linéarisation et mise sous forme d'état :** Autour d'un point de repos (courant constant $I_0$ et position $x_0 = 0$), on pose $i(t) = I_0 + \varepsilon_i(t)$ et $x(t) = \varepsilon_x(t)$ avec des perturbations supposées faibles. Linéariser le système d'équations couplées électromécaniques.
5. **Analyse critique du modèle :** Discuter la validité de l'hypothèse de perméabilité magnétique infinie et l'absence de saturation du matériau ferromagnétique. Quel est l'impact d'une saturation magnétique sur l'expression de la force $f_{\text{em}}$ et sur la stabilité du système ?

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Penser à la loi de Faraday pour l'induction et à la définition du flux propre $\Phi = L(x)i$. Attention au fait que $L$ dépend du temps par l'intermédiaire de la position $x(t)$.
- **Question 2 :** L'énergie magnétique stockée est définie par $E_m(x, i) = \int_0^i \Phi(x, i') di'$. La force électromagnétique se déduit par dérivation de la co-énergie ou de l'énergie par rapport à la position à flux constant ou courant constant.
- **Question 3 :** Projeter le PFD sur l'axe du mouvement et identifier clairement les différentes composantes des efforts (inertie, frottements, électromagnétique, extérieur).
- **Question 4 :** Effectuer un développement limité de $L(x)$ au voisinage de $x=0$ à l'ordre 1.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Modélisation électrique
D'après la loi d'Ohm généralisée (loi de Faraday), la tension aux bornes de l'enroulement s'exprime par :
$$u(t) = R i(t) + \frac{d\Phi}{dt}$$

Le flux magnétique total enlacé par les $N$ spires de la bobine est lié à l'inductance propre $L(x)$ et au courant $i(t)$ par la relation linéaire (en l'absence de saturation) :
$$\Phi(t) = L(x) i(t)$$

En dérivant par rapport au temps, il vient :
$$\frac{d\Phi}{dt} = \frac{d}{dt}\big(L(x)i(t)\big) = L(x)\frac{di}{dt} + i(t)\frac{dL(x)}{dx}\frac{dx}{dt}$$

L'équation électrique complète est donc :
$$u(t) = R i(t) + L(x)\frac{di}{dt} + i(t)\frac{dL}{dx}\dot{x}$$

#### 2. Bilan énergétique et force électromagnétique
L'énergie magnétique emmagasinée $E_m(x, i)$ dans le circuit se calcule par intégration du travail électrique élémentaire lié au flux :
$$E_m(x, i) = \int_0^i i' \frac{d\Phi(x, i')}{di'} di' = \int_0^i L(x) i' di' = \frac{1}{2} L(x) i^2$$

La force électromagnétique généralisée $f_{\text{em}}$ associée à la variable de déplacement $x$ se déduit par dérivation de l'énergie magnétique à courant constant (ou de la co-énergie) :
$$f_{\text{em}}(x, i) = +\left(\frac{\partial E_m(x, i)}{\partial x}\right)_i$$

En dérivant l'expression de $E_m(x, i)$ :
$$f_{\text{em}}(x, i) = \frac{1}{2} i^2 \frac{dL(x)}{dx}$$

Calculons la dérivée de l'inductance $L(x) = \frac{L_0}{1 - \frac{x}{e_0}}$ :
$$\frac{dL(x)}{dx} = L_0 \cdot \left(-\frac{1}{\left(1 - \frac{x}{e_0}\right)^2}\right) \cdot \left(-\frac{1}{e_0}\right) = \frac{L_0}{e_0 \left(1 - \frac{x}{e_0}\right)^2}$$

On en déduit l'expression explicite de la force électromagnétique :
$$f_{\text{em}}(x, i) = \frac{L_0 i^2}{2 e_0 \left(1 - \frac{x}{e_0}\right)^2}$$
Note: Cette force est toujours positive (quel que soit le signe de $i$), ce qui traduit un comportement d'attraction du noyau mobile vers l'intérieur du circuit magnétique ($x$ croissant).*

#### 3. Mise en équation dynamique
Appliquons le Principe Fondamental de la Dynamique (PFD) à la partie mobile de masse $m$ en translation rectiligne de coordonnée $x$, dans le référentiel galiléen lié au bâti :
$$m \ddot{x} = \sum F_{\text{ext}} \rightarrow m \ddot{x} = f_{\text{em}}(x, i) - f \dot{x} + F_e(t)$$

Soit, en remplaçant par l'expression de $f_{\text{em}}$ :
$$m \ddot{x} + f \dot{x} = \frac{L_0 i^2}{2 e_0 \left(1 - \frac{x}{e_0}\right)^2} + F_e(t)$$

#### 4. Linéarisation et mise sous forme d'état
On se place au voisinage du point de repos défini par $I_0 = \text{Ciste}$, $X_0 = 0$ et $F_{e0} = 0$. On pose :
- $i(t) = I_0 + \varepsilon_i(t)$
- $x(t) = 0 + \varepsilon_x(t)$
- $u(t) = U_0 + \varepsilon_u(t)$ avec $U_0 = R I_0$

Effectuons un développement limité au premier ordre des non-linéarités :
1. Inductance : $L(x) \approx L_0$ et $\frac{dL}{dx}(x=0) = \frac{L_0}{e_0}$.
2. Force électromagnétique : 
   $$f_{\text{em}}(x, i) \approx \frac{L_0 I_0^2}{2 e_0} + \frac{L_0 I_0}{e_0} \varepsilon_i + \frac{L_0 I_0^2}{e_0^2} \varepsilon_x$$

L'équation électrique linéarisée devient :
$$\varepsilon_u(t) = R \varepsilon_i(t) + L_0 \frac{d\varepsilon_i}{dt} + \frac{L_0 I_0}{e_0} \frac{d\varepsilon_x}{dt}$$

L'équation mécanique linéarisée devient :
$$m \frac{d^2\varepsilon_x}{dt^2} + f \frac{d\varepsilon_x}{dt} = \frac{L_0 I_0^2}{e_0^2} \varepsilon_x + \frac{L_0 I_0}{e_0} \varepsilon_i + F_e(t)$$

On remarque la présence du terme $\frac{L_0 I_0^2}{e_0^2} \varepsilon_x$ dans l'équation mécanique, qui agit comme une raideur négative (due au couplage électromagnétique). Si cette raideur dépasse les efforts de rappel ou d'amortissement, le système présente un risque d'instabilité par claquage (phénomène de "pull-in").

#### 5. Analyse critique du modèle
- **Hypothèse de perméabilité infinie et absence de saturation :** Dans la réalité, le matériau ferromagnétique constituant le circuit magnétique possède une aimantation maximale (saturation $B_{\text{sat}}$). Lorsque le courant $i(t)$ augmente ou que l'entrefer $e(x)$ devient très petit, le champ magnétique atteint cette limite. 
- **Conséquence de la saturation :** Le flux ne varie plus proportionnellement au courant ($\Phi \neq L(x)i$). L'inductance apparente diminue, ce qui réduit drastiquement la force électromagnétique réelle par rapport au modèle idéal en $i^2$. 
- **Intérêt et limites :** Le modèle linéaire par morceaux ou l'introduction d'un coefficient de saturation empirique est indispensable pour le dimensionnement industriel des actionneurs afin d'éviter les erreurs d'estimation de course et d'effort maximal.