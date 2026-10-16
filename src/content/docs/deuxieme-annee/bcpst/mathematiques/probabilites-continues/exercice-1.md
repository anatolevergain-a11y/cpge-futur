---
title: 'Exercice 1 : Variables aléatoires à densité'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Modélisation stochastique de la cinétique enzymatique et analyse critique

---

## Énoncé et contexte biologique

En enzymologie, l'étude de la vitesse des réactions catalysées par des enzymes est fondamentale pour comprendre le métabolisme cellulaire. Lors de l'analyse d'une population de cellules ou de molécules, la constante catalytique $k_{\text{cat}}$ (ou le temps caractéristique de réaction $T = \frac{1}{k_{\text{cat}}}$) d'une enzyme peut varier d'une entité à l'autre en raison de micro-fluctuations conformationnelles ou de micro-environnements cellulaires hétérogènes.

On cherche à modéliser le temps de réaction $X$ (exprimé en millisecondes, $\text{ms}$) d'une enzyme isolée par une variable aléatoire à densité. 

On suppose que la densité de probabilité $f$ de $X$ est définie par :
$$f(x) = \begin{cases} 
\frac{\lambda^2 x}{\theta} e^{-\lambda x} & \text{si } x > 0 \\ 
0 & \text{si } x \le 0 
\end{cases}$$
où $\lambda > 0$ et $\theta > 0$ sont des paramètres réels liés aux conditions physico-chimiques du milieu (température, pH).

---

## Questions

1. **Vérification du modèle :** Déterminer la relation entre $\lambda$ et $\theta$ pour que $f$ soit effectivement une densité de probabilité valide.
2. **Espérance et temps moyen :** En supposant la condition précédente remplie, calculer l'espérance mathématique de $X$, notée $\mathbb{E}(X)$, qui représente le temps moyen de réaction de l'enzyme.
3. **Variance et dispersion :** Calculer la variance de $X$, notée $\text{V}(X)$, et interpréter brièvement la signification biologique de l'écart-type $\sigma(X)$ dans le contexte de l'hétérogénéité cellulaire.
4. **Analyse critique du modèle :** 
   - Que dire de la probabilité que le temps de réaction soit négatif ou nul selon ce modèle ?
   - D'un point de vue biologique, ce modèle est-il valable pour des temps de réaction extrêmement grands ($x \to +\infty$) ? Discuter des limites physiologiques.

---

## Pistes et indications

* **Question 1 :** Rappeler la condition fondamentale qu'une densité de probabilité doit satisfaire sur $\mathbb{R}$. On pourra utiliser des intégrations par parties.
* **Question 2 & 3 :** Penser à relier les moments d'ordre 1 et 2 aux dérivées successives d'intégrales à paramètres ou utiliser directement les intégrales de Gamma d'Euler, ou des intégrations par parties successives.
* **Question 4 :** Pour l'analyse critique, examinez le comportement asymptotique de la densité et la nature même des processus enzymatiques (saturation, dénaturation thermique).

---

## Corrigé pas à pas

### 1. Vérification du modèle
Pour que $f$ soit une densité de probabilité, deux conditions doivent être réunies :
1. $fule$ est positive ou nulle sur $\mathbb{R}$ (ce qui est le cas si $\lambda > 0$ et $\theta > 0$, pour $x > 0$).
2. L'intégrale de $f$ sur $\mathbb{R}$ doit être égale à $1$.

Calculons l'intégrale de $f$ :
$$\int_{-\infty}^{+\infty} f(x) \, dx = \int_{0}^{+\infty} \frac{\lambda^2 x}{\theta} e^{-\lambda x} \, dx = \frac{\lambda^2}{\theta} \int_{0}^{+\infty} x e^{-\lambda x} \, dx$$

Effectuons une intégration par parties. Posons :
- $u(x) = x \implies u'(x) = 1$
- $v'(x) = e^{-\lambda x} \implies v(x) = -\frac{1}{\lambda} e^{-\lambda x}$

Puisque les fonctions sont de classe $\mathcal{C}^1$ :
$$\int_{0}^{+\infty} x e^{-\lambda x} \, dx = \left[ -\frac{x}{\lambda} e^{-\lambda x} \right]_0^{+\infty} + \frac{1}{\lambda} \int_{0}^{+\infty} e^{-\lambda x} \, dx$$
Le terme tout intégré s'annule en $+\infty$ (par croissance comparée) et en $0$. Il reste :
$$\int_{0}^{+\infty} x e^{-\lambda x} \, dx = 0 + \frac{1}{\lambda} \left[ -\frac{1}{\lambda} e^{-\lambda x} \right]_0^{+\infty} = \frac{1}{\lambda^2}$$

Ainsi :
$$\int_{-\infty}^{+\infty} f(x) \, dx = \frac{\lambda^2}{\theta} \times \frac{1}{\lambda^2} = \frac{1}{\theta}$$

Pour que $f$ soit une densité valide, il faut donc impérativement que **$\theta = 1$**. 
*(Note : Si $\theta \neq 1$, $f$ définit une loi de Gamma de paramètres $(2, \lambda)$ à une constante multiplicative près).* On pose désormais $\theta = 1$, donc $f(x) = \lambda^2 x e^{-\lambda x}\mathbb{1}_{]0, +\infty[}(x)$.

---

### 2. Espérance et temps moyen
Par définition, l'espérance de $X$ (si elle existe) est :
$$\mathbb{E}(X) = \int_{-\infty}^{+\infty} x f(x) \, dx = \int_{0}^{+\infty} \lambda^2 x^2 e^{-\lambda x} \, dx$$

Utilisons une nouvelle intégration par parties. Posons :
- $u(x) = x^2 \implies u'(x) = 2x$
- $v'(x) = e^{-\lambda x} \implies v(x) = -\frac{1}{\lambda} e^{-\lambda x}$

On obtient :
$$\mathbb{E}(X) = \lambda^2 \left( \left[ -\frac{x^2}{\lambda} e^{-\lambda x} \right]_0^{+\infty} + \frac{2}{\lambda} \int_{0}^{+\infty} x e^{-\lambda x} \, dx \right)$$
Le terme tout intégré s'annule. D'après la question précédente, on sait que $\int_{0}^{+\infty} x e^{-\lambda x} \, dx = \frac{1}{\lambda^2}$. Donc :
$$\mathbb{E}(X) = \lambda^2 \times \frac{2}{\lambda} \times \frac{1}{\lambda^2} = \frac{2}{\lambda}$$

Le temps moyen de réaction de l'enzyme est donc $\mathbb{E}(X) = \frac{2}{\lambda} \text{ ms}$.

---

### 3. Variance et dispersion
Calculons d'abord le moment d'ordre 2, $\mathbb{E}(X^2)$ :
$$\mathbb{E}(X^2) = \int_{0}^{+\infty} \lambda^2 x^3 e^{-\lambda x} \, dx$$
Par une intégration par parties similaire (en posant $u(x) = x^3$), on obtient :
$$\mathbb{E}(X^2) = \lambda^2 \times \frac{3!}{\lambda^4} = \frac{6}{\lambda^2}$$

D'après la formule de Konig-Huygens :
$$\text{V}(X) = \mathbb{E}(X^2) - (\mathbb{E}(X))^2 = \frac{6}{\lambda^2} - \left(\frac{2}{\lambda}\right)^2 = \frac{6}{\lambda^2} - \u4_4{\frac{4}{\lambda^2}} = \frac{2}{\lambda^2}$$

L'écart-type est $\sigma(X) = \frac{\sqrt{2}}{\lambda}$. 
**Interprétation biologique :** Cet écart-type quantifie la diversité des comportements cinétiques au sein de la population enzymatique. Plus $\lambda$ est grand, plus la réaction est rapide en moyenne, mais plus la variabilité absolue est faible.

---

### 4. Analyse critique du modèle

* **Positivité de la variable :** Par construction, $f(x) = 0$ pour tout $x \le 0$, ce qui garantit que $\mathbb{P}(X \le 0) = 0$. Mathématiquement et biologiquement, un temps de réaction ne peut pas être négatif, le modèle respecte donc cette contrainte absolue.
* **Comportement asymptotique ($x \to +\infty$) et limites physiologiques :** 
  Le terme $e^{-\lambda x}$ assure une décroissance exponentielle rapide lorsque $x devient grand. Cependant, cela signifie qu'il existe une probabilité (faible mais non nulle) que $X$ prenne des valeurs extrêmement grandes ($x \to +\infty$). 
  *Limites du modèle :* En biologie cellulaire, une enzyme possède une durée de vie limitée (dénaturation, épuisement du substrat, régulation allostérique) et le milieu cellulaire est sujet à des changements constants. Un modèle à décroissance exponentielle ne tient pas compte de la **dénaturation irréversible** de l'enzyme sur un temps long, ni du fait qu'une réaction chimique finie se produit dans un temps borné sous peine d'être invalidée par d'autres processus physiologiques concurrents.