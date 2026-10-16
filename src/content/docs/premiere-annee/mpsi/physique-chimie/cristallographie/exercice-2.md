---
title: 'Exercice 2 : Compacité et sites interstitiels'
description: 'Problème d entraînement type concours.'
---

# Problème : Étude cristallographique des structures compactes et insertion

**Mots-clés :** *Empilements compacts, compacité, sites octaédriques et tétraédriques, stœchiométrie, limites du modèle des sphères dures.*

---

## I. Énoncé

La modélisation de l'état cristallin à l'état condensé repose souvent sur le modèle des sphères dures (MSD). Ce problème se propose d'étudier géométriquement l'empilement des sphères pour deux structures de référence de la cristallographie minérale : la structure cubique à faces centrées (CFC) et la structure hexagonale compacte (HC). Dans un second temps, on s'intéresse à l'insertion d'éléments plus petits au sein des lacunes de ces structures (sites interstitiels) pour former des cristaux ioniques ou des alliages interstitiels, avant d'aborder les limites physiques de ces modélisations.

Données numériques et constantes utiles :
* Rayon des atomes constituant le réseau hôte : $R$
* Rayon d'une entité insérée : $r$
* $\sqrt{2} \approx 1{,}414$
* $\sqrt{3} \approx 1{,}732$
* $\pi \approx 3{,}142$

---

## II. Questions

### Partie A : Géométrie et compacité des empilements compacts
1. Rappeler la définition de la compacité $C$ d'une maille cristalline.
2. Établir la relation géométrique entre le paramètre de maille $a$ et le rayon $R$ des sphères pour un réseau cubique à faces centrées (CFC).
3. Déterminer le nombre de motifs par maille dans un réseau CFC, puis calculer sa compacité. Exprimer le résultat sous forme décimale.
4. L'empilement hexagonal compact (HC) possède la même compacité que le CFC. Justifier rapidement pourquoi sans redémontrer le calcul, en précisant la différence d'empilement des plans (séquence d'empilement).

### Partie B : Étude des sites interstitiels
Dans un empilement compact de sphères, des espaces vides subsistent, appelés sites interstitiels. On distingue les sites tétraédriques et les sites octaédriques.
5. **Sites octaédriques :** 
   a. Dans une maille CFC, situer les positions des sites octaédriques (par la symétrie de la maille). En déduire le nombre total de sites octaédriques par maille CFC.
   b. Sachant qu'il y a 4 motifs par maille CFC, quel est le rapport $\frac{N_{\text{sites octa}}}{N_{\text{motifs}}}$ ?
   c. Déterminer géométriquement la condition limite sur le rapport de rayon $x = \frac{r}{R}$ pour qu'une sphère de rayon $r$ puisse s'insérer dans un site octaédrique sans déformer le réseau hôte.
6. **Sites tétraédriques :**
   a. Justifier que le nombre de sites tétraédriques par maille dans un réseau CFC est égal à 8.
   b. Établir la condition limite sur le rapport $x = \frac{r}{R}$ pour un site tétraédrique.

### Partie C : Application aux cristaux ioniques (Modèle ionique)
7. On considère un cristal ionique formé d'un réseau hôte d'anions $\mathrm{X^-}$ formant un empilement CFC, les cations $\mathrm{M^+}$ occupant la totalité des sites octaédriques. 
   a. Quelle est la stœchiométrie du cristal obtenu ?
   b. Sachant que le rayon de l'anion est $R_{\mathrm{X^-}} = 180\text{ pm}$, déterminer l'intervalle de valeurs du rayon du cation $R_{\mathrm{M^+}}$ pour lequel cette structure est stable géométriquement selon le modèle des sphères dures.

### Partie D : Analyse critique du modèle
8. Le modèle des sphères dures présente des limites intrinsèques lorsqu'on l'applique à des solides réels. Proposer une analyse critique argumentée en abordant :
   * La nature de la liaison chimique (isotropie vs anisotropie).
   * La constance du rayon atomique.
   * L'effet de la température et de la pression.

---

## III. Pistes et indications

* **Q2 :** Penser à la diagonale d'une face du cube où les sphères sont tangentes entre elles.
* **Q3 :** Compter les atomes aux sommets ($8 \times \frac{1}{8}$) et aux faces ($6 \times \frac{1}{2}$).
* **Q5.c :** Regarder la coupe passant par le centre du cube et deux arêtes opposées, ou un plan contenant un site octaédrique au centre de l'arête.
* **Q6.b :** Le centre d'un site tétraédrique est situé aux $\frac{1}{4}$ des grandes diagonales du cube.
* **Q8 :** Penser à la différence entre liaisons métalliques, covalentes et ioniques. Le rayon d'un ion dépend-il de son environnement (coordination) ?

---

## IV. Corrigé pas à pas

### Partie A : Géométrie et compacité des empilements compacts
1. **Définition :** La compacité $C$ est le rapport du volume occupé par les sphères (assimilées à des boules indéformables) contenues dans la maille sur le volume total de la maille $V_{\text{maille}}$ :
   $$C = \frac{N_{\text{motif}} \times V_{\text{sphère}}}{V_{\text{maille}}} = \frac{N_{\text{motif}} \times \left(\frac{4}{3}\pi R^3\right)}{a^3 \text{ (ou équivalent)}} \quad (\text{sans unité})$$

2. **Paramètre de maille CFC :** 
   Dans un réseau CFC, les sphères sont tangentes selon la diagonale d'une face du cube. La longueur de cette diagonale vaut $4R$. Par application du théorème de Pythagore dans le plan de la face :
   $$\sqrt{2} a = 4R \implies a = \frac{4R}{\sqrt{2}} = 2\sqrt{2}R$$

3. **Nombre de motifs et compacité CFC :**
   * Sommets : $8 \times \frac{1}{8} = 1$
   * Faces : $6 \times \frac{1}{2} = 3$
   * Total : $N_{\text{motif}} = 1 + 3 = 4$ par maille.
   
   Volume de la maille : $V_{\text{maille}} = a^3 = (2\sqrt{2}R)^3 = 16\sqrt{2}R^3$.
   
   Compacité :
   $$C = \frac{4 \times \left(\frac{4}{3}\pi R^3\right)}{16\sqrt{2}R^3} = \frac{\frac{16}{3}\pi R^3}{16\sqrt{2}R^3} = \frac{\pi}{3\sqrt{2}} \approx \frac{3{,}1416}{3 \times 1{,}4142} \approx 0{,}74$$
   La compacité est donc de $74\,\%$.

4. **Comparaison HC et CFC :**
   L'empilement CFC correspond à une séquence de plans ...ABCABC... tandis que l'empilement HC correspond à une séquence ...ABABAB... Dans les deux cas, les plans d'atomes sont empilés de manière à occuper les creux du plan inférieur. Le taux de remplissage géométrique maximal de l'espace par des sphères identiques est le même ($74\,\%$), d'où une compacité identique.

---

### Partie B : Étude des sites interstitiels
5. **Sites octaédriques :**
   a. Dans une maille CFC, les sites octaédriques se situent au centre de chaque arête du cube (il y en a $12 \times \frac{1}{4} = 3$) et au centre du cube ($1$). Soit un total de $4$ sites octaédriques par maille.
   b. Le rapport est $\frac{N_{\text{sites octa}}}{N_{\text{motifs}}} = \frac{4}{4} = 1$. Il y a autant de sites octaédriques que de motifs.
   c. Pour un site au centre d'une arête, les sphères du réseau hôte tangentes sont situées aux extrémités de cette arête (distance interatomique $2R$). La distance du centre du site au centre des atomes hôtes vaut $R$. Le site est limité par un carré de côté $2R$ et de diagonale $2(R+r)$. 
   Geometricement : $2(R+r) = 2R\sqrt{2} \implies r = (\sqrt{2}-1)R \approx 0{,}414 R$.
   Le rapport limite est $x_{\text{lim}} = \sqrt{2}-1 \approx 0{,}414$.

6. **Sites tétraédriques :**
   a. Les sites tétraédriques sont situés à l'intérieur de la maille CFC, au quart des grandes diagonales. Chaque octant du cube en contient un, soit $8$ sites par maille. Le rapport est $\frac{8}{4} = 2$ sites tétraédriques par motif.
   b. Par un raisonnement géométrique similaire basé sur le tétraèdre régulier formé par les 4 sphères hôtes entourant le site, on trouve la condition limite :
   $$x_{\text{lim}} = \sqrt{\frac{3}{2}} - 1 \approx 1{,}225 - 1 = 0{,}225$$

---

### Partie C : Application aux cristaux ioniques
7. **Stœchiométrie et rayon limite :**
   a. Le réseau hôte $\mathrm{X^-}$ compte 4 ions par maille CFC. Il y a 4 sites octaédriques, tous occupés par des cations $\mathrm{M^+}$. La formule chimique du cristal est donc $\mathrm{MX}$.
   b. Pour que la structure soit stable sans qu'il y ait de "contact anion-anion" instable (les anions du réseau ne doivent pas se chevaucher, ce qui repousserait les charges de même signe), le rayon du cation doit respecter la condition géométrique du site octaédrique :
   $$\frac{R_{\mathrm{M^+}}}{R_{\mathrm{X^-}}} \ge \sqrt{2} - 1 \approx 0{,}414$$
   A.N. : $R_{\mathrm{M^+}} \ge 0{,}414 \times 180\text{ pm} = 74{,}5\text{ pm}$.

---

### Partie D : Analyse critique du modèle
8. **Analyse critique des limites du modèle des sphères dures :**
   * **Nature de la liaison chimique :** Le modèle assimile les entités à des boules de billard indéformables. Or, dans un cristal ionique, les liaisons sont électrostatiques (isotropes) mais les ions ont des nuages électroniques déformables (polarisabilité). Dans un cristal covalent, les liaisons sont fortement directionnelles (ex : diamant, structure tetraédrique avec une compacité très faible de $34\,\%$), ce que le MSD ne peut pas prédire.
   * **Constance du rayon atomique :** Le MSD suppose que le rayon $R$ d'un atome ou d'un ion est constant. Or, le rayon ionique dépend de sa coordinence (nombre de voisins immédiats) : plus un ion est entouré, plus il attire d'anions/cations, ce qui modifie sa taille apparente (règles de Pauling).
   * **Effet de la température et de la pression :** Le modèle est statique à $0\text{ K}$. À température ambiante, l'agitation thermique provoque une dilatation et des vibrations anharmoniques. Sous haute pression (comme dans le manteau terrestre), les atomes se déforment et changent de coordinence (transition de phase vers des structures plus compactes), invalidant l'hypoténuse rigide des sphères dures.