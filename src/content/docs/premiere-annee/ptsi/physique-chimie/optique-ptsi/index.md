---
title: 'Cours : Optique géométrique'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PTSI.'
---

## 📌 1. Définitions & Cadre d'étude

L'optique géométrique étudie la propagation de la lumière dans le cadre de l'approximation des milieux continus et isotropes, lorsque les dimensions des obstacles et des diaphragmes rencontrés sont grandes devant la longueur d'onde $\lambda$ du rayonnement ($\lambda \to 0$).

*   **Rayon lumineux :** Modèle géométrique orthogonal aux surfaces d'onde (surfaces d'égale phase). Il représente la direction du transport d'énergie lumineuse.
*   **Indice optique du milieu :** Grandeur sans dimension $n$ définie par :
    $$n = \frac{c}{v}$$
    où $c \approx 3,00 \times 10^8 \text{ m}\cdot\text{s}^{-1}$ est la celerite de la lumiere dans le vide et $v$ la vitesse de phase de la lumiere dans le milieu considéré ($n \ge 1$).
*   **Stigmatisme :** Un système optique est dit stigmatique pour un point source $A$ si tous les rayons issus de $A$ convergent après traversée du système en un unique point $A'$ (image).
*   **Aplanétisme :** Propriété pour un système optique d'associer un objet plan, perpendiculaire à l'axe optique, à une image plane, elle aussi perpendiculaire à l'axe optique.
*   **Conditions de Gauss :** Conditions d'approximation paraxiale permettant d'obtenir le stigmatisme et l'aplanétisme approchés :
    1. Les rayons incidents font un angle faible avec l'axe optique.
    2. Les rayons incidents coupent l'axe optique (ou les plans de référence) au voisinage immédiat du sommet du système.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Lois de Snell-Descartes (Formulation vectorielle)

Soit un dioptre séparant deux milieux d'indices respectifs $n_1$ et $n_2$. Soit $\vec{u}_i$ le vecteur unitaire porté par le rayon incident, $\vec{u}_r$ le vecteur unitaire porté par le rayon réfracté et $\vec{n}$ le vecteur unitaire normal au dioptre orienté du milieu 1 vers le milieu 2.

1.  **Loi de la réfraction :**
    $$n_1 (\vec{u}_i \land \vec{n}) = n_2 (\vec{u}_r \land \vec{n})$$
    En projection, cela se traduit par la relation classique :
    $$n_1 \sin(i_1) = n_2 \sin(i_2)$$

2.  **Réflexion totale :**
    Si $n_1 > n_2$, il existe un angle limite d'incidence $i_{lim} = \arcsin\left(\frac{n_2}{n_1}\right)$ au-delà duquel aucun rayon réfracté n'existe (le rayon est totalement réfléchi).

---

### Démonstration : Relation de conjugaison avec origine au sommet pour un dioptre sphérique

Soit un dioptre sphérique de sommet $S$, de centre $C$, de rayon $R = \overline{SC}$ et séparant deux milieux d'indices $n_1$ et $n_2$. Plaçons-nous dans les conditions de Gauss.

1.  **Chemin optique et principe de Fermat :**
    Le chemin optique $\mathcal{L}$ entre $A$ et $A'$ le long d'un rayon passant par un point d'impact $M$ du dioptre est stationnaire.

2.  **Trigonométrie paraxiale :**
    Soit $H$ le projeté orthogonal de $M$ sur l'axe optique. Dans les conditions de Gauss, $H$ est confondu avec $S$ au premier ordre.
    Les angles d'incidence $i_1$ et de réfraction $i_2$ s'expriment à l'aide des angles géométriques du triangle $\triangle AMC$ :
    $$i_1 \approx \alpha + \beta \quad \text{et} \quad i_2 \approx \beta + \gamma$$
    où $\alpha = (\vec{SA}, \vec{SM})$, $\beta = (\vec{SC}, \vec{SM})$ et $\gamma = (\vec{SA'}, \vec{SM})$.

3.  **Application de Snell-Descartes linéarisé :**
    $$n_1 i_1 = n_2 i_2 \implies n_1(\alpha + \beta) = n_2(\beta + \gamma)$$
    En exprimant ces angles par leurs approximations algébriques paraxiales :
    $$\alpha \approx \frac{\overline{HM}}{\overline{SA}} \approx \frac{\overline{SM}}{\overline{SA}}, \quad \beta \approx \frac{\overline{SM}}{\overline{SC}}, \quad \gamma \approx \frac{\overline{SM}}{\overline{SA'}}$$
    En remplaçant et en simplifiant par $\overline{SM}$ :
    $$\frac{n_1}{\overline{SA}} + \frac{n_2 - n_1}{\overline{SC}} = \frac{n_2}{\overline{SA'}}$$

C'est la **relation de conjugaison du dioptre sphérique avec origine au sommet**.

---

## 💡 3. Méthodes de calcul & Algorithmes

### Méthode générale de résolution d'un problème d'optique géométrique

1.  **Étape 1 : Schéma qualitatif**
    Tracer l'axe optique, placer le système, identifier la nature des lentilles (convergentes / divergentes) et tracer les rayons particuliers (rayon passant par le centre optique non dévié, rayon parallèle émergeant par le foyer image, etc.).

2.  **Étape 2 : Choix des relations de conjugaison**
    *   Origine au sommet $S$ (dioptre ou miroir).
    *   Origine au centre optique $C$ (lentilles minces dans les conditions de Gauss) :
        $$\frac{1}{\overline{OA'}} - \frac{1}{\overline{OA}} = \frac{1}{f'}$$
    *   Origine aux foyers $F$ et $F'$ (Formule de Newton) :
        $$\overline{FA} \cdot \overline{F'A'} = -f'^2$$

3.  **Étape 3 : Calcul du grandissement transversal $\gamma_t$**
    $$ \gamma_t = \frac{\overline{A'B'}}{\overline{AB}} = \frac{\overline{OA'}}{\overline{OA}} $$
    *   Si $\gamma_t > 0$, l'image est droite (sens de l'objet).
    *   Si $\gamma_t < 0$, l'image est renversée.

---

## ⚠️ 4. Pièges classiques aux Concours

*   **Attention aux conventions de signe algébriques :** Toutes les grandeurs géométriques sur l'axe optique sont algébriques. $\overline{OA}$ est positif si le point $O$ est avant $A$ dans le sens de propagation de la lumière (convention standard PTSI : la lumière va de gauche à droite).
*   **Confusion entre foyers objet et image :** Pour une lentille convergente, $F'$ est à droite ($f' > 0$) et $F$ est à sa symétrique à gauche ($f < 0$). Ne jamais écrire $f = f'$ sans précaution de signe.
*   **Nature réelle ou virtuelle d'un objet/image :**
    *   Objet *réel* : situé en amont du premier dioptre ($\overline{OA} < 0$).
    *   Objet *virtuel* : situé en aval du premier dioptre ($\overline{OA} > 0$).
    *   Image *réelle* : interceptée par un écran, en aval du système ($\overline{OA'} > 0$).
    *   Image *virtuelle* : observable à l'œil mais non projetable, en amont du système ($\overline{OA'} < 0$).
*   **Oubli des conditions de Gauss :** Utiliser la formule des lentilles minces hors conditions de Gauss (grands objets ou grands angles) conduit à des aberrations géométriques (sphérique, chromatique, astigmatisme) non modélisées par le cours de PTSI.