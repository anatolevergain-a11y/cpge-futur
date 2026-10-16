---
title: 'Cours : Calcul différentiel'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $E$ et $F$ deux $\mathbb{K}$-espaces vectoriels normés (où $\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$), le plus souvent de dimension finie dans le cadre du programme de MP. Soit $U$ un ouvert de $E$.

### 1.1 Différentiabilité en un point
**Définition :** Une application $f : U \to F$ est dite différentiable en un point $a \in U$ s'il existe une application linéaire continue $L \in \mathcal{L}(E, F)$ et une application $r : U \to F$ telles que, pour tout $h$ dans un voisinage de $0$ dans $E$ tel que $a+h \in U$ :
$$f(a+h) = f(a) + L(h) + \|h E\| \, \varepsilon(h)$$
où $\lim_{h \to 0} \varepsilon(h) = 0_F$. 

Si une telle application $L$ existe, elle est unique. On la note $df(a)$ ou $f'(a)$, appelée la **différentielle** de $f$ en $a$.

### 1.2 Continuité des fonctions différentiables
Proposition: ** Si $f : U \to F$ est différentiable en $a \in U$, alors $f$ est continue en $a$. La réciproque est fausse.

### 1.3 Dérivées partielles et gradient
* **Dérivées partielles :** Si $E = \mathbb{R}^n$ muni d'une base canonique $(e_1, \dots, e_n)$, la dérivée partielle de $f$ par rapport à la $i$-ième variable en $a = (a_1, \dots, a_n)$ est définie par :
  $$\frac{\partial f}{\partial x_i}(a) = \lim_{t \to 0} \frac{f(a_1, \dots, a_i + t, \dots, a_n) - f(a)}{t}$$
* **Gradient :** Si $F = \mathbb{R}$ et $E$ est un espace préhilbertien réel, le gradient $\nabla f(a)$ est l'unique vecteur de $E$ tel que, pour tout $h \in E$, $df(a)(h) = \langle \nabla f(a), h \rangle$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1 Théorème de Schwarz (Symétrie des dérivées secondes)
**Énoncé :** Soit $U$ un ouvert de $\mathbb{R}^n$ et $f : U \to F$ de classe $\mathcal{C}^2$ sur $U$. Pour tout $a \in U$ et pour tout $(i, j) \in \{1, \dots, n\}^2$, on a :
$$\frac{\partial^2 f}{\partial x_i \partial x_j}(a) = \frac{\partial^2 f}{\partial x_j \partial x_i}(a)$$

### 2.2 Théorème des accroissements finis (et inégalité)
**Inégalité des accroissements finis (IAF) :** Soit $U$ un ouvert convexe de $E$ et $f : U \to F$ différentiable sur $U$. S'il existe une constante $k \in \mathbb{R}_+$ telle que, pour tout $x \in U$, $\|df(x)\|_{\mathcal{L}(E,F)} \leq k$, alors :
$$\forall (x, y) \in U^2, \quad \|f(y) - f(x)\| \leq k \|y - x\|$$
Attention: * L'égalité des accroissements finis est fausse en dimension strictement supérieure à $1$ (prendre $f : [0, 2\pi] \to \mathbb{R}^2, t \mapsto (\cos t, \sin t)$).

### 2.3 Théorème d'inversion locale (TIL)
**Énoncé :** Soit $U$ un ouvert de $\mathbb{R}^n$, $f : U \to \mathbb{R}^n$ une application de classe $\mathcal{C}^k$ (avec $k \geq 1$) et $a \in U$. Si la différentielle $df(a)$ est un isomorphisme (c'est-à-dire $\det(Jac_f(a)) \neq 0$), alors il existe un ouvert $U$ contenant $a$ et un ouvert $V$ contenant $f(a)$ tels que :
1. $f$ réalise un $\mathcal{C}^k$-difféomorphisme de $U$ sur $V$.

### 2.4 Théorème des fonctions implicites (TFI)
**Énoncé :** Soit $E, F, G$ des $\mathbb{K}$-espaces vectoriels normés de dimension finie, $U \times V$ un ouvert de $E \times F$ et $f : U \times V \to G$ une application de classe $\mathcal{C}^k$ ($k \geq 1$). Soit $(x_0, y_0) \partial U \times V$ tel que $f(x_0, y_0) = 0_G$. 
Si l'application partielle $y \mapsto \frac{\partial f}{\partial y}(x_0, y_0)$ est un isomorphisme de $F$ sur $G$, alors il existe un voisinage ouvert $U_0$ de $x_0$ dans $E$, un voisinage ouvert $V_0$ de $y_0$ dans $F$ et une unique application $\varphi : U_0 \to V_0$ de classe $\mathcal{C}^k$ telle que :
$$f(x, \varphi(x)) = 0_G \iff (x, y) \in U_0 \times V_0 \text{ et } y = \varphi(x)$$

---

## 💡 3. Méthodes classiques de résolution

### 3.1 Calcul de différentielles par composition (Dérivation des fonctions composées)
Pour calculer la différentielle d'une fonction composée $h = g \circ f$, on utilise la règle de chaine (chain rule) :
$$dh(a) = dg(f(a)) \circ df(a)$$
En termes matriciels (Jacobiennes) :
$$\text{Jac}_{g \circ f}(a) = \text{Jac}_g(f(a)) \times \text{Jac}_f(a)$$

### 3.2 Recherche d'extremums locaux
Soit $f : U \to \mathbb{R}$ de classe $\mathcal{C}^1$ sur un ouvert $U$.
1. **Condition nécessaire d'extremum local :** Si $a \in U$ est un extremum local de $f$, alors $df(a) = 0$ (le point $a$ est dit **critique**).
2. **Étude en dimension $2$ (Matrice hessienne) :** Si $f$ est $\mathcal{C}^2$ et $a$ est un point critique, on étudie la signature des valeurs propres de la matrice hessienne $\nabla^2 f(a)$ :
   * Si les valeurs propres sont strictement de même signe (déterminant strictement positif et trace de même signe que les valeurs propres), $f$ présente un extremum local strict.
   * Si les valeurs propres sont de signes estrictement opposés ($\det < 0$), $f$ présente un point selle (ou col).
   * Si le déterminant est nul, l'étude ne permet pas de conclure (termes d'ordre supérieur nécessaires).

### 3.3 Changement de variables dans les équations aux dérivées partielles (EDP)
Pour résoudre une EDP :
1. Identifier l'ouvert de définition et la classe de régularité recherchée.
2. Poser le changement de variables $(u, v) = \Phi(x, y)$ en s'assurant que $\Phi$ est un $\mathcal{C}^k$-difféomorphisme.
3. Exprimer les dérivées partielles premières et secondes de $f(x, y)$ en fonction de $g(u, v) = f(\Phi^{-1}(u, v))$ en utilisant systématiquement la règle de composition.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confondre différentiabilité et existence des dérivées partielles :** L'existence des dérivées partielles premières en un point n'implique **pas** la différentiabilité (sauf si ces dérivées partielles sont de surcroît *continues* en ce point, ce qui caractérise les fonctions $\mathcal{C}^1$).
2. **Oublier de vérifier l'ouvert :** Les théorèmes fondamentaux (Accroissements finis, Inversion locale, Fonctions implicites) s'appliquent **exclusivement** sur des ouverts. Vérifier systématiquement que le domaine est ouvert avant d'appliquer un théorème.
3. **Mauvaise application du Théorème de Schwarz :** Vérifier rigoureusement que la fonction est de classe $\mathcal{C}^2$ (ou au moins deux fois différentiable avec continuité des dérivées mixtes) avant d'inverser l'ordre des dérivées partielles.
4. **Conclusion hâtive sur les points critiques :** Conclure qu'un point est un extremum sous prétexte que le gradient s'annule, sans étudier la Hessienne ou le signe local de $f(x) - f(a)$. Un point critique n'est ni nécessairement un maximum, ni un minimum (ex: point selle).
5. **Confusion entre applications linéaires et matrices :** Dans la rédaction, bien distinguer la différentielle $df(a)$ qui est une **application linéaire**, et la matrice jacobienne ou hessienne qui en sont des **représentations matricielles** dans une base fixée.