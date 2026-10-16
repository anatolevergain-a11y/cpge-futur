---
title: 'Exercice 1 : Systèmes différentiels'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Systèmes différentiels linéaires à coefficients constants et perturbation périodique

---

## Préambule et Objectifs

Cet énoncé simule un problème d'écrit de mathématiques pour la filière PSI (concours Mines-Ponts / Centrale-Supélec). L'objectif est l'étude théorique et pratique d'un système différentiel linéaire vectoriel couplé, avec une attention particulière portée sur la réduction des endomorphismes et l'utilisation des séries de Fourier pour la recherche de solutions périodiques.

---

## I. Étude du système homogène associé

Soit $A$ la matrice réelle d'ordre $3$ définie par :
$$A = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ -2 & -5 & -4 \end{pmatrix}$$

On considère l'équation différentielle vectorielle homogène :
$$(S_0) \quad X'(t) = A X(t)$$
où $X : \mathbb{R} \to \mathcal{M}_{3,1}(\mathbb{R})$ est une fonction de classe $\mathcal{C}^1$.

### Question 1
Déterminer le polynôme caractéristique $P_A(\lambda) = \det(A - \lambda I_3)$ de la matrice $A$. Factoriser $P_A(\lambda)$ sur $\mathbb{R}$.

> **Indice :** Calculer $P_A(-1)$ pour trouver une racine évidente.

---
*Corrigé :*
On calcule le déterminant par rapport à la première colonne :
$$P_A(\lambda) = \det \begin{pmatrix} -\lambda & 1 & 0 \\ 0 & -\lambda & 1 \\ -2 & -5 & -4-\lambda \end{pmatrix}$$
$$P_A(\lambda) = -\lambda \left[ (-\lambda)(-4-\lambda) + 5 \right] - 1 \cdot \left[ -2 \right]$$
$$P_A(\lambda) = -\lambda (\lambda^2 + 4\lambda + 5) + 2 = -\lambda^3 - 4\lambda^2 - 5\lambda + 2$$
Testons $\lambda = -1$ :
$$P_A(-1) = -(-1) - 4(1) - 5(-1) + 2 = 1 - 4 + 5 + 2 = 4 \neq 0$$
Testons $\lambda = -2$ :
$$P_A(-2) = -(-8) - 4(4) - 5(-2) + 2 = 8 - 16 + 10 + 2 = 4 \neq 0$$
*Correction de calcul (ou ajustement du texte) :* Posons $A = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 2 & -5 & -4 \end{pmatrix}$ (avec un $+2$ en bas à gauche pour simplifier les racines). Reprenons avec $A = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & -5 & -4 \end{array}$ non, gardons l'esprit concours :
Revenons à $P_A(\lambda) = -\lambda^3 - 4\lambda^2 - 5\lambda - 2$.
Testons $\lambda = -1$ : $P_A(-1) = -(-1) - 4(1) - 5(-1) - 2 = 1 - 4 + 5 - 2 = 0$.
La racine $\lambda_1 = -1$ est évidente. On effectue la division euclidienne de $P_A(\lambda)$ par $(\lambda + 1)$ :
$$-\lambda^3 - 4\lambda^2 - 5\lambda - 2 = (\lambda + 1)(-\lambda^2 - 3\lambda - 2)$$
Le discriminant du trinôme $-\lambda^2 - 3\lambda - 2$ est $\Delta = 3^2 - 4(-1)(-2) = 9 - 8 = 1 > 0$.
Les racines sont :
$$\lambda_2 = \frac{3 - 1}{-2} = -1 \quad \text{et} \quad \lambda_3 = \frac{3 + 1}{-2} = -2$$
Ainsi, le polynôme caractéristique factorisé est :
$$P_A(\lambda) = -(\lambda + 1)^2 (\lambda + 2)$$
Les valeurs propres de $A$ sont donc $-1$ (valeur propre double) et $-2$ (valeur propre simple).

---

### Question 2
La matrice $A$ est-elle diagonalisable dans $\mathcal{M}_3(\mathbb{R})$ ? Justifier proprement.

---
*Corrigé :*
La valeur propre $\$-1\$' a pour ordre de multiplicité algébrique $2$. 
Déterminons l'espace propre associé $E_{-1} = \ker(A + I_3)$ :
$$A + I_3 = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ -2 & -5 & -3 \end{pmatrix}$$
Soit $V = \begin{pmatrix} x \\ y \\ z \end{pmatrix} \in \mathcal{M}_{3,1}(\mathbb{R})$. Le système s'écrit :
$$\begin{cases} x + y = 0 \\ y + z = 0 \\ -2x - 5y - 3z = 0 \end{cases} \implies \begin{cases} y = -x \\ z = -y = x \end{cases}$$
Ainsi, $E_{-1} = \text{Vect}\begin{pmatrix}  \begin{pmatrix} 1 \\ -1 \\ 1  \end{pmatrix} \right)$.
La dimension de l'espace propre $E_{-1}$ est $1$, ce qui est strictement inférieur à la multiplicité algébrique ($2$). 
Par conséquent, **la matrice $A$ n'est pas diagonalisable**.

---

### Question 3
Déterminer une base de Jordan ou utiliser la décomposition de Dunford de $A$ pour exprimer la solution générale du système homogène $(S_0)$.

---
*Corrigé :*
Puisque $A$ n'est pas diagonalisable, on cherche à exprimer $e^{tA}$. D'après le théorème de Cayley-Hamilton, le polynôme minimal de $A$ divise $P_A$ et a les mêmes racines, donc soit $(\lambda+1)(\lambda+2)$, soit $(\lambda+1)^2(\lambda+2)$. 
Testons $(A + I_3)(A + 2I_3)$ :
$$A + 2I_3 = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ -2 & -5 & -2 \end{pmatrix}$$
Multiplions par $(A + I_3)$ :
$$(A + I_3)(A + 2I_3) = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ -2 & -5 & -3 \end{pmatrix} \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ -2 & -5 & -2 \end{pmatrix} = \begin{pmatrix} 2 & 3 & 1 \\ -2 & -3 & -1 \\ 2 & 3 & 1 \end{pmatrix} \neq 0$$
Le polynôme minimal est donc $M_A(\lambda) = (\lambda+1)^2(\lambda+2)$.
On peut utiliser la décomposition de Dunford $A = D + N$, ou construire une base de Jordan. Soit un vecteur $E_3 = \begin{pmatrix} x_3 \\ y_3 \\ z_3 \end{pmatrix}$ tel que $(A + I_3)E_3 = V = \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}$.
$$\begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ -2 & -5 & -3 \end{pmatrix} \begin{pmatrix} x_3 \\ y_3 \\ z_3 \end{pmatrix} = \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix} \implies \begin{cases} x_3 + y_3 = 1 \\ y_3 + z_3 = -1 \\ -2x_3 - 5y_3 - 3z_3 = 1 \end{cases}$$
En posant $x_3 = 0$, on obtient $y_3 = 1$ et $z_3 = -2$. On vérifie la troisième ligne : $-2(0) - 5(1) - 3(-2) = -5 + 6 = 1$ (ce qui convient).
La solution générale du système homogène s'écrit sous la forme :
$$X(t) = \left( \alpha e^{-t} + \beta t e^{-t} \right) \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix} + \beta e^{-t} \begin{pmatrix} 0 \\ 1 \\ -2 \end{pmatrix} + \gamma e^{-2t} V_{-2}$$
où $V_{-2}$ est un vecteur propre associé à $\lambda = -2$ (que l'on trouve égal à $\begin{pmatrix} 1 \\ -2 \\ 4 \end{pmatrix}$ par calcul direct) et $(\alpha, \beta, \gamma) \in \mathbb{R}^3$.

---

## II. Étude d'un système avec second membre périodique

On considère à présent le système avec second membre :
$$(S) \quad X'(t) = A X(t) + B(t)$$
où $B : \mathbb{R} \to \mathcal{M}_{3,1}(\mathbb{R})$ est une fonction continue, $2\pi$-périodique, définie par :
$$B(t) = \begin{pmatrix} \cos(t) \\ 0 \\ 0 \end{pmatrix}$$

### Question 4
Justifier l'existence et l'unicité d'une solution $2\pi$-périodique à $(S)$.

---
*Corrigé :*
Les valeurs propres de $A$ sont $-1$ et $-2$. Aucune d'elles n'est de la forme $ik$ avec $k \in \mathbb{Z}$ (car leurs parties réelles sont strictement négatives). 
Par conséquent, l'opérateur linéaire $X \mapsto X' - AX$ est un automorphisme de l'espace des fonctions continues et $2\pi$-périodiques de classe $\mathcal{C}^1$. 
D'après le théorème de Duhamel et l'étude spectrale, **il existe une unique solution $2\pi$-périodique** à $(S)$.

---

### Question 5
À l'aide de la méthode des nombres complexes (ou par analyse harmonique en série de Fourier), déterminer cette solution $2\pi$-périodique $X_p(t)$.

> **Indice :** Chercher une solution sous la forme $\text{Re}\left( U e^{it} \right)$ avec $U \in \mathcal{M}_{3,1}(\mathbb{C})$.

---
*Corrigé :*
On cherche une solution sous la forme complexe $X_c(t) = U e^{it}$ avec $U = \begin{pmatrix} u_1 \\ u_2 \\ u_3 \end{pmatrix} \in \mathbb{C}^3$, associée au second membre complexe $B_c(t) = \begin{pmatrix} e^{it} \\ 0 \\ 0 \end{pmatrix}$.
En injectant $X_c$ dans l'équation $X' = AX + B_c e^{it}$ (en identifiant $B(t) = \text{Re}(B_c(t) e^{it})$) :
$$i U e^{it} = A U e^{it} + \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} e^{it}$$
En simplifiant par $e^{it}$ (pour tout $t$), on obtient le système linéaire à coefficients complexes :
$$(A - i I_3) U = \begin{pmatrix} -1 \\ 0 \\ 0 \end{pmatrix}$$
Explicitons la matrice $A - i I_3$ :
$$A - i I_3 = \begin{pmatrix} -i & 1 & 0 \\ 0 & -i & 1 \\ -2 & -5 & -4-i \end{pmatrix}$$
Le système s'écrit :
$$\begin{cases} -i u_1 + u_2 = -1 \\ -i u_2 + u_3 = 0 \\ -2u_1 - 5u_2 - (4+i)u_3 = 0 \end{cases}$$
De la première équation, on tire $u_2 = i u_1 - 1$.
De la deuxième, $u_3 = i u_2 = i(i u_1 - 1) = -u_1 - i$.
Reportons $u_2$ et $u_3$ dans la troisième équation :
$$-2u_1 - 5(i u_1 - 1) - (4+i)(-u_1 - i) = 0$$
$$-2u_1 - 5i u_1 + 5 + (4+i)(u_1 + i) = 0$$
Développons le second terme :
$$(4+i)(u_1 + i) = 4u_1 + 4i + i u_1 + i^2 = 4u_1 + 4i + i u_1 - 1 = (4+i)u_1 - 1 + 4i$$
L'équation devient alors :
$$-2u_1 - 5i u_1 + 5 + (4+i)u_1 - 1 + 4i = 0$$
$(-2 + 4 + i)u_1 + (-5i + i)u_1 + 4 + 4i = 0 \implies (2 - 4i)u_1 + 4 + 4i = 0$$
On en déduit :
$$u_1 = \frac{-4 - 4i}{2 - 4i} = \frac{-2 - 2i}{1 - 2i}$$
Amplifions par le conjugué du dénominateur ($1 + 2i$) :
$$u_1 = \frac{(-2 - 2i)(1 + 2i)}{1^2 + 2^2} = \frac{-2 - 4i - 2i - 4i^2}{5} = \frac{-2 - 6i + 4}{5} = \frac{2 - 6i}{5} = \frac{2}{5} - \frac{6}{5}i$$
Calculons $u_2$ :
$$u_2 = i\left(\frac{2}{5} - \frac{6}{5}i\right) - 1 = \frac{2}{5}i + \frac{6}{5} - 1 = \frac{1}{5} + \frac{2}{5}i$$
Calculons $u_3$ :
$$u_3 = -u_1 - i = -\left(\frac{2}{5} - \frac{6}{5}i\right) - i = -\frac{2}{5} + \frac{1}{5}i$$
La solution particulière réelle est la partie réelle de $U e^{it}$ :
$$X_p(t) = \text{Re}\begin{pmatrix}  \begin{pmatrix} \frac{2}{5} - \frac{6}{5}i \\ \frac{1}{5} + \frac{2}{5}i \\ -\frac{2}{5} + \frac{1}{5}i  \end{pmatrix} (\cos(t) + i \sin(t)) \right)$$
En développant pour la première composante :
$$x_p(t) = \frac{2}{5}\cos(t) + \frac{6}{5}\sin(t)$$

---

## III. Analyse critique et Conclusion

### Question 6
Sans refondre les calculs, analyser la pertinence physique ou cinématique du résultat obtenu concernant l'atténuation du signal d'entrée $B(t)$.

---
*Corrigé :*
Le système différentiel modélise un système linéaire invariant (SLI). Le signal d'entrée $B(t)$ est une sinusoïde pure de pulsation $\omega = 1\text{ rad/s}$. 
La solution particulière $X_p(t)$ est elle aussi sinusoïdale de même pulsation, ce qui est une propriété fondamentale des SLI (filtrage linéaire). 
On observe un déphasage entre l'entrée et la sortie, ainsi qu'une atténuation de l'amplitude liée à la matrice de transfert de résolvante $(A - i I_3)^{-1}$. Le module de la matrice inverse traduit l'amortissement du système dynamique décrit par les valeurs propres à parties réelles négatives.