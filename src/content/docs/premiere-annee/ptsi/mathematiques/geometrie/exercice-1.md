---
title: 'Exercice 1 : Produit vectoriel et mixte'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Propriétés géométriques et analytiques du produit vectoriel et du produit mixte en dimension 3

**Filière :** PTSI  
**Matière :** Mathématiques  
Chapitre: ** Géométrie euclidienne  
**Thème :** Produit vectoriel et mixte  

---

## Énoncé

Soit $\mathcal{E} = \mathbb{R}^3$ muni de sa structure euclidienne canonique orientée par sa base orthonormée directe $\mathcal{B} = (\vec{i}, \vec{j}, \vec{k})$. 
On rappelle que pour tout vecteur $\vec{u} = (x_1, y_1, z_1)$ et $\vec{v} = (x_2, y_2, z_2)$, le produit vectoriel $\vec{u} \wedge \vec{v}$ est défini analytiquement par :
$$ \vec{u} \wedge \vec{v} = (y_1 z_2 - z_1 y_2)\vec{i} + (z_1 x_2 - x_1 z_2)\vec{j} + (x_1 y_2 - y_1 x_2)\vec{k} $$
Et pour tout triplet $(\vec{u}, \vec{v}, \vec{w})$, le produit mixte est défini par $[\vec{u}, \vec{v}, \vec{w}] = (\vec{u} \wedge \vec{v}) \cdot \vec{w}$.

Le problème se propose d'étudier certaines identités remarquables liées à ces outils géométriques, d'interpréter leurs limites physiques et de modéliser l'orientation d'un repère dans l'espace.

---

## Questions

1. **Calcul algébrique fondamental**  
   Soient $\vec{u}, \vec{v}, \vec{w}$ et $\vec{x}$ quatre vecteurs de $\mathbb{R}^3$. Établir la relation dite de *double produit vectoriel* (ou formule de Grassmann) :
   $$ \vec{u} \wedge (\vec{v} \wedge \vec{w}) = (\vec{u} \cdot \vec{w})\vec{v} - (\vec{u} \cdot \vec{v})\vec{w} $$
   *(On pourra utiliser un calcul dans une base bien choisie ou l'identité de Lagrange).*

2. **Application au produit mixte**  
   Démontrer l'identité de Jacobi pour le produit vectoriel : pour tous vecteurs $\vec{u}, \vec{v}, \vec{w}$,
   $$ \vec{u} \wedge (\vec{v} \wedge \vec{w}) + \vec{v} \wedge (\vec{w} \wedge \vec{u}) + \vec{w} \wedge (\vec{u} \wedge \vec{v}) = \vec{0} $$

3. **Interprétation géométrique et analyse critique du modèle**  
   Soit $\vec{F}$ un champ de force appliqué en un point $M$ dont la position par rapport à un point fixe $O$ est $\vec{OM}$. Le moment cinétique ou le moment de la force par rapport à $O$ est défini par $\vec{\mathcal{M}}_O(\vec{F}) = \vec{OM} \wedge \vec{F}$.
   Dans le cadre de la modélisation mécanique classique en dimension 3, analyser rigoureusement les limites de ce modèle vectoriel lorsque l'on change de référentiel (notamment en cas de passage d'un repère galiléen à un repère non galiléen en rotation).

---

## Pistes et Indications

* **Question 1 :** Pour simplifier les calculs sans perte de généralité, choisir un repère orthonormal où $\vec{v}$ est colinéaire à $\vec{i}$ et $\vec{w}$ est dans le plan $(\vec{i}, \vec{j})$. Expliciter les coordonnées de chaque vecteur.
* **Question 2 :** Appliquer directement la formule de Grassmann démontrée à la question 1 pour chaque terme de la somme, puis sommer.
* **Question 3 :** S'interroger sur la nature algébrique du produit vectoriel (qui est un vecteur "axial" ou "pseudovecteur") face aux inversions d'espace ou aux changements d'orientation, et discuter de la validité de l'outil mathématique face à la réalité physique.

---

## Corrigé pas à pas

### 1. Démonstration de la formule de Grassmann

*Méthode par choix d'une base adaptée :*
Soit $\vec{v}$ et $\vec{w}$ deux vecteurs. Si $\vec{v}$ et $\vec{w}$ sont colinéaires, alors $\vec{v} \wedge \vec{w} = \vec{0}$, donc le membre de gauche est nul. De plus, $\vec{v}$ et $\vec{w}$ étant colinéaires, on peut poser $\vec{w} = \lambda \vec{v}$, ce qui annule aussi le membre de droite par un calcul direct.

Supposons maintenant $\vec{v}$ et $\vec{w}$ non colinéaires. On choisit une base orthonormée directe $(\vec{i}', \vec{j}', \vec{k}')$ telle que :
- $\vec{i}'$ soit colinéaire à $\vec{v}$ : $\vec{v} = v_1 \vec{i}'$ (avec $v_1 > 0$).
- $\vec{j}'$ soit dans le plan $(\vec{v}, \vec{w})$ de sorte que $\vec{w} = w_1 \vec{i}' + w_2 \vec{j}'$ (avec $w_2 > 0$).
- $\vec{k}' = \vec{i}' \wedge \vec{j}'$ complète la base directe.

Soit $\vec{u} = x'\vec{i}' + y'\vec{j}' + z'\vec{k}'$. Calculons terme à terme :
1. $\vec{v} \wedge \vec{w} = (v_1 \vec{i}') \wedge (w_1 \vec{i}' + w_2 \vec{j}') = v_1 w_2 (\vec{i}' \wedge \vec{j}') = v_1 w_2 \vec{k}'$.
2. $\vec{u} \wedge (\vec{v} \wedge \vec{w}) = (x'\vec{i}' + y'\vec{j}' + z'\vec{k}') \wedge (v_1 w_2 \vec{k}')$
   $$ = -x' v_1 w_2 \vec{j}' + y' v_1 w_2 \vec{i}' $$

Évaluons à présent le membre de droite avec ce choix de base :
- $\vec{u} \cdot \vec{v} = x' v_1$
- $\vec{u} \cdot \vec{w} = x' w_1 + y' w_2$

Ainsi :
$$ (\vec{u} \cdot \vec{w})\vec{v} - (\vec{u} \cdot \vec{v})\vec{w} = (x' w_1 + y' w_2)(v_1 \vec{i}') - (x' v_1)(w_1 \vec{i}' + w_2 \vec{j}') $$
$$ = x' w_1 v_1 \vec{i}' + y' w_2 v_1 \vec{i}' - x' v_1 w_1 \vec{i}' - x' v_1 w_2 \vec{j}' $$
$$ = y' v_1 w_2 \vec{i}' - x' v_1 w_2 \vec{j}' $$

On retrouve bien l'égalité : $\vec{u} \wedge (\vec{v} \wedge \vec{w}) = (\vec{u} \cdot \vec{w})\vec{v} - (\vec{u} \cdot \vec{v})\vec{w}$. $\blacksquare$

---

### 2. Démonstration de l'identité de Jacobi

En appliquant la formule de Grassmann établie à la question 1 à chacun des trois termes :
1. $\vec{u} \wedge (\vec{v} \wedge \vec{w}) = (\vec{u} \cdot \vec{w})\vec{v} - (\vec{u} \cdot \vec{v})\vec{w}$
2. $\vec{v} \wedge (\vec{w} \wedge \vec{u}) = (\vec{v} \cdot \vec{u})\vec{w} - (\vec{v} \cdot \vec{w})\vec{u}$
3. $\vec{w} \wedge (\vec{u} \wedge \vec{v}) = (\vec{w} \cdot \vec{v})\vec{u} - (\vec{w} \cdot \vec{u})\vec{v}$

En effectuant la somme membre à membre de ces trois relations et en utilisant la symétrie du produit scalaire ($\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}$), on obtient :
$$ \sum_{\text{cyc}} \vec{u} \wedge (\vec{v} \wedge \vec{w}) = \left[(\vec{u}\cdot\vec{w})\vec{v} - (\vec{v}\cdot\vec{w})\vec{u}\right] + \left[(\vec{v}\cdot\vec{u})\vec{w} - (\vec{v}\cdot\vec{w})\vec{u}\right] \dots $$
Plus simplement, en regroupant les termes par vecteurs :
- Termes en $\vec{u}$ : $(\vec{w} \cdot \vec{v})\vec{u} - (\vec{v} \cdot \vec{w})\vec{u} = \vec{0}$
- Termes en $\vec{v}$ : $(\vec{u} \cdot \vec{w})\vec{v} - (\vec{w} \cdot \vec{u})\vec{v} = \vec{0}$
- Termes en $\vec{w}$ : $(\vec{v} \cdot \vec{u})\vec{w} - (\vec{u} \cdot \vec{v})\vec{w} = \vec{0}$

La somme est donc bel et bien nulle :
$$ \vec{u} \wedge (\vec{v} \wedge \vec{w}) + \vec{v} \wedge (\vec{w} \wedge \vec{u}) + \vec{w} \wedge (\vec{u} \wedge \vec{v}) = \vec{0} \quad \blacksquare $$

---

### 3. Analyse critique et limites du modèle géométrique

* **Nature algébrique des objets (Vecteurs vs Pseudovecteurs) :**  
  Le produit vectoriel $\vec{u} \wedge \vec{v}$ n'est pas un vecteur au sens strict (vecteur polaire ou de déplacement), mais un *pseudovecteur* (ou vecteur axial). En effet, lors d'une inversion du système d'axes (transformation de $\mathcal{B}$ en $-\mathcal{B}$), les vecteurs $\vec{u}$ et $\vec{v}$ changent de signe, tandis que leur produit vectoriel reste invariant (le déterminant associé change de signe, mais l'orientation de l'espace est inversée, compensant le signe). 
  
* **Limites en physique et en mécanique du solide :**  
  1. *Dimensionnalité :* Le produit vectoriel et le produit mixte reposent intrinsèquement sur la dimension 3 (unicité de l'orthogonal à un hyperplan de dimension 2, isomorphisme entre $\mathbb{R}^3$ et l'espace des applications antisymétriques). Il est mathématiquement impossible de définir un produit vectoriel standard en dimension 2 ou 4 de la même manière.
  2. *Changement de référentiel :* L'utilisation du moment $\vec{\mathcal{M}}_O(\vec{F})$ suppose un espace affine euclidien absolu. Lorsque le référentiel d'étude n'est plus galiléen (par exemple en cinématique d'un solide en rotation), l'apparition de forces d'inertie (coriolis, entraînement) fait perdre la simplicité du modèle vectoriel stationnaire, nécessitant l'utilisation d'outils plus robustes comme le calcul tensoriel ou les torseurs.
  3. *Sensibilité géométrique :* Si les vecteurs $\vec{u}$ et $\vec{v}$ sont colinéaires (erreurs de mesure expérimentales en sciences industrielles, incertitudes numériques en CFAO), le produit vectoriel s'annule brutalement, entraînant une perte d'information sur le plan engendré. Le modèle montre ici sa discontinuité topologique locale.