---
title: 'Problème type concours : Optimisation de routage multi-objectifs et détection d arbitrage'
description: 'Problème d entraînement type concours (Mines-Ponts / Centrale-Supélec) - Filière MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre de la modernisation d'un réseau de télécommunications mondial, on modélise le système par un graphe orienté $G = (V, E)$, où $V$ représente l'ensemble des $n$ routeurs et $E$ l'ensemble des $m$ liens de communication unidirectionnels. 

La qualité de service sur un lien $(u, v) \in E$ est caractérisée par deux métriques :
1. **La latence** (en millisecondes), représentée par un poids strictement positif $w_l(u, v) > 0$.
2. **Le coût financier** (en centimes d'euro), représenté par un poids $w_c(u, v) \in \mathbb{R}$. Ce coût peut exceptionnellement être négatif (par exemple, des remises sur volume ou des subventions de trafic).

L'administrateur du réseau souhaite résoudre trois problématiques distinctes mais liées, faisant appel aux algorithmes fondamentaux de plus courts chemins.

---

### ❓ Questions progressives

#### Partie I : Latence minimale et absence de cycles absorbants
1. Justifier brièvement pourquoi l'algorithme de Dijkstra est adapté pour calculer les plus courts chemins en latence depuis un routeur source $s \in V$ vers tous les autres sommets, et rappeler sa complexité temporelle en utilisant une file de priorité d'arités optimisées (tas de Fibonacci ou binaire standard).
2. On soupçonne que certains sous-réseaux mal configurés permettent des boucles de rétro-facturation (cycles de poids négatif pour $w_c$). Quel algorithme doit-on employer pour détecter de tels cycles dans le graphe $(V, E)$ muni des poids $w_c$ ? Préciser sa complexité.

#### Partie II : Implication en Python de Bellman-Ford optimisé
3. Écrire une fonction Python `a_cycle_negatif(n, aretes)` prenant en argument le nombre de sommets $n$ (identifiés de $0$ à $n-1$) et la liste des arêtes `aretes` sous la forme de tuples `(u, v, poids)`, et renvoyant un booléen indiquant la présence d'un cycle de poids strictement négatif accessible depuis le sommet $0$.

#### Partie III : Matrice des distances et chemins de toutes paires
4. Pour des analyses de robustesse, on souhaite connaître simultanément les plus courts chemins entre *toutes* les paires de routeurs concernant la métrique $w_l$. Quel algorithme du cours permet de résoudre ce problème en $O(n^3)$ ? Écrire sa spécification et donner son invariant de boucle.

---

### 💡 Pistes & Indications méthodologiques

- **Partie I :** Pensez aux hypothèses nécessaires pour Dijkstra (positivité des poids) et au théorème fondamental de Bellman-Ford concernant les relaxations successives.
- **Partie II :** L'algorithme de Bellman-Ford consiste à relâcher toutes les arêtes $n-1$ fois. Une $n$-ième passe permet de détecter les anomalies. Veillez à bien propager l'accessibilité depuis la source si nécessaire, ou à appliquer l'algorithme globalement sur toutes les arêtes si le graphe est supposé fortement connexe.
- **Partie III :** Pour Floyd-Warshall, l'invariant repose sur la longueur minimale des chemins n'utilisant comme sommets intermédiaires que l'ensemble $\{0, 1, \dots, k-1\}$ à l'étape $k$.

---

### 📋 Corrigé détaillé pas à pas

#### Partie I_1. **Adaptation de Dijkstra :**
   L'algorithme de Dijkstra s'applique car les poids de latence $w_l(u, v)$ sont **strictement positifs**. Cette condition garantit l'optimalité locale des choix gloutons (propriété de sous-structure optimale). 
   * **Complexité :** En utilisant un tas binaire standard, la complexité temporelle est de $\mathcal{O}((m + n) \log n)$. Avec un tas de Fibonacci, elle descend théoriquement à $\mathcal{O}(m + n \log n)$.

2. **Détection de cycles négatifs :**
   Pour détecter des cycles de poids négatifs selon la métrique $w_c$, l'algorithme de référence est l'algorithme de **Bellman-Ford**. 
   * **Complexité :** $\mathcal{O}(n \cdot m)$.

---

#### Partie II

3. **Implémentation Python de Bellman-Ford :**

```python
def a_cycle_negatif(n: int, aretes: list[tuple[int, int, float]]) -> bool:
    """
    Détecte la présence d'un cycle de poids négatif accessible depuis le sommet 0
    via l'algorithme de Bellman-Ford.
    """
    # Initialisation des distances à l'infini, source 0 à 0
    dist = [float('inf')] * n
    dist[0] = 0.0

    # Relaxation pendant n - 1 étapes
    for _ in range(n - 1):
        modifie = False
        for u, v, poids in aretes:
            if dist[u] + poids < dist[v]:
                dist[v] = dist[u] + poids
                modifie = True
        if not modifié:
            break  # Optimisation hâtive si aucune mise à jour

    # Nième passe pour détecter un cycle absorbant
    for u, v, poids in aretes:
        if dist[u] + poids < dist[v]:
            return True  # Un cycle absorbant existe et est accessible

    return False
```

---

#### Partie III

4. **Algorithme de Floyd-Warshall :**
   * **Algorithme :** Floyd-Warshall.
   * **Spécification :** Étant donné une matrice de poids adjacents $W$ de taille $n \times n$ (avec $W[i][i] = 0$ et $W[i][j] = w_l(i, j)$ s'il y a une arête, $+\infty$ sinon), l'algorithme calcule une matrice $D$ telle que $D[i][j]$ est la longueur du plus court chemin de $i$ vers $j$.
   * **Invariant de boucle :** À l'itération $k$ (avec $k \in \{0, \dots, n-1\}$), la matrice $D^{(k)}$ contient les distances minimales entre tout couple $(i, j)$ en n'utilisant que des sommets intermédiaires pris dans l'ensemble $\{0, 1, \dots, k-1\}$.

```python
def floyd_warshall(n: int, W: list[list[float]]) -> list[list[float]]:
    # Copie de la matrice initiale
    D = [row[:] for row in W]
    
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if D[i][k] + D[k][j] < D[i][j]:
                    D[i][j] = D[i][k] + D[k][j]
                    
    return D
```
* **Complexité :** $\mathcal{O}(n^3)$ en temps et $\mathcal{O}(n^2)$ en espace, ce qui est optimal pour un graphe dense ou lorsque l'on cherche toutes les paires de plus courts chemins.