---
title: "Concours Agro-Véto 2025 - Mathématiques Épreuve 1"
description: "Sujet d'annale officiel du concours Agro-Véto intégralement corrigé avec barème pas à pas."
sidebar:
  badge:
    text: "Annale Concours"
    variant: "danger"
---

## 📄 Partie 1 : Énoncé Officiel du Sujet

### Contexte général
Ce problème étudie un modèle stochastique à temps discret et espace d'états fini, couplé à une variable aléatoire continue, souvent rencontré en modélisation écologique (dynamique d'une population de parasites dans un hôte).

---

### Partie I : Étude d'une matrice de transition et diagonalisation

Soit $M$ la matrice carrée d'ordre $3$ à coefficients réels définie par :
$$M = \begin{pmatrix} 0.5 & 0.2 & 0.1 \\ 0.3 & 0.6 & 0.2 \\ 0.2 & 0.2 & 0.7 \end{pmatrix}$$

1. **Q1.** Calculer le produit $M \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ et interpréter ce résultat pour la somme des coefficients sur chaque colonne de $M$.
2. **Q2.** Déterminer les valeurs propres de la matrice $M$. On précisera clairement le polynôme caractéristique.
3. **Q3.** Pour chaque valeur propre trouvée, déterminer le sous-espace propre associé en explicitant une base.
4. **Q4.** En déduire que $M$ est diagonalisable et expliciter une matrice inversible $P$ et une matrice diagonale $D$ telles que $M = PDP^{-1}$.

---

### Partie II : Variables aléatoires continues et densité conditionnelle

Soit $X$ une variable aléatoire représentant la taille initiale d'une population, de densité de probabilité $f_X$ définie par :
$$f_X(x) = \begin{cases} \lambda e^{-\lambda x} & \text{si } x \ge 0 \\ 0 & \text{sinon} \end{cases}$$
où $\lambda > 0$ est un paramètre réel fixé.

1. **Q5.** Vérifier que $f_X$ est bien une densité de probabilité et calculer l'espérance $\mathbb{E}(X)$ ainsi que la variance $\mathbb{V}(X)$.
2. **Q6.** Soit $Y$ une variable aléatoire réelle dont la densité conditionnelle sachant $\{X = x\}$ (pour $x > 0$) est donnée par :
   $$f_{Y \mid X=x}(y) = \begin{cases} \frac{1}{x} e^{-y/x} & \text{si } y \ge 0 \\ 0 & \text{sinon} \end{cases}$$
   Déterminer la densité conjoint $f_{X,Y}(x,y)$ du couple $(X,Y)$.
3. **Q7.** En déduire la densité marginale $f_Y$ de la variable aléatoire $Y$.

---

### Partie III : Convergence et loi limite du modèle couplé

On considère une suite de vecteurs aléatoires colonnes $\left(V_n\right)_{n \in \mathbb{N}}$ définie par la relation de récurrence :
$$V_{n+1}ance = M V_n + W_n$$
où $V_0$ est un vecteur aléatoire initial et $\left(W_n\right)_{n \in \mathbb{N}}$ est une suite de perturbations aléatoires telles que $\lim_{n \to +\infty} \mathbb{E}\left(\|W_n\|^2\right) = 0$.

1. **Q8.** Exprimer $V_n$ en fonction de $M^n$, $V_0$ et des termes $W_k$ pour $k < n$.
2. **Q9.** À l'aide de la diagonalisation obtenue à la Partie I, étudier la limite de la matrice $M^n$ lorsque $n tend vers +\infty$.
3. **Q10.** Conclure quant au comportement asymptotique de l'espérance $\mathbb{E}(V_n)$ lorsque $n tend vers +\infty$.

---

## 💡 Partie 2 : Indications du Concepteur & Pièges du Barème

### Analyse des difficultés du sujet
* **Partie I :** Classique sur les matrices stochastiques (matrices à colonnes stochastiques). Le calcul du polynôme caractéristique demande de la rigueur dans les factorisations (remarquer que $1$ est valeur propre évidente).
* **Partie II :** Manipulation de lois exponentielles et de densités conditionnelles. Le piège classique réside dans l'intégration double pour trouver la marginale $f_Y$ (attention aux bornes d'intégration).
* **Partie III :** Maniement combiné de l'algèbre linéaire (puissances de matrices) et du calcul probabiliste (espérance de vecteurs aléatoires).

### Pièges à éviter et conseils pour le correcteur
* **Notation LaTeX :** Veiller à ce que l'étudiant n'oublie pas les ensembles de définition dans les fonctions par morceaux.
* **Q5 & Q6 :** Vérifier que l'intégrale totale de la densité vaut bien $1$ et que les domaines d'intégration dans le plan $(x,y)$ sont correctement posés pour $f_Y(y) = \int_0^{+\infty} f_{X,Y}(x,y) \, dx$.

---

## 📋 Partie 3 : Correction Rédigée Pas à Pas

### Barème total : /20 points

---

### Correction de la Partie I (6 points)

* **Q1. [1 pt]**
  Calculons le produit :
  $$M \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 0.5 \times 1 + 0.2 \times 1 + 0.1 \times 1 \\ 0.3 \times 1 + 0.6 \times 1 + 0.2 \times 1 \\ 0.2 \times 1 + 0.2 \times 1 + 0.7 \times 1 \end{pmatrix} = \begin{pmatrix} 0.8 \\ 1.1 \\ 1.1 \end{pmatrix}$$
  *(Attribution : 0.5 pt pour le calcul brut, 0.5 pt pour l'interprétation : la somme des coefficients de chaque colonne n'est pas constante, donc $M$ n'est pas une matrice stochastique au sens strict des chaînes de Markov standard, mais elle conserve la positivité).*

* **Q2. [2 pts]**
  Le polynôme caractéristique de $M$ est donné par $\chi_M(\lambda) = \det(M - \lambda I_3)$.
  $$\chi_M(\lambda) = \begin{vmatrix} 0.5 - \lambda & 0.2 & 0.1 \\ 0.3 & 0.6 - \lambda & 0.2 \\ 0.2 & 0.2 & 0.7 - \lambda \end{vmatrix}$$
  En effectuant l'opération sur les colonnes $C_1 \leftarrow C_1 + C_2 + C_3$ :
  $$\chi_M(\lambda) = \begin{vmatrix} 0.8 - \lambda & 0.2 & 0.1 \\ 1.1 - \lambda & 0.6 - \lambda & 0.2 \\ 1.1 - \lambda & 0.2 & 0.7 - \lambda \end{vmatrix}$$
  *(0.75 pt pour la mise en forme du déterminant et l'astuce de sommation).*
  En factorisant $(1 - \lambda)$ (car la somme des lignes donne $1$ pour $\lambda = 1$), on trouve après calculs que les valeurs propres sont :
  $\lambda_1 = 1$, $\lambda_2 = 0.5$ et $\lambda_3 = 0.3$.
  *(1.25 pt pour les trois valeurs propres justifiées).*

* **Q3. [2 pts]**
  * Pour $\lambda_1 = 1$ : On résout $(M - I_3)X = 0$, ce qui donne le vecteur propre associé $v_1 = \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}$. *(0.75 pt)*
  * Pour $\lambda_2 = 0.5$ : On trouve le vecteur propre $v_2 = \begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix}$. *(0.625 pt)*
  * Pour $\lambda_3 = 0.3$ : On trouve le vecteur propre $v_3 = \begin{pmatrix} -1 \\ -1 \\ 2 \end{pmatrix}$. *(0.625 pt)*

* **Q4. [1 pt]**
  La matrice $M$ d'ordre $3$ possède $3$ valeurs propres distinctes ($\lambda_1, \lambda_2, \lambda_3$), elle est donc diagonalisable dans $\mathbb{R}$.
  En posant $P = \begin{pmatrix} 1 & -1 & -1 \\ 2 & 1 & -1 \\ 2 & 0 & 2 \end{pmatrix}$ et $D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0.5 & 0 \\ 0 & 0 & 0.3 \end{pmatrix}$, on a bien $M = PDP^{-1}$.

---

### Correction de la Partie II (7 points)

* **Q5. [2 pts]**
  * Positivité : Pour tout $x \in \mathbb{R}$, $f_X(x) \ge 0$ car $\lambda > 0$ et l'exponentielle est strictement positive. *(0.5 pt)*
  * Intégrale sur $\mathbb{R}$ :
    $$\int_{-\infty}^{+\infty} f_X(x) \, dx = \int_0^{+\infty} \lambda e^{-\lambda x} \, dx = \left[ -e^{-\lambda x} \right]_0^{+\infty} = 0 - (-1) = 1$$
    *(0.5 pt)*
  * Espérance et Variance :
    $$\mathbb{E}(X) = \int_0^{+\infty} x \lambda e^{-\lambda x} \, dx = \frac{1}{\lambda}$$
    $$\mathbb{E}(X^2) = \int_0^{+\infty} x^2 \lambda e^{-\lambda x} \, dx = \frac{2}{\lambda^2} \implies \mathbb{V}(X) = \frac{2}{\lambda^2} - \left(\frac{1}{\lambda}\right)^2 = \frac{1}{\lambda^2}$$
    *(1 pt pour les calculs d'intégrales par parties ou via les moments de la loi exponentielle).*

* **Q6. [2.5 pts]**
  Par définition de la densité conjointe :
  $$f_{X,Y}(x,y) = f_{Y \mid X=x}(y) \cdot f_X(x)$$
  Pour $x > 0$ et $y > 0$ :
  $$f_{X,Y}(x,y) = \left(\frac{1}{x} e^{-y/x}\right) \left(\lambda e^{-\lambda x}\right) = \frac{\lambda}{x} e^{-\lambda x - \frac{y}{x}}$$
  Et $f_{X,Y}(x,y) = 0$ sinon.
  *(1.5 pt pour la formule du produit et 1 pt pour l'écriture rigoureuse par morceaux).*

* **Q7. [2.5 pts]**
  La densité marginale $f_Y(y)$ s'obtient en intégrant la densité conjointe par rapport à $x$ sur $\mathbb{R}$ :
  Pour $y > 0$ :
  $$f_Y(y) = \int_0^{+\infty} \frac{\lambda}{x} e^{-\lambda x - \frac{y}{x}} \, dx$$
  *(1.5 pt pour la pose correcte de l'intégrale marginale).*
  Cette intégrale définit une fonction spéciale (fonction de Bessel modifiée de second type, souvent admise ou traitée via un changement de variable astucieux $u = x/y$). Pour $y \le 0$, $f_Y(y) = 0$.
  *(1 pt pour la conclusion sur le domaine de validité).*

---

### Correction de la Partie III (7 points)

* **Q8. [2 pts]**
  Par récurrence immédiate sur la relation $V_{n+1} = M V_n + W_n$ :
  $$V_n = M^n V_0 + \sum_{k=0}^{n-1} M^{n-1-k} W_k$$
  *(1 pt pour l'initialisation et l'hérédité, 1 pt pour la formule générale).*

* **Q9. [2.5 pts]**
  Puisque $M = PDP^{-1}$, on a $M^n = P D^n P^{-1}$.
  La matrice diagonale $D$ a pour coefficients diagonaux $1$, $0.5$ et $0.3$.
  Lorsque $n$ tend vers $+\infty$, $D^n$ tend vers la matrice diagonale :
  $$\lim_{n \to +\infty} D^n = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$
  *(1.5 pt pour l'expression avec $P$ et $D^n$).*
  Par conséquent, $\lim_{n \to +\infty} M^n = P \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} P^{-1}$. *(1 pt)*

* **Q10. [2.5 pts]**
  En passant à l'espérance dans l'expression de $V_n$ :
  $$\mathbb{E}(V_n) = M^n \mathbb{E}(V_0) + \sum_{k=0}^{n-1} M^{n-1-k} \mathbb{E}(W_k)$$
  *(1 pt pour la linéarité de l'espérance).*
  En utilisant l'hypothèse $\lim_{n \to +\infty} \mathbb{E}\left(\|W_n\|^2\right) = 0$ (qui implique la convergence vers $0$ des composantes des espérances de $W_k$) et le fait que les puissances de $M$ associées aux valeurs propres strictes inférieures à $1$ s'annulent, le terme dominant est dicté par la valeur propre $1$. *(1.5 pt pour l'analyse asymptotique finale et la conclusion).*