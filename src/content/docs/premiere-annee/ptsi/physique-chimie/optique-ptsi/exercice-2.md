---
title: 'Exercice 2 : Lentilles minces et stigmatisme'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

L'optique géométrique repose sur le modèle des rayons lumineux et l'approximation de Gauss (ou des conditions de stigmatisme approché). Dans ce problème, on s'intéresse aux limites de validité du modèle de la lentille mince sphérique convergente et à l'étude fine du stigmatisme pour des objets étendus ou des sources monochromatiques. 

On considère une lentille mince sphérique convergente de distance focale image $f' > 0$, de centre optique $O$, de faces de rayons de courbure $R_1 > 0$ et $R_2 < 0$, constituée d'un verre d'indice de réfraction $n$ plongé dans l'air ($n_{\text{air}} \approx 1$).

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Rappels et formules de conjugaison :** Établir la relation de conjugaison avec origine au centre $O$ pour une lentille mince, en fonction de la distance focale $f'$ et des positions algébriques $p = \overline{OA}$ et $p' = \overline{OA'}$ d'un objet $A$ et de son image $A'$.
2. **Étude du stigmatisme rigoureux :** On considère un dioptre sphérique unique de sommet $S$, de rayon $R$, séparant l'air ($n_1 = 1$) d'un milieu d'indice $n_2 = n$. Rappeler la condition géométrique pour qu'un point $A$ (objet) admette un point $A'$ (image) rigoureusement stigmatique. Le dioptre sphérique est-il rigoureusement stigmatique pour tous les points de l'espace ?
3. **Approximation de Gauss :** Définir les conditions de Gauss. Quel est l'impact de ces approximations sur la notion de stigmatisme ?
4. **Application numérique et étude de vergence :** Soit une lentille convergente de distance focale $f' = \text{5otho m} = \text{0,05 m}$. 
   - Calculer sa vergence $V$ en dioptries ($\delta$).
   - Un objet réel lumineux vertical de hauteur $h = \text{2,0 cm}$ est placé à une distance $d = \text{15,0 cm}$ devant la lentille. Déterminer la position, la nature (réelle ou virtuelle) et la taille de l'image.
5. **Analyse critique du modèle :** En déduire les limites de validité du modèle de la lentille mince lorsqu'on s'écarte des conditions de Gauss (aberrations chromatiques et géométriques).

### 💡 Pistes & Indications méthodologiques

* **Indication 1 :** Pour la question 1, partez de la relation de conjugaison des dioptres sphériques successifs constituant la lentille mince, en faisant l'approximation d'épaisseur nulle ($\overline{S_1S_2} \to 0$).
* **Indication 2 :** Le stigmatisme rigoureux pour un dioptre sphérique n'existe que pour des points dits "weierstrassiens". Pensez à la relation de Descartes avec les angles d'incidence.
* **Indication 3 :** Utilisez systématiquement l'analyse dimensionnelle et vérifiez le signe des grandeurs algébriques (compter positivement dans le sens de propagation de la lumière).

### 📋 Corrigé détaillé pas à pas

#### 1. Relation de conjugaison pour une lentille mince
Par définition, une lentille mince est la juxtaposition de deux dioptres sphériques de sommets $S_1$ et $S_2$ très proches, confondus avec le centre optique $O$ dans l'approximation des lentilles minces ($\overline{S_1S_2} = 0$). 
En appliquant la formule de conjugaison des dioptres sphériques et en sommant les effets (formule de Makers ou formule des opticiens), on obtient la relation de Descartes avec origine au centre $O$ :
$$\frac{1}{\overline{OA'}} - \frac{1}{\overline{OA}} = \frac{1}{f'}$$
Où $f'$ est la distance focale image définie par $\overline{OF'} = f'$.

#### 2. Stigmatisme rigoureux du dioptre sphérique
Un système optique est dit **rigoureusement stigmatique** pour un point $A$ si tous les rayons lumineux issus de $A$, après traversée du système, concourent en un même point unique $A'$. 
Pour un dioptre sphérique unique de centre $C$ et de sommet $S$, le stigmatisme rigoureux n'est obtenu que pour deux points particuliers de l'axe optique (les points de Weierstrass) et pour le centre $C$ (autostigmatisme). Pour un point quelconque de l'espace, le dioptre sphérique n'est **pas** rigoureusement stigmatique : les rayons émergents ne se croisent pas en un point unique, ce qui génère des aberrations (aberration de sphéricité).

#### 3. Approximation de Gauss et stigmatisme approché
Les conditions de Gauss consistent à considérer :
1. Des rayons peu inclinés par rapport à l'axe optique (les angles $\alpha$ avec l'axe sont petits, $\sin \alpha \approx \alpha$, $\tan \alpha \approx \alpha$).
2. Des objets de faible dimension transversale situés au voisinage immédiat de l'axe optique.

Sous ces conditions, on remplace les fonctions trigonométriques par leurs développements limités à l'ordre 1. Le système optique devient alors **approximativement stigmatique** (ou stigmatisme approché) : tous les rayons issus d'un point $A$ convergent dans une petite tache image $A'$ dont les dimensions sont de l'ordre de grandeur des termes d'ordre supérieur négligés.

#### 4. Application numérique et étude de vergence
* **Calcul de la vergence $V$ :**
  La vergence $V$ d'une lentille est définie par :
  $$V = \frac{n_{\text{air}}}{f'} = \frac{1}{f'}$$
  A.N. : $f' = \text{0,05 m}$, donc :
  $$V = \frac{1}{\text{0,05}} = \text{20}\text{ }\text{m}^{-1} \quad (\text{ou }\delta)$$

* **Position de l'image :**
  L'objet est placé à une distance $d = \text{15,0 cm}$ devant la lentille, donc la position algébrique est :
  $$\overline{OA} = -d = -\text{0,15 m}$$
  Utilisons la relation de conjugaison :
  $$\frac{1}{\overline{OA'}} = \frac{1}{f'} + \frac{1}{\overline{OA}} = \frac{1}{\text{0,05}} - \frac{1}{\text{0,15}} = \text{20} - \text{6,67} = \text{13,33}\text{ }\text{m}^{-1}$$
  $$\overline{OA'} = \frac{1}{\text{13,33}} = \text{0,075 m} = \text{7,5 cm}$$
  L'image $A'$ est réelle car $\overline{OA'} > 0$ (située après la lentille dans le sens de propagation).

* **Grandissement transversal et taille de l'image :**
  Le grandissement transversal $γ$ est donné par :
  $$\gamma = \frac{\overline{A'B'}}{\overline{AB}} = \frac{\overline{OA'}}{\overline{OA}}$$
  A.N. :
  $$\gamma = \frac{\text{0,075}}{-\text{0,15}} = -\text{0,5}$$
  La taille de l'image est donc :
  $$\overline{A'B'} = \gamma \cdot \overline{AB} = -\text{0,5} \times \text{2,0 cm} = -\text{1,0 cm}$$
  L'image est inversée (signe négatif) et mesure $\text{1,0 cm}$ de haut.

#### 5. Analyse critique du modèle
Le modèle de la lentille mince utilisé ici repose sur l'approximation de Gauss. Ses limites apparaissent lorsque :
* **L'ouverture est grande :** Des rayons trop éloignés de l'axe optique (grands angles d'incidence) ne vérifient plus $\sin \alpha \approx \alpha$. Cela se traduit par l'**aberration de sphéricité** : les rayons marginaux convergent plus près de la lentille que les rayons paraxiaux, empêchant l'obtention d'un point image ponctuel net.
* **La polychromaticité de la lumière :** L'indice de réfraction $n$ du verre dépend de la longueur d'onde $\lambda$ (phénomène de dispersion, relation de Cauchy $n(\lambda) = A + \frac{B}{\lambda^2}$). La distance focale $f'$ dépend donc de $\lambda$ ($f'(\lambda)$), ce qui provoque l'**aberration chromatique** : les différentes couleurs ne convergent pas au même foyer image.