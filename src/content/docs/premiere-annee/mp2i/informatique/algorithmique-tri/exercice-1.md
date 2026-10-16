---
title: 'Exercice 1 : Complexité spatio-temporelle du tri rapide (QuickSort)'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse fine de la complexité spatio-temporelle du tri rapide (Quicksort)

## Énoncé

Le tri rapide (*Quicksort*) est un algorithme de tri par comparaison fondé sur le principe "diviser pour régner". Bien que sa complexité temporelle en moyenne soit de $\mathcal{O}(N \log N)$, son comportement pire-cas et son empreinte spatiale (due à la pile des appels récursifs) nécessitent une analyse rigoureuse, en particulier dans un contexte de programmation système où la taille de la pile d'exécution est limitée.

On s'intéresse dans ce problème à un tableau $T$ d'éléments permutables de taille $N \in \mathbb{N}^*$. On utilisera le schéma de partitionnement de Lomuto ou de Hoare, en supposant le choix du pivot déterministe (par exemple, le dernier élément du sous-tableau) ou aléatoire.

---

## Questions

### Partie I : Rappels et comportement pire-cas (Temps et Espace)
1. Écrire une fonction en OCaml ou en Python réalisant le partitionnement d'un sous-tableau $T[i \dots j]$ selon le pivot $T[j]$ (partition de Lomuto). Préciser sa complexité temporelle et spatiale.
2. En déduire la structure de la fonction récursive `quicksort`.
3. Établir la relation de récurrence vérifiée par le temps d'exécution $T(N)$ dans le pire des cas (par exemple, un tableau déjà trié avec un pivot mal choisi). Résoudre cette récurrence.
4. Quelle est la consommation maximale de la pile d'appels récursifs dans ce pire des cas ? Conclure sur les limites de l'implémentation naïve face à des entrées de grande taille ($\text{taille} > 10^6$).

### Partie II : Optimisation de l'empreinte spatiale
5. Expliquer comment modifier l'algorithme récursif de telle sorte que la profondeur de la pile d'appels récursifs soit garantie en $\mathcal{O}(\log N)$ dans le pire des cas temporels, en traitant d'abord le plus petit sous-tableau.
6. Démontrer que la taille maximale de la pile d'appels avec cette stratégie d'optimisation est $\mathcal{O}(\log N)$.

### Partie III : Analyse probabiliste du cas moyen
7. On suppose désormais que le pivot est choisi uniformément au hasard parmi les indices du sous-tableau. Soit $C(N)$ la variable aléatoire représentant le nombre de comparaisons effectuées pour trier un tableau de taille $N$. 
   Établir l'équation de récurrence portant sur l'espérance $\mathbb{E}[C(N)]$.
8. Résoudre cette récurrence pour montrer que $\mathbb{E}[C(N)] = \mathcal{O}(N \log N)$.

---

## Pistes et Indications

1. **Partition de Lomuto :** Maintenir un indice de séparation entre les éléments inférieurs au pivot et les éléments supérieurs. Complexité en $\Theta(N)$ en temps, $\mathcal{O}(1)$ en espace auxiliaire.
2. **Pire-cas :** À chaque étape, le pivot sépare le tableau en un sous-tableau vide et un sous-tableau de taille $N-1$.
3. **Optimisation spatiale :** Penser à l'ordre des appels récursifs et à l'élimination de la récursion terminale (*tail-call optimization*).
4. **Espérance :** Utiliser la probabilité que le $i$-ème et le $j$-ème éléments plus petits soient comparés durant l'algorithme.

---

## Corrigé pas à pas

### Partie I

**1. Partition de Lomuto (en Python) :**
```python
def partition(T, low, high):
    pivot = T[high]
    i = low - 1
    for j in range(low, high):
        if T[j] <= pivot:
            i += 1
            T[i], T[j] = T[j], T[i]
    T[i + 1], T[high] = T[high], T[i + 1]
    return i + 1
```
*Complexité :* Temporelle en $\Theta(j - i + 1)$ (parcours linéaire du sous-tableau) et spatiale en $\mathcal{O}(1)$ en espace auxiliaire (tri en place).

**2. Fonction récursive `quicksort` :**
```python
def quicksort(T, low, high):
    if low < high:
        pi = partition(T, low, high)
        quicksort(T, low, pi - 1)
        quicksort(T, pi + 1, high)
```

**3. Relation de récurrence (Pire des cas) :**
Si le tableau est déjà trié et qu'on choisit toujours le dernier élément comme pivot, $\pi = high$, le sous-tableau de gauche est de taille $N-1$ et celui de droite est de taille $0$. 
La relation de récurrence pour le nombre d'opérations $T(N)$ est :
$$T(N) = T(N-1) + T(0) + \Theta(N) = T(N-1) + \Theta(N)$$
Par télescopage, on obtient $T(N) = \sum_{k=1}^N \Theta(k) = \Theta(N^2)$. Le pire des cas est donc quadratique.

**4. Consommation de la pile :**
À chaque appel récursif non trivial, la taille du problème diminue seulement de $1$. La profondeur maximale de la pile d'appels est donc de $N$. 
*Limite du modèle :* Pour un tableau de taille $N = 10^6$ (ordre de grandeur usuel en traitement de données), une profondeur de récursion de $10^6$frames provoque systématiquement un dépassement de pile (*Stack Overflow*) sur les environnements standards (où la pile système est typiquement limitée à quelques mégaoctets, soit environ $10^4$ à $10^5$ appels imbriqués).

---

### Partie II

**5 & 6. Optimisation de la profondeur de pile :**
Pour garantir une pile en $\mathcal{O}(\log N)$, on effectue l'appel récursif sur le plus petit sous-tableau en premier, et on traite le plus grand par récursion terminale (ou itération).

```python
def quicksort_optimise(T, low, high):
    while low < high:
        pi = partition(T, low, high)
        if pi - low < high - pi:
            quicksort_optimise(T, low, pi - 1)
            low = pi + 1  # Équivaut à l'appel récursif pour la partie droite
        else:
            quicksort_optimise(T, pi + 1, high)
            high = pi - 1
```
Puisque l'on appelle récursivement la fonction sur le sous-tableau de taille strictement inférieure à la moitié ($\le \lfloor \frac{N-1}{2} \rfloor$), la taille du problème traité par récursion diminue d'au moins un facteur 2 à chaque niveau où l'on descend. La profondeur maximale de la pile est donc de $\lfloor \log_2(N) \rfloor + 1 = \mathcal{O}(\log N)$.

---

### Partie III

**7 & 8. Analyse probabiliste du cas moyen :**
Soit $C(N)$ le coût (nombre de comparaisons). Si le pivot choisi aléatoirement est le $k$-ième plus petit élément (avec $k$ uniformément réparti entre $1$ et $N$), les sous-tableaux ont pour tailles $k-1$ et $N-k$.
L'espérance vérifie :
$$\mathbb{E}[C(N)] = \mathbb{E}\left[ \Theta(N) + \mathbb{E}[C(k-1) + C(N-k) \mid k] \right]$$
En sommant sur toutes les équiprobabilités :
$$\mathbb{E}[C(N)] = k_0 \cdot N + \frac{1}{N} \sum_{k=1}^{N} \left( \mathbb{E}[C(k-1)] + \mathbb{E}[C(N-k)] \right)$$
Par symétrie :
$$\mathbb{E}[C(N)] = k_0 \cdot N + \frac{2}{N} \sum_{j=0}^{N-1} \mathbb{E}[C(j)]$$
Par une méthode classique de résolution par différence (en calculant $N \mathbb{E}[C(N)] - (N-1)\mathbb{E}[C(N-1)]$ ), on montre par récurrence forte que :
$$\mathbb{E}[C(N)] = \mathcal{O}(N \log N)$$
Cette complexité moyenne garantit l'efficacité du tri rapide pour des volumes de données réalistes, sous réserve d'une gestion rigoureuse de la pile d'exécution.