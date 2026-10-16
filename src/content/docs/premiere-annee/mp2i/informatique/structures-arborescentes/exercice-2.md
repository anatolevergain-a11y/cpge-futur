---
title: 'Exercice 2 : Parcours de graphes et complexité'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Étude de cas

On s'intéresse à la modélisation et à l'analyse de réseaux de communication à grande échelle, par exemple l'interconnexion de centres de données (datacenters) mondiaux. Un tel réseau est modélisé par un graphe orienté $G = (S, A)$, où $S$ représente l'ensemble des serveurs ($|S| = n$) et $A$ l'ensemble des liaisons haut débit orientées ($|A| = m$).

Dans le cadre d'une transition énergétique et d'une optimisation des coûts d'infrastructure, l'opérateur du réseau souhaite acheminer un flux de données critique entre un serveur source $s \in S$ et un serveur destination $t \in S$ en minimisant la consommation énergétique globale, tout en évitant la saturation des liaisons. 

Chaque liaison $u \in A$ est caractérisée par :
- Sa capacité maximale de transmission $c(u) \in \mathbb{N}^*$ (exprimée en $\text{Gbps}$).
- Sa fonction de coût énergétique par unité de flux $w(u) : \mathbb{R}^+ \to \mathbb{R}^+$. Pour des raisons de simplification du modèle, on supposera dans un premier temps que le coût est constant et égal à $w(u) > 0$.

Cependant, les ingénieurs alertent sur le fait que le modèle théorique d'un graphe statique omet la variabilité temporelle de la charge et la dégradation thermique des serveurs, qui introduisent des incertitudes majeures.

---

### ❓ Questions progressives

1. **Représentation et complexité spatiale**
   Justifier le choix de la structure de données pour représenter le graphe $G$ en mémoire sachant que le réseau est généralement *creux* (c'est-à-dire que le nombre de liaisons $m$ est très inférieur à $n^2$, typiquement $m = \mathcal{O}(n)$). Évaluer la complexité spatiale de cette représentation.

2. **Parcours en largeur (BFS) et accessibilité**
   On souhaite déterminer s'il existe un chemin du serveur $s$ vers le serveur $t$ en ignorant les capacités et les coûts. 
   Écrire en OCaml une fonction `est_accessible` utilisant un parcours en largeur (BFS) qui renvoie un booléen indiquant si $t$ est atteint depuis $s$. Préciser sa complexité temporelle et spatiale en fonction de $n$ et $m$.

3. **Recherche de plus court chemin (Dijkstra)**
   On suppose désormais que les liaisons possèdent un coût strictement positif $w(u)$. On souhaite trouver un chemin minimisant la somme des coûts entre $s$ et $t$.
   Rappeler le principe de l'algorithme de Dijkstra. Quel est l'impact de l'utilisation d'un tas binaire (file de priorités) sur la complexité temporelle de l'algorithme ? Expliciter cette complexité.

4. **Analyse critique et limites du modèle énergétique**
   *Question d'ingénierie et de modélisation :* Le coût énergétique d'une liaison $w(u)$ a été supposé constant. En réalité, la consommation électrique d'un équipement réseau ne croît pas de manière linéaire avec le flux en raison de coûts fixes d'allumage et de rendements non-linéaires à forte charge. 
   Discuter des limites de la modélisation par plus court chemin classique dans ce contexte et proposer une modification qualitative de l'approche algorithmique.

---

### 💡 Pistes & Indications

- **Q1 :** Penser à la différence entre matrice d'adjacence et listes d'adjacence pour un graphe creux.
- **Q2 :** Le BFS nécessite une file (queue) pour stocker les sommets à visiter et un tableau de booléens (ou une table de hachage) pour marquer les sommets visités afin d'éviter les boucles.
- **Q3 :** Rapporer que l'extraction du minimum dans un tas binaire se fait en $\mathcal{O}(\log n)$ et la mise à jour d'une clé en $\mathcal{O}(\log n)$.
- **Q4 :** Si le coût marginal dépend du flux total traversant l'arête (fonctions convexes ou non-linéaires), l'algorithme de Dijkstra (basé sur l'optimalité sous-structurelle de chemins à coûts additifs indépendants du flux) ne s'applique plus directement. Il faut se tourner vers des flots à coût minimum.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Représentation et complexité spatiale
Puisque le graphe est creux ($m = \mathcal{O}(n)$), une **matrice d'adjacence** de taille $n \times n$ occuperait un espace mémoire de $\mathcal{O}(n^2)$, ce qui est prohibitif pour des réseaux de grande taille ($n \ge 10^6$ serveurs). 
On privilégie donc les **listes d'adjacence**, où chaque sommet associe la liste de ses voisins sortants. 
- **Complexité spatiale :** $\mathcal{O}(n + m)$. Pour un graphe creux, cela se réduit à $\mathcal{O}(n)$, ce qui est optimal.

#### 2. Parcours en largeur (BFS) en OCaml
```ocaml
(* On représente le graphe par un tableau de listes d'adjacence (sommets numérotés de 0 à n-1) *)
let est_accessible (graphe : int list array) (s : int) (t : int) : bool =
  let n = Array.length graphe in
  let visite = Array.make n false in
  let file = Queue.create () in
  
  Queue.push s file;
  visite.(s) <- true;
  
  let trouve = ref false in
  while not (Queue.is_empty file) && not !trouve do
    let u = Queue.pop file in
    if u = t then
      trouve := true
    else
      List.iter (fun v ->
        if not visite.(v) then begin
          visite.(v) <- true;
          Queue.push v file
        end
      ) graphe.(u)
  done;
  !trouve
```
- **Complexité temporelle :** $\mathcal{O}(n + m)$ car chaque sommet est enfilé/défilé au plus une fois, et chaque arête est examinée une fois (dans les graphes orientés).
- **Complexité spatiale :** $\mathcal{O}(n)$ pour le tableau de marquage `visite` et la `file`.

#### 3. Plus court chemin (Dijkstra)
L'algorithme de Dijkstra maintient une estimation des distances minimales depuis $s$ vers tous les autres sommets en relaxant progressivement les arêtes à partir d'un sommet non visité de distance minimale.
- Avec un **tas binaire**, chaque sommet est inséré et extrait du tas une fois ($\mathcal{O}(n \log n)$), et chaque arête entraîne au plus une mise à jour de priorité dans le tas ($\mathcal{O}(m \log n)$).
- **Complexité temporelle totale :** $\mathcal{O}((n + m) \log n)$.

#### 4. Analyse critique et limites du modèle énergétique
* **Limites du modèle :** Supposer $w(u)$ constant revient à ignorer la convexité réelle de la consommation énergétique des équipements réseau (loi d'Ohm généralisée, dissipation thermique, seuils d'activation des ventilateurs). De plus, si le coût d'une liaison dépend du volume de données déjà routé (saturation progressive), le principe d'optimalité de Bellman utilisé par Dijkstra (un sous-chemin d'un plus court chemin est lui-même un plus court chemin) est violé.
* **Piste corrective :** Il convient de modéliser le problème comme un **problème de flot à coût minimum** (Minimum Cost Flow Problem). Si les fonctions de coût sont convexes et différentiables, des méthodes de programmation linéaire ou des algorithmes de dualité (comme le prefetch de push-relabel généralisé) doivent être employés, au prix d'une complexité algorithmique plus élevée ($\mathcal{O}(poly(n, m))$). L'ingénieur doit donc arbitrer entre la fidélité du modèle énergétique et la tratabilité algorithmique en temps réel.