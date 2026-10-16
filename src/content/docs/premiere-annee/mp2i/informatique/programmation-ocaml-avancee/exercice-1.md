---
title: 'Exercice 1 : Types algébriques et filtrage de motifs'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre de la conception d'un mini-compilateur pour un langage arithmétique enrichi, on s'intéresse à la représentation et à la manipulation des expressions symboliques. En programmation fonctionnelle, les types algébriques de données (ADT) en OCaml se prêtent particulièrement bien à la modélisation d'arbres de syntaxe abstraite (AST).

On considère le type des expressions arithmétiques muni de variables, de constantes entières, d'opérations binaires usuelles, et d'une structure de liaison de type `let ... in ...` (permettant de définir des variables locales).

Le type OCaml correspondant est défini ainsi :

```ocaml
type expr =
  | Const of int
  | Var of string
  | Add of expr * expr
  | Mul of expr * expr
  | Let of string * expr * expr
```

Par exemple, l'expression mathématique $\text{let } x = 3 \text{ in } x \times (x + 2)$ se représente par la valeur OCaml :
`Let ("x", Const 3, Mul (Var "x", Add (Var "x", Const 2)))`.

L'objectif de ce problème est d'implémenter des fonctions d'analyse, de simplification et d'évaluation de ces expressions en exploitant la puissance du filtrage de motifs (*pattern matching*) en OCaml.

---

### ❓ Questions progressives

1. **Représentation et taille de l'arbre** : Écrire une fonction récurrente `hauteur : expr -> int` qui calcule la hauteur d'un arbre de syntaxe abstraite (la hauteur d'une feuille étant fixée à $0$).
2. **Variables libres** : On souhaite déterminer l'ensemble des variables libres d'une expression (c'est-à-dire les variables qui ne sont pas liées par un `Let` englobant). 
   - Rappeler ou utiliser un type pour représenter des ensembles de chaînes de caractères (par exemple le module `Set.Make(String)`).
   - Écrire une fonction `variables_libres : expr -> StringSet.t` calculant cet ensemble.
3. **Substitution** : Écrire une fonction `substituer : string -> expr -> expr -> expr` telle que `substituer x e_sub e` remplace toutes les occurrences *libres* de la variable `x` par l'expression `e_sub` dans l'expression `e`.
4. **Évaluation sécurisée** : On dispose d'un environnement représenté par des listes d'associations `(string * int)` représentant les valeurs des variables. Écrire une fonction `eval : (string * int) list -> expr -> int option` qui évalue une expression close (sans variable libre). En cas de variable non trouvée ou d'erreur, la fonction renverra `None`.
5. **Optimisation syntaxique (Constant Folding)** : Écrire une fonction de simplification `optimiser : expr -> expr` qui effectue des réductions locales, telles que :
   - $e + 0 \rightsquigarrow e$ et $0 + e \rightsquigarrow e$
   - $e \times 1 \rightsquigarrow e$ et $1 \times e \rightsquigarrow e$
   - $e \times 0 \rightsquigarrow 0$ et $0 \times e \rightsquigarrow 0$
   (ainsi que pour les constantes entières directes).

---

### 💡 Pistes & Indications méthodologiques

- **Question 1** : Pensez à utiliser la fonction `max` de la bibliothèque standard pour calculer la hauteur maximale entre les sous-arbres gauche et droit.
- **Question 2** : Pour le constructeur `Let (x, e1, e2)`, la variable `x` est liée dans `e2`. Par conséquent, l'ensemble des variables libres de `Let (x, e1, e2)` est l'union des variables libres de `e1` et des variables libres de `e2`, *privée* de l'élément `{x}`.
- **Question 3** : Soyez extrêmement rigoureux lors du passage sous un `Let (y, e1, e2)`. Si `y = x`, la variable `x` est occultée (*shadowing*) dans `e2`, la substitution ne doit donc pas s'appliquer à `e2`. Si `y \neq x`, il faut propager la substitution dans `e1` et `e2` (en faisant attention aux collisions de noms si l'on était dans un cadre plus général, mais ici une substitution simple suffit si l'on suppose les noms distincts ou par capture directe).
- **Question 4** : Utilisez `List.assoc_opt` pour la recherche sécurisée dans l'environnement.
- **Question 5** : Le filtrage de motifs imbriqués (*deep pattern matching*) est votre meilleur allié. Vous pouvez filtrer simultanément sur la forme des expressions (ex: `Add (Const 0, e)` ou `Mul (e, Const 1)`).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Calcul de la hauteur
La hauteur d'un arbre se calcule récursivement par cas sur le type algébrique `expr`.

```ocaml
let rec hauteur (e : expr) : int =
  match e with
  | Const _ -> 0
  | Var _ -> 0
  | Add (g, d) -> 1 + max (hauteur g) (hauteur d)
  | Mul (g, d) -> 1 + max (hauteur g) (hauteur d)
  | Let (_, e1, e2) -> 1 + max (hauteur e1) (hauteur e2)
```

#### 2. Variables libres
On utilise le foncteur `Set.Make` pour manipuler des ensembles de chaînes de caractères.

```ocaml
module StringSet = Set.Make(String)

let rec variables_libres (e : expr) : StringSet.t =
  match e with
  | Const _ -> StringSet.empty
  | Var x -> StringSet.singleton x
  | Add (g, d) | Mul (g, d) ->
      StringSet.union (variables_libres g) (variables_libres d)
  | Let (x, e1, e2) ->
      let fv1 = variables_libres e1 in
      let fv2 = variables_libres e2 in
      StringSet.union fv1 (StringSet.remove x fv2)
```

#### 3. Fonction de substitution
La fonction `substituer x e_sub e` remplace $x$ par `e_sub` dans `e`.

```ocaml
let rec substituer (x : string) (e_sub : expr) (e : expr) : expr =
  match e with
  | Const n -> Const n
  | Var y -> if y = x then e_sub else Var y
  | Add (g, d) -> Add (substituer x e_sub g, substituer x e_sub d)
  | Mul (g, d) -> Mul (substituer x e_sub g, substituer x e_sub d)
  | Let (y, e1, e2) ->
      let e1' = substituer x e_sub e1 in
      let e2' = if y = x then e2 else substituer x e_sub e2 in
      Let (y, e1', e2')
```
*Note du jury* : Le cas `y = x` gère correctement le masquage de variable (*shadowing*). Si la variable liée est la même que celle que l'on substitue, la liaison locale masque la substitution dans le corps `e2`.

#### 4. Évaluation sécurisée
L'évaluation s'appuie sur un environnement `env` de type `(string * int) list`.

```ocaml
let rec eval (env : (string * int) list) (e : expr) : int option =
  match e with
  | Const n -> Some n
  | Var x -> List.assoc_opt x env
  | Add (g, d) ->
      begin match eval env g, eval env d with
      | Some vg, Some vd -> Some (vg + vd)
      | _ -> None
      end
  | Mul (g, d) ->
      begin match eval env g, eval env d with
      | Some vg, Some vd -> Some (vg * vd)
      | _ -> None
      end
  | Let (x, e1, e2) ->
      begin match eval env e1 with
      | None -> None
      | Some v1 -> eval ((x, v1) :: env) e2
      end
```

#### 5. Optimisation syntaxique (Constant Folding)
Le filtrage de motifs permet de capturer élégamment les cas neutres et absorbants.

```ocaml
let rec optimiser (e : expr) : expr =
  match e with
  | Const n -> Const n
  | Var x -> Var x
  | Add (g, d) ->
      let g' = optimiser g in
      let d' = optimiser d in
      begin match (g', d') with
      | Const 0, e_opt | e_opt, Const 0 -> e_opt
      | Const n1, Const n2 -> Const (n1 + n2)
      | _ -> Add (g', d')
      end
  | Mul (g, d) ->
      let g' = optimiser g in
      let d' = optimiser d in
      begin match (g', d') with
      | Const 0, _ | _, Const 0 -> Const 0
      | Const 1, e_opt | e_opt, Const 1 -> e_opt
      | Const n1, Const n2 -> Const (n1 * n2)
      | _ -> Mul (g', d')
      end
  | Let (x, e1, e2) ->
      Let (x, optimiser e1, optimiser e2)