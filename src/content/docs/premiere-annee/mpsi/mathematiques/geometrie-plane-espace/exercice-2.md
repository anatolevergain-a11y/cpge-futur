---
title: 'Exercice 2 : Repérage, droites, plans et sphères dans l espace 3D'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans l'espace affine euclidien orienté $\mathcal{E}_3$, rapporté à un repère orthonormal direct $\mathcal{R} = (O, \vec{i}, \vec{j}, \vec{k})$, on considère un tétraèdre $ABCD$ dont les sommets ont pour coordonnées cartésiennes respectives :
$$A(1, 0, 0), \quad B(0, 1, 0), \quad C(0, 0, 1), \quad D(1, 1, 1)$$

L'objectif de ce problème est d'étudier la configuration géométrique de ce tétraèdre, de déterminer l'équation de la sphère circonscrite à $ABCD$, et de caractériser l'intersection de cette sphère avec différents plans remarquables de l'espace. Les techniques mobilisées relèvent de la géométrie analytique vectorielle et du calcul de produits scalaires et vectoriels, indispensables en classe préparatoire aux concours.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Nature géométrique et repérage initial**
   a) Montrer que les points $A, B, C$ et $D$ ne sont pas coplanaires. En déduire qu'ils forment un tétraèdre bien défini.
   b) Calculer les coordonnées des vecteurs $\vec{AB}$, $\vec{AC}$ et $\vec{AD}$, puis déterminer l'aire du triangle $ABC$.

2. **Plans et droites remarquables**
   a) Déterminer une équation cartésienne du plan $(ABC)$.
   b) Déterminer un système d'équations paramétriques de la droite $(\Delta)$ passant par $D$ et orthogonale au plan $(ABC)$.
   c) Calculer les coordonnées du projeté orthogonal $H$ du point $D$ sur le plan $(ABC)$. En déduire la hauteur du tétraèdre issue de $D$.

3. **Sphère circonscrite**
   a) Soit $S$ la sphère circonscrite au tétraèdre $ABCD$. Rappeler l'équation générale d'une sphère dans $\mathcal{E}_3$ et écrire un système de 4 équations permettant de déterminer le centre $\Omega(x_\Omega, y_\Omega, z_\Omega)$ et le rayon $R$ de $S$.
   b) Résoudre ce système et expliciter l'équation cartésienne de $S$.
   c) Vérifier si le centre $\Omega$ de la sphère $S$ coïncide avec le centre de gravité $G$ du tétraèdre $ABCD$. Conclure sur la régularité du tétraèdre.

4. **Intersections et analyse critique**
   a) Déterminer la nature et les éléments caractéristiques de l'intersection de la sphère $S$ avec le plan $(Oxy)$ d'équation $z = 0$.
   b) **Analyse critique du modèle :** Si l'on perturbe légèrement les coordonnées du sommet $D$ en posant $D_\varepsilon(1+\varepsilon, 1, 1)$ avec $\varepsilon \to 0$, décrire qualitativement l'évolution du centre $\Omega_\varepsilon$ de la sphère circonscrite. Quel est l'impact d'une telle incertitude expérimentale sur les applications géométriques en robotique ou en infographie 3D ?

---

### 💡 Pistes & Indications méthodologiques

- **Q1 :** Pour la non-coplanarité, calcule le déterminant formé par les vecteurs $\vec{AB}$, $\vec{AC}$ et $\vec{AD}$. Pour l'aire, utilise la norme du produit vectoriel $\frac{1}{2} \|\vec{AB} \wedge \vec{AC}\|$.
- **Q2 :** Un vecteur normal au plan $(ABC)$ est donné par $\vec{n} = \vec{AB} \wedge \vec{AC}$. La droite $(\Delta)$ utilise ce même vecteur comme vecteur directeur. Le point $H$ s'obtient en injectant les équations paramétriques de $(\Delta)$ dans l'équation du plan $(ABC)$.
- **Q3 :** L'équation d'une sphère est $(x-x_\Omega)^2 + (y-y_\Omega)^2 + (z-z_\Omega)^2 = R^2$, ou de manière équivalente $x^2+y^2+z^2 + ax + by + cz + d = 0$. L'équidistance de $\Omega$ par rapport aux quatre points $A, B, C, D$ fournit un système linéaire simple.
- **Q4 :** Pour l'intersection avec $z=0$, substitue $z=0$ dans l'équation cartésienne de $S$ et reconnais l'équation d'un cercle dans le plan. Pour l'analyse critique, effectue un calcul différentiel ou une résolution paramétrée en $\varepsilon$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Nature géométrique et repérage initial

a) **Non-coplanarité des points :**
Calculons les vecteurs issus de $A$ :
$$\vec{AB} = (-1, 1, 0), \quad \vec{AC} = (-1, 0, 1), \quad \vec{AD} = (0, 1, 1)$$
Formons la matrice de ces trois vecteurs pour calculer leur déterminant (produit mixte) :
$$\det(\vec{AB}, \vec{AC}, \vec{AD}) = \begin{vmatrix} -1 & -1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \end{vmatrix}$$
En développant par rapport à la première ligne :
$$\det = -1 \cdot (0 - 1) - (-1) \cdot (1 - 0) + 0 = 1 + 1 = 2$$
Le déterminant est non nul ($2 \neq 0$), ce qui prouve que la famille $(\vec{AB}, \vec{AC}, \vec{AD})$ forme une base de l'espace vectoriel $\mathcal{V}_3$. Par conséquent, les points $A, B, C$ et $D$ ne sont pas coplanaires et définissent un tétraèdre non aplati.

b) **Aire du triangle $ABC$ :**
Calculons le produit vectoriel $\vec{AB} \wedge \vec{AC}$ :
$$\vec{AB} \wedge \vec{AC} = \begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix} \wedge \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \cdot 1 - 0 \cdot 0 \\ 0 \cdot (-1) - (-1) \cdot 1 \\ (-1) \cdot 0 - 1 \cdot (-1) \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$$
L'aire $\mathcal{A}$ du triangle $ABC$ vaut :
$$\mathcal{A} = \frac{1}{2} \|\vec{AB} \wedge \vec{AC}\| = \frac{1}{2} \sqrt{1^2 + 1^2 + 1^2} = \frac{\sqrt{3}}{2} \text{ (unités d'aire)}$$

---

#### 2. Plans et droites remarquables

a) **Équation du plan $(ABC)$ :**
Le vecteur $\vec{n} = \vec{AB} \wedge \vec{AC} = (1, 1, 1)$ est un vecteur normal au plan $(ABC)$. Une équation cartésienne est donc de la forme :
$$1 \cdot x + 1 \cdot y + 1 \cdot z + d = 0$$
Puisque le point $A(1, 0, 0)$ appartient au plan, ses coordonnées vérifient l'équation :
$$1 + 0 + 0 + d = 0 \implies d = -1$$
Ainsi, le plan $(ABC)$ a pour équation cartésienne :
$$\text{(P)}_{ABC} : x + y + z - 1 = 0$$

b) **Droite $(\Delta)$ orthogonale à $(ABC)$ passant par $D$ :**
La droite $(\Delta)$ passe par $D(1, 1, 1)$ et admet $\vec{n} = (1, 1, 1)$ comme vecteur directeur. Un système d'équations paramétriques de $(\Delta)$ est :
$$\begin{cases} x = 1 + t \\ y = 1 + t \\ z = 1 + t \end{cases}, \quad t \in \mathbb{R}$$

c) **Projeté orthogonal $H$ et hauteur du tétraèdre :**
Le point $H$ est l'intersection de la droite $(\Delta)$ et du plan $(ABC)$. Injectons les équations paramétriques dans l'équation du plan :
$$(1 + t) + (1 + t) + (1 + t) - 1 = 0 \implies 3t + 2 = 0 \implies t = -\frac{2}{3}$$
En reportant cette valeur dans le système paramétrique :
$$x_H = 1 - \frac{2}{3} = \frac{1}{3}, \quad y_H = 1 - \frac{2}{3} = \frac{1}{3}, \quad z_H = 1 - \frac{2}{3} = \frac{1}{3}$$
Le projeté orthogonal a pour coordonnées $H\left(\frac{1}{3}, \frac{1}{3}, \frac{1}{3}\right)$.
La hauteur $h$ du tétraèdre issue de $D$ est la distance $DH$ :
$$h = \|\vec{DH}\| = \sqrt{\left(\frac{1}{3} - 1\right)^2 + \left(\frac{1}{3} - 1\right)^2 + \left(\frac{1}{3} - 1\right)^2} = \sqrt{3 \left(-\frac{2}{3}\right)^2} = \sqrt{3 \cdot \frac{4}{9}} = \frac{2\sqrt{3}}{3} \text{ (unités de longueur)}$$

---

#### 3. Sphère circonscrite

a) **Mise en place du système :**
Soit $S$ la sphère d'équation cartésienne :
$$x^2 + y^2 + z^2 + ax + by + cz + d = 0$$
Puisque $S$ circonscrit le tétraèdre $ABCD$, les coordonnées de $A, B, C$ et $D$ doivent satisfaire cette équation :
- Pour $A(1, 0, 0)$ : $1 + a + d = 0$
- Pour $B(0, 1, 0)$ : $1 + b + d = 0$
- Pour $C(0, 0, 1)$ : $1 + c + d = 0$
- Pour $D(1, 1, 1)$ : $1^2 + 1^2 + 1^2 + a + b + c + d = 3 + a + b + c + d = 0$

b) **Résolution du système et équation de $S$ :**
D'après les trois premières équations :
$$a = -1 - d, \quad b = -1 - d, \quad c = -1 - d$$
Substituons $a, b, c$ dans la quatrième équation :
$$3 + (-1 - d) + (-1 - d) + (-1 - d) + d = 0$$
$$3 - 3 - 3d + d = 0 \implies -2d = 0 \implies d = 0$$
On en déduit immédiatement :
$$a = -1, \quad b = -1, \quad c = -1, \quad d = 0$$
L'équation cartésienne de la sphère $S$ est donc :
$$x^2 + y^2 + z^2 - x - y - z = 0$$
Mettons cette équation sous forme canonique pour trouver le centre $\Omega$ et le rayon $R$ :
$$\left(x - \frac{1}{2}\right)^2 - \frac{1}{4} + \left(y - \frac{1}{2}\right)^2 - \frac{1}{4} + \left(z - \frac{1}{2}\right)^2 - \frac{1}{4} = 0$$
$$\left(x - \frac{1}{2}\right)^2 + \left(y - \frac{1}{2}\right)^2 + \left(z - \frac{1}{2}\right)^2 = \frac{3}{4}$$
Le centre de la sphère est $\Omega\left(\frac{1}{2}, \frac{1}{2}, \frac{1}{2}\right)$ et son rayon est $R = \frac{\sqrt{3}}{2}$.

c) **Comparaison avec le centre de gravité :**
Le centre de gravité $G$ du tétraèdre $ABCD$ est défini par :
$$x_G = \frac{x_A + x_B + x_C + x_D}{4} = \frac{1 + 0 + 0 + 1}{4} = \frac{2}{4} = \frac{1}{2}$$
Par symétrie des coordonnées, on trouve de même $y_G = \frac{1}{2}$ et $z_G = \frac{1}{2}$.
Ainsi, $\Omega = G\left(\frac{1}{2}, \frac{1}{2}, \frac{1}{2}\right)$. Le centre de la sphère circonscrite coïncide avec le centre de gravité du tétraèdre. Toutefois, le tétraèdre $ABCD$ n'est pas régulier car les longueurs des arêtes ne sont pas toutes égales (par exemple, $\|\vec{AB}\| = \sqrt{2}$ tandis que $\|\vec{AD}\| = \sqrt{1^2 + 1^2 + 0^2} = \sqrt{2}$, mais $\|\vec{AC}\| = \sqrt{2}$ et $\|\text{BC}\| = \sqrt{2}$, alors que $\|\text{CD}\| = 1$). La coïncidence de $\Omega$ et $G$ est une propriété remarquable liée à l'isométrie de certaines arêtes par rapport au repère orthogonal.

---

#### 4. Intersections et analyse critique

a) **Intersection de $S$ avec le plan $(Oxy)$ ($z = 0$) :**
En posant $z = 0$ dans l'équation de la sphère $S$, on obtient :
$$x^2 + y^2 - x - y = 0$$
Mettons cette équation sous forme canonique :
$$\left(x - \frac{1}{2}\right)^2 - \frac{1}{4} + \left(y - \frac{1}{2}\right)^2 - \frac{1}{4} = 0 \implies \left(x - \frac{1}{2}\right)^2 + \left(y - \frac{1}{2}\right)^2 = \frac{1}{2}$$
L'intersection est donc **un cercle** situé dans le plan $(Oxy)$, de centre $\Omega' \left(\frac{1}{2}, \frac{1}{2}, 0\right)$ et de rayon $R' = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$.

b) **Analyse critique du modèle et perturbations :**
Considérons le sommet perturbé $D_\varepsilon(1+\varepsilon, 1, 1)$. Reprenons le calcul du centre $\Omega_\varepsilon(x_\Omega, y_\Omega, z_\Omega)$ de la sphère circonscrite. 
La condition d'équidistance $\|\Omega_\varepsilon - A\|^2 = \|\Omega_\varepsilon - D_\varepsilon\|^2$ montre que la composante $x_\Omega$ est modifiée de l'ordre de $\mathcal{O}(\varepsilon)$. En pratique, dans les systèmes de CAO (Conception Aide par Ordinateur), de robotique ou de modélisation numérique 3D, les coordonnées des sommets mesurées par capteurs comportent toujours une incertitude métrologique $\varepsilon$. 
Une variation infime sur un sommet engendre un déplacement du centre de la sphère circonscrite et une modification de son rayon. Si le système est mal conditionné (ce qui arrive lorsque le déterminant du système linéaire est proche de zéro), une petite erreur d'entrée $\varepsilon$ peut générer une erreur amplifiée sur la localisation du centre $\Omega$, risquant de fausser les calculs d'intersections cinématiques ou géométriques en aval.