---
title: 'Exercice 2 : Pointeurs de fonctions et structures'
description: 'Problème d entraînement type concours officiel.'
---

# Problème : Moteur d'inférence modulaire et gestion de flux typés

## Énoncé

Dans le cadre du développement d'un système embarqué à haute fiabilité, on souhaite concevoir un moteur de traitement de données capable d'appliquer dynamiquement des transformations à des flux hétérogènes. L'objectif est d'implémenter en langage C un mécanisme générique s'appuyant sur des structures auto-descriptives et des pointeurs de fonctions, garantissant un découplage fort entre la structure des données et les algorithmes de traitement.

On s'interdira l'utilisation de bibliothèques dynamiques externes (`dlopen` etc.) ; tout doit être résolu statiquement par la sémantique rigoureuse des types du C (standard C11).

---

## Questions

### Partie I : Modélisation des données et typage abstrait

1. **[Q1]** Définir une énumération `TypeDonnee` permettant de distinguer au moins les types suivants : `ENTIER`, `REEL` et `CHAINE`.
2. **[Q2]** Proposer la définition d'une structure `Donnee` encapsulant une valeur arbitraire parmi les types précédents (via une union anonyme ou nommée) ainsi que son type explicite.
3. **[Q3]** Écrire une fonction `void afficher_donnee(const Donnee *d)` qui affiche proprement la valeur portée par `d` selon son type, en gérant les cas d'erreur (pointeur NULL, type inconnu).

### Partie II : Abstraction du traitement par pointeurs de fonctions

4. **[Q4]** Définir un type `Opérateur` sous forme de pointeur de fonction, représentant une fonction qui prend en entrée un pointeur constant vers une `Donnee`, modifie ou produit une nouvelle `Donnee`, et retourne un code d'erreur de type `int` ($0$ en cas de succès, $-1$ en cas d'échec).
5. **[Q5]** Définir une structure `Filtre` qui associe à un nom (chaîne de caractères de taille maximale fixée) une fonction de type `Opérateur` et un seuil de criticité (entier).
6. **[Q6]** Écrire une fonction `int appliquer_filtre(Filtre *f, Donnee *d)` qui exécute le traitement associé au filtre `f` sur la donnée `d`, en mesurant abstraitement le coût de l'opération.

### Partie III : Analyse critique et limites du modèle

7. **[Q7]** Mener une analyse critique rigoureuse des limites du modèle proposé en C par rapport à la sécurité mémoire, l'extensibilité des types et la vérification statique des types (comparaison avec un langage à objets ou fonctionnel).

---

## Pistes et Indications

* **P1 (Unions)** : Veillez à ce que la structure `Donnee` gé correctement la durée de vie des chaînes de caractères si elles sont allouées dynamiquement.
* **P2 (Pointeurs de fonctions)** : La syntaxe de déclaration d'un pointeur de fonction en C s'écrit `type (*nom)(parametres)`. Utilisez `typedef` pour alléger l'écriture.
* **P3 (Sécurité)** : En C, le polymorphisme ad-hoc via des unions n'est pas vérifié par le compilateur. Des gardes à l'exécution (`switch` sur le type) sont indispensables.

---

## Corrigé Pas à Pas

### Partie I : Modélisation des données et typage abstrait

#### [Q1] & [Q2] : Énumération et Structure `Donnee`

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef enum {
    ENTIER,
    REEL,
    CHAINE,
    INCONNU
} TypeDonnee;

typedef struct {
    TypeDonnee type;
    union {
        int ent;
        double reel;
        char *chaine; // Allouée dynamiquement si nécessaire
    } valeur;
} Donnee;
```

#### [Q3] : Fonction d'affichage sécurisée

```c
void afficher_donnee(const Donnee *d) {
    if (d == NULL) {
        fprintf(stderr, "Erreur: Pointeur NULL \text{dans afficher\_donnee}\n");
        return;
    }
    switch (d->type) {
        case ENTIER:
            printf("Entier : %d\n", d->valeur.ent);
            break;
        case REEL:
            printf("Réel : %lf\n", d->valeur.reel);
            break;
        case CHAINE:
            printf("Chaîne : %s\n", d->valeur.chaine ? d->valeur.chaine : "(null)");
            break;
        default:
            fprintf(stderr, "Erreur: Type de donnée non supporté\n");
            break;
    }
}
```

---

### Partie II : Abstraction du traitement par pointeurs de fonctions

#### [Q4] & [Q5] : Définition de l'opérateur et du filtre

```c
// Définition du type pointeur de fonction
typedef int (*Operateur)(Donnee *d);

#define TAILLE_NOM_MAX 64

typedef struct {
    char nom[TAILLE_NOM_MAX];
    Operateur op;
    int seuil_criticite;
} Filtre;
```

#### [Q6] : Application d'un filtre

```c
int appliquer_filtre(Filtre *f, Donnee *d) {
    if (f == NULL || f->op == NULL || d == NULL) {
        return -1;
    }
    
    // Appel indirect via le pointeur de fonction
    int statut = f->op(d);
    
    if (statut != 0) {
        fprintf(stderr, "Alerte: Le filtre '%s' (seuil %d) a échoué.\n", 
                f->nom, f->criticite);
    }
    
    return statut;
}
```

---

### Partie III : Analyse critique et limites du modèle

L'utilisation de structures en C couplées à des unions et des pointeurs de fonctions permet d'émuler un comportement polymorphe (similaire aux classes abstraites ou interfaces en programmation orientée objet). Toutefois, ce modèle présente des limites conceptuelles et de sécurité majeures en contexte CPGE / haute criticité :

1. **Absence de sécurité de typage (*Type Safety*)** : 
   L'union `valeur` ne conserve aucune trace active du type réel stocké en mémoire. Si un `Operateur` manipule par mégarde un champ `reel` alors que la structure contient un `ent`, aucun mécanisme de vérification à la compilation (*type checking*) ne l'interdit. Cela peut mener à des comportements indéfinis (*Undefined Behavior*).
2. **Gestion manuelle de la durée de vie des ressources** : 
   Si le type `CHAINE` utilise un pointeur alloué par `malloc`, la copie superficielle (`memcpy` ou affectation de structures) de la structure `Donnee` induit des *double free* ou des *memory leaks*. Le C ne propose pas de sémantique de déplacement (*move semantics*) ou de constructeur par copie automatique comme le C++.
3. **Extensibilité et Couplage** : 
   L'ajout d'un nouveau type de données oblige à modifier l'énumération `TypeDonnee`, l'union, mais aussi **l'ensemble** des structures `switch` réparties dans le code (fonction d'affichage, sérialisation, opérateurs). C'est une violation directe du principe ouvert/fermé (*Open/Closed Principle*).