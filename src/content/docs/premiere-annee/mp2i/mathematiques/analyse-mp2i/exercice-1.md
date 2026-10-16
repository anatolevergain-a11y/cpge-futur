---
title: 'Exercice 1 : Analyse asymptotique'
description: 'Problème d entraînement type concours.'
---

# Concours Blanc de Mathématiques - Filière MP2I
## Analyse Asymptotique : Suites, Dérivées et Développements Limités

*En tant qu'examinateur en CPGE MP2I, j'attends des candidats une rigueur absolue dans la manipulation des ordres de grandeur, l'utilisation des développements limités (DL) et la rédaction des justifications topologiques et algébriques.*

---

## Préambule et Objectifs du Problème

Ce problème étudie le comportement asymptotique d'une suite implicite et d'une fonction associée. Ce type de problème est un grand classique des écrits (concours Mines-Ponts, Centrale-Supélec, X-ENS). L'objectif est de maîtriser l'interaction entre convergence, vitesse de convergence et développements asymptotiques poussés.

---

## Partie I : Étude d'une fonction auxiliaire

Soit $f$ la fonction définie sur $\mathbb{R}_+$ par :
$$f(x) = x e^x - 1$$

1. **Montrer que $f$ réalise une bijection de $\mathbb{R}_+$ sur $[-1, +\infty[$.**
2. **Justifier que l'équation $f(x) = 0$ admet une unique solution sur $\mathbb{R}_+$, que l'on notera $\alpha$. Préciser son signe et localiser $\alpha$ dans un intervalle simple.**
3. **Établir que la fonction $\alpha \mapsto \alpha$ n'a pas de sens, mais montrons plutôt que $f$ est de classe $\mathcal{C}^\infty$ sur $\mathbb{R}_+$. Calculer $f'(x)$ et $f''(x)$ pour tout $x \in \mathbb{R}_+$.**

---

### Corrigé et Commentaires de l'Examinateur (Partie I)

1. **Continuité et stricte monotonie :**
   La fonction $f$ est continue et de classe $\mathcal{C}^\infty$ sur $\mathbb{R}_+$ en tant que produit et somme de fonctions usuelles.
   Pour tout $x \in \mathbb{R}_+$ :
   $$f'(x) = (1+x)e^x$$
   Comme pour tout $x \ge 0$, $1+x > 0$ et $e^x > 0$, on a $f'(x) > 0$. La fonction $f$ est donc **strictement croissante** sur $\mathbb{R}_+$.
   De plus, $f(0) = -1$ et $\lim_{x \to +\infty} f(x) = +\infty$.
   Par le théorème de la bijection (ou corrélation du théorème des valeurs intermédiaires), $f$ réalise une bijection de $\mathbb{R}_+$ sur $[-1, +\infty[$.

2. **Existence et unicité de $\alpha$ :**
   Puisque $0 \in [-1, +-\infty[$, l'équation $f(x) = 0$ admet une unique solution $\alpha \in \mathbb{R}_+$.
   On remarque que $f(0) = -1 < 0$ et $f(1) = e - 1 > 0$ (car $e > 1$). Par stricte croissante, $\alpha \in ]0, 1[$.

3. **Dérivées successives :**
   Pour tout $x \ge 0$ :
   $$f'(x) = (x+1)e^x$$
   $$f''(x) = (x+2)e^x$$
   On aura besoin de ces valeurs pour l'analyse locale en $\alpha$.

---

## Partie II : Étude d'une suite implicite

Pour tout entier $n \ge 1$, on considère l'équation $\left(E_n\right)$ :
$$x e^x = n$$

1. **Montrer que pour tout $n \ge 1$, l'équation $(E_n)$ admet une unique solution réelle positive, que l'on note $x_n$.**
2. **Déterminer la monotonie de la suite $(x_n)_{n \ge 1}$ et sa limite lorsque $n \to +\infty$.**
3. **Donner un équivalent simple de $x_n$ en $+\infty$.**

---

### Corrigé et Commentaires de l'Examinateur (Partie II)

1. **Existence et unicité de $x_n$ :**
   Soit $n \ge 1$. L'équation $(E_n)$ équivaut à $f(x) = n - 1$.
   Puisque $n \ge 1$, on a $n - 1 \ge 0 \in [-1, +\infty[$. D'après la Partie I, il existe un unique $x_n \in \mathbb{R}_+$ tel que $f(x_n) = n-1$, c'est-à-dire $x_n e^{x_n} = n$.

2. **Monotonie et limite :**
   Soit $n \ge 1$. On a $x_{n+1} e^{x_{n+1}} = n+1 > n = x_n e^{x_n}$.
   La fonction $g : t \mapsto t e^t$ étant strictement croissante sur $\mathbb{R}_+$, on en déduit que $x_{n+1} > x_n$. La suite $(x_n)$ est **strictement croissante**.
   Supposons que $(x_n)$ converge vers une limite finie $\ell \in \mathbb{R}_+$. Par passage à la limite dans $x_n e^{x_n} = n$, on obtient $\ell e^\ell = +\infty$, ce qui est absurde.
   Par conséquent, par isomorphisme de la divergence vers $+\infty$ pour une suite croissante non majorée :
   $$\lim_{n \to +\infty} x_n = +\infty$$

3. **Équivalent asymptotique grossier :**
   On a $x_n e^{x_n} = n$. En appliquant le logarithme népérien (licite car $x_n > 0$ et $n \ge 1$) :
   $$\ln(x_n) + x_n = \ln(n)$$
   Ainsi, $x_n = \ln(n) - \ln(x_n)$.
   Puisque $x_n \to +\infty$, on a $\ln(x_n) = o(x_n)$. 
   Plus rigoureusement, $\frac{\ln(x_n)}{\ln(n)} = \frac{\ln(x_n)}{\ln(x_n) + x_n} \xrightarrow[n\to+\infty]{} 0$.
   Donc $\ln(x_n) = o(\ln(n))$. 
   En divisant par $\ln(n)$, il vient :
   $$\frac{x_n}{\ln(n)} = 1 - \frac{\ln(x_n)}{\ln(n)} \underset{n\to+\infty}{\longrightarrow} 1$$
   On en conclut l'équivalent :
   $$\mathbf{x_n \sim \ln(n)}$$

---

## Partie III : Développement asymptotique poussé

L'objectif de cette partie est d'obtenir un développement asymptotique de $x_n$ à deux termes significatifs.

1. **En utilisant l'égalité $\ln(x_n) + x_n = \ln(n)$, injecter l'équivalent $x_n \sim \ln(n)$ pour exprimer $\ln(x_n)$ sous la forme $\ln(\ln(n)) + o(1)$.**
2. **En déduire un développement asymptotique de $x_n$ de la forme :**
   $$x_n = \ln(n) - \ln(\ln(n)) + o(1)$$
3. **Raffiner ce résultat en posant $x_n = \ln(n) - \ln(\ln(n)) + \varepsilon_n$ avec $\varepsilon_n = o(1)$, et déterminer un équivalent ou une limite de $\varepsilon_n$ lorsque $n \to +\infty$.**

---

### Corrigé et Commentaires de l'Examinateur (Partie III)

1. **Amélioration du terme logarithmique :**
   On sait que $x_n = \ln(n) (1 + o(1))$. En appliquant $\ln$ :
   $$\ln(x_n) = \ln(\ln(n) + \ln(1 + o(1))) = \ln(\ln(n)) + o(1)$$

2. **Premier raffinement :**
   En reprenant l'équation exacte $x_n = \ln(n) - \ln(x_n)$, on substitue le résultat précédent :
   $$x_n = \ln(n) - \left( \ln(\ln(n)) + o(1) \right)$$
   Soit :
   $$x_n = \ln(n) - \ln(\ln(n)) + o(1)$$

3. **Poussée du développement (Technique classique des MP2I) :**
   Posons $x_n = \ln(n) - \ln(\ln(n)) + \varepsilon_n$, avec $\varepsilon_n \to 0$ quand $n \to +\infty$.
   Revenons à l'équation initiale : $\ln(x_n) + x_n = \ln(n)$.
   Exprimons $\ln(x_n)$ plus finement :
   $$x_n = \ln(n) - \ln(n) \left( 1 - \frac{\ln(\ln(n))}{\ln(n)} + \frac{\varepsilon_n}{\ln(n)} \right)$$
   $$\ln(x_n) = \ln\left[\ln(n) \left(1 - \frac{\ln(\ln(n))}{\ln(n)} + o\left(\frac{1}{\ln(n)}\right)\right)\right]$$
   $$\ln(x_n) = \ln(\ln(n)) + \ln\left(1 - \frac{\ln(\ln(n))}{\ln(n)} + o\left(\frac{1}{\ln(n)}\right)\right)$$
   En utilisant le DL de $\ln(1+u)$ au voisinage de $0$ ($u \sim -\frac{\ln(\ln(n))}{\ln(n)}$) :
   $$\ln(x_n) = \ln(\ln(n)) - \frac{\ln(\ln(n))}{\ln(n)} + o\left(\frac{\ln(\ln(n))}{\ln(n)}\right)$$
   Réinjectons cela dans $\ln(x_n) + x_n = \ln(n)$ :
   $$\left[\ln(\ln(n)) - \frac{\ln(\ln(n))}{\ln(n)} + o\left(\frac{\ln(\ln(n))}{\ln(n)}\right)\right] + x_n = \ln(n)$$
   On isole $x_n$ :
   $$x_n = \ln(n) - \ln(\ln(n)) + \frac{\ln(\ln(n))}{\ln(n)} + o\left(\frac{\ln(\ln(n))}{\ln(n)}\right)$$
   Ainsi, $\varepsilon_n \sim \frac{\ln(\ln(n))}{\ln(n)}$. Le développement asymptotique à trois termes est :
   $$\mathbf{x_n = \ln(n) - \ln(\ln(n)) + \frac{\ln(\ln(n))}{\ln(n)} + o\left(\frac{\ln(\ln(n))}{\ln(n)}\right)}$$

---

## Analyse Critique et Bilan de l'Examinateur

Ce problème met en lumière une méthode fondamentale en analyse asymptotique pour les suites définies implicitement : **l'itération de l'équation log-arithmique**. 

* **Piège classique évité :** Ne pas écrire directement $\ln(x_n) \sim \ln(\ln(n))$ sans justification formelle de composition d'équivalents (ce qui est faux en général, mais vrai ici par continuité et stricte croissance après passage au log). En MP2I, l'utilisation de $o(1)$ ou de formes négligeables formalise rigoureusement cette étape.
* **Vérification de cohérence :** Lorsque $n$ grandit, $\ln(n)$ grandit, $\ln(\ln(n))$ grandit aussi mais beaucoup plus lentement ($\ln(\ln(n)) = o(\ln(n))$). Le terme correctif $\frac{\ln(\ln(n))}{\ln(n)}$ tend bien vers $0$, ce qui valide la structure du développement asymptotique.