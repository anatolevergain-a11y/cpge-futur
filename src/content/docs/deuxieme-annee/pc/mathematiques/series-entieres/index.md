---
title: 'Cours : Séries entières'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Cours de Mathématiques : Séries Entières
**Filière :** MP/PC (Option PC) — **Niveau :** Deuxième année  
Professeur: ** CPGE - PC  

---

## 1. Introduction et Convergence des Séries Entières

### 1.1 Définitions fondamentales
Une **série entière** est une série de fonctions de la variable réelle (ou complexe) $z$, de la forme :
$$\sum_{n \ge 0} a_n z^n$$
où $(a_n)_{n \in \mathbb{N}}$ est une suite de nombres réels ou complexes (les coefficients de la série).

### 1.2 Le Théorème fondamental (Abel)
> **Théorème (Abel) :** 
> Si la suite $(a_n z_0^n)_n$ est bornée pour un certain $z_0 \in \mathbb{K} \setminus \{0\}$, alors pour tout $z \in \mathbb{K}$ tel que $|z| < |z_0|$, la série entière $\sum a_n z^n$ **converge absolument**.

*Démonstration (Esquisse) :* 
Il existe $M > 0$ tel que pour tout $n$, $|a_n z_0^n| \le M$. 
Pour $|z| < |z_0|$, on écrit :
$$|a_n z^n| = |a_n z_0^n| \left| \frac{z}{z_0} \right|^n \le M \left( \frac{|z|}{|z_0|} \right)^n$$
Comme $\frac{|z|}{|z_0|} < 1$, le majorant est le terme général d'une série géométrique convergente. Par comparaison, la série $\sum |a_n z^n|$ converge. $\blacksquare$

### 1.3 Rayon de convergence
> **Définition-Théorème :** 
> Il existe un unique réel $R \in [0, +\infty]$, appelé **rayon de convergence** de la série entière, tel que :
> 1. Si $|z| < R$, la série $\sum a_n z^n$ converge absolument.
> 2. Si $|z| > R$, la série diverge grossièrement (le terme général ne tend pas vers 0).
> 3. Si $R = 0$, la série ne converge que pour $z = 0$.
> 4. Si $R = +\infty$, la série converge absolument pour tout $z \in \mathbb{K}$.

L'intervalle (ou le disque) de convergence est $[-R, R]$ (ouvert, fermé ou semi-ouvert selon la nature de la convergence aux bornes).

---

## 2. Propriétés de la somme d'une série entière

Soit $R > 0$ le rayon de convergence de $\sum a_n z^n$. On définit la fonction somme $S$ sur l'intervalle ouvert $]-R, R[$ (dans le cas réel) par :
$$S(x) = \sum_{n=0}^{+\infty} a_n x^n$$

### 2.1 Continuité
> **Théorème :** La fonction $S$ est **continue** sur $]-R, R[$.
Preuve: * Résulte de la convergence normale sur tout compact $[-K, K]$ avec $0 < K < R$.

### 2.2 Intégration terme à terme
> **Théorème :** La fonction $S$ est continue, donc intégrable sur tout segment $[a, b] \subset ]-R, R[$. De plus, on peut intégrer terme à terme :
> $$\int_{a}^{b} \left( \sum_{n=0}^{+\infty} a_n x^n \right) dx = \sum_{n=0}^{+\infty} a_n \int_{a}^{b} x^n dx = \sum_{n=0}^{+\infty} a_n \frac{b^{n+1} - a^{n+1}}{n+1}$$

### 2.3 Dérivation terme à terme
> **Théorème :** 
> 1. La série dérivée $\sum n a_n x^{n-1}$ a **le même rayon de convergence** $R$ que la série initiale.
> 2. La fonction $S$ est de classe $\mathcal{C}^\infty$ sur $]-R, R[$.
> 3. Sa dérivée s'obtient par dérivation terme à terme :
>    $$\forall x \in ]-R, R[, \quad S'(x) = \sum_{n=1}^{+\infty} n a_n x^{n-1}$$

---

## 3. Développements en Série Entière usuels (DSE)

À connaître absolument par cœur pour les concours :

| Fonction | DSE | Rayon de convergence $R$ | Domaine de validité |
| :---: | :---: | :---: | :---: |
| $\frac{1}{1-x}$ | $\sum_{n=0}^{+\infty} x^n$ | $1$ | $]-1, 1[$ |
| $\frac{1}{1+x}$ | $\sum_{n=0}^{+\infty} (-1)^n x^n$ | $1$ | $]-1, 1[$ |
| $\ln(1+x)$ | $\sum_{n=1}^{+\infty} \frac{(-1)^{n-1}}{n} x^n$ | $1$ | $]-1, 1]$ |
| $\arctan(x)$ | $\sum_{n=0}^{+\infty} \frac{(-1)^n}{2n+1} x^{2n+1}$ | $1$ | $[-1, 1]$ |
| $e^x$ | $\sum_{n=0}^{+\infty} \frac{x^n}{n!}$ | $+\infty$ | $\mathbb{R}$ |
| $\cos(x)$ | $\sum_{n=0}^{+\infty} \frac{(-1)^n}{(2n)!} x^{2n}$ | $+\infty$ | $\mathbb{R}$ |
| $\sin(x)$ | $\sum_{n=0}^{+\infty} \frac{(-1)^n}{(2n+1)!} x^{2n+1}$ | $+\infty$ | $\mathbb{R}$ |
| $(1+x)^\alpha$ | $\sum_{n=0}^{+\infty} \binom{\alpha}{n} x^n$ | $1$ | $]-1, 1[$ |

---

## 4. Méthodes de calculs et de recherche de DSE

### 4.1 Recherche du Rayon de Convergence
1. **Règle de d'Alembert (lorsque $a_n$ ne s'annule pas) :**
   Si $\left| \frac{a_{n+1}}{a_n} \right| \xrightarrow{n \to +\infty} L$, alors $R = \frac{1}{L}$ (avec la convention $1/0 = +\infty$ et $1/\infty = 0$).
2. **Comparaison ou minoration directe :** Utile si $a_n$ contient des factorielles ou des expressions polynomiales complexes.
3. **Lemme de abel sur les coefficients :** Si $(a_n r^n)$ est bornée, alors $R \ge |r|$.

### 4.2 Obtenir le DSE d'une fonction
* **Méthode 1 : Par manipulation algébrique (Substitution, Produit)**
  Utiliser les DSE usuels en remplaçant $x$ par une expression $q(x)$ (si $|q(x)| < R$).
* **Méthode 2 : Par équation différentielle**
  1. Supposer que $f$ admet un DSE $f(x) = \sum a_n x^n$ de rayon $R > 0$.
  2. Injecter ce DSE dans l'équation différentielle vérifiée par $f$.
  3. Décaler les indices pour obtenir une seule somme $\sum (...) x^n = 0$.
  4. Par unicités des coefficients d'une série entière, en déduire une relation de récurrence sur $(a_n)$.
  5. Résoudre la récurrence, puis déterminer $R$.
* **Méthode 3 : Par intégration/dérivation**
  Si $f'(x)$ ou $f(x)/(1+x)$ possède un DSE facile à trouver, l'intégrer ou le dériver terme à terme.

---

## 5. Pièges à éviter en colles et écrits ⚠️

1. **Confondre convergence simple et convergence normale/absolue :** 
   Sur le bord de l'intervalle de convergence ($x = R$ ou $x = -R$), la série entière **peut** converger (souvent par le critère des séries alternées ou Abel), mais il n'y a plus nécessairement convergence normale. La continuité sur le bord $[ -R, R ]$ nécessite un théorème spécifique (Abel angulaire/radial).
2. **Oublier le domaine de validité :**
   Écrire $\frac{1}{1+x^2} = \sum_{n=0}^{+\infty} (-1)^n x^{2n}$ est valable **uniquement** pour $x \in ]-1, 1[$. Ne l'utilisez pas naïvement pour des intégrales sur $\mathbb{R}$ entier sans découpage !
3. **Erreur de décalage d'indices (Indice muet) :**
   Lorsque l'on dérive une série $\sum_{n=0} a_n x^n$, la somme commence à $n=1$ car le terme constant $a_0$ disparaît : $\sum_{n=1} n a_n x^{n-1}$. Ne commencez pas bêtement à $n=0$.
4. **Calcul hâtif du rayon :**
   Si la règle de d'Alembert échoue (oscillations, coefficients nuls par intermittence), il **faut** utiliser la définition ou des majorations, et non conclure hâtivement que $R=0$ ou $R=1$.