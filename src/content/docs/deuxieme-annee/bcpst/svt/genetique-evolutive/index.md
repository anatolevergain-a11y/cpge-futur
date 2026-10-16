---
title: 'Cours : Génétique évolutive'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Génétique évolutive — Fiche de cours (CPGE BCPST 2ème année)

La génétique évolutive étudie la dynamique des allèles et des génotypes au sein des populations au cours des générations. Elle fait le pont entre la génétique des populations (micro-évolution) et la spéciation (macro-évolution).

---

## I. Introduction et concepts fondamentaux

### Définitions
*   **Population :** Groupe d'individus de la même espèce, sympatriques, interféconds et partageant un même pool génétique.
*   **Pool génétique :** Ensemble de tous les allèles présents pour l'ensemble des gènes au sein d'une population à une génération donnée.
*   **Fréquence allèlique (ou génique) :** Soit un locus possédant deux allèles $A$ et $a$. Notons $p$ la fréquence de l'allèle $A$ et $q$ la fréquence de l'allèle $a$. On a :
    $$p + q = 1$$
*   **Fréquence génotypique :** Soit $D$, $H$ et $R$ les fréquences respectives des génotypes $AA$, $Aa$ et $aa$. On a :
    $$D + H + R = 1$$
    Les fréquences alléliques s'expriment en fonction des fréquences génotypiques :
    $$p = D + \frac{H}{2} \quad \text{et} \quad q = R + \frac{H}{2}$$

---

## II. Le modèle de Hardy-Weinberg (Neutalisme et panmixie)

### Théorème (Loi de Hardy-Weinberg)
Dans une population infiniment grande, panmictique (reproduction aléatoire), non soumise à la sélection, à la mutation, ni aux flux migratoires, les fréquences alléliques et génotypiques restent constantes d'une génération à l'autre (équilibre). De plus, les fréquences génotypiques s'expriment simplement en fonction des fréquences alléliques :

*   Fréquence de $AA$ : $D = p^2$
*   Fréquence de $Aa$ : $H = 2pq$
*   Fréquence de $aa$ : $R = q^2$

### Démonstration (Échiquier de croisement)
Supposons un pool de gamètes où la proportion d'allèles $A$ est $p$ et $a$ est $q$. La formation des zygotes par union aléatoire de ces gamètes donne :
*   $P(AA) = p \times p = p^2$
*   $P(Aa) = (p \times q) + (q \times p) = 2pq$
*   $P(aa) = q \times q = q^2$
À la génération suivante, les nouvelles fréquences alléliques $p'$ et $q'$ sont :
$$p' = p^2 + \frac{2pq}{2} = p^2 + pq = p(p+q) = p$$
L'équilibre est atteint dès la première génération de panmixie et maintenu indéfiniment (inertie de Hardy-Weinberg).

> **Piège classique :** L'équilibre de Hardy-Weinberg est un modèle nul. Constater qu'une population n'est *pas* à l'équilibre prouve qu'au moins une force évolutive s'exerce (sélection, dérive, etc.). Ne jamais affirmer qu'une population est à l'équilibre sans avoir testé statistiquement (test du $\chi^2$).

---

## III. Les forces évolutives modifiant les fréquences alléliques

### 1. La Mutation
*   **Définition :** Modification aléatoire de la séquence nucléotidique de l'ADN.
*   **Impact :** Source ultime de la nouveauté génétique, mais taux de mutation $(\mu)$ généralement très faible ($10^{-8}$ à $10^{-5}$ par génération). Son effet direct sur les fréquences alléliques à court terme est négligeable, sauf couplé à la sélection.

### 2. La Sélection naturelle
*   **Définition :** Variation différentielle du succès reproductif (fitness) des individus en fonction de leurs phénotypes.
*   **Valeur sélective (Fitness, $W$) :** Capacité d'un génotype à survivre et à se reproduire. On définit souvent la fitness absolue $w_i$, ou la fitness relative $W_i = \frac{w_i}{w_{max}}$.
*   **Coefficient de sélection ($s$) :** Mesure de la contre-sélection d'un génotype : $W = 1 - s$.
*   **Équation de récurrence (cas général) :** La fréquence de l'allèle $A$ à la génération $t+1$ s'exprime par :
    $$p_{t+1} = \frac{p_t^2 W_{AA} + p_t q_t W_{Aa}}{\bar{W}}$$
    où $\bar{W} = p^2 W_{AA} + 2pq W_{Aa} + q^2 W_{aa}$ est la fitness moyenne de la population.

> **Théorème fondamental de la sélection naturelle (Fisher) :** La vitesse de change de la fitness moyenne d'une population est proportionnelle à la variance additive de la fitness au sein de cette population.

### 3. La Dérive génétique
*   **Définition :** Variation aléatoire des fréquences alléliques au cours des générations, due à la fluctuation d'échantillonnage lors de la transmission des gamètes (effet stochastique).
*   **Taille efficace de population ($N_e$) :** Nombre d'individus "idéaux" (au sens de Wright-Fisher) qui subiraient la même intensité de dérive que la population réelle.
*   **Conséquences :**
    *   Diminution de la diversité génétique (perte d'allèles par fixation ou élimination).
    *   Augmentation de l'homozygotie.
    *   Effet plus marqué dans les petites populations (la variance de la fréquence allélique est proportionnelle à $\frac{pq}{2N_e}$).

#### Cas particuliers :
*   **Effet fondatuer :** Création d'une nouvelle population à partir d'un très petit nombre d'individus fondateurs (appauvrissement allélique initial).
*   **Goulot d'étranglement :** Réduction drastique et temporaire de la taille d'une population (ex: catastrophe naturelle), menant à une forte dérive.

### 4. Les Flux migratoires (Migration / Gene flow)
*   **Définition :** Échanges d'individus ou de gamètes entre populations distinctes.
*   **Impact :** Tendance à homogénéiser les fréquences alléliques entre populations et à contrer la différenciation due à la dérive ou à la sélection locale.

---

## IV. Génétique quantitative et polygénique

La plupart des caractères phénotypiques continus (taille, poids, rendement) sont contrôlés par de nombreux locus (caractères polygéniques) et influencés par l'environnement.

### Équation phénotypique de base :
$$P = G + E + (G \times E)$$
Où $P$ est la valeur phénotypique, $G$ la valeur génotypique et $E$ l'effet environnemental.

### Décomposition de la variance :
La variance phénotypique totale $V_P$ se décompose ainsi :
$$V_P = V_G + V_E$$
La variance génétique $V_G$ se subdivise elle-même en :
$$V_G = V_A + V_D + V_I$$
*   $V_A$ : **Variance additive** (effet cumulatif des allèles, transmissible aux descendants).
*   $V_D$ : Variance de dominances (interactions alléliques au même locus).
*   $V_I$ : Variance d'épistasie (interactions entre locus).

### Héritabilité au sens restreint ($h^2$) :
C'est le rapport de la variance additive sur la variance phénotypique totale :
$$h^2 = \frac{V_A}{V_P}$$
> **Méthode :** L'héritabilité est cruciale en amélioration des plantes et des animaux (sélection artificielle). Elle prédit la réponse à la sélection ($R$) via l'équation des éleveurs :
> $$R = h^2 \times S$$
> ($S$ étant le différentiel de sélection : différence entre la moyenne des parents sélectionnés et la moyenne de toute la population).

---

## V. Spéciation et macro-évolution

*   **Espèce (Concept biologique de Mayr) :** Groupe de populations naturelles interfécondes, réellement ou potentiellement, et reproductivement isolées d'autres groupes du même type.
*   **Barrières à l'isolement reproducteur :**
    *   *Prézzygotes* : Isolement géographique, écologique, éthologique (comportemental), temporel, mécanique ou gamétique.
    *   *Postzygotes* : Inviabilité des hybrides, stérilité des hybrides (ex : le mulet), déchéance des hybrides (F2).
*   **Modes de spéciation :**
    *   **Allopatrique :** Isolement géographique initial suivi d'une divergence par dérive et/ou sélection.
    *   **Sympatrique :** Spéciation sans isolement géographique (ex : polyploïdisation instantanée chez les végétaux).
    *   **Péripatrique / Parapatrique :** Situations intermédiaires (effet périphérie de l'aire de répartition).

---

## VI. Méthodes et Savoir-faire en colles

1.  **Tester l'équilibre de Hardy-Weinberg :**
    *   Calculer les fréquences alléliques $p$ et $q$ à partir de l'effectif total.
    *   Calculer les effectifs théoriques attendus sous Hardy-Weinberg ($N \times p^2$, $N \times 2pq$, $N \times q^2$).
    *   Appliquer le test du $\chi^2$ à $k-1-df$ degrés de liberté (attention au nombre de degrés de liberté : pour 2 allèles, 3 génotypes, 1 paramètre estimé $p$, on a $ddl = 3 - 1 - 1 = 1$).
2.  **Calculer une réponse à la sélection :** Identifier $V_A$, $V_P$, calculer $h^2$, puis appliquer l'équation des éleveurs.
3.  **Analyser des arbres phylogénétiques** (méthodes cladistiques, homologies, caractères dérivés partagés ou synapomorphies) pour retracer l'histoire évolutive.