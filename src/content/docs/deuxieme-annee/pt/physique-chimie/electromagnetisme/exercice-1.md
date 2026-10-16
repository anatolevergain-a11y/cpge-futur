---
title: 'Exercice 1 : Champ électromagnétique et équations de Maxwell'
description: 'Problème d entraînement type concours pour PT.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On se place dans le cadre de l'approximation des régimes quasi-stationnaires (ARQS) ou en régime général, dans le vide ou au sein de milieux matériels. L'objectif de ce problème est d'étudier la propagation et la structure d'un champ électromagnétique cylindrique, modélisant par exemple le champ créé par un câble coaxial infini ou une structure guidée simplifiée.

On considère un système de coordonnées cylindriques $(r, \theta, z)$ de base locale $(\vec{u}_r, \vec{u}_\theta, \vec{u}_z)$. 
Le champ magnétique régnant dans une région de l'espace est donné par :
$$\vec{B}(r, t) = B_0 \, f(t) \, \frac{a}{r} \, \vec{u}_\theta$$
où $B_0$ est une constante positive, $a$ une longueur caractéristique, et $f(t)$ une fonction du temps, continûment dérivable, sans dimension. On note $\mu_0$ la perméabilité magnétique du vide et $\varepsilon_0$ la perméabilité électrique du vide.

---

### ❓ Questions progressives

1. **Analyse des symétries et invariance :** En déduire les invariances et les symétries du champ $\vec{B}$, puis justifier la forme choisie pour la dépendance en $r$ et $\theta$.
2. **Équations de Maxwell - Induction :** À l'aide de l'équation de Maxwell-Faraday, déterminer le champ électrique $\vec{E}(r, t)$ associé à $\vec{B}(r, t)$, en supposant qu'il ne possède qu'une composante selon $\vec{u}_z$ (on posera la condition de jauge ou une condition aux limites telle que $\vec{E}$ s'annule à l'infini ou en $r=a$).
3. **Densité de courant :** Dans la région étudiée, on suppose qu'il n'y a pas de charges libres ($\rho = 0$), mais qu'il existe une densité de courant $\vec{j}$. En appliquant l'équation de Maxwell-Ampère, exprimer la densité de courant $\vec{j}(r, t)$.
4. **Bilan énergétique et Poynting :** Déterminer le vecteur de Poynting $\vec{\Pi}$ associé à ce champ électromagnétique. Calculer le flux de ce vecteur à travers une surface cylindrique de rayon $r$ et de hauteur $h$ centrée sur l'axe $z$. Interpréter physiquement le résultat.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pensez à relier les coordonnées cylindriques aux opérations différentielles usuelles (rotationnel, divergence). Utilisez l'invariance par translation selon $z$ et la symétrie de révolution autour de l'axe $(Oz)$.
* **Question 2 :** L'équation de Maxwell-Faraday s'écrit $\text{rot}(\vec{E}) = -\frac{\partial \vec{B}}{\partial t}$. Exprimez le rotationnel en coordonnées cylindriques en ne gardant que les termes non nuls. Une simple intégration par rapport à $r$ permettra d'obtenir $\vec{E}$.
* **Question 3 :** L'équation de Maxwell-Ampère dans le cas général est $\text{rot}(\vec{B}) = \mu_0 \vec{j} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$. Calculez le rotationnel de $\vec{B}$, puis déduisez-en $\vec{j}$ en tenant compte du terme de courant de déplacement si nécessaire.
* **Question 4 :** Le vecteur de Poynting est défini par $\vec{\Pi} = \frac{1}{\mu_0} \vec{E} \land \vec{B}$. Pour le flux à travers un cylindre fermé, calculez l'intégrale sur la surface latérale (les flux sur les bases supérieure et inférieure s'annulent par symétrie/invariance).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Analyse des symétries et invariance
Le champ magnétique est exprimé sous la forme $\vec{B}(r, t) = B_0 f(t) \frac{a}{r} \vec{u}_\theta$.
* **Invariances :** Le champ ne dépend ni de la coordoonnée $z$ (invariance par translation le long de l'axe $Oz$) ni de la coordoonnée $\theta$ (invariance par rotation autour de l'axe $Oz$).
* **Symétries :** Le plan méridien $(\text{M}, \vec{u}_r, \vec{u}_z)$ est un plan de antisymétrie pour le champ magnétique $\vec{B}$ (qui est un pseudovecteur), ce qui impose que $\vec{B}$ soit orthogonal à ce plan, c'est-à-dire porté par $\vec{u}_\theta$. 
La forme en $1/r$ est caractéristique d'un champ créé par un fil infini porteur d'un courant selon le théorème d'Ampère (en régime stationnaire).

#### 2. Détermination du champ électrique $\vec{E}$ via Maxwell-Faraday
L'équation de Maxwell-Faraday s'écrit :
$$\vec{\text{rot}}(\vec{E}) = -\frac{\partial \vec{B}}{\partial t}$$

Exprimons le rotationnel de $\vec{E}$ en coordonnées cylindriques, en sachant que $\vec{E} = E_z(r, t)\,\vec{u}_z$ (par hypothèse de l'énoncé) :
$$\vec{\text{rot}}(\vec{E}) = \left( \frac{1}{r} \frac{\partial E_z}{\partial \theta} - \frac{\partial E_\theta}{\partial z} \right) \vec{u}_r + \left( \frac{\partial E_r}{\partial z} - \frac{\partial E_z}{\partial r} \right) \vec{u}_\theta + \frac{1}{r} \left( \frac{\partial (r E_\theta)}{\partial r} - \frac{\partial E_r}{\partial \theta} \right) \vec{u}_z$$

Puisque $E_r = 0$, $E_\theta = 0$ et que $E_z$ ne dépend pas de $\theta$ :
$$\vec{\text{rot}}(\vec{E}) = -\frac{\partial E_z}{\partial r} \vec{u}_\theta$$

D'autre part, la dérivée temporelle de $\vec{B}$ vaut :
$$\frac{\partial \vec{B}}{\partial t} = B_0 \frac{df(t)}{dt} \frac{a}{r} \vec{u}_\theta$$

En identifiant les deux expressions selon $\vec{u}_\theta$ :
$$-\frac{\partial E_z}{\partial r} = -B_0 \frac{df(t)}{dt} \frac{a}{r} \implies \frac{\partial E_z}{\partial r} = B_0 a \dot{f}(t) \frac{1}{r}$$
où $\dot{f}(t) = \frac{df}{dt}$.

En intégrant par rapport à $r$ :
$$E_z(r, t) = B_0 a \dot{f}(t) \ln\left(\frac{r}{r_0}\right)$$
Si l'on impose une condition physique de régularité ou une référence (par exemple $E_z(a, t) = 0$), on obtient :
$$\vec{E}(r, t) = B_0 a \dot{f}(t) \ln\left(\frac{r}{a}\right) \vec{u}_z$$

#### 3. Détermination de la densité de courant $\vec{j}$
L'équation de Maxwell-Ampère s'écrit :
$$\vec{\text{rot}}(\vec{B}) = \mu_0 \vec{j} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$$

Calculons d'abord $\vec{\text{rot}}(\vec{B})$ en coordonnées cylindriques pour $\vec{B} = B_\theta(r, t)\,\vec{u}_\theta$ :
$$\vec{\text{rot}}(\vec{B}) = \frac{1}{r} \frac{\partial (r B_\theta)}{\partial r} \vec{u}_z$$
Ici, $r B_\theta(r, t) = B_0 a f(t)$, qui ne dépend pas de $r$. Par conséquent :
$$\vec{\text{rot}}(\vec{B}) = \vec{0}$$

L'équation de Maxwell-Ampère devient alors :
$$\vec{0} = \mu_0 \vec{j} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t} \implies \vec{j} = -\varepsilon_0 \frac{\partial \vec{E}}{\partial t}$$

En dérivant le champ $\vec{E}$ obtenu à la question 2 par rapport au temps :
$$\frac{\partial \vec{E}}{\partial t} = B_0 a \ddot{f}(t) \ln\left(\frac{r}{a}\right) \vec{u}_z$$

On en déduit la densité de courant (qui est un courant de déplacement macroscopique ou une composante de courant liée à la variation temporelle du champ) :
$$\vec{j}(r, t) = -\varepsilon_0 B_0 a \ddot{f}(t) \ln\left(\frac{r}{a}\right) \vec{u}_z \text{ (\text{A}\cdot\text{m}^{-2})}$$

#### 4. Vecteur de Poynting et bilan énergétique
Le vecteur de Poynting $\vec{\Pi}$ est défini par :
$$\vec{\Pi} = \frac{1}{\mu_0} \vec{E} \land \vec{B}$$

Effectuons le produit vectoriel :
$$\vec{\Pi} = \frac{1}{\mu_0} \left[ E_z \vec{u}_z \land B_\theta \vec{u}_\theta \right] = \frac{1}{\mu_0} E_z B_\theta (-\vec{u}_r)$$

En remplaçant $E_z$ et $B_\theta$ :
$$\vec{\Pi}(r, t) = -\frac{1}{\mu_0} \left( B_0 a \dot{f}(t) \ln\left(\frac{r}{a}\right) \right) \left( B_0 f(t) \frac{a}{r} \right) \vec{u}_r$$
$$\vec{\Pi}(r, t) = -\frac{B_0^2 a^2}{\mu_0 r} f(t) \dot{f}(t) \ln\left(\frac{r}{a}\right) \vec{u}_r \text{ (\text{W}\cdot\text{m}^{-2})}$$

Calculons à présent le flux de $\vec{\Pi}$ à travers une surface cylindrique fermée de rayon $r$ et de hauteur $h$. 
* Sur les bases supérieure et subsidiaire (à $z=0$ et $z=h$), le vecteur $\vec{u}_r$ est orthogonal à $\vec{u}_z$, donc le flux à travers ces bases est nul.
* Sur la surface latérale $\mathcal{S}_{\text{lat}}$ de rayon $r$ : $\mathrm{d}\vec{S} = r \, \mathrm{d}\theta \, \mathrm{d}z \, \u_r$.

Le flux total sortant est :
$$\Phi = \iint_{\mathcal{S}_{\text{lat}}} \vec{\Pi} \cdot \mathrm{d}\vec{S} = \int_{0}^{2\pi} \mathrm{d}\theta \int_{0}^{h} \left( -\frac{B_0^2 a^2}{\mu_0 r} f(t) \dot{f}(t) \ln\left(\frac{r}{a}\right) \right) r \, \mathrm{d}z$$
$$\Phi = -2\pi h \frac{B_0^2 a^2}{\mu_0} f(t) \dot{f}(t) \ln\left(\frac{r}{a}\right)$$

* **Interprétation physique :** Ce flux non nul représente la puissance électromagnétique traversant la surface cylindrique par unité de temps. Il traduit le transfert d'énergie électromagnétique à travers l'espace (phénomène de propagation ou d'échange énergétique réactif lié à la variation temporelle du signal $f(t)$).