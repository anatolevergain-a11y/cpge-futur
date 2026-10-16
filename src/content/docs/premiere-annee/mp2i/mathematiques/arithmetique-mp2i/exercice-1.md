---
title: 'Exercice 1 : Bézout, Gauss et congruences'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Cadre d'étude

L'arithmétique dans l'anneau principal $(\mathbb{Z}, +, \times)$ constitue un pilier fondamental de la formation en mathématiques en filière MP2I. Ce problème se propose d'explorer des applications avancées des théorèmes de Bézout et de Gauss, ainsi que la résolution de systèmes de congruences linéaires. L'étude débute par des propriétés structurelles du pgcd, se poursuit par la résolution d'une équation diophantienne à paramètre, et s'achève par l'analyse d'un système de congruences inspiré du célèbre théorème des restes chinois.

Soient $a$ et $b$ deux entiers relatifs non tous nuls. On note $a \land b$ leur plus grand commun diviseur (PGCD) et $a \lor b$ leur plus petit commun multiple (PPCM).

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Propriétés fondamentales**
   Soit $n \in \mathbb{N}^*$. Démontrer que pour tout $a, b \in \mathbb{Z}$, on a l'égalité :
   $$\text{pgcd}(an, bn) = |n| \text{pgcd}(a, b)$$

2. **Application du théorème de Bézout**
   Soit $a, b \in \mathbb{Z}^*$ tels que $\text{pgcd}(a, b) = 1$. Démontrer que pour tout entier $k \in \mathbb{N}$, on a $\text{pgcd}(a+b, a^2 - ab + b^2) \mid 3$.
   *Application critique :* La condition $\text{pgcd}(a, b) = 1$ est-elle nécessaire pour que le diviseur commun divise $3$ ? Justifier par un contre-exemple.

3. **Résolution d'une équation diophantienne**
   On considère l'équation $(E) : 7x - 12y = 5$, d'inconnue $(x,y) \in \mathbb{Z}^2$.
   a) Déterminer une solution particulière de $(E)$ dans $\mathbb{Z}^2$.
   b) Résoudre $(E)$ dans $\mathbb{Z}^2$.

4. **Système de congruences et généralisation**
   On s'intéresse au système de congruences suivant, d'inconnue $X \in \mathbb{Z}$ :
   $$(S) \quad \begin{cases} X \equiv 2 \pmod 7 \\ X \equiv 3 \pmod{12} \end{cases}$$
   a) Montrer que le système $(S)$ admet des solutions et exprimer la solution générale sous la forme d'une congruence modulo un entier à préciser.
   b) *Analyse critique du modèle :* Si l'on remplace $12$ par $14$ dans le système $(S)$, que se passe-t-il ? Formuler une condition nécessaire et suffisante générale d'existence de solutions pour un système de la forme $\begin{cases} X \equiv u \pmod a \\ X \equiv v \pmod b \end{cases}$.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Utiliser la caractérisation du PGCD par l'idéal engendré dans $\mathbb{Z}$ (i.e., $I_a + I_b = I_{\text{pgcd}(a,b)}$) ou revenir à la définition par divisibilité et positivité.
* **Question 2 :** Poser $d = \text{pgcd}(a+b, a^2 - ab + b^2)$. Exprimer $a^2 - ab + b^2$ en fonction de $(a+b)$ et de $ab$, puis exploiter le fait que $\text{pgcd}(a, b) = 1$ implique $\text{pgcd}(a+b, ab) = 1$.
* **Question 3 :** Utiliser l'algorithme d'Euclide étendu pour trouver une solution particulière.
* **Question 4 :** Traduire le système en une équation diophantienne linéaire, puis appliquer les résultats de la question 3.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Propriétés fondamentales
Soit $d = \text{pgcd}(a, b)$. Par définition, l'idéal engendré par $an$ et $bn$ dans $\mathbb{Z}$ est :
$$I_{an, bn} = \{u(an) + v(bn) \mid (u,v) \in \mathbb{Z}^2\} = n(\{ua + vb \mid (u,v) \in \mathbb{Z}^2\}) = n I_{a, b}$$
Puisque $I_{a, b} = I_d = d\mathbb{Z}$, on a :
$$I_{an, bn} = n(d\mathbb{Z}) = (nd)\mathbb{Z}$$
Le générateur positif de cet idéal est $|nd| = |n|d = |n|\text{pgcd}(a, b)$. Par unicité du PGCD positif, on conclut que :
$$\text{pgcd}(an, bn) = |n| \text{pgcd}(a, b)$$

---

#### 2. Application du théorème de Bézout
Soit $d = \text{pgcd}(a+b, a^2 - ab + b^2)$. 
On remarque l'identité algébrique :
$$a^2 - ab + b^2 = (a+b)^2 - 3ab$$
Puisque $d$ divise $a+b$, il divise $(a+b)^2$. De plus, $d$ divise $a^2 - ab + b^2$. 
Par combinaison linéaire, $d$ divise la différence :
$3ab = (a+b)^2 - (a^2 - ab + b^2)$
Ainsi, $d$ divise $3ab$.

Or, on sait que $\text{pgcd}(a+b, a) = \text{pgcd}(b, a) = 1$ (car $\text{pgcd}(a,b)=1$). De même, $\text{pgcd}(a+b, b) = 1$.
Par le lemme de Gauss (ou par propriété multiplicative du PGCD), comme $\text{pgcd}(a+b, a) = 1$ et $\text{pgcd}(a+b, b) = 1$, on a :
$$\text{pgcd}(a+b, ab) = 1$$
Puisque $d$ divise $3ab$ et que $\text{pgcd}(d, ab) = 1$ (car $d$ divise $a+b$), le lemme de Gauss permet de conclure que :
$$d \mid 3$$

*Analyse critique :* La condition $\text{pgcd}(a, b) = 1$ est **suffisante** mais **non nécessaire** pour que le diviseur divise $3$. 
Contre-exemple: * Prenons $a = 2$ et $b = 2$. Alors $\text{pgcd}(2, 2) = 2 \neq 1$.
Calculons $a+b = 4$ et $a^2 - ab + b^2 = 4 - 4 + 4 = 4$.
Leur PGCD est $4$. On constate que $4$ ne divise pas $3$. En revanche, si l'on prend $a=2$ et $b=4$ (donc $\text{pgcd}(2,4)=2$), $a+b = 6$ et $a^2-ab+b^2 = 4 - 8 + 16 = 12$, le PGCD est $6$ (qui n'est pas $3$). 
Si l'on prend $a=1$ et $b=2$ ($\text{pgcd}(1,2)=1$), $a+b=3$ et $1-2+4=3$, $\text{pgcd}(3,3)=3$.

---

#### 3. Résolution d'une équation diophantienne
a) On cherche une solution particulière de $7x - 12y = 5$. 
Remarquons d'abord que $\text{pgcd}(7, 12) = 1$. Par l'algorithme d'Euclide étendu :
$$12 = 1 \times 7 + 5 \implies 5 = 12 - 7$$
En multipliant par $5$, on obtient :
$$5 = 7(-5) - 12(-5) \quad \text{(attention au signe)}$$
Vif calcul : $7 \times (-5) - 12(-5) = -35 + 60 = 25 \neq 5$. Reprenons :
On cherche $7x_0 - 12y_0 = 1$.
$12 = 1 \times 7 + 5 \implies 5 = 12 - 7$
$7 = 1 \times 5 + 2 \implies 2 = 7 - 5 = 7 - (12 - 7) = 2 \times 7 - 12$
$5 = 2 \times 2 + 1 \implies 1 = 5 - 2 \times 2 = (12 - 7) - 2(2 \times 7 - 12) = 3 \times 12 - 5 \times 7$
Donc $7(-5) - 12(-3) = 1$.
En multipliant par $5$ :
$$7(-25) - 12(-15) = 5$$
Une solution particulière est donc $(x_0, y_0) = (-25, -15)$.

b) Soit $(x, y)$ une solution quelconque de $(E)$. On a :
$$7x - 12y = 7(-25) - 12(-15) \implies 7(x + 25) = 12(y + 15)$$
Puisque $7$ divise $12(y+15)$ et que $\text{pgcd}(7, 12) = 1$, le lemme de Gauss implique que $7$ divise $y + 15$. 
Il existe donc $k \in \mathbb{Z}$ tel que $y + 15 = 7k$, soit $y = -15 + 7k$.
En reportant dans l'égalité :
$$7(x + 25) = 12(7k) \implies x + 25 = 12k \implies x = -25 + 12k$$
Réciproquement, pour tout $k \in \mathbb{Z}$, le couple $(-25 + 12k, -15 + 7k)$ est solution.
L'ensemble des solutions de $(E)$ est donc :
$$\mathcal{S} = \{(-25 + 12k, -15 + 7k) \mid k \in \mathbb{Z}\}$$

---

#### 4. Système de congruences et généralisation
a) Le système $(S)$ se traduit par l'existence de $x, y \in \mathbb{Z}$ tels que :
$$\begin{cases} X = 7x + 2 \\ X = 12y + 3 \end{cases}$$
On en déduit l'équation diophantienne :
$$7x + 2 = 12y + 3 \iff 7x - 12y = 1$$
D'après la question 3, une solution particulière de $7x - 12y = 1$ est $(x_0, y_0) = (-5, -3)$.
La solution générale pour $x$ est $x = -5 + 12k$ ($k \in \mathbb{Z}$).
On remplace pour trouver $X$ :
$$X = 7(-5 + 12k) + 2 = -35 + 84k + 2 = 84k - 33$$
En modulo, cela s'écrit :
$$X \equiv -33 \equiv 51 \pmod{84}$$
La solution générale est donc $X \in 51 + 84\mathbb{Z}$.

b) *Analyse critique du modèle :* 
Si l'on remplace $12$ par $14$, le système devient :
$$\begin{cases} X \equiv 2 \pmod 7 \\ X \equiv 3 \pmod{14} \end{cases}$$
Ceci implique qu'il existe $k, l \in \mathbb{Z}$ tels que $X = 7k + 2$ et $X = 14l + 3$, soit :
$$7k + 2 = 14l + 3 \iff 7k - 14l = 1 \iff 7(k - 2l) = 1$$
Le membre de gauche est un multiple de $7$, tandis que le membre de droite vaut $1$. C'est absurde. **Le système n'admet donc aucune solution.**

*Condition nécessaire et générale :* 
Considérons le système $\begin{cases} X \equiv u \pmod a \\ X \equiv v \pmod b \end{cases}$.
Ce système admet des solutions si et seulement si :
$$u \equiv v \pmod{\text{pgcd}(a, b)}$$
En effet, la condition $X = au + u = bv + v'$ équivaut à $au - bv = v - u$, ce qui admet des solutions si et seulement si $\text{pgcd}(a, b)$ divise $v - u$ (théorème de Bézout).