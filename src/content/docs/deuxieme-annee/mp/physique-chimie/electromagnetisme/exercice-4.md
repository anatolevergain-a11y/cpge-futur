---
title: 'Exercice 2 : Propagation des ondes électromagnétiques dans le vide'
description: 'Problème d entraînement type concours pour MP.'
---

### 🌐 Énoncé du problème / Étude de cas

On s'intéresse à la modélisation de la propagation d'ondes électromagnétiques monochromatiques planes se propageant dans le vide. Ce modèle fondamental, bien qu'idéalisé, constitue la base de l'étude des télécommunications hertziennes, de l'optique ondulatoire et de la radionavigation.

Dans tout le problème, on se place dans un référentiel galiléen $\mathcal{R}$ muni d'un repère cartésien orthonormal $(O, \vec{u}_x, \vec{u}_y, \vec{u}_z)$. Le vide est caractérisé par sa permittivité diélectrique $\varepsilon_0$ et sa perméabilité magnétique $\mu_0$, reliées à la vitesse de la lumière dans le vide $c$ par la relation $c^2 \varepsilon_0 \mu_0 = 1$. 

L'étude se focalise sur une onde plane polarisée rectilignement, dont le champ électrique est décrit, pour tout point $M$ de coordonnées $(x,y,z)$ et à tout instant $t$, par :
$$\vec{E}(M, t) = E_0 \cos(\omega t - k z) \vec{u}_x$$
où $E_0 >itekten$, $\omega$ est la pulsation de l'onde et $k$ son vecteur d'onde normé.

---

### ❓ Questions progressives

1. **Rappels des équations de Maxwell :** 
   Écrire les équations de Maxwell locales dans le vide en l'absence de charges et de courants macroscopiques. Préciser les significations physiques des opérateurs différentiels utilisés.

2. **Équation d'onde :**
   À l'aide des équations de Maxwell, établir l'équation aux dérivées partielles vérifiée par le champ électrique $\vec{E}(M, t)$ dans le vide. En déduire la relation liant la pulsation $\omega$, le nombre d'onde $k$ et la célérité $c$.

3. **Structure du champ magnétique :**
   Déterminer l'expression du champ magnétique $\vec{B}(M, t)$ associé à $\vec{E}(M, t)$ en utilisant l'une des équations de Maxwell. Préciser la relation géométrique instantanée entre $\vec{E}$, $\vec{B}$ et le vecteur d'onde $\vec{k} = k \vec{u}_z$.

4. **Aspects énergétiques et vecteur de Poynting :**
   Définir le vecteur de Poynting $\vec{\Pi}$ représentant le flux surfacique d'énergie électromagnétique. Calculer sa valeur moyenne temporelle $\langle \vec{\Pi} \rangle$ sur une période. 

5. **Analyse critique et limites du modèle de l'onde plane monochromatique :**
   - *Application numérique :* Calculer la valeur efficace du champ électrique et l'intensité moyenne transportée pour une onde électromagnétique sinusoïdale dont l'amplitude maximale du champ électrique est $E_0 = 6,0 \times 10^1 \, \text{V}\cdot\text{m}^{-1}$ (ordre de grandeur typique d'un signal reçu par une antenne relais de téléphonie mobile à grande distance).
   - *Critique du modèle :* En pratique, une onde réelle se propageant à partir d'une source locale est-elle rigoureusement plane et monochromatique ? Discuter brièvement des approximations de ce modèle.

---

### 💡 Pistes & Indications

- **Q2 :** Utiliser l'identité vectorielle $\text{rot}(\text{rot} \vec{V}) = \text{grad}(\text{div} \vec{V}) - \Delta \vec{V}$ sachant que $\text{div} \vec{E} = 0$ dans le vide sans charges.
- **Q3 :** L'équation de Maxwell-Faraday relie le rotationnel du champ électrique à la dérivée temporelle du champ magnétique. Une intégration temporelle simple (en posant la constante d'intégration nulle pour éliminer un champ électrostatique permanent) permet de conclure.
- **Q4 :** Le vecteur de Poynting est donné par $\vec{\Pi} = \frac{1}{\mu_0} \vec{E} \wedge \vec{B}$. Pour la moyenne temporelle, utiliser $\langle \cos^2(\theta) \rangle = \frac{1}{2}$.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Équations de Maxwell dans le vide
Dans le vide (pas de charges libres $\rho = 0$, pas de courants libres $\vec{j} = \vec{0}$), les équations de Maxwell s'écrivent :
- Maxwell-Gauss : $\text{div} \vec{E} = 0$
- Maxwell-Thomson (flux magnétique conservatif) : $\text{div} \vec{B} = 0$
- Maxwell-Faraday : $\text{rot} \vec{E} = -\frac{\partial \vec{B}}{\partial t}$
- Maxwell-Ampère : $\text{rot} \vec{B} = \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$

#### 2. Équation d'onde
En appliquant l'opérateur rotationnel à l'équation de Maxwell-Faraday :
$$\text{rot}(\text{rot} \vec{E}) = -\frac{\partial}{\partial t}(\text{rot} \vec{B})$$
En remplaçant $\text{rot} \vec{B}$ par l'expression de Maxwell-Ampère et en utilisant l'identité vectorielle $\text{rot}(\text{rot} \vec{E}) = \text{grad}(\text{div} \vec{E}) - \Delta \vec{E}$ :
$$\text{grad}(\text{div} \vec{E}) - \Delta \vec{E} = -\mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}$$
Puisque $\text{div} \vec{E} = 0$ dans le vide, il vient l'équation de d'Alembert :
$$\Delta \vec{E} - \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0}$$

Pour $\vec{E}(M, t) = E_0 \cos(\omega t - kz) \vec{u}_x$, on a $\Delta \vec{E} = \frac{\partial^2 E_x}{\partial z^2} \vec{u}_x = -k^2 E_0 \cos(\omega t - kz) \vec{u}_x$ et $\frac{\partial^2 \vec{E}}{\partial t^2} = -\omega^2 E_0 \cos(\omega t - kz) \vec{u}_x$.
En injectant dans l'équation d'onde :
$$-k^2 + \mu_0 \varepsilon_0 \omega^2 = 0 \implies \frac{\omega}{k} = \frac{1}{\sqrt{\mu_0 \varepsilon_0}} = c$$

#### 3. Structure du champ magnétique
D'après l'équation de Maxwell-Faraday $\text{rot} \vec{E} = -\frac{\partial \vec{B}}{\partial t}$ :
$$\text{rot} \vec{E} = \begin{vmatrix} \vec{u}_x & \vec{u}_y & \vec{u}_z \\ \partial_x & \partial_y & \partial_z \\ E_x & 0 & 0 \end{vmatrix} = \frac{\partial E_x}{\partial z} \vec{u}_y = k E_0 \sin(\omega t - kz) \vec{u}_y$$
On intègre par rapport au temps (en négligeant le champ magnétique stationnaire) :
$$\vec{B}(M, t) = \frac{k}{\omega} E_0 \cos(\omega t - kz) \vec{u}_y = \frac{E_0}{c} \cos(\omega t - kz) \vec{u}_y$$
On en déduit la relation structurelle locale : $\vec{B} = \frac{1}{c} \vec{u}_z \wedge \vec{E}$, ce qui montre que le trièdre $(\vec{E}, \vec{B}, \vec{k})$ est direct et orthnormé à tout instant.

#### 4. Vecteur de Poynting et intensité
Le vecteur de Poynting s'exprime par :
$$\vec{\Pi} = \frac{1}{\mu_0} \vec{E} \wedge \vec{B} = \frac{1}{\mu_0} \left( E_0 \cos(\omega t - kz) \vec{u}_x \right) \wedge \left( \frac{E_0}{c} \cos(\omega t - kz) \vec{u}_y \right) = \frac{E_0^2}{\mu_0 c} \cos^2(\omega t - kz) \vec{u}_z$$
La moyenne temporelle sur une période $T = \frac{2\pi}{\omega}$ utilise $\langle \cos^2(\omega t - kz) \rangle = \frac{1}{2}$ :
$$\langle \vec{\Pi} \rangle = \frac{E_0^2}{2 \mu_0 c} \vec{u}_z$$

#### 5. Analyse critique et limites du modèle
- *Application numérique :* 
  Avec $E_0 = 6,0 \times 10^1 \, \text{V}\cdot\text{m}^{-1}$, $\mu_0 = 4\pi \times 10^{-7} \, \text{H}\cdot\text{m}^{-1}$ et $c \approx 3,00 \times 10^8 \, \text{m}\cdot\text{s}^{-1}$ :
  - Valeur efficace du champ électrique : $E_{\text{eff}} = \frac{E_0}{\sqrt{2}} \approx 4,2 \times 10^1 \, \text{V}\cdot\text{m}^{-1}$
  - Intensité moyenne (norme du vecteur de Poynting moyen) :
    $$I = \|\langle \vec{\Pi} \rangle\| = \frac{(6,0 \times 10^1)^2}{2 \times (4\pi \times 10^{-7}) \times (3,00 \times 10^8)} \approx \frac{3600}{7,54 \times 10^2} \approx 4,8 \, \text{W}\cdot\text{m}^{-2}$$
- *Critique du modèle :* 
  L'hypothèse d'une **onde plane** implique une puissance infinie rayonnée (car l'intensité est uniforme sur tout un plan infini). Dans la réalité, les sources réelles (antennes, lasers) sont finies et génèrent des ondes sphériques ou des faisceaux gaussiens dont l'amplitude décroît avec la distance (en $1/r$ en champ lointain pour une source ponctuelle). De plus, l'hypothèse **monochromatique** est mathématiquement irréalisable car elle supposerait un signal d'une durée de vie infinie sans modulation d'information possible. Tout signal réel possède un spectre étalé (largeur de bande $\Delta \nu$). Ce modèle reste néanmoins une excellente approximation locale (dans un volume restreint comparé au rayon de courbure des fronts d'onde).