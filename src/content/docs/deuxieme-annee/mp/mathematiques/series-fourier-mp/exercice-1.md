---
title: 'Exercice 1 : Coefficients de Fourier trigonométriques et complexes'
description: 'Problème d entraînement type concours pour CPGE MP.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $f : \mathbb{R} \to \mathbb{C}$ une application $2\pi$-périodique, continue par morceaux et de classe $\mathcal{C}^1$ par morceaux sur $\mathbb{R}$. 
On rappelle que les coefficients de Fourier trigonométriques de $f$ sont définis pour $n \in \mathbb{N}$ et $n \in \mathbb{N}^*$ par :
$$a_n(f) = \frac{1}{\pi} \int_{-\pi}^{\pi} f(t) \cos(nt) \, \text{d}t, \quad b_n(f) = \frac{1}{\pi} \int_{-\pi}^{\pi} f(t) \sin(nt) \, \text{d}t$$
Et pour $n \in \mathbb{Z}$, les coefficients de Fourier complexes sont définis par :
$$c_n(f) = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t) e^{-int} \, \text{d}t$$

L'objectif de ce problème est d'établir des liens fondamentaux entre régularité de la fonction et décroissance de ses coefficients de Fourier, puis d'appliquer ces résultats à une fonction concrète.

---

### ❓ Questions progressives

1. **Lien trigonométrique / complexe :** Exprimer les coefficients $c_n(f)$ en fonction de $a_n(f)$ et $b_n(f)$ pour tout $n \in \mathbb{Z}$. Que devient cette relation si $f$ est à valeurs réelles ?
2. **Lemme de Riemann-Lebesgue et régularité :** En effectuant une intégration par parties, établir une relation de récurrence entre les coefficients de Fourier de $f$ et ceux de sa dérivée $f'$, en supposant $f$ de classe $\mathcal{C}^1$ sur $\mathbb{R}$. En déduire la vitesse de décroissance de $c_n(f)$ lorsque $|n| \to +\infty$.
3. **Application concrète :** On considère la fonction $f : \mathbb{R} \to \mathbb{R}$, $2\pi$-périodique, définie sur $[-\pi, \pi[$ par $f(t) = |t|$.
   a. Tracer l'allure de $f$ sur $[-2\pi, 2\pi]$ et vérifier ses hypothérses de régularité.
   b. Calculer les coefficients de Fourier trigonométriques $a_n(f)$ et $b_n(f)$ pour tout $n \in \mathbb{N}$.
   c. En déduire la valeur de la somme de la série numérique $\sum_{n=0}^{+\infty} \frac{1}{(2n+1)^2}$.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Utilisez la formule d'Euler $e^{int} = \cos(nt) + i\sin(nt)$ et distinguez les cas $n > 0$, $n = 0$ et $n < 0$.
* **Question 2 :** Pour l'intégration par parties, le terme tout intégré s'annule en raison de la $2\pi$-périodicité. Attention aux hypothérses : la formule de dérivation s'applique directement si $f$ est $\mathcal{C}^1$ globale, ou par morceaux si les points de raccordement sont gérés proprement.
* **Question 3.b :** Utilisez la parité de $f$ pour simplifier les calculs (les $b_n$ doivent s'annuler immédiatement). Pour les $a_n$, distinguez $n=0$ et $n \ge 1$, puis effectuez une intégration par parties.
* **Question 3.c :** Appliquez le théorème de Dirichlet (ou l'égalité de Parseval, selon la somme visée) en un point judicieux, par exemple en $t = 0$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Lien trigonométrique / complexe
Par definition, pour $n \in \mathbb{Z}$:
$$c_n(f) = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t) (\cos(nt) - i\sin(nt)) \, \text{d}t$$

* **Si $n = 0$ :** 
  $$c_0(f) = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t) \, \text{d}t = \frac{a_0(f)}{2}$$

* **Si $n \ge 1$ :** En utilisant $\cos(-nt) = \cos(nt)$ et $\sin(-nt) = -\sin(nt)$, on a :
  * Pour $n > 0$ : $c_n(f) = \frac{1}{2} (a_n(f) - i b_n(f))$
  * Pour $n < 0$ (en posant $n = -m$ avec $m \ge 1$) : $c_n(f) = \frac{1}{2} (a_m(f) + i b_m(f))$

Si $f$ est à valeurs réelles, on remarque immédiatement que $c_{-n}(f) = \overline{c_n(f)}$.

---

#### 2. Lemme de Riemann-Lebesgue et régularité
Supposons $f$ de classe $\mathcal{C}^1$ sur $\mathbb{R}$. Pour $n \in \mathbb{Z}^*$, en effectuant une intégration par parties (les fonctions $t \mapsto f(t)$ et $t \mapsto -\frac{1}{in}e^{-int}$ étant de classe $\mathcal{C}^1$) :
$$c_n(f) = \frac{1}{2\pi} \left[ f(t) \left(-\frac{1}{in} e^{-int}\right) \right]_{-\pi}^{\pi} - \frac{1}{2\pi} \int_{-\pi}^{\pi} f'(t) \left(-\frac{1}{in} e^{-int}\right) \, \text{d}t$$

Puisque $f$ et $e^{-int}$ sont $2\pi$-périodiques, le terme tout intégré $\left[ -\frac{f(t)}{2\pi i n} e^{-int} \right]_{-\pi}^{\pi}$ est nul (car $f(\pi)e^{-in\pi} = f(-\pi)e^{in\pi}$ par periodicité et parité de $e^{in\pi}$). Il reste donc :
$$c_n(f) = \frac{1}{in} \left( \frac{1}{2\pi} \int_{-\pi}^{\pi} f'(t) e^{-int} \, \text{d}t \right) = \frac{1}{in} c_n(f')$$

* **Conséquence sur la décroissance :** Comme $f'$ est continue par morceaux, d'après le **lemme de Riemann-Lebesgue**, $c_n(f') \to 0$ lorsque $|n| \to +\infty$. Par conséquent, $c_n(f) = o\left(\frac{1}{n}\right)$. 
Si $f$ est de classe $\mathcal{C}^k$, une récurrence immédiate montre que $c_n(f) = o\left(\frac{1}{n^k}\right)$, ce qui traduit le fait que *la régularité de la fonction implique la rapidité de décroissance de ses coefficients de Fourier*.

---

#### 3. Application concrète ($f(t) = |t|$ sur $[-\pi, \pi[$)

##### a. Allure et régularité
La fonction $f$ est continue sur $\mathbb{R}$, paire, et sa dérivée sur $\mathopen{ങ്ങളിലും}\setminus\pi\mathbb{Z}$ est $f'(t) = \text{sgn}(t)$. Elle est donc de classe $\mathcal{C}^1$ par morceaux.

##### b. Calcul des coefficients trigonométriques
* **Parité :** $f(t)\cos(nt)$ est une fonction paire, et $f(t)\sin(nt)$ est une fonction impaire. Par conséquent, pour tout $n \ge 1$ :
  $$b_n(f) = 0$$

* **Pour $n = 0$ :**
  $$a_0(f) = \frac{1}{\pi} \int_{-\pi}^{\pi} |t| \, \text{d}t = \frac{2}{\pi} \int_{0}^{\pi} t \, \text{d}t = \frac{2}{\pi} \left[ \frac{t^2}{2} \right]_0^\pi = \pi$$

* **Pour $n \ge 1$ :**
  $$a_n(f) = \frac{2}{\pi} \int_{0}^{\pi} t \cos(nt) \, \text{d}t$$
  Effectuons une intégration par parties en posant $u(t) = t$ et $v'(t) = \cos(nt)$ :
  $$a_n(f) = \frac{2}{\pi} \left( \left[ t \frac{\sin(nt)}{n} \right]_0^\pi - \int_{0}^{\pi} \frac{\sin(nt)}{n} \, \text{d}t \right)$$
  Le terme tout intégré s'annule en $0$ et en $\pi$ (car $\sin(n\pi) = 0$). Il reste :
  $$a_n(f) = \frac{2}{\pi n} \left[ \frac{\cos(nt)}{n} \right]_0^\pi = \frac{2}{\pi n^2} (\cos(n\pi) - 1) = \frac{2}{\pi n^2} ((-1)^n - 1)$$
  Ainsi :
  * Si $n$ est pair ($n = 2k$), $a_{2k}(f) = 0$.
  * Si $n$ est impair ($n = 2k+1$), $a_{2k+1}(f) = -\frac{4}{\pi (2k+1)^2}$.

##### c. Somme de la série numérique
La fonction $f$ étant continue et $\mathcal{C}^1$ par morceaux, le **théorème de Dirichlet** s'applique en tout point. En particulier, en $t = 0$, $f(0) = 0$, et la série de Fourier de $f$ converge vers $f(0)$ :
$$f(0) = \frac{a_0(f)}{2} + \sum_{n=1}^{+\infty} \left( a_n(f)\cos(0) + b_n(f)\sin(0) \right)$$
$$0 = \frac{\pi}{2} + \sum_{k=0}^{+\infty} \left( -\frac{4}{\pi (2k+1)^2} \right)$$
En réarrangeant les termes, on obtient :
$$\frac{4}{\pi} \sum_{k=0}^{+\infty} \frac{1}{(2k+1)^2} = \frac{\pi}{2}$$
Finalement :
$$\sum_{k=0}^{+\infty} \frac{1}{(2k+1)^2} = \frac{\pi^2}{8}$$