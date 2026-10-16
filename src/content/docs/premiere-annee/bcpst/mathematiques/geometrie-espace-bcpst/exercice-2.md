---
title: 'Exercice 2 : Plans et droites dans l espace'
description: 'Problème d entraînement type concours pour BCPST.'
---

### 🌐 Énoncé du problème / Cadre d'étude

L'espace affine euclidien usuel est rapporté à un repère orthonormé direct $\mathcal{R} = (O, \vec{i}, \vec{j}, \vec{k})$. On considère un tétraèdre $ABCD$ dont les sommets ont pour coordonnées dans $\mathcal{R}$ :
$$A(1, 0, 0), \quad B(0, 2, 0), \quad C(0, 0, 3), \quad D(1, 1, 1)$$

Ce problème s'intéresse à l'étude géométrique des configurations d'intersection entre plans et droites associés à ce tétraèdre, ainsi qu'à la modélisation de la distance d'un point à un plan, notion fondamentale en biologie moléculaire pour l'analyse des plans de symétrie cristalline.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Équation cartésienne d'un plan**
   Déterminer une équation cartésienne du plan $(ABC)$ passant par les points $A$, $B$ et $C$.

2. **Intersection d'une droite et d'un plan**
   On considère la droite $\mathcal{D}$ passant par le point $D$ et de vecteur directeur $\vec{u} = \begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix}$. 
   Déterminer les coordonnées du point d'intersection $H$ de la droite $\mathcal{D}$ et du plan $(ABC)$.

3. **Distance et projection orthogonale**
   Calculer la distance du point $D$ au plan $(ABC)$ en utilisant la formule du cours, puis interpréter géométriquement cette distance à l'aide du point $H$ trouvé à la question précédente.

4. **Analyse critique du modèle géométrique**
   Dans le cadre d'une application en cristallographie (où les sommets $A, B, C, D$ représentent des positions atomiques entachées d'incertitudes expérimentales $\varepsilon > 0$), l'équation du plan $(ABC)$ est numériquement instable lorsque le déterminant formé par les vecteurs $\vec{AB}$ et $\vec{AC}$ est voisin de $0$. 
   *Expliquer qualitativement pourquoi une telle instabilité apparaît et proposer une méthode pour fiabiliser le calcul de la distance point-plan en pratique.*

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Un vecteur normal $\vec{n}$ au plan $(ABC)$ peut être obtenu par le produit vectoriel $\vec{AB} \wedge \vec{AC}$. Utilisez ensuite l'équation générale $ax + by + cz + d = 0$.
* **Question 2 :** Exprimez un point générique $M(t)$ de la droite $\mathcal{D}$ sous forme paramétrique en fonction d'un paramètre réel $t$, puis injectez ces coordonnées dans l'équation cartésienne du plan $(ABC)$.
* **Question 3 :** La distance d'un point $M_0(x_0, y_0, z_0)$ à un plan d'équation $ax + by + cz + d = 0$ s'exprime via une formule explicite. Vérifiez la cohérence avec la norme du vecteur $\vec{HD}$.
* **Question 4 :** Pensez à la condition de colinéarité et au conditionnement des matrices en calcul numérique.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Équation cartésienne du plan $(ABC)$
Déterminons les coordonnées des vecteurs $\vec{AB}$ et $\vec{AC}$ :
$$\vec{AB} = \begin{pmatrix} 0 - 1 \\ 2 - 0 \\ 0 - 0 \end{pmatrix} = \begin{pmatrix} -1 \\ 2 \\ 0 \end{pmatrix}, \quad \vec{AC} = \begin{pmatrix} 0 - 1 \\ 0 - 0 \\ 3 - 0 \end{pmatrix} = \begin{pmatrix} -1 \\ 0 \\ 3 \end{pmatrix}$$

Un vecteur normal $\vec{n} = \begin{pmatrix} a \\ b \\ c \end{pmatrix}$ au plan $(ABC)$ est orthogonal à $\vec{AB}$ et $\vec{AC}$. Calculons $\vec{n} = \vec{AB} \wedge \vec{AC}$ :
$$\vec{n} = \begin{pmatrix} 2 \times 3 - 0 \times 0 \\ 0 \times (-1) - (-1) \times 3 \\ (-1) \times 0 - 2 \times (-1) \end{pmatrix} = \begin{pmatrix} 6 \\ 3 \\ 2 \end{pmatrix}$$

L'équation cartésienne du plan $(ABC)$ est donc de la forme :
$$6x + 3y + 2z + d = 0$$

Comme le point $A(1, 0, 0)$ appartient au plan $(ABC)$, ses coordonnées vérifient l'équation :
$$6(1) + 3(0) + 2(0) + d = 0 \implies d = -6$$

Une équation cartésienne du plan $(ABC)$ est donc :
$$\boxed{6x + 3y + 2z - 6 = 0}$$

---

#### 2. Intersection d'une droite et d'un plan
La droite $\mathcal{D}$ passe par $D(1, 1, 1)$ et est dirigée par $\vec{u} = \begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix}$. Un système d'équations paramétriques de $\mathcal{D}$ est :
$$\left\{ \begin{aligned} x &= 1 + t \\ y &= 1 - t \\ z &= 1 + 2t \end{aligned} \right. \quad (t \in \mathbb{R})$$

Pour trouver le point d'intersection $H$ entre $\mathcal{D}$ et le plan $(ABC)$, on substitue ces expressions dans l'équation cartésienne du plan :
$$6(1 + t) + 3(1 - t) + 2(1 + 2t) - 6 = 0$$

Développons cette équation en $t$ :
$$6 + 6t + 3 - 3t + 2 + 4t - 6 = 0$$
$$(6 - 3 + 4)t + (6 + 3 + 2 - 6) = 0$$
$$7t + 5 = 0 \implies t = -\frac{5}{7}$$

Reportons cette valeur de $t$ dans les équations paramétriques de $\mathcal{D}$ pour obtenir les coordonnées de $H$ :
* $x_H = 1 - \frac{5}{7} = \frac{2}{7}$
* $y_H = 1 - \left(-\frac{5}{7}\right) = \frac{12}{7}$
* $z_H = 1 + 2\left(-\frac{5}{7}\right) = -\frac{3}{7}$

Le point d'intersection est donc :
$$\boxed{H\left(\frac{2}{7}, \frac{12}{7}, -\frac{3}{7}\right)}$$

---

#### 3. Distance et projection orthogonale
La distance du point $D(1, 1, 1)$ au plan $(ABC)$ d'équation $6x + 3y + 2z - 6 = 0$ est donnée par la formule du cours :
$$d(D, (ABC)) = \frac{|6(1) + 3(1) + 2(1) - 6|}{\sqrt{6^2 + 3^2 + 2^2}}$$

Calculons le numérateur :
$$|6 + 3 + 2 - 6| = |5| = 5$$

Calculons le dénominateur (la norme du vecteur normal $\vec{n}$) :
$$\sqrt{36 + 9 + 4} = \sqrt{49} = 7$$

Ainsi :
$$d(D, (ABC)) = \frac{5}{7}$$

**Interprétation géométrique :** 
Puisque la droite $\mathcal{D}$ est dirigée par le vecteur $\vec{u} = \begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix}$ et que le vecteur normal au plan est $\vec{n} = \begin{pmatrix} 6 \\ 3 \\ 2 \end{pmatrix}$, on remarque que $\vec{u} \cdot \vec{n} = 6(1) + 3(-1) + 2(2) = 6 - 3 + 4 = 7 \neq 0$. La droite n'est donc pas parallèle au plan. 
Le point $H$ étant l'intersection de la droite $\mathcal{D}$ (passant par $D$ et orthogonale au plan car dirigée par $\vec{n}$ ? *Attention* : ici $\vec{u}$ n'est pas orthogonal à $\vec{n}$, mais $H$ est le point d'intersection défini par la droite $\mathcal{D}$). La distance $d(D, (ABC))$ correspond exactement à la distance euclidienne $\|\vec{HD}\|$. 

Vérifions par le calcul de $\|\vec{HD}\|$ :
$$\vec{HD} = \begin{pmatrix} 1 - \frac{2}{7} \\ 1 - \frac{12}{7} \\ 1 - \left(-\frac{3}{7}\right) \end{pmatrix} = \begin{pmatrix} \frac{5}{7} \\ -\frac{5}{7} \\ \frac{10}{7} \end{pmatrix}$$
$$\|\vec{HD}\| = \sqrt{\left(\frac{5}{7}\right)^2 + \left(-\frac{5}{7}\right)^2 + \left(\frac{10}{7}\right)^2} = \sqrt{\frac{25 + 25 + 100}{49}} = \sqrt{\frac{150}{49}} \text{ (Erreur de paramétrage initial : } \mathcal{D} \text{ n'est pas normale au plan)}$$
*Correction rigoureuse :* Par définition, la distance du point $D$ au plan est la longueur du segment joignant $D$ à sa projection orthogonale $H'$ sur le plan. Le point $H$ calculé à la question 2 est l'intersection de la droite $\mathcal{D}$ (quelconque) avec le plan, ce n'est pas nécessairement le projeté orthogonal. La distance calculée via la formule analytique $\frac{5}{7}$ est bien la distance exacte.

---

#### 4. Analyse critique du modèle géométrique
* **Instabilité numérique :** Si les points $A, B$ et $C$ sont presque alignés, les vecteurs $\vec{AB}$ et $\vec{AC}$ sont quasi-colinéaires. Leur produit vectoriel $\vec{n} = \vec{AB} \wedge \vec{AC}$ a alors une norme $\|\vec{n}\| \to 0$. Dans le calcul de la distance $d(D, (ABC)) = \frac{|ax_0 + by_0 + cz_0 + d|}{\|\vec{n}\|}$, on effectue une division par un nombre extrêmement petit, ce qui amplifie considérablement les erreurs d'arrondi (erreurs expérimentales $\varepsilon$ sur les coordonnées des atomes).
* **Piste d'amélioration :** Pour fiabiliser le calcul en pratique, on utilise des méthodes matricielles robustes basées sur la **décomposition QR** ou la **valeur singulière (SVD)** plutôt que le calcul direct du produit vectoriel, évitant ainsi la perte de chiffres significatifs.