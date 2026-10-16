---
title: 'Cours : Réduction de matrices et Probabilités continues'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Réduction de matrices et Probabilités continues
**Filière :** BCPST 2ème année — **Matière :** Mathématiques

---

## PARTIE I : RÉDUCTION DES MATRICES CARRÉES

Dans cette partie, $K = \mathbb{R}$ ou $\mathbb{C}$, $E$ désigne un $K$-espace vectoriel de dimension finie $n$, et $M_n(K)$ l'espace des matrices carrées d'ordre $n$.

### 1. Valeurs propres, vecteurs propres, sous-espaces propres

#### Définitions
*   Soit $f \in \mathcal{L}(E)$ et $M \in M_n(K)$.
*   Un scalaire $\lambda \in K$ est une **valeur propre** de $f$ (ou de $M$) s'il existe un vecteur non nul $x \in E$ (ou $X \in M_{n,1}(K)$) tel que :
    $$f(x) = \lambda x \quad (\text{resp. } MX = \lambda X)$$
*   Un tel vecteur $x$ (ou $X$) est appelé **vecteur propre** associé à $\lambda$.
*   Le **sous-espace propre** associé à $\lambda$, noté $E_\lambda(f)$ ou $\ker(f - \lambda \text{id})$, est l'ensemble des vecteurs propres associés à $\lambda$ auguré du vecteur nul :
    $$E_\lambda(f) = \{x \in E \mid f(x) = \lambda x\} = \ker(f - \lambda \text{id}_E)$$

#### Proposition (Propriétés fondamentales)
1. $E_\lambda(f)$ est un sous-espace vectoriel de $E$.
2. Une famille $(x_1, \dots, x_k)$ de vecteurs propres associés à des valeurs propres **deux à deux distinctes** $(\lambda_1, \dots, \lambda_k)$ est toujours **libres**.
3. En conséquence, la somme des sous-espaces propres associés à des valeurs propres distinctes est **directe** :
   $$\sum_{i=1}^k E_{\lambda_i}(f) = \bigoplus_{i=1}^k E_{\lambda_i}(f)$$

---

### 2. Polynôme caractéristique

#### Définition
Le **polynôme caractéristique** d'une matrice $M \in M_n(K)$ est le polynôme noté $\chi_M$ défini par :
$$\chi_M(\lambda) = \det(\lambda I_n - M) \quad (\text{ou } \det(M - \lambda I_n))$$
Remarque: $\chi_M(\lambda)$ est un polynôme unitaire de degré $n$ en la variable $\lambda$.*

#### Théorème fondamental
Les valeurs propres de $M$ sur $K$ sont exactement les **racines** de son polynôme caractéristique $\chi_M$ dans $K$.

#### Propriétés et invariants
Pour toute matrice $M \in M_n(K)$ :
*   **Trace :** La somme des racines de $\chi_M$ (comptées avec leur multiplicité) est égale à la trace de $M$, $\text{Tr}(M)$.
*   **Déterminant :** Le produit des racines de $\chi_M$ (comptées avec leur multiplicité) est égal à $\det(M)$.
*   Invariance par similitude : Si $A$ et $B$ sont semblables, alors $\chi_A = \chi_B$.

---

### 3. Diagonalisation

#### Définitions
*   Une matrice $M \in M_n(K)$ est dite **diagonalisable** s'il existe une matrice inversible $P \in M_n(K)$ et une matrice diagonale $D$ telles que :
    $$M = P D P^{-1}$$
*   Un endomorphisme $f \in \mathcal{L}(E)$ est diagonalisable s'il existe une base de $E$ constituée de vecteurs propres de $f$.

#### Théorème de diagonalisation (Conditions nécessaires et suffisantes)
Soit $M \in M_n(K)$ (ou $f \in \mathcal{L}(E)$) et soient $\lambda_1, \dots, \lambda_k$ les valeurs propres distinctes de $M$. Les assertions suivantes sont équivalentes :
1. $M$ est diagonalisable.
2. $\sum_{i=1}^k \dim(E_{\lambda_i}) = n$.
3. Pour tout $i \in \{1, \dots, k\}$, le polynôme $\chi_M$ est scindé sur $K$ et, si $\alpha_i$ est la multiplicité de $\lambda_i$ comme racine de $\chi_M$, on a l'égalité :
   $$\dim(E_{\lambda_i}) = \alpha_i$$
   *(Rappel : on a toujours l'inégalité $\dim(E_{\lambda_i}) \le \alpha_i$)*.

#### Corollaire important
Si $M$ possède $n$ valeurs propres **distinctes** dans $K$, alors $M$ est diagonalisable (le polynôme caractéristique est alors scindé à racines simples).

---

### 4. Trigonalisation

#### Définition
Une matrice $M \in M_n(K)$ est dite **trigonalisable** s'il existe une matrice inversible $P$ et une matrice triangulaire supérieure $T$ telles que :
$$M = P T P^{-1}$$

#### Théorème de trigonalisation
*   Une matrice $M \in M_n(K)$ est trigonalisable si et seulement si son polynôme caractéristique $\chi_M$ est **scindé** sur $K$.
*   *Corollaire (fondamental pour $\mathbb{C}$) :* Toute matrice de $M_n(\mathbb{C})$ est trigonalisable.

---

### 5. Théorème de Cayley-Hamilton

#### Théorème
Soit $M \in M_n(K)$ et soit $\chi_M$ son polynôme caractéristique. Alors, la matrice $M$ annule son propre polynôme :
$$\chi_M(M) = 0_{M_n(K)}$$
*(Attention : l'évaluation s'effectue dans l'anneau $M_n(K)$, le terme constant $c_0 I_n$ remplace la constante scalaire).*

---

## PARTIE II : PROBABILITÉS CONTINUES

### 1. Variables aléatoires à densité sur $\mathbb{R}$

#### Définition : Densité de probabilité
Une fonction $f : \mathbb{R} \to \mathbb{R}$ est appelée **densité de probabilité** si :
1. $f$ est positive ou nulle : $\forall x \in \mathbb{R}, f(x) \ge 0$.
2. $f$ est continue (ou continue par morceaux) sur $\mathbb{R}$.
3. L'intégrale généralisée de $f$ sur $\mathbb{R}$ converge et vaut $1$ :
   $$\int_{-\infty}^{+\infty} f(x) \, dx = 1$$

#### Définition : Variable aléatoire à densité
Une variable aléatoire réelle $X$ (définie sur un espace probabilisé $(\Omega, \mathcal{A}, P)$) est dite **à densité** s'il existe une densité de probabilité $f$ telle que, pour tout $x \in \mathbb{R}$, la fonction de répartition $F_X$ de $X$ s'exprime par :
$$F_X(x) = P(X \le x) = \int_{-\infty}^{x} f(t) \, dt$$
*Propriété : $F_X$ est de classe $\mathcal{C}^1$ sur $\mathbb{R}$ (sauf éventuellement en un nombre fini de points) et $F'_X(x) = f(x)$ là où $f$ est continue.*

---

### 2. Espérance, Variance et Moments

#### Espérance
Soit $X$ une variable aléatoire à densité de densité $f$. On dit que $X$ admet une **espérance** (ou est d'espérance finie) si l'intégrale (absolument convergente) suivante existe :
$$E(X) = \int_{-\infty}^{+\infty} t f(t) \, dt$$

#### Variance et Écart-type
Si $X$ admet un moment d'ordre 2 (c'est-à-dire si $\int_{-\infty}^{+\infty} t^2 f(t) \, dt$ converge), alors $X$ admet une **variance** définie par :
$$V(X) = E\left[(X - E(X))^2\right] = E(X^2) - (E(X))^2 = \int_{-\infty}^{+\infty} (t - E(X))^2 f(t) \, dt$$
L'écart-type est $\sigma(X) = \sqrt{V(X)}$.

---

### 3. Lois usuelles continues

| Loi | Support / Paramètres | Densité $f(x)$ | Espérance $E(X)$ | Variance $V(X)$ |
| :--- | :--- | :--- | :---: | :---: |
| **Uniforme** $\mathcal{U}([a,b])$ | $[a, b]$ ($a < b$) | $\frac{1}{b-a} \mathbb{I}_{[a,b]}(x)$ | $\frac{a+b}{2}$ | $\frac{(b-a)^2}{12}$ |
| **Exponentielle** $\mathcal{mathcal{E}}(\lambda)$ | $\mathbb{R}_+$ ($\lambda > 0$) | $\lambda e^{-\lambda x} \mathbb{I}_{\mathbb{R}_+}(x)$ | $\frac{1}{\lambda}$ | $\frac{1}{\lambda^2}$ |
| **Gaussienne (Normale)** $\mathcal{N}(\mu, \sigma^2)$ | $\mathbb{R}$ ($\mu \in \mathbb{R}, \sigma > 0$) | $\frac{1}{\sigma\sqrt{2\pi}} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$ | $\mu$ | $\sigma^2$ |

*Note sur la loi normale centrée réduite $X \sim \mathcal{N}(0,1)$ :*
Sa densité est notée $\varphi(x) = \frac{1}{\sqrt{2\pi}}e^{-x^2/2}$ et sa fonction de répartition $\Phi(x) = \int_{-\infty}^x \varphi(t) \, dt$. Si $X \sim \mathcal{N}(\mu, \sigma^2)$, alors la variable $Y = \frac{X-\mu}{\sigma}$ suit la loi $\mathcal{N}(0,1)$.

---

### 4. Couples de variables aléatoires à densité

#### Définition : Densité conjointe
Soit $(X, Y)$ un couple de variables aléatoires à valeurs dans $\mathbb{R}^2$. Ce couple admet une **densité conjointe** $f_{(X,Y)} : \mathbb{R}^2 \to \mathbb{R}$ (positive, continue par morceaux) telle que pour tout domaine $D \subset \mathbb{R}^2$ :
$$P((X,Y) \in D) = \iint_D f_{(X,Y)}(x,y) \, dx \, dy$$

#### Densités marginales
Si le couple $(X,Y)$ a pour densité conjointe $f_{(X,Y)}$, alors $X$ et $Y$ sont des variables à densité, et leurs densités marginales s'obtiennent par intégration :
$$f_X(x) = \int_{-\infty}^{+\infty} f_{(X,Y)}(x, y) \, dy \quad \text{et} \quad f_Y(y) = \int_{-\infty}^{+\infty} f_{(X,Y)}(x, y) \, dx$$

#### Indépendance
Les variables aléatoires $X$ et $Y$ sont dites **indépendantes** si, pour tous boréliens $A$ et $B$ de $\mathbb{R}$ :
$$P(X \in A \text{ et } Y \in B) = P(X \in A)P(Y \in B)$$
Dans le cas à densité, $X$ et $Y$ sont indépendantes si et seulement si on peut choisir :
$$f_{(X,Y)}(x,y) = f_X(x) f_Y(y)$$

#### Théorème de transfert (Cas du couple)
Si $g : \mathbb{R}^2 \to \mathbb{R}$ est continue, alors l'espérance de la variable aléatoire $g(X,Y)$ existe si et seulement si l'intégrale double suivante converge absolument :
$$E[g(X,Y)] = \int_{-\infty}^{+\infty} \int_{-\infty}^{+\infty} g(x,y) f_{(X,Y)}(x,y) \, dx \, dy$$
*Conséquence (Linéarité) :* $E(aX + bY) = aE(X) + bE(Y)$.
*Si $X$ et $Y$ sont indépendantes :* $E(XY) = E(X)E(Y)$ et $V(X+Y) = V(X) + V(Y)$.