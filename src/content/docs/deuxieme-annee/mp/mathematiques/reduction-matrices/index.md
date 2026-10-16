---
title: 'Cours : Réduction des endomorphismes et matrices'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $\mathbb{K}$ un corps commutatif ($\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$). Soit $E$ un $\mathbb{K}$-espace vectoriel de dimension finie $n \in \mathbb{N}^*$. 

### Éléments propres
Soit $u \in \mathcal{L}(E)$ un endomorphisme de $E$ et $A \in \mathcal{M}_n(\mathbb{K})$ une matrice carrée d'ordre $n$ à coefficients dans $\mathbb{K}$.

* **Valeur propre, vecteur propre :** 
  - Un scalaire $\lambda \in \mathbb{K}$ est dit **valeur propre** de $u$ s'il existe un vecteur non nul $x \in E \setminus \{0_E\}$ tel que $u(x) = \lambda x$. Le vecteur $x$ est alors appelé **vecteur propre** associé à $\lambda$.
  - Soit $A \in \mathcal{M}_n(\mathbb{K})$. Un scalaire $\lambda \in \mathbb{K}$ est valeur propre de $A$ s'il existe un vecteur colonne non nul $X \in \mathcal{M}_{n,1}(\mathbb{K}) \setminus \{0\}$ tel que $AX = \lambda X$.
* **Spectre :** L'ensemble des valeurs propres de $u$ (ou de $A$) est noté $\operatorname{Sp}(u)$ (ou $\operatorname{Sp}(A)$).
* **Sous-espace propre :** Pour $\lambda \in \operatorname{Sp}(u)$, on appelle **sous-espace propre** associé à $\lambda$ le sous-espace vectoriel noté $E_\lambda(u) = \ker(u - \lambda \operatorname{id}_E)$. Pour une matrice $A$, on note $E_\lambda(A) = \ker(A - \lambda I_n)$.

### Polynôme caractéristique
* **Définition :** On appelle **polynôme caractéristique** de la matrice $A \in \mathcal{M}_n(\mathbb{K})$ le polynôme noté $\chi_A$ défini par :
  $$\chi_A(X) = \det(X I_n - A) \in \mathbb{K}[X]$$
  Pour un endomorphisme $u \in \mathcal{L}(E)$, le polynôme caractéristique est $\chi_u(X) = \chi_{\operatorname{Mat}_{\mathcal{B}}(u)}(X)$ (cette définition est indépendante du choix de la base $\mathcal{B}$).
* **Propriété fondamentale :** $\lambda \in \mathbb{K}$ est valeur propre de $A$ si et seulement si $\chi_A(\lambda) = 0$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème : Lien entre multiplicité et dimension
Soit $A \in \mathcal{M}_n(\mathbb{K})$, $\lambda \in \operatorname{Sp}(A)$ de multiplicité $m$ en tant que racine de $\chi_A$. Alors :
$$1 \le \dim(E_\lambda(A)) \le m$$

#### Démonstration :
Soit $p = \dim(E_\lambda(A))$. Par définition, $p \ge 1$ puisque $\lambda$ est valeur propre. 
Soit $(e_1, \dots, e_p)$ une base de $E_\lambda(A)$. Par le théorème de la base incomplète, complétons cette famille en une base $\mathcal{B} = (e_1, \dots, e_p, e_{p+1}, \dots, e_n)$ de $\mathbb{K}^n$.
Dans cette base $\mathcal{B}$, la matrice $A$ est représentée par une matrice par blocs de la forme :
$$T = \begin{pmatrix} \lambda I_p & B \\ 0 & C \end{pmatrix}$$
où $B \in \mathcal{M}_{p, n-p}(\mathbb{K})$ et $C \in \mathcal{M}_{n-p}(\mathbb{K})$.
Par une propriété bien connue du déterminant des matrices par blocs triangulaires par blocs, on a :
$$\chi_A(X) = \chi_T(X) = \det(X I_p - \lambda I_p) \det(X I_{n-p} - C) = (X - \lambda)^p \det(X I_{n-p} - C) = (X - \lambda)^p \chi_C(X)$$
Ainsi, $(X - \lambda)^p$ divise $\chi_A(X)$ dans $\mathbb{K}[X]$. Par définition de la multiplicité $m$ de la racine $\lambda$, on en déduit que $p \le m$, ce qui achève la démonstration. $\blacksquare$

### Théorème de diagonalization
Soit $u \in \mathcal{L}(E)$ et $A \in \mathcal{M}_n(\mathbb{K})$.
1. $u$ est diagonalisable si et seulement si la somme de ses sous-espaces propres est directe et égale à $E$, c'est-à-dire :
   $$E = \bigoplus_{\lambda \in \operatorname{Sp}(u)} E_\lambda(u)$$
2. $A$ est diagonalisable si et seulement si la somme des dimensions de ses sous-espaces propres est égale à $n$, ou de manière équivalente :
   $$\sum_{\lambda \in \operatorname{Sp}(A)} \dim(E_\lambda(A)) = n$$
3. **Condition suffisante (critère de diagonalisabilité) :** Si $\chi_A(X)$ est scindé sur $\mathbb{K}$ et si pour toute valeur propre $\lambda$, $\dim(E_\lambda(A)) = m_\lambda$ (multiplicité algébrique), alors $A$ est diagonalisable.

### Théorème de triangularisation
Tout endomorphisme dont le polynôme caractéristique est scindé sur $\mathbb{K}$ est triangularisable. En particulier, tout endomorphisme d'un $\mathbb{C}$-espace vectoriel de dimension finie est triangularisable.

---

## 💡 3. Méthodes de calcul & Algorithmes

### Algorithme de diagonalisation d'une matrice $A \in \mathcal{M}_n(\mathbb{K})$
1. **Calculer le polynôme caractéristique :** Calculer $\chi_A(X) = \det(X I_n - A)$.
2. **Déterminer le spectre :** Trouver les racines de $\chi_A(X)$ dans $\mathbb{K}$ et leurs multiplicités respectives $m_1, \dots, m_k$.
3. **Vérifier la condition nécessaire :** Si $\chi_A$ n'est pas scindé sur $\mathbb{K}$, la matrice n'est pas diagonalisable dans $\mathcal{M}_n(\mathbb{K})$.
4. **Calculer les sous-espaces propres :** Pour chaque valeur propre $\lambda_i$, résoudre le système linéaire homogène $(A - \lambda_i I_n)X = 0$ afin d'exhiber une base de $E_{\lambda_i}(A)$.
5. **Conclure sur la diagonalisabilité :** 
   - Calculer $\dim(E_{\lambda_i}(A))$ pour tout $i$.
   - Si $\sum_{i=1}^k \dim(E_{\lambda_i}(A)) = n$ (ou si $\dim(E_{\lambda_i}(A)) = m_i$ pour tout $i$), alors $A$ est diagonalisable. Sinon, elle ne l'est pas.
6. **Écrire la relation de conjugaison :** Si $A$ est diagonalisable, en constituant la matrice de passage $P$ dont les colonnes sont formées des vecteurs propres, on a :
   $$A = P D P^{-1}$$
   où $D \in \mathcal{M}_n(\mathbb{K})$ est une matrice diagonale.

---

## ⚠️ 4. Pièges classiques & Erreurs à éviter

* **Attention au corps de base ($\mathbb{R}$ vs $\mathbb{C}$) :** Une matrice réelle peut tout à fait avoir des valeurs propres complexes. Par exemple, la matrice rotation $R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} \in \mathcal{M}_2(\mathbb{R})$ n'a aucune valeur propre réelle ($\chi_R(X) = X^2 + 1$), elle n'est donc **pas diagonalisable dans $\mathcal{M}_2(\mathbb{R})$**. Elle l'est en revanche dans $\mathcal{M}_2(\mathbb{C})$.
* **Confusion entre polynôme caractéristique scindé et diagonalisabilité :** Le fait que $\chi_A(X)$ soit scindé est une condition **nécessaire** mais **non suffisante** pour qu'une matrice soit diagonalisable. *Contre-exemple :* $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ a un polynôme caractéristique scindé ($(X-1)^2$), mais son unique sous-espace propre est de dimension $1$ (inférieur à la multiplicité $2$).
* **Inversion de la matrice de passage :** Lorsque l'on écrit $A = PDP^{-1}$, l'ordre des colonnes de $P$ doit strictement correspondre à l'ordre des éléments diagonaux de $D$. Une permutation dans $P$ sans permutation symétrique dans $D$ rend la relation fausse.
* **Erreur de calcul du déterminant :** Ne jamais oublier le signe $(-1)^n$ ou la bonne mise en facteur lors du calcul de $\det(X I_n - A)$.