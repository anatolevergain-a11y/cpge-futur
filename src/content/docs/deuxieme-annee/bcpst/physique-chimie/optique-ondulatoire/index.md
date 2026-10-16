---
title: "📌 1. Définitions & Cadre d'étude"
description: "Fiche de cours et d'exercice CPGE."
---

## 📌 1. Définitions & Cadre d'étude

L'optique ondulatoire décrit la lumière comme une onde électromagnétique se propageant dans le vide ou dans un milieu transparent, linéaire, homogène et isotrope (TLHI).

### Champ E.M. et approximation scalaire
Dans le cadre du programme de BCPST, on se restreint généralement à l'étude d'une composante du champ électrique $\vec{E}$, dite onde lumineuse scalaire, modélisée par une onde plane harmoniques (OPH) de pulsation $\omega$ et de vecteur d'onde $\vec{k}$ (avec $k = \frac{\omega}{c} = \frac{2\pi}{\lambda}$ dans le vide) :
$$s(\vec{M}, t) = S_0 \cos(\omega t - \vec{k}\cdot\vec{M} + \varphi_0)$$

### Représentation complexe (Amplitude complexe)
On associe à $s(\vec{M}, t)$ sa grandeur complexe associée $\underline{s}(\vec{M}, t) = \underline{S}(\vec{M}) e^{j\omega t}$ avec l'amplitude complexe :
$$\underline{S}(\vec{M}) = S_0 e^{j(\varphi_0 - \vec{k}\cdot\vec{M})}$$

### Intensité lumineuse
L'œil et les récepteurs (caméras, photodiodes) sont sensibles à l'intensité lumineuse $I$, proportionnelle à la moyenne temporelle du carré du champ sur un intervalle de temps grand devant la période optique $\frac{2\pi}{\omega}$ mais petit devant le temps de réponse du détecteur :
$$I(\vec{M}) = \langle s^2(\vec{M}, t) \rangle_t = \frac{1}{2} S_0^2 = \frac{1}{2} |\underline{S}(\vec{M})|^2$$
L'unité légale est le $\text{W}\cdot\text{m}^{-2}$.

### États de polarisation
L'onde lumineuse est une onde transversale. Le vecteur champ électrique $\vec{E}$ orthogonal à $\vec{k}$ définit l'état de polarisation :
- **Polarisation rectiligne** : L'extrèmité de $\vec{E}$ décrit un segment. Les deux composantes orthogonales $\underline{E}_x$ et $\underline{E}_y$ sont en phase (ou en opposition de phase).
- **Polarisation circulaire** : L'extrèmité de $\vec{E}$ décrit un cercle ($\underline{E}_x$ et $\underline{E}_y$ déphasées de $\pm \frac{\pi}{2}$ avec des amplitudes égales).
- **Polarisation elliptique** : Cas général.
---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Principe de superposition et interférences
Soit deux sources lumineuses cohérentes (même pulsation $\omega$, différence de phase constante au cours du temps) supermettant leurs champs $\underline{S}_1$ et $\underline{S}_2$ au point $\vec{M}$.

**Démonstration de l'expression de l'intensité interférentielle :**
L'intensité résultante est :
$$I = \frac{1}{2} |\underline{S}_1 + \underline{S}_2|^2 = \frac{1}{2} \left( |\underline{S}_1|^2 + |\underline{S}_2|^2 + \underline{S}_1 \underline{S}_2^* + \underline{S}_1^* \underline{S}_2 \right)$$
En posant $\underline{S}_i = S_{0i} e^{j\varphi_i}$, on introduit la différence de phase $\Delta\varphi = \varphi_2 - \varphi_1$ :
$$I = I_1 + I_2 + 2\sqrt{I_1 I_2} \cos(\Delta\varphi)$$
Où $I_1 = \frac{1}{2} S_{01}^2$ et $I_2 = \frac{1}{2} S_{02}^2$. C'est la **formule de Fresnel**.

### Interférences par division du front d'onde (Exemple des trous de Young)
Soit deux sources secondaires $S_1$ et $S_2$ distantes de $a$, éclairées par une source synchrone, observant la figure d'interférence sur un écran situé à une distance $D$ (avec $a \ll D$).

La différence de marche $\delta$ au point $M$ de coordonnée $y$ (sur l'axe perpendiculaire à l'axe des sources) s'exprime par :
$$\delta = S_2 M - S_1 M \approx \frac{ay}{D}$$
La différence de phase vaut $\Delta\varphi = \frac{2\pi \delta}{\lambda_0} = \frac{2\pi a y}{\lambda_0 D}$.
L'intensité s'écrit :
$$I(y) = 2I_0 \left( 1 + \cos\left(\frac{2\pi a y}{\lambda_0 D}\right) \right)$$
- **Interfrange $i$** (distance entre deux franges brillantes successives) :
  $$i = \frac{\lambda_0 D}{a}$$

### Polarisation et matrice de Jones
Une onde polarisée rectilignement ou elliptiquement se représente par un vecteur de Jones $\vec{E} \in \mathcal{M}_{2,1}(\mathbb{C})$ :
$$\begin{pmatrix} \underline{E}_x \\ \underline{E}_y \end{pmatrix}$$
Un composant optique (polariseur, lame retardatrice) est représenté par une matrice de Jones $\mathcal{M} \in \mathcal{M}_{2,2}(\mathbb{C})$. L'onde émise est $\vec{E}_{\text{sortie}} = \mathcal{M} \vec{E}_{\text{entrée}}$.

- **Matrice d'un polariseur linéaire de direction $\theta$** :
  $$P(\theta) = \begin{pmatrix} \cos^2(\theta) & \sin(\theta)\cos(\theta) \\ \sin(\theta)\cos(\theta) & \sin^2(\theta) \end{pmatrix}$$
- **Matrice d'une lame demi-onde ($\Delta\varphi = \pi$) d'axe rapide horizontal** :
  $$L_{\lambda/2} = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Calcul de la différence de marche $\delta$
1. **Identifier les chemins optiques** suivis par les rayons lumineux issus de la source et parvenant au point $M$.
2. **Exprimer la longueur géométrique** des trajets dans les différents milieux d'indice $n$. Le chemin optique est défini par $\mathcal{L} = \int n \, ds$.
3. **Effectuer un développement limité** (type approximation paraxial : $\sqrt{1+u} \approx 1 + \frac{1}{2}u$) lorsque la géométrie du dispositif l'implique (ex: $D \gg y$ ou $D \gg a$).
4. **Relier $\delta$ à l'intensité** via la relation $\Delta\varphi = \frac{2\pi \delta}{\lambda_0} + \Delta\varphi_0$ (où $\$\Delta\varphi_0$ est le déphasage à l'origine éventuel, par exemple dû à une réflexion sur un milieu plus dense).

### Utilisation des vecteurs de Jones pour l'analyse de polarisation
1. **Définir le vecteur de Jones initial** de l'onde incidente (souvent non polarisée, traitée comme incohérente, ou polarisée rectilignement selon $\vec{u}_x$ : $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$).
2. **Appliquer successivement les matrices de Jones** des composants traversés dans l'ordre de propagation.
3. **Calculer l'intensité finale** par $I \propto |\underline{E}_{x,\text{sortie}}|^2 + |\underline{E}_{y,\text{sortie}}|^2$.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confondre différence de marche $\delta$ et différence de phase $\Delta\varphi$** : Ne pas oublier le facteur $\frac{2\pi}{\lambda_0}$ et le signe éventuel lié aux conditions aux limites (ex: déphasage de $\pi$ lors d'une réflexion sur un dioptre plus réfringent).
2. **Oublier le domaine de validité de la cohérence** : Des sources indépendantes (deux lasers distincts, deux ampoules) ne présentent pas de relation de phase stable dans le temps ($\Delta\varphi(t)$ varie de manière aléatoire). Le terme d'interférence s'annule temporellement ($\langle \cos(\Delta\varphi(t)) \rangle_t = 0$), on observe un isadition d'intensités $I = I_1 + I_2$ sans franges d'interférences.
3. **Erreurs d'unités dans les applications numériques** : Toujours convertir les longueurs d'onde ($\lambda_0$ en nanomètres $\text{nm}$) et les dimensions du dispositif (en mètres $\text{m}$) dans le système international avant tout calcul d'interfrange.
4. **Mauvaise orientation des axes pour les matrices de Jones** : Veiller à exprimer tous les vecteurs et matrices dans le même repère cartésien $(O, \vec{u}_x, \vec{u}_y)$ avant d'effectuer les produits matriciels.