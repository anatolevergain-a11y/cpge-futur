---
title: 'Exercice 2 : Usinage et moulage'
description: 'Problème d entraînement type concours.'
---

# Concours CPGE (PTSI) - Sciences Industrielles de l'Ingénieur
## Chapitre : Conception et Procédés de fabrication — Thème : Usinage et moulage

---

### **Avertissement de l'examinateur**
*Ce problème aborde l'optimisation d'un procédé de fabrication mixte (moulage et usinage) pour une pièce mécanique à géométrie complexe. En filière PTSI, l'attente principale est double : la capacité à modéliser les efforts et les conditions de coupe en usinage d'une part, et l'analyse critique des choix technico-économiques d'autre part. Rédigez vos applications numériques avec un regard critique sur la validité des résultats.*

---

## **Énoncé du Problème**

On s'intéresse à la fabrication d'un carter de réducteur en alliage d'aluminium (densité $\rho = 2,7 \times 10^3 \, \text{kg}\cdot\text{m}^{-3}$, résistance spécifique à la coupe $K_c = 850 \, \text{MPa}$). 

La pièce brute est obtenue par **fonderie (moulage en sable)**, puis certaines surfaces fonctionnelles subissent une opération de **chariotage / surfaçage par usinage** sur un tour ou un centre d'usinage.

### **Partie I : Étude du procédé de moulage (Fonderie)**
Le volume net de la pièce finale est $V_p = 1,2 \times 10^{-3} \, \text{m}^3$. Pour assurer la qualité de la pièce moulée (compenser le retrais et alimenter les masselottes), on ajoute un volume de masselottes et de réseaux de coulée représentant $35\%$ du volume de la pièce.

1. Calculer la masse du bloc de métal liquide à verser dans le moule.
2. Le métal est chauffé depuis une température ambiante de $20 \, ^\circ\text{C}$ jusqu'à sa température de coulée de $700 \, ^\circ\text{C}$. 
   * Chaleur massique de l'aluminium : $c = 900 \, \text{J}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$.
   * Chaleur latente de fusion : $L_f = 3,97 \times 10^5 \, \text{J}\cdot\text{kg}^{-1}$.
   * Déterminer l'énergie thermique totale nécessaire pour fondre cette quantité d'aluminium.

### **Partie II : Étude de l'opération d'usinage (Tournage)**
Une des portées cylindriques du carter, de diamètre initial $D_0 = 120 \, \text{mm}$, doit être ramenée à un diamètre final $D_f = 115 \, \text{mm}$ sur une longueur $L = 200 \, \text{mm}$ par une passe de chariotage.

Les conditions de coupe choisies sont :
* Vitesse de coupe : $V_c = 250 \, \text{m}\cdot\text{min}^{-1}$
* Avance par tour : $f = 0,25 \, \text{mm}\cdot\text{tr}^{-1}$

3. Calculer la vitesse de rotation de la broche $N$ en $\text{tr}\cdot\text{min}^{-1}$ (on prendra le diamètre moyen pour le calcul).
4. Calculer la profondeur de passe $a_p$.
5. Déterminer l'effort de coupe tangentiel $F_c$ et la puissance de coupe $P_c$ associée.

### **Partie III : Analyse critique**
6. Discuter de l'intérêt d'associer le moulage et l'usinage pour cette pièce par rapport à une fabrication 100% usinée dans la masse.

---

## **Corrigé Pas à Pas**

### **Partie I : Étude du procédé de moulage**

#### **1. Masse du bloc de métal liquide**
Le volume de la pièce est $V_p = 1,2 \times 10^{-3} \, \text{m}^3$.
Le volume total $V_t$ incluant les masselottes et le système de coulée est :
$$V_t = V_p \times (1 + 0,35) = 1,2 \times 10^{-3} \times 1,35 = 1,62 \times 10^{-3} \, \text{m}^3$$

La masse $m$ correspondante est :
$$m = \rho \times V_t = 2,7 \times 10^3 \times 1,62 \times 10^{-3} = 4,374 \, \text{kg}$$

$$\boxed{m = 4,37 \, \text{kg}}$$

#### **2. Énergie thermique totale**
L'énergie thermique se décompose en deux phases :
* L'élévation de température de $20 \, ^\circ\text{C}$ à $700 \, ^\circ\text{C}$ (fusion à $\approx 660 \, ^\circ\text{C}$ gérée globalement par l'apport d'enthalpie). $\Delta T = 700 - 20 = 680 \, \text{K}$.
* Le changement d'état (fusion).

$$E_{\text{totale}} = m \cdot c \cdot \Delta T + m \cdot L_f$$
$$E_{\text{totale}} = 4,374 \times \left( 900 \times 680 + 3,97 \times 10^5 \right)$$
$$E_{\text{totale}} = 4,374 \times \left( 612000 + 397000 \right) = 4,374 \times 1009000 = 4,41 \times 10^6 \, \text{J}$$

$$\boxed{E_{\text{totale}} \approx 4,41 \, \text{MJ}}$$

---

### **Partie II : Étude de l'opération d'usinage**

#### **3. Vitesse de rotation de la broche**
Le diamètre moyen $D_m$ pour le calcul de la vitesse de rotation est :
$$D_m = \frac{D_0 + D_f}{2} = \frac{120 + 115}{2} = 117,5 \, \text{mm} = 0,1175 \, \text{m}$$

La relation entre vitesse de coupe et fréquence de rotation est $V_c = \pi \cdot D_m \cdot N$, soit :
$$N = \frac{V_c}{\pi \cdot D_m} = \frac{250}{\pi \times 0,1175} \approx 677,2 \, \text{tr}\cdot\text{min}^{-1}$$

$$\boxed{N \approx 677 \, \text{tr}\cdot\text{min}^{-1}}$$

#### **4. Profondeur de passe**
La profondeur de passe $a_p$ en tournage se calcule par :
$$a_p = \frac{D_0 - D_f}{2} = \frac{120 - 115}{2} = 2,5 \, \text{mm}$$

$$\boxed{a_p = 2,5 \, \text{mm}}$$

#### **5. Effort de coupe et puissance**
La section du copeau non déformé est $S = a_p \times f = 2,5 \times 0,25 = 0,625 \, \text{mm}^2 = 0,625 \times 10^{-6} \, \text{m}^2$.

L'effort tangentiel de coupe $F_c$ s'exprime par :
$$F_c = K_c \times S = (850 \times 10^6) \times (0,625 \times 10^{-6}) = 531,25 \, \text{N}$$

$$\boxed{F_c \approx 531 \, \text{N}}$$

La puissance de coupe $P_c$ se déduit par :
$$P_c = F_c \times V_c = 531,25 \times \left(\frac{250}{60}\right) \approx 2213,5 \, \text{W}$$

$$\boxed{P_c \approx 2,21 \, \text{kW}}$$

---

### **Partie III : Analyse critique**

#### **6. Intérêts et limites de la gamme mixte (Moulage + Usinage)**

* **Bilan technico-économique :** 
  * *Avantage :* Le moulage permet d'obtenir rapidement et à moindre coût une forme proche de la cote finale (forme complexe interne/externe du carter) tout en minimisant la quantité de matière initiale à enlever. Usiner directement un tel carter dans un bloc massif (« usinage dans la masse ») engendrerait un taux de copeaux (perte de matière) considérable, un temps d'usinage prohibitif et une usure d'outil importante.
  * *Inconvénient :* Nécessite des investissements initiaux lourds (outillage de fonderie / modèle) et engendre des défauts métallurgiques potentiels (porosités, retassures).
* **Justesse des résultats numériques :** 
  * La puissance de coupe trouvée ($\approx 2,2 \, \text{kW}$) est tout à fait compatible avec un centre d'usinage ou un tour standard deatelier. 
  * Toutefois, l'hypothèse d'un effort de coupe linéaire $F_c = K_c \cdot S$ suppose un outil parfaitement affûté. En fonderie sable, la présence potentielle de inclusions de sable résiduelles en surface peut provoquer une usure abrasive prématurée de l'arête de coupe, augmentant localement $K_c$ et nécessitant l'utilisation de nuances dures ( carbure revêtu).