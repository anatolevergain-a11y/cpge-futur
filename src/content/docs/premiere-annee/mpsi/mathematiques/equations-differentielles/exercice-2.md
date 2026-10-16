---
title: 'Exercice 2 : Variation de la constante'
description: 'Problème d entraînement type concours.'
---

# Problème : Étude qualitative et quantitative d'une équation différentielle linéaire perturbée par variation de la constante

**Matière :** Mathématiques (Filière MPSI)  
Chapitre: ** Équations différentielles linéaires  
**Thème :** Méthode de variation de la constante et analyse asymptotique  

---

## 1. Énoncé

Soit $I = ]0, +\infty[$. On considère l'équation différentielle linéaire du premier ordre avec second membre :
$$(E) \quad : \quad t y'(t) + y(t) = \frac{t}{1+t^2}$$

L'objectif de ce problème est de résoudre $(E)$ sur l'intervalle $I$ en utilisant la méthode de variation de la constante, puis d'analyser le comportement global des solutions ainsi que les limites physiques/mathématiques du modèle lorsque $t$ tend vers $+\infty$ ou $0^+$.

---

## 2. Questions

1. **Résolution de l'équation homogène :** 
   Déterminer l'ensemble des solutions sur l'intervalle $I$ de l'équation homogène associée à $(E)$, que l'on notera $(H)$ :
   $$(H) \quad : \quad t y'(t) + y(t) = 0$$

2. **Application de la méthode de variation de la constante :** 
   On cherche une solution particulière de $(E)$ sous la forme $y_p(t) = \frac{C(t)}{t}$, où $C$ est une fonction de classe $\mathcal{C}^1$ sur $I$. 
   Établir une équation différentielle vérifiée par $C'(t)$, puis en déduire une expression explicite de $y_p(t)$.

3. **Solution générale :** 
   Écrire l'expression générale des solutions de $(E)$ sur $I$. 
   Déterminer la solution unique $f$ de $(E)$ vérifiant la condition initiale $f(1) = \frac{\pi}{8} + \frac{\ln(2)}{2}$.

4. **Étude asymptotique et analyse critique du modèle :**
   * (a) Déterminer les limites de toutes les solutions de $(E)$ lorsque $t \to +\infty$. Que remarquez-vous vis-à-vis de la constante d'intégration ?
   * (b) **Analyse critique :** Si l'on interprétait ce modèle comme la régulation d'un système physique où $t$ représente le temps et $y(t)$ une quantité mesurée, que dire du comportement de $y(t)$ au voisinage de $0^+$ selon les solutions ? Le modèle mathématique est-il robuste face à des conditions initiales arbitraires en $t=0$ ?

---

## 3. Pistes et indications

* **Q1 :** Mettez l'équation sous la forme standard $y'(t) + a(t)y(t) = 0$ en divisant par $t$ (ce qui est licite car $t \in ]0, +\infty[$). Pensez aux primitives usuelles.
* **Q2 :** Injectez $y_p$ dans $(E)$ après avoir calculé sa dérivée. Simplifiez l'expression pour trouver $C'(t)$ directement.
* **Q3 :** La solution générale d'une équation linéaire avec second membre est la somme de la solution générale de $(H)$ et d'une solution particulière de $(E)$. Utilisez la condition initiale pour déterminer la constante.
* **Q4 :** Pour l'analyse critique, observez le terme général $\frac{K}{t}$ lorsque $t \to 0^+$ et $t \to +\infty$. Discutez de la divergence en $0$ pour $K \neq 0$.

---

## 4. Corrigé pas à pas

### 1. Résolution de l'équation homogène $(H)$
Pour $t \in ]0, +\infty[$, l'équation $(H)$ s'écrit sous forme normalisée :
$$y'(t) + \frac{1}{t} y(t) = 0$$
Une primitive de $a(t) = \frac{1}{t}$ sur $I$ est $A(t) = \ln(t)$. 
Les solutions de $(H)$ sur $I$ sont donc de la forme :
$$y_h(t) = K e^{-A(t)} = K e^{-\ln(t)} = \frac{K}{t}, \quad \text{avec } K \in \mathbb{R}$$

### 2. Méthode de variation de la constante
On cherche une solution particulière sous la forme $y_p(t) = \frac{C(t)}{t}$. 
Sa dérivée est :
$$y_p'(t) = \frac{C'(t)t - C(t)}{t^2} = \frac{C'(t)}{t} - \frac{C(t)}{t^2}$$
Substituons $y_p$ et $y_p'$ dans l'équation $(E)$ :
$$t \left( \frac{C'(t)}{t} - \frac{C(t)}{t^2} \right) + \frac{C(t)}{t} = \frac{t}{1+t^2}$$
En développant et simplifiant (les termes en $C(t)$ s'annulent, ce qui est la vérification que la méthode fonctionne) :
$$C'(t) = \frac{t}{1+t^2}$$
Intégrons cette expression pour trouver $C(t)$ :
$$C(t) = \int \frac{t}{1+t^2} dt = \frac{1}{2} \ln(1+t^2) + \text{constante}$$
En posant la constante d'intégration à $0$ (puisqu'on cherche *une* solution particulière), on obtient :
$$y_p(t) = \frac{\ln(1+t^2)}{2t}$$

### 3. Solution générale et condition initiale
La solution générale de $(E)$ sur $I$ est la somme de la solution générale de $(H)$ et de la solution particulière $y_p$ :
$$y(t) = \frac{K}{t} + \frac{\ln(1+t^2)}{2t}, \quad K \in \mathbb{R}$$
Appliquons la condition initiale $f(1) = \frac{\pi}{8} + \frac{\ln(2)}{2}$ :
$$f(1) = \frac{K}{1} + \frac{\ln(1+1^2)}{2(1)} = K + \frac{\ln(2)}{2}$$
On pose donc :
$$K + \frac{\ln(2)}{2} = \frac{\pi}{8} + \frac{\ln(2)}{2} \implies K = \frac{\pi}{8}$$
La solution unique recherchée est :
$$f(t) = \frac{\pi}{8t} + \frac{\ln(1+t^2)}{2t}$$

### 4. Étude asymptotique et analyse critique du modèle

* **(a) Comportement en $+\infty$ :**
  Considérons la solution générale $y(t) = \frac{K + \frac{1}{2}\ln(1+t^2)}{t}$. Par croissance comparée, $\lim_{t \to +\infty} \frac{\ln(1+t^2)}{t} = 0$, quel que soit $K \in \mathbb{R}$. 
  Par conséquent, **toutes** les solutions de $(E)$ convergent vers $0$ lorsque $t \to +\infty$. 
  *Remarque critique :* L'information portée par la constante $K$ s'efface complètement à long terme. Le système oublie totalement son état initial lorsque $t devient grand.

* **(b) Analyse critique des limites du modèle (Approche physique/systémique) :**
  Regardons le comportement au voisinage de $0^+$ :
  $$\lim_{t \to 0^+} y(t) = \lim_{t \to 0^+} \left( \frac{K}{t} + \frac{\ln(1+t^2)}{2t} \right)$$
  Comme $\frac{\ln(1+t^2)}{2t} \underset{t \to 0}{\sim} \frac{t^2}{2t} = \frac{t}{2} \to 0$, le comportement en $0^+$ est entièrement dicté par le terme $\frac{K}{t}$ :
  * Si $K = 0$, $y(0^+) = 0$ (le système est régulier).
  * Si $K \neq 0$, $|y(t)| \to +\infty$ lorsque $t \to 0^+$.

  **Limites du modèle :** 
  Du point de vue de la modélisation physique (par exemple, un phénomène de charge électrique ou thermique où $y$ représente une grandeur intensive), une divergence en $\frac{1}{t}$ (pôle d'ordre 1 en $0$) indique que le modèle mathématique linéaire perd toute pertiennce physique près de $t=0$ si la condition initiale n'est pas rigoureusement choisie ($K=0$). Le terme $t y'(t)$ dans l'équation $(E)$ provoque une singularité mathématique ("catastrophe de modélisation") : le modèle est extrêmement sensible aux perturbations initiales au voisinage de l'origine, révélant une **instabilité structurelle** face aux conditions aux limites en $0$.