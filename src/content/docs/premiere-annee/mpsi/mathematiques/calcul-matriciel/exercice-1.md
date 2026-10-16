---
title: 'Exercice 1 : Produit matriciel et inversibilité'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ : Étude de l'inversibilité de matrices dépendant de paramètres et commutativité

**Filière :** MPSI  
**Matière :** Mathématiques  
Chapitre: ** Calcul matriciel et systèmes  
**Thème :** Produit matriciel, inversibilité et relations de commutation  

---

## Énoncé

Dans tout le problème, $n$ désigne un entier naturel supérieur ou égal à $2$. On note $\mathcal{M}_n(\mathbb{R})$ l'espace vectoriel des matrices carrées de taille $n$ à coefficients réels, et $I_n$ la matrice identité de $\mathcal{M}_n(\mathbb{R})$. 

Le problème se propose d'étudier l'inversibilité de matrices construites à l'aide de relations algébriques non triviales, de déterminer le commutant de certaines matrices et d'analyser une approximation numérique d'inverse de matrice, tout en soulevant les limites de la modélisation informatique.

---

## Questions

### Partie I : Une relation polynomiale et inversibilité
Soit $A \in \mathcal{M}_n(\mathbb{R})$ telle que $A^3 - 3A^2 + 2I_n = 0$.

1. Montrer que $A$ est inversible et exprimer son inverse $A^{-1}$ sous forme d'un polynôme en $A$.
2. Déterminer les valeurs propres complexes possibles de la matrice $A$ (on pourra utiliser le fait que pour tout polynôme $P$ et toute valeur propre $\lambda$ de $A$, $P(\lambda)$ est valeur propre de $P(A)$).
3. On suppose désormais que $n=2$ et que $A = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$. Vérifier que $A$ satisfait la relation précédente. 
   Construire une matrice $B \in \mathcal{M}_2(\mathbb{R})$ non nulle telle que $AB = BA$ sans être un polynôme en $A$ de degré $\le 2$ (on cherchera $B$ sous la forme d'un polynôme en $A$ ou d'une combinaison linéaire simple). *Plus précisément, déterminer explicitement le commutant de $A$, noté $\mathcal{C}(A)$.*

### Partie II : Perturbation d'une matrice inversible et limite du modèle
Soit $M \in \mathcal{M}_n(\mathbb{R})$ une matrice inversible et $H \in \mathcal{M}_n(\mathbb{R})$ une matrice de perturbation. On souhaite approcher l'inverse de $M + H$.

4. On suppose que la norme subordonnée de $H$ vérifie $\|H\| < \|M^{-1}\|^{-1}$. 
   Établir que la matrice $I_n + M^{-1}H$ est inversible. En déduire que $M+H$ est inversible et que son inverse peut se développer sous la forme d'une série de Neumann :
   $$(M+H)^{-1} = \sum_{k=0}^{+\infty} (-1)^k (M^{-1}H)^k M^{-1}$$
5. *Application numérique et analyse critique :* 
   On considère $M = \begin{pmatrix} 1 & 0 \\ 0 & 10^{-6} \end{pmatrix}$ et $H = \begin{pmatrix} 0 & 0 \\ 0 & 10^{-6} \end{pmatrix}$. 
   Calculer $(M+H)^{-1}$. Que remarquez-vous sur l'ordre de grandeur des coefficients de la matrice inverse par rapport à $H$ ? Discuter des limites de ce modèle d'inversion en arithmétique finie (ordinateurs).

---

## Pistes et Indications

- **Q1 :** Factorisez le polynôme $X^3 - 3X^2 + 2$ dans $\mathbb{R}[X]$. Isolez l'identité $I_n$ pour faire apparaître un facteur commun $A$.
- **Q2 :** Si $\lambda$ est valeur propre de $A$ associée à un vecteur non nul $X$, appliquez l'égalité polynomiale à $X$.
- **Q3 :** Pour trouver le commutant de $A = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$, écrivez une matrice $B = \begin{pmatrix} x & y \\ z & t \end{pmatrix}$ et résolvez le système linéaire découlant de $AB = BA$.
- **Q4 :** Pensez à l'identité algébrique $(I_n - X)\sum_{k=0}^N X^k = I_n - X^{N+1}$. Utilisez la convergence de la série géométrique matricielle lorsque $\|X\| < 1$.
- **Q5 :** Calculez explicitement $M+H$, son inverse, et observez le conditionnement de la matrice $M$.

---

## Corrigé

### Partie I : Une relation polynomiale et inversibilité

1. **Inversibilité et expression de $A^{-1}$ :**
   On factorise le polynôme $P(X) = X^3 - 3X^2 + 2$. Remarquons que $P(1) = 1 - 3 + 2 = 0$. 
   Par division euclidienne ou identification :
   $$X^3 - 3X^2 + 2 = (X - 1)(X^2 - 2X - 2)$$
   La matrice $A$ vérifiant $A^3 - 3A^2 + 2I_n = 0$, on a :
   $$A^3 - 3A^2 = -2I_n \iff A(A^2 - 3A) = -2I_n \iff A \left( -\frac{1}{2} (A^2 - 3A) \right) = I_n$$
   Ainsi, $A$ est inversible et son inverse est :
   $$A^{-1} = -\frac{1}{2}(A^2 - 3A) = \frac{3}{2}I_n - \frac{1}{2}A$$

2. **Valeurs propres de $A$ :**
   Soit $\lambda$ une valeur propre de $A$ et $X \neq 0$ un vecteur propre associé. On a $AX = \lambda X$. 
   En appliquant la relation polynomiale à $X$, on obtient :
   $$(A^3 - 3A^2 + 2I_n)X = 0 \implies (\lambda^3 - 3\lambda^2 + 2)X = 0$$
   Comme $X \neq 0$, nécessairement $\lambda^3 - 3\lambda^2 + 2 = 0$.
   Les valeurs propres de $A$ sont donc racines du polynôme $P(X)$, c'est-à-dire $1$ et $1 \pm \sqrt{3}$.

3. **Calcul du commutant pour $n=2$ :**
   Soit $B = \begin{pmatrix} x & y \\ z & t \end{pmatrix} \in \mathcal{M}_2(\mathbb{R})$. Calculons les produits :
   $$AB = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} x & y \\ z & t \end{pmatrix} = \begin{pmatrix} x+z & y+t \\ 2z & 2t \end{pmatrix}$$
   $$BA = \begin{pmatrix} x & y \\ z & t \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} x & x + 2y \\ z & z + 2t \end{pmatrix}$$
   La condition $AB = BA$ donne le système :
   $$\begin{cases} x+z = x \\ y+t = x+2y \\ 2z = z \\ 2t = z + 2t \end{cases} \iff \begin{cases} z = 0 \\ x = t - y \\ z = 0 \\ z = 0 \end{cases}$$
   Ainsi, $z = 0$ et $x = t-y$, ce qui signifie que $B$ est de la forme :
   $$B = \begin{pmatrix} t-y & y \\ 0 & t \end{pmatrix} = (t-y)\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + y\begin{pmatrix} -1 & 1 \\ 0 & 1 \end{pmatrix}$$
   Le commutant $\mathcal{C}(A)$ est donc l'espace vectoriel engendré par $I_2$ et $\begin{pmatrix} -1 & 1 \\ 0 & 1 \end{pmatrix}$. 
   Puisque tout polynôme en $A$ s'exprime comme une combinaison linéaire de $I_2$ et $A$ (le polynôme minimal de $A$ étant scindé à racines simples $X(X-1)(X-2)$ ou via Cayley-Hamilton sur un polynôme de degré 2), et que $A = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$, on constate que $\mathcal{C}(A)$ est de dimension 2, ce qui montre que le commutant contient des matrices qui ne sont pas de simples polynômes en $A$ (ou que les polynômes se réduisent à une forme spécifique).

---

### Partie II : Perturbation d'une matrice inversible et limite du modèle

4. **Série de Neumann :**
   Si $\|M^{-1}H\| < 1$, la matrice $X = -M^{-1}H$ vérifie $\|X\| < 1$. 
   Il est connu (cours d'analyse/algébre linéaire sur les normes matricielles) que $I_n - X = I_n + M^{-1}H$ est inversible et que son inverse s'exprime comme la somme de la série géométrique :
   $$(I_n + M^{-1}H)^{-1} = \sum_{k=0}^{+\infty} (-1)^k (M^{-1}H)^k$$
   Or, $M + H = M(I_n + M^{-1}H)$. Comme produit de matrices inversibles, $M+H$ est inversible et :
   $$(M+H)^{-1} = (I_n + M^{-1}H)^{-1} M^{-1} = \left( \sum_{k=0}^{+\infty} (-1)^k (M^{-1}H)^k \right) M^{-1}$$

5. **Application numérique et analyse critique :**
   Calculons $M+H$ :
   $$M+H = \begin{pmatrix} 1 & 0 \\ 0 & 10^{-6} \end{pmatrix} + \begin{pmatrix} 0 & 0 \\ 0 & 10^{-6} \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 2 \cdot 10^{-6} \end{pmatrix}$$
   Son inverse est immédiat :
   $$(M+H)^{-1} = \begin{pmatrix} 1 & 0 \\ 0 & \frac{1}{2} 10^{6} \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 5 \cdot 10^{5} \end{pmatrix}$$

   *Analyse critique des limites du modèle :*
   La perturbation $H$ est extrêmement petite ($\|H\| = 10^{-6}$), pourtant elle entraîne une modification gigantesque sur le coefficient $(2,2)$ de l'inverse (qui passe de $10^6$ à $5 \cdot 10^5$, soit une variation de l'ordre de $5 \cdot 10^5$). 
   * **Conditionnement :** Le nombre de conditionnement de la matrice $M$ (pour la norme subordonnée infinie, $\text{cond}(M) = \|M\| \|M^{-1}\|$) vaut ici $1 \times 10^6 = 10^6$. 
   * **Limite informatique :** En arithmétique à virgule flottante (précision machine $\varepsilon_{\text{mach}} \approx 10^{-16}$ pour le double standard), une matrice mal conditionnée amplifie considérablement les erreurs d'arrondi. Si $H$ représente une erreur de mesure ou d'arrondi, l'erreur relative sur le calcul de l'inverse est multipliée par le conditionnement. Le modèle théorique de Neumann garantit mathématiquement l'inversibilité, mais **l'évaluation numérique par ordinateur devient numériquement instable** pour des matrices de grand conditionnement, rendant les résultats aberrants si l'on ne recourt pas à des méthodes de régularisation ou à une arithmétique de plus haute précision.