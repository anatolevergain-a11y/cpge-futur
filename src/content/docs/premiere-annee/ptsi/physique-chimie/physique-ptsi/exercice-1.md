---
title: 'Exercice 1 : Bilans thermiques'
description: 'Problème d entraînement type concours.'
---

# Concours CPGE (PTSI) — Physique-Chimie
## Thermodynamique et Électrocinétique : Bilans thermiques

*L'épreuve est constituée d'un problème guidé évaluant la capacité à coupler des notions d'électrocinétique (effet Joule) et de thermodynamique (premier principe, transferts thermiques par conduction et convection) dans un dispositif industriel modélisé.*

---

### Présentation du système

On s'intéresse à un composant électronique cylindrique de longueur $L$ et de rayon $R_1$, parcouru par un courant électrique continu d'intensité $I$. Ce composant dissipe de la puissance par effet Joule de manière homogène dans tout son volume. 

Pour éviter la surchauffe, ce composant est inséré dans une gaine cylindrique protectrice coaxiale, de rayon interne $R_1$ et de rayon externe $R_2$, de longueur $L$. L'ensemble est placé dans l'air ambiant à la température $T_0$.

**Données et notations :**
* Rayons : $R_1 = 5,0\text{ mm}$ ; $R_2 = 1,5\text{ cm}$ ; Longueur $L = 10\text{ cm}$ (on néglige les effets de bords).
* Résistance électrique du composant : $r = 2,5\,\Omega$.
* Intensité du courant : $I = 2,0\text{ A}$.
* Conductivité thermique de la gaine : $\lambda = 0,20\text{ W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$.
* Coefficient de transfert thermique convectif entre la surface externe de la gaine et l'air ambiant : $h = 15\text{ W}\cdot\text{m}^{-2}\cdot\text{K}^{-1}$.
* Température ambiante : $T_0 = 20\text{ }^{\circ}\text{C} = 293,15\text{ K}$.

---

## Partie I : Modélisation électrique et thermique préliminaire

**1.** Exprimer et calculer la puissance thermique $P_{\text{th}}$ totale dissipée par le composant par effet Joule.
Correction: **
La puissance dissipée par effet Joule dans un conducteur de résistance $r$ parcouru par un courant $I$ s'exprime par :
$$P_{\text{th}} = r I^2$$
A.N. : $P_{\text{th}} = 2,5 \times (2,0)^2 = 10\text{ W}$.

**2.** En régime permanent, quel est le bilan de la puissance thermique générée au sein du composant et celle traversant la gaine ? Justifier brièvement à l'aide du premier principe de la thermodynamique appliqué au composant.
Correction: **
Le système thermodynamique considéré est le composant (volume délimité par $r \le R_1$). En régime permanent, son énergie interne $U$ est constante ($\frac{\text{d}U}{\text{d}t} = 0$). 
Le premier principe s'écrit :
$$\Delta U = W + Q \implies 0 = 0 + P_{\text{th}} - \Phi_{\text{conduction}}(R_1)$$
La puissance thermique générée $P_{\text{th}}$ doit donc intégralement être évacuée par conduction à travers la surface de contact du composant : $\Phi_{\text{conduction}}(R_1) = P_{\text{th}} = 10\text{ W}$.

---

## Partie II : Étude thermique de la gaine protectrice

On se place en régime permanent. La température $T(r)$ dans la gaine ($R_1 \le r \le R_2$) ne dépend que de la distance radiale $r$ à l'axe du cylindre.

**3.** À partir d'une analyse des symétries et invariances du système, justifier la forme de la température $T(r)$.
Correction: **
Le système présente une invariance par translation selon l'axe $z$ et par rotation autour de l'axe $z$ ($\theta$). La température ne dépend donc que de la coordonnée radiale $r$ : $T = T(r)$.

**4.** Établir l'expression de la densité surfacique de flux thermique $\vec{\phi}(r)$ par conduction à travers la gaine, en utilisant la loi de Fourier. En déduire l'expression de la puissance thermique traversant un cylindre de rayon $r$ et de longueur $L$.
Correction: **
La loi de Fourier s'écrit :
$$\vec{\phi} = -\lambda \text{ grad } T = -\lambda \frac{\text{d}T}{\text{d}r} \vec{e}_r$$
La puissance thermique traversant une surface cylindrique de rayon $r$ et de longueur $L$ est le flux du vecteur $\vec{\phi}$ à travers cette surface :
$$\Phi(r) = \iint \vec{\phi} \cdot \text{d}\vec{S} = (-\lambda \frac{\text{d}T}{\text{d}r}) \times (2\pi r L)$$
En régime permanent et en l'absence de source thermique au sein de la gaine ($R_1 < r < R_2$), ce flux thermique se conserve : $\Phi(r) = P_{\text{th}}$.

**5.** En déduire l'équation différentielle régissant $T(r)$ dans la gaine.
Correction: **
À partir de l'expression précédente de $\Phi(r) = P_{\text{th}}$ :
$$-2\pi r L \lambda \frac{\text{d}T}{\text{d}r} = P_{\text{th}}$$
Soit l'équation différentielle :
$$\frac{\text{d}T}{\text{d}r} = -\frac{P_{\text{th}}}{2\pi \lambda L} \frac{1}{r}$$

**6.** Par intégration de cette équation, exprimer la température $T(r)$ dans la gaine en fonction de $r$, $R_1$, $\lambda$, $L$, $P_{\text{th}}$ et de la température à l'interface $T_1 = T(R_1)$.
Correction: **
On intègre entre $R_1$ et $r$ :
$$\int_{T(R_1)}^{T(r)} \text{d}T = -\frac{P_{\text{th}}}{2\pi \lambda L} \int_{R_1}^{r} \frac{\text{d}r'}{r'}$$
$$T(r) - T(R_1) = -\frac{P_{\text{th}}}{2\pi \lambda L} \ln\left(\frac{r}{R_1}\right)$$
Soit :
$$T(r) = T(R_1) - \frac{P_{\text{th}}}{2\pi \lambda L} \ln\left(\frac{r}{R_1}\right)$$

---

## Partie III : Conditions aux limites et résistance thermique équivalente

**7.** À la surface externe de la gaine ($r = R_2$), les transferts thermiques avec l'air ambiant sont modélisés par la loi de Newton de la convection : 
$$\Phi(R_2) = h S_2 (T(R_2) - T_0)$$
où $S_2 = 2\pi R_2 L$ est la surface externe de la gaine. 
Exprimer $T(R_1)$ en fonction de $T_0$, $P_{\text{th}}$, $R_1$, $R_2$, $\lambda$, $h$ et $L$.
Correction: **
Évaluons l'expression de la température de la gaine en $r = R_2$ :
$$T(R_2) = T(R_1) - \frac{P_{\text{th}}}{2\pi \lambda L} \ln\left(\frac{R_2}{R_1}\right)$$
Par ailleurs, d'après la loi de Newton et la conservation du flux :
$$\Phi(R_2) = P_{\text{th}} = h (2\pi R_2 L) (T(R_2) - T_0) \implies T(R_2) = T_0 + \frac{P_{\text{th}}}{2\pi R_2 L h}$$
En combinant ces deux relations pour isoler $T(R_1)$ :
$$T(R_1) = T_0 + \frac{P_{\text{th}}}{2\pi L} \left( \frac{1}{\lambda}\ln\left(\frac{R_2}{R_1}\right) + \frac{1}{h R_2} \right)$$

**8.** Par analogie avec l'électrocinétique (loi d'Ohm thermique $T_A - T_B = R_{\text{th}} \Phi$), identifier la résistance thermique totale $R_{\text{th, tot}}$ entre l'intérieur du composant et l'air ambiant. Décomposer cette résistance en une résistance thermique de conduction $R_{\text{th, cond}}$ et une résistance thermique de convection $R_{\text{th, conv}}$.
Correction: **
D'après l'expression précédente, on peut écrire :
$$T(R_1) - T_0 = P_{\text{th}} \times \left[ \frac{\ln(R_2/R_1)}{2\pi \lambda L} + \frac{1}{2\pi R_2 L h} \right]$$
Par identification avec la loi d'Ohm thermique $\Delta T = R_{\text{th, tot}} P_{\text{th}}$ :
* Résistance thermique de conduction (cylindrique) : 
  $$R_{\text{th, cond}} = \frac{\ln(R_2/R_1)}{2\pi \lambda L}$$
* Résistance thermique de convection : 
  $$R_{\text{th, conv}} = \frac{1}{2\pi R_2 L h}$$
* Résistance thermique totale : 
  $$R_{\text{th, tot}} = R_{\text{th, cond}} + R_{\text{th, conv}}$$

**9.** Calculer numériquement $R_{\text{th, cond}}$, $R_{\text{th, conv}}$, $R_{\text{th, tot}}$ ainsi que la température maximale atteinte par le composant $T(R_1)$.
Correction: **
* Application numérique pour $R_{\text{th, cond}}$ :
  $$R_{\text{th, cond}} = \frac{\ln(1,5 \cdot 10^{-2} / 5,0 \cdot 10^{-3})}{2 \pi \times 0,20 \times 0,10} = \frac{\ln(3)}{0,04\pi} \approx \frac{1,0986}{0,1257} \approx 8,74\text{ K}\cdot\text{W}^{-1}$$
* Application numérique pour $R_{\text{th, conv}}$ :
  $$R_{\text{th, conv}} = \frac{1}{2\pi \times 1,5 \cdot 10^{-2} \times 0,10 \times 15} = \frac{1}{0,030\pi \times 15} = \frac{1}{0,45\pi} \approx 0,71\text{ K}\cdot\text{W}^{-1}$$
* Résistance totale :
  $$R_{\text{th, tot}} = 8,74 + 0,71 = 9,45\text{ K}\cdot\text{W}^{-1}$$
* Température $T(R_1)$ :
  $$T(R_1) = 20 + 10 \times 9,45 = 20 + 94,5 = 114,5\text{ }^{\circ}\text{C}$$ (soit $387,65\text{ K}$).

---

## Partie IV : Analyse critique des résultats

**10.** 
* Discuter la pertinence des hypothèses (régime permanent, absence de pertes par rayonnement thermique).
* Le composant supporte une température maximale de service de $100\text{ }^{\circ}\text{C}$. Le dispositif actuel est-il valide ? Proposer deux modifications techniques simples pour abaisser la température du composant sans modifier la puissance électrique dissipée.
Correction: **
* **Analyse critique des hypothèses :**
  * *Régime permanent :* Hypothèse valable si l'appareil fonctionne depuis un laps de temps suffisant devant le temps caractéristique de diffusion thermique $\tau \sim \frac{R^2}{D_{\text{th}}}$.
  * *Négligence du rayonnement :* À $114,5\text{ }^{\circ}\text{C}$ ($387,65\text{ K}$), les transferts thermiques par rayonnement (loi de Stefan-Boltzmann) commencent à devenir non nuls, mais restent généralement secondaires face à la convection forcée ou naturelle dans ce type d'ordre de grandeur. Toutefois, cela aurait pour effet réel de minorer légèrement la température calculée.
* **Validation du dispositif :**
  La température calculée $T(R_1) = 114,5\text{ }^{\circ}\text{C}$ dépasse la limite maximale admissible de $100\text{ }^{\circ}\text{C}$. Le dispositif actuel **n'est pas valide** (risque de destruction ou de dégradation du composant).
* **Pistes d'amélioration :**
  1. *Agir sur la convection :* Augmenter le coefficient $h$ en installant un ventilateur (convection forcée) ou en ajoutant des ailettes de refroidissement pour augmenter la surface d'échange $S_2$.
  2. *Agir sur la conduction :* Utiliser un matériau de gaine ayant une conductivité thermique $\lambda$ plus élevée (par exemple, un polymère chargé ou une céramique adaptée au lieu d'un plastique isolant classique).