---
title: 'Cours : Algorithmique en Python'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Algorithmique en Python (MPSI)

**Préambule et exigences de rigueur en CPGE :** 
En première année de MPSI, l'informatique n'est pas seulement une science pratique, c'est une science exacte. L'utilisation du langage Python doit s'accompagner d'une rigueur mathématique irréprochable : typage implicite mais rigoureux, complexité algorithmique démontrée, et terminaison prouvée par des invariants ou des variants de boucle.

---

## 1. Complexité des algorithmes

### A. Définitions fondamentales

La complexité mesure le coût en ressources (temps ou espace mémoire) d'un algorithme en fonction de la taille $n$ des données d'entrée. En MPSI, on s'intéresse principalement à la complexité temporelle dans le pire des cas ($\text{O}$-grand) et en moyenne.

**Définition (Grand $\mathcal{O}$) :**
Soit $f$ et $g$ deux fonctions de $\mathbb{N}$ dans $\mathbb{R}__+$*. On dit que $f(n) = \mathcal{O}(g(n))$ s'il existe une constante réelle $M > 0$ et un entier $n_0 \in \mathbb{N}$ tels que :
$$\forall n \ge n_0, \quad f(n) \le M \cdot g(n)$$

**Définition (Classes de complexité usuelles) :**
*   $\mathcal{O}(1)$ : Constante
*   $\mathcal{O}(\ln(n))$ ou $\mathcal{O}(\log_2(n))$ : Logarithmique (ex: recherche dichotomique)
*   $\mathcal{O}(n)$ : Linéaire (ex: parcours de liste)
*   $\mathcal{O}(n \ln(n))$ : Quasi-linéaire (ex: tri fusion)
*   $\mathcal{O}(n^2)$ : Quadratique (ex: tri par sélection)
*   $\mathcal{O}(2^n)$ : Exponentielle

### B. Règles de calcul des complexités

*   **Séquence :** Si un bloc d'instructions de complexité $\mathcal{O}(f(n))$ est suivi d'un bloc de complexité $\mathcal{O}(g(n))$, la complexité totale est $\mathcal{O}(\max(f(n), g(n)))$.
*   **Boucle :** Si une boucle s'exécute $k(n)$ fois et que chaque itération coûte $\mathcal{O}(f(n))$, le coût total est $\mathcal{O}(k(n) \cdot f(n))$.

---

## 2. Structures de données de base en Python

### A. Tableaux (Listes Python)
En Python, le type `list` est implémenté sous forme de tableau dynamique de pointeurs.

*   Accès à un élément par indice `L[i]` : $\mathcal{O}(1)$
*   Ajout en fin de liste `L.append(x)` : $\mathcal{O}(1)$ *amorti*
*   Insertion ou suppression en début/milieu `L.insert(0, x)` : $\mathcal{O}(n)$ (déplacement de mémoire nécessaire)
*   Appartenance `x in L` : $\mathcal{O}(n)$ (parcours linéaire)

### B. Dictionnaires et Ensembles (`dict`, `set`)
Implémentés par tables de hachage.

*   Recherche, insertion, suppression (`d[key] = val`, `key in d`, `x in s`) : $\mathcal{O}(1)$ en *moyenne* (pire cas en $\mathcal{O}(n)$ en cas de collisions massives, très rare).

---

## 3. Correction et Terminaison

### A. Terminaison (Arrêt de l'algorithme)
Pour prouver qu'un algorithme (notamment une boucle `while`) se termine, on utilise un **variant de boucle**.

**Définition (Variant de boucle) :**
Un variant de boucle est une quantité entière $v$ telle que :
1. $v$ est à valeurs dans $\mathbb{N}$ (ou un ensemble bien fondé).
2. $v$ décroit strictement à chaque itération.
*Conséquence :* La boucle se termine nécessairement au bout d'un nombre fini d'itérations.

### B. Correction (Exactitude)
Pour prouver qu'un algorithme fait ce qu'on lui demande, on utilise un **invariant de boucle**.

**Définition (Invariant de boucle) :**
C'est une propriété logique $\mathcal{P}(k)$ telle que :
1. **Initialisation :** $\mathcal{P}(0)$ est vraie avant la première itération.
2. **Hérédité :** Si $\mathcal{P}(k)$ est vraie avant une itération, elle est encore vraie après.
3. **Terminaison :** À la fin de la boucle, l'invariant combiné à la condition d'arrêt permet de prouver le résultat final.

---

## 4. Algorithmes usuels et Méthodes

### A. Recherche dichotomique (Tableau trié)

**Méthode :** Diviser pour régner dans un tableau trié.

```python
def recherche_dichotomique(L, x):
    """
    Entrée : L (list) triée par ordre croissant, x (élément)
    Sortie : int, l'indice de x ou None
    """
    gauche, droite = 0, len(L) - 1
    # Variant : droite - gauche + 1
    while gauche <= droite:
        milieu = (gauche + droite) // 2
        if L[milieu] == x:
            return milieu
        elif L[milieu] < x:
            gauche = milieu + 1
        else:
            droite = milieu - 1
    return None
```
* **Complexité temporelle :** $\mathcal{O}(\log_2(n))$
* **Complexité spatiale :** $\mathcal{O}(1)$ (version<bos>1 itérative)

### B. Algorithmes de tri comparatifs

#### 1. Tri par sélection ($\mathcal{O}(n^2)$)
Recherche du minimum et échange avec le premier élément non trié.
```python
def tri_selection(L):
    n = len(L)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if L[j] < L[min_idx]:
                min_idx = j
        L[i], L[min_idx] = L[min_idx], L[i]
    return L
```

#### 2. Tri fusion ($\mathcal{O}(n \ln n)$)
Approche "Diviser pour régner".

```python
def fusion(L1, L2):
    i, j = 0, 0
    res = []
    while i < len(L1) and j < len(L2):
        if L1[i] <= L2[j]:
            res.append(L1[i])
            i += 1
        else:
            res.append(L2[j])
            j += 1
    return res + L1[i:] + L2[j:]

def tri_fusion(L):
    if len(L) <= 1:
        return L
    milieu = len(L) // 2
    gauche = tri_fusion(L[:milieu])
    droite = tri_fusion(L[milieu:])
    return fusion(gauche, droite)
```
* **Théorème (Complexité du tri fusion) :** Le nombre d'opérations $T(n)$ vérifie la relation de récurrence $T(n) = 2T(n/2) + \mathcal{O}(n)$, ce qui implique par le *Master Theorem* que $T(n) = \mathcal{O}(n \ln n)$.

---

## 5. Pièges à éviter (Warnings MPSI)

1. **Effet de bord sur les listes mutables :**
   En Python, passer une liste en argument d'une fonction transmet sa référence. Toute modification de la liste dans la fonction modifie la liste appelante.
   *Mauvaise pratique :* `def f(L): L.append(1); return L`
   *Bonne pratique :* Travailler sur une copie si nécessaire : `def f(L): L_copie = list(L); ...`

2. **La complexité cachée des méthodes de listes :**
   Utiliser `L.pop(0)` pour simuler une file (FIFO) dans une boucle de taille $n$ conduit à une complexité de $\mathcal{O}(n^2)$ et non $\mathcal{O}(n)$, car chaque suppression décale tous les éléments. *Alternative :* Utiliser `collections.deque`.

3. **Égalité de réels :**
   Ne jamais tester l'égalité stricte entre deux nombres flottants (`float`) en raison des erreurs d'arrondi de la norme IEEE 754. Utiliser un test de type `abs(a - b) < 1e-9`.

4. **Récursion non limitée :**
   Attention à la limite de récursion par défaut en Python (`sys.setrecursionlimit`). Tout algorithme récursif doit posséder un cas de base explicite et non ambigu.