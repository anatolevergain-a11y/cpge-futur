---
title: 'Exercice 2 : Matrices et systèmes'
description: 'Problème d entraînement type concours.'
---

# Problème : Étude d'une classe de matrices à diagonale dominante et résolution de systèmes associés

L'objectif de ce problème est d'étudier certaines propriétés algébriques et spectrales de matrices à diagonale dominante, très utiles en analyse numérique pour la résolution approchée de systèmes linéaires rencontrés en MP2I.

---

## Partie I : Préliminaires et inversibilité

Soit $n \ge 2$ un entier. On munit $\mathcal{M}_n(\mathbb{C})$ de sa structure d'espace vectoriel usuelle. 
Pour une matrice $A = (a_{i,j})_{1 \le i,j \le n} \in \mathcal{M}_n(\mathbb{C})$, on définit pour tout $i \in \llbracket 1, n \rrbracket$ la somme des éléments extra-diagonaux en valeur absolue sur la ligne $i$ :
$$R_i(A) = \sum_{\substack{j=1 \\ j \neq i}}^n |a_{i,j}|$$

On dit que $A$ est à **diagonale strictement dominante** si pour tout $i \in \llbracket 1, n \rrbracket$, on a :
$$|a_{i,i}| > R_i(A)$$

### Question 1
Soit $A \in \mathcal{M}_n(\mathbb{C})$ une matrice à diagonale strictement dominante. 
Démontrer que $A$ est inversible.
Indication: Raisonner par l'absurde en considérant un vecteur non nul $X$ tel que $AX = 0$ et en étudiant une composante de module maximal.*

---

## Partie II : Étude d'un cas particulier et diagonalisation

On considère la matrice $J \in \mathcal{M}_n(\mathbb{R})$ définie par :
$$J = \begin{pmatrix} 
0 & 1 & 0 & \cdots & 0 \\ 
1 & 0 & 1 & \ddots & \vdots \\ 
0 & 1 & \ddots & \ddots & 0 \\ 
\vdots & \ddots & \ddots & 0 & 1 \\ 
0 & \cdots & 0 & 1 & 0 
\end{pmatrix}$$
Plus formellement, $J = (u_{i,j})_{1 \le i,j \le n}$ avec $u_{i,j} = 1$ si $|i-j| = 1$ et $0$ sinon.

### Question 2
Exprimer les valeurs propres de $J$ en cherchant des vecteurs propres sous la forme $X = (\sin(k \theta))_{1 \le k \le n}$ pour un $\theta$ bien choisi.

### Question 3
En déduire que $J$ est diagonalisable et préciser son polynôme caractéristique.

---

## Partie III : Application aux systèmes linéaires et méthode de Jacobi

Soit $A = I_n + \alpha J$ où $\alpha \in \mathbb{R}$ et $I_n$ est la matrice identité de $\mathcal{M}_n(\mathbb{R})$.

### Question 4
À quelle condition sur $\alpha$ la matrice $A$ est-elle à diagonale strictement dominante ? 

### Question 5
On souhaite résoudre le système linéaire $AX = B$ où $B \in \mathcal{M}_{n,1}(\mathbb{R})$. 
Écrire la méthode d'itération de Jacobi sous forme matricielle : $X^{(k+1)} = M X^{(k)} + C$, en précisant $M$ et $C$ en fonction de $\alpha$ et $J$.

---
---

# CORRIGÉ ET COMMENTAIRES DE L'EXAMINATEUR

---

## Partie I : Préliminaires et inversibilité

### Correction de la Question 1
Soit $A = (a_{i,j}) \in \mathcal{M}_n(\mathbb{C})$ à diagonale strictement dominante. Supposons que $A$ ne soit pas inversible. 
Puisque $A$ est une matrice carrée, son noyau n'est pas réduit au vecteur nul. Il existe donc un vecteur colonne non nul $X = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} \in \mathcal{M}_{n,1}(\mathbb{C})$ tel que $AX = 0$.

Soit $i_0 \in \llbracket 1, n \rrbracket$ un indice pour lequel le module de la composante $x_{i_0}$ est maximal, c'est-à-dire :
$$|x_{i_0}| = \max_{1 \le j \le n} |x_j|$$
Puisque $X \neq 0$, on a nécessairement $|x_{i_0}| > 0$.

Écrivons la $i_0$-ème ligne de l'égalité matricielle $AX = 0$ :
$$\sum_{j=1}^n a_{i_0,j} x_j = 0$$
On isole le terme diagonal :
$$a_{i_0,i_0} x_{i_0} = - \sum_{\substack{j=1 \\ j \neq i_0}}^n a_{i_0,j} x_j$$

En passant aux modules, il vient :
$$|a_{i_0,i_0}| |x_{i_0}| = \left| \sum_{\substack{j=1 \\ j \neq i_0}}^n a_{i_0,j} x_j \right|$$

Par l'inégalité triangulaire :
$$|a_{i_0,i_0}| |x_{i_0}| \le \sum_{\substack{j=1 \\ j \neq i_0}}^n |a_{i_0,j}| |x_j|$$

Puisque pour tout $j$, $|x_j| \le |x_{i_0}|$, on majore chaque terme :
$$|a_{i_0,i_0}| |x_{i_0}| \le \left( \sum_{\substack{j=1 \\ j \neq i_0}}^n |a_{i_0,j}| \right) |x_{i_0}| = R_{i_0}(A) |x_{i_0}|$$

Puisque $|x_{i_0}| > 0$, on peut simplifier par $|x_{i_0}|$ :
$$|a_{i_0,i_0}| \le R_{i_0}(A)$$
Ceci contredit directement l'hypothèse selon laquelle $A$ est à diagonale strictement dominante ($|a_{i_0,i_0}| > R_{i_0}(A)$).

L'hypothèse selon laquelle $A$ n'est pas inversible est donc absurde. **Conclusion : $A$ est inversible.** $\blacksquare$

> *Note de l'examinateur : C'est le théorème de Gershgorin déguisé. Ce type de raisonnement par "composante maximale" est un grand classique des concours MP2I à maîtriser absolument.*

---

## Partie II : Étude d'un cas particulier et diagonalisation

### Correction de la Question 2
Soit $\lambda$ une valeur propre de $J$ et $X = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}$ un vecteur propre associé non nul. L'équation $JX = \lambda X$ se traduit par le système de relations de récurrence :
- Pour $k = 1$ : $x_2 = \lambda x_1$
- Pour $k \in \llbracket 2, n-1 \rrbracket$ : $x_{k-1} + x_{k+1} = \lambda x_k$
- Pour $k = n$ : $x_{n-1} = \lambda x_n$

Cherchons une solution sous la forme $x_k = \sin(k \theta)$ pour un certain $\theta \in ]0, \pi[$. 
Testons cette forme dans l'équation générale ($2 \le k \le n-1$) :
$$\sin((k-1)\theta) + \sin((k+1)\theta) = \lambda \sin(k \theta)$$

En utilisant les formules de trigonométrie $\sin(a+b) + \sin(a-b) = 2 \sin(a)\cos(b)$ :
$$2 \cos(\theta) \sin(k \theta) = \lambda \sin(k \theta)$$

Si l'on choisit $\theta$ tel que $\sin(k \theta) \neq 0$, on obtient :
$$\lambda = 2 \cos(\theta)$$

Il reste à satisfaire les conditions aux bords ($k=1$ et $k=n$).
- Pour $k=1$ : $x_2 = \lambda x_1 \implies \sin(2\theta) = 2\cos(\theta)\sin(\theta)$ ce qui est toujours vrai.
- Pour $k=n$ : $x_{n-1} = \lambda x_n \implies \sin((n-1)\theta) = 2\cos(\theta)\sin(n\theta)$.
En développant $\sin((n-1)\theta) = \sin(n\theta)\cos(\theta) - \cos(n\theta)\sin(\theta)$, l'équation devient :
$$\sin(n\theta)\cos(\theta) - \cos(n\theta)\sin(\theta) = 2\cos(\theta)\sin(n\theta) \implies -\sin(n\theta)\cos(\theta) - \cos(n\theta)\sin(\theta) = 0$$
Soit $-\sin((n+1)\theta) = 0$.

Pour que les vecteurs soient non nuls, on choisit $\theta$ de manière à ce que $\sin((n+1)\theta) = 0$, soit :
$$(n+1)\theta = j \pi \quad (j \in \mathbb{Z})$$
En prenant $\theta_j = \frac{j\pi}{n+1}$ pour $j \in \llbracket 1, n \rrbracket$, on obtient $n$ valeurs distinctes de $\theta$ dans $]0, \pi[$.

Les valeurs propres distinctes de $J$ sont donc :
$$\lambda_j = 2 \cos\left(\frac{j\pi}{n+1}\right) \quad \text{pour } j \in \llbracket 1, n \rrbracket$$

### Correction de la Question 3
La matrice $J$ de taille $n \times n$ admet $n$ valeurs propres distinctes $\lambda_1, \lambda_2, \dots, \lambda_n$. 
Puisque le corps de base est $\mathbb{R}$ et que toutes les racines sont réelles et simples, **$J$ est diagonalisable**.

Son polynôme caractéristique est :
$$\chi_J(X) = \prod_{j=1}^n \left( X - 2 \cos\left(\frac{j\pi}{n+1}\right) \right)$$

---

## Partie III : Application aux systèmes linéaires et méthode de Jacobi

### Correction de la Question 4
La matrice $A$ s'écrit $A = I_n + \alpha J$. Explicitement, ses coefficients $a_{i,j}$ sont :
- $a_{i,i} = 1$ pour tout $i \in \llbracket 1, n \rrbracket$.
- $a_{i,j} = \alpha$ si $|i-j| = 1$.
- $a_{i,j} = 0$ sinon.

La condition de diagonale strictement dominante s'écrit :
$$\forall i \in \llbracket 1, n \rrbracket, \quad |a_{i,i}| > R_i(A)$$

Calculons $R_i(A)$ :
- Pour les lignes extrêmes ($i=1$ et $i=n$), il n'y a qu'un seul voisin, donc $R_1(A) = R_n(A) = |\alpha|$.
- Pour les lignes intérieures ($1 < i < n$), il y a deux voisins, donc $R_i(A) = 2|\alpha|$.

La condition de domination diagonale est donc la plus stricte pour les lignes intérieures :
$$1 > 2|\alpha| \iff |\alpha| < \frac{1}{2}$$
Conclusion: ** $A$ est à diagonale strictement dominante si et seulement si **$|\alpha| < \frac{1}{2}$**.

### Correction de la Question 5
On pose $A = D - L - U$ (méthode de décomposition de Jacobi), où :
- $D = I_n$ (partie diagonale)
- $L = -\alpha \text{tril}(J)$ et $U = -\alpha \text{triu}(J)$, de sorte que $L+U = -\alpha J$.

L'équation $AX = B$ devient :
$$(I_n - (-\alpha J))X = B \implies I_n X = (-\alpha J)X + B$$
La relation de récurrence de Jacobi s'écrit sous la forme $X^{(k+1)} = M X^{(k)} + C$ avec :
$$M = -\alpha J$$
$$C = B$$

---

## Analyse critique et perspective (Hors-barème)
> *Remarque de l'examinateur : En analyse numérique, la convergence de la méthode de Jacobi est assurée si le rayon spectral $\rho(M) < 1$. 
> D'après la question 2, les valeurs propres de $J$ sont comprises entre $-2$ et $2$. Par conséquent, le rayon spectral de $M = -\alpha J$ vaut $\rho(M) = |\alpha| \rho(J) = 2|\alpha|$.
> La condition de convergence de la méthode itérative est donc $2|\alpha| < 1$, soit $|\alpha| < \frac{1}{2}$. On retrouve exactement la condition de diagonale strictement dominante de la question 4 ! C'est un résultat général remarquable : pour les matrices à diagonale strictement dominante, la méthode de Jacobi converge toujours.*