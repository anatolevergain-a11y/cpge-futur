---
title: 'Exercice 2 : Ondes électromagnétiques dans le vide'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le cadre de cette étude est celui de la théorie macroscopique de l'électromagnétisme de Maxwell. On se place dans le vide, qui constitue un milieu idéal dépourvu de charges électriques libres ($\rho_{\text{lib}} = \vec{0}$) et de courants électriques libres ($\vec{j}_{\text{lib}} = \vec{0}$). 

L'objectif de ce problème est d'établir l'équation de propagation régissant le champ électromagnétique dans le vide, d'étudier les ondes planes monochromatiques (OPM) associées et de caractériser le transport d'énergie par ces ondes en lien avec le vecteur de Poynting.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Rappels des équations de Maxwell :** Écrire les équations de Maxwell locales dans le vide pour le champ électrique $\vec{E}(M,t)$ et le champ magnétique $\vec{B}(M,t)$. On introduira la constante universelle $c$, célérité de la lumière dans le vide, liée à la permittivité électrique $\varepsilon_0$ et à la perméabilité magnétique $\mu_0$.
2. **Équations de d'Alembert :** En appliquant l'opérateur rotationnel aux équations de Maxwell locales, établir que le champ électrique $\vec{E}$ et le champ magnétique $\vec{B}$ satisfont tous deux une équation de propagation d'onde (équation de d'Alembert) que l'on précisera.
3. **Structure des ondes planes harmoniques :** On s'intéresse à une onde plane monochromatique (OPM) se propageant selon la direction $\vec{u}_z$, de pulsation $\omega > 0$ et de vecteur d'onde $\vec{k} = k \vec{u}_z$. Les champs sont de la forme complexe associée :
   $$\underline{\vec{E}}(z,t) = \underline{\vec{E}}_0 \exp\left(j(\omega t - kz)\right)$$
   Exprimer le champ magnétique complexe associé $\underline{\vec{B}}(z,t)$ en fonction de $\omega$, $k$ et $\underline{\vec{E}}_0$. En déduire la relation de dispersion liant $\omega$ et $k$.
4. **Polarisation et transversalité :** À l'aide des équations de Maxwell, préciser la structure vectorielle de l'onde (transversalité du champ électrique et du champ magnétique par rapport à la direction de propagation). Quelle est la relation d'orthogonalité entre $\vec{E}$, $\vec{B}$ et $\vec{u}_z$ ?
5. **Bilan énergétique et vecteur de Poynting :** 
   - Définir le vecteur de Poynting $\vec{\Pi}$ et exprimer sa valeur dans le cas de l'onde plane étudiée.
   - Calculer la moyenne temporelle $\langle \vec{\Pi} \rangle$ sur une période.
6. **Analyse critique du modèle :** Le modèle du vide parfait est-il strictement réalisable expérimentalement ? Discuter brièvement des limites de ce modèle à l'échelle microscopique et en présence de matière raréfiée (interstellaire par exemple).

---

### 💡 Pistes & Indications méthodologiques

* **Question 2 :** Penser à utiliser l'identité vectorielle $\vec{\text{rot}}(\vec{\text{rot}}\vec{A}) = \vec{\text{grad}}(\text{div}\vec{A}) - \Delta \vec{A}$ valable pour tout champ vectoriel $\vec{A}$ de classe $\mathcal{C}^2$.
* **Question 3 & 4 :** Traduire les opérateurs de dérivation spatiale et temporelle dans le formalisme complexe ($\partial_t \leftrightarrow j\omega$ et $\vec{\nabla} \leftrightarrow -j\vec{k}$).
* **Question 5 :** Le vecteur de Poynting s'exprime par $\vec{\Pi} = \frac{1}{\mu_0} \vec{E} \wedge \vec{B}$. Pour la moyenne temporelle d'un produit de grandeurs harmoniques réelles, utiliser la partie réelle des amplitudes complexes : $\langle A(t) B(t) \rangle = \frac{1}{2} \text{Re}(\underline{A} \underline{B}^*)$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Équations de Maxwell dans le vide
Dans le vide, en absence de charges et de courants libres, les équations de Maxwell locales s'écrivent :
* **Équation de Maxwell-Gauss :** $\text{div}\vec{E} = 0$
* **Équation de Maxwell-Thomson :** $\text{div}\vec{B} = 0$
* **Équation de Maxwell-Faraday :** $\vec{\text{rot}}\vec{E} = -\frac{\partial \vec{B}}{\partial t}$
* **Équation de Maxwell-Ampère :** $\vec{\text{rot}}\vec{B} = \varepsilon_0 \mu_0 \frac{\partial \vec{E}}{\partial t}$

Avec $c = \frac{1}{\sqrt{\varepsilon_0 \mu_0}}$ représentant la vitesse de la lumière dans le vide.

#### 2. Établissement des équations de d'Alembert
Appliquons l'opérateur rotationnel à l'équation de Maxwell-Faraday :
$$\vec{\text{rot}}(\vec{\text{rot}}\vec{E}) = \vec{\text{rot}}\left(-\frac{\partial \vec{B}}{\partial t}\right) = -\frac{\partial}{\partial t}(\vec{\text{rot}}\vec{B})$$

En utilisant l'identité vectorielle $\vec{\text{rot}}(\vec{\text{rot}}\vec{E}) = \vec{\text{grad}}(\text{div}\vec{E}) - \Delta \vec{E}$, et sachant que $\text{div}\vec{E} = 0$ (Maxwell-Gauss), il vient :
$$-\Delta \vec{E} = -\frac{\partial}{\partial t}\left(\varepsilon_0 \mu_0 \frac{\partial \vec{E}}{\partial t}\right)$$

Soit l'équation de d'Alembert pour le champ électrique :
$$\Delta \vec{E} - \varepsilon_0 \mu_0 \frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0} \quad \text{ou} \quad \Delta \vec{E} - \frac{1}{c^2} \frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0}$$

En procédant de même en appliquant le rotationnel à l'équation de Maxwell-Ampère, on obtient l'équation analogue pour le champ magnétique :
$$\Delta \vec{B} - \frac{1}{c^2} \frac{\partial^2 \vec{B}}{\partial t^2} = \vec{0}$$

#### 3. Structure des ondes planes harmoniques et relation de dispersion
Pour l'onde $\underline{\vec{E}}(z,t) = \underline{\vec{E}}_0 \exp\left(j(\omega t - kz)\right)$, injectons-la dans l'équation de Maxwell-Faraday $\vec{\text{rot}}\underline{\vec{E}} = -\frac{\partial \underline{\vec{B}}}{\partial t}$. 
La dérivation spatiale se traduit par $-j\vec{k} \wedge \underline{\vec{E}}$ et la dérivation temporelle par $j\omega$ :
$$-j\vec{k} \wedge \underline{\vec{E}} = -j\omega \underline{\vec{B}} \implies \underline{\vec{B}} = \frac{\vec{k}}{\omega} \wedge \underline{\vec{E}}$$

Avec $\vec{k} = k \vec{u}_z$, on a :
$$\underline{\vec{B}}(z,t) = \frac{k}{\omega} \vec{u}_z \wedge \underline{\vec{E}}(z,t)$$

Injectons à présent l'expression du champ électrique ou magnétique dans l'équation de d'Alembert :
$$-k^2 \underline{\vec{E}} - \frac{1}{c^2}(-\omega^2)\underline{\vec{E}} = \vec{0} \implies -k^2 + \frac{\omega^2}{c^2} = 0$$

La relation de dispersion est donc :
$$\omega = c k$$

#### 4. Polarisation et transversalité
* **Transversalité de $\vec{E}$ :** L'équation de Maxwell-Gauss $\text{div}\vec{E} = 0$ donne en notation complexe $-j\vec{k} \cdot \underline{\vec{E}} = 0$, soit $-k E_{0z} = 0 \implies E_{0z} = 0$. Le champ électrique est strictement orthogonal à la direction de propagation $\vec{u}_z$ : **l'onde est transversale**.
* **Transversalité de $\vec{B}$ :** De même, $\text{div}\vec{B} = 0 \implies B_{0z} = 0$. Le champ magnétique est également transversal.
* **Orthogonalité :** La relation $\underline{\vec{B}} = \frac{1}{c} \vec{u}_z \wedge \underline{\vec{E}}$ montre que les vecteurs $\vec{E}$, $\سب{B}$ et $\vec{u}_z$ forment un trièdre direct à tout instant et en tout point, avec $\|\vec{B}\| = \frac{\|\vec{E}\|}{c}$.

#### 5. Bilan énergétique et vecteur de Poynting
Le vecteur de Poynting $\vec{\Pi}$ représente la densité de flux de puissance électromagnétique :
$$\vec{\Pi} = \frac{1}{\mu_0} \vec{E} \wedge \vec{B}$$

Pour une OPM se propageant selon $\vec{u}_z$ :
$$\vec{\Pi}(z,t) = \frac{1}{\mu_0} \vec{E}(z,t) \wedge \left(\frac{1}{c} \vec{u}_z \wedge \vec{E}(z,t)\right) = \frac{1}{\mu_0 c} \|\vec{E}(z,t)\|^2 \vec{u}_z = \sqrt{\frac{\varepsilon_0}{\mu_0}} \|\vec{E}(z,t)\|^2 \vec{u}_z$$

La moyenne temporelle sur une période s'obtient via :
$$\langle \vec{\Pi} \rangle = \frac{1}{2} \sqrt{\frac{\varepsilon_0}{\mu_0}} |\underline{E}_0|^2 \vec{u}_z$$

#### 6. Analyse critique du modèle
* **Limites macroscopiques :** Le "vide" absolu n'existe pas. À l'échelle microscopique, le vide quantique est le siège de fluctuations électromagnétiques (émissions/absorptions spontanées, effet Casimir). 
* **Limites astrophysiques / géophysiques :** Même dans l'espace intersidéral, il existe une densité résiduelle de matière (particules du vent solaire, gaz interstellaire) qui confère au milieu un comportement plasma (la fréquence plasma $\omega_p$ devient non nulle, modifiant la relation de dispersion $\omega^2 = c^2 k^2 + \omega_p^2$). Le modèle du vide parfait est donc une approximation excellente mais asymptotique (valable lorsque la densité particulaire tend vers zéro ou à des fréquences très supérieures aux fréquences caractéristiques du milieu).