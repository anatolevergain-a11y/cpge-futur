---
title: 'Exercice 2 : Simulation de variables aléatoires et loi des grands nombres'
description: 'Problème d entraînement type concours.'
---

# Problème : Modélisation stochastique de la dérive génétique et de la loi des grands nombres

## Énoncé et Contexte Biologique

En biologie évolutive, la **dérive génétique** désigne la modification aléatoire de la fréquence des allèles d'une population au fil des générations, indépendamment de la sélection naturelle. Elle est particulièrement marquée dans les petites populations (effet fondateur, goulot d'étranglement). 

Imaginons une population diploïde d'effectif constant $N$ individus. Concernant un gène donné possédant deux allèles $A$ et $a$, on s'intéresse à la fréquence $p$ de l'allèle $A$ dans la population. Si la reproduction se fait selon le modèle de Wright-Fisher, le nombre de copies de l'allèle $A$ à la génération suivante suit une loi binomiale.

L'objectif de ce problème est d'utiliser Python pour simuler cette dérive génétique, d'illustrer la Loi des Grands Nombres à travers l'estimation de la fréquence allélique moyenne, et d'analyser les limites biologiques de ce modèle numérique simplifié.

---

## Questions

### Partie 1 : Outils de base et Génération aléatoire

1. **[Q1]** Importer le module nécessaire pour manipuler des tableaux et générer des nombres aléatoires en Python. Écrire une fonction `tirage_bernoulli(p)` qui prend en argument une probabilité $p \in [0, 1]$ et renvoie un booléen (`True` ou `False`) simulant une variable de Bernoulli de paramètre $p$.
2. **[Q2]** Écrire une fonction `generation_wright_fisher(N, p)` qui simule une génération. Elle prend en compte l'effectif de la population $N$ (nombre d'individus, soit $2N$ allèles) et la fréquence actuelle $p$ de l'allèle $A$. Elle doit renvoyer la nouvelle fréquence $p'$ de l'allèle $A$ à la génération suivante en utilisant un tirage binomial. *(On pourra utiliser `np.random.binomial`).*

### Partie 2 : Simulation de trajectoires temporelles

3. **[Q3]** Écrire une fonction `trajectoire_derive(N, p_0, T)` qui simule l'évolution de la fréquence de l'allèle $A$ sur $T$ générations. 
   - **Entrées :** $N$ (effectif), $p_0$ (fréquence initiale), $T$ (nombre de générations).
   - **Sortie :** Un tableau numpy de taille $T+1$ contenant les fréquences de $A$ de la génération $0$ à la génération $T$.
4. **[Q4]** Que se passe-t-il biologiquement et mathématiquement lorsque la fréquence $p$ atteint $0$ ou $1$ ? Modifier la fonction précédente pour que la simulation s'arrête (ou que la fréquence reste bloquée) si l'allèle est fixé ou éliminé.

### Partie 3 : Loi des Grands Nombres et Analyse Critique

5. **[Q5]** On souhaite estimer l'espérance de la fréquence allélique à la génération $T = 50$ pour une population de taille $N = 50$ avec une fréquence initiale $p_0 = 0.5$. Écrire un script utilisant une boucle ou une vectorisation pour simuler $M$ trajectoires indépendantes, et calculer la moyenne des fréquences obtenues à $T = 50$.
6. **[Q6]** **Analyse critique et biométrique :** En augmentant $M$ (par exemple de $10$ à $100\,000$), quelle loi mathématique observe-t-on sur l'estimation de la moyenne ? Discutez des limites biologiques du modèle de Wright-Fisher (générations non chevauchantes, panmixie, absence de mutation et de sélection).

---

## Pistes et Indications

- **Q1 :** Pensez à `np.random.rand()` qui renvoie un float uniforme sur $[0, 1[$.
- **Q2 :** Un individu diploïde porte 2 allèles. Pour $N$ individus, il y a $2N$ tirages avec une probabilité de succès $p$. La fonction `np.random.binomial(n, p)` renvoie le nombre de succès pour $n$ expériences.
- **Q4 :** Si $p=0$ ou $p=1$, la loi binomiale donnera toujours $0$ ou $2N$, l'état devient un *état absorbant*.
- **Q6 :** Pensez à relier la stabilité de la moyenne empirique à la Loi Faible (ou Forte) des Grands Nombres. Côté biologique, interrogez-vous sur la réalité d'une population à $N$ constant sans flux migratoire.

---

## Corrigé Pas à Pas

### Partie 1

**[Q1]**
```python
import numpy as np

def tirage_bernoulli(p):
    # np.random.rand() renvoie un nombre dans [0, 1[
    return np.random.rand() < p
```

**[Q2]**
```python
def generation_wright_fisher(N, p):
    # Il y a 2N allèles au total dans une population diploïde de taille N
    # On tire le nombre de copies de l'allèle A selon une loi binomiale B(2N, p)
    nb_alleles_A = np.random.binomial(2 * N, p)
    return nb_alleles_A / (2 * N)
```

### Partie 2

**[Q3 & Q4]**
```python
def trajectoire_derive(N, p_0, T):
    trajectoire = np.zeros(T + 1)
    trajectoire[0] = p_0
    p = p_0
    for t in range(1, T + 1):
        # Si l'allèle est fixé (1) ou éliminé (0), on bloque la fréquence (états absorbants)
        if p == 0.0 or p == 1.0:
            trajectoire[t] = p
        else:
            p = generation_wright_fisher(N, p)
            trajectoire[t] = p
    return trajectoire
```

### Partie 3

**[Q5]**
```python
def esperance_generation_T(N, p_0, T, M):
    frequences_ finales = np.zeros(M)
    for i in range(M):
        traj = trajectoire_derive(N, p_0, T)
        frequences_finales[i] = traj[-1]
    
    # Estimation de l'espérance par la moyenne empirique
    return np.mean(frequences_finales)

# Exemple d'appel :
# moyenne_estimee = esperance_generation_T(N=50, p_0=0.5, T=50, M=1000)
```

**[Q6]**
* **Interprétation mathématique (Loi des Grands Nombres) :** 
  Lorsque le nombre de simulations $M$ tend vers l'infini, la moyenne empirique des fréquences alléliques à la génération $T$ converge presque sûrement vers l'espérance mathématique de la variable aléatoire représentant la fréquence à la génération $T$ (en vertu de la **Loi des Grands Nombres**). On observe graphiquement que la variance de l'estimateur diminue en $\mathcal{O}(1/\sqrt{M})$.

* **Analyse critique des limites du modèle (Biologie) :**
  1. **Effectif constant ($N$) :** Dans la nature, les populations subissent des fluctuations démographiques (prédation, climat), $N$ est rarement constant.
  2. **Panmixie (reproduction aléatoire) :** Le modèle suppose que tout individu a une probabilité égale de se reproduire avec un autre. Or, en réalité, il existe une structure spatiale (distance, territorialité) et une sélection sexuelle.
  3. **Absence de mutations et de flux géniques :** Le modèle de Wright-Fisher pur ne crée pas de nouveaux allèles (pas de mutation) et s'affranchit des migrations extérieures, ce qui conduit inéluctablement à la fixation ou à la perte totale de l'allèle à long terme (monomorphisme de la population), ce que l'on observe rarement à grande échelle grâce aux forces combinées de la mutation et de la sélection.