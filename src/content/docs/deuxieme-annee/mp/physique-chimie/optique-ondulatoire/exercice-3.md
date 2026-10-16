---
title: 'Exercice 1 : Michelson et fentes d Young'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude comparée et couplée d'interféromètres (Michelson et Fentes d'Young)

*Ce problème aborde un grand classique des concours de la filière MP : l'analyse comparative des systèmes interférentiels à division d'onde et à division d'amplitude, ainsi que la notion de cohérence spatiale et temporelle.*

---

## Préambule et notations

On considère une source lumineuse laser émettant une radiation monochromatique de longueur d'onde $\lambda_0$ dans le vide. On pose $\sigma_0 = \frac{1}{\lambda_0}$ le nombre d'onde associé. Les milieux traversés sont assimilés au vide ($n = 1$). 

L'exercice se compose de deux parties indépendantes dans leur montage initial, mais reliées par l'étude de la visibilité des franges.

---

## Partie I : Le dispositif des fentes d'Young

On dispose deux fentes fines $F_1$ et $F_2$ distantes de $a = 1.0\text{ mm}$, éclairées par une source ponctuelle $S$ monochromatique de longueur d'onde $\lambda_0 = 600\text{ nm}$. Un écran d'observation $E$ est placé à une distance $D = 1.5\text{ m}$ des fentes.

### Question 1
Établir l'expression de la différence de marche $\delta(x)$ en un point $M$ de l'écran repéré par sa coordonnée cartésienne $x$ (axe parallèle à la direction $(F_1F_2)$, origine $O$ sur l'axe optique). On se placera dans l'approximation des fentes minces et des conditions de Gauss ($x \ll D$ et $a \ll D$).

#### Corrigé guidé :
1. **Exprimer les chemins optiques** : Soit $S$ sur l'axe optique. Le chemin optique du trajet $S \to F_1 \to M$ est $L_1 = SF_1 + F_1M$. De même, $L_2 = SF_2 + F_2M$.
2. **Différence de marche** : $\delta = (SF_2 + F_2M) - (SF_1 + F_1M)$. Puisque $S$ est sur l'axe équidistant de $F_1$ et $F_2$, on a $SF_1 = SF_2$. Il vient :
   $$\delta = F_2M - F_1M$$
3. **Calcul géométrique** : Dans le plan $(Ox)$, soit $F_1\left(0, -\frac{a}{2}\right)$, $F_2\left(0, +\frac{a}{2}\right)$ et $M(D, x)$.
   $$F_1M^2 = D^2 + \left(x + \frac{a}{2}\right)^2 \quad \text{et} \quad F_2M^2 = D^2 + \left(x - \frac{a}{2}\right)^2$$
4. **Approximation (Gauss)** : Factoriser par $D^2$ et utiliser le développement limité $(1+\epsilon)^{\alpha} \approx 1 + \alpha\epsilon$ pour $\epsilon \ll 1$.

#### Résultat :
$$F_2M - F_1M \approx \frac{ax}{D}$$
Soit $\delta(x) = \frac{ax}{D}$.

---

### Question 2
En déduire l'expression de l'éclairement $I(x)$ sur l'écran. Calculer l'interfrange $i$. Faire l'application numérique.

#### Corrigé guidé :
1. L'éclairement pour deux ondes d'intensités égales $I_0$ s'écrit :
   $$I(x) = 2I_0 \left(1 + \cos\left(\frac{2\pi \delta(x)}{\lambda_0}\right)\right) = 4I_0 \cos^2\left(\frac{\pi a x}{\lambda_0 D}\right)$$
2. L'interfrange $i$ correspond à la distance entre deux maxima d'éclairement consécutifs, soit $\frac{2\pi a i}{\lambda_0 D} = \pi$, ce qui donne :
   $$i = \frac{\lambda_0 D}{a}$$
3. **Application numérique** :
   $$i = \frac{600 \times 10^{-9} \times 1.5}{1.0 \times 10^{-3}} = 9.0 \times 10^{-4}\text{ m} = 0.90\text{ mm}$$

---

## Partie II : L'interféromètre de Michelson en air

On utilise maintenant un interféromètre de Michelson réglé au contact optique, puis on déplace l'un des miroirs ($M_1$) d'une distance $e$. La source est la même que précédemment ($\lambda_0 = 600\text{ nm}$).

### Question 3
Rappeler brièvement le principe de la localisation des franges avec une source étendu (utilisée ici) et préciser la nature des franges obtenues au voisinage du contact optique (miroirs rigoureusement perpendiculaires).

#### Corrigé guidé :
1. **Localisation** : Le Michelson équivaut à un système de deux sources (ou de deux miroirs fictifs $M_1'$ et $M_2$). Les interfranges sont localisées à l'infini pour une source à l'infini (ou sur le miroir $M_1'$ et son image si la source est étendue).
2. **Nature des franges** : Au contact optique ($e = 0$), la différence de marche est nulle partout, l'éclairement est uniforme (teinte plate d'ordre zéro, champ entièrement noir ou blanc selon le déphasage à la réflexion). Lorsque $e$ croît légèrement, on observe des **franges d'égale inclinaison** (anneaux circulaires) si le miroir $M_1$ et l'image $M_2'$ sont rigoureusement parallèles.

---

### Question 4
On modifie le réglage du Michelson pour observer des franges d'égale épaisseur (ou franges de wedge / coin d'air) en inclinant légèrement le miroir $M_2$ d'un angle $\alpha$. La différence de marche s'écrit alors $\delta(x) = 2(e + \alpha x)$, où $x$ est la coordonnée transversale sur le miroir.
Exprimer l'interfrange $i'$ de ces nouvelles franges de Michelson en fonction de $\lambda_0$ et $\alpha$.

#### Corrigé guidé :
1. La condition d'interfrange est donnée par un décalage de $\lambda_0$ de la différence de marche : 
   $$\delta(x+i') - \delta(x) = \lambda_0 \implies 2\alpha i' = \lambda_0$$
2. On en déduit :
   $$i' = \frac{\lambda_0}{2\alpha}$$

---

## Partie III : Couplage et analyse critique

### Question 5
On souhaite simuler le dispositif des fentes d'Young à l'aide du Michelson réglé en coin d'air. 
Déterminer la valeur de l'angle d'inclinaison $\alpha$ du miroir du Michelson pour que l'interfrange $i'$ du Michelson soit rigoureusement égal à l'interfrange $i$ des fentes d'Young calculé à la Partie I.

#### Corrigé guidé :
1. Poser l'égalité des interfranges : $i' = i$.
2. $\frac{\lambda_0}{2\alpha} = \frac{\lambda_0 D}{a} \implies \alpha = \frac{a}{2D}$.
3. **Application numérique** :
   $$\alpha = \frac{1.0 \times 10^{-3}}{2 \times 1.5} \approx 3.33 \times 10^{-4}\text{ rad} \ (\approx 0.019^\circ)$$

---

### Question 6 (Analyse critique)
Bien que les interfranges soient identiques, discutez brièvement des différences fondamentales entre ces deux montages concernant :
1. **La nature de la division** (amplitude vs onde).
2. **La condition de cohérence temporelle** (largeur de la source, spectre).

#### Corrigé guidé :
1. **Nature de la division** : 
   * *Fentes d'Young* : Division d'onde. Une même fronton d'onde est séparé géométriquement par les deux fentes.
   * *Michelson* : Division d'amplitude. L'onde incidente est séparée en deux (réflexion et transmission) par la lame séparatrice. Chaque onde parcourt l'ensemble du champ.
2. **Cohérence temporelle et spatiale** :
   * Le Michelson en configuration "coin d'air" avec une source étendue permet d'observer des franges localisées. Cependant, si la source n'est pas strictement monochromatique (largeur spectrale $\Delta\lambda$), les brouillages de franges apparaissent rapidement lorsque l'ordre d'interférence $p = \frac{\delta}{\lambda_0}$ devient grand (limite de cohérence temporelle $\Delta t \approx \frac{\lambda_0^2}{c \Delta\lambda}$).
   * Les fentes d'Young nécessitent une excellente cohérence *spatiale* (d'où la nécessité d'une fente source amont pour éclairer $F_1$ et $F_2$ en phase), sous peine de voir le contraste des franges s'annuler par translation des systèmes de franges non cohérents entre eux.

---

## Bilan du candidat (Méthode)
> **À retenir pour les concours :** 
> * Savoir toujours relier la différence de marche $\delta$ à la géométrie du dispositif via un développement limité (approximation paraxiale).
> * Ne pas confondre la nature des franges (anneaux d'égale inclinaison vs rectilignes d'égale épaisseur).
> * La visibilité des franges est toujours le juge de paix pour tester la limite d'utilisation d'un interféromètre.