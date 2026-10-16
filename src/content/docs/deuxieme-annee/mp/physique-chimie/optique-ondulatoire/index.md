---
title: 'Cours : Interférences et diffraction'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Interférences et diffraction
Classe: ** MP (Deuxième année)  
**Matière :** Physique-Chimie  

---

## I. Introduction et Outils Préliminaires

### 1. Modélisation de la lumière
On adopte le modèle de l'optique ondulatoire. Une onde lumineuse monochromatique de pulsation $\omega$ et de vecteur d'onde $\vec{k}$ (dans le vide, de norme $k = \frac{\omega}{c} = \frac{2\pi}{\lambda}$) est représentée par une grandeur complexe, le champ électrique $\underline{\vec{E}}(\vec{r}, t)$ :
$$\underline{\vec{E}}(\vec{r}, t) = \underline{\vec{E}}_0(\vec{r}) e^{j(\omega t - \vec{k}\cdot\vec{r})}$$

### 2. Intensité lumineuse (Éclairement)
L'humain et les récepteurs (caméras, photodiodes) sont insensibles au champ électrique $\vec{E}$ en raison de la fréquence optique extrêmement élevée ($\nu \sim 10^{14}\text{ Hz}$). Ils mesurent la valeur temporelle moyenne du vecteur de Poynting, appelée **intensité lumineuse** $I$ (ou éclairement) :
$$I = \langle \|\frac{1}{\mu_0} \vec{E} \wedge \vec{B}\| \rangle_T \propto \langle \|\underline{\vec{E}}\|^2 \rangle_T$$
Par convention, en posant une constante multiplicative égale à 1 (ou en choisissant une amplitude normée), on retiendra :
$$I = n \varepsilon_0 c \langle \|\underline{\vec{E}}\|^2 \rangle_T$$

---

## II. Interférences Lumineuses

### 1. Définitions et Conditions d'interférence
Soit un point $M$ éclairé par deux sources secondaires $S_1$ et $S_2$ issues d'une même source primaire. Les champs reçus en $M$ sont $\underline{\vec{E}}_1$ et $\underline{\vec{E}}_2$. Le champ total est $\underline{\vec{E}} = \underline{\vec{E}}_1 + \underline{\vec{E}}_2$.

L'intensité totale en $M$ s'écrit :
$$I = \langle \|\underline{\vec{E}}_1 + \underline{\vec{E}}_2\|^2 \rangle_T = I_1 + I_2 + 2 \langle \text{Re}(\underline{\vec{E}}_1 \cdot \underline{\vec{E}}_2^*) \rangle_T$$
Où $I_1 = \langle \|\underline{\vec{E}}_1\|^2 \rangle$ et $I_2 = \langle \|\underline{\vec{E}}_2\|^2 \rangle$ sont les intensités propres.

Le terme croisé $I_{12} = 2 \langle \text{Re}(\underline{\vec{E}}_1 \cdot \underline{\vec{E}}_2^*) \rangle_T$ est le **terme d'interférence**.

> **Définition (Cohérence) :** Pour observer des interférences stables dans le temps, le terme d'interférence doit être non nul en moyenne. Les sources doivent être **synsynchrones** (même fréquence) et **cohérentes** (différence de phase temporelle constante).

### 2. Formule de Fresnel
Si les ondes sont polarisées rectilignement selon la même direction $\vec{u}$, on pose :
$\underline{E}_1 = E_1_0 e^{j(\omega t - \phi_1)}$ et $\underline{E}_2 = E_2_0 e^{j(\omega t - \phi_2)}$.
L'intensité s'exprime par la **formule de Fresnel** :
$$I = I_1 + I_2 + 2\sqrt{I_1 I_2} \cos(\Delta \varphi)$$
Où $\Delta \varphi = \phi_2 - \phi_1$ est la **différence de phase** (ou déphasage) entre les deux ondes au point $M$.

* **Interférences constructives** (intensité maximale) : $\Delta \varphi = 2k\pi$ ($k \in \mathbb{Z}$) $\implies I_{\max} = (\sqrt{I_1} + \sqrt{I_2})^2$.
* **Interférences destructives** (intensité minimale) : $\Delta \varphi = (2k+1)\pi$ ($k \in \mathbb{Z}$) $\implies I_{\min} = (\sqrt{I_1} - \sqrt{I_2})^2$.
* **Contraste (ou visibilité)** : 
$$\mathcal{V} = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}} = \frac{2\sqrt{I_1 I_2}}{I_1 + I_2}$$

### 3. Lien avec la différence de marche ($\delta$)
La différence de phase $\Delta \varphi$ est liée au chemin optique parcouru. Le chemin optique $S$ est défini par $S = \int_{(Path)} n(M) dl$.
La différence de marche au point $M$ entre les chemins $S_2M$ et $S_1M$ est :
$$\delta = [S_2M] - [S_1M]$$
On relie $\Delta \varphi$ et $\delta$ par la relation fondamentale :
$$\Delta \varphi = \frac{2\pi}{\lambda_0} \delta = k_0 \delta$$
Où $\lambda_0$ est la longueur d'onde dans le vide.

---

## III. Dispositifs Interférentiels

### 1. Fentes d'Young
* **Dispositif :** Deux fentes $S_1$ et $S_2$ distantes de $a$, éclairées par une source monochromatique à la distance $D$ de l'écran ($a \ll D$).
* **Calcul de $\delta$ (approximation paraxiale) :**
  Dans le plan de l'écran de coordonnées $(x, y)$, l'axe Ox étant dirigé suivant $S_1S_2$ :
  $$\delta \approx \frac{ax}{D}$$
* **Interfrange $i$ :**
  L'interfrange est la distance séparant deux franges brillantes consécutives ($\Delta \delta = \lambda_0$) :
  $$i = \frac{\lambda_0 D}{a}$$
* **Caractéristique :** Les franges d'interférence sont des droites rectilignes parallèles équidistantes.

### 2. Coins d'air et anneaux de Newton (Divisions d'amplitude)
* **Diviseurs d'amplitude :** Lame à faces parallèles, coin d'air (deux plans formant un angle faible $\alpha$), anneaux de Newton (lenteur sphérique sur plan).
* **Localisation :** Les interférences par division d'amplitude sont **non isobares** mais localisées (par exemple, à l'infini pour une lame à faces parallèles avec une lentille, ou sur le coin d'air lui-même).
* **Ordre d'interférence $p$ :** $\delta = p \lambda_0$.
* Pour un coin d'air d'épaisseur $e(x) = \alpha x$, $\delta = 2n e(x) + \delta_0$ (où $\delta_0$ tient compte du déphasage par réflexion sur un milieu plus réfringent, souvent égal à $\lambda_0/2$).

---

## IV. Diffraction de la Lumière

### 1. Phénomène de diffraction
La diffraction se produit lorsqu'une onde rencontre une ouverture ou un obstacle dont les dimensions caractéristiques sont du même ordre de grandeur que la longueur d'onde $\lambda$. Elle traduit l'incapacité de la lumière à se propager strictement en ligne droite (limite de l'optique géométrique).

### 2. Formalisme de Fraunhofer (Diffraction à l'infini)
Dans l'approximation de Fraunhofer (sources et écran rejetés à l'infini, ou utilisation de lentilles convergentes), l'amplitude complexe de l'onde diffractée dans une direction repérée par les angles $(\theta_x, \theta_y)$ ou par le vecteur d'onde $\vec{k}$ est proportionnelle à la **transformée de Fourier spatiale** de la fonction de transmission de l'ouverture $\underline{t}(x,y)$ :
$$\underline{E}(M) \propto \iint_{\text{Ouverture}} \underline{t}(x,y) e^{-j (\frac{2\pi}{\lambda})(ux + vy)} dx dy$$

### 3. Exemples classiques (à connaître par cœur)

* **Fente infiniment longue de largeur $a$ (selon $x$) :**
  L'intensité lumineuse sur l'écran (coordonnée $x'$ à la distance $F'$ focalisante de la lentille) s'exprime à l'aide de la fonction $\text{sinc}$ ($\text{sinc}(u) = \frac{\sin u}{u}$) :
  $$I(x') = I_0 \left( \text{sinc}\left( \frac{\pi a x'}{\lambda f'} \right) \right)^2$$
  * *Largeur de la tache centrale :* $L = \frac{2\lambda f'}{a}$.

* **Ouverture circulaire de diamètre $d$ (ou rayon $R = d/2$) :**
  L'intensité diffractée dans le plan focal (coordonnée radiale $r'$) fait intervenir la fonction de Bessel de première espèce et d'ordre 1, $J_1$ :
  $$I(r') = I_0 \left( \frac{2 J_1(\pi d r' / \lambda f')}{\pi d r' / \lambda f'} \right)^2$$
  * **Critère de Rayleigh de résolution :** Deux sources ponctuelles sont résolues si le maximum de la tache de diffraction de l'une coïncide avec le premier annulaire sombre de l'autre. L'écart angulaire limite de résolution est :
  $$\theta_{\min} \approx 1{,}22 \frac{\lambda}{d}$$

---

## V. Méthodes et Savoir-Faire

* **Méthode 1 : Calculer une différence de marche $\delta$.**
  1. Tracer les rayons lumineux issus des sources jusqu'au point $M$.
  2. Exprimer les longueurs géométriques exactes à l'aide de Pythagore.
  3. Effectuer un développement limité (approximation paraxiale $x, y \ll D$) pour obtenir $\delta$ au premier ordre non nul.

* **Méthode 2 : Traiter un système interférentiel couplé à la diffraction (Ex : Fentes d'Young finies).**
  L'intensité globale est le produit de l'intensité d'interférences pure par le facteur de diffraction dû à la largeur finie d'une fente :
  $$I(x) = I_{\text{diffraction}}(x) \times [1 + \cos(\Delta \varphi)]$$
  *Conséquence :* Les franges d'interférence sont "modulées" par l'enveloppe de diffraction. Des franges peuvent disparaître (zémoins d'intensité) si un maximum d'interférence coïncide avec un minimum de diffraction.

---

## VI. Pièges et Erreurs Classiques à Éviter

1. **Confondre $\Delta \varphi$ et $\delta$ :** 
   $\Delta \varphi$ est sans dimension (en radians), $\delta$ est une longueur (en mètres). La formule de passage est $\Delta \varphi = \frac{2\pi}{\lambda_0}\delta$. Ne jamais écrire $\Delta \varphi = \delta$.
2. **Oublier les conditions de cohérence temporelle / spatiale :**
   Des sources indépendantes (deux lasers distincts, deux lampes à incandescence) n'interfèrent pas car leurs phases initiales fluctuent de manière aléatoire et non corrélée ($\langle \cos(\Delta \varphi) \rangle = 0$).
3. **Erreur de signe dans le déphasage à l'origine (ou par réflexion) :**
   Une onde réfléchie sur un milieu plus réfringent ($n_2 > n_1$) subit un **saut de phase de $\pi$**, ce qui équivaut à ajouter $\frac{\lambda_0}{2}$ à la différence de marche (ou $\pi$ à la phase).
4. **Mauvaise manipulation de l'approximation paraxiale :**
   Dans les développements limités de $\sqrt{D^2 + (x-a)^2}$, utiliser systématiquement $\sqrt{1+u} \approx 1 + \frac{1}{2}u - \frac{1}{8}u^2$ si le terme d'ordre 1 s'annule par symétrie.