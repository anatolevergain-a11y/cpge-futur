---
title: 'Cours : Optique ondulatoire et interférences'
description: 'Synthèse officielle du cours et démonstrations pour CPGE MPI.'
---

## 📌 1. Définitions & Cadre d'étude

Le cadre de l'optique ondulatoire repose sur la description de la lumière par un champ électromagnétique. Dans le cadre du programme de MPI (deuxième année), on se limite généralement à l'étude d'une composante scalaire du champ électrique, notée $s(M, t)$, représentant la perturbation lumineuse en un point $M$ à l'instant $t$.

### 1.1. Onde plane monochromatique (OPM)
Une onde lumineuse est dite monochromatique de pulsation $\omega$ si sa dépendance temporelle est harmonique. Une OPM se propageant dans le vide (ou un milieu transparent, homogène, isotrope) selon la direction du vecteur d'onde $\vec{k}$ (de norme $k = \frac{\omega}{c} = \frac{2\pi}{\lambda}$) s'écrit sous forme réelle :
$$s(M, t) = A \cos\left(\omega t - \vec{k}\cdot\vec{OM} + \phi_0\right)$$
Sous forme complexe (représentation phasorielle) :
$$\underline{s}(M, t) = \underline{A} \exp(j\omega t) \quad \text{avec} \quad \underline{A} = A \exp\left(-j(\vec{k}\cdot\vec{OM} - \phi_0)\right)$$

### 1.2. État de polarisation
L'état de polarisation décrit l'évolution temporelle de la direction du champ électrique dans le plan d'onde.
- **Polarisation rectiligne** : les champs issus de deux sources différentes doivent être polarisés selon la même direction pour interférer de manière optimale. Si leurs directions de polarisation sont orthogonales, le contraste des interférences est nul.
- **Lumière naturelle (ou non polarisée)** : superposition incohérente d'états de polarisation rapidement variables et équiprobables.

### 1.3. Vibration lumineuse et Intensité
Le récepteur (œil, capteur CCD, photodiode) possède un temps de réponse $\tau$ très grand devant la période optique $T = \frac{2\pi}{\omega}$ ($T \sim 10^{-15} \text{ s}$). Le signal mesuré est proportionnel à l'**intensité lumineuse** $I(M)$, définie comme la moyenne temporelle du carré de la perturbation (ou du module au carré de l'amplitude complexe) sur une durée $\tau$ :
$$I(M) = \langle s^2(M, t)\rangle_\tau = \frac{1}{2} \underline{s}(M) \underline{s}^*(M)$$
L'intensité s'exprime usuellement en $\text{W}\cdot\text{m}^{-2}$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Superposition linéaire et Formule de Fresnel
Considérons deux sources lumineuses $S_1$ et $S_2$ monochromatiques de même pulsation $\omega$. En un point $M$ de l'espace, la perturbation totale est la somme des perturbations issues de chaque source (principe de superposition) :
$$\underline{s}(M) = \underline{s}_1(M) + \underline{s}_2(M)$$
L'intensité résultante s'écrit :
$$I(M) = \langle (\underline{s}_1 + \underline{s}_2)(\underline{s}_1^* + \underline{s}_2^*) \rangle_\tau$$
$$I(M) = \langle \underline{s}_1\underline{s}_1^* \rangle_\tau + \langle \underline{s}_2\underline{s}_2^* \rangle_\tau + 2 \text{Re}\left( \langle \underline{s}_1\underline{s}_2^* \rangle_\tau \right)$$
Soit la **formule de Fresnel des interférences** :
$$I(M) = I_1 + I_2 + 2 \text{Re}\left( \underline{\Gamma}_{12}(M) \right)$$
où $\underline{\Gamma}_{12}(M) = \langle \underline{s}_1(M,t)\underline{s}_2^*(M,t) \rangle_\tau$ est l'**interintensité** (ou fonction d'intercohésion mutuelle).

### 2.2. Conditions d'interférences (Sources cohérentes)
Posons $\underline{s}_i(M, t) = A_i \exp\left(j(\omega t - \varphi_i(M))\right)$. L'interintensité devient :
$$\underline{\Gamma}_{12}(M) = A_1 A_2 \exp\left(-j(\varphi_1(M) - \varphi_2(M))\right) \langle \exp\left(j(\phi_{S1}(t) - \phi_{S2}(t))\right) \rangle_\tau$$
où $\phi_{S1}(t)$ et $\phi_{S2}(t)$ sont les phases initiales aléatoires des sources.
- **Sources indépendantes** (ex: deux lampes à incandescence ou deux lasers distincts) : les phases $\phi_{S1}(t)$ et $\phi_{S2}(t)$ sont décorrélées. La moyenne temporelle est nulle : $\underline{\Gamma}_{12}(M) = 0$. Il n'y a **pas d'interférences** : $I(M) = I_1 + I_2$ (additivité des intensités).
- **Sources cohérentes** (issues d'une même source primaire par division du front d'onde ou d'amplitude) : la différence de phase initiale est constante (ou nulle). On pose la différence de phase totale au point $M$ :
  $$\Delta \varphi(M) = \varphi_1(M) - \varphi_2(M) = \frac{2\pi}{\lambda_0} \delta(M)$$
  où $\delta(M) = [S_1 M] - [S_2 M]$ est la **différence de marche** (ou chemin optique).

L'intensité s'exprime alors sous la forme canonique :
$$I(M) = I_1 + I_2 + 2\sqrt{I_1 I_2} \cos(\Delta \varphi)$$
Ou, si $I_1 \approx I_2 = I_0$ :
$$I(M) = 2I_0 \left(1 + \cos\left(\frac{2\pi \delta}{\lambda_0}\right)\right) = 4I_0 \cos^2\left(\frac{\pi \delta}{\lambda_0}\right)$$

### 2.3. Démonstration : Interférences à deux onde (Frousseaux d'Young / Dispositif interférentiel)
Dans le plan d'observation situé à la distance $D$ des sources $S_1$ et $S_2$ distantes de $a$ (avec $a \ll D$), repéré par la coordonnée $x$ :
- Calcul de la différence de marche $\delta(x)$ :
  $$\delta = S_2 M - S_1 M = \sqrt{D^2 + \left(x + \frac{a}{2}\right)^2} - \sqrt{D^2 + \left(x - \frac{a}{2}\right)^2}$$
  En effectuant un développement limité à l'ordre 1 en $\frac{a}{D}$ :
  $$\delta(x) \approx \frac{ax}{D}$$
- **Interfrange $i$** : distance entre deux maxima consécutifs d'intensité.
  $$\frac{2\pi}{\lambda_0} \frac{a x_{\text{max}}}{D} = 2k\pi \implies x_{\text{max}} = k \frac{\lambda_0 D}{a}$$
  $$i = x_{k+1} - x_k = \frac{\lambda_0 D}{a}$$
- **Frange brillante** pour $\delta = k \lambda_0$ ($k \in \mathbb{Z}$).
- **Frange sombre** pour $\delta = (k + \frac{1}{2})\lambda_0$ ($k \in \mathbb{Z}$).

### 2.4. Visibilité des franges (Contraste)
Le contraste (ou visibilité) $V$ d'une figure d'interférence est défini par :
$$V = \frac{I_{\text{max}} - I_{\text{min}}}{I_{\text{max}} + I_{\text{min}}}$$
Pour des sources parfaitement monochromatiques et d'intensités égales, $V = 1$.

---

## 💡 3. Méthodes de calcul & Algorithmes

1. **Étape 1 : Identifier le dispositif** (division du front d'onde : fentes d'Young, miroirs de Fresnel ; ou division d'amplitude : interféromètre de Michelson, lames minces).
2. **Étape 2 : Déterminer les chemins optiques** $[S_i M]$ en tenant compte des milieux traversés (indice $n$) et des éventuels déphasages par réflexion (changement de pi lors d'une réflexion sur un milieu plus réfringent, $n_2 > n_1$).
3. **Étape 3 : Exprimer la différence de marche $\delta$** en fonction des coordonnées d'espace. Faire les approximations paroxiales rigoureuses ($D \gg x, y, a$).
4. **Étape 4 : Calculer l'intensité** $I(M)$ via la formule d'interférence.
5. **Étape 5 : Caractériser la figure** (localisation des franges : interférences à l'infini pour le Michelson réglé en lame d'air, ou d'alinéa pour les fentes d'Young ; calcul de l'interfrange ou de l'entraxe des anneaux).

---

## ⚠️ 4. Pièges classiques aux Concours

* **Oubli du déphasage par réflexion ($\pi$ ou $\lambda_0 / 2$)** : Lors d'une réflexion sur un dioptre avec un passage d'un milieu d'indice faible vers un milieu d'indice plus élevé ($n_1 < n_2$), l'onde subit un déphasage à l'origine de $\pi$, ce qui équivaut à rajouter $\frac{\lambda_0}{2}$ à la différence de marche.
* **Confusion entre cohésion spatiale et cohésion temporelle** : 
  - La *cohésion temporelle* est liée à la largeur spectrale $\Delta \lambda$ de la source. Si $\Delta \lambda$ est grand, le train d'onde a une longueur finie (longueur de coherence $Lc \approx \frac{\lambda_0^2}{\Delta \lambda}$). Au-delà d'une différence de marche $\delta > Lc$, les interférences disparaissent.
  - La *cohésion spatiale* est liée à la dimension finie de la source source primaire. Une source étendue détruit le contraste si sa taille dépasse une limite angulaire critique (paramètre de trou de Young étendu).
* **Mauvaise gestion des approximations d'optique géométrique** : Ne pas justifier les développements limités (ex: $\sqrt{1+u} \approx 1 + \frac{1}{2}u$) sous prétexte que "c'est du cours". Il faut expliciter les petits paramètres sans dimension (ex : $\frac{x}{D} \ll 1$).
* **Confusion entre interférences non localisées et localisées** : Les fentes d'Young fournissent des interférences non localisées (observables partout dans le plan d'observation), tandis que les anneaux de Michelson en lame d'air sont localisés à l'infini (nécessité d'une lentille convergente pour les observer sur un écran).