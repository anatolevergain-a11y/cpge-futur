---
title: 'Exercice 1 : Loi de Faraday et flux du champ magnétique'
description: 'Problème d entraînement type concours pour PCSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On se place dans le cadre de l'approximation des régimes quasi-permanents (ARQP). On considère un dispositif inspiré des freins à courants de Foucault ou des alternateurs simplifiés. 

Soit un circuit carré rigide $ABCD$, de côté $a$ et de masse $m$, constitué d'un fil conducteur homogène de résistance totale $R$ et de section constante. Ce circuit est situé dans le plan $(Oxy)$. 

Un champ magnétique permanent, uniforme et stationnaire $\vec{B} = B_0 \vec{e}_z$ (avec $B_0 > 0$) règne dans une région de l'espace définie par $x > 0$. Pour $x \le 0$, le champ magnétique est nul.

À l'instant $t = 0$, le sommet $A$ du cadre se trouve à l'origine $O$. Le cadre est lancé selon l'axe des abscisses orienté par $\vec{e}_x$ avec une vitesse initiale $\vec{v}_0 = v_0 \vec{e}_x$ ($v_0 > 0$). Le mouvement du cadre est donc purement de translation rectiligne selon $\vec{e}_x$.

On note $x(t)$ l'abscisse du côté $BC$ (le plus à droite, parallèle à l'axe $(Oy)$) à l'instant $t$.

---

### ❓ Questions progressives

1. **Analyse préliminaire et orientation :** Préciser les conditions d'application de l'ARQP. Définir un contour orienté pour le circuit et exprimer le flux $\Phi(t)$ du champ magnétique à travers ce contour en fonction de $x(t)$, $a$ et $B_0$, pour la phase où le cadre entre partiellement dans la zone du champ magnétique ($0 < x(t) < a$).
2. **Application de la loi de Faraday :** En déduire l'expression de la force électromotrice induite $e(t)$ dans le circuit pendant cette même phase. Préciser le signe de $e(t)$ et interpréter physiquement son sens.
3. **Bilan énergétique et dynamique :** Déterminer l'expression de la force de Laplace $\vec{F}_{\text{Laplace}}$ s'exerçant sur le cadre lorsque celui-ci pénètre dans la zone du champ. En appliquant le théorème de la résultante cinétique, établir l'équation différentielle vérifiée par la vitesse $v(t) = \frac{\text{d}x}{\text{d}t}$.
4. **Résolution et étude asymptotique :** Résoudre cette équation différentielle avec la condition initiale $v(0) = v_0$. Déterminer l'allure du mouvement et calculer la distance totale parcourue par le cadre dans la zone $x > 0$ si le champ est semi-infini.

---

### 💡 Pistes & Indications méthodologiques

* **Indication 1 (Flux) :** Le flux du champ magnétique $\vec{B}$ à travers une surface s'appuyant sur un contour fermé orienté est $\Phi(t) = \iint_{\Sigma} \vec{B} \cdot \vec{n} \, \text{d}^2S$. Attention à bien délimiter la zone où $\vec{B}$ est non nul.
* **Indication 2 (Loi de Faraday) :** La loi de Faraday s'écrit $e(t) = -\frac{\text{d}\Phi}{\text{d}t}$. Veillez à choisir un vecteur normal $\vec{n}$ cohérent avec l'orientation du contour via la règle de la main droite.
* **Indication 3 (Forces de Laplace) :** La force de Laplace élémentaire est $\text{d}\vec{F} = I \, \text{d}\vec{\ell} \wedge \vec{B}$. Seuls les segments situés dans la zone $x > 0$ et traversés par un courant induit $I$ subissent une force non nulle.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Analyse préliminaire et expression du flux

Le champ magnétique est non nul uniquement pour $x > 0$. 
À l'instant $t$, le cadre occupe la région comprise entre son côté $AD$ d'abscisse $x(t) - a$ et son côté $BC$ d'abscisse $x(t)$.
Pendant la phase d'entrée où $0 < x(t) < a$, seule une portion du cadre de largeur $x(t)$ et de hauteur $a$ se trouve dans la zone où $\vec{B} = B_0 \vec{e}_z$.

En orientant le contour dans le sens trigonométrique (anti-horaire) et en choisissant le vecteur normal $\vec{n} = \vec{e}_z$, le flux du champ magnétique à travers la surface du cadre est :
$$\Phi(t) = \iint_{\text{surface}} (B_0 \vec{e}_z) \cdot (\vec{e}_z \, \text{d}x \, \text{d}y) = B_0 \times (\text{aire de la portion immergée})$$

$$\Phi(t) = B_0 \, a \, x(t)$$

#### 2. Application de la loi de Faraday

La loi de Faraday permet de calculer la force électromotrice (f.e.m.) induite $e(t)$ dans le circuit :
$$e(t) = -\frac{\text{d}\Phi}{\text{d}t} = -\frac{\text{d}}{\text{d}t} \big( B_0 \, a \, x(t) \big)$$

En posant $v(t) = \frac{\text{d}x}{\text{d}t}$, on obtient :
$$e(t) = -B_0 \, a \, v(t)$$

* **Interprétation :** Comme $v(t) > 0$ lors de la pénétration, $e(t) < 0$. Selon la loi de Lenz, le courant induit $I(t) = \frac{e(t)}{R} = -\frac{B_0 a v(t)}{R}$ va s'opposer à la cause qui lui a donne naissance, c'est-à-dire à l'augmentation du flux magnétique à travers le circuit.

#### 3. Bilan dynamique et équation différentielle

Le courant induit circule dans le circuit. Seul le segment $BC$ (de longueur $a$, situé en $x(t)$ dans la zone de champ $\vec{B} = B_0 \vec{e}_z$) subit une force de Laplace non nulle. Les autres segments sont soit hors du champ ($\vec{B} = \vec{0}$), soit parcourus par des forces qui se compensent (pour les parties à cheval sur la frontière $x=0$, par symétrie du dispositif si l'on néglige les effets de bord fins).

La force de Laplace sur le segment $BC$ s'écrit :
$$\vec{F}_{\text{Laplace}} = \int_{\text{segment } BC} I \, \text{d}\vec{\ell} \wedge \vec{B}$$

Avec $\text{d}\vec{\ell} = -\text{d}y \, \vec{e}_y$ (le long du segment orienté de $C$ vers $B$) et $\vec{B} = B_0 \vec{e}_z$ :
$$\vec{F}_{\text{Laplace}} = I \int_{0}^{a} (-\text{d}y \, \vec{e}_y) \wedge (B_0 \vec{e}_z) = I \, a \, B_0 (-\vec{e}_x)$$

En remplaçant $I$ par $\frac{e(t)}{R} = -\frac{B_0 a v}{R}$ :
$$\vec{F}_{\text{Laplace}} = -\frac{B_0^2 a^2 v(t)}{R} \vec{e}_x$$

Appliquons le Théorème de la Résultante Cinétique (TRC) au cadre dans le référentiel galiléen du laboratoire :
$$m \frac{\text{d}\vec{v}}{\text{d}_t} = \vec{F}_{\text{Laplace}}$$

En projection sur l'axe $\vec{e}_x$ :
$$m \frac{\text{d}v}{\text{d}t} = -\frac{B_2^0 a^2}{R} v(t)$$

On met cette équation sous la forme canonique :
$$\frac{\text{d}v}{\text{d}t} + \frac{v(t)}{\tau} = 0$$

où l'on a introduit le temps caractéristique du freinage électromagnétique :
$$\tau = \frac{m R}{B_0^2 a^2}$$

#### 4. Résolution et étude du mouvement

La résolution de l'équation différentielle linéaire du premier ordre avec la condition initiale $v(0) = v_0$ donne :
$$v(t) = v_0 \exp\left(-\frac{t}{\tau}\right)$$

Pour obtenir la position $x(t)$ durant cette phase de pénétration ($0 < x(t) < a$), on intègre la vitesse par rapport au temps en sachant qu'à $t=0$, $x(0) = 0$ :
$$x(t) = \int_{0}^{t} v(u) \, \text{d}u = v_0 \tau \left( 1 - \exp\left(-\frac{t}{\tau}\right) \right)$$

* **Vérification / Discussion :** Lorsque $t \to +\infty$ (si la zone $x>0$ est infinie et que le cadre ne ralentit pas assez vite pour s'arrêter avant d'être totalement entré), la position maximale d'immersion partielle tend vers $x_{\max} = v_0 \tau$. Si $v_0 \tau < a$, le cadre ralentit et s'arrête avant même d'avoir complètement pénétré dans la zone de champ magnétique.