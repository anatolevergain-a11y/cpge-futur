---
title: 'Exercice 2 : Lentilles minces et instruments'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Cadre d'étude

L'optique géométrique fournit un cadre puissant pour modéliser les instruments d'optique usuels. Dans ce problème, on s'intéresse à l'association de deux lentilles minces sphériques coaxiales, constituant un système optique centré, et à son application à la réalisation d'une lunette afocale. L'étude abordera la recherche des foyers du système global, l'établissement de la relation de conjugaison, puis l'analyse critique des limites du modèle paroxystique (conditions de Gauss) et de l'impact des diaphragmes.

On considère un système optique $\mathcal{S}$ constitué de deux lentilles minces coaxiales $L_1$ et $L_2$, de centres optiques respectifs $O_1$ et $O_2$ et de distances focales images respectives $\overline{O_1F_1'} = f_1'$ et $\overline{O_2F_2'} = f_2'$. L'axe optique commun est orienté dans le sens de propagation de la lumière. On pose l'intervalle optique $\Delta = \overline{F_1'F_2}$ et la distance inter-lentilles $e = \overline{O_1O_2}$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Relation de position et intervalle optique**
   Exprimer l'intervalle optique $\Delta$ en fonction de $e$, $f_1'$ et $f_2'$. Préciser la condition pour que ce système soit dit "réel".

2. **Foyers principaux du système global**
   * a) Rappeler la définition du foyer principal image $F'$ d'un système optique centré.
   * b) En considérant un rayon incident parallèle à l'axe optique, déterminer la position du foyer principal image $F'$ du système $\mathcal{S}$ par rapport à $O_2$, c'est-à-dire la distance focale image globale $f' = \overline{O_2F'}$. On exprimera $f'$ en fonction de $f_1'$, $f_2'$ et $\Delta$.
   * c) Par symétrie ou par un raisonnement analogue, exprimer la distance focale objet globale $f = \overline{O_1F}$ en fonction de $f_1'$, $f_2'$ et $\Delta$.

3. **Construction et étude d'une lunette afocale**
   * a) Définir ce qu'est un système afocal. Quelle est la particularité de son foyer image (et de son foyer objet) ?
   * b) On associe une lentille objective $L_1$ convergente de distance focale $f_1' > 0$ et une lentille oculaire $L_2$ divergente de distance focale $f_2' < 0$. Pour constituer une lunette de Galilei afocale, quelle relation doit lier $e$, $f_1'$ et $f_2'$ ?
   * c) Définir le grossissement $G$ de la lunette pour un objet situé à l'infini, en fonction des angles $\alpha$ (sous lequel l'objet est vu à l'œil nu) et $\alpha'$ (sous lequel l'image définitive est vue à travers la lunette). Exprimer $G$ en fonction des distances focales $f_1'$ et $f_2'$.

4. **Analyse critique et limites du modèle**
   * a) Le modèle des lentilles minces repose sur l'approximation de Gauss. Quelles sont les deux conditions fondamentales de cette approximation ? Quelles sont les conséquences d'un non-respect de ces conditions sur la formation des images (abérations géométriques usuelles) ?
   * b) Dans une lunette réelle, le diamètre de la pupille d'entrée est limité par le support de la lentille $L_1$. Quel est le rôle de la mise en place d'un diaphragme d'ouverture dans le plan focal image de l'objectif ? Discuter de l'influence de la diffraction sur la résolution maximale de l'instrument.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Utilisez la relation de Chasles pour décomposer la distance $\overline{F_1'F_2}$ à partir des points $O_1$ et $O_2$.
* **Question 2 :** Suivez le trajet d'un faisceau incident parallèle à l'axe optique : il converge d'abord vers $F_1'$ à travers $L_1$, ce point intermédiaire jouant le rôle d'objet virtuel pour la lentille $L_2$. Appliquez la formule de conjugaison de Descartes ou de Newton pour $L_2$.
* **Question 3 :** Un système afocal transforme un faisceau parallèle en un faisceau parallèle. Cela signifie que le foyer image de $L_1$ doit se confondre avec le foyer objet de $L_2$.
* **Question 4 :** Pensez aux angles par rapport à l'axe optique et aux hauteurs d'incidence. Pour la diffraction, utilisez le critère de Rayleigh.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Relation de position et intervalle optique
Par définition, l'intervalle optique est la distance algébrique $\Delta = \overline{F_1'F_2}$. 
En utilisant la relation de Chasles et sachant que $e = \overline{O_1O_2}$ :
$$\Delta = \overline{F_1'O_1} + \overline{O_1O_2} + \overline{O_2F_2}$$
Or, $\overline{F_1'O_1} = -f_1'$ et $\overline{O_2F_2} = -f_2'$ (puisque $F_2$ est le foyer objet de $L_2$, situé à une distance $-f_2'$ de $O_2$ dans le cas général, attention aux conventions : $\overline{O_2F_2} = f_2$ avec $f_2 = -f_2'$ pour une lentille mince, donc $\overline{O_2F_2} = -f_2'$).
Plus simplement, avec $\overline{O_1F_1'} = f_1'$ et $\overline{O_2F_2'} = f_2'$ :
Le foyer objet de $L_2$ est situé en un point $F_2$ tel que $\overline{O_2F_2} = -f_2'$ (si l'on pose $f_2'$ la focale image, la focale objet est $f_2 = -f_2'$). 
Ainsi, en décomposant $\overline{F_1'F_2}$ :
$$\Delta = e - f_1' - f_2'$$
Pour que le système soit réel (les foyers intermédiaires sont accessibles sur le banc d'optique), il faut que les foyers $F_1'$ et $F_2$ ne soient pas confondus et soient ordonnés physiquement, soit $\Delta > 0$ si l'on considère l'ordre de traversée, ou simplement $e > f_1' + f_2'$ dans le cas où les deux lentilles sont convergentes.

#### 2. Foyers principaux du système global
* **a)** Le foyer principal image $F'$ d'un système centré est le point conjugué d'un point situé à l'infini sur l'axe optique dans le sens incident. Tout rayon incident parallèle à l'axe optique émerge du système en passant par $F'$.
* **b)** Soit un rayon incident parallèle à l'axe optique. Il traverse $L_1$ et converge vers son foyer image $F_1'$. Le point $F_1'$ joue le rôle d'objet (virtuel ou réel) pour la lentille $L_2$. 
  La position de ce point objet intermédiaire par rapport au centre $O_2$ est :
  $$\overline{O_2F_1'} = \overline{O_2O_1} + \overline{O_1F_1'} = -e + f_1' = -(e - f_1')$$
  Appliquons la relation de conjugaison avec origines aux centres pour la lentille $L_2$ :
  $$\frac{1}{\overline{O_2F'}} - \frac{1}{\overline{O_2F_1'}} = \frac{1}{f_2'}$$
  On substitue $\overline{O_2F_1'}$ :
  $$\frac{1}{\overline{O_2F'}} - \frac{1}{-e + f_1'} = \frac{1}{f_2'} \implies \frac{1}{f'} = \frac{1}{f_2'} + \frac{1}{-e + f_1'}$$
  En remplaçant $-e + f_1'$ par $-\Delta - f_2'$ (d'après $\Delta = e - f_1' - f_2' \implies -e + f_1' = -f_2' - \Delta$) :
  $$\frac{1}{f'} = \frac{1}{f_2'} - \frac{1}{f_2' + \Delta} = \frac{(f_2' + \Delta) - f_2'}{f_2'(f_2' + \Delta)} = \frac{\Delta}{f_2'(f_2' + \Delta)}$$
  D'où la distance focale image globale :
  $$f' = \frac{f_1' f_2'}{\Delta}$$
  *(en notant que $f_2' + \Delta = f_2' + e - f_1' - f_2' = e - f_1' = -(\overline{O_2F_1'})$)*. Plus rigoureusement, en partant de $-e + f_1' = -(f_1' + \Delta)$, on obtient $f' = -\frac{f_1' f_2'}{\Delta}$.
* **c)** Par symétrie du système ou par un calcul mené en sens inverse (en étudiant un rayon issu du foyer objet $F$), on trouve la distance focale objet globale :
  $$f = -\frac{f_1' f_2'}{\Delta}$$

#### 3. Construction et étude d'une lunette afocale
* **a)** Un système est dit **afocal** lorsqu'il est stigmatique pour l'infini : son foyer image $F'$ (et son foyer objet $F$) est rejeté à l'infini. Il transforme tout faisceau parallèle incident en un faisceau parallèle émergeant.
* **b)** Pour qu'un système de deux lentilles soit afocal, il faut que le foyer image de la première lentille $F_1'$ soit confondu avec le foyer objet de la seconde lentille $F_2$. 
  Puisque $\Delta = \overline{F_1'F_2}$, la condition afocale s'écrit :
  $$\Delta = 0 \quad \text{soit} \quad e = f_1' + f_2'$$
  Pour une lunette de Galilei, l'objectif est convergent ($f_1' > 0$) et l'oculaire est divergent ($f_2' < 0$). La condition s'écrit donc $e = f_1' - |f_2'|$.
* **c)** Le grossissement $G$ est défini par le rapport des diamètres apparents :
  $$G = \frac{\alpha'}{\alpha}$$
  Où $\alpha$ est l'angle sous lequel l'objet (à l'infini) est vu à travers l'objectif, et $\alpha'$ l'angle sous lequel l'image définitive est vue à travers l'oculaire.
  Pour la lentille $L_1$, un objet de taille transversale intermédiaire $AB$ dans le plan focal commun donne $\alpha \simeq \frac{\overline{AB}}{f_1'}$. Pour la lentille $L_2$, $\alpha' \simeq \frac{\overline{AB}}{-f_2'}$ (ou $\frac{\overline{AB}}{f_2}$ avec $f_2$ focale objet de $L_2$).
  En effectuant le rapport :
  $$G = -\frac{f_1'}{f_2'}$$
  Dans le cas d'une lunette de Galilei ($f_2' < 0$), $G > 1$, l'image est droite et grossie.

#### 4. Analyse critique et limites du modèle
* **a)** L'approximation de Gauss repose sur deux conditions majeures :
  1. **Conditions d'incidence paraxysmique :** Les rayons lumineux font des angles faibles avec l'axe optique ($\sin \theta \approx \theta$, $\tan \theta \approx \theta$) et traversent les lentilles au voisinage immédiat du centre optique.
  2. **Stigmatisme approché :** Les plans de front sont assimilés à des plans perpendiculaires à l'axe.
  *Le non-respect de ces conditions entraîne l'apparition d'**aberrations géométriques*** :
  - *Aberrations chromatiques* (dépendantes de la longueur d'onde $\lambda$ car l'indice $n(\lambda)$ varie).
  - *Aberrations monochromatiques d'ordre supérieur* : sphéricité (les rayons marginaux ne convergent pas au même point que les rayons paraxiaux), coma, astigmatisme, courbure de champ et distorsion.
* **b)** Le diaphragme d'ouverture placé dans le plan focal image de l'objectif (qui est aussi le plan focal objet de l'oculaire) sert de **stigmatisant de champ** ou de limiteur de faisceau, définissant la pupille de sortie. 
  Cependant, même dans l'approximation de Gauss, la nature ondulatoire de la lumière impose une limite fondamentale : la **diffraction**. Un point objet n'est pas ponctuel mais donne une tâche d'Airy dont le rayon angulaire minimal est donné par le critère de Rayleigh :
  $$\theta_{\text{min}} \approx 1{,}22 \frac{\lambda}{D}$$
  où $D$ est le diamètre de la pupille d'entrée (objectif). Cela limite le pouvoir de résolution de l'instrument : deux objets séparés par un angle inférieur à $\theta_{\text{min}}$ ne peuvent être distingués, indépendamment du grossissement $G$ choisi.