---
title: "📌 1. Définitions & Cadre d'étude"
description: "Fiche de cours et d'exercice CPGE."
---

## 📌 1. Définitions & Cadre d'étude

Un système physico-chimique est dit **binaire** s'il est constitué de $C = 2$ constituants indépendants (espèces chimiques). 

Une **phase** est une partie du système homogène du point de vue physique et chimique. On note $\varphi$ le nombre de phases présentes à l'équilibre.

### Variables intensives et variance
L'état d'un système hétérogène à l'équilibre est décrit par un certain nombre de variables intensives (température $T$, pression $P$, fractions molaires ou massiques dans chaque phase). La **variance** $v$ du système est définie par le nombre de degrés de liberté, c'est-à-dire le nombre minimal de variables intensives indépendantes qu'il faut fixer pour définir complètement l'état d'équilibre du système.
---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème de Gibbs : La Règle des phases
Pour un système physico-chimique quelconque en équilibre, la variance $v$ s'exprime par la formule de Gibbs :

$$v = C - \varphi + \text{net}$$

où :
- $C$ est le nombre de constituants indépendants ($C = 2$ pour un système binaire).
- $\varphi$ est le nombre de phases en équilibre.
- $\text{net}$ est le nombre de relations d'équilibre physico-chimique indépendantes (réactions chimiques, ex: équilibres acido-basiques, dissociation) hors équilibres physiques de changement d'état. S'il n'y a pas de réaction chimique, $\text{net} = 0$.

Dans le cadre de ce chapitre, en l'absence de réaction chimique :

$$v = 2 - \varphi + 2 = 4 - \varphi$$
*(en comptant $T$ et $P$ comme variables physiques externes)*.

### Démonstration / Justification du nombre de variables indépendantes
1. Le nombre total de variables intensives permettant de décrire le système est donné par la composition de chaque phase (soit $(C-1)$ fractions molaires par phase, car la somme vaut $1$) et les variables $T$ et $P$. Pour $\varphi$ phases, cela fait $\varphi(C-1) + 2$ variables.
2. À l'équilibre thermodynamique, pour chaque constituant $i$ présent dans plusieurs phases (disons $1$ et $j$), le potentiel chimique doit être égal : $\mu_{i}^{(1)} = \mu_{i}^{(j)}$. Cela impose $C(\varphi - 1)$ relations d'égalité.
3. La variance est la différence entre le nombre de variables et le nombre de relations indépendantes :
   $$v = [\varphi(C-1) + 2] - C(\varphi-1) = C - \varphi + 2$$

### Conséquences pour les diagrammes binaires
- **Équilibre bivariant ($v = 2$)** : $\varphi = 2$ (dans le plan $(T, x)$ à $P$ fixée). Le domaine est une surface (domaine diphasé).
- **Équilibre univariant ($v = 1$)** : $\varphi = 3$ (à $P$ fixée, $v = 4 - 3 = 1$). Les courbes d'analyse thermique (lignes de liquidus et solidus) constituent des invariants ou des frontières univariantes (ex: palier eutectique).
- **Équilibre invariant ($v = 0$)** : $\varphi = 4$ (point eutectique à pression fixée si l'on compte la phase vapeur, ou point eutectique solide-solide-liquide sans phase vapeur où $v = 2 - 3 + 1 = 0$).

---

## 💡 3. Méthodes de calcul & Algorithmes

### Règle des moments chimiques (ou des segments inverses)
Considérons un système binaire globalement caractérisé par sa composition globale $z$ (fraction molaire du constituant $B$) à une température $T$ (pression $P$ fixée), se trouvant dans un domaine diphasé ($\varphi = 2$) en équilibre entre une phase $\alpha$ de composition $x_\alpha$ et une phase $\beta$ de composition $x_\beta$.

Soit $n$ la quantité de matière totale, $n_\alpha$ la quantité de la phase $\alpha$ et $n_\beta$ la quantité de la phase $\beta$.
1. **Conservation de la matière globale pour le constituant $B$** :
   $$n \cdot z = n_\alpha \cdot x_\alpha + n_\beta \cdot x_\beta$$
2. **Conservation de la quantité totale** :
   $$n = n_\alpha + n_\beta$$

En combinant ces deux relations, on obtient l'égalité fondamentale des moments :

$$n_\alpha \cdot (z - x_\alpha) = n_\beta \cdot (x_\beta - z)$$

Graphiquement, sur le diagramme $(T, z)$ :
- La longueur du segment reliant la composition globale $z$ à la composition de la phase $\beta$ ($x_\beta - z$) pondérée par la quantité de phase $\alpha$ ($n_\alpha$) est égale à la longueur du segment reliant la phase $\alpha$ ($x_\alpha$) à la composition globale $z$ ($z - x_\alpha$) pondérée par la quantité de phase $\beta$ ($n_\beta$).

$$\frac{n_\alpha}{n_\beta} = \frac{x_\beta - z}{z - x_\alpha}$$

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oubli de fixer la pression** : La règle des phases donne $v = 4 - \varphi$ si l'on prend en compte $T$ et $P$. Dans les diagrammes binaires usuels à pression constante ($P = \text{cste}$), la pression n'est plus une variable libre. Il faut impérativement utiliser la variance réduite : 
   $$v' = 3 - \varphi$$
   Une erreur fréquente consiste à appliquer $v = 4 - \varphi$ pour un diagramme tracé à $P = \text{1}\text{ bar}$.

2. **Confusion entre fraction massique et fraction molaire** : La règle des moments s'applique strictement aux quantités de matière (fractions molaires) **sauf** si le diagramme est explicitement tracé en fractions massiques (auquel cas elle s'applique aux masses $m_\alpha$ et $m_\beta$). Ne jamais mélanger les deux !

3. **Mauvaise lecture des frontières diphasées** : Pour trouver la composition des phases en équilibre à une température $T$ donnée dans un domaine diphasé, il faut tracer l'isotherme (horizontale à $T = \text{cste}$) jusqu'à couper les deux lignes frontières (liquidus et solidus), et non pas lire la composition globale.