---
title: 'Cours : Algèbre bilinéaire'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Algèbre Bilinéaire (PC - Mathématiques)

---

## 1. Formes bilinéaires et formes quadratiques

### A. Formes bilinéaires
Soit $E$ un $\mathbb{K}$-espace vectoriel ($\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$).

**Définition 1 (Forme bilinéaire) :**
Une application $f : E \times E \to \mathbb{K}$ est dite bilinéaire si elle est linéaire par rapport à chacune de ses variables :
1. $\forall y \in E$, l'application $x \mapsto f(x, y)$ est linéaire.
2. $\forall x \in E$, l'application $y \mapsto f(x, y)$ est linéaire.

On note $\mathcal{B}(E)$ l'espace vectoriel des formes bilinéaires sur $E$.

**Définition 2 (Symétrie et antisymétrie) :**
* $f$ est **symétrique** si : $\forall (x, y) \in E^2, f(y, x) = f(x, y)$.
* $f$ est **antisymétrique** si : $\forall (x, y) \in E^2, f(y, x) = -f(x, y)$.

### B. Formes quadratiques
*Restriction au programme de PC : On se place dorénavant essentiellement sur $\mathbb{K} = \mathbb{R}$.*

**Définition 3 (Forme quadratique) :**
Une application $q : E \to \mathbb{R}$ est une forme quadratique s'il existe une forme bilinéaire symétrique $f$ sur $E$ telle que :
$$\forall x \in E, \quad q(x) = f(x, x)$$

**Théorème 1 (Polarisation) :**
Soit $q$ une forme quadratique associée à la forme bilinéaire symétrique $f$. Alors $f$ est unique et s'obtient par la formule de polarisation :
$$\forall (x, y) \in E^2, \quad f(x, y) = \frac{1}{2} \left( q(x+y) - q(x) - q(y) \right)$$

---

## 2. Représentation matricielle

Soit $E$ un $\mathbb{K}$-ev de dimension finie $n$, muni d'une base $\mathcal{B} = (e_1, \dots, e_n)$.

### A. Matrice d'une forme bilinéaire
**Définition 4 :**
La matrice de la forme bilinéaire $f$ dans la base $\mathcal{B}$ est la matrice $A = (a_{i,j})_{1 \le i,j \le n}$ définie par :
$$a_{i,j} = f(e_i, e_j)$$
Si $X$ et $Y$ sont les vecteurs colonnes des coordonnées de $x$ et $y$ dans $\mathcal{B}$, alors :
$$f(x, y) = X^T A Y$$
*Propriété :* $f$ est symétrique si et seulement si sa matrice $A$ est symétrique ($A^T = A$).

### B. Matrice d'une forme quadratique
**Définition 5 :**
La matrice d'une forme quadratique $q$ dans la base $\mathcal{B}$ est la matrice de la forme polaire associée $f$. Si $X$ est le vecteur colonne des coordonnées de $x$ :
$$q(x) = X^T A X = \sum_{i=1}^n a_{i,i} x_i^2 + 2 \sum_{1 \le i < j \le n} a_{i,j} x_i x_j$$

**Formule de changement de base :**
Si $P$ est la matrice de passage d'une base $\mathcal{B}$ à une base $\mathcal{B}'$, la nouvelle matrice $A'$ de la forme bilinéaire (ou quadratique) est :
$$A' = P^T A P$$

---

## 3. Réduction des formes quadratiques

### A. Méthode de Gauss (Décomposition en carrés)
**Théorème 2 :**
Toute forme quadratique $q$ peut s'écrire comme une combinaison linéaire (à coefficients réels) de carrés de formes linéaires indépendantes :
$$q(x) = \sum_{i=1}^r \alpha_i \left( \ell_i(x) \right)^2$$
où les $\ell_i$ forment une famille libre de $E^*$.

**Méthode pratique (Algorithme de Gauss) :**
1. Si un terme en $x_i^2$ a un coefficient non nul, on regroupe tous les termes contenant $x_i$ pour former le début d'un carré parfait.
2. Si aucun terme carré n'est présent mais qu'un terme croisé $x_i x_j$ ($i \neq j$) est non nul, on utilise l'identité remarquable :
   $$x_i x_j = \frac{1}{4} \left( (x_i + x_j)^2 - (x_i - x_j)^2 \right)$$
3. On procède par récurrence sur la dimension.

### B. Signature d'une forme quadratique
**Théorème 3 (Loi d'inertie de Sylvester) :**
Soit $q$ une forme quadratique sur un $\mathbb{R}$-espace vectoriel de dimension finie. Dans toute décomposition de Gauss, le nombre de coefficients strictement positifs, strictement négatifs et nuls est invariant.

**Définition 6 (Signature) :**
Le couple $(p, s)$ où $p$ est le nombre de coefficients $> 0$ et $s$ le nombre de coefficients $< 0$ est appelé la **signature** de $q$. Le rang de $q$ est $r = p + s$.

---

## 4. Espaces préhilbertiens et hilbertiens réels

On suppose désormais $\mathbb{K} = \mathbb{R}$.

### A. Produit scalaire
**Définition 7 :**
Un produit scalaire sur un $\mathbb{R}$-ev $E$ est une forme bilinéaire symétrique $f$ (notée $(x|y)$ ou $\langle x, y \rangle$) qui est **définie positive** :
$$\forall x \in E, \quad (x|x) \ge 0 \quad \text{et} \quad ((x|x) = 0 \implies x = 0)$$
Un espace vectoriel muni d'un produit scalaire est un **espace préhilbertien réel**. S'il est de dimension finie, on parle d'**espace euclidien**.

**Théorème 4 (Cauchy-Schwarz) :**
$$\forall (x, y) \in E^2, \quad |(x|y)| \le \|x\| \|y\|$$
avec égalité si et seulement si $(x, y)$ est liée.

### B. Orthogonalité
**Définition 8 :**
* Deux vecteurs $x, y$ sont orthogonaux si $(x|y) = 0$.
* L'orthogonal d'une partie $A \subset E$ est l'ensemble : $A^\perp = \{ x \in E \mid \forall a \in A, (x|a) = 0 \}$.

**Théorème 5 (Supplémentaire orthogonal) :**
Si $F$ est un sous-espace vectoriel de dimension finie d'un espace préhilbertien $E$, alors :
$$E = F \oplus F^\perp$$
De plus, $(F^\perp)^\perp = F$.

### C. Procédé d'orthonormalisation de Gram-Schmidt
**Théorème 6 :**
Tout espace euclidien $E$ possède une base orthonormée (BON).

*Construction (Gram-Schmidt) :* À partir d'une base $\mathcal{B} = (e_1, \dots, e_n)$, on construit une base orthogonale $\mathcal{C} = (u_1, \dots, u_n)$ par récurrence :
* $u_1 = e_1$
* $u_k = e_k - \sum_{i=1}^{k-1} \frac{(e_k | u_i)}{\|u_i\|^2} u_i$
Puis on normalise : $\varepsilon_k = \frac{u_k}{\|u_k\|}$.

---

## 5. Endomorphismes remarquables en dimension finie

Soit $(E, \langle \cdot, \cdot \rangle)$ un espace euclidien.

### A. Adjoint
**Théorème 7 :**
Soit $u \in \mathcal{L}(E)$. Il existe un unique endomorphisme, noté $u^*$, tel que :
$$\forall (x, y) \in E^2, \quad \langle u(x), y \rangle = \langle x, u^*(y) \rangle$$
$u^*$ est appelé l'**adjoint** de $u$. Dans une BON, $\text{Mat}_{\mathcal{B}}(u^*) = (\text{Mat}_{\mathcal{B}}(u))^T$.

### B. Endomorphismes symétriques (autoadjoints)
**Définition 9 :**
$u$ est dit symétrique si $u^* = u$, c'est-à-dire : $\forall (x, y) \in E^2, \langle u(x), y \rangle = \langle x, u(y) \rangle$.

**Théorème 8 (Spectre et diagonalisation - Admis / Fondamental) :**
1. Les valeurs propres d'un endomorphisme symétrique sont toutes réelles.
2. Les sous-espaces propres associés à des valeurs propres distinctes sont orthogonaux.
3. **Théorème spectral :** Tout endomorphisme symétrique est diagonalisable dans une **base orthonormée**.

### C. Endomorphismes orthogonaux
**Définition 10 :**
Un endomorphisme $u$ est orthogonal s'il conserve le produit scalaire :
$$\forall (x, y) \in E^2, \quad \langle u(x), u(y) \rangle = \langle x, y \rangle$$
L'ensemble des endomorphismes orthogonaux forme un groupe, noté $\mathcal{O}(E)$.

**Caractérisations :**
* $u \in \mathcal{O}(E) \iff u^* \circ u = \text{id}_E \iff$ $u$ transforme une BON en une BON.
* Si $u$ est orthogonal, son déterminant vaut $\pm 1$. Si $\det(u) = 1$, $u$ est une rotation (groupe $\mathcal{SO}(E)$).

---

## 6. Méthodes à retenir

1. **Réduire une forme quadratique :** Toujours privilégier la méthode de Gauss en calculant proprement les coefficients, ou la méthode de réduction par blocs si la matrice comporte des zéros évidents.
2. **Déterminer le signe d'une forme quadratique :** Utiliser la signature obtenue via la méthode de Gauss (tous les coefficients positifs $\iff$ définie positive).
3. **Prouver qu'une application est un produit scalaire :** Vérifier la bilinéarité, la symétrie, et pour la positivité, utiliser une écriture sous forme de somme de carrés ou revenir à la définition $\int f^2 = 0 \implies f = 0$ (pour les fonctions).
4. **Diagonalisation d'une matrice symétrique :** Toujours expliciter clairement la base orthonormée de diagonalisation (penser à appliquer Gram-Schmidt en cas de sous-espaces propres de dimension $\ge 2$).

---

## 7. Pièges classiques (Attention aux erreurs de PC !)

* **Confondre matrice symétrique et définie positive :** Une matrice symétrique peut avoir des valeurs propres négatives ou nulles. Être symétrique n'implique *pas* à soi seul d'être un produit scalaire (il faut que le spectre soit strictement positif).
* **Oublier la normalisation :** Dans le théorème spectral, la base doit être *orthonormée*. Il ne suffit pas de diagonaliser, il faut diviser chaque vecteur propre par sa norme.
* **Erreur dans la formule de polarisation :** Ne pas oublier le facteur $\frac{1}{2}$ dans $f(x,y) = \frac{1}{2}(q(x+y) - q(x) - q(y))$.
* **Attention aux dimensions de l'orthogonal :** $F \oplus F^\perp = E$ n'est vrai que si $E$ est de dimension *finie* et le produit scalaire *défini*.