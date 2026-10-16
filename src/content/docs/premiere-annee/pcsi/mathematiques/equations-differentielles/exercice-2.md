---
title: 'Exercice 2 : Équations du 2nd ordre à coefficients constants'
description: 'Problème d entraînement type concours officiel.'
---

# Problème guidé : Oscillateur harmonique amorti soumis à une excitation sinusoïdale et analyse critique

## Énoncé

On étudie le comportement dynamique d'un système mécanique modélisé par une masse $m$ attachée à un ressort de raideur $k$ et soumise à une force de frottement fluide de coefficient $h$ ainsi qu'à une force extérieure d'excitation sinusoïdale de pulsation $\omega$ et d'amplitude $F_0$. 

Soit $x(t)$ le déplacement de la masse par rapport à sa position d'équilibre à l'instant $t \ge 0$. L'application de la relation fondamentale de la dynamique conduit à l'équation différentielle linéaire du second ordre à coefficients constants suivante :

$$m \frac{\mathrm{d}^2 x}{\mathrm{d}t^2} + h \frac{\mathrm{d}x}{\mathrm{d}t} + kx = F_0 \cos(\omega t)$$

On introduit les paramètres caractéristiques du système :
* La pulsation propre non amortie : $\omega_0 = \sqrt{\frac{k}{m}}$
* Le facteur d'amortissement (ou taux d'amortissement) : $\xi = \frac{h}{2m\omega_0}$
* La pulsation réduite : $X = \frac{\omega}{\omega_0}$

On se place dans le régime physique usuel des oscillations amorties, c'est-à-dire dans le cas où $\xi \in ]0, 1[$.

---

## Questions

### Partie I : Résolution de l'équation homogène
1. Écrire l'équation différentielle homogène associée $(E_0)$ et donner son équation caractéristique.
2. Exprimer les racines de l'équation caractéristique en fonction de $\omega_0$ et $\xi$.
3. En déduire l'expression générale de la solution $x_h(t)$ de $(E_0)$ dans le cas où $\xi \in ]0, 1[$.

### Partie II : Recherche d'une solution particulière
4. À l'aide de la méthode des complexifiés, on considère l'équation à second membre complexe :
   $$m \frac{\mathrm{d}^2 \underline{z}}{\mathrm{d}t^2} + h \frac{\mathrm{d}\underline{z}}{\mathrm{d}t} + k\underline{z} = F_0 e^{j\omega t}$$
   Chercher une solution sous la forme $\underline{z}(p) = A e^{j\omega t}$ où $A$ est une amplitude complexe.
5. Exprimer $A$ en fonction de $F_0$, $k$, $\xi$ et de la pulsation réduite $X$. Mettre $A$ sous la forme $A = |A| e^{j\varphi}$.
6. En déduire la solution particulière réelle $x_p(t)$ de l'équation initiale.

### Partie III : Solution générale et régime permanent/transitoire
7. Écrire la solution générale $x(t)$ de l'équation complète. Identifier clairement le terme correspondant au régime transitoire et celui correspondant au régime permanent.
8. Étudier l'amplitude du régime permanent en fonction de la pulsation réduite $X$. Mettre en évidence le phénomène de résonance et déterminer la pulsation de résonance $\omega_r$ ainsi que le facteur de surtension $Q$.

### Partie IV : Analyse critique des limites du modèle
9. Discuter la validité physique du modèle lorsque l'amplitude des oscillations devient très grande ou lorsque la fréquence d'excitation tend vers l'infini. Quelles non-linéarités ou phénomènes physiques négligés ici interviendraient dans un dispositif réel ?

---

## Pistes et indications

* **Piste 1 (Partie I)** : Le discriminant de l'équation caractéristique est strictement négatif si $\xi < 1$, ce qui conduit à des racines complexes conjuguées.
* **Piste 2 (Partie II)** : L'identification des parties réelles permet de passer de l'équation complexe à l'équation réelle grâce à $\text{Re}(F_0 e^{j\omega t}) = F_0 \cos(\omega t)$.
* **Piste 3 (Partie III)** : Pour trouver le maximum de l'amplitude, étudiez la dérivée du carré de l'amplitude par rapport à $X$.
* **Piste 4 (Partie IV)** : Pensez aux limites des lois de Hooke (ressort) et de Stokes (frottement fluide), ainsi qu'à la résistance des matériaux pour de grands déplacements.

---

## Corrigé pas à pas

### Partie I : Résolution de l'équation homogène
1. L'équation homogène associée est :
   $$(E_0) : m \frac{\mathrm{d}^2 x}{\mathrm{d}t^2} + h \frac{\mathrm{d}x}{\mathrm{d}t} + kx = 0$$
   Son équation caractéristique est : $m r^2 + h r + k = 0$.

2. En divisant par $m$ et en introduisant $\omega_0^2 = \frac{k}{m}$ et $\frac{h}{m} = 2\xi\omega_0$, l'équation devient :
   $$r^2 + 2\xi\omega_0 r + \omega_0^2 = 0$$
   Le discriminant réduit est $\Delta' = (\xi\omega_0)^2 - \omega_0^2 = \omega_0^2(\xi^2 - 1)$.
   Puisque $\xi \in ]0, 1[$, $\Delta' < 0$. Les racines complexes conjuguées sont :
   $$r_1 = -\xi\omega_0 + j\omega_0\sqrt{1-\xi^2} \quad \text{et} \quad r_2 = -\xi\omega_0 - j\omega_0\sqrt{1-\xi^2}$$
   où $j^2 = -1$.

3. La solution générale de $(E_0)$ est de la forme :
   $$x_h(t) = e^{-\xi\omega_0 t} \left( C_1 \cos(\omega_1 t) + C_2 \sin(\omega_1 t) \right)$$
   avec $\omega_1 = \omega_0\sqrt{1-\xi^2}$ la pulsation propre amortie, et $(C_1, C_2) \in \mathbb{R}^2$ des constantes arbitraires déterminées par les conditions initiales.

### Partie II : Recherche d'une solution particulière
4. En posant $\underline{z}(t) = A e^{j\omega t}$, on a $\frac{\mathrm{d}\underline{z}}{\mathrm{d}t} = j\omega A e^{j\omega t}$ et $\frac{\mathrm{d}^2\underline{z}}{\mathrm{d}t^2} = -\omega^2 A e^{j\omega t}$.
   En injectant dans l'équation complexe :
   $$A e^{j\omega t} \left( -m\omega^2 + j h\omega + k \right) = F_0 e^{j\omega t}$$
   En simplifiant par $e^{j\omega t}$ ($\neq 0$), on obtient :
   $$A \left( (k - m\omega^2) + j h\omega \right) = F_0$$

5. En factorisant par $k$ et en utilisant $X = \frac{\omega}{\omega_0}$ et $\omega_0^2 = \frac{k}{m}$ (donc $m\omega^2 = kX^2$) et $h = 2\xi\sqrt{km}$, on a :
   $$A = \frac{F_0 / k}{(1 - X^2) + j(2\xi X)}$$
   L'amplitude complexe s'écrit sous forme polaire $A = |A| e^{j\varphi}$ avec :
   $$|A| = \frac{F_0 / k}{\sqrt{(1 - X^2)^2 + (2\xi X)^2}} \quad \text{et} \quad \varphi = -\arctan\left(\frac{2\xi X}{1 - X^2}\right)$$

6. La solution particulière réelle $x_p(t)$ est la partie réelle de $\underline{z}(t) = |A| e^{j(\omega t + \varphi)}$ :
   $$x_p(t) = |A| \cos(\omega t + \varphi)$$

### Partie III : Solution générale et régime permanent/transitoire
7. La solution générale est $x(t) = x_h(t) + x_p(t)$, soit :
   $$x(t) = \underbrace{e^{-\xi\omega_0 t} \left( C_1 \cos(\omega_1 t) + C_2 \sin(\omega_1 t) \right)}_{\text{Régime transitoire } x_{\text{trans}}(t)} + \underbrace{|A| \cos(\omega t + \varphi)}_{\text{Régime permanent } x_{\text{perm}}(t)}$$
   Puisque $\xi > 0$, le terme transitoire tend vers $0$ lorsque $t \to +\infty$.

8. L'amplitude du régime permanent est $g(X) = |A| = \frac{F_0/k}{\sqrt{(1-X^2)^2 + (2\xi X)^2}}$.
   Pour trouver le maximum de $g(X)$, on étudie le minimum de la fonction sous radical $u(X) = (1-X^2)^2 + (2\xi X)^2 = 1 + (4\xi^2 - 2)X^2 + X^4$.
   Sa dérivée par rapport à $X$ s'annule en $X_r$ tel que :
   $$2(4\xi^2 - 2)X_r + 4X_r^3 = 0 \implies X_r^2 = 1 - 2\xi^2$$
   Il y a résonance si $1 - 2\xi^2 > 0$, c'est-à-dire $\xi < \frac{1}{\sqrt{2}} \approx 0{,}707$.
   La pulsation de résonance est alors :
   $$\omega_r = \omega_0\sqrt{1-2\xi^2}$$
   Le facteur de surtension $Q$ correspond à l'amplification maximale à la résonance :
   $$Q = \frac{1}{2\xi\sqrt{1-\xi^2}}$$

### Partie IV : Analyse critique des limites du modèle
9. **Limites physiques et critiques du modèle linéaire :**
   * **Domaine de validité de la loi de Hooke ($kx$) :** Si l'amplitude $F_0$ est très grande ou si le système est à la résonance avec un faible amortissement ($\xi \ll 1$), l'amplitude des oscillations $|A|$ peut devenir très grande. Dans ce cas, l'hypothèse des petits déplacements n'est plus vérifiée, et la raideur du ressort $k$ ne peut plus être considérée comme constante (termes non-linéaires d'ordre supérieur en $x^3$).
   * **Modèle de frottement fluide ($h\dot{x}$) :** Le frottement est supposé strictement proportionnel à la vitesse. Pour des vitesses élevées (atteintes à la résonance), des régimes turbulents apparaissent, impliquant une force de frottement en $\dot{x}|\dot{x}|$ (frottement quadratique), invalidant la linéarité de l'équation.
   * **Comportement asymptotique ($X \to +\infty$) :** Le modèle mathématique prédit que l'amplitude $|A|$ tend vers $0$ lorsque la fréquence d'excitation tend vers l'infini. Physiquement, le système ne peut plus suivre l'excitation rapide en raison de l'inertie, mais à très haute fréquence, des modes propres supérieurs de structure (flexions du ressort lui-même, ondes stationnaires) ou des phénomènes de délignage/rupture mécanique apparaissent, non décrits par un oscillateur à un seul degré de liberté.