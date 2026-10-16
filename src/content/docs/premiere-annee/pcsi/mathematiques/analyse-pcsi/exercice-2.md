---
title: 'Exercice 2 : Équations différentielles linéaires'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude d'une équation différentielle linéaire avec perturbation

*Ce problème est inspiré des épreuves écrites de mathématiques pour la filière PCSI. Il aborde la résolution d'une équation différentielle linéaire d'ordre 2 à coefficients non constants, l'étude des solutions sur un intervalle ouvert et l'utilisation de la méthode de variation des constantes.*

---

## I. Préambule et notations

Soit $I = ]0, +\infty[$. On considère l'équation différentielle $(E)$ définie sur $I$ par :
$$ (t^2 + 1)y'' - 2ty' + 2y = (t^2 + 1)^2 $$

L'objectif de ce problème est de déterminer l'ensemble des solutions de $(E)$ sur $I$ en étudiant d'abord l'équation homogène associée $(H)$ :
$$ (t^2 + 1)y'' - 2ty' + 2y = 0 $$

---

## II. Recherche d'une solution particulière polynomiale de $(H)$

**Question 1.** 
Montrer que l'équation homogène $(H)$ admet une solution évidente de la forme d'un polynôme de degré $1$, que l'on précisera.

> *Indication : Si $y$ est un polynôme de degré $1$, quel est le degré de $y'$ et de $y''$ ?*

---
### **Corrigé et Analyse (Q1)**

Soit $y(t) = at + b$ avec $(a, b) \in \mathbb{R}^2$ et $a \neq 0$. 
On a alors $y'(t) = a$ et $y''(t) = 0$.

Substituons $y$, $y'$ et $y''$ dans le membre de gauche de $(H)$ :
$$ (t^2 + 1)(0) - 2t(a) + 2(at + b) = 0 $$
$$ -2at + 2at + 2b = 0 \implies 2b = 0 $$

On en déduit que $b = 0$, tandis que $a$ peut être choisi arbitrairement (par exemple $a = 1$). 
Une solution évidente de $(H)$ est donc :
$$ y_1(t) = t $$

---

## III. Abaissement d'ordre

Pour trouver une seconde solution linéairement indépendante de $y_1$ sur $I$, on utilise la méthode d'abaissement d'ordre. On cherche une solution de $(H)$ sous la forme $y(t) = z(t)y_1(t) = t z(t)$, où $z$ est une fonction deux fois dérivable sur $I$.

**Question 2.** 
a) Calculer $y'(t)$ et $y''(t)$ en fonction de $t$, $z(t)$, $z'(t)$ et $z''(t)$.
b) En déduire l'équation différentielle d'ordre $1$ vérifiée par $u = z'$.
c) Résoudre cette équation en $u$, puis déterminer $z(t)$ et enfin la seconde solution $y_2(t)$.

---
### **Corrigé et Analyse (Q2)**

**a)** Soit $y(t) = t z(t)$. 
- $y'(t) = z(t) + t z'(t)$
- $y''(t) = 2z'(t) + t z''(t)$

**b)** Injectons ces expressions dans $(H)$ :
$$ (t^2 + 1)(2z'(t) + t z''(t)) - 2t(z(t) + t z'(t)) + 2(t z(t)) = 0 $$
Développons et simplifions :
$$ t(t^2 + 1)z''(t) + [2(t^2 + 1) - 2t^2]z'(t) + [-2t + 2t]z(t) = 0 $$
$$ t(t^2 + 1)z''(t) + 2z'(t) = 0 $$

En posant $u = z'$, on obtient l'équation linéaire d'ordre 1 :
$$ t(t^2 + 1)u' + 2u = 0 \quad (\text{E}_u) $$

**c)** Sur $I = ]0, +\infty[$, $t \neq 0$ et $t^2 + 1 \neq 0$. On peut réécrire $(\text{E}_u)$ sous la forme :
$$ \frac{u'}{u} = -\frac{2}{t(t^2 + 1)} $$
Remarquons que $\frac{2}{t(t^2 + 1)} = \frac{2}{t} - \frac{2t}{t^2 + 1}$. Ainsi :
$$ \int \left(\frac{2}{t} - \frac{2t}{t^2 + 1}\right) dt = 2\ln(t) - \ln(t^2 + 1) = \ln\left(\frac{t^2}{t^2 + 1}\right) $$
En intégrant, on obtient (à une constante multiplicative près) :
$$ u(t) = \frac{A \cdot (t^2 + 1)}{t^2} \quad (\text{avec } A \in \mathbb{R}) $$
En choisissant $A = 1$, on a $u(t) = 1 + \frac{1}{t^2}$. 
Puisque $z'(t) = u(t)$, on intègre pour trouver $z(t)$ :
$$ z(t) = t - \frac{1}{t} $$
On en déduit la seconde solution $y_2(t)$ :
$$ y_2(t) = t \left(t - \frac{1}{t}\right) = t^2 - 1 $$

---

## IV. Résolution de l'équation complète $(E)$

**Question 3.** 
a) Vérifier que $y_1$ et $y_2$ forment un système fondamental de solutions de $(H)$ sur $I$.
b) À l'aide de la méthode de variation des constantes, déterminer une solution particulière $y_p$ de l'équation avec second membre $(E)$.
c) Écrire la solution générale de $(E)$ sur $I$.

---
### **Corrigé et Analyse (Q3)**

**a)** Le Wronskien de $(y_1, y_2)$ en tout point $t \in I$ vaut :
$$ W(t) = \begin{vmatrix} t & t^2 - 1 \\ 1 & 2t \end{vmatrix} = t(2t) - 1(t^2 - 1) = t^2 + 1 $$
Puisque $W(t) \neq 0$ sur $I = ]0, +\infty[$, la famille $(y_1, y_2)$ est libre et forme un système fondamental de solutions de $(H)$.

**b)** On cherche une solution particulière sous la forme $y_p(t) = \lambda_1(t)y_1(t) + \lambda_2(t)y_2(t)$ en résolvant le système :
$$
\begin{cases}
\lambda_1'(t)y_1(t) + \lambda_2'(t)y_2(t) = 0 \\
\lambda_1'(t)y_1'(t) + \lambda_2'(t)y_2'(t) = \frac{(t^2+1)^2}{t^2+1} = t^2 + 1
\end{cases}
$$
Soit :
$$
\begin{cases}
\lambda_1'(t)t + \lambda_2'(t)(t^2 - 1) = 0 \\
\lambda_1'(t)(1) + \lambda_2'(t)(2t) = t^2 + 1
\end{cases}
$$
Multiplions la première équation par $1/t$ (valide car $t>0$) : $\lambda_1' + \lambda_2'\frac{t^2-1}{t} = 0 \implies \lambda_1' = -\lambda_2'\frac{t^2-1}{t}$.
Substituons dans la seconde :
$$ -\lambda_2'\frac{t^2-1}{t} + 2t\lambda_2' = t^2 + 1 \implies \lambda_2' \left( \frac{-(t^2-1) + 2t^2}{t} \right) = t^2 + 1 $$
$$ \lambda_2' \left( \frac{t^2 + 1}{t} \right) = t^2 + 1 \implies \lambda_2'(t) = t $$
On en déduit $\lambda_1'(t) = -t \frac{t^2-1}{t} = 1 - t^2$.

En intégrant (sans constantes d'intégration) :
- $\lambda_1(t) = t - \frac{t^3}{3}$
- $\lambda_2(t) = \frac{t^2}{2}$

D'où la solution particulière :
$$ y_p(t) = \left(t - \frac{t^3}{3}\right)t + \left(\frac{t^2}{2}\right)(t^2 - 1) = t^2 - \frac{t^4}{3} + \frac{t^4}{2} - \frac{t^2}{2} = \frac{t^2}{2} + \frac{t^4}{6} $$

**c)** La solution générale de $(E)$ sur $I$ est la somme de la solution générale de $(H)$ et de la solution particulière $y_p$ :
$$ y(t) = \alpha t + \beta (t^2 - 1) + \frac{t^2}{2} + \frac{t^4}{6}, \quad (\alpha, \beta) \in \mathbb{R}^2 $$

---

## V. Analyse critique des résultats

**Question 4.** 
L'énoncé initial pose l'équation sur $I = ]0, +\infty[$. Que se passerait-il si l'on cherchait à résoudre $(E)$ sur $\mathbb{R}$ tout entier ? Discuter de la validité du théorème de Cauchy-Lipschitz linéaire.

---
### **Corrigé et Analyse (Q4)**

Le coefficient dominant de l'équation $(E)$ est $a_2(t) = t^2 + 1$. 
Pour tout $t \in \mathbb{R}$, $t^2 + 1 \ge 1 > 0$, donc $a_2(t)$ ne s'annule jamais sur $\mathbb{R}$. 

Le théorème de Cauchy-Lipschitz linéaire garantit l'existence et l'unicité de solutions globales sur tout intervalle où le coefficient dominant ne s'annule pas et où les fonctions $a_1(t) = -2t$, $a_0(t) = 2$ et le second membre $b(t) = (t^2+1)^2$ sont continus. 
Puisque ces fonctions sont polynomiales, elles sont de classe $\mathcal{C}^\infty$ sur $\mathbb{R}$ tout entier. 

Par conséquent, **les solutions trouvées s'étendent de manière unique et globale sur $\mathbb{R}$ tout entier**, et non seulement sur $I = ]0, +\infty[$. Le choix de $I = ]0, +\infty[$. dans l'énoncé était une précaution superflue du point de vue théorique, mais pédagogiquement utile pour simplifier l'intégration par la méthode d'abaissement d'ordre en évitant les problèmes de signes autour de $0$.