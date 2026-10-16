---
title: 'Exercice 2 : Ouverts, fermés et compacité'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $(E, \|\cdot\|)$ un espace vectoriel normé (EVN) sur le corps $\mathbb{K}$ (où $\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$). L'objet de ce problème est d'étudier certaines interactions topologiques fondamentales entre les ouverts, les fermés et les parties compactes de $E$, en s'intéressant plus particulièrement à la préservation de ces propriétés par des applications continues et par l'intermédiaire de distances à des ensembles.

On rappelle qu'une partie $K$ de $E$ est dite **compacte** si de tout recouvrement ouvert de $K$ on peut extraire un recouvrement fini (ou de manière équivalente dans les espaces métriques, si toute suite d'éléments de $K$ admet une sous-suite convergente vers un élément de $K$).

Pour toute partie non vide $A$ de $E$ et tout point $x \in E$, on définit la **distance du point $x$ à l'ensemble $A$** par :
$$d(x, A) = \inf_{a \in A} \|x - a\|$$

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Caractérisation séquentielle et topologique de l'adhérence**
   Soit $A$ une partie non vide de $E$. On note $\bar{A}$ l'adhérence de $A$.
   * **(a)** Établir que pour tout $x \in E$, on a l'équivalence : $x \in \bar{A} \iff d(x, A) = 0$.
   * **(b)** En déduire que l'application $x \mapsto d(x, A)$ est 1-lipschitzienne sur $E$.

2. **Propriétés de séparation par la distance**
   Soient $A$ et $B$ deux parties non vides, disjointes et fermées de $E$.
   * **(a)** On suppose que $A$ est compacte et $B$ est fermée. Montrer qu'il existe $a_0 \in A$ et $b_0 \in B$ tels que :
     $$d(A, B) = \inf_{(a, b) \in A \times B} \|a - b\| = \|a_0 - b_0\|$$
     *Analyse critique :* Le résultat précédent subsiste-t-il si l'on suppose seulement $A$ et $B$ fermés, sans compacité ? On construira un contre-exemple explicite dans $\mathbb{R}^2$ muni de la norme euclidienne.

3. **Images directes et réciproques par des applications continues**
   Soient $(E, \|\cdot\|_E)$ et $(F, \|\cdot\|_F)$ deux EVN, et $f : E \to F$ une application continue.
   * **(a)** Soit $K$ une partie compacte de $E$. Montrer que $f(K)$ est compacte dans $F$.
   * **(b)** L'image directe d'un fermé de $E$ par une application continue est-elle nécessairement un fermé de $F$ ? Justifier par un contre-exemple.

4. **Caractérisation des compacts par la propriété de finite intersection (Extension)**
   Soit $K$ une partie non vide d'un EVN $E$. On suppose que pour toute famille $(F_i)_{i \in I}$ de fermés de $E$ telle que $K \cap \left(\bigcap_{i \in I} F_i\right) = \emptyset$, il existe une sous-famille finie $J \subset I$ telle que $K \cap \left(\bigcap_{j \in J} F_j\right) = \emptyset$.
   Montrer que $K$ est compact.

---

### 💡 Pistes & Indications méthodologiques

* **Q1.** Pour l'implication non triviale de la question (a), exploitez la définition de la borne inférieure pour construire une suite d'éléments de $A$ convergeant vers $x$. Pour la question (b), majorez $\|x - a\| - \|y - a\|$ à l'aide de l'inégalité triangulaire inverse.
* **Q2.** Utilisez le théorème de Weierstrass (atteinte des bornes pour une fonction continue sur un compact). Pour le contre-exemple, pensez à une hyperbole et à son asymptote dans $\mathbb{R}^2$.
* **Q3.** Revenez à la définition séquentielle de la compacité (Bolzano-Weierstrass généralisé). Pour la question (b), pensez à une application exponentielle ou trigonométrique (par exemple $x \mapsto \arctan(x)$ ou $\sin(x)$).
* **Q4.** Passez aux complémentaires en considérant les ouverts $U_i = E \setminus F_i$ et traduisez l'hypothèse de recouvrement par les ouverts.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Caractérisation séquentielle et topologique de l'adhérence

* **(a)** Soit $x \in E$. 
  * Supposons $x \in \bar{A}$. Par définition de l'adhérence dans un espace métrique/normé, il existe une suite $(a_n)_{n \in \mathbb{N}}$ d'éléments de $A$ qui converge vers $x$. 
    Pour tout $n \in \mathbb{N}$, par définition de la borne inférieure, $0 \le d(x, A) \le \|x - a_n\|$. 
    En passant à la limite lorsque $n \to +\infty$, par encadrement, on obtient $d(x, A) = 0$.
  * Réciproquement, supposons que $d(x, A) = 0$. 
    Par définition de la borne inférieure, pour tout entier $n \ge 1$, il existe un élément $a_n \in A$ tel que $\|x - a_n\| < \frac{1}{n}$. 
    La suite $(a_n)_{n \ge 1}$ ainsi construite est à valeurs dans $A$ et converge vers $x$ puisque $\lim_{n \to +\infty} \|a_n - x\| = 0$. 
    Ainsi, $x$ est limite d'une suite d'éléments de $A$, ce qui signifie exactement que $x \in \bar{A}$.
Conclusion: * $\forall x \in E, \; x \in \bar{A} \iff d(x, A) = 0$.

* **(b)** Soient $x, y \in E$. Soit $\varepsilon > 0$. Par définition de la borne inférieure, il existe $a \in A$ tel que $\|y - a\| < d(y, A) + \varepsilon$.
  Par l'inégalité triangulaire :
  $$\|x - a\| \le \|x - y\| + \|y - a\| < \|x - y\| + d(y, A) + \varepsilon$$
  Par définition de la distance à l'ensemble $A$, on a $d(x, A) \le \|x - a\|$, d'où :
  $$d(x, A) < \|x - y\| + d(y, A) + \varepsilon$$
  Cette inéquation étant vraie pour tout $\varepsilon > 0$, on en déduit que :
  $$d(x, A) - d(y, A) \le \|x - y\|$$
  En échangeant les rôles de $x$ et $y$ (ou par symétrie de la norme), on obtient :
  $$|d(x, A) - d(y, A)| \le \|x - y\|$$
  L'application $x \mapsto d(x, A)$ est donc 1-lipschitzienne (et en particulier continue).

---

#### 2. Propriétés de séparation par la distance

* **(a)** L'application $f : A \to \mathbb{R}$ définie par $f(a) = d(a, B)$ est continue sur $A$ (car $a \mapsto d(a, B)$ est 1-lipschitzienne sur $E$).
  Puisque $A$ est une partie **compacte** de l'EVN $E$, le théorème de Weierstrass garantit que $f$ atteint ses bornes sur $A$. 
  Il existe donc $a_0 \in A$ tel que :
  $$\inf_{a \in A} d(a, B) = d(a_0, B) = \inf_{a \in A} \left( \inf_{b \in B} \|a - b\| \right) = \inf_{(a, b) \in A \times B} \|a - b\| = d(A, B)$$
  Par ailleurs, comme $B$ est **fermée**, d'après la question 1-(a), $d(a_0, B) = 0 \iff a_0 \in \bar{B} = B$. 
  Cependant, les ensembles $A$ et $B$ sont disjoints, donc $a_0 \notin B$, ce qui implique $d(a_0, B) > 0$. 
  Par définition de la borne inférieure sur $B$, il existe une suite $(b_n)$ dans $B$ telle que $\|a_0 - b_n\| \to d(a_0, B)$. 
  Cependant, sans compacité de $B$, cette suite n'a aucune raison de converger dans $B$. 
  *Correction rigoureuse de l'atteinte sur $B$ :* Comme la fonction $b \mapsto \|a_0 - b\|$ est continue et que l'on cherche sur un fermé non nécessairement compact, on peut restreindre l'étude à une boule fermée centrée en $a_0$ : l'intersection de $B$ avec cette boule est fermée et bornée (donc compacte si $E$ est de dimension finie, mais attention en dimension infinie !). 
  Si $E$ est de **dimension finie**, $A$ et $B$ fermés avec $A$ compact implique que $A$ et $B$ peuvent être séparés. Précisément, on pose $r = d(A, B)$. Si $A$ est compact et $B$ fermé, on considère $K = A \cap \bar{B}(a_0, R)$ qui est compact. Ainsi, il existe $b_0 \in B$ tel que $\|a_0 - b_0\| = d(a_0, B)$.

  *Contre-exemple (lorsque la compacité est omise, en dimension 2) :*
  Soit $E = \mathbb{R}^2$ muni de la norme euclidienne. 
  Considérons les deux fermés :
  $$A = \left\{(x, y) \in \mathbb{R}^2 \mid x > 0 \text{ et } xy \ge 1\right\} \quad \text{(ou plus simplement une branche d'hyperbole)}$$
  Prenons plus explicitement : 
  $A = \{(x, 0) \mid x \in \mathbb{R}\}$ (l'axe des abscisses, qui est fermé) et $B = \{(x, y) \in \mathbb{R}^2 \mid y = e^{-x}\}$ (graphe d'une fonction, fermé dans $\mathbb{R}^2$).
  Ici, $A$ et $B$ sont fermés et disjoints. 
  La distance $d(A, B) = \inf_{x \in \mathbb{R}} e^{-x} = 0$. 
  Cependant, il n'existe aucun $a \in A$ et $b \in B$ tels que $\|a - b\| = 0$, car $A \cap B = \emptyset$. La borne 0 n'est donc **jamais atteinte**.

---

#### 3. Images directes et réciproques par des applications continues

* **(a)** Soit $K$ une partie compacte de $E$ et soit $(y_n)_{n \in \mathbb{N}}$ une suite d'éléments de $f(K)$. 
  Par définition de l'image directe, pour tout $n \in \mathbb{N}$, il existe $x_n \in K$ tel que $y_n = f(x_n)$.
  La suite $(x_n)_{n \in \mathbb{N}}$ est à valeurs dans $K$. 
  Puisque $K$ est compact, il existe une sous-suite $(x_{\sigma(n)})_{n \in \mathbb{N}}$ qui converge vers un élément $x^\star \in K$.
  Par continuité de l'application $f$ en $x^\star$, la suite sous-extraite $(y_{\sigma(n)}) = (f(x_{\sigma(n)}))$ converge vers $f(x^\star) \in f(K)$.
  Ainsi, de toute suite d'éléments de $f(K)$, on peut extraire une suite convergente vers un élément de $f(K)$. 
Conclusion: * $f(K)$ est compact.

* **(b)** **L'image directe d'un fermé par une application continue n'est pas nécessairement un fermé.**
Contre-exemple: * 
  Soit $f : \mathbb{R} \to \mathbb{R}$ définie par $f(x) = \arctan(x)$. 
  L'application $f$ est continue sur $\mathbb{R}$. 
  L'ensemble $A = \mathbb{R}$ est un fermé de $\mathbb{R}$ (tout l'espace). 
  Cependant, l'image directe est $f(\mathbb{R}) = ]-\frac{\pi}{2}, \frac{\pi}{2}[$, qui est un intervalle ouvert, donc **strictement non fermé** dans $\mathbb{R}$.

---

#### 4. Caractérisation des compacts par la propriété de finite intersection

* Traduisons l'hypothèse topologiquement. Soit $K$ une partie non vide de $E$.
  L'énoncé stipule que pour toute famille de fermés $(F_i)_{i \in I}$ telle que :
  $$K \cap \left(\bigcap_{i \in I} F_i\right) = \emptyset$$
  il existe un sous-ensemble fini $J \subset I$ tel que :
  $$K \cap \left(\bigcap_{j \in J} F_j\right) = \emptyset$$
  
  En posant $U_i = E \setminus F_i$ (qui sont des ouverts de $E$), la condition $K \cap \left(\bigcap_{i \in I} F_i\right) = \emptyset$ se réécrit par passage au complémentaire :
  $$K \subset \bigcup_{i \in I} U_i$$
  C'est-à-dire que $(U_i)_{i \in I}$ est un recouvrement ouvert de $K$.
  
  L'hypothèse devient : si $(U_i)_{i \in I}$ est une famille d'ouverts recouvrant $K$, alors il existe une sous-famille finie $(U_j)_{j \in J}$ telle que :
  $$K \subset \bigcup_{j \in J} U_j$$
  
  Cette propriété correspond exactement à la **définition topologique de la compacité** (théorème de Borel-Lebesgue généralisé aux espaces topologiques/métriques). Par conséquent, $K$ est un compact. $\blacksquare$