---
title: 'Optimisation au concours : Informatique MPI/MPI*'
description: 'Les questions incontournables aux concours, les erreurs à éviter et les rédactions modèles de jury.'
sidebar:
  badge:
    text: 'Méthode Concours'
    variant: 'caution'
---

## 🎯 Objectif du module & Exigences des Jurys

En tant que concepteur de sujets et président de jury pour les concours de la filière MPI (Mines-Ponts, Centrale-Supélec, X-ENS, CCINP), je constate chaque année une fracture nette entre les candidats qui récitent leur cours et ceux qui maîtrisent l'art de la **démonstration formelle** et de l'**argumentation rigoureuse**.

En option Informatique-Télécoms (filière MPI), l'informatique n'est pas seulement une discipline d'implementation : c'est une science exacte dont les outils sont la logique, la théorie des langages, la complexité et la calculabilité. Le jury attend de vous :
1. **Une rigueur implacable dans les preuves** : qu'il s'agisse de correction (terminaison et invariant de boucle) ou de réductions polynomiales.
2. **Une syntaxe irréprochable** : en Python, en OCaml ou en pseudo-code selon les consignes, avec des typages explicites lorsque requis.
3. **Une conscience analytique** : savoir estimer une complexité au pire mais aussi en moyenne (notamment probabiliste ou amortie), sans éluder les hypothèses de distribution.

Ce guide couvre les trois types de questions éliminatoires par excellence. Appropriez-vous les rédactions modèles : elles reflètent exactement le barème appliqué lors de la correction des copies.

---

## 📌 Question Type 1 : Preuve de correction complète et analyse de complexité temporelle au pire et en moyenne

### Cadrage exact
> "Soit l'algorithme $A$ résolvant le problème $P$. Démontrer sa terminaison, sa correction partielle via un invariant de boucle, puis analyser sa complexité temporelle au pire $T_{\text{pire}}(n)$ et en moyenne $T_{\text{moy}}(n)$ en fonction de la taille $n$ de l'entrée."

### 💡 Méthode canonique & Étapes de rédaction
1. **Terminaison** : Définir un variant de boucle (ou fonction de termination) $v \in \mathbb{N}$ (ou bien fondé), strictement décroissant à chaque itération et minoré par une constante.
2. **Correction partielle** : Identifier un invariant de boucle $\mathcal{I}$ vérifiant trois propriétés :
   - *Initialisation* : $\mathcal{I}$ est vrai avant la première itération.
   - *Conservation* : Si $\mathcal{I}$ est vrai avant une itération et que la condition de boucle est vraie, $\mathcal{I}$ est encore vrai après l'itération.
   - *Terminaison / Post-condition* : À la sortie de la boucle (condition fausse combinée à l'invariant), la propriété désirée est établie.
3. **Complexité au pire** : Compter le nombre maximal d'opérations élémentaires exécutées pour une entrée de taille $n$, exprimé sous la forme $O(f(n))$.
4. **Complexité en moyenne** : Introduire un espace probabilisé $\Omega$ sur les entrées de taille $n$, définir la variable aléatoire de coût $X$, et calculer l'espérance mathématique $\mathbb{E}[X]$ en justifiant l'utilisation éventuelle de la linéarité de l'espérance ou du théorème maître.

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Sujet d'application** : Soit la fonction de tri rapide (*Quicksort*) utilisant un pivot choisi uniformément au hasard. Analyser sa correction et sa complexité.

**Rédaction modèle type /20** :

> **1. Terminaison**
> La fonction récursive *Quicksort* partitionne un tableau $T[i \dots j]$ en deux sous-tableaux strictement plus petits si $j > i$. La taille de la portion de tableau à trier, donnée par $j - i + 1$, décroît strictement à chaque appel récursif. L'algorithme s'arrête lorsque $j \le i$ (cas de base). La terminaison est ainsi assurée.
>
> **2. Correction partielle**
> Par récurrence structurelle sur la taille du tableau $n = j - i + 1$ :
> - *Base* : Si $n \le 1$, le tableau est trivialement trié.
> - *Hérédité* : Supposons l'algorithme correct pour tout tableau de taille strictement inférieure à $n$. La fonction de partitionnement place un pivot à sa position définitive $p$, telle que tous les éléments de $T[i \dots p-1]$ lui sont inférieurs ou égaux, et ceux de $T[p+1 \dots j]$ lui sont supérieurs ou égaux. Par hypothèse de récurrence, les appels récursifs sur ces deux sous-tableaux (de tailles $p-i$ et $j-p$, toutes deux $< n$) trient correctement ces portions. Le tableau global est donc trié.
>
> **3. Complexité au pire**
> Au pire, le pivot choisi est systématiquement le plus petit ou le plus grand élément (par exemple, tableau déjà trié avec choix du premier élément). La relation de récurrence sur le nombre d'opérations est :
> $$T_{\text{pire}}(n) = T_{\text{pire}}(n-1) + O(n)$$
> Par télescopage, on obtient immédiatement $T_{\text{pire}}(n) = O(n^2)$.
>
> **4. Complexité en moyenne**
> Si le pivot est choisi uniformément au hasard, la taille $k$ du sous-tableau de gauche suit uniformément la loi sur $\{0, 1, \dots, n-1\}$. L'équation de récurrence en espérance $C(n) = \mathbb{E}[T_{\text{moy}}(n)]$ est :
> $$C(n) = an + \frac{1}{n} \sum_{k=0}^{n-1} \big(C(k) + C(n-1-k)\big)$$
> pour une constante $a > 0$ liée au partitionnement linéaire. Par résolution classique (méthode par substitution ou fonction génératrice), on établit que $C(n) = O(n \log n)$.

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Oubli de la minoration du variant** : Un variant qui décroît sans être minoré ne prouve pas la terminaison.
- **Confusion entre complexité au pire et en moyenne** : Fournir $O(n \log n)$ comme complexité pire cas pour le *Quicksort* est une faute éliminatoire.
- **Rédaction floue de l'invariant** : Dire "la boucle fait ce qu'on lui demande" ne rapporte aucun point. L'invariant doit être une assertion logique formelle.

---

## 📌 Question Type 2 : Construction d'automate fini déterministe et minimisation par l'algorithme de Moore

### Cadrage exact
> "Soit un langage rationnel $L$ défini par une expression régulière ou un automate non déterministe. 
> 1. Construire l'automate fini déterministe (AFD) reconnaissant $L$ par la méthode de construction des sous-ensembles (déterminisation).
> 2. Appliquer l'algorithme de Moore (ou des équivalences successives) pour obtenir l'AFD minimal."

### 💡 Méthode canonique & Étapes de rédaction
1. **Déterminisation (Algorithme de Brzozowski ou des sous-ensembles)** :
   - Calculer l'état initial de l'AFD : $\epsilon\text{-retour}(q_0)$ de l'AFN d'origine.
   - Pour chaque nouvel état (ensemble d'états de l'AFN) et pour chaque lettre de l'alphabet, déterminer l'ensemble accessible et nommer le nouvel état. Répéter jusqu'à épuisement.
   - Un état est terminal s'il contient au moins un état terminal de l'AFN.
2. **Minimisation (Algorithme de Moore / Raffinement de partitions)** :
   - Initialiser une partition $\Pi_0$ en deux blocs : les états finaux $F$ et les états non finaux $Q \setminus F$.
   - À l'étape $k$, raffiner la partition $\Pi_k$ : deux états $p$ et $q$ d'un même bloc de $\Pi_k$ sont séparés si pour une lettre $a$, $\delta(p, a)$ et $\delta(q, a)$ appartiennent à des blocs différents de $\Pi_k$.
   - S'arrêter lorsque $\Pi_{k+1} = \Pi_k$. Les blocs de la partition finale constituent les états de l'automate minimal.

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Sujet d'application** : Soit l'alphabet $\Sigma = \{a, b\}$. Soit l'AFD défini par la table de transition suivante :
- $1$ (initial, terminal) : $\delta(1, a) = 2$, $\delta(1, b) = 3$
- $2$ (non terminal) : $\delta(2, a) = 4$, $\delta(2, b) = 5$
- $3$ (terminal) : $\delta(3, a) = 5$, $\delta(3, b) = 4$
- $4$ (non terminal) : $\delta(4, a) = 2$, $\delta(4, b) = 5$
- $5$ (non terminal) : $\delta(5, a) = 5$, $\delta(5, b) = 5$

Appliquer l'algorithme de Moore pour minimiser cet automate.

**Rédaction modèle type /20** :

> **1. Initialisation de la partition**
> On sépare l'ensemble des états $Q = \{1, 2, 3, 4, 5\}$ en deux blocs selon leur nature (terminaux vs non terminaux) :
> - $P_0^{(0)} = \{1, 3\}$ (états finaux $F$)
> - $P_1^{(0)} = \{2, 4, 5\}$ (états non finaux $Q \setminus F$)
> On pose $\Pi_0 = \{\{1, 3\}, \{2, 4, 5\}\}$.
>
> **2. Raffinement - Étape 1 ($\Pi_1$)**
> Testons la séparabilité des états dans le bloc $\{1, 3\}$ pour les lettres $a$ et $b$ :
> - Pour l'état $1$ : $\delta(1, a) = 2 \in P_1^{(0)}$ et $\delta(1, b) = 3 \in P_0^{(0)}$.
> - Pour l'état $3$ : $\delta(3, a) = 5 \in P_1^{(0)}$ et $\delta(3, b) = 4 \in P_1^{(0)}$.
> Les transitions par $b$ mènent $1$ vers $P_0^{(0)}$ et $3$ vers $P_1^{(0)}$. On doit donc scinder $\{1, 3\}$.
> 
> Testons le bloc $\{2, 4, 5\}$ :
> - Pour $2$ : $\delta(2, a) = 4 \in P_1^{(0)}$, $\delta(2, b) = 5 \in P_1^{(0)}$.
> - Pour $4$ : $\delta(4, a) = 2 \in P_1^{(0)}$, $\delta(4, b) = 5 \in P_1^{(0)}$.
> - Pour $5$ : $\delta(5, a) = 5 \in P_1^{(0)}$, $\delta(5, b) = 5 \in P_1^{(0)}$.
> Les états $2, 4, 5$ se comportent de manière identique vis-à-vis de $\Pi_0$.
>
> On obtient la nouvelle partition :
> $\Pi_1 = \{\{1\}, \{3\}, \{2, 4, 5\}\}$.
>
> **3. Raffinement - Étape 2 ($\Pi_2$)**
> Analysons le bloc $\{2, 4, 5\}$ avec $\Pi_1$ :
> - Pour $2$ : $\delta(2, a) = 4 \in \{2, 4, 5\}$, $\delta(2, b) = 5 \in \{2, 4, 5\}$.
> - Pour $4$ : $\delta(4, a) = 2 \in \{2, 4, 5\}$, $\delta(4, b) = 5 \in \{2, 4, 5\}$.
> - Pour $5$ : $\delta(5, a) = 5 \in \{2, 4, 5\}$, $\delta(5, b) = 5 \in {2, 4, 5}$.
> Aucun état de $\{2, 4, 5\}$ ne se sépare. On a donc $\Pi_2 = \Pi_1$.
>
> **4. Conclusion**
> L'algorithme converge. L'automate minimal possède 3 états représentés par les classes :
> - $A_1 = \{1\}$ (initial et terminal)
> - $A_2 = \{3\}$ (terminal)
> - $A_3 = \{2, 4, 5\}$ (non terminal)

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Oubli des états inaccessibles** : Avant toute minimisation de Moore, il est impératif de supprimer les états non accessibles depuis l'état initial (par un simple parcours en profondeur ou largeur).
- **Confusion dans les indices de partitions** : Ne pas confondre les blocs d'une même partition et les étapes successives du raffinement.

---

## 📌 Question Type 3 : Réduction polynomiale pour prouver la NP-complétude d'un problème de décision

### Cadrage exact
> "Soit un nouveau problème de décision $P$. Prouver que $P$ est NP-complet en effectuant une réduction polynomiale à partir d'un problème de référence connu (par exemple 3-SAT, CLIQUE ou VERTEX-COVER)."

### 💡 Méthode canonique & Étapes de rédaction
1. **Appartenance à la classe NP** :
   - Exhiber un certificat (ou témoin) de taille polynomiale par rapport à la taille de l'entrée.
   - Décrire un algorithme déterministe en temps polynomial capable de vérifier si le certificat est valide.
2. **Choix du problème source ($P_{\text{source}}$)** :
   - Sélectionner un problème canonique NP-complet pertinent (souvent $\text{3-SAT}$).
3. **Construction de la réduction** :
   - Définir une fonction $f$ transformant une instance quelconque $I_{\text{source}}$ de $P_{\text{source}}$ en une instance $I_P = f(I_{\text{source}})$ de notre problème $P$.
   - Démontrer que $f$ est calculable en temps polynomial $O(n^k)$ par une machine de Turing déterministe.
4. **Équivalence (Correction de la réduction)** :
   - Prouver la double implication :
     - $\text{Instance source } I_{\text{source}} \text{ est positive} \implies \text{Instance induite } f(I_{\text{source}}) \text{ est positive}$.
     - $\text{Instance induite } f(I_{\text{source}}) \text{ est positive} \implies \text{Instance source } I_{\text{source}} \text{ est positive}$ (ou par contraposée).

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Sujet d'application** : Soit le problème *INDEPENDENT-SET* (Ensemble Indépendant) : étant donné un graphe $G=(V,E)$ et un entier $k$, existe-t-il un sous-ensemble de sommets $S \subseteq V$ de taille $|S| \ge k$ tel qu'aucune arête de $E$ n'ait ses deux extrémités dans $S$ ? Prouver que *INDEPENDENT-SET* est NP-complet par réduction à partir de *VERTEX-COVER* (Couverture par Sommets).

**Rédaction modèle type /20** :

> **1. Appartenance à NP**
> Étant donné un graphe $G=(V,E)$, un entier $k$ et un sous-ensemble de sommets $S \subseteq V$ en tant que certificat (de taille $|S| \le |V|$), on peut vérifier en temps polynomial $O(|V| + |E|)$ si $|S| \ge k$ et si, pour toute paire de sommets de $S$, l'arête correspondante n'appartient pas à $E$ (en parcourant la liste d'adjacence). Ainsi, *INDEPENDENT-SET* $\in \text{NP}$.
>
> **2. Réduction polynomiale**
> Soit une instance de *VERTEX-COVER* composée d'un graphe $G=(V,E)$ et d'un entier $k'$.
> Nous construisons une instance de *INDEPENDENT-SET* sur le même graphe $G=(V,E)$ avec l'entier $k = |V| - k'$.
> Cette transformation nécessite simplement de calculer la soustraction de deux entiers et de recopier le graphe, ce qui s'effectue en temps $O(|V|)$ (clairement polynomial).
>
> **3. Preuve d'équivalence**
> Démontrons que $G$ possède un couplage par sommets de taille au plus $k'$ si et seulement si $G$ possède un ensemble indépendant de taille au moins $|V| - k'$.
>
> *Lemme algébrique* : Un sous-ensemble $S \subseteq V$ est un ensemble indépendant si et seulement si son complémentaire $V \setminus S$ est une couverture par sommets.
> *(Preuve du lemme)* : $S$ est indépendant $\iff \forall (u,v) \in E, \{u,v\} \not\subseteq S \iff \forall (u,v) \in E, u \notin S \lor v \notin S \iff$ au moins une des extrémités de chaque arête appartient à $V \setminus S \iff V \setminus S$ est une couverture par sommets.
>
> - $(\implies)$ Supposons que $G$ contienne un *vertex-cover* $C$ tel que $|C| \le k'$. Alors par le lemme, $S = V \setminus C$ est un ensemble indépendant. Sa taille est :
>   $$|S| = |V| - |C| \ge |V| - k' = k$$
>   L'instance *INDEPENDENT-SET* est donc positive.
>
> - $(\impliedby)$ Réciproquement, supposons l'existence d'un ensemble indépendant $S$ avec $|S| \ge |V| - k'$. Posons $C = V \setminus S$. C'est une couverture par sommets dont la taille est :
>   $$|C| = |V| - |S| \le |V| - (|V| - k') = k'$$
>   L'instance *VERTEX-COVER* est donc positive.
>
> **Conclusion** : *INDEPENDENT-SET* est NP-difficile et appartient à NP, il est donc **NP-complet**.

### ⚠️ Les pièges majeurs soulignés dans le rapport de jury
- **Inverser le sens de la réduction** : Réduire le problème facile vers le problème dur ne prouve rien. La réduction doit aller de **$\text{PROBLÈME-CONNU-NP-COMPLET} \to \text{NOUVEAU-PROBLÈME}$**.
- **Oublier de prouver la polynomialité de la transformation** : Décrire l'algorithme de réduction ne suffit pas, il faut expliciter sa complexité en $O(n^c)$ pour valider le sigle "poly-time".