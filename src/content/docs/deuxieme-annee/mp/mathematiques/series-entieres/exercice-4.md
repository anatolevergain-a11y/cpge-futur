---
title: 'Problème Guidé : Séries de Fourier'
description: 'Problème d entraînement type concours MP - Séries de Fourier, convergence en moyenne quadratique et applications.'
---

# Problème : Étude d'une fonction périodique et applications par les Séries de Fourier

*En tant qu'examinateur, j'attends des candidats de la filière MP non seulement des calculs rigoureux, mais aussi une parfaite maîtrise des hypothèses des théorèmes de convergence (Dirichlet, Parseval) et une capacité à relier les propriétés de régularité d'une fonction à la vitesse de décroissance de ses coefficients de Fourier.*

---

## I. Préliminaires et position du problème

Soit $f : \mathbb{R} \to \mathbb{R}$ la fonction $2\pi$-périodique, impaire, définie sur l'intervalle $]0, \pi[$ par :
$$f(t) = \pi - t$$

1. Représenter graphiquement (ou décrire précisément) la fonction $f$ sur $[-2\pi, 2\pi]$.
2. La fonction $f$ est-elle continue sur $\mathbb{R}$ ? Est-elle de classe $\mathcal{C}^1$ par morceaux ?

---

## II. Calcul des coefficients de Fourier

1. Justifier l'existence des coefficients de Fourier trigonométriques de $f$.
2. Calculer les coefficients de Fourier réels $a_n(f)$ et $b_n(f)$ pour $n \in \mathbb{N}$.

---

## III. Convergence de la série de Fourier et applications

1. Énoncer précisément le théorème de Dirichlet (conditions de Dirichlet-Jordan) pour la fonction $f$. Que peut-on dire de la convergence de la série de Fourier de $f$ en tout point $t \in \mathbb{R}$ ?
2. En déduire la valeur de la somme de la série numérique :
   $$\sum_{n=0}^{+\infty} \frac{(-1)^n}{2n+1}$$
3. Appliquer l'égalité de Parseval à la fonction $f$ et en déduire la valeur de la somme :
   $$\sum_{n=1}^{+\infty} \frac{1}{n^2}$$

---

# CORRIGÉ ET COMMENTAIRES DE L'EXAMINATEUR

## I. Préliminaires

1. **Représentation :** 
   La fonction est $2\pi$-périodique et impaire. Sur $]0, \pi[$, c'est la restriction de la droite $t \mapsto \pi - t$. 
   * En $0$ et $\pi$, la fonction présente des discontinuités de saut (prolongée par imparité, $f(0) = 0$).
   * Sur $]\pi, 2\pi[$, par $2\pi$-périodicité et imparité, on a $f(t) = -(2\pi - t) = t - 2\pi$.

2. **Régularité :**
   * $f$ est discontinue aux points de $2\pi\mathbb{Z}$. Elle est donc **continue par morceaux** sur $\mathbb{R}$.
   * Sur chaque intervalle ouvert $]k\pi, (k+1)\pi[$, $f$ coïncide avec une fonction affine, elle est donc de classe $\mathcal{C}^1$. Les dérivées à gauche et à droite existent en tout point. $f$ est donc **de classe $\mathcal{C}^1$ par morceaux**.

---

## II. Calcul des coefficients de Fourier

1. **Existence :** 
   Puisque $f$ est continue par morceaux et bornée sur $\mathbb{R}$, elle est intégrable sur toute période. Ses coefficients de Fourier existent donc.

2. **Calculs :**
   * *Coefficients $a_n(f)$ :* 
     La fonction $f$ est **impaire**, et la fonction $t \mapsto f(t)\cos(nt)$ est également impaire (produit d'une fonction impaire et d'une fonction paire). Par conséquent, pour tout $n \in \mathbb{N}$ :
     $$a_n(f) = \frac{1}{\pi} \int_{-\pi}^{\pi} f(t)\cos(nt) \, dt = 0$$

   * *Coefficients $b_n(f)$ :* 
     La fonction $t \mapsto f(t)\sin(nt)$ est **paire**. On a donc :
     $$b_n(f) = \frac{2}{\pi} \int_{0}^{\pi} (\pi - t)\sin(nt) \, dt$$
     
     Calculons cette intégrale pour $n \ge 1$ à l'aide d'une intégration par parties :
     $$\int_{0}^{\pi} (\pi - t)\sin(nt) \, dt = \left[ (\pi - t) \left( -\frac{\cos(nt)}{n} \right) \right]_{0}^{\pi} - \int_{0}^{\pi}(-1)\left(-\frac{\cos(nt)}{n}\right)dt$$
     Le terme tout intégré s'annule en $\pi$ (car $\pi - \pi = 0$) et en $0$ (car $\pi \times (-\frac{1}{n}) \neq 0$, attention ! Reprenons proprement) :
     
     *Correction du calcul du tout-intégré :*
     $$\left[ (\pi - t) \left( -\frac{\cos(nt)}{n} \right) \right]_{0}^{\pi} = 0 - (\pi - 0)\left(-\frac{1}{n}\right) = \frac{\pi}{n}$$
     Pour l'intégrale restante :
     $$-\int_{0}^{\pi} \frac{\cos(nt)}{n} \, dt = \left[ -\frac{\sin(nt)}{n^2} \right]_{0}^{\pi} = 0$$
     Ainsi :
     $$\int_{0}^{\pi} (\pi - t)\sin(nt) \, dt = \frac{\pi}{n}$$
     On en déduit :
     $$b_n(f) = \frac{2}{\pi} \times \frac{\pi}{n} = \frac{2}{n}$$

---

## III. Convergence et applications

1. **Théorème de Dirichlet :**
   Puisque $f$ est $\mathcal{C}^1$ par morceaux sur $\mathbb{R}$, le théorème de Dirichlet s'applique. Pour tout $t \in \mathbb{R}$, la série de Fourier de $f$ converge vers :
   $$S(f)(t) = \frac{f(t^+) + f(t^-)}{2}$$
   * Si $t \neq k\pi$, $f$ est continue en $t$, donc la série converge vers $f(t)$.
   * Si $t = k\pi$ ($k \in \mathbb{Z}$), par imparité et $2\pi$-périodicité, la régularisée en $0$ vaut $\frac{f(0^+) + f(0^-)}{2} = \frac{\pi + (-\pi)}{2} = 0$.

   La série de Fourier est donc de la forme :
   $$S(f)(t) = \sum_{n=1}^{+\infty} \frac{2}{n}\sin(nt)$$

2. **Somme de la série numérique :**
   Évaluons l'égalité de Dirichlet en $t = \frac{\pi}{2}$ (point de continuité) :
   $$f\left(\frac{\pi}{2}\right) = \pi - \frac{\pi}{2} = \frac{\pi}{2}$$
   D'autre part, la série de Fourier en $t = \frac{\pi}{2}$ vaut :
   $$\sum_{n=1}^{+\infty} \frac{2}{n}\sin\left(n\frac{\pi}{2}\right)$$
   Observons les valeurs de $\sin\left(n\frac{\pi}{2}\right)$ selon $n$ :
   * Si $n = 2k$ (pair), $\sin(k\pi) = 0$.
   * Si $n = 2k+1$ (impair), $\sin\left((2k+1)\frac{\pi}{2}\right) = (-1)^k$.

   On a donc :
   $$\frac{\pi}{2} = \sum_{k=0}^{+\infty} \frac{2}{2k+1} (-1)^k$$
   En simplifiant par $2$, on obtient le résultat classique de Leibniz :
   $$\sum_{k=0}^{+\infty} \frac{(-1)^k}{2k+1} = \frac{\pi}{4}$$

3. **Égalité de Parseval :**
   La fonction $f$ étant continue par morceaux et de carré intégrable sur $[-\pi, \pi]$, l'égalité de Parseval s'écrit :
   $$\frac{1}{\pi} \int_{-\pi}^{\pi} |f(t)|^2 \, dt = \frac{a_0(f)^2}{2} + \sum_{n=1}^{+\infty} (a_n(f)^2 + b_n(f)^2)$$
   
   Calculons le terme de gauche :
   $$\frac{1}{\pi} \int_{-\pi}^{\pi} (\pi - t)^2 \, dt = \frac{2}{\pi} \int_{0}^{\pi} (\pi - t)^2 \, dt$$
   En posant $u = \pi - t$ :
   $$\frac{2}{\pi} \int_{0}^{\pi} u^2 \, du = \frac{2}{\pi} \left[ \frac{u^3}{3} \right]_{0}^{\pi} = \frac{2\pi^2}{3}$$
   
   D'autre part, $a_n(f) = 0$ et $b_n(f) = \frac{2}{n}$, donc :
   $$\sum_{n=1}^{+\infty} b_n(f)^2 = \sum_{n=1}^{+\infty} \frac{4}{n^2}$$
   
   L'égalité de Parseval donne alors :
   $$\frac{2\pi^2}{3} = \sum_{n=1}^{+\infty} \frac{4}{n^2}$$
   Soit :
   $$\sum_{n=1}^{+\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$$

---

## 💡 Analyse critique et remarques de l'examinateur (MP)
* **Piège classique :** Ne pas oublier de justifier l'existence des coefficients et les conditions d'application de Dirichlet ou Parseval. En concours, une formule juste sans hypothèses explicites perd des points précieux.
* **Lien régularité / décroissance :** $f$ est $\mathcal{C}^1$ par morceaux, ce qui garantit une décroissance des coefficients en $O(1/n)$ (ici en exact $2/n$). Par conséquent, la série de Fourier converge normalement sur $\mathbb{R}$ (via le critère majorant $\sum 1/n$ ? Attention, $\sum b_n \sin(nt)$ converge uniformément par Dirichlet, mais la convergence normale de $\sum |b_n|$ est fausse car $\sum 1/n$ diverge. C'est une nuance fondamentale de $\mathcal{MP}$ !).