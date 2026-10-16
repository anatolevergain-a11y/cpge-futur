---
title: 'Exercice 2 : Pointeurs, tableaux et structures de données en C'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre de l'optimisation de structures de données pour des systèmes embarqués en temps réel, on s'intéresse à la représentation et à la manipulation de listes chaînées en mémoire contiguë, simulant un mini-allocateur. 

L'objectif de ce problème est de concevoir et manipuler des structures de données en C basées sur l'arithmétique des pointeurs, la gestion rigoureuse de la mémoire dynamique, et le respect des contraintes d'alignement.

On définit une structure représentant un bloc de données typé :

```c
typedef enum {
    TYPE_INT,
    TYPE_FLOAT,
    TYPE_CHAR
} TypeDonnee;

typedef struct {
    Type_Donnee type;
    union {
        int i;
        float f;
        char c;
    } valeur;
    size_t taille_recouvrement; // Métadonnée pour la gestion mémoire
} BlocMemoire;
```

---

### ❓ Questions progressives

1. **Représentation et Alignement :** 
   Expliquer qualitativement pourquoi la taille de la structure `BlocMemoire` peut être supérieure à la somme des tailles de ses champs pris individuellement (notion d'alignement mémoire en C). Écrire une expression permettant d'obtenir l'offset (le décalage en octets) du champ `valeur` au sein de la structure sans utiliser la fonction `offsetof` de `<stddef.h>`.

2. **Allocation et Initialisation :** 
   Écrire une fonction en C `BlocMemoire* creer_bloc(TypeDonnee t, void* source)` qui alloue dynamiquement un `BlocMemoire`, initialise son `type`, copie la valeur pointée par `source` dans la bonne variante de l'union, et initialise `taille_recouvrement` à la taille réelle du type stocké (que l'on obtiendra via l'opérateur `sizeof`). En cas d'échec d'allocation, la fonction devra retourner `NULL`.

3. **Tableau dynamique hétérogène :** 
   On souhaite manipuler un tableau de blocs mémoire de taille variable. Définir une structure `TableauBlocs` contenant un pointeur vers un tableau de `BlocMemoire`, ainsi que sa capacité actuelle et le nombre d'éléments effectivement présents.

4. **Redimensionnement (Réallocation) :** 
   Écrire une fonction `int ajouter_bloc(TableauBlocs* tb, BlocMemoire b)` qui ajoute un bloc à la fin du tableau `tb`. Si la capacité est atteinte, la fonction devra doubler la capacité du tableau en utilisant `realloc`. Elle renverra `1` en cas de succès et `0` en cas d'échec (mémoire insuffisante).

5. **Parcours et Libération :** 
   Écrire une fonction `void liberer_tableau(TableauBlocs* tb)` qui libère proprement toute la mémoire associée au tableau dynamique, y compris les éventuelles ressources internes si nécessaire, et remet les champs à zéro.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pensez aux contraintes d'alignement des processeurs (les types de $4$ ou $8$ octets doivent souvent être situés à des adresses multiples de leur taille). Pour l'offset, utilisez un pointeur nul astucieusement casté : `(size_t)&(((Type *)0)->champ)`.
* **Question 2 :** Soyez vigilants sur le typage des pointeurs lors de la copie (`memcpy` ou affectation directe via déréférencement selon le type).
* **Question 4 :** Gérez proprement le cas où la capacité initiale est nulle (`capacity = 0`). Un doublement de taille nécessite de traiter ce cas particulier (passer de $0$ à $1$ ou $2$ par exemple).
* **Rigueur CPGE :** Vérifiez systématiquement les retours de `malloc` et `realloc` pour éviter les fuites mémoire ou les déréférencements de pointeurs nuls (`NULL`).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Représentation et Alignement
En C, pour des raisons d'efficacité matérielle (accès mémoire aligné sur les mots machine), le compilateur insère des octets de remplissage (*padding*) entre les champs d'une structure pour que chaque membre soit aligné sur un multiple de sa taille naturelle. De plus, la taille totale de la structure est souvent un multiple de l'alignement de son membre le plus strict.

Pour trouver l'offset du champ `valeur` sans `offsetof`, on peut utiliser un patron de pointeur basé sur l'adresse nulle :
```c
size_t offset_valeur = (size_t)(&((BlocMemoire *)0)->valeur);
```
Explication: * On simule un pointeur de type `BlocMemoire*` pointant vers l'adresse $0$. En accédant au champ `valeur` (`->valeur`) et en prenant son adresse (`&`), on obtient directement le décalage en octets par rapport au début de la structure.

---

#### 2. Allocation et Initialisation
```c
#include <stdlib.h>
#include <string.h>

BlocMemoire* creer_bloc(TypeDonnee t, void* source) {
    if (source == NULL) return NULL;

    BlocMemoire* bloc = (BlocMemoire*)malloc(sizeof(BlocMemoire));
    if (bloc == NULL) {
        return NULL; // Échec d'allocation
    }

    bloc->type = t;

    switch (t) {
        case TYPE_INT:
            bloc->valeur.i = *(int*)source;
            bloc->taille_recouvrement = sizeof(int);
            break;
        case TYPE_FLOAT:
            bloc->valeur.f = *(float*)source;
            bloc->taille_recouvrement = sizeof(float);
            break;
        case TYPE_CHAR:
            bloc->valeur.c = *(char*)source;
            bloc->taille_recouvrement = sizeof(char);
            break;
        default:
            free(bloc);
            return NULL; // Type inconnu
    }

    return bloc;
}
```

---

#### 3. Tableau dynamique hétérogène
```c
typedef struct {
    BlocMemoire* data;   // Pointeur vers le tableau de blocs
    size_t taille;       // Nombre d'éléments actuels
    size_t capacite;     // Capacité maximale allouée
} TableauBlocs;
```

---

#### 4. Redimensionnement (Réallocation)
```c
int ajouter_bloc(TableauBlocs* tb, BlocMemoire b) {
    if (tb == NULL) return 0;

    if (tb->taille >= tb->capacite) {
        size_t nouvelle_capacite = (tb->capacite == 0) ? 4 : tb->capacite * 2;
        BlocMemoire* temp = (BlocMemoire*)realloc(tb->data, nouvelle_capacite * sizeof(BlocMemoire));
        
        if (temp == NULL) {
            return 0; // Échec de la réallocation, l'ancien bloc 'data' reste intact
        }
        
        tb->data = temp;
        tb->capacite = nouvelle_capacite;
    }

    tb->data[tb->taille] = b; // Copie structurelle (copie de la structure BlocMemoire)
    tb->taille++;
    
    return 1; // Succès
}
```

---

#### 5. Parcours et Libération
```c
void liberer_tableau(TableauBlocs* tb) {
    if (tb == NULL) return;

    // Si les blocs contenaient des allocations internes, on les libérerait ici.
    // Dans notre cas, les données sont stockées directement dans la structure (via l'union),
    // donc seul le tableau contigu 'data' doit être libéré.
    
    free(tb->data);
    
    tb->data = NULL;
    tb->taille = 0;
    tb->capacite = 0;
}