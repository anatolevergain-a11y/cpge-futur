---
title: 'Cours : Espaces préhilbertiens réels'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Espaces préhilbertiens réels — Fiche de cours MPSI

## 1. Produit scalaire

### A. Définitions fondamentales
Soit $E$ un $\mathbb{R}$-espace vectoriel. 
Une application $\langle \cdot, \cdot \rangle : E \times E \to \mathbb{R}$ est appelée **produit scalaire** si elle vérifie les propriétés suivantes :

1. **Bilinéarité :** 
   - Pour tout $y \in E$, l'application $x \mapsto \langle x, y \rangle$ est linéaire ($\forall (x_1, x_2) \in E^2, \forall \lambda \in \mathbb{R}, \langle \lambda x_1 + x_2, y \rangle = \lambda \langle x_1, y \rangle + \langle x_2, y \rangle$).
   - Pour tout $x \in E$, l'application $y \mapsto \langle x, y \rangle$ est linéaire.
2. **Symétrie :** 
   $\forall (x, y) \in E^2, \quad \langle x, y \rangle = \langle y, x \rangle$.
3. **Positivité :** 
   $\forall x \in E, \quad \langle x, x \rangle \ge 0$.
4. **Caractère défini :** 
   $\forall x \in E, \quad \langle x, x \rangle = 0 \implies x = 0_E$.

Un **espace préhilbertien réel** est un couple $(E, \langle \cdot, \cdot \rangle)$ formé d'un $\mathbb{R}$-espace vectoriel et d'un produit scalaire. Si de plus $E$ est de dimension finie, on parle souvent d'espace euclidien.

### B. Exemples fondamentaux au programme
* **Sur $\mathbb{R}^n$ :** Le produit scalaire usuel défini par $\langle x, y \rangle = \sum_{i=1}^n x_i y_i$.
* **Sur $\mathcal{C}([a, b], \mathbb{R})$ :** $\langle f, g \rangle = \int_a^b f(t)g(t)\,\mathrm{d}t$.
* **Sur $\mathcal{M}_n(\mathbb{R})$ :** $\langle A, B \rangle = \operatorname{Tr}({}^t\!A B)$.

---

## 2. Norme et orthogonalité

### A. Norme induite
Tout produit scalaire permet de définir une norme sur $E$ en posant :
$$\forall x \in E, \quad \|x\| = \sqrt{\langle x, x \rangle}$$

> **Théorème (Inégalité de Cauchy-Schwarz) :**
> Pour tous $x, y \in E$ :
> $$|\langle x, y \rangle| \le \|x\| \|y\|$$
> *Cas d'égalité :* Il y equality si et seulement si la famille $(x, y)$ est liée.

> **Théorème (Inégalité triangulaire de Minkowski) :**
> Pour tous $x, y \in E$ :
> $$\|x + y\| \le \|x\| + \|y\|$$

### B. Orthogonalité
* **Définition :** Deux vecteurs $x, y \in E$ sont dit **orthogonaux** (noté $x \perp y$) si $\langle x, y \rangle = 0$.
* **Identité de Pythagore :** Si $x \perp y$, alors $\|x + y\|^2 = \|x\|^2 + \|y\|^2$.
* **Théorème de Pythagore généralisé :** Si $(x_1, \dots, x_n)$ est une famille de vecteurs **deux à deux orthogonaux**, alors :
  $$\left\| \sum_{i=1}^n x_i \right\|^2 = \sum_{i=1}^n \|x_i\|^2$$

---

## 3. Familles orthonormales

### A. Définitions
* Une famille de vecteurs $(e_1, \dots, e_n)$ de $E$ est dite **orthogonale** si ses éléments sont deux à deux orthogonaux ($\forall i \neq j, \langle e_i, e_j \rangle = 0$).
* Elle est dite **orthonormale (FON)** si elle est orthogonale et que chaque vecteur est de norme $1$ ($\forall i, j, \langle e_i, e_j \rangle = \delta_{ij}$).

> **Proposition :** Toute famille orthogonale de vecteurs non nuls est **libre**. En particulier, toute FON est libre.

### B. Coordonnées dans une base orthonormée
Si $(e_1, \dots, e_n)$ est une base orthonormée de $E$, alors pour tout vecteur $x \in E$ :
$$x = \sum_{i=1}^n \langle x, e_i \rangle e_i \quad \text{et} \quad \|x\|^2 = \sum_{i=1}^n \langle x, e_i \rangle^2$$

### C. Procédé d'orthonormalisation de Schmidt
> **Théorème :** Tout sous-espace vectoriel de dimension finie d'un espace préhilbertien possède une base orthonormée. De plus, tout espace préhilbertien de dimension finie possède une B.O.N.

*Principe de construction (Schmidt) :* À partir d'une base $(u_1, \dots, u_n)$, on construit une base orthogonale $(e_1, \dots, e_n)$ par récurrence :
1. $e_1 = u_1$
2. $e_2 = u_2 - \frac{\langle u_2, e_1 \rangle}{\|e_1\|^2} e_1$
3. Et ainsi de suite, en projetant orthogonalement le vecteur $u_k$ sur l'espace engendré par les précédents. On normalise ensuite chaque vecteur.

---

## 4. Supplémentaire orthogonal

### A. Définition et propriétés
Soit $A$ une partie d'un espace préhilbertien $E$. L'**orthogonal** de $A$, noté $A^\perp$, est l'ensemble :
$$A^\perp = \{ x \in E \mid \forall a \in A, \langle x, a \rangle = 0 \}$$

* **Propriétés fondamentales :**
  1. Pour toute partie $A$, $A^\perp$ est un **sous-espace vectoriel** de $E$.
  2. $\{0_E\}^\perp = E$ et $E^\perp = \{0_E\}$.
  3. Si $A \subset B$, alors $B^\perp \subset A^\perp$.
  4. $A \subset (A^\perp)^\perp$.
  5. Pour tout sous-espace vectoriel $F$, $F \cap F^\perp = \{0_E\}$.

### B. Cas de la dimension finie
> **Théorème :** Si $E$ est un espace préhilbertien de dimension finie et $F$ un sous-espace vectoriel de $E$, alors :
> $$E = F \oplus F^\perp$$
> De plus, $\dim(F^\perp) = \dim(E) - \dim(F)$ et $(F^\perp)^\perp = F$.

---

## 5. Méthodes

* **Démontrer qu'une application est un produit scalaire :** 
  Vérifier rigoureusement les 4 axiomes. Pour la positivité et le caractère défini, on part souvent de $\langle x, x \rangle = 0$ pour arriver à $x=0$.
Attention: * Dans les espaces de fonctions, la positivité $\int_a^b f(t)^2\,\mathrm{d}t \ge 0$ est immédiate (intégrale d'une fonction positive). Le caractère défini repose sur la continuité : si $f$ est continue et positive, d'intégrale nulle, alors $f$ est nulle.
* **Calculer une distance ou un angle :**
  Se ramener à l'utilisation du produit scalaire via $\cos(\theta) = \frac{\langle x, y \rangle}{\|x\|\|y\|}$.
* **Utiliser l'orthogonalité pour simplifier des calculs de normes :**
  Penser immédiatement à Pythagore si les vecteurs proviennent d'une construction orthogonale.

---

## 6. Pièges classiques (À éviter)

1. **Oublier la continuité pour le produit scalaire des fonctions :** 
   Sur $\mathbb{R}[X]$, $\langle P, Q \rangle = \int_0^1 P(t)Q(t)\,\mathrm{d}t$ est un produit scalaire. Sur l'espace de toutes les fonctions de $\mathbb{R}$ dans $\mathbb{R}$, l'intégrale $\int_0^1 f(t)^2\,\mathrm{d}t = 0$ n'implique **pas** que $f$ est nulle partout (seulement presque partout), ce qui pose un problème pour l'axiome du caractère défini.
2. **Confondre orthogonal et suppémentaire orthogonal en dimension infinie :**
   En dimension infinie, on a bien $F \cap F^\perp = \{0_E\}$, mais on n'a **pas toujours** $E = F \oplus F^\perp$ (considérer par exemple un sous-espace dense strict).
3. **Appliquer Schmidt sans vérifier la liberté :**
   Le procédé de Schmidt nécessite de partir d'une **base** (donc d'une famille libre).