---
title: 'Exercice 1 : Traction, compression et cisaillement'
description: 'Problème d entraînement type concours officiel.'
---

# Problème guidé : Étude d'un système d'attache industrielle soumis à des sollicitations combinées

## Énoncé

Dans le cadre de l'étude d'une grue de levage mobile, on s'intéresse à la liaison pivot d'un vérin hydraulique avec le châssis. Le système étudié est modélisé par une chape supportant une goulotte de fixation. 

L'objectif de ce problème est de dimensionner les éléments critiques de cette liaison soumis à des efforts de traction, de compression et de cisaillement, puis d'analyser la pertinence des résultats au regard des hypothèses de la Résistance des Matériaux (RDM).

### Données géométriques et matérielles :
*   **Axe (chape et goulotte) :**
    *   Diamètre de l'axe : $d = 20\text{ mm}$
    *   Matériau de l'axe : Acier $E24$
    *   Limite élastique du matériau : $R_{e} = 240\text{ MPa}$
    *   Coefficient de sécurité exigé : $s = 2,5$
*   **Bielle de traction/compression :**
    *   Section rectangulaire de largeur $b = 40\text{ mm}$ et d'épaisseur $e = 10\text{ mm}$
    *   Longueur utile : $L = 500\text{ mm}$
    *   Module d'Young de l'acier : $E = 210\text{ GPa}$

---

## Questions

1.  **Modélisation et Torseur de Cohérence**
    *   **Q1.** Isoler la bielle et déterminer, par application du Principe Fondamental de la Statique (PFS), l'effort normal $N$ agissant dans la section courante de la bielle lorsque celle-ci transmet un effort de traction maximal de $F = 45\text{ kN}$.
    *   **Q2.** Exprimer la contrainte normale $\sigma$ dans la section courante de la bielle en fonction de $N$, $b$ et $e$, puis calculer sa valeur numérique.

2.  **Vérification de la résistance en traction**
    *   **Q3.** Rapponier le critère de résistance élastique de Tresca ou de Von Mises appliqué à la traction simple. En déduire la contrainte admissible $\sigma_{\text{adm}}$ pour l'acier $E24$.
    *   **Q4.** Conclure quant à la sécurité de la bielle vis-à-vis du risque de plastification.

3.  **Étude du cisaillement de l'axe**
    *   **Q5.** L'axe d'articulation est soumis à un effort tranchant résultant de l'action de la bielle. En supposant l'effort réparti sur deux plans de cisaillement (liaison double cisaillement), calculer l'effort tranchant $T$ dans chaque section cisaillée si l'effort total transmis est $F = 45\text{ kN}$.
    *   **Q6.** Calculer la contrainte tangentielle moyenne $\tau$ dans l'axe. Sachant que pour l'acier, la contrainte limite au cisaillement est estimée à $\tau_{\text{lim}} \approx 0,5 \cdot R_e$, l'axe résiste-t-il au cisaillement avec le même coefficient de sécurité $s = 2,5$ ?

4.  **Analyse critique des limites du modèle (Indispensable pour les concours)**
    *   **Q7.** Le modèle de la RDM utilisé ici repose sur l'hypothèse de Navier-Bernoulli et des Saint-Venant. Citer au moins **trois limites** ou phénomènes physiques non pris en compte dans ce calcul analytique simple qui pourraient conduire à la ruine prématurée du système en service réel.

---

## Pistes de résolution

*   **Piste pour Q1 & Q2 :** Pensez à utiliser la méthode des sections après avoir isolé la bielle en équilibre sous l'action de deux forces opposées (bielle en équilibre statique).
*   **Piste pour Q5 & Q6 :** Pour le double cisaillement, imaginez l'axe traversant trois blocs (un au milieu, deux sur les côtés). L'effort appliqué au milieu se sépare en deux flux égaux vers les côtés.
*   **Piste pour Q7 :** Réfléchissez aux concentrations de contraintes (rayons de raccordement, perçages), aux effets locaux de contact (pression de Hertz) et aux phénomènes d'instabilité (flambement pour la compression).

---

## Corrigé pas à pas

### 1. Modélisation et Torseur de Cohérence
*   **Q1.** La bielle est soumise à deux forces à ses extrémités (actions du vérin et du bâti). Pour être en équilibre statique, ces deux forces sont colinéaires à l'axe de la bielle, égales en norme ($F = 45\text{ kN}$) et de sens opposés. L'effort normal dans la section courante est donc :
    $$N = F = 45\text{ kN} = 45 \cdot 10^3\text{ N}$$

*   **Q2.** La surface de la section droite de la bielle est $S = b \times e = 40 \times 10 = 400\text{ mm}^2 = 4 \cdot 10^{-4}\text{ m}^2$.
    La contrainte normale est uniformément répartie (hypothèse de Navier-Bernoulli) :
    $$\sigma = \frac{N}{S} = \frac{45 \cdot 10^3}{4 \cdot 10^{-4}} = 1,125 \cdot 10^8\text{ Pa} = 112,5\text{ MPa}$$

### 2. Vérification de la résistance en traction
*   **Q3.** Le critère de Von Mises ou de Tresca en traction simple conduit à comparer la contrainte maximale à la contrainte admissible :
    $$\sigma_{\text{adm}} = \frac{R_e}{s} = \frac{240}{2,5} = 96\text{ MPa}$$

*   **Q4.** On constate que $\sigma = 112,5\text{ MPa} > \sigma_{\text{adm}} = 96\text{ MPa}$. 
Conclusion: ** La contrainte effective dépasse la contrainte admissible. Le critère de résistance n'est pas validé ; la bielle risque de se déformer plastiquement. Il faut augmenter la section (par exemple, augmenter l'épaisseur $e$ ou la largeur $b$).

### 3. Étude du cisaillement de l'axe
*   **Q5.** En double cisaillement, l'effort total $F = 45\text{ kN}$ est repris par deux sections distinctes de l'axe. L'effort tranchant $T$ dans une section est donc :
    $$T = \frac{F}{2} = \frac{45}{2} = 22,5\text{ kN} = 22,5 \cdot 10^3\text{ N}$$

*   **Q6.** La section de l'axe est circulaire de diamètre $d = 20\text{ mm}$. Son aire est :
    $$S_{\text{axe}} = \frac{\pi d^2}{4} = \frac{\pi \cdot (0,020)^2}{4} \approx 3,1416 \cdot 10^{-4}\text{ m}^2$$
    La contrainte tangentielle moyenne est :
    $$\tau = \frac{T}{S_{\text{axe}}} = \frac{22,5 \cdot 10^3}{3,1416 \cdot 10^{-4}} \approx 71,6\text{ MPa}$$
    La résistance admissible au cisaillement est :
    $$\tau_{\text{adm}} = \frac{0,5 \cdot R_e}{s} = \frac{0,5 \cdot 240}{2,5} = 48\text{ MPa}$$
    Puisque $\tau = 71,6\text{ MPa} > \tau_{\text{adm}} = 48\text{ MPa}$, **l'axe ne résiste pas au cisaillement**.

---

### 4. Analyse critique des limites du modèle (Esprit Concours)

Les calculs précédents reposent sur des hypothèses simplificatrices de la RDM qui comportent plusieurs limites fondamentales :

1.  **Concentration de contraintes (Effets d'entaille) :** Le calcul de cisaillement de l'axe et de traction de la bielle suppose des répartitions de contraintes homogènes. Or, au niveau des alésages recevant l'axe, il existe de fortes concentrations de contraintes géométriques (effet d'entaille). Les pics de contrainte locaux peuvent être 2 à 3 fois supérieurs à la valeur nominale calculée par $\frac{N}{S}$.
2.  **Pression de contact (Pressions hertziennes) :** Le modèle néglige la distribution réelle du contact entre l'axe cylindrique et l'alésage de la bielle. Ce contact génère des pressions locales très élevées (contraintes de Hertz) pouvant mener à du matage (poinçonnement plastique local de la matière).
3.  **Hypothèse de Saint-Venant et perturbations aux extrémités :** Les formules $\sigma = \frac{N}{S}$ ne sont rigoureusement valables qu'à une distance suffisante des zones d'application des efforts (changement de géométrie, liaisons). Au voisinage des chapes, le champ de contrainte est tridimensionnel et non unidimensionnel.
4.  *(Bonus)* **Risque de Flambement :** Si la bielle venait à être soumise à un effort de *compression* de même intensité ($45\text{ kN}$), sa slenderness (élancement) liée à sa longueur ($L = 500\text{ mm}$) entrainerait un risque majeur de ruine par instabilité élastique (flambement) bien avant d'atteindre la limite élastique $R_e$.