---
title: 'Exercice 1 : Allocation dynamique (malloc/free) et fuites mémoire'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre du développement d'un module de traitement de données pour un système embarqué en langage C, on s'intéresse à la gestion rigoureuse de la mémoire heap (tas). Une mauvaise gestion des allocations dynamiques (`malloc`, `calloc`, `realloc`, `free`) conduit fréquemment à des fuites mémoire (*memory leaks*), des double-libérations ou des corruptions de tas (*buffer overflow*).

L'objectif de ce problème est d'analyser, de concevoir et de corriger des structures de données dynamiques représentant des matrices creuses d'entiers, tout en garantissant l'absence de fuite mémoire en toutes circonstances (y compris en cas d'échec d'allocation).

On rappelle qu'en langage C, toute allocation par $\text{malloc}$ ou $\text{calloc}$ doit être testée pour vérifier qu'elle ne retourne pas le pointeur $\text{NULL}$, et que chaque zone allouée doit être libérée exactement une fois.

---

### ❓ Questions progressives

1. **Rappels et sécurité :** Écrire une fonction en C permettant d'allouer dynamiquement un tableau unidimensionnel de $n$ entiers (`int`) initialisés à zéro. Si l'allocation échoue, la fonction doit gérer l'erreur proprement en retournant $\text{NULL}$.
2. **Allocation matricielle :** On souhaite représenter une matrice de dimensions $L \times C$ (lignes $\times$ colonnes) sous forme d'un tableau de pointeurs de lignes. 
   - Proposer une structure de données (via `typedef struct`) pour stocker cette matrice ainsi que ses dimensions.
   - Écrire la fonction `allouer_matrice(size_t L, size_t C)` qui alloue une telle structure.
3. **Gestion des erreurs et libération :** Écrire la fonction `liberer_matrice(Matrice *m)` qui libère proprement toute la mémoire associée à la matrice allouée à la question précédente. *Attention à l'ordre des libérations pour éviter les fuites partielles en cas d'échec partiel.*
4. **Cas pratique de fuite mémoire :** On considère un extrait de code effectuant un redimensionnement ou une composition de matrices. Identifier la source potentielle de fuite mémoire dans le code proposé au corrigé et proposer une version corrigée.

---

### 💡 Pistes & Indications méthodologiques

* **Indication 1 (Q2) :** Pensez qu'une matrice dynamique en C est souvent un pointeur vers un tableau de pointeurs (`int **`). Chaque ligne doit être allouée indépendamment, ou alors l'ensemble des données est stocké dans un bloc continu unique (plus performant, mais pour cet exercice, un tableau de pointeurs de lignes est demandé).
* **Indication 2 (Q3) :** En cas d'échec de l'allocation de la $k$-ième ligne lors de la construction de la matrice, il ne faut surtout pas oublier de libérer toutes les lignes précédentes déjà allouées avant de quitter la fonction, sous peine de provoquer une fuite mémoire silencieuse.
* **Indication 3 :** Utilisez systématiquement l'opérateur `sizeof` appliqué au type pointé (ou mieux, au déréférencement du pointeur) pour garantir la portabilité du code.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Allocation sécurisée d'un tableau simple

```c
#include <stdlib.h>
#include <stdio.h>

int* allouer_tableau(size_t n) {
    // Utilisation de calloc pour initialiser la mémoire à 0
    int *tab = (int*) calloc(n, sizeof(int));
    if (tab == NULL) {
        fprintf(stderr, "Erreur : échec de l'allocation mémoire pour le tableau.\n");
        return NULL;
    }
    return tab;
}
```
*Commentaire de l'examinateur :* Le recours à `calloc` est apprécié lorsqu'on souhaite une initialisation à zéro. Le test du pointeur retourné est indispensable en CPGE pour valider la robustesse du code.

#### 2. Définition et allocation de la structure matricielle

Définissons d'abord la structure :
```c
typedef struct {
    size_t lignes;
    size_t colonnes;
    int **donnees; // Tableau de pointeurs vers chaque ligne
} Matrice;
```

Fonction d'allocation :
```c
Matrice* allouer_matrice(size_t L, size_t C) {
    if (L == 0 || C == 0) return NULL;

    Matrice *m = (Matrice*) malloc(sizeof(Matrice));
    if (m == NULL) return NULL;

    m->lignes = L;
    m->colonnes = C;

    // Allocation du tableau des pointeurs de lignes
    m->donnees = (int**) malloc(L * sizeof(int*));
    if (m->donnees == NULL) {
        free(m); // Libération de la structure englobante
        return NULL;
    }

    // Allocation de chaque ligne
    for (size_t i = 0; i < L; i++) {
        m->donnees[i] = (int*) calloc(C, sizeof(int));
        if (m->donnees[i] == NULL) {
            // ÉCHEC PARTIEL : Il faut nettoyer ce qui a déjà été alloué !
            for (size_t j = 0; j < i; j++) {
                free(m->donnees[j]);
            }
            free(m->donnees);
            free(m);
            return NULL;
        }
    }

    return m;
}
```

#### 3. Libération sécurisée de la mémoire

Pour éviter toute fuite mémoire, la désallocation doit se faire exactement dans l'ordre inverse de l'allocation :

```c
void liberer_matrice(Matrice *m) {
    if (m == NULL) {
        return; // Sécurité classique
    }

    if (m->donnees != NULL) {
        for (size_t i = 0; i < m->lignes; i++) {
            free(m->donnees[i]); // Libération de chaque ligne
        }
        free(m->donnees); // Libération du tableau de pointeurs
    }

    free(m); // Libération de la structure principale
}
```

#### 4. Analyse d'une fuite mémoire classique (Piège de concours)

*Extrait erroné fréquent :*
```c
Matrice *m = allouer_matrice(3, 3);
// ... utilisation ...
m = allouer_matrice(5, 5); // ⚠️ FUITE MÉMOIRE !
```
Explication: * En réaffectant la variable `m` avec un nouvel appel à `allouer_matrice(5, 5)`, l'adresse de la première matrice (3x3) allouée dans le tas est perdue. Aucun `free` n'a été appelé au préalable sur cette première matrice, ce qui engendre une **fuite mémoire irrémédiable** dans le processus.
Correction: *
```c
Matrice *m = allouer_matrice(3, 3);
// ... utilisation ...
liberer_matrice(m); // On libère l'ancienne ressource avant réaffectation
m = allouer_matrice(5, 5);
if (m == NULL) {
    // Gérer l'échec
}