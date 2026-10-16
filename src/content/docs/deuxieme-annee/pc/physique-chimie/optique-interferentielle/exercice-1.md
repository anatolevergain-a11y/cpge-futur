---
title: 'Exercice 1 : Interféromètre de Michelson'
description: 'Problème d entraînement type concours pour PC.'
---

### 🌐 Énoncé du problème / Étude de cas

L'interféromètre de Michelson est un dispositif optique fondamental utilisé pour mesurer des variations de longueur d'onde, des indices optiques ou des déplacements infimes. Dans ce problème, on se propose d'étudier le fonctionnement d'un Michelson réglé en **lame d'air**, éclairé par une source spectrale quasi-monochromatique, dans le but d'analyser le profil d'une source réelle et de discuter des limites de la cohérence temporelle.

On considère une source lumineuse étendue émettant dans le visible autour de la longueur d'onde moyenne $\lambda_0 = 589.3\text{ nm}$ (raie du sodium). L'interféromètre est constitué de deux miroirs $M_1$ et $M_2$ et d'une séparatrice $S$. Le miroir $M_1$ est à une distance $L$ de la séparatrice, et l'image du miroir $M_2$ par la séparatrice, notée $M'_2$, est à une distance $L + e$ de celle-ci, où $e$ représente l'épaisseur de la lame d'air équivalente. 

Dans un contexte de métrologie optique moderne, l'utilisation de sources réelles impose de modéliser finement leur profil spectral pour ne pas interpréter faussement les observations interférentielles. On s'intéressera donc à l'impact d'une source non rigoureusement monochromatique sur le contraste des franges.

---

### ❓ Questions progressives (incluant des questions d'analyse critique)

1. **Modélisation géométrique et optique**
   On se place dans les conditions de Gauss. 
   1.1. Représenter schématiquement le trajet d'un rayon lumineux issu de la source, traversant la séparatrice et se réfléchissant sur les deux bras de l'interféromètre. Quel est le rôle de la **plaque compensatrice** souvent insérée dans le bras du miroir $M_1$ ?
   1.2. Établir l'expression de la différence de marche $\delta$ entre les deux ondes interferes en un point du plan focal d'une lentille de focal $f'$, en fonction de l'épaisseur $e$ de la lame d'air, de l'indice $n$ du milieu traversé (on prendra $n = 1$ pour l'air) et de l'angle d'incidence $i$ du rayon sur la lame d'air.

2. **Observation et conditions d'interférence**
   2.1. Quel type de franges observe-t-on dans le plan focal de la lentille (franges d'égale inclinaison ou d'égale épaisseur) ? Préciser la forme géométrique de ces franges.
   2.2. Exprimer l'intensité lumineuse $I(P)$ sur l'écran en fonction de l'intensité maximale $I_0$ et de la différence de marche $\delta$, dans le cas d'une source rigoureusement monochromatique de longueur d'onde $\lambda_0$.

3. **Prise en compte de la structure spectrale de la source (Cohérence temporelle)**
   On suppose désormais que la source n'est plus rigoureusement monochromatique, mais que son intensité spectrale $I_0(\lambda)$ est centrée autour de $\lambda_0$ et présente un profil rectangulaire de largeur spectrale $\Delta \lambda$ (avec $\Delta \lambda \ll \lambda_0$).
   3.1. Rappeler la définition de la longueur de cohérence $l_c$ et donner son expression en fonction de $\lambda_0$ et $\Delta \lambda$ dans le cadre de ce modèle.
   3.2. En déduire l'expression de l'intensité globale reçue $I(\delta)$ comme la somme incohérente des intensités émises par chaque longueur d'onde. Montrer que l'intensité s'écrit sous la forme :
   $$I(\delta) = I_{\text{moy}} \left[ 1 + \gamma(\delta) \cos\left(\frac{4\pi e}{\lambda_0}\right) \right]$$
   où l'on exprimera explicitement le terme de contraste (ou visibilité) $\gamma(\delta)$ sous forme d'un sinus arcarde ou d'un sinus cardinal.

4. **Analyse critique et limites du modèle**
   4.1. Pour une lampe spectrale au cadmium, $\lambda_0 = 644.0\text{ nm}$ et $\Delta \lambda \approx 0.001\text{ nm}$. Calculer la longueur de cohérence $l_c$ correspondante. Comment évolue le contraste des franges lorsque l'on augmente l'épaisseur $e$ de la lame d'air de $0$ à $10\text{ cm}$ ?
   4.2. **Esprit critique :** Dans une expérience de TP, l'étudiant observe une disparition totale des franges pour une épaisseur $e_{\text{exp}}$ nettement inférieure à la longueur de cohérence théorique $l_c$ calculée avec le profil rectangulaire idéal. Proposer au moins deux causes physiques majeures non prises en compte par ce modèle simple qui expliquent cet écart.

---

### 💡 Pistes & Indications

- **Q1.1 :** Pensez au chemin optique dans le verre de la séparatrice pour les deux bras. Le verre est un milieu dispersif et non isopaque si les épaisseurs ne sont pas compensées.
- **Q1.2 :** Utilisez la méthode des miroirs équivalents ($M_1$ et $M_2'$). La différence de marche se calcule géométriquement par la formule classique de la lame à faces parallèles : $\delta = 2 e \cos i$.
- **Q3.2 :** L'intensité totale est l'intégrale sur $\lambda$ des intensités élémentaires. Utilisez l'approximation $\lambda \approx \lambda_0$ dans l'amplitude, mais conservez l'expression exacte dans la phase pour le terme oscillant.
- **Q4.2 :** Pensez à la dimension finie de la source, aux défauts de planéité des miroirs (limite de l'approximation de flatness à $\lambda/20$), ou encore à l'élargissement Doppler si la source est une décharge gazeuse chaude.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Modélisation géométrique et optique
1.1. La plaque compensatrice est une lame de verre d'épaisseur rigoureusement identique à celle de la séparatrice, placée dans le bras du miroir $M_1$ perpendiculairement au faisceau. Son rôle est de compenser la différence de chemin optique dans le verre introduite par la traversée de la séparatrice (les rayons dans le bras 2 traversent trois fois la séparatrice alors que ceux du bras 1 ne la traversent qu'une fois). Cela permet d'observer des franges avec une source blanche (lumière polychromatique).
1.2. En utilisant le dioptre équivalent (lame d'air d'épaisseur $e$ limitée par $M_1$ et $M_2'$), la différence de marche entre les deux rayons interférant à l'infini (dans le plan focal de la lentille) pour un angle d'incidence $i$ est :
$$\delta = 2 n e \cos i \quad (\text{avec } n = 1)$$
Soit **$\delta = 2e \cos i$**.

#### 2. Observation et conditions d'interférence
2.1. Les franges sont des **anneaux d'égale inclinaison** (franges de Haidinger), localisés à l'infini (ou sur l'écran placé dans le plan focal de la lentille convergente).
2.2. L'intensité s'écrit :
$$I(P) = 2I_1 \left[ 1 + \cos\left(\frac{2\pi \delta}{\lambda_0}\right) \right] = I_0 \left[ 1 + \cos\left(\frac{4\pi e \cos i}{\lambda_0}\right) \right]$$

#### 3. Prise en compte de la structure spectrale
3.1. La longueur de cohérence est définie par $l_c = \frac{\lambda_0^2}{\Delta \lambda}$.
3.2. En intégrant sur le profil spectral rectangulaire $I_0(\lambda) = \frac{I_{\text{tot}}}{\Delta \lambda}$ sur $[\lambda_0 - \frac{\Delta \lambda}{2}, \lambda_0 + \frac{\Delta \lambda}{2}]$ :
$$I(\delta) = \int_{\lambda_0 - \Delta \lambda / 2}^{\lambda_0 + \Delta \lambda / 2} \frac{I_{\text{tot}}}{\Delta \lambda} \left[ 1 + \cos\left(\frac{4\pi e}{\lambda}\right) \right] d\lambda$$
Après calcul (en posant $\frac{4\pi e}{\lambda} \approx \frac{4\pi e}{\lambda_0} - \frac{4\pi e}{\lambda_0^2}(\lambda - \lambda_0)$), on obtient un terme en sinus cardinal :
$$I(\delta) = I_{\text{tot}} \left[ 1 + \text{sinc}\left(\frac{2\pi e \Delta \lambda}{\lambda_0^2}\right) \itude \cos\left(\frac{4\pi e}{\lambda_0}\right) \right]$$
Le contraste est donc $\gamma(e) = \left| \text{sinc}\left(\frac{\pi e}{l_c}\right) \right|$.

#### 4. Analyse critique et limites du modèle
4.1. Application numérique pour le cadmium :
$$l_c = \frac{(644.0 \times 10^{-9})^2}{0.001 \times 10^{-9}} \approx 0.415\text{ m} = 41.5\text{ cm}$$
Pour $e$ variant de $0$ à $10\text{ cm}$, le rapport $\frac{e}{l_c}$ varie de $0$ à $\frac{10}{41.5} \approx 0.24$. Le contraste $\gamma(e) = \text{sinc}(\pi \times 0.24) \approx \text{sinc}(0.75\text{ rad}) \approx \frac{\sin(0.75)}{0.75} \approx 0.90$. Le contraste diminue légèrement mais les franges restent bien visibles.

4.2. **Analyse critique et discussion des écarts :**
Plusieurs facteurs expérimentaux non inclus dans le modèle simple expliquent la disparition prématurée des franges :
1. **Défauts de planéité des miroirs :** Si les miroirs ne sont pas parfaits à $\lambda/20$ près, les zones locales de la lame d'air ont des épaisseurs $e$ légèrement différentes. L'intégration spatiale sur la surface du faisceau entraîne un brouillage des franges (perte de cohérence spatiale).
2. **Élargissement Doppler et collisionnel de la source :** Le profil réel de la raie spectrale n'est pas rectangulaire mais plutôt de type Voigt (ou gaussien par agitation thermique). Les ailes de la distribution spectrale contiennent des fréquences qui brouillent le système plus rapidement que ne le prédit le modèle du profil rectangulaire idéalisé.
3. **Vibrations mécaniques :** À l'échelle du nanomètre ($\lambda/2 \approx 300\text{ nm}$), le moindre bruit acoustique ou thermique dans le bâti de l'interféromètre provoque un balancement de la différence de marche $\delta$, entraînant une moyenne temporelle qui réduit le contraste apparent sur le détecteur.