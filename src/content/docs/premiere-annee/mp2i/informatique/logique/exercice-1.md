---
title: 'Exercice 1 : Tables de vérité'
description: 'Problème d entraînement type concours.'
---

# Problème : Complexité et expressivité des tables de vérité en logique propositionnelle

## Énoncé

Le présent problème s'intéresse à l'étude formelle des fonctions booléennes et de leur représentation tabulaire, outil fondamental en informatique théorique pour la vérification de programmes, la conception de circuits combinatoires et la démonstration automatique de théorèmes. 

On se place dans le cadre de la logique propositionnelle classique. Soit $V = \{x_1, x_2, \dots, x_n\}$ un ensemble fini de $n$ variables propositionnelles. Une interprétation (ou valuation) est une application $\nu : V \to \{0, 1\}$. L'ensemble des interprétations possibles est noté $\mathcal{I}_n$, de cardinal $2^n$.

Une formule propositionnelle $\phi$ construite à partir de $V$ et des connecteurs $\{\land, \lor, \neg\}$ induit une fonction booléenne $f_\phi : \{0, 1\}^n \to \{0, 1\}$. Deux formules $\phi$ et $\psi$ sont dites sémantiquement équivalentes ($\phi \equiv \psi$) si elles induisent la même fonction booléenne.

L'objectif de ce problème est d'analyser la représentation des formules par leurs tables de vérité, d'étudier l'expressivité de certains fragments logiques, et de porter un regard critique sur les limites algorithmiques de ce modèle.

---

## Questions

### Partie I : Propriétés fondamentales et tables de vérité

1. **(Définition)** Rappeler formellement ce qu'est la table de vérité d'une formule $\phi$ à $n$ variables. Quel est le nombre total de fonctions booléennes distinctes à $n$ variables ?
2. **(Analyse de complexité)** Soit $n$ le nombre de variables d'une formule $\phi$. Exprimer, en fonction de $n$, la taille (le nombre de lignes) de sa table de vérité. Conclure quant à l'espace mémoire nécessaire pour stocker cette table en machine.
3. **(Équivalence et Tautologie)** Soit $\phi$ et $\psi$ deux formules. Proposer un algorithme naïf basé sur les tables de vérité permettant de décider si $\phi \equiv \psi$. Quelle est la complexité temporelle de cet algorithme dans le pire des cas ?

### Partie II : Complétude fonctionnelle

Un ensemble de connecteurs $\mathcal{C}$ est dit *fonctionnellement complet* (ou universel) si toute fonction booléenne d'arité arbitraire peut être exprimée à l'aide uniquement des connecteurs de $\mathcal{C}$.

4. **(Connecteur unique)** Le connecteur de Sheffer (NAND, noté $\uparrow$) est défini par $\phi \uparrow \psi \equiv \neg(\phi \land \psi)$. Démontrer que l'ensemble $\{\uparrow\}$ est fonctionnellement complet. *(On pourra exprimer la négation, la conjonction et la disjonction à l'aide de $\uparrow$)*.
5. **(Limite d'un fragment)** On considère le fragment logique utilisant uniquement les connecteurs $\{\land, \lor\}$ (sans négation). Soit $\phi$ une formule de ce fragment. Montrer par induction sur la structure de $\phi$ que si toutes les variables de $\phi$ sont évaluées à $1$, alors la formule s'évalue à $1$ (propriété de monotonie). En déduire que l'ensemble $\{\land, \lor\}$ n'est pas fonctionnellement complet.

### Partie III : Analyse critique du modèle

6. **(Esquisse critique)** Le modèle des tables de vérité est souvent qualifié de "naïf" en intelligence artificielle et en théorie de la complexité. Rédiger une analyse critique argumentée mettant en évidence les limites de ce modèle face au problème de la satisfaisabilité (SAT) pour de grandes valeurs de $n$. Discuter de l'alternative que constituent les formes normales ou les structures de type DAG (diagrammes de décision boursiers / BDD).

---

## Pistes et indications

* **Q4 :** Pour exprimer la négation $\neg A$, étudiez $A \uparrow A$. Pour la conjonction $A \land B$, partez de $A \uparrow B$ et appliquez une négation.
* **Q5 :** Procédez par induction structurelle sur la formule $\phi$. Cas de base : une variable. Cas inductifs : $\phi_1 \land \phi_2$ et $\phi_1 \lor \phi_2$.
* **Q6 :** Pensez à la notion de complexité en $O(2^n)$ et au fossé entre la taille d'une syntaxe (courte) et la taille de sa table de vérité (exponentielle).

---

## Corrigé pas à pas

### Partie I_1. **Table de vérité et nombre de fonctions :**
   La table de vérité d'une formule $\phi$ est une fonction tabulée qui associe à chaque élément $\nu \in \mathcal{I}_n$ la valeur de vérité de $\phi$ sous l'interprétation $\nu$. 
   Puisque chaque variable peut prendre $2$ valeurs ($0$ ou $1$) et qu'il y a $n$ variables, $|\mathcal{I}_n| = 2^n$. Une fonction booléenne à $n$ variables est une application de $\{0, 1\}^n dans \{0, 1\}$. Le nombre de telles applications est de $2^{(2^n)}$.

2. **Complexité spatiale :**
   La table comporte exactement $2^n$ lignes. Pour stocker explicitement la table de vérité en mémoire, la complexité spatiale est donc en $\mathcal{O}(2^n)$. C'est une explosion combinatoire : dès $n = 60$, $2^{60}$ dépasse la capacité des mémoires des supercalculateurs actuels.

3. **Décision d'équivalence :**
   L'algorithme consiste à générer les $2^n$ lignes des tables de vérité de $\phi$ et $\psi$ puis à comparer les colonnes de résultats terme à terme. Si les sorties coïncident pour toutes les interprétations, alors $\phi \equiv \psi$.
   La complexité temporelle de cet algorithme est en $\mathcal{O}(2^n \cdot |\phi|)$, où $|\phi|$ représente la taille syntaxique de la formule (le nombre de symboles), car il faut évaluer la formule pour chaque ligne.

---

### Partie II

4. **Complétude du NAND ($\uparrow$) :**
   Montrons que l'on peut retrouver les connecteurs de base $\{\neg, \land, \lor\}$ à l'aide de $\uparrow$ :
   * **Négation :** $A \uparrow A \equiv \neg(A \land A) \equiv \neg A$.
   * **Conjonction :** $(A \uparrow B) \uparrow (A \uparrow B) \equiv \neg( (A \uparrow B) \land (A \uparrow B) ) \equiv \neg(\neg(A \land B)) \equiv A \land B$.
   * **Disjonction :** Par les lois de De Morgan, $A \lor B \equiv \neg(\neg A \land \neg B)$. En posant $\neg A = A \uparrow A$ et $\neg B = B \uparrow B$, on obtient $A \lor B \equiv (A \uparrow A) \uparrow (B \uparrow B)$.
   Puisque tout connecteur classique peut être exprimé via $\{\uparrow\}$, cet ensemble est fonctionnellement complet.

5. **Monotonie du fragment $\{\land, \lor\}$ :**
   Soit $\mathcal{P}(\phi)$ la propriété : « Si toutes les variables de $\phi$ valent $1$, alors $\phi$ s'évalue à $1$ ».
   * **Base :** Si $\phi = x_i$, par hypothèse l'interprétation assigne $1$ à $x_i$, donc la formule s'évalue à $1$. La propriété est vraie.
   * **Hérédité :** Supposons la propriété vraie pour $\phi_1$ et $\phi_2$.
     * Si $\phi = \phi_1 \land \phi_2$ : par hypothèse d'induction, $\phi_1$ et $\phi_2$ s'évaluent à $1$. Ainsi, $1 \land 1 = 1$.
     * Si $\phi = \phi_1 \lor \phi_2$ : par hypothèse d'induction, au moins l'une d'elles s'évalue à $1$ (voire les deux), donc $1 \lor 1 = 1$ ou $1 \lor 0 = 1$.
   La propriété est donc démontrée par induction.
   * **Conclusion :** La fonction constante $f(x) = 0$ (qui renvoie $0$ lorsque toutes les variables valent $1$) ne peut pas être exprimée dans ce fragment. Par conséquent, $\{\land, \lor\}$ n'est pas fonctionnellement complet.

---

### Partie III

6. **Analyse critique du modèle :**
   * **Limites intrinsèques :** Le modèle tabulaire souffre d'une inefficacité drastique face à la structure syntaxique des formules. Une formule très courte (par exemple, une conjonction de clauses ou une formule issue de la logique temporelle) peut posséder une taille syntaxique linéaire $\mathcal{O}(n)$ tout en générant une table de vérité de taille $\mathcal{O}(2^n)$. Le calcul et le stockage de la table de vérité violent immédiatement l'hypothèse de tratabilité pour des valeurs usuelles de $n$ en pratique industrielle ($n > 300$).
   * **Problème SAT :** Déterminer si une formule est satisfiable (possède au moins une ligne à $1$ dans sa table) via la construction complète de la table de vérité équivaut à une force brute inefficace. 
   * **Alternatives modernes :** Pour pallier ces limites, les solveurs SAT modernes (DPLL, CDCL) évitent l'exploration exhaustive de la table de vérité en effectuant des coupes dans l'espace de recherche (élagage par propagation unitaire). De même, les *Binary Decision Diagrams* (BDD) compressent les tables de vérité en graphes orientés acycliques (DAG) réduits, permettant parfois de manipuler canoniquement et efficacement des fonctions booléennes complexes là où les tables échouent.