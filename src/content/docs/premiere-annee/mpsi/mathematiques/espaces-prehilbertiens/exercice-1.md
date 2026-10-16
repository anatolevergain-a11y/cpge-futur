---
title: 'Exercice 1 : Produit scalaire et Cauchy-Schwarz'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Autour de l'inégalité de Cauchy-Schwarz et applications approchées

Ce problème propose d'étudier l'inégalité de Cauchy-Schwarz dans un cadre fonctionnel et de l'appliquer à un problème d'estimation numérique. On s'intéressera particulièrement aux limites d'approximation dans un modèle discret face à un modèle continu.

---

## Énoncé

Soit $E = \mathcal{C}([0, 1], \mathbb{R})$ l'espace vectoriel des fonctions continues de $[0, 1]$ dans $\mathbb{R}$. 
Pour tout $(f, g) \in E^2$, on pose :
$$\langle f, g \rangle = \int_0^1 f(t)g(t) \, dt$$

1. Montrer que $\langle \cdot, \cdot \rangle$ définit un produit scalaire sur $E$. On note $\| \cdot \}$ la norme associée.
2. Rappeler l'inégalité de Cauchy-Schwarz pour ce produit scalaire, ainsi que la condition nécessaire et suffisante d'égalité.
3. On considère la fonction $f_0 : t \mapsto e^t$. Calculer $\|f_0\|^2$.
4. Pour estimer numériquement cette norme, on approche l'intégrale par une méthode des rectangles à gauche avec un pas $h = \frac{1}{n}$ ($n \in \mathbb{N}^*$). On introduit l'espace euclidien $\mathbb{R}^n$ muni du produit scalaire usuel $\langle X, Y \rangle_{\mathbb{R}^n} = \sum_{k=1}^n x_k y_k$.
   Établir le lien entre $\langle f_0, f_0 \rangle$ et un produit scalaire discret sur $\mathbb{R}^n$.
5. Discuter des limites de ce modèle discret et de l'impact de l'erreur d'approximation lorsque $n$ est grand, en lien avec la structure topologique de $E$.

---

## Pistes et indications

* **Q1 :** Vérifier les trois axioms d'un produit scalaire : bilinéarité, symétrie et positivité (en n'oubliant pas de justifier la non-dégénérescence pour une fonction continue).
* **Q2 :** Cours standard sur les espaces préhilbertiens réels.
* **Q3 :** Calcul exact d'une intégrale exponentielle simple.
* **Q4 :** Écrire la somme de Riemann associée à l'intégrale et l'interpréter comme le produit scalaire de deux vecteurs de $\mathbb{R}^n$.
* **Q5 :** Penser à la convergence de la méthode des rectangles et à la nature de l'espace $E$ (dimension infinie vs $\mathbb{R}^n$ de dimension finie).

---

## Corrigé pas à pas

### Question 1 : Structure préhilbertienne de $E$
Montrons que $\langle \cdot, \cdot \rangle$ est un produit scalaire sur $E$ :
* **Symétrie :** Pour tout $(f, g) \in E^2$, par commutativité du produit dans $\mathbb{R}$ :
  $$\langle f, g \rangle = \int_0^1 f(t)g(t) \, dt = \int_0^1 g(t)f(t) \, dt = \langle g, f \rangle$$
* **Bilinératité :** Par linéarité de l'intégrale, l'application $(f, g) \mapsto \langle f, g \rangle$ est linéaire par rapport à chaque variable.
* **Positivité et caractère défini :** Soit $f \in E$. Par positivité de la fonction intégrée, $\langle f, f \rangle = \int_0^1 (f(t))^2 \, dt \ge 0$.
  De plus, si $\langle f, f \rangle = 0$, comme la fonction $t \mapsto (f(t))^2$ est continue et positive sur $[0, 1]$, son intégrale est nulle si et seulement si elle est identiquement nulle sur $[0, 1]$. Ainsi, pour tout $t \in [0, 1]$, $(f(t))^2 = 0$, soit $f(t) = 0$. Donc $f = 0_E$.

L'application $\langle \cdot, \cdot \rangle$ est donc un **produit scalaire** sur $E$.

### Question 2 : Inégalité de Cauchy-Schwarz
Pour tout $(f, g) \in E^2$ :
$$|\langle f, g \rangle| \le \|f\| \|g\|$$
L'égalité a lieu si et seulement si $f$ et $g$ sont **colinéaires**.

### Question 3 : Calcul de la norme de $f_0$
Pour $f_0(t) = e^t$ :
$$\|f_0\|^2 = \int_0^1 (e^t)^2 \, dt = \int_0^1 e^{2t} \, dt = \left[ \frac{1}{2}e^{2t} \right]_0^1 = \frac{e^2 - 1}{2}$$
Application numérique (ordre de grandeur) : $\frac{e^2 - 1}{2} \approx \frac{7,389 - 1}{2} \approx 3,195$.

### Question 4 : Approximation discrète
Considérons la subdivision régulière de pas $h = \frac{1}{n}$ avec $t_k = \frac{k-1}{n}$ pour $k \in \{1, \dots, n\}$.
L'intégrale définissant le produit scalaire peut être approchée par la méthode des rectangles à gauche :
$$\langle f_0, f_0 \rangle = \int_0^1 e^{2t} \, dt \approx \frac{1}{n} \sum_{k=1}^n e^{2t_k}$$
Si l'on définit les vecteurs $X_n = \left( e^{t_1}, e^{t_2}, \dots, e^{t_n} \right)$ et $Y_n = X_n$ dans $\mathbb{R}^n$, alors l'approximation s'écrit :
$$\langle f_0, f_0 \rangle \approx \frac{1}{n} \langle X_n, X_n \rangle_{\mathbb{R}^n}$$

### Question 5 : Analyse critique et limites du modèle
* **Analyse d'ordre de grandeur et limites :** L'erreur commise par la méthode des rectangles pour une fonction de classe $\mathcal{C}^1$ est en $O(1/n)$. Pour obtenir une précision à $10^{-4}$ près, le modèle discret nécessite $n \sim 10^4$, ce qui engendre des coûts de calcul en $O(n)$ mais surtout pose des questions de stabilité numérique (accumulation d'erreurs d'arrondi en machine pour les grands $n$).
* **Limite structurelle (Dimension infinie) :** Le passage de $E$ (espace fonctionnel de dimension infinie) à $\mathbb{R}^n$ (espace de dimension finie $n$) illustre la discretisation d'un opérateur continu. La norme $\|\cdot\|_2$ sur $\mathbb{R}^n$ n'est pas directement la norme de $E$ : il y a un facteur correctif $\frac{1}{\sqrt{n}}$ (lié à la mesure de Lebesgue du pas) qui doit être manié avec rigueur pour éviter des divergences d'estimations lors de l'application de Cauchy-Schwarz en dimension finie vers la dimension infinie.