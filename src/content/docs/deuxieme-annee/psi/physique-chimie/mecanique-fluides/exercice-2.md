---
title: 'Exercice 2 : Écoulements parfaits et théorème de Bernoulli'
description: 'Problème d entraînement type concours.'
---

# Problème : Étude d'un écoulement parfait stationnaire et application au tube de Pitot-Prandtl

Ce problème s'intéresse à la modélisation de l'écoulement d'un fluide parfait autour d'obstacles et à la mesure locale de vitesse par des méthodes aérodynamiques. Les candidats sont invités à manipuler les équations locales de la mécanique des fluides ainsi que les intégrales premières du mouvement. Une attention particulière sera portée aux hypothèses physiques et à la critique rigoureuse des modèles.

---

## I. Énoncé du problème

On considère un fluide incompressible, de masse volumique $\rho$ constante, supposé parfait (viscosité négligeable) et pesant (accélération de la pesanteur $\vec{g} = -g \vec{e}_z$). L'écoulement est supposé stationnaire.

### Partie A : Rapports énergétiques et relation de Bernoulli généralisée
1. Rappontez l'expression de la conservation de la quantité de mouvement (équation d'Euler) pour un fluide parfait soumis à des forces massiques conservatives.
2. En déduire le théorème de Bernoulli le long d'une ligne de courant. Préciser les hypothèses nécessaires à son application.

### Partie B : Mesure de vitesse par un tube de Pitot-Prandtl
On souhaite mesurer la vitesse $v_0$ d'un écoulement d'air (assimilé à un fluide parfait incompressible de masse volumique $\rho$) loin en amont d'un corps effilé. On utilise un tube de Pitot-Prandtl.
* Le point $A$ (prise statique) est situé sur la paroi latérale du tube où les lignes de courant sont parallèles à l'axe et la vitesse du fluide est égale à la vitesse de l'écoulement non perturbé $v_0$. La pression mesurée en $A$ est $p_A$.
* Le point $B$ (prise d'arrêt) est situé à l'extrémité amont du tube, au niveau d'un point d'arrêt où la vitesse du fluide est nulle. La pression mesurée en $B$ est $p_B$.

3. Exprimer la relation entre les pressions $p_A$ et $p_B$ en appliquant le théorème de Bernoulli entre le point $A$ et le point $B$ sur une même ligne de courant.
4. En déduire l'expression de la vitesse $v_0$ en fonction de $\Delta p = p_B - p_A$ et de $\rho$.

### Partie C : Écoulement autour d'un cylindre et limites du modèle
On modélise l'écoulement autour d'un cylindre infini de rayon $R$ par un champ de vitesses potentielles. En coordonnées polaires $(r, \theta)$, le potentiel de vitesse est donné par :
$$\Phi(r, \theta) = V_0 \left(r + \frac{R^2}{r}\right) \cos\theta$$
5. Déterminer les composantes radiale $v_r(r, \theta)$ and orthoradiale $v_\theta(r, \theta)$ de la vitesse.
6. Calculer la vitesse du fluide sur la paroi du cylindre ($r = R$). En déduire les zones de surpression et de dépression par rapport à la pression incidente $p_0$.
7. **Analyse critique :** Calculer la force résultante exercée par le fluide sur le cylindre (paradoxe de d'Alembert). Discuter de la validité de ce résultat au regard de l'expérience physique et des limites du modèle de fluide parfait.

---

## II. Pistes et indications pour la résolution

* **Q1 & Q2 :** Pensez à utiliser l'identité vectorielle $(\vec{v} \cdot \vec{\nabla})\vec{v} = \vec{\nabla}\left(\frac{v^2}{2}\right) - \vec{v} \land (\vec{\nabla} \land \vec{v})$. Pour une ligne de courant, le terme de rotationnel s'annule si l'écoulement est irrotationnel, ou le produit scalaire avec $\vec{v}$ s'annule le long de la ligne de courant.
* **Q3 & Q4 :** Les effets de l'altitude entre $A$ et $B$ sont généralement négligeables devant les variations de pression dynamique en raison de la faible densité des gaz.
* **Q5 & Q6 :** Rappelez que $\vec{v} = \vec{\nabla}\Phi$. Utilisez l'équation de Bernoulli stationnaire pour relier la pression locale à la vitesse.
* **Q7 :** Intégrez les efforts de pression sur toute la surface du cylindre. Pour la critique, pensez à introduire la notion de couche limite et de viscosité.

---

## III. Corrigé détaillé

### Partie A_1. **Équation d'Euler :**
   Pour un fluide parfait, la force surfacique se réduit à la force de pression $-\vec{\nabla} p$. L'équation fondamentale de la dynamique (quantité de mouvement par unité de volume) s'écrit :
   $$\rho \left( \frac{\partial \vec{v}}{\partial t} + (\vec{v} \cdot \vec{\nabla})\vec{v} \right) = -\vec{\nabla} p + \rho \vec{g}$$
   En régime stationnaire ($\frac{\partial \vec{v}}{\partial t} = \vec{0}$) et avec $\vec{g} = -\vec{\nabla}(gz)$, il vient :
   $$(\vec{v} \cdot \vec{\nabla})\vec{v} = -\frac{1}{\rho}\vec{\nabla} p - \vec{\nabla}(gz)$$

2. **Théorème de Bernoulli :**
   En utilisant l'identité vectorielle et en projetant le long d'une ligne de courant, on obtient l'intégrale de Bernoulli :
   $$p + \frac{1}{2}\rho v^2 + \rho gz = \text{ctes sur une ligne de courant}$$
   *Hypothèses :* Fluide parfait ($\eta = 0$), incompressible ($\rho = \text{cste}$), stationnaire, et forces massiques dérivant d'un potentiel.

### Partie B_3. **Application de Bernoulli entre $A$ et $B$ :**
   Les points $A$ et $B$ étant très proches, on peut négliger la différence d'altitude ($\Delta z \approx 0$). Le théorème de Bernoulli donne :
   $$p_A + \frac{1}{2}\rho v_A^2 = p_B + \frac{1}{2}\rho v_B^2$$
   Par définition, $v_A = v_0$ et $v_B = 0$ (point d'arrêt). Ainsi :
   $$p_A + \frac{1}{2}\rho v_0^2 = p_B \implies p_B - p_A = \frac{1}{2}\rho v_0^2$$

4. **Expression de $v_0$ :**
   On isole la vitesse recherchée :
   $$v_0 = \sqrt{\frac{2(p_B - p_A)}{\rho}} = \sqrt{\frac{2\Delta p}{\rho}}$$
   *(Unité : $v_0$ en $\text{m}\cdot\text{s}^{-1}$, $\Delta p$ en $\text{Pa}$, $\rho$ en $\text{kg}\cdot\text{m}^{-3}$)*.

### Partie C_5. **Champ de vitesses :**
   Par définition, $v_r = \frac{\partial \Phi}{\partial r}$ et $v_\theta = \frac{1}{r}\frac{\partial \Phi}{\partial \theta}$.
   $$v_r(r, \theta) = V_0 \left(1 - \frac{R^2}{r^2}\right) \cos\theta$$
   $$v_\theta(r, \theta) = -V_0 \left(1 + \frac{R^2}{r^2}\right) \sin\theta$$

6. **Vitesse sur la paroi et pressions :**
   Sur la paroi du cylindre ($r = R$), on a $v_r(R, \theta) = 0$ et :
   $$v_\theta(R, \theta) = -2 V_0 \in\theta$$
   La vitesse totale est $v(R, \theta) = |v_\theta(R, \theta)| = 2 V_0 |\sin\theta|$.
   En appliquant Bernoulli entre l'infini amont ($p_0, v_0$) et un point de la paroi ($p, v$) :
   $$p_0 + \frac{1}{2}\rho V_0^2 = p(R, \theta) + \frac{1}{2}\rho (2V_0\sin\theta)^2$$
   $$p(R, \theta) = p_0 + \frac{1}{2}\rho V_0^2 (1 - 4\sin^2\theta)$$
   * Zones de surpression : là où $p > p_0$, soit $|\sin\theta| < \frac{1}{2}$ (aux points d'arrêt avant et arrière, $\theta = 0$ et $\theta = \pi$).
   * Zones de dépression : là où $p < p_0$, soit $|\sin\theta| > \frac{1}{2}$ (aux "sommets" du cylindre, $\theta = \pm \pi/2$).

7. **Analyse critique et limites du modèle :**
   * *Paradoxe de d'Alembert :* Par symétrie de la distribution de pression $p(R, \theta)$ autour du cylindre ($\cos(\pi-\theta)$ vs $\cos\theta$), la force résultante de traînée (projetée selon l'axe de l'écoulement) s'annule : $F_x = 0$. Le fluide parfait n'exerce **aucune traînée** sur le corps en mouvement uniforme, ce qui contredit l'expérience quotidienne.
   * *Limites du modèle :* 
     1. **Négligence de la viscosité :** Dans la réalité, la condition d'adhérence impose $v=0$ à la paroi. Il existe une zone de fortes variations de vitesse appelée *couche limite*.
     2. **Décollement de la couche limite :** En raison des gradients adverses de pression à l'arrière du cylindre, la couche limite décolle, créant une zone de sillage turbulent et de basse pression en aval, responsable d'une traînée aérodynamique importante. Le modèle du fluide parfait est donc mis en défaut dans les zones de sillage et près des parois.