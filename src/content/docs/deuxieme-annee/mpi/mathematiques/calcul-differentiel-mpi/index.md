---
title: 'Cours : Calcul différentiel dans les espaces vectoriels normés'
description: 'Synthese officielle du cours et demonstrations pour CPGE MPI.'
---

## 📌 1. Définitions & Cadre d'étude

Le cadre general est celui d'espaces vectoriels normés (EVN) sur le corps $\mathbb{K}$ ($\mathbb{R}$ ou $\mathbb{C}$), de dimensions finies ou infinies selon les besoins, bien que la plupart des théorèmes fondamentaux de ce chapitre nécessitent des espaces de Banach (complets) ou de dimension finie.

### 1. Dérivabilité et différentiabilité
Soient $E$ et $F$ deux $\mathbb{K}$-EVN, $\Omega$ un ouvert de $E$, $f : \Omega \to F$ une application, et $a \in \Omega$.

*   **Définition (Différentiabilité) :** 
    L'application $f$ est dite **différentiable en $a$** s'il existe une application linéaire continue $L \in \mathcal{L}(E, F)$ et une application $\varepsilon : \Omega \to F$ telles que pour tout $h \in E$ tel que $a+h \in \Omega$ :
    $$f(a+h) = f(a) + L(h) + \|h\_E \varepsilon(h)$$
    avec $\lim_{h \to 0} \varepsilon(h) = 0_F$.
    L'application linéaire $L$ est alors unique ; on la note $\text{d}f(a)$ ou $f'(a)$, appelée **différentiable de $f$ en $a$**.

*   **Lien avec la dérivée directionnelle :**
    Si $f$ est différentiable en $a$, alors pour tout vecteur $v \in E$, $f$ admet en $a$ une dérivée suivant $v$ notée $\partial_v f(a)$ ou $\text{d}_v f(a)$, définie par :
    $$\partial_v f(a) = \lim_{t \to 0} \frac{f(a+tv) - f(a)}{t} = \text{d}f(a)(v)$$

### 2. Dérivées partielles et gradient
*   **Dérivées partielles :** 
    Si $E = E_1 \times \dots \times E_p$ est un produit d'EVN, la $i$-ème dérivée partielle de $f$ en $a = (a_1, \dots, a_p)$ est la différentiable (si elle existe) de l'application partielle $x_i \mapsto f(a_1, \dots, x_i, \dots, a_p)$.
*   **Gradient :** 
    Dans le cas où $E$ est un espace préhilbertien réel muni d'un produit scalaire $\langle \cdot, \cdot \rangle$ et $F = \mathbb{R}$, le théorème de représentation de Riesz assure l'existence d'un unique vecteur $\nabla f(a) \in E$, appelé **gradient**, tel que pour tout $h \in E$ :
    $$\text{d}f(a)(h) = \langle \nabla f(a), h \rangle$$

### 3. Classes de régularité
*   On dit que $f$ est de **classe $\mathcal{C}^0(\Omega, F)$** si elle est continue.
*   On dit que $f$ est de **classe $\mathcal{C}^1(\Omega, F)$** si elle est différentiable sur $\Omega$ et si l'application $\text{d}f : \Omega \to \mathcal{L}(E, F)$ est continue.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 1. Théorème de Schwarz (Symétrie des dérivées secondes)
*   **Énoncé :** 
    Soit $\Omega$ un ouvert de $\mathbb{R}^2$ et $f : \Omega \to \mathbb{R}$ une application de classe $\mathcal{C}^2$. Alors pour tout $(x, y) \in \Omega$ :
    $$\frac{\partial^2 f}{\partial x \partial y}(x,y) = \frac{\partial^2 f}{\partial y \partial x}(x,y)$$

*   **Démonstration (Esquisse par double application du TAF) :**
    On introduit la quantité infinitésimale de second ordre pour $h, k \neq 0$ petits :
    $$\Delta(h, k) = f(x+h, y+k) - f(x+h, y) - f(x, y+k) + f(x,y)$$
    On définit $g(t) = f(x+t, y+k) - f(x+t, y)$. Par le théorème des accroissements finis (TAF) appliqué à $g$ sur $[0, h]$ :
    $$\Delta(h, k) = h \left( \frac{\partial f}{\partial x}(x+\theta_1 h, y+k) - \frac{\partial f}{\partial x}(x+\theta_1 h, y) \right)$$
    On applique à nouveau le TAF, cette fois par rapport à la seconde variable sur $[0, k]$ :
    $$\Delta(h, k) = hk \frac{\partial^2 f}{\partial y \partial x}(x+\theta_1 h, y+\theta_2 k)$$
    En procédant de même en inversant l'ordre des applications, on obtient $\Delta(h, k) = hk \frac{\partial^2 f}{\partial x \partial y}(x+\theta'_1 h, y+\theta'_2 k)$. Par continuité des dérivées secondes et passage à la limite lorsque $(h, k) \to (0, 0)$, on conclut à l'égalité. $\blacksquare$

### 2. Théorème des accroissements finis
*   **Énoncé :** 
    Soient $E, F$ deux $\mathbb{R}$-EVN, $a, b \in E$ avec $a \neq b$. Soit $f : [a, b] \to F$ une application continue sur le segment $[a, b]$, et différentiable sur l'ouvert ]$a, b$[. Alors :
    $$\|f(b) - f(a)\|_F \le \sup_{c \in ]a, b[} \|\text{d}f(c)\|_{\mathcal{L}(E,F)} \|b - a\|_E$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### 1. Algorithme de calcul de la différentiable
Pour montrer qu'une application $f : \Omega \subset E \to F$ est différentiable en $a$ et calculer sa différentiable :
1.  **Candidat (via les dérivées partielles) :** Si $E = \mathbb{R}^n$, on calcule les dérivées partielles $\frac{\partial f}{\partial x_i}(a)$ pour tout $i \in \{1, \dots, n\}$.
2.  **Linéarité candidate :** On forme l'application linéaire $L : h = (h_1, \dots, h_n) \mapsto \sum_{i=1}^n h_i \frac{\partial f}{\partial x_i}(a)$.
3.  **Vérification par la limite :** On étudie la quantité $\frac{\|f(a+h) - f(a) - L(h)\|_F}{\|h\|_E}$ lorsque $h \to 0_E$.
4.  **Conclusion par $\mathcal{C}^1$ :** En pratique, on montre souvent que $f$ est de classe $\mathcal{C}^1$ sur $\Omega$ en vérifiant la continuité des dérivées partielles, ce qui implique la différentiabilité.

### 2. Matrice Jacobienne (en dimension finie)
Si $E = \mathbb{R}^n$ et $F = \mathbb{R}^p$, la différentiable $\text{d}f(a)$ est représentée dans les bases canoniques par la **matrice jacobienne** $J_f(a) \in \mathcal{M}_{p,n}(\mathbb{R})$ :
$$J_f(a) = \begin{pmatrix} 
\frac{\partial f_1}{\partial x_1}(a) & \dots & \frac{\partial f_1}{\partial x_n}(a) \\ 
\vdots & & \vdots \\ 
\frac{\partial f_p}{\partial x_1}(a) & \dots & \frac{\partial f_p}{\partial x_n}(a) 
\end{pmatrix}$$

### 3. Règle de chaine (Chain Rule)
Soient $U \subset E$, $V \subset F$ des ouverts, $f : U \to V$ et $g : V \to G$ deux applications. Si $f$ est différentiable en $a \in U$ et $g$ est différentiable en $f(a) \in V$, alors l'application composée $g \circ f$ est différentiable en $a$ et :
$$\text{d}(g \circ f)(a) = \text{d}g(f(a)) \circ \text{d}f(a)$$

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Confondre existence des dérivées partielles et différentiabilité :**
    Une application peut admettre des dérivées partielles en un point sans y être continue, et donc *a fortiori* sans y être différentiable. 
    *Exemple classique :* $f(x, y) = \frac{xy}{x^2+y^2}$ si $(x,y) \neq (0,0)$ et $f(0,0)=0$. Ses dérivées partielles existent en $(0,0)$, mais $f$ n'y est même pas continue.

2.  **Oublier la complétude (Banach) dans les théorèmes d'inversion :**
    Le théorème d'inversion locale et le théorème des fonctions implicites exigent que les espaces vectoriels normés sous-jacents soient complets (de Banach) lorsque l'on travaille en dimension infinie. En dimension finie, cette propriété est automatique.

3.  **Mauvaise manipulation de la norme d'opérateurs :**
    Pour appliquer le théorème des accroissements finis ou le théorème de point fixe de Picard, il est impératif de majorer correctement la norme subordonnée de la différentiable :
    $$\|\text{d}f(x)\|_{\mathcal{L}(E,F)} = \sup_{\|h\|_E \le 1} \|\text{d}f(x)(h)\|_F$$
    Ne pas confondre avec la simple norme euclidienne des coefficients de la matrice jacobienne.