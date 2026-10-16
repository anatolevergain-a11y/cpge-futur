---
title: 'Exercice 2 : Calcul d intégrales et ED'
description: 'Problème d entraînement type concours.'
---

# Concours CPGE (PTSI) — Mathématiques
## Analyse réelle et intégration : Calcul d'intégrales et Équations Différentielles

---

### Introduction et consignes de l'examinateur

> *Ce problème guidé est conçu dans l'esprit des épreuves écrites de la filière PTSI. Il aborde l'étude d'une suite d'intégrales, son lien avec une fonction génératrice, et la résolution d'une équation différentielle linéaire. L'accent est mis sur la rigueur de la rédaction, la maîtrise des techniques d'intégration (intégration par parties, changement de variable) et l'analyse critique des résultats obtenus.*

---

### Partie I : Étude d'une suite d'intégrales

Pour tout entier naturel $n \in \mathbb{N}$, on définit l'intégrale $I_n$ par :
$$I_n = \int_{0}^{\pi/2} \sin^n(t) \, \text{d}t$$

#### Question 1
Calculer $I_0$ et $I_1$.

**Corrigé :**
* Pour $n = 0$ :
  $$I_0 = \int_{0}^{\pi/2} 1 \, \text{d}t = \left[ t \right]_{0}^{\pi/2} = \frac{\pi}{2}$$
* Pour $n = 1$ :
  $$I_1 = \int_{0}^{\pi/2} \sin(t) \, \text{d}t = \left[ -\cos(t) \right]_{0}^{\pi/2} = -\cos\left(\frac{\pi}{2}\right) - (-\cos(0)) = 0 + 1 = 1$$

---

#### Question 2
À l'aide d'une intégration par parties, établir une relation de récurrence entre $I_n$ et $I_{n-2}$ pour tout entier $n \ge 2$.

**Corrigé :**
Soit $n \ge 2$. On écrit $\sin^n(t) = \sin(t) \times \sin^{n-1}(t)$. On pose :
* $u(t) = \sin^{n-1}(t) \implies u'(t) = (n-1)\cos(t)\sin^{n-2}(t)$
* $v'(t) = \sin(t) \implies v(t) = -\cos(t)$

Les fonctions $u$ et $v$ sont de classe $\mathcal{C}^1$ sur $[0, \pi/2]$. Par integration par parties :
$$I_n = \left[ -\cos(t)\sin^{n-1}(t) \right]_{0}^{\pi/2} + (n-1) \int_{0}^{\pi/2} \cos^2(t)\sin^{n-2}(t) \, \text{d}t$$

Le terme tout intégré s'annule en $\pi/2$ (car $\cos(\pi/2) = 0$) et en $0$ (car $\sin(0) = 0$). Ainsi :
$$I_n = (n-1) \int_{0}^{\pi/2} (1 - \sin^2(t))\sin^{n-2}(t) \, \text{d}t$$
$$I_n = (n-1) \left( \int_{0}^{\pi/2} \sin^{n-2}(t) \, \text{d}t - \int_{0}^{\pi/2} \sin^n(t) \, \text{d}t \right)$$
$$I_n = (n-1)I_{n-2} - (n-1)I_n$$

En regroupant les termes en $nI_n$ :
$$nI_n = (n-1)I_{n-2} \implies I_n = \frac{n-1}{n} I_{n-2}$$

---

### Partie II : Lien avec une équation différentielle

On considère l'équation différentielle $(E)$ d'inconnue $y$ fonction de la variable réelle $x$, définie sur l'intervalle $]0, 1[$ :
$$(1 - x^2)y''(x) - x y'(x) + 4y(x) = 0$$

#### Question 3
On cherche une solution de $(E)$ sous la forme d'une série entière $\sum_{n=0}^{+\infty} a_n x^n$ de rayon de convergence $R > 0$.
Déterminer la relation de récurrence entre les coefficients $a_n$.

**Corrigé :**
Soit $y(x) = \sum_{n=0}^{+\infty} a_n x^n$. Supposons $R > 0$. Sur l'intervalle $]-R, R[$, on peut dériver terme à terme :
* $y'(x) = \sum_{n=1}^{+\infty} n a_n x^{n-1} = \sum_{n=0}^{+\infty} (n+1)a_{n+1} x^n$
* $y''(x) = \sum_{n=2}^{+\infty} n(n-1) a_n x^{n-2} = \sum_{n=0}^{+\infty} (n+2)(n+1)a_{n+2} x^n$

Substituons ces expressions dans l'équation $(E)$ :
$$(1 - x^2)\sum_{n=0}^{+\infty} (n+2)(n+1)a_{n+2} x^n - x\sum_{n=0}^{+\infty} (n+1)a_{n+1} x^n + 4\sum_{n=0}^{+\infty} a_n x^n = 0$$

$$\sum_{n=0}^{+\infty} (n+2)(n+1)a_{n+2} x^n - \sum_{n=0}^{+\infty} (n+2)(n+1)a_{n+2} x^{n+2} - \sum_{n=0}^{+\infty} (n+1)a_{n+1} x^{n+1} + \sum_{n=0}^{+\infty} 4a_n x^n = 0$$

Par un changement d'indice dans les sommes (posant $k = n+2$ dans la deuxième et $k = n+1$ dans la troisième), ou en identifiant les coefficients de $x^n$ pour $n \ge 2$ :
Le coefficient de $x^n$ est :
$$(n+2)(n+1)a_{n+2} - n(n-1)a_n - n a_n + 4a_n = 0$$
$$(n+2)(n+1)a_{n+2} + (-n^2 + n - n + 4)a_n = 0$$
$$(n+2)(n+1)a_{n+2} + (4 - n^2)a_n = 0$$

D'où la relation de récurrence valable pour tout $n \ge 0$ :
$$a_{n+2} = \frac{n^2 - 4}{(n+1)(n+2)} a_n$$

---

#### Question 4
En déduire l'expression explicite des coefficients $a_n$ en fonction de $a_0$ et $a_1$. Que remarque-t-on pour $a_2$ ?

**Corrigé :**
* Pour $n = 0$ :
  $$a_2 = \frac{0 - 4}{1 \times 2} a_0 = -2a_0$$
* Pour $n = 2$ :
  $$a_4 = \frac{2^2 - 4}{(3)(4)} a_2 = 0 \times a_2 = 0$$
* Par récurrence immédiate, comme $a_4 = 0$, tous les coefficients d'indice pair $a_{2k}$ pour $k \ge 2$ sont nuls :
  $$a_0 \neq 0, \quad a_2 = -2a_0, \quad \forall k \ge 2, \; a_{2k} = 0$$

Pour les indices impairs ($n = 1, 3, 5, \dots$) :
* Pour $n = 1$ :
  $$a_3 = \frac{1^2 - 4}{2 \times 3} a_1 = \frac{-3}{6} a_1 = -\frac{1}{2} a_1$$
* Pour $n = 3$ :
  $$a_5 = \frac{3^2 - 4}{4 \times 5} a_3 = \frac{5}{20} a_3 = \frac{1}{4} a_3$$

---

### Partie III : Analyse critique des résultats

#### Question 5
1. Quelle est la nature de la solution développable en série entière obtenue lorsque $a_1 = 0$ ?
2. Discuter du lien entre l'intégrale $I_n$ de la Partie I et les méthodes de résolution d'équations différentielles par changevent de variable.

**Corrigé :**
1. Lorsque $a_1 = 0$ et $a_2 = -2a_0$, avec $a_{2k} = 0$ pour $k \ge 2$, la série entière s'arrête à l'ordre 2 :
   $$y(x) = a_0 (1 - 2x^2)$$
   Il s'agit d'un polynôme. C'est une solution polynomiale remarquable de l'équation $(E)$.
2. *Analyse critique :* L'utilisation du changement de variable $x = \cos(t)$ (valable sur $]0, \pi/2[$) transforme l'équation différentielle $(E)$ en une équation différentielle à coefficients constants ou plus simples en fonction de $t$. En effet, $\frac{\text{d}y}{\text{d}x} = \frac{\text{d}y/\text{d}t}{-\sin(t)}$. Les intégrales du type $I_n$ apparaissent naturellement lors du calcul des solutions par la méthode de variation des constantes ou lors de l'intégration directe de telles équations différentielles issues de problèmes de physique (notamment en coordonnées sphériques ou cylindriques).

---
*Fin du problème.*