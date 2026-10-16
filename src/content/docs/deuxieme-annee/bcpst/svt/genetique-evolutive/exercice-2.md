---
title: 'Exercice 2 : Spéciation'
description: 'Problème d entraînement type concours.'
---

# Biologie et Génétique Évolutives — Problème type BCPST (Agro-Veto / G2E)

## Spéciation sympatrique et flux génique : l'énigme des cichlidés

### Contexte scientifique
La spéciation, processus par lequel de nouvelles espèces apparaissent, est traditionnellement vue comme le résultat d'une divergence allopatrique (nécessitant une barrière géographique). Cependant, l'étude des poissons cichlidés des lacs de cratère africains (comme le lac Barombi Mbo au Cameroun) met en lumière des cas avérés de spéciation sympatrique, c'est-à-dire au sein d'une même aire géographique, sans isolement spatial initial. 

Ce problème propose d'étudier la dynamique des fréquences alléliques au sein d'une population panmictique soumise à une sélection divergente liée au micro-habitat (habitat benthique vs limnique) et au choix du partenaire sexuel (assortiment pré-zygotique).

---

### Énoncé

On s'intéresse à un locus autosomique $A$ impliqué dans l'adaptation à l'habitat (deux allèles $A_1$ et $A_2$, de fréquences respectives $p$ et $q = 1-p$). Un second locus $B$, indépendant du premier, code pour un phénotype comportemental de choix du partenaire (allèles $B_1$ et $B_2$). 

Les individus porteurs de l'allèle $A_1$ ont une meilleure fitness dans l'habitat benthique, tandis que les $A_2$ sont avantagés dans l'habitat limnique. La sélection est contre-sélectionnée chez les hétérozygotes $A_1A_2$.

On note $s$ le coefficient de contre-sélection contre les hétérozygotes dans leurs habitats respectifs, et $m$ le taux de migration (flux génique) entre les deux habitats à chaque génération.

---

### Questions

1. **Restitution de connaissances et analyse du modèle de Hardy-Weinberg :**
   Rappeler les hypothèses fondamentales du modèle de Hardy-Weinberg. Expliquer qualitativement en quoi l'existence d'un flux génique $m > 0$ entre deux sous-populations subissant des pressions de sélection divergentes s'oppose à la divergence génétique complète.

2. **Mise en équation de la variation allélique :**
   On considère la fréquence $p$ de l'allèle $A_1$ dans l'habitat benthique. Soit $p'$ la fréquence de cet allèle après une génération combinant migration et sélection. 
   En notant $p_b$ et $p_l$ les fréquences de $A_1$ dans l'habitat benthique et limnique avant migration, exprimer la récurrence du système en tenant compte d'un flux migratoire symétrique $m$ entre les deux habitats.

3. **Seuil critique de flux génique (Modèle de Mayr/Slatkin) :**
   En régime stationnaire, la différence de fréquence allélique entre les deux habitats $\Delta p = p_b - p_l$ est maintenue par équilibre entre la sélection (intensité $s$) et la migration (intensité $m$). 
   Montrer que si le taux de migration $m$ dépasse un seuil critique $m_c$ proportionnel à $s$, la différenciation s'effondre. Discuter l'ordre de grandeur de $m_c$ si $s = 0,1$.

4. **Analyse critique et limites du modèle :**
   Ce modèle mathématique simple repose sur des hypothèses idéalistes. Discuter au moins deux limites biologiques majeures de ce modèle pour rendre compte de la complexité de la spéciation sympatrique in natura.

---

### Pistes de réflexion

* **Question 1 :** Penser aux forces évolutives (dérive, mutation, sélection, migration) et à la panmixie. La migration agit comme un homogénéisateur des patrimoines génétiques.
* **Question 2 :** Décomposer l'effet de la migration (apport d'individus de l'autre habitat) puis l'effet de la viabilité différentielle (sélection) sur les génotypes $A_1A_1$, $A_1A_2$ et $A_2A_2$.
* **Question 3 :** Faire l'analogie avec l'équilibre mutation-sélection ou migration-sélection classique vu en cours. La force de la sélection doit surmonter le "bruit" des flux migratoires.
* **Question 4 :** S'interroger sur le linkage disequilibrium (déséquilibre de liaison) entre les gènes d'adaptation ($A$) et les gènes de choix de partenaire ($B$), ainsi que sur la réalité discontinue des micro-habitats.

---

### Corrigé pas à pas

#### 1. Modèle de Hardy-Weinberg et rôle du flux génique
* **Hypothèses de HW :** Population infinie (absence de dérive), pas de mutation, pas de sélection, pas de migration, panmixie (reproduction aléatoire).
* **Rôle de $m$ :** Le flux génique (migration) introduit des individus d'un habitat dans l'autre. Si un habitat limnique est colonisé par des migrants benthiques, les allèles $A_1$ (benthiques) s'y intègrent. Cela contrebalance la sélection divergente qui tend à éliminer $A_1$ du milieu limnique. Tant que $m$ est supérieur à la force de sélection, l'homogénéisation l'emporte, empêchant l'isolement reproducteur et donc la spéciation.

#### 2. Mise en équation (Migration-Sélection)
* Après migration, la nouvelle fréquence allélique dans l'habitat benthique devient :
  $$p_b^* = (1-m)p_b + m \, p_l$$
* Sous l'effet de la sélection viabilité (contre-sélection des hétérozygotes $A_1A_2$ avec un coût $s$), la fréquence $p$ est modifiée. En première approximation, la variation par la sélection est de type $- \frac{s}{2} p(1-p)$.
* L'équation de récurrence globale traduit l'antagonisme permanent entre la force centrifuge de la sélection (qui sépare les pools géniques) et la force centripète de la migration (qui les fusionne).

#### 3. Seuil critique de flux génique
* À l'équilibre, le gradient de fréquence entre les deux habitats $\Delta p = p_b - p_l$ est stable. 
* L'analyse mathématique de ce type de modèle (modèle de cline ou d'îlots) montre que la condition de maintien du polymorphisme divergent exige :
  $$m < m_c \approx \frac{s}{4}$$
* **Application numérique / Ordre de grandeur :** Si $s = 0,1$ (ce qui représente une sélection naturelle forte, de 10% de surmortalité pour les hétérozygotes mal adaptés), le taux de migration critique est $m_c \approx 0,025$ (soit $2,5\%$ d'individus migrants par génération). 
* *Analyse critique :* Un taux de migration de l'ordre de quelques pourcents par génération suffit à annihiler toute divergence génétique. Cela démontre la difficulté théorique de la spéciation sympatrique : sans barrière physique, les flux migratoires sont naturellement trop élevés, sauf si des mécanismes comportementaux drastiques (sélection assortative forte via le locus $B$) réduisent drastiquement le flux effectif de reproduction.

#### 4. Limites et esprit critique du modèle
* **Limites du modèle :**
  1. *L'hypothèse du locus unique :* L'adaptation à l'habitat benthique ou limnique est rarement monogénique. Elle implique un déterminisme polygénique complexe (architecture génétique quantitative) soumis à des épistasies.
  2. *Le couplage $A-B$ (Magie du trait ou "Magic trait") :* Pour que la spéciation sympatrique réussisse, le gène d'habitat ($A$) et le gène de choix sexuel ($B$) doivent être fortement liés (déséquilibre de liaison élevé) ou être une seule et même entité (le choix du partenaire se basant directement sur le phénotype écologique). Sans ce couplage, la recombinaison génétique lors de la méiose dissocie rapidement les adaptations écologiques des préférences sexuelles.
  3. *Réalisme écologique :* Les habitats ne sont pas binaires avec une frontière étanche, mais forment souvent un gradient continu où les phénotypes intermédiaires peuvent trouver une niche écologique transitoire.