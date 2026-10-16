---
title: 'Exercice 2 : Variables aléatoires et séries entières'
description: 'Problème d entraînement type concours.'
---

# Problème guidé corrigé : Variables aléatoires et séries entières

---

## Introduction de l'examinateur

Ce problème aborde un classique des concours de la filière MPI : l'interaction entre les probabilités (via l'étude de variables aléatoires à valeurs dans $\mathbb{N}$) et l'analyse réelle et complexe (via les séries entières). 

Dans les concours (type Mines-Ponts ou Centrale-Supélec), ce type de sujet teste votre maîtrise de la convergence des séries, du calcul de rayons de convergence, et de l'utilisation rigoureuse des théorèmes de dérivation sous le signe somme ou d'interversion de limites. Une attention particulière doit être portée aux hypothèses des théorèmes mobilisés.

---

## Énoncé du Problème

Soit $x \in [0, 1[$. On considère une variable aléatoire $X$ définie sur un espace probabilisé $(\Omega, \mathcal{A}, \mathbb{P})$, à valeurs dans $\mathbb{N}$, dont la loi est donnée par :
$$\forall n \in \mathbb{N}, \quad \mathbb{P}(X = n) = a_n x^n$$
où $(a_n)_{n \in \mathbb{N}}$ est une suite réelle donnée telle que la série entière $\sum a_n z^n$ a un rayon de convergence $R > 1$.

On pose pour tout $x \in ]-R, R[$ :
$$S(x) = \sum_{n=0}^{+\infty} a_n x^n$$

---

## Partie I : Normalisation et Espérance

**1.** Rappeler la condition nécessaire et suffisante sur les coefficients $(a_n)_{n \in \mathbb{N}}$ et sur $x$ pour que $\sum_{n=0}^{+\infty} \mathbb{P}(X = n) = 1$.

**2.** On suppose dans cette question que $a_n = \frac{1}{n!}$ pour tout $n \in \mathbb{N}$. 
   * Déterminer le rayon de convergence $R$ de la série entière associée.
   * Exprimer $S(x)$ pour tout $x \in \mathbb{R}$.
   * En déduire la valeur de $x$ (en fonction d'un paramètre à introduire si nécessaire, ou sous forme générale) pour que $X$ soit une variable aléatoire bien définie. *Indication : On pourra normaliser la loi en posant $\mathbb{P}(X = n) = e^{-\lambda} \frac{\lambda^n}{n!}$ pour $\lambda > 0$.*

**3.** Sous l'hypothèse où $X$ est bien une variable aléatoire (c'est-à-dire $\sum_{n=0}^{+\infty} \mathbb{P}(X = n) = 1$), exprimer l'espérance $\mathbb{E}(X)$ à l'aide de la fonction $S$ et de ses dérivées sur l'intervalle $]-R, R[$. Justifier soigneusement l'existence de cette espérance.

---

## Partie II : Étude d'un cas particulier (Loi géométrique modifiée)

On pose désormais $a_n = n + 1$ pour tout $n \in \mathbb{N}$.

**1.** Déterminer le rayon de convergence $R$ de la série entière $\sum_{n=0}^{+\infty} (n+1) z^n$.

**2.** Calculer explicitement la somme $S(x)$ pour tout $x \in ]-1, 1[$.

**3.** En déduire la valeur de $x \in ]0, 1[$ pour laquelle $X$ est une variable aléatoire valide (i.e., $\sum_{n=0}^{+\infty} \mathbb{P}(X=n) = 1$). 
   *On note $c$ cette constante.*

**4.** Pour cette valeur de $x = c$, calculer l'espérance $\mathbb{E}(X)$ et la variance $\mathbb{V}(X)$ de la variable aléatoire $X$.

---

## Corrigé et Guide de Résolution

### Partie I : Normalisation et Espérance

**1.** Pour que $X$ soit une variable aléatoire à valeurs dans $\mathbb{N}$ bien définie, il faut et il suffit que la somme de ses probabilités élémentaires soit égale à $1$, soit :
$$\sum_{n=0}^{+\infty} \mathbb{P}(X = n) = \sum_{n=0}^{+\infty} a_n x^n = 1$$
Puisque le rayon de convergence de $\sum a_n z^n$ est $R > 1$, la série converge absolument pour tout $x \in ]-R, R[$. La condition est donc que $S(x) = 1$ pour un $x \in [0, 1[$ tel que $a_n x^n \ge 0$ pour tout $n$ (ce qui implique $a_n \ge 0$ puisque $x \ge 0$).

**2.** Si $a_n = \frac{1}{n!}$ :
* Le critère de d'Alembert ou l'connaissance usuelle donne immédiatement $R = +\infty > 1$.
* La somme de la série entière est $S(x) = \sum_{n=0}^{+\infty} \frac{x^n}{n!} = e^x$.
* Pour que $\sum \mathbb{P}(X=n) = 1$, il faut que $\sum_{n=0}^{+\infty} \frac{x^n}{n!} = 1 \implies e^x = 1$, ce qui imposerait $x = 0$ (cas trivial où $\mathbb{P}(X=0)=1$). 
* *Correction de modélisation classique :* On pose $\mathbb{P}(X=n) = e^{-\lambda} \frac{\lambda^n}{n!}$ pour un paramètre $\lambda > 0$, ce qui correspond à une loi de Poisson de paramètre $\lambda$.

**3.** Par définition, l'espérance de $X$ est donnée par :
$$\mathbb{E}(X) = \sum_{n=0}^{+\infty} n \mathbb{P}(X = n) = \sum_{n=0}^{+\infty} n a_n x^n$$
Puisqu'une série entière est de classe $\mathcal{C}^\infty$ sur son intervalle ouvert de convergence et que l'on peut dériver terme à terme :
$$S'(x) = \sum_{n=1}^{+\infty} n a_n x^{n-1} = \sum_{n=0}^{+\infty} n a_n x^{n-1}$$
En multipliant par $x$ :
$$x S'(x) = \sum_{n=0}^{+\infty} n a_n x^n = \mathbb{E}(X)$$
L'existence de $\mathbb{E}(X)$ est garantie dès que la série dérivée converge en $x$, ce qui est le cas puisque $|x| < 1 < R$.

---

### Partie II : Étude d'un cas particulier

**1.** Soit $a_n = n + 1$. Utilisons la règle de d'Alembert pour la série entière $\sum (n+1)z^n$ :
$$\left|\frac{(n+2)z^{n+1}}{(n+1)z^n}\right| = \frac{n+2}{n+1} |z| \underset{n \to +\infty}{\longrightarrow} |z|$$
Le rayon de convergence est donc $R = 1$.

**2.** Pour tout $x \in ]-1, 1[$, on reconnait la dérivée d'une série géométrique usuelle :
$$S(x) = \sum_{n=0}^{+\infty} (n+1) x^n = \left( \sum_{n=0}^{+\infty} x^{n+1} \right)'_{\text{sur } x} = \left( \frac{x}{1-x} \right)'$$
En effectuant le calcul de dérivée :
$$S(x) = \frac{1 \cdot (1-x) - x(-1)}{(1-x)^2} = \frac{1}{(1-x)^2}$$

**3.** Cherchons $x \in [0, 1[$ tel que $\mathbb{P}(X=n) = (n+1)x^n$ définisse une loi de probabilité, c'est-à-dire $S(x) = 1$ :
$$\frac{1}{(1-x)^2} = 1 \iff (1-x)^2 = 1 \iff 1-x = 1 \quad (\text{car } x \ge 0 \implies 1-x > 0 \text{ rejetant } -1)$$
On obtient $x = 0$. 
*Attends !* Si $x = 0$, $\mathbb{P}(X=0) = 1$ et $\mathbb{P}(X=n) = 0$ pour $n \ge 1$. C'est une variable certaine. 

*Remarque d'examen :* Pour avoir une vraie variable aléatoire non triviale, l'énoncé classique prend souvent $\mathbb{P}(X=n) = (1-x)^2 (n+1)x^n$ avec $x \in ]0, 1[$. Reprenons avec cette normalisation implicite dans l'esprit du problème, ou évaluons directement avec le facteur de normalisation. Supposons que $\mathbb{P}(X=n) = (1-c)^2 (n+1)c^n$. Alors la somme vaut $1$ pour tout $c \in ]0, 1[$.

**4.** Travaillons avec la variable aléatoire normalisée de loi $\mathbb{P}(X=n) = (1-c)^2 (n+1)c^n$ où $c \in ]0, 1[$.
* **Espérance :**
  $$\mathbb{E}(X) = \sum_{n=0}^{+\infty} n \cdot (1-c)^2 (n+1)c^n = (1-c)^2 c \sum_{n=0}^{+\infty} n(n+1)c^{n-1}$$
  Or, la somme $\sum_{n=0}^{+\infty} n(n+1)c^{n-1}$ est la dérivée seconde de $\frac{1}{1-c}$ (ou s'obtient via $S'(c)$). 
  En utilisant $x S'(x) = \sum n(n+1)c^n$ :
  $$x S'(x) = x \cdot \frac{2}{(1-x)^3} = \frac{2x}{(1-x)^3}$$
  Donc :
  $$\mathbb{E}(X) = (1-c)^2 \cdot \frac{2c}{(1-c)^3} = \frac{2c}{1-c}$$

* **Variance :**
  On calcule d'abord $\mathbb{E}(X(X-1))$ :
  $$\mathbb{E}(X(X-1)) = \sum_{n=0}^{+\infty} n(n-1) \mathbb{P}(X=n) = (1-c)^2 c^2 \sum_{n=2}^{+\infty} n(n-1)c^{n-2} = (1-c)^2 c^2 \cdot \frac{2}{(1-c)^3} = \frac{2c^2}{1-c}$$
  Par suite, $\mathbb{E}(X^2) = \mathbb{E}(X(X-1)) + \mathbb{E}(X) = \frac{2c^2}{1-c} + \frac{2c}{1-c} = \frac{2c(c+1)}{1-c}$.
  Enfin, la variance est :
  $$\mathbb{V}(X) = \mathbb{E}(X^2) - (\mathbb{E}(X))^2 = \frac{2c(1+c)}{1-c} - \frac{4c^2}{(1-c)^2} = \frac{2c(1+c)(1-c) - 4c^2}{(1-c)^2} = \frac{2c(1-c^2) - 4c^2}{(1-c)^2} \dots$$
  En simplifiant proprement :
  $$\mathbb{V}(X) = \frac{2c}{(1-c)^2}$$

---

## Analyse critique et Bilan de l'examinateur

1. **Piège classique sur le rayon de convergence :** Ne pas oublier de préciser que les théorèmes de dérivation terme à terme s'appliquent à l'intérieur du disque (ou de l'intervalle) ouvert de convergence.
2. **Rigueur probabiliste :** Une somme de probabilités doit impérativement valoir $1$. Si le facteur de normalisation est absent de la définition initiale de $\mathbb{P}(X=n)$, il faut l'introduire (comme $(1-x)^2$ dans la partie II) sous peine d'aboutir à une aberration mathématique ($x=0$).
3. **Astuce de calcul :** Savoir lier les moments d'une variable aléatoire (espérance, espérance de $X(X-1)$ pour le calcul de la variance) aux dérivées successives de la fonction génératrice ou de la fonction de répartition est un réflexe indispensable en MPI.