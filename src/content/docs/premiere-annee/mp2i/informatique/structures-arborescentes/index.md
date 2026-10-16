---
title: 'Cours : Arbres et graphes'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

Un graphe est une structure de données fondamentale en informatique, modélisant des relations binaires entre des entités.

### A. Graphes non orientés
Un graphe non orienté $G$ est un couple $G = (V, E)$ où :
* $V$ est un ensemble fini dont les éléments sont appelés **sommets** (ou *vertices*).
* $E$ est un ensemble de paires de sommets distincts, appelés **arêtes** (ou *edges*). On note usuellement $|V| = n$ et $|E| = m$.

### B. Graphes orientés
Un graphe orienté $G$ est un couple $G = (V, A)$ où :
* $V$ est l'ensemble des sommets.
* $A$ est un ensemble de couples de sommets, appelés **arcs** (ou *directed edges*). Un arc $(u, v)$ est orienté de $u$ (source) vers $v$ (but).

### C. Vocabulaire de base
* **Adjacence** : Deux sommets $u$ et $v$ sont adjacents s'il existe une arête $\{u, v\}$ (ou un arc $(u, v)$).
* **Degré** : Dans un graphe non orienté, le degré d'un sommet $u$, noté $\text{deg}(u)$, est le nombre de sommets adjacents à $u$. Dans un graphe orienté, on distingue le **demi-degré intérieur** $\text{deg}^-(u)$ (nombre d'arcs entrant en $u$) et le **demi-degré extérieur** $\text{deg}^+(u)$ (nombre d'arcs sortants de $u$).
* **Chemin** : Une suite de sommets $(v_0, v_1, \dots, v_k)$ telle que pour tout $i \in \{0, \dots, k-1\}$, $(v_i, v_{i+1}) \in E$ (ou $A$). La *longueur* du chemin est $k$.
* **Cycle** : Un chemin dont l'origine et l'extrémité coïncident ($v_0 = v_k$) avec $k \ge 1$.

### D. Arbres
* **Arbre non orienté** : Un graphe non orienté, connexe et acyclique.
* **Arbre enraciné** : Un arbre non orienté muni d'un sommet distingué appelé **racine**. Cela induit une relation d'ordre partiel (parent/enfant, ancêtre/descendant).
* **Arbre $b$-aire / Arbre binaire** : Un arbre enraciné où chaque sommet possède au plus $b$ enfants (exactement 2 pour un arbre binaire strict).

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème 1 : Lemme des poignées de mains (Handshaking Lemma)
*Énoncé :* Soit $G = (V, E)$ un graphe non orienté. La somme des degrés de tous les sommets est égale au double du nombre d'arêtes :
$$\sum_{u \in V} \text{deg}(u) = 2m$$

*Démonstration :*
Chaque arête $\{u, v\}$ relie exactement deux sommets $u$ et $v$. Par conséquent, lors du calcul de la somme des degrés, chaque arête est comptée exactement deux fois : une fois dans le degré de $u$ et une fois dans le degré de $v$. $\blacksquare$
Corollaire: * Dans tout graphe, le nombre de sommets de degré impair est pair.

---

### Théorème 2 : Caractérisations des arbres
*Énoncé :* Soit $G = (V, E)$ un graphe non orienté fini à $n$ sommets ($n \ge 1$). Les propositions suivantes sont équivalentes :
1. $G$ est un arbre (connexe et acyclique).
2. $G$ est acyclique et possède $n-1$ arêtes.
3. $G$ est connexe et possède $n-1$ arêtes.
4. $G$ est connexe, et toute arête est un isthme (sa suppression déconnecte le graphe).
5. $G$ est acyclique, et l'ajout d'une arête entre deux sommets non adjacents crée un unique cycle.
6. Il existe un unique chemin simple entre toute paire de sommets distincts.

*Démonstrations partielles (Implication $1 \implies 2$) :*
Par récurrence sur le nombre de sommets $n$.
* *Initialisation ($n = 1$) :* Un arbre à 1 sommet possède 0 arête ($1-1 = 0$) et aucun cycle. La propriété est vraie.
* *Hérédité :* Soit $n \ge 1$ tel que tout arbre à $n$ sommets a $n-1$ arêtes et est acyclique. Soit $T$ un arbre à $n+1$ sommets. Un arbre possède au moins une feuille (sommet de degré 1, car le graphe est fini, connexe et acyclique). Soit $v$ une feuille de $T$ et $u$ son unique voisin. Considérons le graphe $T' = T \setminus \{v\}$.
  * $T'$ est connexe (la suppression d'une feuille et de son arête incidente ne déconnecte pas le reste du graphe).
  * $T'$ est acyclique (car $T$ l'est).
  Donc $T'$ est un arbre à $n$ sommets. Par hypothèse de récurrence, $T'$ possède $n-1$ arêtes.
  Le graphe $T$ est obtenu en ajoutant le sommet $v$ et l'arête $\{u, v\}$ à $T'$. Ainsi, $T$ possède $(n-1) + 1 = n$ arêtes, ce qui correspond à $(n+1) - 1$. $\blacksquare$

---

## 💡 3. Méthodes classiques de résolution

### A. Représentation en mémoire
1. **Matrice d'adjacence** :
   * Matrice $M$ de taille $n \times n$ où $M[i][j] = 1$ s'il y a une arête (ou un arc) entre $i$ et $j$ (0 sinon).
   * *Complexité spatiale* : $\Theta(n^2)$.
   * *Complexité pour tester l'adjacence* : $O(1)$.
2. **Listes d'adjacence** :
   * Un tableau (ou une table de hachage) de taille $n$ où la case $i$ contient la liste chaînée des voisins du sommet $i$.
   * *Complexité spatiale* : $\Theta(n + m)$.
   * *Complexité pour tester l'adjacence* : $O(\text{deg}(u))$ dans le pire des cas.

### B. Parcours fondamentaux
* **Parcours en largeur (BFS - Breadth-First Search)** :
  * Utilise une **file** (FIFO).
  * Permet de trouver les plus courts chemins dans un graphe non pondéré.
* **Parcours en profondeur (DFS - Depth-First Search)** :
  * Utilise une **pile** (LIFO) ou la récursivité.
  * Permet de détecter des cycles, de calculer les composantes connexes, ou d'effectuer un tri topologique (sur les DAG : *Directed Acyclic Graphs*).

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oubli de la connexité dans la caractérisation des arbres** :
   Un graphe acyclique à $n$ sommets et $n-1$ arêtes est nécessairement un arbre (car la connexité en découle). Cependant, un graphe à $n-1$ arêtes et sans cycle n'est pas forcément connexe si $n$ est mal interprété, mais avec $|E| = |V|-1$ et l'acyclicité, la connexité est mathématiquement garantie. *Attention toutefois* : un graphe quelconque sans cycle et à $m = n$ arêtes n'est pas un arbre (il contient au moins une composante connexe unicyclique).
2. **Complexité des parcours sur les représentations** :
   Parcourir tous les voisins d'un sommet en utilisant une **matrice d'adjacence** prend un temps $O(n)$, car il faut parcourir toute la ligne de la matrice. En revanche, cela prend $O(\text{deg}(u))$ avec des **listes d'adjacence**. Utiliser la matrice d'adjacence pour un algorithme de parcours (BFS/DFS) mène à une complexité temporelle de $O(n^2)$ au lieu de $O(n + m)$.
3. **Puits et sources dans les graphes orientés** :
   Ne pas confondre un sommet de degré sortant nul (puits) dans un graphe orienté avec une feuille d'un arbre. Un sommet isolé n'est pas nécessairement une feuille.
4. **Terminaison des parcours en présence de cycles** :
   Dans un graphe général (non arborescent), l'oubli d'un tableau/ensemble de marquage des sommets visités (`marche` ou `visite`) lors d'un DFS ou BFS mène à une **boucle infinie**.