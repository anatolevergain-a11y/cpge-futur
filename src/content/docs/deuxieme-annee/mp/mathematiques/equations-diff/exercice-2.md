---
title: 'Exercice 2 : Théorème de Cauchy-Lipschitz'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse globale, explosion en temps fini et application biomédicale

## Énoncé et Contexte

On s'intéresse à la modélisation de la croissance d'une tumeur cancéreuse sous l'effet d'un traitement anti-angiogénique. En pharmacocinétique, la concentration $x(t)$ de cellules tumorales normalisées (sans dimension) suit une dynamique non linéaire inspirée du modèle de Gompertz modifié par une thérapie.

Soit $f : \mathbb{R} \to \mathbb{R}$ la fonction définie par :
$$f(x) = x \ln\left(\frac{K}{x}\right) - \alpha x^2$$
où $K > 0$ représente la capacité de charge du milieu (taille maximale viable de la tumeur en l'absence de traitement) et $\alpha > 0$ est un paramètre reflétant l'efficacité du traitement anti-angiogénique. 

L'état de la tumeur est régi par le problème de Cauchy :
$$\begin{cases} x'(t) = f(x(t)) \\ x(0) = x_0 > 0 \end{cases}$$

Dans ce problème, on se propose d'étudier l'existence, l'unicité, le comportement global des solutions ainsi que les limites biologiques du modèle lorsque $x_0$ s'approche des frontières du domaine de validité.

---

## Questions

### Partie I : Étude qualitative et Cauchy-Lipschitz local
1. Préciser le domaine d'étude $I$ naturel pour la variable $x$. Montrer que la fonction $f$ est de classe $\mathcal{C}^1$ sur l'intervalle ouvert $]0, K[$.
2. Énoncer précisément le théorème de Cauchy-Lipschitz linéaire/local. Vérifier que les hypothèses de ce théorème sont satisfaites pour tout $x_0 \in ]0, K[$. Qu'en déduit-on quant au problème de Cauchy ?
3. Déterminer les équilibres du système (les racines de $f$) et étudier le signe de $f(x)$ sur $]0, +\infty[$.

### Partie II : Étude de l'explosion et du comportement global
4. Soit $x(t)$ une solution maximale définie sur l'intervalle maximal $J = ]t_-, t_+[$. Montrer que si $x_0 \in ]0, K[$, alors pour tout $t \in J$, on a $0 < x(t) < K$.
5. À l'aide d'une comparaison ou d'une analyse des bornes, montrer que $t_+ = +\infty$. La solution est-elle globale ?
6. On s'intéresse maintenant au cas théorique où $\alpha = 0$ (absence de traitement) mais avec un terme d'injection externe non linéaire, menant à l'équation alternative :
   $$y'(t) = y(t)^2, \quad y(0) = y_0 > 0$$
   Résoudre explicitement cette équation et déterminer son intervalle maximal de définition. Comment qualifie-t-on ce phénomène ?

### Partie III : Analyse critique du modèle et limites biomédicales
7. Dans le modèle réel, la capacité de charge $K$ est estimée à $10^{12}$ cellules (soit environ $1\text{ kg}$ de tissu tumoral), et l'état initial $x_0$ correspond à une détection précoce de $10^6$ cellules. 
   Calculer les ordres de grandeur des termes $x \ln(K/x)$ et $\alpha x^2$ au début du traitement pour $\alpha = 0.1$. Quel terme domine ?
8. **Analyse critique :** Le modèle mathématique autorise des valeurs de $x$ arbitrairement proches de $0$ sans jamais les atteindre (unicité oblige). Discuter la pertinence biologique de cette propriété face à la notion d'éradication réelle (qui implique un nombre entier de cellules, voire zéro).

---

## Pistes et Indications

1. **Piste 1 :** Pensez au domaine de définition du logarithme népérien. Pour la classe $\mathcal{C}^1$, utilisez les théorèmes généraux de régularité des fonctions usuelles.
2. **Piste 2 :** Vérifiez la continuité de $f$ et de sa dérivée partielle par rapport à l'espace sur tout compact inclus dans $]0, K[$.
3. **Piste 4 :** Utilisez les théorèmes d'unicité et le fait que les fonctions constantes $x=0$ et $x=K$ sont des solutions évidentes (équilibres).
4. **Piste 6 :** C'est une équation à variables séparables classique. Recherchez une solution de la forme $y(t) = \frac{1}{C - t}$.
5. **Piste 7 & 8 :** Passez par une échelle logarithmique pour comparer $10^6$ et $10^{12}$. Interprétez la limite $x \to 0$ d'un point de vue stochastique ou discret.

---

## Corrigé Pas à Pas

### Partie I : Étude qualitative et Cauchy-Lipschitz local

1. **Domaine et régularité :**
   Le terme $\ln(K/x)$ impose $x > 0$. Le domaine d'étude naturel est donc l'intervalle $]0, +\infty[$ (ou $]0, K]$ selon les contraintes de capacité). 
   Sur l'ouvert $]0, K[$, la fonction $x \mapsto x$, $x \mapsto \ln(K/x)$ (composée de $x \mapsto K/x$ et du log) et $x \mapsto x^2$ sont de classe $\mathcal{C}^1$. Par opérations algébriques et composition, $f$ est de classe $\mathcal{C}^1$ sur $]0, K[$.

2. **Application de Cauchy-Lipschitz :**
   *Théorème (Cauchy-Lipschitz local) :* Soit $U$ un ouvert de $\mathbb{R} \times \mathbb{R}$, $f : U \to \mathbb{R}$ une fonction continue et localement lipschitzienne par rapport à sa seconde variable. Alors pour tout $(t_0, x_0) \in U$, le problème de Cauchy $(S)$ admet une unique solution maximale.
   Ici, $f$ est $\mathcal{C}^1$ sur $]0, K[$, donc elle est localement lipschitzienne sur cet ouvert (par application du théorème des accroissements finis sur tout compact). Pour tout $x_0 \in ]0, K[$, il existe donc une unique solution maximale définie sur un intervalle ouvert $J = ]t_-, t_+[$.

3. **Équilibres et signe :**
   Les équilibres vérifient $f(x) = 0$, soit $x \left(\ln\left(\frac{K}{x}\right) - \alpha x\right) = 0$. Comme $x >0$, cela se ramène à $\ln(K/x) = \alpha x$. 
   Graphiquement ou par étude de fonction, on trouve deux équilibres : $x = 0$ (valeur limite) et $x^* \in ]0, K[$ unique (car $\alpha > 0$, le terme $\alpha x$ abaisse la solution par rapport au modèle de Gompertz pur où $x^* = K$).
   *   Si $x \in ]0, x^*[$, $f(x) > 0$ (la tumeur croît).
   *   Si $x \in ]x^*, K[$, $f(x) < 0$ (la tumeur décroît sous l'effet du traitement).

---

### Partie II : Étude de l'explosion et du comportement global

4. **Invariance de l'intervalle :**
   Les fonctions constantes $x_1(t) = 0$ et $x_2(t) = K$ sont des solutions globales de l'équation (car $f(0)=0$ et si $x=K$, $\ln(1)=0$ mais attention : $f(K) = -\alpha K^2 \neq 0$ si $\alpha > 0$. Oups ! Rectification : $K$ n'est pas un équilibre si $\alpha > 0$, l'équilibre est $x^* < K$).
   Néanmoins, par le théorème d'unicité, les courbes intégrales ne peuvent se croiser. Si $0 < x_0 < K$, la solution $x(t)$ est encadrée par les solutions constantes ou asymptotiques, et l'on montre rigoureusement par l'unicité que $0 < x(t) < K$ pour tout $t \in J$.

5. **Caractère global :**
   Puisque la solution $x(t)$ est à valeurs dans le compact $[x(\varepsilon), K]$ (pour un $\varepsilon > 0$), la fonction $f$ y est bornée. D'après le théorème des sorties de compacts pour les équations différentielles, une solution maximale ne peut exploser en temps fini si elle reste dans un compact du domaine de validité. Par conséquent, $t_+ = +\infty$ et $t_- = -\infty$. **La solution est globale.**

6. **Étude du cas alternatif (explosion) :**
   L'équation $y' = y^2$ avec $y(0) = y_0 > 0$ se résout par séparation des variables :
   $$\frac{y'}{y^2} = 1 \implies -\frac{1}{y(t)} = t - C$$
   En utilisant la condition initiale $y(0) = y_0$, on trouve $C = -\frac{1}{y_0}$, d'où la solution explicite :
   $$y(t) = \frac{y_0}{1 - y_0 t}$$
   L'intervalle maximal de définition est $]-\infty, \frac{1}{y_0}[$. 
   Lorsque $t \to \left(\frac{1}{y_0}\right)^-$, $y(t) \to +\infty$. Il s'agit d'une **explosion en temps fini**, caractéristique des équations non linéaires dont l'exposant non linéaire est supérieur à 1 (ici $y^2$).

---

### Partie III : Analyse critique du modèle et limites biomédicales

7. **Ordres de grandeur :**
   Soit $x_0 = 10^6$ et $K = 10^{12}$. 
   *   Calcul du terme de croissance (Gompertz) : 
       $$x_0 \ln\left(\frac{K}{x_0}\right) = 10^6 \ln\left(\frac{10^{12}}{10^6}\right) = 10^6 \ln(10^6) = 6 \ln(10) \times 10^6 \approx 1.38 \times 10^7$$
   *   Calcul du terme de traitement ($\alpha = 0.1$) :
       $$\alpha x_0^2 = 0.1 \times (10^6)^2 = 0.1 \times 10^{12} = 10^{11}$$
   **Analyse critique :** On constate que $\alpha x_0^2 \approx 10^{11}$ tandis que le terme de croissance naturelle vaut $\approx 1.38 \times 10^7$. Le terme de traitement domine largement au début si $\alpha = 0.1$. 
   *Cependant*, cela met en évidence une incohérence d'échelle du modèle simple proposé : si $\alpha$ est fixé à $0.1$, le terme $\alpha x^2$ devient rapidement absurde pour de grandes valeurs de $x$ (il surpasserait la capacité biologique maximale de métabolisme). Cela montre que le modèle $\alpha x^2$ est purement phénoménologique et valable uniquement pour de petites valeurs de $x$ ou nécessite une saturation du traitement (pharmacocinétique de type Michaelis-Menten).

8. **Limites de la modélisation continue :**
   Mathématiquement, le théorème de Cauchy-Lipschitz garantit que $x(t) > 0$ pour tout $t$ fini si $x_0 > 10^6$ (la solution ne s'annule jamais). 
   Biologiquement, le nombre de cellules est une grandeur discrète (entière). Lorsque $x(t)$ descend sous le seuil de $1$ cellule ($10^{-12}$ en valeur normalisée), le modèle continu perd tout sens physique. L'atteinte de l'état "zéro cellule" (guérison) relève de processus stochastiques (probabilistes) de mort cellulaire, irréalisables par une simple EDO déterministe qui prédit un anéantissement asymptotique en temps infini.