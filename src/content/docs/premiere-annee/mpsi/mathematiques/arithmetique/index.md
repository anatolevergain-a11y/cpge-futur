---
title: 'Cours : Arithmétique dans Z'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Arithmétique dans $\mathbb{Z}$
Niveau: ** MPSI (Première année)  
**Matière :** Mathématiques  

---

## 1. Divisibilité et Division Euclidienne dans $\mathbb{Z}$

### A. Définitions et premières propriétés
Soit $(a, b) \in \mathbb{Z}^2$.

> **Définition (Divisibilité) :**  
> On dit que $a$ divise $b$ (noté $a \mid b$) s'il existe un entier $k \in \mathbb{Z}$ tel que $b = ka$.

*Propriétés fondamentales :*
1. La relation $\mid$ est une relation préordre sur $\mathbb{Z}$ (réflexive, transitive). Elle n'est pas antisymétrique, mais si $a \mid b$ et $b \mid a$, alors $a = \pm b$.
2. $\forall a \in \mathbb{Z}, \pm 1 \mid a$ et $a \mid 0$. Si $a \mid 1$, alors $a \in \{-1, 1\}$.
3. Si $a \mid b$ et $c \mid d$, alors $ac \mid bd$.
4. Si $a \mid b$ et $b \mid c$, alors $a \mid c$.
5. Si $a \mid b$ et $a \mid c$, alors pour tous $(u, v) \in \mathbb{Z}^2$, $a \mid (ub + vc)$ (principe de superposition).

---

### B. Division Euclidienne
> **Théorème (Division euclidienne) :**  
> Soit $a \in \mathbb{Z}$ et $b \in \mathbb{N}^*$. Il existe un unique couple $(q, r) \in \mathbb{Z} \times \mathbb{N}$ tel que :
> $$a = bq + r \quad \text{et} \quad 0 \le r < b$$

*Démonstration (Esquisse) :*
* **Existence :** On considère l'ensemble $E = \{a - bk \mid k \in \mathbb{Z} \text{ et } a - bk \ge 0\}$. Par le principe du bon ordre dans $\mathbb{N}$, cet ensemble non vide (Archimédianité) possède un plus petit élément $r = a - bq$. Par construction $r \ge 0$. Si $r \ge b$, alors $r - b = a - b(q+1) \ge 0$, ce qui contredit la minimalité de $r$. Donc $r < b$.
* **Ununicité :** Supposons $a = bq_1 + r_1 = bq_2 + r_2$ avec $0 \le r_1, r_2 < b$. Alors $b(q_1 - q_2) = r_2 - r_1$. En prenant la valeur absolue, si $q_1 \neq q_2$, $b \le |b(q_1 - q_2)| = |r_2 - r_1| < b$, ce qui est absurde. Donc $q_1 = q_2$ puis $r_1 = r_2$. $\blacksquare$

---

## 2. Plus Grand Commun Diviseur (PGCD) et Plus Petit Commun Multiple (PPCM)

### A. Idéaux de $\mathbb{Z}$
> **Définition (Idéal) :**  
> Un sous-ensemble $I de \mathbb{Z}$ est un idéal si :
> 1. $0 \in I$
> 2. $\forall (x, y) \in I^2, x + y \in I$
> 3. $\forall x \in I, \forall k \in \mathbb{Z}, kx \in I$

> **Théorème :**  
> Tout idéal de $\mathbb{Z}$ est principal, c'est-à-dire de la forme $a\mathbb{Z} = \{ak \mid k \in \mathbb{Z}\}$ pour un certain $a \in \mathbb{N}$.

---

### B. PGCD
> **Définition :**  
> Soit $a, b \in \mathbb{Z}$. L'idéal $a\mathbb{Z} + b\mathbb{Z}$ est principal, noté $d\mathbb{Z}$. L'unique entier $d \in \mathbb{N}$ ainsi défini est appelé le **PGCD** de $a$ et $b$, noté $\text{PGCD}(a, b)$ ou $a \wedge b$.

*Propriétés caractérisant le PGCD $d = a \wedge b$ (si $a,b$ non tous nuls) :*
1. $d \in \mathbb{N}^*$
2. $d \mid a$ et $d \mid b$
3. Si $c \mid a$ et $c \mid b$, alors $c \mid d$.

> **Théorème de Bézout :**  
> Soit $a, b \in \mathbb{Z}$. $a \wedge b = 1 \iff \exists (u, v) \in \mathbb{Z}^2, au + bv = 1$.  
> *Plus généralement :* $a \wedge b = d \iff \exists (u, v) \in \mathbb{Z}^2, au + bv = d$ et $\frac{a}{d} \wedge \frac{b}{d} = 1$.

> **Identité de Bézout (forme générale) :**  
> L'ensemble des combinaisons linéaires $au + bv$ (pour $u, v \in \mathbb{Z}$) est exactement l'idéal $(a \wedge b)\mathbb{Z}$.

> **Lemme de Gauss :**  
> Soit $a, b, c \in \mathbb{Z}$. Si $a \mid bc$ et $a \wedge b = 1$, alors $a \mid c$.

> **Théorème de Gauss :**  
> Si $a \mid c$, $b \mid c$ et $a \wedge b = 1$, alors $ab \mid c$.

---

### C. Algorithme d'Euclide
Méthode effective pour calculer le PGCD de deux entiers $a$ et $b$ (avec $b \neq 0$).  
On pose $r_0 = |a|$ et $r_1 = |b|$. On effectue des divisions euclidiennes successives :
* $r_0 = r_1 q_1 + r_2$ avec $0 \le r_2 < r_1$
* $r_1 = r_2 q_2 + r_3$ avec $0 \le r_3 < r_2$
* $\dots$
* $r_{n-2} = r_{n-1} q_{n-1} + r_n$ avec $0 \le r_n < r_{n-1}$
* $r_{n-1} = r_n q_n + 0$

Le dernier reste non nul $r_n$ est le PGCD de $a$ et $b$. Les coefficients de Bézout s'obtiennent par **remontée de l'algorithme d'Euclide**.

---

### D. PPCM
> **Définition :**  
> L'intersection de deux idéaux $a\mathbb{Z} \cap b\mathbb{Z}$ est un idéal de $\mathbb{Z}$, donc principal, de la forme $m\mathbb{Z}$. L'unique entier $m \in \mathbb{N}$ est le **PPCM** de $a$ et $b$, noté $a \vee b$.

*Propriété fondamentale :*  
Pour tous $a, b \in \mathbb{N}^*$ :
$$(a \wedge b) \times (a \vee b) = ab$$

---

## 3. Nombres Premiers

> **Définition :**  
> Un entier $p \in \mathbb{N}$ est dit **premier** s'admet exactement 4 diviseurs distincts dans $\mathbb{Z}$ : $\pm 1, \pm p$. Par convention, $1$ n'est pas premier et $p \ge 2$.  
> On note $\mathcal{P}$ l'ensemble des nombres premiers. L'ensemble $\mathcal{P}$ est infini (démonstration classique par l'absurde d'Euclide).

> **Lemme d'Euclide (pour les premiers) :**  
> Soit $p \in \mathcal{P}$ et $(a, b) \in \mathbb{Z}^2$. Si $p \mid ab$, alors $p \mid a$ ou $p \mid b$.

> **Théorème Fondamental de l'Arithmétique (Existence et Unicité de la décomposition en facteurs premiers) :**  
> Tout entier $n \ge 2$ se décompose de manière unique sous la forme :
> $$n = \prod_{p \in \mathcal{P}} p^{v_p(n)} = p_1^{\alpha_1} p_2^{\alpha_2} \dots p_k^{\alpha_k}$$
> où $v_p(n) \in \mathbb{N}$ (appelée valuation $p$-adique de $n$) est non nul pour un nombre fini de $p$, et les $p_i$ sont des nombres premiers distincts.

*Conséquence sur le PGCD et PPCM via les valuations :*  
Si $a = \prod p^{v_p(a)}$ et $b = \prod p^{v_p(b)}$, alors :
* $a \wedge b = \prod p^{\min(v_p(a), v_p(b))}$
* $a \vee b = \prod p^{\max(v_p(a), v_p(b))}$

---

## 4. Congruences dans $\mathbb{Z}$

> **Définition :**  
> Soit $n \in \mathbb{N}^*$. On dit que $a$ est congruent à $b$ modulo $n$ si $n \mid (a - b)$. On note :
> $$a \equiv b \pmod n$$

*Propriétés algébriques :*
La relation $\equiv \pmod n$ est une **relation d'équivalence** sur $\mathbb{Z}$. De plus, elle est compatible avec l'addition et la multiplication :
Si $a_1 \equiv b_1 \pmod n$ et $a_2 \equiv b_2 \pmod n$, alors :
1. $a_1 + a_2 \equiv b_1 + b_2 \pmod n$
2. $a_1 a_2 \equiv b_1 b_2 \pmod n$
3. $\forall k \in \mathbb{N}, a_1^k \equiv b_1^k \pmod n$

> **Définition (Anneau $\mathbb{Z}/n\mathbb{Z}$) :**  
> L'ensemble des classes d'équivalence modulo $n$ est noté $\mathbb{Z}/n\mathbb{Z}$. Il possède une structure d'anneau commutatif.

> **Caractérisation des inversibles de $\mathbb{Z}/n\mathbb{Z}$ :**  
> Un élément $\bar{a} \in \mathbb{Z}/n\mathbb{Z}$ est inversible (on dit aussi premier à $n$) si et seulement si $a \wedge n = 1$.

---

## 5. Théorèmes Majeurs

> **Théorème de Fermat (dit "Petit théorème de Fermat") :**  
> Soit $p \in \mathcal{P}$ et $a \in \mathbb{Z}$. Si $p \nmid a$, alors :
> $$a^{p-1} \equiv 1 \pmod p$$
> *Forme alternative :* $\forall a \in \mathbb{Z}, \quad a^p \equiv a \pmod p$.

> **Théorème des Chinois (的版本 / Sun Zi) :**  
> Soient $m, n \in \mathbb{N}^*$ tels que $m \wedge n = 1$. Alors pour tous $a, b \in \mathbb{Z}$, le système de congruences :
> $$\begin{cases} x \equiv a \pmod m \\ x \equiv b \pmod n \end{cases}$$
> possède une unique solution modulo $mn$.

---

## 6. Méthodes et Savoir-Faire en MPSI

1. **Prouver qu'un entier divise un autre :**
   * *Méthode 1 :* Trouver explicitement $k$ tel que $b = ka$.
   * *Méthode 2 :* Utiliser la transitivité ou les combinaisons linéaires.
   * *Méthode 3 (Congruences) :* Montrer que $b \equiv 0 \pmod a$.
   * *Méthode 4 (Valuations) :* Montrer que pour tout premier $p$, $v_p(a) \le v_p(b)$.

2. **Résoudre une équation diophantienne linéaire ($ax + by = c$) :**
   * *Étape 1 :* Calculer $d = a \wedge b$ par l'algorithme d'Euclide.
   * *Étape 2 :* Vérifier si $d \mid c$. Si non, pas de solution.
   * *Étape 3 :* Diviser l'équation par $d$ pour se ramener à $\frac{a}{d}x + \frac{b}{d}y = \frac{c}{d}$ avec $\frac{a}{d} \wedge \frac{b}{d} = 1$.
   * *Étape 4 :* Trouver une solution particulière $(x_0, y_0)$ par Bézout (remontée d'Euclide).
   * *Étape 5 :* Conclure avec l'ensemble des solutions : $S = \left\{ \left(x_0 + k\frac{b}{d}, y_0 - k\frac{a}{d}\right) \;\middle|\; k \in \mathbb{Z} \right\}$.

3. **Démontrer qu'une propriété est vraie pour tout $n$ :**
   * Penser à une disjonction de cas modulo $n$ (tableaux de congruences).

---

## 7. Pièges Classiques et Erreurs à Éviter

* **Attention au PGCD de 0 et $a$ :** Par définition, $a \wedge 0 = |a|$ (car l'idéal est $a\mathbb{Z} + 0\mathbb{Z} = a\mathbb{Z}$). En particulier, $0 \wedge 0 = 0$.
* **Implication fausse de Gauss :** $a \mid bc$ **ne implique pas** $a \mid b$ ou $a \mid c$ si $a$ et $b$ ne sont pas premiers entre eux ! *(Contre-exemple : $4 \mid 2 \times 6$, mais $4 \nmid 2$ et $4 \nmid 6$).*
* **Division par un entier dans une congruence :** On n'a **pas le droit** d'écrire $ac \equiv bc \pmod n \implies a \equiv b \pmod n$, *sauf* si $c \wedge n = 1$. (Exemple : $2 \times 2 \equiv 2 \times 5 \pmod 6$ donne $4 \equiv 10 \pmod 6$ soit $4 \equiv 4$, mais $2 \not\equiv 5 \pmod 6$).