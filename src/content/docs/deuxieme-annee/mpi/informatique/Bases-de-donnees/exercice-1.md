---
title: 'Exercice 1 : Modèle relationnel'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse critique et conception d'un modèle relationnel pour un système de logs distribué

**Matière :** Informatique (Filière MPI)  
Chapitre: ** Bases de données  
**Thème :** Modèle relationnel, Algèbre relationnelle, SQL et Analyse de complexité  

---

## 1. Énoncé

Une grande entreprise du numérique gère une infrastructure cloud répartie sur plusieurs continents. Chaque composant logiciel produit des journaux d'événements (*logs*) qui doivent être stockés et analysés pour des raisons de sécurité et d'optimisation des performances.

On souhaite concevoir une base de données relationnelle pour stocker ces logs. L'analyse préliminaire des flux de données indique les ordres de grandeur suivants en régime permanent :
*   **10 000** serveurs émetteurs.
*   En moyenne **5 000** événements de log générés par seconde et par serveur.
*   Chaque log contient un identifiant unique, un horodatage à la milliseconde près, un niveau de sévérité (DEBUG, INFO, WARN, ERROR, FATAL), l'identifiant du serveur émetteur, ainsi qu'un message textuel de taille variable (en moyenne 200 octets).
*   Les données doivent être conservées à chaud pendant une période glissante de **30 jours**.

Le schéma initial proposé par un développeur inexpérimenté est le suivant :
*   $\text{Serveur}(\underline{\text{id\_serveur}}, \text{adresse\_ip}, \text{datacenter}, \text{proprietaire})$
*   $\text{Log}(\underline{\text{id\_log}}, \text{horodatage}, \text{severite}, \text{message}, \text{id\_serveur})$ avec $\text{id\_serveur}$ clé étrangère vers $\text{Serveur}$.

L'objectif de ce problème est d'évaluer la pertinence de ce modèle face aux contraintes de volume, d'exprimer des requêtes d'analyse en algèbre relationnelle et en SQL, puis de proposer des optimisations critiques.

---

## 2. Questions

### Partie A : Analyse dimensionnelle et critique du modèle
1. Calculer le volume total de données brutes généré par l'ensemble des serveurs sur la période de rétention de 30 jours. Exprimer le résultat en téraoctets ($\text{To}$).
2. En déduire la contrainte majeure que ce volume impose sur l'architecture du SGBD (Système de Gestion de Base de Données) relationnel classique.
3. Le champ `severite` ne peut prendre que 5 valeurs distinctes. Quel est l'inconvénient en termes d'espace de stockage et d'intégrité de représenter ce champ par une chaîne de caractères de type `VARCHAR(10)` ? Proposer une modification du schéma relationnel.

### Partie B : Algèbre relationnelle
Soit le schéma relationnel corrigé :
*   $\text{Serveur}(\underline{\text{id\_serveur}}, \text{datacenter})$
*   $\text{Log}(\underline{\text{id\_log}}, \text{horodatage}, \text{id\_severite}, \text{message}, \text{id\_serveur})$

4. Exprimer en algèbre relationnelle la requête permettant d'obtenir les identifiants et les datacenters de tous les serveurs ayant émis au moins un log de sévérité critique (correspondant à $\text{id\_severite} = 5$).
5. Écrire la même requête en évitant les doublons si un serveur a émis plusieurs logs critiques.

### Partie C : SQL et Optimisation
6. Écrire la requête SQL équivalente à la question 5.
7. Pour analyser les pannes, on souhaite compter le nombre de logs d'erreur ($\text{id\_severite} \in \{4, 5\}$) par datacenter pour la journée du 1er mai 2024. Écrire la requête SQL correspondante.
8. Quel index (ou quels index) recommandez-vous de créer sur la table $\text{Log}$ pour accélérer cette requête ? Justifier à l'aide de la sélectivité des attributs.

---

## 3. Pistes et indications

*   **Partie A :** Pensez à convertir les secondes en minutes, heures, jours, et tenez compte du fait que $1 \text{ To} = 10^{12}$ octets (ou $2^{40}$ octets, les deux ordres de grandeur sont acceptés mais précisez votre choix).
*   **Partie B :** Utilisez les opérateurs de sélection ($\sigma$), de projection ($\pi$), de jointure ($\bowtie$) et de renommage ($\rho$) si nécessaire.
*   **Partie C :** Pensez aux fonctions d'agrégation (`COUNT`, `GROUP BY`) et aux clauses de filtrage temporel (`BETWEEN` ou comparaisons directes).

---

## 4. Corrigé pas à pas

### Partie A : Analyse dimensionnelle et critique du modèle

1. **Calcul du volume de données :**
   * Nombre de serveurs : $N_s = 10^4$.
   * Débit par serveur : $D_s = 5 \times 10^3 \text{ logs/s}$.
   * Débit global : $D_{global} = 10^4 \times (5 \times 10^3) = 5 \times 10^7 \text{ logs/s}$.
   * Taille moyenne d'un log : $T_{log} \approx 200 \text{ octets}$ (auxquels s'ajoutent les métadonnées de clés et d'horodatage, estimons à environ $250 \text{ octets}$ au total par tuple dans le SGBD).
   * Débit en octets par seconde : $5 \times 10^7 \times 250 = 1.25 \times 10^{10} \text{ octets/s} \approx 12.5 \text{ Go/s}$.
   * Nombre de secondes en 30 jours : $\Delta t = 30 \times 24 \times 3600 = 2.592 \times 10^6 \text{ s}$.
   * Volume total : $V = 1.25 \times 10^{10} \times 2.592 \times 10^6 = 3.24 \times 10^{16} \text{ octets} = 32\,400 \text{ To} = 32.4 \text{ Po}$ (Pétaoctets).
   *(Note : Si l'on prend unitaire sans les overheads, on trouve $\approx 25.9 \text{ Po}$).*

2. **Conséquence architecturale :**
   Un volume de l'ordre de **32 Pétaoctets** sur 30 jours dépasse largement la capacité pratique d'un serveur de base de données relationnelle monolithique (souvent limité à quelques To de stockage haut performance). Cela met en évidence les limites du modèle relationnel classique ACID sur un nœud unique pour le *Big Data*. Il faut recourir à du sharding, à un SGBD distribué (type Cassandra, ClickHouse) ou à une politique d'agrégation/élagage agressive.

3. **Critique du champ `severite` :**
   Un `VARCHAR(10)` prend de la place (au moins 10 octets + overhead de longueur) et est sujet aux erreurs de saisie. De plus, les comparaisons sur des chaînes sont plus lentes.  
Correction: ** Remplacer par un type entier (`SMALLINT` ou `TINYINT`) ou créer une table de dimension $\text{Severite}(\underline{\text{id\_severite}}, \text{libelle})$ et stocker une clé étrangère $\text{id\_severite}$.

---

### Partie B : Algèbre relationnelle

4. **Requête avec doublons (serveurs listés autant de fois qu'ils ont de logs critiques) :**
   $$\pi_{\text{id\_serveur}, \text{datacenter}} \left( \text{Serveur} \bowtie_{\text{Serveur}.\text{id\_serveur} = \text{Log}.\text{id\_serveur}} \sigma_{\text{id\_severite} = 5}(\text{Log}) \right)$$

5. **Requête sans doublons (projection stricte après jointure) :**
   L'algèbre relationnelle éliminant naturellement les doublons au niveau des relations (ensembles), la formulation mathématique est la même que la question 4, mais sémantiquement l'opérateur de projection $\pi$ garantit l'unicité des tuples :
   $$\pi_{\text{Serveur}.\text{id\_serveur}, \text{datacenter}} \left( \text{Serveur} \bowtie (\sigma_{\text{id\_severite} = 5}(\text{Log})) \right)$$

---

### Partie C : SQL et Optimisation

6. **Requête SQL (sans doublons via `DISTINCT`) :**
   ```sql
   SELECT DISTINCT s.id_serveur, s.datacenter
   FROM Serveur s
   JOIN Log l ON s.id_serveur = l.id_serveur
   WHERE l.id_severite = 5;
   ```

7. **Requête SQL pour le comptage par datacenter (1er mai 2024) :**
   ```sql
   SELECT s.datacenter, COUNT(l.id_log) AS nb_erreurs
   FROM Serveur s
   JOIN Log l ON s.id_serveur = l.id_serveur
   WHERE l.id_severite IN (4, 5)
     AND l.horodatage >= '2024-05-01 00:00:00'
     AND l.horodatage < '2024-05-02 00:00:00'
   GROUP BY s.datacenter;
   ```

8. **Recommandation d'index :**
   *   **Index composite indispensable :** Un index sur `Log(id_severite, horodatage, id_serveur)`.
   *   **Justification :** La clause `WHERE` filtre d'abord sur la sévérité et l'intervalle de temps. Cet index en B-Arbre (*B-Tree*) permet au SGBD de cibler directement les lignes correspondantes sans effectuer un parcours séquentiel (*Full Table Scan*) de la table de plusieurs dizaines de Pétaoctets, ce qui serait rédhibitoire en termes de temps de calcul ($\mathcal{O}(N)$ vs $\mathcal{O}(\log N)$).