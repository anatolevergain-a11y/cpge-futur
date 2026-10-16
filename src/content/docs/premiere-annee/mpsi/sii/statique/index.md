---
title: 'Cours : Statique des solides'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Statique des Solides (MPSI - SII)

La statique des solides étudie les conditions d'équilibre d'un système mécanique dans un référentiel galiléen. En classe de MPSI, cette étude repose sur la modélisation rigoureuse des actions mécaniques et l'application des principes fondamentaux de la dynamique appliqués au cas stationnaire.

---

## 1. Modélisation des actions mécaniques (Torseurs)

### A. Définition du torseur
Une action mécanique extérieure s'exerçant sur un solide $\mathcal{S}$ est modélisée par un **torseur** noté $\{F\}$. Dans un repère lié à un repère galiléen, le torseur en un point $P$ est caractérisé par :
* Un champ de vecteurs moment $\vec{M}(P, \mathcal{E} \to \mathcal{S})$
* Une résultante $\vec{R}(\mathcal{E} \to \mathcal{S})$ indépendante du point de réduction.

$$\{F_{\mathcal{E} \to \mathcal{S}}\} = \begin{Bmatrix} \vec{R}_{\mathcal{E} \to \mathcal{S}} \\ \vec{M}(P, \mathcal{E} \to \mathcal{S}) \end{Bmatrix}_P$$

### B. Torseur d'action mécanique transmissible par les liaisons usuelles
Soit une liaison parfaite (sans frottement) entre un solide $\mathcal{S}_1$ et un solide $\mathcal{S}_2$. Le torseur des actions mécaniques transmissibles au point $A$ (centre de la liaison) s'exprime dans la base locale $( \vec{x}, \vec{y}, \vec{z} )$.

* **Liaison Pivot d'axe $(A, \vec{x})$ :**
  $$\{T_{1 \to 2}\} = \begin{Bmatrix} X \vec{x} + Y \vec{y} + Z \vec{z} \\ L \vec{x} + 0 \vec{y} + 0 \vec{z} \end{Bmatrix}_A$$
  *(Transmet 3 forces et 1 moment)*

* **Liaison Glissière de direction $\vec{x}$ :**
  $$\{T_{1 \to 2}\} = \begin{Bmatrix} 0 \vec{x} + Y \vec{y} + Z \vec{z} \\ L \vec{x} + M \vec{y} + N \vec{z} \end{Bmatrix}_A$$
  *(Transmet 2 forces et 3 moments)*

* **Liaison Rotule (Sphérique) de centre $A$ :**
  $$\{T_{1 \to 2}\} = \begin{Bmatrix} X \vec{x} + Y \vec{y} + Z \vec{z} \\ \vec{0} \end{Bmatrix}_A$$
  *(Transmet 3 forces et 0 moment)*

* **Liaison Appui plan de normale $\vec{z}$ en $A$ :**
  $$\{T_{1 \to 2}\} = \begin{Bmatrix} X \vec{x} + Y \vec{y} + Z \vec{z} \\ L \vec{x} + M \vec{y} + 0 \vec{z} \end{Bmatrix}_A$$

---

## 2. Principe Fondamental de la Statique (PFS)

### A. Théorème
Soit un système $\Sigma$ isolé ou pseudo-isolé, en équilibre dans un référentiel $\mathcal{R}_g$ supposé galiléen. La somme des torseurs de tous les efforts extérieurs s'exerçant sur $\Sigma$ est égale au torseur nul :

$$\sum \{F_{\text{ext} \to \Sigma}\} = \{0\}$$

### B. Traduction analytique
En tout point $P$, ce principe se décompose en deux équations vectorielles fondamentales :

1. **Théorème de la résultante statique (TRS) :**
   $$\vec{R}_{\text{ext} \to \Sigma} = \sum \vec{R}_i = \vec{0}$$

2. **Théorème du moment statique (TMS) en un point $P$ :**
   $$\vec{M}(P, \text{ext} \to \Sigma) = \sum \vec{M}(P, \text{efforts}_i) = \vec{0}$$

---

## 3. Méthodes de résolution en statique

Pour résoudre un problème de statique menant à un système de $n$ équations à $n$ inconnues :

### A. Démarche méthodique
1. **Isoler le système :** Définir clairement le solide ou l'ensemble de solides $\Sigma$ étudié.
2. **Bilan des actions mécaniques extérieures (BAMEX) :** Recenser toutes les actions subies par $\Sigma$ (forces de contact, actions à distance comme la pesanteur).
3. **Exprimer les torseurs** au même point $P$ (souvent un centre de liaison) dans une base adaptée.
4. **Appliquer le PFS** (généralement 3 équations de projection pour la résultante et 3 pour le moment, soit 6 scalaires par solide).
5. **Résoudre** le système algébrique linéaire.

### B. Théorème des moments (Cas particuliers scalaires)
* **Par rapport à un axe $(\Delta) = (A, \vec{u})$ :** 
  $$\mathcal{M}_{A,\vec{u}}(\vec{R}) = \vec{M}(A, \vec{F}) \cdot \vec{u} = 0$$
* **Solide soumis à 2 forces :** Si un solide $\mathcal{S}$ en équilibre n'est soumis qu'à deux actions mécaniques extérieures, ces deux forces sont colinéaires, égales et opposées, portées par la droite joignant les deux points d'application.
* **Solide soumis à 3 forces :** Si un solide est soumis à trois forces coplanaires non parallèles, leurs droites d'action sont concourantes en un même point.

---

## 4. Pièges et erreurs classiques à éviter

> **Piège 1 : Oublier le transport des moments.**
> Lors de l'écriture du TMS en un point $B$ alors que le moment est connu en $A$, il ne faut pas oublier la relation de transport :
> $$\vec{M}(B, \mathcal{E} \to \mathcal{S}) = \vec{M}(A, \mathcal{E} \to \mathcal{S}) + \overrightarrow{BA} \wedge \vec{R}(\mathcal{E} \to \mathcal{S})$$

> **Piège 2 : Le choix du système isolé.**
> Isoler l'ensemble $\{\mathcal{S}_1 \cup \mathcal{S}_2\}$ permet d'éliminer les actions intérieures (liaisons entre $\mathcal{S}_1$ et $\mathcal{S}_2$). C'est souvent l'étape indispensable avant d'isoler un sous-solide pour déterminer un effort interne.

> **Piège 3 : Confusion liaison parfaite / avec frottement.**
> En statique, l'absence de frottement supprime les composantes tangentielles dans les liaisons unilatérales (ex: appui plan sans frottement $\implies$ force normale uniquement). Ne pas introduire d'inconnues superflues.