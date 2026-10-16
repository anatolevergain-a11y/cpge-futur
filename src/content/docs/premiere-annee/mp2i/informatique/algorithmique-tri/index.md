---
title: 'Cours : Algorithmique et Tris'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Algorithmique et Tris (MP2I)
Niveau: ** Première année (MP2I)  
**Matière :** Informatique  
Auteur: ** Professeur de CPGE  

---

## 1. Introduction et Complexité

### Définitions fondamentales
Soit $E$ un ensemble d'objets (souvent des nombres ou des enregistrements) muni d'une relation d'ordre total $\le$. Trier un tableau $T$ de taille $N$ consiste à permuter ses éléments de manière à ce que :
$$\forall (i, j) \in \llbracket 0, N-1 \rrbracket^2, \quad i \le j \implies T[i] \le T[j]$$

### Mesure de la complexité
*   **Complexité temporelle au pire ($O$) :** Majoration du nombre d'opérations élémentaires en fonction de la taille $N$ des données.
*   **Complexité temporelle en moyenne ($\Theta$) :** Comportement asymptotique pour une entrée aléatoire.
*   **Complexité spatiale :** Quantité de mémoire additionnelle nécessaire (en dehors du tableau d'entrée). Un tri est dit **en place** si sa complexité spatiale est $O(1)$.
*   **Stabilité :** Un tri est dit **stable** s'il préserve l'ordre initial des éléments égaux.

---

## 2. Tris itératifs quadratiques

Ces tris ont une complexité au pire en $\mathcal{O}(N^2)$. Ils sont inefficaces pour de grandes listes mais utiles pour de très petits tableaux ou pour leur simplicité.

### A. Tri par sélection
Principe: ** On recherche le plus petit élément du tableau non trié et on l'échange avec le premier élément de cette sous-partie. On avance d'un cran.

```python
def tri_selection(T: list) -> None:
    n = len(T)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if T[j] < T[min_idx]:
                min_idx = j
        if min_idx != i:
            T[i], T[min_idx] = T[min_idx], T[i]
```

*   **Complexité temporelle :** $\Theta(N^2)$ dans tous les cas (le nombre de comparaisons est $\sum_{i=1}^{N-1} (N-i) = \frac{N(N-1)}{2}$).
*   **Complexité spatiale :** $\mathcal{O}(1)$ (tri en place).
*   **Stabilité :** Non stable (les échanges à grande distance rompent l'ordre des égaux).

### B. Tri par insertion
Principe: ** On considère que le sous-tableau $T[0 \dots i-1]$ est trié. On insère l'élément $T[i]$ à sa place dans ce sous-tableau en décalant les éléments plus grands.

```python
def tri_insertion(T: list) -> None:
    n = len(T)
    for i in range(1, n):
        val = T[i]
        j = i
        while j > 0 and T[j - 1] > val:
            T[j] = T[j - 1]
            j -= 1
        T[j] = val
```

*   **Complexité temporelle :** 
    *   Meilleur des cas (tableau déjà trié) : $\mathcal{O}(N)$.
    *   Pire des cas (tableau trié à l'envers) : $\mathcal{O}(N^2)$.
*   **Complexité spatiale :** $\mathcal{O}(1)$ (tri en place).
*   **Stabilité :** **Stable**.

---

## 3. Tris récursifs optimaux ($\mathcal{O}(N \log N)$)

### A. Tri fusion (Merge Sort)
Principe: ** Basé sur le paradigma "Diviser pour régner". On coupe le tableau en deux, on trie récursivement les deux moitiés, puis on les fusionne en temps linéaire.

```python
def fusion(gauche: list, droite: list) -> list:
    res = []
    i = j = 0
    while i < len(gauche) and j < len(droite):
        if gauche[i] <= droite[j]:
            res.append(gauche[i])
            i += 1
        else:
            res.append(droite[j])
            j += 1
    res.extend(gauche[i:])
    res.extend(droite[j:])
    return res

def tri_fusion(T: list) -> list:
    if len(T) <= 1:
        return T
    mid = len(T) // 2
    gauche = tri_fusion(T[:mid])
    droite = tri_fusion(T[mid:])
    return fusion(gauche, droite)
```

#### Théorème (Complexité du Tri Fusion)
Le nombre de comparaisons $C(N)$ effectué par le tri fusion vérifie la relation de récurrence :
$$C(N) = 2C\left(\frac{N}{2}\right) + \mathcal{O}(N)$$
Par le **théorème maître**, on en déduit que $C(N) = \Theta(N \log N)$.

*   **Complexité spatiale :** $\mathcal{O}(N)$ (nécessite des tableaux auxiliaires pour la fusion, sauf implémentation in-place très complexe).
*   **Stabilité :** **Stable** (grâce à l'utilisation de $\le$ lors de la fusion).

---

### B. Tri rapide (Quicksort)
Principe: ** On choisit un élément appelé *pivot*. On partitionne le tableau de part et d'autre du pivot (les $\le$ à gauche, les $>$ à droite). On trie récursivement les deux sous-tableaux.

```python
def partition(T: list, debut: int, fin: int) -> int:
    pivot = T[fin]
    i = debut - 1
    for j in range(debut, fin):
        if T[j] <= pivot:
            i += 1
            T[i], T[j] = T[j], T[i]
    T[i + 1], T[fin] = T[fin], T[i + 1]
    return i + 1

def _tri_rapide(T: list, debut: int, fin: int) -> None:
    if debut < fin:
        q = partition(T, debut, fin)
        _tri_rapide(T, debut, q - 1)
        _tri_rapide(T, q + 1, fin)

def tri_rapide(T: list) -> None:
    _tri_rapide(T, 0, len(T) - 1)
```

*   **Complexité temporelle :**
    *   Moyenne : $\Theta(N \log N)$.
    *   Pire des cas (mauvais choix récurrent du pivot, ex. tableau déjà trié) : $\mathcal{O}(N^2)$.
*   **Complexité spatiale :** $\mathcal{O}(\log N)$ due à la pile d'appels récursifs (dans le cas équilibré).
*   **Stabilité :** Non stable.

---

## 4. Borne inframétrique des tris par comparaison

### Théorème
Tout algorithme de tri fondé sur des comparaisons d'éléments nécessite au pire **$\Omega(N \log N)$** comparaisons.

> **Démonstration (Esquisse) :**
> Un algorithme par comparaison effectue des choix binaires (inférieur ou supérieur). Il peut être modélisé par un arbre de décision comportant $N!$ feuilles (car il y a $N!$ permutations possibles d'un tableau de taille $N$, et chacune doit pouvoir être obtenue). 
> Un arbre binaire de hauteur $h$ possède au plus $2^h$ feuilles. On a donc :
> $$N! \le 2^h \implies h \ge \log_2(N!)$$
> Par la formule de Stirling ($\ln(N!) \approx N \log N - N$), on obtient $h = \Omega(N \log N)$.

---

## 5. Méthodes et Pièges à éviter

1.  **Attention à la récursivité terminale :** Le tri rapide n'est pas naturellement récursif terminal. En MP2I, on veille à optimiser la pile en appelant d'abord la récursion sur le plus petit sous-tableau.
2.  **Stabilité et types complexes :** Lorsque l'on trie des structures (ex: des tuples `(nom, note)`), utiliser un tri stable (comme le tri fusion ou insertion) est indispensable si l'on souhaite trier successivement selon deux critères (ex: trier par nom, puis par note à l'aide d'un tri stable garantit que les notes égales conservent l'ordre alphabétique des noms).
3.  **Le piège des copies en Python :** `T.slice()` ou `T[:mid]` créent des copies en $\mathcal{O}(K)$, ce qui peut impacter lourdement la complexité spatiale et temporelle si l'on n'y prend pas garde.