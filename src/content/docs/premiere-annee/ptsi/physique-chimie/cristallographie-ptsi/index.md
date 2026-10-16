---
title: 'Cours : Cristallographie géométrique et solide'
description: 'Synthèse officielle du cours et démonstrations pour CPGE PTSI.'
---

## 📌 1. Définitions & Cadre d'étude

La cristallographie géométrique et l'étude de l'état solide cristallin reposent sur la description de l'arrangement périodique des entités chimiques (atomes, ions, molécules) dans l'espace tridimensionnel.

*   **Cristal :** Solide dont la structure microscopique est caractérisée par une périodicité tridimensionnelle rigoureuse.
*   **Réseau cristallin :** Ensemble de points géométriques périodiques, appelés *noeuds*, définis par des vecteurs de translation fondamentale $(\vec{a}, \vec{b}, \vec{c})$ non coplanaires. Tout noeud du réseau est repéré par le vecteur de translation $\vec{T} = u\vec{a} + v\vec{b} + w\vec{c}$ où $(u, v, w) \in \mathbb{Z}^3$.
*   **Maille élémentaire :** Plus petit volume de l'espace dont la répétition par translation selon les vecteurs du réseau permet de reconstituer tout le cristal.
*   **Maille conventionnelle :** Maille choisie pour refléter au mieux les symétries du réseau. Elle est caractérisée par ses paramètres de maille : les trois arêtes $a, b, c$ et les trois angles $\alpha, \beta, \gamma$.
*   **Motif :** Entité chimique (atome, ion, molécule) associée à chaque nœud du réseau. 
    $$\text{Cristal} = \text{Réseau} + \text{Motif}$$
*   **Compacité ($c$) :** Volume occupé par les entités chimiques (assimilées à des sphères dures) dans la maille, rapporté au volume total de la maille :
    $$c = \frac{V_{\text{occupé}}}{V_{\text{maille}}}$$
*   **Masse volumique théorique ($\rho$) :** Exprimée par la relation :
    $$\rho = \frac{Z \cdot M}{N_A \cdot V_{\text{maille}}}$$
    où $Z$ est le nombre d'entités par maille, $M$ la masse molaire, et $N_A$ la constante d'Avogadro.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème : Calcul de la multiplicité (ou population) $Z$ d'une maille
Un nœud ou un constituant situé à un sommet, une arête, une face ou au centre d'une maille est partagé par plusieurs mailles contiguës. 

*   Sommet partagé par $8$ mailles $\implies contribution = 1/8$
*   Arête partagée par $4$ mailles $\implies contribution = 1/4$
*   Face partagée par $2$ mailles $\implies contribution = 1/2$
*   Intérieur de la maille $\implies contribution = 1$

### Démonstration clé : Compacité de la structure Cubique à Faces Centrées (CFC)
Objectif: Établir la compacité $c$ d'un cristal CFC en fonction du rayon $R$ des sphères.*

1. **Description de la maille CFC :** 
   Des nœuds aux 8 sommets et au centre des 6 faces. Le paramètre de la maille cubique est noté $a$.
2. **Calcul de $Z$ :**
   $$Z = 8 \times \left(\frac{1}{8}\right) + 6 \times \left(\frac{1}{2}\right) = 1 + 3 = 4 \text{ atomes par maille}.$$
3. **Relation entre $a$ et $R$ :**
   Les sphères sont en contact selon la diagonale d'une face du cube. La longueur de cette diagonale vaut $4R$ (deux rayons pour l'atome facial et un rayon pour chaque atome de sommet). 
   Par application du théorème de Pythagore dans une face :
   $$\text{diagonale}^2 = a^2 + a^2 = 2a^2 = (4R)^2 = 16R^2$$
   $$\text{D'ou} \quad a = \frac{4R}{\sqrt{2}} = 2\sqrt{2}R$$
4. **Calcul du volume de la maille et des sphères :**
   $$V_{\text{maille}} = a^3 = (2\sqrt{2}R)^3 = 16\sqrt{2}R^3$$
   $$V_{\text{occupé}} = Z \times \left(\frac{4}{3}\pi R^3\right) = 4 \times \frac{4}{3}\pi R^3 = \frac{16}{3}\pi R^3$$
5. **Calcul final de la compacité :**
   $$c = \frac{\frac{16}{3}\pi R^3}{16\sqrt{2}R^3} = \frac{\pi}{3\sqrt{2}} \approx 0.74$$
   La structure CFC correspond à un empilement compact maximal (empilement de type $ABCABC...$).

---

## 💡 3. Méthodes de calcul & Algorithmes

### Méthode pour déterminer la coordinence d'un site ou d'un atome
1. **Définition :** La coordinence (ou nombre de coordination, $NC$) est le nombre de plus proches voisins d'une entité donnée.
2. **Algorithme de lecture de maille :**
   * Choisir une origine (par exemple, un sommet ou un centre).
   * Identifier les centres des entités situées à la plus petite distance $d$ de cette origine.
   * Compter ces entités en tenant compte de la géométrie de la maille.
   * *Exemple (CFC) :* Un atome au sommet a pour plus proches voisins les atomes situés au centre des faces adjacentes. La distance est $a/\sqrt{2}$ et leur nombre est $NC = 12$.

### Méthode pour identifier la nature des sites interstitiels (structures ioniques ou métalliques)
Dans un réseau compact (HC ou CFC), il existe deux types de sites interstitiels formés par les sphères :
*   **Sites tétraédriques ($T$) :** Delimités par $4$ sphères formant un tétraèdre. Leur nombre est égal à $2Z$.
*   **Sites octaédriques ($O$) :** Delimités par $6$ sphères formant un octaèdre. Leur nombre est égal à $Z$.
*   *Coordonnées réduites :* Pour un réseau CFC, les sites octaédriques sont situés au centre du cube $\left(\frac{1}{2}, \frac{1}{2}, \frac{1}{2}\right)$ et au milieu de chaque arête. Les sites tétraédriques sont situés aux centres des $8$ petits cubes de fraction $1/8$ de volume $\left(\frac{1}{4}, \frac{1}{4}, \frac{1}{4}\right)$.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confondre les rayons et les paramètres géométriques :** 
   Ne jamais écrire $a = 2R$ dans un réseau autre que le réseau cubique simple. Toujours rechercher le contact interatomique effectif (qui se fait le long d'une arête pour le CS, d'une diagonale du cube pour le CCC, et d'une diagonale de face pour le CFC).
2. **Erreur d'unité dans le calcul de la masse volumique :** 
   Attention à l'homogénéité des unités lors de l'application de $\rho = \frac{Z \cdot M}{N_A \cdot V}$. Si $a$ est en nanomètres ($\text{nm}$ ou $10^{-9}\text{m}$), le volume $V$ doit être converti en $\text{m}^3$ ou en $\text{cm}^3$ en accord avec l'expression de $\rho$ demandée (souvent en $\text{g}\cdot\text{cm}^{-3}$).
3. **Oubli de la contribution interne dans le calcul de $Z$ :** 
   Un atome entièrement situé à l'intérieur de la maille (comme le site interstitiel central ou l'atome central du CCC) compte pour $1$ entier ($Z_{\text{interne}} = 1$), il ne faut pas lui appliquer de facteur fractionnaire.
4. **Mauvaise attribution de la formule stœchiométrique pour les cristaux ioniques :** 
   Pour un cristal type $\text{NaCl}$ ou $\text{CsCl}$, vérifier que la proportion des ions cations/anions dans la maille respecte la neutralité électrique globale de la formule chimique macroscopique.