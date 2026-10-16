---
title: 'Exercice 1 : Programmation dynamique'
description: 'Problème d entraînement type concours.'
---

# Concours Blanc - Filière MPI
## Épreuve d'Informatique - Algorithmique Avancée et Graphes
### Thème : Programmation dynamique et optimisation de séquences

---

### Introduction de l'examinateur

Ce problème aborde un classique des concours de la filière MPI : l'optimisation par programmation dynamique. L'objectif est d'évaluer votre capacité à formaliser un problème d'optimisation sous forme de récurrence, à concevoir l'algorithme impératif ou récursif avec mémoïsation associé, et à analyser rigoureusement sa complexité en temps et en espace. 

Les candidats doivent veiller à soigner la rigueur mathématique des indices et à justifier systématiquement les complexités annoncées.

---

## Problème : Le Sablier d'Opaline

On considère une chaîne de caractères $S = s_0 s_1 \dots s_{n-1}$ de longueur $n \ge 1$, constituée de caractères pris dans un alphabet fini $\Sigma$. 

Pour toute sous-chaîne $S[i..j]$ (avec $0 \le i \le j < n$), on cherche à déterminer le coût minimal pour la transformer en un "palindrome parfait" selon un jeu de règles de substitution donné. Toutefois, pour ce problème, nous allons nous intéresser à une variante plus algorithmique : **le découpage optimal en palindromes**.

On définit un **palindrome** comme une chaîne qui se lit de la même gauche à droite et de droite à gauche. On cherche à découper la chaîne $S$ en un nombre minimal de sous-chaînes contiguës qui soient toutes des palindromes.
Exemple: * Pour $S = \text{"ababb"}$, les découpages possibles en palindromes sont nombreux. Par exemple, $\text{"a"} \mid \text{"bab"} \mid \text{"b"}$ (3 morceaux) ou $\text{"aba"} \mid \text{"bb"}$ (2 morceaux). Le nombre minimal de morceaux est ici 2.

---

### Partie I : Analyse préliminaire et structure de substructure optimale

#### Question 1
Soit $P(i, j)$ un prédicat booléen indiquant si la sous-chaîne $S[i..j]$ (de l'indice $i$ inclus à l'indice $j$ inclus) est un palindrome. 
Donner une relation de récurrence permettant de calculer $P(i, j)$ pour tous $0 \le i \le j < n$.

**Corrigé :**
Un sous-caractère ou une chaîne vide est trivialement un palindrome. Pour une chaîne de longueur supérieure ou égale à 2, $S[i..j]$ est un palindrome si et seulement si ses caractères extrêmes sont égaux ($s_i = s_j$) et que la chaîne centrale $S[i+1 .. j-1]$ est également un palindrome.

Formellement :
$$
P(i, j) = \begin{cases} 
\text{Vrai} & \text{si } i \ge j \\
(s_i == s_j) \land P(i+1, j-1) & \text{si } j = i + 1 \\
(s_i == s_j) \land P(i+1, j-1) & \text{si } j > i + 1
\end{cases}
$$

---

#### Question 2
Soit $M(i)$ le nombre minimal de palindromes composant le préfixe $S[0..i]$ (pour $0 \le i < n$). 
Établir une relation de récurrence pour calculer $M(i)$ en fonction des valeurs de $M(k$ pour $k < i)$ et du prédicat $P$.

**Corrigé :**
Pour calculer $M(i)$, on peut examiner tous les points de coupe possibles $k$ (avec $0 \le k \le i$). Si le suffixe $S[k..i]$ est un palindrome (c'est-à-dire $P(k, i) = \text{Vrai}$), alors on peut former le préfixe $S[0..i]$ en ajoutant ce palindrome à la fin de la solution optimale pour $S[0..k-1]$.

Par convention, si $k = 0$ et que $P(0, i)$ est vrai, le coût est de 1 (la chaîne entière est un palindrome).

La relation de récurrence s'écrit donc :
$$
M(i) = \begin{cases}
0 & \text{si } i < 0 \\
\min_{0 \le k \le i} \left( 1 + M(k-1) \text{ si } P(k, i) \text{ else } +\infty \right) & \text{si } 0 \le i < n
\end{cases}
$$
avec la convention $M(-1) = 0$.

---

### Partie II : Conception de l'algorithme

#### Question 3
Écrire une fonction en Python `min_palindromes(S: str) -> int` qui implémente cette approche par programmation dynamique. 
Note: On veillera à précalculer le tableau des palindromes $P$ pour éviter les recalculs redondants.*

**Corrigé :**
```python
def min_palindromes(S: str) -> int:
    n = len(S)
    if n == 0:
        return 0

    # Étape 1 : Précalcul des palindromes P[i][j]
    # P[i][j] est un booleen indiquant si S[i..j] est un palindrome
    P = [[False] * n for _ in range(n)]

    # Les sous-chaînes de longueur 1 sont des palindromes
    for i in range(n):
        P[i][i] = True

    # Remplissage par longueur croissante
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            if length == 2:
                P[i][j] = (S[i] == S[j])
            else:
                P[i][j] = (S[i] == S[j]) and P[i+1][j-1]

    # Étape 2 : Calcul de M(i) le nombre minimal de coupes
    # M[i] correspond au résultat pour S[0..i]
    M = [float('inf')] * n

    for i in range(n):
        if P[0][i]:
            M[i] = 0  # S[0..i] est déjà un palindrome complet
        else:
            for k in range(1, i + 1):
                if P[k][i]:
                    M[i] = min(M[i], 1 + M[k - 1])

    return M[n - 1]
```

---

### Partie III : Analyse de la complexité

#### Question 4
Déterminer la complexité en temps et en espace de la fonction `min_palindromes` en fonction de $n = \text{len}(S)$. Justifiez brièvement.

**Corrigé :**
* **Complexité en espace :**
  - La matrice $P$ de taille $n \times n$ de booléens demande $\mathcal{O}(n^2)$ en mémoire.
  - Le tableau $M$ de taille $n$ demande $\mathcal{O}(n)$.
  - L'espace total est donc de **$\mathcal{O}(n^2)$**.

* **Complexité en temps :**
  - Le précalcul de la matrice $P$ comporte deux boucles imbriquées parcourant $\mathcal{O}(n^2)$ états, chaque transition s'effectuant en $\mathcal{O}(1)$. Cette étape prend $\mathcal{O}(n^2)$ opérations.
  - Le calcul du tableau $M$ utilise une boucle externe de taille $n$ et une boucle interne de taille $i$ au pire (allant jusqu'à $n$). Le nombre total d'itérations est $\sum_{i=0}^{n-1} i = \frac{n(n-1)}{2}$, soit $\mathcal{O}(n^2)$.
  - Le temps total est donc de **$\mathcal{O}(n^2)$**.

---

### Analyse critique des résultats

> **Avis de l'examinateur :** 
> L'algorithme proposé est optimal en termes de temps pour ce problème spécifique ($\mathcal{O}(n^2)$), surclassant l'approche naïve exponentielle $\mathcal{O}(2^n)$. 
> 
> Cependant, sur le plan de la **complexité spatiale**, l'allocation d'une matrice complète $P$ de taille $n \times n$ peut s'avérer pénalisante en mémoire pour de très grandes chaînes (par exemple $n = 10^5$). En pratique, on pourrait optimiser l'espace en remarquant que le calcul de la ligne $i$ de $P$ ne dépend que de la ligne $i+1$, ce qui permettrait de réduire l'empreinte mémoire à $\mathcal{O}(n)$ en ne conservant que les deux dernières lignes, ou en utilisant un algorithme de type *Manacher* pour trouver les palindromes en $\mathcal{O}(n)$ temps et espace. Néanmoins, pour le cadre standard d'une épreuve de concours MPI, la solution en $\mathcal{O}(n^2)$ spatiale et temporelle valide l'intégralité des attendus du barème.