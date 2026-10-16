---
title: 'Exercice 2 : Réseaux de diffraction'
description: 'Problème d entraînement type concours pour PT.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les réseaux de diffraction sont des composants optiques fondamentaux utilisés tant pour la métrologie que pour la spectroscopie de haute précision. L'objectif de ce problème est d'étudier le comportement d'un réseau plan par transmission éclairé par une source lumineuse polychromatique, puis d'analyser son pouvoir de résolution et les limites de son modèle d'utilisation en conditions réelles (filière PT).

On considère un réseau plan par transmission, infini et périodique, constitué de $N$ fentes parallèles. La période spatiale du réseau (ou pas du réseau) est notée $a$. Chaque fente a une largeur $b$ ($b < a$). Le réseau est éclairé sous incidence normale par une onde plane monochromatique de longueur d'onde dans le vide $\lambda$. 

L'axe $(Ox)$ est perpendiculaire aux fentes, l'axe $(Oy)$ est parallèle aux fentes, et l'axe $(Oz)$ est la direction de propagation incidente. Le plan d'observation est situé à l'infini (focal image d'une lentille convergente de distance focale $f'$), repéré par la coordonnée angulaire $\theta$ (angle de diffraction par rapport à l'axe optique $(Oz)$).

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Rappel et formulation de l'amplitude complexe diffractée**
   Établir, sans démonstration détaillée mais en justifiant les termes, l'expression de l'intensité lumineuse $I(\theta)$ diffractée par le réseau à $N$ fentes dans la direction $\theta$, sachant que l'intensité due à une seule fente est notée $I_1(\theta)$.

2. **Recherche des directions d'interférences constructives**
   Déterminer la condition sur l'angle de diffraction $\theta$ pour observer des maxima principaux d'intensité (pics d'interférence). On exprimera $\theta_p$ en fonction de $a$, $\lambda$ et de l'ordre d'interférence $p$ (entier relatif).

3. **Application numérique et analyse spectrale**
   Le réseau possède $a = 2{,}0\,\mu\text{m}$ et est éclairé par une source de lumière blanche dont le domaine visible s'étend de $\lambda_{\text{min}} = 400\,\text{nm}$ à $\lambda_{\text{max}} = 750\,\text{nm}$.
   Calculer l'angle de diffraction du premier ordre ($p = 1$) pour les deux extrêmes du spectre visible. Mettre en évidence le phénomène de chevauchement des ordres.

4. **Étude du pouvoir de résolution chromatique**
   On souhaite séparer deux raies spectrales très proches de longueurs d'onde $\lambda$ et $\lambda + \delta\lambda$. 
   Définir le pouvoir de résolution $\mathcal{R} = \frac{\lambda}{\delta\lambda}$ en utilisant le critère de Rayleigh appliqué au réseau. Montrer que $\mathcal{R} = p \cdot N$, où $N$ est le nombre total de fentes éclairées.

5. **Analyse critique du modèle idéal**
   Dans les conditions réelles d'utilisation en TP de physique, le réseau n'est pas infini et le faisceau incident possède une largeur finie $L$. De plus, les défauts de fabrication (rugosité, périodicité imparfaite) introduisent un bruit de fond diffus.
   Discuter qualitativement de l'impact d'une diminution du nombre de fentes éclairées $N$ sur les pics d'interférence (largeur à mi-hauteur et intensité maximale).

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Pensez à utiliser le théorème de superposition et le facteur de structure d'un réseau (produit du terme de diffraction par une fente par le terme d'interférence à $N$ ondes).
- **Question 2 :** L'interférence constructive à $N$ ondes correspond à l'annulation de la différence de marche entre deux fentes consécutives, soit $\delta = a \sin\theta = p\lambda$.
- **Question 3 :** Utilisez l'arcsinus pour trouver les angles limites et vérifiez l'absence de chevauchement entre $p=1$ et $p=2$.
- **Question 4 :** Le critère de Rayleigh impose que le maximum principal d'une longueur d'onde coïncide avec le premier minimum annulé de l'autre. Exprimez l'écart angulaire $\Delta\theta$ entre deux zéros consécutifs de la fonction d'interférence.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Expression de l'intensité lumineuse
L'amplitude complexe diffractée par un réseau de $N$ fentes identiques espacées de $a$ est le produit de deux termes :
- Le terme de diffraction par une seule fente : $S_1(\theta)$.
- Le facteur d'interférence à $N$ ondes : $\frac{\sin(N \pi \frac{a \sin\theta}{\lambda})}{\sin(\pi \frac{a \sin\theta}{\lambda})}$.

L'intensité lumineuse $I(\theta)$ s'écrit donc sous la forme classique :
$$I(\theta) = I_1(\theta) \cdot \left[ \frac{\sin\left(N \frac{\pi a \sin\theta}{\ⵍ}\right)}{\sin\left(\frac{\pi a \sin\theta}{\lambda}\right)} \right]^2$$
avec $I_1(\theta) = I_0 \left( \frac{\sin\left(\frac{\pi b \sin\theta}{\lambda}\right)}{\frac{\pi b \sin\theta}{\lambda}} \right)^2$ l'intensité diffractée par une seule fente de largeur $b$.

#### 2. Condition des maxima principaux
Les maxima principaux d'intensité (pics d'interférence) sont obtenus lorsque le dénominateur du terme d'interférence s'annule, tout en évitant les formes indéterminées qui correspondent aux maxima secondaires. La condition s'écrit :
$$\frac{\pi a \sin\theta}{\lambda} = p\pi \quad \text{avec } p \in \mathbb{Z}$$
Soit la **formule des réseaux** en incidence normale :
$$\boxed{a \sin\theta_p = p\lambda}$$

#### 3. Application numérique et chevauchement
Pour l'ordre $p = 1$ :
- Pour $\lambda_{\text{min}} = 400\,\text{nm} = 4{,}00 \times 10^{-7}\,\text{m}$ :
  $$\sin\theta_{1,\text{min}} = \frac{1 \times 4{,}00 \times 10^{-7}}{2{,}0 \times 10^{-6}} = 0{,}200 \implies \theta_{1,\text{min}} = \arcsin(0{,}200) \approx 11{,}5^\circ$$
- Pour $\lambda_{\text{max}} = 750\,\text{nm} = 7{,}50 \times 10^{-7}\,\text{m}$ :
  $$\sin\theta_{1,\text{max}} = \frac{1 \times 7{,}50 \times 10^{-7}}{2{,}0 \times 10^{-6}} = 0{,}375 \implies \theta_{1,\text{max}} = \arcsin(0{,}375) \approx 22{,}0^\circ$$

Le premier ordre étale le spectre visible entre $11{,}5^\circ$ et $22{,}0^\circ$. 
Analysons le début du second ordre ($p = 2$) pour $\lambda_{\text{min}}$ :
$$\sin\theta_{2,\text{min}} = \frac{2 \times 4{,}00 \times 10^{-7}}{2{,}0 \times 10^{-6}} = 0{,}400 \implies \theta_{2,\text{min}} \approx 23{,}6^\circ$$
Puisque $\theta_{2,\text{min}} (23{,}6^\circ) > \theta_{1,\text{max}} (22{,}0^\circ)$, il n'y a **pas de chevauchement** entre le premier et le second ordre dans cette configuration.

#### 4. Pouvoir de résolution chromatique
Selon le critère de Rayleigh, deux raies de longueurs d'onde $\lambda$ et $\lambda + \delta\lambda$ sont résolues si le maximum principal de la première coïncide avec le premier minimum d'intensité de la seconde.
Le premier minimum adjacent au maximum principal d'ordre $p$ correspond à une variation de la différence de phase telle que :
$$N \Delta u = \pm \pi \quad \text{avec } u = \frac{\pi a \sin\theta}{\lambda}$$
En différentiant la condition des maxima $a \sin\theta = p\lambda$ pour une direction $\theta$ fixe liée au pic :
$$a \cos\theta \, d\theta = p \, d\lambda$$
L'intervalle angulaire séparant le maximum principal du premier minimum est $\Delta\theta \approx \frac{\lambda}{N a \cos\theta}$.
En combinant avec la condition de résolution de Rayleigh, on démontre que le pouvoir de résolution est :
$$\boxed{\mathcal{R} = \frac{\lambda}{\delta\lambda} = p \cdot N}$$

#### 5. Analyse critique du modèle idéal
- **Diminution du nombre de fentes $N$ :** 
  - *Largeur des pics :* La largeur angulaire à mi-hauteur d'un pic d'interférence est inversement proportionnelle à $N$ ($\Delta\theta_{1/2} \propto \frac{1}{N}$). Si $N$ diminue, les pics s'élargissent, ce qui dégrade fortement le pouvoir de résolution $\mathcal{R} = pN$.
  - *Intensité maximale :* L'intensité au centre du pic principal varie en $N^2$ (en raison de l'interférence constructive en amplitude). Une réduction de $N$ entraîne donc une baisse drastique de la luminosité des pics observés.
- **Limites du modèle :** Le modèle suppose un réseau infini et parfait. En pratique, les bords du faisceau finissent par induire de la diffraction par la pupille d'entrée, et les défauts de périodicité créent un bruit de fond diffus qui réduit le contraste des raies.