---
title: 'Cours : Structures algébriques fondamentales'
description: 'Synthèse officielle du cours et démonstrations pour CPGE MP2I.'
---

# Fiche de Cours : Structures algébriques fondamentales (MP2I)

## 📌 1. Définitions & Cadre d'étude

Soit $E$ un ensemble muni d'une ou plusieurs lois de composition interne. Le programme de MP2I exige une maîtrise parfaite des structures de base et de leurs morphismes.

*   **Loi de composition interne (LCI) :** Une application $\star : E \times E \to E$. Elle est dite associative si $\forall (x, y, z) \in E^3, (x \star y) \star z = x \star (y \star z)$, et commutative si $\forall (x, y) \in E^2, x \star y = y \star x$.
*   **Monoïde et Groupe :** Un ensemble $G$ muni de $\star$ est un **monoïde** si la loi est associative et possède un élément neutre $e \in G$. Il s'agit d'un **groupe** si de plus tout élément de $G$ possède un symétrique pour $\star$. Si la loi est commutative, le groupe est dit abélien.
    *   *Exemple fondamental en info/maths :* $(\mathcal{M}_{n}(\mathbb{K}), +, \times)$ est un monoïde unitaire, et $(\text{GL}_n(\mathbb{K}), \times)$ est un groupe non abélien pour $n \ge 2$.
*   **Anneau et Corps :** Un triplet $(A, +, \times)$ est un **anneau** si $(A, +)$ est un groupe abélien, si $\times$ est associative, possède un élément neutre $1_A$ (anneau unitaire), et si $\times$ est distributive par rapport à $+$. Un anneau commutatif non nul dont tout élément non nul est inversible pour $\times$ est un **corps** (ex: $\mathbb{R}, \mathbb{C}, \mathbb{Q}$).
*   **Sous-structures :** 
    *   Un sous-groupe $H$ d'un groupe $(G, \star)$ est une partie non vide stable par $\star$ et par passage au symétrique.
    *   Un sous-anneau $B$ d'un anneau $(A, +, \times)$ est un sous-groupe additivement stable par multiplication et contenant $1_A$.
*   **Morphismes :** Soit $(G, \star)$ et $(H, \top)$ deux groupes. Une application $f : G \to H$ est un **morphisme de groupes** si $\forall (x, y) \in G^2, f(x \star y) = f(x) \top f(y)$. On définit de même les morphismes d'anneaux.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème 1 : Caractérisation des sous-groupes
> **Énoncé :** Soit $(G, \star)$ un groupe et $H \subset G$. $H$ est un sous-groupe de $G$ si et seulement si :
> 1. $H \neq \emptyset$
> 2. $\forall (x, y) \in H^2, x \star y^{-1} \in H$.

> **Démonstration :**
> *   *Sens direct :* Supposons que $H$ soit un sous-groupe de $G$. Alors $H$ contient le neutre, donc $H \neq \emptyset$. Soit $(x, y) \in H^2$. Par passage au symétrique, $y^{-1} \in H$. Par stabilité de la loi interne dans $H$, $x \star y^{-1} \in H$.
> *   *Sens indirect :* Supposons les deux conditions vérifiées. Comme $H \neq \emptyset$, soit $x \in H$. En prenant $x = y$, on a $x \star x^{-1} = e \in H$. 
>     Ensuite, pour tout $x \in H$, comme $e \in H$, $e \star x^{-1} = x^{-1} \in H$ (stabilité par symétrique).
>     Enfin, soient $x, y \in H$. On sait que $y^{-1} \in H$, donc en appliquant la propriété à $x$ et $y^{-1}$, $x \star (y^{-1})^{-1} = x \star y \in H$ (stabilité par la loi).
>     Le sous-ensemble $H$ est donc bien un sous-groupe de $G$. $\blacksquare$

### Théorème 2 : Structure des sous-groupes de $(\mathbb{Z}, +)$
> **Énoncé :** Les sous-groupes de $(\mathbb{Z}, +)$ sont exactement les $n\mathbb{Z}$ pour $n \in \mathbb{N}$.

---

## 💡 3. Méthodes de calcul & Algorithmes

*   **Méthode pour montrer qu'un ensemble est un corps fini ou infini :** 
    Vérifier la structure d'anneau commutatif, puis s'assurer que tout élément non nul possède un inverse. Pour les matrices, attention au fait que $\mathcal{M}_n(\mathbb{K})$ (pour $n \ge 2$) n'est **pas** un corps (présence de diviseurs de zéro et de matrices non inversibles).
*   **Calcul d'ordres dans un groupe fini :**
    Pour un élément $x$ d'un groupe $G$, l'ordre de $x$ est le plus petit entier $k \ge 1$ tel que $x^k = e$. 
    *Propriété clef :* Si $x^p = e$, alors l'ordre de $x$ divise $p$.
*   **Utilisation des congruences pour les anneaux quotients :**
    Manipuler $\mathbb{Z}/n\mathbb{Z}$ en MP2I nécessite de maîtriser l'algorithme d'Euclide étendu pour inverser des éléments dans $(\mathbb{Z}/n\mathbb{Z})^\times$.

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Oublier de vérifier la non-vacuité :** Pour prouver qu'une intersection ou une union de sous-structures est un sous-groupe, il faut impérativement commencer par vérifier que l'élément neutre $e$ appartient à l'ensemble.
2.  **Confondre anneau et corps :** Tout anneau n'est pas intègre, et tout anneau intègre n'est pas un corps (ex: $\mathbb{Z}$ est un anneau intègre mais pas un corps car $2$ n'y est pas inversible).
3.  **Mauvaise manipulation des lois non commutatives :** Dans un groupe non abélien, $(x \star y)^{-1} = y^{-1} \star x^{-1}$ (attention à l'ordre d'inversion !). De même, $(x \star y)^2 = x \star y \star x \star y$ et non pas $x^2 \star y^2$.
4.  **Matrices et inversibilité :** Soit $A \in \mathcal{M}_n(\mathbb{R})$. Dire que $A$ n'est pas inversible ne signifie pas que $A = 0$ (contre-exemple des diviseurs de zéro).