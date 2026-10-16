---
title: 'Exercice 1 : Normes équivalentes'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $E$ un $\mathbb{K}$-espace vectoriel ($\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$). On rappelle qu'une norme sur $E$ est une application $N : E \to \mathbb{R}_+$ satisfaisant la séparation, l'homogénéité et l'inégalité triangulaire. Deux normes $N_1$ et $N_2$ sur $E$ sont dites **équivalentes** s'il existe des constantes réelles strictement positives $c$ et $C$ telles que :
$$\forall x \in E, \quad c N_1(x) \le N_2(x) \le C N_1(x)$$

Ce problème s'intéresse à la comparaison de normes sur des espaces de suites ou de fonctions, en distinguant le cas de dimension finie et le cas crucial de dimension infinie où toutes les normes ne sont pas équivalentes. On pose $E = \mathcal{C}([0,1], \mathbb{R})$ muni de la norme infinie $\|f\|_\infty = \sup_{t \in [0,1]} |f(t)|$ et de la norme $1$ définie par $\|f\|_1 = \int_0^1 |f(t)| \, \text{d}t$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **(Q1)** Démontrer que pour toute fonction $f \in \mathcal{C}([0,1], \mathbb{R})$, on a l'inégalité $\|f\|_1 \le \|f\|_\infty$.
2. **(Q2)** Les normes $\|\cdot\|_1$ et $\|\cdot\|_\infty$ sont-elles équivalentes sur l'espace $E = \mathcal{C}([0,1], \mathbb{R})$ ? On construira pour cela une suite judicieuse de fonctions continues.
3. **(Q3)** Soit $F$ un sous-espace vectoriel de dimension finie d'un $\mathbb{K}$-espace vectoriel normé $(E, \|\cdot\|)$. Démontrer que toutes les normes sur $F$ sont équivalentes. *(On pourra utiliser une base de $F$ et la compacité de la sphère unité pour la norme infinie associée).*
4. **(Q4)** **Analyse critique du modèle :** Expliquer pourquoi le résultat de la question (Q3) en dimension finie ne contredit pas le résultat de la question (Q2). Quel théorème fondamental d'analyse fonctionnelle relie la dimension d'un EVN et l'équivalence de toutes ses normes ?

---

### 💡 Pistes & Indications méthodologiques

* **Pour (Q1)** : Majorez la valeur absolue de l'intégrale par l'intégrale de la valeur absolue, puis majorez la fonction par sa norme infinie sur le segment $[0,1]$.
* **Pour (Q2)** : Raisonnez par l'absurde en supposant l'existence d'une constante $C > 0$ telle que $\|f\|_\infty \le C \|f\|_1$ pour tout $f$. Construisez une suite de "chapeaux" triangulaires dont l'aire tend vers $0$ tandis que le maximum reste égal à $1$.
* **Pour (Q3)** : Soit $(e_1, \dots, e_n)$ une base de $F$. Tout vecteur $x = \sum_{i=1}^n x_i e_i$ peut être normé via la norme 1 des coefficients $\|x\|_1' = \sum_{i=1}^n |x_i|$. Utilisez l'inégalité triangulaire pour montrer la continuité de toute norme par rapport à cette norme, puis invoquez le théorème de Bolzano-Weierstrass (compacité de la sphère unité).
* **Pour (Q4)** : Rappelez la définition de la dimension d'un espace vectoriel normé et citez le théorème de Riesz.

---

### 📋 Corrigé détaillé pas à pas

#### Corrigé de (Q1)
Soit $f \in \mathcal{C}([0,1], \mathbb{R})$. Par définition de la norme infinie :
$$\forall t \in [0,1], \quad |f(t)| \le \|f\|_\infty$$
En intégrant cette inégalité sur le segment $[0,1]$ (qui est orienté dans le sens direct), il vient :
$$\int_0^1 |f(t)| \, \text{d}t \le \int_0^1 \|f\|_\infty \, \text{d}t = \|f\|_\infty \int_0^1 1 \, \text{d}t = \|f\|_\infty$$
Ainsi, **$\|f\|_1 \le \|f\|_\infty$**. La première constante d'équivalence $c = 1$ convient.

---

#### Corrigé de (Q2)
Supposons par l'absurde qu'il existe une constante $C > 0$ telle que :
$$\forall f \in \mathcal{C}([0,1], \mathbb{R}), \quad \|f\|_\infty \le C \|f\|_1$$
Pour tout entier $n \ge 1$, construisons la fonction continue $f_n$ définie graphiquement par un "pic" triangulaire de hauteur $1$ sur l'intervalle $[0, \frac{1}{n}]$ :
* $f_n(t) = 1 - n t$ si $t \in [0, \frac{1}{n}]$
* $f_n(t) = 0$ si $t \in [\frac{1}{n}, 1]$

Clairement, $f_n \in \mathcal{C}([0,1], \mathbb{R})$ et sa valeur maximale est atteinte en $0$, donc $\|f_n\|_\infty = 1$.
Calculons sa norme $1$ :
$$\|f_n\|_1 = \int_0^{1/n} (1 - nt) \, \text{d}t = \left[ t - \frac{n t^2}{2} \right]_0^{1/n} = \frac{1}{n} - \frac{1}{2n} = \frac{1}{2n}$$
L'inégalité supposée appliquée à $f_n$ donne :
$$1 = \|f_n\|_\infty \le C \|f_n\|_1 = \frac{C}{2n}$$
En passant à la limite lorsque $n \to +\infty$, on obtient $1 \le 0$, ce qui est absurde.
Conclusion: ** Les normes $\|\cdot\|_1$ et $\|\cdot\|_\infty$ ne sont **pas équivalentes** sur $\mathcal{C}([0,1], \mathbb{R})$.

---

#### Corrigé de (Q3)
Soit $F$ un $\mathbb{K}$-espace vectoriel de dimension finie $n \ge 1$ muni d'une base $(e_1, \dots, e_n)$. 
Soit $N$ une norme quelconque sur $F$. Tout vecteur $x \in F$ s'écrit de manière unique $x = \sum_{i=1}^n x_i e_i$. Introduisons la norme auxiliaire sur $F$ définie par :
$$\forall x = \sum_{i=1}^n x_i e_i \in F, \quad N_1(x) = \sum_{i=1}^n |x_i|$$
Par l'inégalité triangulaire et l'homogénéité de la norme $N$ :
$$N(x) = N\left(\sum_{i=1}^n x_i e_i\right) \le \sum_{i=1}^n |x_i| N(e_i) \le \left(\max_{1 \le i \le n} N(e_i)\right) N_1(x)$$
En posant $M = \max_{1 \le i \le n} N(e_i) > 0$, on a $N(x) \le M N_1(x)$ (première domination).

D'autre part, l'application $x \mapsto N(x)$ est 1-lipschitzienne pour la norme $N_1$ car :
$$|N(x) - N(y)| \le N(x-y) \le M N_1(x-y)$$
La sphère unité $S_1 = \{x \in F \mid N_1(x) = 1\}$ est fermée et bornée dans un espace de dimension finie isomorphe à $\mathbb{K}^n$, elle est donc **compacte** (théorème de Bolzano-Weierstrass).
Puisque $N$ est continue sur $S_1$ (car lipschitzienne) et que $S_1$ est compact, $N$ atteint ses bornes sur $S_1$. En particulier, elle y atteint son minimum :
$$m = \inf_{x \in S_1} N(x) > 0$$
(Le minimum est strictement positif car $N(x) = 0 \implies x = 0$, or $0 \notin S_1$).
Ainsi, pour tout $x \in F \setminus \{0\}$, en posant $u = \frac{x}{N_1(x)} \in S_1$, on a :
$$N(u) \ge m \implies \frac{N(x)}{N_1(x)} \ge m \implies N_1(x) \le \frac{1}{m} N(x)$$
On a donc montré l'équivalence entre $N$ et $N_1$. Par transitivité, toutes les normes sur $F$ sont équivalentes.

---

#### Corrigé de (Q4)
* **Analyse critique :** L'espace $\mathcal{C}([0,1], \mathbb{R})$ est de **dimension infinie**. Le résultat de la question (Q3) s'applique exclusivement aux espaces vectoriels de dimension finie. Il n'y a donc aucune contradiction.
* **Théorème fondamental (Riesz) :** Un espace vectoriel normé est de dimension finie si et seulement si sa boule unité fermée est compacte, ce qui équivaut également au fait que **toutes ses normes sont équivalentes**. En dimension infinie, il existe toujours des normes non équivalentes (comme mis en évidence à la question Q2).