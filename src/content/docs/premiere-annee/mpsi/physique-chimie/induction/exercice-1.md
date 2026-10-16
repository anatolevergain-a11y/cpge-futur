---
title: 'Exercice 1 : Loi de Faraday'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude d'un frein magnétique à courants de Foucault

## Énoncé

Le dispositif étudié est un modèle idéalisé de frein magnétique, souvent rencontré dans les systèmes de sécurité (wagons de montagnes russes, camions poids lourds). 

On considère une spire carrée indéformable, de côté $a$, de résistance électrique $R$ et de masse $m$. Cette spire se déplace dans le plan $(Oxz)$ sous l'action de la pesanteur $\vec{g} = -g \vec{e}_z$. 

À l'instant $uć$ $t$, la position de son centre de masse est notée $z(t)\vec{e}_z$. Le mouvement est rectiligne vertical.

La région de l'espace définie par $z \in [-h, 0]$ (où $h > 0$) est le siège d'un champ magnétique uniforme, permanent et orthogonal au plan de la spire, soit :
$$\vec{B} = B_0 \vec{e}_y \quad \text{pour } z \in [-h, 0]$$
$$\vec{B} = \vec{0} \quad \text{ailleurs}$$

On négligera l'inductance propre de la spire devant sa résistance $R$ (approximation quasi-stationnaire de l'inductance ou régime transitoire ohmique).

---

## Questions

1. **Analyse des symétries et orientation :** Préciser la direction du vecteur champ magnétique. En déduire le choix légitime du contour orienté pour appliquer la loi de Faraday lors de l'entrée de la spire dans la zone champ magnétique.
2. **Calcul du flux :** Exprimer le flux magnétique $\Phi(t)$ à travers la spire en fonction de sa position $z(t)$ lorsque celle-ci pénètre partiellement dans la zone de champ (pour $0 \le z(t) + h \le a$).
3. **Loi de Faraday et force de Laplace :** En déduire la force électromotrice induite $e(t)$, puis l'intensité du courant induit $i(t)$ circulant dans la spire. Déterminer la force de Laplace résultante $\vec{F}_{\text{Laplace}}$ s'exerçant sur la spire lors de cette phase d'entrée.
4. **Équation différentielle du mouvement :** Établir l'équation différentielle vérifiée par la vitesse $v(z) = \dot{z}(t)$ de la spire lors de sa traversée de la zone de champ. On posera une constante de temps caractéristique $\tau$ du système que l'on explicitera.
5. **Analyse critique et ordres de grandeur :** 
   - Application numérique : On donne $a = 10\text{ cm}$, $R = 5.0 \times 10^{-3} \ \Omega$, $m = 20\text{ g}$, $B_0 = 0.5\text{ T}$ et $g = 9.81\text{ m}\cdot\text{s}^{-2}$. Calculer la valeur numérique de $\tau$ et de la vitesse limite atteinte si la zone de champ est suffisamment grande.
   - Discuter la validité de l'approximation quasi-stationnelle (négligeabilité de l'inductance propre $L$) en comparant les échelles de temps du système.

---

## Pistes

* **Piste 1 :** Pour le calcul du flux, délimitez bien la surface en intersection entre le carré de la spire et la bande de champ magnétique $[-h, 0]$. Attention au sens de parcours de la spire (règlement du tire-bouchon pour l'orientation de la normale associée au flux).
* **Piste 2 :** La force de Laplace globale se calcule en sommant les forces sur les quatre côtés, mais les côtés horizontaux situés hors champ ou dans le champ uniforme subissent des forces dont les effets se comparent facilement. Seul le côté coupé par la frontière du champ contribue au freinage.
* **Piste 3 :** Pensez à vérifier l'homogénéité de vos expressions littérales avant de passer à l'application numérique.

---

## Corrigé

### 1. Orientation et choix du contour
Le champ magnétique est dirigé selon $\vec{e}_y$. Par convention, si l'on choisit le vecteur normal $\vec{n}$ de la surface de la spire orienté selon $+\vec{e}_y$, le contour orienté de la spire est choisi dans le sens trigonométrique direct dans le plan $(Oxz)$ par la règle de la main droite.

### 2. Calcul du flux magnétique
La surface de la spire est de $S = a^2$. Le champ magnétique est non nul uniquement pour $z \in [-h, 0]$. 
Lorsque la spire pénètre dans la zone, le haut de la spire est à l'ordonnée $z + a/2$ et le bas à $z - a/2$. La phase d'entrée correspond à l'intervalle où le bord inférieur de la spire franchit $z = -h$, soit $-h \le z - a/2 \le 0$ et $z + a/2 \ge -h$.

En phase d'entrée partielle ($z - a/2 \ge -h$ et $z + a/2 \le 0$, selon les conventions d'axe, formalisons plus simplement par la hauteur immergée $Z_{\text{imm}}$) :
Le flux à travers la spire de surface immergée $a \times (z + h + a/2)$ (si on pose $z$ comme le centre) vaut :
$$\Phi(t) = B_0 \times a \times [-(z(t) - a/2)] \quad \text{pour } -h - a/2 \le z(t) \le -h + a/2$$
*Correction rigoureuse de cinématique :* Soit $z$ l'altitude du côté inférieur de la spire. La zone de champ est $[-h, 0]$. Le flux est non nul pour $-a \le z \le 0$. 
Pour $z \in [-a, 0]$ (spire partiellement ou totalement entrée), la portion immergée a pour hauteur $z$ (si $z \in [-a, 0]$ et $z+a > 0$). Plus simplement, exprimons avec la vitesse $v = \dot{z}$. Lorsque le bord inférieur entre dans la zone, la surface immergée est $a \times (0 - z)$ si $z$ va de $-a$ à $0$. 
Soit $\Phi(t) = B_0 a (0 - z(t))$ (en phase d'entrée par le haut, avec $z$ négatif croissant de $-h-a$ à $-h$). Reprenons proprement avec $z(t)$ position du centre :
$$\Phi(t) = B_0 a \min\left(a, \max\left(0, -z(t) - \frac{h}{2}\dots\right)\right)$$
*Formulation standard par variation de surface :* $\Phi(t) = B_0 \cdot S_{\text{imm}}(t)$. Si le côté inférieur de la spire d'altitude $z_{\text{inf}}(t)$ entre dans la zone avec $z_{\text{inf}} \in [-h, 0]$ :
$$\Phi(t) = B_0 a (0 - z_{\text{inf}}(t)) \quad \text{(si la spire descend de haut en bas dans la zone)}$$

### 3. Force électromotrice et Force de Laplace
D'après la loi de Faraday, la f.e.m. induite est :
$$e(t) = -\frac{d\Phi}{dt} = -B_0 a \left(-\frac{dz_{\text{inf}}}{dt}\right) = B_0 a v_z$$
où $v_z = \dot{z}_{\text{inf}}$ est la vitesse de descente. Comme la spire est en chute, $v_z < 0$. 
L'intensité du courant induit est (loi d'Ohm macroscopique, résistance $R$) :
$$i(t) = \frac{e(t)}{R} = \frac{B_0 a v_z}{R}$$
La force de Laplace s'exerce essentiellement sur le segment horizontal traversé par la frontière du champ magnétique (où $\vec{B} \neq \vec{0}$ d'un seul côté, créant une discontinuité du champ ou une variation spatiale). 
La force élémentaire est $\vec{dF} = i \, \vec{dl} \wedge \vec{B}$. Pour le segment horizontal de longueur $a$ parcouru par le courant $I$ :
$$\vec{F}_{\text{Laplace}} = I \, (a \vec{e}_x) \wedge (B_0 \vec{e}_y) = I a B_0 \vec{e}_z = \frac{B_0^2 a^2 v_z}{R} \vec{e}_z$$
Puisque $v_z < 0$ (descente), cette force est orientée vers le **haut** ($\vec{e}_z$), ce qui traduit qualitativement la loi de Lenz (opposition à la cause qui lui a donne naissance, i.e., la chute).

### 4. Équation différentielle du mouvement
En appliquant le PFD à la spire dans la zone de champ :
$$m \frac{dv_z}{dt} = -mg + F_{\text{Laplace}, z} = -mg + \frac{B_0^2 a^2}{R} v_z$$
Soit l'équation différentielle :
$$\frac{dv_z}{dt} + \frac{1}{\tau} v_z = -g$$
avec la **constante de temps du freinage** :
$$\tau = \frac{m R}{B_0^2 a^2}$$

### 5. Analyse critique et ordres de grandeur
* **Application numérique :**
  $$\tau = \frac{20 \times 10^{-3} \times 5.0 \times 10^{-3}}{(0.5)^2 \times (0.1)^2} = \frac{10^{-4}}{25 \times 10^{-4} \times 10^{-2}} = \frac{10^{-4}}{2.5 \times 10^{-5}} = 4.0 \times 10^{-1} \text{ s} = 0.40 \text{ s}$$
  La vitesse limite (si la zone de champ est suffisamment vaste pour atteindre le régime permanent $dv/dt = 0$) est :
  $$v_{\text{lim}} = -g \tau = -9.81 \times 0.40 \approx -3.9 \text{ m}\cdot\text{s}^{-1}$$

* **Limites du modèle (Analyse critique) :**
  1. *Négligeabilité de l'inductance propre $L$ :* L'équation électrique exacte serait $e(t) = Ri + L \frac{di}{dt}$. Le régime transitoire inductif a pour caractéristique $\tau_L = \frac{L}{R}$. Pour une spire carrée de décimètre, $L \sim \mu_0 a \approx 4\pi \times 10^{-7} \times 0.1 \approx 1.3 \times 10^{-7} \text{ H}$. 
     Ici, $\tau_L \sim \frac{1.3 \times 10^{-7}}{5 \times 10^{-3}} \approx 2.6 \times 10^{-5} \text{ s}$. 
     Puisque $\tau_L \ll \tau$ ($2.6 \times 10^{-5} \text{ s} \ll 0.40 \text{ s}$), **l'approximation quasi-stationnelle est amplement validée**.
  2. *Effets thermiques et limites de résistance :* Le courant induit dissipe de l'énergie par effet Joule ($P_J = R i^2$). Pour une vitesse de $4 \text{ m}\cdot\text{s}^{-1}$, $i \approx \frac{0.5 \times 0.1 \times 4}{5 \times 10^{-3}} = 40 \text{ A}$. 
     Une telle intensité dans une résistance de $5 \text{ m}\Omega$ génère une puissance thermique $RI^2 \approx 8 \text{ W}$, ce qui peut provoquer un échauffement rapide et modifier la résistivité $R(T)$ du matériau (hypothèse de $R$ constante discutable sur un usage prolongé).