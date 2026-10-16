---
title: 'Cours : Algorithmique et Programmation'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Algorithmique et Programmation (CPGE BCPST 1ère année)

---

## 1. Introduction et Fondamentaux

L'informatique en BCPST repose sur l'utilisation du langage **Python** (version $\ge 3.8$). Un algorithme est une suite finie et non ambigüe d'instructions permettant de résoudre un problème.

### Définition : Complexité algorithmique
Soit $n$ la taille des données d'entrée (par exemple, le nombre d'éléments d'une liste). La **complexité temporelle** $T(n)$ (resp. spatiale $S(n)$) représente le nombre d'opérations élémentaires (resp. l'espace mémoire) nécessaires à l'exécution de l'algorithme, exprimé à l'aide des notations de Landau ($\mathcal{O}, o, \sim$).

> **Rappel mathématique (Ordres de grandeur usuels) :**
> *   $\mathcal{O}(1)$ : Complexité constante.
> *   $\mathcal{O}(\log n)$ : Complexité logarithmique (ex: dichotomie).
> *   $\mathcal{O}(n)$ : Complexité linéaire (ex: parcours de liste).
> *   $\mathcal{O}(n \log n)$ : Complexité quasi-linéaire (ex: tri fusion).
> *   $\mathcal{O}(n^2)$ : Complexité quadratique (ex: tri par insertion).

---

## 2. Structures de Données usuelles en Python

### A. Les Listes (`list`)
*   Représentation dynamique en mémoire (tableau de pointeurs).
*   Accès par indice : $\mathcal{O}(1)$.
*   Ajout en fin de liste (`append`) : $\mathcal{O}(1)$ en moyenne.
*   Insertion ou suppression au début/milieu (`insert`, `pop(0)`) : $\mathcal{O}(n)$ car nécessite le décalage de tous les éléments suivants.

### B. Les Dictionnaires (`dict`)
*   Implémentation par table de hachage.
*   Recherche, insertion, suppression par clé : $\mathcal{O}(1)$ en moyenne.

---

## 3. Algorithmes de Tri

### A. Tri par sélection (Complexité $\mathcal{O}(n^2)$)
Recherche du minimum dans la sous-liste non triée et échange avec le premier élément.

```python
def tri_selection(T):
    n = len(T)
    for i in range(n - 1):
        mini = i
        for j in range(i + 1, n):
            if T[j] < T[mini]:
                mini = j
        if mini != i:
            T[i], T[mini] = T[mini], T[i]
    return T
```

### B. Tri par insertion (Complexité $\mathcal{O}(n^2)$, $\mathcal{O}(n)$ dans le meilleur des cas)
Insère chaque élément à sa place dans la sous-liste déjà triée située à gauche.

```python
def tri_insertion(T):
    for i in range(1, len(T)):
        val = T[i]
        j = i
        while j > 0 and T[j - 1] > val:
            T[j] = T[j - 1]
            j -= 1
        T[j] = val
    return T
```

---

## 4. Recherche et Diviser pour Régner

### A. Recherche dichotomique (Tableau trié)
Principe : Diviser par deux l'espace de recherche à chaque étape.

```python
def dichotomie(T, x):
    gauche, droite = 0, len(T) - 1
    while gauche <= droite:
        milieu = (gauche + droite) // 2
        if T[milieu] == x:
            return milieu
        elif T[milieu] < x:
            gauche = milieu + 1
        else:
            droite = milieu - 1
    return None
```
> **Théorème :** La complexité temporelle de la recherche dichotomique est $\mathcal{O}(\log n)$.

---

## 5. Méthodes et Bonnes Pratiques en BCPST

1.  **Documentation et Typage :** Toujours documenter ses fonctions via des *docstrings* et utiliser des assertions (`assert`) pour valider les préconditions.
2.  **Invariants de boucle :** Pour prouver la correction d'un algorithme itératif, il faut formuler un invariant (propriété vraie avant et après chaque itération) et vérifier son initialisation, sa conservation et sa terminaison.
3.  **Récursivité :** Toute fonction récursive doit posséder un **cas de base** (condition d'arrêt) et une **progression vers le cas de base** (décroissance d'un paramètre entier par exemple).

---

## 6. Pièges à Éviter (Avertissements du Professorat)

*   **Attention aux effets de bord (Alias) :** En Python, l'affectation d'une liste à une autre (`L2 = L1`) crée un simple alias. Toute modification de `L2` modifie `L1`. Préférer la copie superficielle (`L2 = list(L1)` ou `L2 = L1[:]`).
*   **Complexité cachée :** Utiliser l'opérateur `in` sur une liste (complexité $\mathcal{O}(n)$) dans une boucle de parcours (complexité $\mathcal{O}(n)$) conduit à un algorithme en $\mathcal{O}(n^2)$. Pour des tests d'appartenance fréquents, utiliser un `set` ou un `dict` ($\mathcal{O}(1)$).
*   **Terminaison :** Veiller à ce que les boucles `while` disposent d'une condition d'arrêt strictement décroissante (variant de boucle) pour éviter les boucles infinies.