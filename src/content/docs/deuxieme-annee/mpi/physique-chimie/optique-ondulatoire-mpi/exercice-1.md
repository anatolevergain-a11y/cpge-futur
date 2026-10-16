---
title: 'Exercice 1 : Dispositif des trous d Young et cohérence'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On se place dans le cadre de l'optique ondulatoire. On considère un dispositif d'interférences à deux ondes de type trous d'Young. Une source lumineuse primaire, ponctuelle ou étendue, éclaire un plan percé de deux trous $S_1$ et $S_2$ distants de $a$. Les trous se comportent comme des sources secondaires synchrones et en phase si elles sont issues d'une même source primaire. Un écran d'observation $E$ est placé à une distance $D$ de ces trous, avec $D \gg a$.

L'objectif de ce problème est d'étudier l'influence de la nature de la source (monochromatique ou polychromatique, ponctuelle ou étendue) sur le contraste des franges d'interférence observées sur l'écran.

On note $(O, \vec{u}_x, \vec{u}_y, \vec{u}_z)$ le repère cartésien où le plan des trous est contenu dans le plan $x=0$, les trous étant situés en $S_1(0, -a/2, 0)$ et $S_2(0, a/2, 0)$. L'écran est situé dans le plan $x = D$. Un point $M$ de l'écran a pour coordonnées $(D, y, z)$. On se limitera à l'étude dans la direction $y$ (en posant $z=0$).

---

### ❓ Questions progressives

1. **Interférences à deux ondes (Source ponctuelle monochromatique)**
   1. Exprimer la différence de marche $\delta(y) = $ entre les chemins optiques $S_1FM$ et $S_2FM$ au point $M(D, y, 0)$, en effectuant un développement limité à l'ordre le plus bas non nul en $\frac{y}{D}$ et $\frac{a}{D}$.
   2. En déduire l'expression de l'intensité lumineuse $I(y)$ sur l'écran en fonction de l'intensité maximale $I_0$, de la longueur d'onde $\lambda$, de $y$, $a$ et $D$.
   3. Définir et calculer l'interfrange $i$.

2. **Influence de la largeur spectrale (Source polychromatique)**
   1. On suppose désormais que la source émet une bande de fréquences $[\nu_0 - \Delta\nu/2, \nu_0 + \Delta\nu/2]$. Exprimer l'intensité totale reçue en $M$ en supposant les radiations incohérentes entre elles.
   2. Montrer que l'intensité s'écrit sous la forme :
      $$I(y) = I_{\text{moy}} \left[ 1 + \mathcal{C}(y) \cos\left(\frac{2\pi a y}{\lambda_0 D}\right) \right]$$
      où $\lambda_0 = \frac{c}{\nu_0}$ et $\mathcal{C}(y)$ est le contraste (ou visibilité) des franges que l'on exprimera en fonction de $\Delta\nu$, $\nu_0$ et $\delta(y)$.
   3. À partir de quelle différence de marche $\delta_{\text{lim}}$ les interférences ne sont-elles plus observables ? Définir la longueur de cohérence temporelle $L_c$.

3. **Influence de la taille de la source (Cohérence spatiale)**
   1. On remplace la source ponctuelle par une source étendue de largeur $s$ suivant l'axe $y$. Chaque point $\sigma$ de la source est supposé incohérent par rapport aux autres. Expliquer qualitativement pourquoi le contraste diminue lorsque $s$ augmente.
   2. Établir le critère de non-brouillage des franges liant la taille angulaire $\theta$ de la source, la distance $a$ entre les trous et la longueur d'onde $\lambda_0$.

---

### 💡 Pistes & Indications méthodologiques

* **Q1.1 :** Pensez à exprimer les carrés des distances $S_1M^2$ et $S_2M^2$ puis à utiliser un développement limité du type $\sqrt{1+\epsilon} \approx 1 + \frac{\epsilon}{2}$.
* **Q1.2 :** Rappelez la relation générale entre intensité et différence de phase $\Delta\varphi = \frac{2\pi \delta}{\lambda}$.
* **Q2.2 :** L'intensité totale est la somme des intensités des différentes radiations. L'intégrale à calculer fait apparaître un sinus cardinal ($\text{sinc}$).
* **Q3.2 :** Considérez qu'un décalage de la source de $y_\sigma$ entraîne un déplacement des franges sur l'écran. Le brouillage intervient lorsque la frange brillante d'une source élémentaire coïncide avec la frange sombre d'une autre.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Interférences à deux ondes (Source ponctuelle monochromatique)

1. **Calcul de la différence de marche $\delta(y)$ :**
   Les coordonnées des sources secondaires sont $S_1\left(0, -\frac{a}{2}, 0\right)$ et $S_2\left(0, \frac{a}{2}, 0\right)$. Le point $M$ sur l'écran a pour coordonnées $(D, y, 0)$.
   La distance $S_1M$ est donnée par :
   $$S_1M^2 = D^2 + \left(y + \frac{a}{2}\right)^2 = D^2 \left[ 1 + \frac{\left(y + \frac{a}{2}\right)^2}{D^2} \right]$$
   En posant $\epsilon = \frac{\left(y + \frac{a}{2}\right)^2}{D^2} \ll 1$, on effectue un développement limité :
   $$S_1M = D \sqrt{1 + \epsilon} \approx D \left( 1 + \frac{1}{2}\frac{\left(y + \frac{a}{2}\right)^2}{D^2} \right) \approx D + \frac{y^2 + ay + \frac{a^2}{4}}{2D}$$
   De même pour $S_2M$ :
   $$S_2M \approx D + \frac{y^2 - ay + \frac{a^2}{4}}{2D}$$
   La différence de marche $\delta(y) = S_2M - S_1M$ (ou l'inverse selon la convention) vaut :
   $$\delta(y) = \frac{\left(y^2 - ay + \frac{a^2}{4}\right) - \left(y^2 + ay + \frac{a^2}{4}\right)}{2D} = -\frac{ay}{D}$$
   En valeur absolue, ou en prenant $\delta = S_2M - S_1M$ avec la convention usuelle :
   $$\delta(y) = \frac{ay}{D}$$

2. **Expression de l'intensité lumineuse $I(y)$ :**
   La différence de phase entre les deux ondes au point $M$ est :
   $$\Delta\varphi = \frac{2\pi}{\lambda} \delta(y) = \frac{2\pi a y}{\lambda D}$$
   L'intensité résultante pour deux ondes d'intensité unitaire $I_1 = I_2 = \frac{I_0}{2}$ s'écrit :
   $$I(y) = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos(\Delta\varphi) = I_0 \cos^2\left(\frac{\pi a y}{\lambda D}\right)$$
   Ou sous la forme classique :
   $$I(y) = I_0 \left[ 1 + \cos\left(\frac{2\pi a y}{\lambda D}\right) \right]$$

3. **Définition et calcul de l'interfrange $i$ :**
   L'interfrange $i$ est la distance séparant deux maxima d'intensité consécutifs. Un maximum est obtenu lorsque l'argument du cosinus est un multiple entier de $2\pi$ :
   $$\frac{2\pi a y_k}{\lambda D} = 2k\pi \implies y_k = k \frac{\lambda D}{a}$$
   L'interfrange est donc :
   $$i = y_{k+1} - y_k = \frac{\lambda D}{a}$$

---

#### 2. Influence de la largeur spectrale (Source polychromatique)

1. **Intensité totale pour une source polychromatique :**
   Les radiations émises par la source sont incohérentes entre elles. Les intensités s'ajoutent donc ponctuellement. En notant $I_\nu(\nu)$ la densité spectrale d'intensité, l'intensité totale en $M$ est :
   $$I(y) = \int_{\nu_0 - \Delta\nu/2}^{\nu_0 + \Delta\nu/2} I_\nu(\nu) \left[ 1 + \cos\left(\frac{2\pi \nu \delta(y)}{c}\right) \right] d\nu$$
   En supposant le spectre uniforme d'amplitude $I_\nu(\nu) = \frac{I_0}{\Delta\nu}$, on a :
   $$I(y) = \int_{\nu_0 - \Delta\nu/2}^{\nu_0 + \Delta\nu/2} \frac{I_0}{\Delta\nu} d\nu + \frac{I_0}{\Delta\nu} \int_{\nu_0 - \Delta\nu/2}^{\nu_0 + \Delta\nu/2} \cos\left(\frac{2\pi \nu \delta}{c}\right) d\nu$$

2. **Calcul de l'intégrale et expression du contraste :**
   La première intégrale vaut $I_0$. Pour la seconde, en posant $\nu = \nu_0 + x$, l'intégrale se calcule ainsi :
   $$\int_{-\Delta\nu/2}^{\Delta\nu/2} \cos\left(\frac{2\pi (\nu_0 + x)\delta}{c}\right) dx = \cos\left(\frac{2\pi \nu_0 \delta}{c}\right) \int_{-\Delta\nu/2}^{\Delta\nu/2} \cos\left(\frac{2\pi x \delta}{c}\right) dx$$
   La primitive donne :
   $$\left[ \frac{c}{2\pi \delta} \sin\left(\frac{2\pi x \delta}{c}\right) \right]_{-\Delta\nu/2}^{\Delta\nu/2} = \frac{c}{\pi \delta} \sin\left(\frac{\pi \Delta\nu \delta}{c}\right) = \Delta\nu \, \text{sinc}\left(\frac{\pi \Delta\nu \delta}{c}\right)$$
   En remettant le tout dans l'expression de l'intensité :
   $$I(y) = I_0 \left[ 1 + \cos\left(\frac{2\pi \nu_0 \delta}{c}\right) \text{sinc}\left(\frac{\pi \Delta\nu \delta}{c}\right) \right]$$
   Par identification, le contraste $\mathcal{C}(y)$ est la fonction :
   $$\mathcal{C}(y) = \left| \text{sinc}\left(\frac{\pi \Delta\nu \delta(y)}{c}\right) \right| = \left| \text{sinc}\left(\frac{\pi \Delta\nu a y}{c D}\right) \right|$$

3. **Longueur de cohérence temporelle :**
   Les interférences ne sont plus observables lorsque le contraste s'annule pour la première fois, c'est-à-dire lorsque l'argument du sinus cardinal atteint $\pi$ :
   $$\frac{\pi \Delta\nu \delta_{\text{lim}}}{c} = \pi \implies \delta_{\text{lim}} = \frac{c}{\Delta\nu}$$
   On définit la **longueur de cohérence temporelle** $L_c$ par :
   $$L_c = \frac{c}{\Delta\nu} = \lambda_0 \frac{\nu_0}{\Delta\nu}$$
   Au-delà de cette différence de marche ($\delta > L_c$), le système ne présente plus de franges visibles : le brouillage spectral est total.

---

#### 3. Influence de la taille de la source (Cohérence spatiale)

1. **Explication qualitative :**
   Considérons un point source $\sigma$ situé hors de l'axe optique, à la coordonnée $y_\sigma$. Ce point éclaire les trous $S_1$ et $S_2$ sous un angle différent, ce qui équivaut à décaler le système de franges d'interférence sur l'écran. 
   Lorsque la source s'étend sur une largeur $s$, on superpose une infinité de systèmes de franges décalés les uns par rapport aux autres. Si le décalage maximal entre les systèmes de franges dépasse l'interfrange $i$, les maxima des uns remplissent les minima des autres : **les franges se brouillent** et l'intensité devient uniforme sur l'écran ($\mathcal{C} \to 0$).

2. **Établissement du critère de non-brouillage :**
   Soit une source étendue de largeur $s$ observée depuis le plan des trous sous un angle $\theta \approx \frac{s}{d}$ (où $d$ est la distance entre la source et le plan des trous).
   Le décalage $\Delta y'$ des franges sur l'écran due à un point source situé à l'ordonnée $y_\sigma$ s'obtient par un calcul de géométrie (équivalent au théorème de Malus ou par simple translation) :
   $$\Delta y' = \frac{D}{d} y_\sigma = \theta D$$
   Pour que les franges restent visibles, il faut que le décalage maximum de l'ensemble des franges soit inférieur à une fraction significative de l'interfrange, typiquement :
   $$\theta D < i \implies \theta \frac{D}{a} < \frac{\lambda_0 D}{a}$$
   Soit le critère de cohérence spatiale de Van Cittert-Zernike (sous sa forme simplifiée) :
   $$\theta \cdot a < \lambda_0 \quad \text{ou} \quad \theta < \frac{\lambda_0}{a}$$
   *Conclusion du concours :* Pour observer des interférences nettes avec une source étendue, il est impératif que le produit de la taille angulaire de la source par l'écartement des trous soit inférieur à la longueur d'onde.