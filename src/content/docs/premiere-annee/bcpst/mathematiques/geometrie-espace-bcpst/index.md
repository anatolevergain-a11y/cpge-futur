---
title: 'Cours : Géométrie vectorielle et repérée'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE BCPST.'
---

## 📌 1. Définitions & Cadre d'étude

Le cadre d'etude fondamental de la geometrie vectorielle et reperee en classe de premiere annee BCPST est l'espace affine euclidien reel de dimension 3, note $\mathcal{E}$, associe a son espace vectoriel directeur $\vec{\mathcal{E}}$ muni d'un produit scalaire.

### Espace vectoriel euclidien
On considere $\vec{\mathcal{E}}$ un $\mathbb{R}$-espace vectoriel de dimension finie $n$ ($n \in \{2, 3\}$). Un produit scalaire sur $\vec{\mathcal{E}}$ est une application bilineaire, symetrique, definie positive, note $\langle \cdot, \cdot \rangle$ ou $\cdot$.
- **Inegalite de Cauchy-Schwarz :** Pour tous $\vec{u}, \vec{v} \in \vec{\mathcal{E}}$, 
  $$|\langle \vec{u}, \vec{v} \rangle| \leq \|\vec{u}\| \|\vec{v}\|$$
- **Inegalite triadique (minkowski) :** Pour tous $\vec{u}, \vec{v} \in \vec{\mathcal{E}}$,
  $$\|\vec{u} + \vec{v}\| \leq \|\vec{u}\| + \|\vec{v}\|$$

### Repere cartesien et bases
- Un repère orthonorme (RON) de $\mathcal{E}$ est donne par un origine $O \in \mathcal{E}$ et une base orthonormee $\mathcal{B} = (\vec{i}, \vec{j}, \vec{k})$ de $\vec{\mathcal{E}}$.
- Tout vecteur $\vec{u} \in \vec{\mathcal{E}}$ se decompose de maniere unique dans $\mathcal{B}$ sous la forme $\vec{u} = x\vec{i} + y\vec{j} + z\vec{k}$, ce qui permet d'identifier $\vec{u}$ a sa matrice colonne des coordonnees :
  $$X = \begin{pmatrix} x \\ y \\ z \end{pmatrix} \in \mathcal{M}_{3,1}(\mathbb{R})$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Produit mixte et produit vectoriel en dimension 3
Soit $\vec{\mathcal{E}}$ un espace vectoriel euclidien oriente de dimension 3.

#### Definition (Produit vectoriel)
Pour $\vec{u}, \vec{v} \in \vec{\mathcal{E}}$, le produit vectoriel $\vec{u} \wedge \vec{v}$ est l'unique vecteur de $\vec{\mathcal{E}}$ defini par :
1. Pour tout $\vec{w} \in \vec{\mathcal{E}}$, $\langle \vec{u} \wedge \vec{v}, \vec{w} \rangle = \det(\vec{u}, \vec{v}, \vec{w})$ dans toute base orthonormee directe.
2. Proprietes algebriques : bilineaire, antisymetrique ($\vec{u} \wedge \vec{u} = \vec{0}$).

#### Proposition (Expression analytique dans un RON direct)
Si $\vec{u} = \begin{pmatrix} x_1 \\ y_1 \\ z_1 \end{pmatrix}$ et $\vec{v} = \begin{pmatrix} x_2 \\ y_2 \\ z_2 \end{pmatrix}$, alors :
$$\vec{u} \wedge \vec{v} = \begin{pmatrix} y_1 z_2 - z_1 y_2 \\ z_1 x_2 - x_1 z_2 \\ x_1 y_2 - y_1 x_2 \end{pmatrix}$$

#### Demonstration cle : Expression du produit mixte et invariance
Le produit mixte de trois vecteurs $\vec{u}, \vec{v}, \vec{w}$ est le reel $\det(\vec{u}, \vec{v}, \vec{w})$. 
Soit $\mathcal{B} = (\vec{i}, \vec{j}, \vec{k})$ un RON direct. Soit $P \in \mathcal{M}_{3,3}(\mathbb{R})$ la matrice de passage d'une base orthonormee directe a une autre. La matrice de passage d'un RON direct a un autre verifie $P^T P = I_3$ et $\det(P) = 1$.
Par invariance du determinant par changement de base orthonormee directe :
$$\det_{\mathcal{B}'}(\vec{u}, \vec{v}, \vec{w}) = \det(P^{-1}) \det_{\mathcal{B}}(\vec{u}, \vec{v}, \vec{w}) = \det(P^T) \det_{\mathcal{B}}(\vec{u}, \vec{v}, \vec{w}) = 1 \cdot \det_{\mathcal{B}}(\vec{u}, \vec{v}, \vec{w})$$
Ce scalaire represente geometriquement le volume signe du parallelepipede derobe par les trois vecteurs. $\blacksquare$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Calcul de la distance d'un point a une droite ou un plan
Soit un repere orthonorme $\mathcal{R} = (O, \vec{i}, \vec{j}, \vec{k})$.

#### 1. Distance d'un point $M_0(x_0, y_0, z_0)$ a un plan $(P)$ d'equation cartesienne $ax + by + cz + d = 0$ :
La formule officielle exigée aux concours est :
$$d(M_0, P) = \frac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$$

*Algorithme de calcul :*
1. Identifier le vecteur normal $\vec{n} = \begin{pmatrix} a \\ b \\ c \end{pmatrix}$ associe au plan $(P)$.
2. Verifier que le point n'appartient pas deja au plan.
3. Appliquer directement la formule analytique.

#### 2. Distance d'un point $M_0$ a une droite $(D)$ passee par $A$ et de vecteur directeur $\vec{u}$ :
$$d(M_0, D) = \frac{\|\vec{AM_0} \wedge \vec{u}\|}{\|\vec{u}\|}$$

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oubli de la nature directe du repere :** Utiliser la formule du produit vectoriel ou du produit mixte dans un repere qui n'est pas orthonorme direct conduit a des erreurs de signe fatales. Toujours preciser : *"Dans un repere orthonorme direct..."*.
2. **Confusions dimensionnelles :** Une equation cartesienne $ax + by + cz + d = 0$ represente un **plan** en dimension 3, mais une **droite** en dimension 2. En dimension 3, une droite se definit par un systeme de deux equations cartesiennes (intersection de deux plans non paralleles).
3. **Vecteurs normaux vs vecteurs directeurs :** Lors de l'etude d'une orthogonalite, ne pas confondre le vecteur normal a un plan et le vecteur directeur d'une droite orthogonale a ce plan.
4. **Denomination des matrices :** Ne jamais ecrire une matrice sans preciser son ensemble d'appartenance (ex: $M \in \mathcal{M}_{3,1}(\mathbb{R})$).