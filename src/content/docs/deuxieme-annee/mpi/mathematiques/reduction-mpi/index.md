---
title: 'Cours : Réduction des endomorphismes'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE MPI.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $K$ un corps commutatif (typiquement $\mathbb{R}$ ou $\mathbb{C}$). Soit $E$ un $K$-espace vectoriel de dimension finie $n \ge 1$. Soit $u \in \mathcal{L}(E)$ un endomorphisme de $E$, et soit $A \in \mathcal{M}_n(K)$ une matrice carrée d'ordre $n$.

### Valeurs propres, vecteurs propres, espaces propres
- Un scalaire $\lambda \in K$ est dit **valeur propre** de $u$ s'il existe un vecteur non nul $x \in E \setminus \{0_E\}$ tel que :
  $$u(x) = \lambda x$$
  Le vecteur $x$ est alors appelé **vecteur propre** associé à $\lambda$.
- L'ensemble des valeurs propres de $u$ est noté $\operatorname{Sp}(u)$ (le **spectre** de $u$).
- Pour $\lambda \in \operatorname{Sp}(u)$, le sous-espace vectoriel **propre** associé est défini par :
  $$E_\lambda(u) = \ker(u - \lambda \operatorname{id}_E) = \{x \in E \mid u(x) = \lambda x\}$$

### Polynôme caractéristique
- On appelle **polynôme caractéristique** de l'endomorphisme $u$ (ou de la matrice $A$) le polynôme de $K[X]$ défini par :
  $$\chi_u(X) = \det(X \operatorname{id}_E - u) \quad \text{ou} \quad \chi_A(X) = \det(X I_n - A)$$
  $\chi_u$ est unitaire de degré $n$.
- Les racines de $\chi_u$ dans $K$ sont exactement les valeurs propres de $u$.

### Diagonalisabilité et Trigonalisabilité
- L'endomorphisme $u$ (resp. la matrice $A$) est dit **diagonalisable** s'il existe une base de $E$ constituée de vecteurs propres de $u$ (resp. si $A$ est semblable à une matrice diagonale dans $\mathcal{M}_n(K)$).
- L'endomorphisme $u$ (resp. la matrice $A$) est dit **trigonalisable** s'il existe une base de $E$ dans laquelle la matrice de $u$ est triangulaire supérieure (resp. si $A$ est semblable à une matrice triangulaire supérieure dans $\mathcal{M}_n(K)$).

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème 1 : Caractérisation de la diagonalisabilité par les dimensions des espaces propres
Soit $u \in \mathcal{L}(E)$ et $\operatorname{Sp}(u) = \{\lambda_1, \dots, \lambda_p\}$ les valeurs propres distinctes de $u$. Les assertions suivantes sont équivalentes :
1. $u$ est diagonalisable.
2. $\displaystyle \bigoplus_{i=1}^p E_{\lambda_i}(u) = E$.
3. $\displaystyle \sum_{i=1}^p \dim(E_{\lambda_i}(u)) = \dim(E) = n$.

#### Démonstration (Esquisse)
- $(1) \implies (2)$ : Soit $\mathcal{B} = (e_1, \dots, e_n)$ une base de vecteurs propres. Chaque $e_i$ appartient à un certain $E_{\lambda_j}(u)$. Par conséquent, $E = \operatorname{Vect}(\mathcal{B}) \subset \sum_{i=1}^p E_{\lambda_i}(u)$. De plus, la somme des sous-espaces propres d'un endomorphisme est toujours directe. Ainsi, $\bigoplus_{i=1}^p E_{\lambda_i}(u) = E$.
- $(2) \implies (3)$ : C'est une conséquence immédiate de la définition de la somme directe en dimension finie.
- $(3) \implies (1)$ : On choisit une base de chaque $E_{\lambda_i}(u)$. Par une propriété générale, la concaténation de bases de sous-espaces en somme directe forme une famille libre. Puisque le cardinal total est $\sum \dim(E_{\lambda_i}(u)) = n$, cette famille est une base de $E$ constituée de vecteurs propres. $\blacksquare$

### Théorème 2 : Cayley-Hamilton
Soit $u \in \mathcal{L}(E)$ (resp. $A \in \mathcal{M}_n(K)$) et soit $\chi_u$ son polynôme caractéristique. Alors :
$$\chi_u(u) = 0_{\mathcal{L}(E)} \quad (\text{resp. } \chi_A(A) = 0_{\mathcal{M}_n(K)})$$

#### Démonstration (Cas des matrices à coefficients dans un corps commutatif via la comatrice)
Soit $A \in \mathcal{M}_n(K)$. Considérons la matrice polynomiale $\Delta(X) = X I_n - A \in \mathcal{M}_n(K[X])$. 
Par definition de la comatrice, on a la relation fondamentale dans $\mathcal{M}_n(K[X])$ :
$$\operatorname{com}(\Delta(X))^T \Delta(X) = \det(\Delta(X)) I_n = \chi_A(X) I_n$$
Puisque $\operatorname{com}(\Delta(X))^T$ est une matrice à coefficients dans $K[X]$, on peut l'écrire sous la forme $\sum_{k=0}^{n-1} B_k X^k$ où $B_k \in \mathcal{M}_n(K)$.
En injectant cela dans la relation précédente, l'égalité polynomiale en $X$ permet de substituer $X$ par la matrice $A$ (via l'isomorphisme canonique d'évaluation). Par telescopic algébrique, les termes s'annulent pour donner $\chi_A(A) = 0_{\mathcal{M}_n(K)}$. $\blacksquare$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Algorithme de réduction d'une matrice $A \in \mathcal{M}_n(K)$
1. **Calculer le polynôme caractéristique** $\chi_A(X) = \det(X I_n - A)$.
2. **Décomposer $\chi_A(X)$** en facteurs irréductibles dans $K[X]$ (scindé si l'on cherche à diagonaliser ou trigonaliser dans $K$) :
   $$\chi_A(X) = (-1)^n \prod_{i=1}^p (X - \lambda_i)^{\alpha_i}$$
   où $\lambda_i$ sont les valeurs propres distinctes et $\alpha_i = \operatorname{am}(\lambda_i)$ leur multiplicité algébrique.
3. **Tester la condition nécessaire et suffisante de diagonalisabilité** :
   - $A$ est diagonalisable sur $K$ si et seulement si $\chi_A$ est scindé sur $K$ et, pour tout $i \in \{1, \dots, p\}$, on a l'égalité entre multiplicité algébrique et géométrique :
     $$\dim(\ker(A - \lambda_i I_n)) = \alpha_i$$
4. **Déterminer les sous-espaces propres** en résolvant pour chaque $i$ le système linéaire homogène :
   $$(A - \lambda_i I_n) X = 0_{\mathcal{M}_{n,1}(K)}$$
5. **Construire la matrice de passage** $P \in \mathcal{M}_n(K)$ en juxtaposant les bases des sous-espaces propres, telle que $P^{-1}AP = D$ soit diagonale.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confondre scindabilité et diagonalisabilité** : Une matrice dont le polynôme caractéristique est scindé à racines simples est diagonalisable. S'il y a des racines multiples, la diagonalisabilité n'est **jamais** acquise sans calculer les dimensions des espaces propres ($\operatorname{dim}(E_\lambda) \le \operatorname{am}(\lambda)$).
2. **Oublier le corps de base $K$** : Travailler dans $\mathbb{R}$ alors que le polynôme caractéristique possède des racines complexes non réelles (ex: $\chi_A(X) = X^2 + 1$). $A$ n'est ni diagonalisable ni trigonalisable dans $\mathcal{M}_n(\mathbb{R})$, mais elle l'est dans $\mathcal{M}_n(\mathbb{C})$.
3. **Erreur de manipulation sur le polynôme minimal** : Ne pas confondre le polynôme caractéristique $\chi_u$ (qui annule $u$ par Cayley-Hamilton, de degré $n$) et le polynôme minimal $\mu_u$ (qui est le générateur unitaire de l'idéal des polynômes annulateurs de $u$, de degré minimal). Les racines de $\mu_u$ sont exactement les valeurs propres de $u$, avec les mêmes facteurs irréductibles. $u$ est diagonalisable si et seulement si $\mu_u$ est scindé à racines simples.