---
title: 'Cours : Diffraction et réseaux optiques'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

## 📌 1. Définitions & Cadre d'étude

Le phénomène de diffraction correspond à l'écart par rapport aux lois de l'optique géométrique (propagation rectiligne de la lumière) lorsqu'une onde lumineuse rencontre un obstacle ou une ouverture dont les dimensions sont du même ordre de grandeur que sa longueur d'onde $\lambda$.

### Cadre de l'approximation scalaire de la diffraction
En classe de PC, on se place dans le cadre de l'approximation scalaire. Le champ lumineux est représenté par une grandeur scalaire complexe, l'amplitude complexe du champ électrique, notée $\underline{s}(M)$ ou $\underline{E}(M)$, telle que l'intensité lumineuse mesurée par un détecteur (temps de réponse $\tau \gg T_{\text{optique}}$) est proportionnelle au carré du module de cette amplitude :
$$I(M) = K \, |\underline{s}(M)|^2$$
où $K$ est une constante positive.

### Conditions d'observation (Approximation de Fraunhofer)
On s'intéresse principalement à la diffraction à l'infini (ou diffraction de Fraunhofer). Deux configurations expérimentales permettent d'atteindre ce régime :
1. **Régime lointain** : La source et l'écran d'observation sont très éloignés de l'ouverture diffractante ($D^2 / \lambda \ll L$, avec $D$ la taille de l'ouverture et $L$ la distance).
2. **Plan focal** : L'écran d'observation est placé dans le plan focal image d'une lentille convergente mince placée juste après l'ouverture.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Formule générale de l'amplitude diffractée (Fraunhofer)
Soit une ouverture perçant un plan $xOy$ (plan pupillaire). L'amplitude diffractée en un point $M$ du plan d'observation (assimilé au plan focal image de coordonnées $(X, Y)$ pour une lentille de focale $f'$) est donnée par la transformée de Fourier de la fonction de transmission de la pupille $\underline{t}(x,y)$ :

$$\underline{s}(X, Y) \propto \iint_{\text{pupille}} \underline{t}(x,y) \, \exp\left( -j \frac{2\pi}{\lambda f'} (xX + yY) \right) dx \, dy$$

### Fente de largeur $a$ (Diffraction à une dimension)
Considérons une fente infiniment longue selon l'axe $y$, et de largeur $a$ selon l'axe $x$, éclairée sous incidence normale par une onde plane monochromatique de longueur d'onde $\lambda$. La fonction de transmission est $\underline{t}(x) = 1$ pour $|x| \le \frac{a}{2}$ et $0$ ailleurs.

**Démonstration de l'amplitude et de l'intensité :**
L'intégrale se réduit à une intégrale simple :
$$\underline{s}(X) \propto \int_{-a/2}^{a/2} \exp\left( -j \frac{2\pi X x}{\lambda f'} \宁 \right) dx$$
En posant $u = \frac{X}{\lambda f'}$ :
$$\underline{s}(X) \propto \left[ \frac{\exp(-j 2\pi u x)}{-j 2\pi u} \right]_{-a/2}^{a/2} = \frac{\sin(\pi a u)}{\pi a u} \times (\text{constante})$$

En introduisant la variable angulaire $\theta \approx \frac{X}{f'}$ (pour les petits angles), l'intensité lumineuse s'écrit sous la forme classique :
$$I(\theta) = I_0 \, \text{sinc}^2 \left( \frac{\pi a \sin(\theta)}{\lambda} \right)$$
où $\text{sinc}(x) = \frac{\sin(x)}{x}$ et $I_0$ est l'intensité maximale au centre ($\theta = 0$).

### Le Réseau plan par transmission
Un réseau plan est constitué d'un ensemble de $N$ fentes (traits) parallèles, identiques, équidistantes de période $a$ (ou $b$, on utilisera $a$ ici pour le pas du réseau). 

**Démonstration de la formule des réseaux :**
Soit $a$ le pas du réseau. L'interférence de $N$ ondes issues de fentes consécutives séparées de $a$ induit une différence de marche géométrique entre deux rayons diffractés sous l'angle $\theta$ (pour une incidence normale) :
$$\delta = a \sin(\theta)$$
Le déphasage correspondant entre deux fentes consécutives est :
$$\Delta \varphi = \frac{2\pi}{\sigma} \delta = \frac{2\pi}{\lambda} a \sin(\theta)$$
où $\sigma$ représente la longueur d'onde (on utilise $\lambda$).

L'amplitude totale est la somme des amplitudes issues de chaque fente (en négligeant l'enveloppe de diffraction de chaque fente unitaire dans un premier temps) :
$$\underline{S}_{\text{total}} = \underline{s}_0 \sum_{n=0}^{N-1} \exp(j n \Delta \varphi)$$
Il s'agit d'une suite géométrique de raison $\underline{r} = \exp(j \Delta \varphi)$. Son module au carré donne l'intensité :
$$I(\theta) = I_{\text{max}} \, \frac{\sin^2 \left( N \frac{\Delta \varphi}{2} \right)}{\sin^2 \left( \frac{\Delta \varphi}{2} \right)}$$

Les pics d'interférence principaux (pics d'intensité maximale) sont obtenus lorsque le dénominateur s'annule, soit $\frac{\Delta \varphi}{2} = p \pi$ avec $p \in \mathbb{Z}$. On en déduit la **formule des réseaux** pour une incidence normale :
$$a \sin(\theta_p) = p \lambda \quad \text{avec} \quad p \in \mathbb{Z}$$
($p$ est appelé l'ordre de diffraction).

---

## 💡 3. Méthodes de calcul & Algorithmes

### Analyse spectrale : Pouvoir de résolution d'un réseau
Pour séparer deux radiations de longueurs d'onde $\lambda$ et $\lambda + d\lambda$ au voisinage d'un ordre $p$, on utilise le critère de Rayleigh : le maximum principal de la longueur d'onde $\lambda + d\lambda$ doit coïncider avec le premier minimum annulé de la longueur d'onde $\lambda$.

1. **Calcul de la largeur d'un pic principal** : Le premier minimum d'intensité après un ordre $p$ s'annule lorsque $N \frac{\Delta \varphi}{2} = \pi$, soit une variation angulaire $\delta \theta$ autour de $\theta_p$.
2. **Expression du pouvoir de résolution** :
$$\mathcal{R} = \frac{\lambda}{d\lambda} = p \cdot N$$
*Méthode :* Pour dimensionner un réseau capable de séparer le doublet du sodium (écart de $\Delta \lambda \approx 0,6 \text{ nm}$ à $\lambda \approx 589 \text{ nm}$), on calcule le nombre minimal de traits $N$ nécessaire à un ordre $p$ donné.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confusion entre diffraction et interférences** : 
   L'intensité lumineuse réelle due à un réseau de $f$ fentes de largeur $a$ et de pas $b$ est le produit de deux termes : l'interférence due au réseau (multi-ondes) et la diffraction due à une fente unique (enveloppe). Ne jamais oublier de multiplier le facteur d'interférence par le facteur $\text{sinc}^2$.
   $$I(\theta) = I_0 \, \text{sinc}^2 \left( \frac{\pi a \sin(\theta)}{\lambda} \right) \times \frac{\sin^2 \left( N \frac{\pi b \sin(\theta)}{\lambda} \right)}{\sin^2 \left( \frac{\pi b \sin(\theta)}{\lambda} \right)}$$

2. **Ordres spectraux manquants** : 
   Un ordre de diffraction $p$ du réseau peut être totalement "éteint" si la condition de diffraction de la fente unitaire impose un minimum d'intensité exactement au même endroit. Il faut vérifier que $\sin(\theta_p)$ ne correspond pas à un zéro de la fonction $\text{sinc}$.

3. **Incidence non normale** : 
   Si le faisceau arrive avec un angle d'incidence $i$ (mesuré par rapport à la normale au réseau), la différence de marche devient $\delta = a(\sin(\theta) - \sin(i))$. La formule générale des réseaux s'écrit alors :
   $$a (\sin(\theta_p) - \sin(i)) = p \lambda$$
   *Attention aux conventions de signes pour les angles $i$ et $\theta_p$ !*

4. **Oubli des unités dans les applications numériques** : 
   Toujours convertir les longueurs d'onde ($\text{nm}$ vers $\text{m}$) et les pas du réseau ($\mu\text{m}$ vers $\text{m}$) dans le système international avant tout calcul d'angle.