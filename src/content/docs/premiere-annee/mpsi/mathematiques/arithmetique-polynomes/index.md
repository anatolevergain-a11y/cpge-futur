---
title: 'Cours : Arithmétique et Polynômes'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

### A. Arithmétique dans $\mathbb{Z}$
Soit $\mathbb{Z}$ l'anneau des entiers relatifs.

*   **Divisibilité :** Soit $(a, b) \in \mathbb{Z}^2$. On dit que $a$ divise $b$ (noté $a \mid b$) s'il existe $k \in \mathbb{Z}$ tel que $b = ak$.
*   **Division euclidienne :** Soit $a \in \mathbb{Z}$ et $b \in \mathbb{N}^*$. Il existe un unique couple $(q, r) \in \mathbb{Z} \times \mathbb{N}$ tel que :
    $$a = bq + r \quad \text{avec} \quad 0 \le r < b$$
*   **Plus Grand Commun Diviseur (PGCD) :** Soit $(a, b) \in \mathbb{Z}^2 \setminus \{(0,0)\}$. L'idéal $a\mathbb{Z} + b\mathbb{Z}$ est principal, engendré par un unique entier positif noté $\gcd(a, b)$ ou $a \land b$.
*   **Plus Petit Commun Multiple (PPCM) :** Soit $(a, b) \in (\mathbb{N}^*)^2$. Le PPCM, noté $\operatorname{lcm}(a, b)$ ou $a \lor b$, est le plus petit entier strictement positif multiple commun de $a$ et $b$.
*   **Nombres premiers :** Un entier $p \ge 2$ est dit premier s'il admet exactement deux diviseurs distincts dans $\mathbb{N}$ : $1$ et $p$. L'ensemble des nombres premiers est noté $\mathcal{P}$.

### B. Algèbre des polynômes $\mathbb{K}[X]$ ($\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$)
Soit $\mathbb{K}[X]$ l'espace vectoriel des polynômes à coefficients dans $\mathbb{K}$.

*   **Définition :** Un polynôme $P$ est une suite presque nulle d'éléments de $\mathbb{K}$, notée formellement $P = \sum_{k=0}^{n} a_k X^k$.
*   **Degré :** Pour $P \in \mathbb{K}[X] \setminus \{0\}$, le degré de $P$, noté $\deg(P)$, est le plus grand indice $k$ tel que $a_k \neq 0$. Par convention, $\deg(0) = -\infty$.
*   **Division euclidienne :** Soit $(A, B) \in \mathbb{K}[X]^2$ avec $B \neq 0$. Il existe un unique couple $(Q, R) \in \mathbb{K}[X]^2$ tel que :
    $$A = BQ + R \quad \text{avec} \quad \deg(R) < \deg(B)$$
*   **Racine :** Soit $P \in \mathbb{K}[X]$ et $a \in \mathbb{K}$. On dit que $a$ est une racine de $P$ si $P(a) = 0$.
    *   *Propriété :* $a$ est racine de $P$ si et seulement si $(X - a) \mid P$.
    *   *Ordre de multiplicité :* $a$ est racine d'ordre $m \ge 1$ si $(X - a)^m \mid P$ et $(X - a)^{m+1} \nmid P$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### A. Théorème de Bézout et Lemme de Gauss ($\mathbb{Z}$)

#### Théorème (Bézout dans $\mathbb{Z}$)
Soit $(a, b) \in \mathbb{Z}^2$. Il existe $(u, v) \in \mathbb{Z}^2$ tel que :
$$au + bv = \gcd(a, b)$$
*Corollaire (Lemme de Gauss) :* Si $a \mid bc$ et $\gcd(a, b) = 1$, alors $a \mid c$.

#### Démonstration (Lemme de Gauss) :
Supposons $a \mid bc$ et $\gcd(a, b) = 1$. Par le théorème de Bézout, il existe $u, v \in \mathbb{Z}$ tels que :
$$au + bv = 1$$
Multiplions cette égalité par $c$ :
$$acu + bcv = c$$
On remarque que $a$ divise le premier terme ($acu$) par définition, et $a$ divise le second terme ($bcv$) car $a \mid bc$ (donc $bc = ka$ pour un certain $k \in \mathbb{Z}$, d'où $bcv = kav$). Par conséquent, $a$ divise la somme, soit $a \mid c$. $\blacksquare$

### B. Théorème Fondamental de l'Arithmétique
Tout entier $n \ge 2$ se décompose de manière unique (à l'ordre des facteurs près) en produit de facteurs premiers :
$$n = \prod_{p \in \mathcal{P}} p^{v_p(n)}$$
où $v_p(n) \in \mathbb{N}$ et $v_p(n) = 0$ pour presque tout $p$.

### C. Théorème de D'Alembert-Gauss
Le corps $\mathbb{C}$ des nombres complexes est algébriquement clos : tout polynôme non constant de $\mathbb{C}[X]$ admet au moins une racine dans $\mathbb{C}$.
Corollaire: * Tout polynôme $P \in \mathbb{C}[X]$ de degré $n \ge 1$ se scinde en facteurs de degré 1 :
$$P = a_n \prod_{k=1}^{r} (X - z_k)^{m_k}$$
où les $z_k$ sont les racines distinctes de $P$ de multiplicités respectives $m_k$, avec $\sum_{k=1}^{r} m_k = n$.

---

## 💡 3. Méthodes classiques de résolution

### A. Calcul du PGCD : Algorithme d'Euclide
Pour déterminer $\gcd(a, b)$ avec $a > b > 0$, on effectue des divisions euclidiennes successives :
$$\begin{aligned}
a &= b q_1 + r_1 \quad (0 < r_1 < b) \\
b &= r_1 q_2 + r_2 \quad (0 < r_2 < r_1) \\
&\;\;\vdots \\
r_{k-2} &= r_{k-1} q_k + r_k \quad (0 < r_k < r_{k-1}) \\
r_{k-1} &= r_k q_{k+1} + 0
\end{aligned}$$
Le dernier reste non nul $r_k$ est le $\gcd(a, b)$. La remontée de ces égalités permet d'obtenir une relation de Bézout.

### B. Résolution d'équations diophantiennes linéaires
Soit l'équation $ax + by = c$ d'inconnue $(x, y) \in \mathbb{Z}^2$.
1.  On calcule $d = \gcd(a, b)$ par l'algorithme d'Euclide.
2.  Si $d \nmid c$, l'ensemble des solutions est vide.
3.  Si $d \mid c$, on pose $a = da'$, $b = db'$ et $c = dc'$. L'équation devient $a'x + b'y = c'$ avec $\gcd(a', b') = 1$.
4.  On trouve une solution particulière $(x_0, y_0)$ à l'aide de l'algorithme d'Euclide étendu.
5.  La solution générale s'obtient par :
    $$\left\{ \begin{aligned} x &= x_0 + k b' \\ y &= y_0 - k a' \end{aligned} \right. \quad (k \in \mathbb{Z})$$

### C. Recherche de racines multiples d'un polynôme
Soit $P \in \mathbb{K}[X]$ et $a \in \mathbb{K}$.
*   $a$ est racine de $P$ d'ordre $m \iff P(a) = P'(a) = \dots = P^{(m-1)}(a) = 0$ et $P^{(m)}(a) \neq 0$.
*   *Méthode pratique :* Pour identifier le PGCD d'un polynôme et de ses dérivées successives, on utilise l'algorithme d'Euclide pour les polynômes afin de trouver les facteurs communs sans connaître explicitement les racines.

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Oubli du signe dans le PGCD :** Par convention, dans $\mathbb{Z}$, le PGCD de deux entiers est toujours un entier **positif ou nul**. Écrire $\gcd(-6, -9) = -3$ est une erreur fatale ; le résultat est $3$.
2.  **Confusion entre irréductible et premier (dans les anneaux généraux) :** Bien que dans $\mathbb{Z}$ et $\mathbb{K}[X]$ les notions d'éléments irréductibles et premiers coïncident, il ne faut pas généraliser hâtivement à d'autres anneaux.
3.  **Division euclidienne sans vérification du coefficient dominant :** Dans $\mathbb{K}[X]$, pour effectuer la division euclidienne de $A$ par $B$, il est impératif que le diviseur $B$ ne soit pas le polynôme nul et que l'on sache inverser son coefficient dominant (ce qui est toujours vrai si $\mathbb{K}$ est un corps, attention aux anneaux comme $\mathbb{Z}[X]$).
4.  **Mauvaise manipulation des degrés avec le polynôme nul :** Garder à l'esprit que $\deg(0) = -\infty$. Des formules comme $\deg(PQ) = \deg(P) + \deg(Q)$ nécessitent que $P$ et $Q$ soient non nuls (ou d'utiliser les conventions adéquates sur $-\infty$, avec garde-fous).
5.  **Utilisation abusive du théorème de D'Alembert-Gauss sur $\mathbb{R}$ :** Un polynôme à coefficients réels n'est pas nécessairement scindé sur $\mathbb{R}$ (ex. $X^2 + 1$). Il est uniquement scindé en facteurs de degré $1$ ou $2$ irréductibles sur $\mathbb{R}$.