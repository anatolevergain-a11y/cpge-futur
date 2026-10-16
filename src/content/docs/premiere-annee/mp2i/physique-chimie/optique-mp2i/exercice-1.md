---
title: 'Exercice 1 : Lois de Snell-Descartes'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Cadre d'étude

L'optique géométrique constitue un cadre fondamental de modélisation de la lumière, fondé sur le concept de rayon lumineux et l'approximation des milieux isotropes et homogènes. Dans ce problème, on s'intéresse à la propagation d'un faisceau lumineux polychromatique à travers un système dispersif plan-parallèle, puis on étudie le phénomène de réflexion totale et ses limitations par une approche critique du modèle.

On considère un milieu d'indice de réfraction $n_1$ (air, $n_1 \approx 1{,}00$) surmontant un bloc de verre d'indice $n_2(\lambda)$, où $\lambda$ désigne la longueur d'onde de la radiation lumineuse dans le vide. Le verre est caractérisé par la formule empirique de Cauchy :
$$n_2(\lambda) = A + \frac{B}{\lambda^2}$$
où $A$ et $B$ sont des constantes positives caractéristiques du type de verre.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Rappels et fondements** : Énoncer les lois de Snell-Descartes pour la réfraction et la réflexion en précisant les conditions géométriques d'application (plans d'incidence, orientation des angles).
2. **Déviation à travers un dioptre plan** : Un rayon lumineux issu de l'air arrive sur le dioptre plan séparant l'air ($n_1$) du verre ($n_2$) sous un angle d'incidence $i_1$. Exprimer l'angle de réfraction $i_2$ en fonction de $n_1$, $n_2$ et $i_1$. En déduire la déviation $\mathcal{D} = |i_1 - i_2|$ subie par le rayon.
3. **Phénomène de réfraction limite** : 
   - Montrer qu'il existe un angle d'incidence maximal $i_{\text{lim}}$ dans le verre pour qu'un rayon puisse sortir dans l'air. Exprimer $i_{\text{lim}}$ en fonction de $n_1$ et $n_2$.
   - Calculer numériquement cette valeur pour $n_1 = 1{,}00$ et $n_2 = 1{,}50$.
4. **Dispersion chromatique** : On envoie un faisceau de lumière blanche (composé de longueurs d'onde allant de $\lambda_{\text{min}} = 400\,\text{nm}$ à $\lambda_{\text{max}} = 700\,\text{nm}$) depuis l'intérieur du verre vers l'air sous un angle d'incidence $i = 42{,}0^\circ$. 
   - Sachant que pour ce verre $A = 1{,}50$ et $B = 6{,}00 \times 10^{-15}\,\text{m}^2$, calculer les indices $n_2(\lambda_{\text{min}})$ et $n_2(\lambda_{\text{max}})$.
   - Discuter qualitativement et quantitativement du devenir du faisceau lumineux incident.
5. **Analyse critique du modèle** : 
   - L'approximation de l'optique géométrique suppose que les dimensions caractéristiques des obstacles ou des ouvertures traversées par la lumière sont grandes devant $\lambda$. Estimer à partir de quelle dimension d'ouverture l'approximation de l'optique géométrique cesse d'être rigoureusement valide.
   - Discuter des limites de la loi de Cauchy lorsque $\lambda$ devient très petit (proche des UV) ou très grand (proche des IR).

---

### 💡 Pistes & Indications méthodologiques

- **Q1** : Veillez à bien définir le plan d'incidence défini par le vecteur incident et la normale au dioptre. Les angles s'mesurent par rapport à la normale algébriquement ou en valeur absolue selon l'orientation choisie.
- **Q2** : Appliquez directement la relation $n_1 \sin(i_1) = n_2 \sin(i_2)$. Faites attention au domaine de définition de la fonction arcsinus.
- **Q3** : Le passage du milieu le plus réfringent ($n_2$) vers le milieu le moins réfringent ($n_1$) impose une condition sur le sinus de l'angle de réfraction dans le premier milieu.
- **Q4** : Injectez les valeurs numériques en respectant scrupuleusement le Système International d'unités (mètres pour les longueurs d'onde).
- **Q5** : Pensez aux critères de diffraction en wave-optics (physique ondulatoire) pour justifier la rupture du modèle géométrique.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Rappels et fondements des lois de Snell-Descartes
Soit un dioptre séparant deux milieux d'indices optiques $n_1$ et $n_2$. Le plan d'incidence est défini par le vecteur wave (ou rayon incident) et le vecteur unitaire normal $\vec{N}$ au dioptre au point d'incidence.
- **1ère loi (Réflexion)** : Le rayon réfléchi appartient au plan d'incidence et l'angle de réflexion $r_1$ est égal à l'angle d'incidence $i_1$ en valeur absolue : 
  $$r_1 = i_1$$
- **2ème loi (Réfraction)** : Le rayon réfracté appartient au plan d'incidence. Les angles d'incidence $i_1$ et de réfraction $i_2$ (mesurés par rapport à la normale $\vec{N}$) satisfont la relation :
  $$n_1 \sin(i_1) = n_2 \sin(i_2)$$

#### 2. Déviation à travers un dioptre plan
À partir de la seconde loi de Descartes, on exprime l'angle de réfraction :
$$\sin(i_2) = \frac{n_1}{n_2} \sin(i_1) \implies i_2 = \arcsin\left(\frac{n_1}{n_2} \sin(i_1)\right)$$
La déviation $\mathcal{D}$ représente l'angle dont est écarté le rayon par rapport à sa direction initiale. Géométriquement, dans le cas d'un dioptre, la déviation vaut :
$$\mathcal{D} = |i_1 - i_2|$$

#### 3. Phénomène de réfraction limite
- Pour qu'un rayon issu du milieu $n_2$ (verre) vers le milieu $n_1$ (air) soit réfracté, il faut que l'angle de réfraction dans l'air, noté $i_{\text{air}}$, vérifie :
  $$n_2 \sin(i_{\text{verre}}) = n_1 \sin(i_{\text{air}})$$
  La condition physique d'existence de l'angle $i_{\text{air}}$ impose $\sin(i_{\text{air}}) \le 1$, soit :
  $$\sin(i_{\text{verre}}) \le \frac{n_1}{n_2}$$
  L'angle limite d'incidence (ou angle de réfraction limite) au-delà duquel il y a réflexion totale est donc :
  $$i_{\text{lim}} = \arcsin\left(\frac{n_1}{n_2}\right)$$
- **Application numérique** : 
  $$i_{\text{lim}} = \arcsin\left(\frac{1{,}00}{1{,}50}\right) = \arcsin\left(\frac{2}{3}\right) \approx 0{,}7297\,\text{rad} \approx 41{,}8^\circ$$

#### 4. Dispersion chromatique
- **Calcul des indices** avec $\lambda_{\text{min}} = 400\,\text{nm} = 4{,}00 \times 10^{-7}\,\text{m}$ et $\lambda_{\text{max}} = 700\,\text{nm} = 7{,}00 \times 10^{-7}\,\text{m}$ :
  $$n_2(\lambda_{\text{min}}) = 1{,}50 + \frac{6{,}00 \times 10^{-15}}{(4{,}00 \times 10^{-7})^2} = 1{,}50 + \frac{6{,}00 \times 10^{-15}}{1{,}60 \times 10^{-13}} = 1{,}50 + 0{,}0375 = 1{,}5375$$
  $$n_2(\lambda_{\text{max}}) = 1{,}50 + \frac{6{,}00 \times 10^{-15}}{(7{,}00 \times 10^{-7})^2} = 1{,}50 + \frac{6{,}00 \times 10^{-15}}{4{,}90 \times 10^{-13}} \approx 1{,}50 + 0{,}0122 = 1{,}5122$$

- **Analyse du devenir du faisceau** pour $i = 42{,}0^\circ$ :
  Calculons l'angle limite pour chaque longueur d'onde :
  - Pour $\lambda_{\text{min}}$ : $i_{\text{lim, min}} = \arcsin\left(\frac{1{,}00}{1{,}5375}\right) \approx 40{,}5^\circ$.
  - Pour $\lambda_{\text{max}}$ : $i_{\text{lim, max}} = \arcsin\left(\frac{1{,}00}{1{,}5122}\right) \approx 41{,}4^\circ$.
  
  Puisque l'angle d'incidence $i = 42{,}0^\circ$ est supérieur à $i_{\text{lim, min}}$ et à $i_{\text{lim, max}}$, **toutes les radiations du spectre subissent une réflexion totale**. Aucune lumière ne sort dans l'air : le faisceau blanc est entièrement réfléchi à l'intérieur du bloc de verre.

#### 5. Analyse critique du modèle
- **Limite de validité de l'optique géométrique** : L'approximation géométrique néglige les effets ondulatoires (interférences, diffraction). Elle est rigoureuse lorsque la longueur d'onde $\lambda$ est infiniment devant la taille caractéristique $a$ de l'ouverture ou de l'obstacle rencontré ($a \gg \lambda$). Dès que $a \sim \cant{O}(\lambda)$, la diffraction devient prépondérante et le concept de « rayon lumineux » perd tout sens physique.
- **Limites de la loi de Cauchy** : La formule empirique $n(\lambda) = A + \frac{B}{\lambda^2}$ n'est qu'un développement limité à l'ordre 2 de la dispersion réelle du milieu, valable loin des bandes d'absorption du matériau. 
  - Lorsque $\lambda \to 0$ (domaine des UV), l'expression prédit un indice tendant vers l'infini, ce qui est physiquement faux car le milieu devient fortement absorbant (transitions électroniques).
  - Lorsque $\lambda$ grandit indéfiniment (domaine des infrarouges), l'indice tend vers la constante $A$, mais d'autres termes d'absorption liés aux vibrations du réseau cristallin ou moléculaire interviennent, invalidant la loi simple de Cauchy.