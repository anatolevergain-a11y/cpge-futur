---
title: 'Exercice 2 : Cristallographie : structures cubiques'
description: 'Problème d entraînement type concours pour PCSI.'
---

### 🌐 Énoncé du problème / Étude de cas

La cristallographie est une science fondamentale pour comprendre les propriétés physiques et mécaniques des matériaux solides. En classe préparatoire, l'étude des empilements compacts et non compacts dans les structures cristallines métalliques constitue un pont essentiel entre la thermodynamique chimique, la liaison chimique et la physique du solide.

On s'intéresse dans ce problème à l'étude comparative de deux métaux de transition largement utilisés dans l'industrie : le fer ($\text{Fe}$) et le titane ($\text{Ti}$). 
À température ambiante (phase $\alpha$), le fer cristallise dans le système cubique centré (cc), tandis que le titane (phase $\alpha$) cristallise dans le système hexagonal compact, mais subit une transition allotropique à haute température pour donner une phase cubique centrée (titane $\beta$). Pour les besoins de ce problème modélisé, nous étudierons les structures cubiques simples, cubiques centrées (CC) et cubiques à faces centrées (CFC) en assimilant les atomes à des sphères rigides de rayon $R$.

L'objectif est d'évaluer l'efficacité de l'empaquetage spatial, de calculer les masses volumiques théoriques de ces réseaux, et de discuter de la pertinence du modèle des sphères dures face aux données expérimentales.

---

### ❓ Questions progressives (incluant des questions d'analyse critique)

**1. Rappels géométriques et coordinence**
1.1. Définir la *coordinence* d'un atome dans un réseau cristallin. Quelle est la coordinence d'un atome dans un réseau cubique simple (CS), cubique centré (CC) et cubique à faces centrées (CFC) ?
1.2. Exprimer la relation de contact entre les sphères rigides de rayon $R$ et le paramètre de maille $a$ pour le réseau cubique centré (CC), puis pour le réseau cubique à faces centrées (CFC).

**2. Compacité et masse volumique**
2.1. Définir la *compacité* $c$ d'une maille cristalline. Démontrer que la compacité du réseau cubique centré vaut $c_{\text{CC}} = \frac{\sqrt{3}\pi}{8} \approx 0,68$.
2.2. Calculer la compacité du réseau cubique à faces centrées ($c_{\text{CFC}}$). Conclure quant au caractère compact de ces deux structures.
2.3. Exprimer la masse volumique théorique $\rho$ d'un métal cristallisant dans un système cubique en fonction de la masse molaire $M$ du métal, du rayon $R$ de l'atome, du nombre d'Avogadro $\mathcal{N}_A$, et de la compacité $c$.

**3. Application au fer $\alpha$ (Cubique Centré)**
3.1. Le fer $\alpha$ cristallise dans le système cubique centré avec un paramètre de maille $a = 287\text{ pm}$. Calculer le rayon atomique $R_{\text{Fe}}$ en picomètres.
3.2. En déduire la masse volumique théorique $\rho_{\text{th}}$ du fer $\alpha$. On donne : $M(\text{Fe}) = 55,85\text{ g}\cdot\text{mol}^{-1}$ et $\mathcal{N}_A = 6,022 \times 10^{23}\text{ mol}^{-1}$.

**4. Analyse critique du modèle et limites**
4.1. La valeur expérimentale de la masse volumique du fer $\alpha$ à $20\,^\circ\text{C}$ est $\rho_{\text{exp}} = 7,87\text{ g}\cdot\text{cm}^{-3}$. Calculer l'écart relatif entre la valeur théorique et la valeur expérimentale.
4.2. Discuter des hypothèses du modèle des "sphères dures" et de la température. Pourquoi observe-t-on des écarts entre $\rho_{\text{th}}$ et $\rho_{\text{exp}}$ ? Citer au moins deux facteurs physiques négligés dans cette modélisation simple.

---

### 💡 Pistes & Indications

* **Q1.2 :** Faites un schéma dans le plan diagonal de la maille pour le CC (diagonale du cube) et pour le CFC (diagonale d'une face).
* **Q2.1 :** Rappelez que la compacité est le rapport du volume occupé par les atomes dans la maille sur le volume total de la maille. N'oubliez pas de compter correctement le nombre d'atomes par maille ($N_{\text{motif}}$).
* **Q3.2 :** Attention aux conversions d'unités : $1\text{ pm} = 10^{-12}\text{ m}$ et $1\text{ cm}^3 = (10^{-2}\text{ m})^3 = 10^{-6}\text{ m}^3$.
* **Q4.2 :** Pensez à l'agitation thermique, aux défauts cristallins (lacunes, dislocations) et à la nature non strictement "dure" du nuage électronique des métaux de transition.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Rappels géométriques et coordinence
1.1. La **coordinence** (ou nombre de coordination) est le nombre de plus proches voisins équidistants d'un atome donné dans le réseau cristallin.
* Réseau Cubique Simple (CS) : $Z = 6$
* Réseau Cubique Centré (CC) : $Z = 8$
* Réseau Cubique à Faces Centrées (CFC) : $Z = 12$

1.2. 
* **Cubique Centré (CC) :** Le contact entre les sphères s'établit le long de la grande diagonale du cube de longueur $d = a\sqrt{3}$. Cette diagonale contient deux rayons de l'atome central et un rayon pour chacun des deux atomes aux sommets, soit $4R$.
  $$\text{Relation CC :} \quad a\sqrt{3} = 4R \implies a = \frac{4R}{\sqrt{3}}$$
* **Cubique à Faces Centrées (CFC) :** Le contact s'établit le long de la diagonale d'une face du cube, de longueur $d = a\sqrt{2}$, qui contient $4R$.
  $$\text{Relation CFC :} \quad a\sqrt{2} = 4R \implies a = \frac{4R}{\sqrt{2}} = 2R\sqrt{2}$$

#### 2. Compacité et masse volumique
2.1. La compacité $c$ est définie par :
$$c = \frac{V_{\text{occupé}}}{V_{\text{maille}}} = \frac{N_{\text{motif}} \times \frac{4}{3}\pi R^3}{a^3}$$
Pour le réseau CC :
* Le nombre de motifs par maille est $N_{\text{motif}} = 8 \times \left(\frac{1}{8}\right) \text{ (sommets)} + 1 \text{ (centre)} = 2$.
* En substituant $a = \frac{4R}{\sqrt{3}}$ :
  $$c_{\text{CC}} = \frac{2 \times \frac{4}{3}\pi R^3}{\left(\frac{4R}{\sqrt{3}}\right)^3} = \frac{\frac{8}{3}\pi R^3}{\frac{64 R^3}{3\sqrt{3}}} = \frac{8}{3}\pi \times \frac{3\sqrt{3}}{64} = \frac{\sqrt{3}\pi}{8} \approx 0,680$$

2.2. Pour le réseau CFC :
* Le nombre de motifs est $N_{\text{motif}} = 8 \times \left(\frac{1}{8}\right) \text{ (sommets)} + 6 \times \left(\frac{1}{2}\right) \text{ (faces)} = 4$.
* En substituant $a = 2R\sqrt{2}$ :
  $$c_{\text{CFC}} = \frac{4 \times \frac{4}{3}\pi R^3}{(2R\sqrt{2})^3} = \frac{\frac{16}{3}\pi R^3}{16\sqrt{2}R^3} = \frac{\pi}{3\sqrt{2}} \approx 0,740$$
Conclusion: * Le réseau CFC (ainsi que l'hexagonal compact) est un empilement compact ($c = 74\,\%$), contrairement au réseau CC qui est un empilement non compact ($c = 68\,\%$).

2.3. La masse volumique théorique s'exprime par :
$$\rho = \frac{m_{\text{maille}}}{V_{\text{maille}}} = \frac{N_{\text{motif}} \times \frac{M}{\mathcal{N}_A}}{a^3}$$
En exprimant $a$ en fonction de $R$ et de la compacité ($a^3 = \frac{N_{\text{motif}} \cdot \frac{4}{3}\pi R^3}{c}$), on obtient :
$$\rho = \frac{c \cdot M}{\mathcal{N}_A \cdot \frac{4}{3}\pi R^3}$$

#### 3. Application au fer $\alpha$ (Cubique Centré)
3.1. Pour le fer $\alpha$ (CC), on a $a = \frac{4R}{\sqrt{3}}$, soit :
$$R_{\text{Fe}} = \frac{a\sqrt{3}}{4} = \frac{287 \times \sqrt{3}}{4} \approx 124,3\text{ pm} = 1,243 \times 10^{-10}\text{ m}$$

3.2. Calculons la masse volumique théorique $\rho_{\text{th}}$ :
$$\rho_{\text{th}} = \frac{N_{\text{motif}} \times M}{\mathcal{N}_A \times a^3} = \frac{2 \times 55,85 \times 10^{-3}\text{ kg}\cdot\text{mol}^{-1}}{6,022 \times 10^{23}\text{ mol}^{-1} \times (287 \times 10^{-12}\text{ m})^3}$$
$$\rho_{\text{th}} = \frac{111,70 \times 10^{-3}}{6,022 \times 10^{23} \times 2,364 \times 10^{-29}} \approx 7,85 \times 10^{3}\text{ kg}\cdot\text{m}^{-3} = 7,85\text{ g}\cdot\text{cm}^{-3}$$

#### 4. Analyse critique du modèle et limites
4.1. Calcul de l'écart relatif :
$$\varepsilon = \left| \frac{\rho_{\text{th}} - \rho_{\text{exp}}}{\rho_{\text{exp}}} \right| = \left| \frac{7,85 - 7,87}{7,87} \right| \approx 2,5 \times 10^{-3} \quad \text{soit } 0,25\,\%$$
L'accord entre la théorie et l'expérience est remarquable, ce qui valide a posteriori l'hypothèse de la structure cubique centrée pour le fer $\alpha$ dans les conditions usuelles.

4.2. **Analyse critique et limites du modèle :**
* **Hypothèse des sphères dures :** Les atomes ne sont pas des boules de billard impénétrables ; leurs nuages électroniques sont déformables et s'interpénètrent partiellement sous l'effet de la liaison métallique.
* **Effet de la température :** Le paramètre de maille $a$ dépend de la température (dilatation thermique). La valeur de $a$ à $20\,^\circ\text{C}$ utilisée ici induit une légère variation par rapport au zéro absolu, bien que négligeable au premier ordre.
* **Défauts cristallins :** Un cristal réel n'est jamais parfait. La présence de **lacunes** (noeuds cristallins vacants) ou de dislocations diminue légèrement la densité réelle par rapport au cristal idéal parfait calculé.
* **Impuretés interstitielles :** Le fer technique contient des éléments en insertion (comme le carbone dans les aciers), modifiant localement le réseau.