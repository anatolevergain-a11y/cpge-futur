---
title: 'Exercice 1 : Développements limités (DL)'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ : Étude asymptotique et raccordement d'une fonction définie par une intégrale

**Filière :** PCSI  
**Matière :** Mathématiques  
Chapitre: ** Analyse asymptotique  
**Thème :** Développements limités et intégration  

---

## 1. Énoncé

Le problème s'intéresse à l'étude au voisinage de $0$ de la fonction $f$ définie par :
$$f(x) = \int_{x}^{2x} \frac{\ln(1+t^2)}{t \sin t} \, dt$$

L'objectif est de déterminer l'ensemble de définition de $f$, d'étudier sa continuité et sa prolongeabilité en $0$, puis d'obtenir un développement limité à l'ordre 3 de $f$ en $0$. Enfin, une analyse critique du modèle sera menée pour comprendre les limites de l'approximation polynomiale.

---

## 2. Questions

1. **Domaine de définition :** Justifier que $f$ est définie sur $I = ]-\pi, \pi[ \setminus \{0\}$.
2. **Prolongement par continuité :** 
   * a) Déterminer le développement limité de la fonction integrand $g(t) = \frac{\ln(1+t^2)}{t \sin t}$ à l'ordre 2 en $t = 0$.
   * b) En déduire que $f$ peut se prolonger par continuité en $0$. On note encore $f$ ce prolongement et on précisera $f(0)$.
3. **Développement limité de $f$ :**
   * a) Justifier que le prolongement de $f$ est de classe $\mathcal{C}^1$ sur $]-\pi, \pi[$.
   * b) En utilisant une relation entre $f'(x)$ et les valeurs de la fonction intégrande aux bornes, déterminer le développement limité de $f$ à l'ordre 3 en $0$.
4. **Analyse critique du modèle :**
   * a) Calculer la valeur approchée de $f(0{,}1)$ obtenue grâce au DL d'ordre 3.
   * b) Discuter de la pertinence de ce modèle polynomial par rapport à la réalité de l'intégrale lorsque $x$ s'éloigne de $0$.

---

## 3. Pistes et Indications

* **Q1 :** Étudier les zéros du dénominateur $t \sin t$ sur $\mathbb{R}$.
* **Q2 :** Utiliser les DL usuels au voisinage de $0$ : $\ln(1+u) = u - \frac{u^2}{2} + o(u^2)$ et $\sin t = t - \frac{t^3}{6} + o(t^3)$. Attention à bien composer les DL pour obtenir un quotient à l'ordre souhaité.
* **Q3 :** Si $G$ est une primitive de $g$, alors $f(x) = G(2x) - G(x)$. Dériver cette expression pour relier $f'(x)$ à $g(2x)$ et $g(x)$.
* **Q4 :** Penser à l'erreur commise lors de la troncature d'un DL (reste de Young ou de Lagrange).

---

## 4. Corrigé pas à pas

### 1. Domaine de définition
La fonction sous le signe intégrale est définie si et seulement si $t \neq 0$ et $\sin t \neq 0$ (avec $1+t^2 > 0$ toujours vrai). 
Les annulations de $\sin t$ sur $\mathbb{R}^*$ sont les $k\pi$ pour $k \in \mathbb{Z}^*$. 
Pour qu'un intervalle $I$ contenant $x$ et $2x$ ne rencontre pas ces points de discontinuité, et pour que les bornes d'intégration soient valides, on choisit $I = ]-\pi, \pi[ \setminus \{0\}$. Pour tout $x \in I$, les bornes $x$ et $2x$ sont du même signe et strictement comprises entre $-\pi$ et $\pi$ (en évitant $0$), donc l'intégrale est bien définie.

### 2. Prolongement par continuité
* **a) DL de l'intégrand :**
  Au voisinage de $0$ :
  $$\ln(1+t^2) = t^2 - \frac{t^4}{2} + o(t^4) = t^2\left(1 - \frac{t^2}{2} + o(t^2)\right)$$
  $$\sin t = t - \frac{t^3}{6} + o(t^3) = t\left(1 - \frac{t^2}{6} + o(t^2)\right)$$
  Le dénominateur s'écrit $t \sin t = t^2\left(1 - \frac{t^2}{6} + o(t^2)\right)$.
  On effectue le quotient :
  $$g(t) = \frac{t^2 - \frac{t^4}{2} + o(t^4)}{t^2 - \frac{t^4}{6} + o(t^4)} = \frac{1 - \frac{t^2}{2} + o(t^2)}{1 - \frac{t^2}{6} + o(t^2)}$$
  En utilisant le DL de $\frac{1}{1-u}$ avec $u = \frac{t^2}{6} + o(t^2)$ :
  $$g(t) = \left(1 - \frac{t^2}{2} + o(t^2)\right)\left(1 + \frac{t^2}{6} + o(t^2)\right) = 1 - \frac{t^2}{2} + \frac{t^2}{6} + o(t^2) = 1 - \frac{t^3 \text{ non}, t^2}{3} + o(t^2)$$
  Soit **$g(t) = 1 - \frac{t^2}{3} + o(t^2)$**.

* **b) Prolongement en $0$ :**
  Puisque $g(t) \xrightarrow[t \to 0]{} 1$, $g$ admet un prolongement continûment dérivable en $0$. Soit $G$ une primitive de $g$ sur $]-\pi, \pi[$. $G$ est de classe $\mathcal{C}^2$.
  On a $f(x) = G(2x) - G(x)$.
  Par conséquent, $\lim_{x \to 0} f(x) = \lim_{x \to 0} (G(2x) - G(x)) = G(0) - G(0) = 0$.
  On prolonge $f$ en posant **$f(0) = 0$**.

### 3. Développement limité de $f$ à l'ordre 3
* **a) Régularité :**
  Puisque $g$ est continue sur $]-\pi, \pi[\setminus\{0\}$ et prolongeable par continuité en $0$, $G$ est $\mathcal{C}^1$ sur $]-\pi, \pi[$. Par opérations, $f$ est de classe $\mathcal{C}^1$ sur $]-\pi, \pi[$.

* **b) Calcul du DL :**
  On a pour tout $x \in ]-\pi, \pi[$, $f'(x) = 2g(2x) - g(x)$.
  À l'aide du DL de $g$ à l'ordre 2 :
  $$g(2x) = 1 - \frac{(2x)^2}{3} + o(x^2) = 1 - \frac{4x^2}{3} + o(x^2)$$
  $$g(x) = 1 - \frac{x^2}{3} + o(x^2)$$
  En injectant dans $f'(x)$ :
  $$f'(x) = 2\left(1 - \frac{4x^2}{3}\right) - \left(1 - \frac{x^2}{3}\right) + o(x^2) = 2 - \frac{8x^2}{3} - 1 + \frac{x^2}{3} + o(x^2) = 1 - \frac{7x^2}{3} + o(x^2)$$
  Par intégration des développements limités (le terme $f(0)$ étant nul) :
  $$f(x) = f(0) + \int_{0}^{x} \left(1 - \frac{7u^2}{3} + o(u^2)\right) du = x - \frac{7x^3}{9} + o(x^3)$$
  Le développement limité de $f$ à l'ordre 3 en $0$ est donc :
  **$f(x) = x - \frac{7}{9}x^3 + o(x^3)$**.

### 4. Analyse critique du modèle
* **a) Valeur approchée de $f(0{,}1)$ :**
  En négligeant le terme $o(x^3)$, on obtient l'approximation :
  $$f(0{,}1) \approx 0{,}1 - \frac{7}{9}(0{,}1)^3 = 0{,}1 - \frac{0{,}007}{9} \approx 0{,}1 - 0{,}000778 = 0{,}099222 \text{ (\text{unités arbitraires})}$$

* **b) Limites du modèle et discussion :**
  * **Validité locale :** Le modèle polynomial $\tilde{f}(x) = x - \frac{7}{9}x^3$ est extrêmement précis au voisinage immédiat de $0$ car l'erreur commise est un $o(x^3)$, soit en $\mathcal{O}(x^4)$. Pour $x = 0{,}1$, l'erreur relative est minime.
  * **Divergence globale :** En s'éloignant de $0$ (par exemple pour $x \to 1$ ou $x \to \frac{\pi}{4}$), le polynôme diverge vers $\pm \infty$ alors que la fonction intégrale $f$ reste bornée et continue sur son domaine. 
  * **Coût / Bénéfice du calcul formel :** Le DL évite le calcul exact de l'intégrale (qui fait intervenir des fonctions polylogarithmiques ou non élémentaires). Cependant, il perd toute validité prédictive dès que $x$ n'est plus un infiniment petit (faute de convergence uniforme sur des intervalles larges). C'est la limite inhérente aux approximations locales en physique et mathématiques appliquées.