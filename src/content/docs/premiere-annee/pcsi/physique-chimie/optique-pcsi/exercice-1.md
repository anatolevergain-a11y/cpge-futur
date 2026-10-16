---
title: 'Exercice 1 : Lentilles minces'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ : Étude d'un système optique afocal et mesures de distances focales

**Examinateur (CPGE PCSI) :** Ce problème aborde des notions classiques mais exigeantes de l'optique géométrique : l'association de lentilles, la notion de système afocal, ainsi que les méthodes expérimentales de détermination des distances focales. Une attention particulière sera accordée à la rigueur des notations algébriques et à l'analyse critique des résultats.

---

## I. Étude théorique d'une lunette afocale

On considère un système optique $\mathcal{S}$ constitué de deux lentilles minces sphériques convergentes $L_1$ et $L_2$, de centres optiques respectifs $O_1$ et $O_2$, et de distances focales respectives $f'_1 = O_1F'_1$ et $f'_2 = O_2F'_2$. 

Le système est réglé de manière "afocale" : un rayon incident parallèle à l'axe optique émerge du système également parallèle à l'axe optique.

### Q1. Définition et relations de conjugaison
1. Rappeler la définition d'un système optique afocal en termes d'espace objet et d'espace image pour un faisceau de lumière incident parallèle.
2. Établir la relation de conjugaison avec origine au centre pour la lentille $L_1$, puis pour la lentille $L_2$.

### Q2. Position relative des lentilles
On note $e = \overline{O_1O_2}$ l'intervalle optique entre les deux lentilles.
En considérant un faisceau incident parallèle arrivant sur $L_1$, déterminer la position de l'image intermédiaire $A_1$ d'un objet situé à l'infini, puis exprimer la condition pour que le système soit afocal en fonction de $f'_1$, $f'_2$ et $e$.

---

## II. Manipulation et mesures expérimentales

Pour déterminer la distance focale $f'_1$ d'une lentille mince convergente inconnue, on réalise la méthode de Bessel sur un banc d'optique. On fixe la distance $D$ entre un objet réel $A$ et un écran $E$. 

On déplace la lentille entre $A$ et $E$. On constate qu'il existe deux positions de la lentille, $L_A$ et $L_B$, distantes de $d$, qui permettent d'obtenir une image nette sur l'écran.

### Q3. Établissement de la formule de Bessel
1. Soit $x = \overline{OA}$ la position de l'objet par rapport à la lentille et $y = \overline{OA'}$ la position de l'image. En partant de la relation de conjugaison de Descartes avec origine au centre, montrer que $x$ est solution d'une équation du second degré de la forme :
   $$x^2 - Dx + Df'_1 = 0$$
2. Discuter de l'existence des solutions réelles en fonction de $D$ et $f'_1$.
3. Exprimer la distance $d = |x_B - x_A|$ entre les deux positions de la lentille en fonction de $D$ et $f'_1$. En déduire l'expression de $f'_1$ en fonction de $D$ et $d$.

---

## CORRIGÉ ET BARÈME INDICATIF

### I. Étude théorique d'une lunette afocale

1. **Définition du système afocal :**
   Un système est dit afocal si tout faisceau lumineux incident parallèle (provenant de l'infini, $\theta = 0$) émerge du système également parallèle ($\theta' = 0$). Le foyer objet et le foyer image sont rejetés à l'infini.

2. **Relations de conjugaison :**
   Pour $L_1$, un objet à l'infini se conjugue dans le plan focal image de $L_1$. L'image intermédiaire $A_1$ se forme donc au foyer $F'_1$. On a $\overline{O_1A_1} = f'_1$.
   Cette image $A_1$ sert d'objet pour la lentille $L_2$. Sa position par rapport à $O_2$ est $\overline{O_2A_1} = \overline{O_2O_1} + \overline{O_1A_1} = -e + f'_1$.
   Pour que le système soit afocal, il faut que l'image finale $A'$ de $A_1$ par $L_2$ soit rejetée à l'infini. Par conséquent, l'objet $A_1$ pour $L_2$ doit se situer dans le plan focal objet $F_2$ de $L_2$.
   On a donc $\overline{O_2A_1} = -f'_2$.
   
   En égalant les deux expressions de $\overline{O_2A_1}$ :
   $$-e + f'_1 = -f'_2 \implies e = f'_1 + f'_2$$
   *Critère du collimateur / lunette :* L'intervalle optique est égal à la somme des deux distances focales.

---

### II. Manipulation et mesures expérimentales

1. **Équation de Bessel :**
   La relation de conjugaison avec origine au centre s'écrit :
   $$\frac{1}{\overline{OA'}} - \frac{1}{\overline{OA}} = \frac{1}{f'_1}$$
   On pose $\overline{OA} = x$ et $\overline{OA'} = y$. L'écran étant fixe à une distance $D$ de l'objet, on a :
   $$y - x = D \implies y = x + D$$
   En remplaçant dans la relation de conjugaison :
   $$\frac{1}{x + D} - \frac{1}{x} = \frac{1}{f'_1} \iff \frac{x - (x + D)}{x(x + D)} = \frac{1}{f'_1} \iff \frac{-D}{x^2 + Dx} = \frac{1}{f'_1}$$
   En effectuant le produit en croix :
   $$-Df'_1 = x^2 + Dx \implies x^2 + Dx + Df'_1 = 0$$

2. **Discussion (Existence des solutions) :**
   Pour que la lentille puisse occuper deux positions réelles distinctes sur le banc, l'équation du second degré doit admettre deux racines distinctes, ce qui impose que son discriminant $\Delta$ soit strictement positif :
   $$\Delta = D^2 - 4Df'_1 > 0$$
   Comme $D > 0$, cela implique la condition fondamentale :
   $$D > 4f'_1$$
   *Interprétation physique :* Il est impossible d'observer une image nette sur l'écran si la distance objet-écran est inférieure à quatre fois la distance focale de la lentille.

3. **Expression de la distance focale $f'_1$ :**
   Les deux positions possibles de la lentille correspondent aux deux racines $x_A$ et $x_B$ de l'équation :
   $$x_A = \frac{-D - \sqrt{\Delta}}{2} \quad \text{et} \quad x_B = \frac{-D + \sqrt{\Delta}}{2}$$
   La distance $d$ entre ces deux positions est :
   $$d = |x_B - x_A| = \frac{\sqrt{\Delta}}{2} - \left(-\frac{\sqrt{\Delta}}{2}\right) = \sqrt{\Delta} = \sqrt{D^2 - 4Df'_1}$$
   En élevant au carré :
   $$d^2 = D^2 - 4Df'_1 \implies 4Df'_1 = D^2 - d^2$$
   Soit l'expression finale de Bessel :
   $$f'_1 = \frac{D^2 - d^2}{4D} = \frac{D}{4} - \frac{d^2}{4D}$$

---

### III. Analyse critique des résultats
Examinateur: ** *Une question typique de concours consiste à analyser la pertinence d'une méthode expérimentale.*

1. **Avantage de la méthode de Bessel :**
   Contrairement à la méthode de visée sur un miroir ou aux mesures directes (souvent entachées d'une incertitude importante liée au repérage du centre optique de la lentille), la méthode de Bessel ne nécessite pas de connaître la position exacte des faces ou du centre optique de la lentille sur le cavalier. On ne mesure que des *différences de positions* ($d$ et $D$), ce qui élimine les erreurs de zéro systématiques sur le banc d'optique.

2. **Discussion des sources d'incertitude :**
   * Si la distance $D$ est choisie trop proche de la limite $4f'_1$, la distance $d$ entre les deux positions devient très faible ($d \to 0$). Les deux positions se confondent, ce qui rend la mesure de $d$ extrêmement imprécise (incertitude type de type B élevée).
   * Inversement, si $D$ est très grand, la deuxième position $x_B$ de la lentille peut se retrouver trop près de l'écran, ce qui complique l'observation visuelle en raison de la diminution de la luminosité et de l'ouverture utile de la lentille. Un compromis classique en TP est de choisir $D \approx 5f'_1$ ou $6f'_1$.