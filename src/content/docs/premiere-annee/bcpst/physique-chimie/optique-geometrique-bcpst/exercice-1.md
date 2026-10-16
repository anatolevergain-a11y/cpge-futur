---
title: 'Exercice 1 : Lentilles minces et loupe'
description: 'Problème d entraînement type concours pour BCPST.'
---

### 🌐 Énoncé du problème / Cadre d'étude

L'optique géométrique constitue un outil fondamental pour la compréhension des instruments d'optique utilisés en biologie et en géologie (loupes, microscopes, verres correcteurs). Ce problème s'intéresse à l'étude d'une loupe, modélisée par une lentille mince convergente, utilisée pour l'observation d'un objet de petite taille. 

On se place dans le cadre de l'approximation de Gauss (stigmatisme rigoureux et aplanétisme approchés, rayons paraxiaux). On considère une lentille mince convergente $L$ de centre optique $O$, de distance focale image $f' = \overline{OF'} > 0$. Le plan orthogonal à l'axe optique passant par $O$ est appelé plan de la lentille.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Rappels de cours et relations de conjugaison :**
   Énoncer la relation de conjugaison avec origine au centre $O$ pour une lentille mince, ainsi que la relation de grandissement transversal $\gamma$. Préciser les notations utilisées.

2. **Étude du système de la loupe :**
   Un objet réel $AB$ de taille $y = \overline{AB} > 0$ est placé perpendiculairement à l'axe optique, le point $A$ étant sur l'axe, à une distance $d = \overline{OA} < 0$ de la lentille. 
   Exprimer la position $p' = \overline{OA'}$ de l'image $A'B'$ en fonction de $f'$ et de $d$.

3. **Condition d'observation confortable :**
   Un observateur normal utilise la loupe de manière à ce que l'image finale $A'B'$ se forme au **punctum remotum** de l'œil, c'est-à-dire à l'infini. 
   Déterminer la distance $d$ à laquelle il faut placer l'objet par rapport à la loupe dans ces conditions.

4. **Notion de grossissement :**
   On définit le grossissement $G$ d'une loupe par le rapport $G = \frac{\alpha}{\alpha_0}$, où $\alpha$ est le diamètre apparent de l'image vue à travers la loupe, et $\alpha_0$ le diamètre apparent de l'objet vu à l'œil nu depuis le **punctum proximum** de l'œil (noté $d_m = 0{,}25\text{ m}$).
   En effectuant l'approximation des petits angles, exprimer $G$ en fonction de $f'$ et $d_m$.

5. **Analyse critique du modèle :**
   Citer deux limites de l'approximation de Gauss et des lentilles minces dans le cadre d'une utilisation réelle de la loupe.

---

### 💡 Pistes & Indications méthodologiques

- Pour la **question 1**, utilisez les théorèmes fondamentaux de l'optique géométrique (relations de Descartes ou de Newton).
- Pour la **question 2**, partez de la relation de conjugaison $\frac{1}{\overline{OA'}} - \frac{1}{\overline{OA}} = \frac{1}{f'}$ et isolez $\overline{OA'}$.
- Pour la **question 3**, traduire mathématiquement l'expression "l'image est rejetée à l'infini" ($\overline{OA'} \to -\infty$).
- Pour la **question 4**, exprimez $\alpha$ et $\alpha_0$ en radians en utilisant $\tan \theta \approx \theta$ pour les angles faibles. Attention au signe des grandeurs algébriques.

---

### 📋 Corrigé détaillé pas à pas

1. **Rappels de cours et relations de conjugaison :**
   Dans le cadre de l'approximation de Gauss, la relation de conjugaison d'une lentille mince de centre $O$ et de distance focale image $f'$ s'écrit avec origine au centre :
   $$\frac{1}{\overline{OA'}} - \frac{1}{\overline{OA}} = \frac{1}{f'}$$
   où $\overline{OA}$ est la position algébrique de l'objet et $\overline{OA'}$ celle de l'image.
   Le grandissement transversal $\gamma$ est défini par :
   $$\gamma = \frac{\overline{A'B'}}{\overline{AB}} = \frac{\overline{OA'}}{\overline{OA}}$$

2. **Étude du système de la loupe :**
   À partir de la relation de conjugaison, on isole $\frac{1}{\overline{OA'}}$ :
   $$\frac{1}{\overline{OA'}} = \frac{1}{f'} + \frac{1}{\overline{OA}} = \frac{1}{f'} + \frac{1}{d}$$
   En réduisant au même dénominateur :
   $$\frac{1}{\overline{OA'}} = \frac{d + f'}{f' d}$$
   On en déduit la position de l'image :
   $$\overline{OA'} = \frac{f' d}{d + f'}$$

3. **Condition d'observation confortable :**
   Pour que l'image soit rejetée à l'infini (observation sans fatigue pour un œil emmétrope au repos), il faut que $\overline{OA'} \to -\infty$, ce qui mathématiquement revient à annuler le dénominateur de l'expression précédente (ou à faire tendre l'inverse vers $0$) :
   $$d + f' = 0 \implies d = -f'$$
   L'objet doit donc être placé exactement dans le plan focal objet de la lentille ($\overline{OA} = -\overline{OF}$).

4. **Notion de grossissement :**
   - À l'œil nu, l'observation maximale sans fatigue se fait au punctum proximum à la distance $d_m$. Le diamètre apparent (en valeur absolue) est :
     $$\alpha_0 \approx \tan \alpha_0 = \frac{AB}{d_m} = \frac{y}{d_m}$$
   - Avec la loupe réglée pour une vision à l'infini, l'image $A'B'$ est rejetée à l'infini sous un angle $\alpha$. En considérant les rayons issus de $B$ passant par le centre optique $O$ (non déviés) :
     $$\alpha \approx \tan \alpha = \frac{AB}{f'} = \frac{y}{f'}$$
   Le grossissement $G$ s'exprime alors par le rapport :
   $$G = \frac{\alpha}{\alpha_0} = \frac{\frac{y}{f'}}{\frac{y}{d_m}} = \frac{d_m}{f'}$$
   *Application numérique implicite :* Pour une loupe standard de distance focale $f' = 0{,}05\text{ m}$ ($5\text{ cm}$) et avec $d_m = 0{,}25\text{ m}$, on obtient $G = \frac{0{,}25}{0{,}05} = 5$.

5. **Analyse critique du modèle :**
   Plusieurs limites apparaissent :
   - **Aberrations chromatiques :** L'indice de réfraction du verre de la lentille dépend de la longueur d'onde ($\n( \lambda)$), ce qui entraîne des distorsions de couleur sur les bords de l'image observée.
   - **Aberrations géométriques (au-delà de Gauss) :** Pour des objets étendus ou des faisceaux s'écartant de l'axe (stigmatisme non rigoureux), on observe du sphéricité ou de la distorsion (courbure de champ).