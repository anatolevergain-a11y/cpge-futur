---
title: 'Cours : Analyse et équations différentielles'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Analyse et Équations Différentielles
**Filière :** PCSI — Première année  
**Matière :** Mathématiques  

---

## 1. Introduction et généralités sur les équations différentielles

Une équation différentielle est une relation liant une fonction inconnue et ses dérivées successives.

### Définitions fondamentales
* **Ordre** : L'ordre d'une équation différentielle est le plus grand ordre de dérivation qui y figure.
* **Solution** : Une fonction $y$ dérivable (autant de fois que nécessaire) sur un intervalle $I \subset \mathbb{R}$ est dite solution de l'équation différentielle si, pour tout $t \in I$, l'égalité est vérifiée.
* **Problème de Cauchy** : Il s'agit de trouver une solution vérifiant l'équation ainsi que des conditions initiales imposées.

---

## 2. Équations différentielles linéaires d'ordre 1

Une équation différentielle linéaire d'ordre 1 est de la forme générale :
$$(E) : a(t)y'(t) + b(t)y(t) = c(t)$$
où $a, b, c$ sont des fonctions continues sur un intervalle $I$ à valeurs dans $\mathbb{K}$ ($\mathbb{R}$ ou $\mathbb{C}$), avec $a(t) \neq 0$ sur $I$.

### 2.1. Structure de l'ensemble des solutions
L'équation sans second membre (ou équation homogène) associée est :
$$(E_0) : a(t)y'(t) + b(t)y(t) = 0$$

> **Théorème de structure :**
> L'ensemble des solutions de $(E)$ sur $I$ est un espace affine de direction l'espace vectoriel des solutions de $(E_0)$. Si $y_p$ est une solution particulière de $(E)$, toute solution $y$ s'écrit de manière unique sous la forme :
> $$y = y_0 + y_p$$
> où $y_0$ est une solution de $(E_0)$.

### 2.2. Résolution de l'équation homogène $(E_0)$
Sur l'intervalle $I$, en divisant par $a(t)$ :
$$y' + \frac{b(t)}{a(t)}y = 0$$
Les solutions sur $I$ sont données par :
$$y(t) = \lambda \exp\left( - \int_{t_0}^t \frac{b(u)}{a(u)} \, du \right), \quad \lambda \in \mathbb{K}$$
où $t_0$ est un point de $I$.

### 2.3. Méthode de variation de la constante
Pour trouver une solution particulière de $(E)$ complète, on pose $y_p(t) = \lambda(t) y_h(t)$, où $y_h$ est une solution non nulle de $(E_0)$ et $\lambda$ une fonction dérivable à déterminer. 
En injectant $y_p$ dans $(E)$, on obtient une équation simple portant sur $\lambda'(t)$.

---

## 3. Équations différentielles linéaires d'ordre 2 à coefficients constants

On s'intéresse ici à l'équation :
$$$ (E_2) : a y'' + b y' + c y = f(t) $$
où $a, b, c \in \mathbb{K}$ avec $a \neq 0$, et $f : I \to \mathbb{K}$ est une fonction continue.

### 3.1. Équation caractéristique
L'équation homogène associée est :
$$ (E_{2,0}) : a y'' + b y' + c y = 0 $$
On introduit l'**équation caractéristique** associée :
$$ a r^2 + b r + c = 0 $$
Soit $\Delta = b^2 - 4ac$ le discriminant.

> **Théorème (Solutions de l'équation homogène d'ordre 2) :**
> Selon le signe de $\Delta$ (dans le cas $\mathbb{R}$), l'ensemble des solutions de $(E_{2,0})$ sur $\mathbb{R}$ est :
> 1. Si $\Delta > 0$ (deux racines réelles distinctes $r_1, r_2$) :
>    $$ y(t) = \lambda e^{r_1 t} + \mu e^{r_2 t}, \quad (\lambda, \mu) \in \mathbb{R}^2 $$
> 2. Si $\Delta = 0$ (une racine double $r_0 = -\frac{b}{2a}$) :
>    $$ y(t) = (\lambda t + \mu) e^{r_0 t}, \quad (\lambda, \mu) \in \mathbb{R}^2 $$
> 3. Si $\Delta < 0$ (deux racines complexes conjuguées $r_1, r_2 = \alpha \pm i \beta$) :
>    $$ y(t) = e^{\alpha t} (\lambda \cos(\beta t) + \mu \sin(\beta t)), \quad (\lambda, \mu) \in \mathbb{R}^2 $$

### 3.2. Recherche d'une solution particulière pour des seconds membres usuels
Pour $(E_2)$, si $f(t)$ est de la forme $P(t)e^{st}$ (où $P$ est un polynôme et $s \in \mathbb{K}$), on cherche une solution particulière sous la forme :
$$ y_p(t) = t^k Q(t) e^{st} $$
où :
* $Q$ est un polynôme de même degré que $P$.
* $k$ est l'ordre de multiplicité de $s$ en tant que racine de l'équation caractéristique ($k=0$ si $s$ n'est pas racine, $k=1$ si $s$ est racine simple, $k=2$ si $s$ est racine double).

Le **principe de superposition** s'applique : si $f = f_1 + f_2$, une solution particulière associée à $f$ est la somme des solutions particulières associées à $f_1$ et $f_2$.

---

## 4. Théorème de Cauchy-Lipschitz linéaire (Admis / Hors-programme de démonstration en PCSI, fondamental pour l'admission)

> **Théorème (Cauchy-Lipschitz linéaire d'ordre $n$) :**
> Soit $I$ un intervalle de $\mathbb{R}$, $a_0, \dots, a_{n-1}$ et $b$ des fonctions continues sur $I$ à valeurs dans $\mathbb{K}$, avec $a_n(t) \neq 0$ sur $I$. 
> Pour tout $t_0 \in I$ et pour tout $(y_0, y_1, \dots, y_{n-1}) \in \mathbb{K}^n$, le problème de Cauchy :
> $$ \begin{cases} a_n(t)y^{(n)} + \dots + a_0(t)y = b(t) \\ y(t_0) = y_0, y'(t_0) = y_1, \dots, y^{(n-1)}(t_0) = y_{n-1} \end{cases} $$
> possède **une et une seule solution maximale** définie sur tout l'intervalle $I$.