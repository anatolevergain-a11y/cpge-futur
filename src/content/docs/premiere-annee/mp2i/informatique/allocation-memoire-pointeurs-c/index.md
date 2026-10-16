---
title: "📌 1. Définitions & Cadre d'étude"
description: "Fiche de cours et d'exercice CPGE."
---

## 📌 1. Définitions & Cadre d'étude

En langage C, la mémoire vive est modélisée comme un tableau linéaire géant d'octets adressables. Chaque emplacement mémoire possède une adresse unique, qui est un entier non signé représentant sa position.

### Modèle de la mémoire d'un processus
La mémoire allouée à un programme en exécution est traditionnellement découpée en plusieurs zones distinctes :
1. **La zone Texte (Code)** : Contient le code machine exécutable du programme.
2. **La zone des données globales et statiques** : Contient les variables globales et les variables locales dotées du qualificatif `static`.
3. **La pile (Stack)** : Zone gérée automatiquement par le système (LIFO : *Last In, First Out*). Elle stocke les variables locales des fonctions et les cadres de pile (*stack frames*) lors des appels de fonctions.
4. **Le tas (Heap)** : Zone de mémoire dite "dynamique", gérée explicitement par le programmeur via des fonctions d'allocation et de libération.

### Le concept de pointeur
Un **pointeur** est une variable dont la valeur est l'adresse mémoire d'une autre variable.
- Déclaration : `type *nom_variable;` (ex: `int *p;`).
- L'opérateur d'adressage `&` permet d'obtenir l'adresse d'une variable : `p = &x;`.
- L'opérateur de déréférencement `*` permet d'accéder ou de modifier la valeur stockée à l'adresse pointée : `*p = 5;`.
---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème d'équivalence entre tableaux et pointeurs
En C, le nom d'un tableau non qualifié est converti (*decay*) lors de son utilisation en un pointeur constant vers son premier élément. 

Soit `T` un tableau de type `type` et d'indice $i$. L'accès par notation tableau `T[i]` est syntaxiquement et sémantiquement rigoureusement équivalent à l'arithmétique des pointeurs :
$$\text{T}[i] \equiv *(T + i)$$

#### Démonstration / Justification formelle :
L'adresse de l'élément d'indice $i$ est calculée par le compilateur en tenant compte de la taille en octets du type sous-jacent $\text{sizeof}(\text{type})$. Si $A$ est l'adresse de base du tableau $T$ (soit $T$), l'adresse de $T[i]$ est :
$$\text{Adresse}(T[i]) = A + i \times \text{sizeof}(\text{type})$$
Le déréférencement de cette adresse par l'opérateur `*` donne directement la valeur stockée à cet emplacement, prouvant l'identité.

---

## 💡 3. Méthodes de calcul & Algorithmes

### Allocation dynamique sur le tas (`malloc`, `calloc`, `realloc`, `free`)
L'utilisation du tas est indispensable lorsque la taille des données n'est pas connue à la compilation ou doit persister au-delà de la portée d'une fonction.

#### 1. Allocation brute avec `malloc`
```c
int *ptr = malloc(n * sizeof(int));
if (ptr == NULL) {
    // Gestion de l'erreur d'allocation (memoire saturee)
    exit(EXIT_FAILURE);
}
```

#### 2. Allocation et initialisation à zéro avec `calloc`
```c
int *ptr = calloc(n, sizeof(int)); // Met tous les octets a 0
```

#### 3. Libération impérative avec `free`
Toute zone allouée dynamiquement doit être libérée exactement une fois pour éviter les fuites de mémoire (*memory leaks*) :
```c
free(ptr);
ptr = NULL; // Bonne pratique pour eviter les "pointeurs pendouillants"
```

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Le pointeur pendouillant (*dangling pointer*)** :
   Accéder à une zone mémoire après sa libération par `free`, ou retourner l'adresse d'une variable locale (allouée sur la pile) d'une fonction qui s'est terminée.
   ```c
   int* f() {
       int x = 5;
       return &x; // ERREUR GRAVE : x est detruit a la sortie de la fonction
   }
   ```

2. **La fuite mémoire (*memory leak*)** :
   Oublier de libérer un bloc mémoire alloué par `malloc`/`calloc`, ou perdre le dernier pointeur y menant en écrasant sa valeur.

3. **Le dépassement de tampon (*buffer overflow*)** :
   Écrire ou lire en dehors des limites d'un tableau alloué (notamment par erreur sur les indices $0$ à $n-1$). En MP2I, ce type d'erreur entraîne un comportement indéfini (*undefined behavior*) et peut corrompre la pile d'exécution.

4. **Confusion entre taille logique et taille physique (`sizeof`)** :
   L'opérateur `sizeof` appliqué à un pointeur passé en paramètre d'une fonction renvoie la taille du pointeur en mémoire (ex: $8$ octets sur une architecture $64$ bits), et **en aucun cas** la taille du tableau pointé.