---
title: 'Exercice 1 : Projections, sélections, jointures en algèbre relationnelle'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On s'intéresse à la gestion d'une plateforme de streaming musical. Le schéma relationnel de la base de données est composé de trois relations (tables) dont les schémas et attributs sont les suivants :

1. **`Artiste`** (id_artiste, nom, pays, annee_debut)
   - `id_artiste` : $\text{ENTIER}$ (clé primaire)
   - `nom` : $\text{CHAÎNE}$
   - `pays` : $\text{CHAÎNE}$
   - `annee_debut` : $\text{ENTIER}$

2. **`Morceau`** (id_morceau, titre, id_artiste, duree, genre)
   - `id_morceau` : $\text{ENTIER}$ (clé primaire)
   - `titre` : $\text{CHAÎNE}$
   - `id_artiste` : $\text{ENTIER}$ (clé étrangère référant à `Artiste.id_artiste`)
   - `duree` : $\text{ENTIER}$ (exprimée en secondes)
   - `genre` : $\text{CHAÎNE}$

3. **`Ecoute`** (id_utilisateur, id_morceau, date_ecoute)
   - `id_utilisateur` : $\text{ENTIER}$
   - `id_morceau` : $\text{ENTIER}$ (clé étrangère référant à `Morceau.id_morceau`)
   - `date_ecoute` : $\text{DATE}$
   - *(La clé primaire de cette relation est le triplet (`id_utilisateur`, `id_morceau`, `date_ecoute`))*

On rappelle les opérateurs de base de l'algèbre relationnelle :
- Sélection : $\sigma_{\text{condition}}(R)$
- Projection : $\pi_{\text{attributs}}(R)$
- Produit cartésien : $R \times S$
- Jointure naturelle : $R \bowtie S$
- Jointure thêta : $R \bowtie_{\text{condition}} S$
- Renommage : $\rho_{\text{nouveau\_nom}(attributs)}(R)$
- Différence : $R \setminus S$

---

### ❓ Questions progressives

1. **Question 1 (Sélection et projection simples)** : Écrire l'expression en algèbre relationnelle permettant d'obtenir les titres et les genres de tous les morceaux dont la durée est strictement supérieure à $300$ secondes ($5$ minutes).
2. **Question 2 (Jointure)** : Écrire l'expression en algèbre relationnelle permettant d'obtenir le nom de l'artiste et le titre de ses morceaux pour tous les morceaux appartenant au genre `"Jazz"`.
3. **Question 3 (Jointure complexe et agrégation implicite)** : Écrire l'expression permettant d'obtenir les noms des artistes français (`pays = 'France'`) ayant au moins un morceau enregistré.
4. **Question 4 (Différence / Requête universelle)** : On souhaite obtenir les identifiants des utilisateurs (`id_utilisateur`) qui ont écouté *tous* les morceaux du genre `"Rock"`. Proposer une expression en algèbre relationnelle en utilisant l'opérateur de division (ou une expression équivalente avec la différence et le produit cartésien).

---

### 💡 Pistes & Indications méthodologiques

- **Question 1** : Identifiez d'abord la table source, puis appliquez la restriction ($\sigma$) sur la durée, et enfin la projection ($\pi$) sur les attributs souhaités.
- **Question 2** : Il est nécessaire de relier la table `Morceau` et la table `Artiste` via une jointure (naturelle ou thêta sur l'attribut commun `id_artiste`), combinée avec une sélection sur le genre.
- **Question 3** : Veillez à n'utiliser que les opérateurs autorisés de l'algèbre relationnelle. Pensez à éliminer les doublons potentiels si un artiste a plusieurs morceaux de jazz, bien que l'algèbre relationnelle standard opère sur des ensembles (pas de doublons par définition, contrairement à SQL).
- **Question 4** : La structure type pour "trouver $X$ qui vérifient tous les $Y$" repose sur le schéma relationnel : $A_{\text{tous}} = \pi_{\text{id\_utilisateur}, \text{id\_morceau}}(\text{Ecoute}) \div \pi_{\text{id\_morceau}}(\sigma_{\text{genre='Rock'}}(\text{Morceau}))$. Rappelez-vous la définition de la division relationnelle $R \div S$.

---

### 📋 Corrigé détaillé pas à pas

#### Correction de la Question 1
On cherche les titres et genres des morceaux de plus de $300$ secondes.
- Source : table $\text{Morceau}$.
- Condition de sélection : $\text{duree} > 300$.
- Attributs projetés : $\text{titre}, \text{genre}$.

Expression de l'algèbre relationnelle :
$$\pi_{\text{titre}, \text{genre}} (\sigma_{\text{duree} > 300} (\text{Morceau}))$$

#### Correction de la Question 2
On cherche le nom de l'artiste et le titre de ses morceaux pour le genre `"Jazz"`.
- On doit croiser les tables $\text{Artiste}$ et $\text{Morceau}$ via leur attribut commun $\text{id\_artiste}$.
- On filtre sur le genre `"Jazz"`.
- On projette sur $\text{nom}$ et $\text{titre}$.

Expression de l'algèbre relationnelle :
$$\pi_{\text{nom}, \text{titre}} (\sigma_{\text{genre} = \text{'Jazz'}} (\text{Artiste} \bowtie_{\text{Artiste.id\_artiste} = \text{Morceau.id\_artiste}} \text{Morceau}))$$
*(On peut également utiliser la jointure naturelle $\text{Artiste} \bowtie \text{Morceau}$ puisque l'attribut $\text{id\_artiste}$ est commun aux deux relations).*

#### Correction de la Question 3
On cherche les noms des artistes français ayant enregistré au moins un morceau.
- On sélectionne les artistes français : $\sigma_{\text{pays} = \text{'France'}} (\text{Artiste})$.
- On effectue la jointure avec la table $\text{Morceau}$ pour s'assurer qu'ils possèdent des morceaux.
- On projette uniquement sur le nom de l'artiste.

Expression de l'algèbre relationnelle :
$$\pi_{\text{nom}} \left( \sigma_{\text{pays} = \text{'France'}} (\text{Artiste}) \bowtie \text{Morceau} \right)$$
*Note de rigueur d'examinateur* : La jointure naturelle avec `Morceau` filtre implicitement les artistes qui n'ont aucun morceau (puisque `id_artiste` doit apparaitre dans les deux tables, ce qui correspond à une *inner join* en SQL).

#### Correction de la Question 4
On cherche les $\text{id\_utilisateur}$ ayant écouté **tous** les morceaux du genre `"Rock"`.
C'est un cas classique d'utilisation de la **division relationnelle** (notée $\div$).

1. Définissons l'ensemble des morceaux de référence (le diviseur $S$) :
   $$S = \pi_{\text{id\_morceau}} (\sigma_{\text{genre} = \text{'Rock'}} (\text{Morceau}))$$
2. Définissons la relation des associations (utilisateurs, morceaux écoutés) (le dividende $R$) :
   $$R = \pi_{\text{id\_utilisateur}, \text{id\_morceau}} (\text{Ecoute})$$
3. On applique l'opération de division :
   $$\text{Resultat} = R \div S$$

*Rppel du cours sur la division (pour justification complète si demandé à l'oral)* : 
$R \div S$ renvoie l'ensemble des valeurs de la première projection de $R$ (ici $\text{id\_utilisateur}$) qui sont en relation avec *toutes* les valeurs de $S$ (les $\text{id\_morceau}$ du genre Rock).

Sous forme développée sans l'opérateur $\div$ (en utilisant la double différence) :
$$ \pi_{\text{id\_utilisateur}}(R) - \pi_{\text{id\_utilisateur}} \left( \left( \pi_{\text{id\_utilisateur}}(R) \times S \right) - R \right) $$