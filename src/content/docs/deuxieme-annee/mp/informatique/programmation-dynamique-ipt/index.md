---
title: "Programmation Dynamique & Optimisation Algorithmique"
description: "Méthodologie détaillée, rédactions modèles et conseils des jurys de concours Mines-Ponts / Centrale / X-ENS."
sidebar:
  badge:
    text: "Méthode Concours"
    variant: "caution"
---

## 🎯 Analyse des attentes et critères d'évaluation des jurys

Dans les concours de la filière MP (Mines-Ponts, Centrale-Supélec, X-ENS), les épreuves d'informatique accordent une importance capitale à la rigueur de la modélisation mathématique et à l'efficacité des algorithmes. La programmation dynamique (PD) n'est pas seulement perçue comme une technique de codage, mais comme un pont entre la récursivité mathématique et l'optimisation de complexité.

Les correcteurs et les membres de jurys attendent des candidats :
1. **Une caractérisation formelle rigoureuse** : Avant d'écrire la moindre ligne de code, le candidat doit définir clairement l'espace des états, l'équation de récurrence (ou relation de Bellman) et les conditions initiales.
2. **Une justification de la complexité** : L'analyse de la complexité en temps et en espace doit être systématique. Le passage d'une complexité exponentielle à une complexité polynomiale (souvent linéaire ou quadratique) doit être explicitement commenté.
3. **Une maîtrise des choix d'implémentation** : Distinguer l'approche descendante avec mémoïsation (*top-down*) de l'approche ascendante (*bottom-up*), en sachant justifier le choix de l'une ou l'autre selon la structure des dépendances et les risques de récursion excessive (limite de la pile d'appels en Python).
4. **La propreté du code Python** : Utilisation adéquate des tableaux dynamiques (`list` ou modules comme `numpy` si autorisé), respect de la typage et absence d'effets de bord non maîtrisés.

---

## 📐 Rappels théoriques & Démonstrations incontournables

La programmation dynamique s'applique aux problèmes d'optimisation vérifiant deux propriétés fondamentales :

1. **La sous-structure optimale** : Une solution optimale du problème global se compose de solutions optimales des sous-problèmes. Si l'on note $V(i)$ la valeur optimale pour le sous-problème $i$, on cherche une relation de la forme :
   $$V(i) = \min_{j \in \text{Pred}(i)} \left( V(j) + \text{cout}(j, i) \right)$$

2. **Le chevauchement des sous-problèmes** : Un algorithme récursif naïf recalculerait plusieurs fois les mêmes états. La programmation dynamique stocke ces résultats dans une structure de données (tableau ou dictionnaire) pour garantir un temps de calcul polynomial.

---

### 📌 Question / Problématique classique 1 : Sous-structure optimale et chevauchement des sous-problèmes

#### 💡 Méthode de rédaction canonique
Pour répondre à ce type de question, la rédaction doit suivre un plan invariable :
1. **Définition de l'état** : Introduire rigoureusement la variable d'état $\text{val}(i)$ ou $\text{val}(i, j)$ en précisant sa signification en français.
2. **Établissement de la relation de récurrence** : Démontrer l'équation de Bellman en prouvant par l'absurde ou par disjonction de cas que la sous-structure optimale est vérifiée.
3. **Cas de base** : Fixer les conditions initiales (frontières du tableau).

#### 📋 Exercice type concours résolu pas à pas
*Énoncé inspiré Mines-Ponts : On considère un escalier de $n$ marches. À chaque étape, on peut monter de $1$, $2$ ou $3$ marches. On cherche le nombre de chemins distincts pour atteindre le sommet.*

**Rédaction type :**
Soit $C(n)$ le nombre de chemins distincts pour atteindre la marche $n$. 
Pour atteindre la marche $n$ (avec $n \ge 3$), on a nécessairement provenu de la marche $n-1$, $n-2$ ou $n-3$. Les ensembles de chemins menant à ces trois marches sont disjoints. Par conséquent, d'après le principe fondamental du dénombrement, on obtient la relation de récurrence suivante :
$$C(n) = C(n-1) + C(n-2) + C(n-3)$$
Les cas de base sont :
- $C(0) = 1$ (un seul chemin : ne rien faire)
- $C(1) = 1$ (un seul pas de $1$)
- $C(2) = 2$ ($1+1$ ou $2$)

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- **Oubli des cas limites** : Ne pas définir correctement les indices $0$ ou $1$ entraîne des erreurs de type `IndexError` lors de l'implémentation.
- **Absence de démonstration** : Affirmer la formule sans expliquer pourquoi les sous-problèmes sont indépendants et couvrent toutes les possibilités est lourdement sanctionné.

---

### 📌 Question / Problématique classique 2 : Implémentation ascendante (bottom-up) vs mémoïsation

#### 💡 Méthode de rédaction canonique
Le jury demande souvent de comparer ou d'implémenter les deux approches :
- **Mémoïsation (*Top-Down*)** : Fonction récursive avec un dictionnaire ou un tableau de cache (souvent initialisé à `None` ou `-1`). Avantage : ne calcule que les états strictement nécessaires. Inconvénient : risque de dépassement de pile (*recursion depth exceeded*).
- **Ascendante (*Bottom-Up*)** : Boucles iteratives remplissant un tableau de bas en haut. Avantage : pas de risque de récursion, meilleure localité cache. Inconvénient : calcule parfois des états inutiles.

#### 📋 Exercice type concours résolu pas à pas
*Implémentation des deux versions pour le calcul des nombres de Fibonacci.*

```python
def fibo_memo(n: int, memo: dict | None = None) -> int:
    """Calcule le n-ieme nombre de Fibonacci par memoisation."""
    if memo is None:
        memo = {}
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibo_memo(n - 1, memo) + fibo_memo(n - 2, memo)
    return memo[n]

def fibo_bottom_up(n: int) -> int:
    """Calcule le n-ieme nombre de Fibonacci de maniere ascendante."""
    if n <= 1:
        return n
    t = [0] * (n + 1)
    t[1] = 1
    for i in range(2, n + 1):
        t[i] = t[i - 1] + t[i - 2]
    return t[n]
```

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- **Mutables par défaut en Python** : Utiliser `memo: dict = {}` comme argument par défaut est une erreur classique relevée par les correcteurs (effet de bord persistant entre les appels de fonctions). Préférer `memo: dict | None = None`.
- **Complexité spatiale non optimisée** : Ne pas voir qu'un tableau de taille $n$ peut souvent être réduit à une ou deux variables si l'on a uniquement besoin des états précédents (par exemple, pour Fibonacci, garder seulement `a` et `b` ramène l'espace à $\mathcal{O}(1)$).

---

### 📌 Question / Problématique classique 3 : Application au problème du sac à dos et à la distance d'édition

#### 💡 Méthode de rédaction canonique
Ces deux classiques des concours nécessitent la construction d'une matrice (programmation dynamique à deux dimensions).
1. Définir l'état $M(i, j)$ : par exemple, la valeur maximale avec les $i$ premiers objets et une capacité $j$.
2. Écrire la double boucle d'initialisation et de remplissage.
3. Extraire le résultat final et, si demandé, reconstruire la solution (le chemin ou les objets choisis) en remontant la matrice (*backtracking*).

#### 📋 Exercice type concours résolu pas à pas
*Problème de la distance d'édition (Levenshtein) entre deux chaînes $A$ et $B$ de longueurs respectives $n$ et $m$.*

**Relation de récurrence :**
Soit $D(i, j)$ la distance d'édition entre les préfixes $A[0 \dots i-1]$ et $B[0 \dots j-1]$.
$$D(i, j) = \begin{cases} 
\max(i, j) & \text{si } \min(i, j) = 0 \\
D(i-1, j-1) & \text{si } A[i-1] == B[j-1] \\
1 + \min \begin{cases} D(i-1, j) \\ D(i, j-1) \\ D(i-1, j-1) \end{cases} & \text{sinon}
\end{cases}$$

**Implémentation Python rigoureuse :**
```python
def distance_edition(a: str, b: str) -> int:
    """Calcule la distance de Levenshtein entre deux chaines a et b."""
    n, m = len(a), len(b)
    # Creation d'une matrice (n + 1) x (m + 1) initialisee a 0
    d = [[0] * (m + 1) for _ in range(n + 1)]
    
    for i in range(n + 1):
        d[i][0] = i
    for j in range(m + 1):
        d[0][j] = j
        
    for i in range(1, n + 1):
        for j in range(1, m + 1):
            if a[i - 1] == b[j - 1]:
                d[i][j] = d[i - 1][j - 1]
            else:
                d[i][j] = 1 + min(d[i - 1][j], d[i][j - 1], d[i - 1][j - 1])
                
    return d[n][m]
```
*Analyse de complexité :* La construction de la matrice prend un temps $\mathcal{O}(n \times m)$ et un espace $\mathcal{O}(n \times m)$, optimisable en $\mathcal{O}(\min(n, m))$ en ne conservant que les deux dernières lignes du tableau.

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- **Mauvaise initialisation des tableaux 2D** : Utiliser `[[0] * m] * n` crée des références partagées sur les lignes, ce qui corrompt toute la matrice lors des modifications. Il faut impérativement utiliser une compréhension de liste : `[[0] * m for _ in range(n)]`.
- **Inversion des indices** : Confondre les dimensions liées à la première chaîne (lignes) et à la seconde (colonnes) lors de la relecture du code ou de la phase de test.