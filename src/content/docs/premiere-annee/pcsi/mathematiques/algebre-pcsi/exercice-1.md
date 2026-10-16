---
title: 'Exercice 1 : Espaces vectoriels'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ : STRUCTURES D'ESPACES VECTORIELS ET SOMMES DE SOUS-ESPACES

**Examinateur (CPGE PCSI) :** Ce problème aborde des notions fondamentales d'algèbre linéaire souvent piégeuses aux concours : la manipulation rigoureuse de la définition d'un sous-espace vectoriel, l'étude de la somme (directe ou non) de sous-espaces, et le raisonnement par analyse-synthèse appliqué aux endomorphismes ou aux décomposition de fonctions. 

---

## Partie I : Étude d'un ensemble de fonctions

On considère l'espace vectoriel $E = \mathbb{R}^{\mathbb{R}}$ des fonctions de $\mathbb{R}$ dans $\mathbb{R}$. Soit $F$ l'ensemble des fonctions $f \in E$ telles que :
$$ \forall (x, y) \in \mathbb{R}^2, \quad f(x+y) = f(x) + f(y) $$
*(Il s'agit des équations fonctionnelles de Cauchy).*

### Question 1
Montrer que $F$ est un sous-espace vectoriel de $E$.

**Correction guidée :**
Pour montrer qu'un sous-ensemble $F$ d'un $\mathbb{R}$-espace vectoriel $E$ est un sous-espace vectoriel, on utilise le caractérisateur en trois étapes :
1. **Non-vacuité :** La fonction nulle $\theta_E : x \mapsto 0$ appartient-elle à $F$ ?
2. **Stabilité par addition :** Si $f$ et $g$ sont dans $F$, a-t-on $f + g \in F$ ?
3. **Stabilité par multiplication externe :** Si $f$ est dans $F$ et $\lambda \in \mathbb{R}$, a-t-on $\lambda f \in F$ ?

*Rédaction :*
* **Étape 1 :** Soit $\theta$ la fonction nulle définie par $\theta(x) = 0$ pour tout $x \in \mathbb{R}$. Pour tous $x, y \in \mathbb{R}$, on a $\theta(x+y) = 0$ et $\theta(x) + \theta(y) = 0 + 0 = 0$. Donc $\theta(x+y) = \theta(x) + \theta(y)$, ce qui prouve que $\theta \in F$. $F$ est non vide.
* **Étape 2 :** Soient $(f, g) \in F^2$ et soient $x, y \in \mathbb{R}$. Calculons $(f+g)(x+y)$ :
  $$(f+g)(x+y) = f(x+y) + g(x+y)$$
  Puisque $f \in F$ et $g \in F$, on a $f(x+y) = f(x) + f(y)$ et $g(x+y) = g(x) + g(y)$. Ainsi :
  $$(f+g)(x+y) = f(x) + f(y) + g(x) + g(y) = (f(x) + g(x)) + (f(y) + g(y)) = (f+g)(x) + (f+g)(y)$$
  Donc $f+g \in F$.
* **Étape 3 :** Soient $f \in F$, $\lambda \in \mathbb{R}$ et $x, y \in \mathbb{R}$. Calculons $(\lambda f)(x+y)$ :
  $$(\lambda f)(x+y) = \lambda f(x+y) = \lambda (f(x) + f(y)) = \lambda f(x) + \lambda f(y) = (\lambda f)(x) + (\lambda f)(y)$$
  Donc $\lambda f \in F$.

Conclusion : $F$ est bien un sous-espace vectoriel de $E$.

---

### Question 2
Soit $G$ l'ensemble des fonctions constantes sur $\mathbb{R}$. $G$ est-il un sous-espace vectoriel de $E$ ? Est-il en somme directe avec $F$ ?

**Correction guidée :**
* *Première partie :* Testons $G$. La fonction nulle est constante (égale à $0$). Si $f$ et $g$ sont constantes (égales à $a$ et $b$), leur somme $f+g$ est constante (égale à $a+b$). Le produit $\lambda f$ est constant ($\lambda a$). $G$ est donc un sous-espace vectoriel.
* *Seconde partie :* Pour étudier $F \cap G$, soit $h \in F \cap G$. 
  * Comme $h \in G$, $h$ est constante : il existe $c \in \mathbb{R}$ tel que $\forall x \in \mathbb{R}, h(x) = c$.
  * Comme $h \in F$, on a $h(x+y) = h(x) + h(y)$ pour tous $x, y$. En particulier, pour $x=0, y=0$, $h(0) = h(0) + h(0) \implies c = 2c \implies c = 0$.
  * Donc la seule fonction commune est la fonction nulle : $F \cap G = \{\theta\}$.
  * Qu'en est-il de la somme $F + G$ ? Toute fonction $f \in F$ vérifie $f(0) = 0$. Si $h \in F + G$, alors $h = f + g$ où $f \in F$ et $g \in G$. Donc $h(0) = f(0) + g(0) = 0 + c = c$ (où $c$ est la valeur de la constante $g$). Cela signifie que toute fonction de $F+G$ prend en $0$ la valeur de la composante constante. Or, toute fonction de $E$ ne s'annule pas nécessairement en $0$ (par exemple, $x \mapsto x+1$ ne peut s'écrire sous cette forme). Ainsi, $F \oplus G \neq E$, mais la somme $F+G$ est directe ($F \cap G = \{\theta\}$).

---

## Partie II : Somme de sous-espaces de $\mathcal{M}_n(\mathbb{R})$

On se place dans l'espace vectoriel $E = \mathcal{M}_n(\mathbb{R})$ des matrices carrées de taille $n \ge 2$ à coefficients réels.
On définit :
* $S_n(\mathbb{R}) = \{ M \in \mathcal{M}_n(\mathbb{R}) \mid M^T = M \}$ l'ensemble des matrices symétriques.
* $A_n(\mathbb{R}) = \{ M \in \mathcal{M}_n(\mathbb{R}) \mid M^T = -M \}$ l'ensemble des matrices antisymétriques.

### Question 3
Montrer que $S_n(\mathbb{R})$ et $A_n(\mathbb{R})$ sont des sous-espaces vectoriels de $\mathcal{M}_n(\mathbb{R})$ et que $\mathcal{M}_n(\mathbb{R}) = S_n(\mathbb{R}) \oplus A_n(\mathbb{R})$.

**Correction guidée :**
La structure de sous-espace vectoriel se démontre de manière analogue à la Partie I (en utilisant la linéarité de l'opération de transposition : $(M+N)^T = M^T + N^T$ et $(\lambda M)^T = \lambda M^T$). Admettons cette partie pour nous concentrer sur la somme directe.

Pour montrer que $\mathcal{M}_n(\mathbb{R}) = S_n(\mathbb{R}) \oplus A_n(\mathbb{R})$, on utilise la méthode classique d'**analyse-synthèse**.

* **Analyse :**
  Soit $M \in \mathcal{M}_n(\mathbb{R})$. Supposons qu'il existe $S \in S_n(\mathbb{R})$ et $A \in A_n(\mathbb{R})$ tels que :
  $$ M = S + A $$
  En transposant cette égalité, comme $S^T = S$ et $A^T = -A$, on obtient :
  $$ M^T = S^T + A^T = S - A $$
  On a ainsi un système de deux matrices :
  $$\begin{cases} S + A = M \\ S - A = M^T \end{cases}$$
  En additionnant les deux lignes : $2S = M + M^T \implies S = \frac{1}{2}(M + M^T)$.
  En soustrayant les deux lignes : $2A = M - M^T \implies A = \frac{1}{2}(M - M^T)$.
  *Ceci prouve l'unicité* de la décomposition.

* **Synthèse :**
  Montrons que les matrices $S$ et $A$ ainsi construites conviennent effectivement :
  * Posons $S = \frac{1}{2}(M + M^T)$ et $A = \frac{1}{2}(M - M^T)$.
  * On a clairement $S + A = \frac{1}{2}M + \frac{1}{2}M^T + \frac{1}{2}M - \frac{1}{2}M^T = M$.
  * Vérifions que $S \in S_n(\mathbb{R})$ : $S^T = \left(\frac{1}{2}(M + M^T)\right)^T = \frac{1}{2}(M^T + (M^T)^T) = \frac{1}{2}(M^T + M) = S$. Donc $S \in S_n(\mathbb{R})$.
  * Vérifions que $A \in A_n(\mathbb{R})$ : $A^T = \left(\frac{1}{2}(M - M^T)\right)^T = \frac{1}{2}(M^T - (M^T)^T) = \frac{1}{2}(M^T - M) = -\frac{1}{2}(M - M^T) = -A$. Donc $A \in A_n(\mathbb{R})$.

* **Conclusion :** 
  Tout élément $M$ se décompose de manière unique comme la somme d'une matrice symétrique et d'une matrice antisymétrique. Par conséquent :
  $$ \mathcal{M}_n(\mathbb{R}) = S_n(\mathbb{R}) \oplus A_n(\mathbb{R}) $$

---

## Analyse critique des résultats et conseils de l'examinateur

1. **Piège classique sur les sev :** Oublier de vérifier la non-vacuité en testant le vecteur nul. C'est éliminatoire aux concours. Le vecteur nul de $E = \mathcal{M}_n(\mathbb{R})$ est la matrice nulle $0_n$, pas l'identité $I_n$.
2. **Méthode d'Analyse-Synthèse :** C'est l'arme absolue pour démontrer qu'un espace est une somme directe de deux sous-espaces. L'analyse démontre l'unicité (et donne la forme forcée des éléments), la synthèse démontre l'existence.
3. **Dimension :** Une fois la somme directe établie, on peut utiliser le théorème des dimensions pour calculer $\dim(A_n(\mathbb{R}))$ connaissant $\dim(S_n(\mathbb{R}))$ (ou inversement), ce qui constitue une application très fréquente à l'écrit comme à l'oral.