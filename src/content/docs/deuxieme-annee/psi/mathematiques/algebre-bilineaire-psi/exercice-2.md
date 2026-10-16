---
title: 'Exercice : Endomorphismes symétriques et diagonalisation orthogonale'
description: 'Problème d entraînement type concours pour PSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $E$ un espace vectoriel euclidien de dimension $n$ ($\ge 2$), muni de son produit scalaire canonique noté $\langle \cdot, \cdot \rangle$ et de la norme associée $\|\cdot\|$. 

On considère un endomorphisme $u \in \mathcal{L}(E)$ symétrique (c'est-à-dire auto-adjoint) et on note $\text{Sp}(u) = \{\lambda_1, \lambda_2, \dots, \lambda_p\}$ l'ensemble de ses valeurs propres distinctes, avec $p \ge 1$.

L'objectif de ce problème est d'étudier certaines propriétés de commutation avec les endomorphismes symétriques et d'établir une minoration de la norme de $u$ sous des contraintes spectrales, situations très classiques à l'oral des concours Mines-Ponts et Centrale-Supélec.

---

### ❓ Questions progressives

1. **Préliminaire spectral** : Rappeler brièvement le théorème spectral pour l'endomorphisme $u$. Justifier que si $F$ est un sous-espace vectoriel de $E$ stable par $u$, alors son orthogonal $F^\perp$ est également stable par $u$.
2. **Caractérisation des projecteurs spectraux** : Pour tout $k \in \{1, \dots, p\}$, on note $P_k$ le projecteur orthogonal de $E$ sur le sous-espace propre $E_k = \ker(u - \lambda_k \text{id}_E)$. Exprimer $u$ en fonction des projecteurs $(P_k)_{1 \le k \le p}$ et des valeurs propres $(\lambda_k)_{1 \le k \le p}$. En déduire que tout endomorphisme $v \in \mathcal{L}(E)$ qui commute avec $u$ commute également avec chaque $P_k$.
3. **Étude d'une équation tensorielle** : Soit $w \in \mathcal{L}(E)$ un endomorphisme symétrique. On suppose que $u \circ w + w \circ u = 0$. 
   - a) Montrer que pour tout $k \in \{1, \dots, p\}$, $w(E_k) \subset \bigoplus_{j \neq k} E_j$.
   - b) En déduire que si $\lambda_k + \lambda_j \neq 0$ pour tous $k, j$, alors $w = 0$.
4. **Application métrique** : On suppose désormais que $u$ est à valeurs propres strictement positives : $0 < \lambda_1 < \lambda_2 < \dots < \lambda_p$. Soit $x \in E$ tel que $\|x\| = 1$ et $\|u(x)\| = \lambda_1$. Déterminer la nature du vecteur $x$ par rapport au spectre de $u$.

---

### 💡 Pistes & Indications méthodologiques

- **Q1** : Pensez à la récurrence sur la dimension ou à l'utilisation d'une base orthonormée (BON) de vecteurs propres. Pour la stabilité de $F^\perp$, écrivez la définition avec le produit scalaire.
- **Q2** : Utilisez la décomposition de $E$ comme somme directe orthogonale des espaces propres. Exprimez l'action de $u$ sur un vecteur quelconque décomposé selon cette somme. Pour la commutation, écrivez $u \circ v = v \upharpoonright_{E_k}$ et utilisez des polynômes en $u$.
- **Q3** : Appliquez l'égalité $u \circ w + w \circ u = 0$ à un vecteur propre de $u$. Pour la question b), raisonnez par l'absurde ou utilisez les projecteurs spectraux.
- **Q4** : Utilisez le théorème spectral pour écrire $x$ dans une BON de vecteurs propres. Traduisez les hypothèses sous forme d'égalités quadratiques.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Préliminaire spectral
* **Théorème spectral** : Puisque $u$ est un endomorphisme symétrique de l'espace euclidien $(E, \langle \cdot, \cdot \rangle)$, il existe une base orthonormée de $E$ constituée de vecteurs propres de $u$. De plus, les sous-espaces propres de $u$ sont deux à deux orthogonaux.
* **Stabilité de $F^\perp$** : Soit $F$ un s.e.v. de $E$ stable par $u$ (c'est-à-dire $u(F) \subset F$). Soit $y \in F^\perp$. Montrons que $u(y) \in F^\perp$. 
  Pour tout $x \in F$, par symétrie de $u$ :
  $$\langle u(y), x \rangle = \langle y, u(x) \rangle$$
  Comme $F$ est stable par $u$, on a $u(x) \in F$. De plus, par définition de $F^\perp$, comme $y \in F^\perp$ et $u(x) \in F$, le produit scalaire est nul. Ainsi :
  $$\langle u(y), x \rangle = 0 \quad \text{pour tout } x \in F$$
  Ceci signifie exactement que $u(y) \in F^\perp$. Le sous-espace $F^\perp$ est donc stable par $u$.

#### 2. Caractérisation des projecteurs spectraux
* **Décomposition de $u$** : L'espace $E$ se décompose en la somme directe orthogonale des sous-espaces propres : 
  $$E = E_1 \oplus E_2 \oplus \dots \oplus E_p$$
  Notons $P_k$ le projecteur orthogonal sur $E_k$. Les projecteurs $(P_k)_{1 \le k \le p}$ vérifient :
  $$\sum_{k=1}^p P_k = \text{id}_E, \quad P_k \circ P_j = \delta_{k,j} P_k \quad \text{et} \quad \forall x \in E, \; x = \sum_{k=1}^p P_k(x)$$
  Pour tout $x \in E$, en écrivant $x = \sum_{k=1}^p x_k$ avec $x_k = P_k(x) \in E_k$, on a :
  $$u(x) = \sum_{k=1}^p u(x_k) = \sum_{k=1}^p \lambda_k x_k = \sum_{k=1}^p \lambda_k P_k(x)$$
  Ainsi, on obtient l'identité fondamentale : 
  $$\mathbf{u = \sum_{k=1}^p \lambda_k P_k}$$
* **Commutation** : Soit $v \in \mathcal{L}(E)$ tel que $u \circ v = v \circ u$. Il est un résultat classique (souvent démontré via l'interpolation de Lagrange) que tout endomorphisme qui commute avec $u$ commute avec tous les projecteurs spectraux $P_k$ (car chaque $P_k$ est un polynôme en $u$). 
  Vérifions-le directement sur un espace propre : soit $x \in E_k$, donc $u(x) = \lambda_k x$. 
  Alors $u(v(x)) = v(u(x)) = v(\lambda_k x) = \lambda_k v(x)$, ce qui montre que $v(x) \in E_k$. 
  Le sous-espace propre $E_k$ est donc stable par $v$. Puisque $P_k$ est le projecteur orthogonal sur $E_k$ et que $E_k$ est stable par $v$, on en déduit que $P_k \circ v = v \circ P_k$.

#### 3. Étude d'une équation tensorielle ($u \circ w + w \circ u = 0$)
* **a) Stabilité des images par $w$** : Soit $x \in E_k$, de sorte que $u(x) = \lambda_k x$. Appliquons l'hypotèse $u \circ w + w \circ u = 0$ au vecteur $x$ :
  $$(u \circ w + w \circ u)(x) = 0 \implies u(w(x)) + w(\lambda_k x) = 0 \implies u(w(x)) = -\lambda_k w(x)$$
  Cette relation indique que le vecteur $w(x)$ est soit nul, soit un vecteur propre de $u$ associé à la valeur propre $-\lambda_k$ (si celle-ci existe dans le spectre). 
  Dans tous les cas, $u(w(x)) \in \bigoplus_{j \neq k} E_j$ (ou appartient à l'espace propre associé si $-\lambda_k$ est une valeur propre). Plus précisément, si $-\lambda_k$ n'est pas valeur propre, $w(x) = 0$. Quoi qu'il en soit, $w(E_k) \subset \bigoplus_{\lambda_j \neq -\lambda_k} E_j$.
* **b) Nullité de $w$** : Supposons que pour tous $k, j$, $\lambda_k + \lambda_j \neq 0$. 
  Soit $x \in E_k$. D'après la question précédente, $u(w(x)) = -\lambda_k w(x)$. 
  Si $w(x) \neq 0$, alors $w(x)$ serait un vecteur propre de $u$ associé à la valeur propre $-\lambda_k$. 
  Cependant, par hypothèse, $-\lambda_k$ ne peut pas être une valeur propre de $u$ (puisque si c'était le cas, il existerait un indice $j$ tel que $-\lambda_k = \lambda_j$, soit $\lambda_k + \lambda_j = 0$, ce qui est exclu).
  Par conséquent, le vecteur $w(x)$ ne peut être que nul : $w(x) = 0$. 
  Ceci étant vrai pour tout vecteur $x$ d'une base de $E_k$ et ce pour tout $k \in \{1, \dots, p\}$, on en conclut que $w$ s'annule sur chaque espace propre $E_k$. 
  Puisque $E$ est la somme directe des $E_k$, l'endomorphisme $w$ est nul partout : $\mathbf{w = 0}$.

#### 4. Application métrique
* Soit $x \in E$ tel que $\|x\| = 1$ et $\|u(x)\| = \lambda_1$.
* Choisissons une base orthonormée $(e_1, e_2, \dots, e_n)$ de $E$ constituée de vecteurs propres de $u$ associés aux valeurs propres $\lambda_1 < \lambda_2 < \dots < \lambda_p$. 
  Tout vecteur $x \in E$ se décompose sous la forme :
  $$x = \sum_{i=1}^n x_i e_i \quad \text{avec} \quad \sum_{i=1}^n x_i^2 = \|x\|^2 = 1$$
* Calculons la norme au carré de $u(x)$ :
  $$u(x) = \sum_{i=1}^n \lambda_i x_i e_i \implies \|u(x)\|^2 = \sum_{i=1}^n \lambda_i^2 x_i^2$$
* Par hypothèse, $\|u(x)\| = \lambda_1$, donc $\|u(x)\|^2 = \lambda_1^2$. Ainsi :
  $$\sum_{i=1}^n \lambda_i^2 x_i^2 = \lambda_1^2 \left( \sum_{i=1}^n x_i^2 \right) \iff \sum_{i=1}^n (\lambda_i^2 - \lambda_1^2) x_i^2 = 0$$
* Puisque les valeurs propres sont ordonnées et strictement positives ($0 < \lambda_1 < \lambda_2 < \dots < \lambda_p$), pour tout $i$ tel que $\lambda_i > \lambda_1$, on a $\lambda_i^2 - \lambda_1^2 > 0$. 
  Puisque $x_i^2 \geq 	0$, tous les termes de la somme $(\lambda_i^2 - \lambda_1^2) x_i^2$ sont positifs ou nuls. Leur somme étant nulle, chaque terme doit être nul :
  $$\forall i \in \{1, \dots, n\}, \quad (\lambda_i^2 - \lambda_1^2) x_i^2 = 0$$
* Ainsi, si $\lambda_i > \lambda_1$, on a nécessairement $x_i = 0$. 
  Par conséquent, $x$ ne possède des composantes non nulles que sur le sous-espace propre $E_1$ associé à la plus petite valeur propre $\lambda_1$. 
Conclusion: Le vecteur $x$ est un **vecteur propre unitaire de $u$ associé à la plus petite valeur propre $\lambda_1$** (c'est-à-dire $x \in E_1$ et $\|x\| = 1$).