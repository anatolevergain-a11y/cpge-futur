---
title: 'Exercice 1 : Transferts thermiques'
description: 'Problème d entraînement type concours.'
---

# CONCOURS CPGE - FILIÈRE PT
## ÉPREUVE DE PHYSIQUE-CHIMIE — CORRIGÉ GUIDÉ
### Chapitre : Thermodynamique et Transferts thermiques
---

### **Introduction et consignes pour le candidat**
Ce problème s'intéresse à l'étude des transferts thermiques dans un composant électronique plan soumis à un flux de chaleur et refroidi par convection. L'objectif est de modéliser l'évolution de la température au sein du dispositif en régime permanent puis transitoire, en utilisant les analogies entre les systèmes électriques et thermiques.

---

## **Énoncé du problème**

On considère un composant électronique modélisé par une plaque plane d'épaisseur $e$, de conductivity thermique $\lambda$, de masse volumique $\mu$ et de capacité thermique massique $c$. 
La plaque est infinie selon les directions $(Oy)$ et $(Oz)$, ce qui permet de se ramener à un problème unidimensionnel selon l'axe $(Ox)$. 

*   La face située en $x = 0$ est soumise à un flux thermique surfacique constant $P_0$ (en $\text{W}\cdot\text{m}^{-2}$) généré par le fonctionnement des circuits.
*   La face située en $x = e$ est en contact avec un fluide extérieur à la température constante $T_f$, avec un coefficient de transfert thermique convectif $h$ (en $\text{W}\cdot\text{m}^{-2}\cdot\text{K}^{-1}$).

Données numériques et littérales utiles :
*   $e = 5{,}0\text{ mm}$
*   $\lambda = 15\text{ W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$
*   $h = 50\text{ W}\cdot\text{m}^{-2}\cdot\text{K}^{-1}$
*   $P_0 = 1{,}0\times 10^3\text{ W}\cdot\text{m}^{-2}$
*   $T_f = 20\text{ °C}$

---

## **Corrigé pas à pas**

### **Partie I : Étude en régime permanent**

#### **1. Bilan thermique et équation différentielle**
Question: ** Établir l'équation différentielle vérifiée par la température $T(x)$ dans la plaque en régime permanent, en l'absence de source volumique de chaleur interne.
Correction: *
Considérons une tranche de plaque comprise entre $x$ et $x + dx$. En régime permanent, le flux thermique qui entre par la face en $x$ est égal au flux qui sort par la face en $x + dx$ (conservation de l'énergie).
D'après la loi de Fourier, le vecteur densité de flux thermique s'écrit :
$$\vec{j}_{\text{th}} = -\lambda \frac{dT}{dx} \vec{u}_x$$

En projection selon $(Ox)$, le bilan thermique conduit à :
$$\frac{d j_{\text{th}}}{dx} = 0 \implies \frac{d}{dx}\left(-\lambda \frac{dT}{dx}\right) = 0$$

Comme la conductivité thermique $\lambda$ est supposée constante, on obtient l'équation de Laplace :
$$\frac{d^2 T}{dx^2} = 0$$

---

#### **2. Résolution et profil de température**
Question: ** Intégrer cette équation et exprimer la température $T(x)$ en fonction de $x$, $P_0$, $\lambda$ et de la température de la face $T(e)$.
Correction: *
Une double intégration de l'équation différentielle donne :
$$T(x) = A x + B$$
où $A$ et $B$ sont des constantes d'intégration à déterminer à l'aide des conditions aux limites.

---

#### **3. Conditions aux limites**
Question: ** Écrire les deux conditions aux limites en $x = 0$ et $x = e$. En déduire l'expression de $T(x)$.
Correction: *
1. **En $x = 0$ :** Le flux imposé vérifie la loi de Fourier :
   $$- \lambda \left. \frac{dT}{dx} \right|_{x=0} = P_0 \implies -\lambda A = P_0 \implies A = -\frac{P_0}{\lambda}$$

2. **En $x = e$ :** Le flux thermique se raccordant à la convection s'exprime par la loi de Newton :
   $$- \lambda \left. \frac{dT}{dx} \right|_{x=e} = h (T(e) - T_f)$$
   Puisque $\frac{dT}{dx} = A = -\frac{P_0}{\lambda}$, on a :
   $$- \lambda \left(-\frac{P_0}{\lambda}\right) = P_0 = h (T(e) - T_f) \implies T(e) = T_f + \frac{P_0}{h}$$

En remettant $A$ et $B$ dans l'expression générale ($T(e) = A e + B \implies B = T(e) - Ae = T_f + \frac{P_0}{h} + \frac{P_0}{\lambda}e$), on obtient :
$$T(x) = T_f + \frac{P_0}{h} + \frac{P_0}{\lambda}(e - x)$$

---

### **Partie II : Analogie thermo-électrique**

#### **4. Résistance thermique**
Question: ** Définir la résistance thermique équivalente $R_{\text{th}}$ du système (conduction dans la plaque + convection sur la face de sortie) telle que $T(0) - T_f = R_{\text{th}} P_0$. Donner son expression littérale et calculer sa valeur numérique.
Correction: *
Exprimons la température en $x = 0$ :
$$T(0) = T_f + \frac{P_0}{h} + \frac{P_0}{\lambda}e = T_f + P_0 \left( \frac{e}{\lambda} + \frac{1}{h} \right)$$
On en déduit la différence de température :
$$T(0) - T_f = P_0 \left( R_{\text{cond}} + R_{\text{conv}} \right)$$

Par identification, la résistance thermique surfacique totale (exprimée en $\text{K}\cdot\text{m}^2\cdot\text{W}^{-1}$) est :
$$R_{\text{th}} = \frac{e}{\lambda} + \frac{1}{h}$$

*A.N. :*
$$R_{\text{th}} = \frac{5{,}0\times 10^{-3}}{15} + \frac{1}{50} = 3{,}33\times 10^{-4} + 2{,}00\times 10^{-2} \approx 2{,}03\times 10^{-2}\text{ K}\cdot\text{m}^2\cdot\text{W}^{-1}$$

---

### **Partie III : Approche transitoire (Coupure de l'alimentation)**
À l'instant $t = 0$, le système est en régime permanent décrit précédemment. On coupe brutalement l'alimentation ($\displaystyle P_0$ devient nul pour $t > 0$). On fait l'hypothèse simplificatrice d'une température homogène $T(t)$ dans toute la plaque (approximation des états quasi-stationnaires ou corps isotherme si le nombre de Biot est faible, ce que l'on admet ici).

#### **5. Équation différentielle en transitoire**
Question: ** Établir l'équation différentielle régissant l'évolution de la température moyenne $T(t)$ de la plaque pour $t > 0$.
Correction: *
Le bilan d'énergie sur la plaque de masse $m = \mu S e$ et de capacité thermique $C = \mu S e c$ s'écrit :
$$C \frac{dT}{dt} = \Phi_{\text{reçue}} - \Phi_{\text{perdue}}$$
Pour $t > 0$, il n'y a plus de source de chaleur interne. La seule interaction thermique est la perte par convection sur la face $x = e$ d'aire $S$ :
$$\mu S e c \frac{dT}{dt} = -h S (T(t) - T_f)$$
Soit :
$$\frac{dT}{dt} + \frac{h}{\mu e c} (T(t) - T_f) = 0$$

Posons la constante de temps du système $\tau = \frac{\mu e c}{h}$. L'équation devient :
$$\frac{dT}{dt} + \frac{1}{\tau}(T - T_f) = 0$$

---

## **Analyse critique des résultats**

1. **Cohérence physique du profil de température :** 
   L'expression $T(x) = T_f + \frac{P_0}{h} + \frac{P_0}{\lambda}(e - x)$ montre que la température est maximale en $x = 0$ (là où le flux est appliqué) et décroît de manière linéaire jusqu'en $x = e$. C'est parfaitement cohérent avec l'absence de source interne et la loi de Fourier en régime permanent.

2. **Pondération des résistances thermiques :**
   Dans l'expression de $R_{\text{th}}$, on remarque que :
   * $R_{\text{cond}} = \frac{5\times 10^{-3}}{15} \approx 3{,}33 \times 10^{-4}\text{ K}\cdot\text{m}^2\cdot\text{W}^{-1}$
   * $R_{\text{conv}} = \frac{1}{50} = 2\times 10^{-2}\text{ K}\cdot\text{m}^2\cdot\text{W}^{-1}$
   
   La résistance thermique convective est près de 60 fois supérieure à la résistance conductive. Cela signifie que **le facteur limitant du refroidissement est l'échange thermique avec le fluide** (la convection) et non la conduction à travers le matériau. Pour améliorer le refroidissement du composant, il faudrait agir en priorité sur le coefficient $h$ (par exemple en ajoutant un ventilateur pour forcer la convection).