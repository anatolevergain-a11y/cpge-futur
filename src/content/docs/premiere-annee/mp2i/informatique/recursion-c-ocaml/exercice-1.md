---
title: 'Exercice 1 : Pointeurs et allocation dynamique en C'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la conception d'un système embarqué à ressources contraintes (par exemple, un microcontrôleur destiné à l'acquisition de données sismiques ou environnementales), on s'intéresse à la représentation et à la manipulation de séries temporelles de grande taille. 

Les données proviennent de capteurs haute fréquence générant des flux continus. Pour analyser ces flux sans saturer la mémoire vive (RAM) disponible — typiquement $512\text{ Kio}$ sur une cible de type ARM Cortex-M —, on modélise le signal sous la forme d'une liste chaînée dynamique de blocs contigus, appelés *chunks*. 

L'objectif de ce problème est de concevoir, implémenter et analyser rigoureusement en langage C un module de gestion de mémoire pour ces structures, en évitant les fuites mémoire, les dépassements de tampons (*buffer overflows*) et en optimisant le coût d'allocation dynamique.

On pose les structures de données fondamentales suivantes en C :

```c
#include <stdint.h>
#include <stdlib.h>

#define CHUNK_SIZE 256 // Taille fixe d'un bloc de données en nombre d'échantillons

typedef struct DataChunk {
    int32_t values[CHUNK_SIZE]; // Données brutes (entiers signés 32 bits)
    size_t count;               // Nombre d'éléments réellement stockés (0 <= count <= CHUNK_SIZE)
    struct DataChunk* next;     // Pointeur vers le bloc suivant
} DataChunk;

typedef struct {
    DataChunk* head;            // Premier bloc de la liste
    DataChunk* tail;            // Dernier bloc pour l'insertion en O(1)
    size_t total_elements;      // Nombre total d'échantillons stockés
} SignalStream;
```

---

### ❓ Questions progressives

#### I. Analyse théorique et modélisation mémoire
1. **[Q1]** Calculer l'empreinte mémoire exacte (en octets) d'une structure `DataChunk` sur une architecture 64-bit standard (où un pointeur occupe $8$ octets, un `size_t` $8$ octets, et un `int32_t` $4$ octets). Justifier la présence éventuelle de bourrage mémoire (*padding*).
2. **[Q2]** Si l'on souhaite stocker un signal de $10^6$ échantillons, estimer la mémoire totale occupée par les structures `DataChunk` (données utiles + métadonnées de chaînage). En déduire le taux de surcoût (*overhead*) mémoire induit par l'utilisation de cette liste chaînée par rapport à un tableau contigus géant.
3. **[Q3]** *Analyse critique :* Discuter des limites de ce modèle pour un système temps réel dur. Quels sont les risques liés aux appels répétés à la fonction `malloc` dans une boucle d'acquisition haute fréquence ?

#### II. Implémentation et gestion sécurisée des pointeurs
4. **[Q4]** Écrire une fonction `SignalStream* create_stream(void)` qui initialise un flux de données vide de manière sécurisée (vérification des retours d'allocation).
5. **[Q5]** Écrire une fonction `int append_sample(SignalStream* stream, int32_t sample)` qui ajoute un échantillon au flux. Si le dernier bloc est plein, un nouveau bloc doit être alloué dynamiquement et rattaché au flux. La fonction retournera `1` en cas de succès et `0` si l'allocation échoue.
6. **[Q6]** Proposer une analyse de la complexité temporelle dans le pire des cas et en moyenne pour l'insertion de $N$ échantillons dans un flux initialement vide via la fonction `append_sample`.

#### III. Robustesse, récursivité et libération de la mémoire
7. **[Q7]** Écrire une fonction *itérative* `void free_stream_iterative(SignalStream* stream)` qui libère proprement toute la mémoire associée au flux.
8. **[Q8]** Écrire une fonction *récursive* `void free_chunks_recursive(DataChunk* chunk)` permettant de libérer les blocs de la liste chaînée. 
9. **[Q9]** *Analyse critique :* Soit $M$ le nombre total de blocs `DataChunk` dans la liste. Quelle est la complexité spatiale sur la pile d'exécution (*call stack*) de la version récursive de la question Q8 ? Pour un système embarqué disposant d'une pile de $4\text{ Kio}$, quel est le nombre maximal de blocs tolérable avant un débordement de pile (*stack overflow*) ? Conclure sur l'adéquation de la récursivité dans ce contexte.

---

### 💡 Pistes & Indications

- **Q1 :** Attention à l'alignement mémoire (*alignment requirements*) des types sur 64-bit (les pointeurs et `size_t` s'alignent généralement sur 8 octets).
- **Q5 :** Penser à maintenir à jour les champs `head`, `tail`, `count` et `total_elements`. Le cas où le flux est initialement vide (`head == NULL`) doit être traité comme un cas particulier.
- **Q8 & Q9 :** Pour libérer récursivement une structure chaînée, il est impératif de libérer le reste de la liste *avant* de libérer le nœud courant, ou de transmettre le témoin correctement, tout en évaluant la profondeur de récursion.

---

### 📋 Corrigé détaillé et analyse des résultats

#### I. Analyse théorique et modélisation mémoire

1. **[Corrigé Q1]**
   - Tableau `values` : $256 \times 4 = 1024$ octets.
   - Champ `count` : de type `size_t` ($8$ octets).
   - Champ `next` : pointeur vers `struct DataChunk` ($8$ octets).
   - *Alignement et Padding* : Sur une architecture 64-bit, la taille totale est souvent un multiple de l'alignement maximal requis (ici $8$ octets). 
     - `values` : $1024$ octets (divisible par $8$).
     - `count` : $8$ octets.
     - `next` : $8$ octets.
     - Total = $1024 + 8 + 8 = 1040$ octets. Aucun bourrage supplémentaire n'est strictement nécessaire car la somme est un multiple de $8$. La taille d'un `DataChunk` est donc de $1040$ octets.

2. **[Corrigé Q2]**
   - Nombre de blocs nécessaires pour $10^6$ échantillons avec `CHUNK_SIZE = 256` :
     $$\left\lceil \frac{10^6}{256} \right\rceil = \lceil 3906.25 \rceil = 3907 \text{ blocs}$$
   - Mémoire totale occupée : $3907 \times 1040 = 4\,063\,280\text{ octets} \approx 3.87\text{ Mio}$.
   - Mémoire strictement utile : $10^6 \times 4 = 4\,000\,000\text{ octets} \approx 3.81\text{ Mio}$.
   - Surcoût (*overhead*) : $4\,063\,280 - 4\,000\,000 = 63\,280\text{ octets}$, soit un taux de surcoût d'environ $\frac{63280}{4000000} \approx 1.58\%$. Ce modèle est donc très économe en mémoire par rapport aux métadonnées.

3. **[Corrigé Q3]**
   - *Analyse critique :* L'appel fréquent à `malloc` dans une boucle d'acquisition temps réel pose deux problèmes majeurs :
     1. **Déterminisme temporel :** L'allocateur de la bibliothèque standard (`malloc`/`free`) n'a pas un temps d'exécution garanti en $O(1)$ (risques de fragmentation du monceau ou *heap fragmentation*, recherche dans les listes de blocs libres).
     2. **Risque de saturation (*Out Of Memory*) :** Si le système tourne indéfiniment sans politique de purge, l'allocation dynamique finira par échouer, entraînant un crash du programme.
   - *Alternative industrielle :* Utiliser un pool de mémoire pré-alloué (*memory pool* ou *arena allocator*) pour s'affranchir des appels dynamiques répétés.

---

#### II. Implémentation et gestion sécurisée des pointeurs

4. **[Corrigé Q4]**
```c
SignalStream* create_stream(void) {
    SignalStream* stream = (SignalStream*)malloc(sizeof(SignalStream));
    if (stream == NULL) {
        return NULL; // Échec d'allocation
    }
    stream->head = NULL;
    stream->tail = NULL;
    stream->total_elements = 0;
    return stream;
}
```

5. **[Corrigé Q5]**
```c
int append_sample(SignalStream* stream, int32_t sample) {
    if (stream == NULL) return 0;

    // Cas 1: Le flux est vide ou le dernier bloc est plein
    if (stream->tail == NULL || stream->tail->count == CHUNK_SIZE) {
        DataChunk* new_chunk = (DataChunk*)malloc(sizeof(DataChunk));
        if (new_chunk == NULL) return 0; // Échec mémoire

        new_chunk->count = 0;
        new_chunk->next = NULL;

        if (stream->head == NULL) {
            stream->head = new_chunk;
        } else {
            stream->tail->next = new_chunk;
        }
        stream->tail = new_chunk;
    }

    // Ajout effectif dans le bloc courant (tail)
    stream->tail->values[stream->tail->count] = sample;
    stream->tail->count++;
    stream->total_elements++;

    return 1;
}
```

6. **[Corrigé Q6]**
   - Pour $N$ insertions :
     - La grande majorité des insertions se fait dans le bloc existant en temps $O(1)$ strict.
     - Toutes les $CHUNK\_SIZE$ insertions, un appel à `malloc` est effectué, ce qui prend un temps en $O(1)$ en moyenne amortie (mais potentiellement plus long dans le pire des cas).
   - En moyenne, le coût par insertion est en $O(1)$ amorti. Dans le pire des cas (lorsqu'un `malloc` est déclenché), une opération prend un temps linéaire par rapport au travail de l'allocateur, mais amorti sur $256$ opérations, le coût unitaire reste constant.

---

#### III. Robustesse, récursivité et libération de la mémoire

7. **[Corrigé Q7]**
```c
void free_stream_iterative(SignalStream* stream) {
    if (stream == NULL) return;

    DataChunk* current = stream->head;
    while (current != NULL) {
        DataChunk* next_chunk = current->next;
        free(current);
        current = next_chunk;
    }
    free(stream);
}
```

8. **[Corrigé Q8]**
```c
void free_chunks_recursive(DataChunk* chunk) {
    if (chunk == NULL) return;
    free_chunks_recursive(chunk->next); // Appel récursif sur la suite
    free(chunk);                        // Libération post-ordre
}

void free_stream_recursive(SignalStream* stream) {
    if (stream == NULL) return;
    free_chunks_recursive(stream->head);
    free(stream);
}
```

9. **[Corrigé Q9]**
   - *Complexité spatiale :* La fonction récursive `free_chunks_recursive` empile un cadre d'appel (*stack frame*) par bloc. La complexité en espace de la pile est donc en $O(M)$, où $M$ est le nombre de blocs.
   - *Calcul critique de dimensionnement :* 
     - Supposons qu'un cadre d'appel pour `free_chunks_recursive` consomme environ $32$ octets sur la pile (sauvegarde des registres, adresse de retour, argument `chunk`).
     - Avec une pile de $4\text{ Kio} = 4096$ octets, et en supposant l'absence d'autres fonctions actives, le nombre maximal de cadres d'appel est :
       $$\text{Max blocs} = \frac{4096}{32} = 128 \text{ blocs}$$
     - Pour $10^6$ échantillons, $M = 3907$ blocs. $3907 \gg 128$, ce qui conduirait inévitablement à un *stack overflow* fatal.
   - *Conclusion :* Bien que élégante, la récursivité non terminale (*tail-recursion*) est **fortement proscrite** pour la manipulation de structures de données dynamiques profondes sur les systèmes embarqués à pile limitée. La version itérative (Q7) est la seule viable en production.