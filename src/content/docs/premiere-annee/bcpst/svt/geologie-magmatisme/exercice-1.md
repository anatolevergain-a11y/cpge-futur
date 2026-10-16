---
title: 'Exercice 1 : Cristallisation fractionnée et série de Bowen'
description: 'Problème d entraînement type concours pour BCPST.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de l'étude de la différenciation magmatique au sein des chambres magmatiques crustales, on s'intéresse au refroidissement d'un magma initial hydraté de composition globale intermédiaire (type dioritique/andésitique). Lors de ce refroidissement isobare, les minéraux cristallisent de manière séquentielle selon la célèbre **série de réaction de Bowen**, modifiant continuellement la composition chimique du liquide résiduel (phénomène de cristallisation fractionnée).

On étudie un réservoir magmatique d'un volume initial $V_0 = 1000\,\text{km}^3$ de magma total. Pour simplifier la modélisation thermodynamique et géochimique, on se focalise sur l'évolution de la concentration d'un élément trace, le nickel ($\text{Ni}^{2+}$), dont le coefficient de partage minéral-liquide $D_{\text{Ni}}$ varie selon les phases cristallisantes majeures. 

La loi de Rayleigh régissant la cristallisation fractionnée s'exprime par :
$$C_L = C_0 \cdot f^{(D - 1)}$$

Où :
- $C_L$ est la concentration de l'élément dans le liquide résiduel.
- $C_0$ est la concentration initiale dans le magma ($C_0(\text{Ni}) = 150\,\mu\text{g}\cdot\text{g}^{-1}$).
- $f$ est la fraction massique de liquide restant ($0 < f \le 1$).
- $D$ est le coefficient de partage global pondéré de l'élément entre les minéraux extraits et le liquide.

---

### ❓ Questions progressives (incluant des questions d'analyse critique)

1. **Rappel et analyse minéralogique :** Rappeler succinctement la distinction entre la branche discontinue et la branche continue de la série de Bowen lors du refroidissement d'un magma silicaté. Préciser quel est le premier minéral ferromagnésien à cristalliser sur la branche discontinue et quel est le minéral plagioclase le plus calcique formé précocement sur la branche continue.
2. **Application de la loi de Rayleigh :** On suppose que la cristallisation est dominée successivement par deux assemblages minéraux :
   - Phase 1 ($1{,}0 \ge f > 0{,}5$) : cristallisation d'olivine et de pyroxènes avec un coefficient de partage global $D_1 = 5{,}0$.
   - Phase 2 ($0{,}5 \ge f > 0{,}1$) : cristallisation de plagioclases sodiques et d'amphiboles avec un coefficient de partage global $D_2 = 0{,}5$.
   
   Calculer la concentration en nickel $C_L$ du liquide résiduel lorsque la fraction de liquide atteint $f = 0{,}5$, puis lorsqu'elle atteint $f = 0{,}1$ (en considérant $C_0$ comme la concentration au début de chaque phase ou en appliquant la continuité, préciser la démarche).
3. **Analyse critique des limites du modèle :** Le modèle de Rayleigh suppose une séparation parfaite et instantanée des cristaux formés (par gravité ou compaction) et un liquide parfaitement homogène. 
   - Discuter de la validité de ces hypothèses dans une chambre magmatique réelle de grande dimension (viscosité du magma, convection, taux de cristallisation).
   - Quelles seraient les conséquences géologiques d'un piégeage partiel des cristaux (cristallisation à l'équilibre ou *equilibrium crystallization*) sur l'évolution chimique du liquide résiduel ?

---

### 💡 Pistes & Indications

- **Q1 :** Pensez à l'ordre de fusion/cristallisation inverse (les minéraux à haute température de fusion cristallisent en premier). La série discontinue concerne les silicates ferromagnésiens (olivine $\rightarrow$ pyroxène $\rightarrow$ amphibole $\rightarrow$ biotite), la continue concerne les plagioclases (du pôle anorthite Ca vers albite Na).
- **Q2 :** Appliquez directement la formule littérale pour $f = 0{,}5$ avec $D = D_1$. Pour la seconde étape, attention à bien réinitialiser la concentration de départ à $f = 0{,}5$ (notée $C_{0,2}$) qui correspond au $C_L$ calculé à la fin de la première phase.
- **Q3 :** Intégrez des notions de rhéologie (loi de Stokes, viscosité des magmas acides vs basiques) et de dynamique de la chambre magmatique.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Rappel et analyse minéralogique
La série de Bowen décrit la séquence de cristallisation des minéraux d'un magma au cours de son refroidissement :
- **Branche discontinue :** Elle schémattise la formation de silicates ferromagnésiens de plus en plus polymérisés. Le premier minéral à cristalliser (à haute température, environ $1200\,^\circ\text{C}$) est l'**olivine** (silicate isolé, n'nesosilicate), suivie des pyroxènes (inosilicate à chaîne simple), puis des amphiboles (chaîne double) et de la biotite (phyllosilicate).
- **Branche continue :** Elle concerne les plagioclases (feldspaths plagioclases). Le premier minéral formé est le pôle calcique pur, l'**anorthite** ($\text{CaAl}_2\text{Si}_2\text{O}_8$), qui réagit continuellement avec le liquide pour s'enrichir progressivement en sodium (pôle albite $\text{NaAlSi}_3\text{O}_8$) si l'équilibre est maintenu.

#### 2. Application de la loi de Rayleigh
* **Phase 1 ($f$ variant de $1{,}0$ à $0{,}5$, avec $D_1 = 5{,}0$ et $C_0 = 150\,\mu\text{g}\cdot\text{g}^{-1}$) :**
  $$C_L(0{,}5) = C_0 \cdot (0{,}5)^{(5{,}0 - 1)}$$
  $$C_L(0{,}5) = 150 \cdot (0{,}5)^4 = 150 \cdot 0{,}0625 = 9{,}375\,\mu\text{g}\cdot\text{g}^{-1}$$
  *Interprétation :* Le nickel est un élément compatible ($D > 1$) qui s'incorpore préférentiellement dans les premiers minéraux formés (olivine, pyroxènes). Le liquide résiduel s'appauvrit donc très rapidement en nickel.

* **Phase 2 ($f$ variant de $0{,}5$ à $0{,}1$, avec $D_2 = 0{,}5$ et $C_{0,2} = 9{,}375\,\mu\text{g}\cdot\text{g}^{-1}$) :**
  La concentration initiale pour cette seconde étape est $C_{0,2} = 9{,}375\,\mu\text{g}\cdot\text{g}^{-1}$. La fraction relative de liquide par rapport au début de cette phase s'écrit $f' = \frac{0{,}1}{0{,}5} = 0{,}2$.
  $$C_L(0{,}1) = C_{0,2} \cdot (f')^{(D_2 - 1)} = 9{,}375 \cdot (0{,}2)^{(0{,}5 - 1)} = 9{,}375 \cdot (0{,}2)^{-0{,}5}$$
  Sachant que $(0{,}2)^{-0{,}5} = \left(\frac{1}{5}\right)^{-1/2} = \sqrt{5} \approx 2{,}236$ :
  $$C_L(0{,}1) \approx 9{,}375 \cdot 2{,}236 \approx 20{,}96\,\mu\text{g}\cdot\text{g}^{-1}$$
  *Interprétation :* Durant cette phase, $D_2 = 0{,}5 < 1$, l'élément devient incompatible. Il se concentre dans le liquide résiduel, ce qui explique le léger rebond de la concentration en fin de cristallisation.

#### 3. Analyse critique des limites du modèle
- **Limites des hypothèses de Rayleigh :** 
  1. *Séparation parfaite :* Le modèle suppose une extraction immédiate des cristaux (par décantation gravitationnelle selon la loi de Stokes ou par expulsion par compaction). Or, dans un magma felsique (visqueux), la vitesse de sédimentation des petits cristaux est minime. 
  2. *Homogénéité du liquide :* Le modèle suppose un mélange parfait et instantané du liquide résiduel, ce qui néglige les gradients de concentration locaux (fronts de solidification, dynamiques convectives complexes).
- **Conséquences d'un piégeage partiel (cristallisation à l'équilibre) :**
  Si les minéraux restent en contact avec le liquide, ils réagissent continuellement avec lui (rééquilibrage diffusionnel). La composition du liquide évolue beaucoup moins drastiquement : les éléments compatibles ne s'épuisent pas aussi vite, et les tendances d'enrichissement extrême en éléments incompatibles (type granitoïdes tardifs ou pegmatites) sont atténuées, voire empêchées.