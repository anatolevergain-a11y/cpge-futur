---
title: 'Exercice 1 : Produit scalaire, vectoriel et produit mixte'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $\mathcal{E} = \mathbb{R}^3$ muni de sa structure euclidienne canonique. On note $\langle \cdot, \cdot \rangle$ le produit scalaire usuel, $\wedge$ le produit vectoriel, et $[\cdot, \cdot, \cdot]$ le produit mixte. On considère un repère orthonormal direct $\mathcal{R} = (O, \vec{i}, \vec{j}, \vec{k})$.

L'objectif de ce problème est d'étudier certaines identités fondamentales reliant ces trois opérations et d'appliquer ces outils à la caractérisation géométrique d'objets de l'espace affine euclidien $\mathcal{E}$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Rappels et propriétés algébriques fondamentales**
   Soit $\vec{u}, \vec{v}, \vec{w} \in \mathcal{E}$. 
   Exprimer le produit mixte $[\vec{u}, \vec{v}, \vec{w}]$ à l'aide du produit scalaire et du produit vectoriel. En déduire la condition nécessaire et suffisante pour que trois vecteurs soient coplanaires.

2. **Identité de Lagrange et double produit vectoriel**
   a) Démontrer l'identité de Lagrange : 
      $$\|\vec{u} \wedge \vec{v}\|^2 = \|\vec{u}\|^2 \|\vec{v}\|^2 - \langle \vec{u}, \vec{v} \rangle^2$$
   b) Établir la formule du double produit vectoriel : 
      $$\vec{u} \wedge (\vec{v} \wedge \vec{w}) = \langle \vec{u}, \vec{w} \rangle \vec{v} - \langle \vec{u}, \vec{v} \rangle \vec{w}$$

3. **Application géométrique : Distance d'un point à une droite**
   Soit $A$ un point de l'espace, $\mathcal{D}$ la droite passant par un point $B$ et dirigée par un vecteur unitaire $\vec{u}$. 
   À l'aide du produit vectoriel, démontrer que la distance du point $M$ à la droite $\mathcal{D}$ est donnée par :
   $$d(M, \mathcal{D}) = \|\vec{BM} \wedge \vec{u}\|$$

4. **Analyse critique du modèle et limites numériques**
   En informatique graphique ou en physique numérique, le calcul direct du produit vectoriel et du produit mixte est parfois source d'erreurs d'arrondi. 
   Expliquer qualitativement pourquoi l'utilisation de l'identité de Lagrange peut s'avérer numériquement instable lorsque $\vec{u}$ et $\vec{v}$ sont presque collinéaires.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pensez à la définition matricielle du déterminant dans une base orthonormée directe. Le produit mixte de trois vecteurs est par définition le déterminant de ces vecteurs dans $\mathcal{R}$.
* **Question 2.a :** Vous pouvez utiliser les propriétés du produit mixte ou, plus simplement, exprimer les vecteurs dans un repère bien choisi où $\vec{i}$ est collinéaire à $\vec{u}$ et $\vec{v}$ est dans le plan $(\vec{i}, \vec{j})$.
* **Question 2.b :** Développez dans la base canonique ou utilisez l'invariance par permutation circulaire du produit mixte pour les expressions scalaires.
* **Question 3 :** Interprétez géométriquement la norme $\|\vec{BM} \wedge \vec{u}\|$ comme l'aire d'un parallélogramme.
* **Question 4 :** Considérez la soustraction de deux nombres flottants très proches lorsque $\langle \vec{u}, \vec{v} \rangle^2 \approx \|\vec{u}\|^2 \|\vec{v}\|^2$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Expression et propriétés du produit mixte
Par définition, le produit mixte de trois vecteurs $\vec{u}, \vec{v}, \vec{w}$ est le scalaire :
$$[\vec{u}, \vec{v}, \vec{w}] = \langle \vec{u} \wedge \vec{v}, \vec{w} \rangle$$
Dans un repère orthonormal direct $\mathcal{R}$, si $\vec{u} = (x_1, y_1, z_1)$, $\vec{v} = (x_2, y_2, z_2)$ et $\vec{w} = (x_3, y_3, z_3)$, $[\vec{u}, \vec{v}, \vec{w}]$ est le déterminant de la matrice formée par ces trois vecteurs en colonnes.
Trois vecteurs $\vec{u}, \vec{v}, \vec{w}$ sont coplanaires si et seulement si leur produit mixte est nul :
$$[\vec{u}, \vec{v}, \vec{w}] = 0$$

#### 2. Identité de Lagrange et double produit vectoriel
**a) Identité de Lagrange :**
Partons de la définition du produit vectoriel et de sa norme. On sait que :
$$\|\vec{u} \wedge \vec{v}\|^2 = \|\vec{u}\|^2 \|\vec{v}\|^2 \sin^2(\theta)$$
où $\theta$ est l'angle entre $\vec{u}$ et $\vec{v}$. Comme $\sin^2(\theta) = 1 - \cos^2(\theta)$, on obtient :
$$\|\vec{u} \wedge \vec{v}\|^2 = \|\vec{u}\|^2 \|\vec{v}\|^2 (1 - \cos^2(\theta)) = \|\vec{u}\|^2 \|\vec{v}\|^2 - (\|\vec{u}\| \|\vec{v}\| \cos(\theta))^2$$
En utilisant la définition du produit scalaire $\langle \vec{u}, \vec{v} \rangle = \|\vec{u}\| \|\vec{v}\| \cos(\theta)$, il vient immédiatement :
$$\|\vec{u} \wedge \vec{v}\|^2 = \|\vec{u}\|^2 \|\vec{v}\|^2 - \langle \vec{u}, \vec{v} \rangle^2$$

**b) Double produit vectoriel :**
Soit $\vec{e}_1 = \vec{u}$. Choisissons un repère orthonormal direct adapté tel que $\vec{u} = (x_1, 0, 0)$, $\vec{v} = (x_2, y_2, 0)$ et $\vec{w} = (x_3, y_3, z_3)$.
Calculons $\vec{v} \wedge \vec{w}$ :
$$\vec{v} \wedge \vec{w} = (y_2 z_3, -x_2 z_3, x_2 y_3 - y_2 x_3)$$
Puis calculons $\vec{u} \wedge (\vec{v} \wedge \vec{w})$ sachant que $\vec{u} = (x_1, 0, 0)$ :
$$\vec{u} \wedge (\vec{v} \wedge \vec{w}) = (0, -x_1 (x_2 y_3 - y_2 x_3), -x_1 (-x_2 z_3))$$
Par identification avec le calcul direct des expressions $\langle \vec{u}, \vec{w} \rangle \vec{v} - \langle \vec{u}, \vec{v} \rangle \vec{w}$ dans ce même repère, on établit l'égalité générale :
$$\vec{u} \wedge (\vec{v} \wedge \vec{w}) = \langle \vec{u}, \vec{w} \rangle \vec{v} - \langle \vec{u}, \vec{v} \rangle \vec{w}$$

#### 3. Distance d'un point à une droite
Soit $M$ un point de l'espace et $\mathcal{D} = B + \mathbb{R}\vec{u}$ avec $\|\vec{u}\| = 1$.
L'aire du parallélogramme défini par les vecteurs $\vec{BM}$ et $\vec{u}$ est donnée par $\|\vec{BM} \wedge \vec{u}\|$.
Par ailleurs, cette aire est aussi égale à la base multipliée par la hauteur :
$$\text{Aire} = \|\vec{u}\| \times d(M, \mathcal{D})$$
Puisque $\|\vec{u}\| = 1$, on a directement :
$$d(M, \mathcal{D}) = \|\vec{BM} \wedge \vec{u}\|$$

#### 4. Analyse critique du modèle
Dans l'identité de Lagrange $\|\vec{u} \wedge \vec{v}\|^2 = \|\vec{u}\|^2 \|\vec{v}\|^2 - \langle \vec{u}, \vec{v} \rangle^2$, si $\vec{u}$ et $\vec{v}$ sont presque collinéaires, l'angle $\theta$ est proche de $0$ ou de $\pi$. 
Dès lors, les termes $\|\vec{u}\|^2 \|\vec{v}\|^2$ et $\langle \vec{u}, \vec{v} \rangle^2$ sont extrêmement proches. En arpentant un calcul en virgule flottante (machine à précision finie), la soustraction de deux nombres quasi-égaux engendre une **catastrophe d'annulation** (loss of significance), ce qui peut conduire à une perte totale de précision, voire à une valeur négative aberrante à cause des erreurs d'arrondi. Le calcul direct de $\|\vec{u} \wedge \vec{v}\rtl\}$ est donc numériquement préférable.