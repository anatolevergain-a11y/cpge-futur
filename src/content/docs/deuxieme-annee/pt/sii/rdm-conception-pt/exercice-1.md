---
title: 'Exercice 1 : Flexion, torsion et flambement'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ CORRIGÉ : Étude d'un bras de levier multifonctionnel

**Filière :** CPGE PT  
**Matière :** Sciences Industrielles de l'Ingénieur (SII)  
Chapitre: ** Résistance des Materiaux (RDM) et Conception  
**Thème :** Sollicitations combinées (Flexion, torsion) et Instabilité élastique (Flambement)

---

## 0. Introduction et Présentation du problème

Dans le cadre de la conception d'un système de levage industriel, on s'intéresse à un bras de liaison représenté par une poutre cylindrique de longueur $L$, de diamètre extérieur $D$ et d'épaisseur $e$ (supposée faible devant $D$, soit $e \ll D$). La poutre est modélisée par un matériau isotrope homogène de module d'Young $E$, de coefficient de Poisson $\nu$ et de limite d'élasticité $\text{R}_e$.

L'objectif de ce problème est de dimensionner cette structure soumise simultanément à de la flexion, de la torsion, et de vérifier sa résistance au flambement.

---

## 1. Caractéristiques géométriques de la section

On note $d = D - 2e$ le diamètre intérieur de la poutre. Le rayon moyen est $R_m = \frac{D - e}{2} \approx \frac{D}{2}$.

### Question 1.1
Exprimer la section de la poutre $S$ en fonction de $D$ et $e$, puis donner l'expression simplifiée au premier ordre en $\frac{e}{D}$.
Correction: **
La surface de la section est la différence entre l'aire du cercle extérieur et du cercle intérieur :
$$S = \frac{\pi}{4} \left( D^2 - d^2 \right) = \frac{\pi}{4} \left[ D^2 - (D - 2e)^2 \right]$$
$$S = \frac{\pi}{4} \left( D^2 - (D^2 - 4De + 4e^2) \right) = \pi e (D - e)$$

Pour un tube mince ($e \ll D$), l'expression simplifiée au premier ordre est :
$$S \approx \pi D e$$

### Question 1.2
Donner l'expression du moment quadratique $I_G$ de la section par rapport à un axe diamétral, et l'expression du moment quadratique polaire $I_P$ par rapport au centre de la section, dans l'approximation des tubes minces.
Correction: **
Pour une section circulaire creuse :
* Moment quadratique par rapport à un axe diamétral : 
  $$I_G = \frac{\pi}{64} (D^4 - d^4)$$
  En posant $d = D(1 - 2e/D)$ et en développant pour $e \ll D$, on obtient l'approximation des tubes minces :
  $$I_G \approx \frac{\pi}{8} D^3 e$$
* Moment quadratique polaire ($I_P = 2 I_G$ dans le cas circulaire) :
  $$I_P \approx \frac{\pi}{4} D^3 e$$

---

## 2. Sollicitations et Étude de la résistance (Flexion et Torsion)

Le bras est encastré en $A$ ($x=0$) et soumis en son extrémité libre $B$ ($x=L$) à un effort tridimensionnel. On néglige son poids propre. 
Au point $B$, le torseur des efforts extérieurs appliqués par la charge est :
$$\{\text{T}_{\text{ext} \to \text{poutre}}(B)\} = \begin{Bmatrix} 
0 & 0 \\ 
F_y & 0 \\ 
0 & C_z 
\end{Bmatrix}_{(\vec{x}, \vec{y}, \vec{z})}$$
Soit une force transversale $\vec{F} = F_y \vec{y}$ et un moment de torsion $\vec{C} = C_z \vec{z}$.

### Question 2.1
Déterminer le torseur de cohésion $\{\text{T}_{\text{coh}}(x)\}$ en une section droite d'abscisse $x$. En déduire les sollicitations simples subies par la poutre.
Correction: **
En appliquant le PFD à la portion de poutre comprise entre $x$ et $L$ :
$$\{\text{T}_{\text{coh}}(x)\} = \begin{Bmatrix} 
0 & 0 \\ 
-F_y & -F_y(L-x) \\ 
0 & C_z 
\end{Bmatrix}_{(\vec{x}, \vec{y}, \vec{z})}$$

Les sollicitations sont :
* Un effort tranchant $T_y = -F_y$
* Un moment fléchissant $Mf_z = -F_y(L-x)$ (Flexion plane simple)
* Un moment de torsion $Mt_x = C_z$ (Torsion simple)

### Question 2.2
Identifier la section la plus sollicitée et exprimer la contrainte normale maximale $\sigma_{\max}$ due à la flexion ainsi que la contrainte tangentielle maximale $\tau_{\max}$ due à la torsion.
Correction: **
La section la plus sollicitée en flexion est l'encastrement ($x = 0$), là où le moment fléchissant est maximal en valeur absolue : $|Mf_z(0)| = F_y L$.
La contrainte normale maximale de flexion s'exprime par :
$$\sigma_{\max} = \frac{|Mf_z|_{\max}}{I_G / (D/2)} = \frac{F_y L}{\frac{\pi}{8} D^3 e} \frac{D}{2} = \frac{4 F_y L}{\pi D^2 e}$$

La contrainte tangentielle maximale de torsion (sur la fibre extérieure du tube) est :
$$\tau_{\max} = \frac{|Mt_x|}{I_P / (D/2)} = \frac{C_z}{\frac{\pi}{4} D^3 e} \frac{D}{2} = \frac{2 C_z}{\pi D^2 e}$$

### Question 2.3
En utilisant le critère de Von Mises, écrire la condition de résistance sous la forme d'une inéquation liant $F_y$, $C_z$, $D$, $e$ et $\text{R}_e$.
Correction: **
Le critère de Von Mises pour un état plan de contraintes (contrainte normale $\sigma$ et contrainte tangentielle $\tau$) s'écrit :
$$\sigma_{eq} = \sqrt{\sigma^2 + 3\tau^2} \le \frac{\text{R}_e}{s}$$
*(où $s$ est le coefficient de sécurité, que l'on prendra égal à 1 pour simplifier l'expression brute).*

En remplaçant $\sigma$ par $\sigma_{\max}$ et $\tau$ par $\tau_{\max}$ :
$$\sqrt{\left(\frac{4 F_y L}{\pi D^2 e}\right)^2 + 3\left(\frac{2 C_z}{\pi D^2 e}\right)^2} \le \text{R}_e$$
Soit :
$$\frac{2}{\pi D^2 e} \sqrt{4 (F_y L)^2 + 3 C_z^2} \le \text{R}_e$$

---

## 3. Risque d'instabilité élastique (Flambement)

On suppose désormais que la poutre est soumise à un effort normal de compression pur $\vec{N} = -N_0 \vec{x}$ ($N_0 > 0$) appliqué en $B$. 

### Question 3.1
R rappeler la formule d'Euler donnant la charge critique de flambement $N_cr$ pour cette poutre encastrée-libre.
Correction: **
Pour une poutre encastrée à une extrémité et libre à l'autre (cas $1$), la longueur flambée est $L_f = 2L$.
La formule d'Euler donne :
$$N_{cr} = \frac{\pi^2 E I_G}{L_f^2} = \frac{\pi^2 E I_G}{(2L)^2} = \frac{\pi^2 E I_G}{4 L^2}$$

### Question 3.2
En déduire l'expression de $N_{cr}$ en fonction de $E$, $D$, $e$ et $L$. 
Correction: **
En remplaçant $I_G$ par son expression dans l'approximation des tubes minces ($\frac{\pi}{8} D^3 e$) :
$$N_{cr} = \frac{\pi^2 E \left(\frac{\pi}{8} D^3 e\right)}{4 L^2} = \frac{\pi^3 E D^3 e}{32 L^2}$$

---

## 4. Application numérique et Analyse critique

### Question 4.1
On donne les caractéristiques numériques suivantes :
* $L = 1,2 \text{ m}$
* $D = 80 \text{ mm} = 0,08 \text{ m}$
* $e = 4 \text{ mm} = 0,004 \text{ m}$
* $E = 210 \text{ GPa} = 210 \times 10^9 \text{ Pa}$ (Acier)
* $\text{R}_e = 235 \text{ MPa} = 235 \times 10^6 \text{ Pa}$

Calculer la charge critique de flambement $N_{cr}$.
Correction: **
A.N. :
$$N_{cr} = \frac{\pi^3 \times (210 \times 10^9) \times (0,08)^3 \times 0,004}{32 \times (1,2)^2}$$
$$N_{cr} = \frac{31,006 \times (210 \times 10^9) \times (5,12 \times 10^{-4}) \times 0,004}{32 \times 1,44}$$
$$N_{cr} = \frac{13292,8}{46,08} \approx 288,4 \times 10^3 \text{ N} = 288,4 \text{ kN}$$

### Question 4.2 : Analyse critique
Un ingénieur affirme que puisque la charge de flambement est de $288 \text{ kN}$, on peut sans risque appliquer un effort de compression de $200 \text{ kN}$ sur ce bras de levier. 
Discuter cette affirmation au regard des hypothèses de la RDM et des critères de sécurité usuels en conception industrielle.

**Correction de l'analyse critique :**
L'affirmation de l'ingénieur appellent plusieurs réserves fondamentales :
1. **Coefficient de sécurité :** Un effort de $200 \text{ kN}$ par rapport à une limite critique de $288 \text{ kN}$ conduit à un coefficient de sécurité $s = \frac{288}{200} = 1,44$. En construction mécanique, pour des phénomènes d'instabilité (qui sont catastrophiques car non progressifs), le coefficient de sécurité minimal exigé est généralement de l'ordre de $3$ à $4$.
2. **Domaine de validité de la formule d'Euler :** La formule d'Euler n'est valable que si la contrainte normale de compression reste inférieure à la limite d'élasticité ($\frac{N_0}{S} < \text{R}_e$). Vérifions la section $S$ :
   $$S \approx \pi D e = \pi \times 0,08 \times 0,004 \approx 1,005 \times 10^{-3} \text{ m}^2$$
   Pour $N_0 = 200 \text{ kN}$ :
   $$\sigma_{\text{comp}} = \frac{200 \times 10^3}{1,005 \times 10^{-3}} \approx 199 \text{ MPa}$$
   Cette valeur est très proche de $\text{R}_e = 235 \text{ MPa}$. Il y a donc un risque majeur de **plastification de la section** avant même que le flambement élastique pur ne se produise.
3. **Sollicitations combinées :** En réalité, le bras subit de la flexion et de la torsion en plus de la compression. L'interaction des efforts (flambement + flexion, dit effet $P-\delta$) réduit considérablement la charge critique admissible. 
Conclusion: ** L'affirmation est fausse et dangereuse. La structure céderait par plastification ou par flambement interactif bien avant d'atteindre les $200 \text{ kN}$.