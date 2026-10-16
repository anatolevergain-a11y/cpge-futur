---
title: 'Exercice 2 : Microscope et association de lentilles'
description: 'Problème d entraînement type concours pour BCPST.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le microscope optique est un instrument fondamental en biologie cellulaire. Il permet d'observer des objets de très petites dimensions (cellules, bactéries, organelles) en formant une image agrandie de ceux-ci. 

On modélise un microscope standard par l'association coaxiale de deux systèmes centrés convergents de grandissement important :
1. **L'objectif** : une lentille mince convergente $L_1$ de centre optique $O_1$ et de distance focale image $f'_1 > 0$.
2. **L'oculaire** : une lentille mince convergente $L_2$ de centre optique $O_2$ et de distance focale image $f'_2 > 0$.

L'intervalle optique du microscope, noté $\Delta$, est défini par la distance algébrique $\Delta = \overline{F'_1 O_2}$. Pour un microscope standard réglé pour un oeil normal, $\Delta > 0$.

On note :
- $A$ l'objet biologique plan, perpendiculaire à l'axe optique, situé en avant de $O_1$.
- $A_1 B_1$ l'image intermédiaire réelle et renversée formée par l'objectif $L_1$.
- $A' B'$ l'image définitive virtuelle observée par l'œil, située au punctum remotum (infini) de l'œil normal pour un confort d'observation optimal.

---

### ❓ Questions progressives

1. **Modélisation de l'objectif**
   Établir la relation de conjugaison avec origine au foyer pour l'objectif $L_1$. Exprimer la position de l'image intermédiaire $A_1$ en fonction de $f'_1$ et de la distance algébrique $\overline{F_1 A}$ (on posera $\overline{F_1 A} = -x$ avec $x > 0$). En déduire le grandissement transversal de l'objectif $\gamma_1 = \overline{A_1 B_1} / \overline{AB}$ en fonction de $f'_1$ et de $\Delta$.

2. **Rôle et position de l'oculaire**
   L'oculaire $L_2$ est positionné de telle sorte que l'image définitive $A' B'$ se forme à l'infini. 
   En déduire la position du plan focal object de $L_2$ par rapport à l'image intermédiaire $A_1 B_1$. Exprimer la position de l'oculaire (donnée par la distance $\Delta = \overline{F'_1 O_2}$) en fonction de $f'_1$ et $f'_2$ dans le cadre de ce réglage (dit "standard").

3. **Grossissement commercial**
   On définit le grossissement commercial $G_c$ du microscope par le rapport :
   $$G_c = \frac{\alpha'}{\theta}$$
   où $\alpha'$ est le diamètre apparent de l'image définitive vue à travers l'instrument, et $\theta$ le diamètre apparent de l'objet observé à l'œil nu à la distance minimale de vision distincte $d_m = \text{25 cm}$.
   Exprimer $G_c$ en fonction de $f'_1$, $f'_2$, $\Delta$ et $d_m$.

4. **Application numérique et analyse critique**
   - On donne : $f'_1 = \text{5,0 mm}$, $f'_2 = \text{2,5 cm}$, $\Delta = \text{16 cm}$ et $d_m = \text{25 cm}$. Calculer la valeur numérique du grossissement commercial $G_c$.
   - **Analyse critique du modèle** : Pourquoi l'utilisation de lentilles minces simples (non achromatiques) pose-t-elle un problème majeur en microscopie à fort grossissement ? Citer brièvement le phénomène physique en cause et la solution technologique apportée.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1** : Utilisez la relation de Descartes avec origine au foyer $\overline{F_1 A} \cdot \overline{F'_1 A_1} = -f_1^{\prime 2}$. Attention aux signes algébriques rigoureux. Pour le grandissement, utilisez le théorème de Thalès ou la formule de conjugaison newtonienne $\gamma_1 = -\frac{f'_1}{\overline{F_1 A}} = -\frac{\overline{F'_1 A_1}}{f'_1}$.
- **Question 2** : Pour qu'un objet vu à travers une lentille convergente donne une image à l'infini, l'objet doit impérativement se situer dans le plan focal objet de cette lentille.
- **Question 3** : Exprimez les angles $\alpha'$ et $\theta$ pour de petits angles ($\tan \alpha' \approx \alpha'$), en sachant que l'objet nu est placé à la distance $d_m$.
- **Question 4** : Veillez à l'homogénéité des unités (convertir toutes les distances en mètres ou centimètres de manière cohérente).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Modélisation de l'objectif
La relation de conjugaison de Newton (avec origines aux foyers $F_1$ et $F'_1$) pour la lentille $L_1$ s'écrit :
$$\overline{F_1 A} \cdot \overline{F'_1 A_1} = -f_1^{\prime 2}$$

En posant $\overline{F_1 A} = -x$ (avec $x > 0$), on obtient :
$$(-x) \cdot \overline{F'_1 A_1} = -f_1^{\prime 2} \implies \overline{F'_1 A_1} = \frac{f_1^{\prime 2}}{x}$$

Par définition, l'intervalle optique est $\Delta = \overline{F'_1 O_2}$. L'image intermédiaire $A_1$ se forme dans le plan focal objet de l'oculaire $L_2$ (pour un réglage à l'infini). La position de $A_1$ fixe donc la position de $O_2$. 
Le grandissement transversal de l'objectif $\gamma_1$ s'exprime dans le système de Newton par :
$$\gamma_1 = -\frac{\overline{F'_1 A_1}}{f'_1}$$

Or, l'image intermédiaire $A_1$ étant proche du foyer $F'_1$, et l'intervalle optique $\Delta$ représentant la distance $F'_1 O_2$, la distance de $A_1$ à $F'_1$ est de l'ordre de $\Delta$ (si l'on néglige la distance $F'_2 O_2$). Plus rigoureusement, la position de $A_1$ vérifie $\overline{F'_1 A_1} \approx \Delta$ dans de nombreux exercices simplifiés, ou l'on exprime $\gamma_1$ directement à partir de la position de l'objet. 
Exprimons $\gamma_1$ en fonction de $f'_1$ et $\Delta$ en considérant $\overline{F'_1 A_1} = \Delta$ (car $A_1$ est le foyer objet de $L_2$ dans le réglage à l'infini) :
$$\gamma_1 = -\frac{\Delta}{f'_1}$$

#### 2. Rôle et position de l'oculaire
L'image définitive $A'B'$ doit se former à l'infini ($A' \to \infty$) pour que l'œil observe sans accommodation (au punctum remotum). 
Pour qu'une lentille convergente donne une image à l'infini, son objet (ici l'image intermédiaire $A_1 B_1$) doit être placé dans son plan focal objet $F_2$. 

Par conséquent, le point $A_1$ est confondu avec $F_2$. 
La distance entre les deux foyers $F'_1$ et $F_2$ vaut l'intervalle optique $\Delta$. 
Puisque $F_2$ est à une distance $f'_2$ en avant de $O_2$ (soit $\overline{F_2 O_2} = f'_2$), la relation de chasles sur l'axe optique donne :
$$\Delta = \overline{F'_1 O_2} = \overline{F'_1 F_2} + \overline{F_2 O_2}$$
Cependant, dans la définition usuelle où $\Delta = \overline{F'_1 O_2}$, et sachant que $F_2$ est confondu avec $A_1$, la distance séparant les deux lentilles (l'entre-lentilles $e = \overline{O_1 O_2}$) s'exprime par :
$$e = \overline{O_1 O_2} = \overline{O_1 F'_1} + \overline{F'_1 O_2} = f'_1 + \Delta$$
Et puisque $A_1$ est confondu avec $F_2$, on a $\overline{F'_1 A_1} = \Delta - f'_2$.

#### 3. Grossissement commercial
- **Diamètre apparent $\theta$ de l'objet à l'œil nu** :
  L'objet de taille $\overline{AB}$ est observé à la distance minimale de vision distincte $d_m = \text{25 cm}$. Pour un petit objet, l'angle sous lequel il est vu s'écrit (en valeur absolue) :
  $$\theta \approx \tan \theta = \frac{AB}{d_m}$$

- **Diamètre apparent $\alpha'$ de l'image définitive** :
  L'oculaire joue le rôle d'une loupe. L'image intermédiaire $A_1 B_1$ joue le rôle d'objet pour l'oculaire. Le diamètre apparent de l'image vue à travers l'oculaire est :
  $$\alpha' \approx \tan \alpha' = \frac{\overline{A_1 B_1}}{f'_2}$$

Le grossissement commercial $G_c$ devient alors :
$$G_c = \frac{\alpha'}{\theta} = \frac{\overline{A_1 B_1} / f'_2}{AB / d_m} = \left( \frac{\overline{A_1 B_1}}{AB} \right) \cdot \frac{d_m}{f'_2}$$

En reconnaissant le grandissement transversal de l'objectif $\gamma_1 = -\frac{\Delta}{f'_1}$ (en valeur absolue $|\gamma_1| = \frac{\Delta}{f'_1}$), on obtient l'expression finale du grossissement commercial :
$$G_c = \frac{\Delta \cdot d_m}{f'_1 f'_2}$$

#### 4. Application numérique et analyse critique
- **Calcul numérique** :
  - $f'_1 = \text{5,0 mm} = \text{5,0} \times 10^{-3} \, \text{m}$
  - $f'_2 = \text{2,5 cm} = \text{2,5} \times 10^{-2} \, \text{m}$
  - $\Delta = \text{16 cm} = \text{0,16} \, \text{m}$
  - $d_m = \text{25 cm} = \text{0,25} \, \text{m}$

  Application numérique :
  $$G_c = \frac{0,16 \times 0,25}{5,0 \times 10^{-3} \times 2,5 \times 10^{-2}} = \frac{0,04}{1,25 \times 10^{-4}} = 320$$
  Le grossissement commercial du microscope est donc $G_c = 320$ (sans unité).

- **Analyse critique du modèle** :
  L'utilisation de lentilles minces simples (singlets) est confrontée à des limitations physiques majeures en microscopie :
  1. **Le chromatisme** : L'indice de refraction du verre dépend de la longueur d'onde ($\text{n}(\lambda)$). Les différentes couleurs de la lumière blanche ne convergent pas au même foyer, ce qui entraîne des franges colorées inésthétiques et un flou sur les images ($\text{aberration chromatique}$).
  2. **Les aberrations géométriques** (sphériques, astigmatisme) altèrent la stigmatique rigoureuse pour des ouvertures grands angles.
  
  *Solution technologique* : On remplace les lentilles simples par des **objectifs achromatiques ou apochromatiques** constitués de plusieurs dioptres associés (doubles ou triplets collés de verres d'indices différents) pour corriger ces défauts et garantir une haute résolution.