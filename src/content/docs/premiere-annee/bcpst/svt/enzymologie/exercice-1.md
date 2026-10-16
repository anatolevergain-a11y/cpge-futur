---
title: 'Exercice 1 : Modèle de Michaelis-Menten'
description: 'Problème d entraînement type concours officiel.'
---

# Problème : Analyse cinétique d'une enzyme impliquée dans le métabolisme énergétique et limites du modèle de Michaelis-Menten

**Filière :** BCPST  
**Matière :** Sciences de la Vie et de la Terre  
Chapitre: ** Cinétique enzymatique  

---

## 1. Énoncé

Dans le cadre de l'étude du métabolisme cellulaire, on s'intéresse à une enzyme $E$ catalysant la conversion d'un substrat $S$ en un produit $P$. L'étude expérimentale est menée à température et pH constants. On fait l'hypothèse que la réaction suit le modèle classique de Michaelis-Menten selon le mécanisme réactionnel suivant :

$$E + S \underset{k_{-1}}{\overset{k_{1}}{\rightleftharpoons}} ES \xrightarrow{k_2} E + P$$

Avec :
* $k_1$ : constante de vitesse de formation du complexe enzyme-substrat $ES$.
* $k_{-1}$ : constante de vitesse de dissociation du complexe $ES$ en $E$ et $S$.
* $k_2$ : constante de vitesse de formation du produit $P$ (étape limitante ou cinétiquement déterminante).

L'enzyme est introduite à une concentration totale [ $E_0$ ] constante et faible devant celle du substrat [ $S$ ].

---

## 2. Questions

1. **Rappel et modélisation :** Établir l'expression de la vitesse initiale de la réaction $v_i$ en fonction de la concentration en substrat $[S]$, de la constante de Michaelis $K_M$ et de la vitesse maximale $V_{max}$. On explicitera les hypothèses fondamentales nécessaires à cette démonstration (notamment l'approximation des états quasi-stationnaires).
2. **Exploitation graphique :** En déduire comment déterminer graphiquement $V_{max}$ et $K_M$ à partir d'une représentation de type Michaelis ($v_i = f([S])$) et préciser l'unité de $K_M$ ($\text{mol}\cdot\text{L}^{-1}$) et de $V_{max}$ ($\text{mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}$).
3. **Application numérique et analyse :** Pour une concentration en enzyme fixée à $[E_0] = 10^{-6}\text{ mol}\cdot\text{L}^{-1}$, les mesures expérimentales donnent un $K_M$ de $2\cdot\text{M}^{-4}\text{ mol}\cdot\text{L}^{-1}$ (correction : $2\cdot 10^{-4}\text{ mol}\cdot\text{L}^{-1}$) et une $V_{max}$ de $10^{-3}\text{ mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}$. 
   * Calculer la valeur de $k_2$ (aussi appelée nombre de turnover ou $k_{cat}$).
   * Calculer la vitesse initiale $v_i$ lorsque $[S] = K_M$.
4. **Analyse critique et limites :** Le modèle de Michaelis-Menten est mis en défaut dans certaines conditions physiologiques ou in vitro. Proposer une analyse critique rigoureuse en citant au moins trois limites majeures de ce modèle, tant sur le plan physico-chimique que biologique.

---

## 3. Pistes et indications

* **Q1 :** Penser à exprimer la conservation de l'enzyme ($[E_0] = [E] + [ES]$) et à appliquer l'AEQS (Approximation des États Quasi-Stationnaires) sur l'intermédiaire réactionnel $ES$ ($\frac{d[ES]}{dt} \approx 0$).
* **Q2 :** Observer le comportement de l'équation lorsque $[S] \to +\infty$ et lorsque $[S] = K_M$.
* **Q3 :** Le nombre de turnover $k_{cat}$ relie $V_{max}$ et $[E_0]$ par la relation $V_{max} = k_{cat}[E_0]$.
* **Q4 :** Réfléchir aux hypothèses initiales : que se passe-t-il si $[S]$ n'est plus grand devant $[E_0]$ ? Si l'enzyme est oligomérique ? S'il y a des inhibiteurs ou des produits en forte concentration ?

---

## 4. Corrigé pas à pas

### Question 1 : Établissement de l'équation de Michaelis-Menten
* **Hypothèses :** 
  1. Étude de la vitesse *initiale* $v_i$ : la concentration en produit $[P] \approx 0$, la réaction inverse ($P \to S$) est négligeable.
  2. Hypothèse de Brigg et Haldane (AEQS) : après un transitoire très court, la concentration du complexe $[ES$] varie très peu au cours du temps : $\frac{d[ES]}{dt} \approx 0$.
  3. $[S]_0 \gg [E_0]$, ce qui fait que la concentration en substrat libre $[S]$ reste assimilable à la concentration introduite $[S]_0$ au début de la réaction.

* **Démonstration :**
  La vitesse de formation du produit est :
  $$v_i = \frac{d[P]}{dt} = k_2[ES]$$

  La vitesse de variation du complexe $ES$ est :
  $$\frac{d[ES]}{dt} = k_1[E][S] - k_{-1}[ES] - k_2[ES] = 0$$

  En utilisant la conservation de l'enzyme $[E_0] = [E] + [ES]$, soit $[E] = [E_0] - [ES]$ :
  $$k_1([E_0] - [ES])[S] - (k_{-1} + k_2)[ES] = 0$$
  $$k_1[E_0][S] - k_1[ES][S] - (k_{-1} + k_2)[ES] = 0$$
  $$[ES](k_1[S] + k_{-1} + k_2) = k_1[E_0][S]$$
  $$[ES] = \frac{[E_0][S]}{\frac{k_{-1} + k_2}{k_1} + [S]}$$

  En posant $K_M = \frac{k_{-1} + k_2}{k_1}$ (constante de Michaelis) :
  $$[ES] = \frac{[E_0][S]}{K_M + [S]}$$

  D'où l'expression de la vitesse initiale :
  $$v_i = k_2[ES] = \frac{k_2[E_0][S]}{K_M + [S]}$$

  Lorsque $[S] \to +\infty$, l'enzyme est saturée ($[ES] \approx [E_0]$), la vitesse est maximale : $V_{max} = k_2[E_0]$.  
  On obtient l'équation finale :
  $$v_i = \frac{V_{max}[S]}{K_M + [S]}$$

---

### Question 2 : Exploitation graphique
* **$V_{max}$ :** Sur une représentation $v_i = f([S])$, la courbe présente une asymptote horizontale lorsque $[S]$ tend vers l'infini. La valeur de cette asymptote correspond à $V_{max}$ ($\text{mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}$).
* **$K_M$ :** $K_M$ correspond graphiquement à la concentration en substrat pour laquelle la vitesse initiale est égale à la moitié de la vitesse maximale ($v_i = \frac{V_{max}}{2}$). Son unité est celle d'une concentration, soit le $\text{mol}\cdot\text{L}^{-1}$.

---

### Question 3 : Application numérique
* **Calcul de $k_2$ (ou $k_{cat}$) :**
  On sait que $V_{max} = k_2[E_0]$, donc :
  $$k_2 = \frac{V_{max}}{[E_0]} = \frac{10^{-3}\text{ mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}}{10^{-6}\text{ mol}\cdot\text{L}^{-1}} = 10^3\text{ s}^{-1}$$
  Le nombre de turnover est de $1000\text{ s}^{-1}$ (chaque molécule d'enzyme transforme 1000 molécules de substrat par seconde à saturation).

* **Calcul de $v_i$ pour $[S] = K_M$ :**
  Si $[S] = K_M$, alors :
  $$v_i = \frac{V_{max}K_M}{K_M + K_M} = \frac{V_{max}}{2}$$
  $$v_i = \frac{10^{-3}}{2} = 5\cdot 10^{-4}\text{ mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}$$

---

### Question 4 : Analyse critique et limites du modèle de Michaelis-Menten
Le modèle de Michaelis-Menten, bien que fondamental, repose sur des hypothèses simplificatrices qui ne sont pas toujours vérifiées in vivo. On peut citer quatre limites majeures :

1. **La condition de stœchiométrie initiale ($[S]_0 \gg [E_0]$) :** In vivo, les concentrations enzymatiques peuvent être du même ordre de grandeur que celles des substrats (phénomène de compartimentage ou de régulation métabolique). Le complexe $ES$ ne peut plus être négligé dans le bilan global de conservation du substrat.
2. **L'enzymologie coopérative (Allostérie) :** Le modèle suppose un site actif unique et indépendant par enzyme. Or, de nombreuses enzymes régulatrices oligomériques (comme l'hémoglobine pour les protéines, ou la Phosphofructokinase-1 pour les enzymes) présentent des cinétiques sigmoïdes (coopérativité positive ou négative) régies par le modèle de Monod-Wyman-Changeux (MWC) et non une hyperbole michaelienne.
3. **La réversibilité de la réaction et l'accumulation des produits :** Le modèle suppose que $[P] \approx 0$ (mesure de vitesse *initiale*). Dans le métabolisme cellulaire stationnaire, les produits s'accumulent et peuvent inhiber l'enzyme (inhibition par le produit) ou la réaction inverse devient non négligeable.
4. **La complexité des mécanismes réactionnels multi-substrats :** Le modèle de base ne traite qu'un substrat et un produit. Or, la majorité des enzymes cellulaires impliquent des réactions à deux substrats ou plus (mécanismes ping-pong ou séquentiels, ex: kinases avec ATP et un substrat phosphorylé).