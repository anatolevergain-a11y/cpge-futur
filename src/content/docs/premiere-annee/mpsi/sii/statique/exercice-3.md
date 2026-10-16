---
title: 'Exercice 1 : PFS et modélisation des actions'
description: 'Problème d entraînement type concours.'
---

# Concours CPGE - MPSI
## Sciences Industrielles de l'Ingénieur (SII)
### Chapitre : Statique des solides — Thème : PFS et modélisation des actions

---

*En tant qu'examinateur, je propose ici un problème guidé représentatif des exigences des concours aux grandes écoles (filière MPSI). L'accent est mis sur la rigueur de la modélisation, l'isolement correct des solides et l'exploitation méthodique du Principe Fundamental de la Statique (PFS).*

---

## Présentation du système étudié : Le dispositif de levage d'une écluse

Le système étudié est un mécanisme de levage de vanne d'écluse. On s'intéresse à la phase d'équilibre statique de la vanne en position intermédiaire. 

Le problème se ramène à l'étude dans le plan $(O, \vec{x}, \vec{y})$ (problème plan). On définit un repère galiléen $\mathcal{R}_0 = (O, \vec{x}, \vec{y}, \vec{z})$.

### Données et paramètres géométriques :
*   La vanne est modélisée par un solide $\text{S}_1$ de poids $\vec{P}_1 = -Mg\,\vec{y}$, appliqué en son centre de gravité $G_1$. On prendra $Mg = 5000\text{ N}$.
*   Le bras de commande est modélisé par un solide $\text{S}_2$ de masse négligeable devant $\text{S}_1$.
*   Le bâti est noté $\text{S}_0$ (assumé fixe, repère $\mathcal{R}_0$).
*   L'articulation en $O$ entre le bâti $\text{S}_0$ et la vanne $\text{S}_1$ est une liaison pivot d'axe $(O, \vec{z})$.
*   L'action de l'eau sur la vanne $\text{S}_1$ est modélisée par une force résultante $\vec{F}_{\text{eau}} = F_0\,\vec{x}$, avec $F_0 = 2000\text{ N}$, appliquée en un point $C$ de coordonnées $C(0, -h/2)$ dans $\mathcal{R}_0$ (avec $h = 2\text{ m}$).

---

## Partie 1 : Modélisation des liaisons et des actions mécaniques

### Question 1.1
> Identifier les différents solides isolables et préciser les liaisons mécaniques en jeu. Donnez les caractéristiques géométriques (centre et direction) des torseurs représentant ces actions mécaniques transmissibles.

**Corrigé guidé :**
1.  **Solides en présence :** Le bâti $\text{S}_0$, la vanne $\text{S}_1$, et le bras de commande $\text{S}_2$.
2.  **Liaison $(S_0 - S_1)$ en $O$ :** C'est une liaison pivot d'axe $(O, \vec{z})$. Le torseur des actions mécaniques transmissibles par $\text{S}_0$ sur $\text{S}_1$ est un glisseur (ou un torseur à moment nul en $O$) de la forme :
    $$\{\mathcal{T}_{0 \to 1}\} = \begin{cases} X_{01}\,\vec{x} + Y_{01}\,\vec{y} \\ \vec{0} \end{cases}_{\text{en } O}$$
3.  **Liaison $(S_1 - S_2)$ en $A$ :** Supposée être une liaison rotule ou pivot d'axe $\vec{z}$. Dans le cadre d'une étude plane, on la modélise par une articulation (pivot d'axe $\vec{z}$) en $A$:
    $$\{\mathcal{T}_{2 \to 1}\} = \begin{cases} X_{21}\,\vec{x} + Y_{21}\,\vec{y} \\ \vec{0} \end{cases}_{\text{en } A}$$

---

## Partie 2 : Application du Principe Fondamental de la Statique (PFS)

On souhaite déterminer les efforts exercés sur la vanne $\text{S}_1$ à l'équilibre. Pour cela, on isole le solide $\text{S}_1$.

### Question 2.1
> Faire le bilan des actions mécaniques extérieures s'exerçant sur le solide $\text{S}_1$. Écrire les torseurs correspondants au même point $O$.

**Corrigé guidé :**
Les actions s'exerçant sur $\text{S}_1$ sont :
1.  L'action de la pesanteur : $\{\mathcal{T}_{\text{grav} \to 1}\} = \begin{cases} -Mg\,\vec{y} \\ \vec{0} \end{cases}_{\text{en } G_1}$
    *Transport en $O$ sachant que $\vec{OG}_1 = x_{G_1}\vec{x} + y_{G_1}\vec{y}$ (avec $x_{G_1} = 0$ et $y_{G_1} = -h/2$) :*
    $$\{\mathcal{T}_{\text{grav} \to 1}\} = \begin{cases} -Mg\,\vec{y} \\ \vec{0} \end{cases}_{\text{en } O}$$
2.  L'action de l'eau : $\{\mathcal{T}_{\text{eau} \to 1}\} = \begin{cases} F_0\,\vec{x} \\ \vec{0} \end{cases}_{\text{en } C}$
    *Transport en $O$ avec $\vec{OC} = - \frac{h}{2}\vec{y}$ :*
    $$\mathcal{M}_{O}(\vec{F}_{\text{eau}}) = \vec{OC} \wedge (F_0\vec{x}) = \left(-\frac{h}{2}\vec{y}\right) \wedge (F_0\vec{x}) = \frac{F_0 h}{2}\,\vec{z}$$
    Donc :
    $$\{\mathcal{T}_{\text{eau} \to 1}\} = \begin{cases} F_0\,\vec{x} \\ \frac{F_0 h}{2}\,\vec{z} \end{cases}_{\text{en } O}$$
3.  L'action du bâti en $O$ : $\{\mathcal{T}_{0 \to 1}\} = \begin{cases} X_{01}\vec{x} + Y_{01}\vec{y} \\ \vec{0} \end{cases}_{\text{en } O}$
4.  L'action du bras $\text{S}_2$ en $A$ (de coordonnées $x_A, y_A$) : $\{\mathcal{T}_{2 \to 1}\} = \begin{cases} X_{21}\vec{x} + Y_{21}\vec{y} \\ \vec{0} \end{cases}_{\text{en } A}$
    *Transport en $O$ avec $\vec{OA} = x_A\vec{x} + y_A\vec{y}$ :*
    $$\mathcal{M}_{O}(\vec{F}_{2 \to 1}) = \vec{OA} \wedge (X_{21}\vec{x} + Y_{21}\vec{y}) = (x_A Y_{21} - y_A X_{21})\,\vec{z}$$

### Question 2.2
> Appliquer le PFS au solide $\text{S}_1$ en $O$ et expliciter les trois equations scalaires exploitables dans le plan.

**Corrigé guidé :**
Le système $\text{S}_1$ est en équilibre dans le repère galiléen $\mathcal{R}_0$. La somme des torseurs des actions mécaniques extérieures est nulle :
$$\sum \{\mathcal{T}_{\text{ext} \to 1}\} = \{\mathcal{T}_{0 \to 1}\} + \{\mathcal{T}_{2 \to 1}\} + \{\mathcal{T}_{\text{grav} \to 1}\} + \{\mathcal{T}_{\text{eau} \to 1}\} = \{\mathbf{0}\}$$

Par projection sur les axes $(O, \vec{x}, \vec{y}, \vec{z})$, on obtient le système de 3 équations scalaires :
1.  **Suivant $\vec{x}$ :**
    $$X_{01} + X_{21} + F_0 = 0$$
2.  **Suivant $\vec{y}$ :**
    $$Y_{01} + Y_{21} - Mg = 0$$
3.  **Suivant $\vec{z}$ (moment en $O$) :**
    $$(x_A Y_{21} - y_A X_{21}) + \frac{F_0 h}{2} = 0$$

---

## Partie 3 : Résolution et Analyse critique

### Question 3.1
> On suppose que le bras $\text{S}_2$ exerce une force purement axiale (la direction du bras est $(A, \vec{u})$ avec $\vec{u} = \cos\theta\,\vec{x} + \sin\theta\,\vec{y}$, où $\theta = 45^\circ$). Expliciter le lien entre $X_{21}$ et $Y_{21}$, puis calculer toutes les inconnues statiques si $A$ a pour coordonnées $(1\text{ m}, -1\text{ m})$.

**Corrigé guidé :**
1.  Puisque $\text{S}_2$ est une bielle de masse négligeable soumise à deux actions (en $A$ et à l'autre extrémité), l'action transmise est un glisseur porté par la droite $(A B)$, soit de direction $\vec{u}$ :
    $$\frac{Y_{21}}{X_{21}} = \tan(\theta) = \tan(45^\circ) = 1 \implies Y_{21} = X_{21}$$
2.  Application numérique avec $x_A = 1\text{ m}$, $y_A = -1\text{ m}$, $h = 2\text{ m}$, $F_0 = 2000\text{ N}$ et $Mg = 5000\text{ N}$ :
    *   L'équation des moments devient :
        $$1 \cdot Y_{21} - (-1) \cdot X_{21} + \frac{2000 \times 2}{2} = 0$$
        Comme $Y_{21} = X_{21}$, on a :
        $$X_{21} + X_{21} + 2000 = 0 \implies 2 X_{21} = -2000 \implies X_{21} = -1000\text{ N}$$
        Et donc $Y_{21} = -1000\text{ N}$.
    *   On en déduit les efforts au niveau pivot en $O$ via les équations de résultante :
        $$X_{01} = -X_{21} - F_0 = -(-1000) - 2000 = 1000 - 2000 = -1000\text{ N}$$
        $$Y_{01} = Mg - Y_{21} = 5000 - (-1000) = 6000\text{ N}$$

---

### Question 3.2 : Analyse critique et relecture d'examinateur

> **Avis de l'examinateur :** 
> *   *Cohérence des ordres de grandeur :* Les forces trouvées (de l'ordre de $1\text{ kN}$ à $6\text{ kN}$) sont du même ordre de grandeur que le poids ($5000\text{ N}$) et l'effort hydraulique ($2000\text{ N}$), ce qui est physiquement tout à fait cohérent.
> *   *Signe des efforts :* $Y_{01} = +6000\text{ N}$ indique que le pivot $O$ encaisse à la fois le poids de la vanne et une partie de l'effort transmis par la bielle vers le haut. 
> *   *Piège classique de concours :* Ne pas oublier de ramener tous les moments au **même point** lors de l'application du théorème du moment statique. Oublier le bras de levier de la force de l'eau $\left(\frac{F_0 h}{2}\right)$ est l'erreur éliminatoire la plus fréquente chez les candidats en MPSI.