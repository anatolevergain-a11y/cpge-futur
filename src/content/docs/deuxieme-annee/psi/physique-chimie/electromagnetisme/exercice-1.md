---
title: 'Exercice 1 : Équations de Maxwell dans le vide et bilans d énergie'
description: 'Problème d entraînement type concours pour PSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On se place dans le cadre de l'électromagnétisme classique dans le vide. Le référentiel d'étude est supposé galiléen. Le vide est défini ici par l'absence de charges macroscopiques ($\rho = 0$) et de courants macroscopiques ($\vec{j} = \vec{0}$). 

L'objectif de ce problème est d'établir l'équation de conservation de l'énergie électromagnétique (théorème de Poynting) à partir des équations de Maxwell, puis d'appliquer ce bilan à une onde plane progressive monochromatique (OPPM).

Données et constantes fondamentales :
* Permittivité diélectrique du vide : $\varepsilon_0$
* Perméabilité magnétique du vide : $\mu_0$
* Vitesse de la lumière dans le vide : $c = \frac{1}{\sqrt{\varepsilon_0 \mu_0}}$

---

### ❓ Questions progressives

1. **Rappel des équations de Maxwell :** Écrire les équations de Maxwell dans le vide pour le champ électrique $\vec{E}(M, t)$ et le champ magnétique $\vec{B}(M, t)$.
2. **Structure des champs :** En appliquant l'opérateur rotationnel à l'équation de Maxwell-Faraday, établir l'équation de propagation (ou d'onde) vérifiée par le champ $\vec{E}$. On rappellera l'identité vectorielle utile.
3. **Théorème de Poynting local :** 
   * a. En effectuant le produit scalaire de l'équation de Maxwell-Ampère par $\vec{E}$ et de l'équation de Maxwell-Faraday par $\vec{B}$, exprimer les quantités $\vec{E} \cdot (\vec{\nabla} \wedge \vec{B})$ et $\vec{B} \cdot (\vec{\nabla} \wedge \vec{E})$.
   * b. À l'aide de l'analyse vectorielle, relier ces termes à la divergence d'un vecteur $\vec{\Pi}$ (vecteur de Poynting) et à la dérivée temporelle d'une grandeur scalaire $u$ (densité volumique d'énergie électromagnétique).
   * c. Mettre le résultat sous la forme d'une équation de conservation locale : $\frac{\partial u}{\partial t} + \vec{\nabla} \cdot \vec{\Pi} = 0$. Préciser l'expression de $u$ et $\vec{\Pi}$ en fonction de $\vec{E}$, $\vec{B}$, $\varepsilon_0$ et $\mu_0$.
4. **Application aux OPPM :** On considère une onde plane progressive monochromatique se propageant dans la direction $\vec{u}_z$, polarisée rectilignement selon $\vec{u}_x$. 
   * a. Rappeler la forme complexe associée $\underline{\vec{E}}$ et $\underline{\vec{B}}$.
   * b. Exprimer la structure locale de l'onde (relation de Faraday).
   * c. Calculer la densité d'énergie électromagnétique $u$ et le vecteur de Poynting $\vec{\Pi}$. En déduire la relation entre $u$ et $\vec{\Pi}$ pour une OPPM.
   * d. Définir l'intensité de l'onde $I$ comme la moyenne temporelle de la norme du vecteur de Poynting.

---

### 💡 Pistes & Indications méthodologiques

* **Q2 :** Pensez à l'identité vectorielle $\vec{\nabla} \wedge (\vec{\nabla} \wedge \vec{V}) = \vec{\nabla}(\vec{\nabla} \cdot \vec{V}) - \Delta \vec{V}$. Dans le vide, $\vec{\nabla} \cdot \vec{E} = 0$.
* **Q3 :** Utilisez l'identité d'analyse vectorielle pour la divergence d'un produit mixte ou vectoriel : $\vec{\nabla} \cdot (\vec{A} \wedge \vec{B}) = \vec{B} \cdot (\vec{\nabla} \wedge \vec{A}) - \vec{A} \cdot (\vec{\nabla} \wedge \vec{B})$.
* **Q4 :** Pour les calculs énergétiques avec des grandeurs harmoniques, attention aux produits de grandeurs réelles : $\langle \cos^2(\omega t - kz) \rangle = \frac{1}{2}$, et l'utilisation de la notation complexe nécessite de prendre la partie réelle *avant* d'effectuer des produits non linéaires (comme l'énergie ou le vecteur de Poynting).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Équations de Maxwell dans le vide
Dans le vide ($\rho = 0$, $\vec{j} = \vec{0}$), les équations de Maxwell s'écrivent :
* **Maxwell-Gauss :** $\vec{\nabla} \cdot \vec{E} = 0$
* **Maxwell-Thomson :** $\vec{\nabla} \cdot \vec{B} = 0$
* **Maxwell-Faraday :** $\vec{\nabla} \wedge \vec{E} = -\frac{\partial \vec{B}}{\partial t}$
* **Maxwell-Ampère :** $\vec{\nabla} \wedge \vec{B} = \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$

#### 2. Équation de propagation pour le champ $\vec{E}$
Appliquons l'opérateur rotationnel à l'équation de Maxwell-Faraday :
$$\vec{\nabla} \wedge (\vec{\nabla} \wedge \vec{E}) = \vec{\nabla} \wedge \left(-\frac{\partial \vec{B}}{\partial t}\right)$$
En inversant l'ordre des dérivées spatiales et temporelles dans le membre de droite et en utilisant Maxwell-Ampère :
$$\vec{\nabla} \wedge (\vec{\nabla} \wedge \vec{E}) = -\frac{\partial}{\partial t} (\vec{\nabla} \wedge \vec{B}) = -\frac{\partial}{\partial t} \left(\mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}\right) = -\mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}$$
En utilisant l'identité vectorielle $\vec{\nabla} \wedge (\vec{\nabla} \wedge \vec{E}) = \vec{\nabla}(\vec{\nabla} \cdot \vec{E}) - \Delta \vec{E}$, et sachant que $\vec{\nabla} \cdot \vec{E} = 0$ (Maxwell-Gauss dans le vide) :
$$-\Delta \vec{E} = -\mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} \implies \Delta \vec{E} - \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0}$$
C'est l'équation de d'Alembert (ou équation de propagation) avec une célérité $c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}}$.

#### 3. Théorème de Poynting local
* **a.** Multiustions scalaires :
  Multiplions Maxwell-Ampère par $\vec{E}$ :
  $$\vec{E} \cdot (\vec{\nabla} \wedge \vec{B}) = \mu_0 \varepsilon_0 \vec{E} \cdot \frac{\partial \vec{E}}{\partial t} = \frac{\mu_0 \varepsilon_0}{2} \frac{\partial}{\partial t}(\vec{E}^2)$$
  Multiplions Maxwell-Faraday par $\vec{B}$ :
  $$\vec{B} \cdot (\vec{\nabla} \wedge \vec{E}) = -\vec{B} \cdot \frac{\partial \vec{B}}{\partial t} = -\frac{1}{2} \frac{\partial}{\partial t}(\vec{B}^2)$$

* **b. et c.** Combinaison et bilan :
  L'identité du produit vectoriel donne : $\vec{\nabla} \cdot \left(\frac{\vec{E} \wedge \vec{B}}{\mu_0}\right) = \frac{1}{\mu_0} \Big[ \vec{B} \cdot (\vec{\nabla} \wedge \vec{E}) - \vec{E} \cdot (\vec{\nabla} \wedge \vec{B}) \Big]$
  En injectant les expressions précédentes :
  $$\vec{\nabla} \cdot \left(\frac{\vec{E} \wedge \vec{B}}{\mu_0}\right) = \frac{1}{\mu_0} \left[ -\frac{1}{2} \frac{\partial}{\partial t}(\vec{B}^2) - \mu_0 \varepsilon_0 \frac{1}{2} \frac{\partial}{\partial t}(\vec{E}^2) \right]$$
  $$\vec{\nabla} \cdot \left(\frac{\vec{E} \wedge \vec{B}}{\mu_0}\right) = -\frac{\partial}{\text{\partial t}} \left( \frac{\varepsilon_0}{2} E^2 + \frac{1}{2\mu_0} B^2 \right)$$
  On obtient l'équation de conservation locale $\frac{\partial u}{\partial t} + \vec{\nabla} \cdot \vec{\Pi} = 0$ en identifiant :
  * La **densité volumique d'énergie électromagnétique** $u$ (\text{en } \text{J}\cdot\text{m}^{-3}) :
    $$u = \frac{1}{2} \varepsilon_0 E^2 + \frac{1}{2\mu_0} B^2$$
  * Le **vecteur de Poynting** $\vec{\Pi}$ (\text{en } \text{W}\cdot\text{m}^{-2}) représentant le flux surfacique d'énergie :
    $$\vec{\Pi} = \frac{1}{\mu_0} \vec{E} \wedge \vec{B}$$

#### 4. Application aux OPPM
* **a. Forme complexe :**
  $$\underline{\vec{E}}(M, t) = E_0 \underline{e}^{j(\omega t - kz)} \vec{u}_x$$

* **b. Structure locale (Relation de Faraday) :**
  Pour une OPPM, $\vec{B} = \frac{1}{\omega} (\vec{k} \wedge \vec{E})$. Avec $\vec{k} = k \vec{u}_z$ et $\frac{k}{\omega} = \frac{1}{c} = \sqrt{\mu_0 \varepsilon_0}$ :
  $$\vec{B}(M, t) = \frac{1}{c} \vec{u}_z \wedge \vec{E} = \frac{E(z,t)}{c} \vec{u}_y$$
  On a donc $B = \frac{E}{c}$ à tout instant.

* **c. Énergie et Vecteur de Poynting d'une OPPM :**
  Calculons les contributions électriques et magnétiques de la densité d'énergie :
  * Partie électrique : $\frac{1}{2} \varepsilon_0 E^2$
  * Partie magnétique : $\frac{1}{2\mu_0} B^2 = \frac{1}{2\mu_0} \left(\frac{E}{c}\right)^2 = \frac{1}{2\mu_0} \mu_0 \varepsilon_0 E^2 = \frac{1}{2} \varepsilon_0 E^2$
  *Conclusion remarquable :* L'énergie d'une OPPM se partage à parts égales entre le champ électrique et le champ magnétique ($u_{\text{elec}} = u_{\text{mag}}$).
  $$u = \varepsilon_0 E^2 = \varepsilon_0 E_0^2 \cos^2(\omega t - kz)$$
  
  Pour le vecteur de Poynting :
  $$\vec{\Pi} = \frac{1}{\mu_0} \left(E \vec{u}_x \wedge \frac{E}{c} \vec{u}_y\right) = \frac{E^2}{\mu_0 c} \vec{u}_z = \varepsilon_0 c E^2 \vec{u}_z = c \, u \, \vec{u}_z$$
  On remarque la relation fondamentale $\vec{\Pi} = c \, u \, \vec{u}_z$.

* **d. Intensité de l'onde :**
  L'intensité $OUR$ (ou $I$) est la moyenne temporelle de la norme du vecteur de Poynting :
  $$I = \langle \|\vec{\Pi}\| \rangle = \varepsilon_0 c E_0^2 \langle \cos^2(\omega t - kz) \rangle$$
  Puisque la moyenne temporelle de $\cos^2$ sur une période vaut $\frac{1}{2}$ :
  $$I = \frac{1}{2} \varepsilon_0 c E_0^2$$