---
title: 'Cours : Espaces préhilbertiens et euclidiens'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $E$ un $\mathbb{K}$-espace vectoriel, avec $\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$.

### A. Produit scalaire et hermitien
* **Définition (Forme sesquilinéaire / bilinéaire) :** 
  Une application $\langle \cdot, \cdot \rangle : E \times E \to \mathbb{K}$ est dite :
  - Sesquilinéaire à gauche (si $\mathbb{K} = \mathbb{C}$) ou bilinéaire (si $\mathbb{K} = \mathbb{R}$) : linéaire par rapport à la première variable.
  - Antilinéaire à droite ($\mathbb{K} = \mathbb{C}$) ou linéaire ($\mathbb{K} = \mathbb{R}$) : $\langle x, \lambda y + z \rangle = \bar{\lambda}\langle x, y \rangle + \langle x, z \rangle$ (pour $\mathbb{K} = \mathbb{C}$).

* **Définition (Hermitienne / Préhilbertienne) :**
  Une application $\langle \cdot, \cdot \rangle$ est un produit scalaire (dans le cas réel) ou hermitien (dans le cas complexe) si elle vérifie :
  1. **Symétrie / Hermiticité :** $\forall (x,y) \in E^2, \; \langle y, x \rangle = \overline{\langle x, y \rangle}$.
  2. **Positivité :** $\forall x \in E, \; \langle x, x \rangle \in \mathbb{R}_+$ et $\langle x, x \rangle \ge 0$.
  3. **Caractère défini :** $\forall x \in E, \; (\langle x, x \rangle = 0 \implies x = 0_E)$.

* **Vocabulaire :**
  - Un espace vectoriel muni d'un tel produit scalaire est un **espace préhilbertien** (réel ou complexe).
  - Un espace préhilbertien **réel de dimension finie** est appelé un **espace euclidien**.
  - Un espace préhilbertien **complexe de dimension finie** est appelé un **espace hermitien**.

### B. Norme associée
Tout produit scalaire induit une norme canonique définie par :
$$\forall x \in E, \; \|x\| = \sqrt{\langle x, x \rangle}$$

### C. Orthogonalité
* **Définition :** Deux vecteurs $x, y \in E$ sont dits **orthogonaux** (noté $x \perp y$) si $\langle x, y \rangle = 0$.
* **Famille orthogonale / orthonormée :** Une famille $(e_i)_{i \in I}$ est dite orthogonale si $\forall i \neq j, \; \langle e_i, e_j \rangle = 0$. Elle est orthonormée (FON) si de plus $\forall i, \; \|e_i\| = 1$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### A. Inégalité de Cauchy-Schwarz
* **Énoncé :** 
  Soit $(E, \langle \cdot, \cdot \rangle)$ un espace préhilbertien. Alors :
  $$\forall (x,y) \in E^2, \; |\langle x, y \rangle| \le \|x\| \|y\|$$
  Il y a égalité si et seulement si la famille $(x,y)$ est liée.

* **Démonstration :**
  Si $y = 0_E$, l'inégalité est triviale ($0 = 0$). Supposons $y \neq 0_E$.
  Pour tout $\lambda \in \mathbb{K}$, posons :
  $$f(\lambda) = \|x + \lambda y\|^2 = \langle x + \lambda y, x + \lambda y \rangle = \|x\|^2 + \lambda \langle y, x \rangle + \bar{\lambda} \langle x, y \rangle + |\lambda|^2 \|y\|^2$$
  En particulier, choisissons $\lambda = -\frac{\langle y, x \rangle}{\|y\|^2}$. On a :
  $$f(\lambda) = \|x\|^2 - \frac{|\langle x, y \rangle|^2}{\|y\|^2} \ge 0$$
  D'où $|\langle x, y \rangle|^2 \le \|x\|^2 \|y\|^2$, ce qui donne le résultat par passage à la racine carrée.
  *Cas d'égalité :* Si $f(\lambda) = 0$ pour le $\lambda$ optimal, alors $x + \lambda y = 0_E$, donc $x$ et $y$ sont colinéaires. Réciproquement, si la famille est liée, le calcul se ramène à une égalité algébrique évidente. $\blacksquare$

### B. Inégalité triangulaire
* **Énoncé :** 
  $$\forall (x,y) \in E^2, \; \|x + y\| \le \|x\| + \|y\|$$

* **Démonstration :**
  $$\|x + y\|^2 = \|x\|^2 + 2 \text{Re}(\langle x, y \rangle) + \|y\|^2 \le \|x\|^2 + 2 |\langle x, y \rangle| + \|y\|^2$$
  Par Cauchy-Schwarz :
  $$\|x + y\|^2 \le \|x\|^2 + 2 \|x\| \|y\| + \|y\|^2 = (\|x\| + \|y\|)^2$$
  En prenant la racine carrée, on obtient l'inégalité triangulaire. $\blacksquare$

### C. Théorème de Pythagore
* **Énoncé :** 
  Si $(x, y) \in E^2$ sont orthogonaux ($x \perp y$), alors :
  $$\|x + y\|^2 = \|x\|^2 + \|y\|^2$$

### D. Procédé d'orthogonalisation de Gram-Schmidt
* **Énoncé :** 
  Toute famille libre $(e_1, \dots, e_n)$ d'un espace préhilbertien peut être transformée en une famille orthogonale $(u_1, \dots, u_n)$ engendrant les mêmes sous-espaces vectoriels, via la relation de récurrence :
  $$u_1 = e_1 \quad \text{et} \quad u_k = e_k - \sum_{j=1}^{k-1} \frac{\langle e_k, u_j \rangle}{\|u_j\|^2} u_j$$

### E. Théorème de projection orthogonal sur un sous-espace de dimension finie
* **Énoncé :** 
  Soit $F$ un sous-espace vectoriel de dimension finie d'un espace préhilbertien $E$. Alors :
  $$E = F \oplus F^\perp$$
  De plus, pour tout $x \in E$, la projection orthogonale $p_F(x)$ est l'unique élément de $F$ réalisant la distance minimale entre $x$ et $F$ :
  $$d(x, F) = \|x - p_F(x)\| = \min_{y \in F} \|x - y\|$$

---

## 💡 3. Méthodes classiques de résolution

1. **Calculer une distance d'un vecteur à un sous-espace vectoriel :**
   - *Méthode 1 :* Trouver une base orthonormée $(e_1, \dots, e_k)$ de $F$, puis calculer $p_F(x) = \sum_{i=1}^k \langle x, e_i \rangle e_i$. La distance est alors $\|x - p_F(x)\|$.
   - *Méthode 2 :* Utiliser le théorème de Pythagore ou résoudre un système d'équations normales si $F$ est donné par un système d'équations cartésiennes.

2. **Montrer qu'une application est un produit scalaire :**
   - Vérifier scrupuleusement les trois axiomes : bilinéarité (ou sesquilinéarité), symétrie (ou hermiticité) et positivité.
   - Pour la positivité, s'aider d'une écriture sous forme de somme de carrés ou d'une intégrale dont la fonction est positive et continue.
   - Pour le caractère défini ($\langle x, x \rangle = 0 \implies x = 0$), utiliser la continuité de la fonction associée ou exploiter le domaine d'définition.

3. **Déterminer l'adjoint d'un endomorphisme (en dimension finie) :**
   - Par définition, l'adjoint $u^*$ de $u$ vérifie $\forall (x,y) \in E^2, \; \langle u(x), y \rangle = \langle x, u^*(y) \rangle$.
   - En dimension finie, si $M$ est la matrice de $u$ dans une **base orthonormée**, alors la matrice de $u^*$ dans cette même base est la transconjuguée $M^* = \bar{M}^T$ (ou simplement $M^T$ dans le cas réel).

---

## ⚠️ 4. Pièges classiques aux Concours

* **Piège 1 :** Appliquer le procédé de Gram-Schmidt ou supposer l'existence d'un supplémentaire orthogonal sans vérifier que le sous-espace est **de dimension finie**. (En dimension infinie, un sous-espace fermé n'admet pas toujours un supplémentaire orthogonal, ou $F \oplus F^\perp$ peut être strictement inclus dans $E$).
* **Piège 2 :** Confondre matrice orthogonale (qui caractérise les endomorphismes orthogonaux en base *orthonormée*) et la conservation du produit scalaire dans une base quelconque. Une matrice de passage entre deux bases orthonormales est orthogonale, mais attention aux bases non orthonormées.
* **Piège 3 :** Oublier la conjugaison dans le cas hermitien ($\mathbb{K} = \mathbb{C}$). Par exemple, $\langle \lambda x, y \rangle = \lambda \langle x, y \rangle$ mais $\langle x, \lambda y \rangle = \bar{\lambda} \langle x, y \rangle$.
* **Piège 4 :** Utiliser l'inégalité de Cauchy-Schwarz ou le théorème de Pythagore dans un espace vectoriel normé quelconque qui n'est **pas** préhilbertien (par exemple, les espaces $L^p$ avec $p \neq 2$ ou les espaces munis de la norme infini $\|\cdot\|_\infty$). Le produit scalaire est indispensable pour ces notions géométriques strictes.