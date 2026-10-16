---
title: 'Exercice 1 : Diagrammes liquide-vapeur et théorème des moments'
description: 'Problème d entraînement type concours pour CPGE PC.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On s'intéresse à l'étude thermodynamique d'un mélange binaire idéal constitué de deux espèces chimiques miscibles en toutes proportions à l'état liquide et gazeux : le benzène ($\text{C}_6\text{H}_6$, noté $1$) et le toluène ($\text{C}_7\text{H}_8$, noté $2$). L'étude est menée à température $T$ constante, fixée à $T = 393\text{ K}$.

À cette température, les pressions de vapeur saturante des corps purs 1 et 2 valent respectivement :
* $P_1^\circ(T) = 180\text{ kPa}$
* $P_2^\circ(T) = 65\text{ kPa}$

On suppose que la phase gazeuse se comporte comme un gaz parfait et que la phase liquide est une solution idéale. Le système est fermé et contient une quantité totale de matière $n = 2{,}0\text{ mol}$, avec une fraction molaire globale en benzène $z_1 = 0{,}40$.

---

### ❓ Questions progressives

1. **Rappels de cours et définitions :** Énoncer la loi de Raoult et la loi de Dalton. En déduire l'expression de la pression totale $P$ d'un système diphasé (liquide-vapeur) en équilibre en fonction de la température $T$, de la fraction molaire du corps 1 dans le liquide $x_1$ et des pressions de vapeur saturante $P_1^\circ$ et $P_2^\circ$.
2. **Tracé et caractérisation du diagramme :** Exprimer la fraction molaire du corps 1 dans la vapeur $y_1$ en fonction de $x_1$, $P_1^\circ$ et $P_2^\circ$. Établir l'équation de la courbe d'bubage $P(x_1)$ et de la courbe de rosée $P(y_1)$.
3. **Analyse d'état :** Le système est maintenu à $T = 393\text{ K}$ et la pression totale est fixée à $P = 100\text{ kPa}$. Déterminer l'état thermodynamique du système (monophasé liquide, monophasé vapeur, ou diphasé). Si le système est diphasé, calculer les compositions $x_1$ et $y_1$ des deux phases en présence.
4. **Théorème des moments chimiques :** Établir le théorème des moments chimiques (ou théorème du levier) permettant de déterminer les proportions de matière des phases liquide et vapeur dans la zone diphasée. En déduire les quantités de matière $n_L$ (liquide) et $n_V$ (vapeur) présentes dans le récipient.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pensez à l'égalité des potentiels chimiques à l'équilibre pour chaque constituant entre la phase liquide et la phase gazeuse, ce qui conduit directement aux lois usuelles des mélanges idéaux.
* **Question 2 :** Pour la courbe de rosée, éliminez $x_1$ entre l'expression de la pression totale $P(x_1)$ et la relation donnant $y_1(x_1)$.
* **Question 3 :** Comparez la pression imposée $P$ aux pressions de bulle et de rosée calculées pour la composition globale $z_1 = 0{,}40$.
* **Question 4 :** Utilisez un bilan de matière global sur le constituant $1$ ($n z_1 = n_L x_1 + n_V y_1$) et un bilan global sur la quantité de matière ($n = n_L + n_V$).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Lois fondamentales et pression totale
À l'équilibre liquide-vapeur d'un mélange idéal :
* La **loi de Raoult** relie la pression partielle d'un constituant $i$ dans la vapeur à sa fraction molaire dans le liquide $x_i$ : 
  $$P_i = x_i P_i^\circ(T)$$
* La **loi de Dalton** exprime la pression partielle en fonction de la pression totale $P$ et de la fraction molaire dans la vapeur $y_i$ : 
  $$P_i = y_i P$$

Pour un mélange binaire ($i \in \{1, 2\}$), la pression totale est la somme des pressions partielles :
$$P = P_1 + P_2 = x_1 P_1^\circ + x_2 P_2^\circ$$
Comme $x_1 + x_2 = 1$, on a $x_2 = 1 - x_1$, ce qui donne :
$$P(x_1) = P_2^\circ + (P_1^\circ - P_2^\circ)x_1$$

---

#### 2. Courbes de bulle et de rosée
D'après la loi de Dalton et la loi de Raoult :
$$y_1 = \frac{P_1}{P} = \frac{x_1 P_1^\circ}{P}$$

* **Courbe d'bubage ($P$ en fonction de $x_1$) :** 
  C'est l'expression précédente : 
  $$P_{\text{bulle}}(x_1) = P_2^\circ + (P_1^\circ - P_2^\circ)x_1$$

* **Courbe de rosée ($P$ en fonction de $y_1$) :** 
  exprimons $x_1$ en fonction de $y_1$ et $P$ : $x_1 = \frac{P y_1}{P_1^\circ}$. 
  Substituons cette expression dans l'équation de la pression :
  $$P = \left(\frac{P y_1}{P_1^\circ}\right) P_1^\circ + (1 - \frac{P y_1}{P_1^\circ}) P_2^\circ = P_2^\circ + P y_1 \frac{P_1^\circ - P_2^\circ}{P_1^\circ}$$
  En isolant $P$, on obtient l'équation de la courbe de rosée :
  $$P_{\text{rosée}}(y_1) = \frac{P_1^\circ P_2^\circ}{P_1^\circ - y_1(P_1^\circ - P_2^\circ)}$$

---

#### 3. Détermination de l'état du système à $P = 100\text{ kPa}$ et $z_1 = 0{,}40$
Calculons la pression de bulle $P_B$ et la pression de rosée $P_R$ du mélange pour la composition globale $z_1 = 0{,}40$ (en remplaçant $x_1$ et $y_1$ par $z_1$) :
* **Pression de bulle :**
  $$P_B = P_2^\circ + (P_1^\circ - P_2^\circ)z_1 = 65 + (180 - 65) \times 0{,}40 = 65 + 115 \times 0{,}40 = 65 + 46 = 111\text{ kPa}$$
* **Pression de rosée :**
  $$P_R = \frac{180 \times 65}{180 - 0{,}40 \times (180 - 65)} = \frac{11700}{180 - 46} = \frac{11700}{134} \approx 87{,}3\text{ kPa}$$

La pression imposée est $P = 100\text{ kPa}$. On constate que :
$$P_R < P < P_B \quad (87{,}3\text{ kPa} < 100\text{ kPa} < 111\text{ kPa})$$
Le système se trouve donc dans un **état diphasé (liquide + vapeur)**.

Pour trouver les compositions $x_1$ et $y_1$ à cette pression $P = 100\text{ kPa}$ :
* On utilise l'équation de bulle pour trouver $x_1$ :
  $$100 = 65 + (180 - 65)x_1 \implies 35 = 115 x_1 \implies x_1 = \frac{35}{115} \approx 0{,}304$$
* On utilise l'équation de rosée pour trouver $y_1$ :
  $$100 = \frac{180 \times 65}{180 - y_1(115)} \implies 180 - 115 y_1 = \frac{11700}{100} = 117$$
  $$115 y_1 = 180 - 117 = 63 \implies y_1 = \frac{63}{115} \approx 0{,}548$$

---

#### 4. Théorème des moments chimiques et calcul des quantités
Écrivons les bilans de matière :
1. Bilan global : $n = n_L + n_V$
2. Bilan sur le constituant 1 : $n z_1 = n_L x_1 + n_V y_1$

En combinant ces deux équations pour éliminer $n_V$ ($n_V = n - n_L$) :
$$n z_1 = n_L x_1 + (n - n_L)y_1 = n_L(x_1 - y_1) + n y_1$$
$$n(z_1 - y_1) = n_L(x_1 - y_1) \implies \frac{n_L}{n} = \frac{y_1 - z_1}{y_1 - x_1}$$

De même, en éliminant $n_L$ :
$$\frac{n_V}{n} = \frac{z_1 - x_1}{y_1 - x_1}$$

C'est le **théorème des moments chimiques** (analogue au théorème du levier en mécanique).

Application numérique avec $n = 2{,}0\text{ mol}$, $z_1 = 0{,}40$, $x_1 \approx 0{,}304$ et $y_1 \approx 0{,}548$ :
* Fraction molaire de liquide :
  $$\frac{n_L}{n} = \frac{0{,}548 - 0{,}40}{0{,}548 - 0{,}304} = \frac{0{,}148}{0{,}244} \approx 0{,}607$$
  Soit $n_L = 2{,}0 \times 0{,}607 = 1{,}21\text{ mol}$.
* Fraction molaire de vapeur :
  $$\frac{n_V}{n} = \frac{0{,}40 - 0{,}304}{0{,}244} = \frac{0{,}096}{0{,}244} \approx 0{,}393$$
  Soit $n_V = 2{,}0 \times 0{,}393 = 0{,}79\text{ mol}$ (on vérifie bien $n_L + n_V = 2{,}0\text{ mol}$).