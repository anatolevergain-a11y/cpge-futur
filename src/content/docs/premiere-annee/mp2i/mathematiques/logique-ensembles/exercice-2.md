---
title: 'Exercice 2 : Relations d équivalence et d ordre'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la conception d'un système de gestion de bases de données distribuées et de l'ordonnancement de tâches sur des architectures de calcul hétérogènes (type grille de calcul ou edge computing), l'analyse fine des structures de données repose fondamentalement sur la théorie des relations. 

Soit $E$ un ensemble. On s'intéresse à l'interaction entre les relations d'équivalence (modélisant le regroupement de données par similarité ou par partition) et les relations d'ordre (modélisant des contraintes de précédence ou de priorité entre des tâches).

Dans toute la suite, si $\mathcal{R}$ est une relation binaire sur $E$, on note $\mathcal{R}^{-1}$ la relation réciproque définie par :
$$\forall (x, y) \in E^2, \quad x \mathcal{R}^{-1} y \iff y \mathcal{R} x$$

On définit également le produit relationnel (ou composition) de deux relations $\mathcal{R}_1$ et $\mathcal{R}_2$ sur $E$ par :
$$\forall (x, y) \in E^2, \quad x (\mathcal{R}_1 \circ \mathcal{R}_2) y \iff \exists z \in E, \; (x \mathcal{R}_1 z \text{ et } z \mathcal{R}_2 y)$$

Le problème se propose d'étudier certaines propriétés algébriques de l'ensemble des relations sur $E$, en particulier les conditions sous lesquelles la composition de préordres ou d'équivalences engendre de nouvelles structures, avec une application particulière à la modélisation de priorités de calculs industriels.

---

### ❓ Questions progressives

1. **Rappels et définitions préliminaires**
   Soit $\mathcal{R}$ une relation binaire sur $E$. Rappeler les définitions formelles des propriétés suivantes :
   * (a) $\mathcal{R}$ est réflexive.
   * (b) $\mathcal{R}$ est antisymétrique.
   * (c) $\mathcal{R}$ est transitive.
   * (d) $\mathcal{R}$ est une relation d'ordre.

2. **Opérations sur les relations**
   * (a) Montrer que si $\mathcal{R}$ est une relation d'ordre sur $E$, alors sa relation réciproque $\mathcal{R}^{-1}$ est un ordre strict ou une relation d'ordre ? Préciser la nature de $\mathcal{R}^{-1}$ et démontrer l'assertion.
   * (b) Soit $\mathcal{R}_1$ et $\mathcal{R}_2$ deux relations d'équivalence sur $E$. La relation $\mathcal{R}_1 \circ \mathcal{R}_2$ est-elle nécessairement une relation d'équivalence ? Fournir une démonstration ou un contre-exemple explicite.

3. **Caractérisation de la commutativité pour les équivalences**
   * On suppose toujours que $\mathcal{R}_1$ et $\mathcal{R}_2$ sont deux relations d'équivalence sur $E$. Démontrer que $\mathcal{R}_1 \circ \mathcal{R}_2$ est une relation d'équivalence sur $E$ si et seulement si $\mathcal{R}_1 \circ \mathcal{R}_2 = \mathcal{R}_2 \circ \mathcal{R}_1$.

4. **Application aux systèmes d'ordonnancement et analyse critique**
   Dans une usine de smart manufacturing, on cherche à ordonner un ensemble $T$ de $N = 10^5$ tâches logicielles. On dispose de deux préordres (relations réflexives et transitives) :
   * $\mathcal{P}_1$ modélisant la dépendance des données (la tâche $t_1$ doit s'exécuter avant $t_2$).
   * $\mathcal{P}_2$ modélisant l'affinité matérielle (la tâche $t_1$ utilise le même cache processeur que $t_2$).
   
   Pour fusionner ces contraintes, un ingénieur propose d'utiliser la relation $\mathcal{R}_{\text{total}} = \mathcal{P}_1 \cup \mathcal{P}_2$.
   * (a) La relation $\mathcal{R}_{\text{total}}$ est-elle nécessairement un préordre ? Justifier rigoureusement.
   * (b) **Analyse critique et limites du modèle :** Si le nombre de tâches $N$ atteint $10^5$, quel est l'ordre de grandeur de la complexité algorithmique naïve pour vérifier la transitivité de $\mathcal{R}_{\text{total}}$ ? Discuter la pertinence de ce modèle mathématique dans un contexte industriel en temps réel où les contraintes énergétiques et de latence ($\le 10 \text{ ms}$) sont drastiques. Proposer une alternative de modélisation plus robuste.

---

### 💡 Pistes & Indications

* **Q2(b)** : Pensez à tester avec un ensemble fini $E = \{1, 2, 3\}$ et deux partitions bien choisies (par exemple, des classes d'équivalence qui s'intersectent de manière non triviale).
* **Q3** : Pour l'implication directe, utilisez la symétrie et la transitivité pour montrer que $\mathcal{R}_1 \circ \mathcal{R}_2 = (\mathcal{R}_1 \circ \mathcal{R}_2)^{-1} = \mathcal{R}_2 \circ \mathcal{R}_1$. Pour la réciproque, vérifiez les trois axiomes d'une équivalence (réflexivité, symétrie, transitivité) en exploitant l'hypothèse de commutativité.
* **Q4(b)** : Pensez aux algorithmes de fermeture transitive (comme l'algorithme de Warshall, en $\mathcal{O}(N^3)$) et évaluez si cela est compatible avec des contraintes de calcul en temps réel.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Rappels et définitions
Soit $\mathcal{R}$ une relation binaire sur $E$.
* (a) $\mathcal{R}$ est **réflexive** si : $\forall x \in E, \; x \mathcal{R} x$.
* (b) $\mathcal{R}$ est **antisymétrique** si : $\forall (x, y) \in E^2, \; (x \mathcal{R} y \text{ et } y \mathcal{R} x) \implies x = y$.
* (c) $\mathcal{R}$ est **transitive** si : $\forall (x, y, z) \in E^3, \; (x \mathcal{R} y \text{ et } y \mathcal{R} z) \implies x \mathcal{R} z$.
* (d) $\mathcal{R}$ est une **relation d'ordre** si elle est à la fois réflexive, antisymétrique et transitive.

#### 2. Opérations sur les relations
* (a) Soit $\mathcal{R}$ une relation d'ordre sur $E$. Montrons que $\mathcal{R}^{-1}$ est une relation d'ordre :
  * **Réflexivité :** $\forall x \in E$, comme $\mathcal{R}$ est réflexiva, $x \mathcal{R} x$, donc par définition $x \mathcal{R}^{-1} x$. $\mathcal{R}^{-1}$ est réflexive.
  * **Antisymétrie :** Soit $(x, y) \in E^2$ tels que $x \mathcal{R}^{-1} y$ et $y \mathcal{R}^{-1} x$. Par définition, cela signifie $y \mathcal{R} x$ et $x \mathcal{R} y$. Comme $\mathcal{R}$ est antisymétrique, on en déduit $x = y$. $\mathcal{R}^{-1}$ est antisymétrique.
  * **Transitivité :** Soit $(x, y, z) \in E^3$ tels que $x \mathcal{R}^{-1} y$ et $y \mathcal{R}^{-1} z$. Cela équivaut à $y \mathcal{R} x$ et $z \mathcal{R} y$, soit $z \mathcal{R} y$ et $y \mathcal{R} x$. Par transitivité de $\mathcal{R}$, on obtient $z \mathcal{R} x$, c'est-à-dire $x \mathcal{R}^{-1} z$. $\mathcal{R}^{-1}$ est transitive.
  
  Ainsi, **$\mathcal{R}^{-1}$ est une relation d'ordre** (c'est l'ordre dual, souvent noté $\preceq_{\text{dual}}$).

* (b) La relation $\mathcal{R}_1 \circ \mathcal{R}_2$ n'est **pas** nécessairement une relation d'équivalence.
  * *Contre-exemple :* Soit $E = \{1, 2, 3\}$. 
    Considérons la partition $\Pi_1 = \{\{1, 2\}, \{3\}\}$ associée à l'équivalence $\mathcal{R}_1$, et $\Pi_2 = \{\{1\}, \{2, 3\}\}$ associée à $\mathcal{R}_2$.
    * $1 \mathcal{R}_1 2$ et $2 \mathcal{R}_2 3$, donc $1 (\mathcal{R}_1 \circ \mathcal{R}_2) 3$.
    * Testons la symétrie de $\mathcal{R}_1 \circ \mathcal{R}_2$ : a-t-on $3 (\mathcal{R}_1 \circ \mathcal{R}_2) 1$ ? 
      S'il existait $z \in E$ tel que $3 \mathcal{R}_1 z$ et $z \mathcal{R}_2 1$, comme la classe de $3$ pour $\mathcal{R}_1$ est $\{3\}$, on aurait $z = 3$. Or $3 \mathcal{R}_2 1$ est faux (car $\{2, 3\}$ et $\{1\}$ sont disjoints). 
      Donc $3 (\mathcal{R}_1 \circ \mathcal{R}_2) 1$ est faux, alors que $1 (\mathcal{R}_1 \circ \mathcal{R}_2) 3$ est vrai. 
      La relation n'est **pas symétrique**, ce n'est donc pas une relation d'équivalence.

#### 3. Caractérisation de la commutativité pour les équivalences
Soit $\mathcal{R}_1$ et $\mathcal{R}_2$ deux relations d'équivalence sur $E$.
* $(\implies)$ Supposons que $\mathcal{R} = \mathcal{R}_1 \circ \mathcal{R}_2$ soit une relation d'équivalence. 
  Puisque $\mathcal{R}$ est une équivalence, elle est symétrique, donc $\mathcal{R} = \mathcal{R}^{-1}$.
  Or, par les propriétés de la transposition des relations :
  $$(\mathcal{R}_1 \circ \mathcal{R}_2)^{-1} = \mathcal{R}_2^{-1} \circ \mathcal{R}_1^{-1}$$
  Comme $\mathcal{R}_1$ et $\mathcal{R}_2$ sont des équivalences, elles sont symétriques, donc $\mathcal{R}_1^{-1} = \mathcal{R}_1$ et $\mathcal{R}_2^{-1} = \mathcal{R}_2$. 
  Par conséquent, $\mathcal{R}^{-1} = \mathcal{R}_2 \circ \mathcal{R}_1$. 
  Puisque $\mathcal{R} = \mathcal{R}^{-1}$, on en conclut que **$\mathcal{R}_1 \circ \mathcal{R}_2 = \mathcal{R}_2 \circ \mathcal{R}_1$**.

* $(\implique)$ Supposons que $\mathcal{R}_1 \circ \mathcal{R}_2 = \mathcal{R}_2 \ois \mathcal{R}_1$ (correction typographique : $\mathcal{R}_2 \circ \mathcal{R}_1$). Montrons que $\mathcal{R} = \mathcal{R}_1 \circ \mathcal{R}_2$ est une équivalence :
  1. *Réflexivité :* Soit $x \in E$. Comme $\mathcal{R}_1$ et $\mathcal{R}_2$ sont réflexives, $x \mathcal{R}_1 x$ et $x \mathcal{R}_2 x$, donc $x (\mathcal{R}_1 \circ \mathcal{R}_2) x$ (en prenant $z = x$).
  2. *Symétrie :* Soit $(x, y) \in E^2$ tel que $x (\mathcal{R}_1 \circ \mathcal{R}_2) y$. 
     Alors $y (\mathcal{R}_1 \circ \mathcal{R}_2)^{-1} x$, soit $y (\mathcal{R}_2^{-1} \circ \mathcal{R}_1^{-1}) x$, c'est-à-dire $y (\mathcal{R}_2 \circ \mathcal{R}_1) x$. 
     Par hypothèse de commutativité, $y (\mathcal{R}_1 \circ \mathcal{R}_2) x$. La relation est donc symétrique.
  3. *Transitivité :* Soit $(x, y, z) \in E^3$ tels que $x (\mathcal{R}_1 \circ \mathcal{R}_2) y$ et $y (\mathcal{R}_1 \circ \mathcal{R}_2) z$.
     Alors $x (\mathcal{R}_1 \circ \mathcal{R}_2 \circ \mathcal{R}_1 \circ \mathcal{R}_2) z$.
     En utilisant la commutativité $\mathcal{R}_2 \circ \mathcal{R}_1 = \mathcal{R}_1 \circ \mathcal{R}_2$ et le fait que $\mathcal{R}_2 \circ \mathcal{R}_2 = \mathcal{R}_2$ (car $\mathcal{R}_2$ est transitive et réflexive), on réarrange pour obtenir :
     $x (\mathcal{R}_1 \circ \mathcal{R}_1 \circ \mathcal{R}_2 \circ \mathcal{R}_2) z$, soit $x (\mathcal{R}_1 \circ \mathcal{R}_2) z$.
     La transitivité est établie.

#### 4. Application aux systèmes d'ordonnancement et analyse critique
* (a) La relation $\mathcal{R}_{\text{total}} = \mathcal{P}_1 \cup \mathcal{P}_2$ n'est **pas nécessairement un préordre**.
  * *Contre-exemple :* La transitivité peut être mise en défaut. Supposons $x \mathcal{P}_1 y$ et $y \mathcal{P}_2 z$ sans qu'aucun autre lien n'existe. Alors $x \mathcal{R}_{\text{total}} y$ et $y \mathcal{R}_{\text{total}} z$, mais rien ne garantit que $x \mathcal{R}_{\text{total}} z$ (puisque $x$ et $z$ ne sont reliés ni par $\mathcal{P}_1$ ni par $\mathcal{P}_2$). La union de deux préordres n'est pas un préordre en général.

* (b) **Analyse critique et limites du modèle :**
  * *Complexité algorithmique :* Pour transformer $\mathcal{R}_{\text{total}}$ en un préordre valide, il faut calculer sa fermeture réflexive, antisymétrique (ou quotienter par les cycles) et surtout sa **fermeture transitive**. Un algorithme classique de type Warshall ou des multiplications de matrices booléennes s'exécute en $\mathcal{O}(N^3)$. Pour $N = 10^5$ tâches, $N^3 = 10^{15}$ opérations, ce qui est totalement inacceptable sur le plan informatique (plusieurs jours de calculs sur une architecture standard).
  * *Réalité industrielle et limites physiques :* Dans un système temps réel à faible latence ($\le 10 \text{ ms}$), le calcul d'ordonnancement doit être incrémental et s'exécuter en temps quasi-linéaire $\mathcal{O}(N \log N)$ ou $\mathcal{O}(N)$ (par exemple via un tri topologique sur des graphes acycliques orientés clairsemés). 
  * *Alternative robuste :* Au lieu d'une union naïve de relations, il convient de modéliser le système par un **Graphe Acyclique Dirigé (DAG)** où $\mathcal{P}_1$ constitue les arcs structurels obligatoires (contraintes dures) et $\mathcal{P}_2$ une métrique de coût ou de pondération sur les arêtes (contraintes souples), évitant ainsi le coût prohibitif de la fermeture transitive complète au profit d'heuristiques locales d'ordonnancement.