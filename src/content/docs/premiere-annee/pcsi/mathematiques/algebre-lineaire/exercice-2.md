---
title: 'Exercice 2 : Applications linéaires et théorème du rang'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Autour du théorème du rang et des projecteurs généralisés

## Énoncé

Soit $E$ un $\mathbb{K}$-espace vectoriel ($\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$) de dimension finie $n \in \mathbb{N}^*$. 
On considère un endomorphisme $f \in \mathcal{L}(E)$ vérifiant la relation :
$$\text{(P)} \quad f^3 - f^2 = 0$$

L'objectif de ce problème est d'étudier la structure de $E$ à travers les sous-espaces vectoriels associés à $f$, et d'analyser les limites de ce type de modélisation algébrique.

---

## Questions

### Partie I : Propriétés fondamentales et noyaux emboîtés

1. Montrer que $\ker(f) \subset \ker(f^2) \subset \ker(f^3)$.
2. En déduire que si $\ker(f^2) = \ker(f^3)$, alors pour tout entier $k \ge 2$, $\ker(f^k) = \ker(f^2)$.
3. Établir la relation entre les images : $\text{Im}(f^3) \subset \text{Im}(f^2) \subset \text{Im}(f)$.
4. Démontrer que $\text{Im}(f^2) = \text{Im}(f^3)$.

### Partie II : Somme directe et projecteurs

5. À l'aide du théorème du rang appliqué aux endomorphismes induits, montrer que $E = \ker(f^2) \oplus \text{Im}(f^2)$.
6. Expliciter un polynôme en $f$ qui projette $E$ sur $\text{Im}(f^2)$ parallèlement à $\ker(f^2)$.

### Partie III : Analyse critique du modèle

7. Discuter de la pertinence de supposer $E$ de dimension finie. Que se passe-t-il si $E$ est de dimension infinie (par exemple l'espace des suites ou des fonctions polynomiales) ?

---

## Pistes

* **Question 1 & 3 :** Utiliser les définitions des inclusions successives par composition d'applications.
* **Question 2 :** Faire un raisonnement par récurrence sur $k \ge 2$ en utilisant la condition (P).
* **Question 5 :** Penser à utiliser la dimension de $E$, le théorème du rang, et à montrer que l'intersection du noyau et de l'image est réduite au vecteur nul.
* **Question 6 :** Chercher une combinaison linéaire simple de $I$, $f$ et $f^2$ dont le carré est égal à lui-même.

---

## Corrigé pas à pas

### Partie I : Propriétés fondamentales et noyaux emboîtés

**1.** Soit $x \in \ker(f)$. Alors $f(x) = 0$. En appliquant $f$, on a $f(f(x)) = f(0) = 0$, donc $f^2(x) = 0$, ce qui signifie $x \in \ker(f^2)$. Ainsi, $\ker(f) \subset \ker(f^2)$. 
De même, si $x \in \ker(f^2)$, $f^2(x) = 0 \implies f(f^2(x)) = f(0) = 0 \implies f^3(x) = 0$, donc $x \in \ker(f^3)$. 
Par conséquent :
$$\ker(f) \subset \ker(f^2) \subset \ker(f^3)$$

**2.** Supposons $\ker(f^2) = \ker(f^3)$. Montrons par récurrence sur $k \ge 2$ que $\ker(f^k) = \ker(f^2)$.
* *Initialisation :* Pour $k=2$, c'est immédiat.
* *Hérédité :* Soit $k \ge 2$ tel que $\ker(f^k) = \ker(f^2)$. Soit $x \in \ker(f^{k+1})$. 
Alors $f^{k+1}(x) = f^2(f^{k-1}(x)) = 0$. Cela signifie que $f^{k-1}(x) \in \ker(f^2) = \ker(f^3)$. 
Donc $f^3(f^{k-1}(x)) = 0$, c'est-à-dire $f^{k+2}(x) = 0$. 
En utilisant la condition (P), $f^3 - f^2 = 0 \implies f^3 = f^2$, donc par récurrence on montre que $\ker(f^k) reste stable$. Plus simplement, utilisons directement la relation $f^3 = f^2$. 
Soit $x \in \ker(f^{k+1})$. On a $f^3(f^{k-2}(x)) = f^2(f^{k-2}(x)) \implies f^{k+1}(x) = f^k(x)$, ce qui est lourd. 
Revenons à la définition : par l'hypothèse de récurrence élargie, si $f^3 = f^2$, alors pour tout $x$, $f^3(x) = f^2(x)$, donc $\ker(f^3) = \ker(f^2)$. Par une récurrence immédiate basée sur le fait que $f^{k+1}(x) = 0 \implies f^3(f^{k-2}(x)) = 0 \implies f^2(f^{k-2}(x)) = 0$ (car $\ker(f^3) = \ker(f^2)$), on obtient $x \in \ker(f^k) = \ker(f^2)$.
Conclusion: * $\ker(f^k) = \ker(f^2)$ pour tout $k \ge 2$.

**3.** Soit $y \in \text{Im}(f^3)$. Il existe $x \in E$ tel que $y = f^3(x)$. 
Puisque $f^3 = f^2$, $y = f^2(f(x))$, donc $y \in \text{Im}(f^2)$. Ainsi $\text{Im}(f^3) \subset \text{Im}(f^2)$.
De même, tout élément de $\text{Im}(f^2)$ s'écrit $f^2(x) = f(f(x))$, donc appartient à $\text{Im}(f)$.
Finalement :
$$\text{Im}(f^3) \subset \text{Im}(f^2) \subset \text{Im}(f)$$

**4.** D'après la question 3, $\text{Im}(f^3) \étall$ est incluse dans $\text{Im}(f^2)$. 
Montrons l'inclusion réciproque. Soit $y \in \text{Im}(f^2)$. Il existe $x \in E$ tel que $y = f^2(x)$.
Comme $f^3 = f^2$, on a $y = f^3(x) = f^3(f(x)) \in \text{Im}(f^3)$.
D'où l'égalité $\text{Im}(f^2) = \text{Im}(f^3)$.

---

### Partie II : Somme directe et projecteurs

**5.** Appliquons le théorème du rang à la restriction de $f^2$ à $\text{Im}(f)$ ou utilisons les dimensions. 
D'après le théorème du rang pour l'endomorphisme $f^2$ sur $E$ :
$$\dim(E) = \dim(\ker(f^2)) + \dim(\text{Im}(f^2))$$
Montrons maintenant que $\ker(f^2) \cap \text{Im}(f^2) = \{0\}$.
Soit $x \in \ker(f^2) \cap \text{Im}(f^2)$. 
* Puisque $x \in \text{Im}(f^2)$, il existe $v \in E$ tel que $x = f^2(v)$.
* Puisque $x \in \ker(f^2)$, $f^2(x) = 0$. 
En combinant ces deux points : $f^2(f^2(v)) = 0 \implies f^4(v) = 0$.
Or, comme $f^3 = f^2$, on a $f^4 = f(f^3) = f(f^2) = f^3 = f^2$.
Donc $f^2(v) = 0$, c'est-à-dire $x = 0$.
La somme des dimensions étant égale à $\dim(E)$ et l'intersection étant nulle, on conclut que :
$$E = \ker(f^2) \oplus \text{Im}(f^2)$$

**6.** Cherchons un endomorphisme $p$ de la forme $p = a f^2 + b f + c \text{Id}$ qui soit un projecteur sur $\text{Im}(f^2)$ parallèlement à $\ker(f^2)$.
Puisque $f^3 = f^2$, on remarque que $(f^2)^2 = f^4 = f^2$. 
Ainsi, l'endomorphisme $p = f^2$ vérifie $p^2 = f^4 = f^2 = p$. 
C'est donc un projecteur. Son image est $\text{Im}(f^2)$ et son noyau est $\ker(f^2)$ (car $f^2(x) = 0 \iff x \in \ker(f^2)$).
Le projecteur recherché est donc simplement **$p = f^2$**.

---

### Partie III : Analyse critique du modèle

**Analyse critique et limites du modèle :**
1. **Hypothèse de dimension finie :** Le raisonnement utilise de manière cruciale le théorème du rang ($\dim(E) = \dim(\ker) + \dim(\text{Im})$) et l'égalité des dimensions pour prouver la somme directe. En dimension infinie, l'égalité $\dim(\ker) + \dim(\text{Im}) = \dim(E)$ n'a plus de sens mathématique strict, et un sous-espace supplémentaire de $\ker(f^2)$ n'existe pas toujours topologiquement (notamment si les noyaux ne sont pas fermés dans le cas des espaces vectoriels normés).
2. **Puissance minimale :** L'annulation d'un polynôme comme $f^3 - f^2 = 0$ (polynôme annulateur $X^2(X-1)$) garantit une décomposition spectrale simple en dimension finie (grâce au lemme des noyaux : $E = \ker(f^2) \oplus \ker(f-\text{Id})$). Cependant, en dimension infinie, l'existence d'une telle décomposition algébrique ne garantit en rien la continuité des projecteurs associés, ce qui limite fortement l'exploitation en analyse fonctionnelle (où l'on préfère les opérateurs continus).