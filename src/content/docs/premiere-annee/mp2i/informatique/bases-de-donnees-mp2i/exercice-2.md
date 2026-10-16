---
title: 'Exercice 2 : Requêtes SQL complexes et contraintes d intégrité'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On s'intéresse à la gestion d'une plateforme de covoiturage inter-campus pour les étudiants de classes préparatoires. Le système est modélisé par une base de données relationnelle dont le schéma textuel est le suivant :

*   $\text{Etudiant}(\underline{\text{id\_etu}}, \text{nom}, \text{prenom}, \text{ecole}, \text{solde\_carbone})$
*   $\text{Trajet}(\underline{\text{id\_trajet}}, \text{id\_conducteur} \to \text{Etudiant}, \text{ville\_depart}, \text{ville\_arrivee}, \text{date\_depart}, \text{places\_offertes}, \text{prix})$
*   $\text{Reservation}(\underline{\text{id\_reservation}}, \text{id\_trajet} \to \text{Trajet}, \text{id\_passager} \to \text{Etudiant}, \text{statut})$

**Précisions sur les domaines et contraintes métiers implicites :**
*   $\text{id\_etu}$, $\text{id\_trajet}$ et $\text{id\_reservation}$ sont des clés primaires entières générées automatiquement.
*   Le $\text{statut}$ d'une réservation peut prendre les valeurs : `'EN_ATTENTE'`, `'CONFIRMEE'`, ou `'ANNULEE'`.
*   Le solde carbone $\text{solde\_carbone}$ représente le bilan écologique (en kg de $CO_2$ éconoimisés).

---

### ❓ Questions progressives

1. **(Création et Contraintes)** Écrire les instructions SQL (DDL) permettant de créer la table $\text{Trajet}$ en respectant les contraintes d'intégrité référentielles, ainsi qu'une contrainte de vérification ($\text{CHECK}$) garantissant que le nombre de places offertes est strictement positif et que le prix est positif ou nul.
2. **(Agrégation et Filtrage)** Écrire une requête SQL qui retourne le nom, le prénom et l'école des conducteurs ayant proposé plus de $5$ trajets au départ de `"Paris"` vers `"Saclay"`.
3. **(Division relationnelle / Logique universelle)** Écrire une requête SQL permettant de trouver les étudiants (nom et prénom) qui ont réservé **tous** les trajets proposés par l'étudiant dont l'identifiant est $\text{id\_etu} = 42$.
4. **(Transactions et Intégrité métier)** Écrire une transaction SQL (utilisant `BEGIN TRANSACTION`, `COMMIT`, `ROLLBACK` et des blocs conditionnels conceptuels) permettant d'insérer une réservation pour un passager (dont $\text{id\_etu} = 101$) sur un trajet (dont $\text{id\_trajet} = 12$), sous réserve qu'il reste des places confirmées disponibles.

---

### 💡 Pistes & Indications méthodologiques

*   **Question 1 :** Pensez à nommer les clés étrangères et à utiliser les clauses `REFERENCES` et `ON DELETE`. Le type `DATE` ou `TIMESTAMP` est attendu pour la date.
*   **Question 2 :** Une simple jointure entre $\text{Etudiant}$ et $\text{Trajet}$, couplée à un regroupement (`GROUP BY`), un filtrage sur les villes (`WHERE`) et une condition sur les agrégats (`HAVING`), suffit.
*   **Question 3 :** C'est un cas classique de division relationnelle. La formulation "tous les X de Y" se traduit élégamment en SQL par une double négation ("il n'existe aucun Y de 42 pour lequel il n'existe pas de réservation par l'étudiant") ou par un comptage égal au nombre total de trajets de l'étudiant 42.
*   **Question 4 :** Pour garantir la cohérence en concurrence, il faut idéalement verrouiller la ligne du trajet (`SELECT ... FOR UPDATE`), vérifier le nombre de places par rapport aux réservations confirmées, puis insérer ou annuler.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Création de la table $\text{Trajet}$ avec contraintes

```sql
CREATE TABLE Trajet (
    id_trajet SERIAL PRIMARY KEY,
    id_conducteur INT NOT NULL,
    ville_depart VARCHAR(100) NOT NULL,
    ville_arrivee VARCHAR(100) NOT NULL,
    date_depart TIMESTAMP NOT NULL,
    places_offertes INT NOT NULL,
    prix DECIMAL(6,2) NOT NULL,
    
    -- Contrainte d'intégrité référentielle
    CONSTRAINT fk_conducteur 
        FOREIGN KEY (id_conducteur) 
        REFERENCES Etudiant(id_etu) 
        ON DELETE CASCADE,
        
    -- Contraintes de domaine (CHECK)
    CONSTRAINT chk_places CHECK (places_offertes > 0),
    CONSTRAINT chk_prix CHECK (prix >= 0.0)
);
```

#### 2. Agrégation et Filtrage (Conducteurs actifs)

```sql
SELECT e.nom, e.prenom, e.ecole
FROM Etudiant e
JOIN Trajet t ON e.id_etu = t.id_conducteur
WHERE t.ville_depart = 'Paris' 
  AND t.ville_arrivee = 'Saclay'
GROUP BY e.id_etu, e.nom, e.prenom, e.ecole
HAVING COUNT(t.id_trajet) > 5;
```
Explication: * On joint les tables, on filtre en amont sur les villes pour réduire le coût, on groupe par étudiant (nécessaire pour les colonnes non agrégées en SQL standard), puis on filtre les groupes via `HAVING`.

#### 3. Division relationnelle (Tous les trajets d'un étudiant)

La méthode la plus robuste et lisible en SQL standard utilise le double `NOT EXISTS` :

```sql
SELECT e.nom, e.prenom
FROM Etudiant e
WHERE NOT EXISTS (
    -- Trajets proposés par l'étudiant 42...
    SELECT * 
    FROM Trajet t
    WHERE t.id_conducteur = 42
    AND NOT EXISTS (
        -- ... pour lesquels l'étudiant 'e' n'a PAS de réservation confirmée
        SELECT * 
        FROM Reservation r
        WHERE r.id_trajet = t.id_trajet
          AND r.id_passager = e.id_etu
          AND r.statut = 'CONFIRMEE'
    )
);
```
*Alternative par comptage (sous réserve qu'il y ait au moins un trajet) :*
```sql
SELECT e.nom, e.prenom
FROM Etudiant e
JOIN Reservation r ON e.id_etu = r.id_passager
JOIN Trajet t ON r.id_trajet = t.id_trajet
WHERE t.id_conducteur = 42 AND r.statut = 'CONFIRMEE'
GROUP BY e.id_etu, e.nom, e.prenom
HAVING COUNT(DISTINCT r.id_trajet) = (
    SELECT COUNT(*) 
    FROM Trajet 
    WHERE id_conducteur = 42
);
```

#### 4. Transaction et gestion de la concurrence

```sql
BEGIN TRANSACTION;

-- 1. Verrouillage du trajet et récupération des places offertes
SELECT places_offertes 
FROM Trajet 
WHERE id_trajet = 12 
FOR UPDATE;

-- 2. Vérification du nombre de places restantes par rapport aux réservations confirmées
-- (Supposons que cette logique applicative ou procédurale évalue le compteur)
-- Si (places_offertes > (SELECT COUNT(*) FROM Reservation WHERE id_trajet = 12 AND statut = 'CONFIRMEE')) :

INSERT INTO Reservation (id_trajet, id_passager, statut)
VALUES (12, 101, 'EN_ATTENTE');

-- Si une condition d'erreur était levée, on ferait ROLLBACK.
COMMIT;
```
*Remarque de rigueur (Concours) :* Mentionner l'utilité du verrou explicite (`FOR UPDATE`) pour éviter les conditions de course (*race conditions*) en cas de forte affluence sur les dernières places d'un trajet.