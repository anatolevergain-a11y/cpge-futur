---
title: 'Exercice 1 : Parcours en largeur (BFS) et profondeur (DFS)'
description: 'Problème d entraînement type concours officiel.'
---

# Problème : Exploration avancée de graphes orientés et applications

**Matière :** Informatique (Filière MP2I)  
**Thème :** Algorithmique des graphes, Parcours en largeur (\text{BFS}) et en profondeur (\text{DFS})

---

## 1. Énoncé

Soit $G = (S, A)$ un graphe orienté, où $S$ représente l'ensemble des sommets de cardinal $n = |S|$ et $A$ l'ensemble des arcs de cardinal $m = |A|$. On suppose que le graphe est représenté en mémoire par des listes d'adjacence : pour chaque sommet $u \in S$, on dispose de la liste de ses successeurs notée $\Gamma(u)$.

L'objectif de ce problème est d'étudier l'implémentation, la complexité et des extensions classiques des deux algorithmes fondamentaux de parcours de graphes : le parcours en largeur ($\text{Breadth-First Search}$ - $\text{BFS}$) et le parcours en profondeur ($\text{Depth-First Search}$ - $\text{DFS}$). Enfin, une analyse critique des limites de ces modèles en mémoire et en temps sera menée.

---

## 2. Questions

### Partie I : Préliminaires et Parcours en Largeur ($\text{BFS}$)
1. Rappeler la structure de données utilisée pour implémenter un parcours en largeur et préciser la complexité temporelle et spatiale de l'algorithme $\text{BFS}$ en fonction de $n$ et $m$ dans le pire des cas.
2. Écrire une fonction en OCaml ou en Python (au choix, on adoptera Python pour la suite) `bfs(graphe, source)` qui renvoie un dictionnaire ou un tableau des distances minimales (en nombre d'arcs) depuis un sommet `source` vers tous les autres sommets accessibles.

### Partie II : Parcours en Profondeur ($\text{DFS}$) et Classification des Arcs
3. Le parcours en profondeur utilise classiquement une pile (explicite ou implicite via la récursivité). Écrire une fonction récursive `dfs_rec(graphe, u, visites)` effectuant un parcours en profondeur à partir du sommet $u$.
4. On souhaite dater l'entrée et la sortie de chaque sommet lors d'un $\text{DFS}$. Pour tout sommet $u$, on définit :
   - $\text{date\_dec}(u)$ : le timestamp lors de la première visite de $u$.
   - $\text{date\_fin}(u)$ : le timestamp lorsque tous les successeurs de $u$ ont été explorés.
   Modifier la fonction $\text{DFS}$ pour calculer ces dates.

### Partie III : Analyse critique et limites du modèle
5. **Analyse critique :** Discuter des limites de ces algorithmes sur des graphes massifs (par exemple, le web entier ou le graphe des réseaux sociaux). Que se passe-t-il en termes de cache CPU, de saturation mémoire, et de validité du modèle statique face à des graphes dynamiques ?

---

## 3. Pistes de résolution

- **Pour le BFS :** Penser à utiliser une file ($\text{queue}$) pour garantir l'ordre d'exploration par niveaux croissants de distance. Un tableau de booléens `visite` évitera les boucles infinies.
- **Pour le DFS :** Utiliser un compteur global ou passé par référence pour incrémenter les dates d'entrée et de sortie. La classification des arcs (arbres, retour, avance, transverses) repose entièrement sur ces dates et l'état des sommets.
- **Pour la critique :** S'interroger sur la localité des données en mémoire ($\text{cache locality}$ des listes chaînées vs tableaux) et sur la récursivité (risque de dépassement de pile $\text{stack overflow}$).

---

## 4. Corrigé pas à pas

### Partie I : Parcours en Largeur ($\text{BFS}$)

**Question 1 :**
Le $\text{BFS}$ utilise une **file** (structure $\text{FIFO}$ : $\text{First In, First Out}$). 
- **Complexité temporelle :** $\mathcal{O}(n + m)$ car chaque sommet est enfilé/défilé une fois, et chaque arc est examiné une fois.
- **Complexité spatiale :** $\mathcal{O}(n)$ pour stocker la file, le tableau des distances et le tableau des visites.

**Question 2 :**
```python
from collections import deque

def bfs(graphe, source):
    distances = {source: 0}
    file = deque([source])
    visites = {source}
    
    while file:
        u = file.popleft()
        for v in graphe.get(u, []):
            if v not in visites:
                visites.add(v)
                distances[v] = distances[u] + 1
                file.append(v)
                
    return distances
```

---

### Partie II : Parcours en Profondeur ($\text{DFS}$) et Horodatage

**Question 3 :**
```python
def dfs_rec(graphe, u, visites=None):
    if visites is None:
        visites = set()
    visites.add(u)
    for v in graphe.get(u, []):
        if v not in visites:
            dfs_rec(graphe, v, visites)
    return visites
```

**Question 4 :**
Introduisons un compteur global pour gérer le temps logique :

```python
def dfs_horodatage(graphe):
    date_dec = {}
    date_fin = {}
    temps = 0
    
    def explorer(u):
        nonlocal temps
        temps += 1
        date_dec[u] = temps
        for v in graphe.get(u, []):
            if v not in date_dec:
                explorer(v)
        temps += 1
        date_fin[u] = temps

    for sommet in graphe:
        if sommet not in date_dec:
            explorer(sommet)
            
    return date_dec, date_fin
```

---

### Partie III : Analyse critique et limites du modèle

**Question 5 :**
L'application naïve des algorithmes $\text{BFS}$ et $\text{DFS}$ sur des graphes massifs $(\text{ex}: n \approx 10^9, m \approx 10^{11})$ se heurte à plusieurs obstacles fondamentaux :

1. **Limites spatiales et mémoire RAM :**
   Les listes d'adjacence implémentées sous forme de pointeurs en mémoire (objets dynamiques en Python ou structures chaînées en C) génèrent une fragmentation mémoire importante. Le surcoût mémoire par sommet et par arc (pointeurs, métadonnées des allocations) rend le stockage d'un graphe à l'échelle du Web impossible sur une machine standard. On doit recourir à des représentations compressées (comme le format $\text{CSR}$ - *Compressed Sparse Row*) ou des architectures distribuées (ex: $\text{Pregel}$, $\text{MapReduce}$).

2. **Déficit de localité cache ($\text{Cache Locality}$) :**
   Dans une liste d'adjacence classique, les successeurs d'un sommet sont éparpillés en mémoire. Lors de l'exploration ($\text{BFS}$ ou $\text{DFS}$), les accès mémoire provoquent de nombreux défauts de cache ($\text{cache misses}$), ralentissant considérablement l'exécutable, la latence RAM devenant le goulot d'étranglement principal devant les calculs CPU.

3. **Profondeur de récursion et pile d'exécution :**
   Le $\text{DFS}$ récursif s'appuie sur la pile d'appels système. Pour un graphe linéaire de taille $n = 10^6$, le programme subit inévitablement un dépassement de pile ($\text{Stack Overflow}$). En pratique, il est impératif d'implémenter le $\text{DFS}$ de manière **itérative** à l'aide d'une pile explicite allouée sur le tas ($\text{heap}$).

4. **Invalidité du modèle statique :**
   Le modèle suppose $G$ figé pendant le parcours. Sur des flux de données en temps réel (réseaux sociaux, trafic routier), le graphe évolue constamment pendant l'exécution de l'algorithme, rendant les garanties théoriques (comme l'optimalité des distances en $\text{BFS}$) caduques sans mécanisme de verrouillage ou de mise à jour incrémentale.