---
title: 'Exercice : Optimisation combinatoire et Programmation Dynamique'
description: 'Problème d entraînement type concours Mines-Ponts / Centrale-Supélec (Filière MP).'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre de la conception d'un système de téléportation quantique interplanétaire, on s'intéresse à l'optimisation du transport d'échantillons minéraux rares. Chaque échantillon possède un poids entier et une valeur scientifique entière. Le vaisseau dispose d'une capacité de charge maximale limitée.

Parallèlement, le système de communication embarqué doit comparer des séquences de données brutes reçues avec des séquences de référence pour détecter d'éventuelles corruption de bits dues aux rayonnements cosmiques. Enfin, la station de contrôle au sol gère un automate de distribution de modules d'énergie utilisant un système monétaire particulier.

Ce problème se propose d'étudier trois classiques de la programmation dynamique à travers ces applications :
1. Le **problème du sac à dos** (optimisation sous contrainte de poids).
2. L'**alignement de séquences** (distance de Levenshtein / distance d'édition).
3. Le **rendu de monnaie** (recherche du nombre minimal de pièces).

Toutes les fonctions demandées devront être écrites en langage **Python 3**. On portera une attention particulière à la complexité temporelle et spatiale des algorithmes proposés.

---

### ❓ Questions progressives

#### Partie I : Le problème du sac à dos 0-1
On dispose de $n$ objets. Chaque objet $i$ (pour $0 \le i < n$) a un poids $p_i \in \mathbb{N}^*$ et une valeur $v_i \in \mathbb{N}$. On dispose d'un sac à dos pouvant supporter un poids maximal $W \in \mathbb{N}$.

1. **(Modélisation)** Soit $V(i, w)$ la valeur maximale que l'on peut obtenir en considérant un sous-ensemble des $i$ premiers objets (objets 0 à $i-1$) avec une capacité de sac restante de $w$. Établir la relation de récurrence vérifiée par $V(i, w)$.
2. **(Implémentation récursive avec mémoïsation)** Écrire une fonction Python `sac_a_dos_memo(poids, valeurs, W)` qui renvoie la valeur maximale atteignable. Préciser sa complexité.
3. **(Programmation dynamique bottom-up)** Écrire une fonction Python `sac_a_dos_it(poids, valeurs, W)` utilisant un tableau itératif. Comment peut-on optimiser l'espace mémoire si l'on souhaite seulement connaître la valeur optimale (et non la composition du sac) ?

#### Partie II : Alignement de séquences (Distance d'édition)
Pour comparer deux chaînes de caractères $A$ et $B$ de longueurs respectives $m$ et $n$, on définit la distance d'édition (ou distance de Levenshtein) comme le nombre minimal d'opérations élémentaires (insertion, suppression, substitution d'un caractère) pour transformer $A$ en $B$.

4. **(Récurrence)** Soit $D(i, j)$ la distance d'édition entre le préfixe de $A$ de longueur $i$ et le préfixe de $B$ de longueur $j$. Écrire la relation de récurrence pour $D(i, j)$ en définissant explicitement le coût des opérations.
5. **(Code Python)** Écrire une fonction Python `distance_edition(A, B)` de complexité temporelle $\mathcal{O}(m \cdot n)$ et spatiale $\mathcal{O}(m \cdot n)$ (ou optimisée en $\mathcal{O}(\min(m, n))$).

#### Partie III : Rendu de monnaie minimal
6. **(Application connexe)** On dispose d'un ensemble de pièces de monnaie de valeurs $C = [c_0, c_1, \dots, c_{k-1}]$ et d'une somme totale $S$. Écrire une fonction `rendu_monnaie(C, S)` qui renvoie le nombre minimal de pièces nécessaire pour obtenir la somme $S$ (en supposant la solution toujours possible, avec par exemple $c_i = 1$).

---

### 💡 Pistes & Indications méthodologiques

- **Programmation dynamique :** Identifiez toujours les deux piliers : la **sous-structure optimale** (la solution d'un grand problème dépend de la solution de sous-problèmes similaires) et le **creusement de sous-problèmes redondants** (nécessitant mémoïsation ou tabulation).
- **Gestion des indices :** Soyez rigoureux sur les dimensions des tableaux en Python (`len(A) + 1`).
- **Complexité :** Pour les questions de programmation dynamique tabulaire, la complexité est généralement le nombre de cases de la table multiplié par le coût du calcul d'une case (souvent $\mathcal{O}(1)$).

---

### 📋 Corrigé détaillé pas à pas

#### Partie I : Le problème du sac à dos 0-1

1. **Relation de récurrence :**
   Pour l'objet $i-1$ (le $i$-ème objet, d'indice $i-1$), deux cas se présentent :
   - Si son poids $p_{i-1}$ dépasse la capacité courante $w$ ($p_{i-1} > w$), on ne peut pas l'inclure : 
     $$V(i, w) = V(i-1, w)$$
   - S'il peut être inclus ($p_{i-1} \le w$), on choisit le maximum entre ne pas le prendre et le prendre :
     $$V(i, w) = \max\left(V(i-1, w), \, v_{i-1} + V(i-1, w - p_{i-1})\right)$$
   Avec les conditions initiales : $V(0, w) = 0$ pour tout $w$ et $V(i, 0) = 0$ pour tout $i$.

2. **Version récursive avec mémoïsation :**
   ```python
   def sac_a_dos_memo(poids, valeurs, W):
       n = len(poids)
       memo = {}

       def dp(i, w):
           if i == 0 or w == 0:
               return 0
           if (i, w) in memo:
               return memo[(i, w)]
           
           # Cas où l'on ne peut pas prendre l'objet i-1
           res = dp(i - 1, w)
           # Cas où l'on peut potentiellement le prendre
           if poids[i - 1] <= w:
               res = max(res, valeurs[i - 1] + dp(i - 1, w - poids[i - 1]))
           
           memo[(i, w)] = res
           return res

       return dp(n, W)
   ```
   *Complexité :* Temporelle en $\mathcal{O}(n \cdot W)$ car il y a $n \cdot W$ états distincts. Spatiale en $\mathcal{O}(n \cdot W)$ pour la table de mémoïsation et la pile d'appels récursifs.

3. **Version itérative (Bottom-Up) :**
   ```python
   def sac_a_dos_it(poids, valeurs, W):
       n = len(poids)
       # Table de dimensions (n + 1) x (W + 1) initialisée à 0
       dp = [[0 for _ in range(W + 1)] for _ in range(n + 1)]
       
       for i in range(1, n + 1):
           for w in range(1, W + 1):
               dp[i][w] = dp[i - 1][w]
               if poids[i - 1] <= w:
                   val_avec = valeurs[i - 1] + dp[i - 1][w - poids[i - 1]]
                   if val_avec > dp[i][w]:
                       dp[i][w] = val_avec
                       
       return dp[n][W]
   ```
   *Optimisation spatiale :* On observe que pour calculer la ligne $i$, on a uniquement besoin de la ligne $i-1$. On peut réduire l'espace à $\mathcal{O}(W)$ en utilisant deux lignes (ou même une seule ligne parcourue de droite à gauche).

---

### Partie II : Alignement de séquences (Distance d'édition)

4. **Relation de récurrence :**
   Soient $A[0 \dots m-1]$ et $B[0 \dots n-1]$.
   Si $A[i-1] == B[j-1]$, aucun coût supplémentaire : $D(i, j) = D(i-1, j-1)$.
   Sinon, on prend le minimum entre :
   - Suppression dans $A$ : $D(i-1, j) + 1$
   - Insertion dans $A$ (ou suppression dans $B$) : $D(i, j-1) + 1$
   - Substitution de $A[i-1]$ par $B[j-1]$ : $D(i-1, j-1) + 1$
   
   Donc :
   $$D(i, j) = \begin{cases} 
   D(i-1, j-1) & \text{si } A[i-1] = B[j-1] \\ 
   1 + \min\left(D(i-1, j), D(i, j-1), D(i-1, j-1)\right) & \text{sinon} 
   \end{cases}$$

5. **Implémentation Python :**
   ```python
   def distance_edition(A, B):
       m, n = len(A), len(B)
       # Tableau (m + 1) x (n + 1)
       dp = [[0 for _ in range(n + 1)] for _ in range(m + 1)]
       
       # Conditions initiales
       for i in range(m + 1):
           dp[i][0] = i
       for j in range(n + 1):
           dp[0][j] = j
           
       for i in range(1, m + 1):
           for j in range(1, n + 1):
               if A[i - 1] == B[j - 1]:
                   dp[i][j] = dp[i - 1][j - 1]
               else:
                   dp[i][j] = 1 + min(
                       dp[i - 1][j],     # Suppression
                       dp[i][j - 1],     # Insertion
                       dp[i - 1][j - 1]  # Substitution
                   )
                   
       return dp[m][n]
   ```
   *Complexité :* Temporelle $\mathcal{O}(m \cdot n)$ et spatiale $\mathcal{O}(m \cdot n)$.

---

### Partie III : Rendu de monnaie minimal

6. **Implémentation Python :**
   Soit $R(s)$ le nombre minimal de pièces pour faire la somme $s$.
   $$R(s) = 1 + \min_{c \in C, \, s - c \ge 0} R(s - c)$$
   Avec $R(0) = 0$.

   ```python
   def rendu_monnaie(C, S):
       # dp[s] stocke le nombre min de pièces pour la somme s
       # On initialise avec une valeur infini symbolique (S + 1)
       dp = [float('inf')] * (S + 1)
       dp[0] = 0
       
       for s in range(1, S + 1):
           for c in C:
               if s - c >= 0:
                   dp[s] = min(dp[s], dp[s - c] + 1)
                   
       return dp[S] if dp[S] != float('inf') else -1
   ```
   *Complexité :* Temporelle en $\mathcal{O}(S \cdot k)$ où $k$ est le nombre de pièces différentes. Spatiale en $\mathcal{O}(S)$.