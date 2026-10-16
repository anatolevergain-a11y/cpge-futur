---
title: 'Exercice 1 : Espaces euclidiens'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ : Étude d'un endomorphisme remarquable et minimisation vectorielle

---

## ⚠️ Avertissement de l'examinateur (Filière PC)

Ce problème aborde des notions fondamentales du programme de mathématiques de seconde année en filière PC : la géométrie euclidienne, le théorème spectral (réduction des endomorphismes symétriques), ainsi que des techniques de minimisation. 

Ce type de sujet est extrêmement classique à l'écrit (CCINP, Mines-Ponts, Centrale-Supélec). L'examinateur portera une attention particulière à :
1. **La rigueur des justifications** (notamment l'utilisation correcte des hypothèses de symétrie et de positivité).
2. **La clarté de la rédaction** dans le passage de l'algèbre linéaire à l'analyse (calculs de normes et de distances).
3. **L'esprit critique** en fin de problème sur la nature des extrema trouvés.

---

## Énoncé

Soit $E$ un espace vectoriel euclidien de dimension $n \ge 1$, muni du produit scalaire $\langle \cdot, \cdot \rangle$ et de la norme associée $\|\cdot\|$. 
On considère un endomorphisme $u$ de $E$ qui est **symétrique** et **positif**, c'est-à-dire :
1. $\forall (x, y) \in E^2, \quad \langle u(x), y \rangle = \langle x, u(y) \rangle$ (symétrie)
2. $\forall x \in E, \quad \langle u(x), x \rangle \ge 0$ (positivité)

On introduit l'application $\Phi$ définie sur $E \times E$ par :
$$\forall (x, y) \in E^2, \quad \varphi(x, y) = \langle u(x), y \rangle$$

---

## Partie I : Propriétés fondamentales de $\varphi$ et diagonalisation

### Question 1
Montrer que l'application $\varphi$ définie par $\varphi(x, y) = \langle u(x), y \rangle$ est un produit scalaire sur $E$ si et seulement si $u$ est **défini** positif, c'est-à-dire si :
$$\forall x \in E \setminus \{0_E\}, \quad \langle u(x), x \rangle > 0$$
Indication: Repasser par la définition des quatre axiomes d'un produit scalaire, en exploitant la symétrie et la positivité de $u$.*

---

### Question 2
À l'aide du théorème spectral, justifier qu'il existe une base orthonormée $(e_1, e_2, \dots, e_n)$ de $E$ constituée de vecteurs propres de $u$. On note $(\lambda_1, \lambda_2, \dots, \lambda_n)$ les valeurs propres associées, rangées dans l'ordre croissant :
$$0 \le \lambda_1 \le \lambda_2 \le \dots \le \lambda_n$$
Que peut-on dire du signe des $\lambda_i$ ?

---

## Partie II : Inégalités spectrales et extremums

On se place désormais dans le cas où $u$ est strictement positif (i.e., $\lambda_1 > 0$). 

### Question 3
Établir pour tout vecteur $x$ de $E$ de norme 1 ($\|x\| = 1$) les inégalités encadrant le terme $\langle u(x), x \rangle$ à l'aide des valeurs extrémales $\lambda_1$ et $\lambda_n$.

---

### Question 4
On considère la fonction $f : E \setminus \{0_E\} \to \mathbb{R}$ définie par :
$$f(x) = \frac{\langle u(x), x \rangle}{\|x\|^2}$$
Déterminer les bornes inf et sup de $f$ sur $E \setminus \{0_E\}$. Ces bornes sont-elles atteintes ?

---
---

# CORRIGÉ PAS À PAS

## Partie I : Propriétés fondamentales de $\varphi$ et diagonalisation

### Correction de la Question 1

*Analyse de l'examinateur : Il s'agit de vérifier si $\varphi$ définit une nouvelle structure préhilbertienne (voire euclidienne) sur $E$. Il faut tester les 4 propriétés d'un produit scalaire.*

Soit $\varphi(x, y) = \langle u(x), y \rangle$. Vérifions les axiomes :
1. **Symétrie :** Par symétrie de l'endomorphisme $u$ et du produit scalaire initial :
   $$\varphi(y, x) = \langle u(y), x \rangle = \langle x, u(y) \rangle = \langle u(x), y \rangle = \varphi(x, y)$$
   La forme est bien symétrique.
2. **Bilinéarité :** Par linéarité de $u$ et bilinéarité du produit scalaire initial :
   $$\varphi(\alpha x_1 + x_2, y) = \langle u(\alpha x_1 + x_2), y \rangle = \langle \alpha u(x_1) + u(x_2), y \rangle = \alpha \langle u(x_1), y \rangle + \langle u(x_2), y \rangle$$
   $$\varphi(\alpha x_1 + x_2, y) = \alpha \varphi(x_1, y) + \varphi(x_2, y)$$
   Par symétrie, elle est aussi linéaire à droite. $\varphi$ est donc bilinéaire.
3. **Positivité :** Par hypothèse, $u$ est positif, donc $\forall x \in E, \ \varphi(x, x) = \langle u(x), x \rangle \ge 0$.
4. **Caractère défini :** Supposons $\varphi(x, x) = 0$, c'est-à-dire $\langle u(x), x \rangle = 0$. 
   Si $u$ est supposé *défini* positif, alors nécessairement $x = 0_E$. 

Réciproquement, si $\varphi$ est un produit scalaire, il est défini, donc $\varphi(x,x) = 0 \implies x = 0_E$, ce qui implique la définition stricte.

---

### Correction de la Question 2

*Analyse de l'examinateur : Application directe et immédiate du cours. Ne pas oublier de mentionner le théorème spectral.*

Puisque $u$ est un endomorphisme **symétrique** de l'espace euclidien $(E, \langle \cdot, \cdot \rangle)$, le **théorème spectral** garantit l'existence d'une base orthonormée $\mathcal{B} = (e_1, e_2, \dots, e_n)$ de $E$ constituée de vecteurs propres de $u$.

Soit $\lambda_i$ la valeur propre associée au vecteur $e_i$ ($u(e_i) = \lambda_i e_i$). 
Puisque $u$ est positif, on a :
$$\forall i \in \{1, \dots, n\}, \quad \langle u(e_i), e_i \rangle = \langle \lambda_i e_i, e_i \rangle = \lambda_i \|e_i\|^2 = \lambda_i \ge 0$$
Les valeurs propres de $u$ sont donc toutes des **nombres réels positifs ou nuls**.

---

## Partie II : Inégalités spectrales et extremums

### Correction de la Question 3

Soit $x \in E$ tel que $\|x\| = 1$. 
Puisque $(e_1, \dots, e_n)$ est une base orthonormée de $E$, on peut décomposer $x$ dans cette base :
$$x = \sum_{i=1}^{n} x_i e_i$$
La condition $\|x\| = 1$ se réécrit, par isométrie de la base (Pythagore), sous la forme :
$$\sum_{i=1}^{n} x_i^2 = 1$$

Calculons alors $\langle u(x), x \rangle$ :
$$\langle u(x), x \rangle = \left\langle u\left(\sum_{i=1}^n x_i e_i\right), \sum_{j=1}^n x_j e_j \right\rangle = \left\langle \sum_{i=1}^n x_i \lambda_i e_i, \sum_{j=1}^n x_j e_j \right\rangle$$
Par bilinéarité et orthogonalité de la base $(e_i)$ :
$$\langle u(x), x \rangle = \sum_{i=1}^n \lambda_i x_i^2 \langle e_i, e_i \rangle = \sum_{i=1}^n \lambda_i x_i^2$$

Puisque $\lambda_1 \le \lambda_i \le \lambda_n$ pour tout $i$, on majore et minore ainsi :
$$\lambda_1 \sum_{i=1}^n x_i^2 \le \sum_{i=1}^n \lambda_i x_i^2 \le \lambda_n \sum_{i=1}^n x_i^2$$

Comme $\sum x_i^2 = 1$, on obtient l'encadrement fondamental :
$$\lambda_1 \le \langle u(x), x \rangle \le \lambda_n$$

---

### Correction de la Question 4

Soit $x \in E \setminus \{0_E\}$. Posons $y = \frac{x}{\|x\|}$, de sorte que $\|y\| = 1$. 
Par homogénéité, on a :
$$f(x) = \frac{\langle u(\|x\|y), \|x\|y \rangle}{\|x\|^2} = \frac{\|x\|^2 \langle u(y), y \rangle}{\|x\|^2} = \langle u(y), y \rangle$$

D'après la question 3, lorsque $y$ parcourt la sphère unité, $\langle u(y), y \rangle$ prend ses valeurs dans l'intervalle $[\lambda_1, \lambda_n]$. 

* **Borne inférieure :** $\inf_{x \neq 0} f(x) = \lambda_1$. Elle est atteinte pour $x = e_1$ (car $f(e_1) = \langle u(e_1), e_1 \rangle = \lambda_1$).
* **Borne supérieure :** $\sup_{x \neq 0} f(x) = \lambda_n$. Elle est atteinte pour $x = e_n$ (car $f(e_n) = \langle u(e_n), e_n \rangle = \lambda_n$).

---

## 💡 Analyse critique et bilan de l'examinateur

1. **Ce qu'il fallait retenir :** Le quotient de Rayleigh $f(x)$ est un outil puissant en physique-mathématique (mécanique des milieux continus, vibrations propres). Ses extrema sont atteints exactement sur les sous-espaces propres associés aux valeurs propres extrémales.
2. **Piège classique évité :** Ne pas oublier de diviser par $\|x\|^2$ pour ramener l'étude à la sphère unité. Le passage par la base orthonormée propre est l'unique voie efficace ici.