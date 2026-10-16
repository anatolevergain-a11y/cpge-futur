---
title: 'Exercice 2 : Orthogonalisation de Gram-Schmidt'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude de l'algorithme de Gram-Schmidt et applications en analyse numérique

**Filière :** MPSI  
**Matière :** Mathématiques  
Chapitre: ** Espaces préhilbertiens réels  
**Thème :** Orthogonalisation de Gram-Schmidt, conditionnement et limites numériques  

---

## 1. Énoncé du problème

L'objectif de ce problème est d'étudier l'algorithme d'orthogonalisation de Gram-Schmidt dans l'espace préhilbertien réel $E = \mathbb{R}[X]$ muni du produit scalaire $P | Q = \int_{a}^{b} P(t)Q(t)w(t)\,dt$, puis d'analyser la stabilité numérique de cet algorithme face aux erreurs d'arrondi sur un ordinateur.

Dans toute la suite, on se place sur l'intervalle $[-1, 1]$ avec le poids $w(t) = 1$, ce qui définit le produit scalaire usuel :
$$(P | Q) = \int_{-1}^{1} P(t)Q(t)\,dt$$
On note $\|P\| = \sqrt{(P | P)}$ la norme associée.

---

## 2. Questions

### Partie I : Théorie et mise en place de l'algorithme

1. Rappeler la définition d'une famille orthonormée dans un espace préhilbertien réel.
2. Soit $(e_1, e_2, \dots, e_n)$ une famille libre d'un espace préhilbertien $E$. Énoncer le principe de construction de la famille orthogonale $(u_1, u_2, \dots, u_n)$ par le procédé de Gram-Schmidt, en posant $u_1 = e_1$ puis pour $k \ge 2$, 
   $$u_k = e_k - \sum_{i=1}^{k-1} \frac{(e_k | u_i)}{(u_i | u_i)} u_i$$
3. Appliquer cet algorithme à la famille $(1, X, X^2)$ dans $\mathbb{R}[X]$ muni du produit scalaire défini ci-dessus sur $[-1, 1]$. On normalisera ensuite la famille obtenue (les polynômes normalisés ainsi obtenus sont les trois premiers polynômes de Legendre).

### Partie II : Analyse numérique et limites du modèle

On s'intéresse maintenant à l'implémentation informatique de cet algorithme. Les calculs en virgule flottante sur machine introduisent une incertitude (précision machine notée $\varepsilon_{\text{mach}} \approx 10^{-16}$ en double précision).

4. **Ordre de grandeur et conditionnement :**
   Appliquons l'algorithme de Gram-Schmidt standard à la base canonique de $\mathbb{R}_n[X]$ : $(e_0, e_1, \dots, e_n) = (1, X, X^2, \dots, X^n)$ sur $[-1, 1]$.
   Calculer explicitement $(e_i | e_j)$ pour $i, j \in \{0, 1, 2\}$. Que remarque-t-on pour la matrice de Gram de la famille lorsque $n$ grandit (par exemple $n = 20$) ?
5. **Analyse critique des limites du modèle :**
   En raison des erreurs d'arrondi, les vecteurs successifs calculés par la machine perdent l'orthogonalité stricte (c'est-à-dire que $(u_i | u_j)$ n'est plus exactement nul pour $i \neq j$, mais de l'ordre de $\kappa \cdot \varepsilon_{\text{mach}}$, où $\kappa$ dépend fortement du conditionnement de la matrice initiale).
   Expliquer qualitativement pourquoi l'application de Gram-Schmidt classique (*modified* or *classical*) à des bases de type monôme ($X^k$) est dite "numériquement instable" pour des degrés $n > 15$ sur des architectures standard. Quelle alternative (comme l'orthogonalisation de Householder ou Gram-Schmidt modifié) préconise-t-on en pratique dans les logiciels de calcul scientifique (type NumPy/SciPy) ?

---

## 3. Pistes et indications

* **Q3 :** Pensez à calculer les intégrales $\int_{-1}^{1} t^k \, dt$ selon la parité de $k$.
* **Q4 :** La matrice de Gram est la matrice de Hilbert dans le cas des monômes. Sa condition (le nombre de conditionnement $\text{cond}(H_n)$) croît de manière exponentielle avec $n$.
* **Q5 :** Sondez l'impact de la perte d'orthogonalité sur la réinjection dans la somme de Gram-Schmidt : une petite erreur sur $u_1$ s'amplifie aux étapes ultérieures.

---

## 4. Corrigé pas à pas

### Partie I

**1.** Une famille $(u_1, \dots, u_n)$ est dite orthonormée si pour tout $(i, j) \in \{1, \dots, n\}^2$, on a $(u_i | u_j) = \delta_{ij}$ (le produit scalaire vaut $1$ si $i=j$ et $0$ si $i \neq j$).

**2.** Le procédé de Gram-Schmidt consiste à soustraire à chaque nouveau vecteur $e_k$ sa projection orthogonale sur le sous-espace vectoriel engendré par les vecteurs déjà orthogonalisés $(u_1, \dots, u_{k-1})$.

**3.** Appliquons l'algorithme sur $(e_1, e_2, e_3) = (1, X, X^2)$ :
* **Étape 1 :** $u_1 = e_1 = 1$.  
  Norme au carré : $\|u_1\|^2 = \int_{-1}^{1} 1^2 \, dt = [t]_{-1}^{1} = 2$.
* **Étape 2 :** $e_2 = X$.  
  Calcul du produit scalaire : $(e_2 | u_1) = \int_{-1}^{1} t \times 1 \, dt = 0$ (fonction impaire sur un intervalle symétrique).  
  Donc $u_2 = X - \frac{0}{2} u_1 = X$.  
  Norme au carré : $\|u_2\|^2 = \int_{-1}^{1} t^2 \, dt = \left[\frac{t^3}{3}\right]_{-1}^{1} = \frac{2}{3}$.
* **Étape 3 :** $e_3 = X^2$.  
  * $(e_3 | u_1) = \int_{-1}^{1} t^2 \times 1 \, dt = \frac{2}{3}$.  
  * $(e_3 | u_2) = \int_{-1}^{1} t^2 \times t \, dt = 0$ (fonction impaire).  
  
  On obtient :  
  $$u_3 = X^2 - \frac{2/3}{2}(1) - 0 = X^2 - \frac{1}{3}$$  
  Norme au carré : $\|u_3\|^2 = \int_{-1}^{1} \left(X^2 - \frac{1}{3}\right)^2 dt = \int_{-1}^{1} \left(X^4 - \frac{2}{3}X^2 + \frac{1}{9}\right) dt = \left[\frac{X^5}{5} - \frac{2}{9}X^3 + \frac{1}{9}X\right]_{-1}^{1} = 2 \left(\frac{1}{5} - \frac{2}{9} + \frac{1}{9}\right) = 2 \left(\frac{9 - 10 + 5}{45}\right) = \frac{8}{45}$$

En normalisant par les normes $\sqrt{(u_i | u_i)}$, on trouve les trois premiers polynômes de Legendre :
* $P_0(X) = \frac{1}{\sqrt{2}}$
* $P_1(X) = \sqrt{\frac{3}{2}} X$
* $P_2(X) = \sqrt{\frac{45}{8}} \left(X^2 - \frac{1}{3}\right) = \frac{3\sqrt{5}}{2\sqrt{2}} \left(X^2 - \frac{1}{3}\right)$

---

### Partie II

**4.** Le terme général de la matrice de Gram $G$ est $G_{ij} = (e_i | e_j) = \int_{-1}^{1} t^{i+j} \, dt$.
* Si $i+j$ est impair, $G_{ij} = 0$.
* Si $i+j = 2k$ est pair, $G_{ij} = \frac{2}{2k+1}$.

Pour $n = 2$, la matrice des produits scalaires (matrice de Hilbert tronquée) est :
$$G = \begin{pmatrix} 2 & 0 & \frac{2}{3} \\ 0 & \frac{2}{3} & 0 \\ \frac{2}{3} & 0 & \frac{2}{5} \end{pmatrix}$$

Lorsque $n$ grandit ($n = 20$), les coefficients de la matrice de Hilbert tendent rapidement vers $0$ car $\frac{2}{2k+1} \to 0$ lorsque $k$ augmente, mais surtout, les vecteurs de la base canonique $(1, X, \dots, X^n)$ deviennent "presque" colinéaires du point de vue de la précision machine. Le nombre de conditionnement $\text{cond}(G) = \|G\| \|G^{-1}\|$} explose exponentiellement ($\text{cond}(H_{20}) \approx 1.5 \times 10^{18}$).

**5. Analyse critique des limites du modèle :**
* **Instabilité numérique :** En arithmétique flottante, chaque soustraction de projections accumule des erreurs d'arrondi ($\varepsilon_{\text{mach}} \approx 10^{-16}$). Comme la base des monômes est extrêmement mal conditionnée, ces erreurs infimes se propagent et détruisent l'orthogonalité théorique : les vecteurs calculés $\tilde{u}_k$ ne sont plus du tout orthogonaux entre eux en fin de calcul.
* **Alternative pratique :** Pour pallier ce problème critique en calcul scientifique, on évite d'utiliser la base des monômes pour l'orthogonalisation, ou l'on utilise des variantes stables de l'algorithme, telles que **Gram-Schmidt Modifié (MGS)** qui réactualise les projetés à chaque étape pour minimiser l'amplification des erreurs, ou l'utilisation de transformations unitaires (Householder, Givens) qui préservent la norme euclidienne et garantissent une stabilité numérique robuste.