---
title: 'Exercice 2 : Trigonalisation et lemme des noyaux'
description: 'Problème d entraînement type concours pour MP.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans de nombreux problèmes de modélisation continue en dynamique des populations ou en automatique (systèmes régis par des équations différentielles linéaires $X'(t) = A X(t)$), la matrice $A$ du système n'est pas nécessairement diagonalisable. Lorsque les valeurs propres sont multiples et que l'espace propre associé à une telle valeur propre est de dimension inférieure à sa multiplicité, la diagonalisation échoue. 

Pour résoudre explicitement le système et analyser la stabilité à long terme, on recourt alors à la **trigonalisation** (mise sous forme de Jordan ou décomposition de Dunford). 

Le présent problème propose d'étudier une méthode constructive de trigonalisation d'un endomorphisme par l'utilisation conjointe du polynôme minimal, du théorème de Cayley-Hamilton et du lemme des noyaux, appliquée à une matrice d'ingénierie représentant un réseau de couplage énergétique à trois noeuds.

Soit $E$ un $\mathbb{C}$-espace vectoriel de dimension $n$ ($n \ge 1$) et $u \in \mathcal{L}(E)$. On note $\chi_u$ le polynôme caractéristique de $u$ et $\pi_u$ son polynôme minimal.

---

### ❓ Questions progressives

#### Partie I : Préliminaires et Lemme des noyaux

1. Rappeler l'énoncé du lemme des noyaux pour une famille finie de polynômes premiers entre eux par pairs.
2. Soit $P \in \mathbb{C}[X]$ un polynôme annulateur de $u$. Montrer que toute valeur propre de $u$ est racine de $P$.
3. En déduire que le spectre $\text{Sp}(u)$ est l'ensemble des racines de $\pi_u$.

#### Partie II : Trigonalisation par blocs et récurrence

On suppose désormais que le polynôme caractéristique $\chi_u$ est scindé sur $\mathbb{C}$, ce qui s'écrit :
$$\chi_u(X) = (-1)^n \prod_{i=1}^k (X - \lambda_i)^{\alpha_i}$$
où les $\lambda_1, \dots, \lambda_k$ sont les valeurs propres distinctes de $u$, et $\alpha_1, \dots, \alpha_k$ leurs multiplicités respectives.

4. Justifier l'existence d'une décomposition en somme directe de $E$ sous la forme :
$$E = \bigoplus_{i=1}^k E_i$$
où $E_i = \ker((u - \lambda_i \text{id}_E)^{\alpha_i})$. Préciser le lien entre les sous-espaces $E_i$ et le lemme des noyaux.
5. Soit $i \in \{1, \dots, k\}$. Montrer que le sous-espace $E_i$ est stable par $u$. On note $u_i$ l'endomorphisme induit par $u$ sur $E_i$.
6. Quel est le polynôme caractéristique de l'endomorphisme $u_i - \lambda_i \text{id}_{E_i}$ ? En déduire que $\lambda_i$ est la seule valeur propre de $u_i$.

#### Partie III : Application numérique et analyse critique d'un modèle d'ingénierie

On considère la matrice $A$ d'ordre $3$ à coefficients réels, modélisant un réseau d'échange thermique couplé :
$$A = \begin{pmatrix} 2 & 1 & 1 \\ -1 & 0 & -1 \\ 0 & 0 & 1 \end{pmatrix}$$

7. Calculer le polynôme caractéristique $\chi_A$ de $A$ et déterminer ses valeurs propres ainsi que leurs multiplicités.
8. La matrice $A$ est-elle diagonalisable ? Justifier rigoureusement.
9. Déterminer les sous-espaces caractéristiques associés à chaque valeur propre de $A$ en appliquant la méthode de la Partie II.
10. Exhiber une matrice inversible $P$ et une matrice triangulaire supérieure $T$ telles que $A = P T P^{-1}$.
11. **Analyse critique du modèle :** 
    En considérant le système différentiel linéaire $X'(t) = A X(t)$ où $X(t) = \begin{pmatrix} x_1(t) \\ x_2(t) \\ x_3(t) \end{pmatrix}$ représente l'évolution des températures de trois zones couplées en $\text{°C}$, explicitez l'impact de la non-diagonalisabilité (termes séculaires en $t e^{\lambda t}$) sur la stabilité asymptotique du système. Discutez des limites physiques de ce modèle linéaire idéal pour des temps $t \to +\infty$.

---

### 💡 Pistes & Indications

- **Q1 & Q4 :** Pensez à utiliser une récurrence sur le nombre de polynômes pour le lemme des noyaux. Les projecteurs spectraux en découlent naturellement.
- **Q7 & Q8 :** Calculez $\chi_A(\lambda) = \det(A - \lambda I_3)$. Regardez la dimension des espaces propres par rapport aux multiplicités des racines.
- **Q10 :** Pour trigonaliser, on cherche une base adaptée à la décomposition $E = \ker(A - I_3) \oplus \ker((A - I_3)^2)$ ou similaire, en complétant une base d'un sous-espace vectoriel.
- **Q11 :** L'exponentielle d'une matrice trigonalisée $e^{tA} = P e^{tT} P^{-1}$ fait apparaître des polynômes en $t$ multipliés par des exponentielles. Interpréter physiquement l'explosion ou l'amortissement.

---

### 📋 Corrigé détaillé et analyse des résultats

#### Partie I : Préliminaires et Lemme des noyaux

1. **Lemme des noyaux :** Soit $P_1, \dots, P_k$ des polynômes de $\mathbb{C}[X]$ premiers entre eux par pairs, et soit $P = \prod_{i=1}^k P_i$. Si $u \in \mathcal{L}(E)$ est annulé par $P$, alors :
$$\ker(P(u)) = \bigoplus_{i=1}^k \ker(P_i(u))$$
2. Soit $\lambda \in \text{Sp}(u)$ et $x \in E \setminus \{0\}$ tel que $u(x) = \lambda x$. 
Puisque $P(u) = 0$, on a $P(u)(x) = 0$. Or, par récurrence immédiate, $P(u)(x) = P(\lambda)x$. 
Comme $x \neq 0$, il vient $P(\lambda) = 0$. Toute valeur propre est donc racine de tout polynôme annulateur.
3. Le polynôme minimal $\pi_u$ est le polynôme unitaire annulateur de degré minimal. Ses racines sont exactement les valeurs propres de $u$ (car $\text{Sp}(u)$ est non vide sur $\mathbb{C}$ et tout polynôme annulateur s'annule sur le spectre).

#### Partie II : Trigonalisation par blocs et récurrence

4. D'après le théorème de Cayley-Hamilton, $\chi_u$ est un polynôme annulateur de $u$. Comme $\chi_u$ est scindé, il s'écrit sous la forme $\chi_u(X) = (-1)^n \prod_{i=1}^k (X - \lambda_i)^{\alpha_i}$. 
Les polynômes $(X - \lambda_i)^{\alpha_i}$ sont premiers entre eux par pairs. Par le lemme des noyaux appliqué à $\chi_u(u) = 0$, on obtient directement :
$$E = \bigoplus_{i=1}^k \ker\left((u - \lambda_i \text{id}_E)^{\alpha_i}\right) = \bigoplus_{i=1}^k E_i$$
5. Soit $x \in E_i$. On veut montrer que $u(x) \in E_i$, c'est-à-dire $(u - \lambda_i \text{id}_E)^{\alpha_i}(u(x)) = 0$. 
Puisque les endomorphismes $u$ and $u - \lambda_i \text{id}_E$ commutent, on a :
$$(u - \lambda_i \text{id}_E)^{\alpha_i}(u(x)) = u \left( (u - \lambda_i \text{id}_E)^{\alpha_i}(x) \right) = u(0) = 0$$
Le sous-espace $E_i$ est donc stable par $u$.
6. L'endomorphisme induit $u_i$ a pour polynôme minimal sur $E_i$ un diviseur de $(X - \lambda_i)^{\alpha_i}$. Par conséquent, le polynôme caractéristique de $u_i$ est de la forme $(X - \lambda_i)^{\dim(E_i)}$, ce qui montre que $\lambda_i$ est l'unique valeur propre de $u_i$.

#### Partie III : Application numérique et analyse critique

7. Calculons le polynôme caractéristique de $A$ :
$$\chi_A(\lambda) = \det(A - \lambda I_3) = \begin{vmatrix} 2-\lambda & 1 & 1 \\ -1 & -\lambda & -1 \\ 0 & 0 & 1-\ula \end{vmatrix}$$
En développant par rapport à la dernière ligne :
$$\chi_A(\lambda) = (1-\lambda) \begin{vmatrix} 2-\lambda & 1 \\ -1 & -\lambda \end{vmatrix} = (1-\lambda) \left( -\lambda(2-\lambda) + 1 \right) = (1-\lambda)(\lambda^2 - 2\lambda + 1) = -(1-\lambda)^3$$
Il y a une unique valeur propre $\lambda = 1$ de multiplicité $3$.

8. Si $A$ était diagonalisable, puisque son unique valeur propre est $1$, $A$ serait semblable à $I_3$, ce qui impliquerait $A = I_3$. Or $A \neq I_3$, donc **$A$ n'est pas diagonalisable**.

9. Déterminons le sous-espace caractéristique $E_1 = \ker((A - I_3)^3) = \ker((A - I_3)^2)$ (par Cayley-Hamilton, $\pi_A(X) = (X-1)^p$ avec $p \le 3$).
Calculons $A - I_3$ :
$$A - I_3 = \begin{pmatrix} 1 & 1 & 1 \\ -1 & -1 & -1 \\ 0 & 0 & 0 \end{pmatrix}$$
On remarque immédiatement que $\text{rg}(A - I_3) = 1$. Par le théorème du rang, $\dim(\ker(A - I_3)) = 3 - 1 = 2$. 
Calculons $(A - I_3)^2$ :
$$(A - I_3)^2 = \begin{pmatrix} 1 & 1 & 1 \\ -1 & -1 & -1 \\ 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} 1 & 1 & 1 \\ -1 & -1 & -1 \\ 0 & 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$
Ainsi, $\pi_A(X) = (X-1)^2$ (le polynôme minimal est $(X-1)^2$ car $A \neq I_3$).
L'espace propre associé à $\lambda = 1$ est de dimension $2$, engendré par :
$$e_1 = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix} \quad \text{et} \quad e_2 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$$

10. Pour trigonaliser $A$, on choisit $e_1, e_2$ dans $\ker(A - I_3)$, et on cherche un vecteur $e_3$ tel que $(A - I_3)e_3 = e_1$ (ou une combinaison libre).
Prenons $e_3 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$. On a bien :
$$(A - I_3)e_3 = \begin{pmatrix} 1 & 1 & 1 \\ -1 & -1 & -1 \\ 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix} = e_1$$
La matrice de passage $P = \begin{pmatrix} 1 & 1 & 0 \\ -1 & 0 & 1 \\ 0 & -1 & 0 \end{pmatrix}$ permet d'obtenir :
$$T = P^{-1} A P = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$
*(Note : Selon l'agencement des vecteurs de base, on obtient une matrice triangulaire supérieure dont les coefficients diagonaux sont tous égaux à $1$, et un $1$ ou $0$ sur la surdiagonale).*

11. **Analyse critique et limites du modèle :**
    - La solution générale du système $X'(t) = A X(t)$ est donnée par $X(t) = e^{tA} X(0)$.
    - En utilisant la trigonalisation $A = P T P^{-1}$, on a $e^{tA} = P e^{tT} P^{-1}$. La présence d'un bloc de Jordan non trivial (ou d'un terme hors diagonale dans $T$) engendre des termes séculaires de la forme $t e^t$.
    - **Limites physiques :** À long terme ($t \to +\infty$), la présence du facteur $t$ combiné à $e^t$ conduit à une croissance en temps $t$ exponentiellement rapide des températures, ce qui traduit une instabilité critique du réseau thermique modélisé. 
    - *Critique d'ingénierie :* Ce modèle linéaire à coefficients constants suppose des capacités calorifiques et des flux d'échanges parfaits sans saturation. Dans un système physique réel, les non-linéarités (dissipation thermique radiative en $T^4$, saturation des actionneurs) stabiliseraient le système. Le modèle mathématique linéaire perd sa validité prédictive pour des amplitudes de température élevées.