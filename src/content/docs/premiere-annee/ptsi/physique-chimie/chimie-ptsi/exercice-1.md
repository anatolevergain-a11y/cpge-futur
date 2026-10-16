---
title: 'Exercice 1 : Structure des solides'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude cristallographique et thermodynamique de l'oxyde de titane $\text{TiO}_2$

L'oxyde de titane $\text{TiO}_2$ est un matériau largement utilisé pour ses propriétés photocatalytiques, ses pigments blancs et ses applications en microélectronique. Il existe sous plusieurs formes allotropiques, dont la plus courante est le **rutile**. 

Ce problème se propose d'étudier la géographie de la maille cristalline du rutile, de calculer des grandeurs caractéristiques (compacité, masse volumique) et d'aborder l'aspect énergétique de la liaison chimique au sein de ce cristal ionique.

---

## Partie I : Étude géométrique de la maille du rutile

Le cristal de rutile cristallise dans un système quadratique (ou tetragonal). Les paramètres de la maille conventionnelle sont $a = b \neq c$ et les angles valent $\alpha = \beta = \gamma = 90^\circ$.

La maille est décrite de la manière suivante :
- Les ions oxyde $\text{O}^{2-}$ occupent les sommets et le centre de la maille, constituant un empilement compact de type quasi-hexagonal.
- Les ions titane $\text{Ti}^{4+}$ occupent la moitié des sites octaédriques interstitiels.

Pour simplifier, on modélise les ions $\text{O}^{2-}$ et $\text{Ti}^{4+}$ comme des sphères rigides indéformables de rayons respectifs $R_{\text{O}^{2-}}$ et $R_{\text{Ti}^{4+}}$, en contact direct.

### Données numériques :
- Rayon de l'ion oxyde : $R_{\text{O}^{2-}} = 140\text{ pm}$
- Rayon de l'ion titane : $R_{\text{Ti}^{4-}} = 60{,}5\text{ pm}$
- Nombre d'Avogadro : $N_A = 6{,}022 \times 10^{23}\text{ mol}^{-1}$
- Masses molaires atomiques : $M(\text{Ti}) = 47{,}88\text{ g}\cdot\text{mol}^{-1}$ ; $M(\text{O}) = 16{,}00\text{ g}\cdot\text{mol}^{-1}$
- Paramètres de la maille mesurés par diffraction des rayons X : $a = 459\text{ pm}$ et $c = 296\text{ pm}$

---

### Question 1.1
Déterminer la formule chimique statistique contenue dans une maille de rutile sachant qu'elle contient $Z$ motifs $\text{TiO}_2$. Calculer la valeur de $Z$ en justifiant le décompte des ions (les sommets sont partagés par $8$ mailles, les centres par $1$ maille, les arêtes par $4$ mailles et les faces par $2$ mailles si présents).

> **Indice / Rappel de cours :**
> Un motif est l'entité répétée. Ici, la stœchiométrie est de $1$ ion $\text{Ti}^{4+}$ pour $2$ ions $\text{O}^{2-}$.
Correction: **
- **Décompte des ions $\text{O}^{2-}$ :**
  - 8 sommets appartenant chacun à 8 mailles : $8 \times \frac{1}{8} = 1$ ion.
  - 1 centre de maille : $1 \times 1 = 1$ ion.
  - Total d'ions $\text{O}^{2-}$ par maille : $N_{\text{O}} = 1 + 1 = 2$.

- **Décompte des ions $\text{Ti}^{4+}$ :**
  - Les ions titane occupent des sites octaédriques. Dans la structure rutile, les positions des $\text{Ti}^{4+}$ sont :
    - Les 4 centres des arêtes verticales (partagés par 4 mailles) : $4 \times \frac{1}{4} = 1$ ion.
    - Le centre de la maille : $1 \times 1 = 1$ ion.
    - Total d'ions $\text{Ti}^{4+}$ par maille : $N_{\text{Ti}} = 1 + 1 = 2$.

Le nombre de motifs $\text{TiO}_2$ par maille est donc :
$$Z = \frac{N_{\text{Ti}}}{1} = \frac{N_{\text{O}}}{2} = 2$$
La maille contient **2 motifs $\text{TiO}_2$**.

---

### Question 1.2
Calculer la compacité $C$ de la maille du rutile. On rappelle que la compacité est le rapport du volume occupé par les sphères d'ions constituant les $Z$ motifs sur le volume total de la maille.

> **Indice / Rappel de cours :**
> Le volume d'une maille quadratique de paramètres $a$ et $c$ est $V_{\text{maille}} = a^2 \cdot c$.
> Le volume d'une sphère de rayon $R$ est $V_{\text{sphère}} = \frac{4}{3}\pi R^3$.
Correction: **
Le volume total de la maille est :
$$V_{\text{maille}} = a^2 \cdot c = (459 \times 10^{-12}\text{ m})^2 \times (296 \times 10^{-12}\text{ m})$$
$$V_{\text{maille}} = (210681 \times 10^{-24}\text{ m}^2) \times (296 \times 10^{-12}\text{ m}) = 6{,}236 \times 10^{-29}\text{ m}^3$$

Le volume occupé par les ions dans les $Z = 2$ motifs $\text{TiO}_2$ est :
$$V_{\text{occupé}} = 2 \times \left( V(\text{Ti}^{4+}) + 2 \times V(\text{O}^{2-}) \right)$$
$$V_{\text{occupé}} = 2 \times \left( \frac{4}{3}\pi R_{\text{Ti}}^{3} + 2 \times \frac{4}{3}\pi R_{\text{O}}^{3} \right)$$
$$V_{\text{occupé}} = \frac{8}{3}\pi \left( (60{,}5 \times 10^{-12})^3 + 2 \times (140 \times 10^{-12})^3 \right)$$
$$V_{\text{occupé}} = \frac{8}{3}\pi \left( 221115{,}1 \times 10^{-36} + 2 \times 2744000 \times 10^{-36} \right)$$
$$V_{\text{occupé}} = \frac{8}{3}\pi \times 5709115{,}1 \times 10^{-36} \approx 4{,}785 \times 10^{-29}\text{ m}^3$$

La compacité $C$ vaut donc :
$$C = \frac{V_{\text{occupé}}}{V_{\text{maille}}} = \frac{4{,}785 \times 10^{-29}}{6{,}236 \times 10^{-29}} \approx 0{,}767$$
Soit **$C = 76{,}7\,\%$**.

---

### Question 1.3
En déduire la masse volumique $\rho$ du dioxyde de titane sous forme rutile en $\text{g}\cdot\text{cm}^{-3}$.
Correction: **
La masse d'une maille $m_{\text{maille}}$ est liée à la masse molaire du motif $M(\text{TiO}_2)$ et au nombre d'Avogadro $N_A$ :
$$m_{\text{maille}} = Z \times \frac{M(\text{TiO}_2)}{N_A}$$
Avec $M(\text{TiO}_2) = M(\text{Ti}) + 2 \times M(\text{O}) = 47{,}88 + 2 \times 16{,}00 = 79{,}88\text{ g}\cdot\text{mol}^{-1}$.

$$\text{D'où } m_{\text{maille}} = 2 \times \frac{79{,}88}{6{,}022 \times 10^{23}} = 2{,}651 \times 10^{-22}\text{ g} = 2{,}651 \times 10^{-25}\text{ kg}$$

La masse volumique est :
$$\rho = \frac{m_{\text{maille}}}{V_{\text{maille}}} = \frac{2{,}651 \times 10^{-22}\text{ g}}{6{,}236 \times 10^{-29}\text{ m}^3} = 4{,}25 \times 10^{6}\text{ g}\cdot\text{m}^{-3} = \mathbf{4{,}25\text{ g}\cdot\text{cm}^{-3}}$$

---

## Partie II : Énergétique du cristal et liaison chimique

On s'intéresse maintenant à la cohésion de ce cristal ionique. Le modèle ionique pur considère l'interaction entre ions ponctuels $\text{Ti}^{4+}$ et $\text{O}^{2-}$.

### Question 2.1
Calculer l'énergie potentielle électrostatique d'interaction entre un ion $\text{Ti}^{4+}$ et un de ses plus proches voisins $\text{O}^{2-}$, situés à une distance d'équilibre $d = 195\text{ pm}$. On rappelle que l'énergie potentielle entre deux charges $q_1$ et $q_2$ séparées d'une distance $d$ est donnée par :
$$E_p = \frac{q_1 q_2}{4\pi \varepsilon_0 d}$$
On donne la permittivité du vide $\varepsilon_0 \approx 8{,}854 \times 10^{-12}\text{ F}\cdot\text{m}^{-1}$ et la charge élémentaire $e = 1{,}602 \times 10^{-19}\text{ C}$. Exprimer le résultat en Joules, puis en $\text{eV}$.
Correction: **
Les charges sont $q_1 = +4e$ et $q_2 = -2e$.
$$E_p = \frac{(+4e)(-2e)}{4\pi \varepsilon_0 d} = -\frac{8e^2}{4\pi \varepsilon_0 d}$$

A.N. :
$$E_p = -\frac{8 \times (1{,}602 \times 10^{-19})^2}{4\pi \times (8{,}854 \times 10^{-12}) \times (195 \times 10^{-12})}$$
$$E_p = -\frac{8 \times 2{,}566 \times 10^{-38}}{1{,}112 \times 10^{-20}} = -\frac{2{,}053 \times 10^{-37}}{1{,}112 \times 10^{-20}} = -1{,}846 \times 10^{-17}\text{ J}$$

Conversion en électronvolts ($\text{eV}$) sachant que $1\text{ eV} = 1{,}602 \times 10^{-19}\text{ J}$ :
$$E_p = \frac{-1{,}846 \times 10^{-17}}{1{,}602 \times 10^{-19}} \approx \mathbf{-115{,}2\text{ eV}}$$

---

### Question 2.2 : Analyse critique des résultats

1. La compacité calculée à la question 1.2 est de $76{,}7\,\%$. Comment se compare cette valeur à celle d'un empilement compact parfait (type CFC ou HCP dont la compacité est de $74\,\%$) ? Le modèle des sphères rigides est-il rigoureusement exact ici ?
2. L'énergie d'interaction calculée à la question 2.1 est très négative ($-115{,}2\text{ eV}$). Qu'en conclut-on sur la nature de la liaison dans le $\text{TiO}_2$ ? Le modèle purement ionique suffit-il à rendre compte de la réalité physique des matériaux oxydes de transition ?

**Correction de l'analyse critique :**
1. **Compacité et modèle géométrique :** 
   La compacité obtenue ($76{,}7\,\%$) dépasse la limite maximale théorique des empilements compacts de sphères dures mono-atomiques ($74\,\%$). 
   *Interprétation :* Cela montre les limites du modèle des sphères rigides. En réalité, les nuages électroniques des ions $\text{O}^{2-}$ et $\text{Ti}^{4+}$ subissent une déformation (polarisation, mise en commun partielle de charges) lorsqu'ils s'approchent. De plus, les rayons ioniques tabulés dépendent de la coordinence et ne sont que des moyennes indicatives.

2. **Énergétique et liaison chimique :**
   L'énergie d'attraction électrostatique très élevée (en valeur absolue) témoigne d'une cohésion ionique extrêmement forte, ce qui explique les points de fusion élevés des oxydes métalliques. 
   Cependant, le titane étant un métal de transition, sa couche $d$ vide (ou partiellement remplie) induit une forte **covalence** dans les liaisons $\text{Ti-O}$. Le modèle purement ionique ($\text{Ti}^{4+}$ et $\text{O}^{2-}$) est donc une approximation grossière : la charge réelle portée par le titane dans le cristal est sensiblement inférieure à $+4$ en raison de la partialité du transfert électronique (caractère covalent partiel de la liaison).