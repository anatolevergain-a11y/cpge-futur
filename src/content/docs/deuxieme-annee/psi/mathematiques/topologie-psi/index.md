---
title: 'Cours : Topologie des espaces normés'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PSI.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $K$ le corps $\mathbb{R}$ ou $\mathbb{C}$. Un espace vectoriel normé (E.V.N.) est un couple $(E, \|\cdot\|)$ où $E$ est un $K$-espace vectoriel et $\|\cdot\|$ une application de $E$ dans $\mathbb{R}_+$ vérifiant :
1. **Séparation :** $\forall x \in E, \, (\|x\| = 0 \implies x = 0_E)$.
2. **Homogénéité :** $\forall \lambda \in K, \, \forall x \in E, \, \|\lambda x\| = |\lambda| \, \|x\|$.
3. **Inégalité triangulaire :** $\forall (x,y) \in E^2, \, \|x+y\| \le \|x\| + \|y\|$.

Dans tout ce chapitre, $E$ désigne un $K$-espace vectoriel normé.

- **Boules et sphères :** Pour $a \in E$ et $r > 0$, on définit la boule ouverte $B(a,r) = \{x \in E \mid \|x-a\| < r\}$, la boule fermée $\bar{B}(a,r) = \{x \in E \mid \|x-a\| \le r\}$ et la sphère $S(a,r) = \{x \in E \mid \|x-a\| = r\}$.
- **Ouverts et fermés :** Une partie $U \subset E$ est dite ouverte si elle est voisinage de chacun de ses points ($\forall x \in U, \, \exists r > 0, \, B(x,r) \subset U$). Une partie $F \subset E$ est dite fermée si son complémentaire $E \setminus F$ est ouvert.
- **Continuité :** Une application $f : E \to F$ entre deux E.V.N. est continue en $a \in E$ si :
$$\forall \varepsilon > 0, \, \exists \eta > 0, \, \forall x \in E, \, (\|x-a\|_E < \eta \implies \|f(x)-f(a)\|_F < \varepsilon)$$
- **Équivalence des normes :** Deux normes $\|\cdot\|_1$ et $\|\cdot\|_2$ sur $E$ sont dites équivalentes s'il existe des constantes $c > 0$ et $C > 0$ telles que :
$$\forall x \in E, \, c \|x\|_1 \le \|x\|_2 \le C \|x\|_1$$
Cette relation est une relation d'équivalence. Elle préserve la nature topologique des parties (ouverts, fermés, compacts) et la convergence des suites.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème : Caractérisation séquentielle des fermés
*Soit $F \subset E$. $F$ est fermé si et seulement si toute suite d'éléments de $F$ qui converge dans $E$ a sa limite dans $F$.*

**Démonstration :**
$(\implies)$ Soit $F$ un fermé. Soit $(u_n)_{n \in \mathbb{N}}$ une suite d'elements de $F$ convergeant vers $l \in E$. Supposons par l'absurde que $l \notin F$. Comme $F$ est fermé, son complémentaire $E \setminus F$ est un ouvert contenant $l$. Par définition d'un ouvert, il existe un $\varepsilon > 0$ tel que $B(l, \varepsilon) \subset E \setminus F$. 
Puisque $(u_n)$ converge vers $l$, il existe un rang $N_0 \in \mathbb{N}$ tel que pour tout $n \ge N_0$, $u_n \in B(l, \varepsilon)$. En particulier, pour $n = N_0$, $u_{N_0} \in E \setminus F$, ce qui contredit le fait que tous les termes de la suite appartiennent à $F$. Donc $l \in F$.

$(\implowe)$ Supposons que toute suite convergente d'éléments de $F$ a sa limite dans $F$. Montrons que $E \setminus F$ est ouvert. Soit $l \in E \setminus F$. Supposons par l'absurde que pour tout entier $n \ge 1$, la boule $B(l, \frac{1}{n})$ rencontre $F$. On peut alors choisir un élément $u_n \in F \cap B(l, \frac{1}{n})$. 
La suite $(u_n)$ ainsi construite est à valeurs dans $F$ et vérifie $\|u_n - l\| < \frac{1}{n}$. Par encadrement, la suite $(u_n)$ converge vers $l$ dans $E$. Par hypothèse, la limite $l$ doit appartenir à $F$, ce qui contredit $l \in E \setminus F$. Par conséquent, il existe un $n_0 \ge 1$ tel que $B(l, \frac{1}{n_0}) \subset E \setminus F$, ce qui prouve que $E \setminus F$ est ouvert, et donc que $F$ est fermé. $\blacksquare$

### Théorème : Équivalence des normes en dimension finie
*Si $E$ est un K-espace vectoriel de dimension finie, toutes les normes sur $E$ sont équivalentes.*

**Démonstration (Esquisse pour $E = K^n$) :**
Par isomorphisme, il suffit de le démontrer pour $K^n$ muni de la norme infini $\|x\|_\infty = \max_{1 \le i \le n} |x_i|$ et d'une norme quelconque $\|\cdot\|$. 
1. Par l'inégalité triangulaire, pour $x = \sum_{i=1}^n x_i e_i$, on a $\|x\| \le \sum_{i=1}^n |x_i| \|e_i\| \le M \|x\|_\infty$ avec $M = \sum_{i=1}^n \|e_i\|$, ce qui donne la domination de $\|\cdot\|$ par $\|\cdot\|_\infty$.
2. L'autre inégalité repose sur la compacité de la sphère unité pour $\|\cdot\|_\infty$ (théorème de Bolzano-Weierstrass) et la continuité de l'application $x \mapsto \|x\|$ pour obtenir l'atteinte de la borne inférieure. $\blacksquare$

---

## 💡 3. Méthodes de calcul & Algorithmes

1. **Démontrer qu'une partie est ouverte :**
   - **Méthode 1 :** Exprimer l'ensemble comme image réciproque d'un ouvert par une application continue (ex: $U = f^{-1}(V)$ avec $f$ continue).
   - **Méthode 2 :** Utiliser les opérations algébriques : une union quelconque d'ouverts est un ouvert, une intersection finie d'ouverts est un ouvert.
   - **Méthode 3 :** À tout point $a \in U$, expliciter un rayon $r > 0$ tel que $B(a,r) \subset U$.

2. **Démontrer qu'une partie est fermée :**
   - **Méthode 1 :** Utiliser le complémentaire ($F$ est fermé si et seulement si $E \setminus F$ est ouvert).
   - **Méthode 2 :** Utiliser la caractérisation séquentielle : soit $(u_n)$ une suite d'éléments de $F$ convergeant vers $l$, montrer que $l \in F$.
   - **Méthode 3 :** Exprimer $F$ comme image réciproque d'un fermé par une application continue (ex: $F = f^{-1}(\{0\})$ pour $f$ continue).

3. **Techniques de calcul de limites et continuité d'applications linéaires :**
   - En dimension finie, toute application linéaire de $E$ dans $F$ est continue.
   - En dimension quelconque, l'application linéaire $u : E \to F$ est continue si et seulement si elle est bornée sur la sphère unité, c'est-à-dire :
   $$\exists M \in \mathbb{R}_+, \, \forall x \in E, \, \|u(x)\|_F \le M \|x\|_E$$

---

## ⚠️ 4. Pièges classiques aux Concours

- **Piège de la dimension infinie :** Oublier que l'équivalence des normes et le théorème de Bolzano-Weierstrass (les parties fermées bornées sont compacts) sont **faux** en dimension infinie (par exemple dans $\mathcal{C}([0,1], \mathbb{R})$ ou $\ell^2(\mathbb{N})$).
- **Confusion adhérence et intérieur :** Affirmer qu'une suite d'éléments de l'adhérence $\bar{A}$ converge vers un élément de $A$. C'est faux, la limite appartient à $\bar{A}$, pas nécessairement à $A$.
- **Adhésion vs Intersection :** Attention aux intersections infinies d'ouverts qui ne sont pas des ouverts (ex: $\left. \bigcap_{n \in \mathbb{N}^*]} ]-\frac{1}{n}, \frac{1}{n}[ = \{0\}\right.$, qui est fermé).
- **Continuité et compositions :** Pour montrer qu'une application $f : A \subset E \to F$ est continue, ne pas oublier de préciser le domaine de définition et de vérifier la continuité des briques élémentaires (produits scalaires, normes, inversions dans les algèbres de Banach, etc.).