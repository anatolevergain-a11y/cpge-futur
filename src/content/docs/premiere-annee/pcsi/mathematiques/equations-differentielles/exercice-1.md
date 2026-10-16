---
title: 'Exercice 1 : Résolution des équations du 1er ordre'
description: 'Problème d entraînement type concours officiel.'
---

# PROBLÈME GUIDÉ : Étude qualitative et quantitative d'un modèle cinétique non linéaire perturbé

**Filière :** PCSI  
**Matière :** Mathématiques  
Chapitre: ** Équations différentielles linéaires (et équations se ramenant à l'ordre 1)  
**Thème :** Résolution des équations du $1^{\text{er}}$ ordre, méthode de variation de la constante, analyse critique de modèles physiques.

---

## Énoncé

Dans ce problème, on s'intéresse à la modélisation mathématique de la concentration d'un réactif chimique en solution dans un réacteur ouvert. L'évolution de la concentration $x(t)$ (exprimée en $\text{mol}\cdot\text{L}^{-1}$) au cours du temps $t$ (exprimé en $\text{s}$) est régie par une équation différentielle traduisant les bilans de matière. 

L'objectif est de résoudre l'équation différentielle associée, d'étudier l'influence d'un terme de commande externe, puis d'analyser les limites physiques du modèle mathématique obtenu.

Soit $I = [0, +\infty[$. On considère l'équation différentielle $(E)$ d'inconnue $x : I \to \mathbb{R}$, de classe $\mathcal{C}^1$ :
$$(E) : \quad x'(t) + \left(1 + \frac{1}{1+t}\right)x(t) = e^{-t}$$

---

## Questions

### Partie I : Résolution de l'équation homogène
1. Déterminer l'ensemble des solutions sur $I$ de l'équation homogène associée à $(E)$, que l'on notera $(H)$ :
   $$(H) : \quad x'(t) + \left(1 + \frac{1}{1+t}\right)x(t) = 0$$

### Partie II : Recherche d'une solution particulière et solution générale
2. À l'aide de la méthode de la variation de la constante, déterminer une solution particulière de $(E)$ sur $I$.
3. En déduire l'expression générale de toutes les solutions de $(E)$ sur $I$.
4. Déterminer l'unique solution $x_0$ de $(E)$ vérifiant la condition initiale $x_0(0) = 1$.

### Partie III : Étude asymptotique et analyse critique du modèle
5. Déterminer la limite de $x_0(t)$ lorsque $t$ tend vers $+\infty$.
6. **Analyse critique :** En physique-chimie, une concentration molaire doit nécessairement vérifier la contrainte de positivité, c'est-à-dire $x(t) \ge 0$ pour tout $t \in I$. 
   * Supposons que le réacteur soit initialement vide ou que la condition initiale soit modifiée de telle sorte que $x(t_1) < 0$ à un instant $t_1$. Que dire de la validité physique du modèle $(E)$ ? 
   * Plus généralement, identifier la principale faille conceptuelle de ce modèle mathématique linéaire du premier ordre face à des variations brutales ou à des temps longs, en lien avec les grandeurs thermodynamiques ($\text{mol}\cdot\text{L}^{-1}$).

---

## Pistes et indications

* **Piste 1 (Q1) :** Pensez à utiliser une primitive de la fonction $a(t) = 1 + \frac{1}{1+t}$ sur l'intervalle $[0, +\infty[$. La solution générale de $(H)$ s'exprime sous la forme $x_H(t) = K e^{-A(t)}$ où $A(t)$ est une primitive de $a(t)$.
* **Piste 2 (Q2) :** Posez $x_p(t) = K(t)e^{-A(t)}$ et injectez cette expression dans $(E)$ pour trouver une équation simple vérifiée par $K'(t)$.
* **Piste 3 (Q5) :** Pour calculer la limite en $+\infty$, mettez le terme dominant en facteur ou utilisez les croissances comparées.
* **Piste 4 (Q6) :** Interpréter le domaine de définition des concentrations et la linéarité de l'équation qui n'impose aucune barrière naturelle (comme un état d'équilibre chimique stœchiométrique ou une borne supérieure/inférieure stricte) en dehors de la stricte manipulation algébrique.

---

## Corrigé pas à pas

### Partie I : Résolution de l'équation homogène
1. L'équation homogène est $(H) : x'(t) + a(t)x(t) = 0$ avec $a(t) = 1 + \frac{1}{1+t}$.  
   La fonction $a$ est continue sur $I = [0, +\infty[$. Une primitive $A$ de $a$ sur $I$ est :
   $$A(t) = \int \left(1 + \frac{1}{1+t}\right) dt = t + \ln(1+t)$$
   Les solutions de $(H)$ sur $I$ sont donc de la forme :
   $$x_H(t) = K e^{-A(t)} = K e^{-t - \ln(1+t)} = K e^{-t} e^{-\ln(1+t)} = \frac{K e^{-t}}{1+t}$$
   où $K$ est une constante réelle arbitraire.  
Conclusion: * L'ensemble des solutions de $(H)$ est $\left\{ t \mapsto \frac{K e^{-t}}{1+t} \mid K \in \mathbb{R} \right\}$.

### Partie II : Recherche d'une solution particulière et solution générale
2. On utilise la méthode de la variation de la constante en cherchant une solution sous la forme :
   $$x_p(t) = \frac{K(t) e^{-t}}{1+t}$$
   Dérivons $x_p$ :
   $$x_p'(t) = \frac{K'(t)e^{-t}}{1+t} + K(t)\left[ \frac{-e^{-t}(1+t) - e^{-t}}{(1+t)^2} \right] = \frac{K'(t)e^{-t}}{1+t} - K(t)e^{-t}\frac{2+t}{(1+t)^2}$$
   Injectons $x_p$ et $x_p'$ dans $(E)$ :
   $$\frac{K'(t)e^{-t}}{1+t} - K(t)e^{-t}\frac{2+t}{(1+t)^2} + \left(1 + \frac{1}{1+t}\right)\frac{K(t)e^{-t}}{1+t} = e^{-t}$$
   Or, $1 + \frac{1}{1+t} = \frac{2+t}{1+t}$, donc le second terme et le troisième terme s'annulent exactement :
   $$\frac{K'(t)e^{-t}}{1+t} = e^{-t}$$
   Puisque $e^{-t} \neq 0$ pour tout $t \in \mathbb{R}$, on simplifie par $e^{-t}$ :
   $$\frac{K'(t)}{1+t} = 1 \implies K'(t) = 1 + t$$
   En intégrant (par exemple avec une constante d'intégration nulle), on obtient :
   $$K(t) = t + \frac{t^2}{2}$$
   Une solution particulière est donc :
   $$x_p(t) = \frac{\left(t + \frac{t^2}{2}\right)e^{-t}}{1+t} = \frac{t(2+t)}{2(1+t)} e^{-t}$$

3. La solution générale de $(E)$ est la somme de la solution générale de l'équation homogène et d'une solution particulière :
   $$x(t) = x_H(t) + x_p(t) = \frac{K e^{-t}}{1+t} + \frac{t(2+t)e^{-t}}{2(1+t)} = \frac{2K + t(2+t)}{2(1+t)} e^{-t}$$
   où $K \in \mathbb{R}$.

4. Déterminons $K$ sachant que $x_0(0) = 1$ :
   $$x_0(0) = \frac{2K + 0}{2(1+0)} e^{0} = \frac{2K}{2} = K$$
   On a donc $K = 1$. L'unique solution vérifiant la condition initiale est :
   $$x_0(t) = \frac{2 + 2t + t^2}{2(1+t)} e^{-t}$$
   *(Note : $2 + 2t + t^2 = 2(1+t) + t^2$, donc $x_0(t) = \left(1 + \frac{t^2}{2(1+t)}\right)e^{-t}$)*.

### Partie III : Étude asymptotique et analyse critique du modèle
5. Calculons la limite de $x_0(t)$ en $+\infty$ :
   $$x_0(t) = \left(1 + \frac{t^2}{2(1+t)}\right)e^{-t} = e^{-t} + \frac{t^2}{2(1+t)}e^{-t}$$
   Par croissances comparées, $\lim_{t \to +\infty} e^{-t} = 0$ et $\lim_{t \to +\infty} \frac{t^2}{2(1+t)}e^{-t} = 0$.  
   Par conséquent :
   $$\lim_{t \to +\infty} x_0(t) = 0$$

6. **Analyse critique des limites du modèle :**
   * **Non-négativité et cohérence physique :** Mathématiquement, l'équation linéaire $(E)$ n'impose aucune barrière de positivité intrinsèque si le second membre ou les conditions initiales conduisaient (pour d'autres choix de paramètres ou de forçages) à des valeurs négatives. Heureusement, pour $x_0(t)$, comme $2+2t+t^2 > 0$ et $1+t > 0$ sur $[0, +\infty[$, $x_0(t) > 0$. Cependant, un modèle linéaire ne peut pas rendre compte de saturations ou de bilans de matière stœchiométriques complexes (par exemple, des équilibres réversibles où la concentration est bornée supérieurement par la quantité initiale de réactif introduit).
   * **Domaine de valadité du modèle ouvert :** Le terme $\frac{1}{1+t}$ traduit mathématiquement un taux de renouvellement du réacteur qui s'annule temporellement de manière hyperbolique. Physiquement, un tel réacteur ouvert verrait son débit d'entrée/sortie s'annuler, ce qui est une modélisation idéalisée. De plus, à très long terme ($t \to +\infty$), le modèle prédit une décroissance exponentielle vers $0$ dictée par le terme $e^{-t}$, négligeant les fluctuations statistiques microscopiques (bruit thermique ou fluctuations de débit) inévitables dans un dispositif expérimental réel.