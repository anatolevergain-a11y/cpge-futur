---
title: 'Exercice 2 : Diffraction par une fente'
description: 'Problème d entraînement type concours pour PSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

L'étude de la diffraction de la lumière par une ouverture de dimension finie constitue une illustration fondamentale des limites de l'approximation de l'optique géométrique. Dans ce problème, on s'intéresse à la figure de diffraction à l'infini (fraunhoferienne) d'une onde lumineuse monochromatique par une fente rectangulaire fine, ainsi qu'aux limitations physiques du modèle idéal.

On considère une fente fine rectangulaire de largeur $a$ suivant l'axe $Ox$ et de longueur $L$ (avec $L \gg a$) suivant l'axe $Oy$, percée dans un écran opaque et plan $(xOy)$. Cette fente est éclairée sous incidence normale par une onde plane lumineuse monochromatique, polarisée rectilignement, de longueur d'onde dans le vide $\lambda$ et de pulsation $\omega = \frac{2\pi c}{\lambda}$.

L'observation de la figure de diffraction est réalisée dans le plan focal image $(X, Y)$ d'une lentille minces convergente $L$ de distance focale $f'$, placée immédiatement après la fente.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Établissement de l'amplitude complexe diffusée**
   En utilisant le principe de Huygens-Fresnel, exprimer l'amplitude complexe du champ électrique diffracté $s(X, Y)$ dans le plan d'observation, en fonction de l'amplitude incidente $E_0$, de la longueur d'onde $\lambda$, de la distance focale $f'$ et des dimensions de la fente. On posera $u = \frac{\pi a X}{\lambda f'}$.

2. **Expression de l'intensité lumineuse**
   En déduire l'expression de l'intensité lumineuse $I(X)$ reçue sur un écran placé dans le plan focal image, en fonction de l'intensité maximale $I_0$ et de la variable $u$. Tracer l'allure de la fonction $I(X)/I_0$ en précisant les positions des extinctions (zéros d'intensité) et la largeur de la tache centrale.

3. **Influence de la largeur de la fente**
   Discuter qualitativement de l'évolution de la figure de diffraction lorsque la largeur de la fente $a$ varie (tend vers $\lambda$ d'une part, et devient très grande devant $\lambda$ d'autre part).

4. **Analyse critique du modèle scalaire et limites de valadité**
   Le traitement mathématique précédent repose sur l'approximation scalaire de la diffraction (le champ électrique est traité comme un simple nombre complexe) et sur l'approximation de Fraunhofer. 
   - Préciser les conditions géométriques et physiques (en terme d'ordres de grandeur) nécessaires pour valider l'approximation de Fraunhofer.
   - Quelles sont les limites du modèle scalaire lorsque la largeur de la fente $a$ devient du même ordre de grandeur que la longueur d'onde $\lambda$ ?

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pour intégrer la contribution de chaque élément de surface de la fente $dx\,dy$, exprimer la différence de marche entre un rayon issu d'un point courant $(x, y)$ de la fente et un rayon issu du centre de la fente, parvenant au même point d'observation $(X, Y)$ dans le plan focal.
* **Question 2 :** L'intensité lumineuse est proportionnelle au carré du module de l'amplitude complexe. Utiliser la fonction sinus cardinal $\text{sinc}(u) = \frac{\sin(u)}{u}$.
* **Question 4 :** Penser à comparer la taille de la fente devant $\lambda$ et à considérer les phénomènes vectoriels (polarisation) ainsi que les courants de bord lorsque l'ouverture est sub-longueur d'onde.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Établissement de l'amplitude complexe diffusée

Soit un point $M(x, y, 0)$ situé dans l'ouverture de la fente. Sous l'effet de l'onde incidente, chaque point $M$ se comporte comme une source secondaire émettant une onde sphérique (principe de Huygens-Fresnel). 

L'amplitude élémentaire du champ électrique en un point $M'$ du plan d'observation, repéré par ses coordonnées $(X, Y)$ dans le plan focal image de la lentille de focale $f'$, est proportionnelle à l'amplitude incidente $E_0 dx\,dy$ et dépend du déphasage accumulé.

La différence de phase $\phi$ entre l'onde émise par le point courant $M(x, y)$ et celle émise par l'origine $O(0, 0)$ est donnée par le chemin optique. Dans l'approximation de Fraunhofer (ou de Fourier), pour un point $M'$ du plan focal image repéré par les angles de diffraction $\theta_x \approx \frac{X}{f'}$ et $\theta_y \approx \frac{Y}{f'}$, la différence de marche est :
$$\delta = x \sin\theta_x + y \sin\theta_y \approx x \frac{X}{f'} + y \frac{Y}{f'}$$

L'amplitude complexe totale $s(X, Y)$ s'obtient par intégration sur toute la surface de la fente :
$$s(X, Y) = C \iint_{\text{fente}} E_0 \exp\left(-j \frac{2\pi}{\lambda f'} (xX + yY)\right) dx\,dy$$
où $C$ est une constante complexe multiplicative.

Puisque la fente est rectangulaire de dimensions $[-a/2, a/2]$ selon $Ox$ et $[-L/2, L/2]$ selon $Oy$, l'intégrale se sépare en un produit de deux intégrales indépendantes :
$$s(X, Y) = C E_0 \left[ \int_{-a/2}^{a/2} \exp\left(-j \frac{2\pi X x}{\lambda f'}\right) dx \right] \left[ \int_{-L/2}^{L/2} \exp\left(-j \frac{2\pi Y y}{\lambda f'}\right) dy \right]$$

En effectuant le calcul pour l'intégrale selon $x$ :
$$\int_{-a/2}^{a/2} \exp\left(-j \frac{2\pi X x}{\lambda f'}\right) dx = a \frac{\sin\left(\frac{\pi a X}{\lambda f'}\right)}{\frac{\pi a X}{\lambda f'}} = a \, \text{sinc}(u)$$
en posant $u = \frac{\pi a X}{\lambda f'}$. De même selon l'axe $Oy$, avec $v = \frac{\pi L Y}{\lambda f'}$ :
$$s(X, Y) = S_0 \, \text{sinc}(u) \, \text{sinc}(v)$$
avec $S_0 = C E_0 a L$ l'amplitude maximale au centre ($u=0, v=0$).

---

#### 2. Expression de l'intensité lumineuse

L'intensité lumineuse $I(X, Y)$ est proportionnelle au carré du module de l'amplitude complexe du champ électrique :
$$I(X, Y) = I_0 \, \text{sinc}^2(u) \, \text{sinc}^2(v)$$
où $I_0$ est l'intensité maximale au centre de la figure de diffraction.

Sur un écran d'observation ou selon une coupe suivant l'axe $X$ ($Y=0$, donc $\text{sinc}(v) = 1$), l'intensité s'écrit :
$$I(X) = I_0 \left( \frac{\sin u}{u} \g\right)^2 \quad \text{avec} \quad u = \frac{\pi a X}{\lambda f'}$$

* **Extinctions (zéros d'intensité) :** 
  L'intensité s'annule lorsque $\sin(u) = 0$ avec $u \neq 0$, c'est-à-dire :
  $$u = k\pi \quad (k \in \mathbb{Z}^*)$$
  Soit pour les positions $X_k$ sur l'écran :
  $$X_k = k \frac{\lambda f'}{a}$$
* **Largeur de la tache centrale :** 
  La tache centrale s'étend entre le premier zéro négatif ($k=-1$) et le premier zéro positif ($k=1$). Sa largeur angulaire est $\Delta \theta = \frac{2\lambda}{a}$ et sa largeur linéaire sur l'écran vaut :
  $$\Delta X = \frac{2\lambda f'}{a}$$

---

#### 3. Influence de la largeur de la fente

* **Si $a \gg \lambda$ :** 
  La largeur de la tache centrale $\Delta X = \frac{2\lambda f'}{a}$ devient très petite devant les dimensions macroscopiques. La figure de diffraction se resserre considérablement autour de $X=0$. On retrouve le domaine de validité de l'optique géométrique où la lumière se propage en lignes droites (les effets de diffraction sont négligeables).
* **Si $a$ est du même ordre de grandeur que $\lambda$ ($a \sim \lambda$) :** 
  La largeur de la tache centrale devient très grande ($\Delta X \sim 2f'$). La figure de diffraction s'étale envahissant tout l'espace d'observation. L'énergie lumineuse est largement dispersée.
* **Si $a \ll \lambda$ :** 
  La fente se comporte comme une source ponctuelle unique (source secondaire omnidirectionnelle), l'intensité est quasi-uniforme dans toute la demi-sphère d'eclairage ($\text{sinc}(u) \approx 1$).

---

#### 4. Analyse critique du modèle scalaire et limites de validité

* **Conditions de validité de l'approximation de Fraunhofer :**
  L'approximation de Fraunhofer (diffraction à l'infini) suppose que les fronts d'onde incidents et diffractés peuvent être considérés comme plans à l'échelle de l'ouverture. Cela nécessite que le nombre de Fresnel $N_F$ soit très petit devant 1 :
  $$N_F = \frac{a^2}{\lambda D} \ll 1$$
  où $D$ est la distance caractéristique entre l'ouverture et le plan d'observation (ici $D = f'$). L'utilisation de la lentille convergente permet de rejeter virtuellement l'écran à l'infini, réalisant ainsi rigoureusement les conditions de Fraunhofer dans son plan focal image, quelle que soit la distance physique réelle.

* **Limites du modèle scalaire et vectoriel :**
  Le modèle est dit *scalaire* car on néglique la nature vectorielle du champ électromagnétique (on traite le champ $\vec{E}$ comme un simple nombre complexe). 
  Lorsque la dimension de l'ouverture $a$ devient du même ordre de grandeur que la longueur d'onde $\lambda$ ($a \lesssim \lambda$), l'approximation scalaire n'est plus rigoureusement valide :
  1. Les conditions aux limites de Maxwell sur les bords métalliques de la fente dépendent fortement de la **polarisation** de l'onde incidente (effets vectoriels).
  2. Des courants de surface sont induits sur les arêtes de la fente, ce qui invalide l'hypothèse de transmission uniforme de l'onde à travers l'ouverture.
  Il conviendrait alors de résoudre rigoureusement les équations de Maxwell aux dérivées partielles avec les conditions aux limites appropriées (électromagnétisme rigoureux ou *Rigorous Coupled-Wave Analysis* - RCWA).