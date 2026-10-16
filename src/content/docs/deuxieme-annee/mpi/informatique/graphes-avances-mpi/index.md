---
title: "📌 1. Définitions & Cadre d'étude"
description: "Fiche de cours et d'exercice CPGE."
---

## 📌 1. Définitions & Cadre d'étude

Soit $G = (V, E)$ un graphe orienté ou non orienté, où $V$ représente l'ensemble des sommets et $E$ l'ensemble des arêtes (ou arcs). On note $|V| = n$ le nombre de sommets et $|E| = m$ le nombre d'arêtes.

*   **Réseau de transport :** Un quadruplet $N = (V, S, P, c)$ où :
    *   $G = (V, E)$ est un graphe orienté.
    *   $S \in V$ est la source (de degré entrant nul).
    *   $P \in V$ est le puits (de degré sortant nul).
    *   $c : E \to \mathbb{R}_+$ est une application appelée *capacité*.
Flot: Une application $f : E \to \mathbb{R}$ est un flot sur $N$ si elle satisfait les conditions suivantes :
    1.  *Antisymétrie (pour les graphes implicites) ou positivité :* $\forall e \in E, \; 0 \le f(e) \le c(e)$.
    2.  *Conservation du flot :* $\forall u \in V \setminus \{S, P\}$,
        $$\sum_{v \in V \text{ t.q. } (u,v) \in E} f((u,v)) = \sum_{v \in V \text{ t.q. } (v,u) \in E} f((v,u))$$
*   **Valeur d'un flot :** La valeur $|f|$ d'un flot $f$ est la quantité totale sortant de la source :
    $$|f| = \sum_{v \in V \text{ t.q. } (S,v) \in E} f((S,v))$$
Coupe: Une coupe $(A, B)$ du réseau est une partition de $V$ telle que $S \in A$ et $P \in B$.
*   **Capacité d'une coupe :** $c(A, B) = \sum_{u \in A, v \in B \text{ t.q. } (u,v) \in E} c((u,v))$.
---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème de Ford-Fulkerson (Max-Flow Min-Cut)

**Énoncé :** Dans tout réseau de transport, la valeur maximale d'un flot est égale à la capacité minimale parmi toutes les coupes du réseau.

#### Démonstration (Esquisse) :
1.  **Lemme préliminaire (Faible dualité) :** Soit $f$ un flot quelconque et $(A, B)$ une coupe quelconque. Par sommation sur la conservation du flot et les bornes de capacité, on montre que $|f| \le c(A, B)$. En particulier, la valeur de tout flot est minorée par la capacité de toute coupe.
2.  **Saturation et maximalité :** Si l'on dispose d'un flot $f$ pour lequel il n'existe plus de chemin augmentant dans le graphe résiduel $G_f$, on construit explicitement une coupe $(A, B)$ où $A$ est l'ensemble des sommets accessibles depuis $S$ dans $G_f$.
3.  On vérifie que $P \notin A$ (sinon il y aurait un chemin augmentant) et que le flot net traversant cette coupe sature toutes les arêtes de $A$ vers $B$. Ainsi, $|f| = c(A, B)$, ce qui prouve à la fois l'optimalité du flot et l'égalité du théorème. $\blacksquare$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Algorithme d'Edmonds-Karp

L'algorithme d'Edmonds-Karp est une implémentation de la méthode de Ford-Fulkerson qui utilise un parcours en largeur (BFS) pour trouver le chemin augmentant le plus court (en nombre d'arêtes) dans le graphe résiduel.

*   **Complexité en temps :** $\mathcal{O}(n \cdot m^2)$
*   **Complexité en espace :** $\mathcal{O}(n + m)$

#### Implémentation de référence (Python) :

```python
from collections import deque


def bfs(s, t, parent, residual_graph, n):
    visited = [False] * n
    queue = deque([s])
    visited[s] = True

    while queue:
        u = queue.popleft()
        for v in range(n):
            if not visited[v] and residual_graph[u][v] > 0:
                queue.append(v)
                visited[v] = True
                parent[v] = u
                if v == t:
                    return True
    return False


def edmonds_karp(capacity, s, t):
    n = len(capacity)
    # Matrice du graphe résiduel initialisée avec les capacités
    residual_graph = [row[:] for row in capacity]
    parent = [-1] * n
    max_flow = 0

    while bfs(s, t, parent, residual_graph, n):
        # Trouver la capacite residuelle minimale le long du chemin trouve par BFS
        path_flow = float("inf")
        v = t
        while v != s:
            u = parent[v]
            path_flow = min(path_flow, residual_graph[u][v])
            v = u

        # Mettre a jour les capacites residuelles des aretes et des aretes inverses
        v = t
        while v != s:
            u = parent[v]
            residual_graph[u][v] -= path_flow
            residual_graph[v][u] += path_flow
            v = u

        max_flow += path_flow

    return max_flow
```

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Graphes non orientés :** Ne pas oublier de dédoubler les arêtes non orientées en deux arcs opposés dans la matrice de capacité lors de la modélisation sous forme de réseau de transport.
2.  **Capacités irrationnelles :** Avec des capacités réelles quelconques, l'algorithme de Ford-Fulkerson naïf (via DFS arbitraire) peut ne pas terminer ou converger vers une valeur autre que le flot maximal. En MPI, on utilise systématiquement Edmonds-Karp ou Dinitz pour garantir la terminaison polynomiale.
3.  **Confusion entre flot et capacité résiduelle :** Lors de la mise à jour du graphe résiduel, l'erreur classique est d'oublier d'incrémenter la capacité de l'arc retour (flux négatif ou arête inverse), ce qui interdit la "repentir" (annulation d'un choix glouton antérieur).
4.  **Complexité spatiale :** Utiliser des matrices d'adjacence $A \in \mathcal{M}_{n,n}(\mathbb{R})$ pour des graphes creux ($m \ll n^2$) entraîne un dépassement mémoire ($\mathcal{O}(n^2)$). Préférer les listes d'adjacence pour les structures résiduelles si $n$ est grand.