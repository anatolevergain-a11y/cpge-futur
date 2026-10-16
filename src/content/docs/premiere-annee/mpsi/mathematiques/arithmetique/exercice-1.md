---
title: 'Exercice 1 : Théorème de Bézout et Gauss'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ : Autour de Bézout et Gauss – Équations diophantiennes et structures arithmétiques

**Filière :** MPSI  
**Matière :** Mathématiques  
Chapitre: ** Arithmétique dans $\mathbb{Z}$  
**Thème :** Théorème de Bézout, Lemme de Gauss et applications aux équations diophantiennes.

---

## 1. Énoncé

Le présent problème se propose d'étudier l'ensemble des solutions d'une équation diophantienne linéaire à deux variables, ainsi que certaines applications aux congruences et à la divisibilité dans l'anneau $(\mathbb{Z}, +, \times)$. 

On s'attachera non seulement à résoudre de tels systèmes, mais aussi à analyser la portée algorithmique et les limites conceptuelles des outils mis en œuvre, notamment face à la complexité de passage à des structures plus générales (comme les anneaux principaux non euclidiens).

---

## 2. Questions

### Partie I : Préliminaires et rappels structurants
1. Soit $(a, b) \in (\mathbb{Z} \setminus \{0\}) \times \mathbb{Z}$. Démontrer l'existence et l'unicité de la division euclidienne de $b$ par $a$.
2. Énoncer le Théorème de Bézout et définir le Plus Grand Commun Diviseur (PGCD) de deux entiers $a$ et $b$ à l'aide d'une propriété d'idéal.
3. Démontrer le Lemme de Gauss : si $a$ divise $bc$ et que $\text{pgcd}(a,b) = 1$, alors $a$ divise $c$.

### Partie II : Résolution d'une équation diophantienne linéaire
On considère l'équation $(E) : 17x + 23y = 1$, où $(x, y) \in \mathbb{Z}^2$.
4. Justifier l'existence de solutions pour $(E)$ en utilisant le théorème de Bézout.
5. À l'aide de l'algorithme d'Euclide étendu, déterminer une solution particulière $(x_0, y_0) \in \mathbb{Z}^2$ de $(E)$.
6. Déterminer l'ensemble de toutes les solutions de l'équation $(E)$.
7. *Analyse critique du modèle :* Si l'on remplace $\mathbb{Z}$ par l'anneau $\mathbb{Z}[X]$ ou par un anneau quelconque, le théorème de Bézout reste-t-il valide sous la même forme ? Discuter brièvement des limites de l'application aveugle de l'algorithme d'Euclide.

### Partie III : Généralisation et application aux congruences
8. Soit $(a, b, c) \in (\mathbb{Z}^*)^2 \times \mathbb{Z}$. On pose $d = \text{pgcd}(a, b)$. Montrer que l'équation $(E') : ax + by = c$ admet des solutions si et seulement si $d$ divise $c$.
9. Résoudre dans $\mathbb{Z}$ le système de congruences suivant :
   $$\begin{cases} x \equiv 3 \pmod{17} \\ x \equiv 7 \pmod{23} \end{cases}$$

---

## 3. Pistes et Indications

* **Q1-Q3 :** Pour le théorème de Bézout via les idéaux, penser au fait que l'idéal $a\mathbb{Z} + b\mathbb{Z}$ est principal. Pour Gauss, exploitez la combinaison linéaire issue de Bézout.
* **Q5 :** Remontez l'algorithme d'Euclide pour 23 et 17 : $23 = 1 \times 17 + 6$, puis $17 = 2 \times 6 + 5$, etc.
* **Q6 :** Méthode classique : si $(x,y)$ et $(x_0, y_0)$ sont solutions, étudiez la différence $17(x - x_0) = -23(y - y_0)$ et appliquez Gauss.
* **Q7 :** Pensez à la notion d'anneau euclidien versus anneau principal. Qu'en est-il de la division euclidienne dans $\mathbb{Z}[X]$ ? Dans $\mathbb{R}[X]$ ?
* **Q9 :** Exprimez $x$ à l'aide de la solution de l'équation $(E)$ traitée dans la Partie II.

---

## 4. Corrigé Détaillé

### Partie I : Préliminaires et rappels structurants
1. **Division euclidienne :** Soit $a \in \mathbb{Z}^*$ et $b \in \mathbb{Z}$. Considérons l'ensemble $A = \{ b - qa \mid q \in \mathbb{Z}, b - qa \ge 0 \}$. Par le principe du bon ordre dans $\mathbb{N}$ (ou propriété archimédienne de $\mathbb{Z}$), cet ensemble non vide admet un plus petit élément $r$. L'unicité se démontre classiquement par l'absurde en supposant deux restes distincts dont la différence, multiple de $a$, contredirait la stricte positivité de la différence des quotients.
2. **Bézout et Idéaux :** L'ensemble $I = a\mathbb{Z} + b\mathbb{Z}$ est un idéal de $\mathbb{Z}$. Comme tout idéal de $\mathbb{Z}$ est principal, il existe un unique entier $d \in \mathbb{N}$ tel que $I = d\mathbb{Z}$. Ce $d$ est par définition le $\text{pgcd}(a,b)$. Le théorème de Bézout affirme alors l'existence de $(u,v) \in \mathbb{Z}^2$ tel que $au + bv = d$.
3. **Lemme de Gauss :** Supposons $\text{pgcd}(a,b) = 1$ et $a \mid bc$. Par Bézout, il existe $u, v \in \mathbb{Z}$ tels que $au + bv = 1$. Multiplions cette relation par $c$ :
   $$acu + bcv = c$$
   Puisque $a$ divise manifestement le premier terme ($acu$) et qu'il divise $bc$ (donc $bc v$), $a$ divise leur somme, c'est-à-dire $c$. $\blacksquare$

### Partie II : Résolution d'une équation diophantienne linéaire
4. **Existence :** On calcule $\text{pgcd}(17, 23)$. Comme 17 et 23 sont des nombres premiers distincts, leur PGCD vaut 1. Puisque 1 divise 1, le théorème de Bézout garantit l'existence de solutions.
5. **Algorithme d'Euclide étendu :**
   - $23 = 1 \times 17 + 6 \implies 6 = 23 - 17$
   - $17 = 2 \times 6 + 5 \implies 5 = 17 - 2 \times 6 = 17 - 2(23 - 17) = 3 \times 17 - 2 \times 23$
   - $6 = 1 \times 5 + 1 \implies 1 = 6 - 5 = (23 - 17) - (3 \times 17 - 2 \times 23) = 3 \times 23 - 4 \times 17$.
   
   On obtient ainsi la solution particulière $(x_0, y_0) = (-4, 3)$ (car $17(-4) + 23(3) = -68 + 69 = 1$).
6. **Ensemble des solutions :** Soit $(x, y)$ une solution quelconque. On a :
   $$17x + 23y = 1 = 17(-4) + 23(3)$$
   $$17(x + 4) = 23(3 - y)$$
   17 divise le membre de gauche, donc 17 divise $23(3 - y)$. Comme $\text{pgcd}(17, 23) = 1$, le lemme de Gauss implique que 17 divise $3 - y$. Il existe donc $k \in \mathbb{Z}$ tel que $3 - y = 17k$, soit $y = 3 - 17k$.
   En reportant, $17(x + 4) = 23(17k) \implies x + 4 = 23k \implies x = -4 + 23k$.
   L'ensemble des solutions est donc $\mathcal{S} = \{ (-4 + 23k, 3 - 17k) \mid k \in \mathbb{Z} \}$.
7. **Analyse critique et limites du modèle :**
   * *Validité formelle :* Le théorème de Bézout et l'algorithme d'Euclide reposent fondamentalement sur la structure d'**anneau euclidien**. Si l'on se place dans un anneau intègre quelconque (par exemple $\mathbb{R}[X, Y]$ ou certains anneaux d'entiers algébriques comme $\mathbb{Z}[\sqrt{-5}]$), la division euclidienne au sens usuel n'existe plus. 
   * *Limites algorithmiques :* L'algorithme d'Euclide étendu est d'une efficacité redoutable en complexité temporelle ($\mathcal{O}(\log(\min(|a|, |b|)))$). Toutefois, pour des équations diophantiennes à *plus de deux variables* (ex: $ax + by + cz = d$) ou non linéaires (diophantiennes de degré $\ge 2$), cet outil linéaire s'avère inopérant. L'utilisation aveugle de Bézout échoue également dans les anneaux principaux non euclidiens (où l'existence d'un PGCD est garantie par la structure d'idéal principal, mais sans algorithme de division directe simple), ou pire, dans les anneaux qui ne sont même pas factoriels.

### Partie III : Généralisation et application aux congruences
8. **Condition nécessaire et suffisante pour $(E')$ :**
   Soit $d = \text{pgcd}(a, b)$. Si $(E')$ admet une solution $(x_1, y_1)$, alors $ax_1 + by_1 = c$. Comme $d$ divise $a$ et $d$ divise $b$, $d$ divise nécessairement toute combinaison linéaire de $a$ et $b$, donc $d$ divise $c$. 
   Réciproquement, si $d$ divise $c$, il existe $c' \in \mathbb{Z}$ tel que $c = dc'$. Par Bézout, il existe $(u_0, v_0)$ tel que $au_0 + bv_0 = d$. En multipliant par $c'$, on obtient $a(u_0 c') + b(v_0 c') = dc' = c$. Le couple $(u_0 c', v_0 c')$ est donc solution.
9. **Résolution du système de congruences :**
   Le système se traduit par :
   $\begin{cases} x = 17k + 3 \\ 17k + 3 \equiv 7 \pmod{23} \end{cases} \iff 17k \equiv 4 \pmod{23}$.
   On cherche à résoudre $17k - 23m = 4$. D'après la Partie II, on sait que $-4(17) + 3(23) = 1$. 
   En multipliant par 4, on a $-16(17) + 12(23) = 4$, soit une solution particulière $k_0 = -16$.
   Le terme général pour $k$ est donc $k = -16 + 23u$ ($u \in \mathbb{Z}$).
   En remboursant dans $x$ :
   $$x = 17(-16 + 23u) + 3 = -272 + 391u + 3 = 391u - 269 \equiv 122 \pmod{391}.$$
Conclusion: * L'ensemble des solutions est $122 + 391\mathbb{Z}$.