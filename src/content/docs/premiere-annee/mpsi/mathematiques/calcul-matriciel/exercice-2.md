---
title: 'Exercice 2 : Méthode du pivot de Gauss'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse théorique et numérique de la méthode du pivot de Gauss

**Filière :** MPSI  
**Matière :** Mathématiques  
Chapitre: ** Calcul matriciel et systèmes linéaires  
**Thème :** Algorithme du pivot de Gauss, complexité et stabilité numérique  

---

## 1. Énoncé

Soit $n \in \mathbb{N}^*$. On considère un système linéaire de la forme $AX = B$, où $A \in \mathcal{M}_n(\mathbb{R})$, $X \in \mathcal{M}_{n,1}(\mathbb{R})$ est le vecteur inconnu et $B \in \mathcal{M}_{n,1}(\mathbb{R})$ est le second membre. 

La méthode du pivot de Gauss est l'algorithme fondamental permettant de transformer le système initial en un système triangulaire supérieur équivalent, plus simple à résoudre par remontée. L'objet de ce problème est d'étudier la formalisation matricielle de cet algorithme, sa complexité asymptotique, ainsi que les limites de sa mise en œuvre informatique (analyse critique des erreurs d'arrondi).

---

## 2. Questions

### Partie I : Formalisation matricielle de l'algorithme
1. Soit $i > j$ et $\lambda \in \mathbb{R}$. On définit la matrice élémentaire de transvection $T_{i,j}(\lambda) = I_n + \lambda E_{i,j}$, où $(E_{i,j})_{1 \le k,l \le n}$ désigne la base canonique de $\mathcal{M}_n(\mathbb{R})$. Montrer que $T_{i,j}(\lambda)$ est inversible et expliciter son inverse.
2. Interpréter l'action à gauche de la matrice $T_{i,j}(\lambda)$ sur une matrice $M \in \mathcal{M}_{n,p}(\mathbb{R})$.
3. Soit $A \in \mathcal{M}_n(\mathbb{R})$ une matrice dont le coefficient diagonal $a_{k,k}^{(k-1)}$ est non nul à l'étape $k$. Expliciter la matrice de transvection $L_k$ permettant d'annuler les coefficients situés sous le pivot dans la $k$-ème colonne.
4. En déduire qu'il existe une matrice triangulaire inférieure $L$ (à diagonale unité) et une matrice triangulaire supérieure $U$ telles que, sous réserve de non-nullité des pivots successifs, on puisse écrire :
   $$A = LU$$
   Cette décomposition est appelée **décomposition $LU$**.

### Partie II : Complexité algorithmique
5. Pour une matrice $A \in \mathcal{M}_n(\mathbb{R})$, déterminer le nombre d'opérations élémentaires (multiplications et additions) nécessaires pour effectuer l'élimination de Gauss (obtention de la matrice $U$).
6. Exprimer ce nombre sous forme d'un équivalent simple lorsque $n$ tend vers $+\infty$. Comparer avec le coût de la résolution d'un système triangulaire par remontée.

### Partie III : Analyse critique et limites du modèle
7. **Instabilité numérique :** On considère le système $AX = B$ avec :
   $$A = \begin{pmatrix} \varepsilon & 1 \\ 1 & 1 \end{pmatrix} \quad \text{et} \quad B = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$$
   où $\varepsilon$ est un réel non nul strictement inférieur à la précision de la machine ($\varepsilon \ll 1$). 
   Appliquer l'algorithme du pivot de Gauss sans permutation de lignes, puis calculer le vecteur solution $X$. Que constate-t-on sur la valeur du pivot et la propagation des erreurs ?
8. **Stratégie du pivot partiel :** Expliquer qualitativement comment le choix d'un pivot maximal en valeur absolue dans la colonne courante permet de remédier à cette instabilité.

---

## 3. Pistes et indications

* **Q1 & Q2 :** Penser à la structure algébrique de l'ensemble des matrices de transvection et à leur action géométrique (addition d'une ligne à une autre).
* **Q3 :** Le coefficient multiplicateur pour annuler l'élément $a_{i,k}$ à l'aide du pivot $a_{k,k}$ est $\lambda = -\frac{a_{i,k}}{a_{k,k}}$.
* **Q5 :** Utiliser des sommes discrètes $\sum_{k=1}^{n-1} k^2$ et relier le résultat aux intégrales de Riemann ou utiliser les formules usuelles de sommation.
* **Q7 :** Attention au quotient par $\varepsilon$ dans un environnement informatique à précision finie.

---

## 4. Corrigé pas à pas

### Partie I : Formalisation matricielle

1. **Inversibilité de $T_{i,j}(\lambda)$ :**
   On a $E_{i,j} E_{k,l} = \delta_{j,k} E_{i,l}$. Pour $i > j$, on a $i \neq j$, donc $E_{i,j}^2 = 0$. 
   Ainsi, en développant $(I_n + \lambda E_{i,j})(I_n - \lambda E_{i,j}) = I_n - \lambda^2 E_{i,j}^2 = I_n$.
   La matrice $T_{i,j}(\lambda)$ est donc inversible et son inverse est $T_{i,j}(-\lambda) = I_n - \lambda E_{i,j}$.

2. **Action à gauche :**
   Le produit $T_{i,j}(\lambda) M$ correspond à l'opération élémentaire sur les lignes de $M$ : $L_i \leftarrow L_i + \lambda L_j$. Les autres lignes restent inchangées.

3. **Matrice d'élimination $L_k$ :**
   Pour éliminer les coefficients $a_{i,k}$ sous la diagonale ($i > k$) à l'aide du pivot $a_{k,k}^{(k-1)}$, on applique les opérations $L_i \leftarrow L_i - \frac{a_{i,k}^{(k-1)}}{a_{k,k}^{(k-1)}} L_k$. 
   La matrice associée est $L_k = I_n - \sum_{i=k+1}^n \frac{a_{i,k}^{(k-1)}}{a_{k,k}^{(k-1)}} E_{i,k}$.

4. **Décomposition $LU$ :**
   En multipliant successivement par les inverses des matrices $L_k$ (qui sont aussi des matrices triangulaires inférieures), on obtient $U = L_{n-1} \dots L_1 A$. 
   En posant $L = (L_{n-1} \dots L_1)^{-1}$, qui est bien triangulaire inférieure à diagonale unité, il vient :
   $$A = LU$$

---

### Partie II : Complexité algorithmique

5. **Comptage des opérations :**
   À l'étape $k$ (pour $k allant de $1$ à $n-1$), le pivot est $a_{k,k}$. Pour chaque ligne $i$ de $k+1$ à $n$ et pour chaque colonne $j$ de $k$ à $n$, on effectue une multiplication et une soustraction.
   Le nombre d'opérations pour l'étape $k$ est de l'ordre de $2(n-k)^2$.
   Le nombre total d'opérations $W(n)$ pour la triangularisation est :
   $$W(n) \sim \sum_{k=1}^{n-1} 2(n-k)^2 = 2 \sum_{j=1}^{n-1} j^2 = 2 \frac{(n-1)n(2n-1)}{6}$$

6. **Équivalent asymptotique :**
   On obtient :
   $$W(n) \sim \frac{2}{3} n^3 \text{ opérations}.$$
   La résolution d'un système triangulaire par remontée ne coûte, quant à elle, que $\mathcal{N}(n) \sim n^2$ opérations. La complexité de la méthode de Gauss est donc dominée par la phase de triangularisation en $\mathcal{O}(n^3)$.

---

### Partie III : Analyse critique et limites du modèle

7. **Étude de l'instabilité numérique :**
   Appliquons le pivot de Gauss sans pivotage sur $AX = B$ :
   Le pivot initial est $a_{1,1} = \varepsilon$. L'opération $L_2 \leftarrow L_2 - \frac{1}{\varepsilon} L_1$ donne le nouveau système :
   $$\begin{pmatrix} \varepsilon & 1 \\ 0 & 1 - \frac{1}{\varepsilon} \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 - \frac{1}{\varepsilon} \end{pmatrix}$$
   En calculant $x_2$ par remontée :
   $$x_2 = \frac{2 - \frac{1}{\varepsilon}}{1 - \frac{1}{\varepsilon}} = \frac{2\varepsilon - 1}{\varepsilon - 1}$$
   Si $\varepsilon$ est inférieur à la précision machine (par exemple $\varepsilon = 10^{-18}$ en virgule flottante standard), l'ordinateur stocke $\varepsilon \approx 0$. 
   Le nombre $\frac{1}{\varepsilon}$ devient extrêmement grand, provoquant une **catastrophe numérique par division par un nombre quasi-nul** (overflow) ou une perte totale de significativité (pire encore, $\varepsilon$ est absorbé par $1$ dans $1 - \frac{1}{\varepsilon}$, menant à $1 - \frac{1}{\varepsilon} \approx - \frac{1}{\varepsilon}$, faussant complètement le résultat).

8. **Stratégie du pivot partiel :**
   Pour pallier ce défaut rédhibitoire inhérent aux calculs à précision finie, on ne prend plus systématiquement le coefficient diagonal comme pivot, mais on cherche à chaque étape $k$ à maximiser le pivot en valeur absolue dans la colonne courante (permutation de lignes). Cela garantit que les coefficients multiplicateurs $\left|\frac{a_{i,k}}{a_{k,k}}\text{ }\right|$ restent inférieurs ou égaux à $1$, empêchant la propagation explosive des erreurs d'arrondi.