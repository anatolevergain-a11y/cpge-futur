---
title: 'Cours : Réduction des matrices et endomorphismes'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PT.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $K$ un corps (en pratique $K = \mathbb{R}$ ou $\mathbb{C}$), $E$ un $K$-espace vectoriel de dimension finie $n \ge 1$, et $u \in \mathcal{L}(E)$ un endomorphisme de $E$.

**Définition 1.1 (Valeur propre, vecteur propre, sous-espace propre)**
Un scalaire $\lambda \in K$ est dit **valeur propre** de $u$ s'il existe un vecteur non nul $x \in E$, appelé **vecteur propre** associé à $\lambda$, tel que :
$$u(x) = \lambda x$$
L'ensemble des vecteurs propres associés à $\lambda$, union avec le vecteur nul $0_E$, forme un sous-espace vectoriel de $E$ noté $E_\lambda(u)$, appelé **sous-espace propre** associé à $\lambda$ :
$$E_\lambda(u) = \ker(u - \lambda \operatorname{id}_E) = \{x \in E \mid u(x) = \lambda x\}$$

**Définition 1.2 (Matrice propre)**
Soit $A \in \mathcal{M}_n(K)$. Un scalaire $\lambda \in K$ est valeur propre de $A$ si et seulement si la matrice $A - \lambda I_n$ n'est pas inversible (où $I_n \in \mathcal{M}_n(K)$ est la matrice identité). Le sous-espace propre associé est le noyau de $A - \lambda I_n$ dans $K^n$.

**Définition 1.3 (Polynôme caractéristique)**
On appelle polynôme caractéristique de l'endomorphisme $u$ (ou de la matrice $A \in \mathcal{M}_n(K)$) le polynôme noté $\chi_u$ (ou $\chi_A$) défini par :
$$\chi_A(\lambda) = \det(\lambda I_n - A) \quad \text{ou} \quad \chi_A(X) = \det(X I_n - A) \in K[X]$$
C'est un polynôme unitaire de degré $n$. Les valeurs propres de $A$ sont exactement les racines de $\chi_A$ dans $K$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

**Proposition 2.1 (Somme directe de sous-espaces propres)**
Soit $(u_1, u_2, \dots, u_p)$ une famille de vecteurs propres de $u$ associés à des valeurs propres **distinctes** $(\lambda_1, \lambda_2, \dots, \lambda_p)$. Alors cette famille est libre.

> **Démonstration (par récurrence sur $p$ au programme) :**
> - Pour $p = 1$, un vecteur propre non nul est par définition libre.
> - Supposons la propriété vraie au rang $p-1 \ge 1$. Soit une relation de liaison :
>   $$\sum_{i=1}^p \alpha_i x_i = 0_E \quad (\text{avec } x_i \in E_{\lambda_i}(u) \setminus \{0_E\})$$
>   Appliquons l'endomorphisme $u$ à cette relation :
>   $$\sum_{i=1}^p \alpha_i u(x_i) = 0_E \implies \sum_{i=1}^p \alpha_i \lambda_i x_i = 0_E \quad (1)$$
>   Multiplions la relation initiale par $\lambda_p$ :
>   $$\sum_{i=1}^p \alpha_i \lambda_p x_i = 0_E \quad (2)$$
>   Faisons la différence $(1) - (2)$ :
>   $$\sum_{i=1}^{p-1} \alpha_i (\lambda_i - \lambda_p) x_i = 0_E$$
>   Par hypothèse de récurrence, la famille $(x_1, \dots, x_{p-1})$ est libre. Par conséquent, pour tout $i \in \{1, \dots, p-1\}$, on a :
>   $$\alpha_i (\lambda_i - \lambda_p) = 0_K$$
>   Puisque les valeurs propres sont distinctes ($\lambda_i \neq \lambda_p$), il vient $\alpha_i = 0$ pour tout $i \in \{1, \dots, p-1\}$.
>   La relation initiale se réduit alors à $\alpha_p x_p = 0_E$. Comme $x_p \neq 0_E$, on obtient $\alpha_p = 0$.
>   La famille est donc libre. $\blacksquare$

**Théorème 2.2 (Caractérisation de la diagonalisabilité)**
Soit $A \in \mathcal{M}_n(K)$ (ou $u \in \mathcal{L}(E)$). Les assertions suivantes sont équivalentes :
1. $A$ est diagonalisable (il existe $P \in \mathcal{GL}_n(K)$ et $D$ une matrice diagonale telles que $A = P D P^{-1}$).
2. Le polynôme caractéristique $\chi_A(X)$ est scindé sur $K$, et pour toute valeur propre $\lambda$, la dimension du sous-espace propre est égale à sa multiplicité algébrique $m(\lambda)$ :
   $$\dim(E_\lambda) = m(\lambda)$$
3. La somme des dimensions des sous-espaces propres est égale à $n$, ou de manière équivalente, la somme directe de ces sous-espaces est égale à l'espace tout entier :
   $$\bigoplus_{\lambda \in \operatorname{Sp}(A)} E_\lambda(A) = K^n$$

---

## 💡 3. Méthodes de calcul & Algorithmes

1. **Calcul du polynôme caractéristique :**
   Soit $A \in \mathcal{M}_n(K)$. On calcule $\chi_A(X) = \det(X I_n - A)$ en effectuant des opérations sur les lignes et les colonnes pour faire apparaitre des zéros, sans modifier le déterminant (méthode du pivot de Gauss sur les déterminants).

2. **Recherche des espaces propres :**
   Pour chaque racine $\lambda$ de $\chi_A$ de multiplicité $m(\lambda)$, on résout le système linéaire homogène :
   $$(A - \lambda I_n) X = 0_{\mathcal{M}_{n,1}(K)}$$
   L'ensemble des solutions est le sous-espace propre $E_\lambda(A)$. On en extrait une base par application du pivot de Gauss.

3. **Diagonalisation effective :**
   - Si $\sum \dim(E_\lambda) < n$, la matrice n'est pas diagonalisable.
   - Si $\sum \dim(E_\lambda) = n$, la matrice est diagonalisable. On concatène les bases de chaque sous-espace propre pour former la matrice de passage $P \in \mathcal{GL}_n(K)$ (les colonnes de $P$ sont les vecteurs propres dans le même ordre que les valeurs propres sur la diagonale de $D$). On a la relation :
     $$A = P D P^{-1} \iff D = P^{-1} A P$$

---

## ⚠️ 4. Pièges classiques aux Concours

* **Piège 1 :** Confondre multiplicité algébrique et multiplicité géométrique. La condition $\dim(E_\lambda) \le m(\lambda)$ est toujours vraie, mais l'égalité n'est requise que pour *toutes* les valeurs propres pour assurer la diagonalisabilité.
* **Piège 2 :** Oublier de vérifier si le polynôme caractéristique est scindé sur le corps de base $K$ considéré (attention aux matrices réelles dont le polynôme caractéristique possède des racines complexes strictes).
* **Piège 3 :** Inverser l'ordre des vecteurs propres dans la matrice de passage $P$ par rapport à l'ordre des valeurs propres dans la matrice diagonale $D$, ce qui invalide la relation $AP = PD$.
* **Piège 4 :** Conclure hâtivement qu'une matrice est diagonalisable sous prétexte qu'elle possède $n$ valeurs propres distinctes (bien que cela soit un condition *suffisante*, ce n'est pas une condition *nécessaire*).