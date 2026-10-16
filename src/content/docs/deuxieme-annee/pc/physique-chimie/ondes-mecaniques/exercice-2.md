---
title: 'Exercice 2 : Ondes sonores dans les fluides'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Propagation d'ondes sonores dans les fluides et analyse critique

## Énoncé

Le problème s'intéresse à la modélisation de la propagation des ondes sonores (acoustiques) dans un fluide parfait au repos, d'abord dans le cadre de l'approximation acoustique linéaire, puis en étudiant les limites de ce modèle.

On considère un fluide de masse volumique au repos $\rho_0$ et de pression au repos $P_0$. Le fluide est supposé unidirectionnel (propagation selon l'axe $(O,x)$). On note $u(x,t)$ la vitesse locale des particules de fluide, $\rho(x,t)$ la masse volumique locale et $P(x,t)$ la pression locale. On pose :
$$\rho(x,t) = \rho_0 + \rho'(x,t)$$
$$P(x,t) = P_0 + P'(x,t)$$
où les grandeurs primées (perturbations) sont supposées de modulus très faibles devant les grandeurs d'équilibre ($\rho' \ll \rho_0$ et $P' \ll P_0$).

---

## Questions

### Partie I : Établissement de l'équation d'onde linéaire

1. **Conservation de la masse (Équation de continuité) :** En considérant une tranche de fluide comprise entre $x$ et $x+\mathrm{d}x$, établir l'équation locale de conservation de la masse. Linéariser cette équation en négligeant les termes d'ordre supérieur en $\rho'$ et $u$.
2. **Conservation de la quantité de mouvement (Équation d'Euler) :** En appliquant la relation fondamentale de la dynamique à une particule de fluide dans le cadre d'un fluide parfait, écrire l'équation d'Euler locale. Linéariser cette équation.
3. **Thermodynamique de la transformation :** Justifier rapidement pourquoi, dans le cadre des ondes sonores usuelles dans l'air, la transformation subie par le fluide peut être considérée comme isentropique (adiabatique réversible). En déduire la relation liant la variation de pression $P'$ à la variation de masse volumique $\rho'$ via le coefficient de compressibility isentropique $\chi_s$ ou la vitesse du son $c$.
4. **Équation de d'Alembert :** À l'aide des trois équations précédentes, établir l'équation aux dérivées partielles vérifiée par la surpression $P'(x,t)$. Exprimer la vitesse de phase $c$ de l'onde en fonction de paramètres thermodynamiques du fluide.

### Partie II : Analyse énergétique et Impedance acoustique

5. **Onde plane progressive harmonique :** On s'intéresse à une onde sonore harmonique de pulsation $\omega$ se propageant dans le sens des $x$ croissants, de la forme $P'(x,t) = P_m \cos(\omega t - kx)$. Déterminer la vitesse $u(x,t)$ associée à cette onde.
6. **Impédance acoustique :** Définir et calculer l'impédance acoustique caractéristique du milieu $Z_c = \frac{P'}{u}$. A-t-on affaire à une onde progressive pure ?
7. **Intensité acoustique :** Exprimer la puissance acoustique par unité de surface (intensité acoustique $I$) transportée par cette onde.

### Partie III : Analyse critique et limites du modèle

8. **Limites de l'approximation linéaire :** 
   - Estimer l'ordre de grandeur du terme non linéaire $\rho_0 u \frac{\partial u}{\partial x}$ devant le terme linéaire $\rho_0 \frac{\partial u}{\partial t}$ dans l'équation d'Euler.
   - En déduire la condition portant sur l'amplitude de la vitesse $u$ (ou du rapport $P'/P_0$) pour que le modèle linéaire reste valide.
   - Que se passe-t-il physiquement lorsque l'amplitude de l'onde devient très grande (phénomène de steepening / formation d'ondes de choc) ?
9. **Effets dissipatifs :** Le modèle de fluide parfait néglige la viscosité et la conduction thermique. Citer les nombres sans dimension pertinents en mécanique des fluides qui permettent de quantifier l'importance de ces effets dissipatifs face aux effets inertiels et compressibles, et préciser qualitativement leur impact sur l'atténuation de l'onde sonore.

---

## Pistes et indications

- **Q1 :** Utiliser un bilan de masse sur le volume élémentaire $S\,\mathrm{d}x$ entre les instants $t$ et $t+\mathrm{dt}$. Le flux entrant est $\rho(x,t)u(x,t)S$ et le flux sortant $\rho(x+\mathrm{d}x,t)u(x+\mathrm{d}x,t)S$.
- **Q2 :** La projection de $\rho \frac{\mathrm{D}\vec{v}}{\mathrm{D}t} = -\vec{\text{grad}} P$ sur l'axe $(O,x)$ fait intervenir la dérivée particulaire $\frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x}$.
- **Q3 & Q4 :** Utiliser le fait que $\left(\frac{\partial P}{\partial \rho}\right)_S = c^2$. Dériver l'équation d'Euler par rapport à $t$ et l'équation de continuité par rapport à $x$ pour découpler $P'$ et $u$.
- **Q8 :** Comparer les ordres de grandeur des amplitudes en posant $u \sim U$ et $\frac{\partial}{\partial t} \sim \omega$, $\frac{\partial}{\partial x} \sim k = \frac{\omega}{c}$.

---

## Corrigé détaillé

### Partie I : Établissement de l'équation d'onde linéaire

1. **Conservation de la masse :**
   Le bilan massique sur le volume $S\,\mathrm{d}x$ s'écrit :
   $$\frac{\partial (\rho S \mathrm{d}x)}{\partial t} = [\rho u]_x S - [\rho u]_{x+\mathrm{d}x} S \implies \frac{\partial \rho}{\partial t} + \frac{\partial (\rho u)}{\partial x} = 0$$
   En remplaçant $\rho = \rho_0 + \rho'$ et en notant que $\rho_0$ est constante :
   $$\frac{\partial \rho'}{\partial t} + \frac{\partial}{\partial x}\left[(\rho_0 + \rho')u\right] = 0$$
   Puisque $\rho' \ll \rho_0$ et $u$ est une perturbation, le terme $\frac{\partial (\rho' u)}{\ou x}$ est un infiniment petit d'ordre supérieur (produit de deux pertubations). On le néglige (linéarisation) :
   $$\frac{\partial \rho'}{\partial t} + \rho_0 \frac{\partial u}{\partial x} = 0$$

2. **Conservation de la quantité de mouvement :**
   Pour un fluide parfait, l'équation d'Euler locale est :
   $$\rho \left( \frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} \right) = -\frac{\partial P}{\partial x}$$
   Puisque $P = P_0 + P'$ avec $P_0$ uniforme, $\frac{\partial P}{\partial x} = \frac{\partial P'}{\partial x}$. De plus, en première approximation, $\rho \approx \rho_0$ dans le terme inertiel, et le terme convectif $\rho_0 u \frac{\partial u}{\partial x}$ est négligeable devant $\rho_0 \frac{\partial u}{\partial t}$ (terme non linéaire). L'équation devient :
   $$\rho_0 \frac{\partial u}{\partial t} = -\frac{\partial P'}{\partial x}$$

3. **Thermodynamique de la transformation :**
   Les ondes sonores sont des processus rapides (fréquences acoustiques usuelles $\ge 20\text{ Hz}$) durant lesquels les transferts thermiques par conduction n'ont pas le temps de s'opérer à l'échelle d'une longueur d'onde. La transformation est donc adiabatique. En l'absence de viscosité (fluide parfait), elle est également réversible, donc **isentropique**.
   On a donc : 
   $$P' = \left(\frac{\partial P}{\partial \rho}\right)_S \rho' = c^2 \rho'$$
   où $c = \sqrt{\left(\frac{\partial P}{\partial \rho}\right)_S} = \frac{1}{\sqrt{\rho_0 \chi_s}}$ est la vitesse du son dans le fluide.

4. **Équation de d'Alembert :**
   Reprenons les trois équations linéarisées :
   1) $\frac{\partial \rho'}{\partial t} + \rho_0 \frac{\partial u}{\partial x} = 0$
   2) $\rho_0 \frac{\partial u}{\partial t} = -\frac{\partial P'}{\partial x}$
   3) $P' = c^2 \rho' \implies \frac{\partial \rho'}{\partial t} = \frac{1}{c^2}\frac{\partial P'}{\partial t}$
   
   En injectant la relation 3) dans 1) :
   $$\frac{1}{c^2}\frac{\partial P'}{\partial t} + \rho_0 \frac{\partial u}{\partial x} = 0$$
   Dérivons cette équation par rapport au temps $t$ :
   $$\frac{1}{c^2}\frac{\partial^2 P'}{\partial t^2} + \rho_0 \frac{\partial}{\partial x}\left(\frac{\partial u}{\partial t}\right) = 0$$
   D'après l'équation 2), $\frac{\partial u}{\partial t} = -\frac{1}{\rho_0}\frac{\partial P'}{\partial x}$. En remplaçant :
   $$\frac{1}{c^2}\frac{\partial^2 P'}{\partial t^2} - \frac{\partial^2 P'}{\partial x^2} = 0 \implies \boxed{\frac{\partial^2 P'}{\partial x^2} - \frac{1}{c^2}\frac{\partial^2 P'}{\partial t^2} = 0}$$
   C'est l'**équation de d'Alembert** pour la surpression $P'$.

---

### Partie II : Analyse énergétique et Impédance acoustique

5. **Vitesse associée à l'onde :**
   Pour une onde progressive harmonique $P'(x,t) = P_m \cos(\omega t - kx)$ avec $k = \frac{\omega}{c}$, l'équation d'Euler $\rho_0 \frac{\partial u}{\partial t} = -\frac{\partial P'}{\partial x}$ donne :
   $$\rho_0 \frac{\partial u}{\partial t} = -(-k P_m \sin(\omega t - kx)) = k P_m \sin(\omega t - kx)$$
   En intégrant par rapport au temps (et en éliminant la constante d'intégration correspondant à un écoulement stationnaire nul) :
   $$u(x,t) = \frac{k P_m}{\rho_0 \omega} \int \sin(\omega t - kx) \,\mathrm{d}t = -\frac{k P_m}{\rho_0 \omega^2} \cos(\omega t - kx) + \text{cste}$$
   Comme $\frac{\omega}{k} = c$, on obtient :
   $$u(x,t) = -\frac{P_m}{\rho_0 c} \cos(\omega t - kx)$$

6. **Impédance acoustique :**
   L'impédance acoustique locale est définie par $Z = \frac{P'}{u}$. Ici :
   $$Z_c = \frac{P_m \cos(\omega t - kx)}{-\frac{P_m}{\rho_0 c} \cos(\omega t - kx)} = -\rho_0 c$$
   *(Note : le signe moins dépend du sens de propagation choisi, en valeur absolue l'impédance caractéristique est $Z_c = \rho_0 c$).* 
   Puisque $Z_c$ est réelle et indépendante de $x$ et $t$ (pour une onde plane progressive), nous sommes bien en présence d'une **onde progressive pure**.

7. **Intensité acoustique :**
   L'intensité acoustique instantanée est $i(x,t) = P'(x,t)u(x,t)$. 
   L'intensité acoustique moyenne (flux d'énergie par unité de surface) est :
   $$I = \langle P' u \rangle_t = -\frac{P_m^2}{\rho_0 c} \langle \cos^2(\omega t - kx) \rangle_t = \boxed{-\frac{P_m^2}{2 \rho_0 c}}$$
   *(En valeur absolue : $I = \frac{P_m^2}{2 \rho_0 c}$)*.

---

### Partie III : Analyse critique et limites du modèle

8. **Limites de l'approximation linéaire :**
   - Comparons les ordres de grandeur du terme non linéaire $\rho_0 u \frac{\partial u}{\partial x}$ et du terme linéaire $\rho_0 \frac{\partial u}{\partial t}$ dans l'équation d'Euler :
     $$\text{Terme linéaire} \sim \rho_0 \omega U$$
     $$\text{Terme non linéaire} \sim \rho_0 U \cdot k U = \rho_0 U \frac{\omega}{c} U$$
     Le rapport des deux termes est :
     $$\text{Rapport} \sim \frac{U}{c}$$
   - **Condition de validité :** Pour que le modèle linéaire soit valide, il faut que ce rapport soit très inférieur à 1 :
     $$\frac{U}{c} \ll 1 \quad \text{soit} \quad u \ll c$$
     Comme $P' \sim \rho_0 c u$, cela équivaut à $\frac{P'}{\rho_0 c^2} \ll 1$, soit $\frac{P'}{\gamma P_0} \ll 1$ (avec $\gamma$ l'indice adiabatique).
   - **Phénomène physique limite :** Lorsque l'amplitude augmente ($U$ devient du même ordre de grandeur que $c$), les zones de surpression (où la vitesse locale du son est légèrement augmentée et où les particules vont plus vite vers l'avant) se propagent plus vite que les zones de dépression. La face avant de l'onde se raidit (**phénomène de *steepening***) jusqu'à ce que la pente de l'onde devienne verticale : le modèle linéaire s'effondre et il se forme une **onde de choc** (discontinuité brutale de pression et de température, où les effets dissipatifs de viscosité deviennent dominants à l'échelle microscopique).

9. **Effets dissipatifs :**
   - En réalité, les fluides possèdent une viscosité dynamique $\mu$ et une conductivité thermique $\lambda$. 
   - Les nombres sans dimension pertinents sont :
     * Le **nombre de Reynolds acoustique** qui compare les forces d'inertie aux forces visqueuses.
     * Le **nombre de Stokes** ou des paramètres liés à l'atténuation spatiale $\alpha$ (qui varie souvent en $\omega^2$).
   - **Impact qualitatif :** Ces effets entraînent une atténuation exponentielle de l'amplitude de l'onde au cours de sa propagation ($P'(x) \propto P_m e^{-\alpha x}$) ainsi qu'une dispersion (légère dépendance de la vitesse de phase avec la fréquence dans certains régimes extrêmes), transformant l'énergie acoustique en chaleur par dissipation visqueuse et thermique.