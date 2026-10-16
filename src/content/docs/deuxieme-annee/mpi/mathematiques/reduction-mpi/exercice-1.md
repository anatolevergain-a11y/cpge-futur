---
title: 'Exercice 1 : Valeurs propres, vecteurs propres'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $n \ge 2$ un entier naturel. On considère l'espace vectoriel $E = \mathcal{M}_n(\mathbb{R})$ des matrices carrées d'ordre $n$ à coefficients réels. On note $I_n$ la matrice identité de $\mathcal{M}_n(\mathbb{R})$.
L'objectif de ce problème est d'étudier l'endomorphisme $f$ de $E$ défini par :
$$\forall M \in E, \quad f(M) = \text{tr}(M) I_n + M$$
où $\text{tr}(M)$ désigne la trace de la matrice $M$. 

Ce type d'endomorphisme intervient fréquemment dans l'étude des perturbations de matrices et en théorie des représentations du groupe linéaire. Nous allons déterminer ses valeurs propres, ses espaces propres, et examiner sa diagonalisabilité.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Préalable algébrique :** Montrer que $f$ est un endomorphisme de l'espace vectoriel $E$.
2. **Recherche de valeurs propres évidentes :** 
   - Calculer $f(I_n)$. En déduire que $1$ est valeur propre de $f$ et préciser la dimension de l'espace propre associé $\text{E}_f(1)$.
   - Soit $M \in E$ une matrice de trace nulle ($tr(M) = 0$) non nulle. Calculer $f(M)$. En déduire qu'il existe une autre valeur propre que l'on précisera.
3. **Détermination complète du spectre :**
   - Soit $\lambda \in \mathbb{R}$ une valeur propre de $f$ et $M$ un vecteur propre associé (donc $M \neq 0$). En appliquant l'opérateur trace aux deux membres de l'équation $f(M) = \lambda M$, exprimer $\text{tr}(M)$ en fonction de $\lambda$ et de $n$, en supposant $\lambda \neq 1$.
   - En déduire l'ensemble $\text{Sp}(f)$ de toutes les valeurs propres de $f$.
4. **Diagonalisabilité :**
   - Déterminer les dimensions des différents sous-espaces propres de $f$.
   - L'endomorphisme $f$ est-il diagonalisable ? Justifier rigoureusement.
5. **Analyse critique du modèle :**
   - Que devient l'étude de cet endomorphisme si l'on remplace $\mathbb{R}$ par un corps de caractéristique $p$ non nulle divisant $n$ ? Quel est l'impact sur la structure des sous-espaces propres ?

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Utilisez la linéarité de l'application trace et les propriétés élémentaires des opérations dans $\mathcal{M}_n(\mathbb{R})$.
- **Question 2 :** Pour l'espace propre $\text{E}_f(1)$, traduisait l'équation $f(M) = M$ sur la trace de $M$.
- **Question 3 :** N'oubliez pas que pour une matrice carrée $A$, $\text{tr}(\alpha A) = \alpha \text{tr}(A)$ et $\text{tr}(A+B) = \text{tr}(A) + \text{tr}(B)$. De plus, $\text{tr}(I_n) = n$.
- **Question 4 :** Calculez la somme des dimensions des sous-espaces propres ou utilisez le polynôme caractéristique (si argumenté proprement).
- **Question 5 :** Regardez ce que devient le coefficient $(n+1)$ dans $\mathbb{Z}/p\mathbb{Z}$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Linéarité de $f$
Soit $(M, N) \in E^2$ et $(\alpha, \beta) \in \mathbb{R}^2$. 
$$f(\alpha M + \beta N) = \text{tr}(\alpha M + \beta N) I_n + (\alpha M + \beta N)$$
Par linéarité de la trace :
$$f(\alpha M + \beta N) = (\alpha \text{tr}(M) + \beta \text{tr}(N)) I_n + \alpha M + \beta N$$
$$f(\alpha M + \beta N) = \alpha (\text{tr}(M) I_n + M) + \beta (\text{tr}(N) I_n + N) = \alpha f(M) + \beta f(N)$$
Ainsi, $f$ est bien un endomorphisme de l'espace vectoriel $E = \mathcal{M}_n(\mathbb{R})$.

#### 2. Recherche de valeurs propres évidentes
- Calculons $f(I_n)$ :
  $$f(I_n) = \text{tr}(I_n) I_n + I_n = n I_n + I_n = (n+1) I_n$$
  Puisque $n \ge 2$, $n+1 \neq 0$. Ainsi, $I_n$ est un vecteur non nul et $f(I_n) = (n+1)I_n$, ce qui prouve que $\lambda_1 = n+1$ est valeur propre de $f$, avec $I_n \in \text{E}_f(n+1)$.
  
- Soit $M \in E$ telle que $\text{tr}(M) = 0$ et $M \neq 0$ (par exemple, une matrice élémentaire $E_{i,j}$ avec $i \neq j$). Alors :
  $$f(M) = 0 \cdot I_n + M = M = 1 \cdot M$$
  Par conséquent, $\lambda_2 = 1$ est valeur propre de $f$. 
  De plus, l'espace propre $\text{E}_f(1)$ est constitué des matrices $M$ telles que $f(M) = M$, c'est-à-dire $\text{tr}(M) I_n = 0$, ce qui équivaut à $\text{tr}(M) = 0$ (car $I_n \neq 0$). 
  $\text{E}_f(1)$ est donc l'hyperplan des matrices de trace nulle, de dimension $\dim(\text{E}_f(1)) = n^2 - 1$.

#### 3. Détermination complète du spectre
Soit $\lambda \in \mathbb{R}$ une valeur propre de $f$ et $M$ un vecteur propre associé ($M \neq 0$). On a :
$$\text{tr}(M) I_n + M = \lambda M \implies \text{tr}(M) I_n = (\lambda - 1) M \quad (\text{Equation } *) $$
Appliquons l'opérateur trace aux deux membres de l'équation $(*)$ :
$$\text{tr}\left(\text{tr}(M) I_n\right) = \text{tr}\left((\lambda - 1) M\right)$$
$$\text{tr}(M) \text{tr}(I_n) = (\lambda - 1) \text{tr}(M)$$
Comme $\text{tr}(I_n) = n$, il vient :
$$n \text{tr}(M) = (\lambda - 1) \text{tr}(M) \iff (n + 1 - \lambda) \text{tr}(M) = 0$$

Discutons selon la valeur de $\text{tr}(M)$ :
- **Cas 1 : $\text{tr}(M) \neq 0$.** 
  L'équation précédente impose $n + 1 - \lambda = 0$, soit $\lambda = n+1$.
- **Cas 2 : $\text{tr}(M) = 0$.** 
  L'équation $(*)$ redevient $0 \cdot I_n = (\lambda - 1) M$. Puisque $M \neq 0$, cela implique nécessairement $\lambda = 1$.

Ainsi, les seules valeurs propres possibles pour $f$ sont $\lambda = 1$ et $\lambda = n+1$. 
Réciproquement, nous avons déjà établi que ces deux nombres sont effectivement valeurs propres. Par conséquent :
$$\text{Sp}(f) = \{1, n+1\}$$

#### 4. Diagonalisabilité
- Nous avons identifié deux sous-espaces propres :
  - $\text{E}_f(1) = \{M \in \mathcal{M}_n(\mathbb{R}) \mid \text{tr}(M) = 0\}$, qui est de dimension $n^2 - 1$.
  - $\text{E}_f(n+1) = \text{Vect}(I_n)$, qui est de dimension $1$ (car $I_n \neq 0$).
- Faisons la somme des dimensions de ces sous-espaces propres :
  $$\dim(\text{E}_f(1)) + \dim(\text{E}_f(n+1)) = (n^2 - 1) + 1 = n^2 = \dim(E)$$
- La dimension de l'espace total $E$ est égale à la somme des dimensions des sous-espaces propres associés à ses valeurs propres. 
- **Conclusion :** L'endomorphisme $f$ est **diagonalisable**.

#### 5. Analyse critique du modèle
Si l'on se place sur un corps de caractéristique $p > 0$ telle que $p$ divise $n+1$ (par exemple $n = p-1$), alors le scalaire $n+1$ est nul dans ce corps. 
Le raisonnement s'écrit alors différemment : $f(I_n) = (n+1)I_n = 0 \cdot I_n = 0$. Le vecteur $I_n$ devient alors un vecteur propre associé à la valeur propre $0$, ce qui modifierait la dimension des sous-espaces propres et pourrait faire perdre la diagonalisabilité de l'endomorphisme par un phénomène de non-semi-simplicité (apparition d'une structure de bloc de Jordan non triviale).