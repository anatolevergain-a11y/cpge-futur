---
title: 'Cours : Séries de Fourier, ED et Réduction PSI'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Séries de Fourier, ED et Réduction PSI (CPGE - PSI)

## 1. Introduction et Rappels sur les Séries de Fourier

Soit $f : \mathbb{R} \to \mathbb{C}$ une fonction $T$-périodique (avec $T > 0$), et on pose $\omega = \frac{2\pi}{T}$. On note $\mathbb{U}_T$ l'espace de telles fonctions.

### Définitions fondamentales
* **Coefficient de Fourier exponentiel :** 
  $$c_n(f) = \frac{1}{T} \int_{0}^{T} f(t) e^{-in\omega t} \, dt \quad (n \in \mathbb{Z})$$
* **Coefficients de Fourier trigonométriques** (si $f$ est à valeurs réelles) :
  $$a_0(f) = \frac{2}{T} \int_{0}^{T} f(t) \, dt = 2 c_0(f)$$
  $$a_n(f) = \frac{2}{T} \int_{0}^{T} f(t) \cos(n\omega t) \, dt = c_n(f) + c_{-n}(f)$$
  $$b_n(f) = \frac{2}{T} \int_{0}^{T} f(t) \sin(n\omega t) \, dt = i(c_n(f) - c_{-n}(f))$$

### Théorème de Dirichlet (Convergence simple)
Si $f$ est de classe $\mathcal{C}^1$ par morceaux sur $\mathbb{R}$, alors pour tout $t \in \mathbb{R}$, la série de Fourier de $f$ converge et :
$$\sum_{n=-\infty}^{+\infty} c_n(f) e^{in\omega t} = \frac{1}{2} \left( f(t^+) + f(t^-) \right)$$
Si de plus $f$ est continue en $t$, la somme est simplement $f(t)$.

### Théorème de Parseval (Convergence quadratique)
Si $f$ est continue par morceaux sur $\mathbb{R}$ (ou $L^2$ sur une période), alors :
$$\frac{1}{T} \int_{0}^{T} |f(t)|^2 \, dt = \sum_{n=-\infty}^{+\infty} |c_n(f)|^2 = \left(\frac{a_0}{2}\right)^2 + \frac{1}{2} \sum_{n=1}^{+\infty} \left(a_n(f)^2 + b_n(f)^2\right)$$

---

## 2. Lien avec la Réduction des Endomorphismes

En PSI, l'étude des séries de Fourier s'articule élégamment avec l'algèbre linéaire via l'étude d'opérateurs différentiels sur des espaces de fonctions hilbertiens.

### L'espace préhilbertien $E = \mathcal{C}^0(\mathbb{R}, \mathbb{C})$ ($T$-périodiques)
On munit $E$ du produit hermitien (ou scalaire réel si fonctions réelles) :
$$\langle f, g \rangle = \frac{1}{T} \int_{0}^{T} f(t)\overline{g(t)} \, dt$$

La famille $\left( e_n \right)_{n \in \mathbb{Z}}$ définie par $e_n(t) = e^{in\omega t}$ est une **famille orthonormée** pour ce produit scalaire.

### Dérivation et Endomorphismes
Considérons l'espace $E_2 = \mathcal{C}^2(\mathbb{R}, \mathbb{C})$ des fonctions $T$-périodiques de classe $\mathcal{C}^2$. 
Soit l'opérateur de dérivation seconde $D^2 : E_2 \to E$ défini par $D^2(f) = f''$.

* **Action sur la base de Fourier :** Pour $e_n(t) = e^{in\omega t}$, on a :
  $$D^2(e_n) = -n^2\omega^2 e_n$$
* **Interprétation spectrale :** Les fonctions $e_n$ sont des **vecteurs propres** de l'opérateur différentiel $D^2$ associé aux valeurs propres $-\omega^2, -4\omega^2, -9\omega^2, \dots$

C'est ce constat qui permet de diagonaliser (au sens des opérateurs) des équations différentielles linéaires à coefficients constants sur des espaces de fonctions périodiques.

---

## 3. Résolution d'Équations Différentielles (ED) par les Séries de Fourier

La méthode des séries de Fourier est redoutable pour résoudre des Équations aux Dérivées Partielles (EDP) ou des Équations Différentielles ordinaires avec second membre périodique.

### Méthodologie type (PSI)
Soit à résoudre une équation différentielle de la forme :
$$(E) \quad L(x) = f(t)$$
où $L$ est un opérateur différentiel linéaire à coefficients constants et $f$ est une fonction $T$-périodique, continue par morceaux.

1. **Analyse (Condition nécessaire) :** Supposons qu'il existe une solution $x$ $T$-périodique et de classe $\mathcal{C}^k$ (où $k$ dépend de l'ordre de $L$). On écrit $x$ sous forme de sa série de Fourier :
   $$x(t) = \sum_{n=-\infty}^{+\infty} c_n(x) e^{in\omega t}$$
2. **Injection et Identification :** Par dérivation terme à terme (justifiée par la régularité de $x$), on injecte cette série dans $(E)$. Par unicité des coefficients de Fourier (ou par identification dans la base hilbertienne), on exprime $c_n(x)$ en fonction de $c_n(f)$.
3. **Synthèse (Condition suffisante) :** À l'aide des coefficients $c_n(x)$ ainsi trouvés, on étudie la convergence de la série candidate. Grâce aux théorèmes de régularité (si $\sum n^p |c_n(x)| < +\infty$), on prouve que la fonction somme est solution de $(E)$.
4. **Conclusion sur l'unicité / structure de l'ensemble des solutions :** On relie la solution particulaire ainsi trouvée à l'ensemble des solutions de l'équation homogène associée $L(x) = 0$.

---

## 4. Démonstration Clé / Exemple Type

> **Problème type PSI :** Résoudre l'équation différentielle suivante pour $f$ continue $2\pi$-périodique :
> $x'(t) + x(t) = f(t)$

### Résolution par les coefficients de Fourier
Soit $T = 2\pi$ ($\omega = 1$). Si $x$ est $2\pi$-périodique et de classe $\mathcal{C}^1$, on écrit :
$$f(t) = \sum_{n=-\infty}^{+\infty} c_n(f) e^{int}, \quad x(t) = \sum_{n=-\infty}^{+\infty} c_n(x) e^{int}$$

En injectant dans l'équation :
$$\sum_{n=-\infty}^{+\infty} (in + 1) c_n(x) e^{int} = \nsum_{n=-\infty}^{+\infty} c_n(f) e^{int}$$

Par unicité du développement en série de Fourier (ou projection sur $e_n(t) = e^{int}$), pour tout $n \in \mathbb{Z}$ :
$$(1 + in) c_n(x) = c_n(f) \implies c_n(x) = \frac{c_n(f)}{1 + in}$$

### Analyse de la convergence
Comme $1 + in$ ne s'annule jamais, $c_n(x)$ est bien défini. De plus, $|1 + in| = \sqrt{1 + n^2} \geq 1$, donc :
$$|c_n(x)| \leq |c_n(f)|$$
Puisque $f$ est continue par morceaux, ses coefficients de Fourier $c_n(f)$ tendent vers $0$ (lemme de Riemann-Lebesgue). Si $f$ est de plus $\mathcal{C}^1$, $|c_n(f)] = o(1/n)$, ce qui assure que $\sum |c_n(x)| < +\infty$ (par comparaison ou majoration par Cauchy-Schwarz avec Parseval). 

La série $\sum c_n(x) e^{int}$ converge donc normalement sur $\mathbb{R}$ vers une fonction $x$ de classe $\mathcal{C}^1$, qui est l'unique solution $2\pi$-périodique de l'équation.