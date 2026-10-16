---
title: 'Exercice 2 : Trajectoires de phase'
description: 'Problème d entraînement type concours.'
---

# Problème : Étude qualitative et portraits de phase d'un système différentiel non linéaire

## Énoncé

Soit $E = \mathbb{R}^2 muni de sa structure euclidienne canonique. On considère le système différentiel autonome non linéaire défini pour $t \in \mathbb{R}$ par le vecteur d'état $X(t) = \begin{pmatrix} x(t) \\ y(t) \end{pmatrix}$ :

$$
\begin{cases}
\dot{x} &= x - y - x(x^2 + y^2) \\
\dot{y} &= x + y - y(x^2 + y^2)
\end{cases}
$$

Ce type de système intervient en physique pour modéliser des oscillateurs non linéaires couplés, notamment dans l'étude des bifurcations de Hopf. L'objectif de ce problème est de déterminer le comportement global des trajectoires de phase dans le plan $(x,y)$.

---

## Questions

### I. Étude préliminaire et changement de variables
1. Exprimer le système en coordonnées polaires $(r, \theta)$ définies par $x = r \cos(\theta)$ et $y = r \sin(\theta)$ pour $r > 0$.
2. En déduire un système différentiel découplé vérifié par $r(t)$ et $\theta(t)$.

### II. Étude des points d'équilibre et de la stabilité linéaire
3. Déterminer les points d'équilibre du système dans le plan cartésien $(x,y)$.
4. Écrire la matrice jacobienne du système au voisinage de l'origine $(0,0)$. Préciser la nature de ce point d'équilibre par l'étude de ses valeurs propres.
5. Qu'en est-il de la stabilité non linéaire de l'origine ?

### III. Trajectoires et comportement asymptotique
6. Résoudre l'équation différentielle en $r(t)$ obtenue à la question 2 pour une condition initiale $r(0) = r_0 > 0$ quelconque.
7. Déterminer la limite de $r(t)$ lorsque $t \to +\infty$ selon les valeurs de $r_0$.
8. Décrire qualitativement l'allure des trajectoires de phase et identifier l'existence éventuelle d'un cycle limite.

### IV. Analyse critique du modèle
9. Proposer une analyse critique des limites physiques de ce modèle mathématique lorsque $r \to +\infty$ et $\dot{r} \to -\infty$.

---

## Pistes et indications

* **Q1 & Q2 :** Penser à calculer $\frac{d}{dt}(r^2) = 2(x\dot{x} + y\dot{y})$ et $\frac{d}{dt}(\arctan(y/x))$ ou à utiliser les relations trigonométriques usuelles.
* **Q4 :** Linéariser le champ de vecteurs au voisinage de $(0,0)$. Le système s'écrit $\dot{X} = A X + o(\|X\|)$.
* **Q6 :** L'équation en $r$ est une équation de Bernoulli. Poser $u = r^{-2}$ pour la ramener à une équation linéaire du premier ordre.
* **Q9 :** S'interroger sur la conservation de l'énergie et la réaction du système pour des amplitudes $r$ très grandes.

---

## Corrigé pas à pas

### I. Étude préliminaire et changement de variables

**1. Passage en polaires :**
On a $r^2 = x^2 + y^2$. En dérivant par rapport au temps $t$ :
$$
2r \dot{r} = 2x\dot{x} + 2y\dot{y} \implies r\dot{r} = x(x - y - x r^2) + y(x + y - y r^2)
$$
En développant :
$$
r\dot{r} = x^2 - xy - x^2 r^2 + xy + y^2 - y^2 r^2 = (x^2 + y^2) - (x^2 + y^2)r^2 = r^2 - r^4
$$
Puisque $r > 0$, on simplifie par $r$ :
$$
\dot{r} = r(1 - r^2)
$$

Pour l'angle $\theta$, on a $x = r \cos\theta$ et $y = r \sin\theta$, donc $\tan\theta = \frac{y}{x}$.
En dérivant :
$$
(1 + \tan^2\theta)\dot{\theta} = \frac{\dot{y}x - y\dot{x}}{x^2} \implies \frac{\dot{\theta}}{\cos^2\theta} = \frac{(x+y-yr^2)x - (x-y-xr^2)y}{r^2\cos^2\theta}
$$
En développant le numérateur :
$$
\dot{\theta} = \frac{x^2 + xy - xy r^2 - (xy - y^2 - y^2 r^2)}{r^2} = \frac{x^2 + y^2}{r^2} = \frac{r^2}{r^2} = 1
$$

**2. Système découplé :**
Le système en coordonnées polaires est :
$$
\begin{cases}
\dot{r} &= r(1 - r^2) \\
\dot{\theta} &= 1
\end{cases}
$$

---

### II. Étude des points d'équilibre et de la stabilité linéaire

**3. Points d'équilibre :**
Un point d'équilibre $(x_0, y_0)$ annule le champ de vecteurs, soit $\dot{x} = 0$ et $\dot{y} = 0$. En coordonnées polaires, cela équivaut à $\dot{r} = 0$, donc $r(1 - r^2) = 0$.
Puisque $r \ge 0$, on a deux cas :
* $r = 0$, ce qui correspond au point $(0,0)$.
* $r = 1$, ce qui correspond au cercle unité $x^2 + y^2 = 1$. Si $r=1$, les équations donnent $\dot{\theta} = 1 \neq 0$, donc tous les points du cercle $x^2 + y^2 = 1$ sont des points d'équilibre du système dynamique (le système tourne à vitesse angulaire constante le long de ce cercle). *Attention : les points d'équilibre stricts du système autonome (où la vitesse est nulle partout) se réduisent à l'origine $(0,0)$, car $\dot{\theta} = 1$ empêche la nullité du vecteur vitesse sur le cercle $r=1$. Le cercle $r=1$ est en réalité une orbite fermée (cycle limite).*

**4. Matrice jacobienne en $(0,0)$ :**
Le champ de vecteurs $F(x,y) = \begin{pmatrix} x - y - x(x^2+y^2) \\ x + y - y(x^2+y^2) \end{pmatrix}$ est de classe $\mathcal{C}^\1$. Sa matrice jacobienne $J(x,y)$ est :
$$
J(x,y) = \begin{pmatrix}
1 - 3x^2 - y^2 & -1 - 2xy \\
1 - 2xy & 1 - x^2 - 3y^2
\end{pmatrix}
$$
Au point $(0,0)$ :
$$
J(0,0) = \begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}
$$
Les valeurs propres de $J(0,0)$ vérifient $\det(J(0,0) - \lambda I) = (1-\lambda)^2 + 1 = 0$, soit $(\lambda - 1)^2 = -1$, ce qui donne :
$$
\lambda = 1 \pm i
$$
La partie réelle des valeurs propres est strictement positive ($\text{Re}(\lambda) = 1 > 0$). L'origine est donc un **foyer instable**.

**5. Stabilité non linéaire :**
Puisque la partie réelle des valeurs propres de la linéarisée en $(0,0)$ est strictement positive, le théorème de Lyapunov (ou de Grobman-Hartman pour l'instabilité) garantit que l'origine est également **instable** pour le système non linéaire.

---

### III. Trajectoires et comportement asymptotique

**6. Résolution de l'équation en $r(t)$ :**
L'équation $\dot{r}r^{-1}(1-r^2)^{-1} = 1$ est à variables séparables (pour $r \neq 0$ et $r \neq 1$).
En utilisant la décomposition en éléments simples :
$$
\frac{1}{r(1-r^2)} = \frac{1}{r} + \frac{r}{1-r^2}
$$
On intègre entre $0$ et $t$ :
$$
\ln(r) - \frac{1}{2}\ln(|1-r^2|) = t + C
$$
En posant $u(t) = r(t)^{-2}$, l'équation $\dot{r} = r - r^3$ devient (en divisant par $r^3$) :
$$
\frac{\dot{r}}{r^3} = \frac{1}{r^2} - 1 \implies -\frac{1}{2}\dot{u} = u - 1 \implies \dot{u} + 2u = 2
$$
L'équation linéaire homogène a pour solution $u_h(t) = K e^{-2t}$. Une solution particulière est $u_p = 1$. Ainsi :
$$
u(t) = 1 + (u_0 - 1)e^{-2t} \quad \text{avec} \quad u_0 = \frac{1}{r_0^2}
$$
En revenant à $r(t)$ :
$$
r(t) = \frac{1}{\sqrt{1 + \left(\frac{1}{r_0^2} - 1\right)e^{-2t}}}
$$

**7. Comportement asymptotique :**
* Si $r_0 = 1$, alors $u_0 = 1$, donc $r(t) = 1$ pour tout $t$ (le système est sur le cercle).
* Si $r_0 > 0$ et $r_0 \neq 1$, alors $\lim_{t \to +\infty} e^{-2t} = 0$, ce qui implique :
  $$
  \lim_{t \to +\infty} r(t) = 1
  $$
  Le rayon tend vers $1$ quel que soit le rayon initial non nul.

**8. Description qualitative et cycle limite :**
Puisque $\dot{\theta} = 1 >0$, les trajectoires tournent constamment dans le sens trigonométrique autour de l'origine. 
* Si $0 < r_0 < 1$, alors $\dot{r} > 0$ : le rayon augmente au cours du temps et spiralé vers le cercle $r=1$.
* Si $r_0 > 1$, alors $\dot{r} < 0$ : le rayon diminue et spiralé vers le cercle $r=1$.
Le cercle unité $x^2 + y^2 = 1$ est donc un **cycle limite globalement attractif** (pour tout $r_0 > 0$).

---

### IV. Analyse critique du modèle

**9. Analyse critique des limites physiques :**
* **Comportement pour $r \to +\infty$ :** Le terme non linéaire cubique $-r^3$ est prépondérant dans l'équation de $\dot{r}$ lorsque $r$ est grand. Physiquement, cela représente un amortissement non linéaire très fort (dissipation d'énergie proportionnelle au cube de l'amplitude). En réalité, dans les systèmes physiques macroscopiques (comme les circuits électroniques ou les structures mécaniques), des termes d'ordres supérieurs (en $r^5$, $r^7$, etc.) ou des saturations d'amplificateurs opérationnels interviennent. Le modèle suppose implicitement que la structure mathématique reste valide pour des énergies arbitrairement grandes, ce qui violerait le principe de conservation ou de résistance des matériaux (limite de plasticité ou de claquage diélectrique).
* **Instabilité à l'origine :** Le terme linéaire $+r$ force l'amorçage des oscillations à partir du bruit thermique ($r_0 > 0$). Toutefois, un système réel possède des seuils d'activation et des fluctuations stochastiques que le modèle déterministe idéalise parfaitement, masquant les temps de transit ou les phénomènes de battement transitoire.