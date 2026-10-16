---
title: 'Exercice 2 : Interféromètre de Michelson'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude avancée de l'interféromètre de Michelson et limites du modèle

## Énoncé

L'interféromètre de Michelson est un dispositif optique fondamental basé sur la division d'amplitude. On se propose d'étudier son fonctionnement avec une source étendue, d'analyser le contraste des franges obtenues, puis de mettre en évidence les limites du modèle idéal d'onde plane quasi-monochromatique habituellement utilisé en travaux pratiques.

On considère un interféromètre de Michelson réglé en lame d'air (miroirs $M_1$ et $M_2'$ rigoureusement parallèles, où $M_2'$ est l'image du miroir $M_2$ par la sémi-réfléchissante). L'épaisseur de la lame d'air est notée $e$. 

Le dispositif est éclairé par une source lumineuse étendue émettant un rayonnement de longueur d'onde dans le vide $\lambda_0$. On pose $\sigma_0 = \frac{1}{\lambda_0}$ le nombre d'onde associé.

---

## Questions

### Partie I : Étude géométrique et interférentielle idéale
1. Établir l'expression de la différence de marche $\delta$ entre les deux rayons issus d'un même point source et parvenant au récepteur (situé à l'infini ou dans le plan focal d'une lentille de focalisation) en fonction de l'épaisseur $e$ et de l'angle d'incidence $i$ des rayons sur la lame d'air.
2. En déduire la nature des franges d'interférence observées à l'infini (franges d'égale inclinaison). Déterminer la condition sur l'ordre d'interférence $p$ pour observer des zones lumineuses.
3. On déplace le miroir $M_1$ d'une distance $\Delta e$. Comment évolue le système de franges au centre du champ ($i = 0$) ? Exprimer le nombre $N$ de franges qui défilent au centre lorsque $e$ varie de $\Delta e$.

### Partie II : Influence de la largeur spectrale et contraste
On suppose désormais que la source n'est plus rigoureusement monochromatique, mais émet un spectre centré sur $\sigma_0$ de profil rectensulaire de largeur $\Delta \sigma$.
4. Exprimer l'intensité lumineuse résultante $I(M, \delta)$ en un point du champ d'interférence en fonction de l'intensité maximale $I_0$, de $\sigma$ et de $\delta$.
5. Montrer que l'intensité globale reçue s'écrit sous la forme :
   $$I_{\text{tot}}(\delta) = I_{\text{max}} \left[ 1 + \gamma(\delta) \cos(2\pi \sigma_0 \delta) \right]$$
   où l'on exprimera le terme de contraste $\gamma(\delta)$ en fonction de $\sigma_0$, $\Delta \sigma$ et $\delta$.
6. Tracer qualitativement l'allure de $\gamma(\delta)$. Pour quelle condition sur $\delta$ les interférences deviennent-elles imperceptibles ? Application numérique : $\lambda_0 = 600\text{ nm}$ et $\Delta \lambda = 6\text{ nm}$.

### Partie III : Analyse critique et limites du modèle
7. **Analyse critique :** Le modèle théorique utilisé en Partie I suppose que les miroirs sont parfaits, que l'onde incidente est une onde plane parfaite, et que la source est ponctuelle ou spatialement incohérente sans limite de taille. Discutez de la validité de ces hypothèses dans une situation expérimentale réelle. Quel est l'impact d'une source réelle de diamètre non nul sur le contraste des franges lorsque l'épaisseur $e$ augmente ?

---

## Pistes et indications

* **Pist. 1 :** Utiliser la construction des miroirs équivalents ($M_1$ et $M_2'$ formant une lame à faces parallèles d'épaisseur $e$). Faire un schéma de la marche des rayons.
* **Pist. 4 & 5 :** Pour une source polychromatique, les intensités s'ajoutent (incohérence temporelle entre les différentes longueurs d'onde). L'intensité totale est l'intégrale sur le spectre des intensités monochromatiques.
* **Pist. 7 :** Penser à la notion de brouillage des franges par incohérance spatiale (taille de la source) et temporelle (largeur spectrale), ainsi qu'aux défauts de planéité des optiques (limite de $\lambda/10$).

---

## Corrigé pas à pas

### Partie I_1. **Différence de marche :** Par un calcul classique de géométrie (chemin optique dans l'air d'indice $n \approx 1$), la différence de marche entre les deux interfered est :
   $$\delta = 2e \cos i$$
2. **Nature des franges :** L'intensité est extrémale pour $\delta = p \lambda_0$ (avec $p$ l'ordre d'interférence). Comme $\delta$ ne dépend que de l'angle $i$, les franges sont des anneaux concentriques localisés à l'infini (ou dans le plan focal de la lentille), d'égale inclinaison. Au centre ($i=0$), l'ordre d'interférence est maximal : $p_0 = \frac{2e}{\lambda_0} = 2e\sigma_0$.
3. **Défilement des franges :** Si $e$ varie de $\Delta e$, l'ordre d'interférence au centre varie de $\Delta p_0 = 2 \Delta e \sigma_0$. Le nombre de franges $N$ qui traversent le centre est égal à $|\Delta p_0|$ :
   $$N = 2 \Delta e \sigma_0 = \frac{2\Delta e}{\lambda_0}$$

### Partie II
4. **Intensité élémentaire :** Pour un nombre d'onde $\sigma$ compris entre $\sigma_0 - \Delta \sigma / 2$ et $\sigma_0 + \Delta \sigma / 2$, l'intensité élémentaire est $dI = \frac{I_0}{\Delta \sigma} \left[ 1 + \cos(2\pi \sigma \delta) \right] d\sigma$.
5. **Calcul de l'intensité totale et contraste :** 
   $$I_{\text{tot}}(\delta) = \int_{\sigma_0 - \Delta \sigma / 2}^{\sigma_0 + \Delta \sigma / 2} \frac{I_0}{\Delta \sigma} \left[ 1 + \cos(2\pi \sigma \delta) \right] d\sigma$$
   En effectuant l'intégration :
   $$I_{\text{tot}}(\delta) = I_0 \left[ 1 + \text{sinc}(\pi \Delta \sigma \delta) \cos(2\pi \sigma_0 \delta) \right]$$
   Par identification, le contraste est $\gamma(\delta) = |\text{sinc}(\pi \Delta \sigma \delta)|$.
6. **Brouillage et AN :** Le contraste s'annule pour la première fois lorsque l'argument du sinus cardinal vaut $\pi$, soit $\pi \Delta \sigma \delta_0 = \pi \implies \delta_0 = \frac{1}{\Delta \sigma}$.
   *Application numérique :* $\Delta \sigma = \frac{\Delta \lambda}{\lambda_0^2}$. 
   $$\delta_0 = \frac{\lambda_0^2}{\Delta \lambda} = \frac{(600 \times 10^{-9})^2}{6 \times 10^{-9}} = 6 \times 10^{-5}\text{ m} = 60\text{ }\mu\text{m}$$
   Comme $\delta \approx 2e$, les interférences disparaissent pour $e > 30\text{ }\mu\text{m}$.

### Partie III
7. **Analyse critique des limites du modèle :**
   * **Limites du modèle d'onde plane / source ponctuelle :** Le modèle idéal suppose une source ponctuelle. En réalité, la source a une extension transversale $S$. Chaque point de la source engendre son propre système d'anneaux décalé spatialement par rapport aux autres. Si la taille de la source est trop grande, les anneaux des uns se superposent aux creux des autres, entraînant un **brouillage par incohérence spatiale**. Le théorème de Gershon-Woo permet de définir une surface source maximale au-delà de laquelle le contraste s'effondre.
   * **Limites du modèle quasi-monochromatique :** La source réelle possède un profil spectral continu (et non strictement rectangulaire). De plus, l'utilisation de sources dites "blanches" limite l'observation à quelques franges colorées centrales ($\delta \approx 0$).
   * **Défauts des composants optiques :** Les miroirs $M_1$ et $M_2$ ne sont jamais rigoureusement plans (défauts de l'ordre de $\lambda/10$ ou $\lambda/20$ pour de la optique de haute précision). Cela induit des déphasages locaux non contrôlés qui détruisent la forme parfaite des anneaux et réduisent le contraste maximal mesurable même pour $e$ petit.