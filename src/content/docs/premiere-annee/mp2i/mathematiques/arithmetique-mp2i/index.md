---
title: 'Cours : Arithmétique dans Z'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE MP2I.'
---

## 📌 1. Définitions & Cadre d'étude

L'étude arithmétique de l'anneau commutatif unitaire $(\mathbb{Z}, +, \times)$ repose sur la structure fondamentale d'idéal principal et sur la relation de divisibilité.

### Divisibilité et Division Euclidienne
Soient $(a, b) \in \mathbb{Z}^2$. On dit que $a$ divise $b$ (noté $a \mid b$) s'il existe un entier $k \in \mathbb{Z}$ tel que $b = ka$.

**Théorème (Division euclidienne dans $\mathbb{Z}$):**
Soit $a \in \mathbb{Z}$ et $b \in \mathbb{Z}^*$. Il existe un unique couple $(q, r) \in \mathbb{Z}^2$ tel que :
$$a = bq + r \quad \text{et} \quad 0 \le r < |b|$$

### PGCD et PPCM
* **Idéaux de $\mathbb{Z}$ :** Tout idéal de $\mathbb{Z}$ est principal, c'est-à-dire de la forme $a\mathbb{Z}$ pour un certain $a \in \mathbb{N}$.
* **PGCD :** Pour $(a, b) \in \mathbb{Z}^2 \setminus \{(0,0)\}$, le plus grand commun diviseur, noté $\text{pgcd}(a, b)$ ou $a \land b$, est l'unique entier naturel générateur de l'idéal $a\mathbb{Z} + b\mathbb{Z}$.
* **PPCM :** Le plus petit commun multiple, noté $\text{ppcm}(a, b)$ ou $a \lor b$, est l'unique entier naturel générateur de l'idéal intersection $a\mathbb{Z} \cap b\mathbb{Z}$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème de Bézout
Soient $(a, b) \in \mathbb{Z}^2$. 
$$a \land b = 1 \iff \exists (u, v) \in \mathbb{Z}^2, \; au + bv = 1$$

**Démonstration :**
Considérons l'idéal $I = a\mathbb{Z} + b\mathbb{Z}$. Puisque $\mathbb{Z}$ est principal, il existe $d \in \mathbb{N}$ tel que $I = d\mathbb{Z}$. 
1. Par définition, $a \in I \implies d \mid a$, et $b \in I \implies d \mid b$. Ainsi, $d$ est un diviseur commun de $a$ et $b$.
2. Réciproquement, si $c$ est un diviseur commun de $a$ et $b$, alors pour tout $(u, v) \in \mathbb{Z}^2$, $c \mid (au + bv)$. Comme $d \in I$, il existe $(u_0, v_0) \in \mathbb{Z}^2$ tel que $d = au_0 + bv_0$, donc $c \mid d$.
3. Le générateur positif $d$ est donc le plus grand commun diviseur de $a$ et $b$. 
Si $a \land b = 1$, alors $d = 1$, ce qui signifie $1 \in a\mathbb{Z} + b\mathbb{Z}$, d'où l'existence de $u$ et $v$. La réciproque est immédiate par transitivité de la divisibilité. $\blacksquare$

### Lemme de Gauss
Soient $(a, b, c) \in \mathbb{Z}^3$. Si $a \mid bc$ et $a \land b = 1$, alors $a \mid c$.

### Théorème de Gauss généralisé
Soit $n \in \mathbb{N}^*$ et $(a_1, \dots, a_n) \in \mathbb{Z}^n$. Si pour tout $i \in \{1, \dots, n-1\}$, $a_i \land a_n = 1$, alors :
$$(a_1 \dots a_{n-1}) \land a_n = 1$$

### Lemme d'Euclide et Optimalité
Soit $p \in \mathbb{Z}$ un nombre premier. 
$$p \mid ab \implies (p \mid a \lor p \mid b)$$

### Théorème Fondamental de l'Arithmétique
Tout entier $n \in \mathbb{Z} \setminus \{-1, 0, 1\}$ se décompose de manière unique (à l'ordre près des facteurs et au signe près des unités $\pm 1$) sous la forme :
$$n = \epsilon \prod_{i=1}^{r} p_i^{\alpha_i}$$
où $\epsilon \in \{-1, 1\}$, les $p_i$ sont des nombres premiers distincts et les $\alpha_i$ sont des entiers strictement positifs.

---

## 💡 3. Méthodes de calcul & Algorithmes

### Algorithme d'Euclide étendu
Pour calculer $d = a \land b$ et trouver une relation de Bézout $au + bv = d$, on utilise des divisions euclidiennes successives :
$$a = bq_1 + r_1 \quad (0 < r_1 < b)$$
$$b = r_1 q_2 + r_2 \quad (0 < r_2 < r_1)$$
Le processus s'arrête lorsque $r_{k+1} = 0$. Le dernier reste non nul est $d$. La remontée des coefficients permet d'obtenir $(u, v)$.

### Résolution de l'équation diophantienne linéaire $ax + by = c$
Soit $(a, b, c) \in \mathbb{Z}^2 \times \mathbb{Z}$ avec $(a, b) \neq (0,0)$ et $d = a \land b$.
1. **Condition d'existence :** L'équation admet des solutions si et seulement si $d \mid c$.
2. **Solution particulière :** On détermine $(x_0, y_0) \in \mathbb{Z}^2$ par l'algorithme d'Euclide étendu appliqué à $a/d$ et $b/d$.
3. **Solution générale :** L'ensemble des solutions de l'équation est donné par :
   $$\mathcal{S} = \left\{ \left( x_0 + k \frac{b}{d}, \; y_0 - k \frac{a}{d} \right) \middle| k \in \mathbb{Z} \right\}$$

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oubli des conditions initiales du PGCD :** Le PGCD de deux entiers est par définition un entier **positif** ou nul ($a \land b \ge 0$). Attention aux simplifications hâtives avec les signes négatifs.
2. **Mauvaise manipulation de l'unicité dans la décomposition en facteurs premiers :** Ne pas oublier que l'unicité s'entend à l'ordre des facteurs près et à l'inversion près des facteurs associés (multiplication par $\pm 1$).
3. **Application abusive du Lemme de Gauss :** Le lemme de Gauss requiert impérativement la primalité entre $a$ et $b$ ($a \land b = 1$). Si $a \mid bc$ sans que $a$ et $b$ soient premiers entre eux, on ne peut conclure que $a \mid c$ (ex: $6 \mid 2 \times 3$, mais $6 \nmid 2$ et $6 \nmid 3$).
4. **Erreurs de quantification dans les congruences :** Travailler dans $\mathbb{Z}/n\mathbb{Z}$ nécessite de bien préciser les classes d'équivalence et de vérifier l'inversibilité (un élément $a$ est inversible modulo $n$ si et seulement si $a \land n = 1$).