---
title: "🌐 Énoncé du problème / Cadre d'étude"
description: "Fiche de cours et d'exercice CPGE."
---

### 🌐 Énoncé du problème / Cadre d'étude

En biologie et en agronomie, il est fréquent de chercher à modéliser la relation entre deux variables mesurées. Dans ce problème, on s'intéresse à la méthode des moindres carrés (ou régression linéaire simple) sous l'angle de l'algèbre linéaire dans l'espace euclidien $\mathbb{R}^n$.

Soit $n \ge 2$ un entier. On munit l'espace vectoriel $\mathbb{R}^n$ de son produit scalaire canonique, noté $\langle \cdot, \cdot \rangle$, et de la norme associée $\|\cdot\|$. 
Soient $x = (x_1, x_2, \dots, x_n)^T$ et $y = (y_1, y_2, \dots, y_n)^T$ deux vecteurs de $\mathbb{R}^n$ représentant $n$ observations de deux caractères (par exemple, la quantité d'engrais et le rendement d'une culture). On suppose que les composantes de $x$ ne sont pas toutes égales.

On cherche à déterminer une relation affine de la forme $y \approx a x + b \mathbf{1}$, où $a, b \in \mathbb{R}$ et $\mathbf{1} = (1, 1, \dots, 1)^T \in \mathbb{R}^n$, de manière à minimiser la somme des carrés des écarts :
$$ S(a, b) = \sum_{i=1}^n (y_i - (a x_i + b))^2 = \|y - (a x + b \mathbf{1})\|^2 $$
---

### ❓ Questions progressives

1. **Cadre géométrique :** Soit $F$ le sous-espace vectoriel de $\mathbb{R}^n$ engendré par les vecteurs $x$ et $\mathbf{1}$. Justifier que $F$ est de dimension $2$ et exprimer le problème de la minimisation de $S(a, b)$ comme un problème de projection orthogonale.
2. **Équations normales :** En écrivant la condition d'orthogonalité du résidu $y - (a x + b \mathbf{1})$ avec les générateurs de $F$, établir un système linéaire de deux équations à deux inconnues $(a, b)$, dit *système des équations normales*.
3. **Résolution explicite :** 
   - Expliciter les coefficients de ce système en introduisant la moyenne empirique $\bar{x} = \frac{1}{n} \sum_{i=1}^n x_i$, la moyenne $\bar{y} = \frac{1}{n} \sum_{i=1}^n y_i$, la variance empirique $V(x) = \frac{1}{n} \sum_{i=1}^n (x_i - \bar{x})^2$ et la covariance empirique $Cov(x, y) = \frac{1}{n} \sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y})$.
   - En déduire l'expression unique des coefficients optimaux $a^*$ et $b^*$.
4. **Interprétation statistique :** Exprimer le coefficient de corrélation linéaire de Bravais-Pearson $r(x, y)$ à l'aide de $Cov(x, y)$, $V(x)$ et $V(y)$, puis relier $a^*$ à $r(x, y)$ et aux écarts-types de $x$ et $y$.

---

### 💡 Pistes & Indications méthodologiques

- **Q1 :** Pensez à vérifier l'indépendance linéaire de la famille $(x, \mathbf{1})$ en utilisant l'hypothèse sur les composantes de $x$. Le problème de minimisation revient à chercher la distance d'un point à un sous-espace fermé.
- **Q2 :** Le théorème de projection orthogonale dans un espace euclidien garantit que le vecteur erreur est orthogonal au sous-espace $F$. Traduisez cela par $\langle y - \hat{y}, x \rangle = 0$ et $\langle y - \hat{y}, \mathbf{1} \rangle = 0$.
- **Q3 :** Développez les produits scalaires sous forme de sommation $\sum$. Ne craignez pas les notations statistiques classiques ($\bar{x}$, $V(x)$), elles simplifient grandement l'écriture.
- **Q4 :** Rappelez-vous que le coefficient de corrélation est compris entre $-1$ et $1$, ce qui donne une indication géométrique sur l'angle entre les vecteurs $x - \bar{x}\mathbf{1}$ et $y - \bar{y}\mathbf{1}$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Cadre géométrique et dimension de $F$
Soit $F = \text{Vect}(x, \mathbf{1})$. 
La famille $(x, \mathbf{1})$ est génératrice de $F$ par définition. Montrons qu'elle est libre.
Soit $(\alpha, \beta) \in \mathbb{R}^2$ tel que $\alpha x + \beta \mathbf{1} = 0_{\mathbb{R}^n}$.
Pour tout indice $i \in \{1, \dots, n\}$, on a $\alpha x_i + \beta = 0$. 
Si $\alpha \neq 0$, alors pour tout $i$, $x_i = -\beta/\alpha$, ce qui implique que toutes les composantes de $x$ sont égales, contredisant l'hypothèse de l'énoncé. Par conséquent, $\alpha = 0$, ce qui implique immédiatement $\beta = 0$.
La famille $(x, \mathbf{1})$ est donc libre et génératrice : **$F$ est un sous-espace vectoriel de $\mathbb{R}^n$ de dimension $2$**.

Minimiser $S(a, b) = \|y - (a x + b \mathbf{1})\|^2$ revient à trouver le vecteur $\hat{y} = a x + b \mathbf{1} \in F$ qui minimise la distance euclidienne $\|y - \hat{y}\|$. Par le théorème de projection orthogonale sur un sous-espace de dimension finie, **$\hat{y}$ est le projeté orthogonal de $y$ sur $F$**.

#### 2. Équations normales
Puisque $\hat{y}$ est le projeté orthogonal de $y$ sur $F$, le vecteur résidu $r = y - \hat{y} = y - (a x + b \mathbf{1})$ est orthogonal à tout l'espace $F$, et en particulier aux deux vecteurs de sa base $(x, \mathbf{1})$.
Cela se traduit par le système d'équations scalaires suivant :
$$
\begin{cases}
\langle y - (a x + b \mathbf{1}), x \rangle = 0 \\
\langle y - (a x + b \mathbf{1}), \mathbf{1} \rangle = 0
\end{cases}
\iff
\begin{cases}
\langle x, y \rangle - a \langle x, x \rangle - b \langle x, \mathbf{1} \rangle = 0 \\
\langle \mathbf{1}, y \rangle - a \langle \mathbf{1}, x \rangle - b \langle \mathbf{1}, \mathbf{1} \rangle = 0
\end{cases}
$$

#### 3. Résolution explicite
Exprimons chaque produit scalaire à l'aide des sommes :
- $\langle \mathbf{1}, \mathbf{1} \rangle = \sum_{i=1}^n 1^2 = n$
- $\langle \mathbf{1}, y \rangle = \sum_{i=1}^n y_i = n \bar{y}$
- $\langle \mathbf{1}, x \rangle = \sum_{i=1}^n x_i = n \bar{x}$
- $\langle x, y \rangle = \sum_{i=1}^n x_i y_i$
- $\langle x, x \rangle = \sum_{i=1}^n x_i^2$

Le système se réécrit :
$$
\begin{cases}
\sum_{i=1}^n x_i y_i - a \sum_{i=1}^n x_i^2 - b n \bar{x} = 0 \quad (1) \\
n \bar{y} - a n \bar{x} - b n = 0 \quad (2)
\end{cases}
$$

D'après l'équation $(2)$, en simplifiant par $n$, on obtient directement :
$$ b^* = \bar{y} - a^* \bar{x} $$

En substituant $b^*$ dans l'équation $(1)$ :
$$ \sum_{i=1}^n x_i y_i - a^* \sum_{i=1}^n x_i^2 - (\bar{y} - a^* \bar{x}) n \bar{x} = 0 $$
$$ \sum_{i=1}^n x_i y_i - n \bar{x}\bar{y} = a^* \left( \sum_{i=1}^n x_i^2 - n (\bar{x})^2 \right) $$

On reconnait au numérateur le produit $n \cdot Cov(x, y)$ et au dénominateur $n \cdot V(x)$ :
$$ n \cdot Cov(x, y) = \sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y}) = \sum_{i=1}^n x_i y_i - n \bar{x}\bar{y} $$
$$ n \cdot V(x) = \sum_{i=1}^n (x_i - \bar{x})^2 = \sum_{i=1}^n x_i^2 - n (\bar{x})^2 $$

Puisque $x$ n'est pas constant, $V(x) > 0$. On obtient l'unique solution :
$$ a^* = \frac{Cov(x, y)}{V(x)} \quad \text{et} \quad b^* = \bar{y} - a^* \bar{x} $$

#### 4. Interprétation statistique
Le coefficient de corrélation linéaire de Bravais-Pearson est défini par :
$$ r(x, y) = \frac{Cov(x, y)}{\sigma(x) \sigma(y)} = \frac{Cov(x, y)}{\sqrt{V(x)}\sqrt{V(y)}} $$
où $\sigma(x) = \sqrt{V(x)}$ et $\sigma(y) = \sqrt{V(y)}$ sont les écarts-types empiriques de $x$ et $y$.

En exprimant $a^*$, on a :
$$ a^* = \frac{Cov(x, y)}{V(x)} = \frac{r(x, y) \sigma(x) \sigma(y)}{(\sigma(x))^2} = r(x, y) \frac{\sigma(y)}{\sigma(x)} $$

*Remarque de fin de correction (Esprit Concours) :* Cette formule montre que la pente de la droite de régression est le produit du coefficient de corrélation et du rapport des écarts-types. C'est un résultat classique attendu en mathématiques appliquées aux concours BCPST.