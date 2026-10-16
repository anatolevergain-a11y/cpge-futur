---
title: 'Exercice 2 : Propagation des ondes électromagnétiques dans le vide'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Propagation des ondes électromagnétiques dans le vide

## Énoncé

Le cadre de ce problème est l'étude de la propagation des ondes électromagnétiques dans le vide à l'aide des équations de Maxwell. On s'intéresse en particulier à une onde électromagnétique plane, progressive, monochromatique (OEPM) se propageant dans la direction de l'axe $(Ox)$. 

Les champs électrique $\vec{E}$ et magnétique $\vec{B}$ sont décrits dans le système d'unités international (SI). On rappelle les constantes fondamentales de la physique :
* Permittivité diélectrique du vide : $\varepsilon_0 \approx 8{,}85 \times 10^{-12} \text{ F}\cdot\text{m}^{-1}$
* Perméabilité magnétique du vide : $\mu_0 = 4\pi \times 10^{-7} \text{ H}\cdot\text{m}^{-1}$
* Célérité de la lumière dans le vide : $c = \frac{1}{\sqrt{\varepsilon_0 \mu_0}}$

---

## Questions

### I. Établissement des équations de propagation
1. Rappeler les équations de Maxwell dans le vide en l'absence de charges et de courants (sources nulles).
2. En appliquant l'opérateur rotationnel à l'équation de Maxwell-Faraday, et en utilisant une relation d'analyse vectorielle usuelle, établir l'équation de d'Alembert vérifiée par le champ électrique $\vec{E}$.
3. Exprimer la vitesse de propagation $c$ en fonction de $\varepsilon_0$ et $\mu_0$, et effectuer l'application numérique pour vérifier la cohérence avec la vitesse de la lumière.

### II. Étude d'une onde plane et analyse critique
4. On considère une onde électromagnétique polarisée rectilignement suivant l'axe $(Oy)$, se propageant selon $(Ox)$. Le champ électrique s'écrit sous la forme complexe :
   $$\underline{\vec{E}}(x, t) = E_0 \cos(\omega t - kx) \vec{u}_y$$
   Déterminer le champ magnétique associé $\underline{\vec{B}}(x, t)$ en utilisant l'équation de Maxwell-Faraday. On précisera sa direction de polarisation.
5. Définir le vecteur de Poynting $\vec{R}$ et calculer sa valeur moyenne temporelle $\langle \vec{R} \rangle$ pour cette onde.
6. **Analyse critique et limites du modèle :** 
   En considérant une onde lumineuse visible de longueur d'onde dans le vide $\lambda_0 = 600 \text{ nm}$ et d'amplitude maximale du champ électrique $E_0 = 100 \text{ V}\cdot\text{m}^{-1}$, calculer la valeur moyenne de la puissance surfacique transportée. Discuter de la validité de ce modèle de "vide parfait" à l'échelle astronomique (interstellaire) ou face à la structure granulaire de la lumière (photons).

---

## Pistes et indications

* **Piste 1 :** Pour la question 2, pensez à utiliser l'identité vectorielle $\vec{\text{rot}}(\vec{\text{rot}}\vec{A}) = \vec{\text{grad}}(\text{div}\vec{A}) - \Delta \vec{A}$.
* **Piste 2 :** L'intégration par rapport au temps du champ magnétique doit se faire sans constante d'intégration (on élimine les champs permanents non radiatifs).
* **Piste 3 :** Le vecteur de Poynting s'exprime par $\vec{R} = \frac{1}{\mu_0} \vec{E} \land \vec{B}$. La moyenne temporelle d'un terme en $\cos^2(\theta)$ sur une période est $\frac{1}{2}$.

---

## Corrigé pas à pas

### I. Établissement des équations de propagation

1. **Équations de Maxwell dans le vide (sources nulles) :**
   * Maxwell-Gauss : $\text{div}\vec{E} = 0$
   * Maxwell-Thomson : $\text{div}\vec{B} = 0$
   * Maxwell-Faraday : $\vec{\text{rot}}\vec{E} = -\frac{\partial \vec{B}}{\partial t}$
   * Maxwell-Ampère : $\vec{\text{rot}}\vec{B} = \varepsilon_0 \mu_0 \frac{\partial \vec{E}}{\partial t}$

2. **Équation de d'Alembert pour $\vec{E}$ :**
   En appliquant le rotationnel à l'équation de Maxwell-Faraday :
   $$\vec{\text{rot}}(\vec{\text{rot}}\vec{E}) = \vec{\text{rot}}\left(-\frac{\partial \vec{B}}{\partial t}\right) = -\frac{\partial}{\partial t}(\vec{\text{rot}}\vec{B})$$
   En utilisant l'identité vectorielle $\vec{\text{rot}}(\vec{\text{rot}}\vec{E}) = \vec{\text{grad}}(\text{div}\vec{E}) - \Delta \vec{E}$ et sachant que $\text{div}\vec{E} = 0$ (Maxwell-Gauss) :
   $$-\Delta \vec{E} = -\frac{\partial}{\partial t}\left(\varepsilon_0 \mu_0 \frac{\partial \vec{E}}{\partial t}\right)$$
   Soit l'équation de d'Alembert :
   $$\Delta \vec{E} - \varepsilon_0 \mu_0 \frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0}$$

3. **Célérité de l'onde :**
   Par identification avec l'équation d'onde classique $\Delta \vec{E} - \frac{1}{c^2}\frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0}$, on obtient :
   $$c = \frac{1}{\sqrt{\varepsilon_0 \mu_0}}$$
   *Application numérique :*
   $$c = \frac{1}{\sqrt{8{,}85 \times 10^{-12} \times 4\pi \times 10^{-7}}} \approx 3{,}00 \times 10^8 \text{ m}\cdot\text{s}^{-1}$$
   Le résultat est strictement cohérent avec la vitesse de la lumière dans le vide.

---

### II. Étude d'une onde plane et analyse critique

4. **Détermination du champ magnétique $\underline{\vec{B}}$ :**
   À partir de l'équation de Maxwell-Faraday sous forme locale : $\frac{\partial \vec{B}}{\partial t} = -\vec{\text{rot}}\vec{E}$.
   Le champ électrique ne dépend que de $x$ et $t$, et est porté par $\vec{u}_y$. Son rotationnel est :
   $$\vec{\text{rot}}\vec{E} = \left(\frac{\partial E_z}{\partial y} - \frac{\partial E_y}{\partial z}\right)\vec{u}_x + \left(\frac{\partial E_x}{\partial z} - \partial_z E_z \dots\right)\vec{u}_y + \frac{\partial E_y}{\partial x}\vec{u}_z = \frac{\partial E_y}{\partial x}\vec{u}_z$$
   Ici, $E_y(x,t) = E_0 \cos(\omega t - kx)$, donc $\frac{\partial E_y}{\partial x} = k E_0 \sin(\omega t - kx)$.
   Ainsi, $\frac{\partial \vec{B}}{\partial t} = -k E_0 \sin(\omega t - kx) \vec{u}_z$.
   En intégrant par rapport au temps (et en posant la constante d'intégration nulle pour éliminer un champ magnétique continu parasite) :
   $$\vec{B}(x, t) = \frac{k E_0}{\omega} \cos(\omega t - kx) \vec{u}_z = \frac{E_0}{c} \cos(\omega t - kx) \vec{u}_z$$
   Le champ magnétique est polarisé rectilignement suivant l'axe $(Oz)$, perpendiculaire à $\vec{E}$ et à la direction de propagation $\vec{u}_x$. Le trièdre $(\vec{u}_x, \vec{u}_y, \vec{u}_z)$ est direct.

5. **Vecteur de Poynting et moyenne temporelle :**
   Le vecteur de Poynting représente la densité de flux de puissance électromagnétique :
   $$\vec{R} = \frac{1}{\mu_0} \vec{E} \land \vec{B} = \frac{1}{\mu_0} \left[ E_0 \cos(\omega t - kx) \vec{u}_y \right] \land \left[ \frac{E_0}{c} \cos(\omega t - kx) \vec{u}_z \right] = \frac{E_0^2}{\mu_0 c} \cos^2(\omega t - kx) \vec{u}_x$$
   La moyenne temporelle sur une période (sachant que $\langle \cos^2(\theta) \rangle = \frac{1}{2}$) donne :
   $$\langle \vec{R} \rangle = \frac{E_0^2}{2 \mu_0 c} \vec{u}_x$$

6. **Analyse critique et limites du modèle :**
   * *Application numérique :* 
     Avec $E_0 = 100 \text{ V}\cdot\text{m}^{-1}$ et $\mu_0 c = \sqrt{\frac{\mu_0}{\varepsilon_0}} = Z_0 \approx 377 \, \Omega$ (impédance caractéristique du vide) :
     $$\|\langle \vec{R} \rangle\| = \frac{(100)^2}{2 \times 377} \approx \frac{10000}{754} \approx 13{,}3 \text{ W}\cdot\text{m}^{-2}$$
   * *Limites du modèle :* 
     1. **Milieu interstellaire :** Le "vide" intergalactique ou interstellaire n'est pas strictement vide ; il contient un plasma très peu dense (quelques ions par $\text{cm}^3$). À très grande échelle ou pour des fréquences très basses (ondes radio), les électrons libres ne peuvent plus être négligés, ce qui rend le milieu dispersif et conduit à une atténuation ou une coupure (fréquence plasma).
     2. **Nature quantique :** À l'échelle microscopique, le modèle classique ondulatoire de Maxwell atteint ses limites face à la nature corpusculaire de la lumière (photons). Si l'intensité lumineuse devient extrêmement faible, l'énergie ne se propulse plus de manière continue selon le vecteur de Poynting, mais par quanta discrets d'énergie $E = h\nu$, rendant la description statistique indispensable.