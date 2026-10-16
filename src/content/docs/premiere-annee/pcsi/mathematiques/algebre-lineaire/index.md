---
title: 'Cours : Espaces vectoriels'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Cours de Mathématiques : Espaces Vectoriels (PCSI)

## Introduction et Définitions Fondamentales

### 1. Corps des scalaires
Dans tout ce chapitre, $\mathbb{K}$ désigne le corps des nombres réels $\mathbb{R}$ ou des nombres complexes $\mathbb{C}$. Les éléments de $\mathbb{K}$ sont appelés des **scalaires**.

### 2. Définition d'un espace vectoriel
**Définition :** Un $\mathbb{K}$-espace vectoriel est un ensemble non vide $E$, muni de deux lois :
* Une loi de composition interne, appelée addition, notée $+ : E \times E \to E$
* Une loi de composition externe, appelée multiplication par un scalaire, notée $\cdot : \mathbb{K} \times E \to E$

Telles que $(E, +)$ est un groupe abélien et que la loi externe vérifie les axioms de compatibilité usuels (associativité mixte, distributivité par rapport à l'addition dans $E$ et dans $\mathbb{K}$, et présence d'un élément neutre $1_{\mathbb{K}} \cdot x = x$).

*Les éléments de $E$ sont appelés des **vecteurs**.*

---

## Sous-espaces vectoriels (SEV)

### 1. Définition
**Définition :** Soit $(E, +, \cdot)$ un $\mathbb{K}$-espace vectoriel et $F$ une partie de $E$. On dit que $F$ est un sous-espace vectoriel de $E$ si $(F, +, \cdot)$ est lui-même un $\mathbb{K}$-espace vectoriel, les lois sur $F$ étant induites par celles de $E$.

### 2. Caractérisation des sous-espaces vectoriels
**Théorème (Caractérisation en une étape) :** Soit $E$ un $\mathbb{K}$-ev et $F$ une partie de $F$. $F$ est un sous-espace vectoriel de $E$ si et seulement si :
1. $F \neq \emptyset$ (en pratique, on montre que $0_E \in F$)
2. $\forall (x, y) \in F^2, \forall \lambda \in \mathbb{K}, \quad \lambda x + y \in F$

> **PIÈGE CLASSIQUE :** Oublier de vérifier que le sous-espace est non vide. La vérification que le vecteur nul $0_E$ appartient à $F$ est indispensable et permet souvent de disqualifier un ensemble non-SEV.

---

## Familles de vecteurs

### 1. Combinaisons linéaires
Soit $(E, +, \cdot)$ un $\mathbb{K}$-ev et $A = (x_1, \dots, x_n)$ une famille finie de vecteurs de $E$. Un vecteur $x \in E$ est une **combinaison linéaire** des $x_i$ s'il existe des scalaires $(\lambda_1, \dots, \lambda_n) \in \mathbb{K}^n$ tels que :
$$x = \sum_{i=1}^n \lambda_i x_i$$

### 2. Familles libres, familles liées
* **Famille libre (ou indépendante) :** La famille $(x_i)_{i \in I}$ est libre si toute combinaison linéaire nulle n'implique que des coefficients nuls.
  $$\sum_{i=1}^n \lambda_i x_i = 0_E \implies \forall i \in \{1, \dots, n\}, \lambda_i = 0$$
* **Famille liée :** Une famille qui n'est pas libre est dite **liée**. Il existe alors des coefficients non tous nuls tels que $\sum \lambda_i x_i = 0_E$.

### 3. Familles génératrices
**Définition :** Une famille $(x_i)_{i \in I}$ de vecteurs de $E$ est dite **génératrice** de $E$ si tout vecteur de $E$ peut s'exprimer comme une combinaison linéaire des vecteurs de cette famille. On note alors $E = \text{Vect}((x_i)_{i \in I})$.

---

## Bases et Dimension

### 1. Définition d'une base
**Définition :** Une famille de vecteurs de $E$ est une **base** de $E$ si elle est à la fois **libre** et **génératrice**.

**Théorème (Existence des coordonnées) :** Si $(e_1, \dots, e_n)$ est une base de $E$, alors tout vecteur $x de E$ se décompose de manière **unique** dans cette base :
$$x = \sum_{i=1}^n x_i e_i$$

### 2. Dimension d'un espace vectoriel
* **Définition :** Un $\mathbb{K}$-espace vectoriel est de **dimension finie** s'il admet une famille génératrice finie.
* **Théorème de la base incomplète :** Toute famille libre d'un espace vectoriel de dimension finie peut être complétée en une base par adjonction de vecteurs de l'espace.
* **Théorème :** Toutes les bases d'un même espace vectoriel de dimension finie ont le même cardinal, appelé **dimension** de $E$, noté $\dim(E)$.

---

## Somme de sous-espaces vectoriels

### 1. Somme simple et somme directe
Soit $F$ et $G$ deux sous-espaces vectoriels d'un $\mathbb{K}$-ev $E$.
* **Somme de $F$ et $G$ :** $F + G = \{x + y \mid x \in F, y \in G\}$
* **Somme directe :** La somme $F + G$ est dite directe, et l'on note $F \oplus G$, si tout vecteur de $F + G$ s'écrit de **manière unique** comme la somme d'un vecteur de $F$ et d'un vecteur de $G$.

**Caractérisation fondamentale :**
$$F \cap G = \{0_E\} \iff F + G = F \oplus G$$

### 2. Supplémentaires
**Définition :** Deux sous-espaces vectoriels $F$ et $G$ de $E$ sont dits **supplémentaires** dans $E$ si $E = F \oplus G$.
*En dimension finie, si $F$ est un SEV de $E$, il existe toujours un sev $G$ supplémentaire de $F$ dans $E$, et on a :*
$$\dim(E) = \dim(F) + \dim(G)$$

---

## Méthodes Essentielles pour la PCSI

1. **Montrer qu'un ensemble est un sous-espace vectoriel :**
   * Identifier l'espace ambiant $E$.
   * Vérifier que $0_E \in F$.
   * Soit $(x, y) \in F^2$ et $(\lambda, \mu) \in \mathbb{K}^2$, montrer que $\lambda x + \mu y \in F$ (méthode en deux étapes, ou en une seule étape $\lambda x + y \in F$).

2. **Prouver qu'une famille $(x_1, \dots, x_n)$ est libre :**
   * Poser une relation $\sum_{i=1}^n \lambda_i x_i = 0_E$ avec des scalaires $\lambda_i$ inconnus.
   * Résoudre le système ou utiliser des évaluations judicieuses (notamment pour les fonctions ou les polynômes) pour montrer que $\lambda_1 = \dots = \lambda_n = 0$.

3. **Prouver qu'une famille est génératrice :**
   * Soit $x$ un vecteur générique de l'espace.
   * Chercher à exprimer $x$ comme combinaison linéaire des vecteurs de la famille en résolvant un système linéaire.