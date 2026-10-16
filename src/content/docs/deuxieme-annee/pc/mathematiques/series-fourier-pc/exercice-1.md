---
title: 'Exercice 1 : Coefficients de Fourier et égalité de Parseval'
description: 'Problème d entraînement type concours pour PC.'
---

### 🌐 Énoncé du problème / Cadre d'étude

L'objectif de ce problème est d'étudier le développement en série de Fourier d'une fonction $2\pi$-périodique, continue par morceaux, et d'exploiter l'égalité de Parseval pour calculer la valeur exacte de certaines sommes de séries numériques.

On désigne par $\mathcal{C}_{2\pi}$ l'espace vectoriel des fonctions continues de $\mathbb{R}$ dans $\mathbb{C}$ qui sont $2\pi$-périodiques. Pour tout $(f,g) \in (\mathcal{C}_{2\pi})^2$, on définit le produit hermitien :
$$\langle f, g \rangle = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t)\overline{g(t)}\, \text{d}t$$
Et la norme associée $\|f\|_2 = \sqrt{\langle f, f \rangle}$.

Soit $f$ la fonction application définie sur $\mathbb{R}$, $2\pi$-périodique, paire, et telle que :
$$\forall t \in [0, \pi[, \quad f(t) = \pi - t$$
avec $f(\pi) = 0$.

---

### ❓ Questions progressives

1. **Représentation et régularité** : Tracer l'allure de la courbe représentative de $f$ sur $[-3\pi, 3\pi]$. La fonction $f$ est-elle de classe $\mathcal{C}^1$ par morceaux ?
2. **Calcul des coefficients de Fourier** : Pour tout $n \in \mathbb{Z}$, calculer les coefficients de Fourier exponentiels $c_n(f)$ de la fonction $f$ définis par :
   $$c_n(f) = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t)e^{-int}\, \text{d}t$$
3. **Expression réelle** : En déduire les coefficients de Fourier trigonométriques $a_n(f)$ et $b_n(f)$. Que peut-on dire des coefficients $b_n(f)$ ? Pourquoi ?
4. **Convergence de la série de Fourier** : 
   * Préciser en tout point $t \in \mathbb{R}$ la somme de la série de Fourier de $f$ en invoquant le théorème de Dirichlet.
   * Écrire l'égalité de Parseval associée à la fonction $f$.
5. **Applications numériques** : 
   * En évaluant la série de Fourier en $t = 0$, déterminer la somme de la série $\sum_{n=0}^{+\infty} \frac{1}{(2n+1)^2}$.
   * À l'aide de l'égalité de Parseval, calculer la somme $\sum_{n=1}^{+\infty} \frac{1}{n^2}$. Retrouver ainsi la célèbre valeur de $\zeta(2) = \sum_{n=1}^{+\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$.

---

### 💡 Pistes & Indications méthodologiques

* **Parité et coefficients** : Puisque $f$ est une fonction réelle et **paire**, ses coefficients exponentiels $c_n(f)$ sont réels, et l'on a $c_{-n}(f) = c_n(f)$. De plus, tous les coefficients sinus $b_n(f)$ sont nuls.
* **Intégrations par parties** : Pour calculer $c_n(f)$ pour $n \neq 0$, une intégration par parties sera nécessaire. Veillez à bien rédiger les conditions d'application (classe $\mathcal{C}^1$ par morceaux).
* **Dirichlet vs Parseval** : Ret bien faire la distinction entre la convergence simple (ou normale) de la série de Fourier vers la fonction (théorème de Dirichlet) et la convergence en norme quadratique (égalité de Parseval) qui permet de sommer les carrés des coefficients.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Représentation et régularité
* La fonction $f$ est $2\pi$-périodique et coïncide sur $[-\pi, \pi]$ avec la fonction $t \mapsto \pi - |t|$ (par parité). 
* Sur l'intervalle $]-\pi, \pi[$, $f$ est de classe $\mathcal{C}^1$ (dérivée constante égale à $-1$ sur $]0, \pi[$ et $1$ sur $]-\pi, 0[$). Elle présente des points anguleux en $k\pi$ ($k \in \mathbb{Z}$), mais admet des limites finies à gauche et à droite en ces points.
* **Conclusion** : $f$ est continue et de classe $\mathcal{C}^1$ par morceaux sur $\mathbb{R}$.

#### 2. Calcul des coefficients de Fourier exponentiels
Par définition, pour $n \in \mathbb{Z}$:
$$c_n(f) = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t)e^{-int}\, \text{d}t$$
Puisque $f$ est paire, $f(t)e^{-int}$ a la même parité que $t \mapsto \cos(nt)$ (le produit d'une fonction paire et d'une fonction paire est pair). Ainsi :
$$c_n(f) = \frac{1}{\pi} \int_{0}^{\pi} (\pi - t)\cos(nt)\, \text{d}t$$

* **Cas $n = 0$** :
  $$c_0(f) = \frac{1}{\pi} \int_{0}^{\pi} (\pi - t)\, \text{d}t = \frac{1}{\pi} \left[ \pi t - \frac{t^2}{2} \right]_0^\pi = \frac{1}{\pi} \left( \pi^2 - \frac{\pi^2}{2} \right) = \frac{\pi}{2}$$

* **Cas $n \neq 0$** :
  Effectuons une intégration par parties en posant $u(t) = \pi - t$ (donc $u'(t) = -1$) et $v'(t) = \cos(nt)$ (donc $v(t) = \frac{\sin(nt)}{n}$) :
  $$c_n(f) = \frac{1}{\pi} \left( \left[ (\pi - t) \frac{\sin(nt)}{n} \right]_0^\pi - \int_{0}^{\pi} (-1) \frac{\sin(nt)}{n}\, \text{d}t \right)$$
  Le terme tout intégré est nul en $t = \pi$ (car $\pi - \pi = 0$) et en $t = 0$ (car $\sin(0) = 0$). Il reste :
  $$c_n(f) = \frac{1}{\pi n} \int_{0}^{\pi} \sin(nt)\, \text{d}t = \frac{1}{\pi n} \left[ -\frac{\cos(nt)}{n} \right]_0^\pi = \frac{1 - \cos(n\pi)}{\pi n^2}$$
  Comme $\cos(n\pi) = (-1)^n$, on obtient :
  $$c_n(f) = \begin{cases} 0 & \text{si } n \text{ est pair } (n \neq 0) \\ \frac{2}{\pi n^2} & \text{si } n \text{ est impair} \end{cases}$$

#### 3. Expression réelle
Les coefficients trigonométriques sont reliés aux coefficients exponentiels par :
* $a_0(f) = 2c_0(f) = \pi$
* $a_n(f) = 2\text{Re}(c_n(f)) = \begin{cases} 0 & \text{si } n \text{ est pair} \\ \frac{4}{\pi n^2} & \text{si } n \text{ est impair} \end{cases}$
* $b_n(f) = -2\text{Im}(c_n(f)) = 0$ pour tout $n \in \mathbb{N}^*$ (ce qui était prévisible car $f$ est une fonction paire).

#### 4. Convergence de la série de Fourier et Parseval
* **Théorème de Dirichlet** : Puisque $f$ est continue et de classe $\mathcal{C}^1$ par morceaux, sa série de Fourier converge **normalement** (donc simplement) sur $\mathbb{R}$ vers $f$. Ainsi, pour tout $t \in \mathbb{R}$ :
  $$f(t) = \frac{a_0}{2} + \sum_{n=1}^{+\infty} \left( a_n(f)\cos(nt) + b_n(f)\sin(nt) \right) = \frac{\pi}{2} + \sum_{k=0}^{+\infty} \frac{4}{\pi (2k+1)^2} \cos((2k+1)t)$$

* **Égalité de Parseval** : 
  Puisque $f \in \mathcal{C}_{2\pi}$ et est $\mathcal{C}^1$ par morceaux, l'égalité de Parseval s'écrit :
  $$\|f\|_2^2 = |c_0(f)|^2 + \sum_{n=1}^{+\infty} \left( |c_n(f)|^2 + |c_{-n}(f)|^2 \right) = |c_0(f)|^2 + 2 \sum_{n=1}^{+\infty} |c_n(f)|^2$$
  Soit encore avec les coefficients réels :
  $$\frac{1}{2\pi} \int_{-\pi}^{\pi} (f(t))^2 \, \text{d}t = \left(\frac{a_0}{2}\right)^2 + \frac{1}{2} \sum_{n=1}^{+\infty} \left(a_n(f)^2 + b_n(f)^2\right)$$

#### 5. Applications numériques
* **Évaluation en $t = 0$** :
  On sait que $f(0) = \pi$. En substituant $t = 0$ dans la série de Fourier :
  $$f(0) = \frac{\pi}{2} + \sum_{k=0}^{+\infty} \frac{4}{\pi (2k+1)^2} \cos(0) \implies \pi = \frac{\pi}{2} + \frac{4}{\pi} \sum_{k=0}^{+\infty} \frac{1}{(2k+1)^2}$$
  $$\frac{\pi}{2} = \frac{4}{\pi} \sum_{k=0}^{+\infty} \frac{1}{(2k+1)^2} \implies \sum_{k=0}^{+\infty} \frac{1}{(2k+1)^2} = \frac{\pi^2}{8}$$

* **Utilisation de Parseval** :
  Calculons d'abord la norme au carré de $f$ :
  $$\|f\|_2^2 = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t)^2 \, \text{d}t = \frac{2}{2\pi} \int_{0}^{\pi} (\pi - t)^2 \, \text{d}t = \frac{1}{\pi} \left[ -\frac{(\pi - t)^3}{3} \right]_0^\pi = \frac{1}{\pi} \left( 0 - \left(-\frac{\pi^3}{3}\right) \right) = \frac{\pi^2}{3}$$
  Appliquons maintenant l'égalité de Parseval :
  $$\|f\|_2^2 = \left(\frac{\pi}{2}\right)^2 + 2 \sum_{k=0}^{+\infty} \left(\frac{2}{\pi (2k+1)^2}\right)^2 = \frac{\pi^2}{4} + \frac{8}{\pi^2} \sum_{k=0}^{+\infty} \frac{1}{(2k+1)^4} \quad (\text{ceci donne $\zeta(4)$, mais revenons à } \zeta(2))$$
  *Alternative directe avec les coefficients réels* :
  $$\frac{\pi^2}{3} = \left(\frac{a_0}{2}\right)^2 + \frac{1}{2} \sum_{n=1}^{+\infty} a_n^2 = \left(\frac{\pi}{2}\right)^2 + \frac{1}{2} \sum_{k=0}^{+\infty} \left(\frac{4}{\pi (2k+1)^2}\right)^2$$
  Ceci permet d'obtenir $\sum \frac{1}{(2k+1)^4} = \frac{\pi^4}{96}$. 
  
  Pour obtenir $\sum_{n=1}^{+\infty} \frac{1}{n^2}$, séparons les termes pairs et impairs :
  $$S = \sum_{n=1}^{+\infty} \frac{1}{n^2} = \sum_{k=0}^{+\infty} \frac{1}{(2k+1)^2} + \sum_{k=1}^{+\infty} \frac{1}{(2k)^2} = \sum_{k=0}^{+\infty} \frac{1}{(2k+1)^2} + \frac{1}{4} \sum_{k=1}^{+\infty} \frac{1}{k^2} = \frac{\pi^2}{8} + \frac{1}{4} S$$
  On en déduit :
  $$S \left(1 - \frac{1}{4}\right) = \frac{\pi^2}{8} \implies \frac{3}{4} S = \frac{\pi^2}{8} \implies S = \frac{4}{3} \times \frac{\pi^2}{8} = \frac{\pi^2}{6}$$
  
Conclusion: 
  $$\sum_{n=1}^{+\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$$