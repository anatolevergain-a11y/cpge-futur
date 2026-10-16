---
title: 'Exercice 2 : Théorème d inversion locale'
description: 'Problème d entraînement type concours officiel.'
---

# Problème : Étude globale et locale d'un endomorphisme différentiable de $\mathbb{R}^2$

## Énoncé

Soit $f : \mathbb{R}^2 \to \mathbb{R}^2$ l'application définie pour tout $M = (x, y) \in \mathbb{R}^2$ par :
$$f(x, y) = \left( e^x \cos y - 1, e^x \sin y \right)$$

L'objectif de ce problème est d'étudier les propriétés différentielles de $f$, en particulier l'inversibilité locale via le Théorème d'Inversion Locale (TIL), d'analyser son comportement global (injectivité, surjectivité) et d'aborder les limites inhérentes à l'utilisation de tels outils topologiques et différentiels.

---

## Questions

### Partie I : Étude différentielle et Théorème d'Inversion Locale

1. Justifier que $f$ est de classe $\mathcal{C}^1$ sur $\mathbb{R}^2$ et calculer sa matrice jacobienne $J_f(x, y)$ en tout point $(x, y) \in \mathbb{R}^2$.
2. Calculer le jacobien de $f$, noté $\det J_f(x, y)$, en tout point de $\mathbb{R}^2$.
3. Déterminer l'ensemble $\Omega$ des points de $\mathbb{R}^2$ où $f$ est un $\mathcal{C}^1$-difféomorphismes local.
4. Soit $M_0 = (0, 0)$. Montrer qu'il existe un voisinage $U$ de $M_0$ et un voisinage $V$ de $f(M_0)$ tels que la restriction $f|_U : U \to V$ soit un $\mathcal{C}^1$-difféomorphisme. 
5. Expliciter l'application inverse $g = (f|_U)^{-1}$ au voisinage de $f(M_0)$ et calculer la matrice jacobienne de $g$ au point $f(M_0)$ de deux manières différentes.

### Partie II : Étude globale et limites du modèle

6. L'application $f$ est-elle injective sur $\mathbb{R}^2$ ? Justifier précisément.
7. Déterminer l'image $f(\mathbb{R}^2)$. L'application $f$ est-elle surjective de $\mathbb{R}^2$ dans $\mathbb{R}^2$ ?
8. **Analyse critique :** Discuter des limites du Théorème d'Inversion Locale face au caractère global de l'application. En quoi le TIL est-il un outil intrinsèquement local et quelles précautions doit-on prendre lors de son application en physique ou en modélisation numérique ?

---

## Pistes et Indications

* **Q1-Q3 :** Penser aux théorèmes généraux sur les fonctions composées et à l'expression de la différentielle d'une fonction holomorphe (ou vue via les nombres complexes). Le TIL requiert une différentielle inversible (déterminant jacobien non nul).
* **Q4-Q5 :** Pour inverser explicitement le système, on peut poser $u = e^x \cos y - 1$ et $v = e^x \sin y$, puis étudier $1 + u$ et $v$ en passant en coordonnées polaires ou par le module et l'argument.
* **Q6-Q7 :** Utiliser la périodicité de la fonction sinus/cosinus pour l'injectivité. Pour la surjectivité, résoudre le système en $e^x$ et $y$.
* **Q8 :** Réfléchir à la notion de connexité, de relèvement et au fait qu'un diffeomorphisme local n'est pas un diffeomorphisme global (ex: $z \mapsto e^z$).

---

## Corrigé Détaillé

### Partie I : Étude différentielle et Théorème d'Inversion Locale

1. **Régularité et Jacobienne :**
   Les fonctions $(x, y) \mapsto e^x \cos y - 1$ et $(x, y) \mapsto e^x \sin y$ sont composées et produits de fonctions usuelles $\mathcal{C}^\infty$ sur $\mathbb{R}^2$ (exponentielle, sinus, cosinus). Ainsi, $f$ est de classe $\mathcal{C}^\infty$ (donc $\mathcal{C}^1$) sur $\mathbb{R}^2$.
   Les dérivées partielles s'obtiennent par :
   $$\frac{\partial f_1}{\partial x}(x, y) = e^x \cos y, \quad \frac{\partial f_1}{\partial y}(x, y) = -e^x \sin y$$
   $$\frac{\partial f_2}{\partial x}(x, y) = e^x \sin y, \quad \frac{\partial f_2}{\partial y}(x, y) = e^x \cos y$$
   La matrice jacobienne en $(x, y)$ est donc :
   $$J_f(x, y) = \begin{pmatrix} e^x \cos y & -e^x \sin y \\ e^x \sin y & e^x \cos y \end{pmatrix}$$

2. **Calcul du Jacobien :**
   $$\det J_f(x, y) = (e^x \cos y)(e^x \cos y) - (-e^x \sin y)(e^x \sin y) = e^{2x} (\cos^2 y + \sin^2 y) = e^{2x}$$

3. **Ensemble $\Omega$ :**
   D'après le Théorème d'Inversion Locale, $f$ réalise un $\mathcal{C}^1$-difféomorphisme local au voisinage de tout point où la différentielle est un isomorphisme, c'est-à-dire là où le déterminant jacobien est non nul.
   Puisque pour tout $(x, y) \in \mathbb{R}^2$, $\det J_f(x, y) = e^{2x} > 0$, la condition d'inversibilité locale est vérifiée **partout**. 
   Par conséquent, **$\Omega = \mathbb{R}^2$**.

4. **Application au point $M_0 = (0, 0)$ :**
   On a $f(0, 0) = (e^0 \cos 0 - 1, e^0 \sin 0) = (0, 0)$.
   Puisque $f$ est de classe $\mathcal{C}^1$ sur $\mathbb{R}^2$ et que $\det J_f(0, 0) = e^0 = 1 \neq 0$, le Théorème d'Inversion Locale garantit l'existence d'un ouvert $U$ contenant $(0, 0)$ et d'un ouvert $V$ contenant $(0, 0)$ tels que $f|_U : U \to V$ soit un $\mathcal{C}^1$-difféomorphisme.

5. **Explication de l'inverse local et de sa jacobienne :**
   Soit $(u, v) \in V$ tel que $(u, v) = f(x, y)$. On a :
   $$\begin{cases} u = e^x \cos y - 1 \\ v = e^x \sin y \end{cases} \implies \begin{cases} 1 + u = e^x \cos y \\ v = e^x \sin y \end{cases}$$
   En élevant au carré et en additionnant :
   $$(1+u)^2 + v^2 = (e^x)^2 (\cos^2 y + \sin^2 y) = e^{2x}$$
   Puisque l'on cherche $x$ au voisinage de $0$ (pour $u$ au voisinage de $0$), on a $x = \frac{1}{2} \ln((1+u)^2 + v^2)$.
   De même, en considérant le quotient $\frac{v}{1+u} = \tan y$ (pour $1+u > 0$), on a $y = \arctan\left(\frac{v}{1+u}\right)$ (en choisissant la determination principale au voisinage de $(0,0)$).
   Ainsi, l'application inverse $g(u, v) = (x, y)$ est explicites.
   
   * **Calcul de la jacobienne de $g$ par le TIL :**
     D'après le TIL, $J_g(f(M_0)) = (J_f(M_0))^{-1}$.
     On a $J_f(0, 0) \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I_2$. Donc $J_g(0,0) = I_2^{-1} = I_2$.
   * **Vérification par calcul direct :**
     En dérivant les expressions de $x(u,v)$ et $y(u,v)$ au point $(0,0)$, on retombe bien sur l'identité.

---

### Partie II : Étude globale et limites du modèle

6. **Injectivité globale :**
   L'application $f$ **n'est pas injective** sur $\mathbb{R}^2$. 
   En effet, remarquons que pour tout $x \in \mathbb{R}$ et pour tout $k \in \mathbb{Z}$, on a :
   $$f(x, 2k\pi) = (e^x \cos(2k\pi) - 1, e^x \sin(2k\pi)) = (e^x - 1, 0)$$
   Si l'on prend par exemple $x = 0$ et $k = 1$, $f(0, 2\pi) = (0, 0)$. Or $f(0, 0) = (0, 0)$. 
   Puisque $(0, 0) \neq (0, 2\pi)$, $f$ n'est pas injective. (La périodicité de la variable $y$ détruit l'injectivité globale).

7. **Surjectivité globale :**
   Cherchons quels sont les $(u, v)ens \in \mathbb{R}^2$ tels qu'il existe $(x, y) \in \mathbb{R}^2$ vérifiant $f(x, y) = (u, v)$.
   On a vu que $(1+u)^2 + v^2 = e^{2x} > 0$. 
   Cela impose nécessairement que $e^{2x} > 0$, ce qui est toujours vrai, mais surtout que $(1+u)^2 + v^2 > 0$, c'est-à-dire que $(u, v) \neq (-1, 0)$.
   Si $(u, v) = (-1, 0)$, le système devient $e^x \cos y = 0$ et $e^x \sin y = 0$, ce qui implique $e^x(\cos^2 y + \sin^2 y) = 0 \implies e^x = 0$, ce qui est impossible.
   Par conséquent, le point $(-1, 0)$ n'a aucun antécédent. 
   L'image de $f$ est donc **$f(\mathbb{R}^2) = \mathbb{R}^2 \setminus \{(-1, 0)\}$**.
   L'application $f$ **n'est pas surjective**.

8. **Analyse critique des limites du modèle :**
   Cet exercice illustre magistralement la dichotomie fondamentale entre **propriétés locales** et **propriétés globales** en analyse :
   * **Le TIL est un outil strictement qualitatif et local :** Il garantit qu'au voisinage de *chaque* point, la fonction se comporte comme un isomorphisme (elle est bijective de $U$ sur $V$). C'est une condition suffisante locale.
   * **L'illusion de l'inversibilité globale :** Avoir $\det J_f(x, y) \neq 0$ partout sur $\mathbb{R}^2$ pourrait laisser supposer à tort un comportement global simple (type isomorphisme global). Or, $f$ n'est ni injective (à cause de la topologie cylindrique de la variable angulaire $y$) ni surjective (le point $(-1,0)$ est exclu de l'image).
   * **Implications en modélisation et calcul numérique :** En physique ou en optimisation (par exemple lors de changements de variables ou d'algorithmes de Newton-Raphson multidimensionnels), utiliser un théorème d'inversion locale n'autorise en aucun cas l'ingénieur à inverser globalement le système sans vérifier la validité topologique du domaine (convexité, simple connexité, injectivité globale via des conditions de coercivité ou d'injectivité stricte). Ignorer ces limites conduit à des pertes d'informations critiques (multiplicité des solutions, singularités cachées à l'infini comme le point $(-1,0)$).