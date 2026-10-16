---
title: 'Exercice 1 : Algorithmes de tri'
description: 'Problème d entraînement type concours.'
---

# Problème : Étude comparative et complexité des algorithmes de tri en Python

Ce problème propose d'étudier de manière rigoureuse plusieurs algorithmes de tri en Python, en mettant l'accent sur leur complexité algorithmique, leur stabilité, ainsi que sur les limites pratiques liées à l'architecture des machines et à l'implémentation du langage.

---

## Énoncé

Dans tout le problème, on s'intéresse au tri d'un tableau (représenté par une `list` en Python) de $n$ éléments appartenant à un ensemble muni d'un ordre total $\leqslant$. On suppose que la comparaison de deux éléments s'effectue en temps $\mathcal{O}(1)$. 

On rappelle qu'en Python, les objets de type `list` sont des tableaux dynamiques de pointeurs vers des objets en mémoire.

---

## Questions

### Partie I : Algorithmes itératifs et récursifs fondamentaux

1. **[Tri par insertion]** Écrire une fonction Python `tri_insertion(T)` qui trie le tableau `T` **en place** en utilisant l'algorithme du tri par insertion.
2. Déterminer la complexité en temps dans le pire des cas et dans le meilleur des cas de ce tri par insertion. Cet algorithme est-il *stable* ? (Justifier brièvement).
3. **[Tri fusion]** Rappeler le principe du tri fusion (diviser pour régner). Écrire une fonction `fusion(A, B)` qui fusionne deux listes triées `A` et `B` en une nouvelle liste triée, puis la fonction `tri_fusion(T)` qui renvoie une *nouvelle* liste triée.
4. Établir la relation de récurrence vérifiée par le nombre d'opérations $C(n)$ du tri fusion, puis en déduire par le théorème maître (ou par dépliement) sa complexité temporelle dans le pire des cas.

### Partie II : Analyse critique des limites du modèle

5. **[Limites de la ré recursion en Python]** Que se passe-t-il si l'on applique la fonction `tri_fusion` sur un tableau de taille $n = 10^7$ ? Quelle est la cause technique de cette limite en Python ?
6. **[Analyse de complexité spatiale et modèle machine]** 
   - Quelle est la complexité spatiale (mémoire additionnelle) de `tri_insertion` ? 
   - Quelle est celle de `tri_fusion` ? 
   - *Analyse critique :* Le modèle RAM (Random Access Machine) suppose que l'accès à n'importe quelle case mémoire coûte $\mathcal{O}(1)$. Discuter de la validité de cette hypothèse pour de très grands tableaux sur une architecture matérielle moderne (notion de cache CPU, défauts de cache).

---

## Pistes et Indications

- **Q1 :** Utiliser une boucle `while` interne pour faire "remonter" l'élément courant vers la gauche.
- **Q3 :** Pour la fusion, deux indices parcourant `A` et `B` simultanément suffisent.
- **Q5 :** Penser à la limite de profondeur de la pile d'appels (`sys.getrecursionlimit()`).
- **Q6 :** Considérer la localité des références en mémoire (principe de localité spatiale).

---

## Corrigé pas à pas

### Partie I

#### 1. Tri par insertion
```python
def tri_insertion(T):
    n = len(T)
    for i in range(1, n):
        cle = T[i]
        j = i - 1
        while j >= 0 and T[j] > cle:
            T[j + 1] = T[j]
            j -= 1
        T[j + 1] = cle
```

#### 2. Complexité et stabilité du tri par insertion
- **Meilleur des cas** (tableau déjà trié) : La condition `T[j] > cle` est immédiatement fausse. La boucle `while` ne s'exécute jamais. La complexité est en $\mathcal{O}(n)$.
- **Pire des cas** (tableau trié en ordre inverse) : Pour chaque $i$, on parcourt tous les éléments précédents. Le nombre d'opérations est $\sum_{i=1}^{n-1} i = \frac{n(n-1)}{2}$, soit une complexité en $\mathcal{O}(n^2)$.
- **Stabilité :** L'algorithme est **stable**. La condition `T[j] > cle` (avec un $\text{ strictement supérieur}$) fait qu'on ne décale pas les éléments égaux, préservant ainsi l'ordre initial des éléments équivalents.

#### 3. Tri fusion
```python
def fusion(A, B):
    res = []
    i, j = 0, 0
    na, nb = len(A), len(B)
    while i < na and j < nb:
        if A[i] <= B[j]:
            res.append(A[i])
            i += 1
        else:
            res.append(B[j])
            j += 1
    res.extend(A[i:])
    res.extend(B[j:])
    return res

def tri_fusion(T):
    n = len(T)
    if n <= 1:
        return list(T)
    milieu = n // 2
    gauche = tri_fusion(T[:milieu])
    droite = tri_fusion(T[milieu:])
    return fusion(gauche, droite)
```

#### 4. Complexité du tri fusion
La relation de récurrence pour le nombre d'opérations est :
$$C(n) = 2C\left(\frac{n}{2}\right) + \mathcal{O}(n)$$
Par application du théorème maître (cas où $a=2, b=2, d=1$, donc $a = b^d$), la complexité temporelle est dans $\mathcal{O}(n \log n)$ dans tous les cas.

---

### Partie II : Analyse critique et limites du modèle

#### 5. Limites de la récursion en Python
Pour $n = 10^7$, l'appel à `tri_fusion` va engendrer une profondeur de récursion de l'ordre de $\log_2(10^7) \approx 24$ appels. Bien que cette profondeur semble faible, la création de sous-listes par slicing (`T[:milieu]`) à chaque étape duplique les références en mémoire et consomme énormément d'espace. 

Plus fondamentalement, si l'on concevait un tri récursif naïf sans limite de taille de données mais avec une profondeur de pile importante, Python lèverait une exception de type `RecursionError: maximum recursion depth exceeded`. Par défaut, la limite de la pile d'appels est fixée à $1000$ en Python pour éviter les plantages de la machine par débordement de pile (*stack overflow*).

#### 6. Analyse de complexité spatiale et modèle machine
- **Complexité spatiale de `tri_insertion` :** $\mathcal{O}(1)$ en mémoire auxiliaire, car le tri est effectué en place.
- **Complexité spatiale de `tri_fusion` :** $\mathcal{O}(n \log n)$ ou $\mathcal{O}(n)$ selon l'optimisation, car les fusions successives et les tranches (*slices*) recréent de nouvelles listes allouées en mémoire.

*Analyse critique des limites du modèle RAM :*
Le modèle RAM classique postule un coût uniforme $\mathcal{O}(1)$ pour l'accès à n'importe quelle position mémoire. En pratique, sur les architectures matérielles modernes, ce modèle est mis en défaut par la **hiérarchie mémoire** (registres, caches L1/L2/L3, RAM). 
- Un algorithme comme le tri fusion réalise des accès mémoire dispersés lors de la fusion de grands tableaux, ce qui provoque de nombreux **défauts de cache** (*cache misses*), ralentissant considérablement l'exécution par rapport au coût théorique.
- À l'inverse, le tri par insertion, bien que $\mathcal{O}(n^2)$, possède une excellente **localité spatiale** (les éléments accédés sont contigus en mémoire), ce qui le rend paradoxalement plus rapide que le tri fusion pour des tableaux de très petite taille (c'est pourquoi les bibliothèques standard comme Timsort combinent tri par fusion et tri par insertion pour les petits sous-tableaux).