---
title: 'Exercice : Théorème de Dirichlet et égalité de Parseval'
description: 'Problème d entraînement type concours pour CPGE MP.'
---

### 🌐 Énoncé du problème / Cadre d'étude

L'objectif de ce problème est d'étudier le développement en série de Fourier d'une fonction périodique à morceaux, d'appliquer le théorème de Dirichlet pour déterminer la somme de certaines séries numériques, et d'utiliser l'égalité de Parseval pour calculer la somme de séries de carrés.

Soit $f : \mathbb{R} \to \mathbb{R}$ la fonction $2\pi$-périodique, impaire, définie sur l'intervalle $[0, \pi]$ par :
$$f(t) = t(\pi - t)$$

### ❓ Questions progressives

1. **Préliminaires et régularité**
   a. Justifier que la fonction $f$ est de classe $\mathcal{C}^1$ par morceaux sur $\mathbb{R}$.
   b. Rappeler l'expression des coefficients de Fourier trigonométriques $a_n(f)$ et $b_n(f)$ pour $n \in \mathbb{N}$. Calculer $a_n(f)$ pour tout $n \in \mathbb{N}$.

2. **Calcul des coefficients de Fourier**
   a. Calculer $b_n(f)$ pour tout $n \in \mathbb{N}^*$ en effectuant des intégrations par parties.
   b. Expliciter la série de Fourier associée à $f$, notée $S(f)$.

3. **Application du théorème de Dirichlet**
   a. Énoncer précisément le théorème de Dirichlet pour une fonction $2\pi$-périodique et de classe $\mathcal{C}^1$ par morceaux.
   b. En déduire la valeur de la somme de la série numérique $\sum_{k=0}^{+\infty} \frac{(-1)^k}{(2k+1)^3}$.

4. **Égalité de Parseval et sommation**
   a. Rappeler l'égalité de Parseval pour une fonction $2\pi$-périodique et continue par morceaux.
   b. Appliquer cette égalité à la fonction $f$ pour déterminer la valeur de la somme $\sum_{n=1}^{+\infty} \frac{1}{n^6}$.

---

### 💡 Pistes & Indications méthodologiques

* **Parité :** Pensez à exploiter la parité de $f$ pour simplifier les calculs de coefficients (les coefficients en cosinus sont nuls pour une fonction impaire).
* **Intégrations par parties :** Pour calculer les intégrales du type $\int_0^\pi t(\pi - t)\sin(nx)\,\mathrm{d}t$, deux intégrations par parties successives sont nécessaires.
* **Théorème de Dirichlet :** Vérifiez bien les hypothèses de régularité (continuité et dérivabilité par morceaux) aux points où l'on évalue la somme, notamment en $t = \frac{\pi}{2}$.
* **Parseval :** Veillez à bien normaliser les coefficients selon la formule du cours utilisée (version coefficients réels $a_n, b_n$ ou coefficients complexes $c_n$).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Préliminaires et régularité

**a. Régularité de $f$ :**
Sur l'intervalle $]0, \pi[$, la fonction $f$ est polynomiale, donc de classe $\mathcal{C}^\infty$. 
La fonction $f$ est $2\pi$-périodique et impaire. En $t = 0$ et $t = \pi$, les limites à gauche et à droite existent, ainsi que celles de la dérivée $f'(t) = \pi - 2t$. Par conséquent, $f$ est continue et de classe $\mathcal{C}^1$ par morceaux sur $\mathbb{R}$.

**b. Coefficients de Fourier et calcul des $a_n$ :**
Puisque $f$ est impaire, le produit $t \mapsto f(t)\cos(nt)$ est impair, et le produit $t \mapsto f(t)\sin(nt)$ est pair. Par conséquent, pour tout $n \in \mathbb{N}$ :
$$a_n(f) = \frac{1}{\pi} \int_{-\pi}^{\pi} f(t)\cos(nt)\,\mathrm{d}t = 0$$

---

#### 2. Calcul des coefficients de Fourier

**a. Calcul des $b_n$ :**
Pour $n \in \mathbb{N}^*$ :
$$b_n(f) = \frac{2}{\pi} \int_{0}^{\pi} t(\pi - t)\sin(nt)\,\mathrm{d}t = \frac{2}{\pi} \int_{0}^{\pi} (\pi t - t^2)\sin(nt)\,\mathrm{d}t$$
Effectuons une première intégration par parties en posant $u(t) = \pi t - t^2$ (de sorte que $u'(t) = \pi - 2t$) et $v'(t) = \sin(nt)$ (donc $v(t) = -\frac{\cos(nt)}{n}$) :
$$\int_{0}^{\pi} (\pi t - t^2)\sin(nt)\,\mathrm{d}t = \left[ -(\pi t - t^2)\frac{\cos(nt)}{n} \right]_0^\pi + \frac{1}{n} \int_{0}^{\pi} (\pi - 2t)\cos(nt)\,\mathrm{d}t$$
Le terme tout intégré est nul en $0$ et en $\pi$ car $\pi t - t^2 = 0$ aux bornes. Il reste :
$$\int_{0}^{\pi} (\pi t - t^2)\sin(nt)\,\mathrm{d}t = \frac{1}{n} \int_{0}^{\pi} (\pi - 2t)\cos(nt)\,\mathrm{d}t$$
Effectuons une seconde intégration par parties sur cette nouvelle intégrale, en posant $u_1(t) = \pi - 2t$ ($u_1'(t) = -2$) et $v_1'(t) = \cos(nt)$ ($v_1(t) = \frac{\sin(nt)}{n}$) :
$$\int_{0}^{\pi} (\pi - 2t)\cos(nt)\,\mathrm{d}t = \left[ (\pi - 2t)\frac{\sin(nt)}{n} \right]_0^\pi - \int_{0}^{\pi} (-2)\frac{\sin(nt)}{n}\,\mathrm{d}t$$
Le terme tout intégré s'annule (car $\sin(n\pi) = \sin(0) = 0$). Il vient :
$$\int_{0}^{\pi} (\pi - 2t)\cos(nt)\,\mathrm{d}t = \frac{2}{n} \int_{0}^{\pi} \sin(nt)\,\mathrm{d}t = \frac{2}{n} \left[ -\frac{\cos(nt)}{n} \right]_0^\pi = \frac{2}{n^2} (1 - (-1)^n)$$
En remplaçant dans l'expression de $b_n(f)$ :
$$b_n(f) = \frac{2}{\pi} \times \frac{1}{n} \times \frac{2}{n^2} (1 - (-1)^n) = \frac{4}{\pi n^3} (1 - (-1)^n)$$
Ainsi :
* Si $n = 2p$ est pair, $b_{2p}(f) = 0$.
* Si $n = 2p+1$ est impair, $b_{2p+1}(f) = \frac{8}{\pi (2p+1)^3}$.

**b. Série de Fourier associée :**
La série de Fourier de $f$ est donc :
$$S(f)(t) = \sum_{p=0}^{+\infty} \frac{8}{\pi (2p+1)^3} \sin((2p+1)t)$$

---

#### 3. Application du théorème de Dirichlet

**a. Énoncé du théorème de Dirichlet :**
Si une fonction $g : \mathbb{R} \to \mathbb{R}$ est $2\pi$-périodique et de classe $\mathcal{C}^1$ par morceaux, alors sa série de Fourier converge pour tout $t \in \mathbb{R}$, et sa somme est égale à :
$$S(g)(t) = \frac{g(t^+) + g(t^-)}{2}$$
De plus, si $g$ est continue en $t$, la série converge vers $g(t)$.

**b. Application en $t = \frac{\pi}{2}$ :**
La fonction $f$ est continue sur $\mathbb{R}$. Par le théorème de Dirichlet, pour tout $t \in \mathbb{R}$, $S(f)(t) = f(t)$.
Évaluons cette égalité en $t = \frac{\pi}{2}$ :
$$f\left(\frac{\pi}{2}\right) = \frac{\pi}{2}\left(\pi - \frac{\pi}{2}\right) = \frac{\pi^2}{4}$$
D'autre part, en remplaçant $t$ par $\frac{\pi}{2}$ dans la série de Fourier :
$$S(f)\left(\frac{\pi}{2}\right) = \sum_{p=0}^{+\infty} \frac{8}{\pi (2p+1)^3} \sin\left((2p+1)\frac{\pi}{2}\right)$$
Remarquons que $\sin\left((2p+1)\frac{\pi}{2}\right) = (-1)^p$. Ainsi :
$$S(f)\left(\frac{\pi}{2}\right) = \frac{8}{\pi} \sum_{p=0}^{+\infty} \frac{(-1)^p}{(2p+1)^3}$$
En égalisant les deux expressions :
$$\frac{8}{\pi} \sum_{p=0}^{+\infty} \frac{(-1)^p}{(2p+1)^3} = \frac{\pi^2}{4} \implies \sum_{p=0}^{+\infty} \frac{(-1)^p}{(2p+1)^3} = \frac{\pi^3}{32}$$

---

#### 4. Égalité de Parseval et sommation

**a. Rappel de l'égalité de Parseval :**
Si $g$ est une fonction $2\pi$-périodique et continue par morceaux sur $\mathbb{R}$, alors :
$$\frac{1}{\pi} \int_{-\pi}^{\pi} (g(t))^2\,\mathrm{d}t = \frac{a_0(g)^2}{2} + \sum_{n=1}^{+\infty} \left(a_n(g)^2 + b_n(g)^2\right)$$

**b. Application à la fonction $f$ :**
Calculons d'abord le terme intégral :
$$\frac{1}{\pi} \int_{-\pi}^{\pi} (f(t))^2\,\mathrm{d}t = \frac{2}{\pi} \int_{0}^{\pi} t^2(\pi - t)^2\,\mathrm{d}t$$
Développons l'intégrant :
$$t^2(\pi - t)^2 = t^2(\pi^2 - 2\pi t + t^2) = \pi^2 t^2 - 2\pi t^3 + t^4$$
Calculons l'intégrale terme à terme entre $0$ et $\pi$ :
* $\int_0^\pi t^2\,\mathrm{d}t = \frac{\pi^3}{3}$
* $\int_0^\pi t^3\,\mathrm{d}t = \frac{\pi^4}{4}$
* $\int_0^\pi t^4\,\mathrm{d}t = \frac{\pi^5}{5}$

Donc :
$$\int_{0}^{\pi} t^2(\pi - t)^2\,\mathrm{d}t = \pi^2 \left(\frac{\pi^3}{3}\right) - 2\pi \left(\frac{\pi^4}{4}\right) + \frac{\pi^5}{5} = \pi^5 \left(\frac{1}{3} - \frac{1}{2} + \frac{1}{5}\right)$$
Mettons au même dénominateur ($30$) :
$$\frac{1}{3} - \frac{1}{2} + \frac{1}{5} = \frac{10 - 15 + 6}{30} = \frac{1}{30}$$
Ainsi, l'intégrale vaut $\frac{\pi^5}{30}$, et par conséquent :
$$\frac{1}{\pi} \int_{-\pi}^{\pi} (f(t))^2\,\mathrm{d}t = \frac{2}{\pi} \times \frac{\pi^5}{30} = \frac{\pi^4}{15}$$

Appliquons maintenant l'égalité de Parseval. On a $a_n(f) = 0$ pour tout $n \in \mathbb{N}$, et $b_n(f)$ non nul uniquement pour les indices impairs $n = 2p+1$ :
$$\frac{\pi^4}{15} = \sum_{p=0}^{+\infty} \left( \frac{8}{\pi (2p+1)^3} \right)^2 = \frac{64}{\pi^2} \sum_{p=0}^{+\infty} \frac{1}{(2p+1)^6}$$
En isolant la somme recherchée :
$$\sum_{p=0}^{+\infty} \frac{1}{(2p+1)^6} = \frac{\pi^4}{15} \times \frac{\pi^2}{64} = \frac{\pi^6}{960}$$