---
title: 'Exercice 2 : Torseurs des actions'
description: 'Problème d entraînement type concours.'
---

# Problème GUIDÉ : Étude statique d'un mécanisme de levage

*En tant qu'examinateur de concours CPGE (filière PCSI, Sciences Industrielles de l'Ingénieur), je vous propose ce problème guidé conçu pour évaluer votre maîtrise de la modélisation des actions mécaniques et de l'application du PFD (ou du PFS) via l'outil torseurs.*

---

## Présentation du système

On s'intéresse à un système de levage de charge utilisé sur un chantier. Le mécanisme schématisé ci-dessous est composé de trois éléments principaux modélisés par des solides indéformables :
*   **0 (Bâti)** : Repère galiléen $\mathcal{R}_0(O, \vec{x}_0, \vec{y}_0, \vec{z}_0)$.
*   **1 (Flèche)** : De masse négligeable, liée au bâti 0 par une liaison pivot d'axe $(O, \vec{z}_0)$.
*   **2 (Vérin hydraulique)** : Composé d'un corps $2_a$ lié au bâti 0 par une pivot d'axe $(A, \vec{z}_0)$ et d'une tige $2_b$ liée à la flèche 1 par une pivot d'axe $(B, \vec{z}_0)$. La liaison glissière entre $2_a$ et $2_b$ est supposée parfaite d'axe $(A, \vec{u})$, avec $\vec{u} = \cos(\theta)\vec{x}_0 + \sin(\theta)\vec{y}_0$.
*   **Charge (3)** : Modélisée par un effort ponctuel vertical $\vec{F} = -F \vec{y}_0$ appliqué en un point $C$.

### Données géométriques et paramètres :
*   $\vec{OA} = L_1 \vec{y}_0$
*   $\vec{OB} = L_2 \vec{x}_0$
*   $\vec{OC} = L_3 \vec{x}_0 - H \vec{y}_0$
*   Le système est étudié dans la position d'équilibre caractérisée par l'angle $\alpha$ de la flèche 1 par rapport à l'horizontale $(\vec{x}_0)$.

---

## Partie I : Modélisation cinématique et paramétrage
Objectif: ** Définir les repères et exprimer les différents éléments de réduction des torseurs.

### Question 1.1
Donner le torseur cinématique de la liaison pivot entre le bâti 0 et la flèche 1 au point $O$.

*Aide de l'examinateur :* Rappelez la nature d'une liaison pivot d'axe $(O, \vec{z}_0)$ sur les degrés de liberté en rotation et en translation.

> **Corrigé :**
> La liaison entre 0 et 1 est une liaison pivot d'axe $(O, \vec{z}_0)$. Le mouvement relatif de 1 par rapport à 0 est une rotation pure autour de cet axe.
> Le torseur cinématique s'écrit au point $O$ :
> $$\{\mathcal{V}_{1/0}\} = \begin{Bmatrix} \dot{\alpha} \vec{z}_0 \\ \vec{0} \end{B5}_O$$
> Avec $\dot{\alpha}$ la vitesse de rotation de la flèche par rapport au bâti.

---

## Partie II : Étude des actions mécaniques transmissibles
Objectif: ** Exprimer les torseurs des actions mécaniques des liaisons parfaites.

### Question 2.1
Écrire le torseur de l'action mécanique de la liaison pivot entre 0 et 1 au point $O$, noté $\{\tau_{0 \to 1}\}$. Préciser les composantes inconnues.

> **Corrigé :**
> La liaison pivot parfaite d'axe $(O, \vec{z}_0)$ transmet deux forces et un moment (tous les autres étant nuls par hypothèse de liaison parfaite). Au point $O$ :
> $$\{\tau_{0 \to 1}\} = \begin{Bmatrix} X_{01} \vec{x}_0 + Y_{01} \vec{y}_0 \\ N_{01} \vec{z}_0 \end{B}_O$$
> Soit 3 composantes inconnues scalaires ($X_{01}, Y_{01}, N_{01}$).

### Question 2.2
Le vérin (ensemble $2 = 2_a + 2_b$) exerce une force selon son axe $(A, \vec{u})$. En déduire la forme générale du torseur de l'action mécanique du vérin 2 sur la flèche 1 au point $B$, noté $\{\tau_{2 \to 1}\}$.

> **Corrigé :**
> Le vérin est assimilé à une bielle idéale (action transmise le long de la ligne de contact des rotules ou de l'axe de glissement). L'action mécanique est un glisseur orienté selon $\vec{u}$.
> $$\{\tau_{2 \to 1}\} = \begin{Bmatrix} F_{21} \vec{u} \\ \vec{0} \end{B}_B$$
> Avec $F_{21}$ l'effort normal dans le vérin (positif en traction, négatif en compression).

---

## Partie III : Application du Principe Fundamental de la Statique (PFS)
Objectif: ** Déterminer l'effort dans le vérin pour maintenir la charge en équilibre.

On isole l'ensemble flèche (1). Les actions extérieures s'appliquant sur (1) sont :
1.  L'action du bâti 0 : $\{\tau_{0 \to 1}\}$ en $O$.
2.  L'action du vérin 2 : $\{\tau_{2 \to 1}\}$ en $B$.
3.  L'action de la charge (3) : $\{\tau_{3 \to 1}\}$ en $C$.

### Question 3.1
Exprimer le torseur de l'action de la charge $\{\tau_{3 \to 1}\}$ au point $O$.

> **Corrigé :**
> L'effort est $\vec{F}_{3 \to 1} = -F \vec{y}_0$ appliqué en $C$.
> Le moment en $O$ se calcule par transport :
> $$\vec{M}_{O}(3 \to 1) = \vec{OC} \wedge (-F \vec{y}_0)$$
> Avec $\vec{OC} = L_3 \vec{x}_0 - H \vec{y}_0$ :
> $$\vec{M}_{O}(3 \to 1) = (L_3 \vec{x}_0 - H \vec{y}_0) \wedge (-F \vec{y}_0) = -L_3 F \vec{z}_0$$
> Le torseur s'écrit donc au point $O$ :
> $$\{\tau_{3 \to 1}\} = \begin{Bmatrix} -F \vec{y}_0 \\ -L_3 F \vec{z}_0 \end{B}_O$$

### Question 3.2
Transférer le torseur $\{\tau_{2 \to 1}\}$ au point $O$.

> **Corrigé :**
> On a $\{\tau_{2 \to 1}\} = \begin{Bmatrix} F_{21} \vec{u} \\ \vec{0} \end{B}_B$.
> Par transport au point $O$ :
> $$\vec{M}_{O}(2 \to 1) = \vec{M}_{B}(2 \to 1) + \vec{OB} \wedge (F_{21} \vec{u}) = \vec{0} + (L_2 \vec{x}_0) \wedge (F_{21} (\cos(\theta)\vec{x}_0 + \sin(\theta)\vec{y}_0))$$
> $$\vec{M}_{O}(2 \to 1) = L_2 F_{21} \sin(\theta) \vec{z}_0$$
> D'où le torseur au point $O$ :
> $$\{\tau_{2 \to 1}\} = \begin{Bmatrix} F_{21} \vec{u} \\ L_2 F_{21} \sin(\theta) \vec{z}_0 \end{B}_O$$

### Question 3.3
Appliquer le PFS à la flèche (1) en écrivant l'annulation de la somme des torseurs au point $O$. En déduire l'équation scalaire permettant de calculer $F_{21}$.

> **Corrigé :**
> Le PFS s'écrit :
> $$\{\tau_{0 \to 1}\} + \{\tau_{2 \to 1}\} + \{\tau_{3 \to 1}\} = \{\mathbf{0}\}$$
> En projetant l'équation de moment sur l'axe $\vec{z}_0$ au point $O$ :
> $$\vec{M}_{O}(0 \to 1) \cdot \vec{z}_0 + \vec{M}_{O}(2 \to 1) \cdot \vec{z}_0 + \vec{M}_{O}(3 \to 1) \cdot \vec{z}_0 = 0$$
> Sachant que le moment de la liaison pivot en $O$ a une composante nulle selon $\vec{z}_0$ (liaison parfaite sans frottement en rotation, $N_{01} = 0$) :
> $$0 + L_2 F_{21} \sin(\theta) - L_3 F = 0$$
> On en déduit l'expression de l'effort dans le vérin :
> $$F_{21} = \frac{L_3 F}{L_2 \sin(\theta)}$$

---

## Partie IV : Analyse critique des résultats
Objectif: ** Valider l'expression obtenue et analyser le comportement du système.

### Question 4.1
Examiner le comportement de la formule trouvée lorsque l'angle $\theta$ tend vers $0$ ou $\pi$ (alignement géométrique). Quel est l'impact sur le dimensionnement du vérin ?

> **Corrigé de l'examinateur (Analyse critique) :**
> L'expression obtenue est :
> $$F_{21} = \textbf{ \frac{L_3 F}{L_2 \sin(\theta)} }$$
> 
> *   **Analyse dimensionnelle :** $L_3$ et $L_2$ sont des mètres, $F$ est en Newtons. Le rapport est sans dimension, $F_{21}$ est bien homogène à une force ($\text{en N}$).
> *   **Limite géométrique :** Lorsque $\sin(\theta) \to 0$ (c'est-à-dire lorsque la tige du vérin et le bras de levier géométrique s'alignent), le dénominateur tend vers zéro, ce qui implique que **l'effort $F_{21}$ tend vers l'infini**.
> *   **Conséquence pratique / ingénierie :** C'est une configuration critique (singularité géométrique) à éviter impérativement lors de la conception cinématique du système de levage. Un angle $\theta$ proche de $0$ ou $\pi$ nécessiterait un vérin surdimensionné pour maintenir l'équilibre, entraînant des risques de rupture mécanique.

---