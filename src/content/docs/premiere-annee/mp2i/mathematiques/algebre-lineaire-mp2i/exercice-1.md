---
title: 'Exercice 1 : Espaces vectoriels'
description: 'Problème d entraînement type concours.'
---

# Concours MP2I - Mathématiques
## Chapitre : Algèbre linéaire et calcul matriciel — Thème : Espaces vectoriels

---

### Introduction de l'examinateur

*Ce problème s'inscrit dans l'esprit des épreuves de mathématiques de la filière MP2I. Il aborde l'étude d'un espace vectoriel de fonctions et l'interaction entre dérivation et structure algébrique. L'accent est mis sur la rigueur de la rédaction, la maîtrise des raisonnements par analyse-synthèse, et l'interprétation des résultats. Bon courage.*

---

## Problème : Étude d'un sous-espace vectoriel de fonctions continues

Soit $E = \mathcal{C}^0(\mathbb{R}, \mathbb{R})$ l' $\mathbb{R}$-espace vectoriel des fonctions continues de $\mathbb{R}$ dans $\mathbb{R}$. 
On considère l'application $\Phi : E \to E$ définie, pour tout $f \in E$ et tout $x \in \mathbb{R}$, par :
$$(\Phi(f))(x) = \int_0^x (x-t)f(t) \, dt$$

L'objectif de ce problème est d'étudier les propriétés de l'opérateur $\Phi$, ses sous-espaces invariants et de résoudre une équation fonctionnelle associée.

---

### Partie I : Linéarité et premières propriétés de $\Phi$

**Question 1.** Montrer que $\Phi$ est un endomorphisme de l'espace vectoriel $E$.

> **Indication de l'examinateur :** Rappelez la définition d'un endomorphisme. Il s'agit de montrer que $\Phi(E) \subset E$ (ce qui découle du théorème fondamental de l'analyse) et que $\Phi$ est linéaire.

*Corrigé :*
Soit $f \in E$. Par le théorème fondamental de l'analyse, comme la fonction $(t, x) \mapsto (x-t)f(t)$ est continue sur $\mathbb{R}^2$, la fonction $\Phi(f)$ est de classe $\mathcal{C}^2$ sur $\mathbb{R}$, en particulier elle est continue. Donc $\Phi(f) en E$.

Vérifions la linéarité : soient $f, g \in E$, $\lambda, \mu \in \mathbb{R}$ et $x \in \mathbb{R}$.
$$
\begin{aligned}
(\Phi(\lambda f + \mu g))(x) &= \int_0^x (x-t)(\lambda f(t) + \mu g(t)) \, dt \\
&= \lambda \int_0^x (x-t)f(t) \, dt + \mu \int_0^x (x-t)g(t) \, dt \\
&= \lambda (\Phi(f))(x) + \mu (\Phi(g))(x)
\end{aligned}
$$
Ainsi, $\Phi(\lambda f + \mu g) = \lambda \Phi(f) + \mu \Phi(g)$, ce qui prouve que $\Phi$ est linéaire. $\Phi$ est donc un endomorphisme de $E$.

---

**Question 2.** Déterminer le noyau $\ker(\Phi)$ de $\Phi$.

> **Indication de l'examinateur :** Dérivez deux fois l'expression intégrale de $\Phi(f)(x)$ en utilisant la formule de Leibniz (ou dérivation sous le signe somme).

*Corrigé :*
Soit $f \in \ker(\Phi)$. Alors pour tout $x \in \mathbb{R}$, $(\Phi(f))(x) = 0$, c'est-à-dire :
$$\int_0^x (x-t)f(t) \, dt = 0 \quad \text{soit} \quad x \int_0^x f(t) \, dt - \int_0^x t f(t) \, dt = 0$$

Dérivons une première fois par rapport à $x$ (les fonctions sous l'intégrale étant continues) :
$$\int_0^x f(t) \, dt + x f(x) - x f(x) = 0 \implies \int_0^x f(t) \, dt = 0$$

Dérivons une seconde fois par rapport à $x$ :
$$f(x) = 0$$

Ainsi, la fonction $f$ est identiquement nulle. Réciproquement, la fonction nulle appartient clairement à $\ker(\Phi)$. 
Par conséquent :
$$\ker(\Phi) = \{0_E\}$$
L'endomorphisme $\Phi$ est donc injectif.

---

### Partie II : Recherche de sous-espaces stables

On s'intéresse aux polynômes. Soit $\mathbb{R}[X]$ l'espace vectoriel des polynômes à coefficients réels, que l'on peut voir comme un sous-espace de $E$.

**Question 3.** Soit $n \in \mathbb{N}$ et $\mathbb{R}_n[X]$ le sous-espace vectoriel des polynômes de degré inférieur ou égal à $n$. 
Montrer que $\mathbb{R}_n[X]$ est stable par $\Phi$.

*Corrigé :*
Soit $P \in \mathbb{R}_n[X]$. Écrivons $P(t) = \sum_{k=0}^n a_k t^k$. Pour tout $x \in \mathbb{R}$ :
$$
\begin{aligned}
(\Phi(P))(x) &= \int_0^x (x-t) \left( \sum_{k=0}^n a_k t^k \right) dt \\
&= \sum_{k=0}^n a_k \int_0^x (x t^k - t^{k+1}) dt \\
&= \sum_{k=0}^n a_k \left[ x \frac{x^{k+1}}{k+1} - \frac{x^{k+2}}{k+2} \right] \\
&= \sum_{k=0}^n a_k x^{k+2} \left( \frac{1}{k+1} - \frac{1}{k+2} \right) \\
&= \sum_{k=0}^n a_k \frac{x^{k+2}}{(k+1)(k+2)}
\end{aligned}
$$
Le polynôme $\Phi(P)$ est donc de la forme $\sum_{k=0}^n a_k \frac{X^{k+2}}{(k+1)(k+2)}$, qui est un polynôme de degré au plus $n+2$. *A fortiori*, $\Phi(P) \in \mathbb{R}_n[X]$ n'est pas toujours vrai (le degré augmente), mais on remarque que $\Phi$ envoie $\mathbb{R}_n[X]$ dans $\mathbb{R}_{n+2}[X]$. 

Plus précisément, si l'on considère l'espace global des polynômes $\mathbb{R}[X]$, celui-ci est stable par $\Phi$.

---

### Partie III : Équation fonctionnelle

**Question 4.** Déterminer toutes les fonctions $f \in E$ de classe $\mathcal{C}^2$ sur $\mathbb{R}$ telles que :
$$\forall x \in \mathbb{R}, \quad (\Phi(f))(x) + f(x) = x$$

*Corrigé :*
Soit $f \in E$ une solution de classe $\mathcal{C}^2$. Pour tout $x \in \mathbb{R}$, on a :
$$\int_0^x (x-t)f(t) \, dt + f(x) = x$$

Dérivons cette relation par rapport à $x$ (les deux membres sont de classe $\mathcal{C}^1$) :
$$\int_0^x f(t) \, dt + f'(x) = 1$$

Dérivons une seconde fois par rapport à $x$ (les membres sont maintenant de classe $\mathcal{C}^2$) :
$$f(x) + f''(x) = 0$$

Nous obtenons une équation différentielle linéaire homogène du second ordre à coefficients constants :
$$f'' + f = 0$$
L'équation caractéristique est r² + 1 = 0, dont les racines sont $\pm i$. Les solutions générales sont de la forme :
$$f(x) = A \cos(x) + B \sin(x), \quad \text{avec } (A, B) \in \mathbb{R}^2$$

Procédons maintenant à la **synthèse** pour déterminer les constantes $A$ et $B$.
Soit $f(x) = A \cos(x) + B \sin(x)$. Injectons $f$ dans l'équation initiale en $x=0$ :
1. Pour $x=0$, l'équation donne : $\Phi(f)(0) + f(0) = 0 \implies 0 + f(0) = 0 \implies A = 0$.
2. En dérivant une fois en $x=0$ : $\int_0^0 f(t) dt + f'(0) = 1 \implies B = 1$.

Vérifions si $f(x) = \sin(x)$ est solution :
Si $f(x) = \sin(x)$, alors :
$$(\Phi(f))(x) = \int_0^x (x-t)\sin(t) \, dt = \left[ -(x-t)\cos(t) \right]_0^x - \int_0^x \cos(t) \, dt = x - \sin(x)$$
D'où $(\Phi(f))(x) + f(x) = (x - \sin(x)) + \sin(x) = x$.

L'unique solution du problème est donc la fonction :
$$\boxed{f : x \mapsto \sin(x)}$$

---

### Analyse critique des résultats de l'examinateur

> **Bilan de l'exercice :**
> 1. **Injectivité et régularité :** L'utilisation successive des dérivations sous le signe intégrale (via le théorème de Leibniz) est un classique incontournable en MP2I. Elle permet de transformer une équation intégrodifférentielle en une équation différentielle ordinaire (EDO).
> 2. **Méthode d'analyse-synthèse :** Dans la Partie III, la phase de dérivation (analyse) est impérative pour deviner la forme des solutions. Cependant, la dérivation étant une opération non équivalente (elle élargit l'ensemble des solutions par introduction de constantes), la **synthèse** (ou vérification des conditions initiales cachées) était strictement indispensable pour conclure.