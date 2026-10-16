---
title: 'Exercice 1 : Vecteur de Poynting'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le présent problème s'intéresse à l'énergétique du champ électromagnétique dans le cadre de l'électromagnétisme classique des milieux continus. On se place dans le système international d'unités (SI). Les champs électrique $\vec{E}$ et magnétique $\vec{B}$ règnent dans le vide (de permittivité diélectrique $\varepsilon_0$ et de perméabilité magnétique $\mu_0$). On pose $c = \frac{1}{\sqrt{\varepsilon_0 \mu_0}}$ la vitesse de la lumière dans le vide.

L'objectif est d'établir le théorème de Poynting traduisant la conservation locale de l'énergie électromagnétique, puis d'appliquer ce formalisme à un exemple concret de propagation d'une onde électromagnétique sinusoïdale plane, avant de discuter des limites du modèle par une analyse critique.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Rappels et équations de Maxwell :** Écrire les équations de Maxwell dans le vide en présence d'une densité volumique de charge libre $\rho$ et d'une densité volumique de courant libre $\vec{j}$.
2. **Établissement du théorème de Poynting (Forme locale) :** 
   - En partant des équations de Maxwell, calculer le produit scalaire $\vec{j} \cdot \vec{E}$.
   - À l'aide d'une identité vectorielle judicieuse, transformer le terme lié au rotationnel du champ magnétique pour faire apparaître la dérivée temporelle de la densité volumique d'énergie électromagnétique $u$ et le vecteur de Poynting $\vec{R}$.
   - Exprimer $u$ et $\vec{R}$ en fonction de $\vec{E}$, $\vec{B}$, $\varepsilon_0$ et $\mu_0$, et préciser leurs unités respectives.
3. **Application à une onde électromagnétique plane progressive sinusoïdale (OEMPPS) :**
   - On considère une onde se propageant dans la direction des $z$ croissants, polarisée rectilignement selon l'axe $(Ox)$. Écrire le champ électrique $\vec{E}(z,t)$ et en déduire le champ magnétique $\vec{B}(z,t)$ associé.
   - Calculer le vecteur de Poynting $\vec{R}(z,t)$ pour cette onde.
   - Définir la valeur moyenne temporelle du vecteur de Poynting, notée $\langle \vec{R} \rangle$, et l'exprimer en fonction de l'amplitude du champ électrique $E_0$.
4. **Analyse critique du modèle :**
   - Dans le cadre de l'approximation des régimes quasi-stationnaires (ARQS) ou pour un conducteur ohmique parfait (loi d'Ohm $\vec{j} = \gamma \vec{E}$ avec $\gamma \to \infty$), que devient le terme $\vec{j} \cdot \vec{E}$ du théorème de Poynting ? Comment interpréter ce terme physiquement ?
   - Discutez brièvement d'une limite fondamentale du modèle macroscopique de Maxwell-Poynting lorsque la fréquence de l'onde devient extrêmement élevée (domaines des rayons X ou gamma), ou lorsque l'intensité du champ devient colossale.

---

### 💡 Pistes & Indications méthodologiques

- **Question 2 :** Pensez à l'identité vectorielle portant sur la divergence d'un produit mixte vectoriel : $\text{div}(\vec{A} \wedge \vec{B}) = \vec{B} \cdot (\vec{\nabla} \wedge \vec{A}) - \vec{A} \cdot (\vec{\nabla} \wedge \vec{B})$.
- **Question 3 :** Utilisez la relation de structure des ondes planes et progressives dans le vide liant $\vec{E}$, $\vec{B}$ et le vecteur d'onde $\vec{k}$. Rappelez-vous que la moyenne temporelle d'un carré de fonction sinusoïdale sur une période est égale à $1/2$.
- **Question 4 :** Faites le lien entre $\vec{j} \cdot \vec{E}$ et l'effet Joule macroscopique. Pour la critique, pensez à la nature corpusculaire de la lumière (photons) qui n'est pas décrite par l'électromagnétisme classique.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Équations de Maxwell dans le vide
Les équations de Maxwell s'écrivent :
- Maxwell-Gauss : $\text{div}\vec{E} = \frac{\rho}{\varepsilon_0}$
- Maxwell-Thomson : $\text{div}\vec{B} = 0$
- Maxwell-Faraday : $\text{rot}\vec{E} = -\frac{\partial \vec{B}}{\partial t}$
- Maxwell-Ampère : $\text{rot}\vec{B} = \mu_0 \vec{j} + \varepsilon_0 \mu_0 \frac{\partial \vec{E}}{\partial t}$

---

#### 2. Établissement du théorème de Poynting (Forme locale)
Formons le produit scalaire $\vec{j} \cdot \vec{E}$ à partir de l'équation de Maxwell-Ampère :
$$\vec{j} = \frac{1}{\mu_0} \text{rot}\vec{B} - \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$$

En multipliant scalairement par $\vec{E}$ :
$$\vec{j} \cdot \vec{E} = \frac{1}{\mu_0} \vec{E} \cdot \text{rot}\vec{B} - \varepsilon_0 \vec{E} \cdot \frac{\partial \vec{E}}{\partial t}$$

Utilisons l'identité vectorielle de la divergence d'un produit vectoriel : 
$$\text{div}(\vec{E} \wedge \vec{B}) = \vec{B} \cdot \text{rot}\vec{E} - \vec{E} \cdot \text{rot}\vec{B}$$
Soit :
$$\vec{E} \cdot \text{rot}\vec{B} = \vec{B} \cdot \text{rot}\vec{E} - \text{div}(\vec{E} \wedge \vec{B})$$

Substituons $\text{rot}\vec{E}$ par $-\frac{\partial \vec{B}}{\partial t}$ (Maxwell-Faraday) :
$$\vec{E} \cdot \text{rot}\vec{B} = \vec{B} \cdot \left(-\frac{\partial \vec{B}}{\partial t}\right) - \text{div}(\vec{E} \wedge \vec{B}) = - \vec{B} \cdot \frac{\partial \vec{B}}{\partial t} - \text{div}(\vec{E} \wedge \vec{B})$$

Injectons ce résultat dans l'expression de $\vec{j} \cdot \vec{E}$ :
$$\vec{j} \cdot \vec{E} = \frac{1}{\mu_0} \left( - \vec{B} \cdot \frac{\partial \vec{B}}{\partial t} - \text{div}(\vec{E} \wedge \vec{B}) \right) - \varepsilon_0 \vec{E} \cdot \frac{\partial \vec{E}}{\partial t}$$

En réorganisant les termes temporels :
$$\vec{j} \cdot \vec{E} = - \left( \varepsilon_0 \vec{E} \cdot \frac{\partial \vec{E}}{\partial t} + \frac{1}{\mu_0} \vec{B} \cdot \frac{\partial \vec{B}}{\partial t} \right) - \frac{1}{\mu_0} \text{div}(\vec{E} \wedge \vec{B})$$

Remarquons que :
$$\varepsilon_0 \vec{E} \cdot \frac{\partial \vec{E}}{\partial t} = \frac{\partial}{\partial t}\left(\frac{1}{2}\varepsilon_0 E^2\right) \quad \text{et} \quad \frac{1}{\mu_0} \vec{B} \cdot \frac{\partial \vec{B}}{\partial t} = \frac{\partial}{\partial t}\left(\frac{1}{2\mu_0} B^2\right)$$

On obtient finalement l'équation de conservation locale (Théorème de Poynting) :
$$\boxed{\frac{\partial u}{\partial t} + \text{div}\vec{R} = -\vec{j} \cdot \vec{E}}$$

Avec :
- $u = \frac{1}{2}\varepsilon_0 E^2 + \frac{1}{2\mu_0} B^2$, densité volumique d'énergie électromagnétique, en $\text{J}\cdot\text{m}^{-3}$.
- $\vec{R} = \frac{1}{\mu_0} \vec{E} \wedge \vec{B}$, vecteur de Poynting, en $\text{W}\cdot\text{m}^{-2}$ (exprimant un flux surfacique de puissance).

---

#### 3. Application à une OEMPPS
- L'onde se propageant selon $(Oz)$ et polarisée selon $(Ox)$ s'écrit sous la forme :
  $$\vec{E}(z,t) = E_0 \cos(\omega t - kz) \vec{u}_x$$
  La relation de structure pour une onde plane progressive se propageant dans le sens des $z$ croissants donne le champ magnétique associé :
  $$\vec{B}(z,t) = \frac{1}{c} \vec{u}_z \wedge \vec{E}(z,t) = \frac{E_0}{c} \cos(\omega t - kz) \vec{u}_y$$

- Calculons le vecteur de Poynting $\vec{R}$ :
  $$\vec{R}(z,t) = \frac{1}{\mu_0} \left[ E_0 \cos(\omega t - kz) \vec{u}_x \wedge \frac{E_0}{c} \cos(\omega t - kz) \vec{u}_y \right]$$
  Comme $\vec{u}_x \wedge \vec{u}_y = \vec{u}_z$ et sachant que $c = \frac{1}{\sqrt{\varepsilon_0 \mu_0}}$, on a $\frac{1}{\mu_0 c} = \frac{\sqrt{\varepsilon_0 \mu_0}}{\mu_0} = \sqrt{\varepsilon_0 / \mu_0} = \varepsilon_0 c$.
  $$\boxed{\vec{R}(z,t) = \frac{E_0^2}{\mu_0 c} \cos^2(\omega t - kz) \vec{u}_z}$$

- Valeur moyenne temporelle du vecteur de Poynting (sur une période $T = \frac{2\pi}{\omega}$) :
  La moyenne temporelle de $\cos^2(\omega t - kz)$ vaut $\frac{1}{2}$. Par conséquent :
  $$\boxed{\langle \vec{R} \rangle = \frac{E_0^2}{2\mu_0 c} \vec{u}_z}$$

---

#### 4. Analyse critique du modèle
- **Interprétation de $\vec{j} \cdot \vec{E}$ :** Dans un conducteur obéissant à la loi d'Ohm locale $\vec{j} = \gamma \vec{E}$ (où $\gamma$ est la conductivité), le terme $\vec{j} \cdot \vec{E} = \gamma E^2$ est strictement positif. Dans le théorème de Poynting, il apparaît avec un signe négatif dans le membre de droite si l'on écrit $\frac{\partial u}{\partial t} + \text{div}\vec{R} = -\vec{j}\cdot\vec{E}$, ou positif si on l'isole comme source de perte : il traduit la conversion irréversible d'énergie électromagnétique en énergie thermique (effet Joule macroscopique).
- **Limites fondamentales du modèle :** 
  1. *À très haute fréquence (domaines quantiques) :* L'électromagnétisme classique suppose des champs continus et néglige la nature quantique de la lumière. Lorsque l'énergie des photons $h\nu$ devient grande (rayons X, $\gamma$), l'approximation d'un champ électromagnétique continu macroscopique s'effondre au profit d'une description corpusculaire (photons).
  2. *À champ intense :* Le modèle linéaire des milieux (permittivité $\varepsilon_0$ et perméabilité $\mu_0$ constantes) n'est plus valide pour des champs extrêmement intenses (issus de lasers femtosecondes par exemple), où l'on observe des phénomènes d'optique non linéaire (variation de l'indice avec l'intensité, génération d'harmoniques).