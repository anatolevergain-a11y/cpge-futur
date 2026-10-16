---
title: 'Exercice 1 : Chaînes de Markov'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude d'une chaîne de Markov à espace d'états fini et application

*En tant qu'examinateur de CPGE (filière MP), je propose ici un problème classique mais exigeant, combinant algèbre linéaire et probabilités discrètes. L'accent est mis sur la rigueur de la rédaction, l'utilisation des outils matriciels et l'interprétation des résultats asymptotiques.*

---

## Préambule et Notations

Soit $N \ge 2$ un entier fixé. On considère un système évoluant au cours du temps discret $n \in \mathbb{N}$. L'état du système à l'instant $n$ est modélisé par une variable aléatoire $X_n$ prenant ses valeurs dans l'ensemble fini E = $\{1, 2, \dots, N\}$. 

On suppose que la suite de variables aléatoires $(X_n)_{n \in \mathbb{N}}$ forme une chaîne de Markov homogène de matrice de transition $P = (p_{i,j})_{1 \le i,j \le N}$, définie par :
$$p_{i,j} = \mathbb{P}(X_{n+1} = j \mid X_n = i)$$

On rappelle qu'une loi de probabilité sur $E$ est représentée par un vecteur ligne $\mu = (\mu_1, \mu_2, \dots, \mu_N) \in \mathcal{M}_{1,N}(\mathbb{R})$ tel que $\mu_i \ge 0$ pour tout $i$ et $\sum_{i=1}^N \mu_i = 1$. La loi de $X_n$ est notée $\mu^{(n)} = (\mathbb{P}(X_n = 1), \dots, \mathbb{P}(X_n = N))$.

---

## Partie I : Propriétés générales et évolution temporelle

**1.** Exprimer la loi $\mu^{(n+1)}$ en fonction de $\mu^{(n)}$ et de la matrice de transition $P$. En déduire l'expression de $\mu^{(n)}$ en fonction de la loi initiale $\mu^{(0)}$ et de $P^n$.

*Corrigé :*
D'après la formule des probabilités totales, pour tout $j \in E$ :
$$\mathbb{P}(X_{n+1} = j) = \sum_{i=1}^N \mathbb{P}(X_{n+1} = j \mid X_n = i)\mathbb{P}(X_n = i) = \sum_{i=1}^N \mu_i^{(n)} p_{i,j}$$
Sous forme matricielle, cela se traduit par :
$$\mu^{(n+1)} = \mu^{(n)} P$$
Par une récurrence immédiate sur $n$, on en déduit que :
$$\mu^{(n)} = \mu^{(0)} P^n$$

**2.** Soit $\mathbf{1} = \begin{pmatrix} 1 \\ 1 \\ \vdots \\ 1 \end{pmatrix} \in \mathcal{M}_{N,1}(\mathbb{R})$ le vecteur colonne dont toutes les composantes valent $1$. Montrer que $P\mathbf{1} = \mathbf{1}$. Interpréter ce résultat probabilistiquement.

*Corrigé :*
Par définition d'une matrice de transition, la somme des coefficients de chaque ligne vaut $1$ (car la somme des probabilités de transition depuis un état $i$ vers tous les autres états est égale à $1$). Ainsi, pour tout $i \in E$ :
$$\sum_{j=1}^N p_{i,j} = 1$$
Matriciellement, cela s'écrit $P\mathbf{1} = \mathbf{1}$. 
*Interprétation :* Le vecteur $\mathbf{1}$ est un vecteur propre de $P$ associé à la valeur propre $1$. Cela traduit le fait que la somme des probabilités d'être dans l'un des états à l'instant $n+1$ est conservée et vaut $1$ si elle valait $1$ à l'instant $n$.

---

## Partie II : Étude d'un modèle particulier d'ordre $2$ ($N=3$)

On pose $N = 3$ et on considère la matrice de transition $P$ suivante :
$$P = \begin{pmatrix} 
0 & 1 & 0 \\ 
\frac{1}{2} & 0 & \frac{1}{2} \\ 
0 & 1 & 0 
\end{pmatrix}$$

**3.** Vérifier que $P$ est bien une matrice de transition. La chaîne est-elle irréductible ?

*Corrigé :*
* Les coefficients de $P$ sont tous positifs ou nuls.
* La somme des lignes vaut $(0+1+0) = 1$, $(\frac{1}{2}+0+\frac{1}{2}) = 1$ et $(0+1+0) = 1$. $P$ est donc bien une matrice de transition.
* *Irréductibilité :* Depuis l'état $1$, on va en $2$ ($p_{1,2}=1$). Depuis $2$, on peut aller en $1$ ou $3$ ($p_{2,1} > 0, p_{2,3} > 0$). Depuis $3$, on va en $2$ ($p_{3,2}=1$). Tous les états communiquent entre eux. La chaîne est donc irréductible.

**4.** Déterminer les valeurs propres de $P$ en résolvant l'équation caractéristique $\det(P - \lambda I_3) = 0$.

*Corrigé :*
Calculons le polynôme caractéristique $P(\lambda) = \det(P - \lambda I_3)$ :
$$P(\lambda) = \det \begin{pmatrix} 
-\lambda & 1 & 0 \\ 
\frac{1}{2} & -\lambda & \frac{1}{2} \\ 
0 & 1 & -\lambda 
\end{pmatrix}$$
En développant par rapport à la première ligne :
$$P(\lambda) = -\lambda \left( \lambda^2 - \frac{1}{2} \right) - 1 \left( -\frac{\lambda}{2} \right) = -\lambda^3 + \frac{\lambda}{2} + \frac{\lambda}{2} = -\lambda^3 + \lambda = -\lambda(\lambda - 1)(\lambda + 1)$$
Les valeurs propres de $P$ sont donc $\lambda_1 = 1$, $\lambda_2 = 0$ et $\lambda_3 = -1$.

**5.** Diagonaliser la matrice $P$. En déduire l'expression générale de $P^n$ pour $n \in \mathbb{N}$.

*Corrigé :*
* **Pour $\lambda_1 = 1$** : Soit $X = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$ tel que $PX = X$. On obtient le système :
  $$\begin{cases} y = x \\ \frac{1}{2}x + \frac{1}{2}z = y \\ y = z \end{cases} \implies x = y = z$$
  On choisit le vecteur propre $V_1 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$.

* **Pour $\lambda_2 = 0$** : 
  $$\begin{cases} y = 0 \\ \frac{1}{2}x + \frac{1}{2}z = 0 \\ y = 0 \end{cases} \implies z = -x$$
  On choisit le vecteur propre $V_2 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$.

* **Pour $\lambda_3 = -1$** : 
  $$\begin{cases} -x = -y \implies x=y \\ \frac{1}{2}x + \frac{1}{2}z = -y \\ -z = -y \implies z=y \end{cases} \implies x = y = z = -1 \text{ (par ex)}$$
  On choisit le vecteur propre $V_3 = \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}$.

La matrice de passage $Q = \begin{pmatrix} V_1 & V_2 & V_3 \end{pmatrix}$ est :
$$Q = \begin{pmatrix} 
1 & 1 & 1 \\ 
1 & 0 & -1 \\ 
1 & -1 & 1 
\end{pmatrix}$$
Son inverse se calcule (par exemple par la méthode des cofacteurs ou du pivot) :
$$Q^{-1} = \frac{1}{2} \begin{pmatrix} 
1 & 2 & 1 \\ 
2 & 0 & -2 \\ 
1 & -2 & 1 
\end{pmatrix}$$
On a alors $P = Q D Q^{-1}$ avec $D = \text{diag}(1, 0, -1)$. Ainsi, pour tout $n \in \mathbb{N}$ :
$$P^n = Q D^n Q^{-1} = Q \begin{pmatrix} 
1 & 0 & 0 \\ 
0 & 0 & 0 \\ 
0 & 0 & (-1)^n 
\end{pmatrix} Q^{-1}$$

**6.** La suite de matrices $(P^n)_{n \in \mathbb{N}}$ converge-t-elle lorsque $n \to +\infty$ ? Conclure quant au comportement de la loi $\mu^{(n)}$.

*Corrigé :*
Le terme $(-1)^n$ diverge en oscillant entre $-1$ et $1$ lorsque $n \to +\infty$. Par conséquent, la suite de matrices $(P^n)_{n \in \mathbb{N}}$ **ne converge pas**.
Cependant, si l'on regarde la moyenne de Cesaro $\frac{1}{n}\sum_{k=0}^{n-1} P^k$ ou si l'on analyse l'état initial, la chaîne est dite *périodique* (de période 2). La loi $\mu^{(n)}$ n'admet pas de limite stationnaire unique indépendante de $\mu^{(0)}$; elle oscille selon la parité de $n$.

---

## Partie III : Analyse critique et aspects probabilistes avancés

**7.** Soit $\pi = (\pi_1, \pi_2, \pi_3)$ une loi stationnaire de la chaîne, c'est-à-dire un vecteur de probabilité tel que $\pi = \pi P$. Déterminer $\pi$.

*Corrigé :*
On résout le système $\pi P = \pi$ avec la contrainte $\pi_1 + \pi_2 + \pi_3 = 1$ :
$$\begin{pmatrix} \pi_1 & \pi_2 & \pi_3 \end{pmatrix} \begin{pmatrix} 
0 & 1 & 0 \\ 
\frac{1}{2} & 0 & \frac{1}{2} \\ 
0 & 1 & 0 
\end{pmatrix} = \begin{pmatrix} \pi_1 & \pi_2 & \pi_3 \end{pmatrix}$$
Ce qui donne :
$$\begin{cases} 
\frac{1}{2}\pi_2 = \pi_1 \\ 
\pi_1 + \pi_3 = \pi_2 \\ 
\frac{1}{2}\pi_2 = \pi_3 
\end{cases}$$
On en déduit que $\pi_1 = \pi_3 = \frac{1}{2}\pi_2$. En utilisant la condition de normalisation $\pi_1 + \pi_2 + \pi_3 = 1$ :
$$\frac{1}{2}\pi_2 + \pi_2 + \frac{1}{2}\pi_2 = 1 \implies 2\pi_2 = 1 \implies \pi_2 = \frac{1}{2}$$
Ainsi, la unique loi stationnaire est :
$$\pi = \left( \frac{1}{4}, \frac{1}{2}, \frac{1}{4} \right)$$

**8.** Analyste critique (Question type oral de concours) : 
*Bien que la matrice $P^n$ ne converge pas, nous avons trouvé une unique loi stationnaire $\pi$. Le théorème ergodique usuel (convergence de $\mu^{(n)}$ vers $\pi$ pour toute loi initiale $\mu^{(0)}$) s'applique-t-il ici ? Justifier soigneusement.*

*Corrigé de l'examinateur :*
Le théorème de convergence ergodique standard pour les chaînes de Markov homogènes à espace d'états fini requiert deux hypothèses fondamentales :
1. **L'irréductibilité** (vérifiée ici : tous les états communiquent).
2. **L'apériodicité** (non vérifiée ici). 

En effet, observons la matrice $P$ : depuis l'état $1$, on ne peut aller en $2$ qu'en un temps impair ($1$ étape), et pour revenir en $1$, il faut repasser par $2$ (donc $2$ étapes). La période de chaque état est $2$. La chaîne est périodique. 
Par conséquent, $P^n$ alterne entre deux formes distinctes selon que $n$ est pair ou impair. La limite $\lim_{n \to +\infty} \mu^{(n)}$ n'existe pas en général, car elle dépend de la parité de l'état initial $\mu^{(0)}$. 
Cependant, la loi stationnaire $\pi = (\frac{1}{4}, \frac{1}{2}, \frac{1}{4})$ représente la proportion moyenne de long terme du temps passé dans chaque état (moyenne de Cesaro), ce qui illustre la nuance subtile entre convergence simple de la loi et ergodicité en moyenne.