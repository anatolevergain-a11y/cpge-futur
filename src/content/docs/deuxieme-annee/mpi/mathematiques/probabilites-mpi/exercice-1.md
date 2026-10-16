---
title: 'Exercice 1 : Variables aléatoires à densité'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre de l'étude de signaux aléatoires en traitement de l'information (filière MPI), on s'intéresse à un système de transmission bruité. Le signal émis est une variable aléatoire positive, et le bruit ambiant modifie ce signal selon une loi bien spécifique.

Soit $\alpha > 0$ un paramètre réel. On considère une variable aléatoire $X$ à valeurs dans $\mathbb{R}_+^*$, dont la densité de probabilité $f_X$ est définie par :
$$f_X(x) = \begin{cases} \alpha x^{\alpha-1} e^{-x^\alpha} & \text{si } x > 0 \\ 0 & \text{sinon} \end{cases}$$

On introduit également une seconde variable aléatoire $Y$, indépendante de $X$, suivant une loi exponentielle de paramètre $1$, de densité :
$$f_Y(y) = \begin{cases} e^{-y} & \text{si } y > 0 \\ 0 & \text{sinon} \end{cases}$$

L'objectif de ce problème est d'étudier les propriétés probabilistes de $X$, de calculer certaines transformations de couples de variables aléatoires, et d'analyser un estimateur issu de ce modèle.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Vérification de la densité :** Montrer que $f_X$ est bien une densité de probabilité sur $\mathbb{R}$.
2. **Fonction de répartition :** Calculer la fonction de répartition $F_X$ de la variable aléatoire $X$.
3. **Moments :** Soit $r \in \mathbb{R}$. Pour quelles valeurs de $r$ la variable aléatoire $X$ admet-elle un moment d'ordre $r$ ? Exprimer alors $\mathbb{E}[X^r]$ à l'aide de la fonction $\Gamma d'Euler$.
4. **Transformation et loi conjointe :** On pose $U = X^\alpha$ et $V = Y$. 
   - Déterminer la loi de la variable aléatoire $U$.
   - En déduire la densité du couple $(U, V)$.
5. **Somme de variables aléatoires :** À l'aide d'un changement de variables ou d'un produit de convolution, déterminer la densité de la variable aléatoire $Z = X^\alpha + Y$.
6. **Analyse critique du modèle :** 
   - Pour $\alpha \in ]0, 1[$, que peut-on dire de l'existence de l'espérance $\mathbb{E}[X]$ ? 
   - Discuter des limites de ce modèle pour représenter un signal physique mesurable dont l'énergie moyenne devrait être finie.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Effectuez un changement de variable simple du type $u = x^\alpha$ pour évaluer l'intégrale de $f_X$ sur $\mathbb{R}_+^*$.
* **Question 2 :** Intégrez la densité $f_X$ sur l'intervalle $]0, x]$ pour $x > 0$.
* **Question 3 :** Utilisez le théorème de transfert. L'intégrale obtenue se ramène par changement de variable à la définition intégrale de la fonction $\Gamma(\beta) = \int_0^{+\infty} t^{\beta-1} e^{-t} \, \mathrm{d}t$.
* **Question 4 :** Utilisez le théorème de transfert ou la méthode de la fonction de répartition pour $U$. L'indépendance de $X$ et $Y$ se transmet naturellement à $U$ et $V$.
* **Question 5 :** Exprimez la loi de la somme $Z = U + V$ de deux variables indépendantes en utilisant le produit de convolution de leurs densités.
* **Question 6 :** Analysez le comportement de l'intégrale définissant l'espérance au voisinage de $0$ et de $+\infty$ selon les valeurs du paramètre $\alpha$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Vérification de la densité $f_X$
La fonction $f_X$ est positive ou nulle sur $\mathbb{R}$ par construction. Elle est clairement continue sur $\mathbb{R} \setminus \{0\}$. Il reste à vérifier que son intégrale sur $\mathbb{R}$ vaut $1$ :
$$\int_{-\infty}^{+\infty} f_X(x) \, \mathrm{d}x = \int_0^{+\infty} \alpha x^{\alpha-1} e^{-x^\alpha} \, \mathrm{d}x$$
Effectuons le changement de variable $u = x^\alpha$, qui est un $C^1$-difféomorphisme strictement croissant de $]0, +\infty[$ dans $]0, +\infty[$. On a $\mathrm{d}u = \alpha x^{\alpha-1} \mathrm{d}x$. L'intégrale devient :
$$\int_0^{+\infty} e^{-u} \, \mathrm{d}u = \left[ -e^{-u} \right]_0^{+\infty} = 0 - (-1) = 1$$
La fonction $f_X$ est donc bien une densité de probabilité.

#### 2. Fonction de répartition $F_X$
Pour tout $x \in \mathbb{R}$, $F_X(x) = \mathbb{P}(X \le x)$. 
- Si $x \le 0$, $F_X(x) = 0$ car $X$ est à valeurs dans $\mathbb{R}_+^*$.
- Si $x > 0$ :
  $$F_X(x) = \int_0^x \alpha t^{\alpha-1} e^{-t^\alpha} \, \mathrm{d}t$$
  En posant $u = t^\alpha$, on obtient :
  $$F_X(x) = \int_0^{x^\alpha} e^{-u} \, \mathrm{d}u = 1 - e^{-x^\alpha}$$
Ainsi, $F_X(x) = (1 - e^{-x^\alpha})\mathbf{1}_{\mathbb{R}_+^*}(x)$. (On reconnaît ici la loi de Weibull).

#### 3. Étude des moments de $X$
Soit $r \in \mathbb{R}$. La variable $X$ admet un moment d'ordre $r$ si et seulement si l'intégrale suivante converge absolument :
$$I_r = \int_0^{+\infty} x^r \alpha x^{\alpha-1} e^{-x^\alpha} \, \mathrm{d}x = \alpha \int_0^{+\infty} x^{r+\alpha-1} e^{-x^\alpha} \, \mathrm{d}x$$
En effectuant le changement de variable $u = x^\alpha$ (donc $x = u^{1/\alpha}$ et $\mathrm{d}x = \frac{1}{\alpha} u^{\frac{1}{\alpha}-1} \mathrm{d}u$), l'intégrale se réécrit :
$$I_r = \int_0^{+\infty} \left(u^{1/\alpha}\right)^{r+\alpha-1} e^{-u} \frac{1}{\alpha} u^{\frac{1}{\alpha}-1} \alpha \, \mathrm{d}u = \int_0^{+\infty} u^{\frac{r+\alpha}{\alpha} - 1} e^{-u} \, \mathrm{d}u$$
Cette intégrale converge si et seulement si l'exposant de $u$ en $0$ est strictement supérieur à $-1$, c'est-à-dire :
$$\frac{r+\alpha}{\alpha} - 1 > -1 \iff \frac{r+\alpha}{\alpha} > 0 \iff r + \alpha > 0 \iff r > -\alpha$$
(La convergence en $+\infty$ est assurée pour tout $r$ par domination exponentielle).
Sous la condition $r > -\alpha$, le moment d'ordre $r$ existe et vaut :
$$\mathbb{E}[X^r] = \Gamma\left(1 + \frac{r}{\alpha}\right)$$

#### 4. Transformation et loi conjointe
* **Loi de $U = X^\alpha$ :** 
  Pour tout $t > 0$, la fonction de répartition de $U$ est :
  $$F_U(t) = \mathbb{P}(U \le t) = \mathbb{P}(X^\alpha \le t) = \mathbb{P}(X \le t^{1/\alpha}) = F_X(t^{1/\alpha}) = 1 - e^{-t}$$
  Ainsi, $U$ suit une **loi exponentielle de paramètre $1$** ($\mathcal{E}(1)$).
* **Densité du couple $(U, V)$ :**
  Puisque $U = X^\alpha$ et $V = Y$, et que $(X, Y$ est un couple de variables indépendantes, par le théorème de transformation, le couple $(U, V)$ admet pour densité conjointe sur $\mathbb{R}^2$ :
  $$f_{U,V}(u, v) = f_U(u) f_V(v) = \begin{cases} e^{-u} e^{-v} = e^{-(u+v)} & \text{si } (u, v) \in (\mathbb{R}_+^*)^2 \\ 0 & \text{sinon} \end{cases}$$

#### 5. Densité de la somme $Z = X^\alpha + Y$ (soit $Z = U + V$)
Les variables $U$ et $V$ sont indépendantes et suivent toutes deux la loi $\mathcal{E}(1)$. La densité de leur somme $Z = U + V$ s'obtient par produit de convolution de leurs densités sur $\mathbb{R}_+^*$ :
Pour $z > 0$ :
$$f_Z(z) = \int_{-\infty}^{+\infty} f_U(u) f_V(z-u) \, \mathrm{d}u = \int_0^z e^{-u} e^{-(z-u)} \, \mathrm{d}u = e^{-z} \int_0^z 1 \, \mathrm{d}u = z e^{-z}$$
Pour $z \le 0$, $f_Z(z) = 0$.
Ainsi, $Z$ suit une **loi gamma de paramètres $(2, 1)$**, notée $\Gamma(2, 1)$, de densité :
$$f_Z(z) = z e^{-z} \mathbf{1}_{\mathbb{R}_+^*}(z)$$

#### 6. Analyse critique du modèle
* **Cas $\alpha \in ]0, 1[$ :** 
  D'après la question 3, l'existence du moment d'ordre $r$ requiert $r > -\alpha$. Pour $r = 1$ (l'espérance $\mathbb{E}[X]$), la condition est $1 > -\alpha$, ce qui est toujours vrai puisque $\alpha > 0$. 
  Cependant, si l'on s'intéresse à la variance ou à des moments d'ordre supérieur négatifs, ou si l'on modifie le domaine, observons le comportement en $0$ : si $\alpha \in ]0, 1[$, alors $f_X(x) \sim \alpha x^{\alpha-1}$ au voisinage de $0$. Comme $\alpha-1 < 0$, la densité diverge en $0$ (tend vers $+\infty$).
* **Limites physiques :** 
  Dans de nombreux contextes physiques (traitement du signal, télécommunications), la variable $énérgétique$ ou l'amplitude du signal mesuré ne peut pas posséder une densité qui explose de manière inintégrable en $0$ si l'on souhaite garantir des propriétés de stabilité du système. De plus, bien que l'espérance $\mathbb{E}[X] = \Gamma(1 + \frac{1}{\alpha})$ existe toujours pour tout $\alpha > 0$, le choix d'un paramètre $\alpha$ petit conduit à des variations extrêmes de la variable aléatoire, rendant l'estimateur empirique hautement instable en pratique (variance infinie si $\alpha \le \frac{1}{2}$).