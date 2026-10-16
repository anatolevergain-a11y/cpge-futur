---
title: 'Exercice : Vecteur de Poynting et onde plane progressive harmonique'
description: 'Problème d entraînement type concours pour la filière PSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On considère le vide, modélisé par sa permittivité diélectrique $\varepsilon_0$ et sa perméabilité magnétique $\mu_0$. On pose $c = \frac{1}{\sqrt{\varepsilon_0 \mu_0}}$ la vitesse de la lumière dans le vide. 

On s'intéresse à une onde électromagnétique sinusoïdale, ou Onde Plane Progressive Harmonique (OPPH), se propageant dans la direction de l'axe $(Oz)$. Le champ électrique associé à cette onde est décrit, en notation complexe, par :
$$\underline{\vec{E}}(z, t) = E_0 \exp\left(j(\omega t - k z)\right) \vec{u}_x$$
où $E_0$ est une amplitude réelle positive, $\omega pulsation$ de l'onde, et $k$ le nombre d'onde.

L'objectif de cet exercice est d'analyser la structure de cette onde à l'aide des équations de Maxwell, puis d'évaluer le transport d'énergie associé via le vecteur de Poynting.

---

### ❓ Questions progressives

1. **Rappel de cours / Analyse dimensionnelle :** Rappeler les équations de Maxwell dans le vide. En déduire l'équation de propagation vérifiée par le champ électrique $\vec{E}(z,t)$ et la relation de dispersion liant $\omega$ et $k$.
2. **Structure du champ magnétique :** À l'aide de l'équation de Maxwell adéquate, déterminer le champ magnétique complexe $\underline{\vec{B}}(z, t)$ associé à ce champ électrique. Préciser la relation vectorielle liant $\vec{E}$, $\vec{B}$ et le vecteur d'onde $\vec{k} = k \vec{u}_z$.
3. **Vecteur de Poynting instantané :** Définir le vecteur de Poynting $\vec{\Pi}(z, t)$ dans le vide. Exprimer ses composantes en fonction de $E_0$, $\mu_0$, $c$, $\omega$, $k$, $z$ et $t$.
4. **Puissance et intensité moyenne :** Calculer le vecteur de Poynting temporellement moyen $\langle \vec{\Pi} \rangle$ (ou intensité de l'onde). Commenter sa direction et son sens.
5. **Bilan d'énergie local :** Établir l'équation de conservation de l'énergie électromagnétique (théorème de Poynting) dans le vide. Exprimer la densité volumique d'énergie électromagnétique $u$ et vérifier qu'elle est reliée au vecteur de Poynting par une relation simple.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Utilisez l'opérateur rotationnel appliqué au rotationnel. L'identité vectorielle $\text{rot}(\text{rot} \vec{V}) = \text{grad}(\text{div} \vec{V}) - \Delta \vec{V}$ est ici fondamentale.
* **Question 2 :** L'équation de Maxwell-Faraday relie la variation spatiale du champ électrique à la variation temporelle du champ magnétique. En régime harmonique, $\frac{\partial}{\partial t} \leftrightarrow j\omega$.
* **Question 3 & 4 :** Attention à bien travailler avec les grandeurs réelles pour le produit vectoriel définissant le vecteur de Poynting instantané, ou utilisez la formule adaptée avec les amplitudes complexes pour la moyenne temporelle si vous maîtrisez le calcul complexe ($\langle \vec{\Pi} \rangle = \frac{1}{2} \text{Re}(\vec{E} \wedge \vec{B}^*)$).
* **Question 5 :** Partez des équations de Maxwell-Ampère et Maxwell-Faraday et effectuez le produit scalaire judicieux avec $\vec{E}$ et $\vec{B}$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Équations de Maxwell et équation de propagation
Dans le vide (charges et courants macroscopiques nuls), les équations de Maxwell s'écrivent :
* **Maxwell-Gauss :** $\text{div} \vec{E} = 0$
* **Maxwell-Thomson :** $\text{div} \vec{B} = 0$
* **Maxwell-Faraday :** $\text{rot} \vec{E} = -\frac{\partial \vec{B}}{\partial t}$
* **Maxwell-Ampère :** $\text{rot} \vec{B} = \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$

En appliquant l'opérateur rotationnel à l'équation de Maxwell-Faraday :
$$\text{rot}(\text{rot} \vec{E}) = \text{rot}\left(-\frac{\partial \vec{B}}{\partial t}\right) = -\frac{\partial}{\partial t}(\text{rot} \vec{B})$$
En injectant Maxwell-Ampère :
$$\text{grad}(\text{div} \vec{E}) - \Delta \vec{E} = -\mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}$$
Comme $\text{div} \vec{E} = 0$ (pas de charge), il vient l'équation de d'Alembert :
$$\Delta \vec{E} - \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0}$$
Pour l'OPPH étudiée, $\vec{E}(z,t) = E_0 \cos(\omega t - kz) \vec{u}_x$. Le laplacien se réduit à $\frac{\partial^2}{\partial z^2}$. 
En injectant cette forme dans l'équation de propagation, on obtient la relation de dispersion :
$$-k^2 + \mu_0 \varepsilon_0 \omega^2 = 0 \implies \frac{\omega}{k} = \frac{1}{\sqrt{\mu_0 \varepsilon_0}} = c$$

#### 2. Structure du champ magnétique
Utilisons l'équation de Maxwell-Faraday en notation complexe :
$$\text{rot} \underline{\vec{E}} = -j\omega \underline{\vec{B}}$$
Le rotationnel de $\underline{\vec{E}}$ se calcule ainsi :
$$\text{rot} \underline{\vec{E}} = \begin{vmatrix} \vec{u}_x & \vec{u}_y & \vec{u}_z \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ \underline{E}_x & 0 & 0 \end{vmatrix} = \frac{\partial \underline{E}_x}{\partial z} \vec{u}_opot \dots = (-jk E_0 e^{j(\omega t - kz)}) \vec{u}_y$$
On en déduit le champ magnétique complexe :
$$\underline{\vec{B}}(z, t) = -\frac{1}{j\omega} (-jk E_0 e^{j(\omega t - kz)}) \vec{u}_y = \frac{k}{\omega} E_0 e^{j(\omega t - kz)} \vec{u}_y$$
Soit, en revenant aux grandeurs réelles :
$$\vec{B}(z, t) = \frac{E_0}{c} \cos(\omega t - kz) \vec{u}_y$$
On remarque la structure trièdre direct $(\vec{u}_x, \vec{u}_y, \vec{u}_z)$ pour le triplet $(\vec{E}, \vec{B}, \vec{k})$.

#### 3. Vecteur de Poynting instantané
Le vecteur de Poynting représente la densité de flux de puissance électromagnétique. Dans le vide, il est défini par :
$$\vec{\Pi}(z, t) = \frac{1}{\mu_0} \vec{E}(z, t) \wedge \vec{B}(z, t)$$
En effectuant le produit vectoriel :
$$\vec{\Pi}(z, t) = \frac{1}{\mu_0} \left[ E_0 \cos(\omega t - kz) \vec{u}_x \right] \wedge \left[ \frac{E_0}{c} \cos(\omega t - kz) \vec{u}_y \right]$$
$$\vec{\Pi}(z, t) = \frac{E_0^2}{\mu_0 c} \cos^2(\omega t - kz) \vec{u}_z$$

#### 4. Puissance et intensité moyenne
L'intensité de l'onde correspond à la moyenne temporelle du vecteur de Poynting, notée $\langle \vec{\Pi} \rangle$. 
Sur une période $T = \frac{2\pi}{\omega}$, la valeur moyenne de $\cos^2(\omega t - kz)$ vaut $\frac{1}{2}$. Ainsi :
$$\langle \vec{\Pi} \rangle = \frac{E_0^2}{2 \mu_0 c} \vec{u}_z$$
* **Commentaire :** $\langle \vec{\Pi} \rangle$ est dirigé selon $\vec{u}_z$, ce qui correspond à la direction de propagation de l'onde. L'énergie est donc transportée dans le sens de propagation de l'onde, ce qui est physiquement cohérent.

#### 5. Bilan d'énergie local (Théorème de Poynting)
Effectuons $\vec{B} \cdot (\text{Maxwell-Faraday}) - \vec{E} \cdot (\text{Maxwell-Ampère})$ :
1. $\vec{B} \cdot \text{rot} \vec{E} = -\vec{B} \cdot \frac{\partial \vec{B}}{\partial t} = -\frac{1}{2} \frac{\partial B^2}{\partial t}$
2. $\vec{E} \cdot \text{rot} \vec{B} = \mu_0 \varepsilon_0 \vec{E} \cdot \frac{\partial \vec{E}}{\partial t} = \mu_0 \varepsilon_0 \frac{1}{2} \frac{\partial E^2}{\partial t}$

En utilisant l'identité vectorielle $\text{div}(\vec{E} \wedge \vec{B}) = \vec{B} \cdot \text{rot} \vec{E} - \vec{E} \cdot \text{rot} \vec{B}$, on obtient l'équation de conservation :
$$\text{div}\left(\frac{\vec{E} \wedge \vec{B}}{\mu_0}\right) + \frac{\partial}{\partial t}\left(\frac{\varepsilon_0 E^2}{2} + \frac{B^2}{2\mu_0}\right) = 0$$
Soit sous la forme classique :
$$\text{div} \vec{\Pi} + \frac{\partial u}{\partial t} = 0$$
Où $u = \frac{\varepsilon_0 E^2}{2} + \frac{B^2}{2\mu_0}$ représente la **densité volumique d'énergie électromagnétique**. Cette relation traduit la conservation locale de l'énergie du champ électromagnétique dans le vide.