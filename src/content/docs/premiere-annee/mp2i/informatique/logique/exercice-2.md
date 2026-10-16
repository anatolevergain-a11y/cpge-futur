---
title: 'Exercice 2 : Preuves formelles et déduction'
description: 'Problème d entraînement type concours.'
---

# Problème : Preuves formelles, sémantique et limites des systèmes déductifs

Ce problème s'articule autour de l'étude formelle des systèmes de déduction en logique propositionnelle. On s'intéresse à la construction d'un prouveur automatique minimaliste, à la sémantique des connecteurs et à une analyse critique de l'expressivité des systèmes formels.

---

## Énoncé

On considère un ensemble dénombrable de variables propositionnelles noté $\mathcal{V} = \{X_0, X_1, X_2, \dots\}$. 
L'ensemble des formules de la logique propositionnelle, noté $\mathcal{F}$, est défini inductivement par la grammaire suivante :
$$\mathcal{F} ::= X \mid \bot \mid (\mathcal{F} \implies \mathcal{F}) \quad \text{où } X \in \mathcal{V}$$

Les autres connecteurs usuels ($\neg, \land, \lor$) sont introduits comme des abréviations syntaxiques :
* $\neg A$ est défini par $A \implies \bot$
* $A \lor B$ est défini par $\neg A \implies B$
* $A \land B$ est défini par $\neg (A \implies \neg B)$

Une *évaluation* (ou interprétation) est une application $\sigma : \mathcal{V} \to \{\text{Vrai}, \text{Faux}\}$. Elle s'étend naturellement à $\mathcal{F}$ par les tables de vérité usuelles. Une formule $A$ est dite *tautologie* (notée $\models A$) si pour toute évaluation $\sigma$, $\sigma(A) = \text{Vrai}$.

On s'intéresse à un système de déduction naturelle intuitionniste réduit à l'implication et à l'absurde, muni des schémas d'axiomes de Hilbert suivants :
1. **(K)** $A \implies (B \implies A)$
2. **(S)** $(A \implies (B \implies C)) \implies ((A \implies B) \implies (A \implies C))$
3. **(Peirce / Classique)** $((A \implies \bot) \implies A) \implies A$

On note $\vdash A$ le fait qu'une formule $A$ est déductible à partir de l'ensemble vide d'hypothèses en utilisant le Modus Ponens comme unique règle d'inférence.

---

## Questions

### Partie I : Manipulations syntaxiques et sémantiques

1. Écrire une fonction en OCaml définissant le type algébrique `formule` représentant $\mathcal{F}$.
2. Écrire une fonction `variables : formule -> VSet.t` permettant de récupérer l'ensemble des variables propositionnelles présentes dans une formule.
3. Définir une fonction `evalue : (string -> bool) -> formule -> bool` qui calcule la valeur de vérité d'une formule étant donnée une évaluation des variables.

### Partie II : Théorie de la démonstration

4. Démontrer formellement (en arbre de déduction ou par suite d'axiomes) le théorème de la déduction faible pour l'implication seule : si $A \vdash B$, alors $\vdash A \implies B$.
5. Prouver que pour toute formule $A$, on a $\vdash A \implies A$.
6. On souhaite implémenter un vérificateur de preuves. Écrire un type `preuve` et une fonction `verifier_preuve : preuve -> formule -> bool` qui certifie qu'un arbre de déduction correspond bien à la formule prétendue.

### Partie III : Analyse critique et limites du modèle

7. **Analyse critique :** Le système formel présenté ici ambitionne de capturer la totalité du raisonnement mathématique valide en logique propositionnelle. Discutez de manière rigoureuse les limites inhérentes à ce modèle syntaxique face à l'intuition mathématique humaine et à la sémantique computationnelle. On pourra aborder la question de la décidabilité, de l'explosion combinatoire des preuves, et de l'adéquation entre vérité sémantique et dérivabilité syntaxique (théorèmes de Gödel/Complétude, bien que hors-programme strict, leurs intuitions philosophiques et informatiques sont attendues).

---

## Pistes et Indications

* **Partie I :** Utiliser les types récursifs en OCaml. Pour les ensembles de variables, le module `Set.Make` de la bibliothèque standard est conseillé.
* **Partie II :** Pour $A \implies A$, utiliser les axiomes (K) et (S) astucieusement en posant $C = A$. Observez que $(A \implies ((A \implies A) \implies A)) \implies ((A \implies (A \implies A)) \implies (A \implies A))$.
* **Partie III :** Réfléchissez au fossé entre la *vérification* d'une preuve (qui est efficace, en temps polynomial) et la *recherche* ou la *génération* automatique de preuves (problème NP-complet ou pire, indécidable dans d'autres logiques). Pensez aussi à la notion de sensemaking humain vs manipulation aveugle de symboles par une machine de Turing.

---

## Corrigé partiel et guidé

### Partie I_1. Représentation en OCaml :
```ocaml
type formule = 
  | Var of string
  | Bot
  | Imp of formule * formule
```

2. Extraction des variables :
```ocaml
module VSet = Set.Make(String)

let rec variables = function
  | Var x -> VSet.singleton x
  | Bot -> VSet.empty
  | Imp (f1, f2) -> VSet.union (variables f1) (variables f2)
```

3. Évaluation sémantique :
```ocaml
let rec evalue sigma = function
  | Var x -> sigma x
  | Bot -> false
  | Imp (f1, f2) -> not (evalue sigma f1) || evalue sigma f2
```

### Partie II

5. Preuve de $\vdash A \implies A$ :
On instancie le schéma (S) avec $A$, $B = A \implies A$ et $C = A$, combiné avec (K). 
Plus directement, voici la séquence classique :
1. $(A \implies ((A \implies A) \implies A)) \implies ((A \implies (A \implies A)) \implies (A \implies A))$ (Axiome S)
2. $A \implies ((A \implies A) \implies A)$ (Axiome K)
3. $(A \implies (A \implies A)) \implies (A \implies A)$ (Par Modus Ponens entre 1 et 2)
4. $A \implies (A \implies A)$ (Axiome K)
5. $A \implies A$ (Par Modus Ponens entre 3 et 4).

6. Vérificateur de preuve :
```ocaml
type preuve =
  | AxiomeK of formule * formule
  | AxiomeS of formule * formule * formule
  | AxiomePeirce of formule
  | ModusPonens of preuve * preuve

let rec verifier = function
  | AxiomeK (a, b) -> Imp (a, Imp (b, a))
  | AxiomeS (a, b, c) -> Imp (Imp (a, Imp (b, c)), Imp (Imp (a, b), Imp (a, c)))
  | AxiomePeirce a -> Imp (Imp (Imp (a, Bot), a), a)
  | ModusPonens (p1, p2) ->
      match (verifier p1, verifier p2) with
      | Imp (f_antecedent, f_consequent), f_arg when f_antecedent = f_arg -> f_consequent
      | _ -> failwith "Erreur de preuve : Modus Ponens invalide"
```

### Partie III : Analyse critique des limites du modèle

Le modèle formel présenté ici illustre la vision formaliste de Hilbert : les mathématiques réduites à un jeu d'écriture et de manipulation de symboles syntaxiques dénués de sens intrinsèque, régis par des règles strictes.

1. **La césure entre syntaxe ($\vdash$) et sémantique ($\models$) :** 
   Le système formel est syntaxique (il manipule des arbres selon des règles de réécriture). La sémantique fait appel à des tables de vérité (modèles). Le théorème de complétude de Gödel (pour la logique du premier ordre) et les résultats analogues en logique propositionnelle garantissent que $\vdash A \iff \models A$. Cependant, **la machine ne comprend pas le sens** de ce qu'elle prouve. Elle applique aveuglement des substitutions.

2. **La complexité et l'explosion combinatoire :**
   Si la *vérification* d'une preuve formelle est linéaire en la taille de l'arbre de preuve, la *recherche* d'une preuve est un problème difficile. En logique propositionnelle classique, le problème de la satisfiabilité (SAT) est NP-complet. Dans des systèmes formels plus riches (comme ceux incluant des quantificateurs ou de l'arithmétique), le théorème d'incomplétude de Gödel nous rappelle qu'aucun système formel récursif cohérent ne peut être à la fois complet et capable de prouver sa propre consistance : il existera toujours des vérités mathématiques inaccessibles par la preuve formelle mécanique.

3. **Limites de l'expressivité et de l'intuition humaine :**
   Réduire l'implication ou la négation à des manipulations de $\bot$ (négation intuitionniste/classique) pose des problèmes philosophiques et cognitifs. Le système formel exige une explicitation absolue de chaque micro-étape (que l'humain saute par intuition ou par "saut st਼ilistique"). L'effort de formalisation croît de manière exponentielle, rendant la preuve formelle pure impraticable pour les mathématiques de haut niveau sans l'aide d'assistants de preuve interactifs sophistiqués (Coq, Lean, Isabelle) qui comblent l'écart grâce à la tactique et à l'automatisation partielle (champs de force, procédures de décision).