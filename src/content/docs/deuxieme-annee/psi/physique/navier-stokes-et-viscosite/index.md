---
title: "Équations de Navier-Stokes & Écoulements Laminaires"
description: "Méthodologie détaillée, rédactions modèles et conseils des jurys de concours Centrale-Supélec / Mines-Ponts."
sidebar:
  badge:
    text: "Méthode Concours"
    variant: "caution"
---

## 🎯 Analyse des attentes et critères d'évaluation des jurys

En filière PSI, les épreuves de physique des concours Centrale-Supélec et Mines-Ponts accordent une place primordiale à la mécanique des fluides. Les examinateurs ne cherche pas seulement à évaluer une restitution de cours, mais bien une capacité d'analyse critique face à un problème modélisé. 

Les exigences principales des jurys sont les suivantes :
1. **La rigueur dans les hypothèses :** Toute application de l'équation de Navier-Stokes doit être précédée d'un inventaire précis des hypothèses (régime permanent, incompressible, invariant selon certaines directions, symétries géométriques). Une omission est immédiatement sanctionnée.
2. **L'analyse dimensionnelle :** Savoir mener un argument d'échelle (adimensionnement) est une compétence discriminante. Le jury attend des candidats qu'ils sachent identifier le terme dominant (visqueux versus inertiel) selon l'ordre de grandeur des paramètres.
3. **La manipulation des opérateurs vectoriels :** Les erreurs de calculs dans le calcul du rotationnel ou dans l'expression du laplacien en coordonnées cylindriques ou sphériques sont trop fréquentes. L'utilisation correcte du formulaire est exigée.
4. **La rigueur de la rédaction :** Le passage de l'équation locale aux bilans intégraux ou aux profils de vitesse doit être rédigé sans saut d'étape mathématique injustifié.

---

## 📐 Rappels théoriques & Démonstrations incontournables

L'équation fondamentale de la dynamique d'un fluide newtonien incompressible, dite **équation de Navier-Stokes**, s'écrit sous sa forme locale :

$$\rho \left( \frac{\partial \vec{v}}{\partial t} + (\vec{v} \cdot \vec{\nabla}) \vec{v} \right) = -\vec{\nabla} P + \mu \Delta \vec{v} + \rho \vec{g}$$

Avec :
- $\rho$ la masse volumique du fluide ($\text{en } \text{kg/m}^3$)
- $\vec{v}$ le champ d'Euler des vitesses ($\text{en } \text{m/s}$)
- $P$ la pression ($\text{en } \text{Pa}$)
- $\mu$ la viscosité dynamique ($\text{en } \text{Pa}\cdot\text{s}$)
- $\vec{g}$ l'accélération de la pesanteur ($\text{en } \text{m/s}^2$)

L'hypothèse d'incompressibilité se traduit par l'équation de conservation de la masse (équation de continuité) :

$$\vec{\nabla} \cdot \vec{v} = 0$$

---

### 📌 Question / Problématique classique 1 : Simplification de l'équation de Navier-Stokes en régime permanent et unidirectionnel

#### 💡 Méthode de rédaction canonique
Pour traiter un écoulement laminaire stationnaire dans une conduite ou entre deux plaques :
1. Définir le système de coordonnées adapté au problème (cartésien pour des plaques planes, cylindrique pour une conduite circulaire).
2. Exploiter l'invariance géométrique pour éliminer des composantes de vitesse et des dérivées partielles ($\frac{\partial}{\partial t} = 0$, invariance selon certaines directions d'espace).
3. Utiliser l'équation de continuité $\vec{\nabla} \cdot \vec{v} = 0$ pour contraindre davantage le champ des vitesses.
4. Projeter l'équation de Navier-Stokes sur chaque axe pour identifier les composantes triviales et celle menant à l'équation différentielle du profil de vitesse.

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** Soit un écoulement plan de Poiseuille permanent entre deux plaques planes fixes situées à $y = 0$ et $y = h$. Le fluide est soumis à un gradient de pression constant imposé selon l'axe $(Ox)$. Déterminer le profil de vitesse $v_x(y)$.

**Résolution :**
1. *Hypothèses et cadre :* Le régime est permanent ($\frac{\partial}{\partial t} = 0$) et l'écoulement est unidirectionnel selon $\vec{e}_x$, soit $\vec{v} = v_x(y, z) \vec{e}_x$. Par invariance selon l'axe $(Oz)$, on a $\frac{\partial}{\partial z} = 0$, donc $\vec{v} = v_x(y) \vec{e}_x$.
2. *Équation de continuité :* 
   $$\vec{\nabla} \cdot \vec{v} = \frac{\partial v_x}{\partial x} = 0$$
   Ce qui est cohérent puisque $v_x$ ne dépend que de $y$.
3. *Projection de Navier-Stokes selon $(Ox)$ :*
   L'accélération convective est nulle car $(\vec{v} \cdot \vec{\nabla}) \vec{v} = v_x \frac{\partial v_x}{\partial x} \vec{e}_x = \vec{0}$. L'équation de Navier-Stokes se réduit à :
   $$0 = -\frac{\partial P}{\partial x} + \mu \frac{\partial^2 v_x}{\partial y^2}$$
4. *Résolution mathématique :*
   Le terme de gauche ne dépend que de $x$ (ou est constant) et le terme de droite ne dépend que de $y$. Cette égalité n'est possible que si les deux termes sont égaux à une constante. On pose donc $\frac{d P}{d x} = G = \text{constante}$.
   L'équation différentielle devient :
   $$\mu \frac{d^2 v_x}{d y^2} = G$$
   Par double intégration :
   $$v_x(y) = \frac{G}{2\mu} y^2 + A y + B$$
5. *Conditions aux limites :*
   - Adhérence en $y = 0$ : $v_x(0) = 0 \implies B = 0$
   - Adhérence en $y = h$ : $v_x(h) = 0 \implies \frac{G}{2\mu} h^2 + A h = 0 \implies A = -\frac{G h}{2\mu}$
   Finalement :
   $$v_x(y) = \frac{1}{2\mu} \left( -\frac{d P}{d x} \right) y (h - y)$$

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- Oublier de justifier pourquoi les termes convectifs $(\vec{v} \cdot \vec{\nabla}) \vec{v}$ s'annulent. Le jury pénalise l'écriture directe de l'équation simplifiée sans mentionner l'unidirectionnalité.
- Confondre la dérivée partielle de la pression $\frac{\partial P}{\partial x}$ avec une fonction globale. Il faut bien souligner que $P$ ne dépend que de $x$ dans le cas de l'écoulement de Poiseuille plan.

---

### 📌 Question / Problématique classique 2 : Détermination du tenseur des contraintes visqueuses et calcul de traînée

#### 💡 Méthode de rédaction canonique
1. Rappeler l'expression générale du tenseur des contraintes $\overline{\overline{\sigma}} = -P \overline{\overline{I}} + \overline{\overline{\tau}}$, où $\overline{\overline{\tau}}$ est le tenseur visqueux de components $\tau_{ij} = \mu \left( \frac{\partial v_i}{\partial x_j} + \frac{\partial v_j}{\partial x_i} \end{right)}$.
2. Calculer la force exercée par le fluide sur une paroi solide via l'intégrale de surface : 
   $$\vec{F} = \iint_{S} \overline{\overline{\sigma}} \cdot \vec{n} \, dS$$
   avec $\vec{n}$ le vecteur unitaire normal sortant du fluide (entrant dans la paroi).
3. Isoler la contribution de la force de frottement visqueux (la traînée visqueuse) de la contribution de pression.

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** En reprenant l'écoulement de Poiseuille plan précédent entre $y = 0$ et $y = h$ sur une surface de plaques de longueur $L$ et de largeur $W$ selon $(Oz)$, calculer la force totale de cisaillement exercée par le fluide sur la plaque supérieure ($y = h$).

**Résolution :**
1. *Expression du tenseur des contraintes :*
   Le fluide étant incompressible et newtonien, la composante utile du cisaillement visqueux pour la plaque supérieure (située en $y=h$, où la normale sortante du fluide est $-\vec{e}_y$) est :
   $$\tau_{xy} = \mu \left( \frac{\partial v_x}{\partial y} + \frac{\partial v_y}{\partial x} \right) = \mu \frac{d v_x}{d y}$$
2. *Calcul du gradient de vitesse à la paroi :*
   À partir du profil $v_x(y) = \frac{1}{2\mu} \left( -\frac{d P}{d x} \right) y (h - y)$, on dérive :
   $$\frac{d v_x}{d y} = \frac{1}{2\mu} \left( -\frac{d P}{d x} \right) (h - 2y)$$
   À la paroi supérieure $y = h$ :
   $$\left. \frac{d v_x}{d y} \right|_{y=h} = \frac{1}{2\mu} \left( -\frac{d P}{d x} \right) (h - 2h) = -\frac{h}{2\mu} \left( -\frac{d P}{d x} \right)$$
3. *Calcul de la force par unité de surface (contrainte de cisaillement) :*
   La force par unité de surface exercée par le fluide sur la plaque est donnée par $\vec{f} = \overline{\overline{\sigma}} \cdot (-\vec{e}_y)$. 
   La composante tangentielle selon $\vec{e}_x$ s'écrit :
   $$\sigma_{xy} = \tau_{xy} = \mu \left( -\frac{h}{2\mu} \left( -\frac{d P}{d x} \right) \right) = -\frac{h}{2} \frac{d P}{d x}$$
4. *Intégration sur la surface :*
   La surface de la plaque a pour aire $S = L \times W$. La force totale de traînée $\vec{F}_{\text{traînée}}$ subie par la plaque est :
   $$\vec{F}_{\text{traînée}} = \iint_{\text{plaque}} \tau_{xy} \vec{e}_x \, dS = \left( -\frac{h}{2} \frac{d P}{d x} \right) (L W) \vec{e}_x$$
   Puisque $-\frac{d P}{d x} > 0$ (la pression décroît dans le sens de l'écoulement), cette force s'exerce bien dans le sens de l'écoulement sur la plaque.

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- Erreur de signe sur le vecteur normal $\vec{n}$ lors du calcul de la force exercée par le fluide sur la paroi. Il faut impérativement identifier si l'on calcule la force subie par le fluide ou par la paroi (action/réaction).
- Oublier que la pression contribue également à la force totale s'exerçant sur des géométries finies non uniformes, bien que dans un canal infini plan horizontal, la résultante de pression pure s'annule souvent par symétrie longitudinale hormis le terme moteur global.

---

### 📌 Question / Problématique classique 3 : Nombre de Reynolds et transition vers le régime turbulent

#### 💡 Méthode de rédaction canonique
1. Introduire l'adimensionnement des équations de Navier-Stokes en posant des grandeurs caractéristiques : une vitesse caractéristique $V$, une longueur caractéristique $L$ et une pression caractéristique $\Delta P$.
2. Faire apparaître le nombre de Reynolds $\text{Re}$ comme rapport entre les forces d'inertie et les forces visqueuses :
   $$\text{Re} = \frac{\rho V L}{\mu}$$
3. Conclure sur le régime de l'écoulement :
   - $\text{Re} \ll 1$ : Régime de Stokes (inertie négligeable, dominance visqueuse).
   - $\text{Re} \sim 1$ à $2000$ (en conduite) : Régime laminaire.
   - $\text{Re} \gg 2000$ : Transition vers le régime turbulent, nécessitant une modélisation statistique (ou empirique, type lois de Blasius ou Colebrook).

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** On considère un écoulement d'eau ($\rho = 1000 \text{ kg/m}^3$, $\mu = 1.0 \times 10^{-3} \text{ Pa}\cdot\text{s}$) dans une canalisation cylindrique de diamètre $D = 5.0 \text{ cm}$. La vitesse moyenne du fluide est $V = 0.10 \text{ m/s}$. 
1. Calculer le nombre de Reynolds de l'écoulement et préciser le régime.
2. Évaluer l'ordre de grandeur de la longueur d'établissement hydrodynamique $L_e$ sachant que la relation empirique est $L_e \approx 0.06 \times \text{Re} \times D$ en régime laminaire.

**Résolution :**
1. *Calcul du nombre de Reynolds :*
   La longueur caractéristique est le diamètre $D$. Le nombre de Reynolds s'écrit :
   $$\text{Re} = \frac{\rho V D}{\mu}$$
   A.N. :
   $$\text{Re} = \frac{1000 \times 0.10 \times 0.050}{1.0 \times 10^{-3}} = \frac{5}{1.0 \times 10^{-3}} = 5000$$
   *Analyse du résultat :* Le nombre de Reynolds trouvé est $\text{Re} = 5000$, ce qui dépasse la valeur critique usuelle en conduite cylindrique ($\text{Re}_c \approx 2000 - 2400$). L'écoulement est donc potentiellement **turbulent** (ou en régime de transition instable), ce qui invalide l'hypothèse d'un écoulement strictement laminaire de type Poiseuille laminaire pur. *(Note : Si l'on recalcule avec une vitesse plus faible $V = 0.02 \text{ m/s}$, $\text{Re} = 1000$, le régime serait laminaire).* Supposons pour la suite de l'application numérique de la question 2 que l'on se place juste au seuil ou dans un cadre académique laminaire $\text{Re} = 1000$.
2. *Calcul de la longueur d'établissement (pour $\text{Re} = 1000$) :*
   $$L_e \approx 0.06 \times 1000 \times 0.050 = 3 \text{ m}$$
   Cette distance indique que sur les premiers mètres de la conduite, le profil de vitesse n'est pas parabolique et dépend de la coordonnée axiale $x$.

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- Utiliser le rayon $R$ au lieu du diamètre $D$ comme longueur caractéristique dans le calcul du Reynolds en conduite circulaire, ce qui fausse le résultat d'un facteur 2 et conduit à une erreur de diagnostic sur le régime.
- Oublier de mentionner que les équations de Navier-Stokes sous leur forme stationnaire laminaire ne sont **plus valables** au-delà du seuil de turbulence, car le champ de vitesse devient instationnaire et aléatoire à petite échelle (fluctuations turbulentes).