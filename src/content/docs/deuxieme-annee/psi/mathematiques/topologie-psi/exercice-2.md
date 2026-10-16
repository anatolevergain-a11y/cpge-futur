---
title: 'Exercice 2 : Normes et suites de vecteurs'
description: 'Problème d entraînement type concours pour PSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $E = \mathcal{C}([0, 1], \mathbb{R})$ l'espace vectoriel des fonctions continues de $[0, 1$ dans $\mathbb{R}$. 
On munit $E$ des normes usuelles définies, pour tout $f \in E$, par :
- La norme infini : $\|f\|_\infty = \sup_{t \in [0, 1]} |f(t)|$
- La norme 1 : $\|f\|_1 = \int_{0}^{1} |f(t)| \, \text{d}t$

L'objectif de ce problème est d'étudier l'équivalence de ces normes, la topologie associée ainsi que la convergence de suites de fonctions particulières dans l'espace $(E, \|\cdot\|_\infty)$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Comparaison générale des normes**
   Montrer qu'il existe une constante réelle $C > 0$ telle que, pour tout $f \in E$, on a :
   $$\|f\|_1 \leqslant C \|f\|_\infty$$
   En déduire que l'application identité de $(E, \|\cdot\|_\infty)$ vers $(E, \|\cdot\|_1)$ est continue.

2. **Étude de la réciproque**
   Existe-t-il une constante $K > 0$ telle que, pour tout $f \in E$, $\|f\|_\infty \leqslant K \|f\|_1$ ? 
   *On pourra construire une suite de fonctions bien choisie.*

3. **Convergence d'une suite de polynômes**
   Soit $(f_n)_{n \ge 1}$ la suite de fonctions définies sur $[0, 1$ par $f_n(t) = t^n$.
   Étudier la convergence simple de la suite $(f_n)$ sur $[0, 1]$.
   Étudier la convergence de la suite $(f_n)$ dans l'espace normé $(E, \|\cdot\|_\infty)$.

4. **Analyse critique du modèle et régularité**
   La norme $\|\cdot\|_\infty$ permet de capturer les variations uniformes, tandis que la norme $\|\cdot\|_1$ mesure une "énergie moyenne". 
   Discutez pourquoi l'espace $(E, \|\cdot\|_1)$ n'est pas complet, en exhibant une suite de Cauchy pour $\|\cdot\|_1$ qui ne converge vers aucune fonction continue pour cette même norme.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Majorer la valeur absolue de l'intégrale par l'intégrale de la valeur absolue, puis utiliser un majorant constant de $|f(t)|$ par $\|f\|_\infty$.
- **Question 2 :** Pour montrer qu'une telle inégalité n'existe pas, raisonner par l'absurde en construisant des "pics" de plus en plus fins et hauts, dont l'aire sous la courbe tend vers 0 alors que le maximum reste égal à 1.
- **Question 3 :** La limite simple se calcule directement. Pour la norme infinie, évaluer $\sup_{t \in [0, 1]} |t^n - f(t)|$ où $f$ est la limite simple.
- **Question 4 :** Penser à des fonctions en escalier ou des approximations continues de fonctions discontinues (par exemple des "chapeaux" de plus en plus étroits autour d'un point).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Comparaison générale des normes
Soit $f \in E$. Par définition de la norme infinie, pour tout $t \in [0, 1]$, on a :
$$|f(t)| \leqslant \|f\|_\infty$$
Par croissante de l'intégrale sur le segment $[0, 1]$, il vient :
$$\int_{0}^{1} |f(t)| \, \text{d}t \leqslant \int_{0}^{1} \|f\|_\infty \, \text{d}t = \|f\|_\infty \times [t]_0^1 = \|f\|_\infty$$
Ainsi, $\|f\|_1 \leqslant \|f\|_\infty$. 
L'application identité de $(E, \|\cdot\|_\infty)$ vers $(E, \|\cdot\|_1)$ est donc lipschitzienne de rapport $1$, ce qui implique sa **continuité**.

#### 2. Étude de la réciproque
Supposons par l'absurde qu'il existe une constante $K > 0$ telle que pour tout $f \in E$, $\|f\|_\infty \leqslant K \|f\|_1$.
Pour tout entier $n \ge 1$, considérons la fonction continue $f_n$ définie par :
- $f_n(t) = 1 - n\,t$ si $t \in \left[0, \frac{1}{n}\right]$
- $f_n(t) = 0$ si $t \in \left]\frac{1}{n}, 1\right]$

Calculons la norme infinie de $f_n$ : le maximum est atteint en $t = 0$, donc $\|f_n\|_\infty = f_n(0) = 1$.
Calculons maintenant sa norme 1 :
$$\|f_n\|_1 = \int_{0}^{1/n} (1 - nt) \, \text{d}t = \left[ t - \frac{n t^2}{2} \right]_0^{1/n} = \frac{1}{n} - \frac{1}{2n} = \frac{1}{2n}$$
L'inégalité supposée appliquée à $f_n$ donne :
$$1 = \|f_n\|_\infty \leqslant K \|f_n\|_1 = \frac{K}{2n}$$
En passant à la limite lorsque $n \to +\infty$, on obtient $1 \leqslant 0$, ce qui est absurde.
Par conséquent, **les normes $\|\cdot\|_\infty$ et $\|\cdot\|_1$ ne sont pas équivalentes** sur $E$.

#### 3. Convergence de la suite de polynômes $(f_n)$
Soit $f_n(t) = t^n$ pour $t \in [0, 1]$.
- **Convergence simple :** 
  - Si $t \in [0, 1[$, $\lim_{n \to +\infty} t^n = 0$.
  - Si $t = 1$, $\lim_{n \to +\infty} 1^n = 1$.
  La suite $(f_n)$ converge simplement vers la fonction $f$ définie par $f(t) = 0$ si $t \in [0, 1[$ et $f(1) = 1$.
- **Convergence en norme infinie :**
  La fonction limite simple $f$ n'est pas continue en $1$ (donc $f \notin E$). Puisque l'espace $(E, \|\cdot\|_\infty)$ est complet et que la convergence uniforme préserve la continuité, la suite $(f_n)$ ne peut pas converger uniformément vers une fonction de $E$.
  Vérifions-le par le calcul de la norme de la différence :
  $$\|f_n - 0\|_\infty = \sup_{t \in [0, 1]} t^n = 1$$
  Puisque $\lim_{n \to +\infty} 1 = 1 \neq 0$, **la suite $(f_n)$ ne converge pas** vers la fonction nulle (ni vers aucune autre fonction continue) dans $(E, \|\cdot\|_\infty)$.

#### 4. Analyse critique du modèle et incomplétude de $(E, \|\cdot\|_1)$
L'espace normé $(E, \|\cdot\|_\infty)$ est un espace de Banach (complet), ce qui en fait un cadre robuste pour l'analyse numérique et les équations différentielles car toute suite de Cauchy y converge.
En revanche, $(E, \|\cdot\|_1)$ n'est **pas complet**. 

*Justification critique :* On peut construire une suite de fonctions continues $(g_n)$ qui forment une suite de Cauchy pour la norme $\|\cdot\|_1$ (représentant des approximations de type "fonction seuil" ou "marche d'escalier"), mais dont la limite au sens de l'intégrale est une fonction discontinue (par exemple une fonction seuil de Heaviside). Comme l'espace d'arrivée de la limite doit être continu par définition de $E$, la limite n'appartient pas à $E$, ce qui démontre le défaut de complétude de $(E, \|\cdot\|_1)$.