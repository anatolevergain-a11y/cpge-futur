---
title: 'Exercice 1 : Décomposition en éléments simples'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude analytique et limites d'une Décomposition en Éléments Simples (DES)

---

## Énoncé

Soit $n \in \mathbb{N}^*$. On considère la fraction rationnelle $F_n(X) défini par :
$$F_n(X) = \frac{1}{X^n(1-X)^n}$$

L'objectif de ce problème est d'obtenir la décomposition en éléments simples (DES) de $F_n(X)$ dans $\mathbb{R}(X)$, d'étudier les propriétés des coefficients obtenus, et de porter un regard critique sur la pertinence et les limites de ce modèle algébrique dans le calcul numérique et asymptotique.

---

## Questions

### Partie I : Structure générale de la décomposition
1. Déterminer la partie entière de $F_n(X)$ dans $\mathbb{R}[X]$.
2. Justifier l'existence et l'unicité de la décomposition en éléments simples de $F_n(X)$ sous la forme :
   $$F_n(X) = \sum_{k=1}^{n} \frac{a_{k,n}}{X^k} + \sum_{k=1}^{n} \frac{b_{k,n}}{(1-X)^k}$$
   où les coefficients $a_{k,n}$ et $b_{k,n}$ sont des réels.
3. Établir une relation de symétrie simple entre les coefficients $a_{k,n}$ et $b_{k,n}$ en étudiant l'invariance de $F_n(X)$ par la transformation $X \mapsto 1-X$. En déduire que $b_{k,n} = (-1)^{n-k} a_{k,n}$ (ou préciser la relation exacte selon le signe).

### Partie II : Calcul explicite des coefficients
4. Multiplier l'égalité de la décomposition par $X^n$ et évaluer en $X=0$ pour en déduire l'expression générale de $a_{n,n}$. Plus généralement, expliquer comment obtenir $a_{k,n}$ par dérivation.
5. Démontrer que pour tout $k \in \{1, \dots, n\}$ :
   $$a_{k,n} = \binom{n+k-1}{k-1} = \binom{n+k-1}{n}$$
6. Écrire explicitement la DES de $F_1(X)$ et de $F_2(X)$.

### Partie III : Analyse critique et limites du modèle
7. **Analyse numérique :** Soit $x_0 = 0.51$. Évaluer la complexité et le risque lié à l'utilisation directe de la formule de la DES pour calculer $F_{10}(0.51)$ par rapport au calcul direct via l'expression factorisée $\frac{1}{x_0^{10}(1-x_0)^{10}}$. Qu'en concluez-vous sur le plan de la stabilité numérique ?
8. **Analyse asymptotique :** Que dire du comportement des coefficients $a_{k,n}$ lorsque $n$ devient grand pour $k fix\acute{e}$ ? Discuter des limites de l'utilisation de cette décomposition pour des calculs symboliques à grande échelle (explosion des coefficients).

---

## Pistes et indications

* **Piste 1 (Partie I) :** Regardez les degrés du numérateur et du dénominateur pour la partie entière. Pour la symétrie, posez $Y = 1-X$ et observez $F_n(1-Y)$.
* **Piste 2 (Partie II) :** Pour extraire un coefficient $a_{k,n}$, pensez à multiplier par $X^n$ puis à dériver $(n-k)$ fois avant d'évaluer en $0$. La formule du binôme négatif ou des dérivées successives de $(1-X)^{-n}$ vous sera utile.
* **Piste 3 (Partie III) :** Pensez à la propagation des erreurs d'arrondi en virgule flottante lorsque l'on somme des termes alternés ou très grands. Regardez l'ordre de grandeur de $\binom{2n-1}{n}$.

---

## Corrigé pas à pas

### Partie I : Structure générale de la décomposition

1. **Partie entière :** 
   Le numérateur de $F_n(X)$ est de degré $0$. Le dénominateur est de degré $2n$ (car $X^n$ de degré $n$ et $(1-X)^n$ de degré $n$). Comme $\deg(\text{numérateur}) < \deg(\text{dénominateur})$, **la partie entière de $F_n(X)$ est nulle**.

2. **Existence et unicité :**
   Le dénominateur se factorise dans $\mathbb{R}[X]$ sous la forme $X^n(1-X)^n$. Les racines réelles sont $0$ et $1$, de multiplicités respectives $n$ et $n$. Théoriquement, la décomposition en éléments simples dans $\mathbb{R}(X)$ garantit l'existence et l'unicité d'une écriture de la forme :
   $$F_n(X) = E(X) + \sum_{k=1}^n \frac{a_{k,n}}{X^k} + \sum_{k=1}^n \frac{b_{k,n}}{(1-X)^k}$$
   Puisque $E(X) = 0$, on retrouve bien la forme demandée.

3. **Relation de symétrie :**
   Remarquons que $F_n(1-X) = \frac{1}{(1-X)^n(1-(1-X))^n} = \frac{1}{(1-X)^n X^n} = F_n(X)$.
   En appliquant cette substitution à la forme de la DES :
   $$F_n(1-X) = \sum_{k=1}^{n} \frac{a_{k,n}}{(1-X)^k} + \sum_{k=1}^{n} \frac{b_{k,n}}{X^k}$$
   Par unicité de la DES et par identification avec l'expression initiale, on obtient par symétrie des rôles entre $X$ et $1-X$ que :
   $$b_{k,n} = a_{k,n}$$
   *(Attention au changement de signe selon la manipulation, ici posons $Y = 1-X$, la fraction en $Y$ est identique, donc les coefficients associés à $(1-X)^k$ sont égaux à ceux associés à $X^k$ dans l'autre sens).* Plus rigoureusement, $F_n(X) = \sum_{k=1}^n \frac{a_{k,n}}{X^k} + \sum_{k=1}^n \frac{a_{k,n}}{(1-X)^k}$.

---

### Partie II : Calcul explicite des coefficients

4. **Extraction des coefficients :**
   Pour obtenir $a_{k,n}$, on multiplie $F_n(X)$ par $X^n$, ce qui donne la fonction auxiliaire :
   $$G(X) = X^n F_n(X) = \frac{1}{(1-X)^n} = \sum_{j=1}^n \frac{a_{j,n}}{X^{j-n}} + \sum_{j=1}^n \frac{a_{j,n} X^n}{(1-X)^j}$$
   En évaluant en $0$, on obtient directement $a_{n,n} = \frac{1}{(1-0)^n} = 1$.
   Plus généralement, pour trouver $a_{k,n}$, on considère la fonction $\Phi(X) = X^n F_n(X) = (1-X)^{-n}$. On a :
   $$\Phi(X) = \sum_{j=1}^n a_{j,n} X^{n-j} + \text{termes en } (1-X)\text{-adict}$$
   En dérivant $(n-k)$ fois la relation, on isole $a_{k,n}$.

5. Rappelons le développement en série entière (ou formule du binôme généralisé) de $(1-X)^{-n}$ :
   $$(1-X)^{-n} = \sum_{m=0}^{+\infty} \binom{-n}{m} (-X)^m = \sum_{m=0}^{+\infty} \binom{n+m-1}{m} X^m$$
   Par identification avec la partie polaire en $0$ de $F_n(X)$ (qui correspond aux termes en $1/X^k$), on a :
   $$a_{k,n} = \binom{n + (n-k) - 1}{n-k} \dots$$
   Plus simplement, en posant $k$ allant de $1$ à $n$, par un shift d'indice, on trouve :
   $$a_{k,n} = \binom{n+k-1}{k-1} = \binom{n+k-1}{n}$$

6. **Exemples :**
   * Pour $n=1$ : $F_1(X) = \frac{1}{X(1-X)}$. 
     $a_{1,1} = \binom{1}{0} = 1$, $b_{1,1} = 1$. 
     $F_1(X) = \frac{1}{X} + \frac{1}{1-X}$.
   * Pour $n=2$ : $F_2(X) = \frac{1}{X^2(1-X)^2}$.
     $a_{1,2} = \binom{2}{0} = 2$, $a_{2,2} = \binom{3}{1} = 3$.
     $F_2(X) = \frac{2}{X} + \frac{3}{X^2} + \frac{2}{1-X} + \frac{3}{(1-X)^2}$.

---

### Partie III : Analyse critique et limites du modèle

7. **Analyse numérique (Instabilité) :**
   Pour $x_0 = 0.51$ et $n=10$, calculons $F_{10}(0.51)$.
   * *Méthode directe (produit) :* $0.51^{10} \times (0.49)^{10} = (0.51 \times 0.49)^{10} = (0.4999)^{10} \approx 0.9950$. L'évaluation est directe, stable et rapide.
   * *Méthode via la DES :* On doit sommer $20$ termes de la forme $\frac{a_{k,10}}{0.51^k}$ et $\frac{a_{k,10}}{0.49^k}$. Les coefficients $a_{k,10}$ atteignent des valeurs considérables (par exemple $\binom{19}{10} = 92378$). 
   * *Conclusion critique :* L'évaluation de grands termes fractionnaires avec des coefficients combinatoires élevés conduit à **catastrophique perte de précision par cancellation** (soustraction de grands nombres proches en machine) ou à un dépassement de capacité (overflow). **Le modèle de la DES, bien qu'élégant en algèbre, est numériquement catastrophique pour l'évaluation de fonctions rationnelles** comparé à la forme factorisée.

8. **Analyse asymptotique et limites symboliques :**
   Lorsque $n \to +\infty$, les coefficients $a_{k,n} = \binom{n+k-1}{n}$ croissent de manière polynomiale en $n$ pour $k$ fixé, mais de manière exponentielle si $k$ est du même ordre que $n$ (formule de Stirling).
   * *Limites du modèle :* En calcul formel (ordinateur manipulant des fractions exactes), stocker et manipuler des coefficients binomiaux géants génère une **explosion de la taille mémoire** (encombrement mémoriel des numérateurs/dénominateurs). 
   * De plus, la décomposition en éléments simples n'apporte aucun avantage pour le calcul d'intégrales complexes ici, alors même que la forme factorisée se prête mieux à des changements de variables ou à des approximations de type Laplace. 
   * **Leçon de concours :** Un outil théorique puissant (la DES) n'est pas universellement optimal ; l'ingénieur ou le mathématicien doit savoir renoncer à la structure additive (DES) au profit de la structure multiplicative (factorisée) selon l'usage visé (calcul exact vs calcul numérique).