---
title: 'Exercice 1 : Chiralité et énantiomères'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude physico-chimique de la chiralité et analyse spectroscopique d'un principe actif

## Introduction et cadre du problème

Ce problème s'intéresse à la caractérisation stéréochimique et spectroscopique d'une molécule chirale, l'acide 2-arylpropionique, de formule générale $\text{Ar}-\text{CH(CH}_3\text{)}-\text{COOH}$, famille bien connue d'anti-inflammatoires non stéroïdiens (AINS) tels que l'ibuprofène ou le kétoprofène. En CPGE, la compréhension de la stéréochimie ne se limite pas à la représentation graphique, mais s'étend à la mesure physique de l'activité optique et à son exploitation analytique.

---

## Énoncé

On étudie un échantillon pur d'un énantiomère de l'acide 2-(4-isobutylphenyl)propanoïque (communément appelé ibuprofène). 

1. **Aspects stéréochimiques :**
   Identifier le(s) centre(s) stéréogène(s) de la molécule. Préciser la configuration absolue (R/S) du stéréocentre de l'énantiomère $(+)$. Données de priorité Cahn-Ingold-Prelog (CIP) pour le carbone asymétrique : $-\text{COOH}$ (1), $-\text{Ar}$ (2), $-\text{CH}_3$ (3), $-\text{H}$ (4).

2. **Mesure polarimétrique :**
   On dissout $m = 1,00\text{ g}$ de cet énantiomère dans du chloroforme ($\text{CHCl}_3$) pour obtenir un volume total de solution $V = 10,0\text{ mL}$. La solution est introduite dans une cuve polarimétrique de longueur $l = 10\text{ dm}$. L'angle de rotation optique mesuré à $T = 20\ \text{°C}$ (raie D du sodium, $\lambda = 589\text{ nm}$) est $\alpha = +0,58\text{°}$.

3. **Analyse spectroscopique (IR et RMN) :**
   - En spectroscopie Infrarouge (IR), on observe une large bande intense vers $3300-2500\text{ cm}^{-1}$ et une bande très fine et intense à $1710\text{ cm}^{-1}$.
   - En RMN $^1\text{H}$ à $400\text{ MHz}$, le groupe méthyle $-\text{CH}_3$ lié au carbone asymétrique apparaît sous forme d'un doublet.

---

## Questions

1. **Q1.** Représenter la molécule en perspective de Cram en plaçant le groupement $-\text{H}$ en arrière, et attribuer la configuration absolue sachant que le sens décroissant de priorité (1 $\to$ 2 $\to$ 3) est horaire.
2. **Q2.** Définir le pouvoir rotatoire spécifique $[\alpha]_\text{D}^{20}$ de la substance et calculer sa valeur numérique dans les conditions de l'expérience (préciser l'unité).
3. **Q3.** Expliquer qualitativement l'origine microscopique de l'activité optique de la solution (interaction de la lumière polarisée plane avec les électrons de la molécule chirale).
4. **Q4.** Identifier les groupements fonctionnels responsables des bandes IR mentionnées. Justifier l'ordre de grandeur de la fréquence $1710\text{ cm}^{-1}$ à l'aide du modèle oscillateur harmonique amorti (loi de Hooke simplifiée).
5. **Q5.** Justifier la multiplicité (duplet) observée en RMN $^1\text{H}$ pour le proton du groupement méthyle. Quelle information cela apporte-t-il sur la structure voisine ?
6. **Q6.** **Analyse critique et limites du modèle :** Un étudiant affirme que si l'on mesurait le pouvoir rotatoire d'un mélange racémique dans les mêmes conditions, on trouverait $\alpha = 0\text{°}$. Est-ce rigoureusement toujours le cas en pratique, ou existe-t-il des limites thermodynamiques ou physico-chimiques à cette compensation ? Discuter brièvement.

---

## Pistes et indications

- **Q1 :** Utilisez les règles CIP. Si le groupement 4 est à l'arrière, le sens de 1 vers 2 puis 3 donne directement la configuration.
- **Q2 :** La formule du pouvoir rotatoire spécifique est $[\alpha]_\text{D}^T = \frac{\alpha}{l \cdot c}$, où $l$ est en décimètres et $c$ en $\text{g}\cdot\text{mL}^{-1}$ (ou $\text{g}\cdot\text{cm}^{-3}$ selon les conventions, attention aux unités homogènes).
- **Q4 :** Pensez à l'élongation de la liaison $\text{C=O}$ et aux liaisons hydrogène.
- **Q6 :** Pensez aux interactions intermoléculaires dans le racémique (cristaux racémiques vs mélanges d'énantiomères purs en solution, solvatation).

---

## Corrigé pas à pas

### **Q1 : Configuration absolue**
Le carbone asymétrique est lié à :
1. $-\text{COOH}$ (priorité 1)
2. $-\text{Ar}$ (priorité 2)
3. $-\text{CH}_3$ (priorité 3)
4. $-\text{H}$ (priorité 4)

Puisque le groupement 4 ($-\text{H}$) est en arrière (dans le plan ou en pointillé fuyant) et que le passage de 1 $\to$ 2 $\to$ 3 se fait dans le sens horaire, la configuration absolue est **$(S)$** (si l'énoncé indique $(+)$, c'est l'énantiomère $(S)$-(+)-ibuprofène).

### **Q2 : Calcul du pouvoir rotatoire spécifique**
La concentration massique $c$ de la solution est :
$$c = \frac{m}{V} = \frac{1,00\text{ g}}{10,0\text{ mL}} = 0,100\text{ g}\cdot\text{mL}^{-1}$$
Le pouvoir rotatoire spécifique $[\alpha]_\text{D}^{20}$ est défini par :
$$[\alpha]_\text{D}^{20} = \frac{\alpha}{l \cdot c}$$
Avec $\alpha = +0,58\text{°}$, $l = 10\text{ dm}$ et $c = 0,100\text{ g}\cdot\text{mL}^{-1}$ :
$$[\alpha]_\text{D}^{20} = \frac{0,58}{10 \times 0,100} = +0,58\text{°}\cdot\text{dm}^{-1}\cdot\text{g}^{-1}\cdot\text{cm}^3$$
*(Note usuelle : l'unité est souvent exprimée en $\text{°}\cdot\text{dm}^{-1}\cdot(\text{g}\cdot\text{mL}^{-1})^{-1}$)*.

### **Q3 : Origine microscopique de l'activité optique**
Une molécule chirale ne possède pas d'axe impropre de symétrie $S_n$ (en particulier pas de plan ni de centre de symétrie). Lorsqu'une onde électromagnétique polarisée rectilignement traverse le milieu, le champ électrique de l'onde induit un moment dipolaire oscillant. En raison de l'asymétrie tridimensionnelle de la molécule, les composantes électriques et magnétiques de l'onde interagissent de manière dissymétrique, provoquant des vitesses de propagation différentes pour les composantes circulaires gauche et droite de la lumière, d'où la rotation du plan de polarisation.

### **Q4 : Attribution des bandes IR**
- La bande large entre $3300\text{ et } 2500\text{ cm}^{-1}$ correspond à l'élongation de la liaison $\text{O-H}$ d'un acide carboxylique engagé dans de fortes liaisons hydrogène (dimères).
- La bande fine et intense à $1710\text{ cm}^{-1}$ correspond à l'élongation de la double liaison $\text{C=O}$ du groupement carbonyle.
*Justification harmonique :* $\sigma = \frac{1}{2\pi c} \sqrt{\frac{k}{\mu}}$. Une liaison double $\text{C=O}$ possède une constante de raideur $k$ élevée ($k \approx 1200\text{ N}\cdot\text{m}^{-1}$), ce qui élève la fréquence d'absorption dans la zone des nombres d'onde élevés ($>1700\text{ cm}^{-1}$).

### **Q5 : Analyse RMN $^1\text{H}$**
Le signal du groupe méthyle ($\text{-CH}_3$) est un **duplet**. D'après la règle des $n+1$ theorique (couplage spin-spin scalar), ce groupement est couplé avec **un seul** proton voisin, à savoir le proton porté par le carbone asymétrique ($\text{-CH(CH}_3\text{)-}$). L'intensité relative des pics est de $1:1$.

### **Q6 : Analyse critique et limites du modèle**
* **Réponse théorique :** Pour un mélange racémique (50% R, 50% S), les rotations optiques s'annulent strictement par compensation macroscopique ($\alpha = 0\text{°}$).
* **Limites et esprit critique :** En pratique, cette stricte compensation suppose l'absence d'interactions non-linéaires ou d'agrégation moléculaire dissymétrique en solution concentrée. De plus, dans l'état cristallin (solide), un racémique peut cristalliser soit sous forme d'un **racemate** (composé additionnel ordonné, réseau cristallin unique), soit sous forme d'un **mélange mécanique (conglomérat)** de cristaux purs $(R)$ et $(S)$. Les propriétés physiques (température de fusion, solubilité) diffèrent alors drastiquement du simple comportement idéal supposé par le modèle linéaire des mélanges.