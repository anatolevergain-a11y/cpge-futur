---
title: 'Cours : Python et algorithmique'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Python et Algorithmique (CPGE BCPST 1ère année)

## 1. Introduction et rappels de syntaxe

Le langage Python est le langage support retenu pour le programme d'informatique en classe préparatoire BCPST. Il est impératif d'en maîtriser la syntaxe de base, le typage (dynamique mais rigoureux) ainsi que la structuration des données.

### 1.1. Les types de base et opérations
* **Booléens** : `True`, `False`. Opérateurs logiques : `and`, `or`, `not`.
* **Entiers (`int`)** et **Flottants (`float`)**. Attention aux arrondis de représentation en machine (norme IEEE 754).
* **Chaînes de caractères (`str`)** : immuables.

### 1.2. Structures de contrôle
* **Conditionnelles** :
  ```python
  if condition1:
      # bloc 1
  elif condition2:
      # bloc 2
  else:
      # bloc 3
  ```
* **Boucles borningées (`for`)** : Itération sur un itérable (souvent un range).
  ```python
  for i in range(n):  # de 0 à n-1
      # instructions
  ```
* **Boucles non bornées (`while`)** :
  ```python
  while condition:
      # instructions
  ```

---

## 2. Structures de données usuelles

En BCPST, l'utilisation optimale des structures de données est évaluée lors des colles et des épreuves pratiques.

### 2.1. Les listes (`list`)
Tableaux dynamiques redimensionnables.
* Accès par indice : $O(1)$.
* Ajout en fin (`append`) : $O(1)$ amorti.
* Insertion ou suppression en début/milieu (`insert`, `pop(0)`) : $O(n)$.

### 2.2. Les dictionnaires (`dict`) et ensembles (`set`)
Basés sur des tables de hachage.
* Recherche, ajout, suppression dans un dictionnaire ou un ensemble : complexité en $O(1)$ en moyenne.

---

## 3. Complexité algorithmique

L'évaluation de la complexité d'un algorithme permet de quantifier l'utilisation des ressources (temps et mémoire) en fonction de la taille $n$ des données d'entrée.

### 3.1. Définitions (Notations de Landau)
* **Complexité temporelle** : Nombre d'opérations élémentaires exécutées en fonction de $n$.
* On utilise principalement les notations :
  * $O(g(n))$ : majoration asymptotique ($f(n) \le C \cdot g(n)$ pour $n$ grand).
  * $\theta(g(n))$ : encodage asymptotique strict.

### 3.2. Exemples classiques
1. **Recherche séquentielle dans une liste non triée** :
   * Pire des cas : parcourir tous les éléments $\implies O(n)$.
2. **Recherche dichotomique dans une liste triée** :
   * À chaque étape, l'espace de recherche est divisé par $2$.
   * Nombre d'étapes $k$ tel que $\frac{n}{2^k} = 1 \implies k = \log_2(n)$.
   * Complexité : $O(\ln(n))$.

---

## 4. Algorithmique fondamentale

### 4.1. Algorithmes de tri
Les tris comparatifs usuels au programme :
* **Tri par sélection** : On cherche le minimum, on l'échange avec le premier, etc.
  * Complexité temporelle : $\Theta(n^2)$ dans tous les cas.
* **Tri par insertion** : On insère chaque élément à sa place dans le sous-tableau déjà trié.
  * Complexité temporelle : $O(n^2)$ au pire, mais $O(n)$ au meilleur des cas (liste déjà triée).

### 4.2. Diviser pour régner (Divide and Conquer)
Paradigme consistant à :
1. **Diviser** le problème en sous-problèmes de plus petite taille.
2. **Régner** en résolvant ces sous-problèmes récursivement.
3. **Combiner** les solutions pour obtenir la solution du problème initial.

*Exemple type : Le tri fusion (Merge Sort)*
* Complexité : $O(n \ln(n))$ garantie au pire des cas.

---

## 5. Programmation impérative vs Récursivité

Une fonction récursive est une fonction qui s'appelle elle-même. Elle doit impérativement comporter :
1. Un **cas de base** (condition d'arrêt) pour éviter une récursion infinie (et l'erreur `RecursionError`).
2. Une **progression vers le cas de base**.

*Exemple fondamental : Le calcul de la factorielle*
```python
def factorielle(n: int) -> int:
    """Calcule n! de manière récursive."""
    # Cas de base
    if n == 0 or n == 1:
        return 1
    # Appel récursif
    return n * factorielle(n - 1)
```

La complexité en espace d'une fonction récursive linéaire est en $O(n)$ en raison de l'empilement des contextes d'exécution dans la pile d'appels (*call stack*).