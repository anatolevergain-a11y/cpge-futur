---
title: 'Cours : Séries entières et Séries de Fourier'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Séries entières et Séries de Fourier
Niveau: ** Deuxième année (MP)  
**Matière :** Mathématiques  

---

## I. Séries entières d'une variable réelle ou complexe

### 1. Définitions et rayon de convergence

#### Définition (Série entière)
On appelle série entière une série de fonctions de la forme :
$$\sum_{n \ge 0} a_n z^n$$
où $(a_n)_{n \in \mathbb{N}}$ est une suite de nombres (réels ou complexes) et $z$ la variable ($\mathbb{R}$ ou $\mathbb{C}$).

#### Théorème (Lemme d'Abel)
Soit $\sum a_n z^n$ une série entière. Si la suite $(a_n z_0^n)_{n \in \mathbb{N}}$ est bornée pour un certain $z_0 \neq 0$, alors la série converge **normalement** (donc absolument) sur tout disque fermé $D(0, r) = \{z \in \mathbb{C} / |z| \le r\}$ pour tout $r < |z_0|$.

#### Définition (Rayon de convergence)
Il existe un unique $R \in [0, +\infty]$, appelé **rayon de convergence** de la série entière, tel que :
* Pour tout $z$ tel que $|z| < R$, la série $\sum a_n z^n$ converge **absolument**.
* Pour tout $z$ tel que $|z| > R$, la série diverge grossièrement (le terme général ne tend pas vers 0).

*Méthode de calcul de $R$ :*
1. **Règle de d'Alembert (si applicable) :** Si $\lim_{n \to +\infty} \left|\frac{a_{n+1}}{a_n}\right| = L \in [0, +\infty]$, alors $R = \frac{1}{L}$ (avec la convention $1/0 = +\infty$ et $1/\infty = 0$).
2. **Règle de Cauchy (Hadamard) :** $\frac{1}{R} = \limsup_{n \to +\infty} |a_n|^{1/n}$.
3. **Comparaison ou équivalents :** Utiliser les développements limités usuels.

---

### 2. Propriétés de la somme d'une série entière

Soit $\sum a_n z^n$ une série entière de rayon de convergence $R > 0$. On définit la somme $S(x) = \sum_{n=0}^{+\infty} a_n x^n$ sur $]-R, R[$.

* **Continuité :** La somme $S$ est de classe $\mathcal{C}^0$ sur $]-R, R[$.
* **Intégration terme à terme :** Pour tout $[a, b] \subset ]-R, R[$ :
  $$\int_{a}^{b} \left( \sum_{n=0}^{+\infty} a_n t^n \right) dt = \sum_{n=0}^{+\infty} a_n \int_{a}^{b} t^n dt$$
* **Dérivation terme à terme :** La somme $S$ est de classe $\mathcal{C}^\infty$ sur $]-R, R[$. Sa dérivée s'obtient en dérivant terme à terme, et la série dérivée a le **même rayon de convergence** $R$ :
  $$S'(x) = \sum_{n=1}^{+\infty} n a_n x^{n-1}$$
* **Formule de Taylor pour les séries entières :** Si $S(x) = \sum_{n=0}^{+\infty} a_n x^n$ sur $]-R, R[$, alors pour tout $n \in \mathbb{N}$ :
  $$a_n = \frac{S^{(n)}(0)}{n!}$$
  *Conséquence :* Unicité du développement en série entière (DSE).

---

### 3. Fonctions usuelles développables en série entière

À connaître par cœur (valables pour $x \in \mathbb{C}$ ou $]-R, R[$) :
1. $\mathrm{e}^x = \sum_{n=0}^{+\infty} \frac{x^n}{n!} \quad (R = +\infty)$
2. $\cos(x) = \sum_{n=0}^{+\infty} \frac{(-1)^n}{(2n)!} x^{2n} \quad (R = +\infty)$
3. $\sin(x) = \sum_{n=0}^{+\infty} \frac{(-1)^n}{(2n+1)!} x^{2n+1} \quad (R = +\infty)$
4. $\frac{1}{1-x} = \sum_{n=0}^{+\infty} x^n \quad (R = 1)$
5. $\frac{1}{1+x} = \sum_{n=0}^{+\infty} (-1)^n x^n \quad (R = 1)$
6. $\ln(1+x) = \sum_{n=1}^{+\infty} \frac{(-1)^{n-1}}{n} x^n \quad (R = 1)$
7. $(1+x)^\alpha = \sum_{n=0}^{+\infty} \binom{\alpha}{n} x^n \quad (\alpha \in \mathbb{R}, R = 1)$

---

## II. Séries de Fourier

### 1. Cadre général et coefficients de Fourier

Soit $f : \mathbb{R} \to \mathbb{C}$ (ou $\mathbb{R}$) une fonction **$T$-périodique** (grammaticalement $T=2\pi$ par un simple changement d'échelle, qu'on posera par la suite) et **continue par morceaux**.

#### Définition (Coefficients de Fourier)
On définit les coefficients de Fourier exponentiels de $f$ par :
$$c_n(f) = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t) \mathrm{e}^{-i n t} dt \quad (n \in \mathbb{Z})$$
Si $f$ est à valeurs réelles, on utilise les coefficients trigonométriques :
$$a_n(f) = \frac{1}{\pi} \int_{-\pi}^{\pi} f(t) \cos(n t) dt \quad (n \in \mathbb{N})$$
$$b_n(f) = \frac{1}{\pi} \int_{-\pi}^{\pi} f(t) \sin(n t) dt \quad (n \in \mathbb{N}^*)$$
*(Lien : $c_0 = \frac{a_0}{2}$, et pour $n \ge 1$, $c_n = \frac{a_n - i b_n}{2}$ et $c_{-n} = \frac{a_n + i b_n}{2}$)*.

#### Définition (Série de Fourier)
On appelle série de Fourier de $f$ la série de fonctions :
$$S(f)(t) = \sum_{n=-\infty}^{+\infty} c_n(f) \mathrm{e}^{i n t} = \frac{a_0}{2} + \sum_{n=1}^{+\infty} \left( a_n(f)\cos(nt) + b_n(f)\sin(nt) \right)$$

---

### 2. Convergence des séries de Fourier

#### Théorème de Dirichlet (Convergence simple)
Si $f$ est $2\pi$-périodique, de classe $\mathcal{C}^1$ par morceaux sur $\mathbb{R}$, alors pour tout $t \in \mathbb{R}$, la série de Fourier de $f$ converge et l'on a :
$$S(f)(t) = \frac{f(t^+) + f(t^-)}{2}$$
*En tout point de continuité $t$, la série converge simplement vers $f(t)$.*

#### Théorème de Parseval (Convergence quadratique)
Si $f$ est $2\pi$-périodique et **continue par morceaux** (ou $\mathcal{L}^2$), alors la série de Fourier converge en moyenne quadratique, et l'on a l'égalité de Parseval :
$$\frac{1}{2\pi} \int_{-\pi}^{\pi} |f(t)|^2 dt = \sum_{n=-\infty}^{+\infty} |c_n(f)|^2 = \left(\frac{a_0}{2}\right)^2 + \frac{1}{2} \sum_{n=1}^{+\infty} \left(a_n(f)^2 + b_n(f)^2\right)$$

#### Théorème de Jordan-Dirichlet (Convergence uniforme)
Si $f$ est $2\pi$-périodique, **continue** sur $\mathbb{R}$ et de classe $\mathcal{C}^1$ par morceaux, alors sa série de Fourier converge **uniformément** vers $f$ sur $\mathbb{R}$.

---

## III. Méthodes et Savoir-Faire

1. **Calculer la somme d'une série numérique via les séries entières :**
   * *Méthode :* Reconnaître une série entière évaluée en un point $x_0 \in ]-R, R[$. Exprimer la somme sous forme close en combinant des fonctions usuelles (intégration, dérivation, produit de Cauchy).
2. **Résolution d'équations différentielles par les séries entières :**
   * *Méthode :* Suppumer l'existence d'une solution $y(x) = \sum a_n x^n$ de rayon $R > 0$. Injecter dans l'équation, identifier les coefficients par unicité du DSE pour obtenir une relation de récurrence sur $(a_n)$. Calculer le rayon de convergence de la série obtenue.
3. **Calculer des sommes de séries numériques par Parseval :**
   * *Méthode :* Choisir judicieusement une fonction $f$ simple dont on sait calculer les coefficients de Fourier $a_n$ et $b_n$, puis appliquer le théorème de Parseval à l'intégrale $\int_{-\pi}^\pi |f(t)|^2 dt$.

---

## IV. Pièges à Éviter (Alerte Rouge CPGE)

* **Intervertir limite et somme/intégrale sans justification :** Toujours vérifier les hypothèses (convergence normale pour les séries entières, domination pour les intégrales).
* **Confondre convergence simple et convergence uniforme/normale :** Ce n'est pas parce qu'une série de Fourier converge (Dirichlet) que sa somme est égale à la fonction en norme infinie partout (phénomène de Gibbs aux points de discontinuité).
* **Oublier le domaine de validité :** Un DSE n'est valable *que* pour $|x| < R$. Sur la frontière ($|x| = R$), il faut étudier la série au cas par cas (Abel, Dirichlet, etc.).
* **Erreur de calcul sur $a_0$ :** Ne pas oublier le facteur $1/2$ dans $\frac{a_0}{2}$ dans la série de Fourier ou dans la formule de Parseval.