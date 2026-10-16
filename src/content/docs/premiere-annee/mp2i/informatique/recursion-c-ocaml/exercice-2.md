---
title: 'Exercice 2 : Programmation fonctionnelle en OCaml'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre du traitement de flux de données continus pour des applications de monitoring énergétique, on cherche à manipuler des structures de données arborescentes persistantes. Les architectures matérielles modernes imposent des contraintes strictes sur la consommation mémoire et la latence. L'utilisation de la programmation fonctionnelle en OCaml permet de garantir l'immutabilité et le partage structurel, mais nécessite une attention particulière sur la complexité spatiale et temporelle, notamment en raison de la récursivité et de l'évaluation des expressions.

Ce problème s'intéresse à la représentation d'arbres de décision pour l'optimisation de la distribution d'énergie. On modélise ces arbres par des types algébriques de données et l'on étudie l'évaluation paresseuse (*lazy evaluation*) et la récursivité terminale pour éviter les dépassements de pile (*stack overflow*) sur des profondeurs d'arbres pouvant atteindre $d = 10^6$ nœuds.

---

### ❓ Questions progressives

1. **Modélisation et types algébriques**
   Définir un type polymorphe `('a, 'b) btree` en OCaml représentant un arbre binaire étiqueté : un nœud interne contient une valeur de type `'a` et deux sous-arbres, tandis qu'une feuille contient une valeur de type `'b`.

2. **Récursivité structurelle et empreinte mémoire**
   Écrire une fonction `hauteur : ('a, 'b) btree -> int` qui calcule la hauteur de l'arbre. 
   *Analyse critique :* Si la pile d'exécution d'un système embarqué possède une taille limitée à $S_{\text{max}} = 8\text{ Mio}$ et que chaque cadre d'appel (*stack frame*) consomme $64\text{ octets}$, estimer la profondeur maximale d'arbre traitable par cette fonction naïve. Conclure sur les limites de la récursivité structurelle.

3. **Transformation par récursivité terminale**
   Pour s'affranchir des limites de la pile, on souhaite réécrire le parcours de l'arbre en utilisant une approche itérative ou une récursivité terminale (*tail-rec*). Proposer une fonction `tailaille_acc` ou utiliser des accumulateurs/continuations pour calculer la taille de l'arbre (nombre de nœuds internes et de feuilles) en OCaml de manière terminale.

4. **Évaluation paresseuse et flux infinis**
   Pour simuler des capteurs temporels générant un flux infini de données, on utilise le module `Lazy` d'OCaml ou un type personnalisé d'arbres potentiellement infinis (flux). Définir un type `('a) inf_stream = Cons of 'a * ('a inf_stream) lazy_t`.
   Écrire une fonction `map_stream : ('a -> 'b) -> 'a inf_stream -> 'b inf_stream` qui applique une fonction de traitement à l'ensemble du flux sans évaluation immédiate des termes futurs.

5. **Analyse de complexité et compromis spatio-temporel**
   Dans le cadre du stockage de $N$ états énergétiques dans un arbre binaire de recherche persistant, comparer l'empreinte mémoire d'une structure purement fonctionnelle (partage de nœuds) par rapport à une structure impérative en place (type tableau ou pointeurs modifiables). Discuter de l'impact du ramasse-miettes (*Garbage Collector*) d'OCaml sur le temps de latence en temps réel critique.

---

### 💡 Pistes & Indications

- **Q1 :** Utiliser la syntaxe standard des types variants en OCaml : `type ('a, 'b) btree = Leaf of 'b | Node of 'a * ('a, 'b) btree * ('a, 'b) btree`.
- **Q2 :** Penser à la fonction `max` pour comparer les hauteurs des sous-arbres gauche et droit. Pour l'analyse critique, divisez $S_{\text{max}}$ par la taille d'un cadre d'appel.
- **Q3 :** Une fonction récursive terminale utilise souvent un accumulateur ou une pile explicite gérée dans le tas (*heap*) pour simuler la pile d'appels.
- **Q4 :** Le mot-clé `lazy` et la fonction `Lazy.force` sont essentiels pour manipuler des expressions paresseuses en OCaml.
- **Q5 :** Le partage structurel en programmation fonctionnelle garantit qu'une modification ne copie que le chemin modifié (complexité $\mathcal{O}(\log N)$ en mémoire par insertion), mais la création de nombreux objets transitoires sollicite le GC.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Modélisation et types algébriques
```ocaml
type ('a, 'b) btree =
  | Leaf of 'b
  | Node of 'a * ('a, 'b) btree * ('a, 'b) btree
```

#### 2. Récursivité structurelle et empreinte mémoire
```ocaml
let rec hauteur (arbre : ('a, 'b) btree) : int =
  match arbre with
  | Leaf _ -> 0
  | Node (_, g, d) -> 1 + max (hauteur g) (hauteur d)
```
*Analyse critique :* 
La taille maximale de la pile est $S_{\text{max}} = 8 \times 2^{20}\text{ octets} = 8\,388\,608\text{ octets}$. 
Avec un coût de $64\text{ octets}$ par appel récursif, le nombre maximal de cadres d'appel est :
$$N_{\text{frames}} = \frac{8\,388\,608}{64} = 131\,072$$
Par conséquent, la hauteur maximale d'un arbre non balancé (ou même balancé si la récursion explore la branche la plus profonde) est limitée à $d_{\text{max}} \approx 1.3 \times 10^5$. Pour un arbre de décision énergétique devant traiter $10^6$ éléments ($d \approx 20$ si parfaitement balancé, mais pouvant dégénérer en pire cas), la fonction naïve provoquera un `Stack_overflow`.

#### 3. Transformation par récursivité terminale
Pour rendre le calcul de la taille terminal, on peut utiliser une liste explicite faisant office de pile dans le tas :
```ocaml
let taille (arbre : ('a, 'b) btree) : int =
  let rec aux pile acc =
    match pile with
    | [] -> acc
    | Leaf _ :: rest -> aux rest (acc + 1)
    | Node (_, g, d) :: rest -> aux (g :: d :: rest) (acc + 1)
  in
  aux [arbre] 0
```
Cette approche déporte la pile d'exécution (limitée) vers le tas (limité uniquement par la mémoire vive totale de la machine), s'affranchissant ainsi du risque de `Stack_overflow`.

#### 4. Évaluation paresseuse et flux infinis
```ocaml
type 'a inf_stream = Cons of 'a * 'a inf_stream lazy_t

let rec map_stream (f : 'a -> 'b) (s : 'a inf_stream) : 'b inf_stream =
  match s with
  | Cons (x, rest) ->
      Cons (f x, lazy (map_stream f (Lazy.force rest)))
```
Grâce au constructeur `lazy`, l'évaluation du sous-flux `map_stream f (Lazy.force rest)` est reportée au moment exact où l'utilisateur du flux demande l'élément suivant, permettant de représenter des structures infinies (comme des mesures de capteurs à haute fréquence) sans saturer la mémoire.

#### 5. Analyse de complexité et compromis spatio-temporel
* **Structure purement fonctionnelle :** Chaque modification (par exemple l'insertion dans un ABR persistant) du╦re $\mathcal{O}(\log N)$ en temps et en espace grâce au partage structurel. Les anciens états restent valides (persistance).
* **Structure impérative :** Modification en place en $\mathcal{O}(\log N)$ en temps et $\mathcal{O}(1)$ en espace additionnel, mais pas de persistance native.
* **Impact du Garbage Collector (GC) :** L'allocation intensive de petits blocs (nœuds d'arbres) en programmation fonctionnelle génère une forte pression sur la génération mineure du GC d'OCaml. Dans les systèmes temps réel critiques (ex. : commande de turbines éoliennes), les pauses induites par le ramasse-miettes (*GC pauses*) peuvent introduire du jitter non déterministe, constituant la limite majeure de ce paradigme pour l'ingénierie bas niveau temps réel stricte.