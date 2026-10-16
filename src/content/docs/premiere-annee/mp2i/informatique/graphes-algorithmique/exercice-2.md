---
title: 'Exercice 2 : Recherche de plus court chemin'
description: 'Problème d entraînement type concours officiel.'
---

# Problème : Navigation optimale et analyse critique sur les graphes pondérés

**Matière :** Informatique (Filière MP2I)  
**Thème :** Algorithmique des graphes — Recherche de plus court chemin  

---

## 1. Énoncé

Soit $G = (S, A)$ un graphe orienté ou non orienté, fini, dont l'ensemble des sommets est $S$ et l'ensemble des arcs/arêtes est $A$. On associe à chaque arc $u \in A$ un poids strictement positif $\text{poids}(u) \in \mathbb{R}__+$ représentant un coût (par exemple, une distance géographique ou un temps de parcours). 

Dans tout le problème, on note $n = |S}$ le nombre de sommets et $m = |A|$ le nombre d'arcs. On s'intéresse au calcul de chemins de plus faible poids (ou plus courts chemins) depuis un sommet source $s \in S$ vers tous les autres sommets du graphe.

La première partie de ce problème étudie l'algorithme classique de Dijkstra et sa complexité. La seconde partie s'intéresse à une variante dynamique avec des contraintes de ressources, et la dernière partie exige une **analyse critique des limites du modèle** face à des situations réelles.

---

## 2. Questions

### Partie I : Rappels et complexité de l'algorithme de Dijkstra
1. Rappeler la condition nécessaire sur les poids des arcs pour que l'algorithme de Dijkstra puisse s'appliquer correctement. Justifier brièvement par un contre-exemple.
2. Écrire en langage Python une fonction `dijkstra(graphe, s)` prenant en argument un graphe représenté par des listes d'adjacence et un sommet source `s`, et retournant un dictionnaire des distances minimales depuis `s`.
3. Évaluer la complexité en temps et en espace de cette fonction, en précisant la structure de données utilisée pour la file de priorité.

### Partie II : Variante avec pénalité de stationnement
On modifie le problème : traverser un sommet $u \in S \setminus \{s\}$ impose désormais un coût fixe de stationnement $\text{penalite}(u) \in \mathbb{R}__+$. Le coût d'un chemin devient la somme des poids des arcs traversés augmentée de la somme des pénalités de tous les sommets intermédiaires visités.

4. Expliquer comment transformer le graphe initial $G = (S, A)$ en un nouveau graphe $G' = (S', A')$ de taille linéaire par rapport à $G$ pour se ramener à un problème de plus court chemin classique sans pénalité sur les sommets.
5. Déduire la complexité algorithmique pour résoudre ce nouveau problème.

### Partie III : Analyse critique des limites du modèle
6. **Analyse critique :** Dans le cadre d'une application de cartographie routière réelle (type GPS), le modèle mathématique du graphe pondéré statique présente de nombreuses limites. Rédiger une analyse critique argumentée abordant au moins trois limites fondamentales de ce modèle (dynamique temporelle, incertitude, multi-critéricité).

---

## 3. Pistes et Indications

* **Q1 :** Penser à l'apparition de cycles de poids négatif ou simplement d'arcs négatifs invalidant l'hypothèse de croissance monotone des distances extraites de la file.
* **Q2 :** Utiliser le module `heapq` de Python pour implémenter la file de priorité.
* **Q4 :** Pour chaque sommet $u$ du graphe original, songer à le "scinder" en deux sommets dans $G'$ pour dissocier le coût d'accès à l'arc et le coût de traversée du sommet.
* **Q6 :** Pour la multi-critéricité, rappeler qu'optimiser à la fois le temps, le coût péager et la distance ne forme pas un ordre total simple.

---

## 4. Corrigé détaillé

### Partie I

**1.** L'algorithme de Dijkstra requiert que **tous les poids des arcs soient positifs ou nuls** ($\forall u \in A, \text{poids}(u) \ge 0$).  
Contre-exemple: * Si un arc a un poids strictement négatif, un sommet déjà extrait de la file de priorité avec une distance étiquetée comme "minimale" pourrait voir sa distance améliorée ultérieurement par l'emprunt de cet arc négatif. L'algorithme, avide (*greedy*), ne remet pas en cause les sommets déjà traités, ce qui conduit à un résultat erroné.

**2.** Implémentation en Python :
```python
import heapq

def dijkstra(graphe, s):
    # graphe est un dictionnaire: sommet -> liste de tuples (voisin, poids)
    distances = {sommet: float('inf') for sommet in graphe}
    distances[s] = 0.0
    file_prio = [(0.0, s)]
    
    while file_prio:
        d_u, u = heapq.heappop(file_prio)
        
        if d_u > distances[u]:
            continue
            
        for v, poids in graphe[u]:
            alt = d_u + poids
            if alt < distances[v]:
                distances[v] = alt
                heapq.heappush(file_prio, (alt, v))
                
    return distances
```

**3.** En utilisant un tas min (`heapq`), chaque sommet est inséré et extrait au plus une fois ($\mathcal{O}(\log n)$ par opération), et chaque arc est examiné une fois ($\mathcal{O}(\log n)$ pour la mise à jour éventuelle dans le tas). 
* **Complexité en temps :** $\mathcal{O}((n + m) \log n)$.
* **Complexité en espace :** $\mathcal{O}(n + m)$ pour stocker le graphe, les distances et la file de priorité.

---

### Partie II

**4.** Pour tout sommet $u \in S$, on le décompose en deux sommets $u_{\text{entree}}$ et $u_{\text{sortie}}$ reliés par un arc dirigé de poids $\text{penalite}(u)$. 
* Tout arc entrant $(v, u)$ dans $G$ devient un arc $(v_{\text{sortie}}, u_{\text{entree}})$ de poids $\text{poids}((v, u))$.
* L'ensemble des nouveaux sommets est $S' = \{u_{\text{entree}}, u_{\text{sortie}} \mid u \in S\}$, soit $|S'| = 2n$.
* Le nombre d'arcs est borné par $m + n$, ce qui reste linéaire en la taille du graphe initial.

**5.** Le graphe $G'$ ainsi construit ne possède que des poids positifs (les pénalités et les poids des arcs originaux sont $\ge 0$). On peut donc appliquer l'algorithme de Dijkstra standard sur $G'$. La complexité temporelle reste en $\mathcal{O}((2n + m + n) \log(2n))$, soit **$\mathcal{O}((n + m) \log n)$**.

---

### Partie III

**6. Analyse critique des limites du modèle :**

Le modèle du graphe pondéré statique, bien qu'élégant et fondement de l'algorithmique combinatoire, présente des limites sévères lorsqu'on l'applique au monde réel (ex. : GPS routier) :

1. **La dynamique temporelle et l'asynchronisme :** Dans la réalité, les poids (les temps de parcours) ne sont pas des constantes statiques. Ils dépendent du trafic, des heures de pointe, des feux tricolores ou des conditions météorologiques. Un coût évalué à l'instant $t_0$ n'est plus valide à l'instant $t_0 + \Delta t$ où l'véhicule arrive sur l'arc. Le graphe devient dynamique et dépendant du temps (*time-dependent graphs*), brisant la propriété élémentaire de sous-structure optimale de Bellman.
2. **L'incertitude et la stochastique :** Les temps de trajet ne sont pas déterministes mais aléatoires (risques d'accidents, pannes). Le modèle déterministe ignore la variance des temps de parcours. Des approches probabilistes (graphes stochastiques) ou robustes sont nécessaires pour minimiser non pas l'espérance mathématique, mais le risque d'arriver en retard.
3. **La multi-critéricité :** Le conducteur cherche souvent à optimiser plusieurs objectifs contradictoires simultanément : minimiser le temps, minimiser le coût financier (péages), et minimiser la consommation énergétique (carburant/électricité). Mathématiquement, il n'existe pas de relation d'ordre total sur $\mathbb{R}^3$. Le problème se ramène à la recherche de l'ensemble des solutions non dominées (frontière de Pareto), rendant les algorithmes de plus court chemin polynomiaux classiques inopérants (le problème devient souvent NP-difficile).