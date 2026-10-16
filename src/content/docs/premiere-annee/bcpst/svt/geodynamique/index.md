---
title: 'Cours : Géodynamique interne'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Géodynamique interne – Fiche de Cours BCPST1

**Matière :** Sciences de la Vie et de la Terre (SVT)  
Niveau: ** Première année BCPST  
**Préambule méthodologique :** En BCPST, la géodynamique interne ne se limite pas à la description des objets géologiques. Elle repose sur la compréhension des transferts thermiques et mécaniques à l'échelle globale de la Terre, mobilisant la physique et la chimie des matériaux terrestres.

---

## I. Structure thermique et mécanique de la Terre

### 1. Définitions et gradients
*   **Géotherme (définition) :** Courbe représentant l'évolution de la température en fonction de la profondeur $z$ (ou de la pression $P$) au sein de la Terre.
*   **Gradient géothermique :** $\frac{dT}{dz}$. Près de la surface, il est en moyenne de $30 \text{ }^\circ\text{C}\cdot\text{km}^{-1}$, mais il varie fortement selon les contextes géodynamiques.
*   **Conductivité thermique ($\lambda$) :** Capacité d'un milieu à transférer la chaleur par conduction (mode dominant dans la lithosphère).

### 2. Du modèle thermique au modèle mécanique : la rhéologie
La Terre est zonée mécaniquement en fonction du comportement des roches face aux contraintes (ductile vs fragile) et au point de fusion.

*   **Lithosphère :** Enveloppe rigide (comportement élastique puis fragile/ductile), mise en évidence par la propagation des ondes sismiques et la flexure lithosphérique. Elle comprend la croûte et le manteau lithosphérique supérieur.
*   **Asthosphère :** Enveloppe plus ductile, siège de mouvements convectifs. Sa limite supérieure correspond souvent à l'isotherme $1300 \text{ }^\circ\text{C}$.

---

## II. Magmatismes et contextes géodynamiques

Le magmatisme est la manifestation en surface ou en profondeur de la fusion partielle du manteau ou de la croûte. 

### 1. Théorème fondamental de la fusion des roches
Une roche du manteau (péridotite) est à l'état solide dans les conditions normales du manteau. Pour obtenir un magma, il faut croiser le **solidus** de la roche (courbe de début de fusion). Ce croisement peut s'obtenir par trois mécanismes thermodynamiques majeurs :

```
             Pression (P)
                  ^
                  |      Solidus (Début de fusion)
                  |        \
                  |         \  Fusion par décompression (Dorsale)
                  |          \
                  |           \    Fusion par flux d'eau (Subduction)
                  |            \  /
                  |             \/  Point triple / Conditions modifiées
                  |             /\
                  |            /  \ Fusion par apport thermique (Point chaud)
                  +---------------------> Température (T)
```

### 2. Déclenchement de la fusion partielle
1.  **Fusion par décompression adiabatique :** 
    *   *Mécanisme :* Remontée rapide d'un matériel mantellique chaud sans échange thermique notable avec l'encaissant ($\Delta Q = 0$). La baisse de pression déplace le point d'état au-delà du solidus.
    *   *Contexte :* Dorsales océaniques, rifts continentaux, panaches mantelliques (points chauds).
2.  **Fusion par abaissement du solidus (hydratation / flux d'eau) :**
    *   *Mécanisme :* L'incorporation d'eau (ou de volatils) dans le système perturbe les liaisons chimiques des minéraux silicatés, abaissant considérablement la température du solidus.
    *   *Contexte :* Zones de subduction (métamorphisme prograde de la plaque plongeante libérant des fluides dans le manteau sus-jacent).
3.  **Fusion par apport thermique (Advection de chaleur) :**
    *   *Mécanisme :* Injection de magmas basiques chauds (issus du manteau) à la base de la croûte continentale, provoquant la fusion de cette dernière.
    *   *Contexte :* Domaines de subduction/collision (anatexie crustale).

---

## III. Rhéologie, tectonique des plaques et cinématique

### 1. La cinématique des plaques (Bilan global)
La surface de la Terre est découpée en plaques lithosphériques rigides en mouvement les unes par rapport aux autres sur l'asthosphère ductile.

*   **Divergence :** Accrétion lithosphérique (dorsales). Le flux géothermique y est maximal.
*   **Convergence :** Subduction ou obduction (disparition de lithosphère océanique) et collision (orogenèse).
*   **Décrochement :** Conservation de la surface lithosphérique (ex: faille de San Andreas).

### 2. Moteur de la tectonique des plaques
Le moteur de la machine Terre est thermique : il s'agit de la **convection mantellique** (évacuation de la chaleur interne par convection à l'état solide).
*   *Forces motrices principales :* La traction de la plaque plongeante (*slab pull*) et la poussée à la dorsale (*ridge push*). La force prépondérante est le *slab pull* en raison de la forte densité du panneau plongeant refroidi.

---

## IV. Méthodes en Géodynamique Interne

1.  **Étude tomographique (Sismologie) :**
    *   *Principe :* Mesure des anomalies de vitesse des ondes sismiques ($P$ et $S$).
    *   *Interprétation :* Une anomalie de vitesse *lente* ($\delta v < 0$) traduit un matériel chaud (panache, asthosphère). Une anomalie *rapide* ($\delta v > 0$) traduit un matériel froid et dense (plaque plongeante lithosphérique).
2.  **Tracé des diagrammes P-T-t (Pression-Température-temps) :**
    *   Utilisation des paragenèses minérales métamorphiques pour reconstituer l'histoire thermodynamique d'une roche au cours de son exhumation ou de son enfouissement.

---

## V. Pièges classiques aux concours (À ÉVITER)

*   **Piège 1 (Magmatisme de subduction) :** Dire que la fusion dans les zones de subduction est due à une élévation de température. **Faux !** C'est un apport d'eau (baisse du solidus) qui provoque la fusion partielle du manteau sus-jacent (le coin du manteau).
*   **Piège 2 (Volcanisme de point chaud) :** Confondre point chaud et dorsale. Un point chaud est lié à un panache mantellique profond (origine thermique, potentiellement à l'interface noyau-manteau $D''$), indépendant des limites de plaques.
*   **Piège 3 (Confusion croûte/lithosphère) :** Ne pas amalgamer *croûte* et *lithosphère*. La lithosphère continentale comprend la croûte continentale *et* le manteau lithosphéricque supérieur. La limite thermique et mécanique ne coïncide pas nécessairement avec la limite chimique (Moho).
*   **Piège 4 (Vocabulaire métamorphique) :** Parler de "fusion" pour le métamorphisme. Le métamorphisme est une transformation à l'état **solide**. S'il y a fusion, on entre dans le domaine du magmatisme (anatexie).