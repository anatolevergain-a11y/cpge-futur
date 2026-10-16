---
title: "Concours Centrale-Supélec 2024 - Mathématiques 2 (MP)"
description: "Sujet d'annale officiel du concours Centrale-Supélec intégralement corrigé avec barème pas à pas."
sidebar:
  badge:
    text: "Annale Concours"
    variant: "danger"
---

## 📄 Partie 1 : Énoncé Officiel du Sujet

### Préambule et Notations

Dans tout le problème, $\mathbb{R}$ désigne le corps des nombres réels. On note $\mathcal{M}_n(\mathbb{R})$ l'espace vectoriel des matrices carrées d'ordre $n$ à coefficients réels, et $\mathcal{S}_n(\mathbb{R})$ le sous-espace vectoriel des matrices symétriques réelles. 
Pour une matrice $A \in \mathcal{M}_n(\mathbb{R})$, on note $\|A\|_2 = \sqrt{\text{Tr}(A^T A)}$ sa norme euclidienne (dite norme de Frobenius).

---

### Partie I : Propriétés topologiques et spectrales dans $\mathcal{S}_n(\mathbb{R})$

On munit $\mathcal{M}_n(\mathbb{R})$ de la norme $\| \cdot \|_2$.

1. Soit $f : \mathcal{M}_n(\mathbb{R}) \to \mathcal{M}_n(\mathbb{R})$ l'application définie par $f(A) = A^2$. Montrer que $f$ est de classe $\mathcal{C}^1$ sur $\mathcal{M}_n(\mathbb{R})$ et calculer sa différentielle $df(A)$ pour toute matrice $A$.
2. Soit $S \in \mathcal{S}_n(\mathbb{R})$. Justifier qu'il existe une matrice orthogonale $P \in \mathcal{O}_n(\mathbb{R})$ et une matrice diagonale $D$ telles que $S = P D P^{-1}$.
3. Montrer que l'ensemble $\mathcal{S}_n^{++}(\mathbb{R})$ des matrices symétriques réelles définies positives est un ouvert de $\mathcal{S}_n(\mathbb{R})$.
4. Soit $A \in \mathcal{M}_n(\mathbb{R})$. Montrer que l'application $t \mapsto e^{tA}$ est dérivable sur $\mathbb{R}$ et expliciter sa dérivée.

---

### Partie II : Intégrales à paramètres et théorème de convergence dominée

Pour tout réel $x \in \mathbb{R}$, on considère la fonction $F$ définie par :
$$F(x) = \int_{0}^{+\infty} e^{-t^2} \cos(xt) \, dt$$

5. Justifier que $F$ est définie et continue sur $\mathbb{R}$.
6. Établir que $F$ est de classe $\mathcal{C}^1$ sur $\mathbb{R}$ en explicitant la dérivée sous le signe intégrale.
7. À l'aide d'une intégration par parties, trouver une équation différentielle vérifiée par $F$. En déduire l'expression explicite de $F(x)$ pour tout $x \in \mathbb{R}$.

---

### Partie III : Réduction simultanée et applications matricielles

Soit $A$ et $B$ deux matrices de $\mathcal{S}_n(\mathbb{R})$, avec $A$ symétrique définie positive.

8. Montrer qu'il existe une matrice inversible $P \in \mathcal{M}_n(\mathbb{R})$ telle que $P^T A P = I_n$ et $P^T B P$ soit une matrice diagonale.
9. Soit $M \in \mathcal{S}_n(\mathbb{R})$. On pose $\rho(M) = \max \{|\lambda| \mid \lambda \in \text{Sp}(M)\}$. Établir que si $\|M\|_2 < 1$, alors la matrice $I_n - M$ est inversible.

---

## 💡 Partie 2 : Indications du Concepteur & Pièges du Barème

- **Partie I, Question 1 :** Ne pas oublier de préciser que $f$ est une application bilinéaire (donc polynomiale), ce qui garantit immédiatement le caractère $\mathcal{C}^\infty$. La différentielle s'obtient via $f(A+H) - f(A) = AH + HA + H^2$.
- **Partie I, Question 3 :** Utiliser la caractérisation par les valeurs propres ou la continuité d'une application bien choisie (par exemple l'application déterminant ou la fonction mineurs principaux).
- **Partie II, Question 6 :** Le théorème de convergence dominée (TCD) requiert de dominer la dérivée partielle par une fonction intégrable indépendante de $x$. Penser à un majorant exponentiel ou constant sur tout compact.
- **Partie III, Question 8 :** C'est un classique de réduction simultanée. On commence par diagonaliser $A$ (ou utiliser sa racine carrée symétrique), puis on applique le théorème spectral à une matrice symétrique judicieusement construite.

---

## 📋 Partie 3 : Correction Rédigée Pas à Pas

### Partie I : Propriétés topologiques et spectrales dans $\mathcal{S}_n(\mathbb{R})$

1. **Différentiabilité de $f$ :**
   L'application $f : A \mapsto A^2$ est définie par des produits de coefficients polynômiaux, c'est donc une application polynomiale en les coefficients de la matrice. Elle est de classe $\mathcal{C}^\infty$ sur $\mathcal{M}_n(\mathbb{R})$.
   Pour tout $A, H \in \mathcal{M}_n(\mathbb{R})$ :
   $$f(A+H) = (A+H)(A+H) = A^2 + AH + HA + H^2$$
   On pose $\phi(H) = AH + HA$. L'application $\phi$ est linéaire par rapport à $H$. De plus :
   $$\frac{\|f(A+H) - f(A) - \phi(H)\|_2}{\|H\|_2} = \frac{\|H^2\|_2}{\|H\|_2} \leq \|H\|_2 \xrightarrow[H \to 0]{} 0$$
   Par conséquent, $f$ est différentiable en tout point $A$ et :
   $$\forall H \in \mathcal{M}_n(\mathbb{R}), \quad d f(A)(H) = AH + HA$$
   *(Barème : 1,5 pt)*

2. **Diagonalisation orthogonale :**
   D'après le théorème spectral, toute matrice symétrique réelle $S \in \mathcal{S}_n(\mathbb{R})$ est diagonalisable dans une base orthonormée de $\mathbb{R}^n$. Il existe donc une matrice orthogonale $P \in \mathcal{O}_n(\mathbb{R})$ (c'est-à-dire $P^{-1} = P^T$) et une matrice diagonale $D$ telles que $S = P D P^{-1}$.
   *(Barème : 1 pt)*

3. **Ouverture de $\mathcal{S}_n^{++}(\mathbb{R})$ :**
   Soit $\Phi : \mathcal{S}_n(\mathbb{R}) \to \mathbb{R}$ l'application qui à une matrice associait ses valeurs propres, ou plus simplement, considérons l'application continue qui associe à $S$ la plus petite de ses valeurs propres $\lambda_{\min}(S)$. 
   L'application $S \mapsto \lambda_{\min}(S)$ est continue sur $\mathcal{S}_n(\mathbb{R})$ (parLipschitzianité des racines d'un polynôme par rapport à ses coefficients).
   L'ensemble $\mathcal{S}_n^{++}(\mathbb{R})$ est l'image réciproque de l'intervalle ouvert $]0, +\infty[$ par cette application continue, c'est donc un **ouvert**.
   *(Barème : 1,5 pt)*

4. **Dérivabilité de $t \mapsto e^{tA}$ :**
   La fonction exponentielle matricielle est définie par la série entière :
   $$\forall t \in \mathbb{R}, \quad e^{tA} = \sum_{k=0}^{+\infty} \frac{t^k A^k}{k!}$$
   Cette série de fonctions admet un rayon de convergence infini et peut être terme à terme dérivée sur $\mathbb{R}$. Ainsi :
   $$\frac{d}{dt} \left( e^{tA} \right) = \sum_{k=1}^{+\infty} \frac{k t^{k-1} A^k}{k!} = A \sum_{k=1}^{+\infty} \frac{t^{k-1} A^{k-1}}{(k-1)!} = A e^{tA} = e^{tA} A$$
   *(Barème : 1,5 pt)*

---

### Partie II : Intégrales à paramètres et théorème de convergence dominée

5. **Continuité de $F$ :**
   Soit $g(x, t) = e^{-t^2} \cos(xt)$ définie sur $\mathbb{R} \times [0, +\infty[$.
   - Pour tout $t \in [0, +\infty[$, l'application $x \mapsto g(x, t)$ est continue sur $\mathbb{R}$.
   - Pour tout $x \in \mathbb{R}$, l'application $t \mapsto g(x, t)$ est continue (donc mesurable) sur $[0, +\infty[$.
   - **Domination :** Pour tous $x \in \mathbb{R}$ et $t \in [0, +\infty[$ :
     $$|g(x, t)| \le e^{-t^2}$$
     La fonction $h(t) = e^{-t^2}$ est intégrable sur $[0, +\infty[$ (intégrale de Gauss convergente).
   Par le théorème de continuité des intégrales à paramètres, $F$ est **continue sur $\mathbb{R}$**.
   *(Barème : 1,5 pt)*

6. **Dérivabilité et calcul de la dérivée :**
   - La fonction $g$ admet une dérivée partielle par rapport à $x$ :
     $$\frac{\partial g}{\partial x}(x, t) = -t e^{-t^2} \sin(xt)$$
   - Pour tout $t \in [0, +\infty[$, $x \mapsto \frac{\partial g}{\partial x}(x, t)$ est continue.
   - Pour tout $x \in \mathbb{R}$, $t \mapsto \frac{\partial g}{\partial x}(x, t)$ est continue sur $[0, +\infty[$.
   - **Domination :** Pour tous $x \in \mathbb{R}$ et $t \in [0, +\infty[$ :
     $$\left| \frac{\partial g}{\partial x}(x, t) \right| \le t e^{-t^2}$$
     La fonction $t \mapsto t e^{-t^2}$ est continue et intégrable sur $[0, +\infty[$ (car $t e^{-t^2} = -\frac{1}{2} (-2t e^{-t^2})$ se primitive en $- \frac{1}{2} e^{-t^2}$).
   Par le théorème de dérivation des intégrales à paramètres, $F$ est de classe $\mathcal{C}^1$ sur $\mathbb{R}$ et :
   $$F'(x) = \int_{0}^{+\infty} -t e^{-t^2} \sin(xt) \, dt$$
   *(Barème : 2 pts)*

7. **Équation différentielle et résolution :**
   Effectuons une intégration par parties sur l'expression de $F'(x)$ en posant :
   $u(t) = \sin(xt) \implies u'(t) = x \cos(xt)$
   $v'(t) = -t e^{-t^2} \implies v(t) = \frac{1}{2} e^{-t^2}$
   Puisque $\left[ \frac{1}{2} e^{-t^2} \sin(xt) \right]_0^{^{+\infty}} = 0 - 0 = 0$, il vient :
   $$F'(x) = \left[ \frac{1}{2} e^{-t^2} \sin(xt) \right]_{0}^{+\infty} - \int_{0}^{+\infty} \frac{1}{2} e^{-t^2} x \cos(xt) \, dt$$
   $$F'(x) = -\frac{x}{2} \int_{0}^{+\infty} e^{-t^2} \cos(xt) \, dt = -\frac{x}{2} F(x)$$
   On obtient l'équation différentielle linéaire d'ordre 1 :
   $$F'(x) + \frac{x}{2} F(x) = 0$$
   La solution générale est de la forme :
   $$F(x) = K e^{-\frac{x^2}{4}}, \quad K \in \mathbb{R}$$
   Pour $x = 0$, on calcule la valeur initiale :
   $$F(0) = \int_{0}^{+\infty} e^{-t^2} dt = \frac{\sqrt{\pi}}{2}$$
   Ainsi, $K = \frac{\sqrt{\pi}}{2}$, d'où :
   $$\forall x \in \mathbb{R}, \quad F(x) = \frac{\sqrt{\pi}}{2} e^{-\frac{x^2}{4}}$$
   *(Barème : 3 pts)*

---

### Partie III : Réduction simultanée et applications matricielles

8. **Réduction simultanée :**
   Puisque $A \in \mathcal{S}_n^{++}(\mathbb{R})$, il existe une matrice orthogonale $Q$ et une matrice diagonale constituée des valeurs propres strictements positives de $A$ telles que $A = Q \Delta Q^T$. On peut définir la matrice racine carrée symétrique $A^{1/2} = Q \Delta^{1/2} Q^T$, qui est inversible.
   Considérons la matrice symétrique $C = A^{-1/2} B A^{-1/2}$. D'après le théorème spectral, il existe une matrice orthogonale $R$ telle que $R^T C R = D'$, où $D'$ est diagonale.
   En posant $P = A^{-1/2} R$, on vérifie immédiatement :
   $$P^T A P = R^T A^{-1/2} A A^{-1/2} R = R^T I_n R = I_n$$
   Et :
   $$P^T B P = R^T A^{-1/2} B A^{-1/2} R = R^T C R = D' \quad (\text{diagonale})$$
   *(Barème : 4 pts)*

9. **Inversibilité de $I_n - M$ :**
   Supposons $\|M\|_2 < 1$. Soit $\lambda$ une valeur propre de $M$ et $X$ un vecteur propre associé (non nul). On a $MX = \lambda X$, donc $\|MX\|_2 = |\lambda| \|X\|_2$.
   Par compatibilité de la norme subordonnée (ou de Frobenius, sachant que $\rho(M) \leq \|M\|_2$ dans le cas symétrique), on a $|\lambda| \leq \|M\|_2 < 1$.
   Supposons par l'absurde que $I_n - M$ ne soit pas inversible. Alors $1$ est valeur propre de $M$, ce qui implique $|\lambda| = 1$, ce qui contredit $|\lambda| \leq \|M\|_2 < 1$.
   Par conséquent, **la matrice $I_n - M$ est inversible**.
   *(Barème : 3 pts)*