---
title: 'Exercice 1 : Interféromètre de Michelson'
description: 'Problème d entraînement type concours pour PSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

L'interféromètre de Michelson est un dispositif optique incontournable des concours de CPGE. Il permet de diviser une onde lumineuse en deux trajets distincts, de les faire cheminer sur des distances variables, puis de les faire interférer. 

Dans ce problème, on étudie le fonctionnement d'un interféromètre de Michelson réglé en **lame d'air**, éclairé par une source lumineuse étendue quasi-monochromatique de longueur d'onde $\lambda_0$ dans le vide. On s'intéresse à l'influence de la nature de la source (monochromatique vs doublet) sur le contraste des franges d'interférence, grandeur essentielle en métrologie optique.

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Description du dispositif et marche des rayons :** 
   Schématiser brièvement le principe de l'interféromètre de Michelson en mode lame d'air. Définir la source, la séparatrice (compensatrice incluse), les miroirs $M_1$ et $M_2$, ainsi que le miroir fictif $M'_2$ (image de $M_2$ à travers la séparatrice). Exprimer la différence de marche $\delta$ au point $P$ du plan focal de la lentille d'observation en fonction de l'incidence $i$ des rayons et de la distance $e$ entre le miroir $M_1$ et le miroir $M'_2$.

2. **Calcul de l'intensité lumineuse (Source monochromatique) :**
   En déduire l'expression de l'intensité lumineuse $I(i)$ reçue sur l'écran en fonction de l'intensité maximale $I_0$, de la différence de marche $\delta$, et de la longueur d'onde $\lambda_0$. Quelle est la forme des franges d'interférence observées dans le plan focal ?

3. **Ordre d'interférence et localisation :**
   Définir l'ordre d'interférence $p$. Exprimer $p$ en fonction de $e$, $\lambda_0$ et de l'angle d'incidence $i$. Pour $e > 0$, les anneaux observés au centre (incidence normale $i=0$) sont-ils brillants ou sombres si $e = 5{,}0\,\text{mm}$ et $\lambda_0 = 589\,\text{nm}$ ? Préciser le calcul de l'ordre d'interférence central $p_0$.

4. **Analyse critique et limitation du modèle (Brouillage des franges) :**
   On remplace la source monochromatique par une source présentant deux longueurs d'onde $\lambda_1$ et $\lambda_2$ très proches, centrées autour de $\lambda_0$ (tel que le doublet du sodium avec $\lambda_1 \approx 589{,}0\,\text{nm}$ et $\lambda_2 = 589{,}6\,\text{nm}$). 
   Donner l'expression de l'intensité totale $I_{\text{tot}}(i)$ reçue sur l'écran. 
   Montrer que cette intensité peut se mettre sous la forme :
   $$I_{\text{tot}}(i) = 2I_0 \left[ 1 + \cos\left(2\pi \frac{\delta}{\lambda_0}\right) \cos\left(\pi \delta \Delta\left(\frac{1}{\lambda}\right)\right) \right]$$
   où l'on explicitera $\Delta(1/\lambda)$. 
   En déduire la condition sur la différence de marche $\delta$ pour laquelle le contraste des franges s'annule pour la première fois. Calculer cette distance $e_{\min}$.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Pensez à utiliser le miroir équivalent $M'_2$. La lame d'air équivalente est comprise entre $M_1$ et $M_2'$. La formule de la différence de marche pour une lame d'air est $\delta = 2e \cos i$ (en omettant le déphasage à la réflexion si les traitements des miroirs et de la séparatrice sont parfaits et identiques).
- **Question 2 :** L'intensité s'obtient via la formule de Fresnel pour l'interférence à deux onde : $I = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos(\Delta \phi)$.
- **Question 3 :** L'ordre d'interférence est par définition $p = \frac{\delta}{\lambda_0}$. Pour $i=0$, $p_0 = \frac{2e}{\lambda_0}$. Prenez la partie entière pour analyser l'état (brillant ou sombre) du centre.
- **Question 4 :** Utilisez les formules de trigonométrie pour transformer la somme de deux cosinus en un produit. Le terme de modulation (en cosinus de grande longueur d'onde) joue le rôle d'une enveloppe dont l'annulation définit la disparition du contraste.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Marche des rayons et différence de marche
Le Michelson en lame d'air est constitué d'une source étendue, d'une séparatrice (avec sa compensatrice pour assurer l'isochronisme), d'un miroir mobile $M_1$ et d'un miroir fixe $M_2$. 
En optique géométrique, on remplace l'ensemble par la source, la séparatrice, $M_1$ et l'image $M'_2$ de $M_2$ à travers la face semi-réfléchissante de la séparatrice. 
La lame d'air est l'espace compris entre $M_1$ et $M'_2$, d'épaisseur $e$.

Pour un rayon incident faisant un angle $i$ avec la normale aux miroirs, la différence de marche $\delta$ entre les deux rayons issus du même point source et interferant à l'infini (ou dans le plan focal d'une lentille convergente) s'écrit géométriquement :
$$\delta = 2e \cos i$$
*(Note : On néglige les retards ou déphasages supplémentaires si la séparatrice est parfaitement compensée et si les réflexions se font toutes sur des milieux d'indices identiques).*

#### 2. Intensité lumineuse (Source monochromatique)
L'intensité lumineuse résultante de l'interférence de deux ondes d'intensités égales $I_1 = I_2 = I_0 / 2$ s'exprime par la formule de Fresnel :
$$I(i) = I_0 \left(1 + \cos(\Delta \phi)\right)$$
Le déphasage $\Delta \phi$ entre les deux ondes est lié à la différence de marche par $\Delta \phi = \frac{2\pi}{\lambda_0} \delta$. Ainsi :
$$I(i) = 2I_0 \cos^2\left(\frac{\pi \delta}{\lambda_0}\right) = I_0 \left[1 + \cos\left(\frac{4\pi e \cos i}{\lambda_0}\right)\right]$$
**Forme des franges :** L'intensité ne dépend que de l'angle d'incidence $i$. Les franges d'égale inclinaison sont donc des anneaux concentriques centrés sur le foyer principal image de la lentille d'observation.

#### 3. Ordre d'interférence et application numérique
L'ordre d'interférence $p$ est défini par :
$$p = \frac{\delta}{\lambda_0} = \frac{2e \cos i}{\lambda_0}$$
Au centre du figure d'interférence, l'incidence est normale ($i = 0$), donc $\cos i = 1$. L'ordre d'interférence central $p_0$ vaut :
$$p_0 = \frac{2e}{\ue}$$
*Application numérique :*
$$e = 5{,}0\,\text{mm} = 5{,}0 \times 10^{-3}\,\text{m}$$
$$\lambda_0 = 589\,\text{nm} = 589 \times 10^{-9}\,\text{m}$$
$$p_0 = \frac{2 \times 5{,}0 \times 10^{-3}}{589 \times 10^{-9}} \approx 16977{,}9$$
L'ordre d'interférence $p_0$ n'étant pas entier, le centre de la figure n'est ni totalement brillant ni totalement sombre. Plus précisément, en posant $p_0 = N + \epsilon$ avec $N$ entier et $\epsilon \in [0, 1[$, le centre est à une intensité intermédiaire. Ici $16977{,}9 = 16977 + 0{,}9$, le centre est proche d'un maximum (brillant) mais légèrement décalé vers le sombre car $\epsilon$ est proche de $1$ (fraction d'interférence).

#### 4. Analyse critique : Brouillage des franges avec un doublet
Si la source émet deux longueurs d'onde $\lambda_1$ et $\lambda_2$ (avec des intensités égales $I_0/2$ pour chaque longueur d'onde), les deux systèmes d'franges sont incohérents entre eux. L'intensité totale est la somme des intensités :
$$I_{\text{tot}}(i) = I_{\lambda_1}(i) + I_{\lambda_2}(i)$$
$$I_{\text{tot}}(i) = I_0 \left[ 1 + \cos\left(\frac{2\pi \delta}{\lambda_1}\right) \right] + I_0 \left[ 1 + \cos\left(\frac{2\pi \delta}{\lambda_2}\right) \right]$$
$$I_{\text{tot}}(i) = 2I_0 + I_0 \left[ \cos\left(2\pi \frac{\delta}{\lambda_1}\right) + \cos\left(2\pi \frac{\delta}{\lambda_2}\right) \right]$$
En utilisant la formule trigonométrique $\cos(a) + \cos(b) = 2 \cos\left(\frac{a+b}{2}\right)\cos\left(\frac{a-b}{2}\right)$, et en posant $\lambda_0 \approx \frac{\lambda_1 + \lambda_2}{2}$ et $\Delta\left(\frac{1}{\lambda}\right) = \frac{1}{\lambda_1} - \frac{1}{\lambda_2}$, on obtient :
$$I_{\text{tot}}(i) = 2I_0 \left[ 1 + \cos\left(2\pi \frac{\delta}{\lambda_0}\right) \cos\left(\pi \delta \Delta\left(\frac{1}{\lambda}\right)\right) \right]$$

**Condition d'annulation du contraste :**
Le terme $\cos\left(\pi \delta \Delta\left(\frac{1}{\lambda}\right)\right)$ joue le rôle d'une modulation d'amplitude (enveloppe). Le contraste s'annule lorsque cette enveloppe s'annule pour la première fois, c'est-à-dire pour le plus petit $\delta > 0$ tel que :
$$\pi \delta_{\min} \Delta\left(\frac{1}{\lambda}\right) = \frac{\pi}{2}$$
Soit :
$$\delta_{\min} = \frac{1}{2 \Delta(1/\lambda)} = \frac{1}{2 \left(\frac{1}{\lambda_1} - \frac{1}{\lambda_2}\right)} = \frac{\lambda_1 \lambda_2}{2(\lambda_2 - \lambda_1)}$$
Or, pour un interféromètre réglé en lame d'air au centre ($i=0$), $\delta = 2e$. L'épaisseur minimale $e_{\min}$ pour laquelle le contraste s'annule est donc :
$$e_{\min} = \frac{\delta_{\min}}{2} = \frac{\lambda_1 \lambda_2}{4(\lambda_2 - \lambda_1)}$$

*Application numérique (Doublet du sodium) :*
- $\lambda_1 = 589{,}0\,\text{nm} = 589{,}0 \times 10^{-9}\,\text{m}$
- $\lambda_2 = 589{,}6\,\text{nm} = 589{,}6 \times 10^{-9}\,\text{m}$
- $\lambda_2 - \lambda_1 = 0{,}6\,\text{nm} = 0{,}6 \times 10^{-9}\,\text{m}$

$$e_{\min} = \frac{589{,}0 \times 10^{-9} \times 589{,}6 \times 10^{-9}}{4 \times 0{,}6 \times 10^{-9}} \approx \frac{3{,}47 \times 10^{-13}}{2{,}4 \times 10^{-9}} \approx 1{,}44 \times 10^{-4}\,\text{m} = 0{,}144\,\text{mm}$$

*Conclusion critique :* Dès que l'on déplace le miroir de $144\,\mu\text{m}$, les systèmes d'anneaux associés à $\lambda_1$ et $\lambda_2$ se décalent au point de coïncider des creux avec des sommets, entraînant une disparition totale apparente des franges (brouillage). C'est une limite fondamentale de la cohérence temporelle des sources réelles non strictement monochromatiques.