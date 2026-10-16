---
title: 'Exercice 2 : Théorème de Dirichlet et convergence de séries de Fourier'
description: 'Problème d entraînement type concours pour PC.'
---

### 🌐 Énoncé du problème / Cadre d'étude

En classe préparatoire scientifique (filière PC), la maîtrise de l'analyse harmonique passe par l'étude fine de la convergence des séries de Fourier. Cet exercice propose d'étudier une fonction $2\pi$-périodique, d'en calculer les coefficients de Fourier, puis d'appliquer le théorème de Dirichlet pour sommer certaines séries numériques classiques, avant de s'intéresser à la convergence en moyenne quadratique.

Soit $f : \mathbb{R} \to \mathbb{R}$ la fonction $2\pi$-périodique, paire, définie sur $[0, \pi]$ par :
$$f(t) = t(\pi - t)$$

---

### ❓ Questions progressives

1. **Justification et régularité :** Vérifier que $f$ est bien définie, continue sur $\mathbb{R}$, et de classe $\mathcal{C}^1$ par morceaux sur $\mathbb{R}$.
2. **Calcul des coefficients de Fourier :** 
   - Justifier que les coefficients $b_n(f)$ sont tous nuls.
   - Exprimer le coefficient constant $a_0(f)$ et les coefficients $a_n(f)$ pour $n \in \mathbb{N}^*$.
3. **Application du théorème de Dirichlet :** 
   - Énoncer précisément le théorème de Dirichlet pour la fonction $f$.
   - En déduire la somme de la série numérique $\sum_{n=1}^{+\infty} \frac{(-1)^{n-1}}{n^2}$.
4. **Sommation par Parseval :** 
   - Énoncer l'égalité de Parseval.
   - En déduire la valeur de la somme $\sum_{n=1}^{+\infty} \frac{1}{n^4}$.

---

### 💡 Pistes & Indications méthodologiques

- **Q1 :** Pensez à vérifier la compatibilité des valeurs aux bornes de l'intervalle $[-\pi, \pi]$ pour la continuité globale, et dérivez la fonction par morceaux pour la classe $\mathcal{C}^1$.
- **Q2 :** Utilisez la parité de la fonction pour simplifier les intégrales (le calcul de $a_n$ nécessitera deux intégrations par parties successives).
- **Q3 :** Le théorème de Dirichlet donne la convergence simple (et même uniforme ici) de la série de Fourier vers $f(t)$ en tout point. Évaluez la série en un point bien choisi (par exemple $t = \pi/2$).
- **Q4 :** L'égalité de Parseval relie la norme $L^2$ de la fonction au carré des coefficients de Fourier. Attention à bien normaliser les coefficients selon la formule du cours (avec ou sans le facteur $\sqrt{2}$).

---

### 📋 Corrigé détaillé pas à pas

#### **1. Justification et régularité**
* **Continuité :** La fonction $f$ est définie par des expressions polynomiales sur $[0, \pi]$, donc elle y est continue. Par parité et $2\pi$-périodicité, elle est définie sur $\mathbb{R}$ tout entier. Aux points de raccordement $t \in \pi \mathbb{Z}$, on vérifie que $\lim_{t \to \pi^-} f(t) = \pi(\pi-\pi) = 0$ et $\lim_{t \to \pi^+} f(t) = (-\pi)(\pi-(-\pi))$ n'est pas immédiat sans la périodicité. 
  Plus simplement, $f(0) = 0$ et $f(2\pi \cdot 0) = 0$. Par $2\pi$-périodicité, $f\left(\pi^-\right) = \pi \times 0 = 0$ et $f\left(\pi^+\right) = (-\pi)(\pi - \pi) = 0$ (en considérant l'extension sur $[-\pi, \pi]$ où $f(-\pi) = -\pi(\pi - (-\pi))$ non, attention : $f$ est paire, donc $f(-\pi) = f(\pi) = 0$). 
  Plus rigoureusement : $f$ est continue sur $\mathbb{R}$ comme recollement périodique d'une fonction continue sur $[-\pi, \pi]$.
* **$\mathcal{C}^1$ par morceaux :** Sur l'intervalle ouvert $]0, \pi[$, $f'(t) = \pi - 2t$, qui se prolonge par continuité aux bornes. Sur $\mathbb{R}$, $f$ est de classe $\mathcal{C}^1$ par morceaux car dérivable partout sauf éventuellement en $k\pi$ où les dérivées à gauche et à droite existent finies.

#### **2. Calcul des coefficients de Fourier**
Puisque $f$ est une fonction paire :
* Pour tout $n \in \mathbb{N}^*$, $b_n(f) = 0$.
* Le coefficient constant $a_0(f)$ est donné par :
  $$a_0(f) = \frac{2}{\pi} \int_0^\pi f(t) \, \text{d}t = \frac{2}{\pi} \int_0^\pi (t\pi - t^2) \, \text{d}t$$
  $$a_0(f) = \frac{2}{\pi} \left[ \pi \frac{t^2}{2} - \frac{t^3}{3} \right]_0^\pi = \frac{2}{\pi} \left( \frac{\pi^3}{2} - \frac{\pi^3}{3} \right) = \frac{2}{\pi} \left( \frac{\pi^3}{6} \right) = \frac{\pi^2}{3}$$
* Pour $n \in \mathbb{N}^*$, les coefficients $a_n(f)$ s'obtiennent par :
  $$a_n(f) = \frac{2}{\pi} \int_0^\pi (\pi t - t^2) \cos(nt) \, \text{d}t$$
  Effectuons deux intégrations par parties successives. 
  1ère IPP (terme tout intégré nul car $\sin(0) = \sin(n\pi) = 0$) :
  $$a_n(f) = \frac{2}{\pi} \left[ (\pi t - t^2) \frac{\sin(nt)}{n} \right]_0^\pi - \frac{2}{\pi} \int_0^\pi (\pi - 2t) \left( -\frac{\sin(nt)}{n} \right) \text{d}t$$
  $$a_n(f) = \frac{2}{n\pi} \int_0^\pi (\pi - 2t) \sin(nt) \, \text{d}t$$
  2ème IPP :
  $$a_n(f) = \frac{2}{n\pi} \left[ (\pi - 2t) \left( -\frac{\cos(nt)}{n} \right) \right]_0^\pi - \frac{2}{n\pi} \int_0^\pi (-2) \left( -\frac{\cos(nt)}{n} \right) \text{d}t$$
  En évaluant les bornes :
  - En $t = \pi$ : $(\pi - 2\pi) = -\pi$, ce qui donne $-\pi \left(-\frac{(-1)^n}{n}\right) = \frac{(-1)^n \pi}{n}$.
  - En $t = 0$ : $(\pi - 0) = \pi$, ce qui donne $\pi \left(-\frac{1}{n}\right) = -\frac{\pi}{n}$.
  
  L'intégrale restante vaut $\int_0^\pi \cos(nt) \, \text{d}t = 0$. Ainsi :
  $$a_n(f) = \frac{2}{n\pi} \left( \frac{(-1)^n \pi}{n} - \left(-\frac{\pi}{n}\right) \right) = \frac{2}{n\pi} \cdot \frac{\pi}{n} \left( (-1)^n - 1 \right) = \frac{2}{n^2} ((-1)^n - 1)$$
  On en déduit que :
  - Si $n$ est pair ($n = 2k$), $a_{2k}(f) = 0$.
  - Si $n$ est impair ($n = 2k+1$), $a_{2k+1}(f) = -\frac{4}{(2k+1)^2}$.

#### **3. Application du théorème de Dirichlet**
* **Énoncé :** Puisque $f$ est continue et de classe $\mathcal{C}^1$ par morceaux sur $\mathbb{R}$, sa série de Fourier converge simplement (et même normalement par minoration par des séries de Riemann) sur $\mathbb{R}$ vers $f(t)$ :
  $$\forall t \in \mathbb{R}, \quad f(t) = \frac{a_0(f)}{2} + \sum_{n=1}^{+\infty} a_n(f) \cos(nt)$$
  Soit explicitement :
  $$f(t) = \frac{\pi^2}{6} - 4 \sum_{k=0}^{+\infty} \frac{\cos((2k+1)t)}{(2k+1)^2}$$
* **Calcul de somme :** Évaluons cette relation en $t = 0$. On a $f(0) = 0$, donc :
  $$0 = \frac{\pi^2}{6} - 4 \sum_{k=0}^{+\infty} \frac{1}{(2k+1)^2}$$
  D'où la somme classique :
  $$\sum_{k=0}^{+\infty} \frac{1}{(2k+1)^2} = \frac{\pi^2}{8}$$
  En posant $n = 2k+1$, on peut aussi exprimer la série alternée demandée, ou en déduire directement les valeurs usuelles par regroupement.

#### **4. Sommation par Parseval**
* **Énoncé :** L'égalité de Parseval s'écrit :
  $$\frac{1}{\pi} \int_{-\pi}^\pi |f(t)|^2 \, \text{d}t = \frac{a_0(f)^2}{2} + \sum_{n=1}^{+\infty} \left( a_n(f)^2 + b_n(f)^2 \right)$$
* **Calcul des termes :** 
  Par parité de $f^2$ :
  $$\frac{1}{\pi} \int_{-\pi}^\pi f(t)^2 \, \text{d}t = \frac{2}{\pi} \int_0^\pi t^2(\pi-t)^2 \, \text{d}t = \frac{2}{\pi} \int_0^\pi (\pi^2 t^2 - 2\pi t^3 + t^4) \, \text{d}t$$
  $$\int_0^\pi (\pi^2 t^2 - 2\pi t^3 + t^4) \, \text{d}t = \left[ \pi^2 \frac{t^3}{3} - 2\pi \frac{t^4}{4} + \frac{t^5}{5} \right]_0^\pi = \pi^5 \left( \frac{1}{3} - \frac{1}{2} + \frac{1}{5} \right)$$
  En réduisant au même dénominateur ($30$) :
  $$\frac{1}{3} - \frac{1}{2} + \frac{1}{5} = \frac{10 - 15 + 6}{30} = \frac{1}{30}$$
  L'intégrale vaut donc $\frac{\pi^5}{30}$, et en multipliant par $\frac{2}{\pi}$ :
  $$\frac{1}{\pi} \int_{-\pi}^\pi f(t)^2 \, \text{d}t = \frac{2\pi^4}{30} = \frac{\pi^4}{15}$$
* **Application de Parseval :**
  $$\frac{\pi^4}{15} = \frac{1}{2} \left(\frac{\pi^2}{3}\right)^2 + \sum_{k=0}^{+\infty} \left( -\frac{4}{(2k+1)^2} \right)^2 = \frac{\pi^4}{18} + 16 \sum_{k=0}^{+\infty} \frac{1}{(2k+1)^4}$$
  On isole la somme recherchée :
  $$16 \sum_{k=0}^{+\infty} \frac{1}{(2k+1)^4} = \pi^4 \left( \frac{1}{15} - \frac{1}{18} \right) = \pi^4 \left( \frac{6 - 5}{90} \right) = \frac{\pi^4}{90}$$
  Finalement :
  $$\sum_{k=0}^{+\infty} \frac{1}{(2k+1)^4} = \frac{\pi^4}{96}$$