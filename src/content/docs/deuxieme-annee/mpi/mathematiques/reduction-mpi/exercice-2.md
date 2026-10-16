---
title: 'Exercice 2 : Diagonalisation et polynôme annulateur'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $E$ un espace vectoriel sur le corps $\mathbb{K}$ ($\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$) de dimension finie $n \in \mathbb{N}^*$. On s'intéresse dans ce problème aux liens étroits entre les propriétés de diagonalisation d'un endomorphisme $u \in \mathcal{L}(E)$ et l'existence de polynômes annulateurs. 

Ce type de problématique est central dans les écrits des concours (Mines-Ponts, Centrale-Supélec, X-ENS) car il permet de caractériser la diagonalisabilité sans passer systématiquement par le calcul effectif des valeurs propres et des sous-espaces propres associés.

---

### ❓ Questions progressives

1. **Rappels et définitions préliminaires**
   Soit $u \in \mathcal{L}(E)$ et $P \in \mathbb{K}[X]$. 
   a) Rappeler la définition d'un polynôme annulateur de $u$.
   b) Montrer que l'ensemble $\mathcal{I}_u = \{P \in \mathbb{K}[X] \mid P(u) = 0_{\mathcal{L}(E)}\}$ est un idéal de $\mathbb{K}[X]$.
   c) En déduire l'existence et l'unicité d'un polynôme unitaire générateur de $\mathcal{I}_u$, noté $\pi_u$, appelé *polynôme minimal* de $u$.

2. **Propriétés spectrales et polynôme annulateur**
   Soit $u \in \mathcal{L}(E)$ et $P \in \mathbb{K}[X]$ un polynôme annulateur de $u$.
   a) Soit $\lambda \in \mathbb{K}$ une valeur propre de $u$ et $x \in E$ un vecteur propre associé. Montrer que $P(\lambda) = 0$.
   b) En déduire que le spectre $\operatorname{Sp}(u)$ de $u$ est inclus dans l'ensemble des racines de $P$ dans $\mathbb{K}$.

3. **Caractérisation par les polynômes annulateurs scindés à racines simples**
   Soit $u \in \mathcal{L}(E)$. 
   a) On suppose que $u$ est diagonalisable. Montrer qu'il existe un polynôme $P \in \mathbb{K}[X]$ scindé à racines simples sur $\mathbb{K}$ tel que $P(u) = 0_{\mathcal{L}(E)}$.
   b) Réciproquement, soit $P \in \mathbb{K}[X]$ un polynôme annulateur de $u$ scindé à racines simples sur $\mathbb{K}$. Montrer que $u$ est diagonalisable. (*Indication : on pourra utiliser une récurrence sur le nombre de racines distinctes de $P$ ou la décomposition en éléments simples*).

4. **Application pratique et analyse critique**
   Soit $A \in \mathcal{M}_3(\mathbb{R})$ la matrice définie par :
   $$A = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 2 & 1 \\ 0 & 0 & 3 \end{pmatrix}$$
   a) Déterminer le polynôme caractéristique de $A$, noté $\chi_A$.
   b) Calculer $(A - 2I_3)(A - 3I_3)$ et en déduire le polynôme minimal $\pi_A$ de $A$.
   c) La matrice $A$ est-elle diagonalisable dans $\mathcal{M}_3(\mathbb{R})$ ? Justifier rigoureusement.
   d) **Analyse critique du modèle :** Expliquer pourquoi l'étude des polynômes annulateurs est numériquement et théoriquement préférable au calcul direct des sous-espaces propres pour des matrices de grande taille.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pour montrer qu'un ensemble est un idéal de $\mathbb{K}[X]$, utilisez la caractérisation usuelle (non-vide, stable par combinaison linéaire, et absorbant par multiplication par un polynôme arbitraire). L'unicité du polynôme minimal unitaire découle de la structure d'anneau principal de $\mathbb{K}[X]$.
* **Question 2 :** Appliquez l'endomorphisme $P(u)$ au vecteur propre $x$ associé à $\lambda$. Écrivez $P(X) = \sum_{k=0}^{d} a_k X^k$ et remarquez que $u^k(x) = \lambda^k x$.
* **Question 3 :** 
  * *Sens direct :* Exprimez $E$ comme la somme directe des sous-espaces propres et construisez $P(X) = \prod_{i=1}^{r} (X - \lambda_i)$ où les $\lambda_i$ sont les valeurs propres distinctes.
  * *Sens indirect :* Utilisez le théorème de décomposition des noyaux (ou une récurrence) associé au fait que si $P(u) = 0$ avec $P = \prod_{i=1}^r (X - \lambda_i)$ à racines simples, alors $\ker(u - \lambda_i \operatorname{id}_E)$ est en somme directe et reconstitue $E$.
* **Question 4 :** Pour le calcul matriciel, effectuez le produit par blocs ou par calcul direct. Attention au fait que $\chi_A$ et $\pi_A$ n'ont pas nécessairement les mêmes facteurs irréductibles, bien qu'ils aient les mêmes racines.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Rappels et définitions préliminaires
a) Un polynôme $P \in \mathbb{K}[X]$ est dit annulateur de $u \in \mathcal{L}(E)$ si $P(u) = 0_{\mathcal{L}(E)}$.

b) Posons $\mathcal{I}_u = \{P \in \mathbb{K}[X] \mid P(u) = 0_{\mathcal{L}(E)}\}$.
- **Non-vacuité :** Le polynôme nul $0$ vérifie $0(u) = 0_{\mathcal{L}(E)}$, donc $0 \in \mathcal{I}_u$ (et $\mathcal{I}_u$ contient aussi le polynôme caractéristique d'après le théorème de Cayley-Hamilton).
- **Stabilité par combinaison linéaire :** Soient $(P, Q) \in \mathcal{I}_u^2$ et $(\alpha, \beta) \in \mathbb{K}^2$. On a :
  $$(\alpha P + \beta Q)(u) = \alpha P(u) + \beta Q(u) = \alpha 0_{\mathcal{L}(E)} + \beta 0_{\mathcal{L}(E)} = 0_{\mathcal{L}(E)}$$
  Donc $\alpha P + \beta Q \in \mathcal{I}_u$.
- **Absorption :** Soit $P \in \mathcal{I}_u$ et $A \in \mathbb{K}[X]$. On a :
  $$(AP)(u) = A(u) \circ P(u) = A(u) \circ 0_{\mathcal{L}(E)} = 0_{\mathcal{L}(E)}$$
  Donc $AP \in \mathcal{I}_u$.
Ainsi, $\mathcal{I}_u$ est un idéal de $\mathbb{K}[X]$.

c) L'anneau $\mathbb{K}[X]$ étant un anneau principal (car $\mathbb{K}$ est un corps), tout idéal de $\mathbb{K}[X]$ est principal. Par conséquent, l'idéal $\mathcal{I}_u$ s'écrit sous la forme $\mathcal{I}_u = \pi_u \mathbb{K}[X]$ où $\pi_u \in \mathbb{K}[X]$. 
Puisque les générateurs d'un idéal principal non nul diffèrent d'une constante multiplicative non nulle près, il existe un unique polynôme générateur unitaire (de coefficient dominant égal à $1$), que l'on appelle le **polynôme minimal** de $u$.

---

#### 2. Propriétés spectrales et polynôme annulateur
a) Soit $\lambda \in \operatorname{Sp}(u)$ et $x \in E \setminus \{0_E\}$ tel que $u(x) = \lambda x$. 
Par récurrence immédiate, pour tout entier $k \in \mathbb{N}$, on a $u^k(x) = \lambda^k x$.
Soit $P(X) = \sum_{k=0}^{d} a_k X^k \in \mathcal{I}_u$. En évaluant $P(u)$ en $x$, il vient :
$$0_E = P(u)(x) = \left(\sum_{k=0}^{d} a_k u^k\right)(x) = \sum_{k=0}^{d} a_k u^k(x) = \sum_{k=0}^{d} a_k \lambda^k x = \left(\sum_{k=0}^{d} a_k \lambda^k\right) x = P(\lambda) x$$
Comme $x \neq 0_E$, on en déduit nécessairement que $P(\lambda) = 0$.

b) D'après la question précédente, pour toute valeur propre $\lambda$ de $u$, $\lambda$ est racine de tout polynôme annulateur $P$ de $u$. En particulier, $\lambda$ est racine du polynôme minimal $\pi_u$. Par conséquent, $\operatorname{Sp}(u) \subseteq \{\lambda \in \mathbb{K} \mid P(\lambda) = 0\}$.

---

#### 3. Caractérisation par les polynômes annulateurs scindés à racines simples
a) Supposons $u$ diagonalisable. Il existe une base de $E$ formée de vecteurs propres de $u$. Soit $\lambda_1, \lambda_2, \dots, \lambda_r$ les valeurs propres *distinctes* de $u$. 
Considérons le polynôme $P(X) = \prod_{i=1}^{r} (X - \lambda_i)$. 
Par définition, $P$ est scindé à racines simples sur $\mathbb{K}$. 
Soit $x \in E$. Comme $E = \bigoplus_{i=1}^r \ker(u - \lambda_i \operatorname{id}_E)$, il existe des vecteurs $x_i \in \ker(u - \lambda_i \operatorname{id}_E)$ tels que $x = \sum_{i=1}^r x_i$.
Alors, pour tout $j \in \{1, \dots, r\}$, l'endomorphisme $(u - \lambda_j \operatorname{id}_E)$ annule $x_j$. 
Puisque les facteurs commutent entre eux, on a :
$$P(u)(x) = \left(\prod_{i=1}^{r} (u - \lambda_i \operatorname{id}_E)\right)\left(\sum_{j=1}^r x_j\right) = \sum_{j=1}^r \left(\prod_{i=1}^{r} (u - \lambda_i \operatorname{id}_E)\right)(x_j)$$
Dans le produit pour l'indice $j$, le terme $(u - \lambda_j \operatorname{id}_E)$ est présent et s'applique à $x_j$, ce qui donne $0_E$. Ainsi, chaque terme de la somme est nul, donc $P(u)(x) = 0_E$ pour tout $x \in E$, ce qui signifie que $P(u) = 0_{\mathcal{L}(E)}$.

b) Réciproquement, soit $P \in \mathbb{K}[X]$ un polynôme annulateur de $u$ scindé à racines simples. Notons $\lambda_1, \dots, \lambda_r$ ses racines distinctes. On a donc :
$$P(X) = \prod_{i=1}^{r} (X - \lambda_i)$$
avec $\lambda_i \neq \lambda_j$ si $i \neq j$. 
Par le théorème de décomposition des noyaux (les polynômes $(X - \lambda_i)$ étant deux à deux premiers entre eux), on a :
$$\ker(P(u)) = \bigoplus_{i=1}^{r} \ker(u - \lambda_i \operatorname{id}_E)$$
Puisque $P(u) = 0_{\mathcal{L}(E)}$, on a $\ker(P(u)) = E$. Par suite :
$$E = \bigoplus_{i=1}^{r} \ker(u - \lambda_i \operatorname{id}_E)$$
Par définition, pour tout $i \in \{1, \dots, r\}$, $\ker(u - \lambda_i \operatorname{id}_E)$ est soit réduit à $\{0_E\}$ (si $\lambda_i \notin \operatorname{Sp}(u)$), soit égal au sous-espace propre associé à la valeur propre $\lambda_i$. 
En sommant une base de chacun de ces sous-espaces non triviaux, on obtient une base de $E$ constituée de vecteurs propres de $u$. Par conséquent, **$u$ est diagonalisable**.

---

#### 4. Application pratique et analyse critique
a) Calculons le polynôme caractéristique de $A$ :
$$\chi_A(X) = \det(X I_3 - A) = \begin{vmatrix} X - 2 & -1 & -1 \\ 0 & X - 2 & -1 \\ 0 & 0 & X - 3 \end{vmatrix}$$
Puisque la matrice est triangulaire supérieure, son déterminant est le produit de ses coefficients diagonaux :
$$\chi_A(X) = (X - 2)^2 (X - 3)$$

b) Calculons explicitement les matrices $(A - 2I_3)$ et $(A - 3I_3)$ :
$$A - 2I_3 = \begin{pmatrix} 0 & 1 & 1 \\ 0 & 0 & 1 \\ 0 & 0 & 1 \end{pmatrix}, \quad A - 3I_3 = \begin{pmatrix} -1 & 1 & 1 \\ 0 & -1 & 1 \\ 0 & 0 & 0 \end{pmatrix}$$
Effectuons le produit $(A - 2I_3)(A - 3I_3)$ :
$$(A - 2I_3)(A - 3I_3) = \begin{pmatrix} 0 & 1 & 1 \\ 0 & 0 & 1 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} -1 & 1 & 1 \\ 0 & -1 & 1 \\ 0 & 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & -1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \neq \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$
Le polynôme $(X - 2)(X - 3)$ n'est donc pas annulateur de $A$. 
D'après le théorème de Cayley-Hamilton, $\chi_A(A) = 0_{\mathcal{M}_3(\mathbb{R})}$, donc $\pi_A$ divise $\chi_A = (X - 2)^2(X - 3)$. Les seuls candidats pour $\pi_A$ sont :
- $(X - 2)(X - 3)$ (éliminé car le produit calculé ci-dessus n'est pas nul)
- $(X - 2)^2(X - 3)$

Par conséquent, le polynôme minimal de $A$ est **$\pi_A(X) = (X - 2)^2(X - 3)$**.

c) Le polynôme minimal de $A$, $\pi_A(X) = (X - 2)^2(X - 3)$, possède une racine double ($\lambda = 2$). 
D'après la question 3, un endomorphisme est diagonalisable si et seulement si son polynôme minimal est scindé à racines **simples**. 
Ici, $\pi_A$ n'est pas à racines simples, donc **la matrice $A$ n'est pas diagonalisable**.

d) **Analyse critique du modèle :** 
Le calcul direct des sous-espaces propres (résolution de systèmes linéaires paramétriques de type $(A - \lambda I_3)X = 0$) devient extrêmement lourd et numériquement instable pour des matrices de grande dimension ($n \gg 3$), en raison des erreurs d'arrondi en calcul flottant qui faussent le calcul exact du rang. 
En revanche, l'utilisation des polynômes annulateurs et du polynôme minimal offre une approche algébrique globale : elle permet de tester la diagonalisabilité ou d'obtenir des décompositions spectrales sans nécessairement expliciter l'ensemble des vecteurs propres, ce qui constitue une économie algorithmique majeure en calcul scientifique.