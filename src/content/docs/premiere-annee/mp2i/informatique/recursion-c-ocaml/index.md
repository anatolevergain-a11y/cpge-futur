---
title: 'Cours : Récursivité et gestion de mémoire'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

La récursivité est un concept fondamental en informatique où une fonction, dite récursive, s'appelle elle-même directement ou indirectement. D'un point de vue programmatique et théorique, la récursivité est strictement équivalente à l'itération (dans le modèle de calcul de Turing), mais elle s'avère souvent plus adaptée pour exprimer des structures de données inductives (arbres, listes) ou des algorithmes de type "diviser pour régner".

### Le modèle d'exécution : la pile d'appels (Call Stack)

L'évaluation d'une fonction récursive repose sur l'utilisation de la mémoire vive et plus particulièrement sur une structure de données en pile (LIFO : *Last In, First Out*). 

À chaque appel d'une fonction, le système d'exploitation ou l'environnement d'exécution alloue un bloc de mémoire appelé **cadre de pile** (*stack frame* ou *activation record*). Ce cadre contient :
- Les arguments passés à la fonction.
- Les variables locales définies dans la fonction.
- L'**adresse de retour** (le pointeur d'instruction qui indique où reprendre l'exécution une fois l'appel terminé).

Lorsque la fonction se termine, son cadre de pile est dépilé (*popped*), et le contrôle est rendu à l'appelant à l'adresse de retour.

### Structure canonique d'une fonction récursive

Toute fonction récursive correcte doit comporter deux composantes indispensables sous peine de non-terminaison :
1. **Un ou plusieurs cas de base** (ou cas d'arrêts) : des conditions pour lesquelles le résultat est calculé directement, sans nouvel appel récursif.
2. **Un cas récursif** : une formulation du problème en un ou plusieurs sous-problèmes de même nature, strictement "plus petits" (au sens d'un variant de boucle ou d'une mesure de complexité bien fondée), se rapprochant du cas de base.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème maître (*Master Theorem*) pour l'analyse de complexité

Soit $T(n)$ la complexité temporelle d'un algorithme récursif résolvant un problème de taille $n$, exprimée par la relation de récurrence :

$$T(n) = a T\left(\frac{n}{b}\right) + \mathcal{O}(n^d)$$

où $a \ge 1$ est le nombre de sous-problèmes, $b > 1$ est le facteur de division de la taille du problème, et $d \ge 0$ est l'exposant caractérisant le coût de la division et de la recombinaison des sous-problèmes.

Alors, la complexité asymptotique de $T(n)$ est caractérisée par les cas suivants :

1. Si $d > \log_b(a)$, alors :
   $$T(n) = \mathcal{O}(n^d)$$

2. Si $d = \log_b(a)$, alors :
   $$T(n) = \mathcal{O}(n^d \log(n))$$

3. Si $d < \log_b(a)$, alors :
   $$T(n) = \mathcal{O}\left(n^{\log_b(a)}\right)$$

### Démonstration par l'arbre de récurrence

Considérons l'arbre des appels récursifs associé à la relation $T(n) = a T\left(\frac{n}{b}\right) + c \cdot n^d$ (en supposant $n$ is a power of $b$).

1. **Hauteur de l'arbre** : À chaque niveau $i$ (en partant de $0$ pour la racine), la taille des sous-problèmes est $\frac{n}{b^i}$. L'arbre atteint les cas de base lorsque la taille du sous-problème devient 1, soit $\frac{n}{b^h} = 1 \implies h = \log_b(n)$.
2. **Nombre de feuilles** : Au niveau $h$, il y a $a^h = a^{\log_b(n)} = n^{\log_b(a)}$ feuilles.
3. **Travail par niveau** : 
   - Au niveau $i$ ($0 \le i < \log_b(n)$), il y a $a^i$ sous-problèmes de taille $\frac{n}{b^i}$. Le coût de recombinaison à ce niveau est :
     $$W_i = a^i \cdot c \left(\frac{n}{b^i}\right)^d = c \cdot n^d \left(\frac{a}{b^d}\right)^i$$
   - Au niveau des feuilles ($i = \log_b(n)$), le coût total est proportionnel au nombre de feuilles : $\mathcal{O}(n^{\log_b(a)})$.

Le coût total $T(n)$ est la somme des coûts de tous les niveaux :

$$T(n) = \sum_{i=0}^{\log_b(n)-1} c \cdot n^d \left(\frac{a}{b^d}\right)^i + \mathcal{O}\left(n^{\log_b(a)}\right)$$

Cette sommation géométrique de raison $r = \frac{a}{b^d}$ conduit directement aux trois cas du théorème maître selon que le terme dominant se situe à la racine ($r < 1$), qu'il est uniformément réparti ($r = 1$), ou qu'il se situe dans les feuilles ($r > 1$). $\blacksquare$

---

## 💡 3. Méthodes classiques de résolution

### 1. Récursion terminale (*Tail Recursion*) et optimisation

Une fonction récursive est dite **terminale** (ou récursive sommative finale) si l'appel récursif est la *toute dernière opération* évaluée par la fonction, sans calcul ultérieur sur la valeur de retour de cet appel.

**Exemple non terminal (Factorielle) :**
```ocaml
let rec fact n =
  if n = 0 then 1
  else n * fact (n - 1) (* Multiplication après l'appel récursif *)
```

**Exemple terminal :**
```ocaml
let fact_tail n =
  let rec aux k acc =
    if k = 0 then acc
    else aux (k - 1) (k * acc)
  in
  aux n 1
```

**Avantage en gestion mémoire :**
Dans un langage doté d'un compilateur optimisant la récursion terminale (TCO - *Tail Call Optimization*), le cadre de pile de l'appel courant est réutilisé (ou écrasé) pour l'appel suivant, ramenant la consommation de la pile de $\mathcal{O}(n)$ à $\mathcal{O}(1)$. La récursion terminale se comporte ainsi rigoureusement comme une boucle itérative.

### 2. Mémoïsation (*Memoization*)

Pour les fonctions récursives présentant des **sous-problèmes recouvrants** (comme le calcul de la suite de Fibonacci naïve), l'arbre des appels redondants conduit à une complexité exponentielle $\mathcal{O}(2^n)$. 

La mémoïsation consiste à stocker les résultats intermédiaires dans une structure de données (tableau associatif, table de hachage ou tableau de programmation dynamique) lors du premier calcul, afin de court-circuiter les appels futurs par un simple accès en temps constant $\mathcal{O}(1)$.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Le débordement de pile (*Stack Overflow*)** :
   Oublier de vérifier la profondeur maximale de récursion ou omettre le cas de base conduit à une saturation de la mémoire allouée à la pile d'appels. En MP2I, il est primordial de savoir estimer la profondeur de la pile en fonction de la taille de l'entrée.

2. **Confusion entre récursion terminale et complexité spatiale** :
   Écrire une fonction récursive terminale n'optimise *rien* par défaut si le compilateur (ou l'interpréteur, par exemple en Python par défaut) n'implémente pas la TCO. De plus, une fonction récursive terminale consomme toujours $\mathcal{O}(1)$ en espace *si et seulement si* la TCO est effective, mais sa complexité temporelle reste liée au nombre d'appels.

3. **Effets de bord et passage de paramètres** :
   Attention, en programmation impérative ou fonctionnelle, aux modifications de structures mutables partagées à travers les différents cadres de pile (références, tableaux). Un retour en arrière (*backtracking*) mal maîtrisé sans restauration explicite de l'état altère l'exactitude de l'algorithme.

4. **Piège des grands nombres et passage par valeur** :
   Passer de grandes structures de données (listes, matrices) par valeur à chaque appel récursif induit un coût de copie en mémoire qui fausse l'analyse de complexité (le coût passe souvent de $\mathcal{O}(1)$ à $\mathcal{O}(\text{taille de la structure})$ par niveau d'appel). Préférer le passage par référence ou par pointeur lorsque le langage le permet.