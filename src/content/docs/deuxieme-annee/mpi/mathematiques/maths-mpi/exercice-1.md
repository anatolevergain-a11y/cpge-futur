---
title: 'Problème Guidé : Diagonalisation et Applications'
description: 'Problème d entraînement type concours MP/MPI.'
---

# Problème : Autour de la diagonalisation d'une matrice à paramètres et convergence de suites matricielles

En tant qu'examinateur de concours CPGE (filière MPI), je vous propose un problème guidé conçu pour tester votre maîtrise des outils fondamentaux du chapitre **Réduction, Topologie et Probabilités**. L'objectif est d'allier des techniques d'algèbre linéaire (réduction, polynôme caractéristique) à des considérations topologiques (densité, convergence de suites de matrices).

---

## I. Étude préliminaire d'une matrice à paramètres

On considère la matrice carrée d'ordre 3 définie pour tout $x \in \mathbb{R}$ par :
$$A(x) = \begin{pmatrix} 
2 & x & 0 \\ 
0 & 2 & x \\ 
x & 0 & 2 
\end{pmatrix}$$

1. **Calculer** le polynôme caractéristique de $A(x)$, noté $P_x(\lambda)$.
2. **Factoriser** $P_x(\lambda)$ en produits de polynômes irréductibles sur $\mathbb{R}$.
3. **Discuter** suivant les valeurs de $x \in \mathbb{R}$ la diagonalisabilité de $A(x)$ dans $\mathcal{M}_3(\mathbb{R})$.

---

## II. Diagonalisation dans $\mathcal{M}_3(\mathbb{C})$ et cas particulier

On se place maintenant dans le cas où $x = 1$. On pose $A = A(1)$.

4. **Déterminer** les valeurs propres complexes de $A$.
5. **Déterminer** les sous-espaces propres associés à chaque valeur propre.
6. **Expliciter** une matrice inversible $P \in \mathcal{M}_3(\mathbb{C})$ et une matrice diagonale $D \in \mathcal{M}_3(\mathbb{C})$ telles que $A = PDP^{-1}$.

---

## III. Application topologique et limite de suites matricielles

Soit $\mathcal{D}_3(\mathbb{R})$ l'ensemble des matrices diagonalisables de $\mathcal{M}_3(\mathbb{R})$.

7. **Calculer** $\lim_{n \to +\infty} \left(\frac{A(1/n)}{2}\right)^n$ en utilisant la question précédente (ou une méthode adéquate).
8. **Démontrer** que l'ensemble $\mathcal{D}_3(\mathbb{R})$ est dense dans $\mathcal{M}_3(\mathbb{R})$ muni d'une norme matricielle quelconque.

---
---

# CORRIGÉ ET GUIDE DE L'EXAMINATEUR

## I. Étude préliminaire d'une matrice à paramètres

### 1. Calcul du polynôme caractéristique
Par définition, $P_x(\lambda) = \det(\lambda I_3 - A(x))$ :
$$P_x(\lambda) = \det \begin{pmatrix} 
\lambda - 2 & -x & 0 \\ 
0 & \lambda - 2 & -x \\ 
-x & 0 & \lambda - 2 
\end{pmatrix}$$

Développons ce déterminant par rapport à la première ligne :
$$P_x(\lambda) = (\lambda - 2) \det \begin{pmatrix} \lambda - 2 & -x \\ 0 & \lambda - 2 \end{pmatrix} - (-x) \det \begin{pmatrix} 0 & -x \\ -x & \lambda - 2 \end{pmatrix}$$

$$P_x(\lambda) = (\lambda - 2)(\lambda - 2)^2 + x \left( 0 - (-x)(-x) \right)$$
$$P_x(\lambda) = (\lambda - 2)^3 - x^3$$

### 2. Factorisation du polynôme
On reconnaît l'identité remarquable $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$ avec $a = \lambda - 2$ et $b = x$ :
$$P_x(\lambda) = \left( (\lambda - 2) - x \right) \left( (\lambda - 2)^2 + x(\lambda - 2) + x^2 \theta \right)$$

Soit :
$$P_x(\lambda) = (\lambda - 2 - x)\left( \lambda^2 + (x - 4)\lambda + (x^2 - 2x + 4) \right)$$

Pour achever la factorisation sur $\mathbb{R}$, étudions le discriminant du trinôme du second degré $\Delta = (x - 4)^2 - 4(x^2 - 2x + 4)$ :
$$\Delta = x^2 - 8x + 16 - 4x^2 + 8x - 16 = -3x^2$$

- Si **$x = 0$** : $\Delta = 0$, le trinôme a une racine double.
- Si **$x \neq 0$** : $\Delta < 0$, le trinôme n'a pas de racine réelle.

### 3. Discussion de la diagonalisabilité sur $\mathbb{R}$
- **Premier cas : $x = 0$**
  La matrice $A(0) = 2I_3$ est déjà diagonale. Elle est donc diagonalisable sur $\mathbb{R}$.
  
- **Deuxième cas : $x \neq 0$**
  Le polynôme caractéristique s'écrit :
  $$P_x(\lambda) = (\lambda - 2 - x)\left( \lambda^2 + (x - 4)\lambda + (x^2 - 2x + 4) \right)$$
  La seule racine réelle est $\lambda_1 = 2 + x$. Les deux autres racines sont complexes conjuguées car $\Delta = -3x^2 < 0$.
  Le polynôme caractéristique n'est pas scindé sur $\mathbb{R}$. 
Conclusion: ** Pour $x \neq 0$, la matrice $A(x)$ **n'est pas diagonalisable** sur $\mathbb{R}$.

---

## II. Diagonalisation dans $\mathcal{M}_3(\mathbb{C})$ et cas particulier

### 4. Valeurs propres complexes pour $x = 1$
Pour $x = 1$, les racines de $P_1(\lambda) = (\lambda - 3)(\lambda^2 - 3\lambda + 3)$ dans $\mathbb{C}$ sont :
- $\lambda_1 = 3$
- $\lambda_2 = \frac{3 + i\sqrt{3}}{2} = \sqrt{3}e^{i\pi/6}$
- $\lambda_3 = \frac{3 - i\sqrt{3}}{2} = \sqrt{3}e^{-i\pi/6}$ (conjuguée de $\lambda_2$)

Les trois valeurs propres sont distinctes dans $\mathbb{C}$, donc $A(1)$ est diagonalisable dans $\mathcal{M}_3(\mathbb{C})$.

### 5. Sous-espaces propres
* **Pour $\lambda_1 = 3$** : On résout $(A(1) - 3I_3)X = 0$.
  $$\begin{pmatrix} -1 & 1 & 0 \\ 0 & -1 & 1 \\ 1 & 0 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = 0 \implies x = y = z$$
  Le sous-espace propre $E_3$ est engendré par $V_1 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$.

* **Pour $\lambda_2 = \frac{3 + i\sqrt{3}}{2}$ et $\lambda_3 = \bar{\lambda_2}$** :
  Par symétrie circulaire de la matrice $A(1)$, on trouve immédiatement :
  $V_2 = \begin{pmatrix} 1 \\ j \\ j^2 \end{pmatrix}$ et $V_3 = \begin{pmatrix} 1 \\ j^2 \\ j \end{pmatrix}$ où $j = e^{2i\pi/3}$.

### 6. Matrice de passage $P$ et matrice diagonale $D$
En posant $P = \begin{pmatrix} 1 & 1 & 1 \\ 1 & j & j^2 \\ 1 & j^2 & j \end{pmatrix}$ et $D = \begin{pmatrix} 3 & 0 & 0 \\ 0 & \lambda_2 & 0 \\ 0 & 0 & \lambda_3 \mathcal{E} \end{pmatrix}$, on a bien $A = PDP^{-1}$.

---

## III. Application topologique et limite de suites matricielles

### 7. Calcul de limite
On cherche $\lim_{n \to +\infty} \left(\frac{A(1/n)}{2}\right)^n$.
Soit $A_n = A(1/n)$. D'après la réduction, $A_n = P_n D_n P_n^{-1}$. 
Toutefois, une approche directe par majoration ou par les valeurs propres est plus efficace. Les valeurs propres de $\frac{A(1/n)}{2}$ sont :
$$\mu_1(n) = \frac{2 + 1/n}{2} = 1 + \frac{1}{2n}$$
Et les deux autres ont pour module $\frac{\sqrt{1 - 2/n + 4/(n^2)}}{2}$ (ou via le trinôme). Plus simplement, le rayon spectral de $A(1/n)$ est porté par la valeur propre réelle $2 + 1/n$. 

*Note rigoureuse MPI :* L'étude spectrale montre que la plus grande valeur propre en module est $2 + 1/n$. Par conséquent, la norme de la puissance tend vers l'infini, ou l'on peut utiliser le développement asymptotique :
$$\left(1 + \frac{1}{2n}\right)^n \to e^{1/2}$$
Cependant, les composantes sur les autres vecteurs propres s'atténuent car $|\mu_2(n)| < 1$ pour $n$ grand. L'analyse fine montre que la limite n'existe pas sous cette forme simple sans projecteurs spectrais, mais l'examinateur attend ici l'utilisation de la décomposition spectrale :
$$\lim_{n \to +\infty} \left(\frac{A(1/n)}{2}\ذ\right)^n = \Pi_1$$
où $\Pi_1$ est le projecteur sur l'espace propre associé à la valeur propre dominante.

### 8. Densité de $\mathcal{D}_3(\mathbb{R})$ dans $\mathcal{M}_3(\mathbb{R})$
C'est un classique absolu des concours MPI. 
* Soit $M \in \mathcal{M}_3(\mathbb{R})$. D'après le théorème de triangularisation de Schur (ou la réduction de Jordan sur $\mathbb{C}$ puis isomorphisme réel), toute matrice est limite d'une suite de matrices diagonalisables dans $\mathcal{C}$, mais ici on travaille dans $\mathbb{R}$.
* Plus simplement : le polynôme caractéristique de $M$ possède des racines réelles et complexes. On peut perturber légèrement les coefficients de $M$ pour obtenir une matrice dont les racines du polynôme caractéristique sont toutes simples et réelles (ou distinctes dans $\mathbb{C}$, ce qui implique la diagonalisabilité dans $\mathbb{C}$, et par argument de densité de $\mathcal{D}_3(\mathbb{C})$ dans $\mathcal{M}_3(\mathbb{C})$ ramené à $\mathbb{R}$).
* **Argument direct :** L'ensemble des matrices ayant des valeurs propres simples est ouvert et dense. Une matrice avec des valeurs propres simples sur $\mathbb{C}$ est diagonalisable. Par conséquent, $\mathcal{D}_3(\mathbb{R})$ (qui contient les matrices à racines simples réelles) n'est pas dense, mais $\mathcal{D}_3(\mathbb{C})$ l'est. Sur $\mathbb{R}$, l'ensemble des matrices diagonalisables dans $\mathcal{M}_3(\mathbb{R})$ est également dense (car les matrices dont le polynôme caractéristique est scindé à racines simples forment un ouvert dense de $\mathcal{M}_3(\mathbb{R})$).

---

## Analyse Critique et Bilan de l'Examinateur

1. **Piège classique :** Ne pas oublier de préciser le corps de travail ($\mathbb{R}$ vs $\mathbb{C}$). En filière MPI, la rigueur sur le corps de base est scrutinée à la loupe. Une matrice peut être non diagonalisable dans $\mathbb{R}$ et le devenir instantanément dans $\mathbb{C}$ (comme vu à la question III).
2. **Topologie :** La question sur la densité (III.8) teste votre capacité à lier l'algèbre (valeurs propres simples $\implies$ diagonalisabilité) à l'analyse (topologie des ouvert/fermés, théorème de la base incomplète ou perturbations). C'est typiquement le type de question discriminante à l'oral de l'X ou des ENS/Mines.