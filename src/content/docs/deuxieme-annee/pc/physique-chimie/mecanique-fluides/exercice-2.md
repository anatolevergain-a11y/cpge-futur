---
title: 'Exercice 2 : Théorème de Bernoulli'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude de l'écoulement dans un venturi et analyse critique du théorème de Bernoulli

**Filière :** PC  
**Matière :** Physique-Chimie  
Chapitre: ** Mécanique des fluides  
**Thème :** Théorème de Bernoulli, conservation de la masse et analyse critique des limites du modèle.

---

## I. Énoncé

On s'intéresse à l'écoulement permanent, incompressible et stationnaire d'un fluide parfait (masse volumique $\rho$) dans une canalisation horizontale de section circulaire variable, appelée tube de Venturi. 

Le dispositif est constitué de trois zones :
1. Une zone amont (1) de grande section $S_1 = \pi R_1^2$, où le fluide a une vitesse uniforme $v_1$ et subit une pression $P_1$.
2. Une zone de col (2) de plus petite section $S_2 = \pi R_2^2$ (avec $R_2 < R_1$), où le fluide a une vitesse $v_2$ et une pression $P_2$.
3. Un tube en U contenant un manomètre à mercure (masse volumique $\rho_m$) est branché entre les sections (1) et (2) pour mesurer la différence de pression $\Delta P = P_1 - P_2$.

L'objectif du problème est d'exprimer le débit volumique du fluide en fonction de la dénivellation lue sur le manomètre, puis de discuter rigoureusement de la validité des approximations réalisées.

---

## II. Questions

1. **Conservation de la masse :** En écrivant le régime stationnaire et l'incompressibilité du fluide, établir la relation liant les vitesses $v_1$, $v_2$ et les sections $S_1$, $S_2$.
2. **Application du théorème de Bernoulli :** En déduisant l'hypothèse d'un fluide parfait et non visqueux, appliquer le théorème de Bernoulli le long d'une ligne de courant entre les points (1) et (2). Exprimer la différence de pression $\Delta P = P_1 - P_2$ en fonction de $\rho$, $v_1$ et du rapport des sections $n = S_1 / S_2$.
3. **Mesure manométrique :** Établir la relation entre $\Delta P$, la masse volumique du mercure $\rho_m$, celle du fluide $\rho$, et la hauteur de dénivellation $h$ lue sur le manomètre.
4. **Débit volumique :** En déduire l'expression du débit volumique $D_v$ en fonction de $S_2$, $n$, $\rho$, $\rho_m$ et $h$.
5. **Analyse critique et limites du modèle :** 
   - Citer les hypothèses physiques fortes formulées pour aboutir à cette expression.
   - Discuter qualitativement de l'impact de la viscosité du fluide réel sur la mesure du débit par ce dispositif. À quel endroit précis de l'installation les effets dissipatifs se font-ils le plus ressentir ?

---

## III. Pistes et indications

* **Question 1 :** Pensez au bilan de débit massique à travers une surface fermée fixe (régime permanent).
* **Question 2 :** Le champ de pesanteur est uniforme, mais la canalisation est horizontale. Quel terme s'annule dans l'équation de Bernoulli ?
* **Question 3 :** Écritez l'hydrostatique dans les branches du tube en U en faisant attention à l'interface fluide/mercure.
* **Question 5 :** Pour la critique, pensez aux nombres sans dimension caractéristiques de la dynamique des fluides (comme le nombre de Reynolds) et aux pertes singulières associées aux changements brusques de section.

---

## IV. Corrigé pas à pas

### 1. Conservation de la masse (Équation de continuité)
Puisque le fluide est incompressible ($\rho = \text{constante}$) et que l'écoulement est stationnaire, le débit massique se conserve à travers toute section droite de la canalisation :
$$D_m = \rho_1 S_1 v_1 = \rho_2 S_2 v_2 \implies S_1 v_1 = S_2 v_2$$
On en déduit la vitesse au col :
$$v_2 = \frac{S_1}{S_2} v_1 = n v_1 \quad \text{avec} \quad n = \frac{S_1}{S_2} > 1$$

### 2. Théorème de Bernoulli
Le fluide est supposé parfait ($\eta = 0$) et l'écoulement est irrotationnel (ou on se place le long d'une même ligne de courant). Le théorème de Bernoulli s'écrit entre (1) et (2) :
$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g z_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g z_2$$
La canalisation étant horizontale, $z_1 = z_2$. L'équation se simplifie :
$$P_1 - P_2 = \frac{1}{2}\rho (v_2^2 - v_1^2)$$
En injectant $v_2 = n v_1$ :
$$\Delta P = P_1 - P_2 = \frac{1}{2}\rho v_1^2 (n^2 - 1) = \frac{1}{2}\rho v_2^2 \left(1 - \frac{1}{n^2}\right)$$

### 3. Mesure manométrique
Soit $z_0$ l'altitude de l'interface inférieure du mercure dans la branche reliée au col. Par la relation de la statique des fluides dans les colonnes statiques du manomètre :
* Pression au niveau de l'interface (côté amont) : $P_{\text{interface, 1}} = P_1 + \rho g (H + h)$
* Pression au niveau de l'interface (côté col) : $P_{\text{interface, 2}} = P_2 + \rho g H + \rho_m g h$

Par égalité des pressions à la même altitude dans le manomètre :
$$P_1 + \rho g h = P_2 + \rho_m g h \implies \Delta P = P_1 - P_2 = (\rho_m - \rho) g h$$

### 4. Expression du débit volumique
En combinant les résultats des questions 2 et 3 :
$$(\rho_m - \rho) g h = \frac{1}{2}\rho v_2^2 \left(1 - \frac{1}{n^2}\right)$$
On isole la vitesse $v_2$ :
$$v_2 = \sqrt{\frac{2 (\rho_m - \rho) g h}{\rho (1 - n^{-2})}}$$
Le débit volumique $D_v$ est donné par $D_v = S_2 v_2$ :
$$D_v = S_2 \sqrt{\frac{2 (\rho_m - \rho) g h}{\rho \left(1 - \frac{S_2^2}{S_1^2}\right)}}$$

---

### 5. Analyse critique et limites du modèle (Rigueur et Nuance)

L'application aveugle du modèle du fluide parfait conduit à des erreurs expérimentales majeures si l'on ne prend pas en compte les limites suivantes :

1. **Hypothèse de fluide parfait (Viscosité nulle) :** 
   En réalité, tout fluide possède une viscosité dynamique $\eta > 0$. Des forces de cisaillement s'exercent le long des parois de la canalisation, entraînant des **pertes de charge régulières** (par frottement visqueux) et des **pertes de charge singulières** (au niveau de la brusque contraction de la section 1 vers la section 2, et surtout lors de l'élargissement brusque en aval). 
   *Conséquence :* La pression mesurée $P_2$ est légèrement plus élevée que celle prédite par Bernoulli, car une partie de l'énergie mécanique est dissipée en énergie thermique (chaleur). Le débit réel est donc systématiquement *inférieur* au débit théorique calculé ($D_{v,\text{réel}} = C_d D_v$ où $C_d < 1$ est le coefficient de débit).

2. **Régime d'écoulement et Nombre de Reynolds :**
   Le modèle suppose implicitement un profil de vitesse uniforme (ou uniformément réparti) dans les sections. En pratique, le profil est laminaire de type parabolique (Poiseuille) ou turbulent (profil aplati avec une sous-couche limite visqueuse). Si le nombre de Reynolds $\text{Re} = \frac{\rho v D}{\eta}$ est trop faible, les effets visqueux dominent. S'il est trop élevé, des phénomènes de décollement de la couche limite surviennent au niveau du col, invalidant l'hypothèse de l'écoulement stationnaire irrotationnel.

3. **Stationnarité et cavitation :**
   Si la vitesse au col $v_2$ devient très importante, la pression statique $P_2$ peut chuter en dessous de la pression de vapeur saturante $P_{\text{sat}}(T)$ du fluide. Il se produit alors un phénomène de **cavitation** (formation de bulles de vapeur), extrêmement destructeur pour les parois et modifiant complètement la compressibilité apparente du milieu. Le modèle d'incompressibilité stricte s'effondre alors localement.