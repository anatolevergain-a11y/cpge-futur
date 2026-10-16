---
title: 'Exercice 1 : Systèmes différentiels linéaires'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude dynamique d'un système électromécanique couplé

## Énoncé

Dans le cadre de la conception d'un système mécatronique de haute précision (type bras actionneur pour système optique spatial), on s'intéresse à la modélisation et au comportement dynamique d'un moteur à courant continu entraînant une charge inertielle par l'intermédiaire d'un arbre de transmission élastique.

### Paramètres et données du système
Le système physique est régi par les paramètres nominaux suivants :
* Résistance d'induit : $R = 2{,}0\,\Omega$
* Inductance d'induit : $L = 5{,}0 \times 10^{-3}\,\text{H}$
* Constante de couple / de force contre-électromotrice : $K = 0{,}5\,\text{V}\cdot\text{s}\cdot\text{rad}^{-1}$ (ou $\text{N}\cdot\text{m}\cdot\text{A}^{-1}$)
* Moment d'inertie du rotor : $J_1 = 1{,}0 \times 10^{-4}\,\text{kg}\cdot\text{m}^2$
* Moment d'inertie de la charge : $J_2 = 4{,}0 \times 10^{-4}\,\text{kg}\cdot\text{m}^2$
* Raideur de torsion de l'arbre : $C = 1{,}0\,\text{N}\cdot\text{m}\cdot\text{rad}^{-1}$
* Coefficients de frottis visqueux : négligeables devant les autres termes pour la dynamique rapide, notés $f_1 = f_2 = 0$.

On note $i(t)$ le courant dans l'induit, $\theta_1(t)$ l'angle de rotation du rotor, et $\theta_2(t)$ l'angle de rotation de la charge. On pose $\omega_1(t) = \dot{\theta}_1(t)$ et $\omega_2(t) = \dot{\theta}_2(t)$ les vitesses angulaires respectives. 

### Modélisation mathématique
Le système des lois physiques conduit au système différentiel linéaire du premier ordre suivant, où le vecteur d'état est $\displaystyle X(t) = \begin{pmatrix} i(t) \\ \omega_1(t) \\ \omega_2(t) \\ \theta_1(t) - \theta_2(t) \end{pmatrix}$ :

$$\frac{dX}{dt} = A X + B u(t)$$

Où $u(t) = E_0$ est une tension d'alimentation constante (échelon de tension de commande).

---

## Questions

### Partie I : Mise en équation et réduction matricielle
1. Établir les équations différentielles couplées régissant le système à partir des lois de l'électricité (loi des mailles dans l'induit) et de la mécanique (principe fondamental de la dynamique en rotation pour le rotor et la charge, ainsi que la relation de torsion de l'arbre).
2. Expliciter la matrice $A$ d'ordre $4$ associée au système homogène.
3. Écrire le polynôme caractéristique $P(\lambda) = \det(\lambda I_4 - A)$ sous une forme factorisée ou simplifiée en exploitant la structure par blocs du système.

### Partie II : Étude qualitative et stabilité
4. Déterminer les valeurs propres de la matrice $A$. *On pourra introduire la pulsation propre de torsion non amortie $\omega_0 = \sqrt{C\left(\frac{1}{J_1} + \frac{1}{J_2}\right)}$ et la pulsation électrique caractéristique.*
5. Conclure quant à la stabilité asymptotique du système. Le modèle est-il conservatif ou dissipatif ? Justifier rigoureusement.

### Partie III : Analyse critique des limites du modèle
6. Calculer l'ordre de grandeur numérique des pulsations propres identifiées. Commenter la validité de l'hypothèse d'inductance négligeable souvent faite en automatique industrielle ($L \to 0$).
7. Discuter des limites physiques de ce modèle linéaire idéal face à un cas réel (saturation, frottements secs, non-linéarités géométriques de l'arbre).

---

## Pistes et indications

* **Indication 1 (Partie I)** : Le couple transmis par l'arbre élastique est $C_t = C(\theta_1 - \theta_2)$. Veillez à bien orienter les signes dans les équations mécaniques du rotor et de la charge.
* **Indication 2 (Partie II)** : Pour le calcul des valeurs propres, effectuez des opérations élémentaires sur les lignes et colonnes du déterminant pour faire apparaître des blocs découplés, ou utilisez la dérivation temporelle successive des variables d'état.
* **Indication 3 (Partie III)** : Comparez la constante de temps électrique $\tau_e = L/R$ devant la période propre des oscillations mécaniques induites par l'élasticité de l'arbre.

---

## Corrigé pas à pas

### Partie I : Mise en équation et réduction matricielle

1. **Établissements des lois physiques :**
   * *Circuit électrique (induit) :* $u(t) = R i + L \frac{di}{dt} + e(t)$, avec la force contre-électromotrice $e(t) = K \omega_1$. D'où :
     $$\frac{di}{dt} = -\frac{R}{L}i - \frac{K}{L}\omega_1 + \frac{1}{L}u(t)$$
   * *Mécanique du rotor (Inertie $J_1$) :* Le couple moteur est $C_m = K i$. Le couple transmis par l'arbre est $C_a = C(\theta_1 - \theta_2)$. 
     $$J_1 \frac{d\omega_1}{dt} = K i - C(\theta_1 - \theta_2) \implies \frac{d\omega_1}{dt} = \frac{K}{J_1}i - \frac{C}{J_1}(\theta_1 - \theta_2)$$
   * *Mécanique de la charge (Inertie $J_2$) :* 
     $$J_2 \frac{d\omega_2}{dt} = C(\theta_1 - \theta_2) \implies \frac{d\omega_2}{dt} = \frac{C}{J_2}(\theta_1 - \theta_2)$$
   * *Cinématique de l'arbre :* La dérivée de la torsion $\varphi = \theta_1 - \theta_2$ est :
     $$\frac{d}{dt}(\theta_1 - \theta_2) = \omega_1 - \omega_2$$

2. **Matrice $A$ du système :**
   En posant $X = \begin{pmatrix} i \\ \omega_1 \\ \omega_2 \\ \theta_1 - \theta_2 \end{pmatrix}$, on obtient par identification :
   $$A = \begin{pmatrix} 
   -\frac{R}{L} & -\frac{K}{L} & 0 & 0 \\
   \frac{K}{J_1} & 0 & 0 & -\frac{C}{J_1} \\
   0 & 0 & 0 & \frac{C}{J_2} \\
   0 & 1 & -1 & 0 
   \end{pmatrix}$$

3. **Polynôme caractéristique :**
   Le calcul de $\det(\lambda I_4 - A)$ s'effectue en développant par rapport aux lignes ou en remarquant que le système se ramène à une équation différentielle d'ordre 4. 
   En dérivant successivement, on met en évidence l'équation caractéristique globale :
   $$P(\lambda) = \lambda^4 + \frac{R}{L}\lambda^3 + \left(\omega_0^2 + \frac{K^2}{L J_1}\right)\lambda^2 + \frac{R}{L}\omega_0^2 \lambda$$
   où $\omega_0^2 = C\left(\frac{1}{J_1} + \frac{1}{J_2}\right)$.

---

### Partie II : Étude qualitative et stabilité

4. **Valeurs propres :**
   On factorise le polynôme caractéristique :
   $$P(\lambda) = \lambda \left[ \lambda^3 + \frac{R}{L}\lambda^2 + \left(\omega_0^2 + \frac{K^2}{L J_1}\right)\lambda + \frac{R}{L}\omega_0^2 \right]$$
   Une valeur propre évidente est $\lambda_1 = 0$ (liée à l'invariance par translation de l'angle absolu, seule la différence $\theta_1 - \theta_2$ intervenant dans la dynamique).
   Les trois autres racines sont solutions de l'équation de degré 3 :
   $$\lambda^3 + \frac{R}{L}\lambda^2 + \Omega^2 \lambda + \frac{R}{L}\omega_0^2 = 0$$
   avec $\Omega^2 = \omega_0^2 + \frac{K^2}{L J_1}$.

5. **Stabilité et caractère dissipatif :**
   * L'application du critère de Routh-Hurwitz sur le polynôme de degré 3 montre que tous les coefficients sont strictement positifs (car $R, L, J_1, J_2, C, K > 0$). Les parties réelles des racines sont donc strictement négatives.
   * Le système est **asymptotiquement stable** pour les variables d'état électriques et cinétiques ($i, \omega_1, \omega_2, \theta_1 - \theta_2$). 
   * **Caractère dissipatif :** Le système dissipe de l'énergie par effet Joule dans la résistance $d'induit ($R i^2$). En l'absence de frottements visqueux mécaniques ($f_1 = f_2 = 0$), toute l'énergie mécanique oscillante finit par être amortie par couplage avec le circuit électrique résistif.

---

### Partie III : Analyse critique des limites du modèle

6. **Ordres de grandeur et analyse critique :**
   * *Constante de temps électrique :* $\tau_e = \frac{L}{R} = \frac{5 \times 10^{-3}}{2} = 2{,}5 \times 10^{-3}\,\text{s}$ ($2{,}5\,\text{ms}$).
   * *Pulsation propre de torsion :* $\omega_0 = \sqrt{1{,}0 \times \left(\frac{1}{10^{-4}} + \frac{1}{4 \times 10^{-4}}\right)} = \sqrt{1{,}0 \times 12500} \approx 111{,}8\,\text{rad}\cdot\text{s}^{-1}$, soit une fréquence propre $f_0 \approx 17{,}8\,\text{Hz}$ (période $T_0 \approx 56\,\text{ms}$).
   * *Critique de l'hypothèse $L \to 0$ :* On constate que $\tau_e$ ($2{,}5\,\text{ms}$) est environ $20$ fois plus petite que la période mécanique $T_0$ ($56\,\text{ms}$). L'approximation quasi-statique de l'induit ($L \frac{di}{dt} \approx 0$) est donc mathématiquement acceptable pour capturer la dynamique lente de position, mais **fausse** totalement l'analyse de la stabilité fine et des transitoires très brefs (pics de courant à l'initialisation de l'échelon).

7. **Limites physiques du modèle linéaire :**
   * **Saturation magnétique :** Le modèle suppose $K$ constant. En réalité, au-delà d'un certain courant $i_{\text{max}}$, le circuit magnétique sature, réduisant l'efficacité du couple moteur.
   * **Frottements secs et jeux :** L'arbre réel présente des non-linéarités de type frottement de Coulomb et des jeux angulaires ( backlash ) dans les liaisons mécaniques, ce qui peut engendrer des phénomènes de broutement ou d'instabilités non capturés par un système linéaire homogène.
   * **Limites thermiques :** L'équation ne prend pas en compte l'élévation de température de la résistance $R$ par effet Joule ($R(T) = R_0(1+\alpha \Delta T)$), ce qui fait varier les paramètres sur le long terme.