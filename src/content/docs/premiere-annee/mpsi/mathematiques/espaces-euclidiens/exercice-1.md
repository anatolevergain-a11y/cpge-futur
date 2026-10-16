---
title: 'Exercice 1 : Produit scalaire et inégalité de Cauchy-Schwarz'
description: 'Problème d entraînement type concours officiel.'
---

# Problème guidé : Autour de l'inégalité de Cauchy-Schwarz et de ses cas d'égalité

**Filière :** MPSI  
**Matière :** Mathématiques  
Chapitre: ** Espaces préhilbertiens réels  

---

## 1. Énoncé

Soit $E$ un espace vectoriel sur $\mathbb{R}$. On appelle **produit scalaire** sur $E$ toute application $\langle \cdot, \cdot \rangle : E \times E \to \mathbb{R}$ qui est :
1. Bilinéaire,
2. Symétrique,
3. Définie positive (pour tout $x \in E$, $\langle x, x \rangle \ge 0$ et $\langle x, x \rangle = 0 \implies x = 0_E$).

Un espace vectoriel muni d'un produit scalaire est appelé **espace préhilbertien réel**.

Le but de ce problème est d'établir l'inégalité de Cauchy-Schwarz, d'étudier géométriquement son cas d'égalité, puis d'analyser les limites d'une telle modélisation algébrique lorsqu'on cherche à l'étendre à des structures plus générales.

---

## 2. Questions

### Partie I : Étude générale et inégalité de Cauchy-Schwarz
Soit $(E, \langle \cdot, \cdot \rangle)$ un espace préhilbertien réel. Pour tout $x \in E$, on pose $\|x\| = \sqrt{\langle x, x \rangle}$.

1. **(Rappel de cours)** Démontrer l'identité de polarization pour tout $(x, y) \in E^2$ :
   $$\langle x, y \rangle = \frac{1}{4} \left( \|x+y\|^2 - \|x-y\|^2 \isspace \right)$$
   *(Note : ou via l'expansion de $\|x+y\|^2$)*.

2. Soit $(x, y) \in E^2$ et soit la fonction polynomiale $P : \mathbb{R} \to \mathbb{R}$ définie par :
   $$P(t) = \|tx + y\|^2$$
   Exprimer $P(t)$ sous la forme $at^2 + bt + c$ en fonction de $\langle x, x \rangle$, $\langle x, y \rangle$ et $\langle y, y \rangle$.

3. En déduire l'inégalité de Cauchy-Schwarz : pour tout $(x, y) \in E^2$,
   $$|\langle x, y \rangle| \le \|x\| \|y\|$$

4. Démontrer que le cas d'égalité $|\langle x, y \rangle| = \|x\| \|y\|$ a lieu si et seulement si $x$ et $y$ sont colinéaires.

### Partie II : Analyse critique du modèle
5. Dans l'espace vectoriel $\mathbb{R}^n$, on considère l'application $\langle x, y \rangle_1 = \sum_{i=1}^n x_i y_i$ (produit scalaire usuel) et une application candidate $\langle x, y \rangle_{alt} = \sum_{i=1}^n x_i y_i + \left(\sum_{i=1}^n x_i\right)\left(\sum_{i=1}^n y_i\right)$.
   Montrer que $\langle \cdot, \cdot \rangle_{alt}$ est bilinéaire et symétrique.
6. **Analyse critique des limites du modèle :** Expliquer pourquoi l'axiomatique des espaces préhilbertiens (et en particulier l'inégalité de Cauchy-Schwarz qui en découle) trouve une limite structurelle immédiate si l'on cherche à définir des mesures de "proximité" ou "d'orthogonalité" sur des espaces de fonctions sans la condition de positivité stricte (par exemple en physique relativiste avec la métrique de Minkowski $\eta(x,y) = x_0 y_0 - x_1 y_1 - x_2 y_2 - x_3 y_3$). Que devient l'inégalité de Cauchy-Schwarz dans ce cadre ?

---

## 3. Pistes et indications

* **Q2 :** Développez $\|tx + y\|^2 = \langle tx+y, tx+y \rangle$ en utilisant la bilinéarité et la symétrie du produit scalaire.
* **Q3 :** Étudiez le signe du discriminant $\Delta$ du polynôme $P(t)$ de degré 2 (ou 1 si $x=0$).
* **Q4 :** Distinguez le cas $x = 0$ et le cas $x \neq 0$ où le discriminant s'annule, ce qui implique l'existence d'une racine double.
* **Q6 :** Pensez à la signature d'une forme bilinéaire symétrique non définie positive. Si $\langle x, x \rangle peut être négatif, que vaut $\|x\| = \sqrt{\langle x, x \rangle}$ ?

---

## 4. Corrigé pas à pas

### Partie I

**1.** En développant par bilinéarité et symétrie :
$$\|x+y\|^2 = \langle x+y, x+y \rangle = \langle x,x \rangle + 2\langle x,y \rangle + \langle y,y \rangle = \|x\|^2 + 2\langle x,y \rangle + $\|y\|^2$$
De même, $\|x-y\|^2 = \|x\|^2 - 2\langle x,y \rangle + \|y\|^2$.  
En soustrayant les deux lignes :
$$\|x+y\|^2 - \|x-y\|^2 = 4\langle x,y \rangle \implies \langle x, y \rangle = \frac{\|x+y\|^2 - \|x-y\|^2}{4}$$

**2.** Par définition de la norme associée au produit scalaire :
$$P(t) = \|tx+y\|^2 = \langle tx+y, tx+y \rangle$$
Par bilinéarité :
$$P(t) = t^2\langle x,x \rangle + t\langle x,y \rangle + t\langle y,x \rangle + \langle y,y \rangle$$
Puisque le produit scalaire est symétrique ($\langle y,x \rangle = \langle x,y \rangle$) :
$$P(t) = \|x\|^2 t^2 + 2\langle x,y \rangle t + \|y\|^2$$
On a donc $a = \|x\|^2$, $b = 2\langle x,y \rangle$ et $c = \|y\|^2$.

**3.** Par définition, pour tout $t \in \mathbb{R}$, $P(t) = \|tx+y\|^2 \ge 0$.  
Le polynôme du second degré $P(t) = at^2 + bt + c$ est donc positif ou nul sur $\mathbb{R}$.  
* Premier cas : $\|x\|^2 = 0$, ce qui implique $x = 0_E$ (car le produit scalaire est défini). Alors $\langle 0, y \rangle = 0$ et $\|0\|\|y\| = 0$. L'inégalité $0 \le 0$ est vérifiée.
* Second cas : $\|x\|^2 \neq 0$ (donc $a > 0$). Puisque $P(t) \ge 0$ pour tout $t$, le discriminant $\Delta$ de $P(t)$ doit être négatif ou nul :
  $$\Delta = b^2 - 4ac = (2\langle x,y \rangle)^2 - 4\|x\|^2 \|y\|^2 \le 0$$
  $$4\langle x,y \rangle^2 \le 4\|x\|^2 \|y\|^2 \implies (\langle x,y \rangle)^2 \le \|x\|^2 \|y\|^2$$
En prenant la racine carrée des deux membres (qui sont des réels positifs), on obtient :
$$|\langle x, y \rangle| \le \|x\| \|y\|$$

**4.** 
* **Condition suffisante :** Si $x$ et $y$ sont colinéaires, alors il existe $\lambda \in \mathbb{R}$ tel que $y = \lambda x$ (ou $x = \lambda y$, le cas triviale $x=0$ ou $y=0$ donnant $0=0$).
  $$|\langle x, \lambda x \rangle| = |\lambda| |\langle x, x \rangle| = |\lambda| \|x\|^2$$
  Et $\|x\| \|\lambda x\| = \|x\| |\lambda| \|x\| = |\lambda| \|x\|^2$. L'égalité est bien vérifiée.
* **Condition nécessaire :** Supposons $|\langle x, y \rangle| = \|x\| \|y\|$. 
  Si $x = 0$, $x$ et $y$ sont colinéaires ($x = 0 \cdot y$).
  Si $x \neq 0$, alors $\Delta = 0$. Le polynôme $P(t)$ admet donc une racine réelle double $t_0$. 
  Cela signifie que $P(t_0) = \|t_0 x + y\|^2 = 0$. 
  Puisque le produit scalaire est défini positif, $\|t_0 x + y\| = 0 \implies t_0 x + y = 0_E$, soit $y = (-t_0)x$. 
  Les vecteurs $x$ et $y$ sont donc colinéaires.

---

### Partie II : Analyse critique du modèle

**5.** La bilinéarité et la symétrie se démontrent directement par linéarité des sommes finies. (La vérification est immédiate par la structure des formes linéaires coordonnées).

**6. Analyse critique des limites du modèle (Hors-barème classique, esprit X-ENS) :**
* *Limites mathématiques et physiques :* L'édifice des espaces préhilbertiens repose fondamentalement sur l'axiome de **positivité stricte** ($\langle x, x \rangle \ge 0$). En physique relativiste (espace-temps de Minkowski), la "métrique" n'est pas définie positive : on a $\eta(x,x) = x_0^2 - x_1^2 - x_2^2 - x_3^2$, qui peut être négative, nulle ou positive pour des vecteurs non nuls ($x \neq 0$).
* *Conséquence sur l'inégalité de Cauchy-Schwarz :* Dans un tel espace (dit de Minkowski ou plus généralement pseudo-riemannien), l'inégalité de Cauchy-Schwarz classique **s'inverse** pour certains types de vecteurs (les vecteurs de genre temps). On a alors $|\langle x, y \rangle| \ge \|x\| \|y\|$ (où la norme est redéfinie prudemment ou remplacée par une semi-norme). 
* *Conclusion critique :* Le modèle préhilbertien s'effondre ou nécessite un changement complet de paradigme topologique (abandon de la norme au profit d'une structure de cône isotrope). L'intuition géométrique "euclidienne" (angle, distance strictement positive) n'est donc plus universelle dès que l'on quitte le cadre strict des formes définies positives.