---
title: 'Exercice 1 : Schémas cinématiques'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ : Analyse cinématique et modélisation d'un système de poinçonnage industriel

*Matière : Sciences Industrielles de l'Ingénieur (SII)*  
*Filière : CPGE - PCSI*  
Chapitre: Analyse des systèmes mécaniques - Schémas cinématiques*

---

## Préambule de l'examinateur

> **Objectifs pour les candidats de PCSI :**
> Cet exercice type concours vise à évaluer votre capacité à passer d'un dessin d'ensemble ou d'une description technologique à un modèle cinématique rigoureux. Les points clés évalués sont :
> 1. L'identification correcte des classes d'équivalence cinématique.
> 2. Le recensement méthodique des liaisons mécaniques élémentaires.
> 3. L'établissement du graphe des liaisons.
> 4. La rédaction et la justification du schéma cinématique minimal, ainsi que son analyse critique.

---

## Étude du mécanisme : Le poste de poinçonnage

Le système étudié est un mécanisme de poinçonnage destiné à découper des plaques de tôle. Le schéma descriptif (partiel) fourni dans le sujet fait apparaître quatre groupements principaux de pièces (ou solides) que l'on se propose d'analyser :

*   **$S_0$ (Bâti / Châssis) :** Fixé au sol, il constitue la référence fixe du mécanisme.
*   **$S_1$ (Arbre moteur et came) :** En liaison pivot d'axe $(\text{O}, \vec{z})$ par rapport au bâti $S_0$. Il est entraîné en rotation par un motoréducteur.
*   **$S_2$ (Bielle de transmission) :** En liaison pivot d'axe $(\text{A}, \vec{z})$ par rapport à la came $S_1$, et en liaison pivot d'axe $(\text{B}, \vec{z})$ par rapport au coulisseau $S_3$. *(Note : on néglige le contact ponctuel came/poinçon pour se focaliser sur la chaîne fermée).*
*   **$S_3$ (Poinçon / Coulisseau) :** En liaison glissière de direction $\vec{y}$ par rapport au bâti $S_0$.

---

## Question 1 : Isolation et identification des classes d'équivalence cinématique

### Guidage
Une classe d'équivalence cinématique regroupe l'ensemble des pièces d'un mécanisme qui possèdent un mouvement rigide les unes par rapport aux autres (souvent assemblées par encastrement). Listez les différentes classes d'équivalence du système.

### Corrigé pas à pas
En analysant les liaisons complètes (encastrements supposés par vis, soudure ou frettage) :
*   **Classe $S_0$ :** Bâti, carter, glissière fixe. (Référence 0)
*   **Classe $S_1$ :** Arbre moteur, clavette, came de commande.
*   **Classe $S_2$ :** Corps de la bielle.
*   **Classe $S_3$ :** Coulisseau porte-poinçon, outil de poinçonnage.

Le mécanisme comporte donc **4 classes d'équivalence cinématique** : $\{S_0, S_1, S_2, S_3\}$.

---

## Question 2 : Recensement des liaisons et détermination de leurs caractéristiques géométriques

### Guidage
Pour chaque interface entre deux classes d'équivalence en contact, identifiez la liaison mécanique standard correspondante en précisant son type, son centre (ou son axe) et sa direction.

### Corrigé pas à pas
Analysons les interfaces :
1.  **Interface entre $S_0$ et $S_1$ :** L'arbre tourne par rapport au bâti selon un axe de révolution d'axe $(\text{O}, \vec{z})$.
    *   *Liaison :* **Pivot** d'axe $(\text{O}, \vec{z})$.
2.  **Interface entre $S_1$ et $S_2$ :** La came entraîne la bielle via un axe cylindrique d'axe $(\text{A}, \vec{z})$.
    *   *Liaison :* **Pivot** d'axe $(\text{A}, \vec{z})$.
3.  **Interface entre $S_2$ et $S_3$ :** La bielle est reliée au coulisseau par un axe cylindrique d'axe $(\text{B}, \vec{z})$.
    *   *Liaison :* **Pivot** d'axe $(\text{B}, \vec{z})$.
4.  **Interface entre $S_0$ et $S_3$ :** Le coulisseau se déplace en translation rectiligne de direction $\vec{y}$ dans le bâti.
    *   *Liaison :* **Glissière** de direction $\vec{y}$.

---

## Question 3 : Établissement du graphe des liaisons

### Guidage
Le graphe des liaisons est un graphe sommets-arêtes où les sommets sont les classes d'équivalence et les arêtes représentent les liaisons en précisant leurs caractéristiques (centre, axe, normale).

### Corrigé pas à pas
Le mécanisme présente une chaîne cinématique fermée ($S_0 - S_1 - S_2 - S_3 - S_0$).

```text
       [ Pivot (O, z) ]
  S0 --------------------- S1
   |                        |
   |                        | [ Pivot (A, z) ]
   |                        S2
   |                        |
   |                        | [ Pivot (B, z) ]
   ------------------------ S3
       [ Glissière (y) ]
```

*Remarque d'examinateur :* Veillez à toujours orienter et nommer clairement les axes sur votre graphe. Une erreur d'axe invalide l'ensemble de la chaîne de mobilités.

---

## Question 4 : Analyse de la mobilité et hyperstatisme

### Guidage
Calculez la mobilité cinématique $Mc$ et le degré d'hyperstatisme $h$ du mécanisme dans l'espace (ou dans le plan si le système est plan, ce qui est le cas ici car tous les axes de rotation sont parallèles à $\vec{z}$).

### Corrigé pas à pas
Le système est plan (mouvements dans le plan $(\text{O}, \vec{x}, \vec{y})$). Appliquons la formule de la statique/cinématique plane :
*   Nombre de solides : $N = 4$ ($S_0$ à $S_3$).
*   Nombre de mobilités utiles : $Mc = 1$ (rotation de l'arbre moteur $S_1$).

Recensement des mobilités locales/passives s'il y en a, ou application directe du théorème de Grübler (version plane) :
Le nombre cyclique $E = L - S + 1$ avec $L$ le nombre de liaisons et $S$ le nombre de solides.
*   $S = 4$
*   $L = 4$ (Pivot $O$, Pivot $A$, Pivot $B$, Glissière $y$)
*   $E = 4 - 4 + 1 = 1$ (une seule boucle fermée).

Dans le plan, le nombre d'inconnues cinématiques $I$ est donné par :
$$I = 3 \times (\text{nombre de mobilités}) + \sum (\text{inconnues de chaque liaison})$$
*   Pivot : 2 inconnues (bloque 2 translations) $\rightarrow 3 \times 2 = 6$
*   Glissière : 2 inconnues (1 translation, 1 rotation) $\rightarrow 2$
*   Total des degrés de liaison : $\sum d_i = 3(\text{pivot}) + 1(\text{glissière}) = 3 + 3 + 3 + 2 = 11$.

L'expression du degré d'hyperstatisme en plan est :
$$h = 3(E) - \sum \text{mobilités internes} + \dots$$
Plus rigoureusement, via la formule générale (mobilité $Mu = 1$) :
$$h = 3(S - 1) - \sum_{\text{i}} (\text{intervalles de classe de liaison}) - \text{Mu}$$
Ici :
*   $\sum d_i = 2 + 2 + 2 + 2 = 8$ (nombre total d'inconnues cinématiques scalaires dans le plan).
*   Formule plane : $h = 3 \cdot E - \sum (3 - d_i) - Mc$
*   $h = 3(1) - [(3-2) + (3-2) + (3-2) + (3-2)] - 1 = 3 - [1+1+1+1] - 1 = 3 - 4 - 1 \dots$ 
Attention, reprenons la formule standardisée en PCSI :
$$h = 6(S - 1) - \sum_{i=1}^{L} (6 - \xi_i) - \text{Mc}$$
*(où $\xi_i$ est le nombre de degrés de liberté de la liaison $i$)*.
*   $S = 4 \implies 6(3) = 18$
*   Liaisons :
    *   3 Pivots $\rightarrow \xi = 1$ (donc $6 - 1 = 5$ par pivot) $\rightarrow 3 \times 5 = 15$
    *   1 Glissière $\rightarrow \xi = 1$ (donc $6 - 1 = 5$) $\rightarrow 5$
    *   Total liaisons = $15 + 5 = 20$.
*   $h = 18 - 20 - Mc = -2 - 1 = -3$ ? Non, revoyons le calcul avec les mobilités et torseurs.

*Correction de la formule du recueil (Ece/Concours) :*
Pour un mécanisme plan :
$$h = 3(S - 1) - \sum_{\text{i}} d_i - Mc$$
où $d_i$ est le nombre d'inconnues cinématiques de la liaison dans le plan ($d = 2$ pour un pivot plan, $d = 2$ pour une glissière plane).
*   $S = 4 \implies 3(3) = 9$.
*   Liaisons : 3 pivots ($2 \times 3 = 6$) + 1 glissière ($2$) = 8.
*   $h = 9 - 8 - 1 (\text{mobilité utilie}) = 0$.

Le mécanisme est **isostatique** ($h = 0$).

---

## Question 5 : Analyse critique des résultats et limites du modèle

### Guidage
Un ingénieur ne se contente pas d'appliquer des formules : il doit valider la pertinence du modèle vis-à-vis de la réalité physique. 

### Corrigé pas à pas
1.  **Validation de l'isostatisme ($h = 0$) :** 
    *   *Avantage :* L'absence d'hyperstatisme garantit l'absence de contraintes sur-ajoutées lors du montage. Les pièces ne risquent pas de se gripper sous l'effet de dilatations thermiques ou de défauts mineurs d'usinage. C'est un point très positif pour un mécanisme industriel de poinçonnage soumis à des efforts répétés.
2.  **Limites du modèle plan et des liaisons parfaites :**
    *   *Jeux mécaniques :* Le modèle considère des liaisons parfaites (sans jeu). Or, les liaisons pivots et glissières réelles possèdent des jeux fonctionnels pour permettre le mouvement et le lubrifiant. Ces jeux peuvent induire des vibrations ou des imprécisions sur la course du poinçon lors de l'impact.
    *   *Déformations élastiques :* Sous l'effort de poinçonnage, le bâti $S_0$ et la bielle $S_2$ subissent des flexions non modélisées ici (le modèle est purement rigide).
    *   *3D vs 2D :* Bien que le mouvement soit principalement plan, les efforts de réaction sur les axes peuvent engendrer des moments de basculement hors-plan (flexion dans la direction $\vec{z}$) qui nécessiteraient une modélisation spatiale (3D) pour dimensionner le diamètre des axes $A$ et $B$.