---
title: 'Exercice 1 : Gestion manuelle de la mémoire (malloc/free)'
description: 'Problème d entraînement type concours officiel.'
---

# Problème : Implémentation et analyse d'un allocateur de blocs contigus sécurisé

**Matière :** Informatique (Filière MP2I)  
Chapitre: ** Programmation avancée en C — Gestion manuelle de la mémoire  
**Thème :** Conception d'un mini-allocateur de mémoire, structures de données bas niveau, analyse critique et sécurité.

---

## I. Énoncé

Dans le cadre de l'optimisation de systèmes embarqués critiques, l'utilisation des fonctions standards de la bibliothèque C (`malloc`, `free`) présente des limites en termes de déterminisme (temps d'exécution variable) et de fragmentation. 

On se propose d'implémenter un gestionnaire de mémoire simplifié simulant un segment de mémoire contigu unique de taille fixe $\text{TAILLE\_MEMOIRE}$ octets, fourni sous forme d'un tableau global d'octets.

### Spécifications techniques
La mémoire gérée est un tableau statique d'octets :
```c
#define TAILLE_MEMOIRE 1024 * 1024 // 1 Mo
static uint8_T zone_memoire[TAILLE_MEMOIRE];
```

Chaque bloc de mémoire, qu'il soit alloué ou libre, sera précédé d'un en-tête (métadonnée) défini par la structure suivante :
```c
typedef struct bloc {
    size_t taille;          // Taille utile du bloc (hors en-tête) en octets
    int est_libre;          // 1 si le bloc est libre, 0 s'il est alloué
    struct bloc* suivant;   // Pointeur vers le bloc adjacent suivant dans la liste chaînée
} bloc_t;
```

---

## II. Questions

1. **Initialisation du système**  
   Écrire une fonction `void initialiser_memoire(void)` qui initialise le système de gestion. Le segment global `zone_memoire` doit être considéré au départ comme un unique grand bloc libre. Préciser les valeurs initiales des champs du premier en-tête.

2. **Stratégie de recherche (*First-Fit*)**  
   Écrire une fonction `void* mon_malloc(size_t taille)` selon la stratégie du *First-Fit* (premier bloc libre assez grand). 
   * *Rappel :* La taille demandée doit être alignée sur un multiple de $8$ octets pour des raisons d'architecture matérielle. Si aucun bloc ne convient ou si la taille demandée est nulle, la fonction retourne `NULL`.

3. **Restitution de mémoire et fusion**  
   Écrire la fonction `void mon_free(void* ptr)` qui libère un bloc préalablement alloué. Si le bloc libéré a un ou deux voisins (précédent et/ou suivant) également libres, le système doit effectuer une **fusion** pour éviter la fragmentation externe.

4. **Analyse critique et limites du modèle**  
   * **Question théorique :** Discuter de la complexité temporelle de `mon_malloc` et `mon_free` dans le pire des cas.
   * **Robustesse :** Quelles sont les failles de sécurité majeures inhérentes à cette implémentation bas niveau (notamment face à des erreurs de manipulation de pointeurs par l'utilisateur) ?

---

## III. Pistes de réflexion

* **Question 1 :** L'en-tête lui-même prend de la place en mémoire (`sizeof(bloc_t)`). Le premier bloc commence nécessairement à l'adresse `(bloc_t*)zone_memoire`.
* **Question 2 :** Pour passer d'un `void*` utilisateur au pointeur `bloc_t` correspondant, un déarithmétique de pointeur est nécessaire (soustraire `sizeof(bloc_t)`). Attention à l'alignement mémoire (`((taille + 7) / 8) * 8`).
* **Question 3 :** La fusion nécessite soit de parcourir la liste depuis le début pour trouver le prédécesseur, soit d'utiliser une liste doublement chaînée. Pour simplifier ici, on supposera l'accès au suivant direct possible, mais la gestion des blocs précédents requiert de l'attention.

---

## IV. Corrigé pas à pas

### 1. Initialisation du système
Le bloc initial englobe toute la mémoire disponible moins la taille occupée par la structure de contrôle initiale.

```c
#include <stdint.h>
#include <stddef.h>

#define TAILLE_MEMOIRE 1024 * 1024

static uint8_t zone_memoire[TAILLE_MEMOIRE];
static bloc_t* premier_bloc = NULL;

void initialiser_memoire(void) {
    premier_bloc = (bloc_t*)zone_memoire;
    premier_bloc->taille = TAILLE_MEMOIRE - sizeof(bloc_t);
    premier_bloc->est_libre = 1;
    premier_bloc->suivant = NULL;
}
```

### 2. Allocation dynamique (`mon_malloc`)
On implémente l'alignement sur $8$ octets et la recherche linéaire (*First-Fit*). Si un bloc est trop grand, on peut optionnellement le diviser (sharding/scission), bien que non strictement exigé, c'est vivement conseillé pour un allocateur performant.

```c
size_t aligner_8(size_t taille) {
    return (taille + 7) & ~((size_t)7);
}

void* mon_malloc(size_t taille) {
    if (taille == 0) return NULL;
    size_t taille_al = aligner_8(taille);
    
    bloc_t* courant = premier_bloc;
    
    while (courant != NULL) {
        if (courant->est_libre && courant->taille >= taille_al) {
            // Scission du bloc si l'excédent le permet
            if (courant->taille >= taille_al + sizeof(bloc_t) + 8) {
                bloc_t* nouveau_bloc = (bloc_t*)((uint8_t*)(courant + 1) + taille_al);
                nouveau_bloc->taille = courant->taille - taille_al - sizeof(bloc_t);
                nouveau_bloc->est_libre = 1;
                nouveau_bloc->suivant = courant->suivant;
                
                courant->taille = taille_al;
                courant->suivant = nouveau_bloc;
            }
            courant->est_libre = 0;
            return (void*)(courant + 1); // Retourne l'adresse juste après l'en-tête
        }
        courant = courant->suivant;
    }
    return NULL; // Plus de mémoire disponible (Out Of Memory)
}
```

### 3. Libération et fusion (`mon_free`)
Pour fusionner efficacement avec le bloc suivant, on vérifie si le `suivant` existe et est libre.

```c
void mon_free(void* ptr) {
    if (ptr == NULL) return;
    
    // Récupération de l'en-tête situé juste avant la zone utilisateur
    bloc_t* bloc = (bloc_t*)ptr - 1;
    bloc->est_libre = 1;
    
    // Fusion avec le bloc suivant s'il est libre
    if (bloc->suivant != NULL && bloc->suivant->est_libre) {
        bloc->taille += sizeof(bloc_t) + bloc->suivant->taille;
        bloc->suivant = bloc->suivant->suivant;
    }
    
    // Note : La fusion avec le bloc précédent nécessiterait une liste doublement chaînée 
    // ou un parcours complet depuis `premier_bloc` pour retrouver le predecessor.
}
```

### 4. Analyse critique et limites du modèle

* **Complexité Temporelle :** 
  * `mon_malloc` est en $\mathcal{O}(N)$ dans le pire des cas (où $N$ est le nombre de fragments de blocs), car on parcourt la liste chaînée des blocs (*First-Fit*). Cela viole le déterminisme strict requis en temps réel dur.
  * `mon_free` est en $\mathcal{O}(1)$ pour la libération simple, mais peut nécessiter $\mathcal{O}(N)$ si l'on souhaite fusionner aussi avec le bloc *précédent* (recherche du prédécesseur dans une liste simplement chaînée).

* **Limites de robustesse et failles de sécurité :**
  1. **Corruption des métadonnées (Buffer Overflow) :** Si un utilisateur écrit au-delà de la taille qu'il a demandé allouer (`taille`), il écrase l'en-tête `bloc_t` du bloc suivant, corrompant instantanément toute la structure de l'allocateur (plantage ou vulnérabilité d'exécution de code arbitraire).
  2. **Double Free et Use-After-Free :** La fonction `mon_free` ne vérifie pas si le bloc a déjà été libéré (`est_libre == 1`). Libérer deux fois le même pointeur corrompt la liste chaînée des blocs libres.
  3. **Fragmentation externe :** Au fil des allocations et libérations de tailles variées, la mémoire se découpe en une multitude de petits blocs inutilisables bien que la somme totale libre soit grande.