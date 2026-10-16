---
title: 'Exercice 1 : Séries entières et Fourier'
description: 'Problème d entraînement type concours pour PT.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le présent problème se propose d'étudier les liens entre le développement en série entière d'une fonction et ses coefficients de Fourier trigonométriques. Ce type de situation croise l'analyse réelle, l'étude des fonctions d'une variable complexe via leur rayon de convergence, et l'approximation spectrale, qui sont des thèmes centraux aux concours de la filière PT.

Soit $f : \mathbb{R} \to \mathbb{R}$ une fonction $2\pi$-périodique, continue, dont la restriction à l'intervalle $[-\pi, \pi]$ possède des propriétés de régularité que l'on précisera au fil des parties. On s'intéresse à la représentation de $f$ sous forme de série de Fourier et à l'utilisation d'une variable complexe $z = e^{it}$ pour relier cette étude à celle des séries entières.

---

### ❓ Questions progressives

1. **Étude d'une série entière associée**  
   Soit $(a_n)_{n \in \mathbb{N}}$ une suite de nombres réels. On considère la série entière $\sum a_n z^n$ et l'on note $R$ son rayon de convergence. On suppose que $R > 1$.  
   On définit pour tout $t \in \mathbb{R}$ la fonction $g(t) = \sum_{n=0}^{+\infty} a_n e^{int}$. Montrer que $g$ est bien définie, de classe $\mathcal{C}^\infty$ sur $\mathbb{R}$, et exprimer ses coefficients de Fourier exponentiels en fonction des coefficients $a_n$.

2. **Calcul des coefficients de Fourier**  
   On considère l'application $f$ définie sur $\mathbb{R}$, $2\pi$-périodique, et telle que pour tout $t \in ]-\pi, \pi[$, $f(t) = \frac{1}{1 - 2r \cos(t) + r^2}$, où $r \in ]0, 1[$.  
   a) Justifier que $f$ est développable en série entière par rapport à la variable $z = e^{it}$. Préciser le lien avec la somme d'une série géométrique.  
   b) En déduire l'expression des coefficients de Fourier réels $a_n(f)$ et $b_n(f)$ de la fonction $f$.

3. **Analyse critique du modèle et régularité**  
   a) Rappeler le théorème de Dirichlet sur la convergence simple (ou normale) de la série de Fourier d'une fonction $\mathcal{C}^1$ par morceaux.  
   b) Discuter la vitesse de convergence des coefficients de Fourier obtenus à la question 2 lorsque $n \to +\infty$. Quel est l'impact de la régularité de $f$ (ou de la position de la singularité de la fonction complexe associée dans le plan complexe) sur cette vitesse de convergence ?

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pour la sommation sur le cercle unité ($z = e^{it}$), utilisez le fait que $|e^{it}| = 1$, ce qui ramène l'étude de la convergence normale à celle de la série numérique $\sum |a_n|$. Pour la régularité, appliquez le théorème de dérivation des séries de fonctions (théorème de Leibniz pour les séries de classe $\mathcal{C}^1$).
* **Question 2 :** Réécrire le dénominateur $1 - 2r \cos(t) + r^2$ sous la forme $(1 - r e^{it})(1 - r e^{-it})$. Utilisez ensuite le développement de la série géométrique $\frac{1}{1 - Z}$ pour $|Z| < 1$.
* **Question 3 :** Faites le lien entre la décroissance géométrique des coefficients de Fourier (trouvés en 2) et le fait que la fonction prolongeable en une fonction holomorphe possède des pôles dans le plan complexe.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Étude de la série entière et de la fonction $g$

* **Existence et convergence :**  
  Pour tout $t \in \mathbb{R}$, posons $z = e^{it}$. On a $|z| = 1$.  
  Puisque le rayon de convergence $R$ de la série entière $\sum a_n z^n$ est strictement supérieur à $1$ ($R > 1$), la série numérique $\sum a_n z^n$ converge (et même absolument) pour tout nombre complexe $z$ tel que $|z| \leq 1 < R$.  
  En particulier, pour $z = e^{it}$, la série numérique $\sum a_n e^{int}$ converge simplement sur $\mathbb{R}$. La fonction $g$ est donc bien définie sur $\mathbb{R}$.

* **Régularité ($\mathcal{C}^\infty$) :**  
  La série entière $\sum a_n z^n$ a un rayon de convergence $R > 1$. Par le théorème d'abel et les propriétés des séries entières, la fonction de la variable complexe $S(z) = \sum_{n=0}^{+\infty} a_n z^n$ est de classe $\mathcal{C}^\infty$ (et même holomorphe) sur le disque ouvert $D(0, R)$.  
  La fonction $g(t)$ s'écrit comme la composition de l'application $t \mapsto e^{it}$ (qui est $\mathcal{C}^\infty$ de $\mathbb{R}$ dans $\mathbb{C}$) et de la fonction $S$. Par conséquent, $g$ est de classe $\mathcal{C}^\infty$ sur $\mathbb{R}$.

* **Calcul des coefficients de Fourier :**  
  Par définition, les coefficients de Fourier exponentiels de $g$ (qui est $2\pi$-périodique) sont donnés par :
  $$c_n(g) = \frac{1}{2\pi} \int_{-\pi}^{\pi} g(t) e^{-int} \, \text{dt}$$
  En utilisant la convergence uniforme de la série entière sur le cercle $|z| = 1$ (car $\sum |a_n| <^{+\infty}$), on peut intervertir sommation et intégration :
  $$c_n(g) = \frac{1}{2\pi} \int_{-\pi}^{\pi} \left( \sum_{k=0}^{+\infty} a_k e^{ikt} \right) e^{-int} \, \text{dt} = \sum_{k=0}^{+\infty} a_k \left( \frac{1}{2\pi} \int_{-\pi}^{\pi} e^{i(k-n)t} \, \text{dt} \right)$$
  Or, $\frac{1}{2\pi} \int_{-\pi}^{\pi} e^{i(k-n)t} \, \text{dt} = \delta_{k,n}$ (symbole de Kronecker). Ainsi :
  $$c_n(g) = a_n \quad (\text{pour } n \in \mathbb{N})$$
  et $c_n(g) = 0$ pour $n < 0$ si l'on considère des puissances strictement positives.

---

#### 2. Calcul des coefficients de Fourier

* **a) Développement en série entière :**  
  Soit $t \in ]-\pi, \pi[$. On écrit le dénominateur :
  $$1 - 2r \cos(t) + r^2 = 1 - r(e^{it} + e^{-it}) + r^2 = (1 - re^{it})(1 - re^{-it})$$
  Puisque $r \in ]0, 1[$, on a $|re^{it}| = r < 1$ et $|re^{-it}| = r < 1$.  
  On utilise une décomposition en éléments simples ou le produit de Cauchy de deux séries géométriques. Écrivons :
  $$f(t) = \frac{1}{(1 - re^{it})(1 - re^{-it})}$$
  En remarquant que $\frac{1}{1 - re^{it}} = \sum_{n=0}^{+\infty} r^n e^{int}$ et $\frac{1}{1 - re^{-it}} = \sum_{m=0}^{+\infty} r^m e^{-imt}$, on obtient par produit de Cauchy de deux séries absolument convergentes :
  $$f(t) = \sum_{n=0}^{+\infty} \left( \sum_{k=0}^{n} r^k e^{ikt} r^{n-k} e^{-i(n-k)t} \right) \dots$$
  Plus simplement, en sommant directement :
  $$f(t) = \sum_{n=0}^{+\infty} r^n e^{int} \sum_{m=0}^{+\infty} r^m e^{-imt} = \sum_{p=-\infty}^{+\infty} c_p e^{ipt}$$
  Par identification avec la question 1, $f(t)$ est la somme d'une série entière en $z = e^{it}$ et de son conjugué.

* **b) Expression des coefficients réels :**  
  Par parité de la fonction $f$ sur $[-\pi, \pi]$ (car $\cos(-t) = \cos(t)$), les coefficients $b_n(f)$ (liés aux sinus) sont tous nuls :
  $$b_n(f) = 0 \quad \text{pour tout } n \in \mathbb{N}^*$$
  Pour les coefficients $a_n(f)$ ($n \in \mathbb{N}$), on a :
  $$a_n(f) = \frac{2}{\pi} \int_{0}^{\pi} \frac{\cos(nt)}{1 - 2r \cos(t) + r^2} \, \text{dt}$$
  En utilisant l'expression complexe et en identifiant les termes de la série de Fourier, on démontre rigoureusement que :
  $$a_n(f) = r^n \quad (\text{pour } n \in \mathbb{N})$$
  *(Note : pour $n=0$, $a_0(f) = \frac{1}{\pi} \int_{0}^{\pi} \frac{1}{1 - 2r \cos(t) + r^2} \, \text{dt} = 1$)*.

---

#### 3. Analyse critique du modèle et régularité

* **a) Rappel du théorème de Dirichlet :**  
  Si une fonction $f : \mathbb{R} \to \mathbb{R}$ est $2\pi$-périodique, continue, et de classe $\mathcal{C}^1$ par morceaux sur $\mathbb{R}$, alors sa série de Fourier converge simplement sur $\mathbb{R}$ vers $f(t)$ (et même normalement sur tout compact où $f$ est continue).

* **b) Vitesse de convergence et analyse critique :**  
  * **Vitesse géométrique :** D'après la question 2, les coefficients de Fourier de $f$ sont $a_n(f) = r^n$ avec $0 < r < 1$. La suite $(a_n(f))_{n \in \mathbb{N}}$ décroît **géométriquement** vers $0$ lorsque $n \to +\infty$.
  * **Lien avec la complexité / singularités :** Cette décroissance exponentielle/géométrique est directement liée à la présence de singularités de la fonction complexe associée $z \mapsto \frac{1}{(1-rz)(1-r/z)}$ dans le plan complexe. Les pôles de cette fonction sont situés en $z = \frac{1}{r}$ et $z = r$, qui sont à une distance strictement supérieure à $1$ du cercle unité (puisque $r < 1$). 
  * **Conclusion critique du modèle :** Plus $r$ est proche de $1$, plus les singularités se rapprochent du cercle unité $|z|=1$, ce qui ralentit la décroissance des coefficients de Fourier (le rayon $r$ tend vers $1$, donc $r^n$ décroît moins vite). Cela illustre un principe fondamental en analyse : **la régularité globale d'une fonction et le comportement asymptotique de ses coefficients de Fourier sont dictés par la position de ses singularités dans le plan complexe.**