---
title: 'Exercice 2 : Courbes paramétrées'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude géométrique et cinématique d'une cycloïde infléchie

## Énoncé

Le plan affine euclidien $\mathcal{P}$ est rapporté à un repère orthonormal direct $(O, \vec{i}, \vec{j})$. On considère la courbe $\mathcal{C}$ définie par la paramétrisation suivante, pour $t \in \mathbb{R}$:
$$
\begin{cases}
x(t) = R(t - \sin(t)) \\
y(t) = R(1 - \cos(t))
\end{cases}
$$
où $R > 0$ est un paramètre réel fixé. 

Ce problème se propose d'étudier les propriétés géométriques de cette courbe, d'analyser le comportement cinématique d'un point mobile s'y déplaçant, et enfin de porter un regard critique sur la pertinence de ce modèle mathématique dans une perspective de modélisation physique.

---

## Questions

### Partie I : Étude géométrique de la courbe
1. **Périodicité et symétries :** 
   Montrer que l'étude de la courbe $\mathcal{C}$ peut se restreindre à l'intervalle $[0, 2\pi]$. Préciser les transformations géométriques associées permettant de reconstituer la courbe entière.
2. **Branches infinies et points singuliers :**
   Déterminer les dérivées successives $\frac{dx}{dt}$ et $\frac{dy}{dt}$. Le point paramétré par $t=0$ est-il régulier ? Préciser la nature de ce point et la direction de la tangente en ce point.
3. **Tableau de variation et tracé :**
   Dresser le tableau joint des variations conjointes de $x(t)$ et $y(t)$ sur $[0, 2\pi]$. Tracer l'allure de la courbe $\mathcal{C}$.

### Partie II : Propriétés métriques et cinématiques
4. **Longueur d'arc :**
   Calculer la longueur $L$ d'une arche complète de la courbe $\mathcal{C}$ (correspondant à $t \in [0, 2\pi]$). On pourra utiliser l'identité trigonométrique $1 - \cos(t) = 2\sin^2\left(\frac{t}{2}\right)$.
5. **Rayon de courbure et développée :**
   Exprimer le vecteur vitesse $\vec{V}(t)$ et le vecteur accélération $\vec{A}(t)$ d'un point mobile $M(t)$ parcourant $\mathcal{C}$. En déduire le rayon de courbure $\rho(t)$ de la courbe en tout point régulier.

### Partie III : Analyse critique du modèle
6. **Limites physiques et mécaniques :**
   Dans le cadre de la modélisation de la chute d'un point matériel le long de cette courbe (problème de la brachistochrone), analyser les limites du modèle mathématique proposé, en particulier aux points de rebroussement ($t = 0 \pmod{2\pi}$). Discuter de la validité des hypothèses cinématiques et dynamiques.

---

## Pistes et Indications

* **Question 1 :** Penser à étudier les parités ou les translations par périodicité en observant $x(t+2\pi)$ et $y(t+2\pi)$.
* **Question 2 :** Calculez $\dot{x}(t)$ et $\dot{y}(t)$. Pour $t=0$, les dérivées s'annulent simultanément : il s'agit d'un point stationnaire (ou singulier). Utilisez un développement limité ou un argument de limite de pente $\frac{dy/dt}{dx/dt}$ lorsque $t \to 0$.
* **Question 4 :** L'élément de longueur infinitésimal est $ds = \sqrt{\dot{x}(t)^2 + \dot{y}(t)^2} dt$. Simplifiez soigneusement la racine carrée à l'aide de l'indication.
* **Question 6 :** Interpréter physiquement ce qui se passe géométriquement en $t=0$ (non-dérivabilité de la trajectoire, discontinuité de la courbure ou de la vitesse tangentielle lors d'un choc idéal).

---

## Corrigé pas à pas

### Partie I : Étude géométrique de la courbe

1. **Périodicité et symétries :**
   On remarque que :
   $$
   \begin{cases}
   x(t+2\pi) = R(t + 2\pi - \sin(t+2\pi)) = x(t) + 2\pi R \\
   y(t+2\pi) = R(1 - \cos(t+2\pi)) = y(t)
   \end{cases}
   $$
   La fonction $y$ est $2\pi$-périodique, tandis que $x$ subit une translation de $2\pi R$ par période. On peut donc restreindre l'étude à l'intervalle $[0, 2\pi]$ et obtenir la courbe entière par translations successives de vecteur $2\pi R \vec{i}$.
   De plus, en étudiant le changement de paramètre $t \mapsto -t$ :
   $$
   \begin{cases}
   x(-t) = -x(t) \\
   y(-t) = y(t)
   \end{cases}
   $$
   La courbe présente une symétrie par rapport à l'axe des ordonnées $(Oy)$ pour le point $t=0$.

2. **Branches infinies et points singuliers :**
   Calculons les dérivées premières :
   $$
   \dot{x}(t) = R(1 - \cos(t)), \quad \dot{y}(t) = R\sin(t)
   $$
   Pour $t = 0$ (ou $t = 2\pi$), on a $\dot{x}(0) = 0$ et $\dot{y}(0) = 0$. Le point $M(0)$ est donc un **point stationnaire** (ou singulier).
   Pour déterminer la direction de la tangente en ce point, étudions la limite de la pente de la sécante lorsque $t \to 0^+$ :
   $$
   \frac{y(t) - y(0)}{x(t) - x(0)} = \frac{R(1 - \cos(t))}{R(t - \sin(t))} = \frac{2\sin^2(t/2)}{t - \sin(t)}
   $$
   À l'aide des développements limités au voisinage de $0$ :
   $$
   1 - \cos(t) \underset{0}{\sim} \frac{t^2}{2}, \quad t - \sin(t) \underset{0}{\sim} \frac{t^3}{6}
   $$
   On obtient :
   $$
   \frac{dy}{dx} \sim \frac{t^2/2}{t^3/6} = \frac{3}{t} \xrightarrow[t \to 0^+]{} +\infty
   $$
   La tangente en $M(0)$ est donc verticale (dirigée selon $\vec{j}$).

3. **Tableau de variation et tracé :**
   - $\dot{x}(t) = R(1-\cos(t)) \ge 0$ sur $[0, 2\pi]$. $x(t)$ est strictement croissante, s'annulant en $0$ ($x(0)=0$) pour atteindre $2\pi R$ en $t=2\pi$.
   - $\dot{y}(t) = R\sin(t)$ est du signe de $\sin(t)$, donc positif sur $]0, \pi[$ et négatif sur $]\pi, 2\pi[$. $y(0)=0$, $y(\pi)=2R$, et $y(2\pi)=0$.
   La courbe est une arche de **cycloïde**.

---

### Partie II : Propriétés métriques et cinématiques

4. **Longueur d'arc :**
   L'élément de longueur d'arc est donné par $ds = \sqrt{\dot{x}(t)^2 + \dot{y}(t)^2} dt$.
   Calculons le radicande :
   $$
   \dot{x}(t)^2 + \dot{y}(t)^2 = R^2(1 - \cos(t))^2 + R^2\sin^2(t) = R^2(1 - 2\cos(t) + \cos^2(t) + \sin^2(t)) = 2R^2(1 - \cos(t))
   $$
   En utilisant l'indication $1 - \cos(t) = 2\sin^2\left(\frac{t}{2}\right)$ :
   $$
   \dot{x}(t)^2 + \dot{y}(t)^2 = 4R^2 \sin^2\left(\frac{t}{2}\right)
   $$
   Sur l'intervalle $[0, 2\pi]$, $\sin\left(\frac{t}{2}\right) \ge 0$, donc :
   $$
   \sqrt{\dot{x}(t)^2 + \dot{y}(t)^2} = 2R \sin\left(\frac{t}{2}\right)
   $$
   La longueur $L$ d'une arche est alors :
   $$
   L = \int_{0}^{2\pi} 2R \sin\left(\frac{t}{2}\right) dt = \left[ -4R \cos\left(\frac{t}{2}\right) \right]_{0}^{2\pi} = -4R(\cos(\pi) - \cos(0)) = -4R(-1 - 1) = 8R
   $$

5. **Rayon de courbure :**
   Le vecteur vitesse est $\vec{V}(t) = \dot{x}(t)\vec{i} + \dot{y}(t)\vec{j} = R(1-\cos(t))\vec{i} + R\sin(t)\vec{j}$.
   Le vecteur accélération est $\vec{A}(t) = \ddot{x}(t)\vec{i} + \ddot{y}(t)\vec{j} = R\sin(t)\vec{i} + R\cos(t)\vec{j}$.
   Le rayon de courbure $\rho(t)$ pour une courbe paramétrée plane est donné par la formule :
   $$
   $\rho(t) = \frac{(\dot{x}^2 + \dot{y}^2)^{3/2}}{\dot{x}\ddot{y} - \dot{y}\ذddot{x}}$ \quad \text{(ou $\dot{y}\ddot{x}$ selon le sens)}
   $$
   Calculons le dénominateur $D = \dot{x}\ddot{y} - \dot{y}\ddot{x}$ :
   $$
   D = R(1-\cos(t)) \cdot R\cos(t) - R\sin(t) \cdot R\sin(t) = R^2(\cos(t) - \cos^2(t) - \sin^2(t)) = R^2(\cos(t) - 1)
   $$
   La valeur absolue du dénominateur est $|D| = R^2(1 - \cos(t))$.
   Le numérateur vaut $\left(4R^2 \sin^2\left(\frac{t}{2}\right)\right)^{3/2} = 8R^3 \sin^3\left(\frac{t}{2}\right)$ (en supposant $t \in ]0, 2\pi[$).
   Ainsi :
   $$
   \rho(t) = \frac{8R^3 \sin^3\left(\frac{t}{2}\right)}{R^2(1 - \cos(t))} = \frac{8R^3 \sin^3\left(\frac{t}{2}\right)}{2R^2 \sin^2\left(\frac{t}{2}\right)} = 4R \sin\left(\frac{t}{2}\right)
   $$

---

### Partie III : Analyse critique du modèle

6. **Limites physiques et mécaniques :**
   * **Analyse de la singularité ($t = 0 \pmod{2\pi}$) :** 
     Le modèle mathématique présente des points de rebroussements cuspidaux (points stationnaires) où le rayon de courbure $\rho(0)$ s'annule. Géométriquement, la courbe y est non-dérivable au sens des arcs réguliers.
   * **Limites du modèle physique (Brachistochrone / Pendule) :**
     Si l'on interprète ce système comme la trajectoire contrainte d'un point matériel (masse $m$) soumis à la gravité, plusieurs incohérences physiques apparaissent :
     1. **Discontinuité de la vitesse / Choc cinématique :** Un mobile parcourant la cycloïde rebrousse chemin ou subit une variation instantanée de la direction de sa vitesse tangentielle en $t=0$, ce qui impliquerait des forces de réaction infinies de la part du support (venant rompre l'hypothèse de liaison parfaite sans rebond).
     2. **Validité des efforts de liaison :** La force normale exercée par le support pour maintenir le point sur la trajectoire dépend de l'accélération normale $a_n = \frac{v^2}{\rho}$. Puisque $\rho \to 0$ lorsque $t \to 0$, la force normale tendrait vers l'infini pour une vitesse non nulle, provoquant la destruction réelle du dispositif ou le décollement immédiat du mobile (violation de la liaison unilatérale ou bilatérale rigide).
     3. **Frottements et usure :** La courbure infinie en un point géométrique ponctuel n'a pas d'existence physique concrète ; tout support réel possède un rayon de raccordement minimal non nul, ce qui lisse la singularité et modifie drastiquement le comportement dynamique réel par rapport au modèle idéal d'Euleur-Lagrange.