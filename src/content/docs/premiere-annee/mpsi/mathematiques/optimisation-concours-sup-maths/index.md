---
title: "Optimisation Concours : Réflexes & Méthodes Sup Maths"
description: "Méthodes canoniques, rédactions modèles type concours et pièges du barème pour les concours CPGE."
sidebar:
  badge:
    text: "Méthode Concours"
    variant: "caution"
---

## 🎯 Objectif du Module & Exigences des Jurys

En tant que concepteur de sujets et président de jury de concours CPGE, je constate chaque année les mêmes écueirs : des candidats brillants mais pénalisés par une rédaction approximative, des quantificateurs inversés ou des théorèmes appliqués sans vérification des hypothèses. Ce module a pour unique but de transformer votre copie en un outil redoutable d'efficacité. 

En classe de MPSI, l'optimisation de la note repose sur trois piliers :
1. **La rigueur topologique et algébrique** : Citer précisément le nom des théorèmes et vérifier leurs hypothèses par un encadré ou une phrase dédiée.
2. **La propreté des calculs asymptotiques et matriciels** : Maîtriser l'art des développements limités et de la manipulation des suites.
3. **L'anticipation du correcteur** : Le barème valorise la clarté, l'autonomie des raisonnements et la capacité à conclure proprement (notamment sur les équivalents et les dimensions).

---

### 📌 Question Type 1 : Développements limités, calculs d'équivalents et étude de suites récurrentes $u_{n+1} = f(u_n)$

#### 💡 Méthode canonique & Étapes de rédaction
Pour étudier une suite définie par $u_{n+1} = f(u_n)$ au voisinage de sa limite $l$ (souvent $0$), la méthode standard en concours exige :
1. **L'analyse de la fonction $f$** : Justifier la continuité, la dérivation et le comportement de $f$ au voisinage de $l$.
2. **L'encadrement ou la convergence** : Établir la convergence de la suite $(u_n)_{n \in \mathbb{N}}$ vers $l$ par des théorèmes de stabilité d'intervalle et de point fixe.
3. **Le développement asymptotique** : Écrire $f(x)$ sous la forme $l + \sum_{k=p}^{N} a_k (x-l)^k + o\left((x-l)^N\right)$ au voisinage de $l$.
4. **L'injection de la récurrence** : Utiliser la relation de récurrence pour injecter le développement et identifier le comportement dominant de $u_n - l$ à l'aide de comparaisons de suites ou de la fonction de Cesàro discrète.

#### 📋 Exemple de sujet corrigé type Concours
**Énoncé :** Soit la suite $(u_n)_{n \in \mathbb{N}}$ définie par $u_0 \in ]0, 1[$ et $u_{n+1} = \sin(u_n)$. 
Déterminer la limite de $(u_n)$ puis un équivalent simple de $u_n$ lorsque $n$ tend vers $+\infty$.

**Corrigé type rédigé :**
*Étape 1 : Étude de la limite.*
Soit $f : x \mapsto \sin(x)$. La fonction $f$ est de classe $\mathcal{C}^\infty$ sur $\mathbb{R}$. 
Pour tout $x \in ]0, 1]$, on a $0 < \sin(x) < x$. Par récurrence immédiate, pour tout $n \in \mathbb{N}$, $u_n \in ]0, 1]$.
La suite $(u_n)$ est minorée par $0$ et décroissante car $u_{n+1} - u_n = \sin(u_n) - u_n < 0$ sur $]0, 1]$. 
D'après le théorème de la limite monotone, $(u_n)$ converge vers une limite $l \in [0, 1]$. 
Par continuité de $f$, $l = \sin(l)$. La seule solution sur $[0, 1]$ est $l = 0$. Ainsi, **$\lim_{n \to +\infty} u_n = 0$**.

*Étape 2 : Recherche d'un équivalent.*
Au voisinage de $0$, le développement limité de $f$ donne :
$$\sin(x) = x - \frac{x^3}{6} + o(x^3)$$
Considérons l'inverse de $u_n^2$. Étudions la quantité $\frac{1}{u_{n+1}^2} - \frac{1}{u_n^2}$.
En utilisant le développement limité :
$$\frac{1}{u_{n+1}^2} = \frac{1}{\left(u_n - \frac{u_n^3}{6} + o(u_n^3)\right)^2} = \frac{1}{u_n^2 \left(1 - \frac{u_n^2}{6} + o(u_n^2)\right)^2}$$
En effectuant un développement limité ou un produit asymptotique :
$$\frac{1}{u_{n+1}^2} = \frac{1}{u_n^2} \left(1 + \frac{u_n^2}{3} + o(u_n^2)\right) = \frac{1}{u_n^2} + \frac{1}{3} + o(1)$$
On en déduit par sommation des relations de comparaison (ou lemme de Cesàro discret) que :
$$\frac{1}{u_n^2} \underset{n \to +\infty}{\sim} \frac{n}{3}$$
Soit, en extrayant la racine carrée positive :
$$u_n \underset{n \to +\infty}{\sim} \frac{\sqrt{3}}{\sqrt{n}}$$

#### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Piège 1** : Appliquer un DL de $\sin(u_n)$ directement sans justifier que $u_n$ tend vers $0$ (le domaine de valadité du DL est local).
- **Piège 2** : Oublier de mentionner que la fonction est de classe $\mathcal{C}^k$ nécessaire avant d'écrire un développement limité à l'ordre $k$.
- **Piège 3** : Écrire des horreurs du type $o(u_n^3) - o(u_n^3) = 0$ (les $o$ se somment mais ne se soustraient pas algébriquement de la sorte sans précaution).

---

### 📌 Question Type 2 : Systèmes linéaires, réduction des matrices carrées et recherche d'invariants

#### 💡 Méthode canonique & Étapes de rédaction
Face à une matrice carrée $A \in \mathcal{M}_n(\mathbb{K})$ ou un endomorphisme :
1. **Calcul du polynôme caractéristique** : $\chi_A(\lambda) = \det(\lambda I_n - A)$. Factoriser au maximum en utilisant des opérations sur les lignes et les colonnes (factorisation par $(x-1)$, $(x+1)$, etc.).
2. **Recherche des valeurs propres** : Résoudre $\chi_A(\lambda) = 0$ pour déterminer le spectre $\operatorname{Sp}(A)$.
3. **Calcul des sous-espaces propres** : Pour chaque valeur propre $\lambda$, résoudre le système homogène $(\lambda I_n - A)X = 0$ par la méthode du pivot de Gauss.
4. **Conclusion sur la diagonalisabilité** : Vérifier si la somme des dimensions des sous-espaces propres est égale à $n$, ou si chaque multiplicité algébrique est égale à sa multiplicité géométrique.

#### 📋 Exemple de sujet corrigé type Concours
**Énoncé :** Soit la matrice $A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$. 
Déterminer si $A$ est diagonalisable et expliciter sa matrice diagonale semblable.

**Corrigé type rédigé :**
*Étape 1 : Calcul du polynôme caractéristique.*
Calculons $\chi_A(\lambda) = \det(\lambda I_3 - A)$ :
$$\chi_A(\lambda) = \begin{vmatrix} \lambda - 2 & -1 & -1 \\ -1 & \lambda - 2 & -1 \\ -1 & -1 & \lambda - 2 \end{vmatrix}$$
Effectuons l'opération sur les colonnes $C_1 \leftarrow C_1 + C_2 + C_3$ :
$$\chi_A(\lambda) = \begin{vmatrix} \lambda - 4 & -1 & -1 \\ \lambda - 4 & \lambda - 2 & -1 \\ \lambda - 4 & -1 & \lambda - 2 \end{vmatrix} = (\lambda - 4) \begin{vmatrix} 1 & -1 & -1 \\ 1 & \lambda - 2 & -1 \\ 1 & -1 & \lambda - 2 \end{vmatrix}$$
Par les opérations sur les lignes $L_2 \leftarrow L_2 - L_1$ et $L_3 \leftarrow L_3 - L_1$ :
$$\chi_A(\lambda) = (\lambda - 4) \begin{vmatrix} 1 & -1 & -1 \\ 0 & \lambda - 1 & 0 \\ 0 & 0 & \lambda - 1 \end{vmatrix} = (\lambda - 4)(\lambda - 1)^2$$
Les valeurs propres de $A$ sont donc $\lambda_1 = 4$ (de multiplicité algébrique $1$) et $\lambda_2 = 1$ (de multiplicité algébrique $2$).

*Étape 2 : Détermination des sous-espaces propres.*
- **Pour $\lambda_1 = 4$** : 
  Le sous-espace propre $E_4$ est le noyau de $4I_3 - A$. Soit $X = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$ :
  $$\begin{pmatrix} 2 & -1 & -1 \\ -1 & 2 & -1 \\ -1 & -1 & 2 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} \iff \begin{cases} 2x - y - z = 0 \\ -x + 2y - z = 0 \end{cases}$$
  En faisant la différence, $3x - 3y = 0 \implies x = y$. En remplaçant, $z = x$. 
  Ainsi, $E_4 = \operatorname{Vect}\left(\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}\right)$. La dimension est $1$.

- **Pour $\lambda_2 = 1$** :
  Le sous-espace propre $E_1$ est le noyau de $I_3 - A$ :
  $$\begin{pmatrix} -1 & -1 & -1 \\ -1 & -1 & -1 \\ -1 & -1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} \iff x + y + z = 0$$
  Ce système définit un plan vectoriel. Une base de $E_1$ est donc constituée des vecteurs $e_1 = \begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix}$ et $e_2 = \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}$. La dimension est $2$.

*Étape 3 : Conclusion.*
La somme des dimensions des sous-espaces propres est $1 + 2 = 3 = \dim(\mathbb{R}^3)$. 
De plus, pour chaque valeur propre, la multiplicité algébrique est égale à la dimension du sous-espace propre associé (multiplicité géométrique). 
Par conséquent, **la matrice $A$ est diagonalisable**.

#### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Piège 1** : Conclure hâtivement qu'une matrice est diagonalisable sans vérifier le lien entre multiplicités algébriques et géométriques (ou la somme des dimensions).
- **Piège 2** : Faire des erreurs de signe dans le calcul du déterminant $\det(\lambda I_n - A)$. Toujours vérifier par la trace ($\operatorname{Tr}(A) = 2+2+2 = 6$ et $4 + 1 + 1 = 6$, ce qui est cohérent).
- **Piège 3** : Rédiger "la matrice est diagonalisable car elle a $3$ valeurs propres distinctes" (ce qui est faux ici puisque $1$ est de multiplicité $2$).

---

### 📌 Question Type 3 : Espaces vectoriels, familles libres/génératrices et calculs de dimension en algèbre linéaire

#### 💡 Méthode canonique & Étapes de rédaction
Pour démontrer qu'une partie $F$ est un sous-espace vectoriel, ou pour manipuler des sommes directes et des calculs de dimension :
1. **Caractérisation d'un sev** : Vérifier le triptyque :
   - Le vecteur nul appartient à $F$ ($0_E \in F$).
   - La stabilité par addition : $\forall (x, y) \in F^2, \, x + y \in F$.
   - La stabilité par multiplication externe : $\forall \lambda \in \mathbb{K}, \, \forall x \in F, \, \lambda x \in F$.
2. **Recherche de familles génératrices ou libres** : Pour une famille $(v_1, \dots, v_p)$, poser $\sum_{i=1}^p \lambda_i v_i = 0_E$ et montrer par un système ou un échelonnage que $\lambda_1 = \dots = \lambda_p = 0$.
3. **Théorème du rang** : Pour une application linéaire $u \in \mathcal{L}(E, F)$ avec $E$ de dimension finie :
   $$\dim(E) = \dim(\ker(u)) + \dim(\operatorname{Im}(u))$$

#### 📋 Exemple de sujet corrigé type Concours
**Énoncé :** Soit $E = \mathbb{R}_2[X]$. On considère l'ensemble $F = \{ P \in E \mid P(1) = 0 \}$.
Montrer que $F$ est un sous-espace vectoriel de $E$, en donner une base et préciser sa dimension.

**Corrigé type rédigé :**
*Étape 1 : Caractérisation de $F$ comme sous-espace vectoriel.*
- **1. Non-vacuité / Élément nul** : Soit le polynôme nul $0_E : x \mapsto 0$. On a $0_E(1) = 0$, donc $0_E \in F$. L'ensemble $F$ n'est pas vide.
- **2. Stabilité par combinaison linéaire** : Soient $(P, Q) \in F^2$ et $(a, b) \in \mathbb{R}^2$. 
  Considérons le polynôme $R = aP + bQ$. 
  Evaluons $R$ en $1$ :
  $$R(1) = (aP + bQ)(1) = aP(1) + bQ(1)$$
  Puisque $P \in F$ et $Q \in F$, on a $P(1) = 0$ et $Q(1) = 0$. 
  Par conséquent :
  $$R(1) = a(0) + b(0) = 0$$
  Ainsi, $R = aP + bQ \in F$.
  
L'ensemble $F$ est donc un **sous-espace vectoriel de $E$**.

*Étape 2 : Détermination d'une base et de la dimension.*
Soit $P = a_0 + a_1 X + a_2 X^2 \in E$. La condition $P(1) = 0$ se traduit par :
$$a_0 + a_1(1) + a_2(1)^2 = 0 \iff a_0 = -a_1 - a_2$$
Ainsi, un polynôme $P$ appartient à $F$ si et seulement si :
$$P(X) = (-a_1 - a_2) + a_1 X + a_2 X^2 = a_1 (X - 1) + a_2 (X^2 - 1)$$
Posons les polynômes $P_1(X) = X - 1$ et $P_2(X) = X^2 - 1$.
- **Famille génératrice** : L'égalité précédente montre que tout polynôme $P$ de $F$ s'écrit comme combinaison linéaire de $P_1$ et $P_2$. La famille $(P_1, P_2)$ engendre $F$.
- **Famille libre** : Soit $(a_1, a_2) \in \mathbb{R}^2$ tel que :
  $$a_1(X - 1) + a_2(X^2 - 1) = 0_E$$
  En évaluant en $X = 2$, on a $a_1(1) + a_2(3) = 0$. 
  Plus simplement, par identification des coefficients ou par évaluation en $0$ et dérivation, la liberté d'une famille de degrés échelonnés (ou par la base canonique) montre immédiatement que $a_1 = 0$ et $a_2 = 0$. 
  *(Alternative propre)* : La famille $(X-1, X^2-1)$ est extraite d'une famille de degrés échelonnés, elle est donc libre.

La famille $(P_1, P_2)$ est une base de $F$. Par conséquent, **$\dim(F) = 2$**.

#### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Piège 1** : Oublier de vérifier que le vecteur nul appartient à l'ensemble (c'est le premier point éliminatoire dans les copies).
- **Piège 2** : Confondre la dimension de l'espace ambient $E$ (qui est $3$ ici car $\dim(\mathbb{R}_2[X]) = 3$) avec la dimension du sous-espace $F$. Une condition linéaire homogène non triviale abaisse la dimension de $1$, ce qui donne bien $3 - 1 = 2$.
- **Piège 3** : Rédiger des arguments imprécis sur la liberté en disant "les polynômes sont évidents donc libres". Il faut obligatoirement poser la combinaison linéaire nulle et expliciter la méthode.