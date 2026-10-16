---
title: "Optimisation Concours : SVT BCPST"
description: "Méthodes canoniques, rédactions modèles type concours et pièges du barème pour les concours CPGE."
sidebar:
  badge:
    text: "Méthode Concours"
    variant: "caution"
---

## 🎯 Objectif du Module & Exigences des Jurys

En tant que concepteur de sujets et président de jury de concours (filière BCPST), je constate trop souvent des candidats qui possèdent les connaissances brutes mais perdent des points précieux par manque de rigueur méthodologique, par une mauvaise maîtrise des calculs bioénergétiques ou par une rédaction scientifique approximative.

Ce module a pour unique vocation de vous former aux **standards d'exigence des concours** (Agro-Véto, G2E). Une copie d'excellence en SVT repose sur trois piliers indissociables :
1. **L'exactitude des calculs et du formalisme** (bilans molaires, matrices, fréquences alléliques).
2. **La rigueur du vocabulaire scientifique** (pas de téléologie, distinction stricte entre génotype et phénotype, rigueur des homologies).
3. **La structuration de l'argumentation** (introduction ciblée, schémas fonctionnels légendés, conclusion de synthèse).

Les sections suivantes détaillent les trois questions récurrentes majeures en biochimie-métabolisme, biologie des organismes (phylogénie) et génétique des populations.

---

### 📌 Question Type 1 : Bilan stœchiométrique et rendement énergétique de la respiration vs fermentation (synthèse d'ATP)
#### 💡 Méthode canonique & Étapes de rédaction
* **Étape 1 : Poser les équations bilans équilibrées.** Ne jamais balancer une équation globale sans l'avoir décomposée si nécessaire. Pour la glycolyse, le cycle de Krebs et la chaîne respiratoire, bien identifier les accepteurs et donneurs d'électrons ($\text{NADH,H}^+$, $\text{FADH}_2$, $\text{O}_2$).
* **Étape 2 : Quantifier les moles d'ATP formées par mole de substrat consommé** (généralement le glucose, $\text{C}_6\text{H}_{12}\text{O}_6$). Distinguer la phosphorylation au niveau du substrat (glycolyse, cycle de Krebs) et la phosphorylation oxydative (chaîne respiratoire et ATP synthase).
* **Étape 3 : Calculer le rendement énergétique.** Utiliser la formule standard du rapport entre l'énergie chimique stockée sous forme d'ATP et l'enthalpie libre standard de réaction ($\Delta_{\text{r}}G'^\circ$ ou $\Delta G$).
  La formule générale s'écrit :
  $$\eta = \frac{n_{\text{ATP}} \times \Delta_{\text{r}}G'_{\text{hydrolyse ATP}}}{\Delta_{\text{r}}G'_{\text{oxydation glucose}}} \times 100$$
  avec $\Delta_{\text{r}}G'_{\text{hydrolyse ATP}} \approx -30.5 \text{ kJ/mol}$ et $\Delta_{\text{r}}G'_{\text{oxydation glucose}} \approx -2870 \text{ kJ/mol}$.

#### 📋 Exemple de sujet corrigé type Concours
* **Énoncé type :** « Établir le bilan énergétique comparé de l'oxydation complète d'une mole de glucose par voie respiratoire mitochondriale et par voie fermentaire (fermentation lactique) chez les Eucaryotes. Conclure sur l'efficacité bioénergétique. »
* **Rédaction type :**
  > « **1. Voie respiratoire (Aérobie) :**
  > La glycolyse cytoplasmique oxyde une mole de $\text{C}_6\text{H}_{12}\text{O}_6$ en deux moles de pyruvate, générant $2 \text{ ATP}$ et $2 \text{ (\text{NADH,H}^+)}$.
  > Le cycle de Krebs dans la matrice mitochondriale oxyde totalement ces pyruvates, produisant $2 \text{ GTP}$ (assimilables à l'ATP), $8 \text{ (\text{NADH,H}^+)}$ et $2 \text{ (\text{FADH}_2)}$.
  > La chaîne respiratoire mitochondriale couplée à l'ATP synthase permet la phosphorylation oxydative. En considérant les rapports classiques (environ $2.5 \text{ ATP}$ par $\text{NADH,H}^+$ et $1.5 \text{ ATP}$ par $\text{FADH}_2$), on obtient un total théorique maximal de l'ordre de $30$ à $32 \text{ moles d'ATP}$ par mole de glucose.
  > 
  > **2. Voie fermentaire (Anaérobie - Fermentation lactique) :**
  > En absence d'oxygène, seule la glycolyse subsiste. Le pyruvate est réduit en lactate pour régénérer le stock de $\text{NAD}^+$ indispensable à la poursuite de la glycolyse. Le bilan net est de seulement $2 \text{ moles d'ATP}$ par mole de glucose.
  > 
  > **3. Comparaison et rendement :**
  > Le rendement énergétique de la respiration s'établit à :
  > $$\eta_{\text{respiration}} = \frac{32 \times 30.5 \text{ kJ/mol}}{2870 \text{ kJ/mol}} \times 100 \approx 34 \text{ \%}$$
  > Celui de la fermentation atteint :
  > $$\eta_{\text{fermentation}} = \frac{2 \times 32 \text{ kJ/mol}}{2870 \text{ kJ/mol}} \times 100 \approx 2.1 \text{ \%}$$
  > La respiration est donc environ $15$ fois plus efficace, ce qui explique l'impératif métabolique de l'effet Pasteur chez les organismes facultatifs. »

#### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
* **Piège 1 :** Utiliser des rapports de stœchiométrie obsolètes ou fantaisistes (comme $3$ ATP par $\text{NADH}$ et $2$ par $\text{FADH}_2$ sans mentionner que ce sont des valeurs historiques maximales non strictes en raison des coûts de transport des métabolites à travers la membrane mitochondriale interne).
* **Piège 2 :** Oublier de préciser les unités ($\text{kJ/mol}$) et de définir clairement les états standard biologiques ($pH = 7$).
* **Piège 3 :** Glisser vers un raisonnement téléologique (« la cellule respire *afin de* produire de l'énergie »). Préférer le déterminisme causal (« l'oxydation complète permet le couplage chimio-osmotique... »).

---

### 📌 Question Type 2 : Reconstruction phylogénétique par le critère de parsimonie et matrice de caractères
#### 💡 Méthode canonique & Étapes de rédaction
* **Étape 1 : Polarisation des caractères.** Identifier l'état plésiomorphe ( ancestral) et l'état apomorphe (dérivé) grâce à un groupe externe (*outgroup*).
* **Étape 2 : Construction de la matrice taxons $\times$ caractères.** 0 pour l'état ancestral, 1 (ou plus) pour les états dérivés.
* **Étape 3 : Application du principe de parsimonie (Rage de Occam).** L'arbre phylogénétique retenu est celui qui minimise le nombre total de mutations (changements d'états de caractères) sur l'ensemble des branches.
* **Étape 4 : Dessin de l'arbre et positionnement des synapomorphies.** Chaque nœud représente un ancêtre commun hypothétique défini par le partage d'au moins une synapomorphie (caractère homologue dérivé partagé).

#### 📋 Exemple de sujet corrigé type Concours
* **Énoncé type :** « À partir de la matrice de présence/absence fournie pour $4$ taxons (A, B, C, D) et un groupe externe E portant l'état ancestral (0) pour tous les caractères (1 à 4), déterminez l'arbre le plus parsimonieux en explicitant le nombre de pas évolutifs. »
* **Rédaction type :**
  > « **1. Analyse de la polarisation :**
  > Le groupe externe E présente l'état $0$ pour les caractères $1, 2, 3 \text{ et } 4$. Cet état est donc considéré comme plésiomorphe.
  > 
  > **2. Évaluation des arbres candidats :**
  > Soit l'hypothèse topologique $T_1 = ((A,B),(C,D))$ et l'hypothèse $T_2 = ((A,C),(B,D))$.
  > Le décompte des changements d'états (pas évolutifs) pour le caractère $1$ (partagé par $A$ et $C$) montre que $T_2$ nécessite un seul événement d'apparition (synapomorphie entre $A$ et $C$), tandis que $T_1$ supposerait une convergence ou une réversion (homoplasie), augmentant le coût total de l'arbre de $1$ pas supplémentaire.
  > 
  > **3. Conclusion phylogénétique :**
  > L'arbre le plus parsimonieux est l'arbre minimisant le nombre total de mutations. Il retient les groupes monophylétiques (clades) étayés par des synapomorphies exclusives. Toute ressemblance fondée sur une homoplasie (caractère analogue) est écartée de la cladogenèse. »

#### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
* **Piège 1 :** Confondre **symplésiomorphie** (caractère ancestral partagé, non informatif pour établir des relations de parenté exclusives) et **synapomorphie** (caractère dérivé partagé, seul valide pour construire les clades).
* **Piège 2 :** Présenter des arbres phénétiques (basés sur une ressemblance globale sans distinction entre homologies et homoplasies) au lieu d'arbres cladistiques.
* **Piège 3 :** Oublier d'inclure le groupe externe dans l'analyse ou mal le positionner à la racine de l'arbre.

---

### 📌 Question Type 3 : Génétique des populations : équilibre d'Hardy-Weinberg, dérivé génétique et sélection
#### 💡 Méthode canonique & Étapes de rédaction
* **Étape 1 : Vérification des conditions d'Hardy-Weinberg.** Rappeler les hypothèses fondamentales du modèle : population infinie, panmixie (reproduction aléatoire), absence de sélection, absence de mutation, absence de flux migratoire.
* **Étape 2 : Application des lois de probabilité allélique et génotypique.** 
  Si la fréquence de l'allèle $A$ est $p$ et celle de l'allèle $a$ est $q$ (avec $p + q = 1$), les fréquences génotypiques à l'équilibre s'expriment par le binôme :
  $$(p + q)^2 = p^2 + 2pq + q^2 = 1$$
  où $p^2$ est la fréquence des homozygotes $AA$, $2pq$ celle des hétérozygotes $Aa$, et $q^2$ celle des homozygotes $aa$.
* **Étape 3 : Quantification des forces évolutives hors équilibre.**
  * *En cas de dérive génétique :* Mentionner la perte de diversité allélique inversement proportionnelle à la taille efficace de la population ($N_e$).
  * *En cas de sélection :* Introduire le coefficient de sélection $s$ et la valeur sélective (*fitness*, $W = 1 - s$).

#### 📋 Exemple de sujet corrigé type Concours
* **Énoncé type :** « Dans une population de grands mammifères, le phénotype récessif (albinisme, déterminé par l'allèle $a$) affecte $1$ individu sur $10000$. En supposant que la population est à l'équilibre d'Hardy-Weinberg, calculez la fréquence de l'allèle responsable de l'albinisme ainsi que la proportion d'individus hétérozygotes porteurs sains. »
* **Rédaction type :**
  > « **1. Identification des termes de l'équilibre :**
  > Soit $q$ la fréquence de l'allèle récessif $a$ et $p$ la fréquence de l'allèle dominant $A$.
  > La fréquence des individus phénotypiquement récessifs ($aa$) correspond à la fréquence génotypique $q^2$.
  > D'après l'énoncé :
  > $$q^2 = \frac{1}{10000} = 10^{-4}$$
  > 
  > **2. Calcul de la fréquence allélique $q$ :**
  > En extrayant la racine carrée :
  > $$q = \sqrt{10^{-4}} = 10^{-2} = 0.01$$
  > Par conséquent, la fréquence de l'allèle dominant $p$ est :
  > $$p = 1 - q = 1 - 0.01 = 0.99$$
  > 
  > **3. Calcul de la proportion des hétérozygotes :**
  > La proportion des individus hétérozygotes ($Aa$) est donnée par le terme $2pq$ du modèle d'Hardy-Weinberg :
  > $$2pq = 2 \times 0.99 \times 0.01 = 0.0198$$
  > 
  > **Conclusion :** Environ $1.98 \text{ \%}$ de la population est hétérozygote porteuse saine de l'allèle récessif muté. »

#### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
* **Piège 1 :** Calculer directement la fréquence allélique à partir de la fréquence phénotypique pour un allèle dominant (confusion majeure : la fréquence du phénotype dominant englobe $p^2 + 2pq$, il faut toujours commencer par calculer $q^2$ à partir des récessifs homozygotes).
* **Piège 2 :** Affirmer qu'une population est *toujours* à l'équilibre d'Hardy-Weinberg sous prétexte qu'on applique la formule. Le jury sanctionne l'oubli de la vérification critique des hypothèses (panmixie, absence de sélection).
* **Piège 3 :** Oublier les unités ou confondre fréquences alléliques (comprises entre $0$ et $1$) et effectifs bruts d'individus.