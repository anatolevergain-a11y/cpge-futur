---
title: 'Exercice 1 : Polynôme annulateur et diagonalisation'
description: 'Problème d entraînement type concours pour MP.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de l'étude de la stabilité d'un système dynamique linéaire discret intervenant dans la modélisation de réseaux de transport d'énergie, on s'intéresse à l'évolution d'un vecteur d'états $\mathbf{X}_n \in \mathcal{M}_{n,1}(\mathbb{R})$ régi par la relation de récurrence vectorielle :
$$\mathbf{X}_{n+1} = A \mathbf{X}_n, \quad \forall n \in \mathbb{N}$$
où $A \in \mathcal{M}_d(\mathbb{R})$ est une matrice de transition représentant les taux de transfert entre différents nœuds du réseau. 

Pour dimensionner correctement les infrastructures et garantir l'absence de saturation (explosion en norme lorsque $n \to +\infty$), les ingénieurs doivent déterminer si la matrice $A$ est diagonalisable et évaluer le comportement asymptotique de ses puissances $A^n$. 

Dans ce problème, on se propose d'étudier un critère de diagonalisation basé sur un polynôme annulateur particulier, puis d'appliquer ces résultats à une matrice de modélisation simplifiée d'un réseau à $d=3$ nœuds.

Soit $E$ un $\mathbb{K}$-espace vectoriel (avec $\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$) de dimension finie $d$, et $u$ un endomorphisme de $E$.

---

### ❓ Questions progressives

1. **Préalable sur les polynômes annulateurs**
   Soit $P \in \mathbb{K}[X]$ un polynôme annulateur de $u$ (c'est-à-dire $P(u) = 0_{\mathcal{L}(E)}$). Montrer que si $\lambda$ est une valeur propre de $u$, alors $\lambda$ est nécessairement une racine de $P$.

2. **Condition suffisante de diagonalisation**
   On suppose qu'il existe un polynôme $P \in \mathbb{K}[X]$ scindé à racines simples sur $\mathbb{K}$ tel que $P(u) = 0$. 
   À l'aide du théorème de décomposition des noyaux, démontrer que $u$ est diagonalisable.

3. **Application à une matrice concrète de réseau**
   On considère la matrice $A$ associée au système de transport, définie par :
   $$A = \begin{pmatrix} 2 & -1 & 1 \\ 0 & 1 & 0 \\ -1 & 1 & 0 \end{pmatrix} \in \mathcal{M}_3(\mathbb{R})$$
   Calculer le polynôme $P(X) = X^3 - 3X^2 + 3X - 1$ évalué en $A$ (on remarquera que $P(X) = (X-1)^3$). $A$ est-elle annulée par un polynôme scindé à racines simples ? Conclure directement quant à la diagonalisation de $A$ par cette méthode.

4. **Recherche des sous-espaces propres**
   Déterminer le spectre de $A$ et calculer la dimension de chaque sous-espace propre associé. La matrice $A$ est-elle diagonalisable ?

5. **Analyse critique du modèle et des limites physiques**
   *On suppose que le vecteur $\mathbf{X}_n$ représente la quantité d'énergie (en $\text{MWh}$) stockée dans trois nœuds interconnectés.*
   - Si un modèle linéaire conduit à une matrice non diagonalisable dont la valeur propre maximale est strictement supérieure à $1$ en module, que peut-on prédire pour la stabilité physique du réseau à long terme ?
   - Discutez des limites inhérentes à un modèle linéaire stationnaire ($\mathbf{X}_{n+1} = A \mathbf{X}_n$) pour simuler un réseau électrique réel soumis à des fluctuations de charge aléatoires et à des saturations physiques des lignes.

---

### 💡 Pistes & Indications

1. **Question 1 :** Écrire la définition d'une valeur propre associée à un vecteur non nul $x$, puis appliquer l'endomorphisme $P(u)$ à $x$.
2. **Question 2 :** Rappeler le théorème de décomposition des noyaux pour un polynôme $P = \prod_{i=1}^k (X - \lambda_i)$ avec des $\lambda_i$ distincts. Quel est le lien entre le noyau $\ker(u - \lambda_i \text{id})$ et les espaces propres ?
3. **Question 3 & 4 :** Calculez $(A - I_3)^2$ puis $(A - I_3)^3$. Utilisez la définition du polynôme minimal ou cherchez directement les vecteurs propres associés aux valeurs propres trouvées.
4. **Question 5 :** Pensez à l'impact de la non-diagonalisation (apparition de blocs de Jordan et de termes séculaires en $n \lambda^n$ ou $n^k$) couplé à une valeur propre $\ge 1$.

---

### 📋 Corrigé détaillé et analyse des résultats

1. **Préalable sur les polynômes annulateurs**
   Soit $\lambda$ une valeur propre de $u$ et $x \in E \setminus \{0\}$ un vecteur propre associé, de sorte que $u(x) = \lambda x$. 
   Par récurrence immédiate, pour tout entier $k \in \mathbb{N}$, on a $u^k(x) = \lambda^k x$.
   Soit $P = \sum_{k=0}^{m} a_k X^k$ un polynôme annulateur de $u$. Alors :
   $$P(u)(x) = \sum_{k=0}^{m} a_k u^k(x) = \sum_{k=0}^{m} a_k \lambda^k x = \left( \sum_{k=0}^{m} a_k \lambda^k \right) x = P(\lambda)x$$
   Puisque $P(u) = 0_{\mathcal{L}(E)}$, on a $P(u)(x) = 0_E$. Ainsi, $P(\lambda)x = 0_E$. Comme $x \neq 0_E$, on en déduit que $P(\lambda) = 0$.

2. **Condition suffisante de diagonalisation**
   Puisque $P$ est scindé à racines simples sur $\mathbb{K}$, il s'écrit sous la forme :
   $$P = \prod_{i=1}^k (X - \lambda_i)$$
   où les $\lambda_1, \dots, \lambda_k$ sont des scalaires **distincts**.
   Le théorème de décomposition des noyaux s'applique car les facteurs $(X - \lambda_i)$ sont premiers entre eux deux à deux. On obtient :
   $$E = \bigoplus_{i=1}^k \ker((u - \lambda_i \text{id}))$$
   Par définition, pour tout $i \in \{1, \dots, k\}$, le noyau $\ker(u - \lambda_i \text{id})$ est inclus dans le sous-espace propre $\text{E}_{\lambda_i}(u)$ (et réciproquement par définition d'une valeur propre). 
   La somme directe de ces sous-espaces est égale à tout l'espace $E$, ce qui est la définition même d'un endomorphisme diagonalisable.

3. **Application à la matrice $A$**
   Calculons $A - I_3$ :
   $$A - I_3 = \begin{pmatrix} 1 & -1 & 1 \\ 0 & 0 & 0 \\ -1 & 1 & -1 \end{pmatrix}$$
   Calculons $(A - I_3)^2$ :
   $$(A - I_3)^2 = \begin{pmatrix} 1 & -1 & 1 \\ 0 & 0 & 0 \\ -1 & 1 & -1 \end{pmatrix} \begin{pmatrix} 1 & -1 & 1 \\ 0 & 0 & 0 \\ -1 & 1 & -1 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$
   On constate que $(A - I_3)^2 = 0_{\mathcal{M}_3(\mathbb{R})}$. Le polynôme $Q(X) = (X-1)^2$ est donc un polynôme annulateur de $A$. 
   Cependant, ce polynôme **n'est pas à racines simples** (la racine $1$ est d'ordre de multiplicité $2$). La condition suffisante du cours (racines simples) ne s'applique pas directement ici. Cela n'prouve pas que $A$ n'est pas diagonalisable, mais cela invite à chercher explicitement la dimension du sous-espace propre.

4. **Recherche des sous-espaces propres**
   Le polynôme caractéristique de $A$ est :
   $$\chi_A(X) = \det(X I_3 - A) = (X-1)^3$$
   La seule valeur propre de $A$ est $\lambda = 1$, de multiplicité algébrique $3$.
   Déterminons le sous-espace propre $\text{E}_1(A) = \ker(A - I_3)$ en résolvant le système $(A - I_3)X = 0$ :
   $$\begin{cases} x - y + z = 0 \\ 0 = 0 \\ -x + y - z = 0 \end{cases} \iff x - y + z = 0$$
   Ce sous-espace est donc défini par une seule équation cartésienne dans $\mathbb{R}^3$, il est de dimension $2$.
   Puisque la dimension du sous-espace propre $\text{dim}(\text{E}_1(A)) = 2$ est strictement inférieure à la multiplicité algébrique ($3$), **la matrice $A$ n'est pas diagonalisable**.

5. **Analyse critique du modèle et des limites physiques**
   - **Stabilité à long terme :** Une matrice non diagonalisable dont la valeur propre maximale est $1$ (ou supérieure à $1$ en module) engendre des termes séculaires du type $n^k \lambda^n$ dans l'expression générale de $\mathbf{X}_n$ (via la réduction de Jordan). Si $\lambda = 1$ et que la dimension du bloc de Jordan est supérieure ou égale à $2$ (ce qui est le cas ici avec un bloc de taille $2$), la solution générale comporte des termes en $n \times 1^n = n$. Le vecteur d'état $\mathbf{X}_n$ diverge linéairement vers l'infini lorsque $n \to +\infty$. Physiquement, le réseau d'énergie non contrôlé conduit à une accumulation infinie d'énergie, ce qui est absurde.
   - **Limites du modèle :** 
     1. *Linéarité et stationnarité :* Le modèle suppose des coefficients de transfert constants dans le temps ($A$ indépendante de $n$). En réalité, les impédances des lignes varient avec la température et la charge.
     2. *Absence de saturation :* Les infrastructures physiques possèdent des capacités maximales (effet Joule, limites thermiques des transformateurs). Un modèle linéaire pur ignore ces contraintes d'inégalités ($\mathbf{X}_n \leq \mathbf{X}_{\max}$).
     3. *Caractère discret :* L'approximation à pas de temps constant masque les dynamiques transCONTINUES rapides (oscillations électromécaniques à l'échelle de la milliseconde).