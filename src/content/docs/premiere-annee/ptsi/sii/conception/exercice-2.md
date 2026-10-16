---
title: 'Exercice 2 : Schémas cinématiques'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse cinématique d'un mécanisme de basculement de benne

## Énoncé

On s'intéresse au mécanisme de levage et de basculement de la benne d'un camion de chantier. Le système complet est modélisé dans le plan de symétrie $(O, \vec{x}, \vec{z})$. 

Le mécanisme est composé des éléments suivants (voir figure de description schématique) :
*   Le **châssis (0)**, considéré comme le bâti fixe du système.
*   La **benne (1)**, en liaison pivot d'axe $(A, \vec{y})$ avec le châssis (0).
*   Le **vérin hydraulique**, lui-même décomposé en deux sous-ensembles en liaison glissière :
    *   Le **corps du vérin (2)**, relié au châssis (0) par une liaison pivot d'axe $(B, \vec{y})$.
    *   La **tige du vérin (3)**, reliée à la benne (1) par une liaison pivot d'axe $(C, \vec{y})$.

On note :
*   $\mathcal{R}_0(O, \vec{x}, \vec{y}, \vec{z})$ le repère lié au châssis (0).
*   $\mathcal{R}_1(A, \vec{x}_1, \vec{y}, \vec{z}_1)$ le repère lié à la benne (1), avec $(\vec{x}, \vec{x}_1) = \theta \, \vec{y}$.

---

## Questions

1. **Identification des classes d'équivalence cinématique** : 
   Définir les différentes pièces ou sous-ensembles constituant le mécanisme et justifier la constitution des classes d'équivalence cinématique $\{0\}$, $\{1\}$, $\{2\}$ et $\{3\}$.

2. **Recherche des liaisons et de leurs caractéristiques géométriques** :
   Pour chaque liaison entre les classes d'équivalence, donner le nom, le type, le centre géométrique et l'orientation de ses éléments caractéristiques (axe ou normale).

3. **Établissement du graphe des liaisons** :
   Tracer le graphe des liaisons du mécanisme en faisant figurer les notations des classes d'équivalence et les caractéristiques géométriques des liaisons.

4. **Tracé du schéma cinématique minimal** :
   Proposer un schéma cinématique minimal du mécanisme dans le plan $(\vec{x}, \vec{z})$.

5. **Analyse critique et limites du modèle** :
   Le modèle cinématique parfait établi ci-dessus néglige certains phénomènes réels (jeux, déformations élastiques, frottements). Discuter de l'impact de ces hypothèses sur la validité du modèle géométrique et cinématique, en particulier au voisinage des positions extrêmes du vérin.

---

## Pistes et Méthode

*   **Question 1 :** Pour définir une classe d'équivalence, il faut recenser les pièces indéformables entre lesquelles aucun mouvement relatif n'est possible. Attention à bien analyser le vérin (corps + tige).
*   **Question 2 :** Utilisez les hypothèses de liaisons pivots et glissière énoncées dans le texte. Traduisez-les en termes de degrés de liberté (DDL).
*   **Question 3 & 4 :** Le graphe des liaisons est un outil topologique. Le schéma cinématique doit respecter les normes en vigueur (représentation plane, couleurs normalisées facultatives mais rigueur des symboles technologiques).
*   **Question 5 :** Pensez aux efforts transmis dans les liaisons pivots $A$, $B$ et $C$ lorsque la benne est en charge maximale. Qu'implique la présence de jeux fonctionnels sur la précision de la position de la benne ?

---

## Corrigé pas à pas

### 1. Identification des classes d'équivalence cinématique
*   **Classe $\{0\}$ (Châssis) :** Regroupe le châssis du camion, le bâti fixe du système ainsi que les axes d'articulation ancrés dans ce dernier. C'est la référence fixe ($\text{repère } \mathcal{R}_0$).
*   **Classe $\{1\}$ (Benne) :** Regroupe la structure mécano-soldée de la benne.
*   **Classe $\{2\}$ (Corps du vérin) :** Regroupe le corps cylindrique du vérin ainsi que ses embouts de fixation solidaires.
*   **Classe $\{3\}$ (Tige du vérin) :** Regroupe la tige du vérin et l'embout solidaire de l'axe $C$.

### 2. Caractéristiques des liaisons
*   **Liaison $L_{01}$ entre $\{0\}$ et $\{1\}$ :** 
    *   Nom : Liaison Pivot d'axe $(A, \vec{y})$.
    *   Degrés de liberté : 1 rotation ($\theta$).
*   **Liaison $L_{02}$ entre $\{0\}$ et $\{2\}$ :** 
    *   Nom : Liaison Pivot d'axe $(B, \vec{y})$.
    *   Degrés de liberté : 1 rotation.
*   **Liaison $L_{13}$ entre $\{1\}$ et $\{3\}$ :** 
    *   Nom : Liaison Pivot d'axe $(C, \vec{y})$.
    *   Degrés de liberté : 1 rotation.
*   **Liaison $L_{23}$ entre $\{2\}$ et $\{3\}$ :** 
    *   Nom : Liaison Glissière de direction $\vec{u}$ (axe longitudinal du vérin).
    *   Degrés de liberté : 1 translation.

### 3. Graphe des liaisons

```text
       (0) Châssis
      /           \
     / Pivot       \ Pivot
   (A, y)         (B, y)
   /                 \
(1) Benne --- (3) Tige --(2) Corps du vérin
        \           /
         \         /
          Pivot   Glissière
          (C, y)  (direction vérin)
```
*(Note : Le graphe forme une boucle fermée $(0) - (1) - (3) - (2) - (0)$, ce qui caractérise un mécanisme à structure bouclée / hyperstatique).*

### 4. Schéma cinématique minimal
Dans le plan $(O, \vec{x}, \vec{z})$ :
*   Le point $A$ est fixe sur (0), la benne (1) est représentée par un solide reliant $A$ et $C$.
*   Le point $B$ est fixe sur (0).
*   Le segment $[BC]$ matérialise le vérin, composé du corps (2) ancré en $B$ et de la tige (3) liée en $C$ à la benne.
*   Les symboles normalisés de pivots sont représentés en $A$, $B$ et $C$, et le symbole de glissière est porté par le corps du vérin.

### 5. Analyse critique et limites du modèle
Le modèle cinématique parfait proposé repose sur des hypothèses simplificatrices qu'il convient de nuancer :
1.  **Hypothèse de pièces indéformables :** En réalité, sous l'effet de la charge utile (matériaux transportés dans la benne), les bras de la benne, la tige du vérin et le châssis subissent des **déformations élastiques** (flexion, compression). Le positionnement réel de la benne diffère donc du modèle géométrique théorique.
2.  **Présence de jeux fonctionnels :** Les liaisons pivots nécessitent des jeux pour fonctionner sans grippage. Ces jeux génèrent des micro-déplacements parasites (battements) qui amplifient les vibrations, particulièrement lors de la mise en pression du circuit hydraulique.
3.  **Frottements dans les liaisons et la glissière du vérin :** Le modèle ne prend pas en compte les efforts dissipatifs par frottement sec ou visqueux, ce qui modifie l'effort réel à fournir par le vérin par rapport au calcul statique pur.
4.  **Singularités cinématiques :** Aux positions extrêmes (benne totalement baissée ou totalement levée), l'alignement géométrique de certains points (par exemple $B, C$ et $A$) peut conduire à des configurations singulières où la manipulabilité du mécanisme est compromise ou engendre des efforts immenses dans les liaisons (phénomène de arc-boutement).