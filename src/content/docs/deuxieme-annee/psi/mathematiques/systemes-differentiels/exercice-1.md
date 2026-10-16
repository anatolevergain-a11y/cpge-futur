---
title: 'Exercice 1 : Systèmes linéaires à coefficients constants'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Stabilité et dynamique d'un système linéaire à coefficients constants couplé

## Énoncé

On considère un système physique modélisé par un vecteur d'état $X(t) = \begin{pmatrix} x_1(t) \\ x_2(t) \\ x_3(t) \end{pmatrix} \in \mathcal{M}_{3,1}(\mathbb{R})$ régi par l'équation différentielle linéaire homogène à coefficients constants :
$$ X'(t) = A X(t) $$
où la matrice $A$ est définie par :
$$ A = \begin{pmatrix} 
-2 & 1 & 0 \\ 
1 & -3 & 1 \\ 
0 & 1 & -2 
\end{pmatrix} $$

L'objectif de ce problème est d'étudier la solution de ce système pour une condition initiale donnée $X(0) = X_0$, d'analyser le comportement asymptotique du système, et enfin d'exercer un regard critique sur la pertinence de ce modèle mathématique face à des phénomènes physiques réels.

---

## Questions

1. **Étude spectrale de la matrice $A$**
   a. Calculer le polynôme caractéristique $\chi_A(\lambda) = \det(A - \lambda I_3)$ sous une forme factorisée.
   b. Déterminer les valeurs propres de $A$ et préciser leur multiplicité.
   c. Pour chaque valeur propre, déterminer le sous-espace propre associé en exhibant une base. La matrice $A$ est-elle diagonalisable ?

2. **Résolution du système différentiel**
   a. Écrire la solution générale du système $X'(t) = A X(t)$ dans la base des vecteurs propres (ou sous forme matricielle avec l'exponentielle de matrice).
   b. Expliciter les fonctions $x_1(t)$, $x_2(t)$ et $x_3(t)$ pour la condition initiale $X_0 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$.

3. **Analyse qualitative et énergétique**
   a. Déterminer la limite de $X(t)$ lorsque $t \to +\infty$ quelle que soit la condition initiale $X_0$. Le système est-il dit *asymptotiquement stable* ?
   b. On introduit la fonction d'énergie $E(t) = \frac{1}{2} \|X(t)\|^2 = \frac{1}{2} (x_1(t)^2 + x_2(t)^2 + x_3(t)^2)$. Calculer la dérivée temporelle $E'(t)$ en fonction de $X(t)$ et de la matrice $A$. Signaler le signe de $E'(t)$ pour $X(t) \neq 0$.

4. **Analyse critique et limites du modèle**
   a. Dans le cadre de la modélisation de transferts thermiques ou de réseaux électriques, discuter de la pertinence de l'hypothèse de coefficients constants.
   b. Quel est l'impact d'une perturbation non linéaire négligée (du type $\varepsilon x_i^3$) sur la validité à long terme des conclusions obtenues ?

---

## Pistes et indications

* **Q1 :** Développez le déterminant par rapport à la première ligne ou première colonne, ou remarquez la structure tridiagonale symétrique de $A$. Pensez à factoriser par $\lambda + 2$.
* **Q2 :** Comme la matrice est symétrique réelle, le théorème spectral garantit qu'elle est diagonalisable dans une base orthonormée. Utilisez $X(t) = \exp(At)X_0$.
* **Q3 :** Pour l'étude de l'énergie, calculez $E'(t) = X'(t)^T X(t) = X(t)^T A X(t)$ et utilisez le caractère défini négatif (ou négatif) de la matrice $A$ (étudiez les valeurs propres ou la forme quadratique associée).
* **Q4 :** Pensez aux non-linéarités géométriques ou physiques (saturation, dépendance des résistances/capacités ou coefficients de conductivité avec la température).

---

## Corrigé pas à pas

### 1. Étude spectrale de la matrice $A$
a. Calculons le polynôme caractéristique :
$$ \chi_A(\lambda) = \begin{vmatrix} 
-2-\lambda & 1 & 0 \\ 
1 & -3-\lambda & 1 \\ 
0 & 1 & -2-\lambda 
\end{vmatrix} $$
En développant par rapport à la première ligne :
$$ \chi_A(\lambda) = (-2-\lambda) \begin{vmatrix} -3-\lambda & 1 \\ 1 & -2-\lambda \end{vmatrix} - 1 \begin{vmatrix} 1 & 1 \\ 0 & -2-\lambda \end{vmatrix} $$
Calculons les déterminants 2x2 :
$$ \begin{vmatrix} -3-\lambda & 1 \\ 1 & -2-\lambda \end{vmatrix} = (-3-\lambda)(-2-\lambda) - 1 = \lambda^2 + 5\lambda + 6 - 1 = \lambda^2 + 5\lambda + 5 $$
$$ \begin{vmatrix} 1 & 1 \\ 0 & -2-\lambda \end{vmatrix} = -2-\lambda $$
Ainsi :
$$ \chi_A(\lambda) = (-2-\lambda)(\lambda^2 + 5\lambda + 5) - (-2-\lambda) $$
$$ \chi_A(\lambda) = (-2-\lambda) \left[ \lambda^2 + 5\lambda + 5 - 1 \right] = (-2-\lambda)(\lambda^2 + 5\lambda + 4) $$
Le trinôme $\lambda^2 + 5\lambda + 4$ a pour racines évidents $\lambda = -1$ et $\lambda = -4$. Donc :
$$ \chi_A(\lambda) = -(\lambda + 2)(\lambda + 1)(\lambda + 4) $$

b. Les valeurs propres de $A$ sont les racines de $\chi_A(\lambda) = 0$, soit :
* $\lambda_1 = -1$ (de multiplicité 1)
* $\lambda_2 = -2$ (de multiplicité 1)
* $\lambda_3 = -4$ (de multiplicité 1)

c. Déterminons les sous-espaces propres :
* Pour $\lambda_1 = -1$, on résout $(A + I_3)X = 0$ :
  $\begin{pmatrix} -1 & 1 & 0 \\ 1 & -2 & 1 \\ 0 & 1 & -1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = 0 \implies x_1 = x_2 = x_3$.
  Un vecteur propre associé est $V_1 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$.
* Pour $\lambda_2 = -2$, on résout $(A + 2I_3)X = 0$ :
  $\begin{pmatrix} 0 & 1 & 0 \\ 1 & -1 & 1 \\ 0 & 1 & 0 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = 0 \implies x_2 = 0 \text{ et } x_1 + x_3 = 0$.
  Un vecteur propre associé est $V_2 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$.
* Pour $\lambda_3 = -4$, on résout $(A + 4I_3)X = 0$ :
  $\begin{pmatrix} 2 & 1 & 0 \\ 1 & 1 & 1 \\ 0 & 1 & 2 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = 0 \implies 2x_1 + x_2 = 0 \text{ et } x_2 + 2x_3 = 0 \implies x_1 = x_3 = -\frac{1}{2}x_2$.
  Un vecteur propre associé est $V_3 = \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}$.

La matrice $A$ étant symétrique réelle, elle est orthogonalement diagonalisable (et donc diagonalisable).

---

### 2. Résolution du système différentiel
a. La solution générale s'écrit comme une combinaison linéaire des modes propres :
$$ X(t) = C_1 e^{-t} \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} + C_2 e^{-2t} \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} + C_3 e^{-4t} \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix} $$
où $(C_1, C_2, C_3) \in \mathbb{R}^3$ dépendent de la condition initiale.

b. Pour $X(0) = X_0 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$, on détermine $C_1, C_2, C_3$ en résolvant le système :
$$ C_1 \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} + C_2 \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} + C_3 \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} $$
Ce qui donne :
* $C_1 + C_2 + C_3 = 1$
* $C_1 - 2C_3 = 0 \implies C_1 = 2C_3$
* $C_1 - C_2 + C_3 = 1$

En sommant la 1ère et la 3ème ligne : $2C_1 + 2C_3 = 2 \implies C_1 + C_3 = 1$.
Comme $C_1 = 2C_3$, on a $3C_3 = 1 \implies C_3 = \frac{1}{3}$, d'où $C_1 = \frac{2}{3}$.
Puis $C_2 = 1 - C_1 - C_3 = 1 - \frac{2}{3} - \frac{1}{3} = 0$.

La solution est donc :
$$ X(t) = \frac{2}{3} e^{-t} \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} + \frac{1}{3} e^{-4t} \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix} $$
Soit sous forme coordonnée :
* $x_1(t) = \frac{2}{3}e^{-t} + \frac{1}{3}e^{-4t}$
* $x_2(t) = \frac{2}{3}e^{-t} - \frac{2}{3}e^{-4t}$
* $x_3(t) = \frac{2}{3}e^{-t} + \frac{1}{3}e^{-4t}$

---

### 3. Analyse qualitative et énergétique
a. Toutes les valeurs propres de $A$ ont des parties réelles strictement négatives ($\text{Re}(\lambda_i) \in \{-1, -2, -4\}$). Par conséquent, pour toute condition initiale $X_0$, on a :
$$ \lim_{t \to +\infty} X(t) = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} $$
Le système est dit **asymptotiquement stable**.

b. Calculons la dérivée de l'énergie $E(t) = \frac{1}{2} X(t)^T X(t)$ :
$$ E'(t) = \frac{1}{2} \left( X'(t)^T X(t) + X(t)^T X'(t) \right) = X(t)^T X'(t) = X(t)^T A X(t) $$
Puisque $A$ est une matrice symétrique dont les valeurs propres sont toutes négatives ($\lambda_{\max} = -1 < 0$), la forme quadratique associée est strictement négative. Ainsi, pour tout $X(t) \neq 0$ :
$$ X(t)^T A X(t) \leq \lambda_{\max} \|X(t)\|^2 = - \|X(t)\|^2 < 0 $$
L'énergie du système décroît strictement au cours du temps (dissipation), ce qui confirme la stabilité globale.

---

### 4. Analyse critique et limites du modèle

a. **Limites de l'hypothèse de coefficients constants :**
En pratique (en thermique ou en électronique par exemple), les coefficients de la matrice $A$ traduisent des grandeurs physiques (résistances, capacités, coefficients d'échange thermique). Or, ces grandeurs dépendent souvent de la température ou d'autres variables d'état du système. Supposer $A$ constante revient à faire une **approximation de linéarisation autour d'un point d'équilibre** et n'est valide que pour de *petites variations* des variables. Si les amplitudes de $X(t)$ sont grandes, les paramètres varient et le modèle linéaire perd en précision.

b. **Impact des termes non linéaires négligés :**
Si l'on considère un modèle perturbé du type $X'(t) = A X(t) + F(X(t))$ où $\|F(X)\| = o(\|X\|)$ au voisinage de $0$, le théorème de Lyapunov (linéarisation) garantit que la stabilité asymptotique locale est conservée puisque les valeurs propres de $A$ ont toutes une partie réelle strictement négative. En revanche, pour des états éloignés de l'équilibre, les non-linéarités peuvent engendrer des phénomènes complexes (cycles limités, bifurcations, emballement thermique) totalement invisibles à travers l'étude du système linéaire pur.