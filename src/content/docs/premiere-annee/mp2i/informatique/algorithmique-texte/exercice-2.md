---
title: 'Exercice 2 : Automates de recherche et expressions régulières'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le traitement de texte et l'analyse de flux de données reposent fondamentalement sur la théorie des automates et des expressions régulières. Dans ce problème, on s'intéresse à la construction d'automates finis déterministes (AFD) à partir d'expressions régulières simplifiées sur un alphabet fini $\Sigma$. 

On rappelle qu'une expression régulière sur $\Sigma$ décrit un langage formel. On se restreint ici aux opérateurs suivants :
1. Le symbole de base $\sigma \in \Sigma$ (reconnaissant le mot de longueur 1 constitué de $\sigma$).
2. La concaténation, notée par juxtaposition ($E_1 E_2$).
3. L'alternative (ou union), notée $+$ ($E_1 + E_2$).
4. L'étoile de Kleene, notée $*$ ($E^*$).

L'objectif du problème est d'étudier la construction de Thompson pour transformer une expression régulière en automate fini non déterministe avec $\varepsilon$-transitions (AFNE), puis de formaliser la table de transitions pour l'évaluation algorithmique en temps linéaire par rapport à la longueur du texte.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Définitions préliminaires :** Rappeler formellement ce qu'est un AFNE (Automate Fini Non Déterministe avec $\varepsilon$-transitions) sur un alphabet $\Sigma$. Préciser la notion de $\varepsilon$-clôture d'un état.
2. **Construction de Thompson (Base) :** Donner schématiquement et formellement les briques de base de la construction de Thompson pour :
   - Un symbole $\sigma \in \Sigma$.
   - La concaténation de deux expressions de langages respectifs $L_1$ et $L_2$.
3. **Implantation des structures de données :** Proposer une représentation en langage OCaml ou Python des structures de données permettant de stocker un automate (états, transitions, état initial, états acceptants).
4. **Algorithme de simulation :** Écrire une fonction en OCaml ou Python qui, étant donné un AFD et un mot $w \in \Sigma^*$, détermine si $w$ est accepté par l'automate en temps $\mathcal{O}(|w|)$.
5. **Analyse critique et complexité :** Lors de la conversion d'un AFNE en AFD par la construction des sous-ensembles (déterminisation), quelle est la complexité en pire cas sur la taille de l'automate obtenu par rapport au nombre d'états $n$ de l'AFNE ? Discuter l'impact de ce phénomène sur l'évaluation des expressions régulières en pratique (e.g., politique de moteurs de recherche textuelle).

---

### 💡 Pistes & Indications méthodologiques

- Pour la question 1, veillez à bien inclure la fonction de transition sous forme relationnelle $\delta : Q \times (\Sigma \cup \{\varepsilon\}) \to \mathcal{P}(Q)$.
- Pour la construction de Thompson (Question 2), chaque sous-automate construit doit posséder **un unique** état initial et **un unique** état acceptant, ce qui simplifie grandement l'emboîtement des opérateurs.
- Pour la simulation de l'AFD (Question 4), l'absence de $\varepsilon$-transitions dans un AFD garantit un parcours déterministe direct sans besoin de maintenir un ensemble d'états actifs à chaque étape.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Définitions préliminaires
Un Automate Fini Non Déterministe avec $\varepsilon$-transitions ($\varepsilon$-AFN) est un quintuplet $\mathcal{A} = (Q, \Sigma, \delta, I, F)$ où :
- $Q$ est un ensemble fini d'états.
- $\Sigma$ est l'alphabet d'entrée.
- $\delta : Q \times (\Sigma \cup \{\varepsilon\}) \to \mathcal{P}(Q)$ est la fonction de transition.
- $I \subseteq Q$ est l'ensemble des états initiaux.
- $F \subseteq Q$ est l'ensemble des états acceptants (finaux).

Pour tout sous-ensemble d'états $S \subseteq Q$, la **$\varepsilon$-clôture** (notée $\text{Cl}_\varepsilon(S)$) est le plus petit ensemble d'états contenant $S$ et fermé par la relation de transition $\varepsilon$ :
$$\text{Cl}_\varepsilon(S) = S \cup \left\{ q' \in Q \mid \exists q \in S, q' \in \delta(q, \varepsilon) \right\} \text{ (itéré jusqu'au point fixe)}$$

#### 2. Construction de Thompson (Briques élémentaires)
La méthode de Thompson associe à toute expression régulière un $\varepsilon$-AFN ayant **exactement un** état initial $s_i$ et **un unique** état acceptant $s_f$.
- **Pour un symbole $\sigma \in \Sigma$ :**
  On crée deux états $\{s_i, s_f\}$ avec une unique transition $\delta(s_i, \sigma) = \{s_f\}$.
- **Pour la concaténation $E_1 E_2$ :**
  Soient $\mathcal{A}_1$ (états $s_{i1}, s_{f1}$) et $\mathcal{A}_2$ (états $s_{i2}, s_{f2}$). On fusionne l'état acceptant de $\mathcal{A}_1$ avec l'état initial de $\mathcal{A}_2$ (ou on ajoute une $\varepsilon$-transition de $s_{f1}$ vers $s_{i2}$). L'état initial devient $s_{i1}$ et l'état final $s_{f2}$.

#### 3. Représentation des données en OCaml
```ocaml
type state = int

(* Une transition est soit étiquetée par un caractère, soit par None (epsilon) *)
type transition = 
  | Transition of state * char * state
  | EpsilonTransition of state * state

type afne = {
  states : state list;
  initial : state;
  accepting : state list;
  transitions : transition list;
}
```

#### 4. Algorithme de simulation d'un AFD
Dans le cas d'un Automate Fini Déterministe (AFD), la fonction de transition est une application partielle $\delta : Q \times \Sigma \to Q$. La simulation pour un mot $w$ s'écrit de manière très efficace :

```ocaml
(* Supposons un AFD représenté par une table de hachage ou une fonction de transition *)
let run_afd (delta : state -> char -> state option) (initial : state) (accepting : state list) (word : string) : bool =
  let rec aux current_state idx =
    if idx = String.length word then
      List.mem current_state accepting
    else
      match delta current_state word.[idx] with
      | None -> false
      | Some next_state -> aux next_state (idx + 1)
  in
  aux initial 0
```
La complexité temporelle de cette fonction est clairement $\mathcal{O}(|w\|)$ et la complexité spatiale est $\mathcal{O}(1)$ (hors stockage de l'automate).

#### 5. Analyse critique et complexité
Lors de la conversion d'un $\varepsilon$-AFN à $n$ états en un AFD par l'algorithme de construction des sous-ensembles (Powerset Construction), l'AFD résultant peut posséder jusqu'à $2^n$ états dans le pire des cas. 

* **Impact pratique :** Cette explosion exponentielle (souvent appelée "explosion des états") rend la conversion naïve en AFD prohibitive pour des expressions régulières complexes ou imbriquées. 
* **Alternatives industrielles :** Des moteurs de recherche textuelle modernes (comme ceux utilisés dans les bibliothèques d'expressions régulières de type PCRE ou RE2) évitent de construire l'AFD complet en mémoire. Ils simulent directement l'AFNE en maintenant l'ensemble des états actifs (via les $\varepsilon$-clôtures) ou construisent l'AFD de manière paresseuse (*lazy DFA construction*), c'est-à-dire en ne calculant que les sous-états effectivement atteints lors de la lecture du texte.