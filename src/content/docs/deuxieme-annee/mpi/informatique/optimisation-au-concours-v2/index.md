---
title: 'Optimisation au concours V2 : Informatique MPI/MPI*'
description: 'Analyse approfondie des nouvelles questions classiques aux concours, rédactions types et exigences des rapporteurs.'
sidebar:
  badge:
    text: 'Méthode Concours V2'
    variant: 'caution'
---

## 🎯 Objectif & Analyse des tendances des Concours

En tant que président de jury et concepteur de sujets pour les concours scientifiques (filière MPI/MPI*), je constate une exigence accrue de rigueur formelle, tant dans la maîtrise des structures de données avancées et de la théorie de la complexité que dans la manipulation formelle des langages et des bases de données. 

Les épreuves écrites (X-ENS, Mines-Ponts, Centrale-Supélec, CCINP) ne cherchent plus seulement à évaluer une intuition algorithmique ou l'écriture superficielle de code, mais exigent :
1. **Des preuves de correction rigoureuses** (invariants de boucle, récurrence bien fondée, arguments de monotonicité).
2. **Une maîtrise absolue des complexités temporelles et spatiales** (en pire cas, en moyenne, avec ou sans amortissement).
3. **Une syntaxe et une sémantique irréprochables** (qu'il s'agisse de code OCaml, de requêtes SQL ou de raisonnements mathématiques sur les automates et langages).

Ce guide "OPTIMISATION AU CONCOURS - QUESTIONS RECURRENTES V2" a pour but de vous transposer directement dans la tête du correcteur. Pour chaque grande thématique récurrente en informatique MPI, vous trouverez l'intitulé type, la méthode canonique attendue au tableau ou sur copie, une rédaction modèle notée $20/20$, ainsi que les pièges éliminatoires relevés par les rapports de jury.

---

## 📌 Question Type 1 : Algorithme de Bellman-Ford : détection de cycles de poids négatif et preuve de correction

### 💡 Méthode canonique & Étapes de rédaction
L'algorithme de Bellman-Ford permet de calculer les plus courts chemins depuis un sommet source unique dans un graphe orienté dont les poids des arêtes peuvent être négatifs, tout en détectant la présence éventuelle de cycles absorbants (de poids total strictement négatif).

Pour répondre aux attentes d'un jury de concours, la rédaction doit suivre rigoureusement ces étapes :
1. **Définition de l'invariant** : Poser clairement que, à l'étape $k$, les distances stockées représentent le plus court chemin de la source vers chaque sommet en utilisant au plus $k$ arêtes.
2. **Phase de relaxation** : Répéter $|V| - 1$ fois la mise à jour des distances pour toutes les arêtes $(u, v)$ de poids $w(u, v)$ : 
   $$\text{si } d[u] + w(u, v) < d[v] \text{ alors } d[v] \leftarrow d[u] + w(u, v)$$
3. **Détection de cycle négatif** : Effectuer une $|V|$-ième relaxation. S'il existe encore une arête $(u, v)$ telle que $d[u] + w(u, v) < d[v]$, alors il existe un cycle de poids négatif accessible depuis la source.
4. **Justification de la complexité** : Établir clairement que la complexité temporelle est en $\mathcal{O}(|V| \cdot |E|)$ et la complexité spatiale en $\mathcal{O}(|V|)$.

---

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé type :** 
*Étant donné un graphe orienté $G = (V, E)$ valué par une fonction $w : E \to \mathbb{R}$ et un sommet source $s \in V$, proposer une fonction implémentant l'algorithme de Bellman-Ford en OCaml ou en Python, capable de renvoyer le tableau des distances minimales ou de lever une exception en présence d'un cycle de poids négatif.*

**Rédaction modèle (Barème /20) :**

*   **Analyse et Initialisation (4/20) :**
    On initialise un tableau de distances `d` de taille $|V|$ tel que $d[s] = 0$ et $d[v] = +\infty$ pour tout $v \neq s$. 

*   **Code source en Python rigoureux (8/20) :**
```python
def bellman_ford(vertices, edges, source):
    # vertices: liste des sommets [0..V-1]
    # edges: liste de tuples (u, v, w)
    V = len(vertices)
    d = {v: float('inf') for v in vertices}
    d[source] = 0
    
    # Phase 1 : V-1 relaxations
    for _ in range(V - 1):
        modified = False
        for u, v, w in edges:
            if d[u] + w < d[v]:
                d[v] = d[u] + w
                modified = True
        # Optimisation facultative mais appréciée : arrêt précoce
        if not modified:
            break
            
    # Phase 2 : Détection de cycle de poids négatif
    for u, v, w in edges:
        if d[u] + w < d[v]:
            raise ValueError("Presence d'un cycle de poids negatif")
            
    return d
```

*   **Justification théorique et Preuve de correction (8/20) :**
    *   *Invariant de boucle* : Après $k$ iterations de la boucle principale, pour tout sommet $v$, $d[v]$ est inférieur ou égal au poids du plus court chemin de $s$ à $v$ comportant au plus $k$ arêtes.
    *   *Terminaison* : La boucle principale tourne au plus $|V|-1$ fois, chaque itération parcourant l'ensemble des $|E|$ arêtes. La complexité temporelle est donc de $\mathcal{O}(|V| \cdot |E|)$.
    *   *Détection* : S'il existe une modification possible à la $|V|$-ième étape, cela contredit le fait que tout plus court chemin simple comporte au plus $|V|-1$ arêtes, prouvant l'existence d'un cycle absorbant.

---

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
*   **Oublier de propager l'infini** : Écrire `d[u] + w < d[v]` sans vérifier si `d[u]` est égal à $+\infty$ peut générer des erreurs de dépassement ou des incohérences logiques (ex: $+\infty + (-5) = +\infty$). Il faut s'assurer que `d[u] != float('inf')`.
*   **Confondre Dijkstra et Bellman-Ford** : Appliquer une approche gloutonne de type file de priorité sur des poids négatifs mène à une catastrophe algorithmique. Le jury sanctionne lourdement cette confusion.
*   **Négliger la structure des données** : Fournir une complexité en $\mathcal{O}(|V|^3)$ sur un graphe implicite ou mal représenté au lieu de parcourir explicitement la liste des arêtes.

---

## 📌 Question Type 2 : Application du Lemme de l'étoile (Pumping Lemma) pour prouver qu'un langage n'est pas rationnel

### 💡 Méthode canonique & Étapes de rédaction
Le lemme de l'étoile est l'outil fondamental par l'absurde pour démontrer qu'un langage n'est pas reconnaissable par un automate fini (donc non rationnel). La structure de la preuve suit toujours un raisonnement par l'absurde basé sur un jeu de rôles contre un adversaire (le démon).

Les étapes canoniques de rédaction sont :
1. **Supposons par l'absurde** que le langage $L$ est rationnel.
2. D'après le lemme de l'étoile, il existe une **constante de pumping** $N \in \mathbb{N}^*$ associée à $L$.
3. **Choisir un mot $w \in L$** astucieusement tel que $|w| \ge N$ (ce choix dépend généralement de $N$ et doit être paramétré par ce dernier).
4. **Décomposer le mot** $w = xyz$ en respectant les contraintes du lemme : $|xy| \le N$ et $|y| \ge 1$.
5. **Exhiber une contradiction** en montrant qu'il existe un entier $i \ge 0$ (souvent $i = 0$ ou $i = 2$) tel que le mot pompé $xy^iz \notin L$.
6. Conclure que $L$ n'est **pas rationnel**.

---

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé type :** 
*Soit l'alphabet $\Sigma = \{a, b\}$. Démontrer que le langage $L = \{a^n b^n \mid n \in \mathbb{N}\}$ n'est pas rationnel.*

**Rédaction modèle (Barème /20) :**

*   **Hypothèse par l'absurde et invocation du lemme (4/20) :**
    Supposons par l'absurde que le langage $L = \{a^n b^n \mid n \in \mathbb{N}\}$ soit rationnel. 
    D'après le lemme de l'étoile (Pumping Lemma), il existe un entier $N \ge 1$ (la constante de pumping) tel que tout mot $w \in L$ de longueur $|w| peut se décomposer en $w = xyz$ avec les trois conditions suivantes :
    1. $|xy| \le N$
    2. $|y| \ge 1$
    3. Pour tout entier $i \ge 0$, le mot $xy^i z \in L$.

*   **Choix judicieux du mot $w$ (6/20) :**
    Considérons le mot $w = a^N b^N$. Il est évident que $w \in L$ et que sa longueur $|w| = 2N \ge N$. Les conditions d'application du lemme sont donc vérifiées.

*   **Exploitation de la contrainte $|xy| \le N$ (5/20) :**
    Puisque la condition $|xy| \le N$ est impérative et que le préfixe de $w$ est constitué exclusivement de $puces$ de la lettre $a$, le sous-mot $y$ (de longueur $|y| \ge 1$) ne contient que des lettres $a$. 
    Posons donc $y = a^k$ avec $1 \le k \le N$. Par conséquent, $x$ et $z$ sont tels que $w = a^x \cdot a^k \cdot a^{N-k} b^N$.

*   **Mise en évidence de la contradiction (5/20) :**
    Appliquons le lemme pour $i = 0$. Le mot pompé devient :
    $$xy^0z = xz = a^{N-k} b^N$$
    Puisque $k \ge 1$, on a $N-k < N$. Le nombre de lettres $a$ est donc strictement inférieur au nombre de lettres $b$ ($N-k \neq N$). 
    Par conséquent, le mot $xy^0z \notin L$, ce qui contredit directement le lemme de l'étoile.
    
Conclusion: Le langage $L$ n'est donc **pas rationnel**. $\blacksquare$

---

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
*   **Inversion des quantificateurs dans le choix de $w$** : Laisser l'adversaire (le jury ou le lemme) choisir $N$, et c'est *vous* qui devez construire $w$ en fonction de $N$. Choisir un $N$ fixe (ex: $N=5$) rend la démonstration fausse car le lemme doit valoir pour *tout* $N$.
*   **Oublier la contrainte $|xy| \le N$** : C'est l'erreur la plus fréquente. Les étudiants choisissent $w = a^N b^N$ mais oublient que $y$ doit se trouver entièrement dans la première moitié (les $a$). Si $y$ était à cheval sur les $a$ et les $b$, le pompage pourrait préserver l'égalité par compensation, ce qui bloquerait la contradiction.
*   **Absence de rigueur sur l'appartenance** : Ne pas expliciter clairement pourquoi le mot pompé ne respecte plus la condition d'appartenance au langage.

---

## 📌 Question Type 3 : Requêtes SQL avancées : sous-requêtes corrélées, auto-jointures et expressions de table communes (CTE avec WITH)

### 💡 Méthode canonique & Étapes de rédaction
Les bases de données relationnelles et le langage SQL font l'objet d'attentes rigoureuses aux concours, notamment pour manipuler des données complexes sans redondance excessive. Face à une question de requêtage avancé :
1. **Analyser le schéma relationnel** : Identifier les clés primaires (PK) et les clés étrangères (FK), ainsi que les types de cardinalités (1-N, N-N).
2. **Choisir la bonne stratégie** :
   - *Auto-jointure (Self-Join)* : Pour comparer des lignes d'une même table entre elles (ex: hiérarchies, comparaisons temporelles).
   - *Sous-requête corrélée* : Lorsque le calcul d'une ligne dépend des valeurs d'autres lignes de la même table (souvent évaluée ligne par ligne).
   - *CTE (`WITH ... AS`)* : Indispensable pour la lisibilité, la modularité et pour éviter l'imbrication excessive de sous-requêtes (notamment lors de calculs d'agrégats successifs ou de fenêtrage).
3. **Traiter les cas limites (valeurs NULL, doublons)** : Utiliser `DISTINCT`, `GROUP BY` avec `HAVING`, ou des clauses de gestion des valeurs nulles si nécessaire.

---

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé type :** 
*On considère le schéma relationnel suivant :*
*   `Employe (id_emp, nom, salaire, id_dept, id_manager)`
*   `Departement (id_dept, nom_dept, budget)`
*   *Écrire une requête SQL optimisée utilisant une expression de table commune (CTE) pour afficher les noms des employés dont le salaire est strictement supérieur au salaire moyen de leur propre département.*

**Rédaction modèle (Barème /20) :**

*   **Analyse de la structure et choix de la CTE (5/20) :**
    Pour comparer le salaire d'un employé à la moyenne de son département, nous devons d'abord calculer, pour chaque département, son salaire moyen. Une Expression de Table Commune (`WITH`) est idéale pour isoler cette vue agrégée intermédiaire.

*   **Rédaction de la requête SQL (10/20) :**
```sql
WITH SalaireMoyenDept AS (
    SELECT id_dept, AVG(salaire) AS moyenne_dept
    FROM Employe
    GROUP BY id_dept
)
SELECT e.nom
FROM Employe e
JOIN SalaireMoyenDept s ON e.id_dept = s.id_dept
WHERE e.salaire > s.moyenne_dept;
```

*   **Justification de l'optimisation et robustesse (5/20) :**
    *   *Performance* : L'utilisation d'une CTE évite d'évaluer une sous-requête corrélée à chaque itération pour chaque ligne de la table `Employe`, ce qui réduirait les performances en $\mathcal{O}(N^2)$. Ici, l'agrégation est calculée en une seule passe ($\mathcal{O}(N)$), puis jointe efficacement via l'index implicite sur `id_dept`.
    *   *Gestion des NULL* : La jointure interne (`JOIN`) exclut automatiquement les employés n'ayant pas de département (`id_dept IS NULL`), ce qui est cohérent puisque le salaire moyen d'un département inexistant n'est pas définissable dans ce contexte.

---

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
*   **Utilisation abusive de sous-requêtes corrélées non optimisées** : Écrire des requêtes avec des `IN` ou des comparaisons scalaires répétées qui s'avèrent désastreuses en termes de complexité pour de grands volumes de données.
*   **Mauvaise maîtrise de la clause `GROUP BY`** : Oublier d'inclure dans le `GROUP BY` toutes les colonnes non agrégées sélectionnées dans le `SELECT` (erreur de syntaxe directe sanctionnée par les moteurs SQL et les jurys).
*   **Confusion entre `WHERE` et `HAVING`** : Filtrer des fonctions d'agrégation (comme `AVG()` ou `SUM()`) dans la clause `WHERE` au lieu de la clause `HAVING`.