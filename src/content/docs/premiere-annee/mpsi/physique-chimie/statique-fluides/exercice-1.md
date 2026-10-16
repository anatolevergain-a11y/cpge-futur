---
title: 'Exercice 1 : Loi de la statique des fluides'
description: 'Problème d entraînement type concours officiel.'
---

# PROBLÈME GUIDÉ : Étude de l'atmosphère isotherme et du gradient de pression

**Filière :** MPSI  
**Matière :** Physique-Chimie  
Chapitre: ** Statique des fluides  
**Thème :** Loi fondamentale de la statique des fluides et applications géophysiques  

---

## 1. Énoncé

On s'intéresse à la modélisation de l'atmosphère terrestre. L'objectif de ce problème est d'établir la loi de variation de la pression atmosphérique en fonction de l'altitude $z$ au-dessus du niveau de la mer, en adoptant l'hypothèse d'une atmosphère isotherme, puis de discuter la pertinence et les limites de ce modèle face à des observations réelles.

**Données et constantes utiles :**
* Accélération de la pesanteur (supposée constante) : $g = 9{,}81\text{ m}\cdot\text{s}^{-2}$.
* Constante universelle des gaz parfaits : $R = 8{,}314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$.
* Masse molaire moyenne de l'air : $M = 29\text{ g}\cdot\text{mol}^{-1}$.
* Température au niveau de la mer ($z = 0$) : $T_0 = 288\text{ K}$.
* Pression atmosphérique au niveau de la mer : $P_0 = 1{,}013 \times 10^5\text{ Pa}$.

---

## 2. Questions

1. **Rappel de cours :** Énoncer la loi fondamentale de la statique des fluides (LFSF) pour un fluide au repos dans un référentiel galiléen, soumis à un champ de pesanteur uniforme $\vec{g} = -g \vec{e}_z$.
2. **Modélisation locale :** En déduire l'équation différentielle vérifiée par la pression $P(z)$ dans l'atmosphère, en faisant intervenir la masse volumique $\rho(z)$ de l'air.
3. **Équation d'état :** En assimilant l'air à un gaz parfait, exprimer la masse volumique $\rho(z)$ en fonction de la pression $P(z)$, de la température $T$, de la masse molaire $M$ et des constantes fondamentales.
4. **Résolution (Atmosphère isotherme) :** On suppose dans cette question que la température $T$ de l'atmosphère est uniformément constante et égale à $T_0$. Résoudre l'équation différentielle précédente pour obtenir l'expression de $P(z)$ sous la forme :
   $$P(z) = P_0 \exp\left(-\frac{z}{H}\right)$$
   où l'on exprimera explicitement la "hauteur d'échelle" $H$ en fonction de $R, T_0, M$ et $g$.
5. **Application numérique :** Calculer la valeur numérique de $H$. Quelle est la pression atmosphérique à une altitude $z = 5000\text{ m}$ ?
6. **Analyse critique :** L'hypothèse d'une atmosphère isotherme est-elle physiquement rigoureuse pour décrire l'atmosphère terrestre réelle sur de grandes échelles d'altitude ? Proposer une critique argumentée des limites de ce modèle en évoquant les phénomènes thermiques et la composition chimique.

---

## 3. Pistes et indications

* **Q1 & Q2 :** Appliquer le théorème de la résultante des forces à une portion infinitésimale de fluide (une "tranche" d'atmosphère d'épaisseur $dz$).
* **Q3 :** Utiliser la relation des gaz parfaits $P V = n R T$ et relier le nombre de moles $n$ et le volume $V$ à la masse volumique $\rho$ et à la masse molaire $M$.
* **Q4 :** Il s'agit d'une équation différentielle linéaire du premier ordre à coefficients constants.
* **Q6 :** Pensez à la variation réelle de la température avec l'altitude dans la troposphère (gradient adiabatique ou mesuré) ainsi qu'aux variations de composition (séparation gravitationnelle pour les très hautes altitudes).

---

## 4. Corrigé détaillé

### 1. Loi fondamentale de la statique des fluides
Dans un référentiel galiléen, pour un fluide au repos, la somme des forces volumiques et surfaciques s'exerçant sur une portion de fluide est nulle. En présence d'un champ de pesanteur $\vec{g}$, la LFSF s'écrit sous forme locale :
$$\vec{\nabla} P = \rho \vec{g}$$

### 2. Équation différentielle sur la pression
En projetant l'équation précédente suivant l'axe vertical ascendant $Oz$ (où $\vec{g} = -g \vec{e}_z$), on obtient :
$$\frac{dP}{dz} = -\rho(z) g$$

### 3. Expression de la masse volumique via les gaz parfaits
L'équation d'état des gaz parfaits s'écrit $P V = n R T$. 
Or, le nombre de moles est $n = \frac{m}{M}$, et la masse volumique est $\rho = \frac{m}{V}$. On en déduit :
$$P = \frac{m}{V M} R T = \frac{\rho R T}{M}$$
Soit l'expression de la masse volumique :
$$\rho(z) = \frac{M P(z)}{R T(z)}$$

### 4. Résolution pour une atmosphère isotherme
Si $T(z) = T_0$ (constante), l'équation différentielle devient :
$$\frac{dP}{dz} = -\frac{M g}{R T_0} P(z)$$
C'est une équation de la forme $\frac{dP}{dz} = -\frac{1}{H} P$, avec :
$$H = \frac{R T_0}{M g}$$
La solution générale est $P(z) = A \exp\left(-\frac{z}{H}\right)$. En utilisant la condition aux limites au niveau de la mer ($P(0) = P_0$), on trouve $A = P_0$, soit :
$$P(z) = P_0 \exp\left(-\frac{z}{H}\right)$$

### 5. Application numérique
Calculons d'abord la hauteur d'échelle $H$ :
* $R = 8{,}314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$
* $T_0 = 288\text{ K}$
* $M = 29 \times 10^{-3}\text{ kg}\cdot\text{mol}^{-1}$
* $g = 9{,}81\text{ m}\cdot\text{s}^{-2}$

$$H = \frac{8{,}314 \times 288}{29 \times 10^{-3} \times 9{,}81} \approx 8415\text{ m} \approx 8{,}42\text{ km}$$

Pour $z = 5000\text{ m}$ ($5\text{ km}$) :
$$P(5000) = 1{,}013 \times 10^5 \times \exp\left(-\frac{5000}{8415}\right) \approx 55200\text{ Pa} \approx 0{,}55\text{ bar}$$

### 6. Analyse critique et limites du modèle
Le modèle de l'atmosphère isotherme présente plusieurs limites fondamentales :
1. **Hypothèse thermique fausse :** Dans la couche inférieure de l'atmosphère (la troposphère), la température n'est pas constante mais décroît linéairement avec l'altitude (gradient thermique vertical d'environ $-6{,}5\text{ K/km}$) jusqu'à la tropopause. Un modèle polytropique ou adiabatique serait bien plus rigoureux.
2. **Composition chimique et hétérogénéité :** Le modèle suppose une masse molaire $M$ constante. Or, à très haute altitude, la dissociation moléculaire (photolyse du dioxygène en ozone ou atomes d'oxygènes) et la diffusion gravitationnelle (séparation des espèces selon leur masse) font varier $M$.
3. **Validité du modèle des gaz parfaits :** Bien que l'air atmosphérique aux pressions et températures usuelles se comporte excellemment comme un gaz parfait, l'hypothèse d'un fluide rigoureusement au repos (statique pure) néglige la dynamique des masses d'air (vents, courants de convection), rendant ce modèle purement indicatif à grande échelle.