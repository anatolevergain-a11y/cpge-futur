---
title: 'Cours : Logique et ensembles'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

Le raisonnement mathématique en classe préparatoire repose sur un socle formel précis : la logique des propositions, la théorie des ensembles et l'étude des relations et des applications.

### Logique propositionnelle
* **Proposition ($\mathcal{P}$)** : Énoncé mathématique susceptible d'être vrai ($\text{V}$) ou faux ($\text{F}$).
* **Connecteurs logiques** : Négation ($\neg \mathcal{P}$ ou $\text{non }\mathcal{P}$), Conjonction ($\mathcal{P} \land \mathcal{Q}$), Disjonction ($\mathcal{P} \lor \mathcal{Q}$), Implication ($\mathcal{P} \implies \mathcal{Q}$), Équivalence ($\mathcal{P} \iff \mathcal{Q}$).
* **Quantificateurs** : 
  * Quantificateur universel : $\forall x \in E, \, \mathcal{P}(x)$
  * Quantificateur existentiel : $\exists x \in E, \, \mathcal{P}(x)$
  * Unicité : $\exists! x \in E, \, \mathcal{P}(x)$

### Théorie des ensembles
Soit $E$ un ensemble. 
* **Partie (ou sous-ensemble)** : $A \subset E \iff (\forall x \in E, \, x \in A \implies x \in E)$. L'ensemble de toutes les parties de $E$ est noté $\mathcal{P}(E)$ ou $2^E$.
* **Opérations fondamentales** :
  * Union : $A \cup B = \{x \mid x \in A \lor x \in B\}$
  * Intersection : $A \cap B = \{x \mid x \in A \land x \in B\}$
  * Complémentaire (dans $E$) : $C_E A = A^c = \{x \in E \mid x \notin A\}$
  * Différence : $A \setminus B = \{x \in A \mid x \notin B\}$
  * Produit cartésien : $E \times F = \{(x, y) \mid x \in E \land y \in F\}$

### Relations et Applications
* **Relation binaire** : Une relation $\mathcal{R}$ sur $E$ est un sous-ensemble de $E \times E$. On note $x \mathcal{R} y$ pour $(x, y) \in \mathcal{R}$.
  * **Relation d'équivalence** : Réflexive, symétrique, transitive.
  * **Relation d'ordre** : Réflexive, antisymétrique, transitive.
* **Application** : Soient $E$ et $F$ deux ensembles. Une application $f$ de $E$ dans $F$ associe à tout élément de $E$ un unique élément de $F$.
  * $f$ est **injective** si : $\forall (x, y) \in E^2, \, f(x) = f(y) \implies x = y$.
  * $f$ est **surjective** si : $\forall y \in F, \, \exists x \in E, \, f(x) = y$.
  * $f$ est **bijective** si elle est injective et surjective.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème 1 : Caractérisation de l'égalité de deux ensembles
> **Énoncé :** Soient $A$ et $B$ deux parties d'un ensemble $E$. 
> $$A = B \iff (A \subset B \land B \subset A)$$

#### Démonstration :
* $(\implies)$ Supposons $A = B$. Soit $x \in A$. Comme $A = B$, $x \in B$. Donc $A \subset B$. De même, si $x \in B$, alors $x \in A$ (car $B = A$), donc $B \subset A$.
* $(\impliedby)$ Supposons que $A \subset B$ et $B \subset A$. Montrons l'égalité par double inclusion :
  Soit $x \in E$.
  $$x \in A \implies x \in B \quad (\text{car } A \subset B)$$
  De même, $x \in B \implies x \in A$ ($\text{car } B \subset A$).
  Par conséquent, $x \in A \iff x \in B$, ce qui signifie par définition en extension que $A = B$. $\blacksquare$

### Théorème 2 : Lois de De Morgan
> **Énoncé :** Soient $A$ et $B$ deux parties d'un ensemble $E$. 
> 1. $(A \cup B)^c = A^c \cap B^c$
> 2. $(A \cap B)^c = A^c \cup B^c$

#### Démonstration (du 1) :
Raisonnons par équivalence logique pour tout $x \in E$ :
$$
\begin{aligned}
x \in (A \cup B)^c &\iff \neg (x \in A \cup B) \\
&\iff \neg (x \in A \lor x \in B) \\
&\iff (\neg (x \in A)) \land (\neg (x \in B)) \quad (\text{loi de De Morgan pour la logique}) \\
&\iff (x \in A^c) \land (x \in B^c) \\
&\iff x \in A^c \cap B^c
\end{aligned}
$$
L'égalité des ensembles découle de l'équivalence pour tout $x$. $\blacksquare$

### Théorème 3 : Propriété de la composition des applications
> **Énoncé :** Soient $f : E \to F$ et $g : F \to G$ deux applications.
> 1. Si $f$ et $g$ sont injectives, alors $g \circ f$ est injective.
> 2. Si $f$ et $g$ sont surjectives, alors $g \circ f$ est surjective.
> 3. Si $g \circ f$ est injective, alors $f$ est injective.
> 4. Si $g \circ f$ est surjective, alors $g$ est surjective.

#### Démonstration (du 3) :
Supposons $g \circ f$ injective. Soient $(x_1, x_2) \in E^2$ tels que $f(x_1) = f(x_2)$.
Appliquons $g$ à cette égalité :
$$g(f(x_1)) = g(f(x_2)) \implies (g \circ f)(x_1) = (g \circ f)(x_2)$$
Puisque $g \circ f$ est injective, il vient :
$$x_1 = x_2$$
Ainsi, $f$ est injective. $\blacksquare$

---

## 💡 3. Méthodes classiques de résolution

1. **Démontrer une implication ($\mathcal{P} \implies \mathcal{Q}$)** :
   * *Méthode directe* : Supposer $\mathcal{P}$ vraie et démontrer $\mathcal{Q}$.
   * *Par contraposée* : Démontrer que $(\neg \mathcal{Q} \implies \neg \mathcal{P})$. Très utile pour les implications contenant des inégalités strictes ou des notions de divisibilité.
   * *Par l'absurde* : Supposer $\mathcal{P} \land \neg \mathcal{Q}$ et aboutir à une contradiction.

2. **Démontrer une équivalence ($\mathcal{P} \iff \mathcal{Q}$)** :
   * Procéder par double implication : montrer $\mathcal{P} \implies \mathcal{Q}$ puis $\mathcal{Q} \implies \mathcal{P}$.
   * Ou enchaîner des équivalences logiques successives : $\mathcal{P} \iff \mathcal{P}_1 \iff \dots \iff \mathcal{Q}$ (attention à bien vérifier la réversibilité de chaque implication).

3. **Démontrer une propriété pour tout entier $n \ge n_0$** :
   * Utiliser le **principe de récurrence** (simple, forte, ou double). Rédiger rigoureusement les trois étapes : initialisation, hérédité et conclusion.

4. **Démontrer l'égalité de deux ensembles $A = B$** :
   * Effectuer une **double inclusion** : montrer $A \subset B$ puis $B \subset A$.
   * Utiliser une suite d'équivalences logiques sur l'appartenance d'un élément générique $x$.

5. **Prouver qu'une application $f : E \to F$ est bijective** :
   * *Méthode algébrique directe* : Soit $y \in F$, résoudre l'équation $f(x) = y$ d'inconnue $x \in E$. Si l'équation possède une unique solution pour tout $y \in F$, $f$ est bijective et l'expression de $x$ donne la réciproque $f^{-1}(y)$.
   * *Méthode par caractérisation* : Démontrer l'injectivité et la surjectivité séparément.

---

## ⚠️ 4. Pièges classiques aux Concours

* **Confusion entre condition nécessaire et condition suffisante** : 
  Écrire ou utiliser $\implies$ au lieu de $\iff$. Une condition nécessaire n'est pas suffisante en général.
* **Mauvaise négation d'une proposition quantifiée** :
  La négation de $\forall x \in E, \, \mathcal{P}(x)$ est $\exists x \in E, \, \neg \mathcal{P}(x)$. 
  *Erreur fréquente :* $\forall x \in E, \, \neg \mathcal{P}(x)$.
* **Raisonnement par l'exemple** :
  Pour démontrer qu'une proposition universelle $\forall x \in E, \, \mathcal{P}(x)$ est fausse, **un contre-exemple suffit**. En revanche, pour prouver qu'elle est vraie, un exemple (ou même une infinité non exhaustive) ne suffit pas ; il faut une démonstration générale.
* **Inversion des quantificateurs** :
  Les propositions $\forall x \in E, \, \exists y \in F, \, \mathcal{R}(x, y)$ et $\exists y \in F, \, \forall x \in E, \, \mathcal{R}(x, y)$ ne sont **pas** équivalentes. La seconde implique la première, mais la réciproque est fausse en général.
* **Oubli du domaine de départ/d'arrivée dans la bijectivité** :
  Une application n'est pas définie uniquement par sa formule algébrique, mais aussi par son ensemble de départ et son ensemble d'arrivée. Restreindre ou élargir ces ensembles modifie totalement l'injectivité et la surjectivité.
* **Preuve d'injectivité incomplète** :
  Pour montrer l'injectivité, partir de $f(x) = f(y)$ et **conclure par $x = y$**. Commencer par supposer $x = y$ pour arriver à $f(x) = f(y)$ ne démontre rien (c'est la propriété directe d'une fonction).