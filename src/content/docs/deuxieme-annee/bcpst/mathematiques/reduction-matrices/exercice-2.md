---
title: 'Exercice 2 : Diagonalisation et applications aux chaînes de Markov'
description: 'Problème d entraînement type concours.'
---

# Problème : Modélisation de l'évolution d'une population d'amphibiens et chaînes de Markov

## Introduction et contexte biologique

En écologie des populations, la modélisation matricielle (dite de Leslie ou de Lefkovitch) est un outil fondamental pour prévoir la démographie d'espèces menacées. On s'intéresse ici à une espèce protégée d'amphibiens (le Triton alpestre) dont le cycle de vie est rudimentairement découpé en deux stades annuels :
1. **Juvéniles ($J$)** : individus de moins d'un an.
2. **Adultes ($A$)** : individus de plus d'un an, aptes à se reproduire.

À chaque printemps (noté $n$), on mesure le vecteur d'état de la population $X_n = \begin{pmatrix} J_n \\ A_n \end{pmatrix}$, où $J_n$ et $A_n$ représentent les effectifs (normalisés ou en milliers d'individus) dans chaque classe. 

L'évolution de la population d'une année sur l'autre est régie par le système dynamique linéaire déterministe suivant :
$$\begin{cases} 
J_{n+1} = 0.2 \, A_n \\ 
A_{n+1} = 0.5 \, J_n + 0.6 \, A_n 
\end{cases}$$

L'objectif de ce problème est d'étudier le comportement à long terme de cette population à l'aide de la réduction des endomorphismes (matrices diagonalisables) et d'analyser la pertinence biologique du modèle.

---

## Partie I : Mise en place et propriétés de la matrice de transition

On définit la matrice $M = \begin{pmatrix} 0 & 0.2 \\ 0.5 & 0.6 \end{pmatrix}$, de sorte que pour tout entier $n \in \mathbb{N}$, on a la relation de récurrence vectorielle :
$$X_{n+1} = M X_n$$

### Questions

1. Expliciter $X_n$ en fonction de $M^n$ et de l'état initial $X_0 = \begin{pmatrix} J_0 \\ A_0 \end{pmatrix}$.
2. Déterminer les valeurs propres de la matrice $M$. La matrice $M$ est-elle diagonalisable ?
3. Déterminer une base de vecteurs propres de $M$ et expliciter une matrice inversible $P$ et une matrice diagonale $D$ telles que $M = PDP^{-1}$.
4. Calculer $M^n$ pour tout $n \in \mathbb{N}$.

---

## Partie II : Étude asymptotique et dynamique des populations

5. En déduire l'expression explicite de $J_n$ et $A_n$ en fonction de $n$, $J_0$ et $A_0$.
6. Déterminer les limites $\lim_{n \to +\infty} J_n$ et $\lim_{n \to +\infty} A_n$ selon les valeurs de $X_0$.
7. Calculer la proportion de juvéniles dans la population totale à long terme, c'est-à-dire la limite de $\frac{J_n}{J_n + A_n}$ lorsque $n$ tend vers $+\infty$, en supposant $X_0 \neq \begin{pmatrix} 0 \\ 0 \end{pmatrix}$. Que remarquez-vous ?

---

## Partie III : Analyse critique du modèle biologique

8. **Analyse critique :** Le modèle linéaire homogène $X_{n+1} = MX_n$ souffre de limites biologiques évidentes lorsque $n$ devient grand. 
   - Que prédit ce modèle si $J_0 + A_0 > 0$ ? 
   - Quelles hypothèses écologiques implicites sont formulées par l'utilisation d'une matrice $M$ constante au cours du temps ? Proposer une modification mathématique simple pour rendre le modèle plus réaliste (sans rédiger les calculs complets).

---

## Pistes et indications

* **Piste 1 (Valeurs propres) :** Calculer le polynôme caractéristique $\chi_M(\lambda) = \det(M - \lambda I_2)$.
* **Piste 2 (Diagonalisation) :** Comme les valeurs propres sont distinctes et réelles, le théorème spectral ou le critère usuel garantit la diagonalisabilité en dimension 2.
* **Piste 3 (Asymptotique) :** Isoler la valeur propre dominante (celle de plus grand module) pour comprendre le comportement en $1^\text{er}$ ordre de $M^n$.
* **Piste 4 (Biologie) :** Penser à la capacité de charge du milieu (compétition intraspécifique pour la nourriture ou les sites de ponte).

---

## Corrigé pas à pas

### Partie I_1. Par récurrence immédiate, on montre que $X_n = M^n X_0$.
2. Calculons le polynôme caractéristique de $M$ :
   $$\chi_M(\lambda) = \det \begin{pmatrix} -\lambda & 0.2 \\ 0.5 & 0.6 - \lambda \end{pmatrix} = (-\lambda)(0.6 - \lambda) - (0.2 \times 0.5) = \lambda^2 - 0.6\lambda - 0.1$$
   Le discriminant vaut $\Delta = (-0.6)^2 - 4(1)(-0.1) = 0.36 + 0.4 = 0.76 > 0$.
   Les racines (valeurs propres) sont :
   $$\lambda_1 = \frac{0.6 - \sqrt{0.76}}{2} \quad \text{et} \quad \lambda_2 = \frac{0.6 + \sqrt{0.76}}{2}$$
   Puisque $\Delta > 0$, la matrice $M$ possède $2$ valeurs propres distinctes dans $\mathbb{R}$. Étant de taille $2 \times 2$, **$M$ est diagonalisable**.
   *(Remarque numérique : $\sqrt{0.76} \approx 0.8718$, donc $\lambda_1 \approx -0.1359$ et $\lambda_2 \approx 0.7359$.)*

3. Cherchons les sous-espaces propres associés :
   * **Pour $\lambda_2 \approx 0.7359$ (valeur propre dominante) :**
     On résout $(M - \lambda_2 I_2)V = 0$. Les coefficients vérifient $0.5 J + (0.6 - \lambda_2)A = 0$. En posant $A_2 = 1$, on obtient un vecteur propre $V_2 = \begin{pmatrix} \frac{0.2}{\lambda_2} \\ 1 \end{pmatrix}$.
   * **Pour $\lambda_1$ :** De même, on obtient un vecteur propre $V_1$.
   En posant $P = \begin{vmatrix} V_1 & V_2 \end{vmatrix}$ et $D = \begin{pmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{pmatrix}$, on a $M = PDP^{-1}$.

4. Par récurrence, pour tout $n \in \mathbb{N}$, $M^n = PD^nP^{-1}$, avec $D^n = \begin{pmatrix} \lambda_1^n & 0 \\ 0 & \lambda_2^n \end{pmatrix}$.

### Partie II

5. L'expression de $X_n = M^n X_0$ s'écrit sous la forme $X_n = \alpha_1 \lambda_1^n V_1 + \alpha_2 \lambda_2^n V_2$, où $\alpha_1, \alpha_2$ dépendent des conditions initiales $X_0$.
6. Remarquons que $|\lambda_1| \approx 0.1359 < 1$ et $\lambda_2 \approx 0.7359 < 1$. 
   Puisque les deux valeurs propres ont un module strictement inférieur à $1$, on a :
   $$\lim_{n \to +\infty} \lambda_1^n = 0 \quad \text{et} \quad \lim_{n \to +\infty} \lambda_2^n = 0$$
   Par conséquent, pour **toute** condition initiale $X_0$, $\lim_{n \to +\infty} X_n = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$. La population est menacée d'extinction à terme selon ce modèle brut.
7. Si $\alpha_2 \neq 0$, à grand $N$, le terme dominant est celui associé à $\lambda_2$. Le ratio $\frac{J_n}{J_n + A_n}$ tend vers la proportion portée par le vecteur propre dominant $V_2$. Cette stabilité structurelle de la pyramide des âges indépendamment de l'état initial est l'illustration mathématique du théorème de Perron-Frobenius.

### Partie III

8. **Analyse critique et limites biologiques :**
   * **Extinction ou explosion non réaliste :** Le modèle linéaire homogène prédit ici une extinction certaine ($\lim X_n = 0$) car la valeur propre spectrale maximale est strictement inférieure à $1$ ($\approx 0.74$). Si les coefficients de reproduction eussent été plus élevés (donnant $\lambda_{\max} > 1$), le modèle aurait prédit une croissance exponentielle infinie ($\lim X_n = +\infty$), ce qui est biologiquement impossible en milieu naturel.
   * **Absence de non-linéarité :** Les taux de survie et de fertilité ($0.2$, $0.5$, $0.6$) sont supposés constants, indépendants de la densité de population. Or, en écologie, la surpopulation engendre la compétition pour les ressources, réduisant la fertilité et augmentant la mortalité.
   * **Piste d'amélioration :** Introduire un modèle non linéaire (type modèle de Beverton-Holt ou matrice de Leslie dépendante de l'effectif total $N_n = J_n + A_n$), par exemple en remplaçant $0.2$ par une fonction décroissante de $N_n$ telle que $\frac{0.2}{1 + a(J_n + A_n)}$.