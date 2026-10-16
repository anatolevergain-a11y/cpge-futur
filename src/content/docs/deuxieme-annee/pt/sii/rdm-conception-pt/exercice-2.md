---
title: 'Exercice 2 : Dimensionnement d engrenages'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Dimensionnement d'un réducteur à engrenages cylindriques à denture droite

## Préambule et consignes de l'examinateur
Ce problème aborde le dimensionnement mécanique d'un réducteur de vitesse à engrenages, thématique classique des concours de la filière PT (Sciences Industrielles de l'Ingénieur). L'objectif est d'évaluer votre capacité à lier la cinématique, l'action mécanique transmissible (statique/dynamique) et le comportement des matériaux (Résistance des Matériaux). 

Il est rappelé que toute application numérique doit être précédée d'une expression littérale littéralement homogène, et que les résultats doivent être accompagnés de leurs unités exprimées à l'aide de la commande $\text{...}$ en LaTeX.

---

## Étude préliminaire : Kinématique et efforts dans l'engrenage

On considère un réducteur de vitesse composé d'un pignon menant $1$ et d'une roue menée $2$. 
* Nombre de dents du pignon : $Z_1 = 20$
* Nombre de dents de la roue : $Z_2 = 80$
* Module de la denture : $m = 3\text{ mm}$
* Angle de pression : $\alpha = 20^\circ$
* Fréquence de rotation du pignon : $N_1 = 1500\text{ tr/min}$
* Puissance nominale transmise : $P = 10\text{ kW}$
* Largeur de denture : $b = 45\text{ mm}$

### Question 1 : Vitesse de rotation et rapport de réduction
Exprimer et calculer la fréquence de rotation de la roue $N_2$ en $\text{tr/min}$, ainsi que le rapport de réduction $r$.

**Corrigé guidé :**
Le rapport de réduction cinématique pour un engrenage extérieur est donné par :
$$r = \frac{N_2}{N_1} = -\frac{Z_1}{Z_2}$$
En valeur absolue :
$$N_2 = N_1 \times \frac{Z_1}{Z_2} = 1500 \times \frac{20}{80} = 375\text{ tr/min}$$
Le rapport de réduction vaut donc $|r| = 0{,}25$.

---

### Question 2 : Géométrie de l'engrenage
Exprimer et calculer les diamètres de raccordement primitifs $d_1$ et $d_2$ des deux roues.

**Corrigé guidé :**
Par définition, les diamètres primitifs s'expriment en fonction du module $m$ et du nombre de dents $Z$ :
$$d_1 = m \cdot Z_1 = 3 \times 20 = 60\text{ mm} = 0{,}06\text{ m}$$
$$d_2 = m \cdot Z_2 = 3 \times 80 = 240\text{ mm} = 0{,}24\text{ m}$$

---

### Question 3 : Torseur des actions mécaniques transmissibles
En supposant le rendement du contact égal à $1$, exprimer le couple nominal $C_1$ appliqué sur l'arbre $1$, puis déterminer la norme de l'effort tangentiel $T$ agissant sur le flanc de la dent au point de contact primitif.

**Corrigé guidé :**
La puissance se relie au couple et à la vitesse angulaire $\omega_1$ (en $\text{rad/s}$) par la relation $P = C_1 \cdot \omega_1$, avec $\omega_1 = \frac{2\pi N_1}{60}$.
$$C_1 = \frac{P}{\omega_1} = \frac{P \cdot 60}{2 \pi N_1} = \frac{10 \times 10^3 \times 60}{2 \pi \times 1500} \approx 63{,}66\text{ N}\cdot\text{m}$$

L'effort tangentiel $T$ au diamètre primitif découle de l'action du couple :
$$C_1 = T \cdot \frac{d_1}{2} \implies T = \frac{2 C_1}{d_1}$$
AN :
$$T = \frac{2 \times 63{,}66}{0{,}06} \approx 2122\text{ N}$$

L'effort normal total $F_n$ s'en déduit via l'angle de pression $\alpha$ :
$$F_n = \frac{T}{\cos(\alpha)} = \frac{2122}{\cos(20^\circ)} \approx 2259\text{ N}$$
L'effort radial vaut $R = T \cdot \tan(\alpha) = 2122 \times \tan(20^\circ) \approx 772\text{ N}$.

---

## Résistance des matériaux : Vérification de la résistance des dents à la flexion (Formule de Lewis)

On modélise une dent du pignon $1$ comme une poutre encastrée à sa base, de longueur égale à la hauteur utile, de largeur $b$ et d'épaisseur critique à la base notée $s$. L'effort critique est l'effort normal $F_n$ dont seule la composante tangentielle $T$ crée un moment de flexion prépondérant à l'encastrement.

La formule de Lewis évalue la contrainte normale maximale de flexion $\sigma_{\text{max}}$ au pied de la dent par la relation :
$$\sigma_{\text{max}} = \frac{T}{b \cdot m \cdot Y}$$
où $Y$ est le facteur de forme de Lewis, dépendant du profil de la dent. Pour $Z_1 = 20$ et $\alpha = 20^\circ$, on relève $Y \approx 0{,}32$.

### Question 4 : Calcul de la contrainte maximale de flexion
Calculer la contrainte maximale $\sigma_{\text{max}}$ subie par le pignon $1$. Conclure vis-à-vis d'un acier traité dont la limite élastique est $R_e = 600\text{ MPa}$, en adoptant un coefficient de sécurité $s_c = 2$.

**Corrigé guidé :**
Application numérique directe de la formule de Lewis :
$$\sigma_{\text{max}} = \frac{2122}{45 \times 10^{-3} \times 3 \times 10^{-3} \times 0{,}32}$$
$$\sigma_{\text{max}} = \frac{2122}{432 \times 10^{-6}} \approx 4{,}91 \times 10^6\text{ Pa} = 4{,}91\text{ MPa}$$

*Attention aux erreurs d'homogénéité classiques en concours :* $b$ et $m$ doivent être exprimés en mètres si l'on souhaite un résultat en Pascals ($\text{N/m}^2$).

Comparaison avec la condition de résistance :
La contrainte admissible en flexion est :
$$\sigma_{\text{adm}} = \Pi_{\text{adm}} = \frac{R_e}{s_c} = \frac{600}{2} = 300\text{ MPa}$$
Puisque $\sigma_{\text{max}} = 4{,}91\text{ MPa} \ll \sigma_{\text{adm}}$, la condition de résistance à la flexion est **largement validée**.

---

### Question 5 : Dimensionnement en pression de Hertz (Critère d'usure / matage)
Le contact entre deux dents est modélisé par un contact linéique chargé. La pression de Hertz maximale $p_H$ s'exprime par la loi de Hertz :
$$p_H = \sqrt{\frac{F_n \cdot E^*}{\pi \cdot b \cdot \rho^*}}$$
Avec :
* $E^*$ le module d'Young équivalent (pour l'acier, $E^* \approx \frac{E}{2(1-\nu^2)} \approx 115\text{ GPa}$).
* $\rho^*$ le rayon de courbure équivalent au point de contact : $\rho^* = \frac{d_1 \cdot d_2}{2(d_1 + d_2)} \cdot \sin(\alpha)$.

Calculer $\rho^*$, puis évaluer $p_H$. Sachant que la pression limite admissible au matage pour cet acier trempé est $p_{\text{lim}} = 1200\text{ MPa}$, le dimensionnement est-il correct au matage ?

**Corrigé guidé :**
1. Calcul du rayon de courbure équivalent $\rho^*$ :
$$\rho^* = \frac{0{,}06 \times 0{,}24}{2(0{,}06 + 0{,}24)} \times \sin(20^\circ) = \frac{0{,}0144}{2 \times 0{,}30} \times \sin(20^\circ) = 0{,}024 \times \sin(20^\circ) \approx 8{,}208 \times 10^{-3}\text{ m}$$

2. Calcul de la pression de Hertz $p_H$ :
$$p_H = \sqrt{\frac{2259 \times 115 \times 10^9}{\pi \times (45 \times 10^{-3}) \times (8{,}208 \times 10^{-3})}}$$
Sous le radical :
$$\text{Numérateur} = 2{,}597 \times 10^{14}$$
$$\text{Dénominateur} = \pi \times 3{,}694 \times 10^{-4} = 1{,}160 \times 10^{-3}$$
$$p_H = \sqrt{\frac{2{,}597 \times 10^{14}}{1{,}160 \times 10^{-3}}} = \sqrt{2{,}238 \times 10^{17}} \approx 4{,}96 \times 10^8\text{ Pa} = 496\text{ MPa}$$

3. Analyse critique :
La pression maximale calculée $p_H = 496\text{ MPa}$ est inférieure à la pression limite admissible au matage $p_{\text{lim}} = 1200\text{ MPa}$. Le dimensionnement est donc validé vis-à-vis du risque d'écrasement superficiel (matage).

---

## Analyse critique et synthèse (Attendu type Concours PT)

**Question 6 :** Discuter des limites de ce modèle statique bidimensionnel et proposer une amélioration pour un fonctionnement réel à grande vitesse.

**Corrigé guidé :**
* *Limites du modèle :* Le calcul mené ici est purement statique (ou quasi-statique) et néglige les phénomènes dynamiques d'engrènement. À $1500\text{ tr/min}$, les erreurs de theoricité du profil, les défauts de taille et la flexibilité variable des dents (due au nombre de dents en prise tournoyant de 1 à 2) engendrent des chocs dynamiques et des vibrations.
* *Amélioration :* Il conviendrait d'introduire un coefficient dynamique $K_v$ (facteur de service fonction de la vitesse linéaire et de la précision de taillage) qui majore l'effort nominal $T$ : $T_{\text{dyn}} = K_v \cdot T$. De plus, une analyse thermique s'impose pour vérifier que les pertes par frottement n'entraînent pas une destruction du lubrifiant.