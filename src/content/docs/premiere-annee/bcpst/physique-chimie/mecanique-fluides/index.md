---
title: 'Cours : Mécanique des fluides'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Mécanique des Fluides (CPGE BCPST 1ère année)

## Introduction et Définitions Fondamentales

La mécanique des fluides étudie le comportement des fluides (liquides et gaz) au repos (statique des fluides) ou en mouvement (cinématique et dynamique).

### 1. Modèle du milieu continu
À l'échelle macroscopique, on oublie la nature discontinue de la matière (molécules, atomes). On définit des champs scalaires et vectoriels continus et dérivables.
*   **Particule de fluide :** Volume élémentaire $d\tau$ centré en un point $M$, grand devant la distance intermoléculaire mais petit devant les dimensions macroscopiques du système.

### 2. Grandeurs caractéristiques
*   **Masse volumique $\rho$ ($\text{kg}\cdot\text{m}^{-3}$) :** $\rho = \frac{dm}{d\tau}$
*   **Pression $P$ ($\text{Pa}$ ou $\text{N}\cdot\text{m}^{-2}$) :** Force pressante élémentaire $d\vec{f}$ exercée par un fluide sur une surface élémentaire $d\vec{S} = dS \, \vec{n}$ (où $\vec{n}$ est la normale extérieure au fluide) :
    $$d\vec{f} = -P \, d\vec{S}$$
Note: La pression est toujours isotrope et dirigée vers l'intérieur de la surface considérée.*
*   **Caractère d'un fluide :**
    *   **Incompressible :** $\rho = \text{cste}$ (très bon modèle pour les liquides).
    *   **Parfait :** Absence de viscosité (frottements internes négligeables). Le tenseur des contraintes se réduit à la pression.

---

## I. Statique des Fluides

### 1. Équation fondamentale de la statique des fluides (EFSF)
Dans un référentiel galiléen, appliquons le PFD à une particule de fluide au repos. Les forces volumiques (poids) compensent les forces surfaciques (pression).

**Théorème :**
Pour un fluide au repos soumis à un champ de pesanteur uniforme $\vec{g} = -g \, \vec{e}_z$ (avec $\vec{e}_z$ vertical ascendant) :
$$\vec{\nabla} P = \rho \vec{g}$$

En projection selon l'axe vertical $z$ :
$$\frac{dP}{dz} = -\rho g$$

### 2. Conséquences et théorèmes classiques

*   **Loi de l'hydrostatique (fluide incompressible, $\rho = \text{cste}$) :**
    En intégrant entre une altitude $z_1$ et une altitude $z_2$ :
    $$P(z_2) - P(z_1) = -\rho g (z_2 - z_1)$$
    Souvent écrite sous la forme : $P + \rho gz = \text{cste}$.

*   **Principe de Pascal :**
    Toute variation de pression en un point d'un fluide incompressible et au repos se transmet intégralement à tout le fluide.

*   **Principe d'Archimède :**
    Tout corps plongé dans un fluide au repos, subit de la part de celui-ci une force verticale, dirigée de bas en haut, appelée *poussée d'Archimède*, égale au poids du volume de fluide déplacé :
    $$\vec{F}_{\text{Archimède}} = -\iint_{\text{surface}} P \, d\vec{S} = \rho_{\text{fluide}} V_{\immergé} g \, \vec{e}_z$$

---

## II. Cinématique des Fluides

### 1. Description du mouvement
*   **Champ d'<bos>9e vitesse :** $\vec{v}(M, t)$ désigne la vitesse de la particule de fluide se trouvant au point $M$ à l'instant $t$.
*   **Lignes de courant :** Courbes tangentes au champ des vitesses à un instant donné.
*   **Trajectoire :** Courbe décrite par une même particule de fluide au cours du temps.
*   *Attention (Piège classique) :* En régime permanent (stationnaire), les lignes de courant et les trajectoires confondues. En régime non stationnaire, elles sont généralement différentes.

### 2. Conservation de la masse : Équation de continuité
Pour un écoulement quelconque, la conservation de la masse se traduit par l'équation locale :
$$\frac{\partial \rho}{\partial t} + \operatorname{div}(\rho \vec{v}) = 0$$

*   **Cas particulier d'un fluide incompressible ($\rho = \text{cste}$) :**
    $$\operatorname{div}(\vec{v}) = 0$$

---

## III. Dynamique des Fluides Parfaits

### 1. Équation d'Euler
C'est l'application du PFD à une particule de fluide parfait en mouvement.
$$\rho \left( \frac{\partial \vec{v}}{\partial t} + (\vec{v} \cdot \vec{\nabla})\vec{v} \right) = -\vec{\nabla} P + \rho \vec{g}$$

### 2. Théorème de Bernoulli

**Théorème :**
Le long d'une même ligne de courant, pour un écoulement stationnaire, incompressible et non visqueux (fluide parfait), la quantité suivante se conserve :
$$P + \frac{1}{2}\rho v^2 + \rho gz = \text{cste}$$

*   **Démonstration (méthode usuelle) :**
    On projette l'équation d'Euler le long d'une ligne de courant en régime permanent.
    $\frac{\partial \vec{v}}{\partial t} = 0$. Le terme d'accéleration convective $(\vec{v} \cdot \vec{\nabla})\vec{v}$ projeté donne $\frac{v dV}{ds}$. En intégrant le long de la ligne de courant avec $dP = -\rho g dz - \rho v dv$, on obtient le résultat.

*   **Interprétation énergétique :**
    *   $P$ : Pression statique (énergie potentielle élastique liée à la compression).
    *   $\frac{1}{2}\rho v^2$ : Pression dynamique (énergie cinétique par unité de volume).
    *   $\rho gz$ : Pression de pesanteur (énergie potentielle de pesanteur par unité de volume).

---

## IV. Méthodes et Savoir-Faire en BCPST

1.  **Comment appliquer le théorème de Bernoulli ?**
    *   Vérifier les 4 hypothèses : **Fluide parfait** (viscosité négligeable), **incompressible** ($\rho = \text{cste}$), **stationnaire** ($\frac{\partial}{\partial t} = 0$), et se placer **le long d'une même ligne de courant**.
    *   Identifier deux points $A$ et $B$ sur cette ligne de courant.
    *   Écrire : $P_A + \frac{1}{2}\rho v_A^2 + \rho gz_A = P_B + \frac{1}{2}\rho v_B^2 + \rho gz_B$.
    *   Utiliser souvent l'équation de continuité ($S_A v_A = S_B v_B$) pour lier les vitesses si la section du conduit varie (effet Venturi).

2.  **Méthode pour un problème de statique (ex: manomètre, barrage) :**
    *   Isoler le fluide, identifier les forces (poids, pressions).
    *   Projeter l'EFSF selon un repère bien choisi (souvent vertical descendant ou ascendant).
    *   Intégrer en tenant compte des interfaces (pression atmosphérique $P_0$ à la surface libre).

---

## V. Pièges à Éviter (Alerte Colles / Concours)

*   **Confondre statique et dynamique :** N'utilisez **jamais** Bernoulli si le fluide est au repos (dans ce cas, $v=0$ partout, Bernoulli redonne la loi de l'hydrostatique, ce qui est logique, mais l'utilisation de l'EFSF est plus directe).
*   **Oublier la pression atmosphérique :** Dans les applications numériques ou littérales, attention aux pressions effectives vs pressions absolues. Souvent, $P_{\text{surface}} = P_{\text{atm}}$. Si on oublie de l'ajouter d'un côté de l'équation, l'erreur se propage.
*   **Ligne de courant vs ensemble du fluide :** Le théorème de Bernoulli lie deux points *sur la même ligne de courant*. S'il n'y a pas de tourbillon (écoulement irrotationnel), la constante est la même dans tout le fluide. En BCPST, on admet souvent cette extension, mais mentionner l'hypothèse est un plus rigoureux.
*   **Homogénéité :** Vérifiez toujours l'homogénéité de vos expressions (par exemple, $\frac{1}{2}\rho v^2$ a bien la dimension d'une pression en $\text{Pa}$ ou $\text{kg}\cdot\text{m}^{-1}\cdot\text{s}^{-2}$).