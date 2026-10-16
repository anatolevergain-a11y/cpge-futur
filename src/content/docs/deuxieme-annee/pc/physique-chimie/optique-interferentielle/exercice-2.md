---
title: 'Exercice 2 : Diffraction par des fentes d Young et réseaux'
description: 'Problème d entraînement type concours pour PC.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la conception d'un spectromètre optique compact destiné à l'analyse de composition chimique par émission atomique, on s'intéresse au système dispersif. L'instrument utilise un montage combinant des fentes d'Young et un réseau de diffraction pour analyser la lumière émise par une lampe spectrale à vapeur de mercure. 

L'étude se propose d'analyser la figure d'interférence et de diffraction obtenue sur un écran d'observation, puis d'évaluer les performances métrologiques du dispositif (résolution spectrale, pouvoir séparateur) en tenant compte des limites physiques et technologiques des composants réels.

**Données et notations :**
* Longueur d'onde de référence (raie verte du mercure) : $\lambda_0 = 546,1\text{ nm}$.
* Distance entre les fentes d'Young : $b = 200\ \mu\text{m}$.
* Largeur de chaque fente (effet de diffraction par une fente unique) : $a = 50\ \mu\text{m}$.
* Distance séparant le plan des fentes de l'écran d'observation : $D = 1,50\text{ m}$.
* Pas du réseau (utilisé dans la seconde partie) : $d = 2,0\ \mu\text{m}$.
* Le milieu de propagation est l'air ($n \approx 1$). Les angles de diffraction sont supposés petits.

---

### ❓ Questions progressives (incluant des questions d'analyse critique)

#### Partie I : Interférences à deux fentes modulées par la diffraction
1. Établir l'expression de l'intensité lumineuse $I(x)$ reçue sur l'écran d'observation situé à la distance $D$, en coordonnées cartésiennes $x$ (axe parallèle à la direction séparant les fentes). On posera $I_0$ l'intensité maximale au centre.
2. Identifier sur cette expression le terme responsable des interférences et celui responsable de la diffraction. En déduire la structure qualitative de la figure observée sur l'écran (notion de "système de franges sous une enveloppe").
3. Calculer l'interfrange $i$ des franges d'interférence et la largeur angulaire de la tache centrale de diffraction. Combien de franges d'interférence lumineuses peut-on observer au total sous la tache centrale de diffraction ?
4. **Analyse critique :** Le modèle utilisé suppose des fentes parfaitement rectangulaires, infiniment longues, éclairées par une onde plane monochromatique idéale. Discuter brièvement de l'impact d'une largeur de fente $a$ comparable à la longueur d'onde et de la cohérence spatiale de la source sur le contraste réel des franges mesurées.

#### Partie II : Passage au réseau de diffraction et pouvoir séparateur
On remplace le dispositif des fentes d'Young par un réseau plan par transmission comportant $N$ traits de pas $d$, éclairé sous incidence normale par la même source.
5. Établir la condition d'interférence constructive (formule des réseaux) pour un angle de diffraction $\theta_p$ d'ordre $p$ ($p \in \mathbb{Z}$).
6. Exprimer la largeur angulaire $\delta\theta$ d'un pic d'interférence en fonction de $N$, $d$, $\lambda$ et $\theta_p$. En déduire l'expression du pouvoir séparateur théorique $R = \frac{\lambda}{\Delta\lambda}$ du réseau.
7. Application numérique : pour un réseau de largeur totale $L = 2,5\text{ cm}$ et de pas $d = 2,0\ \mu\text{m}$, calculer le nombre total de traits $N$, puis le pouvoir séparateur minimal nécessaire pour résoudre le doublet du mercure $\lambda_1 = 577,0\text{ nm}$ et $\lambda_2 = 579,1\text{ nm}$ au premier ordre ($p = 1$).
8. **Analyse critique :** Le spectromètre ainsi conçu est destiné à un milieu industriel soumis à des variations thermiques $\Delta T \approx 10\text{ K}$. En considérant le coefficient de dilatation thermique linéaire du verre constituant le substrat du réseau ($\alpha \approx 9 \times 10^{-6}\text{ K}^{-1}$), évaluer l'impact sur la mesure de la longueur d'onde et proposer une stratégie de mitigation.

---

### 💡 Pistes & Indications

* **Q1-Q2 :** Reprendre l'intégrale de diffraction de Fraunhofer pour une ouverture double. L'amplitude complexe est le produit de convolution d'un motif (due à une fente de largeur $a$) par un réseau de Dirac (due aux centres des fentes distants de $b$).
* **Q3 :** Le nombre de franges visibles correspond au rapport entre la largeur de la tache de diffraction et l'interfrange $i$. Attention à bien définir les limites (zéros de l'intensité par diffraction).
* **Q5-Q6 :** Utiliser la formule de superposition des amplitudes pour $N$ sources équidistantes (somme géométrique) pour déterminer la fonction d'intensité et la largeur de ses maxima principaux.
* **Q8 :** Penser à différencier la formule des réseaux par rapport au paramètre géométrique $d$ qui dépend de la température.

---

### 📋 Corrigé détaillé et analyse des résultats

#### Partie I : Interférences à deux fentes modulées par la diffraction
1. L'intensité lumineuse pour une fente unique de largeur $a$ donne un facteur de diffraction (terme en $\text{sinc}^2$) et l'interférence de deux sources distantes de $b$ introduit un terme en $\cos^2$. L'expression s'écrit :
   $$I(x) = I_0 \text{sinc}^2\left(\frac{\pi a x}{\lambda_0 D}\right) \cos^2\left(\frac{\pi b x}{\lambda_0 D}\right)$$
   avec $\text{sinc}(u) = \frac{\sin(u)}{u}$.

2. Le terme en $\text{sinc}^2$ joue le rôle d'une **enveloppe** lente (liée à la diffraction par une fente), tandis que le terme en $\cos^2$ génère des **franges d'interférence** très rapprochées (liées à l'interférométrie à deux ondes). Sur l'écran, on observe des traits lumineux (franges) dont l'intensité maximale est modulée (diminue) au fur et à mesure qu'on s'éloigne du centre, s'annulant là où l'enveloppe s'annule.

3. * **Interfrange $i$ :** $i = \frac{\lambda_0 D}{b} = \frac{546,1 \times 10^{-9} \times 1,50}{200 \times 10^{-6}} \approx 4,10\times 10^{-3}\text{ m} = 4,10\text{ mm}$.
   * **Largeur de la tache centrale de diffraction :** Les premiers zéros de l'enveloppe sont atteints pour $\frac{\pi a x}{\lambda_0 D} = \pm \pi$, soit $x_{\text{min}} = \pm \frac{\lambda_0 D}{a}$. La largeur angulaire vaut $\theta_{\text{diff}} = \frac{2\lambda_0}{a} \approx 2,18\times 10^{-2}\text{ rad}$ et la largeur spatiale sur l'écran est $L_{\text{diff}} = \frac{2\lambda_0 D}{a} \approx 3,28\times 10^{-2}\text{ m} = 32,8\text{ mm}$.
   * **Nombre de franges visibles :** Le nombre de franges sous la tache centrale est le rapport de la largeur de la tache centrale sur l'interfrange :
     $$N_{\text{franges}} = \frac{2 L_{\text{diff}}/2}{i} = \frac{2 \lambda_0 D / a}{\lambda_0 D / b} = \frac{2b}{a} = \frac{2 \times 200}{50} = 8$$
     On observe donc environ $8$ franges brillantes sous le pic central de diffraction.

4. **Analyse critique :** 
   * *Limites du modèle scalaire :* Si $a$ devient du même ordre de grandeur que $\lambda_0$, la théorie scalaire de la diffraction montre ses limites ; il faudrait utiliser la théorie vectorielle (équations de Maxwell).
   * *Cohérence spatiale :* Si la source n'est pas ponctuelle (taille non nulle), chaque point de la source décale la figure d'interférence, ce qui conduit à une baisse progressive du contraste des franges (théorème de Van Cittert-Zernike).

---

#### Partie II : Passage au réseau de diffraction et pouvoir séparateur
5. La condition d'interférence constructive pour un réseau de pas $d$ sous incidence normale est :
   $$d \sin\theta_p = p \lambda_0 \quad (p \in \mathbb{Z})$$

6. Pour un réseau à $N$ traits, la largeur angulaire d'un pic d'interférence (entre deux zéros adjacents de la fonction d'intensité) est $\delta\theta \approx \frac{\lambda}{N d \cos\theta_p}$.
   En utilisant le critère de Rayleigh, deux raies de longueurs d'onde $\lambda$ et $\lambda + \Delta\lambda$ sont séparées si le maximum de l'une coïncide avec le premier minimum de l'autre. Le pouvoir séparateur s'écrit :
   $$R = \frac{\lambda}{\Delta\lambda} = p \cdot N$$

7. * **Nombre de traits $N$ :** $N = \frac{L}{d} = \frac{2,5\times 10^{-2}}{2,0\times 10^{-6}} = 12500\text{ traits}$.
   * **Application pour le doublet du mercure ($p=1$) :** $\lambda_{\text{moy}} = \frac{577,0 + 579,1}{2} = 578,05\text{ nm}$ et $\Delta\lambda = 2,1\text{ nm}$.
     Le pouvoir séparateur requis est :
     $$R_{\text{requis}} = \frac{578,05}{2,1} \approx 275$$
     Le pouvoir séparateur offert par le réseau au premier ordre est $R_{\text{offert}} = p \cdot N = 1 \times 12500 = 12500$.
     Puisque $R_{\text{offert}} \gg R_{\text{requis}}$, le réseau sépare largement les deux raies du doublet.

8. **Analyse critique (Effets thermiques et métrologie) :**
   * Une variation de température $\Delta T$ modifie le pas du réseau par dilatation thermique : $d(T) = d_0 (1 + \alpha \Delta T)$.
   * D'après la formule du réseau, pour un angle $\theta_p$ fixe (fixé par la position du détecteur), la longueur d'onde mesurée $\lambda$ varie :
     $$\frac{\Delta\lambda}{\lambda} = \frac{\Delta d}{d} = \alpha \Delta T$$
   * Pour $\Delta T = 10\text{ K}$ et $\alpha = 9 \times 10^{-6}\text{ K}^{-1}$, on a $\frac{\Delta\lambda}{\lambda} = 9 \times 10^{-5}$, soit une erreur sur la longueur d'onde de $\Delta\lambda \approx 578\text{ nm} \times 9 \times 10^{-5} \approx 0,05\text{ nm}$. Cette dérive thermique est du même ordre de grandeur que la précision recherchée en métrologie fine.
   * **Mitigation :** Il est indispensable d'utiliser un substrat à très faible coefficient de dilatation (type Invar ou Zerodure, où $\alpha \approx 10^{-7}\text{ K}^{-1}$) ou de thermostater précisément le bloc optique du spectromètre.