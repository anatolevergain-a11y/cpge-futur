---
title: 'Exercice 1 : Lois de vitesse'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Cinétique enzymatique et dépollution des sols par la rhizosphère

## Énoncé et Contexte Biologique

Dans le cadre d'une étude en bio-géo-chimie environnementale, on s'intéresse à la dégradation d'un polluant organique modèle, le phénol, présent dans les eaux de ruissellement agricole. Cette dépollution est assurée par une enzyme extraite de champignons mycorhiziens présents dans la rhizosphère (racines) des plantes : la **phénol-oxydase**.

L'objectif de ce problème est d'établir la loi de vitesse régissant cette biocatalyse, d'identifier les ordres de réaction selon les conditions expérimentales, et d'évaluer l'efficacité écotoxicologique du système en tenant compte des limites du modèle choisi.

On modélise l'action de l'enzyme ($E$) sur le substrat polluant ($S$) par le mécanisme classique de Michaelis-Menten :

$$E + S \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} ES \xrightarrow{k_2} E + P$$

où :
* $ES$ est le complexe enzyme-substrat.
* $P$ est le produit formé (produit de dégradation non toxique).
* $k_1$, $k_{-1}$ et $k_2$ sont les constantes de vitesse élémentaires.

Les concentrations initiales vérifient $[E]_0 = [E] + [ES]$, avec $[E]_0 \ll [S]_0$.

---

## Questions

### Partie I : Étude cinétique et approximation des états quasi-stationnaires (AEQS)

1. Écrire les expressions des vitesses de formation du complexe $ES$ ($\frac{d[ES]}{dt}$) et de formation du produit $P$ ($\frac{d[P]}{dt}$).
2. En appliquant l'approximation des états quasi-stationnaires (AEQS) sur l'intermédiaire réactionnel $ES$, exprimer la concentration du complexe $[ES]$ en fonction de $[S]$, $[E]_0$ et des constantes de vitesse $k_1$, $k_{-1}$ et $k_2$.
3. En déduire que la vitesse initiale de réaction $v = \frac{d[P]}{dt}$ peut se mettre sous la forme canonique de Michaelis-Menten :
   $$v = \frac{v_{\text{max}} [S]}{K_m + [S]}$$
   Exprimer $v_{\text{max}}$ et la constante de Michaelis $K_m$ en fonction de $k_1$, $k_{-1}$, $k_2$ et $[E]_0$. Préciser leurs unités dans le système international.

### Partie II : Analyse des régimes limites et identification d'ordres

4. Analyser l'expression de $v$ dans les deux cas limites suivants :
   * **Cas 1 :** Faible concentration en substrat ($[S] \ll K_m$). Quel est l'ordre apparent de la réaction par rapport au polluant $S$ ? Interpréter physiquement ce régime.
   * **Cas 2 :** Forte concentration en substrat ($[S] \gg K_m$). Quel est l'ordre apparent de la réaction ? Justifier l'expression de la vitesse maximale $v_{\text{max}}$.
5. On donne $K_m = 2,5 \times 10^{-3}\text{ mol}\cdot\text{L}^{-1}$. Lors d'une analyse in situ, la concentration en phénol mesurée est $[S] = 1,0 \times 10^{-5}\text{ mol}\cdot\text{L}^{-1}$. Quel est le régime cinétique applicable ? Justifier clairement.

### Partie III : Analyse critique et limites biologiques du modèle

6. L'enzyme étudiée subit une inhibition en présence d'ions cuivre $\text{Cu}^{2+}$ présents en forte concentration dans les sols viticoles traités. Qualitatif ou par une courte explication, indiquer comment cela modifierait la courbe $v = f([S])$.
7. **Esprit Concours (Rigueur et Limites) :** Le modèle de Michaelis-Menten suppose un milieu homogène et stationnaire. Discuter brièvement de la validité de ce modèle physico-chimique lorsqu'on le transpose à l'échelle macroscopique d'un sol vivant (hétérogénéité, diffusion, vieillissement de la matière organique).

---

## Pistes et Indications

* **Piste 1 :** Pensez à utiliser la conservation de la quantité d'enzyme totale : $[E]_{\text{tot}} = [E] + [ES] = [E]_0$.
* **Piste 2 :** L'AEQS consiste à poser $\frac{d[ES]}{dt} \approx 0$ car l'intermédiaire est très réactif et sa concentration reste faible et stable durant la phase pré-stationnaire.
* **Piste 3 :** Pour l'analyse d'ordre, effectuez des développements mathématiques (quantités négligeables devant d'autres) sur le dénominateur de la loi de Michaelis-Menten.

---

## Corrigé Détaillé

### Partie I : Étude cinétique et AEQS

1. D'après les lois de Guldberg appliquées aux actes élémentaires du mécanisme :
   $$\frac{d[ES]}{dt} = k_1 [E][S] - k_{-1}[ES] - k_2[ES]$$
   $$\frac{d[P]}{dt} = k_2 [ES]$$

2. L'application de l'AEQS à l'espèce intermédiaire $ES$ conduit à :
   $$\frac{d[ES]}{dt} = 0 \implies k_1 [E][S] = (k_{-1} + k_2)[ES]$$
   En utilisant la conservation de l'enzyme $[E] = [E]_0 - [ES]$ :
   $$k_1 ([E]_0 - [ES])[S] = (k_{-1} + k_2)[ES]$$
   $$k_1 [E]_0 [S] = [ES] \left( k_{-1} + k_2 + k_1[S] \right)$$
   D'où :
   $$[ES] = \frac{k_1 [E]_0 [S]}{k_{-1} + k_2 + k_1[S]} = \frac{[E]_0 [S]}{\frac{k_{-1} + k_2}{k_1} + [S]}$$

3. La vitesse de formation du produit est $v = \frac{d[P]}{dt} = k_2 [ES]$ :
   $$v = \frac{k_2 [E]_0 [S]}{K_m + [S]}$$
   en posant **$K_m = \frac{k_{-1} + k_2}{k_1}$** (constante de Michaelis) et **$v_{\text{max}} = k_2 [E]_0$**.
   * **Unités :** 
     * $[S]$ et $K_m$ en $\text{mol}\cdot\text{L}^{-1}$ (ou $\text{mol}\cdot\text{m}^{-3}$).
     * $v$ et $v_{\text{max}}$ en $\text{mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}$.
     * $k_2$ en $\text{s}^{-1}$.

---

### Partie II : Analyse des régimes limites

4. Étude des régimes :
   * **Cas 1 : $[S] \ll K_m$.** Le terme $[S]$ au dénominateur devient négligeable devant $K_m$.
     $$v \approx \frac{v_{\text{max}}}{K_m} [S] = k_{\app} [S]$$
     La réaction est **d'ordre apparent 1** par rapport au polluant. Le site actif de l'enzyme est très majoritairement libre, la vitesse est limitée par la fréquence de rencontre entre $E$ et $S$.
   * **Cas 2 : $[S] \gg K_m$.** Le terme $K_m$ devient négligeable devant $[S]$.
     $$v \approx \frac{v_{\text{max}} [S]}{[S]} = v_{\text{max}} = k_2 [E]_0$$
     La réaction est **d'ordre apparent 0** par rapport au polluant. Tous les sites enzymatiques sont saturés sous forme de complexe $ES$ : l'enzyme constitue le facteur limitant.

5. Application numérique : 
   On a $[S] = 1,0 \times 10^{-5}\text{ mol}\cdot\text{L}^{-1}$ et $K_m = 2,5 \times 10^{-3}\text{ mol}\cdot\text{L}^{-1}$. 
   On constate que $[S] \ll K_m$ (le rapport $\frac{[S]}{K_m} = 4 \times 10^{-3} \ll 1$).
   * **Conclusion :** On se trouve dans le **régime d'ordre 1**. La vitesse de dépollution est directement proportionnelle à la concentration résiduelle du phénol.

---

### Partie III : Analyse critique et limites biologiques

6. En présence d'ions $\text{Cu}^{2+}$ (inhibiteur compétitif ou non), la fixation du substrat est entravée ou l'efficacité catalytique chute. Cela se traduit par une diminution de $v_{\text{max}}$ (inhibition non compétitive) et/ou une augmentation apparente de $K_m$ (inhibition compétitive). La courbe $v = f([S])$ est écrasée vers les bas régimes de vitesse.

7. **Esprit Concours & Analyse critique du modèle :**
   * *Limites physico-chimiques :* Le modèle de Michaelis-Menten suppose un milieu homogène, agité, en solution aqueuse idéale, ce qui est très loin de la réalité d'un sol (milieu poreux hétérogène, phases solides, liquides et gazeuses).
   * *Transport vs Réaction :* Dans le sol, la vitesse globale de dépollution n'est souvent pas dictée par la cinétique enzymatique intrinsèque (qui est rapide devant les transferts), mais par des **phénoménologiques de diffusion** du polluant à travers les agrégats terreux et le mucus racinaire (limitations massiques).
   * *Validité biologique :* L'enzyme est ici considérée comme stable, alors que dans le sol, elle subit une protéolyse par la microflore tellurique et une adsorption sur les argiles, modifiant sa conformation et donc ses constantes cinétiques ($K_m$ effective modifiée).