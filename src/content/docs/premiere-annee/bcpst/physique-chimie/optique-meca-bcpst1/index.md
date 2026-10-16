---
title: 'Cours : Optique géométrique et Mécanique des fluides'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Optique géométrique et Mécanique des fluides
**Filière :** BCPST 1ère année — Physique-Chimie  
Auteur: ** Professeur agrégé en CPGE

---

## MODULE I : Optique Géométrique

L'optique géométrique étudie la propagation de la lumière à l'aide de la notion de **rayon lumineux**, valable lorsque les dimensions des obstacles ou des ouvertures sont très grandes devant la longueur d'onde $\lambda$ du rayonnement ($\lambda \to 0$).

### 1. Lois de Snell-Descartes

Soit un dioptre séparant deux milieux transparents, homogènes et isotropes d'indices optiques respectifs $n_1$ et $n_2$ (avec $n = \frac{c}{v} \ge 1$).

*   **1ère loi (Réflexion et Réfraction) :** Le rayon réfléchi et le rayon réfracté sont dans le plan d'incidence (plan défini par le rayon incident et la normale au dioptre au point d'incidence).
*   **2ème loi (Réflexion) :** L'angle de réflexion $\theta_r$ est égal à l'angle d'incidence $\theta_1$ en valeur algébrique : 
    $$ \theta_r = -\theta_1 $$
*   **3ème loi (Réfraction) :** Les angles d'incidence $\theta_1$ et de réfraction $\theta_2$ relient les indices par la relation :
    $$ n_1 \sin(\theta_1) = n_2 \sin(\theta_2) $$

> **Phénomène de réflexion totale :** Si $n_1 > n_2$, il existe un angle limite d'incidence $\theta_{\text{lim}} = \arcsin\left(\frac{n_2}{n_1}\right)$ au-delà duquel aucun rayon réfracté n'existe ; toute la lumière est réfléchie.

---

### 2. Systèmes Centrés et Stigmatisme

*   **Stigmatisme rigoureux :** Un système est stigmatique pour un point source $A$ si tous les rayons issus de $A$ convergent, après traversée du système, en un même point $A'$.
*   **Conditions de Gauss :** Pour obtenir un stigmatisme approché (et une image nette sur un plan de，$p$ar exemple), on se place dans les conditions de Gauss :
    1. Les rayons incidents font un angle petit avec l'axe optique.
    2. Les rayons incidents sont peu éloignés du sommet du système.

---

### 3. Lentilles Minces

Une lentille est dite mince si son épaisseur au centre est négligeable devant les rayons de courbure de ses faces et devant la distance focale.

*   **Vergence ($V$) :** Exprimée en dioptries ($\text{δ}$ ou $\text{m}^{-1}$), elle vaut :
    $$ V = \frac{1}{\overline{FF'}} = \frac{1}{f'} $$
    où $f'$ est la distance focale image. $V > 0$ pour une lentille convergente, $V < 0$ pour une lentille divergente.

*   **Relation de conjugaison avec origine au centre optique $O$ :**
    $$ \frac{1}{\overline{OA'}} - \frac{1}{\overline{OA}} = \frac{1}{\overline{OF'}} = V $$

*   **Grandissement transversal ($\gamma$) :**
    $$ \gamma = \frac{\overline{A'B'}}{\overline{AB}} = \frac{\overline{OA'}}{\overline{OA}} $$

---

## MODULE II : Mécanique des Fluides

Un fluide (liquide ou gaz) est un milieu matériel continu, déformable et qui s'écoule.

### 1. Statique des fluides

Dans un référentiel galiléen, pour un fluide au repos soumis uniquement à la pesanteur $\vec{g} = -g \vec{e}_z$ (avec $z$ orienté vers le haut) :

*   **Principe fondamental de la statique des fluides (PFSF) :**
    $$ \vec{gradient}(P) = \rho \vec{g} $$
    En projection sur l'axe vertical $z$ :
    $$ \frac{\mathrm{d}P}{\mathrm{d}z} = -\rho g $$

*   **Relation de barométrie / Loi fondamentale de l'hydrostatique :**
    Entre deux points $1$ et $2$ d'un fluide incompressible ($\rho = \text{ctte}$) :
    $$ P_2 - P_1 = -\rho g (z_2 - z_1) \implies P_1 + \rho g z_1 = P_2 + \rho g z_2 = \text{constante} $$

---

### 2. Dynamique des fluides parfaits

Un fluide parfait est un fluide non visqueux (les forces de frottement internes sont nulles).

#### Débit volumique ($D_v$)
Pour une section $S$ traversée par un fluide à la vitesse $v$ (supposée uniforme sur la section) :
$$ D_v = \frac{\mathrm{d}V}{\mathrm{d}t} = v \cdot S \quad (\text{en } \text{m}^3\cdot\text{s}^{-1}) $$

#### Conservation de la masse (Équation de continuité)
Pour un écoulement stationnaire d'un fluide incompressible ($\rho = \text{ctte}$) :
$$ D_{v,1} = D_{v,2} \implies v_1 S_1 = v_2 S_2 $$

---

### 3. Théorème de Bernoulli

Le théorème de Bernoulli est une application du théorème de l'énergie cinétique à une particule fluide le long d'une **ligne de courant**.

Pour un écoulement stationnaire, incompressebiel et non visqueux d'un fluide de masse volumique $\rho$ :
$$ P + \frac{1}{2} \rho v^2 + \rho g z = \text{constante le long d'une ligne de courant} $$

*   $P$ : Pression statique ($\text{Pa}$)
*   $\frac{1}{2} \rho v^2$ : Pression dynamique ($\text{Pa}$)
*   $\rho g z$ : Pression de pesanteur ($\text{Pa}$)

> **Application classique (Vidange - Torricelli) :** Soit un grand réservoir ouvert à l'air libre à la pression $P_0$, muni d'un petit orifice de surface $S_2$ situé à une hauteur $h$ sous la surface libre $S_1$. En appliquant Bernoulli entre la surface (1) et l'orifice (2) :
> $$ v_2 = \sqrt{2gh} $$

---

### 4. Éléments sur les fluides réels (Viscosité)

Les fluides réels présentent des frottements internes caractérisés par leur **viscosité dynamique $\eta$** (exprimée en $\text{Pa}\cdot\text{s}$ ou $\text{Poiseuille}$).

*   **Nombre de Reynolds ($\text{Re}$) :** Grandeur sans dimension caractérisant la nature de l'écoulement dans une conduites cylindrique de diamètre $D$ :
    $$ \text{Re} = \frac{\rho v D}{\eta} $$
    *   $\text{Re} \lesssim 2000$ : Écoulement **laminaire** (ordonné, prépondérance des forces visqueuses).
    *   $\text{Re} \gtrsim 4000$ : Écoulement **turbulent** (chaotique, tourbillonnaire).

*   **Loi de Poiseuille (Écoulement laminaire stationnaire en conduite cylindrique) :**
    Le débit volumique est lié à la différence de pression $\Delta P$ entre les extrémités d'un tube de rayon $R$ et de longueur $L$ :
    $$ D_v = \frac{\pi R^4 \Delta P}{8 \eta L} $$
    *Note biologique importante :* Cette dépendance en $R^4$ (loi de Hagen-Poiseuille) illustre le rôle primordial de la vasomotricité (vasodilatation/vasoconstriction) dans la régulation du débit sanguin.