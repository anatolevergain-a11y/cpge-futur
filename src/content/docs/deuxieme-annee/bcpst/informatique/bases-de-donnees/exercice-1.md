---
title: 'Exercice 1 : Modèle relationnel'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Gestion de la biodiversité et des réseaux trophiques par bases de données relationnelles

**Matière :** Informatique (Filière BCPST)  
Chapitre: ** Bases de données et modèle relationnel  
**Thème biologique :** Écologie des communautés, modélisation des réseaux trophiques et suivi de la biodiversité.

---

## 1. Énoncé du problème

Dans le cadre d'un programme de conservation mené dans le parc national des Écrans, des écologues souhaitent modéliser les interactions trophiques (qui mange qui) au sein de la faune alpine. L'objectif est de prédire l'impact de la disparition d'une espèce clé (comme le campagnol nival ou l'aigle royal) sur l'ensemble de l'écosystème.

Pour cela, on souhaite concevoir une base de données relationnelle nommée $\mathcal{B}_{\text{eco}}$ stockant les informations relatives aux espèces, aux individus observés, et aux relations de prédation.

### Schéma relationnel initial (proposé par un écologue novice)

Une seule table fourre-tout est initialement proposée :
`ObsEcologie (id_obs, nom_espece, regime_alimentaire, latitude, longitude, date_obs, espece_proie)`

*Problème :* Cette table souffre de nombreuses anomalies de conception (redondances, anomalies de mise à jour, perte d'information). Votre travail consiste à concevoir un modèle relationnel rigoureux en 3ème forme normale (3NF) et à manipuler ses données via l'algèbre relationnelle et le SQL.

---

## 2. Questions

### Partie I : Modélisation conceptuelle et logique

1. **Analyse critique du modèle initial :** Expliquez pourquoi la table `ObsEcologie` n'est pas adaptée et présente des anomalies de redondance. Identifiez les dépendances fonctionnelles problématiques.
2. **Conception du schéma relationnel :** Proposez un ensemble de relations (tables) normalisées (en 3NF) permettant de stocker :
   - Les espèces (nom scientifique, nom vernaculaire, régime strict : herbivore, carnivore, omnivore).
   - Les interactions trophiques (quelle espèce mange quelle autre espèce).
   - Les observations géolocalisées d'individus (date, coordonnées géographiques, identifiant de l'espèce observée).
   *Précisez pour chaque relation les clés primaires et les clés étrangères.*

### Partie II : Interrogations (Algèbre relationnelle et SQL)

3. **Algèbre relationnelle :** Écrire l'expression algébrique permettant d'obtenir les noms scientifiques de toutes les espèces observées à une latitude supérieure à $45.0^\circ$ après le "2023-06-01".
4. **Requête SQL :** Écrire la requête SQL permettant de lister le nom vernaculaire des prédateurs qui se nourrissent d'au moins une espèce herbivore.

### Partie III : Analyse critique biologique et limites du modèle

5. **Regard critique :** Un réseau trophique réel est dynamique, intègre des variations saisonnières du régime alimentaire et des forces d'interaction quantitatives (probabilité de prédation). Le modèle relationnel statique proposé permet-il de rendre compte de la complexité thermodynamique d'un écosystème ? Discutez-en les limites.

---

## 3. Pistes et indications

- **Q1 :** Pensez aux anomalies d'insertion (peut-on ajouter une espèce qui n'a pas encore été observée ?) et de suppression (si on supprime la dernière observation d'une espèce, perd-on son régime alimentaire ?).
- **Q2 :** Séparez les entités du domaine (`Espece`, `Observation`) de la relation d'association (`InteractionsTrophiques`). Une espèce peut avoir plusieurs prédateurs et plusieurs proies (relation $N-\text{à}-M$).
- **Q4 :** Utilisez des jointures (`JOIN`) et des conditions sur le type de régime alimentaire.

---

## 4. Corrigé pas à pas

### Partie I : Modélisation

#### 1. Critique du modèle initial
La table unique `ObsEcologie` mélange des concepts hétérogènes : les caractéristiques intrinsèques d'une espèce, les interactions écologiques et les événements d'observation ponctuels. 
* *Anomalie de redondance :* Si une espèce est observée $1000$ fois, son régime alimentaire est dupliqué $1000$ fois.
* *Dépendances fonctionnelles illégitimes :* $\text{id\_obs} \to \text{nom\_espece}$ mais aussi $\text{nom\_espece} \to \text{regime\_alimentaire}$. Cela viole la 2NF et la 3NF. Si on modifie le régime d'une espèce, il faut faire une mise à jour sur toutes ses lignes sous peine d'incohérence.

#### 2. Schéma relationnel normalisé (3NF)
On décompose le système en 4 relations :

1. **`Espece`** ($\underline{\text{id\_espece}}$, nom_scientifique, nom_vernaculaire, regime)
2. **`Observation`** ($\underline{\text{id\_obs}}$, date_obs, latitude, longitude, $\#\text{id\_espece}$)
   * Clé étrangère : $\text{id\_espece}$ référence `Espece(id_espece)`
3. **`Trophique`** ($\underline{\#\text{id\_predateur}, \#\text{id\_proie}}$)
   * Clés étrangères : $\text{id\_predateur}$ et $\text{id\_proie}$ référencent `Espece(id_espece)`

---

### Partie II : Interrogations

#### 3. Algèbre relationnelle
On cherche les noms scientifiques des espèces observées selon les critères spatio-temporels :
$$\pi_{\text{nom\_scientifique}} \left( \text{Espece} \bowtie_{\text{Espece.id\_espece} = \text{Observation.id\_espece}} \sigma_{\text{latitude} > 45.0 \land \text{date\_obs} > '2023-06-01'} (\text{Observation}) \right)$$

#### 4. Requête SQL
```sql
SELECT DISTINCT E1.nom_vernaculaire
FROM Espece E1
JOIN Trophique T ON E1.id_espece = T.id_predateur
JOIN Espece E2 ON T.id_proie = E2.id_espece
WHERE E2.regime = 'herbivore';
```

---

### Partie III : Limites biologiques du modèle

Le modèle relationnel classique repose sur une logique booléenne rigide (une espèce mange ou ne mange pas une autre). En écologie évolutive et systémique, cette approche présente de fortes limites :
1. **Aspect stochastique et quantitatif :** La prédation est une probabilité dépendante de la densité des populations (équations de Lotka-Volterra). Une base de données relationnelle stocke des faits discrets, difficilement des flux énergétiques continus ($\text{J}\cdot\text{m}^{-2}\cdot\text{an}^{-1}$).
2. **Plasticité phénotypique :** Le régime alimentaire varie selon les saisons (ex: l'ours brun devient largement herbivore/frugivore en été et carnivore/opportuniste en période de disette). Le modèle statique `Trophique` ne peut encoder une dynamique temporelle sans alourdir considérablement le schéma avec des attributs temporels complexes.