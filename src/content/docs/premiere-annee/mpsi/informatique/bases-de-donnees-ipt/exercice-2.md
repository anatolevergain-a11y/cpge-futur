---
title: 'Exercice 2 : Modèle relationnel et clés primaires/étrangères'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre de la surveillance du ciel et de la détection de transits d'exoplanètes, un consortium d'astrophysiciens gère un réseau international de stations d'observation. Les données récoltées sont stockées dans un système de gestion de bases de données relationnelles (SGBDR).

Le système d'information repose sur le schéma relationnel suivant :

*   $\text{Observatoire}(\underline{\text{id\_obs}}, \text{nom\_obs}, \text{pays}, \text{altitude})$
*   $\text{Telescope}(\underline{\text{id\_tel}}, \text{nom\_tel}, \text{diametre}, \text{\#id\_obs})$
*   $\text{Astre}(\underline{\text{id\_astre}}, \text{designation}, \text{type\_astre}, \text{magnitude})$
*   $\text{SessionObs}(\underline{\text{id\_session}}, \text{\#id\_tel}, \text{\#id\_astre}, \text{date\_obs}, \text{duree\_pose}, \text{flux\_mesure})$

#### Conventions de notation :
*   Les clés primaires sont soulignées d'un trait plein : $\underline{\text{attribut}}$.
*   Les clés étrangères sont préfixées par un dièse : $\text{\#attribut}$.
*   L'altitude et le diamètre sont exprimés en mètres ($\text{m}$).
*   La durée de pose est exprimée en secondes ($\text{s}$).

L'objectif de ce problème est d'étudier la cohérence formelle du modèle relationnel, de garantir le respect des contraintes d'intégrité (entité, domaine, référence) et d'écrire les requêtes et instructions de définition de données associées en langage $\text{SQL}$.

---

### ❓ Questions progressives

#### Partie I : Fondements théoriques du modèle relationnel

1. **Définitions formelles :**
   Rappeler les définitions mathématiques rigoureuses des notions suivantes dans le modèle relationnel de Codd :
   * Domaine d'un attribut.
   * Relation (ou table) et tuple (ou n-uplet).
   * Schéma d'une relation.
   * Clé candidate, super-clé et clé primaire.

2. **Contrainte d'intégrité référentielle :**
   Définir formellement la notion de *clé étrangère*. Énoncer la contrainte d'intégrité référentielle qui lie la relation $\text{Telescope}$ à la relation $\text{Observatoire}$.

3. **Discussion de modélisation :**
   Dans la table $\text{SessionObs}$, le triplet $(\text{id\_tel}, \text{id\_astre}, \text{date\_obs})$ aurait-il pu constituer une clé candidate raisonnable à la place d'un identifiant artificiel $\text{id\_session}$ ? Quelle hypothèse physique cela imposerait-il sur le système d'observation ?

---

#### Partie II : Traduction en SQL (DDL - Data Definition Language)

4. Écrire le script $\text{SQL}$ de création de la table $\text{Telescope}$. On veillera à :
   * Définir des types de données cohérents.
   * Déclarer la clé primaire.
   * Déclarer la clé étrangère en spécifiant un comportement : si un observatoire est supprimé de la base, la suppression de ses télescopes doit être bloquée.
   * Imposer que le diamètre soit strictement positif et que le nom du télescope soit obligatoirement renseigné.

5. Écrire le script $\text{SQL}$ de création de la table $\text{SessionObs}$. On ajoutera une contrainte de table vérifiant que la durée de pose $\text{duree\_pose}$ est comprise entre $1 \text{ s}$ et $86\,400 \text{ s}$ ($24\text{ h}$).

---

#### Partie III : Anomalies et intégrité opérationnelle

6. On considère l'état courant de la base de données. Indiquer, pour chacune des opérations suivantes, si le SGBDR accepte ou rejette la transaction, en justifiant précisément la réponse par la contrainte mise en jeu :
   * **Opération A :** Insertion dans $\text{Astre}$ d'un tuple avec $\text{id\_astre} = \text{NULL}$.
   * **Opération B :** Insertion dans $\text{Telescope}$ d'un tuple avec $\text{id\_obs} = 999$, sachant qu'aucun observatoire ne possède cet identifiant.
   * **Opération C :** Suppression dans $\text{Observatoire}$ du tuple ayant $\text{id\_obs} = 1$, sachant qu'il existe trois télescopes associés à cet observatoire dans la table $\text{Telescope}$.

---

#### Partie IV : Exploitation en SQL (DQL - Data Query Language)

7. Écrire une requête $\text{SQL}$ permettant d'obtenir le nom de chaque télescope, son diamètre, ainsi que le nom et le pays de l'observatoire auquel il est rattaché.

8. Écrire une requête $\text{SQL}$ renvoyant les identifiants et désignations des astres qui n'ont **jamais** fait l'objet d'aucune session d'observation. On proposera deux écritures distinctes :
   * L'une utilisant une sous-requête avec l'opérateur $\text{NOT IN}$.
   * L'autre utilisant une jointure externe ($\text{LEFT JOIN}$).

---

### 💡 Pistes & Indications méthodologiques

*   **Question 1 :** Revenir à la théorie des ensembles. Un tuple est un élément d'un produit cartésien de domaines, et une relation en est un sous-ensemble fini. Pour la clé candidate, insister sur les deux propriétés : unicité et minimalité.
*   **Question 2 :** Une clé étrangère fait toujours référence à une clé primaire (ou candidate) d'une autre table (ou de la même table dans le cas auto-référentiel). La contrainte stipule que toute valeur non nulle de la clé étrangère doit exister dans la table cible.
*   **Question 4 & 5 :** Utiliser les clauses standard SQL : `CREATE TABLE`, `PRIMARY KEY`, `FOREIGN KEY ... REFERENCES ...`, `CHECK`, `NOT NULL`, et pour la gestion de l'intégrité référentielle à la suppression : `ON DELETE RESTRICT` (ou `NO ACTION`).
*   **Question 6 :** Mobiliser les trois types d'intégrité : intégrité de domaine/entité (non-nullité des clés primaires), intégrité référentielle (validité des clés étrangères et politiques de suppression).
*   **Question 8 :** La recherche d'éléments "orphelins" par `LEFT JOIN` s'effectue en filtrant sur la condition `WHERE clé_droite IS NULL`. Attention au comportement des valeurs `NULL` avec `NOT IN`.

---

### 📋 Corrigé détaillé pas à pas

#### Partie I : Fondements théoriques du modèle relationnel

**1. Définitions formelles :**

*   **Domaine :** Un domaine $D$ est un ensemble (généralement atomique) de valeurs admissibles pour un attribut (par exemple $\mathbb{R}$, $\mathbb{Z}$, l'ensemble des chaînes de caractères de longueur inférieure à $255$, etc.).
*   **Attribut et Schéma de relation :** Un attribut $A_i$ est une colonne étiquetée à laquelle est associé un domaine $\text{dom}(A_i)$. Un *schéma de relation* est une liste finie d'attributs $R(A_1, A_2, \dots, A_n)$.
*   **Tuple et Relation :** Un *tuple* (ou n-uplet) $t$ sur un schéma $R$ est un élément du produit cartésien :
    $$t \in \text{dom}(A_1) \times \text{dom}(A_2) \times \dots \times \text{dom}(A_n)$$
    Une *relation* (ou instance de la relation) $r$ associée au schéma $R$ est un sous-ensemble fini de ce produit cartésien :
    $$r \subseteq \prod_{i=1}^n \text{dom}(A_i)$$
*   **Super-clé :** Soit $K \subseteq \{A_1, \dots, A_n\}$. $K$ est une super-clé de $r$ si :
    $$\forall t_1, t_2 \in r, \quad t_1 \neq t_2 \implies t_1[K] \neq t_2[K]$$
    où $t[K]$ désigne la projection du tuple $t$ sur l'ensemble d'attributs $K$.
*   **Clé candidate :** Une clé candidate $K$ est une super-clé **minimale** pour l'inclusion, c'est-à-dire que pour tout sous-ensemble strict $K' \subsetneq K$, $K'$ n'est pas une super-clé.
*   **Clé primaire :** C'est l'une des clés candidates, arbitrairement choisie par le concepteur de la base de données pour identifier de manière unique chaque tuple de la table. Elle ne peut contenir de valeur nulle ($\text{NULL}$).

---

**2. Contrainte d'intégrité référentielle :**

Soit $R_1$ un schéma contenant un ensemble d'attributs $FK$, et $R_2$ un schéma dont la clé primaire est $PK$. On dit que $FK$ est une **clé étrangère** de $R_1$ référençant $R_2$ si les attributs de $FK$ possèdent les mêmes domaines que ceux de $PK$.

**Contrainte pour l'exemple étudié :**
Pour tout tuple $t \in \text{Telescope}$, la contrainte d'intégrité référentielle impose :
$$t[\text{id\_obs}] \in \pi_{\text{id\_obs}}(\text{Observatoire}) \quad \text{ou} \quad t[\text{id\_obs}] \text{ est } \text{NULL}$$
*(où $\pi$ désigne la projection relationnelle).*
Dans notre cas, si l'on impose qu'un télescope appartient obligatoirement à un observatoire, la valeur $\text{NULL}$ est interdite.

---

**3. Discussion de modélisation :**

Si l'on choisit $(\text{id\_tel}, \text{id\_astre}, \text{date\_obs})$ comme clé candidate :
*   L'unicité impose qu'un télescope donné ne peut observer le **même** astre qu'**une seule fois** à une date donnée.
*   Cependant, si la précision de $\text{date\_obs}$ est le jour calendaire ($\text{YYYY-MM-DD}$), cela empêcherait d'enregistrer deux poses distinctes du même astre par le même télescope au cours d'une même nuit.
*   De plus, cela n'empêcherait pas un télescope d'avoir deux sessions d'observation différentes au même instant si les astres ciblés étaient différents (ce qui est physiquement absurde pour un télescope optique qui ne peut pointer que dans une seule direction à la fois).
*   L'introduction de la clé artificielle $\underline{\text{id\_session}}$ simplifie la gestion des index et l'évolutivité du schéma, tout en reportant les règles temporelles complexes (non-chevauchement des créneaux) sur des déclencheurs (*triggers*) ou la couche applicative.

---

#### Partie II : Traduction en SQL (DDL)

**4. Script de création de la table `Telescope` :**

```sql
CREATE TABLE Telescope (
    id_tel INT,
    nom_tel VARCHAR(100) NOT NULL,
    diametre REAL NOT NULL,
    id_obs INT NOT NULL,
    CONSTRAINT pk_telescope PRIMARY KEY (id_tel),
    CONSTRAINT fk_telescope_obs FOREIGN KEY (id_obs) 
        REFERENCES Observatoire(id_obs) 
        ON DELETE RESTRICT,
    CONSTRAINT chk_diametre CHECK (diametre > 0)
);
```
Remarque: * `ON DELETE RESTRICT` (ou `ON DELETE NO ACTION`) garantit le blocage de la suppression de l'observatoire parent s'il possède encore des télescopes affiliés.

---

**5. Script de création de la table `SessionObs` :**

```sql
CREATE TABLE SessionObs (
    id_session INT,
    id_tel INT NOT NULL,
    id_astre INT NOT NULL,
    date_obs TIMESTAMP NOT NULL,
    duree_pose REAL NOT NULL,
    flux_mesure REAL,
    CONSTRAINT pk_session PRIMARY KEY (id_session),
    CONSTRAINT fk_session_tel FOREIGN KEY (id_tel) 
        REFERENCES Telescope(id_tel),
    CONSTRAINT fk_session_astre FOREIGN KEY (id_astre) 
        REFERENCES Astre(id_astre),
    CONSTRAINT chk_duree CHECK (duree_pose >= 1.0 AND duree_pose <= 86400.0)
);
```

---

#### Partie III : Anomalies et intégrité opérationnelle

**6. Analyse des transactions :**

*   **Opération A : Rejetée.**
    *   *Cause :* Violation de la **contrainte d'entité** (ou contrainte de clé primaire).
    *   *Justification :* L'attribut $\text{id\_astre}$ est la clé primaire de la relation $\text{Astre}$. Par définition, une clé primaire assure l'identification univoque de chaque tuple et possède implicitement (ou explicitement) la contrainte `NOT NULL`.

*   **Opération B : Rejetée.**
    *   *Cause :* Violation de la **contrainte d'intégrité référentielle**.
    *   *Justification :* L'attribut $\text{id\_obs}$ de $\text{Telescope}$ est une clé étrangère référençant $\text{Observatoire}(\text{id\_obs})$. Le SGBDR vérifie la présence de la valeur $999$ dans la table $\text{Observatoire}$. Comme cette valeur est absente, l'insertion romprait la cohérence des liens et est refusée.

*   **Opération C : Rejetée.**
    *   *Cause :* Violation de la **contrainte d'intégrité référentielle** avec clause de restriction (`ON DELETE RESTRICT`).
    *   *Justification :* La table fille $\text{Telescope}$ possède des tuples référençant le tuple d'identifiant $1$ de la table parente $\text{Observatoire}$. En présence de la règle `RESTRICT`, le SGBDR empêche toute suppression d'une clé primaire référencée afin d'éviter la création de tuples "orphelins".

---

#### Partie IV : Exploitation en SQL (DQL)

**7. Jointure interne standard :**

```sql
SELECT 
    T.nom_tel,
    T.diametre,
    O.nom_obs,
    O.pays
FROM Telescope AS T
JOIN Observatoire AS O ON T.id_obs = O.id_obs;
```

---

**8. Recherche des astres non observés :**

*   **Méthode 1 : Utilisation d'une sous-requête avec `NOT IN`**

```sql
SELECT 
    id_astre, 
    designation
FROM Astre
WHERE id_astre NOT IN (
    SELECT DISTINCT id_astre 
    FROM SessionObs
    WHERE id_astre IS NOT NULL
);
```
*(Remarque de rigueur : la précaution `WHERE id_astre IS NOT NULL` dans la sous-requête est essentielle en SQL standard pour éviter qu'une éventuelle valeur `NULL` n'annule l'évaluation du `NOT IN`).*

*   **Méthode 2 : Jointure externe gauche (`LEFT JOIN`)**

```sql
SELECT 
    A.id_astre, 
    A.designation
FROM Astre AS A
LEFT JOIN SessionObs AS S ON A.id_astre = S.id_astre
WHERE S.id_session IS NULL;
```
Principe: * La jointure externe `LEFT JOIN` conserve tous les tuples de la table de gauche (`Astre`). Pour les astres n'ayant aucune correspondance dans `SessionObs`, les attributs issus de `SessionObs` sont renseignés à `NULL`. Le filtre `WHERE S.id_session IS NULL` isole rigoureusement ces éléments orphelins.