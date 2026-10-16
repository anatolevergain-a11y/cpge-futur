---
title: 'Exercice 2 : Formules de Taylor'
description: 'Problème d entraînement type concours.'
---

# Concours Blanc - Correction détaillée : Formules de Taylor et Développements Limités

**Filière :** MP2I  
**Matière :** Mathématiques  
Chapitre: ** Suites, dérivées et développements limités  
**Thème :** Formules de Taylor avec reste intégral et applications aux suites récurrentes et aux équations différentielles.

---

## Introduction de l'examinateur

Ce problème aborde l'utilisation des formules de Taylor, en particulier la formule de Taylor avec reste intégral et l'inégalité de Taylor-Lagrange, qui sont des outils fondamentaux en classe de MP2I. L'objectif est d'évaluer la rigueur dans la manipulation des bornes d'intégration, l'estimation d'erreurs, ainsi que la capacité à lier analyse locale (développements limités) et analyse globale (comportement de suites).

---

## Énoncé du Problème

Soit $f : \mathbb{R} \to \mathbb{R}$ une fonction de classe $\mathcal{C}^{n+1}$ sur un intervalle $I$ contenant $0$. 

### Partie I : Formule de Taylor avec reste intégral
On rappelle que pour tout $x \in I$, la formule de Taylor avec reste intégral à l'ordre $n$ s'écrit :
$$f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(0)}{k!} x^k + \int_0^x \frac{(x-t)^n}{n!} f^{(n+1)}(t) \, dt$$

1. Démontrer cette formule par récurrence sur $n \in \mathbb{N}$.
2. En déduire l'inégalité de Taylor-Lagrange : si $f$ est de classe $\mathcal{C}^{n+1}$ sur $[0, x]$ (avec $x > 0$) et qu'il existe une constante $M_{n+1} \ge 0$ telle que pour tout $t \in [0, x]$, $|f^{(n+1)}(t)| \le M_{n+1}$, alors :
   $$\left| f(x) - \sum_{k=0}^{n} \frac{f^{(k)}(0)}{k!} x^k \right| \le M_{n+1} \frac{x^{n+1}}{(n+1)!}$$

### Partie II : Étude d'une fonction et développement asymptotique
On considère la fonction $f$ définie sur $\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$ par $f(x) = \ln(\cos(x))$.
1. Justifier que $f$ est de classe $\mathcal{C}^\infty$ sur son intervalle de définition et calculer ses premières dérivées en $0$.
2. Déterminer le développement limité de $f$ à l'ordre $4$ en $0$.
3. Soit $(u_n)_{n \in \mathbb{N}}$ la suite définie par $u_0 \in \left(0, \frac{\pi}{2}\right)$ et la relation de récurrence $u_{n+1} = \sin(u_n)$. 
   Déterminer un équivalent de $u_n$ lorsque $n \to +\infty$.

---

## Corrigé Rédigé Pas à Pas

### Partie I : Formule de Taylor avec reste intégral

#### Question 1 : Démonstration par récurrence
* **Initialisation ($n = 0$) :**
  Pour $n = 0$, la formule s'écrit :
  $$f(x) = f(0) + \int_0^x f'(t) \, dt$$
  C'est une application directe du théorème fondamental de l'analyse (puisque $f$ est $\mathcal{C}^1$). L'initialisation est vraie.

* **Hérédité :**
  Soit $n \in \mathbb{N}$. Supposons que la formule soit vraie au rang $n$, c'est-à-dire :
  $$f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(0)}{k!} x^k + \int_0^x \frac{(x-t)^n}{n!} f^{(n+1)}(t) \, dt$$
  Intégrons par parties le terme de reste $R_n(x) = \int_0^x \frac{(x-t)^n}{n!} f^{(n+1)}(t) \, dt$.
  Posons :
  * $u(t) = f^{(n+1)}(t) \implies u'(t) = f^{(n+2)}(t)$
  * $v'(t) = \frac{(x-t)^n}{n!} \implies v(t) = -\frac{(x-t)^{n+1}}{(n+1)!}$

  Les fonctions $u$ et $v'$ sont continues (car $f$ est $\mathcal{C}^{n+2}$). L'intégration par parties donne :
  $$R_n(x) = \left[ -\frac{(x-t)^{n+1}}{(n+1)!} f^{(n+1)}(t) \right]_0^x - \int_0^x \left( -\frac{(x-t)^{n+1}}{(n+1)!} \right) f^{(n+2)}(t) \, dt$$
  En évaluant aux bornes :
  * En $t = x$, le terme s'annule (car $x-x = 0$).
  * En $t = 0$, on obtient : $-\frac{x^{n+1}}{(n+1)!} f^{(n+1)}(0)$. Avec le signe $-$, cela fait $\frac{f^{(n+1)}(0)}{(n+1)!} x^{n+1}$.

  On a donc :
  $$R_n(x) = \frac{f^{(n+1)}(0)}{(n+1)!} x^{n+1} + \int_0^x \frac{(x-t)^{n+1}}{(n+1)!} f^{(n+2)}(t) \, dt$$
  En réinjectant dans l'hypothèse de récurrence :
  $$f(x) = \sum_{k=0}^{n+1} \frac{f^{(k)}(0)}{k!} x^k + \int_0^x \frac{(x-t)^{n+1}}{(n+1)!} f^{(n+2)}(t) \, dt$$
  La propriété est donc vraie au rang $n+1$.

* **Conclusion :** Par le principe de récurrence, la formule est vraie pour tout $n \in \mathbb{N}$. $\blacksquare$

#### Question 2 : Inégalité de Taylor-Lagrange
À partir de la formule précédente, pour $x > 0$ :
$$f(x) - \sum_{k=0}^{n} \frac{f^{(k)}(0)}{k!} x^k = \int_0^x \frac{(x-t)^n}{n!} f^{(n+1)}(t) \, dt$$
En passant à la valeur absolue :
$$\left| f(x) - \sum_{k=0}^{n} \frac{f^{(k)}(0)}{k!} x^k \right| \le \int_0^x \frac{(x-t)^n}{n!} \left| f^{(n+1)}(t) \right| \, dt$$
Puisque pour tout $t \in [0, x]$, on a $\left| f^{(n+1)}(t) \right| \le M_{n+1}$ et que $(x-t)^n \ge 0$ sur $[0, x]$ :
$$\left| f(x) - \sum_{k=0}^{n} \frac{f^{(k)}(0)}{k!} x^k \text{ \text{---} } \right| \le \frac{M_{n+1}}{n!} \int_0^x (x-t)^n \, dt$$
Calculons l'intégrale :
$$\int_0^x (x-t)^n \, dt = \left[ -\frac{(x-t)^{n+1}}{n+1} \right]_0^x = \frac{x^{n+1}}{n+1}$$
Finalement :
$$\left| f(x) - \sum_{k=0}^{n} \frac{f^{(k)}(0)}{k!} x^k \right| \le \frac{M_{n+1}}{(n+1)!} x^{n+1} \quad \blacksquare$$

---

### Partie II : Étude d'une fonction et développement asymptotique

#### Question 1 : Régularité et dérivées de $f$
La fonction $x \mapsto \cos(x)$ est de classe $\mathcal{C}^\infty$ sur $\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$ et à valeurs dans $\left[0, 1\right[$. La fonction $u \mapsto \ln(u)$ est de classe $\mathcal{C}^\infty$ sur $\left[0, 1\right[$ (en tant que restriction). Par composition, $f$ est de classe $\mathcal{C}^\infty$ sur $\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$.

Calculons les dérivées successives :
* $f(x) = \ln(\cos(x)) \implies f(0) = 0$
* $f'(x) = \frac{-\sin(x)}{\cos(x)} = -\tan(x) \implies f'(0) = 0$
* $f''(x) = -(1 + \tan^2(x)) \implies f''(0) = -1$
* $f^{(3)}(x) = -2\tan(x)(1+\tan^2(x)) \implies f^{(3)}(0) = 0$
* $f^{(4)}(x) = -2(1+\tan^2(x))^2 - 4\tan^2(x)(1+\tan^2(x)) \implies f^{(4)}(0) = -2$

#### Question 2 : Développement limité à l'ordre 4
Par la formule de Taylor-Young (ou en utilisant les DL usuels de $\cos(x) = 1 - \frac{x^2}{2} + \frac{x^4}{24} + o(x^4)$) :
$$f(x) = \ln\left(1 - \left(\frac{x^2}{2} - \frac{x^4}{24}\right) + o(x^4)\right)$$
En utilisant le DL de $\ln(1+u) = u - \frac{u^2}{2} + o(u^2)$ avec $u = -\frac{x^2}{2} + \frac{x^4}{24}$ :
$$f(x) = \left(-\frac{x^2}{2} + \frac{x^4}{24}\right) - \frac{1}{2}\left(-\frac{x^2}{2}\right)^2 + o(x^4)$$
$$f(x) = -\frac{x^2}{2} + \frac{x^4}{24} - \frac{x^4}{8} + o(x^4) = -\frac{x^2}{2} - \frac{x^4}{12} + o(x^4)$$

#### Question 3 : Étude de la suite $(u_n)$
1. **Comportement de la suite :** 
   Puisque $u_0 \in \left(0, \frac{\pi}{2}\right)$ et que pour tout $x \in \left(0, \frac{\pi}{2}\right)$, $0 < \sin(x) < x$, la suite $(u_n)$ est strictement décroissante et minorée par $0$. Elle converge donc vers une limite $\ell \ge 0$. Par continuité de $\sin$, $\ell = \sin(\ell)$, d'où $\ell = 0$.
2. **Équivalent de $u_n$ :**
   Étudions la suite des inverses $\frac{1}{u_n^2}$.
   $$\frac{1}{u_{n+1}^2} = \frac{1}{\sin^2(u_n)}$$
   Utilisons le DL de $\sin(x) = x - \frac{x^3}{6} + o(x^3)$ :
   $$\sin^2(u_n) = \left(u_n - \frac{u_n^3}{6} + o(u_n^3)\right)^2 = u_n^2 - \frac{u_n^4}{3} + o(u_n^4)$$
   Ainsi :
   $$\frac{1}{u_{n+1}^2} = \frac{1}{u_n^2 \left(1 - \frac{u_n^2}{3} + o(u_n^2)\right)} = \frac{1}{u_n^2} \left(1 + \frac{u_n^2}{3} + o(u_n^2)\right) = \frac{1}{u_n^2} + \frac{1}{3} + o(1)$$
   On reconnait une suite arithmético-géométrique sur $v_n = \frac{1}{u_n^2}$ :
   $$v_{n+1} - v_n = \frac{1}{3} + o(1)$$
   Par sommation de Cesaro ou télescopage, $v_n \sim \frac{n}{3}$.
   Par conséquent :
   $$\frac{1}{u_n^2} \sim \frac{n}{3} \implies u_n^2 \sim \frac{3}{n} \implies u_n \underset{n\to+\infty}{\sim} \sqrt{\frac{3}{n}}$$

---

## Analyse Critique des Résultats par l'Examinateur

* **Points de vigilance :** L'utilisation de l'intégration par parties dans la question I.1 exige de bien justifier la classe de régularité ($\mathcal{C}^{n+2}$) pour éviter toute rupture d'hypothèse.
* **Piège classique :** Dans la partie II.3, l'oubli du terme d'ordre 4 dans l'élévation au carré de $\sin(u_n)$ conduit à une erreur de reste qui fausse l'estimation de $\frac{1}{u_{n+1}^2} - \frac{1}{u_n^2}$. 
* **Conclusion pédagogique :** Ce problème illustre la puissance des développements limités combinés aux relations de récurrence non linéaires, un grand classique des concours MP2I.