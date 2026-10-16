---
title: 'Problème type Concours : Étude locale d une fonction de $\mathcal{C}^2$ sur $\mathcal{M}_n(\mathbb{R})$'
description: 'Problème d entraînement type Mines-Ponts/Centrale-Supélec pour la filière MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $n \ge 2$ un entier. On note $\mathcal{M}_n(\mathbb{R})$ l'espace vectoriel des matrices carrées réelles de taille $n$, muni du produit scalaire canonique, dit produit scalaire de Frobenius, défini par :
$$\forall (A, B) \in \mathcal{M}_n(\mathbb{R})^2, \quad \langle A, B \rangle = \text{Tr}(A^T B)$$
où $\text{Tr}$ désigne la trace d'une matrice. On note $\|\cdot\|$ la norme euclidienne associée.

On considère l'application $f : \mathcal{M}_n(\mathbb{R}) \to \mathbb{R}$ définie par :
$$\forall X \in \mathcal{M}_n(\mathbb{R}), \quad f(X) = \text{Tr}(X^3) - 3\text{Tr}(X^2)$$

L'objectif de ce problème est de déterminer les points critiques de $f$ et de classifier ces points à l'aide de la hessienne (ou de la différentielle seconde).

---

### ❓ Questions progressives

1. **Topologie et différentiabilité** : Justifier que l'application $f$ est de classe $\mathcal{C}^1$ (puis $\mathcal{C}^\infty$) sur $\mathcal{M}_n(\mathbb{R})$.
2. **Calcul de la différentielle** : Soit $X \in \mathcal{M}_n(\mathbb{R})$ et $H \in \mathcal{M}_n(\mathbb{R})$. Calculer la différentielle première $df(X)(H)$ en utilisant un développement limité à l'ordre 1 ou la notion de dérivée directionnelle.
3. **Gradient** : En déduire l'expression du gradient $\nabla f(X)$ dans le cadre du produit scalaire de Frobenius.
4. **Points critiques** : Déterminer l'ensemble des points critiques de $f$ sous la forme de matrices commutant avec une matrice diagonale simple, ou caractériser ces matrices par leur spectre.
5. **Différentielle seconde** : Calculer la différentielle seconde $d^2f(X)(H, K)$ pour des matrices $H, K \in \mathcal{M}_n(\mathbb{R})$.
6. **Nature des extrema** : Étudier la nature des points critiques trouvés à la question 4.

---

### 💡 Pistes & Indications méthodologiques

* **Pour la question 1** : Exprimez $f$ à l'aide d'applications multilinéaires (produits matriciels) et de la trace, qui sont des fonctions polynomiales des coefficients de la matrice.
* **Pour la question 2** : Évitez de tout développer en coordonnées. Utilisez la linéarité de la trace et effectuez un développement à l'ordre 1 en écrivant $f(X+H) - f(X)$ et en extrayant les termes linéaires en $H$.
* **Pour la question 3** : Rappelez-vous la définition du gradient via le produit scalaire : $df(X)(H) = \langle \nabla f(X), H \rangle$.
* **Pour la question 4** : Traduisez l'annulation du gradient. Utilisez éventuellement une réduction de la matrice $X$ dans un cas général, ou remarquez que $X^2 - X = 0$.
* **Pour la question 5** : Procédez de même par un développement à l'ordre 2, ou calculez la différentielle de l'application gradient $X \mapsto \nabla f(X)$.

---

### 📋 Corrigé détaillé pas à pas

#### Question 1 : Différentiabilité
L'application $X \mapsto X^3$ est obtenue par composition de produits matriciels. Le produit matriciel dans $\mathcal{M}_n(\mathbb{R})$ est une application bilinéaire, donc de classe $\mathcal{C}^\infty$. 
La fonction trace $\text{Tr} : \mathcal{M}_n(\mathbb{R}) \to \mathbb{R}$ est linéaire, donc de classe $\mathcal{C}^\infty$.
Par conséquent, $f$ est une combinaison linéaire de compositions d'applications $\mathcal{C}^\infty$, ce qui en fait une fonction de classe $\mathcal{C}^\infty$ (et même polynomiale en les coefficients de la matrice) sur $\mathcal{M}_n(\mathbb{R})$.

#### Question 2 : Calcul de la différentielle première
Soit $X \in \mathcal{M}_n(\mathbb{R})$ et $H \in \mathcal{M}_n(\mathbb{R})$. Calculons $f(X+H)$ :
$$f(X+H) = \text{Tr}((X+H)^3) - 3\text{Tr}((X+H)^2)$$
Développons $(X+H)^3$ :
$$(X+H)^3 = (X^2 + XH + HX + H^2)(X+H) = X^3 + X^2H + XHX + HX^2 + o(\|H\|)$$
Par cyclicité de la trace ($\text{Tr}(ABC) = \text{Tr}(CAB) = \text{Tr}(BCA)$), on a :
$$\text{Tr}(XHX) = \text{Tr}(XXH) = \text{Tr}(X^2H)$$
$$\text{Tr}(HX^2) = \text{Tr}(X^2H)$$
Ainsi, $\text{Tr}((X+H)^3) = \text{Tr}(X^3) + 3\text{Tr}(X^2H) + o(\|H\|)$.

De même, pour le terme quadratique :
$$(X+H)^2 = X^2 + XH + HX + H^2$$
$$\text{Tr}((X+H)^2) = \text{Tr}(X^2) + 2\text{Tr}(XH) + o(\|H\|)$$
En regroupant le tout :
$$f(X+H) = f(X) + 3\text{Tr}(X^2H) - 6\text{Tr}(XH) + o(\|H\|)$$
L'application $H \mapsto 3\text{Tr}(X^2H) - 6\text{Tr}(XH)$ est linéaire et continue (car l'espace est de dimension finie). Par unicité de la différentielle :
$$df(X)(H) = 3\text{Tr}((X^2 - 2X)H)$$

#### Question 3 : Expression du gradient
Par définition du gradient associé au produit scalaire de Frobenius $\langle A, B \rangle = \text{Tr}(A^T B)$, on cherche $\nabla f(X) \in \mathcal{M}_n(\mathbb{R})$ tel que :
$$\forall H \in \mathcal{M}_n(\mathbb{R}), \quad df(X)(H) = \langle \nabla f(X), H \rangle = \text{Tr}\left( (\nabla f(X))^T H \right)$$
En identifiant avec l'expression de $df(X)(H) = \text{Tr}\left( 3(X^2 - 2X)^T H \right)$ (la trace étant invariante par transposition, $\text{Tr}(A^T H) = \text{Tr}(AH)$), on obtient :
$$\nabla f(X) = 3(X^2 - 2X)$$

#### Question 4 : Recherche des points critiques
Un point $X$ est critique si et seulement si son gradient est nul :
$$\nabla f(X) = 0 \iff 3(X^2 - 2X) = 0 \iff X(X - 2I_n) = 0$$
L'ensemble des points critiques est donc constitué des matrices $X$ annulant le polynôme annulateur $P(x) = x(x-2)$. 
D'après le lemme des noyaux (ou par diagonalisation si $X$ est diagonalisable), les points critiques sont les matrices $X$ telles que l'espace total se décompose en somme directe des sous-espaces propres associés à $0$ et $2$. 
Autrement dit, **les points critiques de $f$ sont exactement les matrices projecteurs obliques (ou de projection) à homothétie près**, c'est-à-dire les matrices $X$ semblables à une matrice diagonale dont les coefficients diagonaux sont tous $0$ ou $2$. En particulier, la matrice nulle $0_n$ et la matrice $2I_n$ sont des points critiques.

#### Question 5 : Calcul de la différentielle seconde (Hessienne)
La différentielle seconde $d^2f(X)$ s'obtient en différentiant l'application $X \mapsto df(X)$. 
Puisque $df(X)(H) = 3\text{Tr}((X^2 - 2X)H)$, faisons varier $X$ en $X+K$ :
$$df(X+K)(H) = 3\text{Tr}\left( ((X+K)^2 - 2(X+K))H \right)$$
Développons $(X+K)^2 = X^2 + XK + KX + K^2$ :
$$df(X+K)(H) = 3\text{Tr}\left( (X^2 - 2X)H + (XK + KX - 2K)H \right) + o(\|K\|)$$
$$df(X+K)(H) = df(X)(H) + 3\text{Tr}\left( (XK + KX - 2K)H \right) + o(\|K\|)$$
Par identification, la différentielle seconde est la forme bilinéaire symétrique :
$$d^2f(X)(H, K) = 3\text{Tr}\left( (XK + KX - 2K)H \right)$$

#### Question 6 : Nature des extrema
Regardons la forme quadratique associée $d^2f(X)(H, H) = 6\text{Tr}\left( (XH + HX - 2H)H \right)$.
* **Cas où $X = 0_n$** :
  $d^2f(0_n)(H, H) = 6\text{Tr}(-2H^2) = -12\text{Tr}(H^2) = -12\|H\|^2$.
  Pour $H \neq 0$, $d^2f(0_n)(H,H) < 0$. La hessienne est strictement négative-définie. 
Conclusion: $0_n$ est un **maximum local** strict.

* **Cas où $X = 2I_n$** :
  $d^2f(2I_n)(H, H) = 6\text{Tr}\left( (2IH + H2 - 2H)H \right) = 6\text{Tr}\left( (2H + 2H - 2H)H \right) = 12\text{Tr}(H^2) = 12\|H\|^2$.
  Pour $H \neq 0$, $d^2f(2I_n)(H,H) > 0$. La hessienne est strictement positive-définie.
Conclusion: $2I_n$ est un **minimum local** strict.

* **Cas d'un point critique intermédiaire** (où $X$ a des valeurs propres valant 0 et 2, avec $0 < \text{rank}(X) < n$) :
  La hessienne change de signe selon les directions de perturbation $H$ (certaines directions agissent comme dans le cas $0$, d'autres comme dans le cas $2$). 
Conclusion: Ces autres points critiques sont des **points de selle**.