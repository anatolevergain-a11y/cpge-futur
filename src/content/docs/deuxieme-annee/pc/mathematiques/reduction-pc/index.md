---
title: 'Cours : Réduction des endomorphismes'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PC.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $K$ un corps (égal à $\mathbb{R}$ ou $\mathbb{C}$). Soit $E$ un $K$-espace vectoriel de dimension finie $n \ge 1$. Soit $u \in \mathcal{L}(E)$ un endomorphisme de $E$, et $A \in \mathcal{M}_n(K)$ une matrice carrée.

### Éléments propres
- **Valeur propre :** $\lambda \in K$ est dite valeur propre de $u$ s'il existe un vecteur non nul $x \in E$, appelé vecteur propre associé, tel que :
  $$u(x) = \lambda x$$
  L'ensemble des valeurs propres de $u$ est le **spectre** de $u$, noté $\operatorname{Sp}(u)$ ou $\operatorname{Sp}(A)$.
- **Sous-espace propre :** Pour $\lambda \in \operatorname{Sp}(u)$, le sous-espace propre associé est :
  $$E_\lambda(u) = \ker(u - \lambda \operatorname{id}_E) = \{x \in E \mid u(x) = \lambda x\}$$

### Polynôme caractéristique
On appelle polynôme caractéristique de l'endomorphisme $u$ (ou de la matrice $A$) le polynôme unitaire défini par :
$$\chi_u(\lambda) = \det(\lambda \operatorname{id}_E - u) \quad \text{ou} \quad \chi_A(\lambda) = \det(\lambda I_n - A)$$
Le degré de $\chi_u$ est $n$. Les racines de $\chi_u$ dans $K$ sont exactement les valeurs propres de $u$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème (Somme directe des sous-espaces propres)
Soient $\lambda_1, \lambda_2, \dots, \lambda_p$ des valeurs propres **distinctes** d'un endomorphisme $u \in \mathcal{L}(E)$. Alors la somme des sous-espaces propres associés est directe :
$$E_{\lambda_1}(u) \oplus E_{\lambda_2}(u) \oplus \dots \oplus E_{\lambda_p}(u)$$

> **Démonstration par récurrence sur le nombre $p$ de valeurs propres :**
> * *Initialisation ($p=1$) :* Un sous-espace propre $E_{\lambda_1}(u)$ est non réduit à $\{0\}$ par définition d'une valeur propre.
> * *Hérédité :* Supposons la propriété vraie pour $p-1 \ge 1$. Soient $x_1 \in E_{\lambda_1}, \dots, x_p \in E_{\lambda_p}$ tels que :
>   $$\sum_{i=1}^p x_i = 0 \quad (\text{E}_1)$$
>   Appliquons l'endomorphisme $u$ à cette relation :
>   $$\sum_{i=1}^p u(x_i) = \sum_{i=1}^p \lambda_i x_i = 0 \quad (\text{E}_2)$$
>   Multiplions $(\text{E}_1)$ par $\lambda_p$ :
>   $$\sum_{i=1}^p \lambda_p x_i = 0 \quad (\text{E}_3)$$
>   En faisant $(\text{E}_2) - (\text{E}_3)$, il vient :
>   $$\sum_{i=1}^{p-1} (\lambda_i - \lambda_p) x_i = 0$$
>   Par hypothèse de récurrence, la somme $E_{\lambda_1} \oplus \dots \oplus E_{\lambda_p-1}$ est directe. Donc pour tout $i \in \llbracket 1, p-1 \rrbracket$, $(\lambda_i - \lambda_p)x_i = 0$. 
>   Puisque les $\lambda_i$ sont deux à deux distincts, $\lambda_i - \lambda_p \neq 0$, ce qui implique $x_i = 0$.
>   Enfin, l'égalité $(\text{E}_1)$ se réduit à $x_p = 0$. La somme est donc directe. $\blacksquare$

### Théorème de Cayley-Hamilton
Soit $u \in \mathcal{L}(E)$ (ou $A \in \mathcal{M}_n(K)$). Si on note $\chi_u(X) = \sum_{k=0}^n a_k X^k$ le polynôme caractéristique, alors l'endomorphisme (resp. la matrice) annule son propre polynôme caractéristique :
$$\chi_u(u) = 0_{\mathcal{L}(E)} \quad \text{et} \quad \chi_A(A) = 0_{\mathcal{M}_n(K)}$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Algorithme de diagonalisation d'une matrice $A \in \mathcal{M}_n(\mathbb{R})$
1. **Calculer le polynôme caractéristique :** Calculer $\chi_A(\lambda) = \det(\lambda I_n - A)$ en effectuant des opérations élémentaires sur les lignes et les colonnes pour faire apparaître des factorisations.
2. **Identifier les valeurs propres :** Déterminer les racines réelles de $\chi_A(\lambda)$. Soient $\lambda_1, \dots, \lambda_p$ ces racines de multiplicités respectives $m_1, \dots, m_p$.
3. **Vérifier la condition nécessaire et suffisante de diagonalisabilité :**
   $A$ est diagonalisable sur $\mathbb{R}$ si et seulement si :
   - $\sum_{i=1}^p m_i = n$ (le polynôme est scindé sur $\mathbb{R}$).
   - $\forall i \in \llbracket 1, p \rrbracket, \quad \dim(E_{\lambda_i}(A)) = m_i$ (où $\dim(E_{\lambda_i}(A)) = n - \operatorname{rank}(A - \lambda_i I_n)$).
4. **Déterminer les bases des sous-espaces propres :** Pour chaque $\lambda_i$, résoudre le système linéaire homogène :
   $$(A - \lambda_i I_n) \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} = \begin{pmatrix} 0 \\ \vdots \\ 0 \end{pmatrix}$$
5. **Conclure via la matrice de passage :** Si la condition est vérifiée, on concatène les bases des sous-espaces propres pour former une matrice de passage inversible $P \in \mathcal{M}_n(\mathbb{R})$ telle que $A = P D P^{-1}$, où $D$ est diagonale.

---

## ⚠️ 4. Pièges classiques aux Concours

- **Confusion entre polynôme annulateur et polynôme caractéristique :** Tout polynôme annulateur n'est pas nécessairement le polynôme caractéristique (ex: le polynôme minimal divise le polynôme caractéristique).
- **Condition de diagonalisabilité incomplète :** Oublier de vérifier si le polynôme est scindé dans le corps de base (par exemple, chercher à diagonaliser une matrice réelle dont le polynôme caractéristique possède des racines complexes non réelles).
- **Erreur de dimension sur les sous-espaces propres :** S'assurer que $\dim(E_\lambda) \le m_\lambda$ (la dimension d'un sous-espace propre est toujours inférieure ou égale à la multiplicité de la valeur propre correspondante). L'égalité pour toutes les valeurs propres est le sésame de la diagonalisabilité.
- **Inversion de la matrice de passage :** Dans l'écriture $A = PDP^{-1}$, l'ordre des colonnes de $P$ doit strictement correspondre à l'ordre des éléments diagonaux de $D$. Une permutation dans $P$ sans modifier $D$ invalide entièrement le résultat.