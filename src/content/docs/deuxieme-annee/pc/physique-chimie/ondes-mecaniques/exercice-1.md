---
title: 'Exercice 1 : Équation de d Alembert'
description: 'Problème d entraînement type concours.'
---

# Problème : Propagation d'ondes le long d'une ligne de transmission mécanique et acoustique

## Énoncé

Le présent problème s'intéresse à la modélisation de la propagation d'ondes dans un milieu continu unidimensionnel. On se propose d'étudier deux systèmes physiques analogues : une corde élastique soumise à une tension longitudinale et une colonne de gaz enfermée dans un tube cylindrique. L'objectif est d'établir l'équation de d'Alembert régissant ces systèmes, d'en analyser les solutions progressives, puis de discuter rigoureusement des limites physiques des modèles approchés mis en place.

---

## Questions

### Partie I : Étude d'une corde élastique transversale
On considère une corde homogène, parfaitement flexible, de masse linéique $\mu$ constante au repos. Cette corde est tendue suivant l'axe $(Ox)$ avec une tension $T$ constante en tout point et uniformément dirigée selon la tangente à la corde. On note $y(x,t)$ le déplacement transversal d'un point de la corde d'abscisse $x$ à l'instant $t$. On se place dans l'approximation des petites perturbations où la pente de la corde est partout de module très inférieur à $1$ : $\left|\frac{\partial y}{\partial x}\right| \ll 1$.

1. Isoler un tronçon de corde compris entre les abscisses $x$ et $x + \mathrm{d}x$. Faire l'inventaire des forces s'exerçant sur ce tronçon.
2. En appliquant le principe fondamental de la dynamique (PFD) au tronçon étudié et en projetant sur l'axe $(Oy)$, établir l'équation différentielle aux dérivées partielles vérifiée par $y(x,t)$. Mettre cette équation sous la forme standard de l'équation de d'Alembert en faisant apparaître une vitesse caractéristique $c$ que l'on exprimera en fonction de $T$ et $\mu$.
3. Vérifier que toute fonction de la forme $y(x,t) = f(x - ct) + g(x + ct)$, où $f$ et $g$ sont des fonctions de classe $\mathcal{C}^2$ arbitraires, est solution de l'équation de d'Alembert. Préciser la signification physique de ces deux termes.
4. **Analyse critique :** Citer au moins deux hypothèses fortes du modèle de la corde idéale qui sont nécessairement mises en défaut dans la réalité expérimentale pour des amplitudes ou des fréquences élevées. Préciser qualitativement les phénomènes physiques non pris en compte.

### Partie II : Ondes acoustiques unidimensionnelles dans un gaz
On s'intéresse maintenant à la propagation d'ondes sonores dans un gaz parfait contenu dans un tube cylindrique de section $S$ constante selon l'axe $(Ox)$. Au repos, le gaz est au repos à la pression uniforme $P_0$ et à la masse volumique $\rho_0$. Soit $s(x,t)$ le déplacement d'une tranche de gaz initialement située à l'abscisse $x$. On note $P(x,t) = P_0 + p(x,t)$ la pression locale et $\rho(x,t) = \rho_0 + \rho'(x,t)$ la masse volumique locale, avec $|p| \ll P_0$ et $|\rho'| \ll \rho_0$.

5. En écrivant la conservation de la masse pour une tranche de gaz comprise entre $x$ et $x + \mathrm{d}x$ entre les instants $t$ et $t + \mathrm{d}t$, établir la relation linéarisée entre la variation relative de masse volumique $\frac{\rho'}{\rho_0}$ et le déplacement $s(x,t)$.
6. Appliquer la relation fondamentale de la dynamique (équation d'Euler linéarisée) à la même tranche de gaz. En déduire une relation entre la surpression $p(x,t)$ et le gradient de déplacement $\frac{\partial s}{\partial x}$.
7. On suppose la transformation subie par le gaz isentropique (adiabatique réversible). Introduire le coefficient isentropique $\gamma$ et la compressibilité adiabatique $\chi_s = \frac{1}{\gamma P_0}$ pour relier la surpression $p$ à la masse volumique $\rho'$.
8. En combinant les résultats des questions 5, 6 et 7, établir l'équation de d'Alembert satisfaite par le champ de déplacement $s(x,t)$. Exprimer la célérité du son $c_s$ dans le gaz en fonction de $P_0$, $\rho_0$ et $\gamma$.
9. **Analyse critique :** Le modèle acoustique linéaire repose sur l'hypothèse d'une compression isentropique et sur l'approximation des petits déplacements. Discuter des limites de ce modèle lorsque l'intensité de l'onde augmente (apparition d'ondes de choc) et lorsque la fréquence du son augmente (rôle des phénomènes de transport).

---

## Pistes et indications

- **Q1 & Q2 :** Projeter les tensions aux extrémités $x$ et $x+\mathrm{d}x$ en tenant compte des angles que font les tangentes avec l'horizontale. Utiliser un développement limité pour $\sin(\alpha) \approx \tan(\alpha) = \frac{\partial y}{\partial x}$.
- **Q3 :** Utiliser un changement de variables par composition de fonctions (variables caractéristiques $u = x - ct$ et $v = x + ct$).
- **Q5 :** Exprimer la conservation de la masse sous la forme $\rho(x,t)S\mathrm{d}x = \rho_0 S \mathrm{d}x_0$, puis lier $\mathrm{d}x$ à $\mathrm{d}x_0$ via le déplacement $s$.
- **Q6 :** Écrire la relation $F = m\gamma$ pour une tranche d'épaisseur $\mathrm{d}x$ en négligeant les termes d'ordre supérieur.
- **Q7 & Q8 :** Différentier la loi de Laplace ($P\rho^{-\gamma} = \text{cte}$) pour relier les variations infinitésimales.

---

## Corrigé pas à pas

### Partie I : Étude d'une corde élastique transversale

1. **Bilan des forces sur le tronçon $[x, x+\mathrm{d}x]$ :**
   Le tronçon possède une masse $\mathrm{dm} = \mu \, \mathrm{d}x$. Les forces s'exerçant sur ce tronçon sont :
   - Son poids, négligeable devant la force de tension (hypothèse usuelle en mécanique des cordes vibrantes).
   - La force de tension $\vec{T}(x,t)$ exercée par la partie de la corde située à gauche, agissant au point $x$.
   - La force de tension $\vec{T}(x+\mathrm{d}x,t)$ exercée par la partie de la corde située à droite, agissant au point $x+\mathrm{d}x$.
   La norme de la tension est supposée constante $T$. Seule sa direction varie et reste tangente à la corde.

2. **Établissement de l'équation de d'Alembert :**
   La projection du PFD sur l'axe $(Oy)$ s'écrit :
   $$\mathrm{d}m \frac{\partial^2 y}{\partial t^2} = T \sin(\alpha(x+\mathrm{d}x)) - T \sin(\alpha(x))$$
   où $\alpha(x)$ est l'angle que fait la tangente avec l'axe $(Ox)$. 
   Dans l'approximation des petites perturbations ($|\frac{\partial y}{\partial x}| \ll 1$), on a $\sin(\alpha) \approx \tan(\alpha) = \frac{\partial y}{\partial x}$. Ainsi :
   $$\mu \, \mathrm{d}x \frac{\partial^2 y}{\partial t^2} = T \left[ \frac{\partial y}{\partial x}(x+\mathrm{d}x,t) - \frac{\partial y}{\partial x}(x,t) \right]$$
   En divisant par $\mathrm{d}x$ et en faisant tendre $\mathrm{d}x \to 0$, on obtient :
   $$\mu \frac{\partial^2 y}{\partial t^2} = T \frac{\partial^2 y}{\partial x^2} \implies \frac{\partial^2 y}{\partial x^2} - \frac{1}{c^2} \frac{\partial^2 y}{\partial t^2} = 0$$
   avec $c = \sqrt{\frac{T}{\mu}}$ (exprimée en $\text{m}\cdot\text{s}^{-1}$).

3. **Vérification des solutions progressives :**
   Soit $y(x,t) = f(u) + g(v)$ avec $u = x - ct$ et $v = x + ct$.
   Par dérivation en chaine :
   $$\frac{\partial y}{\partial x} = f'(u) + g'(v) \implies \frac{\partial^2 y}{\partial x^2} = f''(u) + g''(v)$$
   $$\frac{\partial y}{\partial t} = -cf'(u) + cg'(v) \implies \frac{\partial^2 y}{\partial t^2} = c^2 f''(u) + c^2 g''(v)$$
   On vérifie immédiatement que $\frac{\partial^2 y}{\partial x^2} = \frac{1}{c^2} \frac{\partial^2 y}{\partial t^2}$. 
   *Signification physique :* $f(x-ct)$ représente une onde se propageant vers les $x$ croissants à la vitesse $c$ (onde progressive ascendante), et $g(x+ct)$ une onde se propageant vers les $x$ décroissants (onde progressive descendante).

4. **Analyse critique des limites du modèle de la corde :**
   Le modèle linéaire de d'Alembert pour la corde présente plusieurs limites fondamentales :
   - **Rigidité flexionnelle :** On suppose la corde "parfaitement flexible" (pas de moment de force interne). En réalité, la corde possède un module d'Young et une raideur à la flexion, ce qui introduit un terme de dispersion d'ordre supérieur dans l'équation (terme en $\frac{\partial^4 y}{\partial x^4}$).
   - **Hypothèse des petits angles :** L'approximation $\sin\alpha \approx \tan\alpha$ néglige les non-linéarités géométriques. Pour des amplitudes importantes, la tension locale de la corde n'est plus constante (variation de la longueur de la corde), ce qui conduit à l'équation non linéaire de Kirchhoff-Wormell.
   - **Dissipation d'énergie :** Le modèle ne prend pas en compte les frottements visqueux dans l'air ni l'amortissement interne (viscoélasticité du matériau), entraînant une atténuation réelle des ondes au cours du temps.

---

### Partie II : Ondes acoustiques unidimensionnelles dans un gaz

5. **Conservation de la masse :**
   Soit une tranche de gaz comprise initialement entre $x_0$ et $x_0 + \mathrm{d}x_0$. À l'instant $t$, cette même tranche occupe la position comprise entre $x = x_0 + s(x_0,t)$ et $x + \mathrm{d}x = x_0 + \mathrm{d}x_0 + s(x_0+\mathrm{d}x_0,t)$.
   La conservation de la masse s'écrit :
   $$\rho(x,t) S \mathrm{d}x = \rho_0 S \mathrm{d}x_0 \implies \rho(x,t) \left( 1 + \frac{\partial s}{\partial x} \right) \mathrm{d}x_0 = \rho_0 \mathrm{d}x_0$$
   En posant $\rho(x,t) = \rho_0 + \itude{\rho'}$, et en négligeant les produits de variations infinitésimales (linéarisation) :
   $$\left(\rho_0 + \rho'\right)\left(1 + \frac{\partial s}{\partial x}\right) \approx \rho_0 + \rho' + \rho_0 \frac{\partial s}{\partial x} = \rho_0 \implies \frac{\rho'}{\rho_0} = -\frac{\partial s}{\partial x}$$

6. **Relation fondamentale de la dynamique (Équation d'Euler) :**
   La masse de la tranche est $\mathrm{d}m = \rho_0 S \mathrm{d}x$. La force pressante nette agissant sur la tranche selon $(Ox)$ est :
   $$F_x = P(x,t)S - P(x+\mathrm{d}x,t)S = -\frac{\partial P}{\partial x} S \mathrm{d}x = -\frac{\partial p}{\partial x} S \mathrm{d}x$$
   D'après le PFD :
   $$\rho_0 S \mathrm{d}x \frac{\partial^2 s}{\partial t^2} = -\frac{\partial p}{\partial x} S \mathrm{d}x \implies \rho_0 \frac{\partial^2 s}{\partial t^2} = -\frac{\partial p}{\partial x}$$

7. **Transformation isentropique :**
   Pour une transformation adiabatique réversible d'un gaz parfait, la loi de Laplace s'écrit $P \rho^{-\gamma} = \text{cte}$. En différentiant logarithmiquement :
   $$\frac{\mathrm{d}P}{P} - \gamma \frac{\mathrm{d}\rho}{\rho} = 0$$
   Pour les faibles perturbations, cela se traduit par :
   $$p = \gamma \frac{P_0}{\rho_0} \rho' \implies p = \gamma P_0 \frac{\rho'}{\rho_0}$$

8. **Équation de d'Alembert pour le déplacement acoustique :**
   En combinant les résultats précédents :
   - D'après (5) et (7) : $p = -\gamma P_0 \frac{\partial s}{\partial x}$
   - En reportant dans l'équation d'Euler (6) :
     $$\rho_0 \frac{\partial^2 s}{\partial t^2} = -\frac{\partial}{\partial x}\left(-\gamma P_0 \frac{\partial s}{\partial x}\right) = \gamma P_0 \frac{\partial^2 s}{\partial x^2}$$
   On obtient l'équation de d'Alembert :
   $$\frac{\partial^2 s}{\partial x^2} - \frac{1}{c_s^2} \frac{\partial^2 s}{\partial t^2} = 0$$
   avec la célérité du son dans le gaz :
   $$c_s = \sqrt{\frac{\gamma P_0}{\rho_0}} = \sqrt{\frac{\gamma R T_0}{M}}$$
   (exprimée en $\text{m}\cdot\text{s}^{-1}$).

9. **Analyse critique du modèle acoustique linéaire :**
   - **Hypothèse des petits déplacements et ondes de choc :** Lorsque l'amplitude de l'onde augmente (acoustique non linéaire), les zones de compression se déplacent plus vite que les zones de détente ($c$ dépend localement de $\rho$). Il y a "raidissement" du front d'onde, ce qui conduit à la formation d'une onde de choc où les hypothèses de continuité spatiale volent en éclats.
   - **Phénomènes dissipatifs (atténuation) :** Le modèle suppose un milieu parfait sans pertes. Aux hautes fréquences (ou pour des ondes se propageant sur de grandes distances), la viscosité du gaz et la conduction thermique (effets thermo-visqueux) provoquent une atténuation exponentielle de l'onde et une dispersion (dissipation d'énergie mécanique en chaleur).