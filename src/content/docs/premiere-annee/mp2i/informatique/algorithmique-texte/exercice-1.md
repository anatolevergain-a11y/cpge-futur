---
title: 'Exercice 1 : Recherche de motifs (algorithmes KMP et Boyer-Moore)'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

La recherche efficace de motifs dans une chaîne de caractères est un enjeu fondamental en informatique, intervenant dans l'analyse de séquences génomiques, le traitement du langage naturel ou encore la recherche textuelle (fonctionnalité "Rechercher" des éditeurs).

Soit $T$ un texte de longueur $n$ et $P$ un motif de longueur $m$, tous deux construits sur un alphabet fini $\Sigma$ de taille $\sigma$. On suppose généralement $m \le n$. L'objectif est de trouver toutes les occurrences de $P$ dans $T$, c'est-à-dire l'ensemble des indices $i \in \{0, \dots, n-m\}$ tels que pour tout $j \in \{0, \dots, m-1\}$, $T[i+j] = P[j]$.

Dans ce problème, nous étudions deux algorithmes de pointe permettant d'améliorer la complexité naïve en $O(n \cdot m)$ : 
1. **L'algorithme de Knuth-Morris-Pratt (KMP)**, qui exploite les redondances au sein du motif $P$ pour éviter de reculer dans le texte $T$ lors d'une mismoyenne.
2. **L'algorithme de Boyer-Moore (version Boyer-Moore-Horspool ou règle du mauvais caractère)**, qui parcourt le motif de droite à gauche et permet de sauter des portions entières du texte.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

#### Partie I : L'algorithme de Knuth-Morris-Pratt (KMP)

1. **Définition de la table de préfixes (ou tableau $\pi$)**
   Soit le motif $P$ de longueur $m$. On définit la fonction $\pi$ (souvent appelée tableau *next* ou *pi*) sur l'ensemble $\{0, \dots, m-1\}$ telle que $\pi[i]$ est la longueur du plus grand préfixe propre de $P[0 \dots i]$ qui est aussi un suffixe de $P[0 \dots i]$.
   * Rédiger la spécification formelle de $\pi[i]$.
   * Calculer à la main le tableau $\pi$ pour le motif $P = \text{"ABABAX"}$.

2. **Utilisation de la table $\pi$ pour la recherche**
   Expliquer comment, lors d'une divergence entre $T[i+j]$ et $P[j]$, l'utilisation de $\pi[j-1]$ permet de reprendre la comparaison sans réexaminer les caractères de $T$ déjà validés.

3. **Complexité temporelle de KMP**
   * Écrire la fonction de calcul de la table $\pi$ en langage Python.
   * Démontrer par un argument d'amortissement (ou analyse du potentiel) que le calcul de la table $\pi$ s'effectue en temps $O(m)$ et la recherche textuelle globale en temps $O(n + m)$.

#### Partie II : L'algorithme de Boyer-Moore (Règle du mauvais caractère)

4. **Principe de la règle du mauvais caractère**
   On considère un parcours du motif de droite à gauche ($j$ allant de $m-1$ à $0$). Supposons que $T[i+j] \neq P[j]$ (mauvais caractère à l'indice $j$ du motif, correspondant au caractère $c = T[i+j]$ dans le texte). 
   * Si $c$ apparaît dans $P$ à des indices inférieurs à $j$, de combien de positions peut-on décaler le motif $P$ vers la droite pour aligner la dernière occurrence de $c$ dans $P$ avec $T[i+j]$ ?
   * Si $c$ n'apparaît pas du tout dans $P$, quel est le décalage maximal possible ?

5. **Mise en œuvre et complexité**
   * Définir une structure de données (pré-calcul) permettant d'obtenir le dernier indice d'apparition d'un caractère de $\Sigma$ dans $P$ en temps $O(1)$.
   * Quel est le pire des cas théorique de l'algorithme de Boyer-Moore complet (comportant la règle du bon suffixe et du mauvais caractère) ? Donnez un exemple de texte et de motif illustrant ce pire cas.

---

### 💡 Pistes & Indications méthodologiques

* **Pour la table $\pi$ (KMP) :** Pensez à l'algorithme de construction par récurrence. Si l'on connait $\pi[i-1]$, on peut tester si $P[i] == P[\pi[i-1]]$. Attention aux rebonds successifs si l'égalité n'est pas vérifiée.
* **Amortissement KMP :** Pour prouver la complexité linéaire, définissez un potentiel lié à l'indice de lecture du texte $i$ et à l'indice dans le motif $j$. Montrez que chaque opération élémentaire incrémente strictement une grandeur bornée ou consomme du potentiel.
* **Boyer-Moore :** Le pré-calcul de la table du mauvais caractère nécessite de parcourir le motif $P$ une seule fois. Attention à bien gérer les caractères de l'alphabet $\Sigma$ absents de $P$ (décalage de $m$).

---

### 📋 Corrigé détaillé pas à pas

#### Partie I : KMP

1. **Table des préfixes $\pi$ pour $P = \text{"ABABAX"}$**
   * $\pi[0] = 0$ (pas de préfixe propre pour un seul caractère).
   * Pour $P[0 \dots 1] = \text{"AB"}$ : aucun préfixe propre n'est suffixe $\implies \pi[1] = 0$.
   * Pour $P[0 \dots 2] = \text{"ABA"}$ : le préfixe $\text{"A"}$ est suffixe $\implies \pi[2] = 1$.
   * Pour $P[0 \dots 3] = \text{"ABAB"}$ : le préfixe $\text{"AB"}$ est suffixe $\implies \pi[3] = 2$.
   * Pour $P[0 \dots 4] = \text{"ABABA"}$ : le préfixe $\text{"ABA"}$ est suffixe $\implies \pi[4] = 3$.
   * Pour $P[0 \dots 5] = \text{"ABABAX"}$ : aucun préfixe propre ne correspond à un suffixe se terminant par $\text{'X'}$ $\implies \pi[5] = 0$.
   
   Résultat : $\pi = [0, 0, 1, 2, 3, 0]$.

2. **Utilisation lors d'une divergence**
   Si une divergence survient à l'indice $j$ du motif ($T[i+j] \neq P[j]$), cela signifie que le sous-texte $T[i \dots i+j-1$] correspond exactement à $P[0 \dots j-1]$. 
   Le plus grand préfixe de $P$ qui est aussi un suffixe de $P[0 \dots j-1]$ a une longueur de $\pi[j-1]$. Par conséquent, on peut directement aligner ce préfixe avec la fin du segment textuel déjà reconnu, en reprenant les comparaisons à l'indice $i + j - \pi[j-1]$ dans le texte et à l'indice $\pi[j-1]$ dans le motif, **sans jamais reculer l'indice $i$ du texte**.

3. **Implémentation et complexité de KMP**

```python
def calculer_pi(P):
    m = len(P)
    pi = [0] * m
    j = 0
    for i in range(1, m):
        while j > 0 and P[i] != P[j]:
            j = pi[j - 1]
        if P[i] == P[j]:
            j += 1
        pi[i] = j
    return pi

def kmp(T, P):
    n, m = len(T), len(P)
    if m == 0: return []
    pi = calculer_pi(P)
    resultats = []
    j = 0
    for i in range(n):
        while j > 0 and T[i] != P[j]:
            j = pi[j - 1]
        if T[i] == P[j]:
            j += 1
        if j == m:
            resultats.append(i - m + 1)
            j = pi[j - 1] # Pour trouver les occurrences suivantes potentiellement chevauchantes
    return resultats
```

* **Démonstration de la complexité linéaire :**
  Analysons la boucle principale de recherche. Soit le couple $(i, j)$ représentant la position dans $T$ et dans $P$. À chaque tour de boucle, soit $i$ est incrémenté de $1$ (qu'il y ait correspondance ou non après les rebonds de $j$), soit $j$ diminue strictement lors des instructions `j = pi[j - 1]`. 
  Comme $j$ ne peut être incrémenté au total que $n$ fois (autant de fois que $i$ avance), et que chaque décrémentation de $j$ le rapproche de $0$, le nombre total d'exécutions de la boucle `while` est borné linéairement par $O(n)$. Le calcul préalable de $\pi$ s'analysant de la même manière en $O(m)$, la complexité globale est $\mathcal{O}(n + m)$.

---

#### Partie II : Boyer-Moore (Règle du mauvais caractère)

4. **Principe de la règle du mauvais caractère**
   Soit $c = T[i+j]$ le caractère du texte provoquant une discordance avec $P[j]$ lors d'un parcours de droite à gauche.
   * Si $c$ apparaît dans $P$ à des indices strictement inférieurs à $j$, soit $k$ le plus grand indice tel que $P[k] = c$ ($k < j$). Le décalage vers la droite du motif est de $j - k$.
   * Si $c$ n'apparaît pas dans $P$, aucune occurrence de $c$ ne peut coïncider ; on décale le motif pour le positionner juste après l'indice $i+j$, soit un décalage de $j + 1$ (ou $m$ si $j = m-1$).

5. **Structure de données et pire des cas**
   * **Table des derniers indices :** On utilise un tableau (ou une table de hachage) de taille $\sigma$ (la taille de l'alphabet), noté `dernier[c]`, qui stocke pour chaque caractère $c \in \Sigma$ l'indice de sa **dernière** apparition dans $P$ (ou $-1$ s'il n'y figure pas). Sa construction s'effectue en $O(m + \sigma)$ par un simple parcours de $P$.
   * **Pire cas théorique :** L'algorithme de Boyer-Moore (dans sa version complète) atteint un pire cas en $\mathcal{O}(n \cdot m)$ comparaisons, par exemple lorsque $T = \text{"AAAAAAAAAAAAAAAAAAAA"}$ et $P = \text{"BA"}$. À chaque tentative, le premier caractère testé (en partant de la droite) échoue, mais la règle du bon suffixe ou du mauvais caractère ne génère que des décalages minimes de $1$ position, conduisant à $m$ comparaisons pour chacun des $n-m+1$ décalages.