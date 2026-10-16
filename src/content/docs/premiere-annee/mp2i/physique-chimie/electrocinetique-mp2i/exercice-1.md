---
title: 'Exercice 1 : Circuits RLC et régimes de relaxation'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On considère un circuit électrique destiné à l'étude des régimes transitoires, modélisé par l'association en série d'une résistance $R$, d'une bobine parfaite d'inductance $L$ et d'un condensateur de capacité $C$. Le circuit est alimenté par un générateur idéal de tension délivrant un échelon de tension.

L'interrupteur $K$, initialement ouvert depuis une durée infinie, est fermé à l'instant $t = 0$. 
* À $t < 0$, le condensateur est totalement déchargé ($u_C(0^-) = 0$) et aucun courant ne circule dans le circuit ($i(0^-) = 0$).
* À $t \geq 0$, le générateur impose une tension constante $E$.

On pose $\omega_0 = \frac{1}{\sqrt{LC}}$ la pulsation propre du circuit et $Q = \frac{1}{R}\sqrt{\frac{L}{C}}$ le facteur de qualité.

---

### ❓ Questions progressives

1. **Établissement de l'équation différentielle :** En appliquant les lois générales de l'électrocinétique, établir l'équation différentielle régissant l'évolution temporelle de la tension aux bornes du condensateur $u_C(t)$ pour $t > 0$. Mettre cette équation sous la forme canonique faisant intervenir $\omega_0$ et $Q$.
2. **Conditions initiales :** Préciser les valeurs de $u_C(0^+)$ et de sa dérivée première $\frac{\text{d}u_C}{\text{d}t}(0^+)$ en justifiant soigneusement par la continuité des grandeurs énergétiques.
3. **Étude du régime apériodique (fort amortissement) :** 
   * a. Donner la forme générale de la solution $u_C(t)$ lorsque le facteur de qualité $Q$ est inférieur à une valeur limite que l'on précisera.
   * b. Déterminer l'expression de $u_C(t)$ pour $Q = \frac{1}{2}$ (régime critique) sous l'échelon de tension $E$.
4. **Étude énergétique :** On définit l'énergie totale du circuit par $E_{\text{tot}}(t) = \frac{1}{2} L i(t)^2 + \frac{1}{2} C u_C(t)^2$. Exprimer la puissance instantanée cédée par le dipôle dissipatif (la résistance) et montrer que $\frac{\text{d}E_{\text{tot}}}{\text{dt}} = -R i(t)^2$. Comment qualifie-t-on ce bilan ?

---

### 💡 Pistes & Indications méthodologiques

* **Pour la question 1 :** Pensez à utiliser la loi des mailles (loi d'additivité des tensions) et les relations constitutives des dipôles ($u_R = Ri$, $u_L = L \frac{\text{d}i}{\text{d}t}$, $i = C \frac{\text{d}u_C}{\text{d}t}$).
* **Pour la question 2 :** La continuité de l'énergie emmagasinée dans le condensateur et la bobine impose des conditions de continuité sur $u_C(t)$ et $i(t)$. Ne confondez pas la continuité de $u_C$ avec celle de sa dérivée.
* **Pour la question 3 :** Le discriminant de l'équation caractéristique détermine la nature du régime (apériodique, critique, pseudo-périodique). Pour le régime critique, l'équation caractéristique possède une racine double.
* **Pour la question 4 :** Dérivez directement l'expression de $E_{\text{tot}}(t)$ par rapport au temps et utilisez l'équation différentielle établie à la question 1.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Établissement de l'équation différentielle
Par la loi des mailles orientée dans le sens du courant $i(t)$, on a :
$$E = u_R(t) + u_L(t) + u_C(t)$$
En utilisant les relations constitutives des composants :
* $u_R(t) = R \, i(t)$
* $u_L(t) = L \frac{\text{d}i}{\text{d}t}$
* $i(t) = C \frac{\text{d}u_C}{\text{d}t}$

On en déduit les tensions aux bornes de la résistance et de la bobine en fonction de $u_C$ :
$$u_R(t) = R C \frac{\text{d}u_C}{\text{d}t} \quad \text{et} \quad u_L(t) = L C \frac{\text{d}^2u_C}{\text{d}t^2}$$

En remplaçant dans la loi des mailles, on obtient l'équation différentielle :
$$L C \frac{\text{d}^2u_C}{\text{d}t^2} + R C \frac{\text{d}u_C}{\text{d}t} + u_C = E$$

En divisant par $LC$ et en introduisant les paramètres canoniques $\omega_0 = \frac{1}{\sqrt{LC}}$ et $Q = \frac{1}{R}\sqrt{\frac{L}{C}}$, l'équation se réécrit sous la forme normalisée :
$$\frac{\text{d}^2u_C}{\text{d}t^2} + \frac{\omega_0}{Q} \frac{\text{d}u_C}{\text{d}t} + \omega_0^2 u_C = \omega_0^2 E$$

#### 2. Conditions initiales
* **Continuité de la tension aux bornes du condensateur :** 
  L'énergie électrostatique emmagasinée dans le condensateur est $\mathcal{E}_C = \frac{1}{2} C u_C^2$. Cette énergie ne pouvant pas être discontinue (car cela impliquerait une puissance infinie $i = C \frac{\text{d}u_C}{\text{d}t}$), la tension $u_C$ est une fonction continue du temps. Par conséquent :
  $$u_C(0^+) = u_C(0^-) = 0 \text{ \text{V}}$$

* **Continuité du courant dans la bobine :**
  L'énergie magnétique emmagasinée dans la bobine est $\mathcal{E}_L = \frac{1}{2} L i^2$. De même, elle ne peut être discontinue, ce qui implique la continuité de l'intensité du courant $i(t)$ :
  $$i(0^+) = i(0^-) = 0 \text{ \text{A}}$$
  Or, le courant traversant le condensateur est lié à $u_C$ par $i(t) = C \frac{\text{d}u_C}{\text{d}t}$. On en déduit directement la dérivée première à $0^+$ :
  $$\frac{\text{d}u_C}{\text{d}t}(0^+) = \frac{i(0^+)}{C} = 0 \text{ \text{V}\cdot\text{s}^{-1}}$$

#### 3. Étude du régime apériodique et critique
L'équation caractéristique associée à l'équation différentielle homogène est :
$$r^2 + \frac{\omega_0}{Q} r + \omega_0^2 = 0$$
Le discriminant réduit (ou discriminant classique) est $\Delta = \left(\frac{\omega_0}{Q}\right)^2 - 4\omega_0^2 = \omega_0^2 \left(\frac{1}{Q^2} - 4\right)$.

* **a.** Le régime est **apériodique** (fort amortissement) si $\Delta > 0$, c'est-à-dire si **$Q < \frac{1}{2}$**. Les racines de l'équation caractéristique sont réelles distinctes $r_1$ et $r_2$. La solution générale est de la forme :
  $$u_C(t) = E + A e^{r_1 t} + B e^{r_2 t}$$
  où $A$ et $B$ sont des constantes déterminées par les conditions initiales $u_C(0^+)$ et $\frac{\text{d}u_C}{\text{d}t}(0^+)$.

* **b.** Le régime **critique** correspond à $\Delta = 0$, soit **$Q = \frac{1}{2}$**. L'équation caractéristique possède une racine double $r = -\frac{\omega_0}{2Q} = -\omega_0$.
  La solution générale de l'équation avec second membre s'écrit alors :
  $$u_C(t) = E + (A + Bt) e^{-\omega_0 t}$$
  
  Appliquons les conditions initiales :
  1. À $t = 0^+$ : $u_C(0^+) = E + A = 0 \implies A = -E$.
  2. Dérivée : $\frac{\text{d}u_C}{\text{d}t}(t) = B e^{-\omega_0 t} - \omega_0 (A + Bt) e^{-\omega_0 t}$.
     À $t = 0^+$ : $\frac{\text{d}u_C}{\text{d}t}(0^+) = B - \omega_0 A = 0 \implies B = \omega_0 A = -\omega_0 E$.
  
  Finalement, l'expression de la tension pour le régime critique est :
  $$u_C(t) = E \left[ 1 - (1 + \omega_0 t) e^{-\omega_0 t} \right] \text{ \text{V}}$$

#### 4. Étude énergétique
Exprimons la dérivée temporelle de l'énergie totale $E_{\text{tot}}(t) = \frac{1}{2} L i(t)^2 + \frac{1}{2} C u_C(t)^2$ :
$$\frac{\text{d}E_{\text{tot}}}{\text{dt}} = L i(t) \frac{\text{d}i}{\text{d}t} + C u_C(t) \frac{\text{d}u_C}{\text{d}t}$$

Sachant que $i(t) = C \frac{\text{d}u_C}{\text{d}t}$, on a $\frac{\text{d}i}{\text{d}t} = C \frac{\text{d}^2u_C}{\text{d}t^2}$, et l'équation différentielle s'écrit :
$$L \frac{\text{d}i}{\text{d}t} + R i + u_C = E \implies L \frac{\text{d}i}{\text{d}t} = -R i - u_C + E$$

En remplaçant $L \frac{\text{d}i}{\text{d}t}$ dans l'expression de la puissance :
$$\frac{\text{d}E_{\text{tot}}}{\text{dt}} = i(t) \left( L \frac{\text{d}i}{\text{d}t} \right) + u_C(t) i(t)$$
$$\frac{\text{d}E_{\text{tot}}}{\text{dt}} = i(t) \left( -R i(t) - u_C(t) + E \right) + u_C(t) i(t) = -R i(t)^2 + E i(t)$$

*Note rigoureuse :* Si l'on considère le système fermé {Circuit RLC}, la puissance fournie par le générateur est $P_{\text{gen}} = E i(t)$. Le bilan s'écrit donc :
$$\frac{\text{d}E_{\text{tot}}}{\text{dt}} = -R i(t)^2 + P_{\text{gen}}$$
Le terme $-R i(t)^2 = -P_{\text{Joule}}$ représente la puissance thermique dissipée par effet Joule dans la résistance (loi de Joule). C'est un **bilan énergétique dissipatif** : l'énergie totale du système décroît ou se convertit en chaleur en raison de la présence de la résistance $R$.