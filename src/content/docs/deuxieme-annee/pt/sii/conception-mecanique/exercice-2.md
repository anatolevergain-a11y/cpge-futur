---
title: 'Exercice 2 : Résistance des matériaux (RDM)'
description: 'Problème d entraînement type concours.'
---

# Problème Guidé : Dimensionnement d'un bras de levier de préhenseur industriel

**Filière :** PT  
**Matière :** Sciences Industrielles de l'Ingénieur (SII)  
Chapitre: ** Conception mécanique / Résistance des Matériaux (RDM)  

---

## Énoncé

Dans le cadre de l'automatisation d'une ligne d'emballage à haute cadence, on s'intéresse au bras de levier d'un préhenseur mécanique. Ce bras permet de serrer une charge utile cylindrique de masse $m$. 

Le bras est modélisé par une poutre rectangulaire de longueur $L$, de largeur $b$ et de hauteur $h$. Il est encastré dans un bâti rigide en $x = 0$ et soumis à l'extrémité $x = L$ à une force de serrage globale $\vec{F} = -F \vec{y}$. 

La figure ci-dessous schématise le problème :
* Encastrement en $A$ (origine $x = 0$).
* Application de la force $\vec{F}$ en $B$ ($x = L$).
* Section droite rectangulaire constante $S = b \times h$.

**Données numériques et caractéristiques du matériau :**
* Masse de la charge : $m = 50\text{ kg}$
* Accélération de la pesanteur : $g = 9{,}81\text{ m}\cdot\text{s}^{-2}$
* Coefficient de sécurité exigé : $s = 2{,}5$
* Longueur du bras : $L = 250\text{ mm}$
* Largeur de la section : $b = 30\text{ mm}$
* Matériau choisi : Acier de construction (Limite d'élasticité $R_e = 235\text{ MPa}$, Module de Young $E = 210\text{ GPa}$)

---

## Questions

1. **Modélisation et Torseur de cohésion**
   1.1. Déterminer l'effort maximal $F$ exercé à l'extrémité $B$ du bras, sachant que le système dynamique maximal engendre une accélération équivalente à $2g$ sur la charge.
   1.2. Isoler le tronçon de poutre situé entre une abscisse $x \in [0, L]$ et l'extrémité $B$. Exprimer le torseur de cohésion $\{T_{\text{coh}}(x)\} = \left\{ \begin{array}{c} \vec{R}_{\text{coh}}(x) \\ \vec{M}_{S,\text{coh}}(x) \end{array} \right\}_C$ au centre de surface $C$ de la section droite.

2. **Sollicitations et Contraintes**
   2.1. Identifier la sollicitation simple ou composée subie par cette poutre.
   2.2. Exprimer le moment fléchissant maximal $M_{fy,\text{max}}$ dans la poutre et préciser la section critique.
   2.3. Rappeler l'expression de la contrainte normale maximale $\sigma_{\text{max}}$ due à la flexion en fonction de $M_{fy,\text{max}}$ et du module de flexion $I_G/v$. Exprimer ce dernier en fonction de $b$ et $h$.

3. **Dimensionnement et Analyse critique**
   3.1. En appliquant la condition de résistance (critère de Tresca ou Von Mises adapté à la flexion pure), déterminer la hauteur minimale $h_{\text{min}}$ de la section pour respecter le coefficient de sécurité $s$.
   3.2. **Analyse critique et limites du modèle :** On choisit finalement une hauteur normalisée $h = 40\text{ mm}$. 
        * Calculer la flèche maximale (déplacement maximal selon $\vec{y}$) subie par l'extrémité du bras.
        * L'hypothèse des poutres (Bernoulli-Navier) et l'hypothèse des petits déplacements sont-elles rigoureusement validées ? Conclure sur la pertinence du modèle.

---

## Pistes

* **Q1.1 :** Pensez à appliquer le principe fondamental de la dynamique (ou statique ramenée au dynamique par le principe de d'Alembert) avec l'effort dynamique maximal.
* **Q1.2 :** Le torseur de cohésion se calcule en coupant la poutre par la pensée et en écrivant l'équilibre du tronçon isolé. Attention au sens des efforts (convention des efforts intérieurs).
* **Q2.3 :** Le moment quadratique d'un rectangle de base $b$ et de hauteur $h$ par rapport à son axe neutre est $I_{Gz} = \frac{b h^3}{12}$.
* **Q3.2 :** La flèche maximale d'une poutre en console soumise à une charge concentrée en bout est donnée par $y_{\text{max}} = \frac{F L^3}{3 E I_{Gz}}$. Vérifiez le ratio $y_{\text{max}}/L$.

---

## Corrigé pas à pas

### 1. Modélisation et Torseur de cohésion
1.1. L'effort maximal de serrage intègre l'accélération dynamique :
$$F = m \cdot a_{\text{max}} = m \cdot (2g) = 50 \times (2 \times 9{,}81) = 981\text{ N}$$

1.2. Pour une abscisse $x \in [0, L]$, en coupant la poutre et en isolant la partie droite $x \in [x, L]$ soumise à $\vec{F} = -F \vec{y}$ en $x=L$ :
L'équilibre statique du tronçon donne le torseur de cohésion au centre $C(x, 0, 0)$ :
* Résultante : $\vec{R}_{\text{coh}} = +F \vec{y}$
* Moment : $\vec{M}_{C,\text{coh}} = -\vec{CB} \wedge (-F \vec{y}) = -((L-x)\vec{x}) \wedge (-F \vec{y}) = -F(L-x)\vec{z}$

Soit le torseur :
$$\{T_{\text{coh}}(x)\} = \begin{cases} R_x = 0 & M_x = 0 \\ R_y = F & M_y = 0 \\ R_z = 0 & M_z = -F(L-x) \end{cases}_C$$

---

### 2. Sollicitations et Contraintes
2.1. Le torseur se réduit à un effort tranchant $R_y$ et un moment fléchissant $M_z$. Néanmoins, face aux dimensions usuelles des poutres en flexion simple, l'effort tranchant a un impact négligeable sur les contraintes normales maximales devant le moment fléchissant. La sollicitation prépondérante est la **flexion plane pure**.

2.2. Le moment fléchissant en valeur absolue est maximal là où son expression est la plus grande, c'est-à-dire à l'encastrement ($x = 0$) :
$$M_{fy,\text{max}} = |M_z(0)| = F \cdot L = 981 \times 0{,}250 = 245{,}25\text{ N}\cdot\text{m}$$

2.3. La contrainte normale maximale s'exprime par :
$$\sigma_{\text{max}} = \frac{M_{fy,\text{max}}}{I_{Gz} / (h/2)} = \frac{M_{fy,\text{max}}}{I_G/v}$$
Le module de flexion pour une section rectangulaire $b \times h$ est :
$$\frac{I_{Gz}}{v} = \frac{\frac{b h^3}{12}}{\frac{h}{2}} = \frac{b h^2}{6}$$
D'où : $\sigma_{\text{max}} = \frac{6 F L}{b h^2}$

---

### 3. Dimensionnement et Analyse critique
3.1. La condition de résistance élastique avec un coefficient de sécurité $s$ s'écrit :
$$\sigma_{\text{max}} \le \sigma_{adm} \quad \text{avec} \quad \sigma_{adm} = \frac{R_e}{s}$$
$$\frac{6 F L}{b h^2} \le \frac{R_e}{s} \implies h^2 \ge \frac{6 F L s}{b R_e}$$
Application numérique :
* $6 F L s = 6 \times 981 \times 0{,}250 \times 2{,}5 = 3678{,}75\text{ N}\cdot\text{m}$
* $b R_e = 0{,}030\text{ m} \times (235 \times 10^6\text{ Pa}) = 7{,}05 \times 10^6\text{ N/m}$
* $h^2 \ge \frac{3678{,}75}{7{,}05 \times 10^6} \approx 5{,}218 \times 10^{-4}\text{ m}^2$
* $h_{\text{min}} = \sqrt{5{,}218 \times 10^{-4}} \approx 0{,}0228\text{ m} = 22{,}8\text{ mm}$

3.2. **Analyse critique et limites du modèle :**
* On choisit $h = 40\text{ mm}$ (ce qui est supérieur à $22{,}8\text{ mm}$ et standard en profil).
* Calcul du moment quadratique $I_{Gz}$ :
  $$I_{Gz} = \frac{0{,}030 \times (0{,}040)^3}{12} = 1{,}6 \times 10^{-7}\text{ m}^4$$
* Calcul de la flèche maximale à l'extrémité $B$ :
  $$y_{\text{max}} = \frac{F L^3}{3 E I_{Gz}} = \frac{981 \times (0{,}250)^3}{3 \times (210 \times 10^9) \times (1{,}6 \times 10^{-7})} = \frac{981 \times 0{,}015625}{100800} \approx 1{,}52 \times 10^{-4}\text{ m} = 0{,}152\text{ mm}$$

* **Vérification des hypothèses :**
  1. *Petits déplacements :* $y_{\text{max}} = 0{,}152\text{ mm}$ pour $L = 250\text{ mm}$. Le rapport $\frac{y_{\text{max}}}{L} \approx 6 \times 10^{-4} \ll 1$. L'hypothèse des petits déplacements est **parfaitement validée**.
  2. *Hypothèse de Navier-Bernoulli (élancement) :* Le rapport $\frac{L}{h} = \frac{250}{40} = 6{,}25$. Or, le modèle des poutres requiert généralement un élancement $\frac{L}{h} > 10$. Ici, $6{,}25$ est un peu faible : **les effets du cisaillement transverse (négligés par Bernoulli) commencent à devenir non négligeables** (effet Timoshenko). Le modèle sous-estime légèrement la déflexion réelle, bien que le dimensionnement en contrainte reste acceptable vu le coefficient de sécurité choisi ($s = 2{,}5$).