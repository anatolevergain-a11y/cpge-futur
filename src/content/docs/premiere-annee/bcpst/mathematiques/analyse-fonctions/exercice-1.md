---
title: 'Exercice 1 : Équations différentielles linéaires d ordre 1 et 2'
description: 'Problème d entraînement type concours.'
---

# Problème : Modélisation mathématique de la dynamique d'une population de prédateurs et analyse d'un signal biologique amorti

**Matière :** Mathématiques  
**Filière :** BCPST (Classes Préparatoires aux Grandes Écoles)  
Chapitre: ** Analyse et Équations différentielles (Ordres 1 et 2)  
**Thème :** Équations différentielles linéaires, résonance, modélisation biologique et analyse critique.

---

## Introduction et Contexte Biologique

En écologie évolutive et en gestion des populations, la compréhension de la réponse d'un écosystème à une perturbation extérieure est fondamentale. On s'intéresse ici à la dynamique de la densité d'une population de prédateurs (ex : lynx boréaux) dans une réserve naturelle, soumise à des variations saisonnières climatiques et à une gestion de réintroduction.

L'objectif de ce problème est d'étudier, à l'aide d'équations différentielles linéaires d'ordre 1 puis d'ordre 2, l'évolution temporelle de cette population, de confronter le modèle mathématique à la réalité biologique, et d'en évaluer les limites.

---

## Partie I : Étude de la phase transitoire (Équation d'ordre 1)

On note $x(t)$ l'écart relatif de la densité de la population de prédateurs par rapport à sa valeur d'équilibre à l'instant $t$ (exprimé en années, avec $t \ge 0$). En l'absence de perturbation, l'écosystème est à l'équilibre ($x = 0$). 

On suppose que la dynamique de retour à l'équilibre après une perturbation initiale suit l'équation différentielle linéaire homogène d'ordre 1 :
$$\text{(E1)} \quad x'(t) + k x(t) = 0$$
où $k$ est un paramètre strictement positif lié au taux de régulation biologique de l'espèce (taux de mortalité densité-dépendant et capacité de charge du milieu).

### Questions

1. **Résolution générale :** Résoudre l'équation (E1) sur $[0, +\infty[$ sans condition initiale.
2. **Condition initiale :** Sachant qu'à l'instant $t = 0$, une canicule a provoqué une baisse anormale de la population telle que $x(0) = x_0$ (avec $x_0 < 0$), exprimer $x(t)$ en fonction de $t$, $k$ et $x_0$.
3. **Interprétation biologique :** Calculer $\lim_{t \to +\infty} x(t)$. Commenter ce résultat au regard de la résilience écologique de la réserve.
4. **Temps caractéristique :** On définit le temps de résilience $\tau$ comme l'instant où l'écart relatif est réduit à $1/e$ de sa valeur initiale. Exprimer $\tau$ en fonction de $k$. Si $k = 0,5 \text{ an}^{-1}$, calculer $\tau$.

---

## Partie II : Prise en compte des fluctuations saisonnières et inertie (Équation d'ordre 2)

Le modèle d'ordre 1 néglige l'effet de mémoire (l'inertie démographique liée à la structure d'âge) et les forçages externes périodiques (comme les variations climatiques saisonnières). On modélise désormais l'écart $y(t)$ de la population par l'équation différentielle linéaire avec second membre d'ordre 2 :
$$\text{(E2)} \quad y''(t) + 2\lambda y'(t) + \omega_0^2 y(t) = A \cos(\omega t)$$
où :
* $\lambda > 0$ représente l'amortissement lié aux régulations internes de l'écosystème.
* $\omega_0 > pulsations$ propre du système ($\omega_0 > 0$).
* $A \cos(\omega t)$ représente une perturbation environnementale cyclique (ex : variation climatique annuelle, avec $\omega = \frac{2\pi}{T}$ où $T = 1 \text{ an}$).

### Questions

5. **Équation homogène :** On pose $\Delta = \lambda^2 - \omega_0^2$. On suppose dans un premier temps que le système est fortement amorti ($\lambda > \omega_0$). Résoudre l'équation homogène associée à (E2).
6. **Solution particulière :** À l'aide de la méthode des nombres complexes (en remplaçant le second membre par $A e^{i\omega t}$), déterminer une solution particulière $y_p(t)$ de l'équation (E2 sous la forme $y_p(t) = C \cos(\omega t - \varphi)$, où $C > 0$ et $\varphi \in [0, \pi[$. Exprimer $C$ et $\varphi$ en fonction de $A$, $\lambda$, $\omega_0$ et $\omega$.
7. **Amplitude de réponse :** Étudier les variations de l'amplitude $C(\omega)$ en fonction de la pulsation d'excitation $\omega$. Met-on en évidence un phénomène de résonance dans le cas où $\lambda > \omega_0$ ?
8. **Régime permanent :** Écrire la solution générale de (E2) et expliquer l'effet du terme transitoire (solution de l'équation homogène) sur le long terme.

---

## Pistes et Indications

* **Pour la Partie I :** Penser à la forme générale des solutions d'une équation linéaire homogène d'ordre 1 à coefficients constants $y' + ay = 0$.
* **Pour la question 6 :** Posez $underline{y}(t) = K e^{i\omega t}$ pour trouver une solution particulière complexe, puis prenez la partie réelle. Identifiez le module et l'argument pour obtenir $C$ et $\varphi$.
* **Pour l'analyse critique :** Posez-vous la question de la validité de la linéarité lorsque les écarts $x(t)$ ou $y(t)$ deviennent grands (saturation des ressources, effet Allee).

---

## Corrigé Détaillé

### Partie I : Étude de la phase transitoire

1. **Résolution de (E1) :**  
   L'équation est linéaire homogène d'ordre 1. Son équation caractéristique associée est $r + k = 0$, soit $r = -k$.  
   La solution générale sur $[0, +\infty[$ est :
   $$x(t) = C e^{-kt}, \quad \text{avec } C \in \mathbb{R}$$

2. **Application de la condition initiale :**  
   En $t = 0$, $x(0) = C e^0 = C$.  
   La condition initiale donne $C = x_0$. La solution est donc :
   $$x(t) = x_0 e^{-kt}$$

3. **Limite et résilience :**  
   Puisque $k > 0$, $\lim_{t \to +\infty} e^{-kt} = 0$, donc $\lim_{t \to +\infty} x(t) = 0$.  
   *Interprétation biologique :* Le système retourne asymptotiquement vers son état d'équilibre initial. L'écosystème présente une bonne résilience face à la perturbation ponctuelle (canicule).

4. **Temps de résilience :**  
   On cherche $\tau$ tel que $x(\tau) = \frac{x_0}{e} = x_0 e^{-1}$.  
   On a $x_0 e^{-k\tau} = x_0 e^{-1} \implies k\tau = 1 \implies \tau = \frac{1}{k}$.  
   A.N. : Si $k = 0,5 \text{ an}^{-1}$, alors $\tau = \frac{1}{0,5} = 2 \text{ ans}$.

---

### Partie II : Prise en compte des fluctuations saisonnières

5. **Résolution de l'équation homogène :**  
   L'équation caractéristique associée à $y'' + 2\lambda y' + \omega_0^2 y = 0$ est :
   $$r^2 + 2\lambda r + \omega_0^2 = 0$$
   Le discriminant réduit est $\Delta' = \lambda^2 - \omega_0^2$. L'énoncé pose $\Delta = \lambda^2 - \omega_0^2 > 0$ (cas du régime aperiodique / fortement amorti).  
   Les racines réelles distinctes sont :
   $$r_1 = -\lambda - \sqrt{\lambda^2 - \omega_0^2} \quad \text{et} \quad r_2 = -\lambda + \sqrt{\lambda^2 - \omega_0^2}$$
   La solution générale de l'équation homogène est donc :
   $$y_h(t) = \alpha e^{r_1 t} + \beta e^{r_2 t}, \quad (\alpha, \beta) \in \mathbb{R}^2$$

6. **Recherche d'une solution particulière par les complexifiés :**  
   On considère l'équation complexe : $\underline{y}'' + 2\lambda \underline{y}' + \omega_0^2 \underline{y} = A e^{i\omega t}$.  
   On cherche une solution sous la forme $\underline{y}_p(t) = \underline{C} e^{i\omega t}$.  
   En dérivant : $\underline{y}_p'(t) = i\omega \underline{C} e^{i\omega t}$ et $\underline{y}_p''(t) = -\omega^2 \underline{C} e^{i\omega t}$.  
   En injectant dans l'équation :
   $$\underline{C} e^{i\omega t} \left( -\omega^2 + 2i\lambda\omega + \omega_0^2 \right) = A e^{i\omega t}$$
   $$\underline{C} = \frac{A}{(\omega_0^2 - \omega^2) + i(2\lambda\omega)}$$
   Le module de $\underline{C}$ est :
   $$C = |\underline{C}| = \frac{A}{\sqrt{(\omega_0^2 - \omega^2)^2 + 4\lambda^2\omega^2}}$$
   L'argument $\varphi$ de $\underline{C}$ est tel que $\tan(\varphi) = \frac{2\lambda\omega}{\omega_0^2 - \omega^2}$ (avec $\varphi \in [0, \pi[$).  
   La solution réelle particulière est la partie réelle de $\underline{y}_p(t) = \underline{C} e^{i\omega t} = C e^{-i\varphi} e^{i\omega t} = C e^{i(\omega t - \varphi)}$, soit :
   $$y_p(t) = C \cos(\omega t - \varphi)$$

7. **Étude de l'amplitude et résonance :**  
   L'amplitude est $C(\omega) = \frac{A}{\sqrt{(\omega_0^2 - \omega^2)^2 + 4\lambda^2\omega^2}}$.  
   Étudions la dérivée du dénominateur par rapport à $\omega$ (ou étudions le carré de l'amplitude). Posons $g(\omega) = (\omega_0^2 - \omega^2)^2 + 4\lambda^2\omega^2 = \omega^4 + (\omega_0^2 - 2\lambda^2)\omega^2 + \omega_0^4$.  
   Pour qu'il y ait un maximum de $C(\omega)$ (donc un minimum de $g(\omega)$ pour $\omega > 0$), il faut que $\omega_0^2 - 2\lambda^2 < 0$, soit $\lambda < \frac{\omega_0}{\sqrt{2}}$.  
   Or, dans cette question, l'énoncé précise que le système est dans le cas $\lambda > \omega_0$. Par conséquent, $\lambda > \frac{\omega_0}{\sqrt{2}}$ est nécessairement vérifié.  
Conclusion: * Dans le cas fortement amorti ($\lambda > \omega_0$), **il n'y a pas de résonance**. L'amplitude $C(\omega)$ est strictement décroissante en fonction de la pulsation $\omega$ (le maximum est atteint en $\omega = 0$).

8. **Régime permanent et analyse critique :**  
   La solution générale est $y(t) = y_h(t) + y_p(t)$.  
   Puisque $\lambda > 0$, les racines $r_1$ et $r_2$ ont des parties réelles strictement négatives. Par conséquent, $\lim_{t \to +\infty} y_h(t) = 0$.  
   Le terme $y_h(t)$ correspond au **régime transitoire**, qui s'amortit au cours du temps. Sur le long terme, la population suit uniquement le **régime permanent** $y_p(t)$, oscillant au rythme des forçages saisonniers.

---

## Analyse Critique et Limites du Modèle (Indispensable en BCPST)

Bien que mathématiquement élégants, ces modèles linéaires présentent des limites biologiques majeures qu'un ingénieur agronome ou un écologue doit identifier :

1. **L'hypothèse de linéarité :** Les équations différentielles linéaires supposent que l'effet de la population sur son propre taux de croissance est proportionnel à sa taille ($kx$ ou $2\lambda y$). En réalité, les dynamiques écologiques sont non-linéaires (par exemple, modèle logistique). Si l'écart $x(t)$ devient trop important, la saturation des ressources (proies) invalide le modèle.
2. **L'absence de décalage temporel (retard) :** Dans la réalité, la réponse des prédateurs aux variations des proies ou du climat n'est pas instantanée (temps de gestation, maturation). Des modèles à retards (équations différentielles fonctionnelles) seraient plus rigoureux.
3. **Stochasticité environnementale :** Le forçage en $A \cos(\omega t)$ est déterministe et parfaitement périodique. Or, les variations climatiques réelles comportent une forte part aléatoire (stochastique), ce qui peut induire des résonances stochastiques non captées par ce modèle simple.