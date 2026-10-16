---
title: "❓ Questions progressives"
description: "Fiche de cours et d'exercice CPGE."
---

### ❓ Questions progressives

1. **Extraction simple :** Écrire une requête SQL permettant d'afficher le nom commun et le nom latin de toutes les observations enregistrées dans la base, sans doublon.
2. **Filtrage numérique :** Écrire une requête SQL qui retourne toutes les informations des observations réalisées en haute altitude, c'est-à-dire à une altitude strictement supérieure à $\text{2000 m}$.
3. **Filtrage textuel et combiné :** Écrire une requête SQL permettant d'obtenir le nom latin et l'altitude des observations concernant l'"Edelweiss" (dont le nom commun est `'Edelweiss'`) situées dans le massif des `'Ecrins'`.
4. **Gestion des dates et des intervalles :** Écrire une requête SQL qui liste les identifiants (`id_obs`) et les dates des observations effectuées durant l'été 2023 (c'est-à-dire entre le $\text{1er juin 2023}$ et le $\text{31 août 2023}$ inclus).
5. **Recherche par motif (Wildcard) :** Écrire une requête SQL permettant de récupérer les noms communs des plantes dont le nom latin commence par le genre `'Gentiana'`.
6. **Requête complexe avec disjonction et tri :** Écrire une requête SQL affichant le nom commun, l'altitude et la zone pour les plantes observées soit au stade `"Floraison"`, soit à une altitude supérieure ou égale à $\text{2500 m}$. Le résultat devra être trié par ordre décroissant d'altitude, puis par ordre alphabétique croissant du nom commun.
---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pensez au mot-clé permettant d'éliminer les redondances dans les résultats d'une projection.
* **Question 2 & 3 :** Utilisez la clause `WHERE` combinée aux opérateurs de comparaison usuels (`>`, `=`) et à l'opérateur logique `AND` pour cumuler les conditions.
* **Question 4 :** En SQL, les dates se comparent aisément sous la forme de chaînes de caractères `'AAAA-MM-JJ'` ou à l'aide de l'opérateur `BETWEEN ... AND ...`.
* **Question 5 :** Pour tester une correspondance partielle sur les chaînes de caractères, l'opérateur `LIKE` associé au joker `%` est indispensable.
* **Question 6 :** Attention aux priorités logiques (`AND` est prioritaire sur `OR`). L'utilisation de parenthèses est fortement recommandée pour structurer la disjonction. Le tri s'effectue via la clause `ORDER BY ... DESC/ASC`.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Extraction simple sans doublon
Pour projeter des colonnes spécifiques (`SELECT`) tout en éliminant les lignes strictement identiques, on utilise le mot-clé `DISTINCT`.
```sql
SELECT DISTINCT nom_commun, nom_latin
FROM Observations;
```

#### 2. Filtrage numérique strict
Il s'agit ici d'une sélection (`WHERE`) basée sur un opérateur de comparaison mathématique usuel.
```sql
SELECT *
FROM Observations
WHERE altitude > 2000;
```
*(Note : `*` permet de sélectionner l'ensemble des attributs de la table).*

#### 3. Filtrage textuel et combiné
On combine deux conditions textuelles à l'aide de l'opérateur logique `AND`. Les chaînes de caractères en SQL s'encadrent par des apostrophes.
```sql
SELECT nom_latin, altitude
FROM Observations
WHERE nom_commun = 'Edelweiss' 
  AND zone_parc = 'Ecrins';
```

#### 4. Gestion des intervalles de dates
L'intervalle fermé se traduit naturellement par l'opérateur `BETWEEN` (inclusif), ou par une double inéquation.
```sql
SELECT id_obs, date_obs
FROM Observations
WHERE date_obs BETWEEN '2023-06-01' AND '2023-08-31';
```
*(Alternative équivalente : `WHERE date_obs >= '2023-06-01' AND date_obs <= '2023-08-31'`)*

#### 5. Recherche par motif (Wildcard)
Pour trouver les noms latins commençant par "Gentiana", on utilise l'opérateur `LIKE` associé au caractère joker `%` qui remplace une suite quelconque de caractères.
```sql
SELECT DISTINCT nom_commun
FROM Observations
WHERE nom_latin LIKE 'Gentiana%';
```
*(Ici, `'Gentiana%'` signifie "commence par Gentiana suivi de n'importe quoi").*

#### 6. Disjonction, conjonction et tri
Cette question demande de combiner une condition `OR` (stade floraison ou haute altitude) et un tri multi-critères. 
* L'utilisation de parenthèses est impérative pour grouper la condition `OR`.
* `ORDER BY` prend les critères dans l'ordre de priorité de gauche à droite (`DESC` pour décroissant, `ASC` ou implicite pour croissant).

```sql
SELECT nom_commun, altitude, zone_parc
FROM Observations
WHERE stade_phenologique = 'Floraison' 
   OR altitude >= 2500
ORDER BY altitude DESC, nom_commun ASC;