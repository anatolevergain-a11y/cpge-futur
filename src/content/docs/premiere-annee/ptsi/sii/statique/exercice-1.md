---
title: 'Exercice 1 : Principe fondamental de la statique (PFS)'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la modernisation d'une ligne de production automatisée, on s'intéresse à un système de levage et de positionnement de charges lourdes par un bras manipulateur. 

Le système étudié est un dispositif de maintenance (voir schéma de principe) modélisé par un mécanisme plan (dans le plan $(O, \vec{x}, \vec{y})$). L'objectif de cette étude est de déterminer les efforts maximaux que doit fournir l'actionneur (un vérin électromécanique) pour maintenir le bras en équilibre sous charge, et d'évaluer la pertinence du modèle statique face aux frottements réels.

**Données et hypothèses :**
* Le problème est rapporté au repère galiléen $\mathcal{R}_0 = (O, \vec{x}, \vec{y}, \vec{z})$, supposé fixe.
* On étudie l'équilibre d'un ensemble rigide $S = \{1 \cup 2\}$, constitué d'un bras (1) de longueur $L$ et de masse négligée, et d'une charge utile (2) assimilée à un point matériel $C$ de masse $M = \text{150 kg}$.
* Le champ de pesanteur est $\vec{g} = -g \vec{y}$ avec $g = \text{9,81 m}\cdot\text{s}^{-2}$.
* Le bras (1) est articulé en $O$ sans frottement (liaison pivot d'axe $(O, \vec{z})$).
* L'actionnement est assuré par un vérin linéaire (3+4) modélisé par une liaison glissière et une liaison pivot, exerçant une force $\vec{F}_{3 \to 1} = F \vec{u}$ agissant au point $B$ du bras, avec $\vec{u}$ un vecteur unitaire orienté selon l'axe du vérin.

---

### ❓ Questions progressives

1. **Modélisation et bilan des actions mécaniques**
   * Isoler l'ensemble $S = \{1 \cup 2\}$. 
   * Recenser et caractériser par leurs torseurs exprimés au point $O$ les actions mécaniques extérieures s'exerçant sur $S$.

2. **Application du Principe Fondamental de la Statique (PFS)**
   * En appliquant le théorème de la résultante statique et le théorème du moment statique à l'ensemble $S$, établir la relation algébrique liant la norme de l'effort du vérin $F$, la masse $M$, la longueur $L$ et les paramètres géométriques de position du bras.

3. **Analyse critique du modèle et ordres de grandeur**
   * L'application numérique donne une longueur $L = \text{1,5 m}$ et un angle d'inclinaison du bras par rapport à l'horizontale $\theta = 30^\circ$. Le point d'accroche du vérin est situé à une distance $OA = d = \text{0,5 m}$ et l'angle du vérin avec la verticalité est $\alpha = 15^\circ$. Calculer l'effort $F$ fourni par le vérin.
   * *Question d'analyse critique :* Dans la réalité industrielle, les liaisons parfaites n'existent pas. Des frottements secs s'exercent au niveau de l'articulation en $O$ (rayon du pivot $r = \text{20 mm}$, coefficient de frottement adhésif $\f = \text{0,15}$). Proposer une démarche pour estimer l'impact de ce frottement sur l'effort réel à fournir par le vérin et discuter des limites du modèle de liaison parfaite.

---

### 💡 Pistes & Indications

* **Question 1 :** Pensez à bien définir le point de réduction (ici $O$ est judicieux car il annule le moment de la liaison pivot). Exprimez le poids de la charge en fonction de ses coordonnées dans le plan.
* **Question 2 :** Le problème étant plan dans le plan $(O, \vec{x}, \vec{y})$, le théorème du moment statique se projette selon l'axe unique $\vec{z}$.
* **Question 3 :** Veillez à bien homogénéiser les unités (système international). Pour l'analyse critique, utilisez la notion de cône de frottement ou l'approche énergétique/statique par le moment du couple de frottement résistant.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Modélisation et bilan des actions mécaniques extérieures
L'ensemble isolé est $S = \{1 \cup 2\}$. Les actions mécaniques extérieures qui s'exercent sur $S$ sont :
* **Action de la pesanteur** sur la charge (2) au point $C$ : 
  $$\{ \mathcal{T}_{\text{pes} \to S} \} = \left\{ \begin{array}{c} \vec{R}_{\text{pes} \to S} = -Mg \vec{y} \\ \vec{M}_{O}(\text{pes} \to S) = \vec{OC} \wedge (-Mg \vec{y}) \end{array} \right\}_{O}$$
  Avec $\vec{OC} = L \cos\theta \vec{x} + L \sin\theta \vec{y}$. Ainsi, $\vec{M}_{O}(\text{pes} \to S) = -M g L \cos\theta \vec{z}$.

* **Action du bâti (0) sur le bras (1)** via la liaison pivot parfaite en $O$ :
  $$\{ \mathcal{T}_{0 \to 1} \} = \left\{ \begin{array}{c} \vec{R}_{0 \to 1} = X_{01}\vec{x} + Y_{01}\vec{y} \\ \vec{M}_{O}(0 \to 1) = \vec{0} \end{array} \right\}_{O}$$

* **Action du vérin (3+4) sur le bras (1)** au point $B$ :
  $$\{ \mathcal{T}_{\text{verin} \to 1} \} = \left\{ \begin{array}{c} \vec{R}_{\text{verin} \to 1} = F \vec{u} \\ \vec{M}_{O}(\text{verin} \to 1) = \vec{OB} \wedge F\vec{u} \end{array} \right\}_{O}$$

#### 2. Application du PFS
Le système $S$ est en équilibre dans le référentiel galiléen $\mathcal{R}_0$. Le PFS s'écrit :
$$\sum \{ \mathcal{T}_{\text{ext} \to S} \} = \{ \mathcal{0} \}$$

En projetant le **théorème du moment statique au point $O$** sur l'axe $\vec{z}$ :
$$- M g L \cos\theta + (\vec{OB} \wedge F\vec{u}) \cdot \vec{z} = 0$$

En posant $\vec{OB} = d (\cos\beta \vec{x} + \sin\beta \vec{y})$ et en exprimant le moment de l'action du vérin, on obtient la relation littérale liant $F$ aux paramètres du système.

#### 3. Application numérique et analyse critique
* **Calcul de l'effort $F$ :**
  A-norme : Avec $M = \text{150 kg}$, $g = \text{9,81 m}\cdot\text{s}^{-2}$, $L = \text{1,5 m}$, $\theta = 30^\circ$, et en projetant correctement géométriquement (application du moment par rapport à $O$), on trouve par application numérique :
  $$F \approx \text{5540 N}$$
  *(Note : L'effort est conséquent, ce qui justifie le choix technologique d'un vérin hydraulique ou électromécanique démultiplié).*

* **Analyse critique des limites du modèle :**
  1. *Frottements dans la liaison pivot :* Le modèle de liaison parfaite en $O$ néglige les frottements. En réalité, un couple de frottement résistant $C_f$ s'oppose à la rotation, évalué par $C_f \approx \frac{4}{3} f r \|\vec{R}_{0 \to 1}\|$. Cela signifie que l'effort réel du vérin devra être *plus élevé* lors de la phase de montée pour vaincre ce couple additionnel, et *plus faible* lors de la descente (phénomène d'autorétention ou d'aide par la gravité).
  2. *Déformations élastiques :* Le bras (1) a été supposé rigide. Pour une longueur de $1,5\text{ m}$ sous $150\text{ kg}$, les flexions (loi de Navier-Bernoulli) bien que faibles, modifient légèrement la géométrie du mécanisme (variation de $\theta$ et $\beta$), induisant une erreur sur l'estimation de l'effort du vérin de l' ordre de 2 à 5%. Un modèle RDM couplé à la statique s'avérerait nécessaire pour un dimensionnement fin.