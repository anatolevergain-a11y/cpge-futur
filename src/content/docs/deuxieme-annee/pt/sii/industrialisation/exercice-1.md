---
title: 'Exercice 1 : Tolérancement GPS'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse et vérification d'un système assemblé par ajustement conique

---

## Énoncé du problème

On s'intéresse à la liaison conique assurant l'assemblage et l'étanchéité relative entre le corps d'un injecteur (pièce 1) et sa buse d'aspersion (pièce 2) dans un système d'injection diesel haute pression. 

Le cahier des charges fonctionnel impose une coaxialité rigoureuse et un contact étanche sur porteur conique. Pour valider la criticité de fabrication, on étudie le tolérancement géométrique (GPS - *Geometrical Product Specifications*) de la portée conique de la buse (pièce 2).

Le dessin de définition de la pièce 2 indique une tolérance de **forme de cône** et une tolérance de **coaxialité** par rapport à la référence cylindrique $(A, B)$ assurant le guidage dans le corps.

---

## Données géométriques et nominales

*   Angle nominal du cône : $\alpha = 60^\circ$ (demi-angle $\alpha/2 = 30^\circ$).
*   Diamètre nominal de la base du cône : $D_n = 12\text{ mm}$.
*   Longueur de la portée conique : $L = 8\text{ mm}$.
*   Exigence de battement circulaire ou de coaxialité spécifiée sur le dessin : $T = 0{,}015\text{ mm}$ (soit $15\ \mu\text{m}$).
*   Rugosité visée sur la portée conique : $Ra \le 0{,}4\ \mu\text{m}$.

---

## Questions

### Partie 1 : Analyse fonctionnelle et décodage des spécifications GPS
1. **1.1.** Rappeler la définition et la matérialisation de la référence $(A, B)$ sur le dessin de définition. Quel est le nombre de degrés de liberté bloqués par cette référence cylindrique courte ?
2. **1.2.** Interpréter graphiquement et littéralement la zone de tolérance associée à l'exigence de coaxialité de la surface conique par rapport à $(A, B)$. Quel est l'impact d'un défaut de coaxialité sur l'étanchéité de l'assemblage ?

### Partie 2 : Calculs de chaîne de tolerancement et analyse critique
3. **2.1.** Le défaut de forme du cône est limité par une tolérance indépendante de $0{,}008\mtext{ mm}$. En considérant les pires conditions de matière (MMC - *Maximum Material Condition*), exprimer la condition géométrique d'interférence maximale lors de l'assemblage avec le corps (pièce 1 supposée parfaite).
4. **2.2.** Discuter des limites du modèle rigide. En réalité, les pièces subissent des contraintes de serrage élastique. Quel est l'ordre de grandeur de la déformation élastique face à une incertitude de mesure de $5\ \mu\text{m}$ ? Conclure sur la pertinence du choix de la tolérance $T = 0{,}015\text{ mm}$.

---

## Pistes et indications

* **Piste 1.1 :** Penser à la liaison pivot glissant équivalente et au nombre de points de contact pour un cylindre court.
* **Piste 1.2 :** La zone de tolérance pour une coaxialité de surface de révolution est délimitée par deux cylindres coaxiaux de diamètre $T$.
* **Piste 2.1 :** Utiliser la trigonométrie dans le triangle rectangle associé à la génératrice du cône pour projeter les défauts axiaux et radiaux.

---

## Corrigé pas à pas

### Partie 1 : Analyse fonctionnelle et décodage des spécifications GPS

#### 1.1. Référence $(A, B)$ et degrés de liberté
* **Définition :** La référence $(A, B)$ est un système de deux références spécifiées (ou axes/surfaces associés). Dans le cas d'un cylindre long ou de deux portées cylindriques $A$ et $B$ coaxiales, cela définit un axe de référence unique.
* **Degrés de liberté bloqués :** Une liaison cylindrique de type centrage court bloque 2 translations ($T_x, T_y$) et 2 rotations ($\theta_x, \theta_y$). Le système $(A, B)$ (centrage long) bloque les 4 degrés de liberté de position et d'orientation dans l'espace, ne laissant libre que la rotation $\theta_z$ (autour de l'axe) et la translation $T_z$.

#### 1.2. Interprétation de la coaxialité
* **Zone de tolérance :** La spécification de coaxialité de la surface conique par rapport à l'axe $(A, B)$ délimite la zone tolérée entre **deux cylindres coaxiaux de diamètre $T = 0{,}015\text{ mm}$**, centrés sur l'axe de référence $(A, B)$. La surface réelle du cône doit entièrement se situer à l'intérieur de cette zone double.
* **Impact sur l'étanchéité :** Un défaut de coaxialité excessif provoque un faux-rond du cône. Lors du serrage, le contact ne se fait plus sur 360°, mais sur une portion sectorielle, entraînant une fuite de carburant sous haute pression (qui peut atteindre $2000\text{ bar}$).

---

### Partie 2 : Calculs et analyse critique

#### 2.1. Analyse des conditions de matière
La demi-portion du cône vérifie un angle $\alpha/2 = 30^\circ$. 
Soit $\Delta r$ le défaut radial maximal induit par la tolérance de coaxialité et de forme. 
L'erreur géométrique cumulée maximale combinant la forme ($\varepsilon_f = 0{,}008\text{ mm}$) et la coaxialité ($T = 0{,}015\text{ mm}$) conduit à un écart maximal sur le rayon de la portée :
$$\delta R_{\max} = \frac{T}{2} + \varepsilon_f = \frac{0{,}015}{2} + 0{,}008 = 0{,}0075 + 0{,}008 = 0{,}0155\text{ mm}$$

Le déplacement axial $\delta z$ correspondant le long de la génératrice inclinée d'un angle $\alpha/2 = 30^\circ$ se calcule par projection trigonométrique :
$$\delta z = \frac{\delta R_{\max}}{\tan(\alpha/2)} = \frac{0{,}0155}{\tan(30^\circ)} = \frac{0{,}0155}{0{,}577} \approx 0{,}0268\text{ mm} = 26{,}8\ \mu\text{m}$$

#### 2.2. Analyse critique et limites du modèle
* **Ordre de grandeur :** Une variation axiale de $26{,}8\ \mu\text{m}$ due aux tolérances géométriques est du même ordre de grandeur que la pénétration élastique (écrasement) recherchée pour assurer l'etanchéité métal-métal. 
* **Limites du modèle rigide :** Le modèle géométrique pur suppose des pièces indéformables. Or, l'acier de la buse et du corps subit des contraintes de Hertz et des déformations élastiques locales lors du serrage au couple. 
* **Conclusion critique :** Si l'incertitude de mesure en salle de métrologie (3D ou comparateur d' coaxialité) est de l'ordre de $5\ \mu\text{m}$, elle représente près de $33\ \%}$ de la tolérance spécifiée ($15\ \mu\text{m}$). Le choix de $T = 0{,}015\text{ mm}$ est donc **très sévère** et nécessite des procédés de finition par rectification fine ou pierrage, sous peine de taux de rebuts élevés. Un choix technologique basé sur un appariement des pièces (classement sélectif) est souvent privilégié en grande série automobile pour s'affranchir de telles exigences de dispersion.