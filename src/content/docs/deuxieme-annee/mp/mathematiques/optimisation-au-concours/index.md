---
title: 'Optimisation au concours : Mathématiques MP/MP*'
description: 'Les questions incontournables aux concours, les erreurs à éviter et les rédactions modèles de jury.'
sidebar:
  badge:
    text: 'Méthode Concours'
    variant: 'caution'
---

## 🎯 Objectif du module & Exigences des Jurys

En tant que concepteur de sujets et président de jury de concours (Mines-Ponts, Centrale-Supélec, X-ENS), je constate chaque année les mêmes failles dans les copies des candidats de la filière MP. Une excellente note ne s'obtient pas seulement par le résultat, mais par la **rigueur absolue de la rédaction**, la maîtrise des hypothèses de théorèmes et la structuration logique.

Ce guide a pour but de vous former aux standards d'exigence des corrections. Chaque question type est décortiquée selon les attentes précises du barème officiel.

---

## 📌 Question Type 1 : Étude de la continuité et dérivation d'une intégrale à paramètre sur un intervalle quelconque

### 💡 Méthode canonique & Étapes de rédaction

Pour une fonction $F(x) = \int_I f(x, t) \text{d}t$ où $I$ n'est pas nécessairement un segment :
1. **Continuité (Théorème de continuité des intégrales à paramètre - Domination locale) :**
   - Pour tout $x \in A$, la fonction $t \mapsto f(x, t)$ est continue (ou mesurable/continue par morceaux) sur $I$.
   - Pour tout $t \in I$, la fonction $x \mapsto f(x, t)$ est continue sur $A$.
   - **Hypothèse de domination :** Il existe une fonction $\varphi : I \to \mathbb{R}_+$ intégrable sur $I$ (indépendante de $x$) telle que pour tout $x \in A$ et tout $t \in I$, $|f(x, t)| \le \varphi(t)$.
   - *Conclusion :* $F$ est continue sur $A$. (Pour un intervalle quelconque, penser à la domination sur tout compact).

2. **Dérivation (Théorème de Leibniz - Continuité + Domination de la dérivée) :**
   - $t \mapsto f(x, t)$ est intégrable sur $I$ pour tout $x$.
   - Pour tout $t \in I$, $x \mapsto f(x, t)$ est de classe $\mathcal{C}^1$ sur $A$.
   - La dérivée partielle $\frac{\partial f}{\partial x}$ est continue sur $A \times I$.
   - **Domination de la dérivée :** Il existe $\psi : I \to \mathbb{R}_+$ intégrable sur $I$ telle que pour tout $x \in A$ et tout $t \in I$, $\left|\frac{\partial f}{\partial x}(x, t)\right| \le \psi(t)$.
   - *Conclusion :* $F$ est de classe $\mathcal{C}^1$ sur $A$ et $F'(x) = \int_I \frac{\partial f}{\partial x}(x, t) \text{d}t$.

### 📋 Exemple de sujet & Rédaction modèle type Concours
Sujet: ** Soit $F(x) = \int_0^{+\infty} e^{-xt} \frac{\sin(t)}{t} \text{d}t$ pour $x > 0$. Montrer que $F$ est de classe $\mathcal{C}^1$ sur $]0, +\infty[$.

**Rédaction modèle type /20 :**
> Posons, pour $(x, t) \in ]0, +\infty[ \times ]0, +\infty[$, $f(x, t) = e^{-xt} \frac{\sin(t)}{t}$ (et $f(x, 0) = 1$ par prolongement par continuité).
> 1. **Intégrabilité :** Pour tout $x > 0$, la fonction $t \mapsto f(x, t)$ est continue et $\left|f(x, t)\right| \le e^{-xt}$ au voisinage de $+\infty$ (car $|\sin(t)| \le 1$ et $\frac{1}{t}$ est borné ou par négligeabilité). De plus, $t \mapsto e^{-xt}$ est intégrable sur $]0, +\infty[$ puisque $x > 0$. Ainsi, $F(x)$ est bien définie pour tout $x > 0$.
> 2. **Dérivabilité par rapport à $x$ :** Pour tout $t \in [0, +\infty[$, la fonction $x \mapsto f(x, t)$ est de classe $\mathcal{C}^1$ sur $]0, +\infty[$ et $\frac{\partial f}{\partial x}(x, t) = -e^{-xt} \sin(t)$.
> 3. **Continuité de la dérivée partielle :** La fonction $(x, t) \mapsto \frac{\partial f}{\partial x}(x, t)$ est continue sur $]0, +\infty[ \times [0, +\infty[$.
> 4. **Domination locale :** Soit $[a, b]$ un intervalle compact inclus dans $]0, +\infty[$ (avec $a > 0$). Pour tout $x \in [a, b]$ et tout $t \ge 0$ :
>    $$\left|\frac{\partial f}{\partial x}(x, t)\right| = e^{-xt}|\sin(t)| \le e^{-at}$$
>    La fonction $\psi : t \mapsto e^{-at}$ est indépendante de $x$, continue par morceaux et intégrable sur $[0, +\infty[$ car $a > 0$.
> 
> Par le théorème de dérivation des intégrales à paramètre (version domination locale), $F$ est de classe $\mathcal{C}^1$ sur tout compact de $]0, +\infty[$, donc sur $]0, +\infty[$, et pour tout $x > 0$ :
> $$F'(x) = \int_0^{+\infty} -e^{-xt} \sin(t) \text{d}t$$

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- Oublier de préciser que la domination doit valoir *pour tout* $x$ de l'intervalle considéré.
- Appliquer un théorème global sur un intervalle ouvert sans passer par les compacts (domination locale).
- Ne pas vérifier l'intégrabilité de la fonction de base avant de chercher à dériver.

---

## 📌 Question Type 2 : Diagonalisation orthogonale d'une matrice symétrique réelle et étude de forme quadratique

### 💡 Méthode canonique & Étapes de rédaction

1. **Nature de la matrice :** Soit $A \in \mathcal{M}_n(\mathbb{R})$ telle que $A = ^tA$. D'après le théorème spectral, $A$ est diagonalisable dans une base orthonormée (BON) de $\mathbb{R}^n$.
2. **Recherche des valeurs propres :** Calculer le polynôme caractéristique $\chi_A(\lambda) = \det(\lambda I_n - A)$, factoriser et déterminer les sous-espaces propres $E_\lambda(A)$.
3. **Orthogonalnalisation (si dimensions $> 1$) :** Appliquer le procédé d'orthonormalisation de Gram-Schmidt sur chaque base de sous-espace propre si nécessaire, ou utiliser le fait que les sous-espaces propres d'une matrice symétrique sont *naturellement* orthogonaux entre eux pour des valeurs propres distinctes.
4. **Forme quadratique :** Si $q(X) = ^tXAX$, la réduction s'écrit $q(X) = \sum_{i=1}^n \lambda_i Y_i^2$ dans la BON de diagonalisation, où $Y = P^{-1}X = ^tPX$ (avec $P$ orthogonale, donc $^tPP = I_n$).

### 📋 Exemple de sujet & Rédaction modèle type Concours
Sujet: ** Soit $A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$. Diagonaliser $A$ dans une base orthonormée et donner l'expression de la forme quadratique associée dans cette base.

**Rédaction modèle type /20 :**
> La matrice $A$ est symétrique réelle ($A = ^tA$). D'après le théorème spectral, $A$ est diagonalisable dans une base orthonormée de $\mathbb{R}^3$.
> 1. **Polynôme caractéristique :** 
>    $$\chi_A(\lambda) = \det(\lambda I_3 - A) = (\lambda - 1)^2 (\lambda - 4)$$
>    Les valeurs propres de $A$ sont $\lambda_1 = 1$ (de multiplicité $2$) et $\lambda_2 = 4$ (simple).
> 2. **Sous-espaces propres :**
>    - Pour $\lambda_2 = 4$ : $E_4(A) = \ker(4I_3 - A)$. En résolvant le système, on trouve un vecteur générateur unitaire :
>      $$e_1 = \frac{1}{\sqrt{3}}\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$$
>    - Pour $\lambda_1 = 1$ : $E_1(A) = \ker(I_3 - A)$, qui est le plan d'équation $x + y + z = 0$.
>      On choisit une base de ce plan, par exemple $u_1 = (1, -1, 0)$ et $u_2 = (1, 0, -1)$, qui ne sont pas orthogonaux. Appliquons Gram-Schmidt :
>      $v_1 = u_1 = (1, -1, 0)$.
>      $v_2 = u_2 - \frac{\langle u_2, v_1 \rangle}{\|v_1\|^2}v_1 = (1, 0, -1) - \frac{1}{2}(1, -1, 0) = \left(\frac{1}{2}, \frac{1}{2}, -1\right)$.
>      En normalisant $v_1$ et $v_2$, on obtient :
>      $$e_2 = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}, \quad e_3 = \frac{1}{\sqrt{6}}\begin{pmatrix} 1 \\ 1 \\ -2 \end{pmatrix}$$
> 3. **Conclusion spectrale :** La famille $\mathcal{B} = (e_1, e_2, e_3)$ forme une base orthonormée de $\mathbb{R}^3$ constituée de vecteurs propres de $A$. Si $P$ est la matrice de passage de la base canonique à $\mathcal{B}$, $P$ est orthogonale et $^tPAP = \text{diag}(4, 1, 1)$.
> 4. **Forme quadratique :** Dans les nouvelles coordonnées $Y = ^tPX = \begin{pmatrix} Y_1 \\ Y_2 \\ Y_3 \end{pmatrix}$, la forme quadratique s'écrit :
>    $$q(X) = ^tXAX = 4Y_1^2 + Y_2^2 + Y_3^2$$

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- Oublier de vérifier l'orthogonalité des vecteurs propres issus d'un même sous-espace propre multiple (le th. spectral garantit l'orthogonalité pour des VPs *distinctes*, mais pour un sous-espace de dimension $\ge 2$, il faut orthogonaliser explicitement).
- Ne pas préciser que la matrice de passage $P$ est orthogonale ($^tPP = I_n$), ce qui simplifie grandement les calculs d'inversion.

---

## 📌 Question Type 3 : Calcul du rayon de convergence et de la somme d'une série entière via équation différentielle

### 💡 Méthode canonique & Étapes de rédaction

1. **Rayon de convergence ($R$) :** Utiliser la règle de d'Alembert ($\frac{|a_{n+1}|}{|a_n|}$), le critère de Cauchy, ou comparer avec une série connue si le coefficient $a_n$ est complexe.
2. **Propriétés de la somme :** Notons $S(x) = \sum_{n=0}^{+\infty} a_n x^n$. Par le théorème de Abel, la somme est de classe $\mathcal{C}^\infty$ sur $]-R, R[$.
3. **Mise en équation :** Dériver terme à terme (ou multiplier par $x$, $x^2$, etc.) pour faire apparaître une relation de récurrence sur les coefficients $a_n$, ce qui se traduit par une équation différentielle linéaire vérifiée par $S(x)$ sur $]-R, R[$.
4. **Résolution de l'ED :** Résoudre l'ED sur $]-R, R[$ en tenant compte des conditions initiales (souvent $S(0) = a_0$ et $S'(0) = a_1$).

### 📋 Exemple de sujet & Rédaction modèle type Concours
Sujet: ** Déterminer le rayon de convergence et exprimer sous forme de fonction usuelle la somme de la série entière $\sum_{n=1}^{+\infty} \frac{x^n}{n(n+1)}$.

**Rédaction modèle type /20 :**
> 1. **Rayon de convergence :** Posons $a_n = \frac{1}{n(n+1)}$ pour $n \ge 1$.
>    $$\left|\frac{a_{n+1}}{a_n}\right| = \frac{n(n+1)}{(n+1)(n+2)} = \frac{n}{n+2} \xrightarrow[n \to +\infty]{} 1$$
>    D'après la règle de d'Alembert, le rayon de convergence de la série entière est $R = 1$.
> 2. **Régularité et manipulation de la somme :** Soit $S(x) = \sum_{n=1}^{+\infty} \frac{x^n}{n(n+1)}$ pour $x \in ]-1, 1[$. 
>    Pour tout $x \in ]-1, 1[\setminus\{0\}$, écrivons $S(x)$ en faisant apparaître une décomposition en éléments simples :
>    $$\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$$
>    Ainsi :
>    $$S(x) = \sum_{n=1}^{+\infty} \frac{x^n}{n} - \sum_{n=1}^{+\infty} \frac{x^n}{n+1}$$
>    *Alternative par équation différentielle (exigée si la décomposition directe n'est pas évidente) :*
>    Considérons $f(x) = x S(x) = \sum_{n=1}^{+\infty} \frac{x^{n+1}}{n(n+1)}$.
>    Dérivons deux fois sur $]-1, 1[$ :
>    $$f'(x) = \sum_{n=1}^{+\infty} \frac{x^n}{n} \implies f''(x) = \sum_{n=1}^{+\infty} x^{n-1} = \sum_{k=0}^{+\infty} x^k = \frac{1}{1-x}$$
> 3. **Résolution :** Par intégrations successives avec $f(0) = 0$ et $f'(0) = 0$ :
>    $$f'(x) = \int_0^x \frac{\text{d}t}{1-t} = -\ln(1-x)$$
>    $$f(x) = \int_0^x -\ln(1-t)\text{d}t = (1-x)\ln(1-x) + x$$
>    (en effectuant une intégration par parties).
> 4. **Expression finale :** Pour $x \in ]-1, 1[\setminus\{0\}$ :
>    $$S(x) = \frac{f(x)}{x} = \frac{(1-x)\ln(1-x)}{x} + 1$$
>    Et pour $x = 0$, $S(0) = 0$, ce qui prolonge continûment la formule (car $\frac{(1-x)\ln(1-x)}{x} \xrightarrow[x \to 0]{} 0$).

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- Oublier de traiter le cas $x = 0$ lors de la division par $x$ pour retrouver $S(x)$.
- Ne pas vérifier les conditions initiales ($S(0)$ et $S'(0)$) lors de la résolution de l'équation différentielle, ce qui conduit à une constante d'intégration erronée.
- Confondre le domaine d'étude de l'ED et le rayon de convergence.