---
title: 'Cours : Logique propositionnelle'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Logique Propositionnelle
**Filière :** MP2I (Première année)  
**Matière :** Informatique  

---

## Introduction et Syntaxe

La logique propositionnelle constitue le socle formel du raisonnement mathématique et de l'informatique théorique. Elle permet de formaliser des énoncés et d'établir des preuves rigoureuses.

### Définitions fondamentales

*   **Proposition (ou formule) :** Une proposition $P$ est un énoncé mathématique auquel on peut attribuer une et une seule valeur de vérité : Vrai ($\top$ ou $1$) ou Faux ($\bot$ ou $0$).
*   **Connecteurs logiques :** Ce sont des operators permettant de combiner des propositions.
    *   Négation ($\neg P$ ou $\overline{P}$)
    *   Conjonction ($P \land Q$ - "et")
    *   Disjonction ($P \lor Q$ - "ou" inclusif)
    *   Implication ($P \implies Q$ - "si $P$ alors $Q$")
    *   Équivalence ($P \iff Q$ - "$P$ si et seulement si $Q$")

---

## Sémantique et Tables de Vérité

La sémantique définit la valeur de vérité d'une formule en fonction de la valeur de ses variables propositionnelles.

### Table de vérité des connecteurs fondamentaux

| $P$ | $Q$ | $\neg P$ | $P \land Q$ | $P \lor Q$ | $P \implies Q$ | $P \iff Q$ |
| :-: | :-: | :------: | :---------: | :--------: | :------------: | :--------: |
| $0$ | $0$ |   $1$    |     $0$     |    $0$     |      $1$       |    $1$     |
| $0$ | $1$ |   $1$    |     $0$     |    $1$     |      $1$       |    $0$     |
| $1$ | $0$ |   $0$    |     $0$     |    $1$     |      $0$       |    $0$     |
| $1$ | $1$ |   $0$    |     $1$     |    $1$     |      $1$       |    $1$     |

### Définitions métathéoriques

*   **Tautologie :** Une formule est une tautologie (ou est valide) si elle est vraie pour toutes les valuations possibles de ses variables. On note $\models P$.
*   **Insatisfaisabilité (ou contradiction) :** Une formule est insatisfaisable si elle est fausse pour toute valuation.
*   **Équivalence sémantique :** Deux formules $P$ et $Q$ sont sémantiquement équivalentes (noté $P \equiv Q$ ou $P \models\equiv Q$) si elles ont la même table de vérité, c'est-à-dire si $P \iff Q$ est une tautologie.

---

## Équivalences Notables (Algèbre de Boole)

Pour toutes propositions $P, Q, R$ :

1.  **Idempotence :** $P \land P \equiv P$ et $P \lor P \equiv P$
2.  **Commutativité :** $P \land Q \equiv Q \land P$ et $P \lor Q \equiv Q \lor P$
3.  **Associativité :** $(P \land Q) \land R \equiv P \land (Q \land R)$
4.  **Distributivité :** 
    *   $P \lor (Q \land R) \equiv (P \lor Q) \land (P \lor R)$
    *   $P \land (Q \lor R) \equiv (P \land Q) \lor (P \land R)$
5.  **Lois de De Morgan :** 
    *   $\neg(P \land Q) \equiv \neg P \lor \neg Q$
    *   $\neg(P \lor Q) \equiv \neg P \land \neg Q$
6.  **Involution :** $\neg(\neg P) \equiv P$
7.  **Absorption :** $P \lor (P \land Q) \equiv P$ et $P \land (P \lor Q) \equiv P$
8.  **Implication matérielle :** $P \implies Q \equiv \neg P \lor Q$
9.  **Contraposée :** $P \implies Q \equiv \neg Q \implies \neg P$
10. **Négation de l'implication :** $\neg(P \implies Q) \equiv P \land \neg Q$

---

## Formes Normales

Les formes normales standardisent l'écriture des formules logiques, ce qui est particulièrement utile en algorithmique et en conception de circuits.

### Définitions
*   **Littéral :** Une variable propositionnelle $P$ ou sa négation $\neg P$.
*   **Forme Normale Conjonctive (FNC) :** Une formule est en FNC si elle est une conjonction ($\land$) de disjonctions ($\lor$) de littéraux. (Ex: $(P \lor \neg Q) \land (\neg P \lor R \lor S)$).
*   **Forme Normale Disjonctive (FND) :** Une formule est en FND si elle est une disjonction ($\lor$) de conjonctions ($\land$) de littéraux. (Ex: $(P \land \neg Q) \lor (\neg P \land R)$).

> **Théorème :** Toute formule propositionnelle est sémantiquement équivalente à une FNC et à une FND.

---

## Méthodes

### Méthode 1 : Démontrer qu'une formule est une tautologie
1.  **Par table de vérité :** Si le nombre $n$ de variables est petit ($n \le 4$), dresser la table de vérité et vérifier que la colonne finale ne contient que des $1$. (Attention à la complexité en $\mathcal{O}(2^n)$).
2.  **Par réécriture (calcul propositionnel) :** Transformer la formule en utilisant les équivalences notables jusqu'à obtenir $\top$.
3.  **Par l'absurde (ou contre-exemple) :** Supposer qu'il existe une valuation pour laquelle la formule est fausse ($\bot$), et mener un raisonnement par analyse-synthèse pour aboutir à une contradiction.

### Méthode 2 : Mettre une formule en FNC
1.  Éliminer les équivalences en utilisant $P \iff Q \equiv (P \implies Q) \land (Q \implies P)$.
2.  Éliminer les implications en utilisant $P \implies Q \equiv \neg P \lor Q$.
3.  Faire "descendir" les négations à l'aide des lois de De Morgan et de l'involution ($\neg\neg P \equiv P$).
4.  Utiliser la distributivité du $\lor$ sur le $\land$ pour obtenir la structure de conjonction de disjonctions.

---

## Pièges à Éviter (Avertissements du Professeur)

*   **Attention au sens de l'implication :** $P \implies Q$ ne signifie en aucun cas que $P$ est la *cause* de $Q$. Du point de vue classique, l'implication est fausse **uniquement** si $P$ est vrai et $Q$ est faux. En particulier, **le faux implique tout** ($\bot \implies P$ est toujours vrai).
*   **La négation de l'implication :** L'erreur classique est de croire que la négation de $P \implies Q$ est $\neg P \implies \neg Q$ ou $P \implies \neg Q$. **Rappel :** $\neg(P \implies Q) \equiv P \land \neg Q$.
*   **Confusion entre syntaxe et sémantique :** $P \equiv Q$ est un énoncé métalinguistique affirmant l'équivalence des formules, tandis que $P \iff Q$ est une formule du langage object.
*   **Attention aux parenthèses :** L'opérateur $\neg$ est prioritaire. $\neg P \land Q$ signifie $(\neg P) \land Q$ et non $\neg(P \land Q)$. De même, fixez des conventions de priorité ou parenthésez rigoureusement pour éviter toute ambiguïté (en MP2I, la rigueur syntaxique est impérative).