---
title: 'Exercice 1 : Courbes paramétrées'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude d'une courbe paramétrée unicursalement

En tant qu'examinateur de concours CPGE (filière PT), je vous propose ce problème guidé conçu pour tester votre rigueur et votre maîtrise des outils d'analyse et de géométrie différentielle appliqués aux courbes paramétrées.

---

## I. Préambule et Objectifs

L'objectif de ce problème est d'étudier la courbe $\Gamma$ définie par les relations paramétriques suivantes, pour $t \in \mathbb{R} \setminus \{-1, 1\}$ :
$$
\begin{cases}
x(t) = \frac{t^2}{t^2 - 1} \\
y(t) = \frac{t^3}{t^2 - 1}
\end{cases}
$$

On note $M(t)$ le point de coordonnées $(x(t), y(t))$ dans un repère orthonormal $(O, \vec{i}, \vec{j})$.

---

## II. Questions et Corrigé pas à pas

### Partie A : Domaines de définition et symétries

**Question 1.** Préciser l'ensemble de définition $\mathcal{D}$ des fonctions $x$ et $y$, et étudier les éventuelles symétries de la courbe $\Gamma$ afin de réduire l'intervalle d'étude.

*Éléments de correction :*
Les fonctions $x$ et $y$ sont définies tant que le dénominateur $t^2 - 1 \neq 0$, c'est-à-dire $t \notin \{-1, 1\}$.
L'ensemble de définition est donc $\mathcal{D} = \mathbb{R} \setminus \{-1, 1\} = ]-\infty, -1[ \cup ]-1, 1[ \cup ]1, +\infty[$.

Étudions la transformation $t \mapsto -t$ :
$$
x(-t) = \frac{(-t)^2}{(-t)^2 - 1} = \frac{t^2}{t^2 - 1} = x(t)
$$
$$
y(-t) = \frac{(-t)^3}{(-t)^2 - 1} = \frac{-t^3}{t^2 - 1} = -y(t)
$$
Ainsi, pour tout $t \in \mathcal{D}$, on a :
$$
\begin{cases}
x(-t) = x(t) \\
y(-t) = -y(t)
\end{cases}
$$
Conclusion: * La courbe $\Gamma$ est symétrique par rapport à l'axe des abscisses $(O, \vec{i})$. Cette symétrie permet de restreindre l'étude de la courbe à l'intervalle $\mathcal{D}_1 = [0, 1[ \cup ]1, +\infty[$, puis de compléter par symétrie axiale pour les valeurs négatives de $t$.

---

### Partie B : Variations conjointes et branches infinies

**Question 2.** Calculer les dérivées $x'(t)$ et $y'(t)$ pour $t \in \mathcal{D}$. Dresser le tableau de variations conjointes de $x$ et $y$ sur l'intervalle d'étude réduit.

*Éléments de correction :*
Par quotients de fonctions dérivables sur $\mathcal{D}$, $x$ et $y$ sont de classe $\mathcal{C}^\infty$ sur $\mathcal{D}$.
$$
x'(t) = \frac{2t(t^2 - 1) - t^2(2t)}{(t^2 - 1)^2} = \frac{2t^3 - 2t - 2t^3}{(t^2 - 1)^2} = \frac{-2t}{(t^2 - 1)^2}
$$
$$
y'(t) = \frac{3t^2(t^2 - 1) - t^3(2t)}{(t^2 - 1)^2} = \frac{3t^4 - 3t^2 - 2t^4}{(t^2 - 1)^2} = \frac{t^2(t^2 - 3)}{(t^2 - 1)^2}
$$

*Signe des dérivées sur $\mathcal{D}_1 = [0, 1[ \cup ]1, +\infty[$ :*
- Pour $x'(t)$ : Le dénominateur $(t^2 - 1)^2$ est strictement positif sur $\mathcal{D}$. Le signe de $x'(t)$ est donc celui de $-2t$.
  - Sur $[0, 1[$, $x'(t) \le 0$ (avec $x'(0) = 0$). Donc $x$ est décroissante.
  - Sur $i, +\infty[$, $x'(t) < 0$. Donc $x$ est strictement décroissante.
- Pour $y'(t)$ : Le signe dépend de $t^2 - 3$, soit $(t-\sqrt{3})(t+\sqrt{3})$. Sur l'intervalle d'étude, la seule racine d'intérêt est $t = \sqrt{3}$ (car $\sqrt{3} > 1$).
  - Sur $[0, 1[$, $t^2 - 3 < 0$, donc $y'(t) < 0$ (sauf en $0$ où $y'(0) = 0$). $y$ est décroissante.
  - Sur $]1, \sqrt{3}[$, $y'(t) < 0$ ($y$ décroissante).
  - En $t = \sqrt{3}$, $y'(\sqrt{3}) = 0$ (tangente horizontale).
  - Sur $]\sqrt{3}, +\infty[$, $y'(t) > 0$ ($y$ croissante).

**Question 3.** Étudier les limites aux bornes de $\mathcal{D}$ et préciser la nature des branches infinies.

*Éléments de correction :*
- **En $t \to 1$** (par valeurs inférieures et supérieures) :
  $\lim_{t \to 1} x(t) = +\infty$ et $\lim_{t \to 1} y(t) = +\infty$ (en valeur absolue selon les côtés).
  Plus précisément, $\lim_{t \to 1^\pm} x(t) = \pm\infty$ et $\lim_{t \to 1^\pm} y(t) = \pm\infty$.
  Calculons la direction asymptotique :
  $$
  \lim_{t \to 1} \frac{y(t)}{x(t)} = \lim_{t \to 1} \frac{t^3}{t^2} = \lim_{t \to 1} t = 1
  $$
  Calculons ensuite $y(t) - x(t)$ :
  $$
  y(t) - x(t) = \frac{t^3 - t^2}{t^2 - 1} = \frac{t^2(t-1)}{(t-1)(t+1)} = \frac{t^2}{t+1}
  $$
  À la limite lorsque $t \to 1$ :
  $$
  \lim_{t \to 1} (y(t) - x(t)) = \frac{1^2}{1+1} = \frac{1}{2}
  $$
Conclusion: * La droite d'équation $y = x + \frac{1}{2}$ est asymptote oblique à la courbe $\Gamma$ lorsque $t \to 1$ (et ce, des deux côtés).

- **En $t \to +\infty$** :
  $\lim_{t \to +\infty} x(t) = \lim_{t \to +\infty} \frac{t^2}{t^2(1 - 1/t^2)} = 1$
  $\lim_{t \to +\infty} y(t) = \lim_{t \to +\infty} \frac{t^3}{t^2(1 - 1/t^2)} = +\infty$
Conclusion: * La courbe admet une asymptote verticale d'équation $x = 1$ lorsque $t \to +\infty$.

---

### Partie C : Étude locale et Tracé

**Question 4.** Préciser la nature du point $M(0)$ et la tangente en ce point.

*Éléments de correction :*
En $t = 0$, on a $M(0) = (0, 0)$.
Les dérivées premières valent $x'(0) = 0$ et $y'(0) = 0$. Le point $M(0)$ est un point stationnaire.
Déterminons l'ordre de dérivation successif. Calculons les dérivées secondes :
$$
x''(t) = \frac{-2(t^2-1)^2 - (-2t) \cdot 2(t^2-1)(2t)}{(t^2-1)^4} = \frac{-2(t^2-1) + 8t^2}{(t^2-1)^3} = \frac{2t^2 + 2}{(t^2-1)^3}
$$
En $t = 0$ : $x''(0) = \frac{2}{(-1)^3} = -2$.
Pour $y''(t)$ :
$$
y'(t) = \frac{t^4 - 3t^2}{(t^2-1)^2}
$$
$$
y''(t) = \frac{(4t^3 - 6t)(t^2-1)^2 - (t^4 - 3t^2) \cdot 2(t^2-1)(2t)}{(t^2-1)^4}
$$
En $t = 0$ : $y''(0) = \frac{0 - 0}{1} = 0$.
Puisque le vecteur dérivé premier est nul et que le vecteur dérivé second $\vec{M''}(0) = (-2, 0)$ est non nul, la tangente en $M(0)$ est portée par le vecteur $\vec{M''}(0)$, c'est-à-dire l'axe $(O, \vec{i})$. Le point $M(0)$ est un point ordinaire (régulier pour l'ordre 2), c'est un rebroussement de première espèce ou un point d'inflexion selon le paramétrage, ici la pente change de direction verticalement, c'est un point de rebroussement horizontal (la tangente est horizontale).

---

## III. Analyse critique des résultats

En tant qu'examinateur, voici les points de vigilance et les reflexe méthodologiques attendus lors d'une épreuve en CPGE PT :

1. **Rigueur des domaines :** Oublier d'exclure $t = 1$ ou $t = -1$ entraîne immédiatement l'annulation de la question liée aux limites, car cela conduit à des formes indéterminées mal gérées ou à une division par zéro implicite.
2. **Technique de calcul de l'asymptote oblique :** L'obtention de la limite de $y(t) - x(t)$ demande une simplification algébrique rigoureuse (factorisation par $t-1$). Ne jamais se contenter d'un "développement limité" non justifié si le cours permet une factorisation directe rapide et exacte.
3. **Exploitation des symétries :** Mentionner explicitement la réduction de l'intervalle d'étude grâce à l'imparité de $y$ et la parité de $x$ valorise grandement la copie, montrant au jury une organisation méthodique propre aux ingénieurs issus de la filière PT.