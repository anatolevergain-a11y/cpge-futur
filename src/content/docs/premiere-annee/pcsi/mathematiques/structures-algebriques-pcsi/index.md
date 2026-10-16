---
title: "📌 1. Définitions & Cadre d'étude"
description: "Fiche de cours et d'exercice CPGE."
---

## 📌 1. Définitions & Cadre d'étude

Le programme de première année de PCSI introduit l'étude des ensembles munis de lois de composition interne, permettant de formaliser les structures de groupes, d'anneaux et de corps.

### A. Loi de composition interne
Soit $E$ un ensemble. Une loi de composition interne (l.c.i.) sur $E$ est une application $\star : E \times E \to E$, notée $(x, y) \mapsto x \star y$.

*   **Associativité** : $\forall (x,y,z) \in E^3, \; (x \star y) \star z = x \star (y \star z)$.
*   **Commutativité** : $\forall (x,y) \in E^2, \; x \star y = y \star x$.
*   **Élément neutre** : Un élément $e \in E$ est neutre pour $\star$ si :
    $$\forall x \in E, \; e \star x = x \star e = x$$
    S'il existe, l'élément neutre est **unique**.
*   **Élément symétrisable** : Soit $e$ le neutre de $(E, \star)$. Un élément $x \in E$ est symétrisable s'il existe $x' \in E$ tel que :
    $$x \star x' = x' \star x = e$$
    Si $\star$ est associative, le symétrique d'un élément est **unique**.

### B. Groupe
Un couple $(G, \star)$ est un **groupe** si :
1. $\star$ est associative.
2. $G$ possède un élément neutre $e$.
3. Tout élément de $G$ est symétrisable.

Si de plus $\star$ est commutative, le groupe est dit **abélien**.

*Exemples fondamentaux* : $(\mathbb{Z}, +)$, $(\mathbb{R}, +)$, $(\mathbb{R}^*, \times)$, $(\mathcal{S}_n, \circ)$ (groupe symétrique pour $n \ge 3$, non abélien).

### C. Anneau et Corps
*   Un triplet $(A, +, \times)$ est un **anneau** si :
    1. $(A, +)$ est un groupe abélien (d'élément neutre noté $0_A$).
    2. La loi $\times$ est associative.
    3. La loi $\times$ possède un élément neutre (noté $1_A$, anneau unitaire).
    4. La loi $\times$ est distributive par rapport à la loi $+$.

*   Un anneau $(A, +, \times)$ non réduit à $\{0_A\}$ est un **corps** si tout élément de $A \setminus \{0_A\}$ est inversible pour $\times$.
*   Si de plus la multiplication est commutative, le corps est dit **commutatif** (ex: $\mathbb{R}$, $\mathbb{C}$).
---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème : Unicité de l'élément neutre et des symétriques
Soit $(E, \star)$ une loi associative. 
1. S'il existe deux éléments neutres $e$ et $e'$ dans $E$, alors $e = e'$.
2. Si $x \in E$ possède deux symétriques $y$ et $z$, alors $y = z$.

> **Démonstration :**
> 1. Soit $e$ et $e'$ deux neutres. Par définition du neutre $e'$, on a $e \star e' = e$. Par définition du neutre $e$, on a $e \star e' = e'$. Par transitivité, $e = e'$.
> 2. Soit $y$ et $z$ deux symétriques de $x$ pour la loi $\star$ associative, d'élément neutre $e$.
>    Considérons le produit $y \star (x \star z)$ :
>    - D'une part, $y \star (x \star z) = (y \star x) \star z$ (associativité) $= e \star z = z$.
>    - D'autre part, $y \star (x \star z) = y \star (z \star x)^{-1}$ (selon l'ordre) ou plus simplement, en utilisant $x \star z = e$, on a $y \star (x \star z) = y \star e = y$.
>    Donc $y = z$. $\blacksquare$

### Proposition : Propriété des inversibles dans un anneau
Soit $(A, +, \times)$ un anneau unitaire. L'ensemble des éléments inversibles de $A$ (noté $A^\times$) muni de la multiplication est un groupe.

> **Démonstration :**
> - **Stabilité** : Soit $(x, y) \in (A^\times)^2$. Il existe $x^{-1}$ et $y^{-1}$ tels que $x \times x^{-1} = 1_A$ et $y \times y^{-1} = 1_A$.
>   Alors $(x \times y) \times (y^{-1} \times x^{-1}) = x \times (y \times y^{-1}) \times x^{-1} = x \times 1_A \times x^{-1} = x \times x^{-1} = 1_A$.
>   De même dans l'autre sens. Donc $x \times y \in A^\times$.
> - **Associativité** : Héritée de l'anneau $A$.
> - **Neutre** : $1_A \times 1_A = 1_A$, donc $1_A \in A^\times$.
> - **Symétrique** : Par définition, tout élément de $A^\times$ possède un inverse dans $A^\times$. $\blacksquare$

---

## 💡 3. Méthodes de calcul & Algorithmes

### A. Comment démontrer qu'une partie est un sous-groupe ?
Soit $(G, \star)$ un groupe et $H \subset G$. Pour montrer que $(H, \star)$ est un sous-groupe de $G$, on utilise la caractérisation en une seule étape :
1. **Non-vacuité** : Vérifier que $e_G \in H$ (ou expliciter un élément).
2. **Stabilité et symétrie** : Montrer que $\forall (x, y) \in H^2, \; x \star y^{-1} \in H$.

*Exemple fondamental* : L'ensemble des matrices $SL_n(\mathbb{R}) = \{M \in \mathcal{M}_n(\mathbb{R}) \mid \det(M) = 1\}$ est un sous-groupe de $(GL_n(\mathbb{R}), \times)$.

### B. Résolution d'équations dans un anneau intègre
Un anneau $(A, +, \times)$ est dit **intègre** si $A$ n'est pas réduit à $\{0_A\}$ et si :
$$\forall (x, y) \in A^2, \; x \times y = 0_A \implies (x = 0_A \text{ ou } y = 0_A)$$

*Méthode* : Pour résoudre $x^2 - 3x + 2 = 0_A$ dans un anneau intègre, on factorise :
$$(x - 1_A) \times (x - 2_A) = 0_A$$
Par intégrité, $x - 1_A = 0_A$ ou $x - 2_A = 0_A$, soit $x = 1_A$ ou $x = 2_A$.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oublier la non-vacuité** : Lors d'une preuve de sous-structure, ne jamais oublier de vérifier que l'ensemble n'est pas vide (généralement en montrant que le neutre y appartient).
2. **Confondre loi additive et multiplicative** : Dans un groupe général, la loi est notée $\star$ ou $+$. Attention à ne pas appliquer les règles des espaces vectoriels ou des corps commutatifs (comme la distributivité générale ou l'intégrité) dans des anneaux non intègres (par exemple, l'anneau des matrices $\mathcal{M}_n(\mathbb{R})$ pour $n \ge 2$ possède des diviseurs de zéro : $A \times B = 0$ avec $A \neq 0$ et $B \neq 0$).
3. **Inversion de l'ordre des éléments** : Dans un groupe non commutatif, le symétrique d'un produit est l'inverse des éléments dans l'ordre inversé :
   $$(x \star y)^{-1} = y^{-1} \star x^{-1}$$
   Une erreur classique consiste à écrire $x^{-1} \star y^{-1}$.