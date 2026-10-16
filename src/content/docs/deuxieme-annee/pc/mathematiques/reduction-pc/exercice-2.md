---
title: 'Exercice 2 : Applications aux équations différentielles'
description: 'Problème d entraînement type concours pour PC.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $n \in \mathbb{N}^*$. On considère l'espace vectoriel $\mathcal{M}_n(\mathbb{R})$ des matrices carrées d'ordre $n$ à coefficients réels. On note $\mathcal{C}^1(\mathbb{R}, \mathbb{R}^n)$ l'espace des fonctions de $\mathbb{R}$ dans $\mathbb{R}^n$ continûment dérivables.

L'objectif de ce problème est d'étudier la résolution et le comportement asymptotique des systèmes différentiels linéaires du premier ordre à coefficients constants de la forme :
$$\forall t \in \mathbb{R}, \quad X'(t) = A X(t)$$
où $A \in \mathcal{M}_n(\mathbb{R})$ et $X : \mathbb{R} \to \mathbb{R}^n$ est une fonction inconnue de classe $\mathcal{C}^1$. On identifiera les éléments de $\mathbb{R}^n$ à des matrices colonnes de $\mathcal{M}_{n,1}(\mathbb{R})$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Existence et unicité de l'exponentielle de matrice** : 
   Pour toute matrice $M \in \mathcal{M}_n(\mathbb{R})$, montrer que la série de matrices $\sum_{k=0}^{+\infty} \frac{M^k}{k!}$ converge normalement sur tout compact de $\mathcal{M}_n(\mathbb{R})$. On définit ainsi $\exp(M) = \sum_{k=0}^{+\infty} \frac{M^k}{k!}$.

2. **Propriétés algébriques fondamentales** :
   Soit $A \in \mathcal{M}_n(\mathbb{R})$. 
   a) Établir que la fonction $t \mapsto \exp(tA)$ est de classe $\mathcal{C}^1$ sur $\mathbb{R}$ et calculer sa dérivée.
   b) Soit $X_0 \in \mathbb{R}^n$. Montrer que l'unique solution du problème de Cauchy :
      $$\begin{cases} X'(t) = A X(t) \\ X(0) = X_0 \end{cases}$$
      est donnée par $X(t) = \exp(tA) X_0$.

3. **Réduction et calcul explicite** :
   On considère la matrice $A = \begin{pmatrix} 1 & -1 \\ 2 & 4 \end{pmatrix}$.
   a) Déterminer les valeurs propres de $A$ et préciser si $A$ est diagonalisable dans $\mathcal{M}_n(\mathbb{R})$.
   b) Déterminer une matrice inversible $P$ et une matrice simple $J$ (diagonale ou de Jordan) telles que $A = P J P^{-1}$.
   c) En déduire l'expression explicite de $\exp(tA)$ pour tout $t \in \mathbb{R}$, puis résoudre le système différentiel associé avec la condition initiale $X(0) = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

4. **Analyse qualitative et critique du modèle** :
   a) Soit $A \in \mathcal{M}_n(\mathbb{R})$. On note $\operatorname{Sp}(A)$ l'ensemble des valeurs propres (éventuellement complexes) de $A$. À quelle condition nécessaire et suffisante sur $\operatorname{Sp}(A)$ a-t-on $\lim_{t \to +\infty} \exp(tA) = 0_{\mathcal{M}_n(\mathbb{R})}$ ?
   b) *Analyse critique du modèle linéaire* : En pratique, les coefficients d'un système physique réel ne sont jamais rigoureusement constants. Si l'on perturbe le système par un terme non linéaire ou dépendant du temps de la forme $X'(t) = A X(t) + f(t, X(t))$, avec $\|f(t, X)\| = o(\|X\|)$ en $0$, quel théorème permet de relier le comportement qualitatif des solutions du système non linéaire au voisinage de l'origine à celui du système linéaire homogène ? Préciser les hypothèses requises sur $\operatorname{Sp}(A)$ pour assurer la stabilité asymptotique locale.

---

### 💡 Pistes & Indications méthodologiques

* **Q1** : Utiliser une norme subordonnée sur $\mathcal{M}_n(\mathbb{R})$ (par exemple $\|\cdot\|_{\infty}$ ou $\|\cdot\|_2$) qui vérifie la propriété d'algébrisation $\|AB\| \le \|A\|\|B\|$. La convergence normale sur tout compact découle de la convergence normale de la série exponentielle réelle par majoration.
* **Q2** : Pour dériver terme à terme, utiliser le théorème de dérivation des séries de fonctions vectorielles (ou matricielles). L'unicité du problème de Cauchy s'obtient classiquement par la méthode de Gronwall ou en dérivant le produit $\exp(-tA)X(t)$.
* **Q3** : Calculer le polynôme caractéristique $\chi_A(\lambda) = \det(A - \lambda I_2)$. Diagonaliser $A$ en cherchant des bases de vecteurs propres. Pour $\exp(tA)$, utiliser la formule de conjugaison $\exp(tA) = P \exp(tJ) P^{-1}$.
* **Q4** : Utiliser la réduction de Dunford ou la mise sous forme de Jordan pour expliciter $\exp(tA)$ en fonction des valeurs propres et de leurs multiplicités. Pour l'analyse critique, penser au théorème de Lyapunov ou au théorème de Grobman-Hartman (stabilité linéaire).

---

### 📋 Corrigé détaillé pas à pas

1. **Existence et unicité de l'exponentielle de matrice** :
   Munissons $\mathcal{M}_n(\mathbb{R})$ d'une norme d'algèbres subordonnée $\|\cdot\|$. On sait que pour toutes matrices $A, B \in \mathcal{M}_n(\mathbb{R})$, on a $\|AB\| \le \|A\|\|B\|$. 
   Pour tout $R > 0$ et pour toute matrice $M$ telle que $\|M\| \le R$, le terme général de la série matricielle vérifie :
   $$\left\| \frac{M^k}{k!} \right\| \le \frac{\|M\|^k}{k!} \le \frac{R^k}{k!}$$
   La série numérique $\sum \frac{R^k}{k!}$ converge (vers $\exp(R)$). Par conséquent, la série de fonctions matricielles $\sum_{k=0}^{+\infty} \frac{t^k M^k}{k!}$ (ou la série définissant $\exp(M)$) converge normalement sur toute boule fermée $\bar{B}(0, R)$, donc sur tout compact de $\mathcal{M}_n(\mathbb{R})$. L'espace $\mathcal{M}_n(\mathbb{R})$ étant de dimension finie $n^2$, il est complet (isomorphe à $\mathbb{R}^{n^2}$), ce qui assure la convergence absolue et normale de la série pour toute matrice $M$.

2. **Propriétés algébriques fondamentales** :
   a) La série $\sum_{k=0}^{+\infty} \frac{t^k A^k}{k!}$ converge normalement sur tout compact de $\mathbb{R}$ (par exemple $[-R, R]$, majorée par $\sum \frac{(|t|\|A\|)^k}{k!}$). Par le théorème de dérivation terme à terme des séries de fonctions de classe $\mathcal{C}^1$, la fonction $t \mapsto \exp(tA)$ est de classe $\mathcal{C}^1$ sur $\mathbb{R}$ et sa dérivée est :
   $$\frac{d}{dt} \left( \sum_{k=0}^{+\infty} \frac{t^k A^k}{k!} \right) = \sum_{k=1}^{+\infty} \frac{k t^{k-1} A^k}{k!} = \sum_{k=1}^{+\infty} \frac{t^{k-1} A^{k-1}}{(k-1)!} A = \left( \sum_{j=0}^{+\infty} \frac{t^j A^j}{j!} \right) A = \exp(tA) A$$
   b) Soit $X(t) = \exp(tA) X_0$. D'après le calcul précédent :
   $$X'(t) = \frac{d}{dt}(\exp(tA)) X_0 = \exp(tA) A X_0 = A (\exp(tA) X_0) = A X(t)$$
   De plus, $X(0) = \exp(0) X_0 = I_n X_0 = X_0$. $X(t)$ est donc bien solution.
   L'unicité se démontre en considérant une autre solution $Y(t)$ et en posant $Z(t) = \exp(-tA) Y(t)$. On a :
   $$Z'(t) = -A \exp(-tA) Y(t) + \exp(-tA) Y'(t) = \exp(-tA)(-A Y(t) + A Y(t)) = 0$$
   Donc $Z(t)$ est constante, égale à $Z(0) = Y(0) = X_0$. Ainsi, $\exp(-tA) Y(t) = X_0$, soit $Y(t) = \exp(tA) X_0 = X(t)$.

3. **Réduction et calcul explicite** :
   a) Calculons le polynôme caractéristique de $A = \begin{pmatrix} 1 & -1 \\ 2 & 4 \end{pmatrix}$ :
   $$\chi_A(\lambda) = \det \begin{pmatrix} 1-\lambda & -1 \\ 2 & 4-\lambda \end{pmatrix} = (1-\lambda)(4-\lambda) + 2 = \lambda^2 - 5\lambda + 6 = (\lambda - 2)(\lambda - 3)$$
   Les valeurs propres de $A$ sont $\lambda_1 = 2$ et $\lambda_2 = 3$. Comme $A$ est une matrice d'ordre $2$ et possède $2$ valeurs propres distinctes, **$A$ est diagonalisable** dans $\mathcal{M}_2(\mathbb{R})$.
   b) Cherchons les sous-espaces propres associés :
   - Pour $\lambda_1 = 2$ : $(A - 2I_2)V_1 = 0 \iff \begin{pmatrix} -1 & -1 \\ 2 & 2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \iff x + y = 0$. On peut choisir $V_1 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.
   - Para $\lambda_2 = 3$ : $(A - 3I_2)V_2 = 0 \iff \begin{pmatrix} -2 & -1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \iff 2x + y = 0$. On peut choisir $V_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.
   On pose alors :
   $$P = \begin{pmatrix} 1 & 1 \\ -1 & -2 \end{pmatrix} \quad \text{et} \quad J = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$$
   On a $A = P J P^{-1}$. L'inverse de $P$ se calcule facilement : $P^{-1} = \begin{pmatrix} 2 & 1 \\ -1 & -1 \end{pmatrix}$.
   c) On a $\exp(tA) = P \exp(tJ) P^{-1}$. Comme $J$ est diagonale, $\exp(tJ) = \begin{pmatrix} e^{2t} & 0 \\ 0 & e^{3t} \end{pmatrix}$.
   Ainsi :
   $$\exp(tA) = \begin{pmatrix} 1 & 1 \\ -1 & -2 \end{pmatrix} \begin{pmatrix} e^{2t} & 0 \\ 0 & e^{3t} \end{pmatrix} \begin{pmatrix} 2 & 1 \\ -1 & -1 \end{pmatrix} = \begin{pmatrix} 2e^{2t} - e^{3t} & e^{2t} - e^{3t} \\ -2e^{2t} + 2e^{3t} & -e^{2t} + 2e^{3t} \end{pmatrix}$$
   La solution avec $X(0) = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$ est :
   $$X(t) = \exp(tA) X(0) = \begin{pmatrix} 2e^{2t} - e^{3t} & e^{2t} - e^{3t} \\ -2e^{2t} + 2e^{3t} & -e^{2t} + 2e^{3t} \end{pmatrix} \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} e^{2t} \\ -e^{2t} \end{pmatrix}$$

4. **Analyse qualitative et critique du modèle** :
   a) $\lim_{t \to +\infty} \exp(tA) = 0_{\mathcal{M}_n(\mathbb{R})}$ si et seulement si **toutes les valeurs propres de $A$ ont une partie réelle strictement négative** ($\forall \lambda \in \operatorname{Sp}(A), \text{Re}(\lambda) < 0$). 
   *Justification rapide* : En utilisant la réduction de Jordan, $\exp(tA) = P \exp(tJ) P^{-1}$. Les blocs de Jordan de $\exp(tJ)$ sont de la forme $e^{\lambda t} \sum_{k=0}^{m} \frac{t^k}{k!} N^k$. Si $\text{Re}(\lambda) <0$, l'exponentielle l'emporte sur toute puissance polynomiale de $t$, assurant la limite nulle.
   b) *Analyse critique du modèle linéaire* : Pour un système perturbé de la forme $X'(t) = AX(t) + f(t, X(t))$ avec $\|f(t,X)\| = o(\|X\|)$ en $0$, le **théorème de stabilité linéaire (ou théorème de Lyapunov-Poincaré)** garantit que si toutes les valeurs propres de $A$ ont une partie réelle strictement négative, alors l'origine $0$ est un point d'équilibre **asymptotiquement stable** pour le système non linéaire. 
   *Limite du modèle* : Ce résultat est purement local (au voisinage de l'origine). Si la condition $\text{Re}(\lambda) < 0$ n'est pas vérifiée (par exemple si une valeur propre est de partie réelle nulle), l'analyse linéaire ne permet de conclure ni sur la stabilité, ni sur l'instabilité : les termes non linéaires d'ordre supérieur (négligés par l'approximation linéaire) deviennent déterminants.