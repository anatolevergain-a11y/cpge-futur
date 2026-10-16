---
title: 'Mines-Ponts - Informatique'
description: 'Sujet type concours corrigé pas à pas pour la filière MPI.'
sidebar:
  badge:
    text: 'Annale Concours'
    variant: 'caution'
---

## 📄 Partie 1 : Énoncé du Problème

Dans le cadre de la vérification formelle de protocoles de communication distribués asynchrones, on cherche à analyser la propagation de signaux à travers un réseau modélisé par un graphe orienté. Les défaillances potentielles de certains nœuds du réseau nécessitent l'utilisation conjointe de structures d'automates finis pour modéliser le comportement local des entités et d'algorithmes avancés sur les graphes pour détecter les boucles de rétroaction et les blocages (*deadlocks*).

Soit $G = (V, E)$ un graphe orienté où $V$ représente l'ensemble des sommets (composants du réseau) de cardinalité $n = |V|$ et $E \subseteq V \times V$ l'ensemble des arêtes (canaux de communication) de cardinalité $m = |E|$. 

Un automate fini déterminant (AFD) est défini par un quintuplet $\mathcal{A} = (\Sigma, Q, q_0, \delta, F)$ où :
- $\Sigma$ est l'alphabet d'entrée,
- $Q$ est l'ensemble fini des états,
- $q_0 \in Q$ est l'état initial,
- $\delta : Q \times \Sigma \to Q$ est la fonction de transition (supposée totale pour simplifier),
- $F \subseteq Q$ est l'ensemble des états acceptants.

Le problème central de ce sujet est l'étude de la synchronisation de $k$ automates évoluant sur le graphe $G$ selon des contraintes topologiques d'adjacence, et la conception d'algorithmes en langage **Python 3** dont la complexité temporelle et spatiale devra être rigoureusement établie.

---

## ❓ Partie 2 : Questions

### Partie A : Algorithmique Avancée sur les Graphes

1. **Définition et Modélisation** : Soit $G = (V, E)$ un graphe orienté. On appelle *graphe réduit des composantes fortement connexes* (CFC) le graphe $G^{\text{SCC}} = (V^{\text{SCC}}, E^{\text{SCC}})$ où chaque sommet de $V^{\text{SCC}}$ représente une composante fortement connexe de $G$. Rappeler la complexité temporelle de l'algorithme de Tarjan ou de Kosaraju pour obtenir $G^{\text{SCC}}$. Justifier pourquoi $G^{\text{SCC}}$ est nécessairement un DAG (*Directed Acyclic Graph*).
2. **Recherche de Chemins Critiques** : On associe à chaque arête $e \in E$ un poids strictement positif $w(e) \in \mathbb{R}_+$ représentant un temps de latence. Proposer un algorithme optimal en Python permettant de trouver le chemin de plus long poids dans un DAG. Quelle est sa complexité ?
3. **Détection de Cycles Bloquants** : Écrire une fonction Python `has_critical_lock(V, E, weights)` prenant en argument un graphe orienté sous forme de listes d'adjacence et un dictionnaire de poids, qui renvoie `True` s'il existe un cycle dont le poids total dépasse un seuil $\theta \in \mathbb{R}$, et `False` sinon. Discuter la complexité de cette approche dans le cas général.

### Partie B : Théorie des Automates et Algorithmes Associés

4. **Produit Synchronisé Généralisé** : Soient $\mathcal{A}_1 = (\Sigma, Q_1, q_{0,1}, \delta_1, F_1)$ et $\mathcal{A}_2 = (\Sigma, Q_2, q_{0,2}, \delta_2, F_2)$ deux automates. Définir formellement l'automate produit $\mathcal{A}_1 \times \mathcal{A}_2$ reconnaissant l'intersection des langages $\mathcal{L}(\mathcal{A}_1) \cap \mathcal{L}(\mathcal{A}_2)$.
5. **Implémentation et Exploration** : En supposant les automates représentés par des classes Python ou des dictionnaires, écrire une fonction `intersect_automata(A1, A2)` qui construit et renvoie l'automate produit.
6. **Propriétés de Vacuité** : Proposer un algorithme basé sur une recherche en profondeur (DFS) ou en largeur (BFS) sur l'automate produit pour décider si $\mathcal{L}(\mathcal{A}_1) \cap \mathcal{L}(\mathcal{A}_2) = \emptyset$. Évaluer sa complexité en fonction de $|Q_1|$ et $|Q_2|$.

---

## 💡 Partie 3 : Rapport du Jury

### Attentes générales
Le jury attend des candidats une rigueur absolue dans la manipulation des notations mathématiques ainsi qu'une maîtrise parfaite des structures de données en Python. Les complexités algorithmiques doivent être justifiées par des invariants de boucle ou des théorèmes de graphes précis, et non par de simples intuitions.

### Pièges fréquents relevés lors de la correction
- **Complexité des CFC** : Confondre les complexités des algorithmes de Kosaraju et Tarjan ou oublier que la construction du graphe réduit nécessite un tri topologique ou une condensation linéaire en $\mathcal{O}(n + m)$.
- **Gestion de la mémoire dans les automates produits** : Ne pas implémenter de structure de hachage efficace pour les états visités, conduisant à des boucles infinies ou des explosions exponentielles non maîtrisées lors de l'exploration de graphes d'états implicites.
- **Typage et immutabilité en Python** : Utiliser des listes ou des dictionnaires non hachables comme clés dans les ensembles (*sets*) ou dictionnaires d'exploration d'états, provoquant des `TypeError`.

---

## 📋 Partie 4 : Corrigé Détaillé et Analyse

### Correction de la Partie A

#### Question 1
L'algorithme de Tarjan (ainsi que celui de Kosaraju) permet de décomposer un graphe orienté en ses composantes fortement connexes en un temps linéaire $\mathcal{O}(n + m)$, où $n = |V|$ et $m = |E|$. 
Le graphe réduit $G^{\text{SCC}}$ est un DAG par définition : si $C_1$ et $C_2$ étaient deux composantes distinctes appartenant à un même cycle dans $G^{\text{SCC}}$, alors tous les sommets de $C_1$ et $C_2$ seraient mutuellement accessibles dans $G$, ce qui contredirait le fait qu'ils appartiennent à des composantes fortement connexes *maximales* distinctes.

#### Question 2
Dans un DAG, on peut déterminer le plus long chemin (problème NP-difficile en général, mais polynomial dans les DAGs) en effectuant un tri topologique préalable, puis en relaxant les arêtes dans l'ordre topologique.

```python
def longest_path_dag(V, adj, weights):
    # Étape 1 : Tri topologique par DFS
    visited = set()
    topo_order = []

    def dfs(u):
        visited.add(u)
        for v, _ in adj.get(u, []):
            if v not in visited:
                dfs(v)
        topo_order.append(u)

    for node in V:
        if node not in visited:
            dfs(node)
    
    topo_order.reverse()

    # Étape 2 : Calcul des plus longs chemins
    dist = {node: float('-inf') for node in V}
    # Supposons qu'on cherche à partir de sources, ou initialisons toutes à 0 si le graphe a plusieurs sources potentielles
    # Ici, initialisons les nœuds sans prétédecesseur entrant à 0
    in_degree = {node: 0 for node in V}
    for u in adj:
        for v, _ in adj[u]:
            in_degree[v] = in_degree.get(v, 0) + 1

    for node in V:
        if in_degree[node] == 0:
            dist[node] = 0.0

    for u in topo_order:
        if dist[u] != float('-inf'):
            for v, weight in adj.get(u, []):
                if dist[u] + weight > dist[v]:
                    dist[v] = dist[u] + weight

    return dist
```
*Complexité* : Le tri topologique prend $\mathcal{O}(n + m)$ et la relaxation des arêtes visite chaque arête une seule fois en $\mathcal{O}(n + m)$. La complexité totale est donc **$\mathcal{O}(n + m)$**.

#### Question 3
La recherche d'un cycle de poids supérieur à $\theta$ dans un graphe général est un problème NP-complet (liable au problème du plus long cycle). Cependant, si l'on cherche un cycle simple de poids supérieur à $\theta$, on peut utiliser un parcours avec backtracking et élagage (*branch and bound*).

```python
def has_critical_lock(V, E, weights, theta):
    # E est représenté sous forme de liste d'adjacence : u -> [(v, weight), ...]
    adj = {u: [] for u in V}
    for u, v, w in E:
        adj[u].append((v, w))

    def dfs(current, start, current_weight, visited):
        if current == start and current_weight > theta and len(visited) > 1:
            return True
        for neighbor, weight in adj.get(current, []):
            if neighbor == start and current_weight + weight > theta:
                return True
            if neighbor not in visited:
                visited.add(neighbor)
                if dfs(neighbor, start, current_weight + weight, visited):
                    return True
                visited.remove(neighbor)
        return False

    for node in V:
        if dfs(node, node, 0.0, {node} ):
            return True
    return False
```
*Analyse critique* : Cet algorithme explore exponentiellement l'espace des chemins dans le pire des cas ($\mathcal{O}(n!)$), ce qui est inévitable pour un problème NP-complet en l'absence de structure particulièrement contraignante (comme l'absence de cycles ou une topologie spécifique).

---

### Correction de la Partie B

#### Question 4
L'automate produit $\mathcal{A}_1 \times \mathcal{A}_2$ est défini formellement par $\mathcal{A}_{1\times 2} = (\Sigma, Q_1 \times Q_2, (q_{0,1}, q_{0,2}), \delta_{1\times 2}, F_1 \times F_2)$ où la fonction de transition $\delta_{1\times 2}$ est définie pour tout $(q_1, q_2) \in Q_1 \times Q_2$ et $a \in \Sigma$ par :
$$\delta_{1\times 2}((q_1, q_2), a) = (\delta_1(q_1, a), \delta_2(q_2, a))$$

#### Question 5
Implémentation de la construction à la volée de l'automate produit en Python :

```python
class Automaton:
    def __init__(self, sigma, states, initial_state, transitions, final_states):
        self.sigma = sigma  # set or list of characters
        self.states = states  # set of states
        self.initial_state = initial_state
        self.transitions = transitions  # dict: (state, symbol) -> next_state
        self.final_states = final_states  # set of states

def intersect_automata(A1, A2):
    sigma = A1.sigma.intersection(A2.sigma)
    initial_state = (A1.initial_state, A2.initial_state)
    states = {initial_state}
    transitions = {}
    final_states = set()
    
    queue = [initial_state]
    visited = {initial_state}

    while queue:
        q1, q2 = queue.pop(0)
        
        if q1 in A1.final_states and q2 in A2.final_states:
            final_states.add((q1, q2))
            
        for a in sigma:
            next_q1 = A1.transitions.get((q1, a))
            next_q2 = A2.transitions.get((q2, a))
            
            if next_q1 is not None and next_q2 is not None:
                next_state = (next_q1, next_q2)
                transitions[((q1, q2), a)] = next_state
                if next_state not in visited:
                    visited.add(next_state)
                    states.add(next_state)
                    queue.append(next_state)
                    
    return Automaton(sigma, states, initial_state, transitions, final_states)
```

#### Question 6
Pour décider si $\mathcal{L}(\mathcal{A}_1) \cap \mathcal{L}(\mathcal{A}_2) = \emptyset$, il suffit de vérifier si l'ensemble des états finis de l'automate produit est accessible depuis l'état initial. On peut coupler cette vérification directement avec l'exploration à la volée (BFS/DFS) de la question précédente pour s'arrêter dès qu'un état final du produit est atteint.

```python
def is_intersection_empty(A1, A2):
    sigma = A1.sigma.intersection(A2.sigma)
    initial_state = (A1.initial_state, A2.initial_state)
    
    queue = [initial_state]
    visited = {initial_state}

    while queue:
        q1, q2 = queue.pop(0)
        
        # Condition d'acceptation de l'intersection
        if q1 in A1.final_states and q2 in A2.final_states:
            return False  # L'intersection n'est pas vide
            
        for a in sigma:
            next_q1 = A1.transitions.get((q1, a))
            next_q2 = A2.transitions.get((q2, a))
            
            if next_q1 is not None and next_q2 is not None:
                next_state = (next_q1, next_q2)
                if next_state not in visited:
                    visited.add(next_state)
                    queue.append(next_state)
                    
    return True  # L'intersection est vide
```
*Complexité* : Dans le pire des cas, l'algorithme explore l'intégralité de l'espace des paires d'états. La complexité temporelle et spatiale est donc en **$\mathcal{O}(|Q_1| \cdot |Q_2| \cdot |\Sigma|)$**, ce qui est optimal pour ce problème de vérification formelle.