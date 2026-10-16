---
title: 'Exercice 2 : Liaisons équivalentes dans un mécanisme complexe'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse cinématique et recherche de liaisons équivalentes dans un mécanisme complexe de train avant automobile

## Énoncé

Dans le cadre de l'étude du train avant d'un véhicule de tourisme à haute performance, on s'intéresse à la modélisation cinématique de la liaison entre le porte-fusée (sur lequel est fixée la roue) et le châssis du véhicule. Le mécanisme étudié est une épure de guidage de type "train multibras" (figure conceptuelle).

On définit le repère lié au châssis $R_0 = (O, \vec{x}_0, \vec{y}_0, \vec{z}_0)$, considéré comme galiléen. 
* L'axe $(\text{O}, \vec{x}_0)$ représente l'axe longitudinal du véhicule (dirigé vers l'avant).
* L'axe $(\text{O}, \vec{y}_0)$ représente l'axe transversal (dirigé vers la gauche).
* L'axe $(\text{O}, \vec{z}_0)$ est vertical (dirigé vers le haut).

Le porte-fusée (solide $S$) est relié au châssis (solide $0$) par l'intermédiaire de quatre branches indépendantes modélisées par des barres ou des bras articulés par des rotules ou des pivots. Plus précisément, on isole un sous-ensemble du mécanisme comportant :
1. Un bras supérieur $\text{B}_1$ raccordé au châssis par un pivot d'axe $(\text{A}_1, \vec{y}_0)$ et au porte-fusée $S$ par une rotule de centre $\text{C}_1$.
2. Un bras inférieur avant $\text{B}_2$ raccordé au châssis par une rotule de centre $\text{A}_2$ et au porte-fusée $S$ par une rotule de centre $\text{C}_2$.
3. Un bras inférieur arrière $\text{B}_3$ raccordé au châssis par une rotule de centre $\text{A}_3$ et au porte-fusée $S$ par une rotule de centre $\text{C}_3$.
4. Une biellette de direction $\text{B}_4$ raccordée à la crémaillère (fixe dans $R_0$ pour cette étude) par une rotule en $\text{A}_4$ et au porte-fusée en $\text{C}_4$ par une rotule.

### Données géométriques et ordres de grandeur réalistes :
* Les dimensions caractéristiques du porte-fusée sont de l'ordre de $\text{LC} = 300\text{ mm}$.
* Les jeux fonctionnels dans les articulations rotules sont estimés à $\Delta j = 0{,}05\text{ mm}$.
* Les efforts maximaux transmis dans la biellette de direction lors d'un freinage en appui atteignent $F_{\max} = 4500\text{ N}$.

---

## Questions

1. **Modélisation locale :** Pour chacun des 4 bras $\text{B}_i$ ($i \in \{1, 2, 3, 4\}$), préciser la nature des liaisons aux extrémités et déterminer le torseur cinématique de la liaison équivalente entre le solide $S$ et le châssis $0$ induit par **chaque** bras pris isolément.
2. **Mobilité et nombre cyclomatique :** Établir le graphe des liaisons du mécanisme constitué du châssis $0$, du porte-fusée $S$ et des 4 branches $\text{B}_1, \text{B}_2, \text{B}_3, \text{B}_4$. Calculer le nombre cyclomatique $y$ du graphe et en déduire la mobilité utile $Mu$ et la mobilité interne $Mi$ du mécanisme.
3. **Recherche de la liaison équivalente globale :** Par application de la composition des torseurs cinématiques ou par intersection des torseurs d'ազկակցություն (liaisons), déterminer la nature et les caractéristiques géométriques (centre, axes) de la liaison équivalente globale $L_{eq}(S \to 0)$.
4. **Analyse critique et limites du modèle :** En raisonnant sur les ordres de grandeur des efforts et des dimensions, analyser l'hypothèse de "corps rigides" pour les bras. Quel phénomène physique négligé dans l'approche cinématique pure vient perturber le comportement réel du mécanisme ?

---

## Pistes et méthodologie

* **Question 1 :** Un bras rigide à deux rotules se comporte comme une bielle transmettant uniquement un effort uniaxial selon sa ligne de centres. Quel est l'impact sur le torseur cinématique associé ?
* **Question 2 :** Rappeler la formule de Grübler-Kutzbach pour les mécanismes spatiaux : $Mo - Mi = 6(n - 1) - \sum_{i=1}^{p} (6 - \text{Id}_i)$ où $\text{Id}_i$ est l'indicateur de mobilité de la liaison $i$.
* **Question 3 :** Procéder par association de liaisons en parallèle. L'intersection des espaces vectoriels des torseurs cinématiques permet de trouver le torseur global.
* **Question 4 :** Penser aux deformabilités élastiques locales (contacts sphériques) et globales (flexion des bras) face aux efforts intenses ($4500\text{ N}$).

---

## Corrigé pas à pas

### 1. Modélisation locale des branches
* **Bras $\text{B}_1$ (Pivot + Rotule) :** Le bras $\text{B}_1$ est en liaison pivot d'axe $(\text{A}_1, \vec{y}_0)$ avec $0$ et rotule de centre $\text{C}_1$ avec $S$. C'est un sous-ensemble indéformable. Le torseur cinématique de $B_1$ par rapport à $0$ permet une rotation autour de $\vec{y}_0$. Sa transmission géométrique impose que le mouvement de $\text{C}_1$ par rapport à $0$ soit un cercle centré sur $(\text{A}_1, \vec{y}_0)$.
* **Bras $\text{B}_2, \text{B}_3, \text{B}_4$ (Bielles à deux rotules) :** Ce sont des solides soumis à deux actions mécaniques (aux points $\text{A}_i$ et $\text{C}_i$). Ce sont des **bielles**. Le torseur cinématique de la liaison équivalente entre $S$ et $0$ induite par une bielle $\text{B}_i$ autorise 5 rotations (toutes sauf celle dont l'axe est porté par la ligne $(\text{A}_i\text{C}_i)$ si on considère le mouvement relatif du solide $S$). Plus rigoureusement, le torseur cinématique $\{\mathcal{V}(\text{B}_i/0)\}$ exprime que la vitesse de translation le long de $(\text{A}_i\text{C}_i)$ est nulle au premier ordre, ce qui restreint un degré de liberté de translation.

### 2. Graphe des liaisons et mobilités
* Nombre de solides $n = 6$ (Châssis $0$, Porte-fusée $S$, et les 4 branches $\text{B}_1$ à $\text{B}_4$).
* Le graphe présente des boucles fermées. Le nombre cyclomatique est $y = \text{L} - \text{N} + 1$. Avec $L = 8$ liaisons élémentaires et $N = 6$, $y = 8 - 6 + 1 = 3$.
* Application de la formule de mobilité (espace à 3 dimensions, $6$ degrés de liberté par mouvement) :
  La liaison pivot de $\text{B}_1/0$ offre 1 ddl, la rotule $\text{C}_1$ offre 3 ddl. Les bielles $\text{B}_2, \text{B}_3, \text{B}_4$ possèdent des liaisons rotules-rotules (équivalent à 5 ddl chacune).
  Le calcul rigoureux conduit à une **mobilité utile $Mu = 1$** (correspondant à la commande de direction ou au débattement de suspension selon le blocage de la crémaillère) et des **mobilités internes $Mi = 3$** (liées aux rotations propres des bielles sur elles-mêmes autour de leur axe $(\text{A}_i\text{C}_i)$, qui n'ont aucune influence sur le mouvement de la roue).

### 3. Recherche de la liaison équivalente globale $L_{eq}(S \to 0)$
L'intersection des torseurs cinématiques des 4 branches contraint le mouvement du porte-fusée $S$ par rapport au châssis $0$ :
* La bielle $\text{B}_2$ et la bielle $\text{B}_3$ fixent deux points du porte-fusée par rapport à des points du châssis, créant virtuellement un axe instantané de rotation.
* L'adjonction du bras $\text{B}_1$ et de la biellette de direction $\text{B}_4$ surcondea le système.
* **Résultat :** L'intersection cinématique de ces 4 conditions géométriques indépendantes restreint le mouvement général de $S/0$ à **un seul degré de liberté**. 
* Par identification, la liaison équivalente $L_{eq}(S \to 0)$ est une **liaison pivot d'axe optimisé** (axe de braquage virtuel, non matérialisé physiquement par une broche mécanique, passant par les rotules de pivotement virtuel haut et bas).

### 4. Analyse critique et limites du modèle
* **Hypothèse de rigidité vs Réalité :** Sous l'effet des efforts maximaux $F_{\max} = 4500\text{ N}$ (notamment dans la biellette $\text{B}_4$), les lois de la résistance des matériaux montrent que les bras subissent des déformations élastiques (flexion, compression). Un raccourcissement ou un allongement de seulement $\Delta L = 0{,}1\text{ mm}$ d'une bielle induit une variation parasite de l'angle de braquage (phénomène de *toe-change* induit par l'effort).
* **Jeux fonctionnels :** Les jeux de $\Delta j = 0{,}05\text{ mm}$ dans les rotules provoquent des micro-débattements non modélisés par le torseur cinématique rigide pur, créant de l'hystérésis dans la réponse du mécanisme et une sensibilité aux vibrations (shimmy).
* **Conclusion critique :** Le modèle cinématique rigide est indispensable pour la synthèse géométrique de l'épure de direction (cinématique pure), mais il est **strictement insuffisant** pour l'analyse vibratoire et le comportement dynamique fin, où le couplage élastocinématique (flexibilité des liaisons et des corps) prédomine.