---
title: 'Cours : Calcul différentiel et intégrales multiples'
description: 'Synthèse officielle du cours et démonstrations pour CPGE PT.'
---

# Fiche de Cours : Calcul Différentiel et Intégrales Multiples
**Filière :** Mathématiques, Deuxième année CPGE PT  
Statut: ** Professeur agrégé, examinateur en CPGE

---

## 📌 1. Définitions & Cadre d'étude

### A. Calcul différentiel dans $\mathbb{R}^n$
Soit $E = \mathbb{R}^n$ muni d'une norme $\| \cdot \|$ et $U$ un ouvert de $\mathbb{R}^n$. Soit $f : U \to \mathbb{R}^m$.

* **Différentiabilité en un point :** 
  L'application $f$ est dite différentiable en $a \in U$ s'il existe une application linéaire continue (donc matricielle) $L \in \mathcal{L}(\mathbb{R}^n, \mathbb{R}^m)$ telle que, lorsque $h \to 0$ dans $\mathbb{R}^n$ avec $a+h \in U$ :
  $$f(a+h) = f(a) + L(h) + o(\|h\|)$$
  Si elle existe, cette application linéaire est unique et est notée $df(a)$ ou $déf(a)$.

* **Matrice Jacobienne :**
  Dans les bases canoniques, l'application linéaire $df(a)$ est représentée par sa matrice jacobienne $J_f(a) \in \mathcal{M}_{m,n}(\mathbb{R})$, dont les coefficients sont les dérivées partielles :
  $$(J_f(a))_{i,j} = \frac{\partial f_i}{\partial x_j}(a)$$

* **Classe $C^1$ :**
  $f$ est de classe $C^1$ sur $U$ si ses dérivées partielles $\frac{\partial f_i}{\partial x_j}$ existent et sont continues sur $U$. Toute application de classe $C^1$ est différentiable.

### B. Intégrales multiples (Intégrales sur des pavés et des compacts de $\mathbb{R}^n$)
* **Pavé compact :** Un pavé de $\mathbb{R}^n$ est un produit cartésien $I = [a_1, b_1] \times \dots \times [a_n, b_n]$.
* **Fonctions intégrables :** Une fonction bornée sur un pavé $I$ (ou un domaine quarrable/mesurable) est dite Riemann-intégrable si son intégrale inférieure coïncide avec son intégrale supérieure. Les fonctions continues par morceaux sur un compact sont intégrables.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### A. Théorème de Schwarz (Symétrie des dérivées secondes)
**Énoncé :** Soit $f : U \to \mathbb{R}$ de classe $C^2$ sur l'ouvert $U \subset \mathbb{R}^n$. Pour tout $a \in U$ et pour tout $(i, j) \in \{1, \dots, n\}^2$ :
$$\frac{\partial^2 f}{\partial x_i \partial x_j}(a) = \frac{\partial^2 f}{\partial x_j \partial x_i}(a)$$

**Démonstration (Cas $n=2$ en $a=(0,0)$) :**
On introduit la quantité modulée pour $\delta$ et $\varepsilon$ petits :
$$\Delta(h, k) = f(h, k) - f(h, 0) - f(0, k) + f(0, 0)$$
On applique le théorème des accroissements finis (TAF) à la fonction $g_h(y) = f(h, y) - f(0, y)$ sur $[0, k]$ :
$$\Delta(h, k) = k \left( \frac{\partial f}{\partial y}(h, \theta_1 k) - \frac{\partial f}{\partial y}(0, \theta_1 k) \right)$$
En appliquant à nouveau le TAF par rapport à la première variable (grâce au caractère $C^2$) :
$$\Delta(h, k) = h k \frac{\partial^2 f}{\partial x \partial y}(\theta_2 h, \theta_1 k)$$
En procédant de manière symétrique en inversant l'ordre des applications des TAF, on obtient :
$$\Delta(h, k) = h k \frac{\partial^2 f}{\partial y \ \partial x}(\theta'_2 h, \theta'_1 k)$$
Par continuité des dérivées secondes en $(0,0)$ et passage à la limite lorsque $(h,k) \to (0,0)$, on conclut l'égalité des dérivées croisées. $\blacksquare$

### B. Théorème de Fubini (sur un pavé)
Si $f : [a, b] \times [c, d] \to \mathbb{R}$ est continue (ou intégrable), alors :
$$\iint_{[a,b] \times [c,d]} f(x, y) \, dx \, dy = \int_a^b \left( \int_c^d f(x, y) \, dy \right) dx = \int_c^d \left( \int_a^b f(x, y) \, dx \right) dy$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### A. Calcul d'une différentielle et composition
1. **Règle de chaine (Chain Rule) :** Si $f : U \subset \mathbb{R}^n \to V \subset \mathbb{R}^m$ est de classe $C^1$ en $a$ et $g : V \to \mathbb{R}^p$ est de classe $C^1$ en $f(a)$, alors $g \circ f$ est de classe $C^1$ en $a$ et :
   $$d(g \circ f)(a) = dg(f(a)) \circ df(a)$$
   En termes matriciels (produit de matrices) :
   $$J_{g \circ f}(a) = J_g(f(a)) \times J_f(a)$$

### B. Changement de variables dans les intégrales multiples
Soit $\Phi : U \to V$ un $C^1$-difféomorphisme entre deux ouverts de $\mathbb{R}^n$. Si $f$ est intégrable sur $V$ :
$$\int_V f(x) \, dx = \int_U f(\Phi(u)) |\det J_\Phi(u)| \, du$$

* **Cas particulier du polaire en dimension 2 :** 
  $\begin{cases} x = r \cos(\theta) \\ y = r \sin(\theta) \end{cases}$, avec le Jacobien $|J| = r$.
  $$\iint_D f(x,y) \, dx \, dy = \iint_{\Delta} f(r\cos\theta, r\sin\theta) r \, dr \, d\theta$$

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oubli du Jacobien :** Lors d'un changement de variable (polaires, cylindriques, sphériques), l'oubli de la valeur absolue du déterminant jacobien (notamment le $r$ en polaires ou $r^2 \sin(\theta)$ en sphériques) est éliminatoire.
2. **Interversion abusive de limites ou d'intégrales :** Ne jamais appliquer Fubini ou dériver sous le signe intégrale sans vérifier les hypothèses de continuité et de domination (Théorème de convergence dominée ou hypothèses $C^1$ du théorème de Leibniz).
3. **Confusion entre différentielle et gradient :** Le gradient $\nabla f(a)$ est un vecteur de $\mathbb{R}^n$, tandis que la différentielle $df(a)$ est une forme linéaire (élément de $\mathcal{L}(\mathbb{R}^n, \mathbb{R})$). Dans une base orthonormée, la matrice de $df(a)$ est la transposée de la ligne du gradient (selon la convention de transposition choisie, attention aux exigences du rapport de jury PT).
4. **Domaines non réguliers :** Pour Fubini, s'assurer que le domaine d'intégration n'est pas seulement décrit par des inéquations, mais qu'il est de classe $C^1$ par morceaux (ou réglé/quarrable).