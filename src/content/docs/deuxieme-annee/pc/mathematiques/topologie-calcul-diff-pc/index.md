---
title: 'Cours : Topologie et calcul différentiel'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PC.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $(E, \|\cdot\|)$ et $(F, \|\cdot\|_F)$ deux espaces normés réels de dimension finie, et $U$ un ouvert de $E$.

### Différentiabilité en un point
Une application $f : U \to F$ est dite différentiable en un point $a \in U$ s'il existe une application linéaire continue $L \in \mathcal{L}(E, F)$ et une application $\varepsilon : U \to F$ telles que :
$$\forall h \in E, \quad f(a+h) = f(a) + L(h) + \|h\| \varepsilon(h) \quad \text{avec} \quad \lim_{h \to 0} \varepsilon(h) = 0_F$$

L'application linéaire $L$, unique si elle existe, est appelée la différentielle de $f$ en $a$, notée $df(a)$ ou $\mathrm{d}f(a)$.

### Continuité et caractérisation séquentielle
* Toute application différentiable en $a$ est continue en $a$.
* En dimension finie, toute application linéaire est continue.

### Dérivées partielles
Si $E = \mathbb{R}^n$ muni d'une base canonique $(e_1, \dots, e_n)$, les dérivées partielles de $f$ en $a = (a_1, \dots, a_n)$ par rapport à la $j$-ième variable sont définies par :
$$\frac{\partial f}{\partial x_j}(a) = \lim_{t \to 0} \frac{f(a_1, \dots, a_j + t, \dots, a_n) - f(a)}{t}$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème de Schwarz (Symétrie des dérivées partielles secondes)
Si $f : U \to F$ est de classe $\mathcal{C}^2$ sur l'ouvert $U \subset \mathbb{R}^n$, alors pour tout $a \in U$ et pour tout $(i, j) \in \{1, \dots, n\}^2$ :
$$\frac{\partial^2 f}{\partial x_i \partial x_j}(a) = \frac{\partial^2 f}{\partial x_j \partial x_i}(a)$$

*Démonstration (Cas $n=2$) :*
On considère la quantité membranaire (ou accroissement double) sur un rectangle $[a_1, a_1+h_1] \times [a_2, a_2+h_2]$ :
$$\Delta(h_1, h_2) = f(a_1+h_1, a_2+h_2) - f(a_1+h_1, a_2) - f(a_1, a_2+h_2) + f(a_1, a_2)$$
En introduisant $g(t) = f(t, a_2+h_2) - f(t, a_2)$, on a $\Delta(h_1, h_2) = g(a_1+h_1) - g(a_1)$. Par le théorème des accroissements finis appliqué à $g$ :
$$\Delta(h_1, h_2) = h_1 g'(c_1) = h_1 \left( \frac{\partial f}{\partial x_1}(c_1, a_2+h_2) - \frac{\partial f}{\partial x_1}(c_1, a_2) \right)$$
En appliquant à nouveau le théorème des accroissements finis par rapport à la seconde variable :
$$\Delta(h_1, h_2) = h_1 h_2 \frac{\partial^2 f}{\partial x_2 \partial x_1}(c_1, c_2)$$
En procédant de même en inversant l'ordre des applications, on obtient :
$$\Delta(h_1, h_2) = h_1 h_2 \frac{\partial^2 f}{\partial x_1 \partial x_2}(c'_1, c'_2)$$
Par continuité des dérivées partielles secondes en $(a_1, a_2)$, lorsque $(h_1, h_2) \to (0, 0)$, on conclut par isélité des limites. $\blacksquare$

### Théorème des accroissements finis
Soit $f : [a, b] \to \mathbb{R}$ continue sur $[a, b]$ et différentiable sur ouvert contenant $[a, b]$. Si $\|df(x)\| \le M$ pour tout $x \in ]a, b[$, alors :
$$\|f(b) - f(a)\| \le M \|b - a\|$$
*(Attention : Faux si $F$ est de dimension infinie ou non convexe).*

---

## 💡 3. Méthodes de calcul & Algorithmes

### Matrice Jacobienne
Si $f : U \subset \mathbb{R}^n \to \mathbb{R}^p$ est différentiable en $a$, sa différentielle $df(a) \in \mathcal{L}(\mathbb{R}^n, \mathbb{R}^p)$ est représentée dans les bases canoniques par la matrice jacobienne $J_f(a) \in \mathcal{M}_{p,n}(\mathbb{R})$ :
$$J_f(a) = \begin{pmatrix} 
\frac{\partial f_1}{\partial x_1}(a) & \cdots & \frac{\partial f_1}{\partial x_n}(a) \\ 
\vdots & \ddots & \vdots \\ 
\frac{\partial f_p}{\partial x_1}(a) & \cdots & \frac{\partial f_p}{\partial x_n}(a) 
\end{pmatrix}$$

### Règle de chaine (Chain Rule)
Soit $U \subset \mathbb{R}^n$ et $V \subset \mathbb{R}^p$ deux ouverts. Soit $f : U \to V$ différentiable en $a$ et $g : V \to \mathbb{R}^m$ différentiable en $f(a)$. Alors $g \circ f$ est différentiable en $a$ et sa matrice jacobienne en $a$ vérifie :
$$J_{g \circ f}(a) = J_g(f(a)) \times J_f(a)$$

### Recherche d'extremums locaux
1. **Condition nécessaire d'ordre 1 :** Si $f : U \to \mathbb{R}$ admet un extremum local en $a \in U$ et si $f$ est différentiable en $a$, alors $df(a) = 0_{\mathcal{L}(E, \mathbb{R})}$ (soit $\nabla f(a) = 0_{\mathbb{R}^n}$).
2. **Condition suffisante d'ordre 2 :** Si $df(a) = 0$ et si la matrice hessienne $H_f(a) \in \mathcal{M}_{n,n}(\mathbb{R})$ est :
   - Definie positive : $f$ admet un **minimum local strict**.
   - Definie négative : $f$ admet un **maximum local strict**.
   - Non dégénérée de signature mixte : $f$ a un **point selle**.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Continuité des dérivées partielles vs Différentiabilité :** 
   Ce n'est pas parce qu'un champ scalaire admet des dérivées partielles en un point qu'il y est différentiable. Pis encore : l'existence des dérivées partielles en tout point ne garantit même pas la continuité ! Le théorème fondamental à retenir est : **$\mathcal{C}^1 \implies$ différentiable $\implies$ continue et dérivées partielles existantes**.
2. **Oubli de vérifier le domaine de définition et la convexité :**
   Le théorème des accroissements finis **ne s'applique pas** si l'ouvert n'est pas convexe. Toujours relier les points par un segment inclus dans l'ouvert.
3. **Confusion entre gradient et vecteur normal :**
   Pour une surface d'équation $f(x, y, z) = 0$, le gradient $\nabla f(a)$ est orthogonal à la surface en $a$ *uniquement* si la différentielle n'est pas nulle ($\nabla f(a) \neq 0$).
4. **Mauvaise manipulation des dimensions dans la Chain Rule :**
   Toujours vérifier le produit des matrices jacobiennes par analyse dimensionnelle : si $f : \mathbb{R}^n \to \mathbb{R}^p$ et $g : \mathbb{R}^p \to \mathbb{R}^m$, alors $J_g$ est de taille $m \times p$ et $J_f$ de taille $p \times n$, donc $J_{g \circ f}$ est bien de taille $m \times n$.