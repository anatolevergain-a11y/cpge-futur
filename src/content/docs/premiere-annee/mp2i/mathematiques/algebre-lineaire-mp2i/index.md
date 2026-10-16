---
title: 'Cours : Algèbre linéaire et calcul matriciel'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Cours de Mathématiques - MP2I
## Chapitre : Algèbre linéaire et calcul matriciel

---

## 1. Espaces vectoriels et sous-espaces vectoriels

### A. Définitions fondamentales
Soit $\mathbb{K}$ un corps ($\mathbb{R}$ ou $\mathbb{C}$). 
Un $\mathbb{K}$-espace vectoriel est un ensemble $E$ muni d'une loi de composition interne $+ : E \times E \to E$ et d'une loi externe $\cdot : \mathbb{K} \times E \to E$ vérifiant les axiomes habituels de structure d'espace vectoriel.

Un sous-espace vectoriel (s.e.v.) de $E$ est une partie $F \subset E$ non vide telle que :
$$\forall (x, y) \in F^2, \forall (\lambda, \mu) \in \mathbb{K}^2, \quad \lambda x + \mu y \in F$$

### B. Somme de sous-espaces vectoriels
Soient $F$ et $G$ deux s.e.v. de $E$.
* La somme de $F$ et $G$ est définie par :
  $$F + G = \{x + y \mid (x, y) \in F \times G\}$$
* Cette somme est directe, notée $F \oplus G$, si et seulement si :
  $$F \cap G = \{0_E\}$$
* Tout vecteur $z \in F \oplus G$ se décompose de manière **unique** sous la forme $z = x + y$ avec $x \in F$ et $y \in G$.

---

## 2. Familles de vecteurs, bases et dimension

### A. Indépendance linéaire, générateurs
* Une famille $(e_i)_{i \in I}$ est dite **génératrice** de $E$ si tout vecteur de $E$ s'exprime comme combinaison linéaire finie des $e_i$.
* Une famille $(e_1, \dots, e_n)$ est dite **libre** si :
  $$\forall (\lambda_1, \dots, \lambda_n) \in \mathbb{K}^n, \quad \sum_{i=1}^n \lambda_i e_i = 0_E \implies \lambda_1 = \dots = \lambda_n = 0$$
* Une **base** est une famille à la fois libre et génératrice.

### B. Dimension finie
Un $\mathbb{K}$-espace vectoriel $E$ est de dimension finie s'il admet une famille génératrice finie. 
* Toutes les bases d'un même espace vectoriel de dimension finie ont le même cardinal, appelé **dimension** de $E$ (noté $\dim(E)$).
* **Théorème de la base incomplète :** Toute famille libre peut être complétée en une base par adjonction de vecteurs de $E$.
* **Théorème du rang (dimension d'une somme) :** Si $F$ et $G$ sont deux s.e.v. de $E$ en dimension finie :
  $$\dim(F + G) = \dim(F) + \dim(G) - \dim(F \cap G)$$

---

## 3. Applications linéaires

### A. Définitions et structure
Soient $E$ et $F$ deux $\mathbb{K}$-espaces vectoriels. Une application $f : E \to F$ est linéaire si :
$$\forall (x, y) \in E^2, \forall (\lambda, \mu) \in \mathbb{K}^2, \quad f(\lambda x + \mu y) = \lambda f(x) + \mu f(y)$$

On note $\mathcal{L}(E, F)$ l'espace vectoriel des applications linéaires de $E$ vers $F$. Si $E = F$, on note $\mathcal{L}(E)$.

### B. Noyau et Image
Pour $f \in \mathcal{L}(E, F)$ :
* Le **noyau** de $f$ est $\ker(f) = \{x \in E \mid f(x) = 0_F\}$. C'est un s.e.v. de $E$. $f$ est injective $\iff \ker(f) = \{0_E\}$.
* L'**image** de $f$ est $\operatorname{Im}(f) = \{f(x) \mid x \in E\}$. C'est un s.e.v. de $F$. $f$ est surjective $\iff \operatorname{Im}(f) = F$.

### C. Théorème du rang
Soit $f \in \mathcal{L}(E, F)$ avec $E$ de dimension finie. Alors $\operatorname{Im}(f)$ est de dimension finie, et l'on a la relation :
$$\dim(E) = \dim(\ker(f)) + \dim(\operatorname{Im}(f))$$
Le rang de $f$, noté $\operatorname{rg}(f)$, est par définition la dimension de $\operatorname{Im}(f)$.

---

## 4. Calcul matriciel

### A. Espace des matrices
On note $\mathcal{M}_{n, p}(\mathbb{K})$ l'espace vectoriel des matrices à $n$ lignes et $p$ colonnes coefficients dans $\mathbb{K}$.
Le produit matriciel est associatif et, sous réserve de compatibilité des dimensions, bilinéaire.

### B. Matrice d'une application linéaire
Soient $E$ un $\mathbb{K}$-espace vectoriel de dimension $p$ muni d'une base $\mathcal{B} = (e_1, \dots, e_p)$ et $F$ de dimension $n$ muni d'une base $\mathcal{C} = (f_1, \dots, f_n)$.
Soit $f \in \mathcal{L}(E, F)$. 
La **matrice de $f$ dans les bases $\mathcal{B}$ et $\mathcal{C}$**, notée $\text{Mat}_{\mathcal{B}, \mathcal{C}}(f)$, est la matrice dont les colonnes sont les coordonnées des images des vecteurs de la base $\mathcal{B}$ exprimées dans la base $\mathcal{C}$ :
$$\text{Mat}_{\mathcal{B}, \mathcal{C}}(f) = \left( \operatorname{Col}_1 \mid \operatorname{Col}_2 \mid \dots \mid \operatorname{Col}_p \right)$$
où la $j$-ème colonne est $\text{Mat}_{\mathcal{C}}(f(e_j))$.

### C. Changement de base
Soient $\mathcal{B}$ et $\mathcal{B}'$ deux bases de $E$. La **matrice de passage** de $\mathcal{B}$ à $\mathcal{B}'$, notée $P_{\mathcal{B}, \mathcal{B}'}$, est la matrice dont les colonnes sont les vecteurs de la nouvelle base $\mathcal{B}'$ exprimés dans l'ancienne base $\mathcal{B}$. $P_{\mathcal{B}, \mathcal{B}'}$ est inversible et son inverse est $P_{\mathcal{B}', \mathcal{B}}$.

Si $X$ est le vecteur colonne des anciennes coordonnées de $x$ et $X'$ celui des nouvelles, alors :
$$X = P_{\mathcal{B}, \mathcal{B}'} X'$$

Pour une application linéaire $f \in \mathcal{L}(E)$ dont la matrice dans la base $\mathcal{B}$ est $A$ et dans la base $\mathcal{B}'$ est $A'$ :
$$A' = P^{-1} A P$$
où $P = P_{\mathcal{B}, \mathcal{B}'}$. Les matrices $A$ et $A'$ sont alors dites **semblables**.