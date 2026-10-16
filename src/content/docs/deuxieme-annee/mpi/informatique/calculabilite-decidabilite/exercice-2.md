---
title: "🌐 Énoncé du problème / Cadre d'étude"
description: "Fiche de cours et d'exercice CPGE."
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre de l'étude de la complexité des algorithmes, on s'intéresse aux classes de complexité $\text{P}$ et $\text{NP}$, ainsi qu'à la notion de réduction polynomiale et de complétude. Cet exercice propose d'étudier un problème classique de graphes, le problème du **Chemin Hamiltonien**.

Soit $G = (S, A)$ un graphe non orienté, où $S$ est l'ensemble des sommets et $A$ l'ensemble des arêtes. Un **chemin hamiltonien** dans $G$ est un chemin simple qui visite chaque sommet de $S$ exactement une fois.

On définit le problème décisionnel $H\text{AMILTONIAN-\text{P}\text{ATH}}$ (HP) de la manière suivante :
- **Entrée :** Un graphe non orienté $G = (S, A)$, un sommet de départ $s \in S$ et un sommet d'arrivée $t \in S$.
- **Question :** Existe-t-il un chemin hamiltonien dans $G$ allant de $s$ à $t$ ?

On rappelle qu'un problème de décision $\Pi$ appartient à la classe $\text{NP}$ s'il existe un algorithme déterministe polynomial en temps (le vérifieur) qui, étant donné une instance $I$ de $\Pi$ et un certificat $c$ de taille polynomiale en la taille de $I$, vérifie en temps polynomial si $c$ est une solution valide pour $I$.
---

### ❓ Questions progressives

1. **(Rappels et définitions)** 
   Préciser la définition de la classe $\text{P}$ et de la classe $\text{NP}$. Quelle est l'inclusion triviale entre ces deux classes ? Quel est le plus grand défi théorique ouvert associé à ces classes ?

2. **(Appartenance à NP)** 
   Démontrer que le problème $\text{H}\text{AMILTONIAN-\text{P}\text{ATH}}$ appartient à la classe $\text{NP}$. Précisez clairement la nature du certificat et la complexité du vérifieur associé.

3. **(Réduction polynomiale)** 
   Soit $\Pi_1$ et $\pi_2$ deux problèmes de décision. Rappeler la définition de « $\Pi_1$ se réduit polynomialement à $\Pi_2$ » (noté $\Pi_1 \le_p \Pi_2$). Quel est l'intérêt fondamental de cette notion pour l'étude des problèmes $\text{NP}$-complets ?

4. **(Étude d'un problème restreint)** 
   On considère un sous-problème de HP où le graphe est un DAG (Directed Acyclic Graph) orienté, noté $\text{DAG-\text{L}\text{ONGEST-\text{P}\text{ATH}}$. 
   - Montrer que le problème du plus long chemin dans un graphe général est $\text{NP}$-difficile.
   - Expliquer pourquoi, curieusement, ce même problème se résout en temps polynomial $\mathcal{O}(|S| + |A|)$ si le graphe est un DAG (en utilisant un tri topologique).

5. **(Algorithmique - Implémentation Python)** 
   Écrire une fonction Python récursive avec mémoïsation (ou programmation dynamique sur un DAG) permettant de calculer la longueur du plus long chemin à partir d'un sommet $s$ dans un DAG pondéré.

---
### 💡 Pistes & Indications méthodologiques

- **Pour la Q2 :** Pensez à ce qu'un "certificat" intuitif représente pour un chemin : une liste ordonnée de sommets. Évaluez le temps nécessaire pour vérifier si cette liste forme un chemin valide (arêtes existantes) et visite chaque sommet une et une seule fois.
- **Pour la Q3 :** La réduction doit être calculable par une machine de Turing en temps polynomial. Si $\Pi_1 \le_p \Pi_2$ et que $\Pi_2 \in \text{P}$, alors $\Pi_1 \in \text{P}$.
- **Pour la Q4 :** Pour les DAGs, l'absence de cycles permet d'appliquer une structure d'ordre (tri topologique) idéale pour la programmation dynamique, évitant l'explosion combinatoire propre aux graphes généraux.
- **Pour la Q5 :** Utilisez un dictionnaire pour stocker les résultats intermédiaires (mémoïsation) lors de l'exploration des successeurs dans le DAG.

---
### 📋 Corrigé détaillé pas à pas

#### 1. Définitions de $\text{P}$ et $\text{NP}$
- La classe **$\text{P}$** (Polynomial time) regroupe tous les problèmes de décision qui peuvent être résolus par une machine de Turing déterministe (ou un algorithme classique) en un temps $O(n^k)$ pour un entier $k$ fixé, où $n$ est la taille de l'entrée.
- La classe **$\text{NP}$** (Nondeterministic Polynomial time) regroupe les problèmes de décision pour lesquels une solution (un certificat) peut être *vérifiée* en temps polynomial par un algorithme déterministe.
- **Inclusion :** On a trivialement $\text{P} \subseteq \text{NP}$, car si on sait résoudre un problème en temps polynomial, on peut aussi vérifier une solution en temps polynomial (en ignorant le certificat et en résolvant directement le problème).
- **Problème ouvert :** Le problème fondamental non résolu en informatique théorique est de savoir si $\text{P} = \text{NP}$ ou $\text{P} \neq \text{NP}$.

---

#### 2. Appartenance de $\text{H}\text{AMILTONIAN-\text{P}\text{ATH}}$ à $\text{NP}$
Pour montrer que $\text{H}\text{AMILTONIAN-\text{P}\text{ATH}} \in \text{NP}$, construisons le vérifieur :
- **Certificat $c$ :** Une suite ordonnée de sommets $c = (v_1, v_2, \dots, v_k)$.
- **Taille du certificat :** La taille est de l'ordre de $|S|$, ce qui est polynomial par rapport à la taille de l'instance du graphe $G=(S,A)$.
- **Vérification :** Le vérifieur effectue les contrôles suivants en temps polynomial :
  1. Vérifier que $v_1 = s$ et $v_k = t$.
  2. Vérifier que $k = |S|$ (le chemin visite tous les sommets).
  3. Vérifier que les sommets du certificat sont tous distincts (utilisation d'un ensemble/hashset en $\mathcal{O}(|S|)$).
  4. Pour tout $i \in \{1, \dots, k-1\}$, vérifier que l'arête $(v_i, v_{i+1})$ appartient bien à $A$ (en $\mathcal{O}(|A|)$ ou via une matrice d'adjacence en $\mathcal{O}(1)$ par test).
L'ensemble de ces vérifications s'exécute en $\text{O}(|S|^2)$, soit un temps polynomial. Par conséquent, $\text{H}\text{AMILTONIAN-\text{P}\text{ATH}} \in \text{NP}$.

---

#### 3. Définition et utilité de la réduction polynomiale
- **Définition :** Soit $\Pi_1$ et $\Pi_2$ deux problèmes de décision. On dit que $\Pi_1$ se réduit polynomialement à $\Pi_2$ (noté $\Pi_1 \le_p \Pi_2$) s'il existe une fonction $f$ calculable par une machine de Turing en temps polynomial telle que, pour toute instance $I$ :
  $$\text{Instance } I \text{ est positive pour } \Pi_1 \iff f(I) \text{ est une instance positive pour } \Pi_2$$
- **Utilité :** Si $\Pi_1 \le_p \Pi_2$ et que $\Pi_2 \in \text{P}$, alors $\Pi_1 \in \text{P}$. De même, cela permet de propager la $\text{NP}$-complétude : si $\Pi_1$ est $\text{NP}$-difficile et $\Pi_1 \le_p \Pi_2$, alors $\Pi_2$ est également $\text{NP}$-difficile.

---

#### 4. Étude du plus long chemin : Graphe général vs DAG
- **Graphe général :** Le problème général du plus long chemin est $\text{NP}$-difficile (il contient le problème du voyageur de commerce ou le problème du chemin hamiltonien comme cas particuliers lorsque la longueur maximale recherchée est $|S|-1$).
- **Cas du DAG :** Dans un DAG (graphe orienté sans cycle), l'absence de cycles permet d'utiliser un **tri topologique** des sommets. On peut définir une relation de récurrence optimale sur les sous-problèmes, menant à un algorithme de programmation dynamique s'exécutant en $\mathcal{O}(|S| + |A|)$.

---

#### 5. Implémentation Python pour le plus long chemin dans un DAG

Voici l'algorithme utilisant la programmation dynamique avec mémoïsation (descendante) :

```python
def longest_path_dag(graph, weights, start):
    """
    Calcule la longueur du plus long chemin à partir du sommet 'start' dans un DAG.
    - graph : dict représentant les listes d'adjacence {u: [v1, v2, ...]}
    - weights : dict associant un poids à chaque arête {(u, v): poid}
    - start : sommet de départ
    """
    memo = {}

    def dfs(u):
        if u in memo:
            return memo[u]
        
        # Si le sommet n'a pas de successeurs
        if not graph.get(u):
            return 0
        
        max_dist = 0
        for v in graph[u]:
            dist = weights.get((u, v), 0) + dfs(v)
            if dist > max_dist:
                max_dist = dist
                
        memo[u] = max_dist
        return max_dist

    return dfs(start)