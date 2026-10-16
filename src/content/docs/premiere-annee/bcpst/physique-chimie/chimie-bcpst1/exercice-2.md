---
title: 'Exercice 2 : Stéréochimie et réactivité'
description: 'Problème d entraînement type concours.'
---

# Concours BCPST — Physique-Chimie
## Problème guidé : Stéréochimie et réactivité en chimie organique

*Ce problème aborde l'étude combinée de la stéréochimie d'une molécule bioactive et de sa réactivité lors d'une réaction de substitution nucléophile, thèmes classiques des épreuves écrites et orales des concours BCPST.*

---

### Partie I : Étude structurale et stéréochimie

On considère une molécule $M$, intermédiaire clé dans la synthèse d'un principe actif. Sa formule topologique fait apparaître un squelette carboné comportant deux centres asymétriques $C_2$ et $C_3$.

1. Rappeler la définition d'un centre asymétrique (ou carbone chiral).
2. La molécule $M$ possède la configuration $(2R, 3S)$ pour les carbones $C_2$ et $C_3$. Représenter la molécule $M$ selon la représentation de Cram.
3. Déterminer la relation stéréochimique existant entre le diastéréoisomère $(2R, 3R)$ et la molécule $M$. Sont-ils inactifs ou actifs sur la lumière polarisée ? Justifier.

---

### Partie II : Réactivité chimique et mécanisme

La molécule $M$ subit une réaction de substitution nucléophile par l'ion hydroxyle $\text{HO}^-_{(\text{aq})}$ pour donner un composé $P$. L'étude cinétique montre que la vitesse de réaction s'exprime par :
$$v = k [M] [\text{HO}^-]$$

4. Quel est le type de mécanisme réactionnel mis en jeu ? Justifier à l'aide de l'équation cinétique.
5. Décrire précisément les étapes de ce mécanisme et représenter l'état de transition.
6. Quel est l'impact stéréochimique de ce mécanisme sur le carbone porteur du groupe partant ? Comment qualifie-t-on ce phénomène ?

---

### Partie III : Analyse critique des résultats

7. Un chimiste inexpérimenté s'attend à obtenir un mélange racémique lors de cette transformation si le substrat était initialement un mélange racémique. Qu'en est-il si l'on part d'un échantillon strictement énantiopurement pur de $M$ (configuration $(2R, 3S)$) ? Discuter de la pureté énantiomérique du produit $P$ obtenu.

---
---

## CORRIGÉ DÉTAILLÉ PAS À PAS

### Partie I : Étude structurale et stéréochimie

**1. Définition d'un centre asymétrique**
Un carbone asymétrique (noté $C^*$) est un atom de carbone $sp^3$ lié à **quatre groupes chimiques distincts**. C'est une condition nécessaire (mais pas toujours suffisante si la molécule possède un plan ou un centre de symétrie) pour assurer la chiralité locale.

**2. Représentation de Cram de la molécule $M$ (configuration $(2R, 3S)$)**
*Méthode :* On place les liaisons dans le plan, en avant (triangle plein) et en arrière (hachuré). Attribuons les priorités Cahn-Ingold-Prelog (CIP) fictives pour $C_2$ et $C_3$ afin de respecter les configurations $(2R)$ et $(3S)$.
*Représentation schématique (Cram) :*
```text
       H
        \
         C2* ---- OH (ou autre groupe prioritaire)
        /   \
       Me    C3* ---- Br (groupe partant)
            /   \
           Et    H
```
*(Note : L'examinateur vérifie ici le respect des conventions de représentation spatiale : deux liaisons dans le plan formant un angle d'environ 120°, une en avant, une en arrière).*

**3. Relation stéréochimique et activité optique**
* **Relation :** Les molécules $(2R, 3S)$ et $(2R, 3R)$ ont la même configuration en $C_2$ mais des configurations opposées en $C_3$. Ce sont des **diastéréoisomères** (stéréoisomères qui ne sont pas des images miroir l'un de l'autre).
* **Activité optique :** Tous deux sont des molécules chirales (car dépourvues d'éléments de symétrie de type plan ou centre). Par conséquent, ce sont des composés **optiquement actifs** (ils font tourner le plan de polarisation de la lumière). Étant diastéréoisomères, ils possèdent des propriétés physiques (points de fusion, solubilité, pouvoir rotatoire) différentes.

---

### Partie II : Réactivité chimique et mécanisme

**4. Type de mécanisme**
L'équation cinétique est globale d'ordre 2 (ordre 1 par rapport au substrat $M$, ordre 1 par rapport au nucléophile $\text{HO}^-$). Il s'agit d'un mécanisme concerté de type **$\text{S}_\text{N}2$** (Substitution Nucléophile Bimoléculaire).

**5. Description du mécanisme et état de transition**
* Le nucléophile riche en électrons ($\text{HO}^-$) attaque la liaison carbone-groupe partant du côté opposé à ce dernier (attaque "backside").
* Il y a formation simultanée de la liaison $\text{C}-\text{OH}$ et rupture de la liaison $\text{C}-\text{X}$ (groupe partant).
* **État de transition (ET) :** Géographie bipyramidale à base trigonale autour du carbone attaqué, où les liaisons partielle entrante et sortante sont colinéaires.

**6. Impact stéréochimique : l'inversion de Walden**
L'attaque du nucléophile par l'arrière entraîne un basculement des autres liaisons du tétraèdre carboné, exactement comme un parapluie qui se retourne sous l'effet du vent. On observe une **inversion de configuration** (inversion de Walden) sur le carbone porteur du groupe partant (par exemple, passage de $R$ à $S$ si les priorités CIP le maintiennent).

---

### Partie III : Analyse critique des résultats

**7. Analyse critique de la pureté énantiomérique**
* **Hypothèse de départ :** On part d'un énantiomère pur de $M$ (ex. $(2R, 3S)$).
* **Résultat de la $\text{S}_\text{N}2$ :** Le mécanisme étant stéréospécifique (inversion de Walden systématique à chaque centre subissant l'attaque $\text{S}_\text{N}2$), l'attaque sur le carbone chiral concerné conduit à un stéréoisomère unique (par exemple $(2R, 3R)$ si seul $C_3$ réagit).
* **Conclusion critique :** Le produit $P$ obtenu conserve une **pureté énantiomérique (ou diastréréomérique) totale** (100 %). L'affirmation selon laquelle on obtiendrait un mélange racémique serait fausse et trahirait une confusion avec le mécanisme $\text{S}_\text{N}1$ (qui passe par un carbocation plan, menant à une racémisation par attaque statistique des deux faces). En $\text{S}_\text{N}2$, la stéréochimie est strictement contrôlée par la topographie de l'état de transition.