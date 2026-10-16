---
title: 'Exercice 2 : Étude de fonctions de deux variables'
description: 'Problème d entraînement type concours.'
---

## Énoncé

Dans le cadre de l'optimisation de la production de biocarburants de troisième génération, on étudie la culture d'une micro-algue oléagineuse (*Chlorella vulgaris*) en photobioréacteur continu. Le taux volumique d'accumulation d'acides gras d'intérêt industriel dépend principalement de deux paramètres opératoires :
1. La concentration adimensionnée en azote résiduel dans le milieu, notée $x \in ]0, +\infty[$.
2. Le flux photonique adimensionné reçu par la culture, noté $y \in ]0, +\infty[$.

Un apport minimal d'azote et de lumière est indispensable à la survie cellulaire, mais des teneurs excessives entraînent une inhibition par photo-oxydation (pour la lumière) et un détournement des voies métaboliques vers la synthèse protéique au détriment des lipides (pour l'azote). 

On modélise le taux volumique de synthèse lipidique, noté $P(x, y)$ (exprimé en $\text{g}\cdot\text{L}^{-1}\cdot\text{j}^{-1}$), par la fonction définie sur l'ouvert $\mathcal{U} = ]0, +\infty[^2$ par :
$$f(x, y) = x^2 y \, \mathrm{e}^{-(x + y)}$$
où $P(x,y) = P_0 \, f(x,y)$, avec $P_0 = 10 \text{ g}\cdot\text{L}^{-1}\cdot\text{j}^{-1}$ une constante d'échelle biologique.

L'objectif de ce problème est d'analyser le comportement mathématique de cette fonction de deux variables, de déterminer les conditions optimales de fonctionnement du photobioréacteur, et de porter un regard critique sur la pertinence du modèle phénoménologique proposé.

---

### Questions

#### Partie I — Régularité et topologie
1. Justifier que l'ensemble $\mathcal{U} = ]0, +\infty[^2$ est un ouvert de $\mathbb{R}^2$.
2. Montrer que la fonction $f$ est de classe $\mathcal{C}^2$ sur $\mathcal{U}$.
3. Calculer les dérivées partielles d'ordre $1$ de $f$ en tout point $(x, y) \in \mathcal{U}$.

#### Partie II — Recherche et nature des points critiques
4. Déterminer l'ensemble des points critiques de $f$ sur $\mathcal{U}$. On notera $A$ l'unique point critique obtenu.
5. Calculer les dérivées partielles d'ordre $2$ de $f$ sur $\mathcal{U}$. Énoncer le théorème de Schwarz et vérifier qu'il s'applique ici.
6. Écrire la matrice hessienne de $f$ au point critique $A$.
7. En déduire la nature locale du point critique $A$. Calculer la valeur de $P(A)$ avec son unité.

#### Partie III — Extrema globaux et optimisation sous contrainte
8. 
   a. Montrer que pour tout $(x, y) \in \mathcal{U}$, on a :
   $$f(x, y) \leqslant 4\,\mathrm{e}^{-2} \cdot y\,\mathrm{e}^{-y}$$
   b. En étudiant la fonction d'une variable $g : t \mapsto t \mathrm{e}^{-t}$ sur $]0, +\infty[$, démontrer que $f$ admet un maximum global sur $\mathcal{U}$ atteint uniquement en $A$.
9. **Optimisation sous contrainte économique :**
   Le coût d'apport en intrants (éclairage et fertilisation azotée) impose une contrainte budgétaire modélisée par la relation linéaire :
   $$x + y = 2$$
   On pose, pour $x \in ]0, 2[$, $\varphi(x) = f(x, 2 - x)$.
   a. Déterminer la valeur de $x$ maximisant la production sous cette contrainte.
   b. Comparer le rendement obtenu avec le maximum absolu trouvé à la question 8.

#### Partie IV — Analyse critique et interprétation biologique
10. Examiner le comportement de $f(x, y)$ lorsque $x \to 0^+$ (à $y$ fixé) et lorsque $x \to +\infty$ (à $y$ fixé). Ce comportement est-il cohérent avec la physiologie de *Chlorella vulgaris* ?
11. Discuter brièvement deux limites majeures de cette modélisation mathématique du point de vue biologique.

---

## Pistes de résolution

* **Question 1 :** Penser au produit cartésien d'intervalles ouverts de $\mathbb{R}$, ou à l'image réciproque d'ouverts par des projections coordonnées continues.
* **Question 3 & 4 :** Factoriser systématiquement par l'exponentielle $\mathrm{e}^{-(x+y)}$ qui ne s'annule jamais sur $\mathbb{R}^2$.
* **Question 6 & 7 :** Calculer le déterminant (ou les valeurs propres) de la matrice hessienne $H_f(A)$ : pour une matrice $2 \times 2$, $\det(H) = r t - s^2$. Si $\det(H) > 0$ et $r < 0$, il s'agit d'un maximum local strict.
* **Question 8 :** La fonction $f(x, y)$ se factorise sous la forme $u(x) v(y)$. La recherche d'un majorant global est grandement facilitée par l'étude indépendante de fonctions d'une seule variable.
* **Question 9 :** Réduire le problème bidimensionnel contraint à un problème univarié en étudiant les variations de la fonction d'une seule variable $\varphi$ sur l'intervalle $]0, 2[$.
* **Question 11 :** Réfléchir aux phénomènes d'ombrage mutuel (effet de densité optique), à l'inhibition enzymatique irréversible et à la dynamique temporelle (régime transitoire vs permanent).

---

## Corrigé détaillé

### Partie I — Régularité et topologie

#### 1. Nature topologique de $\mathcal{U}$
L'ensemble $I = ]0, +\infty[$ est un intervalle ouvert de $\mathbb{R}$ muni de sa topologie usuelle.
L'ensemble $\mathcal{U} = ]0, +\infty[ \times ]0, +\infty[$ est le produit cartésien de deux ouverts de $\mathbb{R}$, c'est donc un **ouvert de $\mathbb{R}^2$**.

*Autre justification valide :* Les applications de projection $p_1 : (x, y) \mapsto x$ et $p_2 : (x, y) \mapsto y$ sont continues sur $\mathbb{R}^2$. Comme $\mathcal{U} = p_1^{-1}(]0, +\infty[) \cap p_2^{-1}(]0, +\infty[)$, $\mathcal{U}$ est l'intersection finie de deux ouverts de $\mathbb{R}^2$, donc $\mathcal{U}$ est un ouvert de $\mathbb{R}^2$.

#### 2. Régularité de $f$
Les fonctions polynômes $(x, y) \mapsto x^2 y$ et $(x, y) \mapsto -(x + y)$ sont de classe $\mathcal{C}^\infty$ sur $\mathbb{R}^2$.
La fonction exponentielle $t \mapsto \mathrm{e}^t$ est de classe $\mathcal{C}^\infty$ sur $\mathbb{R}$.
Par composition et produit de fonctions de classe $\mathcal{C}^\infty$, $f$ est de classe $\mathcal{C}^\infty$ sur $\mathbb{R}^2$.
En particulier, **$f$ est de classe $\mathcal{C}^2$ sur l'ouvert $\mathcal{U}$**.

#### 3. Dérivées partielles d'ordre $1$
Pour tout $(x, y) \in \mathcal{U}$, en dérivant par rapport à chaque coordonnée :
$$\frac{\partial f}{\partial x}(x, y) = \frac{\partial}{\partial x}\left(x^2 y \, \mathrm{e}^{-(x+y)}\right) = \left(2x y - x^2 y\right) \mathrm{e}^{-(x+y)} = x y (2 - x) \mathrm{e}^{-(x+y)}$$

$$\frac{\partial f}{\partial y}(x, y) = \frac{\partial}{\partial y}\left(x^2 y \, \mathrm{e}^{-(x+y)}\right) = \left(x^2 - x^2 y\right) \mathrm{e}^{-(x+y)} = x^2 (1 - y) \mathrm{e}^{-(x+y)}$$

---

### Partie II — Recherche et nature des points critiques

#### 4. Points critiques sur $\mathcal{U}$
Un point $(x, y) \in \mathcal{U}$ est un point critique de $f$ si et seulement si son gradient s'annule :
$$\vec{\nabla} f(x, y) = \vec{0} \iff \begin{cases} \dfrac{\partial f}{\partial x}(x, y) = 0 \\ \dfrac{\partial f}{\partial y}(x, y) = 0 \end{cases}$$

Puisque $(x, y) \in \mathcal{U}$, on a $x > 0$, $y > 0$ et $\mathrm{e}^{-(x+y)} > 0$. Par conséquent :
$$\begin{cases} x y (2 - x) \mathrm{e}^{-(x+y)} = 0 \\ x^2 (1 - y) \mathrm{e}^{-(x+y)} = 0 \end{cases} \iff \begin{cases} 2 - x = 0 \\ 1 - y = 0 \end{cases} \iff \begin{cases} x = 2 \\ y = 1 \end{cases}$$

Le couple $(2, 1)$ appartient bien à $\mathcal{U}$.
Ainsi, $f$ admet un **unique point critique** sur $\mathcal{U}$, le point **$A(2, 1)$**.

#### 5. Dérivées partielles d'ordre $2$ et théorème de Schwarz
Comme $f$ est de classe $\mathcal{C}^2$ sur $\mathcal{U}$, le **théorème de Schwarz** assure l'égalité des dérivées croisées :
$$\frac{\partial^2 f}{\partial x \partial y}(x, y) = \frac{\partial^2 f}{\partial y \partial x}(x, y)$$

Calculons les différentes dérivées secondes pour tout $(x, y) \in \mathcal{U}$ :
* **Dérivée en $x^2$ :**
  $$\begin{aligned}
  \frac{\partial^2 f}{\partial x^2}(x, y) &= \frac{\partial}{\partial x}\left((2x - x^2) y \mathrm{e}^{-(x+y)}\right) \\
  &= \left[(2 - 2x) y - (2x - x^2) y\right] \mathrm{e}^{-(x+y)} \\
  &= y(x^2 - 4x + 2)\mathrm{e}^{-(x+y)}
  \end{aligned}$$

* **Dérivée en $y^2$ :**
  $$\begin{aligned}
  \frac{\partial^2 f}{\partial y^2}(x, y) &= \frac{\partial}{\partial y}\left(x^2 (1 - y) \mathrm{e}^{-(x+y)}\right) \\
  &= \left[-x^2 - x^2(1 - y)\right] \mathrm{e}^{-(x+y)} \\
  &= x^2(y - 2)\mathrm{e}^{-(x+y)}
  \end{aligned}$$

* **Dérivée croisée :**
  $$\begin{aligned}
  \frac{\partial^2 f}{\partial x \partial y}(x, y) &= \frac{\partial}{\partial y}\left(x(2 - x) y \mathrm{e}^{-(x+y)}\right) \\
  &= x(2 - x) \frac{\partial}{\partial y}\left(y \mathrm{e}^{-(x+y)}\right) \\
  &= x(2 - x)(1 - y)\mathrm{e}^{-(x+y)}
  \end{aligned}$$

On vérifie immédiatement que dériver $\frac{\partial f}{\partial y}$ par rapport à $x$ donne la même expression.

#### 6. Matrice hessienne au point critique $A(2, 1)$
Évaluons les dérivées partielles secondes en $A(2, 1)$ :
* $r = \frac{\partial^2 f}{\partial x^2}(2, 1) = 1 \cdot (4 - 8 + 2)\mathrm{e}^{-(2+1)} = -2\mathrm{e}^{-3}$
* $t = \frac{\partial^2 f}{\partial y^2}(2, 1) = 4 \cdot (1 - 2)\mathrm{e}^{-(2+1)} = -4\mathrm{e}^{-3}$
* $s = \frac{\partial^2 f}{\partial x \partial y}(2, 1) = 2(2 - 2)(1 - 1)\mathrm{e}^{-3} = 0$

La matrice hessienne en $A$ est donc :
$$H_f(A) = \begin{pmatrix} r & s \\ s & t \end{pmatrix} = \mathrm{e}^{-3} \begin{pmatrix} -2 & 0 \\ 0 & -4 \end{pmatrix}$$

#### 7. Nature locale de $A$ et calcul de production
La matrice $H_f(A)$ est diagonale : ses valeurs propres sont $\lambda_1 = -2\mathrm{e}^{-3}$ et $\lambda_2 = -4\mathrm{e}^{-3}$.
Puisque les deux valeurs propres sont **strictement négatives**, la matrice hessienne $H_f(A)$ est définie négative (on retrouve $\det(H_f(A)) = rt - s^2 = 8\mathrm{e}^{-6} > 0$ et $r < 0$).

Par conséquent, $f$ admet un **maximum local strict** au point $A(2, 1)$.

La production maximale locale est donnée par :
$$P(A) = P_0 \, f(2, 1) = 10 \times \left(2^2 \times 1 \times \mathrm{e}^{-(2+1)}\right) = 40\,\mathrm{e}^{-3} \text{ g}\cdot\text{L}^{-1}\cdot\text{j}^{-1} \approx 1{,}99 \text{ g}\cdot\text{L}^{-1}\cdot\text{j}^{-1}$$

---

### Partie III — Extrema globaux et optimisation sous contrainte

#### 8. Caractère global du maximum
a. Pour $(x, y) \in \mathcal{U}$, la fonction se factorise en :
$$f(x, y) = \left(x^2 \mathrm{e}^{-x}\right) \left(y \mathrm{e}^{-y}\right)$$
Étudions la fonction $h : x \mapsto x^2 \mathrm{e}^{-x}$ sur $]0, +\infty[$. $h$ est dérivable et :
$$h'(x) = (2x - x^2)\mathrm{e}^{-x} = x(2 - x)\mathrm{e}^{-x}$$
$h'(x) > 0$ sur $]0, 2[$, $h'(2) = 0$, et $h'(x) < 0$ sur $]2, +\infty[$.
$h$ admet donc un maximum global absolu strict en $x = 2$, valant $h(2) = 4\mathrm{e}^{-2}$.
Ainsi, pour tout $x > 0$, $x^2 \mathrm{e}^{-x} \leqslant 4\mathrm{e}^{-2}$.
Comme $y > 0 \implies y\mathrm{e}^{-y} > 0$, on obtient par produit :
$$\forall (x, y) \in \mathcal{U}, \quad f(x, y) \leqslant 4\,\mathrm{e}^{-2} \cdot y\,\mathrm{e}^{-y}$$

b. De même, considérons $g : t \mapsto t \mathrm{e}^{-t}$ sur $]0, +\infty[$.
$g'(t) = (1 - t)\mathrm{e}^{-t}$. La fonction $g$ croît strictement sur $]0, 1[$ et décroît strictement sur $]1, +\infty[$.
$g$ admet un maximum global strict en $t = 1$, valant $g(1) = \mathrm{e}^{-1}$.
Donc pour tout $y > 0$, $y\mathrm{e}^{-y} \leqslant \mathrm{e}^{-1}$, avec égalité si et seulement si $y = 1$.

En combinant ces résultats :
$$\forall (x, y) \in \mathcal{U}, \quad f(x, y) \leqslant 4\,\mathrm{e}^{-2} \cdot \mathrm{e}^{-1} = 4\,\mathrm{e}^{-3} = f(2, 1)$$
L'inégalité est stricte dès que $x \neq 2$ ou $y \neq 1$.
Le point $A(2, 1)$ est donc l'**unique maximum global absolu** de $f$ sur $\mathcal{U}$.

#### 9. Optimisation sous contrainte $x + y = 2$
a. Sous la contrainte $y = 2 - x$ avec $x \in ]0, 2[$, la fonction devient :
$$\varphi(x) = f(x, 2 - x) = x^2 (2 - x) \mathrm{e}^{-(x + 2 - x)} = (2x^2 - x^3) \mathrm{e}^{-2}$$
La fonction $\varphi$ est dérivable sur $]0, 2[$ :
$$\varphi'(x) = (4x - 3x^2) \mathrm{e}^{-2} = x(4 - 3x) \mathrm{e}^{-2}$$
Pour $x \in ]0, 2[$ :
* $\varphi'(x) > 0$ sur $\left]0, \frac{4}{3}\right[$
* $\varphi'\left(\frac{4}{3}\right) = 0$
* $\varphi'(x) < 0$ sur $\left]\frac{4}{3}, 2\right[$

$\varphi$ admet son maximum absolu en $x^* = \frac{4}{3}$.
Le couple optimal sous contrainte est donc :
$$(x^*, y^*) = \left(\frac{4}{3}, \frac{2}{3}\right)$$

b. Calculons la valeur de $f$ en ce point :
$$f\left(\frac{4}{3}, \frac{2}{3}\right) = \left(\frac{4}{3}\right)^2 \left(\frac{2}{3}\right) \mathrm{e}^{-2} = \frac{32}{27}\mathrm{e}^{-2} \approx 1{,}185 \, \mathrm{e}^{-2}$$
Or le maximum absolu non contraint vaut :
$$f(2, 1) = 4\mathrm{e}^{-3} = \frac{4}{\mathrm{e}}\mathrm{e}^{-2} \approx 1{,}472 \, \mathrm{e}^{-2}$$
Le rendement maximal sous contrainte ne représente que :
$$\frac{f(4/3, 2/3)}{f(2, 1)} = \frac{\frac{32}{27}\mathrm{e}^{-2}}{4\mathrm{e}^{-3}} = \frac{8}{27}\mathrm{e} \approx \frac{8 \times 2{,}718}{27} \approx 0{,}805 \quad (80{,}5\,\% \text{ du potentiel maximal})$$
Cette contrainte budgétaire induit une perte de productivité d'environ $19{,}5\,\%$.

---

### Partie IV — Analyse critique et interprétation biologique

#### 10. Limites aux frontières et sens biologique
* **Carence en azote ($x \to 0^+$ à $y$ fixé) :**
  $$\lim_{x \to 0^+} f(x, y) = 0$$
  *Interprétation :* L'azote est un constituant structurel fondamental (protéines, acides nucléiques, enzymes de la lipogenèse). Sans azote, aucune machinerie enzymatique ne peut être synthétisée ou maintenue : l'arrêt de la production de biomasse et de lipides est biologiquement cohérent.
* **Excès d'azote ($x \to +\infty$ à $y$ fixé) :**
  Par croissances comparées, pour tout $y > 0$ :
  $$\lim_{x \to +\infty} x^2 \mathrm{e}^{-x} \cdot y \mathrm{e}^{-y} = 0$$
  *Interprétation :* En abondance d'azote, les algues privilégient la prolifération cellulaire active (synthèse de protéines et division) au détriment de l'accumulation de triacylglycérols (lipides de réserve accumulés préférentiellement en condition de stress). Une diminution de la teneur relative en lipides est réaliste, mais prédire une production volumique strictement nulle à l'infini constitue une exagération mathématique du phénomène de réorientation métabolique.

#### 11. Limites fondamentales du modèle
1. **Facteur d'ombrage mutuel (*self-shading*) et hétérogénéité spatiale :**
   Le paramètre $y$ (flux photonique) est supposé uniforme dans tout le photobioréacteur. En réalité, la lumière est absorbée de manière exponentielle selon la loi de Beer-Lambert le long du chemin optique en fonction de la concentration cellulaire. Un point de fonctionnement $(x, y)$ global ne rend pas compte du fait que les cellules proches de la paroi subissent une photo-inhibition ($y \gg 1$) tandis que celles au centre du réacteur sont en carence lumineuse ($y \to 0$).
2. **Couplage métabolique et découplage temporel :**
   Le modèle propose une interaction purement multiplicative et découplée des facteurs sous la forme $u(x)v(y)$. Or, in vivo, les effets de l'azote et de la lumière sont intimement couplés : la synthèse de pigments photorécepteurs nécessite de l'azote, et la fixation de l'azote dépend du pouvoir réducteur généré par la photosynthèse. De plus, l'accumulation lipidique chez *Chlorella* est un processus biphasique dynamique (phase de croissance végétative suivie d'une phase de privation), mal décrit par une fonction statique de production instantanée.