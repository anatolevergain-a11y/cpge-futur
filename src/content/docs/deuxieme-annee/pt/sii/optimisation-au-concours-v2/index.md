---
title: 'Optimisation au concours V2 : SII PT/PT*'
description: 'Analyse approfondie des nouvelles questions classiques aux concours, rédactions types et exigences des rapporteurs.'
sidebar:
  badge:
    text: 'Méthode Concours V2'
    variant: 'caution'
---

## 🎯 Objectif & Analyse des tendances des Concours

En tant que concepteur de sujets et président de jury pour les concours de la filière PT, je constate chaque année les mêmes écarts de notes entre les candidats "moyens" et les futurs intégrés des écoles sommitales (Arts & Métiers, ENS Paris-Saclay, CentraleSupélec). 

La filière PT (Physique et Technologie) se distingue par un attachement viscéral à la modélisation rigoureuse, au calcul exact et à l'exploitation fine des résultats numériques et analytiques. Face à l'évolution des sujets de Sciences Industrielles de l'Ingénieur (SII), les exigences se durcissent sur deux piliers fondamentaux de la mécanique :
1. **La résistance des matériaux appliquée et la pertinence des critères de plasticité** (Von Mises).
2. **La maîtrise absolue de la cinématique spatiale et des mécanismes complexes** (trains épicycloïdaux 3D).

Ce guide **V2** a pour unique but de vous former au **standard de correction** attendu sur la copie. Oubliez la redondance textuelle : place à la rigueur mathématique, au respect strict des notations normalisées et à la concision.

---

## 📌 Question Type 1 : Calcul des contraintes dans une poutre fléchie et vérification au critère de résistance de Von Mises

### 💡 Méthode canonique & Étapes de rédaction

Pour traiter une question de vérification de résistance sous sollicitations combinées (flexion + torsion ou effort normal), la démarche du jury est séquentielle et implacable :

1. **Bilan des actions mécaniques et torseur de cohésion :** Isoler un tronçon de poutre et déterminer le torseur de cohésion $\{C_c(x)\} = \left\{ \begin{matrix} N(x) & \vec{x} \\ T_y(x) & \vec{y} \\ T_z(x) & \vec{z} \end{matrix} \,;\, \begin{matrix} M_t(x) = M_x(x) & \vec{x} \\ M_{fy}(x) & \vec{y} \\ M_{fz}(x) & \vec{z} \end{matrix} \right\}_G$.
2. **Identification des contraintes maximales dans la section critique :** 
   - Contrainte normale due à la flexion et/ou à l'effort normal : $\sigma_{xx}(y, z) = \frac{N(x)}{S} - \frac{M_{fz}(x)}{I_{zz}} y + \frac{M_{fy}(x)}{I_{yy}} z$.
   - Contrainte tangentielle due à la torsion : $\tau_{xy}$ ou $\tau_{xz}$ (via la formule de Bredt ou Navier-Breguet selon la géométrie).
3. **Application du tenseur des contraintes en un point critique (souvent la fibre la plus éloignée de la neutre) :**
   $$\overline{\overline{\sigma}}(M) = \begin{pmatrix} \sigma_{xx} & \tau_{xy} & 0 \\ \tau_{xy} & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$
4. **Calcul de la contrainte équivalente de Von Mises $\sigma_{eq}$ :**
   $$\sigma_{eq} = \sqrt{\sigma_{xx}^3 + 3 \tau_{xy}^2} \quad (\text{en cas de plan simple contrainte})\quad \text{ou la formule générale } \sqrt{\frac{1}{2} \left[ (\sigma_1-\sigma_2)^2 + (\sigma_2-\sigma_3)^2 + (\sigma_3-\sigma_1)^2 \right]}$$
5. **Conclusion vis-à-vis du critère :** Vérifier que $\sigma_{eq} \le \frac{R_e}{s}$ (où $R_e$ est la limite d'élasticité et $s$ le coefficient de sécurité).

---

### 📋 Exemple de sujet & Rédaction modèle type Concours

> **Extrait de sujet :** "On considère l'arbre de transmission d'un treuil assimilé à une poutre cylindrique de rayon $R = 20\,\text{mm}$. Dans la section critique $S$, le torseur de cohésion évalué est $N = 0$, $M_{fz} = 150\,\text{N}\cdot\text{m}$, et $M_t = 250\,\text{N}\cdot\text{m}$. Le matériau choisi est un acier dont la limite d'élasticité est $R_e = 350\,\text{MPa}$. En prenant un coefficient de sécurité $s = 2$, valider le critère de résistance de Von Mises."

**Rédaction modèle type copie de concours :**

**1. Calcul des sollicitations et des caractéristiques géométriques de la section :**
Pour une section circulaire pleine de rayon $R$ :
- Moment quadratique : $I_{zz} = \frac{\pi R^4}{4} = \frac{\pi (20 \times 10^{-3})^4}{4} = 1{,}257 \times 10^{-7}\,\text{m}^4$.
- Moment de torsion géométrique (ou moment polaire) : $I_0 = 2 I_{zz} = 2{,}513 \times 10^{-7}\,\ntext{m}^4$. (Note : ici $I_0 = J$).

**2. Expression des contraintes au point le plus sollicité (situé sur la périphérie, $y = R$) :**
- Contrainte normale maximale due à la flexion simple (car $N=0$) :
  $$\sigma_{xx} = \frac{M_{fz} \cdot R}{I_{zz}} = \frac{150 \times (20 \times 10^{-3})}{1{,}257 \times 10^{-7}} = 23{,}86 \times 10^{6}\,\text{Pa} = 23{,}86\,\text{MPa}$$
- Contrainte tangentielle maximale due au moment de torsion $M_t$ :
  $$\tau_{xy} = \frac{M_t \cdot R}{I_0} = \frac{250 \times (20 \times 10^{-3})}{2{,}513 \times 10^{-7}} = 19{,}89 \times 10^{6}\,\text{Pa} = 19{,}89\,\text{MPa}$$

**3. Calcul de la contrainte équivalente de Von Mises :**
La matrice des contraintes au point critique s'écrit dans la base locale :
$$\overline{\overline{\sigma}} = \begin{pmatrix} \sigma_{xx} & \tau_{xy} & 0 \\ \tau_{xy} & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

La contrainte de Von Mises s'établit par la relation :
$$\sigma_{eq} = \sqrt{\sigma_{xx}^2 + 3 \tau_{xy}^2}$$
$$\sigma_{eq} = \sqrt{(23{,}86)^2 + 3 \times (19{,}89)^2} = \sqrt{569{,}3 + 3 \times 395{,}6} = \sqrt{569{,}3 + 1186{,}8} = \sqrt{1756{,}1} \approx 41{,}91\,\text{MPa}$$

**4. Comparaison et conclusion :**
La résistance pratique au cisaillement ou l'admissible élastique impose :
$$\sigma_{eq} \le R_{adm} = \frac{R_e}{s} = \frac{350}{2} = 175\,\text{MPa}$$
Conclusion: ** $41{,}91\,\text{MPa} \le 175\,\text{MPa}$. Le critère de Von Mises est amplement vérifié. L'arbre est surdimensionné pour cette charge. $\blacksquare$

---

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury

* **Erreur d'homogénéité et d'unités :** Oublier de convertir les millimètres en mètres lors du calcul des inerties, conduisant à des aberrations de plusieurs ordres de grandeur (ex: contraintes de plusieurs térapascals).
* **Mauvaise identification du point critique :** Calculer la contrainte de Von Mises au centre de la poutre ($y=0$), là où $\sigma_{xx} = 0$ et $\tau = 0$ (pour la torsion pure), ce qui annule la contrainte équivalente. Le point critique est *toujours* sur la fibre externe pour la flexion et la torsion combinées.
* **Oubli du facteur $3$ dans Von Mises :** Écrire $\sigma_{eq} = \sqrt{\sigma_{xx}^2 + \tau_{xy}^2}$ au lieu du facteur correct issu de l'énergie de distorsion ($3\tau_{xy}^2$).

---

## 📌 Question Type 2 : Étude cinématique 3D d'un train épicycloïdal complexe et formule de Willis

### 💡 Méthode canonique & Étapes de rédaction

Face à un train épicycloïdal (souvent plan mais intégré dans une architecture spatiale ou à deux étages en liaison par un porte-satellites commun), la méthode vectorielle brute par composition des vitesses est un piège lourd en calculs. 

1. **Identification de la structure du train de engrenages :**
   - Repérer le bâti (ou carter) $0$.
   - Repérer le planétaire d'entrée $1$ (ou solaire).
   - Repérer le porte-satellites $H$.
   - Repérer le planétaire de sortie $3$ (couronne ou planétaire externe).
   - Repérer le ou les satellites $2$ en liaison avec $1$, $3$ et $H$.
2. **Application de la formule de Willis (Formule fondamentale) :**
   $$\frac{\omega_{1/H}}{\omega_{3/H}} = (-1)^n \frac{Z_3}{Z_1}$$
   *(où $n$ est le nombre de contacts extérieurs, généralement $n=1$ pour un train simple à engrenages extérieurs/intérieurs).*
3. **Développement des taux de rotation :**
   $$\frac{\omega_{1/0} - \omega_{H/0}}{\omega_{3/0} - \omega_{H/0}} = (-1)^n \frac{Z_3}{Z_1}$$
4. **Combinaison pour les trains complexes (à double étage) :** Écrire Willis sur chaque sous-train élémentaire et éliminer les vitesses des satellites intermédiaires par transitivité.

---

### 📋 Exemple de sujet & Rédaction modèle type Concours

> **Extrait de sujet :** "Soit un train épicycloïdal simple composé d'un planétaire d'entrée $1$ (comportant $Z_1 = 20$ dents), d'une couronne fixe ou mobile $3$ ($Z_3 = 80$ dents) et d'un porte-satellites $H$. Les satellites $2$ ont $Z_2$ dents. Le bâti est noté $0$. On donne $\omega_{1/0} = 3000\,\text{rad}\cdot\text{s}^{-1}$ et la couronne $3$ est bloquée par rapport au bâti ($\omega_{3/0} = 0$). Exprimer analytiquement puis calculer la vitesse de rotation du porte-satellites $\omega_{H/0}$."

**Rédaction modèle type copie de concours :**

**1. Rappel de la formule de Willis pour le train épicycloïdal considéré :**
Le train est composé d'un planétaire central $1$ et d'une couronne intérieure $3$ engrenant avec les satellites $2$ portés par $H$. Le contact entre $1$ et $2$ est extérieur (inversion de sens), et entre $2$ et $3$ est intérieur (conservation du sens). Globalement, le rapport de Willis s'écrit :
$$\frac{\omega_{1/H}}{\omega_{3/H}} = -\frac{Z_3}{Z_1}$$

**2. Expression par rapport au bâti (référentiel $0$) :**
En développant les taux de rotation par rapport au repère fixe $0$ :
$$\frac{\omega_{1/0} - \omega_{H/0}}{\omega_{3/0} - \omega_{H/0}} = -\frac{Z_3}{Z_1}$$

**3. Injection des conditions aux limites du problème :**
L'énoncé stipule que la couronne $3$ est fixe par rapport au bâti $0$, soit :
$$\omega_{3/0} = 0$$

L'équation devient :
$$\frac{\omega_{1/0} - \omega_{H/0}}{-\omega_{H/0}} = -\frac{Z_3}{Z_1} \implies \frac{\omega_{1/0} - \omega_{H/0}}{\omega_{H/0}} = \frac{Z_3}{Z_1}$$

**4. Résolution algébrique pour extraire $\omega_{H/0}$ :**
$$\frac{\omega_{1/0}}{\omega_{H/0}} - 1 = \frac{Z_3}{Z_1}$$
$$\frac{\omega_{1/0}}{\omega_{H/0}} = 1 + \frac{Z_3}{Z_1} = \frac{Z_1 + Z_3}{Z_1}$$
$$\omega_{H/0} = \omega_{1/0} \cdot \frac{Z_1}{Z_1 + Z_3}$$

**5. Application numérique :**
$$\omega_{H/0} = 3000 \times \frac{20}{20 + 80} = 3000 \times \frac{20}{100} = 3000 \times 0{,}2 = 600\,\text{rad}\cdot\text{s}^{-1}$$
Conclusion: ** La vitesse de rotation du porte-satellites est de $600\,\text{rad}\cdot\text{s}^{-1}$ dans le sens du planétaire d'entrée. $\blacksquare$

---

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury

* **Erreur de signe dans Willis :** Le rapport $\frac{Z_3}{Z_1}$ est précédé d'un signe $+1$ ou $-1$ selon la parité des contacts extérieurs. Une erreur de signe conduit à un contresens physique flagrant (ex: un réducteur qui accélère ou un sens de rotation inversé par rapport au schéma cinématique).
* **Confusion des indices dans les différences de vitesses :** Écrire $\omega_{H/0} - \omega_{1/0}$ au lieu de $\omega_{1/0} - \omega_{H/0}$ au numérateur fausse instantanément le rapport cinématique. Le terme retranché est *toujours* la vitesse du porte-satellites $H$.
* **Négliger l'analyse qualitative préalable :** Les correcteurs apprécient que le candidat indique *avant* le calcul si le système est un réducteur ou un multiplicateur (vérification par l'ordre de grandeur numérique).