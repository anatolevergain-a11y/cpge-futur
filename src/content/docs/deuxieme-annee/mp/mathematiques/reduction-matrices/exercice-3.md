---
title: 'Exercice 3 : Applications aux puissances A^k et exponentielle de matrice'
description: 'Problème corrigé type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $n \in \mathbb{N}^*$ avec $n \ge 2$. On considère la matrice $A$ de $M_n(\mathbb{R})$ dont tous les coefficients sont égaux à $1$, que l'on note :
$$A = \begin{pmatrix} 
1 & 1 & \cdots & 1 \\
1 & 1 & \cdots & 1 \\
\vdots & \vdots & \ddots & \vdots \\
1 & 1 & \cdots & 1 
\end{pmatrix}$$

L'objectif de ce problème est d'étudier la réductibilité de la matrice $A$, d'en calculer les puissances $A^k$ pour tout $k \in \mathbb{N}$, puis d'expliciter son exponentielle $\exp(A)$ dans l'espace vectoriel normé $M_n(\mathbb{R})$.

---

### ❓ Questions progressives

1. **Rang et polynôme minimal (sans calcul direct des valeurs propres)**
   a) Déterminer le rang de la matrice $A$. En déduire si $A$ est inversible.
   b) Calculer le produit matriciel $A^2$. Exprimer $A^2$ en fonction de $A$ et en déduire un polynôme annulateur de $A$ scindé à racines simples.

2. **Réduction de la matrice $A$**
   a) Quelles sont les valeurs propres possibles de $A$ d'après le polynôme annulateur trouvé à la question précédente ?
   b) Déterminer la trace de $A$, notée $\text{Tr}(A)$. En déduire la multiplicité de chaque valeur propre.
   c) Expliciter les sous-espaces propres associés à chaque valeur propre de $A$. La matrice $A$ est-elle diagonalisable ?

3. **Calcul des puissances $A^k$**
   a) À l'aide de la formule du binôme de Newton ou d'une récurrence, exprimer $A^k$ pour tout $k \in \mathbb{N}^*$ en fonction de $n$ et de $A$.
   b) Que se passe-t-il lorsque $k = 0$ ? La formule trouvée reste-t-elle valable pour $k=0$ ?

4. **Calcul de l'exponentielle de matrice $\exp(A)$**
   a) Rappeler la définition de la série définissant l'exponentielle d'une matrice carrée $M \in M_n(\mathbb{R})$. Justifier sa convergence sur $M_n(\mathbb{R})$.
   b) En utilisant l'expression de $A^k$ obtenue à la question 3, calculer explicitement $\exp(A)$ en fonction de $n$ et de la matrice $A$.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Toutes les colonnes de $A$ sont identiques, ce qui permet de déterminer immédiatement le rang. Pour $A^2$, effectuez le produit matriciel par blocs ou directement par la définition du produit de deux matrices.
* **Question 2 :** Un polynôme annulateur fournit l'ensemble des valeurs propres potentielles (ses racines). Utilisez la trace pour identifier la multiplicité exacte de chaque valeur propre en dimension $n$.
* **Question 3 :** Utilisez l'égalité polynomiale $A^2 = nA$ pour établir une relation de récurrence simple entre $A^{k+1}$ et $A^k$.
* **Question 4 :** Séparez la somme de la série exponentielle en un terme constant (pour $k=0$) et une somme infinie pour $k \ge 1$, puis utilisez la factorisation de $A^k$ par une série entière classique (celle de $e^n - 1$).

---

### 📋 Corrigé détaillé et vérification des résultats

#### 1. Rang et polynôme minimal
a) La matrice $A$ possède $n$ colonnes qui sont toutes égales à la première colonne $C_1 = \begin{pmatrix} 1 & 1 & \cdots & 1 \end{pmatrix}^T$. 
L'espace vectoriel engendré par les colonnes de $A$ est donc de dimension $1$ (engendré par $C_1$). 
Par conséquent, **le rang de $A$ est égal à $1$** ($\text{rg}(A) = 1$).
Puisque $n \ge 2$, le rang de $A$ est strictement inférieur à sa taille $n$, donc **$A$ n'est pas inversible**.

b) Calculons le coefficient $(i, j)$ du produit $A^2$ :
$$(A^2)_{i,j} = \sum_{k=1}^n A_{i,k} A_{k,j} = \sum_{k=1}^n 1 \times 1 = n$$
Ainsi, tous les coefficients de $A^2$ sont égaux à $n$. On a donc :
$$A^2 = n \begin{pmatrix} 
1 & 1 & \cdots & 1 \\
1 & 1 & \cdots & 1 \\
\vdots & \vdots & \ddots & \vdots \\
1 & 1 & \cdots & 1 
\end{pmatrix} = nA$$
La relation $A^2 = nA$ peut se réécrire sous la forme $A^2 - nA = 0$, soit $A(A - nI_n) = 0$.
Le polynôme $P(X) = X(X - n)$ est donc un **polynôme annulateur** de $A$. Ce polynôme est scindé à racines simples (0 et $n$).

#### 2. Réduction de la matrice $A$
a) Le spectre de $A$, noté $\text{Sp}(A)$, est inclus dans l'ensemble des racines du polynôme annulateur $P(X)$. Par conséquent, les seules valeurs propres possibles de $A$ sont **$0$ et $n$**.

b) La trace d'une matrice est la somme de ses coefficients diagonaux. Pour la matrice $A$, on a $n$ éléments diagonaux égaux à $1$, donc :
$$\text{Tr}(A) = n \times 1 = n$$
Par ailleurs, la trace est aussi égale à la somme des valeurs propres comptées avec leur multiplicité. Soit $m_0$ la multiplicité de la valeur propre $0$ et $m_n$ la multiplicité de la valeur propre $n$. On a :
$$\begin{cases} m_0 + m_n = n \\ 0 \times m_0 + n \times m_n = \text{Tr}(A) = n \end{cases} \implies \begin{cases} m_0 + m_n = n \\ n \cdot m_n = n \end{cases}$$
Puisque $n \ge 2$, on en déduit que $m_n = 1$ et $m_0 = n - 1$.

c) 
* **Pour la valeur propre $\lambda_1 = 0$ :**
  Le sous-espace propre associé $E_0$ est le noyau de $A$ (car $A - 0 \cdot I_n = A$). 
  Un vecteur $X = \begin{pmatrix} x_1 & x_2 & \cdots & x_n \end{pmatrix}^T$ appartient à $E_0$ si et seulement si $AX = 0$, ce qui se traduit par :
  $$\sum_{i=1}^n x_i = 0$$
  $E_0$ est donc l'hyperplan d'équation $\sum_{i=1}^n x_i = 0$. Sa dimension est bien $n - 1$, ce qui correspond à la multiplicité $m_0$.

* **Pour la valeur propre $\lambda_2 = n$ :**
  Le sous-espace propre associé $E_n$ est le noyau de $A - nI_n$. 
  Remarquons que pour $X_0 = \begin{pmatrix} 1 & 1 & \cdots & 1 \end{pmatrix}^T$, on a :
  $$AX_0 = \begin{pmatrix} n \\ n \\ \vdots \\ n \end{pmatrix} = n X_0$$
  Le vecteur $X_0$ est donc un vecteur propre associé à la valeur propre $n$. Comme la multiplicité $m_n = 1$, le sous-espace propre $E_n$ est la droite vectorielle engendrée par $X_0$.

* **Conclusion sur la diagonalisabilité :** 
  La somme des dimensions des sous-espaces propres est $\dim(E_0) + \dim(E_n) = (n - 1) + 1 = n$. 
  Puisque cette somme est égale à la dimension de l'espace de départ $n$, **la matrice $A$ est diagonalisable**.

#### 3. Calcul des puissances $A^k$
a) Démontrons par récurrence que pour tout $k \in \mathbb{N}^*$, on a :
$$A^k = n^{k-1} A$$

* **Initialisation ($k = 1$) :** $A^1 = n^{1-1} A = n^0 A = A$. La proposition est vraie.
* **Hérédité :** Soit $k \in \mathbb{N}^*$ fixé. Supposons que la relation $A^k = n^{k-1} A$ soit vraie. Montrons-la pour $k+1$ :
  $$A^{k+1} = A^k \times A = (n^{k-1} A) \times A = n^{k-1} A^2$$
  Or, d'après la question 1.b), on a $A^2 = nA$. Donc :
  $$A^{k+1} = n^{k-1} (nA) = n^k A$$
  La propriété est donc héréditaire.
* **Conclusion :** Pour tout $k \in \mathbb{N}^*$, $A^k = n^{k-1} A$.

b) Pour $k = 0$, par convention, $A^0 = I_n$ (matrice identité d'ordre $n$). 
Si l'on appliquait la formule $n^{k-1}A$ pour $k=0$, on obtiendrait $n^{-1}A$, ce qui est différent de $I_n$ (car $A$ n'est pas inversible et $n \ge 2$). 
**La formule n'est donc valable que pour $k \in \mathbb{N}^*$.**

#### 4. Calcul de l'exponentielle de matrice $\exp(A)$
a) Pour toute matrice $M \in M_n(\mathbb{R})$, l'exponentielle de $M$ est définie par la série entière :
$$\exp(M) = \sum_{k=0}^{+\infty} \frac{M^k}{k!}$$
Cette série converge normalement (et donc simplement) sur l'espace vectoriel normé $(M_n(\mathbb{R}), \|\cdot\|)$ pour toute norme matricielle subie, car le rayon de convergence de la série entière $\sum \frac{z^k}{k!}$ est infini ($e^z$ est entière sur $\mathbb{C}$).

b) Utilisons la définition de la série pour la matrice $A$ en séparant le terme d'indice $k = 0$ :
$$\exp(A) = \frac{A^0}{0!} + \sum_{k=1}^{+\infty} \frac{A^k}{k!}$$
En remplaçant $A^0$ par $I_n$ et $A^k$ par $n^{k-1}A$ pour $k \ge 1$ :
$$\exp(A) = I_n + \sum_{k=1}^{+\infty} \frac{n^{k-1} A}{k!}$$
Factorisons par la matrice $A$ dans le terme sommatoire :
$$\exp(A) = I_n + \left( \sum_{k=1}^{+\infty} \frac{n^{k-1}}{k!} \right) A$$
Effectuons un changement d'indice dans la somme en posant $j = k - 1$ (quand $k$ varie de $1$ à $+\infty$, $j$ varie de $0$ à $+\infty$) :
$$\sum_{k=1}^{+\infty} \frac{n^{k-1}}{k!} = \sum_{j=0}^{+\infty} \frac{n^j}{(j+1)!}$$
Pour relier cette expression à la fonction exponentielle usuelle, multiplions et divisons par $n$ (en supposant $n \ge 1$) :
$$\sum_{j=0}^{+\infty} \frac{n^j}{(j+1)!} = \frac{1}{n} \sum_{j=0}^{+\infty} \frac{n^{j+1}}{(j+1)!} = \frac{1}{n} \sum_{m=1}^{+\infty} \frac{n^m}{m!}$$
On reconnaît le développement de l'exponentielle privée de son premier terme ($m=0$) :
$$\sum_{m=1}^{+\infty} \frac{n^m}{m!} = \left( \sum_{m=0}^{+\infty} \frac{n^m}{m!} \right) - \frac{n^0}{0!} = e^n - 1$$
En remplaçant ce résultat dans l'expression de $\exp(A)$, on obtient finalement :
$$\exp(A) = I_n + \frac{e^n - 1}{n} A$$

**Vérification dimensionnelle et cohérence :**
* Le terme $I_n$ est bien une matrice carrée de taille $n$.
* Le terme $\frac{e^n - 1}{n} A$ est un scalaire multiplié par une matrice $n \times n$, ce qui est homogène.
* Si l'on calcule la trace de $\exp(A)$ via cette formule : $\text{Tr}(\exp(A)) = \text{Tr}(I_n) + \frac{e^n - 1}{n}\text{Tr}(A) = n + \frac{e^n - 1}{n} \times n = n + e^n - 1 = e^n + n - 1$. 
D'autre part, la trace de l'exponentielle est la somme des exponentielles des valeurs propres comptées avec multiplicité : $\text{Tr}(\exp(A)) = e^0 \times (n-1) + e^n \times 1 = n - 1 + e^n$. Les résultats concordent parfaitement.