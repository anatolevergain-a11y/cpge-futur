---
title: 'Cours : Optique géométrique'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE BCPST.'
---

## 📌 1. Définitions & Cadre d'étude

L'optique géométrique étudie la propagation de la lumière en faisant abstraction de son caractère ondulatoire, ce qui est légitime lorsque les dimensions des obstacles et des ouvertures traversées sont très grandes devant la longueur d'onde $\lambda$ du rayonnement dans le milieu considéré ($\lambda \to 0$).

### 1.1. Modèle du rayon lumineux
* **Rayon lumineux :** Ligne géométrique, tangente en chacun de ses points au vecteur d'onde local (ou vecteur de Poynting moyen). C'est la direction de propagation de l'énergie lumineuse.
* **Indice de réfraction $n$ :** Caractère optique d'un milieu transparent et homogène, défini par :
  $$n = \frac{c}{v}$$
  avec $c$ la celerite de la lumiere dans le vide et $v$ la vitesse de propagation de la lumiere dans le milieu. Par definition, $n \ge 1$ (pour le vide, $n = 1$).

### 1.2. Lois de Snell-Descartes
Soit un dioptre séparant deux milieux d'indices respectifs $n_1$ (milieu incident) et $n_2$ (milieu de réfraction). Soit $\vec{n}$ la normale au dioptre au point d'incidence $I$.
* **1ère loi :** Le rayon réfracté (et le rayon réfléchi) appartient au plan d'incidence (défini par le rayon incident et la normale $\vec{n}$).
* **2ème loi (réfraction) :** 
  $$n_1 \sin(i_1) = n_2 \sin(i_2)$$
  où $i_1$ est l'angle d'incidence et $i_2$ l'angle de réfraction, mesurés par rapport à la normale $\vec{n}$.
* **Loi de la réflexion :** 
  $$i_1 = -r$$
  où $r$ est l'angle de réflexion algébrique.

### 1.3. Conditions de Gauss (stigmatisme et aplanétisme approchés)
Un système optique est dit **stigmatique** pour un point source $A$ si tous les rayons issus de $A$, après traversée du système, convergent vers un même point image $B$ (ou semblent en provenir).
Le stigmatisme rigoureux n'est réalisé que dans des cas très particuliers (miroir plan). En pratique, on cherche un **stigmatisme approché** obtenu dans les **conditions de Gauss** :
1. Les rayons lumineux font des angles petits avec l'axe optique du système.
2. Les rayons lumineux sont peu éloignés du sommet du système (proximité par rapport à l'axe).

Dans ces conditions, on approche les fonctions trigonométriques par :
$$\sin(\theta) \approx \theta, \quad \tan(\theta) \approx \theta, \quad \cos(\theta) \approx 1$$

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Relation de conjugaison avec origine au sommet pour un dioptre sphérique
Considérons un dioptre sphérique de sommet $S$, de centre $C$, de rayon de courbure $\overline{SC} = R$, séparant deux milieux d'indices $n_1$ et $n_2$.

**Démonstration (dans les conditions de Gauss) :**
Soit un rayon issu d'un point $A$ sur l'axe optique, frappant le dioptre en un point $M$ de hauteur $h = \overline{SM}$. Le rayon émerge en passant par $B$ sur l'axe optique.
Soit $\alpha$ l'angle $(\overline{SA}, \overline{SM})$, $\beta$ l'angle $(\overline{SC}, \overline{SM})$ et $\gamma$ l'angle $(\overline{SB}, \overline{SM})$.
Dans le triangle $AMC$, l'angle extérieur en $C$ donne :
$$i_1 = \alpha + \beta$$
Dans le triangle $BMC$, l'angle extérieur en $C$ donne :
$$\beta = i_2 + \gamma \implies i_2 = \beta - \gamma$$
En appliquant la loi de Snell-Descartes dans les conditions de Gauss ($\sin(i) \approx i$) :
$$n_1 i_1 = n_2 i_2 \implies n_1 (\alpha + \beta) = n_2 (\beta - \gamma)$$

Exprimons les angles à l'aide des approximations parahéliennes (arcs $\approx$ tangentes) :
$$\alpha \approx \frac{h}{\overline{SA}}, \quad \beta \approx \frac{h}{\overline{SC}}, \quad \gamma \approx \frac{h}{\overline{SB}}$$

En substituant dans la relation de Snell-Descartes et en simplifiant par $h$ :
$$n_1 \left( \frac{1}{\overline{SA}} + \frac{1}{\overline{SC}} \right) = n_2 \left( \frac{1}{\overline{SC}} - \frac{1}{\overline{SB}} \right)$$

On obtient la **relation de conjugaison du dioptre sphérique avec origine au sommet** :
$$\frac{n_2}{\overline{SB}} - \frac{n_1}{\overline{SA}} = \frac{n_2 - n_1}{\overline{SC}}$$

### 2.2. Relation de conjugaison d'une lentille mince (Formule de Descartes)
Une lentille mince est l'association de deux dioptres sphériques dont l'épaisseur au centre est négligeable devant les rayons de courbure.

Pour une lentille mince de centres optiques $S_1$ et $S_2$ confondues au centre optique $O$, séparant un milieu ambiant d'indice $n$ (généralement l'air, $n=1$) et un matériau d'indice $n_L$ :
$$\frac{1}{\overline{OB}} - \frac{1}{\overline{OA}} = \frac{1}{\overline{OF'}} = C$$
où $C$ est la **vergence** de la lentille, exprimée en dioptries ($\text{d}$ ou $\text{m}^{-1}$), et $F'$ est le foyer image principal.

## 💡 3. Méthodes de calcul & Algorithmes

### 3.1. Méthode algébrique (Grandeur algébrique)
Toutes les longueurs sur l'axe optique sont comptées algébriquement à partir d'un point de référence (sommet $S$, centre $O$ ou foyers $F, F'$).
* Sens positif de comptage : le sens de propagation de la lumière (de gauche à droite par convention).
* Hauteurs transverses : positives au-dessus de l'axe optique, négatives en dessous.

### 3.2. Grandissement transversal $y$
Le grandissement transversal $y$ relie la taille de l'image $\overline{A'B'}$ à celle de l'objet $\overline{AB}$ :
$$y = \frac{\overline{A'B'}}{\overline{AB}} = \frac{\overline{OB}}{\overline{OA}}$$
(pour une lentille mince placée dans le même milieu de part et d'autre).
* Si $y < 0$ : l'image est **renversée** par rapport à l'objet.
* Si $|y| > 1$ : l'image est **agrandie**.

### 3.3. Construction géométrique des rayons particuliers
Pour trouver graphiquement l'image $B'$ d'un point $B$ hors de l'axe :
1. **Rayon parallèle à l'axe optique :** Émerge (ou semble provenir) en passant par le foyer image $F'$.
2. **Rayon passant par le centre optique $O$ :** Traverse la lentille mince **sans être dévié**.
3. **Rayon passant par le foyer objet $F$ :** Émerge **parallèlement** à l'axe optique.

## ⚠️ 4. Pièges classiques aux Concours

1. **Oubli des conditions de Gauss :** Ne jamais appliquer les formules de conjugaison ou de grandissement si le système n'est pas utilisé dans les conditions de Gauss (ouverture numérique trop grande, source trop éloignée de l'axe).
2. **Erreurs de signe sur les grandeurs algébriques :** Une distance focale image $\overline{OF'}$ est positive pour une lentille convergente, mais **négative** pour une lentille divergente. Ne pas inverser les signes lors des applications numériques.
3. **Confusions d'unités pour la vergence :** La formule $C = \frac{1}{\overline{OF'}}$ impose que $\overline{OF'}$ soit exprimé en **mètres** ($\text{m}$) pour obtenir une vergence en dioptries ($\text{m}^{-1}$).
4. **Conditions d'émergence (Réflexion totale) :** Lors d'un passage d'un milieu plus réfringent vers un milieu moins réfringent ($n_1 > n_2$), attention à l'angle limite d'incidence $i_{lim} = \arcsin\left(\frac{n_2}{n_1}\right)$. Au-delà, il y a réflexion totale et aucun rayon ne se réfracte.