---
title: 'Exercice : Force de Laplace et conversion d énergie électromécanique'
description: 'Problème guidé type concours (Mines-Ponts / CCINP) - Filière PCSI'
---

### 🌐 Énoncé du problème / Cadre d'étude

On s'intéresse à un dispositif électromécanique idéalisé destiné à convertir de l'énergie cinétique en énergie électrique (ou inversement). 

Le système est constitué d'un rail conducteur horizontal, de résistance négligeable, distant de $L$. Ce rail est plongé dans un champ magnétique uniforme, permanent et stationnaire $\vec{B} = B_0 \vec{u}_z$, orienté selon la verticale ascendante. 

Une tige conductrice $MN$, de masse $m$, de résistance électrique $R$ et de longueur $L$ (assimilée à la distance entre les rails), peut glisser sans frottement sur ces rails tout en restant perpendiculaire à ceux-ci. On repère la position de la tige à l'instant $t$ par son abscisse $x(t)$ sur l'axe $(Ox)$ orienté de la gauche vers la droite. Le circuit est fermé à l'une de ses extrémités par une résistance globale $R$ (qui inclut la résistance de la tige et celle des rails).

À l'instant $t = 0$, la tige est lancée avec une vitesse initiale $v_0 > \vec{u}_x$ depuis la position $x = 0$. On négligera toute inductance propre du circuit ($L_{\text{inductance}} = 0$).

---

### ❓ Questions progressives

1. **Analyse préliminaire et loi de Faraday**
   Exprimer le flux magnétique $\Phi(t)$ à travers le circuit en fonction de $B_0$, $L$ et $x(t)$. En déduire l'expression de la force électromotrice induite $e(t)$ dans le circuit.

2. **Bilan électrique et loi d'Ohm**
   En déduire l'intensité du courant induit $i(t)$ circulant dans le circuit. On précisera la convention choisie.

3. **Force de Laplace**
   Déterminer l'expression vectorielle de la force de Laplace $\vec{F}_L$ s'exerçant sur la tige $MN$ en fonction de $B_0$, $L$, $i(t)$ et des vecteurs unitaires de la base cartésienne. Quel est l'effet qualitatif de cette force sur le mouvement de la tige ?

4. **Équation différentielle du mouvement**
   Appliquer le théorème du centre d'inertie à la tige $MN$ pour établir l'équation différentielle vérifiée par sa vitesse $v(t) = \frac{\text{d}x}{\text{d}t}$. Mettre cette équation sous la forme caractéristique $\frac{\text{d}v}{\text{d}t} + \frac{v}{\tau} = 0$ et exprimer la constante de temps $\tau$ en fonction des paramètres du problème.

5. **Résolution et étude énergétique**
   Donner l'expression de la vitesse $v(t)$ pour $t \ge 0$. Calculer l'énergie cinétique initiale $E_c(0)$ et déterminer l'énergie totale $E_J$ dissipée par effet Joule dans la résistance $R$ sur l'ensemble de la phase de ralentissement ($t$ de $0$ à $+\infty$). Conclure sur la conversion d'énergie.

---

### 💡 Pistes & Indications méthodologiques

* **Indication pour Q1 :** Le flux du champ magnétique à travers un circuit plan s'exprime par $\Phi = \iint_{\text{surface}} \vec{B} \cdot \vec{n} \, \text{d}S$. Attention au choix de la normale $\vec{n}$ pour respecter l'orientation du circuit.
* **Indication pour Q2 :** Utilisez la loi de Faraday $e = -\frac{\text{d}\Phi}{\text{d}t}$, puis la loi d'Ohm aux bornes de la résistance équivalente $R$.
* **Indication pour Q3 :** La force élémentaire de Laplace sur un fil parcouru par un courant $i$ est $\text{d}\vec{F} = i \, \vec{\text{d}\ell} \wedge \vec{B}$.
* **Indication pour Q5 :** Pour l'énergie dissipée par effet Joule, rappelez-vous que $P_J(t) = R i(t)^2$ et que l'énergie totale est l'intégrale de cette puissance entre $0$ et $+\infty$. Vous pouvez aussi utiliser un bilan énergétique global (théorème de l'énergie cinétique).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Analyse préliminaire et loi de Faraday
Le circuit est délimité par les rails et la tige $MN$ mobile. La surface $S(t)$ du circuit correspond à un rectangle de longueur $x(t)$ et de largeur $L$.
Le champ magnétique est $\vec{B} = B_0 \vec{u}_z$. Si l'on oriente le contour du circuit dans le sens trigonométrique, la normale associée $\vec{n}$ est $\vec{u}_z$.
Le flux magnétique à travers le circuit s'écrit donc :
$$\Phi(t) = \iint_{S(t)} B_0 \vec{u}_z \cdot \vec{u}_z \, \text{d}S = B_0 \times \text{Aire}(S) = B_0 L x(t)$$

D'après la loi de Faraday, la force électromotrice induite $e(t)$ dans le circuit est :
$$e(t) = -\frac{\text{d}\Phi}{\text{d}t} = -B_0 L \frac{\text{d}x}{\text{d}t} = -B_0 L v(t)$$
où $v(t) = \dot{x}(t)$ est la vitesse de la tige.

#### 2. Bilan électrique et loi d'Ohm
Le circuit ne comportant pas de générateur idéal de tension et son inductance étant négligeable, la loi d'Ohm aux bornes de la résistance $R$ (unique récepteur du circuit) s'écrit :
$$e(t) - R i(t) = 0 \implies i(t) = \frac{e(t)}{R} = -\frac{B_0 L v(t)}{R}$$
Note: Le signe dépend de l'orientation du courant. Si $v > 0$, $i$ est négatif, ce qui signifie que le courant circule dans le sens trigonométrique indirect.*

#### 3. Force de Laplace
La tige $MN$ est traversée par le courant $i(t)$ sur une longueur $L$ selon la direction $-\vec{u}_y$ (si les rails sont selon $\vec{u}_x$). La force de Laplace s'obtient en intégrant sur la portion de tige :
$$\vec{F}_L = \int_{M}^{N} i \, \vec{\text{d}\ell} \wedge \vec{B} = i \, (L (-\vec{u}_y)) \wedge (B_0 \vec{u}_z)$$
$$\vec{F}_L = -i B_0 L (\vec{u}_y \wedge \vec{u}_z) = -i B_0 L \vec{u}_x$$

En remplaçant $i(t)$ par son expression trouvée à la question 2 :
$$\vec{F}_L = -\left(-\frac{B_0 L v(t)}{R}\right) B_0 L \vec{u}_x = -\frac{B_0^2 L^2}{R} v(t) \vec{u}_x$$

**Interprétation qualitative :** Puisque $\vec{F}_L$ est opposée au vecteur vitesse $\vec{v} = v(t)\vec{u}_x$ (car $\frac{B_0^2 L^2}{R} > 0$), cette force s'oppose systématiquement au mouvement. C'est la manifestation de la loi de Lenz : le système s'oppose par ses effets à la cause qui lui a donné naissance.

#### 4. Équation différentielle du mouvement
Appliquons le Théorème du Centre d'Inertie (TCI) à la tige $MN$ dans le référentiel terrestre supposé galiléen, en projection sur l'axe $(Ox)$ :
Le bilan des forces extérieures se résume à la force de Laplace $\vec{F}_L$ (les forces de frottement mécanique étant supposées nulles, de même que le poids et la réaction normale qui se compensent verticalement).
$$m \frac{\text{d}v}{\text{d}t} = F_{L,x} = -\frac{B_0^2 L^2}{R} v(t)$$

En réorganisant les termes, on obtient l'équation différentielle :
$$\frac{\text{d}v}{\text{d}t} + \frac{B_0^2 L^2}{m R} v(t) = 0$$

Cette équation se met sous la forme canonique demandée :
$$\frac{\text{d}v}{\text{d}t} + \frac{v}{\tau} = 0 \quad \text{avec} \quad \tau = \frac{m R}{B_0^2 L^2}$$
Où $\tau$ représente une constante de temps caractéristique du freinage électromagnétique.

#### 5. Résolution et étude énergétique
La résolution de l'équation différentielle du premier ordre avec la condition initiale $v(0) = v_0$ donne :
$$v(t) = v_0 \exp\left(-\frac{t}{\tau}\right)$$

* **Énergie cinétique initiale :**
  $$E_c(0) = \frac{1}{2} m v_0^2$$

* **Énergie dissipée par effet Joule :**
  La puissance instantanée dissipée par effet Joule dans la résistance $R$ est :
  $$P_J(t) = R i(t)^2 = R \left(\frac{B_0 L v(t)}{R}\right)^2 = \frac{B_0^2 L^2}{R} v(t)^2$$
  
  L'énergie totale $E_J$ dissipée de $t = 0$ à $t = +\infty$ est l'intégrale de cette puissance :
  $$E_J = \int_{0}^{+\infty} P_J(t) \, \text{d}t = \frac{B_0^2 L^2}{R} \int_{0}^{+\infty} \left( v_0 e^{-t/\tau} \right)^2 \text{d}t$$
  $$E_J = \frac{B_0^2 L^2 v_0^2}{R} \int_{0}^{+\infty} e^{-2t/\tau} \, \text{d}t$$
  
  En calculant l'intégrale :
  $$\int_{0}^{+\infty} e^{-2t/\tau} \, \text{d}t = \left[ -\frac{\tau}{2} e^{-2t/\tau} \right]_{0}^{+\infty} = \frac{\tau}{2}$$
  
  En remplaçant $\tau$ par $\frac{m R}{B_0^2 L^2}$ :
  $$E_J = \frac{B_0^2 L^2 v_0^2}{R} \times \frac{1}{2} \left(\frac{m R}{B_0^2 L^2}\right) = \frac{1}{2} m v_0^2$$

**Conclusion sur la conversion d'énergie :**
On constate que $E_J = E_c(0)$. Intégralement, l'énergie cinétique initiale de la tige a été convertie en énergie électrique, puis entièrement dissipée sous forme thermique par effet Joule dans la résistance du circuit à cause des courants induits. C'est le principe de base du freinage par courants de Foucault (conversion électromécanique passive).