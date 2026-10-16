---
title: 'Exercice 1 : Diffraction de Fraunhofer'
description: 'Problème d entraînement type concours.'
---

# Problème guidé corrigé : Diffraction de Fraunhofer et analyse spectrale

---

## Introduction et Objectifs

Ce problème aborde un classique des concours de la filière PC : l'étude de la diffraction de Fraunhofer par une ou plusieurs ouvertures, et son application à la caractérisation spectrale d'une source lumineuse. 

Les objectifs de ce problème sont les suivants :
1. Établir l'expression de l'amplitude lumineuse diffusée dans le cadre de l'approximation de Fraunhofer.
2. Étudier le profil d'intensité lumineuse pour une fente rectangulaire unique, puis pour un réseau de fentes.
3. Analyser le pouvoir de résolution d'un instrument dispersif.

---

## Partie I : Diffraction par une fente rectangulaire unique

On considère une fente rectangulaire de grande longueur selon l'axe $(\text{Oy})$ et de largeur $a$ selon l'axe $(\text{Ox})$, percée dans un plan opaque $(\text{Oxy})$. Cette fente est éclairée sous incidence normale par une onde plane lumineuse monochromatique de longueur d'onde $\lambda$, de pulsation $\omega$ et d'amplitude complexe $E_0$.

Un système optique convergent (lentille mince de focale $f'$) placé après la fente permet d'observer la figure de diffraction dans son plan focal image, repéré par les coordonnées cartésiennes $(X, Y)$ ou par les coordonnées angulaires $(u, v)$ telles que :
$$u = \frac{X}{f'} \quad \text{et} \quad v = \frac{Y}{f'}$$

### Q1. Expression de l'amplitude complexe diffractée
Établir, en justifiant l'approximation de Fraunhofer, que l'amplitude complexe du champ électrique $E(X, Y)$ dans le plan focal de la lentille s'écrit sous la forme :
$$E(X, Y) = E_1 \int_{-a/2}^{a/2} \exp\left(j \frac{2\pi}{\lambda} x u\right) \text{d}x$$
où $E_1$ est une constante complexe indépendante de $x$.

> **Indication de correction :**
> L'approximation de Fraunhofer correspond au régime de diffraction à l'infini (ou dans le plan focal d'une lentille convergente). Elle s'applique lorsque la distance d'observation est très grande devant la taille de l'ouverture, ou lorsque les termes de phase correctifs d'ordre 2 (approximation de Fresnel) peuvent être négligés devant $\pi$. La différence de marche entre un rayon passant par le point $x$ de la fente et le centre $\text{O}$ de l'ouverture, observé sous la direction angulaire $u$, vaut $\delta = x \sin(u) \approx x u$ pour les petits angles. La phase correspondante est $\phi = \frac{2\pi}{\lambda} \delta = \frac{2\pi}{\lambda} x u$.

### Q2. Calcul de l'intensité lumineuse
En effectuant l'intégration, montrer que l'intensité lumineuse $I(X, Y)$ s'exprime sous la forme :
$$I(X, Y) = I_0 \text{ sinc}^2(\beta)$$
où l'on exprimera $\beta$ en fonction de $a$, $\lambda$ et $u$ (ou $X$), et où $\text{sinc}(x) = \frac{\sin(x)}{x}$. Préciser l'expression de $I_0$.

> **Indication de correction :**
> L'intégration de l'amplitude donne :
> $$E(X, Y) = E_1 \left[ \frac{\lambda}{j 2\pi u} \exp\left(j \frac{2\pi}{\lambda} x u\right) \right]_{-a/2}^{a/2} = E_1 \frac{\lambda}{\pi u} \sin\left(\frac{\pi a u}{\lambda}\right)$$
> En posant $\beta = \frac{\pi a u}{\lambda} = \frac{\pi a X}{\lambda f'}$, on obtient $E(X, Y) = E_{max} \text{sinc}(\beta)$.
> L'intensité lumineuse étant proportionnelle au carré du module de l'amplitude complexe ($I = n \varepsilon_0 c |E|^2$), il vient :
> $$I(X, Y) = I_0 \left(\frac{\sin\beta}{\beta}\right)^2 = I_0 \text{sinc}^2(\beta)$$
> avec $I_0$ l'intensité maximale au centre de la figure ($X = 0$).

---

## Partie II : Réseau plan par transmission

On remplace la fente unique par un réseau plan par transmission constitué de $N$ fentes identiques de largeur $a$, parallèles, le centre de deux fentes consécutives étant distant de $b$ (le pas du réseau). 

### Q3. Facteur de structure et facteur de forme
En utilisant le formalisme des interférences à $N$ondes, montrer que l'intensité lumineuse totale $I_{\text{tot}}(X)$ dans le plan d'observation s'écrit sous le produit de deux termes :
$$I_{\text{tot}}(X) = I_0 \cdot \text{sinc}^2(\beta) \cdot \frac{\sin^2(N \alpha)}{\sin^2(\alpha)}$$
Donner l'expression de $\alpha$ en fonction de $b$, $\lambda$ et $u$. Préciser le rôle physique de chacun des deux facteurs (terme de diffraction et terme d'interférence).

> **Indication de correction :**
> L'amplitude totale est la somme des amplitudes diffractées par chacune des $N$ fentes, en tenant compte du déphasage $\varphi = \frac{2\pi}{\lambda} b u$ entre deux fentes consécutives :
> $$E_{\text{tot}} = E_{\text{fente}} \sum_{n=0}^{N-1} \exp(j n \varphi)$$
> La somme géométrique se calcule classiquement :
> $$\sum_{n=0}^{N-1} \exp(j n \varphi) = \frac{1 - \exp(j N \varphi)}{1 - \exp(j \varphi)} = \exp\left(j (N-1)\frac{\varphi}{2}\right) \frac{\sin(N \varphi / 2)}{\sin(\varphi / 2)}$$
> En posant $\alpha = \frac{\varphi}{2} = \frac{\pi b u}{\lambda}$, et en combinant avec le résultat de la partie I ($E_{\text{fente}} \propto \text{sinc}(\beta)$), on obtient le produit des intensités :
> $$I_{\text{tot}}(X) = I_0 \underbrace{\text{sinc}^2(\beta)}_{\text{Facteur de forme (diffraction)}} \times \underbrace{\frac{\sin^2(N \alpha)}{\sin^2(\alpha)}}_{\text{Facteur de structure (interférences)}}_$$
> * **Le facteur de forme** module l'enveloppe globale de la figure d'intensité (lié à la géométrie d'une fente unique).
> * **Le facteur de structure** engendre des pics d'interférence fins (les ordres principaux du réseau) localisés aux positions où $\alpha = p \pi$ (avec $p \in \mathbb{Z}$).

### Q4. Localisation des pics principaux et condition de grating
Déterminer la condition sur l'angle $u$ (ou la position $X$) pour l'obtention des pics d'intensité maximale (ordres principaux). Exprimer la relation liant $b$, l'angle d'incidence (supposé nul), l'angle de diffraction $\theta$ (avec $\sin\theta \approx u$) et la longueur d'onde $\lambda$.

> **Indication de correction :**
> Les maxima principaux de la fonction $\frac{\sin^2(N \alpha)}{\sin^2(\alpha)}$ sont obtenus lorsque le dénominateur s'annule, c'est-à-dire $\alpha = p \pi$ avec $p \in \mathbb{Z}$ (levée de l'indétermination par un passage à la limite).
> Cela se traduit par :
> $$\frac{\pi b u}{\lambda} = p \pi \implies b \sin\theta = p \lambda \quad (\text{avec } \sin\theta \approx u)$$
> C'est la **formule des réseaux par transmission** sous incidence normale.

---

## Partie III : Application à la sélectivité spectrale

On éclaire maintenant ce réseau par une source polychromatique émetteur de deux radiations très proches : $\lambda_1$ et $\lambda_2 = \lambda_1 + \Delta\lambda$, avec $\lambda_1 = 589,0\text{ nm}$ (raie du sodium).

### Q5. Dispersion angulaire
Exprimer la variation angulaire $\text{d}\theta$ correspondant à une variation de longueur d'onde $\text{d}\lambda$ pour un ordre de diffraction $p$ fixé. En déduire la dispersion angulaire $\frac{\text{d}\theta}{\text{d}\lambda}$.

> **Indication de correction :**
> En différenciant la relation des réseaux $b \sin\theta = p \lambda$ à $p$ constant :
> $$b \cos\theta \, \text{d}\theta = p \, \text{d}\lambda \implies \frac{\text{d}\theta}{\text{d}\lambda} = \frac{p}{b \cos\theta}$$
> Plus le pas $b$ est petit (réseau "fin"), plus la dispersion angulaire est grande, ce qui sépare mieux les différentes longueurs d'onde.

### Q6. Critère de Rayleigh et Pouvoir de résolution
On rappelle le critère de Rayleigh : deux raies de longueurs d'onde $\lambda$ et $\lambda + \Delta\lambda$ sont considérées comme résolues si le maximum principal de l'une coïncide avec le premier minimum annulé de l'autre.
Montrer que le pouvoir de résolution théorique $R = \frac{\lambda}{\Delta\lambda}$ d'un réseau comportant $N$ traits éclairés est donné par :
$$R = p \cdot N$$

> **Indication de correction :**
> Le premier minimum d'intensité encadrant l'ordre principal $p$ correspond à une variation de phase globale telle que le numérateur du facteur d'interférence s'annule, soit $N \alpha = (N p \pi \pm \pi)$, ce qui décale $\alpha$ de $\frac{\pi}{N}$.
> La largeur angulaire d'un pic d'interférence entre deux minima consécutifs s'obtient par $N \Delta\alpha = \pi \implies N \frac{\pi b}{\lambda} \Delta\theta = \pi \implies \Delta\theta = \frac{\lambda}{N b \cos\theta}$.
> En égalant cette largeur avec l'écart angulaire entre deux longueurs d'onde $\delta\theta = \frac{p}{b \cos\theta} \Delta\lambda$ (selon le critère de Rayleigh $\delta\theta = \Delta\theta$) :
> $$\frac{p}{b \cos\theta} \Delta\lambda = \frac{\lambda}{N b \cos\theta} \implies p \Delta\lambda = \frac{\lambda}{N} \implies R = \frac{\lambda}{\Delta\lambda} = p \cdot N$$

---

## Analyse critique et Synthèse

1. **Limites de l'approximation de Fraunhofer :** L'utilisation de la transformée de Fourier spatiale (via les intégrales de type $\text{sinc}$) n'est valide qu'à l'infini ou dans le plan focal d'une lentille. En pratique, si la source n'est pas strictement infinie (faisceau gaussien de taille finie par exemple), des termes correctifs de diffraction de Fresnel apparaissent.
2. **Étanchéité des approximations :** L'hypothèse des petits angles ($\sin\theta \approx \theta \approx u$) simplifie grandement les expressions mathématiques, mais elle conduit à une erreur non négligeable pour les ordres de diffraction élevés ($p$ grand) où les angles $\theta$ s'éloignent de zéro.
3. **Optimisation du réseau :** Le pouvoir de résolution $R = pN$ montre qu'il est préférable d'utiliser des ordres élevés ($p \ge 1$) et un grand nombre de traits $N$ illuminés. Cependant, l'intensité lumineuse globale diminue en $I_0 \text{sinc}^2(\beta)$, ce qui limite l'exploitation des ordres supérieurs en pratique à cause du rapport signal sur bruit.