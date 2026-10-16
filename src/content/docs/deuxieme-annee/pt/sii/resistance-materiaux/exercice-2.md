---
title: 'Exercice 2 : Flexion et moment quadratique'
description: 'Problème d entraînement type concours officiel.'
---

# Problème guidé : Étude d'une poutre de section creuse en flexion pure et déviée

## 1. Énoncé

Dans le cadre de la conception d'un bras manipulateur léger pour système automatisé, on s'intéresse à la modélisation et au dimensionnement de l'avant-bras. Cet élément est modélisé par une poutre prismatique droite, de longueur $L$, encastrée à une extrémité ($x = 0$) et soumise à des efforts à son extrémité libre ($x = L$).

La section droite de la poutre est un profilé creux rectangulaire de dimensions extérieures $B$ et H, et d'épaisseur constante $e$ (avec $e \ll B$ et $e \ll H$). Le matériau constitutif est un alliage d'aluminium de module d'Young $E = 70 \text{ GPa}$ et de limite d'élasticité $\text{R}_e = 280 \text{ MPa}$.

Données numériques :
*   $L = 1,0 \text{ m}$
*   $B = 60 \text{ mm}$
*   $H = 100 \text{ mm}$
*   $e = 4 \text{ mm}$
*   Effort appliqué à l'extrémité $x = L$ : $\vec{F} = -F_y \vec{y} - F_z \vec{z}$, avec $F_y = 1500 \text{ N}$ et $F_z = 500 \text{ N}$.

---

## 2. Questions

1.  **Modélisation cinématique et statique :** Définir le repère local de la poutre et préciser les hypothèses de la Résistance des Matériaux (RDM) appliquées à ce problème (géométrie, chargement, comportement du matériau).
2.  **Calcul géométrique :** Exprimer analytiquement, puis calculer numériquement les moments quadratiques $I_y$ et $I_z$ de la section par rapport aux axes principaux de inertia $Gyn$ et $Gzn$. On pourra utiliser l'approximation des parois minces.
3.  **Torseur de cohésion :** Déterminer l'expression du torseur de cohésion $\{T_{\text{coh}}(x)\}$ en tout section $x$ de la poutre.
4.  **Contraintes normales :** Établir l'expression de la contrainte normale $\sigma_{xx}(y, z)$ dans la section. Calculer sa valeur maximale en valeur absolue et identifier la position des points les plus sollicités.
5.  **Dimensionnement et critère de résistance :** En appliquant le critère de Tresca ou de Von Mises (on justifiera l'utilisation de $\sigma_{xx}$ seule), vérifier si le profilé choisi résiste au chargement avec un coefficient de sécurité $s = 2$.
6.  **Déflélection :** Calculer la flèche maximale $\delta_{\max}$ à l'extrémité de la poutre.
7.  **Analyse critique :** Discuter des limites du modèle de RDM utilisé, notamment concernant les hypothèses géométriques et les conditions aux limites aux encastrements.

---

## 3. Pistes et indications

*   *Indication Q2 :* Pour une section rectangulaire creuse de dimensions $B \times H$ et d'épaisseur $e$, le moment quadratique par rapport à l'axe médian horizontal (parallèle à $y$) est donné approximativement par $I_z \approx \frac{B H^3}{12} - \frac{(B-2e)(H-2e)^3}{12}$. Avec l'hypothèse $e \ll$, un développement limité au premier ordre en $e$ donne $I_z \approx \frac{B H^3}{12} \left(1 - \left(1-\frac{2e}{B}\right)\left(1-\frac{2e}{H}\right)^3\right)$ ou plus simplement en considérant les quatre rectilignes composant les parois d'épaisseur $e$.
*   *Indication Q4 :* La formule de Navier donne $\sigma_{xx}(y, z) = -\frac{M_{fy}(x)}{I_y} z + \frac{M_{fz}(x)}{I_z} y$ (selon l'orientation des axes). Soyez rigoureux sur les signes.
*   *Indication Q7 :* Pensez à l'effet de la concentration de contraintes au niveau de l'encastrement et aux déformations par cisaillement (négligées en théorie d'Euler-Bernoulli).

---

## 4. Corrigé pas à pas

### Q1 : Modélisation et hypothèses
Le repère local est attaché au centre de gravité de la section droite : $G(x, y, z)$. L'axe $\vec{x}$ est porté par la ligne moyenne de la poutre.
*   **Hypothèses géométriques :** Poutre droite, $L \gg B$ et $L \gg H$ (élancement vérifié), section constante.
*   **Hypothèses cinématiques (Bernoulli-Navier) :** Les sections droites restent planes, normales à la ligne moyenne et indéformables au cours de la déformation.
*   **Comportement du matériau :** Linéaire, élastique, isotrope (loi de Hooke).

### Q2 : Calcul des moments quadratiques
En appliquant la formule pour une section creuse mince rectangulaire ($B=60\text{ mm}$, $H=100\text{ mm}$, $e=4\text{ mm}$) :
*   Moment quadratique par rapport à l'axe $Gy$ (flexion dans le plan $(x,z)$ due à $F_z$) :
    $$I_y \approx \frac{2}{12} e B^3 + 2 \left( \frac{H e^3}{12} + H e \left(\frac{B}{2}\right)^2 \right)$$
    Par simplification des parois minces ($e$ petit devant $B$ et $H$) :
    $$I_y \approx \frac{H B^3}{12} - \frac{(H-2e)(B-2e)^3}{12}$$
    A.N. : $I_y \approx \frac{100 \times 60^3}{12} - \frac{92 \times 52^3}{12} \approx 1,80 \times 10^6 \text{ mm}^4 = 1,80 \times 10^{-6} \text{ m}^4$.
*   Moment quadratique par rapport à l'axe $Gz$ (flexion dans le plan $(x,y)$ due à $F_y$) :
    $$I_z \approx \frac{B H^3}{12} - \frac{(B-2e)(H-2e)^3}{12}$$
    A.N. : $I_z \approx \frac{60 \times 100^3}{12} - \frac{52 \times 92^3}{12} = 5,00 \times 10^6 \text{ mm}^4 = 5,00 \times 10^{-6} \text{ m}^4$.

### Q3 : Torseur de cohésion
En coupant la poutre à une abscisse $x$, pour un effort appliqué en $x=L$, le torseur de cohésion est :
$$\{T_{\text{coh}}(x)\} = \begin{Bmatrix} 
0 & 0 \\
0 & M_{fy}(x) = -F_z (L-x) \\
0 & M_{fz}(x) = F_y (L-x) 
\end{Bmatrix}_G$$
Les efforts tranchants sont $T_y = F_y$ et $T_z = F_z$. Le moment de torsion est nul ($Mt = 0$).

### Q4 : Contraintes normales
La contrainte normale maximale est obtenue à l'encastrement ($x=0$) là où les moments fléchissants sont maximaux en valeur absolue :
*   $M_{fy}(0) = -F_z L = -500 \times 1,0 = -500 \text{ N}\cdot\text{m}$
*   $M_{fz}(0) = F_y L = 1500 \times 1,0 = 1500 \text{ N}\cdot\text{m}$

La formule de Navier donne :
$$\sigma_{xx}(y, z) = -\frac{M_{fy}(0)}{I_y} z + \frac{M_{fz}(0)}{I_z} y$$
Les contraintes maximales se produisent aux coins de la section, là où $|y| = B/2 = 30 \text{ mm}$ et $|z| = H/2 = 50 \text{ mm}$ :
$$\sigma_{\max} = \left| -\frac{-500}{1,80 \times 10^{-6}} \times (0,050) \right| + \left| \frac{1500}{5,00 \times 10^{-6}} \times (0,030) \right|$$
$$\sigma_{\max} = 13,89 \text{ MPa} + 9,00 \text{ MPa} = 22,89 \text{ MPa}$$

### Q5 : Dimensionnement et critère de résistance
La contrainte équivalente de Von Mises (ou Tresca, puisque $\tau$ est faible devant $\sigma$ en bout de poutre) se réduit ici à $\sigma_{\text{eq}} = \sigma_{\max} = 22,89 \text{ MPa}$.
La condition de résistance avec un coefficient de sécurité $s = 2$ est :
$$\sigma_{\text{eq}} \le \frac{\text{R}_e}{s} \implies 22,89 \text{ MPa} \le \frac{280}{2} = 140 \text{ MPa}$$
Conclusion: ** La condition de résistance est largement respectée. Le profilé est même surdimensionné.

### Q6 : Déflélection maximale
La flèche totale à l'extrémité $x=L$ se calcule par composition des flèches selon les deux axes principaux :
*   Flèche selon $\vec{y}$ due à $M_{fz}$ : $\delta_y(L) = \frac{F_y L^3}{3 E I_z} = \frac{1500 \times 1,0^3}{3 \times 70 \times 10^9 \times 5,00 \times 10^{-6}} = 1,43 \times 10^{-3} \text{ m} = 1,43 \text{ mm}$
*   Flèche selon $\vec{z}$ due à $M_{fy}$ : $\delta_z(L) = \frac{F_z L^3}{3 E I_y} = \frac{500 \times 1,0^3}{3 \text{ (attention signe)} 70 \times 10^9 \times 1,80 \times 10^{-6}} = 1,32 \times 10^{-3} \text{ m} = 1,32 \text{ mm}$

La flèche totale est :
$$\delta_{\max} = \sqrt{\delta_y^2 + \delta_z^2} = \sqrt{1,43^2 + 1,32^2} \approx 1,95 \text{ mm}$$

### Q7 : Analyse critique et limites du modèle
*   **Hypothèse de Bernoulli :** Néglige l'effet du cisaillement transverse sur la déformée (correction de Timoshenko). Vu l'élancement ($L/H = 1,0 / 0,1 = 10$), cette erreur reste faible (estimée à moins de 5%).
*   **Effet d'encastrement :** Le modèle de RDM suppose l'encastrement parfait sans concentration de contraintes. Or, géométriquement, les zones de raccordement subissent des effets de bord tridimensionnels (effet Saint-Venant) non captés par la théorie des poutres, pouvant induire des pics de contraintes locales supérieurs au calcul nominal.
*   **Voilement des parois minces :** Avec $e = 4 \text{ mm}$ pour une largeur de $60 \text{ mm}$, les parois comprimées risquent un **voilement local** (instabilité élastique) bien avant que la limite d'élasticité du matériau $\text{R}_e$ ne soit atteinte. Ce phénomène n'est pas modélisé par la RDM classique et nécessite une analyse par plaques/coques ou éléments finis.