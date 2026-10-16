---
title: 'Cours : Statique et Cinématique du solide'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Statique et Cinématique du Solide
**Filière :** PTSI — Sciences Industrielles de l'Ingénieur (SII)  
Niveau: ** Première année  

---

## 1. Introduction et Rapports Mathématiques

Un solide indéformable (noté $\mathcal{S}$) est un ensemble de points matériels $M$ tel que la distance entre deux points quelconques $M_1$ et $M_2$ reste constante au cours du temps :
$$\forall (M_1, M_2) \in \mathcal{S}^2, \quad \frac{d}{dt}(M_1M_2)^2 = 0$$

### Champ des vitesses dans un solide
Le champ des vecteurs vitesse d'un solide $\mathcal{S}$ en mouvement par rapport à un repère galiléen $\mathcal{R}_0$ est un **champ équiprojectif**. Il existe donc un vecteur unique, appelé vecteur rotation $\vec{\Omega}(\mathcal{S}/\mathcal{R}_0)$, tel que :
$$\forall (P, Q) \in \mathcal{S}^2, \quad \vec{V}(P \in \mathcal{S}/\mathcal{R}_0) = \vec{V}(Q \in \mathcal{S}/\mathcal{R}_0) + \vec{PQ} \wedge \vec{\Omega}(\mathcal{S}/\mathcal{R}_0)$$

---

## 2. Cinématique du Solide Indéformable

### 2.1. Torseur cinématique
Le caractère équiprojectif du champ des vitesses permet de définir le **torseur cinématique** du mouvement de $\mathcal{S}$ par rapport à $\mathcal{R}_0$ au point $P$ :
$$\{\mathcal{V}(\mathcal{S}/\mathcal{R}_0)\} = \left\{ \begin{array}{c} \vec{\Omega}(\mathcal{S}/\mathcal{R}_0) \\ \vec{V}(P \in \mathcal{S}/\mathcal{R}_0) \end{array} \right\}_{\text{point } P}$$

### 2.2. Liaisons élémentaires usuelles
Soit une liaison entre un solide $\mathcal{S}_1$ et un solide $\mathcal{S}_2$. Le torseur cinématique s'exprime dans un repère lié à la géométrie de la liaison (centre $O$, axes $(O, \vec{x}, \vec{y}, \vec{z})$) :

* **Liaison Pivot (axe $(O, \vec{x})$)** :
  $$\{\mathcal{V}(\mathcal{S}_1/\mathcal{S}_2)\} = \left\{ \begin{array}{cc} \dot{\theta} \vec{x} & 0 \\ \vec{0} & 0 \end{array} \right\}_O$$
* **Liaison Glissière (axe $(O, \vec{x})$)** :
  $$\{\mathcal{V}(\mathcal{S}_1/\mathcal{S}_2)\} = \left\{ \begin{array}{cc} \vec{0} & 0 \\ \dot{z} \vec{x} & 0 \end{array} \right\}_O$$
* **Liaison Pivot-Glissant (axe $(O, \vec{x})$)** :
  $$\{\mathcal{V}(\mathcal{S}_1/\mathcal{S}_2)\} = \left\{ \begin{array}{cc} \dot{\theta} \vec{x} & 0 \\ \dot{x} \vec{x} & 0 \end{array} \right\}_O$$
* **Liaison Rotule (centre $O$)** :
  $$\{\mathcal{V}(\mathcal{S}_1/\mathcal{S}_2)\} = \left\{ \begin{array}{cc} p\vec{x} + q\vec{y} + r\vec{z} & 0 \\ \vec{0} & 0 \end{array} \right\}_O$$

---

## 3. Statique du Solide

### 3.1. Torseur des actions mécaniques (TAM)
L'action mécanique extérieure exercée par un milieu $\mathcal{M}$ sur un solide $\mathcal{S}$ est modélisée par un torseur, dit torseur des actions mécaniques, exprimé en un point $P$ :
$$\{\mathcal{T}_{\mathcal{M}\to\mathcal{S}}\} = \left\{ \begin{array}{c} \vec{R}(\mathcal{M}\to\mathcal{S}) \\ \vec{M}_P(\mathcal{M}\to\mathcal{S}) \end{array} \right\}_{\text{point } P}$$
où $\vec{R}$ est la résultante des forces et $\vec{M}_P$ le moment résultant en $P$.

### 3.2. Modélisation des liaisons parfaites (sans frottement)
Le principe des actions mutuelles (loi de action-réaction) s'applique. Les composantes transmissibles d'une liaison parfaite s'obtiennent par dualité avec le torseur cinématique : le produit combiné des deux torseurs (puissance virtuelle) doit être nul pour tout mouvement compatible avec la liaison.

* **Liaison Pivot (axe $(O, \vec{x})$)** : Transmet 5 composantes (bloque 2 rotations et 3 translations).
  $$\{\mathcal{T}_{\mathcal{S}_1\to\mathcal{S}_2}\} = \left\{ \begin{array}{cc} X \vec{x} + Y \vec{y} + Z \vec{z} \\ L \vec{x} + M \vec{y} + N \vec{z} \end{array} \right\}_O \quad \text{avec } L=0$$
* **Liaison Appui Plan (normal à $\vec{z}$ en $O$)** : Transmet 3 composantes ($Z$, $L$, $M$).
  $$\{\mathcal{T}_{\mathcal{S}_1\to\mathcal{S}_2}\} = \left\{ \begin{array}{cc} Z \vec{z} \\ L \vec{x} + M \vec{y} \end{array} \right\}_O$$

---

## 4. Théorèmes Généraux de la Statique

Un solide $\mathcal{S}$ est en équilibre dans un référentiel galiléen $\mathcal{R}_0$ si et seulement si le torseur total des actions mécaniques extérieures s'exerçant sur $\mathcal{S}$ est nul en tout point $P$ :

$$\{\mathcal{T}_{\text{ext}\to\mathcal{S}}\} = \{\mathbf{0}\} \iff \left\{ \begin{array}{l} \sum \vec{R}_{\text{ext}\to\mathcal{S}} = \vec{0} \\ \sum \vec{M}_{P,\text{ext}\to\mathcal{S}} = \vec{0} \end{array} \right.$$

### Méthode de résolution d'un problème statique en PTSI :
1. **Isoler** le solide ou l'ensemble de solides étudié.
2. Faire le **bilan des actions mécaniques extérieures** en identifiant les liaisons et les actions à distance (poids).
3. Appliquer le **Principe Fondamental de la Statique (PFS)** : écriture des équations scalaires (au maximum 6 par solide en 3D, souvent ramenées à 3 en plan ou par projection judicieuse).
4. Résoudre le système d'équations algébriques.