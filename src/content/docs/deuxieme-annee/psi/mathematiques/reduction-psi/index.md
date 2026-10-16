---
title: 'Cours : Réduction des endomorphismes'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PSI.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $E$ un $\mathbb{K}$-espace vectoriel de dimension finie $n \in \mathbb{N}^*$, avec $\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$.

### Valeurs propres, vecteurs propres, spectres
* **Définition :** Soit $u \in \mathcal{L}(E)$. Un scalaire $\lambda \in \mathbb{K}$ est dit **valeur propre** de $u$ s'il existe un vecteur non nul $x \in E \setminus \{0_E\}$ tel que :
$$u(x) = \lambda x$$
Le vecteur $x$ est alors appelé **vecteur propre** de $u$ associé à la valeur propre $\lambda$. L'ensemble des valeurs propres de $u$, noté $\operatorname{Sp}(u)$, est appelé le **spectre** de $u$.
* **Sous-espace propre :** Pour $\lambda \in \operatorname{Sp}(u)$, on appelle **sous-espace propre** associé à $\lambda$, et on note $E_\lambda(u)$ (ou simplement $E_\lambda$), l'ensemble :
$$E_\lambda(u) = \ker(u - \lambda \operatorname{id}_E) = \{x \in E \mid u(x) = \lambda x\}$$
$E_\lambda(u)$ est un sous-espace vectoriel de $E$, et par définition d'une valeur propre, $E_\lambda(u) \neq \{0_E\}$.

### Polynôme caractéristique
* **Définition :** Soit $A \in \mathcal{M}_n(\mathbb{K})$. Le **polynôme caractéristique** de $A$ est défini par :
$$\chi_A(\lambda) = \det(\lambda I_n - A)$$
(Certains auteurs utilisent $\det(A - \lambda I_n)$, ce qui diffère d'un signe $(-1)^n$). Pour un endomorphisme $u \in \mathcal{L}(E)$, on pose $\chi_u = \chi_{Mat_B(u)}$ où $B$ est une base quelconque de $E$ (cette définition est indépendante du choix de la base).
* **Propriétés :** $\chi_A$ est unitaire de degré $n$. Les valeurs propres de $A$ (ou de $u$) sont exactement les **racines** de $\chi_A$ dans $\mathbb{K}$.

### Diagonalisabilité et Trigonalisabilité
* **Diagonalisabilité :** Un endomorphisme $u \in \mathcal{L}(E)$ (ou une matrice $A \in \mathcal{M}_n(\mathbb{K})$) est dit **diagonalisable** s'il existe une base de $E$ constituée de vecteurs propres de $u$. Matriciellement, il existe $P \in GL_n(\mathbb{K})$ et une matrice diagonale $D \in \mathcal{M}_n(\mathbb{K})$ telles que $A = P D P^{-1}$.
* **Trigonalisabilité :** Un endomorphisme $u \in \mathcal{L}(E)$ est dit **trigonalisable** s'il existe une base de $E$ dans laquelle la matrice de $u$ est triangulaire supérieure.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème (Somme directe de sous-espaces propres)
Soit $u \in \mathcal{L}(E)$ et $\lambda_1, \dots, \lambda_p$ des valeurs propres distinctes de $u$. La somme des sous-espaces propres $\sum_{i=1}^{p} E_{\lambda_i}(u)$ est **directe**.

> **Démonstration :**
> Par récurrence sur le nombre $p$ de valeurs propres.
> * *Initialisation ($p=1$) :* Triviale car un sous-espace propre est non réduit à $\{0_E\}$.
> * *Hérédité :* Supposons la propriété vraie au rang $p-1$. Soit $x_1 + \dots + x_p = 0_E$ avec $x_i \in E_{\lambda_i}(u)$ pour tout $i \in \llbracket 1, p \rrbracket$.
> Appliquons l'endomorphisme $u$ à cette relation :
> $$\sum_{i=1}^{p} u(x_i) = \sum_{i=1}^{p} \lambda_i x_i = 0_E \quad (\text{relation } 1)$$
> Multiplions la relation initiale par $\lambda_p$ :
> $$\sum_{i=1}^{p} \lambda_p x_i = 0_E \quad (\text{relation } 2)$$
> Faisons $(\text{relation } 1) - (\text{relation } 2)$ :
> $$\sum_{i=1}^{p-1} (\lambda_i - \lambda_p) x_i = 0_E$$
> Par hypothèse de récurrence, les sous-espaces étant en somme directe, pour tout $i \in \llbracket 1, p-1 \rrbracket$, $(\lambda_i - \lambda_p) x_i = 0_E$.
> Puisque $\lambda_i \neq \lambda_p$ pour $i \neq p$, on en déduit que $x_i = 0_E$ pour tout $i \in \llbracket 1, p-1 \rrbracket$.
> La relation initiale se réduit alors à $x_p = 0_E$. La somme est donc directe. $\blacksquare$

### Théorème de caractérisation de la diagonalisabilité
Soit $u \in \mathcal{L}(E)$ et $\lambda_1, \dots, \lambda_p$ les valeurs propres distinctes de $u$. Les assertions suivantes sont équivalentes :
1. $u$ est diagonalisable.
2. $\sum_{i=1}^{p} \dim(E_{\lambda_i}(u)) = n$.
3. Le polynôme caractéristique $\chi_u(x)$ est scindé sur $\mathbb{K}$ et, pour toute valeur propre $\lambda$, sa multiplicité algébrique $\alpha_\lambda$ est égale à sa multiplicité géométrique $\dim(E_\lambda(u))$.

### Théorème de Cayley-Hamilton
Soit $u \in \mathcal{L}(E)$ (resp. $A \in \mathcal{M}_n(\mathbb{K})$) et soit $\chi_u$ son polynôme caractéristique. Alors :
$$\chi_u(u) = 0_{\mathcal{L}(E)} \quad (\text{resp. } \chi_A(A) = 0_{\mathcal{M}_n(\mathbb{K})})$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Algorithme de diagonalisation d'une matrice $A \in \mathcal{M}_n(\mathbb{K})$
1. **Calculer le polynôme caractéristique :** Calculer $\chi_A(\lambda) = \det(\lambda I_n - A)$ par des operations sur les lignes et colonnes pour obtenir une forme factorisée.
2. **Identifier les valeurs propres :** Determiner les racines $\lambda_1, \dots, \lambda_p$ de $\chi_A$ et leurs multiplicités respectives $\alpha_1, \dots, \alpha_p$.
3. **Tester la condition nécessaire :** Si $\sum_{i=1}^p \alpha_i < n$ (et $\mathbb{K} = \mathbb{C}$), ou si le polynôme n'est pas scindé (si $\mathbb{K} = \mathbb{R}$), alors $A$ **n'est pas diagonalisable**.
4. **Déterminer les sous-espaces propres :** Pour chaque $\lambda_i$, résoudre le système linéaire homogène $(A - \lambda_i I_n)X = 0_{\mathcal{M}_{n,1}(\mathbb{K})}$ pour expliciter une base de $E_{\lambda_i}$.
5. **Vérifier les dimensions :** Pour chaque $i$, calculer $\dim(E_{\lambda_i}) = n - \operatorname{rank}(A - \lambda_i I_n)$. Vérifier si $\dim(E_{\lambda_i}) = \alpha_i$ pour tout $i$.
6. **Conclure et inverser :** Si oui, concaténer les bases pour former la matrice de passage $P \in GL_n(\mathbb{K})$ et écrire $A = PDP^{-1}$.

### Réduction des endomorphismes symétriques (HP Programme PSI - Cas réel)
Tout endomorphisme symétrique d'un espace euclidien $(E, \langle \cdot, \cdot \rangle)$ est **orthogonalement diagonalisable** (Théorème spectral) : il existe une base orthonormée de $E$ constituée de vecteurs propres.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confondre multiplicité algébrique et géométrique :** On a toujours l'inégalité $1 \le \dim(E_\lambda) \le \alpha_\lambda$. L'égalité n'est pas garantie en general.
2. **Oublier de préciser le corps $\mathbb{K}$ :** Une matrice réelle peut tout à fait n'avoir aucune valeur propre réelle (ex: une rotation d'angle $\pi/2$). Préciser systématiquement si l'on travaille dans $\mathbb{R}$ ou $\mathbb{C}$.
3. **Inverser la matrice de passage :** Dans la formule $A = PDP^{-1}$, les colonnes de $P$ doivent être les coordonnées des vecteurs propres écrits dans le **même ordre** que les valeurs propres sur la diagonale de $D$. Une erreur d'ordre conduit à un calcul faux.
4. **Mauvaise utilisation de Cayley-Hamilton :** Le théorème de Cayley-Hamilton sert à annuler une matrice par son propre polynôme caractéristique, mais **ce n'est pas** le polynôme minimal. N'utilisez pas $\chi_A$ pour trouver l'inverse d'une matrice si un polynôme annulateur de plus faible degré est évident.