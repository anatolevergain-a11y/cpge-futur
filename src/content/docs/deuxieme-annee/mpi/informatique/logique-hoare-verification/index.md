---
title: 'Cours : Logique de Hoare et vérification formelle'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

## 📌 1. Définitions & Cadre d'étude

La logique de Hoare est un formalisme axiomatique inventé par C.A.R. Hoare permettant de raisonner mathématiquement sur la correction des programmes impératifs.

### Le Langage de Commande (Mini-langage impératif)
Soit $\text{Var}$ un ensemble de variables et $\text{Expr}$ l'ensemble des expressions arithmétiques et booléennes. Les commandes (ou instructions) $\text{Cmd}$ sont définies par la grammaire abstraite suivante :
$$c ::= x := e \mid c_1 ; c_2 \mid \text{if } b \text{ then } c_1 \text{ else } c_2 \mid \text{while } b \text{ do } c$$

### Le Triple de Hoare
Un **triple de Hoare** est une expression de la forme :
$$\{P\} \, c \, \{Q\}$$
où :
- $P$ est la **précondition** : une assertion (prédicat logique sur les variables) vraie avant l'exécution de la commande $c$.
- $c$ est une commande du langage impératif.
- $Q$ est la **postcondition** : une assertion vraie après l'exécution de $c$ (si celle-ci se termine).

### Correction Partielle vs Correction Totale
- **Correction partielle ($\models_{\text{part}}$) :** $\{P\} \, c \, \{Q\}$ signifie que *si* l'exécution de $c$ démarrée dans un état satisfaisant $P$ se termine, *alors* l'état final satisfait $Q$.
- **Correction totale ($\models_{\text{tot}}$) :** $[P] \, c \, [Q]$ (notation usuelle) signifie que l'exécution de $c$ démarrée dans un état satisfaisant $P$ **se termine** *et* l'état final satisfait $Q$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

Le système de déduction de Hoare fournit des règles syntaxiques pour prouver la correction partielle.

### Les Règles d'Inférence de Hoare

1. **Règle de l'affectation :**
   $$\{P[x \leftarrow e]\} \, x := e \, \{P\}$$
Note: $P[x \leftarrow e]$ désigne la substitution de toutes les occurrences libres de la variable $x$ par l'expression $e$ dans $P$.*

2. **Règle de la composition séquentielle :**
   $$\frac{\{P\} \, c_1 \, \{R\} \quad \{R\} \, c_2 \, \{Q\}}{\{P\} \, c_1 ; c_2 \, \{Q\}}$$

3. **Règle de l'alternative (if-then-else) :**
   $$\frac{\{P \land b\} \, c_1 \, \{Q\} \quad \{P \land \neg b\} \, c_2 \, \{Q\}}{\{P\} \, \text{if } b \text{ then } c_1 \text{ else } c_2 \, \{Q\}}$$

4. **Règle de la boucle while (Invariant) :**
   $$\frac{\{I \land b\} \, c \, \{I\}}{\{I\} \, \text{while } b \text{ do } c \, \{I \land \neg b\}}$$
   *I est appelé l'invariant de boucle.*

5. **Règle de conséquence (affaiblissement / renforcement) :**
   $$\frac{P \implies P' \quad \{P'\} \, c \, \{Q'\} \quad Q' \implies Q}{\{P\} \, c \, \{Q\}}$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Calcul de la plus fausse précondition (Weakest Precondition - WP)
En pratique, pour automatiser la vérification (notamment en MPI), on raisonne par récurrence arrière en calculant la plus faible précondition $\text{wp}(c, Q)$ qui garantit $Q$ après l'exécution de $c$.

- **Affectation :**
  $$\text{wp}(x := e, Q) = Q[x \leftarrow e]$$

- **Composition séquentielle :**
  $$\text{wp}(c_1 ; c_2, Q) = \text{wp}(c_1, \text{wp}(c_2, Q))$$

- **Alternative :**
  $$\text{wp}(\text{if } b \text{ then } c_1 \text{ else } c_2, Q) = (b \implies \text{wp}(c_1, Q)) \land (\neg b \implies \text{wp}(c_2, Q))$$

- **Boucle While :**
  Le calcul exact par WP n'est pas possible en général (indécidabilité de l'arrêt). On utilise un **invariant $I$** fourni par l'utilisateur, et l'on vérifie trois conditions de verification (VC - Verification Conditions) :
  1. $P \implies I$ (L'invariant est établi avant d'entrer dans la boucle)
  2. $\{I \land b\} \, c \, \{I\}$ (L'invariant est conservé par le corps de la boucle)
  3. $(I \land \neg b) \implies Q$ (À la sortie de la boucle, l'invariant couplé à la négation de la garde implique la postcondition)

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Sens de la substitution dans l'affectation :**
   L'erreur classique est d'écrire $\{P\} \, x := e \, \{P[x \leftarrow e]\}$. **C'est faux.** Le calcul se fait toujours *à l'envers* : pour obtenir une propriété après l'affectation, il faut que la propriété substituée soit vraie *avant*.
Exemple: * $\{x = 0\} \, x := x + 1 \, \{x = 1\}$ est correct car $(x = 1)[x \leftarrow x + 1] \iff (x + 1 = 1) \iff (x = 0)$.

2. **Oubli de la condition de terminaison pour la correction totale :**
   Pour prouver la correction totale d'une boucle $\text{while}$, trouver un invariant $I$ ne suffit pas. Il faut impérativement associer un **variant de boucle** $v$ (valeur entière strictement décroissante minorée par $0$) pour prouver la **terminaison**.

3. **Affaiblissement / Renforcement inversés dans la règle de conséquence :**
   On ne peut renforcer la précondition que par implication logique vers le bas ($P \implies P'$ permet d'élargir les cas valides), et affaiblir la postcondition de même ($Q' \implies Q$). Ne jamais inverser le sens des implications $\implies$.