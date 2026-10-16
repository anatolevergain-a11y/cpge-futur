---
title: 'Exercice 2 : Auto-induction et induction mutuelle'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude d'un transformateur réel et couplage magnétique

### Contexte et objectifs
Ce problème propose d'étudier le comportement d'un transformateur monophasé réel, de la modélisation théorique par l'induction mutuelle jusqu'aux limites pratiques des matériaux ferromagnétiques et des régimes transitoires. L'accent est mis sur la rigueur des notations, le maniement des grandeurs complexes et l'analyse critique des hypothèses (fuites magnétiques, résistances des enroulements, saturation).

---

## Énoncé

On considère un circuit magnétique torique non saturable de section $S$ constante et de longueur moyenne $l_m$. Le circuit comporte deux enroulements (bobines) de résistances respectives $R_1$ et $R_2$, et de nombres de spires $N_1$ et $N_2$. 

On note $L_1$ et $L_2$ les inductances propres de chaque enroulement, et $M$ l'inductance mutuelle entre les deux bobines.

### Données numériques et ordres de grandeur :
*   Nombre de spires : $N_1 = 500$, $N_2 = 50$.
*   Résistances : $R_1 = 2{,}0\ \Omega$, $R_2 = 0{,}05\ \Omega$.
*   Inductances propres : $L_1 = 125\ \text{mH}$, $L_2 = 1{,}25\ \text{mH}$.
*   Fréquence du réseau d'alimentation : $f = 50\ \text{Hz}$ ($\omega = 2\pi f \approx 314\ \text{rad}\cdot\text{s}^{-1}$).

---

## Questions

### Partie I : Modélisation théorique et couplage magnétique

1. **Établissement des équations électriques** : En convention récepteur pour les deux enroulements, exprimer les tensions instantanées aux bornes des enroulements $u_1(t)$ et $u_2(t)$ en fonction des courants $i_1(t)$, $i_2(t)$ et des caractéristiques du système ($R_1, R_2, L_1, L_2, M$).
2. **Coefficient de couplage** : Rappeler la définition du coefficient de couplage $k$ entre les deux bobines. Exprimer $k$ en fonction de $L_1$, $L_2$ et $M$. Montrer théoriquement que $0 \le k \le 1$. Calculer la valeur de $k$ sachant que l'inductance mutuelle mesurée est $M = 7{,}0\ \text{mH}$. Le couplage peut-il être qualifié de parfait ?
3. **Régime sinusoïdal établi** : On se place en régime sinusoïdal de pulsation $\omega$. On note $\underline{U}_1$, $\underline{U}_2$, $\underline{I}_1$ et $\underline{I}_2$ les amplitudes complexes associées. Écrire le système matriciel liant les tensions complexes aux courants complexes.

### Partie II : Étude du transformateur en charge

Le secondaire (bobine 2) est branché aux bornes d'une charge résistive pure de résistance $R_c = 10\ \Omega$. Le primaire (bobine 1) est alimenté par une source de tension sinusoïdale idéale $\underline{U}_1 = U_1 \sqrt{2} \exp(j 0^\circ)$ avec $U_1 = 230\ \text{V}$ efficace.

4. **Équations du système en charge** : Écrire la relation supplémentaire liant $\underline{U}_2$ et $\underline{I}_2$ due à la charge. En déduire l'expression du courant secondaire $\underline{I}_2$ en fonction de $\underline{I}_1$, $\omega$, $M$, $R_2$ et $R_c$.
5. **Impédance ramenée au primaire** : Exprimer l'équation du circuit primaire en éliminant $\underline{I}_2$. En déduire l'expression de l'impédance complexe totale $\underline{Z}_{\text{ent}}$ vue par le générateur au primaire.
6. **Application numérique et analyse critique** : 
   * Calculer la valeur efficace du courant secondaire $I_2$.
   * Évaluer l'influence de la résistance $R_1$ du primaire et $R_2$ du secondaire devant les termes inductifs ($\omega L_1$ et $\omega L_2$) et la charge. Quelle approximation classique des transformateurs de "parfaite" (idéaux) cela justifie-t-il ?

### Partie III : Régime transitoire et limites du modèle

On déconnecte la charge et on étudie l'établissement du courant au primaire lors de la fermeture d'un interrupteur à $t = 0$. Le secondaire est maintenant en circuit ouvert ($i_2 = 0$).

7. **Équation différentielle** : Établir l'équation différentielle vérifiée par $i_1(t)$ pour $t > 0$, sachant que $u_1(t) = E_0 H(t)$ (où $E_0$ est une constante continue).
8. **Analyse critique et saturation du fer** : 
   * Résoudre l'équation pour trouver $i_1(t)$ et préciser la constante de temps $\tau$ du circuit. Calculer $\tau$ avec les données numériques.
   * *Esquisse d'analyse critique* : Dans un vrai transformateur, le noyau est en matériau ferromagnétique caractérisé par un champ magnétique de saturation $B_{\text{sat}}$. Si le courant $i_1(t)$ dépasse une valeur critique $I_{\text{sat}}$, que se passe-t-il pour l'inductance $L_1$ ? Quel est l'impact sur le régime transitoire et sur le fonctionnement global du dispositif ?

---

## Pistes et indications

*   **Q2** : Utiliser l'énergie magnétique emmagasinée dans un système de deux circuits couplés, qui doit nécessairement être positive ou nulle quel que soit l'état des courants (application de l'inégalité de Cauchy-Schwarz).
*   **Q5** : Substituez $\underline{I}_2$ exprimé en fonction de $\underline{I}_1$ dans l'équation de la maille primaire pour faire apparaître $\underline{Z}_{\text{ent}} = \underline{U}_1 / \underline{I}_1$.
*   **Q8** : Pensez à l'expression de l'inductance liée au flux propre : $L_1 = N_1 \frac{d\Phi_1}{di_1}$. Si le fer sature, la variation de flux $\mathrm{d}\Phi_1$ pour une variation $\mathrm{d}i_1$ chute drastiquement.

---

## Corrigé pas à pas

### Partie I : Modélisation théorique et couplage magnétique

1. **Équations électriques instantanées** :
   En convention récepteur, la tension aux bornes d'un enroulement comprend la chute ohmique et la f.e.m. induite (auto-induction et induction mutuelle) :
   $$u_1(t) = R_1 i_1(t) + \frac{\mathrm{d}\Phi_1}{\mathrm{d}t} = R_1 i_1(t) + L_1 \frac{\mathrm{d}i_1}{\mathrm{d}t} + M \frac{\mathrm{d}i_2}{\mathrm{d}t}$$
   $$u_2(t) = R_2 i_2(t) + \frac{\mathrm{d}\Phi_2}{\mathrm{d}t} = R_2 i_2(t) + L_2 \frac{\mathrm{d}i_2}{\mathrm{d}t} + M \frac{\mathrm{d}i_1}{\mathrm{d}t}$$

2. **Coefficient de couplage** :
   L'énergie magnétique du système s'écrit $E_m = \frac{1}{2}L_1 i_1^2 + \frac{1}{2}L_2 i_2^2 + M i_1 i_2$. 
   Pour que cette énergie soit positive ou nulle pour toutes valeurs de $i_1$ et $i_2$, le discriminant du trinôme en $i_1/i_2$ doit être négatif ou nul, soit $M^2 - L_1 L_2 \le 0$.
   On définit le coefficient de couplage $k$ par :
   $$k = \frac{M}{\sqrt{L_1 L_2}} \quad \text{avec} \quad 0 \le k \le 1$$
   *Application numérique* :
   $$k = \frac{7{,}0 \times 10^{-3}}{\sqrt{125 \times 10^{-3} \times 1{,}25 \times 10^{-3}}} = \frac{7{,}0 \times 10^{-3}}{\sqrt{156{,}25 \times 10^{-6}}} = \frac{7{,}0 \times 10^{-3}}{12{,}5 \times 10^{-3}} = 0{,}56$$
   Le couplage est de $56\%$, il n'est **pas parfait** ($k < 1$, présence notable de fuites magnétiques).

3. **Régime sinusoïdal établi** :
   En remplaçant $\frac{\mathrm{d}}{\mathrm{d}t}$ par $j\omega$, on obtient le système matriciel :
   $$\begin{pmatrix} \underline{U}_1 \\ \underline{U}_2 \end{pmatrix} = \begin{pmatrix} R_1 + j\omega L_1 & j\omega M \\ j\omega M & R_2 + j\omega L_2 \end{pmatrix} \begin{pmatrix} \underline{I}_1 \\ \underline{I}_2 \end{pmatrix}$$

---

### Partie II : Étude du transformateur en charge

4. **Courant secondaire $\underline{I}_2$** :
   La charge étant purement résistive, la loi d'Ohm au secondaire s'écrit $\underline{U}_2 = -R_c \underline{I}_2$ (le signe moins provient de la convention récepteur où $\underline{I}_2$ sort de la borne positive si on orientait en générateur, attention ici $\underline{U}_2 = -R_c \underline{I}_2$ si le courant entre par la borne positive et traverse la charge). Plus rigoureusement, aux bornes de la charge, $u_2 = -R_c i_2$, donc l'équation de la maille secondaire devient :
   $$-R_c \underline{I}_2 = (R_2 + j\omega L_2)\underline{I}_2 + j\omega M \underline{I}_1 \implies \underline{I}_2 = \frac{-j\omega M}{R_2 + R_c + j\omega L_2} \underline{I}_1$$

5. **Impédance ramenée au primaire** :
   En injectant $\underline{I}_2$ dans l'équation du primaire :
   $$\underline{U}_1 = (R_1 + j\omega L_1)\underline{I}_1 + j\omega M \left( \frac{-j\omega M}{R_2 + R_c + j\omega L_2} \underline{I}_1 \right)$$
   $$\underline{U}_1 = \left[ R_1 + j\omega L_1 + \frac{\omega^2 M^2}{R_2 + R_c + j\omega L_2} \right] \underline{I}_1$$
   L'impédance d'entrée est donc :
   $$\underline{Z}_{\text{ent}} = \frac{\underline{U}_1}{\underline{I}_1} = R_1 + j\omega L_1 + \frac{\omega^2 M^2}{(R_2 + R_c) + j\omega L_2}$$

6. **Application numérique et analyse critique** :
   *   Calculons d'abord les termes réactifs à $f = 50\ \text{Hz}$ ($\omega \approx 314{,}16\ \text{rad}\cdot\text{s}^{-1}$) :
       *   $\omega L_1 = 314{,}16 \times 0{,}125 \approx 39{,}3\ \Omega$
       *   $\omega L_2 = 314{,}16 \times 1{,}25 \times 10^{-3} \approx 0{,}39\ \Omega$
       *   $\omega M = 314{,}16 \times 7{,}0 \times 10^{-3} \approx 2{,}20\ \Omega$
   *   Calcul de $\underline{I}_2$ : 
       Le terme $(\omega M)^2 \approx 4{,}84\ \Omega^2$. Le dénominateur pour $\underline{I}_2$ est $(0{,}05 + 10) + j(0{,}39) \approx 10{,}05 + j0{,}39\ \Omega$.
       Amplitude de $\underline{I}_2$ :
       $$I_2 = \frac{\omega M}{\sqrt{(R_2+R_c)^2 + (\omega L_2)^2}} I_1$$
       Il nous faut $I_1 = U_1 / |\underline{Z}_{\text{ent}}|$. Faisons l'estimation numérique complète :
       Terme ramené au primaire (impédance mutuelle) : 
       $$\underline{Z}_{\text{mut}} = \frac{(\omega M)^2}{(R_2+R_c)^2 + (\omega L_2)^2} \left[ (R_2+R_c) - j\omega L_2 \right] \approx \frac{4{,}84}{100{,}2} [10{,}05 - j0{,}39] \approx 0{,}485 - j0{,}019\ \Omega$$
       Ainsi, $\underline{Z}_{\text{ent}} \approx (2{,}0 + 0{,}485) + j(39{,}3 - 0{,}019) \approx 2{,}49 + j39{,}3\ \Omega$.
       Le courant primaire efficace $I_1$ vaut :
       $$I_1 = \frac{230}{\sqrt{2{,}49^2 + 39{,}3^2}} \approx \frac{230}{39{,}4} \approx 5{,}84\ \text{A}$$
       Le courant secondaire efficace $I_2$ vaut alors :
       $$I_2 = \frac{2{,}20}{\sqrt{10{,}05^2 + 0{,}39^2}} I_1 \approx \frac{2{,}20}{10{,}06} \times 5{,}84 \approx 0{,}219 \times 5{,}84 \approx 1{,}28\ \text{A}$$
   *   **Analyse critique** : On remarque que $R_1 = 2{,}0\ \Omega \ll \omega L_1 = 39{,}3\ \Omega$ et $R_2 = 0{,}05\ \Omega \ll R_c = 10\ \Omega$. 
       *   *Justification du modèle idéal* : Devant les réactances inductives et la résistance de charge, les résistances propres des enroulements peuvent souvent être négligées en première approximation pour estimer les transferts de tension/courant (modèle du transformateur parfait où $U_2/U_1 \approx N_2/N_1$). Cependant, pour le bilan énergétique et le calcul des pertes par effet Joule ($P_j = R_1 I_1^2 + R_2 I_2^2$), ces résistances, aussi petites soient-elles, sont absolument fondamentales.

---

### Partie III : Régime transitoire et limites du modèle

7. **Équation différentielle du premier ordre** :
   Au secondaire, $i_2 = 0$. L'équation du primaire avec $u_1(t) = E_0$ (pour $t>0$) devient :
   $$E_0 = R_1 i_1(t) + L_1 \frac{\mathrm{d}i_1}{\mathrm{d}t}$$
   C'est une équation différentielle linéaire du premier ordre classique :
   $$\frac{\mathrm{d}i_1}{\mathrm{d}t} + \frac{R_1}{L_1} i_1(t) = \frac{E_0}{L_1}$$
   La constante de temps du circuit est $\tau = \frac{L_1}{R_1}$.
   *Application numérique* :
   $$\tau = \frac{125 \times 10^{-3}}{2{,}0} = 62{,}5\ \text{ms}$$

8. **Analyse critique et saturation du fer** :
   La solution avec $i_1(0) = 0$ est :
   $$i_1(t) = \frac{E_0}{R_1} \left( 1 - e^{-t/\tau} \right)$$
   *   **Limites du modèle (Saturation du fer)** : 
       Dans notre modèle, $L_1$ est supposée constante. Or, $L_1$ dépend de la perméabilité magnétique $\mu$ du noyau de fer doux : $L_1 \propto \mu$. 
       Lorsque le courant $i_1(t)$ augmente, le champ magnétique $B$ dans le noyau s'accroît. Au-delà d'une certaine valeur seuil ($B_{\text{sat}}$), les domaines magnétiques du matériau sont entièrement alignés : le fer **sature**. 
       Conséquence directe : la perméabilité relative $\mu_r$ chute brutalement pour tendre vers celle du vide ($\mu_r \to 1$). Par conséquent, **l'inductance $L_1$ s'effondre** (devient quasi nulle).
       *   *Impact* : La constante de temps $\tau = L_1/R_1$ devient extrêmement faible, ce qui provoque des **pics de courant transitoires colossaux** lors de la mise sous tension (courants d'appel ou *inrush currents*), pouvant atteindre 5 à 10 fois le courant nominal et déclencher des protections, phénomène totalement invisible dans le cadre du modèle linéaire idéal.