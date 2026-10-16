---
title: 'Cours : Séries de Fourier'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Séries de Fourier (CPGE - PSI)

---

## 1. Introduction et cadre fonctionnel

Soit $T > 0$ une période, et $\omega = \frac{2\pi}{T}$ la pulsation associée. On note $\mathcal{E}_T$ l'espace vectoriel des fonctions $T$-périodiques.

### Définition : Espace $L^2$ et produit scalaire hermitien
On munit l'espace des fonctions continues par morceaux de $\mathbb{R}$ dans $\mathbb{C}$ (ou $\mathbb{R}$), $T$-périodiques, du produit scalaire hermitien :
$$\langle f, g \rangle = \frac{1}{T} \int_{0}^{T} f(t)\overline{g(t)}\,dt$$
La norme associée est la norme quadratique :
$$\|f\|_2 = \sqrt{\langle f, f \rangle} = \left( \frac{1}{T} \int_{0}^{T} |f(t)|^2\,dt \right)^{1/2}$$

---

## 2. Définitions des coefficients de Fourier

### A. Forme trigonométrique (pour des fonctions réelles)
Soit $f : \mathbb{R} \to \mathbb{R}$ une fonction continue par morceaux, $T$-périodique et intégrable sur une période. 
Pour $n \in \mathbb{N}$, on définit les coefficients de Fourier réels :
*   **Coefficient constant :**
    $$a_0(f) = \frac{2}{T} \int_{0}^{T} f(t)\,dt = \frac{1}{T} \int_{-T/2}^{T/2} f(t)\,dt$$
*   **Coefficients cosinus ($n \ge 1$) :**
    $$a_n(f) = \frac{2}{T} \int_{0}^{T} f(t)\cos(n\omega t)\,dt$$
*   **Coefficients sinus ($n \ge 1$) :**
    $$b_n(f) = \frac{2}{T} \int_{0}^{T} f(t)\sin(n\omega t)\,dt$$

### B. Forme complexe
Pour $f : \mathbb{R} \to \mathbb{C}$ continue par morceaux et $T$-périodique, pour tout $n \in \mathbb{Z}$, on définit le coefficient de Fourier complexe :
$$c_n(f) = \frac{1}{T} \int_{0}^{T} f(t)e^{-in\omega t}\,dt$$

**Relations fondamentales (si $f$ est à valeurs réelles) :**
*   $c_0(f) = \frac{a_0(f)}{2}$
*   Pour $n \ge 1$ : $c_n(f) = \frac{a_n(f) - ib_n(f)}{2}$ et $c_{-n}(f) = \overline{c_n(f)} = \frac{a_n(f) + ib_n(f)}{2}$
*   $a_n(f) = 2 \text{Re}(c_n(f))$ et $b_n(f) = -2 \text{Im}(c_n(f))$

---

## 3. Théorèmes de convergence

### A. Convergence en moyenne quadratique (Bessel-Parseval)

#### Théorème (Inégalité de Bessel)
Pour toute fonction $f$ continue par morceaux sur $[0, T]$, la famille de ses coefficients de Fourier vérifie :
$$\sum_{n=-\infty}^{+\infty} |c_n(f)|^2 \le \|f\|_2^2 \quad \text{ou encore} \quad \frac{a_0^2}{4} + \frac{1}{2}\sum_{n=1}^{+\infty} (a_n^2 + b_n^2) \le \|f\|_2^2$$

#### Théorème (Égalité de Parseval)
Si $f$ est de plus continue (ou continue par morceaux), alors il y a ${_convergence en moyenne quadratique_}$ de la série de Fourier vers $f$, ce qui se traduit par l'égalité de Parseval :
$$\sum_{n=-\infty}^{+\infty} |c_n(f)|^2 = \|f\|_2^2$$
$$\frac{a_0^2}{4} + \frac{1}{2}\sum_{n=1}^{+\infty} (a_n^2 + b_n^2) = \frac{1}{T} \int_{0}^{T} |f(t)|^2\,dt$$

---

### B. Convergence simple et uniforme

#### Définition : Régularité par morceaux
Une fonction $f$ est dite $C^1$ par morceaux sur $\mathbb{R}$ si elle est continue et s'il existe une subdivision $0 = t_0 < t_1 < \dots < t_k = T$ telle que $f$ soit de classe $C^1$ sur chaque intervalle ouvert $]t_i, t_{i+1}[$, et admette des limites finies à droite et à gauche pour $f$ et $f'$ en chaque $t_i$.

#### Théorème de Dirichlet (Convergence simple)
Si $f$ est $\mathbb{R} \to \mathbb{C}$ $T$-périodique et $C^1$ par morceaux, alors pour tout $t \in \mathbb{R}$, la série de Fourier de $f$ converge simplement vers :
$$S(t) = \sum_{n=-\infty}^{+\infty} c_n(f)e^{in\omega t} = \frac{f(t^+) + f(t^-)}{2}$$
*(En tout point $t$ où $f$ est continue, la série converge vers $f(t)$).*

#### Théorème de Jordan-Dirichlet (Convergence uniforme)
Si $f$ est $T$-périodique, **continue** sur $\mathbb{R}$, et $C^1$ par morceaux, alors sa série de Fourier converge **normalement** (donc uniformément) sur $\mathbb{R}$ vers $f$.

---

## 4. Propriétés des coefficients de Fourier

*   **Linéarité :** L'application $f \mapsto c_n(f)$ est linéaire.
*   **Dérivation :** Si $f$ est de classe $C^1$ et $T$-périodique, alors :
    $$c_n(f') = in\omega c_n(f)$$
*   **Parité :**
    *   Si $f$ est **paire**, alors $b_n(f) = 0$ (développement en cosinus purs) et $a_n(f) = \frac{4}{T} \int_{0}^{T/2} f(t)\cos(n\omega t)\,dt$.
    *   Si $f$ est **impaire**, alors $a_n(f) = 0$ (développement en sinus purs) et $b_n(f) = \frac{4}{T} \int_{0}^{T/2} f(t)\sin(n\omega t)\,dt$.

---

## 5. Méthodes et Savoir-Faire (PSI)

1.  **Calculer les coefficients de Fourier :**
    *   Toujours exploiter les **parités** et les **symétries** (par exemple, si $f(t+T/2) = -f(t)$, alors les coefficients d'indices pairs sont nuls).
    *   Effectuer des intégrations par parties (IPP) successives lorsque la fonction est polynomiale par morceaux.
2.  **Sommer des séries numériques via Parseval :**
    *   Identifier une fonction $f$ dont on sait calculer facilement la norme $L^2$ (ex: créneau, dent de scie).
    *   Calculer ses coefficients de Fourier $a_n$ et $b_n$.
    *   Appliquer Parseval pour obtenir $\sum \frac{1}{n^2}$, $\sum \frac{1}{n^4}$, etc.
3.  **Sommer des séries numériques via Dirichlet :**
    *   Évaluer la somme de la série de Fourier en un point bien choisi $t_0$ où $f$ est continue (ex: $t_0 = 0, \frac{T}{4}, \frac{T}{2}$).

---

## 6. Pièges et Erreurs classiques (À ÉVITER)

*   **Confondre les convergences :** Ne jamais affirmer qu'une série de Fourier converge *normalement* si la fonction présente des discontinuités (phénomène de Gibbs aux bornes des discontinuités, pas de convergence uniforme).
*   **Oublier le facteur 2 :** Attention au passage de la forme complexe à la forme réelle ($c_0 = a_0/2$, et $a_n = 2\text{Re}(c_n)$ pour $n \ge 1$).
*   **Mauvaise utilisation de Parseval :** Vérifier impérativement que la fonction est continue par morceaux et que l'intégrale de $|f|^2$ converge (ce qui est toujours vrai pour des fonctions continues par morceaux sur un segment, mais attention aux intégrales impropres si le cadre est étendu, bien que rare en CPGE sur une période bornée).
*   **Erreur de période :** Vérifier que la pulsation est bien $\omega = \frac{2\pi}{T}$ et non $2\pi$ par défaut.