---
title: 'Cours : Probabilités discrètes et dénombrement'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PCSI.'
---

## 📌 1. Définitions & Cadre d'étude

Le cadre formel d'une modélisation probabiliste repose sur la donnée d'un **espace probabilisable** et d'une **mesure de probabilité**.

### Vocabulaire ensembliste et événements
Soit $\Omega$ un ensemble non vide, appelé **univers** ou ensemble des résultats possibles (ou issues).
- Les éléments $\omega \in \Omega$ sont appelés **événements élémentaires**.
- Un **événement** $A$ est une partie de $\Omega$ ($A \in \mathcal{P}(\Omega)$).
- L'événement certain est $\Omega$, l'événement impossible est $\emptyset$.
- Deux événements $A$ et $B$ sont **incompatibles** (ou disjoints) si $A \cap B = \emptyset$.
- Le système d'événements $(A_i)_{i \in I}$ est un **système complet d'événements** (SCE) si les événements sont deux à deux incompatibles et de réunion égale à $\Omega$ :
  $$\forall (i, j) \in I^2, \, i \neq j \implies A_i \cap A_j = \emptyset \quad \text{et} \quad \bigcup_{i \in I} A_i = \Omega$$

### Espace probabilisable et probabilisé
- On appelle **tribu** (ou $\sigma$-algèbre) sur $\Omega$ une partie $\mathcal{T} \subset \mathcal{P}(\Omega)$ contenant $\Omega$ et stable par passage au complémentaire et par union dénombrable. En mathématiques discrètes (programme de PCSI), on prend systématiquement $\mathcal{T} = \mathcal{P}(\Omega)$.
- Un **espace probabilisé** est un couple $(\Omega, P)$ où $\Omega$ est un ensemble au plus dénombrable et $P : \mathcal{P}(\Omega) \to [1, 0]$ une application vérifiant les **axiomes de Kolmogorov** :
  1. $P(\Omega) = 1$.
  2. $\sigma$-additivité (ou additivité finie dans le cas discret général) : Pour toute famille $(A_n)_{n \in \mathbb{N}}$ d'événements deux à deux incompatibles,
     $$P\left(\bigcup_{n \in \mathbb{N}} A_n\right) = \sum_{n=0}^{+\infty} P(A_n)$$

### Dénombrement fondamental
Dans le cas d'un univers $\Omega$ fini muni de l'équiprobabilité (où chaque issue élémentaire a la même probabilité), calculer la probabilité d'un événement $A$ revient à dénombrer :
$$P(A) = \frac{\text{Card}(A)}{\text{Card}(\Omega)}$$

Les outils de dénombrement usuels pour un ensemble fini à $n$ éléments sont :
- **P-uplets** (avec ordre et avec répétition) de $E$ dans $E$ de longueur $k$ : $n^k$.
- **Arrangements** (avec ordre et sans répétition) de $k$ éléments parmi $n$ : $A_n^k = \frac{n!}{(n-k)!}$.
- **Permutations** (cas particulier $k=n$) : $n!$.
- **Combinaisons** (sans ordre et sans répétition) de $k$ éléments parmi $n$ : $\binom{n}{k} = \frac{n!}{k!(n-k)!}$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème : Formule des probabilités totales (FPT)
Soit $(\Omega, P)$ un espace probabilisé. Soit $(A_n)_{n \in I}$ un système complet d'événements associé à $\Omega$ (avec $I$ fini ou $\mathbb{N}$) tel que $\forall n \in I, \, P(A_n) > 0$. 
Alors, pour tout événement $B$:
$$P(B) = \sum_{n \in I} P(B \cap A_n) = \sum_{n \in I} P(A_n) P_{A_n}(B)$$

#### Démonstration rigoureuse :
Soit $B$ un événement quelconque. Par union ensembliste, on peut écrire $B$ sous la forme :
$$B = B \cap \Omega = B \cap \left( \bigcup_{n \in I} A_n \right)$$
En utilisant la distributivité de l'intersection sur l'union :
$$B = \bigcup_{n \in I} (B \cap A_n)$$
Les événements de la famille $(A_n)_{n \in I}$ étant deux à deux incompatibles, il en va de même pour la famille $(B \cap A_n)_{n \in I}$ puisque $(B \cap A_n) \subset A_n$.
Par application de l'axiome de $\sigma$-additivité de la probabilité $P$ :
$$P(B) = \sum_{n \in I} P(B \cap A_n)$$
Par définition de la probabilité conditionnelle d'un événement sachant un événement de probabilité non nulle ($P(A_n) > 0$), on a $P(B \cap A_n) = P(A_n) P_{A_n}(B)$, ce qui conclut :
$$P(B) = \sum_{n \in I} P(A_n) P_{A_n}(B)$$
$\blacksquare$

### Théorème : Formule de Bayes
Sous les mêmes hypothèses que la formule des probabilités totales, si de plus $P(B) > 0$, alors pour tout indice $i \in I$ :
$$P_{B}(A_i) = \frac{P(A_i) P_{A_i}(B)}{\sum_{n \in I} P(A_n) P_{A_n}(B)}$$

#### Démonstration :
Par définition de la probabilité conditionnelle :
$$P_{B}(A_i) = \frac{P(A_i \cap B)}{P(B)}$$
Le numérateur s'exprime par le produit de composition $P(A_i) P_{A_i}(B)$, et le dénominateur $P(B)$ se réécrit par application directe de la formule des probabilités totales démontrée ci-dessus. D'où le résultat. $\blacksquare$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Méthode 1 : Calculs de dénombrement par construction d'arbres ou d'urnes
Pour dénombrer des configurations complexes :
1. **Traduire** le problème en termes de choix successifs (tirages avec/sans remise, avec/sans ordre).
2. **Identifier** si l'ordre des éléments sélectionnés importe.
3. **Appliquer** le principe multiplicatif : si une expérience se décompose en $k$ étapes successives indépendantes du choix précédent comportant respectivement $n_1, n_2, \dots, n_k$ options, le nombre total d'issues est $\prod_{i=1}^{k} n_i$.

### Méthode 2 : Utilisation d'un système complet d'événements
Pour calculer la probabilité d'un événement $B$ complexe :
1. **Rechercher** une partition naturelle de l'univers $\Omega$ en sous-événements $(A_i)$ dont on connait ou peut facilement calculer les probabilités $P(A_i)$ et les probabilités conditionnelles $P_{A_i}(B)$.
2. **Appliquer** la FPT. C'est l'outil roi pour traiter les problèmes d'urnes successives ou de fiabilité de systèmes.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oubli de vérifier le système complet d'événements** : Appliquer la formule des probabilités totales avec une famille $(A_i)$ qui n'est ni deux à deux disjointe, ni de réunion égale à $\Omega$. Vérifiez toujours formellement $\sum P(A_i) = 1$ et $A_i \cap A_j = \emptyset$ pour $i \neq j$.
2. **Confusion entre indépendance globale et indépendance deux à deux** : Une famille d'événements $(A_1, A_2, A_3)$ est dite indépendante si pour toute sous-famille, la probabilité de l'intersection est le produit des probabilités. L'indépendance deux à deux (i.e., $\forall i \neq j, P(A_i \cap A_j) = P(A_i)P(A_j)$) n'implique **jamais** l'indépendance mutuelle.
3. **Erreurs de modélisation dans les tirages** : "Tirer simultanément" renvoie à des combinaisons $\binom{n}{k}$, tandis que "tirer successivement avec remise" renvoie à des $p$-uplets $n^k$. Ne mélangez jamais les axiomes combinatoires sous peine d'annulation immédiate de l'exercice à l'écrit.