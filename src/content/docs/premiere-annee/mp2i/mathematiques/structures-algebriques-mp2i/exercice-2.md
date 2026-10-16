---
title: 'Problème : Automorphismes et Arithmétique des Polynômes'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $p$ un nombre premier impair. On note $\mathbb{F}_p$ le corps des entiers modulo $p$, que l'on identifiera canoniquement à l'anneau $\mathbb{Z}/p\mathbb{Z}$. On considère l'anneau des polynômes $\mathbb{F}_p[X]$.

L'objectif de ce problème est d'étudier certaines propriétés arithmétiques des polynômes de $\mathbb{F}_p[X]$ ainsi que les endomorphismes de cet anneau, en particulier l'endomorphisme de Frobenius.

---

### ❓ Questions progressives

1. **Préliminaires : Le morphisme de Frobenius**
   a) Montrer que pour tous $(a, b) \in (\mathbb{F}_p[X])^2$, on a l'égalité $(a + b)^p = a^p + b^p$ dans $\mathbb{F}_p[X]$. (On pourra utiliser la formule du binôme de Newton et rappeler le rôle de la caractéristique $p$).
   b) En déduire que l'application $\sigma : \mathbb{F}_p[X] \to \mathbb{F}_p[X]$ définie par $\sigma(P) = P^p$ est un endomorphisme d'anneau.

2. **Divisibilité et racines dans $\mathbb{F}_p[X]$**
   a) Soit $a \in \mathbb{F}_p$. Rappeler le théorème de Fermat pour les éléments de $\mathbb{F}_p$. En déduire que le polynôme $X^p - X$ s'annule en tout point de $\mathbb{F}_p$.
   b) Décomposer le polynôme $X^p - X$ en produit de polynômes irréductibles de $\mathbb{F}_p[X]$. Justifier soigneusement.

3. **PGCD et polynômes premiers entre eux**
   a) Soit $P \in \mathbb{F}_p[X]$. Montrer que $P$ et $P'$ (le polynôme dérivé de $P$) ont un facteur commun non trivial dans $\mathbb{F}_p[X]$ si et seulement si $P$ possède une racine multiple dans une extension close, ou plus simplement si $P$ et $P'$ ne sont pas premiers entre eux dans $\mathbb{F}_p[X]$.
   b) Déterminer le PGCD de $X^p - X$ et de son polynôme dérivé dans $\mathbb{F}_p[X]$.

4. **Application arithmétique**
   Soit $n \in \mathbb{N}^*$. On considère le polynôme $Q_n = X^{p^n} - X \in \mathbb{F}_p[X]$.
   a) Quel est le degré de $Q_n$ ?
   b) En utilisant les questions précédentes, déterminer le nombre de racines distinctes de $Q_n$ dans $\mathbb{F}_p$. (Attention au corps de base).

---

### 💡 Pistes & Indications méthodologiques

- **Q1 :** Pensez aux coefficients binomiaux $\binom{p}{k}$ pour $0 < k < p$ et à leur divisibilité par $p$ dans $\mathbb{Z}$, qui se transmet à l'anneau des polynômes.
- **Q2 :** Comptez le nombre de racines évidentes de $X^p - X$ dans le corps $\mathbb{F}_p$ et utilisez le degré du polynôme pour conclure sur sa factorisation.
- **Q3 :** Le calcul de la dérivée de $X^p - X$ est immédiat. Utilisez l'algorithme d'Euclide ou la définition du PGCD.
- **Q4 :** L'application $\sigma$ itérée $\sigma^n(P) = P^{p^n}$ permet de lier les racines de $Q_n$ aux éléments invariants par un certain endomorphisme.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Préliminaires : Le morphisme de Frobenius
a) Soit $(a, b) \in (\mathbb{F}_p[X])^2$. Par la formule du binôme de Newton :
$$(a + b)^p = \sum_{k=0}^{p} \binom{p}{k} a^k b^{p-k}$$
Dans l'anneau $\mathbb{Z}$, pour tout $k \in \{1, \dots, p-1\}$, le coefficient binomial $\binom{p}{k} = \frac{p!}{k!(p-k)!}$ est divisible par $p$ car $p$ est premier et ne divise ni $k!$ ni $(p-k)!$. 
Puisque le corps $\mathbb{F}_p$ est de caractéristique $p$, tous ces coefficients intermédiaires sont nuls dans $\mathbb{F}_p[X]$. Par conséquent :
$$(a + b)^p = a^p + \binom{p}{0}a^0b^p = a^p + b^p$$

b) Montrons que $\sigma$ est un endomorphisme de l'anneau $\mathbb{F}_p[X]$ :
- **Préservation de l'addition :** C'est le résultat de la question 1.a : $\sigma(a + b) = (a+b)^p = a^p + b^p = \sigma(a) + \sigma(b)$.
- **Préservation de la multiplication :** Pour tous $a, b \in \mathbb{F}_p[X]$, $\sigma(ab) = (ab)^p = a^p b^p = \sigma(a)\sigma(b)$ (car la multiplication est commutative dans $\mathbb{F}_p[X]$).
- **Préservation de l'unité :** $\sigma(1) = 1^p = 1$.
L'application $\sigma$ est donc bien un endomorphisme d'anneau, appelé **endomorphisme de Frobenius**.

---

#### 2. Divisibilité et racines dans $\mathbb{F}_p[X]$
a) D'après le petit théorème de Fermat, pour tout $a \in \mathbb{F}_p$, on a $a^p \equiv a \pmod p$, c'est-à-dire $a^p - a = 0$. 
Ainsi, tous les éléments de $\mathbb{F}_p$ (qui sont au nombre de $p$) sont des racines distinctes du polynôme $X^p - X$.

b) Le polynôme $P = X^p - X$ est de degré $p$ et possède $p$ racines distinctes dans $\mathbb{F}_p$, à savoir les $p$ éléments du corps. 
Puisque $\mathbb{F}_p[X]$ est factoriel et que tout polynôme de degré $d$ ayant $d$ racines distinctes est scindé à racines simples, $X^p - X$ se factorise sous la forme :
$$X^p - X = \prod_{a \in \mathbb{F}_p} (X - a)$$

---

#### 3. PGCD et polynômes premiers entre eux
a) Soit $P \in \mathbb{F}_p[X]$. Dire que $P$ et $P'$ ont un facteur commun non trivial dans $\mathbb{F}_p[X]$ équivaut à dire que leur PGCD n'est pas constant, ce qui signifie l'existence d'une racine commune à $P$ et $P'$ dans une extension algébrique close de $\mathbb{F}_p$. Une telle racine est alors une racine multiple de $P$.

b) Calculons la dérivée du polynôme $X^p - X$ dans $\mathbb{F}_p[X]$ :
$$(X^p - X)' = pX^{p-1} - 1$$
Comme nous sommes dans $\mathbb{F}_p[X]$, la caractéristique est $p$, donc $p \equiv 0 \pmod p$. Le polynôme dérivé se simplifie en :
$$(X^p - X)' = -1$$
Le polynôme dérivé est donc une constante non nulle (égale à $-1$). 
Puisque le polynôme dérivé est inversible dans $\mathbb{F}_p[X]$ (c'est une constante non nulle), il est premier avec $X^p - X$. 
Par conséquent :
$$\text{PGCD}(X^p - X, X^p - X') = \text{PGCD}(X^p - X, -1) = 1$$
*(Remarque : Ceci confirme par le calcul que $X^p - X$ n'a que des racines simples).*

---

#### 4. Application arithmétique
a) Le polynôme $Q_n$ est défini par $Q_n = X^{p^n} - X$. Son degré est clairement ** $p^n$ **.

b) Cherchons les racines de $Q_n$ dans le corps $\mathbb{F}_p$. 
Une racine de $Q_n$ dans $\mathbb{F}_p$ est un élément $x \in \mathbb{F}_p$ tel que $x^{p^n} = x$.
Par une récurrence immédiate basée sur le petit théorème de Fermat, pour tout $x \in \mathbb{F}_p$ et pour tout $n \in \mathbb{N}^*$, on a $x^{p^n} = x$. 
Par conséquent, **tous** les éléments de $\mathbb{F}_p$ sont racines de $Q_n$. 
Le polynôme $Q_n$ étant de degré $p^n$, il possède au plus $p^n$ racines dans une extension de $\mathbb{F}_p$, mais dans le corps de base $\mathbb{F}_p$, il possède exactement **$p$ racines** (qui sont les $p$ éléments de $\mathbb{F}_p$).