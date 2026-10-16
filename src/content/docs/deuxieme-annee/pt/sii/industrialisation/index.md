---
title: 'Cours : Industrialisation'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Industrialisation (SI - PT/PTSI)

> **Profil du Professeur :** En CPGE PT, l'industriel n'est pas seulement décrit, il est optimisé. Cette fiche aborde l'industrialisation sous l'angle de la productivité, des choix de procédés, de la cotation et de la gestion de production, indispensables pour l'épreuve écrite et les TIPE.

---

## 1. Introduction et Définitions Fondamentales

L'**industrialisation** est l'ensemble des processus techniques, économiques et organisationnels qui permettent de passer d'un prototype (produit validé en conception) à la production en série, dans des conditions de coût, de qualité et de délai maîtrisées.

### Définitions clés :
*   **Procédé d'obtention :** Méthode physique ou chimique permettant de donner à la matière brute sa forme géométrique finale ou quasi-finale (enlèvement de matière, addition, déformation).
*   **Gamme de fabrication :** Document technologique formalisant la succession chronologique des phases, opérations et sous-opérations nécessaires à la réalisation d'une pièce.
*   **Temps Unitaire ($T_u$) :** Temps réellement passé par pièce pour une phase donnée.
*   **Cadence ($C$) :** Nombre de pièces produites par unité de temps.

---

## 2. Choix du Procédé d'Obtention

Le choix du procédé dépend de la géométrie de la pièce, des matériaux, mais surtout du **nombre de pièces à produire** (série).

### Tableau comparatif des grandes familles de procédés :

| Famille | Avantages majeurs | Limites / Inconvénients | Domaines d'application |
| :--- | :--- | :--- | :--- |
| **Usinage** (Enlèvement) | Excellente précision, bons états de surface | Perte de matière (chutes), temps de cycle parfois long | Pièces mécaniques complexes en petites/moyennes séries |
| **Moulage / Fonderie** (Addition/Changement d'état) | Formes complexes monoblocs, peu de pertes | Porosités possibles, finition souvent requise | Carter moteurs, bâtis, pièces massives |
| **Mise en forme** (Forge, emboutissage, etc.) | Fibrage du métal (bonnes caractéristiques mécaniques) | Coût élevé des outillages (matrice/poinçon) | Grandes séries, pièces de structure (automécanique) |
| **Fabrication Additive** (Impression 3D) | Liberté topologique extrême, pas d'outillage dédié | Vitesse lente, coût matière élevé, états de surface | Prototypage, séries limitées, optimisation topologique |

> **Théorème (Critère Économique de Choix) :**
> Soit $C_{total}(N) = C_{outillage} + N \times C_{pièce}$ le coût total de production pour $N$ pièces. 
> Pour un choix entre deux procédés $A$ et $B$ (avec $C_{outillage, A} > C_{outillage, B}$ et $C_{pièce, A} < C_{pièce, B}$), il existe un seuil de rentabilité $N_s$ tel que :
> $$N_s = \frac{C_{outillage, A} - C_{outillage, B}}{C_{pièce, B} - C_{pièce, A}}$$
> *Si $N > N_s$, le procédé $A$ (plus industrialisé) est économiquement plus rentable.*

---

## 3. Analyse de Fabrication et Cotation de Fabrication

La cotation de fabrication traduit les exigences fonctionnelles en cotes tolérangées directement contrôlables en atelier et réalisables par la machine.

### Méthode des Chaînes de Cotes de Fabrication :
1.  **Tracer le graphe des liaisons** et des surfaces usinées.
2.  **Identifier la cote condition** (souvent fonctionnelle, portée par le dessin de définition).
3.  **Établir la chaîne de cotes** en suivant les surfaces brutes et usinées.
4.  **Écrire l'équation aux limites** (moyennes et extrêmes) :
    $$\text{Cote Condition} = \sum \text{Cotes montantes} - \sum \text{Cotes descendantes}$$

> **Piège classique en PT :** Ne pas confondre *Cote Fonctionnelle* (exigée par le client/concepteur) et *Cote de Fabrication* (utilisée par le régleur sur machine). Une cote de fabrication s'appuie toujours sur une **surface de référence (isostatisme)**.

---

## 4. Organisation et Gestion de la Production

L'industrialisation ne s'arrête pas à la machine-outil ; elle englobe le flux des matières et des informations.

### Les Flux de Production :
*   **Production poussée (MRP - *Manufacturing Resource Planning*) :** On produit selon des prévisions de vente. (Risque de stocks importants).
*   **Production tirée (Kanban, Juste-à-Temps) :** On ne produit que ce qui est consommé par l'aval.
    *   *Avantage :* Réduction drastique des en-cours et des stocks.
    *   *Formule clé du Kanban (nombre de conteneurs $N$) :*
        $$N = \frac{C \times T_{app} (1 + \tau)}{V}$$
        Avec $C$ la consommation moyenne, $T_{app}$ le temps d'approvisionnement, $\tau$ le coefficient de sécurité, et $V$ la capacité d'un conteneur.

### OEE / TRS (Taux de Rendement Synthétique)
Indicateur incontournable évaluant l'efficacité d'un moyen de production :
$$\text{TRS} = \text{Taux de Fonctionnement} \times \text{Taux de Performance} \times \text{Taux de Qualité}$$

*   **Taux de Fonctionnement :** $\frac{\text{Temps de fonctionnement réel}}{\text{Temps d'ouverture}}$
*   **Taux de Performance :** $\frac{\text{Production réelle}}{\text{Production théorique sur le temps de fonctionnement}}$
*   **Taux de Qualité :** $\frac{\text{Nombre de pièces conformes}}{\text{Nombre total de pièces produites}}$

---

## 5. Méthode : Mener une Analyse d'Industrialisation (Épreuve Concours)

Face à une problématique d'industrialisation en concours (type Centrale-Supélec ou Mines-Ponts) :

1.  **Analyser le besoin :** Lire le cahier des charges, la cadence demandée, et le volume annuel.
2.  **Valider ou critiquer le choix du matériau et du brut :** Regarder si un gain de matière ou de masse est possible (ex: remplacer un usinage dans la masse par un forgeage).
3.  **Rédiger ou compléter une phase de gamme :**
    *   Définir la machine.
    *   Préciser le positionnement (isostatisme : 6 points d'appui).
    *   Calculer les conditions de coupe (vitesse de coupe $V_c$, avance $f$, fréquence de rotation $N = \frac{1000 V_c}{\pi \cdot D}$).
4.  **Estimer les coûts et les temps :** Calculer le temps de cycle global et vérifier l'adéquation avec la cadence requise.

---

## 6. Pièges à Éviter (Alerte Colle / Concours)

*   **Oublier l'isostatisme :** Proposer un montage d'usinage sur-contraint (plus de 6 points de contact sans redondance maîtrisée). En PT, un schéma technologique de mise en position doit être justifié par les degrés de liberté bloqués ($\text{L}_{1}, \text{L}_{2}, \text{L}_{3}, \text{R}_{1}, \text{R}_{2}, \text{R}_{3}$).
*   **Confondre Vitesse de coupe ($V_c$ en $\text{m}\cdot\text{min}^{-1}$) et Fréquence de rotation ($N$ en $\text{tr}\cdot\text{min}^{-1}$).** Une erreur d'homogénéité dans le calcul de $N$ entraîne l'invalidation immédiate de la condition de coupe.
*   **Négliger les temps masqués :** Dans le calcul du temps global d'une ligne, ne pas additionner bêtement les temps si des opérations sont faites en parallèle (ex: chargement/déchargement robotisé pendant l'usinage).