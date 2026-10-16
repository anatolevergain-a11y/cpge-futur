---
title: 'Exercice 1 : Conditionnement et indépendance'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $(\Omega, \mathcal{P}(\Omega), P)$ un espace probabilisé fini. On considère une expérience aléatoire modélisée par une suite d'événements. Dans ce problème, on s'intéresse à l'évolution de la probabilité d'un événement au cours d'itérations successives, à l'aide d'un système complet d'événements et de la formule des probabilités totales.

Soit $N \in \mathbb{N}^*$. On se donne une famille d'événements $(A_n)_{n \in \mathbb{N}}$ de $\Omega$ et une suite de réels $(p_n)_{n \in \mathbb{N}}$ définie par la relation de récurrence :
$$p_0 = P(A_0) \in ]0, 1[$$
et pour tout $n \in \mathbb{N}$,
$$p_{n+1} = P(A_{n+1} \mid A_n) p_n + P(A_{n+1} \mid \overline{A_n}) (1 - p_n)$$
où l'on pose $p_n = P(A_n)$, en supposant que pour tout $n \in \mathbb{N}$, $P(A_n) \in ]0, 1[$, et avec les notations classiques pour les probabilités conditionnelles.

On pose pour tout $n \in \mathbb{N}$ :
- $\alpha_n = P(A_{n+1} \mid A_n)$
- $\beta_n = P(A_{n+1} \mid \overline{A_n})$

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Rappels et mise en place**
   a) Justifier l'expression de $p_{n+1}$ en fonction de $p_n$, $\alpha_n$ et $\beta_n$ à l'aide de la formule des probabilités totales.
   b) On suppose dans cette question que pour tout $n \in \mathbb{N}$, $\alpha_n = a$ et $\beta_n = b$ où $a, b \in ]0, 1[$. Exprimer $p_n$ en fonction de $n$, $p_0$, $a$ et $b$.

2. **Étude asymptotique du modèle stationnaire**
   a) Dans le cas où $\alpha_n = a$ et $\beta_n = b$ avec $a \neq 1-b$, déterminer la limite de $p_n$ lorsque $n$ tend vers $+\infty$, indépendamment de $p_0$.
   b) Que se passe-t-il si $a + b = 1$ ?

3. **Génération de chaînes et indépendance**
   On suppose à présent que pour tout $n \in \mathbb{N}$, $\alpha_n = \alpha$ et $\beta_n = \beta$ avec $\alpha, \beta \in ]0, 1[$.
   a) Calculer la probabilité conjointe $P(A_0 \cap A_1 \cap A_2)$ en fonction de $p_0$, $\alpha$ et $\beta$.
   b) À quelle condition nécessaire et suffisante sur $\alpha$ et $\beta$ les événements $A_0$ et $A_1$ sont-ils indépendants ? Interpréter ce résultat.

4. **Analyse critique du modèle**
   Dans la pratique, les hypothèses d'invariance des probabilités conditionnelles ($\alpha_n = \alpha$ et $\beta_n = \beta$) sont souvent violées. 
   Discuter de la validité de ce modèle si $\alpha_n$ dépend de l'historique complet $(A_0, A_1, \dots, A_n)$ et non seulement de $A_n$. Quel nom porte ce type de processus en mathématiques ?

---

### 💡 Pistes & Indications méthodologiques

- **Q1.a)** Penser à utiliser le système complet d'événements $(A_n, \overline{A_n})$.
- **Q1.b)** Il s'agit d'une suite arithmético-géométrique. Rechercher le point fixe de la relation de récurrence.
- **Q2.a)** Étudier la convergence de la suite géométrique associée.
- **Q3.b)** Utiliser la définition de l'indépendance de deux événements : $P(A_0 \cap A_1) = P(A_0)P(A_1)$.
- **Q4.** Penser à la notion de mémoire d'un processus stochastique (propriété de Markov vs processus général).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Rappels et mise en place
a) Soit $n \in \mathbb{N}$. L'univers $\Omega$ étant muni de la partition $(A_n, \overline{A_n})$, la formule des probabilités totales appliquée à l'événement $A_{n+1}$ donne :
$$P(A_{n+1}) = P(A_{n+1} \mid A_n)P(A_n) + P(A_{n+1} \mid \overline{A_n})P(\overline{A_n})$$
Puisque $P(\overline{A_n}) = 1 - P(A_n)$ et en posant $p_n = P(A_n)$, $\alpha_n = P(A_{n+1} \mid A_n)$ et $\beta_n = P(A_{n+1} \mid \overline{A_n})$, on obtient immédiatement :
$$p_{n+1} = \alpha_n p_n + \beta_n (1 - p_n)$$

b) Si $\alpha_n = a$ et $\beta_n = b$ pour tout $n \in \mathbb{N}$, la relation devient :
$$p_{n+1} = (a - b)p_n + b$$
C'est une relation de récurrence linéaire d'ordre 1 à coefficients constants. Cherchons le point fixe $\ell$ de la relation :
$$\ell = (a - b)\ell + b \implies \ell(1 - a + b) = b \implies \ell = \bfit{\frac{b}{1 - a + b}}$$
(en supposant $1 - a + b \neq 0$, ce qui est garanti si $a \neq b+1$).
Introduisons la suite auxiliaire $u_n = p_n - \ell$ :
$$u_{n+1} = p_{n+1} - \ell = (a - b)p_n + b - ((a - b)\ell + b) = (a - b)(p_n - \ell) = (a - b)u_n$$
Ainsi, $(u_n)$ est géométrique de raison $a - b$. Par conséquent, pour tout $n \in \mathbb{N}$ :
$$u_n = (a - b)^n u_0 = (a - b)^n (p_0 - \ell)$$
Et donc :
$$p_n = (a - b)^n \left(p_0 - \frac{b}{1 - a + b}\right) + \frac{b}{1 - a + b}$$

#### 2. Étude asymptotique du modèle stationnaire
a) Si $a \neq 1-b$, alors $|a - b| < 1$ (car $a, b \in ]0, 1[$ implique $-1 < a - b < 1$). 
Par conséquent, $\lim_{n \to +\infty} (a - b)^n = 0$. On en déduit que :
$$\lim_{n \to +\infty} p_n = \frac{b}{1 - a + b}$$
Cette limite est atteinte indépendamment de la condition initiale $p_0$.

b) Si $a + b = 1$, alors $a - b = 2a - 1$. Si de plus $a \neq \frac{1}{2}$, la raison est non nulle. Si $a = \frac{1}{2}$, alors $a - b = 0$, et pour tout $n \ge 1$, $p_n = b = \frac{1}{2}$ (stationnarité immédiate).

#### 3. Génération de chaînes et indépendance
a) Par application successive de la définition des probabilités conditionnelles :
$$P(A_0 \cap A_1 \cap A_2) = P(A_2 \mid A_1 \cap A_0) P(A_1 \mid A_0) P(A_0)$$
Le modèle postule que les probabilités conditionnelles à l'étape $n+1$ ne dépendent que de l'état à l'étape $n$. Ainsi, $P(A_2 \mid A_1 \cap A_0) = P(A_2 \mid A_1) = \alpha$.
On a donc :
$$P(A_0 \cap A_1 \cap A_2) = \alpha \alpha p_0 = \alpha^2 p_0$$
*(Note : sous réserve que $p_0 > 0$ et $P(A_1 \cap A_0) > 0$)*.

b) Les événements $A_0$ et $A_1$ sont indépendants si et seulement si :
$$P(A_0 \cap A_1) = P(A_0)P(A_1)$$
Or, $P(A_0 \cap A_1) = P(A_1 \mid A_0)P(A_0) = \alpha p_0$.
D'autre part, d'après la question 1.b avec $n=0$ :
$$P(A_1) = p_1 = \alpha p_0 + \beta(1 - p_0)$$
L'indépendance s'écrit donc :
$$\alpha p_0 = p_0 (\alpha p_0 + \beta(1 - p_0))$$
Puisque $p_0 \in ]0, 1[\,$, on peut diviser par $p_0$ :
$$\alpha = \alpha p_0 + \beta(1 - p_0) \iff \alpha(1 - p_0) = \beta(1 - p_0)$$
Puisque $p_0 \neq 1$, la condition nécessaire et suffisante est :
$$\bfit{\alpha = \beta}$$
*Interprétation :* Si $\alpha = \beta$, la survenance de $A_1$ ne dépend pas de la réalisation ou non de $A_0$ ($P(A_1 \mid A_0) = P(A_1 \mid \overline{A_0}) = \alpha$). Le système n'a donc aucune "mémoire" d'un pas sur l'autre, ce qui traduit l'indépendance entre $A_0$ et $A_1$.

#### 4. Analyse critique du modèle
Si $\alpha_n$ dépend de l'historique complet $(A_0, A_1, \dots, A_n)$, la probabilité de transition ne vérifie plus la **propriété de Markov** (qui énonce que le futur dépend du présent mais est indépendant du passé sachant le présent). 
Ce type de processus s'appelle un **processus stochastique avec mémoire** (ou chaîne de Markov d'ordre supérieur, ou processus non markovien). L'étude analytique par simple récurrence d'ordre 1 devient alors caduque, nécessitant l'introduction de lois jointes sur des vecteurs aléatoires de taille croissante, complexifiant grandement la résolution.