---
title: 'Exercice 1 : Compacité'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Autour des parties compactes et de leurs applications

## Énoncé

Soit $(E, \|\cdot\|)$ un espace vectoriel normé (E.V.N.) réel ou complexe. On rappelle qu'une partie $K$ de $E$ est dite **compacte** si de toute suite d'éléments de $K$ on peut extraire une sous-suite qui converge vers un élément de $K$. 

Le problème s'articule en deux parties. La **Partie I** étudie les propriétés topologiques fondamentales des compacts dans un E.V.N. quelconque, tandis que la **Partie II** explore une application classique liée aux fonctions continues et pose un regard critique sur la transposition de ces résultats en dimension infinie.

---

## Questions

### Partie I : Propriétés générales des compacts
1. Soit $K$ une partie compacte de $E$. 
   a. Montrer que $K$ est bornée. *(Indice : raisonner par l'absurde en construisant une suite qui s'échappe à l'infini).*
   b. Montrer que $K$ est fermée. *(Indice : considérer une suite convergente dans $E$ dont les termes sont dans $K$ et étudier la limite).*
2. Soit $F$ un fermé inclus dans un compact $K$. Montrer que $F$ est compact.

### Partie II : Distances, fonctions continues et limites du modèle
Soit $K$ une partie non vide et compacte de $E$, et soit $A$ une partie quelconque de $E$ telle que $A \cap K = \emptyset$. On définit la distance d'un point $x \in E$ à la partie $A$ par :
$$d(x, A) = \inf_{a \in A} \|x - a\|$$

3. On suppose dans cette question que $A$ est un fermé de $E$. Soit $x_0 \in E$ fixé. 
   a. Justifier l'existence d'une suite $(a_n)_{n \in \mathbb{N}}$ d'éléments de $A$ telle que :
      $$\lim_{n \to +\infty} \|x_0 - a_n\| = d(x_0, A)$$
   b. En supposant de plus que $A$ est **compact**, montrer qu'il existe $a^* \in A$ tel que $d(x_0, A) = \|x_0 - a^*\|$. *(Ce point réalise la distance).*
4. On revient au cas où $K$ est compact et $A$ est un fermé quelconque disjoint de $K$. On définit l'application $f : K \to \mathbb{R}$ par $f(x) = d(x, A)$.
   a. Montrer que $f$ est 1-lipschitzienne, donc continue sur $K$.
   b. En déduire qu'il existe $c \in K$ tel que $f(c) = \inf_{x \in K} d(x, A)$, noté $d(K, A)$.
   c. Établir l'inégalité $d(K, A) > 0$ si $A$ est fermé et $K$ est compact.
5. **Analyse critique et limites du modèle :**
   Les résultats précédents utilisent massivement l'hypothèse de compacité. Que se passe-t-il si l'on se place en dimension infinie ? 
   a. Préciser le théorème fondamental qui caractérise les compacts en dimension finie et qui n'est plus vrai en dimension infinie (Théorème de Borel-Lebesgue / Riesz).
   b. Soit $E = \mathcal{C}([0,1], \mathbb{R})$ muni de la norme infinie $\|\cdot\|_\infty$. On considère la boule unité fermée $B = \{f \in E \mid \|f\|_\infty \le 1\}$ et le sous-espace vectoriel $F$ des fonctions polynomiales. $B$ est-il compact ? Justifier brièvement et expliquer l'impact sur la généralisation des résultats de la Partie II.

---

## Pistes et indications

- **Q1.a :** Si $K$ n'était pas bornée, pour tout $n \in \mathbb{N}^*$, vous pouvez trouver un vecteur $x_n \in K$ tel que $\|x_n\| > n$. Que dire de toute sous-suite extraite de $(x_n)$ ?
- **Q1.b :** Utilisez la définition séquentielle de l'adhérence (ou d'un fermé). Si une suite d'éléments de $K$ converge dans $E$, sa limite doit appartenir à $K$ par définition de la compacité.
- **Q3.b :** Utilisez l'extraction d'une sous-suite convergente permise par la compacité de $A$.
- **Q4.c :** Raisonnez par l'absurde en supposant que $d(K, A) = 0$. Utilisez la compacité de $K$ pour construire une contradiction avec le fait que $A$ est fermé et disjoint de $K$.
- **Q5 :** Pensez au lemme de Riesz et au comportement des suites de fonctions (formes de type dents de scie ou approximations polynomiales de Weierstrass/fonctions non continues en norme 1).

---

## Corrigé pas à pas

### Partie I : Propriétés générales des compacts

1. 
   * **a.** Raisonnons par l'absurde. Supposons $K$ non bornée. Alors, pour tout entier $n \in \mathbb{N}^*$, il existe un élément $x_n \in K$ tel que $\|x_n\| > n$. 
     Soit $(\sigma(n))_{n \in \mathbb{N}}$ une extraction quelconque. La suite $(x_{\sigma(n)})$ vérifie $\|x_{\sigma(n)}\| > \sigma(n)$, donc par minoration, $\lim_{n \to +\infty} \|x_{\sigma(n)}\| = +\infty$. 
     Par conséquent, aucune sous-suite de $(x_n)$ ne peut converger dans $E$ (car une suite convergente est nécessairement bornée). Ceci contredit le fait que $K$ est compact. $K$ est donc **bornée**.
   * **b.** Soit $(x_n)_{n \in \mathbb{N}}$ une suite d'éléments de $K$ qui converge dans $E$ vers une limite $x \in E$. 
     Puisque $K$ est compact, il existe une sous-suite $(x_{\sigma(n)})$ qui converge vers un élément $l \in K$. 
     Or, toute sous-suite d'une suite convergente converge vers la même limite que la suite principale, donc $l = x$. Par conséquent, $x \in K$. 
     Le point $x$ étant la limite de toute suite convergente extraite (et même de la suite entière), $K$ contient toutes ses valeurs d'adhérence séquentielle, donc $K$ est **fermé**.

2. Soit $F$ un fermé tel que $F \subset K$, avec $K$ compact. Soit $(x_n)_{n \in \mathbb{N}}$ une suite d'éléments de $F$. 
   Puisque $F \subset K$, $(x_n)$ est également une suite d'éléments de $K$. $K$ étant compact, il existe une sous-suite $(x_{\sigma(n)})$ qui converge vers un élément $l \in K$. 
   Mais $F$ est un fermé de $E$ et $(x_{\sigma(n)}) \in F^{\mathbb{N}}$, donc la limite de cette sous-suite appartient à $F$ ($F$ est séquentiellement fermé). Ainsi, $l \in F$. 
   Toute suite de $F$ admet donc une sous-suite convergeant dans $F$ : **$F$ est compact**.

---

### Partie II : Distances, fonctions continues et limites du modèle

3. 
   * **a.** Par définition de la borne inférieure, pour tout entier $n \in \mathbb{N}^*$, il existe $a_n \in A$ tel que :
     $$d(x_0, A) \le \|x_0 - a_n\| < d(x_0, A) + \frac{1}{n}$$
     Par le théorème des gendarmes, on a immédiatement $\lim_{n \to +\infty} \|x_0 - a_n\| = d(x_0, A)$.
   * **b.** Si $A$ est compact, la suite $(a_n)_{n \in \mathbb{N}}$ construite à la question précédente possède une sous-suite $(a_{\sigma(n)})$ qui converge vers un certain $a^* \in A$. 
     Par continuité de la norme (qui est 1-lipschitzienne), la suite $\|x_0 - a_{\sigma(n)}\|_E$ converge vers $\|x_0 - a^*\|$. 
     Puisqu'une sous-suite d'une suite convergente a la même limite, on en déduit que :
     $$\|x_0 - a^*\| = \lim_{n \to +\infty} \|x_0 - a_n\| = d(x_0, A)$$
     Le minimum est donc atteint en $a^*$.

4. 
   * **a.** Soient $x, y \in K$. Par l'inégalité triangulaire, pour tout $a \in A$ :
     $$\|x - a\| \le \|x - y\| + \|y - a\|$$
     En passant à l'infimum sur $a \in A$ dans le membre de droite, on obtient :
     $$d(x, A) \le \|x - y\| + d(y, A) \implies d(x, A) - d(y, A) \le \|x - y\|$$
     En inversant $x$ et $y$, on obtient $|d(x, A) - d(y, A)| \le \|x - y\|$, ce qui prouve que $f$ est **1-lipschitzienne**, donc continue sur $K$.
   * **b.** $K$ est une partie non vide et compacte de $E$, et $f : K \to \mathbb{R}$ est continue. D'après le théorème des bornes atteintes (image d'un compact par une application continue), $f$ admet un minimum sur $K$. Il existe donc $c \in K$ tel que $f(c) = \inf_{x \in K} f(x) = d(K, A)$.
   * **c.** Supposons par l'absurde que $d(K, A) = 0$. D'après la question précédente (le minimum est atteint car $K$ est compact), il existe $c \in K$ tel que $f(c) = 0$, c'est-à-dire $d(c, A) = 0$. 
     Puisque $d(c, A) = \inf_{a \in A} \|c - a\| = 0$, il existe une suite $(a_n)$ de $A$ telle que $\lim a_n = c$. 
     Le sous-ensemble $A$ étant **fermé**, sa limite $c$ appartient à $A$. 
     Ainsi, $c \in K \cap A$, ce qui contredit l'hypothèse initiale selon laquelle $A$ et $K$ sont disjoints ($K \cap A = \emptyset$). 
     Par conséquent, **$d(K, A) > 0$**.

5. **Analyse critique et limites du modèle :**
   * **a.** Le résultat clef qui s'effondre en dimension infinie est le **Théorème de Riesz** : *« Un espace vectoriel normé est de dimension finie si et seulement si sa boule unité fermée est compacte. »* 
   * **b.** Dans $E = \mathcal{C}([0,1], \mathbb{R})$ muni de la norme infinie, la boule unité fermée $B$ **n'est pas compacte** (considérer par exemple la suite de fonctions $f_n(x) = x^n$ ou des fonctions sinusoïdales à fréquences croissantes qui ne possèdent pas de sous-suite uniformément convergente vers une fonction continue de la boule, violant le théorème d'Arzelà-Ascoli). 
     *Impact critique :* Les raisonnements topologiques de la Partie II (comme l'atteinte des bornes ou la stricte positivité de la distance entre un compact et un fermé disjoint) reposent fondamentalement sur la compacité séquentielle ou de Borel-Lebesgue. En dimension infinie, la boule fermée n'étant pas compacte, **on ne peut plus garantir l'existence d'un point réalisant la distance** à un fermé ou entre deux ensembles fermés quelconques, rendant de nombreux théorèmes d'optimisation caducs sans hypothèses de réflexivité ou de compacité faible (Théorème de Banach-Alaoglu).