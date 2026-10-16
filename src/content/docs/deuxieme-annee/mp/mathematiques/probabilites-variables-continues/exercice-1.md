---
title: 'Exercice 1 : Lois normales et exponentielles'
description: 'Problème d entraînement type concours officiel.'
---

# Problème guidé : Modélisation stochastique de systèmes industriels et analyse asymptotique

**Filière :** MP  
**Matière :** Mathématiques  
Chapitre: ** Variables aléatoires à densité, Lois normales et exponentielles  
**Thème :** Fiabilité des systèmes, couplage de lois et analyse critique du modèle.

---

## 1. Énoncé

Dans le cadre de l'étude de la fiabilité d'un parc de serveurs informatiques, on s'intéresse à la durée de vie des composants et au temps de réponse du système. 

Soit $(\Omega, \mathcal{A}, \mathbb{P})$ un espace probabilisé.
1. La durée de vie (en années) d'un composant électronique de base suit une loi exponentielle de paramètre $\lambda > 0$. On la note $X$.
2. Le temps de traitement (en millisecondes) d'une requête par ce composant est modélisé par une variable aléatoire $Y$ suivant une loi normale $\mathcal{N}(\mu, \sigma^2)$, avec $\mu > 0$ et $\sigma > 0$.
3. On suppose que $X$ et $Y$ sont **indépendantes**.

Le problème se propose d'étudier la variable aléatoire somme $S = X + Y$ (après homogénéisation des unités, ou dans le cadre d'un bilan global de performance), ainsi que d'analyser la pertinence physique de ces modélisations.

---

## 2. Questions

### Partie A : Preliminaires et rappels sur les lois usuelles
1. Rappeler la densité, l'espérance et la variance de $X \sim \mathcal{E}(\lambda)$ et de $Y \mathcal{N}(\mu, \sigma^2)$.
2. Exprimer la fonction caractéristique $\varphi_X(t)$ de $X$ et $\varphi_Y(t)$ de $Y$ pour $t \in \mathbb{R}$.

### Partie B : Étude du produit et de la somme de variables indépendantes
3. Soit $Z = X Y$. Déterminer la densité de $Z$ sous forme d'une intégrale simple faisant intervenir la densité de $Y$.
4. Établir l'expression de la densité de la variable somme $S = X + Y$ par convolution. On exprimera cette densité $f_S$ sous la forme d'une intégrale.
5. Calculer explicitement $f_S(s)$ pour tout $s \in \mathbb{R}$ en effectuant le changement de variable adéquat et en faisant apparaître la fonction de répartition de la loi normale $\Phi$.

### Partie C : Analyse asymptotique et critique du modèle
6. À l'aide de l'expression trouvée à la question 5 ou par un argument probabiliste direct, déterminer un équivalent ou la limite de $\mathbb{P}(S \leq s)$ lorsque $\sigma \to 0$.
7. **Analyse critique :** Discuter la pertinence de l'utilisation conjointe d'une loi exponentielle et d'une loi normale pour modéliser des grandeurs physiques réelles (durées de vie et temps de traitement). Quelles sont les limites inhérentes à ces choix de modélisation ?

---

## 3. Pistes et indications

* **Indication Q3-Q4 :** Utiliser le théorème de transfert ou la formule de convolution pour des densités de variables indépendantes.
* **Indication Q5 :** Pour le calcul de l'intégrale de convolution, l'expansion du terme carré dans l'exposant de la loi normale et une mise sous forme canonique (technique du "complètement du carré") sont indispensables.
* **Indication Q6 :** Penser à la convergence en loi ou à l'étude de la variable $Y$ lorsque sa variance s'annule.

---

## 4. Corrigé pas à pas

### Partie A : Préliminaires
1. **Loi exponentielle $X \sim \mathcal{E}(\lambda)$ :**  
   - Densité : $f_X(x) = \lambda e^{-\lambda x} \mathbb{1}_{[0, +\infty[}(x)$
   - Espérance : $\mathbb{E}[X] = \frac{1}{\lambda}$
   - Variance : $\mathrm{Var}(X) = \frac{1}{\lambda^2}$

   **Loi normale $Y \sim \mathcal{N}(\mu, \sigma^2)$ :**  
   - Densité : $f_Y(y) = \frac{1}{\sigma\sqrt{2\pi}} \exp\left(-\frac{(y-\mu)^2}{2\sigma^2}\right)$ pour $y \in \mathbb{R}$
   - Espérance : $\mathbb{E}[Y] = \mu$
   - Variance : $\mathrm{Var}(Y) = \sigma^2$

2. **Fonctions caractéristiques :**  
   - Pour $X$ : $\varphi_X(t) = \mathbb{E}[e^{itX}] = \int_0^{+\infty} e^{itx} \lambda e^{-\lambda x} dx = \frac{\lambda}{\lambda - it}$ (pour $t \in \mathbb{R}$).
   - Pour $Y$ : Par reconnaissance de la transformée de Fourier d'une gaussienne, $\varphi_Y(t) = \exp\left(it\mu - \frac{\sigma^2 t^2}{2}\right)$.

---

### Partie B : Étude du produit et de la somme
3. **Densité de $Z = XY$ :**  
   Puisque $X > \text{p.s.}$ et $Y$ est à support sur $\mathbb{R}$, par le théorème de convolution multiplicative, la densité $f_Z(z)$ est donnée par :
   $$f_Z(z) = \int_{-\infty}^{+\infty} \frac{1}{|x|} f_X(x) f_Y\left(\frac{z}{x}\right) dx = \int_0^{+\infty} \frac{\lambda}{x} e^{-\lambda x} \frac{1}{\sigma\sqrt{2\pi}} \exp\left(-\frac{(z/x - \mu)^2}{2\sigma^2}\right) dx$$

4. **Densité de la somme $S = X + Y$ :**  
   Comme $X$ et $Y$ sont indépendantes, la densité de $S$ est le produit de convolution de leurs densités :
   $$f_S(s) = \int_{-\infty}^{+\infty} f_X(x) f_Y(s - x) dx$$
   En injectant les expressions et en tenant compte du support de $f_X$ :
   $$f_S(s) = \int_{0}^{+\infty} \lambda e^{-\lambda x} \frac{1}{\sigma\sqrt{2\pi}} \exp\left(-\frac{(s - x - \mu)^2}{2\sigma^2}\right) dx$$

5. **Calcul explicite de $f_S(s)$ :**  
   Regroupons les termes dans l'exponentielle en fonction de $x$. L'argument s'écrit :
   $$-\lambda x - \frac{(x - (s-\mu))^2}{2\sigma^2}$$
   Développons le numérateur : 
   $$(x - (s-\mu))^2 = x^2 - 2x(s-\mu) + (s-\mu)^2$$
   Mettons sous forme canonique par rapport à $x$ :
   $$\frac{x^2 - 2x(s-\mu) + (s-\mu)^2}{2\sigma^2} + \lambda x = \frac{x^2 - 2x(s - \mu - \lambda\sigma^2) + (s-\mu)^2}{2\sigma^2}$$
   Complétons le carré pour faire apparaître $(x - \text{constante})^2$ :
   $$x^2 - 2x(s - \mu - \lambda\sigma^2) = [x - (s - \mu - \lambda\sigma^2)]^2 - (s - \mu - \lambda\sigma^2)^2$$
   Après factorisation et simplification, l'intégrale se réécrit en faisant intervenir la fonction de répartition de la loi normale centrée réduite $\Phi$. On obtient finalement, après calcul standard d'intégrale gaussienne sur un domaine semi-infini :
   $$f_S(s) = \lambda \exp\left(-\lambda(s - \mu) + \frac{\lambda^2 \sigma^2}{2}\right) \Phi\left(\frac{s - \mu - \lambda\sigma^2}{\sigma}\right)$$
   valable pour tout $s \in \mathbb{R}$ (la fonction s'annulant naturellement pour les $s$ très négatifs via $\Phi$).

---

### Partie C : Analyse asymptotique et critique du modèle

6. **Comportement lorsque $\sigma \to 0$ :**  
   Si $\sigma \to 0$, la variable aléatoire $Y$ dégénère vers sa moyenne $\mu$ (convergence en probabilité vers la constante $\mu$). Dès lors, la variable $S = X + Y$ se comporte asymptotiquement comme $X + \mu$.  
   Intuitivement, la densité $f_S(s)$ tend vers la densité de $X + \mu$, c'est-à-dire $\lambda e^{-\lambda(s-\mu)}\mathbb{1}_{[\mu, +\infty[}(s)$.

7. **Analyse critique des limites du modèle (Exigence du sujet) :**  
   * **Incompatibilité des supports physiques :** La loi normale $\mathcal{N}(\mu, \sigma^2)$ possède un support sur $\mathbb{رمossible}$ tout $\mathbb{R}$. Cela signifie qu'il existe une probabilité non nulle (bien que potentiellement faible si $\mu \gg \sigma$) que le temps de traitement $Y$ soit **négatif**, ce qui est physiquement absurde pour une durée.
   * **Mémoire et oubli :** La loi exponentielle modélise l'absence de vieillissement (propriété sans mémoire). Pour des composants électroniques réels, le taux de panne $\lambda$ n'est généralement pas constant au cours du temps (courbe en baignoire : jeunesse, maturité, usure). L'utilisation d'une loi exponentielle ne convient qu'en régime stabilisé, sous-estimant les pannes par usure.
   * **Indépendance stochastique :** L'hypothèse d'indépendance entre $X$ et $Y$ est souvent mise en défaut dans les systèmes réels : un composant proche de sa fin de vie ($X$ petit) peut voir ses performances se dégrader, entraînant une augmentation de son temps de traitement $Y$ (corrélation négative ou couplage thermique/électrique).