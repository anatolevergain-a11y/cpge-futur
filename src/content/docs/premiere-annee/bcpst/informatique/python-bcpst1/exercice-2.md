---
title: 'Exercice 2 : Simulations aléatoires'
description: 'Problème d entraînement type concours.'
---

# Concours BCPST — Informatique
## Problème Guidé : Simulations aléatoires et modélisation stochastique

*Ce problème aborde la modélisation de processus aléatoires en Python, un classique des épreuves écrites et pratiques en BCPST. L'utilisation rigoureuse des bibliothèques scientifiques et l'analyse critique des résultats numériques y sont particulièrement évaluées.*

---

## Partie I : Échauffement et manipulation de base (15 minutes)

On importe dans tout le sujet les modules nécessaires :

```python
import matplotlib.pyplot as plt
import numpy as np
```

### Question 1
Écrire une fonction Python `lancer_de(n)` qui simule le lancer de $n$ dés à six faces équilibrés et renvoie la somme obtenue. La fonction doit utiliser les fonctionnalités vectorisées de `numpy`.

**Corrigé :**
```python
def lancer_de(n):
    """Simule le lancer de n dés à 6 faces et renvoie la somme."""
    # Tirage de n entiers aléatoires entre 1 et 6 inclus
    tirs = np.random.randint(1, 7, size=n)
    return int(np.sum(tirs))
```
*Analyse de l'examinateur :* L'utilisation de `np.random.randint(low, high, size)` est optimale car elle évite les boucles `for` en Python, qui sont lentes. Attention aux bornes : `randint` exclut la borne supérieure, d'où `7` pour obtenir des valeurs jusqu'à $6$.

---

## Partie II : Étude d'une marche aléatoire sur $\mathbb{Z}$ (30 minutes)

On s'intéresse à une particule se déplaçant sur l'axe des entiers $\mathbb{Z}$. À chaque pas de temps $t \in \mathbb{N}$, la particule se déplace de $+1$ avec une probabilité $p$ et de $-1$ avec une probabilité $q = 1 - p$.

### Question 2
Écrire une fonction `trajectoire_marche(N, p)` qui simule une trajectoire de cette marche aléatoire pour $N$ pas, partant de l'origine $0$. La fonction renvoie un tableau `numpy` de taille $N+1$ contenant la position de la particule à chaque instant $t$ de $0$ à $N$.

**Corrigé :**
```python
def trajectoire_marche(N, p):
    """Simule une marche aléatoire de N pas."""
    # Génération des pas : +1 avec proba p, -1 avec proba 1-p
    pas = np.random.choice([1, -1], size=N, p=[p, 1 - p])
    
    # La position initiale est 0, les positions successives sont les sommes cumulées
    trajectoire = np.zeros(N + 1, dtype=int)
    trajectoire[1:] = np.cumsum(pas)
    
    return trajectoire
```

### Question 3
On pose $p = 0.5$ (marche symétrique). Écrire un script utilisant `matplotlib` pour tracer $5$ trajectoires indépendantes de $N = 1000$ pas sur un même graphique. On veillera à ajouter un titre, des légendes pour les axes et une grille.

**Corrigé :**
```python
N = 1000
p = 0.5
nb_trajectoires = 5

plt.figure(figsize=(10, 6))
for i in range(nb_trajectoires):
    traj = trajectoire_marche(N, p)
    plt.plot(traj, label=f"Trajectoire {i+1}")

plt.title("Simulation de 5 marches aléatoires symétriques ($p = 0.5$)")
plt.xlabel("Temps ($t$ en nombre de pas)")
plt.ylabel("Position ($x$)")
plt.legend()
plt.grid(True)
plt.show()
```

---

## Partie III : Estimation de probabilités par la méthode de Monte-Carlo (45 minutes)

On considère une particule effectuant cette marche aléatoire symétrique ($p = 0.5$) en partant de $0$. On souhaite estimer la probabilité $P_N$ qu'après $N$ pas, la particule n'ait jamais touché la position $5$ (en partant de $0$).

### Question 4
Écrire une fonction `a_touche_cinq(N)` qui simule **une** trajectoire de $N$ pas et renvoie un booléen indiquant si la position $5$ a été atteinte (ou dépassée) au moins une fois lors des $N$ pas.

**Corrigé :**
```python
def a_touche_cinq(N):
    """Renvoie True si la particule atteint la position 5 au cours des N pas."""
    traj = trajectoire_marche(N, 0.5)
    # np.any teste si au moins un élément satisfait la condition
    return np.any(traj >= 5)
```

### Question 5
Écrire une fonction `estimer_probabilite(N, M)` qui réalise $M$ simulations indépendantes de la marche précédente et renvoie une estimation de la probabilité de ne **pas** avoir touché la position $5$ au bout de $N$ pas.

**Corrigé :**
```python
def estimer_probabilite(N, M):
    """Estime par Monte-Carlo la probabilité de ne jamais toucher 5 en N pas."""
    compteur_sans_toucher = 0
    for _ in range(M):
        if not a_touche_cinq(N):
            compteur_sans_toucher += 1
    return compteur_sans_toucher / M
```

*Alternative plus efficace (vectorisée) :*
```python
def estimer_probabilite_opti(N, M):
    # Génération matricielle de M trajectoires de N pas : (M, N+1)
    pas = np.random.choice([1, -1], size=(M, N), p=[0.5, 0.5])
    trajectoires = np.hstack([np.zeros((M, 1), dtype=int), np.cumsum(pas, axis=1)])
    
    # Test si la valeur 5 est atteinte sur chaque ligne
    touche = np.any(trajectoires >= 5, axis=1)
    
    # Proportion de trajectoires n'ayant PAS touché 5
    return float(np.mean(~touche))
```

---

## Partie IV : Analyse critique et relecture d'expert (15 minutes)

Un candidat propose le code suivant pour étudier la position finale moyenne après $N$ pas sur un grand nombre $M$ de simulations :

```python
# CODE DU CANDIDAT
M = 100000
N = 500
positions_finales = []
for i in range(M):
    t = trajectoire_marche(N, 0.5)
    positions_finales.append(t[-1])

moyenne = sum(positions_finales) / len(positions_finales)
print("Position moyenne finale :", moyenne)
```

### Question 6
Analyser ce code. 
1. Est-il correct sur le plan mathématique et informatique ?
2. Quelle critique majeure peut-on formuler concernant son coût algorithmique et sa mise en œuvre en Python ?
3. Proposer une correction optimisée.

**Corrigé et Analyse Critique :**

1. **Correction mathématique :** Le code est correct. Pour une marche aléatoire symétrique ($p = 0.5$), l'espérance de la position finale est nulle ($\mathbb{E}[X_N] = 0$). Le script affichera une valeur très proche de $0$.
2. **Critique algorithmique (Performance) :** 
   - L'utilisation d'une liste standard Python (`positions_finales.append(...)`) combinée à une boucle `for` explicite est extrêmement inefficace en mémoire et en temps de calcul pour $M = 100\,000$.
   - Le typage dynamique de Python ralentit l'exécution.
3. **Version optimisée (tendue vers les attendus de concours) :**
   ```python
   # Version vectorisée ultra-rapide avec NumPy
   M = 100000
   N = 500
   # Génération de tous les pas d'un coup : matrice (M, N)
   pas_matrice = np.random.choice([1, -1], size=(M, N), p=[0.5, 0.5])
   # Somme cumulée le long des lignes (axe 1) pour obtenir les positions finales en dernière colonne
   positions_finales = np.sum(pas_matrice, axis=1)
   
   moyenne = np.mean(positions_finales)
   print("Position moyenne finale :", moyenne)
   ```
   *Bilan de l'expert :* Cette écriture réduit le temps d'exécution d'un facteur 10 à 100 grâce à la vectorisation sous-jacente en C de la bibliothèque `numpy`, ce qui est indispensable face à des volumes de données importants en sciences.