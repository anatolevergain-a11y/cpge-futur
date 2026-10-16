---
title: 'Cours : Résistance des matériaux (RDM)'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Résistance des Matériaux (RDM)
**Filière :** MP/PC/PSI/PT (Spécificité PT : Rigueur des modélisations géométriques et cinématiques)  
Niveau: ** Deuxième année  

---

## 1. Introduction et Hypothèses Fondamentales

La Résistance des Matériaux (RDM) a pour objet l'étude du comportement mécanique des structures solides déformables afin d'en dimensionner les pièces (choix des matériaux, des formes et des dimensions) pour garantir la sécurité et le service attendu.

### 1.1. Définition d'une Poutre
Une poutre est un solide engendré par une surface plane (la section droite) dont le centre de gravité $G$ décrit une courbe plane (la ligne moyenne) et dont les dimensions transversales sont petites devant la longueur.

### 1.2. Hypothèses de Bernoulli (Navier-Bernoulli)
Ce sont les hypothèses cinématiques fondamentales de la RDM pour les poutres élancées :
1. **Conservation des sections droites :** Les sections planes perpendiculaires à la ligne moyenne avant déformation restent planes et perpendiculaires à la ligne moyenne après déformation. (Pas de gauchissement).
2. **Invariance de la section :** Les dimensions de la section droite ne varient pas lors de la déformation.
3. **Petites perturbations :** Les déplacements et les déformations sont infiniment petits devant les dimensions géométriques de la poutre.

---

## 2. Torseur des Efforts Internes

### 2.1. Coupure d'une poutre
Considérons une poutre soumise à des chargements extérieurs. Par la pensée, effectuons une coupure en une abscisse $x$ de sa ligne moyenne, séparant la poutre en deux tronçons (1) et (2). 

Pour assurer l'équilibre de chaque tronçon, il existe des actions mécaniques de cohésion exercées par le tronçon (1) sur le tronçon (2).

### 2.2. Définition du Torseur de Cohésion (ou des efforts internes)
Au centre de gravité $G(x)$ de la section droite, le torseur des efforts internes $\{T_{cohu}(x)\}$ est noté :
$$\{T_{cohu}(x)\} = \left\{ \begin{array}{c} \vec{R}_{1\to 2} \\ \vec{M}_{1\to 2}(G) \end{array} \right\}_G = \left\{ \begin{array}{cc} N(x) & \text{N} \\ Ty(x) & \text{N} \\ Tz(x) & \text{N} \\ Mt(x) & \text{N}\cdot\text{m} \\ Mfy(x) & \text{N}\cdot\text{m} \\ Mfz(x) & \text{N}\cdot\text{m} \end{array} \right\}_G$$

Avec le repère local $(G, \vec{x}, \vec{y}, \vec{z})$ où $\vec{x}$ est tangent à la ligne moyenne :
*   $N(x)$ : **Effort normal** (traction ou compression).
*   $Ty(x)$ : **Effort tranchant** selon $\vec{y}$.
*   $Tz(x)$ : **Effort tranchant** selon $\vec{z}$.
*   $Mt(x)$ : **Moment de torsion**.
*   $Mfy(x)$ : **Moment fléchissant** selon $\vec{y}$.
*   $Mfz(x)$ : **Moment fléchissant** selon $\vec{z}$.

---

## 3. Étude des Sollicitations Élémentaires

### 3.1. Traction / Compression simple
*   **Torseur de cohésion réduit :** Seul $N(x) \neq 0$.
*   **Loi de comportement (Hooke 1D) :** 
    $$\sigma_{xx} = E \cdot \varepsilon_{xx}$$
    *   $\sigma_{xx}$ : Contrainte normale ($\text{MPa}$ ou $\text{N}/\text{mm}^2$).
    *   $E$ : Module d'Young du matériau ($\text{MPa}$ ou $\text{GPa}$).
    *   $\varepsilon_{xx} = \frac{du}{dx}$ : Allongement relatif.
*   **Formule de Navier (Contraintes) :**
    $$\sigma_{xx} = \frac{N(x)}{S}$$
    où $S$ est l'aire de la section droite.
*   **Condition de résistance :** 
    $$\max |\sigma_{xx}| \le Rpe = \frac{Re}{s}$$
    ($Re$ : limite d'élasticité, $s$ : coefficient de sécurité).

### 3.2. Cisaillement pur
*   **Torseur de cohésion réduit :** Seul $Ty(x)$ ou $Tz(x) \neq 0$.
*   **Loi de comportement :** $\tau = G \cdot \gamma$ ($G$ : module de cisaillement, $\gamma$ : glissement).
*   **Formule (moyenne) :** $\tau_{xy} = \frac{Ty}{S}$. (Attention, la répartition réelle n'est pas uniforme).

### 3.3. Torsion uniforme
*   **Torseur de cohésion réduit :** Seul $Mt(x) \neq 0$.
*   **Formule de Navier (Contraintes tangentielles pour les sections circulaires de rayon $r$) :**
    $$\tau(r) = \frac{Mt}{I_P} \cdot r$$
    où $I_P$ est le moment quadratique polaire ($I_P = \frac{\pi d^4}{32}$ pour un cercle plein).
*   **Relation cinématique (Angle de torsion $\theta$) :**
    $$\frac{d\theta}{dx} = \frac{Mt(x)}{G \cdot I_P}$$

### 3.4. Flexion plane (ou Flexion simple / pure)
On se place en flexion pure (seul $Mfz \neq 0$) ou simple ($Mfz$ et $Ty \neq 0$, l'effet de $Ty$ sur les contraintes normales étant négligé pour les poutres élancées).

*   **Formule de Navier (Contraintes normales dues à la flexion) :**
    $$\sigma_{xx}(y, z) = -\frac{Mfz(x)}{I_{Gz}} \cdot y$$
    où $I_{Gz} = \iint_S y^2 dS$ est le moment quadratique de la section par rapport à l'axe $(G, \vec{z})$.
*   **Contrainte maximale :**
    $$\sigma_{\max} = \frac{|Mfz|}{\text{Wel}_z} \quad \text{avec} \quad \text{Wel}_z = \frac{I_{Gz}}{v_{\max}}$$
    ($\text{Wel}_z$ : module de flexion, $v_{\max}$ : distance maximale à l'axe neutre).

---

## 4. Déformée d'une Poutre en Flexion

### 4.1. Relation Moment - Courbure
Dans l'hypothèse des petites perturbations, la courbure de la ligne moyenne $\frac{1}{R}$ s'exprime par la dérivée seconde de la flèche $v(x)$ (déplacement transversal selon $\vec{y}$) :
$$\frac{d^2v(x)}{dx^2} \approx -\frac{Mfz(x)}{E \cdot I_{Gz}}$$

### 4.2. Équation différentielle de la déformée
En combinant l'équstaticité (détermination de $Mfz(x)$ via le PFD ou le PFS) et la loi de comportement, on obtient l'équation différentielle fondamentale de la RDM en flexion :
$$E \cdot I_{Gz} \frac{d^2v(x)}{dx^2} = -Mfz(x)$$

---

## 5. Méthode de Résolution d'un Problème de RDM

1.  **Isoler** la poutre (ou un tronçon).
2.  Appliquer le **PFS** pour déterminer les réactions aux liaisons.
3.  Effectuer une **coupure** fictive pour déterminer le torseur des efforts internes en fonction de $x$ (attention aux singularités et aux changements de chargement $\Rightarrow$ plusieurs tronçons possibles).
4.  Écrire la **condition de résistance** (dimensionnement ou vérification).
5.  Si calcul de déformation : intégrer l'équation différentielle de la déformée en utilisant les **conditions aux limites** (continuité de la flèche et de la pente aux raccordements, valeurs imposées aux appuis).

---

## 6. Pièges et Erreurs Classiques (Attention PT !)

*   **Homogénéité des unités :** C'est la cause n°1 d'échec. Toujours tout convertir dans le système international avant application numérique (mm en m, MPa en Pa ou $\text{N}/\text{mm}^2$).
    *   *Rappel :* $1 \text{ MPa} = 1 \text{ N/mm}^2 = 10^6 \text{ Pa}$.
*   **Signes du moment fléchissant :** La convention des efforts internes (Isolé $\to$ sortant) impose des signes stricts. Une erreur de signe dans $Mfz(x)$ fausse toute l'intégration de la déformée.
*   **Application de Navier :** La formule $\sigma = \frac{Mfz}{I_{Gz}} y$ n'est valable **que** dans le cas de poutres élancées, de sections symétriques par rapport au plan de flexion, et hors des zones de concentration de contraintes (trous, entailles).
*   **Conditions aux limites :** Ne pas confondre encastrement ($v=0$ et $v'=0$) et appui simple ($v=0$).