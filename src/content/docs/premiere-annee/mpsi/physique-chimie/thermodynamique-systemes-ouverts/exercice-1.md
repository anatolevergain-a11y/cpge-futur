---
title: 'Exercice 1 : Bilans d énergie et d enthalpie en écoulement stationnaire'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On s'intéresse à l'étude thermodynamique d'une turbine à gaz adiabatique fonctionnant en régime permanent (stationnaire). Ce type d'équipement constitue l'organe moteur essentiel des turboréacteurs et des centrales de cogénération.

Le système ouvert étudié est le volume de contrôle délimité par l'enveloppe de la turbine. De l'air, assimilé à un gaz parfait de capacité thermique massique à pression constante $c_p$ et de masse molaire $M$ supposées constantes, pénètre dans la turbine par une section d'entrée (1) et en ressort par une section de sortie (2).

**Données et notations :**
* Débit massique d'air traversant la machine : $D_m$
* Pression, température et vitesse dans la section (1) : $P_1$, $T_1$, $V_1$
* Pression, température et vitesse dans la section (2) : $P_2$, $T_2$, $V_2$
* Constante des gaz parfaits : $R$
* Exposant adiabatique de l'air : $\gamma = \frac{c_p}{c_v}$
* On néglige les variations d'énergie potentielle de pesanteur entre l'entrée et la sortie.
* La turbine est considérée comme parfaitement isolée thermiquement de l'extérieur.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Rappel du premier principe pour un système ouvert :** Établir l'expression du premier principe de la thermodynamique appliqué à un système ouvert en régime stationnaire, en faisant apparaître le débit massique $D_m$, l'enthalpie massique $h$, l'énergie cinétique massique et les transferts énergétiques sous forme de travail utile (mécanique) et de chaleur.
2. **Application à la turbine :** En déduire l'expression de la puissance mécanique utile $P_{\text{ut}}$ fournie par la turbine en fonction de $D_m$, $c_p$, des températures $T_1$ et $T_2$, et des vitesses $V_1$ et $V_2$.
3. **Modélisation isentropique et relation de Saint-Venant :** On suppose la transformation subie par l'air à l'intérieur de la turbine réversible et adiabatique (isentropique). Rappeler la relation liant $T_1$, $T_2$, $P_1$ et $P_2$ pour cette transformation.
4. **Application numérique et ordre de grandeur :** Calculer la puissance $P_{\text{ut}}$ pour les valeurs suivantes : $D_m = 50\,\text{kg}\cdot\text{s}^{-1}$, $T_1 = 1200\,\text{K}$, $P_1 = 1,5\,\text{MPa}$, $P_2 = 100\,\text{kPa}$, $V_1 = 120\,\text{m}\cdot\text{s}^{-1}$, $V_2 = 250\,\text{m}\cdot\text{s}^{-1}$, $c_p = 1004\,\text{J}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$, $\gamma = 1,4$.
5. **Analyse critique du modèle :** 
   * Discuter la validité de l'hypothèse de gaz parfait pour l'air aux températures et pressions considérées.
   * L'hypothèse adiabatique est-elle rigoureusement exacte dans une turbine industrielle réelle ? Quel impact cela a-t-il sur le rendement de la machine ?

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Partir de la conservation de l'énergie pour un système ouvert sur un intervalle de temps $\mathrm{d}t$, puis diviser par $\mathrm{d}t$ en utilisant le fait que le régime est stationnaire (les propriétés au sein du volume de contrôle ne varient pas dans le temps).
* **Question 2 :** Utiliser les conditions de l'énoncé (adiabaticité, absence de travail transitoire autre que celui fourni par l'arbre de la turbine).
* **Question 3 :** Utiliser la loi de Laplace pour un gaz parfait subissant une transformation adiabatique réversible.
* **Question 4 :** Bien veiller à convertir toutes les données dans le Système International (SI) et à calculer d'abord $T_2$ grâce à la question 3 avant d'injecter la valeur dans l'expression de la puissance.

---

### 📋 Corrigé détaillé pas à pas

1. **Premier principe pour un système ouvert en régime stationnaire :**
   Pour un système ouvert traversé par un débit massique constant $D_m$ en régime stationnaire, le premier principe s'écrit sous forme massique globale (par unité de masse de fluide traversant le système) :
   $$\Delta h + \Delta e_c + \Delta e_p = q + w_{\text{ut}}$$
   Où :
   * $\Delta h = h_2 - h_1$ est la variation d'enthalpie massique.
   * $\Delta e_c = \frac{1}{2}(V_2^2 - V_1^2)$ est la variation d'énergie cinétique massique.
   * $\Delta e_p = g(z_2 - z_1) \approx 0$ est la variation d'énergie potentielle massique.
   * $q$ est le transfert thermique massique reçu par le système.
   * $w_{\text{ut}}$ est le travail utile massique fourni par le système (travail de l'arbre).

   En multipliant par le débit massique $D_m$, on obtient l'équation en puissance :
   $$\mathcal{P}_{\text{th}} + \mathcal{P}_{\text{ut}} = D_m \left[ (h_2 - h_1) + \frac{1}{2}(V_2^2 - V_1^2) \right]$$
   Où $\mathcal{P}_{\text{th}} = D_m q$ est la puissance thermique reçue et $\mathcal{P}_{\text{ut}} = D_m w_{\text{ut}}$ est la puissance utile (mécanique) fournie à l'extérieur.

2. **Expression de la puissance mécanique utile de la turbine :**
   La turbine étant parfaitement isolée thermiquement, on a $\mathcal{P}_{\text{th}} = 0$ ($q = 0$). 
   De plus, pour un gaz parfait, la variation d'enthalpie massique s'exprime par $\Delta h = c_p (T_2 - T_1)$.
   L'équation précédente devient alors :
   $$\mathcal{P}_{\text{ut}} = D_m \left[ c_p (T_1 - T_2) + \frac{1}{2}(V_1^2 - V_2^2) \right]$$
   *(Note : la puissance utile fournie par la turbine est comptée positivement lorsqu'elle est cédée à l'extérieur).*

3. **Modélisation isentropique et relation de Saint-Venant / Laplace :**
   Puisque la transformation est supposée adiabatique et réversible, elle est isentropique. Pour un gaz parfait, la loi de Laplace s'applique entre l'entrée (1) et la sortie (2) :
   $$T_1 P_1^{\frac{1-\gamma}{\gamma}} = T_2 P_2^{\frac{1-\gamma}{\gamma}} \implies T_2 = T_1 \left( \frac{P_2}{P_1} \right)^{\frac{\gamma-1}{\gamma}}$$

4. **Application numérique :**
   * *Calcul de la température de sortie $T_2$ :*
     $$T_2 = 1200 \times \left( \frac{100 \times 10^3}{1,5 \times 10^6} \right)^{\frac{1,4-1}{1,4}} = 1200 \times \left( \frac{1}{15} \right)^{\frac{0,4}{1,4}}$$
     $$\frac{0,4}{1,4} \approx 0,2857$$
     $$T_2 = 1200 \times (0,06667)^{0,2857} \approx 1200 \times 0,4369 \approx 524,3\,\text{K}$$

   * *Calcul de la puissance utile $\mathcal{P}_{\text{ut}}$ :*
     $$\mathcal{P}_{\text{ut}} = 50 \times \left[ 1004 \times (1200 - 524,3) + \frac{1}{2}(120^2 - 250^2) \right]$$
     $$\mathcal{P}_{\text{ut}} = 50 \times \left[ 1004 \times 675,7 + \frac{1}{2}(14400 - 62500) \right]$$
     $$\mathcal{P}_{\text{ut}} = 50 \times \left[ 678402,8 - 24050 \right] = 50 \times 654352,8\,\text{W}$$
     $$\mathcal{P}_{\text{ut}} \approx 32,7\,\text{MW}$$

5. **Analyse critique du modèle :**
   * **Modèle du gaz parfait :** À des températures élevées ($1200\,\text{K}$) et des pressions modérées à élevées ($1,5\,\text{MPa}$), l'air se comporte de manière très satisfaisante comme un gaz parfait. Les écarts aux lois de Van der Waals ou aux tables thermodynamiques réelles restent inférieurs à $1$ à $2\,\%$, ce qui valide l'utilisation de $c_p$ constant.
   * **Hypothèse adiabatique et irréversibilités :** Dans une turbine réelle, les frottements visqueux du fluide contre les aubes et les pertes thermiques à travers les parois (malgré l'isolation) font que la transformation n'est pas strictement isentropique (il y a création d'entropie). La température réelle de sortie $T_{2,\text{réelle}}$ est supérieure à la température isentropique $T_2$ calculée, ce qui se traduit par une diminution de la puissance utile effectivement récupérée par rapport à la valeur théorique maximale.