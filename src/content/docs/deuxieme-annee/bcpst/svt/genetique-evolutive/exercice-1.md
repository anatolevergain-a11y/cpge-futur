---
title: 'Exercice 1 : Équilibre de Hardy-Weinberg'
description: 'Problème d entraînement type concours.'
---

# CONCOURS BCPST — ÉPREUVE DE SVT
## Génétique évolutive et modélisation statistique : Test de l'équilibre de Hardy-Weinberg

---

### ÉNONCÉ DU PROBLÈME

La modélisation mathématique en génétique des populations constitue un outil fondamental pour comprendre la dynamique évolutive des espèces. Le modèle de Hardy-Weinberg fournit une situation nulle (ou modèle nul) de référence, caractérisée par l'absence d'évolution des fréquences alléliques et génotypiques d'une génération à l'autre au sein d'une population idéale.

On s'intéresse ici à une population sauvage d'un petit mammifère, le campagnol roussâtre (*Myodes glareolus*), étudiée dans le cadre d'un suivi écologique à long terme dans une forêt tempérée. Un écologue souhaite analyser la structure génétique de cette population pour un locus autosomique $A$ possédant deux allèles codominants, notés $A_1$ et $A_2$.

L'échantillonnage réalisé sur $N = 1000$ individus adultes capturés, marqués puis relâchés, donne la répartition phénotypique et génotypique suivante :
* Génotype $A_1A_1$ : $360$ individus
* Génotype $A_1A_2$ : $480$ individus
* Génotype $A_2A_2$ : $160$ individus

L'objectif de ce problème est de tester statistiquement l'adéquation de ces données au modèle de Hardy-Weinberg, d'analyser les forces évolutives susceptibles d'expliquer les écarts constatés, et de discuter de la rigueur biologique des hypothèses sous-jacentes.

---

### QUESTIONS

1. **Rappels et formalisme du modèle**
   a. Énoncer les cinq hypothèses fondamentales requises pour qu'une population soit en équilibre de Hardy-Weinberg.
   b. En notant $p$ la fréquence de l'allèle $A_1$ et $q$ la fréquence de l'allèle $A_2$, exprimer les fréquences génotypiques attendues sous l'hypothèse de Hardy-Weinberg en fonction de $p$ et $q$.

2. **Estimation des paramètres et application numérique**
   a. Calculer les fréquences alléliques empiriques $p$ et $q$ observées dans l'échantillon de $1000$ individus. *Détailler le calcul.*
   b. À partir de ces estimations, calculer les effectifs théoriques (attendus) de chaque génotype si la population était à l'équilibre de Hardy-Weinberg.

3. **Test statistique d'adéquation ($\chi^2$)**
   a. Rappeler la formule statistique du test du $\chi^2$ d'ajustement.
   b. En utilisant les valeurs observées et théoriques, calculer la valeur de la statistique du $\chi^2$.
   c. En sachant que pour $1$ degré de liberté, le seuil critique de la table du $\chi^2$ au risque $\alpha = 5\%$ est de $3{,}84$, conclure quant à l'adéquation de la population à l'équilibre.

4. **Analyse critique et limites biologiques**
   a. Parmi les hypothèses du modèle listées à la question 1.a, laquelle ou lesquelles sont presque systématiquement violées dans les populations naturelles de mammifères ? Justifier brièvement.
   b. Le taux de consanguinité $F$ (coefficient de fixation de Wright) au sein de cette population est estimé à $+0{,}10$. Quel impact qualitatif et quantitatif cela a-t-il sur les fréquences des hétérozygotes par rapport aux prédictions de Hardy-Weinberg ?

---

### PISTES DE RÉFLEXION POUR L'ÉTUDIANT

* **Pour la question 2.a :** Pensez à relier le nombre d'allèles de chaque type dans l'échantillon au nombre total d'allèles (rappel : les individus sont diploïdes, donc un échantillon de $N$ individus représente $2N$ allèles par locus).
* **Pour la question 3.b :** Organisez vos calculs sous forme de tableau (Classes, Effectifs observés $O$, Effectifs théoriques $T$, $\frac{(O-T)^2}{T}$).
* **Pour la question 4.b :** Rappelez la formule de l'excès ou du déficit d'hétérozygotes en fonction de $F$ : $H_{\text{obs}} = 2pq(1-F)$.

---

### CORRIGÉ PAS À PAS

#### 1. Rappels et formalisme du modèle
* **1.a. Hypothèses du modèle de Hardy-Weinberg :**
  Pour qu'une population satisfasse l'équilibre de Hardy-Weinberg, les conditions suivantes doivent être réunies :
  1. **Effectifs infinis (ou très grands)** : Absence de dérive génétique (pas de fluctuations aléatoires d'échantillonnage).
  2. **Pangenèse aléatoire (Panmixie)** : Les croisements se font au hasard, sans choix du partenaire (absence d'assortiment assortatif ou de consanguinité).
  3. **Absence de sélection naturelle** : Tous les génotypes ont la même valeur sélective (fitness, $w = 1$).
  4. **Absence de flux géniques (migration)** : Pas d'apport ni de perte d'allèles par des individus extérieurs.
  5. **Absence de mutations** : Pas de conversion spontanée d'un allèle en un autre.

* **1.b. Fréquences génotypiques théoriques :**
  Soit $p = f(A_1)$ et $q = f(A_2)$ avec $p + q = 1$. Par application des lois de la probabilité de union/intersection des gamètes lors de la fécondation (tableau de Punnett) :
  * Fréquence du génotype $A_1A_1$ : $P(A_1A_1) = p^2$
  * Fréquence du génotype $A_1A_2$ : $P(A_1A_2) = 2pq$
  * Fréquence du génotype $A_2A_2$ : $P(A_2A_2) = q^2$

---

#### 2. Estimation des paramètres et application numérique
* **2.a. Calcul des fréquences alléliques $p$ et $q$ :**
  L'échantillon comporte $N = 1000$ individus, soit $2N = 2000$ allèles.
  Le nombre total d'allèles $A_1$ est :
  $$n(A_1) = 2 \times n(A_1A_1) + n(A_1A_2) = 2(360) + 480 = 720 + 480 = 1200\text{ allèles}$$
  La fréquence de l'allèle $A_1$ est donc :
  $$p = \frac{1200}{2000} = 0{,}6$$
  Par conséquent, la fréquence de l'allèle $A_2$ est :
  $$q = 1 - p = 1 - 0{,}6 = 0{,}4$$

* **2.b. Calcul des effectifs théoriques :**
  Pour $N = 1000$ :
  * Effectif théorique de $A_1A_1$ : $N \times p^2 = 1000 \times (0{,}6)^2 = 1000 \times 0{,}36 = \mathbf{360\text{ individus}}$
  * Effectif théorique de $A_1A_2$ : $N \times 2pq = 1000 \times 2 \times 0{,}6 \times 0{,}4 = 1000 \times 0{,}48 = \mathbf{480\text{ individus}}$
  * Effectif théorique de $A_2A_2$ : $N \times q^2 = 1000 \times (0{,}4)^2 = 1000 \times 0{,}16 = \mathbf{160\text{ individus}}$

*Remarque remarquable :* Les effectifs observés coïncident exactement avec les effectifs théoriques calculés ($360$, $480$, $160$).

---

#### 3. Test statistique d'adéquation ($\chi^2$)
* **3.a. Formule du $\chi^2$ :**
  $$\chi^2 = \sum_{\text{i}} \frac{(O_i - T_i)^2}{T_i}$$
  où $O_i$ représente l'effectif observé et $T_i$ l'effectif théorique pour chaque classe génotypique.

* **3.b. Calcul de la statistique :**
  Puisque $O_i = T_i$ pour chaque classe génotypique :
  $$\chi^2 = \frac{(360-360)^2}{360} + \frac{(480-480)^2}{480} + \frac{(160-160)^2}{160} = 0 + 0 + 0 = 0$$

* **3.c. Conclusion statistique :**
  La valeur calculée du $\chi^2$ est $0$. Cette valeur est strictement inférieure au seuil critique $3{,}84$ au risque $\alpha = 5\%$.
  On **accepte l'hypothèse nulle ($H_0$)** d'adéquation à l'équilibre de Hardy-Weinberg. La population ne présente pas d'écart statistiquement significatif par rapport au modèle pour ce locus dans cet échantillon.

---

#### 4. Analyse critique et limites biologiques
* **4.a. Violation des hypothèses dans la nature :**
  Dans les populations naturelles de mammifères comme le campagnol roussâtre :
  * L'hypothèse de **l'effectif infini** est toujours violée : les populations ont une taille finie, ce qui soumet le pool génique à la dérive génétique.
  * L'hypothèse de **panmixie** est souvent mise en défaut en raison de la structure spatiale de la population (effet de distance, dispersion restreinte menant à de la apparentement local / consanguinité).
  * La **sélection naturelle** s'exerce fréquemment, soit directement sur le locus étudié s'il a une valeur adaptative (métabolisme, immunité), soit indirectement par liaison génétique (effet de hitchhiking).

* **4.b. Impact d'un taux de consanguinité $F = +0{,}10$ :**
  Si la population présentait un coefficient de consanguinité $F = +0{,}10$, cela signifierait qu'il existe une probabilité accrue que les deux allèles d'un individu soient identiques par descente (issus d'un ancêtre commun récent).
  * **Conséquence quantitative :** La fréquence des hétérozygotes est modifiée selon la relation :
    $$H_{\text{obs}} = 2pq(1-F) = 2(0{,}6)(0{,}4)(1 - 0{,}10) = 0{,}48 \times 0{,}90 = 0{,}432$$
    Soit un effectif théorique d'hétérozygotes de $432$ individus au lieu de $480$.
  * **Conséquence qualitative :** La consanguinité engendre un **déficit d'hétérozygotes** et une augmentation symétrique des homozygotes ($A_1A_1$ et $A_2A_2$), sans pour autant modifier les fréquences alléliques globales $p$ et $q$ à court terme.