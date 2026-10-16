---
title: 'Cours : Algorithmique des graphes'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Algorithmique des Graphes (MP2I)

---

## 1. Vocabulaire fondamental et Représentations

### A. Définitions de base
Un graphe $G = (V, E)$ est la donnée d'un ensemble fini de sommets $V$ (les *vertices*) et d'un ensemble d'arêtes ou d'arcs $E$ (les *edges*).

*   **Graphe non orienté :** $E \subset \{\{u, v\} \in \mathcal{P}(V) \mid u \neq v\}$. Les arêtes sont des paires non ordonnées.
*   **Graphe orienté :** $E \subset V \times V$. Les arcs sont des couples ordonnés $(u, v)$ (de $u$ vers $v$).
*   **Voisinage :** 
    *   Dans un graphe non orienté, le voisinage d'un sommet $u$ est $\Gamma(u) = \{v \in V \mid \{u, v\} \in E\}$. Le degré $\deg(u) = |\Gamma(u)|$.
    *   Dans un graphe orienté, on distingue le **demi-degré intérieur** $\deg^-(u) = |\{v \in V \mid (v, u) \in E\}|$ et le **demi-degré extérieur** $\deg^+(u) = |\{v \in V \mid (u, v) \in E\}|$.
*   **Chemin et Chaîne :** Une chaîne est une suite de sommets adjacents dans un graphe non orienté. Un chemin est une suite de sommets reliés par des arcs dans un graphe orienté.
*   **Cycle / Circuit :** Une chaîne (resp. un chemin) dont les extrémités coïncident et dont les arêtes (resp. arcs) sont distinctes.

---

### B. Structures de données en mémoire

Soit $n = |V|$ le nombre de sommets et $m = |E|$ le nombre d'arêtes/arcs.

1.  **Matrice d'adjacence :** 
    *   Tableau $M$ de taille $n \times n$ où $M[i][j] = 1$ s'il y a une arête (ou un arc) entre $i$ et $j$ (ou le poids associé), et $0$ sinon.
    *   *Complexité spatiale :* $\mathcal{O}(n^2)$.
    *   *Complexité test d'adjacence :* $\mathcal{O}(1)$.
    *   *Complexité énumération des voisins :* $\mathcal{O}(n)$.

2.  **Listes d'adjacence :**
    *   Tableau (ou table de hachage) de taille $n$ où chaque case $u$ contient la liste chaînée des voisins de $u$.
    *   *Complexité spatiale :* $\mathcal{O}(n + m)$.
    *   *Complexité test d'adjacence :* $\mathcal{O}(\deg(u))$ (dans le pire des cas $\mathcal{O}(n)$).
    *   *Complexité énumération des voisins :* $\mathcal{O}(\deg(u))$.

---

## 2. Parcours de graphes

Les parcours sont la brique de base de l'algorithmique des graphes. On utilise systématiquement un tableau ou un ensemble `visite` de taille $n$ pour éviter les boucles infinies.

### A. Parcours en Largeur (BFS - Breadth-First Search)
Utilise une **file** (FIFO). Il permet de trouver les plus courts chemins dans les graphes non pondérés.

```python
from collections import deque

def bfs(graphe, s):
    visite = {s}
    file = deque([s])
    while file:
        u = file.popleft()
        for v in graphe[u]:
            if v not in visite:
                visite.add(v)
                file.append(v)
```
*   **Complexité temporelle :** $\mathcal{O}(n + m)$ avec des listes d'adjacence.
*   **Propriété fondamentale :** Le BFS découvre les sommets par ordre de distance croissante (en nombre d'arêtes) par rapport à la source $s$.

---

### B. Parcours en Profondeur (DFS - Depth-First Search)
Utilise une **pile** (LIFO, souvent implémentée via la récursivité).

```python
def dfs_rec(graphe, u, visite=None):
    if visite is None:
        visite = set()
    visite.add(u)
    for v in graphe[u]:
        v_sommet = v[0] if isinstance(v, tuple) else v # Gestion des graphes pondérés
        if v_sommet not in visite:
            dfs_rec(graphe, v_sommet, visite)
    return visite
```
*   **Complexité temporelle :** $\mathcal{O}(n + m)$.
*   **Applications majeures :** 
    *   Détection de composantes connexes (graphes non orientés).
    *   Détection de cycles.
    *   Tri topologique (sur les DAGs).

---

## 3. Arbres et Graphes Connexes

### A. Définitions
*   **Graphe connexe :** Entre toute paire de sommets, il existe une chaîne.
*   **Arbre :** Graphe non orienté, connexe et sans cycle.
*   **Propriétés équivalentes d'un arbre à $n$ sommets :**
    1. $G$ est connexe et sans cycle.
    2. $G$ est connexe et possède $n-1$ arêtes.
    3. $G$ est sans cycle et possède $n-1$ arêtes.
    4. $G$ est acyclique et tout ajout d'arête crée un unique cycle.

---

## 4. Plus courts chemins (Graphes pondérés)

On considère un graphe orienté ou non, muni d'une fonction de poids $w : E \to \mathbb{R}$.

### A. Algorithme de Dijkstra
*   **Objectif :** Calculer les plus courts chemins depuis une source unique $s$ vers tous les autres sommets, dans le cas où les poids sont **positifs ou nuls** ($\forall e \in E, w(e) \geq 0$).
*   **Principe :** Algorithme glouton utilisant une **file de priorité** (tas min).

```python
import heapq

def dijkstra(graphe, s):
    # graphe[u] = liste de tuples (v, poids)
    distances = {u: float('inf') for u in graphe}
    distances[s] = 0
    file_prio = [(0, s)]
    
    while file_prio:
        d, u = heapq.heappop(file_prio)
        
        if d > distances[u]:
            continue
            
        for v, poids in graphe[u]:
            alt = distances[u] + poids
            if alt < distances[v]:
                distances[v] = alt
                heapq.heappush(file_prio, (alt, v))
                
    return distances
```

> **Théorème :** Si tous les poids sont positifs, l'algorithme de Dijkstra termine et calcule correctement les distances minimales depuis $s$.
> **Complexité :** $\mathcal{O}((n + m) \log n)$ en utilisant un tas binaire (implémentation standard via `heapq`).

---

### B. Algorithme de Bellman-Ford
*   **Objectif :** Calculer les plus courts chemins depuis une source $s$, **même en présence de poids négatifs**. Permet également de détecter la présence de **circuits absorbants** (de poids total strictement négatif).
*   **Principe :** Programmation dynamique / Relaxation itérative. On effectue $n-1$ relaxations de toutes les arêtes.

> **Complexité :** $\mathcal{O}(n \cdot m)$.

---

## 5. Méthodes et Pièges à éviter

> ⚠️ **PIÈGE CLASSIQUE (Dijkstra et poids négatifs) :** 
> L'algorithme de Dijkstra **ne fonctionne pas** si le graphe contient des arêtes de poids négatif. La nature gloutonne de Dijkstra suppose qu'une fois un sommet extrait de la file de priorité, sa distance définitive est trouvée. Une arête négative ultérieure pourrait contredire cette hypothèse.

> 🛠️ **MÉTHODE (Représentation matricielle vs listes) :**
> *   Utiliser des **listes d'adjacence** par défaut dans 95% des problèmes, car les graphes rencontrés en concours sont souvent **creux** ($m \ll n^2$).
> *   Utiliser une **matrice d'adjacence** uniquement si $m \approx n^2$ (graphe dense) ou pour l'algorithme de Floyd-Warshall (fermatures transitives).

> 💡 **ASTUCE (Détection de cycles) :**
> Dans un graphe orienté, un parcours en profondeur (DFS) permet de détecter un cycle en vérifiant la présence d'une **arête retour** (vers un ancêtre dans l'arbre de récursion en cours de visite, souvent géré via un tableau de 3 états : *non visité*, *en cours de visite*, *visité*).