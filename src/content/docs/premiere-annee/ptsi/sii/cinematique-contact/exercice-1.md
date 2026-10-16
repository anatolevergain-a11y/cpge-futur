---
title: 'Exercice 1 : Roulement sans glissement (engrenages)'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse cinématique d'un train d'engrenages à contact direct

## Énoncé

On s'intéresse à un étage de réduction d'un réducteur planétaire industriel utilisé dans la chaîne de transmission d'un robot mobile lourd. Le mécanisme étudié est un train simple composé d'un pignon menant $1$ (de centre $O_1$) et d'une roue menée $2$ (de centre $O_2$). 

L'étude est menée dans le plan $(O_1, \vec{x}, \vec{y})$, repéré par le repère galiléen $\mathcal{R}_0 = (O_1, \vec{x}_0, \vec{y}_0, \vec{z}_0)$.

### Données géométriques et cinématiques :
* Rayon primitif du pignon $1$ : $R_1 = 45\text{ mm}$
* Rayon primitif de la roue $2$ : $R_2 = 135\text{ mm}$
* Entraxe : $E = O_1O_2 = R_1 + R_2 = 180\text{ mm}$
* Fréquence de rotation du pignon d'entrée par rapport au bâti $0$ : $N_{1/0} = 3000\text{ tr/min}$
* Le contact entre les dents au point $I$ est supposé parfait et vérifie l'hypothèse de **Roulement Sans Glissement (RSG)**.

---

## Questions

1. **Paramétrage et cinématique du solide $1$**
   Exprimer le vecteur vitesse de rotation $\vec{\Omega}_{1/0}$ du pignon $1$ par rapport au bâti $0$ en fonction de $N_{1/0}$ et de $\vec{z}_0$. Calculer sa valeur numérique en $\text{rad/s}$.

2. **Condition de roulement sans glissement**
   Soit $I$ le point géométrique de contact entre les deux dents des solides $1$ et $2$. 
   * Définir la condition cinématique traduisant le roulement sans glissement au point $I$ entre le solide $1$ et le solide $2$.
   * En déduire la relation vectorielle entre $\vec{V}(I \in 1/0)$, $\vec{V}(I \in 2/0)$ et $\vec{V}(I \in 2/1)$.

3. **Détermination du rapport de réduction**
   * Par application des lois de composition des vitesses et en projetant judicieusement la relation précédente, exprimer la vitesse de rotation $\vec{\Omega}_{2/0}$ en fonction de $\vec{\Omega}_{1/0}$, $R_1$ et $R_2$.
   * Calculer la valeur numérique de la fréquence de rotation $N_{2/0}$ de la roue $2$ en $\text{tr/min}$.

4. **Analyse critique et limites du modèle**
   * Calculer la vitesse linéaire maximale au point de contact $I$.
   * Le modèle du roulement sans glissement est-il rigoureusement exact pour des engrenages réels fonctionnant à haute vitesse sous charge ? Citer un phénomène physique limitant la validité de ce modèle.

---

## Pistes de résolution

* **Question 1 :** Penser à la conversion des $\text{tr/min}$ en $\text{rad/s}$ via la formule $\omega = \frac{\pi N}{30}$.
* **Question 2 :** Le RSG impose que la vitesse de glissement du solide $2$ par rapport au solide $1$ au point $I$ soit nulle ($\vec{V}(I \in 2/1) = \vec{0}$).
* **Question 3 :** Utilisez le fait que les vitesses d'entraînement des centres instantanés de rotation ou la projection de la relation de transport des vitesses le long de la tangente commune aux cercles primitifs mènent directement au rapport des rayons (loi de Willis pour un train simple).
* **Question 4 :** Pour l'analyse critique, pensez au comportement élastique local des dentures (phénomène d'elastohydrodynamique, glissement relatif inhérent au profil en dévolute de cercle hors du pôle de engrènement).

---

## Corrigé pas à pas

### 1. Paramétrage et cinématique du solide $1$
La vitesse de rotation du pignon $1$ par rapport au bâti $0$ s'écrit :
$$\vec{\Omega}_{1/0} = \omega_{1/0} \vec{z}_0$$
Avec $\omega_{1/0} = \frac{\pi \cdot N_{1/0}}{30}$.
Application numérique :
$$\omega_{1/0} = \frac{\pi \times 3000}{30} = 100\pi \approx 314,16\text{ rad/s}$$

### 2. Condition de roulement sans glissement
Par définition, le Roulement Sans Glissement (RSG) au point $I$ se traduit par la nullité du vecteur vitesse de glissement $\vec{V}(I \in 2/1)$ :
$$\vec{V}(I \in 2/1) = \vec{0}$$
D'après la loi de composition des vitesses :
$$\vec{V}(I \in 2/0) = \vec{V}(I \in 1/0) + \vec{V}(I \in 2/1)$$
Sous l'hypothèse de RSG, il vient :
$$\vec{V}(I \in 2/0) = \vec{V}(I \in 1/0)$$

### 3. Détermination du rapport de réduction
Exprimons la vitesse du point $I$ appartenant au solide $1$ dans son mouvement par rapport à $0$, en utilisant le centre $O_1$ :
$$\vec{V}(I \in 1/0) = \vec{V}(O_1 \in 1/0) + \vec{\Omega}_{1/0} \wedge \vec{O_1I}$$
Le pignon $1$ étant en liaison pivot fixe d'axe $(O_1, \vec{z}_0)$ par rapport au bâti $0$, $\vec{V}(O_1 \in 1/0) = \vec{0}$. 
Avec $\vec{O_1I} = R_1 \vec{y}_0$ (en orientant $\vec{y}_0$ vers le point de contact $I$), on a :
$$\vec{V}(I \in 1/0) = (\omega_{1/0} \vec{z}_0) \wedge (R_1 \vec{y}_0) = -R_1 \omega_{1/0} \vec{x}_0$$

De même pour le solide $2$ par rapport à $0$ (pivot d'axe $O_2$) :
$$\vec{V}(I \in 2/0) = \vec{V}(O_2 \in 2/0) + \vec{\Omega}_{2/0} \wedge \vec{O_2I} = \vec{0} + (\omega_{2/0} \vec{z}_0) \wedge (-R_2 \vec{y}_0) = R_2 \omega_{2/0} \vec{x}_0$$

En égalant les deux expressions (condition de RSG) :
$$-R_1 \omega_{1/0} \vec{x}_0 = R_2 \omega_{2/0} \vec{x}_0 \implies \omega_{2/0} = -\frac{R_1}{R_2} \omega_{1/0}$$

Application numérique pour la fréquence de rotation $N_{2/0}$ :
$$N_{2/0} = -N_{1/0} \times \frac{R_1}{R_2} = -3000 \times \frac{45}{135} = -3000 \times \frac{1}{3} = -1000\text{ tr/min}$$
*(Le signe négatif indique simplement un sens de rotation inversé).*

### 4. Analyse critique et limites du modèle
* **Vitesse linéaire au point de contact :**
  $$V(I) = R_1 \omega_{1/0} = 45 \times 10^{-3}\text{ m} \times 314,16\text{ rad/s} \approx 14,14\text{ m/s}$$
  Cette vitesse périphérique est élevée ($\approx 51\text{ km/h}$).

* **Limites du modèle du RSG :**
  Le modèle de roulement *pur* est une idéalisation cinématique. Dans la réalité :
  1. **Glissement géométrique (glissement spécifique) :** Les dents des engrenages conjugués (souvent à profil de développante de cercle) ne roulent parfaitement qu'au pôle d'engrènement. Partout ailleurs sur la ligne d'action, il y a un mouvement de glissement combiné au roulement (nécessaire pour transmettre la puissance avec des frottements de contact).
  2. **Déformations élastiques (Hertz) :** Sous l'effet de la charge transmise, les matériaux subissent des micro-déformations au voisinage du point $I$, créant une zone de contact (et non un point géométrique) générant un "glissement élastique" (ou *creep*).
Conclusion: * Le modèle cinématique rigide est excellent pour déterminer les rapports de transmission globaux (cinématique pure), mais insuffisant pour l'analyse thermique, l'usure ou le rendement énergétique où le frottement et le glissement relatif doivent être intégrés (tribologie).