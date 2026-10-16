---
title: 'Cours : Réduction des matrices'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Réduction des matrices (BCPST2)

Professeur: CPGE - BCPST  
Niveau: Deuxième année  
**Matière** : Mathématiques  

---

## 1. Introduction et Définitions Fondamentales

Soit $K$ un corps ($K = \mathbb{R}$ ou $\mathbb{C}$). Soit $E$ un $K$-espace vectoriel de dimension finie $n$, et $f \in \mathcal{L}(E)$ un endomorphisme. Soit $A \in \mathcal{M}_n(K)$ une matrice carrée.

### Définition 1.1 : Valeur propre, vecteur propre, espace propre
*   $\lambda \in K$ est une **valeur propre** de $f$ (ou de $A$) s'il existe un vecteur non nul $x \in E$ (resp. $X \in M_{n,1}(K)$) tel que :
    $$f(x) = \lambda x \quad (\text{resp. } AX = \lambda X)$$
    Le vecteur $x$ (ou $X$) est alors un **vecteur propre** associé à $\lambda$.
*   L'ensemble des vecteurs propres associés à $\lambda$, augmentés du vecteur nul, forme un sous-espace vectoriel de $E$ (resp. $\mathcal{M}_{n,1}(K)$) appelé **espace propre** associé à $\lambda$, noté $E_\lambda(f)$ ou $\ker(f - \lambda \text{id}_E)$ (resp. $\ker(A - \lambda I_n)$).
    $$E_\lambda = \ker(A - \lambda I_n) = \{X \in \mathcal{M}_{n,1}(K) \mid (A - \lambda I_n)X = 0\}$$

### Définition 1.2 : Spectre
L'ensemble des valeurs propres de $f$ (ou de $A$) est appelé le **spectre** et est noté $\operatorname{Sp}(f)$ ou $\operatorname{Sp}(A)$.

### Théorème-Définition 1.3 : Polynôme caractéristique
On appelle polynôme caractéristique de la matrice $A$ (ou de l'endomorphisme $f$) le polynôme noté $\chi_A$ (ou $\chi_f$) défini par :
$$\chi_A(\lambda) = \det(\lambda I_n - A) \quad \text{ou} \quad \chi_A(x) = \det(x I_n - A)$$
C'est un polynôme unitaire de degré $n$, dont les coefficients sont dans $K$.

> **Théorème fondamental** : $\lambda \in K$ est valeur propre de $A$ si et seulement si $\chi_A(\lambda) = 0$.
> Les valeurs propres sont donc exactement les racines (dans $K$) du polynôme caractéristique.

---

## 2. Diagonalisabilité

### Définition 2.1 : Matrices et endomorphismes diagonalisables
*   Une matrice $A \in \mathcal{M}_n(K)$ est dite **diagonalisable** si elle est semblable à une matrice diagonale, c'est-à-dire s'il existe une matrice inversible $P \in \mathcal{M}_n(K)$ et une matrice diagonale $D \in \mathcal{M}_n(K)$ telles que :
    $$A = PDP^{-1} \iff D = P^{-1}AP$$
*   Un endomorphisme $f$ est diagonalisable s'il existe une base de $E$ constituée de vecteurs propres de $f$. (La matrice de $f$ dans cette base est alors diagonale).

### Théorème 2.2 : Caractérisations de la diagonalisabilité
Soit $A \in \mathcal{M}_n(\mathbb{R})$ (ou $\mathbb{C}$). Les assertions suivantes sont équivalentes :
1.  $A$ est diagonalisable.
2.  La somme des dimensions des espaces propres est égale à $n$ : $\sum_{\lambda \in \operatorname{Sp}(A)} \dim(E_\lambda) = n$.
3.  Le polynôme caractéristique $\chi_A$ est scindé sur $K$ (admet $n$ racines comptées avec leur multiplicité dans $K$) et, pour toute valeur propre $\lambda$ de multiplicité algébrique $\alpha_\lambda$, la dimension de l'espace propre associé (multiplicité géométrique $\dim(E_\lambda)$) vérifie :
    $$\dim(E_\lambda) = \alpha_\lambda$$

> **Rappel crucial (Lien dimensions)** : Pour toute valeur propre $\lambda$, on a toujours l'inégalité :
> $$1 \le \dim(E_\lambda) \le \alpha_\lambda$$

### Théorème 2.3 : Somme directe des sous-espaces propres
Si $\lambda_1, \dots, \lambda_p$ sont les valeurs propres distinctes de $A$, la somme des espaces propres $E_{\lambda_1} \oplus E_{\lambda_2} \oplus \dots \oplus E_{\lambda_p}$ est toujours **directe**.
$A$ est diagonalisable si et seulement si cette somme est égale à l'espace tout entier $\mathcal{M}_{n,1}(K)$.

---

## 3. Trigonalisabilité

### Définition 3.1
*   Une matrice $A \in \mathcal{M}_n(K)$ est **trigonalisable** si elle est semblable à une matrice triangulaire supérieure.
*   Un endomorphisme $f$ est trigonalisable s'il existe une base de $E$ dans laquelle la matrice de $f$ est triangulaire supérieure.

### Théorème 3.2 : Condition nécessaire et suffisante
Une matrice $A \in \mathcal{M}_n(K)$ est trigonalisable si et seulement si son polynôme caractéristique $\chi_A(x)$ est **scindé** sur $K$.

> **Corollaire BCPST** : 
> *   Tout endomorphisme ou toute matrice à coefficients dans $\mathbb{C}$ est **toujours** trigonalisable (car $\mathbb{C}$ est algébriquement clos - D'Alembert-Gauss).
> *   Dans $\mathbb{R}$, une matrice (ou endomorphisme) n'est trigonalisable que si toutes les racines de son polynôme caractéristique sont réelles.

---

## 4. Polynômes d'endomorphismes et de matrices (Hors-programme strict mais indispensable en BCPST)

### Définition 4.1 : Polynôme annulateur
Soit $P = \sum_{k=0}^{d} a_k X^k \in K[X]$ et $A \in \mathcal{M}_n(K)$. On note $P(A) = \sum_{k=0}^{d} a_k A^k$ (avec $A^0 = I_n$).
On dit que $P$ est un **polynôme annulateur** de $A$ si $P(A) = 0_{M_n(K)}$.

### Théorème 4.2 : CNS de diagonalisabilité par les polynômes
Une matrice $A \in \mathcal{M}_n(K)$ est diagonalisable **si et seulement si** elle admet un polynôme annulateur scindé à racines **simples** dans $K$.

### Théorème 4.3 : Cayley-Hamilton
Tout polynôme caractéristique annule sa propre matrice (ou son propre endomorphisme) :
$$\chi_A(A) = 0_{\mathcal{M}_n(K)}$$

---

## 5. Méthodes Pratiques (Algorithmique du BCPST)

### Méthode 5.1 : Comment diagonaliser une matrice $A \in \mathcal{M}_n(K)$ ?
1.  **Calculer le polynôme caractéristique** $\chi_A(x) = \det(x I_n - A)$.
2.  **Trouver les racines** de $\chi_A(x)$ et déterminer leur multiplicité.
3.  **Conclure** : Si le polynôme n'est pas scindé sur $K$, ou si $\dim(E_\lambda) < \alpha_\lambda$ pour au moins une valeur propre, **la matrice n'est pas diagonalisable**. Sinon, continuer.
4.  **Déterminer les espaces propres** $E_\lambda$ pour chaque valeur propre $\lambda$ en résolvant le système linéaire $(A - \lambda I_n)X = 0$.
5.  **Construire la base de vecteurs propres** en concaténant les bases des espaces propres.
6.  **Écrire la relation de conjugaison** $A = PDP^{-1}$ :
    *   $D$ est la matrice diagonale avec les valeurs propres dans le même ordre que les vecteurs de $P$.
    *   $P$ est la matrice de passage dont les colonnes sont les vecteurs propres.

---

## 6. Pièges et Erreurs Classiques à Éviter (Alerte Concours)

1.  **Confondre multiplicité algébrique et géométrique** : Ce n'est pas parce qu'une racine est double ($\alpha_\lambda = 2$) que l'espace propre associé est de dimension 2. Il peut être de dimension 1 (cas non diagonalisable). *Exemple type : les matrices de shears (transfomations cisaillement).*
2.  **Inverser l'ordre dans $A = PDP^{-1}$** : Si $P = (C_1 \mid C_2 \mid \dots \mid C_n)$ où $C_i$ est le vecteur propre associé à $\lambda_i$, alors $D = \operatorname{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)$. Attention à l'ordre !
3.  **Oublier de vérifier le corps $K$** : Travailler dans $\mathbb{R}$ ou $\mathbb{C}$ change tout. Une matrice réelle peut avoir des valeurs propres complexes. Dans $\mathcal{M}_n(\mathbb{R})$, elle ne sera pas diagonalisable, mais elle pourra l'être si on la considère dans $\mathcal{M}_n(\mathbb{C})$.
4.  **Erreur de calcul de déterminant** : Pour $\chi_A(\lambda) = \det(\lambda I_n - A)$, factorisez au maximum par étapes (opérations sur les lignes/colonnes) plutôt que de développer brutalement.