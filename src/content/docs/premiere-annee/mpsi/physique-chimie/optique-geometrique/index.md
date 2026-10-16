---
title: 'Cours : Optique géométrique'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

L'optique géométrique est une approximation de l'optique ondulatoire valable lorsque les dimensions des obstacles et des diaphragmes traversés par la lumière sont très grandes devant la longueur d'onde $\lambda$ du rayonnement dans le milieu considéré ($\lambda \to 0$).

### 1.1. Modèle du rayon lumineux et espace lumineux
*   **Rayon lumineux :** Courbe géométrique tangente en chacun de ses points au vecteur $\vec{u}$ porté par le vecteur d'onde (ou direction de propagation de l'énergie lumineuse).
*   **Indice optique :** Pour un milieu transparent, homogène et isotrope, l'indice optique $n$ est défini par :
    $$n = \frac{c}{v}$$
    où $c$ est la celerité de la lumière dans le vide et $v$ la vitesse de phase de la lumière dans le milieu. Par définition, $n \ge 1$ (avec $n = 1$ dans le vide).
*   **Chemin optique :** Le chemin optique $\mathcal{L}(A, B)$ le long d'une courbe $\mathcal{C}$ reliant un point $A$ à un point $B$ est l'intégrale :
    $$\mathcal{L}(A, B) = \int_{A}^{B} n(M) \, \mathrm{d}s$$
    Il s'exprime en mètres ($\text{m}$).

### 1.2. Lois de Snell-Descartes
Soit un dioptre séparant deux milieux d'indices respectifs $n_1$ (côté incident) et $n_2$ (côté réfracté). Soit $\vec{N}$ le vecteur normal au dioptre orienté du milieu 1 vers le milieu 2, $\vec{I}$ le vecteur unitaire porté par le rayon incident et $\vec{R}$ (resp. $\vec{R}'$) le vecteur unitaire porté par le rayon réfléchi (resp. réfracté).

1.  **Première loi (plans d'incidence) :** Le rayon réfléchi et le rayon réfracté appartiennent au plan d'incidence (plan défini par le rayon incident et la normale $\vec{N}$).
2.  **Deuxième loi (réflexion) :** L'angle de réflexion $\theta_r$ est égal à l'opposé de l'angle d'incidence $\theta_1$ :
    $$\theta_r = -\theta_1$$
3.  **Troisième loi (réfraction) :** En notant $\theta_1$ l'angle d'incidence et $\theta_2$ l'angle de réfraction par rapport à la normale :
    $$n_1 \sin(\theta_1) = n_2 \sin(\theta_2)$$

### 1.3. Stigmatisme et aplanétisme
*   **Stigmatisme rigoureux :** Un système optique est dit stigmatique pour un point source $A$ si tous les rayons émis par $A$ convergent, après traversée du système, en un même point $A'$ (image).
*   **Aplanétisme :** Qualité d'un système optique à donner d'un objet plan perpendiculaire à l'axe optique une image également plane et perpendiculaire à cet axe.
*   **Conditions de Gauss :** Conditions d'approximation paraxiale. Un système est utilisé dans les conditions de Gauss si les rayons incidents font des angles petits avec l'axe optique et proviennent de points peu éloignés de cet axe. Dans cette approximation, on pose $\sin(\theta) \approx \theta$, $\tan(\theta) \approx \theta$ et $\cos(\theta) \approx 1$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Principe de Fermat
**Énoncé :** Le chemin optique $\mathcal{L}(A, B)$ pris par la lumière pour aller d'un point $A$ à un point $B$ est extremum (le plus souvent un minimum) par rapport à tous les chemins voisins reliant $A$ et $B$.
$$\delta \int_{A}^{B} n(M) \, \mathrm{d}s = 0$$

### 2.2. Démonstration : Lois de Snell-Descartes par le principe de Fermat
Considérons un dioptre plan séparant le milieu 1 ($n_1$) du milieu 2 ($n_2$). Plaçons l'origine du repère au point d'incidence $I$. Soit $A(-a, y_A)$ dans le milieu 1 et $B(b, y_B)$ dans le milieu 2. Le point d'incidence $I$ a pour coordonnées $(0, y)$.

Le chemin optique total est :
$$\mathcal{L} = n_1 \sqrt{a^2 + y^2} + n_2 \sqrt{b^2 + (y_B - y)^2}$$

Appliquons le principe de Fermat : le chemin optique est extremum par rapport à la position $y$ du point $I$. Dérivons $\mathcal{L}$ par rapport à $y$ :
$$\frac{\mathrm{d}\mathcal{L}}{\mathrm{d}y} = n_1 \frac{y}{\sqrt{a^2 + y^2}} - n_2 \frac{y_B - y}{\sqrt{b^2 + (y_B - y)^2}} = 0$$

En géométrie, les rapports $\frac{y}{\sqrt{a^2 + y^2}}$ et $\frac{y_B - y}{\sqrt{b^2 + (y_B - y)^2}}$ correspondent respectivement aux sinus des angles d'incidence $\theta_1$ et de réfraction $\theta_2$ par rapport à la normale. On obtient donc immédiatement :
$$n_1 \sin(\theta_1) = n_2 \sin(\theta_2)$$
*C.Q.F.D.*

### 2.3. Relations de conjugaison des systèmes centrés (dans les conditions de Gauss)

*   **Miroir plan :** Stigmatisme rigoureux pour tout point de l'espace.
    $$\overline{SA'} = -\overline{SA}$$
*   **Dioptre sphérique de sommet $S$ et de rayon $R = \overline{SC}$ :**
    *   *Formule de conjugaison avec origine au sommet $S$ :*
        $$\frac{n_2}{\overline{SA'}} - \frac{n_1}{\overline{SA}} = \frac{n_2 - n_1}{\overline{SC}}$$
    *   *Formule de conjugaison avec origine aux foyers $F$ et $F'$ :*
        $$\overline{FA} \cdot \overline{F'A'} = f \cdot f' = -\frac{n_1 n_2 R^2}{(n_2 - n_1)^2}$$
        avec $f = \overline{SF} = -\frac{n_1 R}{n_2 - n_1}$ et $f' = \overline{SF'} = \frac{n_2 R}{n_2 - n_1}$.
*   **Lentille mince (dans l'approximation des lentilles minces de sommets $S_1 \approx S_2 \approx O$) :**
    *   *Formule de Descartes (origine au centre optique $O$) :*
        $$\frac{1}{\overline{OA'}} - \frac{1}{\overline{OA}} = \frac{1}{\partial} = \frac{1}{f'}$$
        où $C$ est la vergence de la lentille exprimée en dioptres ($\delta$ ou $\text{m}^{-1}$).
    *   *Formule de Newton (origine aux foyers $F$ et $F'$) :*
        $$\overline{FA} \cdot \overline{F'A'} = -f^{\prime 2}$$

---

## 💡 3. Méthodes classiques de résolution

### 3.1. Construction géométrique des images (Rayons remarquables)
Pour trouver l'image $A'B'$ d'un objet $AB$ à travers une lentille mince (ou un système centré), l'utilisation de trois rayons particuliers issus du sommet de l'objet $B$ est requise :
1.  **Rayon parallèle à l'axe optique :** Émerge de la lentille en passant par le foyer image $F'$.
2.  **Rayon passant par le centre optique $O$ :** Traverse la lentille sans être dévié (propriété des lentilles minces).
3.  **Rayon passant par le foyer objet $F$ :** Émerge de la lentille parallèlement à l'axe optique.

### 3.2. Méthode algébrique (Utilisation des relations de conjugaison)
1.  **Étape 1 :** Identifier la nature du système (lentille convergente/divergente, miroir, dioptre) et poser clairement les grandeurs algébriques fournies par l'énoncé en respectant le sens de comptage (généralement de gauche à droite dans le sens de propagation de la lumière).
2.  **Étape 2 :** Écrire la relation de conjugaison adaptée (Descartes ou Newton).
3.  **Étape 3 :** Isoler l'inconnue recherchée (souvent $\overline{OA'}$ ou le grandissement transversal $\gamma$).
4.  **Étape 4 :** Calculer le grandissement transversal $\gamma$ défini par :
    $$\gamma = \frac{\overline{A'B'}}{\overline{AB}} = \frac{\overline{OA'}}{\overline{OA}}$$
    *   Si $\gamma > 0$, l'image est droite par rapport à l'objet.
    *   Si $\gamma < 0$, l'image est renversée.
    *   Si $|\gamma| > 1$, l'image est plus grande que l'objet (agrandissement).

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Oubli de la nature algébrique des grandeurs :** Les distances $\overline{OA}$, $\overline{OA'}$, $f'$ etc. sont des *mesures algébriques*. Une lentille divergente a une distance focale image $f' < 0$ (et une vergence négative). Une erreur de signe sur $f'$ fausse l'intégralité du calcul de conjugaison.
2.  **Confusion entre stigmatisme rigoureux et approché :** Un dioptre sphérique n'est stigmatique *que* pour ses foyers de Weierstrass et dans l'approximation de Gauss (stigmatisme approché). Ne jamais affirmer qu'un système sphérique est rigoureusement stigmatique pour tout point objet sur l'axe.
3.  **Conditions de Gauss non vérifiées :** L'utilisation des formules de conjugaison des lentilles minces et des miroirs plans/sphériques est strictement subordonnée à l'application des conditions de Gauss (rayons paraxiaux). Mentionner explicitement l'hypothèse de travail lors d'une copie de concours.
4.  **Erreur d'unité sur la vergence :** La vergence $C = \frac{1}{f'}$ s'exprime en dioptres ($\delta$) **uniquement** si la distance focale $f'$ est exprimée en mètres ($\text{m}$).