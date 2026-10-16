---
title: 'Cours : Équations différentielles'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Cours de Mathématiques - MPSI
## Chapitre : Équations Différentielles

Ce chapitre est fondamental en mathématiques pour la MPSI. Il s'agit d'étudier les méthodes de résolution des équations différentielles linéaires, principalement d'ordre 1 et 2, à coefficients constants ou non. La rigueur est de mise, tant dans l'énoncé des théorèmes d'existence et d'unicité que dans la manipulation des espaces vectoriels de solutions.

---

### 1. Généralités et Équations Différentielles Linéaires du 1er Ordre

#### Définition 1.1 (EDL1)
Soit $I$ un intervalle de $\mathbb{R}$. Une équation différentielle linéaire du premier ordre (EDL1) sur $I$ est une équation de la forme :
$$(E_1) \quad a(t)x'(t) + b(t)x(t) = c(t)$$
où $a, b, c : I \to \mathbb{K}$ ($\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$) sont des fonctions continues, avec $a(t) \neq 0$ pour tout $t \in I$. 
L'équation homogène (ou sans second membre) associée est :
$$(H_1) \quad a(t)x'(t) + b(t)x(t) = 0$$

#### Théorème 1.2 (Structure de l'ensemble des solutions - EDL1)
L'ensemble des solutions de $(E_1)$ sur $I$ est un espace affine de direction l'espace vectoriel des solutions de $(H_1)$. 
Plus précisément, si $x_0$ est une solution particulière de $(E_1)$, toute solution $x$ de $(E_1)$ s'écrit de manière unique sous la forme $x = x_0 + y$, où $y$ est une solution de $(H_1)$.
De plus, l'espace des solutions de $(H_1)$ est une droite vectorielle (dimension 1).

#### Théorème 1.3 (Résolution de $(H_1)$)
Soit $A$ une primitive de la fonction $t \mapsto \frac{b(t)}{a(t)}$ sur $I$. Les solutions de $(H_1)$ sur $I$ sont les fonctions $y$ définies par :
$$y(t) = \lambda e^{-A(t)}, \quad \lambda \in \mathbb{K}$$

#### Méthode 1.4 : Variation de la constante
Pour résoudre $(E_1)$ complète, on cherche une solution particulière sous la forme $x_p(t) = \lambda(t) e^{-A(t)}$, où $\lambda$ est une fonction dérivable sur $I$. 
En injectant $x_p$ dans $(E_1)$, on obtient une condition simple sur $\lambda'(t)$, ce qui permet de déterminer $\lambda(t)$ par simple integration.

---

### 2. Équations Différentielles Linéaires du 2nd Ordre à Coefficients Constants

#### Définition 2.1 (EDL2)
On appelle équation différentielle linéaire du second ordre à coefficients constants une équation de la forme :
$$(E_2) \quad a x''(t) + b x'(t) + c x(t) = f(t)$$
où $a, b, c \in \mathbb{K}$ avec $a \neq 0$, et $f : I \to \mathbb{K}$ est une fonction continue.
L'équation homogène associée est :
$$(H_2) \quad a x''(t) + b x'(t) + c x(t) = 0$$

#### Définition 2.2 (Équation caractéristique)
On appelle équation caractéristique de $(H_2)$ l'équation polynomiale d'inconnue r :
$$(EC) \quad a r^2 + b r + c = 0$$
Soit $\Delta = b^2 - 4ac$ le discriminant de $(EC)$.

#### Théorème 2.3 (Solutions de $(H_2)$ à coefficients réels)
L'ensemble des solutions de $(H_2)$ à valeurs dans $\mathbb{R}$ est un $\mathbb{R}$-espace vectoriel de dimension 2. Sa structure dépend du signe de $\Delta$ :
1. **Si $\Delta > 0$** : $(EC)$ admet deux racines réelles distinctes $r_1, r_2$. 
   Les solutions sont de la forme : $t \mapsto \lambda_1 e^{r_1 t} + \lambda_2 e^{r_2 t}$, avec $(\lambda_1, \lambda_2) \in \mathbb{R}^2$.
2. **Si $\Delta = 0$** : $(EC)$ admet une racine réelle double $r_0 = -\frac{b}{2a}$.
   Les solutions sont de la forme : $t \mapsto (\lambda_1 + \lambda_2 t) e^{r_0 t}$, avec $(\lambda_1, \lambda_2) \in \mathbb{R}^2$.
3. **Si $\Delta < 0$** : $(EC)$ admet deux racines complexes conjuguées $r_1, r_2 = \alpha \pm i\beta$ (avec $\beta > 0$).
   Les solutions réelles sont de la forme : $t \mapsto e^{\alpha t}(\lambda_1 \cos(\beta t) + \lambda_2 \sin(\beta t))$, avec $(\lambda_1, \lambda_2) \in \mathbb{R}^2$.

---

### 3. Théorème de Cauchy-Lipschitz (Admis / Hors-programme partiel en MPSI, indispensable en pratique)

#### Théorème 3.1 (Cauchy-Lipschitz linéaire)
Soit $I$ un intervalle de $\mathbb{R}$, $a, b, c$ des fonctions continues sur $I$ avec $a(t) \neq 0$. 
Pour tout $t_0 \in I$ et pour tout $(x_0, x_1) \in \mathbb{K}^2$, il existe **une et une seule** solution maximale $x : I \to \mathbb{K}$ de l'équation $(E)$ (ordre 1 ou 2) vérifiant les conditions initiales :
$$x(t_0) = x_0 \quad \text{et} \quad x'(t_0) = x_1$$

*Piège fondamental* : Ce théorème garantit l'unicité globale pour les équations linéaires sur l'intervalle de continuité des coefficients. Ne l'appliquez jamais sans avoir vérifié que $a(t)$ ne s'annule pas sur l'intervalle considéré.

---

### 4. Méthodes de Recherche de Solutions Particulières pour $(E_2)$

Lorsque le second membre $f(t)$ a une forme particulière, on utilise la méthode par superposition ou par ansatz.

#### Cas 1 : Second membre exponentiel-polynôme
Si $f(t) = P(t) e^{\gamma t}$ où $P$ est un polynôme et $\gamma \in \mathbb{K}$ :
* On cherche une solution particulière sous la forme $x_p(t) = Q(t) e^{\gamma t}$, où $Q$ est un polynôme de même degré que $P$.
* **Piège de résonance** : Si $\gamma$ est racine de l'équation caractéristique $(EC)$, il faut multiplier le polynôme $Q$ par $t^k$, où $k$ est l'ordre de multiplicité de $\gamma$ comme racine de $(EC)$ ($k=1$ ou $k=2$).

#### Cas 2 : Principe de superposition
Si $f(t) = f_1(t) + f_2(t)$, et si l'on connaît une solution particulière $x_{p,1}$ pour $f_1$ et $x_{p,2}$ pour $f_2$, alors $x_p = x_{p,1} + x_{p,2}$ est une solution particulière pour $f$.

---

### 5. Pièges à Éviter en CPGE

1. **Oubli du domaine de validité** : Résoudre une équation sans préciser l'intervalle $I$ sur lequel les théorèmes s'appliquent (attention aux zéros de $a(t)$).
2. **Division par une fonction susceptible de s'annuler** : Pour diviser par $a(t)$, il faut impérativement travailler sur des intervalles où $a(t) \neq 0$ et recoller les solutions si nécessaire (hors-programme strict en MPSI mais source d'erreurs conceptuelles).
3. **Confusion entre solution générale et solution avec conditions initiales** : Ne pas oublier de déterminer les constantes $\lambda_1, \lambda_2$ *seulement après* avoir écrit la solution générale complète.
4. **Erreur de signe dans l'exposant** : Retenez bien que la primitive est précédée d'un signe "$-$" dans $e^{-A(t)}$ pour le premier ordre.