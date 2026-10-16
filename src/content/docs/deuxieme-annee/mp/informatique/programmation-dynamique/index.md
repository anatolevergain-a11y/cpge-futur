---
title: 'Cours : Algorithmique : Programmation dynamique'
description: 'Synthèse officielle du cours et démonstrations théoriques pour CPGE MP.'
---

## 📌 1. Définitions & Cadre d'étude

La **programmation dynamique** est une méthode algorithmique conçue pour résoudre des problèmes d'optimisation ou de dénombrement. Elle s'applique aux problèmes présentant les deux propriétés structurelles fondamentales suivantes :

1. **La sous-structure optimale** : Une solution optimale du problème global se déduit de solutions optimales de sous-problèmes indépendants ou chevauchants.
2. **La présence de sous-problèmes redondants** : Un algorithme récursif naïf évaluerait plusieurs fois les mêmes sous-problèmes, conduisant à une complexité temporelle généralement exponentielle.

### Cadre formel

Soit $\mathcal{P}$ un problème paramétré par un ensemble de variables (par exemple, un entier $n$, un couple d'indices $(i,j)$, ou un poids maximal $W$). 
On note $val(s)$ la valeur de la solution optimale du sous-problème $s$. 
L'approche dynamique consiste à :
- Définir récursivement $val(s)$ en fonction des sous-problèmes adjacents (relation de récurrence de Bellman).
- Stocker les résultats intermédiaires dans une structure de données (tableau, dictionnaire) pour éviter les recalculs.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème de décomposition de Bellman

Soit $S$ l'ensemble des sous-problèmes d'un problème d'optimisation. S'il existe une fonction de transition $\phi$ telle que pour tout $s \in S$ :
$$val(s) = \underset{s' \in \text{succ}(s)}{\text{opt}} \left( \text{cout}(s, s') + val(s') \right)$$
Alors le calcul global peut être effectué en temps polynomial par rapport au nombre de sous-problèmes et au degré sortant moyen dans le graphe des dépendances.

#### Démonstration (par récurrence bien fondée)

Considérons le graphe orienté $G = (S, E)$ où un arc $(s, s') \in E$ existe si le calcul de $val(s)$ requiert $val(s')$. Puisque le problème est acyclique (condition nécessaire pour l'évaluation séquentielle ou mémorisée), $G$ est un DAG (Directed Acyclic Graph).

1. **Initialisation** : Pour les sources du DAG (sous-problèmes triviaux, par exemple $val(0)$ ou $val(\emptyset)$), la valeur est connue en $\mathcal{O}(1)$.
2. **Hérédité** : Supposons que pour tout prédécesseur $s'$ d'un sommet $s$, $val(s')$ a été calculé de manière exacte et optimale. Par hypothèse de récurrence, l'application de l'opérateur $\text{opt}$ sur l'ensemble $\text{succ}(s)$ garantit l'optimalité de $val(s)$.
3. **Conclusion** : Par induction sur le rang topologique dans le DAG, tous les sommets de $S$ sont calculés de manière optimale. $\blacksquare$

---

## 💡 3. Méthodes de calcul & Algorithmes

Il existe deux approches principales pour implémenter la programmation dynamique :

### A. L'approche ascendante (Bottom-Up) ou Itérative
On calcule les sous-problèmes du plus petit au plus grand, en remplissant une table de dimension $d$. C'est l'approche privilégiée en Python en CPGE pour éviter les dépassements de pile (*RecursionError*).

### B. L'approche descendante (Top-Down) avec mémoïsation (*Memoization*)
On écrit une fonction récursive classique, mais on stocke chaque résultat dans un dictionnaire ou un tableau global (souvent initialisé à `None`). Si le sous-problème a déjà été résolu, on retourne sa valeur en $\mathcal{O}(1)$.

---

### Exemple canonique : Le problème du sac à dos 0-1

Soit $n$ objets, de poids respectifs $w_i \in \mathbb{N}^*$ et de valeurs $v_i \in \mathbb{N}^*$ pour $i \in \{1, \dots, n\}$. Soit $W$ la capacité maximale du sac.

Soit $M \in \mathcal{M}_{n+1, W+1}(\mathbb{N})$ la matrice où $M[i][w$ représente la valeur maximale atteignable avec un sous-ensemble des $i$ premiers objets et une capacité $w$.

Relation de récurrence :
$$M[i][w] = \begin{cases} 
0 & \text{si } i = 0 \text{ ou } w = 0 \\
M[i-1][w] & \text{si } w_i > w \\
\max\left( M[i-1][w], \, v_i + M[i-1][w - w_i] \right) & \text{si } w_i \le w 
\end{cases}$$

#### Implémentation en Python

```python
def sac_a_dos(poids: list[int], valeurs: list[int], W: int) -> int:
    """Résout le problème du sac à dos 0-1 par programmation dynamique ascendante.
    
    Args:
        poids: Liste des poids des objets (entiers strictement positifs).
        valeurs: Liste des valeurs des objets.
        W: Capacité maximale du sac.
        
    Returns:
        La valeur maximale transportable.
    """
    n = len(poids)
    # M est une matrice (n+1) x (W+1) initialisée à 0
    # M[i][w] appartient à M_{n+1, W+1}(N)
    M = [[0 for _ in range(W + 1)] for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        w_i = poids[i - 1]
        v_i = valeurs[i - 1]
        for w in range(W + 1):
            if w_i > w:
                M[i][w] = M[i - 1][w]
            else:
                M[i][w] = max(M[i - 1][w], v_i + M[i - 1][w - w_i])
                
    return M[n][W]
```

**Complexité** : 
- **Temporelle** : $\mathcal{O}(n \cdot W)$
- **Spatiale** : $\mathcal{O}(n \cdot W)$ (réductible à $\mathcal{O}(W)$ en ne conservant que la ligne précédente).

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confusion entre complexité polynomiale et pseudo-polynomiale** : 
   Pour le sac à dos, la complexité $\mathcal{O}(n \cdot W)$ dépend de la *valeur* de $W$ et non de sa taille en bits ($\log_2(W)$). C'est un algorithme **pseudo-polynomial**. Si $W$ est grand (par exemple de l'ordre de $2^{32}$), l'algorithme est en réalité exponentiel par rapport à la taille de l'entrée.
2. **Oubli des conditions aux limites** : 
   Erreurs d'indices (hors limites `IndexError`) lors de l'initialisation des lignes et colonnes de base (cas $i=0$ ou $w=0$).
3. **Sens des boucles en approche ascendante** : 
   Ne pas respecter l'ordre topologique des dépendances. Si le calcul de $M[i][w$ dépend de $M[i-1][\dots]$, la boucle extérieure doit impérativement parcourir $i$ de manière croissante (ou décroissante selon le cas).
4. **Problèmes de récursion en Python** : 
   Utiliser l'approche top-down sans augmenter la limite de récursion (`sys.setrecursionlimit`) pour de grands graphes de sous-problèmes, ou oublier la mémoïsation menant à une complexité exponentielle masquée.