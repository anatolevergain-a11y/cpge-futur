---
title: 'Exercice 1 : Produit scalaire et vectoriel dans l espace'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Étude de cas

En sciences industrielles et en robotique, la modélisation géométrique des mécanismes spatiaux nécessite une maîtrise rigoureuse du calcul vectoriel tridimensionnel. On s'intéresse ici à l'étude cinématique simplifiée d'un bras robotique manipulateur à trois axes. 

Pour positionner un effecteur en un point $M$ de l'espace, on considère un repère orthonormé direct $\mathcal{R} = (O, \vec{i}, \vec{j}, \vec{k})$ lié au bâti fixe. Un premier segment rigide est modélisé par un vecteur $\vec{u} = \vec{OA}$, un deuxième par $\vec{v} = \vec{AB}$, et l'effecteur est situé en un point $M$ tel que $\vec{BM} = \vec{w}$. 

Afin de valider la résistance mécanique d'une telle structure soumise à des efforts extérieurs (par exemple lors de la manipulation d'une charge de masse $m = \text{50 kg}$ à une distance caractéristique de $\text{1,5 m}$ du pivot), les ingénieurs doivent évaluer les moments de force en divers points critiques par le biais du produit vectoriel, ainsi que l'alignement et l'orthogonalité des liaisons pivot par le produit scalaire.

*Hypothèses de modélisation et limites :* 
Les pièces sont supposées rigides indéformables (pas de prise en compte des torsions élastiques ni des vibrations de flexibilité). Dans la réalité industrielle, les charges dynamiques et les accélérations induisent des déformations qu'il convient de limiter par des coefficients de sécurité stricts (typiquement $s \ge 3$ en construction mécanique).

---

### ❓ Questions progressives

1. **Calculs préliminaires :** 
   Soit les vecteurs $\vec{u} = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}$, $\vec{v} = \begin{pmatrix} 0 \\ 1 \\ 3 \end{pmatrix}$ et $\vec{w} = \begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix}$ exprimés dans la base $\mathcal{B} = (\vec{i}, \vec{j}, \vec{k})$.
   Calculer le produit scalaire $\vec{u} \cdot \vec{v}$ et le produit vectoriel $\vec{u} \wedge \vec{v}$.

2. **Propriétés géométriques :**
   En déduire l'aire du triangle $OAB$ formé par l'origine et les extrémités des vecteurs $\vec{u}$ et $\vec{v}$. Déterminer un vecteur $\vec{n}$ unitaire orthogonal à la fois à $\vec{u}$ et à $\vec{v}$.

3. **Moment d'une force et bras de levier :**
   Dans le cadre de l'étude statique, une force $\vec{F} = \begin{pmatrix} 100 \\ -200 \\ 300 \end{pmatrix} \text{ N}$ s'applique au point $M$ de coordonnées $(3, 2, 3)$. 
   Calculer le moment de cette force au point $O$, noté $\vec{\mathcal{M}}_O(\vec{F}) = \vec{OM} \wedge \vec{F}$.

4. **Analyse critique du modèle rigide :**
   Si la force $\vec{F}$ appliquée génère un moment dont la norme dépasse $\text{500 N}\cdot\text{m}$, le réducteur du moteur associé risque la rupture par cisaillement selon le cahier des charges. Conclure quant à la viabilité de cette position pour le manipulateur.

---

### 💡 Pistes & Indications

- **Question 1 :** Utilisez les formules de calcul algébrique des coordonnées dans une base orthonormée directe. Le produit scalaire est la somme des produits des composantes homologues.
- **Question 2 :** Rappelez-vous que la norme du produit vectoriel $\|\vec{u} \wedge \vec{v}\}$ est liée à l'aire du parallélogramme, et donc à celle du triangle par un facteur $\frac{1}{2}$.
- **Question 3 :** Déterminez d'abord le vecteur position $\vec{OM}$, puis appliquez la définition du moment en $O$ via le produit vectoriel.
- **Question 4 :** Calculez la norme du vecteur moment obtenu à la question 3 et comparez-la au seuil critique en discutant des hypothèses de rigidité.

---

### 📋 Corrigé détaillé et analyse des résultats

1. **Calculs préliminaires :**
   Le produit scalaire de $\vec{u}$ et $\vec{v}$ s'établit ainsi :
   $$\vec{u} \cdot \vec{v} = (1)(0) + (2)(1) + (-1)(3) = 0 + 2 - 3 = -1$$

   Le produit vectoriel se calcule par le déterminant symbolique :
   $$\vec{u} \wedge \vec{v} = \begin{vmatrix} \vec{i} & 1 & 0 \\ \vec{j} & 2 & 1 \\ \vec{k} & -1 & 3 \end{vmatrix} = \vec{i} \begin{vmatrix} 2 & 1 \\ -1 & 3 \end{vmatrix} - \vec{j} \begin{vmatrix} 1 & 0 \\ -1 & 3 \end{vmatrix} + \vec{k} \begin{vmatrix} 1 & 0 \\ 2 & 1 \end{vmatrix}$$
   $$\vec{u} \wedge \vec{v} = \vec{i}(6 - (-1)) - \vec{j}(3 - 0) + \vec{k}(1 - 0) = \begin{pmatrix} 7 \\ -3 \\ 1 \end{pmatrix}$$

2. **Propriétés géométriques :**
   L'aire du triangle $OAB$ est donnée par :
   $$\mathcal{A} = \frac{1}{2} \|\vec{u} \wedge \vec{v}\|$$
   On calcule la norme :
   $$\|\vec{u} \wedge \vec{v}\| = \sqrt{7^2 + (-3)^2 + 1^2} = \sqrt{49 + 9 + 1} = \sqrt{59} \approx \text{7,68}$$
   Ainsi, $\mathcal{A} = \frac{\sqrt{59}}{2} \approx \text{3,84}\text{ unités d'aire}$.

   Pour obtenir un vecteur unitaire $\vec{n}$ orthogonal à $\vec{u}$ et $\vec{v}$, on normalise $\vec{u} \wedge \vec{v}$ :
   $$\vec{n} = \frac{\vec{u} \wedge \vec{v}}{\|\vec{u} \wedge \vec{v}\|} = \frac{1}{\sqrt{59}}\begin{pmatrix} 7 \\ -3 \\ 1 \end{pmatrix}$$

3. **Moment d'une force :**
   Le point $M$ a pour coordonnées $(3, 2, 3)$, donc le vecteur position est $\vec{OM} = \begin{pmatrix} 3 \\ 2 \\ 3 \end{pmatrix}$.
   Le moment en $O$ est :
   $$\vec{\mathcal{M}}_O(\vec{F}) = \vec{OM} \wedge \vec{F} = \begin{vmatrix} \vec{i} & 3 & 100 \\ \vec{j} & 2 & -200 \\ \vec{k} & 3 & 300 \end{vmatrix}$$
   $$\vec{\mathcal{M}}_O(\vec{F}) = \vec{i}(2 \times 300 - 3 \times (-200)) - \vec{j}(3 \times 300 - 3 \times 100) + \vec{k}(3 \times (-200) - 2 \times 100)$$
   $$\vec{\mathcal{M}}_O(\vec{F}) = \vec{i}(600 + 600) - \vec{j}(900 - 300) + \vec{k}(-600 - 200) = \begin{pmatrix} 1200 \\ -600 \\ -800 \end{pmatrix} \text{ N}\cdot\text{m}$$

4. **Analyse critique du modèle rigide :**
   Calculons la norme du moment trouvé :
   $$\|\vec{\mathcal{M}}_O(\vec{F})\| = \sqrt{1200^2 + (-600)^2 + (-800)^2} = \sqrt{1440000 + 360000 + 640000} = \sqrt{2440000}$$
   $$\|\vec{\mathcal{M}}_O(\vec{F})\| = 100\sqrt{244} = 200\sqrt{61} \approx 200 \times 7,81 = \text{1562 N}\cdot\text{m}$$

   *Conclusion critique :* La norme du moment atteint $\text{1562 N}\cdot\text{m}$, ce qui dépasse largement le seuil critique de $\text{500 N}\cdot\text{m}$. Le modèle rigide indique clairement une rupture imminente du système. De surcroît, l'hypothèse de rigidité parfaite sous-estime les flèches en bout de bras ; dans un cas réel, les effets dynamiques (coup de bélier ou accélération brusque) majoreraient encore ces efforts de 20 à 30 %. Le positionnement du robot doit impérativement être révisé.