---
title: 'Exercice : Quantification de l énergie et mesure quantique'
description: 'Problème d entraînement type concours pour les classes préparatoires MPI (Physique-Chimie).'
---

### 🌐 Énoncé du problème / Cadre d'étude

On s'intéresse dans ce problème à un système quantique bidimensionnel (à deux niveaux d'énergie), modélisant par exemple un spin $1/2$ dans un champ magnétique ou un qbit supraconducteur. L'espace des états du système est un espace de Hilbert $\mathcal{E}$ isomorphe à $\mathbb{C}^2$.

Soit $(|0\rangle, |1\rangle)$ une base orthonormée de $\mathcal{E}$, constituée des états propres d'un observable d'énergie (Hamiltonien noté $\hat{H}$) du système, associés respectivement aux énergies $E_0$ et $E_1$, avec $E_1 > E_0$. On pose $\omega_0 = \frac{E_1 - E_0}{\hbar}$.

Dans cette base, un état quelconque $|\psi(t)\rangle$ du système est représenté par un vecteur colonne et les observables par des matrices $2 \times 2$. On rappelle la valeur des matrices de Pauli :
$$\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad \sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \quad \sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

---

### ❓ Questions progressives

1. **Évolution temporelle et opérateur Hamiltonien**
   1. Exprimer l'opérateur Hamiltonien $\hat{H}$ du système dans la base $(|0\rangle, |1\rangle)$, en choisissant par exemple l'origine des énergies de sorte que $E_0 = -\frac{\hbar \omega_0}{2}$ et $E_1 = \frac{\hbar \omega_0}{2}$.
   2. Écrire l'équation de Schrödinger régissant l'évolution temporelle d'un état $|\psi(t)\rangle$.
   3. Sachant que le système est préparé à l'instant $t = 0$ dans l'état $|\psi(0)\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$, déterminer l'état $|\psi(t)\rangle$ à un instant $t > 0$.

2. **Mesure quantique et probabilités**
   1. On mesure l'énergie du système à l'instant $t$. Quelles sont les valeurs possibles que l'on peut trouver, et avec quelles probabilités respectives ?
   2. À l'instant $t$, on décide plutôt de mesurer l'observable $\hat{A} = A_0 \sigma_x$ (où $A_0$ est une constante réelle positive). Exprimons les valeurs propres de $\hat{A}$ et les états propres associés dans la base $(|0\rangle, |1\rangle)$.
   3. Calculer la probabilité d'obtenir la valeur propre positive lors de cette mesure de $\hat{A}$ à l'instant $t$. Commenter l'évolution temporelle de cette probabilité.

3. **Valeur moyenne et incertitude**
   1. Calculer la valeur moyenne $\langle \hat{A} \rangle(t)$ de l'observable $\hat{A}$ dans l'état $|\psi(t)\rangle$.
   2. Calculer l'écart-type $\Delta A(t)$ (ou incertitude quantique) associé à la mesure de $\hat{A}$ à l'instant $t$.

---

### 💡 Pistes & Indications méthodologiques

* **Q1.1 & Q1.2 :** L'écriture matricielle de $\hat{H}$ découle directement de son action sur les vecteurs de base. Pensez à l'analogie avec les matrices de Pauli. Pour l'équation de Schrödinger, c'est le postulat fondamental d'évolution : $i\hbar \frac{\partial}{\partial t}|\psi(t)\rangle = \hat{H}|\psi(t)\rangle$.
* **Q1.3 :** Utilisez l'opérateur d'évolution temporelle formel ou résolvez l'équation différentielle pour les coefficients de la décomposition dans la base propre.
* **Q2.1 :** Les valeurs mesurables d'une observable sont ses valeurs propres. Les probabilités se calculent via la règle de Born (carré du module du produit scalaire avec le vecteur propre associé).
* **Q2.2 & Q2.3 :** Diagonalisez la matrice $\sigma_x$ (ses valeurs propres sont bien connues). Appliquez ensuite la règle de projection de la mesure quantique.
* **Q3 :** La valeur moyenne d'un opérateur $\hat{A}$ dans l'état $|\psi\rangle$ est $\langle \hat{A} \rangle = \langle \psi | \hat{A} | \psi \rangle$. L'écart-type se déduit de la formule $\Delta A = \sqrt{\langle \hat{A}^2 \rangle - \langle \hat{A} \rangle^2}$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Évolution temporelle et opérateur Hamiltonien

1. **Matrice de l'Hamiltonien :**
   Avec le choix d'origine des énergies, on a $E_0 = -\frac{\hbar \omega_0}{2}$ et $E_1 = \frac{\hbar \omega_0}{2}$. 
   L'action de $\hat{H}$ sur les vecteurs de base est $\hat{H}|0\rangle = E_0|0\rangle$ et $\hat{H}|1\rangle = E_1|1\rangle$.
   Dans la base $(|0\rangle, |1\rangle)$, l'opérateur $\hat{H}$ se représente par la matrice :
   $$H = \begin{pmatrix} -\frac{\hbar \omega_0}{2} & 0 \\ 0 & \frac{\hbar \omega_0}{2} \end{pmatrix} = -\frac{\hbar \omega_0}{2} \sigma_z$$

2. **Équation de Schrödinger :**
   Le postulat d'évolution temporelle s'écrit :
   $$i\hbar \frac{d}{dt} |\psi(t)\rangle = \hat{H} |\psi(t)\rangle$$

3. **État du système à l'instant $t$ :**
   Soit $|\psi(t)\rangle = c_0(t)|0\rangle + c_1(t)|1\rangle$. En projetant l'équation de Schrödinger sur les états de base, on obtient un système couplé simple :
   $$i\hbar \dot{c}_0(t) = -\frac{\hbar \omega_0}{2} c_0(t) \implies c_0(t) = c_0(0)e^{i\frac{\omega_0 t}{2}}$$
   $$i\hbar \dot{c}_1(t) = \frac{\hbar \omega_0}{2} c_1(t) \implies c_1(t) = c_1(0)e^{-i\frac{\omega_0 t}{2}}$$
   Avec la condition initiale $c_0(0) = c_1(0) = \frac{1}{\sqrt{2}}$, on obtient l'état normalisé à tout instant $t$ :
   $$|\psi(t)\rangle = \frac{1}{\sqrt{2}} e^{i\frac{\omega_0 t}{2}} |0\rangle + \frac{1}{\sqrt{2}} e^{-i\frac{\omega_0 t}{2}} |1\rangle$$

---

#### 2. Mesure quantique et probabilités

1. **Mesure de l'énergie :**
   Les seules valeurs mesurables de l'énergie sont les valeurs propres de $\hat{H}$, soit $E_0 = -\frac{\hbar \omega_0}{2}$ et $E_1 = \frac{\hbar \omega_0}{2}$.
   * Probabilité de trouver $E_0$ : $P(E_0) = |\langle 0|\psi(t)\rangle|^2 = \left|\frac{1}{\sqrt{2}} e^{i\frac{\omega_0 t}{2}}\right|^2 = \frac{1}{2}$.
   * Probabilité de trouver $E_1$ : $P(E_1) = |\langle 1|\psi(t)\rangle|^2 = \left|\frac{1}{\sqrt{2}} e^{-i\frac{\omega_0 t}{2}}\right|^2 = \frac{1}{2}$.
   *(Remarque : l'état stationnaire ou superposé ici conduit à des probabilités stationnaires pour l'énergie).*

2. **Valeurs propres et états propres de $\hat{A} = A_0 \sigma_x$ :**
   La matrice de $\hat{A}$ est $A = \begin{pmatrix} 0 & A_0 \\ A_0 & 0 \end{pmatrix}$.
   Son polynôme caractéristique est $\det(A - \lambda I) = \lambda^2 - A_0^2 = 0$.
   Les valeurs propres sont donc $\lambda_1 = A_0$ et $\lambda_2 = -A_0$.
   * Pour $\lambda_1 = A_0$, le vecteur propre associé (normalisé) est $|+\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$.
   * Pour $\lambda_2 = -A_0$, le vecteur propre associé est $|-\rangle = \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle)$.

3. **Probabilité d'obtenir la valeur propre positive ($A_0$) :**
   La valeur propre positive est $A_0$, associée à l'état $|+\rangle$. La probabilité recherchée est donnée par la règle de Born :
   $$P(A_0, t) = |\langle +|\psi(t)\rangle|^2$$
   Calculons le produit scalaire $\langle +|\psi(t)\rangle$ :
   $$\langle +|\psi(t)\rangle = \frac{1}{\sqrt{2}}\left(\langle 0| + \langle 1|\right) \left( \frac{1}{\sqrt{2}} e^{i\frac{\omega_0 t}{2}} |0\rangle + \frac{1}{\sqrt{2}} e^{-i\frac{\omega_0 t}{2}} |1\rangle \right)$$
   $$\langle +|\psi(t)\rangle = \frac{1}{2} \left( e^{i\frac{\omega_0 t}{2}} + e^{-i\frac{\omega_0 t}{2}} \right) = \cos\left(\frac{\omega_0 t}{2}\right)$$
   Par conséquent, la probabilité est :
   $$P(A_0, t) = \cos^2\left(\frac{\omega_0 t}{2}\right)$$
   Cette probabilité oscille périodiquement au cours du temps à la pulsation $\omega_0$, ce qui traduit l'interférence quantique entre les états de base induite par l'évolution hamiltonienne.

---

#### 3. Valeur moyenne et incertitude

1. **Valeur moyenne de $\hat{A}$ :**
   Par définition, $\langle \hat{A} \rangle(t) = \langle \psi(t) | \hat{A} | \psi(t) \rangle$.
   En représentation matricielle :
   $$|\psi(t)\rangle \hat{=} \frac{1}{\sqrt{2}} \begin{pmatrix} e^{i\frac{\omega_0 t}{2}} \\ e^{-i\frac{\omega_0 t}{2}} \end{pmatrix}$$
   $$\langle \psi(t) | \hat{A} | \psi(t) \rangle = \frac{1}{2} \begin{pmatrix} e^{-i\frac{\omega_0 t}{2}} & e^{i\frac{\omega_0 t}{2}} \end{pmatrix} \begin{pmatrix} 0 & A_0 \\ A_0 & 0 \end{pmatrix} \begin{pmatrix} e^{i\frac{\omega_0 t}{2}} \\ e^{-i\frac{\omega_0 t}{2}} \end{pmatrix}$$
   Effectuons le produit matriciel intermédiaire :
   $$\begin{pmatrix} 0 & A_0 \\ A_0 & 0 \end{pmatrix} \begin{pmatrix} e^{i\frac{\omega_0 t}{2}} \\ e^{-i\frac{\omega_0 t}{2}} \end{pmatrix} = \begin{pmatrix} A_0 e^{-i\frac{\omega_0 t}{2}} \\ A_0 e^{i\frac{\omega_0 t}{2}} \end{pmatrix}$$
   Puis le produit final :
   $$\langle \hat{A} \rangle(t) = \frac{A_0}{2} \left( e^{-i\frac{\omega_0 t}{2}} e^{-i\frac{\omega_0 t}{2}} + e^{i\frac{\omega_0 t}{2}} e^{i\frac{\omega_0 t}{2}} \right) \quad \text{(attention aux indices de ligne/colonne)}$$
   Plus simplement, en utilisant les projecteurs ou la formule avec les probabilités discrètes :
   $$\langle \hat{A} \rangle(t) = A_0 P(A_0, t) + (-A_0) P(-A_0, t) = A_0 \cos^2\left(\frac{\omega_0 t}{2}\right) - A_0 \sin^2\left(\frac{\omega_0 t}{2}\right) = A_0 \cos(\omega_0 t)$$

2. **Écart-type $\Delta A(t)$ :**
   On utilise la formule classique : $(\Delta A)^2 = \langle \hat{A}^2 \rangle - \langle \hat{A} \rangle^2$.
   * Calculons $\hat{A}^2$ :
     $$\hat{A}^2 = A_0^2 \sigma_x^2 = A_0^2 \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = A_0^2 \hat{I}$$
     Par conséquent, la valeur moyenne $\langle \hat{A}^2 \rangle = A_0^2 \langle \psi(t)|\psi(t)\rangle = A_0^2$ (l'état étant normé).
   * On en déduit l'écart-type :
     $$(\Delta A(t))^2 = A_0^2 - \left(A_0 \cos(\omega_0 t)\right)^2 = A_0^2 \left(1 - \cos^2(\omega_0 t)\right) = A_0^2 \sin^2(\omega_0 t)$$
   Soit, en prenant la racine positive :
   $$\Delta A(t) = A_0 |\sin(\omega_0 t)|$$
   *Interprétation physique :* Lorsque le système est dans un état propre de $\hat{A}$ (ce qui arrive lorsque $\cos^2(\omega_0 t) = 1$ ou $0$), l'incertitude est nulle ($\Delta A = 0$). Dans les autres cas, le résultat de la mesure est intrinsèquement probabiliste, d'où une incertitude non nulle.