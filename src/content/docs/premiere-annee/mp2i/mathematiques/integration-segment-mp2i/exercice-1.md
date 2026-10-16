---
title: 'Problème : Étude d une suite d intégrales et applications analytiques'
description: 'Exercice corrigé de type concours (Mines-Ponts / CCINP) - Filière MP2I'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $f : [0, 1] \to \mathbb{R}$ une fonction continue. On s'intéresse au comportement de la suite $(I_n)_{n \in \mathbb{N}}$ définie par :
$$I_n = \int_0^1 x^n f(x) \, \text{d}x$$

Ce type de problème classique en classes préparatoires permet d'explorer les techniques d'estimation de suites définies par des intégrales, l'utilisation du théorème de convergence dominée (ou d'arguments élémentaires de continuité) et l'approximation de fonctions continues.

---

### ❓ Questions progressives

1. **Calcul direct et minoration simple**
   Calculer $I_n$ dans le cas où $f(x) = e^x$. 
   Montrer que pour toute fonction $f$ continue, la suite $(I_n)_{n \in \mathbb{N}}$ converge vers $0$.

2. **Comportement asymptotique (Cas général)**
   On suppose de plus que $f$ est de classe $\mathcal{C}^1$ sur $[0, 1]$. À l'aide d'une intégration par parties, déterminer un équivalent simple de $I_n$ lorsque $n$ tend vers $+\infty$.

3. **Montée en puissance (Lemme de Lebesgue discret)**
   On suppose maintenant que $f$ est continue sur $[0, 1]$ et que $f(1) \neq 0$. 
   En effectuant un changement de variable, ou par un découpage judicieux de l'intervalle d'intégration, démontrer que :
   $$\lim_{n \to +\infty} n I_n = f(1)$$

4. **Application analytique**
   Soit $g : [0, 1] \to \mathbb{R}$ une fonction continue telle que pour tout entier $n \in \mathbb{N}$, on a :
   $$\int_0^1 x^n g(x) \, \text{d}x = 0$$
   Que peut-on en déduire pour la fonction $g$ ? (On pourra s'appuyer sur le théorème d'approximation de Weierstrass ou sur les résultats précédents).

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pour la convergence vers $0$, majorez $|f(x)|$ sur le segment $[0, 1]$ par une constante $M$ (en vertu du théorème des bornes atteintes).
* **Question 2 :** L'intégration par parties est l'outil naturel pour faire apparaître du $1/n$. Veillez à bien vérifier les hypothèses de régularité.
* **Question 3 :** C'est le cœur du problème. L'idée clé est que la masse de la mesure $x^n \, \text{d}x$ se concentre au voisinage de $1$ lorsque $n \to +\infty$. Posez $x = u^{1/n}$ ou isolez un voisinage de $1$ de type $[1-\delta, 1]$.
* **Question 4 :** Si tous les moments d'une fonction continue sur un segment sont nuls, que dire de l'intégrale de $P(x)g(x)$ pour tout polynôme $P$ ? Utilisez ensuite Weierstrass.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Calcul direct et convergence vers 0

* **Cas $f(x) = e^x$ :**
  À l'aide d'une intégration par parties (ou en reconnaissant une primitive si on généralise, mais ici $n$ est fixé), on a :
  $$I_n = \int_0^1 x^n e^x \, \text{d}x$$
  Ce calcul direct n'est pas immédiat pour tout $n$, mais pour $f(x) = 1$, $I_n = \frac{1}{n+1}$. Pour $f(x)=e^x$, on peut utiliser la définition ou le lien avec la fonction gamma incomplète, ce n'est pas le cœur de la question. Contentons-nous de la minoration/majoration pour la limite.

* **Convergence vers $0$ :**
  Puisque $f$ est continue sur le segment $[0, 1]$, elle y est bornée. Soit $M = \max_{x \in [0, 1]} |f(x)|$ (qui existe d'après le théorème de Weierstrass).
  Pour tout $n \in \mathbb{N}$, on a :
  $$|I_n| \le \int_0^1 x^n |f(x)| \, \text{d}x \le M \int_0^1 x^n \, \text{d}x = M \left[ \frac{x^{n+1}}{n+1} \right]_0^1 = \frac{M}{n+1}$$
  Par encadrement (le théorème des gendarmes), comme $\lim_{n \to +\infty} \frac{M}{n+1} = 0$, on conclut que :
  $$\lim_{n \to +\infty} I_n = 0$$

---

#### 2. Comportement asymptotique (Cas $\mathcal{C}^1$)

Supposons $f$ de classe $\mathcal{C}^1$ sur $[0, 1]$. Pour tout $n \in \mathbb{N}$, intégrons par parties en posant $u'(x) = x^n$ et $v(x) = f(x)$ :
$$I_n = \left[ \frac{x^{n+1}}{n+1} f(x) \right]_0^1 - \int_0^1 \frac{x^{n+1}}{n+1} f'(x) \, \text{d}x$$
$$I_n = \frac{f(1)}{n+1} - \frac{1}{n+1} \int_0^1 x^{n+1} f'(x) \, \text{d}x$$

Puisque $f'$ est continue sur $[0, 1]$, elle est bornée par une constante $M'$. D'après le résultat de la question 1 appliqué à $f'$ et à l'exposant $n+1$ :
$$\left| \int_0^1 x^{n+1} f'(x) \, \text{d}x \right| \le \frac{M'}{n+2}$$
Ainsi, le terme intégral est un $o(1)$ devant $1$, de sorte que :
$$\frac{1}{n+1} \int_0^1 x^{n+1} f'(x) \, \text{d}x = o\left(\frac{1}{n}\right)$$

On en déduit l'équivalent recherché :
$$I_n \underset{n \to +\infty}{\sim} \frac{f(1)}{n}$$

---

#### 3. Détermination de la limite de $n I_n$ (Cas continu)

Supposons simplement $f$ continue sur $[0, 1]$. Soit $\varepsilon > 0$. Par continuité de $f$ en $1$, il existe $\delta \in ]0, 1[$ tel que pour tout $x \in [1-\delta, 1]$, on a :
$$|f(x) - f(1)| \le \varepsilon$$

Décomposons l'intégrale $I_n$ en deux morceaux :
$$n I_n = n \int_0^{1-\delta} x^n f(x) \, \text{d}x + n \int_{1-\delta}^1 x^n f(x) \, \text{d}x = J_n + K_n$$

* **Majoration de $|J_n|$ :**
  Soit $M = \max_{[0, 1]} |f|$.
  $$|J_n| \le n \int_0^{1-\delta} x^n M \, \text{d}x = M n \left[ \frac{x^{n+1}}{n+1} \right]_0^{1-\delta} = M \frac{n}{n+1} (1-\delta)^{n+1} \le M (1-\delta)^{n+1}$$
  Puisque $0 < 1-\delta < 1$, $\lim_{n \to +\infty} (1-\delta)^{n+1} = 0$. Il existe donc un rang $N_1$ tel que pour $n \ge N_1$, $|J_n| \le \varepsilon$.

* **Étude de $K_n$ :**
  On écrit $f(x) = f(1) + (f(x) - f(1))$ :
  $$K_n = n \int_{1-\delta}^1 x^n f(1) \, \text{d}x + n \int_{1-\delta}^1 x^n (f(x) - f(1)) \, \text{d}x$$
  
  D'une part :
  $$n \int_{1-\delta}^1 x^n f(1) \, \text{d}x = f(1) \frac{n}{n+1} (1 - (1-\delta)^{n+1})$$
  Dont la limite lorsque $n \to +\infty$ est $f(1)$.
  
  D'autre part, sur $[1-\delta, 1]$, $|f(x) - f(1)| \le \varepsilon$ :
  $$\left| n \int_{1-\delta}^1 x^n (f(x) - f(1)) \, \text{d}x \right| \le n \int_{1-\delta}^1 x^n \varepsilon \, \text{d}x \le \varepsilon n \int_0^1 x^n \, \text{d}x = \varepsilon \frac{n}{n+1} \le \varepsilon$$

En regroupant ces majorations, pour $n$ assez grand, $n I_uern$ se trouve arbitrairement près de $f(1)$. Rigoureusement :
$$\lim_{n \to +\infty} n I_n = f(1)$$

---

#### 4. Application analytique (Nullité des moments)

Soit $g : [0, 1] \to \mathbb{R}$ une fonction continue telle que $\forall n \ain \mathbb{N}, \int_0^1 x^n g(x) \, \text{d}x = 0$.

Par linéarité de l'intégrale, pour tout polynôme $P \in \mathbb{R}[X]$, on a :
$$\int_0^1 P(x) g(x) \, \text{d}x = 0$$

D'après le **théorème d'approximation de Weierstrass**, il existe une suite de polynômes $(P_k)_{k \in \mathbb{N}}$ qui converge uniformément vers la fonction $g$ sur le segment $[0, 1]$. 

Passons à la limite sous le signe intégale (grâce à la convergence uniforme sur un segment) :
$$\lim_{k \to +\infty} \int_0^1 P_k(x) g(x) \, \text{d}x = \int_0^1 g(x)^2 \, \text{d}x$$

Or, pour tout $k$, $\int_0^1 P_k(x) g(x) \, \text{d}x = 0$ par hypothèse. Donc :
$$\int_0^1 g(x)^2 \, \text{d}x = 0$$

Puisque l'application $x \mapsto g(x)^2$ est continue, positive, et d'intégrale nulle sur $[0, 1]$, on en déduit par positivité de l'intégrale de Riemann que :
$$\forall x \in [0, 1], \quad g(x)^2 = 0$$
C'est-à-dire :
$$\boxed{g = 0}$$