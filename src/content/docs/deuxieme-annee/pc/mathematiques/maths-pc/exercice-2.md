---
title: 'Exercice 2 : Séries entières et équations diff'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ : Séries entières et équations différentielles

---

**Examinateur (CPGE - PC) :** Ce problème aborde un classique des concours (X-ENS, Mines-Ponts, Centrale-Supélec) : la résolution d'une équation différentielle linéaire du second ordre à coefficients non constants par la méthode des séries entières, couplée à l'étude des propriétés de la solution (convergence, comportement asymptotique) et à des considérations d'algèbre linéaire (dimension de l'espace des solutions développables en série entière). 

Prenez le temps de rédiger rigoureusement chaque étape. La maîtrise du rayon de convergence et des relations de récurrence est ici fondamentale.

---

## Énoncé du problème

On considère l'équation différentielle $(E)$ d'inconnue $y$ définie sur l'intervalle $I = ]-1, 1[$ :
$$(1-x^2)y''(x) - xy'(x) + \alpha^2 y(x) = 0$$
où $\alpha \in \mathbb{R}$ est un paramètre réel fixé.

L'objectif est de rechercher les solutions de $(E)$ développables en série entière au voisinage de $0$, c'est-à-dire sous la forme :
$$y(x) = \sum_{n=0}^{+\infty} a_n x^n$$

---

## Partie I : Analyse préliminaire et relation de récurrence

### Question 1
Supposons qu'il existe une solution $y(x) = \sum_{n=0}^{+\infty} a_n x^n$ de $(E)$ de rayon de convergence $R > 0$ (avec $R \le 1$). 
Rappeler l'expression des dérivées $y'(x)$ et $y''(x)$ sous forme de séries entières pour $x \in ]-R, R[$.

**Corrigé guidé :**
Puisqu'une série entière et ses dérivées successives ont le même rayon de convergence, pour tout $x \in ]-R, R[$, on a :
$$y'(x) = \sum_{n=1}^{+\infty} n a_n x^{n-1} = \sum_{n=0}^{+\infty} (n+1) a_{n+1} x^n$$
Et :
$$y''(x) = \sum_{n=2}^{+\infty} n(n-1) a_n x^{n-2} = \sum_{n=0}^{+\infty} (n+2)(n+1) a_{n+2} x^n$$

---

### Question 2
En injectant ces expressions dans l'équation $(E)$, montrer que la recherche d'une solution équivaut à une relation de récurrence simple entre les coefficients $a_n$.

**Corrigé guidé :**
En remplaçant $y$, $y'$ et $y''$ dans $(E)$, on obtient :
$$(1-x^2) \sum_{n=0}^{+\infty} (n+2)(n+1) a_{n+2} x^n - x \sum_{n=0}^{+\infty} (n+1) a_{n+1} x^n + \alpha^2 \sum_{n=0}^{+\infty} a_n x^n = 0$$

Développons le produit :
$$\sum_{n=0}^{+\infty} (n+2)(n+1) a_{n+2} x^n - \sum_{n=0}^{+\infty} (n+2)(n+1) a_{n+2} x^{n+2} - \sum_{n=0}^{+\infty} (n+1) a_{n+1} x^{n+1} + \alpha^2 \sum_{n=0}^{+\infty} a_n x^n = 0$$

Par un changement d'indice adéquat sur les deuxième et troisième sommes (posons $k = n+2$ pour la seconde et $k = n+1$ pour la troisième, puis renommons $k$ en $n$), ou en regroupant par puissances de $x$, on identifie les coefficients de $x^n$. 
Plus précisément, le coefficient de $x^n$ dans l'équation est :
$$(n+2)(n+1)a_{n+2} - n(n-1)a_n - n a_n + \alpha^2 a_n = 0$$
Soit, en factorisant le coefficient de $a_n$ :
$$(n+2)(n+1)a_{n+2} - (n^2 - \alpha^2) a_n = 0$$

On en déduit la relation de récurrence pour tout $n \in \mathbb{N}$ :
$$a_{n+2} = \frac{n^2 - \alpha^2}{(n+1)(n+2)} a_n \quad (R_\alpha)$$

---

## Partie II : Étude du rayon de convergence

### Question 3
À l'aide de la relation $(R_\alpha)$, déterminer le rayon de convergence $R$ de la série entière $\sum_{n=0}^{+\infty} a_n x^n$. On distinguera le cas général du cas particulier où $\alpha$ est un entier.

**Corrigé guidé :**
Exprimons $a_{2p}$ et $a_{2p+1}$ en fonction de $a_0$ et $a_1$ respectivement.
Pour les indices pairs :
$$\left|\frac{a_{2p+2}}{a_{2p}}\right| = \frac{|(2p)^2 - \alpha^2|}{(2p+1)(2p+2)} \underset{p \to +\infty}{\sim} \frac{4p^2}{4p^2} = 1$$

Par la règle de d'Alembert (ou par comparaison), le rayon de convergence $R$ associé aux termes pairs (et de même pour les termes impairs) vérifie :
$$\lim_{p \to +\infty} \left|\frac{a_{2p+2} x^{2p+2}}{a_{2p} x^{2p}}\right| = x^2 < 1 \implies R = 1$$

*Remarque d'examinateur :* Si $\alpha \in \mathbb{Z}$, l'un des coefficients s'annule (par exemple si $\alpha = 2k$, $a_{2k} = 0$), ce qui transforme la série entière en un polynôme, mais le rayon de convergence formel reste $R = 1$ (ou $+\infty$ pour le polynôme). Dans le cas général, $R = 1$, ce qui correspond exactement au domaine de validité de l'équation $(E)$ défini par $I = ]-1, 1[$.

---

## Partie III : Structure de l'espace des solutions

### Question 4
Montrer que l'ensemble des solutions de $(E)$ développables en série entière sur $]-\1, 1[$ forme un sous-espace vectoriel de $\mathbb{R}^I$, noté $\mathcal{S}$, et déterminer sa dimension.

**Corrigé guidé :**
* **Structure d'EV :** L'application $y \mapsto (1-x^2)y'' - xy' + \alpha^2 y$ est un opérateur linéaire. $\mathcal{S}$ est donc le noyau d'un endomorphisme linéaire, c'est un sous-espace vectoriel de $\mathbb{R}^I$.
* **Dimension :** D'après la relation de récurrence $(R_\alpha)$, tous les coefficients d'indice pair $a_{2p}$ sont entièrement déterminés par le choix de $a_0$. De même, tous les coefficients d'indice impair $a_{2p+1}$ sont déterminés par le choix de $a_1$.
Ainsi, toute solution développable s'écrit de manière unique :
$$y(x) = a_0 y_1(x) + a_1 y_2(x)$$
où $y_1$ est la solution obtenue pour $(a_0=1, a_1=0)$ (solution paire) et $y_2$ pour $(a_0=0, a_1=1)$ (solution impaire).
Puisque $(y_1, y_2)$ est une famille libre et génératrice de $\mathcal{S}$, on conclut que **$\dim(\mathcal{S}) = 2$**.

---

## Partie IV : Analyse critique et liens avec le cours

**Questions d'approfondissement (pour aller vers la mention Très Bien) :**

1. **Lien avec le théorème de Cauchy-Lipschitz :** 
   L'équation $(E)$ peut se réécrire sous forme normale $y'' - \frac{x}{1-x^2}y' + \frac{\alpha^2}{1-x^2}y = 0$. 
   Les fonctions $p(x) = -\frac{x}{1-x^2}$ et $q(x) = \frac{\alpha^2}{1-x^2}$ sont continues sur $]-1, 1[$. D'après le théorème de Cauchy-Lipschitz linéaire, pour tout $x_0 \in ]-1, 1[$ et tous $(y_0, y_1) \in \mathbb{R}^2$, il existe une **unique** solution maximale définie sur $]-1, 1[$. 
   Le fait que l'espace des solutions soit de dimension 2 est donc parfaitement cohérent avec la théorie générale des équations différentielles linéaires d'ordre 2.

2. **Cas particulier remarquable (Polynômes de Tchebychev / Légende) :**
   Si $\alpha = n$ (où $n \in \mathbb{N}$), la récurrence s'arrête : pour $p = n$, $a_{n+2} = 0$. 
   * Si $n$ est pair, $y_1(x)$ est un polynôme de degré $n$ (et $y_2$ reste une série entière infinie).
   * Si $n$ est impair, $y_2(x)$ est un polynôme de degré $n$.
   Ces solutions polynomiales jouent un rôle fondamental en analyse numérique (interpolation, approximation) et en physique mathématique.

---

**Bilan de l'examinateur :** Ce type d'exercice teste à la fois votre agilité calculatoire sur les séries entières (indices, décalages, rayon de convergence) et votre culture théorique (théorèmes d'existence, dimension d'un espace de solutions). Veillez à toujours bien expliciter le lien entre la récurrence sur les coefficients et la dimension de l'espace vectoriel associé.