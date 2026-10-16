---
title: 'Exercice 2 : Développement en série entière'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude et développement en série entière d'une fonction intégrale

**Filière :** PC  
**Matière :** Mathématiques  
Chapitre: ** Séries entières  
**Thème :** Développement en série entière (DSE) et intégration de fonctions paramétriques.

---

## I. Énoncé

On considère la fonction $f$ définie sur l'intervalle $\left[0, 1\right[$ par l'intégrale :
$$f(x) = \int_{0}^{1} \frac{t^x}{1+t} \, dt$$

L'objectif de ce problème est de déterminer le rayon de convergence du développement en série entière de $f$, d'expliciter ce développement, et d'analyser le comportement de la fonction aux bornes de son domaine de définition ainsi que les limites de notre modèle d'approximation.

---

## II. Questions

1. **Domaine de définition et continuité :** Justifier que $f(x)$ est bien définie pour tout $x \in [0, +\infty[$. Montrer que $f$ est continue sur $[0, +\infty[$.
2. **Relation de récurrence / Équation fonctionnelle :** Établir une relation simple entre $f(x)$ et $f(x+1)$ pour tout $x \ge 0$. En déduire une expression de $f(n)$ pour tout entier $n \in \mathbb{N}$.
3. **Développement en série entière :** 
   * À l'aide d'un développement en série géométrique, exprimer la fonction sous forme d'une intégrale d'une série de fonctions.
   * Justifier l'inversion entre somme et intégrale.
   * En déduire que $f$ admet un développement en série entière de la forme $\sum_{n=0}^{+\infty} a_n x^n$ et préciser le rayon de convergence $R$ de cette série.
4. **Expression des coefficients :** Exprimer le coefficient général $a_n$ sous la forme d'une somme alternée.
5. **Analyse critique des limites du modèle :** 
   * Étudier la limite de $f(x)$ lorsque $x \to +\infty$.
   * Expliquer pourquoi l'utilisation directe du développement en série entière trouvé à la question 3 est inopérante pour étudier le comportement de $f(x)$ lorsque $x$ tend vers $+\infty$. Quelles sont les limites de ce modèle polynomial global ?

---

## III. Pistes et indications

* **Q1 :** Pour la convergence, majorer l'intégrant par $t^x$ et utiliser un théorème de convergence dominée ou de continuité des intégraux dépendant d'un paramètre.
* **Q2 :** Effectuer une addition sous le signe intégrale en remarquant que $t^x + t^{x+1} = t^x(1+t)$.
* **Q3 :** Écrire $\frac{1}{1+t} = \sum_{n=0}^{+\infty} (-1)^n t^n$ pour $t \in [0, 1[$. Attention au domaine d'validité de la série géométrique en $t=1$. Le théorème d'intégration terme à terme sur un segment ou le théorème de Fubini-Tonelli seront utiles.
* **Q4 :** Utiliser une intégrale de Wallis ou le calcul direct de $\int_{0}^{1} t^{n+x} dt$ avant d'évaluer en $x=0$.
* **Q5 :** Pour la limite en $+\infty$, utiliser le théorème de convergence dominée sur l'expression intégrale. Pour la critique, observer le rayon de convergence ($R=1$) qui empêche d'évaluer la série pour $x > 1$.

---

## IV. Corrigé rédigé pas à pas

### 1. Domaine de définition et continuité
Pour tout $x \ge 0$ fixé, la fonction $t \mapsto \frac{t^x}{1+t}$ est continue (et donc mesurable) sur $[0, 1]$. 
De plus, pour tout $t \in [0, 1]$, on a :
$$0 \le \frac{t^x}{1+t} \le t^x$$
Comme l'intégrale $\int_{0}^{1} t^x \, dt$ converge (elle vaut $\frac{1}{x+1}$ pour $x > -1$), par comparaison, l'intégrale définissant $f(x)$ converge absolument pour tout $x \ge 0$.

La continuité sur $[0, +\infty[$ s'obtient par le théorème de continuité des intégrales dépendant d'un paramètre (convergence dominée sous l'intégrale, la domination étant donnée par la fonction $t \mapsto t^0 = 1$ sur $[0, 1]$, qui est intégrable).

### 2. Relation fonctionnelle
Soit $x \ge 0$. Considérons la somme :
$$f(x) + f(x+1) = \int_{0}^{1} \frac{t^x}{1+t} \, dt + \int_{0}^{1} \frac{t^{x+1}}{1+t} \, dt = \int_{0}^{1} \frac{t^x(1+t)}{1+t} \, dt = \int_{0}^{1} t^x \, dt$$
Ainsi, pour tout $x \ge 0$ :
$$f(x) + f(x+1) = \frac{1}{x+1}$$

Pour tout entier naturel $n$, on a donc la relation de récurrence :
$$f(n) + f(n+1) = \frac{1}{n+1}$$

### 3. Développement en série entière
Pour tout $t \in [0, 1[$, on a le développement en série géométrique :
$$\frac{1}{1+t} = \sum_{n=0}^{+\infty} (-1)^n t^n$$
En multipliant par $t^x$ (avec $x \ge 0$), la série converge simplement sur $[0, 1[$ vers $\frac{t^x}{1+t}$. 
Pour obtenir le DSE de $f$ autour de $0$, écrivons $t^x = e^{x \ln t} = \sum_{k=0}^{+\infty} \frac{x^k (\ln t)^k}{k!}$. 
Alternativement, intégrons terme à terme la série entière de $\frac{1}{1+t}$ contre $t^x$ lorsque $x$ est un entier, ou utilisons le théorème de Fubini pour les séries de fonctions. 

Plus rigoureusement, pour $|x| < 1$, on peut intervertir somme et intégrale (par le théorème d'intégration terme à terme sur un compact, ou en remarquant que la série des normes converge uniformément) :
$$f(x) = \int_{0}^{1} t^x \left( \sum_{n=0}^{+\infty} (-1)^n t^n \right) dt = \sum_{n=0}^{+\infty} (-1)^n \int_{0}^{1} t^{n+x} \, dt$$
En calculant l'intégrale :
$$\int_{0}^{1} t^{n+x} \, dt = \frac{1}{n+x+1}$$
On obtient :
$$f(x) = \sum_{n=0}^{+\infty} \frac{(-1)^n}{n+x+1}$$
Note: Pour obtenir un DSE standard en powers de $x$ (de la forme $\sum a_k x^k$), on développe $\frac{1}{n+x+1} = \frac{1}{n+1} \frac{1}{1 + \frac{x}{n+1}}$ via une série géométrique.*

Le rayon de convergence de la série entière de $f$ ainsi générée est $R = 1$, car la fonction $f$ possède des singularités sur le cercle $|z|=1$ (en particulier en $z = -1$, où le terme $\frac{1}{1+t}$ diverge).

### 4. Expression des coefficients
En développant $\frac{1}{n+x+1}$ au voisinage de $x=0$ :
$$\frac{1}{n+1+x} = \frac{1}{n+1} \frac{1}{1 - \left(-\frac{x}{n+1}\right)} = \sum_{k=0}^{+\infty} \frac{(-1)^k}{(n+1)^{k+1}} x^k$$
En injectant dans la somme double pour $f(x) = \sum_{n=0}^{+\infty} \sum_{k=0}^{+\infty} \frac{(-1)^{n+k}}{(n+1)^{k+1}} x^k$, et en effectuant une interversion de sommations (justifiée par la convergence absolue de la famille), le coefficient de $x^k$ est :
$$a_k = (-1)^k \sum_{n=0}^{+\infty} \frac{(-1)^n}{(n+1)^{k+1}}$$

### 5. Analyse critique des limites du modèle

* **Limite en $+\infty$ :** 
Considérons $\lim_{x \to +\infty} f(x)$. Pour tout $t \in [0, 1[$, on a $0 \le \frac{t^x}{1+t} \le t^x$. 
Lorsque $x \to +\infty$, pour tout $t \in [0, 1[$, $\lim_{x \to +\infty} \frac{t^x}{1+t} = 0$. 
Par le théorème de convergence dominée (la fonction dominante étant $t \mapsto 1$ sur $[0, 1]$, qui est intégrable), on conclut que :
$$\lim_{x \to +\infty} f(x) = 0$$

* **Critique des limites du modèle (Série entière) :** 
Le développement en série entière obtenu à la question 3 a un **rayon de convergence $R = 1$**. 
Par conséquent, la représentation de $f$ sous forme de somme entière $\sum a_k x^k$ n'est valide que pour $|x| < 1$. 
**Limites intrinsèques du modèle :** Il est strictement impossible d'utiliser ce développement polynomial (qui diverge grossièrement pour $x > 1$) pour étudier le comportement de $f(x)$ lorsque $x$ tend vers $+\infty$. Le modèle local (en $0$) ne contient aucune information analytique directe sur le comportement asymptotique global de la fonction en $+\infty$, illustrant la nécessité de recourir à des outils d'analyse globale (comme le théorème de convergence dominée sur l'intégrale) pour lever cette indétermination.