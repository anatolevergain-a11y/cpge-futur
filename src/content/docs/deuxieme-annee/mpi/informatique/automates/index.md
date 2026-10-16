---
title: 'Cours : Automates et langages'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Automates et langages (CPGE MPI - Deuxième année)

---

## 1. Introduction et Langages Formels

### Définitions Fondamentales
*   **Alphabet ($\Sigma$) :** Ensemble fini et non vide de symboles (ou lettres).
*   **Mot sur $\Sigma$ :** Suite finie de symboles de $\Sigma$. Le mot vide est noté $\varepsilon$.
*   **Langage sur $\Sigma$ :** Ensemble (éventuellement infini) de mots sur $\Sigma$.
*   **Opérations algébriques sur les langages :**
    *   *Concatenation :* $L_1 L_2 = \{uv \mid u \in L_1, v \in L_2\}$.
    *   *Puissance :* $L^0 = \{\varepsilon\}$, $L^{n+1} = L^n L$.
    *   *Étoile de Kleene :* $L^* = \bigcup_{n \in \mathbb{N}} L^n$.

---

## 2. Automates Finis Déterministes (AFD)

### Définitions

Un **Automate Fini Déterministe (AFD)** est un quintuplé $\mathcal{A} = (Q, \Sigma, \delta, q_0, F)$ où :
*   $Q$ est un ensemble fini d'états.
*   $\Sigma$ est l'alphabet d'entrée.
*   $\delta : Q \times \Sigma \to Q$ est la fonction de transition (totale).
*   $q_0 \in Q$ est l'état initial.
*   $F \subseteq Q$ est l'ensemble des états acceptants (ou finaux).

### Extension de la fonction de transition
On étend $\delta$ en $\delta^* : Q \times \Sigma^* \to Q$ par récurrence sur la longueur du mot :
1. $\delta^*(q, \varepsilon) = q$
2. $\delta^*(q, wa) = \delta(\delta^*(q, w), a)$ pour tout $w \in \Sigma^*, a \in \Sigma$.

*   **Langage reconnu** par $\mathcal{A}$ : $L(\mathcal{A}) = \{w \in \Sigma^* \mid \delta^*(q_0, w) \in F\}$.

---

## 3. Automates Finis Non Déterministes (AFN et $\varepsilon$-AFN)

### Définitions
Un **Automate Fini Non Déterministe (AFN)** remplace la fonction de transition par une relation de transition $\delta : Q \times \Sigma \to \mathcal{P}(Q)$.
Dans un **$\varepsilon$-AFN**, les transitions spontanées (sans consommer de lettre) sont autorisées, via une fonction $\delta_\varepsilon : Q \times (\Sigma \cup \{\varepsilon\}) \to \mathcal{P}(Q)$.

### Théorème de determinisation (Construction de subset)
> **Théorème (Rabin-Scott) :** Pour tout langage reconnu par un AFN (ou $\varepsilon$-AFN), il existe un AFD qui reconnait exactement le même langage.

*   **Méthode de construction (Algorithme des sous-ensembles) :**
    Soit $\mathcal{A} = (Q, \Sigma, \delta, q_0, F)$ un AFN. On construit l'AFD $\mathcal{D} = (Q', \Sigma, \delta', q_0', F')$ :
    *   $Q' = \mathcal{P}(Q)$
    *   $q_0' = \text{Fermeture}_\varepsilon(\{q_0\})$ (ou $\{q_0\}$ pour un AFN sans $\varepsilon$)
    *   $\delta'(S, a) = \bigcup_{s \in S} \text{Fermeture}_\varepsilon(\delta(s, a))$
    *   $F' = \{S \in Q' \mid S \cap F \neq \emptyset\}$

---

## 4. Langages Rationnels et Expressions Régulières

### Définitions
L'ensemble des **langages rationnels** (ou réguliers) sur $\Sigma$ est le plus petit ensemble de langages contenant les langages finis et stable par union, concaténation et étoile de Kleene.

### Théorème de Kleene
> **Théorème :** Un langage est reconnu par un automate fini si et seulement s'il est rationnel.

#### Démonstration (Sens $\Leftarrow$ : Thompson)
Par induction structurelle sur l'expression régulière :
*   Base : $\emptyset$, $\{\varepsilon\}$, $\{a\}$ (pour $a \in \Sigma$) admettent des $\varepsilon$-AFN triviaux.
*   Induction : Utilisation de constructions standard pour l'union (branchement depuis un nouvel état initial), la concaténation (liaison des états finaux aux initiaux) et l'étoile.

#### Démonstration (Sens $\Rightarrow$ : Élimination des états / Arden)
Soit $\mathcal{A}$ un automate. On peut numéroter les états $\{1, \dots, n\}$.
Soit $R_{ij}^{(k)}$ l'expression régulière décrivant les mots menant de l'état $i$ à l'état $j$ en ne passant que par des états intermédiaires dans $\{1, \dots, k\}$.
*   *Lemme d'Arden :* Si $\varepsilon \notin L$, l'équation $X = AX \cup B$ a pour unique solution $X = A^*B$.

---

## 5. Minimisation des Automates Déterministes

### Relation d'équivalence de Nerode
Deux mots $u, v \in \Sigma^*$ sont **indistinguables** par rapport à un langage $L$ (noté $u \equiv_L v$) si :
$$\forall w \in \Sigma^*, \quad (uw \in L \iff vw \in L)$$

> **Théorème de Myhill-Nerode :** Un langage $L$ est reconnaissable par un automate si et seulement si l'équivalence $\equiv_L$ est d'indice fini (nombre de classes d'équivalence fini). De plus, l'index est égal au nombre d'états de l'AFD minimal reconnaissant $L$.

### Algorithme de Moore (Raffinement de partitions)
1.  **Initialisation :** Partition initiale $P_0 = \{F, Q \setminus F\}$ (séparation états acceptants / non acceptants).
2.  **Itération :** Pour une partition $P_k$, on teste si deux états $p, q$ d'un même bloc sont séparables. $p$ et $q$ sont séparables par $a \in \Sigma$ si $\delta(p, a)$ et $\delta(q, a)$ appartiennent à des blocs différents de $P_k$.
3.  **Arrêt :** Lorsque $P_{k+1} = P_k$. Les blocs de cette partition finale forment les états de l'automate minimal.

---

## 6. Propriétés de Clôture et Décidabilité

### Propriétés de Clôture des Langages Rationnels
Les langages rationnels sont fermés par :
*   Union ($\cup$) et Concaténation ($\cdot$) et Étoile ($^*$) (par définition).
*   **Complémentation ($\complement$) :** Si $L$ est reconnu par un AFD *complet*, on échange $F$ et $Q \setminus F$.
*   **Intersection ($\cap$) :** Par le produit cartésien des automates ($\mathcal{A}_1 \times \mathcal{A}_2$).
*   **Miroir ($Reverse$) :** En inversant les transitions et en échangeant initial/finaux (nécessite d'introduire un unique état initial).

### Le Lemme de Pompage (Arago-Bar-Hillel / Pumping Lemma)
> **Théorème :** Soit $L$ un langage rationnel. Il existe un entier $n \ge 1$ (la constante de pumping, typiquement le nombre d'états de l'automate) tel que pour tout mot $z \in L$ tel que $|z| \ge n$, il existe une décomposition $z = uvw$ vérifiant :
> 1. $|uv| \le n$
> 2. $|v| \ge 1$
> 3. $\forall k \in \mathbb{N}, \quad uv^kw \in L$

---

## 7. Pièges et Erreurs Fréquents (À Éviter en Concours)

1.  **Oubli de la complétude pour le complémentaire :** Pour commuter les états acceptants et non-acceptants afin d'obtenir le complémentaire d'un langage, **l'automate doit être déterministe et complet** (toutes les transitions doivent être définies).
2.  **Confusion AFN / AFD lors de la déterminisation :** Ne pas oublier de traiter l'ensemble vide $\emptyset$ comme un état à part entière (état puits) dans l'algorithme des sous-ensembles si la fonction de transition n'est pas totale.
3.  **Mauvaise application du Lemme de Pompage :** Le lemme de pompage est une **condition nécessaire mais non suffisante** de rationalité. On l'utilise exclusivement par l'absurde pour prouver qu'un langage **n'est pas** rationnel. Attention à bien quantifier universellement et existentiellement ($n$ est donné par le langage, on ne le choisit pas).
4.  **Étoile sur le mot vide :** $\varepsilon^* = \varepsilon$. Attention aux manipulations d'expressions régulières contenant $\varepsilon$.