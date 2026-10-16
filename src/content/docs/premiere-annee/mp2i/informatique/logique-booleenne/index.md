---
title: 'Cours : Logique et circuits'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Logique et circuits (MP2I)
Niveau: ** Première année (MP2I)  
**Matière :** Informatique  
Enseignant: ** Professeur de CPGE MP2I  

---

## 1. Introduction et Logique Propositionnelle

L'informatique fonde ses traitements sur la manipulation de grandeurs binaires. La logique mathématique permet de formaliser ces raisonnements et de concevoir les architectures matérielles.

### Définitions fondamentales
* **Proposition (ou formule) :** Une assertion $P$ pouvant prendre la valeur de vérité Vrai ($\top$ ou $1$) ou Faux ($\bot$ ou $0$).
* **Connecteurs logiques de base :**
    * Négation ($\neg P$ ou $\overline{P}$)
    * Conjonction ($P \land Q$ ou $P \cdot Q$)
    * Disjonction ($P \lor Q$ ou $P + Q$)
    * Implication ($P \implies Q$, équivalent à $\neg P \lor Q$)
    * Équivalence ($P \iff Q$, équivalent à $(P \implies Q) \land (Q \implies P)$)

---

## 2. Algèbre de Boole

Un **algèbre de Boole** est un ensemble $B$ muni de deux lois internes (généralement notées $+$ et $\cdot$) et d'un élément neutre pour chacune, possédant des propriétés de distributivité, de complémentarité, etc. En informatique, on s'intéresse principalement à l'algèbre à deux éléments $\mathbb{B} = \{0, 1\}$.

### Théorèmes : Lois fondamentales de l'algèbre de Boole
Soit $x, y, z \in \mathbb{B}$.
1. **Idempotence :** $x + x = x$ et $x \cdot x = x$
2. **Commutativité :** $x + y = y + x$ et $x \cdot y = y \cdot x$
3. **Associativité :** $(x + y) + z = x + (y + z)$
4. **Distributivité :** $x \cdot (y + z) = (x \cdot y) + (x \cdot z)$ et $x + (y \cdot z) = (x + y) \cdot (x + z)$
5. **Absorption :** $x + (x \cdot y) = x$ et $x \cdot (x + y) = x$
6. **Éléments neutres et absorbants :** 
   * $x + 0 = x$, $x \cdot 1 = x$
   * $x + 1 = 1$, $x \cdot 0 = 0$
7. **Complémentarité :** $x + \overline{x} = 1$ et $x \cdot \overline{x} = 0$
8. **Lois de De Morgan :** $\overline{x + y} = \overline{x} \cdot \overline{y}$ et $\overline{x \cdot y} = \overline{x} + \overline{y}$
9. **Involution :** $\overline{\overline{x}} = x$

---

## 3. Formes Normales et Simplification

### Définitions
* **Littéral :** Une variable booléenne ou son complémentaire ($x$ ou $\bar{x}$).
* **Minterm (implicant minéral) :** Conjonction (ET) de littéraux incluant toutes les variables du système.
* **Maxterm :** Disjonction (OU) de littéraux incluant toutes les variables du système.
* **Forme Normale Conjonctive (FNC) :** Conjonction de maxterms.
* **Forme Normale Disjonctive (FND) :** Disjonction de minterms.

### Méthode : Obtenir la FND à partir d'une table de vérité
1. Repérer toutes les lignes de la table de vérité pour lesquelles la sortie vaut $1$.
2. Pour chaque ligne, construire le minterm correspondant (si la variable vaut $1$, on prend $x$, si elle vaut $0$, on prend $\bar{x}$).
3. Faire la disjonction (OU) de tous ces minterms.

### Théorème (Universalité)
Les ensembles de portes $\{ET, OU, NON\}$ et les ensembles singleton $\{\text{NAND}\}$ ou $\{\text{NOR}\}$ sont **universels** : tout opérateur ou fonction booléenne peut être exprimé en utilisant uniquement des portes NAND (ou NOR).

---

## 4. Circuits Combinatoires

Un circuit combinatoire est un circuit dont les sorties ne dépendent que des entrées présentes à l'instant $T$ (absence de mémoire).

### Portes logiques fondamentales
* **AND, OR, NOT, XOR** (Ou exclusif : $x \oplus y = x\bar{y} + \bar{x}y$)
* **NAND, NOR**

### Circuits arithmétiques classiques
1. **Demi-additionneur (Half-Adder) :** Additionne deux bits $A$ et $B$.
   * Sortie Somme : $S = A \oplus B$
   * Sortie Retenue (Carry) : $C = A \cdot B$
2. **Additionneur complet (Full-Adder) :** Additionne $A$, $B$ et une retenue entrante $C_{in}$.
   * $S = A \oplus B \oplus C_{in}$
   * $C_{out} = (A \cdot B) + (C_{in} \cdot (A \oplus B))$
3. **Multiplexeur (MUX) :** Aiguille vers la sortie l'une des $2^n$ entrées de données en fonction de $n$ entrées de sélection.

---

## 5. Circuits Séquentiels

Contrairement aux circuits combinatoires, les circuits séquentiels possèdent des **boucles de rétroaction**, ce qui leur confère un état interne (une mémoire).

### Éléments de mémorisation de base
* **Verrou (Latch) RS (Reset-Set) :** Construit à l'aide de portes NOR ou NAND croisées. Il possède deux entrées $R$ et $S$. 
  * *Piège fondamental :* L'état $R=1$ et $S=1$ est interdit (conduit à une instabilité ou un état indéterminé selon la technologie).
* **Bascule (Flip-Flop) D (Data) :** Échantillonne l'entrée $D$ sur un front (montant ou descendant) du signal d'horloge $CLK$.
  * Équation caractéristique : $Q_{n+1} = D$ (au prochain coup d'horloge).

---

## 6. Méthodes et Astuces de Concours

* **Minimisation algébrique vs Karnaugh :** Pour les fonctions de 2 à 4 variables, privilégiez systématiquement les **tables de Karnaugh** pour obtenir une forme simplifiée optimale sans calculs algébriques fastidieux. N'oubliez pas les regroupements par $2^k$ cases adjacentes (en considérant la table comme toroïdale).
* **Propriété du XOR :** Le ou-exclusif est associatif et commutatif. De plus, $x \oplus x = 0$ et $x \oplus 0 = x$. Très utile pour le chiffrement basique (XOR swap).

---

## 7. Pièges Classiques à Éviter

1. **Glissements (Hazards) :** Dans les circuits réels, les portes ont un temps de propagation non nul ($\epsilon > 0$). Des transitions parasites (glissements statiques ou dynamiques) peuvent apparaître lors de changements de variables. Une mise en forme algébrique adaptée ou l'ajout de termes de redondance dans la FND sont parfois nécessaires.
2. **Confondre Latch et Flip-Flop :** 
   * Un *latch* est transparent (sensible au niveau du signal).
   * Une *bascule* est déclenchée par un front d'horloge (sensible à la transition). En MP2I, on utilise des bascules synchrones pour éviter les problèmes de course critique.
3. **Négation hâtive :** Appliquer De Morgan en oubliant de basculer l'opérateur central ($\overline{A + B} = \bar{A} \cdot \bar{B}$ et non $\bar{A} + \bar{B}$).