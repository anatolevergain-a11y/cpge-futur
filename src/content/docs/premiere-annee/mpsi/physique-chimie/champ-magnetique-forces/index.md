---
title: 'Cours : Champ magnétique et force de Lorentz'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

## 📌 1. Définitions & Cadre d'étude

Le champ magnétique, noté $\vec{B}$, est un champ vectoriel défini en tout point de l'espace tridimensionnel. Dans le cadre de la physique non relativiste, il s'exprime en teslas ($\text{T}$). 

### Vecteur champ magnétique et sources
Le champ magnétique est créé par des charges en mouvement (courants électriques) ou par des moments magnétiques intrinsèques (aimants, spins). Il obéit à l'équation de Maxwell-Flux :
$$\text{div}(\vec{B}) = \vec{\nabla} \cdot \vec{B} = 0$$
Cette structure mathématique traduit l'inexistence de monopôles magnétiques à ce jour : les lignes de champ de $\vec{B}$ sont toujours des lignes fermées ou s'étendant à l'infini.

### Force de Lorentz
Soit une particule ponctuelle de charge $q$ (en coulombs, $\text{C}$), se déplaçant à la vitesse $\vec{v}$ (en $\text{m}\cdot\text{s}^{-1}$) dans un référentiel galiléen, en présence d'un champ électrique $\vec{E}$ (en $\text{V}\cdot\text{m}^{-1}$) et d'un champ magnétique $\vec{B}$ (en $\text{T}$). La force subie par cette particule est la force de Lorentz $\vec{F}$ :
$$\vec{F} = q\left(\vec{E} + \vec{v} \wedge \vec{B}\right)$$

Dans le cas où seul le champ magnétique règne, la force magnétique $\vec{m}$ s'écrit :
$$\vec{F}_{\text{mag}} = q(\vec{v} \wedge \vec{B})$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Propriété fondamentale : Invariant de puissance
**Théorème :** *La force magnétique ne travaille pas.*

**Démonstration :**
Soit $\mathcal{P}$ la puissance instantanée développée par la force magnétique $\vec{F}_{\text{mag}}$ sur la charge $q$. Par définition, on a :
$$\mathcal{P} = \vec{F}_{\text{mag}} \cdot \vec{v} = \left[q(\vec{v} \wedge \vec{B})\right] \cdot \vec{v}$$
Par permutabilité du produit mixte, on sait que $\vec{v} \cdot (\vec{v} \wedge \vec{B}) = (\vec{v} \wedge \vec{v}) \cdot \vec{B}$. Or, le produit vectoriel d'un vecteur par lui-même est nul :
$$\vec{v} \wedge \vec{v} = \vec{0}$$
Par conséquent :
$$\mathcal{P} = 0$$
La force magnétique est donc orthogonale à la vitesse à tout instant. Elle ne modifie pas l'énergie cinétique de la particule : la norme de la vitesse $\|\vec{v}\|$ reste constante au cours du mouvement si $\vec{E} = \vec{0}$.

### Mouvement d'une charge dans un champ magnétique uniforme et stationnaire
Plaçons une particule de masse $m$ et de charge $q$ dans un champ magnétique uniforme $\vec{B} = B_0 \vec{e}_z$. 
En appliquant le Principe Fondamental de la Dynamique (PFD) dans un référentiel galiléen :
$$m \frac{\mathrm{d}\vec{v}}{\mathrm{d}t} = q(\vec{v} \wedge \vec{B}_0)$$

En projetant cette relation vectorielle dans un système de coordonnées cartésiennes $(O, \vec{e}_x, \vec{e}_y, \vec{e}_z)$, avec $\vec{v} = (\dot{x}, \dot{y}, \dot{z})$, on obtient le système différentiel couplé suivant :
$$\begin{cases} 
\ddot{x} = \omega_c \dot{y} \\ 
\ddot{y} = -\omega_c \dot{x} \\ 
\ddot{z} = 0 
\end{cases}$$
Où l'on introduit la **pulsation cyclotron** $\omega_c = \frac{q B_0}{m}$.

L'intégration de la dernière équation donne un mouvement uniforme selon l'axe $(Oz)$ : $z(t) = z_0 + v_{z0}t$.
Pour le mouvement dans le plan $(xOy)$, en posant l'affixe $u(t) = x(t) + i y(t)$, l'équation devient :
$$\ddot{u} + i \omega_c \dot{u} = 0$$
Dont la solution générale est une trajectoire hélicoïdale, projection d'un cercle de rayon $R = \frac{v_{\perp}}{|\omega_c|}$ (appelé rayon de Larmor) dans le plan perpendiculaire au champ magnétique.

---

## 💡 3. Méthodes de calcul & Algorithmes

Pour résoudre un problème de mécanique impliquant la force de Lorentz, la méthode canonique en MPSI s'articule ainsi :

1. **Préciser le cadre :** Définir le référentiel d'étude et s'assurer de son caractère galiléen.
2. **Bilan des forces :** Recenser les forces agissant sur le système (souvent le poids $\vec{P} = m\vec{g}$ et la force magnétique $\vec{F}_{\text{mag}}$, le champ électrique étant parfois nul).
3. **Application du PFD :** Écrire vectoriellement $m \frac{\mathrm{d}\vec{v}}{\mathrm{d}t} = \sum \vec{F}_{\text{ext}}$.
4. **Projection adaptée :** 
   - Coordonnées cartésiennes si le champ est uniforme.
   - Coordonnées cylindriques ou de Frenet si la trajectoire est plane et circulaire.
5. **Exploitation énergétique :** Si $\vec{E} = \vec{0}$, utiliser l'invariance de la norme de la vitesse $\|\vec{v}\| = \text{cte}$ pour simplifier les équations différentielles.

---

## ⚠️ 4. Pièges classiques & Erreurs à éviter

* **Confusion sur le travail de la force :** Oublier que la force magnétique ne travaille pas et tenter d'utiliser le théorème de l'énergie cinétique pour déterminer une vitesse sous l'unique action d'un champ magnétique. La variation d'énergie cinétique est nulle.
* **Erreur de signe avec la charge :** Ne pas omettre le signe algébrique de $q$. Pour une charge négative (comme l'électron, $q = -e$), le sens de la force $\vec{F} = -e(\vec{v} \wedge \vec{B})$ est strictement opposé à celui donné par la règle de la main droite.
* **Utilisation abusive de la formule du champ uniforme :** Appliquer l'expression $\vec{F} = q(\vec{v} \wedge \vec{B})$ en omettant de vérifier si le champ $\vec{B}$ dépend de l'espace ou du temps (cas des champs non uniformes nécessitant des intégrations spatiales rigoureuses).
* **Homogénéité et unités :** Confondre les dimensions. Le champ magnétique $\vec{B}$ s'exprime en teslas ($\text{T}$), équivalent à $\text{kg}\cdot\text{s}^{-2}\cdot\text{A}^{-1}$, et non en newtons. Veillez à convertir systématiquement toutes les données dans le Système International (SI) avant tout calcul.