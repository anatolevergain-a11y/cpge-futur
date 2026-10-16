---
title: 'Centrale-Supélec - Physique'
description: 'Sujet type concours corrigé pas à pas pour la filière PC.'
sidebar:
  badge:
    text: 'Annale Concours'
    variant: 'caution'
---

## 📄 Partie 1 : Énoncé du Problème (Mise en situation ingénieur/recherche)

### Étude métrologique et thermodynamique d'un résonateur optomécanique à franges d'interférence

Les résonateurs optomécaniques étudient le couplage entre la force de radiation d'un champ optique et le mouvement mécanique d'un objet macroscopique, typiquement une membrane semi-réfléchissante suspendue. Ce domaine, au carrefour de la thermodynamique statistique, de l'optique ondulatoire et de la mécanique quantique, trouve des applications majeures dans la détection d'ondes gravitationnelles et la métrologie ultra-sensible.

Le système considéré est constitué d'une cavité Fabry-Perot unidimensionnelle de longueur au repos $L_0$, délimitée par un miroir fixe parfait ($r_1 = 1$) et une membrane mobile de masse $M$, de coefficient de réflexion en intensité $R$ et de transmission $T$ (avec $R + T = 1$, les pertes par absorption étant négligées). La membrane est assujettie à un mouvement suivant l'axe $(Ox)$ orthogonal à sa surface, repéré par sa position instantanée $x(t)$ autour de sa position d'équilibre $x=0$. Elle est modélisée sur le plan mécanique comme un oscillateur harmonique de pulsation propre $\Omega_m$ et de facteur de qualité mécanique $Q_m$.

L'ensemble du dispositif est plongé dans un thermostat à la température $T_0$. Le champ électromagnétique incident, issu d'un laser monochromatique de pulsation $\omega_L$ et de longueur d'onde $\lambda_L$, interagit avec la membrane. Sous l'effet des interférences multiples au sein de la cavité, le champ optique exerce une pression de radiation fluctuante qui modifie la dynamique de la membrane, tandis que le déplacement de cette dernière module la phase et l'amplitude du champ optique intracavité.

Le problème se propose d'analyser d'une part la structure interférentielle du champ optique au voisinage de la membrane couplée, et d'autre part les fluctuations thermodynamiques et statistiques de l'oscillateur mécanique sous l'action combinée du bain thermique et de la force de fluctuation-dissipation optique.

---

## ❓ Partie 2 : Questions

### Partie A : Ondes, interférences et champ électromagnétique intracavité

1. **A.1.** Établir l'expression du champ électrique stationnaire incident complexe se propageant selon $(Ox)$ sous la forme $\underline{E}_i(x,t) = E_0 \exp[i(\omega_L t - k x)]$. Définir la constante de propagation $k$ en fonction de $\omega_L$, de la vitesse de la lumière dans le vide $c$ et de l'indice optique du milieu intracavité, pris égal à $1$.
2. **A.2.** En considérant les conditions de continuité des composantes tangentielles du champ électromagnétique à la traversée de la membrane infinie mince située en $x$, modélisée par une matrice de transfert pour les amplitudes complexes, exprimer le coefficient de réflexion en amplitude $\underline{r}$ et le coefficient de transmission en amplitude $\underline{t}$ de la membrane, en supposant le système sans pertes d'absorption. On posera $r = \sqrt{R}$.
3. **A.3.** En écrivant la superposition des ondes incidentes, réfléchies et transmises dans les deux portions de la cavité (avant et après la membrane), déterminer l'intensité lumineuse intracavité normalisée $I(x)/I_0$ en régime stationnaire en fonction de $x$, de $L_0$, de $\omega_L$ et de $R$.
4. **A.4.** Expliciter la condition de résonance optique de la cavité. En déduire la variation infinitésimale de la phase optique vue par la membrane lorsque celle-ci subit un déplacement élémentaire $\delta x$.
5. **A.5.** Évaluer la force moyenne de radiation $\langle F_{\text{opt}} \rangle$ exercée par le champ lumineux sur la membrane en fonction de la puissance incidente $P_{\text{inc}}$, de $c$, du facteur de finesse de la cavité $F = \frac{\pi \sqrt{R}}{1-R}$ et du désaccord fréquentiel $\Delta \omega = \omega_L - \omega_{\text{cav}}$ (où $\omega_{\text{cav}}$ est la pulsation de résonance de la cavité).

### Partie B : Thermodynamique statistique du résonateur et fluctuations

6. **B.1.** En appliquant le théorème de l'énergie cinétique et le principe fondamental de la dynamique à la membrane, établir l'équation différentielle régissant le mouvement $x(t)$ de la membrane en tenant compte de la force de rappel élastique, d'un terme de frottement visqueux linéaire associé au bain thermique (caractérisé par un coefficient $\Gamma_m = \Omega_m / Q_m$), de la force moyenne de radiation et d'une force stochastique Langevinienne $\delta F_{\text{th}}(t)$ issue des fluctuations thermiques du bain.
7. **B.2.** Linéariser cette équation autour du point d'équilibre stationnaire pour de petites fluctuations $\delta x(t)$ et $\delta P(t)$ de la puissance incidente ou du déplacement. Introduire la rigidité optique (ou optomécanique) $k_{\text{opt}} = -\frac{\partial \langle F_{\text{opt}} \rangle}{\partial x}$. Discuter de la stabilité du système selon le signe de $k_{\text{opt}}$.
8. **B.3.** Rappeler le théorème d'équipartition de l'énergie pour un degré de liberté quadratique en énergie potentielle à l'équilibre thermique avec un thermostat à la température $T_0$. En déduire l'écart type $\sigma_x = \sqrt{\langle \delta x^2 \rangle}$ des fluctuations de position de la membrane en l'absence de couplage optique.
9. **B.4.** Par une approche de thermodynamique statistique, exprimer la fonction de partition canonique $Z$ de l'oscillateur harmonique quantique (ou classique dans sa limite haute température $k_B T_0 \gg \hbar \Omega_m$) couplé au bain. En déduire l'expression de la densité spectrale de puissance des fluctuations de position $S_{xx}(\omega)$ via le théorème de fluctuation-dissipation.
10. **B.5.** On définit le bruit de mesure optique par la limite standard quantique (SQL) du déplacement. Expliquer qualitativement comment l'interférométrie Fabry-Perot permet d'atteindre une sensibilité de mesure sub-nanométrique, tout en soulignant le compromis fondamental imposé par la rétroaction de la force de radiation (back-action).

---

## 💡 Partie 3 : Rapport du Jury (Pièges et attentes)

Le jury tient à souligner l'excellente maîtrise formelle attendue sur ce type de sujet transversal mêlant optique ondulatoire et mécanique statistique. Les points de vigilance majeurs identifiés lors de la correction sont :

1. **Conditions aux limites et matrices de transfert :** De nombreux candidats oublient les phases introduites par la traversée de la membrane semi-réfléchissante. L'utilisation rigoureuse des conditions de passage (continuité du champ tangentiel) est indispensable pour établir les amplitudes complexes.
2. **Rigidité optique :** La notion de force de radiation dépendante de la position est souvent traitée de manière purement mécanique sans relier le déplacement du miroir à la modification de la condition de résonance de la cavité (décalage de phase $\Delta \phi = 2 k \delta x$). Le signe de $k_{\text{opt}}$ est critique pour la stabilité (phénomène d'amplification ou d'amortissement optique, *optical spring effect*).
3. **Théorème de fluctuation-dissipation :** L'utilisation de ce théorème exige de bien identifier la susceptibilité mécanique du système couplé. Les confusions entre dimensions énergétiques et spectrales (densités spectrales unilatérales vs bilatérales) sont lourdement sanctionnées.

---

## 📋 Partie 4 : Corrigé Détaillé et Analyse

### Partie A : Ondes, interférences et champ électromagnétique intracavité

1. **A.1.** Le champ électrique incident est une onde plane monochromatique se propageant dans la direction $+Ox$ :
   $$\underline{E}_i(x,t) = E_0 \exp\left[i(\omega_L t - k x)\right]$$
   La constante de propagation $k$ (ou nombre d'onde) est définie par :
   $$k = \frac{\omega_L}{c}$$
   où $\omega_L$ est la pulsation du laser et $c$ la vitesse de la propagation dans le vide.

2. **A.2.** Soit $\underline{r}$ et $\underline{t}$ les coefficients complexes de réflexion et de transmission en amplitude de la membrane. Pour une membrane sans pertes d'absorption, l'énergie se conserve, ce qui impose $|\underline{r}|^2 + |\underline{t}|^2 = 1$, soit $R + T = 1$ avec $R = r^2$. En utilisant les relations de Stokes pour une lame mince sans pertes, les coefficients s'écrivent sous la forme :
   $$\underline{r} = i \sqrt{R} \quad \text{et} \quad \underline{t} = \sqrt{1-R} \exp(i\phi_0)$$
   où la phase $\phi_0$ dépend du choix de l'origine de la position de la membrane. Par convention, on pose $\underline{r} = r$ et $\underline{t} = \sqrt{1-r^2}$.

3. **A.3.** Dans la cavité de longueur $L_0$, l'interférence des réflexions multiples entre le miroir parfait ($x=0$) et la membrane mobile ($x=L_0$) conduit au champ intracavité. L'intensité normalisée $I(x)/I_0$ s'obtient en sommant la série des ondes multiples. Par application de la formule d'Airy pour une cavité asymétrique :
   $$\frac{I(x)}{I_0} = \frac{T}{(1-r)^2 + 4r \sin^2(k x)}$$
   En tenant compte de la condition aux limites au miroir parfait ($x=0$), l'onde incidente et l'onde réfléchie s'annulent en phase, et l'intensité dans la cavité présente une structure stationnaire de période spatiale $\lambda_L / 2$.

4. **A.4.** La condition de résonance optique correspond au maximum de l'intensité intracavité, soit lorsque l'argument du sinus s'annule modulo $\pi$ :
   $$k L_0 = m \pi \quad (m \in \mathbb{N}^*)$$
   Soit $\omega_{\text{cav}} = \frac{m \pi c}{L_0}$. Si la membrane subit un déplacement élémentaire $\delta x$, la longueur effective de la cavité devient $L_0 + \delta x$. La phase optique totale du tour de cavité est modifiée de :
   $$\delta \phi = 2 k \delta x = \frac{2 \omega_L}{c} \delta x$$

5. **A.5.** La force de radiation exercée par le champ optique sur la membrane est proportionnelle à la densité d'énergie électromagnétique stockée dans la cavité. En régime permanent, elle s'écrit :
   $$\langle F_{\text{opt}} \rangle = \frac{P_{\text{inc}}}{c} \frac{4 R \sin^2(k L_0)}{(1-R)^2 + 4 R \sin^2(k L_0)}$$
   En introduisant la finesse $F \approx \frac{\pi \sqrt{R}}{1-R}$ et le désaccord fréquentiel $\Delta \omega = \omega_L - \omega_{\text{cav}}$, la force se réécrit sous forme lorentzienne au voisinage de la résonance :
   $$\langle F_{\text{opt}} \rangle = \frac{P_{\text{inc}}}{c} \frac{\mathcal{F}}{\pi} \frac{1}{1 + \left(\frac{2 \mathcal{F}}{\pi} \frac{\Delta \omega}{\omega_{\text{cav}}}\right)^2}$$

---

### Partie B : Thermodynamique statistique du résonateur et fluctuations

1. **B.1.** Le PFD appliqué à la membrane de masse $M$ se projette selon $(Ox)$ :
   $$M \ddot{x} + M \Gamma_m \dot{x} + M \Omega_m^2 x = \langle F_{\text{opt}} \rangle + \delta F_{\text{th}}(t)$$
   avec $\Gamma_m = \frac{\Omega_m}{Q_m}$ le taux d'amortissement visqueux, $\Omega_m = \sqrt{\frac{k_{\text{mech}}}{M}}$ la pulsation propre mécanique, et $\delta F_{\text{th}}(t)$ la force stochastique de Langevin caractérisant les chocs moléculaires du bain thermique.

2. **B.2.** Pour de petites fluctuations $\delta x(t)$ autour de la position d'équilibre $x=0$, on effectue un développement de Taylor de la force moyenne de radiation :
   $$\langle F_{\text{opt}}(x_0 + \delta x) \rangle \approx \langle F_{\text{opt}}(x_0) \rangle + \left. \frac{\partial \langle F_{\text{opt}} \rangle}{\partial x} \right|_{x_0} \delta x$$
   On définit la rigidité optique $k_{\text{opt}}$ :
   $$k_{\text{opt}} = - \frac{\partial \langle F_{\text{opt}} \rangle}{\partial x}$$
   L'équation linéarisée devient :
   $$M \delta\ddot{x} + M \Gamma_m \delta\dot{x} + (M \Omega_m^2 + k_{\text{opt}}) \delta x = \delta F_{\text{th}}(t)$$
   Le système est stable si la rigidité totale effective est positive, c'est-à-dire $M \Omega_m^2 + k_{\text{opt}} > 0$. Si $k_{\text{opt}}$ est négatif et de module supérieur à $M\Omega_m^2$, le système diverge (instabilité statique ou *pull-in*).

3. **B.3.** D'après le théorème d'équipartition de l'énergie statistique, chaque degré de liberté quadratique de l'énergie possède une énergie moyenne égale à $\frac{1}{2} k_B T_0$. Pour l'énergie potentielle élastique :
   $$\frac{1}{2} M \Omega_m^2 \langle \delta x^2 \rangle = \frac{1}{2} k_B T_0$$
   On en déduit l'écart-type des fluctuations de position thermique pure :
   $$\sigma_x = \sqrt{\langle \delta x^2 \rangle} = \sqrt{\frac{k_B T_0}{M \Omega_m^2}}$$

4. **B.4.** À l'équilibre thermodynamique, la fonction de partition canonique de l'oscillateur harmonique est :
   $$Z = \sum_{n=0}^{\infty} \exp\left(-\frac{E_n}{k_B T_0}\right) = \frac{1}{2 \sinh\left(\frac{\hbar \Omega_m}{2 k_B T_0}\right)}$$
   Dans la limite classique haute température ($k_B T_0 \gg \hbar \Omega_m$), $Z \approx \frac{k_B T_0}{\hbar \Omega_m}$.
   Par application du théorème de fluctuation-dissipation, la densité spectrale de puissance (DSP) des fluctuations de position $S_{xx}(\omega)$ est liée à la partie imaginaire de la susceptibilité mécanique $\chi(\omega) = \frac{1}{M(\Omega_m^2 - \omega^2 + i \Gamma_m \omega)}$ :
   $$S_{xx}(\omega) = \frac{2}{\pi} \frac{k_B T_0}{\omega} \text{Im}[\chi(\omega)] = \frac{2 k_B T_0 \Gamma_m / M}{(\Omega_m^2 - \omega^2)^2 + \Gamma_m^2 \omega^2}$$

5. **B.5.** L'interférométrie Fabry-Perot permet de transformer un déplacement mécanique $\delta x$ en une modulation de phase optique, détectable par des méthodes hétérodynes ou homodynes avec une sensibilité picométrique, voire sub-femtométrique. 
   Cependant, ce gain en sensibilité se heurte à un compromis fondamental dicté par la mécanique quantique : pour mesurer avec précision la position par un faisceau lumineux, il faut augmenter la puissance incidente $P_{\text{inc}}$, ce qui accroît les fluctuations de nombre de photons (bruit de grenaille, *shot noise*). En retour, la force de radiation fluctuante associée (rétroaction ou *quantum back-action*) perturbe le mouvement de la membrane. Ce compromis définit la Limite Standard Quantique (SQL), traduisant le principe d'incertitude de Heisenberg appliqué à la mesure continue d'une position.