---
title: 'Exercice 2 : Théorème fondamental de l analyse'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse asymptotique d'une fonction définie par une intégrale et modélisation physique

*Ce problème s'inspire des épreuves écrites des concours Mines-Ponts et Centrale-Supélec. Il illustre l'application du Théorème Fondamental de l'Analyse (TFA) à l'étude de fonctions définies par des intégrales dépendant d'un paramètre, ainsi que l'importance d'un regard critique sur les ordres de grandeur dans un modèle approché.*

---

## I. Énoncé du problème

Dans ce problème, on s'intéresse à la fonction $F$ définie sur $\mathbb{R}_+^*$ par :
$$F(x) = \int_{x}^{x^2} \frac{e^{-t}}{t} \, dt$$

L'objectif est d'étudier les propriétés de régularité de $F$, de déterminer son comportement aux limites (en $0^+$ et en $+\infty$), et d'analyser la pertinence d'un modèle linéaire approché dans le cadre d'un traitement numérique du signal.

---

## II. Questions

### Partie A : Étude générale et régularité

1. **Justification de l'existence :** Soit $x > 0$. Justifier que l'intégrale définissant $F(x)$ est convergente et bien définie.
2. **Dérivabilité :** En utilisant le Théorème Fondamental de l'Analyse, montrer que $F$ est de classe $\mathcal{C}^1$ sur $\mathbb{R}_+^*$. Exprimer sa dérivée $F'(x)$ pour tout $x > 0$.
3. **Sens de variations :** Déterminer le signe de $F'(x)$ sur $\mathbb{R}_+^*$. En déduire les variations de la fonction $F$. Quel est le signe de $F(x)$ pour $x > 0$ ?

### Partie B : Comportement aux limites (Analyse asymptotique)

4. **Comportement en $+\infty$ :** 
   a. À l'aide d'un encadrement de la fonction integrand sur l'intervalle $[x, x^2]$ pour $x > 1$, montrer que $\lim_{x \to +\infty} F(x) = 0$.
   b. Préciser un équivalent simple de $F(x)$ lorsque $x$ tend vers $+\infty$.
5. **Comportement en $0^+$ :** 
   a. Pour $x \in ]0, 1[$, décomposer l'intégrale définissant $F(x)$ en faisant apparaître l'intégrale de $\frac{1}{t}$ et une intégrale portant sur une fonction prolongeable par continuité en $0$.
   b. En déduire un équivalent ou un développement limité à l'ordre 1 de $F(x)$ lorsque $x \to 0^+$. Quelle est la limite de $F(x)$ dans ce régime ?

### Partie C : Regard critique et modélisation physique

6. **Application numérique et limites du modèle :** 
   Dans un système de traitement du signal, $F(x)$ représente la réponse filtrée d'un capteur, où $x$ exprime une fréquence normalisée (exprimée en $\text{Hz}$). 
   * On cherche à approximer $F(x)$ par sa tangente en un point de fonctionnement $x_0 = 1$. 
   * Écrire l'approximation affine de $F(x)$ au voisinage de $1$.
   * *Analyse critique :* Si le capteur fonctionne dans un régime de hautes fréquences ($x = 10^3 \, \text{Hz}$), l'approximation linéaire est-elle valide d'un point de vue physique ? Discuter en comparant les ordres de grandeur de $F(x)$ et de son approximation.

---

## III. Pistes et indications

* **Q1 & Q2 :** Pensez à relier $F(x)$ à une primitive $G$ de la fonction $g(t) = \frac{e^{-t}}{t}$ (qui est continue sur $\mathbb{R}_+^*$). Utilisez ensuite le théorème de dérivation d'une fonction composée.
* **Q4 :** Sur $[x, x^2]$, majorez et minorez l'intégrande par des expressions simples en exploitant la décroissance de $t \mapsto e^{-t}$.
* **Q5 :** Écrivez $\frac{e^{-t}}{t} = \frac{1}{t} + \frac{e^{-t}-1}{t}$. Remarquez que le second terme possède une limite finie en $0$.
* **Q6 :** Calculez $F(1)$ (qui vaut $0$) et $F'(1)$. Comparez la décroissance exponentielle de $F(x)$ en $+\infty$ avec la croissance linéaire (ou affine) de l'approximation.

---

## IV. Corrigé pas à pas

### Partie A : Étude générale et régularité

1. **Existence :** Pour tout $x > 0$, la fonction $t \mapsto \frac{e^{-t}}{t}$ est continue sur l'intervalle $[x, x^2]$ (si $x \neq 1$, ou réduite à un point si $x=1$ auquel cas l'intégrale est nulle). Il s'agit d'une intégrale de Riemann d'une fonction continue sur un segment, donc elle converge.
2. **Dérivabilité :** Soit $g(t) = \frac{e^{-t}}{t}$. $g$ est continue sur $\mathbb{R}_+^*$. Soit $a > 0$ un réel fixé. Posons $G(x) = \int_{a}^{x} g(t) \, dt$. D'après le Théorème Fondamental de l'Analyse, $G$ est de classe $\mathcal{C}^1$ sur $\mathbb{R}_+^*$ et $G'(x) = g(x)$.
   On remarque que :
   $$F(x) = G(x^2) - G(x)$$
   Comme $x \mapsto x^2$ est de classe $\mathcal{C}^1$ sur $\mathbb{R}_+^*$, par composition, $F$ est de classe $\mathcal{C}^1$ sur $\mathbb{R}_+^*$. 
   En dérivant, on obtient pour tout $x > 0$ :
   $$F'(x) = 2x \cdot G'(x^2) - 1 \cdot G'(x) = 2x \cdot \frac{e^{-x^2}}{x^2} - \frac{e^{-x}}{x} = \frac{2e^{-x^2} - e^{-x}}{x}$$
3. **Variations :** $F'(x) \ge 0 \iff 2e^{-x^2} \ge e^{-x} \iff -x^2 \ge \ln(1/2) - x \iff x^2 - x - \ln(2) \le 0$.
   Le discriminant de $X^2 - X - \ln(2)$ est $\Delta = 1 + 4\ln(2) > 0$. La dérivée est positive entre les deux racines et négative ailleurs.
   De plus, pour $x > 1$, $x^2 > x$, donc l'intervalle d'intégration est orienté dans le sens croissant et l'intégrant est strictement positif, donc $F(x) > 0$ pour $x > 1$. Pour $x \in ]0, 1[$, l'intervalle est inversé, $F(x) < 0$.

### Partie B : Comportement aux limites

4. **Comportement en $+\infty$ :**
   a. Pour $x > 1$, on a $x < t < x^2$. Donc $-t \le -x$, d'où $e^{-t} \le e^{-x}$. 
   Ainsi :
   $$0 \le F(x) \le \int_{x}^{x^2} \frac{e^{-x}}{t} \, dt = e^{-x} [\ln(t)]_{x}^{x^2} = e^{-x} \ln(x^2 / x) = e^{-x} \ln(x)$$
   Par encadrement, comme $\lim_{x \to +\infty} e^{-x}\ln(x) = 0$, on a $\lim_{x \to +\infty} F(x) = 0$.
   b. L'encadrement précédent montre que $F(x) = O(e^{-x}\ln x)$ en $+\infty$.

5. **Comportement en $0^+$ :**
   a. Pour $x \in ]0, 1[$ :
   $$F(x) = \int_{x}^{x^2} \frac{e^{-t}}{t} \, dt = \int_{x}^{x^2} \frac{1}{t} \, dt + \int_{x}^{x^2} \frac{e^{-t}-1}{t} \, dt = \ln(x^2) - \ln(x) + \int_{x}^{x^2} \frac{e^{-t}-1}{t} \, dt$$
   $$F(x) = \ln(x) + \int_{x}^{x^2} \frac{e^{-t}-1}{t} \, dt$$
   b. La fonction $h(t) = \frac{e^{-t}-1}{t}$ se prolonge par continuité en $0$ (sa limite est $-1$). Par conséquent, l'intégrale $\int_{x}^{x^2} h(t) \, dt$ a pour limite $\int_{0}^{0} h(t) \, dt = 0$ lorsque $x \to 0^+$.
   On en déduit que $F(x) \underset{0^+}{\sim} \ln(x)$. Ainsi, $\lim_{x^+\to 0} F(x) = -\infty$.

### Partie C : Regard critique et modélisation physique

6. **Application numérique et limites du modèle :**
   * Calculons $F(1) = \int_{1}^{1} \frac{e^{-t}}{t} \, dt = 0$.
   * La dérivée en $x_0 = 1$ vaut $F'(1) = \frac{2e^{-1} - e^{-1}}{1} = e^{-1}$.
   * L'approximation affine de $F$ au voisinage de $1$ est donc :
     $$F_{approx}(x) = F(1) + F'(1)(x - 1) = \frac{1}{e}(x - 1)$$
   * **Analyse critique :** 
     Pour $x = 10^3 \, \text{Hz}$ (régime de hautes fréquences), l'approximation linéaire donne $F_{approx}(10^3) \approx \frac{999}{e} \approx 367,5$. 
     Cependant, d'après notre étude en $+\infty$, la vraie valeur $F(10^3)$ tend vers $0$ (et est majorée par $e^{-1000} \ln(10^3)$, ce qui est mathématiquement quasi-nul et physiquement imperceptible). 
     **Conclusion du modèle :** Le modèle linéaire est totalement aberrant en dehors d'un voisinage très restreint de $x_0 = 1$. Il échoue à capturer l'amortissement exponentiel inhérent au phénomène physique modélisé par l'intégrale. En traitement du signal, utiliser cette approximation à haute fréquence conduirait à une divergence absurde, illustrant la nécessité absolue de coupler l'outil mathématique (ici le TFA et les développements) à une analyse critique des ordres de grandeur.