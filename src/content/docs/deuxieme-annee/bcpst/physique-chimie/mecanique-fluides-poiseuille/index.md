---
title: "Mécanique des Fluides : Écoulements Visqueux & Perte de Charge"
description: "Méthodologie détaillée, rédactions modèles et conseils des jurys de concours Agro-Véto / G2E."
sidebar:
  badge:
    text: "Méthode Concours"
    variant: "caution"
---

## 🎯 Analyse des attentes et critères d'évaluation des jurys

Les concours Agro-Véto et G2E accordent une importance capitale à la maîtrise des écoulements visqueux, car ils modélisent des situations biologiques et géologiques fondamentales (circulation sanguine, écoulement de la sève brute, nappes phréatiques). 

En tant qu'examinateur, j'attends des candidats de seconde année en filière BCPST :
1. **Une rigueur absolue dans la pose des hypothèses** : Tout bilan ou équation doit être précédé d'une modélisation claire (stationnarité, symétrie cylindrique, invariance par translation, fluide incompressible et newtonien).
2. **La maîtrise des ordres de grandeur** : Le calcul du nombre de Reynolds $\text{Re}$ doit systématiquement être mené pour justifier le régime d'écoulement (laminaire ou turbulent).
3. **Une manipulation propre des équations vectorielles et scalaires** : Savoir projeter l'équation de Navier-Stokes dans le système de coordonnées adapté (cylindrique le plus souvent).
4. **L'interprétation physique des résultats** : Un profil de vitesse parabolique ou une résistance hydraulique ne doit pas être seulement restitué par cœur, mais relié aux notions de frottement visqueux et de conservation du débit.

---

## 📐 Rappels théoriques & Démonstrations incontournables

L'équation fondamentale régissant un fluide visqueux incompressible newtonien est l'équation de Navier-Stokes :

$$\rho \left( \frac{\partial \vec{v}}{\partial t} + (\vec{v} \cdot \vec{\nabla}) \vec{v} \right) = -\vec{\nabla} P + \mu \Delta \vec{v} + \rho \vec{g}$$

Avec :
- $\rho$ la masse volumique du fluide ($\text{kg/m}^3$).
- $\vec{v}$ le champ de vitesse ($\text{m/s}$).
- $P$ la pression ($\text{Pa}$).
- $\mu$ la viscosité dynamique ($\text{Pa}\cdot\text{s}$ ou $\text{kg}/(\text{m}\cdot\text{s})$).
- $\vec{g}$ l'accélération de la pesanteur ($\text{m/s}^2$).

Le nombre de Reynolds est défini par :

$$\text{Re} = \frac{\rho V D}{\mu}$$

où $V$ est une vitesse caractéristique et $D$ une dimension caractéristique (ex: le diamètre d'une conduite). Pour $\text{Re} < 2000$ en conduite cylindrique, l'écoulement est laminaire.

---

### 📌 Question / Problématique classique 1 : Établissement du profil de vitesse de Poiseuille dans une conduite cylindrique

#### 💡 Méthode de rédaction canonique
1. **Poser le cadre géométrique et les symétries** : Utiliser les coordonnées cylindriques $(r, \theta, z)$. L'axe de la conduite est porté par $\vec{e}_z$.
2. **Justifier les simplifications** :
   - Écoulement stationnaire : $\frac{\partial}{\partial t} = 0$.
   - Écoulement cylindrique axisymétrique : $\frac{\partial}{\partial \theta} = 0$.
   - Écoulement établi (invariance par translation selon $z$) : $\frac{\partial}{\partial z} = 0$ pour la vitesse.
   - Vitesse portée uniquement par $\vec{e}_z$ : $\vec{v} = v(r) \vec{e}_z$.
3. **Simplifier l'équation de continuité** : $\text{div}(\vec{v}) = 0 \implies \frac{\partial v_z}{\partial z} = 0$, ce qui est cohérent.
4. **Projeter l'équation de Navier-Stokes** selon $\vec{e}_z$ et résoudre l'équation différentielle du second ordre obtenue.
5. **Appliquer les conditions aux limites** : Condition de non-glissement à la paroi ($v(R) = 0$) et régularité sur l'axe ($v(0)$ fini).

#### 📋 Exercice type concours résolu pas à pas
*Énoncé :* Déterminer le profil de vitesse $v(r)$ d'un fluide newtonien de viscosité $\mu$ dans une conduite cylindrique horizontale de rayon $R$ et de longueur $L$, soumise à une différence de pression $\Delta P = P_{\text{amont}} - P_{\text{aval}} > 0$.

*Résolution :*
L'équation de Navier-Stokes projetée selon $\vec{e}_z$ en régime stationnaire et établi se réduit à :

$$0 = -\frac{\partial P}{\partial z} + \mu \left( \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial v}{\partial r} \right) \right)$$

Puisque le terme de gauche ne dépend que de $z$ et celui de droite que de $r$, la dérivée $\frac{\partial P}{\partial z}$ est une constante que l'on note $\frac{-\Delta P}{L}$. L'équation devient :

$$\frac{1}{r} \frac{d}{dr} \left( r \frac{dv}{dr} \right) = -\frac{\Delta P}{\mu L}$$

On intègre une première fois par rapport à $r$ :

$$r \frac{dv}{dr} = -\frac{\Delta P}{2 \mu L} r^2 + A$$

Sur l'axe ($r=0$), la vitesse ne peut diverger, donc la constante d'intégration $A$ est nulle. On intègre une seconde fois :

$$v(r) = -\frac{\Delta P}{4 \mu L} r^2 + B$$

En utilisant la condition aux limites de non-glissement à la paroi ($v(R) = 0$) :

$$0 = -\frac{\Delta P}{4 \mu L} R^2 + B \implies B = \frac{\Delta P}{4 \mu L} R^2$$

Le profil de vitesse de Poiseuille est donc :

$$v(r) = \frac{\Delta P}{4 \mu L} (R^2 - r^2)$$

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- Oublier de justifier pourquoi $\frac{\partial P}{\partial z}$ est constant.
- Mauvaise gestion des constantes d'intégration (oublier de poser $A=0$ en argumentant sur la régularité en $r=0$).
- Inverser le signe de $\Delta P$, menant à des vitesses négatives ou aberrantes.

---

### 📌 Question / Problématique classique 2 : Calcul du débit volumique et de la résistance hydraulique

#### 💡 Méthode de rédaction canonique
1. **Partir de la définition intégrale du débit volumique** :
   
   $$D_v = \iint_{\text{S}} \vec{v} \cdot \vec{n} \, dS$$

2. **Exprimer l'élément de surface** en coordonnées cylindriques : $dS = r \, dr \, d\theta$.
3. **Intégrer le profil de vitesse** préalablement établi sur la section de la conduite.
4. **Identifier la loi de Poiseuille** sous la forme $D_v = \frac{\Delta P}{R_h}$, où $R_h$ est la résistance hydraulique de la conduite.

#### 📋 Exercice type concours résolu pas à pas
*Énoncé :* À partir du profil de vitesse $v(r) = \frac{\Delta P}{4 \mu L} (R^2 - r^2)$ établi précédemment, calculer le débit volumique $D_v$ et en déduire l'expression de la résistance hydraulique $R_h$ de la conduite.

*Résolution :*
Le débit volumique s'exprime par l'intégrale :

$$D_v = \int_{0}^{2\pi} d\theta \int_{0}^{R} v(r) r \, dr$$

En effectuant l'intégration sur $\theta$ ($2\pi$) :

$$D_v = 2\pi \int_{0}^{R} \frac{\Delta P}{4 \mu L} (R^2 - r^2) r \, dr$$

$$\text{Sortons les constantes :} \quad D_v = \frac{2\pi \Delta P}{4 \mu L} \int_{0}^{R} (R^2 r - r^3) \, dr$$

Calculons la primitive :

$$\int_{0}^{R} (R^2 r - r^3) \, dr = \left[ \frac{R^2 r^2}{2} - \frac{r^4}{4} \right]_{0}^{R} = \frac{R^4}{4} - \frac{R^4}{4} = \frac{R^4}{4}$$

Finalement, le débit volumique vaut (Loi de Hagen-Poiseuille) :

$$D_v = \frac{\pi R^4 \Delta P}{8 \mu L}$$

Par analogie avec la loi d'ohm en électricité ($U = R I$), on définit la résistance hydraulique $R_h$ par la relation $\Delta P = R_h D_v$ :

$$R_h = \frac{8 \mu L}{\pi R^4}$$

#### ⚠️ Les pièges majeurs relevés dans les rapports de juridictions de concours
- Erreur dans l'élément de surface (oublier le facteur $r$ dans $r \, dr \, d\theta$).
- Confondre le rayon $R$ et le diamètre $D$ dans la formule finale (le $R^4$ devient $\frac{D^4}{16}$, source fréquente d'erreurs d'asymétrie dimensionnelle).

---

### 📌 Question / Problématique classique 3 : Applications au réseau vasculaire et au transport de sève brute

#### 💡 Méthode de rédaction canonique
1. **Traduire le problème biologique en circuit hydraulique équivalent** :
   - Association en série : les débits se somment ou les pressions s'additionnent selon les lois des nœuds et des mailles (analogie avec les résistances électriques).
   - Association en parallèle : même chute de pression $\Delta P$ à travers chaque branche.
2. **Prendre en compte la loi de vasomotorisation ou la structure fasciculaire** (vaisseaux du xylème).
3. **Mener l'application numérique rigoureuse** en veillant à la conversion homogène des unités (notamment la viscosité en $\text{Pa}\cdot\text{s}$ et les dimensions en mètres).

#### 📋 Exercice type concours résolu pas à pas
*Énoncé :* Un tronc d'arbre est assimilé à un faisceau de $N = 10^4$ vaisseaux conducteurs (xylème) identiques, assimilés à des cylindres de longueur $L = 2,0 \text{ m}$ et de rayon interne $R = 20 \, \mu\text{m}$. La sève brute, dont la viscosité est prise égale à celle de l'eau $\mu = 1,0 \times 10^{-3} \text{ Pa}\cdot\text{s}$, circule sous l'effet d'une différence de pression globale $\Delta P = 1,0 \times 10^5 \text{ Pa}$. Calculer le débit total de sève montante dans le tronc.

*Résolution :*
1. **Identifier la modélisation** : Les $N$ vaisseaux sont disposés en parallèle. La chute de pression $\Delta P$ est la même pour chaque vaisseau. Le débit total $D_{\text{total}}$ est la somme des débits de chaque vaisseau :
   
   $$D_{\text{total}} = N \times D_v$$

2. **Exprimer le débit d'un vaisseau unique** grâce à la loi de Hagen-Poiseuille établie précédemment :
   
   $$D_v = \frac{\pi R^4 \Delta P}{8 \mu L}$$

3. **Application numérique** :
   - $N = 10^4$
   - $R = 20 \times 10^{-6} \text{ m} = 2,0 \times 10^{-5} \text{ m}$
   - $\Delta P = 1,0 \times 10^5 \text{ Pa}$
   - $\mu = 1,0 \times 10^{-3} \text{ Pa}\cdot\text{s}$
   - $L = 2,0 \text{ m}$

   Calculons $R^4$ :
   
   $$R^4 = (2,0 \times 10^{-5})^4 = 1,6 \times 10^{-19} \text{ m}^4$$

   Substituons dans l'expression de $D_v$ :
   
   $$D_v = \frac{\pi \times (1,6 \times 10^{-19}) \times (1,0 \times 10^5)}{8 \times (1,0 \times 10^{-3}) \times 2,0}$$
   
   $$D_v = \frac{\pi \times 1,6 \times 10^{-14}}{1,6 \times 10^{-2}} = \pi \times 10^{-12} \text{ m}^3/\text{s}$$

   Calculons le débit total $D_{\text{total}}$ :
   
   $$D_{\text{total}} = 10^4 \times \pi \times 10^{-12} = \pi \times 10^{-8} \text{ m}^3/\text{s}$$

   Convertissons en $\text{cm}^3/\text{min}$ pour donner un ordre de grandeur concret :
   
   $$D_{\text{total}} = 3,14 \times 10^{-8} \text{ m}^3/\text{s} = 3,14 \times 10^{-2} \text{ cm}^3/\text{s} \approx 1,88 \text{ cm}^3/\text{min}$$

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- Erreurs d'unités impardonnables sur les micromètres ($\mu\text{m}$) convertis en mètres.
- Oubli de la puissance 4 sur le rayon $R$ dans la formule de Poiseuille (erreur dimensionnelle fatale relevée chaque année).
- Confusion entre montage en série et en parallèle lors de l'évaluation des débits dans les réseaux vasculaires complexes.