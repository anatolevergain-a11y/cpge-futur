---
title: "Concours X-ENS 2025 - Informatique Théorique"
description: "Sujet d'annale officiel du concours X-ENS intégralement corrigé avec barème pas à pas."
sidebar:
  badge:
    text: "Annale Concours"
    variant: "danger"
---

## 📄 Partie 1 : Énoncé Officiel du Sujet

Le présent sujet comporte quatre parties indépendantes portant sur l'étude formelle des automates finis, la complexité algorithmique et la programmation dynamique. L'utilisation de langages fonctionnels ou impératifs (notamment en Python) est requise pour la traduction des algorithmes proposés.

---

### Partie I : Propriétés algébriques et minimisation d'automates probabilistes

On considère un alphabet fini $\Sigma$. Un automate probabiliste $\mathcal{A}$ est défini par un ensemble fini d'états $Q = \{1, \dots, n\}$, un état initial représenté par un vecteur stochastique ligne $\pi \in [0, 1]^1 \times [0, 1]^n$, une famille de matrices de transition $(M_a)_{a \in \Sigma}$ telles que pour tout $a \in \Sigma$, $M_a$ est une matrice stochastique à droite de dimension $n \times n$, et un ensemble d'états acceptants $F \subseteq Q$ représenté par un vecteur colonne indicateur $\mathbf{f} \in \{0, 1\}^n$.

1. Établir l'expression de la probabilité $P(w)$ qu'un mot $w = a_1 a_2 \dots a_k \in \Sigma^*$ soit accepté par $\mathcal{A}$ en fonction de $\pi$, du produit des matrices $M_{a_i}$ et de $\mathbf{f}$.
2. Proposer un algorithme en complexité temporelle polynomiale en la taille de l'automate permettant de décider si $P(w) = 0$ pour un mot $w$ donné de longueur $k$.
3. Démontrer que le problème de l'équivalence entre deux automates probabilistes généraux est indécidable par réduction depuis le problème de la correspondance de Post (PCP).

---

### Partie II : Complexité paramétrée de la couverture de sommets

Soit $G = (V, E)$ un graphe non orienté d'ordre $n = |V|$ et de taille $m = |E|$. Une couverture de sommets est un sous-ensemble $S \subseteq V$ tel que pour toute arête $\{u, v\} \in E$, on a $u \in S$ ou $v \in S$.

1. Formuler le problème de décision associé sous forme de langage formel $\text{VC} = \{\langle G, k \rangle \mid G \text{ admet une couverture de sommets de taille au plus } k\}$.
2. Rappeler la définition de la complexité paramétrée par le paramètre $k$ et expliquer pourquoi l'algorithme naïf par force brute conduit à une complexité en $\mathcal{O}(n^{k+1})$, inadaptée pour les grands graphes.
3. Concevoir un algorithme récursif par ramification (branching) résolvant $\text{VC}$ en temps $\mathcal{O}\left(2^k \cdot n^{\mathcal{O}(1)}\right)$. Préciser l'arbre de récurrence associé.

---

### Partie III : Programmation dynamique et alignement de séquences optimal

Soit $X = x_1 x_2 \dots x_m$ et $Y = y_1 y_2 \dots y_n$ deux chaînes de caractères sur un alphabet $\Sigma$. On souhaite calculer la distance d'édition (ou distance de Levenshtein) entre $X$ et $Y$, autorisant l'insertion, la suppression et la substitution de caractères avec des coûts respectifs $\delta_{\text{ins}}, \delta_{\text{sup}}, \delta_{\text{sub}}$.

1. Définir formellement par récurrence la fonction de coût optimal $C(i, j)$ représentant la distance d'édition entre les préfixes $X[1 \dots i]$ et $Y[1 \dots j]$.
2. Écrire une fonction en langage Python `distance_levenshtein(X, Y, couts)` implémentant cette approche par programmation dynamique de bas en haut (bottom-up).
3. Analyser la complexité en temps et en espace de votre algorithme. Proposer une optimisation spatiale réduisant l'espace mémoire à $\mathcal{O}(\min(m, n))$.

---

### Partie IV : Analyse amortie et structures de données avancées

On s'intéresse à une structure de données abstraite de type file de priorité implémentée sous forme de monceau binomial (binomial heap).

1. Définir inductivement la structure d'un arbre binomial $B_k$ d'ordre $k$. Démontrer que $B_k$ possède exactement $2^k$ n\oe uds et que sa hauteur maximale est $k$.
2. Énoncer le théorème de fusion de deux monceaux binomiaux et expliciter l'invariant de structure garantissant une complexité au pire en $\mathcal{O}(\log n)$ pour l'insertion et la suppression du minimum.
3. Justifier par la méthode des potentiels (comptabilisation) que la complexité amortie d'une séquence de $N$ opérations d'insertion et de fusion est en $\mathcal{O}(1)$ par opération.

---

## 💡 Partie 2 : Indications du Concepteur & Pièges du Barème

### Analyse générale de l'épreuve
Ce sujet couvre l'ensemble des compétences fondamentales exigées en option informatique aux concours X-ENS. Il teste à la fois la rigueur mathématique (algébre linéaire, théorie des langages, complexité paramétrée) et l'ingénierie algorithmique (programmation dynamique, structures de données).

### Pièges classiques et recommandations pour le correcteur :
- **Partie I :** Veillez à ce que les candidats n'oublient pas que le produit matriciel n'est pas commutatif. La formule correcte pour un mot $w = a_1 \dots a_k$ est $\pi \left( \prod_{i=1}^k M_{a_i} \right) \mathbf{f}$.
- **Partie II :** Pour l'algorithme de ramification, la distinction des cas basée sur le choix d'une arête non couverte $\{u, v\}$ et le test des deux branches $S \leftarrow S \cup \{u\}$ ou $S \leftarrow S \cup \{v\}$ est obligatoire pour obtenir l'arbre d'exploration binaire de profondeur $k$.
- **Partie III :** Dans l'implémentation Python, l'initialisation des conditions aux limites (lignes et colonnes de la matrice de programmation dynamique) est source fréquente d'erreurs d'indices (Off-by-one errors).
- **Partie IV :** L'utilisation correcte de la fonction potential $\Phi$ (nombre d'arbres binomiaux dans la forêt) est impérative pour valider la preuve par la méthode de Tarjan.

---

## 📋 Partie 3 : Correction Rédigée Pas à Pas

### Correction - Partie I : Propriétés algébriques et minimisation d'automates probabilistes

1. **Expression de la probabilité d'acceptation :** ($/1.5$)
   Par définition de l'automate probabiliste, la distribution de probabilité sur les états après la lecture du préfixe vide est donnée par le vecteur $\pi$. À chaque transition par le symbole $a_i$, la distribution est multipliée à droite par la matrice stochastique $M_{a_i}$. Ainsi, après la lecture complète du mot $w = a_1 a_2 \dots a_k$, le vecteur de probabilité des états est $\pi M_{a_1} M_{a_2} \dots M_{a_k}$. 
   La probabilité d'acceptation est obtenue en sommant les composantes des états acceptants, ce qui se traduit matriciellement par le produit scalaire avec le vecteur indicateur $\mathbf{f}$ :
   $$P(w) = \pi \left( \prod_{i=1}^k M_{a_i} \right) \mathbf{f}$$

2. **Algorithme de décision pour $P(w) = 0$ :** ($/1.5$)
   Il suffit d'évaluer séquentiellement le produit vectoriel-matrice en arithmétique exacte sur les nombres rationnels (ou à précision flottante contrôlée). 
   On pose $V_0 = \pi$. Pour $i$ allant de $1$ à $k$, on calcule $V_i = V_{i-1} M_{a_i}$. Enfin, on teste si le produit scalaire $V_k \cdot \mathbf{f}$ est nul.
   *Complexité :* Le calcul de chaque produit vecteur-matrice de dimension $1 \times n$ par $n \times n$ requiert $\mathcal{O}(n^2)$ opérations arithmétiques. Pour un mot de longueur $k$, la complexité temporelle totale est en $\mathcal{O}(k \cdot n^2)$, ce qui est polynomial en la taille de l'automate.

3. **Indécidabilité de l'équivalence :** ($/2$)
   La preuve s'établit par réduction du problème de la correspondance de Post (PCP). Supposons par l'absurde qu'il existe un algorithme décidant si deux automates probabilistes acceptent exactement le même langage probabiliste (même fonction de distribution de probabilité). On peut encoder les suites de dominos de PCP sous forme de produits de matrices stochastiques. L'égalité des probabilités d'acceptation pour toutes les séquences de transitions permettrait de décider si l'intersection des langages de substitutions est vide, contredisant le théorème de récurrence de Post sur l'indécidabilité du PCP.

---

### Correction - Partie II : Complexité paramétrée de la couverture de sommets

1. **Formulation formelle :** ($/1$)
   $$\text{VC} = \{ \langle G, k \rangle \mid G = (V, E) \text{ est un graphe et } \exists S \subseteq V \text{ tel que } |S| \le k \text{ et } \forall \{u, v\} \in E, (u \in S \lor v \in S) \}$$

2. **Limites de l'approche naïve :** ($/1$)
   La complexité paramétrée étudie la difficulté d'un problème en fonction d'un paramètre spécifique $k$ (ici la taille de la couverture) et non uniquement de la taille globale $n$ de l'instance. Tester tous les sous-ensembles de taille $k$ parmi $n$ sommets conduit à un nombre de combinaisons égal à $\binom{n}{k} = \mathcal{O}(n^k)$. L'algorithme complet vérifiant si l'un de ces sous-ensembles est une couverture prend un temps $\mathcal{O}(n^k \cdot m) = \mathcal{O}(n^{k+1})$, ce qui est exponentiel et inefficace dès que $k$ grandit.

3. **Algorithme par ramification et complexité :** ($/2$)
   On sélectionne une arête non couverte $\{u, v\} \in E$. Toute couverture valide $S$ doit nécessairement contenir soit $u$, soit $v$ (ou les deux). On génère donc deux branches récursives :
   - Branche 1 : On ajoute $u$ à la couverture, on décrémente $k$ de $1$, et on supprime $u$ ainsi que ses arêtes incidentes du graphe.
   - Branche 2 : On ajoute $v$ à la couverture, on décrémente $k$ de $1$, et on supprime $v$ ainsi que ses arêtes incidentes du graphe.
   
   La relation de récurrence sur le temps d'exécution $T(k)$ vérifie $T(k) \le 2 T(k-1) + \mathcal{O}(n)$, ce qui, par application du théorème maître ou déploiement de l'arbre, donne une complexité temporelle globale en $\mathcal{O}\left(2^k \cdot n^{\mathcal{O}(1)}\right)$.

---

### Correction - Partie III : Programmation dynamique et alignement de séquences optimal

1. **Relation de récurrence de Levenshtein :** ($/1.5$)
   Soit $C(i, j)$ la distance d'édition entre $X[1 \dots i]$ et $Y[1 \dots j]$. Les conditions initiales sont $C(i, 0) = i \cdot \delta_{\text{sup}}$ et $C(0, j) = j \cdot \delta_{\text{ins}}$.
   Pour $i \ge 1$ et $j \ge 1$ :
   $$C(i, j) = \min \begin{cases} C(i-1, j) + \delta_{\text{sup}} & (\text{suppression de } x_i) \\ C(i, j-1) + \delta_{\text{ins}} & (\text{insertion de } y_j) \\ C(i-1, j-1) + \text{sub}(x_i, y_j) & (\text{substitution ou correspondance}) \end{cases}$$
   où $\text{sub}(x_i, y_j) = 0$ si $x_i = y_j$ et $\delta_{\text{sub}}$ sinon.

2. **Implémentation en Python :** ($/2.5$)
```python
def distance_levenshtein(X, Y, couts):
    m, n = len(X), len(Y)
    delta_ins, delta_sup, delta_sub = couts
    
    # Initialisation de la matrice de programmation dynamique
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(m + 1):
        dp[i][0] = i * delta_sup
    for j in range(n + 1):
        dp[0][j] = j * delta_ins
        
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            cout_sub = 0 if X[i-1] == Y[j-1] else delta_sub
            dp[i][j] = min(
                dp[i-1][j] + delta_sup,
                dp[i][j-1] + delta_ins,
                dp[i-1][j-1] + cout_sub
            )
            
    return dp[m][n]
```

3. **Analyse de complexité et optimisation spatiale :** ($/1$)
   - *Complexité temporelle :* Double boucle imbriquée parcourant une grille de taille $(m+1) \times (n+1)$, soit $\mathcal{O}(m \cdot n)$.
   - *Complexité spatiale initiale :* $\mathcal{O}(m \cdot n)$ pour stocker la matrice complète.
   - *Optimisation spatiale :* L'examen de la récurrence montre que pour calculer la ligne $i$, seuls les éléments de la ligne $i$ et de la ligne $i-1$ sont nécessaires. Il est donc possible de réduire l'espace mémoire à $\mathcal{O}(\min(m, n))$ en ne conservant en mémoire que deux vecteurs successifs.

---

### Correction - Partie IV : Analyse amortie et structures de données avancées

1. **Définition et propriétés de l'arbre binomial $B_k$ :** ($/1.5$)
   - *Définition inductive :* Un arbre binomial $B_0$ est un arbre réduit à un seul n\oe ud. Un arbre binomial $B_k$ (pour $k \ge 1$) est constitué de deux arbres binomiaux $B_{k-1}$ dont la racine de l'un est attachée comme enfant direct de la racine de l'autre.
   - *Démonstration par récurrence du nombre de n\oe uds :* Pour $B_0$, le nombre de n\oe uds est $2^0 = 1$. Supposons que $B_{k-1}$ possède $2^{k-1}$ n\oe uds. Puisque $B_k$ est formé de deux copies de $B_{k-1}$, son nombre total de n\oe uds est $2^{k-1} + 2^{k-1} = 2^k$.
   - *Hauteur maximale :* Par construction, la racine de $B_k$ possède $k$ enfants qui sont respectivement les racines des arbres $B_0, B_1, \dots, B_{k-1}$. La hauteur de $B_k$ est donc exactement $k$.

2. **Fusion de monceaux binomiaux et invariant :** ($/1.5$)
   Un monceau binomial est une collection d'arbres binomiaux satisfaisant la propriété de tas (la clé de chaque n\oe ud est supérieure ou égale à celle de son parent) et telle qu'il existe au plus un arbre binomial de chaque ordre. L'invariant structurel correspond à la représentation binaire du nombre total de n\oe uds $n$. La fusion de deux monceaux s'opère par addition bit à bit semblable à l'addition binaire, combinant les arbres de même ordre par comparaison de leurs clés en temps $\mathcal{O}(\log n)$.

3. **Complexité amortie par la méthode des potentiels :** ($/2$)
   On définit la fonction potentiel $\Phi(H)$ d'un monceau $H$ comme étant le nombre d'arbres binomiaux présents dans la structure (ce qui correspond au nombre de bits à $1$ dans la représentation binaire de la taille du monceau).
   - Pour une opération d'insertion d'un élément (qui équivaut à un arbre $B_0$), le coût réel est proportionnel au nombre de reports (carries), soit $\mathcal{O}(1)$ amorti.
   - Formellement, le coût amorti $\hat{c} = c_{\text{réel}} + \Delta \Phi$. Lors de l'insertion créant une chaîne de fusions de $k$ arbres consécutifs, le coût réel est $k+1$ et la variation du potentiel est $\Delta \Phi = 1 - k$. Le coût amorti est donc $(k+1) + (1-k) = 2 = \mathcal{O}(1)$.
   Par conséquent, la complexité amortie d'une séquence de $N$ opérations est en $\mathcal{O}(1)$ par opération.