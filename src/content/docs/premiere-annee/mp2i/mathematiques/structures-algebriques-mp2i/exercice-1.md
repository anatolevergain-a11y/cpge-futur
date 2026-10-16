---
title: 'Exercice 1 : Groupes, sous-groupes et morphismes'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $(G, \cdot)$ un groupe de neutre $e$. On s'intéresse dans ce problème à la structure des automorphismes de $G$ et à certaines équations fonctionnelles dans les groupes.

On rappelle qu'un endomorphisme de groupe $G$ est une application $\varphi : G \to G$ telle que pour tout $(x, y) \in G^2$, $\varphi(x \cdot y) = \varphi(x) \cdot \varphi(y)$. Si de plus $\varphi$ est bijective, on dit que $\varphi$ est un automorphisme de $G$. On note $\text{Aut}(G)$ l'ensemble des automorphismes de $G$.

---

### ❓ Questions progressives

1. **Propriétés élémentaires des morphismes**
   Soit $\varphi : G \to G$ un endomorphisme de groupe. 
   a) Montrer que $\varphi(e) = e$.
   b) Montrer que pour tout $x \in G$, $\varphi(x^{-1}) = (\varphi(x))^{-1}$.
   c) Montrer que l'ensemble $\text{Aut}(G)$ muni de la loi de composition des applications $\circ$ est un groupe.

2. **Étude d'un morphisme particulier**
   Pour un élément fixe $g \in G$, on définit l'application conjugaison $\gamma_g : G \to G$ par $\gamma_g(x) = g \cdot x \cdot g^{-1}$.
   a) Montrer que $\gamma_g$ est un automorphisme de $G$.
   b) On note $\text{Inn}(G) = \{ \gamma_g \mid g \in G \}$ l'ensemble des automorphismes intérieurs. Montrer que $\text{Inn}(G)$ est un sous-groupe de $(\text{Aut}(G), \circ)$.

3. **Application aux groupes finis**
   On suppose désormais que $G$ est un groupe fini. Soit $f : G \to G$ l'application définie par $f(x) = x^2$.
   a) Montrer que $f$ est un morphisme de groupes si et seulement si $G$ est abélien.
   b) On suppose que $G$ est un groupe fini d'ordre impair. Montrer que l'application $x \mapsto x^2$ est une bijection de $G$ dans $G$. *(Indice : penser à étudier le noyau de ce morphisme si $G$ est abélien, ou la surjectivité par un argument de cardinalité).*

---

### 💡 Pistes & Indications méthodologiques

- **Q1 a) & b) :** Utilisez l'équation fonctionnelle en évaluant le morphisme en des éléments neutres ou symétriques (par exemple $e \cdot e = e$).
- **Q1 c) :** Vérifiez les axiomes d'un groupe : associativité (vraie pour la composition), existence d'un neutre (l'identité $\text{Id}_G$), existence d'un inverse (la bijection réciproque d'un automorphisme est-elle un automorphisme ?).
- **Q2 a) :** Calculez $\gamma_g(x \cdot y)$ et utilisez l'associativité dans $G$. Pour la bijectivité, construisez explicitement l'application réciproque.
- **Q3 a) :** Procédez par équivalence. Pour le sens direct, écrivez que $f(xy) = f(x)f(y)$ pour tous $x, y$ et simplifiez.
- **Q3 b) :** Dans un ensemble fini, une application de $G$ dans $G$ est injective si et seulement si elle est surjective. Utilisez l'ordre des éléments ou le théorème de Lagrange (souvent utile en MP2I pour contraindre l'ordre des éléments dans les groupes finis).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Propriétés élémentaires des morphismes

a) Soit $\varphi : G \to G$ un endomorphisme. On a :
$$\varphi(e) = \varphi(e \cdot e) = \varphi(e) \cdot \varphi(e)$$
En composant à gauche (ou à droite) par $(\varphi(e))^{-1}$, on obtient immédiatement :
$$\mathbf{\varphi(e) = e}$$

b) Soit $x \in G$. On sait que $x \cdot x^{-1} = e$. En appliquant $\varphi$ et en utilisant le résultat précédent :
$$\varphi(x) \cdot \varphi(x^{-1}) = \varphi(x \cdot x^{-1}) = \varphi(e) = e$$
Par unicité du symétrique dans le groupe $G$, cela implique que :
$$\mathbf{\varphi(x^{-1}) = (\varphi(x))^{-1}}$$

c) Montrons que $(\text{Aut}(G), \circ)$ est un groupe :
- **Loi interne :** Soient $(\varphi, \psi) \in (\text{Aut}(G))^2$. $\varphi \circ \psi$ est la composée de bijections, donc c'est une bijection. De plus, pour tous $x, y \in G$ :
  $$(\varphi \circ \psi)(x \cdot y) = \varphi(\psi(x) \cdot \psi(y)) = \varphi(\psi(x)) \cdot \varphi(\psi(y)) = (\varphi \circ \psi)(x) \cdot (\varphi \circ \psi)(y)$$
  Donc $\varphi \circ \psi \in \text{Aut}(G)$.
- **Associativité :** La composition des applications est toujours associative.
- **Élément neutre :** L'application identité $\text{Id}_G$ est un morphisme bijectif, donc $\text{Id}_G \in \text{Aut}(G)$, et $\text{Id}_G \circ \varphi = \varphi \circ \text{Id}_G = \varphi$.
- **Élément symétrique :** Soit $\varphi \in \text{Aut}(G)$. $\varphi$ étant bijective, sa réciproque $\varphi^{-1}$ existe et est bijective. Montrons qu'elle est un morphisme. Soient $u, v \in G$. Posons $x = \varphi^{-1}(u)$ et $y = \varphi^{-1}(v)$ (donc $u = \varphi(x)$ et $v = \varphi(y)$).
  $$\varphi^{-1}(u \cdot v) = \varphi^{-1}(\varphi(x) \cdot \varphi(y)) = \varphi^{-1}(\varphi(x \cdot y)) = x \cdot y = \varphi^{-1}(u) \cdot \varphi^{-1}(v)$$
  Ainsi, $\varphi^{-1} \in \text{Aut}(G)$.
Conclusion: ** $(\text{Aut}(G), \circ)$ est bien un groupe.

---

#### 2. Étude d'un morphisme particulier

a) Soit $g \in G$ et $\gamma_g(x) = g \cdot x \cdot g^{-1}$.
- **Morphismes :** Soient $(x, y) \in G^2$.
  $$\gamma_g(x \cdot y) = g \cdot (x \cdot y) \cdot g^{-1} = g \cdot x \cdot (g^{-1} \cdot g) \cdot y \cdot g^{-1} = (g \cdot x \cdot g^{-1}) \cdot (g \cdot y \cdot g^{-1}) = \gamma_g(x) \cdot \gamma_g(y)$$
- **Bijectivité :** L'application $\gamma_{g^{-1}}$ est son inverse réciproque. En effet, pour tout $x \in G$ :
  $$\gamma_g(\gamma_{g^{-1}}(x)) = g \cdot (g^{-1} \cdot x \cdot g) \cdot g^{-1} = (g \cdot g^{-1}) \cdot x \cdot (g \cdot g^{-1}) = e \cdot x \cdot e = x$$
  De même, $\gamma_{g^{-1}} \circ \gamma_g = \text{Id}_G$. Ainsi $\gamma_g$ est bijective.
Conclusion: ** $\gamma_g \in \text{Aut}(G)$.

b) Montrons que $\text{Inn}(G)$ est un sous-groupe de $\text{Aut}(G)$ :
- **Non-vacuité :** $\text{Inn}(G)$ contient $\gamma_e = \text{Id}_G$, donc il n'est pas vide.
- **Stabilité par composition et inverse :** Soient $(g, h) \in G^2$. Remarquons que pour tout $x \in G$ :
  $$(\gamma_g \circ \gamma_h)(x) = g \cdot (h \cdot x \cdot h^{-1}) \cdot g^{-1} = (g h) \cdot x \cdot (g h)^{-1} = \gamma_{gh}(x)$$
  Ainsi, $\gamma_g \circ \gamma_h = \gamma_{gh} \in \text{Inn}(G)$. De plus, $(\gamma_g)^{-1} = \gamma_{g^{-1}} \in \text{Inn}(G)$.
Conclusion: ** $\text{Inn}(G)$ est un sous-groupe de $(\text{Aut}(G), \circ)$.

---

#### 3. Application aux groupes finis

a) Supposons que $f : x \mapsto x^2$ soit un morphisme de groupes. Alors, pour tous $x, y \in G$ :
$$f(xy) = f(x)f(y) \implies (xy)^2 = x^2 y^2$$
Développons :
$$x \cdot y \cdot x \cdot y = x \cdot x \cdot y \cdot y$$
En simplifiant à gauche par $x$ et à droite par $y$ (par régularité dans le groupe), il vient :
$$y \cdot x = x \cdot y$$
Ceci étant vrai pour tout $(x, y) \in G^2$, le groupe $G$ est abélien.

Réciproquement, si $G$ est abélien :
$$f(xy) = (xy)(xy) = x \cdot (yx) \cdot y = x \cdot (xy) \cdot y = x^2 y^2 = f(x)f(y)$$
(car $yx = xy$). Donc $f$ est bien un morphisme.

b) On suppose que $G$ est un groupe fini d'ordre impair. 
Considérons l'application $f : G \to G$ définie par $f(x) = x^2$. 
Montrons que $f$ est injective. Soit $x \in G$ tel que $f(x) = e$, c'est-à-dire $x^2 = e$. 
Par le théorème de Lagrange, l'ordre de $x$ (noté $o(x)$) divise l'ordre du groupe $|G|$. 
Puisque $|G|$ est impair, $o(x)$ est nécessairement un diviseur impair de $|G|$. 
Cependant, $x^2 = e$ implique que $o(x)$ divise $2$. Le seul diviseur commun à un nombre impair et à $2$ est $1$. 
Par conséquent, $o(x) = 1$, soit $x = e$. 

Le noyau du morphisme (si $G$ est abélien, ou l'ensemble des antécédents de $e$ dans le cas général) est réduit à $\{e\}$. L'application $f$ est donc **injective**.

Puisque $G$ est un ensemble **fini**, toute application injective d'un ensemble fini dans lui-même est également **surjective**.
Conclusion: ** L'application $x \mapsto x^2$ est une bijection de $G$ dans $G$ (tout élément de $G$ admet une unique racine carrée).