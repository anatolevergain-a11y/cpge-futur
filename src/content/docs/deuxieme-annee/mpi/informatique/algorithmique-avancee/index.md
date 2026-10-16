---
title: 'Cours : Algorithmique avancée'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

L'algorithmique avancée en classe préparatoire MP2I/MPI formalise l'étude de la complexité, de la calculabilité et des paradigmes de conception et d'analyse des algorithmes.

### Modèle de calcul
Le modèle de référence est la **Machine à Accès Aléatoire** (RAM, *Random Access Machine*). Dans ce modèle :
- Les instructions élémentaires (affectations, opérations arithmétiques de base, comparaisons, accès mémoire indexé) s'exécutent en temps constant $\mathcal{O}(1)$.
- La taille de la mémoire est supposée infinie, mais chaque mot mémoire possède une taille bornée (ou l'on comptabilise le coût binaire des opérations en fonction de la taille des opérandes dans le cadre de la complexité en bits).

### Complexité en temps et en espace
Soit $A$ un algorithme et $n$ la taille de l'entrée.
- **Complexité au pire** : $T_{\text{max}}(n) = \sup \{ \text{coût}(A(x)) \mid |x| = n \}$.
- **Complexité en moyenne** : $T_{\text{moy}}(n) = \sum_{|x|=n} \mathbb{P}(x) \cdot \text{coût}(A(x))$.
- **Complexité amortie** : Sur une suite de $k$ opérations, le coût total est divisé par $k$ pour obtenir le coût moyen par opération, indépendamment de la configuration initiale (méthode des potentialités ou de l'agrégat).

### Notations asymptotiques
Soit $f$ et $g$ deux fonctions de $\mathbb{N}$ dans $\mathbb{R}^^+$ :
- $f(n) = \mathcal{O}(g(n)) \iff \exists C > 0, \exists n_0 \in \mathbb{N}, \forall n \ge n_0, \ 0 \le f(n) \le C g(n)$
- $f(n) = \Omega(g(n)) \iff g(n) = \mathcal{O}(f(n))$
- $f(n) = \Theta(g(n)) \iff f(n) = \mathcal{O}(g(n)) \text{ et } f(n) = \Omega(g(n))$
- $f(n) = o(g(n)) \iff \lim_{n \to +\infty} \frac{f(n)}{g(n)} = 0$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème Maître (*Master Theorem*)
Le théorème maître permet de déterminer immédiatement la complexité asymptotique des algorithmes récursifs divisant le problème en sous-problèmes de taille égale.

**Énoncé :**
Soit $a \ge 1$ et $b > 1$ des constantes, $c \ge 0$ et $k \ge 0$. Soit $T(n)$ une fonction définie sur les entiers par la relation de récurrence :
$$T(n) = a T\left(\frac{n}{b}\right) + \mathcal{O}(n^c \log^k n)$$
où $\frac{n}{b}$ désigne soit $\lfloor n/b \rfloor$, soit $\lceil n/b \rceil$. On pose $\log_b(a)$ l'exposant critique. Alors :
1. Si $c < \log_b(a)$, alors $T(n) = \Theta\left(n^{\log_b(a)}\right)$.
2. Si $c = \log_b(a)$ :
   - Si $k > -1$, alors $T(n) = \Theta\left(n^c \log^{k+1} n\right)$.
   - Si $k = -1$, alors $T(n) = \Theta\left(n^c \log \log n\right)$.
   - Si $k < -1$, alors $T(n) = \Theta\left(n^c\right)$.
3. Si $c > \log_b(a)$, alors $T(n) = \Theta\left(n^c \log^k n\right)$.

---

### Démonstration : Arbre de récurrence (Cas $k = 0$)
Objectif: * Établir rigoureusement le cas 1 du Théorème Maître (avec $k=0$), c'est-à-dire $T(n) = a T(n/b) + \mathcal{O}(n^c$ avec $c < \log_b(a)$.

1. **Construction de l'arbre :**
   La racine de l'arbre représente le coût de la division et de la combinaison au premier niveau, soit $\mathcal{O}(n^c)$. 
   Ce problème se ramifie en $a$ sous-problèmes de taille $\frac{n}{b}$.
   - À la profondeur $h$, il y a $a^h$ sous-problèmes, chacun de taille $\frac{n}{b^h}$.
   - Le coût total au niveau $h$ (pour $0 \le h < \log_b(n)$) est donc majoré par :
     $$W(h) = a^h \cdot C \left(\frac{n}{b^h}\right)^c = C n^c \left(\frac{a}{b^c}\right)^h$$

2. **Sommation des coûts :**
   Le coût total de l'algorithme est la somme des coûts sur toutes les profondeurs, de $h = 0$ à $h = \log_b(n) - 1$, à laquelle s'ajoute le coût des feuilles (à la profondeur $h_{\max} = \log_b(n)$) :
   $$T(n) = \sum_{h=0}^{\log_b(n)-1} C n^c \left(\frac{a}{b^c}\right)^h + \Theta\left(a^{\log_b(n)}\right)$$

3. **Évaluation de la série géométrique :**
   Puisque $c < \log_b(a)$, on a $b^c < a$, soit r = $\frac{a}{b^c} > 1$. La raison de la série géométrique est strictement supérieure à $1$. Le terme dominant est donc le dernier terme de la somme (niveau des feuilles) :
   $$\sum_{h=0}^{\log_b(n)-1} \left(\frac{a}{b^c}\right)^h = \frac{\left(\frac{a}{b^c}\right)^{\log_b(n)} - 1}{\frac{a}{b^c} - 1} = \Theta\left(\left(\frac{a}{b^c}\right)^{\log_b(n)}\sights)$$

4. **Simplification finale :**
   En utilisant la propriété $\beta^{\log_b(\alpha)} = \alpha^{\log_b(\beta)}$ :
   $$\left(\frac{a}{b^c}\right)^{\log_b(n)} = \frac{a^{\log_b(n)}}{(b^{\log_b(n)})^c} = \frac{n^{\log_b(a)}}{n^c} = n^{\log_b(a) - c}$$
   Par conséquent, le coût total de la somme est :
   $$C n^c \cdot \Theta\left(n^{\log_b(a) - c}\right) = \Theta\left(n^{\log_b(a)}\right)$$
   Le nombre de feuilles est $a^{\log_b(n)} = n^{\log_b(a)}$, ce qui correspond exactement à la même complexité.
Conclusion: ** $T(n) = \Theta\left(n^{\log_b(a)}\right)$. $\blacksquare$

---

## 💡 3. Méthodes classiques de résolution

### Programmation dynamique
Utilisée pour les problèmes présentant une **sous-structure optimale** et des **sous-problèmes qui se chevauchent**.
- **Approche descendante (*Memoization*)** : Fonction récursive stockant les résultats intermédiaires dans une table de mémoïsation. Évite les recalculs redondants.
- **Approche ascendante (*Bottom-Up*)** : Remplissage itératif d'un tableau du cas de base vers le cas général.
- *Exemples canoniques* : Distance d'Édition (Levenshtein), Plus Longue Sous-Séquence Commune (LCS), Sac à dos (0/1).

### Algorithmes gloutons (*Greedy Algorithms*)
À chaque étape, on fait un choix localement optimal dans l'espoir d'atteindre un optimum global.
- Nécessite de prouver la **propriété de choix glouton** et la **sous-structure optimale**.
- *Exemples canoniques* : Code de Huffman, Algorithme de Dijkstra (plus courts chemins à poids positifs), Algorithme de Kruskal / Prim (arbres couvrant de poids minimal).

### Algorithmes de graphes avancés
- **Parcours en largeur (BFS) / Profondeur (DFS)** : Exploration linéaire $\mathcal{O}(V + E)$.
- **Flots maximaux** : Algorithme de Ford-Fulkerson et méthode de Edmonds-Karp (basée sur un BFS, complexité $\mathcal{O}(V E^2)$).
- **Tarjan / Kosaraju** : Identification des composantes fortement connexes en $\mathcal{O}(V + E)$.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Utiliser le Théorème Maître hors de ses hypothèses :**
   Le théorème maître ne s'applique que si les sous-problèmes ont *strictement* la même taille $\frac{n}{b}$. Si les tailles varient (ex: $T(n) = T(\lfloor n/3 \rfloor) + T(\lceil 2n/3 \rceil) + \mathcal{O}(n)$), le théorème maître est inapplicable ; il faut recourir à l'arbre de récurrence, à la méthode de substitution ou au théorème d'Akra-Bazzi.

2. **Confondre complexité au pire et complexité amortie :**
   Affirmer qu'une structure de données (comme une table de hachage dynamique ou un *Union-Find*) effectue chaque opération en $\mathcal{O}(1)$ ou $\mathcal{O}(\alpha(n))$ au pire est faux. Seule la complexité *amortie* est garantie. Une opération individuelle (*worst-case*) peut être en $\mathcal{O}(n)$.

3. **Piège des récursivités non-terminales et de la pile d'appels :**
   En programmation fonctionnelle ou impérative, un algorithme récursif en $\mathcal{O}(1)$ en temps théorique peut mener à un **dépassement de pile** (*Stack Overflow*) si la profondeur de récursion atteint $\mathcal{O}(n)$, consommant $\mathcal{O}(n)$ d'espace mémoire sur la pile d'exécution.

4. **Approximation gloutonne et optimalité globale :**
   Appliquer un algorithme glouton sans démonstration formelle de sa validité. De nombreux problèmes (comme le problème du sac à dos entier) sont NP-complets et les approches gloutonnes n'y garantissent pas l'optimalité globale.