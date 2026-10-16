---
title: 'Exercice 1 : Rayon de convergence et développement en série entière'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ : Analyse asymptotique et développement en série entière d'une intégrale fonction d'un paramètre

**Filière :** MP  
**Matière :** Mathématiques  
**Thème :** Séries entières, séries de Fourier et analyse asymptotique.

---

### Introduction et contexte du problème

Dans les problèmes de physique statistique et de thermique, l'évaluation de certaines fonctions définies par des intégrales complexes conduit à l'étude de fonctions génératrices. Ce problème propose d'étudier une fonction définie par une intégrale à paramètre, d'en déterminer le rayon de convergence par des méthodes d'analyse asymptotique réalistes, puis d'expliciter son développement en série entière.

---

### Énoncé

Soit la fonction $f$ définie pour tout $x \in ]-1, 1[$ par l'intégrale :
$$f(x) = \int_{0}^{+\infty} \frac{t^2 e^{-t}}{\sqrt{1 - 2x \cos(t) + x^2}} \, dt$$

L'objectif de ce problème est de déterminer le rayon de convergence de la série entière associée à $f$ au voisinage de $0$, de relier cette fonction à une somme de séries trigonométriques via Fourier, et d'analyser le comportement du modèle aux limites du domaine de définition.

---

### Questions

1. **Étude de la convergence de l'intégrale :** Justifier que pour tout $x \in [-1, 1]$, l'intégrale définissant $f(x)$ est convergente.
2. **Expression sous forme de série entière :** 
   a. Rappeler le développement en série entière de la fonction $u \mapsto \frac{1}{\sqrt{1-u}}$ pour $|u| < 1$. Préciser le rayon de convergence.
   b. En déduire que $f(x)$ peut s'écrire sous la forme d'une série entière $\sum_{n=0}^{+\infty} a_n x^n$ dont on précisera l'expression générale de $a_n$ sous forme d'une intégrale.
3. **Calcul des coefficients et rayon de convergence :**
   a. Évaluer la nature de la suite $(a_n)$ en utilisant des estimations de Laplace ou des comparaisons d'intégrales.
   b. Déterminer le rayon de convergence $R$ de la série entière $\sum a_n x^n$.
4. **Analyse critique et limites du modèle physique :** 
   a. Que se passe-t-il lorsque $x \to 1^-$ ? Interpréter physiquement la divergence de l'intégrale ou de la série.
   b. Discuter la pertinence de l'ordre de grandeur de $a_n$ pour les grands $n$.

---

### Pistes et Indications

* **Q1 :** Étudier le comportement du dénominateur lorsque $x \in [-1, 1]$ et $t \to 0$, puis la domination par le terme en $e^{-t}$ en $+\infty$.
* **Q2 :** Utiliser la formule du binôme généralisé pour $\left(1 - (2x\cos(t) - x^2)\right)^{-1/2}$. Attention à l'interversion série-intégrale (théorème d'intégration terme à terme).
* **Q3 :** Exprimer $\cos^n(t)$ à l'aide de formules d'Euler pour transformer l'intégrale définissant $a_n$.
* **Q4 :** Analyser le comportement en $t=0$ de l'intégrant lorsque $x=1$.

---

### Corrigé pas à pas

#### 1. Étude de la convergence de l'intégrale
Soit $x \in [-1, 1]$ fixé. L'intégrant est $g_x(t) = \frac{t^2 e^{-t}}{\sqrt{1 - 2x \cos(t) + x^2}}$.
* **En $+\infty$ :** Le terme $e^{-t}$ l'emporte largement devant toute puissance polynomiale de $t$. Plus précisément, pour $x \in [-1, 1]$, le dénominateur est minoré par $\sqrt{(1-|x|)^2} = 1-|x|$ si $x \neq \pm 1$ (cas $x=\pm 1$ à traiter à la limite). Pour $x=1$, le dénominateur vaut $\sqrt{2-2\cos(t)} = 2|\sin(t/2)|$. L'intégrale converge en $+\infty$ par comparaison avec des intégrales de Riemann ou par critère de négligeabilité.
* **En $0$ :** $\sqrt{1 - 2x \cos(t) + x^2} = \sqrt{(1-x)^2 + 4x \sin^2(t/2)}$. Si $x \neq 1$, cette quantité tend vers $|1-x| \neq 0$. Si $x = 1$, elle vaut $2\sin(t/2) \sim t$. Dans ce cas, $g_1(t) \sim \frac{t^2 e^{-t}}{t} = t e^{-t}$, qui tend vers $0$. L'intégrale est donc impropre en $0$ mais prolongeable par continuité, donc convergente.

#### 2. Expression sous forme de série entière
a. Pour $u \in ]-1, 1[$, on a le développement en série entière :
$$\frac{1}{\sqrt{1-u}} = \sum_{k=0}^{+\infty} \binom{-1/2}{k} (-u)^k = \sum_{k=0}^{+\infty} \frac{(2k)!}{2^{2k} (k!)^2} u^k$$
Le rayon de convergence de cette série est $1$.

b. Posons $u = 2x\cos(t) - x^2$. Pour $x \in ]-1, 1[$ et $t \in [0, +\infty[$, on a $u \in ]-1, 1[$. En substituant :
$$f(x) = \int_{0}^{+\infty} t^2 e^{-t} \sum_{k=0}^{+\infty} \frac{(2k)!}{2^{2k} (k!)^2} (2x\cos(t) - x^2)^k \, dt$$
Par le théorème d'intégration terme à terme (les hypothèses de sommation et d'intégration sur un intervalle quelconque étant validées par domination sur tout compact), on peut permuter somme et intégrale :
$$f(x) = \sum_{n=0}^{+\infty} a_n x^n$$
où les coefficients $a_n$ s'expriment en regroupant les puissances de $x$ issues du développement du binôme $(2x\cos(t) - x^2)^k$.

#### 3. Calcul des coefficients et rayon de convergence
a. Le terme général $a_n$ s'obtient en collectant les termes en $x^n$. Par un développement limité ou une formule de Faà di Bruno, $a_n$ est de la forme :
$$a_n = \int_{0}^{+\infty} t^2 e^{-t} P_n(\cos(t)) \, dt$$
où $P_n$ est un polynôme trigonométrique de degré $n$. 
Par majoration grossière, $|a_n| \le M^n$ pour une certaine constante $M > 0$, ce qui garantit que le rayon de convergence $R$ est supérieur ou égal à $1$.

b. Plus précisément, la singularité la plus proche de $0$ de la fonction sous l'intégrale survient lorsque le dénominateur s'annule, c'est-à-dire pour $1 - 2x\cos(t) + x^2 = 0$. Le minimum de cette expression par rapport à $t$ est atteint pour $\cos(t) = 1$, soit $(1-x)^2 = 0 \implies x = 1$. Par conséquent, la fonction présente une singularité en $x=1$. Le rayon de convergence de la série entière est donc **$R = 1$**.

#### 4. Analyse critique et limites du modèle physique
a. Lorsque $x \to 1^-$, le terme en $t=0$ du dénominateur disparaît et l'intégrale se comporte au voisinage de $0$ comme $\int_{0} \frac{t^2 e^{-t}}{t} dt = \int_{0} t e^{-t} dt$, qui converge. Cependant, la dérivée de $f(x)$ diverge en $1^-$, traduisant une transition critique dans le modèle (comportement non analytique aux limites).
b. **Ordre de grandeur :** Les coefficients $a_n$ n'exhibent pas de croissance factorielle car la singularité en $x=1$ est une singularité algébrique (liée à la racine carrée) et non un pôle simple ou un point de branchage exponentiel. Le modèle est donc numériquement stable pour $x \in [0, 0.9]$, mais nécessite un grand nombre de termes ($n > 100$) pour approcher les valeurs lorsque $x$ s'approche de $1$ en raison de la lenteur de convergence de la série entière sur le cercle de convergence.