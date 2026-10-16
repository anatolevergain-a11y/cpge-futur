---
title: 'Optimisation au concours : Informatique MP (IPT)'
description: 'Les questions incontournables aux concours, les erreurs à éviter et les rédactions modèles de jury.'
sidebar:
  badge:
    text: 'Méthode Concours'
    variant: 'caution'
---

## 🎯 Objectif du module & Exigences des Jurys

En tant que concepteur de sujets et président de jury pour les concours de classes préparatoires (filière MP), je constate chaque année la même fracture entre les candidats. L'informatique en option (IPT) n'est pas une science molle où l'intuition suffit : c'est une discipline rigoureuse, formalisée, évaluée avec la même exigence mathématique qu'une épreuve d'algèbre ou d'analyse.

Ce guide a pour vocation de vous armer sur trois piliers fondamentaux de l'épreuve d'informatique :
1. **La rigueur démonstrative** (correction, invariant, variant).
2. **La maîtrise des bases de données relationnelles** (SQL avancé).
3. **L'efficacité algorithmique** (programmation dynamique).

Pour emporter l'adhésion du correcteur et obtenir la note maximale, votre copie doit être propre, structurée, et utiliser un vocabulaire technique irréprochable. Suivez scrupuleusement les méthodes canoniques exposées ci-dessous.

---

## 📌 Question Type 1 : Preuve d'invariant de boucle et terminaison par variant strictement décroissant

### 💡 Méthode canonique & Étapes de rédaction

Une preuve de correction partielle et totale d'un algorithme itératif repose sur deux piliers indissociables :
1. **L'invariant de boucle** (pour la correction partielle) :
   - **Initialisation** : Prouver que l'invariant est vrai avant la première entrée dans la boucle.
   - **Conservation** : Supposer l'invariant vrai à l'entrée d'une étape et prouver qu'il reste vrai à la sortie de cette même étape.
   - **Terminaison / Utilisation** : Montrer qu'à la fin de la boucle, combiné avec la condition d'arrêt, l'invariant permet d'établir la post-condition (le résultat attendu).
2. **Le variant de boucle** (pour la terminaison) :
   - Définir une expression entière $V$ (ou à valeurs dans un ensemble bien fondé) fonction des variables de boucle.
   - Prouver que $V$ est strictement décroissant à chaque itération.
   - Prouver qu'il existe une borne inférieure (généralement $0$ ou $-\text{1}$) telle que si le variant atteint cette borne, la condition de boucle devient fausse.

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Sujet type :** *Écrire une fonction calculant par divisions successives le quotient et le reste de la division euclidienne d'un entier $a \in \mathbb{N}$ par un entier $b \in \mathbb{N}^*$. Prouver sa correction et sa terminaison.*

**Code proposé :**
```python
def division(a, b):
    q = 0
    r = a
    while r >= b:
        r = r - b
        q = q + 1
    return q, r
```

**Rédaction modèle type /20 :**

* **Correction partielle (Invariant) :**
  Considérons l'invariant de boucle suivant : « $a = b \times q + r$ et $r \ge 0$ ».
  - *Initialisation* : Avant d'entrer dans la boucle, $q = 0$ et $r = a$. On a bien $b \times 0 + a = a$, et comme $a \in \mathbb{N}$, $r \ge 0$. L'invariant est vérifié.
  - *Conservation* : Supposons l'invariant vrai avant une itération. Soient $q$ et $r$ les valeurs courantes. La condition d'entrée dans la boucle garantit que $r \ge b$. À la fin de l'itération, les nouvelles variables sont $q' = q + 1$ et $r' = r - b$. 
    Calculons $b \times q' + r' = b(q + 1) + (r - b) = b \times q + b + r - b = b \times q + r = a$ (par hypothèse de récurrence). De plus, puisque $r \ge b$, on a $r' = r - b \ge 0$. L'invariant est donc conservé.
  - *Terminaison et post-condition* : À la sortie de la boucle, la condition $r \ge b$ est fausse, donc $r < b$. L'invariant étant toujours vrai, on a $a = b \times q + r$ avec $0 \le r < b$. C'est exactement la définition de la division euclidienne de $a$ par $b$.

* **Terminaison (Variant) :**
  Considérons le variant de boucle $V = r$.
  - À chaque itération, la variable $r$ est remplacée par $r' = r - b$. Puisque $b \ge 1$, on a $r' \le r - 1 < r$, donc $V$ est strictement décroissant : $V_{n+1} \le V_n - 1$.
  - La boucle s'exécute tant que $r \ge b$ (avec $b > 0$). Dès que $r < b$, la boucle s'arrête. Le variant est minoré par $0$ dans l'ensemble des entiers naturels (car $r \ge 0$ d'après l'invariant). Par conséquent, le nombre d'itérations est fini et l'algorithme termine.

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
* **Oublier la minoration du variant** : Dire qu'une quantité décroît ne suffit pas à prouver qu'elle atteint une borne d'arrêt (ex: une variable réelle strictement décroissante vers $0$ sans l'atteindre en un nombre fini d'pas discrets).
* **Confondre invariant et post-condition** : L'invariant est ce qui reste stable *pendant* la boucle. Il doit être suffisamment fort pour induire le résultat final une fois couplé à la négation de la garde de la boucle.

---

## 📌 Question Type 2 : Écriture de requêtes SQL avec agrégations GROUP BY, HAVING et sous-requêtes imbriquées

### 💡 Méthode canonique & Étapes de rédaction

Les bases de données relationnelles font l'objet d'exercices fréquents mêlant algèbre relationnelle et SQL. Pour concevoir une requête complexe :
1. **Identifier les tables sources** nécessaires dans la clause `FROM` (en utilisant des `JOIN` explicites si nécessaire).
2. **Filtrer les lignes en amont** avec la clause `WHERE` (conditions sur les attributs individuels).
3. **Regrouper les données** selon les critères demandés via la clause `GROUP BY`.
4. **Filtrer les groupes** a posteriori à l'aide de la clause `HAVING` (conditions portant sur des fonctions d'agrégation comme `SUM`, `COUNT`, `AVG`, `MAX`, `MIN`).
5. **Gérer les cas globaux ou relationnels complexes** via des sous-requêtes dans le `WHERE` (ex: opérateurs `IN`, `EXPORTS`, ou comparaisons avec `ALL` / `ANY`).

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Sujet type :** *Soit une base de données contenant deux tables :*
- `Etudiant(id_etiv, nom, filiere)`
- `Note(id_etiv, matiere, valeur)`

*Écrire une requête SQL affichant le nom des étudiants de la filière `'MP'` dont la moyenne générale (toutes matières confondues) est strictement supérieure à la moyenne générale de tous les étudiants de la filière `'PC'`.*

**Rédaction modèle type /20 :**

```sql
SELECT E.nom
FROM Etudiant E
JOIN Note N ON E.id_etiv = N.id_etiv
WHERE E.filiere = 'MP'
GROUP BY E.id_etiv, E.nom
HAVING AVG(N.valeur) > (
    SELECT AVG(N2.valeur)
    FROM Etudiant E2
    JOIN Note N2 ON E2.id_etiv = N2.id_etiv
    WHERE E2.filiere = 'PC'
);
```

* **Explications rédigées pour la copie :**
  - La clause `JOIN` permet d'associer chaque étudiant à ses notes.
  - Le filtre `WHERE E.filiere = 'MP'` restreint l'analyse aux seuls étudiants de MP.
  - Le `GROUP BY E.id_etiv, E.nom` permet d'isoler chaque étudiant pour calculer sa moyenne individuelle (attention à inclure tous les attributs non agrégés de la clause `SELECT` dans le `GROUP BY` selon les normes SQL strictes).
  - La fonction d'agrégation `AVG(N.valeur)` calcule la moyenne de l'étudiant courant.
  - La clause `HAVING` compare cette moyenne à une sous-requête indépendante calculant la moyenne globale des étudiants de la filière `'PC'`.

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
* **Confusion entre `WHERE` et `HAVING`** : Utiliser une fonction d'agrégation (`AVG`, `SUM`, `COUNT`) dans une clause `WHERE` est une erreur syntaxique et sémantique majeure (le `WHERE` s'applique avant le regroupement).
* **Oubli des attributs dans le `GROUP BY`** : En SQL standard, tout attribut présent dans le `SELECT` qui n'est pas argument d'une fonction d'agrégation *doit* figurer dans le `GROUP BY`.

---

## 📌 Question Type 3 : Résolution d'un problème d'optimisation par programmation dynamique ascendante

### 💡 Méthode canonique & Étapes de rédaction

Face à un problème d'optimisation (recherche d'un coût minimal, d'un chemin optimal, ou de dénombrement) présentant une structure de sous-optimnalité (les sous-problèmes se recoupent), la programmation dynamique est exigée.
1. **Définition de la structure des sous-problèmes** : Identifier les paramètres caractérisant un sous-problème et nommer le tableau (ou dictionnaire) de mémorisation (ex: `T[i]` ou `T[i][j]`).
2. **Équation de récurrence (Bellman)** : Exprimer $T[i]$ en fonction des sous-problèmes précédents de manière mathématique rigoureuse.
3. **Cas de base (Conditions initiales)** : Fixer les valeurs des premiers éléments évidents du tableau.
4. **Implémentation ascendante (*bottom-up*)** : Écrire le code itératif en remplissant le tableau de bas en haut (pour éviter la récursion et les risques de dépassement de pile *stack overflow*).
5. **Analyse de la complexité** : Établir systématiquement la complexité en temps et en espace en fonction de la taille des dimensions du tableau.

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Sujet type :** *Problème du rendu de monnaie minimal.* 
*Soit un ensemble de pièces de monnaie de valeurs $P = [p_1, p_2, \dots, p_n]$. Étant donné un montant entier $S \in \mathbb{N}$, on cherche le nombre minimal de pièces nécessaires pour obtenir exactement la somme $S$. Écrire une fonction utilisant la programmation dynamique ascendante et donner sa complexité.*

**Rédaction modèle type /20 :**

* **1. Analyse mathématique et structure des sous-problèmes :**
  Soit $C[s]$ le nombre minimal de pièces nécessaires pour composer la somme $s$ (avec $0 \le s \le S$).
  L'équation de Bellman s'écrit, pour $s \ge 1$ :
  $$C[s] = 1 + \min_{p \in P \text{ t.q. } s - p \ge 0} (C[s - p])$$
  avec le cas de base $C[0] = 0$. Si aucune pièce ne permet de rendre la somme, on pose par convention $C[s] = +\infty$.

* **2. Implémentation en Python :**

```python
def rendu_monnaie_minimal(pieces, S):
    # Tableau de taille S+1 initialise a l'infini
    # C[s] representera le nombre minimal de pieces pour la somme s
    C = [float('inf')] * (S + 1)
    C[0] = 0  
    
    for s in range(1, S + 1):
        for p in pieces:
            if s - p >= 0 and C[s - p] + 1 < C[s]:
                C[s] = C[s - p] + 1
                
    return C[S] if C[S] != float('inf') else -1
```

* **3. Analyse de la complexité :**
  - **Complexité en temps** : L'algorithme comporte deux boucles imbriquées. La boucle externe tourne $S$ fois et la boucle interne parcourt les $n$ pièces de la liste `pieces`. La complexité temporelle est donc de $\mathcal{O}(S \times n)$, ce qui est polynomial en la taille de l'entrée (contrairement à l'approche naïve récursive non mémoïsée qui est exponentielle).
  - **Complexité en espace** : L'utilisation du tableau linéaire `C` de taille $S + 1$ entraîne une complexité spatiale de $\mathcal{O}(S)$.

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
* **Privilégier la récursivité simple sans mémoïsation** : C'est une erreur éliminatoire en termes de barème sur l'efficacité. Le jury attend une approche itérative ascendante ou au minimum mémoïsée (*top-down* avec mémorisation).
* **Mauvaise initialisation des cas impossibles** : Oublier de traiter le cas où une somme est impossible à atteindre, menant à des erreurs de type `IndexError` ou à des résultats faussés par des valeurs par défaut aberrantes (`0` au lieu de $+\infty$).