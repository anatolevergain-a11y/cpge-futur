---
title: 'Cours : Induction électromagnétique'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Induction électromagnétique
Niveau: ** MPSI (Première année)  
**Matière :** Physique-Chimie  

---

## 1. Introduction et phénomènes fondamentaux

L'induction électromagnétique, découverte par Michael Faraday et mise en équation par James Clerk Maxwell, décrit la création d'une force électromotrice (f.e.m.) dans un circuit conducteur soumis à un champ magnétique variable ou en mouvement.

### 1.1. Flux magnétique à travers une surface
Soit $\vec{B}(\vec{r}, t)$ le champ magnétique et $S$ une surface orientée s'appuyant sur un contour fermé $\mathcal{C}$. Le flux magnétique $\Phi$ à travers cette surface est défini par :
$$\Phi(t) = \iint_{S} \vec{B}(\vec{r}, t) \cdot \vec{n} \, dS$$
* **Unité :** Le Weber ($\text{Wb}$), ou $\text{T}\cdot\text{m}^2$.
* Le vecteur normal $\vec{S} = \iint_S \vec{n} \, dS$ est lié au sens d'orientation du contour $\mathcal{C}$ par la règle du bonhomme d'Ampère (ou du tire-bouchon).

---

## 2. Lois fondamentales de l'induction

### 2.1. Loi de Faraday-Neumann
La force électromotrice induite $e(t)$ dans un circuit fermé $\mathcal{C}$ est opposée à la dérivée temporelle du flux magnétique traversant ce circuit :
$$e(t) = -\frac{d\Phi}{dt}$$
* **Unité :** Le Volt ($\text{V}$).

### 2.2. Loi de Lenz (Aspect qualitatif)
> *« Les effets de l'induction s'opposent aux causes qui leur ont donné naissance. »*

Cette loi se traduit mathématiquement par le signe « $-$ » dans la loi de Faraday. Elle garantit la conservation de l'énergie : un courant induit crée son propre champ magnétique qui s'oppose à la variation du champ (ou du flux) extérieur.

---

## 3. Origines de la f.e.m. induite : les deux cas de figure

Selon la nature de la variation du flux (variation temporelle du champ $\vec{B}$ ou variation géométrique du circuit), on distingue deux origines physiques distinctes, bien que régies par la même loi macroscopique.

### 3.1. Induction de Lorentz (Circuit en mouvement dans $\vec{B}$ stationnaire)
Si le circuit est en mouvement à la vitesse $\vec{v}$ dans un champ magnétique stationnaire, chaque porteur de charge (de charge $q$) est soumis à la force de Lorentz magnétique :
$$\vec{F}_m = q\vec{v} \times \vec{B}$$
La force électromotrice de mouvement est définie par la circulation du champ électromoteur $\vec{E}_m = \vec{v} \times \vec{B}$ le long du contour :
$$e = \oint_{\mathcal{C}} (\vec{v} \times \vec{B}) \cdot d\vec{l}$$

### 3.2. Induction de Neumann (Circuit fixe dans $\vec{B}$ variable)
Si le circuit est fixe ($\vec{v} = \vec{0}$), la force de Lorentz ne travaille pas. C'est la variation temporelle du champ magnétique $\frac{\partial \vec{B}}{\partial t}$ qui induit un champ électrique non conservatif $\vec{E}_{\text{ind}}$ via l'équation de Maxwell-Faraday :
$$\vec{\nabla} \times \vec{E}_{\text{ind}} = -\frac{\partial \vec{B}}{\partial t}$$
Le flux variant provient alors uniquement de $\frac{\partial \vec{B}}{\partial t}$.

---

## 4. Aspects énergétiques et circuits électriques

### 4.1. Modélisation électrique d'un circuit induit
Dans un circuit fermé de résistance totale $R$ et d'inductance propre $L$, traversé par un courant induit $i(t)$, la loi d'Ohm généralisée (ou loi de Pouillet) s'écrit :
$$u_{\text{circuit}} = Ri + L\frac{di}{dt} = e(t)$$
où $e(t) = -\frac{d\Phi}{dt}$ est la f.e.m. induite.

### 4.2. Bilan énergétique et courants de Foucault
* **Puissance électrique dissipée par effet Joule :** 
  $$\mathcal{P}_J = R i^2$$
* **Puissance mécanique (dans le cas d'un système en mouvement) :** 
  $$\mathcal{P}_{\text{méc}} = \vec{F}_{\text{Laplace}} \cdot \vec{v}$$
Par conservation de l'énergie (en régime quasi-stationnaire), la puissance mécanique fournie est convertie en puissance électrique, puis dissipée par effet Joule sous forme de chaleur :
$$\mathcal{P}_{\text{méc}} + \mathcal{P}_{\text{f.e.m.}} = 0 \quad \text{avec} \quad \mathcal{P}_{\text{f.e.m.}} = e \cdot i$$

* **Courts de Foucault :** Ce sont des courants induits circulant en "boucles" à l'intérieur même des masses métalliques massives plongées dans un champ variable. Ils sont souvent responsables de pertes énergétiques parasites qu'il convient de limiter (par exemple en feuilletant les noyaux de transformateurs).

---

## 5. Exemples classiques et méthodes de résolution (MPSI)

### 5.1. Le rail de Laplace
* **Dispositif :** Une tige conductrice de longueur $\ell$, mobile sur deux rails conducteurs parallèles inclinés ou horizontaux, fermée par une résistance $R$, le tout plongé dans un champ magnétique uniforme permanent $\vec{B} = B_0 \vec{u}_z$.
* **Méthode :**
  1. Orienter le circuit et choisir la normale $\vec{n}$ pour calculer $\Phi(t) = B_0 S(t) = B_0 x(t) \ell$.
  2. Appliquer Faraday : $e(t) = -\frac{d\Phi}{dt} = -B_0 \ell \dot{x}$.
  3. Établir l'équation électrique : $Ri = e = -B_0 \ell v$ (avec $v = \dot{x}$).
  4. Calculer la force de Laplace $\vec{F}_{\text{Laplace}} = i \vec{dl} \times \vec{B} = -\frac{B_0^2 \ell^2 v}{R} \vec{u}_x$.
  5. Appliquer le PFD sur la tige de masse $m$ : 
     $$m \ddot{x} = -\frac{B_0^2 \ell^2}{R} \dot{x}$$
     On obtient une équation différentielle caractéristique d'un **freinage électromagnétique** de temps caractéristique $\tau = \frac{mR}{B_0^2 \ell^2}$.