---
title: 'Cours : Mécanique des fluides'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Mécanique des Fluides (PC - Deuxième année)

---

## 1. Description cinématique et eulérienne des fluides

### Définitions fondamentales
* **Fluide :** Milieu continu, déformable, sans rigidité au repos. Un gaz ou un liquide est modélisé par un champ continu de variables intensives.
* **Approche eulérienne :** On étudie le fluide en fixant un point d'observation $\vec{r}$ dans l'espace galiléen et en observant l'évolution temporelle des grandeurs locales : masse volumique $\rho(\vec{r}, t)$, champ des vitesses $\vec{v}(\vec{r}, t)$, pression $P(\vec{r}, t)$, température $T(\vec{r}, t)$.
* **Dérivée particulaire (ou totale) :** Soit une grandeur physique scalaire ou vectorielle $A(\vec{r}, t)$ transportée par une particule fluide dont la trajectoire est $\vec{r}(t)$. La variation temporelle subie par cette particule est :
  $$\frac{D A}{D t} = \frac{\partial A}{\partial t} + (\vec{v} \cdot \vec{\nabla}) A$$
  *(Le terme $\frac{\partial A}{\partial t}$ est la dérivée locale et $(\vec{v} \cdot \vec{\nabla}) A$ est la dérivée convective).*

---

## 2. Statique des fluides

### Théorèmes et Équations
* **Condition d'équilibre :** Dans un référentiel galiléen, pour un fluide au repos ($\vec{v} = \vec{0}$), l'équation fondamentale de la statique des fluides (exprimée par application du PFD à une particule fluide) s'écrit :
  $$\vec{\nabla} P = \rho \vec{g}$$
  où $\vec{g}$ est le champ de pesanteur (supposé uniformément vertical : $\vec{g} = -g \vec{e}_z$).

* **Conséquences :**
  1. **Fluide incompressible et homogène ($\rho = \text{cste}$) dans un champ de pesanteur uniforme :**
     $$P(z) + \rho g z = P_0 + \rho g z_0 = \text{cste}$$
     Soit la loi fondamentale de la statique des fluides : $P_2 - P_1 = -\rho g (z_2 - z_1)$.
  2. **Atmosphère isotherme ($T = \text{cste}$, gaz parfait $\rho = \frac{M P}{R T}$) :**
     $$P(z) = P_0 \exp\left(-\frac{M g z}{R T}\right)$$

---

## 3. Dynamique des fluides visqueux : Navier-Stokes

### Définitions et Théorèmes
* **Fluide parfait vs Fluide visqueux :** Un fluide est dit *parfait* si son tenseur des contraintes se réduit à la pression isotrope (absence de frottements visqueux). Il est *réel/visqueux* si les frottements internes s'opposent au mouvement.
* **Équation de Navier-Stokes (quantité de mouvement) :** Pour un fluide newtonien, incompressible ($\rho = \text{cste}$) et de viscosité dynamique $\eta$ constante, l'application du PFD à un volume de contrôle conduit à :
  $$\rho \left( \frac{\partial \vec{v}}{\partial t} + (\vec{v} \cdot \vec{\nabla}) \vec{v} \right) = -\vec{\nabla} P + \eta \Delta \vec{v} + \rho \vec{g}$$
* **Nombre de Reynolds ($\text{Re}$) :** Grandeur sans dimension caractérisant le régime d'écoulement :
  $$\text{Re} = \frac{\rho V L}{\eta} = \frac{V L}{\nu}$$
  avec $V$ une vitesse caractéristique, $L$ une dimension caractéristique de l'obstacle ou de la conduite, et $\nu = \frac{\eta}{\rho}$ la viscosité cinématique.
  * Si $\text{Re} \ll 1$ : Régime de Stokes (laminaire visqueux prédominant, inertie négligeable).
  * Si $\text{Re} \gg 1$ : Régime d'Euler (effets visqueux négligeables sauf aux parois, écoulement potentiel).

---

## 4. Dynamique des fluides parfaits : Théorème de Bernoulli

### Théorèmes
* **Équation de continuité (conservation de la masse) :**
  $$\frac{\partial \rho}{\partial t} + \vec{\nabla} \cdot (\rho \vec{v}) = 0$$
  Pour un fluide incompressible ($\rho = \text{cste}$), cela se simplifie en :
  $$\vec{\nabla} \cdot \vec{v} = 0 \quad (\text{écoulement isovolume})$$
  En régime stationnaire et monodimensionnel (dans un tube de courant de section $S(x)$), cela donne la conservation du débit volumique $D_v$ :
  $$v_1 S_1 = v_2 S_2 = D_v = \text{cste}$$

* **Théorème de Bernoulli (première forme - le long d'une ligne de courant) :**
  Pour un écoulement stationnaire, parfait, incompressible et soumis à des forces conservatives ($\vec{g} = -\vec{\nabla}(gz)$), le long d'une même ligne de courant :
  $$P + \frac{1}{2} \rho v^2 + \rho gz = \text{cste}$$

* **Théorème de Bernoulli généralisé (entre deux points 1 et 2 d'une même ligne de courant) :**
  En présence de forces de viscosité (pertes de charge volumiques ou par unité de volume notées $\delta W_{\text{nc}}$ ou $P_{\text{ch}}$) :
  $$P_1 + \frac{1}{2} \rho v_1^2 + \rho g z_1 = P_2 + \frac{1}{2} \rho v_2^2 + \rho g z_2 + \Delta P_{\text{charge}}$$

---

## 5. Méthodes

* **Méthode 1 : Appliquer le théorème de Bernoulli**
  1. Identifier un système (le fluide) stationnaire.
  2. Définir des lignes de courant pertinentes.
  3. Choisir deux points $1$ et $2$ judicieusement (par exemple : un point de surface libre où la pression est la pression atmosphérique $P_0$ et la vitesse quasi-nulle, et un point de sortie de tuyère).
  4. Écrire la conservation de Bernoulli et exploiter l'équation de continuité si les sections varient.

* **Méthode 2 : Traiter un écoulement laminaire stationnaire (Ex: Poiseuille)**
  1. Poser les symétries et invariances du champ de vitesse ($\vec{v} = v(r) \vec{e}_z$ en coordonnées cylindriques).
  2. Simplifier l'équation de Navier-Stokes (termes convectifs nuls en stationnaire/rectiligne, $\frac{\partial P}{\partial z} = \text{cste}$).
  3. Intégrer par rapport à la variable d'espace avec les conditions aux limites (condition de non-glissement à la paroi : $\vec{v}_{\text{paroi}} = \vec{0}$).

---

## 6. Pièges à éviter en CPGE

1. **Oublier les hypothèses de Bernoulli :** Ne jamais appliquer Bernoulli si le fluide est visqueux (sauf si l'on introduit explicitement les pertes de charge), ou si l'écoulement est instationnaire, ou entre deux points n'appartenant *pas* à la même ligne de courant (sauf si l'écoulement est irrotationnel partout).
2. **Erreur de signe avec la pression et l'altitude :** Dans l'équation de la statique, $\frac{d P}{d z} = -\rho g$ (si $z$ est orienté vers le haut). La pression *diminue* quand l'altitude *augmente*.
3. **Confusion sur la nature des vitesses :** Dans l'équation de continuité $v_1 S_1 = v_2 S_2$, $v$ représente la vitesse *moyenne* sur la section $S$ si le profil n'est pas uniforme (comme dans Poiseuille où $v$ est maximale au centre).
4. **Dimension des pertes de charge :** Veiller à homogénéiser les termes de Bernoulli. Soit tout exprimer en pressions (Pa), soit en hauteurs de colonne de fluide (m).