---
title: 'Exercice 1 : Produit scalaire et procédé de Gram-Schmidt'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $E = \mathbb{R}_2[X]$ l'espace vectoriel des polynômes à coefficients réels de degré inférieur ou égal à $2$. 
On définit une application $\langle \cdot, \cdot \rangle$ sur $E \times E$ par la formule :
$$\forall (P, Q) \in E^2, \quad \langle P, Q \rangle = \int_{-1}^{1} t P(t) Q(t) \, \text{d}t$$

*(Note de l'examinateur : On veillera à bien identifier la nature de cette application, car le poids $t$ change la donne par rapport au produit scalaire usuel $L^2$.)*

---

### ❓ Questions progressives

1. **Vérification du produit scalaire :** Montrer que l'application $\langle \cdot, \cdot \rangle$ **n'est pas** un produit scalaire sur $E$. *(Indicateur d'alerte : attention au signe du poids $t$ sur l'intervalle $[-1, 1]$).*
2. **Modification de l'espace / du poids :** On restreint désormais notre étude à l'espace $E = \mathbb{R}_2[X]$ muni de l'application $\langle \cdot, \cdot \rangle_{\text{alt}}$ définie par :
   $$\forall (P, Q) \in E^2, \quad \langle P, Q \rangle_{\text{alt}} = \int_{-1}^{1} |t| P(t) Q(t) \, \text{d}t$$
   Montrer que $\langle \cdot, \cdot \rangle_{\text{alt}}$ est un produit scalaire sur $E$.
3. **Orthonormalisation :** En appliquant le procédé de Gram-Schmidt à la base canonique $\mathcal{B} = (1, X, X^2)$ de $E$, déterminer une base orthonormée $\mathcal{B}' = (e_0, e_1, e_2)$ de $E$ pour ce nouveau produit scalaire.
4. **Application géométrique :** Soit $F = \text{Vect}(1, X)$. Déterminer la distance du polynôme $P_0(X) = X^2$ au sous-espace $F$ au sens de la norme associée à $\langle \cdot, \cdot \rangle_{\text{alt}}$.

---

### 💡 Pistes & Indications méthodologiques

* **Q1 :** Testez la propriété de positivité $\langle P, P \rangle \ge 0$ avec un polynôme bien choisi, par exemple $P(t) = 1$. L'intégrale est-elle toujours positive sur $[-1, 1]$ ?
* **Q2 :** Rappelez les trois axiomes d'un produit scalaire sur un $\mathbb{R}$-espace vectoriel : bilinéarité, symétrie, et positivité non dégénérée. L'introduction de la valeur absolue $|t|$ garantit la positivité.
* **Q3 :** Suivez scrupuleusement l'algorithme de Gram-Schmidt :
  * $e_1$ s'obtient en normalisant le premier vecteur de la base.
  * Pour le vecteur suivant, on retire sa projection sur les précédents avant de le normaliser.
  * Attention au calcul des intégrales de fonctions paires et impaires sur un intervalle symétrique $[-1, 1]$.
* **Q4 :** La distance d'un élément à un sous-espace vectoriel dans un espace préhilbertien se calcule via le projecteur orthogonal (ou en utilisant la base orthonormée obtenue à la question précédente).

---

### 📋 Corrigé détaillé pas à pas

#### Question 1 :
Considérons l'application initiale définie par $\langle P, Q \rangle = \int_{-1}^{1} t P(t) Q(t) \, \text{d}t$. 
Testons la condition de positivité $\langle P, P \rangle \ge 0$ pour tout $P \in E$. 
Soit le polynôme constant $P(t) = 1$. On calcule :
$$\langle 1, 1 \rangle = \int_{-1}^{1} t \times 1 \times 1 \, \text{d}t = \left[ \frac{t^2}{2} \right]_{-1}^{1} = \frac{1}{2} - \frac{1}{2} = 0$$
Pourtant, le polynôme $P(t) = 1$ n'est pas le polynôme nul. L'application est donc dégénérée et **ce n'est pas un produit scalaire** sur $E$.

#### Question 2 :
On étudie $\langle P, Q \rangle_{\text{alt}} = \int_{-1}^{1} |t| P(t) Q(t) \, \text{d}t$.
* **Symétrie :** Pour tout $(P, Q) \in E^2$, par commutativité de la multiplication dans $\mathbb{R}$, $\langle P, Q \rangle_{\text{alt}} = \langle Q, P \rangle_{\text{alt}}$.
* **Bilinéarité :** L'application est linéaire par rapport à chaque variable par linéarité de l'intégrale.
* **Positivité :** Pour tout $P \in E$, $|t| P(t)^2 \ge 0$ sur $[-1, 1]$, donc par positivité de l'intégrale sur un segment dans le sens croissant, $\langle P, P \rangle_{\text{alt}} \ge 0$.
* **Caractère défini :** Si $\langle P, P \rangle_{\text{alt}} = 0$, alors $\int_{-1}^{1} |t| (P(t))^2 \, \text{d}t = 0$. 
  La fonction $t \mapsto |t| (P(t))^2$ est continue et positive sur $[-1, 1]$. Son intégrale est nulle, donc la fonction est identiquement nulle sur $[-1, 1] \setminus \{0\}$, et par continuité sur $[-1, 1]$. 
  Ainsi, pour tout $t \in ]-1, 1[$, $P(t) = 0$. Un polynôme ayant une infinité de racines est le polynôme nul, donc $P = 0$.

L'application $\langle \cdot, \cdot \rangle_{\text{alt}}$ est donc bien un **produit scalaire** sur $\mathbb{R}_2[X]$.

#### Question 3 :
Appliquons le procédé de Gram-Schmidt à $\mathcal{B} = (P_0, P_1, P_2)$ avec $P_0(t) = 1$, $P_1(t) = t$, $P_2(t) = t^2$.

1. **Premier vecteur $e_0$ :**
   Calculons la norme au carré de $P_0$ :
   $$\|P_0\|^2 = \int_{-1}^{1} |t| \times 1^2 \, \text{d}t = 2 \int_{0}^{1} t \, \text{d}t = 2 \left[ \frac{t^2}{2} \right]_0^1 = 1$$
   Donc $e_0 = P_0 = 1$.

2. **Deuxième vecteur $e_1$ :**
   Posons $Q_1 = P_1 - \langle P_1, e_0 \rangle_{\text{alt}} e_0$.
   Calculons le produit scalaire :
   $$\langle P_1, e_0 \rangle_{\text{alt}} = \int_{-1}^{1} |t| \times t \times 1 \, \text{d}t$$
   La fonction $t \mapsto |t|t$ est impaire et l'intervalle $[-1, 1]$ est symétrique par rapport à $0$. Donc $\langle P_1, e_0 \rangle_{\text{alt}} = 0$.
   Ainsi, $Q_1 = P_1$ (les polynômes $1$ et $t$ sont déjà orthogonaux).
   Calculons la norme de $Q_1$ :
   $$\|Q_1\|^2 = \int_{-1}^{1} |t| t^2 \, \text{d}t = 2 \int_{0}^{1} t^3 \, \text{d}t = 2 \left[ \frac{t^4}{4} \right]_0^1 = \frac{1}{2}$$
   On normalise :
   $$e_1(t) = \frac{Q_1(t)}{\|Q_1\|} = \sqrt{2} t$$

3. **Troisième vecteur $e_2$ :**
   Posons $Q_2 = P_2 - \langle P_2, e_0 \rangle_{\text{alt}} e_0 - \langle P_2, e_1 \rangle_{\text{alt}} e_1$.
   * Calculons $\langle P_2, e_0 \rangle_{\text{alt}}$ :
     $$\int_{-1}^{1} |t| t^2 \times 1 \, \text{d}t = 2 \int_0^1 t^3 \, \text{d}t = \frac{1}{2}$$
   * Calculons $\langle P_2, e_1 \rangle_{\text{alt}}$ :
     $$\int_{-1}^{1} |t| t^2 \times (\sqrt{2} t) \, \text{d}t = \sqrt{2} \int_{-1}^{1} |t| t^3 \, \text{d}t = 0 \quad \text{(fonction impaire)}$$
   Il vient alors :
   $$Q_2(t) = t^2 - \frac{1}{2}(1) - 0 = t^2 - \frac{1}{2}$$
   Calculons la norme de $Q_2$ :
   $$\|Q_2\|^2 = \int_{-1}^{1} |t| \left(t^2 - \frac{1}{2}\right)^2 \, \text{d}t = 2 \int_{0}^{1} t \left(t^4 - t^2 + \frac{1}{4}\right) \, \text{d}t$$
   $$\|Q_2\|^2 = 2 \int_{0}^{1} \left(t^5 - t^3 + \frac{1}{4}t\right) \, \text{d}t = 2 \left[ \frac{t^6}{6} - \frac{t^4}{4} + \frac{t^2}{8} \right]_0^1 = 2 \left( \frac{1}{6} - \frac{1}{4} + \frac{1}{8} \right) = 2 \left( \frac{4 - 6 + 3}{24} \right) = \frac{2}{24} = \frac{1}{12}$$
   On normalise :
   $$e_2(t) = \frac{Q_2(t)}{\|Q_2\|} = \sqrt{12} \left(t^2 - \frac{1}{2}\right) = 2\sqrt{3}\left(t^2 - \frac{1}{2}\right)$$

La base orthonormée recherchée est donc $\mathcal{B}' = \left(1, \, \sqrt{2}t, \, 2\sqrt{3}\left(t^2 - \frac{1}{2}\right)\right)$.

#### Question 4 :
Soit $F = \text{Vect}(1, X) = \text{Vect}(e_0, e_1)$. La distance d'un vecteur $P_0$ à $F$ est donnée par la norme de sa composante orthogonale sur $F^\perp$.
Puisque $(e_0, e_1, e_2)$ est une base orthonormée de $E$ et que $F = \text{Vect}(e_0, e_1)$, le projecteur orthogonal sur $F^\perp$ s'exprime simplement à l'aide du vecteur $e_2$ :
$$d(P_0, F) = |\langle P_0, e_2 \rangle_{\text{alt}}| \quad \text{ou plus directement via le théorème de Pythagore :}$$
Le projeté orthogonal de $P_0(t) = t^2$ sur $F$ est :
$$\pi_F(P_0) = \langle P_0, e_0 \rangle_{\text{alt}} e_0 + \langle P_0, e_1 \rangle_{\text{alt}} e_1$$
D'après les calculs de la question précédente :
* $\langle P_0, e_0 \rangle_{\text{alt}} = \frac{1}{2}$
* $\langle P_0, e_1 \rangle_{\text{alt}} = 0$
Donc $\pi_F(P_0) = \frac{1}{2}$.

La distance cherchée est alors :
$$d(P_0, F) = \|P_0 - \pi_F(P_0)\|_2 = \left\| t^2 - \frac{1}{2} \right\| = \|Q_2\|$$
Or, nous avons calculé $\|Q_2\|^2 = \frac{1}{24}$. 
Ainsi :
$$d(P_0, F) = \sqrt{\frac{1}{24}} = \frac{1}{2\sqrt{6}} = \frac{\sqrt{6}}{12}$$