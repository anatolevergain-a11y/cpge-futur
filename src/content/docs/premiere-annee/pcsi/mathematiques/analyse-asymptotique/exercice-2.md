---
title: 'Exercice 2 : Équivalents classiques'
description: 'Problème d entraînement type concours.'
---

# Problème : Étude asymptotique d'une suite récurrente et développement de fonctions implicites

**Matière :** Mathématiques  
**Filière :** PCSI  
Chapitre: ** Analyse asymptotique  
**Thème :** Équivalents classiques et développements asymptotiques  

---

## 1. Énoncé

Le problème s'articule autour de l'étude locale d'une fonction définie par une intégrale, puis de son application à la résolution approchée d'une équation, et enfin à l'étude d'une suite récurrente. 

Soit $f$ la fonction définie sur $\left[0, +\infty\right[$ par :
$$f(x) = \int_0^x e^{-t^2} \cos(t) \, dt$$

L'objectif est d'obtenir un équivalent simple de $f(x)$ au voisinage de $0$, puis d'étudier le comportement de la suite $(u_n)_{n \in \mathbb{N}}$ définie par la relation de récurrence :
$$u_{n+1} = f(u_n), \quad u_0 > 0$$

---

## 2. Questions

### Partie I : Étude de la fonction $f$
1. Justifier que $f$ est de classe $\mathcal{C}^\infty$ sur $\left[0, +\infty\right[$ et calculer ses premières dérivées en $0$.
2. En déduire un développement limité de $f(x)$ à l'ordre $4$ au voisinage de $0$.
3. Donner un équivalent simple de $f(x)$ lorsque $x$ tend vers $0$ par valeurs supérieures.

### Partie II : Étude d'une suite récurrente
4. On pose $u_0 > 0$ assez petit. Montrer que la suite $(u_n)_{n \in \mathbb{N}}$ est bien définie, à termes strictement positifs, et déterminer sa limite.
5. Déterminer un équivalent de $u_n$ lorsque $n tend vers $+\infty$. *Indication : On pourra étudier la suite auxiliaire $v_n = \frac{1}{u_n^\alpha}$ pour un réel $\alpha$ bien choisi.*

### Partie III : Analyse critique du modèle
6. Discuter la validité de l'approximation $f(x) \sim x$ lorsque $x$ s'éloigne de $0$. Quelles sont les limites de ce modèle asymptotique pour l'étude globale de la suite $(u_n)$ si $u_0$ n'est plus choisi au voisinage de $0$ ?

---

## 3. Pistes et indications

* **Q1-Q2 :** Utilisez les développements limités usuels de $t \mapsto e^{-t^2}$ et $t \mapsto \cos(t)$ à l'ordre convenable, puis procédez par intégration terme à terme d'un développement limité (ce qui est légitime sur un segment).
* **Q4 :** Étudiez la fonction auxiliaire $g(x) = f(x) - x$ pour déterminer le signe de $f(x) - x$ au voisinage de $0$.
* **Q5 :** Si $u_{n+1} \sim u_n - c u_n^3$, l'étude de l'inverse ou d'une puissance négative permet de faire apparaître une suite arithmétique au premier ordre.

---

## 4. Corrigé pas à pas

### Partie I : Étude de la fonction $f$

**Q1.** La fonction $h : (x, t) \mapsto e^{-t^2} \cos(t)$ est continue ainsi que toutes ses dérivées partielles sur $\mathbb{R}^2$ (car composées de fonctions de classe $\mathcal{C}^\infty$). Par le théorème de dérivation des intégrales dépendant d'un paramètre (théorème de Leibniz), $f$ est de classe $\mathcal{C}^\infty$ sur $\left[0, +\infty\right[$. 
Pour tout $x \ge 0$ :
$$f'(x) = e^{-x^2} \cos(x)$$
En dérivant successivement :
- $f'(0) = 1$
- $f''(x) = -2x e^{-x^2} \cos(x) - e^{-x^2} \sin(x) \implies f''(0) = 0$
- $f'''(0) = -2$ (par calcul direct ou en utilisant les DL)

**Q2.** Au voisinage de $0$, nous avons les développements limités usuels :
$$e^{-t^2} = 1 - t^2 + o(t^2)$$
$$\cos(t) = 1 - \frac{t^2}{2} + o(t^3)$$
En effectuant le produit des deux DL à l'ordre $2$ (qui donnera une précision à l'ordre $4$ après intégration) :
$$e^{-t^2} \cos(t) = \left(1 - t^2 + o(t^3)\right)\left(1 - \frac{t^2}{2} + o(t^3)\right) = 1 - \frac{3}{2}t^2 + o(t^3)$$
Par intégration sur $[0, x]$ (valable car le reste est continu et intégbrable) :
$$f(x) = \int_0^x \left(1 - \frac{3}{2}t^2 + o(t^3)\right) dt = x - \frac{1}{2}x^3 + o(x^4)$$

**Q3.** Du développement limité précédent, on déduit immédiatement que :
$$f(x) \underset{0}{\sim} x$$

---

### Partie II : Étude d'une suite récurrente

**Q4.** Soit $g(x) = f(x) - x = -\frac{1}{2}x^3 + o(x^4)$. Pour $x > 0$ et assez petit, $g(x) < 0$, c'est-à-dire $f(x) < x$.  
Si on choisit $u_0 \in ]0, \epsilon[$ avec $\epsilon$ assez petit, alors :
- $u_1 = f(u_0) \in ]0, u_0[$ (car $f$ est strictement croissante sur ce voisinage, $f(0)=0$).
- Par récurrence immédiate, la suite $(u_n)$ est à termes strictement positifs, strictement décroissante.
Étant minorée par $0$, elle converge vers un réel $\ell$. Par continuité de $f$, $\ell = f(\ell)$. Or $f(\ell) = \ell \implies -\frac{1}{2}\ell^3 + o(\ell^4) = 0$, donc $\ell = 0$.

**Q5.** Écrivons la relation sous la forme :
$$u_{n+1} = u_n - \frac{1}{2}u_n^3 + o(u_n^3)$$
Considérons la suite $v_n = \frac{1}{u_n^2}$. Alors :
$$v_{n+1} = \frac{1}{u_{n+1}^2} = \frac{1}{\left(u_n - \frac{1}{2}u_n^3 + o(u_n^3)\right)^2} = \frac{1}{u_n^2 \left(1 - \frac{1}{2}u_n^2 + o(u_n^2)\right)^2}$$
En utilisant $(1-X)^{-2} = 1 + 2X + o(X)$ :
$$v_{n+1} = v_n \left(1 + u_n^2 + o(u_n^2)\right) = v_n + 1 + o(1)$$
On en déduit par sommation de Cesàro ou télescopage que $v_n \underset{n \to +\infty}{\sim} n$.  
Ainsi, $\frac{1}{u_n^2} \sim n$, ce qui donne l'équivalent recherché :
$$u_n \underset{n \to +\infty}{\sim} \frac{1}{\sqrt{n}}$$

---

### Partie III : Analyse critique du modèle

**Q6.** L'approximation $f(x) \sim x$ (et plus généralement le développement limité $f(x) = x - \frac{1}{2}x^3 + o(x^3)$) repose fondamentalement sur l'hypothèse que $x$ est **au voisinage de $0$**. 

* **Limites du modèle :** 
  1. *Validité locale vs globale :* Si $u_0$ n'est pas choisi suffisamment petit, la minoration $f(x) < x$ n'est plus garantie. La fonction $f$ possède des variations globales dictées par l'intégrale complète (qui tend vers une limite finie quand $x \to +\infty$). 
  2. *Erreur cumulée :* Dans l'étude de la suite $(u_n)$, négliger les termes en $o(u_n^3)$ n'est rigoureux que tant que $u_n$ reste petit. Si le modèle asymptotique est appliqué hors de son domaine de validité, le terme d'erreur $o(u_n^3)$ peut devenir prépondérant devant les termes conservés, invalidateur total de l'équivalent final $u_n \sim \frac{1}{\sqrt{n}}$. 
  
En conclusion, l'analyse asymptotique est un outil puissant mais **strictement local** : elle nécessite impérativement un contrôle initial de la variable (ici, $u_0$ dans un voisinage adéquat de $0$) pour propager les estimations d'une étape à la suivante.