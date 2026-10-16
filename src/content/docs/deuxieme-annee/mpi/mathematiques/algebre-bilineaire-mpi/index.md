---
title: "📌 1. Définitions & Cadre d'étude"
description: "Fiche de cours et d'exercice CPGE."
---

## 📌 1. Définitions & Cadre d'étude

Soit $E$ un $\mathbb{R}$-espace vectoriel. 

### Produit scalaire
On appelle produit scalaire sur $E$ une application, notée $(x, y) \mapsto \langle x, y \rangle$ ou $(x|y)$, qui à tout couple de vecteurs $(x, y) de E^2$ associe un réel, telle que :
1. **Bilinéarité** : Pour tout $y \in E$, l'application $x \mapsto \langle x, y \rangle$ est linéaire, et pour tout $x \in E$, l'application $y \mapsto \langle x, y \rangle$ est linéaire.
2. **Symétrie** : Pour tous $(x, y) \in E^2$, $\langle x, y \rangle = \langle y, x \rangle$.
3. **Positivité** : Pour tout $x \in E$, $\langle x, x \rangle \ge 0$.
4. **Caractère défini** : Pour tout $x \in E$, $\langle x, x \rangle = 0 \iff x = 0_E$.

Un **espace préhilbertien réel** est un couple $(E, \langle \cdot, \cdot \rangle$ où $E$ est un $\mathbb{R}$-espace vectoriel muni d'un produit scalaire. Si de plus $E$ est de dimension finie, on parle souvent d'espace euclidien.

### Norme associée
Tout espace préhilbertien $(E, \langle \cdot, \cdot \rangle)$ possède une norme associée définie pour tout $x \in E$ par :
$$\|x\| = \sqrt{\langle x, x \rangle}$$

### Orthogonalité
* Deux vecteurs $x, y \in E$ sont dit **orthogonaux** (noté $x \perp y$) si $\langle x, y \rangle = 0$.
* Soit $A \subset E$. L'**orthogonal** de $A$ est l'ensemble noté $A^\perp$ défini par :
  $$A^\perp = \{ x \in E \mid \forall a \in A, \, \langle x, a \rangle = 0 \}$$
  $A^\perp$ est toujours un sous-espace vectoriel fermé (si $E$ est normé) de $E$.
---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème 1 : Inégalité de Cauchy-Schwarz
Pour tous $(x, y) \in E^2$, on a :
$$|\langle x, y \rangle| \le \|x\| \|y\|$$
*Cas d'égalité :* Il y a égalité si et seulement si $x$ et $y$ sont colinéaires.

#### Démonstration :
Si $y = 0_E$, l'inégalité est triviale ($0 = 0$). Supposons $y \neq 0_E$.
Pour tout réel $\lambda \in \mathbb{R}$, on considère la positivité de la norme du vecteur $x + \lambda y$ :
$$0 \le \|x + \lambda y\|^2 = \langle x + \lambda y, x + \lambda y \rangle = \|x\|^2 + 2\lambda \langle x, y \rangle + \lambda^2 \|y\|^2$$
Soit $P(\lambda) = \|y\|^2 \lambda^2 + 2\langle x, y \rangle \lambda + \|x\|^2$. C'est un polynôme du second degré en $\lambda$ qui est positif ou nul pour tout $\in \mathbb{R}$. 
Son discriminant réduit $\Delta'$ doit donc être négatif ou nul :
$$\Delta' = \langle x, y \rangle^2 - \|x\|^2 \|y\|^2 \le 0$$
D'où $\langle x, y \rangle^2 \le \|x\|^2 \|y\|^2$. En prenant la racine carrée, on obtient $|\langle x, y \rangle| \le \|x\| \|y\|$. $\blacksquare$

### Théorème 2 : Inégalité triangulaire
Pour tous $(x, y) \in E^2$, 
$$\|x + y\| \le \|x\| + \|y\|$$

### Théorème 3 : Identité de Pythagore
Si $x$ et $y$ sont orthogonaux, alors :
$$\|x + y\|^2 = \|x\|^2 + \|y\|^2$$

### Théorème 4 : Projection orthogonale en dimension finie
Soit $E$ un espace euclidien et $F$ un sous-espace vectoriel de $E$. Alors :
$$E = F \oplus F^\perp$$
De plus, pour tout $x \in E$, il existe un unique couple $(y, z) \in F \times F^\perp$ tel que $x = y + z$. Le vecteur $y$ est appelé le **projeté orthogonal** de $x$ sur $F$.

---

## 💡 3. Méthodes de calcul & Algorithmes

### Algorithme d'orthogonalisation de Gram-Schmidt
Permet de transformer une base $(e_1, \dots, e_n)$ de $E$ en une base orthogonale (voire orthonormée) $(u_1, \dots, u_n)$.

1. **Initialisation** : 
   $$u_1 = e_1$$
2. **Récurrence** : Pour $k \in \{2, \dots, n\}$, on pose :
   $$u_k = e_k - \sum_{j=1}^{k-1} \frac{\langle e_k, u_j \rangle}{\|u_j\|^2} u_j$$
3. **Normalisation** (pour obtenir une base orthonormée) :
   $$\varepsilon_k = \frac{u_k}{\|u_k\|}$$

### Représentation matricielle d'un produit scalaire
Soit $E$ un $\mathbb{R}$-espace vectoriel de dimension finie $n$ et $\mathcal{B} = (e_1, \dots, e_n)$ une base de $E$. 
Le produit scalaire est entièrement déterminé par la matrice symétrique $S \in \mathcal{M}_n(\mathbb{R})$ de terme général $S_{i,j} = \langle e_i, e_j \rangle$.
Si $X$ et $Y$ sont les vecteurs colonnes des coordonnées de $x$ et $y$ dans $\mathcal{B}$, alors :
$$\langle x, y \rangle = X^T S Y$$

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oublier le caractère défini** : Ne pas vérifier que $\langle x, x \rangle = 0 \implies x = 0$ lors de l'étude de formes bilinéaires. Une forme bilinéaire symétrique positive est seulement un produit scalaire si elle est non dégénérée (définie).
2. **Confondre orthogonal et supplémentaire** : Dans un espace préhilbertiens de dimension infinie, un sous-espace vectoriel fermé $F$ n'admet pas toujours $F^\perp$ comme supplémentaire topologique (le théorème de projection sur un convexe fermé s'applique, mais $F \oplus F^\perp = E$ requiert des hypothèses de complétude - espaces de Hilbert).
3. **Mauvaise utilisation de Gram-Schmidt** : Appliquer la formule de Gram-Schmidt directement sur des vecteurs liés sans s'assurer qu'ils forment une base (le terme $\|u_j\|$ s'annulerait, provoquant une division par zéro).
4. **Confusion transposition et adjoignage** : Pour un endomorphisme $u \in \mathcal{L}(E)$, l'adjoint $u^*$ est défini par $\langle u(x), y \rangle = \langle x, u^*(y) \rangle$. En base orthonormée, la matrice de $u^*$ est la transités de la matrice de $u$ : $\text{Mat}_{\mathcal{B}}(u^*) = (\text{Mat}_{\mathcal{B}}(u))^T$. Attention, cela **exige** une base orthonormée.