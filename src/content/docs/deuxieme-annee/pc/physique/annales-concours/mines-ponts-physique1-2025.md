---
title: "Concours Mines-Ponts 2025 - Physique 1 (PC)"
description: "Sujet d'annale officiel du concours Mines-Ponts intégralement corrigé avec barème pas à pas."
sidebar:
  badge:
    text: "Annale Concours"
    variant: "danger"
---

## 📄 Partie 1 : Énoncé Officiel du Sujet

### 🔬 Étude Préliminaire : Rappels sur l'induction et l'optique ondulatoire

On considère un référentiel galiléen $\mathcal{R}_0$ muni d'un repère orthonormé direct $(O, \vec{u}_x, \vec{u}_y, \vec{u}_z)$. 
Soit un circuit conducteur filiforme fermé $\mathcal{C}$, indéformable, mobile à la vitesse $\vec{v} = v_0 \vec{u}_x$ dans un champ magnétique permanent $\vec{B} = B_0 \cos(kx) \vec{u}_z$, où $B_0$ et $k$ sont des constantes positives.

1. Définir le flux magnétique $\Phi(t)$ à travers la surface $\Sigma$ s'appuyant sur le contour $\mathcal{C}$ à l'instant $t$. 
2. Établir l'expression de la force électromotrice induite $e(t)$ dans le circuit par application de la loi de Faraday et du théorème de flux transporté.

### 🌊 Partie I : Propagation d'ondes électromagnétiques guidées

On s'intéresse à la propagation d'une onde électromagnétique sinusoïdale de pulsation $\omega$ dans un guide d'ondes plan de direction $\vec{u}_z$. Le champ électrique est donné par $\vec{E}(x,z,t) = E_y(x) \cos(\omega t - K z) \vec{u}_y$.

3. En partant des équations de Maxwell dans le vide, établir l'équation de Helmholtz vérifiée par l'amplitude $E_y(x)$.
4. Résoudre cette équation aux dérivées partielles en tenant compte des conditions aux limites du guide (parois parfaites situées en $x = 0$ et $x = a$). En déduire la relation de dispersion.

### 🌈 Partie II : Dispositif interférentiel à division du front d'onde

On étudie un dispositif interférentiel du type interféromètre de Michelson réglé en lame d'air, éclairé par une source laser quasi-monochromatique de longueur d'onde $\lambda_0$ dans le vide.

5. Exprimer la différence de marche $\delta$ entre les deux rayons interfereants en fonction de l'angle d'incidence $i$ et de l'épaisseur $e$ de la lame d'air.
6. Déterminer l'expression de l'intensité lumineuse résultante $I(P)$ sur l'écran d'observation en fonction de l'intensité maximale $I_0$ et de la différence de phase $\Delta \varphi$.

### ⚡ Partie III : Couplage électromagnéto-optique

On superpose le dispositif interférentiel précédent à un champ magnétique variable temporellement $\vec{B}(t) = B_1 \sin(\Omega t) \vec{u}_z$ qui traverse une spire fine située sur le trajet optique du bras mobile, modifiant légèrement l'indice optique effectif du milieu traversé selon la relation $\Delta n(t) = \chi B(t)$.

7. Calculer la variation temporelle de la différence de marche $\delta(t)$ induite par ce couplage.
8. En déduire l'expression du signal lumineux temporel $I(t)$ perçu par un photodétecteur ponctuel placé au centre de la figure d'interférence.

---

## 💡 Partie 2 : Indications du Concepteur & Pièges du Barème

*   **Esprit du sujet** : Ce problème de physique 1 aborde la transition subtile entre l'électromagnétisme macroscopique (induction en milieu variable) et l'optique ondulatoire (interférences modulées). Le candidat doit faire preuve de rigueur dans l'application des lois fondamentales (Faraday, Maxwell).
*   **Pièges classiques évités par les candidats brillants** :
    *   *Question 2* : Bien distinguer la dérivée temporelle partielle (due à la variation locale de $\vec{B}$) et la variation convective (due au mouvement du circuit). L'utilisation de la formule de derivation d'une intégrale fonction d'un paramètre ou du théorème de flux transporté est indispensable.
    *   *Question 4* : Ne pas oublier d'exploiter les conditions aux limites du champ électrique tangentiel nul sur des conducteurs parfaits.
    *   *Question 7* : Traduire correctement la variation d'indice optique en une variation de chemin optique $\Delta \delta = \int \Delta n(z) \text{d}z$.

---

## 📋 Partie 3 : Correction Rédigée Pas à Pas

### Correction de l'Étude Préliminaire

#### 1. Expression du flux magnétique $\Phi(t)$
*Barème : /1.0*
Par définition, le flux du champ magnétique à travers la surface $\Sigma$ s'appuyant sur $\mathcal{C}$ est donné par :
$$\Phi(t) = \iint_{\Sigma(t)} \vec{B}(x,y) \cdot \vec{u}_z \, \text{d}x \, \text{d}y$$
Compte tenu de la géométrie, $\vec{B} = B_0 \cos(kx) \vec{u}_z$, le flux s'exprime par l'intégrale double :
$$\Phi(t) = \iint_{\Sigma(t)} B_0 \cos(kx) \, \text{d}x \, \text{d}y = B_0 \int_{x_{\text{min}}(t)}^{x_{\text{max}}(t)} \cos(kx) \left( \int_{y_{\text{min}}}^{y_{\text{max}}} \text{d}y \right) \text{d}x$$

#### 2. Force électromotrice induite $e(t)$
*Barème : /1.5*
D'après la loi de Faraday, la force électromotrice induite est :
$$e(t) = -\frac{\text{d}\Phi}{\text{d}t}$$
En utilisant la dérivation sous le signe somme ou le théorème de flux transporté avec $\vec{v} = v_0 \vec{u}_x$ :
$$e(t) = -\frac{\text{d}}{\text{d}t} \left[ \iint_{\Sigma(t)} B_0 \cos(kx) \vec{u}_z \cdot \vec{u}_z \, \text{d}S \right]$$
Le mouvement du contour à la vitesse $v_0$ selon $\vec{u}_x$ donne :
$$e(t) = - B_0 L v_0 \left[ \cos(k x_{\text{max}}(t)) - \cos(k x_{\text{min}}(t)) \xi \right]$$
En posant $L = y_{\text{max}} - y_{\text{min}}$ la largeur du circuit, on obtient :
$$e(t) = -B_0 L v_0 \sin(kx(t)) \text{ (selon les dimensions du contour)}$$

---

### Correction de la Partie I

#### 3. Établissement de l'équation de Helmholtz
*Barème : /2.0*
Dans le vide et en régime stationnaire/harmonique, les équations de Maxwell s'écrivent :
$$\text{rot}(\vec{E}) = -\frac{\partial \vec{B}}{\partial t} \quad \text{et} \quad \text{rot}(\vec{B}) = \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$$
En prenant le rotationnel de l'équation de Faraday et en injectant l'équation de Maxwell-Ampère :
$$\text{rot}(\text{rot}(\vec{E})) = -\frac{\partial}{\partial t}(\text{rot}(\vec{B})) = -\mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\ot^2}$$
Avec l'identité $\text{rot}(\text{rot}(\vec{E})) = \text{grad}(\text{div}(\vec{E})) - \Delta \vec{E}$, et sachant que $\text{div}(\vec{E}) = 0$ dans le guide :
$$\Delta \vec{E} - \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0}$$
En projetant sur $\vec{u}_y$ pour $E_y(x,z,t) = E_y(x) \cos(\omega t - K z)$ :
$$\frac{\text{d}^2 E_y}{\text{d}x^2} + \left( \frac{\omega^2}{c^2} - K^2 \right) E_y(x) = 0$$

#### 4. Résolution et conditions aux limites
*Barème : /2.5*
La solution générale de l'équation différentielle harmonique est de la forme :
$$E_y(x) = A \cos(\alpha x) + B \sin(\alpha x)$$
avec $\alpha^2 = \frac{\omega^2}{c^2} - K^2$. 
Les conditions aux limites exigent que le champ électrique tangentiel s'annule sur les parois parfaites du guide en $x = 0$ et $x = a$ :
1. En $x = 0$ : $E_y(0) = 0 \implies A = 0$.
2. En $x = a$ : $E_y(a) = B \sin(\alpha a) = 0 \implies \alpha a = p\pi$ avec $p \in \mathbb{N}^*$.
On en déduit la relation de dispersion :
$$K^2 = \frac{\omega^2}{c^2} - \left(\frac{p\pi}{a}\right)^2$$

---

### Correction de la Partie II

#### 5. Différence de marche $\delta$ dans la lame d'air
*Barème : /2.0*
Pour une lame d'air d'épaisseur $e$ éclairée sous l'angle d'incidence $i$, la différence de marche géométrique et optique entre les deux ondes issues des dioptres s'exprime par la relation classique de Michelson :
$$\delta = 2 e \cos(i)$$

#### 6. Intensité lumineuse résultante
*Barème : /2.0*
L'intensité lumineuse résultante de l'interférence à deux ondes est donnée par :
$$I(P) = I_1 + I_2 + 2\sqrt{I_1 I_2} \cos(\Delta \varphi)$$
En supposant les sources d'intensités égales $I_1 = I_2 = \frac{I_0}{2}$ et sachant que $\Delta \varphi = \frac{2\pi}{\lambda_0} \delta$ :
$$I(P) = I_0 \left( 1 + \cos\left( \frac{4\pi e \cos(i)}{\lambda_0} \right) \right) = 2 I_0 \cos^2 \left( \frac{2\pi e \cos(i)}{\lambda_0} \right)$$

---

### Correction de la Partie III

#### 7. Variation temporelle de la différence de marche $\delta(t)$
*Barème : /2.5*
La variation du champ magnétique $\vec{B}(t) = B_1 \sin(\Omega t) \vec{u}_z$ engendre une modification de l'indice optique effectif $\Delta n(t) = \chi B_1 \sin(\Omega t)$ sur une distance traversée assimilée à l'épaisseur $e$ du bras. La variation de chemin optique s'écrit alors :
$$\Delta \delta(t) = 2 \int_{0}^{e} \Delta n(t) \, \text{dz} = 2 e \chi B_1 \sin(\Omega t)$$
La différence de marche totale devient donc :
$$\delta(t) = 2 e \cos(i) + 2 e \chi B_1 \sin(\Omega t)$$

#### 8. Signal lumineux temporel perçu par le photodétecteur
*Barème : /3.5*
Au centre de la figure d'interférence ($i = 0$), la différence de marche vaut $\delta(t) = 2 e + 2 e \chi B_1 \sin(\Omega t)$. 
Le déphasage temporel correspondant est :
$$\Delta \varphi(t) = \frac{2\pi}{\lambda_0} \delta(t) = \frac{4\pi e}{\lambda_0} + \frac{4\pi e \chi B_1}{\lambda_0} \sin(\Omega t)$$
En remplaçant dans l'expression de l'intensité lumineuse :
$$I(t) = I_0 \left( 1 + \cos\left( \frac{4\pi e}{\lambda_0} + \frac{4\pi e \chi B_1}{\lambda_0} \sin(\Omega t) \right) \right)$$
En posant $\varphi_0 = \frac{4\pi e}{\lambda_0}$ et $m(t) = \frac{4\pi e \chi B_1}{\lambda_0} \sin(\Omega t)$, on obtient un signal lumineux modulé en amplitude par le champ magnétique variable, illustrant le couplage électromagnéto-optique recherché.