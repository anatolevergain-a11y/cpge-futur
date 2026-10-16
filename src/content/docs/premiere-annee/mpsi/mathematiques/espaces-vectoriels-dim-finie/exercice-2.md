---
title: 'Exercice 2 : Théorème de la base incomplète et théorème du rang'
description: 'Problème corrigé type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $E$ un $\mathbb{R}$-espace vectoriel de dimension finie $n \ge 1$. On s'intéresse dans ce problème aux liens fondamentaux unissant les notions de familles libres, de familles génératrices (via le théorème de la base incomplète) et les propriétés des applications linéaires (via le théorème du rang). 

Dans la première partie, on étudie un procédé d'extension de famille libre dans l'espace vectoriel $\mathbb{R}[X]$ des polynômes à coefficients réels restreint à un sous-espace de degré borné. Dans la seconde partie, on considère un endomorphisme $u$ de $E$ et on analyse l'interaction entre les dimensions des noyaux et des images des puissances successives de $u$, en application directe du théorème du rang.

---

### ❓ Questions progressives

#### Partie I : Base incomplète et polynômes

On note $E_3 = \mathbb{R}_3[X]$ l'espace vectoriel des polynômes à coefficients réels de degré inférieur ou égal à $3$. Sa dimension est donc $4$.
Soit la famille de polynômes $\mathcal{F} = (P_1, P_2)$ où :
$$P_1(X) = 1 + X + X^2 \quad \text{et} \quad P_2(X) = 1 - X + X^3$$

1. Démontrer que la famille $\mathcal{F}$ est libre dans $E_3$.
2. Déterminer la matrice de la famille $\mathcal{F}$ dans la base canonique $\mathcal{B}_0 = (1, X, X^2, X^3)$ de $E_3$. En déduire une méthode pour compléter $\mathcal{F}$ en une base de $E_3$ en extrayant deux vecteurs de $\mathcal{B}_0$.
3. Appliquer cette méthode pour expliciter une base $\mathcal{B}$ de $E_3$ prolongeant $\mathcal{F}$.

#### Partie II : Théorème du rang et endomorphismes

Soit $E$ un $\mathbb{R}$-espace vectoriel de dimension $n$. Soit $u \in \mathcal{L}(E)$ tel que $u^2 = 0$ et $u \neq 0$ (on dit que $u$ est nilpotent d'indice $2$).
4. Énoncer le théorème du rang pour une application linéaire.
5. Démontrer que $\operatorname{Im}(u) \subset \operatorname{Ker}(u)$. En déduire une relation d'ordre entre $\operatorname{rang}(u)$ et $n - \operatorname{rang}(u)$.
6. On suppose désormais que $n = 4$ et que $\operatorname{rang}(u) = 2$. Construire explicitement une base de $E$ dans laquelle la matrice de $u$ s'écrit sous la forme :
$$M = \begin{pmatrix} 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

---

### 💡 Pistes & Indications méthodologiques

- **Pour la question 1 :** Utilisez la définition d'une famille libre en posant une combinaison linéaire nulle, puis identifiez les coefficients des différents monômes pour obtenir un système linéaire.
- **Pour la question 2 & 3 :** Écrivez les coordonnées des vecteurs sous forme de colonnes. Le théorème de la base incomplète garantit qu'on peut ajouter des vecteurs d'une base connue (ici la base canonique) dont le déterminant (ou le rang de la matrice complétée) est non nul.
- **Pour la question 5 :** Pour l'inclusion, partez d'un élément de $\operatorname{Im}(u)$ et appliquez $u$ en sachant que $u^2=0$. Le théorème du rang fournira l'inégalité sur les dimensions.
- **Pour la question 6 :** Choisissez judicieusement une base en construisant d'abord une base de $\operatorname{Im}(u)$, puis en la complétant dans $\operatorname{Ker}(u)$, et enfin dans $E$ tout entier.

---

### 📋 Corrigé détaillé et vérification des résultats

#### Partie I : Base incomplète et polynômes

1. **Liberté de la famille $\mathcal{F}$ :**
   Soit $(a, b) \in \mathbb{R}^2$ tel que :
   $$a P_1(X) + b P_2(X) = 0_{E_3}$$
   En remplaçant $P_1$ et $P_2$ par leurs expressions :
   $$a(1 + X + X^2) + b(1 - X + X^3) = 0$$
   $$\implies (a + b) + (a - b)X + aX^2 + bX^3 = 0$$
   Un polynôme est nul si et seulement si tous ses coefficients sont nuls. On obtient le système :
   $$\begin{cases} a + b = 0 \\ a - b = 0 \\ a = 0 \\ b = 0 \end{cases}$$
   La résolution immédiate donne $a = 0$ et $b = 0$. La famille $\mathcal{F} = (P_1, P_2)$ est donc **libre**.

2. **Matrice de la famille et méthode de complétion :**
   Dans la base canonique $\mathcal{B}_0 = (1, X, X^2, X^3)$, les coordonnées de $P_1$ et $P_2$ forment les colonnes de la matrice $M_{\mathcal{F}}$ :
   $$M_{\mathcal{F}} = \begin{pmatrix} 1 & 1 \\ 1 & -1 \\ 1 & 0 \\ 0 & 1 \end{pmatrix}$$
   Le rang de cette matrice est $2$ (les deux colonnes ne sont pas colinéaires). Pour compléter $\mathcal{F}$ en une base de $\mathbb{R}_3[X]$, le théorème de la base incomplète nous autorise à adjoindre 2 vecteurs de la base canonique $\mathcal{B}_0 = (E_1, E_2, E_3, E_4)$ (notés $1, X, X^2, X^3$) de manière à ce que la matrice complétée $4 \times 4$ soit inversible (de déterminant non nul).
   Testons l'adjonction de $X^2$ (noté $E_3$) et $X^3$ (noté $E_4$) :
   La matrice formée par $P_1, P_2, X^2, X^3$ s'écrit :
   $$M_{\text{test}} = \begin{pmatrix} 1 & 1 & 0 & 0 \\ 1 & -1 & 0 & 0 \\ 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 \end{pmatrix}$$

3. **Calcul du déterminant et conclusion :**
   Calculons le déterminant de $M_{\text{test}}$ en développant par rapport aux deux dernières colonnes ou lignes :
   En développant par rapport à la dernière colonne :
   $$\det(M_{\text{test}}) = 1 \times \det \begin{pmatrix} 1 & 1 & 0 \\ 1 & -1 & 0 \\ 1 & 0 & 1 \end{pmatrix} - 0 + \dots$$
   Puis en développant ce sous-déterminant par rapport à sa dernière colonne :
   $$= 1 \times 1 \times \det \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = 1 \times (1 \times (-1) - 1 \times 1) = -2 \neq 0$$
   Le déterminant étant non nul, la famille $\mathcal{B} = (P_1, P_2, X^2, X^3)$ est une **base de $E_3$** qui prolonge $\mathcal{F}$.

---

#### Partie II : Théorème du rang et endomorphismes

4. **Rappel du théorème du rang :**
   Soit $E, F$ deux $\mathbb{R}$-espaces vectoriels de dimension finie et $f \in \mathcal{L}(E, F)$. Alors :
   $$\operatorname{dim}(\operatorname{Ker}(f)) + \operatorname{dim}(\operatorname{Im}(f)) = \operatorname{dim}(E)$$

5. **Inclusion et relation sur le rang :**
   Soit $y \id \operatorname{Im}(u)$. Par définition, il existe $x \in E$ tel que $y = u(x)$.
   Appliquons $u$ à $y$ :
   $$u(y) = u(u(x)) = u^2(x)$$
   Or, l'énoncé indique que $u^2 = 0$. Donc $u(y) = 0$, ce qui signifie que $y \in \operatorname{Ker}(u)$.
   On a donc démontré l'inclusion :
   $$\operatorname{Im}(u) \subset \operatorname{Ker}(u)$$
   Par passage à la dimension, on en déduit :
   $$\operatorname{rang}(u) \le \operatorname{dim}(\operatorname{Ker}(u))$$
   D'après le théorème du rang appliqué à $u$ sur $E$ (de dimension $n$) :
   $$\operatorname{dim}(\operatorname{Ker}(u)) + \operatorname{rang}(u) = n \implies \operatorname{dim}(\operatorname{Ker}(u)) = n - \operatorname{rang}(u)$$
   L'inégalité précédente devient alors :
   $$\operatorname{rang}(u) \le n - \operatorname{rang}(u) \implies 2 \operatorname{rang}(u) \le n$$

6. **Construction explicite de la base pour $n=4$ et $\operatorname{rang}(u) = 2$ :**
   - On a $\operatorname{dim}(\operatorname{Im}(u)) = 2$ et $\operatorname{dim}(\operatorname{Ker}(u)) = 4 - 2 = 2$.
   - L'inclusion $\operatorname{Im}(u) \subset \operatorname{Ker}(u)$ couplée à l'égalité de leurs dimensions (toutes deux égales à $2$) implique que :
     $$\operatorname{Im}(u) = \operatorname{Ker}(u)$$
   - Soit $(e_1, e_2)$ une base de $\operatorname{Im}(u)$ (qui est donc aussi un sous-espace de $\operatorname{Ker}(u)$).
   - Par le théorème de la base incomplète, complétons cette famille libre $(e_1, e_2)$ en une base de $\operatorname{Ker}(u)$ (ce qui n'est pas nécessaire ici puisque $\operatorname{Im}(u) = \operatorname{Ker}(u)$).
   - Ensuite, complétons $(e_1, e_2)$ en une base de $E$ tout entier en choisissant des vecteurs $e_3, e_4 \in E$ tels que $u(e_3) = e_1$ et $u(e_4) = e_2$ (ce qui est possible puisque $e_1, e_2 \in \operatorname{Im}(u)$).
   - Dans cette base $\mathcal{B} = (e_1, e_2, e_3, e_4)$ :
     - $u(e_1) = 0$ (car $e_1 \in \operatorname{Ker}(u)$)
     - $u(e_2) = 0$ (car $e_2 \in \operatorname{Ker}(u)$)
     - $u(e_3) = e_1 = 1 \cdot e_1 + 0 \cdot e_2 + 0 \cdot e_3 + 0 \cdot e_4$
     - $u(e_4) = e_2 = 0 \cdot e_1 + 1 \cdot e_2 + 0 \cdot e_3 + 0 \cdot e_4$
   
   La matrice de $u$ dans la base $\mathcal{B}$ s'écrit par conséquent par blocs colonnes :
   $$M = \begin{pmatrix} 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$
   Ce qui démontre et vérifie l'exactitude du résultat demandé.