---
title: 'Cours : Logique propositionnelle et Hoare'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Logique propositionnelle et Logique de Hoare

**Fiche de cours - CPGE MP2I (Première année)**
*Professeur Agrégé de Mathématiques et d'Informatique*

---

## Introduction

Ce chapitre jette les bases formelles de la rigueur en informatique. La **logique propositionnelle** permet de formaliser le raisonnement mathématique et la structure des conditions dans les programmes. La **logique de Hoare**, introduite par Sir Tony Hoare, fournit quant à elle le cadre formel indispensable pour prouver la correction des programmes impératifs.

---

## I. Logique propositionnelle

### 1. Syntaxe et sémantique

Une **proposition** (ou formule) est une assertion qui est soit vraie ($\top$ ou $1$), soit fausse ($\bot$ ou $0$).

*   **Connecteurs fondamentaux :** $\neg$ (négation), $\land$ (conjonction / et), $\lor$ (disjonction / ou), $\implies$ (implication), $\iff$ (équivalence).
*   **Définition (Implication) :** $P \implies Q$ est logiquement équivalent à $\neg P \lor Q$.
*   **Tautologie :** Une formule est une tautologie si elle est vraie pour toutes les valuations possibles de ses variables (noté $\models P$).

### 2. Équivalences logiques usuelles

Soient $P, Q, R$ des propositions.
*   **Lois de De Morgan :** 
    $$\neg(P \land Q) \equiv \neg P \lor \neg Q$$
    $$\neg(P \lor Q) \equiv \neg P \land \neg Q$$
*   **Contraposition :** 
    $$(P \implies Q) \equiv (\neg Q \implies \neg P)$$
*   **Distributivité :** 
    $$P \lor (Q \land R) \equiv (P \lor Q) \land (P \lor R)$$

### 3. Formes normales

*   **CNF (Forme Normale Conjonctive) :** Conjonction ($\land$) de clauses, une clause étant une disjonction ($\lor$) de littéraux (variables ou leurs négations).
*   **DNF (Forme Normale Disjonctive) :** Disjonction de conjonctions de littéraux.
*   *Propriété fondamentale :* Toute formule propositionnelle est logiquement équivalente à une CNF et à une DNF.

---

## II. Logique de Hoare

La logique de Hoare permet de raisonner sur la correction des programmes impératifs.

### 1. Le Triplet de Hoare

Un **triplet de Hoare** est un énoncé de la forme :
$$\{P\} \, C \, \{Q\}$$

*   $P$ : **Précondition** (assertion vraie avant l'exécution du commande $C$).
*   $C$ : **Commande** (instruction ou bloc d'instructions).
*   $Q$ : **Postcondition** (assertion garantie vraie après l'exécution de $C$, *si* $C$ se termine).

#### Correction partielle vs Correction totale
*   **Correction partielle :** Si $\{P\} \, C \, \{Q\}$ est valide, alors *si* l'exécution de $C$ partant d'un état satisfaisant $P$ se termine, l'état final satisfait $Q$.
*   **Correction totale :** Correction partielle + garantie de **terminaison** de $C$.

---

### 2. Règles d'inférence de Hoare (Correction partielle)

#### Règle de l'affectation (Assignment)
Pour une variable $x$ et une expression $e$ :
$$\{P[x \leftarrow e]\} \;\; x := e \;\; \{P\}$$
*(Où $P[x \leftarrow e]$ désigne la substitution dans $P$ de toutes les occurrences libres de $x$ par $e$).*

#### Règle de la séquence
Pour deux commandes $C_1$ et $C_2$ :
$$\frac{\{P\} \, C_1 \, \{R\} \quad\quad \{R\} \, C_2 \, \{Q\}}{\{P\} \, C_1 ; C_2 \, \{Q\}}$$

#### Règle de l'alternative (If-Then-Else)
$$\frac{\{P \land B\} \, C_1 \, \{Q\} \quad\quad \{P \land \neg B\} \, C_2 \, \{Q\}}{\{P\} \;\; \mathbf{if}\ B\ \mathbf{then}\ C_1\ \mathbf{else}\ C_2 \;\; \{Q\}}$$

#### Règle de la conséquence (Consequence)
Permet de renforcer la précondition ou d'affaiblir la postcondition :
$$\frac{P \implies P' \quad\quad \{P'\} \, C \, \{Q'\} \quad\quad Q' \implies Q}{\{P\} \, C \, \{Q\}}$$

---

### 3. La boucle While et l'Invariant

Prouver une boucle nécessite de trouver un **invariant de boucle** $I$.

1.  **Invariant ($I$) :** Propriété vraie avant et après chaque itération.
2.  **Variant ($v$) :** Expression entière strictement décroissante garantissant la terminaison (pour la correction totale).

#### Règle de Hoare pour le While
$$\frac{\{I \land B\} \, C \, \{I\}}{\{I\} \;\; \mathbf{while}\ B\ \mathbf{do}\ C \;\; \{I \land \neg B\}}$$

*Méthodologie de preuve d'une boucle :*
1.  **Initialisation :** Prouver que l'invariant est établi avant la boucle ($P \implies I$).
2.  **Conservation :** Prouver que l'invariant est préservé par le corps de la boucle ($\{I \land B\} \, C \, \{I\}$).
3.  **Terminaison :** Prouver que le variant décroit strictement et est minoré (pour la correction totale).
4.  **Finalisation :** Montrer qu'à la sortie, l'invariant couplé à la négation de la garde implique la postcondition ($I \land \neg B \implies Q$).

---

## III. Exemple type : Preuve d'un programme

Soit le programme calculant la somme des entiers de $0$ à $n-1$ ($n \in \mathbb{N}$):

```text
s := 0;
i := 0;
while i < n do
    s := s + i;
    i := i + 1;
done
```

**Triplet à prouver :**
$$\{n \ge 0\} \quad \text{Programme} \quad \{s = \sum_{k=0}^{n-1} k\}$$

*   **Invariant choisi :** $I \equiv (0 \le i \le n) \land (s = \sum_{k=0}^{i-1} k)$.
*   **Variant choisi :** $v = n - i$.

La vérification formelle de ce type de programme par application rigoureuse des règles de Hoare constitue un attendu majeur des épreuves en MP2I.