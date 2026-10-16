---
title: 'Exercice 2 : Normalisation et transactions'
description: 'Problème d entraînement type concours.'
---

# Problème GUIDÉ : Normalisation et Transactions dans les Bases de Données Relationnelles

**Matière :** Informatique - Filière MPI  
Chapitre: ** Bases de Données Relationnelles  
**Thème :** Formes normales, dépendances fonctionnelles, propriétés ACID et niveaux d'isolation des transactions.

---

## Introduction et Objectifs

Ce problème aborde deux piliers fondamentaux des bases de données relationnelles :
1. **La Théorie de la Normalisation** : garantir la qualité du schéma relationnel par l'analyse des dépendances fonctionnelles afin d'éviter la redondance et les anomalies de mise à jour.
2. **Le Contrôle de Concurrence et les Transactions** : assurer l'intégrité des données face à des exécutions simultanées en manipulant les propriétés ACID et les anomalies de concurrence.

---

## Partie I : Normalisation et Dépendances Fonctionnelles

On considère une relation globale $\mathcal{R}$ dont l'ensemble des attributs est :
$$\mathcal{U} = \{ \text{numSecu}, \text{nomEmploye}, \text{codeDept}, \text{nomDept}, \text{codeProjet}, \text{nomProjet}, \text{nbHeures} \}$$

On dispose de l'ensemble $\mathcal{F}$ des dépendances fonctionnelles suivantes :
1. $\text{numSecu} \to \{ \text{nomEmploye}, \text{codeDept} \}$
2. $\text{codeDept} \to \{ \text{nomDept} \}$
3. $\text{codeProjet} \to \{ \text{nomProjet}\}$
4. $\{ \text{numSecu}, \text{codeProjet} \} \to \{ \text{nbHeures} \}$

---

### Question 1 : Fermeture d'un ensemble d'attributs

**Énoncé :**  
Déterminer la fermeture de l'attribut $\text{numSecu}$ sous l'ensemble des dépendances fonctionnelles $\mathcal{F}$, notée $(\text{numSecu})^+_{\mathcal{F}}$.  
En déduire si $\text{numSecu}$ peut constituer à lui seul une clé candidate pour la relation $\mathcal{R}$.

**Correction guidée :**  
*Rappel de cours :* La fermeture d'un ensemble d'attributs $X$ (noté $X^+$) sous un ensemble de DF $\mathcal{F}$ est l'ensemble maximal d'attributs que l'on peut déterminer à partir de $X$ en appliquant les règles d'Inférence de Armstrong.

*Étape par étape :*
1. Initialisation : $X^{(0)} = \{ \text{numSecu} \}$
2. Application de (1) : $\text{numSecu} \to \{ \text{nomEmploye}, \text{codeDept} \}$.  
   On obtient $X^{(1)} = \{ \text{numSecu}, \text{nomEmploye}, \text{codeDept} \}$
3. Application de (2) : $\text{codeDept} \to \{ \text{nomDept} \}$.  
   Puisque $\text{codeDept} \in X^{(1)}$, on ajoute $\text{nomDept}$.  
   On obtient $X^{(2)} = \{ \text{numSecu}, \text{nomEmploye}, \text{codeDept}, \text{nomDept} \}$
4. Aucune autre règle ne s'applique car les autres DF nécessitent des attributs absents de $X^{(2)}$ (notamment $\text{codeProjet}$).

Par conséquent, $(\text{numSecu})^+_{\mathcal{F}} = \{ \text{numSecu}, \text{nomEmploye}, \text{codeDept}, \text{nomDept} \}$.  
Puisque cette fermeture ne contient pas l'ensemble de tous les attributs $\mathcal{U}$, **$\text{numSecu}$ n'est pas une clé candidate** pour $\mathcal{R}$ (il manque l'information sur les projets).

---

### Question 2 : Recherche de clé primaire et Formes Normales

**Énoncé :**  
1. Déterminer la clé primaire (ou clé candidate minimale) de la relation $\mathcal{R}$.
2. La relation $\mathcal{R}$ est-elle en Deuxième Forme Normale (2NF) ? En Troisième Forme Normale (3NF) ? Justifier.

**Correction guidée :**  
1. **Recherche de la clé :**  
   Analysons les attributs qui n'apparaissent jamais à droite d'une DF dans $\mathcal{F}$ : 
   - $\text{numSecu}$ (apparaît à gauche de 1, mais pas à droite)
   - $\text{codeProjet}$ (apparaît à gauche de 3 et 4, mais pas à droite)
   
   Testons la fermeture de la combinaison $\{ \text{numSecu}, \text{codeProjet} \}$ :
   - $\{\text{numSecu}, \text{codeProjet}\}^+_{\mathcal{F}}$ contient :
     - $\text{numSecu}, \text{nomEmploye}, \text{codeDept}, \text{nomDept}$ (via DF 1 et 2)
     - $\text{codeProjet}, \text{nomProjet}$ (via DF 3)
     - $\text{nbHeures}$ (via DF 4)
   
   La fermeture est égale à $\mathcal{U}$. La clé candidate unique (minimale) est donc $K = \{ \text{numSecu}, \text{codeProjet} \}$.

2. **Formes normales :**  
   - *1NF :* Satisfaite (les attributs sont atomiques).
   - *2NF :* Une relation est en 2NF si elle est en 1NF et si tout attribut n'appartenant pas à une clé candidate dépend de façon *complète* (et non partielle) de la clé.  
     Or, on a la DF 1 : $\text{numSecu} \to \{ \text{nomEmploye}, \text{codeDept} \}$.  
     Ici, $\{\text{nomEmploye}, \text{codeDept}\}$ dépend d'une *partie* de la clé candidate $K$ ($\text{numSecu}$).  
     **$\mathcal{R}$ n'est donc pas en 2NF.**

---

### Question 3 : Décomposition en Forme Normale de Boyce-Codd (FNBC)

**Énoncé :**  
Proposer une décomposition sans perte de information et en dépendances de $\mathcal{R}$ sous forme de relations en FNBC.

**Correction guidée :**  
Pour chaque DF violant la FNBC (où le déterminant n'est pas une surclé), on sépare la relation :
- Violation 1 : $\text{codeDept} \to \{ \text{nomDept} \}$ ($\text{codeDept}$ n'est pas une clé).  
  $\implies$ On crée $\mathcal{R}_1(\underline{\text{codeDept}}, \text{nomDept})$.
- Violation 2 : $\text{codeProjet} \to \{ \text{nomProjet} \}$ ($\text{codeProjet}$ n'est pas une clé).  
  $\implies$ On crée $\mathcal{R}_2(\underline{\text{codeProjet}}, \text{nomProjet})$.
- Violation 3 : $\text{numSecu} \to \{ \text{nomEmploye}, \text{codeDept} \}$ ($\text{numSecu}$ n'est pas une clé).  
  $\implies$ On crée $\mathcal{R}_3(\underline{\text{numSecu}}, \text{nomEmploye}, \text{codeDept})$.

Il reste la relation d'association avec la clé complète :
- $\mathcal{R}_4(\underline{\text{numSecu}, \text{codeProjet}}, \text{nbHeures})$.

Toutes ces relations respectent la FNBC car, pour chacune d'elles, le déterminant de chaque DF non triviale est une superclé.

---

## Partie II : Transactions et Concurrence

On s'intéresse maintenant au système de gestion de bases de données gérant ces relations. Deux transactions $T_1$ et $T_2$ s'exécutent de manière concurrente.

Soit les opérations suivantes :
- $R_i(x)$ : Lecture de l'élément $x$ par la transaction $T_i$
- $W_i(x)$ : Écriture de l'élément $x$ par la transaction $T_i$
- $C_i$ : Validation (Commit) de la transaction $T_i$

### Question 4 : Analyse d'un échéancier (Schedule)

**Énoncé :**  
Soit l'échéancier $S$ suivant :
$$S = R_1(A) \;;\; R_2(A) \;;\; W_1(A) \;;\; R_1(B) \;;\; W_2(A) \;;\; C_1 \;;\; W_1(B) \;;\; C_2$$
*(Note : $A$ représente le solde du département 1 et $B$ le nombre d'employés).*

1. Cet échéancier est-il sérialisable (ou conflictuellement sérialisable) ? Justifier à l'aide du graphe de préséance (graphe de conflit).
2. Quelles anomalies de concurrence classiques peuvent se produire dans un tel scénario si aucun mécanisme de verrouillage n'est actif ?

**Correction guidée :**  
1. **Graphe de préséance :**  
   On cherche les conflits entre opérations de transactions différentes sur un même objet :
   - Conflit sur $A$ entre $T_1$ et $T_2$ :
     - $R_1(A)$ précède $W_2(A)$ $\implies T_1 \to T_2$
     - $R_2(A)$ précède $W_1(A)$ $\implies T_2 \to T_1$
     - $W_1(A)$ précède $W_2(A)$ $\implies T_1 \to T_2$
   
   Le graphe contient un cycle : $T_1 \leftrightarrows T_2$.  
   Par conséquent, **l'échéancier $S$ n'est pas conflictuellement sérialisable**.

2. **Anomalies potentielles :**  
   - **Écriture aveugle / Écrasement prématuré (Lost Update)** : $T_2$ lit $A$ avant que $T_1$ ne modifie $A$, puis $T_2$ réécrit $A$ en écrasant la mise à jour de $T_1$.
   - **Lecture non répétable (Non-repeatable read)** : $T_2$ lit $A$, puis $T_1$ modifie et valide $A$, si $T_2$ relit $A$ il obtiendra une valeur différente.

---

### Question 5 : Propriétés ACID et Niveaux d'isolation

**Énoncé :**  
1. Définir brièvement la propriété d'**Isolation** dans le sigle ACID.
2. Expliquer comment le verrouillage en deux phases strict (Strict 2PL) permet de garantir la sérialisabilité.

**Correction guidée :**  
1. **Isolation :** L'exécution simultanée de plusieurs transactions doit aboutir au même résultat que si elles avaient été exécutées séquentiellement (l'une après l'autre). Les modifications intermédiaires d'une transaction ne doivent pas être visibles par les autres tant qu'elle n'est pas validée.
2. **Strict 2PL (Two-Phase Locking) :**  
   - Règle 1 : Une transaction doit acquérir un verrou en lecture (partagé) avant de lire, et un verrou en écriture (exclusif) avant d'écrire.
   - Règle 2 (Stricte) : **Tous les verrous en écriture (et généralement tous les verrous) détenus par une transaction sont libérés uniquement à la fin** de la transaction (au moment du `Commit` ou du `Abort`).  
   Cela empêche les autres transactions de lire des données non validées (évitant les lectures sales) et élimine les cycles dans les graphes de préséance, garantissant ainsi la sérialisabilité.

---

## Analyse Critique des Résultats

1. **Sur la Normalisation :**  
   La décomposition en FNBC élimine toute redondance liée aux dépendances fonctionnelles. Cependant, elle peut induire un coût en performance lors des requêtes car l'obtention des informations initiales nécessite de nombreuses **jointures** entre les tables $\mathcal{R}_1, \mathcal{R}_2, \mathcal{R}_3$ et $\mathcal{R}_4$. Dans les systèmes décisionnels (OLAP), on accepte parfois de violer la FNBC (dénormalisation) pour accélérer les lectures.

2. **Sur les Transactions :**  
   Le respect strict des propriétés ACID, via des mécanismes comme le Strict 2PL, garantit une correction absolue des données mais réduit le **degré de concurrence** (phénomène de blocage ou *lock contention*). Les SGBD modernes gèrent donc des niveaux d'isolation configurables (ex: *Read Committed*, *Snapshot Isolation*) pour trouver un compromis optimal entre performance et cohérence.