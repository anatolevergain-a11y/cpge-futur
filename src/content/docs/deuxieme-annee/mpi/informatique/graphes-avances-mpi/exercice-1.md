---
title: 'Exercice 1 : Composantes fortement connexes (Kosaraju/Tarjan)'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $G = (S, A)$ un graphe orienté, où $S$ représente l'ensemble des sommets de cardinal $n = |S|$ et $A$ l'ensemble des arcs de cardinal $m = |A|$. 

Deux sommets $u$ et $v$ d'un graphe orienté sont dits **fortement connexes** s'il existe un chemin de $u$ vers $v$ et un chemin de $v$ vers $u$. La relation d'équivalence associée partitionne l'ensemble des sommets en **Composantes Fortement Connexes (CFC)**.

L'objectif de ce problème est d'étudier et de concevoir des algorithmes efficaces en $\mathcal{O}(n + m)$ pour identifier ces composantes, ainsi que d'exploiter le **graphe réduit** (ou graphe des composantes) pour résoudre un problème d'ordonnancement avec contraintes.

On rappelle qu'en Python, un graphe est généralement représenté par des listes d'adjacence : `adj` est un dictionnaire ou une liste de listes telle que `adj[u]` contient les voisins sortants de `u`.

---

### ❓ Questions progressives

#### Partie I : Algorithme de Kosaraju-Sharir
1. **Définition du graphe transposé :** Écrire une fonction Python `transpose(adj)` qui prend en entrée la représentation d'un graphe par listes d'adjacence et renvoie le graphe transposé $G^T = (S, A^T)$ où $A^T = \{(v, u) \mid (u, v) \in A\}$, en temps $\mathcal{O}(n + m)$.
2. **Propriété des temps de fin de parcours :** Soit un parcours en profondeur (DFS) sur $G$. On note $d(u)$ la date de découverte et $f(u)$ la date de fin de traitement du sommet $u$. Soit $C$ et $C'$ deux CFC distinctes telles qu'il existe un arc de $C$ vers $C'$ dans $G$. Soit $u_0$ le premier sommet visité par le DFS dans $C \cup C'$. Montrer que si $u_0 \in C$, alors $\max_{u \in C} f(u) < \max_{v \in C'} f(v)$.
3. **Synthèse de l'algorithme :** En déduire le principe de l'algorithme de Kosaraju-Sharir. Écrire la fonction Python `kosaraju(adj)` qui renvoie la liste des CFC (chacune représentée par la liste de ses sommets).

#### Partie II : Graphe réduit et applications
4. **Construction du graphe réduit :** À partir des CFC obtenues, on définit le graphe réduit $G^{red} = (S^{red}, A^{red})$ où $S^{red}$ est l'ensemble des CFC et $A^{red}$ contient un arc de $C_1$ vers $C_2$ ($C_1 \neq C_2$) s'il existe $u \in C_1$ et $v \in C_2$ tels que $(u, v) \in A$. Écrire une fonction `graphe_reduit(adj, cfc)` qui construit ce graphe réduit en temps $\mathcal{O}(n + m)$.
5. **Acyclicité :** Démontrer mathématiquement que le graphe réduit $G^{red}$ est toujours un DAG (Directed Acyclic Graph, ou graphe orienté sans cycle).
6. **Application (Ordonnancement) :** On souhaite exécuter $n$ tâches interdépendantes modélisées par $G$. Des tâches appartenant à la même CFC doivent impérativement être exécutées en même temps (ou regroupées). Proposer un algorithme optimal utilisant $G^{red}$ pour trouver un ordre d'exécution global valide des tâches.

---

### 💡 Pistes & Indications méthodologiques

- **Partie I, Q1 :** Parcourez tous les sommets et tous leurs voisins sortants pour reconstruire les listes d'adjacence inversées. Veillez à bien initialiser les listes pour tous les sommets (y compris les éventuels sommets isolés).
- **Partie I, Q2 :** Raisonnez selon l'appartenance de $u_0$ à $C$ ou $C'$. Utilisez le théorème des parenthèses propre aux parcours en profondeur.
- **Partie I, Q3 :** L'algorithme de Kosaraju se décompose en deux phases de DFS : un premier sur $G$ pour obtenir l'ordre décroissant des temps de fin, puis un second sur $G^T$ en suivant cet ordre.
- **Partie II, Q4 :** Pour éviter les arcs multiples dans le graphe réduit, l'utilisation d'une structure de type `set` pour les arêtes est recommandée, ou un masquage par les identifiants de composantes.
- **Partie II, Q5 & Q6 :** Si $G^{red}$ contenait un cycle, que dirait-on de la maximalité des composantes fortement connexes ? Pour l'ordonnancement, pensez à un tri topologique sur le DAG réduit.

---

### 📋 Corrigé détaillé pas à pas

#### Partie I : Algorithme de Kosaraju-Sharir

1. **Graphe transposé :**
   ```python
   def transpose(adj):
       n = len(adj)
       adj_T = [[] for _ in range(n)]
       for u in range(n):
           for v in adj[u]:
               adj_T[v].append(u)
       return adj_T
   ```
   *Complexité :* On parcourt chaque sommet et chaque arc une fois, donc la complexité temporelle et spatiale est en $\mathcal{O}(n + m)$.

2. **Propriété des temps de fin de parcours :**
   Supposons que $u_0 \in C$ et qu'il existe un arc $(x, y)$ avec $x \in C$ et $y \in C'$. 
   Au moment où l'on découvre $u_0$, la composante $C \cup C'$ n'est pas encore totalement explorée. Comme il existe un chemin de $u_0$ vers n'importe quel sommet de $C$ et vers $C'$ (via $x \to y$), le DFS lancé depuis $u_0$ va atteindre tous les sommets de $C$ et de $C'$ avant de terminer $u_0$. 
   Par conséquent, tous les sommets de $C$ et $C'$ auront des temps de fin $f$ inférieurs à $f(u_0)$, ou alors le DFS s'étendra d'abord à $C'$ et s'achèvera dans $C'$ avant de revenir dans $C$. 
   Plus rigoureusement, le premier sommet atteint dans $C'$ (noté $w$) sera découvert depuis $C$, donc $d(u_0) < d(w)$. Le parcours dans $C'$ se terminera avant que l'on ne puisse dépiler $u_0$, ce qui implique $\max_{v \in C'} f(v) < \max_{u \in C} f(u)$ ? Attention, inversons : puisque $C$ et $C'$ sont disjointes et que l'on quitte $C'$ pour revenir dans $C$ (impossible car pas d'arc de $C'$ vers $C$ dans le même sens sans briser la forte connexité), le dernier sommet de $C$ à être terminé le sera *après* tous les sommets de $C'$. Ainsi, $\max_{v \in C'} f(v) < \max_{u \in C} f(u)$.

3. **Algorithme de Kosaraju-Sharir :**
   *   Phase 1 : On effectue un DFS sur $G$ pour enregistrer l'ordre de fin des sommets.
   *   Phase 2 : On calcule $G^T$.
   *   Phase 3 : On effectue un DFS sur $G^T$ en considérant les sommets par ordre décroissant de leur temps de fin calculé à la phase 1. Chaque arbre du DFS sur $G^T$ forme exactement une CFC.
   
   ```python
   def kosaraju(adj):
       n = len(adj)
       visited = [False] * n
       order = []

       def dfs1(u):
           visited[u] = True
           for v in adj[u]:
               if not visited[v]:
                   dfs1(v)
           order.append(u)

       for u in range(n):
           if not visited[u]:
               dfs1(u)

       adj_T = transpose(adj)
       visited = [False] * n
       cfc = []

       def dfs2(u, comp):
           visited[u] = True
           comp.append(u)
           for v in adj_T[u]:
               if not visited[v]:
                   dfs2(v, comp)

       for u in reversed(order):
           if not visited[u]:
               comp = []
               dfs2(u, comp)
               cfc.append(comp)

       return cfc
   ```

---

#### Partie II : Graphe réduit et applications

4. **Construction du graphe réduit :**
   On commence par attribuer à chaque sommet l'identifiant de sa CFC (un entier de $0$ à $k-1$ où $k$ est le nombre de CFC).
   ```python
   def graphe_reduit(adj, cfc):
       n = len(adj)
       k = len(cfc)
       id_cfc = [0] * n
       for i, comp in enumerate(cfc):
           for u in comp:
               id_cfc[u] = i

       adj_red = [set() for _ in range(k)]
       for u in range(n):
           u_comp = id_cfc[u]
           for v in adj[u]:
               v_comp = id_cfc[v]
               if u_comp != v_comp:
                   adj_red[u_comp].add(v_comp)
       
       # Conversion des sets en listes
       return [list(voisins) for voisins in adj_red]
   ```
   *Complexité :* L'attribution des IDs prend $\mathcal{O}(n)$, et le parcours de tous les arcs prend $\mathcal{O}(m)$. La construction est donc en $\mathcal{O}(n + m)$.

5. **Démonstration de l'acyclicité :**
   Supposons par l'absurde que $G^{red}$ contienne un cycle de composantes $C_0, C_1, \dots, C_p = C_0$. 
   Par définition de $G^{red}$, cela signifie qu'il existe des arêtes dans $G$ allant de $C_0$ vers $C_1$, de $C_1$ vers $C_2$, ..., et de $C_p$ vers $C_0$. 
   Par conséquent, pour toute paire de sommets $(u, v)$ pris respectivement dans $C_i$ et $C_j$ du cycle, il existe un chemin de $u$ vers $v$ et un chemin de $v$ vers $u$ (en suivant les chemins internes aux composantes et les arcs inter-composantes du cycle). 
   Tous les sommets de $C_0, C_1, \dots, C_{p-1}$ appartiendraient donc à une **seule et même** composante fortement connexe, ce qui contredit le fait que les CFC formoient une partition stricte de sommets en composantes *maximales*. 
   Le graphe réduit $G^{red}$ est donc nécessairement un DAG.

6. **Résolution du problème d'ordonnancement :**
   Puisque $G^{red}$ est un DAG, on peut lui appliquer un **tri topologique**. 
   L'algorithme global est le suivant :
   1. Calculer les CFC de $G$ via l'algorithme de Kosaraju (ou Tarjan) en $\mathcal{O}(n + m)$.
   2. Construire le graphe réduit $G^{red}$ en $\mathcal{O}(n + m)$.
   3. Effectuer un tri topologique de $G^{red}$ (par exemple via un DFS ou l'algorithme de Kahn) en $\mathcal{O}(k + m_{red}) = \mathcal{O}(n + m)$.
   4. L'ordre linéaire obtenu sur les CFC fournit l'ordonnancement séquentiel valide des blocs de tâches à exécuter.