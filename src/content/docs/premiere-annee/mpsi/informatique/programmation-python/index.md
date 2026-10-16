---
title: 'Cours : Programmation en Python'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Programmation en Python (MPSI)

**Cadre réglementaire :** Le langage utilisé en CPGE est **Python 3**. La rigueur formelle est exigée tant dans la conception des algorithmes que dans leur implémentation. Cette fiche dresse un panorama exhaustif des notions indispensables au programme de MPSI.

---

## 1. Modèle d'évaluation, Types et Structures de Données

### A. Types de base et immutabilité
Python manipule des objets typés dynamiquement mais fortement.
* **Types scalaires usuels :** `int` (arithmétique à précision arbitraire), `float` (flottants IEEE 754), `bool`, `NoneType`.
* **Immutabilité vs Mutabilité :** Un objet est *mutable* si son contenu peut être modifié après sa création, *immutable* sinon.
  * *Immutables :* `int`, `float`, `bool`, `str`, `tuple`, `frozenset`.
  * *Mutables :* `list`, `dict`, `set`.

### B. Structures de données fondamentales
* **P-uplets (`tuple`) :** Séquences immutables. Déclaration : `t = (1, 2, "a")`.
* **Listes (`list`) :** Tableaux dynamiques mutables. Déclaration : `L = [1, 2, 3]`.
* **Dictionnaires (`dict`) :** Tables de hachage associant des clés uniques (immutables) à des valeurs. Déclaration : `D = {"cle": valeur}`.
* **Ensembles (`set`) :** Implémentation mathématique d'ensembles (éléments uniques, non ordonnés, hachables).

> **Définition (Compréhension de liste) :** 
> La syntaxe par compréhension permet de définir des listes selon un formalisme mathématique proche de la notation $\{\mathcal{F}(x) \mid x \in E \land \mathcal{P}(x)\}$.
> ```python
> L = [F(x) for x in E if P(x)]
> ```

---

## 2. Complexité et Analyse des Algorithmes

### A. Définitions
Soit $n$ la taille de l'entrée d'un algorithme.
* **Complexité en temps $T(n)$ :** Nombre d'opérations élémentaires exécutées en fonction de $n$.
* **Complexité en espace $S(n)$ :** Quantité maximale de mémoire vive (auxiliaire) consommée lors de l'exécution.

### B. Complexités usuelles en Python
Il est impératif de connaître la complexité des opérations primitives sur les structures Python :

| Structure / Opération | Code Python | Complexité Temporelle (Pire des cas) | Complexité en Espace |
| :--- | :--- | :--- | :--- |
| **Liste** : Accès par indice | `L[i]` | $\mathcal{O}(1)$ | $\mathcal{O}(1)$ |
| **Liste** : Ajout en fin | `L.append(v)` | $\mathcal{O}(1)$ (amortie) | $\mathcal{O}(1)$ |
| **Liste** : Insertion/Suppr. début | `L.insert(0, v)` / `L.pop(0)` | $\mathcal{O}(n)$ | $\mathcal{O}(1)$ |
| **Liste** : Recherche d'élément | `v in L` | $\mathcal{O}(n)$ | $\mathcal{O}(1)$ |
| **Dictionnaire** : Recherche/Insertion | `d[k]` / `d[k] = v` | $\mathcal{O}(1)$ en moyenne ($\mathcal{O}(n)$ au pire) | $\mathcal{O}(1)$ |
| **Tranche (Slicing)** | `L[i:j]` | $\mathcal{O}(j - i)$ | $\mathcal{O}(j - i)$ |

---

## 3. Fonctions, Portée des Variables et Effets de Bord

### A. Passage des arguments
En Python, le passage des arguments s'effectue par **assignation** (souvent qualifié abusivement de *pass-by-object-reference*).
* Si l'objet passé est **immutable**, toute modification locale à l'intérieur de la fonction n'affecte pas l'appelant.
* Si l'objet est **mutable**, une modification *in situ* (ex: `L.append()`, `L[0] = x`) se répercute sur l'objet initial. En revanche, une réaffectation du paramètre (ex: `L = []`) n'a aucun impact hors de la fonction.

### B. Portée des variables (Règle LEGB)
Python résout les noms selon l'ordre suivant :
1. **L**ocal : Variables définies à l'intérieur de la fonction courante.
2. **E**nclosing : Fonctions englobantes (closures).
3. **G**lobal : Variables définies au niveau du module (script).
4. **B**uilt-in : Noms pré-définis par Python (`len`, `range`, etc.).

---

## 4. Programmation Impérative et Récursivité

### A. Invariants de boucle
> **Méthode :** Pour prouver la correction d'une boucle `while`, on doit identifier un **invariant de boucle** $\mathcal{I}$ vérifiant trois propriétés :
> 1. **Initialisation :** $\mathcal{I}$ est vrai avant la première itération.
> 2. **Conservation :** Si $\mathcal{I}$ est vrai et que la condition de boucle est vérifiée avant une itération, alors $\mathcal{I}$ est vrai après cette itération.
> 3. **Terminaison :** Si la boucle se termine, l'invariant couplé à la négation de la condition garantit la post-condition (exactitude partielle), et un variant de boucle assure la terminaison.

### B. Récursivité
Une fonction récursive doit comporter :
1. Un ou plusieurs **cas de base** (conditions d'arrêt).
2. Un **cas récursif** où le problème est ramené à des instances plus petites, convergeant strictement vers le cas de base (mesuré par un variant de récursion).

> **Piège (Récursion excessive) :** Python limite la profondeur de répile d'appels (par défaut 1000, consultable via `sys.getrecursionlimit()`). Une récursion non terminale trop profonde lève une exception `RecursionError`.

---

## 5. Algorithmique Fondamentale (Programme de MPSI)

### A. Recherche et Tri
* **Recherche dichotomique** dans un tableau trié : complexité $\mathcal{O}(\ln(n))$.
* **Tri par sélection / insertion / fusion / rapide :** Maîtriser l'écriture itérative et récursive, ainsi que leurs complexités (Quadratique $\mathcal{O}(n^2)$ au pire pour les trois premiers, $\mathcal{O}(n \ln n)$ en moyenne pour le tri fusion et rapide).

### B. Diviser pour régner et Programmation dynamique
* **Diviser pour régner :** Décomposer un problème en sous-problèmes indépendants, résoudre récursivement, puis combiner (ex: Tri fusion).
* **Programmation dynamique :** Résolution d'un problème par sous-structure optimale avec mémorisation (mémoïsation ascendante ou descendante) pour éviter les recalculs redondants (ex: calcul des nombres de Fibonacci, distance d'édition).

---

## 6. Pièges et Erreurs Classiques en Python

1. **Effet de bord sur les valeurs par défaut mutables :**
   ```python
   def f(x, L=[]):  # MAUVAIS : la liste L est évaluée une seule fois à la définition
       L.append(x)
       return L
   # Utiliser plutôt :
   def f(x, L=None):
       if L is None:
           L = []
       L.append(x)
       return L
   ```

2. **Copie superficielle (*Shallow copy*) vs Copie profonde (*Deep copy*) :**
   * `L2 = L1` : Copie de référence (alias).
   * `L2 = list(L1)` ou `L2 = L1[:]` ou `L2 = copy.copy(L1)` : Copie superficielle (les sous-objets imbriqués restent partagés).
   * `copy.deepcopy(L1)` : Copie récursive intégrale.

3. **Modification d'un conteneur en cours d'itération :**
   Il ne faut jamais itérer directement sur un itérable mutable tout en le modifiant (ajout/suppression d'éléments). Préférer itérer sur une copie ou utiliser une construction par compréhension.