---
title: 'Exercice 1 : Décomposition en éléments simples'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse asymptotique et Décomposition en Éléments Simples (DES)

*Ce problème s'inspire des méthodes d'analyse de signaux et de résolution d'équations différentielles par transformée de Laplace, où la maîtrise rigoureuse des fractions rationnelles est indispensable.*

---

## Énoncé

Soit $n \in \mathbb{N}^*$. On considère la fraction rationnelle $F_n(X) défini par :
$$F_n(X) = \frac{1}{X^n(X^n - 1)}$$

Dans le cadre d'une application en automatique, ce type de fonction de transfert modélise un système discret dont la réponse fréquentielle doit être analysée. L'objectif de ce problème est d'obtenir la décomposition en éléments simples (DES) de $F_n$ dans $\mathbb{C}(X)$, puis d'étudier le comportement asymptotique de ses coefficients pour des ordres de grandeur élevés ($n \to +\infty$), soulevant ainsi des problématiques de stabilité numérique.

---

## Questions

1. **Préliminaires et structure :** 
   Déterminer les pôles de $F_n$ dans $\mathbb{C}$ ainsi que leurs ordres de multiplicité respectifs. Quelle est la partie entière de $F_n$ ?

2. **Décomposition en $0$ :** 
   Expliciter la partie polaire associée au pôle $0$. *On pourra utiliser un changement de variable ou des divisions euclidiennes successives.*

3. **Décomposition sur les racines $n$-ièmes de l'unité :** 
   Soit $\omega = e^{2i\pi / k}$ pour $k \in \{0, 1, \dots, n-1\}$. On pose $x_k = e^{2i\pi k / n}$, qui sont les $n$ racines de $X^n - 1 = 0$. 
   Déterminer le coefficient associé à chaque pôle simple $x_k$ dans la DES de $F_n$.

4. **Synthèse et expression globale :** 
   Écrire la décomposition en éléments simples complète de $F_n(X)$ dans $\mathbb{C}(X)$.

5. **Analyse critique et limites du modèle :** 
   On s'intéresse à la valeur absolue du coefficient associé au pôle $x_k$ pour $k=1$ lorsque $n$ devient grand ($n \ge 10$). 
   * Évaluer l'ordre de grandeur de ce coefficient. 
   * Discuter des limites de l'utilisation numérique directe de cette formule pour des systèmes de grande dimension ($n \sim 100$).

---

## Pistes et Indications

* **Q1 :** Le dénominateur s'annule en $0$ et lorsque $X^n = 1$. Pensez aux racines $n$-ièmes de l'unité. Regardez le degré du numérateur par rapport au dénominateur pour la partie entière.
* **Q2 :** Écrivez $F_n(X)$ sous la forme $-\frac{1}{X^n} \frac{1}{1 - X^n}$ et utilisez le développement limité usuel de $(1 - U)^{-1}$ en $0$.
* **Q3 :** Pour un pôle simple $x_k$, la méthode standard consiste à évaluer $\frac{P(x)}{Q'(x)}$ où $F_n = P/Q$.
* **Q5 :** Utilisez les approximations trigonométriques usuelles pour de petits angles lorsque $n$ est grand.

---

## Corrigé pas à pas

### 1. Préliminaires et structure
Le dénominateur de $F_n$ est $Q(X) = X^n(X^n - 1)$.
Les racines de $Q(X) = 0$ sont :
* $0$ qui est une racine d'ordre $n$.
* Les solutions de $X^n = 1$, c'est-à-dire les racines $n$-ièmes de l'unité : $x_k = e^{\frac{2i\pi k}{n}}$ pour $k \in \{0, 1, \dots, n-1\}$. Chacune de ces racines est simple (ordre 1).

Le numérateur est constant (degré 0) et le dénominateur est de degré $2n$. Comme $0 < 2n$, **la partie entière de $F_n$ est nulle**.

### 2. Décomposition en $0$
Pour extraire la partie polaire associée au pôle $0$ (d'ordre $n$), réécrivons $F_n(X)$ :
$$F_n(X) = -\frac{1}{X^n} \frac{1}{1 - X^n}$$
Lorsque $X$ tend vers $0$, $X^n$ tend vers $0$. On utilise le développement limité (ou la somme d'une série géométrique) :
$$\frac{1}{1 - X^n} = \sum_{k=0}^{m} X^{nk} + o(X^{nm})$$
En multipliant par $-\frac{1}{X^n}$, on obtient la partie polaire en $0$ :
$$-\sum_{k=0}^{1} \frac{1}{X^{n(1-k)}} \dots$$ 
Plus rigoureusement, en effectuant la division selon les puissances croissantes, on constate que :
$$\frac{-1}{1-X^n} = -1 - X^n - X^{2n} - \dots$$
Donc en multipliant par $\frac{1}{X^n}$, la partie polaire relative au pôle $0$ est :
$$\sum_{j=1}^{n} -\frac{1}{X^j}$$
*(Attention, les termes de la forme $\frac{1}{X^{kn}}$ s'intègrent dans la partie polaire de $0$. Précisément, $\frac{1}{X^n(1-X^n)} = -\frac{1}{X^n} - 1 - X^n - \dots$, la partie polaire en $0$ est donc $-\frac{1}{X^n}$ si l'on regarde la décomposition standard, ou plus exactement, en posant $F_n(X) = \frac{A_n}{X^n} + \dots + \frac{A_1}{X} + \text{autres pôles}$, on trouve par division que les termes en $1/X^k$ pour $k=1 \dots n$ valent $-1$)*. Plus simplement, on a :
$$F_n(X) = -\sum_{j=1}^{n} \frac{1}{X^j} + \text{termes relatifs aux } x_k$$

### 3. Décomposition sur les racines $n$-ièmes de l'unité
Soit $x_k = e^{\frac{2i\pi k}{n}}$ avec $k \in \{1, \dots, n-1\}$ (le cas $k=0$ étant inclus dans le pôle $0$).
Puisque $x_k$ est un pôle simple de $F_n(X) = \frac{P(X)}{Q(X)}$, le coefficient $a_k$ associé à $x_k$ est donné par la formule du cours :
$$a_k = \frac{P(x_k)}{Q'(x_k)}$$
Ici, $P(X) = 1$ et $Q(X) = X^{2n} - X^n$, donc $Q'(X) = 2nX^{2n-1} - nX^{n-1}$.
Évaluons $Q'(x_k)$ sachant que $x_k^n = 1$ et $x_k^{2n} = 1$ :
$$Q'(x_k) = 2n(x_k^n) x_k^{-1} - n(x_k^n) x_k^{-1} = n x_k^n x_k^{-1} = n(1)x_k^{-1} = n x_k^{-1}$$
Ainsi :
$$a_k = \frac{1}{n x_k^{-1}} = \frac{x_k}{n} = \frac{e^{\frac{2i\pi k}{n}}}{n}$$

### 4. Synthèse et expression globale
La décomposition en éléments simples de $F_n(X)$ dans $\mathbb{C}(X)$ s'écrit :
$$F_n(X) = -\sum_{j=1}^{n} \frac{1}{X^j} + \sum_{k=1}^{n-1} \frac{e^{\frac{2i\pi k}{n}}}{n(X - e^{\frac{2i\pi k}{n}})}$$

### 5. Analyse critique et limites du modèle
* **Ordre de grandeur :** 
  Pour $k=1$, le module du coefficient est $|a_1| = \left|\frac{e^{2i\pi/n}}{n}\right| = \frac{1}{n}$. 
  Cependant, si l'on regarde de plus près les coefficients pour des ordres élevés ou si l'on évalue la sensibilité près des pôles, la somme comporte $n$ termes dont les phases tournent rapidement. 
* **Limites du modèle (Instabilité numérique) :** 
  Pour un système de grande dimension ($n \sim 100$), les pôles $x_k$ sont extrêmement proches les uns des autres sur le cercle unité (l'arc séparant deux pôles consécutifs mesure $\frac{2\pi}{100} \approx 0.063$ radians). 
  * *Sensibilité aux erreurs d'arrondi :* Dans une implementation sur ordinateur en virgule flottante (flottants 64 bits), l'évaluation numérique de cette DES souffre de phénomènes catastrophiques de **cancellation numérique** (soustraction de nombres complexes très proches de module 1). 
  * *Conclusion pratique :* Bien que la solution analytique soit exacte, le calcul numérique direct via cette DES est mal conditionné pour $n > 50$. D'autres représentations (comme l'espace d'état sous forme compagnon) sont préférées en automatique pour éviter cette explosion de l'erreur numérique.