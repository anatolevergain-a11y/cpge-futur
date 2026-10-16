---
title: 'Cours : Cinématique 3D et torseurs cinématiques'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $R_0 = (O, \vec{x}_0, \vec{y}_0, \vec{z}_0)$ un repère galiléen (ou par extension, un repère de référence) et $R_1 = (O_1, \vec{x}_1, \vec{y}_1, \vec{z}_1)$ un repère lié à un solide $S_1$.

### Champ des vecteurs vitesse
Le champ des vecteurs vitesse des points d'un solide $S_1$ par rapport à un repère $R_0$, noté $\vec{V}_{S_1/R_0}(M)$, est un champ de vecteurs **équiprojectif**. 

### Définition du torseur cinématique
Il existe un vecteur unique, noté $\vec{\Omega}_{S_1/R_0}$, appelé vecteur taux de rotation du solide $S_1$ par rapport à $R_0$, tel que pour tout couple de points $(A, B)$ du solide $S_1$ :
$$\vec{V}_{S_1/R_0}(B) = \vec{V}_{S_1/R_0}(A) + \vec{AB} \land \vec{\Omega}_{S_1/R_0}$$

Le **torseur cinématique** du mouvement de $S_1$ par rapport à $R_0$, exprimé au point $A$, est le torseur noté :
$$\{\mathcal{V}_{S_1/R_0}\} = \left\{ \begin{array}{c} \vec{\Omega}_{S_1/R_0} \\ \vec{V}_{S_1/R_0}(A) \end{array} \right\}_A$$

La réduction en un point $A$ associe à ce torseur une matrice colonne des composantes dans une base $\mathcal{B} = (\vec{x}, \vec{y}, \vec{z})$ :
$$\mathcal{V}_{S_1/R_0}(A) = \begin{pmatrix} p \\ q \\ r \\ u \\ v \\ w \end{pmatrix}_{\mathcal{B}} \in \mathcal{M}_{6,1}(\mathbb{R})$$
où $\vec{\Omega}_{S_1/R_0} = p\vec{x} + q\vec{y} + r\vec{z}$ et $\vec{V}_{S_1/R_0}(A) = u\vec{x} + v\vec{y} + w\vec{z}$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème de composition des vitesses
Soient trois repères (ou solides) $R_0$, $R_1$ et $R_2$. Pour tout point $M$ appartenant par définition au solide lié à $R_2$ :
$$\vec{V}_{R_2/R_0}(M) = \vec{V}_{R_2/R_1}(M) + \vec{V}_{R_1/R_0}(M)$$

### Théorème de composition des torseurs cinématiques
La composition des mouvements se traduit par l'addition des torseurs cinématiques :
$$\{\mathcal{V}_{R_2/R_0}\} = \{\mathcal{V}_{R_2/R_1}\} + \{\mathcal{V}_{R_1/R_0}\}$$

#### Démonstration rigoureuse :
Soit $A$ un point quelconque. Par définition de la composition des vitesses pour un point $M$ confondu avec $A$ :
$$\vec{V}_{R_2/R_0}(A) = \vec{V}_{R_2/R_1}(A) + \vec{V}_{R_1/R_0}(A)$$

Considérons maintenant les vecteurs taux de rotation. Soit $\vec{x}, \vec{y}, \vec{z}$ une base liée au repère intermédiaire $R_1$. Par définition de la dérivation vectorielle :
$$\vec{\Omega}_{R_2/R_0} = \vec{\Omega}_{R_2/R_1} + \vec{\Omega}_{R_1/R_0}$$
En effet, si l'on dérive un vecteur unitaire $\vec{u}$ de la base de $R_2$ par rapport à $R_0$ :
$$\left. \frac{d\vec{u}}{dt} \right|_{R_0} = \left. \frac{d\vec{u}}{dt} \right|_{R_1} + \vec{\Omega}_{R_1/R_0} \land \vec{u}$$
En appliquant cette relation au champ vectoriel de rotation, on démontre l'additivité des torseurs cinématiques en un même point $A$. $\blacksquare$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Algorithme de détermination d'une liaison normalisée
Pour écrire le torseur cinématique d'une liaison entre deux solides $S_1$ et $S_2$ de centre $O$ :
1. **Identifier la géométrie de la liaison** : translation, rotation, hélicoïdale, sphérique, etc.
2. **Poser le torseur dans la base locale** liée au mécanisme (par exemple, $\vec{z}$ porté par l'axe de la liaison pivot).
3. **Annuler les degrés de liberté interdits** (termes nuls dans le vecteur rotation ou vitesse).

Exemple pour une **Liaison Pivot d'axe $(O, \vec{z})$** :
$$\{\mathcal{V}_{S_2/S_1}\} = \left\{ \begin{array}{c} \dot{\theta} \vec{z} \\ \vec{0} \end{array} \right\}_O = \begin{pmatrix} 0 & 0 \\ 0 & 0 \\ \dot{\theta} & 0 \\ 0 & 0 \end{pmatrix}_{\text{base}} \text{ (sous forme de matrice d'inertie/composantes)}$$
Plus rigoureusement sous forme de matrice colonne des composantes à l'point $O$ :
$$\mathcal{V}_{S_2/S_1}(O) = \begin{pmatrix} 0 \\ 0 \\ \dot{\theta} \\ 0 \\ 0 \\ 0 \end{pmatrix}_{\mathcal{B}} \in \mathcal{M}_{6,1}(\mathbb{R})$$

### Utilisation de la formule de transport
Pour transporter les éléments de réduction d'un point $A$ vers un point $B$ :
$$\vec{V}_{S_1/R_0}(B) = \vec{V}_{S_1/R_0}(A) + \vec{BA} \land \vec{\Omega}_{S_1/R_0}$$

---

## ⚠️ 4. Pièges classiques & Erreurs à éviter

* **Attention au point de transport** : Ne jamais additionner ou égaler des moments (vecteurs vitesse) de torseurs exprimés en des points différents sans appliquer la formule de transport.
* **Non-holonomie de la vitesse** : Le champ des vitesses est un torseur, mais le déplacement fini (ou position) ne forme **pas** un torseur. N'intégrez jamais brutalement un torseur cinématique pour obtenir un torseur géométrique.
* **Confusion dans l'ordre de composition** : 
  $$\{\mathcal{V}_{S_2/R_0}\} = \{\mathcal{V}_{S_2/S_1}\} + \{\mathcal{V}_{S_1/R_0}\}$$
  L'indice "muet" $S_1$ doit se suivre (fermeture de la chaîne des compositions).
* **Bases de projection** : Veillez impérativement à ce que toutes les composantes d'un même torseur (vecteur rotation et vecteur vitesse) soient projetées dans **la même base** avant d'effectuer des opérations algébriques matricielles.