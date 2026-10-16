---
title: 'Exercice 2 : Variétés allotropiques et compacité'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

De nombreux métaux cristallisent selon plusieurs variétés allotropiques en fonction de la température et de la pression. C'est le cas du titane ($Ti$) et du fer ($Fe$), dont les changements de phase à l'état solide ont des conséquences industrielles majeures (métallurgie, traitements thermiques). 

On s'intéresse dans ce problème à la description géométrique de trois empilements compacts et non compacts :
1. La structure Cubique Centrée (CC).
2. La structure Cubique à Faces Centrées (CFC).
3. La structure Hexaédrique Compacte (HC), modélisée localement.

L'objectif est d'évaluer l'efficacité du remplissage de l'espace à travers la notion de **compacité**, puis d'analyser l'influence d'une variation de température (dilatation thermique) sur ces structures.

Données et constantes utiles :
* Rayon atomique du fer (assimilé à une sphère dure de rayon $R$) : $R_{Fe} \approx 0{,}124\text{ nm}$ (en phase $\alpha$, structure CC).
* Masse molaire du fer : $M(Fe) = 55{,}8\text{ g}\cdot\text{mol}^{-1}$.
* Nombre d'Avogadro : $N_A = 6{,}02\times 10^{23}\text{ mol}^{-1}$.

---

### ❓ Questions progressives

1. **Rappels géométriques et coordinence**
   * Définir la *coordinence* d'un nœud dans un réseau cristallin. Donner sa valeur pour une structure Cubique Centrée (CC) et Cubique à Faces Centrées (CFC).
   * Exprimer la relation liant le paramètre de maille $a$ et le rayon $R$ des sphères pour la structure CC (contact le long de la diagonale du cube).

2. **Calcul de la compacité**
   * Rappeler la définition de la compacité $c$ d'une maille cristalline.
   * Démontrer que la compacité de la structure Cubique Centrée vaut $c_{CC} = \frac{\sqrt{3}\pi}{8}$, soit environ $68\,\%$.
   * On admet que la compacité d'un empilement compact (CFC ou HC) vaut $c_{compact} = \frac{\pi\sqrt{2}}{6} \approx 74\,\%$. Comment qualifie-t-on la structure CC par rapport à la structure CFC ?

3. **Application au fer $\alpha$ (structure CC)**
   * Calculer la masse volumique théorique $\rho$ du fer $\alpha$ à $20\text{ }^\circ\text{C}$ sachant qu'il cristallise dans le système CC avec un rayon $R_{Fe} = 0{,}124\text{ nm}$.

4. **Transition allotropique et effet de température**
   * À haute température ($> 912\text{ }^\circ\text{C}$), le fer pur subit une transition allotropique et passe du fer $\alpha$ (CC) au fer $\gamma$ (CFC).
   * Qualativement, quel est l'effet de ce changement de structure sur le volume massique du matériau ? Quel est l'impact géométrique sur les lacunes interstitielles ?

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Visualisez bien le cube : le contact entre atomes ne se fait pas le long des arêtes pour le CC, mais le long de la grande diagonale du cube (qui relie deux sommets opposés en passant par le centre).
* **Question 2 :** La compacité est le rapport du volume occupé par les atomes (assimilés à des boules pleines) sur le volume total de la maille. Veillez à bien compter le nombre effectif d'atomes par maille ($\mathcal{N}$) en tenant compte de leur position (sommets, faces, centre).
* **Question 3 :** Attention aux conversions d'unités ! Exprimez le rayon en mètres ($m$) pour obtenir une masse volumique en $\text{kg}\cdot\text{m}^{-3}$, puis convertissez-la en $\text{g}\cdot\text{cm}^{-3}$ pour plus de lisibilité.
* **Question 4 :** Reliez directement la compacité à l'efficacité du remplissage de l'espace. Un empilement plus compact laisse moins de "vide" à masse égale.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Rappels géométriques et coordinence
* La **coordinence** est le nombre de plus proches voisins d'un atome (ou ion) dans le cristal.
  * Pour le réseau **CC**, la coordinence est $z = 8$ (les 8 sommets entourant le centre).
  * Pour le réseau **CFC**, la coordinence est $z = 12$ (chaque atome au centre d'une face a 12 plus proches voisins).
* **Relation $a$ et $R$ (CC) :** Dans une maille cubique centrée, les atomes se touchent le long de la grande diagonale du cube de longueur $L = a\sqrt{3}$. Cette diagonale contient deux rayons de l'atome central et un rayon pour chacun des deux atomes d'extrémité (aux sommets). Ainsi :
  $$a\sqrt{3} = 4R \implies a = \frac{4R}{\sqrt{3}}$$

#### 2. Calcul de la compacité
* **Définition :** La compacité $c$ est le rapport du volume des atomes contenus dans la maille ($V_{\text{atomes}}$) sur le volume total de la maille ($V_{\text{maille}}$) :
  $$c = \frac{V_{\text{atomes}}}{V_{\text{maille}}} = \frac{\mathcal{N} \times \frac{4}{3}\pi R^3}{a^3}$$
* **Calcul pour le CC :**
  * Nombre d'atomes par maille CC : $\mathcal{N} = 8 \times \frac{1}{8} \text{ (sommets)} + 1 \times 1 \text{ (centre)} = 2$ atomes par maille.
  * Volume des atomes : $V_{\text{atomes}} = 2 \times \frac{4}{3}\pi R^3 = \frac{8}{3}\pi R^3$.
  * Volume de la maille : $V_{\text{maille}} = a^3 = \left(\frac{4R}{\sqrt{3}}\right)^3 = \frac{64R^3}{3\sqrt{3}}$.
  * Rapport :
    $$c_{CC} = \frac{\frac{8}{3}\pi R^3}{\frac{64R^3}{3\sqrt{3}}} = \frac{8}{3}\pi \times \frac{3\sqrt{3}}{64} = \frac{\sqrt{3}\pi}{8}$$
    Numériquement, $c_{CC} \approx \frac{1{,}732 \times 3{,}1416}{8} \approx 0{,}680$, soit **$68\,\%$**.
* **Conclusion :** La structure CC a une compacité de $68\,\%$, inférieure à celle du CFC ($74\,\%$). Le réseau CC est donc qualifié de **non compact**.

#### 3. Application au fer $\alpha$ (structure CC)
* Calculons le volume de la maille à partir du paramètre $a$ :
  $$a = \frac{4R_{Fe}}{\sqrt{3}} = \frac{4 \times 0{,}124\times 10^{-9}}{\sqrt{3}} \approx 2{,}864 \times 10^{-10}\text{ m}$$
  $$V_{\text{maille}} = a^3 \approx (2{,}864 \times 10^{-10})^3 \approx 2{,}35 \times 10^{-29}\text{ m}^3$$
* La masse de la maille $m_{\text{maille}}$ contenant $\mathcal{N} = 2$ atomes de fer est :
  $$m_{\text{maille}} = \frac{\mathcal{N} \cdot M(Fe)}{N_A} = \frac{2 \times 55{,}8 \times 10^{-3}}{6{,}02 \times 10^{23}} \approx 1{,}85 \times 10^{-25}\text{ kg}$$
* On en déduit la masse volumique $\rho$ :
  $$\rho = \frac{m_{\text{maille}}}{V_{\text{maille}}} = \frac{1{,}85 \times 10^{-25}}{2{,}35 \times 10^{-29}} \approx 7870\text{ kg}\cdot\text{m}^{-3}$$
  Soit **$\rho \approx 7{,}87\text{ g}\cdot\text{cm}^{-3}$**.

#### 4. Transition allotropique et effet de température
* Lors de la transition du fer $\alpha$ (CC, $c = 68\,\%$) vers le fer $\gamma$ (CFC, $c = 74\,\%$), la compacité **augmente**. 
* Les atomes se réorganisent pour occuper l'espace de manière plus efficace. À masse égale, le volume occupé par le réseau cristallin diminue (le volume massique diminue, ce qui correspond à une contraction brutale du réseau lors du chauffage à cette température précise, conjuguée à la dilatation thermique classique).
* Les sites interstitiels (octaédriques et tétraédriques) changent de taille et de géométrie, ce qui modifie la capacité d'insertion d'autres éléments chimiques (comme le carbone dans les aciers).