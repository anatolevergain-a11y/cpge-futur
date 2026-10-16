---
title: 'Exercice 2 : Espaces euclidiens et Fourier'
description: 'Problème d entraînement type concours.'
---

# CONCOURS CPGE - FILIÈRE PSI
## Mathématiques : Espaces euclidiens et Séries de Fourier

*En tant qu'examinateur, ce problème a pour objectif de tester la maîtrise conjointe de la théorie des espaces préhilbertiens réels, de l'approximation par projection orthogonale (théorème de la meilleure approximation) et des outils d'analyse de Fourier.*

---

## Préambule et notations

On note $E = \mathcal{C}^0([-\pi, \pi], \mathbb{R})$ l'espace vectoriel des fonctions continues de $[-\pi, \pi]$ dans $\mathbb{R}$. 
On muni $E$ du produit scalaire défini pour tout $(f, g) \in E^2$ par :
$$\langle f, g \rangle = \frac{1}{\pi} \int_{-\pi}^{\pi} f(t)g(t) \, dt$$
On note $\|f\|_2 = \sqrt{\langle f, f \rangle}$ la norme euclidienne associée.

Pour $n \in \mathbb{N}$, on définit le sous-espace vectoriel des polynômes trigonométriques :
$$F_n = \text{Vect}\left( e_0, (e_k)_{1 \le k \le n}, (\tilde{e}_k)_{1 \le k \le n} \right)$$
où, pour tout $t \in [-\pi, \pi]$ :
* $e_0(t) = \frac{1}{\sqrt{2}}$
* $e_k(t) = \cos(kt)$
* $\tilde{e}_k(t) = \sin(kt)$

---

## Partie I : Structure euclidienne et orthogonalité

**Question 1.** Montrer que $\langle \cdot, \cdot \rangle$ définit bien un produit scalaire sur $E$.

*Indication de l'examinateur : On veillera à bien vérifier les quatre propriétés caractéristiques, en insistant particulièrement sur la définite-positivité dans le cadre des fonctions continues.*
Correction: **
Soit $(f, g, h) \in E^3$ et $\lambda \in \mathbb{R}$.
1. **Symétrie :** Par commutativité du produit dans $\mathbb{R}$ :
   $$\langle g, f \rangle = \frac{1}{\pi} \int_{-\pi}^{\pi} g(t)f(t) \, dt = \frac{1}{\pi} \int_{-\pi}^{\pi} f(t)g(t) \, dt = \langle f, g \rangle$$
2. **Bilinéarité :** Par linéarité de l'intégrale :
   $$\langle \lambda f + h, g \rangle = \frac{1}{\pi} \int_{-\pi}^{\pi} (\lambda f(t) + h(t))g(t) \, dt = \lambda \langle f, g \rangle + \langle h, g \rangle$$
   La symétrie assure la linéarité par rapport à la seconde variable.
3. **Positivité :** Pour tout $f \in E$, $f^2$ est positive sur $[-\pi, \pi]$, donc son intégrale l'est également :
   $$\langle f, f \rangle = \frac{1}{\pi} \int_{-\pi}^{\pi} (f(t))^2 \, dt \ge 0$$
4. **Caractère défini :** Soit $f \in E$ telle que $\langle f, f \rangle = 0$. Alors :
   $$\int_{-\pi}^{\pi} (f(t))^2 \, dt = 0$$
   L'application $t \mapsto (f(t))^2$ est continue et positive sur $[-\pi, \pi]$. Son intégrale étant nulle, cette fonction est **identiquement nulle** sur $[-\pi, \pi]$. 
   Par conséquent, pour tout $t \in [-\pi, \pi]$, $f(t) = 0$, soit $f = 0_{\mathcal{C}^0}$.

$\langle \cdot, \cdot \rangle$ est donc un produit scalaire sur $E$. $\quad\blacksquare$

---

**Question 2.** Établir que la famille $\mathcal{B}_n = \left( e_0, e_1, \dots, e_n, \tilde{e}_1, \dots, \tilde{e}_n \text{ } \right)$ forme une **famille orthonormée** (FON) de l'espace euclidien $(E, \langle \cdot, \cdot \rangle)$.

*Indication de l'examinateur : Calculer explicitement les différents types de produits scalaires en utilisant les formules trigonométriques usuelles.*
Correction: **
Il s'agit de calculer les produits scalaires entre les éléments distincts de $\mathcal{B}_n$ et de vérifier qu'ils valent $0$, et de calculer la norme au carré de chaque vecteur (qui doit valoir $1$).
Rappelons les intégrales fondamentales pour $p, q \in \mathbb{N}^*$ :
* $\|e_0\|_2^2 = \frac{1}{\pi} \int_{-\pi}^{\pi} \left(\frac{1}{\sqrt{2}}\right)^2 dt = \frac{1}{2\pi} [t]_{-\pi}^{\pi} = 1$.
* Pour $k \ge 1$ :
  $$\|e_k\|_2^2 = \frac{1}{\pi} \int_{-\pi}^{\pi} \cos^2(kt) \, dt = \frac{1}{2\pi} \int_{-\pi}^{\pi} (1 + \cos(2kt)) \, dt = \frac{1}{2\pi} \left[ t + \frac{\sin(2kt)}{2k} \right]_{-\pi}^{\pi} = 1$$
  De même, $\|\tilde{e}_k\|_2^2 = \frac{1}{\pi} \int_{-\pi}^{\pi} \sin^2(kt) \, dt = 1$.

Pour l'orthogonalité ($k \neq l$) :
* $\langle e_k, e_l \rangle = \frac{1}{\pi} \int_{-\pi}^{\pi} \cos(kt)\cos(lt) \, dt = \frac{1}{2\pi} \int_{-\pi}^{\pi} [\cos((k-l)t) + \cos((k+l)t)] \, dt = 0$ (car $k \neq l$).
* $\langle \tilde{e}_k, \tilde{e}_l \rangle = 0$ par un calcul analogue.
* $\langle e_k, \tilde{e}_l \rangle = \frac{1}{\pi} \int_{-\pi}^{\pi} \cos(kt)\sin(lt) \, dt = 0$ par impaticité de la fonction $t \mapsto \cos(kt)\sin(lt)$ sur le segment symétrique $[-\pi, \pi]$.

La famille $\mathcal{B}_n$ est donc orthonormée. $\quad\blacksquare$

---

## Partie II : Projection orthogonale et minimisation

On considère la fonction $f$ définie sur $[-\pi, \pi]$ par $f(t) = t$. On cherche à approcher $f$ par des polynômes trigonométriques.

**Question 3.** Calculer les coefficients de Fourier de $f$ associés à la base $\mathcal{B}_n$, c'est-à-dire :
* $a_0 = \langle f, e_0 \rangle$
* $a_k = \langle f, e_k \rangle$ pour $k \ge 1$
* $b_k = \langle f, \tilde{e}_k \rangle$ pour $k \ge 1$
Correction: **
* Pour $a_0$ :
  $$a_0 = \frac{1}{\pi} \int_{-\pi}^{\pi} \frac{t}{\sqrt{2}} \, dt = 0 \quad \text{(fonction impaire sur un intervalle symétrique)}$$
* Pour $a_k$ ($k \ge 1$) :
  $$a_k = \frac{1}{\pi} \int_{-\pi}^{\pi} t \cos(kt) \, dt = 0 \quad \text{(intégrande impair)}$$
* Pour $b_k$ ($k \ge 1$) : par une integration par parties (IPP) rigoureuse, en posant $u(t) = t$ ($u'(t)=1$) et $v'(t) = \sin(kt)$ ($v(t) = -\frac{\cos(kt)}{k}$) :
  $$b_k = \frac{1}{\pi} \left( \left[ -t \frac{\cos(kt)}{k} \right]_{-\pi}^{\pi} + \int_{-\pi}^{\pi} \frac{\cos(kt)}{k} \, dt \right)$$
  $$b_k = \frac{1}{\pi} \left( -\pi \frac{\cos(k\pi)}{k} - (-\pi)\frac{\cos(-k\pi)}{k} + 0 \right) = \frac{1}{\pi} \left( -2\pi \frac{(-1)^k}{k} \right) = \frac{2(-1)^{k+1}}{k}$$

---

**Question 4.** Soit $P_n$ la projection orthogonale de $f$ sur $F_n$. Donner l'expression explicite de $P_n(t)$ en fonction de $n$ et de $t$.
Correction: **
Puisque $\mathcal{B}_n$ est une base orthonormée de $F_n$, la projection orthogonale s'exprime par :
$$P_n = \langle f, e_0 \rangle e_0 + \sum_{k=1}^n \left( \langle f, e_k \rangle e_k + \langle f, \tilde{e}_k \rangle \tilde{e}_k \right)$$
En injectant les coefficients calculés précédemment :
$$P_n(t) = 0 \cdot \frac{1}{\sqrt{2}} + \sum_{k=1}^n \left( 0 \cdot \cos(kt) + \frac{2(-1)^{k+1}}{k} \sin(kt) \right)$$
Soit :
$$P_n(t) = 2 \sum_{k=1}^n \frac{(-1)^{k+1}}{k} \sin(kt)$$
$\quad\blacksquare$

---

**Question 5.** Énoncer le théorème du cours caractérisant $P_n$ comme solution d'un problème de distance, puis calculer la distance minimale $\inf_{g \in F_n} \|f - g\|_2$.
Correction: **
* **Théorème de la projection orthogonale / de la meilleure approximation :** 
  Soit $F_n$ un sous-espace vectoriel de dimension finie d'un espace préhilbertien $E$. Pour tout $f \in E$, la projection orthogonale $P_n(f)$ est l'unique élément de $F_n$ réalisant la distance minimale à $f$, c'est-à-dire :
  $$\forall g \in F_n, \quad \|f - P_n(f)\|_2 \le \|f - g\|_2$$
  avec égalité si et seulement si $g = P_n(f)$.

* **Calcul de la distance minimale :**
  D'après le théorème de Pythagore appliqué dans l'espace orthogonal (car $f - P_n(f) \perp F_n$ et $P_n - g \in F_n$) :
  $$\|f - g\|_2^2 = \|(f - P_n) + (P_n - g)\|_2^2 = \|f - P_n\|_2^2 + \|P_n - g\|_2^2$$
  Le minimum est donc atteint pour $g = P_n$ et vaut $\|f - P_n\|_2$.
  
  Utilisons l'égalité de Parseval (ou le théorème de Pythagore généralisé sur la base $\mathcal{B}_n$) :
  $$\|f - P_n\|_2^2 = \|f\|_2^2 - \|P_n\|_2^2$$
  Calculons d'abord $\|f\|_2^2$ :
  $$\|f\|_2^2 = \frac{1}{\pi} \int_{-\pi}^{\pi} t^2 \, dt = \frac{1}{\pi} \left[ \frac{t^3}{3} \right]_{-\pi}^{\pi} = \frac{2\pi^2}{3}$$
  Calculons $\|P_n\|_2^2$ grâce à l'orthonormalité de $\mathcal{B}_n$ :
  $$\|P_n\|_2^2 = \sum_{k=1}^n b_k^2 \|\tilde{e}_k\|_2^2 = \sum_{k=1}^n \left(\frac{2(-1)^{k+1}}{k}\right)^2 (1) = 4 \sum_{k=1}^n \frac{1}{k^2}$$
  Finalement, la distance recherchée est :
  $$d(f, F_n) = \sqrt{\frac{2\pi^2}{3} - 4 \sum_{k=1}^n \frac{1}{k^2}} \quad\blacksquare$$

---

## Partie III : Analyse critique et Ouverture

**Question 6 (Regard d'examinateur).** 
1. Que se passe-t-il lorsque $n \to +\infty$ concernant la distance $d(f, F_n)$ ? Justifier en lien avec le théorème de Parseval.
2. Déduire de cette limite la célèbre somme de la série $\sum_{k=1}^{+\infty} \frac{1}{k^2}$.
Correction: **
1. La fonction $t \mapsto t$ est continue par morceaux (ici continue tout court) et $2\pi$-périodique (au sens de sa prolongation ou sur son domaine via la théorie de Fourier $L^2$). Par le théorème de Parseval :
   $$\sum_{k=0}^{+\infty} a_0^2 + \sum_{k=1}^{+\infty} (a_k^2 + b_k^2) = \|f\|_2^2$$
   Ce qui signifie que la norme de $f$ est la somme des carrés de ses coefficients de Fourier. Par conséquent, $\lim_{n \to +\infty} \|f - P_n\|_2^2 = 0$. 
   La distance tend vers $0$, ce qui traduit la convergence en moyenne quadratique de la série de Fourier de $f$ vers $f$.
2. En passant à la limite $n \to +\infty$ dans l'expression de la norme trouvée à la question 5 :
   $$\lim_{n \to +\infty} \left( \frac{2\pi^2}{3} - 4 \sum_{k=1}^n \frac{1}{k^2} \right) = 0$$
   On en déduit immédiatement :
   $$\sum_{k=1}^{+\infty} \frac{1}{k^2} = \frac{2\pi^2}{3 \times 4} = \frac{\pi^2}{6}$$
   
*Commentaire de l'examinateur :* C'est un grand classique des concours PSI. Le pont jeté entre l'algèbre linéaire (projection orthogonale, distance dans un espace euclidien) et l'analyse (séries de Fourier, sommation de séries numériques) est typique des écrits de mathématiques. Une rigueur absolue est attendue sur la manipulation des symboles de sommation et les conditions d'application des théorèmes.