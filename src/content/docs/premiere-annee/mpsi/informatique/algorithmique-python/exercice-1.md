---
title: 'Exercice 1 : Complexité temporelle'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse de complexité et limites du modèle RAM

**Filière :** MPSI  
**Matière :** Informatique  
**Thème :** Complexité temporelle, ordres de grandeur et limites physiques du modèle de calcul.

---

## Énoncé

Dans le cadre de l'optimisation d'un algorithme de traitement d'images pour un système embarqué, on s'intéresse à la recherche de sous-tableaux de somme maximale dans une matrice bidimensionnelle. 

Le modèle théorique usuel en algorithmique est la machine à accès aléatoire (modèle RAM), où l'on compte les opérations élémentaires (affectations, comparaisons, opérations arithmétiques) en supposant qu'elles coûtent toutes un temps unitaire $\mathcal{O}(1)$, indépendamment de la taille des opérandes. 

L'objectif de ce problème est d'analyser la complexité théorique de différentes versions d'un algorithme, puis de confronter ces résultats théoriques à la réalité matérielle (limites de la représentation en machine, hiérarchie mémoire).

---

## Questions

### Partie I : Analyse théorique (Modèle RAM)

1. **Échauffement (1D) :** Soit un tableau $T$ de $n$ entiers. Écrire une fonction Python `somme_max_1d(T)` calculant la somme maximale d'un sous-tableau contigu en temps $\mathcal{O}(n)$ (algorithme de Kadane). Préciser sa complexité spatiale.
2. **Extension 2D naïve :** Soit une matrice $M$ de dimensions $n \times n$. On souhaite trouver la sous-matrice de somme maximale. 
   - Proposer un algorithme naïf énumérant toutes les sous-matrices possibles.
   - Exprimer le nombre d'opérations élémentaires en fonction de $n$ sous la forme d'un grand $O$.
3. **Optimisation :** En utilisant le principe des sommes préfixées par colonnes, concevoir un algorithme de complexité temporelle $\mathcal{O}(n^3)$. 
Indice: On pourra se ramener au problème 1D en fixant les lignes de début et de fin de la sous-matrice.*

### Partie II : Analyse critique et limites du modèle

On considère que le processeur exécute $10^9$ opérations par seconde ($1\text{ GHz}$). On prend $n = 10\,000$.

4. **Calcul de temps théorique :** 
   - Estimer le nombre d'opérations pour l'algorithme $\mathcal{O}(n^3)$.
   - En déduire le temps d'exécution théorique en secondes. Le résultat est-il acceptable pour une application interactive (temps de réponse $< 0,1\text{ s}$) ?
5. **Nuance et rigueur (Limites du modèle RAM) :** 
   - Le modèle RAM suppose que l'addition de deux entiers se fait en $\mathcal{O}(1)$. Si les coefficients de la matrice $M$ sont de grands entiers nécessitant $W$ bits, quel est l'impact sur la complexité réelle de l'addition ?
   - En pratique, pour $n = 10\,000$, la matrice $M$ contient $10^8$ entiers. Si chaque entier est codé sur 64 bits (8 octets), quelle est la taille totale de la matrice ? 
   - Sachant qu'un accès à la mémoire vive (RAM) prend environ $100\text{ ns}$, alors qu'un cycle processeur prend $1\text{ ns}$, quel phénomène matériel majeur (ignoré par le modèle RAM) va considérablement ralentir l'algorithme $\mathcal{O}(n^3)$ lors du balayage de la matrice ?

---

## Pistes

1. **Piste 1 (Kadane 1D) :** Maintenir deux variables : la somme maximale courante et la somme du sous-tableau se terminant à l'indice actuel.
2. **Piste 2 (Algorithme 2D) :** Une sous-matrice est définie par quatre paramètres : ligne début, ligne fin, colonne début, colonne fin. Compter le nombre de choix indépendants.
3. **Piste 3 (Réduction 2D $\to$ 1D) :** Si l'on fixe la ligne du haut $i_1$ et la ligne du bas $i_2$, on peut sommer les éléments de chaque colonne entre ces deux lignes pour obtenir un tableau 1D de taille $n$.
4. **Piste 4 (Ordres de grandeur) :** Attention aux constantes cachées dans les grands $O$ et à la taille des caches processeur (L1/L2/L3).

---

## Corrigé pas à pas

### Partie I : Analyse théorique

**1. Algorithme de Kadane (1D) :**
```python
def somme_max_1d(T):
    if not T:
        return 0
    max_global = T[0]
    max_courant = T[0]
    for x in T[1:]:
        max_courant = max(x, max_courant + x)
        max_global = max(max_global, max_courant)
    return max_global
```
*Complexité temporelle :* $\mathcal{O}(n)$ car la boucle effectue $n-1$ itérations, chacune coûtant un nombre constant d'opérations.  
*Complexité spatiale :* $\mathcal{O}(1)$ car on n'utilise que quelques variables scalaires supplémentaires.

**2. Algorithme naïf 2D :**
Une sous-matrice est entièrement caractérisée par $(i_{\min}, i_{\max}, j_{\min}, j_{\max})$ avec $0 \le i_{\min} \le i_{\max} < n$ et $0 \le j_{\min} \le j_{\max} < n$.  
Il y a $\approx \frac{n^2}{2}$ choix pour les lignes et $\approx \frac{n^2}{2}$ choix pour les colonnes, soit $\mathcal{O}(n^4)$ sous-matrices. Calculer la somme de chacune prend $\mathcal{O}(n^2)$ opérations dans le pire cas. La complexité naïve globale est donc en $\mathcal{O}(n^6)$. (Une version un peu plus astucieuse avec des sommes préfixées 2D descend à $\mathcal{O}(n^4)$).

**3. Algorithme optimisé en $\mathcal{O}(n^3)$ :**
```python
def somme_max_2d(M):
    n = len(M)
    max_global = float('-inf')
    
    for i1 in range(n):
        # Tableau temporaire pour stocker la somme des colonnes entre les lignes i1 et i2
        col_sums = [0] * n
        for i2 in range(i1, n):
            for j in range(n):
                col_sums[j] += M[i2][j]
            # On applique Kadane sur le tableau 1D des sommes de colonnes
            val = somme_max_1d(col_sums)
            if val > max_global:
                max_global = val
                
    for i in range(n):
        ... # (Correction syntaxique mineure pour la structure)
    return max_global
```
*Justification de la complexité :* Les boucles imbriquées sur `i1` et `i2` s'exécutent $\frac{n(n+1)}{2}$ fois ($\mathcal{O}(n^2)$). À l'intérieur, la mise à jour de `col_sums` et l'appel à Kadane prennent $\mathcal{O}(n)$ opérations. Le total est donc bien de $\mathcal{O}(n^3)$.

---

### Partie II : Analyse critique et limites du modèle

**4. Temps d'exécution théorique :**
Pour $n = 10\,000$ et un algorithme en $\mathcal{O}(n^3)$ :
* Nombre d'opérations estimé $N_{\text{op}} \approx n^3 = (10^4)^3 = 10^{12}$ opérations.
* Avec un processeur à $1\text{ GHz}$ ($10^9$ op/s), le temps théorique est :
  $$t = \frac{10^{12}}{10^9} = 1000 \text{ secondes}$$
* Ce résultat ($\approx 16{,}7$ minutes) est **totalement inacceptable** pour une application interactive (qui exige $< 0{,}1\text{ s}$).

**5. Limites du modèle RAM :**
* *Taille des opérandes :* Le modèle RAM suppose des opérations en $\mathcal{O}(1)$. Si les entiers nécessitent $W$ bits avec $W$ grand (arithmétique arbitrary precision), une addition élémentaire coûte en réalité $\mathcal{O}(W)$ (ou $\mathcal{O}(W \log W)$ avec des méthodes avancées). L'hypothèse unitaire est mise en défaut.
* *Empreinte mémoire :* 
  $$\text{Taille} = 10^4 \times 10^4 \times 8 \text{ octets} = 10^8 \times 8 \text{ octets} = 8 \times 10^8 \text{ octets} \approx 762{,}94 \text{ Mio}$$
  Cette matrice tient dans la RAM d'un ordinateur moderne, mais dépasse largement la taille des caches processeur (L1/L2/L3 font généralement de quelques kilo-octets à quelques dizaines Méga-octets).
* *Défaut de localité et hiérarchie mémoire :* L'accès à la mémoire centrale prend environ $100\text{ ns}$ contre $1\text{ ns}$ pour le registre. L'algorithme accède aux données de manière peu cache-friendly (parcours de colonnes avec des sauts de taille $n$). Le processeur va passer l'essentiel de son temps à attendre que les données soient chargées depuis la RAM vers le cache (**cache misses** en cascade). Le temps d'exécution réel sera donc de plusieurs ordres de grandeur supérieur aux $1000\text{ s}$ théoriques, invalidant totalement les prédictions naïves du modèle RAM.