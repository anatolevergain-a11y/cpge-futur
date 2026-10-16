---
title: 'Exercice 1 : Sites interstitiels'
description: 'Problème d entraînement type concours officiel.'
---

# Problème : Étude géométrique et énergétique des sites interstitiels dans les structures cristallines

**Matière :** Physique-Chimie (PCSI)  
Chapitre: ** Cristallographie et solides  
**Thème :** Sites interstitiels, compacité et modélisation rigide  

---

## 1. Énoncé

Dans les structures cristallines compactes ou semi-compactes, les entités (atomes, ions) sont modélisées par des sphères rigides indéformables. L'empilement de ces sphères laisse entre elles des espaces vides appelés **sites interstitiels**. La nature (octaédrique ou tétraédrique) et la taille de ces sites déterminent la capacité d'un réseau hôte à accueillir des éléments d'alliage ou des ions étrangers (formation de solutions solides interstitielles ou de composés intermétalliques).

L'objectif de ce problème est de déterminer géométriquement la taille maximale des atomes pouvant s'insérer dans les sites octaédriques et tétraédriques du réseau cubique à faces centrées (CFC), puis de discuter des limites de ce modèle géométrique par une analyse critique.

---

## 2. Questions

### Partie A : Rappels sur le réseau Cubique à Faces Centrées (CFC)
1. **Q1.** Définir la coordinence et la compacité d'un réseau cristallin. Rappeler la valeur de la compacité maximale $c$ pour un empilement compact de sphères identiques de rayon $R$.
2. **Q2.** Exprimer le paramètre de maille $a$ d'un réseau CFC en fonction du rayon $R$ des sphères constituant le réseau hôte.

### Partie B : Étude géométrique des sites interstitiels dans le CFC
3. **Q3.** **Site octaédrique :** 
   - a. Localiser les sites octaédriques dans la maille CFC (par des arguments de symétrie et de position).
   - b. En se plaçant dans une section judicieuse de la maille (par exemple, un plan passant par le centre et les arêtes), déterminer le rayon maximal $r_{\text{oct}}$ d'une sphère insérée dans un site octaédrique en fonction du rayon $R$ du réseau hôte. Calculer le rapport $\rho_{\text{oct}} = \frac{r_{\text{oct}}}{R}$.
4. **Q4.** **Site tétraédrique :** 
   - a. Combien de sites tétraédriques compte-t-on par maille CFC ? Préciser leur position géométrique.
   - b. Déterminer le rayon maximal $r_{\text{tet}}$ d'une sphère pouvant s'insérer dans un site tétraédrique en fonction de $R$. Calculer le rapport $\rho_{\text{tet}} = \frac{r_{\text{tet}}}{R}$.

### Partie C : Application chimique et analyse critique
5. **Q5.** Le carbure de fer (ou cémentite $Fe_3C$, ou solutions solides de carbone dans le fer $\gamma$-austénite) met en jeu l'insertion d'atomes de carbone (rayon $r_C \approx 0{,}077 \text{ nm}$) dans le fer cristallisant dans le système CFC (rayon $Fe$, $R \approx 0{,}126 \text{ nm}$). 
   - a. Quel type de site (octaédrique ou tétraédrique) le carbone est-il susceptible d'occuper sans distorsion majeure du réseau ?
   - b. Proposer une analyse critique rigoureuse des limites du modèle des sphères rigides appliqué à ce type de système réel.

---

## 3. Pistes de réflexion

* **P1 (Compacité) :** Penser à exprimer le volume occupé par les sphères dans un volume de maille élémentaire. Pour le CFC, il y a $4$ motifs par maille.
* **P2 (Géométrie CFC) :** Le contact entre les atomes du réseau hôte se fait le long des diagonales des faces du cube.
* **P3 (Site octaédrique) :** Le centre de la maille et les milieux des arêtes sont des positions de haute symétrie. Le site octaédrique est tangent à $6$ sphères du réseau. Dans un plan carré, exprimez la diagonale en fonction de $R$ et $r_{\text{oct}}$.
* **P4 (Site tétraédrique) :** Ces sites sont situés au quart des diagonales intérieures du cube. Un tétraèdre régulier relie un sommet et les trois centres des faces concourantes.

---

## 4. Corrigé pas à pas

### Partie A : Rappels sur le réseau CFC
* **Q1.** 
  * La **coordinence** est le nombre de plus proches voisins d'une entité dans le cristal.
  * La **compacité** $c$ est le rapport du volume des sphères contenues dans la maille sur le volume total de la maille : 
    $$c = \frac{V_{\text{sphères}}}{V_{\text{maille}}}$$
  * Pour un empilement compact (CFC ou HCP), la compacité maximale est de :
    $$c = \frac{\pi}{3\sqrt{2}} \approx 0{,}74 \text{ (soit } 74\% \text{)}$$

* **Q2.** 
  Dans un réseau CFC, les sphères sont en contact le long de la diagonale d'une face du cube. Si $a$ est le paramètre de maille et $R$ le rayon des sphères :
  $$\sqrt{2}a = 4R \implies a = \frac{4R}{\sqrt{2}} = 2\sqrt{2}R$$

---

### Partie B : Étude géométrique des sites interstitiels
* **Q3.** **Site octaédrique :**
  * *a. Localisation :* Il y a un site octaédrique au centre de la maille (coordonnées $\left(\frac{1}{2}, \frac{1}{2}, \frac{1}{2}\right)$) et un au milieu de chaque arête.
  * *b. Calcul du rayon :* Considérons le plan équatorial passant par le centre du cube et les arêtes (carré de côté $a$). Le site octaédrique est au centre de ce carré. Il est en contact avec $4$ atomes situés aux sommets du carré (qui sont des milieux d'arêtes ou des centres de faces selon la coupe) à une distance $R$ et $2$ atomes situés au-dessus et en dessous (centres des faces du haut et du bas).
    La condition de tangences le long d'une arête du carré donne :
    $$a = 2R + 2r_{\text{oct}}$$
    Or, d'après la question Q2, $a = 2\sqrt{2}R$. Donc :
    $$2\sqrt{2}R = 2R + 2r_{\text{oct}} \implies r_{\text{oct}} = (\sqrt{2} - 1)R$$
    A.N. : $\rho_{\text{oct}} = \sqrt{2} - 1 \approx 0{,}414$.

* **Q4.** **Site tétraédrique :**
  * *a. Localisation :* Il y a $8$ sites tétraédriques par maille CFC, situés aux centres des $8$ petits cubes de fraction de volume $\frac{1}{8}$ (par exemple en $\left(\frac{1}{4}, \frac{1}{4}, \frac{1}{4}\right)$).
  * *b. Calcul du rayon :* Le site est au centre d'un tétraèdre régulier dont les sommets sont un sommet du cube et les trois centres des faces adjacentes. La distance entre un sommet du cube et le centre d'un site tétraédrique (situé à $\frac{\sqrt{3}}{4}a$ du sommet) permet d'écrire la condition de contact :
    La distance du centre du site au sommet du réseau est $R + r_{\text{tet}}$. 
    Géométriquement, dans le petit cube de côté $\frac{a}{2}$, la diagonale spatiale vaut $\frac{\sqrt{3}}{2}a$, et le site est au milieu de cette diagonale, donc à une distance du sommet du cube égale à :
    $$\frac{1}{2} \times \left(\frac{\sqrt{3}}{2}a\right) = \frac{\sqrt{3}}{4}a$$
    On a donc :
    $$R + r_{\text{tet}} = \frac{\sqrt{3}}{4}a$$
    En remplaçant $a$ par $2\sqrt{2}R$ :
    $$R + r_{\text{tet}} = \frac{\sqrt{3}}{4}(2\sqrt{2}R) = \frac{\sqrt{6}}{2}R$$
    $$r_{\text{tet}} = \left(\frac{\sqrt{6}}{2} - 1\right)R$$
    A.N. : $\rho_{\text{tet}} = \frac{\sqrt{6}}{2} - 1 \approx 1{,}225 - 1 = 0{,}225$.

---

### Partie C : Application chimique et analyse critique
* **Q5.** 
  * *a. Choix du site :* 
    Pour le fer $Fe$ ($\gamma$, CFC), $R \approx 0{,}126 \text{ nm}$.
    * Rayon maximal pour un site octaédrique : $r_{\text{oct}} = 0{,}414 \times 0{,}126 \approx 0{,}052 \text{ nm}$.
    * Rayon maximal pour un site tétraédrique : $r_{\text{tet}} = 0{,}225 \text{ empilement} \times 0{,}126 \approx 0{,}028 \text{ nm}$.
    Le carbone a un rayon $r_C \approx 0{,}077 \text{ nm}$. 
    On constate que $r_C > r_{\text{oct}} > r_{\text{tet}}$. Le carbone est donc **trop grand** pour s'insérer de manière géométriquement parfaite dans l'un ou l'autre des sites sans modifier la structure. Néanmoins, le site **octaédrique** est nettement plus grand que le site tétraédrique ($0{,}052 \text{ nm}$ vs $0{,}028 \text{ nm}$). C'est donc le site octaédrique qui sera préférentiellement occupé, au prix d'une forte distorsion locale du réseau hôte.

  * *b. Analyse critique des limites du modèle :*
    Le modèle des sphères rigides présente plusieurs limites fondamentales :
    1. **Caractère non strictement sphérique et rigide :** Les nuages électroniques des atomes ne sont pas des boules de billard indéformables. Ils sont déformables sous l'effet des interactions électrostatiques ou covalentes.
    2. **Interaction chimique locale :** L'insertion d'un atome (comme le carbone dans le fer) introduit des liaisons chimiques (partiellement covalentes ou métalliques orientées), modifiant localement la nature des liaisons, ce que la simple géométrie dure ne prend pas en compte.
    3. **Relaxation du réseau :** Le modèle suppose que le réseau hôte reste rigide et figé lors de l'insertion. En réalité, les atomes voisins du site interstitiel subissent une **relaxation élastique** (ils s'écartent pour faire de la place), ce qui explique pourquoi le carbone parvient à s'insérer dans l'austénite malgré un rayon apparent supérieur à $r_{\text{oct}}$.