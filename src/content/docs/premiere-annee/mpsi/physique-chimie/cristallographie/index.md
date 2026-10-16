---
title: 'Cours : Cristallographie'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Cristallographie Géométrique et Cristallochimie

Ce cours traite de la description géométrique de la matière condensée cristallisée dans le cadre du **modèle des sphères dures indéformables**.

---

## I. Le modèle du cristal parfait

### 1. Définitions fondamentales

> **Définition : Cristal parfait**  
> Un cristal parfait est un solide caractérisé par une **répétition périodique et infinie dans les trois dimensions de l'espace** d'un motif structural (atome, molécule, ion ou groupe d'atomes/ions).

* **Réseau cristallin :** Ensemble discret et périodique de points, appelés **nœuds**, invariant par toute translation de vecteur :
  $$\vec{T} = u\,\vec{a} + v\,\vec{b} + w\,\vec{c} \quad \text{avec } (u,v,w) \in \mathbb{Z}^3$$
  où $(\vec{a}, \vec{b}, \vec{c})$ forme la base de référence de l'espace vectoriel.
* **Motif :** Entité chimique (atome, ion, molécule) associée à chaque nœud du réseau.
  $$\text{Cristal} = \text{Réseau} + \text{Motif}$$
* **Maille :** Parallélépipède construit sur les vecteurs $(\vec{a}, \vec{b}, \vec{c})$ permettant de paver tout l'espace par translation continue selon le réseau.
  * **Maille élémentaire (ou primitive) :** Maille de volume minimal ne contenant qu'**un seul nœud** en propre ($Z_{\text{nœud}} = 1$).
  * **Maille conventionnelle :** Maille non minimale mais choisie pour respecter et mettre en évidence les symétries globales du réseau (ex. cubique).

---

### 2. Règles de décompte des nœuds et multiplicité

Pour une maille conventionnelle donnée, un atome situé sur un élément géométrique de la maille est partagé entre plusieurs mailles adjacentes :

| Position de l'atome | Nombre de mailles partageant la position | Contribution à la maille |
| :--- | :---: | :---: |
| **Intérieur** | $1$ | $1$ |
| **Face** | $2$ | $\frac{1}{2}$ |
| **Arête** | $4$ | $\frac{1}{4}$ |
| **Sommet** | $8$ | $\frac{1}{8}$ |

> **Définition : Multiplicité (ou population) $Z$**  
> La multiplicité $Z$ est le nombre total d'entités chimiques ou de motifs appartenant en propre à la maille :
> $$Z = N_{\text{int}} + \frac{N_{\text{face}}}{2} + \frac{N_{\text{arête}}}{4} + \frac{N_{\text{sommet}}}{8}$$

---

### 3. Grandeurs caractéristiques fondamentales

#### A. Coordinence (ou indice de coordination)
Nombre des plus proches voisins d'une entité donnée dans la structure considérée (noté généralement sous la forme d'un entier, ex. : $[6]$ ou $[12]$).

#### B. Condition de contact et rayon atomique
Dans le modèle des sphères dures de rayon $R$, les atomes les plus proches sont tangents le long d'une direction cristallographique privilégiée dite **direction de contact**. Le paramètre de maille $a$ est alors relié au rayon $R$.

#### C. Compacité $C$
Fraction du volume de la maille effectivement occupée par les sphères de rayon $R$ :
$$C = \frac{V_{\text{occupé}}}{V_{\text{maille}}} = \frac{Z \times \frac{4}{3}\pi R^3}{V_{\text{maille}}}$$
Par construction physique : $0 < C \le \frac{\pi}{3\sqrt{2}} \approx 0{,}74$ (conjecture de Kepler / théorème de Hales).

#### D. Masse volumique $\rho$
Masse théorique par unité de volume de cristal macroscopique :
$$\rho = \frac{m_{\text{maille}}}{V_{\text{maille}}} = \frac{Z \cdot M}{N_A \cdot V_{\text{maille}}}$$
* $M$ : masse molaire de l'entité constituant le motif ($\text{g}\cdot\text{mol}^{-1}$ ou $\text{kg}\cdot\text{mol}^{-1}$).
* $N_A$ : constante d'Avogadro ($N_A \approx 6{,}022 \times 10^{23} \text{ mol}^{-1}$).
* $V_{\text{maille}}$ : volume de la maille ($a^3$ pour une maille cubique).

---

## II. Les réseaux métalliques cubiques

On étudie les trois réseaux cubiques d'arête $a$ : Cubique Simple (CS), Cubique Centré (CC), Cubique à Faces Centrées (CFC).

```
        CS                     CC                    CFC
     o------o               o------o               o---o--o
    /|     /|              /|  o  /|              /| /   /|
   o------o |             o------o |             o---o--o |
   | o----|-o             | o----|-o             | o----|-o
   |/     |/              |/     |/              |/   \ |/
   o------o               o------o               o---o--o
```

---

### 1. Cubique Simple (CS)

* **Description :** 1 atome à chaque sommet d'un cube d'arête $a$.
* **Multiplicité :**
  $$Z = 8 \times \frac{1}{8} = 1$$
* **Contact stérique :** Le long des arêtes du cube.
  $$a = 2R$$
* **Coordinence :** Chaque sommet possède $6$ voisins immédiats le long des axes $\pm \vec{x}, \pm \vec{y}, \pm \vec{z}$ : **Coordinence = 6**.
* **Compacité :**
  $$C_{\text{CS}} = \frac{1 \times \frac{4}{3}\pi R^3}{a^3} = \frac{\frac{4}{3}\pi R^3}{(2R)^3} = \frac{\pi}{6} \approx 0{,}524 \quad (52{,}4\%)$$

---

### 2. Cubique Centré (CC)

* **Description :** 1 atome à chaque sommet, 1 atome au centre du cube.
* **Multiplicité :**
  $$Z = 8 \times \frac{1}{8} + 1 = 2$$
* **Contact stérique :** Le long de la **grande diagonale** du cube.
  La longueur de la diagonale vaut $d = a\sqrt{3}$.
  $$a\sqrt{3} = 4R \implies a = \frac{4R}{\sqrt{3}}$$
* **Coordinence :** L'atome central est au contact direct des $8$ atomes de sommet : **Coordinence = 8**.
* **Compacité :**
  $$C_{\text{CC}} = \frac{2 \times \frac{4}{3}\pi R^3}{\left(\frac{4R}{\sqrt{3}}\right)^3} = \frac{8\pi R^3}{3} \times \frac{3\sqrt{3}}{64 R^3} = \frac{\pi\sqrt{3}}{8} \approx 0{,}680 \quad (68{,}0\%)$$

---

### 3. Cubique à Faces Centrées (CFC)

* **Description :** 1 atome à chaque sommet, 1 atome au centre de chacune des $6$ faces.
* **Multiplicité :**
  $$Z = 8 \times \frac{1}{8} + 6 \times \frac{1}{2} = 1 + 3 = 4$$
* **Contact stérique :** Le long de la **diagonale d'une face**.
  La longueur de la diagonale d'une face vaut $d_{\text{face}} = a\sqrt{2}$.
  $$a\sqrt{2} = 4R \implies a = \frac{4R}{\sqrt{2}} = 2\sqrt{2}R$$
* **Coordinence :** Un atome de sommet est entouré de $4$ atomes par plan sécant passant par ce point ($xy$, $yz$, $zx$) : $3 \times 4 = 12$. **Coordinence = 12**.
* **Compacité :**
  $$C_{\text{CFC}} = \frac{4 \times \frac{4}{3}\pi R^3}{(2\sqrt{2}R)^3} = \frac{\frac{16}{3}\pi R^3}{16\sqrt{2}R^3} = \frac{\pi}{3\sqrt{2}} = \frac{\pi\sqrt{2}}{6} \approx 0{,}740 \quad (74{,}0\%)$$
Remarque: * C'est un empilement **compact** (compacité maximale pour un empilement régulier de sphères dures identiques).

---

### 4. Tableau comparatif des réseaux cubiques purs

| Réseau | $Z$ | Direction de contact | Relation $a \leftrightarrow R$ | Coordinence | Compacité $C$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **CS** | $1$ | Arête | $a = 2R$ | $6$ | $\frac{\pi}{6} \approx 0{,}52$ |
| **CC** | $2$ | Grande diagonale | $a\sqrt{3} = 4R$ | $8$ | $\frac{\pi\sqrt{3}}{8} \approx 0{,}68$ |
| **CFC** | $4$ | Diagonale de face | $a\sqrt{2} = 4R$ | $12$ | $\frac{\pi\sqrt{2}}{6} \approx 0{,}74$ |

---

## III. Les sites interstitiels dans le réseau CFC

Les cavités laissées libres dans un réseau compact CFC d'atomes de rayon $R$ peuvent accueillir des atomes d'insertion (de rayon $r$).

### 1. Sites octaédriques (notés $[O]$)

#### A. Localisation et décompte
Un site est octaédrique s'il est entouré de $6$ atomes hôtes formant un octaèdre régulier.
* **Positions dans la maille :**
  * Au centre géométrique du cube : $(\frac{1}{2}, \frac{1}{2}, \frac{1}{2})$.
  * Au milieu de chacune des $12$ arêtes du cube : ex. $(\frac{1}{2}, 0, 0)$.
* **Nombre de sites par maille $Z_O$ :**
  $$Z_O = 1 \times 1 (\text{centre}) + 12 \times \frac{1}{4} (\text{arêtes}) = 1 + 3 = 4$$
* **Règle :** Dans un réseau CFC, il y a **autant de sites octaédriques que d'atomes du réseau** :
  $$\frac{Z_O}{Z_{\text{CFC}}} = \frac{4}{4} = 1$$

#### B. Habitabilité (ou rayon d'insertion maximal sans déformation)
Soit une sphère de rayon maximal $r_O$ insérée au centre du cube sans déformer le réseau hôte.
Le contact hôte-site se fait suivant une arête du réseau :
$$a = 2R + 2r_O$$
Or, dans le CFC non déformé : $a\sqrt{2} = 4R \implies a = 2\sqrt{2}R$.
D'où :
$$2R + 2r_O = 2\sqrt{2}R \implies r_O = (\sqrt{2} - 1)R$$
$$\frac{r_O}{R} = \sqrt{2} - 1 \approx 0{,}414$$

---

### 2. Sites tétraédriques (notés $[T]$)

#### A. Localisation et décompte
Un site est tétraédrique s'il est entouré de $4$ atomes hôtes formant un tétraèdre régulier.
* **Positions dans la maille :**
  Si l'on divise la maille CFC de côté $a$ en $8$ sous-cubes d'arête $\frac{a}{2}$, le centre de chaque sous-cube est un site $[T]$ (coordonnées $(\frac{1}{4}, \frac{1}{4}, \frac{1}{4})$ et équivalents).
* **Nombre de sites par maille $Z_T$ :**
  Les $8$ centres sont strictement à l'intérieur de la maille :
  $$Z_T = 8 \times 1 = 8$$
* **Règle :** Dans un réseau CFC, il y a **deux fois plus de sites tétraédriques que d'atomes du réseau** :
  $$\frac{Z_T}{Z_{\text{CFC}}} = \frac{8}{4} = 2$$

#### B. Habitabilité
Le centre du sous-cube est équidistant du sommet et des 3 centres de faces adjacents. La demi-grande diagonale d'un sous-cube d'arête $\frac{a}{2}$ correspond à la droite de contact hôte-site tétraédrique :
$$d_{\text{contact}} = \frac{1}{2} \times \left(\frac{a}{2}\sqrt{3}\right) = \frac{a\sqrt{3}}{4}$$
La condition de non-déformation implique le contact :
$$R + r_T = \frac{a\sqrt{3}}{4}$$
En injectant $a = \frac{4R}{\sqrt{2}}$ :
$$R + r_T = \frac{\sqrt{3}}{4} \left(\frac{4R}{\sqrt{2}}\right) = R\sqrt{\frac{3}{2}}$$
$$\frac{r_T}{R} = \sqrt{\frac{3}{2}} - 1 \approx 0{,}225$$

---

## IV. Structures cristallines ioniques et covalentes

### 1. Cristaux ioniques types

Les anions (souvent plus volumineux, rayon $R_-$) forment un sous-réseau, et les cations (plus petits, rayon $r_+$) occupent les sites interstitiels.

#### A. Structure Chlorure de Césium ($\text{CsCl}$)
* **Description :** Les anions $\text{Cl}^-$ forment un réseau cubique simple ($a$). Le cation $\text{Cs}^+$ occupe le centre du cube (site cubique).
* **Coordinence :** $(8 : 8)$. Chaque $\text{Cs}^+$ est entouré de $8\ \text{Cl}^-$, et inversement.
* **Formule et multiplicité :** $Z(\text{Cl}^-) = 8 \times \frac{1}{8} = 1$, $Z(\text{Cs}^+) = 1$. Formule $\text{CsCl}$.
* **Contact stérique :** Sur la grande diagonale du cube :
  $$a\sqrt{3} = 2(R_- + r_+)$$

#### B. Structure Chlorure de Sodium ($\text{NaCl}$)
* **Description :** Les anions $\text{Cl}^-$ forment un réseau CFC. Les cations $\text{Na}^+$ occupent **la totalité des sites octaédriques $[O]$**.
* **Coordinence :** $(6 : 6)$.
* **Formule et multiplicité :**
  $$Z(\text{Cl}^-) = 4 \quad (\text{réseau CFC})$$
  $$Z(\text{Na}^+) = 4 \quad (\text{tous les sites } [O])$$
  Soit $4$ unités formulaires $\text{NaCl}$ par maille ($Z = 4$).
* **Contact stérique :** Suivant une arête du cube :
  $$a = 2(R_- + r_+)$$

#### C. Structure Sulfure de Zinc : Blende ($\text{ZnS}$)
* **Description :** Les anions $\text{S}^{2-}$ forment un réseau CFC. Les cations $\text{Zn}^{2+}$ occupent **la moitié des sites tétraédriques $[T]$** (un sous-cube sur deux).
* **Coordinence :** $(4 : 4)$.
* **Formule et multiplicité :**
  $$Z(\text{S}^{2-}) = 4 \quad (\text{CFC})$$
  $$Z(\text{Zn}^{2+}) = \frac{1}{2} \times Z_T = \frac{1}{2} \times 8 = 4$$
  Soit $4$ unités formulaires $\text{ZnS}$ par maille.
* **Contact stérique :** Le long de la grande diagonale d'un sous-cube d'arête $\frac{a}{2}$ :
  $$\frac{a\sqrt{3}}{4} = R_- + r_+$$

---

### 2. Critères de stabilité stérique (Règles de Pauling simplifiées)

Pour qu'une structure ionique soit stable géométriquement :
1. Les ions de signes opposés doivent être au contact : $d_{+-} = r_+ + R_-$.
2. Les ions de même signe ne doivent pas s'interpénétrer (au minimum tangents) : $d_{--} \ge 2 R_-$.

En posant $\gamma = \frac{r_+}{R_-}$, on en déduit les intervalles de stabilité de coordinence :

| Type de site | Coordinence | Rapport géométrique limite ($\gamma_{\min}$) | Gamme de stabilité |
| :---: | :---: | :---: | :---: |
| **Linéaire** | $2$ | $0$ | $0 \le \gamma < 0{,}155$ |
| **Triangulaire** | $3$ | $\frac{2}{\sqrt{3}}-1 \approx 0{,}155$ | $0{,}155 \le \gamma < 0{,}225$ |
| **Tétraédrique** | $4$ | $\sqrt{\frac{3}{2}}-1 \approx 0{,}225$ | $0{,}225 \le \gamma < 0{,}414$ |
| **Octaédrique** | $6$ | $\sqrt{2}-1 \approx 0{,}414$ | $0{,}414 \le \gamma < 0{,}732$ |
| **Cubique** | $8$ | $\sqrt{3}-1 \approx 0{,}732$ | $0{,}732 \le \gamma \le 1{,}000$ |

---

### 3. Solides covalents : Le Carbone Diamant

* **Description :** Atomes de carbone occupant un réseau **CFC + la moitié des sites tétraédriques $[T]$** (structure type ZnS où tous les atomes sont des carbones).
* **Multiplicité :**
  $$Z = 4\,(\text{CFC}) + 4\,(\text{sites } [T]) = 8 \text{ atomes de C par maille}$$
* **Coordinence :** Chaque atome est lié tétraédriquement à $4$ voisins : **Coordinence = 4** (hybridation $\text{sp}^3$).
* **Condition de tangence :**
  $$\frac{a\sqrt{3}}{4} = 2 R_C \implies a = \frac{8 R_C}{\sqrt{3}}$$
* **Compacité :**
  $$C_{\text{diamant}} = \frac{8 \times \frac{4}{3}\pi R_C^3}{\left(\frac{8 R_C}{\sqrt{3}}\right)^3} = \frac{\pi\sqrt{3}}{16} \approx 0{,}340 \quad (34{,}0\%)$$
Remarque: * C'est une structure très ouverte (faible compacité), stabilisée par la directivité et l'énergie des liaisons covalentes.

---

## V. Méthodes types de résolution

### Méthode 1 : Établir la masse volumique d'un composé ionique
1. Identifier la géométrie de la maille et ses paramètres ($a, b, c$).
2. Calculer le nombre d'unités formulaires par maille ($Z$).
3. Exprimer la masse de la maille : $m = \frac{Z \cdot M}{N_A}$.
4. Calculer le volume de la maille : $V = a^3$ (système cubique).
5. Appliquer la formule en veillant scrupuleusement aux unités :
   $$\rho = \frac{Z \cdot M}{N_A \cdot a^3}$$
   *Astuce conversion :* Si $a$ est en $\text{pm}$ ($10^{-12}\text{ m} = 10^{-10}\text{ cm}$), alors $a^3$ en $\text{cm}^3$ vaut $(a_{[\text{pm}]} \times 10^{-10})^3$. Avec $M$ en $\text{g}\cdot\text{mol}^{-1}$, on obtient $\rho$ directement en $\text{g}\cdot\text{cm}^{-3}$.

### Méthode 2 : Prévoir la structure d'un solide ionique $A_x B_y$
1. Calculer le rapport des rayons ioniques : $\gamma = \frac{r_{\text{cation}}}{R_{\text{anion}}}$.
2. Comparer $\gamma$ aux rapports critiques de Pauling :
   * Si $0{,}225 \le \gamma < 0{,}414 \implies$ Coordinence $[4]$ privilégiée (Type Blende $\text{ZnS}$).
   * Si $0{,}414 \le \gamma < 0{,}732 \implies$ Coordinence $[6]$ privilégiée (Type $\text{NaCl}$).
   * Si $0{,}732 \le \gamma < 1{,}000 \implies$ Coordinence $[8]$ privilégiée (Type $\text{CsCl}$).
3. Vérifier que la stœchiométrie globale impose le rapport d'occupation des sites interstitiels.

---

## VI. Pièges classiques et erreurs à éviter

> **Pièges récurrents en concours :**
>
> 1. **Confusion arête / diagonale :**
>    Ne pas confondre la diagonale d'une face ($a\sqrt{2}$) et la grande diagonale du cube ($a\sqrt{3}$).
>    * Contact CFC $\implies$ diagonale de face : $4R = a\sqrt{2}$.
>    * Contact CC $\implies$ grande diagonale : $4R = a\sqrt{3}$.
>
> 2. **Rapport $Z$ versus formule chimique :**
>    Dans $\text{NaCl}$, $Z(\text{Na}^+) = 4$ et $Z(\text{Cl}^-) = 4$. Le nombre d'unités formulaires par maille est $Z = 4$, et non $8$. La masse molaire à injecter dans $\rho$ est $M(\text{NaCl})$ avec $Z=4$ (ou la masse atomique avec $Z$ correspondant, mais ne jamais compter deux fois les masses).
>
> 3. **Erreurs de conversions d'unités :**
>    * $1\ \text{\AA} = 10^{-10}\text{ m} = 0{,}1\text{ nm} = 100\text{ pm}$.
>    * $1\ \text{g}\cdot\text{cm}^{-3} = 10^3\ \text{kg}\cdot\text{m}^{-3}$.
>
> 4. **Géométrie des sites $[T]$ :**
>    Les sites tétraédriques du CFC ne sont **pas** situés sur les diagonales des faces, mais sur les axes ternaires (grandes diagonales de la maille), à une distance $\frac{a\sqrt{3}}{4}$ de chaque sommet.