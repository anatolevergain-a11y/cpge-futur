---
title: 'Cours : Algèbre linéaire et calcul matriciel'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Algèbre linéaire et calcul matriciel

Dans l'ensemble de ce cours, $\mathbb{K}$ désigne le corps $\mathbb{R}$ (ou éventuellement $\mathbb{C}$). Les lettres $E, F, G$ désignent des $\mathbb{K}$-espaces vectoriels.

---

## I. Espaces et sous-espaces vectoriels

### 1. Structure de $\mathbb{K}$-espace vectoriel

#### Définition : Espace vectoriel
On appelle **$\mathbb{K}$-espace vectoriel** un ensemble non vide $E$ muni :
1. D'une loi de composition interne notée $+ : E \times E \to E$ telle que $(E, +)$ soit un groupe abélien (commutatif), d'élément neutre noté $0_E$.
2. D'une loi de composition externe notée $\cdot : \mathbb{K} \times E \to E$ vérifiant, pour tous $(\lambda, \mu) \in \mathbb{K}^2$ et tous $(u, v) \in E^2$ :
   - $\lambda \cdot (u + v) = \lambda \cdot u + \lambda \cdot v$
   - $(\lambda + \mu) \cdot u = \lambda \cdot u + \mu \cdot u$
   - $(\lambda \mu) \cdot u = \lambda \cdot (\mu \cdot u)$
   - $1_{\mathbb{K}} \cdot u = u$

Les éléments de $E$ sont appelés des **vecteurs**, ceux de $\mathbb{K}$ des **scalaires**.

### 2. Sous-espaces vectoriels (sev)

#### Définition : Sous-espace vectoriel
Une partie $F$ de $E$ est un **sous-espace vectoriel** de $E$ si et seulement si :
1. $F \subset E$ et $F \neq \emptyset$ (en pratique, on vérifie $0_E \in F$).
2. $F$ est stable par combinaison linéaire :
$$\forall (u, v) \in F^2, \quad \forall (\lambda, \mu) \in \mathbb{K}^2, \quad \lambda u + \mu v \in F$$

#### Théorème : Intersection de sous-espaces vectoriels
Soit $(F_i)_{i \in I}$ une famille quelconque de sous-espaces vectoriels de $E$.
L'intersection $\bigcap_{i \in I} F_i$ est un sous-espace vectoriel de $E$.

> **Démonstration :**
> - Pour tout $i \in I$, $0_E \in F_i$, donc $0_E \in \bigcap_{i \in I} F_i \neq \emptyset$.
> - Soient $(u, v) \in \left(\bigcap_{i \in I} F_i\right)^2$ et $\lambda, \mu \in \mathbb{K}$.
>   Pour tout $i \in I$, $u \in F_i$ et $v \in F_i$. Comme $F_i$ est un sev, $\lambda u + \mu v \in F_i$.
>   Ceci étant vrai pour tout $i \in I$, $\lambda u + \mu v \in \bigcap_{i \in I} F_i$. $\blacksquare$

*Remarque fondamentale :* La réunion de deux sous-espaces vectoriels n'est généralement **pas** un sous-espace vectoriel (sauf si l'un est inclus dans l'autre).

### 3. Sous-espace engendré

#### Définition : Combinaison linéaire et espace vectoriel engendré
Soit $\mathcal{F} = (v_1, \dots, v_p) \in E^p$ une famille finie de vecteurs.
- On appelle **combinaison linéaire** des vecteurs de $\mathcal{F}$ tout vecteur $u \in E$ de la forme :
$$u = \sum_{k=1}^p \lambda_k v_k \quad \text{avec } (\lambda_1, \dots, \lambda_p) \in \mathbb{K}^p$$
- Le **sous-espace vectoriel engendré** par $\mathcal{F}$, noté $\operatorname{Vect}(\mathcal{F})$ ou $\operatorname{Vect}(v_1, \dots, v_p)$, est l'ensemble de toutes les combinaisons linéaires de ces vecteurs :
$$\operatorname{Vect}(v_1, \dots, v_p) = \left\{ \sum_{k=1}^p \lambda_k v_k \ \middle|\ (\lambda_1, \dots, \lambda_p) \in \mathbb{K}^p \right\}$$

$\operatorname{Vect}(\mathcal{F})$ est le plus petit sous-espace vectoriel de $E$ (au sens de l'inclusion) contenant la famille $\mathcal{F}$.

---

## II. Familles de vecteurs et dimension finie

### 1. Familles libres, génératrices, bases

Soit $\mathcal{F} = (e_1, \dots, e_n)$ une famille finie de vecteurs de $E$.

#### Définition : Famille libre (vecteurs linéairement indépendants)
La famille $\mathcal{F}$ est dite **libre** si :
$$\forall (\lambda_1, \dots, \lambda_n) \in \mathbb{K}^n, \quad \sum_{i=1}^n \lambda_i e_i = 0_E \implies \lambda_1 = \lambda_2 = \dots = \lambda_n = 0$$
Dans le cas contraire, la famille est dite **liée**. Il existe alors une combinaison linéaire nulle à coefficients non tous nuls.

#### Définition : Famille génératrice
La famille $\mathcal{F}$ est dite **génératrice** de $E$ si :
$$\operatorname{Vect}(e_1, \dots, e_n) = E$$
Autrement dit, tout vecteur de $E$ s'écrit comme combinaison linéaire des éléments de $\mathcal{F}$.

#### Définition : Base
La famille $\mathcal{B} = (e_1, \dots, e_n)$ est une **base** de $E$ si elle est à la fois libre et génératrice de $E$.

#### Théorème fondamental : Caractérisation par unicité des composantes
$\mathcal{B} = (e_1, \dots, e_n)$ est une base de $E$ si et seulement si pour tout vecteur $x \in E$, il existe un unique $n$-uplet $(\lambda_1, \dots, \lambda_n) \in \mathbb{K}^n$ tel que :
$$x = \sum_{i=1}^n \lambda_i e_i$$
Les scalaires $\lambda_i$ sont appelés les **coordonnées** (ou composantes) de $x$ dans la base $\mathcal{B}$.

---

### 2. Dimension finie

#### Définition : Espace de dimension finie
Un $\mathbb{K}$-espace vectoriel $E$ est dit de **dimension finie** s'il admet une famille génératrice finie. Par convention, l'espace nul $\{0_E\}$ est de dimension finie, et $\dim(\{0_E\}) = 0$.

#### Théorème de la dimension (admis en CPGE)
Soit $E$ un espace vectoriel admettant une base formée de $n$ vecteurs. Alors toutes les bases de $E$ possèdent exactement $n$ vecteurs. Cet entier naturel $n$ est appelé la **dimension** de $E$, noté $\dim(E)$ ou $\dim_{\mathbb{K}}(E)$.

#### Théorème : Théorème de la base incomplète
Soit $E$ un espace vectoriel de dimension $n \ge 1$.
- Toute famille libre $\mathcal{L} = (u_1, \dots, u_p)$ de $E$ vérifie $p \le n$. Si $p < n$, on peut la compléter par $n - p$ vecteurs d'une famille génératrice donnée pour former une base de $E$.
- De toute famille génératrice $\mathcal{G} = (v_1, \dots, v_m)$ de $E$, on peut extraire une base de $E$. En particulier, $m \ge n$.

#### Corollaire : Caractérisations d'une base en dimension connue
Soit $E$ un espace vectoriel de dimension finie $n \in \mathbb{N}^*$, et soit $\mathcal{F}$ une famille de $p$ vecteurs de $E$.
1. Si $\mathcal{F}$ est libre, alors $p \le n$. De plus, si $p = n$, alors $\mathcal{F}$ est une base de $E$.
2. Si $\mathcal{F}$ est génératrice de $E$, alors $p \ge n$. De plus, si $p = n$, alors $\mathcal{F}$ est une base de $E$.

#### Théorème : Dimension d'un sous-espace vectoriel
Soit $E$ un espace vectoriel de dimension finie et $F$ un sev de $E$.
1. $F$ est de dimension finie et $\dim(F) \le \dim(E)$.
2. Si $\dim(F) = \dim(E)$, alors $F = E$.

---

## III. Applications linéaires

### 1. Définitions et premières propriétés

#### Définition : Application linéaire
Soient $E$ et $F$ deux $\mathbb{K}$-espaces vectoriels. Une application $f : E \to F$ est une **application linéaire** (ou morphisme d'espaces vectoriels) si :
$$\forall (u, v) \in E^2, \quad \forall (\lambda, \mu) \in \mathbb{K}^2, \quad f(\lambda u + \mu v) = \lambda f(u) + \mu f(v)$$

- L'ensemble des applications linéaires de $E$ dans $F$ est noté $\mathcal{L}(E, F)$. C'est un sous-espace vectoriel de l'espace des fonctions de $E$ dans $F$.
- Si $E = F$, $f$ est un **endomorphisme** de $E$. On note cet ensemble $\mathcal{L}(E)$.
- Une application linéaire bijective est appelée un **isomorphisme**. Si $E = F$, c'est un **automorphisme** de $E$. L'ensemble des automorphismes de $E$ est noté $\mathcal{GL}(E)$.

### 2. Noyau et Image

#### Définition : Noyau et Image
Soit $f \in \mathcal{L}(E, F)$.
- Le **noyau** de $f$, noté $\ker(f)$, est :
$$\ker(f) = \{x \in E \mid f(x) = 0_F\} = f^{-1}(\{0_F\})$$
- L'**image** de $f$, notée $\operatorname{Im}(f)$, est :
$$\operatorname{Im}(f) = \{f(x) \mid x \in E\} = f(E)$$

#### Propriété
- $\ker(f)$ est un sous-espace vectoriel de $E$.
- $\operatorname{Im}(f)$ est un sous-espace vectoriel de $F$.
- Si $\mathcal{B} = (e_1, \dots, e_n)$ est une famille génératrice de $E$, alors $\operatorname{Im}(f) = \operatorname{Vect}(f(e_1), \dots, f(e_n))$.

#### Théorème : Critère d'injectivité
Soit $f \in \mathcal{L}(E, F)$.
$$f \text{ est injective} \iff \ker(f) = \{0_E\}$$

> **Démonstration :**
> - $(\implies)$ Supposons $f$ injective. Soit $x \in \ker(f)$. Alors $f(x) = 0_F$. Or $f(0_E) = 0_F$ par linéarité. Par injectivité, $x = 0_E$. Donc $\ker(f) = \{0_E\}$.
> - $(\impliedby)$ Supposons $\ker(f) = \{0_E\}$. Soient $(x, y) \in E^2$ tels que $f(x) = f(y)$.
>   Par linéarité, $f(x - y) = f(x) - f(y) = 0_F$, donc $(x - y) \in \ker(f)$.
>   Comme $\ker(f) = \{0_E\}$, on en déduit que $x - y = 0_E$, soit $x = y$. $f$ est injective. $\blacksquare$

### 3. Théorème du rang

#### Définition : Rang d'une application linéaire
Soit $f \in \mathcal{L}(E, F)$ avec $\dim(F) < +\infty$ ou $\dim(E) < +\infty$.
On appelle **rang** de $f$, noté $\operatorname{rg}(f)$, la dimension de son image :
$$\operatorname{rg}(f) = \dim(\operatorname{Im}(f))$$

#### Théorème fondamental du rang
Soit $E$ un espace vectoriel de **dimension finie**, et $F$ un espace vectoriel quelconque.
Soit $f \in \mathcal{L}(E, F)$. Alors $\operatorname{Im}(f)$ est de dimension finie et :
$$\dim(E) = \dim(\ker(f)) + \operatorname{rg}(f)$$

#### Corollaire : Caractérisation des isomorphismes en dimension égale
Soient $E$ et $F$ deux espaces de dimension finie vérifiant $\dim(E) = \dim(F)$, et $f \in \mathcal{L}(E, F)$.
Les assertions suivantes sont équivalentes :
1. $f$ est bijective (isomorphisme).
2. $f$ est injective ($\ker(f) = \{0_E\}$).
3. $f$ est surjective ($\operatorname{rg}(f) = \dim(F)$).

---

## IV. Calcul matriciel

### 1. Définitions et opérations fondamentales

On note $\mathcal{M}_{n, p}(\mathbb{K})$ l'ensemble des matrices à $n$ lignes et $p$ colonnes à coefficients dans $\mathbb{K}$. Si $n = p$, on note $\mathcal{M}_n(\mathbb{K})$.

#### Produit matriciel
Soient $A = (a_{i,j}) \in \mathcal{M}_{n, p}(\mathbb{K})$ et $B = (b_{j,k}) \in \mathcal{M}_{p, q}(\mathbb{K})$.
Le produit $C = AB$ est défini dans $\mathcal{M}_{n, q}(\mathbb{K})$ par :
$$c_{i,k} = \sum_{j=1}^p a_{i,j} b_{j,k} \quad \text{pour } 1 \le i \le n, \ 1 \le k \le q$$

*Propriétés :*
- Le produit est associatif : $(AB)C = A(BC)$.
- Le produit est distributif par rapport à l'addition : $A(B + C) = AB + AC$.
- **Attention :** Le produit n'est **pas commutatif** en général ($AB \neq BA$).
- $\mathcal{M}_n(\mathbb{K})$ n'est pas intègre : on peut avoir $AB = 0$ avec $A \neq 0$ et $B \neq 0$ (diviseurs de zéro).

#### Transposition
Pour $A = (a_{i,j}) \in \mathcal{M}_{n,p}(\mathbb{K})$, la transposée $A^\top \in \mathcal{M}_{p,n}(\mathbb{K})$ est définie par :
$$(A^\top)_{i,j} = a_{j,i}$$
Propriété fondamentale : $(AB)^\top = B^\top A^\top$.

---

### 2. Représentation matricielle

#### Définition : Matrice d'une application linéaire
Soient $E$ muni d'une base $\mathcal{B} = (e_1, \dots, e_p)$ et $F$ muni d'une base $\mathcal{B}' = (f_1, \dots, f_n)$.
Soit $u \in \mathcal{L}(E, F)$.
La **matrice de $u$ relativement aux bases $\mathcal{B}$ et $\mathcal{B}'$**, notée $\operatorname{Mat}_{\mathcal{B}, \mathcal{B}'}(u)$ (ou $M_{\mathcal{B}}^{\mathcal{B}'}(u)$), est la matrice de $\mathcal{M}_{n, p}(\mathbb{K})$ dont la $j$-ième colonne est formée des coordonnées du vecteur $u(e_j)$ dans la base $\mathcal{B}'$ :
$$\operatorname{Mat}_{\mathcal{B}, \mathcal{B}'}(u) = \begin{pmatrix} 
\mid & & \mid \\
\operatorname{Coord}_{\mathcal{B}'}(u(e_1)) & \dots & \operatorname{Coord}_{\mathcal{B}'}(u(e_p)) \\
\mid & & \mid 
\end{pmatrix}$$

#### Théorème : Isomorphisme de représentation
L'application :
$$\Phi : \mathcal{L}(E, F) \longrightarrow \mathcal{M}_{n, p}(\mathbb{K}), \quad u \longmapsto \operatorname{Mat}_{\mathcal{B}, \mathcal{B}'}(u)$$
est un isomorphisme d'espaces vectoriels. En particulier :
$$\dim(\mathcal{L}(E, F)) = \dim(E) \times \dim(F) = n \times p$$

#### Théorème : Traduction de la composition
Soient $E, F, G$ trois espaces de dimension finie munis respectivement des bases $\mathcal{B}_E, \mathcal{B}_F, \mathcal{B}_G$.
Soient $u \in \mathcal{L}(E, F)$ et $v \in \mathcal{L}(F, G)$. Alors :
$$\operatorname{Mat}_{\mathcal{B}_E, \mathcal{B}_G}(v \circ u) = \operatorname{Mat}_{\mathcal{B}_F, \mathcal{B}_G}(v) \times \operatorname{Mat}_{\mathcal{B}_E, \mathcal{B}_F}(u)$$

---

### 3. Changement de base

#### Définition : Matrice de passage
Soient $\mathcal{B} = (e_1, \dots, e_n)$ et $\mathcal{B}' = (e'_1, \dots, e'_n)$ deux bases d'un même espace $E$.
On appelle **matrice de passage** de $\mathcal{B}$ à $\mathcal{B}'$, notée $P_{\mathcal{B} \to \mathcal{B}'}$ (ou $\operatorname{Pass}(\mathcal{B}, \mathcal{B}')$), la matrice de l'application identité $\operatorname{id}_E$ de la base $\mathcal{B}'$ vers la base $\mathcal{B}$ :
$$P_{\mathcal{B} \to \mathcal{B}'} = \operatorname{Mat}_{\mathcal{B}', \mathcal{B}}(\operatorname{id}_E)$$
Ses colonnes contiennent les coordonnées des vecteurs de la **nouvelle base** $\mathcal{B}'$ exprimés dans l'**ancienne base** $\mathcal{B}$.

#### Propriétés
1. $P_{\mathcal{B} \to \mathcal{B}'}$ est inversible, et son inverse est la matrice de passage inverse :
$$\left(P_{\mathcal{B} \to \mathcal{B}'}\right)^{-1} = P_{\mathcal{B}' \to \mathcal{B}}$$
2. **Formule pour les vecteurs :** Si $X = \operatorname{Mat}_{\mathcal{B}}(x)$ et $X' = \operatorname{Mat}_{\mathcal{B}'}(x)$, alors :
$$X = P_{\mathcal{B} \to \mathcal{B}'} X' \iff X' = P_{\mathcal{B} \to \mathcal{B}'}^{-1} X$$
3. **Formule pour les endomorphismes :** Soit $u \in \mathcal{L}(E)$, $A = \operatorname{Mat}_{\mathcal{B}}(u)$, $A' = \operatorname{Mat}_{\mathcal{B}'}(u)$ et $P = P_{\mathcal{B} \to \mathcal{B}'}$. Alors :
$$A' = P^{-1} A P$$

---

## V. Systèmes linéaires et inversion de matrices

### 1. Inversibilité d'une matrice carrée

#### Définition : Matrice inversible
Une matrice $A \in \mathcal{M}_n(\mathbb{K})$ est dite **inversible** s'il existe une matrice $B \in \mathcal{M}_n(\mathbb{K})$ telle que :
$$AB = BA = I_n$$
Si une telle matrice existe, elle est unique, notée $A^{-1}$, et appelée inverse de $A$.
L'ensemble des matrices inversibles de $\mathcal{M}_n(\mathbb{K})$ forme le groupe linéaire noté $\mathcal{GL}_n(\mathbb{K})$.

#### Théorème : Caractérisations de l'inversibilité
Pour une matrice carrée $A \in \mathcal{M}_n(\mathbb{K})$, les propositions suivantes sont équivalentes :
1. $A$ est inversible.
2. Il existe $B \in \mathcal{M}_n(\mathbb{K})$ tel que $AB = I_n$ (ou $BA = I_n$).
3. Le rang de $A$ vaut $n$ : $\operatorname{rg}(A) = n$.
4. Pour tout vecteur colonne $X \in \mathcal{M}_{n,1}(\mathbb{K})$, $AX = 0 \implies X = 0$.
5. Pour tout $Y \in \mathcal{M}_{n,1}(\mathbb{K})$, le système $AX = Y$ admet une unique solution ($X = A^{-1}Y$).

---

## VI. Méthodes fondamentales de calcul

### Méthode 1 : Déterminer la liberté ou la dépendance d'une famille de vecteurs
Pour étudier l'indépendance linéaire de $\mathcal{F} = (v_1, \dots, v_p)$ dans $\mathbb{K}^n$ :
1. Écrire l'équation vectorielle $\sum_{k=1}^p \lambda_k v_k = 0_{\mathbb{K}^n}$, d'inconnues scalaires $\lambda_1, \dots, \lambda_p$.
2. Traduire cette équation sous la forme d'un système linéaire homogène de $n$ équations à $p$ inconnues.
3. Résoudre le système par la méthode du pivot de Gauss :
   - Si l'unique solution est le $p$-uplet nul $(0, \dots, 0)$, la famille est **libre**.
   - S'il existe des solutions non nulles (au moins une variable libre/auxiliaire), la famille est **liée**.

### Méthode 2 : Calculer l'inverse d'une matrice par l'algorithme de Gauss-Jordan
Pour inverser une matrice $A \in \mathcal{M}_n(\mathbb{K})$ :
1. Juxtaposer la matrice identité à droite de la matrice $A$ pour former la matrice augmentée $(A \mid I_n)$.
2. Appliquer les opérations élémentaires sur les lignes ($L_i \leftrightarrow L_j$, $L_i \leftarrow \alpha L_i$ avec $\alpha \neq 0$, $L_i \leftarrow L_i + \beta L_j$) pour transformer le bloc de gauche en une matrice triangulaire supérieure, puis en la matrice identité $I_n$.
3. Répercuter simultanément chaque opération sur le bloc de droite.
4. Si le pivotement réussit à obtenir $I_n$ à gauche, le bloc de droite obtenu est l'inverse $A^{-1}$ :
$$(A \mid I_n) \xrightarrow{\text{opérations sur les lignes}} (I_n \mid A^{-1})$$
5. Si un zéro apparaît sur la diagonale sans possibilité d'échange (pivot nul), la matrice $A$ n'est pas inversible.

### Méthode 3 : Recherche du noyau et de l'image d'un endomorphisme représenté par une matrice $A$
Soit $A \in \mathcal{M}_{n, p}(\mathbb{K})$ la matrice associée à $u \in \mathcal{L}(\mathbb{K}^p, \mathbb{K}^n)$ dans les bases canoniques.
- **Pour $\ker(u)$ :**
  Résoudre le système linéaire homogène $AX = 0$. Exprimer les composantes liées en fonction des composantes libres pour extraire une base du sous-espace des solutions.
- **Pour $\operatorname{Im}(u)$ :**
  Les colonnes $C_1, \dots, C_p$ de $A$ forment une famille génératrice de $\operatorname{Im}(u)$. Appliquer l'algorithme du pivot de Gauss sur les colonnes de $A$ (ou échelonner la transposée $A^\top$ par lignes) pour éliminer les colonnes redondantes et en extraire une base.

### Méthode 4 : Calcul des puissances d'une matrice $A^k$
Trois techniques canoniques en BCPST :
1. **Polynôme annulateur :** Trouver un polynôme $P$ tel que $P(A) = 0$. Effectuer la division euclidienne de $X^k$ par $P(X)$ :
$$X^k = P(X) Q(X) + R_k(X) \implies A^k = R_k(A)$$
2. **Formule du binôme de Newton :** Décomposer $A = D + N$ avec $D$ et $N$ qui **commutent** ($DN = ND$) et $N$ nilpotente (il existe $m$ tel que $N^m = 0$). Alors :
$$A^k = \sum_{j=0}^{\min(k, m-1)} \binom{k}{j} D^{k-j} N^j$$
3. **Changement de base (Diagonalisation) :** Trouver $P$ inversible et $D$ diagonale telles que $A = PDP^{-1}$. On a alors pour tout $k \in \mathbb{N}$ :
$$A^k = P D^k P^{-1}$$

---

## VII. Pièges classiques à éviter

1. **Confusion $AB = 0 \centernot\implies A = 0 \text{ ou } B = 0$ :** L'anneau $\mathcal{M}_n(\mathbb{K})$ n'est pas intègre. Ne simplifiez jamais par $A$ dans une égalité $AB = AC$, sauf si vous avez préalablement démontré que $A$ est inversible (alors $A^{-1}$ existe et on multiplie **à gauche** par $A^{-1}$).
2. **Sens de la multiplication matricielle :** $AB \neq BA$ en général.
   - Si $A = P B P^{-1}$, on a $A^k = P B^k P^{-1}$ et **non pas** $P^k B^k P^{-k}$.
   - Pour la formule du binôme : $(A+B)^k = \sum_{j=0}^k \binom{k}{j} A^j B^{k-j}$ est **FAUX** si $AB \neq BA$.
3. **Erreur dans la matrice de passage :** Dans $P_{\mathcal{B} \to \mathcal{B}'}$, les colonnes représentent les vecteurs de la **nouvelle** base $\mathcal{B}'$ décomposés selon la **base de départ** $\mathcal{B}$. Ne pas intervertir l'ancienne et la nouvelle base.
4. **Relations entre dimensions :**
   - Le théorème du rang exige que l'espace de départ soit de dimension finie : $\dim(E) = \dim(\ker(f)) + \operatorname{rg}(f)$.
   - $\dim(F + G) = \dim(F) + \dim(G) - \dim(F \cap G)$ (Formule de Grassmann). La somme n'est directe que si et seulement si $\dim(F \cap G) = 0$.
5. **Inversion non justifiée :** Avant d'écrire $A^{-1}$, il est impératif de prouver son existence, soit en calculant son rang ($\operatorname{rg}(A) = n$), soit en montrant que $\ker(A) = \{0\}$, soit par l'algorithme de Gauss-Jordan aboutissant à $I_n$.