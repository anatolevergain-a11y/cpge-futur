---
title: 'Cours : Équations différentielles'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Équations Différentielles (CPGE - MP)

---

## 1. Systèmes différentiels linéaires du premier ordre

On considère un intervalle $I \subset \mathbb{R}$, une fonction continue $A : I \to \mathcal{M}_n(\mathbb{K})$ (avec $\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$) et un second membre $B : I \to \mathbb{K}^n$ continu. Le système s'écrit :
$$\text{(S)} \quad X'(t) = A(t)X(t) + B(t)$$

### A. Structure de l'ensemble des solutions

#### Théorème (Structure de l'E.L.S. et E.H.S.)
1. L'ensemble des solutions du système homogène associé $\text{(SH)} : X'(t) = A(t)X(t)$ est un $\mathbb{K}$-espace vectoriel de dimension $n$.
2. L'ensemble des solutions de $\text{(S)}$ est un espace affine de direction l'espace vectoriel des solutions de $\text{(SH)}$.

> **Méthode (Principe de superposition) :** La solution générale de $\text{(S)}$ est la somme d'une solution particulière de $\text{(S)}$ et de la solution générale de $\text{(SH)}$.

---

## 2. Cas des systèmes à coefficients constants

On suppose ici que $A$ est une matrice constante dans $\mathcal{M}_n(\mathbb{K})$.

### A. Définition et propriétés de l'exponentielle de matrice

#### Définition (Exponentielle de matrice)
Pour toute matrice $M \in \mathcal{M}_n(\mathbb{K})$, la série $\sum_{k=0}^{+\infty} \frac{M^k}{k!}$ converge normalement dans $\mathcal{M}_n(\mathbb{K})$ (muni d'une norme d'algèbres subordonnée). On pose :
$$e^M = \sum_{k=0}^{+\infty} \frac{M^k}{k!}$$

#### Propriétés fondamentales
1. Si $AB = BA$, alors $e^{A+B} = e^A e^B$.
2. Pour toute matrice $M$, $e^M$ est inversible et $(e^M)^{-1} = e^{-M}$.
3. L'application $t \mapsto e^{tA}$ est de classe $\mathcal{C}^\infty$ sur $\mathbb{R}$, et :
   $$\frac{d}{dt}\left(e^{tA}\right) = A e^{tA} = e^{tA} A$$

---

### B. Résolution de $\text{(SH)} : X' = AX$

#### Théorème (Expression de la solution)
L'unique solution du problème de Cauchy $X' = AX$ avec la condition initiale $X(t_0) = X_0$ est donnée par :
$$X(t) = e^{(t-t_0)A} X_0$$

> **Méthodes de calcul de $e^{tA}$ :**
> 1. **Réduction de Jordan / Diagonalisation :** Si $A = P D P^{-1}$, alors $e^{tA} = P e^{tD} P^{-1}$.
> 2. **Polynôme Annulateur / Lemme des noyaux :** Si $P(A) = 0$, on effectue la division euclidienne de $t \mapsto e^{tx}$ par $P(x)$.
> 3. **Décomposition de Dunford :** Si $A = D + N$ avec $DN = ND$ et $N$ nilpotente, $e^{tA} = e^{tD} e^{tN} = e^{tD} \sum_{k=0}^{p-1} \frac{(tN)^k}{k!}$.

---

## 3. Équations différentielles scalaires d'ordre $n$

On étudie l'équation linéaire scalaire d'ordre $n$ :
$$\text{(E)} \quad a_n(t)y^{(n)}(t) + a_{n-1}(t)y^{(n-1)}(t) + \dots + a_0(t)y(t) = b(t)$$
avec $a_n(t) \neq 0$ sur $I$.

### A. Équations linéaires homogènes à coefficients constants
$$\text{(EH)} \quad y^{(n)} + a_{n-1}y^{(n-1)} + \dots + a_0 y = 0 \quad (a_i \in \mathbb{K})$$

#### Définition (Polynôme caractéristique)
Le polynôme caractéristique associé à $\text{(EH)}$ est :
$$P(X) = X^n + a_{n-1}X^{n-1} + \dots + a_1 X + a_0$$

#### Théorème (Structure des solutions sur $\mathbb{R}$)
* **Si $\mathbb{K} = \mathbb{C}$ :** Si $r$ est une racine de $P$ de multiplicité $m$, les fonctions $tmapsto t^k e^{rt}$ pour $k \in \{0, \dots, m-1\}$ sont solutions. La famille de toutes ces solutions forme une base de l'espace des solutions.
* **Si $\mathbb{K} = \mathbb{R}$ :** Pour une racine complexe conjuguée $r = \alpha + i\beta$ de multiplicité $m$, on utilise les parties réelle et imaginaire : $t^k e^{\alpha t}\cos(\beta t)$ et $t^k e^{\alpha t}\sin(\beta t)$.

---

### B. Méthodes de recherche de solutions particulières

#### 1. Variation de la constante (ordre 1 et 2)
Pour une équation d'ordre 2 : $y'' + a(t)y' + b(t)y = c(t)$.
Si $(y_1, y_2)$ est un système fondamental de solutions de l'équation homogène, on cherche une solution sous la forme $y(t) = \lambda_1(t)y_1(t) + \lambda_2(t)y_2(t)$ en imposant la contrainte :
$$\lambda_1'(t)y_1(t) + \lambda_2'(t)y_2(t) = 0$$

#### 2. Principe de superposition (second membre exponentiel-polynôme)
Si le second membre est de la forme $b(t) = P(t)e^{\alpha t}$ (avec $P$ polynomiale), on cherche une solution particulière sous la forme :
$$y_p(t) = t^k Q(t)e^{\alpha t}$$
où $Q$ est un polynôme de même degré que $P$, et $k$ est l'ordre de multiplicité de $\alpha$ comme racine du polynôme caractéristique (0 si $\alpha$ n'est pas racine).

---

## 4. Équations différentielles non linéaires (Aperçu)

### A. Problème de Cauchy (Théorème de Cauchy-Lipschitz)

Considérons le problème :
$$\text{(PC)} \begin{cases} Y'(t) = F(t, Y(t)) \\ Y(t_0) = Y_0 \end{cases}$$
où $F : $\Omega \subset \mathbb{R} \times \mathbb{R}^n \to \mathbb{R}^n$ est un ouvert.

#### Théorème (Cauchy-Lipschitz - Admis / Version forte)
Si $F$ est de classe $\mathcal{C}^1$ sur $\Omega$ (ou continue et localement lipschitzienne par rapport à sa seconde variable), alors le problème $\text{(PC)}$ admet une **unique solution maximale**, définie sur un intervalle ouvert maximal $I_{max} = ]T_-, T_+[$.

#### Théorème (Des sorties de tout compact)
Soit $Y : ]T_-, T_+[ \to \mathbb{R}^n$ la solution maximale. Alors, pour tout compact $K \subset \Omega$, il existe $t \in ]T_-, T_+[$ tel que $(t, Y(t)) \notin K$. En particulier, si $T_+ < +infty$, la solution "explose" en norme : $\|Y(t)\| \to +\infty$ lorsque $t \to T_+$.

---

## 5. Pièges et Erreurs Classiques à Éviter

1. **Oublier le domaine de validité :** Résoudre une équation sur $\mathbb{R}$ alors que le coefficient dominant $a_n(t)$ s'annule en certains points (ex: $t y' + y = 1$ sur $\mathbb{R}^*$). Le théorème de Cauchy-Lipschitz impose de travailler sur des intervalles où $a_n(t) \neq 0$.
2. **Confusion $\mathbb{R}$ et $\mathbb{C}$ :** Pour une équation à coefficients réels, exprimer la solution générale avec des exponentielles complexes sans être passé par la partie réelle/imaginaire finale.
3. **Mauvaise application de la variation de la constante :** Oublier de diviser par le coefficient dominant $a_n(t)$ avant d'appliquer les formules de wronskien ou de variation de la constante.
4. **Erreur de multiplicité dans le polynôme caractéristique :** Négliger la multiplicité d'une racine double ou triple (oublier le facteur $t$ ou $t^2$).