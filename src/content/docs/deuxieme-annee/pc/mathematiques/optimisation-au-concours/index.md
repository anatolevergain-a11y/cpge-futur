---
title: 'Optimisation au concours : Mathématiques PC'
description: 'Les questions incontournables aux concours, les erreurs à éviter et les rédactions modèles de jury.'
sidebar:
  badge:
    text: 'Méthode Concours'
    variant: 'caution'
---

## 🎯 Objectif du module & Exigences des Jurys

En tant que concepteur de sujets et président de jury pour les concours de la filière Physique-Chimie (PC), je ne le répéterai jamais assez : **ce n'est pas la quantité de copies écrites qui départage les candidats, mais la rigueur de la mise en page, la pertinence des justifications et la maîtrise des hypothèses de cours.**

En filière PC, les mathématiques sont un outil puissant au service des sciences physiques. Les jurys des concours Mines-Ponts, Centrale-Supélec, CCINP et Agro-Véto attendent de vous une précision chirurgicale, en particulier sur :
1. **L'hygiène topologique et analytique** : vérification systématique des conditions d'application des théorèmes (continuité, classe de differentiabilité, intégrabilité, compacité).
2. **La propreté rédactionnelle** : introduction claire des notations, quantification rigoureuse ($\forall, \exists$), et conclusion explicite.

Ce guide d'optimisation détaille deux des questions les plus rentables et les plus piégeuses des écrits de mathématiques en PC.

---

## 📌 Question Type 1 : Calcul des coefficients de Fourier d'une fonction $T$-périodique et application du théorème de Dirichlet

### 💡 Méthode canonique & Étapes de rédaction

1. **Vérification des hypothèses d'intégrabilité** : S'assurer que $f$ est continue par morceaux sur $\mathbb{R}$, $T$-périodique, et donc intégrable sur tout segment (en particulier sur une période $[0, T]$ ou $[-T/2, T/2]$).
2. **Calcul explicite des coefficients** : 
   - Utiliser la période $T$ (ou ramener l'intégrale sur $[- \pi, \pi]$ par un changement de variable affine si la période est $2\pi$).
   - Appliquer les propriétés de parité/imparité si elles existent pour diviser le travail par deux.
   - Gérer proprement le cas $n = 0$ et $n \neq 0$ pour les coefficients réels $a_n$ et $b_n$, ou l'indice $n = 0$ et $n \in \mathbb{Z}^*$ pour les coefficients complexes $c_n$.
3. **Intégration par parties (IPP)** : Si $f$ n'est pas infiniment dérivable, expliciter les IPP successives en justifiant la classe de $f$ (par exemple $C^1$ par morceaux).
4. **Application du théorème de Dirichlet** :
   - Citer précisément le théorème : si $f$ est $T$-périodique, de classe $C^1$ par morceaux sur $\mathbb{R}$, alors pour tout $x \in \mathbb{R}$, la série de Fourier de $f$ converge simplement vers $\frac{f(x^+) + f(x^-)}{2}$.
   - Conclure sur la valeur de la somme de la série pour des valeurs particulières de $x$ (par exemple $x = 0$ ou $x = \pi$).

---

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé type :**
Soit $f : \mathbb{R} \to \mathbb{R}$ la fonction $2\pi$-périodique, paire, définie sur $[0, \pi]$ par $f(t) = t$.
1. Calculer les coefficients de Fourier trigonométriques de $f$.
2. Énoncer le théorème de Dirichlet et en déduire la valeur de la somme $\sum_{n=0}^{+\infty} \frac{1}{(2n+1)^2}$.

---

**Rédaction modèle type /20 :**

*1. Calcul des coefficients de Fourier :*
La fonction $f$ est continue, $2\pi$-périodique et de classe $C^1$ par morceaux sur $\mathbb{R}$. Elle est donc développable en série de Fourier. 
Puisque $f$ est paire, ses coefficients de Fourier sine $b_n$ sont tous nuls pour tout $n \in \mathbb{N}^*$ ($f(t)\sin(nt)$ est impaire).

Pour $a_0$ :
$$a_0 = \frac{2}{2\pi} \int_{-\pi}^{\pi} f(t) \text{d}t = \frac{2}{\pi} \int_{0}^{\pi} t \text{d}t = \frac{2}{\pi} \left[ \frac{t^2}{2} \right]_0^\pi = \pi$$

Pour $n \in \mathbb{N}^*$ :
$$a_n = \frac{2}{2\pi} \int_{-\pi}^{\pi} f(t)\cos(nt) \text{d}t = \frac{2}{\pi} \int_{0}^{\pi} t \cos(nt) \text{d}t$$
Effectuons une intégration par parties. Posons $u(t) = t$ (de classe $C^1$) et $v'(t) = \cos(nt)$ (de primitive $v(t) = \frac{\sin(nt)}{n}$). Les fonctions sont de classe $C^1$ sur $[0, \pi]$ :
$$a_n = \frac{2}{\pi} \left( \left[ t \frac{\sin(nt)}{n} \right]_0^\pi - \int_{0}^{\pi} 1 \cdot \frac{\sin(nt)}{n} \text{d}t \right)$$
Puisque $\sin(n\pi) = 0$ et $\sin(0) = 0$, le terme tout intégré est nul. Il reste :
$$a_n = -\frac{2}{n\pi} \left[ -\frac{\cos(nt)}{n} \right]_0^\pi = \frac{2}{n^2\pi} (\cos(n\pi) - \cos(0)) = \frac{2}{n^2\pi} ((-1)^n - 1)$$
Ainsi, $a_n = -\frac{4}{(2k+1)^2\pi}$ si $n = 2k+1$ est impair, et $a_n = 0$ si $n$ est pair.

*2. Application du théorème de Dirichlet :*
La fonction $f$ étant $2\pi$-périodique et de classe $C^1$ par morceaux sur $\mathbb{R}$, le **théorème de Dirichlet** s'applique en tout point $x \in \mathbb{R}$. La série de Fourier associée à $f$ converge en tout point $x$ vers :
$$S(x) = \frac{f(x^+) + f(x^-)}{2}$$
Puisque $f$ est continue sur $\mathbb{R}$, $f(x^+) = f(x^-) = f(x)$, donc la série converge simplement vers $f(x)$ pour tout $x \in \mathbb{R}$.

En particulier, en $x = 0$ :
$$f(0) = 0 = \frac{a_0}{2} + \sum_{n=1}^{+\infty} a_n \cos(0) = \frac{\pi}{2} + \sum_{k=0}^{+\infty} \left( -\frac{4}{(2k+1)^2\pi} \right)$$
En réorganisant l'égalité :
$$\sum_{k=0}^{+\infty} \frac{4}{(2k+1)^2\pi} = \frac{\pi}{2} \implies \sum_{k=0}^{+\infty} \frac{1}{(2k+1)^2} = \frac{\pi^2}{8}$$

---

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury

- **Oubli de la parité** : Perdre du temps à calculer les $b_n$ en oubliant de mentionner que $f$ est paire et que le produit $f(t)\sin(nt)$ est impair sur un intervalle symétrique.
- **Mauvaise citation du théorème de Dirichlet** : Oublier de diviser par 2 en cas de discontinuité (prendre la moyenne des limites à gauche et à droite).
- **Confusion sur l'indice de sommation** : Ne pas expliciter la distinction entre $n$ pair et $n$ impair lors du calcul de la somme finale.

---

## 📌 Question Type 2 : Résolution de systèmes différentiels linéaires à coefficients constants

### 💡 Méthode canonique & Étapes de rédaction

1. **Mise sous forme matricielle** : Écrire le système sous la forme $X'(t) = A X(t) + B(t)$, où $A \in \mathcal{M}_n(\mathbb{R})$ et $X(t) = \begin{pmatrix} x_1(t) \\ \vdots \\ x_n(t) \end{pmatrix}$.
2. **Résolution de l'équation homogène ($X'(t) = AX(t)$)** :
   - Calculer le polynôme caractéristique $P(\lambda) = \det(A - \lambda I_n)$.
   - Déterminer les valeurs propres et leurs multiplicités.
   - **Cas diagonalisable** : Déterminer une base de vecteurs propres $(\varepsilon_1, \dots, \varepsilon_n)$. La solution générale est $X_h(t) = \sum_{i=1}^n C_i e^{\lambda_i t} \varepsilon_i$.
   - **Cas non diagonalisable (Hors-programme en théorie pure PC, mais abordé via la réduction de Dunford ou l'exponentielle de matrice)** : Utiliser l'exponentielle de matrice $X(t) = \exp(tA)X_0$.
3. **Recherche d'une solution particulière (si système avec second membre)** :
   - Utiliser la méthode de **variation des constantes** : $X_p(t) = P(t) \exp(tA)$ où $P'(t)\exp(tA) = B(t)$, ou utiliser la structure du second membre (méthode par identification si $B(t)$ est polynomiale/exponentielle/trigonométrique).
4. **Condition initiale** : Utiliser la condition $X(0) = X_0$ pour déterminer de manière unique les constantes d'intégration $C_i$.

---

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé type :**
Résoudre sur $\mathbb{R}$ le système différentiel suivant :
$$\begin{cases} x'(t) = x(t) + 2y(t) \\ y'(t) = 3x(t) + 2y(t) \end{cases}$$
avec les conditions initiales $x(0) = 1$ et $y(0) = 0$.

---

**Rédaction modèle type /20 :**

*1. Mise sous forme matricielle :*
Le système s'écrit sous la forme vectorielle $X'(t) = A X(t)$ avec :
$$X(t) = \begin{pmatrix} x(t) \\ y(t) \end{pmatrix} \quad \text{et} \quad A = \begin{pmatrix} 1 & 2 \\ 3 & 2 \end{pmatrix}$$

*2. Étude spectrale de la matrice $A$ :*
Calculons le polynôme caractéristique de $A$ :
$$\chi_A(\lambda) = \det(A - \lambda I_2) = \begin{vmatrix} 1-\lambda & 2 \\ 3 & 2-\lambda \end{vmatrix} = (1-\lambda)(2-\lambda) - 6$$
$$\chi_A(\lambda) = \lambda^2 - 3\lambda + 2 - 6 = \lambda^2 - 3\lambda - 4 = (\lambda - 4)(\lambda + 1)$$
Les valeurs propres de $A$ sont donc $\lambda_1 = 4$ et $\lambda_2 = -1$. Ce sont deux valeurs propres distinctes ($2$ valeurs propres simples pour une matrice $2 \times 2$), donc **la matrice $A$ est diagonalisable**.

*3. Recherche des sous-espaces propres :*
- Pour $\lambda_1 = 4$ :
  Soit $V_1 = \begin{pmatrix} x \\ y \end{pmatrix}$ tel que $(A - 4I_2)V_1 = 0$ :
  $$\begin{pmatrix} -3 & 2 \\ 3 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies -3x + 2y = 0$$
  On peut choisir le vecteur propre associé : 
  $$E_1 = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$$

- Pour $\lambda_2 = -1$ :
  Soit $V_2 = \begin{pmatrix} x \\ y \end{pmatrix}$ tel que $(A + I_2)V_2 = 0$ :
  $$\begin{pmatrix} 2 & 2 \\ 3 & 3 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies x + y = 0$$
  On peut choisir le vecteur propre associé :
  $$E_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$$

*4. Solution générale du système :*
Puisque $A$ est diagonalisable sur $\mathbb{R}$, l'ensemble des solutions de l'équation différentielle linéaire homogène est engendré par les solutions élémentaires associées aux valeurs propres. La solution générale s'écrit :
$$X(t) = C_1 e^{4t} \begin{pmatrix} 2 \\ 3 \end{pmatrix} + C_2 e^{-t} \begin{pmatrix} 1 \\ -1 \end{pmatrix} \quad (C_1, C_2) \in \mathbb{R}^2$$
Soit sous forme développée :
$$\begin{cases} x(t) = 2C_1 e^{4t} + C_2 e^{-t} \\ y(t) = 3C_1 e^{4t} - C_2 e^{-t} \end{cases}$$

*5. Utilisation des conditions initiales :*
Les conditions initiales imposent $x(0) = 1$ et $y(0) = 0$ :
$$\begin{cases} 2C_1 + C_2 = 1 \\ 3C_1 - C_2 = 0 \end{cases}$$
En additionnant les deux lignes, on obtient $5C_1 = 1 \implies C_1 = \frac{1}{5}$.
Puis, $C_2 = 3C_1 = \frac{3}{5}$.

La solution unique du problème de Cauchy est donc :
$$\begin{cases} x(t) = \frac{2}{5} e^{4t} + \frac{3}{5} e^{-t} \\ y(t) = \frac{3}{5} e^{4t} - \frac{3}{5} e^{-t} \end{cases}$$

---

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury

- **Oubli de mentionner la diagonalisabilité** : Écrire directement la forme générale sans préciser que le théorème du cours s'applique car la matrice est diagonalisable (ou sans expliciter la base de diagonalisation).
- **Erreurs de calcul de déterminant ou de signes** dans le polynôme caractéristique (source numéro un d'élimination prématurée sur cette question).
- **Inversion des constantes** lors de l'application des conditions initiales : Toujours poser clairement le système linéaire en $(C_1, C_2)$ avant de le résoudre.