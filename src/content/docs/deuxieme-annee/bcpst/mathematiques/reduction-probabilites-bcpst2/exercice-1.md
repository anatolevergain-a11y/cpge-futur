---
title: 'Exercice 1 : Chaînes de Markov'
description: 'Problème d entraînement type concours.'
---

# Problème : Étude d'une chaîne de Markov à temps discret et application à la réduction de matrices

**Matière :** Mathématiques  
**Filière :** BCPST  
**Thème :** Réduction des endomorphismes et Probabilités (Chaînes de Markov)  

---

## Introduction et motivations

Les chaînes de Markov modélisent des systèmes dynamiques dont l'évolution future ne dépend que de l'état présent et non du passé (propriété markovienne). En biologie et géologie (domaines phares de la filière BCPST), elles permettent par exemple de modéliser l'évolution de fréquences alléliques, la succession de faciès sédimentaires ou encore l'évolution de peuplements forestiers. 

Ce problème propose d'étudier un modèle à trois états couplant l'outil probabiliste et l'algebre linéaire (diagonalisation, puissances de matrices).

---

## Énoncé du problème

On considère un système pouvant se trouver dans trois états notés $E_1$, $E_2$ et $E_3$. 
À chaque instant $n \in \mathbb{N}$, le système est décrit par un vecteur ligne de probabilité $V_n = (p_n^{(1)}, p_n^{(2)}, p_n^{(3)})$, où $p_n^{(i)}$ représente la probabilité que le système soit dans l'état $E_i$ à l'instant $n$. On a donc $p_n^{(1)} + p_n^{(2)} + p_n^{(3)} = 1$.

L'évolution du système est régie par la relation de récurrence :
$$V_{n+1} = V_n M$$
où $M$ est la matrice de transition stochastique définie par :
$$M = \begin{pmatrix} 
0.5 & 0.5 & 0 \\
0.2 & 0.5 & 0.3 \\
0 & 0.5 & 0.5 
\end{pmatrix}$$

---

## Partie I : Propriétés générales et mise en place

### Question 1
Vérifier que la matrice $M$ est une matrice stochastique. Préciser la signification probabiliste des coefficients de $M$.
Correction: **  
Une matrice carrée est dite stochastique si ses coefficients sont des nombres réels de l'intervalle $[0, 1]$ et si la somme des coefficients de chaque ligne est égale à $1$.
* Tous les coefficients de $M$ appartiennent à $[0, 1]$.
* Vérifions la somme des lignes :
  * Ligne 1 : $0.5 + 0.5 + 0 = 1$
  * Ligne 2 : $0.2 + 0.5 + 0.3 = 1$
  * Ligne 3 : $0 + 0.5 + 0.5 = 1$

La matrice $M$ est donc bien une matrice stochastique.  
**Interprétation probabiliste :** Le coefficient $m_{i,j}$ situé à la $i$-ème ligne et la $j$-ème colonne de $M$ représente la probabilité conditionnelle de passer de l'état $E_i$ à l'état $E_j$ en une unité de temps : $m_{i,j} = P(\text{État}_t = E_j \mid \text{État}_{t-1} = E_i)$.

---

### Question 2
Montrer par récurrence que pour tout $n \in \mathbb{N}$, $V_n = V_0 M^n$. Si l'état initial est $V_0 = (1, 0, 0)$, calculer explicitement $V_1$ et $V_2$.
Correction: **  
* *Récurrence :*
  * **Initialisation :** Pour $n=0$, $V_0 = V_0 M^0 = V_0 I_3$. C'est vrai.
  * **Hérédité :** Supposons la propriété vraie à un rang $n \in \mathbb{N}$ : $V_n = V_0 M^n$.  
    Alors, par définition, $V_{n+1} = V_n M$. En utilisant l'hypothèse de récurrence : $V_{n+1} = (V_0 M^n) M = V_0 M^{n+1}$.  
    La propriété est donc héréditaire.
  * **Conclusion :** $\forall n \in \mathbb{N}, \, V_n = V_0 M^n$.

* *Calculs pour $V_0 = (1, 0, 0)$ :*
  $$V_1 = V_0 M = \begin{pmatrix} 1 & 0 & 0 \end{pmatrix} \begin{pmatrix} 0.5 & 0.5 & 0 \\ 0.2 & 0.5 & 0.3 \\ 0 & 0.5 & 0.5 \end{pmatrix} = \begin{pmatrix} 0.5 & 0.5 & 0 \end{pmatrix}$$
  $$V_2 = V_1 M = \begin{pmatrix} 0.5 & 0.5 & 0 \end{pmatrix} \begin{pmatrix} 0.5 & 0.5 & 0 \\ 0.2 & 0.5 & 0.3 \\ 0 & 0.5 & 0.5 \end{pmatrix}$$
  $$V_2 = \left( (0.5 \times 0.5 + 0.5 \times 0.2 + 0), \, (0.5 \times 0.5 + 0.5 \times 0.5 + 0), \, (0 + 0.5 \times 0.3 + 0) \right) = \begin{pmatrix} 0.35 & 0.50 & 0.15 \end{pmatrix}$$

---

## Partie II : Réduction de la matrice $M$

Pour déterminer le comportement à long terme de la chaîne de Markov, nous allons réduire la matrice $M$.

### Question 3
Déterminer les valeurs propres de la matrice $M$.
Correction: **  
Les valeurs propres $\lambda$ de $M$ sont les racines du polynôme caractéristique $\chi_M(\lambda) = \det(M - \lambda I_3)$.
$$\chi_M(\lambda) = \det \begin{pmatrix} 
0.5 - \lambda & 0.5 & 0 \\
0.2 & 0.5 - \lambda & 0.3 \\
0 & 0.5 & 0.5 - \lambda 
\end{pmatrix}$$

Calculons ce déterminant en développant par rapport à la première ligne :
$$\chi_M(\lambda) = (0.5 - \lambda) \begin{vmatrix} 0.5 - \lambda & 0.3 \\ 0.5 & 0.5 - \lambda \end{vmatrix} - 0.5 \begin{vmatrix} 0.2 & 0.3 \\ 0 & 0.5 - \lambda \end{vmatrix}$$

$$\chi_M(\lambda) = (0.5 - \lambda) \left( (0.5 - \lambda)^2 - 0.15 \right) - 0.5 \left( 0.2(0.5 - \lambda) \right)$$
$$\chi_M(\lambda) = (0.5 - \lambda) \left( 0.25 - \lambda + \lambda^2 - 0.15 - 0.1 \right)$$
$$\chi_M(\lambda) = (0.5 - \lambda) (\lambda^2 - \lambda) = \lambda (\lambda - 1) (0.5 - \lambda)$$

Les valeurs propres de $M$ sont donc :
$$\lambda_1 = 1, \quad \lambda_2 = 0.5, \quad \lambda_3 = 0$$

---

### Question 4
La matrice $M$ est-elle diagonalisable ? Préciser les sous-espaces propres associés.
Correction: **  
La matrice $M$ est d'ordre $3$ et possède $3$ valeurs propres distinctes ($\lambda_1 = 1, \lambda_2 = 0.5, \lambda_3 = 0$). D'après le cours de BCPST, **toute matrice carrée d'ordre $n$ possédant $n$ valeurs propres distinctes est diagonalisable**.

Déterminons les sous-espaces propres $E_\lambda = \ker(M - \lambda I_3)$ :
1. **Pour $\lambda_1 = 1$ ($E_1$) :**  
   Soit $X = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$. $MX = X \iff \begin{cases} -0.5x + 0.5y = 0 \\ 0.2x - 0.5y + 0.3z = 0 \\ 0.5y - 0.5z = 0 \end{cases} \iff x = y = z$.  
   Une base de $E_1$ est donnée par le vecteur coller $C_1 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$.

2. **Pour $\lambda_2 = 0.5$ ($E_{0.5}$) :**  
   $MX = 0.5X \iff \begin{cases} 0.5y = 0 \\ 0.2x + 0.3z = 0 \\ 0.5y = 0 \end{cases} \iff y = 0 \text{ et } z = -\frac{2}{3}x$.  
   En posant $x = 3$, on obtient le vecteur $C_2 = \begin{pmatrix} 3 \\ 0 \\ -2 \end{pmatrix}$.

3. **Pour $\lambda_3 = 0$ ($E_0$) :**  
   $MX = 0 \iff \begin{cases} 0.5x + 0.5y = 0 \\ 0.2x + 0.5y + 0.3z = 0 \\ 0.5y + 0.5z = 0 \end{cases} \iff x = -y \text{ et } z = -y$.  
   En posant $y = 1$, on obtient le vecteur $C_3 = \begin{pmatrix} -1 \\ 1 \\ -1 \end{pmatrix}$.

---

## Partie III : Comportement asymptotique

### Question 5
Écrire la relation de passage liant $M$, la matrice de passage $P$ (dont les colonnes sont les vecteurs propres précédents) et la matrice diagonale $D$. Calculer $P^{-1}$ (admis ou calculé rapidement).
Correction: **  
Soit $P = \begin{pmatrix} 1 & 3 & -1 \\ 1 & 0 & 1 \\ 1 & -2 & -1 \end{pmatrix}$ et $D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0.5 & 0 \\ 0 & 0 & 0 \end{pmatrix}$.  
On a la relation : $M = P D P^{-1}$.

Par calculs usuels (inversion par pivot de Gauss ou formules des cofacteurs), on trouve :
$$P^{-1} = \frac{1}{10} \begin{pmatrix} 2 & 5 & 3 \\ 2 & 0 & -2 \\ -2 & 5 & -3 \end{pmatrix}$$

---

### Question 6
Calculer $\lim_{n \to +\infty} M^n$ et en déduire la limite du vecteur $V_n$ lorsque $n$ tend vers $+\infty$, indépendamment de l'état initial $V_0 = (p_0^{(1)}, p_0^{(2)}, p_0^{(3)})$.
Correction: **  
Par récurrence immédiate, on a $M^n = P D^n P^{-1}$.  
La matrice $D^n$ s'écrit :
$$D^n = \begin{pmatrix} 1^n & 0 & 0 \\ 0 & (0.5)^n & 0 \\ 0 & 0 & 0^n \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & (0.5)^n & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

Lorsque $n \to +\infty$, $(0.5)^n \to 0$. Ainsi :
$$\lim_{n \to +\infty} D^n = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

Par conséquent :
$$\lim_{n \to +\infty} M^n = P \left( \lim_{n \to +\infty} D^n \right) P^{-1}$$
$$\lim_{n \to +\infty} M^n = \begin{pmatrix} 1 & 3 & -1 \\ 1 & 0 & 1 \\ 1 & -2 & -1 \end{pmatrix} \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \frac{1}{10} \begin{pmatrix} 2 & 5 & 3 \\ 2 & 0 & -2 \\ -2 & 5 & -3 \end{pmatrix}$$

En effectuant le produit matriciel (la première colonne de $P$ multipliée par la première ligne de $P^{-1}$) :
$$\lim_{n \to +\infty} M^n = \frac{1}{10} \begin{pmatrix} 
2 & 5 & 3 \\
2 & 5 & 3 \\
2 & 5 & 3 
\end{pmatrix}$$

**Limite du vecteur $V_n$ :**  
Puisque $V_n = V_0 M^n$ et que la somme des composantes de $V_0$ vaut $1$ (notons $V_0 = (p_0^{(1)}, p_0^{(2)}, p_0^{(3)})$ avec $p_0^{(1)} + p_0^{(2)} + p_0^{(3)} = 1$) :
$$\lim_{n \to +\infty} V_n = V_0 \left( \lim_{n \to +\infty} M^n \right) = \begin{pmatrix} p_0^{(1)} & p_0^{(2)} & p_0^{(3)} \end{pmatrix} \frac{1}{10} \begin{pmatrix} 2 & 5 & 3 \\ 2 & 5 & 3 \\ 2 & 5 & 3 \end{pmatrix}$$
$$\lim_{n \to +\infty} V_n = \frac{1}{10} (p_0^{(1)} + p_0^{(2)} + p_0^{(3)}) \begin{pmatrix} 2 & 5 & 3 \end{pmatrix}$$
Puisque $V_0$ est un vecteur de probabilité, $p_0^{(1)} + p_0^{(2)} + p_0^{(3)} = 1$, d'où :
$$\lim_{n \to +\infty} V_n = \begin{pmatrix} 0.2 & 0.5 & 0.3 \end{pmatrix}$$

---

## Analyse critique et conclusion

1. **Stabilité de l'état limite :**  
   On observe que la limite obtenue, $V_\infty = (0.2, 0.5, 0.3)$, est **indépendante de l'état initial $V_0$**. C'est une propriété fondamentale des chaînes de Markov dites *irréductibles* et *apériodiques* (le système oublie son passé lointain).
2. **Vérification de cohérence :**  
   On peut vérifier que $V_\infty$ est un vecteur stationnaire en calculant $V_\infty M$ :
   $$\begin{pmatrix} 0.2 & 0.5 & 0.3 \end{pmatrix} \begin{pmatrix} 0.5 & 0.5 & 0 \\ 0.2 & 0.5 & 0.3 \\ 0 & 0.5 & 0.5 \end{pmatrix} = \left( 0.1+0.1, \, 0.1+0.25+0.15, \, 0+0.15+0.15 \right) = \begin{pmatrix} 0.2 & 0.5 & 0.3 \end{pmatrix}$$
   On a bien $V_\infty M = V_\infty$, ce qui correspond au sous-espace propre associé à la valeur propre $\lambda = 1$ (normalisé à la somme 1).
3. **Intérêt en BCPST :** Ce type de modélisation s'applique directement à la dynamique des populations ou à la génétique des populations (modèle de Wright-Fisher simplifié) pour prédire la répartition à l'équilibre d'un trait ou d'une espèce.