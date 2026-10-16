---
title: 'Cours : Thermodynamique chimique et Ondes'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Thermodynamique chimique et Ondes (CPGE BCPST 2ème année)

> **Statut du document** : Synthèse conforme au programme officiel de classes préparatoires BCPST. Rigueur mathématique et exigence physico-chimique requises pour les concours.

---

## PARTIE I : THERMODYNAMIQUE CHIMIQUE

### 1. Rappels et potentiels thermodynamiques
Pour un système fermé à l'équilibre thermique et mécanique avec son milieu extérieur, à $T$ et $P$ constantes :
* L'enthalpie libre $G = H - TS$ est la fonction potentielle dont la variation renseigne sur le sens d'évolution spontanée.
* Critère d'évolution spontanée à $T$ et $P$ constantes : $\Delta G_{\text{syst}} \le 0$ (avec $\Delta G = 0$ à l'équilibre).

### 2. Affinité chimique et loi d'action de masse
Considérons une réaction chimique symbolisée par son équation Bilan :
$$\sum_{\text{i}} \nu_i \text{A}_i = 0$$
où $\nu_i$ sont les coefficients stœchiométriques algébriques (négatifs pour les réactifs, positifs pour les produits).

* **Variation molaire de l'enthalpie libre** (ou enthalpie libre de réaction) :
$$\Delta_r G = \left( \frac{\partial G}{\partial \xi} \quotient{T,P} \right) = \sum_i \nu_i \mu_i$$
où $\xi$ est l'avancement de la réaction et $\mu_i$ le potentiel chimique de l'espèce $i$.

* **Expression en fonction du quotient de réaction $Q_r$** :
En introduisant l'activité $a_i$ de chaque espèce (avec $\mu_i = \mu_i^\circ + RT \ln a_i$), on obtient :
$$\Delta_r G = \Delta_r G^\circ + RT \ln Q_r$$
avec $Q_r = \prod_i a_i^{\nu_i}$ et $\Delta_r G^\circ = \sum_i \nu_i \mu_i^\circ$.

* **Constante d'équilibre $K^\circ(T)$** :
À l'équilibre, $\Delta_r G = 0$, ce qui conduit à la relation fondamentale de Van 't Hoff :
$$\Delta_r G^\circ = -RT \ln K^\circ(T)$$
où $K^\circ(T) = \left( \prod_i a_i^{\nu_i} \right)_{\text{équilibre}}$.

### 3. Influence de la température : Loi de Van 't Hoff isobare
La dérivation de $\ln K^\circ(T)$ par rapport à la température $T$ fait intervenir l'enthalpie standard de réaction $\Delta_r H^\circ$ :
$$\frac{\text{d}}{\text{d}T} \left( \ln K^\circ(T) \right) = \frac{\Delta_r H^\circ}{R T^2}$$

* **Conséquences qualitatives (Le Chatelier)** :
  * Si la réaction est **exothermique** ($\Delta_r H^\circ < 0$), une augmentation de température $T$ provoque une **diminution** de $K^\circ(T)$ (le système déplace l'équilibre dans le sens endothermique pour s'opposer à la perturbation).
  * Si la réaction est **endothermique** ($\Delta_r H^\circ > 0$), une augmentation de température $T$ provoque une **augmentation** de $K^\circ(T)$.

---

## PARTIE II : PROPAGATION DES ONDES

### 1. Équation d'onde unidimensionnelle (corde vibrante ou acoustique)
Une grandeur physique scalaire $s(x, t)$ (déplacement transverse, surpression acoustique, etc.) se propageant sans atténuation selon l'axe $(Ox)$ à la célérité $c$ vérifie l'**équation de d'Alembert** à une dimension :
$$\frac{\partial^2 s}{\partial x^2} - \frac{1}{c^2} \frac{\partial^2 s}{\partial t^2} = 0$$

* **Forme générale de d'Alembert** :
La solution générale s'exprime comme la somme d'une onde progressive se propageant dans le sens des $x$ croissantes et d'une onde dans le sens des $x$ décroissantes :
$$s(x, t) = f(x - ct) + g(x + ct)$$

### 2. Ondes harmoniques (ou progressives sinusoïdales)
En biologie et en physique, on s'intéresse particulièrement aux ondes monochromatiques de pulsation $\omega = 2\pi f$ et de nombre d'onde $k = \frac{\omega}{c} = \frac{2\pi}{\lambda}$ (où $\lambda$ est la longueur d'onde).

* **Représentation complexe** (convention ingénieur en $\text{e}^{j\omega t}$) :
$$\underline{s}(x, t) = \underline{S}_0 \exp\left(j(\omega t \mp k x)\right)$$
où le signe $-$ correspond à une propagation selon $+Ox$ et $+$ selon $-Ox$.

### 3. Phénomènes ondulatoires fondamentaux

#### A. Interférences
Superficie ou champ créé par deux sources cohérentes (même pulsation $\omega$, différence de phase constante).
* **Interférence constructive** (amplitude maximale) si la différence de marche $\delta = S_2 M - S_1 M = k' \lambda$ avec $k' \in \mathbb{Z}$.
* **Interférence destructive** (amplitude minimale) si $\delta = \left(k' + \frac{1}{2}\right)\lambda$.

#### B. Diffraction
Phénomène par lequel une onde s'incurve et s'étale lorsqu'elle rencontre une ouverture ou un obstacle dont la dimension caractéristique $a$ est du même ordre de grandeur que la longueur d'onde $\lambda$ ($\theta \approx \frac{\lambda}{a}$).

#### C. Effet Doppler (Acoustique / ondes dans les milieux fluides)
Modification de la fréquence perçue par un récepteur $R$ en mouvement par rapport à une source $S$ fixe, ou inversement.
Soit $f_s$ la fréquence émise par la source. La fréquence perçue $f_r$ s'exprime (dans le cas non relativiste) par :
$$f_r = f_s \frac{v_{\text{onde}} \pm v_r}{v_{\text{onde}} \mp v_s}$$
*(Règle mnémotechnique : on additionne au numérateur si le récepteur se rapproche, au dénominateur si la source s'éloigne).*

---

## PARTIE III : COUPLAGE THERMODYNAMIQUE - ONDES (Acoustique des fluides)

Dans une onde acoustique se propageant dans un gaz, les compressions et dilatations locales sont si rapides qu'aucun transfert thermique n'a le temps de s'opérer avec l'extérieur : les transformations locales sont **adiabatiques et réversibles** (donc isentropiques).

* **Relation de Laplace locale** pour les gaz parfaits :
$$P V^\gamma = \text{cste} \quad \text{avec} \quad \gamma = \frac{C_p}{C_v}$$

* **Célérité des ondes sonores** dans un fluide de masse volumique $\rho_0$ et de coefficient d'compressibilité adiabatique $\chi_s = -\frac{1}{V}\left(\frac{\partial V}{\partial P}\right)_S = \frac{1}{\gamma P_0}$ :
$$c = \sqrt{\left( \frac{\partial P}{\partial \rho} \right)_S} = \frac{1}{\sqrt{\rho_0 \chi_s}} = \sqrt{\frac{\gamma R T}{M_{\text{molar}}}}$$
*Cette formule illustre le pont fondamental en BCPST entre la thermodynamique moléculaire (température $T$, masse molaire $M_{\text{molar}}$) et la propagation ondulatoire (célérité $c$).*