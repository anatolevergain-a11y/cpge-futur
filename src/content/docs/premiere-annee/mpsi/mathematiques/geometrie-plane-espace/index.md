---
title: 'Cours : Géométrie plane et de l espace'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

## 📌 1. Définitions & Cadre d'étude

Le cadre naturel de l'étude géométrique en classe de MPSI est l'espace affine euclidien orienté de dimension 2 (le plan $\mathcal{P}$) ou 3 (l'espace $\mathcal{E}$). 

### 1.1. Espace affine euclidien
*   **Espace affine :** On appelle espace affine associé au $\mathbb{R}$-espace vectoriel $\vec{E}$ un ensemble non vide $\mathcal{E}$ muni d'une application (notée $+\, \text{ou}\ \to$) de $\mathcal{E} \times \vec{E}$ dans $\mathcal{E}$, $(M, \vec{u}) \mapsto M + \vec{u}$, telle que :
    1. $\forall M \in \mathcal{E}, \quad M + \vec{0} = M$.
    2. $\forall (M, \vec{u}, \vec{v}) \in \mathcal{E} \times \vec{E}^2, \quad (M + \vec{u}) + \vec{v} = M + (\vec{u} + \vec{v})$.
    3. $\forall (M, N) \in \mathcal{E}^2$, il existe un unique $\vec{u} \in \vec{E}$ tel que $M + \vec{u} = N$, noté $\vec{u} = \overrightarrow{MN}$.
*   **Espace euclidien :** L'espace vectoriel $\vec{E}$ est muni d'un produit scalaire, c'est-à-dire d'une forme bilinéaire symétrique définie positive, notée $(\cdot \mid \cdot)$.

### 1.2. Repérage et bases
*   Un **repère cartésien** de $\mathcal{E}$ (de dimension $n \in \{2, 3\}$) est la donnée d'un point origine $O \in \mathcal{E}$ et d'une base $( \vec{e}_1, \dots, \vec{e}_n )$ de $\vec{E}$.
*   Un repère $(O, \vec{e}_1, \vec{e}_2, \vec{e}_3)$ est dit **orthonormé (RON)** si la base $(\vec{e}_1, \vec{e}_2, \vec{e}_3)$ est orthonormée pour le produit scalaire.

### 1.3. Produit scalaire, vectoriel et mixte (en dimension 3)
Soient $\vec{u}, \vec{v}, \vec{w} \in \vec{E}$ des vecteurs de l'espace vectoriel orienté $\vec{E}$ rapporté à une base orthonormée directe :
*   **Produit scalaire :** Bilinéaire, symétrique, défini positif. $(\vec{u} \mid \vec{v}) = \|\vec{u}\| \|\vec{v}\| \cos(\theta)$.
*   **Produit vectoriel :** L'application $\vec{E} \times \vec{E} \to \vec{E}$, $(\vec{u}, \vec{v}) \mapsto \vec{u} \wedge \vec{v}$ est bilinéaire, antisymétrique, et vérifie $\|\vec{u} \wedge \vec{v}\| = \|\vec{u}\| \|\vec{v}\| |\sin(\theta)|$.
*   **Produit mixte :** Défini par $[\vec{u}, \vec{v}, \vec{w}] = (\vec{u} \wedge \vec{v} \mid \vec{w})$. Il représente algébriquement le volume du parallélépipède construit sur $(\vec{u}, \vec{v}, \vec{w})$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Théorème : Expression analytique de la distance d'un point à un hyperplan
Soit $\mathcal{H}$ un hyperplan affine d'équation cartésienne $ax + by + cz + d = 0$ dans un espace affine euclidien orienté de dimension 3 rapporté à un RON. Soit $M_0(x_0, y_0, z_0) \in \mathcal{E}$. La distance de $M_0$ à $\mathcal{H}$ est :
$$d(M_0, \mathcal{H}) = \frac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$$

#### Démonstration :
Soit $H(x_1, y_1, z_1)$ le projeté orthogonal de $M_0$ sur $\mathcal{H}$. Le vecteur normal à $\mathcal{H}$ est $\vec{n} = \begin{pmatrix} a \\ b \\ c \end{pmatrix}$. 
Le vecteur $\overline{H M_0}$ est colinéaire à $\vec{n}$, donc il existe $\lambda \in \mathbb{R}$ tel que $\overrightarrow{HM_0} = \lambda \vec{n}$.
Ainsi, $x_0 = x_1 + \lambda a$, $y_0 = y_1 + \lambda b$, $z_0 = z_1 + \lambda c$.
Puisque $H \in \mathcal{H}$, ses coordonnées vérifient l'équation de $\mathcal{H}$ : $ax_1 + by_1 + cz_1 + d = 0$.
En remplaçant :
$$ax_0 + by_0 + cz_0 + d = a(x_1 + \lambda a) + b(y_1 + \lambda b) + c(z_1 + \lambda c) + d$$
$$(ax_1 + by_1 + cz_1 + d) + \lambda(a^2 + b^2 + c^2) = 0 + \lambda\|\vec{n}\|^2$$
On en déduit que $\lambda = \frac{ax_0 + by_0 + cz_0 + d}{\|\vec{n}\|^2}$.
La distance cherchée est $d(M_0, \mathcal{H}) = \|\overrightarrow{HM_0}\| = |\lambda| \|\vec{n}\| = \frac{|ax_0 + by_0 + cz_0 + d|}{\|\vec{n}\|}$, ce qui donne la formule voulue. $\blacksquare$

### 2.2. Théorème de projection et symétrie orthogonale
Soit $F$ un sous-espace affine de $\mathcal{E}$ défini par un système d'équations. Pour tout point $M \in \mathcal{E}$, il existe un unique projeté orthogonal $p(M) \in F$ tel que $\forall N \in F, \, d(M,N) \ge d(M,p(M))$.

---

## 💡 3. Méthodes de calcul & Algorithmes

### 3.1. Détermination de l'intersection d'une droite et d'un plan
Soit $\mathcal{D}$ définie par une représentation paramétrique et $\mathcal{P}$ par une équation cartésienne $ax + by + cz + d = 0$.
*   **Algorithme :** 
    1. Injecter les expressions paramétriques $(x(t), y(t), z(t))$ de $\mathcal{D}$ dans l'équation de $\mathcal{P}$.
    2. Résoudre l'équation linéaire d'inconnue $t \in \mathbb{R}$.
    *   Si l'équation admet une unique solution $t_0$, la droite et le plan sont sécants en un point unique obtenu pour $t = t_0$.
    *   Si l'équation n'a pas de solution, la droite est strictement parallèle au plan.
    *   Si l'équation est toujours vraie ($\forall t \in \mathbb{R}$), la droite est incluse dans le plan.

### 3.2. Calcul de la distance entre deux droites non coplanaires
Soient $\mathcal{D}_1 = A_1 + \mathbb{R}\vec{u}_1$ et $\mathcal{D}_2 = A_2 + \mathbb{R}\vec{u}_2$ deux droites non coplanaires de $\mathcal{E}$ ($\dim \mathcal{E} = 3$).
*   **Algorithme :**
    1. Le vecteur directeur commun orthogonal aux deux droites est $\vec{n} = \vec{u}_1 \wedge \vec{u}_2$.
    2. La distance entre $\mathcal{D}_1$ et $\mathcal{D}_2$ correspond à la hauteur du parallélépipède formé par les vecteurs $\overrightarrow{A_1A_2}, \vec{u}_1, \vec{u}_2$.
    3. Formule explicite : 
    $$d(\mathcal{D}_1, \mathcal{D}_2) = \frac{|(\overrightarrow{A_1A_2} \mid \vec{u}_1 \wedge \vec{u}_2)|}{\|\vec{u}_1 \wedge \vec{u}_2\|} = \frac{|[\overrightarrow{A_1A_2}, \vec{u}_1, \vec{u}_2]|}{\|\vec{u}_1 \wedge \vec{u}_2\|}$$

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Oubli du repère orthonormé (RON) :** 
    Beaucoup de formules métriques (distances, orthogonalité via les coefficients, normes de produits vectoriels) **exigent** un repère orthonormé. Dans un repère quelconque, l'expression du produit scalaire utilise la matrice $S \in \mathcal{M}_{n}(\mathbb{R})$ de la métrique. Ne l'utilisez jamais aveuglément.
2.  **Confusion entre droites concourantes, coplanaires et non coplanaires :**
    En dimension 3, deux droites qui ne sont pas sécantes ne sont **pas nécessairement parallèles**. On les dit non coplanaires. Veillez à bien tester le déterminant (produit mixte) pour caractériser leur position relative.
3.  **Erreurs d'orientation :**
    Le produit vectoriel dépend de l'orientation de l'espace. Dans les exercices de physique ou de géométrie analytique avancée, inverser l'ordre des vecteurs dans un produit vectoriel ou mixte conduit à un signe opposé erroné.
4.  **Mauvaise manipulation des équations cartésiennes d'hyperplans :**
    Le vecteur normal $\vec{n} = \begin{pmatrix} a \\ b \\ c \end{pmatrix}$ se lit directement à partir des coefficients de $x, y, z$ **uniquement** lorsque l'équation est sous forme cartésienne standard dans un RON.