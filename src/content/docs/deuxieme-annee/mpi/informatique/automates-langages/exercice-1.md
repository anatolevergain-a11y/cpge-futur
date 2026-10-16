---
title: 'Exercice 1 : Automates finis'
description: 'Problème d entraînement type concours.'
---

# Problème Guidé : Analyse et manipulation d'automates finis

**Matière :** Informatique (Filière MPI)  
Chapitre: ** Automates, langages et logique  
**Thème :** Automates finis et opérations régulières

---

## Introduction de l'examinateur

Ce problème aborde la théorie des automates finis, un classique des concours de la filière MPI. L'objectif est d'évaluer la rigueur dans la manipulation formelle des automates, la maîtrise des algorithmes fondamentaux (déterminisation, minéralisation/complémentarité) et la capacité à raisonner sur des structures de transition. 

Il est attendu du candidat une rédaction soignée, utilisant un vocabulaire rigoureux et une notation mathématique irréprochable.

---

## Partie I : Définitions et formalisme

Soit $\Sigma = \{a, b\}$ un alphabet. On considère l'automate fini non déterministe avec $\varepsilon$-transitions ($\text{AFN-}\varepsilon$) $\mathcal{A} = (Q, \Sigma, \delta, q_0, F)$ défini par :
* $Q = \{1, 2, 3, 4\}$
* $q_0 = 1$
* $F = \{4\}$
* La fonction de transition $\delta$ est donnée par le tableau suivant :

| $Q$ | $a$ | $b$ | $\varepsilon$ |
| :---: | :---: | :---: | :---: |
| $1$ | $\{1, 2\}$ | $\emptyset$ | $\{3\}$ |
| $2$ | $\emptyset$ | $\{4\}$ | $\emptyset$ |
| $3$ | $\{2\}$ | $\{3\}$ | $\emptyset$ |
| $4$ | $\emptyset$ | $\emptyset$ | $\emptyset$ |

### Question 1
Donner la définition formelle de l'ensemble des $\varepsilon$-transitions et calculer $\varepsilon\text{-retour}(1)$, l'ensemble des états accessibles depuis l'état $1$ en empruntant uniquement des $\varepsilon$-transitions.

**Corrigé :**
Soit $\mathcal{A} = (Q, \Sigma, \delta, q_0, F)$ un $\text{AFN-}\varepsilon$. Pour tout sous-ensemble d'états $S \subseteq Q$, la fermeture par $\varepsilon$-transitions, notée $\varepsilon\text{-retour}(S)$, est le plus petit sous-ensemble de $Q$ tel que :
1. $S \subseteq \varepsilon\text{-retour}(S)$
2. Si $q \in \varepsilon\text{-retour}(S)$ et $q' \in \delta(q, \varepsilon)$, alors $q' \in \varepsilon\text{-retour}(S)$.

Pour l'état $1$ :
* L'état $1$ est inclus trivialement : $1 \in \varepsilon\text{-retour}(\{1\})$.
* D'après la table, $\delta(1, \varepsilon) = \{3\}$, donc $3 \in \varepsilon\text{-retour}(\{1\})$.
* Pour l'état $3$, $\delta(3, \varepsilon) = \emptyset$.

On obtient donc : 
$$\varepsilon\text{-retour}(\{1\}) = \{1, 3\}$$

---

## Partie II : Déterminisation de l'automate

### Question 2
Appliquer l'algorithme de construction par sous-ensembles (algorithme de Rabin-Scott) pour éliminer les $\varepsilon$-transitions et déterminiser l'automate $\mathcal{A}$. On notera les états de l'automate déterministe $\mathcal{D}$ sous forme d'ensembles d'états de $\mathcal{A}$.

**Corrigé :**
L'état initial de l'automate déterminisé $\mathcal{D}$ est $I_0 = \varepsilon\text{-retour}(\{q_0\}) = \varepsilon\text{-retour}(\{1\}) = \{1, 3\}$.

Construisons la table de transition de $\mathcal{D}$ par exploration successive :

1. **État $I_0 = \{1, 3\}$ :**
   * $\text{Trans}(I_0, a) = \varepsilon\text{-retour}\left(\bigcup_{q \in \{1, 3\}} \delta(q, a)\right) = \varepsilon\text{-retour}(\{1, 2\} \cup \{2\}) = \varepsilon\text{-retour}(\{1, 2\}) = \varepsilon\text{-retour}(\{1\}) \cup \varepsilon\text{-retour}(\{2\}) = \{1, 3\} \cup \{2\} = \{1, 2, 3\}$.
   * $\text{Trans}(I_0, b) = \varepsilon\text{-retour}\left(\bigcup_{q \in \{1, 3\}} \delta(q, b)\right) = \varepsilon\text{-retour}(\emptyset \cup \{3\}) = \varepsilon\text{-retour}(\{3\}) = \{3\}$.

2. **État $I_1 = \{1, 2, 3\}$ :**
   * $\text{Trans}(I_1, a) = \varepsilon\text{-retour}(\{1, 2\} \cup \{2\}) = \{1, 2, 3\}$.
   * $\text{Trans}(I_1, b) = \varepsilon\text{-retour}(\{4\} \cup \{3\}) = \varepsilon\text{-retour}(\{3, 4\}) = \varepsilon\text{-retour}(\{3\}) \cup \varepsilon\text{-retour}(\{4\}) = \{3, 4\}$ (notons que $4$ n'a pas de $\varepsilon$-transition).

3. **État $I_2 = \{3\}$ :**
   * $\text{Trans}(I_2, a) = \varepsilon\text{-retour}(\{2\}) = \{2\}$.
   * $\text{Trans}(I_2, b) = \varepsilon\text{-retour}(\{3\}) = \{3\}$.

4. **État $I_3 = \{2\}$ :**
   * $\text{Trans}(I_3, a) = \varepsilon\text{-retour}(\emptyset) = \emptyset$ (état puits).
   * $\text{Trans}(I_3, b) = \varepsilon\text{-retour}(\{4\}) = \{4\}$.

5. **État $I_4 = \{3, 4\}$ :**
   * $\text{Trans}(I_4, a) = \varepsilon\text{-retour}(\{2\}) = \{2\}$.
   * $\text{Trans}(I_4, b) = \varepsilon\text{-retour}(\{3\}) = \{3\}$.

6. **État $I_5 = \{4\}$ :**
   * $\text{Trans}(I_5, a) = \emptyset$, $\text{Trans}(I_5, b) = \emptyset$.

7. **État $\emptyset$ (puits) :**
   * $\text{Trans}(\emptyset, a) = \emptyset$, $\text{Trans}(\emptyset, b) = \emptyset$.

Les états acceptants de $\mathcal{D}$ sont tous les sous-ensembles $S$ tels que $S \cap F \neq \emptyset$ (avec $F = \{4\}$). Il s'agit de $\{3, 4\}$ et $\{4\}$.

---

## Partie III : Analyse critique et propriétés du langage

### Question 3
Caractériser le langage $L(\mathcal{A})$ reconnu par l'automate. 

**Corrigé :**
En observant l'automate initial ou déterminisé, traçons les chemins menant à l'état acceptant $4$ :
* Depuis l'état $1$, on peut aller en $3$ via $\varepsilon$, puis lire $a$ pour aller en $2$, puis $b$ pour aller en $4$. Cela donne le mot $ab$.
* En bouclant sur $3$ via $b$ ($b^*$), ou en passant par $1 \xrightarrow{a} \{1,2\} \dots$
Plus formellement, l'examen des transitions montre que le langage accepté est constitué des mots de la forme :
$$L(\mathcal{A}) = b^* a (ab)^+ \cup \dots$$
*Analyse critique :* La déterminisation d'un $\text{AFN-}\varepsilon$ à $n$ états peut théoriquement produire un automate à $2^n$ états. Ici, l'ensemble des parties de $Q$ est de cardinal $2^4 = 16$, mais l'algorithme par sous-ensembles n'a généré que $7$ états accessibles ($\{1,3\}, \{1,2,3\}, \{3\}, \{2\}, \{3,4\}, \{4\}, \emptyset$). C'est un phénomène classique : l'explosion combinatoire est rarement atteinte sur les cas pratiques issus de problèmes d'ingénierie.

---

## Bilan de l'examinateur

* **Points de vigilance :** Ne jamais oublier de calculer la fermeture par $\varepsilon$-transitions lors de l'initialisation et après *chaque* transition dans l'algorithme de Rabin-Scott.
* **Erreur fréquente :** Oublier d'ajouter l'état puits $\emptyset$ lorsqu'un symbole n'a aucune transition sortante dans un automate que l'on souhaite rendre complet.