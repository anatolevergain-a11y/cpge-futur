---
title: 'Exercice 2 : Interférences et effet Doppler'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ CORRIGÉ : Interférences et effet Doppler

**Filière :** BCPST  
**Matière :** Physique-Chimie  
Chapitre: ** Thermodynamique chimique et Ondes (Thème : Interférences et effet Doppler)  

---

## Introduction et présentation du problème

Ce problème aborde deux aspects fondamentaux des ondes en biologie et en géophysique : d'une part, l'analyse d'un signal acoustique par effet Doppler (simulant l'étude de la circulation sanguine ou le vol d'insectes), et d'autre part, la formation d'interférences lumineuses par un dispositif interférentiel (simulant l'analyse spectroscopique fine). 

L'objectif est d'évaluer la rigueur du candidat dans la manipulation des formules d'ondes, des grandeurs algébriques et de l'analyse critique.

---

## Partie I : Étude d'un dispositif interférentiel lumineux

On considère une source lumineuse monochromatique de longueur d'onde $\lambda$ dans le vide, éclairant deux fentes d'Young $S_1$ et $S_2$ distantes de $a = 1,0\text{ mm}$. L'écran d'observation est placé à une distance $D = 1,5\text{ m}$ des fentes.

### Question 1
Établir l'expression de la différence de marche (ou chemin optique) $\delta$ en un point $M$ de l'écran, repéré par son abscisse $x$ dans le plan de l'écran (l'origine étant sur l'axe optique). On fera l'approximation des conditions de Gauss ($x \ll D$ et $a \ll D$).
Correction: **
La différence de marche entre les chemins $S_2M$ et $S_1M$ s'écrit :
$$\delta = S_2M - S_1M$$
Géométriquement, en plaçant les sources en $S_1(0, -a/2)$ et $S_2(0, +a/2)$ et le point $M$ en $(D, x)$ :
$$S_2M^2 = D^én + \left(x - \frac{a}{2}\right)^2 = D^2 + x^2 - xa + \frac{a^2}{4}$$
$$S_1M^2 = D^2 + \left(x + \frac{a}{2}\right)^2 = D^2 + x^2 + xa + \frac{a^2}{4}$$

En factorisant par $D^2$ et en utilisant l'approximation $(1 + u)^{1/2} \approx 1 + \frac{1}{2}u$ valable car $x \ll D$ et $a \ll D$ :
$$S_2M = D \left(1 + \frac{x^2 - xa}{D^2}\right)^{1/2} \approx D \left(1 + \frac{x^2 - xa}{2D^2}\right)$$
De même :
$$S_1M \approx D \left(1 + \frac{x^2 + xa}{2D^2}\right)$$

Par différence :
$$\delta = S_2M - S_1M \approx \frac{xa}{D}$$

---

### Question 2
En déduire l'expression de l'interfrange $i$ et calculer sa valeur numérique pour $\lambda = 589\text{ nm}$ (raie du sodium).
Correction: **
L'intensité lumineuse présente des maxima (franges brillantes) lorsque la différence de marche est un multiple entier de la longueur d'onde :
$$\delta = k\lambda \implies \frac{x_k a}{D} = k\lambda \implies x_k = k \frac{\lambda D}{a}$$

L'interfrange $i$, défini comme la distance entre deux franges brillantes consécutives ($i = x_{k+1} - x_k$), s'exprime par :
$$i = \frac{\lambda D}{a}$$

Application numérique :
$$i = \frac{589 \times 10^{-9}\text{ m} \times 1,5\text{ m}}{1,0 \times 10^{-3}\text{ m}} = 8,835 \times 10^{-4}\text{ m} = 0,88\text{ mm}$$

---

## Partie II : Effet Doppler en acoustique et application biologique

Un chauve-souris émet un cri ultrasonore à la fréquence $f_e = 40\text{ kHz}$. Elle se déplace à la vitesse $v_c = 10\text{ m}\cdot\text{s}^{-1}$ en direction d'un obstacle fixe. La célérité du son dans l'air est notée $c = 340\text{ m}\cdot\text{s}^{-1}$.

### Question 3
Rappeler l'expression de la fréquence $f_r$ perçue par l'obstacle (considéré comme un récepteur fixe), puis la fréquence $f'$ du signal écho renvoyé vers la chauve-souris (l'obstacle devient source en mouvement).
Correction: **
1. **Première étape (source en mouvement, récepteur fixe - l'obstacle) :**
   La fréquence perçue par l'obstacle est :
   $$f_r = f_e \frac{c}{c - v_c}$$

2. **Seconde étape (source en mouvement - l'obstacle agissant comme récepteur-émetteur - et récepteur en mouvement - la chauve-souris) :**
   L'obstacle renvoie le signal à la même fréquence $f_r$. La chauve-souris, se déplaçant à la vitesse $v_c$ vers cette source fixe apparente, perçoit une fréquence $f'$ :
   $$f' = f_r \frac{c + v_c}{c}$$

En combinant les deux expressions :
$$f' = f_e \left(\frac{c}{c - v_c}\right) \left(\frac{c + v_c}{c}\right) = f_e \frac{c + v_c}{c - v_c}$$

---

### Question 4
Calculer la fréquence $f'$ perçue par la chauve-souris. Calculer le débattement fréquentiel $\Delta f = f' - f_e$.
Correction: **
Application numérique :
$$f' = 40 \times 10^3 \times \frac{340 + 10}{340 - 10} = 40 \times 10^3 \times \frac{350}{330} \approx 42,42\text{ kHz}$$

Le débattement fréquentiel est :
$$\Delta f = f' - f_e = 42,42\text{ kHz} - 40\text{ kHz} = 2,42\text{ kHz}$$

---

## Analyse critique des résultats

### Question 5
1. Discuter la valabilité de l'approximation $x \ll D$ dans la Partie I si l'on observe le phénomène sur une largeur totale de $10\text{ cm}$.
2. Commenter l'ordre de grandeur du débattement fréquentiel obtenu à la Partie II dans le cadre de l'écholocation.
Correction: **
1. **Analyse critique Partie I :**
   L'écran s'étend sur $10\text{ cm}$, donc $x$ varie au maximum entre $-5\text{ cm}$ et $+5\text{ cm}$. Avec $D = 1,5\text{ m}$, le rapport $x/D$ maximal est de $\frac{0,05}{1,5} \approx 0,033$ (soit $3,3\%$). L'approximation $x \ll D$ (ou $x/D \ll 1$) est donc tout à fait licite, l'erreur commise en négligeant les termes d'ordre supérieur dans le développement limité étant infime (de l'ordre de $(3,3\%)^2 \approx 0,1\%$).
   
2. **Analyse critique Partie II :**
   Un débattement de $\Delta f = 2,42\text{ kHz}$ pour une fréquence porteuse de $40\text{ kHz}$ est tout à fait mesurable par le système auditif et neurologique de la chauve-souris. Cela lui permet d'évaluer avec une grande précision non seulement la présence d'un obstacle, mais aussi sa vitesse relative par rapport à elle, ce qui est crucial pour la capture d'proies en vol.