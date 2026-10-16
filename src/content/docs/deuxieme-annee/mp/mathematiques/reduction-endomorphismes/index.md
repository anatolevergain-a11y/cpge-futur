---
title: 'Cours : Réduction des endomorphismes'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $K$ un corps commutatif (typiquement $\mathbb{R}$ ou $\mathbb{C}$), $E$ un $K$-espace vectoriel de dimension finie $n \in \mathbb{N}^*$, et $u \in \mathcal{L}(E)$ un endomorphisme de $E$.

### Valeurs propres, vecteurs propres, espaces propres
* **Définition (Valeur propre) :** Un scalaire $\lambda \in K$ est dit valeur propre de $u$ s'il existe un vecteur non nul $x \in E$, appelé vecteur propre associé, tel que :
  $$u(x) = \lambda x$$
  L'ensemble des valeurs propres de $u$ est noté $\operatorname{Sp}(u)$ (le spectre de $u$).
* **Définition (Espace propre) :** Pour toute valeur propre $\lambda \in \operatorname{Sp}(u)$, l'ensemble $E_\lambda(u) = \ker(u - \lambda \operatorname{id}_E)$ est un sous-espace vectoriel de $E$, non réduit à $\{0\}$, appelé espace propre associé à $\lambda$.

### Polynôme caractéristique
* **Définition :** Soit $M \in \mathcal{M}_n(K)$. Le polynôme caractéristique de $M$ est le polynôme unitaire défini par :
  $$\chi_M(X) = \det(X I_n - M) \in K[X]$$
  Sa dimension (son degré) est $n$, et son coefficient dominant est $1$.
* **Propriété :** Pour tout endomorphisme $u$ de $E$, le choix d'une base de $E$ et la représentation par une matrice $M$ permettent de définir le polynôme caractéristique de $u$ par $\chi_u(X) = \chi_M(X)$, qui est indépendant de la base choisie.
* **Lien avec les valeurs propres :** Les valeurs propres de $u$ (dans $K$) sont exactement les racines de son polynôme caractéristique $\chi_u(X)$ dans $K$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème 1 : Somme directe des sous-espaces propres
**Énoncé :** Soit $u \in \mathcal{L}(E)$ et soient $\lambda_1, \lambda_2, \dots, \lambda_p$ des valeurs propres **distinctes** de $u$. Alors la somme des espaces propres associés est directe :
$$E_{\lambda_1}(u) + E_{\lambda_2}(u) + \dots + E_{\lambda_p}(u) = \bigoplus_{i=1}^p E_{\lambda_i}(u)$$

> **Démonstration :**
> Par récurrence sur le nombre $p$ de valeurs propres.
> * *Initialisation ($p=1$) :* Triviale.
> * *Hérédité :* Supposons la propriété vraie pour $p-1$ sous-espaces. Soit $x_1 + x_2 + \dots + x_p = 0$ avec $x_i \in E_{\lambda_i}(u)$ pour tout $i \in \{1, \dots, p\}$.
> Appliquons l'endomorphisme $u$ à cette relation :
> $$\sum_{i=1}^p u(x_i) = \sum_{i=1}^p \lambda_i x_i = 0 \quad (\text{car } u(x_i) = \lambda_i x_i)$$
> Multiplions la relation initiale par $\lambda_p$ :
> $$\sum_{i=1}^p \lambda_p x_i = 0$$
> Par soustraction des deux relations :
> $$\sum_{i=1}^{p-1} (\lambda_i - \lambda_p) x_i = 0$$
> Par hypothèse de récurrence, les sous-espaces $E_{\lambda_1}, \dots, E_{\lambda_{p-1}}$ sont en somme directe, donc pour tout $i \in \{1, \dots, p-1\}$, $(\lambda_i - \lambda_p) x_i = 0$.
> Puisque $\lambda_i \neq \lambda_p$ pour $i \neq p$, on en déduit que $x_i = 0$ pour tout $i \in \{1, \dots, p-1\}$.
> La relation initiale se réduit alors à $x_p = 0$. La somme est donc bien directe. $\blacksquare$

### Théorème 2 : Caractérisation de ladiagonalisabilité
**Énoncé :** Soit $u \in \mathcal{L}(E)$ et $M \in \mathcal{M}_n(K)$.
1. Pour toute valeur propre $\lambda$ de $u$, on a $1 \leqslant \dim(E_\lambda(u)) \leqslant m_\lambda$, où $m_\lambda$ désigne l'ordre de multiplicité de $\lambda$ comme racine de $\chi_u(X)$.
2. L'endomorphisme $u$ est diagonalisable si et seulement si :
   - $\chi_u(X)$ est scindé sur $K$ : $\chi_u(X) = \prod_{i=1}^p (X - \lambda_i)^{m_i}$
   - Pour tout $i \in \{1, \dots, p\}$, $\dim(E_{\lambda_i}(u)) = m_i$.
3. Une condition équivalente est : 
   $$\sum_{\lambda \in \operatorname{Sp}(u)} \dim(E_\lambda(u)) = n$$

### Théorème de Cayley-Hamilton
**Énoncé :** Tout endomorphisme $u$ annule son propre polynôme caractéristique :
$$\chi_u(u) = 0_{\mathcal{L}(E)}$$
De même, pour toute matrice $M \in \mathcal{M}_n(K)$, $\chi_M(M) = 0_n$.

---

## 💡 3. Méthodes classiques de résolution

### Méthode pour diagonaliser un endomorphisme ou une matrice
1. **Calculer le polynôme caractéristique** $\chi_u(X) = \det(X I_n - M)$.
2. **Déterminer les valeurs propres** en cherchant les racines de $\chi_u(X)$ dans $K$.
3. **Vérifier si le polynôme est scindé** sur $K$. Si ce n'est pas le cas (et que $K = \mathbb{R}$ alors qu'il y a des racines complexes), l'endomorphisme n'est **pas** diagonalisable sur $K$.
4. **Pour chaque valeur propre $\lambda$ :**
   - Résoudre le système linéaire homogène $(M - \lambda I_n)X = 0$ pour déterminer une base de l'espace propre $E_\lambda(u)$.
   - Calculer la dimension $\dim(E_\lambda(u))$.
5. **Conclure :**
   - Si $\sum \dim(E_\lambda(u)) = n$ (ou si $\dim(E_\lambda) = m_\lambda$ pour chaque valeur propre), $u$ est diagonalisable. On exhibe alors une base de vecteurs propres $\mathcal{B}$. La matrice de passage $P$ permet d'obtenir $P^{-1}MP = D$ (matrice diagonale).
   - Sinon, $u$ n'est pas diagonalisable.

### Recherche d'une base de Jordan / Réduction de Dunford (Cas général)
* **Décomposition de Dunford :** Si $\chi_u(X)$ est scindé sur $K$, il existe un unique couple $(D, N) \in \mathcal{L}(E)^2$ tel que :
  - $u = D + N$
  - $D$ est diagonalisable
  - $N$ est nilpotent
  - $D$ et $N$ commutent ($DN = ND$).

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confondre scindé et diagonalisable :** Un polynôme peut être scindé sans que l'endomorphisme ne soit diagonalisable (exemple : $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$). La condition $\chi_u$ scindé est **nécessaire mais non suffisante**.
2. **Oublier de préciser le corps de base :** Une matrice réelle peut posséder des valeurs propres complexes. Sur $K = \mathbb{R}$, elle n'est pas diagonalisable, alors qu'elle peut l'être sur $K = \mathbb{C}$. Il faut impérativement préciser le corps $K$ dans lequel on se place.
3. **Erreur de multiplicité :** Affirmer qu'une matrice de taille $n$ ayant $n$ valeurs propres distinctes est diagonalisable sans vérifier si ces valeurs propres appartiennent bien au corps $K$ considéré.
4. **Mauvaise utilisation de Cayley-Hamilton :** Le polynôme caractéristique annule la matrice, mais ce n'est **pas** nécessairement le polynôme minimal. Utiliser $\chi_u(u) = 0$ pour calculer des inverses ou des puissances est correct, mais parfois sous-optimal par rapport au polynôme minimal $\pi_u$.