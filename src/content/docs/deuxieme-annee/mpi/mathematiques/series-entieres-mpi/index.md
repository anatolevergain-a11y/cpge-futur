---
title: 'Cours : Séries entières et séries de Fourier'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE MPI.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$.

### A. Séries entières
Une **série entiere** d'une variable $\mathbb{K}$-1-variable est une série de fonctions de la forme :
$$\sum_{n \ge 0} a_n z^n$$
où $(a_n)_{n \ge 0}$ est une suite d'éléments de $\mathbb{K}$ (les coefficients) et $z \in \mathbb{K}$.

- **Disque ou intervalle de convergence :** Il existe un unique $R \in [0, +\infty]$, appelé **rayon de convergence** de la série entière, tel que :
  1. Si $|z| < R$, la série $\sum a_n z^n$ converge absolument.
  2. Si $|z| > R$, la série diverge grossièrement (le terme général ne tend pas vers $0$).
- **Lemme d'Abel :** Si la suite $(a_n z_0^n)_{n \ge 0}$ est bornée pour un certain $z_0 \in \mathbb{K} \setminus \{0\}$, alors pour tout $z \in \mathbb{K}$ tel que $|z| < |z_0|$, la série $\sum a_n z^n$ converge absolument.
- **Formules de calcul du rayon de convergence :**
  - Règle de d'Alembert (si $\lim \left|\frac{a_{n+1}}{a_n}\right|$ existe) : $\frac{1}{R} = \lim_{n \to +\infty} \left|\frac{a_{n+1}}{a_n}\right|$.
  - Formule de Cauchy-Hadamard : $\frac{1}{R} = \limsup_{n \to +\infty} |a_n|^{\frac{1}{n}}$.

### B. Séries de Fourier
Soit $f : \mathbb{R} \to \mathbb{C}$ une fonction continue par morceaux et $T$-périodique (avec $T > 0$, souvent $T = 2\pi$ par normalisation via $\omega = \frac{2\pi}{T}$).

- **Produit hermitien sur $C_{pm}(\mathbb{R}, \mathbb{C})$ :** Pour $f, g$ continues par morceaux et $T$-périodiques,
  $$\langle f, g \rangle = \frac{1}{T} \int_0^T f(t) \overline{g(t)} \, \text{d}t$$
- **Coefficients de Fourier :**
  - Exponentiels : $\, c_n(f) = \frac{1}{T} \int_0^T f(t) e^{-i n \omega t} \, \text{d}t \quad (n \in \mathbb{Z})$.
  - Trigonométriques (pour $f$ à valeurs réelles) :
    $$a_n(f) = \frac{2}{T} \int_0^T f(t) \cos(n \omega t) \, \text{d}t \quad (n \in \mathbb{N})$$
    $$b_n(f) = \frac{2}{T} \int_0^T f(t) \sin(n \omega t) \, \text{d}t \quad (n \in \mathbb{N}^*)$$
- **Sommes partielles de Fourier :**
  $$S_N(f)(t) = \sum_{n=-N}^{N} c_n(f) e^{i n \omega t} = a_0(f) + \sum_{n=1}^{N} \left( a_n(f)\cos(n \omega t) + b_n(f)\sin(n \omega t) \right)$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### A. Théorème d'Abel et Propriétés de Somme (Séries entières)
Soit $\sum a_n z^n$ une série entière de rayon de convergence $R > 0$. 
Soit $S(z) = \sum_{n=0}^{+\infty} a_n z^n$ pour $|z| < R$.

1. **Continuité :** La somme $S$ est de classe $C^\infty$ sur le disque ouvert $D(0, R)$ (ou intervalle ouvert $]-R, R[$ si $\mathbb{K}=\mathbb{R}$). Ses dérivées s'obtiennent par dérivation terme à terme :
   $$\forall z \in ]-R, R[, \quad S'(z) = \sum_{n=1}^{n} n a_n z^{n-1}$$
   Le rayon de convergence de la série dérivée est également $R$.
2. **Théorème d'Abel angulaire :** Si la série numérique $\sum a_n R^n$ converge (avec $\mathbb{K}=\mathbb{R}$), alors la fonction $x \mapsto S(x)$ admet une limite finie en $R^-$ et :
   $$\lim_{x \to R^-} S(x) = \sum_{n=0}^{+\infty} a_n R^n$$

### B. Théorème de Dirichlet (Convergence simple des séries de Fourier)
> **Théorème :** Soit $f : \mathbb{R} \to \mathbb{C}$ une fonction $T$-périodique, continue par morceaux et de classe $C^1$ par morceaux sur $\mathbb{R}$. Alors, pour tout $t \in \mathbb{R}$, la série de Fourier de $f$ converge et :
> $$\sum_{n=-\infty}^{+\infty} c_n(f) e^{i n \omega t} = \frac{f(t^+) + f(t^-)}{2}$$
> En tout point de continuité de $f$, la série converge simplement vers $f(t)$.

### C. Théorème de Parseval
> **Théorème :** Si $f : \mathbb{R} \to \mathbb{C}$ est continue par morceaux et $T$-périodique, alors la suite des coefficients de Fourier est de carré sommable, et on a l'égalité énergétique :
> $$\frac{1}{T} \int_0^T |f(t)|^2 \, \text{d}t = \sum_{n=-\infty}^{+\infty} |c_n(f)|^2$$
> Ou en version trigonométrique :
> $$\frac{1}{T} \int_0^T |f(t)|^2 \, \text{d}t = \frac{a_0(f)^2}{2} + \sum_{n=1}^{+\infty} \frac{a_n(f)^2 + b_n(f)^2}{2}$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### A. Manipulation des séries entières usuelles
Il est impératif de connaître par cœur les développements en série entière (DSE) sur leur intervalle de convergence ouvert :
- $\frac{1}{1-x} = \sum_{n=0}^{+\infty} x^n \quad (\text{pour } |x| < 1)$
- $\frac{1}{1+x} = \sum_{n=0}^{+\infty} (-1)^n x^n \quad (\text{pour } |x| < 1)$
- $\ln(1+x) = \sum_{n=1}^{+\infty} \frac{(-1)^{n-1}}{n} x^n \quad (\text{pour } |x| < 1)$
- $\arctan(x) = \sum_{n=0}^{+\infty} \frac{(-1)^n}{2n+1} x^{2n+1} \quad (\text{pour } |x| \le 1$)
- $e^x = \sum_{n=0}^{+\infty} \frac{x^n}{n!} \quad (\text{pour } x \in \mathbb{R})$
- $\operatorname{ch}(x) = \sum_{n=0}^{+\infty} \frac{x^{2n}}{(2n)!}, \quad \operatorname{sh}(x) = \sum_{n=0}^{+\infty} \frac{x^{2n+1}}{(2n+1)!} \quad (\text{pour } x \in \mathbb{R})$

### B. Technique d'identification et de résolution d'équations différentielles
Pour calculer la somme d'une série entière $\sum a_n z^n$ ou déterminer une suite définie par récurrence :
1. **Étape 1 :** Déterminer le rayon de convergence $R$.
2. **Étape 2 :** Poser $S(x) = \sum a_n x^n$ et dériver $S$ (ou $x S(x)$, etc.) pour faire apparaître la relation de récurrence sur les coefficients $a_n$.
3. **Étape 3 :** Résoudre l'équation différentielle linéaire vérifiée par $S$ sur $]-R, R[$.
4. **Étape 4 :** Utiliser les conditions initiales ($S(0) = a_0$, $S'(0) = a_1$) pour déterminer la constante d'intégration.

### C. Calcul effectif des coefficients de Fourier
- Exploiter les **parités** : 
  - Si $f$ est paire, $b_n(f) = 0$ et $a_n(f) = \frac{4}{T} \int_{0}^{T/2} f(t)\cos(n\omega t)\,\text{d}t$.
  - Si $f$ est impaire, $a_n(f) = 0$ et $b_n(f) = \frac{4}{T} \int_{0}^{T/2} f(t)\sin(n\omega t)\,\text{d}t$.
- Utiliser les intégrations par parties successives lorsque $f$ est de classe $C^k$ pour obtenir la décroissance rapide des coefficients $c_n(f) = O\left(\frac{1}{n^k}\right)$.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confusion entre convergence simple, normale et uniforme :** Une série entière converge normalement sur tout disque (ou intervalle) fermé compact inclus dans le disque ouvert de convergence, mais **jamais** sur le disque ouvert tout entier en général si $R < +\infty$.
2. **Oubli de la borne du rayon de convergence :** Ne jamais appliquer le théorème de dérivation terme à terme ou d'intégration sur des intervalles hors du rayon de convergence.
3. **Mauvaise application de Dirichlet aux points de discontinuité :** En un point de saut $t_0$, la série de Fourier ne converge **pas** vers $f(t_0)$, mais vers la moyenne $\frac{f(t_0^+) + f(t_0^-)}{2}$.
4. **Erreurs d'indices dans Parseval :** Ne pas oublier les facteurs $\frac{1}{2}$ pour $a_0^2$ et $\frac{a_n^2 + b_n^2}{2}$ dans la version trigonométrique réelle.
5. **Perte de validité aux bornes du domaine :** L'utilisation du théorème d'Abel est impérative pour relier la valeur de la somme au bord de l'intervalle de convergence (ex: $x = 1$) avec la série numérique évaluée en ce point.