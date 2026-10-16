---
title: 'Cours : Algèbre linéaire et Géométrie 3D'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Algèbre linéaire et Géométrie 3D
Classe: ** PTSI  
**Matière :** Mathématiques  

---

## Introduction et Objectifs
Ce chapitre fait le pont entre l'algèbre linéaire abstraite (espaces vectoriels, applications linéaires, matrices) et la géométrie classique de l'espace affine euclidien de dimension 3 ($\mathcal{E}_3$). L'objectif est d'utiliser les outils matriciels et vectoriels pour résoudre des problèmes géométriques métriques et vectoriels (droites, plans, isométries).

---

## I. Rappels de Géométrie Vectorielle en Dimension 3

### 1. Espace vectoriel $\mathbb{R}^3$ et structure euclidienne
L'espace $\mathbb{R}^3$ muni de sa base canonique $\mathcal{B} = (\vec{i}, \vec{j}, \vec{k})$ est un $\mathbb{R}$-espace vectoriel de dimension 3.
Il est doté d'un produit scalaire usuel : pour $\vec{u} = (x, y, z)$ et $\vec{v} = (x', y', z')$,
$$\vec{u} \cdot \vec{v} = xx' + yy' + zz'$$
Ce produit scalaire induit une norme (la longueur) : $\|\vec{u}\| = \sqrt{\vec{u} \cdot \vec{u}} = \sqrt{x^2 + y^2 + z^2}$.

### 2. Produit vectoriel
**Définition :** Le produit vectoriel de deux vecteurs $\vec{u}(x, y, z)$ et $\vec{v}(x', y', z')$ dans une base orthonormée directe est le vecteur $\vec{w} = \vec{u} \wedge \vec{v}$ défini par :
$$\vec{u} \wedge \vec{v} = \begin{pmatrix} yz' - zy' \\ zx' - xz' \\ xy' - yx' \end{pmatrix}$$
*Notation mnémotechnique :* $\vec{u} \wedge \vec{v} = \det \begin{pmatrix} \vec{i} & x & x' \\ \vec{j} & y & y' \\ \vec{k} & z & z' \end{pmatrix}$.

**Propriétés fondamentales :**
*   **Bilinearité** et **antisymétrie** ($\vec{v} \wedge \vec{u} = - \vec{u} \wedge \vec{v}$).
*   $\vec{u} \wedge \vec{v} = \vec{0} \iff (\vec{u}, \vec{v}) \text{ est liée}$.
*   Le vecteur $\vec{u} \wedge \vec{v}$ est orthogonal à la fois à $\vec{u}$ et à $\vec{v}$.
*   Le trièdre $(\vec{u}, \vec{v}, \vec{u} \wedge \vec{v})$ est direct.
*   **Norme :** $\|\vec{u} \wedge \vec{v}\| = \|\vec{u}\| \|\vec{v}\| \sin(\theta)$, où $\theta$ est l'angle entre $\vec{u}$ et $\vec{v}$ (aire du parallélogramme engendré).

### 3. Produit mixte
**Définition :** Le produit mixte de trois vecteurs $\vec{u}, \vec{v}, \vec{w}$ est le réel :
$$[\vec{u}, \vec{v}, \vec{w}] = (\vec{u} \wedge \vec{v}) \cdot \vec{w}$$
*   Il correspond au déterminant de la matrice formée par les coordonnées des trois vecteurs dans une base orthonormée directe.
*   Il est nul si et seulement si les trois vecteurs sont coplanaires (liés).
*   Sa valeur absolue représente le volume du parallélépipède engendré par $\vec{u}, \vec{v}, \vec{w}$.

---

## II. Géométrie Affine de l'Espace $\mathcal{E}_3$

On note $\mathcal{E}_3$ l'espace affine associé à l'espace vectoriel $\vec{\mathcal{E}}_3 \simeq \mathbb{R}^3$. Un repère cartésien de $\mathcal{E}_3$ est noté $\mathcal{R} = (O, \vec{i}, \vec{j}, \vec{k})$.

### 1. Droites et Plans
*   **Plan affine :** Défini par un point $A$ et deux vecteurs directeurs non colinéaires $\vec{u}$ et $\vec{v}$, ou par une équation cartésienne :
    $$ax + by + cz + d = 0 \quad (\text{avec } (a, b, c) \neq (0, 0, 0))$$
    Le vecteur $\vec{n} = \begin{pmatrix} a \\ b \\ c \end{pmatrix}$ est normal au plan.
*   **Droite affine :** Définie par un point $A$ et un vecteur directeur $\vec{u} \neq \vec{0}$, ou par un système d'équations cartésiennes (intersection de deux plans non parallèles) :
    $$\begin{cases} ax + by + cz + d = 0 \\ a'x + b'y + c'z + d' = 0 \end{cases}$$

### 2. Distances et Projections
*   **Distance d'un point $M_0(x_0, y_0, z_0)$ à un plan $\mathcal{P} : ax + by + cz + d = 0$ :**
    $$d(M_0, \mathcal{P}) = \frac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$$
*   **Distance d'un point $M_0$ à une droite $\mathcal{D} = (A, \vec{u})$ :**
    $$d(M_0, \mathcal{D}) = \frac{\|\overrightarrow{AM_0} \wedge \vec{u}\|}{\|\vec{u}\|}$$

---

## III. Applications Linéaires et Matrices en Dimension 3

### 1. Matrice d'une application linéaire
Soit $E$ un $K$-espace vectoriel de dimension 3, et $\mathcal{B} = (\vec{e}_1, \vec{e}_2, \vec{e}_3)$ une base de $E$. Soit $f \in \mathcal{L}(E)$.
La matrice $M = \text{Mat}_{\mathcal{B}}(f)$ est la matrice $3 \times 3$ dont les colonnes sont les coordonnées des images des vecteurs de la base :
$$\text{Mat}_{\mathcal{B}}(f) = \begin{pmatrix} 
\vert & \vert & \vert \\
\text{Mat}_{\mathcal{B}}(f(\vec{e}_1)) & \text{Mat}_{\mathcal{B}}(f(\vec{e}_2)) & \text{Mat}_{\mathcal{B}}(f(\vec{e}_3)) \\
\vert & \vert & \vert 
\end{pmatrix}$$

### 2. Changement de base
Soient $\mathcal{B}$ et $\mathcal{B}'$ deux bases de $E$. Soit $P = \text{Mat}_{\mathcal{B}}(\mathcal{B}')$ la **matrice de passage** de $\mathcal{B}$ à $\mathcal{B}'$.
Si $X$ est le vecteur colonne des coordonnées dans $\mathcal{B}$ et $X'$ dans $\mathcal{B}'$ d'un même vecteur $\vec{x}$, alors :
$$X = P X'$$
Pour une application linéaire $f$, si $A = \text{Mat}_{\mathcal{B}}(f)$ et $A' = \text{Mat}_{\mathcal{B}'}(f)$, la formule de changement de base est :
$$A' = P^{-1} A P$$

---

## IV. Isométries Vectorielles de $\mathbb{R}^3$ (Si $\mathcal{B}$ est orthonormée)

Une isométrie vectorielle (ou endomorphisme orthogonal) est un endomorphisme $f$ qui conserve le produit scalaire : $\forall \vec{u}, \vec{v} \in \mathbb{R}^3, \quad f(\vec{u}) \cdot f(\vec{v}) = \vec{u} \cdot \vec{v}$.

### 1. Caractérisation matricielle
La matrice $M$ de $f$ dans une base orthonormée est une **matrice orthogonale**, c'est-à-dire qu'elle vérifie :
$$M^T M = I_3 \iff M^{-1} = M^T$$
De plus, son déterminant vaut $\det(M) = \pm 1$.

### 2. Classification géométrique en dimension 3
Soit $f$ une isométrie vectorielle de $\mathbb{R}^3$ de matrice $M$ dans une base orthonormée directe :
*   **Si $\det(M) = 1$ ($f$ est une rotation directe) :**
    *   L'axe de la rotation est l'espace propre associé à la valeur propre $1$ (de dimension 1).
    *   L'angle $\theta$ de la rotation est donné par la trace de la matrice : $\text{Tr}(M) = 1 + 2\cos(\theta)$.
*   **Si $\det(M) = -1$ ($f$ est une antirotation) :**
    *   Il s'agit d'une **réflexion** (symétrie par rapport à un plan, $\text{Mat} = \text{diag}(1, 1, -1)$) ou d'une **rotation-réflexion** (composée d'une rotation d'axe $\mathcal{D}$ et d'une réflexion par rapport au plan orthogonal à $\mathcal{D}$).

---

## V. Méthodes et Savoir-Faire en PTSI
1.  **Déterminer l'intersection d'une droite et d'un plan :** Injecter les équations paramétriques de la droite dans l'équation cartésienne du plan.
2.  **Trouver la matrice d'une projection orthogonale :** 
    *   Soit géométriquement en utilisant une base adaptée (vecteurs du plan de projection associés à la valeur propre $1$, vecteur normal associé à la valeur propre $0$).
    *   Soit par la formule analytique pour un plan d'équation $ax+by+cz=0$ : $\vec{n} = (a,b,c)$ et $P = I_3 - \frac{1}{\|\vec{n}\|^2} \vec{n}\vec{n}^T$.
3.  **Réduire une isométrie :** Toujours chercher les valeurs propres évidentes ($\lambda = 1$ ou $\lambda = -1$) en calculant $\det(M - I_3)$ ou $\det(M + I_3)$.