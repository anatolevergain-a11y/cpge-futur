---
title: 'Exercice 2 : Graphes bipartis et flot'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Couplages maximaux et flots dans les réseaux

En tant qu'examinateur de concours CPGE (filière MPI), ce problème vise à évaluer votre capacité à modéliser un problème combinatoire complexe à l'aide de la théorie des graphes, et plus particulièrement via la notion de **flot maximal**. Les concepts abordés (réductions, réseaux de transport, algorithme de Ford-Fulkerson / Edmonds-Karp) sont centraux aux épreuves écrites d'informatique (X, ENS, Mines-Ponts, Centrale-Supélec).

---

## 1. Introduction et Rapports de modélisation

Soit $G = (S, E)$ un graphe non orienté. Un **couplage** (ou appariement) dans $G$ est un sous-ensemble d'arêtes $M \subseteq E$ tel que deux arêtes distinctes de $M$ ne partagent aucune extrémité commune. Un couplage est dit **maximal** (en cardinalité) s'il n'existe aucun autre couplage de cardinal strictement supérieur.

Le graphe $G$ est dit **bipartis** si son ensemble de sommets $S$ peut être partitionné en deux sous-ensembles disjoints $X$ et $Y$ tels que toute arête de $E$ a une extrémité dans $X$ et l'autre dans $Y$. On note alors $G = (X, Y, E)$.

### Question préliminaire (Modélisation)
Soit $G = (X, Y, E)$ un graphe bipartis. Décrivez comment transformer la recherche d'un couplage maximal dans $G$ en un problème de **flot maximal** dans un réseau de transport orienté $R = (S', E', c)$. Précisez l'ensemble des sommets $S'$, les arêtes orientées $E'$ ainsi que leur capacité $c$.

---

## 2. Correction pas à pas

### 1. Modélisation par un réseau de flot

Pour ramener le problème du couplage maximal à un problème de flot, on construit un réseau orienté $R = (S', E', c)$ de la manière suivante :

1. **Ensemble des sommets $S'$** : On ajoute au graphe initial une source $s$ et un puits $t$. Ainsi :
   $$S' = X \cup Y \cup \{s, t\}$$

2. **Ensemble des arêtes orientées $E'$ et capacités $c$** :
   * Pour chaque arête $(x, y) \in E$ avec $x \in X$ et $y \in Y$, on trace une arête orientée de $x$ vers $y$ : $(x, y) \in E'$, avec une capacité $c(x, y) = +\infty$ (ou $1$, puisque chaque sommet ne peut être saturé qu'une fois).
   * Pour chaque sommet $x \in X$, on ajoute une arête orientée de la source $s$ vers $x$ : $(s, x) \in E'$ avec $c(s, x) = 1$.
   * Pour chaque sommet $y \in Y$, on ajoute une arête orientée de $y$ vers le puits $t$ : $(y, t) \in E'$ avec $c(y, t) = 1$.

### 2. Justification mathématique (Théorème de Ford-Fulkerson et Flot Entier)

Puisque toutes les capacités sur les arêtes $(s, x)$, $(x, y)$ et $(y, t)$ sont des entiers (ou $\infty$), le théorème des flots entiers garantit que l'algorithme de Ford-Fulkerson (ou son raffinement Edmonds-Karp) trouvera un **flot maximal entier** (valeurs 0 ou 1 sur chaque arête).

* **Correspondance** : Les arêtes $(x, y)$ du graphe bipartis $G$ qui portent un flot de valeur $1$ dans le réseau $R$ forment exactement un couplage $M$.
* **Optimalité** : Par le théorème flots-coupes (Max-Flow Min-Cut), la valeur du flot maximal dans $R$ est égale à la capacité de la coupe minimale, ce qui correspond exactement au cardinal du couplage maximal dans $G$ (et par le théorème de König, à la taille de la couverture minimale par sommets).

---

## 3. Implémentation en Python

Voici une implémentation académique propre utilisant l'algorithme de Ford-Fulkerson (via DFS) pour résoudre le problème du couplage maximal dans un graphe bipartis.

```python
def dfs_flot(u, t, f_val, visited, graph, capacities, flow):
    if u == t:
        return f_val
    visited.add(u)
    for v in graph[u]:
        residual = capacities[(u, v)] - flow[(u, v)]
        if v not in visited and residual > 0:
            push = dfs_flot(v, t, min(f_val, residual), visited, graph, capacities, flow)
            if push > 0:
                flow[(u, v)] += push
                flow[(v, u)] -= push
                return push
    return 0

def hopcroft_karp_or_ford_fulkerson(X, Y, E):
    """
    Calcule un couplage maximal dans un graphe bipartis G = (X, Y, E)
    via la réduction au flot maximal.
    """
    graph = {s: [] for s in X.union(Y).union({'s', 't'})}
    capacities = {e: 0 for e in [((u,v)) for u in graph for v in graph]} # Initialisation
    flow = {e: 0 for e in capacities}
    
    # Construction du réseau
    for x in X:
        graph['s'].append(x)
        graph[x].append('s')
        capacities[('s', x)] = 1
        
    for y in Y:
        graph[y].append('t')
        graph['t'].append(y)
        capacities[(y, 't')] = 1
        
    for x, y in E:
        graph[x].append(y)
        graph[y].append(x)
        capacities[(x, y)] = 1  # Capacité unitaire suffit pour un couplage
        
    # Algorithme de Ford-Fulkerson
    max_flow = 0
    while True:
        visited = set()
        push = dfs_flot('s', 't', float('inf'), visited, graph, capacities, flow)
        if push == 0:
            break
        max_flow += push
        
    # Extraction du couplage
    matching = []
    for x in X:
        for y in graph[x]:
            if y in Y and flow[(x, y)] == 1:
                matching.append((x, y))
                
    matching_size = max_flow
    return matching_size, matching
```

---

## 4. Analyse critique et complexité

1. **Complexité temporelle** :
   * Soit $V = |X| + |Y|$ le nombre de sommets et $E$ le nombre d'arêtes.
   * Le nombre maximal de flots augmentants est borné par le cardinal du couplage maximal, soit $\mathcal{O}(V)$.
   * Chaque recherche de chemin augmentant par DFS prend $\mathcal{O}(V + E)$.
   * La complexité totale de cette approche naïve est donc en $\mathcal{O}(V \cdot (V + E))$. 
   * *Remarque de concours* : Pour des graphes bipartis denses, l'algorithme de Hopcroft-Karp offre une meilleure complexité en $\mathcal{O}(E \sqrt{V})$, attendue dans les problèmes plus ardus des concours ENS.

2. **Limites de la modélisation par flot général** :
   Bien que robuste, utiliser un algorithme de flot général (Ford-Fulkerson) pour un simple couplage bipartis peut s'avérer sur-dimensionné si l'on ne restreint pas l'utilisation des structures de données. L'utilisation de chemins augmentants directs (comme dans l'algorithme de Hopcroft-Karp ou de匈牙利 / Kuhn) exploite directement la structure bipartie sans manipuler explicitement les capacités résiduelles, réduisant ainsi les constantes cachées en mémoire et en temps d'exécution.