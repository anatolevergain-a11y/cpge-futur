---
title: 'Exercice 1 : Dimensionnement des engrenages'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Dimensionnement et analyse critique d'un réducteur à engrenages cylindriques à denture droite

**Filière :** PT  
**Matière :** Sciences Industrielles de l'Ingénieur (SII)  
Chapitre: ** Conception mécanique  
**Thème :** Dimensionnement des engrenages et analyse critique des limites du modèle  

---

## 1. Énoncé du problème

On s'intéresse à l'etablissement de la chaîne de transmission d'un mécanisme de levage industriel. Le réducteur étudié est constitué d'un train d'engrenages cylindriques à denture droite extérieurs. 

L'objectif de ce problème est de valider le dimensionnement géométrique et dynamique du pignon moteur et de la roue réceptrice, puis d'analyser la pertinence des modèles utilisés face aux réalités physiques de fonctionnement.

### Données du problème :
* Puissance nominale transmise par l'arbre moteur : $P_n = 7,5\text{ kW}$
* Fréquence de rotation de l'arbre moteur : $N_1 = 1500\text{ tr/min}$
* Rapport de réduction souhaité : $k = \frac{1}{4}$ (vitesse de sortie divisée par 4)
* Angle de pression normal de la denture : $\alpha = 20^\circ$
* Largeur des dents : $b = 40\text{ mm}$
* Matériau des deux roues (acier traité) : Limite d'élasticité $R_{e} = 650\text{ MPa}$, Limite de résistance à la traction $R_{m} = 850\text{ MPa}$, Limite de fatigue en flexion $\sigma_{lim} = 280\text{ MPa}$
* Module choisi pour la denture : $m = 3\text{ mm}$
* Nombre de dents du pignon (conducteur) : $Z_1 = 20$
* Facteur de sécurité exigé par le cahier des charges : $s_{min} = 2$

---

## 2. Questions

### Partie A : Cinématique et géométrie du contact
1. Calculer la vitesse de rotation de la roue réceptrice $N_2$ (en $\text{tr/min}$) et déterminer le nombre de dents $Z_2$ de la roue pour respecter le rapport de réduction.
2. Calculer le diamètre primitif $d_1$ du pignon et $d_2$ de la roue, ainsi que l'entraxe $a$ du réducteur.
3. Exprimer et calculer la vitesse linéaire tangentielle $v$ sur le cercle primitif (en $\text{m/s}$).

### Partie B : Efforts transmissibles et résistance des matériaux (Modèle de Lewis)
4. Calculer le moment du couple nominal $C_1$ appliqué sur l'arbre moteur, puis déterminer l'effort tangentiel transmis $F_t$ au niveau de la denture. En déduire l'effort normal $F_n$ agissant sur le flanc de la dent en négligeant le frottement.
5. Rappeler l'expression de la contrainte maximale de flexion au pied de la dent selon le modèle de Lewis : 
   $$\sigma = \frac{F_t}{b \cdot m \cdot Y}$$
   *(On prendra pour le facteur de forme de Lewis $Y \approx 0,32$ pour $Z_1 = 20$)*.
6. Calculer la contrainte effective $\sigma$ subie par la dent du pignon et la comparer à la limite de fatigue $\sigma_{lim}$ en tenant compte du facteur de sécurité. Conclure sur la validité du choix du module.

### Partie C : Analyse critique et limites du modèle
7. Le modèle de Lewis repose sur plusieurs hypothèses simplificatrices (effort appliqué en un seul point, encastrement de la dent modélisé comme une poutre rectangulaire, répartition uniforme de la charge sur la largeur $b$). Discuter qualitativement de l'influence d'un défaut d'alignement géométrique sur la répartition réelle de la charge.
8. Citer un phénomène physique non pris en compte dans ce modèle statique qui apparaît à haute vitesse et qui tend à augmenter considérablement les contraintes réelles au pied de la dent.

---

## 3. Pistes et indications

* **Q1 & Q2 :** Pensez aux formules de base liant le rapport des vitesses aux nombres de dents, et le diamètre primitif au module ($d = m \cdot Z$).
* **Q4 :** La puissance est reliée au couple par $P = C \cdot \omega$, avec $\omega = \frac{2\pi N}{60}$.
* **Q5 & Q6 :** Veillez à bien homogénéiser les unités (notamment les efforts en Newtons et les dimensions en millimètres pour obtenir des mégapascals).
* **Q7 & Q8 :** Pensez aux notions de concentration de contraintes, de dynamique rapide (chocs d'engrènement) et de lubrification.

---

## 4. Corrigé détaillé

### Partie A : Cinématique et géométrie du contact

1. **Vitesse $N_2$ et nombre de dents $Z_2$ :**
   Le rapport de réduction est $k = \frac{N_2}{N_1} = \frac{1}{4}$.
   $$N_2 = \frac{N_1}{4} = \frac{1500}{4} = 375\text{ tr/min}$$
   Le rapport cinématique est également lié au nombre de dents : $\frac{N_2}{N_1} = \frac{Z_1}{Z_2} \implies Z_2 = Z_1 \cdot \frac{N_1}{N_2} = 20 \times 4 = 80\text{ dents}$.

2. **Diamètres primitifs et entraxe :**
   * Pignon : $d_1 = m \cdot Z_1 = 3 \times 20 = 60\text{ mm}$
   * Roue : $d_2 = m \cdot Z_2 = 3 \times 80 = 240\text{ mm}$
   * Entraxe : $a = \frac{d_1 + d_2}{2} = \frac{60 + 240}{2} = 150\text{ mm}$

3. **Vitesse linéaire tangentielle $v$ :**
   La vitesse angulaire du pignon est :
   $$\omega_1 = \frac{2 \pi N_1}{60} = \frac{2 \pi \times 1500}{60} = 50\pi \approx 157,08\text{ rad/s}$$
   La vitesse tangentielle primitive est :
   $$v = \frac{d_1}{2} \cdot \omega_1 = 0,030 \times 157,08 \approx 4,71\text{ m/s}$$

---

### Partie B : Efforts transmissibles et résistance des matériaux

4. **Moments et efforts :**
   * Couple nominal moteur $C_1$ :
     $$P_n = C_1 \cdot \omega_1 \implies C_1 = \frac{P_n}{\omega_1} = \frac{7500}{50\pi} \approx 47,75\text{ N}\cdot\text{m}$$
   * Effort tangentiel $F_t$ sur le pignon :
     $$C_1 = F_t \cdot \frac{d_1}{2} \implies F_t = \frac{2 C_1}{d_1} = \frac{2 \times 47,75}{0,060} \approx 1591,7\text{ N}$$
   * Effort normal $F_n$ (en négligeant le frottement et en considérant l'angle de pression $\alpha$) :
     $$F_n = \frac{F_t}{\cos(\alpha)} = \frac{1591,7}{\cos(20^\circ)} \approx 1694,3\text{ N}$$

5. **Contrainte maximale de flexion :**
   Application de la formule de Lewis :
   $$\sigma = \frac{F_t}{b \cdot m \cdot Y}$$

6. **Application numérique et validation :**
   $$\sigma = \frac{1591,7}{40 \times 3 \times 0,32} = \frac{1591,7}{38,4} \approx 41,45\text{ MPa}$$
   Le coefficient de sécurité effectif par rapport à la limite de fatigue est :
   $$s = \frac{\sigma_{lim}}{\sigma} = \frac{280}{41,45} \approx 6,75$$
   Puisque $s = 6,75 > s_{min} = 2$, **le choix du module est amplement validé** vis-à-vis du critère de résistance à la flexion de Lewis. Le profil est même surdimensionné de ce point de vue.

---

### Partie C : Analyse critique et limites du modèle

7. **Analyse de la répartition de la charge (Défauts d'alignement) :**
   Le modèle de Lewis suppose une répartition rigoureusement uniforme de la charge sur toute la largeur $b$ de la dent. Or, en réalité, les arbres fléchissent sous l'effet des efforts tangentiels et radiaux, et de légers défauts de fabrication (parallélisme des axes, erreurs de taille de denture) subsistent. 
   * **Conséquence :** La charge ne s'exerce plus sur toute la largeur de la dent mais se concentre sur un bord (effet de flanc). La contrainte locale réelle peut être multipliée par un facteur important (nécessité d'introduire des facteurs correctifs de largeur $K_H$ ou $K_F$ dans les normes type ISO 6336).

8. **Phénomènes dynamiques à haute vitesse :**
   À $v = 4,71\text{ m/s}$ (vitesse modérée mais réelle), les erreurs de pas, aussi minimes soient-elles, ainsi que la variation cyclique de la rigidité d'engrènement (passage d'une à deux paires de dents en contact) génèrent des **chocs dynamiques**. 
   * Ces vibrations créent des surcharges dynamiques internes assimilables à des forces d'inertie supplémentaires non prises en compte par le modèle statique de Lewis. Une analyse vibratoire et un profil de correction de denture (reprise de tête de dent) sont généralement requis en conception industrielle avancée.