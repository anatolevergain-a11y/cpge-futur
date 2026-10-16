---
title: 'Exercice 2 : Usinage à commande numérique'
description: 'Problème d entraînement type concours.'
---

# CONCOURS CPGE - FILIÈRE PT
## Sciences Industrielles de l'Ingénieur (SII)
### Chapitre : Procédés d'industrialisation et Spécification GPS
#### Thème : Usinage à commande numérique et analyse critique

---

## Préambule et Objectifs
Ce problème guidé aborde l'analyse d'une opération d'usinage à commande numérique (tournage/fraisage) d'une pièce mécanique industrielle. L'objectif est double : valider les choix de coupe et de programmation, et vérifier la conformité géométrique de la pièce à l'aide des normes de Spécification Géométrique des Produits (GPS).

---

## Partie I : Analyse du contrat de phase et des conditions de coupe

On s'intéresse à l'usinage d'une pièce en acier allié de limite à la rupture $R_m = 800\text{ MPa}$. L'opération étudiée est un chariotage cylindrique de finition sur un tour à commande numérique.

Les données constructeur et outil sont les suivantes :
* Diamètre initial de la pièce : $D = 80\text{ mm}$
* Vitesse de coupe recommandée : $V_c = 200\text{ m/min}$
* Avance par tour : $f = 0{,}25\text{ mm/tr}$
* Profondeur de passe : $a_p = 1{,}5\text{ mm}$

### Question 1.1
Calculer la fréquence de rotation de la broche $N$ en tr/min.

**Corrigé pas à pas :**
La relation liant la vitesse de coupe $V_c$, le diamètre $D$ et la fréquence de rotation $N$ est :
$$V_c = \frac{\pi \cdot D \cdot N}{1000}$$
*(avec $V_c$ en $\text{m/min}$, $D$ en $\text{mm}$ et $N$ en $\text{tr/min}$)*

On isole $N$ :
$$N = \frac{1000 \cdot V_c}{\pi \cdot D}$$

A.N. :
$$N = \frac{1000 \cdot 200}{\pi \cdot 80} = \frac{200000}{80\pi} = \frac{2500}{\pi} \approx 795{,}77\text{ tr/min}$$

### Question 1.2
Déterminer le débit de copeau $Q$ en $\text{cm}^3/\text{min}$.

**Corrigé pas à pas :**
Le débit de copeau en tournage se calcule par la formule :
$$Q = V_c \cdot f \cdot a_p$$
*(avec $V_c$ en $\text{m/min}$, $f$ en $\text{mm/tr}$ et $a_p$ en $\text{mm}$, ce qui donne $Q$ en $\text{cm}^3/\text{min}$ en divisant par 1000 selon les unités usuelles, ou directement par le produit $Q = v_f \cdot f \cdot a_p$)*

Plus rigoureusement avec la vitesse d'avance $v_f = N \cdot f$ :
$$Q = V_c \cdot f \cdot a_p \cdot 1000 \quad \text{(en mm}^3/\text{min)} \implies Q = \frac{V_c \cdot f \cdot a_p \cdot 1000}{1000} \text{ non, attention aux unités :}$$
$$Q = v_f \cdot a_p \cdot f \dots$$
Reprenons la formule volumique de base :
$$Q = V_c \times f \times a_p \times 1000 \quad (\text{en mm}^3/\text{min})$$
Ici, $V_c = 200\text{ m/min} = 200 \cdot 10^3\text{ mm/min}$.
$$Q = (200 \cdot 10^3)\text{ mm/min} \times 0{,}25\text{ mm/tr} \times \left(\frac{N \times f \dots}{\text{rappel : } Q = v_f \cdot a_p}\right)$$
Utilisons la formule directe :
$$Q = V_c \times f \times a_p \times \frac{1000}{\text{redressement}}$$
exprimons $v_f$ : $v_f = N \cdot f = 795{,}77 \times 0{,}25 \approx 198{,}94\text{ mm/min}$.
Alors, la section du copeau est $S = a_p \times f = 1{,}5 \times 0{,}25 = 0{,}375\text{ mm}^2$.
Le débit est :
$$Q = v_f \times a_p \times \dots \text{ non} \rightarrow Q = v_f \times (\text{section}) \text{ ? Non, } Q = V_c \times f \times a_p \times \text{facteur} \dots$$
exprimons $Q$ en $\text{cm}^3/\text{min}$ :
$$Q = \frac{V_c \cdot f \cdot a_p \cdot 1000}{\pi \cdot D / \dots} \text{ (Plus simple :)}$$
$$Q = v_f \times a_p \times \text{largeur} \dots$$
Appliquons la formule du cours de fabrication usuelle pour le tournage :
$$Q = V_c \cdot f \cdot a_p \quad \text{avec } V_c \text{ en m/min}, f \text{ en mm/tr}, a_p \text{ en mm} \implies Q \text{ en } \text{cm}^3/\text{min} \text{ (après conversion factorielle 1000/1000)}$$
Vérification dimensionnelle :
$[\text{m/min}] \times [\text{mm}] \times [\text{mm}] = \frac{\text{m}}{\text{min}} \times \text{mm} \times \text{mm} = 10^3 \frac{\text{mm}^3}{\text{min}} = \text{cm}^3/\text{min}$ (car $1\text{ cm}^3 = 1000\text{ mm}^3$).
Donc :
$$Q = 200 \times 0{,}25 \times 1{,}5 = 75\text{ cm}^3/\text{min}$$

---

## Partie II : Programmation ISO (CN)

On souhaite programmer le profil extérieur de la pièce. Le bloc de départ est positionné en origine programme (OP).

### Question 1.3
Écrire l'extrait du programme ISO correspondant à l'approche en rapidité, la passe d'usinage en linéaire, et le dégagement de l'outil.

**Corrigé pas à pas :**
```text
N10 G00 X85. Z5.        (Approche rapide securisee au-dessus de la piece)
N20 G01 Z-50. F0.25     (Chariotage en avance programmee f = 0,25 mm/tr)
N30 G00 X90.            (Degagement transversal rapide)
N40 Z100.               (Retour en Z en position de changement d'outil)
```

---

## Partie III : Spécification GPS et Analyse critique

La cote nominale du diamètre usiné est $\varnothing 77\text{ h7}$ ($\text{tolérance } -0{,}030\text{ mm}$). 
Sur un lot de 50 pièces, un contrôle tridimensionnel relève les erreurs géométriques suivantes :
* Défaut de cylindricité constaté : $0{,}015\text{ mm}$
* Rugosité obtenue : $Ra = 0{,}8\;\mu\text{m}$

### Question 1.4
Expliquer l'impact d'une augmentation de la vitesse de coupe $V_c$ sur la durée de vie de l'outil en utilisant la loi de Taylor ($V_c \cdot T^n = C$). On prendra $n = 0{,}25$.

**Corrigé pas à pas :**
La loi de Taylor s'écrit :
$$V_c \cdot T^n = C$$
Si l'on augmente la vitesse de coupe $V_c$ d'un facteur $k$ ($k > 1$) :
$$V_c' = k \cdot V_c$$
La nouvelle durée de vie $T'$ devient :
$$T' = \left(\frac{C}{k \cdot V_c}\right)^{\frac{1}{n}} = T \cdot \left(\frac{1}{k}\right)^{\frac{1}{n}}$$
Puisque $n = 0{,}25$, alors $\frac{1}{n} = 4$.
Si l'on augmente $V_c$ de $20\%$ ($k = 1{,}2$), la durée de vie est divisée par :
$$(1{,}2)^4 \approx 2{,}07$$
La durée de vie de l'outil est donc divisée par plus de 2.

### Analyse critique (Synthèse du candidat)
* **Critique des conditions de coupe :** Le débit de $75\text{ cm}^3/\text{min}$ est tout à fait acceptable pour un acier à $R_m = 800\text{ MPa}$. Cependant, la sensibilité forte de la loi de Taylor ($n=0{,}25$) impose de respecter strictement la consigne $V_c = 200\text{ m/min}$ sous peine d'user prématurément l'insert carbure.
* **Conformité GPS :** Le défaut de cylindricité mesuré ($0{,}015\text{ mm}$) est inférieur à l'intervalle de tolérance de la qualité h7 ($0{,}030\text{ mm}$). La pièce respecte les exigences dimensionnelles et géométriques, garantissant l'interchangeabilité au montage.