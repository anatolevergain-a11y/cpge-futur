---
title: 'Exercice 2 : Théorème de Parseval'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Autour du Théorème de Parseval et de ses applications

**Filière :** PSI  
**Matière :** Mathématiques  
Chapitre: ** Séries de Fourier  
**Thème :** Théorème de Parseval, convergence en moyenne quadratique et limites physiques du modèle.

---

## 1. Énoncé

Soit $f : \mathbb{R} \to \mathbb{C}$ une fonction $2\pi$-périodique, continue par morceaux et de classe $\mathcal{C}^1$ par morceaux. On note $\mathcal{D}_{2\pi}$ l'espace vectoriel de telles fonctions.
Pour tout $n \in \mathbb{Z}$, on définit les coefficients de Fourier de $f$ par la formule :
$$c_n(f) = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t) e^{-int} \, dt$$

Le but de ce problème est d'établir le théorème de Parseval pour ces fonctions, d'en déduire des applications numériques de sommation de séries, puis de porter un regard critique sur la modélisation mathématique face à des signaux physiques réels discontinus.

---

## 2. Questions

### Partie I : Préliminaires et Lemme de Riemann-Lebesgue
1. Rappeler l'expression des coefficients de Fourier réels $a_n(f)$ et $b_n(f)$ pour une fonction $f$ à valeurs réelles, en fonction de $c_n(f)$.
2. Établir que pour toute fonction $f \in \mathcal{D}_{2\pi}$, la suite $(c_n(f))_{n \in \mathbb{Z}}$ tend vers $0$ lorsque $|n| \to +\infty$.

### Partie II : Théorème de Parseval
On note $S_N(f)$ la somme partielle de la série de Fourier de $f$ :
$$S_N(f)(t) = \sum_{n=-N}^{N} c_n(f) e^{int}$$
3. Exprimer l'intégrale $\frac{1}{2\pi} \int_{-\pi}^{\pi} |S_N(f)(t)|^2 \, dt$ à l'aide des coefficients $c_n(f)$ pour $|n| \le N$.
4. En utilisant les propriétés de convergence de la série de Fourier et l'égalité de Parseval, montrer que :
$$\frac{1}{2\pi} \int_{-\pi}^{\pi} |f(t)|^2 \, dt = \sum_{n=-\infty}^{+\infty} |c_n(f)|^2$$

### Partie III : Application et Analyse critique du modèle
On considère le signal "dent de scie" défini par $f(t) = t$ pour $t \in ]-\pi, \pi[$ et prolongé par $2\pi$-périodicité.
5. Calculer les coefficients de Fourier de $f$.
6. Appliquer le théorème de Parseval à la fonction $f$ pour déterminer la valeur de la somme $\sum_{n=1}^{+\infty} \frac{1}{n^2}$.
7. **Analyse critique des limites du modèle :** 
   En physique, le signal $f$ représente une tension électrique idéale. La quantité $\frac{1}{2\pi} \int_{-\pi}^{\pi} |f(t)|^2 \, dt$ représente la puissance moyenne normalisée du signal. 
   Expliquer pourquoi, dans un dispositif expérimental réel, l'égalité parfaite de Parseval est mise en défaut. Discuter en particulier de l'impact de la troncature de la série de Fourier (utilisation d'un nombre fini $N$ de composantes harmoniques) au voisinage des discontinuités (phénomène de Gibbs) et des limites fréquentielles des composants électroniques.

---

## 3. Pistes

* **Question 2 :** Intégrer par parties en utilisant la régularité $\mathcal{C}^1$ par morceaux de $f$, ou utiliser l'inégalité de Bessel-Parseval préliminaire.
* **Question 3 :** Utiliser l'orthonormalfamille de la famille $(t \mapsto e^{int})_{n \in \mathbb{Z}}$ pour le produit hermitien usuel sur $\mathcal{C}(\mathbb{R}, \mathbb{C})$.
* **Question 6 :** Attention aux bornes de la sommation (symétrique vs unilatérale).
* **Question 7 :** Penser à l'énergie contenue dans les hautes fréquences et à la bande passante finie de tout capteur ou amplificateur réel.

---

## 4. Corrigé pas à pas

### Partie I_1. Pour $f$ à valeurs réelles, on a pour $n \ge 1$ :
   $$c_0(f) = \frac{a_0}{2}, \quad c_n(f) = \frac{a_n - ib_n}{2}, \quad c_{-n}(f) = \frac{a_n + ib_n}{2}$$
   Soit $a_n = 2 \text{Re}(c_n(f))$ et $b_n = -2 \text{Im}(c_n(f))$.

2. Si $f$ est de classe $\mathcal{C}^1$ par morceaux, une intégration par parties donne :
   $$c_n(f) = \frac{1}{2\pi} \left[ f(t) \frac{e^{-int}}{-in} \right]_{-\pi}^{\pi} - \frac{1}{2\pi} \int_{-\pi}^{\pi} f'(t) \frac{e^{-int}}{-in} \, dt = \frac{1}{in} \underbrace{\frac{1}{2\pi} \int_{-\pi}^{\pi} f'(t) e^{-int} \, dt}_{= c_n(f')}$$
   Puisque $f'$ est continue par morceaux, $c_n(f')$ est bornée. Ainsi, $|c_n(f)| = \frac{|c_n(f')|}{|n|} \xrightarrow[|n|\to+\infty]{} 0$.

### Partie II
3. Par orthogonalité de la famille $(e^{int})_{n\in\mathbb{Z}}$ pour le produit scalaire $\langle u, v \rangle = \frac{1}{2\pi} \int_{-\pi}^{\pi} u(t)\overline{v(t)} \, dt$, les termes croisés s'annulent :
   $$\frac{1}{2\pi} \int_{-\pi}^{\pi} |S_N(f)(t)|^2 \, dt = \sum_{n=-N}^{N} |c_n(f)|^2$$

4. Si $f$ est continue par morceaux et $\mathcal{C}^1$ par morceaux, la convergence en moyenne quadratique (ou le théorème de Dirichlet si $f$ est continue) assure que $S_N(f)$ converge vers $f$ dans $L^2$. En passant à la limite $N \to +\infty$ dans l'égalité précédente, on obtient :
   $$\frac{1}{2\pi} \int_{-\pi}^{\pi} |f(t)|^2 \, dt = \sum_{n=-\infty}^{+\infty} |c_n(f)|^2$$

### Partie III
5. Pour la dent de scie ($f(t) = t$ sur $]-\pi, \pi[$), la fonction est impaire. Ainsi $a_n = 0$ pour tout $n$.
   Pour $n \ge 1$ :
   $$b_n = \frac{2}{\pi} \int_{0}^{\pi} t \sin(nt) \, dt = \frac{2}{\pi} \left( \left[ -t \frac{\cos(nt)}{n} \right]_0^\pi + \int_0^\pi \frac{\cos(nt)}{n} \, dt \right) = (-1)^{n+1} \frac{2}{n}$$
   D'où $c_0 = 0$ et $c_n(f) = -i \frac{(-1)^n}{n}$ pour $n \neq 0$.

6. Appliquons le théorème de Parseval :
   $$\frac{1}{2\pi} \int_{-\pi}^{\pi} t^2 \, dt = \sum_{n \neq 0} |c_n(f)|^2$$
   Le membre de gauche vaut :
   $$\frac{1}{2\pi} \left[ \frac{t^3}{3} \right]_{-\pi}^{\pi} = \frac{\pi^2}{3}$$
   Le membre de droite vaut :
   $$\sum_{n=1}^{+\infty} \left( \frac{1}{n^2} + \frac{1}{(-n)^2} \right) = 2 \sum_{n=1}^{+\infty} \frac{1}{n^2}$$
   On en déduit la célèbre somme d'Euler :
   $$\sum_{n=1}^{+\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$$

7. **Analyse critique des limites du modèle :**
   * **Discontinuités et énergie :** Le signal dent de scie présente des sauts en $t = \pm(2k+1)\pi$. Mathématiquement, l'intégrale $\int_{-\pi}^{\pi} |f(t)|^2 \, dt$ converge car les singularités sont en $L^2$ (intégrables au carré). Cependant, la convergence simple de la série de Fourier présente le **phénomène de Gibbs** aux points de discontinuité (dépassement d'environ $9\%$ de l'amplitude du saut).
   * **Troncature temporelle et fréquentielle (Limites physiques) :** Dans la réalité, un système électronique ne peut additionner qu'un nombre *fini* $N$ d'harmoniques. La puissance mesurée est donc $\sum_{n=-N}^{N} |c_n(f)|^2$. L'erreur commise par rapport à l'énergie totale est le reste d'une série en $O(1/N)$, car les coefficients $c_n(f)$ décrochent en $1/n$ (ce qui est caractéristique des fonctions $\mathcal{C}^1$ par morceaux avec sauts). 
   * **Bande passante :** Les composants réels (amplificateurs, câbles) agissent comme des filtres passe-bas. Les hautes fréquences (nécessaires pour restituer la pente infinie des fronts de saut) sont atténuées ou supprimées, ce qui arrondit physiquement les angles du signal et fait échouer la correspondance exacte avec le modèle mathématique idéal de Parseval.