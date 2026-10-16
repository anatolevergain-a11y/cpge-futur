---
title: 'Exercice 1 : Équation de Navier-Stokes'
description: 'Problème d entraînement type concours pour MP.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le présent problème s'intéresse à l'étude de l'écoulement permanent, bidimensionnel et incompressible d'un fluide visqueux newtonien entre deux plaques planes, infinies, horizontales et parallèles, séparées par une distance $h$. Ce modèle d'écoulement, dit de *Couette-Poiseuille plan*, combine un entraînement par cisaillement (mouvement de la plaque supérieure) et un entraînement par gradient de pression (effet de pompe).

On choisit un repère cartésien $(O, \vec{e}_x, \vec{e}_y, \vec{e}_z)$ tel que :
- La plaque inférieure immobile est située dans le plan $y = 0$.
- La plaque supérieure, animée d'une vitesse constante $V_0 \vec{e}_x$, est située dans le plan $y = h$.
- L'écoulement est invariant par translation selon l'axe Ox (direction de l'écoulement) et l'axe Oz (direction transverse).

Le fluide est caractérisé par sa masse volumique $\rho$ (constante) et sa viscosité dynamique $\mu$ (constante). L'accélération de la pesanteur est $\vec{g} = -g \vec{e}_y$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Analyse cinématique :** À partir des hypothèses de symétrie et d'invariance du problème, et sachant que le fluide est incompressible ($\text{div}(\vec{v}) = 0$), déterminer la forme générale du champ de vitesse $\vec{v}(x, y, z, t)$.
2. **Simplification des équations de Navier-Stokes :** Écrire l'équation de Navier-Stokes vectorielle pour un fluide incompressible soumis à la pesanteur. En déduire les équations aux dérivées partielles régissant les composantes du champ de vitesse et de la pression $P(x,y,z)$.
3. **Champ de pression :** Montrer que la pression $P$ ne dépend pas de la coordonnée $y$ (à l'altitude près) et que le gradient de pression $\frac{\partial P}{\partial x}$ est une constante négative ou nulle notée $G$.
4. **Profil de vitesse :** Résoudre l'équation différentielle portant sur la composante $v_x(y)$ en tenant compte des conditions aux limites mécaniques (adhérence du fluide aux parois). Exprimer $v_x(y)$ en fonction de $y$, $h$, $\mu$, $V_0$ et $G = -\frac{d P}{d x}$.
5. **Débit volumique :** Exprimer le débit volumique $Q$ par unité de largeur (selon $z$) traversant une section droite de l'écoulement.
6. **Analyse critique et limites du modèle :** 
   - Proposer une grandeur sans dimension caractéristique permettant de quantifier l'importance relative du terme d'entraînement visqueux (Couette) par rapport au terme de gradient de pression (Poiseuille).
   - Discuter brièvement la validité de l'hypothèse d'incompressibilité et du régime laminaire en introduisant le nombre de Reynolds adéquat.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Utilisez l'invariance spatiale (traduite par les dérivées nulles par rapport à certaines coordonnées) et l'équation de continuité pour contraindre la vitesse normale $v_y$ et la vitesse transverse $v_z$.
- **Question 2 & 3 :** Projetez l'équation de Navier-Stokes selon les trois axes cartésiens. L'équation selon $y$ permet d'isoler la variation verticale de la pression en incluant la pesanteur.
- **Question 4 :** C'est une équation différentielle linéaire du second ordre à coefficients constants. Intégrez-la deux fois et utilisez $v_x(0) = 0$ et $v_x(h) = V_0$.
- **Question 5 :** Le débit par unité de largeur est l'intégrale du profil de vitesse entre $y = 0$ et $y = h$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Analyse cinématique
Soit $\vec{v}(x, y, z, t) = v_x(x, y, z, t)\vec{e}_x + v_y(x, y, z, t)\vec{e}_y + v_z(x, y, z, t)\vec{e}_z$ le champ d'Eulérien des vitesses.
- L'écoulement est permanent : $\frac{\partial}{\partial t} = 0$.
- L'écoulement est invariant par translation selon $x$ et $z$ : $\frac{\partial}{\partial x} = 0$ et $\frac{\partial}{\partial z} = 0$.
Par conséquent, toutes les composantes de la vitesse ne dépendent que de la coordonnée $y$ : $\vec{v} = v_x(y)\vec{e}_x + v_y(y)\vec{e}_y + v_z(y)\vec{e}_z$.

L'incompressibilité du fluide se traduit par l'équation de continuité :
$$\text{div}(\vec{v}) = \frac{\partial v_x}{\partial x} + \frac{\partial v_y}{\partial y} + \frac{\partial v_z}{\partial z} = 0$$
En tenant compte des invariances :
$$\frac{\partial v_y}{\partial y} = 0 \implies v_y(y) = \text{cte}$$
Puisque le fluide est imperméable aux parois situées à $y=0$ et $y=h$ (où $v_y = 0$), on en déduit que **$v_y(y) = 0$ partout**.
Par symétrie du problème, il n'y a pas de raison d'avoir un mouvement transverse, donc **$v_z(y) = 0$**.

Le champ de vitesse se réduit donc à :
$$\vec{v}(y) = v_x(y)\vec{e}_x$$

#### 2. Simplification des équations de Navier-Stokes
L'équation de Navier-Stokes pour un fluide newtonien incompressible s'écrit :
$$\rho \left( \frac{\partial \vec{v}}{\partial t} + (\vec{v} \cdot \vec{grad})\vec{v} \right) = -\vec{grad}(P) + \mu \Delta \vec{v} + \rho \vec{g}$$

Evaluons chaque terme :
- Terme d'accélération convective : $(\vec{v} \cdot \vec{grad})\vec{v} = v_x \frac{\partial v_x}{\partial x} \vec{e}_x = \vec{0}$ (car $\frac{\partial}{\partial x} = 0$ et $v_y = v_z = 0$).
- Terme de forces de volume : $\rho \vec{g} = -\rho g \vec{e}_y$.
- Terme de diffusion visqueuse : $\Delta \vec{v} = \frac{d^2 v_x}{d y^2} \vec{e}_x$.

La projection sur les trois axes donne :
- Sur $\vec{e}_x$ : $0 = -\frac{\partial P}{\partial x} + \mu \frac{d^2 v_x}{d y^2}$
- Sur $\vec{e}_y$ : $0 = -\frac{\partial P}{\partial y} - \rho g$
- Sur $\vec{e}_z$ : $0 = -\frac{\partial P}{\partial z}$

#### 3. Champ de pression
D'après l'équation projetée sur $\vec{e}_y$ :
$$\frac{\partial P}{\partial y} = -\rho g \implies P(x, y, z) = -\rho g y + f(x, z)$$
D'après l'équation projetée sur $\vec{e}_z$ :
$$\frac{\partial P}{\partial z} = \frac{\partial f}{\partial z} = 0 \implies f(x, z) = f(x)$$
Ainsi, $P(x, y) = -\rho g y + P_0(x)$. 
En injectant dans l'équation selon $\vec{e}_x$ :
$$\frac{\partial P}{\partial x} = \frac{d P_0}{d x} = \mu \frac{d^2 v_x}{d y^2}$$
Puisque le membre de gauche ne dépend que de $x$ et le membre de droite ne dépend que de $y$, cette quantité est nécessairement une constante, notée $-G$ (avec $G = -\frac{dP_0}{dx}$ représentant la chute de pression motrice par unité de longueur) :
$$\frac{d P_0}{d x} = -G \implies \frac{d^2 v_x}{d y^2} = -\frac{G}{\mu}$$

#### 4. Profil de vitesse
L'équation différentielle à résoudre est :
$$\frac{d^2 v_x}{d y^2} = -\frac{G}{\mu}$$
Par intégration successives par rapport à $y$ :
$$\frac{d v_x}{d y} = -\frac{G}{\mu} y + C_1$$
$$v_x(y) = -\frac{G}{2\mu} y^2 + C_1 y + C_2$$

Appliquons les conditions aux limites d'adhérence visqueuse (vitesse du fluide égale à celle des parois) :
1. En $y = 0$ (plaque fixe) : $v_x(0) = 0 \implies C_2 = 0$.
2. En $y = h$ (plaque mobile à $V_0$) : $v_x(h) = V_0 \implies -\frac{G}{2\mu} h^2 + C_1 h = V_0 \implies C_1 = \frac{V_0}{h} + \frac{Gh}{2\mu}$.

Le profil de vitesse complet est donc :
$$v_x(y) = \frac{V_0}{h} y + \frac{G}{2\mu} y(h - y)$$
Remarque: * On retrouve la superposition d'un profil de Couette pur ($\frac{V_0}{h}y$) et d'un profil de Poiseuille pur ($\frac{G}{2\mu}y(h-y)$).

#### 5. Débit volumique
Le débit volumique $Q$ par unité de largeur (selon l'axe $Oz$) est défini par :
$$Q = \int_{0}^{h} v_x(y) \, dy$$
Calculons cette intégrale :
$$Q = \int_{0}^{h} \left[ \frac{V_0}{h} y + \frac{G}{2\mu} (hy - y^2) \right] dy$$
$$Q = \left[ \frac{V_0}{2h} y^2 + \frac{G}{2\mu} \left( \frac{h}{2}y^2 - \frac{1}{3}y^3 \right) \right]_{0}^{h}$$
$$Q = \frac{V_0 h}{2} + \frac{G h^3}{2\mu} \left( \frac{1}{2} - \frac{1}{3} \right) = \frac{V_0 h}{2} + \frac{G h^3}{12 \mu}$$

#### 6. Analyse critique et limites du modèle
- **Grandeur sans dimension (Nombre de Couette/Poiseuille) :** 
  On peut comparer le terme d'entraînement visqueux pur $V_0$ au terme induit par le gradient de pression en formant le rapport des vitesses caractéristiques ou via un nombre sans dimension : 
  $$\Pi = \frac{G h^2}{2 \mu V_0}$$
  Si $\Pi \ll 1$, l'écoulement est dominé par l'effet Couette (cisaillement pur). Si $\Pi \gg 1$, l'écoulement est dominé par l'effet Poiseuille (mise en pression).

- **Limites physiques :**
  - **Incompressibilité :** Valable tant que les variations de pression restent faibles devant la pression absolue et que le nombre de Mach associé à l'écoulement ($Ma = V_0 / c \ll 1$, où $c$ est la celerité du son) est respecté.
  - **Régime laminaire :** L'hypothèse stationnaire et unidirectionnelle n'est stable que si le nombre de Reynolds de l'écoulement reste inférieur au seuil de transition critique (généralement $Re = \frac{\rho V_0 h}{\mu} \lesssim 2000$). Au-delà, des instabilités (type Tollmien-Schlichting) mènent à la turbulence.