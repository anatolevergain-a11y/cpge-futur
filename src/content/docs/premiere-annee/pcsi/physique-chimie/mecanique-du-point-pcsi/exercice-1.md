---
title: 'Exercice 1 : Lois de Newton et moment cinétique'
description: 'Problème d entraînement type concours pour PCSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le problème s'intéresse à la modélisation dynamique de la phase de propulsion d'un projectile de masse $m$ dans un tube de lancement horizontal, puis à son mouvement ultérieur dans un champ de pesanteur uniforme. L'objectif est d'appliquer le principe fondamental de la dynamique (PFD) ainsi que le théorème du moment cinétique, tout en discutant des limites des modèles choisis.

On se place dans un référentiel terrestre $\mathcal{R}$, supposé galiléen, muni d'un repère cartésien orthonormé direct $(O, \vec{u}_x, \vec{u}_y, \vec{u}_z)$, où l'axe $(O, \vec{u}_z)$ est vertical ascendant, et l'axe $(O, \vec{u}_x)$ est horizontal, orienté dans le sens du lancement. Le champ de pesanteur est $\vec{g} = -g \vec{u}_z$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Phase de propulsion (Modèle idéal sans frottement) :**
   Le projectile est assimilé à un point matériel $M$ de masse $m$. Il est soumis à l'intérieur d'un canon horizontal de longueur $L$ à une force motrice constante $\vec{F}_m = F_0 \vec{u}_x$ (avec $F_0 > 0$). Le projectile part du repos en $x(0) = 0$ à l'instant $t = 0$.
   Établir l'expression de la vitesse $v_E$ du projectile à la sortie du canon ($x = L$).

2. **Phase de propulsion (Modèle réaliste avec frottements fluides) :**
   On prend désormais en compte une force de frottement de l'air à l'intérieur du canon de la forme $\vec{f} = -k \vec{v}$, où $\vec{v}$ est la vitesse du point $M$ et $k une constante positive$.
   Établir l'équation différentielle vérifiée par la composante $v_x(t)$ de la vitesse. Intégrer cette équation pour exprimer $v_x(t)$ en fonction du temps, sachant qu'en $t=0$, $v_x(0) = 0$.

3. **Mouvement ultérieur (Vol libre) :**
   À l'instant $t_s$ où le projectile quitte le canon (que l'on assimile à l'origine spatiale $O$ pour cette nouvelle phase à $t'=0$), sa vitesse est $\vec{v}(0) = v_0 \vec{u}_x$. Le projectile est alors uniquement soumis à son poids $\vec{g} = -g \vec{u}_z$ (on néglige l'action de l'air).
   En appliquant le PFD, déterminer les équations horaires du mouvement $x(t')$ et $z(t')$. En déduire l'équation de la trajectoire $z(x)$.

4. **Étude du moment cinétique :**
   Toujours pendant la phase de vol libre, calculer le moment cinétique $\vec{L}_O(t')$ du projectile par rapport au point d'origine $O$. 
   En déduire le moment de la force subie par le projectile par rapport à $O$ et vérifier le théorème du moment cinétique.

5. **Analyse critique du modèle :**
   Le modèle de la pesanteur uniforme et de l'absence de frottement est-il valide pour un projectile parcourant une distance horizontale de $10\text{ km}$ avec une vitesse initiale de $1000\text{ m}\cdot\text{s}^{-1}$ ? Justifier quantitativement en citant les limites physiques.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Utilisez directement la deuxième loi de Newton (PFD) en projection sur l'axe $(O, \vec{u}_x)$, puis une intégration simple ou le théorème de l'énergie cinétique.
* **Question 2 :** L'équation différentielle obtenue est linéaire du premier ordre à coefficients constants. Pensez à introduire le temps caractéristique $\tau = m/k$.
* **Question 3 :** La projection vectorielle du PFD donne immédiatement la nature du mouvement sur chaque axe (uniformément accéléré selon $z$, rectiligne uniforme selon $x$). Éliminez ensuite le temps pour trouver $z(x)$.
* **Question 4 :** Par définition, $\vec{L}_O = \vec{OM} \wedge \vec{p}$. Pour le théorème du moment cinétique, calculez $\mathcal{M}_O(\vec{F}) = \vec{OM} \wedge \vec{F}$ et comparez avec $\frac{d\vec{L}_O}{dt}$.
* **Question 5 :** Évaluez l'ordre de grandeur de la portée face au rayon de la Terre, et rappelez l'influence de la force de frottement fluide (souvent en $v^2$ à haute vitesse).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Phase de propulsion (Modèle idéal)
Dans le référentiel $\mathcal{R}$ galiléen, le système {projectile} de masse $m$ est soumis à :
* La force motrice $\vec{F}_m = F_0 \vec{u}_x$
* Son poids $\vec{G} = -mg \vec{u}_z$
* La réaction normale du support du canon $\vec{N}$ (qui compense le poids et les éventuels contraintes transverses).

Le PFD s'écrit :
$$\sum \vec{F} = \vec{F}_m + m\vec{g} + \vec{N} = m \frac{d\vec{v}}{dt}$$

En projetant selon l'axe horizontal $\vec{u}_x$ :
$$F_0 = m \frac{dv_x}{dt}$$

Puisque l'accélération $a_x = \frac{F_0}{m}$ est constante, on intègre par rapport au temps avec $v_x(0) = 0$ :
$$v_x(t) = \frac{F_0}{m} t$$

Pour trouver la vitesse $v_E$ à la sortie du canon en $x=L$, on utilise la relation indépendante du temps (ou théorème de l'énergie cinétique) :
$$v_x \frac{dv_x}{dx} = \frac{dv_x}{dt} = \frac{F_0}{m} \implies v_x \, dv_x = \frac{F_0}{m} \, dx$$
En intégrant entre $x=0$ ($v=0$) et $x=L$ ($v=v_E$) :
$$\frac{1}{2} v_E^2 = \frac{F_0}{m} L \implies v_E = \sqrt{\frac{2F_0 L}{m}}$$

---

#### 2. Phase de propulsion avec frottements
Avec la force de frottement $\vec{f} = -k \vec{v}$, le PFD projeté sur l'axe $\vec{u}_x$ devient :
$$F_0 - k v_x = m \frac{dv_x}{dt} \implies \frac{m}{k} \frac{dv_x}{dt} + v_x = \frac{F_0}{k}$$

En posant $\tau = \frac{m}{k}$ (temps caractéristique) et $v_{\text{lim}} = \frac{F_0}{k}$ (vitesse limite), l'équation différentielle s'écrit :
$$\tau \frac{dv_x}{dt} + v_x = v_{\text{lim}}$$

La solution générale est la somme d'une solution homogène et d'une solution particulière :
$$v_x(t) = A e^{-t/\tau} + v_{\text{lim}}$$

À l'aide de la condition initiale $v_x(0) = 0$, on obtient $A = -v_{\text{lim}}$. D'où :
$$v_x(t) = v_{\text{lim}} \left(1 - e^{-t/\tau}\right) = \frac{F_0}{k} \left(1 - e^{-\frac{kt}{m}}\right)$$

---

#### 3. Mouvement ultérieur (Vol libre)
À $t'=0$, le projectile quitte le canon avec $\vec{v}(0) = v_0 \vec{u}_x$ et $\vec{OM}(0) = \vec{0}$. La seule force agissant est le poids $\vec{P} = -mg \vec{u}_z$.
Le PFD donne :
$$m \frac{d^2\vec{OM}}{dt'^2} = -mg \vec{u}_z$$

Par double intégration temporelle avec les conditions initiales :
* Suivant $\vec{u}_x$ : $\frac{dx}{dt'} = v_0 \implies x(t') = v_0 t'$
* Suivant $\vec{u}_z$ : $\frac{dz}{dt'} = -g t' \implies z(t') = -\frac{1}{2} g t'^2$

En éliminant le temps $t' = \frac{x}{v_0}$ dans l'expression de $z(t')$, on obtient l'équation de la trajectoire (parabole de Galileo) :
$$z(x) = -\frac{g}{2v_0^2} x^2$$

---

#### 4. Étude du moment cinétique
Le moment cinétique par rapport à l'origine $O$ est défini par :
$$\vec{L}_O(t') = \vec{OM}(t') \wedge \vec{p}(t')$$
Avec $\vec{OM}(t') = x(t')\vec{u}_x + z(t')\vec{u}_z = v_0 t' \vec{u}_x - \frac{1}{2}gt'^2 \vec{u}_z$ et $\vec{p}(t') = m \vec{v}(t') = m(v_0 \vec{u}_x - g t' \vec{u}_z)$.

Calculons le produit vectoriel :
$$\vec{L}_O(t') = \left( v_0 t' \vec{u}_x - \frac{1}{2}gt'^2 \vec{u}_z \right) \wedge \left( m v_0 \vec{u}_x - m g t' \vec{u}_z \right)$$
$$\vec{L}_O(t') = -v_0 t' (mg t') (\vec{u}_x \wedge \vec{u}_z) - \left(-\frac{1}{2}gt'^2\right) (m v_0) (\vec{u}_z \wedge \vec{u}_x)$$
Sachant que $\vec{u}_x \wedge \vec{u}_z = -\vec{u}_y$ et $\vec{u}_z \wedge \vec{u}_x = \vec{u}_y$ :
$$\vec{L}_O(t') = m v_0 g t'^2 \vec{u}_y - \frac{1}{2} m g v_0 t'^2 \vec{u}_y = \frac{1}{2} m g v_0 t'^2 \vec{u}_y$$

Le théorème du moment cinétique s'énonce :
$$\frac{d\vec{L}_O}{dt'} = \mathcal{M}_O(\vec{P}) = \vec{OM} \wedge \vec{P}$$
Calculons directement le moment de la force :
$$\mathcal{M}_O(\vec{P}) = \left( v_0 t' \vec{u}_x - \frac{1}{2}gt'^2 \vec{u}_z \right) \wedge (-mg \vec{u}_z) = -v_0 t' (-mg) (\vec{u}_x \wedge \vec{u}_z) = m g v_0 t' (-\vec{u}_y)$$
*Erreur de signe redressée par dérivation directe :*
Dérivons l'expression trouvée pour $\vec{L}_O(t')$ :
$$\frac{d\vec{L}_O}{dt'} = \frac{d}{dt'} \left( \frac{1}{2} m g v_0 t'^2 \right) \vec{u}_y = m g v_0 t' \vec{u}_y$$
Le calcul direct du moment de la force donne : $\vec{OM} \wedge (-mg\vec{u}_z) = -mg v_0 t' (\vec{u}_x \wedge \vec{u}_z) = mg v_0 t' \vec{u}_y$. 
Le théorème du moment cinétique est donc vérifié : $\frac{d\vec{L}_O}{dt'} = \mathcal{M}_O(\vec{P})$.

---

#### 5. Analyse critique du modèle
Pour un projectile parcourant $10\text{ km}$ avec $v_0 = 1000\text{ m}\cdot\text{s}^{-1}$ :
1. **Champ de pesanteur uniforme :** La portée est de l'ordre de $10\text{ km}$, ce qui est petit devant le rayon de la Terre ($R_T \approx 6400\text{ km}$). L'hypothèse d'un champ de pesanteur uniforme $\vec{g}$ reste tout à fait acceptable, les variations de direction de $\vec{g}$ étant de l'ordre de $\frac{10}{6400} \approx 0{,}15\%$.
2. **Frottements fluides :** À $v_0 = 1000\text{ m}\cdot\text{s}^{-1}$, la vitesse dépasse la vitesse du son dans l'air ($c \approx 340\text{ m}\cdot\text{s}^{-1}$). Le régime d'écoulement n'est plus linéaire ($\vec{f} = -k\vec{v}$), mais quadratique ($\vec{f} = -\alpha v \vec{v}$), et les effets compressifs (ondes de choc) modifient considérablement la résistance de l'air. Négliger les frottements sur $10\text{ km}$ conduirait à une erreur majeure sur la portée (la portée réelle serait très nettement inférieure aux prévisions théoriques). Le modèle de chute libre est donc **invalide** pour cette application.