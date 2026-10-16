---
title: 'Cours : Structures algébriques usuelles'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

L'étude des structures algébriques usuelles formalise les propriétés de composition des ensembles. Le cadre de la classe de MPSI requiert une maîtrise parfaite du vocabulaire et des axiomes fondamentaux concernant les lois de composition interne, les groupes, les anneaux et les corps.

### A. Loi de composition interne
Soit $E$ un ensemble. Une **loi de composition interne** (l.c.i.) sur $E$ est une application de $E \times E$ dans $E$.
On note généralement $(E, \star)$ un ensemble muni d'une l.c.i., l'image de $(x, y)$ étant notée $x \star y$.

Soit $\star$ une l.c.i. sur $E$. On dit que :
1. **Associativité** : $\star$ est associative si $\forall (x, y, z) \in E^3, \; (x \star y) \star z = x \star (y \star z)$.
2. **Commutativité** : $\star$ est commutative si $\forall (x, y) \in E^2, \; x \star y = y \star x$.
3. ** Élément neutre** : Un élément $e \in E$ est neutre pour $\star$ si $\forall x \in E, \; e \star x = x \star e = x$.
4. **Symétrie / Inversibilité** : Supposons $E$ muni d'un élément neutre $e$. Un élément $x \in E$ est dit symétrisable (ou inversible) s'il existe $y \in E$ tel que $x \star y = y \star x = e$.

### B. Groupes
**Définition :** Un couple $(G, \star)$ est un **groupe** si :
1. La loi $\star$ est associative.
2. La loi $\star$ possède un élément neutre $e_G dans G$.
3. Tout élément de $G$ possède un symétrique dans $G$.

Si de plus la loi $\star$ est commutative, le groupe $(G, \star)$ est dit **abélien** (ou commutatif).

### C. Anneaux et Corps
**Définition :** Un triplet $(A, +, \times)$ est un **anneau** si :
1. $(A, +)$ est un groupe abélien (noté additivement, dont l'élément neutre est $0_A$).
2. La loi $\times$ est associative.
3. La loi $\times$ possède un élément neutre (noté $1_A$ ou $1$), distinct de $0_A$ si l'anneau est dit unitaire.
4. La loi $\times$ est distributive par rapport à la loi $+$ : $\forall (x, y, z) \in A^3$,
   $$x \times (y + z) = (x \times y) + (x \times z) \quad \text{et} \quad (y + z) \times x = (y \times x) + (z \times x)$$

Si de plus la loi $\times$ est commutative, l'anneau est dit **commutatif**.

**Définition :** Un triplet $(K, +, \times)$ est un **corps** si :
1. $(K, +, \times)$ est un anneau unitaire.
2. Tout élément de $K \setminus \{0_K\}$ est inversible pour la loi $\times$.
Si la multiplication est commutative, $K$ est un **corps commutatif**.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème 1 : Unicité de l'élément neutre et du symétrique dans un groupe
*Soit $(G, \star)$ un groupe.*
1. *L'élément neutre de $G$ est unique.*
2. *Tout élément $x \in G$ possède un unique symétrique, noté $x^{-1}$ (ou $-x$ en notation additive).*

#### Démonstration :
1. Supposons que $e$ et $e'$ soient deux éléments neutres de $G$. Par définition de l'élément neutre, on a :
   $$e \star e' = e' \quad (\text{car } e \text{ est neutre})$$
   $$e \star e' = e \quad (\text{car } e' \text{ est neutre})$$
   Par transitivité de l'égalité, $e = e'$. L'unicité est démontrée.
2. Soit $x \in G$. Supposons que $y$ et $z$ soient deux symétriques de $x$. On a par définition $x \star y = y \star x = e$ et $x \star z = z \star x = e$.
   Considérons le produit $y \star (x \star z)$ :
   - D'une part, par associativité : $y \star (x \star z) = (y \star x) \star z = e \star z = z$.
   - D'autre part, en utilisant la commutativité du produit avec le symétrique ou l'hypothèse : $y \star (x \star z) = y \star (z \star x)$... plus simplement, calculons $(y \star x) \star z$ et $y \star (x \star z)$ :
   $$y = y \star e = y \star (x \star z) = (y \star x) \star z = e \star z = z$$
   Ainsi, $y = z$. L'unicité du symétrique est établie. $\blacksquare$

### Théorème 2 : Caractérisation des sous-groupes
*Soit $(G, \star)$ un groupe et $H$ une partie de $G$. $H$ est un sous-groupe de $G$ si et seulement si :*
1. $H \neq \emptyset$ (ou $e_G \in H$) ;
2. $\forall (x, y) \in H^2, \; x \star y^{-1} \in H$.

#### Démonstration :
- **Sens $(\implies)$** : Si $H$ est un sous-groupe de $G$, alors il contient le neutre $e_G$, donc $H \neq \emptyset$. De plus, pour tout $y \in H$, son symétrique $y^{-1}$ appartient à $H$ par stabilité du passage à l'inverse. Enfin, par stabilité de la loi interne, pour tous $x, y \in H$, $x \star y^{-1} \in H$.
- **Sens $(\impliedby)$** : Supposons les deux conditions vérifiées.
  1. Puisque $H \neq \emptyset$, soit $x \in H$. En prenant $y = x$, on a $x \star x^{-1} = e_G \in H$. Le neutre est dans $H$.
  2. Pour tout $x \in H$, en prenant le premier élément $e_G$ et le second $x$, on a $e_G \star x^{-1} = x^{-1} \in H$. $H$ est stable par passage à l'inverse.
  3. Pour tous $x, y \in H$, on sait que $y^{-1} \in H$. En appliquant la condition à $x$ et $y^{-1}$, on obtient $x \star (y^{-1})^{-1} = x \star y \in H$. $H$ est stable par la loi $\star$.
  La restriction de $\star$ à $H \times H$ confère à $H$ une structure de groupe. $\blacksquare$

---

## 💡 3. Méthodes classiques de résolution

### Méthode 1 : Prouver qu'un ensemble est un groupe
Pour démontrer qu'un ensemble $G$ muni d'une loi $\star$ est un groupe :
1. **Vérifier l'inclusion/la stabilité** : S'assurer que la loi est bien une l.c.i. dans $G$ (si $G$ est une partie d'un groupe connu, montrer que $G$ est un sous-groupe).
2. **Utiliser la caractérisation des sous-groupes** si $G \subset G'$ où $G'$ est déjà connu pour être un groupe : c'est la méthode la plus rapide (évite de ré-démontrer l'associativité).
3. **Vérifier l'associativité** si l'ensemble est défini abstraitement.
4. **Exhiber le neutre** et résoudre l'équation de symétrie pour tout élément générique.

### Méthode 2 : Étude d'un anneau de fonctions ou de matrices
- Pour montrer qu'un ensemble de matrices (par exemple $\mathcal{M}_n(\mathbb{R})$) est un anneau, on utilise la structure d'espace vectoriel et la compatibilité des lois.
- Pour un ensemble de fonctions $\mathcal{F}(X, \mathbb{R})$, l'addition et la multiplication ponctuelles confèrent une structure d'anneau commutatif unitaire. Les inversibles de cet anneau sont les fonctions qui ne s'annulent pas.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oublier de vérifier la non-vacuité** : Lors de l'application du théorème de caractérisation des sous-groupes ou des sous-espaces vectoriels, rédiger la vérification que l'ensemble n'est pas vide (généralement en montrant que $0$ ou $e$ y appartient) est indispensable sous peine d'annulation immédiate de la question.
2. **Confusion non-commutativité** : Dans un anneau non commutatif, attention à ne pas utiliser des identités remarquables usuelles (comme $(x+y)^2 = x^2 + 2xy + y^2$) si $x$ et $y$ ne commutent pas ($xy \neq yx$).
3. **Inversion de l'ordre des éléments** : Dans un groupe, le symétrique d'un produit est $(x \star y)^{-1} = y^{-1} \star x^{-1}$ et non $x^{-1} \star y^{-1}$. L'inversion de l'ordre est un classique piège de calcul algébrique.
4. **Division par zero dans les anneaux** : Un anneau intègre est un anneau non réduit à $\{0_A\}$ tel que le produit de deux éléments nuls est nul seulement si l'un d'eux est nul ($\forall (x, y) \in A^2, \; xy = 0_A \implies x = 0_A \text{ ou } y = 0_A$). Ne pas supposer l'intégrité d'un anneau général (comme $\mathcal{M}_n(\mathbb{R})$ ou $\mathbb{Z}/n\mathbb{Z}$ lorsque $n$ n'est pas premier) sous peine d'écrire des absurdités sur les diviseurs de zéro.