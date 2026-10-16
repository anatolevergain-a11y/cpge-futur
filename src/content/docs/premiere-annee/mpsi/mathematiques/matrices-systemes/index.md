---
title: 'Cours : Calcul matriciel et systèmes linéaires'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

Dans tout ce chapitre, $\mathbb{K}$ désigne le corps $\mathbb{R}$ ou $\mathbb{C}$, et $n, p, q, r$ sont des entiers naturels non nuls.

---

## 📌 1. Définitions & Cadre d'étude

### 1.1. L'espace vectoriel $\mathcal{M}_{n,p}(\mathbb{K})$
* **Définition :** Une matrice à $n$ lignes et $p$ colonnes à coefficients dans $\mathbb{K}$ est une famille d'éléments de $\mathbb{K}$ indexée par $\left\{1, \dots, n\right\} \times \left\{1, \dots, p\right\}$, notée :
  $$A = (a_{i,j})_{\substack{1 \le i \le n \\ 1 \le j \le p}} \in \mathcal{M}_{n,p}(\mathbb{K})$$
* **Structure :** Muni de l'addition interne et de la multiplication externe par un scalaire de $\mathbb{K}$, $(\mathcal{M}_{n,p}(\mathbb{K}), +, \cdot)$ est un $\mathbb{K}$-espace vectoriel de dimension finie :
  $$\dim_{\mathbb{K}}(\mathcal{M}_{n,p}(\mathbb{K})) = n \times p$$
* **Base canonique :** Pour tout $(i,j) \in \{1, \dots, n\} \times \{1, \dots, p\}$, la matrice élémentaire $E_{i,j} \in \mathcal{M}_{n,p}(\mathbb{K})$ est définie par :
  $$(E_{i,j})_{k,l} = \delta_{i,k} \delta_{j,l} = \begin{cases} 1 & \text{si } k = i \text{ et } l = j \\ 0 & \text{sinon} \end{cases}$$
  La famille $(E_{i,j})_{\substack{1 \le i \le n \\ 1 \le j \le p}}$ forme la base canonique de $\mathcal{M}_{n,p}(\mathbb{K})$.

### 1.2. Produit matriciel et algèbre $\mathcal{M}_n(\mathbb{K})$
* **Définition :** Soient $A = (a_{i,j}) \in \mathcal{M}_{n,p}(\mathbb{K})$ et $B = (b_{j,k}) \in \mathcal{M}_{p,q}(\mathbb{K})$. Le produit $C = AB \in \mathcal{M}_{n,q}(\mathbb{K})$ est défini par :
  $$\forall (i,k) \in \{1, \dots, n\} \times \{1, \dots, q\}, \quad c_{i,k} = \sum_{j=1}^p a_{i,j} b_{j,k}$$
* **Produit des matrices élémentaires :** Pour $E_{i,j} \in \mathcal{M}_{n,p}(\mathbb{K})$ et $E_{k,l} \in \mathcal{M}_{p,q}(\mathbb{K})$ :
  $$E_{i,j} E_{k,l} = \delta_{j,k} E_{i,l}$$
* **Algèbre $\mathcal{M}_n(\mathbb{K})$ :** Lorsque $p = n$, $(\mathcal{M}_n(\mathbb{K}), +, \cdot, \times)$ est une $\mathbb{K}$-algèbre associative, unitaire (d'élément neutre $I_n = \sum_{i=1}^n E_{i,i}$), non commutative dès que $n \ge 2$.

### 1.3. Transposition et Trace
* **Transposition :** L'application transposition est définie par :
  $$\begin{aligned}
  {}^t(\cdot) : \mathcal{M}_{n,p}(\mathbb{K}) &\longrightarrow \mathcal{M}_{p,n}(\mathbb{K}) \\
  A = (a_{i,j}) &\longmapsto {}^tA = (a_{j,i})
  \end{aligned}$$
  Il s'agit d'un isomorphisme d'espaces vectoriels vérifiant pour tout $A \in \mathcal{M}_{n,p}(\mathbb{K})$ et $B \in \mathcal{M}_{p,q}(\mathbb{K})$ :
  $${}^t({}^tA) = A \quad \text{et} \quad {}^t(AB) = {}^tB \, {}^tA$$
* **Trace :** Pour toute matrice carrée $A = (a_{i,j}) \in \mathcal{M}_n(\mathbb{K})$, on appelle trace de $A$ la forme linéaire :
  $$\operatorname{Tr}(A) = \sum_{i=1}^n a_{i,i} \in \mathbb{K}$$

### 1.4. Systèmes linéaires
Un système de $n$ équations linéaires à $p$ inconnues sur $\mathbb{K}$ s'écrit :
$$(S) : \begin{cases}
a_{1,1} x_1 + a_{1,2} x_2 + \dots + a_{1,p} x_p = y_1 \\
a_{2,1} x_1 + a_{2,2} x_2 + \dots + a_{2,p} x_p = y_2 \\
\vdots \\
a_{n,1} x_1 + a_{n,2} x_2 + \dots + a_{n,p} x_p = y_n
\end{cases}$$
Il admet la représentation matricielle $AX = Y$, où :
$$A \in \mathcal{M}_{n,p}(\mathbb{K}), \quad X = \begin{pmatrix} x_1 \\ \vdots \\ x_p \end{pmatrix} \in \mathcal{M}_{p,1}(\mathbb{K}), \quad Y = \begin{pmatrix} y_1 \\ \vdots \\ y_n \end{pmatrix} \in \mathcal{M}_{n,1}(\mathbb{K})$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème 2.1 : Propriété d'invariance cyclique de la trace
Soient $A \in \mathcal{M}_{n,p}(\mathbb{K})$ et $B \in \mathcal{M}_{p,n}(\mathbb{K})$. Alors :
$$\operatorname{Tr}(AB) = \operatorname{Tr}(BA)$$

#### Démonstration :
Notons $C = AB \in \mathcal{M}_n(\mathbb{K})$ et $D = BA \in \mathcal{M}_p(\mathbb{K})$.
Par définition du produit matriciel :
$$c_{i,i} = \sum_{j=1}^p a_{i,j} b_{j,i} \quad \text{et} \quad d_{j,j} = \sum_{i=1}^n b_{j,i} a_{i,j}$$
En calculant la trace de $C$ :
$$\operatorname{Tr}(AB) = \sum_{i=1}^n c_{i,i} = \sum_{i=1}^n \left( \sum_{j=1}^p a_{i,j} b_{j,i} \right)$$
Puisque les sommes sont finies, le théorème de Fubini permet d'intervertir l'ordre de sommation :
$$\operatorname{Tr}(AB) = \sum_{j=1}^p \left( \sum_{i=1}^n b_{j,i} a_{i,j} \right) = \sum_{j=1}^p d_{j,j} = \operatorname{Tr}(BA)$$
$\blacksquare$

#### Corollaire :
Il n'existe aucun couple $(A, B) \in (\mathcal{M}_n(\mathbb{K}))^2$ tel que $AB - BA = I_n$.
En effet, $\operatorname{Tr}(AB - BA) = \operatorname{Tr}(AB) - \operatorname{Tr}(BA) = 0$, or $\operatorname{Tr}(I_n) = n \ne 0$ dans $\mathbb{K}$ (avec la convention usuelle de caractéristique nulle pour $\mathbb{R}$ et $\mathbb{C}$).

---

### Théorème 2.2 : Caractérisation de l'inversibilité par un inverse unilatéral
Soit $A \in \mathcal{M}_n(\mathbb{K})$. Les propositions suivantes sont équivalentes :
1. $A \in \operatorname{GL}_n(\mathbb{K})$ (i.e. $\exists B \in \mathcal{M}_n(\mathbb{K}), \; AB = BA = I_n$).
2. $\exists B \in \mathcal{M}_n(\mathbb{K})$ tel que $AB = I_n$.
3. $\exists C \in \mathcal{M}_n(\mathbb{K})$ tel que $CA = I_n$.
4. Le système homogène $AX = 0_{\mathcal{M}_{n,1}(\mathbb{K})}$ a pour unique solution $X = 0_{\mathcal{M}_{n,1}(\mathbb{K})}$.
5. $\operatorname{rg}(A) = n$.

#### Démonstration (équivalence $2 \implies 1$) :
Considérons l'endomorphisme $f_A \in \mathcal{L}(\mathbb{K}^n)$ canoniquement associé à $A$, défini par :
$$\forall X \in \mathbb{K}^n, \quad f_A(X) = AX$$
Supposons qu'il existe $B \in \mathcal{M}_n(\mathbb{K})$ telle que $AB = I_n$.
Alors, pour l'endomorphisme canoniquement associé $f_B$, on a :
$$f_A \circ f_B = \operatorname{id}_{\mathbb{K}^n}$$
Ceci implique que $f_A$ est surjectif dans $\mathbb{K}^n$.
Comme $\mathbb{K}^n$ est un espace vectoriel de dimension finie ($n < +\infty$), tout endomorphisme surjectif est un automorphisme (d'après le théorème du rang, $\dim(\ker(f_A)) = n - \operatorname{rg}(f_A) = 0$, donc $f_A$ est injectif).
Ainsi, $f_A \in \operatorname{GL}(\mathbb{K}^n)$, ce qui prouve l'existence d'un unique endomorphisme réciproque $f_A^{-1}$.
De $f_A \circ f_B = \operatorname{id}_{\mathbb{K}^n}$, on déduit par composition à gauche par $f_A^{-1}$ que $f_B = f_A^{-1}$.
Par conséquent, $f_B \circ f_A = \operatorname{id}_{\mathbb{K}^n}$, ce qui se traduit matriciellement par $BA = I_n$.
La matrice $B$ est donc l'inverse bilatère de $A$ : $A \in \operatorname{GL}_n(\mathbb{K})$ et $A^{-1} = B$.
$\blacksquare$

---

### Théorème 2.3 : Structure de l'ensemble des solutions d'un système linéaire
Soit $A \in \mathcal{M}_{n,p}(\mathbb{K})$ et $Y \in \mathcal{M}_{n,1}(\mathbb{K})$. Considérons l'équation matricielle :
$$(S) : AX = Y \quad \text{d'inconnue } X \in \mathcal{M}_{p,1}(\mathbb{K})$$
1. L'ensemble des solutions de l'équation homogène associée $(S_0) : AX = 0$ est $\ker(A) = \ker(f_A)$, qui est un sous-espace vectoriel de $\mathcal{M}_{p,1}(\mathbb{K})$ de dimension $p - \operatorname{rg}(A)$.
2. L'équation $(S)$ admet au moins une solution si et seulement si $Y \in \operatorname{Im}(A)$.
3. Si $(S)$ admet une solution particulière $X_0 \in \mathcal{M}_{p,1}(\mathbb{K})$, l'ensemble $\mathcal{S}$ des solutions de $(S)$ est le sous-espace affine :
   $$\mathcal{S} = X_0 + \ker(A) = \left\{ X_0 + X_h \in \mathcal{M}_{p,1}(\mathbb{K}) \;\middle|\; AX_h = 0 \right\}$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### 3.1. Algorithme du pivot de Gauss & Matrices élémentaires
Toute opération élémentaire sur les lignes d'une matrice $A \in \mathcal{M}_{n,p}(\mathbb{K})$ équivaut à la multiplication à gauche par une matrice inversible $E \in \operatorname{GL}_n(\mathbb{K})$ :

1. **Transvection :** $L_i \leftarrow L_i + \lambda L_j$ ($i \ne j, \lambda \in \mathbb{K}$)
   $$T_{i,j}(\lambda) = I_n + \lambda E_{i,j}, \quad (T_{i,j}(\lambda))^{-1} = T_{i,j}(-\lambda)$$
2. **Dilatation :** $L_i \leftarrow \lambda L_i$ ($\lambda \in \mathbb{K}^*$)
   $$D_i(\lambda) = I_n + (\lambda - 1)E_{i,i}, \quad (D_i(\lambda))^{-1} = D_i(\lambda^{-1})$$
3. **Permutation :** $L_i \leftrightarrow L_j$
   $$P_{i,j} = I_n - E_{i,i} - E_{j,j} + E_{i,j} + E_{j,i}, \quad (P_{i,j})^{-1} = P_{i,j}$$

*Remarque symétrique :* Les opérations élémentaires sur les colonnes $C_i$ correspondent à la multiplication à droite par ces mêmes matrices dans $\mathcal{M}_p(\mathbb{K})$.

### 3.2. Méthode du pivot de Gauss-Jordan pour l'inversion
Pour déterminer si $A \in \mathcal{M}_n(\mathbb{K})$ est inversible et calculer son inverse :
1. On juxtapose $A$ et la matrice identité : $(A \mid I_n) \in \mathcal{M}_{n, 2n}(\mathbb{K})$.
2. On applique l'algorithme de Gauss par opérations élémentaires sur les lignes pour transformer le bloc de gauche en la matrice échelonnée réduite $I_n$.
3. Si le rang obtenu est strictement inférieur à $n$, alors $A \notin \operatorname{GL}_n(\mathbb{K})$.
4. Si le rang est égal à $n$, la matrice transformée finale est :
   $$(I_n \mid A^{-1})$$
   En effet : $(E_k \dots E_1) A = I_n \implies (E_k \dots E_1) I_n = A^{-1}$.

### 3.3. Calcul des puissances $A^k$ pour $k \in \mathbb{N}$
* **Formule du binôme de Newton :**
  Si $A, B \in \mathcal{M}_n(\mathbb{K})$ vérifient $AB = BA$, alors pour tout $k \in \mathbb{N}$ :
  $$(A + B)^k = \sum_{j=0}^k \binom{k}{j} A^j B^{k-j}$$
  *Application type :* Si $A = \lambda I_n + N$ avec $N^m = 0$ (nilpotente d'indice $m$), les termes d'indice $j \ge m$ s'annulent.
* **Polynôme annulateur et division euclidienne :**
  S'il existe un polynôme non nul $P \in \mathbb{K}[X]$ tel que $P(A) = 0_{\mathcal{M}_n(\mathbb{K})}$.
  Pour $k \in \mathbb{N}$, on réalise la division euclidienne de $X^k$ par $P(X)$ :
  $$X^k = P(X) Q(X) + R(X) \quad \text{avec } \deg(R) < \deg(P)$$
  En évaluant en la matrice $A$ :
  $$A^k = P(A) Q(A) + R(A) = R(A)$$

---

## ⚠️ 4. Pièges classiques & Erreurs à éviter

* **Absence d'intégrité :** L'anneau $(\mathcal{M}_n(\mathbb{K}), +, \times)$ n'est pas intègre dès que $n \ge 2$.
  $$AB = 0 \centernot\implies (A = 0 \text{ ou } B = 0)$$
Contre-exemple: * $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$.
  De même, $AB = AC$ n'implique pas $B = C$ sans l'hypothèse explicite $A \in \operatorname{GL}_n(\mathbb{K})$.

* **Non-commutativité et identités remarquables :**
  En général, $AB \ne BA$. Par conséquent :
  $$(A + B)^2 = A^2 + AB + BA + B^2 \ne A^2 + 2AB + B^2$$
  $$(A - B)(A + B) = A^2 + AB - BA - B^2 \ne A^2 - B^2$$
  L'utilisation de la formule du binôme de Newton requiert impérativement de vérifier au préalable la commutativité $AB = BA$.

* **Ordre dans l'inversion et la transposition d'un produit :**
  Pour $A, B \in \operatorname{GL}_n(\mathbb{K})$ :
  $$(AB)^{-1} = B^{-1} A^{-1} \quad (\text{et non } A^{-1} B^{-1})$$
  $${}^t(AB) = {}^tB \, {}^tA \quad (\text{et non } {}^tA \, {}^tB)$$

* **Mélange illicite des opérations élémentaires :**
  Lors de la résolution d'un système linéaire $AX = Y$ ou de l'inversion par la méthode de Gauss-Jordan, on applique **exclusivement des opérations élémentaires sur les lignes**. L'application d'une opération sur les colonnes modifierait le vecteur des variables $X$, faussant complètement le résultat.

* **Inversion unilatérale en dimension infinie :**
  La propriété « $AB = I_n \implies BA = I_n$ » repose fondamentalement sur la dimension finie de $\mathcal{M}_n(\mathbb{K})$. Elle devient fausse dans des espaces vectoriels de dimension infinie (e.g. opérateurs de décalage sur les suites). En colle, il est obligatoire de mentionner le cadre de dimension finie lors de l'utilisation de ce résultat.