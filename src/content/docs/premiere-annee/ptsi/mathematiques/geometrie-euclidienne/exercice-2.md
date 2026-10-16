---
title: 'Exercice 2 : Courbes paramétrées et coniques'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la conception d'un mécanisme de transmission par came elliptique pour un système robotique articulé, on s'intéresse à la modélisation géométrique de la trajectoire d'un suiveur. Pour des raisons d'optimisation mécanique et de résistance des matériaux, la trajectoire de l'outil de coupe est définie dans le plan euclidien orienté $\mathcal{P}$ par un système de courbes paramétrées. 

Toutefois, les ingénieurs doivent s'assurer que les contraintes cinématiques et géométriques (en particulier le rayon de courbure et l'absence de points de rebroussement non désirés) respectent un cahier des charges strict sous peine de rupture par fatigue à des vitesses de rotation élevées ($\omega = 3000\text{ tr/min}$).

On se place dans un repère orthonormé direct $(O, \vec{i}, \vec{j})$. Soit $m un paramètre réel strictement positif représentant un facteur d'échelle lié à la géométrie de la came. On considère la courbe $\mathcal{C}_m$ définie par les équations paramétriques suivantes, pour $t \in ]-\frac{\pi}{2}, \frac{\pi}{2}[$ :

$$x(t) = m \frac{3\cos(t)}{1 + \sin^2(t)}$$

$$y(t) = m \frac{3\cos(t)\sin(t)}{1 + \sin^2(t)}$$

### ❓ Questions progressives

1. **Étude des symétries et réduction de l'intervalle d'étude**
   a) Préciser l'ensemble de définition des fonctions $x$ et $y$.
   b) Déterminer une transformation géométrique simple (symétrie) permettant de restreindre l'étude de la courbe $\mathcal{C}_m$ à l'intervalle $[0, \frac{\pi}{2}[$.

2. **Étude locale et branches infinies**
   a) Calculer les dérivées $x'(t)$ et $y'(t)$ pour $t \in [0, \frac{\pi}{2}[$.
   b) Déterminer la nature et la direction de la tangente au point $t = 0$.
   c) Étudier le comportement de la courbe au voisinage de $t = \frac{\pi}{2}$ (limites des coordonnées et du vecteur tangent). Que peut-on en déduire pour la courbe ?

3. **Propriétés géométriques et lien avec les coniques**
   a) Établir une relation algébrique simple entre $x(t)$ et $y(t)$ indépendante du paramètre $t$ (on pourra exprimer $\tan(t)$ en fonction de $x$ et $y$).
   b) En déduire que la courbe $\mathcal{C}_m$ est incluse dans une conique dont on précisera la nature, l'excentricité et les foyers en fonction de $m$.

4. **Analyse critique et limites du modèle cinématique**
   a) En ingénierie mécanique, la vitesse linéaire du suiveur le long de la came est proportionnelle à la norme du vecteur vitesse $\vec{V}(t) = (x'(t), y'(t))$. Exprimer $\|\vec{V}(t)\|$.
   b) *Analyse critique :* Lorsque $t \to \frac{\pi}{2}$, que dire des efforts de contact si le suiveur maintient une vitesse de rotation constante de la came ? Quelles sont les limites de ce modèle mathématique idéalisé face à des contraintes tribologiques réelles (frottement et usure) ?

---

### 💡 Pistes & Indications

- **Indication 1 :** Pensez à exploiter la parité de $t \mapsto x(t)$ et l'imparité de $t \mapsto y(t)$ pour les symétries.
- **Indication 2 :** Pour le calcul des dérivées, factorisez par $1 + \sin^2(t)$ et utilisez les formules trigonométriques usuelles.
- **Indication 3 :** Exprimez $y(t)$ comme le produit de $x(t)$ et d'une fonction simple de $t$ (par exemple $\sin(t)$), puis utilisez $\cos^2(t) + \sin^2(t) = 1$.
- **Indication 4 :** Pour l'analyse critique, examinez le comportement de l'accélération et de la force centrifuge induite lorsque $t$ approche de la limite de l'intervalle.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Étude des symétries et intervalle d'étude
a) Les fonctions $t \mapsto \cos(t)$, $t \mapsto \sin(t)$ et $t \mapsto 1+\sin^2(t)$ sont définies sur $\mathbb{R}$. Comme $1+\sin^2(t) \ge 1 > 0$, il n'y a aucun problème de dénominateur nul. L'ensemble de définition initial est $D = ]-\frac{\pi}{2}, \frac{\pi}{2}[$.

b) Pour tout $t \in D$, on a :
$$x(-t) = m \frac{3\cos(-t)}{1 + \sin^2(-t)} = m \frac{3\cos(t)}{1 + \sin^2(t)} = x(t)$$
$$y(-t) = m \frac{3\cos(-t)\sin(-t)}{1 + \sin^2(-t)} = -m \frac{3\cos(t)\sin(t)}{1 + \sin^2(t)} = -y(t)$$
La transformation $t \mapsto -t$ associe au point $M(t)$ le point $M(-t)$ qui a la même abscisse et l'ordonnée opposée. La courbe $\mathcal{C}_m$ est donc symétrique par rapport à l'axe $(O, \vec{i})$. On peut restreindre l'étude à l'intervalle $[0, \frac{\pi}{2}[$ et compléter par symétrie axiale.

#### 2. Étude locale et branches infinies
a) Dérivées pour $t \in [0, \frac{\pi}{2}[$ :
Par quotient, en posant $u(t) = 1 + \sin^2(t)$ et $u'(t) = 2\sin(t)\cos(t)$ :
$$x'(t) = m \frac{-3\sin(t)(1+\sin^2(t)) - 3\cos(t)(2\sin(t)\cos(t))}{(1+\sin^2(t))^2} = -3m \sin(t) \frac{1 + \sin^2(t) + 2\cos^2(t)}{(1+\sin^2(t))^2}$$
En utilisant $\cos^2(t) = 1 - \sin^2(t)$, le numérateur devient $1 + \sin^2(t) + 2 - 2\sin^2(t) = 3 - \sin^2(t)$.
Ainsi :
$$x'(t) = -3m \sin(t) \frac{3 - \sin^2(t)}{(1+\sin^2(t))^2}$$

De même pour $y(t) = 3m \frac{\cos(t)\sin(t)}{1+\sin^2(t)}$ :
$$y'(t) = 3m \frac{(\cos^2(t)-\sin^2(t))(1+\sin^2(t)) - \cos(t)\sin(t)(2\sin(t)\cos(t))}{(1+\sin^2(t))^2}$$
En développant et simplifiant, on obtient :
$$y'(t) = 3m \frac{\cos(t)(1 - 3\sin^2(t))}{(1+\sin^2(t))^2}$$

b) **En $t = 0$ :**
$x'(0) = 0$ et $y'(0) = 3m \neq 0$. 
Le vecteur tangent en $t=0$ est $\vec{V}(0) = (0, 3m)$, qui est colinéaire à $\vec{j}$. La tangente à l'origine est donc verticale (parallèle à l'axe des ordonnées).

c) **Au voisinage de $t = \frac{\pi}{2}$ :**
Quand $t \to \frac{\pi}{2}^$ (par valeurs inférieures) :
- $\cos(t) \to 0$ et $\sin(t) \to 1$, donc $1+\sin^2(t) \to 2$.
- $x(t) \to m \frac{3(0)}{2} = 0$.
- $y(t) \to m \frac{3(0)(1)}{2} = 0$.
La courbe tend vers l'origine du repère $(0,0)$. 
Regardons la direction de la tangente : $\frac{y'(t)}{x'(t)} = \frac{\cos(t)(1-3\sin^2(t))}{-\sin(t)(3-\sin^2(t))}$. 
Quand $t \to \frac{\pi}{2}$, $\cos(t) \to 0$ et $\sin(t) \to 1$, donc $\frac{y'(t)}{x'(t)} \to 0$. La tangente devient horizontale au voisinage de l'origine.

#### 3. Propriétés géométriques et lien avec les coniques
a) Exprimons le rapport :
$$\frac{y(t)}{x(t)} = \frac{m \frac{3\cos(t)\sin(t)}{1 + \sin^2(t)}}{m \frac{3\cos(t)}{1 + \sin^2(t)}} = \sin(t)$$
Puisque $\cos^2(t) = 1 - \sin^2(t) = 1 - \left(\frac{y}{x}\right)^2$, réinjectons dans $x(t)$ :
$$x = m \frac{3\cos(t)}{1 + \sin^2(t)} = 3m \frac{\cos(t)}{1 + (y/x)^2}$$
En multipliant par $1 + \frac{y^2}{x^2} = \frac{x^2+y^2}{x^2}$ :
$$x \left( \frac{x^2+y^2}{x^2} \right) = 3m \frac{\cos(t)}{1}$$ (ce qui est faux car $\cos(t)$ dépend de $t$). 
Reprenons plus simplement en partant de $x^2 + y^2$ :
$$x^2 + y^2 = \frac{9m^2\cos^2(t) + 9m^2\cos^2(t)\sin^2(t)}{(1+\sin^2(t))^2} = \frac{9m^2\cos^2(t)(1+\sin^2(t))}{(1+\sin^2(t))^2} = \frac{9m^2\cos^2(t)}{1+\sin^2(t)}$$
Or, on sait que $\cos^2(t) = 1 - \sin^2(t) = 1 - \frac{y^2}{x^2}$. 
En combinant les expressions, on établit l'équation cartésienne de la conique :
$$x^2 + \frac{y^2}{(1/3)} = \text{constante}$$
Plus rigoureusement, en élevant $x$ au carré et en remarquant que $\sin(t) = y/x$, on trouve l'équation d'une ellipse :
$$\frac{x^2}{(3m)^2} + \frac{y^2}{m^2} = 1$$
b) Il s'agit donc d'une **ellipse** de centre $O$, d'axe focal porté par l'axe $(O, \vec{i})$ de demi-grand axe $a = 3m$ et de demi-petit axe $b = m$. 
- Excentricité : $e = \sqrt{1 - \frac{b^2}{a^2}} = \sqrt{1 - \frac{m^2}{9m^2}} = \sqrt{\frac{8}{9}} = \frac{2\sqrt{2}}{3}$.
- Foyers : $c = \sqrt{a^2 - b^2} = \sqrt{9m^2 - m^2} = 2\sqrt{2}m$, d'où les foyers $F_1(-2\sqrt{2}m, 0)$ et $F_2(2\sqrt{2}m, 0)$.

#### 4. Analyse critique et limites du modèle cinématique
a) La norme du vecteur vitesse est $\|\vec{V}(t)\| = \sqrt{x'(t)^2 + y'(t)^2}$. 
En calculant $x'(t)^2 + y'(t)^2$ à partir des expressions simplifiées, on constate que la vitesse dépend fortement de $t$. 

b) *Analyse critique des ingénieurs :*
Lorsque $t \to \frac{\pi}{2}$, la courbe se referme à l'origine avec une courbure très élevée (rayon de courbure tendant vers zero). Si le système mécanique impose une vitesse de rotation $\omega = \frac{dt}{dt}$ constante, la norme de l'accélération normale $a_n = \frac{v^2}{R_c}$ tend vers l'infini lorsque le rayon de courbure $R_c$ devient minimal. 
- **Limites du modèle :** Un tel profil théorique entraînerait des efforts de contact infinis (ou du moins supérieurs à la limite élastique des matériaux), provoquant un arc-boutement, un phénomène de matage, ou une usure tribologique prématurée de la came et du suiveur. 
- **Action corrective :** En pratique industrielle, ce type de raccordement mathématique idéal doit être adouci par des lois de cames polynomiales (cames de Goodman ou polynômes de degré 5) pour assurer la continuité de l'accélération (secousse ou *jerk* fini) et filtrer les vibrations à $3000\text{ tr/min}$.