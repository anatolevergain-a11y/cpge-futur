---
title: 'Exercice 1 : Produit scalaire et vectoriel'
description: 'Problème d entraînement type concours pour BCPST.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $(\mathcal{E})$ un espace affine euclidien orienté de dimension 3, rattaché à son espace vectoriel euclidien orienté associé $E$. On munit $E$ d'une base orthonormée directe $\mathcal{B} = (\vec{i}, \vec{j}, \vec{k})$. 

Dans ce problème, on s'intéresse à l'étude géométrique d'un système mécanique et cinématique modélisé par un tétraèdre non aplati $OABC$ et à l'analyse vectorielle de forces appliquées à ses faces, un grand classique des épreuves de mathématiques en BCPST (concours Agro-Véto et G2E).

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Calculs préliminaires dans $E$**  
   Soient les trois vecteurs de $E$ définis par leurs coordonnées dans la base $\mathcal{B}$ :
   $$\vec{u} = \begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix}, \quad \vec{v} = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}, \quad \vec{w} = \begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix}$$
   * **(a)** Calculer le produit scalaire $\vec{u} \cdot \vec{v}$ et en déduire la nature de l'angle $(\vec{u}, \vec{v})$.
   * **(b)** Calculer le produit vectoriel $\vec{u} \wedge \vec{v}$.
   * **(c)** Calculer le produit mixte $[\vec{u}, \vec{v}, \vec{w}] = (\vec{u} \wedge \vec{v}) \cdot \vec{w}$. Que peut-on en déduire géométriquement quant aux vecteurs $\vec{u}$, $\vec{v}$ et $\vec{w}$ ?

2. **Application géométrique : Aire et Volume**  
   On considère les points $O(0,0,0)$, $A(1,-1,2)$, $B(0,1,1)$ et $C(2,1,-1)$ dans le repère cartésien associé à $\mathcal{B}$.
   * **(a)** Exprimer l'aire du triangle $OAB$ à l'aide d'un produit vectoriel, puis calculer sa valeur numérique.
   * **(b)** Exprimer le volume du tétraèdre $OABC$ à l'aide d'un produit mixte. Calculer ce volume.

3. **Moment d'une force et axes principaux**  
   Soit $\vec{F} = \begin{pmatrix} F_x \\ F_y \\ F_z \end{pmatrix}$ une force constante appliquée au point $M(x, y, z)$. Le moment de cette force par rapport à l'origine $O$ est défini par le vecteur $\vec{\mathcal{M}}_O(\vec{F}) = \vec{OM} \wedge \vec{F}$.
   * **(a)** Expliciter les composantes de $\vec{\mathcal{M}}_O(\vec{F})$ en fonction de $x, y, z$ et $F_x, F_y, F_z$.
   * **(b)** Montrer que si la force $\vec{F}$ est colinéaire au vecteur position $\vec{OM}$, alors son moment par rapport à $O$ est nul.

4. **Analyse critique du modèle géométrique**  
   En biologie ou en géologie, les modélisations par des polyèdres (comme les cellules épithéliales ou les cristaux) reposent sur l'hypothèse de faces planes et d'arêtes rigides. 
   * **(a)** Si les coordonnées des sommets d'une face mesurées expérimentalement comportent une incertitude absolue $\varepsilon > 0$, quel est l'impact qualitatif sur le calcul du vecteur normal unitaire issu du produit vectoriel ?
   * **(b)** Discuter de la robustesse du calcul du volume par le produit mixte lorsque le tétraèdre devient "presque aplati" (coplanaire).

---

### 💡 Pistes & Indications méthodologiques

* **Q1.** Appliquer directement les formules algébriques des coordonnées pour le produit scalaire et le produit vectoriel dans une BON. Pour le produit mixte, utiliser l'invariant de permutation ou le déterminant de la matrice formée par les trois vecteurs en colonnes.
* **Q2.** Rappeler que l'aire d'un triangle $OAB$ vaut $\frac{1}{2} \|\vec{OA} \wedge \vec{OB}\|$ et que le volume du tétraèdre $OABC$ vaut $\frac{1}{6} |[\vec{OA}, \vec{OB}, \vec{OC}]|$.
* **Q3.** Utiliser la définition analytique du produit vectoriel en posant $\vec{OM} = x\vec{i} + y\vec{j} + z\vec{k}$.
* **Q4.** Pour la critique du modèle, penser au conditionnement géométrique : lorsque $\vec{u}$ et $\vec{v}$ sont colinéaires, $\|\vec{u} \wedge \vec{v}\| = 0$, toute petite perturbation expérimentale crée une instabilité numérique majeure (division par une norme voisine de zéro ou amplification des erreurs d'arrondi).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Calculs préliminaires dans $E$

* **(a)** On calcule le produit scalaire de $\vec{u}$ et $\vec{v}$ :
  $$\vec{u} \cdot \vec{v} = (1)(0) + (-1)(1) + (2)(1) = 0 - 1 + 2 = 1$$
  Puisque $\vec{u} \cdot \vec{v} \neq 0$, les vecteurs ne sont pas orthogonaux. L'angle $(\vec{u}, \vec{v})$ est aigu car $\cos(\vec{u}, \vec{v}) = \frac{1}{\|\vec{u}\| \|\vec{v}\|} > 0$.

* **(b)** On calcule le produit vectoriel par un déterminant formel dans la BON directe $\mathcal{B}$ :
  $$\vec{u} \wedge \vec{v} = \begin{vmatrix} \vec{i} & 1 & 0 \\ \vec{j} & -1 & 1 \\ \vec{k} & 2 & 1 \end{vmatrix} = \vec{i} \begin{vmatrix} -1 & 1 \\ 2 & 1 \end{vmatrix} - \vec{j} \begin{vmatrix} 1 & 0 \\ 2 & 1 \end{vmatrix} + \vec{k} \begin{vmatrix} 1 & 0 \\ -1 & 1 \end{vmatrix}$$
  $$\vec{u} \wedge \vec{v} = \vec{i}(-1 - 2) - \vec{j}(1 - 0) + \vec{k}(1 - 0) = \begin{pmatrix} -3 \\ -1 \\ 1 \end{pmatrix}$$

* **(c)** Le produit mixte est :
  $$[\vec{u}, \vec{v}, \vec{w}] = (\vec{u} \wedge \vec{v}) \cdot \vec{w} = (-3)(2) + (-1)(1) + (1)(-1) = -6 - 1 - 1 = -8$$
  Puisque $[\vec{u}, \vec{v}, \vec{w}] \neq 0$, le déterminant formé par ces trois vecteurs est non nul. Par conséquent, la famille $(\vec{u}, \vec{v}, \vec{w})$ forme une **base de l'espace vectoriel $E$**.

---

#### 2. Application géométrique : Aire et Volume

* **(a)** Les vecteurs position des points $A$ et $B$ par rapport à $O$ sont $\vec{OA} = \vec{u}$ et $\vec{OB} = \vec{v}$.  
  L'aire du triangle $OAB$ est donnée par :
  $$\mathcal{A}_{OAB} = \frac{1}{2} \|\vec{OA} \wedge \vec{OB}\| = \frac{1}{2} \|\vec{u} \wedge \vec{v}\|$$
  En utilisant le résultat de la question 1.(b) :
  $$\|\vec{u} \wedge \vec{v}\| = \sqrt{(-3)^2 + (-1)^2 + 1^2} = \sqrt{9 + 1 + 1} = \sqrt{11} \text{ \text{unités d'aire}}$$
  Ainsi, $\mathcal{A}_{OAB} = \frac{\sqrt{11}}{2} \text{ \text{unités d'aire}}$.

* **(b)** Le volume du tétraèdre $OABC$ est donné par la formule :
  $$\mathcal{V}_{OABC} = \frac{1}{6} |[\vec{OA}, \vec{OB}, \vec{OC}]|$$
  Ici, $\vec{OC} = \vec{w} = \begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix}$. D'après la question 1.(c), $[\vec{u}, \vec{v}, \vec{w}] = -8$.  
  Par conséquent :
  $$\mathcal{V}_{OABC} = \frac{1}{6} |-8| = \frac{8}{6} = \frac{4}{3} \text{ \text{unités de volume}}.$$

---

#### 3. Moment d'une force et axes principaux

* **(a)** On a $\vec{OM} = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$ et $\vec{F} = \begin{pmatrix} F_x \\ F_y \\ F_z \end{pmatrix}$. Par définition du produit vectoriel :
  $$\vec{\mathcal{M}}_O(\vec{F}) = \begin{pmatrix} x \\ y \\ z \end{pmatrix} \wedge \begin{pmatrix} F_x \\ F_y \\ F_z \end{pmatrix} = \begin{pmatrix} yF_z - zF_y \\ zF_x - xF_z \\ xF_y - yF_x \end{pmatrix}$$

* **(b)** Si la force $\vec{F}$ est colinéaire à $\vec{OM}$, il existe un réel $\lambda \in \mathbb{R}$ tel que $\vec{F} = \lambda \vec{OM}$.  
  Alors :
  $$\vec{\mathcal{M}}_O(\vec{F}) = \vec{OM} \wedge (\lambda \vec{OM}) = \lambda (\vec{OM} \wedge \vec{OM}) = \vec{0}$$
  Le moment est donc nul, ce qui est géométriquement évident car la droite d'action de la force passe par le point pivot $O$.

---

#### 4. Analyse critique du modèle géométrique

* **(a)** Si les coordonnées des sommets subissent une incertitude expérimentale de $\varepsilon$, le calcul de $\vec{OA} \wedge \vec{OB}$ accumule des erreurs via les sommes et produits de coordonnées entachées d'erreurs. Le vecteur normal unitaire $\vec{n} = \frac{\vec{OA} \wedge \vec{OB}}{\|\vec{OA} \wedge \vec{OB}\|}$ souffre d'une sensibilité proportionnelle à l'inverse de la norme $\|\vec{OA} \wedge \vec{OB}\|$. Si l'aire du triangle est petite devant $\varepsilon$, l'orientation de la normale devient aberrante.

* **(b)** Lorsque le tétraèdre tend à s'aplatir (les points $O, A, B, C$ deviennet coplanaires), le volume $\mathcal{V}_{OABC}$ tend vers $0$, ce qui correspond à un produit mixte tendant vers $0$. Numériquement, le calcul du volume est mal conditionné : un bruit infime sur les mesures expérimentales peut faire basculer le signe du produit mixte (faisant croire à un changement d'orientation de l'espace) et rend le modèle topologique instable (inversion d'orientation des faces adjacentes en CAO ou en modélisation 3D).