---
title: 'Exercice 1 : PFS et modélisation des actions mécaniques'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude statique d'un bras manipulateur industriel

**Filière :** MPSI  
**Matière :** Sciences Industrielles de l'Ingénieur (SII)  
Chapitre: ** Statique des solides  
**Thème :** Principe Fundamental de la Statique (PFS) et modélisation des actions mécaniques  

---

## 1. Énoncé du problème

Dans le cadre de la palettisation automatisée de pièces lourdes sur une ligne de production, on s'intéresse au premier axe d'un bras manipulateur vertical. Le système complet est représenté schématiquement ci-dessous. 

Le mécanisme est composé de :
*   **0 :** Le bâti fixe, servant de repère galiléen $\mathcal{R}_0(O, \vec{x}_0, \vec{y}_0, \vec{z}_0)$.
*   **1 :** Le bras élévateur, de masse $M_1$, dont le centre de gravité $G_1$ est situé à une distance $L_1$ de son axe de rotation horizontal $(O, \vec{z}_0)$.
*   **2 :** Une charge utile manipulée, assimilée à un solide ponctuel ou de dimensions négligeables par rapport aux bras, de masse $M_2$, fixée à l'extrémité $A$ du bras 1 telle que $\overrightarrow{OA} = L \vec{x}_1$.

Le mouvement de rotation du bras 1 par rapport au bâti 0 autour de l'axe $(O, \vec{z}_0)$ est commandé par un actionneur électromécanique associé à un réducteur. L'angle de position du bras par rapport à l'horizontale est noté $\theta = (\vec{x}_0, \vec{x}_1)$.

### Données numériques et ordres de grandeur :
*   $M_1 = 45\text{ kg}$ (masse du bras)
*   $L_1 = 0,4\text{ m}$ (position du centre de gravité $G_1$)
*   $L = 0,9\text{ m}$ (longueur utile du bras $OA$)
*   $M_2 = 120\text{ kg}$ (charge maximale transportée)
*   $g = 9,81\text{ m}\cdot\text{s}^{-2}$ (accélération de la pesanteur)
*   Position d'étude critique : $\theta = 0^\text{rad}$ (bras horizontal).

---

## 2. Questions

### A. Modélisation cinématique et géométrique
1. Définir le repère lié au bras 1, noté $\mathcal{R}_1(O, \vec{x}_1, \vec{y}_1, \vec{z}_0)$, en fonction de l'angle $\theta$. Exprimer les vecteurs $\vec{x}_1$ et $\vec{y}_1$ dans la base de $\mathcal{R}_0$.
2. Préciser la nature de la liaison entre le bâti 0 et le bras 1, ainsi que son torseur cinématique associé.

### B. Modélisation des actions mécaniques extérieures
3. Déterminer le torseur des actions mécaniques de la pesanteur agissant sur le solide 1, exprimé au point $O$.
4. Déterminer le torseur des actions mécaniques exercées par la charge 2 sur le bras 1 au point $A$, puis transporter ce torseur au point $O$.
5. Modéliser l'action de la liaison pivot en $O$ entre 0 et 1. Quel est le nombre d'inconnues statiques de cette liaison dans le cas spatial ? Dans le cas plan étudié ici ?

### C. Résolution par le PFS
6. Isoler l'ensemble $\Sigma = \{1 + 2\}$. Bilan des actions mécaniques extérieures agissant sur $\Sigma$.
7. Appliquer le Principe Fondamental de la Statique (PFS) à l'ensemble $\Sigma$ au point $O$. En déduire l'expression littérale du moment moteur $C_m$ fourni par l'actionneur pour maintenir l'équilibre à la position $\theta$.
8. Calculer la valeur numérique de $C_m$ pour $\theta = 0$ (position horizontale).

### D. Analyse critique et limites du modèle
9. Le modèle de liaison pivot parfaite en $O$ est-il réaliste pour des charges de l'ordre de $120\text{ kg}$ ? Citer au moins deux phénomènes physiques négligés qui nécessiteraient un raffinement du modèle pour le dimensionnement réel des paliers.

---

## 3. Pistes et indications

*   **Piste 1 (Q3 & Q4) :** Pour le poids, le torseur se réduit à une résultante en $G_1$ avec un moment nul en $G_1$, qu'il faut ensuite transporter en $O$ via le théorème de transport des moments.
*   **Piste 2 (Q7) :** Le problème se ramène à un problème plan d'axe $\vec{z}_0$. Seule l'équation de moment projetée selon $\vec{z}_0$ permettra de déterminer le couple moteur recherché.
*   **Piste 3 (Q9) :** Pensez aux efforts de contact localisés, aux frottements dans les roulements et aux déformations élastiques (flexion) de l'axe $O$.

---

## 4. Corrigé pas à pas

### A. Modélisation cinématique et géométrique
1. La base $\mathcal{R}_1$ est définie par rapport à $\mathcal{R}_0$ par la rotation d'axe $\vec{z}_0$ d'angle $\theta$ :
   $$\vec{x}_1 = \cos(\theta)\vec{x}_0 + \sin(\theta)\vec{y}_0$$
   $$\vec{y}_1 = -\sin(\theta)\vec{x}_0 + \cos(\theta)\vec{y}_0$$
   $$\vec{z}_1 = \vec{z}_0$$

2. La liaison entre le bâti 0 et le bras 1 est une **liaison pivot d'axe $(O, \vec{z}_0)$**. Son torseur cinématique au point $O$ s'écrit :
   $$\{\mathcal{V}_{1/0}\} = \begin{Bmatrix} \dot{\theta} \vec{z}_0 \\ \vec{0} \end{Bmatrix}_0$$

### B. Modélisation des actions mécaniques extérieures
3. Action de la pesanteur sur 1 : 
   La résultante est $\vec{R}_{\text{pes}\to 1} = -M_1 g \vec{y}_0$. 
   Le moment au centre de gravité $G_1$ est $\vec{M}(G_1, \text{pes}\to 1) = \vec{0}$.
   En transportant au point $O$ (sachant que $\overrightarrow{OG_1} = L_1 \vec{x}_1$) :
   $$\{\tau_{\text{pes}\to 1}\} = \begin{Bmatrix} \vec{R}_{\text{pes}\to 1} = -M_1 g \vec{y}_0 \\ \vec{M}(O, \text{pes}\to 1) = \overrightarrow{OG_1} \land (-M_1 g \vec{y}_0) \end{Bmatrix}_O$$
   Avec $\overrightarrow{OG_1} = L_1 (\cos\theta \vec{x}_0 + \sin\theta \vec{y}_0)$, on obtient :
   $$\vec{M}(O, \text{pes}\to 1) = -M_1 g L_1 \cos\theta \vec{z}_0$$

4. Action de la charge 2 sur le bras 1 en $A$ :
   $\vec{R}_{2\to 1} = -M_2 g \vec{y}_0$ et $\vec{M}(A, 2\to 1) = \vec{0}$ (charge ponctuelle).
   Par transport en $O$ (avec $\overrightarrow{OA} = L \vec{x}_1$) :
   $$\{\tau_{2\to 1}\} = \begin{Bmatrix} -M_2 g \vec{y}_0 \\ -M_2 g L \cos\theta \vec{z}_0 \end{Bmatrix}_O$$

5. La liaison pivot réelle (dans l'espace) est modélisée par 5 inconnues statiques (2 forces et 3 moments, ou 3 forces et 2 moments selon la modélisation choisie). Dans le cadre d'une **étude plane** (problème dans le plan $(\vec{x}_0, \vec{y}_0)$), la liaison pivot transmet deux forces de contact $(X_0, Y_0)$ et un couple moteur/résistant $C_m \vec{z}_0$.

### C. Résolution par le PFS
6. On isole l'ensemble $\Sigma = \{1 + 2\}$. Les actions mécaniques extérieures à $\Sigma$ sont :
   *   L'action de la pesanteur sur 1 : $\{\tau_{\text{pes}\to 1}\}$
   *   L'action de la pesanteur sur la charge 2 (assimilée à $\{\tau_{2\to 1}\}$ si on considère la charge liée en $A$)
   *   L'action du bâti 0 sur le bras 1 (liaison pivot + actionneur) : $\{\tau_{0\to 1}\}$

7. D'après le PFS appliqué à $\Sigma$ au point $O$ :
   $$\{\tau_{0\to 1}\} + \{\tau_{\text{pes}\to 1}\} + \{\tau_{2\to 1}\} = \{0\}$$
   En projetant l'équation vectorielle des moments au point $O$ sur l'axe $\vec{z}_0$ :
   $$C_m - M_1 g L_1 \cos\theta - M_2 g L \cos\theta = 0$$
   On en déduit le couple moteur d'équilibre :
   $$C_m = (M_1 L_1 + M_2 L) g \cos\theta$$

8. Aplication numérique pour $\theta = 0^\text{rad}$ :
   $$C_m = (45 \times 0,4 + 120 \times 0,9) \times 9,81 \times \cos(0)$$
   $$C_m = (18 + 108) \times 9,81 = 126 \times 9,81 \approx 1236\text{ N}\cdot\text{m}$$

### D. Analyse critique et limites du modèle
9. **Analyse critique :** 
   Le modèle de la liaison pivot parfaite et rigide est une approximation acceptable pour une pré-étude dimensionnelle, mais présente des limites importantes pour un système réel supportant $120\text{ kg}$ :
   *   **Frottements dans les paliers :** Le modèle parfait ne prend pas en compte le couple de friction sec et visqueux dans les roulements, ce qui sous-estime le couple réel que l'actionneur doit fournir.
   *   **Déformations élastiques (flexion) :** Sous une charge de $120\text{ kg}$ déportée à $0,9\text{ m}$, le bras 1 et l'axe $O$ subissent des flèches élastiques non nulles. Cela modifie légèrement la position réelle du centre de gravité et peut induire du arc-boutement ou un mauvais alignement dans les paliers.