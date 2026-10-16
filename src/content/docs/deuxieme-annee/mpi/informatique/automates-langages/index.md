---
title: 'Cours : Automates, langages et logique'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Automates, langages et logique
Niveau: ** Deuxième année (CPGE MPI)  
**Matière :** Informatique  

---

## 1. Introduction aux langages et automates finis

### 1.1. Vocabulaire des langages formels
*   **Alphabet ($\Sigma$) :** Ensemble fini et non vide de symboles (ou lettres).
*   **Mot ($w$) :** Suite finie de symboles d'un alphabet $\Sigma$. La longueur d'un mot $w$, notée $|w|$, est le nombre de symboles qui le composent. Le mot vide est noté $\varepsilon$ (avec $|\varepsilon| = 0$).
*   **Langage ($L$) :** Sous-ensemble de l'ensemble de tous les mots possibles sur l'alphabet $\Sigma$, noté $\Sigma^*$. Ainsi, $L \subseteq \Sigma^*$.
*   **Opérations sur les langages :**
    *   *Concaténation :* $L_1 L_2 = \{w_1 w_2 \mid w_1 \in L_1 \land w_2 \in L_2\}$.
    *   *Étoile de Kleene :* $L^* = \bigcup_{n \in \mathbb{N}} L^n$ avec $L^0 = \{\varepsilon\}$ et $L^{n+1} = L^n L$.

### 1.2. Automates finis déterministes (AFD)
Un automate fini déterministe est un quintuplé $\mathcal{A} = (Q, \Sigma, \delta, q_0, F)$ où :
*   $Q$ est un ensemble fini d'états.
*   $\Sigma$ est l'alphabet d'entrée.
*   $\delta : Q \times \Sigma \to Q$ est la fonction de transition (totale).
*   $q_0 \in Q$ est l'état initial.
*   $F \subseteq Q$ est l'ensemble des états acceptants (ou finaux).

La fonction de transition s'étend naturellement aux mots par $\hat{\delta} : Q \ ainsi \Sigma^* \to Q$ :
$$ \hat{\delta}(q, \varepsilon) = q $$
$$ \hat{\delta}(q, a \cdot w) = \hat{\delta}(\delta(q, a), w) \quad \text{pour tout } a \in \Sigma, w \in \Sigma^* $$

Un mot $w \in \Sigma^*$ est **reconnu** (ou accepté) par $\mathcal{A}$ si $\hat{\delta}(q_0, w) \in F$. Le langage reconnu par $\mathcal{A}$, noté $L(\mathcal{A})$, est l'ensemble des mots reconnus par $\mathcal{A}$.

---

## 2. Automates non déterministes et théorème de Kleene

### 2.1. Automates finis non déterministes (AFN)
Un automate fini non déterministe est un quintuplé $\mathcal{A} = (Q, \Sigma, \delta, I, F)$ où :
*   $Q, \Sigma, F$ ont la même signification que pour un AFD.
*   $I \subseteq Q$ est l'ensemble des états initiaux.
*   $\delta : Q \times (\Sigma \cup \{\varepsilon\}) \to \mathcal{P}(Q)$ est la fonction de transition (permettant des transitions spontanées $\varepsilon$ et plusieurs choix possibles).

> **Théorème (Déterminisation par construction des sous-ensembles) :**
> Pour tout AFN $\mathcal{A}$, il existe un AFD $\mathcal{A}'$ tel que $L(\mathcal{A}') = L(\mathcal{A})$.  
> *Démonstration (Esquisse) :* On pose $Q' = \mathcal{P}(Q)$, $q_0' = \text{Epsilon-Fermeture}(I)$, $F' = \{S \in Q' \mid S \cap F \neq \emptyset\}$, et pour tout $S \in Q'$ et $a \in \Sigma$ :
> $$ \delta'(S, a) = \text{Epsilon-Fermeture}\left(\bigcup_{s \in S} \delta(s, a)\right) $$

### 2.2. Langages rationnels et Théorème de Kleene
*   **Langages rationnels (ou réguliers) :** Ce sont les langages définis inductivement par :
    1. L'ensemble vide $\emptyset$, les singletons $\{\varepsilon\}$ et $\{a\}$ pour $a \in \Sigma$.
    2. Formés par union, concaténation et étoile de Kleene à partir de langages rationnels.

> **Théorème de Kleene :**
> Un langage est reconnu par un automate fini si et seulement s'il est rationnel.

---

## 3. Minimisation des automates déterministes

Pour tout langage régulier, il existe un AFD unique à un isomorphisme près ayant un **nombre minimal d'états**.

### 3.1. Équivalence de Nerode
Soit $L \subseteq \Sigma^*$. On définit la relation de Myhill-Nerode $\sim_L$ sur $\Sigma^*$ par :
$$ u \sim_L v \iff \forall w \in \Sigma^*, \; (uw \in L \iff vw \in L) $$
*   $\sim_L$ est une congruence à droite.
*   **Théorème de Myhill-Nerode :** $L$ est reconnaissable par un automate fini si et seulement si $\sim_L$ est d'indice fini (possède un nombre fini de classes d'équivalence). De plus, l'indice de $\sim_L$ est le nombre minimal d'états de tout AFD reconnaissant $L$.

### 3.2. Algorithme de Moore (Raffinement de partitions)
L'algorithme de minimisation procède par calculs successifs de relations d'indiscernabilité à $k$ étapes :
1.  **Initialisation ($P_0$) :** Séparer $Q$ en deux blocs : $F$ et $Q \setminus F$.
2.  **Étape inductive ($P_{k+1}$) :** Deux états $p$ et $q$ d'un même bloc de $P_k$ sont séparés si pour un symbole $a \in \Sigma$, leurs successeurs $\delta(p, a)$ and $\delta(q, a)$ appartiennent à des blocs différents dans $P_k$.
3.  **Arrêt :** Lorsque $P_{k+1} = P_k$. Les blocs obtenus forment les états de l'automate minimal.

---

## 4. Logique du premier ordre et relations avec les automates

### 4.1. Logique monadique du second ordre (MSO) et $\text{FO}[<]$
Les mots sur un alphabet $\Sigma$ peuvent être vus comme des structures logiques finies : un domaine $0, 1, \dots, n-1$ représentant les positions des lettres, une relation d'ordre $<$, et des relations unaires $P_a(x)$ vraies si la lettre à la position $x$ est $a$.

*   **Logique du premier ordre sur les mots ($\text{FO}[<]$) :** Permet de quantifier sur les positions (variables $x, y$). Exprimable : "il existe une position $x$ telle que...".
*   **Théorème de Büchi-Elgot-Trakhtenbrot :** Un langage de mots est reconnaissable par un automate fini si et seulement s'il est définissable en MSO (Logique Monadique du Second Ordre).
*   Pour la logique du premier ordre $\text{FO}[<]$ seule, le théorème de Schützenberger caractérise les langages reconnaissables par des automates sans cycle (compteurs) : ce sont exactement les **langages sans étoiles** (*star-free languages*), reconnaissables par des monoïdes apériodiques.