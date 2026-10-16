---
title: 'Cours : Séries de Fourier et analyse harmonique'
description: 'Synthèse officielle du cours et démonstrations théoriques pour CPGE MP.'
---

# 📚 Mathématiques MP : Séries de Fourier et analyse harmonique

## 📌 1. Définitions & Cadre d'étude

L'étude des séries de Fourier s'inscrit dans le cadre de l'approximation des fonctions périodiques par des fonctions trigonométriques simples (harmoniques).

### Espace des fonctions continues par morceaux et $T$-périodiques
Soit $T > 0$ un réel fixé, et $\omega = \frac{2\pi}{T}$ la pulsation fondamentale.
On note $\mathcal{E}_T$ l'espace vectoriel des fonctions de $\mathbb{R}$ dans $\mathbb{C}$ (ou $\mathbb{R}$) qui sont $T$-périodiques et continues par morceaux sur $\mathbb{R}$.

### Produit hermitien et structure préhilbertienne
Sur l'espace $\mathcal{C}_{pm}(\mathbb{R}, \mathbb{C})$ des fonctions $T$-périodiques et continues par morceaux, on définit un produit scalaire hermitien par :
$$\langle f, g \rangle = \frac{1}{T} \int_{0}^{T} f(t)\overline{g(t)} \, \mathrm{d}t$$
La norme associée est la norme quadratique moyenne :
$$\|f\|_2 = \sqrt{\langle f, f \rangle} = \left( \frac{1}{T} \int_{0}^{T} |f(t)|^2 \, \mathrm{d}t \right)^{\frac{1}{2}}$$

### Coefficients de Fourier
Pour $f \in \mathcal{E}_T$ et $n \in \mathbb{Z}$, on définit le $n$-ième coefficient de Fourier exponentiel de $f$ par :
$$c_n(f) = \langle f, e_{n} \rangle = \frac{1}{T} \int_{0}^{T} f(t)e^{-in\omega t} \, \mathrm{d}t$$
où $e_n : t \mapsto e^{in\omega t}$.

Pour des fonctions à valeurs réelles, on utilise souvent les coefficients trigonométriques :
$$a_0(f) = \frac{2}{T} \int_{0}^{T} f(t) \, \mathrm{d}t = 2c_0(f)$$
$$a_n(f) = \frac{2}{T} \int_{0}^{T} f(t)\cos(n\omega t) \, \mathrm{d}t = c_n(f) + c_{-n}(f) \quad (\text{pour } n \ge 1)$$
$$b_n(f) = \frac{2}{T} \int_{0}^{T} f(t)\sin(n\omega t) \, \mathrm{d}t = i(c_n(f) - c_{-n}(f)) \quad (\text{pour } n \ge 1)$$

### Série de Fourier
On appelle série de Fourier de $f$ la série de fonctions notée $\mathcal{S}(f)$ :
$$\mathcal{S}(f)(t) = \sum_{n=-\infty}^{+\infty} c_n(f)e^{in\omega t} = a_0(f) + \sum_{n=1}^{+\infty} \left( a_n(f)\cos(n\omega t) + b_n(f)\sin(n\omega t) \right)$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Lemme de Riemann-Lebesgue
**Énoncé :** Si $f \in \mathcal{E}_T$, alors $\lim_{|n| \to +\infty} c_n(f) = 0$ (et de même pour $a_n(f)$ et $b_n(f)$).

**Démonstration :** 
1. Si $f$ est de classe $\mathcal{C}^1$, une integration par parties donne :
   $$c_n(f) = \frac{1}{T} \left[ f(t) \frac{e^{-in\omega t}}{-in\omega} \right]_0^T - \frac{1}{T} \int_0^T f'(t) \frac{e^{-in\omega t}}{-in\omega} \, \mathrm{d}t$$
   Par $T$-periodicite, le terme tout integre s'annule, et le reste est en $O(1/n)$, ce qui tend vers $0$.
2. Si $f$ est seulement continue par morceaux, par densite des fonctions $\mathcal{C}^1$ dans $\mathcal{E}_T$ pour la norme $\|\cdot\|_1$ (ou approximation par des fonctions en escalier), pour tout $\varepsilon > 0$, il existe $g \in \mathcal{C}^1$ telle que $\|f-g\|_1 \le \varepsilon$. 
   On conclut par l'inegalite $|c_n(f)| \le |c_n(f-g)| + |c_n(g)| \le \frac{1}{T}\|f-g\|_1 + |c_n(g)|$.

### Théorème de Dirichlet (Convergence simple)
**Énoncé :** Si $f \in \mathcal{E}_T$ et est de classe $\mathcal{C}^1$ par morceaux sur $\mathbb{R}$, alors pour tout $t \in \mathbb{R}$, la série de Fourier de $f$ converge et :
$$\sum_{n=-\infty}^{+\infty} c_n(f)e^{in\omega t} = \frac{f(t^+) + f(t^-)}{2}$$
En tout point de continuité, la série converge vers $f(t)$.

### Théorème de Parseval
**Énoncé :** Si $f \in \mathcal{E}_T$, alors la famille $(e_{n})_{n \in \mathbb{Z}}$ n'est pas seulement orthonormée, elle est totale (théorème de Weierstrass trigonométrique). Dès lors, pour tout $f \in \mathcal{E}_T$, on a l'égalité de Parseval :
$$\sum_{n=-\infty}^{+\infty} |c_n(f)|^2 = \|f\|_2^2 = \frac{1}{T} \int_{0}^{T} |f(t)|^2 \, \mathrm{d}t$$
Sous forme trigonométrique :
$$\frac{a_0^2}{4} + \frac{1}{2} \sum_{n=1}^{+\infty} (a_n^2 + b_n^2) = \frac{1}{T} \int_{0}^{T} f(t)^2 \, \mathrm{d}t$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Exploitation des parités
Soit $f \in \mathcal{E}_T$.
* Si $f$ est **paire**, alors pour tout $n \in \mathbb{N}^*$, $b_n(f) = 0$ et $c_n(f) = \frac{a_n(f)}{2} \in \mathbb{R}$.
* Si $f$ est **impaire**, alors $a_0(f) = 0$ et pour tout $n \in \mathbb{N}^*$, $a_n(f) = 0$ et $c_n(f) = -i \frac{b_n(f)}{2} \in i\mathbb{R}$.

### Dérivation et intégration des séries de Fourier
* **Intégration :** Si $f \in \mathcal{E}_T$ et $F(t) = \int_{0}^{t} \left( f(u) - c_0(f) \right) \mathrm{d}u$, alors $F$ est de classe $\mathcal{C}^1$ et ses coefficients de Fourier s'obtiennent par division par $in\omega$ des coefficients de $f$. La série de Fourier de $F$ s'obtient par intégration terme à terme de la série de $f$.
* **Dérivation :** Si $f$ est de classe $\mathcal{C}^1$ et $T$-périodique, les coefficients de Fourier de $f'$ sont $c_n(f') = in\omega c_n(f)$.

### Algorithme de sommation d'une série numérique via Parseval
Pour sommer une série du type $\sum_{n=1}^{+\infty} \frac{1}{n^2}$ :
1. Choisir une fonction $f$ simple (souvent $f(t) = t$ sur $]-\pi, \pi[$ prolongée par $2\pi$-périodicité).
2. Calculer ses coefficients de Fourier ($a_n = 0$, $b_n = \frac{2(-1)^{n+1}}{n}$).
3. Appliquer le théorème de Parseval sur l'intervalle de définition pour obtenir la somme des carrés des coefficients.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confusion entre convergence simple, normale et en norme quadratique :**
   Le théorème de Dirichlet assure une convergence simple (voire uniforme sur tout compact ne contenant pas de points de discontinuité si $f$ est continue). Cependant, la convergence normale de la série de Fourier $\sum c_n e^{in\omega t}$ **n'est pas garantie** si $f$ est seulement $\mathcal{C}^1$ par morceaux (la convergence normale implique la continuité de la somme, ce qui échouerait si $f$ a des sauts). Pour avoir convergence normale, il faut que $f$ soit continue et de classe $\mathcal{C}^1$ par morceaux.

2. **Oubli du facteur $1/T$ ou $2/T$ dans les formules d'intégrations.**
   Soyez rigoureux sur les bornes : $\int_0^T$ ou $\int_{-T/2}^{T/2}$. 

3. **Mauvaise application de Parseval :**
   Parseval s'applique avec la norme $\|\cdot\|_2^2$, c'est-à-dire avec le facteur $\frac{1}{T} \int_0^T |f(t)|^2 \, \mathrm{d}t$ à gauche, et non $\int_0^T |f(t)|^2 \, \mathrm{d}t$.

4. **Évaluation de la série de Fourier en un point de discontinuité :**
   Ne jamais affirmer qu'une série de Fourier converge vers $f(t)$ en un point de saut $t_0$, mais bien vers $\frac{1}{2}(f(t_0^+) + f(t_0^-))$. Mentionner systématiquement les hypothèses du théorème de Dirichlet.