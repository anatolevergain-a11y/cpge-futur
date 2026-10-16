---
title: 'Exercice 2 : Intégrales doubles et ED'
description: 'Problème d entraînement type concours.'
---

# Problème Guidé : Étude d'une équation aux dérivées partielles par un changement de variables (Intégrales doubles)

---

## Introduction et Objectifs

Ce problème aborde un classique des concours de la filière PT : la résolution d'une équation aux dérivées partielles (EDP) sur le plan par un changement de variables judicieux, lié à la géométrie du domaine, et l'utilisation d'intégrales doubles pour exprimer les solutions. 

Ce type de sujet teste la maîtrise des théorèmes de dérivation des fonctions composées de classe $\mathcal{C}^2$, la paramétrisation de domaines du plan, et le calcul intégral.

---

## Partie I : Étude d'un changement de variables géométrique

On considère l'application $\Phi$ définie sur l'ouvert $U = ]0, +\infty[ \times ]0, +\infty[$ par :
$$\Phi(u, v) = (x, y) \quad \text{avec} \quad \begin{cases} x = u v \\ y = \frac{u}{v} \end{cases}$$

**Q1.** Justifier que $\Phi$ est de classe $\mathcal{C}^1$ sur $U$ et calculer son jacobien $J_\Phi(u, v)$.

*Éléments de correction :*
Les fonctions $u \mapsto uv$ et $(u, v) \mapsto \frac{u}{v}$ sont de classe $\mathcal{C}^1$ sur $U$ (produit et quotient de fonctions de classe $\mathcal{C}^1$ dont le dénominateur ne s'annule pas). 
Le jacobien se calcule par le déterminant de la matrice jacobienne :
$$J_\Phi(u, v) = \begin{vmatrix} 
\frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ 
\frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} 
\end{vmatrix} = \begin{vmatrix} 
v & u \\ 
\frac{1}{v} & -\frac{u}{v^2} 
\end{vmatrix}$$

$$J_\Phi(u, v) = v \left(-\frac{u}{v^2}\right) - u \left(\frac{1}{v}\right) = -\frac{u}{v} - \frac{u}{v} = -\frac{2u}{v}$$

**Q2.** Montrer que $\Phi$ réalise un $\mathcal{C}^1$-difféomorphisme de $U$ sur un ouvert $V$ à préciser. Exprimer réciproquement $u$ et $v$ en fonction de $x$ et $y$.

*Éléments de correction :*
Pour tout $(u, v) \in U$, $J_\Phi(u, v) = -\frac{2u}{v} \neq 0$ car $u > 0$ et $v > 0$.
Exprimons $u$ et $v$ en fonction de $x$ et $y$ :
En multipliant les deux équations : $xy = u^2$. Comme $u > 0$, on a $u = \sqrt{xy}$.
En divisant les deux équations : $\frac{x}{y} = v^2$. Comme $v > 0$, on a $v = \sqrt{\frac{x}{y}}$.
L'application $(x, y) \mapsto (\sqrt{xy}, \sqrt{\frac{x}{y}})$ est de classe $\mathcal{C}^1$ sur l'ouvert $V = ]0, +\infty[ \times ]0, +\infty[$. 
Par le théorème d'inversion globale (ou par construction explicite de la réciproque), $\Phi$ est un $\mathcal{C}^1$-difféomorphisme de $U$ sur $V$.

---

## Partie II : Transformation d'une Équation aux Dérivées Partielles

Soit $f : V \to \mathbb{R}$ une fonction de classe $\mathcal{C}^2$. On pose, pour $(u, v) \in U$, $g(u, v) = f(\Phi(u, v)) = f\left(uv, \frac{u}{v}\right)$.

**Q3.** Exprimer les dérivées partielles premières $\frac{\partial g}{\partial u}$ et $\frac{\partial g}{\partial v}$ en fonction de $\frac{\partial f}{\partial x}$ et $\frac{\partial f}{\partial y}$.

*Éléments de correction :*
En utilisant la règle de dérivation des fonctions composées :
$$\frac{\partial g}{\partial u} = \frac{\partial f}{\partial x} \frac{\partial x}{\partial u} + \frac{\partial f}{\partial y} \frac{\partial y}{\partial u} = v \frac{\partial f}{\partial x} + \frac{1}{v} \frac{\partial f}{\partial y}$$
$$\frac{\partial g}{\partial v} = \frac{\partial f}{\partial x} \frac{\partial x}{\partial v} + \frac{\partial f}{\partial y} \frac{\partial y}{\partial v} = u \frac{\partial f}{\partial x} - \frac{u}{v^2} \frac{\partial f}{\partial y}$$

**Q4.** On considère l'EDP portant sur $f$ :
$$(E) \quad x \frac{\partial f}{\partial x} - y \frac{\partial f}{\partial y} = 0$$
Transformer cette équation en une équation portant sur $g$ en utilisant les variables $u$ et $v$. En déduire la forme générale des solutions de $(E)$ sur $V$.

*Éléments de correction :*
Exprimons la combinaison linéaire intervenant dans $(E)$ à l'aide de $\frac{\partial g}{\partial u}$ et $\frac{\partial g}{\partial v}$ :
Remarquons que $u \frac{\partial g}{\partial u} = uv \frac{\partial f}{\partial x} + \frac{u}{v} \frac{\partial f}{\partial y} = x \frac{\partial f}{\partial x} + y \frac{\partial f}{\partial y}$ (ce qui correspond à une autre EDP), mais testons plutôt la combinaison :
Multiplions $\frac{\partial g}{\partial v}$ par $v$ : 
$$v \frac{\partial g}{\partial v} = uv \frac{\partial f}{\partial x} - \frac{u}{v} \frac{\partial f}{\partial y} = x \frac{\partial f}{\partial x} - y \frac{\partial f}{\partial y}$$
Ainsi, l'équation $(E)$ se réécrit simplement pour $g$ :
$$v \frac{\partial g}{\partial v} = 0$$
Puisque $v > 0$, l'équation $(E)$ est équivalente à :
$$\frac{\partial g}{\partial v} = 0$$
Cela signifie que $g(u, v)$ ne dépend que de la variable $u$. Il existe donc une fonction $\varphi$ de classe $\mathcal{C}^1$ sur $]0, +\infty[$ telle que :
$$g(u, v) = \varphi(u)$$
En revenant aux variables initiales $(x, y)$ :
$$f(x, y) = \varphi(\sqrt{xy})$$
La solution générale de $(E)$ sur $V$ est donc de la forme $f(x, y) = \phi(xy)$ où $\phi$ est une fonction de classe $\mathcal{C}^1$ sur $]0, +\infty[$ (en posant $\phi = \varphi \circ \sqrt{\cdot}$).

---

## Partie III : Calcul d'une intégrale double

On considère le domaine $\mathcal{D}$ du plan défini par :
$$\mathcal{D} = \{ (x, y) \in V \mid 1 \le xy \le 2 \text{ et } 1 \le \frac{x}{y} \le 3 \}$$

**Q5.** Représenter schématiquement le domaine $\mathcal{D}$ dans le plan $(x, y)$ et calculer son aire à l'aide du changement de variables $\Phi$.

*Éléments de correction :*
*   **Analyse du domaine :** Les inégalités définissant $\mathcal{D}$ se traduisent directement dans le système de coordonnées $(u, v)$ par :
    $$1 \le u \le 2 \quad \text{et} \quad 1 \le v \le \sqrt{3}$$
    Le domaine $\mathcal{D}$ est donc l'image par $\Phi$ du rectangle $\mathcal{D}' = [1, 2] \times [1, \sqrt{3}]$.
*   **Calcul de l'aire :** 
    $$\text{Aire}(\mathcal{D}) = \iint_{\mathcal{D}} 1 \,dx\,dy$$
    En effectuant le changement de variables $(x, y) = \Phi(u, v)$, de jacobien $|J_\Phi(u, v)| = \frac{2u}{v}$ (car $u, v > 0$) :
    $$\text{Aire}(\mathcal{D}) = \iint_{\mathcal{D}'} \frac{2u}{v} \,du\,dv$$
    $$\text{Aire}(\mathcal{D}) = \int_{1}^{2} \left( \int_{1}^{\sqrt{3}} \frac{2u}{v} \,dv \right) du$$
    Calculons l'intégrale intérieure :
    $$\int_{1}^{\sqrt{3}} \frac{2u}{v} \,dv = 2u [\ln(v)]_{1}^{\sqrt{3}} = 2u \ln(\sqrt{3}) = u \ln(3)$$
    Puis l'intégrale extérieure :
    $$\text{Aire}(\mathcal{D}) = \int_{1}^{2} u \ln(3) \,du = \ln(3) \left[ \frac{u^2}{2} \right]_{1}^{2} = \ln(3) \left( \frac{4}{2} - \frac{1}{2} \right) = \frac{3\ln(3)}{2}$$

---

## Analyse Critique des Résultats (Regard d'Examinateur)

1. **Pièges classiques à éviter :** 
   * Ne pas oublier de justifier la non-nullité du jacobien et la bijectivité (ou l'immersion/difféomorphisme local) avant d'appliquer un changement de variables.
   * Bien veiller à prendre la **valeur absolue** du jacobien lors du changement de variable dans les intégrales doubles ($\iint f(x,y) dxdy = \iint f(\Phi(u,v)) |J_\Phi(u,v)| dudv$).
2. **Cohérence physique/géométrique :** 
   * L'aire trouvée $\frac{3\ln(3)}{2} \approx 1.64$ est strictement positive, ce qui est cohérent pour une aire de plan.
   * L'utilisation du changement de variables a transformé un domaine aux frontières hyperboliques complexes en un rectangle trivial, illustrant parfaitement la puissance des techniques de réduction par changement de coordonnées en sciences industrielles (mécanique des fluides, thermodynamique).