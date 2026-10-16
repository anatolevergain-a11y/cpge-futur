---
title: 'Exercice 1 : Déformation des roches, plis et failles'
description: 'Problème d entraînement type concours pour BCPST sur l analyse rhéologique, cinématique et microstructurale d un prisme orogénique.'
---

### 🌐 Énoncé du problème / Cadre d'étude

L'étude des zones orogéniques externes (par exemple l'avant-pays alpin ou jurassien) montre la coexistence de déformations cassantes (failles normales, inverses, décrochantes) et ductiles (plis, schistosités, linéations). L'objectif de ce problème est d'analyser la mécanique de la fracturation crustale, la transition fragile-ductile, ainsi que la géométrie et les micro-mécanismes associés au plissement au sein d'une couverture sédimentaire calcaro-marneuse soumise à un raccourcissement horizontal tectonique.

#### Données physiques et géologiques :
* Accélération de la pesanteur : $g = 9{,}81 \text{ m}\cdot\text{s}^{-2}$
* Masse volumique moyenne des roches sédimentaires : $\rho = 2\,500 \text{ kg}\cdot\text{m}^{-3}$
* Gradient géothermique moyen : $G = 30 \text{ K}\cdot\text{km}^{-1} = 30 \text{ }^{\circ}\text{C}\cdot\text{km}^{-1}$
* Température de surface : $T_0 = 15 \text{ }^{\circ}\text{C}$
* Coefficient de friction interne (loi de Byerlee pour la croûte supérieure) : $\mu = \tan\phi = 0{,}6$ (avec $\phi$ l'angle de frottement interne)
* Cohésion moyenne des calcaires compacts : $C_0 = 20 \text{ MPa}$
* Constante des gaz parfaits : $R = 8{,}314 \text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$

---

### ❓ Questions progressives

#### Partie I : État de contrainte et fracturation (Théorie d'Anderson et critère de Coulomb)

1. **Régime tectonique et orientation des contraintes :**
   Dans une zone de chevauchement compressive intracontinentale, définir les contraintes principales $\sigma_1$, $\sigma_2$ et $\sigma_3$ ($\sigma_1 \ge \sigma_2 \ge \sigma_3$, conventions de compression positive en géologie structurale). En appliquant le modèle d'Anderson, préciser l'orientation de ces contraintes par rapport au plan horizontal et à la surface terrestre.

2. **Pendage théorique d'un chevauchement :**
   Le critère de rupture fragile de Mohr-Coulomb s'écrit :
   $$|\tau| = C_0 + \mu \cdot \sigma_n$$
   où $\sigma_n$ est la contrainte normale et $\tau$ la cission appliquée au plan de rupture.
   * Démontrer que l'angle aigu $\theta$ que fait le plan de faille avec la direction de la contrainte principale maximale $\sigma_1$ vérifie :
     $$\theta = \frac{\pi}{4} - \frac{\phi}{2}$$
   * En déduire la valeur numérique de $\theta$ pour $\mu = 0{,}6$. Quel est alors le pendage théorique des failles inverses néoformées à l'affleurement ?

3. **Rôle des fluides et fracturation hydraulique :**
   On introduit la pression de fluide $P_f$ dans les pores de la roche via la contrainte effective de Terzaghi : $\sigma' = \sigma - P_f$.
   * Expliquer graphiquement ou analytiquement l'effet d'une surpression de fluide ($\lambda = P_f / \sigma_v > 0{,}4$, où $\sigma_v$ est la contrainte lithostatique) sur le cercle de Mohr.
   * Quel type structural caractéristique observe-t-on couramment dans les charnières de plis en contexte de surpression de fluide ?

#### Partie II : Profil rhéologique et transition fragile-ductile

4. **Résistance à la rupture fragile :**
   En régime compressif, la contrainte différentielle nécessaire à la rupture fragile le long de failles préexistantes (cohésion négligeable $C \approx 0$) peut s'exprimer sous la forme simplifiée :
   $$(\sigma_1 - \sigma_3)_{\text{fragile}} = \alpha \cdot \rho g z (1 - \lambda)$$
   Pour $\mu = 0{,}6$, on établit que $\alpha \approx 3{,}0$. En supposant une pression hydrostatique classique ($\lambda = 0{,}4$), calculer $(\sigma_1 - \sigma_3)_{\text{fragile}}$ à $z = 3 \text{ km}$ et à $z = 8 \text{ km}$.

5. **Déformation ductile et loi d'écoulement :**
   En profondeur, la déformation de la calcite devient ductile par fluage-dislocation. La relation entre la contrainte différentielle et la vitesse de déformation $\dot{\varepsilon}$ est régie par la loi de fluage :
   $$\dot{\varepsilon} = A \cdot (\sigma_1 - \sigma_3)^n \exp\left(-\frac{Q}{R T}\right)$$
   avec $A = 1{,}0 \times 10^{-4} \text{ MPa}^{-n}\cdot\text{s}^{-1}$, $n = 3$, et l'énergie d'activation $Q = 210 \text{ kJ}\cdot\text{mol}^{-1}$.
   * Exprimer $(\sigma_1 - \sigma_3)_{\text{ductile}}$ en fonction de $\dot{\varepsilon}$, $T$, $A$, $n$ et $Q$.
   * Pour une vitesse de déformation orogénique typique $\dot{\varepsilon} = 1{,}0 \times 10^{-14} \text{ s}^{-1}$, calculer la contrainte différentielle ductile à $z = 8 \text{ km}$ et à $z = 12 \text{ km}$.
   * Évaluer la profondeur approximative $z_{\text{TFD}}$ de la transition fragile-ductile dans ce secteur.

#### Partie III : Analyse géométrique et microstructurale d'un pli

6. **Classification morphologique de Ramsay :**
   Dans le secteur d'étude, un banc calcaire présente un pli cylindrique. L'analyse de l'épaisseur orthogonale $t_\alpha$ montre que celle-ci est constante quel que soit le pendage $\alpha$ des flancs ($t_\alpha = t_0$).
   * À quelle classe de la classification de Ramsay ce pli appartient-il ? Quel est le mécanisme de plissement dominant associé ?
   * Comparer brièvement ce comportement avec celui d'un pli semblable (classe 2).

7. **Marqueurs de déformation et mécanismes intracristallins :**
   L'observation au microscope polarisant d'une lame mince taillée perpendiculairement à l'axe du pli révèle :
   * Des stylolites parallèles aux plans axiaux de plis,
   * Des veines de calcite fibreuse en échelon, orientées perpendiculairement aux couches plissées,
   * Une extinction onduleuse et des macles mécaniques épaisses dans les cristaux de calcite.
   À partir de ces microstructures, reconstituer les mécanismes de déformation à l'échelle minérale et relier ces observations aux conditions de pression et de température subies par la roche.

---

### 💡 Pistes & Indications méthodologiques

* **Pour la Question 2 :** Représenter la construction classique du cercle de Mohr. Le cercle coupe l'enveloppe de rupture au point critique $(\sigma_n, \tau)$. L'angle au centre du cercle sous-tendant la rupture est $2\theta$. Utiliser la géométrie du triangle rectangle formé par le centre du cercle, le point de contact et l'intersection de l'enveloppe avec l'axe horizontal pour relier $\phi$ et $\theta$.
* **Pour la Question 4 & 5 :** Attention aux unités : convertir $Q$ en $\text{J}\cdot\text{mol}^{-1}$ ($210\,000 \text{ J}\cdot\text{mol}^{-1}$) et les profondeurs en mètres pour obtenir la température absolue $T$ en Kelvin ($T(z) = T_0 + G \cdot z + 273{,}15$).
* **Pour la Question 6 :** Se remémorer les définitions de l'épaisseur orthogonale $t_\alpha$ et de l'épaisseur parallèle au plan axial $T_\alpha$. La classe 1B correspond au pli parallèle strict (isopaque).
* **Pour la Question 7 :** Structurer la réponse en distinguant les mécanismes fragiles (rupture par fente de tension), les mécanismes de transfert de matière par dissolution-cristallisation (pression-dissolution) et les déformations plastiques intracristallines (glissement plastique, maclage).

---

### 📋 Corrigé détaillé pas à pas

#### Partie I : État de contrainte et fracturation (Théorie d'Anderson et critère de Coulomb)

**1. Régime compressif et orientations selon Anderson :**
Dans un régime compressif (orogénique) :
* La surface libre de la Terre ne supporte aucun cisaillement non nul ; par conséquent, l'une des contraintes principales est obligatoirement orthogonale à la surface topographique (verticale), les deux autres étant contenues dans le plan horizontal.
* En régime de chevauchement / faille inverse, le raccourcissement maximal est horizontal et le soulèvement se fait à l'encontre de la gravité. On a donc :
  $$\sigma_1 \text{ est horizontal et parallèle à la direction de raccourcissement maximal}$$
  $$\sigma_2 \text{ est horizontal et parallèle aux axes des structures (perpendiculaire à } \sigma_1 \text{)}$$
  $$\sigma_3 = \sigma_v = \rho g z \text{ est vertical (contrainte lithostatique)}$$

**2. Pendage théorique d'un chevauchement :**
* *Démonstration géométrique :*
  Dans le plan de Mohr $(\sigma_n, \tau)$, le cercle de contrainte est centré en $\left(\frac{\sigma_1+\sigma_3}{2}, 0\right)$ et a pour rayon $R = \frac{\sigma_1-\sigma_3}{2}$.
  Un plan dont la normale fait un angle $\theta$ avec la direction de $\sigma_1$ est représenté par un point sur le cercle situé à un angle $2\theta$ par rapport à l'axe $\sigma_n$ (depuis $\sigma_1$).
  Au point de tangence entre l'enveloppe de Coulomb (d'angle $\phi$ avec l'horizontale) et le cercle de contrainte :
  Le rayon joignant le centre du cercle au point de rupture fait un angle de $90^\circ$ avec la droite de Coulomb.
  Dans le triangle rectangle correspondant, la somme des angles donne :
  $$\frac{\pi}{2} + \phi + (\pi - 2\theta) = \pi \implies 2\theta = \frac{\pi}{2} - \phi \implies \theta = \frac{\pi}{4} - \frac{\phi}{2}$$

* *Application numérique :*
  $$\phi = \arctan(\mu) = \arctan(0{,}6) \approx 30{,}96^\circ \approx 0{,}540 \text{ rad}$$
  $$\theta = 45^\circ - \frac{30{,}96^\circ}{2} = 45^\circ - 15{,}48^\circ = 29{,}52^\circ \approx 30^\circ$$
  Puisque $\sigma_1$ est horizontal, le plan de faille fait un angle de $\theta \approx 30^\circ$ avec l'horizontale.
Conclusion: ** Le pendage théorique d'une faille inverse néoformée est faible à modéré, de l'ordre de **$30^\circ$**.

**3. Rôle de la surpression de fluide :**
* *Effet sur le cercle de Mohr :*
  L'application d'une pression de pore $P_f$ décale toutes les contraintes normales vers la gauche d'une même valeur : $\sigma'_n = \sigma_n - P_f$. Le diamètre du cercle $(\sigma'_1 - \sigma'_3 = \sigma_1 - \sigma_3)$ reste inchangé, mais son centre se translate vers l'origine :
  $$\sigma'_{\text{centre}} = \frac{\sigma_1 + \sigma_3}{2} - P_f$$
  Ce décalage amène le cercle au contact de l'enveloppe de Coulomb sans nécessiter d'augmentation du déviateur $(\sigma_1 - \sigma_3)$, déclenchant la rupture à des contraintes différentielles plus faibles.
* *Structure caractéristique :*
  Lorsque la pression de fluide dépasse la contrainte minimale ($\sigma'_3 < 0$ et $|\sigma'_3| \ge T_{\text{roche}}$, la résistance en traction), on assiste à une **fracturation hydraulique**. Cela génère des **fentes de tension (veines hydrofracturées)** remplies de calcite, souvent ouvertes parallèlement à $\sigma_1$ (donc perpendiculaires à la stratification à la charnière des plis où l'étirement extrados est maximal).

---

#### Partie II : Profil rhéologique et transition fragile-ductile

**4. Résistance à la rupture fragile :**
Calculons d'abord la contrainte verticale effective :
$$\sigma'_v = \sigma_v (1 - \lambda) = \rho g z (1 - \lambda)$$
Avec $\rho g = 2\,500 \text{ kg}\cdot\text{m}^{-3} \times 9{,}81 \text{ m}\cdot\text{s}^{-2} = 24\,525 \text{ Pa}\cdot\text{m}^{-1} \approx 24{,}525 \text{ MPa}\cdot\text{km}^{-1}$.
Pour $\lambda = 0{,}4$, le facteur effectif est $(1 - 0{,}4) = 0{,}6$.

* **À $z = 3 \text{ km}$ :**
  $$\sigma'_v = 24{,}525 \times 3 \times 0{,}6 = 44{,}15 \text{ MPa}$$
  $$(\sigma_1 - \sigma_3)_{\text{fragile}} = 3{,}0 \times 44{,}15 \text{ MPa} = \mathbf{132{,}4 \text{ MPa}}$$

* **À $z = 8 \text{ km}$ :**
  $$\sigma'_v = 24{,}525 \times 8 \times 0{,}6 = 117{,}72 \text{ MPa}$$
  $$(\sigma_1 - \sigma_3)_{\text{fragile}} = 3{,}0 \times 117{,}72 \text{ MPa} = \mathbf{353{,}2 \text{ MPa}}$$

La résistance fragile croît linéairement avec la profondeur en raison du confinement lithostatique.

**5. Résistance ductile et profondeur de la transition :**
* *Inversion de la loi de fluage :*
  $$(\sigma_1 - \sigma_3)_{\text{ductile}} = \left(\frac{\dot{\varepsilon}}{A}\right)^{1/n} \exp\left(\frac{Q}{n R T}\right)$$

* *Calcul des températures :*
  * À $z = 8 \text{ km}$ : $T = 15 + 30 \times 8 = 255 \text{ }^{\circ}\text{C} = 528{,}15 \text{ K}$
  * À $z = 12 \text{ km}$ : $T = 15 + 30 \times 12 = 375 \text{ }^{\circ}\text{C} = 648{,}15 \text{ K}$

* *Calcul du terme pré-exponentiel :*
  $$\left(\frac{\dot{\varepsilon}}{A}\right)^{1/3} = \left(\frac{1{,}0 \times 10^{-14}}{1{,}0 \times 10^{-4}}\right)^{1/3} = \left(10^{-10}\right)^{1/3} = 10^{-10/3} \approx 4{,}64 \times 10^{-4} \text{ MPa}$$

* *Calcul des contraintes ductiles :*
  * À $z = 8 \text{ km}$ ($T = 528{,}15 \text{ K}$) :
    $$\frac{Q}{3 R T} = \frac{210\,000}{3 \times 8{,}314 \times 528{,}15} = \frac{210\,000}{13\,173} \approx 15{,}94$$
    $$(\sigma_1 - \sigma_3)_{\text{ductile}} = 4{,}64 \times 10^{-4} \times \exp(15{,}94) = 4{,}64 \times 10^{-4} \times 8{,}37 \times 10^6 \approx \mathbf{3\,880 \text{ MPa}}$$
    *(Cette valeur théorique immense montre qu'à $8 \text{ km}$, le fluage-dislocation de la calcite est quasiment inactif à cette vitesse de déformation : le comportement reste strictement cassant ou dominé par la pression-dissolution).*

  * À $z = 12 \text{ km}$ ($T = 648{,}15 \text{ K}$) :
    $$\frac{Q}{3 R T} = \frac{210\,000}{3 \times 8{,}314 \times 648{,}15} = \frac{210\,000}{16\,167} \approx 12{,}99$$
    $$(\sigma_1 - \sigma_3)_{\text{ductile}} = 4{,}64 \times 10^{-4} \times \exp(12{,}99) = 4{,}64 \times 10^{-4} \times 4{,}38 \times 10^5 \approx \mathbf{203 \text{ MPa}}$$

* *Estimation de la transition fragile-ductile ($z_{\text{TFD}}$) :*
  À la transition, la contrainte nécessaire à la rupture fragile équivaut à celle requise pour le fluage ductile :
  $$(\sigma_1 - \sigma_3)_{\text{fragile}} = (\sigma_1 - \sigma_3)_{\text{ductile}}$$
  À $z = 10 \text{ km}$ ($T = 315 \text{ }^{\circ}\text{C} = 588{,}15 \text{ K}$) :
  * $(\sigma_1 - \sigma_3)_{\text{fragile}} = 3{,}0 \times 24{,}525 \times 10 \times 0{,}6 \approx 441 \text{ MPa}$
  * $\frac{Q}{3 R T} = \frac{210\,000}{3 \times 8{,}314 \times 588{,}15} = 14{,}32 \implies (\sigma_1 - \sigma_3)_{\text{ductile}} = 4{,}64 \times 10^{-4} \times \exp(14{,}32) \approx 765 \text{ MPa}$
  À $z = 11 \text{ km}$ ($T = 345 \text{ }^{\circ}\text{C} = 618{,}15 \text{ K}$) :
  * $(\sigma_1 - \sigma_3)_{\text{fragile}} \approx 485 \text{ MPa}$
  * $\frac{Q}{3 R T} \approx 13{,}62 \implies (\sigma_1 - \sigma_3)_{\text{ductile}} \approx 380 \text{ MPa}$
  Par interpolation linéaire, l'intersection des courbes de résistance (enveloppe de Brace-Goetze) se situe à :
  $$z_{\text{TFD}} \approx \mathbf{10{,}5 \text{ km}} \quad (\text{soit } T \approx 330 \text{ }^{\circ}\text{C})$$
  Ce résultat est cohérent avec la température d'activation de la plasticité cristalline intracristalline de la calcite ($T > 250\text{--}300 \text{ }^{\circ}\text{C}$).

---

#### Partie III : Analyse géométrique et microstructurale d'un pli

**6. Classification de Ramsay et mécanisme cinématique :**
* **Classe du pli :** L'épaisseur orthogonale vérifie $t_\alpha = t_0 = \text{constante}$. Les isogones de pendage sont donc strictement orthogonales aux limites des bancs et de longueur constante. Il s'agit d'un **pli de classe 1B (pli parallèle ou isopaque)**.
* **Mécanisme dominant :** Ce pli se forme principalement par **flexion avec glissement banc sur banc (flexural slip)** ou par flambement (*buckling*) d'une couche compétente (banc calcaire) au sein d'une matrice incompétente (marnes). Les couches glissent les unes sur les autres sans déformation interne significative de l'épaisseur du banc.
* **Comparaison avec un pli semblable (classe 2) :**
  * Dans un pli semblable, l'épaisseur parallèle au plan axial est constante ($T_\alpha = \text{constante}$), ce qui impose un amincissement des flancs ($t_\alpha = t_0 \cos\alpha$) et un épaississement à la charnière.
  * Le pli semblable résulte d'un cisaillement simple distribué le long du plan axial ou d'un aplatissement homogène poussé sous des conditions de température plus élevées (faciès schiste vert à amphibolite).

**7. Microstructures et mécanismes de déformation à l'échelle minérale :**

| Microstructure observée | Mécanisme de déformation associé | Conditions P-T / Cinématique |
| :--- | :--- | :--- |
| **Stylolites de plan axial** | **Pression-dissolution (transfert de matière en phase aqueuse)** : dissolution sous contrainte normale maximale ($\sigma_1$), migration par diffusion intergranulaire dans les fluides de pore, et résidu insoluble d'argiles/oxydes. | Faible métamorphisme ($T < 200\text{--}250 \text{ }^{\circ}\text{C}$), présence de fluides interstitiels. Raccourcissement parallèle à $\sigma_1$. |
| **Veines de calcite en échelon** | **Rupture en traction / fracturation hydraulique et cristallisation** : ouverture dans la direction de $\sigma_3$ et croissance syntaxiale/antitaxiale de fibres de calcite à partir des fluides riches en ions dissous. | Déformation cassante localisée en régime de cisaillement ; témoigne du couplage entre pression-dissolution (source) et précipitation en fentes (piège). |
| **Extinction onduleuse et macles épaisses** | **Plasticité intracristalline** : déformation par glissement de dislocations (réseau cristallin courbé créant l'extinction onduleuse) et maclage mécanique type II (macles d'épaisseur $> 5 \text{ }\mu\text{m}$). | Transition basse température ($200 \text{ }^{\circ}\text{C} < T < 300 \text{ }^{\circ}\text{C}$) pour la calcite. Indique que la roche a atteint l'amorce du champ ductile intracristallin. |

**Synthèse géodynamique :**
L'association de ces structures montre que la couverture sédimentaire a subi une déformation polyphasée ou hétérogène dans la zone superficielle à semi-profonde (environ $4\text{ à }8 \text{ km}$, $T \approx 150\text{--}250 \text{ }^{\circ}\text{C}$) : le raccourcissement horizontal est d'abord accommodé par **pression-solution et glissement banc sur banc** (déformation continue non pénétrative), relayé localement par des fracturations hydrauliques, avant que le flambement macroscopique n'atteigne le stade de verrouillage et que les contraintes différentielles n'activent les macles intracristallines.