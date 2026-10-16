---
title: 'Exercice 2 : Endomorphismes autoadjoints et théorème spectral'
description: 'Problème d entraînement type concours pour MP.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de l'analyse vibratoire de structures mécaniques complexes (par exemple, le comportement dynamique d'une aile d'avion ou le châssis d'un véhicule électrique soumis à des sollicitations sismiques ou aérodynamiques), les ingénieurs modélisent l'énergie potentielle élastique et l'énergie cinétique à l'aide de formes quadratiques. 

Soit $E$ un espace vectoriel euclidien de dimension finie $n$, muni du produit scalaire $\langle \cdot, \cdot \rangle$ et de la norme associée $\|\cdot\|$. On considère un système mécanique conservateur discrétisé, régi par deux opérateurs symétriques définis positifs représentant respectivement la matrice de rigidité $K$ et la matrice de masse $M$. 

Pour simplifier l'analyse, on s'intéresse à un opérateur d'interaction thermique et mécanique modélisé par un endomorphisme autoadjoint $u \in \mathcal{L}(E)$ dont on cherche à diagonaliser les modes propres par une base orthonormée, tout en évaluant l'impact des incertitudes de mesure sur les valeurs propres de $u$.

---

### ❓ Questions progressives

1. **Rappels et Preliminaires**
   Soit $u \in \mathcal{L}(E)$ un endomorphisme autoadjoint. Démontrer que les sous-espaces propres de $u$ associés à des valeurs propres distinctes sont deux à deux orthogonaux.

2. **Caractérisation variationnelle (Théorème de Courant-Fischer)**
   Soit $u \in \mathcal{L}(E)$ un endomorphisme autoadjoint. On ordonne ses valeurs propres par ordre croissant : $\lambda_1 \le \lambda_2 \le \dots \le \lambda_n$. 
   Établir la relation :
   $$\lambda_1 = \min_{x \in E \setminus \{0\}} \frac{\langle u(x), x \rangle}{\|x\|^2}$$
   Interpréter ce résultat en physique des structures (fréquence fondamentale d'un système oscillant).

3. **Perturbation d'un opérateur autoadjoint**
   On perturbe l'opérateur $u$ par un endomorphisme symétrique $h \in \mathcal{L}(E)$ tel que $\|h\| \le \varepsilon$, où $\varepsilon > 0$ est un paramètre petit représentant l'incertitude de capteur. Soit $(\lambda_i)_{1 \le i \le n}$ les valeurs propres de $u$ et $(\tilde{\lambda}_i)_{1 \le i \le n}$ celles de $u + h$, rangées dans le même ordre.
   En utilisant le théorème de Courant-Fischer, démontrer que :
   $$\forall i \in \{1, \dots, n\}, \quad |\tilde{\lambda}_i - \lambda_i| \le \|h\|$$
   où $\|\cdot\|$ désigne ici la norme subordonnée associée à la norme euclidienne.

4. **Analyse critique et limites du modèle d'ingénierie**
   * **Question d'esprit critique :** En pratique industrielle, la matrice $h$ modélise les erreurs d'usinage ou les tolérances de fabrication d'une pièce mécanique. Si le système présente des valeurs propres multiples (fréquences de résonance confondues, par exemple en symétrie parfaite de révolution), que dire de la stabilité des *sous-espaces propres* sous l'effet de la perturbation $h$ ? Discuter des risques de couplage modal non souhaité en régime critique (ex: instabilité aéroélastique de type *flutter*).

---

### 💡 Pistes & Indications

* **Question 1 :** Utiliser la symétrie de $u$ (définition de l'autoadjonction : $\langle u(x), y \rangle = \langle x, u(y) \rangle$) en évaluant $\langle u(x), y \rangle$ pour deux vecteurs propres de valeurs propres distinctes.
* **Question 2 :** Poser le quotient de Rayleigh $R(x) = \frac{\langle u(x), x \rangle}{\|x\|^2}$. Utiliser la base orthonormée de diagonalisation de $u$ pour exprimer ce quotient dans des coordonnées adaptées.
* **Question 3 :** Appliquer la caractérisation variationnelle de Courant-Fischer pour exprimer $\tilde{\lambda}_i$ comme un extremum du quotient de Rayleigh associé à $u+h$, puis encadrer ce quotient à l'aide de l'inégalité de Cauchy-Schwarz et de la norme subordonnée de $h$.
* **Question 4 :** Pour la stabilité des sous-espaces propres, penser au conditionnement des matrices et aux perturbations de projecteurs spectraux lorsque les écarts entre valeurs propres deviennent du même ordre de grandeur que la perturbation $\varepsilon$.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Orthogonalité des sous-espaces propres
Soit $x$ et $y$ deux vecteurs propres de $u$ associés à des valeurs propres distinctes $\lambda$ et $\mu$ ($\lambda \neq \mu$). Par définition :
$$u(x) = \lambda x \quad \text{et} \quad u(y) \mu y$$
Calculons le produit scalaire $\langle u(x), y \rangle$ de deux manières en utilisant le fait que $u$ est autoadjoint :
$$\langle u(x), y \rangle = \langle \lambda x, y \rangle = \lambda \langle x, y \rangle$$
Et par autoadjonction :
$$\langle u(x), y \rangle = \langle x, u(y) \rangle = \langle x, \mu y \rangle = \mu \langle x, y \rangle$$
Par conséquent :
$$(\lambda - \mu) \langle x, y \rangle = 0$$
Puisque $\lambda \neq \mu$, on en déduit que $\langle x, y \rangle = 0$. Les sous-espaces propres sont donc orthogonaux.

#### 2. Caractérisation variationnelle (Courant-Fischer)
D'après le théorème spectral, il existe une base orthonormée $(e_1, \dots, e_n)$ de $u$ telle que $u(e_i) = \lambda_i e_i$. Tout vecteur $x \in E$ s'écrit $x = \sum_{i=1}^n x_i e_i$, avec $\|x\|^2 = \sum_{i=1}^n x_i^2$.
Le numérateur du quotient de Rayleigh devient :
$$\langle u(x), x \rangle = \left\langle \sum_{i=1}^n \lambda_i x_i e_i, \sum_{j=1}^n x_j e_j \right\rangle = \sum_{i=1}^n \lambda_i x_i^2$$
Puisque $\lambda_1 \le \lambda_i$ pour tout $i$, on a :
$$\langle u(x), x \rangle \ge \sum_{i=1}^n \lambda_1 x_i^2 = \lambda_1 \sum_{i=1}^n x_i^2 = \lambda_1 \|x\|^2$$
Ainsi, pour tout $x \neq 0$ :
$$\frac{\langle u(x), x \rangle}{\|x\|^2} \ge \lambda_1$$
De plus, en choisissant $x = e_1$, on obtient $\frac{\langle u(e_1), e_1 \rangle}{\|e_1\|^2} = \lambda_1$. 
Par conséquent :
$$\lambda_1 = \min_{x \in E \setminus \{0\}} \frac{\langle u(x), x \rangle}{\|x\|^2}$$
*Interprétation physique :* $\lambda_1$ représente la fréquence propre fondamentale du système. Le quotient de Rayleigh correspond au rapport entre l'énergie potentielle élastique et l'énergie cinétique (normalisée). Le système oscille par défaut de manière à minimiser ce quotient (principe de moindre action / énergie minimale).

#### 3. Stabilité des valeurs propres (Inégalité de Weyl / Courant-Fischer)
Soit $E_k$ un sous-espace vectoriel de dimension $k$. Par définition min-max de Courant-Fischer, la $i$-ième valeur propre $\tilde{\lambda}_i$ de $u+h$ vérifie :
$$\tilde{\lambda}_i = \min_{\dim(F) = i} \max_{x \in F \setminus \{0\}} \frac{\langle (u+h)(x), x \rangle}{\|x\|^2}$$
Or, pour tout $x \neq 0$ :
$$\frac{\langle (u+h)(x), x \rangle}{\|x\|^2} = \frac{\langle u(x), x \rangle}{\|x\|^2} + \frac{\langle h(x), x \rangle}{\|x\|^2}$$
D'après l'inégalité de Cauchy-Schwarz et la définition de la norme subordonnée $\|h\|$ :
$$|\langle h(x), x \rangle| \le \|h(x)\| \|x\| \le \|h\| \|x\|^2$$
D'où :
$$\frac{\langle u(x), x \rangle}{\|x\|^2} - \|h\| \le \frac{\langle (u+h)(x), x \rangle}{\|x\|^2} \le \frac{\langle u(x), x \rangle}{\|x\|^2} + \|h\|$$
En passant aux inf-sup selon le principe de Courant-Fischer, on obtient immédiatement :
$$\lambda_i - \|h\| \le \tilde{\lambda}_i \le \lambda_i + \|h\| \implies |\tilde{\lambda}_i - \lambda_i| \le \|h\|$$

#### 4. Analyse critique et limites du modèle
* **Analyse de la stabilité des sous-espaces propres :** 
Si $u$ possède des valeurs propres multiples (dégénérescence), les sous-espaces propres associés ont une dimension supérieure à 1. Lorsque l'on applique une perturbation $h$ (défauts de fabrication, dissymétries géométriques), ces valeurs propres multiples se séparent (levée de dégénérescence). 
Toutefois, les *vecteurs propres* (ou modes propres) peuvent subir des rotations arbitrairement grandes dans l'espace propre initial, même pour une perturbation $\varepsilon$ infinitésimale. Mathématiquement, la sensibilité des projecteurs spectraux est inversement proportionnelle à la distance séparant les valeurs propres ($\min_{j \neq i} |\lambda_i - \lambda_j}$). 
* **Conséquence en ingénierie :** Si deux fréquences de résonance sont proches (quasi-dégénérescence), une petite incertitude de fabrication peut complètement modifier la forme modale de la structure. Cela peut conduire à un couplage inattendu entre les modes de flexion et de torsion d'une aile d'avion, invalidant les hypothèses de découplage de la commande et menant potentiellement à des phénomènes catastrophiques de résonance ou de *flutter* aéroélastique non anticipés par le modèle nominal.