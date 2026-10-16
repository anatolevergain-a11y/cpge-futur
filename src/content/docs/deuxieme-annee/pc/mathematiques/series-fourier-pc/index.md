---
title: "📌 1. Définitions & Cadre d'étude"
description: "Fiche de cours et d'exercice CPGE."
---

## 📌 1. Définitions & Cadre d'étude

L'analyse harmonique étudie la décomposition de fonctions périodiques en superposition de signaux élémentaires harmoniques (sinusoïdes).

### Espaces fonctionnels et produit scalaire
On note $\mathcal{C}_{pm}(\mathbb{R}, \mathbb{C})$ l'espace vectoriel des fonctions continues par morceaux, $\mathbb{R} \to \mathbb{C}$. 
Pour toute fonction $T$-périodique (avec $T > 0$, ou de pulsation $\omega = \frac{2\pi}{T}$), on munit l'espace $\mathcal{C}_{pm}(\mathbb{R}, \mathbb{C})$ du produit scalaire hermitien canonique défini par :
$$\langle f, g \rangle = \frac{1}{T} \int_{0}^{T} f(t)\overline{g(t)}\,dt$$
La norme associée est la norme quadratique (ou norme $L^2$) :
$$\|f\|_2 = \sqrt{\langle f, f \rangle} = \left(\frac{1}{T} \int_{0}^{T} |f(t)|^2\,dt\right)^{\frac{1}{2}}$$

### Coefficients de Fourier
Soit $f \in \mathcal{C}_{pm}(\mathbb{R}, \mathbb{C})$ une fonction $T$-périodique.

* **Coefficients complexes** (pour $n \in \mathbb{Z}$) :
  $$c_n(f) = \langle f, e_{in} \rangle = \frac{1}{T} \int_{0}^{T} f(t)e^{-in\omega t}\,dt$$
  où $e_{in} : t \mapsto e^{in\omega t}$.

* **Coefficients réels** (si $f$ est à valeurs réelles, pour $n \in \mathbb{N}$ et $n \in \mathbb{N}^*$) :
  $$a_n(f) = \frac{2}{T} \int_{0}^{T} f(t)\cos(n\omega t)\,dt \quad (n \ge 0)$$
  $$b_n(f) = \frac{2}{T} \int_{0}^{T} f(t)\sin(n\omega t)\,dt \quad (n \ge 1)$$

Relations de passage :
$$a_0 = c_0, \quad a_n = c_n + c_{-n}, \quad b_n = i(c_n - c_{-n})$$
$$c_n = \frac{a_n - ib_n}{2} \quad (n \ge 1), \quad c_{-n} = \frac{a_n + ib_n}{2} \quad (n \ge 1), \quad c_0 = a_0$$

### Série de Fourier
On appelle série de Fourier de $f$ la série de fonctions notée $S(f)$ :
* Sous forme trigonométrique (réelle) :
  $$S(f)(t) = \frac{a_0}{2} + \sum_{n=1}^{+\infty} \left( a_n \cos(n\omega t) + b_n \sin(n\omega t) \right)$$
* Sous forme exponentielle (complexe) :
  $$S(f)(t) = \sum_{n=-\infty}^{+\infty} c_n(f) e^{in\omega t} = \lim_{N \to +\infty} \sum_{n=-N}^{N} c_n(f) e^{in\omega t}$$
---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Lemme de Riemann-Lebesgue
**Énoncé :** Si $f \in \mathcal{C}_{pm}(\mathbb{R}, \mathbb{C})$ est $T$-périodique, alors les coefficients de Fourier de $f$ tendent vers $0$ lorsque $|n| \to +\infty$.
$$\lim_{|n| \to +\infty} c_n(f) = 0 \quad \text{et} \quad \lim_{n \to +\infty} a_n(f) = \lim_{n \to +\infty} b_n(f) = 0$$

### Théorème de Dirichlet (Convergence simple)
**Énoncé :** Si $f : \mathbb{R} \to \mathbb{C}$ est $T$-périodique, de classe $\mathcal{C}^1$ par morceaux sur $\mathbb{R}$, alors pour tout $t \in \mathbb{R}$, la série de Fourier de $f$ converge et l'on a :
$$S(f)(t) = \frac{f(t^+) + f(t^-)}{2}$$
En tout point $t$ où $f$ est continue, la série de Fourier converge vers $f(t)$.

### Théorème de Parseval
**Énoncé :** Si $f \in \mathcal{C}_{pm}(\mathbb{R}, \mathbb{C})$ est $T$-périodique, alors la suite des coefficients de Fourier est de carré sommable, et l'on a l'égalité énergétique :
$$\|f\|_2^2 = \sum_{n=-\infty}^{+\infty} |c_n(f)|^2 = \left(\frac{a_0}{2}\right)^2 + \frac{1}{2}\sum_{n=1}^{+\infty} \left(a_n(f)^2 + b_n(f)^2\right)$$

> **Démonstration clé (Parseval via Fejér ou convergence uniforme $\mathcal{C}^1$) :**
> Supposons $f$ de classe $\mathcal{C}^1$ et continue. Posons les sommes partielles de la série de Fourier $S_N(f)(t) = \sum_{n=-N}^{N} c_n e^{in\omega t}$. Par convergence normale (conséquence de la régularité $\mathcal{C}^1$ et de l'inégalité de Cauchy-Schwarz sur les coefficients), $S_N(f)$ converge uniformément vers $f$ sur $\mathbb{R}$.
> 
> Par continuité du produit scalaire pour la convergence uniforme, on a :
> $$\|f\|_2^2 = \langle \lim_{N \to +\infty} S_N(f), f \rangle = \lim_{N \to +\infty} \langle S_N(f), f \rangle$$
> Or, par orthogonalité de la famille $(e_{in})_{n \in \mathbb{Z}}$ pour le produit scalaire hermitien :
> $$\langle S_N(f), f \rangle = \left\langle \sum_{n=-N}^{N} c_n e_{in}, \sum_{m=-\infty}^{+\infty} c_m e_{im} \right\rangle = \sum_{n=-N}^{N} c_n \overline{c_n} = \sum_{n=-N}^{N} |c_n|^2$$
> En passant à la limite lorsque $N \to +\infty$, on obtient bien :
> $$\|f\|_2^2 = \sum_{n=-\infty}^{+\infty} |c_n(f)|^2 \quad \blacksquare$$

---

## 💡 3. Méthodes de calcul & Algorithmes

1. **Exploiter les parités :**
   * Si $f$ est **paire**, $b_n(f) = 0$ pour tout $n \ge 1$ (la série ne contient que des cosinus).
   * Si $f$ est **impaire**, $a_n(f) = 0$ pour tout $n \ge 0$ (la série ne contient que des sinus).
   * *Astuce :* Si $f$ ne présente ni parité évidente, penser à la décomposer en $f = f_{pair} + f_{impair}$ où $f_{pair}(t) = \frac{f(t)+f(-t)}{2}$ et $f_{impair}(t) = \frac{f(t)-f(-t)}{2}$.

2. **Intégration par parties (IPP) :**
   Pour calculer les coefficients de Fourier d'une fonction régulière par morceaux, on réalise une ou plusieurs IPP pour faire apparaître $n$ au dénominateur, ce qui permet d'obtenir la vitesse de décroissance des coefficients (ex: $O(1/n^2)$ pour une fonction $\mathcal{C}^1$).

3. **Utilisation des transformées géométriques ou exponentielles :**
   Privilégier le calcul des coefficients complexes $c_n(f)$ lorsque les intégrales font intervenir des termes en $e^{at}$, car les calculs de primitives de type $\int e^{(\alpha + i\beta)t} dt$ sont souvent plus rapides que la manipulation conjointe de $\cos$ et $\sin$.

4. **Sommation de séries numériques via Parseval :**
   Une fois les coefficients $a_n$ ou $b_n$ calculés pour une fonction explicite $f$ dont on connaît $\int |f|^2$, appliquer le théorème de Parseval permet d'obtenir la somme de séries numériques remarquables (ex: $\sum \frac{1}{n^2} = \frac{\pi^2}{6}$).

---

## ⚠️ 4. Pièges classiques aux Concours

* **Attention aux conditions de convergence du théorème de Dirichlet :** Ne jamais affirmer qu'une série de Fourier converge **simplement vers $f(t)$** en un point de discontinuité. Elle converge vers la moyenne $\frac{1}{2}(f(t^+) + f(t^-))$.
* **Confusion entre convergence simple, uniforme et quadratique ($L^2$) :** 
  * La convergence quadratique (Parseval) est immédiate dès que $f \in \mathcal{C}_{pm}$.
  * La convergence simple nécessite au minimum une condition de régularité par morceaux (type Dirichlet).
  * La convergence normale (donc uniforme) exige de la continuité et une régularité $\mathcal{C}^1$ par morceaux (les coefficients sont en $O(1/n^2)$).
* **Mauvaise gestion de la période :** Vérifier systématiquement que le domaine d'intégration pour le calcul des coefficients correspond exactement à une période $T$ (ou un intervalle de longueur $T$, typiquement $[-\frac{T}{2}, \frac{T}{2}]$ ou $[0, T]$).
* **Oubli du facteur $\frac{a_0}{2}$ :** Erreur classique lors de l'écriture de la forme trigonométrique de la série de Fourier, le coefficient constant est $\frac{a_0}{2}$ et non $a_0$.