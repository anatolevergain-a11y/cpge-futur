---
title: 'Cours : Espaces euclidiens et formes bilinéaires'
description: 'Synthese officielle du cours et demonstrations pour CPGE PSI.'
---

## 📌 1. Definitions & Cadre d'etude

Soit $E$ un $\mathbb{R}$-espace vectoriel. 

- **Forme bilineaire :** Une application $\varphi : E \times E \to \mathbb{R}$ est dite bilineaire si elle est lineaire par rapport a chaque variable. Si de plus $\forall (x,y) \in E^2, \varphi(x,y) = \varphi(y,x)$, elle est dite **symetrique**.
- **Forme quadratique :** Application $q : E \to \mathbb{R}$ associee a une forme bilineaire symetrique $\varphi$ telle que $\forall x \in E, q(x) = \varphi(x,x)$. La polarite permet de retrouver $\varphi$ via $q$ :
$$\varphi(x,y) = \frac{1}{2} \left( q(x+y) - q(x) - q(y) \right)$$
- **Produit scalaire :** C'est une forme bilineaire symetrique $\varphi$ (notee $(x \mid y)$ ou $\langle x, y \rangle$) qui est de plus **definie positive** : 
$$\forall x \in E, \, (x \mid x) \ge 0 \quad \text{et} \quad ((x \mid x) = 0 \iff x = 0_E)$$
- **Espace euclidien :** Un $\mathbb{R}$-espace vectoriel de **dimension finie** muni d'un produit scalaire.
- **Norme euclidienne :** Associee au produit scalaire par $\|x\| = \sqrt{(x \mid x)}$.

---

## 📐 2. Theoremes fondamentaux & Demonstrations clés

### Theorem 1 : Inegalite de Cauchy-Schwarz
Soit $E$ un espace prehilbertien reel. Pour tout $(x,y) \in E^2$ :
$$|(x \mid y)| \le \|x\| \|y\|$$
*Cas d'egalite :* Il y a egalite si et seulement si $x$ et $y$ sont colineaires.
Demonstration: **
Si $y = 0_E$, l'inegalite est triviale ($0 = 0$). Supposons $y \neq 0_E$. 
Pour tout reel $\lambda \in \mathbb{R}$, considerons la fonction du second degre en $\lambda$ :
$$f(\lambda) = \|x + \lambda y\|^2 = (x + \lambda y \mid x + \lambda y) = \|x\|^2 + 2\lambda(x \mid y) + \lambda^2 \|y\|^2$$
Comme $f(\lambda) \ge 0$ pour tout $\lambda \in \mathbb{R}$, le discriminant $\Delta$ de ce trinome en $\lambda$ doit etre negatif ou nul :
$$\Delta = 4(x \mid y)^2 - 4\|x\|^2 \|y\|^2 \le 0$$
Ce qui donne immediatement $(x \mid y)^2 \le \|x\|^2 \|y\|^2$, d'ou le resultat en prenant la racine carree. 
Si $\Delta = 0$, il existe une racine double $\lambda_0$ telle que $f(\lambda_0) = 0$, soit $\|x + \lambda_0 y\|^2 = 0$, ce qui implique $x + \lambda_0 y = 0_E$ (par definitude), donc $x$ et $y$ sont colineaires. $\blacksquare$

### Theorem 2 : Theoreme de representation de Riesz
Soit $E$ un espace euclidien. Pour toute forme lineaire $f \in E^*$, il existe un **unique** vecteur $a \in E$ tel que :
$$\forall x \in E, \quad f(x) = (a \mid x)$$

### Theorem 3 : Theoreme de Gram-Schmidt (Orthogonalisation)
Toute famille libre $(e_1, \dots, e_n)$ d'un espace euclidien $E$ peut etre transformee en une famille **orthonormee** $(u_1, \dots, u_n)$ telle que pour tout $k \in \llbracket 1, n \rrbracket$, $\operatorname{Vect}(e_1, \dots, e_k) = \operatorname{Vect}(u_1, \dots, u_k)$.

---

## 💡 3. Methodes de calcul & Algorithmes

### Algorithme de Gauss (Reduction des formes quadratiques)
Pour toute forme quadratique $q$ sur $E$, on procede par **groupement de termes carrés**.
*   **Cas general :** Si $q(x) = \sum a_{ii}x_i^2 + \sum_{i<j} a_{ij}x_i x_j$.
*   On isole les termes contenant $x_1$ si $a_{11} \neq 0$ :
$$q(x) = a_{11} \left( x_1 + \sum_{j \ge 2} \frac{a_{1j}}{a_{11}} x_j \right)^2 + q_1(x_2, \dots, x_n)$$
*   On incremente sur les variables restantes. Le nombre de termes carres non nuls est le **rang** de la forme quadratique, et la signature $(p, n-p)$ donne le nombre de coefficients strictement positifs et strictement negatifs (Inertie de Sylvester).

### Matrice d'une forme bilineaire et changement de base
Soit $\mathcal{B} = (e_1, \dots, e_n)$ une base de $E$. La matrice $M \in \mathcal{M}_n(\mathbb{R})$ d'une forme bilineaire $\varphi$ dans $\mathcal{B}$ est donnee par :
$$M = (m_{ij}) \quad \text{avec} \quad m_{ij} = \varphi(e_i, e_j)$$
Si $X$ et $Y$ sont les vecteurs colonnes des coordonnees de $x$ et $y$ dans $\mathcal{B}$, alors :
$$\varphi(x,y) = X^T M Y$$
Si on change de base de $\mathcal{B}$ a $\mathcal{B}'$ de matrice de passage $P \in \mathcal{M}_n(\mathbb{R})$, la nouvelle matrice $M'$ verifie :
$$M' = P^T M P$$

---

## ⚠️ 4. Pieges classiques aux Concours

1. **Confusion prehilbertien / euclidien :** Ne jamais oublier que l'existence d'une base orthonormee et le procede de Gram-Schmidt necessitent explicitement la **dimension finie**.
2. **Adjonction :** Soit $u \in \mathcal{L}(E)$. L'endomorphisme adjoint $u^*$ est defini par $\forall (x,y) \in E^2, (u(x) \mid y) = (x \mid u^*(y))$. Attention, l'application $u \mapsto u^*$ est antilineaire dans certains contextes complexes, mais lineaire sur $\mathbb{R}$. Sa matrice dans une base orthonormée est la **transposee** de la matrice de $u$ : $M(u^*) = M(u)^T$.
3. **Orthogonal d'un sous-espace :** Si $F$ est un sous-espace d'un espace euclidien $E$, on a $E = F \oplus F^\perp$, mais ceci est **faussement generalisable** aux espaces vectoriels normos non euclidiens ou aux espaces de dimension infinie (ou $F \oplus F^\perp = E$ n'est plus garanti sans completude/fermeture).
4. **Matrice symetrique definie positive (SDP) :** Une matrice $S \in \mathcal{M}_n(\mathbb{R})$ est SDP si et seulement si ses valeurs propres sont strictement positives **OU** si ses sous-matrice principales ont des determinants strictement positifs (Criteres de Sylvester). Ne pas confondre positivite des coefficients diagonaux (condition necessaire mais non suffisante) et positivite des valeurs propres.