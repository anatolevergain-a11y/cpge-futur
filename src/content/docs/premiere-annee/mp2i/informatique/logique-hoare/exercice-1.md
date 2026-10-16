---
title: 'Exercice 1 : Tables de vérité'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse sémantique et normalisation de formules par tables de vérité

**Matière :** Informatique (Filière MP2I)  
Chapitre: ** Logique propositionnelle et Logique de Hoare  
**Thème :** Tables de vérité, équivalence logique et formes normales  

---

## Introduction et Objectifs

Dans le cadre des épreuves d'informatique en CPGE MP2I, la maîtrise de la logique propositionnelle est fondamentale tant pour la vérification de programmes (correction, logique de Hoare) que pour la conception de circuits combinatoires. 

Ce problème propose d'étudier l'évaluation de formules propositionnelles, de construire et d'exploiter leurs tables de vérité, puis d'aborder des notions de formes normales et de satisfaisabilité, tout en adoptant la rigueur exigée aux concours.

---

## Partie I : Préliminaires et Définitions (15 minutes)

Soit $\mathcal{P}$ un ensemble de variables propositionnelles. On considère les connecteurs logiques usuels : la négation ($\neg$), la conjonction ($\land$), la disjonction ($\lor$), l'implication ($\to$) et l'équivalence ($\leftrightarrow$).

1. **Rappel de cours :** Définir formellement ce qu'est une *tautologie* et une formule *satisfaisable*.
2. **Implication matérielle :** Exprimer la formule $P \to Q$ en utilisant uniquement les connecteurs $\neg$ et $\lor$. Justifier à l'aide d'une table de vérité que $(P \to Q) \equiv (\neg P \lor Q)$.

### Corrigé et Analyse :
1. Une formule $\phi$ est une **tautologie** si elle est évaluée à $\text{Vrai}$ (ou $1$) pour toutes les affectations possibles de ses variables propositionnelles. Elle est **satisfaisable** s'il existe *au moins une* affectation pour laquelle $\phi$ s'évalue à $\text{Vrai}$.
2. Table de vérité de $P \to Q$ et $\neg P \lor Q$ :

| $P$ | $Q$ | $\neg P$ | $P \to Q$ | $\neg P \lor Q$ |
| :-: | :-: | :------: | :-------: | :-------------: |
| V   | V   | F        | **V**     | **V**           |
| V   | F   | F        | **F**     | **F**           |
| F   | V   | V        | **V**     | **V**           |
| F   | F   | V        | **V**     | **V**           |

Les colonnes de $P \to Q$ et $\neg P \lor Q$ sont strictement identiques, ce qui prouve l'équivalence logique.

---

## Partie II : Étude d'une formule complexe (30 minutes)

On considère la formule $\Phi$ à trois variables propositionnelles $P, Q, R$ définie par :
$$\Phi = ((P \land Q) \to R) \land (P \to (Q \to R))$$

1. **Construction de la table de vérité :**  
   Reproduire et compléter la table de vérité de $\Phi$ pour toutes les $2^3 = 8$ lignes possibles.

2. **Exploitation :**  
   * La formule $\Phi$ est-elle une tautologie ? Une antilogie (contradiction) ? Justifier.
   * Donner la Forme Normale Disjonctive (FND) de $\Phi$ directement à partir de sa table de vérité.

### Corrigé et Analyse :
1. **Table de vérité de $\Phi$ :**

| Ligne | $P$ | $Q$ | $R$ | $P \land Q$ | $(P \land Q) \to R$ | $Q \to R$ | $P \to (Q \to R)$ | $\Phi$ |
| :-: | :-: | :-: | :-: | :---------: | :-----------------: | :-------: | :---------------: | :----: |
| 1   | V   | V   | V   | V           | **V**               | V         | **V**             | **V**  |
| 2   | V   | V   | F   | V           | **F**               | F         | **F**             | **F**  |
| 3   | V   | F   | V   | F           | **V**               | V         | **V**             | **V**  |
| 4   | V   | F   | F   | F           | **V**               | V         | **V**             | **V**  |
| 5   | F   | V   | V   | F           | **V**               | V         | **V**             | **V**  |
| 6   | F   | V   | F   | F           | **V**               | F         | **V**             | **V**  |
| 7   | F   | F   | V   | F           | **V**               | V         | **V**             | **V**  |
| 8   | F   | F   | F   | F           | **V**               | V         | **V**             | **V**  |

2. **Exploitation :**
   * $\Phi$ n'est pas une tautologie car la ligne 2 donne la valeur $\text{Faux}$. Elle est cependant **satisfaisable** (lignes 1, 3, 4, 5, 6, 7, 8).
   * La Forme Normale Disjonctive (FND) s'obtient en disjoignant les minterms pour lesquels $\Phi$ vaut $\text{Vrai}$ :
     $$\Phi_{\text{FND}} = (P \land Q \land R) \lor (P \land \neg Q \land R) \lor (P \land \neg Q \land \neg F) \lor (\neg P \land Q \land R) \lor (\neg P \land Q \land \neg R) \lor (\neg P \land \neg Q \land R) \lor (\neg P \land \neg Q \land \neg R)$$
     *Remarque de simplification :* On observe que $\Phi$ est fausse si et seulement si $P \text{ et } Q \text{ et } \neg R$. Par conséquent, par loi de De Morgan, $\Phi \equiv \neg(P \land Q \land \neg R) \equiv \neg P \lor \neg Q \lor R$.

---

## Partie III : Connexion avec la Logique de Hoare (15 minutes)

En programmation impérative, on s'intéresse à la validité de triplets de Hoare $\{P\} S \{Q\}$. Supposons que l'on souhaite vérifier si l'affirmation logique suivante est un invariant valide dans un contexte d'affectation :
Soit $I$ la condition $(x > 0)$. Après l'exécution de l'instruction $x := x + 1$, la condition post-exécutée est $x > 1$.

1. Traduire cette condition de validité sous forme d'une implication logique entre les propositions.
2. Évaluer cette implication à l'aide d'un raisonnement sémantique inspiré des tables de vérité (ou analyse de cas sur le domaine entier, assimilable ici à un univers fini pour les tests de borne).

### Corrigé et Analyse :
1. D'après la règle d'affectation de Hoare, la condition préalable la plus faible (*wp*) pour l'instruction $x := x + 1$ garantissant $x > 1$ est $(x + 1) > 1$, c'est-à-dire $x > 0$. L'implication à vérifier est donc :
   $$(x > 0) \to (x > 1) \text{ est-elle une tautologie ?}$$
2. **Analyse critique :** Si l'on teste cette proposition pour $x = 0.5$ (dans $\mathbb{R}$) ou $x = 0$ (dans $\mathbb{Z}$), par exemple pour $x = 0$, la prémisse $0 > 0$ est $\text{Faux}$, donc l'implication $(0 > 0) \to (0 > 1)$ est évaluée à $\text{Vrai}$ (principe de l'implication matérielle : le faux implique n'importe quoi). 
   Cependant, si $x = 0$, la prémisse de notre triplet initial $I$ était $x > 0$. Si $x = 0$, $I$ est faux. Si $x = 1$, $1 > 0$ est $\text{Vrai}$, et l'affectation donne $x = 2$, ce qui vérifie bien $2 > 1$. 
   L'implication générale $P_{\text{pre}} \to wp(S, P_{\text{post}})$ est ici validée.

---

## Analyse critique des résultats et pièges à éviter (Conseils de l'examinateur)

1. **Piège classique sur l'implication :** Ne jamais oublier qu'une implication $P \to Q$ est fausse *uniquement* dans le cas où $P$ est vrai et $Q$ est faux. Une erreur fréquente des candidats en concours est de considérer qu'une implication est fausse lorsque la prémisse est fausse.
2. **Complexité des tables de vérité :** Pour $n$ variables, une table de vérité comporte $2^n$ lignes. Sa construction exhaustive est inefficace en complexité temporelle ($\mathcal{O}(2^n)$). C'est pourquoi, dès que $n > 4$, les examinateurs privilégient l'utilisation de lois algébriques (Idempotence, Associativité, Distributivité, De Morgan) plutôt que le développement brutal par table de vérité, sauf mention explicite du sujet.