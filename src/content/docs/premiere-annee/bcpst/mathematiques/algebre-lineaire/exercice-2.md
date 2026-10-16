---
title: 'Exercice 2 : Calcul matriciel et inversibilité'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Dynamique d'une population structurée en âge et étude d'inversibilité matricielle

## Énoncé et Contexte Biologique

En écologie des populations, il est fréquent de modéliser l'évolution d'une population animale ou végétale divisée en classes d'âge. On s'intéresse ici à une espèce de gypaète barbu (*Gypaetus barbatus*), grand rapace des Pyrénées, dont le cycle de vie est simplifié en trois classes d'âge :
1. **Juvéniles** (0 à 1 an)
2. **Immaturés** (1 à 3 ans)
3. **Adultes** (plus de 3 ans)

Soit $X_n = \begin{pmatrix} J_n \\ I_n \\ A_n \end{pmatrix}$ le vecteur représentant les effectifs de chaque classe au 1er janvier de l'année $n$. La dynamique de la population est régie par un modèle de Leslie linéaire déterministe :
$$X_{n+1} = M X_n$$
où $M$ est la matrice de projection de Leslie définie par :
$$M = \begin{pmatrix} 0 & f_2 & f_3 \\ p_1 & 0 & 0 \\ 0 & p_2 & p_3 \end{pmatrix}$$
avec :
* $f_2, f_3 \ge 0$ les taux de fecundité respectifs des immaturés et des adultes.
* $p_1 \in ]0, 1[$ la probabilité de survie des juvéniles vers la classe des immaturés.
* $p_2 \in ]0, 1[$ la probabilité de survie des immaturés vers la classe des adultes.
* $p_3 \in [0, 1[$ la probabilité de survie des adultes (taux de survie interannuelle des adultes).

L'objectif de ce problème est d'étudier l'inversibilité de la matrice $M$ selon les paramètres biologiques, d'analyser le comportement asymptotique de la population, puis d'aborder les limites écologiques de ce modèle linéaire.

---

## Questions

1. **Calculs préliminaires et conditions d'inversibilité**
   1. Calculer le déterminant de la matrice $M$ en fonction des paramètres $f_2, f_3, p_1$ et $p_2$.
   2. À quelle condition nécessaire et suffisante sur les paramètres la matrice $M$ est-elle inversible ? Interpréter biologiquement cette condition.
   3. Lorsque $M$ est inversible, déterminer explicitement son inverse $M^{-1}$. Que représente cette matrice dans le contexte démographique (en simulant le "passé" de la population) ?

2. **Étude d'un cas particulier et polynôme caractéristique**
   On pose désormais $f_2 = 0$, $f_3 = 1.5$, $p_1 = 0.4$, $p_2 = 0.5$ et $p_3 = 0.8$.
   1. Écrire la matrice $M$ correspondante.
   2. Déterminer le polynôme caractéristique de $M$, noté $\chi_M(\lambda) = \det(\lambda I_3 - M)$.
   3. Montrer que $\chi_M(\lambda) = \lambda^3 - 0.8\lambda^2 - 0.3\lambda$.

3. **Diagonalisabilité et comportement asymptotique**
   1. Déterminer les valeurs propres de $M$.
   2. La matrice $M$ est-elle diagonalisable ? Justifier.
   3. Expliciter l'expression de $X_n$ en fonction de $X_0$ et des puissances des valeurs propres. Quelle est la valeur propre dominante qui dicte le comportement à long terme de la population ? Conclure quant à l'avenir de cette population.

4. **Analyse critique du modèle (Esquisse de synthèse)**
   1. Le modèle linéaire de Leslie garantit-il une croissance réaliste des effectifs lorsque $n \to +\infty$ ? 
   2. Citer deux facteurs écologiques majeurs que ce modèle simplificateur néglige, et expliquer comment les mathématiques (ou la modification du modèle) permettent de corriger ces biais.

---

## Pistes et Indications

* **Q1.1 & Q1.2 :** Développez le déterminant par rapport à la première ligne ou la première colonne. Une matrice carrée est inversible si et seulement si son déterminant est non nul.
* **Q1.3 :** Utilisez la méthode comatrice/transposée ou la résolution du système $MX = Y$. Biologiquement, inverser la matrice revient à remonter le temps, ce qui pose un problème si la survie n'est pas bijective (perte d'information).
* **Q2.2 :** Attention au signe dans le polynôme caractéristique ($\det(\lambda I - M)$).
* **Q3.1 :** Factorisez le polynôme de degré 3 en mettant $\lambda$ en facteur.
* **Q4 :** Pensez à la capacité porteuse de l'environnement (compétition intraspécifique, raréfaction des ressources).

---

## Corrigé Pas à Pas

### 1. Conditions d'inversibilité

1. Calculons le déterminant de $M$ par développement par rapport à la première ligne :
   $$\det(M) = 0 \times \dots - f_2 \det \begin{pmatrix} p_1 & 0 \\ 0 & p_3 \end{pmatrix} + f_3 \det \begin{pmatrix} p_1 & 0 \\ 0 & p_2 \end{pmatrix}$$
   $$\det(M) = -f_2 (p_1 p_3) + f_3 (p_1 p_2) = p_1 (f_3 p_2 - f_2 p_3)$$

2. Une matrice carrée est inversible si et seulement si son déterminant est non nul. Ainsi, $M$ est inversible si et seulement si :
   $$p_1 (f_3 p_2 - f_2 p_3) \neq 0$$
   Comme $p_1 > 0$ (probabilité de survie des juvéniles strictement positive), la condition se réduit à :
   $$f_3 p_2 \neq f_2 p_3 \quad \text{soit} \quad \frac{f_2}{p_2} \neq \frac{f_3}{p_3}$$
   *Interprétation biologique :* Les juvéniles proviennent de la reproduction des immaturés et des adultes. Si les taux de reproduction pondérés par la survie des deux classes sont rigoureusement égaux, la structure matricielle crée une redondance linéaire (les vecteurs colonnes liés à la reproduction sont colinéaires), ce qui empêche de remonter de manière unique aux effectifs antérieurs.

3. Si $\det(M) \neq 0$, $M^{-1}$ existe. Par la méthode de la comatrice ou par inversion directe du système $\begin{cases} f_2 I_n + f_3 A_n = J_{n+1} \\ p_1 J_n = I_{n+1} \\ p_2 I_n + p_3 A_n = A_{n+1} \end{cases}$, on trouve :
   $$M^{-1} = \frac{1}{p_1(f_3 p_2 - f_2 p_3)} \begin{pmatrix} -p_2 p_3 & f_3 p_3 - f_2 p_3 & f_2 p_2 \\ p_1 p_3 & 0 & -p_1 f_2 \\ -p_1 p_2 & -p_1 f_3 & p_1 f_2 \end{pmatrix}$$
   *Limite biologique critique :* $M^{-1}$ contient des coefficients négatifs. Mathématiquement, cela permet de "remonter le temps", mais biologiquement, cela n'a pas de sens car on ne peut pas avoir un nombre négatif d'individus dans une classe d'âge. De plus, si $p_1$ est proche de 0, les coefficients explosent, rendant le modèle rétrodictif très instable.

---

### 2. Étude du cas particulier et polynôme caractéristique

1. Avec les valeurs numériques :
   $$M = \begin{pmatrix} 0 & 0 & 1.5 \\ 0.4 & 0 & 0 \\ 0 & 0.5 & 0.8 \end{pmatrix}$$

2. Le polynôme caractéristique est $\chi_M(\lambda) = \det(\lambda I_3 - M)$ :
   $$\chi_M(\lambda) = \det \begin{pmatrix} \lambda & 0 & -1.5 \\ -0.4 & \lambda & 0 \\ 0 & -0.5 & \lambda - 0.8 \end{pmatrix}$$

3. Développons selon la première ligne :
   $$\chi_M(\lambda) = \lambda \cdot \det \begin{pmatrix} \lambda & 0 \\ -0.5 & \lambda - 0.8 \end{pmatrix} - (-1.5) \cdot \det \begin{pmatrix} -0.4 & \lambda \\ 0 & -0.5 \end{pmatrix}$$
   $$\chi_M(\lambda) = \lambda \left[ \lambda(\lambda - 0.8) \right] + 1.5 \left[ (-0.4)(-0.5) - 0 \right]$$
   $$\chi_M(\lambda) = \lambda^2(\lambda - 0.8) + 1.5 (0.2) = \lambda^3 - 0.8\lambda^2 - 0.3\lambda$$
   Le résultat est bien établi.

---

### 3. Diagonalisabilité et comportement asymptotique

1. Cherchons les racines de $\chi_M(\lambda) = 0$ :
   $$\lambda (\lambda^2 - 0.8\lambda - 0.3) = 0$$
   Une première valeur propre est $\lambda_1 = 0$.
   Pour le trinôme $P(\lambda) = \lambda^2 - 0.8\lambda - 0.3$ :
   $$\Delta = (-0.8)^2 - 4(1)(-0.3) = 0.64 + 1.2 = 1.84 > 0$$
   Les deux autres valeurs propres sont :
   $$\lambda_2 = \frac{0.8 - \sqrt{1.84}}{2} \approx 0.4 - 0.678 = -0.278$$
   $$\lambda_3 = \frac{0.8 + \sqrt{1.84}}{2} \approx 0.4 + 0.678 = 1.078$$

2. La matrice $M$ est de taille $3 \times 3$ et possède **3 valeurs propres distinctes** ($\lambda_1 = 0$, $\lambda_2 \approx -0.278$, $\lambda_3 \approx 1.078$). D'après le cours de BCPST, une matrice carrée d'ordre $n$ ayant $n$ valeurs propres distinctes est **toujours diagonalisable**.

3. Soit $P$ la matrice de passage diagonalisant $M$ et $D = \text{diag}(0, \lambda_2, \lambda_3)$. On a $X_n = M^n X_0 = P D^n P^{-1} X_0$.
   La valeur propre dominante (en module) est $\lambda_3 \approx 1.078$. 
   Puisque $\lambda_3 > 1$, les termes en $\lambda_3^n$ vont l'emporter exponentiellement sur les autres lorsque $n \to +\infty$. 
   *Conclusion écologique :* Le taux de croissance asymptotique de la population est supérieur à 1 ($1.078$), ce qui signifie que **la population est menacée d'explosion démographique exponentielle** selon ce modèle linéaire.

---

### 4. Analyse critique du modèle et limites biologiques

1. **Non-réalisme de la croissance exponentielle :** 
   Mathématiquement, le modèle linéaire conduit à une croissance $\propto \lambda_3^n \to +\infty$. Biologiquement, c'est **impossible** : l'environnement possède des ressources limitées (nourriture, sites de nidification). C'est ce qu'on appelle la *capacité porteuse* du milieu ($K$).

2. **Facteurs négligés :**
   * **La densité-dépendance :** Les taux de survie ($p_i$) et de fécondité ($f_i$i) ne sont pas constants ; ils diminuent lorsque la densité de population augmente (compétition intraspécifique).
   * **La stochasticité environnementale :** Les paramètres varient d'une année sur l'autre en raison de aléas climatiques ou anthropiques (canicules, tirs, raréfaction soudaine des proies).
   * *Correction :* Pour y remédier, on utilise des modèles non linéaires (type équation logistique matricielle ou modèles de Leslie densité-dépendants où $M = M(X_n)$) ou des matrices de Leslie stochastiques (chaînes de Markov).