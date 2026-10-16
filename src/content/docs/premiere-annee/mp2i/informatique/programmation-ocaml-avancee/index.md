---
title: 'Cours : Programmation fonctionnelle avancée en OCaml'
description: 'Synthese officielle du cours et demonstrations pour CPGE MP2I.'
---

## 📌 1. Définitions & Cadre d'étude

En première année de CPGE MP2I, le paradigme fonctionnel s'approfondit avec l'étude rigoureuse des types polymorphes, de la récursion structurelle et générale, de l'évaluation paresseuse (*lazy evaluation*) et de la manipulation de structures de données persistantes.

### Polymorphisme et inférence de types
Le système de types d'OCaml est fondé sur l'inférence (algorithme de Damas-Milner). Un type est dit **polymorphe** lorsqu'il contient des variables de type (notées `'a`, `'b`, etc.). 

* **Définition (Fonction d'ordre supérieur) :** Une fonction est d'ordre supérieur si elle prend au moins une fonction en argument ou retourne une fonction.
* **Typage des combinateurs classiques :**
  * `map : ('a -> 'b) -> 'a list -> 'b list`
  * `fold_left : ('acc -> 'a -> 'acc) -> 'acc -> 'a list -> 'acc`
  * `fold_right : ('a -> 'acc -> 'acc) -> 'a list -> 'acc -> 'acc`

### Évaluation paresseuse (*Lazy evaluation*)
Contrairement à l'évaluation stricte (*call-by-value*) usuelle en OCaml, l'évaluation paresseuse diffère le calcul d'une expression jusqu'au moment où sa valeur est strictement nécessaire.
* Le module `Lazy` fournit le type `'a lazy_t`, la construction `lazy expr` et la force d'évaluation `Lazy.force`.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème : Équivalence entre récursion terminale et itération
Une fonction récursive est dite **terminale** (*tail-recursive*) si l'appel récursif est la dernière opération effectuée par la fonction, aucun calcul ne restant en attente après son retour.

* **Démonstration (principe de compilation) :**
Soit $f$ une fonction récursive terminale. Le compilateur (ou l'interpréteur) traduit cette structure en un saut inconditionnel vers le début du bloc de code (une boucle sous-jacente) avec mise à jour des registres représentant les paramètres. 
La pile d'exécution (*call stack*) ne croît pas linéairement avec la profondeur de récursion $n$, mais reste à taille constante $O(1)$.
Soit $f$ définie par :
```ocaml
let rec f_aux acc x =
  if condition x then acc
  else f_aux (operation acc x) (next x)
```
La consommation mémoire spatiale passe de $\mathcal{O}(n)$ (récursion non terminale) à $\mathcal{O}(1)$ (récursion terminale). $\blacksquare$

### Propriété de fusion pour les `fold`
Pour toute fonction associative $\oplus$ et neutre $e$, la réduction d'une liste par `fold_left` et `fold_right` coïncide. Plus généralement, le théorème de acidité/fusion garantit que composer des transformations préserve les invariants de structure.

---

## 💡 3. Méthodes de calcul & Algorithmes

### 1. Conception de fonctions récursives terminales avec accumulateur
Pour transformer une fonction récursive non terminale en récursive terminale, on introduit un paramètre supplémentaire appelé **accumulateur** qui stocke l'état intermédiaire du calcul.

* **Exemple type : Inversion d'une liste**
```ocaml
let rev (l : 'a list) : 'a list =
  let rec aux acc = function
    | [] -> acc
    | x :: t -> aux (x :: acc) t
  in
  aux [] l
```
* **Complexité :** $\mathcal{O}(n)$ en temps et $\mathcal{O}(1)$ en espace (grâce à la récursion terminale).

### 2. Manipulation des flux infinis (Streams paresseux)
Grâce au module `Lazy`, il est possible de manipuler des structures de données potentiellement infinies (comme le flux des entiers ou des nombres premiers).

```ocaml
type 'a stream = Cons of 'a * ('a stream) lazy_t

let rec nats (n : int) : int stream =
  Cons (n, lazy (nats (n + 1)))
```

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Piège de la récursion non terminale et débordement de pile (*Stack Overflow*) :**
   Utiliser `List.map` ou une fonction récursive naïve sur des listes de grande taille ($n > 10^6$) provoque systématiquement une exception `Stack_overflow`. En concours, il faut toujours préciser si une fonction est récursive terminale.

2. **Confusion entre `fold_left` et `fold_right` :**
   * `fold_left f init [x1; x2; x3]` évalue `f (f (f init x1) x2) x3`. (Associativité à gauche).
   * `fold_right f [x1; x2; x3] init` évalue `f x1 (f x2 (f x3 init))`. 
   Attention au sens des arguments de la fonction passée à `fold_right` (`'a -> 'acc -> 'acc`) par rapport à `fold_left` (`'acc -> 'a -> 'acc`).

3. **Évaluation multiple avec `lazy` :**
   Oublier de lier une valeur paresseuse à un identifiant et forcer plusieurs fois une expression `lazy (calcul_couteux ())` annule tout gain d'optimisation (mémoïsation absente). Il faut écrire :
   ```ocaml
   let x = lazy (calcul_couteux ()) in
   ... Lazy.force x ... Lazy.force x (* Calcule une seule fois *)