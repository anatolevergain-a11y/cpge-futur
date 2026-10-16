---
title: 'Exercice 1 : Bases, dimension et rang'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ : Étude spectrale discrète et rang d'une famille d'endomorphismes

**Filière :** PCSI  
**Matière :** Mathématiques  
Chapitre: ** Espaces vectoriels  
**Thème :** Bases, dimension et rang  

---

## 1. Énoncé

Soit $E$ un $\mathbb{R}$-espace vectoriel de dimension finie $n \in \mathbb{N}^*$. On note $\mathcal{L}(E)$ l'espace vectoriel des endomorphismes de $E$. 
Soit $u \in \mathcal{L}(E)$ un endomorphisme fixé. On définit l'application $\Phi_u : \mathcal{L}(E) \to \mathcal{L}(E)$ par :
$$\forall f \in \mathcal{L}(E), \quad \Phi_u(f) = u \circ f - f \circ u$$

L'objectif de ce problème est d'étudier les propriétés de l'application $\Phi_u$, en particulier son noyau, son image, et d'établir des liens fondamentaux entre le rang de $u$ et la structure de $\mathcal{L}(E)$.

---

## 2. Questions

1. **Préliminaires structurels**
   * a) Montrer que $\Phi_u$ est un endomorphisme de l'espace vectoriel $\mathcal{L}(E)$.
   * b) Expliciter le noyau $\ker(\Phi_u)$. Interpréter géométriquement ce sous-espace dans le cas où $u$ est diagonalisable à valeurs propres simples.

2. **Étude par projecteurs et rang**
   * On suppose désormais que $E = \mathbb{R}^2$ et on considère l'endomorphisme $u$ dont la matrice dans la base canonique est $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$.
   * a) Déterminer le rang de $u$.
   * b) Écrire la matrice de $\Phi_u$ dans une base bien choisie de $\mathcal{L}(E)$ (on pourra utiliser l'isomorphisme entre $\mathcal{L}(E)$ et $M_2(\mathbb{R})$).
   * c) En déduire le rang de $\Phi_u$ dans ce cas particulier.

3. **Généralisation et dimension**
   * a) Établir que si $u$ est inversible, alors $\text{Im}(\Phi_u)$ contient des endomorphismes remarquables. Que peut-on dire de $\text{rg}(\Phi_u)$ si $u$ est une homothétie ?
   * b) Proposer une borne supérieure pour le rang de $\Phi_u$ en fonction de $n = \dim(E)$.

---

## 3. Pistes et indications

* **Q1.a :** Vérifiez la linéarité en revenant à la définition d'une application linéaire.
* **Q1.b :** Traduire l'appartenance à $\ker(\Phi_u)$ par une commutation. Penser aux matrices ou vecteurs propres.
* **Q2.b :** L'espace $\mathcal{L}(E)$ est de dimension $4$. Explicitez une base simple de $M_2(\mathbb{R})$, par exemple les matrices élémentaires $(E_{i,j})_{1 \le i,j \le 2}$, et calculez l'effet de $\Phi_u$ sur chacune d'elles.
* **Q3.b :** Penser au théorème du rang appliqué à $\Phi_u$ et à la structure des commutateurs.

---

## 4. Corrigé pas à pas

### 1. Préliminaires structurels
* **a)** Soit $(\lambda, \mu) \in \mathbb{R}^2$ et $(f, g) \in (\mathcal{L}(E))^2$. 
  $$\Phi_u(\lambda f + \mu g) = u \circ (\lambda f + \mu g) - (\lambda f + \mu g) \circ u$$
  Par bilinéarité de la composition des endomorphismes :
  $$\Phi_u(\lambda f + \mu g) = \lambda (u \circ f - f \circ u) + \mu (u \circ g - g \circ u) = \lambda \Phi_u(f) + \mu \Phi_u(g)$$
  Ainsi, $\Phi_u$ est linéaire. Comme son espace de départ et d'arrivée est $\mathcal{L}(E)$, **$\Phi_u$ est un endomorphisme de $\mathcal{L}(E)$**.

* **b)** Par définition, $f \in \ker(\Phi_u) \iff \Phi_u(f) = 0 \iff u \circ f = f \circ u$.  
  Le noyau est donc le **commutant** de $u$ dans $\mathcal{L}(E)$, noté $C(u)$.  
  Si $u$ est diagonalisable à valeurs propres simples, $u$ possède $n$ vecteurs propres linéairement indépendants. Tout endomorphisme qui commute avec $u$ doit laisser stables les droites propres de $u$. Par conséquent, $\ker(\Phi_u)$ est l'ensemble des endomorphismes diagonalisables dans la même base que $u$, et sa dimension est exactement $n$.

---

### 2. Étude par projecteurs et rang
* **a)** La matrice $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ est non nulle et sa première colonne est non nulle, sa deuxième est colinéaire à la première. Le rang de $A$ est donc **$1$**.

* **b)** Identifions $\mathcal{L}(E)$ à $M_2(\mathbb{R})$. Soit $(E_{11}, E_{12}, E_{21}, E_{22})$ la base canonique de $M_2(\mathbb{R})$.  
  On calcule l'action de $\Phi_A(M) = AM - MA$ sur chaque matrice de base :
  * $\Phi_A(E_{11}) = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} - \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} - \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} = -E_{12}$
  * $\Phi_A(E_{12}) = 0$
  * $\Phi_A(E_{21}) = E_{11} - E_{22}$
  * $\Phi_A(E_{22}) = E_{12}$

  La matrice de $\Phi_A$ dans cette base s'écrit par colonnes :
  $$M_{\text{base}}(\Phi_A) = \begin{pmatrix} 
  0 & 0 & 1 & 0 \\ 
  -1 & 0 & 0 & 1 \\ 
  0 & 0 & 0 & 0 \\ 
  0 & 0 & -1 & 0 
  $\end{pmatrix}$$

* **c)** Par un pivot de Gauss rapide sur cette matrice, on observe que deux colonnes sont clairement indépendantes (la 3ème et la 4ème, ou via le calcul du rang par échelonnement). On trouve $\text{rg}(\Phi_u) = 2$.

---

### 3. Généralisation et dimension
* **a)** Si $u$ est inversible, pour tout endomorphisme $g$, on peut chercher $f$ tel que $\Phi_u(f) = g$. De plus, si $u = \lambda \text{Id}_E$, alors :
  $$\forall f \in \mathcal{L}(E), \quad \Phi_u(f) = (\lambda \text{Id}_E) \circ f - f \circ (\lambda \text{Id}_E) = \lambda f - \lambda f = 0$$
  Dans ce cas, $\Phi_u = 0$, et **$\text{rg}(\Phi_u) = 0$**.

* **b)** Par le théorème du rang appliqué à $\Phi_u$ sur l'espace $\mathcal{L}(E)$ de dimension $n^2$ :
  $$\text{rg}(\Phi_u) + \dim(\ker(\Phi_u)) = n^2$$
  Puisque $\text{Id}_E \in \ker(\Phi_u)$, on a $\dim(\ker(\Phi_u)) \ge 1$. Par conséquent :
  $$\text{rg}(\Phi_u) \le n^2 - 1$$

---

## 5. Analyse critique et limites du modèle

Bien que ce problème offre une belle illustration algébrique des espaces de endomorphismes, le modèle présente des limites intrinsèques notables :

1. **Hypothèse de dimension finie :** L'isomorphisme entre $\mathcal{L}(E)$ et $M_n(\mathbb{R})$, ainsi que l'utilisation du théorème du rang, reposent strictement sur l'hypothèse $\dim(E) < +\infty$. En dimension infinie (par exemple sur l'espace des fonctions continues ou $\mathbb{R}[X]$), l'opérateur de commutation $\Phi_u$ ne peut plus être caractérisé par une simple matrice finie, et $\text{rg}(\Phi_u)$ perd son sens usuel au profit de notions d'analyse fonctionnelle (opérateurs compacts, continus, etc.).
2. **Non-surjectivité structurelle :** On peut démontrer (via la trace) que la trace de tout élément de $\text{Im}(\Phi_u)$ est nulle ($\text{Tr}(AB - BA) = 0$). Ainsi, $\text{Im}(\Phi_u)$ est inclus dans l'hyperplan des endomorphismes de trace nulle. Le modèle est donc incapable d'atteindre la surjectivité sur $\mathcal{L}(E)$ tout entier, ce qui limite son champ d'application en théorie du contrôle linéaire.