---
title: 'Exercice 2 : Algorithmes gloutons et arbres couvrants de poids minimum (Kruskal, Prim)'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre du déploiement d’un réseau de capteurs environnementaux à très grande échelle pour la surveillance de massifs forestiers, on cherche à interconnecter $N$ stations de mesure (relais ou capteurs) par des liaisons radio ou filaires. 

Chaque liaison potentielle entre deux stations $u$ et $v$ présente un coût d'installation (exprimé en milliers d'euros) noté $w(u, v) > 0$. Ce coût intègre la distance géographique, les contraintes topographiques et la consommation énergétique prévisionnelle du lien. L’objectif est de concevoir un réseau couvrant l'ensemble des $N$ stations (le graphe doit être connexe et sans cycle, c'est-à-dire un arbre) tout en minimisant strictement le coût global d'investissement.

Ce problème se modélise mathématiquement par la recherche d’un **Arbre Couvrant de Poids Minimum** (ACPM, ou *Minimum Spanning Tree* - MST) dans un graphe non orienté, connexe et pondéré $G = (V, E, w)$, où $V$ est l'ensemble des sommets ($|V| = N$), $E$ l'ensemble des arêtes ($|E| = M$), et $w : E \to \mathbb{R}_+$ la fonction de poids.

Cependant, le modèle purement mathématique souffre de limites physiques et opérationnelles :
1. **Saturation des nœuds :** Un arbre couvrant minimise le nombre d'arêtes ($N-1$), ce qui concentre le trafic sur certains sommets (les degrés maximaux de l'arbre peuvent être élevés), augmentant le risque de goulots d'étranglement ou de panne critique.
2. **Statique vs Dynamique :** Le coût $w(u,v)$ est supposé fixe et connu, alors que l'environnement forestier est soumis à des variations (croissance de la végétation atténuant les signaux radio, pannes de capteurs).

---

### ❓ Questions progressives

#### Partie I : Structures de données et préliminaires
1. **(Rappel / Complexité)** On souhaite implémenter les algorithmes sur des graphes creux (où $M = O(N)$) et denses (où $M = O(N^2)$). Rappeler la complexité en temps dans le pire des cas de l'algorithme de Kruskal et de l'algorithme de Prim selon le choix de la structure de données (listes d'adjacence, files de priorité, structures d'union-find).
2. **(Union-Find)** Décrire brièvement la structure de données "Union-Find" (ou *Disjoint-Set Data Structure*) avec les optimisations par *rang* (ou hauteur) et *compression de chemin*. Justifier pourquoi sa complexité amortie par opération est de l'ordre de l'inverse de la fonction d'Ackermann, notée $\alpha(N)$.

#### Partie II : Implémentation de l'algorithme de Kruskal en Python
3. Écrire une fonction Python `kruskal(graphe)` qui prend en entrée un graphe sous forme de liste d'arêtes triées ou non, et renvoie la liste des arêtes constituant l'ACPM. On supposera l'utilisation de la classe `UnionFind` pré-existante dotée des méthodes `trouver(i)` et `unir(i, j)`.

```python
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rang = [0] * n

    def trouver(self, i):
        if self.parent[i] == i:
            return i
        self.parent[i] = self.trouver(self.parent[i]) # Compression de chemin
        return self.parent[i]

    def unir(i, j):
        # À compléter ou admettre
        pass
```

#### Partie III : Analyse critique du modèle et contraintes d'ingénierie
4. **(Analyse critique)** On suppose que le graphe représente un réseau de $N = 10^5$ capteurs. L'algorithme de Kruskal nécessite le tri préalable de toutes les arêtes de $E$. 
   - Exprimer la complexité spatiale et temporelle de l'étape de tri si $M = 3 \cdot 10^5$.
   - Discuter de la pertinence de l'algorithme de Kruskal face à Prim si le graphe est très dense ($M \approx \frac{N(N-1)}{2}$).
5. **(Limites physiques du modèle)** Supposons que l'arbre couvrant obtenu possède un sommet de degré $d_{\max} = 50$ (c'est-à-dire qu'un capteur central relaie 50 autres capteurs). En déduire une limite critique du modèle d'ACPM pour l'ingénierie des réseaux et proposer une modification mathématique du problème pour contraindre le degré maximal des sommets à une valeur $D \le 4$. *Quel est l'impact théorique sur la complexité algorithmique ?*

---

### 💡 Pistes & Indications

- **Indice 1 (Kruskal) :** L'algorithme de Kruskal procède par ajout glouton d'arêtes de poids croissant, à condition de ne pas créer de cycle. La structure Union-Find permet de tester l'appartenance à une même composante connexe en temps quasi-constant.
- **Indice 2 (Tris) :** Pour $M$ arêtes, le tri initial s'effectue en $O(M \log M)$ avec un tri fusion ou intro-sort. Comme dans un graphe $M \le N^2$, $\log M = O(\log N)$.
- **Indice 3 (Degrés) :** Limiter le degré d'un arbre couvrant transforme le problème en un problème NP-difficile (problème de l'arbre couvrant à degré contraint), interdisant l'utilisation directe d'un algorithme glouton simple optimal.

---

### 📋 Corrigé détaillé et analyse des résultats

#### Corrigé - Partie I_1. **Complexités :**
   - **Kruskal :** Trie les arêtes en $O(M \log M)$. Utilise Union-Find sur $N$ sommets pour $M$ arêtes : $O(M \alpha(N))$. Complexité totale : $\mathcal{O}(M \log M + M \alpha(N)) = \mathcal{O}(M \log N)$.
   - **Prim :** Avec un tas binaire (file de priorité), la complexité est de $\mathcal{O}((N + M) \log N)$. Avec un tas de Fibonacci, elle descend à $\mathcal{O}(M + N \log N)$. Prim est donc plus performant sur les graphes denses où $M \sim N^2$ (donnant $\mathcal{O}(N^2)$ avec Fibonacci contre $\mathcal{O}(N^2 \log N)$ pour Kruskal).

2. **Union-Find :**
   La structure gère une partition d'éléments en ensembles disjoints. 
   - L'*union par rang* attache l'arbre le moins haut sous la racine de l'arbre le plus haut, évitant l'دe génération de structures filiformes.
   - La *compression de chemin* lors de l'appel `trouver(i)` fait pointer directement chaque nœud visité vers la racine. 
   La combinaison de ces deux optimisations ramène le temps de $m$ opérations sur $n$ éléments à $\mathcal{O}(m \alpha(n))$, où $\alpha$ est l'inverse de la fonction d'Ackermann, une fonction croissante extrêmement lentement (pour toute taille de données observable dans l'univers, $\alpha(n) \le 4$).

#### Corrigé - Partie II
3. **Implémentation de Kruskal :**

```python
def kruskal(n, aretes):
    """
    n : nombre de sommets (0 à n-1)
    aretes : liste de tuples (poids, u, v)
    """
    # Tri des arêtes par poids croissant
    aretes_tries = sorted(aretes, key=lambda x: x[0])
    uf = UnionFind(n)
    acpm = []
    
    for poids, u, v in aretes_tries:
        # Si u et v ne sont pas dans la même composante connexe
        if uf.trouver(u) != uf.trouver(v):
            uf.unir(u, v) # À implémenter avec l'union par rang
            acpm.append((poids, u, v))
            if len(acpm) == n - 1:
                break
                
    return acpm
```

*Note sur `unir` :*
```python
    def unir(self, i, j):
        racine_i = self.trouver(i)
        racine_j = self.trouver(j)
        if racine_i != racine_j:
            if self.rang[racine_i] < self.rang[racine_j]:
                self.parent[racine_i] = racine_j
            elif self.rang[racine_i] > self.rang[racine_j]:
                self.parent[racine_j] = racine_i
            else:
                self.parent[racine_j] = racine_i
                self.rang[racine_i] += 1
```

#### Corrigé - Partie III : Analyse critique et limites du modèle
4. **Analyse de complexité pour $N = 10^5$ et $M = 3 \cdot 10^5$ :**
   - **Espace :** Stocker $3 \cdot 10^5$ arêtes avec leurs poids nécessite quelques dizaines de mégaoctets, tout à fait acceptable pour une station de calcul moderne.
   - **Temps :** Le tri des arêtes coûte $\mathcal{O}(M \log M) \approx 3 \cdot 10^5 \times \log_2(3 \cdot 10^5) \approx 5,5 \cdot 10^6$ opérations élémentaires, exécuté en quelques millisecondes en Python. 
   - *Densité :* Si $M \approx N^2 / 2 = 5 \cdot 10^9$ (graphe complet), $M \log M$ devient prohibitif ($> 10^{11}$ opérations). L'algorithme de Prim avec tas de Fibonacci ou une matrice d'adjacence adaptée serait préférable.

5. **Limites physiques et critique d'ingénierie :**
   - **Goulot d'étranglement :** Un degré $d_{\max} = 50$ signifie qu'un capteur physique unique relaie les flux de 50 autres voisins. En pratique, ce nœud subira une saturation de sa bande passante radio, une déplétion rapide de sa batterie (consommation énergétique accrue par le routage) et constituera un **point de défaillance unique** (*Single Point of Failure*). Si ce capteur tombe en panne, 50 autres sont isolés.
   - **Modification du modèle :** Le problème de l'arbre couvrant avec contrainte de degré (où $\deg(v) \le D$ pour tout $v \in V$) est un problème classique d'optimisation combinatoire qui s'avère **NP-difficile** dès que $D \ge 2$ (le cas $D=2$ étant le problème du voyageur de commerce hamiltonien). 
   - **Conséquence algorithmique :** On ne peut plus garantir une solution exacte en temps polynomial via un simple algorithme glouton. Les ingénieurs doivent recourir à des métaheuristiques (recuit simulé, algorithmes génétiques) ou à de la programmation linéaire en nombres entiers (PLNE) pour approcher la solution optimale sous contraintes opérationnelles réelles.