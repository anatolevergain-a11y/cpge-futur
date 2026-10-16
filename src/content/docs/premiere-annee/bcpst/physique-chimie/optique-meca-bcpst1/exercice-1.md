---
title: 'Exercice 1 : Instruments d optique'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude d'un dispositif optique combiné (Lunette afocale et système dispersif)

*Ce problème aborde l'étude classique d'un instrument d'optique (la lunette astronomique) associée à un système dispersif. Ce type de sujet exige une rigueur absolue dans l'application des formules de conjugaison, le respect des conditions de Gauss et une analyse critique des ordres de grandeur.*

---

## I. Étude d'une lunette astronomique afocale

On considère un modèle simplifié de lunette astronomique constitué de deux lentilles minces convergentes :
*   L'**objectif**, de centre optique $O_1$ et de distance focale fémorale $f'_1 = O_1F'_1 = +50\text{ cm}$.
*   L'**oculaire**, de centre optique $O_2$ et de distance focale fémorale $f'_2 = O_2F'_2 = +5\text{ cm}$.

L'axe optique commun est orienté dans le sens de la propagation de la lumière. Le système est dit **afocal**.

### Question 1
> *Définir la condition pour qu'un système centré constitué de deux lentilles soit afocal. Quelle est la position de l'image intermédiaire $A_1B_1$ d'un objet $AB$ situé à l'infini ? En déduire la position du foyer image de l'association.*

**Éléments de correction :**
Un système centré est afocal si son foyer image est rejeté à l'infini (tout comme son foyer objet). Un faisceau de rayons parallèles incident ressort du système sous forme d'un faisceau de rayons parallèles.

Pour un objet $AB$ situé à l'infini ($\alpha$ étant l'angle sous lequel il est vu depuis l'entrée), les rayons incidents sont parallèles et inclinés d'un angle $\alpha$ par rapport à l'axe optique.
*   L'objectif $L_1$ donne de cet objet une image intermédiaire réelle $A_1B_1$ située dans son plan focal image. On a donc :
    $$\overline{O_1F'_1} = f'_1 = +50\text{ cm}$$
*   Pour que le système soit afocal, il faut que cette image intermédiaire $A_1B_1$ se situe dans le plan focal objet de l'oculaire $L_2$. La distance entre les deux lentilles (l'intervalle optique) est donc :
    $$\Delta = O_1O_2 = f'_1 + f'_2 = 50 + 5 = 55\text{ cm}$$
    Le foyer objet de $L_2$ confondu avec $F'_1$ permet d'obtenir une image définitive $A'B'$ rejetée à l'infini.

---

### Question 2
> *Exprimer le grandissement transversal $y_t$ du système global, puis le grossissement $G$ de la lunette en fonction des distances focales $f'_1$ et $f'_2$. Calculer la valeur numérique de $G$.*

**Éléments de correction :**
*   Le grandissement transversal $y_t$ relie la taille de l'image définitive à celle de l'objet initial. L'objet étant à l'infini, la notion de grandissement transversal n'est pas directement pertinente (l'image l'est aussi). On définit plutôt le **grossissement** $G$, qui est le rapport entre le diamètre apparent de l'image vue à travers l'instrument ($\alpha'$) et le diamètre apparent de l'objet vu à l'œil nu sans instrument ($\alpha$) :
    $$G = \frac{\alpha'}{\alpha}$$
*   En effectuant un calcul trigonométrique dans les triangles formés par l'image intermédiaire $A_1B_1$ de hauteur $h = \overline{A_1B_1}$ :
    $$\alpha \simeq \tan \alpha = \frac{-h}{f'_1} \quad \text{et} \quad \alpha' \simeq \tan \alpha' = \frac{h}{f'_2}$$
    On en déduit l'expression du grossissement :
    $$G = \frac{-\frac{h}{f'_2}}{\frac{h}{f'_1}} = -\frac{f'_1}{f'_2}$$
*   **Application numérique :**
    $$G = -\frac{50}{5} = -10$$
    Le signe négatif indique que l'image définitive est renversée par rapport à l'objet. Le module du grossissement est de $10$.

---

## II. Introduction d'un système dispersif (Prisme)

On intercale entre l'objectif et l'oculaire un prisme en verre d'indice $n$ et d'angle au sommet $A$. Le prisme est réglé au minimum de déviation pour une longueur d'onde $\lambda_0 = 589\text{ nm}$ (jaune du sodium).

### Question 3
> *Rappeler la condition d'émergence d'un rayon lumineux à travers un prisme. Quel est l'effet de ce prisme sur un faisceau de lumière blanche issu de l'objectif ?*

**Éléments de correction :**
*   Pour qu'il y a ait émergence du rayon hors du prisme, il faut que l'angle d'incidence $i_2$ sur la seconde dioptre soit inférieur à l'angle limite de réfraction $i_{lim} = \arcsin(1/n)$. Cela se traduit par une condition sur l'angle du prisme :
    $$A \le 2 i_{lim}$$
*   Le verre étant un milieu dispersif, l'indice de réfraction $n(\lambda)$ dépend de la longueur d'onde ($\frac{dn}{d\lambda} < 0$). La déviation $\mathcal{D}$ subie par un rayon lumineux dépend de $n$ selon la formule :
    $$\mathcal{D} = i_1 + i'_2 - A$$
    Le prisme va donc décomposer la lumière blanche en un spectre continu de couleurs, chaque longueur d'onde étant déviée d'un angle légèrement différent.

---

## III. Analyse critique des résultats

### Question 4
> *Dans le cadre de l'utilisation de cette lunette en astronomie d'observation (par exemple l'observation des cratères lunaires), discutez l'intérêt et les limites d'un tel système afocal combiné à un élément dispersif.*

**Éléments de correction :**
*   **Intérêt :** Le grossissement $G = -10$ permet de discerner des détails angulaires 10 fois plus petits qu'à l'œil nu (en restant toutefois limité par la diffraction due à l'ouverture de l'objectif). L'ajout d'un prisme (ou d'un réseau) transforme la lunette en une **lunette spectroscopique**, permettant l'analyse spectrale de la lumière émise ou réfléchie par les astres (détermination de la composition chimique).
*   **Limites et défauts optiques :**
    1.  *Chromatisme :* Les lentilles simples souffrent d'aberration chromatique (les foyers dépendent de $\lambda$). L'utilisation d'un prisme accentue ce problème si les lentilles ne sont pas des doublets achromatiques.
    2.  *Luminosité :* L'interposition d'un prisme entraîne des pertes par réflexion sur les dioptres et par absorption dans le verre, réduisant la luminosité de l'image finale.
    3.  *Renversement de l'image :* L'image est inversée ($G < 0$), ce qui est gênant en observation terrestre, mais sans conséquence majeure en astronomie (l'espace n'ayant ni haut ni bas).