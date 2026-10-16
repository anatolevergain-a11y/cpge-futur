---
title: 'Cours : Géométrie euclidienne'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Géométrie euclidienne
**Filière :** PTSI — **Niveau :** Première année  
**Matière :** Mathématiques

---

## Introduction et Cadre Vectoriel

La géométrie euclidienne s'appuie sur l'étude d'un espace affine euclidien associé à un espace vectoriel euclidien. En PTSI, nous manipulons principalement les espaces $\mathbb{R}^2$ et $\mathbb{R}^3$ munis du produit scalaire canonique.

---

## 1. Produit scalaire et orthogonalité

### Définitions
Soit $E$ un $\mathbb{R}$-espace vectoriel. Un **produit scalaire** sur $E$ est une application notée $(\cdot, \cdot)$ ou $\langle \cdot, \cdot \rangle$, ou encore $\vec{u} \cdot \vec{v}$, qui à tout couple de vecteurs $(\vec{u}, \vec{v})$ associe un nombre réel, telle que pour tout $\vec{u}, \vec{v}, \vec{w} \in E$ et $\lambda \in \mathbb{R}$ :
1. **Symétrie :** $(\vec{u}, \vec{v}) = (\vec{v}, \vec{u})$
2. **Bilinéarité :** $(\lambda\vec{u} + \vec{v}, \vec{w}) = \lambda(\vec{u}, \vec{w}) + (\vec{v}, \vec{w})$
3. **Positivité :** $(\vec{u}, \vec{u}) \ge 0$
4. **Caractère défini :** $(\vec{u}, \vec{u}) = 0 \iff \vec{u} = \vec{0}$

### Théorème : Inégalité de Cauchy-Schwarz
> Pour tous vecteurs $\vec{u}$ et $\vec{v}$ d'un espace euclidien $E$ :
> $$|(\vec{u}, \vec{v})| \le \|\vec{u}\| \|\vec{v}\|$$
> *Cas d'égalité :* L'égalité a lieu si et seulement si $\vec{u}$ et $\vec{v}$ sont colinéaires.

### Définition : Norme associée
La norme d'un vecteur $\vec{u}$ est définie par $\|\vec{u}\| = \sqrt{(\vec{u}, \vec{u})}$.

---

## 2. Géométrie affine euclidienne du plan et de l'espace

### Orthogonalité
* Deux vecteurs $\vec{u}$ et $\vec{v}$ sont **orthogonaux** si $(\vec{u}, \vec{v}) = 0$, ce que l'on note $\vec{u} \perp \vec{v}$.
* Le théorème de Pythagore s'applique : si $\vec{u} \perp \vec{v}$, alors $\|\vec{u} + \vec{v}\|^2 = \|\vec{u}\|^2 + \|\vec{v}\|^2$.

### Droites et Plans (dans $\mathbb{R}^3$)
* **Droite affine :** Définie par un point $A$ et un vecteur directeur $\vec{u} \neq \vec{0}$.
  $$M \in \mathcal{D} \iff \exists t \in \mathbb{R}, \quad \vec{AM} = t\vec{u}$$
* **Plan affine :** Défini par un point $A$ et deux vecteurs directeurs non colinéaires $\vec{u}$ et $\vec{v}$.
  $$M \in \mathcal{P} \iff \exists (s,t) \in \mathbb{R}^2, \quad \vec{AM} = s\vec{u} + t\vec{v}$$

---

## 3. Distances, Projections et Symétries

### Définitions
* **Distance d'un point à une partie :** Soit $A$ un point et $\mathcal{F}$ une partie de l'espace. La distance de $A$ à $\mathcal{F}$ est :
  $$d(A, \mathcal{F}) = \inf_{M \in \mathcal{F}} d(A, M)$$
* **Projection orthogonale :** Soit $F$ un sous-espace vectoriel (ou affine). Le projeté orthogonal d'un point $M$ sur $F$ est le point $H \in F$ tel que $\vec{MH} \perp F$.

---

## 4. Le Produit Vectoriel (Spécifique à $\mathbb{R}^3$)

### Définition
Dans l'espace orienté $\mathbb{R}^3$ muni d'une base orthonormée directe $(\vec{i}, \vec{j}, \vec{k})$, le **produit vectoriel** de $\vec{u}(x_1, y_1, z_1)$ et $\vec{v}(x_2, y_2, z_2)$ est le vecteur :
$$\vec{u} \wedge \vec{v} = \begin{pmatrix} y_1 z_2 - z_1 y_2 \\ z_1 x_2 - x_1 z_2 \\ x_1 y_2 - y_1 x_2 \end{pmatrix}$$

### Propriétés fondamentales
1. $\vec{u} \wedge \vec{v}$ est orthogonal à $\vec{u}$ et à $\vec{v}$.
2. Le repère $(\vec{u}, \vec{v}, \vec{u} \wedge \vec{v})$ est direct si $(\vec{u}, \vec{v})$ est une famille libre.
3. **Norme :** $\|\vec{u} \wedge \vec{v}\| = \|\vec{u}\| \|\vec{v}\| \sin(\theta)$, où $\theta$ est l'angle entre $\vec{u}$ et $\vec{v}$.
4. **Aire :** La norme $\|\vec{u} \wedge \vec{v}\}$ représente l'aire du parallélogramme construit sur $\vec{u}$ et $\vec{v}$.

---

## Méthodes

> **Méthode 1 : Déterminer l'équation cartésienne d'un plan dans $\mathbb{R}^3$**
> 1. Identifier un point $A(x_0, y_0, z_0)$ appartenant au plan.
> 2. Trouver un vecteur normal $\vec{n}(a, b, c)$ au plan (par exemple via le produit vectoriel de deux vecteurs directeurs).
> 3. Écrire que pour tout point $M(x, y, z)$ du plan, $\vec{AM} \perp \vec{n}$, ce qui se traduit par :
>    $$a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$$

> **Méthode 2 : Calculer la distance d'un point à une droite ou un plan**
> * Pour un point $M_0$ et un plan $\mathcal{P} : ax + by + cz + d = 0$ :
>   $$d(M_0, \mathcal{P}) = \frac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$$

---

## Pièges à éviter

1. **Confondre orthogonalité et colinéarité :** Un produit scalaire nul $(\vec{u}, \vec{v}) = 0$ implique l'orthogonalité, pas la colinéarité. Ne pas oublier que le vecteur nul $\vec{0}$ est orthogonal à *tous* les vecteurs.
2. **Orientation du produit vectoriel :** Le produit vectoriel n'est **pas commutatif** ; on a $\vec{u} \wedge \vec{v} = -(\vec{v} \wedge \vec{u})$. L'oubli du signe est une source classique d'erreurs de calcul en physique et en sciences industrielles.
3. **Application de la formule de distance :** Pour appliquer la formule de la distance d'un point à un plan, l'équation cartésienne du plan doit impérativement être sous sa forme normalisée.