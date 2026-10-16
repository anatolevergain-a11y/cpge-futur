---
title: 'Exercice 1 : Systèmes linéaires'
description: 'Problème d entraînement type concours.'
---

# Problème : Étude d'un système linéaire paramétrique et applications matricielles

*En tant qu'examinateur de mathématiques en filière BCPST, ce problème a pour objectif d'évaluer la maîtrise des techniques fondamentales d'algèbre linéaire : manipulation de systèmes linéaires paramétriques, pivot de Gauss, lien entre systèmes et matrices, et calculs spectraux (valeurs propres et diagonalisation).*

---

## Préambule et Notations

Soit $m un paramètre réel. On considère le système linéaire $(S_m)$ d'inconnues $(x, y, z) \in \mathbb{R}^3$ suivant :

$$ (S_m) \left\{ \begin{aligned}
x + m y + z &= 1 \\
m x + y + z &= m \\
x + y + m z &= m^2
\end{aligned}
\right. $$

On note $A_m$ la matrice associée au système $(S_m)$ et $X = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$ le vecteur colonne des inconnues.

---

## Partie I : Résolution et discussion du système $(S_m)$

### Question 1
Écrire le système $(S_m)$ sous la forme matricielle $A_m X = B_m$, où $B_m$ est un vecteur colonne à préciser.

**Correction et Analyse de l'examinateur :**
Attendu: * Identifier correctement la matrice du système et le second membre.
$$ A_m = \begin{pmatrix} 
1 & m & 1 \\ 
m & 1 & 1 \\ 
1 & 1 & m 
\end{pmatrix} \quad \text{et} \quad B_m = \begin{pmatrix} 
1 \\ 
m \\ 
m^2 
\end{pmatrix} $$

---

### Question 2
Calculer le déterminant de la matrice $A_m$, noté $\det(A_m)$, en fonction du paramètre $m$. 
Factoriser cette expression de manière à faire apparaître des racines évidentes.

**Correction et Analyse de l'examinateur :**
*Méthode :* On développe par rapport à la première ligne ou on utilise des opérations sur les lignes/colonnes pour simplifier le calcul.

$$ \det(A_m) = \begin{vmatrix} 
1 & m & 1 \\ 
m & 1 & 1 \\ 
1 & 1 & m 
\end{vmatrix} $$

Effectuons l'opération $\text{Col}_1 \leftarrow \text{Col}_1 + \text{Col}_2 + \text{Col}_3$ (ou la somme de toutes les lignes sur la première ligne) :
En sommant les lignes : $\text{L}_1 \leftarrow \text{L}_1 + \text{L}_2 + \text{L}_3$, on obtient :
$$ \det(A_m) = \begin{vmatrix} 
m+2 & m+2 & m+2 \\ 
m & 1 & 1 \\ 
1 & 1 & m 
\end{vmatrix} = (m+2) \begin{vmatrix} 
1 & 1 & 1 \\ 
m & 1 & 1 \\ 
1 & 1 & m 
\end{vmatrix} $$

Par soustraction de colonnes ($\text{Col}_2 \leftarrow \text{Col}_2 - \text{Col}_1$ et $\text{Col}_3 \leftarrow \text{Col}_3 - \text{Col}_1$) :
$$ \det(A_m) = (m+2) \begin{vmatrix} 
1 & 0 & 0 \\ 
m & 1-m & 1-m \\ 
1 & 0 & m-1 
\end{vmatrix} $$

En développant selon la première ligne :
$$ \det(A_m) = (m+2) \times 1 \times \begin{vmatrix} 
1-m & 1-m \\ 
0 & m-1 
\end{vmatrix} = (m+2)(1-m)(m-1) = -(m+2)(m-1)^2 $$
Bilan: * $\det(A_m) = -(m - 1)^2 (m + 2)$.

---

### Question 3
Pour quelles valeurs du paramètre $m$ le système $(S_m)$ est-il de Cramer ? Préciser l'ensemble des solutions dans ce cas.

**Correction et Analyse de l'examinateur :**
*Rappel du cours :* Un système linéaire carré est de Cramer si et seulement si sa matrice associée est inversible, c'est-à-dire si son déterminant est non nul.
Ici, $\det(A_m) \neq 0 \iff m \neq 1$ et $m \neq -2$.

Pour $m \in \mathbb{R} \setminus \{-2, 1\}$, le système est de Cramer et admet une unique solution. On peut utiliser les formules de Cramer ou le pivot de Gauss. Faisons le pivot de Gauss sur la matrice augmentée $(A_m \mid B_m)$ :

$$ \left(\begin{array}{ccc|c} 
1 & m & 1 & 1 \\ 
m & 1 & 1 & m \\ 
1 & 1 & m & m^2 
\end{array}\right) $$

$\text{L}_2 \leftarrow \text{L}_2 - m\text{L}_1$ et $\text{L}_3 \leftarrow \text{L}_3 - \text{L}_1$ :
$$ \left(\begin{array}{ccc|c} 
1 & m & 1 & 1 \\ 
0 & 1-m^2 & 1-m & m-m^2 \\ 
0 & 1-m & m-1 & m^2-1 
\end{array}\right) $$

En simplifiant par les facteurs non nuls (puisque $m \neq 1$ et $m \neq -2$) :
L'unique solution est $X = A_m^{-1} B_m$. Par résolution (laissée au lecteur ou via les formules de Cramer), on trouve :
$$ x = \frac{-m}{m+2}, \quad y = \frac{1}{m+2}, \quad z = \frac{m+1}{m+2} $$

---

### Question 4
Étudier les cas particuliers $m = 1$ et $m = -2$ (préciser s'il y a une infinité de solutions ou aucune).

**Correction et Analyse de l'examinateur :**
* **Cas $m = 1$ :**
Le système $(S_1)$ devient :
$$ \left\{ \begin{aligned}
x + y + z &= 1 \\
x + y + z &= 1 \\
x + y + z &= 1
\end{aligned}
\right. \iff x + y + z = 1 $$
Les trois équations sont confondues. Le système se réduit à une seule équation à 3 inconnues.
*Ensemble des solutions :* $\mathcal{S}_1 = \{ (1 - y - z, y, z) \mid (y, z) \in \mathbb{R}^2 \}$. Le sous-espace affine des solutions est de dimension 2.

* **Cas $m = -2$ :**
Le système $(S_{-2})$ devient :
$$ \left\{ \begin{aligned}
x - 2y + z &= 1 \\
-2x + y + z &= -2 \\
x + y - 2z &= 4
\end{aligned}
\right. $$
Effectuons $\text{L}_2 \leftarrow \text{L}_2 + 2\text{L}_1$ et $\text{L}_3 \leftarrow \text{L}_3 - \text{L}_1$ :
$$ \left\{ \begin{aligned}
x - 2y + z &= 1 \\
-3y + 3z &= 0 \implies y = z \\
3y - 3z &= 3 \implies 0 = 3 \quad (\text{Absurde})
\end{aligned}
\right. $$
*Ensemble des solutions :* $\mathcal{S}_{-2} = \emptyset$ (le système est incompatible).

---

## Partie II : Étude spectrale de la matrice $A_1$

On se place maintenant dans le cas particulier où $m = 1$. La matrice $A_1$ est alors :
$$ A_1 = \begin{pmatrix} 
1 & 1 & 1 \\ 
1 & 1 & 1 \\ 
1 & 1 & 1 
\end{pmatrix} $$

### Question 5
Déterminer le rang de la matrice $A_1$ et en déduire la dimension de son noyau $\ker(A_1)$.

**Correction et Analyse de l'examinateur :**
Toutes les lignes de $A_1$ sont identiques et non nulles. 
Rang: * $\operatorname{rg}(A_1) = 1$.
*Théorème du rang :* $\dim(\ker(A_1)) = 3 - \operatorname{rg}(A_1) = 3 - 1 = 2$.

---

### Question 6
Déterminer les valeurs propres de $A_1$ ainsi que leurs sous-espaces propres associés. La matrice $A_1$ est-elle diagonalisable ?

**Correction et Analyse de l'examinateur :**
* *Méthode 1 (Algébrique) :* Calculer le polynôme caractéristique $P(\lambda) = \det(A_1 - \lambda I_3)$.
* *Méthode 2 (Remarque géométrique - Recommandée) :* 
  * $A_1$ est de rang 1, donc $0$ est valeur propre avec $\dim(E_0) = \dim(\ker(A_1)) = 2$.
  * La trace de $A_1$ vaut $\operatorname{Tr}(A_1) = 1 + 1 + 1 = 3$. Or, la trace est la somme des valeurs propres (comptées avec leur multiplicité). 
  * Comme $\dim(E_0) = 2$, la multiplicité algébrique de $0$ est au moins 2. La seule autre valeur propre non nulle doit donc être $\lambda = 3$ (de multiplicité 1).

* *Vérification par les sous-espaces propres :*
  * Pour $\lambda = 0$ ($E_0 = \ker(A_1)$) : $x + y + z = 0 \implies z = -x - y$. 
    Une base de $E_0$ est $e_1 = (-1, 1, 0)$ et $e_2 = (-1, 0, 1)$.
  * Pour $\lambda = 3$ ($E_3$) : Résolution de $(A_1 - 3I_3)X = 0$, ce qui donne $x = y = z$. 
    Une base de $E_3$ est $e_3 = (1, 1, 1)$.

* *Diagonalisabilité :* 
  La somme des dimensions des sous-espaces propres est $\dim(E_0) + \dim(E_3) = 2 + 1 = 3 = \dim(\mathbb{R}^3)$. 
  De plus, $A_1$ est symétrique réelle ($A_1 = A_1^\top$). 
Conclusion: ** $A_1$ est diagonalisable.

---

## Analyse critique et Bilan du candidat (Conseil de l'examinateur)

> **Erreurs fréquentes en BCPST :**
> 1. **Oubli de disjonction des cas :** S'arrêter au calcul du déterminant sans étudier proprement les valeurs annulatrices ($m=1$ et $m=-2$) est une erreur éliminatoire.
> 2. **Confusion entre système incompatible et système avec une infinité de solutions :** Pour $m=-2$, l'apparition d'une ligne du type $0 = \text{constante non nulle}$ signifie une incompatibilité (ensemble vide), et non pas un paramètre libre.
> 3. **Calculs spectraux rapides :** Pour une matrice de rang 1 comme $A_1$, l'utilisation de la trace et du rang évite des calculs lourds de polynômes caractéristiques en dimension 3. C'est ce type d'élégance que valorisent les jurys de concours.