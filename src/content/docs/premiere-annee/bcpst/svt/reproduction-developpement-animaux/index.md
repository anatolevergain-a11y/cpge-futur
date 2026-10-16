---
title: 'Cours : Reproduction et développement embryonnaire animal'
description: 'Synthèse officielle du cours et démonstrations pour CPGE BCPST.'
---

# Fiche de Cours : Reproduction et Développement Embryonnaire Animal
Niveau: ** Première année BCPST  
**Matière :** Sciences de la Vie et de la Terre (SVT)  

---

## 📌 1. Définitions & Cadre d'étude

La reproduction sexuée chez les Métazoaires implique la fusion de deux gamètes haploïdes ($n$) pour former une cellule-œuf diploïde ($2n$), la **fécondation**, garantissant la constance du caryotype de l'espèce et la diversité génétique.

*   **Gamétogenèse :** Ensemble des processus cellulaires (mitoses, méiose, différenciation) aboutissant à la formation des gamètes (spermatozoïdes et ovocytes) au sein des gonades (testicules et ovaires).
*   **Fécondation :** Rencontre et fusion des gamètes. Elle comprend des étapes de reconnaissance spécifique (spécificité d'espèce et d'individu), d'activation du métabolisme de l'ovocyte et de **syngamie** (fusion des pronoyaux).
*   **Développement embryonnaire précoce :** Séquence d'événements morphogénétiques menant de la cellule-œuf à l'organisme pluricellulaire fonctionnel. Il se décompose classiquement en :
    1.  **La segmentation (ou clivage) :** Successions de mitoses rapides sans croissance cellulaire, transformant la cellule-œuf en **blastula**.
    2.  **La gastrulation :** Mouvements cellulaires morphogénétiques majeurs mettant en place les trois **feuillets embryonnaires** (ectoderme, mésoderme, endoderme) et l'archentéron.
    3.  **L'organogenèse précoce :** Notamment la neurulation chez les Chordés (mise en place du tube neural et de la chorde).
*   **Lécithocyte :** Œuf caractérisé par la présence de réserves nutritives (vitellus). On distingue les œufs oligolécithes (peu de vitellus, ex : Oursin), hétérolécithes (vitellus moyen et gradient, ex : Amphibiens) et télolécithes (beaucoup de vitellus, ex : Oiseaux).

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### A. Polarité de l'œuf et modalités de la segmentation
Le type de segmentation dépend directement de la quantité et de la répartition du vitellus (loi de Balfour). Le vitellus freine les mitoses.

*   **Segmentation holoblastique (totale) :** Concerne les œufs oligolécithes et hétérolécithes. Le plan de clivage traverse l'ensemble de la cellule.
*   **Segmentation méroblastique (partielle) :** Concerne les œufs télolécithes. Le clivage est restreint au disque germinatif (cytoplasme non vitellin).

### B. Mécanismes cellulaires de la gastrulation
La gastrulation repose sur des mouvements cellulaires fondamentaux coordonnés :
1.  **L'invagination :** Repliement d'une feuillet de cellules vers l'intérieur (ex : blastopore chez l'oursin).
2.  **L'involution :** Enroulement d'une couche cellulaire externe vers l'intérieur autour d'un bord (lèvre blastoporale).
3.  **L'épibolie :** Extension d'une feuillet cellulaire recouvrant l'ensemble de l'embryon.
4.  **La migration (ou délamination / immigration) :** Déplacement de cellules isolées.

### C. Démonstration clé : L'induction embryonnaire (Expérience de Spemann et Mangold - 1924)
*   **Problématique :** Comment se met en place l'axe dorso-ventral et l'induction du système nerveux ?
*   **Protocole :** Greffe de la lèvre dorsale du blastopore d'un jeune gastrula d'Amphibien (triton donneur) dans la région ventrale d'une autre gastrula (triton receveur).
*   **Résultats :** Le greffon induit la formation d'un **second axe embryonnaires** complet (notamment une seconde plaque neurale et un second tube neural), formé pour partie de cellules du donneur et pour partie de cellules du receveur (réorientées dans leur devenir).
*   **Conclusion :** La lèvre dorsale du blastopore agit comme un **organisateur** (centre organisateur de Spemann). Elle émet des signaux inductifs (molécules antagonistes des BMP comme la nogamine, la chordine) qui modifient le devenir cellulaire des tissus environnants (compétence des cellules cibles).

---

## 💡 3. Méthodes de calcul & Algorithmes

En BCPST, l'analyse quantitative porte souvent sur la cinétique des clivages et la morphométrie embryonnaire.

### A. Calcul du nombre de blastomères en segmentation holoblastique isolécithe
Si la segmentation est totale et synchrone, le nombre de cellules $N$ après $n$ cycles de division mitotique suit la relation :
$$N = 2^n$$

*   **Algorithme d'analyse d'une coupe histologique d'embryon :**
    1.  Identifier la présence ou l'absence de cavité (blastocœle $\rightarrow$ stade blastula).
    2.  Repérer l'asymétrie éventuelle (pôle animal pigmenté vs pôle végétatif riche en vitellus).
    3.  Identifier les figures de mitose et estimer le rapport nucléo-plasmique (qui augmente lors de la segmentation puisque la masse totale reste constante alors que le nombre de noyaux augmente, sans phase $G_1$ ni $G_2$ au début).

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Confondre vitellus et cytoplasme actif :** Le vitellus est une réserve inerte (deutoplasme). Les divisions cellulaires sont toujours plus rapides au pôle animal (pauvre en vitellus) qu'au pôle végétatif (riche en vitellus).
2.  **Oublier la définition de l'induction :** L'induction n'est pas une simple diffusion passive, c'est une interaction entre des cellules inductrices et des cellules compétentes (qui expriment les récepteurs adéquats à un moment précis du développement).
3.  **Erreur de terminologie sur les feuillets :** Ne pas confondre **ectoderme** (épiderme, système nerveux), **mésoderme** (squelette, muscles, sang) et **endoderme** (revêtement du tube digestif et annexes). 
4.  **Mauvaise interprétation des axes :** Chez les Amphibiens, le point d'impact du spermatozoïde détermine le plan de symétrie bilatérale (rotation corticale), le pôle opposé devenant dorsal. Ne pas inverser pôle animal et pôle végétatif dans l'analyse des coupes de blastula.