---
title: 'Exercice 2 : Développement en série entière'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le but de ce problème est d'étudier la fonction $f$ définie sur l'intervalle ouvert $]-1, 1[$ par :
$$f(x) = \frac{(\arcsin x)^2}{\sqrt{1-x^2}}$$
et de déterminer son développement en série entière au voisinage de $0$, ainsi que les propriétés arithmétiques ou analytiques associées aux coefficients obtenus. Ce type de problème combine l'analyse fonctionnelle (équations différentielles vérifiées par les fonctions spéciales) et la manipulation rigoureuse des séries entières, compétences très prisées aux concours Mines-Ponts et Centrale-Supélec en filière MPI.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Étude préliminaire et domaine de définition**
   Justifier que la fonction $f$ est de classe $\mathcal{C}^\infty$ sur $]-1, 1[$.

2. **Équation différentielle d'ordre 1**
   Montrer que la fonction $g(x) = \arcsin x$ vérifie la relation $(1-x^2)g''(x) - x g'(x) = 0$ pour tout $x \in ]-1, 1[$. En déduire une équation différentielle linéaire du second ordre, puis du premier ordre, satisfaite par la fonction $f$.

3. **Relation de récurrence sur les coefficients**
   On suppose que $f$ se développe en série entière à l'origine sous la forme $f(x) = \sum_{n=0}^{+\infty} a_n x^n$ avec un rayon de convergence $R > 0$. En utilisant l'équation différentielle précédente, établir une relation de récurrence simple entre les coefficients $a_n$.

4. **Calcul explicite des coefficients**
   Déterminer l'expression générale de $a_n$ en fonction de $n$. On précisera explicitement les valeurs des premiers coefficients non nuls.

5. **Détermination du rayon de convergence et analyse critique**
   À l'aide de la règle de d'Alembert ou de la formule de Stirling, déterminer le rayon de convergence $R$ de la série entière obtenue. Discuter la convergence de la série sur le bord de l'intervalle de définition (en $x = \pm 1$). Pourquoi la méthode par équation différentielle est-elle plus efficace ici qu'un calcul direct par la formule de Taylor-Young ?

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Décomposez $f$ en un produit de fonctions usuelles dont la régularité sur $]-1, 1[$ ne fait aucun doute ($\arcsin$ et $x \mapsto (1-x^2)^{-1/2}$).
* **Question 2 :** Ne dérivez pas $f$ brutalement de manière itérée sans stratégie. Exprimez $f'(x)$ en fonction de $f(x)$ et de $g(x)$, puis injectez dans une relation algébrique liant $f, f'$ et $x$.
* **Question 3 :** Utilisez le théorème d'unicité du développement en série entière : si deux séries entières sont égales sur un voisinage de $0$, leurs coefficients le sont aussi. Décalez les indices pour obtenir une unique somme nulle.
* **Question 4 :** Traitez séparément les indices pairs et impairs.
* **Question 5 :** Pour l'analyse critique, pensez au lien entre le rayon de convergence d'une solution en série entière d'une équation différentielle linéaire et la position des singularités de ses coefficients dans le plan complexe.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Étude préliminaire et domaine de définition
La fonction $x \mapsto \arcsin x$ est de classe $\mathcal{C}^\infty$ sur $]-1, 1[$. 
La fonction $x \mapsto \frac{1}{\sqrt{1-x^2}}$ est également de classe $\mathcal{C}^\infty$ sur $]-1, 1[$ comme composée et inverse d'une fonction polynomiale strictement positive.
Par produit, $f$ est de classe $\mathcal{C}^\infty$ sur $]-1, 1[$.

#### 2. Équation différentielle satisfaite par $f$
Soit $g(x) = \arcsin x$. On a $g'(x) = \frac{1}{\sqrt{1-x^2}}$, ce qui donne $(1-x^2)(g'(x))^2 = 1$.
En dérivant cette relation par rapport à $x$ sur $]-1, 1[$ :
$$-2x(g'(x))^2 + 2(1-x^2)g'(x)g''(x) = 0$$
En simplifiant par $2g'(x)$ (qui est non nul sur $]-1, 1[$), on obtient l'équation différentielle vérifiée par $g$ :
$$(1-x^2)g''(x) - x g'(x) = 0$$

Exprimons maintenant $f(x) = (g(x))^2 \cdot (1-x^2)^{-1/2}$. Notons que $f(x) = g(x) g'(x)$.
Dérivons $f$ :
$$f'(x) = g'(x)^2 + g(x)g''(x)$$
Multiplions par $(1-x^2)$ :
$$(1-x^2)f'(x) = (1-x^2)g'(x)^2 + (1-x^2)g(x)g''(x)$$
Comme $(1-x^2)g'(x)^2 = 1$ et que $(1-x^2)g''(x) = x g'(x)$, il vient :
$$(1-x^2)f'(x) = 1 + x g(x) g'(x) = 1 + x f(x)$$
Ainsi, $f$ vérifie l'équation différentielle linéaire du premier ordre :
$$(1-x^2)f'(x) - x f(x) = 1$$

#### 3. Relation de récurrence sur les coefficients
Supposons que $f(x) = \sum_{n=0}^{+\infty} a_n x^n$ sur un intervalle $]-R, R[$ avec $R >0$. 
Puisqu'une série entière est dérivable terme à terme sur son intervalle de convergence ouverte :
$$f'(x) = \sum_{n=0}^{+\infty} (n+1)a_{n+1} x^n$$
Injectons ces expressions dans l'équation différentielle :
$$(1-x^2)\sum_{n=0}^{+\infty} (n+1)a_{n+1} x^n - x \sum_{n=0}^{+\infty} a_n x^n = 1$$
$$\sum_{n=0}^{+\infty} (n+1)a_{n+1} x^n - \sum_{n=0}^{+\infty} (n+1)a_{n+1} x^{n+2} - \sum_{n=0}^{+\infty} a_n x^{n+1} = 1$$

Par un changement d'indice dans les deux dernières sommets (posant $k = n+2$ puis $k = n+1$) :
* Première somme : $\sum_{n=0}^{+\infty} (n+1)a_{n+1} x^n = a_1 + 2a_2 x + \sum_{k=2}^{+\infty} k a_k x^{k-1}$ (gardons les indices initiaux ou unifions en $n$)
Unifions sous la variable $n$ :
$$a_1 + 2a_2 x + \sum_{n=1}^{+\infty} (n+1)a_{n+1} x^n - \sum_{n=2}^{+\infty} (n-1)a_{n-1} x^n - \sum_{n=1}^{+\infty} a_{n-1} x^n = 1$$

Isolons les termes constants et de degré $1$ :
* Pour $n=0$ (terme constant) : $a_1 = 1 \implies a_1 = 1$.
* Pour $n=1$ (degré 1) : $2a_2 - a_0 = 0 \implies a_2 = \frac{a_0}{2}$. Or $f(0) = \frac{(\arcsin 0)^2}{\sqrt{1-0}} = 0$, donc $a_0 = 0$, ce qui implique $a_2 = 0$.
* Pour $n \ge 2$ :
$$(n+1)a_{n+1} - (n-1)a_{n-1} - a_{n-1} = 0 \implies (n+1)a_{n+1} = n a_{n-1}$$
Soit la relation de récurrence générale pour $n \ge 2$ :
$$a_{n+1} = \frac{n}{n+1} a_{n-1}$$

#### 4. Calcul explicite des coefficients
Puisque $a_0 = 0$, la relation de récurrence implique immédiatement que tous les coefficients d'indice pair sont nuls :
$$\forall k \in \mathbb{N}, \quad a_{2k} = 0$$

Pour les indices impairs, posons $n = 2k+1$ (avec $k \ge 0$). La relation devient :
$$a_{2k+2} = \frac{2k+1}{2k+2} a_{2k}$$ ce qui correspond bien au décalage.
Exprimons $a_{2k+1}$ en fonction de $a_1 = 1$ :
$$a_{2k+1} = \frac{2k-1}{2k} a_{2k-1}$$
Par récurrence télescopique :
$$a_{2k+1} = \frac{(2k-1)(2k-3)\dots(1)}{(2k)(2k-2)\dots(2)} a_1 = \frac{\prod_{j=1}^{k} (2j-1)}{\prod_{j=1}^{k} (2j)}$$
En amplifiant le numérateur et le dénominateur par le produit des entiers pairs manquants, on obtient l'expression compacte :
$$a_{2k+1} = \frac{(2k)!}{2^{2k} (k!)^2}$$
Ainsi, le développement en série entière de $f$ est :
$$f(x) = \sum_{k=0}^{+\infty} \frac{(2k)!}{2^{2k} (k!)^2} x^{2k+1}$$

#### 5. Détermination du rayon de convergence et analyse critique
* **Rayon de convergence :**
  Appliquons la règle de d'Alembert au terme général $u_k = \frac{(2k)!}{2^{2k} (k!)^2} x^{2k+1}$ :
  $$\left|\frac{u_{k+1}}{u_k}\right| = \frac{(2k+2)(2k+1)}{2^{2k+2}((k+1)!)^2} \frac{2^{2k}(k!)^2}{(2k)!} |x|^2 = \frac{(2k+2)(2k+1)}{4(k+1)^2} |x|^2 = \frac{2k+1}{2k+2} |x|^2 \xrightarrow[k\to+\infty]{} |x|^2$$
  La série converge si $|x|^2 < 1$, c'est-à-dire $|x| < 1$. Le rayon de convergence est donc $R = 1$.

* **Analyse critique du modèle :**
  * *Comportement sur le bord ($x = \pm 1$) :* Grâce à la formule de Stirling, $a_{2k+1} \sim \frac{1}{\sqrt{\pi k}}$, ce qui montre que la série diverge grossièrement ou semi-converge sur le bord selon les critères usuels (ici divergence car le terme général ne tend pas vers $0$ en valeur absolue, car $\frac{1}{\sqrt{\pi k}} \to 0$ certes, mais attention : $\sum \frac{1}{\sqrt{k}}$ diverge). En effet, en $x=1$, $f(x)$ diverge vers $+\infty$ car $\arcsin(1) = \frac{\pi}{2}$ et $\frac{1}{\sqrt{1-x^2}} \to +\infty$.
  * *Avantage de la méthode :* Calculer les dérivées successives de $f$ directement via la formule de Taylor-Young serait rapidement inextricable en raison de la complexité croissante des dérivées de $\arcsin$ et de $(1-x^2)^{-3/2}$. Passer par l'équation différentielle du premier ordre convertit un problème d'analyse globale en une simple **relation de récurrence algébrique**, ce qui illustre l'élégance et la puissance des méthodes de mathématiques supérieures en MPI.