---
title: 'Exercice 1 : Suites et fonctions'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude d'une suite implicite et de son comportement asymptotique

*En tant qu'examinateur de concours en CPGE (filière PTSI), je propose ici un problème classique mais exigeant, mêlant l'étude de fonctions à paramètres, le théorème de la bijection, et l'analyse asymptotique de suites. Ce type de problème teste à la fois la rigueur algébrique et l'intuition analytique du candidat.*

---

## Enoncé du problème

Pour tout entier $n \ge 1$, on considère la fonction $f_n$ définie sur $\mathbb{R}_+$ par :
$$f_n(x) = x^n + x - 1$$

1. Montrer que, pour tout $n \ge 1$, l'équation $f_n(x) = 0$ admet une unique solution sur $\mathbb{R}_+$, que l'on notera $x_n$.
2. Déterminer la valeur de $x_1$ et $x_2$.
3. Étudier les variations de la suite $(x_n)_{n \ge 1}$.
4. Montrer que la suite $(x_n)$ converge vers une limite que l'on précisera.
5. Établir un développement asymptotique ou un équivalent simple de la suite $(x_n - 1)$ lorsque $n$ tend vers $+\infty$.

---

## Corrigé et commentaires de l'examinateur

### Partie 1 : Existence et unicité de la solution
Objectif: Manipuler le théorème de la bijection (ou corollaire des valeurs intermédiaires).*

Soit $n \ge 1$ fixé. La fonction $f_n$ est polynomiale sur $\mathbb{R}_+$, donc de classe $\mathcal{C}^\infty$ sur cet intervalle. 
Calculons sa dérivée pour tout $x \ge 0$ :
$$f_n'(x) = n x^{n-1} + 1$$

Puisque $n \ge 1$ et $x \ge 0$, on a $n x^{n-1} \ge 0$, ce qui implique :
$$\forall x \in \mathbb{R}_+, \quad f_n'(x) \ge 1 > 0$$

La fonction $f_n$ est donc **strictement croissante** sur $\mathbb{R}_+$.

De plus, évaluons $f_n$ aux bornes :
- $f_n(0) = 0^n + 0 - 1 = -1$
- $\lim_{x \to +\infty} f_n(x) = +\infty$ (car $n \ge 1$)

La fonction $f_n$ est continue, strictement croissante, change de signe (passe de $-1$ à $+\infty$). D'après le **théorème de la bijection** (ou corollaire des valeurs intermédiaires), l'équation $f_n(x) = 0$ admet **une unique solution** $x_n$ dans $\mathbb{R}_+$.

> **Note de l'examinateur :** *Attention à bien préciser l'intervalle d'étude et à vérifier la stricte monotonie. C'est un automatisme indispensable en PTSI.*

---

### Partie 2 : Calculs pour $n=1$ et $n=2$
Objectif: Se faire une idée numérique des valeurs.*

- Pour $n = 1$ : 
  $$f_1(x) = x^1 + x - 1 = 2x - 1$$
  L'équation $2x - 1 = 0$ donne immédiatement **$x_1 = \frac{1}{2}$**.

- Pour $n = 2$ :
  $$f_2(x) = x^2 + x - 1 = 0$$
  C'est un trinôme du second degré dont le discriminant est $\Delta = 1^2 - 4(1)(-1) = 5$.
  Puisque $x_2 \ge 0$, on ne retient que la racine positive :
  **$x_2 = \frac{-1 + \sqrt{5}}{2}$** (le nombre d'or conjugué).

---

### Partie 3 : Variations de la suite $(x_n)$
Objectif: Comparer $x_n$ et $x_{n+1}$ en évaluant l'une des fonctions en l'autre point.*

Pour étudier le signe de $x_{n+1} - x_n$, évaluons la fonction $f_{n+1}$ en $x_n$.
Par définition, $x_n$ vérifie $f_n(x_n) = 0$, c'est-à-dire :
$$x_n^n + x_n - 1 = 0 \implies x_n^n = 1 - x_n$$

Remarquons que $x_n \in ]0, 1[$ (puisqu'on a $f_n(0) = -1$ et $f_n(1) = 1 > 0$, et que $x_1 = 1/2$).
Considérons maintenant $f_{n+1}(x_n)$ :
$$f_{n+1}(x_n) = x_n^{n+1} + x_n - 1 = x_n \cdot (x_n^n) + x_n - 1$$
En remplaçant $x_n^n$ par $1 - x_n$ :
$$f_{n+1}(x_n) = x_n(1 - x_n) + x_n - 1 = x_n - x_n^2 + x_n - 1 = -x_n^2 + 2x_n - 1 = -(x_n - 1)^2$$

Puisque $x_n \neq 1$ (car $f_{n+1}(1) = 1 \neq 0$), on a :
$$f_{n+1}(x_n) < 0$$

Or, par définition, $f_{n+1}(x_{n+1}) = 0$. On a donc :
$$f_{n+1}(x_n) < f_{n+1}(x_{n+1})$$

Puisque la fonction $f_{n+1}$ est **strictement croissante**, cela implique directement :
$$x_n < x_{n+1}$$

La suite $(x_n)_{n \ge 1}$ est donc **strictement croissante**.

---

### Partie 4 : Convergence de la suite
Objectif: Utiliser le théorème de la limite monotone.*

La suite $(x_n)$ est **croissante** (d'après la partie 3) et elle est **majorée** par $1$ (puisque $f_n(1) = 1 > 0 = f_n(x_n)$ et $f_n$ est croissante, donc $x_n < 1$).

D'après le théorème de convergence monotone, la suite $(x_n)$ **converge** vers un réel $\ell$ tel que $\ell \le 1$.

Déterminons la valeur de $\ell$. On sait que pour tout $n \ge 1$, $x_n^n + x_n - 1 = 0$.
Étudions le terme $x_n^n$. Puisque $x_n \in [\frac{1}{2}, \ell]$ et que $\ell \le 1$ :
* Si $\ell < 1$, alors $0 \le x_n \le \ell < 1$, donc $\lim_{n \to +\5} x_n^n = 0$.
* Si $\ell = 1$, en passant à la limite dans l'expression $x_n = 1 - x_n^n$, on obtient une contradiction ou une indétermination qu'il convient de lever rigoureusement. 

Plus simplement, écrivons $x_n = 1 - x_n^n$. Puisque $x_n \ge \frac{1}{2}$ (la suite est croissante et $x_1 = 1/2$), si $\ell < 1$, alors $x_n^n \le \ell^n \xrightarrow[n\to+\infty]{} 0$.
En passant à la limite dans $x_n = 1 - x_n^n$, il vient :
$$\ell = 1 - 0 = 1$$
Ceci est en contradiction avec l'hypothèse $\ell < 1$ (car $\ell$ étant la limite d'une suite majorée par un terme strictement inférieur à 1... attendez : si $\ell < 1$, $\ell$ ne peut pas valoir 1). 
*Correction de rédaction rigoureuse :* On a $x_n \ge x_1 = \frac{1}{2}$. Donc pour tout $n$, $x_n^n \le \left(1 - \frac{1}{2}\right)^n$ ? Non, $x_n$ tend vers $\ell$. 
Plus direct : comme $x_n < 1$, on a $x_n^n = 1 - x_n$. 
Si la limite $\ell$ était strictement inférieure à 1, alors $\lim x_n^n = 0$, donc $\ell = 1$, ce qui contredit $\ell < 1$. 
Par conséquent :
$$\lim_{n \to +\infty} x_n = 1$$

---

### Partie 5 : Comportement asymptotique de $x_n$
Objectif: Prêter attention aux équivalents, question classique de concours.*

On cherche à préciser comment $x_n$ tend vers $1$. Posons $u_n = 1 - x_n$. 
On sait que $u_n > 0$ et que $\lim u_n = 0$.
L'équation définissant $x_n$ s'écrit :
$$(1 - u_n)^n + (1 - u_n) - 1 = 0$$
$$(1 - u_n)^n - u_n = 0$$
$$\implies (1 - u_n)^n = u_n$$

Passons au logarithme népérien (licite car $u_n > 0$ et $u_n \to 0$, donc $1 - u_n > 0$) :
$$n \ln(1 - u_n) = \ln(u_n)$$

Comme $u_n \to 0$, utilisons le développement limité usuel $\ln(1 - u) = -u + o(u)$ :
$$n \left( -u_n + o(u_n) \right) = \ln(u_n)$$
$$-n u_n [1 + o(1)] = \ln(u_n)$$

Divisons par $n$ :
$$u_n = -\frac{\ln(u_n)}{n} [1 + o(1)]$$

Puisque $u_n \to 0$, $\ln(u_n) \to -\infty$, et $\frac{-\ln(u_n)}{n} \to 0$. 
Pour trouver un équivalent, regardons le terme dominant. On a $\ln(u_n) = \ln(1 - x_n)$. 
Comme $u_n \sim \frac{-\ln(u_n)}{n}$, alors $\ln(u_n) \sim \ln\left( \frac{-\ln(u_n)}{n} \right) \approx -\ln(n)$ pour $n$ grand.
Plus rigoureusement, reprenons $n u_n = -\ln(u_n)$. 
Divisons par $\ln(n)$ ou écrivons :
$$u_n n = -\ln(u_n) \implies \frac{n u_n}{\ln n} = -\frac{\ln(u_n)}{\ln n}$$
En poussant un peu l'analyse (technique classique de prépa) :
On a $u_n \sim \frac{\ln(n)}{n}$. 

*Vérification rapide :* 
Si $u_n \sim \frac{\ln n}{n}$, alors $n u_n \sim \ln n$, et $-\ln(u_n) = -\ln\left(\frac{\ln n}{n}\right) = -(\ln \ln n - \ln n) = \ln n - \ln \ln n \sim \ln n$.
L'égalité $n u_n = -\ln(u_n)$ est donc bien vérifiée au premier ordre par $u_n \sim \frac{\ln n}{n}$.
Conclusion: ** 
$$1 - x_n \sim \frac{\ln n}{n}$$

---

## Analyse critique des résultats (Regard de l'examinateur)

1. **Cohérence des premiers résultats :** $x_1 = 0.5$ et $x_2 \approx 0.618$. La suite est croissante, ce qui est cohérent avec le graphique implicite des fonctions $f_n$.
2. **Le piège de la limite :** De nombreux candidats bloquent à la question 4 en n'osant pas exploiter l'équation $x_n^n = 1 - x_n$ à la limite. Le passage à la limite requiert de dominer le terme $x_n^n$, ce qui se fait proprement par l'encadrement ou par l'unicité de la limite.
3. **La technique asymptotique :** Le passage au logarithme ($(1-u_n)^n = u_n \implies n \ln(1-u_n) = \ln u_n$) est le "marronnier" de ce type d'exercice aux concours (type Mines-Ponts ou Centrale). Maîtriser les équivalents avec des logarithmes est un facteur discriminant majeur en PTSI.