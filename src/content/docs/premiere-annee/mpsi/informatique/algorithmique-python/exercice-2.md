---
title: 'Exercice 2 : Algorithmes de tri'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude comparée et complexité amortie des algorithmes de tri en Python

**Filière :** MPSI  
**Matière :** Informatique  
**Thème :** Algorithmes de tri, complexité, récursivité et structures de données.

---

## 1. Énoncé et Cadre du Problème

Les algorithmes de tri constituent une brique fondamentale de l'algorithmique. Si les tris élémentaires (tri par insertion, tri par sélection) se révèlent intuitifs, leur complexité temporelle au pire des cas en $\mathcal{O}(N^2)$ les rend inopérants pour de grandes volumétries de données. À l'inverse, les tris par division (comme le tri fusion) garantissent une complexité en $\mathcal{O}(N \log N)$, au prix d'une utilisation accrue de la mémoire.

Dans ce problème, on s'intéresse à l'implémentation, à l'analyse de complexité et aux limites pratiques de plusieurs algorithmes de tri en Python. Une attention particulière sera portée sur la gestion de la mémoire, les constantes cachées de la notation grand $\mathcal{O}$, ainsi que sur la confrontation entre la théorie algorithmique et la réalité architecturale des machines modernes (modèle de coût, hiérarchie mémoire).

---

## 2. Questions

### Partie I : Analyse préliminaire et tris élémentaires

1. **(Q1)** Écrire une fonction Python `tri_insertion(T: list) -> None` qui trie une liste d'éléments par ordre croissant **en place** en utilisant l'algorithme du tri par insertion.
2. **(Q2)** Justifier théoriquement la complexité temporelle dans le pire des cas et dans le meilleur des cas de ce tri par insertion. Pour quelle configuration de la liste d'entrée le pire des cas est-il atteint ?
3. **(Q3)** On considère une liste de $N = 10^6$ entiers. En estimant qu'une opération élémentaire (comparaison/affectation) prend $10^{-9}$ s (1 nanoseconde), évaluer le temps d'exécution théorique du tri par insertion dans le pire des cas. Conclure quant à la pertinence de cet algorithme pour de grandes valeurs de $N$.

### Partie II : Diviser pour régner : Le tri fusion

4. **(Q4)** Écrire une fonction récursive `tri_fusion(T: list) -> list` qui implémente le tri fusion. On pourra s'aider d'une fonction auxiliaire `fusion(L1: list, L2: list) -> list` chargée de fusionner deux listes déjà triées.
5. **(Q5)** Établir la relation de récurrence vérifiée par le nombre d'opérations $C(N)$ du tri fusion, puis, à l'aide du théorème maître ou d'un arbre de récurrence, montrer que $C(N) = \mathcal{O}(N \log_2 N)$.
6. **(Q6)** Analyser la complexité spatiale de l'implémentation naïve du tri fusion en Python. Pourquoi cette approche consomme-t-elle davantage de mémoire que le tri par insertion en place ?

### Partie III : Analyse critique et limites du modèle

7. **(Q7)** En pratique, pour de "petites" valeurs de $N$ (par exemple $N < 30$), le tri par insertion surpasse souvent le tri fusion, alors même que sa complexité asymptotique est supérieure. Proposer une explication physique et architecturale (liée au matériel : cache CPU, appels récursifs, overhead de l'interpréteur Python).
8. **(Q8)** La fonction `list.sort()` intégrée à Python utilise l'algorithme *Timsort*, un tri hybride. Quel est son principe général et quel avantage décisif présente-t-il face au tri fusion classique sur des données réelles ?

---

## 3. Pistes et Indications

* **Q1 & Q4 :** Veillez à respecter les types et à manipuler les indices avec rigueur pour éviter les erreurs de type `IndexError`.
* **Q5 :** Pensez à exprimer clairement la fusion de deux listes de taille globale $N$ en temps linéaire $\mathcal{O}(N)$.
* **Q7 :** Songez aux coûts induits par la pile d'appels récursifs et à la localité des références mémoires en Python (les listes Python contiennent des *pointeurs* vers des objets et non les objets bruts).

---

## 4. Corrigé Pas à Pas

### Partie I : Analyse préliminaire et tris élémentaires

#### Corrigé Q1
```python
def tri_insertion(T: list) -> None:
    for i in range(1, len(T)):
        valeur_insertion = T[i]
        j = i
        # Décalage des éléments plus grands vers la droite
        while j > 0 and T[j - 1] > valeur_insertion:
            T[j] = T[j - 1]
            j -= 1
        T[j] = valeur_insertion
```

#### Corrigé Q2
* **Pire des cas :** $\mathcal{O}(N^2)$. Il est atteint lorsque la liste initiale est triée dans l'ordre strictement décroissant. À chaque étape $i$, il faut parcourir tous les $i$ éléments précédents pour insérer la valeur.
* **Meilleur des cas :** $\mathcal{O}(N)$. Il est atteint lorsque la liste est déjà triée par ordre croissant. La boucle `while` interne ne s'exécute jamais (zéro décalage).

#### Corrigé Q3
Pour $N = 10^6$, le nombre d'opérations dans le pire des cas est de l'ordre de $\frac{N^2}{2} = \frac{10^{12}}{2} = 5 \cdot 10^{11}$ opérations.  
Avec un temps unitaire de $10^{-9}\text{ s}$ par opération :
$$\text{Temps} \approx 5 \cdot 10^{11} \times 10^{-9}\text{ s} = 500\text{ secondes} \approx 8.3\text{ minutes.}$$
Conclusion: ** Pour $N = 10^6$, le tri par insertion est totalement inadapté. Un algorithme en $\mathcal{O}(N \log N)$ effectuerait environ $10^6 \times 20 \approx 2 \cdot 10^7$ opérations, soit un temps de l'ordre de $0.02\text{ s}$.

---

### Partie II : Diviser pour régner : Le tri fusion

#### Corrigé Q4
```python
def fusion(L1: list, L2: list) -> list:
    i, j = 0, 0
    res = []
    n1, n2 = len(L1), len(L2)
    while i < n1 and j < n2:
        if L1[i] <= L2[j]:
            res.append(L1[i])
            i += 1
        else:
            res.append(L2[j])
            j += 1
    res.extend(L1[i:])
    res.extend(L2[j:])
    return res

def tri_fusion(T: list) -> list:
    if len(T) <= 1:
        return T
    milieu = len(T) // 2
    gauche = tri_fusion(T[:milieu])
    droite = tri_fusion(T[milieu:])
    return fusion(gauche, droite)
```

#### Corrigé Q5
Le tri fusion divise la liste en deux sous-listes de taille $N/2$, effectue deux appels récursifs, puis fusionne les résultats en $\mathcal{O}(N)$. La relation de récurrence est :
$$C(N) = 2C\left(\frac{N}{2}\) + \mathcal{O}(N)$$
Par application du théorème maître (cas 2) ou par sommation des coûts sur les $\log_2(N)$ niveaux de l'arbre de récurrence, on obtient immédiatement :
$$C(N) = \mathcal{O}(N \log_2 N)$$

#### Corrigé Q6
L'implémentation naïve ci-dessus crée de nombreuses sous-listes intermédiaires (`T[:milieu]`, `gauche`, `droite`, `res`). La complexité spatiale atteint $\mathcal{O}(N \log N)$ en mémoire cumulée pour les allocations, ou au minimum $\mathcal{O}(N)$ pour la pile de récursion et les tableaux de fusion à un instant donné. Le tri par insertion s'effectue en place ($\mathcal{O}(1)$ de mémoire auxiliaire), ce qui rend le tri fusion beaucoup plus gourmand en ressources mémoire.

---

### Partie III : Analyse critique et limites du modèle

#### Corrigé Q7
Plusieurs facteurs expliquent la supériorité du tri par insertion pour de petites valeurs de $N$ :
1. **Les constantes cachées :** La notation $\mathcal{O}$ escamote les constantes multiplicatives. Le tri par insertion possède une boucle en C (ou optimisée par l'interpréteur) extrêmement simple, sans overhead d'appels de fonctions ni gestion de piles récursives.
2. **La localité des références :** Les listes en Python sont des tableaux de pointeurs vers des objets dispersés en mémoire. Le tri par insertion accède séquentiellement aux éléments, favorisant l'utilisation du cache processeur (L1/L2), contrairement aux allocations dynamiques répétées du tri fusion naïf.

#### Corrigé Q8
*Timsort* est un algorithme hybride dérivé du tri fusion et du tri par insertion, conçu pour exploiter les **runs** (sous-séquences déjà triées) naturellement présents dans les données du monde réel.  
Il commence par identifier ces séquences triées et les fusionne intelligemment à l'aide d'une pile de tailles contrôlées.  
* **Avantage décisif :** Sa complexité dans le meilleur des cas est linéaire $\mathcal{O}(N)$ sur des données partiellement triées, et il adapte dynamiquement sa stratégie aux caractéristiques empiriques des entrées, surclassant les tris purs en $\mathcal{O}(N \log N)$ sur les types usuels.