---
title: 'Exercice 1 : Théorème de Bernoulli'
description: 'Problème d entraînement type concours.'
---

# Problème GUIDÉ : Étude d'un siphon autamorçant et bilans énergétiques

**Matière :** Physique-Chimie (Filière PSI)  
Chapitre: ** Mécanique des fluides et bilans thermiques  
**Thème :** Théorème de Bernoulli, pertes de charge et cavitation  

---

## Introduction et présentation du système

On considère un dispositif de vidange d'un grand réservoir d'eau ouvert à l'air libre, à l'aide d'un tuyau cylindrique de diamètre interne $D$ constant et de longueur totale $L$. Le point $A$ représente la surface libre du réservoir, située à une altitude $z_A = H$. Le point $B$ est le point le plus haut du siphon, situé à une altitude $z_B = H + h$ (avec $h > 0$). Le point $C$ est la sortie du tuyau, située à une altitude $z_C = 0$.

### Données numériques et physiques :
* Accélération de la pesanteur : $g = 9,81 \, \text{m}\cdot\text{s}^{-2}$
* Masse volumique de l'eau : $\rho = 1000 \, \text{kg}\cdot\text{m}^{-3}$
* Pression atmosphérique : $P_0 = 1,013 \times 10^5 \, \text{Pa}$
* Viscosité dynamique de l'eau : $\mu = 1,00 \times 10^{-3} \, \text{Pa}\cdot\text{s}$
* Hauteurs : $H = 5,0 \, \text{m}$ et $h = 1,5 \, \text{m}$
* Diamètre du tuyau : $D = 2,0 \, \text{cm}$
* Longueur totale du tuyau : $L = 12 \, \text{m}$

---

## Partie I : Étude idéale (Fluide parfait, incompressible)

Dans cette première partie, on néglige les frottements visqueux et les pertes de charge singulières. Le fluide est supposé parfait.

### Question 1 : Vitesse d'écoulement en sortie
Appliquer le théorème de Bernoulli le long d'une ligne de courant entre le point $A$ (surface du réservoir) et le point $C$ (sortie du tuyau). En déduire l'expression littérale de la vitesse d'écoulement $v_C$ en $C$, puis sa valeur numérique.

> **Indication :** On pourra utiliser l'hypothèse de l'écoulement stationnaire et le fait que la surface du grand réservoir descend très lentement.

---

### Corrigé détaillé - Question 1

1. **Hypothèses et cadre d'application :**
   * Le fluide est incompressible ($\rho = \text{cte}$) et parfait ($\mu = 0$).
   * L'écoulement est stationnaire.
   * On applique le théorème de Bernoulli le long d'une ligne de courant reliant le point $A$ (surface libre) au point $C$ (sortie).

2. **Application du théorème de Bernoulli :**
   $$P_A + \frac{1}{2}\rho v_A^2 + \rho g z_A = P_C + \frac{1}{2}\rho v_C^2 + \rho g z_C$$

3. **Conditions aux limites :**
   * En $A$, le fluide est en contact avec l'atmosphère et la surface est grande, donc $P_A = P_0$ et $v_A \approx 0$.
   * En $C$, le jet débouche à l'air libre, donc $P_C = P_0$.
   * Les altitudes sont $z_A = H$ et $z_C = 0$.

4. **Résolution pour $v_C$ :**
   $$P_0 + 0 + \rho g H = P_0 + \frac{1}{2}\rho v_C^2 + 0$$
   $$\frac{1}{2}\rho v_C^2 = \rho g H \implies v_C = \sqrt{2gH}$$

5. **A.N. :**
   $$v_C = \sqrt{2 \times 9,81 \times 5,0} = \sqrt{98,1} \approx 9,90 \, \text{m}\cdot\text{s}^{-1}$$

---

### Question 2 : Pression au sommet du siphon
Déterminer la pression $P_B$ au point $M$ situé au sommet du siphon (point $B$). Exprimer $P_B$ en fonction de $P_0$, $\rho$, $g$, $H$ et $h$. Commenter le résultat.

---

### Corrigé détaillé - Question 2

1. **Application du théorème de Bernoulli entre $A$ et $B$ :**
   $$P_A + \frac{1}{2}\rho v_A^2 + \rho g z_A = P_B + \frac{1}{2}\rho v_B^2 + \rho g z_B$$

2. **Conditions aux limites :**
   * $P_A = P_0$, $v_A \approx 0$, $z_A = H$.
   * Par conservation du débit massique dans un conduit de section constante $S$, la vitesse est uniforme dans tout le tuyau : $v_B = v_C = \sqrt{2gH}$.
   * L'altitude du sommet est $z_B = H + h$.

3. **Injection et simplification :**
   $$P_0 + 0 + \rho g H = P_B + \frac{1}{2}\rho (2gH) + \rho g (H + h)$$
   $$P_0 + \rho g H = P_B + \rho g H + \rho g H + \rho g h$$
   $$P_B = P_0 - \rho g H - \rho g h$$

4. **A.N. :**
   $$P_B = 1,013 \times 10^5 - 1000 \times 9,81 \times 5,0 - 1000 \times 9,81 \times 1,5$$
   $$P_B = 101300 - 49050 - 14715 = 37535 \, \text{Pa} \approx 3,75 \times 10^4 \, \text{Pa}$$

---

## Partie II : Prise en compte des pertes de charge (Fluide réel)

Dans cette partie, on introduit les pertes de charge régulières le long de la tuyauterie. On note $\Delta P_{\text{ch}}$ la perte de charge totale entre $A$ et $C$.

### Question 3 : Expression du débit en présence de pertes de charge
On modélise les pertes de charge régulières par la relation de Darcy-Weisbach : 
$$\Delta P_{\text{ch}} = f \frac{L}{D} \frac{1}{2}\rho v^2$$
où $f$ est le facteur de friction de Darcy. Écrire le théorème de Bernoulli généralisé (avec terme de perte de charge) entre $A$ et $C$. En déduire l'expression littérale de la vitesse réelle $v$ dans le tuyau.

---

### Corrigé détaillé - Question 3

1. **Bernoulli généralisé :**
   $$P_A + \frac{1}{2}\rho v_A^2 + \rho g z_A = P_C + \frac{1}{2}\rho v_C^2 + \rho g z_C + \Delta P_{\text{ch}}$$

2. **Substitution :**
   En posant $v_A = 0$, $P_A = P_C = P_0$, $z_A = H$, $z_C = 0$ et $v_C = v$ :
   $$\rho g H = \frac{1}{2}\rho v^2 + f \frac{L}{D} \frac{1}{2}\rho v^2$$
   $$\rho g H = \frac{1}{2}\rho v^2 \left(1 + f \frac{L}{D}\right)$$

3. **Expression de la vitesse $v$ :**
   $$v = \sqrt{\frac{2gH}{1 + f \frac{L}{D}}}$$

---

### Question 4 : Régime d'écoulement et calcul numérique
En supposant un régime turbulent lissé pour lequel le facteur de friction est donné par la formule de Blasius $f = 0,316 \, Re^{-1/4}$ (avec $Re = \frac{\rho v D}{\mu}$ le nombre de Reynolds), on admet par résolution numérique que la vitesse réelle est $v \approx 6,5 \, \text{m}\cdot\text{s}^{-1}$. 
Vérifier a posteriori la validité du régime d'écoulement (calculer $Re$) et estimer la nouvelle pression au sommet $P_B'$.

---

### Corrigé détaillé - Question 4

1. **Calcul du nombre de Reynolds $Re$ :**
   $$Re = \frac{1000 \times 6,5 \times 0,02}{1,00 \times 10^{-3}} = 1,30 \times 10^5$$
   Le nombre de Reynolds est largement supérieur à $4000$, l'écoulement est bien **turbulent**, ce qui valide l'utilisation de la corrélation de type Blasius.

2. **Calcul de la pression $P_B'$ au sommet avec pertes de charge :**
   Les pertes de charge entre $A$ et $B$ représentent environ la moitié des pertes totales (car la longueur du tronçon $AB$ est comparable au tronçon $BC$, supposons par symétrie $\Delta P_{\text{ch}, AB} \approx \frac{1}{2}\Delta P_{\text{ch}}$). Plus rigoureusement, on applique le Bernoulli généralisé entre $A$ et $B$ :
   $$P_A + \rho g z_A = P_B' + \frac{1}{2}\rho v^2 + \rho g z_B + f \frac{L_{AB}}{D} \frac{1}{2}\rho v^2$$
   Avec $L_{AB} \approx \frac{L}{2} = 6 \, \text{m}$ et $f \approx 0,316 \times (1,30 \times 10^5)^{-0,25} \approx 0,0175$.
   
   Calculons le terme de pertes de charge sur $AB$ :
   $$\Delta P_{\text{ch}, AB} = 0,0175 \times \frac{6}{0,02} \times \frac{1}{2} \times 1000 \times (6,5)^2 \approx 22181 \, \text{Pa}$$

   Isolation de $P_B'$ :
   $$P_0 + \rho g H = P_B' + \frac{1}{2}\rho v^2 + \rho g (H+h) + \Delta P_{\text{ch}, AB}$$
   $$P_B' = P_0 - \rho g H - \rho g h - \frac{1}{2}\rho v^2 - \Delta P_{\text{ch}, AB}$$
   
   A.N. :
   $$P_B' = 101300 - 49050 - 14715 - \frac{1}{2}(1000)(6,5)^2 - 22181$$
   $$P_B' = 101300 - 63765 - 21125 - 22181 = -5771 \, \text{Pa} \approx -5,8 \times 10^3 \, \text{Pa}$$
   *La pression trouvée est négative.*

---

## Analyse critique des résultats

Dans la dernière question, la pression $P_B'$ calculée au sommet du siphon est **négative** (environ $-5,8 \, \text{kPa}$ en valeur absolue relative à la pression atmosphérique, soit une pression absolue de l'ordre de $95 \, \text{kPa}$, ce qui est mathématiquement possible si le liquide est en tension). 

Cependant, physiquement :
1. **Phénomène de cavitation :** L'eau liquide ne peut supporter des pressions inférieures à sa tension de vapeur saturante $P_{\text{sat}}(T)$ sans se vaporiser. À température ambiante ($20^\circ\text{C}$), $P_{\text{sat}} \approx 2,34 \, \text{kPa}$ (en pression absolue). 
2. **Conséquence sur le système :** Dès que la pression locale atteint $P_{\text{sat}}$, l'eau se vaporise, il se forme une poche de vapeur au sommet $B$. Le siphon se désamorce instantanément, la continuité de la colonne d'liquide est rompue.
3. **Limite de hauteur :** Pour qu'un tel siphon fonctionne en régime réel, la hauteur maximale $h$ par rapport au réservoir est limitée par la pression atmosphérique et ne peut excéder théoriquement $10,3 \, \text{m}$ (hauteur d'eau équivalente à $1 \, \text{atm}$), et en pratique bien moins à cause des pertes de charge et de la cavitation.