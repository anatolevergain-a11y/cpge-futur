---
title: 'Cours : Programmation avancée en C'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Programmation avancée en C (MP2I)

Cette fiche couvre les aspects avancés du langage C au programme de la filière MP2I : gestion dynamique de la mémoire, structures de données fondamentales, manipulation des bits et complexité algorithmique. La rigueur de représentation en machine y est particulièrement exigée.

---

## 1. Gestion dynamique de la mémoire et pointeurs avancés

### A. L'alignement et l'opérateur `sizeof`
La mémoire est adressable par octets. Cependant, l'accès à un type de données de $k$ octets (avec $k$ souvent puissance de 2) s'effectue plus efficacement si l'adresse est un multiple de $k$ (contrainte d'alignement).

- **Définition (`sizeof`)** : L'opérateur `sizeof` renvoie la taille en octets d'un type ou d'une expression sous la forme d'un entier non signé (`size_t`).
- **Piège majeur** : `sizeof` est évalué à la compilation (sauf pour les VLA - *Variable Length Arrays*). Il ne faut jamais passer d'expression comportant des effets de bord à l'intérieur de `sizeof`.

### B. Allocation dynamique : `malloc`, `calloc`, `realloc`, `free`
Inclus via `<stdlib.h>`.

- **`void* malloc(size_t size)`** : Alloue un bloc de `size` octets non initialisés. Renvoie `NULL` en cas d'échec.
- **`void* calloc(size_t nmemb, size_t size)`** : Alloue un bloc pour `nmemb` éléments de `size` octets et **initialise tous les bits à zéro**.
- **`void* realloc(void* ptr, size_t size)`** : Redimensionne le bloc pointé par `ptr` à `size` octets. Si `ptr` est `NULL`, équivaut à `malloc(size)`. Si `size` est $0$ et `ptr` non `NULL`, libère le bloc et renvoie `NULL` (comportement dépendant de l'implémentation, à éviter).

> **Théorème (Sécurité d'allocation)** : Tout appel à `malloc`, `calloc` ou `realloc` doit obligatoirement être suivi d'un test de non-nullité du pointeur retourné avant toute déréférenciation.

```c
int *tab = malloc(n * sizeof(int));
if (tab == NULL) {
    // Gestion de l'erreur fatale (ex: exit(EXIT_FAILURE))
}
```

- **`void free(void* ptr)`** : Libère le bloc mémoire pointé par `ptr`. Si `ptr` est `NULL`, `free` ne fait rien.
- **Piège (Fuite de mémoire et double free)** : Oublier de libérer un bloc alloué provoque une fuite mémoire. Libérer deux fois le même pointeur mène à un comportement indéfini (corruption de la *heap*). Après un `free(ptr)`, il est fortement conseillé de poser `ptr = NULL;`.

---

## 2. Structures, Unions et Types Opaque

### A. Structures (`struct`) et Champs de bits
Une structure permet de regrouper des variables de types potentiellement différents.

- **Alignement et Padding** : Le compilateur insère des octets de remplissage (*padding*) pour que chaque champ respecte sa contrainte d'alignement. 
- **Méthode** : Pour optimiser la mémoire, ordonner les champs de la structure par taille décroissante.

```c
// Structure mal optimisée (génère du padding)
struct Bad {
    char c;     // 1 octet + 3 octets de padding
    int i;      // 4 octets
    char d;     // 1 octet + 3 octets de padding
}; // sizeof(struct Bad) == 12 octets

// Structure optimisée
struct Good {
    int i;      // 4 octets
    char c;     // 1 octet
    char d;     // 1 octet + 2 octets de padding
}; // sizeof(struct Good) == 8 octets
```

### B. Unions (`union`)
Une `union` partage la même zone mémoire pour tous ses membres. La taille d'une union est celle de son plus grand membre (plus l'éventuel padding).

---

## 3. Manipulation de bits et Opérateurs bit à bit

Indispensable en MP2I pour l'optimisation et la représentation bas niveau.

- **Opérateurs** :
  - ET bit à bit : `&`
  - OU inclusif bit à bit : `|`
  - OU exclusif (XOR) : `^`
  - Complément à un (NON) : `~`
  - Décalage à gauche : `<<` (Attention : $x \ll k entspricht x \times 2^k$ si pas de dépassement)
  - Décalage à droite : `>>` (Arithmétique pour les signés, logique pour les non signés).

> **Piège** : Les décalages d'un nombre de bits supérieur ou égal à la largeur du type (en bits) constituent un comportement indéfini en C.

---

## 4. Complexité et Structures de données classiques

### A. Tableaux dynamiques (Vecteurs)
Un tableau dynamique double sa capacité (`capacity`) dès que le nombre d'éléments (`size`) atteint cette dernière.

- **Théorème (Complexité amortie)** : L'insertion de $n$ éléments dans un tableau dynamique vide se fait en un temps total $\mathcal{O}(n)$, soit un coût amorti de $\mathcal{O}(1)$ par insertion.

### B. Listes chaînées
Une liste simplement chaînée est définie inductivement :

```c
struct maillon {
    int valeur;
    struct maillon *suivant;
};
```

| Opération | Tableau statique/dynamique | Liste chaînée |
| :--- | :--- | :--- |
| Accès au $i$-ème élément | $\mathcal{O}(1)$ | $\mathcal{O}(i)$ |
| Insertion en tête | $\mathcal{O}(n)$ | $\mathcal{O}(1)$ |
| Insertion après un pointeur | $\mathcal{O}(n)$ | $\mathcal{O}(1)$ |

---

## 5. Pièges et Erreurs Classiques en C (Résumé MP2I)

1. **Déréférencement de pointeur pendu (*dangling pointer*)** : Pointer vers une variable locale dont la portée est dépassée (pile).
2. **Dépassement de tampon (*buffer overflow*)** : Écrire au-delà des limites d'un tableau alloué.
3. **Pointeurs non initialisés** : Un pointeur local non initialisé contient une valeur arbitraire (adresse poubelle). Le déréférencer mène à un *Segmentation Fault*.
4. **Erreur de type dans `sizeof`** : `sizeof(ptr)` donne la taille du pointeur (4 ou 8 octets), et **non** la taille du bloc pointé.