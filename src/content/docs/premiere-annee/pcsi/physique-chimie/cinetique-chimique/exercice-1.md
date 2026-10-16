---
title: 'Exercice 1 : Lois de vitesse et temps de demi-réaction'
description: 'Problème d entraînement type concours pour PCSI.'
---

### 🌐 Énoncé du problème / Étude de cas

L'industrie chimique et les procédés biologiques nécessitent une maîtrise rigoureuse de la cinétique des réactions. On s'intéresse ici à la dégradation en milieu aqueux d'un polluant organique modèle, le 4-chlorophénol ($\text{C}_6\text{H}_5\text{ClO}$), par un oxydant puissant, le permanganate de potassium ($\text{K}^+ + \text{MnO}_4^-$). 

Ce type d'étude permet de dimensionner les réacteurs de dépollution des eaux usées industrielles. L'équation bilan de la réaction modélisant l'oxydation en milieu acide est supposée totale :

$$C_6H_5ClO_{(aq)} + 4\,\text{MnO}_{4(aq)}^- + 11\,\text{H}_{(aq)}^+ \longrightarrow 6\,\text{CO}_{2(g)} + 4\,\text{Mn}_{(aq)}^{2+} + \text{Cl}_{(aq)}^- + 7\,\text{H}_2\text{O}_{(l)}$$

Afin de déterminer la loi de vitesse de cette réaction à une température $T = 298\,\text{K}$, on réalise une cinétique par spectrophotométrie en plaçant les réactifs dans les conditions dites de **dégénérescence de l'ordre**.

---

### ❓ Questions progressives

1. **Définition et conditions expérimentales :** 
   Expliquer qualitativement ce que signifient les termes "dégénérescence de l'ordre" et "conditions stœchiométriques". Quel est l'intérêt expérimental majeur de la dégénérescence de l'ordre pour l'étude d'une réaction complexe ?

2. **Mise en place du protocole et hypothèse :** 
   Pour étudier l'ordre par rapport au 4-chlorophénol (noté $R$), on réalise une expérience où la concentration initiale en ions permanganate $\left[\text{MnO}_4^-\right]_0$ est très grande devant celle du 4-chlorophénol $\left[R\right]_0$. 
   Écrire la relation liant la vitesse volumique de réaction $v(t)$ à la concentration $\left[R\right](t)$, en supposant que la réaction admet un ordre partiel $a$ par rapport à $R$ et $b$ par rapport à $\text{MnO}_4^-$. En déduire l'expression de la vitesse apparente $v(t) = k_{\text{app}} \left[R\right]^a$.

3. **Suivi cinétique et exploitation graphique :** 
   Dans ces conditions, on mesure l'absorbance du milieu réactionnel à une longueur d'onde adéquate. On trace les courbes $\ln\left(\left[R\right]\right)$ en fonction du temps $t$ et $\frac{1}{\left[R\right]}$ en fonction du temps $t$. Seule la première représentation graphique est une droite de régression linéaire.
   * En déduire l'ordre apparent $a$ de la réaction par rapport au 4-chlorophénol.
   * Exprimer la constante de vitesse apparente $k_{\text{app}}$ en fonction de la pente de cette droite et préciser son unité.

4. **Temps de demi-réaction :** 
   Donner la définition générale du temps de demi-réaction $t_{1/2}$. Démontrer son expression dans le cas de cet ordre $a$, et commenter sa dépendance (ou son indépendance) vis-à-vis de la concentration initiale $\left[R\right]_0$.

5. **Analyse critique du modèle et limites industrielles :** 
   * Dans un procédé de dépollution réel à l'échelle pilote, l'élévation de température due à l'exothermie de la réaction modifie la constante de vitesse selon la loi d'Arrhénius $k_{\text{app}}(T) = A \exp\left(-\frac{E_a}{RT}\right)$. Si la température locale augmente de $10\,\text{K}$ autour de $298\,\text{K}$ (avec une énergie d'activation $E_a \approx 60\,\text{kJ}\cdot\text{mol}^{-1}$), estimer l'impact qualitatif et quantitatif sur la durée du traitement.
   * Discuter la validité de l'hypothèse de dégénérescence de l'ordre au cours du temps pour un réacteur fermé (type batch) mené jusqu'à conversion totale du polluant.

---

### 💡 Pistes & Indications

* **Q1 :** Pensez à l'expression générale d'une loi de vitesse $v = k [R]^a [\text{MnO}_4^-]^b$ et à la difficulté mathématique de résoudre une équation différentielle couplée à plusieurs variables.
* **Q2 :** Si un réactif est en grand excès, sa concentration varie-t-elle de manière significative au cours de la réaction ?
* **Q3 :** L'intégration d'une équation différentielle d'ordre 1 conduit à une fonction logarithmique.
* **Q5 :** Utilisez la relation $\frac{d(\ln k)}{dT} = \frac{E_a}{R T^2}$ ou calculez directement le rapport des constantes de vitesse à $298\,\text{K}$ et $308\,\text{K}$. Donnée : $R = 8,314\,\text{J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Dégénérescence de l'ordre et conditions stœchiométriques
* **Conditions stœchiométriques :** Les réactifs sont introduits dans les proportions stœchiométriques initiales (ici $n_{\text{MnO}_4^-; 0} = 4\,n_{R; 0}$).
* **Dégénérescence de l'ordre :** Elle consiste à placer tous les réactifs **sauf un** (le réactif dont on cherche l'ordre) en grand excès. 
* **Intérêt :** La concentration des réactifs en excès reste quasi-constante au cours du temps ($\approx initiales$). Cela permet de simplifier la loi de vitesse globale en une loi de vitesse apparente ne dépendant que d'une seule variable, évitant ainsi des régressions non linéaires complexes.

#### 2. Expression de la vitesse
La vitesse volumique de la réaction s'écrit :
$$v = -\frac{d[R]}{dt} = k [R]^a [\text{MnO}_4^-]^b$$
Puisque les ions permanganate sont introduits en grand excès ($\left[\text{MnO}_4^-\right] \approx \left[\text{MnO}_4^-\right]_0 = \text{ctex}$), on peut regrouper les termes constants :
$$v = \left( k \left[\text{MnO}_4^-\right]_0^b \right) [R]^a = k_{\text{app}} [R]^a$$
Avec $k_{\text{app}} = k \left[\text{MnO}_4^-\right]_0^b$ la constante de vitesse apparente.

#### 3. Ordre apparent et constante de vitesse
* Le tracé de $\ln\left([R]\right)$ en fonction du temps étant une droite, l'intégration de l'équation différentielle $-\frac{d[R]}{dt} = k_{\text{app}} [R]^a$ correspond à un **ordre apparent $a = 1$**.
* L'équation différentielle s'écrit alors : $\frac{d[R]}{dt} + k_{\text{app}} [R] = 0$.
* Par intégration : $\ln\left(\frac{[R](t)}{[R]_0}\right) = -k_{\text{app}} t$, soit $\ln([R](t)) = -k_{\text{app}} t + \ln([R]_0)$.
* La pente de la droite expérimentale est négative et vaut $-\text{pente} = k_{\text{app}}$.
* **Unité de $k_{\text{app}}$ :** Comme $\ln([R])$ est sans dimension, $k_{\text{app}}$ est homogène à l'inverse d'un temps, soit en $\text{s}^{-1}$ (ou $\text{min}^{-1}$).

#### 4. Temps de demi-réaction
* **Définition :** Le temps de demi-réaction $t_{1/2}$ est la durée au bout de laquelle la concentration du réactif limitant (ici $R$) a diminué de moitié par rapport à son état initial :
  $$[R](t_{1/2}) = \frac{[R]_0}{2}$$
* **Démonstration :** En injectant cette condition dans la loi horaire obtenue à la question 3 :
  $$\ln\left(\frac{[R]_0 / 2}{[R]_0}\right) = -k_{\text{app}} t_{1/2}$$
  $$\ln\left(\frac{1}{2}\right) = -\ln(2) = -k_{\text{app}} t_{1/2} \implies t_{1/2} \frac{\ln(2)}{k_{\text{app}}}$$
* **Commentaire :** Pour une cinétique d'ordre 1 (apparent ici), le temps de demi-réaction est **indépendant de la concentration initiale** $[R]_0$. C'est une signature caractéristique de l'ordre 1.

#### 5. Analyse critique du modèle et limites industrielles
* **Impact thermique (loi d'Arrhénius) :**
  Calculons le rapport des constantes de vitesse à $T_2 = 308\,\text{K}$ et $T_1 = 298\,\text{K}$ :
  $$\frac{k(T_2)}{k(T_1)} = \exp\left( \frac{E_a}{R} \left(\frac{1}{T_1} - \frac{1}{T_2}\right) \right)$$
  A.N. : $\frac{60 \times 10^3}{8,314} \left(\frac{1}{298} - \frac{1}{308}\right) \approx 7216 \times 1,089 \times 10^{-4} \approx 0,786$
  $$\frac{k(308)}{k(298)} = e^{0,786} \approx 2,19$$
  Une élévation de $10\,\text{K}$ **multiplie la vitesse par plus de 2** (le temps de traitement est donc divisé par 2). Dans un réacteur mal refroidi, l'exothermie peut emballer la réaction (risque thermique).
* **Critique de la dégénérescence :**
  L'hypothèse suppose $[\text{MnO}_4^-] \approx [\text{MnO}_4^-]_0$. Or, selon la stœchiométrie, il faut 4 moles de $\text{MnO}_4^-$ pour consommer 1 mole de $R$. Si $[R]_0$ n'est pas infiniment petit devant $[\text{MnO}_4^-]_0$ (par exemple, si $[\text{MnO}_4^-]_0 = 10 [R]_0$), le réactif en "excès" est consommé à hauteur de $40\%$ en fin de réaction. L'approximation $\left[\text{MnO}_4^-\right] \approx \text{ctex}$ devient fausse : **le modèle d'ordre apparent s'effondre en fin de manipulation**.