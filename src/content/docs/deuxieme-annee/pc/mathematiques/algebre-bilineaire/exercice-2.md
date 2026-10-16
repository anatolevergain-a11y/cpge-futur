---
title: 'Exercice 2 : Endomorphismes symétriques'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Propriétés spectrales et perturbation des endomorphismes symétriques

**Filière :** PC  
**Matière :** Mathématiques  
Chapitre: ** Algèbre bilinéaire et quadratique  
**Thème :** Endomorphismes symétriques, théorème spectral et analyse critique des modèles de perturbation.

---

## 1. Énoncé

Soit $E$ un espace vectoriel euclidien de dimension finie $n \ge 1$, muni d'un produit scalaire noté $\langle \cdot, \cdot \rangle$ et de la norme associée $\|\cdot\|$. On note $\mathcal{S}(E)$ l'espace vectoriel des endomorphismes symétriques de $E$. 

L'objectif de ce problème est d'étudier certaines propriétés de maximisation des valeurs propres (principe du min-max de Courant-Fischer) et d'analyser le comportement de ces valeurs propres sous l'effet d'une perturbation, ouvrant ainsi une discussion critique sur la robustesse des modèles numériques en dimension finie.

---

## 2. Questions

### Partie I : Préliminaires et Diagonalisation
1. Soit $u \in \mathcal{S}(E)$. Rappeler brièvement pourquoi $u$ est diagonalisable dans une base orthonormée de $E$.
2. On ordonne les valeurs propres de $u$ par ordre croissant : $\lambda_1(u) \le \lambda_2(u) \le \dots \le \lambda_n(u)$. 
   Établir que pour tout $x \in E$ tel que $\|x\| = 1$, on a :
   $$\lambda_1(u) \le \langle u(x), x \rangle \le \lambda_n(u)$$

### Partie II : Caractérisation variationnelle (Principe de Courant-Fischer)
3. Soit $u \in \mathcal{S}(E)$. Pour tout sous-espace vectoriel $F$ de $E$, on note $\dim(F)$ sa dimension. Démontrer que la plus petite valeur propre $\lambda_1(u)$ vériie :
   $$\lambda_1(u) = \min_{x \in E, \|x\|=1} \langle u(x), x \rangle$$
4. Plus généralement, montrer que la $k$-ième valeur propre $\lambda_k(u)$ ($1 \le k \le n$) vérifie :
   $$\lambda_k(u) = \min_{\substack{F \subset E \\ \dim(F) = k}} \max_{x \in F, \|x\|=1} \langle u(x), x \rangle$$

### Partie III : Application aux perturbations
5. Soient $u, v \in \mathcal{S}(E)$. On pose $w = u + v$. En utilisant le résultat de la question 4, établir l'inégalité de Weyl :
   $$\forall k \in \{1, \dots, n\}, \quad \lambda_k(u) + \lambda_1(v) \le \lambda_k(u+v) \le \lambda_k(u) + \lambda_n(v)$$
6. En déduire que pour toute norme subordonnée ou la norme spectrale, l'application $u \in \mathcal{S}(E) \mapsto \lambda_k(u)$ est lipschitzienne.

---

## 3. Pistes et Indications

* **Partie I :** Pensez au théorème spectral. Pour l'encadrement, exprimez le vecteur $x$ dans une base orthonormée de diagonalisation de $u$.
* **Partie II :** Pour la question 4, raisonnez par l'absurde ou utilisez des dimensions d'espaces vectoriels (théorème du rang / intersection de sous-espaces).
* **Partie III :** Pour l'inégalité de Weyl, écrivez $\langle (u+v)(x), x \rangle = \langle u(x), x \rangle + \langle v(x), x \rangle$ et utilisez les bornes de $\langle v(x), x \rangle$.

---

## 4. Corrigé Détaillé

### Partie I : Préliminaires et Diagonalisation
1. D'après le **théorème spectral**, tout endomorphisme symétrique d'un espace euclidien est orthogonalement diagonalisable. Il existe donc une base orthonormée $(e_1, \dots, e_n)$ de $E$ constituée de vecteurs propres de $u$.
2. Soit $x \in E$ tel que $\|x\| = 1$. Dans la base orthonormée $(e_1, \dots, e_n)$ associée aux valeurs propres $\lambda_1 \le \lambda_2 \le \dots \le \lambda_n$, on écrit $x = \sum_{i=1}^n x_i e_i$. On a alors $\|x\|^2 = \sum_{i=1}^n x_i^2 = 1$.
   $$ \langle u(x), x \rangle = \left\langle \sum_{i=1}^n \lambda_i x_i e_i, \sum_{j=1}^n x_j e_j \right\rangle = \sum_{i=1}^n \lambda_i x_i^2 $$
   Puisque $\lambda_1 \le \lambda_i \le \lambda_n$ pour tout $i$, on obtient :
   $$ \lambda_1 \sum_{i=1}^n x_i^2 \le \sum_{i=1}^n \lambda_i x_i^2 \le \lambda_n \sum_{i=1}^n x_i^2 $$
   Comme $\sum x_i^2 = 1$, il vient bien : $\lambda_1(u) \le \langle u(x), x \rangle \le \lambda_n(u)$.

### Partie II : Caractérisation variationnelle
3. Soit $m = \min_{\|x\|=1} \langle u(x), x \rangle$. En prenant $x = e_1$ (vecteur propre associé à $\lambda_1$), on a $\|e_1\| = 1$ et $\langle u(e_1), e_1 \rangle = \lambda_1$, donc $m \le \lambda_1(u)$. 
   Réciproquement, pour tout $x$ de norme 1, $\langle u(x), x \rangle \ge \lambda_1(u)$ (d'après la question précédente), donc $m \ge \lambda_1(u)$. Ainsi, $\lambda_1(u) = \min_{\|x\|=1} \langle u(x), x \rangle$.
4. Soit $F$ un sous-espace de dimension $k$. Soit $(e_1, \dots, e_n)$ une base orthonormée de diagonalisation associée à $(\lambda_1, \dots, \lambda_n)$. 
   Considérons l'espace $E_k = \operatorname{Vect}(e_1, \dots, e_k)$ de dimension $k$. Par la formule de Grassmann ou par dimension, $F \cap E_k^\perp$ n'est pas réduit à $\{0\}$ si $\dim(F) + \dim(E_k^\perp) > n$, ce qui équivaut à $k + (n-k+1) > n$ (attention aux indices, posons $E_{k-1}^\perp$ de dimension $n-k+1$). 
   Plus rigoureusement, $F$ intersecte non triplement l'espace engendré par $\{e_k, \dots, e_n\}$ de dimension $n-k+1$. Il existe donc unitaire $x \in F$ tel que $x = \sum_{i=k}^n x_i e_i$ avec $\sum x_i^2 = 1$. 
   Pour cet $x$, $\langle u(x), x \rangle = \sum_{i=k}^n \lambda_i x_i^2 \ge \lambda_k(u) \sum_{i=k}^n x_i^2 = \lambda_k(u)$. 
   Le maximum sur $F$ d'une telle quantité est donc $\ge \lambda_k(u)$, ce qui permet de conclure par minoration et par l'égalité atteinte en choisissant $F = \operatorname{Vect}(e_1, \dots, e_k)$.

### Partie III : Application aux perturbations
5. Soit $F$ un sous-espace de dimension $k$. Pour tout $x \in F$ de norme 1 :
   $$ \langle (u+v)(x), x \rangle = \langle u(x), x \rangle + \langle v(x), x \rangle \ge \max_{y \in F, \|y\|=1} \langle u(y), y \rangle + \lambda_1(v) $$
   En passant au minimum sur tous les sous-espaces $F$ de dimension $k$, on obtient par le principe de Courant-Fischer :
   $$ \lambda_k(u+v) \ge \lambda_k(u) + \lambda_1(v) $$
   En appliquant ce résultat à $u = (u+v) + (-v)$, on obtient symétriquement l'autre inégalité, d'où l'inégalité de Weyl :
   $$ \lambda_k(u) + \lambda_1(v) \le \lambda_k(u+v) \le \lambda_k(u) + \lambda_n(v) $$
6. Posons $\|v\|_\infty = \max(|\lambda_1(v)|, |\lambda_n(v)\|)$. L'inégalité de Weyl se réécrit :
   $$ - \|v\|_\infty \le \lambda_k(u+v) - \lambda_k(u) \le \|v\|_\infty $$
   Soit $|\lambda_k(u+v) - \lambda_k(u)| \le \|v\|_\infty$. Cela prouve que l'application $u \mapsto \lambda_k(u)$ est $1$-lipschitzienne pour la norme subordonnée associée (ou norme spectrale).

---

## 5. Analyse critique et limites du modèle

Si ce modèle mathématique garantit une excellente **stabilité théorique** des valeurs propres face à des perturbations infinitésimales (grâce au caractère lipschitzien établi à la question 6), son application numérique en dimension finie sur ordinateur (via des bibliothèques de calcul scientifique comme LAPACK ou NumPy) se heurte à plusieurs limites fondamentales :

1. **Ill-conditionnement et multiplicité :** 
   L'inégalité de Weyl garantit la continuité des valeurs propres, mais **pas celle des vecteurs propres**. Si une valeur propre présente une multiplicité supérieure à 1 (ou si deux valeurs propres sont extrêmement proches par rapport à la précision machine $\epsilon_{\text{mach}}$), le sous-espace propre associé peut pivoter brusquement sous l'effet d'une infime perturbation (bruit de mesure ou erreur d'arrondi). Le modèle linéaire ne reflète plus la réalité géométrique locale.
2. **Propagation des erreurs d'arrondi :** 
   Les algorithmes itératifs de diagonalisation (comme l'algorithme QR) effectuent un nombre fini d'opérations en virgule flottante. Les erreurs cumulées agissent comme une matrice de perturbation $v$ non négligeable. Si le conditionnement de la matrice $u$ (rapport $\lambda_n / \lambda_1$) est très grand, les petites valeurs propres sont entachées d'une incertitude relative inacceptable, invalidant les conclusions du modèle théorique parfait.
3. **Limite infinie :** 
   Transposer ce modèle discret à des opérateurs différentiels autoadjoints sur des espaces de Hilbert de dimension infinie (en physique quantique par exemple) révèle des pathologies : le spectre peut devenir continu, et le comportement des valeurs extrêmes sous perturbation cesse d'être uniformément contrôlé sans hypothèses de compacité additionnelles.