---
title: 'Exercice 2 : Logique de Hoare et vérification'
description: 'Problème d entraînement type concours.'
---

# Problème : Vérification formelle d'algorithmes par la Logique de Hoare

*Matière : Informatique - Filière MPI*  
Chapitre: Automates, langages et logique (Thème : Logique de Hoare et correction de programmes)*

---

## Introduction et Objectifs

La logique de Hoare permet de prouver formellement la correction d'un programme impératif. Un triplet de Hoare est noté $\{P\} C \{Q\}$ où $P$ est la précondition, $C$ une commande (programme) et $Q$ la postcondition. 

L'objectif de ce problème est d'étudier la correction partielle et totale d'algorithmes classiques, d'introduire formellement la notion d'invariant de boucle, et d'implémenter un vérificateur de conditions de verification en Python.

---

## Partie I : Rappels et Règles de Base

Soit un langage impératif simple muni des constructions usuelles : affectation, séquence, conditionnelle et boucle `while`.

1. **Règle de l'affectation** : $\{P[x \leftarrow e]\} \ x := e \ \{P\}$ où $P[x \leftarrow e]$ désigne la formule $P$ dans laquelle toute occurrence libre de la variable $x$ est remplacée par l'expression $e$.
2. **Règle de la composition (séquence)** : 
   $$\frac{\{P\} C_1 \{R\} \quad \{R\} C_2 \{Q\}}{\{P\} \ C_1 ; C_2 \ \{Q\}}$$
3. **Règle de la boucle `while`** : 
   $$\frac{\{P \land B\} C \{P\}}{\{P\} \ \text{while } B \text{ do } C \text{ done} \ \{P \land \neg B\}}$$
   où $P$ est l'invariant de la boucle.

### Question 1 (Application directe)
Appliquer la règle de l'affectation pour trouver la plus faible précondition $P$ telle que le triplet suivant soit valide :
$$\{P\} \ x := x + 1 \ \{x > 5\}$$

**Corrigé :**  
En appliquant la règle de l'affectation, on substitue $x$ par $x+1$ dans la postcondition $Q \equiv (x > 5)$ :
$$P \equiv (x + 1 > 5) \iff (x > 4)$$
Le triplet le plus général est donc $\{x > 4\} \ x := x + 1 \ \{x > 5\}$.

---

## Partie II : Étude d'un algorithme de calcul par additions successives

On considère le programme $C_{\text{mult}}$ suivant, destiné à calculer le produit de deux entiers naturels $a$ et $b$ à l'aide d'additions itérées :

```text
x := 0;
y := 0;
while y < b do
    x := x + a;
    y := y + 1;
done
```

On souhaite prouver le triplet de Hoare :  
$$\{a \ge 0 \land b \ge 0\} \ C_{\text{mult}} \ \{x = a \times b\}$$

### Question 2
Proposer un invariant $I$ pour la boucle `while` permettant de prouver la correction partielle de ce programme.

**Corrigé :**  
À chaque tour de boucle, $y$ compte le nombre d'itérations effectuées et $x$ accumule la somme (soit $y \times a$). L'invariant de boucle doit lier les variables du programme aux données d'entrée tout en restant stable. On choisit :
$$I \equiv (0 \le y \le b) \land (x = y \times a)$$

### Question 3
Démontrer que l'invariant $I$ est vérifié avant l'entrée dans la boucle, qu'il est inductif (préservé par le corps de la boucle), et qu'à la sortie de la boucle, il garantit la postcondition.

**Corrigé :**  
1. **Initialisation (avant la boucle)** :  
   Juste après les affectations $x := 0$ et $y := 0$, et en supposant la précondition $P \equiv (a \ge 0 \land b \ge 0)$ :
   - $0 \le 0 \le b$ (car $b \ge 0$)
   - $0 = 0 \times a$  
   L'invariant $I$ est donc vrai initialement.

2. **Conservation (Induction)** :  
   On suppose $I \land B$ vrai avant le corps de la boucle, avec $B \equiv (y < b)$.  
   Montrons que $\{I \land y < b\} \ x := x + a ; y := y + 1 \ \{I\}$ est valide.  
   En appliquant la règle de l'affectation à rebours sur $C_2 : y := y + 1$ puis $C_1 : x := x + a$ :
   - Postcondition : $I[y \leftarrow y+1][x \leftarrow x+a]$  
   - Ce qui donne : $(0 \le y + 1 \le b) \land (x + a = (y + 1) \times a)$.  
   Or, l'hypothèse de boucle nous assure que $(0 \le y < b)$ et $(x = y \times a)$.  
   - $0 \le y < b \implies 0 \le y + 1 \le b$.
   - $x = y \times a \implies x + a = y \times a + a = (y + 1) \times a$.  
   L'invariant est donc préservé.

3. **Terminaison et Postcondition** :  
   À la sortie de la boucle, on a $I \land \neg B$, c'est-à-dire :
   $$(0 \le y \le b) \land (x = y \times a) \land \neg (y < b)$$
   Puisque $y \ge b$ et $y \le b$, on en déduit $y = b$.  
   En remplaçant dans la seconde partie de l'invariant, on obtient $x = b \times a = a \times b$, ce qui correspond exactement à la postcondition $Q$.

---

## Partie III : Vérification Automatisée (Implémentation Python)

Pour s'assurer de la correction, on souhaite écrire un petit vérificateur en Python qui manipule des expressions logiques sous forme d'arbres de syntaxe abstraite (AST).

### Question 4
Écrire une fonction Python `substitution(expr, var, val)` qui remplace une variable par une expression dans une chaîne représentant une condition (simplifiée à des comparaisons arithmétiques basiques).

**Corrigé :**

```python
def substitution(expr: str, var: str, val: str) -> str:
    """Remplace la variable 'var' par 'val' dans la chaîne 'expr'.

    Implémentation naïve par remplacement de sous-chaînes (adaptée pour l'-AST textuel).
    """
    # En pratique, on utiliserait un parser d'expression pour un vrai compilateur.
    # Ici, on simule la substitution syntaxique.
    return expr.replace(var, f"({val})")


# Exemple de test :
# print(substitution("x > 5", "x", "x + 1"))
# Affiche: "(x + 1) > 5"
```

---

## Analyse Critique des Résultats

1. **Limites de la logique de Hoare classique** :  
   La méthode présentée ici prouve la *correction partielle* (si le programme termine, alors le résultat est correct). Pour prouver la *correction totale*, il est indispensable d'associer à chaque boucle une fonction de variant (ou fonction de termination) à valeurs dans un ensemble bien fondé (par exemple $\mathbb{N}$ muni de l'ordre usuel) qui décroît strictement à chaque itération.

2. **Complexité de la vérification** :  
   L'écriture d'invariants de boucle non triviaux ne peut pas être entièrement automatisée (conséquence du théorème de Rice et de l'indécidabilité générale de l'arrêt). Les vérificateurs de programmes modernes (comme Frama-C ou Why3) reposent sur l'aide interactive de l'utilisateur (fourniture d'invariants) et délouent les conditions de vérification (VCs) à des solveurs SMT (Z3, CVC4).