---
title: 'Exercice 2 : Réseaux par réflexion'
description: 'Problème d entraînement type concours.'
---

# Problème Guidé : Étude d'un réseau par réflexion en configuration autocollimante

*Ce problème aborde l'étude classique d'un réseau par réflexion, un dispositif incontournable en physique expérimentale et en optique instrumentale, fréquemment rencontré aux concours (type Centrale-Supélec ou Mines-Ponts).*

---

## 1. Introduction et position du problème

On considère un réseau par réflexion, plan, constitué de $N$ traits parallèles équidistants gravés sur une surface plane. Le pas du réseau (distance entre deux traits consécutifs) est noté $a$. Le réseau est éclairé sous incidence normale par une source lumineuse polychromique, et l'on s'intéresse à l'observation du spectre dans le plan focal d'une lentille convergente.

Données numériques et notations :
* Pas du réseau : $a = 2,00 \, \mu\text{m}$
* Nombre de traits illuminés : $N = 1000$
* Longueur d'onde de travail dans le visible : $\lambda_0 = 589 \, \text{nm}$ (raie du sodium)

---

## 2. Étude géométrique et condition d'interférence constructive

### Question 1
Soit un réseau par réflexion éclairé par une onde plane monochromatique de longueur d'onde $\lambda$. L'incidence du faisceau incident par rapport à la normale au réseau est notée $i$. Un rayon diffracté émerge sous un angle $i'$ (mesuré algébriquement par rapport à la normale).

Établir la différence de marche $\delta$ entre deux rayons consécutifs diffractés par le réseau.

#### Corrigé pas à pas :
1. **Construction géométrique :** Considérons deux traits consécutifs $P_1$ et $P_2$ du réseau, distants de $a$. Le front d'onde incident fait un angle $i$ avec le plan du réseau. Le chemin optique supplémentaire parcouru par le rayon incident atteignant $P_2$ par rapport à $P_1$ est $AH = -a \sin i$.
2. Après réflexion et diffraction dans la direction $i'$, le chemin optique supplémentaire parcouru par le rayon issu de $P_2$ pour rattraper celui issu de $P_1$ est $P_2H' = a \sin i'$.
3. **Expression de la différence de marche :** 
   $$\delta = (P_1 P_2)_{\text{différentiel}} = a (\sin i' - \sin i)$$

### Question 2
En déduire la condition d'interférence constructive (ou formule des réseaux) donnant les angles de diffraction $i'_p$ pour un ordre d'interférence $p$ entier.

#### Corrigé pas à pas :
1. L'interférence est constructive si la différence de marche est un multiple entier de la longueur d'onde $\lambda$ :
   $$\delta = p\lambda \quad \text{avec} \quad p \in \mathbb{Z}$$
2. On en déduit la **formule fondamentale des réseaux par réflexion** :
   $$a (\sin i' - \sin i) = p\lambda$$

---

## 3. Configuration autocollimante

### Question 3
On place le réseau en incidence dite **autocollimante** (ou de Littrow), ce qui signifie que le faisceau diffracté d'ordre $p$ repasse exactement sur lui-même (le faisceau revient en arrière). Quelle est la relation entre l'angle d'incidence $i$ et l'angle de diffraction $i'$ dans cette configuration ?

#### Corrigé pas à pas :
1. Par définition, en autocollimation, le faisceau est renvoyé dans sa direction d'origine.
2. Les rayons repartent en sens inverse, donc l'angle de diffraction est l'opposé de l'angle d'incidence :
   $$i' = -i$$
3. En reportant dans la formule des réseaux :
   $$a (\sin(-i) - \sin i) = -2a \sin i = p\lambda \implies 2a \sin i = -p\lambda$$
   En considérant les valeurs absolues ou en orientant adéquatement les angles, on retient classiquement :
   $$2a \sin i = |p|\lambda$$

---

## 4. Analyse spectrale et pouvoir de résolution

### Question 4
Le réseau est éclairé sous cette configuration autocollimante par une source émettant un doublet du sodium (constitué de deux longueurs d'onde $\lambda_1 = 589,0 \, \text{nm}$ et $\lambda_2 = 589,6 \, \text{nm}$). 
Calculer l'angle d'incidence $i$ nécessaire pour observer la raie $\lambda_0 = 589 \, \text{nm}$ à l'ordre $p = 1$.

#### Corrigé pas à pas :
1. On applique la formule de l'autocollimation pour $p = 1$ :
   $$\sin i = \frac{p\lambda_0}{2a}$$
2. A.N. : 
   $$\sin i = \frac{1 \times 589 \times 10^{-9}}{2 \times 2,00 \times 10^{-6}} = \frac{589 \times 10^{-9}}{4,00 \times 10^{-6}} = 0,14725$$
3. On en déduit l'angle d'incidence :
   $$i = \arcsin(0,14725) \approx 0,148 \, \text{rad} \approx 8,46^\circ$$

### Question 5
Rappeler l'expression théorique du pouvoir de résolution $\mathcal{R} = \frac{\lambda}{\Delta \lambda}$ d'un réseau en fonction du nombre de traits illuminés $N$ et de l'ordre d'interférence $p$. Calculer sa valeur numérique pour $N = 1000$ et $p = 1$. Le doublet du sodium peut-il être résolu dans ces conditions ?

#### Corrigé pas à pas :
1. Le critère de Rayleigh appliqué à un réseau donne pour le pouvoir de résolution :
   $$\mathcal{R} = \frac{\lambda}{\Delta \lambda} = |p| \cdot N$$
2. A.N. : 
   $$\mathcal{R} = 1 \times 1000 = 1000$$
3. Calculons le pouvoir de résolution requis pour séparer le doublet du sodium :
   $$\left(\frac{\lambda}{\Delta \lambda}\right)_{\text{requis}} = \frac{589 \, \text{nm}}{589,6 - 589,0 \, \text{nm}} = \frac{589}{0,6} \approx 982$$
4. Puisque $\mathcal{R}_{\text{exp}} (1000) > \mathcal{R}_{\text{requis}} (982)$, **le doublet est résolu** à l'ordre $p = 1$.

---

## 5. Analyse critique des résultats

### Question 6
Discuter des limites de ce dispositif expérimental. Que se passerait-il si l'on augmentait significativement l'ordre $p$ de diffraction ? Quel est l'impact pratique d'augmenter le nombre de traits $N$ ?

#### Corrigé pas à pas :
* **Influence de l'ordre $p$ :** 
  Augmenter l'ordre $p$ permet d'augmenter linéairement le pouvoir de résolution ($\mathcal{R} = |p|N$), ce qui est très favorable pour séparer des raies spectrales très proches. Cependant, cela implique d'augmenter l'angle d'incidence $i$ (car $\sin i = |p|\lambda / (2a)$), ce qui se heurte à une limite physique : $\sin i \le 1$, soit $|p| \le \frac{2a}{\lambda}$. De plus, aux grands angles, les aberrations géométriques de la optique d'accompagnement (lentilles) dégradent la qualité de l'image, et l'efficacité énergétique du réseau diminue (le flux lumineux se répartit sur un plus grand nombre d'ordres).
* **Influence du nombre de traits $N$ :**
  Augmenter $N$ (en élargissant le faisceau incident sur le réseau) améliore directement le pouvoir de résolution et affine les pics d'interférence (les raies spectrales deviennent plus fines, car la largeur angulaire d'un pic principal est inversement proportionnelle à $N$). En pratique, cela nécessite des réseaux de grande dimension de très haute qualité optique (exigence sur la régularité du pas $a$ meilleure que $\lambda / 10$).