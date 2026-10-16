---
title: 'Exercice 2 : Racines multiples et théorème de d Alembert-Gauss'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude fine des racines multiples et application au théorème de d'Alembert-Gauss

## Énoncé

Le présent problème se propose d'étudier un pont algébrique fondamental entre l'analyse réelle et l'algèbre linéaire : la caractérisation des racines multiples d'un polynôme par le biais des dérivées successives, menant à une approche topologique et analytique du théorème de d'Alembert-Gauss sur les corps fermés. 

Dans tout le problème, $\mathbb{K}$ désigne soit le corps des nombres réels $\mathbb{R}$, soit le corps des nombres complexes $\mathbb{C}$. On note $\mathbb{K}[X]$ l'anneau des polynômes à coefficients dans $\mathbb{K}$. 

---

## Questions

### Partie I : Multiplicité des racines et idéal des dérivées

1. Soit $P \in \mathbb{K}[X]$ et $a \in \mathbb{K}$. Démontrer que $a$ est une racine de $P$ de multiplicité $m$ (avec $m \ge 1$) si et seulement si :
   $$P(a) = P'(a) = \dots = P^{(m-1)}(a) = 0 \quad \text{et} \quad P^{(m)}(a) \neq 0$$
2. Soit $P \in \mathbb{C}[X]$ un polynôme non constant. On note $Z(P)$ l'ensemble de ses racines dans $\mathbb{C}$. Proposer une condition nécessaire et suffisante portant sur le pgcd de $P$ et de son polynôme dérivé $P'$ pour que $P$ admette au moins une racine multiple.
3. *Application numérique et limite du modèle :* Soit $P_\varepsilon(X) = X^3 - 3X + \varepsilon$, où $\varepsilon$ est un paramètre réel strictement positif représentant une incertitude de mesure (par exemple, $\varepsilon = 10^{-6}$). 
   * Déterminer les valeurs de $\varepsilon$ pour lesquelles $P_\varepsilon$ admet des racines multiples.
   * Discuter la stabilité numérique de la racine double lorsque $\varepsilon \to 0$. Comment cela illustre-t-il la sensibilité des zéros multiples aux perturbations dans les calculs scientifiques ?

### Partie II : Autour du théorème de d'Alembert-Gauss

On admet le théorème de d'Alembert-Gauss sous sa forme forte : *tout polynôme non constant à coefficients complexes possède au moins une racine dans $\mathbb{C}$.*

4. Soit $P \in \mathbb{R}[X]$ un polynôme irréductible. Quel est son degré maximal ? Justifier rigoureusement.
5. Soit $P \in \mathbb{C}[X]$ un polynôme de degré $n \ge 1$. En procédant par récurrence sur $n$, démontrer que $P$ possède exactement $n$ racines dans $\mathbb{C}$ comptées avec leur multiplicité.
6. Soit $P(Z) = Z^n - 1$ avec $n \in \mathbb{N}^*$. 
   * Déterminer l'ensemble des racines de $P$ dans $\mathbb{C}$, noté $\mathbb{U}_n$.
   * En déduire la décomposition en facteurs irréductibles de $P(Z)$ dans $\mathbb{R}[X]$ pour $n = 4$.

---

## Pistes et indications

* **Q1 :** Utiliser la division euclidienne de $P$ par $(X-a)^m$ et exploiter la formule de Taylor pour les polynômes.
* **Q2 :** Penser au lien entre racines communes d'un polynôme et de sa dérivée et la notion de diviseurs communs dans $\mathbb{C}[X]$.
* **Q3 :** Calculer le discriminant ou étudier le polynôme dérivé $P_\varepsilon'$. Évaluer l'ordre de grandeur de la variation de la racine par rapport à $\varepsilon$.
* **Q4 & Q5 :** Conjugaison complexe pour les polynômes à coefficients réels. Transmission de l'hypothèse de récurrence via d'Alembert-Gauss.
* **Q6 :** Utiliser la représentation polaire des nombres complexes $z = r e^{i\theta}$.

---

## Corrigé pas à pas

### Partie I : Multiplicité des racines et idéal des dérivées

1. **Caractérisation par les dérivées successives :**
   Dire que $a$ est une racine de $P$ de multiplicité $m$ signifie par définition que $(X-a)^m$ divise $P(X)$ mais que $(X-a)^{m+1}$ ne divise pas $P(X)$. 
   On peut donc écrire $P(X) = (X-a)^m Q(X)$ avec $Q(a) \neq 0$.
   En dérivant successivement $k$ fois par la formule de Leibniz, on constate que tous les termes de la dérivée évaluée en $a$ s'annulent pour $k < m$, et pour $k = m$, $P^{(m)}(a) = m! Q(a) \neq 0$. Réciproquement, si les dérivées s'annulent jusqu'à l'ordre $m-1$, la formule de Taylor pour les polynômes donne :
   $$P(X) = \sum_{k=0}^{\operatorname{deg}(P)} \frac{P^{(k)}(a)}{k!} (X-a)^k = \sum_{k=m}^{\operatorname{deg}(P)} \frac{P^{(k)}(a)}{k!} (X-a)^k = (X-a)^m Q(X)$$
   avec $Q(a) = \frac{P^{(m)}(a)}{m!} \neq 0$.

2. **Lien avec le PGCD :**
   Soit $a$ une racine multiple de $P$. D'après la question 1, $a$ est une racine commune de $P$ et de $P'$. 
   Réciproquement, si $P$ et $P'$ ont une racine commune $a$, alors $P(a) = 0$ et $P'(a) = 0$, ce qui implique que la multiplicité de $a$ dans $P$ est supérieure ou égale à 2.
   Ainsi, $P$ admet au moins une racine multiple si et seulement si **le $\operatorname{PGCD}(P, P')$ est de degré supérieur ou égal à 1**.

3. **Analyse de sensibilité et limites du modèle :**
   * Le polynôme dérivé est $P_\varepsilon'(X) = 3X^2 - 3 = 3(X-1)(X+1)$. Les extrema sont atteints en $X = 1$ et $X = -1$.
   * Pour que $P_\varepsilon$ admette une racine double, il faut que l'une des valeurs extrémales soit nulle :
     * $P_\varepsilon(1) = 1 - 3 + \varepsilon = 0 \implies \varepsilon = 2$
     * $P_\varepsilon(-1) = -1 + 3 + \varepsilon = 0 \implies \varepsilon = -2$
   * *Limites du modèle physique/numérique :* Si l'on perturbe un système critique (par exemple $\varepsilon = 0$ théorique, menant à une racine double en $1$), l'introduction d'un bruit de mesure $\varepsilon = 10^{-6}$ transforme la racine double en trois racines simples distinctes. Analytiquement, par un développement limité de la racine $1 + \delta$, on trouve que $|\delta| = O(\sqrt{\varepsilon})$ au voisinage des extrema. Une perturbation infime $\varepsilon = 10^{-6}$ engendre une erreur $\delta \approx 10^{-3}$, soit **une amplification de l'erreur par un facteur 1000**. Les racines multiples sont donc numériquement instables.

---

### Partie II : Autour du théorème de d'Alembert-Gauss

4. **Degré des polynômes irréductibles de $\mathbb{R}[X]$ :**
   Soit $P \in \mathbb{R}[X]$ un polynôme irréductible. Si son degré était supérieur ou égal à 3, d'après le théorème de d'Alembert-Gauss, $P$ admettrait au moins une racine complexe $\alpha \in \mathbb{C}$. 
   * Si $\alpha \in \mathbb{R}$, alors $(X-\alpha)$ diviserait $P$ dans $\mathbb{R}[X]$, ce qui contredirait l'irréductibilité de $P$ (car $\operatorname{deg}(P) \ge 3$).
   * Si $\alpha \in \mathbb{C} \setminus \mathbb{R}$, alors le conjugué $\bar{\alpha}$ est également racine de $P$ (car les coefficients de $P$ sont réels). Le polynôme $(X-\alpha)(X-\bar{\alpha}) = X^2 - 2\operatorname{Re}(\alpha)X + |\alpha|^2$ est à coefficients réels et divise $P$ dans $\mathbb{R}[X]$. Par irréductibilité, $P$ doit être égal à ce facteur de degré 2.
   * *Conclusion :* Les polynômes irréductibles de $\mathbb{R}[X]$ sont de **degré 1 ou 2**.

5. **Dénombrement des racines dans $\mathbb{C}[X]$ :**
   Démontrons par récurrence sur $n \ge 1$ la propriété $\mathcal{P}(n)$ : « Tout polynôme $P \in \mathbb{C}[X]$ de degré $n$ possède exactement $n$ racines dans $\mathbb{C}$ comptées avec leur multiplicité. »
   * *Initialisation ($n=1$) :* $P(X) = aX + b$ avec $a \neq 1$. L'unique racine est $X = -b/a$, de multiplicité 1. $\mathcal{P}(1)$ est vraie.
   * *Hérédité :* Soit $n \ge 1$ tel que $\mathcal{P}(n)$ soit vraie. Soit $P \in \mathbb{C}[X]$ de degré $n+1$. Par le théorème de d'Alembert-Gauss, $P$ possède au moins une racine $z_1 \in \mathbb{C}$. 
     Par conséquent, $X-z_1$ divise $P$, et on peut écrire :
     $$P(X) = (X-z_1)Q(X)$$
     où $Q \in \mathbb{C}[X]$ est de degré $n$. 
     Par hypothèse de récurrence, $Q$ possède exactement $n$ racines dans $\mathbb{C}$ (comptées avec multiplicité), notées $z_2, \dots, z_{n+1}$.
     Ainsi, $P$ possède les racines $z_1, z_2, \dots, z_{n+1}$, soit un total de $1 + n = n+1$ racines comptées avec leur multiplicité. $\mathcal{P}(n+1)$ est vraie.

6. **Application aux racines de l'unité :**
   * L'ensemble des racines de $P(Z) = Z^n - 1$ est $\mathbb{U}_n = \left\{ e^{i \frac{2k\pi}{n}} \mid k \in \llbracket 0, n-1 \rfloor \right\}$.
   * Pour $n=4$, $P(Z) = Z^4 - 1$. Les 4 racines complexes sont $1, -1, i, -i$.
     Dans $\mathbb{C}[X]$, la décomposition est :
     $$Z^4 - 1 = (Z-1)(Z+1)(Z-i)(Z+i)$$
     En regroupant les racines conjuguées pour obtenir des polynômes à coefficients réels :
     $$(Z-i)(Z+i) = Z^2 + 1$$
     La décomposition en facteurs irréductibles dans $\mathbb{R}[X]$ est donc :
     $$Z^4 - 1 = (Z-1)(Z+1)(Z^2 + 1)$$