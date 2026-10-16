---
title: 'Exercice 1 : Équations différentielles'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ : Étude d'une équation différentielle non linéaire et application probabiliste

*Ce problème est inspiré des épreuves écrites des concours de la filière BCPST. Il aborde l'analyse qualitative et quantitative d'une équation différentielle ordinaire (EDO), ainsi que le lien avec des modèles aléatoires discrets.*

---

## Préambule et notations

Soit $I = ]0, +\infty[$. On considère l'équation différentielle $(E)$ :
$$x y' + y = x^2 y^2$$
d'inconnue une fonction $y$ définie sur $I$ et à valeurs réelles.

---

## Partie I : Résolution explicite de l'équation différentielle $(E)$

### Question 1
Soit $y$ une solution de $(E)$ ne s'annulant pas sur $I$. On pose $z = \frac{1}{y}$. 
Montrer que $z$ est solution d'une équation différentielle linéaire du premier ordre, notée $(E')$, que l'on précisera.

**Correction guidée :**
Soit $y$ une solution ne s'annulant pas sur $I$. La fonction $z = \frac{1}{y}$ est donc dérivable sur $I$, et l'on a $y = \frac{1}{z}$ et $y' = -\frac{z'}{z^2}$.
En injectant ces expressions dans $(E)$, on obtient :
$$x \left(-\frac{z'(x)}{z(x)^2}\right) + \frac{1}{z(x)} = x^2 \left(\frac{1}{z(x)}\right)^2$$
Multiplions cette équation par $-z(x)^2$ (ce qui est licite car $z(x) \neq 0$) :
$$x z'(x) - z(x) = -x^2$$
Soit, en divisant par $x$ (puisque $x \in ]0, +\infty[0$) :
$$z'(x) - \frac{1}{x}z(x) = -x$$
Ainsi, $z$ est solution de l'équation différentielle linéaire du premier ordre $(E')$ :
$$z' - \frac{1}{x}z = -x$$

### Question 2
Résoudre l'équation homogène associée à $(E')$, puis déterminer la solution générale de $(E')$.

**Correction guidée :**
L'équation homogène associée est $(H) : z' - \frac{1}{x}z = 0$.
Les solutions de $(H)$ sur $I$ sont de la forme :
$$z_H(x) = K \exp\left(\int \frac{1}{x} \, dx\right) = K \exp(\ln(x)) = Kx$$
où $K \in \mathbb{R}$.

Pour trouver une solution particulière de $(E')$, on utilise la méthode de la variation de la constante. On cherche une solution sous la forme $z_p(x) = K(x)x$.
En dérivant et en injectant dans $(E')$ :
$$K'(x)x + K(x) - \frac{1}{x}(K(x)x) = -x \implies K'(x)x = -x \implies K'(x) = -1$$
On peut donc choisir $K(x) = -x$, ce qui donne la solution particulière :
$$z_p(x) = -x \times x = -x^2$$
La solution générale de $(E')$ sur $I$ est donc la somme de la solution générale de $(H)$ et de cette solution particulière :
$$z(x) = Kx - x^2 \quad \text{avec } K \in \mathbb{R}$$

### Question 3
En déduire les solutions maximales de $(E)$ sur $I$. Préciser l'ensemble de définition de chaque solution.

**Correction guidée :**
Puisque $y = \frac{1}{z}$, les solutions non nulles de $(E)$ s'écrivent :
$$y(x) = \frac{1}{Kx - x^2} = \frac{1}{x(K - x)}$$
avec $K \in \mathbb{R}$. 
Il y a également la solution triviale (constante nulle) $y(x) = 0$ pour tout $x \in I$ (qui correspond au cas où $y$ s'annule, mais vérifie $(E)$ sur tout $I$).

Analysons les domaines de validité :
- Pour la solution nulle : $D = ]0, +\infty[$.
- Pour les solutions non nulles, le dénominateur $x(K-x)$ s'annule en $0$ et en $K$.
  - Si $K \le 0$, alors pour tout $x > 0$, $K - x < 0$, donc $x(K-x) < 0$. Le dénominateur ne s'annule jamais sur $I$. La solution est globale : $D = ]0, +\infty[$.
  - Si $K > 0$, le dénominateur s'annule en $x = K$. La solution maximale est définie sur l'un des intervalles $]0, K[$ ou $]K, +\infty[$, selon la condition initiale.

---

## Partie II : Étude qualitative et Probabilités discrètes

On considère maintenant une suite de variables aléatoires et un lien approché avec cette EDO via un modèle d'évolution moyenne. 

### Question 4
Soit $f(x) = \frac{1}{x(K-x)}$ avec $K=2$. Étudier les variations de $f$ sur $1, 2[$.

**Correction guidée :**
Pour $x \in ]1, 2[$, $f(x) = \frac{1}{2x - x^2}$.
La dérivée est :
$$f'(x) = -\frac{2 - 2x}{(2x - x^2)^2} = \frac{2(x - 1)}{x^2(2-x)^2}$$
Pour $x \in ]1, 2[$, on a $x - 1 > 1 - 1 = 0$ (strictement positif) et le dénominateur est un carré strictement positif.
Par conséquent, $f'(x) > 0$ sur $]1, 2[$. La fonction $f$ est strictement croissante sur cet intervalle.
De plus, $\lim_{x \to 2^-} f(x) = +\infty$.

### Question 5 (Connexion Probabilités Discrètes)
Soit $(X_n)_{n \in \mathbb{N}}$ une chaîne de Markov sur $\mathbb{N}$ représentant la taille d'une population, dont l'espérance conditionnelle de variation vérifie une relation approchée liée à $(E)$ :
$$\mathbb{E}(X_{n+1} - X_n \mid X_n = x) \approx \frac{1}{x} (x^2 - x)$$
Interpréter le signe de cette espérance conditionnelle pour $x > 1$.

**Correction guidée :**
L'expression donne :
$$\mathbb{E}(X_{n+1} - X_n \mid X_n = x) \approx x - 1$$
Si $x > 1$, alors $x - 1 > 0$. 
Cela signifie que, conditionnellement au fait que la population atteigne la taille $x$ (avec $x > 1$), l'espérance de la variation de la population à la génération suivante est **strictement positive**. La population a donc tendance à croître en moyenne.

---

## Analyse critique des résultats

> **Regard critique du jury :**
> 1. **Linéarisation :** L'équation $(E)$ est une équation de Bernoulli (cas particulier de l'équation de Riccati). Le changement de fonction $z = 1/y$ est classique et indispensable pour s'ramener à une EDO linéaire. Les candidats oublient souvent de préciser que ce changement impose $y \neq 0$, obligeant à traiter la solution nulle séparément.
> 2. **Domaines d'existence :** En BCPST, face à des EDO non linéaires, la détermination des intervalles maximaux d'existence est discriminante. Une erreur fréquente est de négliger l'impact de la constante $K$ sur l'annulation du dénominateur.