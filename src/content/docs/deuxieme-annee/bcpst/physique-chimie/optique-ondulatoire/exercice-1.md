---
title: 'Exercice 1 : Modèle ondulatoire de la lumière et polarisation'
description: 'Problème d entraînement type concours pour BCPST.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre de l'étude des techniques optiques appliquées à l'analyse structurale (par exemple en minéralogie ou en biochimie via la polarimétrie), on s'intéresse à la propagation d'une onde électromagnétique lumineuse monochromatique à travers différents dispositifs polarisants.

On considère une onde lumineuse plane, monochromatique, de pulsation $\omega$ et de vecteur d'onde $\vec{k} = k \vec{u}_z$, se propageant dans le vide. Le champ électrique associé à cette onde est décrit par :
$$\vec{E}(z, t) = E_0 \cos(\omega t - kz + \varphi) \vec{u}_x$$

On souhaite étudier l'action successive de lames cristallines et de polariseurs sur cette onde. On rappelle que la lumière naturelle (ou non polarisée) est modélisée par un champ électrique dont la direction de polarisation change de façon aléatoire et rapide devant le temps de réponse des détecteurs, avec des composantes selon $\vec{u}_x$ et $\vec{u}_y$ statistiquement indépendantes et de même amplitude moyenne.

---

### ❓ Questions progressives

1. **Caractérisation de l'onde incidente :** Préciser la nature de la polarisation de l'onde décrite par $\vec{E}(z, t)$. Exprimer le champ magnétique $\vec{B}(z, t)$ associé dans le cadre de l'approximation des ondes planes progressives harmoniques (OPPH).
2. **Action d'un polariseur parfait :** L'onde précédente, désormais polarisée rectilignement selon $\vec{u}_x$, traverse un polariseur linéaire (analyseur) dont l'axe passant (ou axe de transmission) fait un angle $\theta$ avec l'axe $\vec{u}_x$ dans le plan $(xOy)$. 
   - Exprimer le champ électrique émergent $\vec{E}_{\text{ émergent}}(z, t)$.
   - Déterminer l'intensité lumineuse $I$ en fonction de l'intensité incidente $I_0$ et de l'angle $\theta$ (loi de Malus).
3. **Lumière naturelle et polariseur :** Si l'on remplace l'onde incidente par un faisceau de lumière naturelle d'intensité moyenne $I_{\text{nat}}$, quelle est l'intensité $I'$ transmise à travers le même polariseur ? Justifier brièvement.
4. **Lame quart d'onde :** On revient à l'onde polarisée rectilignement de la question 1. On la fait traverser une lame cristalline uniaxiale, dite « quart d'onde » $(\lambda/4)$, dont les axes neutres (axe rapide et axe lent) sont orientés respectivement selon $\vec{u}_x$ et $\vec{u}_y$. 
   - Qu'appelle-t-on retard de phase (ou déphasage) introduit par une telle lame entre les deux composantes du champ ? Préciser sa valeur numérique.
   - Déterminer l'expression du champ électrique après la traversée de cette lame. Quelle est la nouvelle nature de la polarisation de la lumière ?

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pour la polarisation, observez l'extrémité du vecteur champ électrique au cours du temps en un point donné de l'espace. Pour le champ magnétique, utilisez la relation de structure des OPPH dans le vide : $\vec{B} = \frac{1}{\omega} (\vec{k} $\wedge$ \vec{E})$.
* **Question 2 :** Projetez le champ électrique incident sur l'axe de transmission du polariseur. Rappelez-vous que l'intensité lumineuse est proportionnelle à la moyenne temporelle du carré du champ électrique (ou de la valeur efficace au carré).
* **Question 3 :** Décomposez la lumière naturelle en deux composantes incohérentes et orthogonales de même intensité moyenne, puis appliquez la loi de Malus ou effectuez une moyenne temporelle sur l'angle $\theta$.
* **Question 4 :** Une lame $\lambda/4$ introduit un déphasage de $\pi/2$ (ou $90^\circ$) entre l'axe rapide et l'axe lent. Analysez l'évolution des composantes $E_x(t)$ et $E_y(t)$ du champ électrique émergent pour identifier une ellipse ou un cercle.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Caractérisation de l'onde incidente et champ magnétique
* **Polarisation :** Le vecteur champ électrique $\vec{E}(z, t)$ oscille strictement selon une direction fixe dans l'espace, portée par le vecteur unitaire $\vec{u}_x$. L'onde est donc **polarisée rectilignement** selon $\vec{u}_x$.
* **Champ magnétique :** Pour une OPPH se propageant dans le vide, les champs $\vec{E}$, $\vec{B}$ et le vecteur d'onde $\vec{k}$ forment un trièdre direct $(\vec{E}, \vec{B}, \vec{u}_z)$ tel que :
  $$\vec{B}(z, t) = \frac{1}{c} \vec{u}_z \wedge \vec{E}(z, t)$$
  où $c = \omega / k$ est la célérité de la lumière dans le vide.
  En effectuant le produit vectoriel ($\vec{u}_z \wedge \vec{u}_x = \vec{u}_y$) :
  $$\vec{B}(z, t) = \frac{E_0}{c} \cos(\omega t - kz + \varphi) \vec{u}_y$$

#### 2. Action d'un polariseur parfait (Loi de Malus)
* **Champ électrique émergent :** Soit $\vec{u}_p = \cos\theta \vec{u}_x + \sin\theta \vec{u}_y$ le vecteur unitaire définissant l'axe de transmission du polariseur. Le champ électrique après traversée du polariseur (idéal) est la projection du champ incident sur cet axe :
  $$\vec{E}_{\text{émergent}}(z, t) = (\vec{E} \cdot \vec{u}_p) \vec{u}_p = E_0 \cos(\omega t - kz + \varphi) \cos\theta \, \vec{u}_p$$
* **Intensité lumineuse :** L'intensité lumineuse est proportionnelle à la moyenne temporelle du carré de la norme du champ électrique : $I = \varepsilon_0 c \langle \|\vec{E}\|^2 \rangle_T$.
  L'intensité incidente vaut $I_0 = \varepsilon_0 c \frac{E_0^2}{2}$.
  Pour l'onde émergente, l'amplitude maximale est $E_0 \cos\theta$, donc :
  $$I(\theta) = \varepsilon_0 c \frac{(E_0 \cos\theta)^2}{2} = I_0 \cos^2\theta$$
  C'est la **loi de Malus**.

#### 3. Cas de la lumière naturelle
* La lumière naturelle n'a pas de direction privilégiée de polarisation. On peut la modéliser par la superposition de deux composantes incohérentes polarisées rectilignement selon $\vec{u}_x$ et $\vec{u}_y$, d'intensités moyennes égales à $\frac{I_{\text{nat}}}{2}$.
* Lorsqu'elle traverse un polariseur dont l'axe fait un angle $\theta$ avec $\vec{u}_x$ :
  - La composante selon $\vec{u}_x$ donne une intensité transmise de $\left(\frac{I_{\text{nat}}}{2}\right) \cos^2\theta$.
  - La composante selon $\vec{u}_y$ (qui fait un angle $\frac{\pi}{2} - \theta$ avec l'axe du polariseur) donne $\left(\frac{I_{\text{nat}}}{2}\right) \sin^2\theta$.
* Par addition des intensités (les sources étant incohérentes) :
  $$I' = \frac{I_{\text{nat}}}{2} \cos^2\theta + \frac{I_{\text{nat}}}{2} \sin^2\theta = \frac{I_{\text{nat}}}{2} (\cos^2\theta + \sin^2\theta) = \frac{I_{\text{nat}}}{2}$$
  L'intensité transmise est donc **la moitié de l'intensité incidente**, indépendamment de l'orientation du polariseur.

#### 4. Action d'une lame quart d'onde $(\lambda/4)$
* **Retard de phase :** Une lame quart d'onde introduit un déphasage $\Delta\varphi = \frac{\pi}{2}$ (modulo $2\pi$) entre la composante suivant l'axe rapide et la composante suivant l'axe lent.
* **Expression du champ émergent :** 
  L'axe rapide étant selon $\vec{u}_x$ et l'axe lent selon $\vec{u}_y$ (ou inversement, fixons par convention $\vec{u}_x$ rapide et $\vec{u}_y$ lent), le champ incident est entièrement porté par l'axe rapide :
  $$E_x(t) = E_0 \cos(\omega t - kz + \varphi)$$
  La traversée de la lame retarde la composante selon l'axe lent de $\pi/2$, mais comme le champ incident n'a pas de composante selon $\vec{u}_y$ ($E_y = 0$), la lumière incidente étant polarisée parallèlement à l'axe rapide, **la lame quart d'onde ne modifie pas l'état de polarisation** : l'onde reste polarisée rectilignement selon $\vec{u}_x$.

  *(Note d'examinateur subtile : Pour obtenir une polarisation circulaire ou elliptique, il aurait fallu que l'onde incidente ait des composantes non nulles et égales selon les deux axes, par exemple inclinée à $45^\circ$ des axes neutres).*