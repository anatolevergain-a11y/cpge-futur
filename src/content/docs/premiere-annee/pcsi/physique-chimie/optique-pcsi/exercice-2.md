---
title: 'Exercice 2 : Circuits en régime sinusoïdal'
description: 'Problème d entraînement type concours.'
---

# Concours Blanc de CPGE - Filière PCSI
## Physique-Chimie : Optique et Électrocinétique
### Thème : Circuits en régime sinusoïdal forcé et résonance

*L'examinateur rappelle aux candidats que la rigueur de la rédaction, l'utilisation systématique de l'analyse dimensionnelle et la mise en valeur des résultats finaux (encadrés) seront des critères prépondérants dans la notation. L'emploi de la notation complexe est exigé.*

---

## Préambule et Étude du Système

On considère le circuit électrique de type $RLC$ série, alimenté par un générateur idéal de tension sinusoïdale de force électromotrice $e(t) = E_0 \cos(\omega t)$, où $E_0 >ۍ 0$ et $\omega$ est la pulsation du générateur. 

Le circuit comporte :
* Une résistance $R$.
* Une bobine réelle modélisée par une inductance $L$ et une résistance interne $r$.
* Un condensateur parfait de capacité $C$.

L'intensité du courant traversant le circuit est notée $i(t)$, et la tension aux bornes du condensateur est notée $u_C(t)$.

---

## Partie I : Modélisation et Fonction de Transfert

### Question 1
Établir l'équation différentielle régissant l'évolution de la tension $u_C(t)$ aux bornes du condensateur.

**Correction pas à pas :**
D'après la loi des mailles, la tension totale du générateur $e(t)$ s'exprime comme la somme des chutes de tension aux bornes de chaque dipôle :
$$e(t) = u_R(t) + u_{\text{bobine}}(t) + u_C(t)$$

En exprimant chaque tension en fonction du courant $i(t) = C \frac{du_C}{dt}$ :
* Aux bornes de la résistance $R$ : $u_R(t) = R i(t) = R C \frac{du_C}{dt}$
* Aux bornes de la bobine (résistance interne $r$ et inductance $L$) : $u_{\text{bobine}}(t) = r i(t) + L \frac{di}{dt} = r C \frac{du_C}{dt} + L C \frac{d^2u_C}{dt^2}$
* Aux bornes du condensateur : $u_C(t)$

En regroupant les termes, on obtient l'équation différentielle :
$$L C \frac{d^2u_C}{dt^2} + (R + r) C \frac{du_C}{dt} + u_C(t) = e(t)$$

### Question 2
En introduisant les grandeurs complexes associées $\underline{E}$ et $\underline{U}_C$, déterminer la fonction de transfert complexe $\underline{H}(j\omega) = \frac{\underline{U}_C}{\underline{E}}$. 

Mettre $\underline{H}(j\omega)$ sous la forme canonique :
$$\underline{H}(j\omega) = \frac{K}{1 + \frac{2j\xi}{\omega_0}\omega - \frac{\omega^2}{\omega_0^2}}$$
Exprimer la pulsation propre $\omega_0$, le facteur de qualité $Q$ (ou le coefficient d'amortissement $\xi = \frac{1}{2Q}$) et le gain statique $K$ en fonction des paramètres du circuit ($R$, $r$, $L$, $C$).

**Correction pas à pas :**
En régime sinusoïdal forcé, on associe à chaque grandeur temporelle sa grandeur complexe (en notation $e^{j\omega t}$) :
* $\underline{E} = E_0$
* $\underline{U}_C$
* $\frac{du_C}{dt} \leftrightarrow j\omega \underline{U}_C$
* $\frac{d^2u_C}{dt^2} \leftrightarrow -\omega^2 \underline{U}_C$

L'équation différentielle devient dans le domaine complexe :
$$-L C \omega^2 \underline{U}_C + j\omega (R + r) C \underline{U}_C + \underline{U}_C = \underline{E}$$

En factorisant par $\underline{U}_C$ :
$$\underline{U}_C \left[ 1 - L C \omega^2 + j\omega (R + r) C \right] = \underline{E}$$

On en déduit la fonction de transfert :
$$\underline{H}(j\omega) = \frac{1}{1 - L C \omega^2 + j C (R + r) \omega}$$

Par identification avec la forme canonique, on obtient :
* Le gain statique : $K = 1$
* La pulsation propre : $\omega_0 = \frac{1}{\sqrt{LC}}$ ($\text{rad}\cdot\text{s}^{-1}$)
* Le facteur de qualité : $Q = \frac{1}{(R + r)}\sqrt{\frac{L}{C}}$ (sans dimension)
* Le coefficient d'amortissement : $\xi = \frac{1}{2Q} = \frac{(R + r)}{2}\sqrt{\frac{C}{L}}$

---

## Partie II : Étude de la Résonance en Tension

### Question 3
Exprimer le module $H(\omega) = |\underline{H}(j\omega)|$ de la fonction de transfert en fonction de $\omega$, $\omega_0$ et $Q$.

**Correction pas à pas :**
Le module d'un nombre complexe s'obtient en faisant le rapport des modules du numérateur et du dénominateur :
$$H(\omega) = \frac{1}{\sqrt{\left(1 - \frac{\omega^2}{\omega_0^2}\right)^2 + \left(\frac{1}{Q}\frac{\omega}{\omega_0}\right)^2}}$$

### Question 4
Déterminer la pulsation de résonance $\omega_r$ pour laquelle le module $H(\omega)$ est maximal. Pour quelles valeurs du facteur de qualité $Q$ cette résonance existe-t-elle ?

**Correction pas à pas :**
Le module $H(\omega)$ est maximal lorsque le terme sous la racine au dénominateur est minimal. Posons $x = \frac{\omega}{\omega_0}$ et étudions la fonction $g(x) = (1 - x^2)^2 + \frac{1}{Q^2}x^2$.
Dérivons $g(x)$ par rapport à $x$ :
$$g'(x) = 2(1 - x^2)(-2x) + \frac{2x}{Q^2} = 2x \left[ -2(1 - x^2) + \frac{1}{Q^2} \right] = 2x \left( 2x^2 - 2 + \frac{1}{Q^2} \right)$$

Les extremums s'annulent pour $x = 0$ ou pour $2x^2 - 2 + \frac{1}{Q^2} = 0$, soit :
$$x_r^2 = 1 - \frac{1}{2Q^2}$$

Pour que cette pulsation de résonance $\omega_r = x_r \omega_0$ soit réelle et strictement positive, il faut que $x_r^2 > 0$, c'est-à-dire :
$$1 - \frac{1}{2Q^2} > 0 \implies Q > \frac{1}{\sqrt{2}} \approx 0{,}707$$

Si $Q \le \frac{1}{\sqrt{2}}$, la fonction $g'(x) = 0$ n'a de solution positive que pour $x = 0$ : il n'y a pas de résonance en tension aux bornes du condensateur (le gain est strictement décroissant).

---

## Partie III : Analyse Critique et Discussion

### Question 5
On donne les valeurs numériques suivantes : $L = 100\,\text{mH}$, $C = 1{,}0\,\mu\text{F}$, $r = 10\,\Omega$ et $E_0 = 5{,}0\,\text{V}$. 
Le circuit est réglé pour une résistance variable $R = 0\,\Omega$. 
1. Calculer la valeur de $\omega_0$ et du facteur de qualité $Q$.
2. En déduire l'amplitude maximale de la tension aux bornes du condensateur.
3. **Analyse critique :** Que se passerait-il théoriquement si la résistance totale $R+r$ était rigoureusement nulle ? Commenter la validité physique du modèle à la résonance.

**Correction pas à pas :**
1. **Application numérique :**
   * Pulsation propre : 
     $$\omega_0 = \frac{1}{\sqrt{100 \times 10^{-3} \times 1{,}0 \times 10^{-6}}} = \frac{1}{\sqrt{10^{-7}}} = 10^3\sqrt{10} \approx 3162\,\text{rad}\cdot\text{s}^{-1}$$
   * Facteur de qualité (avec $R = 0\,\Omega$) :
     $$Q = \frac{1}{10} \sqrt{\frac{100 \times 10^{-3}}{1{,}0 \times 10^{-6}}} = \frac{1}{10} \sqrt{10^5} = \frac{316{,}22}{10} \approx 31{,}6$$
   Puisque $Q > 0{,}707$, il y a bien résonance.

2. **Amplitude maximale de $u_C$ :**
   Le gain maximal $H_{\max}$ (ou résonance) se calcule en remplaçant $x_r$ dans l'expression de $H(\omega)$ :
   $$H_{\max} = \frac{Q}{\sqrt{1 - \frac{1}{4Q^2}}} \approx Q \text{ (car } Q \text{ est grand devant } 1\text{)}$$
   Application numérique : $H_{\max} \approx 31{,}6$.
   L'amplitude maximale de la tension est donc :
   $$U_{C,\max} = H_{\max} \cdot E_0 \approx 31{,}6 \times 5{,}0 \approx 158\,\text{V}$$

3. **Analyse critique :**
   * *Cas limite $R+r = 0$ :* Si la résistance totale était rigoureusement nulle, le facteur de qualité $Q$ tendrait vers l'infini. L'expression de $H_{\max}$ montrerait une tension aux bornes du condensateur tendant vers l'infini ($\infty$), ce qui traduirait une rupture du modèle linéaire (catastrophe physique due à l'absence d'amortissement et de dissipation d'énergie par effet Joule).
   * *Limites du modèle réel :* En pratique, la bobine possède toujours une résistance interne non nulle ($r > 0$). De plus, à très haute tension, les phénomènes de claquage du condensateur ou les pertes par rayonnement et effet de peau dans les spires de la bobine limitent l'amplification réelle. Le modèle linéaire stationnaire du premier ordre ou du second ordre trouve ici ses limites de validité expérimentale.