---
title: 'Exercice : Récursivité croisée et structures de données immuables en OCaml'
description: 'Problème d entraînement type concours MP2I - Mines-Ponts / Centrale-Supélec.'
---

### 🌐 Énoncé du problème / Cadre d'étude

En mathématiques et en informatique, l'évaluation d'expressions arithmétiques imbriquées (avec parenthèses, priorités des opérateurs et variables) nécessite souvent de manipuler des arbres de syntaxe abstraite (AST). Dans ce problème, on s'intéresse à la représentation d'expressions pouvant contenir des définitions de constantes locales (via un système de liaisons `let ... in ...`) et à leur évaluation.

Pour éviter d'évaluer des calculs inutiles ou de boucler sur des structures infinis, on introduit également une notion de flux (ou listes paresseuses) pour représenter des suites de valeurs.

L'objectif de ce problème est de concevoir en OCaml, dans un style purement fonctionnel et sans effet de bord, un mini-compilateur/évaluateur capable de:
1. Représenter des expressions arithmétiques et des flux via des types algébriques de données.
2. Implémenter des fonctions d'analyse et d'évaluation mutuellement récursives.
3. Manipuler des environnements immuables pour la gestion de la portée des variables.

---

### ❓ Questions progressives

#### Partie I : Structures de données et flux paresseux

1. **(Q1)** Définir un type algébrique polymorphe `('a) stream` représentant un flux infini ou fini de valeurs, évaluées à la demande (paresseusement). Un flux est soit la fin du flux, soit une cellule contenant une valeur et un *thunk* (une fonction sans argument `unit -> ('a) stream`) pour calculer la suite.
2. **(Q2)** Écrire une fonction `s_repeat : 'a -> 'a stream` qui construit un flux infini répétant une même valeur.
3. **(Q3)** Écrire une fonction `s_map : ('a -> 'b) -> 'a stream -> 'b stream` qui applique une fonction à tous les éléments d'un flux de manière paresseuse.

#### Partie II : Arbres de syntaxe et récursivité croisée

On considère des expressions arithmétiques contenant des entiers, des variables, des opérations binaires (`+`, `*`), et des déclarations locales `let x = e1 in e2`.

4. **(Q4)** Définir le type `expr` représentant ces expressions.
5. **(Q5)** Un environnement est une structure immuable associant des noms de variables (`string`) à des valeurs entières (`int`). Proposer un type `env` (par exemple sous forme de liste d'association) et écrire une fonction `env_empty : env` et `env_bind : string -> int -> env -> env`.
6. **(Q6)** Écrire deux fonctions mutuellement récursives `eval_expr : env -> expr -> int` et `eval_list : env -> expr list -> int list` permettant d'évaluer respectivement une expression et une liste d'expressions. On veillera à lever une exception `UnboundVariable` si une variable n'est pas trouvée dans l'environnement.

#### Partie III : Optimisation et fermeture d'environnements

7. **(Q7)** On souhaite optimiser l'évaluation en détectant les expressions constantes. Écrire une fonction `is_constant : expr -> bool` qui renvoie `true` si l'expression ne dépend d'aucune variable.
8. **(Q8)** Proposer une version améliorée `eval_opt : env -> expr -> int` qui évalue directement l'expression si elle est constante, sans consulter l'environnement.

---

### 💡 Pistes & Indications méthodologiques

- **Paresse en OCaml** : Pour modéliser le calcul différé sans utiliser le mot-clé `lazy` du langage, on utilise explicitement des fonctions de type `unit -> t`. C'est le principe du *thunk*.
- **Récursivité croisée** : En OCaml, deux fonctions qui s'appellent mutuellement doivent être définies simultanément à l'aide du mot-clé `and`.
- **Immutabilité** : Les environnements ne doivent pas être modifiés en place. Chaque liaison `let` enrichit l'environnement existant en renvoyant une nouvelle structure (une liste préfixée par le nouveau couple).

---

### 📋 Corrigé détaillé pas à pas

#### Partie I : Structures de données et flux paresseux

**Corrigé Q1 :**
Le type `stream` utilise une fonction pour différer le calcul de la suite du flux.
```ocaml
type 'a stream =
  | Nil
  | Cons of 'a * (unit -> 'a stream)
```

**Corrigé Q2 :**
Pour répéter une valeur indéfiniment, la fonction renvoie un `Cons` dont la queue évalue à nouveau la même fonction.
```ocaml
let rec s_repeat (x : 'a) : 'a stream =
  Cons (x, fun () -> s_repeat x)
```

**Corrigé Q3 :**
`s_map` parcourt le flux en appliquant `f` à la tête, et en enveloppant l'appel récursif dans un nouveau *thunk* pour préserver la paresse.
```ocaml
let rec s_map (f : 'a -> 'b) (s : 'a stream) : 'b stream =
  match s with
  | Nil -> Nil
  | Cons (x, tl) -> Cons (f x, fun () -> s_map f (tl ()))
```

---

#### Partie II : Arbres de syntaxe et récursivité croisée

**Corrigé Q4 :**
Modélisation classique par type somme.
```ocaml
type binop = Add | Mul

type expr =
  | Cst of int
  | Var of string
  | BinOp of binop * expr * expr
  | Let of string * expr * expr
```

**Corrigé Q5 :**
Un environnement est simplement une liste de paires `(nom, valeur)`.
```ocaml
type env = (string * int) list

let env_empty : env = []

let env_bind (x : string) (v : int) (e : env) : env =
  (x, v) :: e

let rec env_lookup (x : string) (e : env) : int =
  match e with
  | [] -> raise (Failure ("Unbound variable: " ^ x))
  | (y, v) :: rest -> if x = y then v else env_lookup x rest
```

**Corrigé Q6 :**
L'évaluation nécessite la récursivité croisée (`let rec ... and ...`) car une expression peut contenir une liste d'expressions (par exemple si on étendait le langage à des appels de fonctions, ou ici pour traiter des sous-composants). Traitons proprement l'évaluation avec `and` :

```ocaml
exception UnboundVariable of string

let rec eval_expr (env : env) (e : expr) : int =
  match e with
  | Cst n -> n
  | Var x -> 
      (try env_lookup x env 
       with Failure _ -> raise (UnboundVariable x))
  | BinOp (Add, e1, e2) -> eval_expr env e1 + eval_expr env e2
  | BinOp (Mul, e1, e2) -> eval_expr env e1 * eval_expr env e2
  | Let (x, e1, e2) ->
      let v1 = eval_expr env e1 in
      let new_env = env_bind x v1 env in
      eval_expr new_env e2

and eval_list (env : env) (el : expr list) : int list =
  match el with
  | [] -> []
  | e :: rest -> eval_expr env e :: eval_list env rest
```
*Note de l'examinateur :* L'utilisation conjointe de `eval_expr` et `eval_list` illustre parfaitement la récursivité croisée exigée par le programme de MP2I.

---

#### Partie III : Optimisation et fermeture d'environnements

**Corrigé Q7 :**
Une expression est constante si elle ne contient aucune variable (`Var`). Pour un `Let`, elle est constante si le corps et la valeur liée le sont (en faisant attention aux portées, bien qu'ici une variable liée à l'intérieur ne soit pas une variable libre externe).
```ocaml
let rec is_constant (e : expr) : bool =
  match e with
  | Cst _ -> true
  | Var _ -> false
  | BinOp (_, e1, e2) -> is_constant e1 && is_constant e2
  | Let (_, e1, e2) -> is_constant e1 && is_constant e2
```

**Corrigé Q8 :**
On peut pré-calculer l'expression si `is_constant` renvoie `true` (en l'évaluant dans un environnement vide).
```ocaml
let rec eval_opt (env : env) (e : expr) : int =
  if is_constant e then
    eval_expr [] e
  else
    match e with
    | Cst n -> n
    | Var x -> eval_expr env (Var x) (* délègue à l'évaluation standard *)
    | BinOp (Add, e1, e2) -> eval_opt env e1 + eval_opt env e2
    | BinOp (Mul, e1, e2) -> eval_opt env e1 * eval_opt env e2
    | Let (x, e1, e2) ->
        let v1 = eval_opt env e1 in
        eval_opt (env_bind x v1 env) e2