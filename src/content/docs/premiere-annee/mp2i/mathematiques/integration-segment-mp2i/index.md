---
title: "📌 1. Définitions & Cadre d'étude"
description: "Fiche de cours et d'exercice CPGE."
---

## 📌 1. Définitions & Cadre d'étude

Le cadre de l'intégration au programme de MP2I est l'intégration des fonctions continues par morceaux (et plus généralement réglées) sur un segment de $\mathbb{R}$, dans le cas à valeurs réelles ou complexes.

### A. Subdivisions et fonctions en escalier

Soit $[a, b]$ un segment de $\mathbb{R}$ avec $a < b$.

Subdivision: Une subdivision $\sigma$ de $[a, b]$ est une finie de points $(x_0, x_1, \dots, x_n)$ tels que :
  $$a = x_0 < x_1 < x_2 < \dots < x_n = b$$
* **Fonction en escalier :** Une fonction $f : [a, b] \to \mathbb{K}$ (avec $\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$) est dite en escalier s'il existe une subdivision $\sigma = (x_0, \dots, x_n)$ de $[a, b]$ telle que $f$ soit constante sur chaque intervalle ouvert $]x_i, x_{i+1}[$ pour $0 \le i \le n-1$.
* **Intégrale d'une fonction en escalier :** Si $f$ est en escalier associée à la subdivision $\sigma$, pour tout $i \in \{0, \dots, n-1\}$, $f$ est constante de valeur $c_i$ sur $]x_i, x_{i+1}[$. L'intégrale de $f$ sur $[a, b]$ est définie par :
  $$\int_a^b f(t) \, dt = \sum_{i=0}^{n-1} (x_{i+1} - x_i) c_i$$
  Cette valeur est indépendante de la subdivision $\sigma$ choisie.

### B. Fonctions continues par morceaux

* **Définition :** Une fonction $f : [a, b] \to \mathbb{K}$ est dite continue par morceaux s'il existe une subdivision $\sigma = (x_0, \dots, x_n)$ de $[a, b]$ telle que :
  1. Pour tout $i \in \{0, \dots, n-1\}$, la restriction de $f$ à $]x_i, x_{i+1}[$ se prolonge en une fonction continue sur le segment fermé $[x_i, x_{i+1}]$.
  2. $f$ admet des limites finies à droite en $x_i$ (pour $i < n$) et à gauche en $x_i$ (pour $i > 0$).
* **Espace vectoriel :** L'ensemble des fonctions continues par morceaux de $[a, b]$ dans $\mathbb{K}$, noté $\mathcal{CPM}([a, b], \mathbb{K})$, est un $\mathbb{K}$-espace vectoriel.

### C. Construction de l'intégrale de Riemann

Pour $f \in \mathcal{CPM}([a, b], \mathbb{R})$, on définit son intégrale par encadrement à l'aide des fonctions en escalier :
$$\int_a^b f(t) \, dt = \sup_{\substack{\phi \text{ en escalier} \\ \phi \le f}} \int_a^b \phi(t) \, dt = \inf_{\substack{\psi \text{ en escalier} \\ \psi \ge f}} \int_a^b \psi(t) \, dt$$

Pour $f = u + iv \in \mathcal{CPM}([a, b], \mathbb{C})$, on pose :
$$\int_a^b f(t) \, dt = \int_a^b u(t) \, dt + i \int_a^b v(t) \, dt$$
---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### A. Propriétés fondamentales de l'intégrale

Soient $f, g \in \mathcal{CPM}([a, b], \mathbb{K})$ et $\alpha, \beta \in \mathbb{K}$.

1. **Linéarité :** 
   $$\int_a^b (\alpha f(t) + \beta g(t)) \, dt = \alpha \int_a^b f(t) \, dt + \beta \int_a^b g(t) \, dt$$
2. **Relation de Chasles :** 
   Soit $c \in [a, b]$, alors :
   $$\int_a^b f(t) \, dt = \int_a^c f(t) \, dt + \int_c^b f(t) \, dt$$
3. **Positivité (pour $f$ réelle) :** 
   Si $f \ge 0$ sur $[a, b]$, alors $\int_a^b f(t) \, dt \ge 0$.
4. **Croissance :** 
   Si $f \le g$ sur $[a, b]$, alors $\int_a^b f(t) \, dt \le \int_a^b g(t) \, dt$.
5. **Inégalité triangulaire (cas général) :** 
   $$\left| \int_a^b f(t) \, dt \right| \le \int_a^b |f(t)| \, dt$$

---

### B. Théorème Fondamental de l'Analyse (TFA)

> **Théorème :** 
> Soit $f : [a, b] \to \mathbb{K}$ une fonction continue. Pour $x \in [a, b]$, on pose :
> $$F(x) = \int_a^x f(t) \, dt$$
> Alors $F$ est de classe $\mathcal{C}^1$ sur $[a, b]$ et pour tout $x \in [a, b]$, on a $F'(x) = f(x)$.
> Autrement dit, $F$ est une primitive de $f$ sur $[a, b]$.

* **Démonstration :**
  Soit $x_0 \in [a, b]$ et soit $x \in [a, b]$ tel que $x \neq x_0$. Par la relation de Chasles :
  $$F(x) - F(x_0) = \int_{x_0}^x f(t) \, dt$$
  On écrit alors :
  $$F(x) - F(x_0) - f(x_0)(x - x_0) = \int_{x_0}^x f(t) \, dt - \int_{x_0}^x f(x_0) \, dt = \int_{x_0}^x (f(t) - f(x_0)) \, dt$$
  Soit $\varepsilon > 0$. Puisque $f$ est continue en $x_0$, il existe $\delta > 0$ tel que pour tout $t \in [a, b]$ vérifiant $|t - x_0| \le \delta$, on a $|f(t) - f(x_0)| \le \varepsilon$.
  Supposons $|x - x_0| \le \delta$. Par l'inégalité triangulaire sur les intégrales :
  $$\left| \int_{x_0}^x (f(t) - f(x_0)) \, dt \right| \le \left| \int_{x_0}^x |f(t) - f(x_0)| \, dt \right| \le \varepsilon |x - x_0|$$
  Ainsi, pour tout $x \neq x_0$ tel que $|x - x_0| \le \delta$ :
  $$\left| \frac{F(x) - F(x_0)}{x - x_0} - f(x_0) \right| \le \varepsilon$$
  Cela prouve que $F$ est dérivable en $x_0$ et que $F'(x_0) = f(x_0)$. La continuité de $f$ assure alors que $F'$ est continue, donc $F$ est de classe $\mathcal{C}^1$. $\blacksquare$

---

### C. Théorèmes de la moyenne

1. **Premier théorème de la moyenne :**
   Si $f \in \mathcal{CPM}([a, b], \mathbb{R})$, alors :
   $$m(b-a) \le \int_a^b f(t) \, dt \le M(b-a)$$
   où $m = \inf_{[a,b]} f$ et $M = \sup_{[a,b]} f$.
2. **Forme de la moyenne pour les fonctions continues :**
   Si $f : [a, b] \to \mathbb{R}$ est continue, il existe $\mathcal{c} \in ]a, b[$ tel que :
   $$\int_a^b f(t) \, dt = f(c)(b-a)$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### A. Primitives et intégration par parties (IPP)

* **Formule fondamentale :** Si $f$ est continue sur $[a, b]$ et $F$ est une primitive de $f$ :
  $$\int_a^b f(t) \, dt = F(b) - F(a) = [F(t)]_a^b$$
* **Intégration par parties :** Si $u$ et $v$ sont de classe $\mathcal{C}^1$ sur $[a, b]$ :
  $$\int_a^b u(t)v'(t) \, dt = [u(t)v(t)]_a^b - \int_a^b u'(t)v(t) \, dt$$

### B. Changement de variable (CV)

* **Théorème :** Soit $\phi : [\alpha, \beta] \to [a, b]$ une bijection de classe $\mathcal{C}^1$. Si $f$ est continue sur $[a, b]$, alors :
  $$\int_a^b f(x) \, dx = \int_\alpha^\beta f(\phi(t))\phi'(t) \, dt$$
  *(Attention : il faut veiller à bien inverser ou adapter les bornes selon le sens de variation de $\phi$ si l'on énonce la formule générale, ici avec $\phi(\alpha)=a$ et $\phi(\beta)=b$).*

### C. Sommes de Riemann

> **Définition / Théorème :** 
> Si $f : [a, b] \to \mathbb{K}$ est continue par morceaux, alors la suite des sommes de Riemann $S_n$ converge vers $\int_a^b f(t) \, dt$ lorsque $n \to +\infty$ :
> $$\lim_{n \to +\infty} \frac{b-a}{n} \sum_{k=0}^{n-1} f\left(a + k\frac{b-a}{n}\right) = \int_a^b f(t) \, dt$$

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oubli de la continuité par morceaux :** 
   Ne jamais appliquer le Théorème Fondamental de l'Analyse ou les formules usuelles de primitives à des fonctions qui présentent des singularités non intégrables ou qui ne sont pas continues sur le segment.
2. **Mauvais maniement du changement de variable :** 
   Oublier de transformer la différentielle ($dx = \phi'(t)dt$) ou d'adapter les bornes de l'intégrale, ce qui fausse totalement le résultat.
3. **Confusion entre intégrale et primitive :** 
   $\int_a^b f(t) \, dt$ est un **nombre** (qui ne dépend pas de la variable muette $t$), alors que $\int_a^x f(t) \, dt$ est une **fonction** de la variable $x$. Écrire $\int_a^b f(x) \, dx = f(x)$ est une hérésie mathématique majeure.
4. **Utilisation abusive de l'inégalité triangulaire inversée :** 
   Attention au sens des inégalités lors des majorations d'intégrales. Pour un encadrement fin, majorer la valeur absolue de l'intégrale par l'intégrale de la valeur absolue :
   $$\left| \int_a^b f(t) \, dt \right| \le \int_a^b |f(t)| \, dt \le (b-a) \sup_{[a,b]} |f|$$