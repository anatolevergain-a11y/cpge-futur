---
title: 'Exercice : Propagation d ondes et bilan de Poynting'
description: 'Problème d entraînement type concours pour la filière PT (Physique-Chimie).'
---

### 🌐 Énoncé du problème / Cadre d'étude

On s'intéresse à la propagation d'une onde électromagnétique sinusoïdale plane et progressive dans un milieu matériel homogène, isotrope, linéaire et de conductivité non nulle $\gamma$ (milieu ohmique). Le milieu est caractérisé par sa permittivité électrique $\varepsilon$ et sa perméabilité magnétique $\mu$. On pose $\mu = \mu_0$ et $\varepsilon = \varepsilon_r \varepsilon_0$.

Le champ électrique associé à l'onde est supposé polarisé rectilignement selon l'axe $(O\vec{u}_x)$ et se propage suivant l'axe $(O\vec{z})$. Sa notation complexe associée est :
$$\underline{\vec{E}}(z, t) = \underline{E}_0 e^{j(\omega t - \underline{k}z)} \vec{u}_x$$
avec $\underline{E}_0 = E_0 e^{j\varphi_0}$ une amplitude réelle positive, $\omega pulsation$ de l'onde, et $\underline{k} = k' - j k''$ le vecteur d'onde complexe ($\text{avec } k', k'' > 0$).

L'objectif de ce problème est d'établir l'équation de propagation dans ce milieu conducteur, de déterminer les caractéristiques de l'onde (atténuation, vitesse de phase) et d'analyser les transferts d'énergie par le biais du vecteur de Poynting et du théorème de Poynting local.

---

### ❓ Questions progressives

1. **Équations de Maxwell et équation de propagation :**
   En partant des équations de Maxwell dans le milieu (en régime quasi-stationnaire pour l'induction, ou général avec l'ARQS magnétique), établir l'équation aux dérivées partielles vérifiée par le champ électrique $\vec{E}(z,t)$.

2. **Injection de la solution complexe et relation de dispersion :**
   En injectant la forme complexe $\underline{\vec{E}}(z,t)$ dans l'équation de propagation, exprimer le vecteur d'onde complexe $\underline{k}$ en fonction de $\omega$, $\mu_0$, $\varepsilon$ et $\gamma$.

3. **Analyse de l'onde et du milieu :**
   a) Exprimer la constante de phase $k'$ et la constante d'atténuation $k''$ en fonction des paramètres du milieu et de la pulsation $\omega$.
   b) Définir la *skin depth* (épaisseur de peau) $\delta$ et donner son expression.
   c) Discuter de l'influence de la conductivité $\gamma$ sur la propagation (milieu bon conducteur vs diélectrique).

4. **Champ magnétique associé :**
   À l'aide de l'équation de Maxwell-Faraday, déterminer l'expression du champ magnétique complexe $\underline{\vec{B}}(z,t)$ associé à l'onde. Mettre en évidence le déphasage entre $\vec{E}$ et $\vec{B}$.

5. **Bilan énergétique et vecteur de Poynting :**
   a) Rappeler l'expression du vecteur de Poynting $\vec{\Pi}$ dans le vide, et son extension dans ce milieu.
   b) Calculer la valeur moyenne temporelle du vecteur de Poynting $\langle \vec{\Pi} \rangle$. Comment évolue-t-elle au cours de la propagation ? Interpréter physiquement.
   c) Énoncer le théorème de Poynting local et l'appliquer pour relier la variation spatiale de $\langle \vec{\Pi} \rangle$ à la puissance volumique dissipée par effet Joule.

---

### 💡 Pistes & Indications méthodologiques

* **Attention aux unités en LaTeX :** Utilisez toujours `\text{...}` pour les unités dans les expressions mathématiques (ex: $\Omega \cdot \text{m}^{-1}$, $\text{V} \cdot \text{m}^{-1}$).
* **Équations de Maxwell dans un milieu conducteur :** N'oubliez pas d'inclure la loi d'Ohm locale $\vec{j} = \gamma \vec{E}$ dans l'équation de Maxwell-Ampère.
* **Complexification :** Les opérateurs temporels $\frac{\partial}{\partial t}$ deviennent une multiplication par $j\omega$, et spatiaux $\frac{\partial}{\partial z}$ une multiplication par $-j\underline{k}$.
* **Moyenne temporelle :** Pour le produit de deux grandeurs sinusoïdales complexes $\underline{A}$ et $\underline{B}$, la moyenne temporelle du produit réel est $\langle A \cdot B \rangle = \frac{1}{2} \text{Re}(\underline{A} \, \underline{B}^*)$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Équations de Maxwell et équation de propagation
Dans un milieu matériel linéaire, homogène, isotrope, sans charges libres macroscopiques ($\rho_{\text{libre}} = 0$) mais conducteur de conductivité $\gamma$, les équations de Maxwell s'écrivent :
* Maxwell-Gauss : $\text{div}(\varepsilon \vec{E}) = 0 \implies \text{div}(\vec{E}) = 0$ (car milieu homogène)
* Maxwell-Thomson : $\text{div}(\vec{B}) = 0$
* Maxwell-Faraday : $\text{rot}(\vec{E}) = -\frac{\partial \vec{B}}{\partial t}$
* Maxwell-Ampère : $\text{rot}(\vec{B}) = \mu_0 \vec{j} + \mu_0 \varepsilon \frac{\partial \vec{E}}{\partial t} = \mu_0 \gamma \vec{E} + \mu_0 \varepsilon \frac{\partial \vec{E}}{\partial t}$ (en utilisant la loi d'Ohm $\vec{j} = \gamma \vec{E}$)

Appliquons l'opérateur rotationnel à l'équation de Maxwell-Faraday :
$$\text{rot}\left(\text{rot}(\vec{E})\right) = \text{grad}\left(\text{div}(\vec{E})\right) - \Delta \vec{E} = -\Delta \vec{E}$$
D'autre part :
$$\text{rot}\left(-\frac{\partial \vec{B}}{\partial t}\right) = -\frac{\partial}{\partial t}\left(\text{rot}(\vec{B})\right) = -\frac{\partial}{\partial t}\left(\mu_0 \gamma \vec{E} + \mu_0 \varepsilon \frac{\partial \vec{E}}{\partial t}\right)$$
En égalant les deux expressions, on obtient l'**équation de propagation de Helmholtz** :
$$\Delta \vec{E} - \mu_0 \gamma \frac{\partial \vec{E}}{\partial t} - \mu_0 \varepsilon \frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0}$$

#### 2. Injection de la solution complexe et relation de dispersion
La solution cherchée est $\underline{\vec{E}}(z, t) = \underline{E}_0 e^{j(\omega t - \underline{k}z)} \vec{u}_x$. 
Les opérateurs se traduisent par :
* $\frac{\partial}{\partial t} \rightarrow j\omega$
* $\frac{\partial^2}{\partial t^2} \rightarrow -\omega^2$
* $\Delta = \frac{\partial^2}{\partial z^2} \rightarrow (-\underline{k})^2 = \underline{k}^2$ (car $\vec{E}$ ne dépend que de $z$).

En injectant dans l'équation de propagation :
$$-\underline{k}^2 \underline{\vec{E}} - \mu_0 \gamma (j\omega) \underline{\vec{E}} - \mu_0 \varepsilon (-\omega^2) \underline{\vec{E}} = \vec{0}$$
En simplifiant par $\underline{\vec{E}}$, on obtient la **relation de dispersion complexe** :
$$\underline{k}^2 = \mu_0 \varepsilon \omega^2 - j \mu_0 \gamma \omega$$

#### 3. Analyse de l'onde et du milieu
**a) Constantes $k'$ et $k''$ :**
Posons $\underline{k} = k' - j k''$. En élevant au carré :
$$\underline{k}^2 = (k')^2 - (k'')^2 - 2j k' k'' = \mu_0 \varepsilon \omega^2 - j \mu_0 \gamma \omega$$
Par identification des parties réelle et imaginaire :
1. $(k')^2 - (k'')^2 = \mu_0 \varepsilon \omega^2$
2. $2 k' k'' = \mu_0 \gamma \omega$

De plus, le module de $\underline{k}^2$ est :
$$|\underline{k}^2| = (k')^2 + (k'')^2 = \sqrt{(\mu_0 \varepsilon \omega^2)^2 + (\mu_0 \gamma \omega)^2} = \mu_0 \omega \sqrt{\varepsilon^2 \omega^2 + \gamma^2}$$
En combinant l'équation 1 et le module, on obtient par somme et différence :
$$k' = \sqrt{\frac{\mu_0 \varepsilon \omega^2}{2} \left( \sqrt{1 + \left(\frac{\gamma}{\varepsilon \omega}\right)^2} + 1 \right)}$$
$$k'' = \sqrt{\frac{\mu_0 \varepsilon \omega^2}{2} \left( \sqrt{1 + \left(\frac{\gamma}{\varepsilon \omega}\right)^2} - 1 \right)}$$

**b) Épaisseur de peau $\delta$ :**
L'amplitude du champ électrique varie en $e^{-k'' z}$. L'intensité ou l'amplitude est divisée par $e$ sur une distance caractéristique appelée **épaisseur de peau** $\delta$ :
$$\delta = \frac{1}{k''}$$

**c) Discussion selon la conductivité $\gamma$ :**
* *Milieu diélectrique parfait* ($\gamma = 0$) : $k'' = 0$, $k' = \omega \sqrt{\mu_0 \varepsilon}$. L'onde se propage sans atténuation avec la vitesse de phase $v_\phi = \frac{\omega}{k'} = \frac{1}{\sqrt{\mu_0 \varepsilon}}$.
* *Bon conducteur* ($\frac{\gamma}{\varepsilon \omega} \gg 1$) : 
  $$k' \approx k'' \approx \sqrt{\frac{\mu_0 \gamma \omega}{2}}$$
  L'épaisseur de peau vaut alors $\delta \approx \sqrt{\frac{2}{\mu_0 \gamma \omega}}$. L'onde est fortement atténuée sur de très faibles distances (effet de स्किन / *skin effect*).

#### 4. Champ magnétique associé
À partir de l'équation de Maxwell-Faraday en régime complexe :
$$\text{rot}(\underline{\vec{E}}) = -j\omega \underline{\vec{B}}$$
Exprimons le rotationnel de $\underline{\vec{E}}$ :
$$\text{rot}(\underline{\vec{E}}) = \vec{\nabla} \wedge (\underline{E}_x \vec{u}_x) = -\frac{\partial \underline{E}_x}{\partial z} \vec{u}_y = -(-j\underline{k}) \underline{E}_x \vec{u}_y = j\underline{k} \underline{E}_x \vec{u}_y$$
On en déduit le champ magnétique complexe :
$$\underline{\vec{B}} = -\frac{1}{j\omega} \text{rot}(\underline{\vec{E}}) = -\frac{\underline{k}}{\omega} \underline{E}_0 e^{j(\omega t - \underline{k}z)} \vec{u}_y$$
En posant $\underline{B}_0 = \frac{\underline{k}}{\omega} \underline{E}_0$, on constate que $\underline{\vec{B}}$ est porté par $\vec{u}_y$ (trièdre direct $(\vec{u}_x, \vec{u}_y, \vec{u}_z)$). Le champ magnétique est déphasé par rapport au champ électrique en raison de la nature complexe de $\underline{k} = |\underline{k}|e^{j\theta}$.

#### 5. Bilan énergétique et vecteur de Poynting
**a) Expression du vecteur de Poynting :**
Dans tout milieu, le vecteur de Poynting traduisant le transport d'énergie électromagnétique s'écrit :
$$\vec{\Pi} = \frac{1}{\mu_0} \vec{E} \land \vec{B}$$

**b) Valeur moyenne temporelle :**
En régime harmonique, la moyenne temporelle du vecteur de Poynting s'exprime à partir des amplitudes complexes :
$$\langle \vec{\Pi} \rangle = \frac{1}{2} \text{Re}\left(\frac{1}{\mu_0} \underline{\vec{E}} \land \underline{\vec{B}}^*\right)$$
Avec $\underline{\vec{E}} = \underline{E}_0 e^{-k''z} e^{j(\omega t - k'z)} \vec{u}_x$ et $\underline{\vec{B}}^* = -\frac{\underline{k}^*}{\omega} \underline{E}_0^* e^{-k''z} e^{-j(\omega t - k'z)} \vec{u}_y$.
Le produit vectoriel donne $\vec{u}_x \land \vec{u}_y = \vec{u}_z$. 
En notant $\underline{k} = k' - j k'' = |\underline{k}| e^{-j\phi}$, on obtient :
$$\langle \vec{\Pi} \rangle = \frac{|\underline{E}_0|^2}{2 \mu_0 \omega} e^{-2k''z} \text{Re}(\underline{k}^*) \vec{u}_z = \frac{k' |\underline{E}_0|^2}{2 \mu_0 \omega} e^{-2k''z} \vec{u}_z$$
*Interprétation :* $\langle \vec{\Pi} \rangle$ est dirigé selon la direction de propagation $\vec{u}_z$. Son module décroît spatialement en $e^{-2k''z}$, ce qui traduit l'atténuation de l'onde : l'énergie électromagnétique est perdue au profit du milieu.

**c) Théorème de Poynting local :**
Le théorème de Poynting local s'écrit :
$$\operatorname{div}(\vec{\Pi}) + \frac{\partial e_{\text{em}}}{\partial t} = -\vec{j} \cdot \vec{E}$$
En prenant la moyenne temporelle en régime permanent stationnaire en amplitude (la moyenne temporelle de $\frac{\partial e_{\text{em}}}{\partial t}$ est nulle) :
$$\operatorname{div}(\langle \vec{\Pi} \rangle) = -\langle \vec{j} \cdot \vec{E} \rangle = -\gamma \langle E^2 \rangle$$
Vérifions-le avec notre expression :
$$\operatorname{div}(\langle \vec{\Pi} \rangle) = \frac{\partial}{\partial z} \left( \frac{k' |\underline{E}_0|^2}{2 \mu_0 \omega} e^{-2k''z} \right) = -2k'' \left( \frac{k' |\underline{E}_0|^2}{2 \mu_0 \omega} e^{-2k''z} \right)$$
Or, on a vu que $2k'k'' = \mu_0 \gamma \omega$, soit $\frac{2k'k''}{\mu_0 \omega} = \gamma$. Ainsi :
$$\operatorname{div}(\langle \vec{\Pi} \rangle) = -\gamma \frac{|\underline{E}_0|^2}{2} e^{-2k''z} = -\gamma \langle E^2 \rangle$$
Le flux du vecteur de Poynting à travers une surface de contrôle diminue exactement de la quantité d'énergie convertie en chaleur par **effet Joule** dans le milieu conducteur. Le bilan énergétique est rigoureusement vérifié.