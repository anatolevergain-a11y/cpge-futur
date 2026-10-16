---
title: 'Exercice 1 : Programmation dynamique'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la modernisation de la chaîne logistique d'un grand opérateur de fret maritime et terrestre, on s'intéresse à l'optimisation du chargement de conteneurs sur un navire porte-conteneurs ou un train de marchandises. 

Plus précisément, on étudie un problème d'optimisation de la valeur des marchandises transportées sous contrainte de poids. Soit un ensemble de $n$ types de marchandises disponibles. Pour chaque type $i \in \{1, \dots, n\}$ :
- $w_i \in \mathbb{N}^*$ représente le poids unitaire d'un conteneur de ce type (exprimé en tonnes $\text{t}$).
- $v_i \in \mathbb{N}^*$ représente la valeur marchande (ou le profit généré) associée à ce conteneur (exprimé en milliers d'euros $\text{k}\text{€}$).

Le navire dispose d'une capacité maximale de poids strict $W \in \mathbb{N}^*$ (exprimée en tonnes $\text{t}$). Contrairement au problème classique du sac à dos 0-1 où chaque objet ne peut être choisi qu'au plus une fois, nous sommes ici dans le cadre du **problème du sac à dos entier (ou *unbounded knapsack problem*)** : on suppose que les stocks pour chaque type de marchandise sont quasi-illimités, et l'on peut embarquer un nombre arbitraire (zéro ou plus) de conteneurs de chaque type, tant que la somme des poids n'excède pas $W$.

#### Hypothèses de modélisation et limites physiques
1. **Discrétisation :** Les poids $w_i$ et la capacité $W$ sont supposés être des nombres entiers. En pratique industrielle, les masses sont mesurées avec une précision finie (par exemple à la tonne près), ce qui rend cette modélisation discrète pertinente.
2. **Linéarité des profits :** Le modèle suppose que la valeur d'un chargement est strictement additive. Il ne prend pas en compte les contraintes géométriques de placement à bord (arrimage, stabilité du navire, centre de gravité) ni les effets de seuil logistiques (coûts fixes d'affrètement, remises sur volumes).
3. **Critique du modèle :** À grande échelle, un algorithme d'optimisation unidimensionnel ne suffit pas pour la sécurité maritime. L'étudiant devra garder à l'esprit que ce problème sert de brique élémentaire (sous-problème) pour des architectures logistiques plus complexes.

---

### ❓ Questions progressives

#### Partie I : Modélisation et Complexité Naïve

1. Formuler mathématiquement le problème d'optimisation : on cherche à maximiser la valeur totale embarquée $\sum_{i=1}^n v_i x_i$ sous la contrainte $\sum_{i=1}^n w_i x_i \le W$, où $x_i \in \mathbb{N}$ est le nombre de conteneurs du type $i$ choisis.
2. Proposer une approche récursive naïve pour calculer la valeur maximale atteignable pour une capacité $w \le W$. Expliciter la relation de récurrence.
3. Quelle est la complexité temporelle dans le pire des cas d'une telle approche récursive (sans mémoïsation) ? Pourquoi est-elle inutilisable pour des valeurs industrielles typiques (par exemple $W = 100\,000\text{ t}$ et $n = 50$) ?

#### Partie II : Résolution par Programmation Dynamique

4. On définit la fonction de coût optimale $V(w)$ comme la valeur maximale que l'on peut obtenir avec une capacité exacte de $w$ tonnes (avec $0 \le w \le W$). Établir l'équation de Bellman (relation de récurrence sous-tendant la programmation dynamique) pour $V(w)$, en posant $V(0) = 0$ et $V(w) = -\infty$ si aucun chargement n'est valide pour un poids négatif.
5. Écrire une fonction en Python `sac_a_dos_infini(W, weights, values)` utilisant la programmation dynamique (approche ascendante / *bottom-up*) qui renvoie la valeur maximale atteignable. Préciser sa complexité en temps et en espace en fonction de $W$ et $n$.
6. Modifier (ou enrichir) l'algorithme précédent pour qu'il permette non seulement de renvoyer la valeur maximale, mais aussi **la composition exacte du chargement optimal** (c'est-à-dire le nombre de conteneurs de chaque type embarqués).

#### Partie III : Analyse critique et limites opérationnelles

7. **Analyse de sensibilité :** Supposons qu'un armateur souhaite augmenter la capacité $W$ de son navire de $1\%$. L'algorithme de programmation dynamique doit-il être réexécuté entièrement à partir de $0$, ou peut-on exploiter les résultats précédents ? Quel est l'impact sur la complexité ?
8. **Analyse critique du modèle :** Discutez brièvement de la pertinence de l'hypothèse d'indivisibilité/illimitation des conteneurs. Que se passe-t-il si l'on introduit une contrainte secondaire de volume maximal $V_{ol}$ en plus de la contrainte de poids $W$ ? Le problème reste-t-il soluble efficacement par programmation dynamique standard ?

---

### 💡 Pistes & Indications

- **Q2 & Q4 :** Pensez à examiner le dernier choix effectué : si l'on décide d'embarquer un conteneur du type $i$, il reste une capacité résiduelle de $w - w_i$.
- **Q5 :** Utilisez un tableau unidimensionnel de taille $W+1$ pour stocker les sous-problèmes optimaux. Veillez à bien initialiser les cas de base.
- **Q6 :** Maintenez un tableau de "traçage" (*backtracking*) ou de prédécesseurs qui, pour chaque poids $w$, retient quel type de conteneur a permis d'atteindre l'optimum.
- **Q8 :** Le problème du sac à dos multidimensionnel (poids + volume) est NP-comble au sens fort ; la programmation dynamique standard ne s'extrapole pas trivialement sans explosion exponentielle de la mémoire et du temps de calcul.

---

### 📋 Corrigé détaillé et analyse des résultats

#### Partie I : Modélisation et Complexité Naïve

1. **Formulation mathématique :**
   $$\max_{(x_1, \dots, x_n) \in \mathbb{N}^n} \sum_{i=1}^n v_i x_i \quad \text{sous la contrainte} \quad \sum_{i=1}^n w_i x_i \le W$$

2. **Approche récursive naïve :**
   Soit $R(w)$ la valeur maximale pour une capacité $w$. On a la relation :
   $$R(w) = \max \left(\{0\} \cup \{v_i + R(w - w_i) \mid 1 \le i \le n \text{ et } w \ge w_i\}\right)$$

3. **Complexité :**
   Dans le pire des cas, si tous les $w_i = 1$, l'arbre de récurrence a une profondeur de l'ordre de $W$ et un facteur de branchement de $n$. La complexité en temps est en $\mathcal{O}(n^W)$, ce qui est exponentiel. Pour $W = 100\,000$ et $n = 50$, $50^{100\,000}$ opérations dépassent largement le nombre d'atomes dans l'univers observable : cette approche est totalement caduque.

#### Partie II : Résolution par Programmation Dynamique

4. **Équation de Bellman :**
   Pour $w \in \{0, \dots, W\}$,
   $$V(w) = \max \left( \{0\} \cup \{v_i + V(w - w_i) \mid 1 \le i \le n \text{ et } w \ge w_i\} \right)$$
   avec la convention que si $w - w_i < 0$ ou si l'état précédent est invalide, la branche est ignorée.

5. **Implémentation Python (Approche Bottom-Up) :**

```python
def sac_a_dos_infini(W: int, weights: list[int], values: list[int]) -> int:
    """
    Calcule la valeur maximale pour un sac à dos infini.
    W : capacité maximale (en tonnes)
    weights : liste des poids des conteneurs
    values : liste des valeurs des conteneurs
    """
    # Tableau de programmation dynamique initialisé à 0
    # dp[w] stocke la valeur maximale pour une capacité exacte w
    dp = [0] * (W + 1)
    
    for w in range(1, W + 1):
        max_val = 0
        for i in range(len(weights)):
            if w >= weights[i]:
                val = values[i] + dp[w - weights[i]]
                if val > max_val:
                    max_val = val
        dp[w] = max_val
        
    return dp[W]
```
*Complexité :* Il y a $W$ états à calculer, et pour chaque état, on parcourt les $n$ types de marchandises. La complexité temporelle est donc de **$\mathcal{O}(n \cdot W)$**, ce qui est pseudo-polynomial et parfaitement adapté pour $W = 100\,000$ et $n = 50$ (environ $5 \cdot 10^6$ opérations, exécutées en quelques millisecondes en Python). La complexité spatiale est de **$\mathcal{O}(W)$**.

6. **Reconstruction de la solution (Backtracking) :**
   Pour retrouver la composition, on maintient un tableau `parent` de la même taille que `dp` qui mémorise l'indice du dernier conteneur ajouté pour atteindre l'optimum à chaque poids $w$.

```python
def sac_a_dos_infini_avec_reconstruction(W: int, weights: list[int], values: list[int]):
    dp = [0] * (W + 1)
    parent = [-1] * (W + 1)
    
    for w in range(1, W + 1):
        max_val = 0
        best_item = -1
        for i in range(len(weights)):
            if w >= weights[i]:
                val = values[i] + dp[w - weights[i]]
                if val > max_val:
                    max_val = val
                    best_item = i
        dp[w] = max_val
        parent[w] = best_item
        
    # Reconstruction du chargement
    current_w = W
    composition = [0] * len(weights)
    while current_w > 0 and parent[current_w] != -1:
        item = parent[current_w]
        composition[item] += 1
        current_w -= weights[item]
        
    return dp[W], composition
```

#### Partie III : Analyse critique et limites opérationnelles

7. **Analyse de sensibilité :**
   Si l'on souhaite augmenter la capacité à $W' = 1,01 \times W$, il n'est **pas nécessaire** de tout recalculer. Le tableau `dp` calculé jusqu'à $W$ reste entièrement valide. Il suffit de prolonger la boucle `for w` de $W+1$ jusqu'à $W'$. La complexité supplémentaire est alors de $\mathcal{O}(n \cdot (W' - W))$, soit environ $1\%$ du temps initial. C'est un net avantage de la programmation dynamique ascendante.

8. **Analyse critique du modèle et limites opérationnelles :**
   - **Indivisibilité/Illimitation :** L'hypothèse d'un nombre illimité de conteneurs de chaque type est une simplification acceptable si la flotte de l'armateur est grande devant un chargement unitaire. Si les stocks sont finis, on retombe sur le problème du sac à dos 0-1 (ou à quantités bornées), qui requiert une structure de programmation dynamique légèrement modifiée (en deux dimensions ou avec des optimisations binaires).
   - **Multidimensionnalité (Poids + Volume) :** Si l'on ajoute une contrainte de volume maximal $V_{ol}$ en plus du poids $W$, l'espace des états passe d'une dimension ($w$) à deux dimensions ($w, v$). L'équation de Bellman devient $V(w, v)$ et la complexité temporelle grimpe à $\mathcal{O}(n \cdot W \cdot V_{ol})$. Pour des valeurs industrielles, cela s'avère prohibitif : le problème devient NP-difficile au sens fort, nécessitant alors le recours à des heuristiques (algorithmes génétiques, recuit simulé) ou des solveurs en nombres entiers (Branch-and-Bound).