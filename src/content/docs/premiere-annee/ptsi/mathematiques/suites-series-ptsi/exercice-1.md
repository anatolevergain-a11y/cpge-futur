---
title: 'Exercice 1 : Convergence des suites réelles'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

En tant qu'examinateur en classes préparatoires scientifiques, j'attends des candidats une rigueur absolue dans la manipulation des inégalités, l'utilisation des théorèmes fondamentaux de convergence (convergence monotone, théorème des gendarmes, suites adjacentes) et l'étude qualitative de suites définies par récurrence. 

Le présent problème propose d'étudier le comportement asymptotique d'une suite réelle définie par une relation implicite, situation classique aux concours Mines-Ponts et Centrale-Supélec.

On considère la fonction $f$ définie sur l'intervalle $[0, 1]$ par :
$$f(x) = \frac{x+1}{x+2}$$

On définit une suite réelle $(u_n)_{n \in \mathbb{N}}$ par son premier terme $u_0 \in [0, 1]$ et la relation de récurrence :
$$\forall n \in \mathbb{N}, \quad u_{n+1} = f(u_n)$$

---

### ❓ Questions progressives

1. **Étude de la fonction associée :**
   a) Dresser le tableau de variations de la fonction $f$ sur $[0, 1]$.
   b) Montrer que l'intervalle $[0, 1]$ est stable par $f$ (c'est-à-dire que $f([0, 1]) \subset [0, 1]$).
   c) Démontrer que $f$ est contractante sur $[0, 1]$ et expliciter une constante de Lipschitz $k \in ]0, 1[$.

2. **Premier contact avec la suite :**
   a) Montrer que pour tout $n \in \mathbb{N}$, le terme $u_n$ appartient bien à $[0, 1]$.
   b) Établir l'inégalité des accroissements finis pour la suite :
      $$\forall n \in \mathbb{N}, \quad |u_{n+1} - l| \le k |u_n - l|$$
      où $l$ désigne l'unique point fixe de $f$ sur $[0, 1]$.
   c) En déduire que la suite $(u_n)_{n \in \mathbb{N}}$ converge et déterminer sa limite.

3. **Approche par l'analyse fine (Variations et suites adjacentes) :**
   a) Montrer que l'on a la relation :
      $$u_{n+1} - u_n = \frac{(1 - u_n)(1 + u_n)}{u_n + 2} - u_n \quad \text{(à vérifier ou reformuler selon l'étude de signe)}$$
      Plus simplement, étudier le signe de $f(x) - x$ sur $[0, 1]$.
   b) En déduire la monotonie de la suite $(u_n)_{n \in \mathbb{N}}$ selon la valeur de $u_0$.

4. **Vitesse de convergence et estimation d'erreur :**
   a) À l'aide de l'inégalité de contraction, exprimer un majorant de $|u_n - l|$ en fonction de $k$, $n$ et $|u_0 - l|$.
   b) Déterminer un entier $n_0$ garantissant une approximation de la limite $l$ à $10^{-3}$ près, uniformément par rapport à $u_0 \in [0, 1]$.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1c :** Pour établir le caractère contractant, calculez la dérivée $f'(x)$ et déterminez son supremum sur l'intervalle $[0, 1]$. Le théorème des accroissements finis fera le reste.
- **Question 2b & 2c :** C'est une application directe du théorème du point fixe (ou lemme des contractions). Pensez à identifier clairement le point fixe $l$ en résolvant l'équation $f(l) = l$.
- **Question 3 :** L'étude du signe de $f(x) - x$ est cruciale pour déterminer si la suite est croissante ou décroissante. Exprimez $f(x) - x$ sous forme d'un quotient dont le dénominateur est strictement positif.
- **Question 4 :** Par récurrente immédiate, $|u_n - l| \le k^n |u_0 - l|$. Utilisez la borne maximale de $|u_0 - l|$ sur $[0, 1]$ pour obtenir un majorant indépendant de $u_0$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Étude de la fonction associée

a) **Variations de $f$ :**
La fonction $f$ est dérivable sur $[0, 1]$ en tant que quotient de fonctions dérivables dont le dénominateur ne s'annule pas. Pour tout $x \in [0, 1]$ :
$$f'(x) = \frac{1(x+2) - 1(x+1)}{(x+2)^2} = \frac{1}{(x+2)^2}$$
Puisque $(x+2)^2 > 0$ sur $[0, 1]$, on a $f'(x) > 0$. **La fonction $f$ est strictement croissante sur $[0, 1]$.**

b) **Stabilité de $[0, 1]$ :**
Puisque $f$ est croissante sur $[0, 1]$, on a pour tout $x \in [0, 1]$ :
$$f(0) \le f(x) \le f(1)$$
Or, $f(0) = \frac{0+1}{0+2} = \frac{1}{2}$ et $f(1) = \frac{1+1}{1+2} = \frac{2}{3}$.
Ainsi, $\frac{1}{2} \le f(x) \le \frac{2}{3}$. Comme $[\frac{1}{2}, \frac{2}{3}] \subset [0, 1]$, **l'intervalle $[0, 1]$ est stable par $f$.**

c) **Caractère contractant :**
Sur $[0, 1]$, la dérivée $f'$ est continue. Cherchons son maximum :
$$\forall x \in [0, 1], \quad 0 \le x \le 1 \implies 2 \le x+2 \le 3 \implies 4 \le (x+2)^2 \le 9$$
En passant à l'inverse :
$$\frac{1}{9} \le f'(x) \le \frac{1}{4}$$
Ainsi, pour tout $x \in [0, 1]$, on a $|f'(x)| \le \frac{1}{4}$. 
Par le **théorème des accroissements finis**, $f$ est $\frac{1}{4}$-lipschitzienne sur $[0, 1]$. En posant $k = \frac{1}{4} \in ]0, 1[$, **la fonction $f$ est contractante sur $[0, 1]$.**

---

#### 2. Premier contact avec la suite

a) **Appartenance à $[0, 1]$ :**
Démontrons par récurrence que pour tout $n \in \mathbb{N}$, $u_n \in [0, 1]$.
- *Initialisation :* Pour $n = 0$, l'énoncé pose $u_0 \in [0, 1]$. La propriété est vraie.
- *Hérédité :* Supposons que pour un entier $n \in \mathbb{N}$, $u_n \in [0, 1]$. Par stabilité de $[0, 1]$ par $f$ (démontrée en 1b), on a :
  $$u_{n+1} = f(u_n) \in f([0, 1]) \subset [0, 1]$$
  La propriété est donc héréditaire.
- *Conclusion :* **Pour tout $n \in \mathbb{N}$, $u_n \in [0, 1]$.**

b) **Recherche du point fixe et inégalité :**
Recherchons $l \in [0, 1]$ tel que $f(l) = l$ :
$$l = \frac{l+1}{l+2} \iff l(l+2) = l+1 \iff l^2 + 2l - l - 1 = 0 \iff l^2 + l - 1 = 0$$
Le discriminant vaut $\Delta = 1^2 - 4(1)(-1) = 5$. Les racines sont $\frac{-1 \pm \sqrt{5}}{2}$. 
Puisque $l \in [0, 1]$, on retient l'unique solution positive :
$$l = \frac{\sqrt{5}-1}{2}$$
D'après l'inégalité des accroissements finis appliquée à $f$ entre $u_n$ et $l$ (qui appartiennent tous deux à $[0, 1]$) :
$$|f(u_n) - f(l)| \le \frac{1}{4} |u_n - l|$$
Soit :
$$|u_{n+1} - l| \le \frac{1}{4} |u_n - l|$$

c) **Convergence de la suite :**
Par une récurrence immédiate, on établit que :
$$\forall n \in \mathbb{N}, \quad |u_n - l| \le \left(\frac{1}{4}\right)^n |u_0 - l|$$
Puisque $0 < \frac{1}{4} < 1$, on a $\lim_{n \to +\infty} \left(\frac{1}{4}\right)^n = 0$. 
Par le **théorème des gendarmes** (car $0 \le |u_n - l| \le \left(\frac{1}{4}\right)^n |u_0 - l|$), on en déduit que :
$$\lim_{n \to +\infty} |u_n - l| = 0$$
**La suite $(u_n)_{n \in \mathbb{N}}$ converge donc vers $l = \frac{\sqrt{5}-1}{2}$.**

---

#### 3. Approche par l'analyse fine

a) **Étude du signe de $f(x) - x$ :**
Pour tout $x \in [0, 1]$ :
$$f(x) - x = \frac{x+1}{x+2} - x = \frac{x+1 - x(x+2)}{x+2} = \frac{x+1 - x^2 - 2x}{x+2} = \frac{-x^2 - x + 1}{x+2}$$
On remarque que le numérateur $-x^2 - x + 1$ s'annule précisément en $l = \frac{\sqrt{5}-1}{2}$ (car $l^2 + l - 1 = 0$).
Le trinôme $-x^2 - x + 1$ est positif entre ses racines. Sur $[0, l]$, il est $\ge 0$, et sur $[l, 1]$, il est $\le 0$.

b) **Monotonie de la suite :**
- Si $u_0 \in [0, l]$, alors $u_1 = f(u_0) \ge u_0$ (car $f(u_0) - u_0 \ge 0$). Par récurrence immédiate, la suite est **croissante**.
- Si $u_0 \in [l, 1]$, alors $u_1 = f(u_0) \le u_0$ (car $f(u_0) - u_0 \le 0$). Par récurrence immédiate, la suite est **décroissante**.

---

#### 4. Vitesse de convergence et estimation d'erreur

a) **Majoration de l'erreur :**
D'après la question 2c, on a l'inégalité fondamentale :
$$\forall n \in \mathbb{N}, \quad |u_n - l| \le \left(\frac{1}{4}\right)^n |u_0 - l|$$

b) **Détermination de l'entier $n_0$ :**
Puisque $u_0 \in [0, 1]$ et $l \in [0, 1]$, on a trivialement :
$$|u_0 - l| \le 1 - 0 = 1$$
Par conséquent, pour tout $n \in \mathbb{N}$ :
$$|u_n - l| \le \left(\frac{1}{4}\right)^n$$
Pour garantir une approximation à $10^{-3}$ près, il suffit de trouver $n$ tel que :
$$\left(\frac{1}{4}\right)^n \le 10^{-3}$$
En passant au logarithme népérien (strictement croissante) :
$$-n \ln(4) \le -3 \ln(10) \iff n \ln(4) \ge 3 \ln(10) \iff n \ge \frac{3 \ln(10)}{\ln(4)}$$
Faisons l'application numérique :
$$\frac{3 \ln(10)}{\ln(4)} = \frac{3 \times 2.3026}{1.3863} \approx \frac{6.9078}{1.3863} \approx 4.98$$
Puisque $n$ doit être un entier, on choisit **$n_0 = 5$**. 
*À partir du rang $n = 5$, la valeur de $u_n$ approche la limite $l$ à $10^{-3}$ près, et ce, quel que soit le choix initial de $u_0 \in [0, 1]$.*